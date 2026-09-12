---
id: geo-01-angle-chasing
title: Angle chasing
level: Foundation
hours: 4
blurb: The inscribed angle theorem, cyclic quadrilaterals, and the discipline of directed angles — the foundation everything else in geometry is built on.
tags: angles, inscribed angle, cyclic quadrilateral, directed angles
link: Yufei Zhao — Cyclic quadrilaterals: the big picture :: https://yufeizhao.com/olympiad/cyclic_quad.pdf
link: MOTP — Geometry :: https://jpsaha.github.io/MOTP/geo/
video: Search: angle chasing olympiad geometry :: https://www.youtube.com/results?search_query=angle+chasing+cyclic+quadrilateral+olympiad+geometry
---

## Why angle chasing first

Roughly a third of RMO geometry problems are *pure* angle chasing, and most of the rest begin with it. It is also the most mechanical part of the subject: with enough practice, you stop searching and start seeing.

The whole toolkit is four facts.

## The four facts

**1. Angles in a triangle sum to $180^\circ$.** And the exterior angle equals the sum of the two remote interior angles.

**2. Isosceles triangles.** $AB=AC \iff \angle ABC = \angle ACB$. Half of all angle chases start here.

**3. The inscribed angle theorem.**

> An inscribed angle is half the central angle subtending the same arc:
> $$\angle BAC = \tfrac12\,\angle BOC.$$
> Consequently, **angles subtending the same arc from the same side are equal**, and an angle in a semicircle is $90^\circ$.

```svg
<svg viewBox="0 0 240 175" width="330">
  <circle cx="110" cy="95" r="72" class="gc"/>
  <path class="gl" d="M85.4 27.3 L39.1 107.5 M85.4 27.3 L177.7 119.6"/>
  <path class="gl-acc" d="M110 95 L39.1 107.5 M110 95 L177.7 119.6"/>
  <path class="gl-thin" d="M39.1 107.5 L177.7 119.6"/>
  <circle cx="85.4" cy="27.3" r="3" class="gp"/>
  <circle cx="39.1" cy="107.5" r="3" class="gp"/>
  <circle cx="177.7" cy="119.6" r="3" class="gp"/>
  <circle cx="110" cy="95" r="3" class="gp-acc"/>
  <text x="80" y="20">A</text>
  <text x="22" y="113">B</text>
  <text x="185" y="126">C</text>
  <text x="112" y="90">O</text>
</svg>
<figcaption>Inscribed angle ∠BAC is half the central angle ∠BOC on the same arc BC.</figcaption>
```

**4. Cyclic quadrilaterals.** $ABCD$ is cyclic **iff** any of:

- $\angle A + \angle C = 180^\circ$ (opposite angles supplementary);
- $\angle BAC = \angle BDC$ (equal angles subtending $BC$ from the same side);
- the exterior angle at $C$ equals the interior angle at $A$;
- $PA\cdot PC = PB\cdot PD$ for the intersection $P$ of the diagonals (power of a point — next chapter).

```svg
<svg viewBox="0 0 240 190" width="330">
  <circle cx="110" cy="95" r="72" class="gc"/>
  <path class="gl" d="M122.5 165.9 L40.7 107.3 L122.5 24.1 L177.7 119.6 Z"/>
  <path class="gl-thin" d="M122.5 165.9 L122.5 24.1 M40.7 107.3 L177.7 119.6"/>
  <circle cx="122.5" cy="165.9" r="3" class="gp"/>
  <circle cx="40.7" cy="107.3" r="3" class="gp"/>
  <circle cx="122.5" cy="24.1" r="3" class="gp"/>
  <circle cx="177.7" cy="119.6" r="3" class="gp"/>
  <text x="126" y="180">A</text>
  <text x="23" y="112">B</text>
  <text x="126" y="19">C</text>
  <text x="185" y="126">D</text>
</svg>
<figcaption>Cyclic ABCD: ∠A + ∠C = 180°, and ∠BAC = ∠BDC.</figcaption>
```

> **The single most useful move in olympiad geometry** is: *spot four points that ought to be concyclic, prove it with equal angles, then harvest the other equal angles the circle gives you.*

## Directed angles

Configuration issues — "but what if the point is on the other side?" — sink more geometry solutions than any other error. **Directed angles modulo $180^\circ$** fix almost all of them.

Write $\angle(\ell, m)$ for the angle of rotation taking line $\ell$ to line $m$, measured mod $180^\circ$. Then:

- $\angle(\ell,m) + \angle(m,n) = \angle(\ell,n)$ — angles add exactly, with no case analysis.
- $\angle(\ell,m) = -\angle(m,\ell)$.
- **$A, B, C, D$ concyclic or collinear $\iff \angle(CA,CB) = \angle(DA,DB)$.**

That last line replaces the four separate cyclic-quadrilateral criteria with one statement that is true in every configuration.

**The catch:** directed angles cannot express "this angle is $60^\circ$" unambiguously (it could be $60^\circ$ or $120^\circ$ as an ordinary angle), and they cannot handle inequalities or arc-length comparisons. So use them for *concyclicity and collinearity*, and switch back to ordinary angles when you need a specific value.

At RMO, either convention is acceptable — but **say which one you are using**, and if you use ordinary angles, state the configuration you are assuming.

## The standard chase

A worked pattern you will use constantly:

> **Claim.** In triangle $ABC$ with altitudes $BE$ and $CF$, the points $B, C, E, F$ are concyclic.
>
> *Proof.* $\angle BEC = 90^\circ$ (as $BE\perp AC$) and $\angle BFC = 90^\circ$ (as $CF\perp AB$). So $E$ and $F$ both see the segment $BC$ at a right angle, hence both lie on the circle with diameter $BC$. ∎

From that circle you immediately get $\angle AEF = \angle ABC$, which is the standard entry point to the orthic triangle.

## Common traps

- Assuming a point lies inside a segment or on a particular arc. Either use directed angles or state the configuration.
- Using "angles subtending the same arc are equal" for points on **opposite** sides of the chord — there they are supplementary.
- Drawing a near-degenerate diagram (nearly isosceles, nearly right-angled) and reading a false equality off it. Draw a deliberately **scalene, obtuse-free** triangle.
- Forgetting that the converse of the inscribed angle theorem is what proves concyclicity.

## Problems

### P1 | Warmup | Standard
In triangle $ABC$, $\angle A = 50^\circ$ and $\angle B = 60^\circ$. The altitude from $C$ meets $AB$ at $H$. Find $\angle ACH$ and $\angle BCH$.
[hint]
Use right triangles $ACH$ and $BCH$.
[/hint]
[sol]
$\angle C = 180^\circ - 50^\circ - 60^\circ = 70^\circ$.

In right triangle $ACH$ (right angle at $H$):
$$\angle ACH = 90^\circ - \angle A = 90^\circ - 50^\circ = 40^\circ.$$

In right triangle $BCH$:
$$\angle BCH = 90^\circ - \angle B = 90^\circ-60^\circ = 30^\circ.$$

Check: $40^\circ+30^\circ = 70^\circ = \angle C$ ✓. ∎
[/sol]

### P2 | Warmup | Standard
$ABCD$ is cyclic with $\angle A = 80^\circ$ and $\angle B = 95^\circ$. Find $\angle C$ and $\angle D$.
[hint]
Opposite angles of a cyclic quadrilateral are supplementary.
[/hint]
[sol]
In a cyclic quadrilateral opposite angles sum to $180^\circ$:
$$\angle C = 180^\circ - \angle A = 100^\circ, \qquad \angle D = 180^\circ - \angle B = 85^\circ.$$

Check: the four angles sum to $80+95+100+85 = 360^\circ$ ✓. ∎
[/sol]

### P3 | Easy | Standard
Let $ABC$ be a triangle with orthocentre $H$. Prove that $\angle BHC = 180^\circ - \angle BAC$.
[hint]
Let the altitudes from $B$ and $C$ meet the opposite sides at $E$ and $F$. Look at quadrilateral $AFHE$.
[/hint]
[sol]
Let $BE\perp AC$ and $CF\perp AB$ be two altitudes, meeting at $H$, with $E$ on $AC$ and $F$ on $AB$.

In quadrilateral $AFHE$:
$$\angle AFH = 90^\circ \quad\text{and}\quad \angle AEH = 90^\circ.$$
The angles of a quadrilateral sum to $360^\circ$, so
$$\angle FHE = 360^\circ - 90^\circ - 90^\circ - \angle FAE = 180^\circ - \angle BAC.$$

Finally $\angle BHC$ is vertically opposite to $\angle FHE$ (since $B,H,E$ are collinear and $C,H,F$ are collinear), so
$$\angle BHC = \angle FHE = 180^\circ - \angle BAC. \;∎$$

*(For an obtuse triangle the configuration differs and $H$ falls outside; with directed angles the identity $\angle(HB,HC) = -\angle(AB,AC)$ holds in every case.)*
[/sol]

### P4 | Easy | Standard
Two circles meet at $P$ and $Q$. A line through $P$ meets the circles again at $A$ and $B$; a line through $Q$ meets them again at $C$ and $D$, with $A,C$ on the first circle. Prove $AC \parallel BD$.
[hint]
Chase angles through the common chord $PQ$, using the cyclic quadrilaterals $APQC$ and $BPQD$.
[/hint]
[sol]
Work with directed angles mod $180^\circ$ to avoid configuration cases.

Since $A, P, Q, C$ lie on the first circle,
$$\angle(CA, CQ) = \angle(PA, PQ).$$

Since $B, P, Q, D$ lie on the second circle,
$$\angle(DB, DQ) = \angle(PB, PQ).$$

But $A$, $P$, $B$ are collinear, so line $PA$ = line $PB$, giving $\angle(PA,PQ) = \angle(PB,PQ)$. Hence
$$\angle(CA, CQ) = \angle(DB, DQ).$$

Also $C$, $Q$, $D$ are collinear, so line $CQ$ = line $DQ$. Therefore
$$\angle(CA, CQ) = \angle(DB, CQ) \implies \angle(CA, DB) = 0,$$
which means $CA \parallel DB$. ∎

**Note how directed angles removed every case.** With ordinary angles this problem needs separate treatment depending on whether the lines cross between the circles or outside.
[/sol]

### P5 | Medium | Standard
Let $ABC$ be a triangle inscribed in circle $\Omega$, and let $M$ be the midpoint of arc $BC$ not containing $A$. Prove that $M$ is the circumcentre of triangle $BIC$, where $I$ is the incentre. **(The "incentre–excentre lemma".)**
[hint]
Show $MB = MI = MC$. For $MI$, compute $\angle MBI$ and $\angle MIB$ and show the triangle $MBI$ is isosceles.
[/hint]
[sol]
Write $\angle A = 2\alpha$, $\angle B = 2\beta$, $\angle C = 2\gamma$, so $\alpha+\beta+\gamma = 90^\circ$. The incentre $I$ lies on all three angle bisectors.

**Step 1: $MB = MC$.** $M$ is the midpoint of arc $BC$, so arcs $MB$ and $MC$ are equal, hence the chords are equal. ✓

**Step 2: $A$, $I$, $M$ are collinear.** $AM$ bisects $\angle BAC$ (it meets the arc midpoint), and $I$ lies on that bisector. ✓

**Step 3: $MB = MI$.** Compute two angles of triangle $MBI$.

- $\angle MBI = \angle MBC + \angle CBI$. Now $\angle MBC = \angle MAC = \alpha$ (angles subtending the same arc $MC$), and $\angle CBI = \beta$ (as $BI$ bisects $\angle B$). So
$$\angle MBI = \alpha + \beta.$$

- $\angle MIB$ is the exterior angle of triangle $ABI$ at $I$, so it equals the sum of the two remote interior angles:
$$\angle MIB = \angle IAB + \angle ABI = \alpha + \beta.$$

Since $\angle MBI = \angle MIB$, triangle $MBI$ is isosceles with
$$MB = MI. \;✓$$

**Conclusion.** $MB = MC = MI$, so $M$ is equidistant from $B$, $I$, $C$: it is the circumcentre of $\triangle BIC$. ∎

**Why this lemma matters.** It appears constantly — any time a problem mentions both the incentre and an arc midpoint, this is almost certainly the intended first step. It also shows $MI = MB = MC = MI_A$ where $I_A$ is the $A$-excentre, so all four points lie on a circle centred at $M$.
[/sol]

### P6 | Medium | CRMO 2013 P1
Let $ABC$ be an acute-angled triangle. The circle $\Gamma$ with $BC$ as diameter meets $AB$ and $AC$ again at $P$ and $Q$ respectively. Determine $\angle BAC$ given that the orthocentre of triangle $APQ$ lies on $\Gamma$.
[hint]
$BC$ is a diameter, so $\angle BPC = \angle BQC = 90^\circ$ — meaning $CP$ and $BQ$ are altitudes of $ABC$. Identify the orthocentre of $APQ$ and impose the condition.
[/hint]
[sol]
**Setup.** Since $BC$ is a diameter of $\Gamma$ and $P, Q \in\Gamma$,
$$\angle BPC = \angle BQC = 90^\circ.$$
So $CP \perp AB$ and $BQ\perp AC$: the segments $CP$ and $BQ$ are the altitudes of triangle $ABC$ from $C$ and $B$. Let $H$ be their intersection — the orthocentre of $ABC$.

**The orthocentre of $APQ$.** In triangle $APQ$:
- $P$ lies on $AB$ and $Q$ on $AC$;
- $BQ \perp AC = AQ$, so the line $BQ$ is the altitude of $APQ$ from $Q$;
- $CP\perp AB = AP$, so the line $CP$ is the altitude of $APQ$ from $P$.

These two altitudes meet at $H$, so **$H$ is also the orthocentre of $APQ$.**

**Impose the condition.** We are told $H \in \Gamma$, and $BC$ is a diameter of $\Gamma$, so
$$\angle BHC = 90^\circ.$$

**Finish with the orthocentre angle formula.** By P3 of this set,
$$\angle BHC = 180^\circ - \angle BAC.$$

Therefore
$$180^\circ - \angle BAC = 90^\circ \implies \angle BAC = \mathbf{45^\circ}. \;∎$$

*(Consistency: for $\angle A = 45^\circ$ and the triangle acute, $H$ is interior and the configuration is realisable.)*
[/sol]

### P7 | Medium | Standard
In triangle $ABC$, the internal bisector of $\angle A$ meets $BC$ at $D$ and the circumcircle again at $M$. Prove that $MB^2 = MD\cdot MA$.
[hint]
Show triangles $MBD$ and $MAB$ are similar, using the inscribed angle theorem and the bisector.
[/hint]
[sol]
**Claim: $\triangle MBD \sim \triangle MAB$.**

*Common angle.* Both triangles contain the angle at $M$ between the lines $MB$ and $MA$; since $D$ lies on segment $MA$ (as $A$, $D$, $M$ are collinear along the bisector), $\angle BMD = \angle BMA$. ✓

*Second pair.* By the inscribed angle theorem on the circumcircle, $\angle MBC = \angle MAC$ (both subtend arc $MC$). And $\angle MAC = \angle MAB$ because $AM$ bisects $\angle BAC$. Hence
$$\angle MBD = \angle MBC = \angle MAB.$$
(Here $\angle MBD = \angle MBC$ because $D$ lies on segment $BC$.) ✓

Two pairs of equal angles give $\triangle MBD\sim\triangle MAB$ (AA).

**Conclude.** Corresponding sides are proportional:
$$\frac{MB}{MA} = \frac{MD}{MB} \implies MB^2 = MD\cdot MA. \;∎$$

**Remark.** Combined with the incentre–excentre lemma ($MB = MI$), this gives $MI^2 = MD\cdot MA$ — a relation that turns up in problems relating the incentre to the arc midpoint.
[/sol]

### P8 | Medium | Standard
Let $ABCD$ be a cyclic quadrilateral whose diagonals meet at $P$. Prove that the triangles $APB$ and $DPC$ are similar, and deduce $PA\cdot PC = PB\cdot PD$.
[hint]
Vertical angles at $P$, plus inscribed angles on the same arc.
[/hint]
[sol]
**Angles at $P$.** $\angle APB = \angle DPC$, being vertically opposite. ✓

**Inscribed angles.** $\angle BAP = \angle BAC$ and $\angle CDP = \angle CDB$; these subtend the same arc $BC$ from the same side, so
$$\angle BAC = \angle BDC \implies \angle BAP = \angle CDP. \;✓$$

By AA, $\triangle APB \sim \triangle DPC$ (with $A\leftrightarrow D$, $P\leftrightarrow P$, $B\leftrightarrow C$).

**Deduce the product.** Corresponding sides give
$$\frac{PA}{PD} = \frac{PB}{PC} \implies PA\cdot PC = PB\cdot PD. \;∎$$

*(This is the **power of a point** for a point inside the circle, which the next chapter develops in full.)*
[/sol]

### P9 | Hard | RMO 2025 P5
Let $ABC$ be an acute-angled triangle with $AB<AC$, orthocentre $H$ and circumcircle $\Omega$ of radius $R$. Let $M$ be the midpoint of the minor arc $BC$ of $\Omega$. Suppose $MH = R$. Prove that $\angle BAC = 60^\circ$.
[hint]
Put the midpoint $N$ of $BC$ at the origin with $BC$ horizontal. Then the circumcentre is at $(0, R\cos A)$, the arc midpoint $M$ is directly below it on $\Omega$, and $\vec{OH} = \vec{OA}+\vec{OB}+\vec{OC}$ locates $H$. Compute $MH^2$ and factor.
[/hint]
[sol]
**Coordinates.** Let $N$ be the midpoint of $BC$. Put $N$ at the origin with $BC$ along the $x$-axis and $A$ in the upper half-plane. Write $A = (a_x, a_y)$ with $a_y>0$, and $B = (-m,0)$, $C = (m,0)$.

**The circumcentre.** $O$ lies on the perpendicular bisector of $BC$, i.e. the $y$-axis, at distance $ON = R\cos A$ from $BC$ (the standard distance from the circumcentre to side $a$). For an acute triangle $O$ is inside, so
$$O = (0,\ d), \qquad d = R\cos A > 0.$$

**The arc midpoint.** $M$ is on $\Omega$ and on the perpendicular bisector of $BC$, on the **opposite** side of $BC$ from $A$:
$$M = (0,\ d-R).$$

**The orthocentre.** The standard vector identity $\vec{OH} = \vec{OA}+\vec{OB}+\vec{OC}$ gives $H = A+B+C-2O$, so
$$H = \big(a_x - m + m - 0,\ \ a_y + 0 + 0 - 2d\big) = (a_x,\ a_y - 2d).$$

**Compute $MH^2$.**
$$MH^2 = a_x^2 + \big(a_y - 2d - (d-R)\big)^2 = a_x^2 + \big(a_y - 3d + R\big)^2.$$
Since $A$ lies on $\Omega$, $a_x^2 + (a_y-d)^2 = R^2$, so $a_x^2 = R^2 - (a_y-d)^2$. Putting $u = a_y - d$,
$$MH^2 = R^2 - u^2 + \big(u + R - 2d\big)^2 = R^2 + 2u(R-2d) + (R-2d)^2. \tag{1}$$

**Identify $u$.** $u$ is the signed height of $A$ above the circumcentre, i.e. the vertical component of $\vec{OA}$. Writing $\vec{OA} = R(\cos\varphi,\sin\varphi)$ and chasing central angles ($\angle MOB = \angle MOC = A$, $\angle BOA = 2C$) gives $\varphi = A + 2C - 90^\circ$, so
$$u = R\sin\varphi = -R\cos(A+2C) = -R\cos\big(180^\circ - (B - C)\big) = R\cos(B-C),$$
using $A + 2C = 180^\circ - B + C$.

**Substitute $d = R\cos A$ and $u = R\cos(B-C)$ into (1):**
$$MH^2 = R^2\Big[\,1 + 2\cos(B-C)\big(1-2\cos A\big) + \big(1-2\cos A\big)^2\Big].$$

**Impose $MH = R$.** Then the bracket equals 1, so
$$2\cos(B-C)\big(1-2\cos A\big) + \big(1-2\cos A\big)^2 = 0,$$
$$\big(1-2\cos A\big)\Big[\,2\cos(B-C) + 1 - 2\cos A\,\Big] = 0.$$

**The second factor is never zero for an acute triangle.** Since $A + B + C = 180^\circ$, $\cos A = -\cos(B+C)$, so
$$2\cos(B-C)+1-2\cos A = 1 + 2\big[\cos(B-C)+\cos(B+C)\big] = 1 + 4\cos B\cos C.$$
In an acute triangle $\cos B>0$ and $\cos C>0$, so this is $>1>0$.

**Conclusion.** Therefore $1 - 2\cos A = 0$, i.e.
$$\cos\angle BAC = \tfrac12 \implies \angle BAC = 60^\circ. \;∎$$

**Numerical checks of the formula.**
- Equilateral ($A=B=C=60^\circ$): bracket $= 1 + 2\cdot1\cdot0+0 = 1$, so $MH = R$ ✓ (and indeed $H=O$ there).
- Right isosceles ($A=90^\circ$, $B=C=45^\circ$): bracket $= 1+2\cdot1\cdot1+1 = 4$, so $MH = 2R$ — consistent with $H=A$ and $M$ the antipode of $A$ ✓.
- $A = 90^\circ, B=60^\circ, C=30^\circ$: bracket $= 1+2(\cos30^\circ)(1)+1 = 3.732$, so $MH \approx 1.932R$, matching a direct coordinate computation ✓.

**The three facts to carry away**, each worth marks on its own:
$$\vec{OH} = \vec{OA}+\vec{OB}+\vec{OC}, \qquad ON = R\cos A, \qquad AH = 2R\cos A.$$
Compare your write-up with the [official RMO 2025 solutions](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2025/12/RMO-2025-solutions.pdf).
[/sol]

### P10 | Hard | Classic
Let $ABC$ be a triangle with $\angle B = 2\angle C$. Prove that $b^2 = c(c+a)$, where $a,b,c$ are the sides opposite $A,B,C$.
[hint]
Extend $CB$ beyond $B$ to a point $D$ with $BD = AB$. Chase the angles in the isosceles triangle $ABD$, then find a pair of similar triangles sharing the angle at $D$.
[/hint]
[sol]
Write $\angle C = \gamma$, so $\angle B = 2\gamma$ and $\angle A = 180^\circ - 3\gamma$.

**Construction.** Extend $CB$ beyond $B$ to the point $D$ with
$$BD = AB = c,$$
so that $B$ lies between $D$ and $C$, and $DC = DB + BC = c + a$.

```svg
<svg viewBox="0 0 300 150" width="380">
  <path class="gl" d="M35 120 L100 120 L265 120 M100 120 L150 30 M35 120 L150 30 M265 120 L150 30"/>
  <circle cx="35" cy="120" r="3" class="gp"/>
  <circle cx="100" cy="120" r="3" class="gp"/>
  <circle cx="265" cy="120" r="3" class="gp"/>
  <circle cx="150" cy="30" r="3" class="gp"/>
  <text x="28" y="137">D</text>
  <text x="96" y="137">B</text>
  <text x="262" y="137">C</text>
  <text x="146" y="24">A</text>
  <text x="60" y="112">c</text>
  <text x="175" y="112">a</text>
</svg>
<figcaption>D on line CB beyond B, with BD = AB = c.</figcaption>
```

**Step 1: the isosceles triangle $ABD$.** Since $D$, $B$, $C$ are collinear with $B$ between $D$ and $C$,
$$\angle ABD = 180^\circ - \angle ABC = 180^\circ - 2\gamma.$$
Triangle $ABD$ has $BD = BA$, so its base angles are equal:
$$\angle BDA = \angle BAD = \frac{180^\circ - (180^\circ-2\gamma)}{2} = \gamma.$$

**Step 2: $AD = b$.** Consider triangle $ADC$. Its angle at $D$ is $\angle ADC = \angle BDA = \gamma$ (same angle, as $B$ lies on segment $DC$), and its angle at $C$ is $\angle ACD = \angle ACB = \gamma$.

Two equal angles make the triangle isosceles, with the sides **opposite** them equal:
$$\underbrace{AC}_{\text{opposite }\angle D} = \underbrace{AD}_{\text{opposite }\angle C} \implies AD = AC = b.$$

**Step 3: similar triangles.** Compare $\triangle DBA$ and $\triangle DAC$:
- they share the angle at $D$: $\angle BDA = \angle ADC = \gamma$;
- $\angle DBA = 180^\circ - 2\gamma$ (Step 1), and
$$\angle DAC = \angle DAB + \angle BAC = \gamma + (180^\circ - 3\gamma) = 180^\circ - 2\gamma.$$

So $\angle DBA = \angle DAC$, and by AA,
$$\triangle DBA \sim \triangle DAC.$$

**Step 4: conclude.** Corresponding sides (with $D\leftrightarrow D$, $B\leftrightarrow A$, $A\leftrightarrow C$) give
$$\frac{DB}{DA} = \frac{DA}{DC} \implies DA^2 = DB\cdot DC.$$

Substituting $DA = b$, $DB = c$, $DC = c+a$:
$$b^2 = c\,(c+a). \;∎$$

**Check.** Take $\gamma = 30^\circ$, so $\angle B = 60^\circ$ and $\angle A = 90^\circ$. By the law of sines with circumdiameter 1: $a = \sin90^\circ = 1$, $b = \sin60^\circ = \frac{\sqrt3}{2}$, $c = \sin30^\circ = \frac12$. Then $b^2 = \frac34$ and $c(c+a) = \frac12\cdot\frac32 = \frac34$ ✓.

**The construction to remember.** Whenever a triangle has an angle condition like $\angle B = 2\angle C$, *build the isosceles triangle that makes the doubling visible* — usually by marking off a segment equal to one of the sides. The doubled angle then splits into two equal pieces and the similar triangles appear.
[/sol]
