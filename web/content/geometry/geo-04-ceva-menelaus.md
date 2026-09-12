---
id: geo-04-ceva-menelaus
title: Ceva, Menelaus and mass points
level: Core
hours: 3
blurb: The two ratio theorems that settle concurrency and collinearity, plus mass points — the fastest way to compute a ratio on a cevian.
tags: Ceva, Menelaus, mass points, concurrency, collinearity
link: Yufei Zhao — Lemmas in Euclidean geometry :: https://yufeizhao.com/olympiad/geolemmas.pdf
video: Search: Ceva Menelaus mass points olympiad :: https://www.youtube.com/results?search_query=ceva+menelaus+mass+points+olympiad+geometry
---

## Ceva's theorem

> Let $D$, $E$, $F$ lie on lines $BC$, $CA$, $AB$ of triangle $ABC$. Then $AD$, $BE$, $CF$ are **concurrent** (or all parallel) if and only if
> $$\frac{BD}{DC}\cdot\frac{CE}{EA}\cdot\frac{AF}{FB} = 1,$$
> with **signed** ratios.

With unsigned ratios the statement holds when all three points lie on the segments themselves.

**Trigonometric Ceva.** The cevians $AD$, $BE$, $CF$ are concurrent iff
$$\frac{\sin\angle BAD}{\sin\angle DAC}\cdot\frac{\sin\angle CBE}{\sin\angle EBA}\cdot\frac{\sin\angle ACF}{\sin\angle FCB} = 1.$$
This version is the right tool when the cevians are defined by **angles** (bisectors, isogonals, symmedians) rather than by lengths.

**Immediate consequences.** The medians concur ($1\cdot1\cdot1$), the angle bisectors concur (via the bisector ratio $\frac{BD}{DC}=\frac{AB}{AC}$), and the altitudes concur.

## Menelaus' theorem

> Points $D$, $E$, $F$ on lines $BC$, $CA$, $AB$ are **collinear** if and only if
> $$\frac{BD}{DC}\cdot\frac{CE}{EA}\cdot\frac{AF}{FB} = -1$$
> with signed ratios.

The only difference from Ceva is the sign: $+1$ for concurrency, $-1$ for collinearity. Remember it as: **a transversal must cut an odd number of sides externally.**

```svg
<svg viewBox="0 0 320 190" width="400">
  <path class="gl" d="M40 160 L240 160 L150 35 Z"/>
  <path class="gl-acc" d="M150 35 L120 160 M40 160 L200 100 M240 160 L94 89"/>
  <circle cx="40" cy="160" r="3" class="gp"/><circle cx="240" cy="160" r="3" class="gp"/>
  <circle cx="150" cy="35" r="3" class="gp"/>
  <circle cx="120" cy="160" r="2.6" class="gp-acc"/>
  <circle cx="200" cy="100" r="2.6" class="gp-acc"/>
  <circle cx="94" cy="89" r="2.6" class="gp-acc"/>
  <text x="30" y="175">B</text><text x="244" y="175">C</text><text x="144" y="28">A</text>
  <text x="116" y="176">D</text><text x="206" y="98">E</text><text x="80" y="88">F</text>
</svg>
<figcaption>Ceva: AD, BE, CF concur ⟺ (BD/DC)(CE/EA)(AF/FB) = 1.</figcaption>
```

## Mass points

A computational shortcut for ratios along cevians. Assign a **mass** $m_X$ to each vertex; then the balance point of $B$ and $C$ on segment $BC$ divides it in the ratio
$$\frac{BD}{DC} = \frac{m_C}{m_B}$$
(heavier end is closer). Masses add at intersection points.

> **The recipe.** To find the ratio in which cevians cut each other: choose vertex masses making each cevian foot balance, then read off the ratios. It replaces two applications of Menelaus with arithmetic.

**Example.** In triangle $ABC$, $D$ on $BC$ with $BD:DC = 2:1$, and $E$ the midpoint of $AC$. Find $AP:PD$ where $P = AD\cap BE$.

Assign $m_B = 1$, $m_C = 2$ (so $BD:DC = m_C:m_B = 2:1$ ✓). For $E$ the midpoint of $AC$ we need $m_A = m_C = 2$. Then
- $m_D = m_B+m_C = 3$,
- $AP:PD = m_D : m_A = 3:2$. ∎

## Which to use

| Goal | Tool |
|---|---|
| prove three cevians concurrent | Ceva |
| prove three points collinear | Menelaus |
| cevians defined by angles | trig Ceva |
| compute a ratio on a cevian | mass points |
| ratio along a transversal | Menelaus |

## Common traps

- Dropping the signs. Unsigned Ceva is only valid when all three points are interior to the sides.
- Writing the Menelaus product with the wrong cyclic order — go **around** the triangle: $B\to D\to C$, $C\to E\to A$, $A\to F\to B$.
- Using mass points when a cevian foot lies **outside** a side (you need negative masses, which works but needs care).
- Forgetting that Ceva's "concurrent" includes the degenerate case of three parallel cevians.

## Problems

### P1 | Warmup | Standard
Use Ceva to prove the medians of a triangle are concurrent.
[hint]
Each ratio is 1.
[/hint]
[sol]
Let $D$, $E$, $F$ be the midpoints of $BC$, $CA$, $AB$. Then
$$\frac{BD}{DC} = \frac{CE}{EA} = \frac{AF}{FB} = 1,$$
so the product is $1\cdot1\cdot1 = 1$.

By Ceva's theorem, $AD$, $BE$, $CF$ are concurrent. ∎
[/sol]

### P2 | Warmup | Standard
Use Ceva to prove the internal angle bisectors are concurrent.
[hint]
The bisector from $A$ meets $BC$ at $D$ with $\frac{BD}{DC} = \frac{AB}{AC}$.
[/hint]
[sol]
By the angle bisector theorem, the internal bisector from $A$ meets $BC$ at $D$ with
$$\frac{BD}{DC} = \frac{c}{b},$$
and cyclically $\frac{CE}{EA} = \frac ac$, $\frac{AF}{FB} = \frac ba$.

The product is
$$\frac cb\cdot\frac ac\cdot\frac ba = 1.$$

By Ceva the three bisectors are concurrent — at the incentre. ∎
[/sol]

### P3 | Easy | Standard
In triangle $ABC$, $D$ on $BC$ with $BD:DC = 1:2$ and $E$ on $AC$ with $AE:EC = 3:1$. If $AD$ and $BE$ meet at $P$, find $AP:PD$.
[hint]
Mass points: choose masses so both $D$ and $E$ balance.
[/hint]
[sol]
**Mass at $B$ and $C$.** For $BD:DC = 1:2$ we need $m_B : m_C = 2 : 1$ (heavier end closer). Take $m_B = 2$, $m_C = 1$.

**Mass at $A$.** For $AE:EC = 3:1$ we need $m_A : m_C = 1:3$, so with $m_C = 1$ we need $m_A = \frac13$. Scale everything by 3:
$$m_A = 1, \qquad m_B = 6, \qquad m_C = 3.$$
Check: $BD:DC = m_C:m_B = 3:6 = 1:2$ ✓; $AE:EC = m_C:m_A = 3:1$ ✓.

**The ratio on $AD$.** $m_D = m_B+m_C = 9$, so
$$AP : PD = m_D : m_A = 9 : 1. \;∎$$

*(Cross-check with Menelaus on triangle $ADC$ with transversal $B$–$P$–$E$: $\frac{AP}{PD}\cdot\frac{DB}{BC}\cdot\frac{CE}{EA} = 1$ in unsigned form gives $\frac{AP}{PD}\cdot\frac13\cdot\frac13 = 1$, so $\frac{AP}{PD} = 9$ ✓.)*
[/sol]

### P4 | Easy | Standard
State and prove Menelaus for a triangle cut by a transversal, using similar triangles.
[hint]
Drop perpendiculars from $A$, $B$, $C$ to the transversal and compare similar right triangles.
[/hint]
[sol]
**Statement.** If a line meets lines $BC$, $CA$, $AB$ at $D$, $E$, $F$ (none a vertex), then
$$\frac{BD}{DC}\cdot\frac{CE}{EA}\cdot\frac{AF}{FB} = -1 \quad\text{(signed)}.$$

**Proof.** Drop perpendiculars from $A$, $B$, $C$ to the transversal, with feet $A'$, $B'$, $C'$, and let $a = AA'$, $b = BB'$, $c = CC'$ be the (signed) distances, positive on one side of the line and negative on the other.

$D$ lies on line $BC$ and on the transversal. Triangles $BB'D$ and $CC'D$ are similar (both right-angled at $B'$, $C'$, with vertical angles at $D$), so
$$\frac{BD}{DC} = \frac{b}{c}$$
in signed form — the sign is negative exactly when $B$ and $C$ are on the same side of the transversal (so $D$ is outside segment $BC$).

Similarly
$$\frac{CE}{EA} = \frac ca, \qquad \frac{AF}{FB} = \frac ab.$$

Multiplying:
$$\frac{BD}{DC}\cdot\frac{CE}{EA}\cdot\frac{AF}{FB} = \frac bc\cdot\frac ca\cdot\frac ab = 1$$
in magnitude. For the sign: a line either misses the triangle entirely (cutting all three side-lines externally — three negative signs, product $-1$) or crosses two sides internally and one externally (one negative sign, product $-1$). Either way the signed product is $-1$. ∎
[/sol]

### P5 | Medium | Standard
Prove that the cevians from the vertices to the points where the incircle touches the opposite sides are concurrent. (Their common point is the **Gergonne point**.)
[hint]
The tangent lengths are $s-a$, $s-b$, $s-c$. Apply Ceva.
[/hint]
[sol]
Let the incircle touch $BC$, $CA$, $AB$ at $D$, $E$, $F$. By the tangent-length computation (centres chapter, P3),
$$BD = s-b, \quad DC = s-c, \quad CE = s-c, \quad EA = s-a, \quad AF = s-a, \quad FB = s-b.$$

Therefore
$$\frac{BD}{DC}\cdot\frac{CE}{EA}\cdot\frac{AF}{FB} = \frac{s-b}{s-c}\cdot\frac{s-c}{s-a}\cdot\frac{s-a}{s-b} = 1.$$

All three points are interior to their sides (since $s-a,s-b,s-c>0$ by the triangle inequality), so unsigned Ceva applies: $AD$, $BE$, $CF$ are concurrent. ∎
[/sol]

### P6 | Medium | Standard
In triangle $ABC$, points $D$, $E$, $F$ are on $BC$, $CA$, $AB$ with $\frac{BD}{DC}=\frac{CE}{EA}=\frac{AF}{FB}=k$. Find the ratio of the area of triangle $DEF$ to that of $ABC$.
[hint]
Compute $[AFE]$ as a fraction of $[ABC]$ using the sine area formula, then subtract the three corner triangles.
[/hint]
[sol]
Write $[XYZ]$ for area. With $\frac{AF}{FB} = k$ we have $\frac{AF}{AB} = \frac{k}{k+1}$, and with $\frac{CE}{EA} = k$ we have $\frac{AE}{AC} = \frac{1}{k+1}$.

**Corner triangle at $A$.** Using $[AFE] = \frac12\,AF\cdot AE\sin A$ and $[ABC] = \frac12 AB\cdot AC\sin A$,
$$\frac{[AFE]}{[ABC]} = \frac{AF}{AB}\cdot\frac{AE}{AC} = \frac{k}{k+1}\cdot\frac1{k+1} = \frac{k}{(k+1)^2}.$$

By the cyclic symmetry of the hypotheses, the corner triangles at $B$ and $C$ have the same ratio.

**Subtract.**
$$\frac{[DEF]}{[ABC]} = 1 - 3\cdot\frac{k}{(k+1)^2} = \frac{(k+1)^2-3k}{(k+1)^2} = \frac{k^2-k+1}{(k+1)^2}. \;∎$$

**Checks.** $k=1$ (midpoints): $\frac{1-1+1}{4} = \frac14$ ✓ — the medial triangle has a quarter of the area. $k\to0$: ratio $\to1$ ✓ (the points approach the vertices). $k=2$: $\frac{3}{9}=\frac13$ — the classic "one-third area" configuration.
[/sol]

### P7 | Medium | Standard
Prove the **angle bisector theorem**: the internal bisector from $A$ meets $BC$ at $D$ with $\dfrac{BD}{DC} = \dfrac{AB}{AC}$.
[hint]
Use the sine rule in triangles $ABD$ and $ACD$, which share the angle at $D$ (supplementary).
[/hint]
[sol]
Let $AD$ bisect $\angle BAC$, with $D$ on segment $BC$, and write $\angle BAD = \angle DAC = \frac A2$.

**Sine rule in $\triangle ABD$:**
$$\frac{BD}{\sin\frac A2} = \frac{AB}{\sin\angle ADB} \implies BD = \frac{AB\,\sin\frac A2}{\sin\angle ADB}.$$

**Sine rule in $\triangle ACD$:**
$$DC = \frac{AC\,\sin\frac A2}{\sin\angle ADC}.$$

Since $D$ lies on segment $BC$, the angles $\angle ADB$ and $\angle ADC$ are supplementary, so $\sin\angle ADB = \sin\angle ADC$.

Dividing,
$$\frac{BD}{DC} = \frac{AB}{AC}. \;∎$$

*(The external bisector gives the same ratio with a negative sign, meeting line $BC$ outside the segment.)*
[/sol]

### P8 | Medium | Standard
Use trigonometric Ceva to prove that the altitudes of a triangle are concurrent.
[hint]
Compute $\angle BAD$ and $\angle DAC$ for the altitude from $A$.
[/hint]
[sol]
Let $AD$, $BE$, $CF$ be the altitudes ($D$ on $BC$, etc.), and assume the triangle is acute so all feet are interior.

In right triangle $ABD$ (right angle at $D$),
$$\angle BAD = 90^\circ - B.$$
In right triangle $ACD$,
$$\angle DAC = 90^\circ-C.$$

By the cyclic symmetry, the trigonometric Ceva product is
$$\frac{\sin\angle BAD}{\sin\angle DAC}\cdot\frac{\sin\angle CBE}{\sin\angle EBA}\cdot\frac{\sin\angle ACF}{\sin\angle FCB} = \frac{\sin(90^\circ - B)}{\sin(90^\circ-C)}\cdot\frac{\sin(90^\circ-C)}{\sin(90^\circ-A)}\cdot\frac{\sin(90^\circ-A)}{\sin(90^\circ-B)}.$$

Everything cancels, giving the product $1$.

By trigonometric Ceva the three altitudes are concurrent. ∎

*(For an obtuse triangle two feet fall outside and the signed version is needed; the conclusion — concurrency at the orthocentre outside the triangle — is the same.)*
[/sol]

### P9 | Hard | Classic
Let the incircle of triangle $ABC$ touch $BC$ at $D$, and let the $A$-excircle touch $BC$ at $D_A$. Prove that $D$ and $D_A$ are reflections of each other in the midpoint $M$ of $BC$ — equivalently, that $BD = CD_A$.
[hint]
Use the tangent lengths for both the incircle and the $A$-excircle, and compare distances from $B$.
[/hint]
[sol]
**The claim.** Let the incircle touch $BC$ at $D$ and the $A$-excircle touch $BC$ at $D_A$. Then $D$ and $D_A$ are reflections in the midpoint $M$ of $BC$; equivalently $BD = CD_A$.

**Incircle tangent lengths.** As computed before,
$$BD = s-b, \qquad DC = s-c.$$

**Excircle tangent lengths.** The $A$-excircle is tangent to side $BC$ and to the **extensions** of $AB$ and $AC$. Let it touch line $AB$ at $P$ and line $AC$ at $Q$. Equal tangents from $A$ give $AP = AQ$, and
$$AP + AQ = (AB + BP) + (AC+CQ) = c + BD_A + b + CD_A = b+c+a = 2s,$$
using $BP = BD_A$ and $CQ = CD_A$ (equal tangents from $B$ and from $C$). Hence $AP = AQ = s$.

Therefore
$$BD_A = AP - AB = s - c, \qquad CD_A = AQ - AC = s-b.$$

**Conclude.** Comparing with the incircle values,
$$BD = s-b = CD_A, \qquad DC = s-c = BD_A.$$

So $D$ and $D_A$ are equidistant from the two ends of $BC$ in opposite senses — i.e. they are symmetric about the midpoint $M$ of $BC$. ∎

**Why this lemma is useful.** It is the standard entry point for problems involving both the incircle and an excircle, and it immediately gives $MD = MD_A = \left|\frac{b-c}{2}\right|$.
[/sol]

### P10 | Hard | Standard
Let $ABC$ be a triangle and let $P$ be an interior point. Lines $AP$, $BP$, $CP$ meet the opposite sides at $D$, $E$, $F$. Prove that
$$\frac{PD}{AD}+\frac{PE}{BE}+\frac{PF}{CF} = 1.$$
[hint]
Interpret each ratio as a ratio of areas.
[/hint]
[sol]
Write $[XYZ]$ for area.

**Key observation.** Triangles $PBC$ and $ABC$ share the base $BC$, so their areas are proportional to the distances from $P$ and from $A$ to line $BC$. Since $A$, $P$, $D$ are collinear with $D$ on $BC$, those distances are proportional to $PD$ and $AD$. Hence
$$\frac{PD}{AD} = \frac{[PBC]}{[ABC]}.$$

By the same argument applied at the other two vertices,
$$\frac{PE}{BE} = \frac{[PCA]}{[ABC]}, \qquad \frac{PF}{CF} = \frac{[PAB]}{[ABC]}.$$

**Add.** Since $P$ is interior, the three small triangles partition $ABC$:
$$[PBC]+[PCA]+[PAB] = [ABC].$$

Therefore
$$\frac{PD}{AD}+\frac{PE}{BE}+\frac{PF}{CF} = \frac{[PBC]+[PCA]+[PAB]}{[ABC]} = 1. \;∎$$

**Companion identity.** The same areas give
$$\frac{AP}{AD}+\frac{BP}{BE}+\frac{CP}{CF} = 3 - 1 = 2,$$
since $\frac{AP}{AD} = 1 - \frac{PD}{AD}$.

**The technique.** Converting a ratio of *lengths along a cevian* into a ratio of *areas* is one of the most reliable moves in this topic — it turns three unrelated ratios into three pieces of one partition.
[/sol]
