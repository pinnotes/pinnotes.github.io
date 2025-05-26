---
title: Representation of a Line - 2
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

Certainly. Building on our previous discussion about representing lines algebraically, the sources present several different forms of equations used for this purpose. While the slope characterises a non-vertical line's direction and steepness, it alone is not sufficient to uniquely define a line. To uniquely represent a line, additional information, such as a point it passes through or its intercepts, is needed.

We have already touched upon several representations, including:
*   **Horizontal lines** (y = a)
*   **Vertical lines** (x = b)
*   The **Point-Slope Form** (y - y₀) = m(x - x₀), which requires a known point (x₀, y₀) and the slope (m).
*   The **Two-Point Form** (y - y₁) = (y₂ - y₁)/(x₂ - x₁) * (x - x₁), requiring two distinct points (x₁, y₁) and (x₂, y₂). This form essentially calculates the slope from the two points and uses the point-slope form.
*   The **Slope-Intercept Form (y-intercept)** y = mx + c, using the slope (m) and the y-intercept (c), where the line crosses the y-axis at (0, c).
*   The **Slope-Intercept Form (x-intercept)** y = m(x - d), using the slope (m) and the x-intercept (d), where the line crosses the x-axis at (d, 0).
*   The **Intercept Form** x/a + y/b = 1, which uses both the x-intercept (a) and the y-intercept (b). The sources note that this form is easy to remember: "below x you put x-intercept below y you put y-intercept and equate it with 1".

All these forms provide an algebraic condition on the coordinates (x, y) that any point on the line must satisfy. If a point's coordinates satisfy the equation, it lies on the line.

A particularly important and comprehensive representation discussed is the **General Form**:
*   The equation of a straight line can always be written in the form **Ax + By + C = 0**.
*   This form is considered powerful because it can represent **any straight line**, crucially including **vertical lines**. Vertical lines have an undefined slope because their angle of inclination is 90 degrees. Forms like the slope-intercept form (y = mx + c) cannot represent vertical lines because 'm' would be undefined.
*   In the General Form Ax + By + C = 0:
    *   If **B ≠ 0**, the line is non-vertical. Its slope (m) can be found by rearranging the equation: By = -Ax - C, so y = (-A/B)x - C/B. Thus, the slope is **m = -A/B**.
    *   If **A ≠ 0**, the line is non-horizontal. The x-intercept can be found by setting y = 0: Ax + C = 0, so x = -C/A. The x-intercept is (-C/A, 0).
    *   If **B ≠ 0**, the line is non-vertical. The y-intercept can be found by setting x = 0: By + C = 0, so y = -C/B. The y-intercept is (0, -C/B).
    *   If B = 0 (and A ≠ 0), the equation becomes Ax + C = 0, or x = -C/A. This is the equation of a vertical line.
    *   If A = 0 (and B ≠ 0), the equation becomes By + C = 0, or y = -C/B. This is the equation of a horizontal line.

All other specific forms of linear equations can be rearranged into this general form. The General Form thus provides a unified algebraic representation for all straight lines.

For example, if we have the equation 3x - 4y + 12 = 0, which is in the General Form (A=3, B=-4, C=12):
*   The slope is m = -A/B = -(3)/(-4) = **3/4**.
*   The x-intercept is -C/A = -12/3 = **-4**. The line crosses the x-axis at (-4, 0).
*   The y-intercept is -C/B = -12/(-4) = **3**. The line crosses the y-axis at (0, 3).

Understanding these different forms and their relationships allows us to describe any straight line algebraically and to extract geometric properties (like slope and intercepts) from its equation.