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

> **How to read the solutions.** Each one is laid out in the same four parts: what the problem is actually asking, how you would *find* the idea (not just what it is), the proof written out with no steps skipped, and a check. If you already see the answer, skip to the proof — but if you are new to writing proofs, the "finding the idea" part is the one that transfers to the next problem.

### P1 | Warmup | Standard
Find all positive integers $n$ such that $n - 1$ divides $n^2 + 3$.
[hint]
You cannot factor $n^2+3$ usefully. But you *can* subtract from it something that $n-1$ definitely divides, leaving a much smaller number behind.
[/hint]
[sol]
**What is being asked.** We want every positive integer $n$ for which $\frac{n^2+3}{n-1}$ comes out as a whole number. There are infinitely many $n$ to try, so we cannot test them one by one — we need an argument that leaves only finitely many candidates.

**Finding the idea.** The obstacle is that $n^2+3$ is *large* and $n-1$ is *small*, and we cannot see the relationship. The standard move is:

> Subtract from the big expression a multiple of the divisor, to shrink it down to a **constant**.

What multiple of $n-1$ is close to $n^2+3$? Well, $n-1$ divides $n^2-1$, because $n^2-1 = (n-1)(n+1)$. And $n^2-1$ is very close to $n^2+3$. That is the whole idea.

**The proof.**

Suppose $n$ is a positive integer with $(n-1) \mid (n^2+3)$.

*Step 1.* Since $n^2 - 1 = (n-1)(n+1)$, we certainly have
$$(n-1) \mid (n^2-1).$$

*Step 2.* Recall the basic fact that if a number divides two things, it divides their difference. Here $n-1$ divides both $n^2+3$ and $n^2-1$, so it divides
$$\left(n^2+3\right)-\left(n^2-1\right) = 4.$$

So **every** solution must satisfy $(n-1) \mid 4$. This is the key step: an unbounded problem has become a bounded one.

*Step 3 — list the candidates.* The positive divisors of 4 are $1, 2, 4$. We also need $n-1 > 0$: if $n = 1$ then $n - 1 = 0$, and $0$ divides only $0$, while $n^2+3 = 4 \ne 0$, so $n=1$ fails. Hence
$$n-1 \in \{1,2,4\} \implies n \in \{2,3,5\}.$$

*Step 4 — verify each one.* Step 2 only told us which $n$ **could** work; it did not tell us they do. We must substitute back:

| $n$ | $n-1$ | $n^2+3$ | does $n-1$ divide it? |
|---|---|---|---|
| 2 | 1 | 7 | $7 = 1\times7$ ✓ |
| 3 | 2 | 12 | $12 = 2\times6$ ✓ |
| 5 | 4 | 28 | $28 = 4\times7$ ✓ |

All three work.

**Answer:** $n \in \{2,3,5\}$. ∎

**Why Step 4 is not optional.** Steps 1–3 prove "if $n$ is a solution, then $n\in\{2,3,5\}$" — a one-way implication. The problem says *find all*, which is a two-way claim: these work, **and** nothing else does. Step 3 gives the second half; Step 4 gives the first. Omitting Step 4 is one of the most common ways to lose marks on a "find all" problem, and it costs three lines to avoid.

**What to take away.** When you meet $d \mid (\text{something big})$, look for a multiple of $d$ that is close to the big thing, and subtract. Here $n-1 \mid n^2-1$ was the free multiple. You will use this move constantly.
[/sol]

### P2 | Warmup | Standard
Prove that $\gcd(n, n+1) = 1$ for every positive integer $n$, and that $\gcd(n, n+2) \in \{1,2\}$.
[hint]
For both parts, ask: what must a *common* divisor of the two numbers also divide?
[/hint]
[sol]
**What is being asked.** Two separate claims. First, consecutive integers never share a factor bigger than 1. Second, integers two apart share at most a factor of 2.

**Finding the idea.** Suppose $d$ divides both $n$ and $n+1$. Then $d$ divides *any* combination of them — in particular their difference. But their difference is tiny, and that pins $d$ down immediately. This is the standard way to bound a gcd: **look at what the common divisor does to the difference.**

**Part 1: $\gcd(n,n+1) = 1$.**

Let $d = \gcd(n, n+1)$. By definition $d$ is a positive integer dividing both $n$ and $n+1$.

Since $d \mid n$ and $d \mid (n+1)$, $d$ divides the difference:
$$d \ \big|\ (n+1) - n = 1.$$

The only positive divisor of 1 is 1 itself, so $d = 1$. ∎

*(An equivalent one-liner using Bézout: $1\cdot(n+1) + (-1)\cdot n = 1$, and since any common divisor divides the left-hand side, it divides 1.)*

**Part 2: $\gcd(n,n+2)\in\{1,2\}$.**

Let $d = \gcd(n,n+2)$. As before, $d$ divides the difference:
$$d \ \big|\ (n+2)-n = 2.$$

The positive divisors of 2 are 1 and 2, so $d \in\{1,2\}$.

**Both values actually occur** — worth saying, because otherwise we have only shown $d$ is *at most* 2, not that both cases happen:
- $n = 3$: $\gcd(3,5) = 1$.
- $n = 4$: $\gcd(4,6) = 2$.

So the answer $\{1,2\}$ is exactly right, not merely an upper bound. ∎

**A sharper statement, for free.** Looking at the two examples, the pattern is clear: $d = 2$ when $n$ is even and $d=1$ when $n$ is odd. Proof: if $n$ is even then 2 divides both $n$ and $n+2$, so $d = 2$; if $n$ is odd then $n$ and $n+2$ are both odd, so 2 divides neither, forcing $d=1$.

**What to take away.** A common divisor of two numbers divides **every** integer combination of them — their difference, their sum, and anything of the form $ax+by$. Reaching for the difference is almost always the first thing to try with a gcd.
[/sol]

### P3 | Easy | Standard
Prove that $\dfrac{n^5}{5}+\dfrac{n^3}{3}+\dfrac{7n}{15}$ is an integer for every integer $n$.
[hint]
Clear the denominators first: the claim becomes a divisibility statement. Then note $15 = 3\times5$ and handle the two primes one at a time.
[/hint]
[sol]
**What is being asked.** The expression looks like it should produce fractions — it has 5s, 3s and 15s underneath. The claim is that these always cancel. So we must show a certain number is divisible by 15, for every integer $n$.

**Finding the idea.** Two moves, both routine:

1. **Clear denominators.** A statement "this fraction is an integer" is really the statement "the denominator divides the numerator". Rewriting it that way turns analysis into number theory.
2. **Split the modulus.** $15 = 3\times5$ with $3$ and $5$ coprime, and a number divisible by two coprime numbers is divisible by their product. So it is enough to prove divisibility by 3 and by 5 *separately* — two easy problems instead of one awkward one.

**The proof.**

*Step 1: clear denominators.* Put everything over 15:
$$\frac{n^5}{5}+\frac{n^3}{3}+\frac{7n}{15} = \frac{3n^5 + 5n^3+7n}{15}.$$
So we must prove
$$15 \ \big|\ \left(3n^5+5n^3+7n\right) \qquad\text{for every integer } n.$$

*Step 2: split.* Since $\gcd(3,5)=1$, it suffices to prove separately that $3$ divides it and that $5$ divides it. (If $3\mid N$ and $5\mid N$ with $\gcd(3,5)=1$, then $15\mid N$.)

*Step 3: divisibility by 3.* Work modulo 3. The term $3n^5$ is a multiple of 3, so it vanishes:
$$3n^5+5n^3+7n \ \equiv\ 0 + 5n^3+7n \ \equiv\ 2n^3+n \pmod 3,$$
using $5 \equiv 2$ and $7\equiv1 \pmod 3$.

Now we need $2n^3+n \equiv 0 \pmod 3$. Every integer is congruent to $0$, $1$ or $2$ modulo 3, and the value of $2n^3+n$ mod 3 depends only on $n$ mod 3 (because congruences may be added and multiplied). So we check three cases:

| $n \bmod 3$ | $n^3 \bmod 3$ | $2n^3+n \bmod 3$ |
|---|---|---|
| 0 | 0 | $0+0 = 0$ ✓ |
| 1 | 1 | $2+1 = 3\equiv0$ ✓ |
| 2 | $8\equiv2$ | $4+2 = 6\equiv0$ ✓ |

In every case the result is $0$ mod 3. ✓

*Step 4: divisibility by 5.* Work modulo 5. Now the term $5n^3$ vanishes:
$$3n^5+5n^3+7n \equiv 3n^5 + 2n \pmod 5.$$

Check the five residues:

| $n \bmod 5$ | $n^5 \bmod 5$ | $3n^5+2n \bmod 5$ |
|---|---|---|
| 0 | 0 | $0$ ✓ |
| 1 | 1 | $3+2 = 5\equiv0$ ✓ |
| 2 | $32\equiv2$ | $6+4 = 10\equiv0$ ✓ |
| 3 | $243\equiv3$ | $9+6 = 15\equiv0$ ✓ |
| 4 | $1024\equiv4$ | $12+8 = 20\equiv0$ ✓ |

In every case $0$ mod 5. ✓

*Step 5: conclude.* Both 3 and 5 divide $3n^5+5n^3+7n$, and they are coprime, so 15 divides it. Hence the original expression is an integer for every integer $n$. ∎

**A shortcut worth noticing.** In the two tables, $n^3\equiv n \pmod 3$ and $n^5\equiv n\pmod 5$ every time. That is not a coincidence — it is **Fermat's little theorem** ($n^p\equiv n \pmod p$ for prime $p$), which you will meet in a later chapter. With it, Step 3 becomes $2n^3+n\equiv 2n+n = 3n\equiv 0$ in one line, and Step 4 becomes $3n^5+2n\equiv3n+2n = 5n\equiv0$. Until you have that tool, the tables are perfectly good and lose no marks.

**What to take away.** "Is this an integer?" $\to$ "does the denominator divide the numerator?" $\to$ split the denominator into coprime pieces and handle each prime separately. This three-step pattern handles a whole family of problems.
[/sol]

### P4 | Easy | Standard
Let $a,b$ be positive integers with $\gcd(a,b) = 1$. Prove that $\gcd(a+b,\,a-b) \in \{1,2\}$.
[hint]
Let $d$ be the gcd. Consider what $d$ does to the *sum* and to the *difference* of $a+b$ and $a-b$.
[/hint]
[sol]
**What is being asked.** We know $a$ and $b$ share no common factor. We must show that $a+b$ and $a-b$ then share almost nothing either — at worst a factor of 2.

**Finding the idea.** Same instinct as P2: a common divisor of two numbers divides every combination of them. The useful combinations of $a+b$ and $a-b$ are their sum and their difference, because those bring us back to $a$ and $b$, where we know something:
$$(a+b)+(a-b) = 2a, \qquad (a+b)-(a-b) = 2b.$$
So $d$ divides both $2a$ and $2b$ — and the hypothesis $\gcd(a,b)=1$ is about to become useful.

**The proof.**

Let $d = \gcd(a+b,\,a-b)$, so $d$ is a positive integer dividing both $a+b$ and $a-b$.

*Step 1.* Since $d$ divides both, it divides their sum and their difference:
$$d \ \big|\ (a+b)+(a-b) = 2a, \qquad d\ \big|\ (a+b)-(a-b) = 2b.$$

*Step 2.* A number dividing both $2a$ and $2b$ divides their greatest common divisor:
$$d \ \big|\ \gcd(2a,\,2b).$$

*Step 3.* Now use the hypothesis. Pulling the common factor out of a gcd,
$$\gcd(2a,2b) = 2\gcd(a,b) = 2\cdot 1 = 2.$$

*Step 4.* So $d \mid 2$, and since $d$ is a positive integer,
$$d \in \{1,2\}.$$

**Both values occur.** As in P2, we should show the answer is exactly $\{1,2\}$ and not a loose bound:
- $a=2,\ b=1$ (coprime): $\gcd(3,1) = 1$.
- $a=3,\ b=1$ (coprime): $\gcd(4,2) = 2$. ∎

**The sharper version.** When is $d=2$? We need $a+b$ and $a-b$ both even, which happens exactly when $a$ and $b$ have the **same parity**. But they are coprime, so they cannot both be even — hence $d = 2$ precisely when $a$ and $b$ are **both odd**, and $d=1$ otherwise. Check: $(3,1)$ both odd gives 2 ✓; $(2,1)$ mixed gives 1 ✓.

**What to take away.** The rule $\gcd(ka,kb) = k\gcd(a,b)$ is what let the hypothesis do its work. Whenever a problem hands you "$\gcd(a,b)=1$", expect to reach a point where a gcd collapses to 1 and the whole thing falls out.
[/sol]

### P5 | Medium | Standard
Find all pairs of positive integers $(a,b)$ such that $ab \mid a^2+b^2$.
[hint]
Write $a$ and $b$ in terms of their gcd: $a = dx$, $b = dy$ with $\gcd(x,y)=1$. The condition simplifies dramatically, and coprimality then forces $x$ and $y$ to be very small.
[/hint]
[sol]
**What is being asked.** Find every pair $(a,b)$ for which $\frac{a^2+b^2}{ab}$ is a whole number. Trying examples: $(1,1)$ gives $\frac21 = 2$ ✓; $(2,2)$ gives $\frac 84 = 2$ ✓; $(1,2)$ gives $\frac52$ ✗; $(2,4)$ gives $\frac{20}{8}$ ✗. A pattern suggests itself: equal pairs work. We must prove nothing else does.

**Finding the idea.** The difficulty is that $a$ and $b$ may share factors, which clutters the divisibility. The standard cleanup is:

> **Factor out the gcd.** Write $a = dx$, $b = dy$ where $d = \gcd(a,b)$ and $\gcd(x,y)=1$.

This always works and always simplifies, because afterwards $x$ and $y$ are coprime — and coprimality is a powerful constraint. Let us see what the condition becomes.

**The proof.**

*Step 1: strip the gcd.* Let $d = \gcd(a,b)$ and write
$$a = dx, \qquad b = dy, \qquad \gcd(x,y) = 1.$$
Then
$$ab = d^2xy, \qquad a^2+b^2 = d^2\left(x^2+y^2\right),$$
so the condition $ab \mid a^2+b^2$ becomes
$$d^2xy \ \big|\ d^2\left(x^2+y^2\right) \iff xy \ \big|\ x^2+y^2.$$
The $d$ has completely vanished — a good sign that this was the right move.

*Step 2: use coprimality on one variable at a time.* Since $x \mid xy$ and $xy \mid x^2+y^2$, we get
$$x \ \big|\ x^2+y^2.$$
But $x \mid x^2$ obviously, so subtracting,
$$x \ \big|\ \left(x^2+y^2\right)-x^2 = y^2.$$

*Step 3: coprimality kills it.* We know $\gcd(x,y)=1$. A standard fact: if $\gcd(x,y)=1$ then $\gcd(x,y^2)=1$ as well — because any prime dividing $x$ and $y^2$ would divide $y$, contradicting coprimality.

So $x$ divides $y^2$ **and** $\gcd(x,y^2)=1$. A number that divides something it is coprime to must divide 1:
$$x \ \big|\ \gcd\!\left(y^2,\,x\cdot y^2\right)\ldots \quad\text{more simply: } x \mid y^2 \text{ and } \gcd(x,y^2)=1 \implies x = 1.$$

*(Reason: $x \mid y^2$ means $\gcd(x,y^2) = x$; and we just said that gcd is 1.)*

*Step 4: symmetry.* The condition $xy \mid x^2+y^2$ is unchanged if we swap $x$ and $y$, so the identical argument gives $y = 1$.

*Step 5: translate back.* With $x = y = 1$ we get
$$a = d\cdot1 = d, \qquad b = d\cdot 1 = d,$$
so $a = b$.

*Step 6: verify.* If $a = b$ then $ab = a^2$ and $a^2+b^2 = 2a^2$, and indeed $a^2 \mid 2a^2$ ✓.

**Answer:** the solutions are exactly the pairs with $a = b$. ∎

**What to take away.** Two habits, both worth more than this one problem:
1. **Strip the gcd.** Setting $a = dx$, $b = dy$ with $\gcd(x,y)=1$ is the default opening move for any divisibility relating two numbers. It is almost never wasted.
2. **"Divides something it is coprime to" $\implies$ "equals 1".** This is the workhorse consequence of coprimality, and it is how Step 3 finished in one line.
[/sol]

### P6 | Medium | Standard
Let $a>1$ and $m\ge1$ be integers. Prove that
$$\gcd\!\left(\frac{a^m-1}{a-1},\ a-1\right) = \gcd(m,\ a-1).$$
[hint]
Expand $\frac{a^m-1}{a-1}$ as a sum. Then reduce that sum modulo $a-1$, using the fact that $a \equiv 1$ there.
[/hint]
[sol]
**What is being asked.** The left side looks complicated; the right side is simple. So the content of the problem must be that the complicated expression, *as far as $a-1$ can see*, is really just $m$.

**Finding the idea.** Two observations get you there:

1. $\frac{a^m-1}{a-1}$ is not really a fraction — it is the geometric sum $1+a+a^2+\cdots+a^{m-1}$.
2. We are taking a gcd with $a-1$, so we only care about that sum **modulo $a-1$**. And modulo $a-1$, the number $a$ is congruent to 1 — which makes every power of $a$ collapse to 1.

That is the entire proof.

**The proof.**

*Step 1: rewrite the quotient as a sum.* For $a \ne 1$, the geometric series identity gives
$$\frac{a^m-1}{a-1} = 1 + a + a^2+\cdots+a^{m-1},$$
a sum of $m$ terms. (You can verify this by multiplying the right side by $a-1$ and watching everything telescope: $(a-1)(1+a+\cdots+a^{m-1}) = a^m - 1$.)

*Step 2: reduce modulo $a-1$.* Since $a - 1 \equiv 0$, we have
$$a \equiv 1 \pmod{a-1},$$
and therefore $a^k \equiv 1^k = 1 \pmod{a-1}$ for every $k\ge0$.

So each of the $m$ terms in the sum is congruent to 1:
$$1+a+a^2+\cdots+a^{m-1} \ \equiv\ \underbrace{1+1+\cdots+1}_{m \text{ terms}} \ =\ m \pmod{a-1}.$$

*Step 3: use the gcd rule.* For any integers $N$ and $k>0$,
$$\gcd(N,\,k) = \gcd(N \bmod k,\ k),$$
because $N$ and $N \bmod k$ differ by a multiple of $k$, so they have exactly the same common divisors with $k$.

Applying this with $N = \frac{a^m-1}{a-1}$ and $k = a-1$, and using Step 2:
$$\gcd\!\left(\frac{a^m-1}{a-1},\ a-1\right) = \gcd\big(m,\ a-1\big). \;∎$$

**A worked instance, to see it is really true.** Take $a = 4$, $m = 6$. Then
$$\frac{4^6-1}{4-1} = \frac{4095}{3} = 1365, \qquad a - 1 = 3.$$
Left side: $\gcd(1365, 3) = 3$ (since $1+3+6+5 = 15$ is divisible by 3).
Right side: $\gcd(6,3) = 3$ ✓

And take $a=4$, $m=5$: $\frac{1023}{3} = 341$, and $\gcd(341,3) = 1$ (digit sum 8), while $\gcd(5,3)=1$ ✓

**What to take away.** When a gcd involves $a-1$, substitute $a \equiv 1$. More generally: *a gcd with $k$ only depends on things modulo $k$*, so reduce everything mod $k$ before doing anything clever. That single habit turns many gcd problems into one line.
[/sol]

### P7 | Medium | CRMO 2012 P2
Let $a,b,c$ be positive integers such that $a \mid b^3$, $b \mid c^3$ and $c \mid a^3$. Prove that $abc \mid (a+b+c)^{13}$.
[hint]
Divisibility of one number by another is really a statement about **every prime separately**. Fix a prime $p$ and compare how many times it divides each side.
[/hint]
[sol]
**What is being asked.** We are told three cyclic divisibility conditions and must deduce a fourth, with the strange exponent 13. The 13 is a clue — it will come out of an inequality, and we should watch for where.

**Finding the idea.** A statement $X \mid Y$ is equivalent to: *for every prime $p$, the power of $p$ in $X$ is at most the power of $p$ in $Y$.* This is the fundamental theorem of arithmetic doing its job. So the plan is:

> Fix one prime $p$, turn every hypothesis into an inequality between exponents, and prove the exponent inequality we need.

The notation for this is $v_p(N)$ = the exponent of $p$ in $N$. The key rules are $v_p(XY) = v_p(X)+v_p(Y)$ and
$$X \mid Y \iff v_p(X) \le v_p(Y) \text{ for every prime } p.$$

**The proof.**

*Step 1: the three numbers have the same prime divisors.*

Suppose a prime $p$ divides $a$. Then $p \mid b^3$ (since $a \mid b^3$), and because $p$ is prime, $p \mid b$. Then $p \mid c^3$ (since $b \mid c^3$), so $p \mid c$.

So every prime dividing $a$ also divides $b$ and $c$. The hypotheses are cyclic in $a\to b\to c\to a$, so running the same argument starting from $b$ or from $c$ gives the reverse inclusions. Hence $a$, $b$, $c$ have **exactly the same set of prime divisors**.

*Step 2: translate the hypotheses into exponent inequalities.*

Fix a prime $p$ dividing all three, and write
$$x = v_p(a), \qquad y = v_p(b), \qquad z = v_p(c),$$
all positive integers. Since $v_p(b^3) = 3v_p(b) = 3y$, the three hypotheses say
$$a \mid b^3 \implies x \le 3y, \qquad b\mid c^3 \implies y \le 3z, \qquad c\mid a^3\implies z\le3x.$$

*Step 3: bound the total by 13 times the minimum.*

Let $m = \min\{x,y,z\}$. The hypotheses are cyclic, so **without loss of generality** we may assume $m = x$ — meaning: if instead $y$ or $z$ were the minimum, we could rotate the labels $a\to b\to c\to a$, which leaves all three hypotheses unchanged, and rename. (This is a legitimate WLOG precisely because the conditions are invariant under that rotation; see the WLOG discussion in the proof-techniques chapter.)

Now chain the inequalities, starting from the one that bounds $z$ by $x$:
$$z \le 3x, \qquad\text{and then}\qquad y \le 3z \le 3(3x) = 9x.$$

Adding all three:
$$x+y+z \ \le\ x + 9x + 3x = 13x = 13m.$$

**There is the 13.** It is $1 + 9 + 3$.

*Step 4: convert back to divisibility.*

Since $m = \min\{x,y,z\}$, the power $p^m$ divides each of $a$, $b$ and $c$ individually. A number dividing all three divides their sum:
$$p^m \ \big|\ a+b+c.$$
Raising to the 13th power,
$$p^{13m} \ \big|\ (a+b+c)^{13}.$$

Meanwhile the power of $p$ in $abc$ is
$$v_p(abc) = x+y+z \ \le\ 13m,$$
so $p^{v_p(abc)}$ divides $p^{13m}$, and therefore divides $(a+b+c)^{13}$.

*Step 5: conclude.* This holds for **every** prime $p$ dividing $abc$ (and for primes not dividing $abc$ there is nothing to check, since $v_p(abc)=0$). By the fundamental theorem of arithmetic, that is exactly the statement
$$abc \ \big|\ (a+b+c)^{13}. \;∎$$

**Why the exponent is exactly 13, and not smaller.** The bound $x+y+z\le13m$ is tight. Take $x=1$: then $z\le3$ and $y\le9$ are both achievable, and $x+y+z = 1+9+3 = 13$. Concretely, with a single prime $p$, take
$$a = p, \qquad b = p^9, \qquad c = p^3.$$
Check the hypotheses: $a\mid b^3$ means $1\le27$ ✓; $b \mid c^3$ means $9\le9$ ✓; $c\mid a^3$ means $3\le3$ ✓. So the problem's 13 cannot be lowered.

**What to take away.** *A divisibility problem with several interlocking conditions is usually an inequality problem about exponents in disguise.* Fix a prime, write $x,y,z$ for the exponents, and the whole thing becomes elementary algebra.
[/sol]

### P8 | Medium | Standard
Let $F_n = 2^{2^n}+1$ (the **Fermat numbers**: $F_0=3$, $F_1=5$, $F_2=17$, $F_3=257$, …). Prove that $\gcd(F_m, F_n) = 1$ whenever $m\ne n$, and deduce that there are infinitely many primes.
[hint]
Find a formula expressing $F_n$ in terms of all the earlier ones. Then a common divisor of $F_m$ and $F_n$ (with $m<n$) is forced to divide a very small number.
[/hint]
[sol]
**What is being asked.** Two things. First, any two different Fermat numbers are coprime. Second, that this gives a fresh proof that primes never run out.

**Finding the idea.** Why would the second follow from the first? Because if the $F_n$ are pairwise coprime, then a prime factor of $F_0$, a prime factor of $F_1$, a prime factor of $F_2$, … must all be **different** primes — and there are infinitely many $F_n$. That is a complete proof, as long as we get the coprimality.

For the coprimality: a common divisor of $F_m$ and $F_n$ divides any combination of them, so we would like a relation tying $F_n$ to the earlier ones. Computing the first few products is the natural experiment:
$$F_0 = 3, \qquad F_0F_1 = 15 = F_2 - 2, \qquad F_0F_1F_2 = 255 = F_3-2.$$
The pattern is unmistakable.

**The proof.**

*Step 1: the product formula.* We claim that for every $n \ge 1$,
$$F_0F_1\cdots F_{n-1} = F_n - 2.$$

**Proof by induction on $n$.**

*Base case $n=1$:* the left side is $F_0 = 3$, and the right side is $F_1 - 2 = 5-2 = 3$ ✓

*Inductive step:* suppose the formula holds for some $n\ge1$, i.e. $F_0\cdots F_{n-1} = F_n-2$. Multiply both sides by $F_n$:
$$F_0F_1\cdots F_{n-1}F_n = \left(F_n-2\right)F_n.$$
Now substitute $F_n = 2^{2^n}+1$, so that $F_n - 2 = 2^{2^n}-1$, and use the difference of squares:
$$\left(2^{2^n}-1\right)\left(2^{2^n}+1\right) = \left(2^{2^n}\right)^2 - 1 = 2^{2\cdot 2^n}-1 = 2^{2^{n+1}}-1 = F_{n+1}-2.$$
That is exactly the formula for $n+1$, completing the induction. ∎

*Step 2: coprimality.* Let $m < n$ and let $d$ be any positive common divisor of $F_m$ and $F_n$.

Because $m \le n-1$, the number $F_m$ is one of the factors in the product $F_0F_1\cdots F_{n-1}$. Hence
$$F_m \ \big|\ F_0F_1\cdots F_{n-1} = F_n - 2,$$
and since $d \mid F_m$, also
$$d \ \big|\ F_n - 2.$$

But $d \mid F_n$ too, so $d$ divides the difference:
$$d \ \big|\ F_n - \left(F_n-2\right) = 2.$$

So $d \in\{1,2\}$. Now note that every Fermat number is **odd**: $F_k = 2^{2^k}+1$ is an even number plus 1. So $d$ cannot be 2, leaving
$$d = 1.$$

Since this holds for every common divisor, $\gcd(F_m,F_n)=1$. ∎

*Step 3: infinitely many primes.* Each $F_n$ satisfies $F_n \ge 3 > 1$, so it has at least one prime divisor; choose one and call it $p_n$.

Suppose $p_m = p_n$ for some $m\ne n$. Then that prime divides both $F_m$ and $F_n$, so it is a common divisor greater than 1 — contradicting $\gcd(F_m,F_n)=1$.

Hence $p_0, p_1, p_2, \dots$ are **pairwise distinct** primes, and there are infinitely many of them. ∎

**Check the first few.** $F_0 = 3$, $F_1=5$, $F_2=17$, $F_3=257$, $F_4 = 65537$ — all prime, and certainly pairwise coprime. $F_5 = 4294967297 = 641\times6700417$ is *not* prime (Euler's discovery), but the argument never needed primality — only that each $F_n$ has *some* prime factor.

**What to take away.** Three separate techniques, each reusable:
1. **Experiment first.** Computing $F_0F_1 = F_2-2$ is what reveals the formula; nobody guesses it cold.
2. **Telescoping via difference of squares** is the engine of the induction.
3. **"Infinitely many primes" from a pairwise-coprime sequence** — any infinite sequence of pairwise coprime integers greater than 1 proves it.
[/sol]

### P9 | Hard | Standard
Let $a>1$ and let $m,n$ be positive integers. Prove that
$$a^m - 1 \ \big|\ a^n-1 \qquad\text{if and only if}\qquad m \mid n.$$
[hint]
One direction is a factorisation. For the other, write $n = qm+r$ by the division algorithm and reduce $a^n-1$ modulo $a^m-1$; you should end up with $a^r-1$, and then a size argument finishes it.
[/hint]
[sol]
**What is being asked.** An "if and only if", so there are **two** implications to prove, and both must appear. It is worth deciding which is easier first — usually one direction is a construction and the other needs an argument.

**Finding the idea.**

*The easy direction ($m\mid n \implies$ divisibility).* If $n$ is a multiple of $m$, then $a^n$ is a power of $a^m$, and the identity $x^k - 1 = (x-1)(x^{k-1}+\cdots+1)$ applies with $x = a^m$.

*The harder direction.* We must show that if $m$ does **not** divide $n$, the divisibility fails. The natural tool is the division algorithm: write $n = qm+r$ with a remainder $r$, and show the remainder survives. The mechanism is that $a^m \equiv 1 \pmod{a^m-1}$, so powers of $a$ reduce with period $m$ in the exponent.

**Part 1: if $m \mid n$ then $a^m-1 \mid a^n-1$.**

Write $n = km$ for a positive integer $k$, and set $x = a^m$. Then $a^n = a^{km} = x^k$, and
$$a^n - 1 = x^k - 1 = (x-1)\left(x^{k-1}+x^{k-2}+\cdots+x+1\right).$$
The second bracket is an integer, and $x - 1 = a^m-1$. So $a^m-1$ divides $a^n-1$. ✓

**Part 2: if $a^m-1 \mid a^n-1$ then $m \mid n$.**

*Step 1: divide with remainder.* By the division algorithm there are unique integers $q\ge0$ and $r$ with
$$n = qm + r, \qquad 0 \le r < m.$$
Our goal is to prove $r=0$.

*Step 2: split $a^n-1$.* Write
$$a^n - 1 = a^{qm+r}-1 = a^r\cdot a^{qm} - 1 = a^r\left(a^{qm}-1\right) + \left(a^r - 1\right).$$
(Check the algebra: expanding the right side gives $a^r a^{qm} - a^r + a^r - 1 = a^{qm+r}-1$ ✓)

*Step 3: kill the first term.* By **Part 1** applied with $n$ replaced by $qm$ (which is a multiple of $m$),
$$a^m - 1 \ \big|\ a^{qm}-1,$$
and therefore $a^m-1$ divides $a^r\left(a^{qm}-1\right)$ as well.

*Step 4: extract the remainder term.* We are assuming $a^m-1 \mid a^n-1$. Combining with Step 3 and the decomposition in Step 2,
$$a^m-1 \ \big|\ \left(a^n-1\right) - a^r\left(a^{qm}-1\right) = a^r - 1.$$

*Step 5: a size argument finishes it.* We now know $a^m-1$ divides $a^r-1$, where $0\le r<m$. Since $a>1$, the function $t\mapsto a^t$ is strictly increasing, so
$$0 \ \le\ a^r - 1 \ <\ a^m - 1.$$

A non-negative integer that is **strictly smaller** than $a^m-1$ and yet **divisible by** it must be 0. (If $a^r-1$ were a non-zero multiple of $a^m-1$, it would be at least $a^m-1$ in size.) Hence
$$a^r - 1 = 0 \implies a^r = 1 \implies r = 0,$$
the last step because $a>1$.

So $n = qm$, i.e. $m \mid n$. ✓ ∎

**A worked instance.** Take $a=2$, $m=3$, $n=10$. Then $2^3-1 = 7$ and $2^{10}-1 = 1023 = 7\times146 + 1$, so 7 does **not** divide it — consistent with $3\nmid10$. The proof's bookkeeping: $10 = 3\cdot3+1$, so $r=1$ and $a^r-1 = 1$, which is indeed the remainder ✓. With $n=9$ instead: $2^9-1 = 511 = 7\times73$ ✓, and $3\mid9$ ✓.

**The corollary worth memorising.** The same argument, run as the Euclidean algorithm on the exponents, gives
$$\gcd\left(a^m-1,\ a^n-1\right) = a^{\gcd(m,n)}-1.$$
This identity appears often enough that it is worth knowing by name.

**What to take away.** *"Divides" plus "strictly smaller in size" forces "equals zero".* That combination — a divisibility and an inequality squeezing against each other — is one of the most common endings in number theory, and Step 5 is the model for it.
[/sol]

### P10 | Hard | Classic
Prove that
$$\frac{(2m)!\,(2n)!}{m!\,n!\,(m+n)!}$$
is an integer for all non-negative integers $m,n$.
[hint]
"Is an integer" means: for every prime, the exponent on top is at least the exponent on the bottom. Legendre's formula turns each exponent into a sum of floors, so the whole problem reduces to one inequality about $\lfloor\,\cdot\,\rfloor$.
[/hint]
[sol]
**What is being asked.** The expression is a ratio of huge factorials, and it is not obviously a whole number — there is no visible cancellation. Small cases are reassuring: $m=n=1$ gives $\frac{2!\,2!}{1!\,1!\,2!} = \frac{4}{2} = 2$ ✓, and $m=2,n=1$ gives $\frac{24\cdot2}{2\cdot1\cdot6} = \frac{48}{12}=4$ ✓.

**Finding the idea.** There is no clever algebraic cancellation to find. The systematic approach is:

> A rational number is an integer exactly when, **for every prime $p$**, the exponent of $p$ in the numerator is at least the exponent in the denominator.

And there is a formula for the exponent of a prime in a factorial:

> **Legendre's formula.** $\displaystyle v_p(N!) = \left\lfloor\frac{N}{p}\right\rfloor + \left\lfloor\frac{N}{p^2}\right\rfloor+\left\lfloor\frac{N}{p^3}\right\rfloor+\cdots$

So the problem becomes: prove an inequality between two sums of floor functions. And since the sums are term by term in $p^k$, it is enough to prove it **one term at a time**.

**The proof.**

*Step 1: reduce to exponents.* Fix a prime $p$. By Legendre's formula, the exponent of $p$ in the numerator minus the exponent in the denominator is
$$\sum_{k\ge1}\left[\left\lfloor\frac{2m}{p^k}\right\rfloor+\left\lfloor\frac{2n}{p^k}\right\rfloor-\left\lfloor\frac{m}{p^k}\right\rfloor-\left\lfloor\frac{n}{p^k}\right\rfloor-\left\lfloor\frac{m+n}{p^k}\right\rfloor\right].$$
We need this to be $\ge0$. It suffices to show **every individual bracket** is $\ge0$.

*Step 2: state the real inequality.* Writing $x = \frac{m}{p^k}$ and $y = \frac{n}{p^k}$, each bracket has the form
$$\lfloor 2x\rfloor + \lfloor 2y\rfloor - \lfloor x\rfloor-\lfloor y\rfloor - \lfloor x+y\rfloor.$$
So the whole problem reduces to the following statement about real numbers:

> **Claim.** For all real $x,y\ge0$: $\quad \lfloor 2x\rfloor+\lfloor 2y\rfloor \ \ge\ \lfloor x\rfloor+\lfloor y\rfloor+\lfloor x+y\rfloor.$

*Step 3: prove the claim.* Split each number into its integer and fractional parts:
$$x = \lfloor x\rfloor + \{x\}, \qquad y = \lfloor y\rfloor+\{y\}, \qquad \text{where } 0 \le \{x\},\{y\} < 1.$$

Now simplify each of the five floors:
- $\lfloor 2x\rfloor = \lfloor 2\lfloor x\rfloor + 2\{x\}\rfloor = 2\lfloor x\rfloor + \lfloor 2\{x\}\rfloor$, because $2\lfloor x\rfloor$ is an integer and can be pulled out of the floor. Similarly for $y$.
- $\lfloor x+y\rfloor = \lfloor x\rfloor+\lfloor y\rfloor + \lfloor \{x\}+\{y\}\rfloor$, for the same reason.

Substituting these into the claim, the terms $2\lfloor x\rfloor + 2\lfloor y\rfloor$ appear on the left and $\lfloor x\rfloor+\lfloor y\rfloor+\lfloor x\rfloor+\lfloor y\rfloor$ on the right — they cancel exactly. What remains is
$$\lfloor 2\{x\}\rfloor + \lfloor 2\{y\}\rfloor \ \ge\ \lfloor \{x\}+\{y\}\rfloor.$$

This is now a statement about two numbers in $[0,1)$, and we can check it directly. The right side is $\lfloor\{x\}+\{y\}\rfloor$, where $0 \le \{x\}+\{y\} < 2$, so it is either **0** or **1**.

- **If the right side is 0**, the inequality holds because the left side is a sum of floors of non-negative numbers, hence $\ge 0$. ✓
- **If the right side is 1**, then $\{x\}+\{y\}\ge1$. Two numbers each less than $\frac12$ would sum to less than 1, so at least one of them is $\ge\frac12$ — say $\{x\}\ge\frac12$. Then $2\{x\}\ge1$, so $\lfloor 2\{x\}\rfloor \ge 1$, and the left side is at least 1. ✓

In both cases the claim holds. ∎

*Step 4: conclude.* Every bracket in Step 1 is non-negative, so for every prime $p$ the numerator carries at least as many factors of $p$ as the denominator. Therefore the quotient is an integer. ∎

**Check on a case.** $m=3$, $n=2$: the value is $\frac{6!\,4!}{3!\,2!\,5!} = \frac{720\cdot24}{6\cdot2\cdot120} = \frac{17280}{1440} = 12$ ✓ — an integer, as promised.

**What to take away.** Two ideas, both far bigger than this problem:
1. **"Is it an integer?" is a question about every prime separately**, and Legendre's formula answers it for factorials. Any problem about divisibility of binomial-coefficient-like expressions goes this way.
2. **Reduce to the fractional parts.** Identities like $\lfloor 2x\rfloor = 2\lfloor x\rfloor + \lfloor 2\{x\}\rfloor$ let you cancel all the integer parts, leaving a small, checkable statement about numbers in $[0,1)$.

*(These numbers are the "super Catalan" numbers; the case $m=n$ gives $\frac{(2n)!^2}{n!^2(2n)!} = \binom{2n}{n}$.)*
[/sol]
