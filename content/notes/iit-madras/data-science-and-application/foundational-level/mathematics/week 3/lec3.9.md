---
title: Quadratic formula
date: 2025-05-08
weight: 39
---

Solving a quadratic equation using the **Quadratic Formula** is a universal method that provides the solutions (or "roots") for any quadratic equation in standard form. This powerful formula is actually derived directly from the "completing the square" method, making it a reliable tool even when other methods like factoring are difficult or impossible 🛠️.

### What is a Quadratic Equation? 🧐

A **quadratic equation** is typically expressed in its **standard form** as `ax² + bx + c = 0`. In this equation:
*   `a`, `b`, and `c` are coefficients.
*   `a` must **not be equal to zero** (`a ≠ 0`). If `a` were zero, the `x²` term would vanish, reducing it to a linear equation.
*   For a quadratic equation to be in standard form, its coefficients `a`, `b`, and `c` are typically considered to be integers.
*   The **solutions** to a quadratic equation are called its **roots**. These are the values of `x` that make the equation true.

### The Quadratic Formula Explained 📝

The **Quadratic Formula** is:
**`x = (-b ± √(b² - 4ac)) / (2a)`**

This formula allows you to find the roots of any quadratic equation `ax² + bx + c = 0` directly, simply by substituting the values of `a`, `b`, and `c`.

#### Derivation from Completing the Square 🔗
The quadratic formula is a generalisation obtained by applying the "completing the square" method to the standard form `ax² + bx + c = 0`. Here's how it's done:

1.  **Start with the standard form**: `ax² + bx + c = 0`.
2.  **Divide by `a`**: Since `a ≠ 0`, divide the entire equation by `a` to make the `x²` coefficient 1: `x² + (b/a)x + (c/a) = 0`.
3.  **Move the constant term**: Shift `c/a` to the right side of the equation: `x² + (b/a)x = -c/a`.
4.  **Complete the square**: To make the left side a perfect square trinomial, take half of the coefficient of `x` (`b/a`), which is `b/(2a)`, and square it: `(b/(2a))² = b²/(4a²)`. Add this value to **both sides** of the equation to maintain balance:
    `x² + (b/a)x + b²/(4a²) = -c/a + b²/(4a²)`
5.  **Factor and simplify**: The left side is now a perfect square: `(x + b/(2a))²`. Combine the terms on the right side by finding a common denominator (which is `4a²`):
    `(x + b/(2a))² = (b² - 4ac) / (4a²)`
6.  **Take the square root**: Take the square root of both sides. Remember to include both the positive and negative roots for the right side (as `√X` gives `±Y` if `X=Y²`):
    `x + b/(2a) = ±√(b² - 4ac) / √(4a²)`
    `x + b/(2a) = ±√(b² - 4ac) / (2a)`
7.  **Isolate `x`**: Subtract `b/(2a)` from both sides:
    `x = -b/(2a) ± √(b² - 4ac) / (2a)`
8.  **Combine terms**: Since both terms on the right have a common denominator of `2a`, they can be combined into the single **Quadratic Formula**:
    **`x = (-b ± √(b² - 4ac)) / (2a)`**

### The Discriminant: `b² - 4ac` 🔍

The expression under the square root in the quadratic formula, **`b² - 4ac`**, is called the **discriminant**. It "discriminates" (tells us about) the nature and number of the roots of the quadratic equation.

Here's what the value of the discriminant tells you:

*   **If `b² - 4ac > 0` (Positive)**:
    *   There are **two distinct real roots** ✌️.
    *   If the discriminant is a **perfect square** (e.g., 25, 49), the two real roots will be **rational numbers** (can be expressed as `p/q`, where `p` and `q` are integers).
    *   If the discriminant is **not a perfect square** (e.g., 32, 7), the two real roots will be **irrational numbers** (cannot be expressed as `p/q`, like √2).
*   **If `b² - 4ac = 0` (Zero)**:
    *   There is **exactly one real root** (also called a repeated root) 👆. This means the parabola just touches the x-axis at one point. If `a, b, c` are rational, this root will be rational.
*   **If `b² - 4ac < 0` (Negative)**:
    *   There are **no real roots** 🚫. This is because you cannot take the square root of a negative number within the real number system. The solutions would involve complex numbers, which are not typically covered in this particular course. In this case, the parabola does not intersect the x-axis at all.

### Practice Questions! ✍️

Let's put the Quadratic Formula into practice.

**Q1: Solve the quadratic equation `x² + 5x + 6 = 0` using the Quadratic Formula. 🔢**

**Q2: Find the roots of the equation `3x² - 7x + 2 = 0` using the Quadratic Formula. 🧐**

---

### Solutions ✅

**Solution to Q1: `x² + 5x + 6 = 0`**
1.  **Identify `a`, `b`, `c`**:
    *   `a = 1` [a is coefficient of `x²`]
    *   `b = 5` [b is coefficient of `x`]
    *   `c = 6` [c is the constant term]
2.  **Write the Quadratic Formula**:
    `x = (-b ± √(b² - 4ac)) / (2a)`
3.  **Substitute the values**:
    `x = (-5 ± √(5² - 4 * 1 * 6)) / (2 * 1)`
4.  **Simplify the discriminant**:
    `x = (-5 ± √(25 - 24)) / 2`
    `x = (-5 ± √1) / 2`
    The discriminant (`1`) is positive and a perfect square, so we expect two distinct rational roots.
5.  **Calculate the roots**:
    *   `x1 = (-5 + 1) / 2 = -4 / 2 = -2`
    *   `x2 = (-5 - 1) / 2 = -6 / 2 = -3`

The roots of the equation `x² + 5x + 6 = 0` are **`x = -2` and `x = -3`** ✔️.

**Solution to Q2: `3x² - 7x + 2 = 0`**
1.  **Identify `a`, `b`, `c`**:
    *   `a = 3`
    *   `b = -7`
    *   `c = 2`
2.  **Write the Quadratic Formula**:
    `x = (-b ± √(b² - 4ac)) / (2a)`
3.  **Substitute the values**:
    `x = (-(-7) ± √((-7)² - 4 * 3 * 2)) / (2 * 3)`
4.  **Simplify the discriminant**:
    `x = (7 ± √(49 - 24)) / 6`
    `x = (7 ± √25) / 6`
    The discriminant (`25`) is positive and a perfect square, so we expect two distinct rational roots.
5.  **Calculate the roots**:
    *   `x1 = (7 + 5) / 6 = 12 / 6 = 2`
    *   `x2 = (7 - 5) / 6 = 2 / 6 = 1/3`

The roots of the equation `3x² - 7x + 2 = 0` are **`x = 2` and `x = 1/3`** ✔️.