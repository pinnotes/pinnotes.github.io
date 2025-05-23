---
title: M1_VOL1_SETS&FUNCTIONS.pdf
date: 2025-05-08
math: true
tags:
  - Notes 
excludeSearch: false
weight: 1
cascade:
 series: ["English"]
 image: "/images/hello.jpg"

---

<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# explain all concepts from this pdf with detailed structure , examples, related questions \& answers with ease to understand

Here’s a detailed, structured explanation of all the key concepts from the provided PDF, “Mathematics for Data Science-1: Sets and Functions,” along with examples, related questions, and answers, designed for easy understanding[^1].

---

## 1. Set Theory

**Definition:**
A set is a collection of well-defined, distinct objects called elements. Order and duplicates do not matter.

**Examples:**

- Finite set: Months of the year = {January, February, ..., December}
- Infinite set: Even natural numbers = {0, 2, 4, 6, ...}

**Subsets:**
A set $X$ is a subset of $Y$ ($X \subseteq Y$) if every element of $X$ is in $Y$. If $X \neq Y$, it is a proper subset ($X \subset Y$).

**Example:**
$X = \{1,2,5,7,9,300\}, Y = \{0,1,2,5,7,9,40,170,300\}$
Here, $X \subset Y$.

**Set Comprehension:**
Constructing a subset using a rule, e.g., squares of even integers:
$\{x^2 \mid x \in \mathbb{Z}, x \text{ is even}\}$.

**Related Question:**
What is the cardinality of the set $A = \{a, b, c, d\}$?
**Answer:** 4

---

## 2. Natural Numbers, Integers, Rational and Real Numbers

**Natural Numbers ($\mathbb{N}$):**
$\{0, 1, 2, 3, ...\}$

**Integers ($\mathbb{Z}$):**
$\{..., -2, -1, 0, 1, 2, ...\}$

**Rational Numbers ($\mathbb{Q}$):**
Numbers expressible as $\frac{p}{q}$, where $p, q \in \mathbb{Z}, q \neq 0$.

**Real Numbers ($\mathbb{R}$):**
All rational and irrational numbers (e.g., $\sqrt{2}, \pi$).

**Example:**
Is $\frac{2}{4}$ a rational number?
**Answer:** Yes, since it equals $\frac{1}{2}$.

**Related Question:**
What is the greatest common divisor (gcd) of 9 and 12?
**Answer:** 3

---

## 3. Relations and Functions

**Cartesian Product:**
Given sets $X$ and $Y$, $X \times Y = \{(x,y) \mid x \in X, y \in Y\}$.

**Example:**
$A = \{a, b\}, B = \{1,2,3\}$
$A \times B = \{(a,1), (a,2), (a,3), (b,1), (b,2), (b,3)\}$

**Binary Relation:**
A subset of $X \times Y$.
**Example:**
$R_1 = \{(a,1), (b,2)\}$ is a relation from $A$ to $B$.

**Properties of Relations:**

- **Reflexive:** Every element is related to itself.
- **Symmetric:** If $(x,y) \in R$, then $(y,x) \in R$.
- **Transitive:** If $(x,y) \in R$ and $(y,z) \in R$, then $(x,z) \in R$.
- **Equivalence:** Reflexive, symmetric, and transitive.

**Function:**
A relation where each element of the domain is mapped to exactly one element in the codomain.

**Types of Functions:**

- **Injective (One-to-one):** Each output corresponds to one input.
- **Surjective (Onto):** Every element in the codomain is mapped to.
- **Bijective:** Both injective and surjective.

**Example:**
Let $f: \mathbb{R} \rightarrow \mathbb{R}, f(x) = x^2$.
Is $f$ surjective?
**Answer:** No, because negative numbers are not in the range.

**Related Question:**
Find the domain of $f(x) = \sqrt{x}$.
**Answer:** $[0, \infty)$

---

## 4. Straight Lines

**Rectangular Coordinate System:**
Points are defined by $(x, y)$ coordinates.

**Distance Between Two Points:**

$$
\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

**Example:**
Distance between $(2,4)$ and $(-4,12)$:

$$
\sqrt{(-4-2)^2 + (12-4)^2} = \sqrt{36 + 64} = 10
$$

**Section Formula:**
A point dividing a line segment joining $(x_1, y_1)$ and $(x_2, y_2)$ in ratio $m:n$:

$$
\left(\frac{mx_2 + nx_1}{m+n}, \frac{my_2 + ny_1}{m+n}\right)
$$

**Example:**
Midpoint of $(4,-2)$ and $(0,2)$:

$$
\left(\frac{4+0}{2}, \frac{-2+2}{2}\right) = (2, 0)
$$

**Area of a Triangle:**

$$
\frac{1}{2} \left| x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) \right|
$$

**Slope of a Line:**

$$
m = \frac{y_2 - y_1}{x_2 - x_1}
$$

**Equation of a Line:**

- **Slope-intercept:** $y = mx + c$
- **Point-slope:** $y - y_1 = m(x - x_1)$
- **Two-point:** $y - y_1 = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1)$

**Parallel and Perpendicular Lines:**

- **Parallel:** $m_1 = m_2$
- **Perpendicular:** $m_1 m_2 = -1$

**Distance from a Point to a Line:**

$$
\frac{|ax_1 + by_1 + c|}{\sqrt{a^2 + b^2}}
$$

**Example:**
Find the distance of the line $3x + 4y - 5 = 0$ from $(1,2)$:

$$
\frac{|3(1) + 4(2) - 5|}{\sqrt{3^2 + 4^2}} = \frac{|3 + 8 - 5|}{5} = \frac{6}{5}
$$

**Sum Squared Error (SSE):**

$$
SSE = \sum_{i=1}^n (y_i - (mx_i + c))^2
$$

---

## 5. Quadratic Functions

**Definition:**
$f(x) = ax^2 + bx + c, a \neq 0$

**Axis of Symmetry:**
$x = -\frac{b}{2a}$

**Vertex:**
$\left( -\frac{b}{2a}, f\left(-\frac{b}{2a}\right) \right)$

**Types of Parabola:**

- **Upward:** $a > 0$
- **Downward:** $a < 0$

**Slope:**
$f'(x) = 2ax + b$

**Quadratic Equation:**
$ax^2 + bx + c = 0$

**Methods to Solve:**

1. **Factoring:**
$x^2 + 2x - 24 = 0 \implies (x+6)(x-4)=0 \implies x=-6, 4$
2. **Completing the Square:**
$x^2 + 2x = 24 \implies (x+1)^2 = 25 \implies x = 4, -6$
3. **Quadratic Formula:**
$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

**Discriminant:**
$D = b^2 - 4ac$

- $D > 0$: Two real roots
- $D = 0$: One real root
- $D < 0$: No real roots

**Example:**
Solve $x^2 + 2x - 24 = 0$
**Answer:** $x = 4, -6$

---

## 6. Polynomial Functions

**Definition:**
$f(x) = a_nx^n + \dots + a_0, a_n \neq 0$

**Classification:**

- **By variables:** Univariate, bivariate, multivariate
- **By degree:** Constant (0), linear (1), quadratic (2), cubic (3), quartic (4)
- **By terms:** Monomial (1), binomial (2), trinomial (3)

**Operations:**

- **Addition:** Combine like terms
- **Subtraction:** Similar to addition
- **Multiplication:** Distribute and combine like terms
- **Division:** Use long division or synthetic division

**Example:**
Add $p(x) = x^3 + 3x^2 + 5x - 10$ and $q(x) = 3x^3 + 5x^2 - 6x - 20$
**Answer:** $4x^3 + 8x^2 - x - 30$

**Zeroes:**
Values of $x$ for which $f(x) = 0$

---

## 7. Exponential and Logarithmic Functions

**Exponential Function:**
$f(x) = a^x, a > 0, a \neq 1$

**Laws of Exponents:**

- $a^s \times a^t = a^{s+t}$
- $(a^s)^t = a^{st}$
- $(ab)^s = a^s b^s$

**Graphing:**

- **For $a > 1$:** Increasing
- **For $0 < a < 1$:** Decreasing

**Natural Exponential:**
$f(x) = e^x$

**Logarithmic Function:**
$f(x) = \log_a x$ is the inverse of $a^x$

**Laws of Logarithms:**

- $\log_a MN = \log_a M + \log_a N$
- $\log_a \frac{M}{N} = \log_a M - \log_a N$
- $\log_a M^r = r \log_a M$

**Example:**
Solve $\log_8(x+1) + \log_8(x-1) = 1$
**Answer:**
$\log_8((x+1)(x-1)) = 1 \implies x^2 - 1 = 8 \implies x = 3$

---

## 8. Composition and Inverse Functions

**Composition:**
$(f \circ g)(x) = f(g(x))$

**Example:**
$f(x) = 3x - 4, g(x) = x^2$
$(f \circ g)(x) = 3x^2 - 4$

**Inverse Function:**
If $f$ is one-to-one, then $f^{-1}$ exists and $f^{-1}(f(x)) = x$

**Example:**
$g(x) = 4x, h(x) = \frac{x}{4}$
$g$ is the inverse of $h$.

---

## 9. Exercises and Applications

**Example:**
Solve $e^{-x^2} = \frac{(e^x)^2}{e^3}$
**Answer:**
$e^{-x^2} = e^{2x-3} \implies -x^2 = 2x-3 \implies x^2 + 2x - 3 = 0 \implies x = 1, -3$

**Example:**
If $N(t) = N_0 e^{-\lambda t}$, and at $t_1$, $N(t_1) = \frac{N_0}{2}$, at $t_2$, $N(t_2) = \frac{N_0}{4}$, what is the relation between $t_1$ and $t_2$?
**Answer:**
$t_2 = 2t_1$ (since half-life is constant)

---

## Summary Table

| Concept | Key Points \& Formulas | Example/Question | Answer/Explanation |
| :-- | :-- | :-- | :-- |
| Set Theory | Subset, cardinality, set comprehension | Cardinality of $\{a,b,c,d\}$ | 4 |
| Numbers | $\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{R}$ | Is $\frac{2}{4}$ rational? | Yes |
| Relations | Cartesian product, reflexive, symmetric, transitive | Is $R = \{(1,1), (2,2)\}$ reflexive? | Yes (if $S = \{1,2\}$) |
| Functions | Injective, surjective, bijective, domain, range | Domain of $\sqrt{x}$ | $[0, \infty)$ |
| Straight Lines | Distance, slope, equation, area | Distance $(2,4)$ to $(-4,12)$ | 10 |
| Quadratic Functions | Vertex, axis, roots, discriminant | Solve $x^2 + 2x - 24 = 0$ | $x = 4, -6$ |
| Polynomials | Degree, terms, operations | Add $x^3 + 3x^2 + 5x - 10$ and $3x^3 + 5x^2 - 6x - 20$ | $4x^3 + 8x^2 - x - 30$ |
| Exponential/Logarithm | Laws, graphing, solving equations | Solve $\log_8(x+1) + \log_8(x-1) = 1$ | $x = 3$ |
| Composition/Inverse | $(f \circ g)(x) = f(g(x))$, $f^{-1}$ | $f(x) = 3x - 4, g(x) = x^2$ | $(f \circ g)(x) = 3x^2 - 4$ |


---

This structured approach covers all major concepts in the PDF, with examples and questions for clarity and practice[^1].

<div style="text-align: center">⁂</div>

[^1]: M1_VOL1_SETS-FUNCTIONS.pdf

