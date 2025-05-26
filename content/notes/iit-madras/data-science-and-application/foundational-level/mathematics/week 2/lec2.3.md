---
title: Section Formula
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

The **Section Formula** is a concept used within the rectangular coordinate system to determine the coordinates of a point that divides a line segment connecting two given points. This point lies on the line containing the two given points.

The formula depends on whether the point divides the line segment **internally** or **externally**.

1.  **Internal Division**: If a point P(x, y) divides the line segment connecting points A(x₁, y₁) and B(x₂, y₂) internally in the ratio m : n, its coordinates are given by:
    *   **x = (m x₂ + n x₁) / (m + n)**
    *   **y = (m y₂ + n y₁) / (m + n)**
    *   For example, if a point S(x, y) divides the line segment PQ with P(2, 5) and Q(8, 8) internally in the ratio 1:2, the x-coordinate is (1 * 8 + 2 * 2) / (1 + 2) = (8 + 4) / 3 = 12 / 3 = 4, and the y-coordinate is (1 * 8 + 2 * 5) / (1 + 2) = (8 + 10) / 3 = 18 / 3 = 6. So the point is (4, 6). Note: The provided source example calculates the y-coordinate as 1(8) + 2(5) / (1+2) which gives 18/3=6, but states the point Q as (8,8). It seems there might be a small inconsistency in the example's y-coordinate for Q as described in the text versus the calculation, but the formula itself is correct and applied with the values (8,8) for Q.
    *   A special case of internal division is finding the **midpoint** of a line segment, which occurs when the ratio m:n is 1:1.

2.  **External Division**: If a point P(x, y) divides the line segment connecting points A(x₁, y₁) and B(x₂, y₂) externally in the ratio m : n, its coordinates are given by:
    *   **x = (m x₂ - n x₁) / (m - n)**
    *   **y = (m y₂ - n y₁) / (m - n)**

The derivation of the section formula involves placing the points in a rectangular coordinate system. For internal division, a right-angle triangle can be constructed. By dropping perpendiculars from the points to the axes, one can relate the ratio m:n to the ratio of lengths of segments created on lines parallel to the axes. For instance, along the x-direction, the ratio m:n is equal to the ratio of the horizontal distance from A to P (x - x₁) and the horizontal distance from P to B (x₂ - x). This gives the relationship m/n = (x - x₁) / (x₂ - x). Similarly, for the y-coordinate, m/n = (y - y₁) / (y₂ - y). Cross-multiplication of these ratios allows for solving for x and y, leading to the formulas above.

The section formula is fundamental for finding the coordinates of a point that partitions a line segment in a given ratio. It can also be used in reverse; if the coordinates of point P are known, the formula can determine the ratio m:n in which it divides the segment AB.