---
title: Representation of a Line 1
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

Representing a line uniquely in coordinate geometry goes beyond just knowing its steepness or direction (its slope). While a slope tells us how inclined a line is, it doesn't specify its exact position on the coordinate plane, as there can be infinitely many lines with the same slope. To uniquely represent a line, we need a **definite condition or an algebraic expression** that describes it in terms of its coordinates.

Let's explore how lines are represented uniquely:

### 1. Horizontal Lines ↔️
A **horizontal line** is defined as a line that is **parallel to the X-axis**.

*   **Unique Representation**: To uniquely locate a horizontal line, you need to know its constant distance from the X-axis. This distance is represented by its fixed y-coordinate.
*   **Equation Form**: Any point on a horizontal line will have the same y-coordinate. Therefore, the equation of a horizontal line is given by:
    $\mathbf{y = a}$
    where 'a' is a constant value representing the y-coordinate for all points on the line.
*   **Slope**: The slope of a horizontal line is **0**. This means there is no vertical change for any horizontal movement.

**Example**: Find the equation of a horizontal line passing through the point (5, 7).
*   Since it's a horizontal line, it's parallel to the X-axis.
*   The point (5, 7) tells us that its y-coordinate is fixed at 7.
*   Thus, the equation of the line is $\mathbf{y = 7}$.

---

### 2. Vertical Lines ↕️
A **vertical line** is defined as a line that is **parallel to the Y-axis**.

*   **Unique Representation**: To uniquely locate a vertical line, you need to know its constant distance from the Y-axis. This distance is represented by its fixed x-coordinate.
*   **Equation Form**: Any point on a vertical line will have the same x-coordinate. Therefore, the equation of a vertical line is given by:
    $\mathbf{x = b}$
    where 'b' is a constant value representing the x-coordinate for all points on the line.
*   **Slope**: The slope of a vertical line is **undefined**. This is because there's vertical movement with no change in the horizontal direction, leading to a division by zero in the slope formula.

**Example**: Find the equation of a vertical line passing through the point (5, 7).
*   Since it's a vertical line, it's parallel to the Y-axis.
*   The point (5, 7) tells us that its x-coordinate is fixed at 5.
*   Thus, the equation of the line is $\mathbf{x = 5}$.

---

### 3. Point-Slope Form 📍📈
This form is used when you know the **slope (`m`) of a non-vertical line and one fixed point `(x₀, y₀)` that lies on the line**.

*   **Derivation**: We use the fundamental definition of slope, which is the ratio of the change in y-coordinates to the change in x-coordinates (rise over run). If we take a generic point `(x, y)` on the line and the known fixed point `(x₀, y₀)`, the slope `m` can be written as:
    $m = \frac{y - y_0}{x - x_0}$
    By cross-multiplying the denominator, we get the **point-slope form**:
    $\mathbf{y - y_0 = m(x - x_0)}$
*   **Uniqueness**: This condition uniquely identifies the line. Any point `(x, y)` that lies on this particular line must satisfy this condition.
*   **Use**: "give me one point and slope of the line I will give you the equation of a line".

**Example**: Find the equation of a line that passes through the point (5, 6) and has a slope of -2.
*   Here, `(x₀, y₀) = (5, 6)` and `m = -2`.
*   Using the point-slope form: `y - 6 = -2(x - 5)`.
*   Simplifying the equation:
    `y - 6 = -2x + 10`
    `y = -2x + 10 + 6`
    $\mathbf{y = -2x + 16}$

---

### 4. Two-Point Form 📍📍
This form is used when you know **two distinct points `(x₁, y₁)` and `(x₂, y₂)` that lie on the line**.

*   **Relation to Point-Slope Form**: We know that two points uniquely determine a line. If we have two points, we can first calculate the slope `m` using the slope formula `m = (y₂ - y₁) / (x₂ - x₁)`. Once the slope is found, we can use either of the two given points (e.g., `(x₁, y₁)` or `(x₂, y₂)` as `(x₀, y₀)`) along with the calculated `m` in the point-slope form.
*   **Equation Form**: The two-point form directly incorporates the slope calculation:
    $\mathbf{y - y_1 = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1)}$
    It is important to maintain consistency in the order of points when calculating the differences for the slope. However, the choice of which point is `(x₁, y₁)` or `(x₂, y₂)` does not affect the final equation.
*   **Uniqueness**: This equation uniquely characterizes the line. Any point `(x, y)` lying on the line must satisfy this condition.

**Example**: Find the equation of a line passing through the points (5, 10) and (-4, -2).
*   Let `(x₁, y₁) = (5, 10)` and `(x₂, y₂) = (-4, -2)`.
*   First, calculate the slope: `m = (-2 - 10) / (-4 - 5) = -12 / -9 = 4/3`.
*   Using the two-point form (or point-slope with `(5, 10)` and `m = 4/3`):
    `y - 10 = (4/3)(x - 5)`
*   Simplifying the equation:
    `3(y - 10) = 4(x - 5)`
    `3y - 30 = 4x - 20`
    `3y = 4x - 20 + 30`
    $\mathbf{3y = 4x + 10}$

---

### Practice Questions and Solutions 🧠

**Practice Question 1: Horizontal Line**
Q: What is the equation of the line that passes through the point (-3, 8) and is parallel to the X-axis? 📏

**Solution:**
1.  A line parallel to the X-axis is a horizontal line.
2.  Horizontal lines have the form `y = a`, where `a` is the y-coordinate of any point on the line.
3.  The given point is (-3, 8). So, the y-coordinate is 8.
4.  Therefore, the equation of the line is $\mathbf{y = 8}$ ✅.

---

**Practice Question 2: Vertical Line**
Q: Find the equation of the line that passes through the point (10, -1) and is parallel to the Y-axis. 📏

**Solution:**
1.  A line parallel to the Y-axis is a vertical line.
2.  Vertical lines have the form `x = b`, where `b` is the x-coordinate of any point on the line.
3.  The given point is (10, -1). So, the x-coordinate is 10.
4.  Therefore, the equation of the line is $\mathbf{x = 10}$ ✅.

---

**Practice Question 3: Point-Slope Form**
Q: A non-vertical line has a slope of 3 and passes through the point (4, 2). Write its equation in point-slope form and then in slope-intercept form (`y = mx + c`). ✍️

**Solution:**
1.  Given slope `m = 3` and point `(x₀, y₀) = (4, 2)`.
2.  **Point-Slope Form**: Substitute these values into `y - y₀ = m(x - x₀)`.
    `y - 2 = 3(x - 4)`
    This is the equation in point-slope form ✅.
3.  **Slope-Intercept Form**: Simplify the point-slope form to `y = mx + c`.
    `y - 2 = 3x - 12`
    `y = 3x - 12 + 2`
    $\mathbf{y = 3x - 10}$ ✅.

---

**Practice Question 4: Two-Point Form**
Q: Determine the equation of the line that passes through the points (1, 5) and (3, 11). ✍️

**Solution:**
1.  Identify the two points: `(x₁, y₁) = (1, 5)` and `(x₂, y₂) = (3, 11)`.
2.  Calculate the slope `m = (y₂ - y₁) / (x₂ - x₁)`.
    `m = (11 - 5) / (3 - 1)`
    `m = 6 / 2`
    `m = 3`
3.  Use the two-point form `y - y₁ = m(x - x₁)` (or plug the calculated `m` into the point-slope form with one of the points). Using `(1, 5)`:
    `y - 5 = 3(x - 1)`
4.  Simplify the equation:
    `y - 5 = 3x - 3`
    `y = 3x - 3 + 5`
    $\mathbf{y = 3x + 2}$ ✅.