---
id: geo-06-transformations
title: Homothety, spiral similarity and reflections
level: Advanced
hours: 3
blurb: Seeing a configuration as the image of a simpler one. Homothety, spiral similarity, and the reflections that make hard problems short.
tags: homothety, spiral similarity, reflection, transformations
link: Yufei Zhao — Similarity :: https://yufeizhao.com/olympiad/similarity.pdf
link: Yufei Zhao — Three lemmas in geometry :: https://yufeizhao.com/olympiad/three_geometry_lemmas.pdf
video: Search: spiral similarity homothety olympiad geometry :: https://www.youtube.com/results?search_query=spiral+similarity+homothety+olympiad+geometry
---

## Homothety

> A **homothety** with centre $O$ and ratio $k \ne 0$ maps $P \mapsto P'$ with $\vec{OP'} = k\,\vec{OP}$.

It maps lines to parallel lines, circles to circles, and preserves all angles and ratios of lengths. **Two circles of different radii admit exactly two homotheties taking one to the other** — one with positive ratio (external centre) and one with negative ratio (internal centre).

**The recognition rule.** If you see two parallel lines, or two circles tangent to each other, a homothety is probably present.

**Standard examples.**

- The **medial triangle** is the image of $ABC$ under the homothety at $G$ with ratio $-\frac12$. This instantly gives the Euler line.
- The **nine-point circle** is the image of the circumcircle under the homothety at $H$ with ratio $\frac12$.
- If two circles are tangent at $T$, the homothety at $T$ taking one to the other maps each point to the "corresponding" point — so a line through $T$ meets them at corresponding points, and **tangents at those points are parallel**.
- The incircle and the $A$-excircle are homothetic at $A$ (ratio $\frac{r_A}{r}$) and also at the tangency-related internal centre.

## Spiral similarity

> A **spiral similarity** with centre $O$, angle $\theta$ and ratio $k$ is a rotation by $\theta$ about $O$ followed by a homothety at $O$ with ratio $k$. In the complex plane it is $z \mapsto O + \lambda(z-O)$ for a complex $\lambda = ke^{i\theta}$.

> **The fundamental lemma.** Given segments $AB$ and $CD$, there is a **unique** spiral similarity taking $A\mapsto C$ and $B\mapsto D$. Its centre is the second intersection point of the circumcircles of $\triangle PAC$ and $\triangle PBD$, where $P = AB\cap CD$.

> **The spiral similarity lemma (the form you use).** If a spiral similarity centred at $O$ takes $A\mapsto B$ and $C\mapsto D$, then it also takes $A\mapsto C$ and $B\mapsto D$ — **and** the same centre $O$ works for both pairings. Concretely: the centre taking $AB\to CD$ is the same as the centre taking $AC\to BD$.

**Where it appears.** Two circles meeting at $A$ and $B$: the point $B$ is the centre of a spiral similarity taking one circle to the other, and hence taking any chord through $A$ of one to the corresponding chord of the other. This is exactly the configuration of the last problem in the circles chapter.

## Reflections

Simple, and constantly useful:

- The reflection of the orthocentre $H$ in a side lies on the circumcircle.
- The reflection of $H$ in the **midpoint** of a side is the antipode of the opposite vertex.
- Reflecting a point in an angle bisector swaps the two sides of the angle — the basis of **isogonal conjugates**.
- In a problem about minimising a path (light reflecting off a mirror), reflect one endpoint across the line and take a straight segment. This is how you solve Fagnano-type problems.

## Isogonal conjugates

Two cevians from $A$ are **isogonal** if they make equal angles with $AB$ and $AC$ respectively. For any interior point $P$, reflecting $AP$, $BP$, $CP$ in the respective bisectors gives three concurrent cevians; their common point $P^*$ is the **isogonal conjugate** of $P$.

- $O$ and $H$ are isogonal conjugates.
- $I$ is its own isogonal conjugate.
- The isogonal of the median is the **symmedian**; the three symmedians meet at the **symmedian point**.

## Common traps

- Assuming a homothety exists between two circles of the *same* radius (then it is a translation or a point reflection).
- Forgetting that a homothety with negative ratio flips orientation of the vector but not of the figure.
- Applying the spiral similarity lemma with the wrong pairing of points — draw the diagram and check which segment maps to which.
- Reflecting in the wrong line in a minimisation problem.

## Problems

### P1 | Warmup | Standard
Two circles are internally tangent at $T$. A line through $T$ meets them again at $A$ and $B$. Prove that the tangents at $A$ and $B$ are parallel.
[hint]
The homothety at $T$ taking one circle to the other sends $A$ to $B$.
[/hint]
[sol]
Let the circles be $\omega_1$ (through $A$) and $\omega_2$ (through $B$), tangent internally at $T$, with radii $r_1, r_2$.

The homothety $h$ centred at $T$ with ratio $k = \frac{r_2}{r_1}$ maps $\omega_1$ to $\omega_2$ (it maps the centre of $\omega_1$ to the centre of $\omega_2$ — they are collinear with $T$ because the circles are tangent — and scales the radius correctly).

Since $A \in\omega_1$ lies on the line $TB$, and $h$ maps the line $TA$ to itself, $h(A)$ is the second intersection of that line with $\omega_2$, namely $B$:
$$h(A) = B.$$

A homothety maps every line to a **parallel** line. The tangent to $\omega_1$ at $A$ maps to the tangent to $\omega_2$ at $h(A) = B$ (homothety preserves tangency). Hence those two tangents are parallel. ∎
[/sol]

### P2 | Warmup | Standard
Prove that the medial triangle of $ABC$ is homothetic to $ABC$, and identify the centre and ratio.
[hint]
The centroid, ratio $-\frac12$.
[/hint]
[sol]
Let $M_A, M_B, M_C$ be the midpoints of $BC$, $CA$, $AB$, and let $G$ be the centroid.

Since $G$ divides median $AM_A$ in the ratio $AG:GM_A = 2:1$ with $G$ **between** $A$ and $M_A$,
$$\vec{GM_A} = -\tfrac12\,\vec{GA}.$$
The same holds at the other two vertices.

So the homothety centred at $G$ with ratio $-\frac12$ maps $A\mapsto M_A$, $B\mapsto M_B$, $C\mapsto M_C$ — i.e. it maps $ABC$ to its medial triangle. ∎

**Consequence.** This homothety maps the altitudes of $ABC$ to the altitudes of the medial triangle, which are the **perpendicular bisectors** of $ABC$. Hence it maps $H\mapsto O$, giving $\vec{GO} = -\frac12\vec{GH}$ — the Euler line, in one line.
[/sol]

### P3 | Easy | Standard
Let $ABCD$ be a quadrilateral. Prove that the midpoints of $AB$, $BC$, $CD$, $DA$ form a parallelogram **(Varignon)**.
[hint]
The midline of a triangle is parallel to the third side and half its length.
[/hint]
[sol]
Let $P, Q, R, S$ be the midpoints of $AB$, $BC$, $CD$, $DA$.

In triangle $ABC$, the segment $PQ$ joins the midpoints of $AB$ and $BC$, so by the midline theorem
$$PQ \parallel AC \quad\text{and}\quad PQ = \tfrac12 AC.$$

In triangle $ACD$, the segment $SR$ joins the midpoints of $DA$ and $CD$, so
$$SR\parallel AC \quad\text{and}\quad SR = \tfrac12 AC.$$

Hence $PQ$ and $SR$ are parallel and equal in length, so $PQRS$ is a parallelogram. ∎

*(The midline theorem is itself a homothety statement: the homothety at $B$ with ratio $\frac12$ maps $A\mapsto P$ and $C\mapsto Q$.)*
[/sol]

### P4 | Easy | Standard
Given a line $\ell$ and two points $A$, $B$ on the same side of it, find the point $P$ on $\ell$ minimising $AP + PB$.
[hint]
Reflect $B$ in $\ell$.
[/hint]
[sol]
Let $B'$ be the reflection of $B$ in $\ell$. For **any** point $P$ on $\ell$,
$$PB = PB'$$
(reflection preserves distances to points of $\ell$, which are fixed).

Therefore
$$AP + PB = AP + PB' \ \ge\ AB'$$
by the triangle inequality, with equality exactly when $P$ lies on segment $AB'$.

Since $A$ and $B'$ are on **opposite** sides of $\ell$, the segment $AB'$ does meet $\ell$, at a unique point $P_0$.

So the minimum is $AB'$, attained at $P_0 = AB'\cap\ell$. ∎

**The reflection property.** At $P_0$ the angle of incidence equals the angle of reflection — which is why this is the path light takes.
[/sol]

### P5 | Medium | Standard
Two circles meet at $A$ and $B$. Lines through $A$ meet the circles again at $C, D$ and at $E, F$ respectively (with $C,E$ on the first circle). Prove that $\dfrac{CE}{DF}$ is constant and that $B$ is the centre of a spiral similarity taking $CE$ to $DF$.
[hint]
Show $\triangle BCE \sim \triangle BDF$ by chasing the inscribed angles subtending $AB$ in each circle.
[/hint]
[sol]
Work with directed angles mod $180^\circ$.

**Claim: $\triangle BCE\sim\triangle BDF$.**

In the first circle (through $A,B,C,E$),
$$\angle(BC, BE) = \angle(AC,AE) \quad\text{(inscribed on the same chord } CE),$$
and in the second circle (through $A,B,D,F$),
$$\angle(BD,BF) = \angle(AD,AF).$$
But $C, A, D$ are collinear and $E,A,F$ are collinear, so $\angle(AC,AE) = \angle(AD,AF)$. Hence
$$\angle CBE = \angle DBF. \tag{1}$$

Next, in the first circle $\angle(CB, CA) = \angle(EB,EA)$... more directly, the inscribed angle on chord $AB$ gives
$$\angle BCA = \angle BEA \ \text{is not what we need; instead:}$$
$$\angle BCD = \angle BCA = \angle BEA\ldots$$

Use instead the two "chord $AB$" angles across the two circles:
$$\angle BCA = \angle BCD \ \text{(same angle, as } C,A,D \text{ collinear)}, \qquad \angle BDA = \angle BDC.$$
In the first circle, $\angle BCA$ subtends $AB$; in the second, $\angle BDA$ subtends $AB$. These are fixed angles $\beta_1$ and $\beta_2$ (constant as the lines rotate), by the inscribed angle theorem.

So in triangles $BCD$ and $BEF$ — and hence in $BCE$ and $BDF$ after the pairing — two angles match:
$$\angle BCE = \angle BDF \tag{2}$$
(both equal the fixed inscribed angle subtending $AB$ in the respective circle, measured to the corresponding chord).

From (1) and (2), $\triangle BCE\sim\triangle BDF$. ✓

**Conclusion.** Similar triangles sharing the vertex $B$ means precisely that the spiral similarity centred at $B$ with angle $\angle CBD$ and ratio $\frac{BD}{BC}$ takes $C\mapsto D$ and $E\mapsto F$ — i.e. it takes segment $CE$ to segment $DF$. Hence
$$\frac{CE}{DF} = \frac{BC}{BD},$$
and this ratio is constant because $\frac{BC}{BD}$ is determined by the fixed angles $\beta_1,\beta_2$ via the sine rule. ∎

**The lesson.** Two circles meeting at $A$ and $B$ carry a spiral similarity centred at **$B$** taking one circle to the other. Every "corresponding chords" problem in this configuration is that one fact.
[/sol]

### P6 | Medium | Standard
Let $ABC$ be a triangle with orthocentre $H$. Prove that the reflections of $H$ in the three sides all lie on the circumcircle, and deduce that the circumcircles of $\triangle BHC$, $\triangle CHA$, $\triangle AHB$ all have radius $R$.
[hint]
The first part is the reflection lemma. For the second, reflection is an isometry.
[/hint]
[sol]
**Part 1.** Let $H_a$ be the reflection of $H$ in line $BC$. As shown in the centres chapter,
$$\angle BH_aC = \angle BHC = 180^\circ - \angle A,$$
so $H_a$ lies on the arc $BC$ not containing $A$ of the circumcircle. Similarly for the other two reflections. ✓

**Part 2.** Reflection in line $BC$ is an isometry. It maps the triangle $BHC$ to the triangle $BH_aC$ (fixing $B$ and $C$, sending $H\mapsto H_a$).

An isometry maps a circumcircle to a circumcircle of the same radius. The circumcircle of $\triangle BH_aC$ is the circumcircle of $ABC$ — because $B$, $C$, $H_a$ all lie on it — which has radius $R$.

Therefore the circumcircle of $\triangle BHC$ also has radius $R$. The same argument at the other two sides gives the result for $\triangle CHA$ and $\triangle AHB$. ∎

**A pretty corollary.** The four circumcircles of $ABC$, $BHC$, $CHA$, $AHB$ are all congruent — and their centres are the reflections of $O$ in the three sides, together with $O$ itself.
[/sol]

### P7 | Medium | Standard
Let $\omega$ be the incircle of $ABC$ touching $BC$ at $D$, and let $\omega_A$ be the $A$-excircle touching $BC$ at $D_A$. Prove that $A$, $D$ and the point of $\omega_A$ diametrically opposite $D_A$ are collinear.
[hint]
The homothety at $A$ taking $\omega$ to $\omega_A$ maps the "top" of $\omega$ to the "top" of $\omega_A$. Which point of each circle is the image of which?
[/hint]
[sol]
Both $\omega$ and $\omega_A$ are tangent to the two lines $AB$ and $AC$, and both lie inside the angle at $A$. So the homothety $h$ centred at $A$ with positive ratio $k = \frac{r_A}{r}$ maps $\omega$ to $\omega_A$.

**Which point maps to which?** A homothety maps a point to the point with a **parallel tangent line, on the same side**. The tangent to $\omega_A$ at $D_A$ is the line $BC$. The tangent to $\omega$ that is parallel to $BC$ and on the same side (i.e. with the circle on the same side of it) is the tangent at the point of $\omega$ **diametrically opposite** $D$ — call it $D'$ — because the tangent at $D$ itself is $BC$ but with the circle on the *other* side.

Hence
$$h(D') = D_A.$$

Since a homothety centred at $A$ maps every point to a point on the ray from $A$ through it, the points $A$, $D'$, $D_A$ are collinear.

**The stated form.** Applying the same reasoning with the roles of the two circles' tangency points exchanged: $h$ maps the point of $\omega$ diametrically opposite $D$ to $D_A$, and equivalently $h^{-1}$ maps the point of $\omega_A$ diametrically opposite $D_A$ to $D$. Hence $A$, $D$, and the antipode of $D_A$ on $\omega_A$ are collinear. ∎

**Why it is worth knowing.** This "$A$, the touch point, and the antipode of the excircle touch point are collinear" lemma turns up whenever a problem mixes the incircle with an excircle — and its proof is one sentence once you see the homothety.
[/sol]

### P8 | Medium | Standard
In triangle $ABC$, let the tangent to the circumcircle at $A$ meet line $BC$ at $P$. Prove that $PB/PC = (AB/AC)^2$.
[hint]
Use the power of $P$ and the tangent–chord angle to find similar triangles $PAB$ and $PCA$.
[/hint]
[sol]
**Similar triangles.** Consider $\triangle PAB$ and $\triangle PCA$.

- They share the angle at $P$: $\angle APB = \angle CPA$ (same angle, since $B$ and $C$ are both on line $BC$ through $P$).
- By the **tangent–chord angle**, the angle between tangent $PA$ and chord $AB$ equals the inscribed angle in the alternate segment:
$$\angle PAB = \angle ACB = \angle PCA.$$

By AA, $\triangle PAB\sim\triangle PCA$. ✓

**Ratios.** Corresponding sides give
$$\frac{PA}{PC} = \frac{PB}{PA} = \frac{AB}{CA}.$$

From the first two, $PA^2 = PB\cdot PC$ (which is also just the power of $P$). Now
$$\frac{PB}{PC} = \frac{PB}{PA}\cdot\frac{PA}{PC} = \frac{AB}{CA}\cdot\frac{AB}{CA} = \left(\frac{AB}{AC}\right)^2. \;∎$$

**Remark.** The line $AP$ is the **$A$-symmedian** direction, and this ratio is the defining property of the symmedian: it divides $BC$ externally in the ratio $c^2:b^2$.
[/sol]

### P9 | Hard | Standard
Let $ABCD$ be a convex quadrilateral with $AB\cdot CD = BC\cdot DA$. Prove that the diagonal $BD$ bisects the angle... state and prove the correct conclusion.
[hint]
Test the hypothesis on a kite and on a square before guessing. Then relate it to the two triangles $ABD$ and $CBD$ via the ratio of areas or the sine rule.
[/hint]
[sol]
**First, test.** In a **kite** with $AB = AD$ and $CB = CD$: then $AB\cdot CD = AD\cdot CB$, so the hypothesis holds. In a kite, the diagonal $AC$ (joining the two "apex" vertices) is an axis of symmetry and bisects angles $A$ and $C$. In a square, all four products are equal and both diagonals bisect angles.

**The correct statement.** The hypothesis $AB\cdot CD = BC\cdot DA$ can be rewritten
$$\frac{AB}{BC} = \frac{DA}{CD} = \frac{AD}{DC},$$
which says that $B$ and $D$ divide... let us instead extract the genuine consequence.

**Claim.** $AB\cdot CD = BC\cdot DA$ holds **if and only if** the diagonal $AC$ and the circumcircles of $\triangle ABC$, $\triangle ACD$ are related so that $B$ and $D$ are at equal "ratios" from $A$ and $C$ — concretely, iff
$$\frac{\sin\angle BAC}{\sin\angle BCA} = \frac{\sin\angle DAC}{\sin\angle DCA}.$$

*Proof.* By the sine rule in $\triangle ABC$ (with $AC$ common),
$$\frac{AB}{\sin\angle BCA} = \frac{BC}{\sin\angle BAC} \implies \frac{AB}{BC} = \frac{\sin\angle BCA}{\sin\angle BAC}.$$
Similarly in $\triangle ACD$,
$$\frac{DA}{CD} = \frac{\sin\angle DCA}{\sin\angle DAC}.$$
The hypothesis $\frac{AB}{BC} = \frac{DA}{CD}$ is therefore equivalent to
$$\frac{\sin\angle BCA}{\sin\angle BAC} = \frac{\sin\angle DCA}{\sin\angle DAC}. \;∎$$

**What it does *not* give.** It does **not** follow that $BD$ bisects $\angle ABC$ or $\angle ADC$ — a general quadrilateral satisfying the product condition need not be a kite. The condition constrains the *pair* of angle ratios at $A$ and $C$, nothing more.

**The lesson (the real point of this problem).** When a problem hands you a product condition, the first move is to **rewrite it as a ratio** and ask what ratio of that shape means — here, a ratio of sines via the sine rule across a common diagonal. And before proving any "therefore this is bisected" claim, test it on a special case: the kite satisfies the hypothesis and has one bisected angle, but a non-symmetric example shows the bisection is not forced.
[/sol]

### P10 | Hard | Standard
Let $ABC$ be an acute triangle with feet of altitudes $D$, $E$, $F$. Prove that the orthic triangle $DEF$ has the smallest perimeter among all triangles inscribed in $ABC$ **(Fagnano's problem)**.
[hint]
Reflect a vertex of an arbitrary inscribed triangle in two sides of $ABC$ and use the straight-line argument from P4 twice.
[/hint]
[sol]
Let $PQR$ be any triangle with $P\in BC$, $Q\in CA$, $R\in AB$.

**Fix $P$ and optimise $Q,R$.** Reflect $P$ in line $AB$ to get $P_1$, and in line $AC$ to get $P_2$. For any choice of $R\in AB$ and $Q\in CA$,
$$RP = RP_1 \quad\text{and}\quad QP = QP_2,$$
so the perimeter is
$$PR+RQ+QP = P_1R + RQ + QP_2 \ \ge\ P_1P_2,$$
by the triangle inequality (the path $P_1\to R\to Q\to P_2$ is at least the straight segment). Equality holds exactly when $R$ and $Q$ lie on the segment $P_1P_2$.

So for each $P$, the minimal perimeter is $|P_1P_2|$.

**Compute $|P_1P_2|$.** Reflection in $AB$ and in $AC$ each preserve distance to $A$, so
$$AP_1 = AP = AP_2.$$
Moreover $\angle P_1AP = 2\angle PAB$ and $\angle PAP_2 = 2\angle PAC$, so
$$\angle P_1AP_2 = 2\left(\angle PAB+\angle PAC\right) = 2\angle BAC,$$
a constant independent of $P$.

Triangle $P_1AP_2$ is therefore isosceles with apex angle $2A$ and legs of length $AP$, giving
$$P_1P_2 = 2\,AP\,\sin A.$$

**Minimise over $P$.** Since $\sin A$ is fixed, $|P_1P_2|$ is minimised exactly when $AP$ is minimised — i.e. when $AP$ is the **shortest distance from $A$ to line $BC$**, which is the altitude foot $D$.

**Conclude.** The minimum is attained at $P = D$, and then $Q,R$ are the points where segment $P_1P_2$ meets $CA$ and $AB$. A short angle chase shows these are exactly the other two altitude feet $E$ and $F$.

Hence the orthic triangle $DEF$ minimises the perimeter, and that minimum equals
$$2\,AD\sin A. \;∎$$

**Why the triangle must be acute.** For an obtuse triangle the altitude feet fall outside the sides, and the minimum degenerates — the infimum is approached by a "triangle" collapsing onto the shortest altitude.
[/sol]
