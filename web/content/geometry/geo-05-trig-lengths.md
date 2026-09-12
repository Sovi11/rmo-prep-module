---
id: geo-05-trig-lengths
title: Trigonometry and lengths
level: Core
hours: 3
blurb: Sine and cosine rules, area formulas, Stewart and the median formula — the computational fallback that finishes a problem when synthetic geometry stalls.
tags: sine rule, cosine rule, area, Stewart, medians
link: Yufei Zhao — Lemmas in Euclidean geometry :: https://yufeizhao.com/olympiad/geolemmas.pdf
link: MOTP — Geometry :: https://jpsaha.github.io/MOTP/geo/
video: Search: sine rule cosine rule olympiad geometry :: https://www.youtube.com/results?search_query=law+of+sines+cosines+stewart+theorem+olympiad
---

## Why this chapter exists

In the exam, a complete computational solution scores 17 and an elegant synthetic idea you cannot finish scores 4. When you have spent twenty minutes and the angles are not closing, **switch to lengths**. This chapter is the toolkit for doing that quickly and without errors.

## The two rules

> **Extended law of sines.**
> $$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R.$$

The "$=2R$" part is the half people forget, and it is the useful half — it converts any side into a chord length and any angle into a ratio.

> **Law of cosines.**
> $$a^2 = b^2+c^2-2bc\cos A.$$

Use the sine rule when you know **angles and one side**; the cosine rule when you know **two sides and the included angle**, or **all three sides** and want an angle.

## Area formulas

$$K = \tfrac12 bc\sin A = \tfrac12 ab\sin C = \frac{abc}{4R} = rs = \sqrt{s(s-a)(s-b)(s-c)}.$$

Also $K = \frac12 \times \text{base}\times\text{height}$, and for a quadrilateral with diagonals $p,q$ crossing at angle $\theta$: $K = \frac12 pq\sin\theta$.

**Brahmagupta** (cyclic quadrilateral with sides $a,b,c,d$ and semiperimeter $s$):
$$K = \sqrt{(s-a)(s-b)(s-c)(s-d)}.$$

## Stewart's theorem and the median

> **Stewart.** If $D$ lies on $BC$ with $BD = m$, $DC = n$, $AD = d$, and $BC = a = m+n$, then
> $$b^2m + c^2n = a\left(d^2+mn\right).$$
> *(Mnemonic: "a man and his dad put a bomb in the sink" — $man + dad = bmb + cnc$.)*

**Median length.** Taking $m=n=\frac a2$:
$$m_a^2 = \frac{2b^2+2c^2-a^2}{4}.$$

**Angle bisector length.** For the internal bisector from $A$:
$$t_a^2 = bc - \frac{a^2bc}{(b+c)^2} = bc\left[1 - \left(\frac{a}{b+c}\right)^2\right].$$

**Altitude:** $h_a = \frac{2K}{a} = b\sin C = c\sin B$.

## Trigonometric identities you will need

$$\sin(A+B) = \sin A\cos B+\cos A\sin B, \qquad \cos(A+B) = \cos A\cos B - \sin A\sin B$$
$$\sin A + \sin B = 2\sin\frac{A+B}{2}\cos\frac{A-B}{2}, \qquad \cos A+\cos B = 2\cos\frac{A+B}2\cos\frac{A-B}2$$
$$\cos A - \cos B = -2\sin\frac{A+B}{2}\sin\frac{A-B}{2}$$

**In a triangle** ($A+B+C = 180^\circ$), these are constantly useful:
$$\sin(A+B) = \sin C, \qquad \cos(A+B) = -\cos C, \qquad \tan A+\tan B+\tan C = \tan A\tan B\tan C.$$

## When to compute and when not to

| Situation | Go computational? |
|---|---|
| the problem asks for a specific angle or ratio | **yes** — the answer is a number |
| lots of lengths given numerically | **yes** |
| many circles, tangencies, concyclicity | no — stay synthetic |
| "prove three lines concur" | no — Ceva or radical axes |
| you are 20 minutes in with no progress | **yes** — switch |

## Common traps

- Using the law of cosines and forgetting the sign when the angle is obtuse ($\cos A<0$).
- Applying the sine rule and forgetting that $\sin\theta = \sin(180^\circ-\theta)$, so an angle may be ambiguous.
- Heron with a wrong semiperimeter.
- Doing a long computation without checking it on a concrete triangle first. Test with $3,4,5$.

## Problems

### P1 | Warmup | Standard
A triangle has $b=7$, $c=8$ and $\angle A = 60^\circ$. Find $a$ and the area.
[hint]
Cosine rule for $a$; $K = \frac12 bc\sin A$ for the area.
[/hint]
[sol]
**Side $a$.**
$$a^2 = b^2+c^2-2bc\cos A = 49+64-2\cdot7\cdot8\cdot\tfrac12 = 113 - 56 = 57,$$
so $a = \sqrt{57}$.

**Area.**
$$K = \tfrac12 bc\sin A = \tfrac12\cdot7\cdot8\cdot\frac{\sqrt3}{2} = 14\sqrt3. \;∎$$
[/sol]

### P2 | Warmup | Standard
In a triangle, $a = 10$ and $\angle A = 30^\circ$. Find the circumradius.
[hint]
The extended law of sines.
[/hint]
[sol]
$$2R = \frac{a}{\sin A} = \frac{10}{\sin30^\circ} = \frac{10}{1/2} = 20 \implies R = 10. \;∎$$
[/sol]

### P3 | Easy | Standard
Derive the median formula $m_a^2 = \frac{2b^2+2c^2-a^2}{4}$ from the cosine rule.
[hint]
Apply the cosine rule in triangles $ABM$ and $ACM$ where $M$ is the midpoint of $BC$, and add — the cosine terms cancel.
[/hint]
[sol]
Let $M$ be the midpoint of $BC$, so $BM = MC = \frac a2$, and let $\theta = \angle AMB$, so $\angle AMC = 180^\circ-\theta$.

**Cosine rule in $\triangle ABM$:**
$$c^2 = m_a^2 + \frac{a^2}{4} - 2\,m_a\cdot\frac a2\cos\theta.$$

**Cosine rule in $\triangle ACM$:** (using $\cos(180^\circ-\theta) = -\cos\theta$)
$$b^2 = m_a^2+\frac{a^2}{4}+2\,m_a\cdot\frac a2\cos\theta.$$

**Add:** the cosine terms cancel,
$$b^2+c^2 = 2m_a^2+\frac{a^2}{2}.$$

Solving,
$$m_a^2 = \frac{2b^2+2c^2-a^2}{4}. \;∎$$

**Check (equilateral, side $s$):** $m^2 = \frac{2s^2+2s^2-s^2}{4} = \frac{3s^2}{4}$, so $m = \frac{\sqrt3}{2}s$ ✓.
[/sol]

### P4 | Easy | Standard
Prove that in any triangle, $a = b\cos C + c\cos B$ **(the projection formula)**.
[hint]
Drop the altitude from $A$ to $BC$ and add the two pieces.
[/hint]
[sol]
Let $D$ be the foot of the altitude from $A$ to line $BC$.

In right triangle $ABD$: $BD = c\cos B$.
In right triangle $ACD$: $DC = b\cos C$.

If the triangle is acute, $D$ lies between $B$ and $C$, so
$$a = BC = BD + DC = c\cos B + b\cos C. \;∎$$

**If $\angle B$ is obtuse**, $D$ lies outside segment $BC$ on the far side of $B$, and $\cos B < 0$; then $BD = -c\cos B$ as a length, and $a = DC - DB = b\cos C - (-c\cos B) = b\cos C+c\cos B$ — the same formula, which is why it is stated with cosines rather than lengths. ∎

*(Alternative one-line proof: substitute $a = 2R\sin A$, $b = 2R\sin B$, $c=2R\sin C$ and use $\sin A = \sin(B+C) = \sin B\cos C+\cos B\sin C$.)*
[/sol]

### P5 | Medium | Standard
Prove Stewart's theorem: with $D$ on $BC$, $BD=m$, $DC=n$, $AD=d$, $BC = a = m+n$,
$$b^2m+c^2n = a\left(d^2+mn\right).$$
[hint]
Apply the cosine rule in triangles $ABD$ and $ACD$ at the angle $\angle ADB$, and eliminate the cosine.
[/hint]
[sol]
Let $\theta = \angle ADB$, so $\angle ADC = 180^\circ-\theta$ and $\cos\angle ADC = -\cos\theta$.

**Cosine rule in $\triangle ABD$:**
$$c^2 = d^2+m^2-2dm\cos\theta. \tag{1}$$

**Cosine rule in $\triangle ACD$:**
$$b^2 = d^2+n^2+2dn\cos\theta. \tag{2}$$

Multiply (1) by $n$ and (2) by $m$, then add — the cosine terms cancel:
$$c^2n+b^2m = (d^2+m^2)n + (d^2+n^2)m = d^2(m+n) + mn(m+n).$$

Since $m+n = a$,
$$b^2m+c^2n = a\left(d^2+mn\right). \;∎$$

**Check (median, $m=n=\frac a2$):** $\frac a2(b^2+c^2) = a\left(d^2+\frac{a^2}{4}\right)$, giving $d^2 = \frac{2b^2+2c^2-a^2}{4}$ ✓.
[/sol]

### P6 | Medium | Standard
In triangle $ABC$, prove that $\;\tan A+\tan B+\tan C = \tan A\tan B\tan C$ (assuming no angle is $90^\circ$).
[hint]
Use $C = 180^\circ - (A+B)$ and the addition formula for $\tan$.
[/hint]
[sol]
Since $A+B+C = 180^\circ$, we have $A+B = 180^\circ - C$, so
$$\tan(A+B) = \tan(180^\circ - C) = -\tan C.$$

By the addition formula,
$$\tan(A+B) = \frac{\tan A+\tan B}{1-\tan A\tan B}.$$

Equating,
$$\frac{\tan A+\tan B}{1-\tan A\tan B} = -\tan C.$$

Cross-multiplying (valid since $\tan A\tan B\ne1$, which would force $A+B=90^\circ$ and $C=90^\circ$):
$$\tan A+\tan B = -\tan C + \tan A\tan B\tan C.$$

Rearranging,
$$\tan A+\tan B+\tan C = \tan A\tan B\tan C. \;∎$$
[/sol]

### P7 | Medium | CRMO 2015 P5
Let $ABC$ be a right triangle with $\angle B = 90^\circ$. Let $E$ and $F$ be the midpoints of $AB$ and $AC$. Suppose the incentre $I$ of $ABC$ lies on the circumcircle of triangle $AEF$. Find the ratio $BC/AB$.
[hint]
$EF \parallel BC$ and $AE\perp BC$, so $\angle AEF = 90^\circ$ and $AF$ is a **diameter** of the circumcircle of $AEF$. So the condition is simply $\angle AIF = 90^\circ$. Now put $B$ at the origin and compute.
[/hint]
[sol]
**Coordinates.** Put
$$B = (0,0), \qquad A = (0,c), \qquad C = (a,0),$$
where $c = AB$ and $a = BC$, so $b = AC = \sqrt{a^2+c^2}$.

Then $E = \left(0,\tfrac c2\right)$ and $F = \left(\tfrac a2,\tfrac c2\right)$.

**Reformulate the condition.** $EF$ is horizontal and $AE$ is vertical, so $\angle AEF = 90^\circ$. Hence $AF$ is a **diameter** of the circumcircle of $\triangle AEF$, and
$$I \text{ lies on that circle} \iff \angle AIF = 90^\circ \iff \vec{IA}\cdot\vec{IF} = 0.$$

**The incentre.** For a right angle at $B$, the inradius is $r = \dfrac{a+c-b}{2}$ and $I = (r,r)$.

**Expand the dot product.**
$$\vec{IA} = (-r,\ c-r), \qquad \vec{IF} = \left(\tfrac a2 - r,\ \tfrac c2 - r\right),$$
$$\vec{IA}\cdot\vec{IF} = -r\left(\tfrac a2-r\right)+(c-r)\left(\tfrac c2-r\right) = 2r^2 - \tfrac{ar}{2}-\tfrac{3cr}{2}+\tfrac{c^2}{2}.$$

Setting this to zero and multiplying by 2:
$$4r^2 - r(a+3c) + c^2 = 0. \tag{$\ast$}$$

**Eliminate $b$.** Put $w = 2r = a+c-b$. Squaring $b = a+c-w$ and using $b^2 = a^2+c^2$:
$$(a+c-w)^2 = a^2+c^2 \implies w^2 - 2w(a+c) + 2ac = 0. \tag{1}$$

Rewriting $(\ast)$ in terms of $w$ (so $4r^2 = w^2$ and $r = \frac w2$) and multiplying by 2:
$$2w^2 - w(a+3c) + 2c^2 = 0. \tag{2}$$

**Solve.** From (1), $w^2 = 2w(a+c)-2ac$. Substituting into (2):
$$2\big[2w(a+c)-2ac\big] - w(a+3c)+2c^2 = 0,$$
$$w\big[4a+4c-a-3c\big] = 4ac-2c^2 \implies w(3a+c) = 2c(2a-c),$$
$$w = \frac{2c(2a-c)}{3a+c}.$$

Substituting this back into (1) and clearing $(3a+c)^2$:
$$4c^2(2a-c)^2 - 4c(2a-c)(a+c)(3a+c) + 2ac(3a+c)^2 = 0.$$

Divide by $2c>0$, then set $t = \dfrac ac$ and divide by $c^3$:
$$2(2t-1)^2 - 2(2t-1)(t+1)(3t+1) + t(3t+1)^2 = 0.$$

Expanding each term:
$$\big(8t^2-8t+2\big) - \big(12t^3+10t^2-4t-2\big) + \big(9t^3+6t^2+t\big) = -3t^3+4t^2-3t+4 = 0,$$
that is,
$$3t^3-4t^2+3t-4 = 0.$$

**Factor.**
$$3t^3-4t^2+3t-4 = t^2(3t-4)+(3t-4) = (3t-4)\left(t^2+1\right).$$

Since $t^2+1 > 0$, we get $t = \dfrac43$:
$$\boxed{\ \frac{BC}{AB} = \frac43\ }$$

**Check.** Take $a=4$, $c=3$, so $b=5$ and $r = \frac{4+3-5}{2}=1$, giving $I=(1,1)$, $A=(0,3)$, $F=(2,1.5)$. Then
$$\vec{IA} = (-1,2), \qquad \vec{IF} = (1,0.5), \qquad \vec{IA}\cdot\vec{IF} = -1+1 = 0 \;✓$$
so $\angle AIF = 90^\circ$ and $I$ does lie on the circle with diameter $AF$. ∎

**The move that made this easy.** Spotting that $\angle AEF = 90^\circ$ turned "lies on the circumcircle of $AEF$" — a three-point condition — into the single equation $\angle AIF = 90^\circ$. Always look for a right angle that makes a circle a *diameter* circle.
[/sol]

### P8 | Medium | Standard
Prove that in any triangle, $\;a^2+b^2+c^2 = 2s^2 - 2r^2 - 8Rr$.
[hint]
Use $a = 2R\sin A$ etc., or express $\sum a^2$ via $s$, $r$, $R$ using the standard symmetric identities $ab+bc+ca = s^2+r^2+4Rr$.
[/hint]
[sol]
We use two standard identities for a triangle:
$$a+b+c = 2s, \qquad ab+bc+ca = s^2+r^2+4Rr.$$

*(The second follows from $abc = 4Rrs$ and $K = rs = \sqrt{s(s-a)(s-b)(s-c)}$; expanding $\prod(s-a)$ gives $s^3 - s^2(a+b+c)+s(ab+bc+ca)-abc = r^2 s$, i.e. $s^3-2s^3+s(ab+bc+ca)-4Rrs = r^2s$, so $ab+bc+ca = s^2+r^2+4Rr$.)*

Now
$$a^2+b^2+c^2 = (a+b+c)^2 - 2(ab+bc+ca) = 4s^2 - 2\left(s^2+r^2+4Rr\right),$$
$$= 2s^2 - 2r^2 - 8Rr. \;∎$$

**Check with the $13,14,15$ triangle:** $s=21$, $r=4$, $R=\frac{65}{8}$. Left: $169+196+225 = 590$. Right: $2(441) - 2(16) - 8\cdot\frac{65}{8}\cdot4 = 882-32-260 = 590$ ✓.
[/sol]

### P9 | Hard | Standard
Let $ABC$ be a triangle with $\angle A = 90^\circ$ and let $D$ be the foot of the altitude from $A$. Prove $\;\frac{1}{AD^2} = \frac1{AB^2}+\frac1{AC^2}$.
[hint]
Compute the area two ways, or use similar triangles.
[/hint]
[sol]
**By areas.** The area of the right triangle is
$$K = \tfrac12\,AB\cdot AC = \tfrac12\,BC\cdot AD,$$
so
$$AD = \frac{AB\cdot AC}{BC}.$$

By Pythagoras $BC^2 = AB^2+AC^2$, hence
$$\frac{1}{AD^2} = \frac{BC^2}{AB^2\cdot AC^2} = \frac{AB^2+AC^2}{AB^2\,AC^2} = \frac{1}{AC^2}+\frac1{AB^2}. \;∎$$

**Check ($3,4,5$):** $AD = \frac{3\cdot4}{5} = 2.4$, and $\frac{1}{2.4^2} = \frac1{5.76}\approx0.1736$; also $\frac19+\frac1{16} = 0.1111+0.0625 = 0.1736$ ✓.
[/sol]

### P10 | Hard | Standard
Let $ABCD$ be a cyclic quadrilateral with sides $a,b,c,d$ in order. Prove Brahmagupta's formula $K = \sqrt{(s-a)(s-b)(s-c)(s-d)}$, where $s$ is the semiperimeter.
[hint]
Split along a diagonal, write the area as a sum of two triangle areas, apply the cosine rule to both, and use that opposite angles are supplementary.
[/hint]
[sol]
Let $ABCD$ be cyclic with $AB = a$, $BC = b$, $CD = c$, $DA = d$, and let $\angle ABC = \beta$. Since $ABCD$ is cyclic, $\angle ADC = 180^\circ - \beta$.

**Area.** Splitting along the diagonal $AC$,
$$K = \tfrac12\,ab\sin\beta + \tfrac12\,cd\sin(180^\circ-\beta) = \tfrac12(ab+cd)\sin\beta.$$
So
$$4K = 2(ab+cd)\sin\beta. \tag{1}$$

**Diagonal.** The cosine rule in both triangles gives
$$AC^2 = a^2+b^2-2ab\cos\beta = c^2+d^2+2cd\cos\beta,$$
using $\cos(180^\circ-\beta) = -\cos\beta$. Rearranging,
$$a^2+b^2-c^2-d^2 = 2(ab+cd)\cos\beta. \tag{2}$$

**Combine.** Squaring (1) and (2) and adding, with $\sin^2+\cos^2 = 1$:
$$16K^2 + \left(a^2+b^2-c^2-d^2\right)^2 = 4(ab+cd)^2,$$
so
$$16K^2 = 4(ab+cd)^2 - \left(a^2+b^2-c^2-d^2\right)^2.$$

**Factor as a difference of squares.**
$$16K^2 = \Big[2(ab+cd) + a^2+b^2-c^2-d^2\Big]\Big[2(ab+cd)-a^2-b^2+c^2+d^2\Big]$$
$$= \Big[(a+b)^2-(c-d)^2\Big]\Big[(c+d)^2-(a-b)^2\Big]$$
$$= (a+b+c-d)(a+b-c+d)(c+d+a-b)(c+d-a+b).$$

With $2s = a+b+c+d$, each factor is $2(s-d)$, $2(s-c)$, $2(s-b)$, $2(s-a)$ respectively. Hence
$$16K^2 = 16(s-a)(s-b)(s-c)(s-d),$$
$$K = \sqrt{(s-a)(s-b)(s-c)(s-d)}. \;∎$$

**Sanity check.** Setting $d = 0$ degenerates the quadrilateral to a triangle with sides $a,b,c$ and recovers Heron's formula ✓.
[/sol]
