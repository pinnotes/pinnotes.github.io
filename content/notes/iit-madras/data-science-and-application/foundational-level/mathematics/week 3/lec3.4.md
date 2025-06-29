---
title: Solution of quadratic equation using graph
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 34
---

Right, let's explore how to solve **quadratic equations using their graphs**! 📊 This method helps us visually find the answers to quadratic equations by looking at where their curves meet the x-axis.

### What is a Quadratic Equation and Function? 🤔

A **quadratic function** is typically expressed in the form `f(x) = ax² + bx + c`, where `a` cannot be zero. If `a` were zero, it would simply be a linear function, which represents a straight line. The graph of any quadratic function is always a U-shaped curve called a **parabola**.

A **quadratic equation** arises when a quadratic function is set equal to a specific value, most commonly zero. So, `ax² + bx + c = 0` is a standard form of a quadratic equation.

### Roots (Solutions) and Zeros (X-intercepts) 🌱

The **solutions** to a quadratic equation are known as its **roots**. When we solve `f(x) = 0`, we are looking for the values of `x` that make the function's output `y` equal to zero. Graphically, these `x` values are precisely where the parabola **intersects the x-axis**. These points are also called the **zeros** of the quadratic function.

### Solving Quadratic Equations by Graphing 📈

The graphing method involves plotting the associated quadratic function and observing its x-intercepts. Here's how to do it:

1.  **Identify `a`, `b`, and `c`**: From your quadratic function `f(x) = ax² + bx + c`, determine the values of these coefficients.
2.  **Determine Parabola's Opening Direction** ⬆️⬇️:
    *   If `a > 0`, the parabola **opens upwards** ⬆️ and has a **minimum value** at its turning point.
    *   If `a < 0`, the parabola **opens downwards** ⬇️ and has a **maximum value** at its turning point.
3.  **Find the Axis of Symmetry** 📏: This is a vertical line that divides the parabola into two symmetrical halves. Its equation is `x = -b / 2a`. This calculation uses the coefficients `a` and `b`, while `c` does not play a role.
4.  **Calculate the Vertex** 🎯: The vertex is the turning point of the parabola, where the axis of symmetry intersects the curve.
    *   The **x-coordinate** of the vertex is `x = -b / 2a`.
    *   The **y-coordinate** of the vertex is found by substituting this `x` value back into the original quadratic function, `f(-b / 2a)`. This y-coordinate represents the minimum or maximum value the function attains.
5.  **Find the Y-intercept** 🏠: This is where the graph crosses the y-axis. It's simply the value of `c` when `x = 0`.
6.  **Plot Points and Draw the Parabola** ✍️:
    *   Plot the vertex and the y-intercept.
    *   Use the symmetry of the parabola to find additional points. For every point on one side of the axis of symmetry, there's a corresponding point at the same y-value on the other side, equidistant from the axis.
    *   Draw a smooth curve connecting these points to form the parabola.
7.  **Identify the Roots (X-intercepts)** ✔️: Observe where the parabola intersects the x-axis. These `x` values are the solutions (roots) of your quadratic equation.

### Different Scenarios for Roots 🖼️

The graph of a quadratic function can intersect the x-axis in three ways, leading to different types of roots:

*   **Two Distinct Real Roots** ✌️: The parabola crosses the x-axis at two different points. This happens when the y-coordinate of the vertex has the opposite sign to the direction the parabola opens (e.g., opens up but vertex is below x-axis).
    *   *Example:* For `f(x) = x² + 6x + 8`:
        *   `a = 1`, `b = 6`, `c = 8`. It opens upwards ⬆️.
        *   Axis of symmetry: `x = -6 / (2*1) = -3`.
        *   Vertex: `f(-3) = (-3)² + 6(-3) + 8 = 9 - 18 + 8 = -1`. The vertex is `(-3, -1)`.
        *   Since it opens upwards from a minimum at `y = -1`, it must intersect the x-axis. The roots are `x = -2` and `x = -4`.
        *   Graphically, it looks like this:
            ```
            |
            |   *
            |  / \
            | /   \
            -*-*-*-*-*- x
            -4 -3 -2
            ```

*   **One Repeated Real Root** ☝️: The parabola touches the x-axis at exactly one point (the vertex is on the x-axis).
    *   *Example:* For `f(x) = x² + 2x + 1`:
        *   `a = 1`, `b = 2`, `c = 1`. It opens upwards ⬆️.
        *   Axis of symmetry: `x = -2 / (2*1) = -1`.
        *   Vertex: `f(-1) = (-1)² + 2(-1) + 1 = 1 - 2 + 1 = 0`. The vertex is `(-1, 0)`.
        *   Since the vertex is on the x-axis, the parabola only touches at `x = -1`. Thus, `x = -1` is the single (repeated) real root.
        *   Graphically, it looks like this:
            ```
                *
               / \
              /   \
             /     \
            -*-*-*-*-*- x
               -1
            ```

*   **No Real Roots** 🚫: The parabola does not intersect or touch the x-axis at all. This occurs when the y-coordinate of the vertex has the same sign as the opening direction (e.g., opens up and vertex is above x-axis).
    *   *Example:* For `f(x) = x² + 1`:
        *   `a = 1`, `b = 0`, `c = 1`. It opens upwards ⬆️.
        *   Axis of symmetry: `x = -0 / (2*1) = 0` (the y-axis).
        *   Vertex: `f(0) = (0)² + 1 = 1`. The vertex is `(0, 1)`.
        *   Since the minimum value is `y = 1` (above the x-axis) and it opens upwards, the parabola never crosses the x-axis. Hence, there are no real roots.
        *   Graphically, it looks like this:
            ```
                * (0,1)
               / \
              /   \
             /     \
            -------*------ x
            ```

This graphing technique offers a clear visual understanding of how quadratic equations behave and what their solutions represent. While it's great for verification, algebraically finding roots (e.g., factoring, quadratic formula) often provides more precise answers.

---

### Practice Questions! 🧠

**Q1: For the quadratic equation `f(x) = x² - 4x + 4 = 0`:**
    a) Determine if the parabola opens upwards or downwards. ⬆️⬇️
    b) Find the equation of the axis of symmetry. 📏
    c) Calculate the coordinates of the vertex. 🎯
    d) Use the graphing method to find the roots (solutions) of the equation. ✔️

**Q2: For the quadratic equation `f(x) = -x² - 2x - 5 = 0`:**
    a) Determine if the parabola opens upwards or downwards. ⬆️⬇️
    b) Find the equation of the axis of symmetry. 📏
    c) Calculate the coordinates of the vertex. 🎯
    d) Use the graphing method to find the roots (solutions) of the equation. ✔️

---

### Solutions ✅

**Solution to Q1:**
For `f(x) = x² - 4x + 4 = 0`, we have `a = 1`, `b = -4`, `c = 4`.

a) **Determine if the parabola opens upwards or downwards.**
    *   Since `a = 1` (which is `> 0`), the parabola **opens upwards** ⬆️.

b) **Find the equation of the axis of symmetry.**
    *   The axis of symmetry is `x = -b / 2a`.
    *   Substitute `b = -4` and `a = 1`: `x = -(-4) / (2*1) = 4 / 2 = 2`.
    *   The equation of the axis of symmetry is **`x = 2`** 📏.

c) **Calculate the coordinates of the vertex.**
    *   The x-coordinate of the vertex is `2`.
    *   Substitute `x = 2` into the function `f(x) = x² - 4x + 4`:
        `f(2) = (2)² - 4(2) + 4 = 4 - 8 + 4 = 0`.
    *   The coordinates of the vertex are **`(2, 0)`** 🎯.

d) **Use the graphing method to find the roots (solutions) of the equation.**
    *   Since the parabola opens upwards ⬆️ and its vertex is at `(2, 0)` (which is on the x-axis), the parabola touches the x-axis at exactly one point.
    *   Therefore, the equation has **one repeated real root**.
    *   The root is **`x = 2`** ✔️.

---

**Solution to Q2:**
For `f(x) = -x² - 2x - 5 = 0`, we have `a = -1`, `b = -2`, `c = -5`.

a) **Determine if the parabola opens upwards or downwards.**
    *   Since `a = -1` (which is `< 0`), the parabola **opens downwards** ⬇️.

b) **Find the equation of the axis of symmetry.**
    *   The axis of symmetry is `x = -b / 2a`.
    *   Substitute `b = -2` and `a = -1`: `x = -(-2) / (2*(-1)) = 2 / -2 = -1`.
    *   The equation of the axis of symmetry is **`x = -1`** 📏.

c) **Calculate the coordinates of the vertex.**
    *   The x-coordinate of the vertex is `-1`.
    *   Substitute `x = -1` into the function `f(x) = -x² - 2x - 5`:
        `f(-1) = -(-1)² - 2(-1) - 5 = -(1) + 2 - 5 = -1 + 2 - 5 = -4`.
    *   The coordinates of the vertex are **`(-1, -4)`** 🎯.

d) **Use the graphing method to find the roots (solutions) of the equation.**
    *   Since the parabola opens downwards ⬇️ and its vertex is at `(-1, -4)` (which is below the x-axis), the parabola will never reach or cross the x-axis.
    *   Therefore, the equation has **no real roots** 🚫.