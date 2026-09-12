---
id: pyq-combinatorics
title: Past problems — combinatorics
level: Mixed
hours: 5
blurb: Real RMO and CRMO combinatorics — counting, constructions, colourings and extremal arguments — transcribed from the official papers.
tags: past papers, RMO, CRMO, combinatorics
link: All official HBCSE past papers :: https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers/
link: RMO 2024 problems with official solutions :: https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2024/11/Official-Solutions-for-RMO-2024.pdf
---

## What combinatorics looks like at RMO

| Paper | Combinatorics problems | Flavour |
|---|---|---|
| RMO 2025 | P1 | **construction**: configurations of $n$ lines |
| RMO 2024 | P1, P6 | rearrangements with a divisibility condition; ordered factorisations |
| RMO 2019 | P4, P6 | array construction; gcd graph + extremal |
| RMO 2018 | P4 | 2-colouring a $5\times5$ grid |
| CRMO 2015 | P4 | counting on a circle with exclusions |
| CRMO 2014 | P4 | grid with a divisibility condition |
| CRMO 2013 | P4 | counting integer tuples from a quadratic form |
| CRMO 2012 | P4 | counting set pairs |

**Two things to notice.**

1. **Construction problems are common and are usually the easiest on the paper.** "Find a configuration with property $X$" needs only one example plus a verification — there is no universal quantifier to fight. Many candidates skip them because they look unfamiliar. Do not.
2. Straight counting problems are rarer than *structural* ones. Expect pigeonhole, colouring, and extremal arguments more often than binomial coefficients.

## Problems

### C1 | Easy | CRMO 2012 P4
Let $X = \{1,2,3,\dots,10\}$. Find the number of pairs $\{A,B\}$ such that $A\subseteq X$, $B\subseteq X$, $A \ne B$ and $A\cap B = \{2,3,5,7\}$.
[hint]
Each element outside $\{2,3,5,7\}$ has exactly three possible fates. Then deal with the unordered-pair and $A\ne B$ conditions.
[/hint]
[sol]
The four elements $2,3,5,7$ lie in both $A$ and $B$, by hypothesis.

**The other six elements.** For each of the remaining $10-4 = 6$ elements there are exactly **three** possibilities: in $A$ only, in $B$ only, or in neither. It cannot be in both, since $A\cap B$ is exactly $\{2,3,5,7\}$.

So the number of **ordered** pairs $(A,B)$ with $A\cap B = \{2,3,5,7\}$ is
$$3^6 = 729.$$

**Remove $A = B$.** This happens only when every one of the six elements is "in neither", i.e. $A = B = \{2,3,5,7\}$ — exactly one ordered pair. So $729-1 = 728$ ordered pairs have $A\ne B$.

**Unordered.** Each unordered pair $\{A,B\}$ with $A \ne B$ corresponds to exactly two ordered pairs, so the answer is
$$\frac{728}{2} = \mathbf{364}. \;∎$$
[/sol]

### C2 | Easy | CRMO 2016 P4
Find the number of all 6-digit natural numbers having exactly three odd digits and three even digits.
[hint]
Split on whether the leading digit is odd or even — the even case is restricted because a 6-digit number cannot start with 0.
[/hint]
[sol]
There are 5 odd digits $\{1,3,5,7,9\}$ and 5 even digits $\{0,2,4,6,8\}$, but the leading digit cannot be 0.

**Case A: the first digit is odd.** Choose which 2 of the remaining 5 positions are also odd: $\binom52 = 10$ ways. Then each of the 3 odd positions has 5 choices and each of the 3 even positions has 5 choices (0 permitted, since none is first):
$$\binom52\cdot5^3\cdot5^3 = 10\cdot125\cdot125 = 156{,}250.$$

**Case B: the first digit is even.** It must be non-zero, so 4 choices $\{2,4,6,8\}$. Choose which 3 of the remaining 5 positions are odd: $\binom53 = 10$ ways. The 3 odd positions give $5^3$, and the other 2 even positions give $5^2$:
$$4\cdot\binom53\cdot5^3\cdot5^2 = 4\cdot10\cdot125\cdot25 = 125{,}000.$$

**Total.**
$$156{,}250+125{,}000 = \mathbf{281{,}250}. \;∎$$

**The trap.** Treating all six positions symmetrically gives $\binom63\cdot5^6 = 312{,}500$ — which over-counts by exactly the numbers starting with 0. Always handle the leading digit separately.
[/sol]

### C3 | Medium | CRMO 2015 P4
Suppose 28 objects are placed along a circle at equal distances. In how many ways can 3 objects be chosen from among them so that no two of the three chosen objects are adjacent nor diametrically opposite?
[hint]
Count non-adjacent triples with the circular formula, then subtract those containing a diametrically opposite pair — checking first that no triple can contain two such pairs.
[/hint]
[sol]
Label the positions $0,1,\dots,27$; "diametrically opposite" means differing by 14.

**Step 1: triples with no two adjacent.** The number of ways to choose $k$ pairwise non-adjacent objects from $n$ arranged in a circle is
$$\frac{n}{n-k}\binom{n-k}{k}.$$
With $n=28$, $k=3$:
$$\frac{28}{25}\binom{25}{3} = \frac{28}{25}\cdot2300 = 28\cdot92 = 2576.$$

**Step 2: subtract those containing a diametrically opposite pair.** There are 14 such pairs $\{i,i+14\}$. Fix one; its two members are not adjacent (they are 14 apart), so we only need the third object to be non-adjacent to both.

The two chosen points have 4 distinct neighbours in total ($i\pm1$ and $i+14\pm1$). The third object must avoid those 4 plus the 2 chosen points, leaving
$$28-6 = 22 \text{ choices}.$$
That gives $14\cdot22 = 308$ such triples.

**No double counting.** A triple cannot contain two diametrically opposite pairs — that would require 4 distinct points.

**Step 3: answer.**
$$2576 - 308 = \mathbf{2268}. \;∎$$
[/sol]

### C4 | Medium | CRMO 2013 P4
Find the number of 10-tuples $(a_1,a_2,\dots,a_{10})$ of integers such that $|a_1|\le1$ and
$$a_1^2+a_2^2+a_3^2+\cdots+a_{10}^2 - a_1a_2-a_2a_3-a_3a_4-\cdots-a_9a_{10}-a_{10}a_1 = 2.$$
[hint]
Double the expression and complete squares cyclically: $2\sum a_i^2 - 2\sum a_ia_{i+1} = \sum (a_i - a_{i+1})^2$ over the cycle.
[/hint]
[sol]
**Rewrite the condition.** Multiplying by 2 and grouping cyclically (indices mod 10),
$$2\left(\sum_{i=1}^{10}a_i^2 - \sum_{i=1}^{10}a_ia_{i+1}\right) = \sum_{i=1}^{10}\left(a_i-a_{i+1}\right)^2.$$

So the equation becomes
$$\sum_{i=1}^{10}\left(a_i-a_{i+1}\right)^2 = 4. \tag{$\ast$}$$

**Structure of solutions.** Let $d_i = a_i - a_{i+1}$ for $i=1,\dots,10$ (cyclically). These are integers with
$$\sum_{i=1}^{10}d_i = 0 \qquad\text{and}\qquad \sum_{i=1}^{10}d_i^2 = 4.$$

Since the $d_i$ are integers, $\sum d_i^2 = 4$ allows only two shapes:
- **(i)** exactly four of the $d_i$ equal $\pm1$ and the rest are 0, with the signs summing to zero — so **two are $+1$ and two are $-1$**;
- **(ii)** exactly one $d_i$ equals $\pm2$ and the rest are 0 — but then $\sum d_i = \pm2\ne0$. **Impossible.**

So exactly two of the ten differences are $+1$, two are $-1$, and six are $0$.

**Counting.** Choose which two positions carry $+1$ and which two carry $-1$:
$$\binom{10}{2}\binom{8}{2} = 45\cdot28 = 1260.$$
Each such choice of $(d_1,\dots,d_{10})$ determines $a_2,\dots,a_{10}$ from $a_1$ (by $a_{i+1} = a_i - d_i$), and the cyclic consistency is automatic because $\sum d_i = 0$.

**The constraint $|a_1|\le1$.** For each of the 1260 difference-patterns, $a_1$ may be any of $-1,0,1$ — three choices — and every resulting tuple is a valid integer solution.

**Total.**
$$1260\times3 = \mathbf{3780}. \;∎$$

**The move.** A cyclic expression $\sum a_i^2 - \sum a_ia_{i+1}$ is *always* half a sum of squares of consecutive differences. Recognising that converts an opaque equation into a transparent combinatorial count.
[/sol]

### C5 | Medium | CRMO 2014 P4
Is it possible to write the numbers $17, 18, 19, \dots, 32$ in a $4\times4$ grid of unit squares, one number per square, such that the product of the numbers in each of the four $2\times2$ corner sub-grids is divisible by 16?
[hint]
Count the total supply of factors of 2 among $17,\dots,32$, then count how many each of the four sub-grids needs.
[/hint]
[sol]
**Count the supply of 2s.** Among $17,18,\dots,32$ the even numbers are $18,20,22,24,26,28,30,32$, with 2-adic valuations
$$v_2(18)=1,\ v_2(20)=2,\ v_2(22)=1,\ v_2(24)=3,\ v_2(26)=1,\ v_2(28)=2,\ v_2(30)=1,\ v_2(32)=5.$$
Total:
$$1+2+1+3+1+2+1+5 = 16.$$

**Count the demand.** Each of the four $2\times2$ sub-grids needs its product divisible by $16 = 2^4$, i.e. needs a total valuation of at least 4. The four sub-grids are **disjoint** and together cover all 16 cells, so the demand is at least
$$4\times4 = 16.$$

**Supply equals demand**, so a valid arrangement must distribute the valuations *exactly*: each sub-grid must receive a total valuation of **exactly 4**.

**Is that achievable?** We need to split the multiset of valuations
$$\{1,2,1,3,1,2,1,5\}$$
(together with eight zeros from the odd numbers) into four groups summing to 4 each.

But one element is **5**, which alone exceeds 4. Whichever sub-grid contains 32 has valuation at least 5 > 4, so the remaining three sub-grids would have total valuation at most $16-5 = 11 < 12$, and at least one of them would fall short of 4.

**Answer: no**, such an arrangement is impossible. ∎

**The shape of the argument.** *Count a resource globally, count the demand globally, and compare.* When supply exactly equals demand, every unit must be placed perfectly — and then a single oversized item breaks it.
[/sol]

### C6 | Medium | RMO 2024 P1
Let $n>1$ be a positive integer. Call a rearrangement $a_1,a_2,\dots,a_n$ of $1,2,\dots,n$ **nice** if for every $k=2,3,\dots,n$ the sum $a_1+a_2+\cdots+a_k$ is **not** divisible by $k$.
**(a)** If $n>1$ is odd, prove there is no nice rearrangement.
**(b)** If $n$ is even, find a nice rearrangement.
[hint]
For (a), look at $k=n$ — the total is forced. For (b), try swapping adjacent pairs.
[/hint]
[sol]
**(a) Odd $n$: impossible.**

Take $k = n$. The condition requires $n \nmid a_1+\cdots+a_n$. But $a_1,\dots,a_n$ is a rearrangement of $1,\dots,n$, so
$$a_1+\cdots+a_n = 1+2+\cdots+n = \frac{n(n+1)}{2}.$$
When $n$ is **odd**, $\frac{n+1}{2}$ is an integer, so
$$\frac{n(n+1)}{2} = n\cdot\frac{n+1}{2}$$
is a multiple of $n$ — violating the condition at $k=n$.

Hence no nice rearrangement exists for odd $n>1$. ∎

**(b) Even $n = 2m$: a construction.** Take the sequence obtained by swapping each adjacent pair:
$$2,\ 1,\ 4,\ 3,\ 6,\ 5,\ \dots,\ 2m,\ 2m-1.$$

**Verify.** Let $S_k = a_1+\cdots+a_k$.

- **$k$ even**, say $k = 2j$: the first $j$ swapped pairs contribute $1+2+\cdots+2j = \frac{k(k+1)}{2}$. So
$$S_k = \frac{k(k+1)}{2} = k\cdot\frac{k+1}{2},$$
and since $k$ is even, $\frac{k+1}{2}$ is **not** an integer — indeed $S_k/k = \frac{k+1}{2}$ is a half-integer, so $k \nmid S_k$ ✓.

- **$k$ odd**, say $k = 2j+1$ with $j\ge1$: the first $2j$ terms give $\frac{2j(2j+1)}{2}$, and the next term $a_{2j+1} = 2j+2$. So
$$S_k = \frac{(k-1)k}{2} + (k+1) = \frac{k(k+1)}{2}+1 \cdot\!$$
let us compute directly: $\frac{(k-1)k}{2}+(k+1)$. Modulo $k$, the first term is $\frac{(k-1)k}{2}\equiv0$ (as $k$ is odd, $\frac{k-1}{2}$ is an integer), and the second is $k+1\equiv1$. Hence
$$S_k \equiv 1 \pmod k,$$
which is not $0$ for $k>1$ ✓.

So every $k$ from 2 to $n$ fails to divide $S_k$: the rearrangement is nice. ∎

**Check $n=4$:** the sequence is $2,1,4,3$ with partial sums $2,3,7,10$. Then $2\nmid3$ ✓, $3\nmid7$ ✓, $4\nmid10$ ✓.
[/sol]

### C7 | Medium | RMO 2025 P1
**(a)** Let $n\ge3$ be an integer. Find a configuration of $n$ lines in the plane which has exactly **(i)** $n-1$ distinct points of intersection; **(ii)** $n$ distinct points of intersection.
**(b)** Give configurations of $n$ lines that have exactly $n+1$ distinct points of intersection for **(i)** $n=8$ and **(ii)** $n=9$.
[hint]
Two building blocks: a **pencil** ($k$ lines through one point) contributes exactly 1 point; a **parallel family** contributes 0. Part (a) is one of each. For (b), count from the top: $\binom n2$ points in general position, minus the savings from each coincidence.
[/hint]
[sol]
**The two building blocks.**
- A **pencil** of $k$ lines through a common point contributes exactly **1** intersection point among themselves.
- A **parallel family** of $k$ lines contributes **0**.
- Two lines from different families meet in one point.

**(a)(i) Exactly $n-1$ points.** Take $n-1$ mutually parallel lines together with one transversal crossing them all.
- The parallel family: 0 points.
- The transversal meets each of the $n-1$ parallels in a distinct point: $n-1$ points.

Total: exactly $n-1$ ✓

**(a)(ii) Exactly $n$ points.** Take a pencil of $n-1$ lines through a point $P$, together with one further line $\ell$ **not** through $P$ and not parallel to any of them.
- The pencil: 1 point, namely $P$.
- $\ell$ meets each of the $n-1$ pencil lines in a distinct point, and none of these is $P$ (since $P\notin\ell$): $n-1$ points.

Total: $1+(n-1) = n$ ✓

*(This configuration is called a **near-pencil**.)*

**(b) The counting framework.** For $n$ lines in general position there are $\binom n2$ intersection points. Each coincidence **saves** points:
- a point where $k$ lines concur saves $\binom k2 - 1$ (the $\binom k2$ pairs give one point instead of $\binom k2$);
- a parallel class of $k$ lines saves $\binom k2$ (those pairs give no point at all).

So
$$\#\text{points} \;=\; \binom n2 \;-\; \sum_{\text{concurrences}}\left[\binom{k}{2}-1\right] \;-\; \sum_{\text{parallel classes}}\binom{c}{2}.$$

For **$n=8$** and a target of 9 points, the required saving is $\binom82 - 9 = 28-9 = 19$.
For **$n=9$** and a target of 10 points, it is $\binom92-10 = 36-10 = 26$.

**Worked example of the bookkeeping.** A pencil of 7 lines plus one extra line gives
$$28 - \left[\binom72-1\right] = 28-20 = 8 \text{ points,}$$
which is the near-pencil answer $n = 8$ ✓. To get 9 you need a saving of exactly 19 — one *less* than the 7-pencil provides — so the configuration must mix a smaller pencil with parallel classes and/or extra triple points, and finding the right mixture is the real content of part (b).

**Honest note.** Part (b) is a genuine construction puzzle with several valid answers, and the explicit pictures are best read from the official write-up:

- [RMO 2025 paper](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2025/11/RMO-2025-Paper-1.pdf)
- [RMO 2025 official solutions](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2025/12/RMO-2025-solutions.pdf)

**What to take away — and it is worth real marks.**
1. Parts (a)(i) and (a)(ii) are each two lines of work. **Do the easy parts of a construction problem even if the last part defeats you**; on this paper they are close to free marks.
2. A construction problem needs **both** the configuration *and* a verification of the count. Draw it, then count the points explicitly.
3. The savings formula above is the right way to search systematically instead of guessing pictures.
[/sol]

### C8 | Hard | RMO 2024 P6
For $n\ge2$, call a sequence of integers $1 = a_1<a_2<\cdots<a_k = n$ an **$n$-chain** if $a_i \mid a_{i+1}$ for all $i$. Let $f(n)$ be the number of $n$-chains; for example $f(4)=2$, from $\{1,4\}$ and $\{1,2,4\}$. Prove that
$$f\left(2^m\cdot3\right) = 2^{m-1}(m+2)$$
for every positive integer $m$.
[hint]
A chain is determined by its sequence of quotients, whose product is $n$ — so $f(n)$ counts *ordered factorisations of $n$ into factors greater than 1*. Then classify by the position of the factor carrying the 3.
[/hint]
[sol]
**Reformulation.** An $n$-chain is determined by its quotients $q_i = \frac{a_{i+1}}{a_i}$, each an integer $>1$, with $q_1q_2\cdots q_{k-1} = n$; conversely any such ordered list gives a chain. So
$$f(n) = \#\{\text{ordered factorisations of } n \text{ into factors} > 1\}.$$

**Our case $n = 2^m\cdot3$.** Every factor is $2^e$ (with $e\ge1$, since the factor exceeds 1) or $2^c\cdot3$ (with $c\ge0$), and **exactly one** factor carries the 3.

Fix the number of factors $j$. Then:
- choose the **position** of the special factor: $j$ ways;
- the exponents satisfy
$$c + e_1+e_2+\cdots+e_{j-1} = m, \qquad c\ge0, \ e_i\ge1.$$

Substituting $e_i' = e_i-1\ge0$ turns this into
$$c+e_1'+\cdots+e_{j-1}' = m-(j-1),$$
a stars-and-bars count in $j$ non-negative variables:
$$\binom{\left(m-j+1\right)+j-1}{j-1} = \binom{m}{j-1}.$$

(This requires $m-j+1\ge0$, i.e. $j \le m+1$.)

So the number of ordered factorisations with exactly $j$ factors is $j\binom{m}{j-1}$.

**Sum over $j$.** Putting $i = j-1$ (so $i$ runs from 0 to $m$),
$$f\left(2^m\cdot3\right) = \sum_{j=1}^{m+1}j\binom{m}{j-1} = \sum_{i=0}^{m}(i+1)\binom mi = \sum_{i=0}^m i\binom mi + \sum_{i=0}^m\binom mi.$$

Using the standard identities $\displaystyle\sum_i i\binom mi = m2^{m-1}$ and $\displaystyle\sum_i\binom mi = 2^m$:
$$f\left(2^m\cdot3\right) = m\,2^{m-1}+2^m = 2^{m-1}\left(m+2\right). \;∎$$

**Checks.**
- $m=1$ ($n=6$): formula gives $2^0(3) = 3$; the 6-chains are $\{1,6\}$, $\{1,2,6\}$, $\{1,3,6\}$ ✓
- $m=2$ ($n=12$): formula gives $2(4) = 8$; the 12-chains are $\{1,12\}$, $\{1,2,12\}$, $\{1,3,12\}$, $\{1,4,12\}$, $\{1,6,12\}$, $\{1,2,4,12\}$, $\{1,2,6,12\}$, $\{1,3,6,12\}$ ✓
[/sol]

### C9 | Hard | RMO 2018 P4
Let $E$ be the set of 25 points $(m,n)$ in the plane with $1\le m\le5$ and $1\le n\le5$. The points of $E$ are arbitrarily coloured with two colours, red and blue. Show that there always exist four points of $E$ of the form
$$(a,b),\quad (a+k,b),\quad (a+k,b+k),\quad (a,b+k)$$
for some positive integer $k$ — that is, the vertices of an axis-parallel square — at least three of which have the same colour.
[hint]
Start with the pigeonhole in a single row: 5 points, 2 colours, so 3 share a colour. Then suppose no square has 3 of a colour (so every square is exactly 2–2) and derive strong structure on consecutive rows.
[/hint]
[sol]
**Setup.** Suppose, for contradiction, that **every** axis-parallel square has exactly two red and two blue vertices.

Encode row $b$ as a binary string $r_b\in\{0,1\}^5$ (say $0$ = red, $1$ = blue).

**Unit squares give a rigid relation.** For the unit square with corners $(i,b),(i+1,b),(i,b+1),(i+1,b+1)$, the 2–2 condition says
$$r_b(i)+r_b(i+1)+r_{b+1}(i)+r_{b+1}(i+1) = 2.$$
Writing $s_b(i) = r_b(i)+r_b(i+1)\in\{0,1,2\}$, this is
$$s_{b+1}(i) = 2 - s_b(i) \qquad\text{for all } i=1,\dots,4,\ b=1,\dots,4. \tag{$\ast$}$$

So each "adjacent-pair sum" alternates between $s_1(i)$ and $2-s_1(i)$ as $b$ increases, and in particular
$$s_3(i) = s_1(i), \qquad s_5(i) = s_1(i). \tag{$\ast\ast$}$$

**Case 1: some adjacent pair in row 1 is monochromatic**, i.e. $s_1(i)\in\{0,2\}$ for some $i$. Then by $(\ast)$, $s_2(i) = 2-s_1(i)$ is also in $\{0,2\}$ but the *opposite* value, so row 2 has that adjacent pair monochromatic in the other colour. Iterating, rows $1,3,5$ agree on that pair and rows $2,4$ carry the opposite colour. Now consider the side-2 square with corners $(i,1),(i+2,1),(i,3),(i+2,3)$ — its four vertices involve $r_1(i), r_1(i+2), r_3(i), r_3(i+2)$, and by $(\ast\ast)$ the row-3 values are strongly tied to row 1; a short check of the possible patterns produces a square with three equal colours.

**Case 2: every adjacent pair in row 1 is bichromatic**, i.e. $s_1(i)=1$ for all $i$ — row 1 **alternates**: $r_1\in\{01010,\ 10101\}$. Then $(\ast)$ gives $s_b(i)=1$ for all $b$ and $i$, so **every row alternates**.

An alternating row satisfies $r_b(1)=r_b(3)=r_b(5)$. Consider the side-4 square with corners $(1,1),(5,1),(1,5),(5,5)$. Its colours are
$$r_1(1),\quad r_1(5)=r_1(1),\quad r_5(1),\quad r_5(5)=r_5(1).$$
So the four vertices are two copies of $r_1(1)$ and two of $r_5(1)$ — which is 2–2 only if $r_1(1)\ne r_5(1)$, i.e. rows 1 and 5 are the *opposite* alternating pattern.

But $(\ast\ast)$ gives $s_5 = s_1$, which is consistent with either; so bring in the side-2 square $(1,1),(3,1),(1,3),(3,3)$: its vertices are two copies of $r_1(1)$ and two of $r_3(1)$, forcing $r_3(1)\ne r_1(1)$. Similarly the square $(1,3),(3,3),(1,5),(3,5)$ forces $r_5(1)\ne r_3(1)$, hence $r_5(1) = r_1(1)$ — contradicting what the side-4 square required.

**Contradiction.** So the assumption fails, and some axis-parallel square has at least three vertices of the same colour. ∎

**Honest note.** Case 1 above is stated compactly; writing out its short case check in full is part of the work, and the [official RMO 2018 solutions](https://olympiads.hbcse.tifr.res.in/olympiads/wp-content/uploads/2018/05/solutions-crmo-18.pdf) do exactly that. The two ideas to reproduce on any similar problem are **(i)** pigeonhole within a row, and **(ii)** turning "every square is balanced" into a *recursion between consecutive rows*, as in $(\ast)$.
[/sol]

### C10 | Hard | RMO 2019 P6
Suppose 91 distinct positive integers greater than 1 are given, such that there are at least 456 pairs among them which are relatively prime. Show that one can find four integers $a,b,c,d$ among them such that
$$\gcd(a,b)=\gcd(b,c)=\gcd(c,d)=\gcd(d,a)=1.$$
[hint]
Build a graph on the 91 numbers, joining coprime pairs. You are asked to find a 4-cycle. What does Turán-type / Kővári–Sós–Turán say about the number of edges forcing a $C_4$?
[/hint]
[sol]
**Model as a graph.** Let $G$ be the graph whose 91 vertices are the given integers, with an edge between two of them when they are **coprime**. We are told $|E(G)| \ge 456$, and we must find a **4-cycle** $a-b-c-d-a$.

**The standard counting.** Count "cherries" — paths of length 2, i.e. pairs of edges sharing a middle vertex:
$$P = \sum_{v}\binom{\deg v}{2}.$$

If $G$ contained **no** 4-cycle, then no two distinct vertices could have two common neighbours — because two vertices with two common neighbours immediately give a $C_4$. Equivalently, each unordered pair $\{x,y\}$ of vertices is the pair of endpoints of **at most one** cherry. Hence
$$P \ \le\ \binom{91}{2} = 4095.$$

**Bound $P$ from below.** With $n = 91$ vertices and $m \ge 456$ edges, convexity of $t\mapsto\binom t2$ (Jensen) gives
$$P = \sum_v\binom{\deg v}{2} \ \ge\ n\binom{\,\overline{d}\,}{2}, \qquad \overline d = \frac{2m}{n} \ \ge\ \frac{912}{91} > 10.02.$$

So
$$P \ \ge\ 91\cdot\frac{\overline d\left(\overline d-1\right)}{2} \ >\ 91\cdot\frac{10.02\times9.02}{2} \ >\ 91\cdot45.19\ >\ 4112.$$

**Contradiction.** We obtained $P > 4112$ while the no-$C_4$ assumption forces $P\le4095$.

Therefore $G$ contains a 4-cycle: there exist four of the given integers $a,b,c,d$ with
$$\gcd(a,b)=\gcd(b,c)=\gcd(c,d)=\gcd(d,a)=1. \;∎$$

**Why the numbers are what they are.** The threshold is tuned so the two bounds cross: $456$ edges on $91$ vertices is just past the Kővári–Sós–Turán bound for forcing a $C_4$. That is a hallmark of a well-set problem — the constants are not arbitrary, and checking that your bound actually beats $\binom{91}{2}$ is part of the solution.

Compare with the [official RMO 2019 solutions](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2019/10/rmosolutions2019.pdf).
[/sol]
