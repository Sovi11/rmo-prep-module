---
id: nt-07-digits-floor
title: Digits, bases and the floor function
level: Core
hours: 3
blurb: Base representations, digit sums and divisibility rules, and how to compute with floors without guessing.
tags: digits, bases, floor function, fractional part
link: MOTP — Number theory :: https://jpsaha.github.io/MOTP/nt/
video: Search: floor function olympiad problems :: https://www.youtube.com/results?search_query=floor+function+olympiad+problems+number+theory
---

## Base representation

Every positive integer $n$ has a unique representation
$$n = a_k b^k + a_{k-1}b^{k-1} + \cdots + a_1 b + a_0, \qquad 0 \le a_i < b, \; a_k \ne 0$$
in base $b \ge 2$. The number of digits is $\lfloor \log_b n\rfloor + 1$.

**Digit sum notation.** $S(n)$ or $s_b(n)$ denotes the sum of digits. The two facts you need:

- $n \equiv S(n) \pmod 9$ in base 10, because $10 \equiv 1 \pmod 9$ makes every power of 10 congruent to 1.
- $n \equiv a_0 - a_1 + a_2 - \cdots \pmod{11}$, because $10 \equiv -1 \pmod{11}$.

More generally, in base $b$, $n \equiv s_b(n) \pmod{b-1}$.

**A bound worth remembering:** $S(n) \le 9(\lfloor \log_{10} n\rfloor + 1)$, so $S(n)$ grows like $\log n$ — far slower than $n$. Combined with $S(n)\equiv n \pmod 9$, this settles many "find all $n$ with $n = f(S(n))$" problems: the equation forces $n$ to be small, then you check.

> **The standard attack on digit problems.** (1) Use $S(n)\equiv n\pmod 9$ to pin down residues. (2) Use $S(n) = O(\log n)$ to bound $n$. (3) Check the finitely many cases.

## Divisibility rules, derived

Each rule is just "reduce $10^k$ mod $m$":

| $m$ | $10^k \bmod m$ | Rule |
|---|---|---|
| 3, 9 | $1$ | sum of digits |
| 11 | $(-1)^k$ | alternating sum |
| 2, 5 | $0$ for $k\ge1$ | last digit |
| 4, 25 | $0$ for $k\ge2$ | last two digits |
| 8, 125 | $0$ for $k\ge3$ | last three digits |
| 7, 13 | period 6 | group digits in threes with alternating signs |

That last one: $10^3 \equiv -1 \pmod{7}$ and $\pmod{13}$, so grouping in blocks of three with alternating signs tests divisibility by $7$, $11$ and $13$ simultaneously (their product is 1001).

## The floor function

$\lfloor x\rfloor$ is the greatest integer $\le x$; $\{x\} = x - \lfloor x\rfloor \in [0,1)$ is the fractional part.

**Core properties.**

$$\lfloor x \rfloor \le x < \lfloor x\rfloor + 1, \qquad \lfloor x + n\rfloor = \lfloor x\rfloor + n \;(n\in\mathbb{Z})$$
$$\lfloor x \rfloor + \lfloor y \rfloor \le \lfloor x+y\rfloor \le \lfloor x\rfloor+\lfloor y\rfloor + 1$$
$$\left\lfloor \frac{\lfloor x\rfloor}{n}\right\rfloor = \left\lfloor \frac xn\right\rfloor \quad (n \text{ a positive integer})$$

That last identity is genuinely useful and often surprises people.

**Hermite's identity.**
$$\lfloor x\rfloor + \left\lfloor x + \frac1n\right\rfloor + \cdots + \left\lfloor x + \frac{n-1}{n}\right\rfloor = \lfloor nx\rfloor.$$

**Counting with floors.** The number of multiples of $d$ in $\{1,2,\dots,n\}$ is $\lfloor n/d\rfloor$. This is where Legendre's formula comes from, and it converts many counting questions into floor sums.

**The technique for solving floor equations.** Set $n = \lfloor x \rfloor$ and $f = \{x\}$, so $x = n + f$ with $n \in \mathbb{Z}$ and $0 \le f < 1$. Substitute, then use the constraint $0 \le f < 1$ to bound $n$. Never guess — always split like this.

## Worked example

**Find all real $x$ with $\lfloor x\rfloor \cdot \{x\} = 2026$.**

Write $x = n+f$, $n = \lfloor x\rfloor \in \mathbb{Z}$, $f = \{x\} \in [0,1)$. The equation is $nf = 2026$.

Since $2026 > 0$ and $f \ge 0$, we need $f > 0$ and $n > 0$. From $f < 1$:
$$2026 = nf < n,$$
so $n \ge 2027$. And $f = 2026/n < 1$ is then automatic. Also $f \ge 0$ ✓.

So for every integer $n \ge 2027$, $x = n + \frac{2026}{n}$ is a solution — and these are all of them. ∎

## Common traps

- $\lfloor -x \rfloor = -\lfloor x \rfloor$ is **false**. $\lfloor -1.5\rfloor = -2$, not $-1$. The correct identity is $\lfloor -x\rfloor = -\lceil x\rceil$.
- $\lfloor x+y\rfloor = \lfloor x\rfloor + \lfloor y\rfloor$ is false in general.
- Treating $S(n)$ as if it were multiplicative or additive. $S(m+n)\ne S(m)+S(n)$ in general (carries).
- Forgetting leading-digit constraints when counting numbers with given digit properties.

## Problems

### P1 | Warmup | Standard
Find the last digit of $7^{2026}$ and the digit sum of $10^{20} - 1$.
[hint]
Powers of 7 cycle mod 10 with period 4. And $10^{20}-1$ is a string of nines.
[/hint]
[sol]
**Last digit.** $7^1\equiv7$, $7^2\equiv9$, $7^3\equiv3$, $7^4\equiv1 \pmod{10}$; period 4. As $2026 = 4\cdot506+2$, the last digit is that of $7^2$, namely **9**.

**Digit sum.** $10^{20}-1 = \underbrace{99\cdots9}_{20}$, so $S = 20 \times 9 = \mathbf{180}$. ∎
[/sol]

### P2 | Warmup | Standard
Prove that a number is divisible by 9 if and only if its digit sum is.
[hint]
$10 \equiv 1 \pmod 9$.
[/hint]
[sol]
Let $n = \sum_{i=0}^{k} a_i 10^i$ with digits $a_i$.

Since $10 \equiv 1 \pmod 9$, we get $10^i \equiv 1^i = 1 \pmod 9$ for every $i \ge 0$. Hence
$$n = \sum_i a_i 10^i \equiv \sum_i a_i = S(n) \pmod 9.$$

So $9 \mid n \iff 9 \mid S(n)$. ∎
[/sol]

### P3 | Easy | CRMO 2016 P3
For a natural number $n$, let $S(n)$ be the sum of its digits. Find all $n$ with $n = 2S(n)^2$.
[hint]
Bound: if $n$ has $d$ digits then $n \ge 10^{d-1}$ and $S(n)\le 9d$, so $n \le 2(9d)^2 = 162d^2$. That forces $d$ small. Then use $n \equiv S(n) \pmod 9$.
[/hint]
[sol]
**Bounding.** Suppose $n$ has $d$ digits, so $n \ge 10^{d-1}$ and $S(n) \le 9d$. The equation gives
$$10^{d-1} \le n = 2S(n)^2 \le 2(9d)^2 = 162d^2.$$
- $d=4$: $1000 \le 162\cdot16 = 2592$ ✓ possible.
- $d=5$: $10^4 = 10000 \le 162\cdot 25 = 4050$? No. ✗
- and for $d \ge 5$ the left side grows much faster, so no solutions.

So $d \le 4$, i.e. $n \le 9999$, and $S(n)\le 36$.

**Using mod 9.** Since $n \equiv S(n)\pmod 9$, write $s = S(n)$. Then $2s^2 \equiv s \pmod 9$, i.e.
$$s(2s-1)\equiv 0 \pmod 9.$$
Checking $s = 0,1,\dots,8$ modulo 9: $s \equiv 0$ gives $0$ ✓; $s\equiv 5$ gives $5\cdot 9 = 45 \equiv 0$ ✓. Others fail. So $s \equiv 0$ or $5 \pmod 9$.

With $1 \le s \le 36$: $s \in \{5, 9, 14, 18, 23, 27, 32, 36\}$.

**Checking each** against $n = 2s^2$ and $S(n) = s$:

| $s$ | $n=2s^2$ | $S(n)$ | ok? |
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
[/sol]

### P4 | Easy | Standard
Solve $\lfloor x \rfloor + \lfloor 2x \rfloor = 12$ for real $x$.
[hint]
Write $x = n+f$. Then $\lfloor 2x\rfloor = 2n + \lfloor 2f\rfloor$, and $\lfloor 2f\rfloor \in \{0,1\}$.
[/hint]
[sol]
Write $x = n+f$ with $n = \lfloor x\rfloor\in\mathbb Z$ and $f\in[0,1)$. Then
$$\lfloor 2x\rfloor = \lfloor 2n+2f\rfloor = 2n + \lfloor 2f \rfloor,$$
and $\lfloor 2f\rfloor = 0$ if $f < \frac12$, $=1$ if $f\ge\frac12$.

The equation becomes $3n + \lfloor 2f\rfloor = 12$.

- $\lfloor 2f\rfloor = 0$: $3n = 12$, so $n = 4$ and $f \in [0,\tfrac12)$. Gives $x \in [4, 4.5)$.
- $\lfloor 2f\rfloor = 1$: $3n = 11$, not an integer solution. ✗

**Answer:** $x \in [4, 4.5)$. ∎
[/sol]

### P5 | Medium | CRMO 2015 P6
Find all real numbers $a$ with $3 < a < 4$ such that $a(a - 3\{a\})$ is an integer. (Here $\{a\}$ is the fractional part.)
[hint]
Since $3<a<4$, $\lfloor a\rfloor = 3$, so $\{a\} = a - 3$. Substitute and see what the expression becomes.
[/hint]
[sol]
Since $3 < a < 4$, we have $\lfloor a \rfloor = 3$, hence $\{a\} = a - 3$.

Substituting,
$$a\left(a - 3\{a\}\right) = a\left(a - 3(a-3)\right) = a\left(9 - 2a\right) = 9a - 2a^2.$$

Let this equal the integer $k$:
$$2a^2 - 9a + k = 0 \implies a = \frac{9 \pm \sqrt{81 - 8k}}{4}.$$

We need $3 < a < 4$. The function $g(a) = 9a-2a^2$ on $(3,4)$: $g(3) = 27-18 = 9$ and $g(4) = 36-32 = 4$, and $g'(a) = 9-4a < 0$ on $(3,4)$. So $g$ is strictly decreasing from 9 to 4 (endpoints excluded), meaning
$$k = g(a) \in (4, 9).$$

So $k \in \{5,6,7,8\}$, and for each there is exactly one $a\in(3,4)$, given by the root of $2a^2-9a+k = 0$ in that interval — the larger root, $a = \frac{9+\sqrt{81-8k}}{4}$:

| $k$ | $81-8k$ | $a = \frac{9+\sqrt{81-8k}}{4}$ |
|---|---|---|
| 5 | 41 | $\frac{9+\sqrt{41}}{4}$ |
| 6 | 33 | $\frac{9+\sqrt{33}}{4}$ |
| 7 | 25 | $\frac{9+5}{4} = \frac{7}{2}$ |
| 8 | 17 | $\frac{9+\sqrt{17}}{4}$ |

Each lies in $(3,4)$: e.g. $\sqrt{41}\approx6.40$ gives $a\approx3.85$ ✓; $\sqrt{17}\approx4.12$ gives $a\approx3.28$ ✓.

**Answer:** $a \in \left\{\dfrac{9+\sqrt{41}}{4},\ \dfrac{9+\sqrt{33}}{4},\ \dfrac72,\ \dfrac{9+\sqrt{17}}{4}\right\}$. ∎
[/sol]

### P6 | Medium | Standard
Prove Hermite's identity: for real $x$ and positive integer $n$,
$$\sum_{k=0}^{n-1}\left\lfloor x + \frac kn\right\rfloor = \lfloor nx\rfloor.$$
[hint]
Both sides increase by $n$ when $x \to x+\frac1n$... actually check: define $f(x) = \text{LHS} - \text{RHS}$ and show $f(x+\frac1n) = f(x)$, so $f$ is periodic with period $\frac1n$. Then evaluate on $[0, \frac1n)$.
[/hint]
[sol]
Let
$$f(x) = \sum_{k=0}^{n-1}\left\lfloor x+\frac kn\right\rfloor - \lfloor nx\rfloor.$$

**Step 1: $f$ has period $\frac1n$.** Replacing $x$ by $x+\frac1n$:
$$\sum_{k=0}^{n-1}\left\lfloor x+\frac{k+1}{n}\right\rfloor = \sum_{j=1}^{n}\left\lfloor x+\frac jn\right\rfloor = \sum_{k=0}^{n-1}\left\lfloor x+\frac kn\right\rfloor - \lfloor x \rfloor + \lfloor x+1\rfloor,$$
which exceeds the original sum by exactly $1$ (since $\lfloor x+1\rfloor = \lfloor x\rfloor+1$).

Meanwhile $\lfloor n(x+\frac1n)\rfloor = \lfloor nx+1\rfloor = \lfloor nx\rfloor + 1$.

So both terms increase by 1 and $f(x+\frac1n) = f(x)$. ✓

**Step 2: evaluate on one period.** Take $0 \le x < \frac1n$. Then for each $k \in \{0,\dots,n-1\}$,
$$0 \le x + \frac kn < \frac1n + \frac{n-1}{n} = 1,$$
so every floor on the left is 0, and the sum is 0. Also $0 \le nx < 1$, so $\lfloor nx\rfloor = 0$.

Hence $f(x) = 0$ on $[0,\frac1n)$.

**Conclusion.** By periodicity, $f \equiv 0$ on all of $\mathbb R$, which is the identity. ∎
[/sol]

### P7 | Medium | CRMO 2014 P3
Suppose for some positive integers $r$ and $s$, the digits of $2^r$ are obtained by permuting the digits of $2^s$. Prove that $r = s$.
[hint]
A permutation of digits preserves the digit sum, hence the residue mod 9. Also it preserves the number of digits, which bounds the ratio $2^r/2^s$.
[/hint]
[sol]
WLOG $r \ge s$.

**Step 1: same number of digits.** A permutation of the digits of $2^s$ has the same number of digits as $2^s$ (leading zeros would make it a shorter number, but $2^r$ has no leading zero, so the digit counts match).

If two positive integers have the same number of digits $d$, then both lie in $[10^{d-1}, 10^d)$, so their ratio is less than 10:
$$\frac{2^r}{2^s} = 2^{r-s} < 10 \implies r - s \le 3.$$

**Step 2: same digit sum, hence same residue mod 9.** Permuting digits preserves the digit sum, so $S(2^r) = S(2^s)$, and since $N \equiv S(N) \pmod 9$,
$$2^r \equiv 2^s \pmod 9.$$
Thus $9 \mid 2^s(2^{r-s}-1)$, and as $\gcd(2^s,9)=1$,
$$9 \mid 2^{r-s}-1.$$

**Step 3: combine.** The order of 2 mod 9 is 6, since $2^1=2, 2^2=4, 2^3=8, 2^4=7, 2^5=5, 2^6=1 \pmod 9$. So $9 \mid 2^{r-s}-1$ forces $6 \mid r-s$.

But Step 1 gave $0 \le r-s\le 3$. The only multiple of 6 in that range is 0.

Hence $r = s$. ∎
[/sol]

### P8 | Hard | RMO 2018 P5
Find all natural numbers $n$ such that $1 + \lfloor\sqrt{2n}\rfloor$ divides $2n$.
[hint]
Set $m = \lfloor\sqrt{2n}\rfloor$, so $m^2 \le 2n < (m+1)^2$. Write $2n = (m+1)q$ and bound $q$ using those inequalities.
[/hint]
[sol]
Let $m = \lfloor \sqrt{2n}\rfloor$, so
$$m^2 \le 2n \le m^2+2m \tag{$\ast$}$$
(the upper bound because $2n < (m+1)^2 = m^2+2m+1$, and $2n$ is an integer).

Suppose $(m+1)\mid 2n$, say $2n = (m+1)q$.

From $(\ast)$:
$$m^2 \le (m+1)q \le m^2+2m = m(m+2).$$

**Upper bound on $q$:** $(m+1)q \le m(m+2) = (m+1)^2 - 1 < (m+1)^2$, so $q < m+1$, i.e. $q \le m$.

**Lower bound on $q$:** $(m+1)q \ge m^2 = (m+1)(m-1)+1 > (m+1)(m-1)$, so $q > m-1$, i.e. $q \ge m$.

Hence $q = m$ exactly, and
$$2n = m(m+1).$$

**Conversely**, if $2n = m(m+1)$ then $n = \frac{m(m+1)}{2}$ is a triangular number, and we should check $\lfloor\sqrt{2n}\rfloor = m$: indeed $m^2 < m(m+1) < (m+1)^2$, so $m < \sqrt{2n} < m+1$ ✓. And $m+1 \mid m(m+1) = 2n$ ✓.

**Answer:** exactly the triangular numbers,
$$n = \frac{m(m+1)}{2} = 1, 3, 6, 10, 15, 21, \dots$$ ∎
[/sol]

### P9 | Hard | Standard
Prove that for every positive integer $n$,
$$\left\lfloor \sqrt n + \sqrt{n+1}\right\rfloor = \left\lfloor \sqrt{4n+2}\right\rfloor.$$
[hint]
Square: $(\sqrt n+\sqrt{n+1})^2 = 2n+1+2\sqrt{n(n+1)}$. Show this lies between $4n+1$ and $4n+2$, then argue no perfect square lies in $(4n+1, 4n+3)$ — using that squares are never $\equiv 2,3 \pmod 4$.
[/hint]
[sol]
Let $A = \sqrt n + \sqrt{n+1}$ and $B = \sqrt{4n+2}$.

**Step 1: $A < B$.** Squaring both,
$$A^2 = 2n+1+2\sqrt{n(n+1)}, \qquad B^2 = 4n+2.$$
Since $n(n+1) < \left(n+\tfrac12\right)^2$, we get $2\sqrt{n(n+1)} < 2n+1$, hence
$$A^2 < (2n+1)+(2n+1) = 4n+2 = B^2,$$
so $A < B$. ✓

**Step 2: $\lfloor A \rfloor = \lfloor B\rfloor$.** Since $A < B$, we have $\lfloor A \rfloor \le \lfloor B\rfloor$. Suppose for contradiction that $\lfloor A\rfloor < \lfloor B\rfloor$. Then there is an integer $k$ with
$$A < k \le B, \qquad\text{so}\qquad A^2 < k^2 \le 4n+2.$$

Also $A^2 = 2n+1+2\sqrt{n(n+1)} > 2n+1+2n = 4n+1$, because $\sqrt{n(n+1)} > \sqrt{n\cdot n} = n$.

So $4n+1 < k^2 \le 4n+2$, which forces $k^2 = 4n+2$.

But a perfect square is never $\equiv 2 \pmod 4$: squares mod 4 are $0$ or $1$. Contradiction.

Hence $\lfloor A\rfloor = \lfloor B \rfloor$, i.e.
$$\left\lfloor \sqrt n+\sqrt{n+1}\right\rfloor = \left\lfloor\sqrt{4n+2}\right\rfloor. \;∎$$
[/sol]

### P10 | Hard | RMO 2018 P3
For a rational number $r$, its *period* is the length of the smallest repeating block in its decimal expansion. Let $S$ be the set of all rationals $r$ of the form $r = 0.\overline{abcdefgh}$ having period exactly 8. Find the sum of all elements of $S$.
[hint]
$0.\overline{a_1\cdots a_8} = \frac{N}{99999999}$ where $N$ is the 8-digit block. Period exactly 8 means the fraction does not reduce to a shorter period — i.e. $N$ is not a multiple of $99999999/d$ for divisors $d$ corresponding to periods 1, 2, 4. Count by inclusion–exclusion, and pair $N$ with $99999999 - N$.
[/hint]
[sol]
Write $M = 99999999 = 10^8-1$. Every $r$ with a purely periodic expansion of period dividing 8 is $r = N/M$ for a unique $N$ with $0 \le N < M$.

The period of $N/M$ divides 8, and equals $d$ exactly when $N$ is a multiple of $M/(10^{d}-1)$… more precisely, the period divides $d$ (for $d \mid 8$) iff
$$(10^d - 1) \mid N \cdot \frac{10^d-1}{M}\cdot M \quad\Longleftrightarrow\quad \frac{M}{10^d-1} \;\Big|\; N.$$

So, writing $T_d = \#\{N : 0\le N < M,\ \text{period of } N/M \text{ divides } d\} = 10^d - 1 + 1 = 10^d$… let us be concrete. The number of $N \in [0, M)$ whose period divides $d$ is the number of multiples of $M/(10^d-1)$ in $[0,M)$, which is $10^d - 1$, plus $N=0$; counting $N=0$ once, there are exactly $10^d - 1$ non-zero such $N$ together with $N=0$, i.e. $10^d$ values including 0. Since $d \mid 8$ means $d \in \{1,2,4,8\}$:

$$\#\{\text{period} \mid 1\} = 10, \quad \#\{\text{period}\mid 2\} = 100,\quad \#\{\text{period}\mid4\} = 10^4,\quad \#\{\text{period}\mid 8\} = 10^8.$$

By inclusion–exclusion (the divisors of 8 form a chain $1 \mid 2 \mid 4 \mid 8$, so this is just a difference):
$$|S| = 10^8 - 10^4.$$

**Summing.** Pair each $N$ with $M - N$. If $N/M$ has period exactly 8, so does $(M-N)/M$: the decimal block of $M - N$ is the "nines-complement" of that of $N$, and complementing preserves the minimal block length. Also $N \ne M - N$, since $M$ is odd so $N = M/2$ is impossible.

So the elements of $S$ split into $\frac{10^8-10^4}{2}$ disjoint pairs $\left\{\frac NM, \frac{M-N}{M}\right\}$, each summing to $\frac{M}{M} = 1$.

Therefore
$$\sum_{r\in S} r = \frac{10^8 - 10^4}{2} = \frac{100{,}000{,}000 - 10{,}000}{2} = \frac{99{,}990{,}000}{2} = \mathbf{49{,}995{,}000}. \;∎$$

**The idea to keep.** "Pair $x$ with its complement" turns a sum over a complicated set into (number of pairs) × (constant). Always check the pairing is a genuine involution without fixed points.
[/sol]
