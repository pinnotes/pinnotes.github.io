---
title: Slope Line & Parabola
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 35
---

Let's dive into the fascinating world of **slopes** and **parabolas**, and how understanding them helps us solve **quadratic equations** using graphs! 📊

### Understanding Slope 🏞️

Imagine you're walking on a hill. The **slope** tells you how steep that hill is. In mathematics, it measures how much a line or a curve rises or falls for a given horizontal distance.

For a **straight line** 📏, the slope is **constant**. This means the steepness never changes. We calculate it using two points on the line, `(x1, y1)` and `(x2, y2)`, with the formula:
**`m = (y2 - y1) / (x2 - x1)`**

This is often called the "rise over run" ratio, where "rise" is the change in the vertical (y) direction and "run" is the change in the horizontal (x) direction. The slope `m` can also be related to the angle of inclination (`θ`) a line makes with the positive x-axis, where `m = tan(θ)`.

The slope helps us understand the **rate of change** of a line.
*   A **horizontal line** has a slope of **0** (no rise!).
*   A **vertical line** has an **undefined slope** (infinite rise for no run!).
*   Slopes are also crucial for determining if lines are **parallel** (same slope, `m1 = m2`) or **perpendicular** (product of slopes is -1, `m1 * m2 = -1`).

### Understanding Parabola (Quadratic Function) 🎢

A **quadratic function** is typically written as `f(x) = ax² + bx + c`, where `a` cannot be zero. If `a` were zero, it would just be a straight line, not a parabola.

The graph of any quadratic function is a distinctive U-shaped curve called a **parabola**.

Here are its key features:

*   **Opening Direction** ⬆️⬇️:
    *   If `a > 0` (positive), the parabola **opens upwards** ⬆️ (like a smiley face 😊) and has a **minimum value**.
    *   If `a < 0` (negative), the parabola **opens downwards** ⬇️ (like a frowning face ☹️) and has a **maximum value**.

*   **Axis of Symmetry** ⚖️:
    *   Every parabola has a vertical line that perfectly divides it into two symmetrical halves. You could literally fold a graph of a parabola along this line, and both sides would match.
    *   The equation for the axis of symmetry is always **`x = -b / 2a`**.

*   **Vertex** 🎯:
    *   This is the turning point of the parabola, where the axis of symmetry intersects the curve.
    *   The x-coordinate of the vertex is `-b / 2a`.
    *   The y-coordinate of the vertex is found by substituting this x-value back into the function, `f(-b / 2a)`. This y-value represents the absolute **minimum or maximum value** the function can reach.

*   **Y-intercept** 🏡:
    *   This is where the parabola crosses the y-axis. It's simply the value of `c` (when `x = 0`).

### Slope of a Parabola 🌊

Unlike a straight line, the slope of a parabola is **not constant**. Its steepness changes at every point.

For a quadratic function `f(x) = ax² + bx + c`, the slope at any given point `x` is given by the formula:
**`Slope = 2ax + b`**

Notice that the slope itself is a linear function of `x`! An important observation is that the slope of a parabola is **0** at its **vertex**. This makes sense because the vertex is the point where the parabola stops decreasing and starts increasing (or vice-versa), so it's momentarily flat. This property is very useful in calculus for finding minimum and maximum points of functions.

### Solving Quadratic Equations Using Graphs 🖼️

A **quadratic equation** is formed when a quadratic function is set equal to a specific value, most commonly zero. So, `ax² + bx + c = 0` is the standard form.

The **solutions** to a quadratic equation are called its **roots**. When we solve `f(x) = 0`, we are looking for the values of `x` where the function's output (`y`) is zero. Graphically, these `x` values are precisely where the parabola **intersects the x-axis**. These points are also known as the **zeros** of the quadratic function.

The graphing method to find roots involves these steps:
1.  **Plot the quadratic function** `f(x) = ax² + bx + c`. You can do this by:
    *   Finding the y-intercept (0, c).
    *   Calculating the axis of symmetry, `x = -b / 2a`.
    *   Determining the vertex by substituting the x-value of the axis of symmetry back into `f(x)`.
    *   Plotting the vertex and y-intercept, and using the axis of symmetry to find additional points symmetrically.
    *   Drawing a smooth curve connecting the points to form the parabola.
2.  **Identify the x-intercepts** ✔️: Look for where your drawn parabola crosses or touches the x-axis. The x-coordinates of these points are the solutions (roots) to the quadratic equation.

There are three possible scenarios for the roots when using the graphing method, which correspond to the value of the **discriminant** (`b² - 4ac`), a concept from the quadratic formula (which is an algebraic method to find roots, but its value directly tells us about the nature of the roots graphically):

*   **Two Distinct Real Roots** ✌️:
    *   The parabola intersects the x-axis at **two different points**.
    *   This happens when the discriminant `b² - 4ac > 0`.
    *   *Example:* For `f(x) = x² + 6x + 8`, the parabola opens upwards and crosses the x-axis at `x = -2` and `x = -4`. (The vertex for this function is `(-3, -1)`, which is below the x-axis, allowing it to cross twice as it opens upwards).

*   **One Repeated Real Root** ☝️:
    *   The parabola **touches the x-axis at exactly one point**, which is its vertex.
    *   This occurs when the discriminant `b² - 4ac = 0`.
    *   *Example:* For `f(x) = x² + 2x + 1`, the parabola opens upwards and touches the x-axis at `x = -1`. (The vertex for this function is `(-1, 0)`, which is directly on the x-axis).

*   **No Real Roots** 🚫:
    *   The parabola **does not intersect or touch the x-axis** at all.
    *   This happens when the discriminant `b² - 4ac < 0`. (In this case, the roots are complex numbers, which are not represented on a simple x-y graph of real numbers).
    *   *Example:* For `f(x) = x² + 1`, the parabola opens upwards and never crosses the x-axis. (The vertex for this function is `(0, 1)`, which is above the x-axis, so if it opens upwards, it will never reach the x-axis).

This visual method provides a clear intuition about the nature of the solutions to quadratic equations. While it can be less precise than algebraic methods (like factoring or the quadratic formula) for exact fractional or irrational roots, it's an excellent tool for understanding the concept and verifying solutions.

---

### Practice Questions! 🧠

**Q1: For the quadratic equation `x² - 6x + 9 = 0`:**
    a) Is the associated parabola opening upwards or downwards? ⬆️⬇️
    b) What is the equation of its axis of symmetry? 📏
    c) Calculate the coordinates of its vertex. 🎯
    d) Based on the graph, how many real roots does the equation have, and what are they? ✔️

**Q2: For the quadratic equation `f(x) = -x² + 4x - 6 = 0`:**
    a) Is the associated parabola opening upwards or downwards? ⬆️⬇️
    b) What is the equation of its axis of symmetry? 📏
    c) Calculate the coordinates of its vertex. 🎯
    d) Based on the graph, how many real roots does the equation have? ✔️

---

### Solutions ✅

**Solution to Q1:**
For `f(x) = x² - 6x + 9 = 0`, we have `a = 1`, `b = -6`, `c = 9`.

a) **Opening Direction:**
    *   Since `a = 1` (which is `> 0`), the parabola **opens upwards** ⬆️.

b) **Axis of Symmetry:**
    *   The formula is `x = -b / 2a`.
    *   Substitute `b = -6` and `a = 1`: `x = -(-6) / (2 * 1) = 6 / 2 = 3`.
    *   The equation of the axis of symmetry is **`x = 3`** 📏. (Note: The source mentions a calculation error in its transcript, stating `-3` instead of `+3`, but clarifies the graph is correct for `x=3`).

c) **Coordinates of the Vertex:**
    *   The x-coordinate of the vertex is `3`.
    *   Substitute `x = 3` into the function `f(x) = x² - 6x + 9`:
        `f(3) = (3)² - 6(3) + 9 = 9 - 18 + 9 = 0`.
    *   The coordinates of the vertex are **`(3, 0)`** 🎯.

d) **Number and Type of Roots (Graphically):**
    *   Since the parabola opens upwards ⬆️ and its vertex is at `(3, 0)` (which is directly on the x-axis), the parabola touches the x-axis at exactly one point.
    *   Therefore, the equation has **one repeated real root** ☝️.
    *   The root is **`x = 3`** ✔️.

---

**Solution to Q2:**
For `f(x) = -x² + 4x - 6 = 0`, we have `a = -1`, `b = 4`, `c = -6`.

a) **Opening Direction:**
    *   Since `a = -1` (which is `< 0`), the parabola **opens downwards** ⬇️.

b) **Axis of Symmetry:**
    *   The formula is `x = -b / 2a`.
    *   Substitute `b = 4` and `a = -1`: `x = -(4) / (2 * -1) = -4 / -2 = 2`.
    *   The equation of the axis of symmetry is **`x = 2`** 📏.

c) **Coordinates of the Vertex:**
    *   The x-coordinate of the vertex is `2`.
    *   Substitute `x = 2` into the function `f(x) = -x² + 4x - 6`:
        `f(2) = -(2)² + 4(2) - 6 = -4 + 8 - 6 = -2`.
    *   The coordinates of the vertex are **`(2, -2)`** 🎯.

d) **Number of Real Roots (Graphically):**
    *   Since the parabola opens downwards ⬇️ and its vertex is at `(2, -2)` (which is below the x-axis), the parabola will never reach or cross the x-axis.
    *   Therefore, the equation has **no real roots** 🚫.