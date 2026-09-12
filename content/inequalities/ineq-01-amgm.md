---
id: ineq-01-amgm
title: AM–GM and its relatives
level: Foundation
hours: 3
blurb: The workhorse inequality, the weighted version, and the art of splitting terms so that equality lands where you need it.
tags: AM-GM, means, equality case
link: Yufei Zhao — Inequalities :: https://yufeizhao.com/olympiad/wc08/ineq.pdf
link: MOTP — Algebra :: https://jpsaha.github.io/MOTP/alg/
video: Search: AM-GM inequality olympiad problems :: https://www.youtube.com/results?search_query=AM-GM+inequality+olympiad+problems
---

## The statement

> **AM–GM.** For non-negative reals $a_1, \dots, a_n$,
> $$\frac{a_1+a_2+\cdots+a_n}{n} \;\ge\; \sqrt[n]{a_1a_2\cdots a_n},$$
> with **equality if and only if $a_1=a_2=\cdots=a_n$**.

The equality condition is not decoration — it is how you check whether AM–GM is the right tool, and it is what a marker looks for.

**Two-variable form**, worth having reflexively:
$$a+b \ge 2\sqrt{ab}, \qquad \frac ab+\frac ba \ge 2 \;(a,b>0), \qquad a^2+b^2\ge 2ab.$$

> **Weighted AM–GM.** For non-negative $a_i$ and positive weights $w_i$ with $\sum w_i = 1$,
> $$w_1a_1 + \cdots + w_na_n \ge a_1^{w_1}\cdots a_n^{w_n}.$$

## The chain of means

For positive reals,
$$\underbrace{\frac{n}{\frac1{a_1}+\cdots+\frac1{a_n}}}_{\text{HM}} \;\le\; \underbrace{\sqrt[n]{a_1\cdots a_n}}_{\text{GM}} \;\le\; \underbrace{\frac{a_1+\cdots+a_n}{n}}_{\text{AM}} \;\le\; \underbrace{\sqrt{\frac{a_1^2+\cdots+a_n^2}{n}}}_{\text{QM}}$$

All equalities hold simultaneously, exactly when all $a_i$ are equal. HM–GM follows from AM–GM applied to the reciprocals.

## How to actually use it

**1. Match the equality case.** Before applying AM–GM, work out where equality *should* hold in the problem (usually $a=b=c$, or at the constraint's symmetric point). Then split terms so AM–GM's equality case lands there.

> **Example.** Prove $a^3+b^3+c^3 \ge 3abc$ for $a,b,c \ge 0$.
> AM–GM on the three terms: $\frac{a^3+b^3+c^3}{3}\ge\sqrt[3]{a^3b^3c^3}=abc$ ✓. Equality at $a=b=c$, which matches. ∎

**2. Split unevenly when the equality point is not symmetric.**

> **Example.** Minimise $x + \frac{4}{x^2}$ for $x>0$.
> Naively $x+\frac4{x^2}\ge2\sqrt{4/x}$ — useless, the bound still involves $x$. Instead split $x$ into two halves:
> $$\frac x2+\frac x2+\frac4{x^2} \ge 3\sqrt[3]{\frac x2\cdot\frac x2\cdot\frac{4}{x^2}} = 3\sqrt[3]{1} = 3.$$
> Equality when $\frac x2 = \frac4{x^2}$, i.e. $x^3=8$, $x=2$. Check: $2+\frac44 = 3$ ✓. ∎

That splitting move — **break one term into $k$ equal pieces so the product becomes constant** — is the core skill of the topic.

**3. Homogenise.** If there is a constraint like $a+b+c=1$, either substitute it in to make both sides the same degree, or multiply the weaker side by $(a+b+c)^k$ to match degrees. A homogeneous inequality can then be normalised however you like.

**4. Apply to a clever grouping.** $(a+b)(b+c)(c+a)\ge 8abc$ comes from three applications of $x+y\ge2\sqrt{xy}$ multiplied together.

## Worked example

**For positive reals with $abc=1$, prove $\dfrac{1}{a^3(b+c)}+\dfrac{1}{b^3(c+a)}+\dfrac{1}{c^3(a+b)} \ge \dfrac32$.**

Substitute $a = 1/x$, $b=1/y$, $c=1/z$, so $xyz=1$. Then
$$\frac{1}{a^3(b+c)} = \frac{x^3}{\frac1y+\frac1z} = \frac{x^3yz}{y+z} = \frac{x^2\cdot xyz}{y+z} = \frac{x^2}{y+z},$$
so the inequality becomes
$$\frac{x^2}{y+z}+\frac{y^2}{z+x}+\frac{z^2}{x+y}\ge\frac32.$$

By AM–GM, $\frac{x^2}{y+z}+\frac{y+z}{4}\ge 2\sqrt{\frac{x^2}{4}} = x$. Summing the three such inequalities:
$$\sum\frac{x^2}{y+z} + \frac{2(x+y+z)}{4} \ge x+y+z \implies \sum\frac{x^2}{y+z}\ge\frac{x+y+z}{2}.$$
Finally $x+y+z\ge3\sqrt[3]{xyz}=3$, so the sum is $\ge\frac32$. Equality at $x=y=z=1$, i.e. $a=b=c=1$ ✓. ∎

## Common traps

- Applying AM–GM to numbers that might be **negative**. Always state non-negativity.
- Getting a bound that still contains the variable — a sign you split the terms wrongly.
- Claiming equality without checking it is *attainable* under the constraint.
- Adding two inequalities whose equality cases are different, then claiming the sum is tight.

## Problems

### P1 | Warmup | Standard
Prove that $\dfrac ab+\dfrac bc+\dfrac ca \ge 3$ for positive reals $a,b,c$.
[hint]
AM–GM on the three terms — their product is 1.
[/hint]
[sol]
All three terms are positive. By AM–GM,
$$\frac{\frac ab+\frac bc+\frac ca}{3} \ge \sqrt[3]{\frac ab\cdot\frac bc\cdot\frac ca} = \sqrt[3]{1}=1,$$
so the sum is at least 3.

Equality holds iff $\frac ab=\frac bc=\frac ca$, which (multiplying) forces each to equal 1, i.e. $a=b=c$. ∎
[/sol]

### P2 | Warmup | Standard
Find the minimum of $x+\dfrac{9}{x}$ for $x > 0$.
[hint]
Two-term AM–GM.
[/hint]
[sol]
By AM–GM on the two positive terms,
$$x + \frac9x \ge 2\sqrt{x\cdot\frac9x} = 2\cdot3 = 6.$$

Equality iff $x = \frac9x$, i.e. $x^2=9$, $x=3$ (taking the positive root). Then $3+3=6$ ✓.

**Minimum: 6, attained at $x=3$.** ∎
[/sol]

### P3 | Easy | Standard
Prove $(a+b)(b+c)(c+a)\ge 8abc$ for positive reals.
[hint]
Apply two-term AM–GM to each factor and multiply.
[/hint]
[sol]
By AM–GM on each factor,
$$a+b \ge 2\sqrt{ab}, \qquad b+c\ge2\sqrt{bc}, \qquad c+a\ge2\sqrt{ca}.$$
All six quantities are positive, so the inequalities may be multiplied:
$$(a+b)(b+c)(c+a) \ge 8\sqrt{ab}\sqrt{bc}\sqrt{ca} = 8\sqrt{a^2b^2c^2} = 8abc.$$

Equality requires $a=b$, $b=c$ and $c=a$ simultaneously, i.e. $a=b=c$. ∎
[/sol]

### P4 | Easy | Standard
For positive reals with $a+b+c=1$, prove $\left(1+\frac1a\right)\left(1+\frac1b\right)\left(1+\frac1c\right)\ge 64$.
[hint]
Write $1+\frac1a = \frac{a+1}{a} = \frac{2a+b+c}{a}$ using the constraint, then apply AM–GM to the numerator with four terms.
[/hint]
[sol]
Using $a+b+c=1$,
$$1+\frac1a = \frac{a+1}{a} = \frac{a + (a+b+c)}{a} = \frac{2a+b+c}{a}.$$

By AM–GM on the four positive numbers $a, a, b, c$:
$$2a+b+c = a+a+b+c \ge 4\sqrt[4]{a\cdot a\cdot b\cdot c} = 4\sqrt[4]{a^2bc}.$$

Hence
$$1+\frac1a \ge \frac{4\sqrt[4]{a^2bc}}{a}, \qquad\text{and cyclically}\qquad 1+\frac1b\ge\frac{4\sqrt[4]{b^2ca}}{b},\quad 1+\frac1c\ge\frac{4\sqrt[4]{c^2ab}}{c}.$$

Multiplying all three (all quantities positive):
$$\prod\left(1+\frac1a\right) \ge \frac{64\sqrt[4]{a^2bc\cdot b^2ca\cdot c^2ab}}{abc} = \frac{64\sqrt[4]{a^4b^4c^4}}{abc} = \frac{64abc}{abc} = 64.$$

Equality requires $a=b=c$ in each AM–GM, i.e. $a=b=c=\frac13$. Check: $(1+3)^3 = 64$ ✓. ∎
[/sol]

### P5 | Medium | Standard
Prove that for positive reals, $\dfrac{a}{b+c}+\dfrac{b}{c+a}+\dfrac{c}{a+b}\ge\dfrac32$ **(Nesbitt's inequality)**.
[hint]
Add 1 to each term to get $\frac{a+b+c}{b+c}$ etc., then apply AM–HM to the three denominators.
[/hint]
[sol]
Let $s = a+b+c$. Adding 1 to each term,
$$\sum\frac{a}{b+c} + 3 = \sum\frac{a+b+c}{b+c} = s\left(\frac{1}{b+c}+\frac1{c+a}+\frac1{a+b}\right).$$

Apply AM–HM to the three positive numbers $b+c$, $c+a$, $a+b$, whose sum is $2s$:
$$\frac{(b+c)+(c+a)+(a+b)}{3}\ \ge\ \frac{3}{\frac1{b+c}+\frac1{c+a}+\frac1{a+b}},$$
i.e.
$$\frac{1}{b+c}+\frac1{c+a}+\frac1{a+b} \ \ge\ \frac{9}{2s}.$$

Therefore
$$\sum\frac{a}{b+c}+3 \ \ge\ s\cdot\frac{9}{2s} = \frac92 \implies \sum\frac{a}{b+c}\ge\frac92-3 = \frac32.$$

Equality requires $b+c=c+a=a+b$, i.e. $a=b=c$. ∎
[/sol]

### P6 | Medium | CRMO 2016 P2
Let $a,b,c$ be positive reals with $\dfrac{a}{1+a}+\dfrac{b}{1+b}+\dfrac{c}{1+c}=1$. Prove that $abc \le \dfrac18$.
[hint]
Substitute $u = \frac{1}{1+a}$, $v=\frac1{1+b}$, $w=\frac1{1+c}$. The constraint becomes something very clean, and $a,b,c$ become simple ratios in $u,v,w$ — at which point you have already proved the inequality you need, in P3.
[/hint]
[sol]
**Step 1: substitute.** Put
$$u = \frac{1}{1+a}, \qquad v = \frac1{1+b}, \qquad w = \frac1{1+c},$$
so $u,v,w \in (0,1)$ and $a = \dfrac{1-u}{u}$, $b = \dfrac{1-v}{v}$, $c = \dfrac{1-w}{w}$.

Since $\dfrac{a}{1+a} = 1 - \dfrac{1}{1+a} = 1-u$, the constraint becomes
$$(1-u)+(1-v)+(1-w) = 1 \implies u+v+w = 2.$$

**Step 2: re-substitute to make it symmetric.** Set
$$p = 1-u, \qquad q = 1-v, \qquad r = 1-w.$$
These are positive, and $p+q+r = 3 - (u+v+w) = 3-2 = 1$.

Now $u = 1-p = q+r$ (using $p+q+r=1$), so
$$a = \frac{1-u}{u} = \frac{p}{q+r}, \qquad b = \frac{q}{r+p}, \qquad c = \frac{r}{p+q}.$$

**Step 3: the inequality.** We must show
$$abc = \frac{p}{q+r}\cdot\frac{q}{r+p}\cdot\frac{r}{p+q} \;\le\; \frac18,$$
which rearranges (all denominators positive) to
$$8pqr \;\le\; (p+q)(q+r)(r+p).$$

This is exactly **P3** of this problem set, proved by multiplying the three AM–GM inequalities $p+q\ge2\sqrt{pq}$, $q+r\ge2\sqrt{qr}$, $r+p\ge2\sqrt{rp}$.

**Step 4: equality.** Equality needs $p=q=r=\frac13$, which gives
$$a=b=c=\frac{1/3}{2/3}=\frac12, \qquad abc = \frac18,$$
and the constraint is satisfied: $3\cdot\dfrac{1/2}{3/2} = 3\cdot\dfrac13 = 1$ ✓.

Hence $abc \le \dfrac18$, with equality exactly at $a=b=c=\frac12$. ∎

**The lesson.** A constraint of the form $\sum\frac{a}{1+a}=1$ is asking to be substituted. The substitution $u = \frac1{1+a}$ turns it into a linear condition, and one more shift turns it into the normalised $p+q+r=1$ — after which the problem is a standard symmetric inequality you already know.
[/sol]

### P7 | Medium | Standard
Prove that $n! < \left(\dfrac{n+1}{2}\right)^n$ for every integer $n \ge 2$.
[hint]
Apply AM–GM to the numbers $1, 2, \dots, n$.
[/hint]
[sol]
Apply AM–GM to the $n$ positive numbers $1, 2, \dots, n$:
$$\sqrt[n]{1\cdot2\cdots n} \le \frac{1+2+\cdots+n}{n} = \frac{\frac{n(n+1)}{2}}{n} = \frac{n+1}{2}.$$

So $\sqrt[n]{n!}\le\frac{n+1}{2}$, hence $n! \le \left(\frac{n+1}{2}\right)^n$.

Equality in AM–GM requires all the numbers to be equal, i.e. $1 = 2 = \cdots = n$, which fails for $n\ge2$. So the inequality is **strict**:
$$n! < \left(\frac{n+1}{2}\right)^n \qquad (n\ge2). \;∎$$

(Check $n=3$: $6 < 2^3 = 8$ ✓.)
[/sol]

### P8 | Medium | Standard
Let $a,b,c>0$ with $abc=1$. Prove $a+b+c \le a^2+b^2+c^2$.
[hint]
Show $a^2+b^2+c^2 \ge \frac{(a+b+c)^2}{3}$ and $a+b+c\ge3$, then combine.
[/hint]
[sol]
Let $s = a+b+c$.

**Step 1: $s \ge 3$.** By AM–GM, $\frac{a+b+c}{3}\ge\sqrt[3]{abc}=1$, so $s \ge 3$.

**Step 2: $a^2+b^2+c^2\ge\frac{s^2}{3}$.** This is QM–AM (equivalently, Cauchy–Schwarz, or expand $(a-b)^2+(b-c)^2+(c-a)^2\ge0$):
$$3(a^2+b^2+c^2) \ge (a+b+c)^2.$$

**Step 3: combine.**
$$a^2+b^2+c^2 \ \ge\ \frac{s^2}{3} \ =\ s\cdot\frac s3 \ \ge\ s\cdot 1 \ =\ a+b+c,$$
using $s \ge 3$ in the last step and $s>0$.

Equality throughout requires $a=b=c$ and $s=3$, i.e. $a=b=c=1$ ✓. ∎
[/sol]

### P9 | Hard | Standard
Prove that for positive reals $a, b, c$,
$$\frac{a^3}{b+c}+\frac{b^3}{c+a}+\frac{c^3}{a+b}\ \ge\ \frac{a^2+b^2+c^2}{2}.$$
[hint]
For each term use AM–GM in the form $\frac{a^3}{b+c} + \frac{a(b+c)}{4} \ge a^2$, then sum and simplify.
[/hint]
[sol]
For each term, apply two-term AM–GM:
$$\frac{a^3}{b+c} + \frac{a(b+c)}{4} \ \ge\ 2\sqrt{\frac{a^3}{b+c}\cdot\frac{a(b+c)}{4}} = 2\sqrt{\frac{a^4}{4}} = a^2.$$

Summing the three cyclic versions:
$$\sum\frac{a^3}{b+c} \ +\ \frac{1}{4}\Big[a(b+c)+b(c+a)+c(a+b)\Big] \ \ge\ a^2+b^2+c^2.$$

The bracket equals $2(ab+bc+ca)$, so
$$\sum\frac{a^3}{b+c} \ \ge\ a^2+b^2+c^2 - \frac{ab+bc+ca}{2}.$$

Finally, $ab+bc+ca \le a^2+b^2+c^2$ (from $\frac12\sum(a-b)^2\ge0$), so
$$\sum\frac{a^3}{b+c} \ \ge\ a^2+b^2+c^2 - \frac{a^2+b^2+c^2}{2} = \frac{a^2+b^2+c^2}{2}.$$

Equality requires $a=b=c$ throughout ✓. ∎
[/sol]

### P10 | Hard | Standard
Let $a_1, \dots, a_n$ be positive reals with $a_1a_2\cdots a_n = 1$. Prove that
$$(1+a_1)(1+a_2)\cdots(1+a_n)\ \ge\ 2^n.$$
[hint]
Apply two-term AM–GM to each factor, then use the product constraint.
[/hint]
[sol]
For each $i$, AM–GM on the two positive numbers $1$ and $a_i$ gives
$$1 + a_i \ \ge\ 2\sqrt{a_i}.$$

All factors are positive, so multiplying the $n$ inequalities:
$$\prod_{i=1}^n\left(1+a_i\right) \ \ge\ 2^n\prod_{i=1}^n\sqrt{a_i} = 2^n\sqrt{a_1a_2\cdots a_n} = 2^n\sqrt1 = 2^n.$$

Equality requires $a_i = 1$ for every $i$, which is consistent with the constraint. ∎

**Remark.** The same one-line technique — *AM–GM on each factor, then multiply* — proves a whole family: e.g. $\prod(1+a_i^k)\ge2^n$ under the same hypothesis, and $\prod\left(a_i+\frac1{a_i}\right)\ge2^n$ with no hypothesis at all.
[/sol]
