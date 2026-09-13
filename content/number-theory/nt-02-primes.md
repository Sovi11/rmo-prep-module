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
Find the number of divisors of $N = 2^4\cdot3^2\cdot5^3$, and the sum of those divisors.
[hint]
A divisor is built by choosing, independently, how many 2s, how many 3s and how many 5s to include.
[/hint]
[sol]
**What is being asked.** Two counts about the divisors of a number given in factored form. Because it is already factored, we never need to list anything.

**Finding the idea.** Ask what a divisor of $N$ *looks like*. Any divisor $d$ must itself be built only from the primes 2, 3 and 5 — it cannot contain a prime that $N$ does not have. And it cannot use more copies of a prime than $N$ has. So
$$d = 2^{i}\,3^{j}\,5^{k}, \qquad 0\le i\le 4,\quad 0\le j\le2,\quad 0\le k\le3,$$
and every such choice gives a different divisor (by uniqueness of prime factorisation). Counting divisors is therefore just counting these choices.

**Number of divisors.**

The exponent $i$ has $4+1 = 5$ possible values (namely $0,1,2,3,4$ — do not forget 0). Likewise $j$ has $2+1 = 3$ values and $k$ has $3+1=4$. The three choices are independent, so by the multiplication principle
$$d(N) = 5\times3\times4 = 60.$$

**Sum of divisors.**

Here is the trick that makes this easy. Expand the product
$$\left(2^0+2^1+2^2+2^3+2^4\right)\left(3^0+3^1+3^2\right)\left(5^0+5^1+5^2+5^3\right).$$
When you multiply this out, each term comes from picking one power of 2, one of 3 and one of 5 — which is exactly one divisor of $N$. Every divisor appears exactly once. So this product **is** the sum of the divisors.

Evaluate each bracket as a geometric series:
$$2^0+\cdots+2^4 = \frac{2^5-1}{2-1} = 31,$$
$$3^0+3^1+3^2 = \frac{3^3-1}{3-1} = \frac{26}{2} = 13,$$
$$5^0+\cdots+5^3 = \frac{5^4-1}{5-1} = \frac{624}{4} = 156.$$

Therefore
$$\sigma(N) = 31\times13\times156 = 403\times156 = 62{,}868.$$

**Answers:** $d(N) = 60$ and $\sigma(N) = 62{,}868$. ∎

**Sanity check on a tiny case.** Take $N = 12 = 2^2\cdot3$. The formula gives $d = 3\times2 = 6$ and $\sigma = (1+2+4)(1+3) = 7\times4 = 28$. Listing them: $1,2,3,4,6,12$ — six divisors ✓ summing to $28$ ✓.

**What to take away.** Both formulas come from the same picture: *a divisor is an independent choice of exponent for each prime.* If you remember the picture you never need to memorise
$$d(N) = \prod(e_i+1), \qquad \sigma(N) = \prod\frac{p_i^{e_i+1}-1}{p_i-1}$$
— you can rebuild them in ten seconds.
[/sol]

### P2 | Warmup | Standard
How many zeros does $2026!$ end in?
[hint]
A trailing zero comes from a factor of 10, and $10 = 2\times5$. Which of the two primes is scarcer?
[/hint]
[sol]
**What is being asked.** $2026!$ is an astronomically large number; we are not going to compute it. We want only how many 0s it ends with.

**Finding the idea.** A number ends in exactly $k$ zeros when $10^k$ divides it but $10^{k+1}$ does not. Since $10 = 2\times5$, the number of trailing zeros is
$$\min\Big(v_2(2026!),\ v_5(2026!)\Big),$$
where $v_p$ counts how many times $p$ divides the number.

Which is smaller? Among $1,\dots,2026$ there are far more multiples of 2 than of 5, so 5 is the scarce resource:
$$v_2(2026!) > v_5(2026!).$$
So the answer is simply $v_5(2026!)$, and we never need to compute $v_2$.

**The computation.** By **Legendre's formula**,
$$v_5(2026!) = \left\lfloor\frac{2026}{5}\right\rfloor+\left\lfloor\frac{2026}{25}\right\rfloor+\left\lfloor\frac{2026}{125}\right\rfloor+\left\lfloor\frac{2026}{625}\right\rfloor+\left\lfloor\frac{2026}{3125}\right\rfloor+\cdots$$

Term by term:

| divisor | quotient | floor | what it counts |
|---|---|---|---|
| $5$ | $405.2$ | $405$ | multiples of 5 |
| $25$ | $81.04$ | $81$ | extra 5 from multiples of 25 |
| $125$ | $16.2$ | $16$ | extra 5 from multiples of 125 |
| $625$ | $3.24$ | $3$ | extra 5 from multiples of 625 |
| $3125$ | $0.65$ | $0$ | stop |

Adding:
$$405+81+16+3 = 505.$$

**Answer:** $2026!$ ends in **505** zeros. ∎

**Why the formula looks like that.** The first term counts every multiple of 5 in $1,\dots,2026$ — each contributes at least one factor of 5. But a multiple of 25 contributes *two* factors, and the first term only counted one of them, so the second term picks up the extra one. A multiple of 125 contributes three, counted once in each of the first three terms. So each number is counted exactly as many times as the number of 5s it actually has. Understanding this means you never mis-remember the formula.

**What to take away.** For factorials, the exponent of a prime is a sum of floors — and for trailing zeros, only the *scarcer* prime matters. Both ideas reappear constantly.
[/sol]

### P3 | Easy | Standard
Prove that the number of divisors $d(n)$ is odd if and only if $n$ is a perfect square.
[hint]
Two proofs are available. One uses the formula $d(n)=\prod(e_i+1)$. The other pairs each divisor $d$ with its partner $n/d$ — and asks when a divisor is its own partner.
[/hint]
[sol]
**What is being asked.** An "if and only if", so both directions are needed. The statement is a little surprising at first — most numbers have an even number of divisors, and squares are the exception.

**Proof 1 — via the formula.**

Write the factorisation $n = p_1^{e_1}p_2^{e_2}\cdots p_k^{e_k}$. Then
$$d(n) = (e_1+1)(e_2+1)\cdots(e_k+1).$$

A product of integers is odd exactly when **every** factor is odd. So:
$$d(n)\text{ odd} \iff e_i+1 \text{ odd for every } i \iff e_i \text{ even for every } i.$$

And "every exponent even" is exactly what it means for $n$ to be a perfect square: if each $e_i = 2f_i$, then
$$n = \left(p_1^{f_1}p_2^{f_2}\cdots p_k^{f_k}\right)^2,$$
and conversely squaring any integer doubles every exponent. ∎

**Proof 2 — via pairing (this one explains *why*).**

Consider the map that sends each divisor $d$ of $n$ to its **partner** $n/d$. This is again a divisor of $n$, and applying the map twice returns you to $d$ — so it pairs the divisors up.

If every divisor had a *different* partner, the divisors would fall into disjoint pairs and $d(n)$ would be even. So $d(n)$ is odd exactly when some divisor is its own partner:
$$d = \frac nd \iff d^2 = n \iff d = \sqrt n.$$

That happens precisely when $n$ is a perfect square — and then there is exactly **one** such self-paired divisor, namely $\sqrt n$, so $d(n)$ is (an even number) $+\,1$, which is odd. ∎

**Seeing it concretely.**

- $n = 12$: divisors $1,2,3,4,6,12$, pairing as $(1,12), (2,6), (3,4)$ — three clean pairs, so $d=6$, even ✓ and 12 is not a square.
- $n = 36$: divisors $1,2,3,4,6,9,12,18,36$, pairing as $(1,36),(2,18),(3,12),(4,9)$ and then **6 left alone**, because $6 = 36/6$. So $d = 9$, odd ✓ and $36 = 6^2$.

**What to take away.** *Pairing arguments* — find an involution on a set and count its fixed points — are one of the most reusable ideas in the whole of olympiad mathematics. You will meet the same move again in combinatorics (P8 of the digits chapter uses it to sum a set of fractions). Proof 1 is shorter; Proof 2 is the one that generalises.
[/sol]

### P4 | Easy | Standard
Prove that if $2^n-1$ is prime then $n$ is prime, and that if $2^n+1$ is prime then $n$ is a power of 2.
[hint]
Both are **contrapositives**: assume $n$ factors in the bad way, and exhibit a factorisation of the big number. The identities $x^b-1 = (x-1)(\cdots)$ and, for odd $b$, $x^b+1 = (x+1)(\cdots)$ are what you need.
[/hint]
[sol]
**What is being asked.** Two implications about when these famous numbers can be prime. Note both are one-directional — the converses are false, and we will see counterexamples.

**Finding the idea.** Proving "$2^n-1$ prime $\implies n$ prime" directly is awkward. The **contrapositive** is much easier:

> if $n$ is *not* prime, show $2^n-1$ is *not* prime.

"Not prime" means we can write $n = ab$ with $1<a,b<n$, and then we must *produce a factorisation* of $2^n-1$. The tool is the factorisation of $x^b-1$, applied with $x = 2^a$.

**Part 1: $2^n-1$ prime $\implies$ $n$ prime.**

Suppose $n$ is composite, say $n = ab$ with $1<a<n$ and $1<b<n$. Put $x = 2^a$. Then
$$2^n - 1 = 2^{ab}-1 = \left(2^a\right)^b - 1 = x^b-1 = (x-1)\left(x^{b-1}+x^{b-2}+\cdots+x+1\right).$$

For this to prove compositeness we must check **both factors exceed 1** (otherwise the factorisation is trivial):
- $x - 1 = 2^a - 1 \ge 2^2-1 = 3 > 1$, since $a\ge2$.
- The second factor is a sum of $b\ge2$ terms, each at least 1, with the leading term $x^{b-1}\ge x = 2^a\ge4$. So it is at least 5, certainly $>1$.

So $2^n-1$ is a product of two integers each greater than 1: it is composite. Taking the contrapositive, if $2^n-1$ is prime then $n$ is prime. ∎

**Part 2: $2^n+1$ prime $\implies$ $n$ is a power of 2.**

Again, contrapositive. Suppose $n$ is **not** a power of 2. Then $n$ has an odd factor greater than 1: write $n = ab$ with $b>1$ odd (and $a \ge 1$).

The key identity, valid only because $b$ is **odd**, is
$$x^b+1 = (x+1)\left(x^{b-1}-x^{b-2}+x^{b-3}-\cdots-x+1\right).$$
*(Check the sign pattern on $b=3$: $(x+1)(x^2-x+1) = x^3+1$ ✓. For even $b$ it fails — $x^2+1$ does not factor over the integers.)*

Put $x = 2^a$, so $2^n+1 = x^b+1$ and
$$2^n+1 = \left(2^a+1\right)\left(x^{b-1}-x^{b-2}+\cdots+1\right).$$

Both factors exceed 1:
- $2^a+1 \ge 3 > 1$.
- The second factor equals $\frac{2^n+1}{2^a+1}$, and since $b\ge3$ we have $2^n+1 > \left(2^a+1\right)^2$ — hmm, more simply: the second factor is $\ge x^{b-1} - x^{b-2} = x^{b-2}(x-1) \ge 1\cdot 1 = 1$, and it is strictly bigger than 1 because $b \ge 3$ makes it at least $x^2-x+1 \ge 3$.

So $2^n+1$ is composite. Contrapositively, $2^n+1$ prime forces $n$ to be a power of 2. ∎

**The converses are false** — worth knowing so you do not over-claim:
- $n = 11$ is prime, but $2^{11}-1 = 2047 = 23\times89$ is not.
- $n = 32$ is a power of 2, but $2^{32}+1 = 4294967297 = 641\times6700417$ is not (this is Euler's famous refutation of a guess of Fermat).

**What to take away.** *To prove "X prime $\implies$ Y has property P", try proving the contrapositive by explicitly factoring.* And note the asymmetry: $x^b-1$ always has the factor $x-1$, while $x^b+1$ has the factor $x+1$ **only when $b$ is odd**. Confusing those two costs the problem.
[/sol]

### P5 | Medium | Standard
Find all positive integers $n$ that have exactly 10 divisors and are divisible by 6.
[hint]
$d(n)=10$ constrains the *shape* of the factorisation, because 10 has few factorisations. Being divisible by 6 forces at least two distinct primes.
[/hint]
[sol]
**What is being asked.** Two conditions at once. The divisor count pins down the shape of $n$'s factorisation; the divisibility by 6 pins down which primes appear.

**Finding the idea.** Start with $d(n)=10$. Writing $n = p_1^{e_1}\cdots p_k^{e_k}$, we need
$$(e_1+1)(e_2+1)\cdots(e_k+1) = 10.$$
Each factor $e_i+1$ is at least 2 (since $e_i\ge1$ for a prime actually appearing). So we need to write 10 as a product of integers each $\ge 2$ — and there are very few ways.

**Step 1: the possible shapes.**

The factorisations of 10 into factors $\ge2$ are:
$$10 = 10 \qquad\text{and}\qquad 10 = 2\times5.$$
(Note $10 = 2\times5$ and $5\times2$ are the same up to reordering the primes.)

So either
- **$k = 1$**, with $e_1+1 = 10$, giving $n = p^9$ for a single prime $p$; or
- **$k = 2$**, with $\{e_1+1, e_2+1\} = \{2,5\}$, giving $n = p^4q$ with $p\ne q$ primes.

**Step 2: apply "divisible by 6".**

$6 = 2\times3$, so both 2 and 3 divide $n$. That means $n$ has **at least two distinct prime factors**, which immediately rules out the shape $n = p^9$.

So $n = p^4 q$ with $p\ne q$ prime. Since $n$ has exactly two distinct primes and both 2 and 3 must be among them,
$$\{p,q\} = \{2,3\}.$$

**Step 3: the two possibilities.**

The exponents 4 and 1 can be assigned either way round:
$$n = 2^4\cdot3 = 48 \qquad\text{or}\qquad n = 3^4\cdot 2 = 162.$$

**Step 4: verify both.**

| $n$ | factorisation | $d(n)$ | divisible by 6? |
|---|---|---|---|
| 48 | $2^4\cdot3$ | $(4+1)(1+1) = 10$ ✓ | $48 = 6\times8$ ✓ |
| 162 | $2\cdot3^4$ | $(1+1)(4+1) = 10$ ✓ | $162 = 6\times27$ ✓ |

**Answer:** $n \in \{48,\ 162\}$. ∎

**A common slip.** It is tempting to allow $n = p^4q$ with a *third* prime hiding somewhere — but the shape came from $d(n)=10$, which fixes the number of distinct primes at exactly 2. If a third prime $r$ appeared, $d(n)$ would pick up another factor $(e_r+1)\ge2$ and exceed 10. Say this explicitly in a write-up.

**What to take away.** *A divisor count constrains the shape of the factorisation, not the primes; a divisibility constrains the primes, not the shape.* Combining one of each is a standard problem design, and the method is always: shapes first, then primes, then verify.
[/sol]

### P6 | Medium | Standard
Prove that $n+1$ divides $\displaystyle\binom{2n}{n}$ for every $n\ge0$.
[hint]
Rather than working with factorials, look for an identity expressing $\frac{1}{n+1}\binom{2n}{n}$ as a **difference of two binomial coefficients** — a difference of integers is automatically an integer.
[/hint]
[sol]
**What is being asked.** $\binom{2n}{n}$ is an integer; we must show it stays an integer after dividing by $n+1$. For $n=3$: $\binom63 = 20$ and $\frac{20}{4} = 5$ ✓. For $n=4$: $\binom84 = 70$ and $\frac{70}{5}=14$ ✓.

**Finding the idea.** Direct factorial manipulation is messy. A much better strategy for "this quantity is an integer":

> Express it as a **difference of two things already known to be integers**.

Binomial coefficients are integers, so if we can write $\frac{1}{n+1}\binom{2n}{n}$ as $\binom{2n}{n} - \binom{2n}{n+1}$, we are finished in one line. Let us check whether that is true.

**The proof.**

*Step 1: relate the two binomial coefficients.* Compare $\binom{2n}{n+1}$ with $\binom{2n}{n}$ by writing both out:
$$\binom{2n}{n+1} = \frac{(2n)!}{(n+1)!\,(n-1)!}, \qquad \binom{2n}{n} = \frac{(2n)!}{n!\,n!}.$$
Divide one by the other:
$$\frac{\binom{2n}{n+1}}{\binom{2n}{n}} = \frac{n!\,n!}{(n+1)!\,(n-1)!} = \frac{n!}{(n+1)!}\cdot\frac{n!}{(n-1)!} = \frac{1}{n+1}\cdot n = \frac{n}{n+1}.$$

So
$$\binom{2n}{n+1} = \frac{n}{n+1}\binom{2n}{n}.$$

*Step 2: subtract.*
$$\binom{2n}{n} - \binom{2n}{n+1} = \binom{2n}{n} - \frac{n}{n+1}\binom{2n}{n} = \binom{2n}{n}\left(1 - \frac{n}{n+1}\right) = \binom{2n}{n}\cdot\frac{1}{n+1}.$$

*Step 3: conclude.* The left-hand side is a difference of two binomial coefficients, hence an **integer**. Therefore
$$\frac{1}{n+1}\binom{2n}{n} \in \mathbb{Z}, \qquad\text{i.e.}\qquad (n+1) \ \Big|\ \binom{2n}{n}. \;∎$$

*(For $n=0$: $\binom00 = 1$ and $n+1=1$ ✓.)*

**Check the identity numerically.** $n=4$: $\binom84 = 70$, $\binom85 = 56$, and $70-56 = 14 = \frac{70}{5}$ ✓

**What this number is.** The quotient
$$C_n = \frac{1}{n+1}\binom{2n}{n} = 1, 1, 2, 5, 14, 42, \dots$$
is the $n$-th **Catalan number**, one of the most common sequences in combinatorics — it counts balanced bracket strings, lattice paths below the diagonal, triangulations of a polygon, and much else. You will meet it again in the recursion chapter.

**What to take away.** *To prove something is an integer, write it as a sum or difference of integers.* This is often easier than any divisibility argument, and it is exactly what happened here.
[/sol]

### P7 | Medium | Standard
Prove that the product of all positive divisors of $n$ equals $n^{d(n)/2}$.
[hint]
Pair each divisor with its partner, exactly as in P3 — but this time multiply instead of count.
[/hint]
[sol]
**What is being asked.** For example $n = 12$ has divisors $1,2,3,4,6,12$ whose product is $1\cdot2\cdot3\cdot4\cdot6\cdot12 = 1728$, and the claim says this equals $12^{6/2} = 12^3 = 1728$ ✓.

**Finding the idea.** The same pairing as in P3: divisors come in couples $\left(d,\ \frac nd\right)$ whose **product is $n$**. If there are $d(n)$ divisors forming $\frac{d(n)}{2}$ couples, the total product is $n^{d(n)/2}$. The only awkwardness is when $d(n)$ is odd (a square), and the slick proof below handles that automatically.

**The proof (no cases needed).**

Let
$$P = \prod_{d\,\mid\,n} d$$
be the product of all positive divisors of $n$.

*Key observation:* as $d$ runs over all divisors of $n$, so does $\frac nd$ — the map $d\mapsto \frac nd$ is a bijection from the set of divisors to itself (it is its own inverse, and $\frac nd$ is always a divisor).

Therefore, multiplying over the divisors in this re-indexed order gives the **same** product:
$$P = \prod_{d\,\mid\,n}\frac{n}{d} = \frac{n^{d(n)}}{\prod_{d\mid n}d} = \frac{n^{d(n)}}{P},$$
where the numerator is $n$ multiplied once for each of the $d(n)$ divisors.

Multiplying both sides by $P$:
$$P^2 = n^{d(n)}.$$

Since $P>0$ and $n>0$, taking positive square roots gives
$$P = n^{d(n)/2}. \;∎$$

**Is the answer always an integer?** Yes, and it is worth noting why, since $\frac{d(n)}{2}$ may be a half-integer. If $d(n)$ is odd, then by P3 $n$ is a perfect square, say $n = s^2$, and then
$$n^{d(n)/2} = \left(s^2\right)^{d(n)/2} = s^{d(n)},$$
a genuine integer.

**Check both parities.**
- $n=12$ (not a square): $d = 6$, product $= 12^3 = 1728$, and $1\cdot2\cdot3\cdot4\cdot6\cdot12 = 1728$ ✓
- $n=9$ (a square): $d=3$, product $= 9^{1.5} = 27$, and $1\cdot3\cdot9 = 27$ ✓

**What to take away.** The trick "re-index a product by a bijection of the index set, then compare with the original" is extremely powerful and shows up everywhere. Here it turned a case-split about odd/even into a single line.
[/sol]

### P8 | Medium | Standard
Show that there are infinitely many primes of the form $4k+3$.
[hint]
Mimic Euclid's proof, but build the number so that it is $\equiv 3 \pmod 4$. Then use: a product of numbers all $\equiv 1 \pmod 4$ is itself $\equiv1\pmod4$.
[/hint]
[sol]
**What is being asked.** Primes are $2$, or odd; odd primes are $\equiv1$ or $\equiv3$ modulo 4. We must show the second kind never runs out. (Examples: $3, 7, 11, 19, 23, 31,\dots$)

**Finding the idea.** Euclid's proof of infinitude multiplies all the supposed primes and adds 1. Here we need a variation, because we must control the number **modulo 4**. Two ingredients:

1. Build $N$ so that $N\equiv3\pmod 4$ — then $N$ cannot be built entirely from primes $\equiv1\pmod4$, because such a product is $\equiv1$.
2. Build $N$ so that none of the assumed primes divides it.

**The proof.**

Suppose for contradiction that there are only finitely many primes congruent to $3$ mod 4; list them as
$$p_1 = 3,\ p_2,\ \dots,\ p_k.$$

Define
$$N = 4\,p_1p_2\cdots p_k - 1.$$

*Step 1: $N \equiv 3 \pmod 4$.* Indeed $N = 4(\cdots) - 1 \equiv -1 \equiv 3 \pmod 4$. Also $N > 1$, since $p_1 = 3$ makes $4p_1\cdots p_k \ge 12$.

*Step 2: $N$ has a prime factor $\equiv3\pmod4$.*

$N$ is odd (it is $4m-1$), so all its prime factors are odd, hence each is $\equiv1$ or $\equiv3$ mod 4.

Suppose **all** of them were $\equiv1\pmod4$. A product of numbers each $\equiv1$ mod 4 is again $\equiv1$ mod 4 (multiply the congruences: $1\times1\times\cdots\times1 = 1$). So $N\equiv1\pmod4$ — contradicting Step 1.

Therefore at least one prime factor $q$ of $N$ satisfies $q\equiv3\pmod4$.

*Step 3: derive the contradiction.* By our assumption, the complete list of primes $\equiv3$ mod 4 is $p_1,\dots,p_k$, so $q = p_i$ for some $i$.

But then $p_i$ divides $4p_1p_2\cdots p_k$ (it is one of the factors), and $p_i$ divides $N$. So $p_i$ divides their difference:
$$p_i \ \big|\ 4p_1\cdots p_k - N = 1.$$
That is impossible, since $p_i \ge 3$.

**Conclusion.** The assumption was false: there are infinitely many primes $\equiv3\pmod4$. ∎

**Why the same trick does not work for $4k+1$.** If we tried to build $N\equiv1\pmod4$, we would learn nothing, because a product of numbers $\equiv3$ mod 4 is *not* forced to be $\equiv3$ — two of them multiply to $9\equiv1$. The asymmetry is real: proving there are infinitely many primes $\equiv1\pmod4$ needs a genuinely different idea (one considers $N = (2p_1\cdots p_k)^2+1$ and uses the fact that odd prime divisors of $x^2+1$ are $\equiv1\pmod 4$ — see the Fermat/Euler chapter, P5).

**What to take away.** Euclid's argument is a *template*, not a single proof: choose $N$ so that (i) the residue class you care about is forced, and (ii) none of the listed primes can divide $N$. Getting (i) right is where the thought goes.
[/sol]

### P9 | Medium | Standard
Let $p$ be a prime and $n$ a positive integer with $1 \le n < p$. Prove that $p$ divides $\displaystyle\binom pn$, and deduce that $(x+y)^p\equiv x^p+y^p \pmod p$ for all integers $x,y$.
[hint]
Use the identity $n\binom pn = p\binom{p-1}{n-1}$, then use primality to say where the factor $p$ must go.
[/hint]
[sol]
**What is being asked.** Two linked claims. First, in a prime row of Pascal's triangle every entry except the two 1s is divisible by $p$. Check $p=5$: the row is $1, 5, 10, 10, 5, 1$ — and indeed $5,10,10,5$ are all multiples of 5 ✓. Second, a consequence about expanding a $p$-th power modulo $p$.

**Finding the idea for the first part.** We want to say "$p$ appears in the numerator $p!$ but nothing in the denominator $n!(p-n)!$ can cancel it". Making that precise is cleanest through the identity
$$n\binom pn = p\binom{p-1}{n-1},$$
which is the "committee–chair" identity: both sides count the ways to choose an $n$-person committee from $p$ people together with a chair from the committee.

**Part 1: $p \mid \binom pn$.**

From the identity,
$$n\binom pn = p\binom{p-1}{n-1},$$
the right-hand side is visibly a multiple of $p$. Hence
$$p \ \Big|\ n\binom pn.$$

Now use that $p$ is **prime**: if a prime divides a product, it divides one of the factors. So either $p\mid n$ or $p \mid \binom pn$.

But we are told $1\le n<p$, so $p \nmid n$ (the only multiple of $p$ below $p$ is 0, and $n\ge1$).

Therefore
$$p \ \Big|\ \binom pn. \;∎$$

*(Notice exactly where primality was used. For composite $m$ the claim is false: $\binom 42 = 6$ is not divisible by 4.)*

**Part 2: the "freshman's dream".**

By the binomial theorem,
$$(x+y)^p = \sum_{n=0}^{p}\binom pn x^{p-n}y^{n} = x^p + \left[\sum_{n=1}^{p-1}\binom pn x^{p-n}y^n\right] + y^p.$$

By Part 1, every coefficient $\binom pn$ in the middle bracket (where $1\le n\le p-1$) is divisible by $p$. A sum of multiples of $p$ is a multiple of $p$, so the whole bracket vanishes modulo $p$:
$$(x+y)^p \equiv x^p+y^p \pmod p. \;∎$$

**A bonus: Fermat's little theorem falls out.**

We can now prove $a^p\equiv a \pmod p$ for every integer $a\ge0$, by induction on $a$.

- *Base:* $0^p = 0 \equiv 0$ ✓ (and $1^p = 1\equiv1$ ✓).
- *Step:* suppose $a^p\equiv a\pmod p$. Then by Part 2 with $x=a$, $y=1$,
$$(a+1)^p \equiv a^p + 1^p \equiv a+1 \pmod p.$$

So $a^p\equiv a$ for all $a \ge 0$, and for negative $a$ it follows by symmetry (for odd $p$, and $p=2$ is immediate). ∎

**Check $p = 5$, $x=2$, $y=3$.** $(2+3)^5 = 3125$ and $2^5+3^5 = 32+243 = 275$. Difference $3125-275 = 2850 = 5\times570$ ✓ divisible by 5.

**What to take away.** *The identity $n\binom pn = p\binom{p-1}{n-1}$ plus "$p$ prime" is the whole engine.* And note how a small fact about binomial coefficients produced, in three short steps, one of the central theorems of elementary number theory.
[/sol]

### P10 | Hard | Standard
Let $p$ be a prime and $n$ a positive integer. Prove that
$$v_p\!\left(\binom{2n}{n}\right) \ \le\ \log_p(2n),$$
and deduce that $\displaystyle\binom{2n}{n} \le (2n)^{\pi(2n)}$, where $\pi(x)$ is the number of primes $\le x$.
[hint]
Write the exponent as a sum using Legendre's formula. Show each summand is 0 or 1, and that only finitely many can be non-zero.
[/hint]
[sol]
**What is being asked.** A bound saying that **no single prime appears to a large power** in the middle binomial coefficient — and then a bound on the whole number that follows from it.

**Finding the idea.** Legendre's formula turns $v_p\binom{2n}{n}$ into a sum of floor differences. The insight is that each term of that sum is *tiny* — only 0 or 1 — and that the sum has only about $\log_p(2n)$ terms. Both facts come from elementary properties of $\lfloor\,\cdot\,\rfloor$.

**Part 1: the bound on a single prime.**

*Step 1: express the exponent.* By Legendre's formula,
$$v_p((2n)!) = \sum_{k\ge1}\left\lfloor\frac{2n}{p^k}\right\rfloor, \qquad v_p(n!) = \sum_{k\ge1}\left\lfloor\frac{n}{p^k}\right\rfloor.$$
Since $\binom{2n}{n} = \frac{(2n)!}{n!\,n!}$,
$$v_p\!\left(\binom{2n}{n}\right) = v_p((2n)!) - 2v_p(n!) = \sum_{k\ge1}\left(\left\lfloor\frac{2n}{p^k}\right\rfloor - 2\left\lfloor\frac{n}{p^k}\right\rfloor\right).$$

*Step 2: every summand is 0 or 1.*

**Claim:** for any real $x\ge0$, $\;\lfloor 2x\rfloor - 2\lfloor x\rfloor \in \{0,1\}$.

*Proof.* Write $x = \lfloor x\rfloor + \{x\}$ with $0\le\{x\}<1$. Then
$$\lfloor 2x\rfloor = \left\lfloor 2\lfloor x\rfloor + 2\{x\}\right\rfloor = 2\lfloor x\rfloor + \lfloor 2\{x\}\rfloor,$$
pulling the integer $2\lfloor x\rfloor$ out of the floor. So
$$\lfloor 2x\rfloor - 2\lfloor x\rfloor = \lfloor 2\{x\}\rfloor.$$
Since $0 \le 2\{x\} < 2$, this is $0$ (when $\{x\}<\frac12$) or $1$ (when $\{x\}\ge\frac12$). ∎

Applying this with $x = \frac{n}{p^k}$ shows every summand in Step 1 is 0 or 1.

*Step 3: count how many summands can be non-zero.*

If $p^k > 2n$ then $\frac{2n}{p^k}<1$ and $\frac{n}{p^k}<1$, so both floors are 0 and the summand vanishes.

So only the indices $k$ with $p^k \le 2n$ can contribute, i.e. $k \le \log_p(2n)$. The number of such $k\ge1$ is $\left\lfloor\log_p(2n)\right\rfloor$.

*Step 4: combine.* At most $\left\lfloor\log_p(2n)\right\rfloor$ summands, each at most 1:
$$v_p\!\left(\binom{2n}{n}\right) \ \le\ \left\lfloor\log_p(2n)\right\rfloor \ \le\ \log_p(2n). \;∎$$

**Part 2: the bound on the whole number.**

*Which primes can appear?* Every prime dividing $\binom{2n}{n}$ divides $(2n)!$, and a prime dividing $(2n)!$ must be one of $2,3,\dots,2n$. So only primes $p \le 2n$ occur — there are exactly $\pi(2n)$ of them.

*Assemble.* Writing the factorisation,
$$\binom{2n}{n} = \prod_{p\,\le\,2n} p^{\,v_p\left(\binom{2n}{n}\right)} \ \le\ \prod_{p\le 2n} p^{\,\log_p(2n)}.$$

Now simplify a single factor. By the definition of the logarithm, $p^{\log_p(2n)} = 2n$ — the exponent is exactly the power to which $p$ must be raised to give $2n$.

So each factor is at most $2n$, and there are $\pi(2n)$ of them:
$$\binom{2n}{n} \ \le\ (2n)^{\pi(2n)}. \;∎$$

**Check on a small case.** $n = 4$: $\binom84 = 70$, and $2n = 8$ with $\pi(8) = 4$ (namely $2,3,5,7$). The bound gives $8^4 = 4096 \ge 70$ ✓ — very generous, but it is the *shape* of the bound that matters.

Also check Part 1 directly: $70 = 2\times5\times7$, so $v_2 = 1$ and $\log_2 8 = 3$ ✓; $v_5 = 1$ and $\log_5 8 \approx 1.29$ ✓; $v_7 = 1$ and $\log_7 8\approx1.07$ ✓.

**Where this is used.** This is the key lemma in Erdős's celebrated proof of **Bertrand's postulate** (there is always a prime between $m$ and $2m$). The bound says $\binom{2n}{n}$ cannot be built out of small primes alone, which forces a large prime to divide it.

**What to take away.** *A statement about an enormous number became a statement about one exponent at a time, and then about $\lfloor 2x\rfloor - 2\lfloor x\rfloor$.* Breaking a global claim into one prime, then into one power of that prime, is the standard way to control the size of factorial-built numbers.
[/sol]
