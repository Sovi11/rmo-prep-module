---
id: comb-06-invariants
title: Invariants, monovariants and colourings
level: Core
hours: 4
blurb: The heart of olympiad combinatorics. Finding what a process cannot change, what it can only push one way, and how a clever colouring makes both visible.
tags: invariants, monovariants, colouring, extremal
link: Yufei Zhao — Tiling :: https://yufeizhao.com/olympiad/tiling.pdf
link: Yufei Zhao — Combinatorics (colouring) :: https://yufeizhao.com/olympiad/comb1.pdf
video: Search: invariants monovariants olympiad combinatorics :: https://www.youtube.com/results?search_query=invariants+monovariants+colouring+olympiad+combinatorics
---

## Invariants

Given a process with moves, an **invariant** is a quantity unchanged by every move.

> **What an invariant proves.** If the start and the target differ in the invariant, the target is **unreachable**. That is *all* it proves — an invariant can never show something *is* reachable. For that you must exhibit a sequence of moves.

**Where to look:**

- a **sum or product modulo $n$**;
- the **parity** of some count (number of odd entries, number of black squares covered, number of inversions of a permutation);
- a **colouring**: assign weights to positions and look at the total weight;
- a quantity like $\sum x_i$, $\sum x_i^2$, $\max x_i - \min x_i$;
- the multiset of values, or some symmetric function of them.

**Example.** On a board are the numbers $1,\dots,n$. A move erases $a, b$ and writes $a+b-1$. What is left at the end? Each move reduces the count by 1 and reduces the total by 1, so $\left(\sum x_i\right) - (\text{count})$ is invariant. Starting value: $\frac{n(n+1)}{2}-n$. At the end, count $=1$, so the last number is $\frac{n(n+1)}{2}-n+1$.

## Monovariants

A **monovariant** changes in only one direction.

> **What it proves.** If a positive-integer quantity strictly decreases at every move, the process **must terminate**. If a quantity strictly increases, you can never return to a previous state.

Typical monovariants: the number of inversions, the sum of distances, the number of "bad pairs", the potential $\sum x_i^2$.

**Example.** $n$ people sit in a circle; whenever two adjacent people are in the "wrong" order they may swap. Does this terminate? Each swap decreases the number of inversions by exactly 1, and the number of inversions is a non-negative integer. So yes, in at most $\binom n2$ moves.

## Colourings

A colouring is a way of **manufacturing** an invariant.

> **The template.** Assign a weight $w(c)$ to each cell $c$. If every allowed piece always covers a fixed total weight $W$, then any tiling of a region $R$ needs $\frac{w(R)}{W}$ pieces — and if that is not a non-negative integer, no tiling exists.

**Standard colourings:**

- **Chessboard** (2 colours): each domino covers one of each.
- **Stripes** ($k$ colours by column mod $k$): a $1\times k$ piece covers one of each.
- **Diagonal colouring** ($(i+j)\bmod k$): good for L-trominoes and diagonal moves.
- **Weights $w(i,j) = x^iy^j$**: turns a tiling question into a polynomial divisibility question.

> **How to pick.** Look at your piece. Find a colouring for which the piece's total weight is **the same wherever you put it**. That is the whole design criterion.

## The extremal principle, again

Take the largest/smallest/leftmost object and use its extremality. Combined with invariants this is often the whole solution: *"consider a configuration with the minimum number of bad pairs; if a bad pair existed, the following move would reduce the count."*

## Common traps

- Concluding reachability from an invariant. It only proves **un**reachability.
- A monovariant that decreases but is not integer-valued and not bounded below — that does not prove termination.
- A colouring where the piece's weight is not constant. Check every orientation and position.
- Forgetting to also **construct** the target when the problem asks "for which $n$ is it possible?" — you need both halves.

## Problems

### P1 | Warmup | Standard
The numbers $1,2,\dots,100$ are written. A move erases two numbers $a,b$ and writes $a+b$. What is the final number?
[hint]
The sum is invariant.
[/hint]
[sol]
Each move removes $a$ and $b$ and inserts $a+b$, so the **total sum is unchanged**; it is an invariant.

The initial sum is
$$1+2+\cdots+100 = \frac{100\cdot101}{2} = 5050.$$

Each move reduces the count of numbers by one, so after 99 moves exactly one number remains, and it equals the (unchanged) sum:
$$\mathbf{5050}. \;∎$$
[/sol]

### P2 | Warmup | Standard
A $8\times8$ board has two opposite corners removed. Can it be tiled by dominoes?
[hint]
Chessboard colouring.
[/hint]
[sol]
Colour the board as a chessboard: 32 black and 32 white squares, with adjacent squares of different colours.

Every domino covers exactly one black and one white square, so a tiling by $k$ dominoes covers $k$ black and $k$ white squares — the **difference of the two counts is an invariant equal to 0**.

Two opposite corners of a chessboard have the same colour. Removing them leaves 30 of one colour and 32 of the other, a difference of 2.

Since $30 \ne 32$, no tiling exists. ∎
[/sol]

### P3 | Easy | Standard
Numbers $1, 2, \dots, n$ are written. A move replaces two numbers $a,b$ by $|a-b|$. Show the parity of the final number is determined, and find it for $n = 2026$.
[hint]
The sum's parity is invariant, since $a+b$ and $|a-b|$ have the same parity.
[/hint]
[sol]
Since $a+b$ and $|a-b|$ differ by $2\min(a,b)$, they have the **same parity**. So each move preserves the parity of the total sum: that parity is an invariant.

Initial sum for $n$:
$$S = \frac{n(n+1)}{2}.$$

For $n = 2026$:
$$S = \frac{2026\cdot2027}{2} = 1013\cdot 2027.$$
Both factors are odd, so $S$ is **odd**.

The final single number has the same parity as $S$, hence is **odd**. In particular it can never be 0. ∎
[/sol]

### P4 | Easy | Standard
Can a $5\times5$ board be tiled by $1\times2$ dominoes? By L-shaped trominoes?
[hint]
Count squares for the first. For the second, think about divisibility by 3 and then find an obstruction or a construction.
[/hint]
[sol]
**Dominoes.** A $5\times5$ board has 25 squares, an odd number. Each domino covers 2 squares, so any tiling covers an even number. Hence **no tiling exists**. ∎

**L-trominoes.** Each tromino covers 3 squares, and $25$ is not divisible by 3 ($25 = 3\cdot8+1$). So **no tiling exists** either. ∎

*(If one square is removed, $24 = 3\cdot 8$ squares remain and a tiling may exist — in fact for the $2^n\times2^n$ board with any one square removed, an L-tromino tiling always exists, by a neat induction.)*
[/sol]

### P5 | Medium | Standard
A $2^n\times2^n$ board has one square removed. Prove it can be tiled by L-shaped trominoes.
[hint]
Induct. Split the board into four quadrants and place one tromino at the centre.
[/hint]
[sol]
**Induction on $n$.**

**Base $n=1$.** A $2\times2$ board with one square removed is exactly an L-tromino. ✓

**Step.** Suppose every $2^{n}\times2^{n}$ board with one square removed can be tiled. Take a $2^{n+1}\times2^{n+1}$ board with one square removed, and cut it into four quadrants, each $2^n\times2^n$.

The removed square lies in exactly one quadrant, say $Q_1$. Place a single L-tromino at the centre of the board covering one corner square from each of the **other three** quadrants $Q_2,Q_3,Q_4$ — namely the three cells adjacent to the board's centre point that lie in those quadrants.

Now each of the four quadrants is a $2^n\times2^n$ board with exactly one square missing:
- $Q_1$ misses the originally removed square;
- $Q_2,Q_3,Q_4$ each miss the cell covered by the central tromino.

By the induction hypothesis each can be tiled by L-trominoes. Together with the central tromino this tiles the whole board. ∎

*(Note the count works out: $\frac{4^{n+1}-1}{3}$ trominoes, an integer since $4^{n+1}\equiv1\pmod 3$.)*
[/sol]

### P6 | Medium | Standard
Fifteen numbers $+1$ and $-1$ are arranged in a circle. A move picks any three consecutive numbers and flips all their signs. Can you always reach all $+1$s from any starting configuration?
[hint]
Look for an invariant: which products are unchanged by every move?
[/hint]
[sol]
Label the positions $1,\dots,15$ around the circle and let $x_i \in\{+1,-1\}$.

**An invariant.** The product of **all fifteen** numbers, $P = x_1x_2\cdots x_{15}$, changes by a factor $(-1)^3 = -1$ at each move, so $P$ is *not* invariant. Look instead at a sub-product.

Take the positions $\{1,4,7,10,13\}$ — every third position. Any three consecutive positions $\{i,i+1,i+2\}$ contain **exactly one** of these (since the five positions are spaced 3 apart in a circle of 15). So a move flips exactly one of $x_1,x_4,x_7,x_{10},x_{13}$, changing their product by $-1$.

Hmm — so that product is also not invariant. But now combine: define
$$Q_1 = x_1x_4x_7x_{10}x_{13},\quad Q_2 = x_2x_5x_8x_{11}x_{14},\quad Q_3 = x_3x_6x_9x_{12}x_{15}.$$
Each move flips exactly one factor in each of $Q_1, Q_2, Q_3$, so each of the three products changes sign. Therefore the **ratios** $Q_1Q_2$, $Q_2Q_3$ (products of two of them) are **invariant**, since each is multiplied by $(-1)(-1)=1$.

**Conclusion.** In the all-$+1$ configuration, $Q_1=Q_2=Q_3=+1$, so $Q_1Q_2 = +1$ and $Q_2Q_3=+1$.

So a configuration with, say, $Q_1Q_2 = -1$ can **never** reach all $+1$s. For example, take $x_1 = -1$ and all others $+1$: then $Q_1 = -1$, $Q_2=Q_3=+1$, so $Q_1Q_2 = -1 \ne +1$.

**Answer: no** — the all-$+1$ configuration is not always reachable. ∎
[/sol]

### P7 | Medium | Classic
Each of $2n$ people shakes hands with some others. Prove that the number of people who shook hands an odd number of times is even. Then show that at any party, two people have shaken the same number of hands.
[hint]
The first is the handshake lemma. The second is pigeonhole with a twist about the values 0 and $n-1$.
[/hint]
[sol]
**First part.** By the handshake lemma, $\sum_v \deg(v) = 2|E|$ is even. Splitting the sum into even-degree and odd-degree vertices, the even part is even, so the odd part is even too. A sum of odd numbers is even exactly when there is an even number of terms. Hence the number of odd-degree vertices is even. ∎

**Second part.** Let there be $n \ge 2$ people. Each person's handshake count lies in $\{0,1,\dots,n-1\}$ — that is $n$ possible values for $n$ people, so plain pigeonhole is not enough.

**The twist:** the values $0$ and $n-1$ cannot both occur. If someone shook $n-1$ hands, they shook hands with everyone, so nobody has count 0; conversely if someone has count 0, nobody can have count $n-1$.

So at most $n-1$ of the $n$ possible values are actually attained. With $n$ people and at most $n-1$ available values, two people share a value. ∎
[/sol]

### P8 | Medium | Classic
For which $n$ can an $n\times n$ board be tiled by $1\times4$ pieces (in either orientation)?
[hint]
Colour cell $(i,j)$ with $(i+j) \bmod 4$. Check what a single piece covers — in **both** orientations. Then count how big each colour class is.
[/hint]
[sol]
**Answer: exactly when $4 \mid n$.**

**Construction for $4\mid n$.** Cut each row into $\frac n4$ horizontal $1\times4$ strips. ✓

**Obstruction.** Colour cell $(i,j)$, $1\le i,j\le n$, with
$$c(i,j) = (i+j) \bmod 4.$$

*Every piece covers each colour exactly once.* A horizontal piece occupies $(i,j),(i,j+1),(i,j+2),(i,j+3)$, whose colours are $(i+j), (i+j+1),(i+j+2),(i+j+3) \bmod 4$ — all four colours. A vertical piece occupies $(i,j),(i+1,j),(i+2,j),(i+3,j)$, with the same four colours. ✓

So **a tiling forces all four colour classes to have equal size.**

*Counting the classes.* Let $m_r$ be the number of $i\in\{1,\dots,n\}$ with $i \equiv r \pmod 4$. Then the size of colour class $c$ is $\sum_{r} m_r\,m_{c-r}$.

- **$n$ odd:** $n^2$ is odd, so it is not divisible by 4 and no tiling can exist (each piece covers 4 cells).
- **$n \equiv 2\pmod4$:** write $n = 4k+2$. Then
$$m_1 = m_2 = k+1, \qquad m_3 = m_0 = k.$$
Compute two of the class sizes:
$$|c=3| = m_0m_3+m_1m_2+m_2m_1+m_3m_0 = 2k^2+2(k+1)^2,$$
$$|c=1| = m_0m_1+m_1m_0+m_2m_3+m_3m_2 = 4k(k+1).$$
Their difference is
$$2k^2+2(k+1)^2-4k(k+1) = 2\big[k-(k+1)\big]^2 = 2 \ \ne\ 0.$$
So the classes are **not** all equal, and no tiling exists.
- **$n \equiv 0 \pmod 4$:** each residue occurs equally often, all four classes have size $\frac{n^2}{4}$, and the explicit construction above works.

Hence a tiling exists **if and only if $4\mid n$**. ∎

**The design principle.** The colouring was chosen so that the piece covers a *constant* multiset of colours no matter where or how it is placed. For an $1\times k$ piece, $(i+j)\bmod k$ always does this — a colouring worth remembering.
[/sol]

### P9 | Hard | Classic
On a blackboard are the numbers $1,2,\dots,n$. A move erases two numbers $a,b$ and writes $\dfrac{a+b}{4}$. Prove that after $n-1$ moves the remaining number is at least $\dfrac1n$.
[hint]
Find a monovariant: consider $\sum \frac{1}{x_i}$ or $\sum x_i$ — one of them moves in a controlled direction. Try the sum of reciprocals.
[/hint]
[sol]
Consider the quantity
$$S = \sum_i \frac{1}{x_i}$$
over the numbers currently on the board (all positive throughout, by induction).

**How a move changes $S$.** Erasing $a,b$ and writing $\frac{a+b}{4}$ changes $S$ by
$$\Delta S = \frac{4}{a+b} - \frac1a - \frac1b = \frac{4}{a+b}-\frac{a+b}{ab}.$$

By AM–GM, $(a+b)^2 \ge 4ab$, so $\frac{a+b}{ab}\ge\frac{4}{a+b}$, giving
$$\Delta S \le 0.$$

So $S$ is a **monovariant: it never increases.**

**Initial and final values.** Initially
$$S_{\text{init}} = \sum_{k=1}^{n}\frac1k.$$
At the end one number $x$ remains, so $S_{\text{final}} = \frac1x$.

Since $S$ never increases,
$$\frac1x \ \le\ \sum_{k=1}^n\frac1k.$$

Hmm — this bounds $x$ from **below** by $\left(\sum 1/k\right)^{-1}$, which is roughly $\frac{1}{\ln n}$, and that is *larger* than $\frac1n$ for $n \ge 2$. So in particular
$$x \ \ge\ \frac{1}{\sum_{k=1}^{n}\frac1k} \ \ge\ \frac{1}{n},$$
using $\sum_{k=1}^n \frac1k \le n$ (each term is at most 1).

Hence the final number is at least $\frac1n$. ∎

**Remark.** The monovariant gives much more than asked: the final number is at least $\frac{1}{H_n}\approx\frac{1}{\ln n}$, far above $\frac1n$. When a monovariant hands you a stronger bound than the problem wants, say so — it costs nothing and shows the argument is understood.
[/sol]

### P10 | Hard | Classic
The numbers $1, 2, \dots, n$ are written on a board. A move erases two numbers $a, b$ and writes $a+b$; the player also records the product $ab$ in a notebook. After $n-1$ moves one number remains. Prove that the **sum of all recorded products** is the same no matter how the moves are chosen, and compute it.
[hint]
Track $\Phi = \sum x_i^2$ over the numbers currently on the board. How much does one move change it?
[/hint]
[sol]
**The monitored quantity.** Let
$$\Phi = \sum_{i} x_i^2$$
be the sum of squares of the numbers currently on the board.

**Effect of one move.** Replacing $a,b$ by $a+b$ changes $\Phi$ by
$$\Delta\Phi = (a+b)^2 - a^2 - b^2 = 2ab.$$

So **each move increases $\Phi$ by exactly twice the recorded product.** Summing over all $n-1$ moves,
$$\Phi_{\text{final}} - \Phi_{\text{initial}} = 2\sum_{\text{moves}} ab.$$

**The two endpoints are order-independent.**

- $\Phi_{\text{initial}} = 1^2+2^2+\cdots+n^2 = \dfrac{n(n+1)(2n+1)}{6}$.
- The **sum** $S = \sum x_i$ is invariant (a move replaces $a,b$ by $a+b$), so $S = 1+2+\cdots+n = \frac{n(n+1)}{2}$ throughout. At the end a single number remains, and it must equal $S$. Hence
$$\Phi_{\text{final}} = S^2 = \left(\frac{n(n+1)}{2}\right)^2.$$

Neither endpoint depends on the choices made, so neither does the total.

**Conclusion.**
$$\sum_{\text{moves}}ab = \frac{\Phi_{\text{final}}-\Phi_{\text{initial}}}{2} = \frac12\left[\left(\frac{n(n+1)}{2}\right)^{2} - \frac{n(n+1)(2n+1)}{6}\right]. \;∎$$

**Check $n=3$.** The formula gives $\frac12\left[36 - 14\right] = 11$.
- Combine $1,2 \to 3$ (product 2), then $3,3\to6$ (product 9): total $11$ ✓.
- Combine $1,3\to4$ (product 3), then $4,2\to6$ (product 8): total $11$ ✓.
- Combine $2,3\to5$ (product 6), then $5,1\to6$ (product 5): total $11$ ✓.

**Why this is the model invariant problem.** Two quantities do the work: the **sum**, which is exactly invariant, and the **sum of squares**, whose increments are precisely the thing being accumulated. Whenever a process accumulates a total and you must show it is path-independent, look for a function of the state whose increment equals the accumulated term.
[/sol]
