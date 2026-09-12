---
id: alg-05-complex
title: Complex numbers and roots of unity
level: Core
hours: 3
blurb: Modulus and argument, De Moivre, roots of unity and the filter trick, and using complex numbers as a computational engine for geometry.
tags: complex numbers, roots of unity, De Moivre
link: MOTP — Algebra :: https://jpsaha.github.io/MOTP/alg/
video: Search: roots of unity olympiad problems :: https://www.youtube.com/results?search_query=roots+of+unity+filter+olympiad
---

## The essentials

A complex number $z = a+bi$ has **conjugate** $\bar z = a - bi$ and **modulus** $|z| = \sqrt{a^2+b^2}$, with
$$z\bar z = |z|^2, \qquad |zw|=|z||w|, \qquad \overline{zw}=\bar z\bar w, \qquad \overline{z+w} = \bar z+\bar w.$$

**Polar form.** $z = r(\cos\theta+i\sin\theta) = re^{i\theta}$ where $r = |z|$ and $\theta = \arg z$.

> **De Moivre.** $\left(\cos\theta+i\sin\theta\right)^n = \cos n\theta + i\sin n\theta$.

Multiplication multiplies moduli and adds arguments — which is why complex numbers are so good at rotation.

**Useful identities.**
$$\cos\theta = \frac{z+\bar z}{2|z|}\Big|_{|z|=1} = \frac{z+z^{-1}}{2}, \qquad \sin\theta = \frac{z-z^{-1}}{2i} \qquad (z=e^{i\theta}).$$
$$|z+w|^2 = |z|^2+|w|^2 + 2\operatorname{Re}(z\bar w)$$
$$|z+w|^2+|z-w|^2 = 2|z|^2+2|w|^2 \qquad \textbf{(parallelogram law)}$$

## Roots of unity

The $n$-th roots of unity are
$$\omega^k = e^{2\pi i k/n}, \qquad k = 0,1,\dots,n-1, \qquad \omega = e^{2\pi i/n}.$$

They are the roots of $x^n - 1 = (x-1)(x^{n-1}+\cdots+x+1)$. Hence:

- $\displaystyle\sum_{k=0}^{n-1}\omega^k = 0$ for $n \ge 2$, and more generally $\displaystyle\sum_{k=0}^{n-1}\omega^{jk} = \begin{cases} n & n \mid j\\ 0 & \text{else}\end{cases}$
- $\displaystyle\prod_{k=1}^{n-1}(x-\omega^k) = \frac{x^n-1}{x-1} = 1+x+\cdots+x^{n-1}$
- Setting $x=1$: $\displaystyle\prod_{k=1}^{n-1}(1-\omega^k) = n$.

> **The roots-of-unity filter.** To extract every $m$-th coefficient of a polynomial or generating function $P$:
> $$\sum_{j \equiv r \!\!\pmod m} [x^j]P(x) \;=\; \frac1m\sum_{k=0}^{m-1}\omega^{-kr}P(\omega^k), \qquad \omega = e^{2\pi i/m}.$$

This is the standard tool for "how many subsets have size divisible by 3" type questions.

**Example.** $\displaystyle\sum_{k \equiv 0 \pmod 3}\binom nk = \frac{2^n + \omega\text{-terms}}{3} = \frac13\left(2^n + (1+\omega)^n+(1+\omega^2)^n\right)$ where $\omega = e^{2\pi i/3}$. Since $1+\omega = -\omega^2$ and $|1+\omega|=1$, the last two terms have modulus 1, giving
$$\sum_{3 \mid k}\binom nk = \frac{2^n + 2\cos(n\pi/3)}{3}.$$

## Geometry with complex numbers

Identify the plane with $\mathbb{C}$. Then:

- **Rotation by $\theta$ about $c$:** $z \mapsto c + e^{i\theta}(z-c)$.
- **$a,b,c$ collinear** $\iff \dfrac{c-a}{b-a} \in \mathbb{R} \iff \dfrac{c-a}{b-a} = \overline{\left(\dfrac{c-a}{b-a}\right)}$.
- **$ab \perp cd$** $\iff \dfrac{b-a}{d-c}$ is purely imaginary.
- **$abc$ equilateral** $\iff a^2+b^2+c^2 = ab+bc+ca$, equivalently $a + \omega b + \omega^2 c = 0$ for a primitive cube root $\omega$ (one of the two orientations).
- **Unit circle setup:** if the circumcircle is the unit circle, then $\bar a = 1/a$ for each vertex, which turns conjugation into division and makes computations tractable. The orthocentre is then simply $h = a+b+c$.

That last fact — $h = a+b+c$ on the unit circle — makes many orthocentre problems almost immediate.

## Common traps

- Writing $\sqrt{zw} = \sqrt z\sqrt w$ for complex numbers. False in general.
- Assuming $\arg(zw) = \arg z+\arg w$ exactly rather than modulo $2\pi$.
- Forgetting that "the $n$-th roots of unity sum to zero" needs $n \ge 2$.
- Using $|z| = z$ somewhere. Modulus is real; $z$ generally is not.

## Problems

### P1 | Warmup | Standard
Compute $(1+i)^{10}$.
[hint]
Write $1+i$ in polar form and use De Moivre.
[/hint]
[sol]
$|1+i| = \sqrt2$ and $\arg(1+i)=\frac\pi4$, so $1+i = \sqrt2\,e^{i\pi/4}$.

By De Moivre,
$$(1+i)^{10} = \left(\sqrt2\right)^{10}e^{10i\pi/4} = 32\,e^{5i\pi/2} = 32\,e^{i\pi/2} = 32i. \;∎$$

(Check: $(1+i)^2 = 2i$, so $(1+i)^{10} = (2i)^5 = 32i^5 = 32i$ ✓.)
[/sol]

### P2 | Warmup | Standard
Let $\omega \ne 1$ be a cube root of unity. Compute $(1+\omega)(1+\omega^2)$ and $1+\omega+\omega^2$.
[hint]
$\omega^3=1$ and $1+\omega+\omega^2=0$.
[/hint]
[sol]
Since $\omega$ is a root of $x^3-1 = (x-1)(x^2+x+1)$ and $\omega \ne 1$, we have
$$1+\omega+\omega^2 = 0.$$

Hence $1+\omega = -\omega^2$ and $1+\omega^2 = -\omega$, so
$$(1+\omega)(1+\omega^2) = (-\omega^2)(-\omega) = \omega^3 = 1. \;∎$$
[/sol]

### P3 | Easy | Standard
Prove that $\displaystyle\prod_{k=1}^{n-1}\left(1-\omega^k\right) = n$, where $\omega = e^{2\pi i/n}$.
[hint]
Factor $x^n-1$ and divide by $x-1$, then set $x=1$.
[/hint]
[sol]
Over $\mathbb{C}$,
$$x^n - 1 = \prod_{k=0}^{n-1}\left(x-\omega^k\right) = (x-1)\prod_{k=1}^{n-1}\left(x-\omega^k\right).$$

Dividing both sides by $x-1$ (valid for $x \ne 1$):
$$\frac{x^n-1}{x-1} = 1+x+x^2+\cdots+x^{n-1} = \prod_{k=1}^{n-1}\left(x-\omega^k\right).$$

Both sides are polynomials, so the identity holds for **all** $x$, including $x=1$ by continuity. Setting $x=1$:
$$\underbrace{1+1+\cdots+1}_{n} = n = \prod_{k=1}^{n-1}\left(1-\omega^k\right). \;∎$$
[/sol]

### P4 | Easy | Standard
Evaluate $\displaystyle\sum_{k=0}^{n}\binom{n}{k}\cos(k\theta)$.
[hint]
It is the real part of $\sum\binom nk e^{ik\theta} = (1+e^{i\theta})^n$.
[/hint]
[sol]
By the binomial theorem,
$$\sum_{k=0}^n\binom nk e^{ik\theta} = \left(1+e^{i\theta}\right)^n.$$
The required sum is the real part of the left side, hence of the right side.

Write
$$1+e^{i\theta} = e^{i\theta/2}\left(e^{-i\theta/2}+e^{i\theta/2}\right) = 2\cos\!\left(\frac\theta2\right)e^{i\theta/2}.$$
Therefore
$$\left(1+e^{i\theta}\right)^n = 2^n\cos^n\!\left(\frac\theta2\right)e^{in\theta/2},$$
and taking real parts,
$$\sum_{k=0}^n\binom nk\cos(k\theta) = 2^n\cos^n\!\left(\frac\theta2\right)\cos\!\left(\frac{n\theta}{2}\right). \;∎$$

(Check $\theta=0$: right side $=2^n$, left side $=\sum\binom nk = 2^n$ ✓.)
[/sol]

### P5 | Medium | Standard
Find the number of subsets of $\{1,2,\dots,n\}$ whose size is divisible by 3.
[hint]
Roots-of-unity filter on $(1+x)^n$ with $\omega = e^{2\pi i/3}$.
[/hint]
[sol]
The number of subsets of size $k$ is $\binom nk$, so we want $\displaystyle N = \sum_{3\mid k}\binom nk$.

By the roots-of-unity filter with $m=3$, $r=0$, $\omega=e^{2\pi i/3}$:
$$N = \frac13\left[(1+1)^n + (1+\omega)^n + (1+\omega^2)^n\right] = \frac13\left[2^n+(1+\omega)^n+(1+\omega^2)^n\right].$$

Since $1+\omega+\omega^2=0$: $1+\omega = -\omega^2$ and $1+\omega^2=-\omega$. Also $\omega = e^{2\pi i/3}$, so
$$(1+\omega)^n+(1+\omega^2)^n = (-\omega^2)^n+(-\omega)^n = (-1)^n\left(\omega^{2n}+\omega^{n}\right).$$
Now $\omega^n + \omega^{2n} = 2\cos\!\left(\frac{2\pi n}{3}\right)$, which equals $2$ if $3\mid n$ and $-1$ otherwise.

Therefore
$$N = \frac{2^n + (-1)^n\cdot 2\cos\!\left(\frac{2\pi n}{3}\right)}{3} = \begin{cases}\dfrac{2^n+2(-1)^n}{3} & 3 \mid n,\\[3mm] \dfrac{2^n-(-1)^n}{3} & 3\nmid n.\end{cases}$$

**Check $n=3$:** subsets of size 0 or 3: $1+1 = 2$. Formula: $\frac{8+2(-1)^3}{3} = \frac{8-2}{3}=2$ ✓.
**Check $n=4$:** sizes 0 and 3: $1+\binom43 = 1+4=5$. Formula ($3\nmid4$): $\frac{16-1}{3}=5$ ✓. ∎
[/sol]

### P6 | Medium | Standard
Let $z$ be a complex number with $|z|=1$ and $z \ne \pm1$. Prove that $\dfrac{z}{1+z^2}$ is real.
[hint]
Show the number equals its own conjugate, using $\bar z = 1/z$.
[/hint]
[sol]
Since $|z|=1$ we have $z\bar z = 1$, so $\bar z = \dfrac1z$.

Let $w = \dfrac{z}{1+z^2}$. Note $1+z^2 \ne 0$: otherwise $z^2=-1$, so $z = \pm i$ — and then $1+z^2=0$ indeed, so we additionally require $z \ne \pm i$ for $w$ to be defined. Assume that.

Compute the conjugate:
$$\bar w = \frac{\bar z}{1+\bar z^2} = \frac{1/z}{1+1/z^2} = \frac{1/z}{\frac{z^2+1}{z^2}} = \frac{1}{z}\cdot\frac{z^2}{z^2+1} = \frac{z}{1+z^2} = w.$$

A complex number equal to its own conjugate is real. Hence $w \in \mathbb{R}$. ∎

*(Concretely, writing $z=e^{i\theta}$ gives $\frac{z}{1+z^2} = \frac{1}{z^{-1}+z} = \frac{1}{2\cos\theta}$ — manifestly real.)*
[/sol]

### P7 | Medium | Standard
Let $a, b, c$ be distinct complex numbers with $|a|=|b|=|c|=1$. Prove that $abc$ lies on the unit circle and that the triangle $abc$ is equilateral if and only if $a+b+c = 0$ **and** $|a|=|b|=|c|$.
[hint]
For the "if" direction, use $a+b+c=0$ with all moduli 1 to compute $|a-b|^2$ and show all three side lengths are equal.
[/hint]
[sol]
$|abc| = |a||b||c| = 1$, so $abc$ is on the unit circle.

**($\Leftarrow$) Suppose $|a|=|b|=|c|=1$ and $a+b+c=0$.** Then $c = -(a+b)$, and
$$1 = |c|^2 = |a+b|^2 = |a|^2+|b|^2+2\operatorname{Re}(a\bar b) = 2 + 2\operatorname{Re}(a\bar b),$$
so $\operatorname{Re}(a\bar b) = -\frac12$. Hence
$$|a-b|^2 = |a|^2+|b|^2 - 2\operatorname{Re}(a\bar b) = 2 + 1 = 3.$$
By symmetry the same computation gives $|b-c|^2 = |c-a|^2 = 3$. So all three sides have length $\sqrt3$: the triangle is **equilateral**. ✓

**($\Rightarrow$) Suppose $|a|=|b|=|c|=1$ and $abc$ is equilateral.** The circumcentre of an equilateral triangle is its centroid. All three points lie on the unit circle centred at 0, so the circumcentre is 0, hence the centroid $\frac{a+b+c}{3}$ is 0, i.e.
$$a+b+c=0. \;✓$$

**Answer:** with all three on the unit circle, $abc$ is equilateral $\iff a+b+c=0$. ∎
[/sol]

### P8 | Medium | Standard
Evaluate $\displaystyle\sum_{k=1}^{n-1}\frac{1}{1-\omega^k}$, where $\omega = e^{2\pi i/n}$ and $n \ge 2$.
[hint]
Pair $k$ with $n-k$: what is $\frac{1}{1-\omega^k}+\frac{1}{1-\omega^{-k}}$?
[/hint]
[sol]
Note $\omega^{n-k} = \omega^{-k} = \overline{\omega^k}$ (since $|\omega|=1$). Pair the term $k$ with the term $n-k$:
$$\frac{1}{1-\omega^k}+\frac{1}{1-\omega^{-k}}.$$
Compute the second term:
$$\frac{1}{1-\omega^{-k}} = \frac{\omega^k}{\omega^k-1} = \frac{-\omega^k}{1-\omega^k}.$$
So the pair sums to
$$\frac{1-\omega^k}{1-\omega^k} = 1.$$

**Case $n$ odd.** The indices $1,\dots,n-1$ split into $\frac{n-1}{2}$ such pairs $\{k, n-k\}$ with $k \ne n-k$. Each contributes 1, so the sum is $\dfrac{n-1}{2}$.

**Case $n$ even.** The index $k = n/2$ pairs with itself; there $\omega^{n/2}=-1$ and the term is $\frac{1}{1-(-1)}=\frac12$. The remaining $n-2$ indices form $\frac{n-2}{2}$ pairs summing to 1 each. Total:
$$\frac{n-2}{2}+\frac12 = \frac{n-1}{2}.$$

In both cases,
$$\sum_{k=1}^{n-1}\frac{1}{1-\omega^k} = \frac{n-1}{2}. \;∎$$

**Check $n=3$:** $\frac{1}{1-\omega}+\frac1{1-\omega^2}$. With $\omega = -\frac12+\frac{\sqrt3}{2}i$: the two terms are conjugates summing to $2\operatorname{Re}\frac{1}{1-\omega} = 1 = \frac{3-1}{2}$ ✓.
[/sol]

### P9 | Hard | Standard
Prove that $\displaystyle\prod_{k=1}^{n-1}\sin\frac{k\pi}{n} = \frac{n}{2^{n-1}}$.
[hint]
Use $1-\omega^k = 1-e^{2\pi ik/n}$ and compute its modulus in terms of a sine. Then apply the product identity $\prod_{k=1}^{n-1}(1-\omega^k)=n$.
[/hint]
[sol]
Let $\omega = e^{2\pi i/n}$. We computed (P3) that
$$\prod_{k=1}^{n-1}\left(1-\omega^k\right) = n.$$

Take absolute values. For each $k$,
$$1-\omega^k = 1 - e^{2\pi i k/n} = e^{i\pi k/n}\left(e^{-i\pi k/n}-e^{i\pi k/n}\right) = e^{i\pi k/n}\cdot\left(-2i\sin\frac{k\pi}{n}\right).$$
Hence
$$\left|1-\omega^k\right| = 2\left|\sin\frac{k\pi}{n}\right| = 2\sin\frac{k\pi}{n},$$
the last step because $0 < \frac{k\pi}{n} < \pi$ for $1\le k\le n-1$, so the sine is positive.

Taking the modulus of the product,
$$n = \left|\prod_{k=1}^{n-1}\left(1-\omega^k\right)\right| = \prod_{k=1}^{n-1}\left|1-\omega^k\right| = \prod_{k=1}^{n-1}2\sin\frac{k\pi}{n} = 2^{n-1}\prod_{k=1}^{n-1}\sin\frac{k\pi}{n}.$$

Therefore
$$\prod_{k=1}^{n-1}\sin\frac{k\pi}{n} = \frac{n}{2^{n-1}}. \;∎$$

**Check $n=3$:** $\sin\frac\pi3\sin\frac{2\pi}3 = \left(\frac{\sqrt3}2\right)^2 = \frac34$, and $\frac{3}{2^2}=\frac34$ ✓.
[/sol]

### P10 | Hard | Standard
Let $ABC$ be a triangle inscribed in the unit circle in $\mathbb{C}$, with vertices $a,b,c$. Prove that the orthocentre is $h = a+b+c$, and deduce that the circumcentre $O$, centroid $G$ and orthocentre $H$ are collinear with $OG:GH = 1:2$ (the **Euler line**).
[hint]
Show that $h - a$ is perpendicular to $b-c$, i.e. that $\frac{h-a}{b-c}$ is purely imaginary, using $\bar a = 1/a$ etc.
[/hint]
[sol]
Place the circumcircle as the unit circle centred at the origin, so $|a|=|b|=|c|=1$ and
$$\bar a = \frac1a, \qquad \bar b = \frac1b, \qquad \bar c = \frac1c.$$
Let $h = a+b+c$.

**Claim: $AH \perp BC$.** Two segments are perpendicular exactly when the ratio of their complex differences is purely imaginary, i.e. $\overline{w} = -w$ for $w = \frac{h-a}{b-c}$.

Compute:
$$h - a = b+c, \qquad \text{so}\qquad w = \frac{b+c}{b-c}.$$
Conjugating and using $\bar b = 1/b$, $\bar c = 1/c$:
$$\bar w = \frac{\frac1b+\frac1c}{\frac1b-\frac1c} = \frac{\frac{b+c}{bc}}{\frac{c-b}{bc}} = \frac{b+c}{c-b} = -\frac{b+c}{b-c} = -w.$$

So $w$ is purely imaginary, i.e. $AH \perp BC$ (provided $b \neq c$, which holds). ✓

By symmetry $BH \perp CA$ and $CH \perp AB$, so $h$ lies on all three altitudes:
$$H = a+b+c.$$

**The Euler line.** With this setup:
$$O = 0, \qquad G = \frac{a+b+c}{3}, \qquad H = a+b+c.$$
Therefore
$$H = 3G, \qquad\text{i.e.}\qquad H - O = 3(G-O).$$

So $O$, $G$, $H$ are collinear (all on the line through $0$ and $a+b+c$), and
$$\vec{OG} = \frac13\vec{OH}, \qquad \vec{GH} = \frac23\vec{OH},$$
giving $OG : GH = 1 : 2$, with $G$ between $O$ and $H$. ∎

*(When $a+b+c=0$ the triangle is equilateral and all three points coincide — the degenerate case of the Euler line.)*

**Why this setup is worth knowing.** Putting the circumcircle on the unit circle turns conjugation into $z \mapsto 1/z$, and the orthocentre becomes a *sum*. A surprising number of olympiad geometry problems about $H$, $O$ and $G$ become two lines of algebra in this coordinate system.
[/sol]
