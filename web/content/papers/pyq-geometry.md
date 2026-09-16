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
$BC$ is a diameter, so $\angle BPC = \angle BQC = 90^\circ$. Let $H'$ be the orthocentre of $APQ$ — it is **not** the orthocentre of $ABC$. Compute $\angle PH'Q$ (it is $180^\circ - A$) and compare it with the angle that chord $PQ$ subtends on $\Gamma$ from $B$.
[/hint]
[sol]
**Step 1: right angles and a similar triangle.** Since $BC$ is a diameter of $\Gamma$ and $P,Q\in\Gamma$,
$$\angle BPC = \angle BQC = 90^\circ,$$
so $CP\perp AB$ and $BQ\perp AC$. Moreover $B,P,Q,C$ all lie on $\Gamma$, so $BPQC$ is cyclic and its exterior angles give
$$\angle APQ = \angle ACB = C, \qquad \angle AQP = \angle ABC = B.$$
Thus triangle $APQ$ has the same angles as $ABC$ — in particular it is acute — and its orthocentre, call it $H'$, lies **inside** it, on the same side of line $PQ$ as $A$.

*(Warning: $H'$ is **not** the orthocentre $H$ of $ABC$. The lines $CP$ and $BQ$ are perpendicular to $AP$ and $AQ$ — sides of $APQ$ that **contain** $P$ and $Q$ — whereas the altitude of $APQ$ from $P$ must be perpendicular to the opposite side $AQ$. Confusing the two is the classic wrong turn on this problem.)*

**Step 2: the angle at the orthocentre.** In any acute triangle, the angle at the orthocentre between two vertices is the supplement of the angle at the third vertex:
$$\angle PH'Q = 180^\circ - \angle PAQ = 180^\circ - A.$$

**Step 3: the same angle seen on $\Gamma$.** We are given $H'\in\Gamma$, so $P, B, H', Q$ are concyclic. Since $P$ lies on segment $AB$, the line $PQ$ separates $A$ from $B$; and $H'$ is on $A$'s side. So $B$ and $H'$ lie on **opposite** arcs of the chord $PQ$, whence
$$\angle PH'Q = 180^\circ - \angle PBQ.$$
But $\angle PBQ = \angle ABQ$ (as $P$ is on ray $BA$), and in the right triangle $ABQ$ ($\angle AQB = 90^\circ$) this is $90^\circ - A$. Hence
$$\angle PH'Q = 180^\circ - \left(90^\circ - A\right) = 90^\circ + A.$$

**Step 4: finish.** Comparing Steps 2 and 3,
$$180^\circ - A = 90^\circ + A \implies \angle BAC = \mathbf{45^\circ}.$$
Conversely, if $A = 45^\circ$ then $\angle PH'Q = 135^\circ = 180^\circ - \angle PBQ$, so $H'$ does lie on $\Gamma$: the condition holds exactly when $\angle BAC = 45^\circ$. ∎
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

**Compare, with signed lengths.** Power of a point is a *signed* statement: taking directed lengths along the lines $BC$ and $AM$, (1) and (2) read
$$\overline{MB}\cdot\overline{MX} = \overline{MA}\cdot\overline{MG} = \overline{MC}\cdot\overline{MY}.$$
Since $M$ is the midpoint of $BC$, $\overline{MB} = -\overline{MC} \ne 0$. Dividing,
$$\overline{MX} = -\,\overline{MY}.$$
So $X$ and $Y$ are at equal distance from $M$ on **opposite** sides of it — and $X \ne Y$, because $\overline{MX} = \overline{MA}\cdot\overline{MG}/\overline{MB} \ne 0$.

Therefore **$M$ is the midpoint of $XY$**.

**Conclude.** In triangle $AXY$, the segment $AM$ joins $A$ to the midpoint $M$ of $XY$ — so $AM$ is a **median** of $AXY$. The point $G$ lies on $AM$ with
$$AG:GM = 2:1,$$
which is exactly the position of the centroid on a median.

Hence $G$ is the centroid of triangle $AXY$. ∎

**The idea.** One point ($M$) lying on two relevant lines lets you write its power with respect to two circles, and the shared factor $MG\cdot MA$ cancels. Whenever a configuration has a point on two chords of two circles, compute its power twice.
[/sol]

### G6 | Medium | CRMO 2014 P1
Let $ABC$ be a triangle and let $AD$ be the perpendicular from $A$ onto $BC$. Let $K$, $L$, $M$ be points on $AD$ such that $AK = KL = LM = MD$. Suppose the sum of the areas of the shaded regions equals the sum of the areas of the unshaded regions (the lines through $K$, $L$, $M$ parallel to $BC$, together with $AD$, divide the triangle into eight regions, shaded in a checkerboard pattern: on the $B$-side of $AD$ the first and third strips from the top are shaded, on the $C$-side the second and fourth). Prove that $BD = DC$.
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

**Impose the condition.** With the checkerboard shading — on the left ($B$-side) strips 1 and 3 are shaded, on the right ($C$-side) strips 2 and 4 —

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
Let $ABC$ be a right-angled triangle with $\angle B = 90^\circ$, and let $I$ be its incentre. Draw a line perpendicular to $AI$ at $I$, and let it intersect the line $CB$ at $D$. Prove that $CI$ is perpendicular to $AD$, and that
$$ID = \sqrt{b(b-a)}, \qquad\text{where } BC = a \text{ and } CA = b.$$
[hint]
Coordinates make both parts short: put $B$ at the origin with the legs on the axes, so $I = (r,r)$ with $r = \frac{a+c-b}{2}$. Find $D$ explicitly, then check one dot product and one distance.
[/hint]
[sol]
**Setup.** Put
$$B = (0,0), \qquad A = (0,c), \qquad C = (a,0),$$
where $c = AB$, $a = BC$ and $b = CA = \sqrt{a^2+c^2}$. For a right angle at $B$ the inradius is
$$r = \frac{a+c-b}{2}, \qquad I = (r,\,r).$$

**Locate $D$.** The direction of $AI$ is
$$\vec{AI} = I - A = (r,\ r-c).$$
A direction perpendicular to it is $(c-r,\ r)$, since
$$(r)(c-r)+(r-c)(r) = rc-r^2+r^2-rc = 0.$$
So the line through $I$ perpendicular to $AI$ is
$$\big(r+t(c-r),\ \ r+tr\big), \qquad t\in\mathbb{R}.$$

The line $CB$ is the $x$-axis, so set the $y$-coordinate to zero: $r+tr = 0$ gives $t = -1$, and
$$D = \big(r-(c-r),\ 0\big) = (2r-c,\ 0).$$
Since $2r - c = (a+c-b)-c = a-b$,
$$\boxed{D = (a-b,\ 0)}$$
Note $b>a$ (the hypotenuse is the longest side), so $a-b<0$ and $D$ lies on ray $CB$ **beyond $B$** — which fixes the configuration.

**Part 1: $CI\perp AD$.** Compute the two direction vectors:
$$\vec{CI} = I - C = (r-a,\ r), \qquad \vec{AD} = D-A = (a-b,\ -c).$$
Their dot product is
$$(r-a)(a-b) - rc.$$
Substituting $r = \frac{a+c-b}{2}$, so that $r-a = \frac{c-b-a}{2}$:
$$(r-a)(a-b)-rc = \frac{(c-b-a)(a-b) - c(a+c-b)}{2}.$$
Expanding the numerator:
$$(c-b-a)(a-b) = ca-cb-ab+b^2-a^2+ab = ca-cb+b^2-a^2,$$
$$c(a+c-b) = ca+c^2-cb,$$
so the numerator is
$$\left(ca-cb+b^2-a^2\right)-\left(ca+c^2-cb\right) = b^2-a^2-c^2 = 0,$$
using $b^2 = a^2+c^2$.

The dot product vanishes, so $CI \perp AD$. ✓

**Part 2: $ID = \sqrt{b(b-a)}$.**
$$ID^2 = \big(r-(a-b)\big)^2 + r^2.$$
Now
$$r-(a-b) = \frac{a+c-b}{2}-(a-b) = \frac{a+c-b-2a+2b}{2} = \frac{b+c-a}{2},$$
so, writing $P = b+c-a$ and $Q = a+c-b = 2r$,
$$ID^2 = \frac{P^2+Q^2}{4}.$$
Since $P+Q = 2c$ and $P-Q = 2(b-a)$,
$$P^2+Q^2 = \frac{(P+Q)^2+(P-Q)^2}{2} = \frac{4c^2+4(b-a)^2}{2} = 2c^2+2(b-a)^2.$$
Hence
$$ID^2 = \frac{2c^2+2(b-a)^2}{4} = \frac{c^2+(b-a)^2}{2}.$$
Finally substitute $c^2 = b^2-a^2$:
$$ID^2 = \frac{\left(b^2-a^2\right)+\left(b^2-2ab+a^2\right)}{2} = \frac{2b^2-2ab}{2} = b^2-ab = b(b-a).$$

Therefore
$$ID = \sqrt{b(b-a)}. \;∎$$

**Numerical check ($3,4,5$ triangle: $a = 4$, $c = 3$, $b = 5$).** Then $r = \frac{4+3-5}{2}=1$, so $I=(1,1)$ and $D = (4-5,0) = (-1,0)$.
- $\vec{CI} = (1-4,\,1) = (-3,1)$ and $\vec{AD} = (-1,-3)$; dot $= 3-3 = 0$ ✓
- $ID^2 = (1-(-1))^2+1^2 = 4+1 = 5$, and $b(b-a) = 5(5-4) = 5$ ✓

**Why coordinates were the right call.** A right angle at $B$ hands you the axes for free, and the incentre of a right triangle has the exceptionally simple form $(r,r)$. Two of the three "switch to computation" signals from the trigonometry chapter are present, and the whole problem is then four short calculations.
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
Since $AB\parallel CD$, the trapezium is isosceles, so $AC = BD$. Set $x = \angle ACD = \angle BDC$; compute the area two ways ($\tfrac12 AC^2\sin 2x$ and $\tfrac12(AB+CD)\,h$) and note $OL = R\cos x$.
[/hint]
[sol]
Let $R$ be the circumradius, so $OB = R$.

**Step 1: the trapezium is isosceles.** Since $AB\parallel CD$ and $ABCD$ is cyclic, arcs $AD$ and $BC$ are equal, hence
$$AD = BC \qquad\text{and}\qquad AC = BD.$$
So the right-hand side is $OL\cdot 2\,AC$.

**Step 2: name the key angle.** Let $x = \angle ACD$. Then also
$$\angle BAC = \angle ACD = x \quad(\text{alternate angles, } AB\parallel CD), \qquad \angle BDC = \angle BAC = x \quad(\text{both subtend arc } BC),$$
so $\angle ACD = \angle BDC = x$. Let $E = AC\cap BD$. Triangle $ECD$ has base angles $x$ at $C$ and $D$, so $x < 90^\circ$, and its exterior angle at $E$ is
$$\angle BEC = 2x.$$

**Step 3: the area two ways.** The area of a convex quadrilateral is half the product of its diagonals times the sine of the angle between them, so
$$[ABCD] = \tfrac12\,AC\cdot BD\,\sin 2x = \tfrac12\,AC^2\sin 2x.$$
On the other hand, if $h$ is the distance between the parallel lines $AB$ and $CD$, then $[ABCD] = \tfrac12\,(AB+CD)\,h$. Drop the perpendicular from $A$ to line $CD$, meeting it at $P$; in the right triangle $APC$ the angle at $C$ is $\angle ACP = \angle ACD = x$, so $h = AP = AC\sin x$. Equating the two expressions and cancelling $\tfrac12 AC\sin x \ne 0$:
$$AB + CD = 2\,AC\cos x. \tag{1}$$

**Step 4: compute $OL$.** $OL\perp AD$ with $O$ the centre, so $L$ is the midpoint of the chord $AD$ and $OL$ bisects the central angle: $\angle AOL = \tfrac12\angle AOD$. Since $x < 90^\circ$, the point $C$ lies on the major arc $AD$ (the same side of $AD$ as $O$), so the inscribed angle $\angle ACD = x$ is half the central angle: $\angle AOD = 2x$. Hence $\angle AOL = x$, and in the right triangle $AOL$,
$$OL = OA\cos x = R\cos x. \tag{2}$$

**Step 5: finish.** By (1), (2) and Step 1,
$$OB\cdot(AB+CD) = R\cdot 2\,AC\cos x = 2\,(R\cos x)\,AC = 2\,OL\cdot AC = OL\cdot(AC+BD). \;∎$$

Compare with the [official RMO 2024 solutions](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2024/11/Official-Solutions-for-RMO-2024.pdf) (this is their second solution).

**The three ideas that carry the problem.**
1. A cyclic trapezium is **isosceles**: $AC = BD$.
2. **Area two ways** — diagonals-and-sine versus bases-and-height — turns a length identity into a single angle $x$.
3. The perpendicular from the centre to a chord **bisects the central angle**, giving $OL = R\cos x$.
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
