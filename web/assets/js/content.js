/* Loads and parses the chapter markdown files listed in content/manifest.json. */

import { plain } from './md.js?v=c9f6e661';

const cache = new Map();

export const library = {
  manifest: null,
  sections: [],
  chapters: [],          // flat, in study order
  byId: new Map(),
  papers: [],
};

export async function loadLibrary() {
  const res = await fetch('content/manifest.json', { cache: 'no-store' });
  const manifest = await res.json();
  library.manifest = manifest;
  library.sections = manifest.sections;
  library.chapters = [];
  library.byId = new Map();
  for (const sec of manifest.sections) {
    for (const ch of sec.chapters) {
      const entry = { ...ch, sectionId: sec.id, sectionTitle: sec.title, sectionIcon: sec.icon };
      library.chapters.push(entry);
      library.byId.set(entry.id, entry);
    }
  }
  library.papers = manifest.papers || [];
  library.plan = manifest.plan || [];
  return library;
}

/* ---------- chapter file parsing ---------- */

function parseFrontMatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return [{}, raw];
  const meta = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/);
    if (!kv) continue;
    const [, k, v] = kv;
    if (k === 'video' || k === 'sheet' || k === 'link') {
      const [label, url] = v.split('::').map(s => s.trim());
      (meta[k + 's'] ||= []).push({ label, url });
    } else if (k === 'tags' || k === 'prereqs') {
      meta[k] = v.split(',').map(s => s.trim()).filter(Boolean);
    } else {
      meta[k] = v.trim();
    }
  }
  return [meta, raw.slice(m[0].length)];
}

const DIFF_ORDER = { Warmup: 0, Easy: 1, Medium: 2, Hard: 3, Brutal: 4 };

function parseProblems(block, chapterId) {
  const out = [];
  if (!block) return out;
  const chunks = block.split(/\n(?=###\s)/);
  for (const chunk of chunks) {
    const head = chunk.match(/^###\s+(.*)$/m);
    if (!head) continue;
    const parts = head[1].split('|').map(s => s.trim());
    const label = parts[0] || `P${out.length + 1}`;
    const difficulty = parts[1] || 'Medium';
    const source = parts[2] || '';
    let body = chunk.slice(chunk.indexOf('\n') + 1);

    let hint = '', sol = '';
    body = body.replace(/\[hint\]\n?([\s\S]*?)\n?\[\/hint\]/g, (m, h) => { hint = h.trim(); return ''; });
    body = body.replace(/\[sol\]\n?([\s\S]*?)\n?\[\/sol\]/g, (m, s) => { sol = s.trim(); return ''; });

    out.push({
      id: `${chapterId}#${label}`,
      label, difficulty, source,
      diffRank: DIFF_ORDER[difficulty] ?? 2,
      statement: body.trim(),
      hint, solution: sol,
      chapterId,
      search: plain(body + ' ' + source + ' ' + label).toLowerCase(),
    });
  }
  return out;
}

function splitSections(body) {
  // Everything up to "## Problems" is study material; the rest are problems.
  const idx = body.search(/^##\s+Problems\s*$/m);
  if (idx === -1) return [body, ''];
  const after = body.slice(idx);
  return [body.slice(0, idx), after.slice(after.indexOf('\n') + 1)];
}

export async function loadChapter(id) {
  if (cache.has(id)) return cache.get(id);
  const entry = library.byId.get(id);
  if (!entry) throw new Error(`Unknown chapter: ${id}`);

  const res = await fetch('content/' + entry.file, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Could not load ${entry.file}`);
  const raw = await res.text();

  const [meta, body] = parseFrontMatter(raw);
  const [study, problemBlock] = splitSections(body);
  const problems = parseProblems(problemBlock, id);

  const chapter = {
    ...entry, ...meta, id,
    study,
    problems,
    searchText: plain(study).toLowerCase(),
  };
  cache.set(id, chapter);
  return chapter;
}

/* Load every chapter (used by search and the problem bank). */
let allPromise = null;
export function loadAll() {
  if (!allPromise) {
    allPromise = Promise.all(library.chapters.map(c => loadChapter(c.id).catch(err => {
      console.warn('chapter failed', c.id, err);
      return { ...c, study: '', problems: [], searchText: '', broken: true };
    })));
  }
  return allPromise;
}
