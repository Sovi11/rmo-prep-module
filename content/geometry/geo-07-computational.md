---
id: geo-07-computational
title: Coordinates, vectors and complex numbers
level: Core
hours: 3
blurb: The last-resort methods that always work. How to set up coordinates well, when vectors beat coordinates, and the unit-circle trick that makes circle problems algebraic.
tags: coordinates, vectors, complex numbers, computation
link: MOTP — Geometry :: https://jpsaha.github.io/MOTP/geo/
video: Search: coordinate geometry olympiad complex numbers :: https://www.youtube.com/results?search_query=complex+numbers+olympiad+geometry+unit+circle
---

## When to compute

A complete computational solution scores 17. An unfinished elegant one scores 4. If twenty minutes of synthetic work has not produced a route, **switch**.

Computation is especially good for:

- problems asking for a **specific number** (an angle, a ratio, a length);
- configurations with lots of **perpendicularity** or **midpoints**;
- problems with a natural right angle or a natural circle;
- anything where you can see the answer but not the synthetic reason.

It is bad for: many circles and tangencies, "prove these are concurrent", and problems with no natural origin.

## Setting up coordinates well

The whole difficulty of coordinate geometry is bookkeeping, and a good setup halves it.

> **Rules for a good setup.**
> 1. Put the **origin** where the most lines meet, or at a right angle.
> 2. Put an **axis** along the most important line.
> 3. **Use the symmetry.** If the problem is symmetric in $B$ and $C$, put $B=(-m,0)$, $C=(m,0)$.
> 4. **Scale**. If the problem is scale-invariant, set a convenient length to 1.
> 5. Use **as few letters as possible** — every extra parameter doubles the algebra.

**Standard setups.**

| Configuration | Setup |
|---|---|
| right angle at $A$ | $A=(0,0)$, $B=(c,0)$, $C=(0,b)$ |
| isosceles / symmetric in $B,C$ | $B=(-m,0)$, $C=(m,0)$, $A=(0,h)$ or $(p,q)$ |
| a circle is central | circle = unit circle centred at origin |
| a midpoint matters | put it at the origin |

## The formulas

$$\text{distance}: \sqrt{(x_1-x_2)^2+(y_1-y_2)^2}, \qquad \text{midpoint}: \left(\tfrac{x_1+x_2}{2},\tfrac{y_1+y_2}{2}\right)$$
$$\text{line through } (x_1,y_1),(x_2,y_2): \ (y-y_1)(x_2-x_1) = (x-x_1)(y_2-y_1)$$
$$\text{perpendicular}: m_1m_2 = -1, \qquad \text{distance from } (x_0,y_0) \text{ to } ax+by+c=0: \ \frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}$$
$$\text{area of } (x_1,y_1),(x_2,y_2),(x_3,y_3): \ \tfrac12\left|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\right| \ \textbf{(shoelace)}$$

**Circle:** $(x-a)^2+(y-b)^2 = r^2$, or $x^2+y^2+Dx+Ey+F=0$ with centre $\left(-\frac D2,-\frac E2\right)$.

## Vectors

Often cleaner than coordinates, because they avoid choosing axes.

$$\vec u\cdot\vec v = |u||v|\cos\theta, \qquad \vec u\perp\vec v\iff \vec u\cdot\vec v = 0, \qquad |\vec u|^2 = \vec u\cdot\vec u.$$

With any origin, the centroid is $\frac{\vec A+\vec B+\vec C}{3}$; with the **circumcentre** as origin, the orthocentre is $\vec A+\vec B+\vec C$. That single fact makes most $O$–$G$–$H$ problems trivial.

**Section formula.** The point dividing $AB$ in ratio $m:n$ from $A$ is $\dfrac{n\vec A+m\vec B}{m+n}$.

## Complex numbers on the unit circle

Put the circumcircle as the **unit circle**, so $|a|=|b|=|c|=1$ and $\bar a = 1/a$. Then:

$$\text{orthocentre } h = a+b+c, \qquad \text{centroid } g = \frac{a+b+c}{3}, \qquad \text{circumcentre } o = 0.$$
$$\text{midpoint of arc } BC \text{ (not containing } A) = -\sqrt{bc} \ \text{(sign chosen suitably)}$$
$$\text{foot of perpendicular from } z \text{ to chord } ab: \ \tfrac12\left(a+b+z-ab\bar z\right)$$
$$a,b,c \text{ collinear} \iff \frac{a-b}{a-c}\in\mathbb{R} \iff \frac{a-b}{a-c} = \frac{\bar a-\bar b}{\bar a-\bar c}$$
$$ab\perp cd \iff \frac{a-b}{c-d} \text{ is purely imaginary}$$

**Why it works.** Conjugation becomes $z\mapsto 1/z$, which is algebraic — so every condition becomes a rational equation in $a,b,c$.

## Common traps

- Choosing a setup with too many parameters. Count them before you start: three points in the plane should cost at most 3–4 letters after using symmetry and scaling.
- Forgetting to check that your "general" setup really is general (e.g. assuming $A$ is above $BC$).
- Grinding an algebra mess without sanity-checking on a concrete triangle first. Test with $3,4,5$.
- Using the shoelace formula and forgetting the absolute value (or forgetting to *keep* the sign when you need orientation).

## Problems

### P1 | Warmup | Standard
Find the area of the triangle with vertices $(0,0)$, $(4,1)$, $(2,5)$.
[hint]
Shoelace.
[/hint]
[sol]
By the shoelace formula with $(x_1,y_1)=(0,0)$, $(x_2,y_2)=(4,1)$, $(x_3,y_3)=(2,5)$:
$$K = \tfrac12\left|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\right| = \tfrac12\left|0(1-5)+4(5-0)+2(0-1)\right|$$
$$= \tfrac12\left|0+20-2\right| = \tfrac12\cdot18 = 9. \;∎$$
[/sol]

### P2 | Warmup | Standard
Show that the diagonals of a rhombus are perpendicular, using vectors.
[hint]
Let the sides be $\vec u$ and $\vec v$ with $|\vec u| = |\vec v|$. The diagonals are $\vec u+\vec v$ and $\vec u - \vec v$.
[/hint]
[sol]
Let the rhombus be $OACB$ with $\vec{OA} = \vec u$ and $\vec{OB} = \vec v$, where $|\vec u| = |\vec v|$ (all sides equal).

The diagonals are
$$\vec{OC} = \vec u+\vec v \qquad\text{and}\qquad \vec{BA} = \vec u - \vec v.$$

Their dot product is
$$(\vec u+\vec v)\cdot(\vec u-\vec v) = |\vec u|^2 - |\vec v|^2 = 0,$$
since $|\vec u| = |\vec v|$.

A zero dot product of two non-zero vectors means they are perpendicular. ∎
[/sol]

### P3 | Easy | Standard
In triangle $ABC$ with $A=(0,0)$, $B=(4,0)$, $C=(1,3)$, find the circumcentre and the orthocentre, and verify they lie with the centroid on a line.
[hint]
Circumcentre: intersection of perpendicular bisectors. Orthocentre: intersection of altitudes. Then check $\vec{OH} = 3\vec{OG}$.
[/hint]
[sol]
**Centroid.** $G = \left(\frac{0+4+1}{3},\frac{0+0+3}{3}\right) = \left(\frac53,\ 1\right)$.

**Circumcentre $O = (x,y)$.** Equidistant from $A$ and $B$: $x^2+y^2 = (x-4)^2+y^2 \Rightarrow 8x = 16 \Rightarrow x = 2$.
Equidistant from $A$ and $C$: $x^2+y^2 = (x-1)^2+(y-3)^2 \Rightarrow 0 = -2x+1-6y+9 \Rightarrow 2x+6y = 10$.
With $x=2$: $4+6y = 10 \Rightarrow y = 1$. So
$$O = (2,\ 1).$$

**Orthocentre $H$.** The altitude from $C$ is perpendicular to $AB$ (the $x$-axis), so it is the vertical line $x = 1$.
The altitude from $A$ is perpendicular to $BC$. The slope of $BC$ is $\frac{3-0}{1-4} = -1$, so the altitude from $A$ has slope $1$: the line $y = x$.
Intersecting: $x=1$, $y=1$, so
$$H = (1,\ 1).$$

**Check the Euler line.**
$$\vec{OG} = \left(\tfrac53 - 2,\ 1-1\right) = \left(-\tfrac13,\ 0\right), \qquad \vec{OH} = (1-2,\ 1-1) = (-1,\ 0).$$
Indeed $\vec{OH} = 3\,\vec{OG}$ ✓, so $O$, $G$, $H$ are collinear (all on the line $y=1$) with $OG:GH = 1:2$. ∎
[/sol]

### P4 | Easy | Standard
Prove that the medians of a triangle are concurrent, using vectors.
[hint]
Show the point $\frac{\vec A+\vec B+\vec C}{3}$ lies on all three medians.
[/hint]
[sol]
Let $\vec G = \dfrac{\vec A+\vec B+\vec C}{3}$ (with respect to any origin), and let $M_A = \dfrac{\vec B+\vec C}{2}$ be the midpoint of $BC$.

Then
$$\vec G = \frac{\vec A + 2M_A}{3} = \frac13\vec A + \frac23 \vec{M_A},$$
which is a point on segment $AM_A$ (the coefficients are non-negative and sum to 1), dividing it with $AG:GM_A = 2:1$.

The expression for $\vec G$ is **symmetric** in $A$, $B$, $C$, so by the identical computation $\vec G$ also lies on the medians from $B$ and from $C$.

Hence all three medians pass through $G$: they are concurrent. ∎
[/sol]

### P5 | Medium | Standard
Let $ABC$ have circumcircle the unit circle in $\mathbb{C}$, with vertices $a,b,c$. Prove that the foot of the perpendicular from $a$ to the chord $bc$ is
$$\tfrac12\left(a+b+c-\frac{bc}{a}\right).$$
[hint]
Use the general foot-of-perpendicular formula $\frac12(b+c+z-bc\bar z)$ with $z=a$ and $\bar a = 1/a$.
[/hint]
[sol]
**The general formula.** For $|b|=|c|=1$, the foot of the perpendicular from a point $z$ to the line $bc$ is
$$f = \tfrac12\left(b+c+z-bc\,\bar z\right).$$

*(Sketch: $f$ lies on line $bc$, which for unit-circle endpoints is characterised by $f + bc\bar f = b+c$; and $f - z$ must be perpendicular to $c-b$, i.e. $\frac{f-z}{c-b}$ purely imaginary. Solving the two linear conditions gives the formula.)*

**Substitute $z = a$.** Since $|a|=1$, $\bar a = \frac1a$, so
$$f = \tfrac12\left(b+c+a - bc\cdot\frac1a\right) = \tfrac12\left(a+b+c-\frac{bc}{a}\right). \;∎$$

**A corollary worth noting.** The orthocentre is $h = a+b+c$, so
$$h - f = \tfrac12\left(a+b+c+\frac{bc}{a}\right) \quad\text{and}\quad f - \left(h - f\right)\ldots$$
more usefully, the reflection of $h$ in the line $bc$ is
$$2f - h = -\frac{bc}{a},$$
which has modulus $\frac{|b||c|}{|a|} = 1$ — i.e. it lies **on the unit circle**. That is the reflection lemma, proved in one line. ∎
[/sol]

### P6 | Medium | Standard
A point $P$ moves so that the sum of the squares of its distances to two fixed points $A$ and $B$ is constant. Find the locus.
[hint]
Put $A$ and $B$ symmetrically on the $x$-axis and expand.
[/hint]
[sol]
Put $A = (-m,0)$ and $B = (m,0)$, and let $P = (x,y)$ with
$$PA^2 + PB^2 = k$$
for a constant $k$.

Expanding,
$$\left[(x+m)^2+y^2\right]+\left[(x-m)^2+y^2\right] = 2x^2+2y^2+2m^2 = k,$$
so
$$x^2+y^2 = \frac{k-2m^2}{2}.$$

**The locus is a circle centred at the midpoint of $AB$** (the origin), with radius
$$r = \sqrt{\frac{k}{2}-m^2},$$
provided $k > 2m^2$. If $k = 2m^2$ the locus is the single midpoint, and if $k<2m^2$ it is empty. ∎

**Vector proof (no coordinates).** With $M$ the midpoint of $AB$,
$$PA^2+PB^2 = 2\,PM^2 + \tfrac12 AB^2$$
(the **median formula** applied to triangle $PAB$). So $PA^2+PB^2$ is constant iff $PM$ is constant — a circle centred at $M$.
[/sol]

### P7 | Medium | CRMO 2013 P5
Let $ABC$ be a triangle with $\angle A = 90^\circ$ and $AB = AC$. Let $D$ and $E$ be points on segment $BC$ with $BD:DE:EC = 3:5:4$. Prove that $\angle DAE = 45^\circ$.
[hint]
Coordinates: put $A$ at the origin with $AB$, $AC$ along the axes. Compute the vectors $AD$ and $AE$ and use the tangent of the angle between them.
[/hint]
[sol]
**Setup.** Since $\angle A = 90^\circ$ and $AB = AC$, put
$$A = (0,0), \qquad B = (12,0), \qquad C = (0,12)$$
(the leg length 12 is chosen to make the $3:5:4$ division land on integers).

**Locate $D$ and $E$.** $BC$ is divided as $BD:DE:EC = 3:5:4$, total 12 parts. So $D$ divides $BC$ with $BD:DC = 3:9 = 1:3$, and $E$ with $BE:EC = 8:4 = 2:1$.

By the section formula,
$$D = \frac{3\cdot C + 9\cdot B}{12} = \frac{3(0,12)+9(12,0)}{12} = \frac{(108,\ 36)}{12} = (9,\ 3),$$
$$E = \frac{8\cdot C+4\cdot B}{12} = \frac{8(0,12)+4(12,0)}{12} = \frac{(48,\ 96)}{12} = (4,\ 8).$$

**The angle at $A$.** The vectors are $\vec{AD} = (9,3)$ and $\vec{AE} = (4,8)$.

Using the tangent form (cleanest here):
$$\tan\angle DAE = \frac{\left|\,9\cdot8 - 3\cdot4\,\right|}{9\cdot4+3\cdot8} = \frac{|72-12|}{36+24} = \frac{60}{60} = 1.$$

*(Numerator is the cross product magnitude, denominator the dot product.)*

Since $\angle DAE \in (0^\circ,180^\circ)$ and the dot product is positive, the angle is acute, so
$$\angle DAE = 45^\circ. \;∎$$

**Cross-check with the dot product.** $\vec{AD}\cdot\vec{AE} = 36+24 = 60$, $|\vec{AD}| = \sqrt{81+9}=\sqrt{90}$, $|\vec{AE}| = \sqrt{16+64}=\sqrt{80}$. Then
$$\cos\angle DAE = \frac{60}{\sqrt{90}\sqrt{80}} = \frac{60}{\sqrt{7200}} = \frac{60}{60\sqrt2} = \frac{1}{\sqrt2} \implies \angle DAE = 45^\circ \;✓$$
[/sol]

### P8 | Medium | Standard
Let $ABCD$ be a square. Prove that for any point $P$ on the circumcircle, $PA^2+PB^2+PC^2+PD^2$ is constant, and find its value in terms of the side $s$.
[hint]
Put the centre at the origin and use $\sum |P - V_i|^2 = 4|P|^2 - 2P\cdot\sum V_i + \sum|V_i|^2$.
[/hint]
[sol]
Put the centre of the square at the origin. The vertices are then four points $V_1,\dots,V_4$ at distance $R = \frac{s}{\sqrt2}$ from the origin (half the diagonal), and by symmetry
$$\sum_{i=1}^4 \vec V_i = \vec 0.$$

For a point $P$ on the circumcircle, $|\vec P| = R$. Then
$$\sum_{i=1}^{4}PV_i^2 = \sum_i\left|\vec P - \vec V_i\right|^2 = \sum_i\left(|\vec P|^2 - 2\vec P\cdot\vec V_i + |\vec V_i|^2\right)$$
$$= 4|\vec P|^2 - 2\,\vec P\cdot\underbrace{\sum_i\vec V_i}_{=\vec 0} + \sum_i|\vec V_i|^2 = 4R^2 + 4R^2 = 8R^2.$$

Substituting $R^2 = \frac{s^2}{2}$:
$$PA^2+PB^2+PC^2+PD^2 = 8\cdot\frac{s^2}{2} = 4s^2,$$
constant as claimed. ∎

**Check.** Take $P = A$. Then $PA=0$, $PB=PD=s$, $PC = s\sqrt2$, so the sum is $0+s^2+s^2+2s^2 = 4s^2$ ✓.

**Generalisation.** The same computation shows that for any regular $n$-gon with circumradius $R$ and any $P$ on the circumcircle, $\sum PV_i^2 = 2nR^2$ — the vertex sum vanishing is the only fact used.
[/sol]

### P9 | Hard | Standard
Let $ABC$ be a triangle inscribed in the unit circle with vertices $a,b,c$. Prove that the nine-point centre is $n = \dfrac{a+b+c}{2}$, and that it is the midpoint of $OH$.
[hint]
$o = 0$ and $h = a+b+c$. Then check that $n$ is equidistant from a side midpoint and an altitude foot.
[/hint]
[sol]
With the circumcircle as the unit circle, $o = 0$ and $h = a+b+c$.

**The midpoint of $OH$** is
$$n = \frac{o+h}{2} = \frac{a+b+c}{2}.$$

**Check: $n$ is at distance $\frac12$ from a side midpoint.** The midpoint of $BC$ is $m_a = \frac{b+c}{2}$, so
$$\left|n - m_a\right| = \left|\frac{a+b+c}{2}-\frac{b+c}{2}\right| = \frac{|a|}{2} = \frac12.$$

**Check: $n$ is at distance $\frac12$ from an altitude foot.** By the previous problem's formula, the foot of the perpendicular from $a$ to $bc$ is
$$f_a = \tfrac12\left(a+b+c-\frac{bc}{a}\right).$$
Hence
$$\left|n - f_a\right| = \left|\frac{a+b+c}{2}-\frac{a+b+c}{2}+\frac{bc}{2a}\right| = \frac{|b||c|}{2|a|} = \frac12.$$

**Check: $n$ is at distance $\frac12$ from the midpoint of $AH$.** That midpoint is
$$\frac{a+h}{2} = \frac{2a+b+c}{2},$$
so
$$\left|n - \frac{2a+b+c}{2}\right| = \left|\frac{-a}{2}\right| = \frac12.$$

All nine named points are therefore at distance exactly $\frac12 = \frac R2$ from $n$, so they lie on a circle centred at $n$ with radius $\frac R2$ — the nine-point circle, whose centre is the midpoint of $OH$. ∎

**Why this is the argument to remember.** The synthetic proof needs two homotheties and a case check. In complex coordinates on the unit circle it is three one-line modulus computations.
[/sol]

### P10 | Hard | Standard
Let $ABCD$ be a cyclic quadrilateral on the unit circle with vertices $a,b,c,d$. Prove that its diagonals $AC$ and $BD$ are perpendicular **if and only if** $ac + bd = 0$.
[hint]
Perpendicularity of chords $ac$ and $bd$ means $\frac{a-c}{b-d}$ is purely imaginary, i.e. equals minus its own conjugate. Use $\bar a = 1/a$.
[/hint]
[sol]
Let $w = \dfrac{a-c}{b-d}$. The chords $AC$ and $BD$ are perpendicular exactly when $w$ is **purely imaginary**, i.e.
$$\bar w = -w.$$

**Compute $\bar w$** using $\bar a = \frac1a$ etc.:
$$\bar w = \frac{\bar a - \bar c}{\bar b-\bar d} = \frac{\frac1a-\frac1c}{\frac1b-\frac1d} = \frac{\frac{c-a}{ac}}{\frac{d-b}{bd}} = \frac{c-a}{ac}\cdot\frac{bd}{d-b} = \frac{bd}{ac}\cdot\frac{c-a}{d-b} = \frac{bd}{ac}\cdot\frac{a-c}{b-d} = \frac{bd}{ac}\,w.$$

**Impose $\bar w = -w$.** Since $a\ne c$ (distinct vertices), $w \ne 0$, so we may divide by $w$:
$$\frac{bd}{ac} = -1 \iff bd = -ac \iff ac+bd = 0.$$

Therefore $AC\perp BD \iff ac+bd = 0$. ∎

**A consequence.** If the diagonals are perpendicular, then $d = -\frac{ac}{b}$, so $d$ is determined by $a,b,c$ — the fourth vertex of such a quadrilateral is forced once three are chosen. A quick check: $|d| = \frac{|a||c|}{|b|} = 1$ ✓, so $d$ does lie on the unit circle, as it must.
[/sol]
