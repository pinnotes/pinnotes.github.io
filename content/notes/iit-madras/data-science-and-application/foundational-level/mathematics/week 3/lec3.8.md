---
title: Solution of quadratic equation using Square method
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 38
---

Solving a quadratic equation using the **completing the square method** is a clever way to transform the equation into a form where finding the solutions (or "roots") becomes straightforward! 🌱 This method is also fundamental to understanding the derivation of the well-known quadratic formula.

### What is a Quadratic Equation? 🧐

A **quadratic equation** is typically written in its **standard form** as `ax² + bx + c = 0`. Here, `a`, `b`, and `c` are coefficients, and `a` must not be zero (otherwise, it would simply be a linear equation). The **solutions** to this equation are called its **roots**, which are the values of `x` that make the equation true. Graphically, these roots represent the x-intercepts of the associated quadratic function's graph (a parabola).

### The Completing the Square Method 🛠️

The idea behind completing the square is to **transform the quadratic expression** (`ax² + bx + c`) into a **perfect square trinomial** on one side of the equation, with a constant on the other. A perfect square trinomial is a trinomial that results from squaring a binomial, such as `(x + k)²` or `(x - k)²`.

#### Steps to Solve Quadratic Equations by Completing the Square ✅

1.  **Rearrange the Equation**: Move the constant term (`c`) to the right side of the equation. If there's a coefficient `a` (where `a ≠ 1`) for the `x²` term, divide the entire equation by `a` first. This ensures the `x²` term has a coefficient of 1.
2.  **Find the "Completing" Number**: Take half of the coefficient of the `x` term (`b`), and then square it. This number, `(b/2)²`, is what will "complete" the square on the left side.
3.  **Add to Both Sides**: Add this calculated number to **both sides** of the equation. This keeps the equation balanced.
4.  **Factor the Perfect Square**: The left side of the equation can now be factored as a perfect square of a binomial (e.g., `(x + k)²`). The right side will simply be a constant value.
5.  **Take the Square Root**: Take the square root of both sides of the equation. Remember that taking the square root of a number yields **both a positive and a negative value** (e.g., `√25` is both `+5` and `-5`).
6.  **Solve the Linear Equations**: You will now have two simple linear equations. Solve each of them for `x` to find the two roots of the quadratic equation.

#### Example 1: Solving `x² + 2x = 24` by Completing the Square 🎯

Let's follow the steps for this example, which is derived from the sources:

*   **Step 1: Rearrange the Equation.**
    The equation is already in a suitable form: `x² + 2x = 24`.
    Here, `a = 1`, `b = 2`, `c = -24` (if in standard form `ax² + bx + c = 0`).
*   **Step 2: Find the "Completing" Number.**
    The coefficient of `x` is `b = 2`.
    Half of `b` is `2 / 2 = 1`.
    Square it: `1² = 1`. This is the number we need to add.
*   **Step 3: Add to Both Sides.**
    `x² + 2x + 1 = 24 + 1`
*   **Step 4: Factor the Perfect Square.**
    `(x + 1)² = 25`
*   **Step 5: Take the Square Root.**
    `x + 1 = ±√25`
    `x + 1 = ±5`
*   **Step 6: Solve the Linear Equations.**
    We have two possibilities:
    *   `x + 1 = 5`
        `x = 5 - 1`
        **`x = 4`**
    *   `x + 1 = -5`
        `x = -5 - 1`
        **`x = -6`**

So, the roots of the equation `x² + 2x = 24` are `4` and `-6`.

#### Limitations & Considerations 🚧

This method **always works** to find the roots, even when factoring is difficult. However, it is generally **easier to apply when the coefficient of `x` (i.e., `b`) is an even number**. If the constant term on the right-hand side becomes negative after rearrangement and adding the completing number, it means there are **no real solutions** to the equation, as you cannot take the square root of a negative number in the real number system. In such cases, the solutions would lie in the complex domain, which is beyond the scope of this particular course.

### Connection to the Quadratic Formula 🔗

The quadratic formula, `x = (-b ± √(b² - 4ac)) / (2a)`, is actually derived by applying the completing the square method to the general standard form of a quadratic equation `ax² + bx + c = 0`. The term `b² - 4ac` within the square root is known as the **discriminant**, which tells us the nature and number of the roots (real, rational, irrational, or no real roots).

---

### Practice Questions! ✍️

**Q1: Solve the quadratic equation `x² + 6x = 7` by completing the square. 💡**

**Q2: Find the roots of the equation `2x² - 8x + 6 = 0` using the completing the square method. 🧩**

---

### Solutions ✅

**Solution to Q1:**
For `x² + 6x = 7`:
1.  **Rearrange**: Already in suitable form.
2.  **Find "Completing" Number**:
    *   Coefficient of `x` is `6`.
    *   Half of `6` is `3`.
    *   Square it: `3² = 9`.
3.  **Add to Both Sides**:
    `x² + 6x + 9 = 7 + 9`
4.  **Factor Perfect Square**:
    `(x + 3)² = 16`
5.  **Take Square Root**:
    `x + 3 = ±√16`
    `x + 3 = ±4`
6.  **Solve**:
    *   `x + 3 = 4`
        `x = 4 - 3`
        **`x = 1`**
    *   `x + 3 = -4`
        `x = -4 - 3`
        **`x = -7`**
The roots are **`x = 1` and `x = -7`** ✔️.

**Solution to Q2:**
For `2x² - 8x + 6 = 0`:
1.  **Rearrange and Divide by `a`**:
    *   Move constant term: `2x² - 8x = -6`
    *   Divide by coefficient of `x²` (which is `2`):
        `x² - 4x = -3`
2.  **Find "Completing" Number**:
    *   Coefficient of `x` is `-4`.
    *   Half of `-4` is `-2`.
    *   Square it: `(-2)² = 4`.
3.  **Add to Both Sides**:
    `x² - 4x + 4 = -3 + 4`
4.  **Factor Perfect Square**:
    `(x - 2)² = 1`
5.  **Take Square Root**:
    `x - 2 = ±√1`
    `x - 2 = ±1`
6.  **Solve**:
    *   `x - 2 = 1`
        `x = 1 + 2`
        **`x = 3`**
    *   `x - 2 = -1`
        `x = -1 + 2`
        **`x = 1`**
The roots are **`x = 3` and `x = 1`** ✔️.