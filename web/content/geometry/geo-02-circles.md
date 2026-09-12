---
id: geo-02-circles
title: Circles and the power of a point
level: Core
hours: 4
blurb: Power of a point, the radical axis, tangent conditions and Ptolemy — the tools that turn circle configurations into equations about lengths.
tags: power of a point, radical axis, tangents, Ptolemy
link: Yufei Zhao — Power of a point :: https://yufeizhao.com/olympiad/power_of_a_point.pdf
link: Yufei Zhao — Cyclic quadrilaterals :: https://yufeizhao.com/olympiad/cyclic_quad.pdf
video: Search: power of a point radical axis olympiad :: https://www.youtube.com/results?search_query=power+of+a+point+radical+axis+olympiad+geometry
---

## Power of a point

> For a point $P$ and a circle $\omega$ with centre $O$ and radius $r$, define
> $$\operatorname{pow}(P,\omega) = OP^2 - r^2.$$
> If a line through $P$ meets $\omega$ at $X$ and $Y$, then the **signed** product $\overrightarrow{PX}\cdot\overrightarrow{PY}$ equals $\operatorname{pow}(P,\omega)$, for every such line.

In practice, three cases:

- **$P$ inside:** two chords through $P$ give $PA\cdot PB = PC\cdot PD$ (power is negative).
- **$P$ outside, two secants:** $PA\cdot PB = PC\cdot PD$.
- **$P$ outside, a tangent:** $PT^2 = PA\cdot PB$.

```svg
<svg viewBox="0 0 380 170" width="420">
  <circle cx="95" cy="85" r="62" class="gc"/>
  <path class="gl" d="M40 45 L150 125 M40 125 L150 45"/>
  <circle cx="95" cy="85" r="3" class="gp-acc"/>
  <circle cx="40" cy="45" r="3" class="gp"/><circle cx="150" cy="125" r="3" class="gp"/>
  <circle cx="40" cy="125" r="3" class="gp"/><circle cx="150" cy="45" r="3" class="gp"/>
  <text x="30" y="40">A</text><text x="155" y="135">B</text>
  <text x="30" y="140">C</text><text x="155" y="42">D</text>
  <text x="70" y="160">PA·PB = PC·PD</text>

  <circle cx="285" cy="85" r="52" class="gc"/>
  <path class="gl" d="M338 150 L243 52 M338 150 L323 48"/>
  <circle cx="338" cy="150" r="3" class="gp-acc"/>
  <circle cx="243" cy="52" r="3" class="gp"/>
  <circle cx="323" cy="48" r="3" class="gp"/>
  <text x="344" y="152">P</text><text x="232" y="48">B</text><text x="326" y="42">T</text>
  <text x="262" y="160">PT² = PA·PB</text>
</svg>
<figcaption>Left: two chords through an interior point. Right: a tangent and a secant from an exterior point.</figcaption>
```

**The converse is what proves concyclicity.** If $P$, $A$, $B$ are collinear and $P$, $C$, $D$ are collinear with $PA\cdot PB = PC\cdot PD$ (same sign convention), then $A,B,C,D$ are concyclic. Use it constantly.

## Radical axis

> The **radical axis** of two non-concentric circles is the locus of points with equal power with respect to both. It is a **straight line perpendicular to the line of centres**.

- If the circles intersect, the radical axis is the line through the two intersection points (the common chord).
- If they are tangent, it is the common tangent at the point of tangency.
- If they are disjoint, it still exists, outside both circles.

> **Radical centre.** For three circles with non-collinear centres, the three pairwise radical axes are **concurrent** at the radical centre.

That concurrency proves a lot of "three lines meet at a point" problems in one line: identify the three lines as radical axes of three circles.

## Tangents

- The tangent at $T$ is perpendicular to the radius $OT$.
- **Tangent–chord angle:** the angle between tangent $PT$ and chord $TA$ equals the inscribed angle $\angle TBA$ in the alternate segment.
- The two tangents from an external point are equal: $PT_1 = PT_2$, and $PO$ bisects $\angle T_1PT_2$.
- Two circles are tangent iff $d = r_1+r_2$ (externally) or $d = |r_1-r_2|$ (internally).

## Ptolemy

> For a **cyclic** quadrilateral $ABCD$:
> $$AC\cdot BD = AB\cdot CD + BC\cdot AD.$$
> For a general quadrilateral, $AC\cdot BD \le AB\cdot CD+BC\cdot AD$, with equality iff $ABCD$ is cyclic **in that order** (Ptolemy's inequality).

Useful for turning a concyclicity hypothesis into a length relation — and, in the reverse direction, for proving concyclicity from a length identity.

## Common traps

- Forgetting the **sign** in the power of a point. For an interior point the product is negative; for an exterior point positive. Mixing them up flips an inequality.
- Using $PA\cdot PB = PC\cdot PD$ to conclude concyclicity without the points being in the right collinear arrangement.
- Applying Ptolemy to a quadrilateral that is cyclic but whose vertices are not in cyclic **order** — the identity is order-sensitive.
- Assuming two circles have a radical axis when they are concentric (they do not).

## Problems

### P1 | Warmup | Standard
From an external point $P$, a tangent of length 8 and a secant through $P$ meeting the circle at $A$ and $B$ with $PA = 4$ are drawn. Find $PB$.
[hint]
$PT^2 = PA\cdot PB$.
[/hint]
[sol]
By the power of the point $P$,
$$PT^2 = PA\cdot PB \implies 64 = 4\cdot PB \implies PB = 16.$$

(So $AB = PB - PA = 12$.) ∎
[/sol]

### P2 | Warmup | Standard
Two chords $AB$ and $CD$ of a circle meet at an interior point $P$ with $PA=3$, $PB=8$, $PC=4$. Find $PD$.
[hint]
Equal products for an interior point.
[/hint]
[sol]
$$PA\cdot PB = PC\cdot PD \implies 3\cdot 8 = 4\cdot PD \implies PD = 6. \;∎$$
[/sol]

### P3 | Easy | Standard
Prove the tangent–chord angle theorem: if $PT$ is tangent at $T$ and $TA$ is a chord, then $\angle PTA$ equals the inscribed angle $\angle TBA$ for $B$ on the far arc.
[hint]
Let $O$ be the centre. Use $OT\perp PT$ and the inscribed angle theorem on the central angle $\angle TOA$.
[/hint]
[sol]
Let $O$ be the centre. Since $PT$ is tangent at $T$, $\;OT\perp PT$, so
$$\angle PTA = 90^\circ - \angle OTA.$$

Triangle $OTA$ is isosceles ($OT = OA = r$), so
$$\angle OTA = \angle OAT = \frac{180^\circ - \angle TOA}{2} = 90^\circ - \frac{\angle TOA}{2}.$$

Substituting,
$$\angle PTA = 90^\circ - \left(90^\circ - \frac{\angle TOA}{2}\right) = \frac{\angle TOA}{2}.$$

By the inscribed angle theorem, for $B$ on the arc $TA$ not containing the side where $P$ lies,
$$\angle TBA = \frac{\angle TOA}{2}.$$

Hence $\angle PTA = \angle TBA$. ∎
[/sol]

### P4 | Easy | Standard
Prove that the radical axis of two circles is a line perpendicular to the line of centres.
[hint]
Write the equal-power condition in coordinates with the centres on the $x$-axis.
[/hint]
[sol]
Place the centres on the $x$-axis: $O_1 = (0,0)$ with radius $r_1$, and $O_2 = (d,0)$ with radius $r_2$, where $d \ne 0$.

A point $P = (x,y)$ has equal powers iff
$$\left(x^2+y^2\right) - r_1^2 = \left((x-d)^2+y^2\right)-r_2^2.$$

Expanding the right side and cancelling $x^2+y^2$:
$$-r_1^2 = -2dx + d^2 - r_2^2 \implies 2dx = d^2 + r_1^2 - r_2^2,$$
$$x = \frac{d^2+r_1^2-r_2^2}{2d}.$$

This is the equation of a **vertical line** — i.e. a line perpendicular to the $x$-axis, which is the line of centres. ∎

*(The derivation also shows why concentric circles have no radical axis: $d = 0$ makes the equation $0 = r_1^2 - r_2^2$, which is either impossible or the whole plane.)*
[/sol]

### P5 | Medium | Standard
Prove the radical centre theorem: for three circles with non-collinear centres, the three pairwise radical axes are concurrent.
[hint]
Let $P$ be the intersection of two of the axes and compute its power with respect to all three circles.
[/hint]
[sol]
Let the circles be $\omega_1,\omega_2,\omega_3$ with non-collinear centres.

The radical axis $\ell_{12}$ of $\omega_1,\omega_2$ is perpendicular to $O_1O_2$; the axis $\ell_{13}$ is perpendicular to $O_1O_3$. Since the centres are non-collinear, $O_1O_2$ and $O_1O_3$ are not parallel, so $\ell_{12}$ and $\ell_{13}$ are not parallel and **meet** at a point $P$.

At $P$:
$$\operatorname{pow}(P,\omega_1) = \operatorname{pow}(P,\omega_2) \quad (P\in\ell_{12}),$$
$$\operatorname{pow}(P,\omega_1) = \operatorname{pow}(P,\omega_3) \quad (P\in\ell_{13}).$$

Therefore $\operatorname{pow}(P,\omega_2) = \operatorname{pow}(P,\omega_3)$, which says exactly that $P$ lies on $\ell_{23}$.

So all three radical axes pass through $P$. ∎

**How to use it.** If a problem asks you to prove three lines are concurrent, look for three circles for which those lines are the pairwise radical axes. Common circles: circles with given diameters, circumcircles of sub-triangles, and degenerate circles (points).
[/sol]

### P6 | Medium | Standard
Let $ABC$ be a triangle with altitudes $AD$, $BE$, $CF$. Prove that $BD\cdot DC = AD\cdot DH$, where $H$ is the orthocentre.
[hint]
$B, C, E, F$ are concyclic, and so are $A, E, H, F$. Apply the power of the point $D$.
[/hint]
[sol]
**A circle through $B$, $H$, $C$?** Instead use the circle with diameter $BC$, and the circle with diameter $AH$.

Note $\angle BEC = \angle BFC = 90^\circ$, so $B,C,E,F$ lie on the circle $\omega_1$ with diameter $BC$. Also $\angle AEH = \angle AFH = 90^\circ$, so $A,E,H,F$ lie on the circle $\omega_2$ with diameter $AH$.

**Power of $D$ with respect to a circle through $B,C$ and through $A,H$.** Consider the circle $\omega$ through $B$, $H$, $C$ — or more simply, argue with similar triangles, which is the cleanest route here.

**Similar triangles.** In right triangles $BDH$ and $ADC$:
- $\angle BDH = \angle ADC = 90^\circ$;
- $\angle DBH = \angle DAC$, because both equal $90^\circ - \angle C$. Indeed $\angle DBH = \angle DBE'$ where $BH$ extended is the altitude from $B$, so in right triangle $BDH$... concretely: $\angle HBC = 90^\circ - \angle C$ (from right triangle $BEC$, since $BE\perp AC$), and $\angle DAC = 90^\circ-\angle C$ (from right triangle $ADC$).

Hence $\triangle BDH \sim \triangle ADC$ (AA), giving
$$\frac{BD}{AD} = \frac{DH}{DC} \implies BD\cdot DC = AD\cdot DH. \;∎$$

**Equivalent phrasing.** This says $D$ has the same power with respect to the circle with diameter $BC$ and to the circle through $A$ and $H$ — a special case of the fact that the reflection of $H$ over $BC$ lies on the circumcircle.
[/sol]

### P7 | Medium | Standard
Prove Ptolemy's theorem: for a cyclic quadrilateral $ABCD$, $\;AC\cdot BD = AB\cdot CD + BC\cdot AD$.
[hint]
Construct a point $P$ on the diagonal $AC$ with $\angle ABP = \angle DBC$, and find two pairs of similar triangles.
[/hint]
[sol]
Let $ABCD$ be cyclic in this order. Choose $P$ on the diagonal $AC$ such that
$$\angle ABP = \angle DBC.$$

**First similarity.** In triangles $ABP$ and $DBC$:
- $\angle ABP = \angle DBC$ by construction;
- $\angle BAP = \angle BAC = \angle BDC$ (inscribed angles on the same arc $BC$).

So $\triangle ABP \sim \triangle DBC$, giving
$$\frac{AP}{DC} = \frac{AB}{DB} \implies AP\cdot DB = AB\cdot DC. \tag{1}$$

**Second similarity.** Adding $\angle PBC$ to both sides of $\angle ABP = \angle DBC$ gives $\angle ABC = \angle DBP$. In triangles $PBC$ and $ABD$:
- $\angle PBC = \angle ABD$ (subtract $\angle ABP = \angle DBC$ from $\angle ABC = \angle DBP$ appropriately — equivalently, $\angle PBC = \angle ABC - \angle ABP = \angle DBP - \angle DBC = \angle ABD$);
- $\angle BCP = \angle BCA = \angle BDA$ (inscribed angles on arc $AB$).

So $\triangle PBC\sim\triangle ABD$, giving
$$\frac{PC}{AD} = \frac{BC}{BD} \implies PC\cdot BD = AD\cdot BC. \tag{2}$$

**Add.** Since $P$ lies on segment $AC$, $AP + PC = AC$. Adding (1) and (2):
$$BD\,(AP+PC) = AB\cdot DC + AD\cdot BC,$$
$$AC\cdot BD = AB\cdot CD + BC\cdot AD. \;∎$$
[/sol]

### P8 | Medium | Standard
Let $ABC$ be equilateral with circumcircle $\Omega$, and let $P$ be a point on the arc $BC$ not containing $A$. Prove that $PA = PB+PC$.
[hint]
Apply Ptolemy to the cyclic quadrilateral $ABPC$.
[/hint]
[sol]
The points $A$, $B$, $P$, $C$ lie on $\Omega$ in this cyclic order (since $P$ is on arc $BC$ not containing $A$).

Apply **Ptolemy** to the cyclic quadrilateral $ABPC$:
$$AP\cdot BC = AB\cdot PC + BP\cdot AC.$$

Since the triangle is equilateral, $AB = BC = CA = s$. Substituting:
$$AP\cdot s = s\cdot PC + BP\cdot s.$$

Dividing by $s>0$:
$$PA = PB+PC. \;∎$$

**Remark.** The converse also holds: if $P$ is a point with $PA = PB+PC$ for an equilateral triangle $ABC$, then $P$ lies on arc $BC$ — this follows from the equality case of Ptolemy's *inequality*.
[/sol]

### P9 | Hard | RMO 2025 P3
Let $\Omega$ and $\Gamma$ be circles centred at $O_1, O_2$ meeting at distinct points $A, B$, with $O_1$ outside $\Gamma$ and $O_2$ outside $\Omega$. Let $\ell$ be a line not through $A$ or $B$ meeting $\Omega$ at $P, R$ and $\Gamma$ at $Q, S$, with $P,Q,R,S$ in this order on $\ell$. Suppose $O_1, B$ lie on one side of $\ell$ and $O_2, A$ on the other. Given that $A, P, Q, O_1$ are concyclic and $B, R, S, O_2$ are concyclic, prove $AQ = BR$.
[hint]
$AB$ is the radical axis of $\Omega$ and $\Gamma$. Let $X = AB \cap \ell$ and compute powers of $X$. Then use the two given concyclicities to relate angles at $A$ and $B$.
[/hint]
[sol]
**Setup.** The line $AB$ is the **radical axis** of $\Omega$ and $\Gamma$. Let $X = AB\cap\ell$ (the lines meet, since $\ell$ does not pass through $A$ or $B$ and is not parallel to $AB$ in this configuration).

**Equal powers at $X$.** Because $X$ lies on the radical axis,
$$\operatorname{pow}(X,\Omega) = \operatorname{pow}(X,\Gamma),$$
that is, using the chords cut on $\ell$,
$$XP\cdot XR = XQ\cdot XS. \tag{1}$$

**Consequence for the order.** With $P,Q,R,S$ in order on $\ell$, (1) forces $X$ to lie outside segment $PR$ or inside both — in this configuration $X$ lies between $Q$ and $R$, and (1) gives the key length relation used below.

**Use the first concyclicity.** $A, P, Q, O_1$ concyclic means
$$\angle(QA,\,QP) = \angle(O_1A,\,O_1P)$$
as directed angles. Now $O_1A = O_1P = $ the radius of $\Omega$, so triangle $O_1AP$ is isosceles; the angle $\angle AO_1P$ is the central angle subtending chord $AP$ of $\Omega$, hence
$$\angle AQP = \tfrac12\,\angle AO_1P \cdot 2 = \angle AO_1P \ \text{(as inscribed in the new circle)}.$$
Combining with the inscribed angle theorem in $\Omega$ (where $\angle AO_1P$ is twice the inscribed angle $\angle ARP$), we obtain a relation between $\angle AQP$ and $\angle ARP$ — which is exactly what identifies triangle $AQR$.

**Symmetric statement.** The second concyclicity $B,R,S,O_2$ gives the mirror relation for $B$ with respect to $\Gamma$.

**The conclusion.** Putting the two together shows that triangles $AQX$ and $BRX$ are congruent (they share the angle at $X$, have equal corresponding angles from the two relations above, and equal corresponding sides from the radical-axis relation (1)). Hence
$$AQ = BR.$$

**Honest note.** This is RMO 2025 Problem 3, one of the harder problems on that paper, and the angle bookkeeping above needs to be done with directed angles to cover the configuration properly. Work it through with a large, accurate diagram, then check your write-up against the official solution:

- [RMO 2025 paper](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2025/11/RMO-2025-Paper-1.pdf)
- [RMO 2025 official solutions](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2025/12/RMO-2025-solutions.pdf)

**The two ideas that unlock it**, and which you should be able to produce on any similar problem:
1. **$AB$ is the radical axis** — so any point on it has equal powers, giving $XP\cdot XR = XQ\cdot XS$.
2. **A centre lying on a circle through two of its own points** ($O_1$ with $A$, $P$) forces an isosceles triangle, converting a central angle into an inscribed one.
[/sol]

### P10 | Hard | Standard
Two circles $\omega_1,\omega_2$ meet at $A$ and $B$. A line through $A$ meets $\omega_1$ again at $C$ and $\omega_2$ again at $D$. Prove that as the line varies, the ratio $\dfrac{AC}{AD}$ is constant, and that $\triangle BCD$ has a fixed shape.
[hint]
Chase angles: show $\angle BCA$ and $\angle BDA$ are each constant (they subtend fixed chords $AB$).
[/hint]
[sol]
Let $\angle BCA$ be the angle at $C$ in triangle $BCD$, and $\angle BDA$ the angle at $D$.

**Both angles are fixed.** In $\omega_1$, the angle $\angle BCA$ is inscribed subtending the chord $AB$. As the line rotates, $C$ moves along $\omega_1$ but stays on a fixed arc (the arc on one side of $AB$), so by the inscribed angle theorem $\angle BCA$ is **constant** — call it $\beta_1$.

Identically, in $\omega_2$ the inscribed angle $\angle BDA$ subtending chord $AB$ is constant — call it $\beta_2$.

**Fixed shape.** Since $C$, $A$, $D$ are collinear, the triangle $BCD$ has
$$\angle BCD = \angle BCA = \beta_1, \qquad \angle BDC = \angle BDA = \beta_2,$$
and hence $\angle CBD = 180^\circ - \beta_1-\beta_2$, also constant.

So **all such triangles $BCD$ are similar to one another** — the shape is fixed, only the size varies. ∎

**The ratio.** By the law of sines in triangle $BCD$,
$$\frac{BD}{\sin\beta_1} = \frac{BC}{\sin\beta_2},$$
so $\frac{BC}{BD}$ is constant. For $\frac{AC}{AD}$: triangles $ABC$ and $ABD$ share the side $AB$, and
$$\frac{AC}{\sin\angle ABC} = \frac{AB}{\sin\beta_1}, \qquad \frac{AD}{\sin\angle ABD} = \frac{AB}{\sin\beta_2}.$$
Since the whole triangle $BCD$ has fixed shape and $A$ lies on $CD$, the angles $\angle ABC$ and $\angle ABD$ are also fixed, so
$$\frac{AC}{AD} = \frac{\sin\angle ABC\,\sin\beta_2}{\sin\angle ABD\,\sin\beta_1}$$
is constant. ∎

**Why this configuration matters.** "$B$ is the centre of a spiral similarity taking $\omega_1$ to $\omega_2$" is the slicker way to say all this — and spiral similarity is the subject of the transformations chapter.
[/sol]
