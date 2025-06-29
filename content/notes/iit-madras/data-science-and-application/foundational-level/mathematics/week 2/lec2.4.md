---
title: area of a triangle
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

The area of a triangle in a coordinate system is a fundamental concept in geometry that helps us quantify the space enclosed by three non-collinear points 📐. Imagine you have three friends standing at different spots on a flat field, and you want to know how much ground they cover if you connect them with invisible lines to form a triangle 📍📍📍. The area formula provides a precise way to calculate this!

### What is the Area of a Triangle Formula?

The formula for the area of a triangle in a coordinate system builds upon simpler geometric ideas, specifically the area of trapeziums.

**The Idea Behind It (Simplified!)** 🧠
To find the area of a triangle formed by three points (x1, y1), (x2, y2), and (x3, y3), we can cleverly use the concept of dropping perpendicular lines from each vertex to the x-axis. This creates trapeziums (and possibly rectangles or other triangles) whose areas can be calculated.

Consider a triangle ABC with vertices A(x1, y1), B(x2, y2), and C(x3, y3). By drawing perpendiculars from A, B, and C to the x-axis, you can form larger trapeziums. For instance, a large trapezium ADFC might encompass the entire triangle, and you can then subtract the areas of two smaller trapeziums (ADEB and BEFC) to find the area of the triangle ABC.

The area of a trapezium is given by: $1/2 \times \text{sum of parallel sides} \times \text{height}$. By calculating the lengths of these sides and heights using the coordinates, we can derive the triangle's area.

**The Formula** 📝
For a triangle with vertices A(x1, y1), B(x2, y2), and C(x3, y3), the area (often denoted by `Δ`) is given by:

$\mathbf{\Delta = \frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|}$

**Key Aspects of the Formula** 💡:
*   **Modulus (Absolute Value)**: The vertical bars `|...|` indicate the absolute value (or modulus). This is crucial because **area is always a positive quantity** ➕, and the calculation might sometimes result in a negative number depending on the order of points. Taking the absolute value ensures the area is always positive.
*   **Order of Vertices**: It's important to consider the vertices in an **anti-clockwise direction** (counter-clockwise) for the formula to be directly valid without needing to mentally adjust signs. If you choose them clockwise, the result might be negative, which is why the modulus is essential. 🧭

---

### Practice Questions and Solutions 🧠

Here are some practice questions to help you apply the area of a triangle formula!

---

**Practice Question 1: Finding the Area of a Triangle**
Q: Calculate the area of the triangle with vertices P(2, 3), Q(5, 7), and R(8, 2). 📐

**Solution:**
1.  Identify the coordinates of the three vertices:
    (x1, y1) = (2, 3)
    (x2, y2) = (5, 7)
    (x3, y3) = (8, 2)
2.  Apply the area of a triangle formula:
    $\Delta = \frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$
3.  Substitute the values:
    $\Delta = \frac{1}{2} |2(7 - 2) + 5(2 - 3) + 8(3 - 7)|$
    $\Delta = \frac{1}{2} |2(5) + 5(-1) + 8(-4)|$
    $\Delta = \frac{1}{2} |10 - 5 - 32|$
    $\Delta = \frac{1}{2} |-27|$
    $\Delta = \frac{1}{2} (27)$
    **$\Delta = 13.5 \text{ square units}$** ✅

---

**Practice Question 2: Identifying Collinear Points**
Q: Determine if the points A(0, 10), B(-20, -30), and C(10, 30) are collinear by calculating the area of the triangle formed by them. 📏

**Solution:**
1.  Identify the coordinates of the three points:
    (x1, y1) = (0, 10)
    (x2, y2) = (-20, -30)
    (x3, y3) = (10, 30)
2.  Apply the area of a triangle formula:
    $\Delta = \frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$
3.  Substitute the values:
    $\Delta = \frac{1}{2} |0(-30 - 30) + (-20)(30 - 10) + 10(10 - (-30))|$
    $\Delta = \frac{1}{2} |0(-60) + (-20)(20) + 10(40)|$
    $\Delta = \frac{1}{2} |0 - 400 + 400|$
    $\Delta = \frac{1}{2} |0|$
    **$\Delta = 0 \text{ square units}$** ✅

**Insight:** If the area of a triangle formed by three points is **zero**, it means that the "triangle" is actually flat, and the three points lie on the same straight line. In other words, they are **collinear**.