---
title: Summary lecture
date: 2025-05-08
weight: 40
---

Understanding quadratic equations and functions is key in mathematics, as they describe many real-world phenomena 🌍. Let's break down the concepts, formulas, and methods for solving them.

### What is a Quadratic Function? 🧐

A **quadratic function** is defined by an equation of the form **`f(x) = ax² + bx + c`**, where `a` is not equal to 0 (`a ≠ 0`). This condition (`a ≠ 0`) is crucial because if `a` were 0, the `x²` term would disappear, reducing it to a linear function. The term "quadratic" itself is derived from a word meaning "square," indicating its relation to the square of a variable.

The graph of any quadratic function is always a **parabola** 📈.

#### Important Features of a Parabola:
*   **Opening Direction**: The sign of the coefficient `a` determines how the parabola opens:
    *   If **`a > 0`**, the parabola opens upwards ⬆️.
    *   If **`a < 0`**, the parabola opens downwards ⬇️.
*   **Axis of Symmetry**: All parabolas have an **axis of symmetry**, which is a vertical line that divides the parabola into two mirror-image halves. The equation for the axis of symmetry is **`x = -b / (2a)`**. This formula can be derived using algebraic skills, such as completing the square.
*   **Vertex**: The **vertex** is the point where the axis of symmetry intersects the parabola. It represents either the **minimum** or **maximum** value of the function.
    *   The **x-coordinate of the vertex** is `x = -b / (2a)`.
    *   The **y-coordinate of the vertex** is found by substituting this x-value back into the function: `f(-b / (2a))`. If `a > 0`, this y-value is the minimum; if `a < 0`, it's the maximum.
*   **Domain and Range**:
    *   The **domain** of a quadratic function is the entire set of real numbers (`R` or the entire real line).
    *   The **range** of a quadratic function is restricted based on its minimum or maximum value. For example, if `a > 0` (opens up), the range is all real numbers greater than or equal to the minimum value (e.g., `[f_min, ∞)`). If `a < 0` (opens down), the range is all real numbers less than or equal to the maximum value (e.g., `(-∞, f_max]`).

#### Slope of a Quadratic Function 📉
Unlike a linear function, which has a constant slope, the slope of a quadratic function `f(x) = ax² + bx + c` is **variable**. It changes depending on the point on the curve. The slope of `f(x)` at any given point `x` is given by the expression **`2ax + b`**. This slope is zero at the vertex, indicating where the function reaches its minimum or maximum value.

### What is a Quadratic Equation? 🔢
A **quadratic equation** is formed when a quadratic function is set equal to a specific value. The **standard form** of a quadratic equation is **`ax² + bx + c = 0`**, where `a`, `b`, and `c` are coefficients (typically integers), and `a ≠ 0`. The **solutions** to a quadratic equation are called its **roots** (or zeroes of the function), which are the values of `x` that make the equation true.

### Methods of Solving a Quadratic Equation 🛠️

There are several methods to find the roots of a quadratic equation:

1.  **Graphing Technique** 📊
    *   **How it works**: Plot the related quadratic function `f(x) = ax² + bx + c`. The roots of the equation `ax² + bx + c = 0` are the **x-intercepts** of the parabola (where the graph crosses the x-axis).
    *   **Number of roots**:
        *   If the parabola intersects the x-axis at **two distinct points**, there are two real roots.
        *   If the parabola touches the x-axis at **exactly one point** (the vertex), there is one real root (a repeated root).
        *   If the parabola **does not intersect** the x-axis at all, there are no real roots.
    *   **Usefulness**: This method is best for verifying algebraic results or when solutions are integers, but it can be less precise for non-integer roots.

2.  **Factoring Method** 🧩
    *   **How it works**: Write the equation in standard form (`ax² + bx + c = 0`). Then, factor the quadratic polynomial into two binomials (e.g., `(x - p)(x - q) = 0`). Use the **Zero Product Property**, which states that if the product of two factors is zero, at least one of the factors must be zero. Set each factor equal to zero and solve for `x`.
    *   **FOIL Method**: This method (First, Outer, Inner, Last) is used to multiply two binomials (e.g., `(ax + b)(cx + d)`) to convert from intercept form to standard form. A useful observation is that the product of the coefficient of `x²` and the constant term (`ac * bd`) is equal to the product of the two terms that sum to the coefficient of `x` (`ad * bc`).
    *   **Usefulness**: Very helpful when the factors are easily identifiable (e.g., for simple integer roots or when the constant term is zero).

3.  **Completing the Square Method** 📦
    *   **How it works**: This method transforms the quadratic equation `ax² + bx + c = 0` so that one side becomes a perfect square trinomial, and the other side is a constant.
        1.  Ensure the `x²` coefficient is 1. If not, divide the entire equation by `a`.
        2.  Move the constant term (`c/a`) to the right side of the equation.
        3.  Take half of the coefficient of `x` (`b/a`), square it `((b/2a)²)`, and add this value to **both sides** of the equation. This makes the left side a perfect square (e.g., `(x + b/2a)²`).
        4.  Take the square root of both sides, remembering to include both positive and negative roots (`±√`).
        5.  Solve the resulting linear equations for `x`.
    *   **Limitations**: This method may lead to non-real solutions if the term on the right side (after completing the square) is negative, as the square root of a negative number is not defined in the real number system.
    *   **Usefulness**: It works all the time, especially easily when `b` is an even number.

4.  **Quadratic Formula** ✨
    *   **Derivation**: The Quadratic Formula is directly derived by applying the "completing the square" method to the general standard form `ax² + bx + c = 0`.
    *   **The Formula**: The roots of a quadratic equation `ax² + bx + c = 0` can be found directly using the formula:
        **`x = (-b ± √(b² - 4ac)) / (2a)`**
    *   **The Discriminant (`b² - 4ac`)**:
        This part of the formula, often denoted by `Δ` or `D`, is called the **discriminant** because it "discriminates" or tells us about the nature and number of the roots. For `a, b, c` being rational numbers:
        *   If **`b² - 4ac > 0` (Positive)**: There are **two distinct real roots** ✌️.
            *   If the discriminant is a **perfect square**, the roots are **rational**.
            *   If the discriminant is **not a perfect square**, the roots are **irrational**.
        *   If **`b² - 4ac = 0` (Zero)**: There is **exactly one real root** (a repeated root), which will be rational.
        *   If **`b² - 4ac < 0` (Negative)**: There are **no real roots** (solutions are complex numbers, not covered in introductory real number courses) 🚫.
    *   **Usefulness**: The Quadratic Formula is universally applicable and provides the answer every time, regardless of whether the coefficients are rational or irrational numbers.

### Summary of Methods Comparison:
*   **Graphing**: Best for verifying results or finding integer roots.
*   **Factoring**: Very helpful if factors are easily visible or the constant term is zero.
*   **Completing the Square**: Always works, and is particularly easy when the `b` coefficient is even.
*   **Quadratic Formula**: The most robust method, always giving the answer regardless of the type of coefficients or complexity of roots.

---

### Practice Questions! ✍️

Let's apply the Quadratic Formula to some equations.

**Q1: Find the roots of `x² + 2x - 24 = 0` using the Quadratic Formula. 🔢**

**Q2: Find the roots of `4x² + 9x - 9 = 0` using the Quadratic Formula. 🧐**

---

### Solutions ✅

**Solution to Q1: `x² + 2x - 24 = 0`**
1.  **Identify `a`, `b`, `c`**:
    *   `a = 1`
    *   `b = 2`
    *   `c = -24`
2.  **Write the Quadratic Formula**:
    `x = (-b ± √(b² - 4ac)) / (2a)`
3.  **Substitute the values**:
    `x = (-2 ± √(2² - 4 * 1 * (-24))) / (2 * 1)`
4.  **Simplify the discriminant**:
    `x = (-2 ± √(4 - (-96))) / 2`
    `x = (-2 ± √(4 + 96)) / 2`
    `x = (-2 ± √100) / 2`
    The discriminant (`100`) is positive and a perfect square, so we expect two distinct rational roots.
5.  **Calculate the roots**:
    *   `x1 = (-2 + 10) / 2 = 8 / 2 = 4`
    *   `x2 = (-2 - 10) / 2 = -12 / 2 = -6`

The roots of the equation `x² + 2x - 24 = 0` are **`x = 4` and `x = -6`** ✔️.

**Solution to Q2: `4x² + 9x - 9 = 0`**
1.  **Identify `a`, `b`, `c`**:
    *   `a = 4`
    *   `b = 9`
    *   `c = -9`
2.  **Write the Quadratic Formula**:
    `x = (-b ± √(b² - 4ac)) / (2a)`
3.  **Substitute the values**:
    `x = (-9 ± √(9² - 4 * 4 * (-9))) / (2 * 4)`
4.  **Simplify the discriminant**:
    `x = (-9 ± √(81 - (-144))) / 8`
    `x = (-9 ± √(81 + 144)) / 8`
    `x = (-9 ± √225) / 8`
    The discriminant (`225`) is positive and a perfect square, so we expect two distinct rational roots.
5.  **Calculate the roots**:
    *   `x1 = (-9 + 15) / 8 = 6 / 8 = 3/4`
    *   `x2 = (-9 - 15) / 8 = -24 / 8 = -3`

The roots of the equation `4x² + 9x - 9 = 0` are **`x = 3/4` and `x = -3`** ✔️.