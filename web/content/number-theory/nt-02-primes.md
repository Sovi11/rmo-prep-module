---
id: nt-02-primes
title: Primes and unique factorisation
level: Foundation
hours: 4
blurb: The fundamental theorem of arithmetic, divisor counting, Legendre's formula, and p-adic valuation as a way of thinking.
tags: primes, FTA, divisors, Legendre, valuation
link: Yufei Zhao — Modular arithmetic handout :: https://yufeizhao.com/olympiad/mod2.pdf
link: MOTP — Number theory :: https://jpsaha.github.io/MOTP/nt/
video: Search: prime factorisation number of divisors olympiad :: https://www.youtube.com/results?search_query=number+of+divisors+legendre+formula+olympiad
---

## The fundamental theorem of arithmetic

> Every integer $n > 1$ can be written as a product of primes, and **uniquely** so up to the order of factors.

Uniqueness is the whole content — existence is an easy induction. Almost every number theory argument that "compares both sides prime by prime" is quietly invoking uniqueness.

Write the factorisation as
$$n = p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k}.$$

## p-adic valuation

For a prime $p$ and non-zero integer $n$, define $v_p(n)$ to be the exponent of $p$ in the factorisation of $n$. So $v_2(48) = 4$, $v_3(48) = 1$, $v_5(48) = 0$.

The rules are simple and worth internalising, because they turn multiplicative statements into additive ones:

$$v_p(ab) = v_p(a) + v_p(b), \qquad v_p(a/b) = v_p(a) - v_p(b),$$
$$v_p(a + b) \ge \min\big(v_p(a), v_p(b)\big), \text{ with equality if } v_p(a) \ne v_p(b).$$

And the two facts that make it a proof technique:

- $a \mid b \iff v_p(a) \le v_p(b)$ **for every prime $p$**.
- $n$ is a perfect $k$-th power $\iff$ $k \mid v_p(n)$ for every prime $p$.

> **The move.** Faced with a divisibility or a "prove this is a square", fix an arbitrary prime $p$ and compare valuations. It reduces a global statement to an inequality between integers.

Also:
$$v_p(\gcd(a,b)) = \min(v_p(a), v_p(b)), \qquad v_p(\operatorname{lcm}(a,b)) = \max(v_p(a), v_p(b)).$$
Since $\min + \max = $ sum of the two, this instantly gives $\gcd(a,b)\operatorname{lcm}(a,b) = ab$ for positive $a,b$.

## Divisor functions

If $n = p_1^{e_1}\cdots p_k^{e_k}$ then:

- **Number of divisors:** $\displaystyle d(n) = \prod_{i=1}^{k}(e_i + 1)$.
- **Sum of divisors:** $\displaystyle \sigma(n) = \prod_{i=1}^{k}\frac{p_i^{e_i+1}-1}{p_i - 1}$.
- **Product of divisors:** $\displaystyle \prod_{d \mid n} d = n^{d(n)/2}$.

Each follows from the fact that a divisor of $n$ is obtained by choosing an exponent $0 \le f_i \le e_i$ for each prime, independently.

Two consequences that show up in problems:

- $d(n)$ is **odd** if and only if $n$ is a perfect square (every $e_i+1$ odd $\iff$ every $e_i$ even). Equivalently: divisors pair up as $d \leftrightarrow n/d$, and the pairing has a fixed point only when $n$ is a square.
- $d(n)$, $\sigma(n)$ are **multiplicative**: $d(mn) = d(m)d(n)$ when $\gcd(m,n) = 1$.

## Legendre's formula

> The exponent of a prime $p$ in $n!$ is
> $$v_p(n!) = \left\lfloor \frac{n}{p} \right\rfloor + \left\lfloor \frac{n}{p^2} \right\rfloor + \left\lfloor \frac{n}{p^3} \right\rfloor + \cdots$$
> (the sum is finite, as terms vanish once $p^k > n$).

*Why:* among $1, \dots, n$ exactly $\lfloor n/p \rfloor$ are divisible by $p$, of which $\lfloor n/p^2 \rfloor$ are divisible by $p^2$, and so on. Each multiple of $p^j$ is counted $j$ times in total — once in each of the first $j$ terms.

**Example.** How many zeros does $100!$ end in? The answer is $v_5(100!)$ (since $v_2 > v_5$ always):
$$\left\lfloor \tfrac{100}{5}\right\rfloor + \left\lfloor \tfrac{100}{25}\right\rfloor = 20 + 4 = 24.$$

There is also the elegant closed form
$$v_p(n!) = \frac{n - s_p(n)}{p-1},$$
where $s_p(n)$ is the sum of the base-$p$ digits of $n$. This is often the fastest route in problems about $v_p$ of binomial coefficients.

## Primes: the facts worth knowing

- There are infinitely many primes. (Proved in the previous chapter.)
- There are arbitrarily long gaps: $N!+2, N!+3, \dots, N!+N$ are all composite.
- Every prime $p > 3$ is $\equiv \pm 1 \pmod 6$. **This is a workhorse** — it lets you handle "all primes" by two cases.
- $n$ composite $\implies$ $n$ has a prime factor $\le \sqrt n$. (Hence trial division only needs to reach $\sqrt n$.)
- If $p$ is prime and $p \mid ab$ then $p \mid a$ or $p \mid b$. **(Euclid's lemma.)** This is the property that fails for composites and is the real reason uniqueness of factorisation holds.

## Worked example

**Find all $n$ such that $d(n) = 6$.**

If $n = p_1^{e_1}\cdots p_k^{e_k}$ then $\prod (e_i+1) = 6$. The factorisations of 6 into integers $\ge 2$ are $6$ and $2 \times 3$. So either

- $k=1$ with $e_1 + 1 = 6$: $n = p^5$; or
- $k=2$ with $\{e_1+1, e_2+1\} = \{2,3\}$: $n = p^2 q$ with $p \ne q$ primes.

So the answers are exactly $n = p^5$ and $n = p^2q$ ($p \neq q$ prime). The smallest few: $12 = 2^2\cdot3$, $18 = 2\cdot 3^2$, $20$, $28$, $32 = 2^5$, $44, 45, \dots$ ∎

## Common traps

- Assuming a "prime factorisation" argument works for $0$ or $\pm 1$. State $n > 1$.
- Using $v_p(a+b) = \min(v_p(a), v_p(b))$ when the two valuations are **equal** — then the valuation can jump. $v_2(2 + 2) = 2$, not 1.
- Forgetting that $d(n) = \prod(e_i+1)$ requires the $p_i$ to be **distinct**.
- Treating $1$ as prime. It is not, precisely so that factorisation is unique.

## Problems

### P1 | Warmup | Standard
Find the number of divisors of $2^4 \cdot 3^2 \cdot 5^3$, and their sum.
[hint]
Apply the two formulas directly.
[/hint]
[sol]
$d = (4+1)(2+1)(3+1) = 5 \cdot 3 \cdot 4 = 60$.

$$\sigma = \frac{2^5-1}{1}\cdot\frac{3^3-1}{2}\cdot\frac{5^4-1}{4} = 31 \cdot 13 \cdot 156 = 62{,}868. \;∎$$
[/sol]

### P2 | Warmup | Standard
How many trailing zeros does $2026!$ have?
[hint]
Count $v_5$, since 2s are more plentiful than 5s.
[/hint]
[sol]
A trailing zero comes from a factor of $10 = 2 \cdot 5$, so the count is $\min(v_2(2026!), v_5(2026!)) = v_5(2026!)$ because $v_2 > v_5$ (there are more multiples of 2 than of 5 at every level).

$$v_5(2026!) = \left\lfloor \tfrac{2026}{5}\right\rfloor + \left\lfloor \tfrac{2026}{25}\right\rfloor + \left\lfloor \tfrac{2026}{125}\right\rfloor + \left\lfloor \tfrac{2026}{625}\right\rfloor = 405 + 81 + 16 + 3 = 505.$$

So $2026!$ ends in **505** zeros. ∎
[/sol]

### P3 | Easy | Standard
Prove that $d(n)$ is odd if and only if $n$ is a perfect square.
[hint]
Either use $d(n)=\prod(e_i+1)$, or pair each divisor $d$ with $n/d$.
[/hint]
[sol]
**Via the formula.** Write $n = \prod p_i^{e_i}$. Then $d(n) = \prod (e_i+1)$ is odd iff every factor $e_i+1$ is odd, iff every $e_i$ is even, iff $n = \left(\prod p_i^{e_i/2}\right)^2$ is a perfect square. ∎

**Via pairing (more illuminating).** The map $d \mapsto n/d$ is an involution on the set of divisors of $n$. Its orbits have size 2 except where $d = n/d$, i.e. $d^2 = n$. So $d(n)$ is odd exactly when there is such a fixed point, i.e. exactly when $n$ is a perfect square. ∎
[/sol]

### P4 | Easy | Standard
Prove that if $2^n - 1$ is prime then $n$ is prime, and if $2^n+1$ is prime then $n$ is a power of 2.
[hint]
Both directions use the factorisations $x^{ab}-1 = (x^a)^b - 1$ and $x^{ab}+1$ when $b$ is odd.
[/hint]
[sol]
**First.** Suppose $n = ab$ with $1 < a,b < n$. Then, with $x = 2^a$,
$$2^n - 1 = x^b - 1 = (x-1)(x^{b-1} + \cdots + 1),$$
and $x - 1 = 2^a - 1 \ge 3$ while $x^{b-1}+\cdots+1 \ge x + 1 \ge 5$. So $2^n-1$ is a product of two factors each $> 1$, hence composite. Contrapositively, $2^n-1$ prime $\implies n$ prime. ∎

**Second.** Suppose $n$ is not a power of 2, so $n = ab$ with $b > 1$ odd. With $x = 2^a$,
$$2^n + 1 = x^b + 1 = (x+1)(x^{b-1} - x^{b-2} + \cdots + 1),$$
using $b$ odd. Here $x + 1 = 2^a+1 \ge 3$, and the second factor is $\ge x - 1 \ge 1$; in fact it exceeds 1 since $b \ge 3$. So $2^n+1$ is composite. ∎

*(The converses are false: $2^{11}-1 = 23 \cdot 89$, and $2^{32}+1 = 641 \cdot 6700417$.)*
[/sol]

### P5 | Medium | Standard
Find all positive integers $n$ for which $n$ has exactly 10 divisors and $n$ is divisible by 6.
[hint]
$d(n) = 10 = 10$ or $2\times5$. Combine with $2 \mid n$ and $3 \mid n$, which forces at least two distinct primes.
[/hint]
[sol]
Since $6 \mid n$, both 2 and 3 divide $n$, so $n$ has at least two distinct prime factors.

$d(n) = 10$ with $n = \prod p_i^{e_i}$ means $\prod (e_i+1) = 10$. Factorisations of 10 into factors $\ge 2$: $10$, and $2 \times 5$. The first gives $k=1$ (one prime), which is excluded. So $k = 2$ and $\{e_1, e_2\} = \{1, 4\}$.

Hence $n = p^4 q$ with $p \ne q$ primes, and $\{p,q\} = \{2,3\}$ since exactly two primes divide $n$ and both 2 and 3 must. Two possibilities:
$$n = 2^4 \cdot 3 = 48, \qquad n = 3^4 \cdot 2 = 162.$$

Check: $d(48) = 5\cdot 2 = 10$ ✓ and $6 \mid 48$ ✓; $d(162) = 5 \cdot 2 = 10$ ✓ and $6 \mid 162$ ✓.

So $n \in \{48, 162\}$. ∎
[/sol]

### P6 | Medium | Standard
Prove that $\displaystyle\binom{2n}{n}$ is divisible by $n+1$ for all $n \ge 0$.
[hint]
Show $\frac{1}{n+1}\binom{2n}{n} = \binom{2n}{n} - \binom{2n}{n+1}$.
[/hint]
[sol]
We claim
$$\binom{2n}{n} - \binom{2n}{n+1} = \frac{1}{n+1}\binom{2n}{n}.$$

Indeed,
$$\binom{2n}{n+1} = \frac{(2n)!}{(n+1)!\,(n-1)!} = \frac{(2n)!}{n!\,n!}\cdot\frac{n!\,n!}{(n+1)!\,(n-1)!} = \binom{2n}{n}\cdot\frac{n}{n+1}.$$
Hence
$$\binom{2n}{n} - \binom{2n}{n+1} = \binom{2n}{n}\left(1 - \frac{n}{n+1}\right) = \frac{1}{n+1}\binom{2n}{n}.$$

The left side is a difference of two binomial coefficients, hence an integer. Therefore $(n+1) \mid \binom{2n}{n}$. ∎

*(The quotient is the $n$-th Catalan number $C_n$; you will meet it again in combinatorics.)*
[/sol]

### P7 | Medium | Standard
Prove that for any positive integer $n$, the product of the divisors of $n$ equals $n^{d(n)/2}$.
[hint]
Pair each divisor $d$ with $n/d$ and multiply everything together.
[/hint]
[sol]
Let $P = \prod_{d \mid n} d$. As $d$ runs over the divisors of $n$, so does $n/d$ (the map is a bijection of the divisor set to itself). Hence
$$P = \prod_{d \mid n} \frac{n}{d} = \frac{n^{d(n)}}{P}.$$
Therefore $P^2 = n^{d(n)}$, and since $P > 0$, $P = n^{d(n)/2}$. ∎

Note this is a genuine integer even when $d(n)$ is odd: in that case $n$ is a perfect square, so $n^{d(n)/2} = (\sqrt n)^{d(n)}$ is an integer.
[/sol]

### P8 | Medium | Standard
Show that there are infinitely many primes of the form $4k+3$.
[hint]
Mimic Euclid, but build $N = 4p_1p_2\cdots p_k - 1$ and use: a product of numbers $\equiv 1 \pmod 4$ is $\equiv 1 \pmod 4$.
[/hint]
[sol]
Suppose only finitely many primes are $\equiv 3 \pmod 4$; call them $p_1 = 3, p_2, \dots, p_k$. Set
$$N = 4p_1p_2\cdots p_k - 1.$$
Then $N \equiv -1 \equiv 3 \pmod 4$, and $N > 1$.

$N$ is odd, so all its prime factors are odd, hence each is $\equiv 1$ or $3 \pmod 4$. If **all** its prime factors were $\equiv 1 \pmod 4$, their product would be $\equiv 1 \pmod 4$ — but $N \equiv 3$. So $N$ has a prime factor $q \equiv 3 \pmod 4$.

By assumption $q = p_i$ for some $i$. But $p_i \mid 4p_1\cdots p_k$ and $p_i \mid N$, so $p_i \mid 4p_1\cdots p_k - N = 1$ — impossible.

Hence there are infinitely many primes $\equiv 3 \pmod 4$. ∎

*(The same trick does **not** immediately work for $4k+1$, because a product of numbers $\equiv 3 \pmod 4$ need not be $\equiv 3$. That case needs quadratic residues.)*
[/sol]

### P9 | Hard | Standard
Find all positive integers $n$ such that $n$, $n+1$, $n+2$ have the same number of divisors... or prove infinitely many exist.
[hint]
Try small cases by hand first, up to $n = 60$ say. This is an exploration problem: the answer is that infinitely many exist, but finding a pattern is the work. Look at $n \equiv 1 \pmod 4$ with specific shapes.
[/hint]
[sol]
Small cases: computing $d(n)$ for $n = 1, 2, 3, \dots$

$$d(33)=4,\ d(34)=4,\ d(35)=4 \quad\checkmark$$
$$d(85)=4,\ d(86)=4,\ d(87)=4 \quad\checkmark$$
$$d(93)=4,\ d(94)=4,\ d(95)=4 \quad\checkmark$$

Each of these is a run of three consecutive numbers each being a product of two distinct primes ($33 = 3\cdot11$, $34 = 2\cdot 17$, $35 = 5\cdot 7$).

**It is known that infinitely many such $n$ exist**, but no elementary proof is available — the statement is genuinely hard, and the density-type arguments needed are well beyond RMO.

**What this problem is really for.** Not every plausible-looking statement has an elementary proof, and part of exam judgement is recognising when a problem you invented (or misremembered) is out of reach. On a real paper, the "find all" version would come with a bound, e.g. *"find all $n < 100$"* — which is a finite check and a legitimate problem.

Do the finite version: for $n \le 100$, the solutions are $n = 33, 85, 93$.
[/sol]

### P10 | Hard | Standard
Let $p$ be a prime and $n$ a positive integer. Prove that $v_p\!\left(\binom{2n}{n}\right) \le \log_p(2n)$, and deduce $\binom{2n}{n} < (2n)^{\pi(2n)}$ where $\pi(x)$ counts primes $\le x$.
[hint]
Use Legendre: $v_p\binom{2n}{n} = \sum_k \left(\lfloor 2n/p^k\rfloor - 2\lfloor n/p^k \rfloor\right)$, and each bracket is 0 or 1. How many terms are non-zero?
[/hint]
[sol]
By Legendre's formula,
$$v_p\!\left(\binom{2n}{n}\right) = v_p((2n)!) - 2v_p(n!) = \sum_{k \ge 1}\left(\left\lfloor \frac{2n}{p^k}\right\rfloor - 2\left\lfloor \frac{n}{p^k}\right\rfloor\right).$$

**Each bracket is 0 or 1.** Indeed for any real $x$, $\lfloor 2x \rfloor - 2\lfloor x \rfloor = \lfloor 2\{x\}\rfloor \in \{0,1\}$.

**Only finitely many are non-zero.** The term for index $k$ vanishes as soon as $p^k > 2n$, since then both floors are 0. So the non-zero terms have $k \le \log_p(2n)$, and
$$v_p\!\left(\binom{2n}{n}\right) \le \left\lfloor \log_p(2n)\right\rfloor \le \log_p(2n).$$

**Deduction.** Every prime dividing $\binom{2n}{n}$ is at most $2n$ (it divides $(2n)!$). So
$$\binom{2n}{n} = \prod_{p \le 2n} p^{\,v_p\binom{2n}{n}} \le \prod_{p \le 2n} p^{\log_p(2n)} = \prod_{p \le 2n} 2n = (2n)^{\pi(2n)},$$
using $p^{\log_p(2n)} = 2n$. ∎

*(This is the key lemma in Erdős's proof of Bertrand's postulate. It is a beautiful illustration of the valuation method: a statement about a huge number reduced to a bound on each exponent separately.)*
[/sol]
