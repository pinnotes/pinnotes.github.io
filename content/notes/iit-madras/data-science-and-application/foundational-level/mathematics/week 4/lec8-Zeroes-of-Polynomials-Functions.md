---
title: Polynomials
date: 2025-05-08
weight: 41
---

Understanding the **zeros of a polynomial function** is like finding the special points where the graph of the function crosses or touches the horizontal axis (the x-axis) 🎯. These points are also known as **x-intercepts**. For a polynomial function, `f(x)`, a value of `x` is a zero if `f(x) = 0`.

Let's break down how to identify and characterise these zeros from a graph or an equation.

### Identifying Zeros of Polynomials 🕵️‍♀️

When you're trying to find the zeros of a polynomial, you're essentially looking for the `x`-values that make the function's output zero. Here's how you can find them:

*   **Factoring Technique** ✂️: This is a **crucial technique** for finding zeros. If you can factor the polynomial function's equation into a product of simpler expressions, you can then set each factor equal to zero and solve for `x`.
    *   **Greatest Common Factor (GCF)**: Sometimes, all terms in a polynomial share a common monomial factor, which can be factored out first.
    *   **Factoring by Grouping**: For polynomials with four or more terms, you might group terms to find common factors.
    *   **Trinomial Factoring**: For expressions resembling quadratic equations (e.g., `ax² + bx + c` or forms like `t² - 8t + 16`), you can use trinomial factoring techniques.
    *   **Quadratic Formula**: If a polynomial simplifies to a quadratic equation (`ax² + bx + c = 0`), you can directly use the quadratic formula `x = [-b ± sqrt(b² - 4ac)] / 2a` to find its roots. This is particularly useful when factoring is not straightforward.
*   **Graphical Tools/Technology** 🖥️: Modern graphing tools like Desmos can visually determine x-intercepts. You input the polynomial equation, and the tool plots the graph, showing you where it crosses or touches the x-axis.
*   **Trial and Error / Long Division** 🎲: For higher-degree polynomials where factoring isn't obvious, you might guess some simple integer roots. If `x = a` is a root, then `(x - a)` is a factor. You can then use **polynomial long division** to divide the polynomial by this factor, reducing its degree and making it easier to find other roots.
*   **Intermediate Value Theorem (IVT)** ↔️: This theorem applies to **continuous functions** (which polynomials are). It states that if a polynomial function `f(x)` takes on opposite signs at two points `a` and `b` (i.e., `f(a)` is positive and `f(b)` is negative, or vice-versa), then there must be at least one zero (an `x`-intercept) between `a` and `b`. This helps confirm the existence of a root in an interval even if you can't find it precisely.

### Characterising Zeros: Multiplicity 🔢

The **multiplicity** of a zero tells you how many times a particular factor `(x - a)` appears in the polynomial's factored form. This 'multiplicity' is key to understanding how the graph behaves at each x-intercept.

*   **Even Multiplicity** (e.g., `(x-a)²`, `(x-a)⁴`): If a zero has an even multiplicity, the graph will **touch the x-axis and "bounce off"** it at that intercept, rather than crossing it.
    *   As the even power increases (e.g., from `x²` to `x⁴`), the graph appears **flatter** as it approaches and leaves the zero.
*   **Odd Multiplicity** (e.g., `(x-a)¹`, `(x-a)³`): If a zero has an odd multiplicity, the graph will **cross or intersect the x-axis** at that intercept.
    *   If the graph appears **almost linear** at the intercept, it indicates a single (first) order multiplicity.
    *   Higher odd powers (e.g., `x⁵`) will make the graph appear **flatter** while approaching and leaving the zero.
*   **Sum of Multiplicities** ➕: The sum of the multiplicities of all *real* zeros (x-intercepts) should always be **less than or equal to the degree of the polynomial**. This is because polynomials can have complex roots which do not appear as x-intercepts on the real coordinate plane. For instance, a degree 4 polynomial might only have one visible x-intercept if the other two roots are complex.

By using these insights, you can not only find the zeros but also get a good sense of the polynomial's overall shape and behaviour.

---

### Practice Questions 🧠

Now, let's put your understanding to the test!

**Question 1: Finding Zeros by Factoring**
Find the x-intercepts (zeros) of the polynomial function:
`f(x) = x⁶ - 8x⁴ + 16x²`

**Question 2: Finding Zeros by Grouping**
Find the x-intercepts (zeros) of the polynomial function:
`f(x) = x³ - 4x² - 3x + 12`

**Question 3: Identifying Zeros and Multiplicities from Factored Form**
Given the polynomial function `g(x) = (x-1)²(x+3)`.
a) Identify all the x-intercepts.
b) Determine the multiplicity of each x-intercept.
c) Describe the behaviour of the graph at each x-intercept.

**Question 4: Identifying Zeros and Multiplicities from a Graph**
Look at the graph of a degree 6 polynomial below (imagine a graph shown here as described in the source).
The graph shows x-intercepts at `x = -2`, `x = 0`, and `x = 2`.
a) Determine the multiplicity of the zero at `x = -2` if the graph appears linear at this intercept.
b) Determine the multiplicity of the zero at `x = 0` if the graph shows an S-shape (appearing flattened as it crosses).
c) Determine the multiplicity of the zero at `x = 2` if the graph bounces off the x-axis.
d) Verify if the sum of multiplicities equals the degree of the polynomial.

---

### Solutions ✅

**Solution 1:**
Given `f(x) = x⁶ - 8x⁴ + 16x²`.
To find the x-intercepts, set `f(x) = 0`:
`x⁶ - 8x⁴ + 16x² = 0`

1.  **Factor out the Greatest Common Factor (GCF)**: The common monomial factor is `x²`.
    `x²(x⁴ - 8x² + 16) = 0`

2.  **Factor the trinomial**: The expression inside the parenthesis `(x⁴ - 8x² + 16)` resembles a quadratic equation if we let `t = x²` (so `t² = x⁴`). This would be `t² - 8t + 16`.
    This is a perfect square trinomial: `(t - 4)²`.
    Substitute `x²` back for `t`: `(x² - 4)²`.
    So the equation becomes: `x²(x² - 4)² = 0`.

3.  **Factor further**: The term `(x² - 4)` is a difference of squares, which can be factored into `(x - 2)(x + 2)`.
    So the equation is: `x²((x - 2)(x + 2))² = 0`.
    This can be rewritten as: `x²(x - 2)²(x + 2)² = 0`.

4.  **Set each factor to zero and solve**:
    *   `x² = 0` ⇒ `x = 0`
    *   `(x - 2)² = 0` ⇒ `x - 2 = 0` ⇒ `x = 2`
    *   `(x + 2)² = 0` ⇒ `x + 2 = 0` ⇒ `x = -2`

The x-intercepts (zeros) are **x = 0, x = 2, and x = -2**.

---

**Solution 2:**
Given `f(x) = x³ - 4x² - 3x + 12`.
To find the x-intercepts, set `f(x) = 0`:
`x³ - 4x² - 3x + 12 = 0`

1.  **Factor by Grouping**: There is no common monomial for all terms. Group the terms in pairs.
    `(x³ - 4x²) + (-3x + 12) = 0`

2.  **Factor out GCF from each pair**:
    `x²(x - 4) - 3(x - 4) = 0`

3.  **Factor out the common binomial**: `(x - 4)` is common.
    `(x² - 3)(x - 4) = 0`

4.  **Set each factor to zero and solve**:
    *   `x - 4 = 0` ⇒ `x = 4`
    *   `x² - 3 = 0` ⇒ `x² = 3` ⇒ `x = ±√3` (or `x = ±1.732...` approximately)

The x-intercepts (zeros) are **x = 4, x = √3, and x = -√3**.

---

**Solution 3:**
Given `g(x) = (x-1)²(x+3)`.

a) **Identify all the x-intercepts**: Set `g(x) = 0`.
*   `(x - 1)² = 0` ⇒ `x - 1 = 0` ⇒ `x = 1`
*   `(x + 3) = 0` ⇒ `x = -3`

The x-intercepts are **x = 1 and x = -3**.

b) **Determine the multiplicity of each x-intercept**:
*   For `x = 1`, the factor `(x - 1)` is raised to the power of `2`. So, the multiplicity is **2** (an even multiplicity).
*   For `x = -3`, the factor `(x + 3)` is raised to the power of `1` (implied). So, the multiplicity is **1** (an odd multiplicity).

c) **Describe the behaviour of the graph at each x-intercept**:
*   At `x = 1` (multiplicity 2, even): The graph will **touch the x-axis and bounce off** it at this point.
*   At `x = -3` (multiplicity 1, odd): The graph will **cross the x-axis** at this point, appearing almost linear.

---

**Solution 4:**
Given a degree 6 polynomial with x-intercepts at `x = -2`, `x = 0`, and `x = 2`.

a) **Multiplicity at `x = -2`**: If the graph appears **linear** at `x = -2`, this indicates a **multiplicity of 1** (single order).
b) **Multiplicity at `x = 0`**: An **S-shape** (flattened as it crosses) at `x = 0` indicates an **odd multiplicity higher than 1**. Given the degree is 6 and other multiplicities, this is likely **3** or **5**.
c) **Multiplicity at `x = 2`**: If the graph **bounces off** the x-axis at `x = 2`, this indicates an **even multiplicity**. Given the degree is 6, this could be **2** or **4**.

d) **Verify sum of multiplicities**: The sum of all multiplicities must be less than or equal to the degree of the polynomial, which is 6.
*   Assume multiplicity at `x = -2` is 1.
*   Assume multiplicity at `x = 0` is 3 (S-shape, odd).
*   Assume multiplicity at `x = 2` is 2 (bounces off, even).

Sum = 1 (at x=-2) + 3 (at x=0) + 2 (at x=2) = 6.
This sum equals the degree of the polynomial, so these multiplicities are consistent with the graph of a degree 6 polynomial.Understanding the **zeros of a polynomial function** is like finding the special points where the graph of the function crosses or touches the horizontal axis (the x-axis) 🎯. These points are also known as **x-intercepts**. For a polynomial function, `f(x)`, a value of `x` is a zero if `f(x) = 0`.

Let's break down how to identify and characterise these zeros from a graph or an equation:

### Identifying Zeros of Polynomials 🕵️‍♀️

When you're trying to find the zeros of a polynomial, you're essentially looking for the `x`-values that make the function's output zero. Here's how you can find them:

*   **Factoring Technique** ✂️: This is a **crucial technique** for finding zeros. If you can factor the polynomial function's equation into a product of simpler expressions, you can then set each factor equal to zero and solve for `x`.
    *   **Greatest Common Factor (GCF)**: Sometimes, all terms in a polynomial share a common monomial factor, which can be factored out first.
    *   **Factoring by Grouping**: For polynomials with four or more terms, you might group terms to find common factors.
    *   **Trinomial Factoring**: For expressions resembling quadratic equations (e.g., `ax² + bx + c` or forms like `t² - 8t + 16`), you can use trinomial factoring techniques.
    *   **Quadratic Formula**: If a polynomial simplifies to a quadratic equation (`ax² + bx + c = 0`), you can directly use the quadratic formula `x = [-b ± sqrt(b² - 4ac)] / 2a` to find its roots. This is particularly useful when factoring is not straightforward.
*   **Graphical Tools/Technology** 🖥️: Modern graphing tools like Desmos can visually determine x-intercepts. You input the polynomial equation, and the tool plots the graph, showing you where it crosses or touches the x-axis.
*   **Trial and Error / Long Division** 🎲: For higher-degree polynomials where factoring isn't obvious, you might guess some simple integer roots. If `x = a` is a root, then `(x - a)` is a factor. You can then use **polynomial long division** to divide the polynomial by this factor, reducing its degree and making it easier to find other roots.
*   **Intermediate Value Theorem (IVT)** ↔️: This theorem applies to **continuous functions** (which polynomials are). It states that if a polynomial function `f(x)` takes on opposite signs at two points `a` and `b` (i.e., `f(a)` is positive and `f(b)` is negative, or vice-versa), then there must be at least one zero (an `x`-intercept) between `a` and `b`. This helps confirm the existence of a root in an interval even if you can't find it precisely.

### Characterising Zeros: Multiplicity 🔢

The **multiplicity** of a zero tells you how many times a particular factor `(x - a)` appears in the polynomial's factored form. This 'multiplicity' is key to understanding how the graph behaves at each x-intercept.

*   **Even Multiplicity** (e.g., `(x-a)²`, `(x-a)⁴`): If a zero has an even multiplicity, the graph will **touch the x-axis and "bounce off"** it at that intercept, rather than crossing it.
    *   As the even power increases (e.g., from `x²` to `x⁴`), the graph appears **flatter** as it approaches and leaves the zero.
*   **Odd Multiplicity** (e.g., `(x-a)¹`, `(x-a)³`): If a zero has an odd multiplicity, the graph will **cross or intersect the x-axis** at that intercept.
    *   If the graph appears **almost linear** at the intercept, it indicates a single (first) order multiplicity.
    *   Higher odd powers (e.g., `x⁵`) will make the graph appear **flatter** while approaching and leaving the zero.
*   **Sum of Multiplicities** ➕: The sum of the multiplicities of all *real* zeros (x-intercepts) should always be **less than or equal to the degree of the polynomial**. This is because polynomials can have complex roots which do not appear as x-intercepts on the real coordinate plane. For instance, a degree 4 polynomial might only have one visible x-intercept if the other two roots are complex.

By using these insights, you can not only find the zeros but also get a good sense of the polynomial's overall shape and behaviour.

---

### Practice Questions 🧠

Now, let's put your understanding to the test!

**Question 1: Finding Zeros by Factoring**
Find the x-intercepts (zeros) of the polynomial function:
`f(x) = x⁶ - 8x⁴ + 16x²`

**Question 2: Finding Zeros by Grouping**
Find the x-intercepts (zeros) of the polynomial function:
`f(x) = x³ - 4x² - 3x + 12`

**Question 3: Identifying Zeros and Multiplicities from Factored Form**
Given the polynomial function `g(x) = (x-1)²(x+3)`.
a) Identify all the x-intercepts.
b) Determine the multiplicity of each x-intercept.
c) Describe the behaviour of the graph at each x-intercept.

**Question 4: Identifying Zeros and Multiplicities from a Graph**
Imagine a graph of a degree 6 polynomial where:
*   At `x = -2`, the graph appears **linear** as it crosses the x-axis.
*   At `x = 0`, the graph shows an **S-shape** (flattened as it crosses) through the x-axis.
*   At `x = 2`, the graph **bounces off** the x-axis.

a) Determine the multiplicity of the zero at `x = -2`.
b) Determine the multiplicity of the zero at `x = 0`.
c) Determine the multiplicity of the zero at `x = 2`.
d) Verify if the sum of multiplicities equals the degree of the polynomial.

---

### Solutions ✅

**Solution 1:**
Given `f(x) = x⁶ - 8x⁴ + 16x²`.
To find the x-intercepts, set `f(x) = 0`:
`x⁶ - 8x⁴ + 16x² = 0`

1.  **Factor out the Greatest Common Factor (GCF)**: The common monomial factor is `x²`.
    `x²(x⁴ - 8x² + 16) = 0`

2.  **Factor the trinomial**: The expression inside the parenthesis `(x⁴ - 8x² + 16)` resembles a quadratic equation if we let `t = x²` (so `t² = x⁴`). This would be `t² - 8t + 16`.
    This is a perfect square trinomial: `(t - 4)²`.
    Substitute `x²` back for `t`: `(x² - 4)²`.
    So the equation becomes: `x²(x² - 4)² = 0`.

3.  **Factor further**: The term `(x² - 4)` is a difference of squares, which can be factored into `(x - 2)(x + 2)`.
    So the equation is: `x²((x - 2)(x + 2))² = 0`.
    This can be rewritten as: `x²(x - 2)²(x + 2)² = 0`.

4.  **Set each factor to zero and solve**:
    *   `x² = 0` ⇒ `x = 0`
    *   `(x - 2)² = 0` ⇒ `x - 2 = 0` ⇒ `x = 2`
    *   `(x + 2)² = 0` ⇒ `x + 2 = 0` ⇒ `x = -2`

The x-intercepts (zeros) are **x = 0, x = 2, and x = -2**.

---

**Solution 2:**
Given `f(x) = x³ - 4x² - 3x + 12`.
To find the x-intercepts, set `f(x) = 0`:
`x³ - 4x² - 3x + 12 = 0`

1.  **Factor by Grouping**: There is no common monomial for all terms. Group the terms in pairs.
    `(x³ - 4x²) + (-3x + 12) = 0`

2.  **Factor out GCF from each pair**:
    `x²(x - 4) - 3(x - 4) = 0`

3.  **Factor out the common binomial**: `(x - 4)` is common.
    `(x² - 3)(x - 4) = 0`

4.  **Set each factor to zero and solve**:
    *   `x - 4 = 0` ⇒ `x = 4`
    *   `x² - 3 = 0` ⇒ `x² = 3` ⇒ `x = ±√3` (or `x = ±1.732...` approximately)

The x-intercepts (zeros) are **x = 4, x = √3, and x = -√3**.

---

**Solution 3:**
Given `g(x) = (x-1)²(x+3)`.

a) **Identify all the x-intercepts**: Set `g(x) = 0`.
*   `(x - 1)² = 0` ⇒ `x - 1 = 0` ⇒ `x = 1`
*   `(x + 3) = 0` ⇒ `x = -3`

The x-intercepts are **x = 1 and x = -3**.

b) **Determine the multiplicity of each x-intercept**:
*   For `x = 1`, the factor `(x - 1)` is raised to the power of `2`. So, the multiplicity is **2** (an even multiplicity).
*   For `x = -3`, the factor `(x + 3)` is raised to the power of `1` (implied). So, the multiplicity is **1** (an odd multiplicity).

c) **Describe the behaviour of the graph at each x-intercept**:
*   At `x = 1` (multiplicity 2, even): The graph will **touch the x-axis and bounce off** it at this point.
*   At `x = -3` (multiplicity 1, odd): The graph will **cross the x-axis** at this point, appearing almost linear.

---

**Solution 4:**
Given a degree 6 polynomial with x-intercepts at `x = -2`, `x = 0`, and `x = 2`.

a) **Multiplicity at `x = -2`**: If the graph appears **linear** at `x = -2`, this indicates a **multiplicity of 1** (single order).
b) **Multiplicity at `x = 0`**: An **S-shape** (flattened as it crosses) at `x = 0` indicates an **odd multiplicity higher than 1**. Given the degree is 6 and other multiplicities, this is determined to be **3**.
c) **Multiplicity at `x = 2`**: If the graph **bounces off** the x-axis at `x = 2`, this indicates an **even multiplicity**. Given the degree is 6, this is determined to be **2**.

d) **Verify sum of multiplicities**: The sum of all multiplicities must be less than or equal to the degree of the polynomial, which is 6.
*   Multiplicity at `x = -2`: 1
*   Multiplicity at `x = 0`: 3
*   Multiplicity at `x = 2`: 2

Sum = 1 + 3 + 2 = **6**.
This sum equals the degree of the polynomial, so these multiplicities are consistent with the graph of a degree 6 polynomial.