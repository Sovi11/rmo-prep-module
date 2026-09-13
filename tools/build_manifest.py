#!/usr/bin/env python3
"""Regenerate web/content/manifest.json from the chapter markdown front-matter.

Run this after adding or renaming a chapter:
    python3 tools/build_manifest.py
"""
import hashlib, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT = os.path.join(ROOT, "web", "content")

SECTIONS = [
    dict(id="foundations", icon="◆", title="Foundations & method", weight="every paper",
         blurb="How an RMO answer is marked, the proof techniques that appear everywhere, and how to spend the three hours.",
         chapters=["tool-01-proof-writing", "tool-02-techniques", "tool-03-exam-strategy"]),
    dict(id="number-theory", icon="ℕ", title="Number theory", weight="1–2 of 6 problems",
         blurb="The highest-yield area at RMO: divisibility, congruences, and Diophantine equations reward technique over inspiration.",
         chapters=["nt-01-divisibility", "nt-02-primes", "nt-03-congruences", "nt-04-fermat-euler",
                   "nt-05-diophantine", "nt-06-advanced", "nt-07-digits-floor"]),
    dict(id="algebra", icon="ƒ", title="Algebra", weight="1–2 of 6 problems",
         blurb="Polynomials, functional equations, sequences and complex numbers — where a clean idea finishes a problem in half a page.",
         chapters=["alg-01-polynomials", "alg-02-integer-polynomials", "alg-03-functional-equations",
                   "alg-04-sequences", "alg-05-complex"]),
    dict(id="inequalities", icon="≤", title="Inequalities", weight="0–1 of 6 problems",
         blurb="A small toolkit — AM–GM, Cauchy–Schwarz, convexity — plus the judgement to know which one to reach for.",
         chapters=["ineq-01-amgm", "ineq-02-cauchy", "ineq-03-convexity", "ineq-04-strategy"]),
    dict(id="combinatorics", icon="⧉", title="Combinatorics", weight="1–2 of 6 problems",
         blurb="Counting, pigeonhole, invariants and extremal arguments. The least memorisable area, and the most rewarding to train.",
         chapters=["comb-01-counting", "comb-02-binomial", "comb-03-pie", "comb-04-pigeonhole",
                   "comb-05-recursion", "comb-06-invariants", "comb-07-graphs"]),
    dict(id="geometry", icon="△", title="Geometry", weight="1–2 of 6 problems",
         blurb="Slowest to build, so it runs as a parallel track from week one. Angle chasing first, configurations second, computation as a fallback.",
         chapters=["geo-01-angle-chasing", "geo-02-circles", "geo-03-centers", "geo-04-ceva-menelaus",
                   "geo-05-trig-lengths", "geo-06-transformations", "geo-07-computational"]),
    dict(id="past-papers", icon="▤", title="Past problems by topic", weight="do these last",
         blurb="Real RMO and INMO problems regrouped by the technique they need, so you can drill one skill at a time.",
         chapters=["pyq-number-theory", "pyq-algebra", "pyq-combinatorics", "pyq-geometry"]),
]

PLAN = [
    dict(week=0, start="2026-09-12", end="2026-09-13", dates="Fri 12 – Sun 14 Sep · kickoff",
         title="Diagnostic weekend",
         chapters=["tool-01-proof-writing"],
         focus="""**Do this before anything else.** Sit **RMO 2024** cold: three hours, no notes, no internet, written out in full as if it were the real thing. You will probably solve one or two. That is the point — you need a baseline, not a score.

Then mark it yourself against the official solutions and answer three questions in the scratchpad:
- Which problems did I *understand* but fail to *finish*? (technique gap — fixable fast)
- Which did I not know how to start? (topic gap — that topic goes early in the plan)
- Where did I write something true but unconvincing? (writing gap — read the first chapter today)

Finish the weekend by reading **Writing a proof that scores**. Everything else builds on it."""),

    dict(week=1, start="2026-09-14", end="2026-09-20", dates="Mon 14 – Sun 20 Sep",
         title="Foundations + Number theory I",
         chapters=["tool-02-techniques", "nt-01-divisibility", "nt-02-primes", "geo-01-angle-chasing"],
         focus="""Number theory first, because it converts effort into marks faster than anything else on the paper.

- **Mon–Tue** · Core proof techniques: induction, contradiction, extremal, WLOG.
- **Wed–Thu** · Divisibility, gcd, the Euclidean algorithm, Bézout.
- **Fri** · Primes, unique factorisation, counting divisors, Legendre's formula.
- **Sat** · Geometry track: pure angle chasing. Do not skip this — geometry is the slow skill.
- **Sun** · Redo every problem you flagged. Write two of them out in full.

Target: 28 problems this week, at least 6 written out properly."""),

    dict(week=2, start="2026-09-21", end="2026-09-27", dates="Mon 21 – Sun 27 Sep",
         title="Number theory II · congruences",
         chapters=["nt-03-congruences", "nt-04-fermat-euler", "geo-02-circles"],
         focus="""Modular arithmetic is the single most reusable tool in the subject. By Sunday, "take it mod something" should be an instinct.

- **Mon–Wed** · Congruences, linear congruences, the Chinese Remainder Theorem.
- **Thu–Fri** · Fermat, Euler, Wilson, and the order of an element.
- **Sat** · Geometry: circles, cyclic quadrilaterals, power of a point.
- **Sun** · Mixed set — pull 8 unsolved number theory problems from the problem bank at random.

Target: 30 problems. Start timing yourself: 25 minutes per problem, then look at the hint."""),

    dict(week=3, start="2026-09-28", end="2026-10-04", dates="Mon 28 Sep – Sun 4 Oct",
         title="Number theory III · equations",
         chapters=["nt-05-diophantine", "nt-06-advanced", "nt-07-digits-floor", "geo-03-centers"],
         focus="""Finish number theory. After this week it goes into maintenance — a few problems a week, no new theory.

- **Mon–Tue** · Diophantine equations: factoring, bounding, infinite descent, Pythagorean triples.
- **Wed** · Lifting the exponent, quadratic residues, choosing the right modulus.
- **Thu** · Digits, bases, and the floor function.
- **Fri–Sat** · Geometry: the four centres, the Euler line, the nine-point circle.
- **Sun** · **Past problems by topic → Number theory.** Real RMO problems, timed.

Target: 32 problems. You should now be finishing an average RMO number theory problem in under 30 minutes."""),

    dict(week=4, start="2026-10-05", end="2026-10-11", dates="Mon 5 – Sun 11 Oct",
         title="Algebra I · polynomials",
         chapters=["alg-01-polynomials", "alg-02-integer-polynomials", "geo-04-ceva-menelaus", "pyq-number-theory"],
         focus="""- **Mon–Tue** · Polynomials: roots, Vieta, the factor theorem, symmetric functions.
- **Wed–Thu** · Integer polynomials: the $a-b \\mid P(a)-P(b)$ lemma, rational root theorem, irreducibility. This is where algebra and number theory meet, and RMO loves it.
- **Fri–Sat** · Geometry: Ceva, Menelaus, mass points.
- **Sun** · Half paper: pick any three problems from an old RMO, 90 minutes.

Target: 28 problems, plus the number theory past-problem set finished."""),

    dict(week=5, start="2026-10-12", end="2026-10-18", dates="Mon 12 – Sun 18 Oct",
         title="Algebra II · equations & sequences",
         chapters=["alg-03-functional-equations", "alg-04-sequences", "alg-05-complex", "geo-05-trig-lengths"],
         focus="""- **Mon–Tue** · Functional equations: substitution, injectivity/surjectivity, the standard opening moves.
- **Wed** · Sequences, recurrences, telescoping.
- **Thu** · Complex numbers and roots of unity.
- **Fri–Sat** · Geometry: sine and cosine rules, area formulas, Stewart, Ptolemy. The computational fallback for when synthetic fails.
- **Sun** · Mixed algebra set from the bank.

Target: 30 problems. Halfway point — check the dashboard and see which area is furthest behind."""),

    dict(week=6, start="2026-10-19", end="2026-10-25", dates="Mon 19 – Sun 25 Oct",
         title="Inequalities",
         chapters=["ineq-01-amgm", "ineq-02-cauchy", "ineq-03-convexity", "ineq-04-strategy", "geo-06-transformations", "pyq-algebra"],
         focus="""Inequalities are a compact syllabus with a high floor: a week of concentrated work usually takes someone from "no idea" to "reliably solves the easy one".

- **Mon** · AM–GM, weighted AM–GM.
- **Tue** · Cauchy–Schwarz and the Engel form.
- **Wed** · Convexity, Jensen, rearrangement, Chebyshev.
- **Thu** · Strategy: normalisation, SOS, substitution, when to give up and expand.
- **Fri–Sat** · Geometry: homothety, spiral similarity, radical axes.
- **Sun** · **Past problems by topic → Algebra.**

Target: 30 problems."""),

    dict(week=7, start="2026-10-26", end="2026-11-01", dates="Mon 26 Oct – Sun 1 Nov",
         title="Combinatorics I",
         chapters=["comb-01-counting", "comb-02-binomial", "comb-03-pie", "comb-04-pigeonhole", "geo-07-computational"],
         focus="""- **Mon** · Counting, bijections, stars and bars.
- **Tue** · Binomial coefficients and identities.
- **Wed** · Inclusion–exclusion.
- **Thu–Fri** · Pigeonhole. Deceptively deep — most RMO combinatorics problems are pigeonhole in disguise.
- **Sat** · Geometry: coordinates, vectors, complex numbers. Your last-resort method.
- **Sun** · Mixed set.

Target: 30 problems. Three weeks left — from here on, every Sunday is a timed paper."""),

    dict(week=8, start="2026-11-02", end="2026-11-08", dates="Mon 2 – Sun 8 Nov",
         title="Combinatorics II + first full mock",
         chapters=["comb-05-recursion", "comb-06-invariants", "comb-07-graphs", "pyq-combinatorics", "pyq-geometry"],
         focus="""- **Mon** · Recursions and double counting.
- **Tue–Wed** · Invariants, monovariants, colourings, the extremal principle. The heart of olympiad combinatorics.
- **Thu** · Graph theory basics and combinatorial games.
- **Fri** · Past problems by topic: combinatorics and geometry.
- **Sat** · **Full mock #1** — RMO 2023, three hours, strictly timed, written in full.
- **Sun** · Mark it against the official solutions. Be harsh. Every gap you forgive now costs 17 marks in the real thing.

Target: 26 problems + one full paper."""),

    dict(week=9, start="2026-11-09", end="2026-11-15", dates="Mon 9 – Sun 15 Nov · exam week",
         title="Revision, mocks, and exam day",
         chapters=["tool-03-exam-strategy", "tool-01-proof-writing"],
         focus="""**No new theory this week.** Nothing you learn now will be reliable under pressure; everything you revise now will be.

- **Mon** · Every problem you flagged ⚑, in one sitting. Re-solve, do not re-read.
- **Tue** · **Full mock #2** — RMO 2019, three hours.
- **Wed** · Mark it. Rewrite your two weakest solutions properly.
- **Thu** · Re-read your own chapter notes end to end. This is why you wrote them.
- **Fri** · **Full mock #3** — RMO 2017, three hours. Last one.
- **Sat** · Light. Read the exam strategy chapter. One easy problem per topic to stay warm. Pack: pens, geometry box, admit card. Sleep early.
- **Sun 15 Nov · 1:00–4:00 pm** · RMO. Read all six problems in the first five minutes. Start with the one you can finish, not the one you find interesting.

Good luck."""),
]

RMO = "https://olympiads.hbcse.tifr.res.in/wp-content/uploads"
OLD = "https://olympiads.hbcse.tifr.res.in/olympiads/wp-content/uploads"

PAPERS = [
    # ---- RMO ----
    dict(id="rmo2025a", group="RMO — the main event", title="RMO 2025 · Paper 1 (non-KV/JNV)",
         note="most recent · closest to what you will sit",
         links={"Paper": f"{RMO}/2025/11/RMO-2025-Paper-1.pdf", "Solutions": f"{RMO}/2025/12/RMO-2025-solutions.pdf",
                "Hindi": f"{RMO}/2025/11/rmo_nov_2025_paper-1_hindi.pdf"}),
    dict(id="rmo2025b", group="RMO — the main event", title="RMO 2025 · Paper 2 (KV/JNV)",
         links={"Paper": f"{RMO}/2025/11/RMO-2025-Paper-2.pdf", "Solutions": f"{RMO}/2025/12/KV-RMO-2025-solutions.pdf"}),
    dict(id="rmo2024", group="RMO — the main event", title="RMO 2024", note="questions and official solutions in one file",
         links={"Paper + solutions": f"{RMO}/2024/11/Official-Solutions-for-RMO-2024.pdf"}),
    dict(id="rmo2023a", group="RMO — the main event", title="RMO 2023 · non-KV/JNV",
         links={"Paper": f"{RMO}/2023/10/rmo-combined.pdf", "Solutions": f"{RMO}/2023/11/NonKV-or-Non-JNV.pdf"}),
    dict(id="rmo2023b", group="RMO — the main event", title="RMO 2023 · KV/JNV",
         links={"Paper": f"{RMO}/2023/10/KVJNV_Bilingual.pdf", "Solutions": f"{RMO}/2023/11/KV-n-JNV.pdf"}),
    dict(id="rmo2019", group="RMO — the main event", title="RMO 2019",
         links={"Paper": f"{RMO}/2019/10/rmoengfirst2019.pdf", "Solutions": f"{RMO}/2019/10/rmosolutions2019.pdf"}),
    dict(id="rmo2018", group="RMO — the main event", title="RMO 2018", note="solutions include the problems",
         links={"Solutions (7 Oct)": f"{OLD}/2018/05/solutions-crmo-18.pdf",
                "Solutions (KL–TN, 28 Oct)": f"{OLD}/2018/05/solutions-KL-TN-18.pdf"}),
    dict(id="rmo2017", group="RMO — the main event", title="RMO 2017",
         links={"Paper": f"{OLD}/2017/10/rmo2017.pdf", "Solutions": f"{OLD}/2017/10/sol-crmo-20171.pdf"}),

    # ---- CRMO regional sets ----
    dict(id="crmo2016", group="CRMO — regional sets (4 papers per year)", title="CRMO 2016 · Papers 1–4",
         note="four different regional papers — a whole month of Sundays",
         links={f"Paper {i}": f"{OLD}/2016/11/QPcrmo-16_{i}.pdf" for i in range(1, 5)} |
               {"Solutions (P4)": f"{OLD}/2016/11/crmo-16_4.pdf"}),
    dict(id="crmo2015", group="CRMO — regional sets (4 papers per year)", title="CRMO 2015 · Papers 1–5",
         note="paper 5 is the Mumbai region set",
         links={f"Paper {i}": f"{OLD}/2016/09/crmo-15-{i}.pdf" for i in range(1, 6)}),
    dict(id="crmo2014", group="CRMO — regional sets (4 papers per year)", title="CRMO 2014 · Papers 1–5",
         links={f"Paper {i}": f"{OLD}/2016/09/crmo-14-{i}.pdf" for i in range(1, 6)}),
    dict(id="crmo2013", group="CRMO — regional sets (4 papers per year)", title="CRMO 2013 · Papers 1–4 + Mumbai",
         links={f"Paper {i}": f"{OLD}/2016/09/crmo-2013-paper-{i}.pdf" for i in range(1, 5)} |
               {"Mumbai region": f"{OLD}/2016/09/rmo-2013-mumbai-region.pdf"}),
    dict(id="crmo2012", group="CRMO — regional sets (4 papers per year)", title="CRMO 2012 · Papers 1–4 + Mumbai",
         note="files include solutions",
         links={f"Paper {i}": f"{OLD}/2016/09/crmosol-12-{i}.pdf" for i in range(1, 5)} |
               {"Mumbai region": f"{OLD}/2016/09/rmo-2012-mumbai-region.pdf"}),
    dict(id="rmoarchive", group="CRMO — regional sets (4 papers per year)",
         title="RMO / CRMO 2000–2011 — the full HBCSE archive",
         note="older papers are shorter and gentler; good early practice",
         links={"Browse the archive": "https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers/"}),

    # ---- INMO ----
    dict(id="inmo2026", group="INMO — the stage after RMO (stretch practice)", title="INMO 2026",
         note="harder than RMO — use single problems, not whole papers",
         links={"Paper": f"{RMO}/2026/01/INMO-2026.pdf"}),
    dict(id="inmo2025", group="INMO — the stage after RMO (stretch practice)", title="INMO 2025",
         links={"Paper": f"{RMO}/2025/01/INMO2025_Hindi_English.pdf"}),
    dict(id="inmo2024", group="INMO — the stage after RMO (stretch practice)", title="INMO 2024",
         links={"Paper": f"{RMO}/2024/03/INMO2024-Q.-Paper.pdf", "Solutions": f"{RMO}/2024/02/INMO_2024_final_solutions.pdf"}),
    dict(id="inmo2023", group="INMO — the stage after RMO (stretch practice)", title="INMO 2023",
         links={"Paper": f"{RMO}/2023/01/INMO23_qp.pdf", "Solutions": f"{RMO}/2023/03/solutions.pdf"}),
    dict(id="inmo2020", group="INMO — the stage after RMO (stretch practice)", title="INMO 2020",
         links={"Paper": f"{RMO}/2020/04/inmo-20-QP-4_0.pdf", "Solutions": f"{RMO}/2020/02/sol-inmo-20.pdf"}),
    dict(id="inmo2016", group="INMO — the stage after RMO (stretch practice)", title="INMO 2016",
         links={"Paper": f"{OLD}/2016/09/INMO-2016-English-Version.pdf", "Solutions": f"{OLD}/2016/09/sol-inmo16.pdf"}),

    # ---- IOQM ----
    dict(id="ioqm2025", group="IOQM — stage 1 (speed & accuracy maintenance)", title="IOQM 2025",
         note="keep one of these for a rainy day — good for arithmetic speed",
         links={"Paper": f"{RMO}/2025/10/en.M1.pdf", "Answer key": f"{RMO}/2025/10/final-key-7th-September.pdf"}),
    dict(id="ioqm2024", group="IOQM — stage 1 (speed & accuracy maintenance)", title="IOQM 2024",
         links={"Paper": f"{RMO}/2025/04/ioqm-2024-english.pdf", "Answer key": f"{RMO}/2025/04/ioqm2024-answerkey.pdf"}),
    dict(id="ioqm2021", group="IOQM — stage 1 (speed & accuracy maintenance)", title="IOQM 2021 · Parts A & B",
         note="Part B is proof-based — closest IOQM ever got to RMO",
         links={"Part A": f"{RMO}/2022/07/IOQM2021_partA_final.pdf",
                "Part B + solutions": f"{RMO}/2022/07/Part_B_2022_Solutions_revised.pdf"}),
]


def read_meta(path):
    with open(path, encoding="utf-8") as fh:
        raw = fh.read()
    m = re.match(r"^---\n(.*?)\n---\n", raw, re.S)
    meta = {}
    if m:
        for line in m.group(1).split("\n"):
            kv = re.match(r"^([\w-]+):\s*(.*)$", line)
            if kv and kv.group(1) not in ("video", "sheet", "link"):
                meta[kv.group(1)] = kv.group(2).strip()
    # only headings *after* the "## Problems" marker are problems; "###" is also
    # used for sub-sections inside the theory, which must not be counted.
    idx = raw.find("\n## Problems")
    n_problems = len(re.findall(r"^###\s", raw[idx:], re.M)) if idx != -1 else 0
    return meta, n_problems


ASSET_JS = ["md.js", "store.js", "content.js", "app.js"]


def stamp_assets():
    """Give every own asset a ?v=<hash> so browsers can never serve a stale module.

    ES modules are cached per-URL and survive a normal reload, so editing a file
    without changing its URL leaves the old code running. Rewriting the version
    query on each build is idempotent and fixes that.
    """
    web = os.path.join(ROOT, "web")
    js_dir = os.path.join(web, "assets", "js")
    css = os.path.join(web, "assets", "css", "styles.css")

    h = hashlib.sha1()
    for path in [os.path.join(js_dir, f) for f in ASSET_JS] + [css]:
        with open(path, "rb") as fh:
            h.update(re.sub(rb"\?v=[0-9a-f]{8}", b"", fh.read()))
    ver = h.hexdigest()[:8]

    # 1. import specifiers inside the modules
    for f in ASSET_JS:
        path = os.path.join(js_dir, f)
        with open(path, encoding="utf-8") as fh:
            src = fh.read()
        new = re.sub(r"(from\s+'\./)([\w-]+\.js)(\?v=[0-9a-f]{8})?(')",
                     lambda m: f"{m.group(1)}{m.group(2)}?v={ver}{m.group(4)}", src)
        if new != src:
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(new)

    # 2. the entry points in index.html
    idx = os.path.join(web, "index.html")
    with open(idx, encoding="utf-8") as fh:
        html = fh.read()
    html = re.sub(r'(href="assets/css/styles\.css)(\?v=[0-9a-f]{8})?(")',
                  lambda m: f"{m.group(1)}?v={ver}{m.group(3)}", html)
    html = re.sub(r'(src="assets/js/app\.js)(\?v=[0-9a-f]{8})?(")',
                  lambda m: f"{m.group(1)}?v={ver}{m.group(3)}", html)
    with open(idx, "w", encoding="utf-8") as fh:
        fh.write(html)
    return ver


def main():
    sections, missing, total_problems = [], [], 0
    for sec in SECTIONS:
        chapters = []
        for cid in sec["chapters"]:
            folder = {"foundations": "toolbox", "past-papers": "papers"}.get(sec["id"], sec["id"])
            rel = f"{folder}/{cid}.md"
            path = os.path.join(CONTENT, rel)
            if not os.path.exists(path):
                missing.append(rel)
                continue
            meta, n = read_meta(path)
            total_problems += n
            chapters.append(dict(id=cid, file=rel, title=meta.get("title", cid),
                                 blurb=meta.get("blurb", ""), level=meta.get("level", "Core"),
                                 hours=meta.get("hours", ""), problems=n))
        sections.append({**sec, "chapters": chapters})

    for w in PLAN:
        w["focus"] = w["focus"].strip()

    out = dict(generated=True, exam=dict(name="RMO 2026", date="2026-11-15", time="13:00–16:00 IST",
                                         problems=6, duration="3 hours"),
               sections=sections, plan=PLAN, papers=PAPERS)
    with open(os.path.join(CONTENT, "manifest.json"), "w", encoding="utf-8") as fh:
        json.dump(out, fh, indent=1, ensure_ascii=False)

    built = sum(len(s["chapters"]) for s in sections)
    ver = stamp_assets()
    print(f"manifest: {built} chapters, {total_problems} problems, "
          f"{len(PAPERS)} paper entries, assets v={ver}")
    if missing:
        print(f"  still to write ({len(missing)}): " + ", ".join(missing))
    return 0


if __name__ == "__main__":
    sys.exit(main())
