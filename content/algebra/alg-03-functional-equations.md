---
id: alg-03-functional-equations
title: Functional equations
level: Core
hours: 4
blurb: The opening moves — substitution, injectivity, surjectivity, fixed points — and how to finish by pinning the function down and verifying.
tags: functional equations, Cauchy, substitution, injectivity
link: Evan Chen — handouts index (see the FE handouts) :: https://web.evanchen.cc/handouts/
link: MOTP — Algebra :: https://jpsaha.github.io/MOTP/alg/
video: Search: functional equations olympiad substitution :: https://www.youtube.com/results?search_query=functional+equations+olympiad+substitution+injective
---

## The shape of the work

A functional equation asks you to find **all** functions satisfying some identity. That word "all" means the solution has two halves, and both must appear:

1. **Necessity.** Deduce, from the equation, that $f$ must have a particular form.
2. **Sufficiency.** Verify that each candidate actually satisfies the original equation.

The verification step is not optional and is not a formality — substitutions can introduce spurious candidates. In an exam, writing "and one checks $f(x)=x$ works" with the check shown takes two lines and protects several marks.

## The opening moves

Given $f$ satisfying some identity $E(x,y)$, try these in order:

- **$x = y$**, **$x=0$**, **$y=0$**, **$x=1$**, **$y=1$** — the cheapest information available.
- **$y = -x$**, **$y = f(x)$**, **$x \to -x$**.
- **Set one variable to a constant $c$** and see what the resulting one-variable identity says.
- **Swap $x$ and $y$** and compare with the original. If the left side is symmetric but the right is not, you get a free identity.

Then look for structure:

- **Is $f$ injective?** Typically shown by: assume $f(a)=f(b)$, substitute both into the equation, deduce $a=b$.
- **Is $f$ surjective?** Typically: the equation expresses an arbitrary expression in terms of $f(\text{something})$.
- **What is $f(0)$?** Often forced to be $0$ or determined up to two cases.
- **Are there fixed points** ($f(a)=a$)? The set of fixed points is often closed under the operation in the equation.

## Cauchy's equation

> $f(x+y) = f(x)+f(y)$ for all $x,y\in\mathbb{R}$.

Over $\mathbb{Q}$ this forces $f(x) = cx$. Over $\mathbb{R}$ it forces $f(x) = cx$ **provided** any one of these regularity conditions holds:

- $f$ is continuous at a single point, or
- $f$ is monotonic on some interval, or
- $f$ is bounded above (or below) on some interval of positive length, or
- $f(x) \ge 0$ for $x \ge 0$.

Without such a condition there exist pathological solutions (built with a Hamel basis), but **these never appear at RMO** — the problem will always hand you one of the conditions above, usually implicitly. Still, say which one you are using.

**Proof over $\mathbb{Q}$.** $f(0)=0$ from $x=y=0$. Induction gives $f(nx) = nf(x)$ for $n\in\mathbb{N}$; $f(-x) = -f(x)$ from $y=-x$; and $f(x) = f(n\cdot\frac xn) = nf(\frac xn)$ gives $f(\frac xn) = \frac1n f(x)$. Combining, $f(qx) = qf(x)$ for rational $q$, so $f(q) = qf(1)$. ∎

**Relatives.**
$$f(xy) = f(x)+f(y) \;\to\; \log\text{-like}, \qquad f(x+y) = f(x)f(y) \;\to\; \exp\text{-like},$$
$$f(xy) = f(x)f(y) \;\to\; \text{power-like}.$$
Each reduces to Cauchy by taking logs or exponentials on a suitable domain.

## Worked example 1

**Find all $f:\mathbb{R}\to\mathbb{R}$ with $f(x+y) = f(x)+f(y)+xy$ for all $x,y$.**

Set $y = 0$: $f(x) = f(x)+f(0)$, so $f(0)=0$.

Now guess the shape: the $xy$ term suggests a quadratic. Try $g(x) = f(x) - \frac{x^2}{2}$. Then
$$g(x+y) = f(x+y) - \frac{(x+y)^2}{2} = f(x)+f(y)+xy - \frac{x^2+2xy+y^2}{2} = \left(f(x)-\frac{x^2}2\right)+\left(f(y)-\frac{y^2}2\right),$$
so $g$ satisfies Cauchy's equation. Assuming the standard regularity (or if the problem restricts to $\mathbb{Q}$), $g(x) = cx$.

Hence $f(x) = \frac{x^2}{2}+cx$.

**Verify:** $f(x)+f(y)+xy = \frac{x^2+y^2}2 + c(x+y)+xy = \frac{(x+y)^2}{2}+c(x+y) = f(x+y)$ ✓. ∎

## Worked example 2

**Find all $f:\mathbb{R}\to\mathbb{R}$ with $f(f(x)) = x$ and $f$ increasing.**

$f$ is an involution, so it is a bijection. Suppose $f(a) > a$ for some $a$. Applying the increasing function $f$ to both sides:
$$f(f(a)) > f(a) \implies a > f(a),$$
contradicting $f(a)>a$. Symmetrically $f(a)<a$ is impossible.

Hence $f(a)=a$ for all $a$: $f$ is the identity.

**Verify:** $f(f(x)) = x$ ✓ and the identity is increasing ✓. ∎

*(Without "increasing", $f(x) = -x$ and many others work — a good illustration of how much a monotonicity hypothesis gives you.)*

## Common traps

- Finding candidates and stopping. **Always verify.**
- Proving $f(q) = cq$ for rational $q$ and asserting it for all reals without a regularity hypothesis.
- Dividing by $f(x)$ without ruling out $f(x)=0$.
- Assuming $f$ is continuous, differentiable or polynomial when the problem never said so.
- Substituting a value outside the stated domain (e.g. $x=0$ when the domain is $\mathbb{R}^+$).

## Problems

### P1 | Warmup | Standard
Find all $f:\mathbb{R}\to\mathbb{R}$ with $f(x+y)=f(x)+f(y)$ and $f$ continuous.
[hint]
Prove $f(q)=qf(1)$ for rational $q$, then use continuity and density of $\mathbb{Q}$.
[/hint]
[sol]
Set $x=y=0$: $f(0)=2f(0)$, so $f(0)=0$.

**Integers.** By induction, $f(nx)=nf(x)$ for $n \ge 1$. Setting $y=-x$: $f(0)=f(x)+f(-x)$, so $f(-x)=-f(x)$, extending this to all $n \in \mathbb{Z}$.

**Rationals.** For positive integers $n$, $f(x) = f\!\left(n\cdot\frac xn\right) = n f\!\left(\frac xn\right)$, so $f\!\left(\frac xn\right)=\frac1n f(x)$. Combining with the integer case, $f(qx)=qf(x)$ for all $q\in\mathbb{Q}$. Taking $x=1$,
$$f(q) = q\,f(1) \qquad\text{for all } q \in \mathbb{Q}.$$

**Reals.** Let $c = f(1)$ and let $r\in\mathbb{R}$. Choose rationals $q_n \to r$. By continuity,
$$f(r) = \lim_n f(q_n) = \lim_n c\,q_n = c\,r.$$

**Verify.** $f(x)=cx$ gives $f(x+y)=c(x+y)=cx+cy=f(x)+f(y)$ ✓, and is continuous ✓.

**Answer:** $f(x)=cx$ for a constant $c\in\mathbb{R}$. ∎
[/sol]

### P2 | Warmup | Standard
Find all $f:\mathbb{R}\to\mathbb{R}$ with $f(x)+2f(1-x)=x^2$ for all $x$.
[hint]
Substitute $x \to 1-x$ to get a second equation, then solve the resulting linear system in $f(x)$ and $f(1-x)$.
[/hint]
[sol]
The given equation is
$$f(x)+2f(1-x) = x^2. \tag{1}$$
Replacing $x$ by $1-x$:
$$f(1-x)+2f(x) = (1-x)^2. \tag{2}$$

Treat $f(x)$ and $f(1-x)$ as unknowns. Compute $2\times(2) - (1)$:
$$2f(1-x)+4f(x) - f(x) - 2f(1-x) = 2(1-x)^2 - x^2,$$
$$3f(x) = 2(1-2x+x^2) - x^2 = 2 - 4x + x^2.$$

So
$$f(x) = \frac{x^2-4x+2}{3}.$$

**Verify.** $f(1-x) = \frac{(1-x)^2-4(1-x)+2}{3} = \frac{1-2x+x^2-4+4x+2}{3} = \frac{x^2+2x-1}{3}$. Then
$$f(x)+2f(1-x) = \frac{x^2-4x+2 + 2x^2+4x-2}{3} = \frac{3x^2}{3} = x^2 \;✓$$

**Answer:** $f(x)=\dfrac{x^2-4x+2}{3}$. ∎
[/sol]

### P3 | Easy | Standard
Find all $f:\mathbb{R}\to\mathbb{R}$ with $f(xy)=f(x)f(y)$ for all $x,y$, and $f$ not identically zero.
[hint]
Find $f(1)$ and $f(0)$. Then consider $f(x^2) = f(x)^2 \ge 0$. Without further hypotheses the answer is not unique — say what extra assumption you are making.
[/hint]
[sol]
**$f(1)$.** Set $x=y=1$: $f(1)=f(1)^2$, so $f(1)\in\{0,1\}$. If $f(1)=0$ then $f(x)=f(x\cdot1)=f(x)f(1)=0$ for all $x$ — excluded. So $f(1)=1$.

**$f(0)$.** Set $y=0$: $f(0)=f(x)f(0)$ for all $x$. If $f(0)\ne0$, then $f(x)=1$ for all $x$, which is a valid solution. Otherwise $f(0)=0$.

**Sign.** $f(x^2)=f(x)^2\ge0$, so $f \ge 0$ on $[0,\infty)$.

**Multiplicativity on positives.** Restricted to $x>0$, put $g(t) = \log f(e^t)$ (valid if $f>0$ on $(0,\infty)$). Then $g(s+t)=g(s)+g(t)$ — Cauchy. With any regularity hypothesis (continuity, monotonicity, or boundedness on an interval), $g(t)=ct$, giving
$$f(x)=x^c \qquad (x>0).$$

**Extending to negatives.** $f(-1)^2 = f(1) = 1$, so $f(-1)=\pm1$, and $f(-x)=f(-1)f(x)$.

**Answer** (assuming continuity, as any RMO problem would supply): the solutions are
$$f\equiv 1, \qquad f(x)=|x|^c, \qquad f(x)=|x|^c\operatorname{sgn}(x)$$
for a constant $c > 0$, together with $f \equiv 0$ (excluded here).

**Verify** $f(x)=|x|^c$: $f(xy)=|xy|^c = |x|^c|y|^c = f(x)f(y)$ ✓.

*(Without a regularity assumption there are pathological solutions, as for Cauchy. Always state the hypothesis you use.)* ∎
[/sol]

### P4 | Easy | Standard
Find all $f:\mathbb{R}\to\mathbb{R}$ with $f(f(x))=f(x)$ and $f$ injective.
[hint]
Apply injectivity directly to the equation.
[/hint]
[sol]
The equation reads $f(f(x)) = f(x)$, i.e. $f(u) = f(v)$ with $u = f(x)$ and $v = x$.

Since $f$ is injective, $f(u)=f(v)$ implies $u=v$, so
$$f(x)=x \qquad\text{for all } x.$$

**Verify.** $f(f(x))=f(x)=x$ ✓ and the identity is injective ✓.

**Answer:** $f$ is the identity. ∎

*(Without injectivity there are many solutions: any $f$ that is the identity on its image, e.g. $f(x)=\max(x,0)$.)*
[/sol]

### P5 | Medium | Standard
Find all $f:\mathbb{R}\to\mathbb{R}$ with
$$f(x^2 - y^2) = (x-y)\big(f(x)+f(y)\big) \qquad\text{for all } x,y.$$
[hint]
Set $y=0$, then $y=-x$, then $x=0$. You should be able to show $f$ is odd and additive.
[/hint]
[sol]
**Step 1: $f(0)=0$.** Set $x=y=0$: $f(0)=0$.

**Step 2: $f$ is odd.** Set $x=0$:
$$f(-y^2) = (0-y)(f(0)+f(y)) = -y f(y).$$
Set $y=0$:
$$f(x^2) = x\big(f(x)+f(0)\big) = x f(x).$$
Comparing the two with $y$ replaced by $x$:
$$f(-x^2) = -x f(x) = -f(x^2).$$
Since every non-positive real is $-x^2$ for some $x$, and every non-negative real is $x^2$, this gives $f(-t)=-f(t)$ for all $t \ge 0$, hence for all real $t$. So **$f$ is odd**. ✓

**Step 3: additivity.** Set $y \to -y$ in the original equation and use oddness:
$$f(x^2-y^2) = f(x^2 - (-y)^2) = (x+y)\big(f(x)+f(-y)\big) = (x+y)\big(f(x)-f(y)\big).$$
Comparing with the original,
$$(x-y)\big(f(x)+f(y)\big) = (x+y)\big(f(x)-f(y)\big).$$
Expanding both sides:
$$xf(x)+xf(y)-yf(x)-yf(y) = xf(x)-xf(y)+yf(x)-yf(y),$$
which simplifies to
$$2x f(y) = 2y f(x), \qquad\text{i.e.}\qquad x f(y) = y f(x) \quad\text{for all } x,y.$$

**Step 4: conclude.** Put $y = 1$: $x f(1) = f(x)$, so
$$f(x) = cx, \qquad c = f(1).$$

**Verify.** With $f(x)=cx$:
$$(x-y)\big(cx+cy\big) = c(x-y)(x+y) = c(x^2-y^2) = f(x^2-y^2) \;✓$$

**Answer:** $f(x)=cx$ for a real constant $c$. ∎

*(Note that no continuity hypothesis was needed — the relation $xf(y)=yf(x)$ did all the work. That is typical of well-designed olympiad FEs.)*
[/sol]

### P6 | Medium | Standard
Find all $f:\mathbb{Z}\to\mathbb{Z}$ with $f(m+n)+f(mn-1) = f(m)f(n)+2$ for all integers $m,n$.
[hint]
Try $n=0$, then $n=1$. Guess the answer from small values and then prove it by induction.
[/hint]
[sol]
**Set $n=0$:** $f(m) + f(-1) = f(m)f(0)+2$, so
$$f(m)\big(1 - f(0)\big) = 2 - f(-1) \quad\text{for all } m. \tag{1}$$

If $f(0)\ne1$, then $f(m)$ is constant, say $f\equiv c$. Substituting into the original: $c + c = c^2+2$, i.e. $c^2-2c+2=0$, which has no real (hence no integer) roots. So **$f(0)=1$**, and then (1) forces $f(-1)=2$.

**Set $n=1$:** $f(m+1)+f(m-1) = f(m)f(1)+2$. $\;(2)$

**Set $m=n=1$ in the original:** $f(2)+f(0) = f(1)^2+2$, so $f(2)=f(1)^2+1$.

Let $a = f(1)$. From (2) with $m=1$: $f(2)+f(0) = a^2+2 \Rightarrow f(2)=a^2+1$ ✓ (consistent).

From (2) with $m=0$: $f(1)+f(-1) = f(0)a + 2 = a+2$. Since $f(-1)=2$: $a + 2 = a+2$ ✓ — no new information.

**Set $m=n=-1$:** $f(-2)+f(0) = f(-1)^2+2 = 6$, so $f(-2)=5$.

**Set $m=2,n=-1$:** $f(1)+f(-3) = f(2)f(-1)+2 = 2(a^2+1)+2 = 2a^2+4$. So $f(-3) = 2a^2+4-a$.

**Try the natural guess $f(x)=x^2+1$.** Then $a = f(1) = 2$. Check the original:
$$f(m+n)+f(mn-1) = (m+n)^2+1 + (mn-1)^2+1 = m^2+2mn+n^2 + m^2n^2-2mn+1+2 = m^2+n^2+m^2n^2+3,$$
$$f(m)f(n)+2 = (m^2+1)(n^2+1)+2 = m^2n^2+m^2+n^2+1+2 = m^2n^2+m^2+n^2+3. \;✓$$

**Now pin down $a$.** Set $m=n=2$: $f(4)+f(3) = f(2)^2+2 = (a^2+1)^2+2$.
Set $m=3, n=1$ in (2): $f(4)+f(2) = a f(3)+2$, so $f(4) = af(3)+2-(a^2+1) = af(3)+1-a^2$.
Set $m=2,n=1$ in (2): $f(3)+f(1)=af(2)+2 \Rightarrow f(3) = a(a^2+1)+2-a = a^3+2$.

Substituting:
$$f(4) = a(a^3+2)+1-a^2 = a^4 - a^2+2a+1.$$
And from $m=n=2$:
$$f(4) = (a^2+1)^2+2 - f(3) = a^4+2a^2+3 - (a^3+2) = a^4 - a^3+2a^2+1.$$
Equating the two expressions for $f(4)$:
$$a^4-a^2+2a+1 = a^4-a^3+2a^2+1 \implies -a^2+2a = -a^3+2a^2 \implies a^3 - 3a^2+2a = 0,$$
$$a(a-1)(a-2)=0 \implies a \in \{0,1,2\}.$$

Check each against (2) and the original:
- $a=2$: gives $f(x)=x^2+1$, verified above ✓.
- $a=1$: then $f(2)=2$, $f(3)=1^3+2=3$, and (2) with $m=3$: $f(4)+f(2)=f(3)+2 \Rightarrow f(4)=3$. But $m=n=2$ needs $f(4)+f(3)=f(2)^2+2=6$, i.e. $3+3=6$ ✓. Continue: $m=2,n=-1$: $f(1)+f(-3)=f(2)f(-1)+2 = 4+2=6 \Rightarrow f(-3)=5$. Try $m=3,n=-1$: $f(2)+f(-4)=f(3)f(-1)+2=6+2=8 \Rightarrow f(-4)=6$. Now test $m=n=-2$: $f(-4)+f(3)=f(-2)^2+2 = 25+2=27$, but $6+3=9\ne27$ ✗. So $a=1$ fails.
- $a=0$: $f(2)=1$, $f(3)=2$. Test $m=n=2$: $f(4)+f(3)=f(2)^2+2=3 \Rightarrow f(4)=1$. Test $m=n=-2$: $f(-4)+f(3) = f(-2)^2+2=27 \Rightarrow f(-4)=25$. Test $m=3,n=-1$: $f(2)+f(-4)=f(3)f(-1)+2 = 4+2=6 \Rightarrow 1+25=26 \ne 6$ ✗. So $a=0$ fails.

**Answer:** $f(x)=x^2+1$ is the unique solution. ∎
[/sol]

### P7 | Medium | Standard
Find all $f:\mathbb{R}\to\mathbb{R}$ such that
$$f(x)f(y) - f(xy) = x + y \qquad\text{for all } x,y \in \mathbb{R}.$$
[hint]
Set $x=y=0$ to find the possible values of $f(0)$. Then set $y=0$ and see how much that alone determines.
[/hint]
[sol]
**Step 1: find $f(0)$.** Set $x=y=0$:
$$f(0)^2 - f(0) = 0 \implies f(0)\big(f(0)-1\big) = 0 \implies f(0) \in \{0, 1\}.$$

**Step 2: rule out $f(0)=0$.** Set $y = 0$ in the original:
$$f(x)f(0) - f(0) = x + 0 = x.$$
If $f(0) = 0$ this reads $0 = x$ for **all** real $x$, which is false. So
$$f(0) = 1.$$

**Step 3: read off $f$.** With $f(0)=1$, the same substitution $y=0$ gives
$$f(x)\cdot 1 - 1 = x \implies f(x) = x+1.$$

**Step 4: verify.** With $f(x)=x+1$,
$$f(x)f(y) - f(xy) = (x+1)(y+1) - (xy+1) = xy + x + y + 1 - xy - 1 = x+y \;✓$$

**Answer:** $f(x) = x+1$ is the unique solution. ∎

*(Note how little work was needed: a single well-chosen substitution, $y=0$, both eliminated a case and solved the problem. Always try setting a variable to 0 or 1 before anything clever.)*
[/sol]

### P8 | Hard | Standard
Find all $f:\mathbb{R}\to\mathbb{R}$ with
$$f\big(f(x)+y\big) = f(x^2-y)+4f(x)\,y \qquad\text{for all } x,y.$$
[hint]
Choose $y$ to make the two arguments $f(x)+y$ and $x^2-y$ equal. Everything cancels and you are left with a pointwise condition. Then the work is showing $f$ cannot "mix" the two pointwise options.
[/hint]
[sol]
**Step 1: the killer substitution.** Put
$$y = \frac{x^2-f(x)}{2},$$
which makes both arguments equal:
$$f(x)+y = \frac{x^2+f(x)}{2} = x^2 - y.$$
The equation collapses to
$$0 = 4f(x)\cdot\frac{x^2-f(x)}{2} = 2f(x)\big(x^2-f(x)\big),$$
so for **each individual** $x$,
$$f(x) = 0 \quad\text{or}\quad f(x)=x^2. \tag{$\dagger$}$$

In particular $f(0)=0$.

**Step 2: suppose $f$ mixes.** Assume there are $a \ne 0$ with $f(a)=0$, and $b$ with $f(b)=b^2 \ne 0$ (so $b\ne0$). We derive a contradiction.

Put $x = a$ in the original (using $f(a)=0$):
$$f(y) = f(a^2-y) \qquad\text{for all } y. \tag{1}$$

Take $y = b$ in (1): $b^2 = f(b) = f(a^2-b)$. By $(\dagger)$, $f(a^2-b)$ is $0$ or $(a^2-b)^2$; since $b^2\ne0$,
$$b^2 = (a^2-b)^2 \implies a^2 - b = \pm b \implies a^2 = 2b \ \text{ or } \ a = 0.$$
As $a\ne0$, we get
$$a^2 = 2b. \tag{2}$$

Take $y = 0$ in (1): $f(0)=f(a^2)$, and $f(0)=0$, so $f(a^2)=0$. By (2),
$$f(2b) = 0. \tag{3}$$

**Step 3: use $x=b$.** Put $x=b$ in the original (using $f(b)=b^2$):
$$f(b^2+y) = f(b^2-y) + 4b^2y \qquad\text{for all } y. \tag{4}$$

Choose $y = b^2-2b$, so that $b^2-y = 2b$ and $b^2+y = 2b^2-2b$. Then (4) together with (3) gives
$$f(2b^2-2b) = 0 + 4b^2(b^2-2b) = 4b^4-8b^3.$$

By $(\dagger)$, $f(2b^2-2b)$ equals $0$ or $(2b^2-2b)^2 = 4b^4-8b^3+4b^2$.

- If it is $0$: then $4b^4-8b^3 = 0$, i.e. $4b^3(b-2)=0$, so $b=2$ (as $b \ne 0$).
- If it is $(2b^2-2b)^2$: then $4b^4-8b^3+4b^2 = 4b^4-8b^3$, giving $4b^2=0$, i.e. $b=0$ — excluded.

So $b = 2$, and by (2), $a^2 = 4$, i.e. $a = \pm2$. Since $f(2)=b^2=4 \ne 0$ while $f(a)=0$, we must have $a = -2$.

**Step 4: finish the contradiction.** With $a=-2$, (1) reads
$$f(y)=f(4-y)\quad\text{for all } y. \tag{5}$$
Take $y=1$: $f(1)=f(3)$. By $(\dagger)$, $f(1)\in\{0,1\}$ and $f(3)\in\{0,9\}$; the only common value is $0$, so
$$f(1)=0.$$

Now put $x=1$ in the original (using $f(1)=0$):
$$f(y) = f(1-y) \quad\text{for all } y. \tag{6}$$

Combining (5) and (6): for every $t$,
$$f(t) \overset{(6)}{=} f(1-t) \overset{(5)}{=} f\big(4-(1-t)\big) = f(t+3).$$
So $f$ is periodic with period 3.

But $f(2)=4$, so periodicity forces $f(5)=4$. By $(\dagger)$, $f(5) \in \{0, 25\}$ — and $4$ is neither.

**Contradiction.** So $f$ does not mix: either $f(x)=0$ for all $x$, or $f(x)=x^2$ for all $x$.

**Step 5: verify both.**
- $f\equiv 0$: both sides are $0$ ✓.
- $f(x)=x^2$: LHS $=(x^2+y)^2 = x^4+2x^2y+y^2$; RHS $=(x^2-y)^2+4x^2y = x^4-2x^2y+y^2+4x^2y = x^4+2x^2y+y^2$ ✓.

**Answer:** $f \equiv 0$ and $f(x)=x^2$. ∎

**The move to remember.** When $f$ appears on both sides with different arguments, *choose the free variable to make those arguments equal*. It costs one line and often reduces the whole problem to a pointwise dichotomy.
[/sol]

### P9 | Hard | Standard
Find all $f:\mathbb{N}\to\mathbb{N}$ (positive integers) that are strictly increasing and satisfy $f(f(n)) = 3n$.
[hint]
Compute $f(1)$ by bounding. Then build the values up using $f(f(n))=3n$ and strict monotonicity, which forces $f(n+1)\ge f(n)+1$.
[/hint]
[sol]
**Step 1: $f(1)=2$.**

$f$ strictly increasing on $\mathbb{N}$ implies $f(n)\ge n$ is not automatic, but $f(n+1)>f(n)$ gives $f(n) \ge f(1)+n-1$.

If $f(1)=1$ then $f(f(1))=f(1)=1$, but it should be $3$. ✗
So $f(1)\ge2$. If $f(1)=k$ then $f(k)=f(f(1))=3$. Since $f$ is strictly increasing and $f(1)=k \ge 2$, we get $f(k) \ge f(2) > f(1) = k$, so $3 = f(k) > k$, giving $k < 3$. Hence $k=2$:
$$f(1)=2, \qquad f(2)=3.$$

**Step 2: generate values.** Applying $f$ to $f(2)=3$: $f(3)=f(f(2))=3\cdot2=6$. Then $f(6)=f(f(3))=9$, $f(9)=f(f(6))=18$, $f(18)=27$, and generally
$$f(3^k)=2\cdot3^k, \qquad f(2\cdot 3^k)=3^{k+1}.$$
(Induction: $f(3^k)=2\cdot3^k$ gives $f(2\cdot3^k)=f(f(3^k))=3\cdot3^k=3^{k+1}$, and then $f(3^{k+1})=f(f(2\cdot3^k))=3\cdot2\cdot3^k = 2\cdot3^{k+1}$.)

**Step 3: fill the gaps.** Between $3^k$ and $2\cdot3^k$ there are $3^k$ integers, and their images must lie strictly between $f(3^k)=2\cdot3^k$ and $f(2\cdot3^k)=3^{k+1}$, an interval also containing exactly $3^k$ integers. Strict monotonicity forces the map to be the "shift by $3^k$":
$$f\big(3^k+j\big) = 2\cdot3^k + j \qquad \text{for } 0 \le j \le 3^k.$$

Applying $f$ again:
$$f\big(2\cdot3^k+j\big) = f\big(f(3^k+j)\big) = 3\big(3^k+j\big) = 3^{k+1}+3j \qquad \text{for } 0\le j \le 3^k.$$

These two formulas cover every positive integer exactly once (the intervals $[3^k, 2\cdot3^k]$ and $[2\cdot3^k, 3^{k+1}]$ tile $[1,\infty)$), so $f$ is completely determined.

**Step 4: verify.** Both formulas are strictly increasing, they agree at the shared endpoints, and by construction $f(f(n))=3n$ on each piece. ✓

**Answer:** the unique such $f$ is
$$f(n) = \begin{cases} n + 3^k, & 3^k \le n \le 2\cdot 3^k,\\[1mm] 3(n - 3^k), & 2\cdot3^k \le n \le 3^{k+1}.\end{cases}$$
The first few values: $f(1)=2,\,f(2)=3,\,f(3)=6,\,f(4)=7,\,f(5)=8,\,f(6)=9,\,f(7)=12,\,f(8)=15,\,f(9)=18$. ∎
[/sol]

### P10 | Hard | Classic
Find all $f:\mathbb{R}\to\mathbb{R}$ with
$$f\big(x - f(y)\big) = f\big(f(y)\big) + x\,f(y) + f(x) - 1 \qquad\text{for all } x,y.$$
[hint]
Set $x = f(y)$ to get a formula for $f$ on its own image. Then define $h(x) = f(x) - \frac{c+1-x^2}{2}$ (where $c=f(0)$) and show $h(x - a) = h(x) + \frac{c-1}{2}$ for every $a$ in the image. Finally show the image minus itself is all of $\mathbb{R}$.
[/hint]
[sol]
Let $c = f(0)$ and let $A = \{f(y) : y\in\mathbb{R}\}$ be the image of $f$.

**Step 1: $f$ on its own image.** Set $x = f(y)$. The left side becomes $f(0)=c$, so
$$c = f\big(f(y)\big) + f(y)^2 + f\big(f(y)\big) - 1 \implies f\big(f(y)\big) = \frac{c+1-f(y)^2}{2}.$$
Since $f(y)$ ranges over $A$, this says
$$f(a) = \frac{c+1-a^2}{2} \qquad \text{for every } a \in A. \tag{1}$$

**Step 2: a shift identity.** Substituting (1) back into the original equation, with $a = f(y) \in A$:
$$f(x-a) = \frac{c+1-a^2}{2} + ax + f(x) - 1 = f(x) + ax + \frac{c-1-a^2}{2} \tag{2}$$
for all $x \in \mathbb{R}$ and all $a \in A$.

Now define the "error from the expected parabola"
$$h(x) = f(x) - \frac{c+1-x^2}{2}.$$
By (1), $h(a) = 0$ for every $a \in A$. Substituting $f(v) = \frac{c+1-v^2}{2}+h(v)$ into (2):
$$\frac{c+1-(x-a)^2}{2} + h(x-a) = \frac{c+1-x^2}{2} + h(x) + ax + \frac{c-1-a^2}{2}.$$
The quadratic parts give $\frac{x^2-(x-a)^2}{2} = ax - \frac{a^2}{2}$, so after cancelling,
$$ax - \frac{a^2}{2} + h(x-a) - h(x) - ax - \frac{c-1-a^2}{2} = 0,$$
$$h(x-a) = h(x) + \frac{c-1}{2} \qquad\text{for all } x\in\mathbb{R},\ a\in A. \tag{3}$$

**Step 3: $h$ is constant on $A - A$.** Take $p, q \in A$ and apply (3) with $x=p$, $a=q$:
$$h(p-q) = h(p) + \frac{c-1}{2} = 0 + \frac{c-1}{2} = \frac{c-1}{2}. \tag{4}$$

**Step 4: $A - A = \mathbb{R}$.** First, $A \ne \{0\}$: if $f\equiv0$ the original equation reads $0 = 0+0+0-1$, false. So pick $a_0 \in A$ with $a_0 \ne 0$. By (2),
$$\underbrace{f(x-a_0)}_{\in A} - \underbrace{f(x)}_{\in A} = a_0x + \frac{c-1-a_0^2}{2}.$$
The right-hand side is a **non-constant** linear function of $x$ (as $a_0 \ne 0$), so as $x$ runs over $\mathbb{R}$ it takes every real value. Hence every real number is a difference of two elements of $A$:
$$A - A = \mathbb{R}.$$

**Step 5: conclude.** By (4) and Step 4,
$$h(t) = \frac{c-1}{2} \qquad\text{for every } t\in\mathbb{R}.$$
But $h(a_0)=0$ since $a_0 \in A$. Therefore $\frac{c-1}{2}=0$, so
$$c = 1 \qquad\text{and}\qquad h \equiv 0.$$

Substituting into the definition of $h$:
$$f(x) = \frac{c+1-x^2}{2} = \frac{2-x^2}{2} = 1 - \frac{x^2}{2}.$$

**Step 6: verify.** Write $u = f(y) = 1-\frac{y^2}{2}$. Then
$$\text{LHS} = f(x-u) = 1 - \frac{(x-u)^2}{2} = 1 - \frac{x^2}{2} + xu - \frac{u^2}{2},$$
$$\text{RHS} = f(u) + xu + f(x) - 1 = \left(1-\frac{u^2}{2}\right) + xu + \left(1-\frac{x^2}{2}\right) - 1 = 1 - \frac{u^2}{2} + xu - \frac{x^2}{2}.$$
They agree for all $x,y$ ✓.

**Answer:** $f(x) = 1 - \dfrac{x^2}{2}$. ∎

**The technique worth stealing.** When you suspect the answer is a specific function $g$, set $h = f - g$ and show $h$ satisfies a *much simpler* equation — here, $h(x-a)-h(x)$ is a constant. Then a surjectivity argument ($A-A=\mathbb{R}$) upgrades "constant on a set" to "constant everywhere", and a single known value of $h$ pins the constant to zero.
[/sol]
