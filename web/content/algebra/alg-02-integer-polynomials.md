---
id: alg-02-integer-polynomials
title: Integer polynomials
level: Core
hours: 4
blurb: Where algebra meets number theory — the a−b divides P(a)−P(b) lemma, rational roots, and irreducibility tests. A perennial RMO favourite.
tags: integer polynomials, rational root, Eisenstein, irreducibility
link: Yufei Zhao — Integer polynomials :: https://yufeizhao.com/olympiad/intpoly.pdf
link: MOTP — Algebra :: https://jpsaha.github.io/MOTP/alg/
video: Search: integer polynomials olympiad irreducibility :: https://www.youtube.com/results?search_query=integer+polynomials+olympiad+eisenstein+criterion
---

## The one lemma to remember

> **If $P \in \mathbb{Z}[x]$ and $a, b$ are integers, then $\;(a - b) \mid P(a) - P(b)$.**

*Proof.* Write $P(x) = \sum c_kx^k$. Then $P(a)-P(b) = \sum c_k(a^k - b^k)$, and $a - b \mid a^k-b^k$ for every $k \ge 1$. ∎

This is small, easy, and appears in RMO number-theory-flavoured algebra problems every few years. Three standard consequences:

- **$P$ induces a well-defined map on residues:** $a \equiv b \pmod n \implies P(a)\equiv P(b)\pmod n$.
- **No integer polynomial takes only prime values.** If $P(a) = p$ is prime, then $P(a + kp) \equiv P(a)\equiv 0 \pmod p$ for every $k$, so $P(a+kp)$ is a multiple of $p$; being prime forces $P(a+kp) = \pm p$, and a polynomial taking a value infinitely often is constant.
- **You cannot have $P(a) = b$, $P(b)=c$, $P(c)=a$ with $a,b,c$ distinct integers.** (See P6.)

## Rational roots

> **Rational root theorem.** If $P(x) = a_nx^n+\cdots+a_0 \in \mathbb{Z}[x]$ has a rational root $\frac pq$ in lowest terms, then $p \mid a_0$ and $q \mid a_n$.

In particular a **monic** integer polynomial has only integer rational roots. Combined with the factor theorem, this is how you test small-degree integer polynomials for factorisation: the only candidates are divisors of the constant term.

**Corollary used constantly:** if $m$ is a positive integer that is not a perfect $k$-th power, then $\sqrt[k]{m}$ is irrational — because it is a root of the monic $x^k - m$, whose only rational roots would be integers dividing $m$.

## Irreducibility

A polynomial in $\mathbb{Z}[x]$ is **irreducible** if it cannot be written as a product of two non-constant integer polynomials.

> **Gauss's lemma.** A polynomial in $\mathbb{Z}[x]$ that factors over $\mathbb{Q}$ also factors over $\mathbb{Z}$ (into factors of the same degrees).

So "irreducible over $\mathbb{Z}$" and "irreducible over $\mathbb{Q}$" agree for non-constant polynomials — you never need to worry about denominators.

> **Eisenstein's criterion.** If there is a prime $p$ with
> - $p \nmid a_n$,
> - $p \mid a_i$ for all $i < n$,
> - $p^2 \nmid a_0$,
>
> then $P$ is irreducible over $\mathbb{Q}$.

**Example.** $x^4 + 2x^3+2x^2+2x+2$ is irreducible by Eisenstein at $p=2$.

**The shift trick.** $P(x)$ is irreducible iff $P(x+c)$ is, for any integer $c$. So if Eisenstein fails directly, try substituting $x \to x+1$ or $x\to x-1$ first.

**Classic application.** The $p$-th cyclotomic polynomial $\Phi_p(x) = x^{p-1}+\cdots+x+1$ is irreducible: substituting $x \to x+1$ and using $\Phi_p(x) = \frac{x^p-1}{x-1}$ gives
$$\Phi_p(x+1) = \frac{(x+1)^p - 1}{x} = x^{p-1} + \binom p1 x^{p-2}+\cdots+\binom{p}{p-1},$$
and every binomial coefficient $\binom pk$ for $1\le k\le p-1$ is divisible by $p$, while the constant term $\binom{p}{p-1} = p$ is not divisible by $p^2$. Eisenstein applies. ∎

> **Mod-$p$ reduction.** If $P$ is monic and its reduction mod $p$ is irreducible in $\mathbb{F}_p[x]$, then $P$ is irreducible over $\mathbb{Q}$. (The converse fails.)

## Interpolation and integrality

If $P$ has degree $n$ and takes integer values at $n+1$ consecutive integers, then $P$ takes integer values at **every** integer — even if its coefficients are not integers. The reason: such $P$ can be written as
$$P(x) = c_0\binom x0 + c_1\binom x1 + \cdots + c_n\binom xn$$
with integer $c_i$, and each $\binom xk$ is an integer for integer $x$. Example: $\frac{x^2+x}{2}$ has non-integer coefficients but is always an integer.

## Common traps

- Using $a - b \mid P(a)-P(b)$ when $P$ has non-integer coefficients.
- Eisenstein with $p^2 \mid a_0$, or forgetting $p \nmid a_n$.
- Concluding a polynomial is irreducible because it has no rational roots. That only rules out **linear** factors — $x^4+4 = (x^2-2x+2)(x^2+2x+2)$ has no rational roots but is reducible.
- Forgetting that irreducibility depends on the ring: $x^2+1$ is irreducible over $\mathbb{Q}$, not over $\mathbb{C}$.

## Problems

### P1 | Warmup | Standard
Show that $\sqrt{2} + \sqrt{3}$ is irrational.
[hint]
Find a monic integer polynomial it satisfies, then apply the rational root theorem.
[/hint]
[sol]
Let $\alpha = \sqrt2+\sqrt3$. Then $\alpha^2 = 5 + 2\sqrt6$, so $\alpha^2 - 5 = 2\sqrt6$, and squaring again,
$$(\alpha^2-5)^2 = 24 \implies \alpha^4 - 10\alpha^2 + 1 = 0.$$

So $\alpha$ is a root of the **monic** integer polynomial $x^4-10x^2+1$. By the rational root theorem any rational root must be an integer dividing 1, i.e. $\pm1$. But $(\pm1)^4 - 10(\pm1)^2+1 = 1-10+1 = -8 \ne 0$.

So $x^4-10x^2+1$ has no rational roots; since $\alpha$ is a root, $\alpha$ is irrational. ∎
[/sol]

### P2 | Warmup | Standard
Prove that $x^5 + 3x^4 + 6x^2 + 9x + 3$ is irreducible over $\mathbb{Q}$.
[hint]
Eisenstein at $p = 3$.
[/hint]
[sol]
Take $p = 3$. The coefficients are $a_5 = 1$, $a_4 = 3$, $a_3 = 0$, $a_2 = 6$, $a_1 = 9$, $a_0 = 3$.

- $3 \nmid a_5 = 1$ ✓
- $3 \mid a_4, a_3, a_2, a_1, a_0$ (namely $3, 0, 6, 9, 3$) ✓
- $9 \nmid a_0 = 3$ ✓

Eisenstein's criterion applies, so the polynomial is irreducible over $\mathbb{Q}$. ∎
[/sol]

### P3 | Easy | Standard
Let $P \in \mathbb{Z}[x]$ with $P(1) = 3$ and $P(4) = 7$. Is this possible? What about $P(1)=3$, $P(4)=10$?
[hint]
Apply $a-b \mid P(a)-P(b)$ with $a=4$, $b=1$.
[/hint]
[sol]
By the lemma, $(4-1) \mid P(4)-P(1)$, i.e. $3 \mid P(4)-P(1)$.

**First case:** $P(4)-P(1) = 7-3 = 4$, and $3 \nmid 4$. So this is **impossible**.

**Second case:** $P(4)-P(1) = 10-3 = 7$, and $3 \nmid 7$. Also **impossible**.

*(An example that is possible: $P(1)=3$, $P(4)=6$, since $3 \mid 3$. For instance $P(x) = x+2$.)* ∎
[/sol]

### P4 | Easy | Standard
Prove that no non-constant polynomial $P \in \mathbb{Z}[x]$ takes a prime value at every positive integer.
[hint]
Suppose $P(1) = p$ is prime. What is $P(1+kp)$ modulo $p$?
[/hint]
[sol]
Suppose $P \in \mathbb{Z}[x]$ is non-constant and $P(n)$ is prime for every positive integer $n$. Let $p = P(1)$, a prime.

For every integer $k \ge 0$,
$$1 + kp \equiv 1 \pmod p \implies P(1+kp)\equiv P(1) = p \equiv 0 \pmod p,$$
using the lemma. So $p \mid P(1+kp)$.

But $P(1+kp)$ is prime by hypothesis, so $P(1+kp) \in \{p, -p\}$; since it is a (positive) prime, $P(1+kp) = p$.

So the polynomial $P(x) - p$ vanishes at the infinitely many points $1, 1+p, 1+2p, \dots$, hence is identically zero, i.e. $P \equiv p$ is constant — contradiction. ∎
[/sol]

### P5 | Medium | Standard
Let $P \in \mathbb{Z}[x]$ be such that $P(a) = P(b) = P(c) = 1$ for three distinct integers $a,b,c$. Prove $P$ has no integer root.
[hint]
Write $P(x) - 1 = (x-a)(x-b)(x-c)Q(x)$ and evaluate at a supposed root $r$.
[/hint]
[sol]
Since $a,b,c$ are distinct roots of $P(x)-1$, the factor theorem gives
$$P(x) - 1 = (x-a)(x-b)(x-c)\,Q(x)$$
for some $Q \in \mathbb{Z}[x]$ (the quotient of integer polynomials by a monic integer polynomial has integer coefficients).

Suppose $r$ is an integer with $P(r)=0$. Then
$$-1 = P(r)-1 = (r-a)(r-b)(r-c)\,Q(r).$$

The four factors on the right are integers whose product is $-1$, so each is $\pm 1$. In particular $r-a$, $r-b$, $r-c$ all lie in $\{1,-1\}$.

But $a,b,c$ are **distinct**, so $r-a$, $r-b$, $r-c$ are three distinct integers — and $\{1,-1\}$ has only two elements. Contradiction.

Hence $P$ has no integer root. ∎
[/sol]

### P6 | Medium | Standard
Suppose $P \in \mathbb{Z}[x]$ and there are distinct integers $a, b, c$ with $P(a)=b$, $P(b)=c$, $P(c)=a$. Prove this is impossible.
[hint]
Apply the divisibility lemma around the cycle and compare absolute values.
[/hint]
[sol]
By the lemma applied three times:
$$a - b \mid P(a)-P(b) = b - c,$$
$$b - c \mid P(b)-P(c) = c - a,$$
$$c - a \mid P(c)-P(a) = a - b.$$

Since $a,b,c$ are distinct, all three differences are non-zero. Taking absolute values, divisibility gives
$$|a-b| \le |b-c| \le |c-a| \le |a-b|.$$

So all three are equal; write $|a-b| = |b-c| = |c-a| = d > 0$.

Now consider $(a-b) + (b-c) + (c-a) = 0$. Each summand is $\pm d$, so we need three numbers from $\{d, -d\}$ summing to zero. Their sum is $(\pm1\pm1\pm1)d$, which is $\pm 3d$ or $\pm d$ — never 0 for $d > 0$.

Contradiction. Hence no such $a,b,c$ exist. ∎

*(The same argument shows there is no cycle of any odd length. Cycles of length 2 are possible: $P(x) = -x$ with $a=1,b=-1$.)*
[/sol]

### P7 | Medium | Standard
Prove that if $P \in \mathbb{Z}[x]$ is non-constant, then the set of primes dividing at least one of $P(1), P(2), P(3), \dots$ is infinite.
[hint]
Suppose the primes are $p_1,\dots,p_k$. Consider $P(a + t\,p_1p_2\cdots p_k \cdot P(a))$ for a suitable $a$ and use the lemma.
[/hint]
[sol]
First, $P$ takes a value $\ne 0, \pm1$ at some positive integer, since a non-constant polynomial takes each of $0, 1, -1$ at most $\deg P$ times. Pick $a$ with $c := P(a) \notin\{0,1,-1\}$; replacing $P(x)$ by $P(x)$ or $-P(x)$ we may assume $c \ge 2$.

Suppose for contradiction that only finitely many primes $p_1,\dots,p_k$ divide some value $P(n)$, $n \ge 1$. Let $M = c\,p_1p_2\cdots p_k$.

For any integer $t \ge 1$, consider $n_t = a + tM$. By the lemma,
$$P(n_t) \equiv P(a) = c \pmod{tM},$$
and in particular, since $c \mid M \mid tM$,
$$P(n_t) \equiv c \equiv 0 \pmod{c}.$$
Write $P(n_t) = c\,m_t$.

**Claim: $\gcd(m_t, p_1\cdots p_k)$ can be forced to be 1.** Indeed, modulo $c\,p_i$ we have $P(n_t)\equiv c$, so
$$m_t = \frac{P(n_t)}{c}\equiv 1 \pmod{p_i}$$
for each $i$ — because $P(n_t) - c$ is divisible by $tM$, hence by $c\,p_i$, so $c(m_t - 1)$ is divisible by $cp_i$, giving $p_i \mid m_t - 1$.

So $m_t \equiv 1 \pmod{p_i}$ for all $i$; in particular no $p_i$ divides $m_t$ (as $p_i \nmid 1$).

Since $P$ is non-constant, $|P(n_t)| \to \infty$, so $|m_t| \to \infty$; choose $t$ with $|m_t| > 1$. Then $m_t$ has a prime divisor $q$, and $q \notin\{p_1,\dots,p_k\}$. But $q \mid m_t \mid P(n_t)$, so $q$ divides a value of $P$ — contradicting the assumption that $p_1,\dots,p_k$ were all such primes.

Hence infinitely many primes divide values of $P$. ∎
[/sol]

### P8 | Medium | Standard
Let $P \in \mathbb{Z}[x]$ be monic of degree $n$, and suppose $P(k)$ is divisible by 3 for $k=0,1,2$. Prove $P(k)$ is divisible by 3 for every integer $k$.
[hint]
Every integer is congruent to 0, 1 or 2 mod 3, and $P$ respects congruences.
[/hint]
[sol]
Let $k$ be any integer. By the division algorithm $k \equiv r \pmod 3$ for exactly one $r \in\{0,1,2\}$.

Since $P$ has integer coefficients, $k \equiv r \pmod 3$ implies
$$P(k)\equiv P(r) \pmod 3.$$
By hypothesis $P(r)\equiv 0 \pmod 3$ for each $r\in\{0,1,2\}$.

Hence $P(k)\equiv 0 \pmod 3$ for every integer $k$. ∎

*(Note that monicity and the degree were red herrings — the statement holds for any $P \in \mathbb{Z}[x]$.)*
[/sol]

### P9 | Hard | Standard
Prove that $x^4+1$ is irreducible over $\mathbb{Q}$ but reducible modulo every prime $p$.
[hint]
For irreducibility over $\mathbb{Q}$, substitute $x \to x+1$ and apply Eisenstein at 2. For the mod-$p$ part, note that $x^4+1 \mid x^8-1$ and think about $\mathbb{F}_{p^2}^\times$, or handle $p=2$ and odd $p$ via $-1, 2, -2$ being QRs.
[/hint]
[sol]
**Irreducible over $\mathbb{Q}$.** Substitute $x \to x+1$:
$$(x+1)^4+1 = x^4+4x^3+6x^2+4x+2.$$
Eisenstein at $p=2$: $2\nmid 1$ ✓; $2 \mid 4, 6, 4, 2$ ✓; $4 \nmid 2$ ✓. So $(x+1)^4+1$ is irreducible, and hence so is $x^4+1$ (a factorisation of one gives a factorisation of the other by shifting). ∎

**Reducible mod every prime.**

*$p = 2$:* $x^4+1 \equiv (x+1)^4 \pmod 2$, since $(x+1)^4 = x^4+4x^3+6x^2+4x+1 \equiv x^4+1$. ✓

*$p$ odd:* We use the identities
$$x^4+1 = (x^2+1)^2 - 2x^2 = (x^2-1)^2+2x^2 = (x^2+ax+1)(x^2-ax+1)\Big|_{a^2 = 2},$$
more precisely:
- If $-1$ is a QR mod $p$, say $i^2\equiv-1$, then $x^4+1 = (x^2-i)(x^2+i)$ factors.
- If $2$ is a QR mod $p$, say $c^2 \equiv 2$, then $x^4+1 = (x^2+1)^2 - 2x^2 = (x^2 - cx+1)(x^2+cx+1)$.
- If $-2$ is a QR mod $p$, say $d^2\equiv-2$, then $x^4+1 = (x^2-1)^2+2x^2 = (x^2 - dx - 1)(x^2 + dx - 1)$.

Let us check that last factorisation: $(x^2-dx-1)(x^2+dx-1) = (x^2-1)^2 - d^2x^2 = x^4-2x^2+1 - d^2x^2$. With $d^2 = -2$ this is $x^4 - 2x^2+1+2x^2 = x^4+1$ ✓.

Finally, **at least one of $-1$, $2$, $-2$ is a quadratic residue mod any odd $p$**: the Legendre symbol is multiplicative, so
$$\left(\frac{-1}p\right)\left(\frac 2p\right)\left(\frac{-2}p\right) = \left(\frac{(-1)(2)(-2)}{p}\right) = \left(\frac{4}{p}\right) = +1.$$
A product of three values in $\{\pm1\}$ equals $+1$ only if none or exactly two are $-1$ — either way at least one is $+1$.

Hence $x^4+1$ is reducible modulo every prime. ∎

*(A striking example: irreducibility over $\mathbb{Q}$ cannot be detected by looking mod primes.)*
[/sol]

### P10 | Hard | Classic
Let $P \in \mathbb{Z}[x]$ and suppose there are four **distinct** integers $a,b,c,d$ with
$$P(a) = P(b) = P(c) = P(d) = 5.$$
Prove that there is no integer $k$ with $P(k) = 8$.
[hint]
Factor $P(x) - 5$. If $P(k)=8$, you get a product of four distinct non-zero integers (times something) equal to 3. How small can $|$product of four distinct non-zero integers$|$ be?
[/hint]
[sol]
Since $a,b,c,d$ are four distinct roots of $P(x)-5$, the factor theorem gives
$$P(x) - 5 = (x-a)(x-b)(x-c)(x-d)\,Q(x)$$
for some $Q \in \mathbb{Z}[x]$. (The quotient has integer coefficients because we are dividing by a **monic** integer polynomial.)

Suppose some integer $k$ has $P(k) = 8$. Substituting $x = k$:
$$3 \;=\; P(k) - 5 \;=\; (k-a)(k-b)(k-c)(k-d)\,Q(k). \tag{$\ast$}$$

Every factor on the right is an integer. In particular
$$(k-a)(k-b)(k-c)(k-d) \ \Big|\ 3 .$$

Note each factor is non-zero: if $k-a = 0$ then $P(k)=P(a)=5 \ne 8$. And since $a,b,c,d$ are distinct, the four integers
$$k-a,\quad k-b,\quad k-c,\quad k-d$$
are **four distinct non-zero integers**.

**How small can such a product be?** To minimise the absolute value of a product of four distinct non-zero integers, take those of smallest absolute value: $1, -1, 2, -2$. Their product has absolute value
$$1\cdot 1\cdot 2\cdot 2 = 4.$$
Any other choice of four distinct non-zero integers uses at least one integer of absolute value $\ge 2$ beyond the two $\pm1$'s, so the absolute value of the product is at least 4.

Therefore
$$\left|(k-a)(k-b)(k-c)(k-d)\right| \ \ge\ 4 .$$

But by $(\ast)$ this quantity divides 3, so its absolute value is 1 or 3 — both less than 4.

Contradiction. Hence no integer $k$ satisfies $P(k)=8$. ∎

**The template.** Whenever an integer polynomial takes the same value at $m$ distinct integers, $P(x) - v$ carries $m$ linear factors, and evaluating anywhere else produces *a product of $m$ distinct non-zero integers*. Comparing that against a small target number is a complete proof. The same argument shows, for instance, that $P(k)$ can never be $5 \pm 1$, $5\pm2$ or $5\pm3$ here — only $|P(k)-5| \ge 4$ is possible.
[/sol]
