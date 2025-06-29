---
title: Distance of a line from a given point
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

When considering the **distance of a line from a given point** in coordinate geometry, we are typically interested in the **shortest distance** between that point and the line. This shortest distance is always the **perpendicular distance** from the point to the line. Imagine dropping a perfectly straight plumb line from the point down to the line; that's the distance we're calculating! 📏

### The General Equation of a Line (Recap)

Before diving into the distance formula, let's quickly recall the **general equation of a line**, which is:
$\mathbf{Ax + By + C = 0}$

Here, `A`, `B`, and `C` are constants, and `x` and `y` are the variables representing any point on the line.

### The Distance Formula ✨

To find the distance (`d`) of a straight line $\mathbf{Ax + By + C = 0}$ from a specific point $\mathbf{(x_1, y_1)}$, the formula is given by:

$\mathbf{d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}}$

The vertical bars `|...|` denote the **absolute value**, ensuring that the distance is always a positive number, as distance cannot be negative. The square root in the denominator represents the magnitude of the normal vector to the line, which helps normalise the expression.

### How is this Formula Derived? (Conceptual Insight) 🤔

The derivation of this formula involves a clever application of geometric principles within the coordinate system. Here's a simplified breakdown:

1.  **Identify Intercepts**: From the general form of the line `Ax + By + C = 0`, you can find its x-intercept and y-intercept. If `A` and `B` are not zero, the x-intercept is at `(-C/A, 0)` and the y-intercept is at `(0, -C/B)`. Let's call these points `Q` and `R` respectively.
2.  **Form a Triangle**: Imagine a triangle formed by the given point `P(x1, y1)` and the two intercepts of the line, `Q` and `R`.
3.  **Area of the Triangle**: The area of this triangle `PQR` can be calculated using a formula that takes the coordinates of its three vertices.
4.  **Length of the Base**: The length of the line segment `QR` (the base of the triangle `PQR`) can be found using the **distance formula** between two points, `Q` and `R`. This segment forms the hypotenuse of a right-angled triangle, and its length can be calculated using the Pythagorean theorem.
5.  **Relate Area, Base, and Height**: We know that the area of any triangle is also given by `(1/2) * base * height`. In this case, the 'height' is precisely the perpendicular distance (`PM`) we are trying to find.
6.  **Solve for Distance**: By equating the two expressions for the area and substituting the calculated values for the area of `PQR` and the length of `QR`, you can isolate and derive the formula for `PM`, which is the distance `d`.

This method, though intricate in its full algebraic steps, demonstrates how the formula comes from fundamental geometric ideas.

---

### Practice Question with Solution ✍️

**Q: Find the distance of the point (3, -5) from the line 3x - 4y - 26 = 0.**

**Solution:**

1.  **Identify the line's coefficients and the given point** ✅:
    *   Comparing the line `3x - 4y - 26 = 0` with the general form `Ax + By + C = 0`, we have:
        *   `A = 3`
        *   `B = -4`
        *   `C = -26`
    *   The given point is `(x1, y1) = (3, -5)`.

2.  **Apply the distance formula** ➕:
    *   $\mathbf{d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}}$
    *   Substitute the values:
        `d = |(3)(3) + (-4)(-5) + (-26)| / √((3)^2 + (-4)^2)`
    *   `d = |9 + 20 - 26| / √(9 + 16)`
    *   `d = |29 - 26| / √25`
    *   `d = |3| / 5`
    *   `d = 3 / 5`

Therefore, the distance of the point (3, -5) from the line 3x - 4y - 26 = 0 is **3/5 units** (or 0.6 units).