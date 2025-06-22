---
title: Mathematics for Data Science 1
description: Q1. Which of the following are irrational numbers❓ (a) $3^{1/3}$ (b) $(\sqrt{8}+\sqrt{2})(\sqrt{12}-\sqrt{3})$ (c) $\frac{\sqrt{18}-3}{\sqrt{2}-1}$ (d) $\frac{\sqrt{8}+\sqrt{2}}{\sqrt{8}-\sqrt{2}}$
weight: 1
subject: programming
subtitle: Graded Assignment

categories:
- Mathematics Graded Assignment

---

## Graded Assignment Week - 1

### 1. Multiple Choice Questions (MSQ) 🧠

<br/>

{{< border type="question" >}}
**Q1**. Which of the following are irrational numbers❓

**(a)** $3^{1/3}$

**(b)** $(\sqrt{8}+\sqrt{2})(\sqrt{12}-\sqrt{3})$

**(c)** $\frac{\sqrt{18}-3}{\sqrt{2}-1}$

**(d)** $\frac{\sqrt{8}+\sqrt{2}}{\sqrt{8}-\sqrt{2}}$
{{< /border >}}

{{< border >}}
✅ **Solution:**

(a) $3^{1/3}$ is irrational as it cannot be written as a fraction $p/q$ with $p, q \in \mathbb{Z}, q \neq 0$.

(b) $(\sqrt{8}+\sqrt{2})(\sqrt{12}-\sqrt{3}) = (2\sqrt{2}+\sqrt{2})(2\sqrt{3}-\sqrt{3}) = 3\sqrt{2} \cdot \sqrt{3} = 3\sqrt{6}$, which is irrational.

(c) $\frac{\sqrt{18}-3}{\sqrt{2}-1} = \frac{3\sqrt{2}-3}{\sqrt{2}-1} = \frac{3(\sqrt{2}-1)}{\sqrt{2}-1} = 3$ (rational).

(d) $\frac{\sqrt{8}+\sqrt{2}}{\sqrt{8}-\sqrt{2}} = \frac{3\sqrt{2}}{\sqrt{2}} = 3$ (rational).

**Answer:** ✅ (a), (b)
{{< /border >}}


### 2. Examples and Additional Solutions

{{< border type="bonus" >}}

**Example (QL):**
Consider a table of materials and their dielectric constants:


| Material | Dielectric constant |
| :-- | :-- |
| Air | 1 |
| Vacuum | 2 |
| Paper | 3 |
| Glass | 8 |
| Nerve | 7 |
| Membrane | 7 |
| Silicon | 13 |

**Solution:**
Each material maps to a unique dielectric constant, so the function is bijective.
{{</ border >}}

{{< border type="question" title="Q3">}}

Given:

$A = \{x \in \mathbb{N} \mid x \bmod 2 = 0 \text{ and } 1 \leq x \leq 10\} = \{2,4,6,8,10\}$

$B = \{x \in \mathbb{N} \mid x \bmod 5 = 0 \text{ and } 6 \leq x \leq 25\} = \{10,15,20,25\}$

$C = \{x \in \mathbb{N} \mid x \bmod 7 = 0 \text{ and } 7 \leq x \leq 29\} = \{7,14,21,28\}$

Find $A \setminus (B \cup C)$, $B \setminus (A \cup C)$, $C \setminus (B \cup A)$.
{{< /border >}}

{{< border title="Solution" >}}
**Solution:**
$A \setminus (B \cup C) = \{2,4,6,8\}$
$B \setminus (A \cup C) = \{15,20,25\}$
$C \setminus (B \cup A) = \{7,14,21,28\}$ (note: likely a typo in the original for "2δ", should be "28")

Thus,
$A \setminus (B \cup C) \cup B \setminus (A \cup C) \cup C \setminus (B \cup A) = \{2,4,6,8,15,20,25,7,14,21,28\}$
**Cardinality:** 11
{{< /border >}}

{{< border type="question" >}}
**Example (Q4):**
Total number of people = 180
Number who watched Dabang $N(D) = 95$
Number who watched Avatar and RRR $N(A \cup R) = 40$
Number who watched Dabang and RRR $N(D \cup R) = 55$
Let $x$ be the number who watched all three movies.
{{< /border >}}

{{< border title="Answer" >}}

$$
(x-10) + (10+x) + (5+x) + (55-x) + (50-x) + x + (40-x) = 180
$$

$$
x + 150 = 180 \implies x = 30
$$

Number who watched only RRR and Avatar = $40 - x = 10$
{{< /border >}}

---

## 3. Numerical Answer Type (NAT)

{{< border type="question" >}}

**Question 5:**
Suppose $f: D \longrightarrow \mathbb{R}$ is a function defined by $f(x) = \frac{\sqrt{x^2-9}}{x+3}$, where $D \subset \mathbb{Z}$. Let $A$ be the set of integers not in the domain of $f$. Find the cardinality of $A$.
{{</ border >}}

{{< border >}}
**Solution:**
Domain requires $x^2 - 9 \geq 0$ and $x+3 \neq 0$, so $x \notin \{-3,-2,-1,0,1,2\}$.
Thus, $A = \{-3,-2,-1,0,1,2\}$; **cardinality = 6**.

**Answer:** 6
{{</ border >}}


{{< border type="question" >}}
**Question 6:**
Consider $S = \{a \mid a \in \mathbb{N}, a \leq 18\}$.
Let $R_1 = \{(x,y) \mid x, y \in S, y = 3x\}$
Let $R_2 = \{(x,y) \mid x, y \in S, y = x^2\}$

Find the cardinality of $R_1 \setminus (R_1 \cap R_2)$.

{{< /border >}}

{{< border title="Solution" >}}

$S = \{0,1,2,\ldots,18\}$

$R_1 = \{(0,0),(1,3),(2,6),(3,9),(4,12),(5,15),(6,18)\}$

$R_2 = \{(0,0),(1,1),(2,4),(3,9),(4,16)\}$

$R_1 \cap R_2 = \{(0,0),(3,9)\}$

$R_1 \setminus (R_1 \cap R_2) = \{(1,3),(2,6),(4,12),(5,15),(6,18)\}$

**Answer:** 5
{{< /border >}}

{{< border type="question" >}}
**Question 7:**
In a Zoo, there are 6 Bengal white tigers and 7 Bengal royal tigers. Out of these, 5 are males and 10 are either Bengal royal tigers or males. Find the number of female Bengal white tigers.
{{< /border >}}

{{< border >}}
**Solution:**
Let BW = Bengal White, BR = Bengal Royal, M = Male.
$n(BR) = 7$, $n(M) = 5$, $n(BR \cup M) = 10$
Using inclusion-exclusion:

$$
n(BR \cup M) = n(BR) + n(M) - n(BR \cap M)
$$

$$
10 = 7 + 5 - n(BR \cap M) \implies n(BR \cap M) = 2
$$

So, male Bengal Royal tigers = 2, male Bengal White tigers = 3
Female Bengal White tigers = 6 - 3 = **3**

**Answer:** 3
{{< /border >}}

## 4. Additional Examples and Incorrect Questions (Not for Marks)

{{< border >}}

**Example (Q8):**
Define $R = \{(A,B) \mid A \text{ and } B \text{ are cousins}\}$,
and $S = \{(A,B) \mid A \text{ is son of } B\}$.

**Solution:**
(Not fully solved, but shows how relations are defined for family relationships.)
{{</ border >}}

{{< border >}}

**Example (Q9):**
Given $R(m)$ has cardinality $m = 8$, $S(n)$ has cardinality $n = 8$, so $m + n = 16$.
{{</ border >}}

{{< border >}}

**Example (Q10):**
Define $f = \{(A,B) \mid A \text{ is son of } B\}$ as a function from $P$ to $Q$.

**Analysis:**

- **Option 1:** Not a function if some $L \in P$ has no image.
- **Option 2:** Function, not injective (not one-one).
- **Option 3:** Function, onto (every element in codomain has preimage).
- **Option 4:** Bijective (both injective and surjective).
{{</ border >}}



## Summary Table

| Question | Type | Solution/Answer |
| :-- | :-- | :-- |
| 1 | MSQ | (a), (b) |
| QL | Ex. | Bijective function example |
| Q3 | Ex. | Cardinality = 11 |
| Q4 | Ex. | $x = 30$, only Avatar \& RRR = 10 |
| 5 | NAT | 6 |
| 6 | NAT | 5 |
| 7 | NAT | 3 |
| Q8-Q10 | Ex. | Family relations and function examples |


