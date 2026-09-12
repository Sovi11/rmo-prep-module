---
id: ineq-03-convexity
title: Convexity, Jensen and rearrangement
level: Core
hours: 3
blurb: Jensen's inequality, the rearrangement inequality and Chebyshev's sum inequality — the three tools for inequalities that AM–GM cannot reach.
tags: convexity, Jensen, rearrangement, Chebyshev
link: Yufei Zhao — Inequalities :: https://yufeizhao.com/olympiad/wc08/ineq.pdf
video: Search: Jensen inequality convexity olympiad :: https://www.youtube.com/results?search_query=jensen+inequality+rearrangement+chebyshev+olympiad
---

## Convex functions

$f$ is **convex** on an interval $I$ if for all $x,y\in I$ and $t\in[0,1]$,
$$f\big(tx+(1-t)y\big) \;\le\; t f(x)+(1-t)f(y).$$
Geometrically: the chord lies above the graph. **Concave** is the reverse (chord below).

**Test:** if $f''\ge0$ on $I$ then $f$ is convex there. (At RMO you may use this, but you may also just verify the chord condition directly, which avoids calculus.)

**Convex:** $x^2$, $x^k$ for $k\ge1$ on $x>0$, $e^x$, $-\log x$, $\frac1x$ on $x>0$, $|x|$.
**Concave:** $\log x$, $\sqrt x$, $\sin x$ on $[0,\pi]$, $x^k$ for $0<k<1$ on $x>0$.

## Jensen's inequality

> If $f$ is **convex** on $I$ and $x_1,\dots,x_n\in I$ with weights $w_i>0$, $\sum w_i = 1$, then
> $$f\left(\sum w_ix_i\right) \;\le\; \sum w_i f(x_i).$$
> For **concave** $f$ the inequality reverses.

With equal weights $w_i = \frac1n$:
$$f\left(\frac{x_1+\cdots+x_n}{n}\right) \le \frac{f(x_1)+\cdots+f(x_n)}{n}.$$

**AM–GM is Jensen** applied to the concave $\log$:
$$\log\frac{\sum a_i}{n}\ \ge\ \frac{\sum \log a_i}{n} = \log\sqrt[n]{\prod a_i}.$$

> **When to reach for Jensen.** The inequality is a sum $\sum f(a_i)$ compared with $n f(\bar a)$, where the $a_i$ satisfy a constraint on their **sum**. That shape is Jensen's natural home.

## The rearrangement inequality

> Let $a_1\le a_2\le\cdots\le a_n$ and $b_1\le b_2\le\cdots\le b_n$. For any permutation $\sigma$,
> $$\underbrace{\sum a_ib_{n+1-i}}_{\text{oppositely ordered}} \;\le\; \sum a_i b_{\sigma(i)} \;\le\; \underbrace{\sum a_ib_i}_{\text{similarly ordered}}.$$

In words: **same order gives the largest sum, opposite order the smallest.**

This is the tool for cyclic expressions like $\frac ab+\frac bc+\frac ca$, and for anything where two sequences are ordered oppositely by construction (e.g. $x$ and $\frac1x$).

## Chebyshev's sum inequality

> If $a_1\le\cdots\le a_n$ and $b_1\le\cdots\le b_n$ are **similarly ordered**, then
> $$\frac1n\sum a_ib_i \;\ge\; \left(\frac1n\sum a_i\right)\left(\frac1n\sum b_i\right).$$
> If oppositely ordered, the inequality reverses.

It follows from rearrangement by averaging over all $n$ cyclic shifts.

**Typical use:** $\displaystyle\frac{a^2+b^2+c^2}{3}\ge\frac{a+b+c}{3}\cdot\frac{a+b+c}{3}$, giving $3(a^2+b^2+c^2)\ge(a+b+c)^2$.

## Smoothing / SOS preview

If an inequality is symmetric and you suspect equality at $a=b=c$, a **smoothing** argument replaces two unequal variables by their average and shows the expression moves the right way; iterating pushes everything to the equality point. This works when the function is convex/concave in each variable separately. It is powerful but must be written carefully — you need the replacement to preserve the constraint.

## Common traps

- Using Jensen with **concave** $f$ in the convex direction. Always state which way $f$ curves.
- Applying rearrangement without actually sorting. The hypothesis is about ordering.
- Claiming the cyclic version of rearrangement for $n \ge 4$. It holds for $n=3$ (all permutations are covered) but the *cyclic* sum can fail to be extremal for larger $n$.
- Using Jensen when the constraint is on the product rather than the sum. Take logs first.

## Problems

### P1 | Warmup | Standard
Use Jensen with $f(x)=x^2$ to prove $\dfrac{a^2+b^2+c^2}{3}\ge\left(\dfrac{a+b+c}{3}\right)^2$.
[hint]
$x^2$ is convex; apply Jensen with equal weights.
[/hint]
[sol]
$f(x)=x^2$ has $f''(x)=2>0$, so $f$ is convex on $\mathbb{R}$.

By Jensen with weights $\frac13$ each,
$$\left(\frac{a+b+c}{3}\right)^2 = f\!\left(\frac{a+b+c}{3}\right) \ \le\ \frac{f(a)+f(b)+f(c)}{3} = \frac{a^2+b^2+c^2}{3}.$$

Equality iff $a=b=c$. ∎
[/sol]

### P2 | Warmup | Standard
Prove that in any triangle, $\sin A+\sin B+\sin C \le \dfrac{3\sqrt3}{2}$.
[hint]
$\sin$ is concave on $[0,\pi]$, and $A+B+C=\pi$.
[/hint]
[sol]
The angles $A,B,C$ lie in $(0,\pi)$, where $\sin$ is **concave** (since $(\sin x)'' = -\sin x \le 0$ on $[0,\pi]$).

By Jensen for concave functions with equal weights,
$$\frac{\sin A+\sin B+\sin C}{3}\ \le\ \sin\!\left(\frac{A+B+C}{3}\right) = \sin\frac{\pi}{3} = \frac{\sqrt3}{2}.$$

Hence $\sin A+\sin B+\sin C \le \frac{3\sqrt3}{2}$, with equality iff $A=B=C=\frac\pi3$, i.e. the triangle is equilateral. ∎
[/sol]

### P3 | Easy | Standard
Prove that for positive reals $a,b,c$: $\;a^3+b^3+c^3 \ge \dfrac{(a+b+c)^3}{9}$.
[hint]
Jensen (or power mean) with $f(x)=x^3$, which is convex on $x>0$.
[/hint]
[sol]
$f(x)=x^3$ is convex on $(0,\infty)$ since $f''(x)=6x>0$.

By Jensen with equal weights,
$$\left(\frac{a+b+c}{3}\right)^3 \le \frac{a^3+b^3+c^3}{3},$$
so
$$a^3+b^3+c^3 \ \ge\ 3\cdot\frac{(a+b+c)^3}{27} = \frac{(a+b+c)^3}{9}.$$

Equality iff $a=b=c$. ∎
[/sol]

### P4 | Easy | Standard
Let $a \ge b \ge c > 0$. Prove that
$$\frac ab+\frac bc+\frac ca \;\le\; \frac ba+\frac cb+\frac ac.$$
[hint]
Put the difference over the common denominator $abc$. The numerator is a well-known cyclic cubic that factors completely.
[/hint]
[sol]
Put both sides over the common denominator $abc$:
$$\frac ab+\frac bc+\frac ca = \frac{a^2c + ab^2 + bc^2}{abc}, \qquad \frac ba+\frac cb+\frac ac = \frac{a^2b+b^2c+c^2a}{abc}.$$

So the difference (right minus left) is $\dfrac{N}{abc}$ with
$$N = \left(a^2b+b^2c+c^2a\right) - \left(a^2c+ab^2+bc^2\right).$$

**Factor $N$.** Group by the squared variable:
$$N = a^2(b-c) + b^2(c-a) + c^2(a-b),$$
which is the standard cyclic cubic with the factorisation
$$N = -(a-b)(b-c)(c-a) = (a-b)(b-c)(a-c).$$

*(Check at $(a,b,c)=(3,2,1)$: $N = 9(1)+4(-2)+1(1) = 2$, and $(3-2)(2-1)(3-1)=2$ ✓.)*

**Apply the ordering.** Since $a\ge b\ge c>0$, each of $a-b$, $b-c$, $a-c$ is $\ge0$, so $N \ge 0$. As $abc>0$,
$$\frac ba+\frac cb+\frac ac \;-\; \left(\frac ab+\frac bc+\frac ca\right) = \frac{N}{abc}\ \ge\ 0,$$
which is the required inequality. Equality iff two of $a,b,c$ are equal in the right pattern — in fact iff $a=b=c$ (any single equality among consecutive terms makes $N=0$, and one checks the two sides then agree only when all are equal). ∎

**A warning worth internalising.** This inequality is **cyclic, not symmetric**: swapping two variables changes it. So the ordering hypothesis $a \ge b\ge c$ genuinely determines which side is larger — with the reverse ordering the inequality flips. *Always test a cyclic inequality numerically (try $(3,2,1)$) before deciding which direction to prove.* Thirty seconds of arithmetic saves a whole problem.
[/sol]

### P5 | Medium | Standard
Prove that for positive reals $a,b,c$ with $a+b+c=1$:
$$\frac{1}{a^2}+\frac1{b^2}+\frac1{c^2}\ \ge\ 27.$$
[hint]
$f(x)=1/x^2$ is convex on $x>0$. Apply Jensen.
[/hint]
[sol]
$f(x) = x^{-2}$ has $f''(x) = 6x^{-4} > 0$ on $(0,\infty)$, so $f$ is convex there.

By Jensen with equal weights $\frac13$,
$$\frac{f(a)+f(b)+f(c)}{3}\ \ge\ f\!\left(\frac{a+b+c}{3}\right) = f\!\left(\frac13\right) = 9.$$

Therefore
$$\frac1{a^2}+\frac1{b^2}+\frac1{c^2}\ \ge\ 27,$$
with equality iff $a=b=c=\frac13$ ✓. ∎
[/sol]

### P6 | Medium | Standard
Let $a_1 \le a_2 \le \cdots\le a_n$ be reals. Prove that
$$\sum_{i=1}^{n} a_i a_{n+1-i} \ \le\ \sum_{i=1}^{n}a_i^2.$$
[hint]
Direct application of rearrangement with $b_i = a_i$.
[/hint]
[sol]
Take both sequences to be $a_1\le\cdots\le a_n$. The sum $\sum a_i a_{\sigma(i)}$ is, by the rearrangement inequality, maximised when $\sigma$ is the identity (similarly ordered) and minimised when $\sigma$ reverses the order.

Taking $\sigma(i) = n+1-i$ (the reversal),
$$\sum_{i=1}^n a_ia_{n+1-i} \ \le\ \sum_{i=1}^n a_i a_i = \sum_{i=1}^n a_i^2. \;∎$$

*(Directly: $\sum a_i^2 - \sum a_ia_{n+1-i} = \frac12\sum_i (a_i - a_{n+1-i})^2 \ge 0$, which is a nice alternative proof.)*
[/sol]

### P7 | Medium | Standard
Prove Chebyshev's sum inequality: if $a_1\le\cdots\le a_n$ and $b_1\le\cdots\le b_n$, then
$$n\sum_{i=1}^n a_ib_i \ \ge\ \left(\sum a_i\right)\left(\sum b_i\right).$$
[hint]
Average the $n$ cyclic-shift rearrangement inequalities, or expand $\sum_{i,j}(a_i-a_j)(b_i-b_j) \ge 0$.
[/hint]
[sol]
**Proof by expansion.** Since the sequences are similarly ordered, for every pair $(i,j)$ the numbers $a_i - a_j$ and $b_i-b_j$ have the same sign (or one is zero). Hence
$$\left(a_i-a_j\right)\left(b_i-b_j\right)\ \ge\ 0 \qquad\text{for all } i,j.$$

Sum over all ordered pairs $(i,j)$ with $1\le i,j\le n$:
$$0 \ \le\ \sum_{i=1}^n\sum_{j=1}^n\left(a_ib_i - a_ib_j - a_jb_i + a_jb_j\right).$$

Evaluate the four sums:
- $\sum_{i,j}a_ib_i = n\sum_i a_ib_i$,
- $\sum_{i,j}a_ib_j = \left(\sum a_i\right)\left(\sum b_j\right)$,
- $\sum_{i,j}a_jb_i = \left(\sum a_j\right)\left(\sum b_i\right)$,
- $\sum_{i,j}a_jb_j = n\sum_j a_jb_j$.

So the inequality becomes
$$0 \le 2n\sum_i a_ib_i - 2\left(\sum a_i\right)\left(\sum b_i\right),$$
i.e.
$$n\sum a_ib_i \ \ge\ \left(\sum a_i\right)\left(\sum b_i\right). \;∎$$

Equality iff all $a_i$ are equal or all $b_i$ are equal.
[/sol]

### P8 | Medium | Standard
For positive reals $a,b,c$, prove
$$\frac{a^2}{b}+\frac{b^2}{c}+\frac{c^2}{a}\ \ge\ \frac{3\left(a^2+b^2+c^2\right)}{a+b+c}.$$
[hint]
The plain Engel form gives only $\ge a+b+c$, which is too weak. Apply Engel with the *squares* as numerators: $\frac{a^2}{b} = \frac{(a^2)^2}{a^2b}$. What remains reduces to an "SOS" inequality.
[/hint]
[sol]
**Step 1: Engel with squared numerators.** Write
$$\frac{a^2}{b} = \frac{\left(a^2\right)^2}{a^2 b},$$
and similarly for the other terms. The Engel form gives
$$\frac{a^2}{b}+\frac{b^2}{c}+\frac{c^2}{a} \ \ge\ \frac{\left(a^2+b^2+c^2\right)^2}{a^2b+b^2c+c^2a}. \tag{1}$$

**Step 2: reduce to a polynomial inequality.** It now suffices to prove
$$\frac{\left(a^2+b^2+c^2\right)^2}{a^2b+b^2c+c^2a}\ \ge\ \frac{3\left(a^2+b^2+c^2\right)}{a+b+c}.$$
Cancelling the positive factor $a^2+b^2+c^2$ and cross-multiplying by the positive denominators, this is
$$\left(a^2+b^2+c^2\right)(a+b+c) \ \ge\ 3\left(a^2b+b^2c+c^2a\right). \tag{2}$$

**Step 3: prove (2) as a sum of squares.** Expanding the left side,
$$\left(a^2+b^2+c^2\right)(a+b+c) = \left(a^3+b^3+c^3\right) + \left(a^2b+b^2c+c^2a\right)+\left(ab^2+bc^2+ca^2\right).$$
So (2) is equivalent to
$$\left(a^3+b^3+c^3\right)+\left(ab^2+bc^2+ca^2\right) \ \ge\ 2\left(a^2b+b^2c+c^2a\right),$$
that is,
$$\left(a^3+b^3+c^3\right) - 2\left(a^2b+b^2c+c^2a\right)+\left(ab^2+bc^2+ca^2\right) \ \ge\ 0.$$

The left side is exactly
$$a(a-b)^2 + b(b-c)^2 + c(c-a)^2,$$
as one checks by expanding:
$$a\left(a^2-2ab+b^2\right)+b\left(b^2-2bc+c^2\right)+c\left(c^2-2ca+a^2\right) = \left(a^3+b^3+c^3\right)-2\left(a^2b+b^2c+c^2a\right)+\left(ab^2+bc^2+ca^2\right).\;✓$$

Since $a,b,c>0$ and squares are non-negative, this sum is $\ge 0$. Hence (2) holds.

**Conclusion.** Combining (1) and (2) gives the required inequality, with equality iff $a=b=c$. ∎

**The pattern.** Reducing a fraction inequality to "$\sum (\text{positive})\cdot(\text{difference})^2 \ge 0$" is the **SOS method**, and it is the subject of the next chapter. When a symmetric or cyclic polynomial inequality is true with equality at $a=b=c$, an SOS form almost always exists.
[/sol]

### P9 | Hard | Standard
Prove that in any triangle with sides $a,b,c$ and area $S$,
$$a^2+b^2+c^2 \ \ge\ 4\sqrt3\,S \qquad\textbf{(Weitzenböck's inequality)}.$$
[hint]
Use Heron's formula, or write $S = \frac12 ab\sin C$ and apply the cosine rule together with $\sin C \le 1$ cleverly. A slick route: reduce to $\big(a^2+b^2+c^2\big)^2 \ge 48 S^2$ and use Heron.
[/hint]
[sol]
By Heron's formula,
$$16S^2 = 2a^2b^2+2b^2c^2+2c^2a^2 - a^4-b^4-c^4.$$

So the claim $a^2+b^2+c^2\ge4\sqrt3 S$ (both sides positive) is equivalent to squaring:
$$\left(a^2+b^2+c^2\right)^2 \ \ge\ 48S^2 = 3\left(2a^2b^2+2b^2c^2+2c^2a^2-a^4-b^4-c^4\right).$$

Put $x=a^2$, $y=b^2$, $z=c^2$ (positive). The inequality becomes
$$(x+y+z)^2 \ \ge\ 3\left(2xy+2yz+2zx-x^2-y^2-z^2\right).$$

Expand the left side: $x^2+y^2+z^2+2xy+2yz+2zx$. So the inequality is
$$x^2+y^2+z^2+2(xy+yz+zx) \ \ge\ 6(xy+yz+zx) - 3\left(x^2+y^2+z^2\right),$$
i.e.
$$4\left(x^2+y^2+z^2\right) \ \ge\ 4(xy+yz+zx),$$
i.e.
$$x^2+y^2+z^2 \ \ge\ xy+yz+zx.$$

This is the standard inequality, equivalent to
$$\tfrac12\left[(x-y)^2+(y-z)^2+(z-x)^2\right]\ \ge\ 0,$$
which is true. ∎

**Equality** holds iff $x=y=z$, i.e. $a=b=c$: the equilateral triangle. (Check: for $a=b=c$, $S = \frac{\sqrt3}{4}a^2$, and $4\sqrt3 S = 3a^2 = a^2+b^2+c^2$ ✓.)
[/sol]

### P10 | Hard | Standard
Let $a,b,c$ be the sides of a triangle. Prove that
$$\frac{a}{b+c-a}+\frac{b}{c+a-b}+\frac{c}{a+b-c}\ \ge\ 3.$$
[hint]
Ravi substitution: $a=y+z$, $b=z+x$, $c=x+y$ with $x,y,z>0$. The denominators become very simple.
[/hint]
[sol]
**Ravi substitution.** Since $a,b,c$ are triangle sides, the numbers
$$x = \frac{b+c-a}{2}, \qquad y = \frac{c+a-b}{2}, \qquad z = \frac{a+b-c}{2}$$
are all **positive** (this is exactly the triangle inequality), and
$$a = y+z, \qquad b = z+x, \qquad c = x+y.$$

The denominators become $b+c-a = 2x$, $c+a-b=2y$, $a+b-c=2z$, so the inequality is
$$\frac{y+z}{2x}+\frac{z+x}{2y}+\frac{x+y}{2z}\ \ge\ 3,$$
i.e.
$$\frac{y+z}{x}+\frac{z+x}{y}+\frac{x+y}{z}\ \ge\ 6.$$

Regroup into three pairs:
$$\left(\frac yx+\frac xy\right)+\left(\frac zy+\frac yz\right)+\left(\frac xz+\frac zx\right)\ \ge\ 2+2+2 = 6,$$
using $t+\frac1t \ge 2$ for $t>0$ (AM–GM) on each pair.

Equality requires $x=y=z$, i.e. $a=b=c$: the equilateral triangle. ∎

**Why Ravi is worth knowing.** Any inequality whose hypothesis is "$a,b,c$ are the sides of a triangle" should be met with this substitution. It converts the awkward constraint into the trivial one $x,y,z>0$, and the resulting inequality is usually a standard symmetric one.
[/sol]
