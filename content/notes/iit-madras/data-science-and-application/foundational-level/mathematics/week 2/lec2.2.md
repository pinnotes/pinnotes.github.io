---
title: distance formula
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

Based on the sources, the **distance formula** is a key concept within the rectangular coordinate system used to calculate the length between points or between a point and a line. Different formulas are used depending on what distance you need to find.

Here are the main distance formulas discussed in the sources:

1.  **Distance between any two points**
    *   The distance between two points (x1, y1) and (x2, y2) in the Cartesian plane (XY plane) is given by the formula $\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$. This formula is fundamental for finding the distance between any two points on a coordinate plane.
    *   The derivation of this formula relies on constructing a right-angle triangle using the two points and a third auxiliary point that shares one coordinate with each of the original points. The lengths of the two sides of the right-angle triangle parallel to the axes are the absolute differences of the respective coordinates, specifically $|x_2 - x_1|$ and $|y_2 - y_1|$. Applying the Pythagorean theorem, where the distance between the two points is the hypotenuse, results in the formula $\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$. The squares in the formula mean that the order of subtraction (x1-x2 or x2-x1) does not affect the result.
    *   A specific case is finding the distance of a point (x, y) from the origin (0, 0). Using the same logic, the distance from the origin is $\sqrt{x^2 + y^2}$.
    *   For example, the distance between points (2,4) and (-4,12) is calculated as $\sqrt{((-4)-2)^2 + (12-4)^2} = \sqrt{(-6)^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10$.

2.  **Distance of a line from a given point**
    *   The distance (d) of a straight line Ax + By + C = 0 from a point (x1, y1) is the shortest distance, which is the perpendicular distance from the point to the line.
    *   This distance can be computed using the formula $d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}$.
    *   The derivation involves considering a triangle formed by the given point and the x and y intercepts of the line. The area of this triangle can be calculated using the coordinates of its vertices. The length of the base (the segment between the intercepts) can be found using the distance formula for two points, as the intercepts form a right-angled triangle with the origin. The distance of the point from the line is then related to the area of the triangle divided by the length of its base (Area = 1/2 * base * height).
    *   For instance, the distance of the point (3, -5) from the line 3x - 4y - 26 = 0 is calculated by substituting the values into the formula: A=3, B=-4, C=-26, x1=3, y1=-5. The result is $|3(3) + (-4)(-5) + (-26)| / \sqrt{3^2 + (-4)^2} = |9 + 20 - 26| / \sqrt{9 + 16} = |3| / \sqrt{25} = 3 / 5$.

3.  **Distance between two parallel lines**
    *   The distance (D) between two parallel lines Ax + By + C1 = 0 and Ax + By + C2 = 0 is given by the formula $D = \frac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}$.
    *   This formula is derived by taking any point on one of the lines (such as its x-intercept) and calculating its distance from the other line using the formula for the distance of a point from a line. Since the lines are parallel, the slope is the same (m = -A/B).
    *   For example, the distance between the parallel lines 3x - 4y + 7 = 0 and 3x - 4y + 5 = 0 is calculated using C1=7, C2=5, A=3, B=-4: $|7 - 5| / \sqrt{3^2 + (-4)^2} = |2| / \sqrt{9 + 16} = 2 / \sqrt{25} = 2 / 5$.

4.  **Sum Squared Error (SSE)**
    *   In the context of fitting a line to a set of data points, a different notion of "distance" is used, particularly the **vertical distance** between each data point and the line.
    *   The Sum Squared Error (SSE) is the sum of the squares of these vertical deviations (errors). For a set of n points (xi, yi) and a line y = mx + c, the SSE is calculated as $\sum_{i=1}^{n} (y_i - mx_i - c)^2$.
    *   This metric helps in determining which line best fits the data, with a lower SSE indicating a better fit. This differs from the perpendicular distance typically used in geometry.