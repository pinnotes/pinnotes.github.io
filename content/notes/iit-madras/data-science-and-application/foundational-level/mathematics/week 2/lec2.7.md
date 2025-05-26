---
title: Representation of a Line 1
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

Based on the sources and our conversation, representing a line algebraically in the rectangular coordinate system is a key concept, allowing us to describe a geometric object – a straight line – using equations. We've discussed the slope of a line, which describes its direction and steepness. However, the slope alone cannot uniquely determine a line; many parallel lines can have the same slope.

To represent a non-vertical line uniquely, you need more than just the slope. The sources explain different forms of linear equations that provide this unique representation, often requiring a point the line passes through in addition to, or allowing for the calculation of, the slope.

Here are the main ways a line can be represented using equations, as discussed in the sources:

1.  **Horizontal Lines**:
    *   A horizontal line is defined as a line parallel to the X-axis.
    *   To uniquely specify a horizontal line, you need to know its distance from the X-axis, which corresponds to the y-coordinate of any point on the line.
    *   All points on a horizontal line share the same y-coordinate.
    *   The equation of a horizontal line is typically given in the form **y = a**, where 'a' is the constant y-coordinate.
    *   Horizontal lines have an angle of inclination of 0 degrees with respect to the positive x-axis.
    *   The slope of a horizontal line is **0** (since tan(0) = 0).

2.  **Vertical Lines**:
    *   A vertical line is defined as a line parallel to the Y-axis.
    *   To specify a vertical line uniquely, you need to know its distance from the Y-axis, which corresponds to the x-coordinate of any point on the line.
    *   All points on a vertical line share the same x-coordinate.
    *   The equation of a vertical line is typically given in the form **x = b**, where 'b' is the constant x-coordinate.
    *   Vertical lines have an angle of inclination of 90 degrees with respect to the positive x-axis.
    *   The slope of a vertical line is **undefined** (since tan(90) is undefined). Vertical lines are a special case that some other equation forms cannot represent.

3.  **Point-Slope Form**:
    *   This form is used to represent a line when you know its **slope (m)** and the coordinates of **one point (x₀, y₀)** that lies on the line.
    *   The equation is **(y - y₀) = m(x - x₀)**.
    *   This form uniquely identifies the line; no other line satisfies this condition. It is a direct algebraic representation reflecting the definition of slope.
    *   Any point (x, y) lying on this line must satisfy this condition.

4.  **Two-Point Form**:
    *   This form is used to represent a line when you know the coordinates of **two distinct points (x₁, y₁) and (x₂, y₂)** that lie on the line. Two points are sufficient to uniquely determine a line.
    *   The slope 'm' can be calculated using the two points: m = (y₂ - y₁) / (x₂ - x₁).
    *   The equation is **(y - y₁) = (y₂ - y₁)/(x₂ - x₁) * (x - x₁)**.
    *   This form is essentially the point-slope form where the slope is explicitly calculated from the two points. Any point on the line must satisfy this condition.

5.  **Slope-Intercept Form**:
    *   This is a common form used when you know the **slope (m)** and the **y-intercept (c)** of the line.
    *   The y-intercept is the point where the line crosses the y-axis; its coordinates are (0, c).
    *   The equation is **y = mx + c**.
    *   This form is a specialised version of the point-slope form where the known point is the y-intercept (0, c).
    *   There is also a slope-intercept form using the x-intercept (d, 0), given by **y = m(x - d)**.

6.  **Intercept Form**:
    *   This form is used when you know the **x-intercept (a)** and the **y-intercept (b)** of the line. The x-intercept is (a, 0) and the y-intercept is (0, b).
    *   The equation is **x/a + y/b = 1**.
    *   This form can be derived from the two-point form using the intercepts as the two points. The source notes this form is easy to remember: "below x you put x-intercept below y you put y-intercept and equate it with 1".

7.  **General Form**:
    *   This form represents **any straight line**, including vertical lines, and is written as **Ax + By + C = 0**.
    *   All the other forms of linear equations can be rearranged into this general form.
    *   This form is powerful because it can represent vertical lines (when B = 0), which have undefined slopes and cannot be represented by the slope-intercept forms.
    *   For non-vertical lines (where B ≠ 0), the slope 'm' in the general form is given by **m = -A/B**.

These different forms provide algebraic conditions on the coordinates (x, y) that define the set of points forming the line. If the coordinates of a point satisfy the equation of a line, the point lies on that line. Understanding these representations is also crucial for determining relationships between lines, such as whether they are parallel (same slope) or perpendicular (product of slopes is -1).