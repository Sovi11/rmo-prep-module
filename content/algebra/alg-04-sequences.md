---
id: alg-04-sequences
title: Sequences, recurrences and sums
level: Core
hours: 3
blurb: Telescoping, linear recurrences and their closed forms, and the standard tricks for evaluating or bounding a sum you cannot compute directly.
tags: sequences, recurrences, telescoping, series
link: MOTP — Algebra :: https://jpsaha.github.io/MOTP/alg/
video: Search: telescoping sums recurrence relations olympiad :: https://www.youtube.com/results?search_query=telescoping+sum+linear+recurrence+olympiad
---

## Telescoping

The single most useful trick with sums. If you can write $a_k = b_k - b_{k+1}$, then
$$\sum_{k=1}^{n} a_k = b_1 - b_{n+1}.$$

**How to spot it.** A term that is a *difference of consecutive things in disguise*:

$$\frac{1}{k(k+1)} = \frac1k - \frac1{k+1}, \qquad \frac{1}{k(k+2)} = \frac12\left(\frac1k - \frac1{k+2}\right),$$
$$\frac{k}{(k+1)!} = \frac{1}{k!}-\frac{1}{(k+1)!}, \qquad \frac{1}{\sqrt{k}+\sqrt{k+1}} = \sqrt{k+1}-\sqrt k.$$

Products telescope too: $\prod \frac{b_k}{b_{k+1}} = \frac{b_1}{b_{n+1}}$.

> **The habit.** Faced with $\sum f(k)$, always ask: *is $f(k)$ of the form $g(k)-g(k+1)$?* Partial fractions is the usual way to find out.

## Linear recurrences

> For $a_{n+1} = pa_n + qa_{n-1}$, form the **characteristic equation** $x^2 = px+q$.
>
> - Distinct roots $r \ne s$: $\;a_n = Ar^n + Bs^n$.
> - Repeated root $r$: $\;a_n = (A+Bn)r^n$.
>
> Determine $A, B$ from $a_0$ and $a_1$.

**Example.** Fibonacci: $F_{n+1}=F_n+F_{n-1}$, characteristic $x^2=x+1$, roots $\varphi = \frac{1+\sqrt5}{2}$ and $\psi = \frac{1-\sqrt5}{2}$. With $F_0=0, F_1=1$,
$$F_n = \frac{\varphi^n - \psi^n}{\sqrt 5}.$$

For a **non-homogeneous** recurrence $a_{n+1}=pa_n+f(n)$, find any particular solution and add the general homogeneous one. If $f$ is a polynomial of degree $d$ and $p \ne 1$, try a polynomial of degree $d$; if $p=1$, try degree $d+1$.

## Standard sums to know

$$\sum_{k=1}^n k = \frac{n(n+1)}2, \qquad \sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}, \qquad \sum_{k=1}^n k^3 = \left(\frac{n(n+1)}{2}\right)^2$$
$$\sum_{k=0}^{n} r^k = \frac{r^{n+1}-1}{r-1} \;(r \ne 1), \qquad \sum_{k=0}^\infty r^k = \frac{1}{1-r} \;(|r|<1)$$

## Bounding a sum

When you cannot evaluate a sum, bound it:

- **Compare with a telescoping sum.** $\frac{1}{k^2} < \frac{1}{k(k-1)} = \frac1{k-1}-\frac1k$ gives $\sum_{k\ge2}\frac1{k^2}<1$.
- **Compare with a geometric series.** If $a_{k+1}/a_k \le r < 1$ eventually, the tail is bounded by a geometric series.
- **Group terms in blocks.** The classic proof that $\sum \frac1k$ diverges: group $\frac13+\frac14 > \frac12$, $\frac15+\cdots+\frac18>\frac12$, etc.
- **AM–GM or Cauchy–Schwarz** on the whole sum. (See the inequalities chapters.)

## Monotone bounded sequences

A sequence that is increasing and bounded above converges. At RMO this is mostly used qualitatively: to show a recursively defined sequence has a limit, prove monotonicity (usually by induction) and boundedness (usually by finding a fixed point of the recurrence as the bound). If $a_{n+1}=g(a_n)$ converges to $L$ and $g$ is continuous, then $L = g(L)$ — which finds the candidate limit.

## Worked example

**Evaluate $\displaystyle\sum_{k=1}^{n}\frac{1}{k(k+1)(k+2)}$.**

Partial fractions:
$$\frac{1}{k(k+1)(k+2)} = \frac12\left(\frac{1}{k(k+1)} - \frac{1}{(k+1)(k+2)}\right).$$
This telescopes with $b_k = \frac{1}{2k(k+1)}$:
$$\sum_{k=1}^{n} = \frac12\left(\frac{1}{1\cdot2} - \frac{1}{(n+1)(n+2)}\right) = \frac14 - \frac{1}{2(n+1)(n+2)}. \;∎$$

## Common traps

- Using the characteristic-root formula on a **non-linear** recurrence.
- Forgetting the repeated-root case, or the $n r^n$ term in it.
- Telescoping and getting the endpoints wrong. Write out the first two and last two terms explicitly.
- Assuming a recursively defined sequence converges before proving it does.

## Problems

### P1 | Warmup | Standard
Evaluate $\displaystyle\sum_{k=1}^{n}\frac1{k(k+1)}$.
[hint]
Partial fractions.
[/hint]
[sol]
$$\frac{1}{k(k+1)} = \frac1k - \frac1{k+1}.$$
Summing,
$$\sum_{k=1}^n\left(\frac1k-\frac1{k+1}\right) = \left(1-\frac12\right)+\left(\frac12-\frac13\right)+\cdots+\left(\frac1n-\frac1{n+1}\right) = 1 - \frac1{n+1} = \frac{n}{n+1}. \;∎$$
[/sol]

### P2 | Warmup | Standard
Solve $a_{n+1}=5a_n-6a_{n-1}$ with $a_0=1$, $a_1=4$.
[hint]
Characteristic equation $x^2-5x+6=0$.
[/hint]
[sol]
The characteristic equation is $x^2 = 5x-6$, i.e. $x^2-5x+6 = (x-2)(x-3)=0$, with distinct roots $2$ and $3$. So
$$a_n = A\cdot2^n + B\cdot3^n.$$
From $a_0=1$: $A+B=1$. From $a_1=4$: $2A+3B=4$. Subtracting twice the first from the second: $B=2$, hence $A=-1$.

$$a_n = 2\cdot3^n - 2^n.$$

Check: $a_0 = 2-1=1$ ✓, $a_1=6-2=4$ ✓, $a_2 = 18-4=14$ and $5(4)-6(1)=14$ ✓. ∎
[/sol]

### P3 | Easy | Standard
Evaluate $\displaystyle\sum_{k=1}^{99}\frac{1}{\sqrt k+\sqrt{k+1}}$.
[hint]
Rationalise each term.
[/hint]
[sol]
Multiply numerator and denominator by $\sqrt{k+1}-\sqrt k$:
$$\frac{1}{\sqrt k+\sqrt{k+1}} = \frac{\sqrt{k+1}-\sqrt k}{(k+1)-k} = \sqrt{k+1}-\sqrt k.$$

The sum telescopes:
$$\sum_{k=1}^{99}\left(\sqrt{k+1}-\sqrt k\right) = \sqrt{100}-\sqrt1 = 10 - 1 = 9. \;∎$$
[/sol]

### P4 | Easy | Standard
Prove that $\displaystyle\sum_{k=1}^{n}\frac{1}{k^2} \le 2 - \frac1n$ for every $n \ge 1$, with equality only when $n=1$. Deduce that the sum is always less than 2.
[hint]
Bound $\frac{1}{k^2} < \frac{1}{k(k-1)}$ for $k \ge 2$ and telescope.
[/hint]
[sol]
For $k \ge 2$, $k^2 > k(k-1)$, so
$$\frac{1}{k^2} < \frac{1}{k(k-1)} = \frac{1}{k-1}-\frac1k.$$
Hence
$$\sum_{k=1}^n\frac1{k^2} < 1 + \sum_{k=2}^{n}\left(\frac1{k-1}-\frac1k\right) = 1 + \left(1 - \frac1n\right) = 2-\frac1n$$
for $n \ge 2$, and for $n=1$ both sides equal 1.

So $\sum_{k=1}^n \frac1{k^2}\le 2-\frac1n$ with equality only when $n=1$. ∎

*(In particular the sum is always less than 2. The true limit is $\pi^2/6 \approx 1.645$.)*
[/sol]

### P5 | Medium | Standard
The sequence is defined by $a_1 = 1$ and $a_{n+1} = \dfrac{a_n}{1+a_n}$. Find a closed form for $a_n$.
[hint]
Take reciprocals: what recurrence does $b_n = 1/a_n$ satisfy?
[/hint]
[sol]
All terms are positive (by induction: $a_1=1>0$, and $a_n>0 \Rightarrow a_{n+1}=\frac{a_n}{1+a_n}>0$), so we may take reciprocals. Let $b_n = \frac{1}{a_n}$. Then
$$b_{n+1} = \frac{1+a_n}{a_n} = \frac{1}{a_n}+1 = b_n + 1.$$

So $(b_n)$ is an arithmetic progression with $b_1 = 1$ and common difference 1, giving $b_n = n$.

Therefore
$$a_n = \frac1n.$$

Check: $a_1=1$ ✓, $a_2 = \frac{1}{1+1}=\frac12$ ✓, $a_3 = \frac{1/2}{3/2}=\frac13$ ✓. ∎
[/sol]

### P6 | Medium | CRMO 2014 P2
Let $a_1, a_2, \dots, a_{2n}$ be an arithmetic progression of positive reals with common difference $d$. Given
$$a_1^2+a_3^2+\cdots+a_{2n-1}^2 = x, \qquad a_2^2+a_4^2+\cdots+a_{2n}^2=y, \qquad a_n+a_{n+1}=z,$$
express $d$ in terms of $x,y,z,n$.
[hint]
Compute $y - x$ by pairing $a_{2k}^2 - a_{2k-1}^2$ as a difference of squares. The sum that appears should relate to $z$.
[/hint]
[sol]
Pair the terms and use the difference of squares:
$$y - x = \sum_{k=1}^{n}\left(a_{2k}^2 - a_{2k-1}^2\right) = \sum_{k=1}^n \left(a_{2k}-a_{2k-1}\right)\left(a_{2k}+a_{2k-1}\right).$$

Since the sequence is an AP with common difference $d$, each $a_{2k}-a_{2k-1} = d$, so
$$y - x = d\sum_{k=1}^{n}\left(a_{2k-1}+a_{2k}\right) = d\sum_{j=1}^{2n}a_j.$$

The sum of all $2n$ terms of an AP is $2n$ times the average of the first and last, which equals $n(a_1+a_{2n})$. And because $a_1 + a_{2n} = a_n + a_{n+1}$ (both pairs are symmetric about the centre — indeed $a_1+a_{2n} = 2a_1+(2n-1)d = a_n+a_{n+1}$), we get
$$\sum_{j=1}^{2n}a_j = n\left(a_n+a_{n+1}\right) = nz.$$

Therefore
$$y - x = d\cdot nz \implies \boxed{\,d = \frac{y-x}{nz}\,}$$

(Note $z > 0$ since the terms are positive, so the division is valid.) ∎
[/sol]

### P7 | Medium | Standard
Let $a_1 = \sqrt2$ and $a_{n+1}=\sqrt{2+a_n}$. Prove the sequence converges and find its limit.
[hint]
Show by induction that $a_n < 2$ and that the sequence is increasing. Then use the fixed-point equation.
[/hint]
[sol]
**Bounded above by 2.** Induction: $a_1 = \sqrt2 < 2$. If $a_n<2$ then $a_{n+1}=\sqrt{2+a_n}<\sqrt{2+2}=2$ ✓.

**Increasing.** We show $a_{n+1}>a_n$. Since all terms lie in $(0,2)$,
$$a_{n+1}^2 - a_n^2 = 2+a_n - a_n^2 = -(a_n-2)(a_n+1) > 0$$
because $a_n - 2 < 0$ and $a_n+1>0$. As both terms are positive, $a_{n+1}>a_n$ ✓.

**Convergence.** An increasing sequence bounded above converges; let $L = \lim a_n$, with $L \le 2$.

**The limit.** Taking limits in $a_{n+1}^2 = 2+a_n$ (valid since $x \mapsto x^2$ is continuous):
$$L^2 = 2+L \implies L^2-L-2 = 0 \implies (L-2)(L+1)=0.$$
So $L = 2$ or $L=-1$. Since all terms are positive, $L \ge a_1 > 0$, so
$$L = 2. \;∎$$
[/sol]

### P8 | Medium | CRMO 2016 P6
Let $\langle a_1, a_2, a_3, \dots\rangle$ be a strictly increasing arithmetic progression of positive integers. Prove that it contains an infinite subsequence in geometric progression.
[hint]
Say $a_n = a + (n-1)d$. Look for terms of the form $a\cdot r^k$ for a cleverly chosen ratio $r$. What value of $r$ makes $a r^k$ automatically congruent to $a$ modulo $d$?
[/hint]
[sol]
Write the progression as $a_n = a + (n-1)d$ with $a, d$ positive integers. The terms of the AP are exactly the positive integers $\equiv a \pmod d$ that are $\ge a$.

**The construction.** Take $r = 1 + d$ and consider the geometric sequence
$$a,\quad a r,\quad a r^2,\quad a r^3,\quad \dots$$

**Claim: every $a r^k$ belongs to the AP.**

Since $r = 1+d \equiv 1 \pmod d$, we have $r^k \equiv 1^k = 1 \pmod d$, hence
$$a\,r^k \equiv a \pmod d.$$
So each $ar^k$ is a positive integer congruent to $a$ modulo $d$. It is also $\ge a$ (because $r \ge 2$, as $d \ge 1$). Therefore $ar^k$ is a term of the progression: writing $ar^k = a + (m-1)d$ determines a positive integer $m$.

**The subsequence is infinite and geometric.** The numbers $a, ar, ar^2,\dots$ are strictly increasing (as $r \ge 2$ and $a \ge 1$), so they give infinitely many distinct terms of the AP, and by construction they form a geometric progression with ratio $r = 1+d$.

Hence the AP contains an infinite geometric subsequence. ∎

*(The idea in one line: **choose the ratio congruent to 1 modulo the common difference**, and the geometric sequence can never leave the residue class.)*
[/sol]

### P9 | Hard | Standard
Define $a_1 = 1$, $a_{n+1} = a_n + \dfrac{1}{a_n}$. Prove that $a_{100} > 14$.
[hint]
Do not track $a_n$; track $a_n^2$. Squaring the recurrence gives a very clean lower bound.
[/hint]
[sol]
All terms are positive (obvious by induction). Square the recurrence:
$$a_{n+1}^2 = \left(a_n+\frac1{a_n}\right)^2 = a_n^2 + 2 + \frac{1}{a_n^2} > a_n^2 + 2.$$

So $b_n := a_n^2$ satisfies $b_{n+1} > b_n + 2$, with $b_1 = 1$. By induction,
$$b_n > 1 + 2(n-1) = 2n-1.$$

Therefore
$$a_{100}^2 = b_{100} > 199 \implies a_{100} > \sqrt{199} > 14,$$
since $14^2 = 196 < 199$. ∎

*(The same estimate in the other direction, $a_{n+1}^2 = a_n^2+2+\frac1{a_n^2} \le a_n^2+2+1$ for $n\ge1$, gives $a_n < \sqrt{3n}$, so $a_n$ grows like $\sqrt{2n}$.)*
[/sol]

### P10 | Hard | Standard
Let $F_n$ be the Fibonacci sequence ($F_1=F_2=1$). Prove that $\gcd(F_m, F_n) = F_{\gcd(m,n)}$.
[hint]
First prove the identity $F_{m+n}=F_mF_{n+1}+F_{m-1}F_n$. Deduce $\gcd(F_m,F_n)=\gcd(F_m, F_{n-m})$ and run the Euclidean algorithm on the indices.
[/hint]
[sol]
**Step 1: the addition identity.** For $m \ge 1$, $n \ge 1$:
$$F_{m+n} = F_m F_{n+1} + F_{m-1}F_n. \tag{$\ast$}$$
*Proof by induction on $n$.* For $n=1$: $F_{m+1} = F_mF_2 + F_{m-1}F_1 = F_m + F_{m-1}$ ✓. For $n=2$: $F_{m+2}=F_mF_3+F_{m-1}F_2 = 2F_m+F_{m-1} = F_{m+1}+F_m$ ✓. If $(\ast)$ holds for $n$ and $n-1$, then adding those two instances gives it for $n+1$, since both sides satisfy the Fibonacci recurrence in $n$. ∎

**Step 2: consecutive Fibonacci numbers are coprime.** $\gcd(F_n, F_{n+1}) = 1$: any common divisor divides $F_{n+1}-F_n = F_{n-1}$, and descending, divides $F_1 = 1$.

**Step 3: the reduction.** Let $m < n$ and write $n = m + k$. By $(\ast)$,
$$F_n = F_{m+k} = F_mF_{k+1}+F_{m-1}F_k.$$
Reducing modulo $F_m$,
$$F_n \equiv F_{m-1}F_k \pmod{F_m}.$$
Since $\gcd(F_{m-1}, F_m)=1$ (Step 2), multiplication by $F_{m-1}$ is invertible mod $F_m$, so
$$\gcd(F_n, F_m) = \gcd(F_{m-1}F_k,\, F_m) = \gcd(F_k, F_m).$$

That is,
$$\gcd(F_m, F_n) = \gcd(F_m, F_{n-m}).$$

**Step 4: run the Euclidean algorithm.** The relation in Step 3 is exactly the Euclidean algorithm performed on the **indices**. Iterating it reduces the pair $(m,n)$ to $(\gcd(m,n), 0)$, and since $F_0 = 0$,
$$\gcd(F_m,F_n) = \gcd\left(F_{\gcd(m,n)}, F_0\right) = F_{\gcd(m,n)}. \;∎$$

**Check.** $\gcd(F_{12},F_{18}) = \gcd(144, 2584)$. Now $\gcd(12,18)=6$ and $F_6 = 8$; indeed $2584 = 8\cdot323$ and $144 = 8\cdot18$, with $\gcd(18,323)=1$ ✓.
[/sol]
