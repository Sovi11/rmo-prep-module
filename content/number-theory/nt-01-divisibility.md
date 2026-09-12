---
id: nt-01-divisibility
title: Divisibility, gcd and the Euclidean algorithm
level: Foundation
hours: 4
blurb: The division algorithm, gcd and lcm, Bézout's identity, and the handful of manipulations that start almost every number theory problem.
tags: divisibility, gcd, lcm, Bezout, Euclidean algorithm
link: Yufei Zhao — Modular arithmetic (divisibility, Fermat, Euler, order) :: https://yufeizhao.com/olympiad/mod2.pdf
link: MOTP — Number theory notes :: https://jpsaha.github.io/MOTP/nt/
video: Search: divisibility and Euclidean algorithm olympiad :: https://www.youtube.com/results?search_query=euclidean+algorithm+bezout+olympiad+number+theory
---

## Divisibility

For integers $a, b$ we write $a \mid b$ ("$a$ divides $b$") if there is an integer $k$ with $b = ak$. Note that $a \mid 0$ for every $a$, and $0 \mid b$ only when $b = 0$.

The properties you will use constantly:

- If $a \mid b$ and $a \mid c$ then $a \mid bx + cy$ for **all** integers $x, y$. *(This one sentence does most of the work in elementary number theory.)*
- If $a \mid b$ and $b \mid c$ then $a \mid c$.
- If $a \mid b$ and $b \ne 0$ then $|a| \le |b|$. **This is the bounding tool** — it turns a divisibility into an inequality, and inequalities are finite.

That last point deserves emphasis. When a problem says "$n+1 \mid n^2+3$", the move is:
$$n+1 \mid n^2 + 3 \quad\text{and}\quad n + 1 \mid n^2 - 1 \;\Longrightarrow\; n+1 \mid (n^2+3) - (n^2-1) = 4,$$
so $n + 1 \in \{1, 2, 4\}$ (for positive $n$), giving finitely many candidates to check. **Subtract off a multiple to shrink the right-hand side** — that is the single most common opening move in RMO number theory.

## The division algorithm

> For integers $a$ and $b > 0$ there exist **unique** integers $q, r$ with
> $$a = bq + r, \qquad 0 \le r < b.$$

Uniqueness is what makes case splits legitimate: "every integer is $3q$, $3q+1$ or $3q+2$, and exactly one of these" is a direct consequence.

## GCD and LCM

$\gcd(a,b)$ is the largest integer dividing both (with $\gcd(0,0)$ undefined, $\gcd(a,0) = |a|$). $\operatorname{lcm}(a,b)$ is the smallest positive common multiple.

**Key facts.**

- $\gcd(a,b) \cdot \operatorname{lcm}(a,b) = |ab|$.
- $\gcd(a,b) = \gcd(b, a - kb)$ for any integer $k$. *(The engine of the Euclidean algorithm.)*
- $\gcd(ka, kb) = |k| \gcd(a,b)$.
- If $\gcd(a,b) = 1$ and $a \mid bc$, then $a \mid c$. **(Euclid's lemma, general form.)**
- If $\gcd(a,b)=1$, $a \mid n$ and $b \mid n$, then $ab \mid n$.

That fourth fact is the one people forget. Without coprimality it is false: $4 \mid 2 \cdot 6$ but $4 \nmid 6$.

## The Euclidean algorithm

Repeatedly replace $(a,b)$ by $(b, a \bmod b)$ until the second entry is 0; the first entry is then the gcd.

$$\gcd(1071, 462): \quad 1071 = 2\cdot462 + 147,\; 462 = 3\cdot147 + 21,\; 147 = 7 \cdot 21 + 0 \;\Rightarrow\; \gcd = 21.$$

Running it backwards expresses the gcd as a combination of $a$ and $b$:
$$21 = 462 - 3 \cdot 147 = 462 - 3(1071 - 2\cdot 462) = 7 \cdot 462 - 3 \cdot 1071.$$

## Bézout's identity

> For any integers $a, b$ not both zero, there exist integers $x, y$ with
> $$ax + by = \gcd(a,b).$$
> Moreover $\{ax + by : x, y \in \mathbb{Z}\}$ is exactly the set of multiples of $\gcd(a,b)$.

**Corollary (the form you actually use).** $\gcd(a,b) = 1$ **if and only if** there exist integers $x,y$ with $ax + by = 1$.

The "if" direction is the useful one: to prove two things are coprime, exhibit a combination equal to 1. To show $\gcd(n, n+1) = 1$: $(-1)\cdot n + 1 \cdot (n+1) = 1$. Done.

## Worked example 1

**Find all positive integers $n$ such that $n + 2 \mid n^2 + 8$.**

Since $n+2 \mid (n+2)(n-2) = n^2 - 4$, we get
$$n + 2 \mid (n^2 + 8) - (n^2 - 4) = 12.$$
As $n \ge 1$, $n+2 \ge 3$, so $n + 2 \in \{3, 4, 6, 12\}$, i.e. $n \in \{1, 2, 4, 10\}$.

Conversely, check each: $n=1$ gives $3 \mid 9$ ✓; $n=2$ gives $4 \mid 12$ ✓; $n=4$ gives $6 \mid 24$ ✓; $n=10$ gives $12 \mid 108$ ✓.

Hence $n \in \{1,2,4,10\}$. ∎

*(Observe the "conversely" paragraph. The divisibility argument only shows these are the **candidates**; verification is a separate step.)*

## Worked example 2

**Prove that $\gcd(2^m - 1, 2^n - 1) = 2^{\gcd(m,n)} - 1$.**

Write $m = qn + r$ with $0 \le r < n$. Then
$$2^m - 1 = 2^{qn+r} - 1 = 2^r\left(2^{qn} - 1\right) + \left(2^r - 1\right).$$
Since $2^n - 1 \mid 2^{qn} - 1$ (as $x - 1 \mid x^q - 1$ with $x = 2^n$), reducing modulo $2^n - 1$ gives
$$\gcd(2^m - 1,\, 2^n - 1) = \gcd(2^n - 1,\, 2^r - 1).$$
This is exactly the Euclidean algorithm running on the exponents. Iterating until the remainder is 0 leaves $\gcd(m,n)$ in the exponent, giving $2^{\gcd(m,n)} - 1$. ∎

This identity is worth memorising — it appears constantly.

## A small toolkit of factorisations

These come up so often they should be automatic:

$$a^n - b^n = (a-b)(a^{n-1} + a^{n-2}b + \cdots + b^{n-1})$$
$$a^n + b^n = (a+b)(a^{n-1} - a^{n-2}b + \cdots + b^{n-1}) \quad (n \text{ odd})$$
$$a^2 - b^2 = (a-b)(a+b), \qquad a^3 \pm b^3 = (a \pm b)(a^2 \mp ab + b^2)$$
$$a^4 + 4b^4 = (a^2 + 2b^2 - 2ab)(a^2 + 2b^2 + 2ab) \quad \textbf{(Sophie Germain)}$$

In particular $a - b \mid a^n - b^n$ always, and $a+b \mid a^n + b^n$ for odd $n$.

## Common traps

- Using "$a \mid bc \implies a \mid b$ or $a \mid c$" without $a$ prime. False: $6 \mid 4 \cdot 3$.
- Concluding $ab \mid n$ from $a \mid n$ and $b \mid n$ without checking $\gcd(a,b) = 1$.
- Forgetting that $a \mid b$ gives $|a| \le |b|$ only when $b \ne 0$.
- Finding candidates and calling it a proof. Always verify.

## Problems

### P1 | Warmup | Standard
Find all positive integers $n$ such that $n - 1 \mid n^2 + 3$.
[hint]
$n - 1 \mid n^2 - 1$. Subtract.
[/hint]
[sol]
Since $n-1 \mid n^2 - 1$, we have $n - 1 \mid (n^2+3) - (n^2-1) = 4$.

For $n$ a positive integer with $n \ge 2$ (so $n - 1 \ge 1$), $n - 1 \in \{1,2,4\}$, giving $n \in \{2, 3, 5\}$. The case $n = 1$ gives $n-1 = 0$, and $0 \mid 4$ is false.

Check: $n=2$: $1 \mid 7$ ✓. $n=3$: $2 \mid 12$ ✓. $n=5$: $4 \mid 28$ ✓.

So $n \in \{2,3,5\}$. ∎
[/sol]

### P2 | Warmup | Standard
Prove that $\gcd(n, n+1) = 1$ and $\gcd(n, n+2) \in \{1,2\}$ for every positive integer $n$.
[hint]
For the first, exhibit a Bézout combination. For the second, any common divisor divides the difference.
[/hint]
[sol]
**First.** $1 \cdot (n+1) + (-1) \cdot n = 1$, so by Bézout $\gcd(n,n+1) \mid 1$, hence equals 1. ∎

**Second.** Let $d = \gcd(n, n+2)$. Then $d \mid (n+2) - n = 2$, so $d \in \{1, 2\}$. Both occur: $d = 2$ when $n$ is even, $d=1$ when $n$ is odd. ∎
[/sol]

### P3 | Easy | Standard
Prove that for every integer $n$, $\dfrac{n^5}{5} + \dfrac{n^3}{3} + \dfrac{7n}{15}$ is an integer.
[hint]
Clear denominators: show $15 \mid 3n^5 + 5n^3 + 7n$. Handle divisibility by 3 and by 5 separately, using $n^3 \equiv n \pmod 3$ and $n^5 \equiv n \pmod 5$.
[/hint]
[sol]
Putting over a common denominator, the expression equals $\dfrac{3n^5 + 5n^3 + 7n}{15}$, so it suffices to prove $15 \mid 3n^5 + 5n^3 + 7n$. Since $\gcd(3,5)=1$, it is enough to prove divisibility by 3 and by 5 separately.

**Mod 3.** $3n^5 \equiv 0$, so $3n^5 + 5n^3 + 7n \equiv 5n^3 + 7n \equiv 2n^3 + n \pmod 3$. By Fermat, $n^3 \equiv n \pmod 3$, so this is $2n + n = 3n \equiv 0 \pmod 3$. ✓

**Mod 5.** $5n^3 \equiv 0$, so the expression is $\equiv 3n^5 + 7n \equiv 3n^5 + 2n \pmod 5$. By Fermat, $n^5 \equiv n \pmod 5$, so this is $3n + 2n = 5n \equiv 0 \pmod 5$. ✓

Since $3$ and $5$ are coprime and both divide $3n^5+5n^3+7n$, so does $15$. ∎

*(If you have not met Fermat's little theorem yet, check $n \equiv 0, \pm1 \pmod 3$ and $n \equiv 0,\pm1,\pm2 \pmod 5$ directly — the same conclusion, a little more writing.)*
[/sol]

### P4 | Easy | Standard
Let $a, b$ be positive integers with $\gcd(a,b) = 1$. Prove that $\gcd(a+b, a-b) \in \{1, 2\}$.
[hint]
Let $d$ be the gcd. Then $d$ divides both the sum and difference of $a+b$ and $a-b$.
[/hint]
[sol]
Let $d = \gcd(a+b, a-b)$. Then
$$d \mid (a+b) + (a-b) = 2a, \qquad d \mid (a+b) - (a-b) = 2b.$$
Hence $d \mid \gcd(2a, 2b) = 2\gcd(a,b) = 2$.

So $d \in \{1,2\}$. Both occur: $(a,b) = (2,1)$ gives $\gcd(3,1) = 1$; $(a,b) = (3,1)$ gives $\gcd(4,2) = 2$. ∎

*Refinement:* $d = 2$ exactly when $a$ and $b$ are both odd.
[/sol]

### P5 | Medium | Standard
Find all pairs of positive integers $(a,b)$ such that $ab \mid a^2 + b^2$.
[hint]
Let $d = \gcd(a,b)$, write $a = dx$, $b = dy$ with $\gcd(x,y)=1$, and see what the condition forces about $x$ and $y$.
[/hint]
[sol]
Write $d = \gcd(a,b)$, $a = dx$, $b = dy$ with $\gcd(x,y) = 1$. The condition $ab \mid a^2+b^2$ becomes
$$d^2xy \mid d^2(x^2+y^2) \iff xy \mid x^2 + y^2.$$
Now $x \mid x^2 + y^2$ and $x \mid x^2$, so $x \mid y^2$. Since $\gcd(x,y) = 1$, also $\gcd(x, y^2) = 1$, so $x \mid y^2$ forces $x = 1$. Symmetrically $y = 1$.

Then $xy = 1 \mid 2 = x^2+y^2$ ✓, so the condition holds.

Hence $a = b = d$: the solutions are exactly the pairs $(a,b)$ with $a = b$. Checking: $a^2 \mid 2a^2$ ✓. ∎
[/sol]

### P6 | Medium | Standard
Prove that $\gcd\!\left(\dfrac{a^m - 1}{a-1},\, a - 1\right) = \gcd(m,\, a-1)$ for integers $a > 1$, $m \ge 1$.
[hint]
Write $\frac{a^m-1}{a-1} = 1 + a + a^2 + \cdots + a^{m-1}$ and reduce each term modulo $a - 1$.
[/hint]
[sol]
We have
$$\frac{a^m - 1}{a - 1} = 1 + a + a^2 + \cdots + a^{m-1}.$$
Since $a \equiv 1 \pmod{a-1}$, every term $a^k \equiv 1 \pmod{a-1}$, so
$$1 + a + \cdots + a^{m-1} \equiv \underbrace{1 + 1 + \cdots + 1}_{m} = m \pmod{a-1}.$$
Therefore
$$\gcd\left(\frac{a^m-1}{a-1},\, a-1\right) = \gcd(m,\, a-1),$$
using $\gcd(N, k) = \gcd(N \bmod k, k)$. ∎
[/sol]

### P7 | Medium | CRMO 2012 P2
Let $a,b,c$ be positive integers such that $a \mid b^3$, $b \mid c^3$ and $c \mid a^3$. Prove that $abc \mid (a+b+c)^{13}$.
[hint]
Work one prime at a time. Show $a,b,c$ have the same prime divisors, then compare exponents: if $p^x \| a$, $p^y \| b$, $p^z \| c$ with $x$ minimal, bound $x+y+z$.
[/hint]
[sol]
**Step 1: same prime support.** If a prime $p$ divides $a$, then $p \mid b^3$, so $p \mid b$; then $p \mid c^3$, so $p \mid c$. By symmetry $a$, $b$, $c$ have exactly the same set of prime divisors.

**Step 2: exponents.** Fix a prime $p$ dividing all three, and write $p^x \| a$, $p^y \| b$, $p^z \| c$ (meaning $p^x \mid a$ but $p^{x+1} \nmid a$). WLOG $x = \min\{x,y,z\}$.

From $b \mid c^3$: $y \le 3z$. From $c \mid a^3$: $z \le 3x$. Hence
$$y \le 3z \le 9x,$$
and so
$$x + y + z \le x + 9x + 3x = 13x.$$

**Step 3: conclude.** Since $x$ is the minimum, $p^x$ divides each of $a, b, c$, hence $p^x \mid a+b+c$, hence $p^{13x} \mid (a+b+c)^{13}$. The exponent of $p$ in $abc$ is $x+y+z \le 13x$, so $p^{x+y+z} \mid (a+b+c)^{13}$.

This holds for every prime $p$ dividing $abc$, so $abc \mid (a+b+c)^{13}$. ∎

*(If instead $y$ or $z$ is the minimum, the same argument runs with the roles cycled — the hypotheses are cyclic in $a \to b \to c \to a$, so this really is WLOG.)*
[/sol]

### P8 | Medium | Standard
Prove that $\gcd(2^{2^m}+1,\, 2^{2^n}+1) = 1$ for all $m \ne n$, and deduce that there are infinitely many primes.
[hint]
Show $F_n = 2^{2^n}+1$ satisfies $F_0F_1\cdots F_{n-1} = F_n - 2$. Then a common divisor of $F_m$ and $F_n$ ($m<n$) divides 2.
[/hint]
[sol]
Let $F_n = 2^{2^n} + 1$ (the Fermat numbers).

**Claim.** $F_0 F_1 \cdots F_{n-1} = F_n - 2$ for $n \ge 1$.

*Proof by induction.* For $n=1$: $F_0 = 3$ and $F_1 - 2 = 5 - 2 = 3$ ✓. If it holds for $n$, then
$$F_0 \cdots F_{n-1} F_n = (F_n - 2)F_n = \left(2^{2^n} - 1\right)\left(2^{2^n}+1\right) = 2^{2^{n+1}} - 1 = F_{n+1} - 2. \;∎$$

**Coprimality.** Let $m < n$ and let $d \mid F_m$, $d \mid F_n$. Since $F_m$ appears in the product $F_0\cdots F_{n-1} = F_n - 2$, we get $d \mid F_n - 2$. Combined with $d \mid F_n$, this gives $d \mid 2$. But every $F_k$ is odd, so $d$ is odd, forcing $d = 1$.

**Infinitude of primes.** Each $F_n > 1$ has a prime divisor $p_n$. By the above, $p_m \ne p_n$ for $m \ne n$ (a shared prime would be a common divisor exceeding 1). So $\{p_0, p_1, p_2, \dots\}$ is an infinite set of distinct primes. ∎
[/sol]

### P9 | Hard | Standard
Let $a > 1$ and $m, n$ be positive integers. Prove that $a^m - 1 \mid a^n - 1$ if and only if $m \mid n$.
[hint]
One direction is a factorisation. For the other, use the identity from Worked example 2, or write $n = qm+r$ and reduce.
[/hint]
[sol]
**($\Leftarrow$)** If $n = km$ then with $x = a^m$,
$$a^n - 1 = x^k - 1 = (x-1)(x^{k-1} + \cdots + 1),$$
so $a^m - 1 = x - 1$ divides $a^n - 1$. ✓

**($\Rightarrow$)** Write $n = qm + r$ with $0 \le r < m$. Then
$$a^n - 1 = a^r\left(a^{qm} - 1\right) + \left(a^r - 1\right).$$
By the first direction $a^m - 1 \mid a^{qm} - 1$, so reducing modulo $a^m-1$,
$$a^n - 1 \equiv a^r - 1 \pmod{a^m - 1}.$$
If $a^m - 1 \mid a^n - 1$, then $a^m - 1 \mid a^r - 1$. But $0 \le r < m$ and $a > 1$ give $0 \le a^r - 1 < a^m - 1$. A non-negative integer smaller than $a^m-1$ and divisible by it must be 0, so $a^r - 1 = 0$, i.e. $r = 0$.

Hence $m \mid n$. ∎

**Corollary.** $\gcd(a^m-1, a^n-1) = a^{\gcd(m,n)}-1$, proved the same way.
[/sol]

### P10 | Hard | Classic
Prove that $\dfrac{(2m)!\,(2n)!}{m!\,n!\,(m+n)!}$ is an integer for all non-negative integers $m, n$.
[hint]
Compare the exponent of each prime $p$ on the two sides using Legendre's formula, and the inequality $\lfloor 2x \rfloor + \lfloor 2y \rfloor \ge \lfloor x \rfloor + \lfloor y \rfloor + \lfloor x + y\rfloor$.
[/hint]
[sol]
By Legendre's formula, the exponent of a prime $p$ in $N!$ is $\sum_{k \ge 1} \lfloor N/p^k \rfloor$. So it suffices to show, for every $k$,
$$\left\lfloor \frac{2m}{p^k}\right\rfloor + \left\lfloor \frac{2n}{p^k}\right\rfloor \;\ge\; \left\lfloor \frac{m}{p^k}\right\rfloor + \left\lfloor \frac{n}{p^k}\right\rfloor + \left\lfloor \frac{m+n}{p^k}\right\rfloor.$$

So it is enough to prove the real-number inequality
$$\lfloor 2x \rfloor + \lfloor 2y \rfloor \ge \lfloor x \rfloor + \lfloor y \rfloor + \lfloor x+y \rfloor \qquad (x, y \ge 0).$$

Write $x = \lfloor x \rfloor + \{x\}$, $y = \lfloor y \rfloor + \{y\}$. Then $\lfloor 2x\rfloor = 2\lfloor x \rfloor + \lfloor 2\{x\}\rfloor$ and similarly for $y$, while $\lfloor x+y\rfloor = \lfloor x\rfloor + \lfloor y \rfloor + \lfloor \{x\}+\{y\}\rfloor$. Cancelling $\lfloor x \rfloor + \lfloor y \rfloor$ from both sides, the inequality reduces to
$$\lfloor 2\{x\} \rfloor + \lfloor 2\{y\} \rfloor \ge \lfloor \{x\} + \{y\} \rfloor.$$
The right side is $0$ or $1$, and equals 1 only when $\{x\} + \{y\} \ge 1$ — in which case at least one of $\{x\},\{y\}$ is $\ge 1/2$, making the corresponding term on the left equal to 1. So the inequality holds in every case.

Hence every prime appears to at least as high a power in the numerator as in the denominator, and the quotient is an integer. ∎

*(These are the "super Catalan" numbers. Note how a statement about integrality became a statement about floors — a standard and very reusable move.)*
[/sol]
