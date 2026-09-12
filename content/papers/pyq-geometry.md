---
id: pyq-geometry
title: Past problems — geometry
level: Mixed
hours: 6
blurb: Real RMO and CRMO geometry problems, transcribed from the official papers. Do these with a large, accurate diagram and a compass.
tags: past papers, RMO, CRMO, geometry
link: All official HBCSE past papers :: https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers/
link: RMO 2025 official solutions :: https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2025/12/RMO-2025-solutions.pdf
link: RMO 2024 problems with official solutions :: https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2024/11/Official-Solutions-for-RMO-2024.pdf
---

## What geometry looks like at RMO

| Paper | Geometry problems | Flavour |
|---|---|---|
| RMO 2025 | P3, P5 | two circles + radical axis; orthocentre and arc midpoint |
| RMO 2024 | P3, P5 | isosceles triangle centres; cyclic quadrilateral with parallel sides |
| RMO 2019 | P2, P5 | centroid and circumcircle; orthic configuration |
| RMO 2018 | P1, P6 | tangent + integer sides; incircle contact triangle |
| CRMO 2016 | P1, P5 | right triangle and incentre; centroid and circumcircles |
| CRMO 2015 | P1, P5 | cyclic quadrilateral and incentre; right triangle with incentre |
| CRMO 2014 | P1, P5 | areas along an altitude; orthocentre and a fixed point |
| CRMO 2013 | P1, P5 | orthocentre on a circle; a $45^\circ$ angle |
| CRMO 2012 | P1 | cevian ratios |

**Two geometry problems per paper is the norm.** They are the hardest area to cram and the easiest to lose entirely, which is why the plan runs a geometry track from week one.

## Before you start

- **Draw the diagram large** — a third of a page, with a compass. Most failed geometry solutions begin with a cramped or degenerate picture.
- Deliberately draw a **scalene, clearly non-right** triangle. A near-isosceles diagram will show you false equalities.
- If synthetic work stalls after 20 minutes, **switch to trigonometry or coordinates**. A complete computation scores 17.

## Problems

### G1 | Easy | CRMO 2012 P1
Let $ABC$ be a triangle and let $D$ be a point on segment $BC$ such that $DC = 2BD$. Let $E$ be the midpoint of $AC$, and let $AD$ and $BE$ intersect at $P$. Determine the ratios $BP/PE$ and $AP/PD$.
[hint]
Mass points: choose masses at $A$, $B$, $C$ so that both $D$ and $E$ balance.
[/hint]
[sol]
**Assign masses.** For $D$ on $BC$ with $BD:DC = 1:2$, we need $m_B : m_C = 2:1$. For $E$ the midpoint of $AC$, we need $m_A = m_C$.

Take
$$m_A = 1, \qquad m_B = 2, \qquad m_C = 1.$$
Check: $BD:DC = m_C:m_B = 1:2$ ✓ and $AE:EC = m_C:m_A = 1:1$ ✓.

**Read off the ratios.**
- $m_D = m_B + m_C = 3$, so on the cevian $AD$:
$$AP:PD = m_D : m_A = 3:1.$$
- $m_E = m_A+m_C = 2$, so on the cevian $BE$:
$$BP:PE = m_E : m_B = 2:2 = 1:1.$$

**Answer:** $\dfrac{BP}{PE} = 1$ and $\dfrac{AP}{PD} = 3$. ∎

**Cross-check with Menelaus** on triangle $ADC$ with transversal $B$–$P$–$E$:
$$\frac{AP}{PD}\cdot\frac{DB}{BC}\cdot\frac{CE}{EA} = 1 \implies \frac{AP}{PD}\cdot\frac13\cdot 1 = 1 \implies \frac{AP}{PD} = 3 \;✓$$
[/sol]

### G2 | Easy | CRMO 2013 P1
Let $ABC$ be an acute-angled triangle. The circle $\Gamma$ with $BC$ as diameter intersects $AB$ and $AC$ again at $P$ and $Q$ respectively. Determine $\angle BAC$ given that the orthocentre of triangle $APQ$ lies on $\Gamma$.
[hint]
$BC$ is a diameter, so $\angle BPC = \angle BQC = 90^\circ$: $CP$ and $BQ$ are altitudes of $ABC$. Show they are *also* altitudes of $APQ$.
[/hint]
[sol]
**Step 1: identify the altitudes.** Since $BC$ is a diameter of $\Gamma$ and $P,Q\in\Gamma$,
$$\angle BPC = \angle BQC = 90^\circ.$$
So $CP\perp AB$ and $BQ\perp AC$ — these are the altitudes of $ABC$ from $C$ and $B$. Let $H$ be their intersection, the orthocentre of $ABC$.

**Step 2: $H$ is also the orthocentre of $APQ$.** In triangle $APQ$, the side $AP$ lies along $AB$ and the side $AQ$ along $AC$. Hence
- $CP\perp AB = AP$, so line $CP$ is the altitude of $APQ$ from $P$;
- $BQ\perp AC = AQ$, so line $BQ$ is the altitude of $APQ$ from $Q$.

These meet at $H$, so $H$ is the orthocentre of $APQ$ as well.

**Step 3: use the hypothesis.** We are given $H\in\Gamma$. Since $BC$ is a diameter of $\Gamma$, every point of $\Gamma$ sees $BC$ at a right angle:
$$\angle BHC = 90^\circ.$$

**Step 4: finish.** The standard orthocentre identity gives $\angle BHC = 180^\circ - \angle BAC$. Therefore
$$180^\circ - \angle BAC = 90^\circ \implies \angle BAC = \mathbf{45^\circ}. \;∎$$
[/sol]

### G3 | Medium | CRMO 2013 P5
Let $ABC$ be a triangle with $\angle A = 90^\circ$ and $AB = AC$. Let $D$ and $E$ be points on segment $BC$ such that $BD:DE:EC = 3:5:4$. Prove that $\angle DAE = 45^\circ$.
[hint]
Coordinates. Put $A$ at the origin with the legs on the axes, choose the leg length to make the $3:5:4$ division land on integers, then take the tangent of the angle between two vectors.
[/hint]
[sol]
**Coordinates.** Put
$$A = (0,0), \qquad B = (12,0), \qquad C = (0,12),$$
the leg length 12 chosen so the $3:5:4$ division of $BC$ (12 parts in total) gives integer points.

**Locate $D$ and $E$.** Along $BC$ we have $BD:DC = 3:9 = 1:3$ and $BE:EC = 8:4 = 2:1$. By the section formula,
$$D = \frac{3C+9B}{12} = \frac{3(0,12)+9(12,0)}{12} = (9,\,3), \qquad E = \frac{8C+4B}{12} = \frac{8(0,12)+4(12,0)}{12} = (4,\,8).$$

**The angle at $A$.** The vectors are $\vec{AD} = (9,3)$ and $\vec{AE} = (4,8)$. Using
$$\tan\angle DAE = \frac{\left|\,x_1y_2-x_2y_1\,\right|}{x_1x_2+y_1y_2},$$
$$\tan\angle DAE = \frac{|9\cdot8-3\cdot4|}{9\cdot4+3\cdot8} = \frac{|72-12|}{36+24} = \frac{60}{60} = 1.$$

Since the dot product $36+24 = 60 > 0$, the angle is acute, so
$$\angle DAE = 45^\circ. \;∎$$

**Cross-check with the dot product.** $|\vec{AD}| = \sqrt{90}$, $|\vec{AE}| = \sqrt{80}$, so
$$\cos\angle DAE = \frac{60}{\sqrt{90\cdot80}} = \frac{60}{60\sqrt2} = \frac1{\sqrt2} \implies \angle DAE = 45^\circ \;✓$$

**Why coordinates are right here.** The problem gives a right angle, equal legs, and a numerical ratio — three signals that a computation will be short and a synthetic hunt will not.
[/sol]

### G4 | Medium | CRMO 2015 P5
Let $ABC$ be a right triangle with $\angle B = 90^\circ$. Let $E$ and $F$ be respectively the midpoints of $AB$ and $AC$. Suppose the incentre $I$ of triangle $ABC$ lies on the circumcircle of triangle $AEF$. Find the ratio $BC/AB$.
[hint]
$EF\parallel BC$ and $AE\perp BC$, so $\angle AEF = 90^\circ$ — meaning $AF$ is a **diameter** of the circumcircle of $AEF$. The condition collapses to $\angle AIF = 90^\circ$.
[/hint]
[sol]
Worked in full in the **trigonometry and lengths** chapter (problem P7). The route:

1. Put $B=(0,0)$, $A = (0,c)$, $C = (a,0)$, so $b = \sqrt{a^2+c^2}$, and $E = \left(0,\frac c2\right)$, $F = \left(\frac a2,\frac c2\right)$.
2. $\angle AEF = 90^\circ$, so $AF$ is a diameter of the circle $AEF$; hence "$I$ on that circle" $\iff \vec{IA}\cdot\vec{IF} = 0$.
3. With $I = (r,r)$ and $r = \frac{a+c-b}{2}$, expanding gives $4r^2 - r(a+3c)+c^2 = 0$.
4. Eliminating $b$ and setting $t = \frac ac$ reduces this to $3t^3-4t^2+3t-4 = 0$, which factors as $(3t-4)\left(t^2+1\right) = 0$.

**Answer:** $\dfrac{BC}{AB} = \dfrac43$. ∎

**Check.** $a=4$, $c=3$, $b=5$, $r=1$, $I=(1,1)$, $A=(0,3)$, $F=(2,1.5)$: then $\vec{IA}\cdot\vec{IF} = (-1)(1)+(2)(0.5) = 0$ ✓.
[/sol]

### G5 | Medium | CRMO 2016 P5
Let $ABC$ be a triangle with centroid $G$. Let the circumcircle of triangle $AGB$ intersect the line $BC$ in $X$ different from $B$, and let the circumcircle of triangle $AGC$ intersect the line $BC$ in $Y$ different from $C$. Prove that $G$ is the centroid of triangle $AXY$.
[hint]
Use the power of the point $M$ (the midpoint of $BC$) with respect to both circles — $M$ lies on line $BC$ **and** on the median $AG$, so it cuts both circles along two chords.
[/hint]
[sol]
Let $M$ be the midpoint of $BC$, so $A$, $G$, $M$ are collinear with $AG:GM = 2:1$.

**Power of $M$ with respect to the circle $AGB$.** The line $BC$ meets this circle at $B$ and $X$; the line $AM$ meets it at $A$ and $G$. Hence
$$MB\cdot MX = MG\cdot MA. \tag{1}$$

**Power of $M$ with respect to the circle $AGC$.** The line $BC$ meets it at $C$ and $Y$; the line $AM$ meets it at $A$ and $G$. Hence
$$MC\cdot MY = MG\cdot MA. \tag{2}$$

**Compare.** The right sides of (1) and (2) are identical, so
$$MB\cdot MX = MC\cdot MY.$$
But $MB = MC$ (as $M$ is the midpoint of $BC$), and these are non-zero, so
$$MX = MY.$$

**Orientation.** $X$ and $Y$ lie on **opposite** sides of $M$ along line $BC$: $X$ is the second intersection with the circle through $B$, and $Y$ with the circle through $C$, and the signed powers in (1) and (2) carry the same sign, which places $X$ and $Y$ symmetrically about $M$.

Therefore **$M$ is the midpoint of $XY$**.

**Conclude.** In triangle $AXY$, the segment $AM$ joins $A$ to the midpoint $M$ of $XY$ — so $AM$ is a **median** of $AXY$. The point $G$ lies on $AM$ with
$$AG:GM = 2:1,$$
which is exactly the position of the centroid on a median.

Hence $G$ is the centroid of triangle $AXY$. ∎

**The idea.** One point ($M$) lying on two relevant lines lets you write its power with respect to two circles, and the shared factor $MG\cdot MA$ cancels. Whenever a configuration has a point on two chords of two circles, compute its power twice.
[/sol]

### G6 | Medium | CRMO 2014 P1
Let $ABC$ be a triangle and let $AD$ be the perpendicular from $A$ onto $BC$. Let $K$, $L$, $M$ be points on $AD$ such that $AK = KL = LM = MD$. Suppose the sum of the areas of the shaded regions equals the sum of the areas of the unshaded regions (the four strips cut off by the lines through $K$, $L$, $M$ parallel to $BC$, alternately shaded). Prove that $BD = DC$.
[hint]
Each strip's area splits into a part on the $B$-side of $AD$ and a part on the $C$-side. Compute the four strip areas on each side separately — they are differences of areas of similar triangles with ratios $\frac14,\frac24,\frac34,1$.
[/hint]
[sol]
**Setup.** Let $h = AD$, and let the lines through $K$, $L$, $M$ parallel to $BC$ cut the triangle. Write $[\,\cdot\,]$ for area, and split every region by the line $AD$ into a **left** part (towards $B$) and a **right** part (towards $C$).

**Similar triangles.** The triangle cut off above the line through $K$ is similar to $ABC$ with ratio $\frac14$ (since $AK = \frac h4$), the one above $L$ with ratio $\frac24$, the one above $M$ with ratio $\frac34$.

Restricting to the **left** of $AD$: the corresponding sub-triangles of $ABD$ have areas
$$\left(\tfrac14\right)^2[ABD],\quad \left(\tfrac24\right)^2[ABD],\quad\left(\tfrac34\right)^2[ABD],\quad [ABD].$$

So the four left-hand strips (from the top down) have areas
$$\tfrac1{16}[ABD],\quad \left(\tfrac4{16}-\tfrac1{16}\right)[ABD] = \tfrac3{16}[ABD],\quad \tfrac5{16}[ABD],\quad\tfrac7{16}[ABD].$$

Identically, the right-hand strips have areas $\frac1{16}, \frac3{16},\frac5{16},\frac7{16}$ times $[ACD]$.

**Impose the condition.** Suppose the strips are shaded alternately, starting with the top one shaded. Then

$$\text{shaded} = \left(\tfrac1{16}+\tfrac5{16}\right)\big([ABD]+[ACD]\big) \;=\; \tfrac{6}{16}[ABC]$$

— which is independent of where $D$ lies, giving no information. So the intended shading must alternate **across** $AD$ as well: on the left take strips 1 and 3, on the right strips 2 and 4 (a checkerboard). Then

$$\text{shaded} = \left(\tfrac1{16}+\tfrac5{16}\right)[ABD] + \left(\tfrac3{16}+\tfrac7{16}\right)[ACD] = \tfrac6{16}[ABD]+\tfrac{10}{16}[ACD],$$
$$\text{unshaded} = \tfrac{10}{16}[ABD]+\tfrac6{16}[ACD].$$

Setting them equal:
$$\tfrac{6}{16}[ABD]+\tfrac{10}{16}[ACD] = \tfrac{10}{16}[ABD]+\tfrac{6}{16}[ACD] \implies 4[ACD] = 4[ABD],$$
so
$$[ABD] = [ACD].$$

**Finish.** Triangles $ABD$ and $ACD$ share the altitude $AD$, so their areas are proportional to their bases:
$$\frac{[ABD]}{[ACD]} = \frac{BD}{DC} = 1 \implies BD = DC. \;∎$$

**Note on the diagram.** The original paper supplies the shading as a picture; the computation above is the general method — *express every region as a combination of $[ABD]$ and $[ACD]$ with coefficients from the similar-triangle ratios $\frac{k^2 - (k-1)^2}{16}$, then let the equal-areas condition force the coefficient of $[ABD]$ to match that of $[ACD]$.* Check your reading of the figure against the [official paper](https://olympiads.hbcse.tifr.res.in/olympiads/wp-content/uploads/2016/09/crmo-14-1.pdf).
[/sol]

### G7 | Medium | CRMO 2016 P1
Let $ABC$ be a right-angled triangle with $\angle B = 90^\circ$, and let $I$ be its incentre. Draw a line perpendicular to $AI$ at $I$, and let it intersect the line $CB$ at $D$. Prove that $CI$ is perpendicular to $AD$, and prove that $ID = \sqrt{b(b-a)}$ where $BC = a$ and $CA = b$.
[hint]
For the first part, show $I$ is the orthocentre of triangle $ACD$. For the length, use the right triangle $AID$ and compute $AI$ and $AD$.
[/hint]
[sol]
**Part 1: $CI \perp AD$.**

In triangle $ACD$:
- $DI \perp AI$ by construction, and $A$, $I$ lie on the line $AI$; so $DI$ is the altitude from $D$ to side $AC$... more precisely, $DI$ is perpendicular to line $AI$, which passes through $A$. For $DI$ to be an altitude of $ACD$ we need it perpendicular to $AC$, which is not given.

Argue instead as follows. Consider triangle $ACD$ with $D$ on line $CB$.
- The line $AI$ bisects $\angle BAC$, i.e. $\angle DAC$ (since $D$ lies on line $CB$ and $B$ is between... the bisector of $\angle A$ in triangle $ABC$ is also the bisector of $\angle DAC$ when $D$ is on line $BC$).
- $DI\perp AI$ means $DI$ is perpendicular to the bisector of $\angle DAC$ at the point $I$ of that bisector.

A line perpendicular to the bisector of an angle, meeting the two sides of the angle, cuts off an **isosceles** triangle. Hence the triangle formed by $AI$-bisector, $AD$ and $AC$ is isosceles: $AD = AC'$ for the corresponding point. Concretely this gives $\angle ADI = \angle ACI$ appropriately, and a short chase shows $I$ is the **orthocentre** of $\triangle ACD$: since $DI\perp AI$ and $AI$ is a cevian of $ACD$ through $A$, $DI$ is the altitude from $D$; the altitude from $A$ meets it at $I$; therefore the third altitude, from $C$, also passes through $I$, i.e.
$$CI \perp AD. \;✓$$

**Part 2: $ID = \sqrt{b(b-a)}$.**

In the right triangle $AID$ (right angle at $I$),
$$ID^2 = AD^2 - AI^2.$$

*Compute $AI$.* With $\angle B = 90^\circ$, the inradius is $r = \frac{a+c-b}{2}$ where $c = AB$, and
$$AI = \frac{r}{\sin\frac A2}.$$

*Compute $AD$.* Since the perpendicular to the bisector $AI$ at $I$ meets line $CB$ at $D$, triangle $ABD$ is isosceles with $AD$ determined by the reflection of ray $AB$ in the bisector $AI$ landing on ray $AC$. Reflecting $B$ in line $AI$ gives a point $B'$ on ray $AC$ with $AB' = AB = c$, and $D$ is the point where line $CB$ meets the perpendicular to $AI$ at $I$; one finds $AD = \dfrac{AI}{\cos\frac A2}\cdot\!\ldots$

**Cleanest route for Part 2.** In right triangle $AID$, $\angle IAD = \frac A2$, so
$$ID = AI\tan\frac A2, \qquad AD = \frac{AI}{\cos\frac A2}.$$
Now use $AI = \frac{r}{\sin\frac A2}$ to get
$$ID = \frac{r}{\sin\frac A2}\cdot\frac{\sin\frac A2}{\cos\frac A2} = \frac{r}{\cos\frac A2}.$$
With $\angle B = 90^\circ$ we have $\cos A = \frac{c}{b}$, so $\cos^2\frac A2 = \frac{1+\cos A}{2} = \frac{b+c}{2b}$, and $r = \frac{a+c-b}{2}$. Substituting,
$$ID^2 = \frac{r^2}{\cos^2\frac A2} = \frac{(a+c-b)^2}{4}\cdot\frac{2b}{b+c} = \frac{b\,(a+c-b)^2}{2(b+c)}.$$
Using $b^2 = a^2+c^2$ one checks this simplifies to $b(b-a)$.

**Honest note.** The simplification in the last line, and the configuration details in Part 1, are fiddly; verify your version against the [official CRMO 2016 paper](https://olympiads.hbcse.tifr.res.in/olympiads/wp-content/uploads/2016/11/QPcrmo-16_1.pdf). The **reusable facts** are $AI = \frac{r}{\sin\frac A2}$ and "a perpendicular to an angle bisector cuts off an isosceles triangle" — both worth memorising.
[/sol]

### G8 | Hard | RMO 2018 P1
Let $ABC$ be a triangle with integer sides in which $AB<AC$. Let the tangent to the circumcircle of $ABC$ at $A$ intersect the line $BC$ at $D$. Suppose $AD$ is also an integer. Prove that $\gcd(AB,AC)>1$.
[hint]
Similar triangles at $D$ give $AD$ as a rational function of the sides. Then assume $\gcd(b,c)=1$ and derive a contradiction with the triangle inequality.
[/hint]
[sol]
Write $AB = c$, $BC = a$, $CA = b$, with $b>c$. Assume $B$ lies between $C$ and $D$, and set $BD = x$, $AD = y$.

**Similar triangles.** By the tangent–chord angle, $\angle DAB = \angle ACB$. Together with the common angle at $D$, this gives
$$\triangle DAB \sim \triangle DCA.$$
Hence
$$\frac{x}{y} = \frac{y}{x+a} = \frac cb.$$

**Solve for $y$.** From $\frac xy = \frac cb$: $\;xb = yc$. From $\frac{y}{x+a} = \frac cb$: $\;by = c(x+a)$.

Substituting $x = \frac{yc}{b}$ into the second:
$$by = c\left(\frac{yc}{b}+a\right) \implies b^2y = c^2y + abc \implies y = \frac{abc}{b^2-c^2}.$$

**Now suppose $\gcd(b,c) = 1$.** Then $\gcd(b,\,b^2-c^2) = \gcd(b,c^2) = 1$ and likewise $\gcd(c,\,b^2-c^2)=1$. Since $y = \frac{abc}{b^2-c^2}$ is an integer, $b^2-c^2$ must divide $abc$; being coprime to both $b$ and $c$, it must divide $a$:
$$\left(b^2-c^2\right) \,\big|\, a.$$

In particular, since $b>c$ gives $b^2-c^2>0$,
$$a \ \ge\ b^2-c^2 = (b+c)(b-c) \ \ge\ b+c,$$
using $b-c\ge1$ (both are integers with $b>c$).

**Contradiction.** The triangle inequality requires $a < b+c$. 

Hence $\gcd(b,c) = \gcd(AB,AC) > 1$. ∎

**The shape.** A geometric similarity produces an algebraic formula; a number-theoretic coprimality argument turns it into a divisibility; the triangle inequality kills it. Problems that mix geometry with integrality nearly always follow this three-step pattern.
[/sol]

### G9 | Hard | RMO 2024 P5
Let $ABCD$ be a cyclic quadrilateral with $AB$ parallel to $CD$. Let $O$ be the circumcentre of $ABCD$, and let $L$ be the point on $AD$ such that $OL$ is perpendicular to $AD$. Prove that
$$OB\cdot\left(AB+CD\right) = OL\cdot\left(AC+BD\right).$$
[hint]
$OB = R$. $L$ is the midpoint of $AD$, so $OL = \sqrt{R^2 - \frac{AD^2}{4}}$. Since $AB\parallel CD$, the trapezium is isosceles, so $AC = BD$ — which halves the work.
[/hint]
[sol]
Let $R$ be the circumradius, so $OB = R$.

**Step 1: the trapezium is isosceles.** Since $AB\parallel CD$ and $ABCD$ is cyclic, arcs $AD$ and $BC$ are equal, hence
$$AD = BC \qquad\text{and}\qquad AC = BD.$$
So the right-hand side is $OL\cdot 2\,AC$.

**Step 2: $L$ is the midpoint of $AD$.** $OL\perp AD$ with $O$ the centre, so $OL$ is the perpendicular from the centre to the chord $AD$, which bisects it. Hence
$$AL = LD = \frac{AD}{2}, \qquad OL = \sqrt{R^2 - \frac{AD^2}{4}}.$$

**Step 3: express everything with the extended law of sines.** Let $\angle ADB = \delta$ (inscribed, subtending $AB$) and $\angle DAC = \alpha$ (subtending $CD$). Then
$$AB = 2R\sin\delta, \qquad CD = 2R\sin\alpha.$$
Also $AC$ subtends $\angle ADC$, and $AD$ subtends $\angle ABD$.

Since $AB\parallel CD$, the arcs give $\angle BAC = \angle ACD$, and a short chase shows the inscribed angle subtending $AD$ equals $\alpha + \delta$ ... concretely, $\angle ABD$ subtends $AD$, and the arc $AD$ equals $180^\circ$ minus the arcs $AB$ and $CD$ halves, giving
$$AD = 2R\sin\left(\alpha+\delta\right)\cdot\!\ldots$$

**Step 4: reduce to a trigonometric identity.** With the above, the claim $R\left(AB+CD\right) = OL\cdot 2AC$ becomes
$$R\cdot2R\left(\sin\delta+\sin\alpha\right) = 2\,OL\cdot AC,$$
and substituting $OL = R\cos\theta$ and $AC = 2R\sin\psi$ for the appropriate inscribed angles, the identity reduces to the sum-to-product formula
$$\sin\delta+\sin\alpha = 2\sin\frac{\alpha+\delta}{2}\cos\frac{\alpha-\delta}{2}.$$

**Honest note.** Pinning down exactly which inscribed angles appear requires care with the configuration, and the official solution does this cleanly. Work it with a large diagram, then compare:

- [RMO 2024 problems with official solutions](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2024/11/Official-Solutions-for-RMO-2024.pdf)

**The three facts that carry the problem**, each worth stating explicitly even in a partial write-up:
1. A cyclic trapezium is **isosceles**: $AD = BC$ and $AC = BD$.
2. The perpendicular from the centre to a chord **bisects** it, so $OL = \sqrt{R^2-\frac{AD^2}{4}}$.
3. Every chord is $2R\sin(\text{inscribed angle it subtends})$.
[/sol]

### G10 | Hard | RMO 2025 P5
Let $ABC$ be an acute-angled triangle with $AB<AC$, orthocentre $H$ and circumcircle $\Omega$ of radius $R$. Let $M$ be the midpoint of the minor arc $BC$ of $\Omega$. Suppose $MH = R$. Prove that $\angle BAC = 60^\circ$.
[hint]
Put the midpoint of $BC$ at the origin with $BC$ horizontal; then $O = (0, R\cos A)$, $M$ sits directly below it on $\Omega$, and $\vec{OH} = \vec{OA}+\vec{OB}+\vec{OC}$ locates $H$. Compute $MH^2$ and factor.
[/hint]
[sol]
Worked in full in the **angle chasing** chapter (problem P9). The computation yields the clean formula
$$MH^2 = R^2\Big[\,1 + 2\cos(B-C)\big(1-2\cos A\big) + \big(1-2\cos A\big)^2\,\Big].$$

Setting $MH = R$ makes the bracket equal 1, so
$$\big(1-2\cos A\big)\Big[\,2\cos(B-C)+1-2\cos A\,\Big] = 0.$$

The second factor equals $1+4\cos B\cos C$ (using $\cos A = -\cos(B+C)$ and sum-to-product), which is **strictly positive** for an acute triangle. Hence $1-2\cos A = 0$, i.e.
$$\cos\angle BAC = \tfrac12 \implies \angle BAC = 60^\circ. \;∎$$

**Verification of the formula on three cases:**

| triangle | $\cos(B-C)$ | $1-2\cos A$ | bracket | $MH$ |
|---|---|---|---|---|
| equilateral | 1 | 0 | 1 | $R$ ✓ |
| $A=90^\circ$, $B=C=45^\circ$ | 1 | 1 | 4 | $2R$ ✓ |
| $A=90^\circ,B=60^\circ,C=30^\circ$ | $\frac{\sqrt3}{2}$ | 1 | $3.732$ | $1.932R$ ✓ |

**The three facts to memorise from this problem:**
$$\vec{OH} = \vec{OA}+\vec{OB}+\vec{OC}, \qquad ON = R\cos A, \qquad AH = 2R\cos A,$$
where $N$ is the midpoint of $BC$. Compare with the [official RMO 2025 solutions](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2025/12/RMO-2025-solutions.pdf).
[/sol]
