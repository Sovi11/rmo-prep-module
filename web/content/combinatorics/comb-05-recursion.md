---
id: comb-05-recursion
title: Recursion and double counting
level: Core
hours: 3
blurb: Setting up a recurrence by conditioning on the last step, and proving identities by counting the same set two different ways.
tags: recursion, double counting, Catalan
link: Yufei Zhao — Counting in two ways :: https://yufeizhao.com/olympiad/doublecounting_mop.pdf
link: Yufei Zhao — Bijections :: https://yufeizhao.com/olympiad/bijections.pdf
video: Search: recurrence relations combinatorics double counting :: https://www.youtube.com/results?search_query=double+counting+combinatorics+olympiad+recursion
---

## Setting up a recurrence

The method: let $a_n$ be the quantity you want, then **condition on one feature** of the object — usually the last element, the first move, or the position of a distinguished item — and express $a_n$ in terms of smaller cases.

> **The checklist.**
> 1. Define $a_n$ precisely, in words.
> 2. Choose the feature to condition on.
> 3. Check the cases are **disjoint** and **exhaustive**.
> 4. Compute enough base cases.
> 5. Verify the recurrence on a small case you can count by hand.

Step 5 catches almost every error.

**Example.** Tilings of a $2\times n$ board by dominoes. Condition on how the last column is covered: either one vertical domino (leaving $2\times(n-1)$), or two horizontal dominoes filling the last two columns (leaving $2\times(n-2)$). So
$$t_n = t_{n-1}+t_{n-2}, \qquad t_1 = 1,\ t_2 = 2,$$
giving $t_n = F_{n+1}$.

## Catalan numbers

$$C_n = \frac{1}{n+1}\binom{2n}{n}, \qquad C_0=1,\ C_1=1,\ C_2=2,\ C_3=5,\ C_4=14,\dots$$

with the recurrence
$$C_{n+1} = \sum_{k=0}^{n}C_kC_{n-k}.$$

They count: balanced bracket strings of length $2n$; lattice paths from $(0,0)$ to $(n,n)$ weakly below the diagonal; triangulations of a convex $(n+2)$-gon; binary trees with $n$ nodes; ways to multiply $n+1$ factors with brackets.

> **Recognising Catalan.** If your recurrence is $a_{n+1} = \sum a_ka_{n-k}$ — "split the object at the first return to the baseline" — you have Catalan numbers.

## Double counting

Count one set two ways and equate. The skill is choosing the set.

> **Handshake lemma.** In any graph, $\displaystyle\sum_{v}\deg(v) = 2|E|$, because each edge is counted once at each endpoint. Consequence: **the number of odd-degree vertices is even.**

> **Example.** Prove $\displaystyle\sum_{k=0}^n k\binom nk = n2^{n-1}$.
> Count pairs $(S, x)$ with $S\subseteq\{1,\dots,n\}$ and $x \in S$. By $S$ first: $\sum_k k\binom nk$. By $x$ first: $n$ choices for $x$, then any subset of the rest, $2^{n-1}$. ∎

**Double counting with a table.** Write a 0–1 matrix whose rows are one type of object and columns the other, with a 1 where they are incident. Summing the 1s by rows and by columns gives an identity. This is the cleanest way to present most double-counting arguments.

## Common traps

- A recurrence whose cases overlap (double counting) or miss something.
- Wrong base cases — the recurrence may be right and the answer still wrong.
- In double counting, failing to state clearly **what the set of objects is**.
- Assuming a recurrence determines the sequence without enough initial values (a two-term recurrence needs two).

## Problems

### P1 | Warmup | Standard
Let $t_n$ be the number of ways to tile a $2\times n$ board with $1\times2$ dominoes. Find $t_5$.
[hint]
Set up the recurrence by conditioning on the last column.
[/hint]
[sol]
Condition on how the rightmost column is covered:
- a single **vertical** domino fills it, leaving a $2\times(n-1)$ board: $t_{n-1}$ ways;
- two **horizontal** dominoes fill the last two columns, leaving $2\times(n-2)$: $t_{n-2}$ ways.

These are disjoint and exhaustive, so $t_n = t_{n-1}+t_{n-2}$ with $t_1=1$, $t_2=2$.

$$t_3 = 3,\quad t_4 = 5,\quad t_5 = 8. \;∎$$
[/sol]

### P2 | Warmup | Standard
How many binary strings of length $n$ contain no two consecutive 1s?
[hint]
Condition on the last character.
[/hint]
[sol]
Let $a_n$ be the count.
- If the string ends in 0, the first $n-1$ characters form any valid string: $a_{n-1}$.
- If it ends in 1, the previous character must be 0, and the first $n-2$ form any valid string: $a_{n-2}$.

So $a_n = a_{n-1}+a_{n-2}$, with $a_1 = 2$ ($0$ and $1$) and $a_2 = 3$ ($00, 01, 10$).

Hence $a_n = F_{n+2}$ with $F_1=F_2=1$: $a_3 = 5$, $a_4 = 8$, $a_5 = 13$, … ∎

*(Same sequence as subsets with no two consecutive elements — and indeed the objects correspond bijectively.)*
[/sol]

### P3 | Easy | Standard
Prove the handshake lemma and deduce that in any group of people, the number who have shaken hands an odd number of times is even.
[hint]
Count the pairs (person, handshake they took part in) two ways.
[/hint]
[sol]
Model the situation as a graph $G$: people are vertices, handshakes are edges.

**Double count the set** $\;T = \{(v,e) : v \text{ is an endpoint of edge } e\}$.

- **By vertex:** each vertex $v$ appears in $\deg(v)$ pairs, so $|T| = \sum_v \deg(v)$.
- **By edge:** each edge has exactly 2 endpoints, so $|T| = 2|E|$.

Hence
$$\sum_{v}\deg(v) = 2|E|. \;∎$$

**Deduction.** The right side is even. Split the left side into vertices of even and odd degree:
$$\underbrace{\sum_{\deg v \text{ even}}\deg v}_{\text{even}} + \sum_{\deg v \text{ odd}}\deg v = \text{even}.$$
So $\sum_{\deg v \text{ odd}}\deg v$ is even. It is a sum of odd numbers, and a sum of odd numbers is even exactly when there is an **even number** of them.

Therefore the number of odd-degree vertices is even. ∎
[/sol]

### P4 | Easy | Standard
Count the balanced bracket strings of length 8 (four "(" and four ")", every prefix having at least as many "(" as ")").
[hint]
This is $C_4$.
[/hint]
[sol]
Balanced bracket strings with $n$ pairs are counted by the Catalan number
$$C_n = \frac{1}{n+1}\binom{2n}{n}.$$

For $n = 4$:
$$C_4 = \frac15\binom84 = \frac{70}{5} = \mathbf{14}. \;∎$$

*(Cross-check via the recurrence $C_{n+1}=\sum_k C_kC_{n-k}$: $C_0=1, C_1=1, C_2=2, C_3=5$, and $C_4 = C_0C_3+C_1C_2+C_2C_1+C_3C_0 = 5+2+2+5 = 14$ ✓.)*
[/sol]

### P5 | Medium | Standard
Prove the Catalan recurrence $C_{n+1} = \sum_{k=0}^n C_kC_{n-k}$ using balanced bracket strings.
[hint]
Split at the position where the first opening bracket is matched.
[/hint]
[sol]
Let $C_m$ be the number of balanced bracket strings with $m$ pairs.

Take a balanced string $S$ with $n+1$ pairs. Its first character is "(", and that bracket has a unique matching ")". Write
$$S = (\,A\,)\,B,$$
where $A$ is the (balanced) content strictly between the first "(" and its match, and $B$ is the remainder.

**Both $A$ and $B$ are balanced.** $A$ is balanced because the first bracket is matched exactly at the end of $A$, so within $A$ the count never drops below 0 and ends at 0. $B$ is then balanced as the rest of a balanced string.

**The decomposition is unique**, since the matching position of the first bracket is determined by $S$.

If $A$ has $k$ pairs, then $B$ has $(n+1) - 1 - k = n-k$ pairs. Conversely, any pair of balanced strings $(A,B)$ with $k$ and $n-k$ pairs assembles into a unique $S$.

Summing over $k = 0,\dots,n$ (disjoint, exhaustive cases):
$$C_{n+1} = \sum_{k=0}^{n}C_k\,C_{n-k}. \;∎$$
[/sol]

### P6 | Medium | Standard
Prove by double counting that $\displaystyle\sum_{k=0}^{n}\binom nk^2 = \binom{2n}{n}$, presenting the argument as a table.
[hint]
Rows = subsets of the left half, columns = subsets of the right half.
[/hint]
[sol]
Let $X = A \sqcup B$ with $|A|=|B|=n$, and let
$$\mathcal{F} = \{\,S\subseteq X : |S| = n\,\}.$$

**Count 1 (directly).** $|\mathcal F| = \dbinom{2n}{n}$.

**Count 2 (by the split).** Every $S\in\mathcal F$ determines the pair $\left(S\cap A,\ S\cap B\right)$, and conversely any pair $(P,Q)$ with $P\subseteq A$, $Q\subseteq B$ and $|P|+|Q| = n$ determines $S = P\cup Q$. So
$$|\mathcal F| = \sum_{k=0}^{n}\#\{P\subseteq A: |P|=k\}\cdot\#\{Q\subseteq B : |Q| = n-k\} = \sum_{k=0}^{n}\binom nk\binom{n}{n-k}.$$

Using $\binom n{n-k} = \binom nk$,
$$\binom{2n}{n} = \sum_{k=0}^n\binom nk^2. \;∎$$

**As a table.** Build a grid with one row for each subset $P\subseteq A$ and one column for each $Q\subseteq B$, and put a 1 in cell $(P,Q)$ when $|P|+|Q|=n$. Summing the 1s by rows gives $\sum_k\binom nk\binom n{n-k}$; the total number of 1s is $\binom{2n}n$ because each 1 corresponds to exactly one $n$-subset of $X$.
[/sol]

### P7 | Medium | Standard
Let $a_n$ be the number of ways to write $n$ as an ordered sum of 1s and 2s. Find and solve the recurrence.
[hint]
Condition on the last summand.
[/hint]
[sol]
Condition on the final summand:
- if it is 1, the rest is a composition of $n-1$ into 1s and 2s: $a_{n-1}$ ways;
- if it is 2, the rest is a composition of $n-2$: $a_{n-2}$ ways.

Disjoint and exhaustive, so
$$a_n = a_{n-1}+a_{n-2}, \qquad a_1 = 1, \quad a_2 = 2 \;(1+1 \text{ and } 2).$$

So $a_n = F_{n+1}$ where $F_1=F_2=1$:
$$a_3 = 3,\quad a_4=5,\quad a_5 = 8,\quad a_6 = 13.$$

By the characteristic equation $x^2=x+1$,
$$a_n = \frac{1}{\sqrt5}\left[\left(\frac{1+\sqrt5}{2}\right)^{n+1}-\left(\frac{1-\sqrt5}{2}\right)^{n+1}\right]. \;∎$$
[/sol]

### P8 | Medium | Standard
A convex $n$-gon has no three diagonals concurrent. How many regions do the diagonals cut it into?
[hint]
Use Euler's formula $V-E+F=2$, counting interior intersection points as $\binom n4$.
[/hint]
[sol]
**Vertices.** $V = n$ (the polygon's corners) $+ \binom n4$ (interior crossings — each set of 4 vertices gives exactly one crossing of the two "diagonals of the quadrilateral").

**Edges.** Start with the $n$ sides. Each diagonal is split by the interior points on it. Total: the $\binom n2 - n$ diagonals contribute, and each interior point lies on exactly 2 diagonals, adding 1 extra segment to each. So the diagonals contribute
$$\left[\binom n2 - n\right] + 2\binom n4$$
segments, and
$$E = n + \binom n2 - n + 2\binom n4 = \binom n2 + 2\binom n4.$$

**Euler's formula** for a connected planar graph: $V - E + F = 2$, where $F$ counts faces including the unbounded one. So the number of **interior** regions is
$$F - 1 = E - V + 1 = \left[\binom n2 + 2\binom n4\right] - \left[n+\binom n4\right] + 1 = \binom n2 - n + \binom n4 + 1.$$

Since $\binom n2 - n = \frac{n(n-3)}{2}$,
$$\#\text{regions} = \binom n4 + \binom{n-1}{2}.$$

*(Using $\frac{n(n-3)}{2}+1 = \frac{n^2-3n+2}{2} = \binom{n-1}{2}$.)*

**Checks.** $n=4$: $\binom44+\binom32 = 1+3 = 4$ ✓ (two diagonals cut a quadrilateral into 4). $n=5$: $\binom54+\binom42 = 5+6 = 11$ ✓. $n=6$: $\binom64+\binom52 = 15+10 = 25$ — but a regular hexagon has three main diagonals concurrent, which is why the hypothesis matters; for a generic hexagon the answer is 25. ∎
[/sol]

### P9 | Hard | Standard
In a group of $n$ people, every pair either are friends or are not. Prove that the number of "friendship triangles" plus the number of "paths of length 2 centred at each vertex" satisfies
$$\sum_{v}\binom{\deg v}{2} = 3T + P,$$
where $T$ is the number of triangles and $P$ the number of paths $a - b - c$ with $a,c$ **not** friends.
[hint]
Double count the set of "cherries": ordered structures $(b, \{a,c\})$ where $b$ is adjacent to both $a$ and $c$.
[/hint]
[sol]
Define a **cherry** to be a pair $\left(b, \{a,c\}\right)$ where $b$ is a vertex and $a, c$ are two distinct neighbours of $b$. (So a cherry is a path $a-b-c$ with a marked centre $b$.)

**Count 1: by the centre.** For each vertex $b$, the number of cherries centred at $b$ is the number of ways to choose 2 of its $\deg(b)$ neighbours:
$$\#\text{cherries} = \sum_{v}\binom{\deg v}{2}.$$

**Count 2: by the outer pair.** Classify each cherry by whether $a$ and $c$ are adjacent:
- If $a \sim c$, then $\{a,b,c\}$ is a triangle. Each triangle gives exactly **3** cherries (one for each choice of which vertex is the centre).
- If $a \not\sim c$, the cherry is exactly one of the $P$ paths of length 2 with non-adjacent endpoints, each arising from exactly one cherry.

Hence
$$\#\text{cherries} = 3T + P.$$

Equating the two counts,
$$\sum_v\binom{\deg v}{2} = 3T+P. \;∎$$

**Why it is useful.** Since $P \ge 0$, this immediately gives the bound $T \le \frac13\sum_v\binom{\deg v}{2}$ — a standard first step in problems asking to bound the number of triangles in a graph.
[/sol]

### P10 | Hard | RMO 2024 P6
For $n \ge 2$, call a sequence $1 = a_1 < a_2<\cdots<a_k = n$ an **$n$-chain** if $a_i \mid a_{i+1}$ for every $i$. Let $f(n)$ be the number of $n$-chains. Prove that $f(2^m\cdot3) = 2^{m-1}(m+2)$ for every positive integer $m$.
[hint]
A chain from 1 to $n$ is determined by the sequence of quotients $a_{i+1}/a_i$, whose product is $n$ — so $f(n)$ counts ordered factorisations of $n$ into factors $>1$. Set up a recursion on the exponent, or count directly by where the factor 3 appears.
[/hint]
[sol]
**Reformulation.** An $n$-chain $1 = a_1 \mid a_2\mid\cdots\mid a_k = n$ is determined by its **quotients** $q_i = a_{i+1}/a_i$, each an integer $>1$, with $q_1q_2\cdots q_{k-1} = n$. Conversely any such ordered list of factors gives a chain. So
$$f(n) = \#\{\text{ordered factorisations of } n \text{ into factors} > 1\}.$$

**Our case.** $n = 2^m\cdot3$. Every factor is of the form $2^{e}$ or $2^{e}\cdot3$ with $e \ge 0$, and exactly one factor carries the 3.

Say the ordered factorisation has $j$ factors in total, and the factor containing the 3 sits in position $p$ ($1\le p\le j$). Write that factor as $2^{c}\cdot3$ with $c\ge0$, and the other $j-1$ factors as $2^{e_1},\dots,2^{e_{j-1}}$ with each $e_i \ge 1$ (they must exceed 1, and a pure power of 2 exceeding 1 has exponent $\ge1$). The exponents satisfy
$$c + e_1+\cdots+e_{j-1} = m, \qquad c\ge0,\ e_i\ge1.$$

**Count for fixed $j$.** Choose the position $p$ of the special factor: $j$ ways. Then count solutions of the exponent equation. Substituting $e_i' = e_i-1 \ge 0$ turns it into
$$c + e_1'+\cdots+e_{j-1}' = m-(j-1),$$
whose number of non-negative solutions is $\displaystyle\binom{m-(j-1)+(j-1)}{j-1} = \binom{m}{j-1}$.

So the number of ordered factorisations with exactly $j$ factors is $j\binom{m}{j-1}$, valid for $1 \le j \le m+1$.

**Sum over $j$.** Put $i = j-1$, so $i$ runs from 0 to $m$:
$$f\left(2^m\cdot3\right) = \sum_{j=1}^{m+1}j\binom{m}{j-1} = \sum_{i=0}^{m}(i+1)\binom mi = \sum_{i=0}^m i\binom mi + \sum_{i=0}^m\binom mi.$$

Using the two standard identities $\sum_i i\binom mi = m2^{m-1}$ and $\sum_i\binom mi = 2^m$:
$$f\left(2^m\cdot3\right) = m\,2^{m-1} + 2^{m} = 2^{m-1}\left(m + 2\right). \;∎$$

**Check $m=1$:** $n = 6$, and the formula gives $2^0(1+2) = 3$. The 6-chains are $\{1,6\}$, $\{1,2,6\}$, $\{1,3,6\}$ — three of them ✓.

**Check $m=2$:** $n=12$, formula gives $2(2+2) = 8$. The 12-chains: $\{1,12\}$, $\{1,2,12\}$, $\{1,3,12\}$, $\{1,4,12\}$, $\{1,6,12\}$, $\{1,2,4,12\}$, $\{1,2,6,12\}$, $\{1,3,6,12\}$ — eight ✓.
[/sol]
