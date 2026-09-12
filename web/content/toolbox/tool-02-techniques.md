---
id: tool-02-techniques
title: Core proof techniques
level: Essential
hours: 5
blurb: Induction, contradiction, the extremal principle, WLOG and invariance — the five moves that appear in every area of the syllabus.
tags: induction, contradiction, extremal, WLOG, invariance
link: Evan Chen — handouts index :: https://web.evanchen.cc/handouts/
link: Cut the Knot — proofs and puzzles :: https://www.cut-the-knot.org/
video: Search: mathematical induction olympiad :: https://www.youtube.com/results?search_query=strong+induction+olympiad+proof
---

## The five moves

Almost every RMO problem yields to one of five general strategies. Learning them is not a substitute for knowing number theory or geometry, but it tells you what to *try* when you are staring at a blank page.

1. **Induction** — when the problem is indexed by $n$.
2. **Contradiction** — when the conclusion is a non-existence or an "impossible" statement.
3. **The extremal principle** — when the objects are finite and you need a foothold.
4. **WLOG and symmetry** — when the problem has interchangeable parts.
5. **Invariance and monovariance** — when something changes step by step.

## 1. Induction

**Weak induction.** To prove $P(n)$ for all $n \ge n_0$: prove $P(n_0)$, then prove $P(k) \implies P(k+1)$.

**Strong induction.** Same, but you may assume $P(n_0), P(n_0+1), \dots, P(k)$ all hold when proving $P(k+1)$. Use it whenever the step reaches back more than one term — recurrences with two previous terms, or arguments that split $n$ into two smaller pieces.

The hard part is almost never the base case; it is finding a statement strong enough to induct on. If your induction is stuck, **try proving something stronger**. A stronger hypothesis gives a stronger tool in the inductive step. This sounds paradoxical and is one of the most useful facts in olympiad mathematics.

> **Example.** Prove $\displaystyle\sum_{k=1}^{n} \frac{1}{k^2} < 2$ for all $n$.
>
> Induction on the statement as written fails: knowing the sum is $< 2$ tells you nothing about the sum plus $1/(n+1)^2$. But the stronger statement
> $$\sum_{k=1}^{n} \frac{1}{k^2} \le 2 - \frac{1}{n}$$
> goes straight through, because $2 - \frac1n + \frac{1}{(n+1)^2} \le 2 - \frac{1}{n+1}$ reduces to $\frac{1}{(n+1)^2} \le \frac1n - \frac1{n+1} = \frac{1}{n(n+1)}$, which is true.

**Where induction goes wrong at RMO:** proving $P(k) \implies P(k+1)$ only for $k$ large, and never checking that the chain reaches back to the base case; or "inducting" on a statement about *all* configurations of size $n$ by building every size-$(n+1)$ configuration from a size-$n$ one — which is only legitimate if every size-$(n{+}1)$ configuration really does arise that way.

## 2. Contradiction

Assume the negation, derive something false. The technique is simple; the skill is in **negating correctly**.

- The negation of "for all $x$, $P(x)$" is "there exists $x$ with $\lnot P(x)$."
- The negation of "there exist $x,y$ with $P$" is "for all $x,y$, $\lnot P$."
- The negation of "$A \implies B$" is "$A$ and not $B$" — *not* "$A \implies \lnot B$."

Contradiction is the natural move for: irrationality, non-existence of solutions, "prove there are infinitely many …", and minimal-counterexample arguments.

**Infinite descent** is contradiction with teeth. To show an equation has no positive integer solutions: assume one exists, take the one minimising some positive integer quantity, and construct a strictly smaller solution. Since a set of positive integers has no infinite strictly decreasing chain, this is impossible.

## 3. The extremal principle

> Every finite non-empty set of integers has a least element and a greatest element. Every finite set of points has two that are closest together.

Trivial, and enormously powerful. When you have no handle on a configuration, **pick the extreme one** and ask what its extremality forbids.

> **Example.** Finitely many points in the plane, not all collinear. Prove some line passes through exactly two of them. *(Sylvester–Gallai)*
>
> Consider all pairs (point $P$, line $\ell$ through at least two of the points) with $P \notin \ell$, and choose the pair minimising the distance from $P$ to $\ell$. If $\ell$ contained three points, two would lie on the same side of the foot of the perpendicular from $P$, and one checks that this produces a strictly smaller distance — contradiction. So $\ell$ has exactly two.

Typical extremal choices: the largest element, the smallest counterexample, the longest path in a graph, the triangle of maximum area, the closest pair of points, the vertex of highest degree.

## 4. WLOG and symmetry

"Without loss of generality" is a promise that relabelling does not change the problem. It is legitimate exactly when the hypothesis *and* conclusion are invariant under the relabelling you are performing.

- Legitimate: "The expression is symmetric in $a,b,c$, so WLOG $a \ge b \ge c$."
- Legitimate: "Both conditions are unchanged by scaling, so WLOG $a+b+c = 1$." (Normalisation.)
- **Not** legitimate: "WLOG $a \ge b \ge c$" when the expression is only *cyclic* — invariant under $a \to b \to c \to a$ but not under swapping $a$ and $b$. In a cyclic problem you may assume $a = \max$, but not a full ordering.

That last distinction eats a surprising number of inequality solutions.

## 5. Invariance and monovariance

Given a process — moves on a board, replacing numbers, flipping coins — ask:

- **What never changes?** An *invariant*. If the start and target differ in the invariant, the target is unreachable.
- **What only moves one way?** A *monovariant*. If a positive integer quantity strictly decreases at every step, the process terminates.

Standard invariants: a sum or product mod $n$; the number of odd entries; a colouring parity; total "weight" under a clever weighting.

> **Example.** Numbers $1,2,\dots,2n$ are on a board. A move erases two numbers $a,b$ and writes $|a-b|$. Prove the last number left has the same parity as $1+2+\cdots+2n$.
>
> Replacing $a,b$ by $|a-b|$ changes the sum by $a + b - |a-b|$, which is $2\min(a,b)$ — always even. So **the sum mod 2 is invariant**, and the final number is congruent to the initial total.

## Common traps

- Using induction where the inductive step tacitly assumes the result for a *different* $n$ than you proved.
- "Take the smallest counterexample" without checking the set of counterexamples is a set of *positive integers* (descent needs well-ordering).
- Declaring WLOG on a merely cyclic expression.
- Finding an invariant that is preserved and concluding the target *is* reachable. An invariant can only prove **impossibility**; reachability needs an explicit construction.

## Problems

### P1 | Warmup | Classic
Prove by induction that $1 + 2 + \cdots + n = \dfrac{n(n+1)}{2}$ for every positive integer $n$, and write the base case and inductive step explicitly.
[hint]
Base case $n=1$. For the step, add $(k+1)$ to both sides of the hypothesis and factor.
[/hint]
[sol]
**Base case.** For $n=1$ the left side is $1$ and the right side is $\frac{1\cdot 2}{2} = 1$. ✓

**Inductive step.** Suppose the identity holds for some $k \ge 1$, i.e. $1+\cdots+k = \frac{k(k+1)}{2}$. Then
$$1 + \cdots + k + (k+1) = \frac{k(k+1)}{2} + (k+1) = (k+1)\left(\frac{k}{2} + 1\right) = \frac{(k+1)(k+2)}{2},$$
which is the statement for $n = k+1$.

By induction the identity holds for all $n \ge 1$. ∎
[/sol]

### P2 | Easy | Classic
Prove that $n^3 - n$ is divisible by 6 for every integer $n$, twice: once by induction and once without.
[hint]
Without induction: factor. $n^3 - n = (n-1)n(n+1)$ — three consecutive integers.
[/hint]
[sol]
**Without induction.** $n^3 - n = n(n^2-1) = (n-1)n(n+1)$, a product of three consecutive integers. Among any three consecutive integers one is divisible by 3 and at least one is even, so the product is divisible by $2 \cdot 3 = 6$. ∎

**By induction** (for $n \ge 0$; negative $n$ follows since $n^3-n$ is odd in $n$). Base: $0^3 - 0 = 0$, divisible by 6. Step: suppose $6 \mid k^3 - k$. Then
$$(k+1)^3 - (k+1) = k^3 + 3k^2 + 3k + 1 - k - 1 = (k^3 - k) + 3k(k+1).$$
The first bracket is divisible by 6 by hypothesis. In $3k(k+1)$, one of $k,k+1$ is even, so $k(k+1)$ is even and $3k(k+1)$ is divisible by 6. Hence the sum is divisible by 6. ∎

The factoring proof is better: shorter, and it explains *why*.
[/sol]

### P3 | Easy | Classic
Prove that there are infinitely many primes.
[hint]
Suppose not, so there are finitely many $p_1, \dots, p_k$. Build a number that none of them divides.
[/hint]
[sol]
Suppose for contradiction that there are finitely many primes, $p_1, p_2, \dots, p_k$. Let
$$N = p_1 p_2 \cdots p_k + 1.$$
Since $N > 1$, it has some prime divisor $q$ (every integer greater than 1 does). By assumption $q = p_i$ for some $i$. But $p_i \mid p_1\cdots p_k$, and $p_i \mid N$, so $p_i \mid N - p_1\cdots p_k = 1$ — impossible, since $p_i \ge 2$.

Hence there are infinitely many primes. ∎

Note the step "every integer greater than 1 has a prime divisor" is doing real work and deserves its mention; it follows from taking the smallest divisor greater than 1.
[/sol]

### P4 | Medium | Invariance
The numbers $1, 2, \dots, 2026$ are written on a board. Repeatedly, two numbers $a, b$ are erased and $a + b$ is written in their place, until one number remains. What is it? Now change the move to "write $|a-b|$" — can the final number be $0$?
[hint]
For the first, the sum is invariant. For the second, look at the sum modulo 2.
[/hint]
[sol]
**First process.** Each move replaces $a, b$ by $a+b$, leaving the total sum unchanged. So the final number equals
$$1 + 2 + \cdots + 2026 = \frac{2026 \cdot 2027}{2} = 1013 \cdot 2027 = 2{,}053{,}351.$$

**Second process.** Replacing $a,b$ by $|a-b|$ changes the sum by $a+b-|a-b| = 2\min(a,b)$, which is even. So **the parity of the sum is invariant**. The initial sum is $1013 \cdot 2027$, a product of two odd numbers, hence odd. The final single number therefore must be odd, so it cannot be $0$. ∎
[/sol]

### P5 | Medium | Extremal
In a group of $n \ge 2$ people, every person has at least one friend (friendship is mutual). Prove that there are two people with the same number of friends.
[hint]
The possible friend-counts lie in $\{1, 2, \dots, n-1\}$ — that is $n-1$ values for $n$ people. Pigeonhole. Why can nobody have $0$ friends, and why does that matter?
[/hint]
[sol]
Each person has between $1$ and $n-1$ friends: at least 1 by hypothesis, and at most $n-1$ since one cannot be one's own friend.

So the $n$ friend-counts all lie in the set $\{1, 2, \dots, n-1\}$, which has $n-1$ elements. By the pigeonhole principle two people share a value. ∎

*Remark.* If the hypothesis "everyone has at least one friend" is dropped, the statement is still true but needs an extra step: the counts lie in $\{0,\dots,n-1\}$, which has $n$ values, so pigeonhole does not apply directly. Instead note that $0$ and $n-1$ cannot both occur — someone with $n-1$ friends is friends with everyone, including the supposed isolated person. So only $n-1$ of the $n$ values are actually available.
[/sol]

### P6 | Medium | Strengthening
Prove that for every positive integer $n$, $\displaystyle \frac{1}{1^2} + \frac{1}{2^2} + \cdots + \frac{1}{n^2} < 2$.
[hint]
Direct induction fails. Prove the stronger statement $\sum_{k=1}^n \frac{1}{k^2} \le 2 - \frac{1}{n}$ instead.
[/hint]
[sol]
We prove the stronger claim: for all $n \ge 1$,
$$\sum_{k=1}^{n} \frac{1}{k^2} \le 2 - \frac{1}{n}.$$

**Base.** $n=1$: left side $1$, right side $2 - 1 = 1$. ✓ (with equality)

**Step.** Assume it for $n = k$. Then
$$\sum_{j=1}^{k+1} \frac{1}{j^2} \le 2 - \frac{1}{k} + \frac{1}{(k+1)^2}.$$
It suffices to show $-\frac1k + \frac{1}{(k+1)^2} \le -\frac{1}{k+1}$, i.e.
$$\frac{1}{(k+1)^2} \le \frac1k - \frac{1}{k+1} = \frac{1}{k(k+1)}.$$
This holds because $k(k+1) \le (k+1)^2$. So the claim holds for $k+1$.

By induction it holds for all $n$, and since $2 - \frac1n < 2$, the original inequality follows. ∎

**The lesson.** The weaker statement is not inductively self-supporting; the stronger one is. When induction stalls, strengthen.
[/sol]

### P7 | Medium | Descent
Prove that there are no positive integers $x, y, z$ with $x^2 + y^2 = 3z^2$.
[hint]
Work modulo 3. What are the squares mod 3? Then take a minimal solution and descend.
[/hint]
[sol]
Squares modulo 3 are $0$ or $1$ (since $0^2 \equiv 0$, $(\pm1)^2 \equiv 1$).

Suppose a solution in positive integers exists; among all such, choose one with $z$ minimal.

From $x^2 + y^2 \equiv 0 \pmod 3$: the only way to write $0$ as a sum of two elements of $\{0,1\}$ mod 3 is $0 + 0$. So $3 \mid x^2$ and $3 \mid y^2$, hence (as 3 is prime) $3 \mid x$ and $3 \mid y$.

Write $x = 3a$, $y = 3b$. Then $9a^2 + 9b^2 = 3z^2$, so $3a^2 + 3b^2 = z^2$, giving $3 \mid z^2$ and so $3 \mid z$. Write $z = 3c$. Substituting, $3a^2 + 3b^2 = 9c^2$, i.e.
$$a^2 + b^2 = 3c^2.$$
So $(a,b,c)$ is another positive-integer solution with $c = z/3 < z$, contradicting minimality of $z$.

Hence no solution exists. ∎
[/sol]

### P8 | Hard | RMO 2019 P4, adapted
Explain precisely what is wrong with this "proof", then give a correct statement.
> **Claim.** All horses are the same colour.
> *Proof.* Induct on the number $n$ of horses. For $n=1$ it is clear. Suppose any $n$ horses are the same colour, and take $n+1$ horses $h_1,\dots,h_{n+1}$. The first $n$ are the same colour, and the last $n$ are the same colour, so all $n+1$ are. ∎
[hint]
Test the inductive step at the smallest value of $n$ where it is used. Does the argument still work when $n = 1$?
[/hint]
[sol]
**The flaw is in the step from $n = 1$ to $n = 2$.**

The step argues that $\{h_1,\dots,h_n\}$ and $\{h_2,\dots,h_{n+1}\}$ are each monochromatic, then concludes they have the *same* colour because they overlap. That conclusion requires the two sets to share at least one horse — i.e. $n \ge 2$.

When $n = 1$ the two sets are $\{h_1\}$ and $\{h_2\}$, which are disjoint, and nothing links their colours. So the induction never gets off the ground: $P(1) \implies P(2)$ fails, and the chain breaks at the very first link.

**Correct statement.** The argument does establish: *if any two horses are the same colour, then any finite number of horses are the same colour.* That is, $P(2) \implies P(n)$ for all $n \ge 2$. The false conclusion came from an unavailable base.

**The lesson for your own work.** After writing an inductive step, always ask: *for which $k$ does my argument actually work?* If it needs $k \ge 2$, then $P(2)$ — not $P(1)$ — is your base case.
[/sol]

### P9 | Hard | Extremal
$2n$ points are given in the plane, no three collinear, $n$ coloured red and $n$ blue. Prove that they can be joined by $n$ segments, each joining a red point to a blue point, such that no two segments cross.
[hint]
Among all $n!$ possible pairings, choose the one minimising the total length of the segments. Show it has no crossing.
[/hint]
[sol]
There are finitely many ways ($n!$) to pair the red points with the blue points. Choose a pairing $M$ minimising the **total length** of the $n$ segments; this exists because the set of pairings is finite and non-empty.

**Claim.** $M$ has no two crossing segments.

Suppose segments $R_1B_1$ and $R_2B_2$ in $M$ cross at a point $X$. Replace them by $R_1B_2$ and $R_2B_1$; this is still a valid red–blue pairing. By the triangle inequality applied in triangles $R_1XB_2$ and $R_2XB_1$,
$$R_1B_2 < R_1X + XB_2, \qquad R_2B_1 < R_2X + XB_1.$$
(The inequalities are strict because no three points are collinear, so $X$ is not on segment $R_1B_2$ or $R_2B_1$.) Adding,
$$R_1B_2 + R_2B_1 < (R_1X + XB_1) + (R_2X + XB_2) = R_1B_1 + R_2B_2.$$
So the new pairing has strictly smaller total length, contradicting the minimality of $M$.

Hence $M$ has no crossings. ∎

This is the extremal principle in its purest form: you never construct the pairing, you only show the extremal one must have the property you want.
[/sol]

### P10 | Hard | Invariance
An $8 \times 8$ board has two opposite corner squares removed. Prove it cannot be tiled by $1 \times 2$ dominoes.
[hint]
Colour the board like a chessboard. What does each domino cover? What colour are two opposite corners?
[/hint]
[sol]
Colour the board as a chessboard, so that adjacent squares have different colours; there are 32 black and 32 white squares.

Every $1 \times 2$ domino covers exactly one square of each colour, because the two squares it covers are adjacent. So **any region tiled by $k$ dominoes has exactly $k$ black and $k$ white squares** — the difference between the counts is an invariant equal to 0.

Two opposite corners of a chessboard have the *same* colour (the corners on a diagonal all match). Removing them leaves 30 squares of one colour and 32 of the other. Since $30 \ne 32$, no tiling exists. ∎

This is the model for a huge family of RMO combinatorics problems: find a colouring under which every allowed piece has a fixed signature, then compare the signature of the target region.
[/sol]
