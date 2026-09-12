---
id: nt-04-fermat-euler
title: Fermat, Euler, Wilson and orders
level: Core
hours: 5
blurb: The three named theorems that let you compute with exponents, plus the order of an element — the tool that makes them sharp.
tags: Fermat, Euler, Wilson, order, totient
link: Yufei Zhao — Modular arithmetic, Fermat, Euler, order :: https://yufeizhao.com/olympiad/mod2.pdf
link: MOTP — Number theory :: https://jpsaha.github.io/MOTP/nt/
video: Search: Fermat little theorem Euler theorem olympiad :: https://www.youtube.com/results?search_query=fermat+little+theorem+order+of+element+olympiad
---

## Euler's totient

$\varphi(n)$ counts the integers in $\{1, \dots, n\}$ coprime to $n$. It is multiplicative, and
$$\varphi(p^k) = p^k - p^{k-1} = p^{k-1}(p-1), \qquad \varphi(n) = n\prod_{p \mid n}\left(1 - \frac1p\right).$$

So $\varphi(12) = 12(1-\frac12)(1-\frac13) = 4$, namely $\{1,5,7,11\}$.

Another identity that shows up: $\displaystyle\sum_{d \mid n}\varphi(d) = n$.

## The three theorems

> **Fermat's little theorem.** If $p$ is prime and $p \nmid a$, then $a^{p-1}\equiv 1 \pmod p$.
> Equivalently, $a^p \equiv a \pmod p$ **for every** integer $a$ (this form needs no coprimality).

> **Euler's theorem.** If $\gcd(a,n)=1$, then $a^{\varphi(n)}\equiv 1 \pmod n$.

> **Wilson's theorem.** $p$ is prime **iff** $(p-1)! \equiv -1 \pmod p$.

Euler generalises Fermat ($\varphi(p) = p-1$). Wilson is the odd one out: it is an *equivalence*, so it can be used to prove primality as well as to compute.

**What Fermat/Euler are for:** reducing exponents. If $\gcd(a,n)=1$ then
$$a^{k}\equiv a^{k \bmod \varphi(n)} \pmod n.$$
**The exponent reduces mod $\varphi(n)$ — never mod $n$.** This is the single most common error in the topic.

## The order of an element

Let $\gcd(a,n)=1$. The **order** $\operatorname{ord}_n(a)$ is the smallest positive $d$ with $a^d \equiv 1 \pmod n$.

> **The key lemma.** $a^k \equiv 1 \pmod n \iff \operatorname{ord}_n(a) \mid k$.

*Proof.* Write $k = qd + r$ with $d = \operatorname{ord}_n(a)$ and $0 \le r < d$. Then $1 \equiv a^k = (a^d)^q a^r \equiv a^r$. Minimality of $d$ forces $r=0$. ∎

**Immediate corollaries** (and these win problems):

- $\operatorname{ord}_n(a) \mid \varphi(n)$, by Euler. For prime $p$: $\operatorname{ord}_p(a) \mid p - 1$.
- If $p \mid a^k - 1$ then $\operatorname{ord}_p(a) \mid k$.
- **If $p \mid a^p - 1$ type situations arise**, combine: $\operatorname{ord} \mid k$ and $\operatorname{ord} \mid p-1$ give $\operatorname{ord} \mid \gcd(k, p-1)$.

That last combination is the workhorse. A typical deduction:

> **If $p$ is a prime divisor of $2^q - 1$ with $q$ prime, then $p \equiv 1 \pmod q$.**
>
> Let $d = \operatorname{ord}_p(2)$. From $2^q\equiv 1$ we get $d \mid q$, so $d = 1$ or $d = q$. If $d=1$ then $p \mid 2 - 1 = 1$, absurd. So $d = q$. But also $d \mid p-1$, so $q \mid p-1$, i.e. $p \equiv 1 \pmod q$. ∎

This is how you prove statements like "every prime divisor of $2^{11}-1$ is $\equiv 1 \pmod{11}$" — and it narrows a search enormously.

## Primitive roots

For a prime $p$ there exists $g$ with $\operatorname{ord}_p(g) = p-1$; such a $g$ is a **primitive root**, and its powers $g^0, g^1,\dots,g^{p-2}$ run through all non-zero residues. Primitive roots exist mod $n$ exactly for $n = 1, 2, 4, p^k, 2p^k$ ($p$ odd prime).

You rarely need to construct one at RMO, but knowing they exist lets you say "write everything as a power of $g$", which converts multiplicative questions into additive ones mod $p-1$.

## Worked example 1

**Find the last two digits of $7^{2026}$.**

We want $7^{2026} \bmod 100$. Since $\gcd(7,100)=1$ and $\varphi(100) = 100 \cdot \frac12\cdot\frac45 = 40$, Euler gives $7^{40}\equiv 1 \pmod{100}$.

$2026 = 40 \cdot 50 + 26$, so $7^{2026}\equiv 7^{26}\pmod{100}$.

Now $7^2 = 49$, $7^4 = 49^2 = 2401 \equiv 1 \pmod{100}$. So the order of 7 is actually 4, and $26 = 4\cdot 6 + 2$:
$$7^{2026} \equiv 7^2 = 49 \pmod{100}.$$
The last two digits are **49**. ∎

*(Notice: Euler gave a valid exponent reduction, but the true order was much smaller. Always look for a smaller order — it saves work.)*

## Worked example 2

**Prove that $p \mid (p-1)! + 1$ for every prime $p$ (Wilson).**

For $p = 2$: $1! + 1 = 2$ ✓. Let $p$ be odd.

In the product $(p-1)! = 1\cdot 2\cdots(p-1)$, pair each $a$ with its inverse $a^{-1}$ mod $p$ (which exists and is unique in $\{1,\dots,p-1\}$). The pairs $\{a, a^{-1}\}$ multiply to 1, so all that survives is the product of the **self-inverse** elements.

$a$ is self-inverse iff $a^2 \equiv 1$, iff $p \mid (a-1)(a+1)$, iff $a \equiv \pm 1 \pmod p$. So the self-inverse elements are $1$ and $p-1$.

Hence $(p-1)! \equiv 1 \cdot (p-1) \equiv -1 \pmod p$. ∎

## Common traps

- Reducing an exponent mod $n$ instead of mod $\varphi(n)$.
- Using Euler's theorem without checking $\gcd(a,n)=1$.
- Assuming $\operatorname{ord}_n(a) = \varphi(n)$. It divides $\varphi(n)$; equality is special.
- Using $a^{p-1}\equiv 1 \pmod p$ when $p \mid a$. Use the $a^p \equiv a$ form if you are unsure.
- For composite $n$, there is no "Fermat test" — $2^{340}\equiv 1 \pmod{341}$ but $341 = 11 \cdot 31$.

## Problems

### P1 | Warmup | Standard
Compute $\varphi(2026)$ and the last digit of $3^{2026}$.
[hint]
$2026 = 2 \cdot 1013$, and 1013 is prime. For the last digit, work mod 10.
[/hint]
[sol]
**Totient.** $2026 = 2 \cdot 1013$ with 1013 prime (it is not divisible by any prime up to $31$). So
$$\varphi(2026) = \varphi(2)\varphi(1013) = 1 \cdot 1012 = 1012.$$

**Last digit.** Work mod 10: $3^1 \equiv 3, 3^2 \equiv 9, 3^3\equiv 7, 3^4 \equiv 1$, so the order of 3 mod 10 is 4. Since $2026 = 4\cdot 506 + 2$,
$$3^{2026}\equiv 3^2 = 9 \pmod{10}.$$
The last digit is **9**. ∎
[/sol]

### P2 | Warmup | Standard
Find the remainder when $2^{100}$ is divided by 125.
[hint]
$\varphi(125) = 100$. Euler applies directly.
[/hint]
[sol]
$\gcd(2,125)=1$ and $\varphi(125) = 125 - 25 = 100$. By Euler's theorem,
$$2^{100}\equiv 1 \pmod{125}.$$
The remainder is **1**. ∎
[/sol]

### P3 | Easy | Standard
Prove that $n^{13} - n$ is divisible by $2730$ for every integer $n$. ($2730 = 2\cdot3\cdot5\cdot7\cdot13$.)
[hint]
Check each prime separately using $a^p\equiv a \pmod p$, and note $p - 1 \mid 12$ for each of these primes.
[/hint]
[sol]
$2730 = 2 \cdot 3 \cdot 5 \cdot 7 \cdot 13$, a product of distinct primes, so it suffices to show each divides $n^{13}-n$.

For each such prime $p$, note $p - 1 \mid 12$:
$$2-1 = 1,\quad 3-1=2,\quad 5-1=4,\quad 7-1=6,\quad 13-1=12,$$
and all of $1,2,4,6,12$ divide 12.

Now fix such a $p$. If $p \mid n$ then $p \mid n^{13}-n$ trivially. Otherwise $\gcd(n,p)=1$ and Fermat gives $n^{p-1}\equiv 1 \pmod p$; since $(p-1)\mid 12$, raising to the power $12/(p-1)$ gives $n^{12}\equiv 1 \pmod p$, hence
$$n^{13} - n = n(n^{12}-1)\equiv 0 \pmod p.$$

So all five primes divide $n^{13}-n$, and being distinct, their product $2730$ does too. ∎
[/sol]

### P4 | Easy | Standard
Let $p$ be an odd prime. Prove that $\operatorname{ord}_p(a) \mid p - 1$ for every $a$ not divisible by $p$, and find all $a$ with $\operatorname{ord}_p(a) = 2$.
[hint]
The first part is the key lemma plus Fermat. For the second, $a^2\equiv 1$ and $a \not\equiv 1$.
[/hint]
[sol]
**First part.** By Fermat, $a^{p-1}\equiv 1 \pmod p$. By the key lemma ($a^k \equiv 1 \iff \operatorname{ord}_p(a) \mid k$), we get $\operatorname{ord}_p(a) \mid p-1$. ∎

**Second part.** $\operatorname{ord}_p(a) = 2$ means $a^2 \equiv 1$ but $a \not\equiv 1 \pmod p$.

From $a^2\equiv 1$: $p \mid (a-1)(a+1)$, and since $p$ is prime, $a\equiv 1$ or $a \equiv -1 \pmod p$. Excluding $a \equiv 1$ leaves $a \equiv -1 \pmod p$.

Check: $(-1)^2 = 1$ and $-1 \not\equiv 1 \pmod p$ since $p$ is odd. So the unique element of order 2 is $a \equiv p-1 \pmod p$. ∎
[/sol]

### P5 | Medium | Standard
Prove that every prime divisor of $n^2 + 1$ (for $n$ a positive integer) is 2 or $\equiv 1 \pmod 4$.
[hint]
If $p \mid n^2+1$ and $p$ is odd, then $n^2 \equiv -1$, so $\operatorname{ord}_p(n) = 4$. Now use $\operatorname{ord} \mid p-1$.
[/hint]
[sol]
Let $p$ be an odd prime with $p \mid n^2+1$, so $n^2 \equiv -1 \pmod p$. Note $p \nmid n$ (else $p \mid 1$).

Then $n^4 \equiv (-1)^2 = 1 \pmod p$, so $d = \operatorname{ord}_p(n)$ divides 4, i.e. $d \in \{1,2,4\}$.

- If $d = 1$: $n \equiv 1$, so $n^2\equiv 1 \equiv -1$, giving $p \mid 2$ — impossible for odd $p$.
- If $d = 2$: $n^2 \equiv 1 \equiv -1$, same contradiction.

So $d = 4$. By Fermat, $d \mid p - 1$, hence $4 \mid p-1$, i.e. $p \equiv 1 \pmod 4$. ∎

*(And $p = 2$ does occur, e.g. $n=1$ gives $n^2+1=2$.)*
[/sol]

### P6 | Medium | Standard
Find all primes $p$ such that $p \mid 2^p + 1$.
[hint]
Use $2^p \equiv 2 \pmod p$ from Fermat.
[/hint]
[sol]
$p = 2$: $2^2+1 = 5$, and $2 \nmid 5$. ✗

Let $p$ be odd. By Fermat, $2^p \equiv 2 \pmod p$. So
$$2^p + 1 \equiv 3 \pmod p.$$
Thus $p \mid 2^p+1 \iff p \mid 3 \iff p = 3$.

Check $p=3$: $2^3+1 = 9$ and $3 \mid 9$ ✓.

So $p = 3$ is the only such prime. ∎
[/sol]

### P7 | Medium | Standard
Let $p$ be a prime with $p \equiv 1 \pmod 4$. Prove that $\left(\frac{p-1}{2}\right)!^2 \equiv -1 \pmod p$.
[hint]
Start from Wilson: $(p-1)! \equiv -1$. Pair $k$ with $p-k$ in the second half of the product.
[/hint]
[sol]
Let $m = \frac{p-1}{2}$. By Wilson, $(p-1)! \equiv -1 \pmod p$.

Split the product:
$$(p-1)! = \left(\prod_{k=1}^{m}k\right)\left(\prod_{k=m+1}^{p-1}k\right).$$
In the second product substitute $k = p - j$ where $j$ runs from $1$ to $m$ as $k$ runs from $p-1$ down to $m+1$. Since $p - j \equiv -j \pmod p$,
$$\prod_{k=m+1}^{p-1}k \equiv \prod_{j=1}^{m}(-j) = (-1)^m \, m! \pmod p.$$

Therefore
$$-1 \equiv (p-1)! \equiv m! \cdot (-1)^m m! = (-1)^m (m!)^2 \pmod p.$$

Since $p \equiv 1 \pmod 4$, $m = \frac{p-1}{2}$ is **even**, so $(-1)^m = 1$ and
$$(m!)^2 \equiv -1 \pmod p. \;∎$$

*(This gives an explicit square root of $-1$ mod $p$, and hence an explicit proof that $-1$ is a quadratic residue when $p\equiv 1 \pmod 4$.)*
[/sol]

### P8 | Medium | Standard
Show that for $n > 1$, $n \nmid 2^n - 1$.
[hint]
Take the smallest prime divisor $p$ of $n$ and consider $\operatorname{ord}_p(2)$. Compare it with $p-1$ and with $n$.
[/hint]
[sol]
Suppose $n > 1$ and $n \mid 2^n-1$. Then $n$ is odd (as $2^n-1$ is odd).

Let $p$ be the **smallest** prime divisor of $n$; $p$ is odd. Since $p \mid n \mid 2^n-1$, we have $2^n\equiv 1 \pmod p$, so
$$d := \operatorname{ord}_p(2) \mid n.$$
Also $d \mid p-1$ by Fermat. Hence
$$d \mid \gcd(n, p-1).$$

Now every prime factor of $p-1$ is less than $p$, and by minimality of $p$ no prime less than $p$ divides $n$. So $\gcd(n, p-1) = 1$, forcing $d = 1$.

But $d = 1$ means $2 \equiv 1 \pmod p$, i.e. $p \mid 1$ — impossible.

Hence no such $n > 1$ exists. ∎

*(The "smallest prime divisor + order" combination is a standard and very powerful pattern. Remember it.)*
[/sol]

### P9 | Hard | Standard
Find all pairs of primes $(p,q)$ such that $pq \mid 2^p + 2^q$.
[hint]
Handle $p=2$ and $q=2$ separately, then use Fermat on each of $p \mid 2^p+2^q$ and $q \mid 2^p+2^q$.
[/hint]
[sol]
**Case $p = q$.** Then $p^2 \mid 2^{p+1}$, so $p = 2$ and $4 \mid 8$ ✓. So $(2,2)$ works.

**Case $p = 2$, $q$ odd.** Then $2q \mid 4 + 2^q$. Since $q$ is odd, $2^q$ is even, so $2 \mid 4+2^q$ ✓. Need $q \mid 4 + 2^q$. By Fermat $2^q\equiv 2 \pmod q$, so $4+2^q \equiv 6 \pmod q$, giving $q \mid 6$, so $q = 3$ (odd prime dividing 6). Check: $pq = 6$ and $2^2+2^3 = 12$, and $6 \mid 12$ ✓.

So $(2,3)$ and by symmetry $(3,2)$ work.

**Case $p, q$ both odd, $p \ne q$.** By Fermat, $2^p\equiv 2 \pmod p$, so
$$0 \equiv 2^p + 2^q \equiv 2 + 2^q \pmod p.$$
Similarly $0 \equiv 2^p + 2 \pmod q$.

From the first, $p \mid 2^q + 2 = 2(2^{q-1}+1)$; as $p$ is odd, $p \mid 2^{q-1}+1$. Similarly $q \mid 2^{p-1}+1$.

Then $2^{2(q-1)} \equiv 1 \pmod p$, so $d_p := \operatorname{ord}_p(2)$ divides $2(q-1)$ but **not** $q - 1$ (since $2^{q-1}\equiv -1 \not\equiv 1$, as $p$ is odd). Hence $v_2(d_p) = v_2(q-1) + 1$. Also $d_p \mid p -1$, so
$$v_2(p-1) \ge v_2(d_p) = v_2(q-1)+1 > v_2(q-1).$$
By the symmetric argument, $v_2(q-1) > v_2(p-1)$. These two are contradictory.

**Conclusion.** The solutions are $(p,q) \in \{(2,2),\,(2,3),\,(3,2)\}$. ∎

*(The final step is a classic "2-adic valuation of the order" squeeze; it appears in many problems where two primes constrain each other symmetrically.)*
[/sol]

### P10 | Hard | Standard
Prove that for every positive integer $n$ there is a prime $p$ and an integer $a$ with $\operatorname{ord}_p(a) = n$ — equivalently, there are infinitely many primes $p \equiv 1 \pmod n$.
[hint]
Consider a prime divisor $p$ of $\Phi_n(N)$ for large $N$, where $\Phi_n$ is the $n$-th cyclotomic polynomial — or, more elementarily, take $p \mid \frac{N^n-1}{\text{lower terms}}$ and show $\operatorname{ord}_p(N)=n$.
[/hint]
[sol]
Here is an elementary version sufficient for olympiad purposes.

Fix $n \ge 1$. For an integer $N > 1$ let
$$M = \frac{N^n - 1}{\displaystyle\prod_{\substack{d \mid n \\ d < n}} \gcd\left(N^n - 1,\ N^d - 1\right)}$$
— informally, the part of $N^n-1$ "new at level $n$". Concretely, it is enough to argue as follows.

Let $p$ be a prime dividing $N^n - 1$ but **not** dividing $N^d-1$ for any proper divisor $d$ of $n$. For such $p$, let $e = \operatorname{ord}_p(N)$. Then $e \mid n$; if $e$ were a proper divisor $d$ of $n$ we would have $p \mid N^d - 1$, excluded. So $e = n$, and since $e \mid p-1$ we get
$$p \equiv 1 \pmod n.$$

**Such a prime exists for suitable $N$.** Suppose not: every prime factor of $N^n-1$ divides some $N^d-1$ with $d \mid n$, $d < n$. Since $N^d - 1 \le N^{n/q}-1$ where $q$ is the smallest prime factor of $n$, we would get
$$N^n - 1 \ \Big|\ \prod_{\substack{d\mid n\\ d<n}} \left(N^d-1\right)^{\,v}$$
for bounded multiplicities $v$; comparing sizes as $N \to \infty$ ($N^n$ versus a product of total degree $< n \cdot$ constant) gives a contradiction for $N$ large. (Making the multiplicity bound precise is exactly the standard cyclotomic-polynomial argument: $\Phi_n(N) \mid N^n-1$, $\Phi_n(N) \to \infty$, and any prime dividing both $\Phi_n(N)$ and some $N^d-1$, $d<n$, must divide $n$ — so for $N$ large, $\Phi_n(N)$ has a prime factor of the required kind.)

**Infinitely many.** Given primes $p_1,\dots,p_k \equiv 1 \pmod n$, apply the above with $N$ a large multiple of $n p_1\cdots p_k$; the resulting $p$ satisfies $p \equiv 1 \pmod n$ and $p \nmid N$, so $p \notin \{p_1,\dots,p_k\}$. ∎

**Honest note.** The fully rigorous version of the middle step needs cyclotomic polynomials, which sit just outside the RMO syllabus. At RMO you would only meet the special cases — "infinitely many primes $\equiv 1 \pmod 4$", "$\equiv 1 \pmod 3$" — where the argument is short: for $n=4$, take $p \mid N^2+1$ and use P5 of this set.
[/sol]
