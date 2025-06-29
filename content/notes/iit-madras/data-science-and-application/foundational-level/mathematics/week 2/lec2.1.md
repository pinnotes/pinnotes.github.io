---
title: Rectangular Coordinate System
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

The rectangular coordinate system is a fundamental concept in mathematics that allows you to precisely **locate points** on a plane and study geometric objects algebraically. It's essentially a reference system that gives every point a unique address! 📍

Here's a breakdown of its key components and applications:

### What is a Rectangular Coordinate System?
A rectangular coordinate system, also known as a Cartesian coordinate system, uses **two fixed perpendicular lines** called axes to specify the position of any point in a plane. The term "rectangular" comes from the fact that the two axes meet at a 90-degree angle (recta means "right" in Latin).

*   **Axes:**
    *   **X-axis (Horizontal Line):** This line runs from left to right. It's typically divided into a **positive part** (to the right of the vertical line) and a **negative part** (to the left).
    *   **Y-axis (Vertical Line):** This line runs up and down. It's divided into a **positive part** (above the horizontal line) and a **negative part** (below).
*   **Origin (0,0):** This is the **point of intersection** of the X-axis and Y-axis. It serves as the starting point for measuring coordinates.
*   **Coordinates (x, y):** Any point on the plane can be uniquely described by an **ordered pair (x, y)**, where 'x' is the **x-coordinate** (horizontal distance from the Y-axis) and 'y' is the **y-coordinate** (vertical distance from the X-axis).

### Quadrants
The coordinate axes divide the plane into **four parts, called quadrants**. These quadrants are typically numbered in an **anti-clockwise direction** starting from the top-right.

*   **Quadrant I (Q1):** Both x and y coordinates are **positive** (x > 0, y > 0). Think of it as the "top-right" section.
*   **Quadrant II (Q2):** X-coordinate is **negative**, and the Y-coordinate is **positive** (x < 0, y > 0). This is the "top-left" section.
*   **Quadrant III (Q3):** Both x and y coordinates are **negative** (x < 0, y < 0). This is the "bottom-left" section.
*   **Quadrant IV (Q4):** X-coordinate is **positive**, and the Y-coordinate is **negative** (x > 0, y < 0). This is the "bottom-right" section.

**Points on the Axes:** Points that lie directly on the X-axis or Y-axis do not belong to any quadrant.
*   On X-axis: (x, 0), where x can be positive or negative.
*   On Y-axis: (0, y), where y can be positive or negative.
*   Origin: (0,0) is a special point where both coordinates are zero.

The understanding of quadrants helps in **graphing functions better** and scaling the coordinate system appropriately for specific data distributions.

### Elementary Applications 💡
The rectangular coordinate system is crucial for solving various geometric problems algebraically.

1.  **Distance Formula:**
    This formula helps calculate the **shortest distance (a straight line)** between any two points (x1, y1) and (x2, y2) in the Cartesian plane. It is derived using the **Pythagorean Theorem**.
    The formula is: **d = √[(x2 - x1)² + (y2 - y1)²]**.
    *   For a point (x,y) from the origin (0,0), the distance is **d = √[x² + y²]**.

    **Practice Question (Distance Formula):**
    Q: Find the distance between point A (2, 3) and point B (5, 7). 📏

    **Solution:**
    Given points: (x1, y1) = (2, 3) and (x2, y2) = (5, 7).
    d = √[(5 - 2)² + (7 - 3)²]
    d = √[(3)² + (4)²]
    d = √[9 + 16]
    d = √
    **d = 5 units** ✨

2.  **Section Formula:**
    This formula determines the coordinates of a point P (x, y) that **divides a line segment** connecting two points A (x1, y1) and B (x2, y2) in a specific ratio (m : n). This is useful for problems like determining the optimal location for a mobile tower to cover two buildings.

    The internal section formula is:
    **x = (mx2 + nx1) / (m + n)**
    **y = (my2 + ny1) / (m + n)**

    **Practice Question (Section Formula):**
    Q: A point P divides the line segment joining A (1, 2) and B (7, 10) internally in the ratio 1:3. Find the coordinates of point P. 🧩

    **Solution:**
    Given points: (x1, y1) = (1, 2) and (x2, y2) = (7, 10).
    Ratio: m = 1, n = 3.
    x = (1 * 7 + 3 * 1) / (1 + 3) = (7 + 3) / 4 = 10 / 4 = 2.5
    y = (1 * 10 + 3 * 2) / (1 + 3) = (10 + 6) / 4 = 16 / 4 = 4
    **The coordinates of point P are (2.5, 4).** ✅

3.  **Area of a Triangle:**
    The coordinate system also allows for calculating the area of a triangle formed by three non-collinear points (x1, y1), (x2, y2), and (x3, y3). One method involves **enclosing the triangle within trapeziums** formed by dropping perpendiculars to the x-axis and then subtracting the areas of the outer trapeziums.

    The formula for the area of a triangle (∆) is:
    **∆ = ½ |x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2)|**
    The modulus (absolute value) sign ensures the area is always positive. It's crucial to consider the vertices in an **anti-clockwise direction** for this formula to be valid. If the area calculates to 0, it means the three points are collinear (lie on the same line).

    **Practice Question (Area of a Triangle):**
    Q: Find the area of the triangle formed by the points P (0, 0), Q (4, 0), and R (4, 3). 📐

    **Solution:**
    Given points: (x1, y1) = (0, 0), (x2, y2) = (4, 0), and (x3, y3) = (4, 3).
    ∆ = ½ |0(0 - 3) + 4(3 - 0) + 4(0 - 0)|
    ∆ = ½ |0 + 4(3) + 0|
    ∆ = ½ |12|
    **∆ = 6 square units.** 🌟