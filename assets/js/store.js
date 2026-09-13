/* Progress store.
   Primary home is user-data/state.json via the local server; localStorage is a
   mirror so nothing is lost if the site is opened straight off the filesystem. */

const LS_KEY = 'rmo-prep-state-v1';

const EMPTY = () => ({
  version: 1,
  problems: {},   // id -> { status, flagged, note, attempts, solvedOn, updated }
  chapters: {},   // id -> { note, read, updated }
  papers: {},     // id -> { status, score, note, updated }
  days: {},       // 'YYYY-MM-DD' -> { minutes, habits: {…}, note }
  sessions: [],
  settings: { theme: 'dark', hideSolved: false, dailyTarget: 4 },
  scratch: '',
});

export const today = () => {
  const d = new Date();
  return [d.getFullYear(), String(d.getMonth() + 1).padStart(2, '0'),
          String(d.getDate()).padStart(2, '0')].join('-');
};
const shiftDay = (iso, n) => {
  const [y, m, d] = iso.split('-').map(Number);
  const t = new Date(y, m - 1, d + n);
  return [t.getFullYear(), String(t.getMonth() + 1).padStart(2, '0'),
          String(t.getDate()).padStart(2, '0')].join('-');
};
export { shiftDay };

export const HABITS = [
  { id: 'written',  label: 'Wrote one solution out in full, on paper' },
  { id: 'flagged',  label: 'Revisited something I had flagged \u2691' },
  { id: 'timed',    label: 'Gave a problem 25 uninterrupted minutes before the hint' },
];

const DONE = new Set(['solved', 'hinted']);

export const STATUSES = [
  { id: 'todo',    label: 'Not started', short: '–',  cls: 'st-todo' },
  { id: 'tried',   label: 'Attempted',   short: '◐',  cls: 'st-tried' },
  { id: 'stuck',   label: 'Stuck',       short: '!',  cls: 'st-stuck' },
  { id: 'hinted',  label: 'Solved w/ hint', short: '◑', cls: 'st-hinted' },
  { id: 'solved',  label: 'Solved',      short: '✓',  cls: 'st-solved' },
];

class Store extends EventTarget {
  constructor() {
    super();
    this.state = EMPTY();
    this.backend = 'local';
    this._timer = null;
    this._pending = false;
  }

  async init() {
    let local = null;
    try { local = JSON.parse(localStorage.getItem(LS_KEY) || 'null'); } catch (_) {}

    // Relative path so the app also works when served from a sub-path (GitHub Pages).
    try {
      const res = await fetch('api/state', { cache: 'no-store' });
      if (res.ok && (res.headers.get('content-type') || '').includes('json')) {
        const remote = await res.json();
        this.backend = 'disk';
        this.state = this._merge(EMPTY(), remote);
        // if this browser has newer local edits made while offline, keep the richer one
        if (local && this._weight(local) > this._weight(this.state)) {
          this.state = this._merge(this.state, local);
          this._queue();
        }
      } else {
        // no local server (e.g. static hosting): browser storage is the only home
        this.backend = 'local';
        if (local) this.state = this._merge(EMPTY(), local);
      }
    } catch (_) {
      this.backend = 'local';
      if (local) this.state = this._merge(EMPTY(), local);
    }
    this._backfill();
    this._mirror();
    return this;
  }

  /** Older saves have no solvedOn; infer it from the last-updated stamp. */
  _backfill() {
    let changed = false;
    for (const p of Object.values(this.state.problems)) {
      if (DONE.has(p.status) && !p.solvedOn && p.updated) {
        p.solvedOn = p.updated.slice(0, 10);
        changed = true;
      }
    }
    if (changed) this._queue();
  }

  _merge(base, patch) {
    const out = { ...base, ...patch };
    for (const k of ['problems', 'chapters', 'papers', 'days']) {
      out[k] = { ...(base[k] || {}), ...(patch[k] || {}) };
    }
    out.settings = { ...(base.settings || {}), ...(patch.settings || {}) };
    out.sessions = patch.sessions && patch.sessions.length ? patch.sessions : (base.sessions || []);
    return out;
  }

  _weight(s) {
    return Object.keys(s.problems || {}).length + Object.keys(s.chapters || {}).length;
  }

  _mirror() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(this.state)); } catch (_) {}
  }

  _queue() {
    this._pending = true;
    clearTimeout(this._timer);
    this._timer = setTimeout(() => this.flush(), 400);
  }

  async flush() {
    this._mirror();
    if (this.backend !== 'disk') { this._pending = false; return; }
    try {
      await fetch('api/state', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state),
      });
      this._pending = false;
      this.dispatchEvent(new CustomEvent('saved'));
    } catch (_) { /* stays mirrored in localStorage */ }
  }

  _touch() {
    this._queue();
    this.dispatchEvent(new CustomEvent('change'));
  }

  /* ---- problems ---- */
  problem(id) {
    return this.state.problems[id] || { status: 'todo', flagged: false, note: '', attempts: 0 };
  }
  setProblem(id, patch) {
    const prev = this.problem(id);
    const next = { ...prev, ...patch, updated: new Date().toISOString() };
    // stamp the day a problem is first finished, so the tracker has a stable date
    const wasDone = DONE.has(prev.status), isDone = DONE.has(next.status);
    if (isDone && !next.solvedOn) next.solvedOn = today();
    if (!isDone && wasDone) delete next.solvedOn;
    this.state.problems[id] = next;
    this._touch();
  }

  /* ---- daily tracker ---- */
  day(date = today()) {
    return this.state.days[date] || { minutes: 0, habits: {}, note: '' };
  }
  setDay(patch, date = today()) {
    const prev = this.day(date);
    this.state.days[date] = { ...prev, ...patch, habits: { ...prev.habits, ...(patch.habits || {}) } };
    this._touch();
  }
  toggleHabit(habitId, date = today()) {
    const cur = this.day(date).habits[habitId];
    this.setDay({ habits: { [habitId]: !cur } }, date);
    return !cur;
  }
  addMinutes(n, date = today()) {
    this.setDay({ minutes: Math.max(0, this.day(date).minutes + n) }, date);
  }

  /** How many problems were finished on a given day. */
  solvedOn(date) {
    let n = 0;
    for (const p of Object.values(this.state.problems)) if (p.solvedOn === date) n++;
    return n;
  }

  /** A day counts as "hit" if the problem target was met. */
  dayHit(date) {
    return this.solvedOn(date) >= (this.settings.dailyTarget || 4);
  }

  /** Consecutive hit days ending today (today not yet hit doesn't break it). */
  streak() {
    let n = 0, d = today();
    if (!this.dayHit(d)) d = shiftDay(d, -1);   // grace: today is still in progress
    while (this.dayHit(d)) { n++; d = shiftDay(d, -1); }
    return n;
  }

  /** { date -> problems finished } over a window, for the heatmap. */
  activity(fromISO, toISO) {
    const out = {};
    for (let d = fromISO; d <= toISO; d = shiftDay(d, 1)) out[d] = 0;
    for (const p of Object.values(this.state.problems)) {
      if (p.solvedOn && p.solvedOn in out) out[p.solvedOn]++;
    }
    return out;
  }
  cycleStatus(id) {
    const order = STATUSES.map(s => s.id);
    const cur = this.problem(id).status;
    const next = order[(order.indexOf(cur) + 1) % order.length];
    this.setProblem(id, { status: next });
    return next;
  }

  /* ---- chapters ---- */
  chapter(id) { return this.state.chapters[id] || { note: '', read: false }; }
  setChapter(id, patch) {
    this.state.chapters[id] = { ...this.chapter(id), ...patch, updated: new Date().toISOString() };
    this._touch();
  }

  /* ---- papers ---- */
  paper(id) { return this.state.papers[id] || { status: 'todo', score: '', note: '' }; }
  setPaper(id, patch) {
    this.state.papers[id] = { ...this.paper(id), ...patch, updated: new Date().toISOString() };
    this._touch();
  }

  /* ---- settings & misc ---- */
  get settings() { return this.state.settings; }
  setSetting(k, v) { this.state.settings[k] = v; this._touch(); }
  setScratch(v) { this.state.scratch = v; this._touch(); }

  logSession(minutes, note) {
    this.state.sessions.push({ date: new Date().toISOString().slice(0, 10), minutes, note: note || '' });
    this._touch();
  }

  /* ---- stats ---- */
  statsFor(problemIds) {
    const out = { total: problemIds.length, solved: 0, hinted: 0, tried: 0, stuck: 0, todo: 0, flagged: 0 };
    for (const id of problemIds) {
      const p = this.problem(id);
      out[p.status] = (out[p.status] || 0) + 1;
      if (p.flagged) out.flagged++;
    }
    out.done = out.solved + out.hinted;
    out.pct = out.total ? Math.round((out.done / out.total) * 100) : 0;
    return out;
  }

  exportBlob() {
    return new Blob([JSON.stringify(this.state, null, 2)], { type: 'application/json' });
  }
  async importJSON(text) {
    const data = JSON.parse(text);
    this.state = this._merge(EMPTY(), data);
    await this.flush();
    this.dispatchEvent(new CustomEvent('change'));
  }
  reset() {
    this.state = EMPTY();
    this._touch();
  }
}

export const store = new Store();
