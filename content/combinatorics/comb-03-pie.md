---
id: comb-03-pie
title: Inclusion–exclusion
level: Core
hours: 2
blurb: The formula, how to set it up without losing a sign, and the standard applications — derangements, surjections, and counting with forbidden patterns.
tags: inclusion-exclusion, derangements, surjections
link: Yufei Zhao — Combinatorics handout :: https://yufeizhao.com/olympiad/comb1.pdf
video: Search: inclusion exclusion principle olympiad :: https://www.youtube.com/results?search_query=inclusion+exclusion+principle+derangements+olympiad
---

## The principle

> $$\left|A_1\cup\cdots\cup A_n\right| = \sum_i |A_i| - \sum_{i<j}\left|A_i\cap A_j\right| + \sum_{i<j<k}\left|A_i\cap A_j\cap A_k\right| - \cdots + (-1)^{n-1}\left|A_1\cap\cdots\cap A_n\right|.$$

Equivalently, for the complement inside a universe $U$:
$$\left|\overline{A_1}\cap\cdots\cap\overline{A_n}\right| = \sum_{S\subseteq\{1,\dots,n\}}(-1)^{|S|}\left|\bigcap_{i\in S}A_i\right|,$$
with the empty intersection interpreted as $U$.

*Why it works.* An element in exactly $m$ of the sets is counted $\binom m1 - \binom m2+\cdots = 1 - (1-1)^m = 1$ time when $m\ge1$, and $0$ times when $m=0$.

> **The practical form.** Almost every olympiad use is the complement version: *count the objects with **none** of $n$ bad properties*. Define $A_i$ = "has bad property $i$", and the answer is $\sum_S(-1)^{|S|}|A_S|$.

The whole skill is in choosing the $A_i$ so that the intersections $|A_S|$ depend only on $|S|$ — then the sum collapses to $\sum_k(-1)^k\binom nk f(k)$.

## Standard applications

**Derangements.** Permutations of $\{1,\dots,n\}$ with no fixed point. Let $A_i$ = "fixes $i$", so $|A_S| = (n-|S|)!$:
$$D_n = \sum_{k=0}^n(-1)^k\binom nk(n-k)! = n!\sum_{k=0}^n\frac{(-1)^k}{k!}.$$

**Surjections.** The number of surjections from an $n$-set onto a $k$-set. Let $A_i$ = "misses element $i$":
$$\mathrm{Surj}(n,k) = \sum_{j=0}^{k}(-1)^j\binom kj (k-j)^n.$$

**Euler's totient.** $\varphi(n) = n\prod_{p\mid n}\left(1-\frac1p\right)$ is inclusion–exclusion over the primes dividing $n$.

**Counting integers coprime to something / avoiding divisors.** Let $A_p$ = "divisible by $p$".

## Setting it up without errors

1. State the universe $U$ explicitly.
2. Define each $A_i$ in words.
3. Compute $|A_S|$ for a general $S$ — and check whether it depends only on $|S|$.
4. Write the alternating sum. Signs: $(-1)^{|S|}$ for the complement version, $(-1)^{|S|-1}$ for the union version.
5. Sanity-check on a small case by brute force.

Step 5 is not optional. Inclusion–exclusion is the easiest place in combinatorics to lose a sign, and a small case takes a minute.

## Common traps

- Forgetting the $k=0$ term (the whole universe) in the complement version.
- Assuming $|A_i\cap A_j|$ depends only on the number of sets when it actually depends on which.
- Using the union formula when you wanted the complement, and dropping a sign.
- Miscounting when the bad properties are not "independent" in the required sense.

## Problems

### P1 | Warmup | Standard
How many integers in $\{1,\dots,100\}$ are divisible by 2 or 3 or 5?
[hint]
Inclusion–exclusion on three sets, counting multiples with floors.
[/hint]
[sol]
Let $A_2, A_3, A_5$ be the multiples of 2, 3, 5 in $\{1,\dots,100\}$.

$$|A_2| = 50, \quad |A_3| = 33, \quad |A_5| = 20,$$
$$|A_2\cap A_3| = \left\lfloor\tfrac{100}{6}\right\rfloor = 16, \quad |A_2\cap A_5| = \left\lfloor\tfrac{100}{10}\right\rfloor = 10, \quad |A_3\cap A_5| = \left\lfloor\tfrac{100}{15}\right\rfloor = 6,$$
$$|A_2\cap A_3\cap A_5| = \left\lfloor\tfrac{100}{30}\right\rfloor = 3.$$

By inclusion–exclusion,
$$|A_2\cup A_3\cup A_5| = (50+33+20)-(16+10+6)+3 = 103 - 32 + 3 = \mathbf{74}. \;∎$$
[/sol]

### P2 | Warmup | Standard
How many integers in $\{1,\dots,1000\}$ are coprime to 30?
[hint]
$30 = 2\cdot3\cdot5$. Count those divisible by none of 2, 3, 5.
[/hint]
[sol]
We want integers divisible by none of 2, 3, 5. By the complement form,
$$N = 1000 - \left(\left\lfloor\tfrac{1000}{2}\right\rfloor+\left\lfloor\tfrac{1000}{3}\right\rfloor+\left\lfloor\tfrac{1000}{5}\right\rfloor\right) + \left(\left\lfloor\tfrac{1000}{6}\right\rfloor+\left\lfloor\tfrac{1000}{10}\right\rfloor+\left\lfloor\tfrac{1000}{15}\right\rfloor\right)-\left\lfloor\tfrac{1000}{30}\right\rfloor$$
$$= 1000 - (500+333+200)+(166+100+66)-33 = 1000-1033+332-33 = \mathbf{266}.$$

*(Cross-check: the density is $\left(1-\frac12\right)\left(1-\frac13\right)\left(1-\frac15\right) = \frac{4}{15}$, and $\frac{4}{15}\cdot1000 = 266.\overline6$ ✓.)* ∎
[/sol]

### P3 | Easy | Standard
How many permutations of $\{1,\dots,5\}$ have no fixed point? Verify by the formula and by direct reasoning.
[hint]
$D_5 = 5!\sum_{k=0}^5\frac{(-1)^k}{k!}$.
[/hint]
[sol]
$$D_5 = 5!\left(1-\frac1{1!}+\frac1{2!}-\frac1{3!}+\frac1{4!}-\frac1{5!}\right) = 120\left(1-1+\tfrac12-\tfrac16+\tfrac1{24}-\tfrac1{120}\right).$$
Computing the bracket over 120: $\;120 - 120 + 60 - 20 + 5 - 1 = 44$, so the bracket is $\frac{44}{120}$ and
$$D_5 = 120\cdot\frac{44}{120} = \mathbf{44}.$$

**Cross-check by recurrence.** Derangements satisfy $D_n = (n-1)\left(D_{n-1}+D_{n-2}\right)$ with $D_1=0$, $D_2=1$:
$$D_3 = 2(1+0)=2,\quad D_4 = 3(2+1)=9,\quad D_5 = 4(9+2)=44 \;✓. \;∎$$
[/sol]

### P4 | Easy | Standard
Count the surjections from a 5-element set onto a 3-element set.
[hint]
Inclusion–exclusion on which elements of the codomain are missed.
[/hint]
[sol]
Let $U$ be all $3^5$ functions from the 5-set to the 3-set, and $A_i$ = "element $i$ of the codomain is not hit". Then $|A_S| = (3-|S|)^5$.

$$\mathrm{Surj}(5,3) = \sum_{j=0}^{3}(-1)^j\binom3j(3-j)^5 = 3^5 - 3\cdot2^5+3\cdot1^5 - 0 = 243 - 96 + 3 = \mathbf{150}. \;∎$$

*(Cross-check: $\mathrm{Surj}(n,k) = k!\,S(n,k)$ with $S(5,3)=25$ the Stirling number, and $3!\cdot25 = 150$ ✓.)*
[/sol]

### P5 | Medium | Standard
How many ways can 5 distinct letters be placed into 5 addressed envelopes so that **exactly two** letters go into their correct envelopes?
[hint]
Choose which two are correct, then derange the remaining three.
[/hint]
[sol]
Choose which 2 letters are correctly placed: $\binom52 = 10$ ways.

The remaining 3 letters must **all** be misplaced, i.e. form a derangement of 3 objects: $D_3 = 2$.

Total:
$$10\cdot2 = \mathbf{20}. \;∎$$

*(General formula: the number of permutations of $n$ objects with exactly $k$ fixed points is $\binom nk D_{n-k}$.)*
[/sol]

### P6 | Medium | CRMO 2012 P4
Let $X = \{1,2,\dots,10\}$. Find the number of pairs $\{A,B\}$ with $A\subseteq X$, $B\subseteq X$, $A \ne B$ and $A\cap B = \{2,3,5,7\}$.
[hint]
Each of the remaining 6 elements is independently in $A$ only, $B$ only, or neither — but not both. Then handle the unordered-pair and $A\ne B$ conditions.
[/hint]
[sol]
The four elements $2,3,5,7$ lie in both $A$ and $B$, by hypothesis.

For each of the remaining $10-4 = 6$ elements, there are exactly **three** possibilities: in $A$ only, in $B$ only, or in neither. (It cannot be in both, since $A\cap B$ is exactly $\{2,3,5,7\}$.)

So the number of **ordered** pairs $(A,B)$ satisfying the intersection condition is
$$3^6 = 729.$$

Among these, $A = B$ occurs only when every one of the 6 elements is in "neither", giving exactly one ordered pair, namely $A=B=\{2,3,5,7\}$. Excluding it leaves $729-1 = 728$ ordered pairs with $A \ne B$.

Since the problem asks for **unordered** pairs $\{A,B\}$ and $A\ne B$, each unordered pair corresponds to exactly 2 ordered pairs:
$$\frac{728}{2} = \mathbf{364}. \;∎$$
[/sol]

### P7 | Medium | Standard
How many integers between 1 and 1000 are neither perfect squares, nor perfect cubes, nor perfect fifth powers?
[hint]
Count each type, then the overlaps (which are sixth, tenth, fifteenth and thirtieth powers).
[/hint]
[sol]
Within $\{1,\dots,1000\}$:

- squares: $\lfloor\sqrt{1000}\rfloor = 31$
- cubes: $\lfloor 1000^{1/3}\rfloor = 10$
- fifth powers: $\lfloor 1000^{1/5}\rfloor = 3$ (namely $1, 32, 243$)

Overlaps:
- squares **and** cubes = sixth powers: $\lfloor 1000^{1/6}\rfloor = 3$ ($1, 64, 729$)
- squares and fifth powers = tenth powers: $\lfloor1000^{1/10}\rfloor = 1$ ($1$)
- cubes and fifth powers = fifteenth powers: $1$ ($1$)
- all three = thirtieth powers: $1$ ($1$)

By inclusion–exclusion, the count of "square or cube or fifth power" is
$$(31+10+3)-(3+1+1)+1 = 44 - 5 + 1 = 40.$$

Therefore the answer is
$$1000 - 40 = \mathbf{960}. \;∎$$
[/sol]

### P8 | Medium | Standard
In how many ways can the letters of **MISSISSIPPI** be arranged so that no two S's are adjacent?
[hint]
First arrange the non-S letters, then slot the S's into the gaps.
[/hint]
[sol]
MISSISSIPPI has 11 letters: M(1), I(4), S(4), P(2).

**Step 1: arrange the non-S letters.** These are M, I, I, I, I, P, P — seven letters with repetitions:
$$\frac{7!}{1!\,4!\,2!} = \frac{5040}{48} = 105 \text{ arrangements.}$$

**Step 2: place the S's in the gaps.** Seven letters create $7+1 = 8$ gaps (including the two ends). Choosing 4 distinct gaps for the 4 identical S's guarantees no two S's are adjacent:
$$\binom84 = 70.$$

**Total:**
$$105\cdot70 = \mathbf{7350}. \;∎$$
[/sol]

### P9 | Hard | Standard
Find the number of permutations $\sigma$ of $\{1,\dots,n\}$ with $\sigma(i)\ne i$ and $\sigma(i)\ne i+1$ for all $i$ (indices mod $n$, so $\sigma(n)\ne 1$ too).
[hint]
There are $2n$ forbidden positions arranged in a cycle. Use inclusion–exclusion, and count how many ways $k$ non-conflicting forbidden positions can be chosen — that is the circular non-adjacent selection count.
[/hint]
[sol]
This is the **ménage-type** problem. Think of the $n\times n$ board with $2n$ forbidden cells: $(i,i)$ and $(i,i+1)$ for each $i$ (indices mod $n$).

Let $A_c$ be the set of permutations using forbidden cell $c$. By inclusion–exclusion,
$$N = \sum_{k=0}^{n}(-1)^k\,r_k\,(n-k)!,$$
where $r_k$ is the number of ways to choose $k$ of the forbidden cells **no two of which share a row or column** (only then is the intersection non-empty, of size $(n-k)!$).

**Computing $r_k$.** Arrange the $2n$ forbidden cells in a cycle: $(1,1), (1,2), (2,2), (2,3), (3,3),\dots$ — consecutive cells in this cyclic list share a row or a column, and non-consecutive ones do not. So $r_k$ is the number of ways to choose $k$ non-adjacent items from $2n$ arranged in a circle:
$$r_k = \frac{2n}{2n-k}\binom{2n-k}{k}.$$

**Therefore**
$$N = \sum_{k=0}^{n}(-1)^k\,\frac{2n}{2n-k}\binom{2n-k}{k}\,(n-k)!.$$

**Check $n=3$.**
$$N = \tfrac{6}{6}\binom60 3! - \tfrac66\cdot\!\ldots$$
compute term by term: $k=0$: $1\cdot1\cdot6 = 6$. $k=1$: $\frac{6}{5}\binom51\cdot2! = \frac65\cdot5\cdot2 = 12$. $k=2$: $\frac64\binom42\cdot1! = 1.5\cdot6 = 9$. $k=3$: $\frac63\binom33\cdot0! = 2\cdot1\cdot1 = 2$.
$$N = 6 - 12 + 9 - 2 = 1.$$
Indeed for $n=3$ the only permutation avoiding $\sigma(i)\in\{i,i+1\}$ is $\sigma = (1\,3\,2)$ i.e. $\sigma(1)=3,\sigma(2)=1,\sigma(3)=2$ ✓. ∎
[/sol]

### P10 | Hard | Standard
Prove that the number of surjections from an $n$-set onto a $k$-set is $\displaystyle\sum_{j=0}^{k}(-1)^j\binom kj(k-j)^n$, and deduce $\displaystyle\sum_{j=0}^{k}(-1)^j\binom kj(k-j)^n = 0$ when $n<k$.
[hint]
Inclusion–exclusion over which codomain elements are missed. For the deduction, ask how many surjections exist when $n<k$.
[/hint]
[sol]
**The formula.** Let $U$ be the set of **all** functions $f$ from an $n$-set $X$ to a $k$-set $Y$, so $|U| = k^n$.

For each $y\in Y$, let $A_y = \{f : y \notin f(X)\}$ — the functions that miss $y$. A function is a surjection exactly when it lies in none of the $A_y$.

For a subset $S\subseteq Y$ with $|S|=j$, the functions missing **every** element of $S$ are precisely the functions $X \to Y\setminus S$, so
$$\left|\bigcap_{y\in S}A_y\right| = (k-j)^n,$$
which depends only on $j$. There are $\binom kj$ such subsets.

By the complement form of inclusion–exclusion,
$$\mathrm{Surj}(n,k) = \sum_{j=0}^{k}(-1)^j\binom kj(k-j)^n. \;∎$$

**The deduction.** If $n < k$, a function from an $n$-element set can hit at most $n < k$ elements, so it can never be surjective. Hence $\mathrm{Surj}(n,k)=0$, giving
$$\sum_{j=0}^{k}(-1)^j\binom kj(k-j)^n = 0 \qquad\text{whenever } n<k. \;∎$$

*(Substituting $i = k-j$ turns this into $\sum_i(-1)^i\binom ki i^n = 0$ for $n<k$ — exactly the finite-difference identity of the binomial chapter, P7, now proved combinatorially.)*

**Check.** $n=1$, $k=2$: $\binom20 2^1 - \binom21 1^1+\binom22 0^1 = 2-2+0 = 0$ ✓.
[/sol]
