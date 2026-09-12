---
id: ineq-02-cauchy
title: Cauchy–Schwarz and the Engel form
level: Core
hours: 3
blurb: The second workhorse. Cauchy–Schwarz, its Engel (Titu) rearrangement, and the power mean inequality that sits behind both.
tags: Cauchy-Schwarz, Engel form, power mean
link: Yufei Zhao — Inequalities :: https://yufeizhao.com/olympiad/wc08/ineq.pdf
link: MOTP — Algebra :: https://jpsaha.github.io/MOTP/alg/
video: Search: Cauchy Schwarz inequality olympiad Titu :: https://www.youtube.com/results?search_query=cauchy+schwarz+engel+form+titu+lemma+olympiad
---

## Cauchy–Schwarz

> For real numbers $a_i, b_i$,
> $$\left(\sum_{i=1}^n a_ib_i\right)^2 \;\le\; \left(\sum_{i=1}^n a_i^2\right)\left(\sum_{i=1}^n b_i^2\right),$$
> with equality iff the vectors $(a_i)$ and $(b_i)$ are **proportional** (one is a scalar multiple of the other, or one is zero).

*Proof.* The quadratic $f(t) = \sum(a_i t - b_i)^2 = t^2\sum a_i^2 - 2t\sum a_ib_i + \sum b_i^2$ is a sum of squares, hence $\ge0$ for all real $t$. A non-negative quadratic has discriminant $\le 0$:
$$4\left(\sum a_ib_i\right)^2 - 4\left(\sum a_i^2\right)\left(\sum b_i^2\right)\le 0. \;∎$$

Equality means $f(t)=0$ for some $t$, i.e. $b_i = ta_i$ for all $i$.

## The Engel form (Titu's lemma)

> For reals $x_i$ and **positive** $y_i$,
> $$\frac{x_1^2}{y_1}+\frac{x_2^2}{y_2}+\cdots+\frac{x_n^2}{y_n} \;\ge\; \frac{(x_1+x_2+\cdots+x_n)^2}{y_1+y_2+\cdots+y_n},$$
> with equality iff $\dfrac{x_1}{y_1}=\dfrac{x_2}{y_2}=\cdots=\dfrac{x_n}{y_n}$.

This is Cauchy–Schwarz with $a_i = \frac{x_i}{\sqrt{y_i}}$ and $b_i = \sqrt{y_i}$. It is **the single most useful form in practice**, because so many olympiad inequalities are already sums of fractions.

> **Recognise the pattern.** Any sum $\sum\frac{\text{something}^2}{\text{positive}}$ collapses to one fraction. If the numerators are not squares, make them squares: $\frac ab = \frac{a^2}{ab}$.

**Example (Nesbitt again, in one line).**
$$\frac{a}{b+c}+\frac{b}{c+a}+\frac{c}{a+b} = \frac{a^2}{a(b+c)}+\frac{b^2}{b(c+a)}+\frac{c^2}{c(a+b)} \ge \frac{(a+b+c)^2}{2(ab+bc+ca)} \ge \frac32,$$
the last step because $(a+b+c)^2\ge3(ab+bc+ca)$. ∎

## Cauchy in "sum of products" form

Sometimes it is more natural as
$$\left(\sum a_i^2\right)\left(\sum b_i^2\right)\ge\left(\sum a_ib_i\right)^2 \quad\text{or}\quad \left(\sum \frac{1}{a_i}\right)\left(\sum a_i\right)\ge n^2.$$
That last one (take $b_i = \frac1{\sqrt{a_i}}$, $a_i \to \sqrt{a_i}$) is AM–HM, and it is worth remembering separately.

## Power mean inequality

> For positive reals $a_i$ and real $r < s$,
> $$M_r \;\le\; M_s, \qquad\text{where}\qquad M_t = \left(\frac{a_1^t+\cdots+a_n^t}{n}\right)^{1/t} \; (t \ne 0), \qquad M_0 = \sqrt[n]{a_1\cdots a_n}.$$

So $M_{-1}\le M_0\le M_1\le M_2$ recovers HM ≤ GM ≤ AM ≤ QM. The general form is useful when an inequality mixes different powers: it lets you compare $\sum a_i^3$ with $\left(\sum a_i\right)^3$, and so on.

**The most-used corollary:**
$$\frac{a_1^k+\cdots+a_n^k}{n} \ \ge\ \left(\frac{a_1+\cdots+a_n}{n}\right)^k \qquad (k \ge 1).$$

## Choosing between AM–GM and Cauchy

| The inequality looks like… | Reach for… |
|---|---|
| a product bounded by a sum | AM–GM |
| a sum of fractions $\sum \frac{x^2}{y}$ | Engel / Cauchy |
| a squared sum vs. a sum of squares | Cauchy |
| mixing $\sum a$, $\sum a^2$, $\sum a^3$ | power mean |
| $\sum \frac1{a_i}$ appears | AM–HM (Cauchy) |

## Common traps

- Using the Engel form with a **negative** denominator. All $y_i$ must be positive.
- Applying Cauchy and getting a bound in the wrong direction — check which side is the product of sums.
- Forgetting that equality in Engel needs $\frac{x_i}{y_i}$ all equal, **not** $x_i$ all equal.
- Chaining two inequalities whose equality cases conflict, then asserting the bound is sharp.

## Problems

### P1 | Warmup | Standard
Prove $(a^2+b^2)(c^2+d^2)\ge(ac+bd)^2$ and state when equality holds.
[hint]
This is Cauchy–Schwarz with $n=2$. Or expand both sides directly.
[/hint]
[sol]
Expanding both sides:
$$(a^2+b^2)(c^2+d^2) - (ac+bd)^2 = a^2c^2+a^2d^2+b^2c^2+b^2d^2 - a^2c^2-2abcd-b^2d^2 = a^2d^2-2abcd+b^2c^2,$$
which is $(ad-bc)^2 \ge 0$.

So the inequality holds, with equality iff $ad = bc$, i.e. the vectors $(a,b)$ and $(c,d)$ are proportional. ∎
[/sol]

### P2 | Warmup | Standard
For positive reals with $a+b+c=1$, prove $\dfrac1a+\dfrac1b+\dfrac1c\ge9$.
[hint]
Engel form with numerators $1$, or AM–HM.
[/hint]
[sol]
By the Engel form (Titu),
$$\frac1a+\frac1b+\frac1c = \frac{1^2}{a}+\frac{1^2}{b}+\frac{1^2}{c} \ \ge\ \frac{(1+1+1)^2}{a+b+c} = \frac{9}{1} = 9.$$

Equality iff $\frac1a=\frac1b=\frac1c$, i.e. $a=b=c=\frac13$ ✓. ∎
[/sol]

### P3 | Easy | Standard
Prove $(a+b+c)^2 \le 3(a^2+b^2+c^2)$ for all reals.
[hint]
Cauchy–Schwarz with $b_i = 1$.
[/hint]
[sol]
Apply Cauchy–Schwarz to the vectors $(a,b,c)$ and $(1,1,1)$:
$$(a\cdot1+b\cdot1+c\cdot1)^2 \le \left(a^2+b^2+c^2\right)\left(1^2+1^2+1^2\right) = 3\left(a^2+b^2+c^2\right).$$

Equality iff $(a,b,c)$ is proportional to $(1,1,1)$, i.e. $a=b=c$. ∎
[/sol]

### P4 | Easy | Standard
For positive reals, prove $\dfrac{a^2}{b}+\dfrac{b^2}{c}+\dfrac{c^2}{a}\ge a+b+c$.
[hint]
Engel form directly.
[/hint]
[sol]
By the Engel form,
$$\frac{a^2}{b}+\frac{b^2}{c}+\frac{c^2}{a} \ \ge\ \frac{(a+b+c)^2}{b+c+a} = a+b+c.$$

Equality iff $\frac ab = \frac bc = \frac ca$, which forces $a=b=c$. ∎
[/sol]

### P5 | Medium | Standard
For positive reals with $a+b+c=3$, prove $\dfrac{a}{1+b^2}+\dfrac{b}{1+c^2}+\dfrac{c}{1+a^2}\ge\dfrac32$.
[hint]
Write $\frac{a}{1+b^2} = a - \frac{ab^2}{1+b^2}$ and bound $\frac{ab^2}{1+b^2}\le\frac{ab}{2}$ using AM–GM on the denominator.
[/hint]
[sol]
For each term,
$$\frac{a}{1+b^2} = a - \frac{ab^2}{1+b^2}.$$
By AM–GM, $1+b^2\ge2b$, so (as $a, b > 0$)
$$\frac{ab^2}{1+b^2} \le \frac{ab^2}{2b} = \frac{ab}{2}.$$
Hence
$$\frac{a}{1+b^2} \ \ge\ a - \frac{ab}{2}.$$

Summing cyclically,
$$\sum\frac{a}{1+b^2} \ \ge\ (a+b+c) - \frac{ab+bc+ca}{2} = 3 - \frac{ab+bc+ca}{2}.$$

Now $ab+bc+ca \le \frac{(a+b+c)^2}{3} = 3$, so
$$\sum\frac{a}{1+b^2}\ \ge\ 3 - \frac32 = \frac32.$$

Equality requires $b=1$ in each AM–GM and $a=b=c$, i.e. $a=b=c=1$; then each term is $\frac{1}{2}$ and the sum is $\frac32$ ✓. ∎
[/sol]

### P6 | Medium | Standard
Prove that for positive reals,
$$\frac{1}{a^3(b+c)}+\frac{1}{b^3(c+a)}+\frac{1}{c^3(a+b)} \ \ge\ \frac{3}{2}\qquad\text{when } abc=1.$$
[hint]
Write each term as $\frac{(1/a)^2}{a(b+c)}$ and apply the Engel form. Use $abc=1$ to simplify.
[/hint]
[sol]
Since $abc=1$, write $\frac{1}{a^3(b+c)} = \frac{1/a^2}{a(b+c)}=\frac{(1/a)^2}{a(b+c)}$.

By the Engel form with $x_i = \frac1a,\frac1b,\frac1c$ and $y_i = a(b+c), b(c+a), c(a+b)$:
$$\sum\frac{(1/a)^2}{a(b+c)} \ \ge\ \frac{\left(\frac1a+\frac1b+\frac1c\right)^2}{a(b+c)+b(c+a)+c(a+b)} = \frac{\left(\frac{ab+bc+ca}{abc}\right)^2}{2(ab+bc+ca)}.$$

Using $abc=1$, the numerator is $(ab+bc+ca)^2$, so the bound becomes
$$\frac{(ab+bc+ca)^2}{2(ab+bc+ca)} = \frac{ab+bc+ca}{2}.$$

Finally, by AM–GM,
$$ab+bc+ca \ \ge\ 3\sqrt[3]{(abc)^2} = 3.$$

Therefore the sum is $\ge \frac32$. Equality at $a=b=c=1$ ✓. ∎
[/sol]

### P7 | Medium | Standard
Let $a_1,\dots,a_n$ be positive reals summing to 1. Prove $\displaystyle\sum_{i=1}^{n}\frac{a_i}{2-a_i}\ \ge\ \frac{n}{2n-1}$.
[hint]
Engel: write $\frac{a_i}{2-a_i} = \frac{a_i^2}{a_i(2-a_i)}$ and bound the denominator sum.
[/hint]
[sol]
Write each term as $\dfrac{a_i^2}{a_i(2-a_i)}$ and apply the Engel form:
$$\sum_{i=1}^{n}\frac{a_i^2}{a_i(2-a_i)} \ \ge\ \frac{\left(\sum a_i\right)^2}{\sum a_i(2-a_i)} = \frac{1}{2\sum a_i - \sum a_i^2} = \frac{1}{2-\sum a_i^2}.$$

By Cauchy–Schwarz (or QM–AM), $\sum a_i^2 \ge \frac{\left(\sum a_i\right)^2}{n} = \frac1n$. Since $\sum a_i^2$ appears with a minus sign, this gives
$$\frac{1}{2-\sum a_i^2} \ \ge\ \frac{1}{2-\frac1n} = \frac{n}{2n-1}.$$

Therefore $\displaystyle\sum\frac{a_i}{2-a_i}\ \ge\ \frac{n}{2n-1}$.

Equality throughout requires $a_i = \frac1n$ for all $i$ ✓. ∎
[/sol]

### P8 | Medium | Standard
Prove that for positive reals $a,b,c$,
$$\frac{a}{b+2c}+\frac{b}{c+2a}+\frac{c}{a+2b}\ \ge\ 1.$$
[hint]
Engel form with numerators $a^2, b^2, c^2$, then compare $(a+b+c)^2$ with $3(ab+bc+ca)$.
[/hint]
[sol]
Rewrite each term with a squared numerator and apply the Engel form:
$$\sum\frac{a}{b+2c} = \sum\frac{a^2}{a(b+2c)} \ \ge\ \frac{(a+b+c)^2}{a(b+2c)+b(c+2a)+c(a+2b)}.$$

The denominator expands to
$$ab+2ac+bc+2ab+ca+2bc = 3ab+3bc+3ca = 3(ab+bc+ca).$$

So the sum is at least
$$\frac{(a+b+c)^2}{3(ab+bc+ca)}.$$

Since $(a+b+c)^2 \ge 3(ab+bc+ca)$ — equivalent to $\frac12\sum(a-b)^2\ge0$ — this quantity is $\ge 1$.

Equality requires $a=b=c$ ✓ (and indeed each term is then $\frac13$). ∎
[/sol]

### P9 | Hard | Standard
Let $a,b,c>0$ with $a+b+c=3$. Prove $\;a^2+b^2+c^2+ab+bc+ca\ \ge\ 6$.
[hint]
Express everything in terms of $s = a+b+c$ and $q = ab+bc+ca$, then use $q \le \frac{s^2}{3}$ — but note which direction you need.
[/hint]
[sol]
Let $s = a+b+c=3$ and $q = ab+bc+ca$. Then
$$a^2+b^2+c^2 = s^2-2q = 9-2q,$$
so the left side equals
$$(9-2q)+q = 9 - q.$$

We need $9 - q \ge 6$, i.e. $q \le 3$.

By the standard inequality $(a+b+c)^2\ge3(ab+bc+ca)$,
$$9 = s^2 \ge 3q \implies q \le 3. \;✓$$

Hence $a^2+b^2+c^2+ab+bc+ca = 9-q \ge 6$, with equality iff $q=3$, i.e. $a=b=c=1$. ∎
[/sol]

### P10 | Hard | Classic
Let $x, y, z$ be positive reals. Prove that
$$\frac xy+\frac yz+\frac zx \;\ge\; \frac{x+1}{y+1}+\frac{y+1}{z+1}+\frac{z+1}{x+1}.$$
[hint]
Compute $\dfrac uv - \dfrac{u+1}{v+1}$ — it simplifies beautifully. Summing the three differences gives an expression of the form $\sum x\,g(y) - \sum x\,g(x)$ for a decreasing function $g$. Which inequality compares those two sums?
[/hint]
[sol]
**Step 1: simplify each difference.** For positive $u,v$,
$$\frac uv - \frac{u+1}{v+1} = \frac{u(v+1)-v(u+1)}{v(v+1)} = \frac{uv+u-uv-v}{v(v+1)} = \frac{u-v}{v(v+1)}.$$

So, writing
$$g(t) = \frac{1}{t(t+1)} \qquad (t>0),$$
the difference between the two sides is
$$D \;=\; (x-y)\,g(y) \;+\; (y-z)\,g(z) \;+\; (z-x)\,g(x),$$
and we must show $D \ge 0$.

**Step 2: regroup.** Expanding and collecting,
$$D = x\,g(y) - y\,g(y) + y\,g(z) - z\,g(z) + z\,g(x) - x\,g(x),$$
that is,
$$D \;=\; \underbrace{\Big[x\,g(y)+y\,g(z)+z\,g(x)\Big]}_{\text{cyclically shifted pairing}} \;-\; \underbrace{\Big[x\,g(x)+y\,g(y)+z\,g(z)\Big]}_{\text{aligned pairing}}.$$

**Step 3: apply the rearrangement inequality.** The function $g(t)=\frac{1}{t(t+1)}$ is **strictly decreasing** on $(0,\infty)$, since both $t$ and $t+1$ increase. Therefore the sequences
$$(x,\ y,\ z) \qquad\text{and}\qquad \big(g(x),\ g(y),\ g(z)\big)$$
are **oppositely ordered**: the largest of $x,y,z$ is paired with the smallest of the $g$-values, and so on.

The rearrangement inequality says that among all pairings of two sequences, the **oppositely ordered** pairing gives the **smallest** possible sum. The aligned pairing $x g(x) + y g(y) + z g(z)$ is precisely that oppositely ordered one, so every other pairing — in particular the cyclic shift $x g(y)+y g(z)+z g(x)$ — gives a sum at least as large:
$$x\,g(y)+y\,g(z)+z\,g(x) \;\ge\; x\,g(x)+y\,g(y)+z\,g(z).$$

Hence $D \ge 0$, which is exactly the required inequality. ∎

**Equality.** Rearrangement is strict unless two of the values coincide in the right way; chasing it through, equality holds precisely when $x=y=z$. (Then both sides equal 3.)

**Sanity check.** Take $x=4, y=2, z=1$. Left side: $\frac42+\frac21+\frac14 = 2+2+0.25 = 4.25$. Right side: $\frac53+\frac32+\frac25 \approx 1.667+1.5+0.4 = 3.567$. Indeed $4.25 \ge 3.567$ ✓.

**Why this works in general.** Adding 1 to numerator and denominator pulls any ratio **towards 1**. So each term on the right is closer to 1 than the corresponding term on the left, and the sum of three ratios whose product is 1 is minimised when they are all equal to 1. The rearrangement argument is the rigorous version of that intuition.
[/sol]
