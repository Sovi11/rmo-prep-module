---
id: alg-01-polynomials
title: Polynomials, roots and Vieta
level: Foundation
hours: 4
blurb: The factor theorem, Vieta's relations, symmetric functions, and how to extract information from a polynomial you cannot factor.
tags: polynomials, Vieta, roots, symmetric functions
link: Yufei Zhao — Polynomials :: https://yufeizhao.com/olympiad/imo2008/zhao-polynomials.pdf
link: MOTP — Algebra :: https://jpsaha.github.io/MOTP/alg/
video: Search: Vieta's formulas olympiad problems :: https://www.youtube.com/results?search_query=vieta+formulas+symmetric+polynomials+olympiad
---

## The basics, stated precisely

A polynomial $P(x) = a_nx^n + \cdots + a_1x+a_0$ with $a_n \ne 0$ has **degree** $n$ and **leading coefficient** $a_n$.

> **Division algorithm.** For polynomials $P, D$ with $D \ne 0$ there are unique $Q, R$ with
> $$P = QD + R, \qquad \deg R < \deg D.$$

> **Factor theorem.** $P(a) = 0 \iff (x-a) \mid P(x)$.

> **Remainder theorem.** The remainder of $P(x)$ on division by $x-a$ is $P(a)$.

> A non-zero polynomial of degree $n$ has **at most $n$ roots**. Consequently, if two polynomials of degree $\le n$ agree at $n+1$ points, they are identical.

That last consequence is a proof technique in its own right: to show $P = Q$, show they agree often enough.

## Vieta's relations

If $P(x) = a_nx^n + a_{n-1}x^{n-1}+\cdots+a_0$ has roots $r_1, \dots, r_n$ (with multiplicity, over $\mathbb C$), then

$$e_1 = \sum r_i = -\frac{a_{n-1}}{a_n}, \qquad e_2 = \sum_{i<j}r_ir_j = \frac{a_{n-2}}{a_n}, \qquad \dots, \qquad e_n = \prod r_i = (-1)^n\frac{a_0}{a_n}.$$

In general $e_k = (-1)^k \dfrac{a_{n-k}}{a_n}$, where $e_k$ is the $k$-th **elementary symmetric polynomial**.

For the two cases you use most:

- **Quadratic** $ax^2+bx+c$: $\;r_1+r_2 = -\frac ba$, $\;r_1r_2 = \frac ca$.
- **Cubic** $ax^3+bx^2+cx+d$: $\;\sum r_i = -\frac ba$, $\;\sum_{i<j}r_ir_j = \frac ca$, $\;r_1r_2r_3 = -\frac da$.

## Power sums and Newton's identities

Let $p_k = r_1^k+\cdots+r_n^k$. These relate to the $e_i$ by **Newton's identities**. For three variables the ones you need are:

$$p_1 = e_1$$
$$p_2 = e_1^2 - 2e_2$$
$$p_3 = e_1^3 - 3e_1e_2 + 3e_3$$

More usefully, if $r$ is a root of $x^3 = ax^2+bx+c$ then $r^{k+3} = ar^{k+2}+br^{k+1}+cr^k$, so summing over all roots,
$$p_{k+3} = a\,p_{k+2} + b\,p_{k+1} + c\,p_k.$$

> **The technique.** To compute $\sum r_i^k$ for large $k$ without finding the roots: set up this recurrence from the polynomial itself, compute $p_0 = n$, $p_1, p_2$ from Vieta, and iterate. This turns an impossible-looking computation into arithmetic.

## The fundamental theorem of algebra

Every non-constant polynomial with complex coefficients has a complex root; hence it factors completely over $\mathbb C$. Two consequences used constantly:

- A polynomial with **real** coefficients has non-real roots in conjugate pairs. So a real cubic has at least one real root, and a real polynomial of odd degree always does.
- Over $\mathbb R$, every polynomial factors into linear and irreducible quadratic factors.

## Worked example 1

**Let $r, s, t$ be the roots of $x^3 - 3x + 1 = 0$. Compute $r^3+s^3+t^3$ and $\frac1r+\frac1s+\frac1t$.**

Vieta: $e_1 = 0$, $e_2 = -3$, $e_3 = -1$.

$$r^3+s^3+t^3 = p_3 = e_1^3 - 3e_1e_2+3e_3 = 0 - 0 + 3(-1) = -3.$$

Alternatively, each root satisfies $r^3 = 3r - 1$, so $\sum r^3 = 3\sum r - 3 = 0 - 3 = -3$ ✓ — much faster, and the general pattern.

$$\frac1r+\frac1s+\frac1t = \frac{st+rt+rs}{rst} = \frac{e_2}{e_3} = \frac{-3}{-1} = 3. \;∎$$

## Worked example 2

**Find all polynomials $P$ with real coefficients such that $P(x^2) = P(x)^2$ for all $x$.**

Suppose $\deg P = n$ with leading coefficient $a$. Comparing leading coefficients: $P(x^2)$ has leading term $ax^{2n}$, and $P(x)^2$ has $a^2x^{2n}$. So $a = a^2$, giving $a = 1$ (as $a \ne 0$).

Let $P(x) = x^n + Q(x)$ with $\deg Q = m < n$ (or $Q = 0$). Then
$$P(x^2) = x^{2n}+Q(x^2), \qquad P(x)^2 = x^{2n} + 2x^nQ(x) + Q(x)^2.$$
Equating, $Q(x^2) = 2x^nQ(x) + Q(x)^2$. If $Q \ne 0$, compare degrees: left side has degree $2m$, right side has degree $n+m$ (since $n+m > 2m$). So $2m = n+m$, giving $m = n$ — contradicting $m<n$.

Hence $Q = 0$ and $P(x) = x^n$. Checking: $P(x^2) = x^{2n} = (x^n)^2$ ✓. Also $P = 0$ works, and $P=1$ is the case $n=0$.

**Answer:** $P(x) = x^n$ for $n \ge 0$, and $P \equiv 0$. ∎

*(The technique — compare leading coefficients, then peel off the leading term — is the standard opening for functional equations in polynomials.)*

## Common traps

- Applying Vieta with a non-monic polynomial and forgetting to divide by $a_n$.
- Forgetting that Vieta counts roots **with multiplicity** and over $\mathbb C$.
- Assuming a polynomial identity holds because it holds at a few points — you need more points than the degree.
- Dividing by a polynomial that might be zero.

## Problems

### P1 | Warmup | Standard
If $r$ and $s$ are the roots of $x^2-5x+3$, compute $r^2+s^2$ and $r^3+s^3$.
[hint]
$r^2+s^2 = (r+s)^2-2rs$. For cubes, use $r^3+s^3 = (r+s)^3-3rs(r+s)$.
[/hint]
[sol]
Vieta: $r+s = 5$, $rs = 3$.

$$r^2+s^2 = (r+s)^2 - 2rs = 25 - 6 = 19.$$
$$r^3+s^3 = (r+s)^3 - 3rs(r+s) = 125 - 3\cdot3\cdot5 = 125-45 = 80. \;∎$$
[/sol]

### P2 | Warmup | Standard
Find a monic cubic with roots $2, -1, 3$, and read off the sum of products of pairs.
[hint]
Expand $(x-2)(x+1)(x-3)$, then check against Vieta.
[/hint]
[sol]
$$(x-2)(x+1)(x-3) = (x^2-x-2)(x-3) = x^3 - 4x^2 + x + 6.$$

Vieta check: $\sum r_i = 2-1+3 = 4 = -(-4)$ ✓. $\sum_{i<j}r_ir_j = (2)(-1)+(2)(3)+(-1)(3) = -2+6-3 = 1$, which matches the coefficient of $x$ ✓. Product $= 2\cdot(-1)\cdot3 = -6 = -(6)$ ✓. ∎
[/sol]

### P3 | Easy | Standard
Let $r,s,t$ be roots of $x^3 - 2x^2 + 3x - 4$. Compute $r^2+s^2+t^2$ and $\frac1r+\frac1s+\frac1t$.
[hint]
Vieta gives $e_1=2$, $e_2=3$, $e_3=4$. Use $p_2 = e_1^2-2e_2$ and $\sum 1/r_i = e_2/e_3$.
[/hint]
[sol]
Vieta: $e_1 = 2$, $e_2 = 3$, $e_3 = 4$.

$$r^2+s^2+t^2 = e_1^2 - 2e_2 = 4 - 6 = -2.$$

(Negative, which is fine — the roots are not all real.)

$$\frac1r+\frac1s+\frac1t = \frac{st+rt+rs}{rst} = \frac{e_2}{e_3} = \frac34. \;∎$$
[/sol]

### P4 | Easy | Standard
Suppose $P$ is a polynomial with $P(1) = 2$, $P(2) = 3$, $P(3) = 5$ and $\deg P \le 2$. Find $P(4)$.
[hint]
Three points determine a quadratic. Use finite differences, or set up $P(x) = ax^2+bx+c$.
[/hint]
[sol]
Write $P(x) = ax^2+bx+c$. Then
$$a+b+c = 2, \qquad 4a+2b+c = 3, \qquad 9a+3b+c = 5.$$
Subtracting consecutive equations: $3a+b = 1$ and $5a+b = 2$. So $2a = 1$, $a = \frac12$, then $b = 1 - \frac32 = -\frac12$, and $c = 2 - \frac12 + \frac12 = 2$.

$$P(x) = \tfrac12x^2 - \tfrac12x + 2 \implies P(4) = 8 - 2 + 2 = 8. \;∎$$

*(Finite differences are faster: the first differences are $1, 2$, so the second difference is $1$ and constant. Extending, the next first difference is $3$, so $P(4) = 5+3 = 8$ ✓.)*
[/sol]

### P5 | Medium | Standard
Let $r, s, t$ be the roots of $x^3 - x - 1 = 0$. Compute $r^5+s^5+t^5$.
[hint]
Each root satisfies $r^3 = r+1$. Multiply by $r^k$ to get a recurrence $p_{k+3} = p_{k+1}+p_k$, then start from $p_0, p_1, p_2$.
[/hint]
[sol]
Vieta: $e_1 = 0$, $e_2 = -1$, $e_3 = 1$.

Each root satisfies $r^3 = r + 1$. Multiplying by $r^k$ and summing over the roots:
$$p_{k+3} = p_{k+1} + p_k.$$

Initial values:
- $p_0 = 3$ (three roots).
- $p_1 = e_1 = 0$.
- $p_2 = e_1^2-2e_2 = 0+2 = 2$.

Now iterate:
$$p_3 = p_1+p_0 = 0+3 = 3$$
$$p_4 = p_2+p_1 = 2+0 = 2$$
$$p_5 = p_3+p_2 = 3+2 = 5$$

So $r^5+s^5+t^5 = \mathbf{5}$. ∎
[/sol]

### P6 | Medium | CRMO 2013 P2
Let $f(x) = x^3+ax^2+bx+c$ and $g(x) = x^3+bx^2+cx+a$, where $a,b,c$ are integers with $c \ne 0$. Suppose $f(1) = 0$ and the roots of $g$ are the squares of the roots of $f$. Find $a^{2013}+b^{2013}+c^{2013}$.
[hint]
$f(1)=0$ gives one relation. If $f$ has roots $r_1,r_2,r_3$ then $g$ has roots $r_i^2$; compare Vieta for both. Note $1$ is a root of $f$, so $1$ is a root of $g$.
[/hint]
[sol]
Let the roots of $f$ be $r_1, r_2, r_3$. Then the roots of $g$ are $r_1^2, r_2^2, r_3^2$.

**From $f(1)=0$:** $1 + a + b + c = 0$. $\;(1)$

Also $1$ is a root of $f$, so $1^2 = 1$ is a root of $g$: $1 + b + c + a = 0$ — the same equation. No new information, but consistent.

**Vieta for $f$:** $e_1 = -a$, $e_2 = b$, $e_3 = -c$.

**Vieta for $g$** (roots $r_i^2$):
$$\sum r_i^2 = -b, \qquad \sum_{i<j}r_i^2r_j^2 = c, \qquad r_1^2r_2^2r_3^2 = -a.$$

Now express each in terms of $a,b,c$:
$$\sum r_i^2 = e_1^2 - 2e_2 = a^2-2b \implies a^2-2b = -b \implies a^2 = b. \;(2)$$
$$\sum_{i<j}r_i^2r_j^2 = e_2^2 - 2e_1e_3 = b^2 - 2(-a)(-c) = b^2-2ac \implies b^2-2ac = c. \;(3)$$
$$\left(r_1r_2r_3\right)^2 = e_3^2 = c^2 \implies c^2 = -a. \;(4)$$

From (2), $b = a^2$. From (4), $a = -c^2$. Substituting into (2): $b = c^4$.

Put these into (1): $1 + (-c^2) + c^4 + c = 0$, i.e.
$$c^4 - c^2 + c + 1 = 0.$$

Since $c$ is a non-zero integer, test small values: $c=1$ gives $1-1+1+1 = 2 \ne 0$; $c=-1$ gives $1-1-1+1=0$ ✓; $|c|\ge 2$ gives $c^4-c^2 \ge 12$ and $|c+1| \le |c|+1 \le c^2$, so the expression is positive. So $c = -1$.

Then $a = -c^2 = -1$ and $b = c^4 = 1$.

**Verify (3):** $b^2 - 2ac = 1 - 2(-1)(-1) = 1-2 = -1 = c$ ✓.

**Verify the polynomials:** $f(x) = x^3-x^2+x-1 = (x-1)(x^2+1)$, roots $1, i, -i$. Squares: $1, -1, -1$. And $g(x) = x^3+x^2-x-1 = (x-1)(x+1)^2$, roots $1,-1,-1$ ✓.

Finally, since 2013 is odd,
$$a^{2013}+b^{2013}+c^{2013} = (-1)^{2013}+1^{2013}+(-1)^{2013} = -1+1-1 = \mathbf{-1}. \;∎$$
[/sol]

### P7 | Medium | Standard
Find all polynomials $P$ with real coefficients satisfying
$$xP(x-1) = (x-2)P(x) \qquad \text{for all real } x.$$
[hint]
Substitute two well-chosen values of $x$ to find two roots of $P$. Factor those out and see what the equation says about the quotient.
[/hint]
[sol]
**Step 1: find forced roots.**

Set $x = 0$: the equation gives $0 \cdot P(-1) = (-2)P(0)$, so $P(0) = 0$.

Set $x = 2$: $2P(1) = 0\cdot P(2) = 0$, so $P(1) = 0$.

By the factor theorem, $x \mid P(x)$ and $(x-1)\mid P(x)$, and since these are coprime,
$$P(x) = x(x-1)\,Q(x)$$
for some polynomial $Q$ with real coefficients.

**Step 2: substitute back.**
$$xP(x-1) = x\cdot (x-1)(x-2)\,Q(x-1),$$
$$(x-2)P(x) = (x-2)\cdot x(x-1)\,Q(x).$$
Equating,
$$x(x-1)(x-2)\big[Q(x-1) - Q(x)\big] = 0 \qquad\text{for all } x.$$

**Step 3: conclude $Q$ is constant.**

For every $x \notin \{0,1,2\}$ the bracket must vanish, so the polynomial $Q(x-1)-Q(x)$ has infinitely many roots, hence is identically zero:
$$Q(x-1) = Q(x) \quad\text{for all } x.$$

A polynomial that is periodic is constant: pick any value $c = Q(0)$; then $Q(n) = c$ for every integer $n$, so $Q(x) - c$ has infinitely many roots and is the zero polynomial.

So $Q \equiv c$ and
$$P(x) = c\,x(x-1).$$

**Step 4: verify.** With $P(x) = cx(x-1)$,
$$xP(x-1) = x\cdot c(x-1)(x-2), \qquad (x-2)P(x) = (x-2)\cdot cx(x-1),$$
and these are equal. ✓

**Answer:** $P(x) = c\,x(x-1)$ for an arbitrary real constant $c$ (including $c=0$). ∎

**The pattern.** Functional equations for polynomials almost always begin the same way: *plug in the values that kill a factor*. Each such substitution hands you a root for free, and once you have enough roots you can factor and induct downwards on the degree.
[/sol]

### P8 | Medium | Standard
Let $P(x) = x^4 + ax^3+bx^2+cx+d$ have four real roots forming an arithmetic progression. Express $b$ in terms of $a$ and the common difference.
[hint]
Write the roots as $m-3h, m-h, m+h, m+3h$ — this is the symmetric way to write four terms in AP with common difference $2h$.
[/hint]
[sol]
Write the four roots symmetrically as
$$m-3h, \quad m-h, \quad m+h, \quad m+3h$$
(common difference $2h$, centred at $m$).

**$e_1$:** $\sum r_i = 4m = -a$, so $m = -\frac a4$.

**$e_2$:** Pair the roots as $(m-3h)(m+3h) = m^2-9h^2$ and $(m-h)(m+h) = m^2-h^2$. Then
$$e_2 = \underbrace{(m^2-9h^2)}_{\text{outer pair}} + \underbrace{(m^2-h^2)}_{\text{inner pair}} + \underbrace{(m-3h)(m-h)+(m-3h)(m+h)+(m+3h)(m-h)+(m+3h)(m+h)}_{\text{cross terms}}.$$
The four cross terms sum to $4m^2 - 2\cdot 3h\cdot 0\ldots$ — more simply, use
$$e_2 = \frac{e_1^2 - p_2}{2}, \qquad p_2 = \sum r_i^2 = 4m^2 + 2(9h^2) + 2(h^2) = 4m^2+20h^2.$$
Hence
$$b = e_2 = \frac{16m^2 - (4m^2+20h^2)}{2} = \frac{12m^2-20h^2}{2} = 6m^2 - 10h^2.$$

Substituting $m = -a/4$:
$$b = 6\cdot\frac{a^2}{16} - 10h^2 = \frac{3a^2}{8} - 10h^2.$$

So with common difference $D = 2h$ (so $h = D/2$, $h^2 = D^2/4$):
$$\boxed{\,b = \frac{3a^2}{8} - \frac{5D^2}{2}\,}$$

**Sanity check.** Roots $1,2,3,4$: $a = -10$, $D = 1$. Formula: $b = \frac{300}{8} - \frac52 = 37.5-2.5 = 35$. Direct: $e_2 = 1\cdot2+1\cdot3+1\cdot4+2\cdot3+2\cdot4+3\cdot4 = 2+3+4+6+8+12=35$ ✓. ∎
[/sol]

### P9 | Hard | CRMO 2015 P2
Let $P_1(x) = x^2+a_1x+b_1$ and $P_2(x) = x^2+a_2x+b_2$ be quadratics with integer coefficients. Suppose $a_1 \ne a_2$ and there exist integers $m \ne n$ with $P_1(m) = P_2(n)$ and $P_2(m) = P_1(n)$. Prove that $a_1 - a_2$ is even.
[hint]
Add the two given equations, or subtract them. Subtracting gives something that factors nicely as a difference of the two polynomials evaluated at $m$ and $n$.
[/hint]
[sol]
Subtract the two given equations:
$$P_1(m) - P_2(m) = P_2(n) - P_1(n).$$

Let $D(x) = P_1(x) - P_2(x) = (a_1-a_2)x + (b_1-b_2)$, a linear polynomial (non-constant since $a_1\ne a_2$). The equation above says
$$D(m) = -D(n),$$
that is,
$$D(m) + D(n) = 0.$$

Substituting,
$$(a_1-a_2)m + (b_1-b_2) + (a_1-a_2)n + (b_1-b_2) = 0,$$
so
$$(a_1-a_2)(m+n) + 2(b_1-b_2) = 0. \tag{$\ast$}$$

Now **add** the two given equations:
$$P_1(m)+P_2(m) = P_1(n)+P_2(n).$$
Let $S(x) = P_1(x)+P_2(x) = 2x^2 + (a_1+a_2)x + (b_1+b_2)$. Then $S(m) = S(n)$, so
$$2(m^2-n^2) + (a_1+a_2)(m-n) = 0.$$
Dividing by $m-n \ne 0$:
$$2(m+n) + (a_1+a_2) = 0 \implies a_1+a_2 = -2(m+n). \tag{$\ast\ast$}$$

So $a_1+a_2$ is **even**. Since $a_1 - a_2 \equiv a_1 + a_2 \pmod 2$, we conclude $a_1-a_2$ is even. ∎

*(Equation $(\ast)$ is not even needed — the "add" step alone does it. Worth noting: when two symmetric conditions are given, adding and subtracting them is almost always the first thing to try.)*
[/sol]

### P10 | Hard | Standard
Let $P$ be a polynomial of degree $n$ with $P(k) = \dfrac{1}{k}$ for $k = 1, 2, \dots, n+1$. Find $P(n+2)$.
[hint]
Consider $Q(x) = xP(x) - 1$, which has degree $n+1$ and known roots. Determine its leading coefficient by evaluating at $x = 0$.
[/hint]
[sol]
Define
$$Q(x) = xP(x) - 1.$$
Then $\deg Q = n+1$, and for $k=1,\dots,n+1$,
$$Q(k) = kP(k) - 1 = k\cdot\frac1k - 1 = 0.$$
So $Q$ has the $n+1$ distinct roots $1, 2, \dots, n+1$, and being of degree exactly $n+1$,
$$Q(x) = c\,(x-1)(x-2)\cdots(x-(n+1))$$
for some constant $c$.

**Find $c$** by setting $x = 0$:
$$Q(0) = 0\cdot P(0) - 1 = -1,$$
while the product gives $c(-1)(-2)\cdots(-(n+1)) = c(-1)^{n+1}(n+1)!$. Hence
$$c = \frac{-1}{(-1)^{n+1}(n+1)!} = \frac{(-1)^{n}}{(n+1)!}\cdot\frac{-1}{-1}\;=\;\frac{(-1)^{n}}{(n+1)!}.$$

Let me verify the sign: $c(-1)^{n+1}(n+1)! = -1 \implies c = \dfrac{-1}{(-1)^{n+1}(n+1)!} = \dfrac{(-1)^{n+2}}{(n+1)!} = \dfrac{(-1)^n}{(n+1)!}$. ✓

**Evaluate at $x = n+2$:**
$$Q(n+2) = c\,(n+1)(n)\cdots(1) = c\,(n+1)! = \frac{(-1)^n}{(n+1)!}\cdot(n+1)! = (-1)^n.$$

But also $Q(n+2) = (n+2)P(n+2) - 1$. Therefore
$$P(n+2) = \frac{1 + (-1)^n}{n+2} = \begin{cases}\dfrac{2}{n+2} & n \text{ even},\\[2mm] 0 & n \text{ odd}.\end{cases}$$

**Check $n=1$:** $P$ is linear with $P(1)=1$, $P(2)=\frac12$, so $P(x) = \frac{3-x}{2}$ and $P(3) = 0$ ✓ (matches $n$ odd).

**Check $n=2$:** $P(1)=1, P(2)=\frac12, P(3)=\frac13$. The formula predicts $P(4) = \frac24 = \frac12$. Fitting $P(x)=ax^2+bx+c$ gives $P(x) = \frac{x^2-6x+11}{6}$, so $P(4) = \frac{16-24+11}{6} = \frac36 = \frac12$ ✓. ∎

**The idea to keep.** When a polynomial is prescribed at many points by a *non-polynomial* formula, multiply through to clear the denominator and build a new polynomial whose roots you know. This "$Q(x) = xP(x)-1$" trick is standard and appears at every level from RMO to IMO.
[/sol]
