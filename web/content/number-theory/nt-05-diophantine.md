---
id: nt-05-diophantine
title: Diophantine equations
level: Core
hours: 5
blurb: Linear equations, Simon's factoring trick, bounding, Pythagorean triples, and infinite descent — the four ways an equation in integers gets solved.
tags: Diophantine, SFFT, Pythagorean, descent, Pell
link: Yufei Zhao — Integer polynomials (descent and factoring) :: https://yufeizhao.com/olympiad/intpoly.pdf
link: MOTP — Number theory :: https://jpsaha.github.io/MOTP/nt/
video: Search: Diophantine equations olympiad Simon's favorite factoring trick :: https://www.youtube.com/results?search_query=simons+favorite+factoring+trick+diophantine+olympiad
---

## The four strategies

Every Diophantine equation at RMO level yields to one of these, usually in combination:

1. **Factor.** Rearrange into (something)(something) = constant, then enumerate divisors.
2. **Bound.** Show one variable must be small, then check finitely many cases.
3. **Mod out.** Find a modulus in which the equation is impossible, or which pins down residues.
4. **Descend.** Assume a minimal solution, construct a smaller one.

When you are stuck, run through them in this order. Factoring is the most common and the most often missed.

## Linear Diophantine equations

> $ax + by = c$ has integer solutions **iff** $\gcd(a,b) \mid c$.

If $(x_0,y_0)$ is one solution and $d = \gcd(a,b)$, the general solution is
$$x = x_0 + \frac{b}{d}t, \qquad y = y_0 - \frac{a}{d}t, \qquad t \in \mathbb{Z}.$$

Find $(x_0, y_0)$ by the Euclidean algorithm run backwards. To then impose positivity, turn the parametrisation into an inequality in $t$.

## Simon's Favourite Factoring Trick

The move: an equation of the form $xy + ax + by = c$ becomes
$$(x+b)(y+a) = c + ab.$$
Then enumerate factorisations of $c+ab$.

**Example.** Solve $\dfrac1x + \dfrac1y = \dfrac1{12}$ in positive integers.

Clearing denominators: $12y + 12x = xy$, i.e. $xy - 12x - 12y = 0$, so
$$(x-12)(y-12) = 144.$$
Since $x,y > 0$ and $\frac1x < \frac1{12}$ forces $x > 12$, both factors are positive divisors of $144$. With $144 = 2^4\cdot3^2$ having $15$ divisors, we get 15 solutions:
$$(x-12, y-12) \in \{(1,144), (2,72), (3,48), (4,36), (6,24), (8,18), (9,16), (12,12), \dots\},$$
i.e. $(x,y) = (13,156), (14,84), (15,60), (16,48), (18,36), (20,30), (21,28), (24,24)$ and the seven mirror images. ∎

More generally, look for the factorisation whenever an equation is **linear in each variable separately**.

## Bounding

If you can show $x \le 5$, the problem is over: check five cases. Sources of bounds:

- **Symmetry + ordering.** WLOG $x \le y \le z$ in a symmetric equation; then $\frac1x+\frac1y+\frac1z = 1$ gives $\frac3x \ge 1$, so $x \le 3$.
- **Size comparison.** $n! = m^2$ has no large solutions because $n!$ sits strictly between consecutive squares for large $n$ — or because Bertrand gives a prime appearing to the first power.
- **Squeezing between consecutive powers.** If $a^2 < N < (a+1)^2$ then $N$ is not a square. Very common: show $(x+1)^2 < x^2 + 3x + 2 < (x+2)^2$ for large $x$.

> **The squeeze pattern.** To show $f(x)$ is rarely a perfect square, find $g$ with $g(x)^2 < f(x) < (g(x)+1)^2$ for all large $x$. Then only small $x$ can work.

## Pythagorean triples

> Every solution of $x^2+y^2=z^2$ in positive integers with $\gcd(x,y,z)=1$ and $y$ even is
> $$x = m^2-n^2, \qquad y = 2mn, \qquad z = m^2+n^2$$
> for coprime $m > n > 0$ of opposite parity. General solutions are these scaled by a constant.

*Sketch.* Mod 4 shows $x,z$ odd and $y$ even. Write $y^2 = (z-x)(z+x)$ and divide by 4: $\left(\frac y2\right)^2 = \frac{z-x}{2}\cdot\frac{z+x}{2}$, and the two factors are coprime. A product of coprime numbers being a square forces each to be a square — say $n^2$ and $m^2$. ∎

**The reusable lemma inside that proof:** *if $ab = c^k$ with $\gcd(a,b)=1$ and $a,b>0$, then $a$ and $b$ are each $k$-th powers.* (Immediate from unique factorisation: every prime lands entirely in $a$ or entirely in $b$.) This is used constantly.

## Infinite descent

Assume a solution in positive integers exists, take one minimising some positive quantity, construct a strictly smaller one, contradiction.

**Example.** $x^4 + y^4 = z^2$ has no positive integer solutions. (Hence neither does $x^4+y^4=z^4$ — Fermat for $n=4$.) The proof takes a minimal $z$, uses the Pythagorean parametrisation twice, and produces a smaller solution.

## Pell's equation (for awareness)

$x^2 - Dy^2 = 1$ with $D$ a positive non-square has infinitely many solutions; if $(x_1,y_1)$ is the smallest, all others come from
$$x_k + y_k\sqrt D = (x_1+y_1\sqrt D)^k.$$
RMO rarely needs the full theory, but the *idea* — that $(x+y\sqrt D)(x-y\sqrt D) = 1$ makes solutions multiply — occasionally cracks a problem, and it explains why some equations have infinitely many solutions.

## Common traps

- Enumerating factor pairs but forgetting **negative** divisors when the variables may be negative.
- Forgetting to verify candidates. Factoring gives necessary conditions.
- "$ab$ is a square and $a,b$ coprime, so both are squares" — true, but **only with coprimality** and for positive $a,b$.
- Bounding one variable and forgetting the problem was symmetric, so the bound applies to the smallest.

## Problems

### P1 | Warmup | Standard
Find all integer solutions of $7x + 11y = 1$.
[hint]
Find one solution by inspection or the Euclidean algorithm, then add the homogeneous family.
[/hint]
[sol]
$\gcd(7,11)=1 \mid 1$, so solutions exist.

By inspection $7(-3) + 11(2) = -21 + 22 = 1$, so $(x_0,y_0) = (-3,2)$.

The general solution is
$$x = -3 + 11t, \qquad y = 2 - 7t, \qquad t\in\mathbb{Z}.$$

Check: $7(-3+11t) + 11(2-7t) = -21 + 77t + 22 - 77t = 1$ ✓. ∎
[/sol]

### P2 | Warmup | Standard
Find all positive integers $x, y$ with $\dfrac1x + \dfrac1y = \dfrac13$.
[hint]
Clear denominators and apply SFFT.
[/hint]
[sol]
Clearing: $3y + 3x = xy$, so $xy - 3x - 3y = 0$ and
$$(x-3)(y-3) = 9.$$
Since $\frac1x < \frac13$ we need $x > 3$, so $x - 3 > 0$; similarly $y-3>0$. The positive factorisations of 9 are $1\cdot9$, $3\cdot3$, $9\cdot1$, giving
$$(x,y) \in \{(4, 12),\ (6,6),\ (12,4)\}.$$
Check $(4,12)$: $\frac14+\frac1{12} = \frac{3+1}{12}=\frac13$ ✓. ∎
[/sol]

### P3 | Easy | Standard
Prove that $x^2 - 3y^2 = 8$ has no integer solutions.
[hint]
Work mod 3, or mod 8.
[/hint]
[sol]
Reduce mod 3: $x^2 \equiv 8 \equiv 2 \pmod 3$.

But squares mod 3 are only $0$ or $1$ ($0^2\equiv 0$, $(\pm1)^2\equiv1$). So $x^2\equiv 2 \pmod 3$ is impossible.

Hence there is no integer solution. ∎
[/sol]

### P4 | Easy | Standard
Find all positive integers $n$ such that $n^2 + 96$ is a perfect square.
[hint]
Write $n^2+96 = m^2$ and factor the difference of squares.
[/hint]
[sol]
Let $n^2+96 = m^2$ with $m > n > 0$. Then
$$(m-n)(m+n) = 96.$$
Set $a = m-n$, $b = m+n$, so $ab = 96$, $b > a > 0$, and $a, b$ have the **same parity** (their sum $2m$ is even). Since $96$ is even, both must be even.

Write $a = 2s$, $b=2t$ with $st = 24$ and $t > s > 0$:
$$(s,t) \in \{(1,24), (2,12), (3,8), (4,6)\}.$$
Then $m = s+t$, $n = t - s$:

| $(s,t)$ | $m$ | $n$ | check |
|---|---|---|---|
| $(1,24)$ | 25 | 23 | $23^2+96 = 529+96=625=25^2$ ✓ |
| $(2,12)$ | 14 | 10 | $100+96=196=14^2$ ✓ |
| $(3,8)$ | 11 | 5 | $25+96=121=11^2$ ✓ |
| $(4,6)$ | 10 | 2 | $4+96=100=10^2$ ✓ |

So $n \in \{2, 5, 10, 23\}$. ∎
[/sol]

### P5 | Medium | Standard
Find all positive integers $x, y, z$ with $\dfrac1x+\dfrac1y+\dfrac1z = 1$.
[hint]
WLOG $x \le y \le z$. Then $\frac3x \ge 1$ bounds $x$. Repeat for $y$.
[/hint]
[sol]
By symmetry assume $x \le y \le z$ (the expression is symmetric, so this is legitimate; we restore all orderings at the end).

Then $1 = \frac1x+\frac1y+\frac1z \le \frac3x$, so $x \le 3$. Also $\frac1x < 1$ forces $x \ge 2$.

**$x = 2$.** Then $\frac1y+\frac1z = \frac12$ with $y \le z$, so $\frac2y \ge \frac12$, giving $y \le 4$; and $\frac1y<\frac12$ gives $y \ge 3$.
- $y=3$: $\frac1z = \frac12-\frac13=\frac16$, so $z = 6$.
- $y=4$: $\frac1z = \frac12-\frac14 = \frac14$, so $z=4$.

**$x=3$.** Then $\frac1y+\frac1z = \frac23$ with $y\ge 3$, so $\frac23 \le \frac2y$ gives $y \le 3$, hence $y = 3$ and $\frac1z = \frac23-\frac13=\frac13$, so $z=3$.

So with $x\le y\le z$ the solutions are $(2,3,6)$, $(2,4,4)$, $(3,3,3)$; in general all permutations of these. ∎
[/sol]

### P6 | Medium | Standard
Find all pairs of positive integers $(x,y)$ such that $x^2 = y^2 + y + 1$.
[hint]
Squeeze: compare $y^2+y+1$ with $y^2$ and $(y+1)^2$.
[/hint]
[sol]
For $y \ge 1$,
$$y^2 < y^2 + y + 1 < y^2 + 2y + 1 = (y+1)^2,$$
where the left inequality holds since $y+1 > 0$ and the right since $y + 1 < 2y+1$ for $y>0$.

So $x^2$ lies strictly between two consecutive perfect squares $y^2$ and $(y+1)^2$, which is impossible for an integer $x$ (as $x$ would satisfy $y < x < y+1$).

Hence **there are no positive integer solutions**.

(For completeness, $y = 0$ gives $x^2 = 1$, so $(x,y) = (1,0)$ — but $y$ was required positive.) ∎
[/sol]

### P7 | Medium | CRMO 2013 P6
Suppose $m$ and $n$ are integers such that both $x^2+mx-n=0$ and $x^2-mx+n=0$ have integer roots. Prove that $n$ is divisible by 6.
[hint]
Both discriminants $m^2+4n$ and $m^2-4n$ must be perfect squares. Add them, and consider parity and residues mod 3.
[/hint]
[sol]
For integer roots the discriminants must be perfect squares:
$$m^2 + 4n = a^2, \qquad m^2 - 4n = b^2$$
for some non-negative integers $a, b$.

**Divisibility by 2.** Adding, $a^2+b^2 = 2m^2$; subtracting, $a^2 - b^2 = 8n$.

From $a^2+b^2 = 2m^2$, $a$ and $b$ have the same parity. If both were odd, $a^2-b^2 \equiv 1 - 1 = 0 \pmod 8$ — consistent. If both even, also $8 \mid a^2-b^2$? Write $a=2a'$, $b=2b'$: $a^2-b^2 = 4(a'^2-b'^2)$, and $a'^2 - b'^2$ is even iff $a',b'$ have the same parity, which follows from $a'^2+b'^2 = m^2/2$ being an integer forcing $m$ even and then $a'^2+b'^2$ even. Either way $8 \mid a^2 - b^2 = 8n$ is automatic; we need a sharper route for $2 \mid n$.

Instead argue directly. Let the roots of $x^2+mx-n$ be $p,q$ and of $x^2-mx+n$ be $r,s$, all integers. By Vieta,
$$p+q = -m, \quad pq = -n, \qquad r+s = m, \quad rs = n.$$
So $pq = -rs$ and $p + q = -(r+s)$.

**Mod 2.** $pq + rs = 0$ is even, and $p+q+r+s = 0$ is even. If $n = rs$ were odd, then $r,s$ both odd, so $r+s$ even, so $m$ even, so $p+q$ even; and $pq = -n$ odd forces $p, q$ both odd, consistent. So parity alone is not enough — use the discriminants: $m^2+4n$ and $m^2-4n$ are squares. If $m$ is even, $m^2 \equiv 0 \pmod 4$, so $4n \equiv a^2 \pmod 4$ forces $a$ even, fine. If $m$ is odd, $m^2 \equiv 1 \pmod 8$, and $m^2 \pm 4n$ are odd squares, so both $\equiv 1 \pmod 8$, giving $4n \equiv 0 \pmod 8$, i.e. $n$ even. If $m$ even, write $m = 2m'$: then $4m'^2 \pm 4n$ are squares, so $m'^2 \pm n$ are squares; their sum is $2m'^2$, so the two squares have equal parity, and their difference $2n$ is divisible by... taking $u^2 = m'^2+n$, $v^2 = m'^2-n$ with $u,v$ same parity, $u^2-v^2 = 2n$ and $u^2-v^2$ is divisible by 8 when $u,v$ are both even, by 8 when both odd. Hence $8 \mid 2n$, so $4 \mid n$; in particular $2 \mid n$.

**Mod 3.** Squares mod 3 are $0,1$. From $a^2 = m^2+4n \equiv m^2+n$ and $b^2 = m^2-4n \equiv m^2 - n \pmod 3$. Adding, $a^2+b^2 \equiv 2m^2 \pmod 3$.

Suppose $3 \nmid n$. Then $n \equiv \pm 1 \pmod 3$.
- If $3 \mid m$: $a^2 \equiv n$ and $b^2 \equiv -n \pmod 3$. One of $n, -n$ is $\equiv 2 \pmod 3$, which is not a square mod 3 — contradiction.
- If $3 \nmid m$: $m^2\equiv 1$, so $a^2 \equiv 1+n$ and $b^2\equiv 1-n \pmod 3$. If $n\equiv1$: $a^2\equiv 2$, impossible. If $n \equiv 2$: $b^2 \equiv 1-2 = -1 \equiv 2$, impossible.

So $3 \mid n$.

Since $2 \mid n$ and $3 \mid n$ with $\gcd(2,3)=1$, we conclude $6 \mid n$. ∎
[/sol]

### P8 | Hard | Standard
Find all integer solutions of $x^3 + y^3 = z^3$ with $xyz = 0$ excluded... instead, prove the accessible statement: $x^2+y^2 = 3z^2$ has only the trivial solution $x=y=z=0$.
[hint]
Mod 3 forces $3 \mid x$ and $3 \mid y$; then descend.
[/hint]
[sol]
Suppose a solution with $(x,y,z) \ne (0,0,0)$ exists. Among all such, choose one minimising $|z|$ (possible since $|z|$ ranges over non-negative integers). Note $z \ne 0$: if $z=0$ then $x^2+y^2=0$ forces $x=y=0$.

**Mod 3.** Squares are $0$ or $1$ mod 3. From $x^2+y^2\equiv 0 \pmod 3$, the only possibility is $x^2\equiv y^2\equiv 0$, so $3\mid x$ and $3 \mid y$.

Write $x = 3a$, $y = 3b$. Then $9a^2+9b^2 = 3z^2$, so $3(a^2+b^2) = z^2$, giving $3 \mid z^2$ and hence $3 \mid z$. Write $z = 3c$:
$$3(a^2+b^2) = 9c^2 \implies a^2+b^2 = 3c^2.$$

So $(a,b,c)$ is a solution with $|c| = |z|/3 < |z|$, and it is non-trivial (if $a=b=c=0$ then $x=y=z=0$). This contradicts minimality.

Hence the only integer solution is $x=y=z=0$. ∎
[/sol]

### P9 | Hard | Classic
Prove that $x^4 + y^4 = z^2$ has no solutions in positive integers.
[hint]
Take a solution minimising $z$. Show $(x^2, y^2, z)$ is a primitive Pythagorean triple, parametrise, and produce a smaller solution.
[/hint]
[sol]
Suppose solutions in positive integers exist; take one with $z$ minimal.

**Step 1: primitivity.** If a prime $p$ divided both $x$ and $y$, then $p^4 \mid z^2$, so $p^2 \mid z$, and $(x/p, y/p, z/p^2)$ is a smaller solution. So $\gcd(x,y)=1$, and then $\gcd(x^2,y^2)=1$.

**Step 2: parametrise.** $(x^2)^2 + (y^2)^2 = z^2$ is a primitive Pythagorean triple. WLOG $y^2$ is even. Then there are coprime $m>n>0$ of opposite parity with
$$x^2 = m^2-n^2, \qquad y^2 = 2mn, \qquad z = m^2+n^2.$$

**Step 3: second parametrisation.** From $x^2+n^2 = m^2$ with $\gcd(m,n)=1$, this is again a primitive triple. Since $x$ is odd (as $x^2 = m^2-n^2$ with $m,n$ opposite parity, and $x^2$ odd), $n$ is even, and there are coprime $p>q>0$ with
$$x = p^2-q^2, \qquad n = 2pq, \qquad m = p^2+q^2.$$

**Step 4: extract squares.** Now $y^2 = 2mn = 2m\cdot 2pq = 4mpq$, so $\left(\frac y2\right)^2 = mpq$. Since $\gcd(p,q)=1$ and $m = p^2+q^2$ is coprime to both $p$ and $q$, the three factors $m, p, q$ are pairwise coprime. A product of pairwise coprime positive integers being a perfect square forces each to be a square:
$$m = w^2, \qquad p = u^2, \qquad q = v^2.$$

**Step 5: descend.** Then
$$u^4 + v^4 = p^2+q^2 = m = w^2,$$
so $(u,v,w)$ is another positive solution. And
$$w \le w^2 = m \le m^2 < m^2+n^2 = z,$$
so $w < z$, contradicting minimality.

Hence no positive integer solution exists. ∎

*(Corollary: $x^4+y^4=z^4$ has no positive solutions, since $z^4 = (z^2)^2$.)*
[/sol]

### P10 | Hard | RMO 2025 P4
Prove that there do not exist positive rational numbers $x$ and $y$ such that
$$x + y + \frac1x + \frac1y = 2025.$$
[hint]
Write $x = a/b$ and $y = c/d$ in lowest terms. First show $\frac{a^2+b^2}{ab}$ is *already* in lowest terms. Clearing denominators then forces a surprising relation between $ab$ and $cd$ — and once you have it, one well-chosen modulus finishes the problem. Note $2025 = 3^4 \cdot 5^2$.
[/hint]
[sol]
Suppose such $x, y$ exist. Write them in lowest terms:
$$x = \frac ab, \qquad y = \frac cd, \qquad a,b,c,d \in \mathbb{Z}_{>0}, \quad \gcd(a,b) = \gcd(c,d) = 1.$$

**Step 1: each half is already in lowest terms.**
$$x + \frac1x = \frac{a^2+b^2}{ab}, \qquad y + \frac1y = \frac{c^2+d^2}{cd}.$$

*Claim: $\gcd(a^2+b^2,\, ab) = 1$.* Let $p$ be a prime dividing $ab$. Then $p \mid a$ or $p \mid b$; say $p \mid a$. If also $p \mid a^2+b^2$, then $p \mid b^2$, hence $p \mid b$ — contradicting $\gcd(a,b) = 1$. So no prime divides both. ∎

Identically, $\gcd(c^2+d^2, cd) = 1$.

**Step 2: $ab = cd$.** The equation is
$$\frac{a^2+b^2}{ab} + \frac{c^2+d^2}{cd} = 2025.$$
Multiplying through by $abcd$:
$$cd\,(a^2+b^2) \;+\; ab\,(c^2+d^2) \;=\; 2025\,abcd. \tag{1}$$

Now $ab$ divides the right-hand side, and $ab$ divides the second term on the left. Hence
$$ab \;\big|\; cd\,(a^2+b^2).$$
Since $\gcd(ab, a^2+b^2) = 1$ by Step 1, this forces $ab \mid cd$.

By the symmetric argument (using $\gcd(cd, c^2+d^2) = 1$), $cd \mid ab$. As both are positive,
$$ab = cd =: n.$$

**Step 3: a clean equation.** Divide (1) by $n$. Using $cd = ab = n$, the left side becomes $(a^2+b^2) + (c^2+d^2)$, and the right side becomes $2025\,\frac{ab \cdot cd}{n} = 2025\,n$. So
$$a^2 + b^2 + c^2 + d^2 \;=\; 2025\,ab, \qquad\text{where } ab = cd. \tag{2}$$

**Step 4: work modulo 3.** Since $2025 = 3^4 \cdot 5^2$, the right-hand side of (2) is divisible by 3:
$$a^2+b^2+c^2+d^2 \equiv 0 \pmod 3.$$

Squares modulo 3 are $0$ or $1$. Because $\gcd(a,b) = 1$, the primes 3 cannot divide both $a$ and $b$, so $a^2+b^2 \not\equiv 0 \pmod 3$; that is,
$$a^2+b^2 \equiv 1 \text{ or } 2 \pmod 3,$$
and likewise $c^2+d^2 \equiv 1$ or $2 \pmod 3$.

For the total to be $\equiv 0 \pmod 3$, we need one of them $\equiv 1$ and the other $\equiv 2$. Say (after possibly swapping the roles of $x$ and $y$, which the equation allows)
$$a^2+b^2 \equiv 1, \qquad c^2+d^2 \equiv 2 \pmod 3.$$

Now read off what each says:

- $a^2+b^2 \equiv 1 \pmod 3$ means exactly one of $a^2, b^2$ is $\equiv 0$, i.e. **exactly one of $a, b$ is divisible by 3**. Hence $3 \mid ab$.
- $c^2+d^2 \equiv 2 \pmod 3$ means both $c^2, d^2 \equiv 1$, i.e. **neither $c$ nor $d$ is divisible by 3**. Hence $3 \nmid cd$.

But Step 2 gave $ab = cd$, so $3 \mid ab$ if and only if $3 \mid cd$ — and we have just shown one holds while the other fails.

**Contradiction.** Hence no such positive rationals $x, y$ exist. ∎

**What made this work.** Two things, and both are reusable:

1. **"Already in lowest terms".** $\frac{a^2+b^2}{ab}$ being reduced is what converts a rational equation into the rigid integer relation $ab = cd$. Whenever you meet $x + \frac1x$ with $x$ rational, compute its reduced form first.
2. **The modulus came from the constant.** $2025$ is divisible by 3, and squares mod 3 are badly behaved ($\{0,1\}$ only). The coprimality $\gcd(a,b) = 1$ then forbids $a^2+b^2\equiv 0$, which is exactly the rigidity needed.

Note the proof never used the *size* of 2025 — it works verbatim for any target divisible by 3 (with the same coprimality setup). That is a good sign you have found the intended idea rather than a coincidence.
[/sol]
