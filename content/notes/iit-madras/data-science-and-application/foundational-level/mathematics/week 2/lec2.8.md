---
title: Representation of a Line - 2
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

To uniquely represent a line in coordinate geometry, we need more than just its slope, as infinitely many lines can share the same slope. Beyond the horizontal, vertical, point-slope, and two-point forms, there are other powerful ways to define a line uniquely. These forms provide definite conditions or algebraic expressions that describe the line in terms of its coordinates.

Let's explore these additional representations:

### 1. Slope-Intercept Form 📈📍
This form is widely used due to its direct representation of the line's steepness and where it crosses the Y-axis.

*   **How it works** 🤔: This form is derived from the **point-slope form**. If a non-vertical line `l` has a **slope `m`** and cuts the **Y-axis at a point `c`**, then `c` is called the **y-intercept**. The point where the line crosses the Y-axis is always `(0, c)`.
*   **Equation Form**: By substituting the point `(0, c)` and slope `m` into the point-slope formula `y - y₀ = m(x - x₀)`, we get:
    `y - c = m(x - 0)`
    Which simplifies to:
    $\mathbf{y = mx + c}$
*   **Insights** 💡:
    *   The `m` term (slope) determines the **angle or steepness** of the line.
    *   The `c` term (y-intercept) indicates where the line **crosses the Y-axis**. Changing `c` while keeping `m` constant shifts the line **up or down** parallel to itself. Changing `m` while keeping `c` constant changes the **slant** of the line, making it steeper or shallower.
    *   Calculations are often simplified significantly when you have the slope and y-intercept.

*   **X-intercept Variant** ⬅️:
    A similar form exists if the line with slope `m` cuts the **X-axis at a point `d`**. Here, `d` is the **x-intercept**. The point is `(d, 0)`.
    Substituting `(d, 0)` into the point-slope form `y - y₀ = m(x - x₀)` gives:
    `y - 0 = m(x - d)`
    Which simplifies to:
    $\mathbf{y = m(x - d)}$

**Practice Question 1: Slope-Intercept Form** ✍️
Q: Find the equation of a line with a slope of -3 and a y-intercept of 5.

**Solution:**
1.  Identify the given values: slope `m = -3` and y-intercept `c = 5`.
2.  Use the slope-intercept form: `y = mx + c`.
3.  Substitute the values: `y = (-3)x + 5`.
4.  Therefore, the equation of the line is $\mathbf{y = -3x + 5}$ ✅.

**Practice Question 2: Slope-Intercept Form (x-intercept)** ✍️
Q: A line has a slope of 1/2 and an x-intercept of 4. What is its equation?

**Solution:**
1.  Identify the given values: slope `m = 1/2` and x-intercept `d = 4`.
2.  Use the x-intercept variant of the slope-intercept form: `y = m(x - d)`.
3.  Substitute the values: `y = (1/2)(x - 4)`.
4.  Therefore, the equation of the line is $\mathbf{y = \frac{1}{2}(x - 4)}$ ✅.

---

### 2. Intercept Form 🎯
This form is particularly useful when you know where the line crosses both the X and Y axes.

*   **How it works** 🤔: This form is used when a line makes an **x-intercept at `a`** and a **y-intercept at `b`**. This means the line passes through the points `(a, 0)` and `(0, b)`.
*   **Derivation**: It can be derived from the two-point form. Using `(x₁, y₁) = (a, 0)` and `(x₂, y₂) = (0, b)`:
    `y - y₁ = \frac{y₂ - y₁}{x₂ - x₁}(x - x₁)`
    `y - 0 = \frac{b - 0}{0 - a}(x - a)`
    `y = \frac{b}{-a}(x - a)`
    Divide both sides by `b` (assuming `b ≠ 0`):
    `\frac{y}{b} = \frac{1}{-a}(x - a)`
    `\frac{y}{b} = -\frac{x}{a} + 1`
    Rearranging the terms gives the **intercept form**:
    $\mathbf{\frac{x}{a} + \frac{y}{b} = 1}$
*   **Easy Trick** ✨: As noted in the source, there's a simple trick to remember this form: "x upon x-intercept plus y upon y-intercept equals 1".

**Practice Question 3: Intercept Form** ✍️
Q: A line has an x-intercept of -4 and a y-intercept of 2. Write its equation in intercept form and then simplify it.

**Solution:**
1.  Identify the intercepts: x-intercept `a = -4` and y-intercept `b = 2`.
2.  Use the intercept form: `x/a + y/b = 1`.
3.  Substitute the values: `x/(-4) + y/2 = 1`.
4.  To simplify, find a common denominator (which is 4) and multiply the entire equation by 4:
    `4 * (x/(-4)) + 4 * (y/2) = 4 * 1`
    `-x + 2y = 4`
    `2y = x + 4`
    $\mathbf{y = \frac{1}{2}x + 2}$ ✅.

---

### 3. General Equation of a Line 📏
This is the most universal form, capable of representing any straight line in the coordinate plane.

*   **Equation Form**: The general equation of a line is written as:
    $\mathbf{Ax + By + C = 0}$
    Where `A`, `B`, and `C` are real number constants, and `x` and `y` are the variables representing the coordinates of any point on the line.
*   **Universality** 🌐: A key advantage of this form is its ability to represent **all types of lines**, including vertical lines.
    *   For **vertical lines**, the slope is undefined. In `Ax + By + C = 0`, if `B = 0`, the equation becomes `Ax + C = 0`, which simplifies to `x = -C/A`. This perfectly describes a vertical line.
    *   For **horizontal lines**, the slope is 0. This is covered when `A = 0`, leading to `By + C = 0`, or `y = -C/B`.
    *   All other forms of line equations (slope-point, slope-intercept, two-point, intercept) can be rearranged into this general form.
*   **Extracting Information** 🔍: From `Ax + By + C = 0`, you can derive the following (assuming `B ≠ 0` for slope and y-intercept, and `A ≠ 0` for x-intercept):
    *   **Slope (m)**: `m = -A/B`
    *   **Y-intercept (c)**: `c = -C/B`
    *   **X-intercept (d)**: `d = -C/A`

**Practice Question 4: General Equation of a Line** ✍️
Q: Given the general equation of a line: `6x + 3y - 18 = 0`.
    a) Find its slope.
    b) Find its x-intercept.
    c) Find its y-intercept.

**Solution:**
1.  Identify the coefficients from `Ax + By + C = 0`: `A = 6`, `B = 3`, `C = -18`.
2.  **a) Slope (m)**:
    `m = -A/B`
    `m = -6/3`
    $\mathbf{m = -2}$ ✅.
3.  **b) X-intercept (d)**:
    `d = -C/A`
    `d = -(-18)/6`
    `d = 18/6`
    $\mathbf{d = 3}$ ✅.
4.  **c) Y-intercept (c)**:
    `c = -C/B`
    `c = -(-18)/3`
    `c = 18/3`
    $\mathbf{c = 6}$ ✅.