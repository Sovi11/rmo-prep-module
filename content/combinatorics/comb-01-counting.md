---
id: comb-01-counting
title: Counting, bijections and stars and bars
level: Foundation
hours: 3
blurb: The addition and multiplication principles done carefully, permutations and combinations, bijective counting, and distributing identical objects.
tags: counting, bijections, stars and bars, permutations
link: Yufei Zhao — Bijections :: https://yufeizhao.com/olympiad/bijections.pdf
link: Yufei Zhao — Combinatorics (pigeonhole, colouring, binomials, bijections) :: https://yufeizhao.com/olympiad/comb1.pdf
video: Search: combinatorics counting bijection olympiad :: https://www.youtube.com/results?search_query=olympiad+combinatorics+counting+bijections+stars+and+bars
---

## The two principles

**Addition.** If a set splits into disjoint cases, the total is the sum of the cases. The word doing all the work is **disjoint** — overlapping cases need inclusion–exclusion.

**Multiplication.** If a construction is a sequence of independent choices with $n_1, n_2, \dots, n_k$ options, the total is $n_1n_2\cdots n_k$. The word doing the work is **independent**: the *number* of options at each step must not depend on earlier choices (the options themselves may).

> **Before counting anything, answer two questions:** does **order** matter, and are repeats allowed? Every basic formula is determined by those two answers.

| | order matters | order does not |
|---|---|---|
| no repetition | $\dfrac{n!}{(n-k)!}$ | $\dbinom nk$ |
| repetition allowed | $n^k$ | $\dbinom{n+k-1}{k}$ |

## Permutations and combinations

$$P(n,k) = \frac{n!}{(n-k)!}, \qquad \binom nk = \frac{n!}{k!(n-k)!}.$$

**Permutations with repeated objects.** Arrangements of a multiset with $n$ items, of which $n_1$ are of one kind, $n_2$ of another, …:
$$\frac{n!}{n_1!\,n_2!\cdots n_k!}.$$

**Circular arrangements.** $n$ distinct objects around a circle, rotations identified: $(n-1)!$. If reflections are also identified, $\frac{(n-1)!}{2}$ for $n\ge3$.

## Stars and bars

> The number of solutions of
> $$x_1+x_2+\cdots+x_k = n$$
> in **non-negative** integers is $\displaystyle\binom{n+k-1}{k-1}$.
>
> In **positive** integers it is $\displaystyle\binom{n-1}{k-1}$.

*Why:* lay out $n$ identical stars and choose $k-1$ of the $n+k-1$ positions (stars plus bars) to be bars. For the positive version, first give each variable 1 and distribute the remaining $n-k$.

**Handling other constraints.** For $x_i \ge c_i$, substitute $y_i = x_i - c_i \ge 0$ and reduce to the standard problem. For upper bounds $x_i \le d_i$, use inclusion–exclusion (next chapters).

## Bijective counting

The most elegant tool: to count $|A|$, find a bijection $A \to B$ with $|B|$ known.

> **Example.** How many subsets of $\{1,\dots,n\}$ contain no two consecutive integers?
>
> A subset of size $k$ with no two consecutive elements corresponds bijectively to a subset of size $k$ of $\{1,\dots,n-k+1\}$: if the chosen elements are $a_1<\cdots<a_k$, map them to $a_1, a_2-1, \dots, a_k-(k-1)$, which is strictly increasing with no constraint. So there are $\binom{n-k+1}{k}$ of size $k$, and
> $$\sum_{k\ge0}\binom{n-k+1}{k} = F_{n+2}$$
> in total (a Fibonacci number).

**How to present a bijection.** Give the map, give the inverse, and state that both are well defined. A marker wants to see that it really is a bijection, not just a plausible correspondence.

## Counting in two ways

Count the same set two different ways and equate. This proves identities and often solves problems that look nothing like identities. (Full treatment in the double counting chapter.)

## Common traps

- Multiplying when the cases are not independent.
- Adding when the cases overlap.
- Over- or under-counting by a symmetry factor: if each object is built in $m$ different ways by your procedure, divide by $m$.
- Off-by-one in stars and bars: $k-1$ bars, not $k$.
- Forgetting that "at least one" usually means it is easier to count the complement.

## Problems

### P1 | Warmup | Standard
How many 5-letter strings can be made from the alphabet $\{A,B,C,D\}$ if letters may repeat? If they may not?
[hint]
Order matters in both. The only question is repetition.
[/hint]
[sol]
**With repetition:** each of the 5 positions independently takes any of 4 letters:
$$4^5 = 1024.$$

**Without repetition:** the alphabet has only 4 letters, so a 5-letter string with no repeats is impossible. The count is $\mathbf 0$.

(If the alphabet had $n \ge 5$ letters, the answer would be $P(n,5) = \frac{n!}{(n-5)!}$.) ∎
[/sol]

### P2 | Warmup | Standard
In how many ways can 10 identical sweets be given to 4 children, if a child may get none? If every child must get at least one?
[hint]
Stars and bars, both versions.
[/hint]
[sol]
**Any distribution.** Solutions of $x_1+x_2+x_3+x_4=10$ in non-negative integers:
$$\binom{10+4-1}{4-1} = \binom{13}{3} = 286.$$

**Each child at least one.** Solutions in positive integers:
$$\binom{10-1}{4-1} = \binom93 = 84. \;∎$$
[/sol]

### P3 | Easy | CRMO 2016 P4
Find the number of 6-digit natural numbers having exactly three odd digits and three even digits.
[hint]
Choose which three positions hold odd digits, then fill. Careful: the leading digit cannot be 0, so split on whether position 1 is odd or even.
[/hint]
[sol]
A 6-digit number has a non-zero leading digit. There are 5 odd digits $\{1,3,5,7,9\}$ and 5 even digits $\{0,2,4,6,8\}$, but $0$ is barred from the first position.

**Case A: the first digit is odd.** Choose which 2 of the remaining 5 positions also hold odd digits: $\binom52$ ways. Then:
- the 3 odd positions each have 5 choices: $5^3$,
- the 3 even positions each have 5 choices (0 allowed, since none is first): $5^3$.

Count: $\binom52\cdot5^3\cdot5^3 = 10\cdot125\cdot125 = 156{,}250$.

**Case B: the first digit is even (and non-zero).** Then the first digit has 4 choices $\{2,4,6,8\}$. Choose which 3 of the remaining 5 positions hold odd digits: $\binom53$ ways. Then:
- 3 odd positions: $5^3$,
- the other 2 even positions: $5^2$ each digit (0 allowed).

Count: $4\cdot\binom53\cdot5^3\cdot5^2 = 4\cdot10\cdot125\cdot25 = 125{,}000$.

**Total:**
$$156{,}250 + 125{,}000 = \mathbf{281{,}250}. \;∎$$
[/sol]

### P4 | Easy | Standard
How many ways can 8 people be seated around a circular table if rotations are considered the same? What if two particular people must sit together?
[hint]
Fix one person to kill the rotational symmetry. For the second part, glue the pair into one block.
[/hint]
[sol]
**Plain circular arrangements.** Fixing one person's seat removes the rotational symmetry; the other 7 can be arranged in any order:
$$7! = 5040.$$

**Two particular people together.** Treat the pair as a single block, giving 7 objects around the circle: $(7-1)! = 6! = 720$ arrangements. The two people inside the block can be in either order: $\times 2$.
$$720\cdot2 = 1440. \;∎$$
[/sol]

### P5 | Medium | CRMO 2015 P4
28 objects are placed around a circle at equal distances. In how many ways can 3 of them be chosen so that no two are adjacent **and** no two are diametrically opposite?
[hint]
First count triples with no two adjacent (a standard circular formula), then subtract those containing a diametrically opposite pair, being careful about adjacency.
[/hint]
[sol]
Label the positions $0,1,\dots,27$ around the circle. "Diametrically opposite" means differing by 14.

**Step 1: triples with no two adjacent.** The standard count for choosing $k$ non-adjacent objects from $n$ in a circle is
$$\frac{n}{n-k}\binom{n-k}{k}.$$
With $n=28$, $k=3$:
$$\frac{28}{25}\binom{25}{3} = \frac{28}{25}\cdot 2300 = 28\cdot92 = 2576.$$

**Step 2: subtract those containing a diametrically opposite pair.** There are 14 diametrically opposite pairs $\{i, i+14\}$. Fix one such pair. These two are not adjacent (28 is far bigger than 2), so we need the third object to be non-adjacent to both.

The two chosen points have 4 neighbours in total ($i\pm1$, $i+14\pm1$), all distinct. So the third object must avoid the 2 chosen points and those 4 neighbours: $28-6 = 22$ choices.

That gives $14\cdot22 = 308$ triples that contain at least one diametrically opposite pair. **Can a triple contain two such pairs?** No — that would need 4 distinct points. So there is no double counting.

**Step 3: answer.**
$$2576 - 308 = \mathbf{2268}. \;∎$$
[/sol]

### P6 | Medium | Standard
How many solutions does $x_1+x_2+x_3+x_4 = 20$ have in integers with $2 \le x_i \le 8$?
[hint]
Substitute $y_i = x_i-2$ to clear the lower bounds, then use inclusion–exclusion for the upper bounds.
[/hint]
[sol]
Put $y_i = x_i - 2$, so $0 \le y_i \le 6$ and
$$y_1+y_2+y_3+y_4 = 20 - 8 = 12.$$

**Without the upper bound**, the count is $\binom{12+3}{3} = \binom{15}{3} = 455$.

**Subtract the violations.** Let $A_i$ be the set of solutions with $y_i \ge 7$. Substituting $z_i = y_i-7$, the count of $A_i$ is the number of non-negative solutions of $z_i + \sum_{j\ne i}y_j = 5$, i.e. $\binom{5+3}{3}=\binom83 = 56$. There are 4 such sets: $4\cdot56 = 224$.

**Add back the double violations.** Two variables both $\ge7$ would need $y_i+y_j \ge 14 > 12$ — impossible. So $|A_i\cap A_j| = 0$.

**Total:**
$$455 - 224 = \mathbf{231}. \;∎$$
[/sol]

### P7 | Medium | Standard
Prove that the number of subsets of $\{1,2,\dots,n\}$ with no two consecutive elements is $F_{n+2}$, where $F_1=F_2=1$.
[hint]
Let $a_n$ be the count and condition on whether $n$ is in the subset. Derive a recurrence.
[/hint]
[sol]
Let $a_n$ be the number of such subsets of $\{1,\dots,n\}$.

**Base cases.** $a_0 = 1$ (the empty set). $a_1 = 2$ ($\varnothing$ and $\{1\}$).

**Recurrence.** Split on whether $n$ belongs to the subset:
- If $n \notin S$, then $S$ is any valid subset of $\{1,\dots,n-1\}$: $a_{n-1}$ ways.
- If $n \in S$, then $n-1\notin S$, and the rest is any valid subset of $\{1,\dots,n-2\}$: $a_{n-2}$ ways.

These cases are disjoint and exhaustive, so
$$a_n = a_{n-1}+a_{n-2}.$$

**Identify.** The Fibonacci sequence with $F_1=F_2=1$ has $F_2 = 1, F_3=2, F_4=3, F_5=5,\dots$. Since $a_0 = 1 = F_2$ and $a_1 = 2 = F_3$, and both sequences obey the same recurrence,
$$a_n = F_{n+2} \qquad\text{for all } n\ge0. \;∎$$

Check $n=3$: valid subsets of $\{1,2,3\}$ are $\varnothing,\{1\},\{2\},\{3\},\{1,3\}$ — five of them, and $F_5 = 5$ ✓.
[/sol]

### P8 | Medium | Standard
In how many ways can you walk from $(0,0)$ to $(m,n)$ on the integer grid, moving only right or up? How many of these stay weakly below the line $y=x$ (assuming $m=n$)?
[hint]
The first is a permutation of a multiset. The second is the Catalan number — use the reflection principle.
[/hint]
[sol]
**Unrestricted paths.** A path is a sequence of $m$ R's and $n$ U's in some order, so the count is
$$\binom{m+n}{m}.$$

**Paths from $(0,0)$ to $(n,n)$ staying weakly below $y=x$.** These are counted by the Catalan number
$$C_n = \frac{1}{n+1}\binom{2n}{n}.$$

*Proof by reflection.* Total paths: $\binom{2n}{n}$. Call a path **bad** if it ever goes strictly above $y=x$, i.e. touches the line $y = x+1$. For a bad path, take the first moment it touches $y=x+1$ and reflect the remainder of the path in that line. Right steps become up steps and vice versa, so the endpoint $(n,n)$ maps to $(n-1, n+1)$.

This reflection is a bijection between bad paths to $(n,n)$ and **all** paths to $(n-1,n+1)$ — the inverse reflects back at the first touch of $y=x+1$, which every path to $(n-1,n+1)$ must have (since it ends above the line). So the number of bad paths is
$$\binom{2n}{n-1}.$$

Therefore the good paths number
$$\binom{2n}{n} - \binom{2n}{n-1} = \frac{1}{n+1}\binom{2n}{n} = C_n. \;∎$$

(The last equality is the computation done in the primes chapter, P6.)
[/sol]

### P9 | Hard | Standard
How many ways are there to place $n$ non-attacking rooks on an $n\times n$ board? On an $n\times n$ board with the main diagonal removed?
[hint]
The first is a permutation count. The second counts permutations with no fixed point — derangements.
[/hint]
[sol]
**Plain board.** A placement of $n$ non-attacking rooks puts exactly one rook in each row and each column, so it is exactly a permutation $\sigma$ of $\{1,\dots,n\}$ (rook in row $i$, column $\sigma(i)$). Count:
$$n!.$$

**Diagonal removed.** Now no rook may sit at $(i,i)$, i.e. $\sigma(i)\ne i$ for all $i$: these are the **derangements** $D_n$.

By inclusion–exclusion over the set $A_i$ of permutations fixing $i$:
$$D_n = \sum_{k=0}^{n}(-1)^k\binom nk (n-k)! = n!\sum_{k=0}^n\frac{(-1)^k}{k!}.$$

*(Reason: $|A_{i_1}\cap\cdots\cap A_{i_k}| = (n-k)!$, and there are $\binom nk$ such intersections.)*

So
$$D_n = n!\left(1-\frac1{1!}+\frac1{2!}-\cdots+\frac{(-1)^n}{n!}\right) \approx \frac{n!}{e}.$$

Check $n=3$: $D_3 = 6(1-1+\frac12-\frac16) = 6\cdot\frac13 = 2$ ✓ (namely $231$ and $312$). ∎
[/sol]

### P10 | Hard | Standard
Prove that the number of ways to write $n$ as an ordered sum of positive integers (a **composition**) is $2^{n-1}$, and find a bijection proving it.
[hint]
Write $n$ as $n$ ones in a row and decide, at each of the $n-1$ gaps, whether to place a $+$ or to merge.
[/hint]
[sol]
**The bijection.** Write $n$ as a row of $n$ ones:
$$\underbrace{1\ \square\ 1\ \square\ 1\ \cdots\ \square\ 1}_{n \text{ ones},\ n-1 \text{ gaps}}$$
In each of the $n-1$ gaps, independently choose either a **comma** (ending the current part) or a **plus** (merging into the current part).

- Given a composition $n = a_1+a_2+\cdots+a_k$, place a comma after the $a_1$-th one, after the $(a_1+a_2)$-th one, and so on — that is, at the $k-1$ positions given by the partial sums $a_1, a_1+a_2, \dots, a_1+\cdots+a_{k-1}$.
- Conversely, any choice of a subset $S \subseteq \{1,\dots,n-1\}$ of comma positions determines the parts as the gaps between consecutive commas.

These two maps are mutually inverse, so compositions of $n$ correspond bijectively to subsets of the $(n-1)$-element set of gaps.

**Count.**
$$\#\{\text{compositions of } n\} = 2^{n-1}. \;∎$$

**Check $n=3$:** $2^2 = 4$, namely $3$, $2+1$, $1+2$, $1+1+1$ ✓.

**Bonus.** Refining by the number of parts: compositions of $n$ into exactly $k$ parts correspond to subsets of size $k-1$, giving $\binom{n-1}{k-1}$ — which recovers the positive-integer stars-and-bars formula, as it must.
[/sol]
