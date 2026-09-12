---
id: ineq-04-strategy
title: Strategy — normalisation, SOS and substitution
level: Advanced
hours: 3
blurb: How to decide what to do. Homogenising, normalising, Ravi and Schur, the SOS method, and when to stop being clever and just expand.
tags: SOS, normalisation, Schur, Ravi, strategy
link: Yufei Zhao — Inequalities :: https://yufeizhao.com/olympiad/wc08/ineq.pdf
video: Search: SOS method inequality olympiad :: https://www.youtube.com/results?search_query=SOS+method+inequalities+olympiad+schur
---

## The decision procedure

When you meet an inequality, run through this list **in order**. It is faster than trying to be inspired.

**1. Find the equality case.** Set $a=b=c$ (or whatever the symmetry suggests) and see whether both sides agree. Sometimes equality is at a boundary ($c=0$) or at an asymmetric point — that changes everything about which tool will work.

**2. Check homogeneity.** If every term has the same degree, you may **normalise**: assume $a+b+c=1$, or $abc=1$, or $a^2+b^2+c^2=3$ — whichever makes the algebra cleanest. If the inequality is *not* homogeneous, use the constraint to **homogenise** it first, then normalise differently if convenient.

**3. Try the standard tools in order of cheapness.**
- AM–GM (product vs sum)
- Cauchy–Schwarz / Engel (sums of fractions)
- Power mean (mixed degrees)
- Jensen (sum of $f(a_i)$ with a constraint on $\sum a_i$)
- Rearrangement / Chebyshev (ordered sequences, cyclic sums)

**4. Substitute to simplify the constraint.**
- Triangle sides → **Ravi**: $a=y+z$, $b=z+x$, $c=x+y$ with $x,y,z>0$.
- $abc=1$ → $a = \frac xy$, $b=\frac yz$, $c=\frac zx$.
- $a+b+c=abc$ → $a=\tan A$ etc. with $A+B+C=\pi$.
- $\frac1a+\frac1b+\frac1c=1$ → replace by reciprocals.

**5. SOS.** Write the difference as $\sum S_a(b-c)^2$ and show the coefficients work out.

**6. Expand.** If all else fails and the degree is small, clear denominators and compare coefficients. Ugly, but complete — and a complete ugly solution scores 17.

## Normalisation, carefully

A homogeneous inequality of degree $d$ satisfies $f(ta,tb,tc) = t^df(a,b,c)$. Scaling all variables therefore does not change its truth, so you may impose **one** normalising condition.

> **Write it explicitly:** "The inequality is homogeneous of degree 3, so we may scale $(a,b,c)$ so that $a+b+c=1$."

Do **not** normalise a non-homogeneous inequality — that is simply wrong. Homogenise first: replace a stray constant $k$ by $k\left(\frac{a+b+c}{s}\right)^m$ using the given constraint $a+b+c=s$.

## The SOS method

Many symmetric inequalities can be written as
$$S_a(b-c)^2 + S_b(c-a)^2 + S_c(a-b)^2 \ \ge\ 0$$
where $S_a, S_b, S_c$ are expressions in $a,b,c$.

- If all three $S$'s are $\ge0$, done immediately.
- If one is negative, you need more work: WLOG $a\ge b\ge c$ and use $(a-c)^2 \ge (a-b)^2 + (b-c)^2$ or similar comparisons to absorb the negative term.

**How to find the SOS form.** Take the difference of the two sides, and use the identities
$$a^2+b^2+c^2 - ab-bc-ca = \tfrac12\sum(a-b)^2,$$
$$a^3+b^3+c^3-3abc = (a+b+c)\cdot\tfrac12\sum(a-b)^2.$$

## Schur's inequality

> For $a,b,c\ge0$ and $t>0$,
> $$a^t(a-b)(a-c)+b^t(b-a)(b-c)+c^t(c-a)(c-b)\ \ge\ 0.$$

The case $t=1$, expanded, is the one you will use:
$$a^3+b^3+c^3+abc\cdot 3 \;\ge\; ab(a+b)+bc(b+c)+ca(c+a)$$
more usefully written, with $p=a+b+c$, $q=ab+bc+ca$, $r=abc$:
$$p^3+9r \ \ge\ 4pq.$$

Schur is the standard tool when AM–GM and Cauchy both fail and equality is at $a=b=c$ **and** at $(a,a,0)$-type boundary points.

*Proof of Schur for $t=1$.* WLOG $a\ge b\ge c$. Then
$$a(a-b)(a-c)+b(b-a)(b-c) = (a-b)\big[a(a-c)-b(b-c)\big]\ \ge\ 0$$
since $a-b\ge0$ and $a(a-c)\ge b(b-c)$; and $c(c-a)(c-b) = c(a-c)(b-c)\ge0$. ∎

## Common traps

- Normalising a non-homogeneous inequality.
- Adding inequalities with different equality cases and claiming sharpness.
- Assuming WLOG $a\ge b\ge c$ in a **cyclic** (not symmetric) inequality.
- Forgetting the boundary: some inequalities have equality at $c=0$, where AM–GM-style tools with equality at $a=b=c$ can never be tight.

## Problems

### P1 | Warmup | Standard
Prove $a^2+b^2+c^2\ge ab+bc+ca$ for all reals, and identify the SOS form.
[hint]
Double both sides and group into squares.
[/hint]
[sol]
Multiply by 2 and rearrange:
$$2\left(a^2+b^2+c^2\right)-2(ab+bc+ca) = \left(a^2-2ab+b^2\right)+\left(b^2-2bc+c^2\right)+\left(c^2-2ca+a^2\right)$$
$$= (a-b)^2+(b-c)^2+(c-a)^2 \ \ge\ 0.$$

So $a^2+b^2+c^2\ge ab+bc+ca$, with the SOS form
$$a^2+b^2+c^2-ab-bc-ca = \tfrac12\left[(a-b)^2+(b-c)^2+(c-a)^2\right].$$
Equality iff $a=b=c$. ∎
[/sol]

### P2 | Warmup | Standard
For positive reals with $a+b+c=3$, prove $ab+bc+ca\le3$. Then state the homogeneous version.
[hint]
Use $(a+b+c)^2\ge3(ab+bc+ca)$.
[/hint]
[sol]
From P1, $a^2+b^2+c^2\ge ab+bc+ca$. Adding $2(ab+bc+ca)$ to both sides,
$$(a+b+c)^2 \ \ge\ 3(ab+bc+ca).$$
With $a+b+c=3$: $9 \ge 3(ab+bc+ca)$, so $ab+bc+ca\le3$, equality iff $a=b=c=1$. ∎

**Homogeneous version:** $(a+b+c)^2 \ge 3(ab+bc+ca)$ — degree 2 on both sides, valid for all reals with no constraint. The constrained version is the special case $a+b+c=3$.
[/sol]

### P3 | Easy | Standard
Let $a,b,c$ be sides of a triangle. Prove $a^2+b^2+c^2 < 2(ab+bc+ca)$.
[hint]
Ravi substitution, or use $|a-b|<c$ three times.
[/hint]
[sol]
**Via the triangle inequality.** For each pair, $|a-b|<c$, so squaring (both sides non-negative),
$$(a-b)^2 < c^2, \qquad (b-c)^2<a^2, \qquad (c-a)^2<b^2.$$
Adding,
$$2\left(a^2+b^2+c^2\right)-2(ab+bc+ca) \ <\ a^2+b^2+c^2,$$
hence
$$a^2+b^2+c^2 \ <\ 2(ab+bc+ca). \;∎$$

**Via Ravi.** With $a=y+z$, $b=z+x$, $c=x+y$ ($x,y,z>0$), both sides expand and the inequality reduces to $4(xy+yz+zx)>0$ ✓.
[/sol]

### P4 | Easy | Standard
For positive reals with $abc=1$, prove $a+b+c\ge3$. Then prove $a+b+c \ge ab+bc+ca$ is **false** — find a counterexample.
[hint]
The first is AM–GM. For the second, try making one variable large.
[/hint]
[sol]
**First.** By AM–GM,
$$\frac{a+b+c}{3}\ \ge\ \sqrt[3]{abc} = 1 \implies a+b+c \ge 3,$$
with equality iff $a=b=c=1$. ∎

**Second: counterexample.** Take $a = b = 2$, $c = \frac14$ (so $abc = 1$ ✓). Then
$$a+b+c = 4.25, \qquad ab+bc+ca = 4 + \tfrac12+\tfrac12 = 5.$$
Here $ab+bc+ca > a+b+c$, so the claimed inequality fails.

*(Both directions fail in general: $a=4,b=1,c=\frac14$ gives $a+b+c = 5.25$ and $ab+bc+ca = 4+0.25+1 = 5.25$ — equal. So $a+b+c$ and $ab+bc+ca$ are genuinely incomparable under $abc=1$.)* ∎
[/sol]

### P5 | Medium | Standard
Prove that for positive reals $a,b,c$,
$$2\left(\frac ab+\frac bc+\frac ca\right)\ \ge\ \frac{a+b}{b+c}+\frac{b+c}{c+a}+\frac{c+a}{a+b}.$$
[hint]
Enlarging a positive denominator makes a fraction smaller: $\frac ab \ge \frac{a}{b+c}$. Use that twice per term to bound $\frac{a+b}{b+c}$ from above by $\frac ab + \frac bc$.
[/hint]
[sol]
**Step 1: the key one-line bound.** For positive $a,b,c$, since $b < b+c$ and $c<b+c$,
$$\frac ab \ \ge\ \frac{a}{b+c}, \qquad \frac bc\ \ge\ \frac{b}{b+c}.$$
Adding,
$$\frac ab+\frac bc \ \ge\ \frac{a}{b+c}+\frac{b}{b+c} = \frac{a+b}{b+c}. \tag{1}$$

**Step 2: the cyclic versions.** Exactly the same argument gives
$$\frac bc+\frac ca \ \ge\ \frac{b+c}{c+a}, \qquad \frac ca+\frac ab\ \ge\ \frac{c+a}{a+b}.$$

**Step 3: add.** Each of $\frac ab$, $\frac bc$, $\frac ca$ appears in exactly two of the three left-hand sides, so summing gives
$$2\left(\frac ab+\frac bc+\frac ca\right)\ \ge\ \frac{a+b}{b+c}+\frac{b+c}{c+a}+\frac{c+a}{a+b}. \;∎$$

Equality requires $c = 0$ in (1) and its analogues, which is excluded; so the inequality is strict for positive $a,b,c$.

**Two lessons.** First, *enlarging a denominator* is a cheap and often decisive bound. Second — and more important — **test before you prove**: a natural first attempt here is to bound the right side above by 3 (since each side "looks like" it should be at least 3). That is false: $a=b=1$, $c=4$ makes the right side $\frac25+\frac52+1 = 3.9 > 3$. Thirty seconds of arithmetic kills the wrong route before you waste twenty minutes on it.
[/sol]

### P6 | Medium | Standard
Prove Schur's inequality for $t=1$: for $a,b,c\ge0$,
$$a(a-b)(a-c)+b(b-a)(b-c)+c(c-a)(c-b)\ \ge\ 0.$$
[hint]
WLOG $a\ge b\ge c$ (the expression is symmetric). Group the first two terms.
[/hint]
[sol]
The expression is symmetric in $a,b,c$, so we may assume **WLOG** $a\ge b\ge c\ge0$.

**Group the first two terms.** Both contain the factor $(a-b)$ up to sign:
$$a(a-b)(a-c)+b(b-a)(b-c) = (a-b)\Big[a(a-c) - b(b-c)\Big].$$

Now $a \ge b \ge 0$ and $a-c\ge b-c\ge0$, so $a(a-c)\ge b(b-c)$, making the bracket non-negative. Since $a-b\ge0$, the whole group is $\ge0$. ✓

**The third term.** $c(c-a)(c-b) = c\,(a-c)(b-c)$, because $(c-a)(c-b) = (a-c)(b-c)$. With $c\ge0$, $a-c\ge0$, $b-c\ge0$, this is $\ge0$. ✓

Adding, the total is $\ge0$. ∎

**Equality** holds iff $a=b=c$, or two are equal and the third is 0 (e.g. $a=b$, $c=0$). That second family is exactly why Schur succeeds where AM–GM fails: it is tight at a boundary point too.
[/sol]

### P7 | Medium | Standard
Use Schur to prove: for $a,b,c\ge0$ with $a+b+c=1$,
$$a^2+b^2+c^2+9abc \ \ge\ 4(ab+bc+ca) - \ldots$$
Instead prove the standard consequence: $\;1 + 9abc \ge 4(ab+bc+ca)$.
[hint]
Schur with $t=1$ in $pqr$ notation says $p^3+9r\ge4pq$. Substitute $p=1$.
[/hint]
[sol]
Write $p = a+b+c$, $q = ab+bc+ca$, $r = abc$.

**Schur in $pqr$ form.** Expanding Schur's inequality for $t=1$ gives
$$a^3+b^3+c^3+abc\cdot3 \ \ge\ ab(a+b)+bc(b+c)+ca(c+a),$$
which in terms of $p,q,r$ is the standard identity
$$p^3 + 9r \ \ge\ 4pq.$$

*(Derivation: $a^3+b^3+c^3 = p^3-3pq+3r$ and $\sum ab(a+b) = pq - 3r$; substituting turns Schur into $p^3-3pq+3r+3r \ge pq-3r$, i.e. $p^3+9r\ge4pq$.)*

**Apply the constraint.** With $p = a+b+c = 1$:
$$1 + 9abc \ \ge\ 4(ab+bc+ca). \;∎$$

Equality at $a=b=c=\frac13$ (giving $1+\frac13 = \frac43$ and $4\cdot\frac13 = \frac43$ ✓) and at boundary points such as $a=b=\frac12$, $c=0$ (giving $1+0=1$ and $4\cdot\frac14 = 1$ ✓).

**Why this matters.** That second equality case — on the boundary — is the signature of Schur. If a problem is tight both at $a=b=c$ *and* at $(t,t,0)$, AM–GM and Cauchy alone will never be sharp enough, and Schur is almost certainly the intended tool.
[/sol]

### P8 | Medium | Standard
Prove that for positive reals $a,b,c$,
$$\frac{a}{b+c}+\frac{b}{c+a}+\frac{c}{a+b}\ \ge\ \frac32$$
using the SOS method (rather than AM–HM or Cauchy).
[hint]
Subtract $\frac32$ and write each term as $\frac{a}{b+c}-\frac12 = \frac{2a-b-c}{2(b+c)}$, then group $2a-b-c = (a-b)+(a-c)$.
[/hint]
[sol]
Subtract $\frac12$ from each term:
$$\sum\frac{a}{b+c} - \frac32 = \sum\left(\frac{a}{b+c}-\frac12\right) = \sum\frac{2a-b-c}{2(b+c)}.$$

Write $2a-b-c = (a-b)+(a-c)$, so
$$\sum\frac{2a-b-c}{2(b+c)} = \frac12\sum\left[\frac{a-b}{b+c}+\frac{a-c}{b+c}\right].$$

Collect the terms containing $(a-b)$: they come from the $a$-term (as $\frac{a-b}{b+c}$) and the $b$-term (as $\frac{b-a}{c+a}$). Their total is
$$\frac{a-b}{b+c}+\frac{b-a}{c+a} = (a-b)\left[\frac{1}{b+c}-\frac{1}{c+a}\right] = (a-b)\cdot\frac{(c+a)-(b+c)}{(b+c)(c+a)} = \frac{(a-b)^2}{(b+c)(c+a)}.$$

Doing the same for the other two pairs, the whole expression becomes
$$\sum\frac{a}{b+c}-\frac32 = \frac12\left[\frac{(a-b)^2}{(b+c)(c+a)}+\frac{(b-c)^2}{(c+a)(a+b)}+\frac{(c-a)^2}{(a+b)(b+c)}\right].$$

Every term on the right is non-negative (squares over positive denominators), so the left side is $\ge0$. ∎

Equality iff $a=b=c$.

**Why SOS is worth the effort here.** The SOS form does more than prove the inequality — it shows *exactly how much slack there is*, term by term. That is often what a harder follow-up problem asks for.
[/sol]

### P9 | Hard | Classic
Let $a,b,c$ be positive reals with $a+b+c=1$. Prove that
$$\frac{ab}{c+1}+\frac{bc}{a+1}+\frac{ca}{b+1}\ \le\ \frac14.$$
[hint]
Use the constraint to rewrite $c+1 = (a+c)+(b+c)$. Then apply the two-term AM–HM inequality $\frac{1}{x+y}\le\frac14\left(\frac1x+\frac1y\right)$ to each denominator, and watch the sum collapse.
[/hint]
[sol]
**Step 1: rewrite the denominators.** Since $a+b+c=1$,
$$c+1 = c + (a+b+c) = (a+c)+(b+c),$$
and similarly $a+1 = (a+b)+(a+c)$, $\;b+1 = (b+c)+(a+b)$.

**Step 2: the AM–HM bound.** For positive $x,y$, AM–HM gives $\dfrac{x+y}{2}\ge\dfrac{2}{\frac1x+\frac1y}$, i.e.
$$\frac{1}{x+y} \ \le\ \frac14\left(\frac1x+\frac1y\right).$$

Applying this to each denominator:
$$\frac{ab}{c+1} \le \frac{ab}{4}\left(\frac{1}{a+c}+\frac1{b+c}\right),$$
$$\frac{bc}{a+1} \le \frac{bc}{4}\left(\frac{1}{a+b}+\frac1{a+c}\right),$$
$$\frac{ca}{b+1} \le \frac{ca}{4}\left(\frac{1}{b+c}+\frac1{a+b}\right).$$

**Step 3: add and collect.** Group the right-hand sides by denominator:

- terms with $\dfrac{1}{a+c}$: $\;\dfrac{ab}{4}+\dfrac{bc}{4} = \dfrac{b(a+c)}{4}$, contributing $\dfrac{b(a+c)}{4(a+c)} = \dfrac b4$;
- terms with $\dfrac{1}{b+c}$: $\;\dfrac{ab}{4}+\dfrac{ca}{4} = \dfrac{a(b+c)}{4}$, contributing $\dfrac a4$;
- terms with $\dfrac{1}{a+b}$: $\;\dfrac{bc}{4}+\dfrac{ca}{4} = \dfrac{c(a+b)}{4}$, contributing $\dfrac c4$.

Therefore
$$\frac{ab}{c+1}+\frac{bc}{a+1}+\frac{ca}{b+1}\ \le\ \frac{a+b+c}{4} = \frac14. \;∎$$

**Equality** requires $a+c = b+c$, $a+b=a+c$ and $b+c=a+b$ in the three AM–HM steps, i.e. $a=b=c=\frac13$. Check: each term is $\frac{1/9}{4/3} = \frac1{12}$, and the sum is $\frac14$ ✓.

**The technique.** Whenever a constraint lets you split a denominator as $x+y$, the bound $\frac{1}{x+y}\le\frac14\left(\frac1x+\frac1y\right)$ turns an intractable cyclic sum into one that telescopes. This is one of the highest-yield tricks in the whole topic.
[/sol]

### P10 | Hard | Standard
Let $a,b,c>0$ with $a+b+c=3$. Prove that
$$a^2+b^2+c^2+abc\ \ge\ 4.$$
[hint]
Use $pqr$ notation with $p=3$. Schur gives $p^3+9r\ge4pq$, i.e. $27+9r\ge12q$. Combine with $a^2+b^2+c^2 = p^2-2q = 9-2q$.
[/hint]
[sol]
Let $p = a+b+c = 3$, $q = ab+bc+ca$, $r = abc$. Then
$$a^2+b^2+c^2 = p^2-2q = 9-2q,$$
so the claim $a^2+b^2+c^2+abc\ge4$ becomes
$$9-2q+r \ \ge\ 4 \qquad\Longleftrightarrow\qquad r \ \ge\ 2q-5. \tag{$\ast$}$$

**Case 1: $q \le \frac52$.** Then $2q-5 \le 0 < r$, so $(\ast)$ holds immediately. ✓

**Case 2: $q > \frac52$.** Apply **Schur** ($p^3+9r\ge4pq$) with $p=3$:
$$27+9r \ \ge\ 12q \implies r \ \ge\ \frac{12q-27}{9} = \frac{4q-9}{3}.$$

So it suffices to show
$$\frac{4q-9}{3}\ \ge\ 2q-5 \iff 4q-9 \ \ge\ 6q-15 \iff 6 \ \ge\ 2q \iff q \le 3.$$

And $q \le 3$ always holds here, since $p^2 \ge 3q$ gives $9 \ge 3q$. ✓

So in both cases $(\ast)$ holds, proving
$$a^2+b^2+c^2+abc\ \ge\ 4. \;∎$$

**Equality.** At $a=b=c=1$: $3+1 = 4$ ✓. Also at the boundary $a=b=\frac32$, $c=0$: $\frac94+\frac94+0+0 = 4.5 > 4$, so that is not tight; equality is only at $a=b=c=1$.

**Why $pqr$ is worth learning.** Symmetric inequalities in three variables are functions of $p, q, r$ alone. Translating into $pqr$ turns a three-variable problem into a two-variable one (after normalising $p$), and Schur supplies the missing inequality relating $r$ to $p$ and $q$. This combination handles a large fraction of RMO- and INMO-level symmetric inequalities.
[/sol]
