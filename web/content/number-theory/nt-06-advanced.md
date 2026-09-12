---
id: nt-06-advanced
title: Lifting the exponent and quadratic residues
level: Advanced
hours: 4
blurb: Two sharp tools — LTE for computing the exact power of p dividing a^n ± b^n, and quadratic residues for deciding when a square exists.
tags: LTE, valuation, quadratic residues, Legendre symbol
link: Yufei Zhao — a^n ± 1 (lifting the exponent) :: https://yufeizhao.com/olympiad/exponent_lifting.pdf
link: MOTP — Number theory :: https://jpsaha.github.io/MOTP/nt/
video: Search: lifting the exponent lemma olympiad :: https://www.youtube.com/results?search_query=lifting+the+exponent+lemma+LTE+olympiad
---

## Lifting the exponent

Recall $v_p(N)$ is the exponent of $p$ in $N$. LTE computes $v_p(a^n \pm b^n)$ exactly.

> **LTE, odd $p$.** Let $p$ be an odd prime, $a, b$ integers with $p \nmid a$, $p \nmid b$.
>
> - If $p \mid a - b$, then for all $n \ge 1$: $\;v_p(a^n - b^n) = v_p(a-b) + v_p(n)$.
> - If $p \mid a + b$ and $n$ is **odd**: $\;v_p(a^n + b^n) = v_p(a+b) + v_p(n)$.

> **LTE, $p = 2$.** Let $a, b$ be odd.
>
> - $v_2(a^n - b^n) = v_2(a-b) + v_2(a+b) + v_2(n) - 1$ for **even** $n$.
> - $v_2(a^n - b^n) = v_2(a - b)$ for **odd** $n$.

The hypotheses matter. The most common error is applying the odd-$p$ version when $p \mid a$ or $p\mid b$, or applying the "+" version with $n$ even.

**Why it is true (the $n=p$ case).** If $p \mid a-b$, write $a = b + pk$. Then
$$a^p - b^p = (b+pk)^p - b^p = \binom{p}{1}b^{p-1}pk + \binom p2 b^{p-2}(pk)^2 + \cdots$$
The first term has $v_p = 1 + v_p(k)\cdot\!$ … more simply, it is $p^2k b^{p-1}$ contributing $v_p \ge 2$; every later term carries $p^2$ or more. Careful bookkeeping gives $v_p(a^p-b^p) = v_p(a-b)+1$, and the general case follows by induction on $v_p(n)$ plus the factorisation $a^n - b^n = (a^m)^{n/m} - (b^m)^{n/m}$.

**Where LTE wins problems.** Anything of the form "find all $n$ such that $p^k \mid a^n - b^n$", or "show $a^n - b^n$ has at least $k$ factors of $p$", or equations like $x^n - y^n = z$ where you can compare valuations on both sides.

**Worked example.** *Find the largest $k$ with $3^k \mid 4^{100} - 1$.*

Here $a = 4, b = 1, p = 3$. We have $3 \mid 4-1 = 3$, and $3\nmid 4$, $3\nmid 1$. So
$$v_3(4^{100}-1) = v_3(3) + v_3(100) = 1 + 0 = 1.$$
So $k = 1$: exactly one factor of 3. ∎

## Quadratic residues

$a$ is a **quadratic residue** (QR) mod $p$ if $x^2\equiv a \pmod p$ has a solution, with $p \nmid a$.

> For an odd prime $p$, exactly $\frac{p-1}{2}$ of the non-zero residues are QRs.

**The Legendre symbol.**
$$\left(\frac ap\right) = \begin{cases} +1 & a \text{ is a QR mod } p\\ -1 & a \text{ is not}\\ 0 & p \mid a\end{cases}$$

> **Euler's criterion.** $\displaystyle \left(\frac ap\right) \equiv a^{\frac{p-1}{2}} \pmod p$.

It is **multiplicative**: $\left(\frac{ab}p\right) = \left(\frac ap\right)\left(\frac bp\right)$. So QR × QR = QR, QR × non-QR = non-QR, non-QR × non-QR = QR.

**The three facts to memorise:**

$$\left(\frac{-1}{p}\right) = \begin{cases}+1 & p\equiv 1 \pmod 4\\ -1 & p \equiv 3\pmod 4\end{cases}
\qquad
\left(\frac{2}{p}\right) = \begin{cases}+1 & p\equiv \pm1 \pmod 8\\ -1 & p\equiv \pm3\pmod 8\end{cases}$$

> **Quadratic reciprocity.** For distinct odd primes $p,q$:
> $$\left(\frac pq\right)\left(\frac qp\right) = (-1)^{\frac{p-1}{2}\cdot\frac{q-1}{2}}.$$
> So $\left(\frac pq\right) = \left(\frac qp\right)$ unless both $p,q \equiv 3 \pmod 4$, in which case they differ in sign.

**Where QRs win problems.** Showing an equation has no solutions when a mod-$p$ obstruction is subtler than "squares are 0 or 1". Classic pattern: reduce $x^2 \equiv c \pmod p$, compute $\left(\frac cp\right) = -1$, conclude no solution.

## Choosing the modulus: a checklist

When an equation resists, try in this order:

1. **Small moduli by shape.** Squares → 4, 8, 3. Cubes → 9, 7. Fourth powers → 16, 5.
2. **A modulus dividing a coefficient.** If the equation has a term $2025\,xy$, try 3 or 5.
3. **A prime $p$ with a small $\frac{p-1}{\gcd}$.** For $x^n$ terms, pick $p \equiv 1 \pmod n$; then $n$-th powers form a small subgroup, making the possible residues few.
4. **A modulus where one side is forced.** If $a^n$ appears, look at $p \mid a^k - 1$ for small $k$ so that $a^n$ cycles quickly.

> **Rule of thumb.** For an equation involving $n$-th powers, a prime $p \equiv 1 \pmod n$ leaves only $\frac{p-1}{n}$ possible non-zero values of $x^n$. The smaller that number, the more likely you get an obstruction.

## Common traps

- Applying LTE for $p=2$ with the odd-$p$ formula. The $p=2$ case is genuinely different.
- Applying the "$+$" form of LTE with $n$ even. It is false: $v_3(2^2+1^2) = v_3(5) = 0$, not $v_3(3)+v_3(2) = 1$.
- Concluding from "$\left(\frac ap\right)=1$ for all small $p$" that $a$ is a square. Congruence conditions are necessary, never sufficient.
- Forgetting that Euler's criterion requires $p$ odd.

## Problems

### P1 | Warmup | Standard
Find $v_5(6^{100} - 1)$.
[hint]
$5 \mid 6-1$. Apply LTE with $p=5$, $a=6$, $b=1$.
[/hint]
[sol]
$p=5$ is odd, $5 \nmid 6$, $5 \nmid 1$, and $5 \mid 6-1 = 5$. So LTE applies:
$$v_5(6^{100}-1) = v_5(6-1) + v_5(100) = 1 + 2 = 3.$$
So $5^3 \mid 6^{100}-1$ but $5^4 \nmid 6^{100}-1$. ∎
[/sol]

### P2 | Warmup | Standard
Which of $2, 3, 5$ are quadratic residues mod 11?
[hint]
Square everything: compute $1^2, 2^2, \dots, 5^2$ mod 11 — that gives all the QRs.
[/hint]
[sol]
$1^2=1,\ 2^2=4,\ 3^2=9,\ 4^2=16\equiv5,\ 5^2=25\equiv3 \pmod{11}$.

So the quadratic residues mod 11 are $\{1, 3, 4, 5, 9\}$ (exactly $\frac{11-1}{2}=5$ of them, as expected).

Hence: $2$ is **not** a QR; $3$ **is** ($5^2\equiv3$); $5$ **is** ($4^2 \equiv 5$). ∎

*(Cross-check with the formula: $11 \equiv 3 \pmod 8$, so $\left(\frac2{11}\right) = -1$ ✓.)*
[/sol]

### P3 | Easy | Standard
Prove that $x^2 \equiv -1 \pmod p$ has a solution if and only if $p = 2$ or $p \equiv 1 \pmod 4$.
[hint]
Use Euler's criterion: $\left(\frac{-1}p\right) \equiv (-1)^{(p-1)/2}$.
[/hint]
[sol]
For $p=2$: $1^2 \equiv 1 \equiv -1 \pmod 2$ ✓.

Let $p$ be odd. By Euler's criterion,
$$\left(\frac{-1}{p}\right) \equiv (-1)^{\frac{p-1}{2}} \pmod p.$$
Both sides are $\pm1$ and $p > 2$, so they are **equal** (two values in $\{1,-1\}$ congruent mod $p>2$ must coincide).

- If $p \equiv 1 \pmod 4$ then $\frac{p-1}{2}$ is even, so $\left(\frac{-1}p\right) = +1$ and a solution exists.
- If $p \equiv 3 \pmod 4$ then $\frac{p-1}{2}$ is odd, so $\left(\frac{-1}p\right) = -1$ and there is none. ∎
[/sol]

### P4 | Easy | Standard
Show that $x^2 + y^2 = 3^{2026}$ has no solutions in positive integers.
[hint]
Use: if $p \equiv 3 \pmod 4$ and $p \mid x^2+y^2$ then $p \mid x$ and $p \mid y$. Then descend.
[/hint]
[sol]
Recall the lemma (proved in the congruences chapter): *if $p \equiv 3 \pmod 4$ and $p \mid x^2+y^2$, then $p\mid x$ and $p\mid y$.*

Here $3 \equiv 3 \pmod 4$. Suppose $x^2+y^2 = 3^{2026}$ with $x,y$ positive. Since $3 \mid 3^{2026}$, the lemma gives $3\mid x$, $3 \mid y$. Write $x=3x_1$, $y=3y_1$:
$$9(x_1^2+y_1^2) = 3^{2026} \implies x_1^2+y_1^2 = 3^{2024}.$$
Repeating this $1013$ times reduces to
$$x_{1013}^2 + y_{1013}^2 = 3^{0} = 1$$
with $x_{1013}, y_{1013}$ positive integers. But the smallest value of a sum of two positive squares is $1+1 = 2 > 1$.

Contradiction, so no positive solutions exist. ∎
[/sol]

### P5 | Medium | Standard
Find all positive integers $n$ such that $3^n \mid 2^n - 1$.
[hint]
First find when $3 \mid 2^n-1$. Then apply LTE to compute $v_3(2^n-1)$ exactly and compare with $n$.
[/hint]
[sol]
**When does 3 divide $2^n-1$?** $2 \equiv -1 \pmod 3$, so $2^n \equiv (-1)^n$. Thus $3 \mid 2^n-1 \iff n$ is even.

So write $n = 2m$. Then
$$2^n - 1 = 4^m - 1.$$
Now apply LTE with $p = 3$, $a = 4$, $b=1$: we have $3\nmid 4$, $3\nmid 1$, and $3 \mid 4-1 = 3$. Hence
$$v_3(4^m - 1) = v_3(3) + v_3(m) = 1 + v_3(m).$$

The condition $3^n \mid 2^n-1$ means $v_3(2^n-1) \ge n$, i.e.
$$1 + v_3(m) \ge n = 2m.$$
Since $3^{v_3(m)} \le m$, we have $v_3(m) \le \log_3 m$. So we need $1 + \log_3 m \ge 2m$, which for $m \ge 1$ fails: at $m=1$, $1 + 0 = 1 < 2$; and the left side grows logarithmically while the right grows linearly.

Checking $m = 1$ explicitly: $n=2$, $2^2-1 = 3$, and $3^2 = 9 \nmid 3$. ✗

So **there is no positive integer $n$** with $3^n \mid 2^n-1$.

(If the problem is read as $n$ allowed to be 0: $3^0 = 1 \mid 2^0-1 = 0$ ✓ trivially.) ∎
[/sol]

### P6 | Medium | Standard
Determine all positive integers $n$ for which $3 \mid 2^n+1$, and all $n$ for which $9 \mid 2^n+1$.
[hint]
For the first, $2 \equiv -1 \pmod 3$. For the second, LTE with $p=3$ applies to $2^n + 1^n$ once you know $n$ is odd.
[/hint]
[sol]
**Divisibility by 3.** $2 \equiv -1 \pmod 3$, so
$$2^n + 1 \equiv (-1)^n + 1 \pmod 3,$$
which is $0$ precisely when $n$ is **odd**.

**Divisibility by 9.** If $9 \mid 2^n+1$ then certainly $3 \mid 2^n+1$, so $n$ is odd by the first part.

For odd $n$, apply LTE with $p = 3$, $a = 2$, $b = 1$. The hypotheses hold: $3 \nmid 2$, $3\nmid 1$, $3 \mid 2+1 = 3$, and $n$ is odd. Therefore
$$v_3(2^n+1) = v_3(2+1) + v_3(n) = 1 + v_3(n).$$

So $9 \mid 2^n+1 \iff v_3(2^n+1) \ge 2 \iff v_3(n)\ge 1 \iff 3 \mid n$.

**Answer.** $3 \mid 2^n+1$ exactly when $n$ is odd; $9 \mid 2^n+1$ exactly when $n$ is an **odd multiple of 3**.

Check: $n=3$ gives $2^3+1 = 9$ ✓. $n=9$ gives $513 = 9\cdot 57$ ✓. $n=6$ (even) gives $65$, not divisible by 3 ✓ consistent.

**Bonus, free from the same formula.** $27 \mid 2^n+1$ iff $v_3(n)\ge2$, i.e. $n$ is an odd multiple of 9. LTE gives the whole ladder at once — that is exactly what it is for.
[/sol]

### P7 | Medium | Standard
Let $p$ be an odd prime. Prove that the product of all quadratic residues mod $p$ is $\equiv (-1)^{(p+1)/2}\pmod p$.
[hint]
The QRs are $1^2, 2^2, \dots, \left(\frac{p-1}{2}\right)^2$. Their product is $\left(\left(\frac{p-1}{2}\right)!\right)^2$, and Wilson relates that to $\pm1$.
[/hint]
[sol]
Let $m = \frac{p-1}{2}$. As $k$ runs over $1, \dots, m$, the values $k^2$ run over **all** quadratic residues, each exactly once: they are distinct because $k^2\equiv j^2 \Rightarrow p \mid (k-j)(k+j)$ and $0<k+j<p$ forces $k=j$; and every QR is $x^2$ for some $x$, with $x$ or $p-x$ in $[1,m]$.

So the product of all QRs is
$$\prod_{k=1}^{m}k^2 = (m!)^2.$$

From the Wilson computation (see the Fermat/Euler chapter, P7),
$$(p-1)! \equiv (-1)^m (m!)^2 \pmod p,$$
and Wilson gives $(p-1)!\equiv -1$. Hence
$$(m!)^2 \equiv (-1)^{m}\cdot(-1) = (-1)^{m+1} \pmod p.$$

Since $m+1 = \frac{p-1}{2}+1 = \frac{p+1}{2}$, the product of all quadratic residues is
$$(-1)^{\frac{p+1}{2}} \pmod p. \;∎$$

Sanity check with $p=5$: QRs are $\{1,4\}$, product 4. Formula: $(-1)^{3} = -1 \equiv 4 \pmod 5$ ✓.
[/sol]

### P8 | Medium | Standard
Show that $x^2 - 5y^2 = 2$ has no integer solutions.
[hint]
Reduce mod 5: $x^2 \equiv 2 \pmod 5$. Is 2 a QR mod 5?
[/hint]
[sol]
Reduce modulo 5:
$$x^2 \equiv 2 \pmod 5.$$
The squares mod 5 are $0^2=0$, $1^2 = 1$, $2^2 = 4$, $3^2 = 9\equiv 4$, $4^2 = 16 \equiv 1$ — so $\{0,1,4\}$.

Since $2 \notin \{0,1,4\}$, no integer $x$ satisfies $x^2\equiv 2 \pmod 5$.

Hence the equation has no integer solutions. ∎

*(By contrast $x^2-5y^2 = 4$ does: $(x,y)=(3,1)$. The modulus 5 is the right one precisely because it kills the $y$ term.)*
[/sol]

### P9 | Hard | Standard
Find all primes $p$ for which $p \mid n^2+n+1$ for some integer $n$.
[hint]
Multiply by 4 and complete the square: $4(n^2+n+1) = (2n+1)^2+3$. So you need $-3$ to be a QR mod $p$. Use reciprocity, or the order of $n$ mod $p$.
[/hint]
[sol]
$p = 3$: take $n = 1$, giving $3 \mid 3$ ✓.

Let $p \ne 3$ be an odd prime (note $p=2$: $n^2+n+1 = n(n+1)+1$ is always odd, so $p=2$ fails).

Multiplying by 4 (invertible mod odd $p$),
$$4(n^2+n+1) = (2n+1)^2 + 3.$$
So $p \mid n^2+n+1$ for some $n$ $\iff$ $u^2 \equiv -3 \pmod p$ is solvable (with $u = 2n+1$, and $u$ ranges over all residues as $n$ does).

**Order argument (cleanest).** Suppose $p \mid n^2+n+1$. Then $p \mid (n-1)(n^2+n+1) = n^3-1$, so $n^3\equiv 1 \pmod p$. Let $d = \operatorname{ord}_p(n)$; then $d \mid 3$, so $d \in \{1,3\}$.

If $d = 1$ then $n\equiv 1$, so $n^2+n+1\equiv 3 \pmod p$, forcing $p \mid 3$, i.e. $p = 3$ — excluded.

So $d = 3$, and since $d \mid p-1$, we get $3 \mid p-1$, i.e. $p \equiv 1 \pmod 3$.

**Conversely**, if $p \equiv 1 \pmod 3$, then the multiplicative group mod $p$ (cyclic of order $p-1$) has an element $g$ of order 3. That $g$ satisfies $g^3 = 1$, $g \ne 1$, so $g^2+g+1 = \frac{g^3-1}{g-1} \equiv 0 \pmod p$. Taking $n = g$ works.

**Answer:** $p = 3$ and all primes $p \equiv 1 \pmod 3$. ∎

*(Equivalently: $-3$ is a QR mod $p$ exactly for $p=3$ and $p \equiv 1 \pmod 3$.)*
[/sol]

### P10 | Hard | Standard
Let $p$ be an odd prime and let $a$ be an integer with $p \nmid a$. Prove that $x^2 \equiv a \pmod{p^k}$ is solvable for every $k \ge 1$ if and only if it is solvable for $k = 1$.
[hint]
One direction is trivial. For the other, given a solution mod $p^k$, look for a solution mod $p^{k+1}$ of the form $x + tp^k$ and solve for $t$ — a linear congruence. This is Hensel lifting.
[/hint]
[sol]
**($\Rightarrow$)** Immediate: a solution mod $p^k$ for $k \ge 1$ reduces to a solution mod $p$.

**($\Leftarrow$)** We induct on $k$. Suppose $x_k$ satisfies $x_k^2 \equiv a \pmod{p^k}$; we construct $x_{k+1}$ with $x_{k+1}^2\equiv a \pmod{p^{k+1}}$.

Write $x_k^2 - a = p^k m$ for some integer $m$. Look for $x_{k+1} = x_k + tp^k$. Then
$$x_{k+1}^2 = x_k^2 + 2tp^kx_k + t^2p^{2k} \equiv x_k^2 + 2tp^kx_k \pmod{p^{k+1}},$$
since $2k \ge k+1$ for $k \ge 1$. Therefore
$$x_{k+1}^2 - a \equiv p^km + 2tp^kx_k = p^k\left(m + 2tx_k\right) \pmod{p^{k+1}}.$$
So we need
$$m + 2tx_k \equiv 0 \pmod p.$$

This is a linear congruence in $t$ with coefficient $2x_k$. It is solvable provided $\gcd(2x_k, p) = 1$:

- $p$ is odd, so $p \nmid 2$.
- $p \nmid x_k$, because $x_k^2 \equiv a \pmod{p}$ and $p \nmid a$.

Hence $2x_k$ is invertible mod $p$, and $t \equiv -m(2x_k)^{-1} \pmod p$ gives the required lift.

By induction, solvability mod $p$ propagates to all $k \ge 1$. ∎

**Remark.** The hypotheses are sharp. For $p = 2$ the argument breaks (2 is not invertible), and indeed $x^2\equiv 3 \pmod 2$ is solvable while $x^2 \equiv 3\pmod 8$ is not. And if $p \mid a$ the "derivative" $2x_k$ vanishes mod $p$ and lifting can fail.
[/sol]
