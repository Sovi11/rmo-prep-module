---
id: geo-03-centers
title: Triangle centres and the Euler line
level: Core
hours: 4
blurb: Incentre, circumcentre, centroid, orthocentre — where they are, what they satisfy, and the Euler line and nine-point circle that tie them together.
tags: incentre, circumcentre, centroid, orthocentre, Euler line, nine-point circle
link: Yufei Zhao — Lemmas in Euclidean geometry :: https://yufeizhao.com/olympiad/geolemmas.pdf
link: MOTP — Geometry :: https://jpsaha.github.io/MOTP/geo/
video: Search: triangle centers Euler line nine point circle :: https://www.youtube.com/results?search_query=euler+line+nine+point+circle+olympiad+geometry
---

## The four classical centres

| Centre | Defined by | Key facts |
|---|---|---|
| **Circumcentre $O$** | perpendicular bisectors | $OA=OB=OC=R$; $\angle BOC = 2A$; distance to $BC$ is $R\cos A$ |
| **Incentre $I$** | angle bisectors | equidistant ($r$) from the sides; $\angle BIC = 90^\circ+\frac A2$ |
| **Centroid $G$** | medians | divides each median $2:1$ from the vertex |
| **Orthocentre $H$** | altitudes | $\angle BHC = 180^\circ - A$; $AH = 2R\cos A$ |

**Positions.** $I$ and $G$ are always inside. $O$ is inside iff the triangle is acute (on $BC$ iff $\angle A = 90^\circ$). $H$ is inside iff acute.

## The formulas worth memorising

$$R = \frac{abc}{4K}, \qquad r = \frac Ks, \qquad K = rs = \sqrt{s(s-a)(s-b)(s-c)},$$
where $K$ is the area and $s = \frac{a+b+c}{2}$.

$$\angle BIC = 90^\circ+\frac A2, \qquad \angle BOC = 2A, \qquad \angle BHC = 180^\circ - A.$$

$$AH = 2R\cos A, \qquad OH^2 = R^2 - 8R^2\cos A\cos B\cos C, \qquad OI^2 = R^2-2Rr \;\textbf{(Euler)}.$$

Euler's $OI^2 = R(R-2r)$ immediately gives **$R \ge 2r$**, with equality only for the equilateral triangle.

**Tangent lengths from the vertices to the incircle:** $s-a$, $s-b$, $s-c$ from $A$, $B$, $C$ respectively. This is the single most useful incircle fact.

## The Euler line

> $O$, $G$ and $H$ are **collinear**, with
> $$\vec{OH} = 3\,\vec{OG}, \qquad OG:GH = 1:2.$$
> Equivalently $\vec{OH} = \vec{OA}+\vec{OB}+\vec{OC}$.

*Why:* the homothety centred at $G$ with ratio $-\frac12$ maps each vertex to the midpoint of the opposite side, hence maps the altitudes to the perpendicular bisectors, hence maps $H\mapsto O$. A homothety at $G$ taking $H$ to $O$ with ratio $-\frac12$ forces the collinearity and the ratio.

**The line is undefined for an equilateral triangle**, where all four centres coincide.

## The nine-point circle

> The following **nine points** lie on one circle:
> - the three midpoints of the sides,
> - the three feet of the altitudes,
> - the three midpoints of $AH$, $BH$, $CH$.
>
> Its centre $N$ is the midpoint of $OH$ (so it lies on the Euler line) and its radius is $\frac R2$.

*Why:* the homothety centred at $H$ with ratio $\frac12$ maps the circumcircle to the nine-point circle, sending $A,B,C$ to the midpoints of $AH,BH,CH$ and the circumcentre $O$ to $N$.

```svg
<svg viewBox="0 0 300 200" width="400">
  <path class="gl" d="M45 165 L255 165 L110 30 Z"/>
  <circle cx="150" cy="120" r="95" class="gc"/>
  <path class="gl-thin" d="M110 30 L150 165 M45 165 L200 88 M255 165 L86 105"/>
  <circle cx="150" cy="165" r="2.6" class="gp"/>
  <circle cx="200" cy="88" r="2.6" class="gp"/>
  <circle cx="86" cy="105" r="2.6" class="gp"/>
  <circle cx="45" cy="165" r="3" class="gp"/>
  <circle cx="255" cy="165" r="3" class="gp"/>
  <circle cx="110" cy="30" r="3" class="gp"/>
  <text x="36" y="180">B</text><text x="258" y="180">C</text><text x="104" y="24">A</text>
  <text x="152" y="180">M</text>
</svg>
<figcaption>The medians meet at the centroid, dividing each in ratio 2:1 from the vertex.</figcaption>
```

## Standard lemmas

- **Incentre–excentre lemma.** The arc midpoint $M$ of $BC$ satisfies $MB=MC=MI=MI_A$.
- **Reflection of $H$.** The reflection of $H$ in a side, and in the midpoint of a side, both lie on the circumcircle. (The midpoint reflection is the antipode of the opposite vertex.)
- **$OA \perp$ (tangent at $A$)**, and the tangent at $A$ makes an angle $\angle B$ with $AC$ (tangent–chord).
- **The medial triangle** (of side midpoints) is similar to $ABC$ with ratio $\frac12$ and is homothetic to it at $G$ with ratio $-\frac12$.

## Common traps

- Assuming $O$ or $H$ is inside the triangle. State that the triangle is acute, or handle the other cases.
- Confusing $\angle BIC = 90^\circ + \frac A2$ with $\angle BHC = 180^\circ - A$.
- Using the Euler line for an equilateral triangle, where it does not exist.
- Forgetting the sign in $\vec{OH} = 3\vec{OG}$ — $G$ lies **between** $O$ and $H$.

## Problems

### P1 | Warmup | Standard
In a triangle with sides 13, 14, 15, find the area, $r$ and $R$.
[hint]
Heron for the area, then $r=K/s$ and $R = abc/(4K)$.
[/hint]
[sol]
$s = \frac{13+14+15}{2} = 21$.

**Heron:**
$$K = \sqrt{21\cdot(21-13)(21-14)(21-15)} = \sqrt{21\cdot8\cdot7\cdot6} = \sqrt{7056} = 84.$$

**Inradius:** $r = \dfrac Ks = \dfrac{84}{21} = 4$.

**Circumradius:** $R = \dfrac{abc}{4K} = \dfrac{13\cdot14\cdot15}{4\cdot84} = \dfrac{2730}{336} = \dfrac{65}{8} = 8.125$.

*(Euler check: $OI^2 = R(R-2r) = 8.125(8.125-8) = 1.0156 > 0$ ✓, consistent with $R\ge2r$.)* ∎
[/sol]

### P2 | Warmup | Standard
Prove that $\angle BIC = 90^\circ + \frac{A}{2}$, where $I$ is the incentre.
[hint]
Use the angle sum in triangle $BIC$ and the fact that $BI$, $CI$ bisect $\angle B$, $\angle C$.
[/hint]
[sol]
In triangle $BIC$, the angles at $B$ and $C$ are half the triangle's angles, since $BI$ and $CI$ are bisectors:
$$\angle IBC = \frac B2, \qquad \angle ICB = \frac C2.$$

Therefore
$$\angle BIC = 180^\circ - \frac B2-\frac C2 = 180^\circ - \frac{B+C}{2} = 180^\circ - \frac{180^\circ - A}{2} = 90^\circ+\frac A2. \;∎$$
[/sol]

### P3 | Easy | Standard
Prove that the tangent lengths from $A$, $B$, $C$ to the incircle are $s-a$, $s-b$, $s-c$.
[hint]
Let the tangent lengths be $x,y,z$ from $A,B,C$. Write the three side lengths in terms of them and solve.
[/hint]
[sol]
Let the incircle touch $BC$, $CA$, $AB$ at $D$, $E$, $F$. Tangents from a point to a circle are equal, so set
$$x = AE = AF, \qquad y = BF = BD, \qquad z = CD = CE.$$

Then
$$a = BC = y+z, \qquad b = CA = z+x, \qquad c = AB = x+y.$$

Adding: $a+b+c = 2(x+y+z)$, so $x+y+z = s$.

Subtracting each side in turn:
$$x = s - (y+z) = s-a, \qquad y = s-b, \qquad z = s-c. \;∎$$
[/sol]

### P4 | Easy | Standard
Prove that the centroid divides each median in the ratio $2:1$ from the vertex.
[hint]
Use vectors with the origin anywhere: $G = \frac{A+B+C}{3}$.
[/hint]
[sol]
Place position vectors $\vec A,\vec B,\vec C$ (origin arbitrary), and let $M$ be the midpoint of $BC$, so $\vec M = \frac{\vec B+\vec C}{2}$.

Define $\vec G = \dfrac{\vec A+\vec B+\vec C}{3}$. Then
$$\vec G - \vec A = \frac{\vec B+\vec C-2\vec A}{3}, \qquad \vec M - \vec A = \frac{\vec B+\vec C-2\vec A}{2}.$$

So
$$\vec G - \vec A = \frac23\left(\vec M - \vec A\right),$$
which says $G$ lies on segment $AM$ with $AG = \frac23 AM$, i.e. $AG:GM = 2:1$.

By symmetry of the formula for $\vec G$ in $A,B,C$, the same point lies on all three medians with the same ratio — which also proves the medians are concurrent. ∎
[/sol]

### P5 | Medium | Standard
Prove that $O$, $G$, $H$ are collinear with $OG:GH = 1:2$.
[hint]
Take $O$ as the origin and show $\vec{OH} = \vec{OA}+\vec{OB}+\vec{OC}$; then compare with $\vec{OG}$.
[/hint]
[sol]
Take $O$ as the origin, so $|\vec A| = |\vec B| = |\vec C| = R$.

**Claim: the point $P$ with $\vec P = \vec A+\vec B+\vec C$ is the orthocentre.**

Check that $AP\perp BC$:
$$\vec P - \vec A = \vec B+\vec C, \qquad \vec C - \vec B.$$
Their dot product is
$$(\vec B+\vec C)\cdot(\vec C-\vec B) = |\vec C|^2 - |\vec B|^2 = R^2-R^2 = 0.$$
So $AP\perp BC$, i.e. $P$ lies on the altitude from $A$. By symmetry it lies on all three altitudes, so $P = H$:
$$\vec{OH} = \vec A+\vec B+\vec C.$$

**Compare with the centroid.** $\vec{OG} = \dfrac{\vec A+\vec B+\vec C}{3}$, so
$$\vec{OH} = 3\,\vec{OG}.$$

Hence $O$, $G$, $H$ are collinear, with $G$ between $O$ and $H$ and
$$OG : GH = 1 : 2. \;∎$$
[/sol]

### P6 | Medium | Standard
Prove that the reflection of the orthocentre $H$ in side $BC$ lies on the circumcircle.
[hint]
Let $H'$ be the reflection. Show $\angle BH'C = \angle BAC$, which puts $H'$ on the circle through $B$, $C$ seeing $BC$ at angle $A$.
[/hint]
[sol]
Let $H'$ be the reflection of $H$ in line $BC$. Reflection preserves angles, so
$$\angle BH'C = \angle BHC.$$

By the standard orthocentre fact (angle-chasing chapter, P3),
$$\angle BHC = 180^\circ - \angle BAC.$$

Hence
$$\angle BH'C = 180^\circ - \angle BAC.$$

Now $H'$ lies on the opposite side of $BC$ from $H$, hence on the opposite side from $A$ (for an acute triangle). A point on the far side of $BC$ from $A$ that sees $BC$ at angle $180^\circ - \angle A$ lies on the arc $BC$ not containing $A$ — precisely because $BAC H'$ would then be a cyclic quadrilateral (opposite angles $\angle A$ and $180^\circ-\angle A$ summing to $180^\circ$).

Therefore $H'$ lies on the circumcircle of $ABC$. ∎

**Companion fact.** The reflection of $H$ in the **midpoint** of $BC$ is the point diametrically opposite $A$ on the circumcircle. (Proof: that reflection is $\vec B+\vec C-\vec H = -\vec A$ with $O$ as origin.)
[/sol]

### P7 | Medium | Standard
Prove Euler's formula $OI^2 = R^2-2Rr$, and deduce $R \ge 2r$.
[hint]
Extend $AI$ to meet the circumcircle at $M$; use $MI = MB$ (incentre–excentre lemma) and the power of the point $I$.
[/hint]
[sol]
Let $AI$ meet the circumcircle again at $M$, the midpoint of arc $BC$.

**Power of $I$.** Since $I$ is inside the circle, its power is
$$\operatorname{pow}(I) = OI^2 - R^2 = -\,IA\cdot IM. \tag{1}$$
(The chord through $I$ along line $AM$ gives $\overrightarrow{IA}\cdot\overrightarrow{IM} = OI^2-R^2$, negative because $I$ is inside.)

**Compute $IM$.** By the incentre–excentre lemma, $MI = MB$. And $MB$ is a chord subtending the inscribed angle $\angle MAB = \frac A2$, so by the extended law of sines
$$MB = 2R\sin\frac A2 \implies IM = 2R\sin\frac A2.$$

**Compute $IA$.** Drop the perpendicular from $I$ to $AB$; its length is $r$, and it makes angle $\frac A2$ at $A$. So
$$IA = \frac{r}{\sin\frac A2}.$$

**Substitute into (1):**
$$R^2 - OI^2 = IA\cdot IM = \frac{r}{\sin\frac A2}\cdot 2R\sin\frac A2 = 2Rr.$$

Therefore
$$OI^2 = R^2-2Rr = R(R-2r). \;∎$$

**Deduction.** $OI^2 \ge 0$ and $R>0$, so $R - 2r\ge0$, i.e.
$$R \ge 2r,$$
with equality iff $OI = 0$, i.e. $O=I$ — which happens exactly for the equilateral triangle. ∎
[/sol]

### P8 | Medium | RMO 2024 P3 (adapted)
Let $ABC$ be an acute isosceles triangle with $AB=AC$, and let $D$ be the foot of the altitude from $A$. Let $O$, $H$, $G$ be the circumcentre, orthocentre and centroid. Prove that $O$, $H$, $G$ and the incentre $I$ all lie on the line $AD$.
[hint]
$AD$ is simultaneously several special lines of the triangle. Name them.
[/hint]
[sol]
Since $AB = AC$, the triangle is symmetric about the line $AD$, where $D$ is the foot of the altitude from $A$. We identify $AD$ four ways:

1. **It is the altitude from $A$**, by definition of $D$. So $H \in AD$.

2. **It is the perpendicular bisector of $BC$.** By symmetry $D$ is the midpoint of $BC$, and $AD\perp BC$. So $O\in AD$.

3. **It is the median from $A$**, since $D$ is the midpoint of $BC$. So $G\in AD$.

4. **It is the internal bisector of $\angle BAC$.** Reflection in $AD$ swaps $B$ and $C$ while fixing $A$, so it maps ray $AB$ to ray $AC$ — hence $AD$ bisects $\angle BAC$. So $I\in AD$.

Therefore $O$, $H$, $G$ and $I$ all lie on the single line $AD$. ∎

**Why this is worth stating explicitly.** In an isosceles triangle the Euler line degenerates onto the axis of symmetry, and the incentre joins it — which is *not* true for a general triangle ($I$ is not on the Euler line unless the triangle is isosceles). Recognising this is usually the first line of any isosceles-triangle centre problem, including RMO 2024 Problem 3.
[/sol]

### P9 | Hard | Standard
Prove that the nine-point circle has radius $\frac R2$ and centre the midpoint $N$ of $OH$.
[hint]
Apply the homothety centred at $H$ with ratio $\frac12$ to the circumcircle and see where the nine points come from.
[/hint]
[sol]
Let $h$ be the homothety centred at $H$ with ratio $\frac12$. It maps the circumcircle $\Omega$ (centre $O$, radius $R$) to a circle $\omega$ of radius $\frac R2$ centred at the midpoint of $HO$ — that is, at $N$.

Now identify the images of nine points of $\Omega$ under $h$, and show all nine named points arise.

**(i) Midpoints of $AH$, $BH$, $CH$.** $h(A)$ is the midpoint of $HA$ (since $h$ halves the distance from $H$). So these three points lie on $\omega$. ✓

**(ii) Feet of the altitudes.** Let $H_A$ be the foot of the altitude from $A$, and let $H'$ be the reflection of $H$ in $BC$, which lies on $\Omega$ (P6). Then $H_A$ is the midpoint of $HH'$, i.e. $H_A = h(H')$. Since $H'\in\Omega$, $H_A\in\omega$. ✓ Similarly for the other two feet.

**(iii) Midpoints of the sides.** Let $M_A$ be the midpoint of $BC$ and $A'$ the antipode of $A$ on $\Omega$. As noted in P6, the reflection of $H$ in $M_A$ is $A'$, i.e. $M_A$ is the midpoint of $HA'$, so $M_A = h(A')$. Since $A'\in\Omega$, $M_A\in\omega$. ✓ Similarly for the other two midpoints.

So all nine points lie on the single circle $\omega$, whose radius is $\frac R2$ and whose centre $N$ is the midpoint of $OH$. ∎

**Corollary.** $N$ lies on the Euler line, and the four points $O$, $N$, $G$, $H$ are in that order with
$$ON:NG:GH = 3:1:2$$
(scaling $OG:GH = 1:2$ and $ON = \frac12 OH$).
[/sol]

### P10 | Hard | Standard
Let $ABC$ have circumradius $R$ and inradius $r$. Prove $\;\cos A+\cos B+\cos C = 1 + \dfrac rR$.
[hint]
Use the projection formula or the identity $r = 4R\sin\frac A2\sin\frac B2\sin\frac C2$, together with a product-to-sum identity.
[/hint]
[sol]
**Step 1: a known product formula.** We use
$$r = 4R\,\sin\frac A2\sin\frac B2\sin\frac C2.$$
*(Proof sketch: $r = (s-a)\tan\frac A2$ and $s-a = 4R\cos\frac A2\sin\frac B2\sin\frac C2$, which follows from the law of sines and sum-to-product.)*

**Step 2: a trigonometric identity.** We show
$$\cos A+\cos B+\cos C = 1+4\sin\frac A2\sin\frac B2\sin\frac C2.$$

Group the first two terms by sum-to-product:
$$\cos A+\cos B = 2\cos\frac{A+B}{2}\cos\frac{A-B}{2} = 2\sin\frac C2\cos\frac{A-B}{2},$$
using $\frac{A+B}{2} = 90^\circ-\frac C2$.

For the third term, the double-angle formula gives
$$\cos C = 1-2\sin^2\frac C2.$$

Adding,
$$\cos A+\cos B+\cos C = 1 + 2\sin\frac C2\left(\cos\frac{A-B}{2}-\sin\frac C2\right).$$

Now $\sin\frac C2 = \cos\frac{A+B}{2}$, so the bracket is
$$\cos\frac{A-B}{2}-\cos\frac{A+B}{2} = 2\sin\frac A2\sin\frac B2,$$
by sum-to-product. Therefore
$$\cos A+\cos B+\cos C = 1+4\sin\frac A2\sin\frac B2\sin\frac C2.$$

**Step 3: combine.** By Step 1, $4\sin\frac A2\sin\frac B2\sin\frac C2 = \dfrac rR$. Hence
$$\cos A+\cos B+\cos C = 1+\frac rR. \;∎$$

**Corollary.** Since $R\ge2r$, we get $\cos A+\cos B+\cos C \le \frac32$, with equality exactly for the equilateral triangle — a clean proof of a standard inequality.

**Check (equilateral):** $\cos60^\circ\times3 = \frac32$, and $1+\frac rR = 1+\frac12 = \frac32$ ✓.
[/sol]
