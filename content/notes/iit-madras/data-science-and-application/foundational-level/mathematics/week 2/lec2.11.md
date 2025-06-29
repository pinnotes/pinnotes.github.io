---
title: equation of a perpendicular line passing through a point
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

Understanding the equation of a perpendicular line passing through a specific point involves combining your knowledge of the **general equation of a line** and the **conditions for perpendicularity** between lines. Let's break it down! 🧩

### The General Equation of a Line (Refresher) 📏

As we discussed, the **general equation of a line** is given by:
$\mathbf{Ax + By + C = 0}$

From this form, if `B` is not equal to 0, the **slope** (`m`) of the line can be found using the formula:
$\mathbf{m = -A/B}$. This relationship helps us understand how the constants `A` and `B` determine the line's inclination.

### The Magic of Perpendicular Lines 📐

Two non-vertical lines are **perpendicular** if they intersect at a 90-degree angle. The special relationship between their slopes is that when you multiply them together, you always get -1.

*   If `m1` is the slope of the first line, and `m2` is the slope of a line perpendicular to it, then:
    $\mathbf{m_1 \times m_2 = -1}$

This means that `m2` is the **negative reciprocal** of `m1`. For example, if `m1` is 2, then `m2` is -1/2. If `m1` is -3/4, then `m2` is 4/3.

### Finding the Equation of a Perpendicular Line Through a Point 🎯

Let's say you're given a line (Line 1) in its general form, `A1x + B1y + C1 = 0`, and a specific point `(x0, y0)` that the new perpendicular line (Line 2) must pass through. Here's how you find the equation of Line 2:

1.  **Find the Slope of Line 1 (`m1`)** 📈:
    *   From `A1x + B1y + C1 = 0`, calculate `m1 = -A1/B1`.

2.  **Calculate the Slope of Line 2 (`m2`)** 📉:
    *   Since Line 2 is perpendicular to Line 1, use the negative reciprocal rule: `m2 = -1/m1`.

3.  **Use the Point-Slope Form** 📝:
    *   Now you have the slope (`m2`) of Line 2 and a point `(x0, y0)` that it passes through. The **point-slope form** of a linear equation is perfect for this:
        $\mathbf{y - y_0 = m_2(x - x_0)}$
    *   Substitute `m2`, `x0`, and `y0` into this equation.

4.  **Convert to General Form (Optional)** 🔄:
    *   If the question asks for the equation in general form (`Ax + By + C = 0`), simply rearrange the point-slope equation by moving all terms to one side.

This methodical approach allows you to determine the unique equation of the perpendicular line.

---

### Practice Question: Perpendicular Line ✍️

Find the equation of a line that is **perpendicular** to the line $\mathbf{2x + 4y - 8 = 0}$ and passes through the point $\mathbf{(3, 1)}$.

**Solution:**

1.  **Identify the Given Line and Point** ✅:
    *   Given Line 1: `2x + 4y - 8 = 0`
    *   Given Point on Line 2: `(x0, y0) = (3, 1)`

2.  **Find the Slope of Line 1 (`m1`)** 📈:
    *   Compare `2x + 4y - 8 = 0` with `Ax + By + C = 0`.
    *   Here, `A1 = 2` and `B1 = 4`.
    *   Using the slope formula `m1 = -A1/B1`:
        `m1 = -2/4`
        `m1 = -1/2`

3.  **Calculate the Slope of Line 2 (`m2`)** 📉:
    *   Line 2 is perpendicular to Line 1, so `m2 = -1/m1`.
    *   `m2 = -1 / (-1/2)`
    *   `m2 = 2`

4.  **Use the Point-Slope Form for Line 2** 📝:
    *   Now we have the slope of Line 2 (`m2 = 2`) and a point it passes through `(3, 1)`.
    *   Using `y - y0 = m2(x - x0)`:
        `y - 1 = 2(x - 3)`

5.  **Convert to General Form** 🔄:
    *   Distribute the 2 on the right side:
        `y - 1 = 2x - 6`
    *   Move all terms to one side to get the general form `Ax + By + C = 0`:
        `0 = 2x - y - 6 + 1`
        $\mathbf{2x - y - 5 = 0}$ ✅

Therefore, the equation of the line perpendicular to `2x + 4y - 8 = 0` and passing through `(3, 1)` is $\mathbf{2x - y - 5 = 0}$.