---
id: tool-01-proof-writing
title: Writing a proof that scores
level: Essential
hours: 3
blurb: What a marker actually rewards, how to structure a solution, and the six ways people throw away marks they had earned.
tags: proof writing, presentation, marking
link: HBCSE past papers (read any official solution as a model) :: https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers/
link: Evan Chen — advice and handouts :: https://web.evanchen.cc/handouts/
video: Search: how to write olympiad proofs :: https://www.youtube.com/results?search_query=how+to+write+olympiad+proofs+RMO
---

## Why this chapter comes first

You have just scored 50 on IOQM, which means you can find answers. RMO does not pay for answers. It pays for **arguments** — and it pays in blocks of 17.

A marker sitting with your script has one question in mind: *does this establish the result, for every case, without gaps?* They are not hostile, but they will not fill in a step for you, and they cannot give you credit for something you were clearly thinking but did not write.

The good news is that this is a **learnable, mechanical skill**. It is by far the cheapest 20 marks available to you in the next nine weeks.

## The anatomy of a solution

Every well-written olympiad solution has the same four parts.

**1. Setup.** Name everything you will use. If the problem says "let $n$ be a positive integer", and you want to write $n = 2^a m$ with $m$ odd, say so explicitly. If it is geometry, say which configuration you are in.

> Let $p$ be a prime divisor of $n$, and write $n = p^k m$ where $p \nmid m$.

**2. The claim structure.** Say what you are going to prove before you prove it. This is the single biggest readability upgrade available, and it earns partial credit even when the proof that follows is incomplete.

> **Claim.** Every such $n$ is divisible by $3$.
> *Proof.* … ∎

If you state a correct claim and prove it, you are paid for it even if you never assemble the claims into a final answer.

**3. The work.** Complete sentences. Each line should follow from the previous ones by something a reader can name — an identity, a theorem you cite, a case you are in.

**4. The conclusion.** Return to what was asked, in the words of the problem.

> Hence $\angle BAC = 60^\circ$, as required. ∎

That last line takes four seconds and reassures the marker you actually answered the question.

## The six ways people lose marks they had earned

**1. "Clearly", "obviously", "it is easy to see".** These words appear exactly where a proof is missing. If it really is clear, one extra line costs nothing. If it is not, you have just advertised the gap.

**2. Answering without proving the answer is the only one.** "Find all $n$ such that…" has *two* halves: show your candidates work, and show nothing else does. Most people write half and take half the marks. Always write the sentence: *"Conversely, suppose $n$ satisfies the condition…"*

**3. Checking cases, but not all of them.** If your argument splits into $a > b$, $a = b$, $a < b$, all three must appear. If you genuinely can reduce by symmetry, say **"without loss of generality $a \le b$, since the expression is symmetric in $a$ and $b$"** — and make sure it really is symmetric.

**4. "Similarly" doing too much work.** "Similarly, $\angle ABC = \angle ADC$" is fine when the argument is a literal relabelling. It is not fine when the second case needs a different idea.

**5. Geometry configuration issues.** If your proof assumes a point lies inside a segment, and the problem allows it to lie outside, you have proved one case. Directed angles (mod $180^\circ$) fix most of this; otherwise state the configuration you are treating.

**6. Starting from what you want to prove.** Writing a chain that *begins* with the thing to be shown and ends at something true proves nothing, unless every step is reversible and you say so. Reverse it, or explicitly note the equivalences.

## A worked comparison

Take the problem: *prove that if $n$ is a positive integer, $n^2 + n + 1$ is never divisible by $5$.*

**How it usually gets written:**

> $n^2+n+1$ mod 5. If $n=0,1,2,3,4$ we get $1,3,2,3,1$. None are 0. Done.

The mathematics is right. The write-up is missing the reason this is enough, and a marker has to supply it. That is where marks go.

**How it should be written:**

> Every integer $n$ is congruent to exactly one of $0,1,2,3,4 \pmod 5$, and $n^2+n+1 \pmod 5$ depends only on $n \bmod 5$, since congruences may be added and multiplied. So it suffices to check five cases:
>
> | $n \bmod 5$ | 0 | 1 | 2 | 3 | 4 |
> |---|---|---|---|---|---|
> | $n^2+n+1 \bmod 5$ | 1 | 3 | 2 | 3 | 1 |
>
> In no case is the value $0 \pmod 5$. Hence $5 \nmid n^2+n+1$ for every integer $n$. ∎

Two extra sentences. The first explains *why five cases suffice*; the last returns to the question. Same idea, full marks instead of most of them.

## Things you may use without proof

At RMO you may quote, by name and without proof:

- Any named theorem in the standard syllabus: Fermat's little theorem, Euler's theorem, Wilson, CRT, AM–GM, Cauchy–Schwarz, Ceva, Menelaus, Ptolemy, the power of a point, Jensen.
- Standard facts about triangle centres, cyclic quadrilaterals, and similar triangles.

You should **not** quote:

- A "lemma" you invented five minutes ago. Prove it, as a stated claim.
- Results that essentially *are* the problem.
- Anything from calculus, if the problem is clearly meant to be elementary. It is not forbidden, but an $\varepsilon$–$\delta$ argument in a problem about integers usually signals you have missed the intended route — and it is much easier to get wrong.

## The 90-second check before you move on

Before leaving a problem, read your own solution as if you were the marker:

1. Is every symbol I used defined?
2. Did I prove the "only" half as well as the "exists" half?
3. Is there a word like *clearly*, *obviously*, or *similarly* covering a real gap?
4. Have I handled every case my own argument opens up?
5. Does the last line answer the question that was asked?

## Problems

These are writing exercises, not hard mathematics. Do them **on paper**, in full. The mathematics in each is easy on purpose — the whole difficulty is presentation.

### W1 | Warmup | Writing drill
Prove that the sum of two odd integers is even. Write it out as a complete proof with setup, work and conclusion — aim for three or four sentences, no more.
[hint]
"Odd" needs a definition before you can use it: $n$ is odd iff $n = 2k+1$ for some integer $k$. Everything follows from substituting.
[/hint]
[sol]
Let $m$ and $n$ be odd integers. By definition there exist integers $j,k$ with $m = 2j+1$ and $n = 2k+1$. Then
$$m + n = (2j+1) + (2k+1) = 2(j + k + 1).$$
Since $j+k+1$ is an integer, $m+n$ is twice an integer, i.e. even. ∎

Note what makes this complete: the definition is invoked explicitly, the witness $j+k+1$ is named as an integer, and the final line uses the word "even" from the question.
[/sol]

### W2 | Warmup | Writing drill
Find all integers $n$ such that $n^2 - 4n + 3 = 0$, and write the solution so that both halves — that your answers work, and that there are no others — are visible.
[hint]
Factorising gives the "no others" half for free, provided you say *why*: a product of two integers is zero only if one of them is zero.
[/hint]
[sol]
We have $n^2 - 4n + 3 = (n-1)(n-3)$.

Suppose $n$ is an integer with $n^2-4n+3 = 0$. Then $(n-1)(n-3) = 0$. Since a product of real numbers is zero only when one factor is zero, either $n = 1$ or $n = 3$.

Conversely, substituting $n=1$ gives $1 - 4 + 3 = 0$, and $n = 3$ gives $9 - 12 + 3 = 0$. Both work.

Hence the solutions are exactly $n \in \{1, 3\}$. ∎

The paragraph beginning "Conversely" is the half most people omit. Here it is trivial; in a real problem it is often where the marks are.
[/sol]

### W3 | Easy | Writing drill
Prove that among any three consecutive integers, exactly one is divisible by 3. Pay attention to the word *exactly*.
[hint]
Write the three integers in terms of one of them, then use the division algorithm: every integer is $3q$, $3q+1$ or $3q+2$ for a unique choice.
[/hint]
[sol]
Let the integers be $n, n+1, n+2$. By the division algorithm there are unique integers $q, r$ with $n = 3q + r$ and $r \in \{0,1,2\}$. We treat the three cases.

- If $r = 0$: $n = 3q$ is divisible by 3. Then $n+1 = 3q+1$ and $n+2 = 3q+2$ leave remainders 1 and 2, so neither is divisible by 3.
- If $r = 1$: $n+2 = 3(q+1)$ is divisible by 3, while $n = 3q+1$ and $n+1 = 3q+2$ are not.
- If $r = 2$: $n+1 = 3(q+1)$ is divisible by 3, while $n = 3q+2$ and $n+2 = 3q+4 = 3(q+1)+1$ are not.

In every case exactly one of the three is divisible by 3. Since $r$ is uniquely determined, these cases are exhaustive and mutually exclusive. ∎

The last sentence is what makes the case split legitimate. Without it, a marker must check your cases really do cover everything.
[/sol]

### W4 | Easy | Writing drill
Here is a flawed proof. Find the flaw, state it precisely, and write a correct proof.
> **Claim.** For all positive reals $a, b$: $\dfrac{a}{b} + \dfrac{b}{a} \ge 2$.
> *Proof.* $\frac{a}{b} + \frac{b}{a} \ge 2 \iff a^2 + b^2 \ge 2ab \iff (a-b)^2 \ge 0$, which is true. ∎
[hint]
The algebra is correct, and the $\iff$ signs are even genuine here. So what exactly would a marker object to? Think about what you multiplied by, and whether you said so.
[/hint]
[sol]
**The flaw.** The proof is written backwards — it starts from the thing to be proved — and the first $\iff$ silently multiplies both sides by $ab$. That step preserves the inequality *only because $ab > 0$*, which is never stated. If $a,b$ were allowed to have opposite signs the chain would be false (take $a=1, b=-1$: the left side is $-2$).

As it happens every step is reversible, so the argument is salvageable. But a marker should not have to verify that for you, and in problems where the steps are *not* reversible, this style produces a genuinely wrong proof.

**A correct write-up.**

Let $a, b > 0$. Since squares of reals are non-negative,
$$(a-b)^2 \ge 0 \implies a^2 - 2ab + b^2 \ge 0 \implies a^2 + b^2 \ge 2ab.$$
Because $a,b > 0$ we have $ab > 0$, so dividing both sides by $ab$ preserves the inequality:
$$\frac{a^2+b^2}{ab} \ge 2, \qquad \text{i.e.} \qquad \frac{a}{b} + \frac{b}{a} \ge 2.$$
Equality holds precisely when $(a-b)^2 = 0$, that is when $a = b$. ∎

Two habits to take from this: **run the argument forwards**, and **name the sign condition** whenever you multiply or divide an inequality.
[/sol]

### W5 | Medium | Writing drill
Prove that $\sqrt{2}$ is irrational, and write it so that every use of the phrase "without loss of generality" or "we may assume" is justified.
[hint]
The standard proof assumes $\sqrt 2 = p/q$ in lowest terms. That "in lowest terms" is an assumption you are entitled to — but say *why* you are entitled to it.
[/hint]
[sol]
Suppose, for contradiction, that $\sqrt 2$ is rational. Then $\sqrt2 = p/q$ for some integers $p, q$ with $q \ne 0$.

Every non-zero rational can be written with $\gcd(p,q) = 1$: divide numerator and denominator by their gcd. **So we may assume $\gcd(p,q) = 1$**, and this is the justification.

Squaring, $2 = p^2/q^2$, so $p^2 = 2q^2$. Hence $p^2$ is even. If $p$ were odd, $p = 2k+1$ would give $p^2 = 4k^2+4k+1$, which is odd; so $p$ is even, say $p = 2m$. Substituting, $4m^2 = 2q^2$, so $q^2 = 2m^2$, and by the same argument $q$ is even.

But then $2 \mid p$ and $2 \mid q$, contradicting $\gcd(p,q) = 1$.

Hence no such $p,q$ exist, and $\sqrt 2$ is irrational. ∎

Note the middle paragraph: "$p^2$ even $\implies p$ even" is a real step and gets its own one-line proof. Leaving it out is the most common gap in this classic.
[/sol]

### W6 | Medium | Writing drill
Take any problem you have already solved from a past RMO paper and write it out in full, timed at 20 minutes, as if it were being marked. Then reread it against the five-point check above and mark your own script out of 17. Record the score in the note field.
[hint]
Be harsh. The realistic question is not "did I have the idea" but "could a stranger follow this to the end without guessing what I meant".
[/hint]
[sol]
There is no model answer here — the exercise is the self-marking. A rough guide to how RMO partial credit tends to work:

- **17** — complete and correct, all cases, clearly written.
- **12–15** — essentially complete, one small gap or an unjustified step.
- **7–10** — a correct main idea, carried some distance, but the argument does not close.
- **2–5** — a useful observation or the right setup, nothing decisive.
- **0–1** — an answer with no justification, or work that does not lead anywhere.

If you scored yourself above 12 and the write-up is under half a page, reread it: it is usually missing a "conversely" or a case.
[/sol]
