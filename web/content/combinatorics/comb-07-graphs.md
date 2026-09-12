---
id: comb-07-graphs
title: Graphs and combinatorial games
level: Core
hours: 3
blurb: Enough graph theory for RMO — degrees, connectivity, trees, bipartite graphs, Euler and Hamilton — plus the winning-position idea behind combinatorial games.
tags: graphs, trees, bipartite, games, strategy
link: Yufei Zhao — Algebraic techniques in combinatorics :: https://yufeizhao.com/olympiad/algcomb.pdf
video: Search: graph theory olympiad basics :: https://www.youtube.com/results?search_query=graph+theory+olympiad+problems+basics
---

## Vocabulary

A **graph** $G = (V,E)$ has vertices and edges. $\deg(v)$ is the number of edges at $v$. A **path** is a walk with no repeated vertex; a **cycle** is a closed path. $G$ is **connected** if every two vertices are joined by a path.

- $\displaystyle\sum_{v}\deg(v) = 2|E|$ **(handshake lemma)**, so the number of odd-degree vertices is even.
- A **tree** is a connected graph with no cycle. Equivalent characterisations: connected with $|V|-1$ edges; acyclic with $|V|-1$ edges; a unique path between any two vertices. Every tree with $\ge2$ vertices has at least two **leaves** (degree-1 vertices).
- A connected graph on $n$ vertices has at least $n-1$ edges; a graph with more than $\binom{n-1}{2}$ edges is connected.
- $G$ is **bipartite** (vertices split into two sides, all edges crossing) **iff** it has no odd cycle.

## The facts that solve problems

> **Euler circuits.** A connected graph has a closed walk using every edge exactly once **iff** every vertex has even degree. It has an open such walk iff exactly two vertices have odd degree.

> **Longest path trick.** Take a longest path $v_0v_1\cdots v_k$ in $G$. Every neighbour of $v_0$ lies **on the path** — otherwise the path could be extended. This single observation proves a surprising number of results (e.g. a graph with minimum degree $\ge k$ contains a path of length $k$, and a cycle of length $\ge k+1$).

> **Extremal in graphs.** Take the vertex of maximum degree, the longest path, the largest component, the smallest counterexample.

> **Colouring / bipartite.** If you can 2-colour the vertices so that all edges cross, there is no odd cycle — and conversely.

**Counting edges.** $K_n$ (all pairs joined) has $\binom n2$ edges. A bipartite graph with parts of size $a$ and $b$ has at most $ab$ edges. **Turán-type fact:** a triangle-free graph on $n$ vertices has at most $\left\lfloor\frac{n^2}{4}\right\rfloor$ edges (Mantel's theorem).

## Combinatorial games

For two-player games with no chance, perfect information, and a player who cannot move losing:

> Label each position **N** (the player to move — "Next" — wins) or **P** (the **Previous** player wins, i.e. the player to move loses).
>
> - A position is **P** if **every** move leads to an N-position.
> - A position is **N** if **some** move leads to a P-position.
> - Terminal positions (no moves) are **P**.

**The method:** compute the labels for small positions, spot the pattern, then prove it by induction — showing that from any conjectured P-position all moves lead to N-positions, and from any conjectured N-position some move reaches a P-position.

**The strategy-stealing argument.** In a symmetric game where having an extra move never hurts, the first player has a winning strategy — because if the second player had one, the first could "steal" it. This proves existence without constructing the strategy.

**Symmetry strategies.** Many games are won by mirroring the opponent (about a centre, or to restore a balanced position). If the starting position is symmetric, the second player often wins; if not, the first player moves to make it symmetric.

## Common traps

- Assuming a graph is connected when it need not be.
- Using "every vertex has even degree ⟹ Euler circuit" without checking connectivity.
- In games, labelling positions from the top down rather than from terminal positions up.
- Claiming a strategy works without checking it is always *available*.

## Problems

### P1 | Warmup | Standard
In a group of 9 people, can everyone be friends with exactly 3 others?
[hint]
Handshake lemma: the sum of degrees must be even.
[/hint]
[sol]
If every one of the 9 people had exactly 3 friends, the sum of degrees would be
$$9 \times 3 = 27,$$
which is **odd**. But the handshake lemma says $\sum_v\deg(v) = 2|E|$ is always even.

Contradiction — so **no**, such a friendship arrangement is impossible. ∎
[/sol]

### P2 | Warmup | Standard
Prove that every tree with $n \ge 2$ vertices has at least two leaves.
[hint]
Take a longest path and look at its two endpoints.
[/hint]
[sol]
Let $P = v_0v_1\cdots v_k$ be a **longest** path in the tree $T$ (one exists since $T$ is finite and has at least one edge, as it is connected with $n\ge2$).

**Claim: $v_0$ is a leaf.** Suppose $v_0$ had a neighbour $u \ne v_1$.
- If $u$ is not on $P$, then $u v_0v_1\cdots v_k$ is a longer path — contradiction.
- If $u = v_i$ for some $i\ge2$, then $v_0v_1\cdots v_i v_0$ is a cycle — contradicting that $T$ is a tree.

So $v_0$ has exactly one neighbour, $v_1$: it is a leaf.

By the identical argument at the other end, $v_k$ is also a leaf. Since $k \ge 1$, $v_0 \ne v_k$, giving **two distinct leaves**. ∎
[/sol]

### P3 | Easy | Standard
Prove that a graph is bipartite if and only if it contains no cycle of odd length.
[hint]
One direction is easy. For the other, 2-colour each connected component by the parity of the distance from a fixed vertex.
[/hint]
[sol]
**($\Rightarrow$)** Suppose $G$ is bipartite with parts $A,B$. Any cycle alternates between $A$ and $B$ at each step, so returning to the start requires an even number of steps. Hence every cycle has even length. ∎

**($\Leftarrow$)** Suppose $G$ has no odd cycle. It suffices to 2-colour each connected component, so assume $G$ is connected. Fix a vertex $r$ and colour each vertex $v$ by the parity of $d(r,v)$, the length of a shortest path from $r$ to $v$: **even → $A$**, **odd → $B$**.

**Claim: no edge joins two vertices of the same colour.** Suppose $uv$ is an edge with $d(r,u)\equiv d(r,v)\pmod2$. Take shortest paths $P_u$ from $r$ to $u$ and $P_v$ from $r$ to $v$, and let $w$ be the last vertex they share. Then
$$\text{(the } w\to u \text{ part of } P_u) + uv + (\text{the } v\to w \text{ part of } P_v)$$
is a cycle. Its length is
$$\big(d(r,u)-d(r,w)\big) + 1 + \big(d(r,v)-d(r,w)\big),$$
which is **odd**, since $d(r,u)$ and $d(r,v)$ have the same parity and the $-2d(r,w)$ is even. That contradicts the hypothesis.

So all edges cross between $A$ and $B$, and $G$ is bipartite. ∎
[/sol]

### P4 | Easy | Standard
Twenty people attend a party. Prove that two of them have the same number of acquaintances at the party.
[hint]
The possible counts are $0,\dots,19$ — twenty values for twenty people. Show $0$ and $19$ cannot both occur.
[/hint]
[sol]
Each person's acquaintance count lies in $\{0,1,\dots,19\}$, which has 20 values — the same as the number of people, so plain pigeonhole is not enough.

**Key observation: $0$ and $19$ cannot both occur.** If someone knows 19 people, they know everyone, so nobody has 0 acquaintances. Conversely if someone knows nobody, then no one can know all 19 others.

So at most 19 of the 20 possible values are actually attained by the 20 people. By pigeonhole two people share a value. ∎
[/sol]

### P5 | Medium | Standard
Prove Mantel's theorem: a triangle-free graph on $n$ vertices has at most $\left\lfloor n^2/4\right\rfloor$ edges.
[hint]
For each edge $uv$, note $\deg(u)+\deg(v)\le n$ (why?). Sum over all edges and apply Cauchy–Schwarz.
[/hint]
[sol]
Let $G$ be triangle-free with $n$ vertices and $m$ edges.

**Step 1: for every edge $uv$, $\deg(u)+\deg(v)\le n$.** The neighbourhoods $N(u)$ and $N(v)$ are **disjoint**: a common neighbour $w$ would make $uvw$ a triangle. Both neighbourhoods are contained in $V$, so
$$\deg(u)+\deg(v) = |N(u)|+|N(v)| = |N(u)\cup N(v)| \le n.$$

**Step 2: sum over edges.**
$$\sum_{uv\in E}\big(\deg u+\deg v\big) \ \le\ mn.$$
On the left, each vertex $v$ contributes $\deg(v)$ once for each edge at it, i.e. $\deg(v)$ times:
$$\sum_{uv\in E}(\deg u+\deg v) = \sum_{v}\deg(v)^2.$$
So $\displaystyle\sum_v \deg(v)^2 \le mn$.

**Step 3: Cauchy–Schwarz.**
$$\sum_v\deg(v)^2 \ \ge\ \frac{\left(\sum_v\deg v\right)^2}{n} = \frac{(2m)^2}{n} = \frac{4m^2}{n}.$$

**Combine.**
$$\frac{4m^2}{n}\ \le\ mn \implies m \ \le\ \frac{n^2}{4}.$$
Since $m$ is an integer, $m \le \left\lfloor n^2/4\right\rfloor$. ∎

**Sharpness.** The complete bipartite graph $K_{\lceil n/2\rceil,\lfloor n/2\rfloor}$ is triangle-free (bipartite, so no odd cycle) and has exactly $\left\lfloor n^2/4\right\rfloor$ edges.
[/sol]

### P6 | Medium | Standard
Prove that in any graph with minimum degree $\ge k$, there is a path with at least $k+1$ vertices.
[hint]
Take a longest path and consider the neighbours of its endpoint.
[/hint]
[sol]
Let $P = v_0v_1\cdots v_\ell$ be a **longest** path in $G$.

**All neighbours of $v_0$ lie on $P$.** If $v_0$ had a neighbour $u \notin P$, then $uv_0v_1\cdots v_\ell$ would be a strictly longer path — contradicting maximality.

So $N(v_0)\subseteq \{v_1,v_2,\dots,v_\ell\}$, a set of $\ell$ vertices. Since $\deg(v_0)\ge k$,
$$k \ \le\ |N(v_0)| \ \le\ \ell.$$

Therefore $P$ has $\ell+1 \ge k+1$ vertices. ∎

**Bonus.** Pushing a little further: since all $\ge k$ neighbours of $v_0$ lie on $P$, let $v_j$ be the neighbour with largest index; then $v_0v_1\cdots v_j v_0$ is a cycle with at least $k+1$ vertices. So minimum degree $\ge k$ also forces a cycle of length $\ge k+1$.
[/sol]

### P7 | Medium | Standard
Two players alternately remove 1, 2 or 3 matches from a pile of 20. The player who takes the last match wins. Who wins, and how?
[hint]
Work out small cases. Find the pattern of losing positions.
[/hint]
[sol]
Label a position by the number $n$ of matches remaining, for the player **about to move**.

**Terminal.** $n=0$: the player to move cannot take the last match — in fact the previous player just took it and won. So $n=0$ is a **P-position** (the player to move loses).

**Small cases.**
- $n=1,2,3$: take all of them and win → **N**.
- $n=4$: any move leaves $1,2$ or $3$, all N-positions → **P**.
- $n=5,6,7$: move to 4 (a P-position) → **N**.
- $n=8$: any move leaves $5,6,7$, all N → **P**.

**Pattern:** $n$ is a P-position exactly when $4 \mid n$.

**Proof by induction.** Suppose the claim holds for all smaller values.
- If $4\mid n$, any move leaves $n-1, n-2$ or $n-3$, none divisible by 4 — all N-positions. So $n$ is P. ✓
- If $4\nmid n$, write $n = 4q+r$ with $r\in\{1,2,3\}$. Taking $r$ matches leaves $4q$, a P-position. So $n$ is N. ✓

**Conclusion.** $20 = 4\cdot5$ is a **P-position**, so the player to move *loses*: the **second player wins**.

**Strategy:** whatever the first player takes ($r\in\{1,2,3\}$), the second player takes $4-r$, restoring a multiple of 4. This is always legal, and eventually leaves 0 for the opponent. ∎
[/sol]

### P8 | Medium | Standard
Prove that in any graph with $n$ vertices and more than $\binom{n-1}{2}$ edges, the graph is connected.
[hint]
If disconnected, it splits into parts of sizes $a$ and $n-a$; bound the number of edges.
[/hint]
[sol]
Suppose $G$ is **disconnected**. Then its vertex set splits into two non-empty parts $A$ and $B$ with no edges between them; say $|A| = a$ and $|B| = n-a$ with $1\le a\le n-1$.

All edges lie inside $A$ or inside $B$, so
$$|E| \ \le\ \binom a2 + \binom{n-a}{2}.$$

**Claim: this is maximised at $a = 1$ (or $a=n-1$).** The function $g(a) = \binom a2+\binom{n-a}2 = \frac{a(a-1)+(n-a)(n-a-1)}{2}$ is a convex quadratic in $a$ (leading coefficient $\frac{2}{2}=1>0$), symmetric about $a = \frac n2$. A convex function on the interval $[1,n-1]$ attains its maximum at an endpoint, i.e. at $a=1$ or $a=n-1$, where
$$g(1) = \binom12+\binom{n-1}{2} = 0 + \binom{n-1}{2}.$$

Therefore a disconnected graph has $|E| \le \binom{n-1}{2}$.

Contrapositively, if $|E| > \binom{n-1}{2}$ then $G$ is connected. ∎

**Sharpness.** The graph consisting of $K_{n-1}$ plus one isolated vertex has exactly $\binom{n-1}{2}$ edges and is disconnected.
[/sol]

### P9 | Hard | Classic
Two players alternately place identical circular coins on a circular table. Coins must not overlap and must lie entirely on the table. A player who cannot move loses. Prove that the **first** player has a winning strategy.
[hint]
Use the table's central symmetry. The first move should destroy the symmetry in a way only the first player can exploit.
[/hint]
[sol]
**The strategy.**

**Move 1.** Player 1 places a coin exactly at the **centre** of the table.

**Every later move.** Whenever Player 2 places a coin at some position $P$, Player 1 replies by placing a coin at $P^*$, the reflection of $P$ through the centre of the table.

**Why the reply is always legal.** Three things must be checked.

1. **$P^*$ lies on the table.** The table is a disc centred at $O$, which is symmetric under reflection through $O$. Since Player 2's coin lies entirely on the table, so does its mirror image.

2. **$P^* \ne$ the centre coin's position.** Player 2's coin at $P$ does not overlap the central coin, so $P$ is at distance $>2r$ from $O$ (where $r$ is the coin radius). Hence $P^*$ is also at distance $>2r$ from $O$, and the mirrored coin does not overlap the central one.

3. **$P^*$ does not overlap any coin already placed.** Here is the key point. After each of Player 1's replies, the whole configuration is **symmetric about $O$**. So when Player 2 moves to $P$, the position just before their move was symmetric. If the mirrored position $P^*$ overlapped some existing coin $C$, then by symmetry $P$ would overlap the mirror coin $C^*$, which is also present — contradicting the legality of Player 2's move. 

   (The only coin not paired with a mirror partner is the central one, and case 2 handled it.)

**Why Player 1 wins.** After every Player 1 move, the configuration is symmetric about $O$, so Player 1 always has a legal reply available whenever Player 2 has just moved. The game is finite — the table has finite area and each coin occupies positive area, so only finitely many coins fit. Therefore the game ends, and it cannot end after a Player 2 move with Player 1 unable to reply.

So the player who eventually cannot move is **Player 2**. Player 1 wins. ∎

**The pattern.** This is the **symmetry-stealing strategy**, and it is the single most common winning idea in olympiad games:

> If the starting position is symmetric, the **second** player often wins by mirroring. If the first player can make one move that both breaks and then "owns" the symmetry — here, occupying the unique fixed point of the reflection — the **first** player wins by mirroring from then on.

When you write such a solution, the marks are in step 3: *proving the mirrored move is always available*. Never assert it.
[/sol]

### P10 | Hard | Standard
Prove that a connected graph has an Euler circuit (a closed walk using every edge exactly once) if and only if every vertex has even degree.
[hint]
One direction is a counting argument. For the other, take a maximal closed trail and show it must use every edge, using connectivity.
[/hint]
[sol]
**($\Rightarrow$)** Suppose a closed walk $W$ uses every edge exactly once. Each time $W$ visits a vertex $v$ it uses one edge to arrive and one to leave, contributing 2 to $\deg(v)$; the start/end vertex also pairs its first and last edges. Since every edge is used exactly once, $\deg(v)$ equals twice the number of visits, hence is even. ∎

**($\Leftarrow$)** Let $G$ be connected with all degrees even. Among all **closed trails** (closed walks with no repeated edge), choose one, $W$, with the **maximum number of edges**. Such a trail exists: a single vertex is a trivial closed trail, and there are finitely many trails.

**Claim: $W$ uses every edge of $G$.**

Suppose not, and let $H$ be the graph of unused edges. 

*Every vertex has even degree in $H$*: in $G$ its degree is even, and $W$ removes an even number of edges at each vertex (it enters and leaves equally often). ✓

*Some unused edge touches $W$.* $G$ is connected, so there is a path from a vertex of $W$ to an endpoint of an unused edge; the first unused edge along that path touches a vertex $v$ of $W$. (If $W$ is a single vertex, connectivity gives an unused edge at it directly.)

*Extend.* Starting at $v$, walk along unused edges, never repeating one. At each vertex reached, the number of unused edges is even, so on arriving you can always leave — the walk can only get stuck back at $v$. So it closes up into a closed trail $C$ through $v$, using only unused edges, with at least one edge.

Now splice $C$ into $W$ at $v$: traverse $W$ up to $v$, then all of $C$, then the rest of $W$. This is a closed trail with strictly more edges than $W$ — contradicting maximality.

Hence $W$ uses every edge: it is an Euler circuit. ∎

**Corollary (the Königsberg bridges).** The Königsberg multigraph has four vertices of odd degree, so no Euler circuit — and, since more than two vertices are odd, not even an open Euler trail.
[/sol]
