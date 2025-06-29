---
title: distance formula
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

The distance formula is a powerful tool in mathematics that helps us measure the **shortest straight-line distance** between any two points in a rectangular coordinate system. Think of it like a superhero's tape measure for your graph paper! 📏🦸‍♀️

### What is the Distance Formula?

The distance formula is built upon the famous **Pythagorean Theorem** (a² + b² = c²), which applies to right-angled triangles 📐. In a rectangular coordinate system, we can always form a right-angled triangle using the two points and a third auxiliary point, with the distance between the two original points forming the hypotenuse.

#### 1. Distance from the Origin (0,0) to a Point (x,y) 📍
If you want to find out how far a point (x, y) is from the very centre of your coordinate plane, called the **origin** (0,0), you can use a simpler version of the formula.

Imagine a point P at (x, y). You can draw a right-angled triangle by dropping a perpendicular line from P to the X-axis, meeting it at (x, 0). The sides of this triangle would be 'x' units along the X-axis and 'y' units parallel to the Y-axis.

The formula for the distance `d` from the origin (0,0) to a point (x,y) is:
**`d = √(x² + y²)`**

*   The square root ensures the distance is always **positive**, as distance cannot be negative! ➕.

#### 2. Distance Between Any Two Points (x1,y1) and (x2,y2) 🗺️
To find the distance between *any* two points, let's say Point A (x1, y1) and Point B (x2, y2), we again use the Pythagorean Theorem.

We construct a right-angled triangle where:
*   The horizontal side represents the **change in x-coordinates** (Δx). This length is `|x2 - x1|`.
*   The vertical side represents the **change in y-coordinates** (Δy). This length is `|y2 - y1|`.
*   The distance between Point A and Point B is the **hypotenuse** of this triangle.

The formula for the distance `d` between two points (x1, y1) and (x2, y2) is:
**`d = √[(x2 - x1)² + (y2 - y1)²]`**

*   Since the differences `(x2 - x1)` and `(y2 - y1)` are squared, the order in which you subtract the coordinates doesn't affect the final distance, as a negative squared value becomes positive. For example, `(5 - 2)²` is the same as `(2 - 5)²`.
*   This formula ensures you always get the **minimum distance** between the two points, which is a straight line.

### Practice Questions and Solutions 🧠

Here are some practice questions to help you master the distance formula!

---

**Practice Question 1: Distance from the Origin**
Q: Find the distance of point P (5, 12) from the origin (0,0). 🚀

**Solution:**
1.  Identify the coordinates of the point P: (x, y) = (5, 12).
2.  Use the distance from origin formula: `d = √(x² + y²)`.
3.  Substitute the values:
    `d = √(5² + 12²)`
    `d = √(25 + 144)`
    `d = √(169)`
    **`d = 13 units`** ✨

---

**Practice Question 2: Distance Between Two Points**
Q: Calculate the distance between Point A (2, 4) and Point B (-4, 12). 🚶‍♀️🚶‍♂️

**Solution:**
1.  Identify the coordinates of the two points:
    (x1, y1) = (2, 4)
    (x2, y2) = (-4, 12)
2.  Use the general distance formula: `d = √[(x2 - x1)² + (y2 - y1)²]`.
3.  Substitute the values:
    `d = √[(-4 - 2)² + (12 - 4)²]`
    `d = √[(-6)² + (8)²]`
    `d = √[36 + 64]`
    `d = √(100)`
    **`d = 10 units`** ✅

---