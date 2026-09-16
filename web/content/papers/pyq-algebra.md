---
id: pyq-algebra
title: Past problems — algebra
level: Mixed
hours: 5
blurb: Real RMO and CRMO algebra problems — polynomials, symmetric systems, sequences and inequalities — transcribed from the official papers.
tags: past papers, RMO, CRMO, algebra, inequalities
link: All official HBCSE past papers :: https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers/
link: RMO 2025 official solutions :: https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2025/12/RMO-2025-solutions.pdf
link: RMO 2019 official solutions :: https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2019/10/rmosolutions2019.pdf
---

## What algebra looks like at RMO

| Paper | Algebra problems | Flavour |
|---|---|---|
| RMO 2025 | P2 | symmetric system in three variables |
| RMO 2024 | P4 | pigeonhole on reals with a sum-of-squares constraint |
| RMO 2019 | P1, P3 | rationality argument; cyclic inequality |
| RMO 2018 | P2 | trigonometric-flavoured equation, AM–GM |
| CRMO 2016 | P2, P6 | inequality with a constraint; AP contains a GP |
| CRMO 2015 | P2 | quadratics with integer coefficients |
| CRMO 2014 | P2, P6 | arithmetic progressions; optimal constant |
| CRMO 2013 | P2, P6 | cubics and their roots; integer roots force $6\mid n$ |
| CRMO 2012 | P3 | inequality $a^ab^b+a^bb^a\le1$ |

**The pattern:** one or two per paper. Polynomial problems reward Vieta and the factor theorem; system problems reward a clean substitution; inequality problems are usually one application of AM–GM or Cauchy after the right rearrangement.

## Problems

### A1 | Medium | RMO 2025 P2
Let $a, b, c$ be distinct nonzero real numbers satisfying
$$a + \frac 2b \;=\; b+\frac2c \;=\; c+\frac2a.$$
Determine the value of $\left|a^2b+b^2c+c^2a\right|$.
[hint]
Let $k$ be the common value. From $a = k - \frac2b$ and its cyclic partners, derive a single equation for $k$ — you should find that $k^2 = 2$ is forced, because the alternative makes two of the variables equal.
[/hint]
[sol]
Let $k$ be the common value, so
$$ab = kb - 2, \qquad bc = kc-2, \qquad ca = ka-2. \tag{1}$$

**Step 1: $k^2 = 2$.** From the relations, $c = k - \frac2a$ gives $a = \frac{2}{k-c}$, and $b = k-\frac2c$ gives
$$a = k - \frac 2b = k - \frac{2}{\,k-\frac2c\,} = k - \frac{2c}{kc-2}.$$
Equating the two expressions for $a$ and cross-multiplying:
$$2(kc-2) = (k-c)\left(k^2c-2k-2c\right).$$
Expanding and collecting terms in $c$:
$$\left(2-k^2\right)c^2 - \left(2-k^2\right)ck + 2\left(2-k^2\right) = 0 \implies \left(2-k^2\right)\left(c^2-ck+2\right) = 0.$$

If $c^2-ck+2 = 0$ then $k = c+\frac2c$; but $k = c+\frac2a$, so $\frac2a = \frac2c$ and $a = c$ — contradicting distinctness.

Therefore
$$k^2 = 2.$$

**Step 2: symmetric quantities.** Write $p = a+b+c$, $q = ab+bc+ca$, $r = abc$.

Summing (1): $q = kp-6$.

Multiplying pairs of (1), e.g. $(ab+2)(bc+2) = k^2bc = 2bc$, expands to $ab^2c + 2ab + 4 = 0$, i.e.
$$br + 2ab + 4 = 0, \qquad cr+2bc+4 = 0, \qquad ar+2ca+4 = 0. \tag{2}$$

Adding the three equations in (2):
$$rp + 2q + 12 = 0.$$
Substituting $q = kp-6$ gives $rp + 2kp = 0$, i.e. $p\left(r+2k\right) = 0$.

**Step 3: evaluate the target.** From (2), $ab = -\frac{br+4}{2}$, $bc = -\frac{cr+4}{2}$, $ca = -\frac{ar+4}{2}$. Hence
$$a^2b+b^2c+c^2a = a(ab)+b(bc)+c(ca) = -\frac12\Big[r\left(ab+bc+ca\right)+4(a+b+c)\Big] = -\frac12\left(rq+4p\right).$$

- **If $p = 0$:** then $q = -6$, so the value is $-\frac12(-6r) = 3r$.
- **If $r = -2k$:** then $rk = -2k^2 = -4$, and $q = kp-6$, so
$$-\frac12\left(r(kp-6)+4p\right) = -\frac12\left(rkp - 6r + 4p\right) = -\frac12\left(-4p-6r+4p\right) = 3r.$$

Either way the value is $3r$.

**Step 4: find $|r|$.** Multiplying all three equations of (1):
$$r^2 = (kb-2)(kc-2)(ka-2).$$
More directly, subtracting pairs of the original equalities gives
$$a-b = \frac2c-\frac2b = \frac{2(b-c)}{bc}, \qquad b-c = \frac{2(c-a)}{ca}, \qquad c-a = \frac{2(a-b)}{ab}.$$
Multiplying all three and cancelling the non-zero product $(a-b)(b-c)(c-a)$:
$$1 = \frac{8}{(abc)^2} \implies r^2 = 8 \implies |r| = 2\sqrt2.$$

**Conclusion.**
$$\left|a^2b+b^2c+c^2a\right| = |3r| = 3\cdot2\sqrt2 = \mathbf{6\sqrt2}. \;∎$$

**Numerical check.** With $k=\sqrt2$ and $a=1$: $c = \sqrt2-2 \approx -0.58579$, $b = \sqrt2-\frac2c \approx 4.82843$, and indeed $k-\frac2b \approx 1$ ✓. Then
$$a^2b+b^2c+c^2a \approx 4.82843 - 13.65685 + 0.34315 = -8.48528,$$
and $6\sqrt2 = 8.48528$ ✓.
[/sol]

### A2 | Medium | RMO 2019 P1
Suppose $x$ is a nonzero real number such that both $x^5$ and $20x+\dfrac{19}{x}$ are rational. Prove that $x$ is rational.
[hint]
The second condition makes $x$ a root of a rational quadratic, so $x = a+b\sqrt d$. Impose that $x^5$ has zero $\sqrt d$ part and see what that forces.
[/hint]
[sol]
Let $t = 20x + \frac{19}{x} \in\mathbb{Q}$. Multiplying by $x \ne 0$,
$$20x^2 - tx + 19 = 0,$$
so $x$ is a root of a quadratic with rational coefficients.

**Suppose $x$ is irrational.** Then the quadratic is irreducible over $\mathbb Q$, and
$$x = a + b\sqrt d$$
for some $a,b\in\mathbb{Q}$ with $b \ne 0$ and $d$ a squarefree positive integer (positive because $x$ is real).

**Expand $x^5$.** By the binomial theorem,
$$x^5 = \underbrace{\left(a^5+10a^3b^2d+5ab^4d^2\right)}_{\text{rational}} \;+\; \underbrace{\left(5a^4b+10a^2b^3d+b^5d^2\right)}_{\text{coefficient of }\sqrt d}\sqrt d .$$

Since $x^5\in\mathbb Q$ and $\sqrt d\notin\mathbb Q$, the $\sqrt d$ coefficient must vanish:
$$b\left(5a^4+10a^2b^2d+b^4d^2\right) = 0.$$
As $b \ne 0$,
$$5a^4+10a^2b^2d+b^4d^2 = 0. \tag{$\ast$}$$

**Solve $(\ast)$.** Put $u = a^2 \ge 0$ and $v = b^2d > 0$ (both rational). Then
$$5u^2+10uv+v^2 = 0.$$

If $u = 0$ then $v^2 = 0$, so $v=0$ — impossible since $b\ne0$ and $d\ge1$.

So $u>0$, and dividing by $u^2$ and setting $w = \frac vu \in\mathbb{Q}$:
$$w^2+10w+5 = 0 \implies w = -5\pm2\sqrt5,$$
which is **irrational**. That contradicts $w\in\mathbb{Q}$.

**Conclusion.** The assumption that $x$ is irrational is impossible, so $x$ is rational. ∎

**The shape of the argument.** *Two conditions of different "degree" pin a number down.* The quadratic makes $x$ live in a degree-2 field; the fifth power then over-determines it. The same template handles "$x^n$ and $x+\frac1x$ are both rational".
[/sol]

### A3 | Medium | CRMO 2015 P2
Let $P_1(x) = x^2+a_1x+b_1$ and $P_2(x) = x^2+a_2x+b_2$ be quadratic polynomials with integer coefficients. Suppose $a_1\ne a_2$ and there exist integers $m\ne n$ such that $P_1(m) = P_2(n)$ and $P_2(m) = P_1(n)$. Prove that $a_1-a_2$ is even.
[hint]
Add the two given equations. The symmetric combination $P_1+P_2$ then takes the same value at $m$ and at $n$.
[/hint]
[sol]
**Add** the two hypotheses:
$$P_1(m)+P_2(m) = P_1(n)+P_2(n).$$

Let
$$S(x) = P_1(x)+P_2(x) = 2x^2 + (a_1+a_2)x + (b_1+b_2).$$
Then $S(m) = S(n)$, so
$$2\left(m^2-n^2\right)+\left(a_1+a_2\right)(m-n) = 0.$$

Since $m \ne n$ we may divide by $m-n$:
$$2(m+n) + \left(a_1+a_2\right) = 0 \implies a_1+a_2 = -2(m+n).$$

So $a_1+a_2$ is **even**.

Finally, for any integers, $a_1 - a_2 \equiv a_1+a_2 \pmod 2$. Hence $a_1-a_2$ is even. ∎

**The one-line lesson.** When two symmetric conditions are handed to you, **add them and subtract them**. Here adding does the whole job; subtracting gives the extra relation $(a_1-a_2)(m+n)+2(b_1-b_2)=0$, which is not needed but confirms the structure.
[/sol]

### A4 | Medium | CRMO 2013 P6
Suppose $m$ and $n$ are integers such that both quadratic equations $x^2+mx-n = 0$ and $x^2-mx+n=0$ have integer roots. Prove that $n$ is divisible by 6.
[hint]
Integer roots force both discriminants $m^2+4n$ and $m^2-4n$ to be perfect squares. Show $2\mid n$ and $3\mid n$ separately from that.
[/hint]
[sol]
For integer roots, both discriminants must be perfect squares:
$$m^2+4n = u^2, \qquad m^2-4n = v^2 \tag{1}$$
for some non-negative integers $u, v$.

**Divisibility by 2.** Adding and subtracting (1):
$$u^2+v^2 = 2m^2, \qquad u^2-v^2 = 8n. \tag{2}$$
From $u^2+v^2 = 2m^2$, the integers $u$ and $v$ have the **same parity**.
- If both are odd, then $u^2\equiv v^2\equiv1\pmod8$, so $8n = u^2-v^2\equiv0\pmod 8$ — automatic. Look instead at $m$: $u^2+v^2\equiv2\pmod8$, so $2m^2\equiv2\pmod 8$, giving $m^2\equiv1\pmod4$, so $m$ is odd. Then from (1), $4n = u^2-m^2$ with both $u,m$ odd, so $u^2-m^2\equiv0\pmod 8$, giving $8\mid4n$, i.e. $2\mid n$. ✓
- If both are even, write $u=2u'$, $v=2v'$; then $u'^2+v'^2 = \frac{m^2}{2}$ forces $m$ even, say $m=2m'$, and $u'^2+v'^2 = 2m'^2$, so $u',v'$ have the same parity, and $8n = 4\left(u'^2-v'^2\right)$ gives $2n = u'^2-v'^2$. Since $u',v'$ share parity, both $u'-v'$ and $u'+v'$ are even, so $4 \mid (u'-v')(u'+v') = u'^2-v'^2 = 2n$ — hence $2 \mid n$. ✓

Either way, $2 \mid n$.

**Divisibility by 3.** Squares modulo 3 are $0$ or $1$. Suppose $3\nmid n$, so $n\equiv\pm1\pmod 3$. From (1),
$$u^2 \equiv m^2+n, \qquad v^2\equiv m^2-n \pmod 3,$$
using $4\equiv1$.
- If $3\mid m$: then $u^2\equiv n$ and $v^2\equiv-n \pmod3$. One of $n,-n$ is $\equiv2\pmod3$, which is not a square mod 3 — contradiction.
- If $3\nmid m$: then $m^2\equiv1$, so $u^2\equiv1+n$ and $v^2\equiv1-n$. If $n\equiv1$ then $u^2\equiv2$ ✗; if $n\equiv2$ then $v^2\equiv-1\equiv2$ ✗.

Either way a contradiction, so $3\mid n$.

**Conclusion.** Since $2\mid n$, $3\mid n$ and $\gcd(2,3)=1$, we get $6\mid n$. ∎
[/sol]

### A5 | Medium | CRMO 2014 P2
Let $a_1, a_2, \dots, a_{2n}$ be an arithmetic progression of positive real numbers with common difference $d$. Given
$$a_1^2+a_3^2+\cdots+a_{2n-1}^2 = x, \qquad a_2^2+a_4^2+\cdots+a_{2n}^2 = y, \qquad a_n+a_{n+1} = z,$$
express $d$ in terms of $x, y, z, n$.
[hint]
$y - x$ pairs up as a sum of differences of squares — and each difference factors with $d$ as one factor.
[/hint]
[sol]
Pair the terms and factor each difference of squares:
$$y - x = \sum_{k=1}^{n}\left(a_{2k}^2-a_{2k-1}^2\right) = \sum_{k=1}^{n}\left(a_{2k}-a_{2k-1}\right)\left(a_{2k}+a_{2k-1}\right).$$

Since the sequence is an AP with common difference $d$, every $a_{2k}-a_{2k-1} = d$, so
$$y-x = d\sum_{k=1}^{n}\left(a_{2k-1}+a_{2k}\right) = d\sum_{j=1}^{2n}a_j.$$

**The total sum.** For an AP, the sum of all $2n$ terms is $n$ times the sum of the first and last:
$$\sum_{j=1}^{2n}a_j = n\left(a_1+a_{2n}\right).$$
Moreover $a_1+a_{2n} = a_n+a_{n+1}$, because both equal $2a_1+(2n-1)d$ — pairs equidistant from the ends of an AP have equal sums. Hence
$$\sum_{j=1}^{2n}a_j = n\,z.$$

**Conclude.**
$$y-x = d\cdot nz \implies \boxed{\,d = \frac{y-x}{nz}\,}$$
(the division is valid since the terms are positive, so $z>0$). ∎
[/sol]

### A6 | Medium | CRMO 2016 P2
Let $a,b,c$ be positive real numbers such that
$$\frac{a}{1+a}+\frac{b}{1+b}+\frac{c}{1+c} = 1.$$
Prove that $abc \le \dfrac18$.
[hint]
Substitute $u = \frac1{1+a}$ etc. The constraint becomes linear; one further shift makes it the normalised $p+q+r=1$, after which the inequality is a standard AM–GM.
[/hint]
[sol]
**Substitute.** Put $u = \frac1{1+a}$, $v = \frac1{1+b}$, $w = \frac1{1+c}$, all in $(0,1)$. Since $\frac{a}{1+a} = 1-u$, the constraint becomes
$$(1-u)+(1-v)+(1-w) = 1 \implies u+v+w = 2.$$

**Shift.** Set $p = 1-u$, $q=1-v$, $r=1-w$, all positive, with
$$p+q+r = 3-2 = 1.$$
Then $u = 1-p = q+r$, and
$$a = \frac{1-u}{u} = \frac{p}{q+r}, \qquad b = \frac{q}{r+p}, \qquad c = \frac{r}{p+q}.$$

**The inequality.** We must show
$$\frac{p}{q+r}\cdot\frac{q}{r+p}\cdot\frac{r}{p+q} \le \frac18 \iff 8pqr \le (p+q)(q+r)(r+p).$$

By AM–GM on each factor,
$$p+q\ge2\sqrt{pq}, \qquad q+r\ge2\sqrt{qr}, \qquad r+p\ge2\sqrt{rp},$$
and multiplying the three (all positive):
$$(p+q)(q+r)(r+p) \ \ge\ 8\sqrt{pq\cdot qr\cdot rp} = 8pqr. \;✓$$

**Equality.** Requires $p=q=r=\frac13$, giving $a=b=c=\frac{1/3}{2/3} = \frac12$ and $abc = \frac18$; the constraint checks out as $3\cdot\frac{1/2}{3/2} = 1$ ✓.

Hence $abc\le\frac18$. ∎
[/sol]

### A7 | Medium | CRMO 2016 P6
Let $\langle a_1,a_2,a_3,\dots\rangle$ be a strictly increasing arithmetic progression of positive integers. Prove that it contains an infinite subsequence whose terms are in geometric progression.
[hint]
The AP is exactly the positive integers in a fixed residue class mod $d$. Choose a geometric ratio that cannot leave that class.
[/hint]
[sol]
Write the progression as $a_n = a + (n-1)d$ with positive integers $a$ and $d$. Its terms are precisely the integers $\ge a$ that are congruent to $a$ modulo $d$.

**The construction.** Take the ratio
$$\rho = 1+d$$
and consider $a,\ a\rho,\ a\rho^2,\ a\rho^3,\ \dots$

**Every term lies in the progression.** Since $\rho\equiv1\pmod d$, we have $\rho^k\equiv1\pmod d$ for every $k\ge0$, hence
$$a\rho^k \equiv a \pmod d.$$
Also $a\rho^k \ge a$ because $\rho\ge2$. So each $a\rho^k$ is a positive integer $\ge a$ in the residue class of $a$ mod $d$ — that is, a term of the progression.

**It is infinite and geometric.** Since $\rho\ge2$ and $a\ge1$, the terms $a\rho^k$ are strictly increasing, hence infinitely many distinct terms, and by construction they form a geometric progression with ratio $\rho$.

Therefore the AP contains an infinite geometric subsequence. ∎

**The idea in one line.** *Choose the ratio congruent to 1 modulo the common difference* — then the geometric sequence can never escape the residue class.
[/sol]

### A8 | Hard | CRMO 2012 P3
Let $a$ and $b$ be positive real numbers with $a+b=1$. Prove that
$$a^ab^b + a^bb^a \ \le\ 1.$$
[hint]
Start from $1 = a+b = a^{a+b}b^{a+b}\cdot(\text{something})$? Better: write $a+b = a^{a}a^{b}+b^{a}b^{b}$ using $a = a^{a+b}$, then compare with the target.
[/hint]
[sol]
Since $a+b=1$, we may write
$$a = a^{a+b} = a^a a^b, \qquad b = b^{a+b} = b^ab^b.$$

Therefore
$$1 = a+b = a^aa^b + b^ab^b.$$

Subtracting the quantity we want to bound,
$$1 - \left(a^ab^b+a^bb^a\right) = \left(a^aa^b + b^ab^b\right)-\left(a^ab^b+a^bb^a\right).$$

**Factor.** Group the four terms:
$$= a^a\left(a^b-b^b\right) - b^a\left(a^b - b^b\right) = \left(a^a-b^a\right)\left(a^b-b^b\right).$$

**Sign of each factor.** The function $t\mapsto t^s$ is increasing in $t>0$ for any fixed exponent $s>0$. So:
- if $a \ge b$ then $a^a\ge b^a$ and $a^b\ge b^b$ — both factors non-negative;
- if $a\le b$ then $a^a\le b^a$ and $a^b\le b^b$ — both factors non-positive.

In either case the **product is non-negative**:
$$1 - \left(a^ab^b+a^bb^a\right) = \left(a^a-b^a\right)\left(a^b-b^b\right) \ \ge\ 0.$$

Hence
$$a^ab^b+a^bb^a \ \le\ 1, \;∎$$
with equality exactly when $a = b = \frac12$.

**Why the opening move works.** The constraint $a+b=1$ lets you write each variable as a *product of two powers of itself*, which is what creates the four terms that then factor. Whenever you see $a+b=1$ alongside exponents $a$ and $b$, try $a = a^{a+b}$.
[/sol]

### A9 | Hard | RMO 2024 P4
Let $a_1,a_2,a_3,a_4$ be real numbers with $a_1^2+a_2^2+a_3^2+a_4^2 = 1$. Show that there exist $i,j$ with $1\le i<j\le4$ such that
$$\left(a_i-a_j\right)^2 \le \frac15.$$
[hint]
Order them, let $m$ be the smallest gap between consecutive ones, and express the sum of squares in terms of $m$ — you want a lower bound for $\sum a_i^2$ forced by all gaps being large.
[/hint]
[sol]
**Setup.** Order the numbers: WLOG $a_1\le a_2\le a_3\le a_4$ (relabelling does not change the hypothesis or the conclusion). Let
$$m = \min_{i<j}\left|a_i-a_j\right| = \min_{1\le i\le 3}\left(a_{i+1}-a_i\right),$$
the smallest gap, which for a sorted list is attained between consecutive entries.

Every consecutive gap is at least $m$; we show $m^2 \le \frac15$ directly.

**Bound the sum of squares from below.** Shifting all four numbers by a constant $c$ does not change the gaps, and
$$\sum_i \left(a_i - c\right)^2$$
is minimised over $c$ at the mean $\bar a$, where it equals $\sum a_i^2 - 4\bar a^2 \le \sum a_i^2 = 1$.

So it suffices to show that four reals with all consecutive gaps $\ge m$ satisfy
$$\sum_i\left(a_i-\bar a\right)^2 \ \ge\ 5m^2,$$
because then $1 \ge 5m^2$, i.e. $m^2\le\frac15$.

**Prove that bound.** With gaps $g_1 = a_2-a_1$, $g_2 = a_3-a_2$, $g_3 = a_4-a_3$, all $\ge m$, any two of the sorted numbers satisfy, for $i<j$,
$$a_j - a_i = g_i + g_{i+1} + \cdots + g_{j-1} \ \ge\ (j-i)\,m.$$
Now use the identity (expand and collect)
$$\sum_{i<j}\left(a_i-a_j\right)^2 = 4\sum_i a_i^2 - \Big(\sum_i a_i\Big)^2 = 4\sum_i\left(a_i-\bar a\right)^2.$$
The six pairs $(i,j)$ have $j-i$ equal to $1,1,1,2,2,3$, so
$$4\sum_i\left(a_i-\bar a\right)^2 = \sum_{i<j}\left(a_i-a_j\right)^2 \ \ge\ m^2\left(1+1+1+4+4+9\right) = 20m^2,$$
i.e. $\sum_i(a_i-\bar a)^2 \ge 5m^2$, with equality exactly when every gap equals $m$ — the arithmetic progression $-\tfrac32 m,\ -\tfrac12 m,\ \tfrac12 m,\ \tfrac32 m$ about the mean, whose squares indeed sum to $m^2\left(\tfrac94+\tfrac14+\tfrac14+\tfrac94\right) = 5m^2$.

Hence $\sum_i(a_i-\bar a)^2 \ge 5m^2$ always, and combined with $\sum(a_i-\bar a)^2 \le 1$:
$$5m^2 \le 1 \implies m^2 \le \frac15.$$

So there is a pair with $\left(a_i-a_j\right)^2 = m^2 \le \frac15$. ∎

**Sharpness.** Equality needs the four numbers in AP with common difference $\frac1{\sqrt5}$ and mean 0, i.e.
$$\left(-\tfrac{3}{2\sqrt5},\ -\tfrac1{2\sqrt5},\ \tfrac1{2\sqrt5},\ \tfrac{3}{2\sqrt5}\right),$$
whose squares sum to $\frac{9+1+1+9}{20} = 1$ ✓ and whose minimum gap squared is exactly $\frac15$ ✓. So the constant $\frac15$ cannot be improved.

Compare your write-up with the [official RMO 2024 solutions](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2024/11/Official-Solutions-for-RMO-2024.pdf).
[/sol]

### A10 | Hard | RMO 2019 P3
Let $a,b,c$ be positive real numbers with $a+b+c=1$. Prove that
$$\frac{a}{a^2+b^3+c^3}+\frac{b}{b^2+c^3+a^3}+\frac{c}{c^2+a^3+b^3}\ \le\ \frac{1}{5abc}.$$
[hint]
Homogenise the denominator with $a+b+c=1$ (write $a^2 = a^2(a+b+c)$) so that $a^3+b^3+c^3 \ge 3abc$ can bite. The finish is an AM–HM on five numbers.
[/hint]
[sol]
This is one of the hardest problems on that paper. The whole solution is two moves: **homogenise** the denominator with the constraint, then **AM–HM**.

**Step 1 — homogenise and bound each denominator.** Since $a+b+c=1$,
$$a^2 = a^2(a+b+c) = a^3 + a^2b + a^2c,$$
so
$$a^2+b^3+c^3 = \left(a^3+b^3+c^3\right) + a^2b + a^2c.$$
By AM–GM, $a^3+b^3+c^3 \ge 3abc$, hence
$$a^2+b^3+c^3 \ \ge\ 3abc + a^2b + a^2c = a\left(3bc + ab + ca\right),$$
and therefore
$$\frac{a}{a^2+b^3+c^3} \ \le\ \frac{1}{3bc+ca+ab}. \tag{1}$$
The same argument, cyclically, gives
$$\frac{b}{b^2+c^3+a^3} \le \frac{1}{3ca+ab+bc}, \qquad \frac{c}{c^2+a^3+b^3} \le \frac{1}{3ab+bc+ca}.$$

**Step 2 — AM–HM on five numbers.** Apply AM–HM to the five positive numbers $bc, bc, bc, ca, ab$:
$$\frac{3bc+ca+ab}{5} \ \ge\ \frac{5}{\frac{3}{bc}+\frac{1}{ca}+\frac{1}{ab}}
\quad\Longrightarrow\quad
\frac{1}{3bc+ca+ab} \ \le\ \frac{1}{25}\left(\frac{3}{bc}+\frac{1}{ca}+\frac{1}{ab}\right). \tag{2}$$
Likewise for the other two denominators.

**Step 3 — sum.** Adding the three bounds from (1) and (2), each of $\frac1{bc},\frac1{ca},\frac1{ab}$ appears with total coefficient $3+1+1 = 5$:
$$\sum_{\text{cyc}}\frac{a}{a^2+b^3+c^3} \ \le\ \frac{5}{25}\left(\frac1{bc}+\frac1{ca}+\frac1{ab}\right) = \frac15\cdot\frac{a+b+c}{abc} = \frac{1}{5abc},$$
using $a+b+c=1$ in the last step. ∎

**Equality.** AM–GM in Step 1 needs $a=b=c$, and AM–HM in Step 2 needs $bc=ca=ab$, i.e. again $a=b=c$. So equality holds exactly at $a=b=c=\tfrac13$, where both sides equal $\tfrac{27}{5}$ — check: each term is $\frac{1/3}{1/9+2/27} = \frac{9}{5}$, and $\frac{1}{5abc} = \frac{27}{5}$ ✓

- [RMO 2019 paper](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2019/10/rmoengfirst2019.pdf)
- [RMO 2019 official solutions](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2019/10/rmosolutions2019.pdf)

**The technique.** *Homogenising with the constraint* ($a^2 = a^2(a+b+c)$) is the standard first move whenever a constraint like $a+b+c=1$ sits alongside mixed degrees — it is what lets AM–GM bite on the denominator. The five-number AM–HM trick (repeating $bc$ three times to match the coefficient $3$) is worth remembering: the multiplicities are chosen so that the final cyclic sum comes out symmetric.

**On exam strategy.** Even Step 1 alone, written out with the AM–GM justification, is worth genuine partial credit. Do not leave the page blank because you cannot see the finish.
[/sol]
