---
id: nt-03-congruences
title: Modular arithmetic and the CRT
level: Core
hours: 5
blurb: Congruences as a calculus, choosing the right modulus, linear congruences, inverses, and the Chinese Remainder Theorem.
tags: congruences, modular arithmetic, CRT, inverses
link: Yufei Zhao — Modular arithmetic :: https://yufeizhao.com/olympiad/mod2.pdf
link: MOTP — Number theory :: https://jpsaha.github.io/MOTP/nt/
video: Search: modular arithmetic olympiad CRT :: https://www.youtube.com/results?search_query=chinese+remainder+theorem+olympiad+problems
---

## Congruence as a calculus

$a \equiv b \pmod m$ means $m \mid a - b$. The point of the notation is that congruences behave almost like equations:

$$a \equiv b, \; c \equiv d \pmod m \;\Longrightarrow\; a + c \equiv b+d, \quad a - c \equiv b-d, \quad ac \equiv bd \pmod m.$$

And by induction, $a \equiv b \implies a^n \equiv b^n \pmod m$ for $n \ge 1$.

**Division is the exception.** $ac \equiv bc \pmod m$ does **not** give $a \equiv b \pmod m$. The correct rule is
$$ac \equiv bc \pmod m \iff a \equiv b \pmod{\tfrac{m}{\gcd(c,m)}}.$$
So $6 \equiv 2 \pmod 4$ but you may not cancel the 2 to get $3 \equiv 1 \pmod 4$ — you get $3 \equiv 1 \pmod 2$, which is true.

You **can** divide freely by $c$ when $\gcd(c,m)=1$.

## Choosing the modulus

This is the real skill. When a problem resists, the question is always *"mod what?"* Some reliable instincts:

| If you see… | Try… | Because |
|---|---|---|
| squares | mod 4, mod 8, mod 3 | $x^2 \equiv 0,1 \pmod 4$; $x^2 \equiv 0,1,4 \pmod 8$; $x^2 \equiv 0,1 \pmod 3$ |
| cubes | mod 9, mod 7 | $x^3 \equiv 0, \pm 1 \pmod 9$; $x^3 \equiv 0,\pm1 \pmod 7$ |
| fourth powers | mod 16, mod 5 | $x^4 \equiv 0,1 \pmod{16}$; $x^4 \equiv 0,1 \pmod 5$ |
| $a^n$ for fixed $a$ | mod $p$ where $p \mid a^k \mp 1$ | the powers cycle |
| digit sums | mod 9, mod 11 | $10 \equiv 1 \pmod 9$, $10 \equiv -1\pmod{11}$ |
| a sum of two squares | mod 4 | $x^2+y^2 \not\equiv 3 \pmod 4$ |

**Memorise the square table.** $x^2 \bmod 8 \in \{0,1,4\}$ and $x^2 \bmod 3 \in \{0,1\}$ between them settle an enormous number of problems.

## Inverses

$a$ has an inverse mod $m$ (an $a^{-1}$ with $aa^{-1}\equiv 1$) **iff** $\gcd(a,m)=1$. Existence is exactly Bézout: $ax + my = 1$ gives $x \equiv a^{-1}$.

To compute one, run the Euclidean algorithm backwards. To find $7^{-1} \bmod 26$: $26 = 3\cdot 7 + 5$, $7 = 1\cdot 5 + 2$, $5 = 2\cdot 2 + 1$. Back-substituting,
$$1 = 5 - 2\cdot 2 = 5 - 2(7 - 5) = 3\cdot 5 - 2 \cdot 7 = 3(26 - 3\cdot 7) - 2\cdot 7 = 3\cdot 26 - 11 \cdot 7.$$
So $-11 \cdot 7 \equiv 1$, i.e. $7^{-1} \equiv -11 \equiv 15 \pmod{26}$.

## Linear congruences

> $ax \equiv b \pmod m$ has a solution **iff** $d = \gcd(a,m)$ divides $b$. When it does, there are exactly $d$ solutions modulo $m$, forming one residue class modulo $m/d$.

Method: divide through by $d$ to get $\frac{a}{d}x \equiv \frac{b}{d} \pmod{m/d}$, where now the coefficient is invertible, and multiply by the inverse.

## The Chinese Remainder Theorem

> Let $m_1, \dots, m_k$ be **pairwise coprime**. Then the system
> $$x \equiv a_1 \pmod{m_1}, \quad \dots, \quad x \equiv a_k \pmod{m_k}$$
> has a solution, unique modulo $M = m_1m_2\cdots m_k$.

**How to think about it.** CRT says that knowing $x$ mod $M$ is *exactly the same information* as knowing $x$ mod each $m_i$ separately. So a problem about mod 15 can be split into mod 3 and mod 5, solved independently, and reassembled.

**Construction.** Let $M_i = M/m_i$. Since $\gcd(M_i, m_i) = 1$, pick $N_i$ with $M_iN_i \equiv 1 \pmod {m_i}$. Then
$$x = \sum_{i=1}^{k} a_i M_i N_i \pmod M$$
works: modulo $m_j$, every term with $i \ne j$ vanishes (since $m_j \mid M_i$), leaving $a_jM_jN_j \equiv a_j$.

**In practice**, for two or three congruences it is faster to substitute: from $x \equiv 2 \pmod 3$ write $x = 3t+2$, substitute into $x \equiv 3 \pmod 5$ to get $3t \equiv 1 \pmod 5$, so $t \equiv 2 \pmod 5$, so $t = 5s+2$ and $x = 15s + 8$.

**Where CRT wins problems:** "construct $n$ consecutive integers each divisible by a square", "show there exist $n$ consecutive integers none of which is squarefree", "find $n$ with prescribed behaviour at several primes". Whenever you need to *build* a number with several independent local properties, CRT is the tool.

## Worked example

**Show that $x^2 + y^2 = 2026^{2027} + 3$ has no integer solutions.**

Work modulo 4. Squares are $0$ or $1$ mod 4, so $x^2+y^2 \in \{0,1,2\} \pmod 4$; in particular $x^2+y^2 \not\equiv 3 \pmod 4$.

Now $2026 \equiv 2 \pmod 4$, so $2026^{2027} \equiv 2^{2027} \equiv 0 \pmod 4$ (since $2027 \ge 2$). Hence the right side is $\equiv 0 + 3 = 3 \pmod 4$.

A sum of two squares is never $3$ mod 4, so there is no solution. ∎

## Common traps

- Cancelling a common factor without checking it is coprime to the modulus.
- Writing $a^b \bmod m$ by reducing $b$ modulo $m$. **The exponent reduces mod $\varphi(m)$, not mod $m$** — and only when $\gcd(a,m)=1$. (Next chapter.)
- Applying CRT with moduli that are not pairwise coprime. $x\equiv 1 \pmod 2$, $x \equiv 0 \pmod 4$ has no solution.
- Proving a congruence obstruction and concluding no solutions exist — correct — versus finding no obstruction and concluding solutions exist. The second is invalid.

## Problems

### P1 | Warmup | Standard
Find the remainder when $3^{100}$ is divided by 7.
[hint]
Compute $3^1, 3^2, 3^3, \dots \bmod 7$ until the pattern repeats.
[/hint]
[sol]
$3^1 \equiv 3$, $3^2 \equiv 2$, $3^3 \equiv 6$, $3^4 \equiv 4$, $3^5 \equiv 5$, $3^6 \equiv 1 \pmod 7$.

So the powers cycle with period 6. Since $100 = 6\cdot 16 + 4$,
$$3^{100} = \left(3^6\right)^{16}\cdot 3^4 \equiv 1^{16}\cdot 4 = 4 \pmod 7.$$
The remainder is **4**. ∎
[/sol]

### P2 | Warmup | Standard
Prove that $n^2 + 1$ is never divisible by 3.
[hint]
Check the three residues of $n$ mod 3, and say why three cases suffice.
[/hint]
[sol]
Every integer is $\equiv 0, 1$ or $2 \pmod 3$, and $n^2+1 \bmod 3$ depends only on $n \bmod 3$ since congruences may be multiplied and added.

- $n\equiv 0$: $n^2+1 \equiv 1$.
- $n \equiv 1$: $n^2+1 \equiv 2$.
- $n \equiv 2$: $n^2 \equiv 4 \equiv 1$, so $n^2+1\equiv 2$.

In no case is the result $0$, so $3 \nmid n^2+1$ for every integer $n$. ∎
[/sol]

### P3 | Easy | Standard
Find the smallest positive integer $x$ with $x \equiv 2 \pmod 3$, $x \equiv 3 \pmod 5$, $x \equiv 2 \pmod 7$.
[hint]
Substitute step by step rather than using the CRT formula.
[/hint]
[sol]
From $x \equiv 2 \pmod 3$: $x = 3t + 2$.

Substituting into $x \equiv 3 \pmod 5$: $3t + 2 \equiv 3$, so $3t \equiv 1 \pmod 5$. Since $3 \cdot 2 = 6 \equiv 1$, we have $3^{-1}\equiv 2$, so $t \equiv 2 \pmod 5$. Write $t = 5s+2$, giving
$$x = 3(5s+2)+2 = 15s + 8.$$

Substituting into $x \equiv 2 \pmod 7$: $15s + 8 \equiv s + 1 \equiv 2 \pmod 7$, so $s \equiv 1 \pmod 7$. Write $s = 7u+1$:
$$x = 15(7u+1)+8 = 105u + 23.$$

So $x \equiv 23 \pmod{105}$, and the smallest positive value is $\boxed{23}$.

Check: $23 = 3\cdot7+2$ ✓, $23 = 5\cdot4+3$ ✓, $23 = 7\cdot3+2$ ✓. ∎
[/sol]

### P4 | Easy | Standard
Prove that $x^2 + y^2 = 4z + 3$ has no integer solutions.
[hint]
Work mod 4 and use the fact that squares are $0$ or $1$ mod 4.
[/hint]
[sol]
Modulo 4, every square is $0$ or $1$: if $n = 2k$ then $n^2 = 4k^2 \equiv 0$; if $n = 2k+1$ then $n^2 = 4k(k+1)+1 \equiv 1$.

Hence $x^2+y^2 \equiv 0+0, 0+1, 1+0$ or $1+1$, i.e. $x^2+y^2 \in \{0,1,2\} \pmod 4$.

But the right side is $4z+3 \equiv 3 \pmod 4$. Since $3 \notin \{0,1,2\}$, no solution exists. ∎
[/sol]

### P5 | Medium | Standard
Find all integers $n$ such that $n^2 + 3n + 5$ is divisible by 121.
[hint]
First show $11 \mid n^2+3n+5$ forces a single residue mod 11. Then write $n$ in that form and expand to see what happens mod 121.
[/hint]
[sol]
Suppose $121 \mid n^2+3n+5$. In particular $11 \mid n^2+3n+5$.

Complete the square: $4(n^2+3n+5) = (2n+3)^2 + 11$. So $11 \mid n^2+3n+5 \iff 11 \mid (2n+3)^2$ (since $\gcd(4,11)=1$), iff $11 \mid 2n+3$ (11 prime), iff $2n \equiv -3 \equiv 8 \pmod{11}$, iff $n \equiv 4 \pmod{11}$.

Write $n = 11k + 4$. Then
$$n^2 + 3n + 5 = (11k+4)^2 + 3(11k+4)+5 = 121k^2 + 88k + 16 + 33k + 12 + 5 = 121k^2 + 121k + 33.$$
Modulo 121 this is $\equiv 33$. Since $121 \nmid 33$, we never get divisibility by 121.

Hence **there are no such $n$**. ∎
[/sol]

### P6 | Medium | Standard
Prove that for every positive integer $n$ there exist $n$ consecutive positive integers none of which is a prime power.
[hint]
For each of the $n$ slots, force divisibility by two distinct primes. CRT lets you impose all $n$ conditions at once.
[/hint]
[sol]
Choose $2n$ distinct primes $p_1, q_1, p_2, q_2, \dots, p_n, q_n$. The moduli $p_i q_i$ are pairwise coprime, so by CRT there is a positive integer $x$ with
$$x + i \equiv 0 \pmod{p_i q_i} \qquad (i = 1, 2, \dots, n),$$
i.e. $x \equiv -i \pmod{p_iq_i}$ for each $i$.

Then each of $x+1, x+2, \dots, x+n$ is divisible by two distinct primes $p_i$ and $q_i$, so none of them is a prime power. Taking $x$ large enough (add a multiple of $\prod p_iq_i$) makes them all positive and greater than 1.

Hence such a run of $n$ consecutive integers exists. ∎

*(The same template proves: $n$ consecutive integers each divisible by a square, each composite, each with at least 5 prime factors, and so on. CRT is the universal "build a number with prescribed local behaviour" tool.)*
[/sol]

### P7 | Medium | Standard
Show that if $p$ is an odd prime and $p \mid a^2+b^2$ with $p \equiv 3 \pmod 4$, then $p \mid a$ and $p \mid b$.
[hint]
Suppose $p \nmid a$. Then $a$ is invertible mod $p$; set $t \equiv b a^{-1}$ and derive $t^2 \equiv -1 \pmod p$. Then use Fermat to get a contradiction with $p \equiv 3 \pmod 4$.
[/hint]
[sol]
Suppose $p \nmid a$. Then $a$ is invertible modulo $p$. From $a^2 + b^2 \equiv 0$, multiplying by $(a^{-1})^2$ gives
$$1 + (ba^{-1})^2 \equiv 0 \pmod p, \qquad\text{so}\qquad t^2 \equiv -1 \pmod p \text{ with } t = ba^{-1}.$$

Now raise to the power $\frac{p-1}{2}$:
$$t^{p-1} = \left(t^2\right)^{\frac{p-1}{2}} \equiv (-1)^{\frac{p-1}{2}} \pmod p.$$
By Fermat's little theorem the left side is $\equiv 1$ (note $p \nmid t$ since $t^2\equiv -1 \not\equiv 0$). Since $p \equiv 3\pmod 4$, $\frac{p-1}{2}$ is odd, so the right side is $-1$. Thus $1 \equiv -1 \pmod p$, i.e. $p \mid 2$ — impossible for odd $p$.

So $p \mid a$; then $p \mid a^2$, hence $p \mid b^2$, hence $p \mid b$. ∎

*(This is the key lemma behind "which integers are sums of two squares".)*
[/sol]

### P8 | Hard | Standard
Prove that there are infinitely many $n$ such that $n^2 + 1$ has a prime divisor greater than $2n$.
[hint]
Take $p \mid n^2+1$ and consider the residue of $n$ mod $p$: if $n$ works, so does $p - n$. Compare sizes.
[/hint]
[sol]
Let $p$ be any prime with $p \equiv 1 \pmod 4$; there are infinitely many such primes, and for each there is an $n$ with $p \mid n^2+1$ (since $-1$ is a quadratic residue mod such $p$). Choose $n$ in the range $1 \le n \le \frac{p-1}{2}$: this is possible because if $n_0$ is a solution then so is $p - n_0$, and one of $n_0, p-n_0$ lies in $[1, \frac{p-1}{2}]$.

For that $n$ we have $2n \le p - 1 < p$, so $p > 2n$ and $p \mid n^2+1$.

Distinct primes $p$ give distinct $n$ up to finitely many repeats: for a fixed $n$, $n^2+1$ has only finitely many prime divisors, so only finitely many primes $p$ can correspond to it. Hence infinitely many $n$ arise. ∎

*(For a self-contained version avoiding quadratic reciprocity, note $\left(\frac{p-1}{2}\right)!^2 \equiv -1 \pmod p$ for $p \equiv 1 \pmod 4$ by Wilson's theorem — see the next chapter.)*
[/sol]

### P9 | Hard | RMO 2025 P6
Let $p(x)$ be a nonconstant polynomial with integer coefficients, and let $n \ge 2$ be an integer such that no term of the sequence $p(0),\, p(p(0)),\, p(p(p(0))),\, \dots$ is divisible by $n$. Show that there exist integers $a, b$ with $0 \le a < b \le n-1$ and $n \mid p(b) - p(a)$.
[hint]
Because $u \equiv v \pmod n \implies p(u) \equiv p(v) \pmod n$, the polynomial induces a genuine map $f$ from the $n$ residue classes to themselves. You are being asked to prove $f$ is not injective. What would injectivity of a map from a finite set to itself force?
[/hint]
[sol]
**Setting up the map.** For integer polynomials, $u - v \mid p(u) - p(v)$; in particular
$$u \equiv v \pmod n \;\Longrightarrow\; p(u) \equiv p(v) \pmod n.$$
So $p$ induces a well-defined map on residues:
$$f : \{0, 1, \dots, n-1\} \to \{0,1,\dots,n-1\}, \qquad f(x) = p(x) \bmod n.$$

The conclusion we want — integers $0 \le a < b \le n-1$ with $n \mid p(b)-p(a)$ — says exactly that **$f$ is not injective**.

**The hypothesis, restated.** The sequence in the problem is $f(0), f^2(0), f^3(0), \dots$ reduced mod $n$, and the hypothesis says
$$f^k(0) \ne 0 \quad \text{for every } k \ge 1. \tag{$\ast$}$$

**Suppose, for contradiction, that $f$ is injective.** Since $f$ maps the finite set $\{0,\dots,n-1\}$ to itself, an injective $f$ is a bijection, and therefore has an inverse $f^{-1}$.

The values $f^0(0), f^1(0), \dots, f^{n}(0)$ are $n+1$ elements of an $n$-element set, so by the pigeonhole principle there are indices $0 \le i < j \le n$ with
$$f^i(0) = f^j(0).$$
Applying $f^{-1}$ exactly $i$ times to both sides (legitimate because $f$ is a bijection) gives
$$0 = f^{\,j-i}(0), \qquad j - i \ge 1,$$
which contradicts $(\ast)$.

**Conclusion.** So $f$ is not injective: there exist distinct $a, b \in \{0,1,\dots,n-1\}$ with $f(a) = f(b)$, that is,
$$n \mid p(b) - p(a).$$
Relabelling so that $a < b$ gives $0 \le a < b \le n-1$, as required. ∎

**The two ideas worth keeping.**
1. An integer polynomial induces a well-defined map on residues mod $n$ — this is what lets you talk about "the orbit of 0 mod $n$" at all.
2. A map from a finite set to itself is injective **iff** it is bijective. Under a bijection every orbit is *purely* periodic and must return to its starting point; the hypothesis says the orbit of $0$ never returns, which kills injectivity.
[/sol]

### P10 | Hard | Standard
Let $p > 3$ be a prime. Prove that $p^2 \equiv 1 \pmod{24}$.
[hint]
$24 = 8 \cdot 3$. Handle the two prime powers separately: what is $p$ mod 2, and mod 3?
[/hint]
[sol]
Since $\gcd(8,3)=1$, it suffices to show $8 \mid p^2-1$ and $3 \mid p^2-1$, where $p^2 - 1 = (p-1)(p+1)$.

**Mod 8.** $p$ is odd (as $p > 3$ is prime), so $p - 1$ and $p+1$ are consecutive even numbers. One of them is divisible by 4 and the other by 2, so $8 \mid (p-1)(p+1)$.

**Mod 3.** $p$ is not divisible by 3 (as $p>3$ is prime), so $p \equiv 1$ or $2 \pmod 3$. If $p \equiv 1$ then $3 \mid p-1$; if $p \equiv 2$ then $p+1 \equiv 0$, so $3 \mid p+1$. Either way $3 \mid (p-1)(p+1)$.

Since $8$ and $3$ are coprime and both divide $p^2-1$, so does $24$. Hence $p^2 \equiv 1 \pmod{24}$. ∎
[/sol]
