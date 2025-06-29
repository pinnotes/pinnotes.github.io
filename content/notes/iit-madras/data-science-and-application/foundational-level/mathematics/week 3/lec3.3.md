---
title: Slope of quadratic function
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 33
---

Alright, let's talk about the **slope of a quadratic function**! 🎢 Understanding slope is like figuring out how steep a path is at any given moment. For straight lines, the steepness (slope) is always the same, but for curvy paths like parabolas, it changes! 🏔️

### What is Slope? (A Quick Refresher) 📏

First, let's quickly recap what slope means for a **linear function** (a straight line, like `y = mx + c`). The slope, often denoted as `m`, tells you how much the 'rise' (vertical change) happens for a certain 'run' (horizontal change). It's calculated as `(change in y) / (change in x)` or `(y2 - y1) / (x2 - x1)` for any two points `(x1, y1)` and `(x2, y2)` on the line. For a straight line, this `m` value is **constant**.

### The Slope of a Quadratic Function: A Dynamic Ride! 🎢

Unlike a straight line, the **slope of a quadratic function is not constant**. Imagine walking on a U-shaped hill: sometimes you're going steeply down, sometimes it's flat at the bottom, and then you're going steeply up! The slope describes how steep it is at each *specific point*.

A quadratic function is typically written as `f(x) = ax² + bx + c`. For this function, the **slope at any given point `x` is determined by the formula `2ax + b`**.

Here's what that means:
*   **It's Variable!** 🔄: Notice that `x` is in the formula `2ax + b`. This means the slope changes as `x` changes. It's a "rate of change" that varies depending on where you are on the parabola.
*   **`a` and `b` Matter** 🔢: The coefficients `a` and `b` influence the slope. `a` tells us if the parabola opens upwards or downwards and how wide or narrow it is, directly affecting how quickly the steepness changes.
*   **`c` Does Not Affect Slope** 🏠: The constant term `c` shifts the entire parabola up or down on the graph, but it doesn't change its shape or how steep it is at any point. Think of it as moving the whole hill up or down without altering its inclines.

### Where the Slope is Zero: The Vertex! 🎯

One of the most important points on a parabola is its **vertex**. This is the point where the parabola "turns around".
*   If the parabola opens upwards ⬆️ (`a > 0`), the vertex is the **minimum point**.
*   If the parabola opens downwards ⬇️ (`a < 0`), the vertex is the **maximum point**.

At this crucial turning point, the **slope of the quadratic function is zero**. This means the tangent line to the curve at the vertex is perfectly horizontal.

We can find the `x`-coordinate of this vertex by setting the slope formula to zero:
`2ax + b = 0`
`2ax = -b`
**`x = -b / 2a`**.
This `x`-value also defines the **axis of symmetry** of the parabola.

### Example: Let's See it in Action! 🧪

Consider the function `f(x) = x² - 6x + 9` (from one of our previous discussions).
1.  **Identify `a` and `b`**: Here, `a = 1` and `b = -6`.
2.  **Find the slope formula**: Using `2ax + b`, the slope is `2(1)x + (-6) = 2x - 6`.
    *   So, at `x = 0`, the slope is `2(0) - 6 = -6`. (Quite steep downwards!)
    *   At `x = 5`, the slope is `2(5) - 6 = 10 - 6 = 4`. (Steep upwards!)
3.  **Find the `x`-coordinate where the slope is zero (the vertex)**:
    *   Set `2x - 6 = 0`
    *   `2x = 6`
    *   `x = 3`.
    *   This confirms that the vertex is at `x = 3`, where the curve is momentarily flat.

This illustrates how the slope of a quadratic function changes continuously, reflecting the curve's changing steepness.

---

### Practice Questions! 🧠

**Q1: For the quadratic function `g(x) = -3x² + 12x - 5`:**
    a) Find the general formula for the slope of this function. ✍️
    b) What is the slope of the function when `x = 1`? 🎢
    c) At what `x`-value does the function reach its maximum or minimum (where the slope is zero)? 🎯

**Q2: You're designing a roller coaster track! 🎢 The height `h` (in metres) of a section of the track is given by the function `h(x) = 0.1x² - 2x + 10`, where `x` is the horizontal distance in metres.**
    a) What is the slope of the track when `x = 5` metres? (Is it going up or down?) ⬇️⬆️
    b) At what horizontal distance `x` does the track become completely flat? (Hint: Where is the slope zero?) 🛤️

---

### Solutions ✅

**Solution to Q1:**
For `g(x) = -3x² + 12x - 5`, we have `a = -3`, `b = 12`, `c = -5`.

a) **Find the general formula for the slope of this function.**
    *   The slope formula is `2ax + b`.
    *   Substitute `a = -3` and `b = 12`: `2(-3)x + 12 = -6x + 12`.
    *   The general slope formula is **`-6x + 12`**.

b) **What is the slope of the function when `x = 1`?**
    *   Substitute `x = 1` into the slope formula: `-6(1) + 12 = -6 + 12 = 6`.
    *   The slope at `x = 1` is **`6`**.

c) **At what `x`-value does the function reach its maximum or minimum (where the slope is zero)?**
    *   Set the slope formula to zero: `-6x + 12 = 0`.
    *   `-6x = -12`.
    *   `x = -12 / -6 = 2`.
    *   The slope is zero at **`x = 2`**. (Since `a` is negative, this is a maximum point).

---

**Solution to Q2:**
For `h(x) = 0.1x² - 2x + 10`, we have `a = 0.1`, `b = -2`, `c = 10`.

a) **What is the slope of the track when `x = 5` metres?**
    *   First, find the general slope formula: `2ax + b = 2(0.1)x + (-2) = 0.2x - 2`.
    *   Substitute `x = 5` into the slope formula: `0.2(5) - 2 = 1 - 2 = -1`.
    *   The slope at `x = 5` metres is **`-1`**. (Since it's negative, the track is going downwards ⬇️ at this point).

b) **At what horizontal distance `x` does the track become completely flat?**
    *   Set the slope formula to zero: `0.2x - 2 = 0`.
    *   `0.2x = 2`.
    *   `x = 2 / 0.2 = 10`.
    *   The track becomes completely flat at **`x = 10` metres**.