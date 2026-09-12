/* Minimal Markdown + KaTeX renderer.
   Math and code are lifted out before any HTML escaping so that
   `$a < b$` and `$x \le y$` survive intact. */

const OPEN = '', CLOSE = '';

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderMath(src, display) {
  if (typeof katex === 'undefined') return '<code class="math-raw">' + escapeHtml(src) + '</code>';
  try {
    return katex.renderToString(src, {
      displayMode: display,
      throwOnError: false,
      strict: false,
      macros: { '\\deg': '\\operatorname{deg}', '\\lcm': '\\operatorname{lcm}' },
    });
  } catch (e) {
    return '<code class="math-raw">' + escapeHtml(src) + '</code>';
  }
}

function inline(text) {
  return escapeHtml(text)
    .replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(])\*([^*\n]+)\*/g, '$1<em>$2</em>')
    .replace(/(^|[\s(])_([^_\n]+)_/g, '$1<em>$2</em>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, t, u) =>
      /^(https?:)?\/\//.test(u)
        ? `<a href="${u}" target="_blank" rel="noopener noreferrer">${t}<span class="ext">↗</span></a>`
        : `<a href="${u}">${t}</a>`);
}

/* ---- block level ---- */

function listBlock(lines, i, ordered) {
  const items = [];
  const marker = ordered ? /^(\s*)\d+[.)]\s+(.*)$/ : /^(\s*)[-*+]\s+(.*)$/;
  const anyMarker = /^(\s*)([-*+]|\d+[.)])\s+/;
  let baseIndent = null;

  while (i < lines.length) {
    const line = lines[i];
    const m = line.match(marker);
    const any = line.match(anyMarker);
    const indent = any ? any[1].length : -1;

    if (m && (baseIndent === null || indent <= baseIndent)) {
      if (baseIndent === null) baseIndent = indent;
      if (indent < baseIndent) break;
      items.push(inline(m[2]));
      i++;
      continue;
    }
    if (any && items.length && indent >= baseIndent + 2) {
      // nested list of either kind: dedent and recurse
      const cut = indent;
      const sub = [];
      while (i < lines.length &&
             (anyMarker.test(lines[i]) || /^\s*\S/.test(lines[i])) &&
             lines[i].search(/\S/) >= cut) {
        sub.push(lines[i].slice(cut));
        i++;
      }
      items[items.length - 1] += blocks(sub);
      continue;
    }
    if (!any && /^\s{2,}\S/.test(line) && items.length) {
      items[items.length - 1] += ' ' + inline(line.trim());
      i++;
      continue;
    }
    break;
  }
  const tag = ordered ? 'ol' : 'ul';
  return [`<${tag}>` + items.map(t => `<li>${t}</li>`).join('') + `</${tag}>`, i];
}

function tableBlock(lines, i) {
  const rows = [];
  while (i < lines.length && /^\s*\|/.test(lines[i])) { rows.push(lines[i].trim()); i++; }
  if (rows.length < 2) return [rows.map(r => `<p>${inline(r)}</p>`).join(''), i];
  const cells = r => r.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
  const head = cells(rows[0]);
  const body = rows.slice(2).map(cells);
  let html = '<div class="table-wrap"><table><thead><tr>' +
    head.map(h => `<th>${inline(h)}</th>`).join('') + '</tr></thead><tbody>';
  for (const row of body) {
    html += '<tr>' + row.map(c => `<td>${inline(c)}</td>`).join('') + '</tr>';
  }
  return [html + '</tbody></table></div>', i];
}

function blocks(lines) {
  let out = '', i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) { i++; continue; }

    let m;
    if ((m = line.match(/^(#{1,6})\s+(.*)$/))) {
      const lvl = m[1].length;
      const text = m[2].trim();
      const slug = text.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-|-$/g, '');
      out += `<h${lvl} id="h-${slug}">${inline(text)}</h${lvl}>`;
      i++; continue;
    }
    if (/^\s*([-*_])\s*\1\s*\1[\s\-*_]*$/.test(line)) { out += '<hr>'; i++; continue; }
    if (/^\s*[-*+]\s+/.test(line)) { const [h, ni] = listBlock(lines, i, false); out += h; i = ni; continue; }
    if (/^\s*\d+[.)]\s+/.test(line)) { const [h, ni] = listBlock(lines, i, true); out += h; i = ni; continue; }
    if (/^\s*\|/.test(line)) { const [h, ni] = tableBlock(lines, i); out += h; i = ni; continue; }
    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) { buf.push(lines[i].replace(/^>\s?/, '')); i++; }
      out += '<blockquote>' + blocks(buf) + '</blockquote>';
      continue;
    }
    // paragraph
    const buf = [];
    while (i < lines.length && lines[i].trim() &&
           !/^(#{1,6}\s|\s*[-*+]\s|\s*\d+[.)]\s|>\s?|\s*\|)/.test(lines[i]) &&
           !/^\s*([-*_])\s*\1\s*\1[\s\-*_]*$/.test(lines[i])) {
      buf.push(lines[i]); i++;
    }
    if (buf.length) out += `<p>${inline(buf.join('\n'))}</p>`;
    else i++;
  }
  return out;
}

export function md(src) {
  if (!src) return '';
  const vault = [];
  const blockIdx = new Set();
  const stash = (html, isBlock) => {
    vault.push(html);
    if (isBlock) blockIdx.add(vault.length - 1);
    return OPEN + (vault.length - 1) + CLOSE;
  };

  let text = src.replace(/\r\n/g, '\n');

  // 1. fenced blocks — ```svg passes through as a figure, everything else is code
  text = text.replace(/```([\w-]*)\n([\s\S]*?)```/g, (m, lang, body) => {
    if (lang === 'svg') return stash(`<figure class="fig">${body}</figure>`, true);
    return stash(`<pre class="code"><code>${escapeHtml(body.replace(/\n$/, ''))}</code></pre>`, true);
  });
  // 2. display math  $$...$$
  text = text.replace(/\$\$([\s\S]+?)\$\$/g, (m, body) =>
    stash(`<div class="math-display">${renderMath(body.trim(), true)}</div>`, true));
  // 3. inline math  $...$   (ignores escaped \$ and bare currency)
  text = text.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$(?!\d)/g, (m, pre, body) =>
    pre + stash(renderMath(body, false)));
  // 4. inline code
  text = text.replace(/`([^`\n]+)`/g, (m, body) => stash(`<code>${escapeHtml(body)}</code>`));

  let html = blocks(text.split('\n'));

  // a paragraph holding nothing but a block-level placeholder should not be a paragraph
  html = html.replace(new RegExp('<p>(' + OPEN + '(\\d+)' + CLOSE + ')</p>', 'g'),
    (m, ph, n) => (blockIdx.has(+n) ? ph : m));

  // restore, innermost first
  for (let pass = 0; pass < 4; pass++) {
    html = html.replace(new RegExp(OPEN + '(\\d+)' + CLOSE, 'g'), (m, n) => vault[+n]);
  }
  return html;
}

/* Strip markup for search indexing / previews. */
export function plain(src) {
  return (src || '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\$[^\n$]*\$/g, ' ')
    .replace(/[#*_>`|]/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}
