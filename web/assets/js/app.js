import { md, plain } from './md.js';
import { store, STATUSES } from './store.js';
import { library, loadLibrary, loadChapter, loadAll } from './content.js';

const EXAM_DATE = new Date('2026-11-15T13:00:00+05:30');
const $ = s => document.querySelector(s);
const view = () => $('#view');

const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const statusOf = id => STATUSES.find(s => s.id === id) || STATUSES[0];

function toast(msg) {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1900);
}

function daysLeft() {
  return Math.max(0, Math.ceil((EXAM_DATE - new Date()) / 86400000));
}

function debounce(fn, ms) {
  let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
}

/* ===================== progress helpers ===================== */

let ALL = null;                       // all chapters, loaded once
const problemsOf = ch => ch.problems || [];

function sectionStats(sectionId) {
  if (!ALL) return null;
  const ids = ALL.filter(c => c.sectionId === sectionId).flatMap(c => problemsOf(c).map(p => p.id));
  return store.statsFor(ids);
}

function barHTML(st) {
  if (!st || !st.total) return '<div class="bar"></div>';
  const pc = n => (n / st.total * 100).toFixed(2) + '%';
  return `<div class="bar">
    <i class="b-solved" style="width:${pc(st.solved)}"></i>
    <i class="b-hinted" style="width:${pc(st.hinted)}"></i>
    <i class="b-tried"  style="width:${pc(st.tried)}"></i>
    <i class="b-stuck"  style="width:${pc(st.stuck)}"></i>
  </div>`;
}

/* ===================== sidebar ===================== */

function renderSidebar() {
  const d = daysLeft();
  $('#countdown').innerHTML =
    `<span class="countdown-num">${d}</span>
     <span class="countdown-txt">days to RMO<br>${d > 7 ? Math.ceil(d / 7) + ' weeks left' : 'final stretch'}</span>`;

  const hash = location.hash || '#/';
  const item = (href, ico, label, count) => `
    <a class="nav-item ${hash === href || hash.startsWith(href + '/') ? 'active' : ''}" href="${href}">
      <span class="ico">${ico}</span><span>${label}</span>
      ${count != null ? `<span class="cnt">${count}</span>` : ''}
    </a>`;

  let html = `<div class="nav-group">
    ${item('#/', '◈', 'Dashboard')}
    ${item('#/plan', '◷', 'The 9-week plan')}
    ${item('#/bank', '≣', 'Problem bank')}
    ${item('#/papers', '▤', 'Past papers')}
    ${item('#/notes', '✎', 'Notes')}
  </div>`;

  html += '<div class="nav-group"><div class="nav-label">Syllabus</div>';
  for (const sec of library.sections) {
    const st = sectionStats(sec.id);
    const label = st && st.total ? `${st.done}/${st.total}` : sec.chapters.length + 'ch';
    html += item(`#/section/${sec.id}`, sec.icon, sec.title, label);
  }
  html += '</div>';
  $('#nav').innerHTML = html;
}

/* ===================== views ===================== */

function viewDashboard() {
  const d = daysLeft();
  const all = ALL || [];
  const allIds = all.flatMap(c => problemsOf(c).map(p => p.id));
  const st = store.statsFor(allIds);
  const flagged = allIds.filter(id => store.problem(id).flagged);
  const chaptersRead = Object.values(store.state.chapters).filter(c => c.read).length;

  const week = currentWeek();
  const sectionCards = library.sections.map(sec => {
    const s = sectionStats(sec.id) || { total: 0, done: 0, pct: 0 };
    return `<a class="link-row" href="#/section/${sec.id}">
      <span style="font-size:15px;width:20px;text-align:center">${sec.icon}</span>
      <span class="grow">
        <div style="display:flex;gap:8px;align-items:baseline">
          <b style="font-size:13.5px">${esc(sec.title)}</b>
          <span class="sub">${s.done}/${s.total} problems · ${sec.chapters.length} chapters</span>
          <span style="margin-left:auto;font-size:12px;color:var(--text-faint);font-variant-numeric:tabular-nums">${s.pct}%</span>
        </div>
        <div style="margin-top:6px">${barHTML(s)}</div>
      </span>
    </a>`;
  }).join('');

  const recent = Object.entries(store.state.problems)
    .filter(([, v]) => v.updated)
    .sort((a, b) => (b[1].updated || '').localeCompare(a[1].updated || ''))
    .slice(0, 6)
    .map(([id, v]) => {
      const p = findProblem(id);
      if (!p) return '';
      const s = statusOf(v.status);
      return `<a class="link-row" href="#/chapter/${p.chapterId}?p=${encodeURIComponent(id)}">
        <span class="status-btn ${s.cls}" style="pointer-events:none"><span class="dot"></span>${s.label}</span>
        <span class="grow"><b style="font-size:13px">${esc(p.label)}</b>
          <span class="sub"> · ${esc(chapterTitle(p.chapterId))}</span></span>
      </a>`;
    }).join('');

  view().innerHTML = `<div class="page">
    <div class="page-head">
      <div class="eyebrow">Dashboard</div>
      <h1 class="page-title">${greeting()} — ${d} days to RMO 2026</h1>
      <p class="page-lede">Six proof problems, three hours, Sunday 15 November. Everything you need is in this app:
      theory, worked examples, graded problem sets, and every official past paper.</p>
    </div>

    <div class="grid grid-4" style="margin-bottom:18px">
      <div class="card stat">
        <div class="stat-num" style="color:var(--ok)">${st.done}</div>
        <div class="stat-lbl">problems solved</div>
        <div class="stat-sub">${st.solved} clean · ${st.hinted} with a hint</div>
      </div>
      <div class="card stat">
        <div class="stat-num">${st.pct}<span style="font-size:16px;color:var(--text-faint)">%</span></div>
        <div class="stat-lbl">of ${st.total} problems</div>
        <div class="stat-sub" style="margin-top:8px">${barHTML(st)}</div>
      </div>
      <div class="card stat">
        <div class="stat-num" style="color:var(--accent)">${chaptersRead}<span style="font-size:16px;color:var(--text-faint)">/${all.length}</span></div>
        <div class="stat-lbl">chapters marked read</div>
        <div class="stat-sub">${st.tried + st.stuck} problems still open</div>
      </div>
      <div class="card stat">
        <div class="stat-num" style="color:var(--violet)">${flagged.length}</div>
        <div class="stat-lbl">flagged for revision</div>
        <div class="stat-sub">${flagged.length ? '<a href="#/bank?flagged=1">review them →</a>' : 'flag hard ones with ⚑'}</div>
      </div>
    </div>

    <div class="grid grid-2" style="margin-bottom:18px">
      <div class="card">
        <div class="card-title">This week · ${week ? 'Week ' + week.week : 'Plan'}</div>
        ${week ? `
          <div style="font-size:16px;font-weight:700;margin-bottom:4px">${esc(week.title)}</div>
          <div style="font-size:12px;color:var(--text-faint);margin-bottom:12px">${esc(week.dates)}</div>
          <div class="prose" style="font-size:14.5px;font-family:var(--sans)">${md(week.focus)}</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:12px">
            ${(week.chapters || []).map(id => `<a class="chip accent" href="#/chapter/${id}">${esc(chapterTitle(id))}</a>`).join('')}
          </div>` : '<p style="color:var(--text-dim)">See the full plan.</p>'}
        <div style="margin-top:14px"><a href="#/plan">Open the full 9-week plan →</a></div>
      </div>
      <div class="card">
        <div class="card-title">Progress by area</div>
        ${sectionCards}
      </div>
    </div>

    <div class="card">
      <div class="card-title">Recently worked on</div>
      ${recent || '<div class="empty" style="padding:24px"><div class="big">◷</div>Nothing yet. Start with <a href="#/chapter/tool-01-proof-writing">how to write a proof that scores</a>.</div>'}
    </div>
  </div>`;
}

function greeting() {
  const h = new Date().getHours();
  return h < 5 ? 'Late night' : h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
}

function chapterTitle(id) {
  const c = library.byId.get(id);
  return c ? c.title : id;
}

function findProblem(pid) {
  if (!ALL) return null;
  const chId = pid.split('#')[0];
  const ch = ALL.find(c => c.id === chId);
  return ch ? problemsOf(ch).find(p => p.id === pid) : null;
}

function currentWeek() {
  const today = new Date().toISOString().slice(0, 10);
  const weeks = library.plan || [];
  return weeks.find(w => today >= w.start && today <= w.end) || weeks[0];
}

/* ---------- plan ---------- */

function viewPlan() {
  const today = new Date().toISOString().slice(0, 10);
  const weeks = library.plan || [];
  const cards = weeks.map(w => {
    const state = today > w.end ? 'past' : (today >= w.start ? 'now' : '');
    const ids = (w.chapters || []).flatMap(id => {
      const ch = ALL && ALL.find(c => c.id === id);
      return ch ? problemsOf(ch).map(p => p.id) : [];
    });
    const st = store.statsFor(ids);
    return `<div class="week ${state}">
      <div class="week-head">
        <div class="week-num">${w.week}</div>
        <div>
          <div class="week-title">${esc(w.title)}</div>
          <div class="week-dates">${esc(w.dates)}${state === 'now' ? ' · you are here' : ''}</div>
        </div>
        <div style="margin-left:auto;text-align:right;min-width:120px">
          <div style="font-size:11.5px;color:var(--text-faint);margin-bottom:5px">${st.done}/${st.total} problems</div>
          ${barHTML(st)}
        </div>
      </div>
      <div class="week-body">
        <div class="prose" style="font-family:var(--sans);font-size:14.5px;max-width:none">${md(w.focus)}</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:12px">
          ${(w.chapters || []).map(id => `<a class="chip ${state === 'now' ? 'accent' : ''}" href="#/chapter/${id}">${esc(chapterTitle(id))}</a>`).join('')}
        </div>
      </div>
    </div>`;
  }).join('');

  view().innerHTML = `<div class="page">
    <div class="page-head">
      <div class="eyebrow">Roadmap</div>
      <h1 class="page-title">The 9-week plan to RMO 2026</h1>
      <p class="page-lede">Built backwards from 15 November. Number theory and algebra come first because
      they convert fastest into full marks; geometry runs as a parallel track from day one because it is the
      slowest skill to build. Two full mocks in the last fortnight.</p>
    </div>
    <div id="planDoc"></div>
    ${cards}
  </div>`;

  fetch('content/plan/how-to-use.md', { cache: 'no-store' })
    .then(r => r.ok ? r.text() : '')
    .then(t => { if (t) $('#planDoc').innerHTML = `<div class="card" style="margin-bottom:20px"><div class="prose" style="max-width:none">${md(t.replace(/^---[\s\S]*?---\n/, ''))}</div></div>`; })
    .catch(() => {});
}

/* ---------- section ---------- */

function viewSection(id) {
  const sec = library.sections.find(s => s.id === id);
  if (!sec) return viewNotFound();
  const rows = sec.chapters.map(c => {
    const ch = ALL && ALL.find(x => x.id === c.id);
    const st = store.statsFor(ch ? problemsOf(ch).map(p => p.id) : []);
    const read = store.chapter(c.id).read;
    return `<a class="link-row" href="#/chapter/${c.id}" style="padding:13px 15px">
      <span style="width:22px;text-align:center;color:${read ? 'var(--ok)' : 'var(--text-faint)'};font-size:14px">${read ? '✓' : '○'}</span>
      <span class="grow">
        <div style="display:flex;align-items:baseline;gap:9px;flex-wrap:wrap">
          <b style="font-size:14.5px">${esc(c.title)}</b>
          <span class="chip ghost">${esc(c.level || '')}</span>
          <span style="margin-left:auto;font-size:12px;color:var(--text-faint);font-variant-numeric:tabular-nums">${st.done}/${st.total}</span>
        </div>
        <div class="sub" style="margin:4px 0 7px">${esc(c.blurb || '')}</div>
        ${barHTML(st)}
      </span>
    </a>`;
  }).join('');

  const st = sectionStats(id) || {};
  view().innerHTML = `<div class="page">
    <div class="page-head">
      <div class="eyebrow">${esc(sec.icon)} Syllabus area</div>
      <h1 class="page-title">${esc(sec.title)}</h1>
      <p class="page-lede">${esc(sec.blurb || '')}</p>
      <div class="meta-row">
        <span class="chip">${sec.chapters.length} chapters</span>
        <span class="chip">${st.total || 0} problems</span>
        <span class="chip ${st.pct >= 60 ? 'accent' : ''}">${st.pct || 0}% done</span>
        <span class="chip">≈ ${esc(sec.weight || '')}</span>
      </div>
    </div>
    ${rows}
  </div>`;
}

/* ---------- chapter ---------- */

const filters = { diff: 'all', status: 'all' };

async function viewChapter(id, query) {
  view().innerHTML = '<div class="page"><div class="empty">Loading…</div></div>';
  let ch;
  try { ch = await loadChapter(id); } catch (e) { return viewNotFound(e.message); }

  const chState = store.chapter(id);
  const resources = [...(ch.videos || []).map(v => ({ ...v, ico: '▶', kind: 'Video' })),
                     ...(ch.sheets || []).map(v => ({ ...v, ico: '▤', kind: 'Sheet' })),
                     ...(ch.links || []).map(v => ({ ...v, ico: '↗', kind: 'Reading' }))];

  view().innerHTML = `<div class="page wide">
    <div class="chapter-layout">
      <div>
        <div class="page-head">
          <div class="eyebrow">${esc(ch.sectionIcon || '')} ${esc(ch.sectionTitle)}</div>
          <h1 class="page-title">${esc(ch.title)}</h1>
          <p class="page-lede">${esc(ch.blurb || '')}</p>
          <div class="meta-row">
            <span class="chip">${esc(ch.level || 'Core')}</span>
            ${ch.hours ? `<span class="chip">≈ ${esc(ch.hours)} h</span>` : ''}
            <span class="chip">${ch.problems.length} problems</span>
            ${(ch.tags || []).map(t => `<span class="chip ghost">${esc(t)}</span>`).join('')}
            <button class="chip ${chState.read ? 'accent' : ''}" id="readBtn">${chState.read ? '✓ read' : 'mark as read'}</button>
          </div>
        </div>
        <div class="prose" id="study">${md(ch.study)}</div>

        <div class="problems-head">
          <h2>Problems</h2>
          <span class="chip" id="probCount"></span>
          <div class="filter-row" id="filters">
            ${['all', 'Warmup', 'Easy', 'Medium', 'Hard', 'Brutal'].map(d =>
              `<button class="filter-btn ${filters.diff === d ? 'on' : ''}" data-diff="${d}">${d === 'all' ? 'All levels' : d}</button>`).join('')}
            <button class="filter-btn ${filters.status === 'open' ? 'on' : ''}" data-status="open">Unsolved only</button>
          </div>
        </div>
        <div id="problems"></div>

        <div class="card" style="margin-top:34px">
          <div class="card-title">✎ Your notes on this chapter</div>
          <textarea class="note" id="chNote" style="min-height:130px"
            placeholder="Key ideas, the trick you keep forgetting, your own worked example…">${esc(chState.note || '')}</textarea>
        </div>
      </div>

      <aside class="side-rail">
        <div class="card" style="padding:13px 14px">
          <div class="card-title" style="margin-bottom:8px">On this page</div>
          <div class="toc" id="toc"></div>
        </div>
        ${resources.length ? `<div class="card" style="padding:13px 14px">
          <div class="card-title" style="margin-bottom:8px">Resources</div>
          <div class="res-list">
            ${resources.map(r => `<a class="res-item" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">
              <span class="ico">${r.ico}</span><span>${esc(r.label)}</span></a>`).join('')}
          </div></div>` : ''}
        <div class="card" style="padding:13px 14px">
          <div class="card-title" style="margin-bottom:8px">Navigate</div>
          <div class="res-list" id="chapterNav"></div>
        </div>
      </aside>
    </div>
  </div>`;

  buildTOC();
  buildChapterNav(id);
  renderProblems(ch, query && query.get('p'));

  $('#readBtn').onclick = e => {
    const now = !store.chapter(id).read;
    store.setChapter(id, { read: now });
    e.target.textContent = now ? '✓ read' : 'mark as read';
    e.target.classList.toggle('accent', now);
    renderSidebar();
    if (now) toast('Chapter marked as read');
  };
  $('#chNote').addEventListener('input', debounce(e => {
    store.setChapter(id, { note: e.target.value });
  }, 450));

  $('#filters').onclick = e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.diff) filters.diff = b.dataset.diff;
    if (b.dataset.status) filters.status = filters.status === 'open' ? 'all' : 'open';
    document.querySelectorAll('#filters .filter-btn').forEach(x => {
      x.classList.toggle('on', x.dataset.diff ? x.dataset.diff === filters.diff : filters.status === 'open');
    });
    renderProblems(ch);
  };
}

function buildTOC() {
  const heads = [...document.querySelectorAll('#study h2, #study h3')];
  $('#toc').innerHTML = heads.map(h =>
    `<a href="#${h.id}" class="${h.tagName === 'H3' ? 'lvl3' : ''}">${esc(h.textContent)}</a>`).join('')
    || '<span style="font-size:12px;color:var(--text-faint)">—</span>';
  $('#toc').onclick = e => {
    const a = e.target.closest('a'); if (!a) return;
    e.preventDefault();
    const t = document.getElementById(a.getAttribute('href').slice(1));
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
}

function buildChapterNav(id) {
  const i = library.chapters.findIndex(c => c.id === id);
  const prev = library.chapters[i - 1], next = library.chapters[i + 1];
  $('#chapterNav').innerHTML = [
    prev ? `<a class="res-item" href="#/chapter/${prev.id}"><span class="ico">←</span><span>${esc(prev.title)}</span></a>` : '',
    next ? `<a class="res-item" href="#/chapter/${next.id}"><span class="ico">→</span><span>${esc(next.title)}</span></a>` : '',
  ].join('');
}

function problemHTML(p) {
  const rec = store.problem(p.id);
  const s = statusOf(rec.status);
  return `<div class="prob s-${rec.status} ${rec.flagged ? 'flagged' : ''}" id="prob-${cssId(p.id)}" data-id="${esc(p.id)}">
    <div class="prob-head">
      <span class="prob-label">${esc(p.label)}</span>
      <span class="chip d-${esc(p.difficulty)}">${esc(p.difficulty)}</span>
      ${p.source ? `<span class="prob-src">${esc(p.source)}</span>` : ''}
      <div class="prob-tools">
        <button class="icon-btn ${rec.note ? 'note-on' : ''}" data-act="note" title="Note">✎</button>
        <button class="icon-btn ${rec.flagged ? 'on' : ''}" data-act="flag" title="Flag for revision">⚑</button>
        <button class="status-btn ${s.cls}" data-act="status" title="Click to change status">
          <span class="dot"></span>${s.label}
        </button>
      </div>
    </div>
    <div class="prob-body">
      <div class="prose">${md(p.statement)}</div>
      ${(p.hint || p.solution) ? `<div class="reveal">
        ${p.hint ? '<button class="reveal-btn hint" data-act="hint">Hint</button>' : ''}
        ${p.solution ? '<button class="reveal-btn sol" data-act="sol">Solution</button>' : ''}
      </div>` : ''}
      <div data-slot="panels"></div>
      <div data-slot="note" hidden>
        <div class="note-box">
          <textarea class="note" data-act="notetext" placeholder="Your attempt, the idea that worked, where you got stuck…">${esc(rec.note || '')}</textarea>
        </div>
      </div>
    </div>
  </div>`;
}

const cssId = s => s.replace(/[^\w-]/g, '_');

function renderProblems(ch, focusId) {
  let list = problemsOf(ch);
  if (filters.diff !== 'all') list = list.filter(p => p.difficulty === filters.diff);
  if (filters.status === 'open') list = list.filter(p => !['solved', 'hinted'].includes(store.problem(p.id).status));

  const box = $('#problems');
  box.innerHTML = list.length ? list.map(problemHTML).join('')
    : '<div class="empty"><div class="big">✓</div>Nothing matches that filter.</div>';
  const st = store.statsFor(problemsOf(ch).map(p => p.id));
  $('#probCount').textContent = `${st.done}/${st.total} done`;

  box.onclick = e => {
    const btn = e.target.closest('[data-act]');
    if (!btn) return;
    const card = e.target.closest('.prob');
    const pid = card.dataset.id;
    const p = problemsOf(ch).find(x => x.id === pid);
    const act = btn.dataset.act;

    if (act === 'status') {
      const next = store.cycleStatus(pid);
      const s = statusOf(next);
      btn.className = `status-btn ${s.cls}`;
      btn.innerHTML = `<span class="dot"></span>${s.label}`;
      card.className = `prob s-${next} ${store.problem(pid).flagged ? 'flagged' : ''}`;
      const nst = store.statsFor(problemsOf(ch).map(x => x.id));
      $('#probCount').textContent = `${nst.done}/${nst.total} done`;
      renderSidebar();
    } else if (act === 'flag') {
      const f = !store.problem(pid).flagged;
      store.setProblem(pid, { flagged: f });
      btn.classList.toggle('on', f);
      card.classList.toggle('flagged', f);
    } else if (act === 'note') {
      const slot = card.querySelector('[data-slot="note"]');
      slot.hidden = !slot.hidden;
      if (!slot.hidden) slot.querySelector('textarea').focus();
    } else if (act === 'hint' || act === 'sol') {
      const slot = card.querySelector('[data-slot="panels"]');
      const existing = slot.querySelector(`.panel.${act}`);
      if (existing) { existing.remove(); btn.classList.remove('on'); return; }
      const div = document.createElement('div');
      div.className = `panel ${act}`;
      div.innerHTML = `<div class="panel-tag">${act === 'hint' ? 'Hint' : 'Solution'}</div>
                       <div class="prose">${md(act === 'hint' ? p.hint : p.solution)}</div>`;
      slot.appendChild(div);
      btn.classList.add('on');
      if (act === 'sol' && store.problem(pid).status === 'todo') {
        // looked at the solution without recording an attempt — nudge the record
        store.setProblem(pid, { status: 'tried' });
        const sb = card.querySelector('[data-act="status"]');
        const s = statusOf('tried');
        sb.className = `status-btn ${s.cls}`;
        sb.innerHTML = `<span class="dot"></span>${s.label}`;
        card.className = `prob s-tried ${store.problem(pid).flagged ? 'flagged' : ''}`;
      }
    }
  };

  if (!box.dataset.wired) {
    box.dataset.wired = '1';
    box.addEventListener('input', debounce(e => {
    if (e.target.dataset.act !== 'notetext') return;
    const pid = e.target.closest('.prob').dataset.id;
    store.setProblem(pid, { note: e.target.value });
    e.target.closest('.prob').querySelector('[data-act="note"]').classList.toggle('note-on', !!e.target.value);
    }, 450));
  }

  if (focusId) {
    const t = document.getElementById('prob-' + cssId(focusId));
    if (t) { t.scrollIntoView({ behavior: 'smooth', block: 'center' }); t.style.borderColor = 'var(--accent)'; }
  }
}

/* ---------- problem bank ---------- */

const bank = { diff: 'all', status: 'all', section: 'all', flagged: false, q: '' };

function viewBank(query) {
  if (query && query.get('flagged')) bank.flagged = true;
  const all = (ALL || []).flatMap(c => problemsOf(c).map(p => ({ ...p, sectionId: c.sectionId, chTitle: c.title })));

  const apply = () => all.filter(p => {
    const rec = store.problem(p.id);
    if (bank.section !== 'all' && p.sectionId !== bank.section) return false;
    if (bank.diff !== 'all' && p.difficulty !== bank.diff) return false;
    if (bank.flagged && !rec.flagged) return false;
    if (bank.status === 'open' && ['solved', 'hinted'].includes(rec.status)) return false;
    if (bank.status === 'done' && !['solved', 'hinted'].includes(rec.status)) return false;
    if (bank.q && !(p.search.includes(bank.q) || p.chTitle.toLowerCase().includes(bank.q))) return false;
    return true;
  });

  view().innerHTML = `<div class="page wide">
    <div class="page-head">
      <div class="eyebrow">Practice</div>
      <h1 class="page-title">Problem bank</h1>
      <p class="page-lede">Every problem in the module in one list. Filter by area, difficulty or status —
      this is where you build a revision queue out of everything you flagged.</p>
    </div>
    <div class="card" style="margin-bottom:16px;padding:13px 15px">
      <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center">
        <input id="bankQ" placeholder="Search problems…" value="${esc(bank.q)}"
          style="flex:1;min-width:200px;background:var(--bg-inset);border:1px solid var(--line);border-radius:20px;padding:6px 14px;font-size:13px;outline:none">
        <div class="seg" id="bankStatus">
          ${[['all', 'All'], ['open', 'Unsolved'], ['done', 'Solved']].map(([v, l]) =>
            `<button data-v="${v}" class="${bank.status === v ? 'on' : ''}">${l}</button>`).join('')}
        </div>
        <button class="filter-btn ${bank.flagged ? 'on' : ''}" id="bankFlag">⚑ Flagged only</button>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:11px" id="bankSection">
        <button class="filter-btn ${bank.section === 'all' ? 'on' : ''}" data-v="all">All areas</button>
        ${library.sections.map(s => `<button class="filter-btn ${bank.section === s.id ? 'on' : ''}" data-v="${s.id}">${s.icon} ${esc(s.title)}</button>`).join('')}
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px" id="bankDiff">
        ${['all', 'Warmup', 'Easy', 'Medium', 'Hard', 'Brutal'].map(d =>
          `<button class="filter-btn ${bank.diff === d ? 'on' : ''}" data-v="${d}">${d === 'all' ? 'All levels' : d}</button>`).join('')}
      </div>
    </div>
    <div id="bankCount" class="kbd-hint" style="margin-bottom:10px"></div>
    <div id="bankList"></div>
  </div>`;

  const draw = () => {
    const list = apply();
    $('#bankCount').textContent = `${list.length} problem${list.length === 1 ? '' : 's'}`;
    $('#bankList').innerHTML = list.slice(0, 400).map(p => {
      const rec = store.problem(p.id);
      const s = statusOf(rec.status);
      return `<a class="link-row" href="#/chapter/${p.chapterId}?p=${encodeURIComponent(p.id)}" style="align-items:flex-start">
        <span class="status-btn ${s.cls}" style="pointer-events:none;flex:0 0 auto"><span class="dot"></span>${s.short}</span>
        <span class="grow">
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
            <b style="font-size:13px;font-family:var(--mono)">${esc(p.label)}</b>
            <span class="chip d-${esc(p.difficulty)}">${esc(p.difficulty)}</span>
            ${p.source ? `<span class="prob-src">${esc(p.source)}</span>` : ''}
            ${rec.flagged ? '<span style="color:var(--violet)">⚑</span>' : ''}
            <span class="sub" style="margin-left:auto">${esc(p.chTitle)}</span>
          </div>
          <div class="sub" style="margin-top:4px;color:var(--text-dim);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${esc(plain(p.statement).slice(0, 190))}</div>
        </span>
      </a>`;
    }).join('') || '<div class="empty"><div class="big">⌕</div>No problems match.</div>';
  };
  draw();

  $('#bankQ').addEventListener('input', debounce(e => { bank.q = e.target.value.toLowerCase().trim(); draw(); }, 200));
  const wire = (sel, key) => $(sel).onclick = e => {
    const b = e.target.closest('button'); if (!b) return;
    bank[key] = b.dataset.v;
    [...e.currentTarget.children].forEach(c => c.classList.toggle('on', c.dataset.v === b.dataset.v));
    draw();
  };
  wire('#bankSection', 'section'); wire('#bankDiff', 'diff'); wire('#bankStatus', 'status');
  $('#bankFlag').onclick = e => { bank.flagged = !bank.flagged; e.target.classList.toggle('on', bank.flagged); draw(); };
}

/* ---------- past papers ---------- */

function viewPapers() {
  const groups = {};
  for (const p of library.papers) (groups[p.group] ||= []).push(p);

  const pyqChapters = library.sections.find(s => s.id === 'past-papers');

  view().innerHTML = `<div class="page wide">
    <div class="page-head">
      <div class="eyebrow">Archive</div>
      <h1 class="page-title">Past papers</h1>
      <p class="page-lede">Every official paper from HBCSE, with solutions where they published them.
      Track each sitting: mark it attempted, record your score out of 100, and note what went wrong.
      <b>Papers are the single highest-value resource here</b> — do them timed.</p>
    </div>

    ${pyqChapters ? `<div class="card" style="margin-bottom:20px">
      <div class="card-title">Past problems, sorted by topic</div>
      <p style="color:var(--text-dim);font-size:13.5px;margin:0 0 12px">
        Real RMO/INMO problems regrouped by technique, so you can drill one skill at a time before doing whole papers.</p>
      <div style="display:flex;gap:7px;flex-wrap:wrap">
        ${pyqChapters.chapters.map(c => `<a class="chip accent" href="#/chapter/${c.id}">${esc(c.title)}</a>`).join('')}
      </div>
    </div>` : ''}

    ${Object.entries(groups).map(([g, items]) => `
      <h2 style="font-size:17px;margin:26px 0 12px;font-weight:700">${esc(g)}</h2>
      ${items.map(p => {
        const rec = store.paper(p.id);
        const s = statusOf(rec.status);
        return `<div class="link-row" data-paper="${esc(p.id)}" style="align-items:center">
          <span class="grow">
            <b style="font-size:13.5px">${esc(p.title)}</b>
            ${p.note ? `<span class="sub"> · ${esc(p.note)}</span>` : ''}
            <div style="margin-top:5px;display:flex;gap:10px;flex-wrap:wrap">
              ${Object.entries(p.links).map(([k, u]) =>
                `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer" style="font-size:12px">${esc(k)}<span class="ext">↗</span></a>`).join('')}
            </div>
          </span>
          <input class="paper-score" data-paper="${esc(p.id)}" value="${esc(rec.score || '')}" placeholder="score"
            style="width:66px;background:var(--bg-inset);border:1px solid var(--line);border-radius:7px;padding:4px 8px;font-size:12px;text-align:center;outline:none">
          <button class="status-btn ${s.cls}" data-paper-status="${esc(p.id)}"><span class="dot"></span>${s.label}</button>
        </div>`;
      }).join('')}
    `).join('')}
  </div>`;

  view().addEventListener('click', e => {
    const b = e.target.closest('[data-paper-status]');
    if (!b) return;
    const id = b.dataset.paperStatus;
    const order = STATUSES.map(x => x.id);
    const next = order[(order.indexOf(store.paper(id).status) + 1) % order.length];
    store.setPaper(id, { status: next });
    const s = statusOf(next);
    b.className = `status-btn ${s.cls}`;
    b.innerHTML = `<span class="dot"></span>${s.label}`;
  });
  view().addEventListener('input', debounce(e => {
    if (!e.target.classList.contains('paper-score')) return;
    store.setPaper(e.target.dataset.paper, { score: e.target.value });
  }, 400));
}

/* ---------- notes ---------- */

function viewNotes() {
  const chNotes = Object.entries(store.state.chapters).filter(([, v]) => v.note && v.note.trim());
  const pNotes = Object.entries(store.state.problems).filter(([, v]) => v.note && v.note.trim());

  view().innerHTML = `<div class="page">
    <div class="page-head">
      <div class="eyebrow">Your work</div>
      <h1 class="page-title">Notes</h1>
      <p class="page-lede">Everything you have written, in one place. The scratchpad is for ideas that do not
      belong to any one chapter — a lemma you keep re-deriving, a list of tricks, exam-day reminders.</p>
    </div>

    <div class="card" style="margin-bottom:20px">
      <div class="card-title">✎ Scratchpad</div>
      <textarea class="note" id="scratch" style="min-height:240px;font-family:var(--mono);font-size:13px"
        placeholder="Anything. Markdown and $LaTeX$ are fine — hit Preview to render.">${esc(store.state.scratch || '')}</textarea>
      <div style="margin-top:9px;display:flex;gap:8px">
        <button class="chip-btn" id="previewBtn">Preview</button>
        <span class="kbd-hint" id="scratchStatus"></span>
      </div>
      <div id="scratchPreview" class="prose" style="margin-top:14px" hidden></div>
    </div>

    <div class="card" style="margin-bottom:20px">
      <div class="card-title">Chapter notes · ${chNotes.length}</div>
      ${chNotes.map(([id, v]) => `<a class="link-row" href="#/chapter/${id}" style="align-items:flex-start;display:block">
        <b style="font-size:13.5px">${esc(chapterTitle(id))}</b>
        <div class="sub" style="margin-top:4px;white-space:pre-wrap;color:var(--text-dim)">${esc(v.note.slice(0, 320))}</div>
      </a>`).join('') || '<div class="empty" style="padding:22px">No chapter notes yet.</div>'}
    </div>

    <div class="card">
      <div class="card-title">Problem notes · ${pNotes.length}</div>
      ${pNotes.map(([id, v]) => {
        const p = findProblem(id);
        return `<a class="link-row" href="#/chapter/${id.split('#')[0]}?p=${encodeURIComponent(id)}" style="display:block">
          <b style="font-size:13px;font-family:var(--mono)">${esc(p ? p.label : id)}</b>
          <span class="sub"> · ${esc(chapterTitle(id.split('#')[0]))}</span>
          <div class="sub" style="margin-top:4px;white-space:pre-wrap;color:var(--text-dim)">${esc(v.note.slice(0, 320))}</div>
        </a>`;
      }).join('') || '<div class="empty" style="padding:22px">No problem notes yet.</div>'}
    </div>
  </div>`;

  $('#scratch').addEventListener('input', debounce(e => {
    store.setScratch(e.target.value);
    $('#scratchStatus').textContent = 'saved';
    setTimeout(() => { const s = $('#scratchStatus'); if (s) s.textContent = ''; }, 1200);
  }, 500));
  $('#previewBtn').onclick = () => {
    const pv = $('#scratchPreview');
    pv.hidden = !pv.hidden;
    if (!pv.hidden) pv.innerHTML = md($('#scratch').value);
  };
}

/* ---------- settings ---------- */

function viewSettings() {
  const st = store.statsFor((ALL || []).flatMap(c => problemsOf(c).map(p => p.id)));
  view().innerHTML = `<div class="page">
    <div class="page-head">
      <div class="eyebrow">Settings</div>
      <h1 class="page-title">Data & backup</h1>
      <p class="page-lede">Progress is saved to <code>user-data/state.json</code> inside this folder
      (the server also keeps 14 days of daily snapshots in <code>user-data/backups/</code>).</p>
    </div>
    <div class="card" style="margin-bottom:16px">
      <div class="card-title">Storage</div>
      <p style="font-size:14px;color:var(--text-dim);margin:0 0 12px">
        Backend: <b style="color:var(--text)">${store.backend === 'disk' ? 'disk (user-data/state.json)' : 'browser localStorage only'}</b>
        ${store.backend === 'disk' ? '' : '<br><span style="color:var(--warn)">Start the app with <code>./start.sh</code> to save to disk.</span>'}
        <br>Tracked: ${Object.keys(store.state.problems).length} problems · ${Object.keys(store.state.chapters).length} chapters · ${Object.keys(store.state.papers).length} papers.
      </p>
      <div style="display:flex;gap:9px;flex-wrap:wrap">
        <button class="chip-btn" id="exportBtn">⇩ Export JSON backup</button>
        <button class="chip-btn" id="importBtn">⇧ Import backup</button>
        <input type="file" id="importFile" accept="application/json" hidden>
        <button class="chip-btn" id="resetBtn" style="color:var(--bad);border-color:rgba(248,113,113,.35)">Reset all progress</button>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Snapshot</div>
      <div class="grid grid-4">
        ${STATUSES.map(s => `<div class="stat"><div class="stat-num" style="font-size:22px">${st[s.id] || 0}</div><div class="stat-lbl">${s.label}</div></div>`).join('')}
      </div>
    </div>
  </div>`;

  $('#exportBtn').onclick = () => {
    const url = URL.createObjectURL(store.exportBlob());
    const a = document.createElement('a');
    a.href = url; a.download = `rmo-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click(); URL.revokeObjectURL(url);
    toast('Backup downloaded');
  };
  $('#importBtn').onclick = () => $('#importFile').click();
  $('#importFile').onchange = async e => {
    const f = e.target.files[0]; if (!f) return;
    try { await store.importJSON(await f.text()); toast('Progress restored'); route(); }
    catch (err) { toast('Could not read that file'); }
  };
  $('#resetBtn').onclick = () => {
    if (confirm('Erase all progress, notes and flags? This cannot be undone.')) {
      store.reset(); toast('Progress cleared'); route();
    }
  };
}

function viewNotFound(msg) {
  view().innerHTML = `<div class="page"><div class="empty"><div class="big">∅</div>
    ${esc(msg || 'Nothing here.')}<br><a href="#/">Back to the dashboard</a></div></div>`;
}

/* ===================== search ===================== */

function openSearch() {
  const modal = $('#modal');
  modal.innerHTML = `<div class="overlay" id="ov">
    <div class="search-panel">
      <input id="sq" placeholder="Search theory, problems, past papers…" autocomplete="off">
      <div class="search-results" id="sr"><div class="empty" style="padding:26px">Type to search ${(ALL || []).reduce((n, c) => n + problemsOf(c).length, 0)} problems and ${(ALL || []).length} chapters.</div></div>
    </div></div>`;
  const input = $('#sq');
  input.focus();
  let sel = 0, hits = [];

  const run = () => {
    const q = input.value.toLowerCase().trim();
    if (q.length < 2) { hits = []; $('#sr').innerHTML = '<div class="empty" style="padding:26px">Keep typing…</div>'; return; }
    hits = [];
    for (const c of ALL || []) {
      if (c.title.toLowerCase().includes(q) || (c.blurb || '').toLowerCase().includes(q))
        hits.push({ t: c.title, s: `${c.sectionTitle} · chapter`, h: `#/chapter/${c.id}` });
      for (const p of problemsOf(c)) {
        if (p.search.includes(q))
          hits.push({ t: `${p.label} · ${plain(p.statement).slice(0, 80)}`, s: `${c.title} · ${p.difficulty}${p.source ? ' · ' + p.source : ''}`, h: `#/chapter/${c.id}?p=${encodeURIComponent(p.id)}` });
      }
      const i = (c.searchText || '').indexOf(q);
      if (i >= 0) hits.push({ t: c.title, s: '…' + (c.searchText).slice(Math.max(0, i - 40), i + 80) + '…', h: `#/chapter/${c.id}` });
    }
    for (const p of library.papers) {
      if (p.title.toLowerCase().includes(q)) hits.push({ t: p.title, s: 'Past paper', h: '#/papers' });
    }
    hits = hits.slice(0, 40); sel = 0;
    $('#sr').innerHTML = hits.length ? hits.map((h, i) =>
      `<a class="sr ${i === 0 ? 'sel' : ''}" href="${h.h}" data-i="${i}">
        <div class="sr-t">${esc(h.t)}</div><div class="sr-s">${esc(h.s)}</div></a>`).join('')
      : '<div class="empty" style="padding:26px">No matches.</div>';
  };

  input.addEventListener('input', debounce(run, 130));
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') return closeSearch();
    if (!hits.length) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      sel = (sel + (e.key === 'ArrowDown' ? 1 : hits.length - 1)) % hits.length;
      document.querySelectorAll('.sr').forEach((n, i) => n.classList.toggle('sel', i === sel));
      document.querySelector('.sr.sel')?.scrollIntoView({ block: 'nearest' });
    }
    if (e.key === 'Enter') { e.preventDefault(); location.hash = hits[sel].h; closeSearch(); }
  });
  $('#ov').onclick = e => { if (e.target.id === 'ov') closeSearch(); };
  $('#sr').onclick = () => setTimeout(closeSearch, 0);
}
const closeSearch = () => { $('#modal').innerHTML = ''; };

/* ===================== router ===================== */

function crumbs() {
  const h = location.hash.slice(2).split('?')[0];
  const parts = h.split('/');
  const map = { '': 'Dashboard', plan: 'The 9-week plan', bank: 'Problem bank', papers: 'Past papers', notes: 'Notes', settings: 'Settings' };
  let out = '<a href="#/"><b>RMO Prep</b></a>';
  if (parts[0] === 'chapter') {
    const c = library.byId.get(parts[1]);
    if (c) out += `<span class="sep">/</span><a href="#/section/${c.sectionId}"><b>${esc(c.sectionTitle)}</b></a><span class="sep">/</span><b>${esc(c.title)}</b>`;
  } else if (parts[0] === 'section') {
    const s = library.sections.find(x => x.id === parts[1]);
    if (s) out += `<span class="sep">/</span><b>${esc(s.title)}</b>`;
  } else if (map[parts[0]] !== undefined && parts[0] !== '') {
    out += `<span class="sep">/</span><b>${map[parts[0]]}</b>`;
  }
  $('#crumb').innerHTML = out;
}

function route() {
  const raw = location.hash.slice(2) || '';
  const [path, qs] = raw.split('?');
  const query = new URLSearchParams(qs || '');
  const parts = path.split('/');
  view().scrollTop = 0;
  $('#main').scrollTop = 0;
  $('#sidebar').classList.remove('open');

  switch (parts[0]) {
    case '':         viewDashboard(); break;
    case 'plan':     viewPlan(); break;
    case 'bank':     viewBank(query); break;
    case 'papers':   viewPapers(); break;
    case 'notes':    viewNotes(); break;
    case 'settings': viewSettings(); break;
    case 'section':  viewSection(parts[1]); break;
    case 'chapter':  viewChapter(parts[1], query); break;
    default:         viewNotFound();
  }
  crumbs();
  renderSidebar();
}

/* ===================== boot ===================== */

function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  store.setSetting('theme', t);
}

async function boot() {
  await store.init();
  applyTheme(store.settings.theme || 'dark');
  await loadLibrary();
  renderSidebar();
  route();                           // paint immediately with what we have
  ALL = await loadAll();             // then enrich once every chapter is parsed
  renderSidebar();
  route();

  window.addEventListener('hashchange', route);
  $('#themeBtn').onclick = () => applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  $('#searchBtn').onclick = openSearch;
  $('#menuBtn').onclick = () => $('#sidebar').classList.toggle('open');

  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
    else if (e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
  });

  store.addEventListener('change', () => {
    $('#saveDot').classList.add('pending');
  });
  store.addEventListener('saved', () => $('#saveDot').classList.remove('pending'));
  window.addEventListener('beforeunload', () => { if (store._pending) store.flush(); });
}

boot().catch(err => {
  view().innerHTML = `<div class="page"><div class="empty"><div class="big">⚠</div>
    Could not start: ${esc(err.message)}<br><span class="kbd-hint">Run <code>./start.sh</code> from the project folder.</span></div></div>`;
  console.error(err);
});
