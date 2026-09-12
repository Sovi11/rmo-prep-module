---
id: comb-02-binomial
title: Binomial coefficients and identities
level: Core
hours: 3
blurb: Pascal's rule, the binomial theorem, the standard identities and how to prove them by counting the same thing twice.
tags: binomial coefficients, Pascal, Vandermonde, identities
link: Yufei Zhao — Combinatorics handout :: https://yufeizhao.com/olympiad/comb1.pdf
video: Search: binomial coefficient identities combinatorial proof :: https://www.youtube.com/results?search_query=binomial+coefficient+identities+combinatorial+proof+olympiad
---

## The definitions

$$\binom nk = \frac{n!}{k!(n-k)!} \qquad (0\le k\le n), \qquad \binom nk = 0 \text{ for } k<0 \text{ or } k>n.$$

**Binomial theorem.**
$$(x+y)^n = \sum_{k=0}^{n}\binom nk x^{n-k}y^k.$$

## The identities worth knowing cold

$$\binom nk = \binom{n}{n-k} \qquad\textbf{(symmetry)}$$
$$\binom nk = \binom{n-1}{k-1}+\binom{n-1}{k} \qquad\textbf{(Pascal's rule)}$$
$$k\binom nk = n\binom{n-1}{k-1} \qquad\textbf{(committee–chair)}$$
$$\sum_{k=0}^n\binom nk = 2^n, \qquad \sum_{k=0}^n(-1)^k\binom nk = 0 \;(n\ge1)$$
$$\sum_{k=0}^{n}\binom nk^2 = \binom{2n}{n}, \qquad \sum_{k=0}^{r}\binom mk\binom{n}{r-k} = \binom{m+n}{r} \;\textbf{(Vandermonde)}$$
$$\sum_{k=r}^{n}\binom kr = \binom{n+1}{r+1} \qquad\textbf{(hockey stick)}$$

## Three ways to prove an identity

**1. Algebraically.** Expand the factorials and cancel. Always works, never illuminating.

**2. By counting two ways.** Find a set counted by both sides.

> **Committee–chair.** $k\binom nk$ counts: choose a committee of $k$ from $n$ people, then a chair from the committee. $n\binom{n-1}{k-1}$ counts: choose the chair from all $n$, then the remaining $k-1$ members from the other $n-1$. Same set, two counts. ∎

> **$\sum\binom nk^2 = \binom{2n}n$.** Split $2n$ people into two groups of $n$. Choosing $n$ of the $2n$ means choosing $k$ from the first group and $n-k$ from the second, for some $k$: $\sum_k \binom nk\binom{n}{n-k} = \sum_k\binom nk^2$. ∎

**3. By generating functions / substitution.** Plug specific values into the binomial theorem.

> $x=y=1$ gives $\sum\binom nk = 2^n$. $x=1, y=-1$ gives the alternating sum $=0$. Differentiating $(1+x)^n$ and setting $x=1$ gives $\sum k\binom nk = n2^{n-1}$.

> **Comparing coefficients** is the slickest route to Vandermonde: $(1+x)^m(1+x)^n = (1+x)^{m+n}$, and the coefficient of $x^r$ on the left is $\sum_k\binom mk\binom n{r-k}$, on the right $\binom{m+n}{r}$.

## Divisibility of binomial coefficients

- $p \mid \binom pk$ for $0<k<p$ when $p$ is prime. *(Because $p$ divides the numerator $p!$ but not $k!(p-k)!$.)* This gives the **freshman's dream** $(x+y)^p\equiv x^p+y^p\pmod p$, and hence Fermat's little theorem.
- **Kummer's theorem.** $v_p\binom{m+n}{m}$ equals the number of carries when adding $m$ and $n$ in base $p$.
- **Lucas' theorem.** $\binom mn \equiv \prod\binom{m_i}{n_i} \pmod p$ where $m_i, n_i$ are the base-$p$ digits. In particular $\binom mn$ is odd iff the binary digits of $n$ are a subset of those of $m$.

## Common traps

- Using $\binom nk$ with $k > n$ without setting it to 0.
- Forgetting that "choose a committee **with** a chair" and "choose a chair **then** a committee" must count the same objects, not merely be equinumerous by accident.
- In a two-way count, failing to say clearly **what set** is being counted. That sentence is where the marks are.

## Problems

### P1 | Warmup | Standard
Prove Pascal's rule $\binom nk = \binom{n-1}{k-1}+\binom{n-1}{k}$ combinatorially.
[hint]
Count $k$-subsets of an $n$-set by whether they contain a fixed element.
[/hint]
[sol]
$\binom nk$ counts the $k$-element subsets of $\{1,2,\dots,n\}$. Fix the element $n$ and split into two disjoint cases:

- **Subsets containing $n$:** the other $k-1$ elements are chosen from $\{1,\dots,n-1\}$, giving $\binom{n-1}{k-1}$.
- **Subsets not containing $n$:** all $k$ elements come from $\{1,\dots,n-1\}$, giving $\binom{n-1}{k}$.

The two cases are disjoint and together cover all $k$-subsets, so
$$\binom nk = \binom{n-1}{k-1}+\binom{n-1}{k}. \;∎$$
[/sol]

### P2 | Warmup | Standard
Evaluate $\sum_{k=0}^{n}\binom nk$ and $\sum_{k=0}^n k\binom nk$.
[hint]
Set $x=y=1$ in the binomial theorem. For the second, use committee–chair.
[/hint]
[sol]
**First.** Setting $x=y=1$ in $(x+y)^n = \sum\binom nk x^{n-k}y^k$:
$$\sum_{k=0}^n\binom nk = 2^n.$$
*(Combinatorially: the total number of subsets of an $n$-set.)*

**Second.** By committee–chair, $k\binom nk = n\binom{n-1}{k-1}$, so
$$\sum_{k=0}^{n}k\binom nk = n\sum_{k=1}^{n}\binom{n-1}{k-1} = n\sum_{j=0}^{n-1}\binom{n-1}{j} = n\,2^{n-1}. \;∎$$
[/sol]

### P3 | Easy | Standard
Prove the hockey stick identity: $\displaystyle\sum_{k=r}^{n}\binom kr = \binom{n+1}{r+1}$.
[hint]
Count $(r+1)$-subsets of $\{1,\dots,n+1\}$ by their largest element.
[/hint]
[sol]
The right side counts the $(r+1)$-element subsets of $\{1,2,\dots,n+1\}$.

Classify each such subset by its **largest** element. If the largest element is $k+1$ (where $k+1$ can range from $r+1$ to $n+1$, i.e. $k$ from $r$ to $n$), the remaining $r$ elements are chosen from $\{1,\dots,k\}$, giving $\binom kr$ ways.

These cases are disjoint (a set has exactly one largest element) and exhaustive, so
$$\binom{n+1}{r+1} = \sum_{k=r}^{n}\binom kr. \;∎$$
[/sol]

### P4 | Easy | Standard
Prove $\displaystyle\sum_{k=0}^{n}\binom nk^2 = \binom{2n}{n}$.
[hint]
Count $n$-subsets of a $2n$-set split into two halves.
[/hint]
[sol]
Take a set of $2n$ elements and split it into two groups $A$ and $B$ of size $n$ each.

The right side $\binom{2n}{n}$ counts all $n$-element subsets of the whole set.

Classify such a subset $S$ by $k = |S\cap A|$. Then $|S\cap B| = n-k$, and the number of subsets with this split is $\binom nk\binom{n}{n-k}$. Since $\binom{n}{n-k}=\binom nk$, that is $\binom nk^2$.

Summing over $k = 0,\dots,n$ (disjoint, exhaustive cases):
$$\binom{2n}{n} = \sum_{k=0}^n\binom nk^2. \;∎$$
[/sol]

### P5 | Medium | Standard
Prove Vandermonde's identity $\displaystyle\sum_{k=0}^{r}\binom mk\binom{n}{r-k} = \binom{m+n}{r}$ in two ways.
[hint]
Combinatorially: two groups again. Algebraically: compare coefficients of $x^r$ in $(1+x)^m(1+x)^n$.
[/hint]
[sol]
**Combinatorial proof.** Take $m$ men and $n$ women, and count committees of size $r$.

Directly: $\binom{m+n}{r}$.

By the number $k$ of men chosen: $\binom mk$ ways to choose the men and $\binom{n}{r-k}$ ways to choose the women. Summing over $k$ gives $\sum_k\binom mk\binom n{r-k}$.

Both count the same set, so they are equal. ∎

**Algebraic proof.** From $(1+x)^m(1+x)^n = (1+x)^{m+n}$, compare the coefficient of $x^r$ on both sides.

On the right: $\binom{m+n}{r}$.

On the left: $\left(\sum_i\binom mi x^i\right)\left(\sum_j\binom nj x^j\right)$, and the $x^r$ terms come from pairs with $i+j=r$:
$$\sum_{k=0}^{r}\binom mk\binom{n}{r-k}.$$

Equating coefficients of a polynomial identity gives the result. ∎
[/sol]

### P6 | Medium | Standard
Prove that $\binom{2n}{n}$ is even for every $n \ge 1$.
[hint]
Use $\binom{2n}{n} = \binom{2n-1}{n-1}+\binom{2n-1}{n}$ and symmetry.
[/hint]
[sol]
By Pascal's rule,
$$\binom{2n}{n} = \binom{2n-1}{n-1}+\binom{2n-1}{n}.$$

By the symmetry $\binom{m}{k}=\binom{m}{m-k}$ with $m = 2n-1$ and $k = n-1$:
$$\binom{2n-1}{n-1} = \binom{2n-1}{(2n-1)-(n-1)} = \binom{2n-1}{n}.$$

So the two summands are equal, and
$$\binom{2n}{n} = 2\binom{2n-1}{n},$$
which is even since $\binom{2n-1}{n}$ is a positive integer for $n\ge1$. ∎
[/sol]

### P7 | Medium | Standard
Show that $\displaystyle\sum_{k=0}^{n}(-1)^k\binom nk k^m = 0$ for every $0 \le m < n$.
[hint]
Induct on $m$, or note that the operator $\sum(-1)^k\binom nk f(k)$ is the $n$-th finite difference of $f$, which annihilates polynomials of degree $<n$.
[/hint]
[sol]
Define the finite difference operator $(\Delta f)(x) = f(x+1)-f(x)$. Iterating,
$$\left(\Delta^n f\right)(0) = \sum_{k=0}^{n}(-1)^{n-k}\binom nk f(k),$$
a standard identity proved by induction on $n$ using Pascal's rule.

So, up to the sign $(-1)^n$, the given sum is $\left(\Delta^n f\right)(0)$ with $f(x)=x^m$.

**Key fact:** $\Delta$ lowers the degree of a polynomial by exactly one. Indeed if $f$ has degree $d\ge1$ with leading coefficient $c$, then
$$f(x+1)-f(x) = c\left[(x+1)^d - x^d\right] + (\text{lower order}) = cd\,x^{d-1}+\cdots,$$
which has degree $d-1$. And $\Delta$ maps constants to 0.

Therefore applying $\Delta$ $n$ times to a polynomial of degree $m < n$ gives the zero polynomial, so
$$\sum_{k=0}^n(-1)^k\binom nk k^m = (-1)^n\left(\Delta^nf\right)(0) = 0. \;∎$$

*(For $m=n$ the same reasoning gives the value $(-1)^n n!$ up to sign — the leading coefficient survives.)*
[/sol]

### P8 | Medium | Standard
Prove that $p \mid \binom pk$ for every prime $p$ and $0 < k < p$, and deduce $(x+y)^p\equiv x^p+y^p\pmod p$.
[hint]
Write $k\binom pk = p\binom{p-1}{k-1}$ and use that $p$ is prime.
[/hint]
[sol]
**First claim.** By committee–chair,
$$k\binom pk = p\binom{p-1}{k-1}.$$
So $p \mid k\binom pk$. Since $0<k<p$ and $p$ is prime, $\gcd(k,p)=1$, so $p$ must divide $\binom pk$. ∎

**Deduction.** By the binomial theorem,
$$(x+y)^p = \sum_{k=0}^p\binom pk x^{p-k}y^k = x^p + y^p + \sum_{k=1}^{p-1}\binom pk x^{p-k}y^k.$$
Every term in the middle sum has a coefficient divisible by $p$, so
$$(x+y)^p \equiv x^p+y^p \pmod p. \;∎$$

**Bonus — Fermat's little theorem falls out.** Induct on $a$: $1^p\equiv 1$, and if $a^p\equiv a \pmod p$ then
$$(a+1)^p \equiv a^p + 1^p \equiv a+1 \pmod p.$$
So $a^p\equiv a\pmod p$ for all $a \ge 0$, and hence for all integers.
[/sol]

### P9 | Hard | Standard
Determine the largest power of 2 dividing $\binom{2n}{n}$.
[hint]
Use Kummer's theorem (carries in base 2), or Legendre's formula with the identity $v_2(n!) = n - s_2(n)$.
[/hint]
[sol]
By Legendre's formula in the form
$$v_p(n!) = \frac{n - s_p(n)}{p-1},$$
with $p=2$ we get $v_2(n!) = n - s_2(n)$, where $s_2(n)$ is the number of 1s in the binary expansion of $n$.

Therefore
$$v_2\!\left(\binom{2n}{n}\right) = v_2((2n)!) - 2v_2(n!) = \big(2n - s_2(2n)\big) - 2\big(n-s_2(n)\big) = 2s_2(n) - s_2(2n).$$

Since doubling in binary is a left shift, $s_2(2n) = s_2(n)$. Hence
$$v_2\!\left(\binom{2n}{n}\right) = s_2(n),$$
the number of 1s in the binary representation of $n$. ∎

**Checks.** $n=1$: $s_2(1)=1$ and $\binom21 = 2 = 2^1$ ✓. $n=3 = 11_2$: $s_2 = 2$, and $\binom63 = 20 = 4\cdot5$ ✓. $n=4=100_2$: $s_2=1$, and $\binom84 = 70 = 2\cdot35$ ✓.

**Corollary.** $\binom{2n}{n}$ is never odd for $n\ge1$ (since $s_2(n)\ge1$), recovering P6.
[/sol]

### P10 | Hard | Standard
Prove that $\displaystyle\sum_{k=0}^{n}\binom nk\binom{n+k}{k}(-1)^k = (-1)^n$.
[hint]
Interpret $\binom{n+k}{k}$ as a coefficient, or induct. A clean route: show both sides are the coefficient of the same thing, using $\binom{n+k}{k} = [x^n](1-x)^{-(k+1)}$.
[/hint]
[sol]
**Setup.** Recall the generating function
$$\frac{1}{(1-x)^{k+1}} = \sum_{m\ge0}\binom{m+k}{k}x^m,$$
so
$$\binom{n+k}{k} = [x^n]\,\frac{1}{(1-x)^{k+1}}.$$

**Compute the sum.**
$$S = \sum_{k=0}^n\binom nk(-1)^k\binom{n+k}{k} = [x^n]\sum_{k=0}^{n}\binom nk(-1)^k\frac{1}{(1-x)^{k+1}}.$$

Factor out $\frac{1}{1-x}$ and apply the binomial theorem to the remaining sum:
$$\sum_{k=0}^{n}\binom nk\left(\frac{-1}{1-x}\right)^k = \left(1 - \frac{1}{1-x}\right)^n = \left(\frac{(1-x)-1}{1-x}\right)^n = \left(\frac{-x}{1-x}\right)^n.$$

Therefore
$$S = [x^n]\;\frac{1}{1-x}\cdot\frac{(-1)^nx^n}{(1-x)^n} = (-1)^n\,[x^n]\,\frac{x^n}{(1-x)^{n+1}}.$$

Now $[x^n]\dfrac{x^n}{(1-x)^{n+1}} = [x^0]\dfrac{1}{(1-x)^{n+1}} = \binom{0+n}{n}\cdot\!$ — the constant term of $\frac{1}{(1-x)^{n+1}}$, which is $1$.

Hence
$$S = (-1)^n. \;∎$$

**Check $n=2$:** $\binom20\binom20 - \binom21\binom31+\binom22\binom42 = 1 - 2\cdot3 + 6 = 1$, and $(-1)^2 = 1$ ✓.
**Check $n=1$:** $1 - 1\cdot 2 = -1 = (-1)^1$ ✓.
[/sol]
