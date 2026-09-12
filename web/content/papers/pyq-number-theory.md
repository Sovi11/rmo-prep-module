---
id: pyq-number-theory
title: Past problems — number theory
level: Mixed
hours: 6
blurb: Real RMO and CRMO number theory problems, grouped so you can drill the area before sitting whole papers. Statements are transcribed from the official HBCSE papers.
tags: past papers, RMO, CRMO, number theory
link: All official HBCSE past papers :: https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers/
link: RMO 2025 official solutions :: https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2025/12/RMO-2025-solutions.pdf
link: RMO 2024 problems with official solutions :: https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2024/11/Official-Solutions-for-RMO-2024.pdf
---

## How to use this set

These are **real problems from real papers**. Treat them differently from the practice problems in the topic chapters:

- **Time yourself.** 30 minutes per problem, alone, on paper, written in full.
- **Do not open the hint early.** The hints here are deliberately thinner than in the topic chapters, because on the day there will be none.
- **Mark yourself out of 17** using the scale in the proof-writing chapter.

Every statement below is transcribed from the official paper. Where a solution is long or the official write-up is the better model, the solution links to it.

## What number theory actually looks like at RMO

A look at the last few papers:

| Paper | Number theory problems | Flavour |
|---|---|---|
| RMO 2025 | P4, P6 | rational equation (parity/mod obstruction); polynomials mod $n$ + pigeonhole |
| RMO 2024 | P2 | remainders, bounding, finite check |
| RMO 2019 | P1, P6 | rationality/algebraic; gcd structure + combinatorics |
| RMO 2018 | P1, P3, P5 | gcd, decimal periods, floor function |
| CRMO 2016 | P3 | digit sum equation |
| CRMO 2015 | P3, P6 | Diophantine via factoring; floor function |
| CRMO 2014 | P3 | digits of powers of 2 |
| CRMO 2013 | P3, P6 | primes; integer roots and divisibility |
| CRMO 2012 | P2 | valuations, $abc \mid (a+b+c)^{13}$ |

**The pattern:** one or two per paper, usually solvable with *divisibility + bounding + a well-chosen modulus*. Heavy machinery is almost never needed; careful case analysis almost always is.

## Problems

### Y1 | Easy | RMO 2024 P2
For a positive integer $n$, let $R(n)$ be the sum of the remainders when $n$ is divided by $1, 2, \dots, n$. For example $R(4) = 0+0+1+0 = 1$ and $R(7) = 0+1+1+3+2+1+0 = 8$. Find all positive integers $n$ such that $R(n) = n-1$.
[hint]
Bound $R(n)$ from below by only counting the divisors $i$ with $\frac n2 < i \le n$ — for those, the remainder is exactly $n-i$.
[/hint]
[sol]
**The key bound.** For $i$ in the range $\frac n2 < i \le n$, we have $1 \le \frac ni < 2$, so $n = 1\cdot i + (n-i)$ and the remainder is exactly $n-i$.

Summing just these terms (all other remainders are $\ge0$),
$$R(n) \ \ge\ \sum_{i=\lfloor n/2\rfloor+1}^{n}(n-i) = \sum_{k=0}^{\,n-\lfloor n/2\rfloor-1}k = \binom{\lceil n/2\rceil}{2}.$$

So
$$R(n) \ \ge\ \frac12\left\lceil\frac n2\right\rceil\left(\left\lceil\frac n2\right\rceil-1\right).$$

**Force $n$ small.** If $R(n) = n-1$, then
$$n-1 \ \ge\ \frac12\left\lceil\frac n2\right\rceil\left(\left\lceil\frac n2\right\rceil - 1\right).$$
For $n \ge 9$, $\left\lceil\frac n2\right\rceil \ge 5$, so the right side is at least $\frac12\cdot5\cdot4 = 10$ while growing quadratically, and one checks directly that the inequality fails for every $n\ge9$. (At $n=9$: right side $=\frac12\cdot5\cdot4 = 10 > 8 = n-1$.)

So $n \le 8$.

**Check the eight cases.**

| $n$ | remainders mod $1,\dots,n$ | $R(n)$ | $n-1$ | ok? |
|---|---|---|---|---|
| 1 | 0 | 0 | 0 | ✓ |
| 2 | 0,0 | 0 | 1 | ✗ |
| 3 | 0,1,0 | 1 | 2 | ✗ |
| 4 | 0,0,1,0 | 1 | 3 | ✗ |
| 5 | 0,1,2,1,0 | 4 | 4 | ✓ |
| 6 | 0,0,0,2,1,0 | 3 | 5 | ✗ |
| 7 | 0,1,1,3,2,1,0 | 8 | 6 | ✗ |
| 8 | 0,0,2,0,3,2,1,0 | 8 | 7 | ✗ |

**Answer:** $n = 1$ and $n = 5$. ∎

**The technique.** "Sum over the top half of the range" is the standard way to bound a remainder sum from below, because there the remainder has a closed form. Getting a lower bound that grows faster than the target is what turns an infinite problem into a finite check.
[/sol]

### Y2 | Medium | CRMO 2013 P3
Find all primes $p$ and $q$ such that $p$ divides $q^2-4$ and $q$ divides $p^2-1$.
[hint]
Handle $q=2$ separately — and think carefully about what $q^2-4$ is then. For odd $q$, bound $p$ in terms of $q$ and vice versa.
[/hint]
[sol]
**Case $q = 2$.** Then $q^2-4 = 0$, and **every** integer divides 0, so the first condition holds for every prime $p$. The second condition, $2 \mid p^2-1$, holds exactly when $p$ is odd.

So $(p,2)$ is a solution for **every odd prime $p$** — an infinite family.

**Case $q$ odd.** Now $q^2-4 \ne 0$.

*Bounding $p$.* Since $p$ is prime and $p \mid (q-2)(q+2)$, we get $p \mid q-2$ or $p\mid q+2$. As $q+2 > 0$ and $q - 2 \neq 0$ (since $q$ is odd), either gives
$$p \le q+2.$$

*Bounding $q$.* Similarly $q \mid (p-1)(p+1)$ gives $q \mid p-1$ or $q\mid p+1$; since $p+1 > 0$,
$$q \le p+1.$$

Combining: $q - 1 \le p \le q+2$.

*Check each possibility.*
- $p = q-1$: two primes differing by 1 forces $\{p,q\} = \{2,3\}$, so $p=2$, $q=3$. Check: $2 \mid 9-4 = 5$? **No.** ✗
- $p = q$: then $p \mid p^2-4$ gives $p\mid 4$, so $p=2$ — but $q$ is odd. ✗
- $p = q+1$: consecutive primes again forces $q=2$, excluded here. ✗
- $p = q+2$: then $q \mid p^2-1 = (q+2)^2-1 = q^2+4q+3$, so $q \mid 3$, giving $q = 3$ and $p = 5$. Check: $5 \mid 3^2-4 = 5$ ✓ and $3\mid 5^2-1 = 24$ ✓. **Valid.**

**Answer.** The solutions are
$$(p,q) = (5,3), \qquad\text{and}\qquad (p,2) \text{ for every odd prime } p.$$ ∎

**The trap.** Almost everyone misses the $q=2$ family, because "$p$ divides $0$" does not feel like divisibility. It is: $0 = p\cdot 0$. Whenever a divisibility condition involves an expression that can vanish, **check the vanishing case first**.
[/sol]

### Y3 | Medium | CRMO 2015 P3
Find all fractions which can be written simultaneously in the forms
$$\frac{7k-5}{5k-3} \qquad\text{and}\qquad \frac{6l-1}{4l-3}$$
for some integers $k, l$.
[hint]
Set the two equal, cross-multiply, and the result is linear in each of $k$ and $l$ separately — so Simon's factoring trick applies.
[/hint]
[sol]
Set the two expressions equal and cross-multiply:
$$(7k-5)(4l-3) = (6l-1)(5k-3).$$

Expanding both sides:
$$28kl - 21k - 20l + 15 = 30kl - 18l - 5k + 3.$$

Bringing everything to one side:
$$2kl + 16k + 2l - 12 = 0 \implies kl + 8k + l - 6 = 0.$$

**Simon's factoring trick.** Add 8 to both sides:
$$kl + 8k + l + 8 = 14 \implies k(l+8) + (l+8) = 14 \implies (k+1)(l+8) = 14.$$

**Enumerate.** $14 = 2\cdot7$ has divisors $\pm1,\pm2,\pm7,\pm14$, giving eight factor pairs:

| $k+1$ | $l+8$ | $k$ | $l$ | fraction $\frac{7k-5}{5k-3}$ |
|---|---|---|---|---|
| 1 | 14 | 0 | 6 | $\frac{-5}{-3} = \frac53$ |
| 2 | 7 | 1 | $-1$ | $\frac{2}{2} = 1$ |
| 7 | 2 | 6 | $-6$ | $\frac{37}{27}$ |
| 14 | 1 | 13 | $-7$ | $\frac{86}{62} = \frac{43}{31}$ |
| $-1$ | $-14$ | $-2$ | $-22$ | $\frac{-19}{-13} = \frac{19}{13}$ |
| $-2$ | $-7$ | $-3$ | $-15$ | $\frac{-26}{-18} = \frac{13}{9}$ |
| $-7$ | $-2$ | $-8$ | $-10$ | $\frac{-61}{-43} = \frac{61}{43}$ |
| $-14$ | $-1$ | $-15$ | $-9$ | $\frac{-110}{-78} = \frac{55}{39}$ |

All denominators $5k-3$ and $4l-3$ are non-zero (neither $\frac35$ nor $\frac34$ is an integer), so every row is legitimate.

**Verification of one row.** $k=6$ gives $\frac{7(6)-5}{5(6)-3} = \frac{37}{27}$; $l=-6$ gives $\frac{6(-6)-1}{4(-6)-3} = \frac{-37}{-27} = \frac{37}{27}$ ✓.

**Answer.** The eight fractions
$$\frac53,\quad 1,\quad \frac{37}{27},\quad \frac{43}{31},\quad \frac{19}{13},\quad \frac{13}{9},\quad \frac{61}{43},\quad \frac{55}{39}. \;∎$$
[/sol]

### Y4 | Medium | CRMO 2012 P2
Let $a,b,c$ be positive integers such that $a \mid b^3$, $b\mid c^3$ and $c\mid a^3$. Prove that $abc \mid (a+b+c)^{13}$.
[hint]
Work one prime at a time with $p$-adic valuations. Show all three have the same prime support, then bound $x+y+z$ by $13\min(x,y,z)$.
[/hint]
[sol]
**Step 1: same prime support.** If a prime $p$ divides $a$, then $p \mid b^3$, so $p\mid b$; then $p\mid c^3$, so $p \mid c$. By symmetry (the hypotheses are cyclic), $a$, $b$, $c$ have exactly the same set of prime divisors.

**Step 2: bound the exponents.** Fix such a prime $p$ and write
$$x = v_p(a), \qquad y = v_p(b), \qquad z = v_p(c),$$
all positive. The hypotheses give
$$x \le 3y, \qquad y\le3z, \qquad z\le3x.$$

Let $m = \min\{x,y,z\}$. By the cyclic symmetry we may assume $m = x$. Then
$$z \le 3x, \qquad y \le 3z \le 9x,$$
so
$$x+y+z \ \le\ x + 9x + 3x = 13x = 13m.$$

**Step 3: conclude.** Since $m = \min\{x,y,z\}$, we have $p^m \mid a$, $p^m\mid b$ and $p^m\mid c$, hence
$$p^m \mid a+b+c \implies p^{13m}\mid (a+b+c)^{13}.$$
And $v_p(abc) = x+y+z \le 13m$, so
$$p^{\,v_p(abc)} \mid (a+b+c)^{13}.$$

This holds for **every** prime $p$ dividing $abc$, so $abc \mid (a+b+c)^{13}$. ∎

**Why 13 is the right exponent.** The bound $x+y+z\le13\min$ is tight: taking $x=1$, $z=3$, $y=9$ satisfies all three constraints with $x+y+z = 13$. So the problem's exponent is exactly the smallest that works.
[/sol]

### Y5 | Medium | RMO 2018 P5
Find all natural numbers $n$ such that $1 + \left\lfloor\sqrt{2n}\right\rfloor$ divides $2n$.
[hint]
Set $m = \lfloor\sqrt{2n}\rfloor$ so $m^2\le 2n\le m^2+2m$. Write $2n = (m+1)q$ and squeeze $q$ between two consecutive integers.
[/hint]
[sol]
Let $m = \left\lfloor\sqrt{2n}\right\rfloor$, so
$$m^2 \le 2n < (m+1)^2 = m^2+2m+1,$$
and since $2n$ is an integer,
$$m^2 \le 2n \le m^2+2m. \tag{$\ast$}$$

Suppose $(m+1) \mid 2n$ and write $2n = (m+1)q$.

**Upper bound on $q$.** From $(\ast)$,
$$(m+1)q \le m^2+2m = (m+1)^2-1 < (m+1)^2 \implies q < m+1 \implies q\le m.$$

**Lower bound on $q$.** Also from $(\ast)$,
$$(m+1)q \ge m^2 = (m+1)(m-1)+1 > (m+1)(m-1) \implies q > m-1 \implies q \ge m.$$

Hence $q = m$ exactly, and
$$2n = m(m+1) \implies n = \frac{m(m+1)}{2}.$$

**Conversely**, let $n = \frac{m(m+1)}{2}$ for a positive integer $m$, so $2n = m(m+1)$. Then
$$m^2 < m(m+1) < (m+1)^2 \implies m < \sqrt{2n}<m+1 \implies \left\lfloor\sqrt{2n}\right\rfloor = m,$$
and $m+1 \mid m(m+1) = 2n$ ✓.

**Answer.** Exactly the **triangular numbers**
$$n = \frac{m(m+1)}{2} = 1,\ 3,\ 6,\ 10,\ 15,\ 21,\ \dots \;∎$$
[/sol]

### Y6 | Medium | CRMO 2016 P3
For a natural number $n$ written in base 10, let $S(n)$ denote the sum of its digits. Find all natural numbers $n$ such that $n = 2\,S(n)^2$.
[hint]
$S(n)$ grows like $\log n$, so the equation forces $n$ to be small. Then use $n \equiv S(n) \pmod 9$ to cut the candidates down before checking.
[/hint]
[sol]
**Step 1: bound $n$.** If $n$ has $d$ digits then $n \ge 10^{d-1}$ and $S(n)\le 9d$. The equation gives
$$10^{d-1}\ \le\ n = 2S(n)^2 \ \le\ 2(9d)^2 = 162d^2.$$
- $d=4$: $1000 \le 162\cdot16 = 2592$ ✓ possible.
- $d=5$: $10^4 = 10000 \le 162\cdot25 = 4050$? **No.**
- and the left side grows exponentially while the right grows quadratically, so $d\ge5$ is impossible.

Hence $n \le 9999$ and $s := S(n) \le 36$.

**Step 2: use mod 9.** Since $n\equiv S(n)\pmod 9$,
$$2s^2 \equiv s \pmod 9 \implies s(2s-1)\equiv 0 \pmod 9.$$
Checking $s\equiv0,1,\dots,8$: only $s\equiv0$ and $s\equiv5 \pmod 9$ work.

With $1\le s\le36$ this leaves
$$s \in \{5, 9, 14, 18, 23, 27, 32, 36\}.$$

**Step 3: check each.**

| $s$ | $n = 2s^2$ | $S(n)$ | $S(n)=s$? |
|---|---|---|---|
| 5 | 50 | 5 | ✓ |
| 9 | 162 | 9 | ✓ |
| 14 | 392 | 14 | ✓ |
| 18 | 648 | 18 | ✓ |
| 23 | 1058 | 14 | ✗ |
| 27 | 1458 | 18 | ✗ |
| 32 | 2048 | 14 | ✗ |
| 36 | 2592 | 18 | ✗ |

**Answer:** $n \in \{50,\ 162,\ 392,\ 648\}$. ∎

**The three-step shape.** *Bound, congruence, check* — this is the standard route for every "$n = f(S(n))$" problem, and it is worth practising until it is automatic.
[/sol]

### Y7 | Medium | CRMO 2014 P3
Suppose that for some positive integers $r$ and $s$, the digits of $2^r$ are obtained by permuting the digits of $2^s$ in decimal expansion. Prove that $r = s$.
[hint]
A permutation preserves the digit count (bounding the ratio $2^{r-s}$) and the digit sum (pinning down $2^{r-s}$ mod 9).
[/hint]
[sol]
WLOG $r \ge s$.

**Step 1: equal digit counts bound $r-s$.** A permutation of the digits of $2^s$ has the same number of digits as $2^s$, and no leading zero (since $2^r$ has none). Two positive integers with the same number of digits $d$ both lie in $\left[10^{d-1},10^d\right)$, so their ratio is less than 10:
$$2^{\,r-s} = \frac{2^r}{2^s} < 10 \implies r-s \le 3.$$

**Step 2: equal digit sums pin down $r-s$ mod 6.** Permuting digits preserves the digit sum, so $S(2^r) = S(2^s)$, and since $N\equiv S(N)\pmod 9$,
$$2^r \equiv 2^s \pmod 9 \implies 9 \mid 2^s\left(2^{\,r-s}-1\right).$$
As $\gcd(2^s,9)=1$,
$$9 \mid 2^{\,r-s}-1.$$

The order of $2$ modulo 9 is **6**, since
$$2^1=2,\ 2^2=4,\ 2^3=8,\ 2^4\equiv7,\ 2^5\equiv5,\ 2^6\equiv1 \pmod 9.$$
Therefore $6 \mid r-s$.

**Step 3: combine.** We have $0\le r-s\le3$ and $6 \mid r-s$. The only possibility is $r-s = 0$.

Hence $r = s$. ∎

**The shape of the argument.** Two invariants of a digit permutation — *length* and *digit sum* — pull in opposite directions: one caps $r-s$ from above, the other forces it to be a multiple of 6. Together they leave only zero.
[/sol]

### Y8 | Hard | RMO 2018 P3
For a rational number $r$, its **period** is the length of the smallest repeating block in its decimal expansion; for example $r = 0.123123123\dots$ has period 3. Let $S$ be the set of all rationals $r$ of the form $r = 0.\overline{abcdefgh}$ having period exactly 8. Find the sum of all the elements of $S$.
[hint]
Every such $r$ is $\frac{N}{10^8-1}$ for an integer $N$. "Period divides $d$" is a divisibility condition on $N$; count with inclusion–exclusion over the divisors of 8, then pair $N$ with its nines-complement.
[/hint]
[sol]
Let $M = 10^8-1 = 99999999$. Every purely periodic decimal whose period divides 8 is $r = \frac NM$ for a unique integer $N$ with $0\le N<M$, and conversely.

**Counting.** The period of $\frac NM$ divides $d$ (for $d \mid 8$) precisely when $N$ is a multiple of $\frac{M}{10^d-1}$, and the number of such $N$ in $[0,M)$ is $10^d-1$ together with $N=0$, i.e. $10^d$ values counting $N=0$.

The divisors of 8 form a chain $1\mid2\mid4\mid8$, so inclusion–exclusion collapses to a single difference: the number of $N$ with period **exactly** 8 is
$$|S| = 10^8 - 10^4.$$

**Summing by pairing.** Pair each $N$ with its **nines-complement** $M - N$. The decimal block of $M-N$ is obtained from that of $N$ by replacing each digit $x$ with $9-x$, and complementing preserves the minimal block length — so $N$ has period exactly 8 iff $M-N$ does. The pairing is therefore an involution on $S$.

It has **no fixed point**: $N = M-N$ would need $M = 2N$, impossible since $M$ is odd.

Each pair contributes
$$\frac NM + \frac{M-N}{M} = 1.$$

**Conclusion.** There are $\frac{10^8-10^4}{2}$ pairs, so
$$\sum_{r\in S} r = \frac{10^8-10^4}{2} = \frac{100{,}000{,}000 - 10{,}000}{2} = \frac{99{,}990{,}000}{2} = \mathbf{49{,}995{,}000}. \;∎$$

**The move.** Summing over a complicated set by finding a fixed-point-free involution whose pairs have a constant sum is one of the most reusable tricks in olympiad counting.
[/sol]

### Y9 | Hard | RMO 2025 P4
Prove that there do not exist positive rational numbers $x$ and $y$ such that
$$x+y+\frac1x+\frac1y = 2025.$$
[hint]
Write $x = \frac ab$, $y = \frac cd$ in lowest terms and show $\frac{a^2+b^2}{ab}$ is already reduced. Clearing denominators then forces a rigid relation between $ab$ and $cd$; after that one modulus finishes it. Note $2025 = 3^4\cdot5^2$.
[/hint]
[sol]
This is worked in full in the **Diophantine equations** chapter (problem P10) — the outline is:

1. Write $x=\frac ab$, $y=\frac cd$ in lowest terms. Then $\gcd(a^2+b^2, ab) = 1$, so $\frac{a^2+b^2}{ab}$ is already reduced (and likewise for $c,d$).
2. Clearing denominators in $\frac{a^2+b^2}{ab}+\frac{c^2+d^2}{cd} = 2025$ and using step 1 twice gives $ab \mid cd$ and $cd\mid ab$, hence
$$ab = cd.$$
3. Dividing through by that common value yields
$$a^2+b^2+c^2+d^2 = 2025\,ab.$$
4. Since $3 \mid 2025$, the left side is $\equiv0\pmod3$. Squares mod 3 are $0$ or $1$, and coprimality forbids $3$ from dividing both $a$ and $b$, so $a^2+b^2\in\{1,2\}$ mod 3, likewise $c^2+d^2$. For the total to vanish mod 3 one must be $\equiv1$ and the other $\equiv2$ — but $\equiv1$ means $3\mid ab$ and $\equiv2$ means $3\nmid cd$, contradicting $ab = cd$. ∎

**Do this one on paper first**, then read the full write-up in the topic chapter, then compare both against the [official RMO 2025 solutions](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2025/12/RMO-2025-solutions.pdf).

**Why it is a good problem to have met.** It combines three separate habits — reducing a fraction to lowest terms *before* clearing denominators, extracting a divisibility from an equation, and reading the modulus off the constant — none of which is hard alone.
[/sol]

### Y10 | Hard | RMO 2025 P6
Let $p(x)$ be a nonconstant polynomial with integer coefficients, and let $n\ge2$ be an integer such that no term of the sequence
$$p(0),\quad p(p(0)),\quad p(p(p(0))),\quad\dots$$
is divisible by $n$. Show that there exist integers $a,b$ with $0\le a<b\le n-1$ and $n \mid p(b)-p(a)$.
[hint]
$p$ induces a genuine map on the $n$ residue classes. You are being asked to show that map is not injective — and injective maps of a finite set to itself are bijections.
[/hint]
[sol]
Worked in full in the **congruences** chapter (problem P9). The argument in brief:

1. Because $u-v \mid p(u)-p(v)$ for integer polynomials, $p$ induces a well-defined map
$$f:\{0,1,\dots,n-1\}\to\{0,1,\dots,n-1\}, \qquad f(x) = p(x)\bmod n.$$
The conclusion to prove is exactly that **$f$ is not injective**.
2. The hypothesis says $f^k(0)\ne0$ for every $k\ge1$.
3. If $f$ were injective it would be a **bijection** (finite set to itself), hence invertible. Pigeonhole on $f^0(0),\dots,f^n(0)$ gives $f^i(0) = f^j(0)$ for some $i<j$; applying $f^{-1}$ $i$ times gives $0 = f^{\,j-i}(0)$ with $j-i\ge1$, contradicting the hypothesis.
4. So $f$ is not injective: there are distinct $a,b$ with $n \mid p(b)-p(a)$. ∎

**The two transferable facts.** (i) An integer polynomial acts on residues mod $n$. (ii) For a map of a finite set to itself, injective $\iff$ surjective $\iff$ bijective — and under a bijection every orbit is *purely periodic*, so it must return to where it started.
[/sol]
