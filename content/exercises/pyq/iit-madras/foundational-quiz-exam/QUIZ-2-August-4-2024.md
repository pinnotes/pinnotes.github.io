---
title: QUIZ 2 Foundational 
subtitle: 4 Aug 2024
weight: 1
label: PYQ
categories:
- PYQ
- QUIZ 2
---

---

{{< border type="question"  >}}
**Question 1:**
Which of the following statements is/are true about the function \$ f(x) = |x^2 - 4x + 3| + 17 \$?
Options:
A. \$ f \$ is defined only for all \$ x \in \mathbb{N} \$.
B. \$ f \$ is a bijective function.
C. The range of \$ f \$ is $[0, \infty)$.
D. The minimum value of \$ f \$ is 17.
{{</ border >}}

{{< border >}}
**Solution 📝:**
Let's analyze \$ f(x) = |x^2 - 4x + 3| + 17 \$.

1️⃣ The quadratic \$ x^2 - 4x + 3 = (x-1)(x-3) \$ can take any real value and is defined for all real \$ x \$.
So, option A is FALSE.

2️⃣ The function involves an absolute value, which is not one-to-one (e.g., \$ x = a \$ and \$ x = b \$ can give the same value due to the absolute value), hence not bijective.
Option B is FALSE.

3️⃣ The minimum of \$ |x^2 - 4x + 3| \$ is 0 (attained when \$ x^2 - 4x + 3 = 0,\ x=1,3 \$), so minimum value of \$ f(x) \$ is 17, and the function takes all values \$ f(x) \geq 17 \$.
So, the range is $[17, \infty)$, not $[0, \infty)$.
Option C is FALSE.

4️⃣ As derived above, the minimum value is 17, attained at \$ x = 1, 3 \$.
Option D is TRUE.

**Answer:** The minimum value of \$ f \$ is 17.
{{</ border >}}

{{< border type="question"  >}}
**Question 2:**
Find the domain of the inverse function of \$ y = x^3 - 1 \$.
Options:
A. \$ \mathbb{R} \$
B. \$ \mathbb{R} \setminus \{1\} \$
C. \$ [1, \infty) \$
D. \$ \mathbb{R}\setminus [1, \infty) \$
{{</ border >}}

{{< border >}}
**Solution 📝:**
\$ y = x^3 - 1 \$ is a cubic function, which is bijective and continuous over \$ \mathbb{R} \$; it has an inverse \$ x = \sqrt[^1]{y+1} \$, which is also defined for all \$ y \in \mathbb{R} \$.

So, the domain of the inverse function is all real numbers \$ \mathbb{R} \$.

**Answer:** $\mathbb{R}$
{{</ border >}}

{{< border type="question"  >}}
**Question 3:**
Choose the set of correct options regarding logarithms:
Options:
A. If \$ 0 < b < 1 \$ and \$ 0 < x < 1 \$ then \$ \log_b x < 0 \$
B. If \$ 0 < b < 1, 0 < x < 1 \$, and \$ x > b \$ then \$ \log_b x > 1 \$
C. If \$ 0 < b < 1 \$ and \$ 0 < x < y \$ then \$ \log_b x > \log_b y \$
D. \$ \log_{10}100 \$ is a rational number.
{{</ border >}}

{{< border >}}
**Solution 📝:**
Let's analyze each option:

A. For \$ 0 < b < 1 \$, the logarithm function is decreasing. For \$ 0 < x < 1 \$, \$ \log_b x > 0 \$, so A is FALSE.

B. For \$ 0 < b < 1, 0 < x < 1 \$, and \$ x > b \$, \$ \log_b x \$ will not necessarily be greater than 1. FALSE.

C. For \$ 0 < b < 1 \$ and \$ x < y \$, \$ \log_b x > \log_b y \$ because the function is decreasing when base is between 0 and 1. TRUE.

D. \$ \log_{10} 100 = 2 \$, which is rational. TRUE.

**Answers:** C and D are correct.
{{</ border >}}

{{< border type="question"  >}}
**Question 4:**
Given four curves, select the correct options:
A. There are at least two points between -4 and 4, where the derivatives of the function corresponding to Curve 1 are equal.
B. At the origin the derivative of the function corresponding to Curve 2 does not exist.
C. The derivative of the function corresponding to Curve 3, at the origin and point (-2,0), are equal.
D. The derivative of the function corresponding to Curve 4 does not exist at any point.
{{</ border >}}

{{< border >}}
**Solution 📝:**
Curve 1 is continuous and differentiable, so Rolle's theorem applies. There must be points where the derivatives are equal between -4 and 4. TRUE.

Curve 2 has a cusp (sharp corner) at the origin, so the derivative does not exist there. TRUE.

Curve 3: The derivative at the origin and (-2,0) are not necessarily equal. FALSE.

Curve 4 is a constant function (horizontal line), so the derivative exists everywhere (and is zero). FALSE.

**Answers:** A and B are correct.
{{</ border >}}

{{< border type="question"  >}}
**Question 5:**
If \$ m^{\log_3 2} + 2^{\log_3 m} = 8 \$, find the value of \$ m \$.
{{</ border >}}

{{< border >}}
**Solution 📝:**
Let \$ x = \log_3 m \$, so \$ m = 3^x \$.

Then, \$ m^{\log_3 2} = (3^x)^{\log_3 2} = 2^x \$
And, \$ 2^{\log_3 m} = 2^{x} \$

So, \$ m^{\log_3 2} + 2^{\log_3 m} = 2^x + 2^x = 2 \cdot 2^x = 8 \implies 2^{x+1} = 8 \implies 2^{x+1} = 2^3 \implies x+1=3 \implies x=2 \$.

Therefore, \$ m = 3^{2} = 9 \$.

**Answer:** \$ m = 9 \$
{{</ border >}}

{{< border type="question"  >}}
**Question 6:**
If \$ f(x) = \sqrt{9 - x^2} \$, then find the value of \$ \sqrt{5} \times \lim_{x \to 2} \frac{f(x) - f(2)}{x - 2} \$.
{{</ border >}}

{{< border >}}
**Solution 📝:**
First, \$ f(x) = \sqrt{9 - x^2} \$.

Calculate \$ f(2) = \sqrt{9 - 4} = \sqrt{5} \$.

We need \$ \lim_{x \to 2} \frac{\sqrt{9-x^2} - \sqrt{5}}{x-2} \$.

Let \$ L = \lim_{x \to 2} \frac{\sqrt{9-x^2} - \sqrt{5}}{x-2} \$.

Multiply numerator and denominator by the conjugate:

$$
L = \lim_{x \to 2} \frac{(\sqrt{9-x^2} - \sqrt{5})(\sqrt{9-x^2} + \sqrt{5})}{(x-2)(\sqrt{9-x^2} + \sqrt{5})}
= \lim_{x \to 2} \frac{9-x^2 - 5}{(x-2)(\sqrt{9-x^2} + \sqrt{5})}
= \lim_{x \to 2} \frac{4 - x^2}{(x-2)(\sqrt{9-x^2} + \sqrt{5})}
$$

But \$ 4 - x^2 = (2 - x)(2 + x) \$.

So numerator: \$ (2-x)(2+x) = -(x-2)(2+x) \$.

Thus,

$$
L = \lim_{x \to 2} \frac{-(x-2)(2+x)}{(x-2)(\sqrt{9-x^2} + \sqrt{5})}
= \lim_{x \to 2} \frac{-(2+x)}{\sqrt{9-x^2} + \sqrt{5}}
$$

As \$ x \to 2 \$, this becomes:

$$
L = \frac{-(2+2)}{\sqrt{9-4} + \sqrt{5}} = \frac{-4}{\sqrt{5} + \sqrt{5}} = \frac{-4}{2\sqrt{5}} = \frac{-2}{\sqrt{5}}
$$

Value required: \$ \sqrt{5} \times L = \sqrt{5} \times \left(-\frac{2}{\sqrt{5}}\right) = -2 \$.

**Answer:** $-2$
{{</ border >}}





{{< border type="question" >}}
**Question 1:**
The left-hand limit (LHL) and right-hand limit (RHL) of the given function \$ f(x) \$ exist at \$ x = 0 \$ and are equal to each other.
Options:

- TRUE
- FALSE
{{</ border >}}

{{< border >}}
**Solution 📝:**

Let's analyze the piecewise function:

$$
f(x) = \begin{cases}
[x+1] & -3 \le x < 0 \\
0 & x = 0 \\
\{x+1\} & 0 < x \le 3
\end{cases}
$$

- The left-hand limit as \$ x \to 0^- \$ is \$ [0+1] = [^1] = 1 \$.
- The right-hand limit as \$ x \to 0^+ \$ is \$ \{0+1\} = \{1\} = 0 \$.

So LHL ≠ RHL, both exist but are not equal.

**Answer:** FALSE
{{</ border >}}

{{< border type="question" >}}
**Question 2:**
The function \$ f(x) \$ is continuous at \$ x = 0 \$.
Options:

- TRUE
- FALSE
{{</ border >}}

{{< border >}}
**Solution 📝:**

From above:

- LHL at \$ x=0 \$ is 1.
- RHL at \$ x=0 \$ is 0.
- \$ f(0) = 0 \$.

Since LHL ≠ RHL, and even RHL \$ = f(0) \$, but for continuity both limits must be equal and equal to \$ f(0) \$.

**Answer:** FALSE
{{</ border >}}

{{< border type="question" >}}
**Question 3:**
Find the total number of points in \$ [-3, 3] \$ at which \$ f(x) \$ is not continuous.
{{</ border >}}

{{< border >}}
**Solution 📝:**

Discontinuity can occur at endpoints and where the floor or fractional part “jumps”, i.e., at integers for the floor function and fractional part.

- In (-3, 0): Discontinuity at \$ x = -2, -1, 0 \$ (from greatest integer function).
- In (0, 3): Discontinuity at \$ x = 0, 1, 2, 3 \$ (from fractional part function).
- So, discontinuities occur at \$ x = -2, -1, 0, 1, 2 \$.

**Total:** 5 points

**Answer:** 5
{{</ border >}}

{{< border type="question" >}}
**Question 4:**
Left-hand derivative (LHD) and right-hand derivative (RHD) of the function \$ f(x) = 4x^5 + x^2|x+1| + x + 5 \$ exist and are equal at \$ x = -1 \$.
Options:

- TRUE
- FALSE
{{</ border >}}

{{< border >}}
**Solution 📝:**

At \$ x = -1 \$, the derivative of \$ |x+1| \$ changes abruptly:

- For \$ x < -1 \$: \$ |x+1| = -(x+1) \$
- For \$ x > -1 \$: \$ |x+1| = (x+1) \$

Their derivatives at \$ x = -1 \$ are different, hence LHD ≠ RHD.

**Answer:** FALSE
{{</ border >}}

{{< border type="question" >}}
**Question 5:**
The function \$ |x+1| f(x) \$ is continuous at \$ x = -1 \$.
Options:

- TRUE
- FALSE
{{</ border >}}

{{< border >}}
**Solution 📝:**

At \$ x = -1 \$: \$ |x+1| = 0 \$, so \$ |x+1| f(x) = 0 \$ for any \$ f(x) \$.
Both side-limits as \$ x \to -1 \$ approach 0.

**Answer:** TRUE
{{</ border >}}

{{< border type="question" >}}
**Question 6:**
The derivative of the function \$ f \$ at \$ x=0 \$ is 1.
Options:

- TRUE
- FALSE
{{</ border >}}

{{< border >}}
**Solution 📝:**

From earlier:

- LHL (\$ x = 0^- \$): Slope from left = derivative of [x+1] = 0 almost everywhere (except at discontinuities), but as left from $[-3,0)$, $[x+1]$ is constant near 0 so derivative = 0.
- RHL (\$ x=0^+ \$): Derivative of \$ \{x+1\} \$ with respect to \$ x \$ is 1 for non-integer \$ x \$, since \$ \{x+1\} = x+1 - [x+1] \$ and derivative of \$ x+1 \$ is 1.
- But at \$ x=0 \$, function is not continuous or differentiable; so derivative does not exist.

**Answer:** FALSE
{{</ border >}}

{{< border type="question" >}}
**Question 7:**
Calculate the limit of the function:

$$
f(x) = \begin{cases}
x^2 - 2x + 4 & x \ge 0 \\
e^{x^2} + 3 & x < 0
\end{cases}
$$

At \$ x = 0 \$.
{{</ border >}}

{{< border >}}
**Solution 📝:**

Left-hand limit: As \$ x \to 0^- \$, \$ e^{(0)^2} + 3 = 1 + 3 = 4 \$.

Right-hand limit: As \$ x \to 0^+ \$, \$ (0)^2 - 2 \times 0 + 4 = 4 \$.

Both limits = 4

**Answer:** 4
{{</ border >}}

{{< border type="question" >}}
**Question 8:**
Calculate the limit of the following function at \$ x=1 \$:

$$
f(x) = \frac{x^4 - 3x^3 + 2}{x^4 - 5x^3 + 3x^2 + 1}
$$

{{</ border >}}

{{< border >}}
**Solution 📝:**

Substitute \$ x=1 \$:
Numerator: \$ 1^4 - 3 \cdot 1^3 + 2 = 1 - 3 + 2 = 0 \$
Denominator: \$ 1^4 - 5 \cdot 1^3 + 3 \cdot 1^2 + 1 = 1 - 5 + 3 + 1=0 \$

We get \$ 0/0 \$, so use L'Hospital's Rule:
Differentiate numerator and denominator:

Numerator derivative: \$ 4x^3 - 9x^2 \$, at \$ x=1 \$: \$ 4-9 = -5 \$
Denominator derivative: \$ 4x^3 - 15x^2 + 6x \$, at \$ x=1 \$: \$ 4-15+6= -5 \$
So, limit = \$ \frac{-5}{-5} = 1 \$

**Answer:** 1
{{</ border >}}

<div style="text-align: center">⁂</div>

[^1]: Screenshot-2025-07-31-194219.jpeg

[^2]: Screenshot-2025-07-31-194231.jpeg

[^3]: Screenshot-2025-07-31-194242.jpeg

[^4]: Screenshot-2025-07-31-194303.jpeg




{{< border type="question" >}}
**Question 1:**
Find the limit of the following sequence:

$$
\{a_n\}\ \text{such that}\ a_n = \frac{6 + 6 \cdot 2^2 + 6 \cdot 3^2 + \dots + 6 \cdot n^2}{\sqrt{4n^6 + 5}}
$$

{{</ border >}}

{{< border >}}
**Step-by-step Solution 🧮:**

1️⃣ **Numerator simplification**:
$6 + 6 \cdot 2^2 + 6 \cdot 3^2 + \dots + 6 \cdot n^2 = 6 \sum_{k=1}^{n} k^2$
Recall: $\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$

So, numerator = $6 \cdot \frac{n(n+1)(2n+1)}{6} = n(n+1)(2n+1)$

2️⃣ **Denominator**:
$\sqrt{4n^6 + 5}$

3️⃣ **Limit**:

$$
\lim_{n \to \infty} \frac{n(n+1)(2n+1)}{\sqrt{4n^6 + 5}}
$$

The numerator is a cubic polynomial:
$n(n+1)(2n+1) \approx 2n^3$ for large $n$

Denominator:
$\sqrt{4n^6 + 5} \approx 2n^3$

So the limit is:

$$
\lim_{n \to \infty} \frac{2n^3}{2n^3} = 1
$$

**Final Answer:** 1
{{</ border >}}

{{< border type="question" >}}
**Question 2:**
Find the limit of the following sequence:

$$
\{a_n\} \text{ such that } a_n = \frac{100n^2 - 11}{100n^3 + 7}
$$

{{</ border >}}

{{< border >}}
**Step-by-step Solution 🧮:**

1️⃣ For large \$ n \$, the highest power dominates.

- Numerator: $100n^2 - 11 \approx 100n^2$
- Denominator: $100n^3 + 7 \approx 100n^3$

2️⃣ So,

$$
\lim_{n \to \infty} \frac{100n^2}{100n^3} = \lim_{n \to \infty} \frac{1}{n} = 0
$$

**Final Answer:** 0
{{</ border >}}

{{< border type="question" >}}
**Question 3:**
Is the statement True or False?
Let $L(x)$ be the linear approximation to $f(x) = xe^x - 1$ at the point $a$ such that $f(a) = L(a)$ and the slope of the graph of $L$ is $f'(a)$. Then
$L(x) = e^a(a+1)x - a^2 e^a - 1$.
Options:

- TRUE
- FALSE
{{</ border >}}

{{< border >}}
**Step-by-step Solution 🧑🏫:**

- Linear approximation at $a$:
$L(x) = f(a) + f'(a)(x - a)$

Given $f(x) = x e^x - 1$

- $f(a) = a e^a - 1$
- $f'(x) = e^x + x e^x$, so $f'(a) = e^a + a e^a = e^a(a+1)$

Thus,

$$
L(x) = a e^a - 1 + e^a(a+1)(x - a)
$$

Expand:

$$
= a e^a - 1 + e^a(a+1)x - e^a(a+1)a
= e^a(a+1)x - e^a a(a+1) + a e^a - 1
= e^a(a+1)x - e^a a^2 - 1
$$

Which matches the given formula.

**Final Answer:** TRUE
{{</ border >}}

{{< border type="question" >}}
**Question 4:**
Let \$ f \$ be a differentiable function at \$ x=3 \$.
The tangent line to the graph of the function \$ f \$ at the point \$ (3,0) \$, passes through the point \$ (5,4) \$.
What will be the value of \$ f'(3) \$?
{{</ border >}}

{{< border >}}
**Step-by-step Solution 🚦:**

- The tangent at \$ (3,0) \$ passes through \$ (5,4) \$.
- Slope of tangent = \$ m = \frac{4-0}{5-3} = 2 \$

By definition, the slope of the tangent to the graph at \$ x=3 \$ is \$ f'(3) \$.

**Final Answer:** 2
{{</ border >}}

{{< border type="question" >}}
**Question 5:**
Given:
Let \$ f(x) = \sqrt{x} \$ and \$ g(x) = \sqrt{3-x} \$. With the compositions and their corresponding functions and domains in table form, answer the following:

Match the following:

i) \$ f \circ g \$
ii) \$ g \circ f \$
iii) \$ f \circ f \$
iv) \$ g \circ g \$

with

a) \$ \sqrt{3 - \sqrt{x}} \$
b) \$ \sqrt[^1]{x} \$
c) \$ \sqrt{3 - \sqrt{3-x}} \$
d) \$ \sqrt{3 - x} \$

And domains:

1) \$ [0, \infty) \$
2) \$ [ -6, 3 ] \$
3) \$ ( -\infty, 3 ] \$
4) \$  \$

Choose the correct option:

1. i) – d) – 3)
2. ii) – a) – 4)
3. iii) – b) – 1)
{{</ border >}}

{{< border >}}
**Step-by-step Solution 📝:**

Let's match:

- \$ f \circ g (x) = f(g(x)) = \sqrt{\sqrt{3-x}} \$ → \$ \sqrt{3-x} = d \$, domain for \$ 3-x \geq 0 \implies x \leq 3 \$, so domain is \$ ( -\infty, 3 ] \$.
- \$ g \circ f (x) = g(f(x)) = \sqrt{3-\sqrt{x}} \$, which is \$ a \$, and the inside must be \$ \geq 0 \$: \$ 3-\sqrt{x} \geq 0 \implies x \leq 9 \$, so domain is \$  \$.
- \$ f \circ f (x) = f(f(x)) = \sqrt{\sqrt{x}} = \sqrt[^1]{x} \$, which is \$ b \$, and \$ x \geq 0 \$, so domain is \$ [0, \infty) \$.

So, the matching is:

- i) – d) – 3)
- ii) – a) – 4)
- iii) – b) – 1)

**Answers:**
i) – d) – 3)
ii) – a) – 4)
iii) – b) – 1)
{{</ border >}}

<div style="text-align: center">⁂</div>

[^1]: Screenshot-2025-07-31-194443.jpeg

[^2]: Screenshot-2025-07-31-194317.jpeg

[^3]: Screenshot-2025-07-31-194332.jpeg

[^4]: Screenshot-2025-07-31-194431.jpeg

