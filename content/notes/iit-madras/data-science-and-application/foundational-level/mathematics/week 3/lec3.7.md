---
title: Solution of quadratic equation using Factorization
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 37
---

Let's explore how to solve quadratic equations using the **factorization method**! 🧩 This method is a powerful way to find the "roots" (solutions) of a quadratic equation.

### What is a Quadratic Equation? 🧐

A **quadratic equation** is formed when a quadratic function, typically in the form `f(x) = ax² + bx + c`, is set equal to a specific value, most commonly zero. The **standard form** of a quadratic equation is `ax² + bx + c = 0`, where `a`, `b`, and `c` are coefficients and `a` cannot be zero. If `a` were zero, it would become a linear equation, not a quadratic one.

The **solutions** to a quadratic equation are known as its **roots**. These roots are the values of `x` that make the equation true. Graphically, these roots correspond to the **x-intercepts** (or "zeros") of the associated quadratic function's parabola, where the parabola crosses or touches the x-axis.

### Solving by Factorization Method 🌱

The **factoring method** relies on breaking down the quadratic expression `ax² + bx + c` into a **product of two binomials** (expressions with two terms). Once factored, you can use the **Zero Product Property** to find the roots.

#### Zero Product Property 🤝
This property states that if the **product of two factors equals zero**, then **at least one of the factors must be zero**.
For example, if `(x - p)(x - q) = 0`, then either `(x - p) = 0` or `(x - q) = 0`.

#### Steps to Solve Quadratic Equations by Factoring ✅

The process typically involves four key steps:

1.  **Write the equation in standard form (equal to 0)**: Ensure your quadratic equation is arranged as `ax² + bx + c = 0`.
2.  **Factor the polynomial**: Decompose the quadratic expression into a product of two binomials.
3.  **Use the Zero Product Property**: Set each of the resulting factors (binomials) equal to zero.
4.  **Solve each resulting linear equation**: Solve the simple linear equations for `x` to find the roots.

**Example 1: Solving `x² + 2x = 24` by Factoring**

*   **Step 1: Write in standard form.**
    `x² + 2x - 24 = 0`
*   **Step 2: Factor the polynomial.**
    We need two numbers that multiply to `-24` (the constant term `c`) and add up to `2` (the coefficient of `x`, `b`). These numbers are `6` and `-4`.
    So, `x² + 6x - 4x - 24 = 0`
    Now, group terms and factor out common factors:
    `x(x + 6) - 4(x + 6) = 0`
    `(x - 4)(x + 6) = 0`
*   **Step 3: Set each factor equal to zero.**
    `x - 4 = 0` or `x + 6 = 0`
*   **Step 4: Solve each linear equation.**
    `x = 4` or `x = -6`
    Thus, the roots are `4` and `-6`.

#### The FOIL Method (in Reverse) for Factoring 🔄

When `a` (the coefficient of `x²`) is not `1`, or when factoring is less straightforward, the **FOIL method** can be used in reverse. FOIL stands for First, Outer, Inner, Last, and it's a mnemonic for multiplying two binomials:
`(Ax + B)(Cx + D) = ACx² + (AD + BC)x + BD`.

To factor a quadratic `ax² + bx + c`, we essentially try to find `A, B, C, D` such that:
*   `AC = a` (product of First terms)
*   `BD = c` (product of Last terms)
*   `AD + BC = b` (sum of Outer and Inner products)

A crucial observation is that the **product of the coefficient of `x²` (`a`) and the constant term (`c`) is `ac`**. Similarly, the **product of `AD` and `BC` (the terms that sum to `b`) is also `abcd`**. This means you look for two numbers whose product is `ac` and whose sum is `b`.

**Example 2: Converting `5x² - 13x + 6` to intercept form (factoring)**

Here, `a = 5`, `b = -13`, `c = 6`.
*   Product `ac = 5 * 6 = 30`.
*   Sum `b = -13`.

We need two numbers whose product is `30` and sum is `-13`. Through prime factorization of `30` (`2 * 3 * 5`), we can identify `-10` and `-3`.
`-10 * -3 = 30` and `-10 + (-3) = -13`.

Now, rewrite the middle term (`-13x`) using these two numbers:
`5x² - 10x - 3x + 6`
Group the terms and factor out the Greatest Common Factor (GCF) from each group:
`5x(x - 2) - 3(x - 2)`
Notice `(x - 2)` is common:
`(5x - 3)(x - 2)`

If this were `5x² - 13x + 6 = 0`, the roots would be found by setting each factor to zero:
`5x - 3 = 0` => `x = 3/5`
`x - 2 = 0` => `x = 2`

This factorization also shows the **intercept form** of the quadratic function `y = a(x - p)(x - q)`. For `5x² - 13x + 6`, it can be written as `5(x - 3/5)(x - 2)`. Here, `p = 3/5` and `q = 2` are the x-intercepts.

#### Special Cases of Factoring 💡

*   **When the constant term `c` is absent**:
    Example: `x² = 8x`
    Rewrite in standard form: `x² - 8x = 0`
    Factor out the common `x`: `x(x - 8) = 0`
    Set factors to zero: `x = 0` or `x - 8 = 0`
    Roots: `x = 0, x = 8`. This case is simple and doesn't usually require the full FOIL reverse method.
*   **Perfect Square Trinomials**:
    Example: `x² - 4x + 4 = 0`
    Here, `ac = 4 * 1 = 4` and `b = -4`. The numbers are `-2` and `-2`.
    `x² - 2x - 2x + 4 = 0`
    `x(x - 2) - 2(x - 2) = 0`
    `(x - 2)(x - 2) = 0` or `(x - 2)² = 0`
    Root: `x = 2` (a repeated real root).
*   **Difference of Squares**:
    Example: `x² - 25 = 0`
    This is of the form `x² - k² = 0`. `ac = 1 * -25 = -25` and `b = 0`. The numbers are `5` and `-5`.
    It factors directly into `(x + 5)(x - 5) = 0`.
    Roots: `x = -5, x = 5`.

### When is Factoring Helpful? 🤔

The factoring method is **very helpful if the constant term is 0** or if the **factors are easy to find**, especially when dealing with "nice numbers" like 49 or 24. However, it "may not be helpful if the factors are not easily visible" or if the constant term is a decimal, making it hard to find integer or simple rational factors.

---

### Practice Questions! ✍️

**Q1: Solve the quadratic equation `x² + 7x + 10 = 0` by factoring. 🎯**

**Q2: Find the roots of the equation `3x² - 10x - 8 = 0` using the factoring method. 🧩**

---

### Solutions ✅

**Solution to Q1:**
For `x² + 7x + 10 = 0`:
1.  **Standard form**: Already in standard form.
2.  **Factor the polynomial**: We need two numbers that multiply to `10` (the constant term) and add up to `7` (the coefficient of `x`). These numbers are `2` and `5`.
    `x² + 2x + 5x + 10 = 0`
    `x(x + 2) + 5(x + 2) = 0`
    `(x + 5)(x + 2) = 0`
3.  **Set factors to zero**:
    `x + 5 = 0` or `x + 2 = 0`
4.  **Solve**:
    `x = -5` or `x = -2`
The roots are **`x = -5` and `x = -2`** ✔️.

**Solution to Q2:**
For `3x² - 10x - 8 = 0`:
1.  **Standard form**: Already in standard form.
2.  **Factor the polynomial**:
    *   Here, `a = 3`, `b = -10`, `c = -8`.
    *   Calculate `ac = 3 * (-8) = -24`.
    *   We need two numbers that multiply to `-24` and add up to `-10`. These numbers are `-12` and `2`.
    *   Rewrite the middle term: `3x² - 12x + 2x - 8 = 0`
    *   Group and factor: `3x(x - 4) + 2(x - 4) = 0`
    *   Factor out `(x - 4)`: `(3x + 2)(x - 4) = 0`
3.  **Set factors to zero**:
    `3x + 2 = 0` or `x - 4 = 0`
4.  **Solve**:
    `3x = -2` => `x = -2/3`
    `x = 4`
The roots are **`x = -2/3` and `x = 4`** ✔️.