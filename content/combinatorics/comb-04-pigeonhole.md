---
id: comb-04-pigeonhole
title: The pigeonhole principle
level: Core
hours: 3
blurb: Deceptively simple and endlessly deep. The principle, its strong form, and the real skill — choosing what the pigeons and holes should be.
tags: pigeonhole, existence, boxes
link: Yufei Zhao — Combinatorics (pigeonhole, colouring) :: https://yufeizhao.com/olympiad/comb1.pdf
video: Search: pigeonhole principle olympiad problems :: https://www.youtube.com/results?search_query=pigeonhole+principle+olympiad+problems
---

## The principle

> If $n+1$ objects are placed into $n$ boxes, some box contains at least two objects.

> **Strong form.** If $N$ objects are placed into $n$ boxes, some box contains at least $\left\lceil \dfrac Nn\right\rceil$ objects — and some box contains at most $\left\lfloor\dfrac Nn\right\rfloor$.

> **Infinite form.** If infinitely many objects are placed into finitely many boxes, some box contains infinitely many.

The statements are trivial. The difficulty is always the same one: **what are the boxes?**

## Choosing the boxes

This is the entire subject. A catalogue of choices that work:

| Situation | Boxes |
|---|---|
| integers, divisibility | residue classes mod $n$ |
| a set of numbers, need two close together | subintervals of equal length |
| need two with the same sum/difference | possible values of the sum/difference |
| subsets, need two with equal sum | possible subset sums |
| points in a region | a grid of sub-regions |
| a sequence, need a repeat | possible states/values |
| colourings | the colour classes |
| $n$ people, some property | the possible values of that property |

> **A useful rule of thumb.** If the problem says "prove there exist two…", count how many "types" the objects can have. If there are fewer types than objects, you are done.

## The classics

**Two with the same remainder.** Among any $n+1$ integers, two are congruent mod $n$ — so their difference is divisible by $n$.

**A subset with sum divisible by $n$.** Among any $n$ integers $a_1,\dots,a_n$, some **consecutive** block $a_i+a_{i+1}+\cdots+a_j$ is divisible by $n$. *(Boxes: the $n$ partial sums $s_1,\dots,s_n$ mod $n$, plus $s_0=0$ — that is $n+1$ values in $n$ classes.)*

**Erdős–Szekeres.** Any sequence of $mn+1$ distinct reals contains an increasing subsequence of length $m+1$ or a decreasing one of length $n+1$. *(Boxes: pairs (longest increasing run ending here, longest decreasing run ending here).)*

**Chinese remainder flavour.** Among any $n+1$ numbers from $\{1,\dots,2n\}$, one divides another. *(Boxes: write each as $2^k\cdot(\text{odd part})$; there are only $n$ odd numbers available.)*

## Worked example

**Prove that among any 5 points inside a unit square, two are at distance at most $\dfrac{\sqrt2}{2}$.**

Divide the square into four congruent sub-squares of side $\frac12$. Five points into four boxes means two points lie in the same sub-square (points on a shared boundary may be assigned to either — fix a convention).

Two points in a square of side $\frac12$ are at distance at most the diagonal,
$$\sqrt{\left(\tfrac12\right)^2+\left(\tfrac12\right)^2} = \frac{\sqrt2}{2}. \;∎$$

Note the two ingredients: a **partition into regions of controlled diameter**, and the count $5 > 4$.

## Common traps

- Not saying what the boxes are, or how many there are. That sentence is the proof.
- Off-by-one: $n$ objects in $n$ boxes proves nothing.
- Assuming pigeonhole gives you *which* box is full. It gives existence only.
- Forgetting boundary cases when partitioning a region (points on the shared edge).

## Problems

### P1 | Warmup | Standard
Prove that among any 13 people, two were born in the same month.
[hint]
Boxes: months.
[/hint]
[sol]
Take the 12 months as boxes and the 13 people as objects, assigning each person to their birth month.

Since $13 > 12$, the pigeonhole principle gives a month containing at least two people. Those two were born in the same month. ∎
[/sol]

### P2 | Warmup | Standard
Prove that among any 6 integers, two have a difference divisible by 5.
[hint]
Boxes: residues mod 5.
[/hint]
[sol]
Every integer leaves one of the 5 remainders $0,1,2,3,4$ on division by 5. Take these residue classes as boxes.

With 6 integers and 5 boxes, two integers $a,b$ lie in the same class, i.e. $a\equiv b\pmod 5$. Then $5 \mid a-b$. ∎
[/sol]

### P3 | Easy | Classic
Prove that among any $n+1$ numbers chosen from $\{1,2,\dots,2n\}$, one divides another.
[hint]
Write each number as $2^k m$ with $m$ odd. How many odd numbers are available as $m$?
[/hint]
[sol]
Write each chosen number uniquely as
$$x = 2^{k}m, \qquad m \text{ odd}.$$
Since $x \le 2n$, the odd part $m$ lies in $\{1,3,5,\dots,2n-1\}$ — exactly $n$ possible values. Take these as boxes.

With $n+1$ chosen numbers and $n$ boxes, two of them share the same odd part:
$$x = 2^{a}m, \qquad y = 2^{b}m, \qquad a \ne b.$$
If $a<b$ then $x \mid y$; if $a>b$ then $y\mid x$. Either way one divides the other. ∎

**Sharpness.** The bound $n+1$ cannot be lowered: the $n$ numbers $n+1, n+2, \dots, 2n$ have no such pair, since the ratio of any two is strictly between 1 and 2.
[/sol]

### P4 | Easy | Classic
Given any $n$ integers, prove that some non-empty subset of **consecutive** terms has sum divisible by $n$.
[hint]
Consider the partial sums $s_0=0, s_1, \dots, s_n$ modulo $n$. That is $n+1$ values.
[/hint]
[sol]
Let the integers be $a_1, a_2, \dots, a_n$ and define the partial sums
$$s_0 = 0, \qquad s_k = a_1+a_2+\cdots+a_k \quad (1\le k\le n).$$

These are $n+1$ numbers. Take the $n$ residue classes mod $n$ as boxes. By pigeonhole, two of the partial sums are congruent:
$$s_i \equiv s_j \pmod n \qquad\text{for some } 0\le i<j\le n.$$

Then
$$s_j - s_i = a_{i+1}+a_{i+2}+\cdots+a_j \equiv 0 \pmod n,$$
and this is a non-empty block of consecutive terms (non-empty because $i<j$). ∎
[/sol]

### P5 | Medium | Classic
Prove that in any set of 10 distinct two-digit numbers, there are two disjoint non-empty subsets with the same sum.
[hint]
Count the subsets ($2^{10}$) and the possible sums. Then convert "equal sums" into "disjoint equal sums".
[/hint]
[sol]
Let $S$ be the set of 10 numbers, each between 10 and 99.

**Boxes: possible subset sums.** Any subset of $S$ has sum between 0 and $90+91+\cdots+99 = 945$, so there are at most 946 possible sums.

**Objects: subsets.** There are $2^{10}=1024$ subsets of $S$.

Since $1024 > 946$, two **distinct** subsets $A \ne B$ have the same sum.

**Making them disjoint.** Remove the common elements: set $A' = A\setminus B$ and $B' = B\setminus A$. These are disjoint, and
$$\mathrm{sum}(A') = \mathrm{sum}(A) - \mathrm{sum}(A\cap B) = \mathrm{sum}(B)-\mathrm{sum}(A\cap B) = \mathrm{sum}(B').$$

Finally $A'$ and $B'$ are non-empty: if $A'=\varnothing$ then $A\subseteq B$, and equal sums with all elements positive would force $A=B$, contradicting $A\ne B$. Similarly $B'\ne\varnothing$.

So $A'$ and $B'$ are disjoint non-empty subsets with equal sums. ∎
[/sol]

### P6 | Medium | Classic
Prove that any sequence of $mn+1$ distinct real numbers contains either an increasing subsequence of length $m+1$ or a decreasing subsequence of length $n+1$. **(Erdős–Szekeres)**
[hint]
To each term $a_k$ attach the pair $(i_k, d_k)$ where $i_k$ is the length of the longest increasing subsequence **ending** at $a_k$, and $d_k$ likewise for decreasing. Show the pairs are all distinct.
[/hint]
[sol]
For each index $k$, let
- $i_k$ = length of the longest increasing subsequence ending at $a_k$,
- $d_k$ = length of the longest decreasing subsequence ending at $a_k$.

**Claim: the pairs $(i_k,d_k)$ are pairwise distinct.**

Take $k < l$. Since the numbers are distinct, either $a_k<a_l$ or $a_k>a_l$.
- If $a_k<a_l$: any increasing subsequence ending at $a_k$ extends by $a_l$, so $i_l \ge i_k+1 > i_k$.
- If $a_k>a_l$: similarly $d_l \ge d_k+1 > d_k$.

Either way $(i_k,d_k)\ne(i_l,d_l)$. ∎

**Apply pigeonhole.** Suppose, for contradiction, that every increasing subsequence has length $\le m$ and every decreasing one has length $\le n$. Then each $i_k \in\{1,\dots,m\}$ and each $d_k\in\{1,\dots,n\}$, so there are at most $mn$ possible pairs.

But we have $mn+1$ distinct pairs — a contradiction.

Hence some increasing subsequence has length $\ge m+1$, or some decreasing one has length $\ge n+1$. ∎

**Sharpness.** With $mn$ terms it can fail: list $n$ blocks of $m$ increasing numbers, with the blocks themselves decreasing.
[/sol]

### P7 | Medium | Classic
Prove that in any group of 6 people, there are either 3 who all know each other, or 3 no two of whom know each other. (Knowing is mutual.)
[hint]
Fix one person $P$. Of the other 5, pigeonhole gives 3 in the same relationship to $P$. Then look at those 3 among themselves.
[/hint]
[sol]
Fix a person $P$. Each of the other 5 people either knows $P$ or does not — two boxes, 5 people. By the strong pigeonhole principle, some box contains at least $\left\lceil\frac52\right\rceil = 3$ people.

**Case 1: $P$ knows at least 3 people**, say $A$, $B$, $C$.

- If any two of $A,B,C$ know each other — say $A$ and $B$ — then $P, A, B$ are three mutual acquaintances. ✓
- Otherwise no two of $A,B,C$ know each other, so $A,B,C$ are three mutual strangers. ✓

**Case 2: $P$ does not know at least 3 people**, say $A$, $B$, $C$.

- If any two of $A,B,C$ are strangers — say $A$ and $B$ — then $P,A,B$ are three mutual strangers. ✓
- Otherwise all pairs among $A,B,C$ know each other, giving three mutual acquaintances. ✓

In every case the conclusion holds. ∎

**Sharpness.** With 5 people it can fail: seat them in a circle and let each person know exactly their two neighbours. Then the "knowing" graph is a 5-cycle, which contains no triangle; and the "not knowing" graph is also a 5-cycle (the pentagram), so no three mutual strangers either.

**What this is.** The statement $R(3,3)=6$ — the first non-trivial Ramsey number. The proof is pure pigeonhole applied twice, and the two-case structure ("$P$ has many friends, or $P$ has many non-friends") is the template for all small Ramsey arguments.
[/sol]

### P8 | Medium | Classic
Prove that among any 7 distinct integers, there are two whose sum or difference is divisible by 10.
[hint]
Group the residues mod 10 into classes $\{0\}, \{1,9\},\{2,8\},\{3,7\},\{4,6\},\{5\}$ — six boxes.
[/hint]
[sol]
Work modulo 10 and group the residues into the six boxes
$$\{0\},\quad\{1,9\},\quad\{2,8\},\quad\{3,7\},\quad\{4,6\},\quad\{5\}.$$
Each box collects residues $r$ and $10-r$.

With 7 integers and 6 boxes, two of them — call them $a,b$ — have residues in the same box.

- If they have the **same** residue $r$, then $a\equiv b$, so $10 \mid a-b$.
- If they have residues $r$ and $10-r$ (with $r \ne 10-r$), then $a+b \equiv r+(10-r) = 10\equiv 0$, so $10\mid a+b$.

Either way, two of the integers have sum or difference divisible by 10. ∎

**Sharpness.** Six integers can fail: $\{0,1,2,3,4,5\}$ has no two with sum or difference divisible by 10.
[/sol]

### P9 | Hard | Classic
Prove that among any 5 points in the plane with integer coordinates, two have a midpoint that also has integer coordinates.
[hint]
Boxes: the parity pattern $(x \bmod 2, y\bmod 2)$.
[/hint]
[sol]
For each point $(x,y)$ with integer coordinates, record its **parity pattern**
$$\left(x \bmod 2,\; y\bmod 2\right) \in \{(0,0),(0,1),(1,0),(1,1)\}.$$
There are exactly 4 such patterns — take them as boxes.

With 5 points and 4 boxes, two points $(x_1,y_1)$ and $(x_2,y_2)$ share a pattern, so
$$x_1\equiv x_2 \pmod 2 \qquad\text{and}\qquad y_1\equiv y_2\pmod 2.$$

Then $x_1+x_2$ and $y_1+y_2$ are both even, so the midpoint
$$\left(\frac{x_1+x_2}{2},\ \frac{y_1+y_2}{2}\right)$$
has integer coordinates. ∎

**Generalisation.** In $\mathbb{Z}^d$ the same argument with $2^d$ parity patterns shows that any $2^d+1$ lattice points contain two with a lattice midpoint — and $2^d$ is sharp.
[/sol]

### P10 | Hard | Classic
Prove that every sequence of $n^2+1$ distinct integers contains a monotone subsequence of length $n+1$, and show this is sharp.
[hint]
Erdős–Szekeres with $m=n$. For sharpness, build a sequence of $n^2$ terms with no monotone subsequence of length $n+1$.
[/hint]
[sol]
**Existence.** Apply Erdős–Szekeres (P6) with $m = n$: a sequence of $n\cdot n+1 = n^2+1$ distinct reals contains an increasing subsequence of length $n+1$ or a decreasing one of length $n+1$. Either is a monotone subsequence of length $n+1$. ∎

**Sharpness.** We exhibit $n^2$ distinct integers with no monotone subsequence of length $n+1$. Take $n$ blocks of $n$ consecutive integers, with the blocks arranged in **decreasing** order of value and each block **increasing** internally:
$$\underbrace{(n^2-n+1,\ \dots,\ n^2)}_{\text{block }1},\ \underbrace{(n^2-2n+1,\ \dots,\ n^2-n)}_{\text{block }2},\ \dots,\ \underbrace{(1,\ \dots,\ n)}_{\text{block }n}.$$

- **Increasing subsequences** must stay inside a single block (every element of a later block is smaller than every element of an earlier one), so they have length at most $n$.
- **Decreasing subsequences** can take at most one element from each block (within a block the entries increase), so they have length at most $n$.

So no monotone subsequence exceeds length $n$, and $n^2+1$ is the smallest length forcing one of length $n+1$. ∎

**Example ($n=3$, 9 terms):** $7,8,9,\;4,5,6,\;1,2,3$ — the longest monotone subsequence has length 3.
[/sol]
