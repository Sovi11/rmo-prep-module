---
id: tool-03-exam-strategy
title: Exam strategy for the three hours
level: Essential
hours: 1
blurb: How to read the paper, allocate the 180 minutes, decide when to abandon a problem, and what to do in the last twenty minutes.
tags: strategy, time management, exam day
link: RMO past papers — read three papers' worth of instructions :: https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers/
---

## The facts

- **Six problems, three hours, 102 marks — 17 each.** Every problem is worth the same.
- No marks for an answer without justification.
- Each answer starts on a new page, with the question number clearly marked.
- Rulers and compasses allowed; calculators and protractors are not.

Problems are *roughly* ordered by difficulty but the ordering is unreliable, and it is certainly not ordered by difficulty *for you*. The problem you find easiest may be number 5.

## The first ten minutes

**Do not start writing.** Read all six problems, slowly, twice. On your rough sheet, next to each number, write:

- the **topic** (NT / algebra / combi / geometry / inequality), and
- a **confidence mark**: ✓ if you can see a route, ~ if you have a foothold, ✗ if nothing.

This costs ten minutes and routinely earns 17. The most expensive mistake at RMO is spending 70 minutes on problem 1 and discovering at 3:15 that problem 5 was a two-line application of something you know cold.

## The allocation

A workable default for three hours:

| Phase | Time | What you are doing |
|---|---|---|
| Survey | 0:00 – 0:10 | Read all six, rank them |
| First pass | 0:10 – 1:20 | Fully solve and **write up** your two best |
| Second pass | 1:20 – 2:25 | Attack the next two in order of confidence |
| Salvage | 2:25 – 2:50 | Partial credit on everything untouched |
| Check | 2:50 – 3:00 | Reread your written solutions |

The key discipline: **write up each solution as soon as you finish thinking about it**, not at the end. Solutions held in your head are worth zero, and a plan to "write them all up at the end" is how people leave with three solved problems and one written one.

## Knowing when to stop

Set a hard limit of **25 minutes** on any single problem in the first pass. When it expires, ask one question:

> *Do I have a concrete next step, or am I hoping something will occur to me?*

A concrete next step — "I need to show this quadrilateral is cyclic", "I need to bound this sum below" — buys another 15 minutes. Hoping does not. Move on; you can return with a fresh head, and problems often crack on the second visit precisely because you stopped.

## Squeezing out partial credit

In the salvage phase, on a problem you cannot finish, write down — clearly, as numbered claims:

- **The reformulation.** "The condition is equivalent to $abc = 1$." Worth marks.
- **Small cases done correctly.** "For $n = 1,2,3$ the values are $2, 5, 10$, suggesting $n^2+1$." Then prove what you can.
- **A proved lemma**, even if you cannot use it. State it as a claim and prove it.
- **One direction of an iff.** "We show every such $n$ is even" is half the problem and often half the marks.
- In geometry: what you have proved about the configuration, with a clearly labelled diagram.

What earns **nothing**: a page of algebra with no statement of intent, a guessed answer, or "the answer is 5 by inspection".

## Geometry-specific advice

- Draw the diagram **large** — at least a third of a page — and accurately, with a compass. A bad diagram hides the collinearity you needed to spot.
- Draw it a second time if the first turned out degenerate or cramped. Cheap, and often decisive.
- Label as you go. Mark equal angles with matching arcs.
- If synthetic geometry is not working after 20 minutes, switch to **trigonometry or coordinates**. An ugly but complete computational solution scores 17; an elegant idea you cannot finish scores 4.
- Set coordinates to make one thing simple: put a right angle at the origin, or the circumcircle as the unit circle.

## Mistakes that cost whole problems

- **Solving a different problem.** Reread the statement after you finish. "Find all" versus "prove there exists" versus "find the largest" are three different questions.
- **Missing the second half of "find all".** Show your answers work *and* that nothing else does.
- **Losing a case.** If you write "assume $a > b$", something must handle $a \le b$.
- **Arithmetic slips in a case check.** Recompute anything you will build on.
- **Running out of paper mid-argument** and compressing the ending. Ask for more sheets early.

## The night before, and the morning

- Do **no new mathematics** the day before. Reread your own notes; solve two easy problems to stay warm.
- Pack the evening before: admit card, ID, pens (several), pencils, eraser, ruler, compass. No protractor, no calculator, no smartwatch.
- The exam is 1:00–4:00 pm. Eat lunch early enough that you are not digesting at 1:30 or hungry at 3:00.
- Sleep. The marginal value of one more hour of revision is far below the marginal value of one more hour of sleep.

## In the room

Three hours is longer than it feels at 1:05 and shorter than it feels at 3:40. If you are stuck and rattled at the 90-minute mark, put the pen down for sixty seconds, reread the problem you have ignored the longest, and start there. Almost everyone's best problem is one they dismissed in the first pass.

## Problems

### E1 | Warmup | Planning drill
Open the RMO 2025 paper. Give yourself **ten minutes only**: classify all six problems by topic and assign each a confidence mark. Do not solve anything. Record your ranking in the note field.
[hint]
You are practising triage, not mathematics. If you catch yourself solving, stop and move to the next problem.
[/hint]
[sol]
For reference, RMO 2025 breaks down roughly as:

1. Combinatorial geometry / construction (configurations of $n$ lines)
2. Algebra (symmetric system in $a,b,c$)
3. Geometry (two intersecting circles, concyclicity)
4. Number theory (no positive rationals with $x+y+\frac1x+\frac1y = 2025$)
5. Geometry (orthocentre, arc midpoint, prove $\angle BAC = 60^\circ$)
6. Number theory / polynomials (pigeonhole on $p(x)$ mod $n$)

Note the shape: two geometry, two number theory, one algebra, one construction. That distribution is typical. If geometry is your weakest area you have effectively a four-problem paper — which is exactly why the plan runs a geometry track from week one.

There is no right answer to the confidence marks; the exercise is doing the triage inside ten minutes.
[/sol]

### E2 | Easy | Planning drill
Take any past paper. Without solving, write a **time plan**: which two problems you would commit to in the first pass, and in what order. Then check your plan against the official solutions — were your two actually the most tractable?
[hint]
Tractability is not the same as familiarity. A geometry problem you can see the configuration of beats a number theory problem you merely recognise the topic of.
[/hint]
[sol]
The point of this drill is calibration. Two common miscalibrations:

**Over-picking your favourite topic.** If you love number theory you will rank both NT problems high, even when one is a genuinely hard problem. Rank by *route visible*, not by *topic liked*.

**Under-picking constructions.** Problems asking you to *find a configuration* or *give an example* (like RMO 2025 P1) are often the easiest on the paper, because you only have to produce one object and verify it — no "for all" quantifier to handle. Many people skip them because they look unfamiliar.

After a few papers you will see your own pattern. Write it down and correct for it on the day.
[/sol]

### E3 | Medium | Salvage drill
Pick a past problem you could not solve. Spend **15 minutes** writing the best partial-credit answer you can: state what you can prove, prove it, and state clearly what remains. Then compare against the official solution to see how far you got.
[hint]
Start with "We first reformulate the problem" or "We prove the following claim". A stated and proved claim is the unit of partial credit.
[/hint]
[sol]
A good salvage write-up has this skeleton:

> **Reformulation.** The condition $\dots$ is equivalent to $\dots$ [with proof].
>
> **Claim 1.** [Something you can actually prove.] *Proof.* … ∎
>
> **Claim 2.** [A second such thing.] *Proof.* … ∎
>
> If one could further show [the missing step], the result would follow, since … .

That last sentence costs nothing and sometimes earns a mark for showing the structure is understood. What it must **not** be is a claim you did not prove being used as if you had.

Rule of thumb on real papers: a correct reformulation plus one proved lemma is typically 4–7 of the 17.
[/sol]

### E4 | Medium | Full rehearsal
Sit a complete past paper under exam conditions: 1:00–4:00 pm on a Sunday if you can, phone in another room, no notes, answers written in full on loose sheets. Mark it yourself the next day. Record your score in the note field.
[hint]
Conditions matter more than the choice of paper. A mock done at a desk with a phone nearby measures nothing.
[/hint]
[sol]
Do three of these before 15 November — weeks 8 and 9 of the plan schedule them for you.

What to look for when marking, in order of importance:

1. **Did I write up everything I solved?** Unwritten solutions are the most common and most painful loss.
2. **Did my time allocation match my plan?** Look for the problem that ate 70 minutes.
3. **How many marks did I lose to presentation rather than mathematics?** Gaps, missing cases, missing converses.
4. Only then: which topics did I not know.

Items 1–3 are fixable in days. Item 4 is what the rest of the plan is for.
[/sol]
