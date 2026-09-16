# RMO Prep Module

A self-contained study app for the **Regional Mathematical Olympiad** (India, stage 2 of the
HBCSE olympiad programme). Built for someone who has cleared IOQM and has a fixed number of
weeks before RMO.

**Live site:** https://sovi11.github.io/rmo-prep-module/

---

## What's in it

- **A week-by-week plan** built backwards from exam day, with a main track and a parallel
  geometry track (geometry runs from week one because it is the slowest skill to build).
- **37 chapters** of theory across seven areas — foundations & method, number theory, algebra,
  inequalities, combinatorics, geometry, and past problems by topic.
- **360 problems**, every one with a hint *and* a full worked solution, graded
  Warmup / Easy / Medium / Hard.
- **Every official HBCSE past paper** — RMO, CRMO, INMO and IOQM — linked with solutions where
  HBCSE published them, and trackable (mark a paper attempted, record your score out of 102).
- **Progress tracking**: per-problem status, flags for revision, per-chapter and per-problem
  notes, a scratchpad, and a dashboard.

Problem statements from past papers are transcribed from the official HBCSE PDFs, which are
linked throughout.

## The exam it targets

Six problems, three hours, **102 marks — 17 per problem**. Every recent paper carries the line:

> No marks will be awarded for stating an answer without justification.

That is the whole design brief: the module trains *written proof*, not answer-finding.

## Running it locally

```bash
./start.sh
```

Then open http://127.0.0.1:5173. Python 3 standard library only — no install step, no
dependencies, no build.

Locally, progress is saved to `user-data/state.json` (gitignored), with 14 days of daily
snapshots in `user-data/backups/`. On the hosted site there is no server, so progress is kept
in that browser's local storage instead; **Settings → Export** writes a JSON backup either way.

Options: `./start.sh --port 8080`, `./start.sh --no-browser`.

## Layout

```
serve.py                 local server + JSON progress API (stdlib only)
start.sh                 launcher
tools/build_manifest.py  regenerates web/content/manifest.json from chapter front-matter
web/
  index.html
  assets/css, assets/js  vanilla JS, no framework
  assets/vendor/katex    KaTeX vendored locally so math renders offline
  content/
    manifest.json        generated — sections, the plan, the paper archive
    <area>/*.md          one file per chapter
```

## Editing or adding content

Chapters are plain Markdown with `$LaTeX$`, front-matter, and a simple problem format:

```markdown
---
id: nt-01-divisibility
title: Divisibility, gcd and the Euclidean algorithm
level: Foundation
blurb: One line shown in listings.
video: Label :: https://...
---

## Theory
Prose with $inline$ and $$display$$ math. ```svg fences pass through as figures.

## Problems

### P1 | Easy | RMO 2003
Statement.
[hint]
A nudge, not the method.
[/hint]
[sol]
The full solution.
[/sol]
```

After adding or renaming a chapter, run:

```bash
python3 tools/build_manifest.py
```

## Credits

Past-paper **problem statements** are transcribed from the official HBCSE PDFs and are
© HBCSE–TIFR; every one links back to its source paper. The official solution PDFs are
linked, not copied. The **solutions written here are original** to this module:
https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers/

Topic handouts linked in the chapters are by Yufei Zhao and Evan Chen.
Math rendering by [KaTeX](https://katex.org) (MIT).

## License

- **Code** (`serve.py`, `tools/`, `web/assets/js`, `web/assets/css`, `web/index.html`):
  [MIT](LICENSE).
- **Content** (`web/content/**` — the chapters, problems, hints and solutions):
  [CC BY-NC-SA 4.0](LICENSE-CONTENT.md). Share it, teach from it, adapt it — with
  attribution, non-commercially, under the same terms. Not for repackaging into a paid product.
- Official HBCSE problem statements remain © HBCSE–TIFR and are not covered by either license.
