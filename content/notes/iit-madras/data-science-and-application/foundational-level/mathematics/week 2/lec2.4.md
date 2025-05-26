---
title: area of a triangle
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

Based on the sources and our previous conversation, the **area of a triangle** formed by three points in a **rectangular coordinate system** is a concept discussed, particularly when the three points are **non-collinear**.

Here's what the sources say about calculating the area of a triangle:

1.  **Using the Formula**: The area ($\Delta$) of a triangle formed by three points with coordinates (x₁, y₁), (x₂, y₂), and (x₃, y₃) in the XY plane is given by the formula:
    **$\Delta = \frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$**.
    The formula includes a **modulus (absolute value)** because the area of any region is always positive.

2.  **Derivation Method (Using Trapeziums)**: One way to understand how this formula is derived involves placing the triangle within the coordinate system and dropping perpendiculars from each vertex to the x-axis. This process generates trapeziums. The area of the triangle can then be found by considering these trapeziums. Specifically, the area of the triangle is obtained by taking the largest possible quadrilateral or trapezium formed by the perpendiculars and the x-axis (e.g., trapezium ADFC in the example discussed) and eliminating the areas of the two smaller trapeziums (e.g., ADEB and BEFC). The formula for the area of a trapezium is half times the sum of parallel sides multiplied by the height. Calculating the lengths of the sides and heights of these trapeziums using the point coordinates leads to the triangle area formula.

3.  **Anti-clockwise Direction**: When using the formula $1/2 (x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2))$, it's important to consider the vertices of the triangle in an **anti-clockwise direction**. This ensures the validity of the formula; the absolute sign then guarantees a positive result even if the anti-clockwise order wasn't strictly followed in listing the coordinates.

4.  **Collinearity**: If the area of the triangle calculated using this formula is **zero**, it indicates that the three points are **collinear**, meaning they lie on the same straight line.

5.  **Relation to Other Concepts**:
    *   The calculation of the area of a triangle using coordinates is relevant in deriving the **distance of a point from a given line**. The distance (perpendicular height) can be found using the formula: Distance = 2 * Area of Triangle / Base Length. The base length can be found using the distance formula for two points.
    *   Conceptually, the area of a triangle can also be related to the **area of a parallelogram** with the same base and height.

6.  **Examples**: The sources provide solved examples demonstrating the use of the formula to find the area of a triangle given the coordinates of its vertices. For instance, calculating the area of a triangle with vertices (0,10), (-20,-30), and (10,30) results in an area of 0, indicating the points are collinear. Another example shows the calculation for a triangle formed by midpoints of sides, yielding an area of 1.5 square units.

In summary, the sources provide a direct formula for calculating the area of a triangle given its vertex coordinates, explain a method for deriving this formula using trapeziums, and highlight the meaning of a zero area (collinearity).