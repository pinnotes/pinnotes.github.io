---
title: Distance of a line from a given point
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

Drawing upon the information from the sources and our conversation history, we can discuss the distance of a point from a given line, particularly when the line is expressed in its **General Form**.

The problem is to determine the **distance of a point P, with coordinates (x₁, y₁), from a line l, given by the equation Ax + By + C = 0**. This form, Ax + By + C = 0, is known as the general form of the equation of a line, and it is a versatile representation as it can describe any straight line [Conversation history].

The distance referred to in this context is the **shortest distance** from the point to the line. Geometrically, this shortest distance is the length of the **perpendicular segment** dropped from the point to the line. Let M be the point on the line such that PM is perpendicular to the line; the distance is the length of PM.

To find this distance, the sources outline a method involving the geometric properties of the line. One approach discussed is to consider the triangle formed by the given point P(x₁, y₁) and the points where the line intersects the x and y axes (the x-intercept and y-intercept). If the line Ax + By + C = 0 (where A ≠ 0 and B ≠ 0) is written in the intercept form (x/a + y/b = 1), the x-intercept is at Q(-C/A, 0) and the y-intercept is at R(0, -C/B). The line l is the line passing through Q and R.

The distance PM (the perpendicular distance from P to the line QR) can be found using the formula for the area of a triangle: Area of triangle PQR = (1/2) * base * height. Using QR as the base and PM as the height, we get Area = (1/2) * QR * PM. Therefore, the distance PM = (2 * Area of triangle PQR) / QR.
The length of the base QR can be calculated using the distance formula between points Q(-C/A, 0) and R(0, -C/B).
The area of the triangle PQR can be calculated using the coordinates of its vertices P(x₁, y₁), Q(-C/A, 0), and R(0, -C/B).

Following this process, the sources provide the resulting formula for the distance (d) of a straight line **ax + by + c = 0** from a point **(x₁, y₁)**:

**d = |ax₁ + by₁ + c| / √(a² + b²)**

This formula works directly with the coefficients (a, b, c) of the general form of the line and the coordinates (x₁, y₁) of the point. The numerator is the absolute value of the expression ax₁ + by₁ + c, obtained by substituting the point's coordinates into the line's equation. The denominator is the square root of the sum of the squares of the coefficients of x and y.

An example calculation is provided for the distance of the point (3, -5) from the line 3x - 4y + 12 = 0.
Using the formula:
a = 3, b = -4, c = 12
x₁ = 3, y₁ = -5
d = |(3)(3) + (-4)(-5) + 12| / √(3² + (-4)²)
d = |9 + 20 + 12| / √(9 + 16)
d = |41| / √25
d = 41 / 5 (Note: Source states "the numerator will be 3", which appears to be a transcription error as the calculation shows the numerator is 41).
d = 8.2.

This formula is a fundamental result derived from coordinate geometry. The concept of the distance of a point from a line is also useful in calculating the distance between two parallel lines.