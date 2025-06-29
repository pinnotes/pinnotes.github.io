---
title: equation of parallel and perpendicular lines in general form
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

The **General Equation of a Line** is a powerful way to represent *any* straight line in the coordinate plane. As we discussed previously, it's like the master key 🗝️ for lines!

The general form of a linear equation is:
$\mathbf{Ax + By + C = 0}$

Here, `A`, `B`, and `C` are constant real numbers, and `x` and `y` are the variables for the coordinates of any point on the line. It's crucial that `A` and `B` are not both zero simultaneously, otherwise, it wouldn't represent a line.

To understand parallel and perpendicular lines using this general form, we first need to remember how to find the **slope** (`m`) from it.
*   From `Ax + By + C = 0`, if `B ≠ 0`, the slope `m` can be derived as: $\mathbf{m = -A/B}$.
    *   If `B = 0`, the line is a vertical line (`Ax + C = 0` or `x = -C/A`), and its slope is undefined.
    *   If `A = 0`, the line is a horizontal line (`By + C = 0` or `y = -C/B`), and its slope is 0.

Now, let's explore the conditions for parallel and perpendicular lines using this understanding.

---

### Parallel Lines ↔️
Parallel lines are lines that run in the same direction and never intersect. This means they have the **same inclination**.

*   **Condition for Slope**: For two non-vertical lines, `l1` with slope `m1` and `l2` with slope `m2`, if they are parallel, then their slopes must be equal: $\mathbf{m_1 = m_2}$.

*   **Condition in General Form**:
    Let `l1` be `A1x + B1y + C1 = 0` with slope `m1 = -A1/B1`.
    Let `l2` be `A2x + B2y + C2 = 0` with slope `m2 = -A2/B2`.

    If `l1` is parallel to `l2` (and both are non-vertical), then `m1 = m2`:
    `-A1/B1 = -A2/B2`
    `A1/B1 = A2/B2`
    This implies: $\mathbf{A_1B_2 = A_2B_1}$.
    This means if you cross-multiply the coefficients of `x` and `y` from the two equations and they are equal, the lines are parallel.

**Practice Question 1: Parallel Lines** ✍️
Q: Determine if the lines `4x + 6y - 10 = 0` and `2x + 3y + 5 = 0` are parallel.

**Solution:**
1.  **Identify coefficients** for `L1`: `A1 = 4`, `B1 = 6`, `C1 = -10`.
2.  **Identify coefficients** for `L2`: `A2 = 2`, `B2 = 3`, `C2 = 5`.
3.  **Check the condition** `A1B2 = A2B1`:
    `4 * 3 = 12`
    `2 * 6 = 12`
4.  Since `12 = 12`, the condition `A1B2 = A2B1` is satisfied.
    Therefore, the lines are **parallel** ✅.

---

### Perpendicular Lines 📐
Perpendicular lines are lines that intersect each other at a **right angle (90 degrees)**.

*   **Condition for Slope**: For two non-vertical lines `l1` with slope `m1` and `l2` with slope `m2`, if they are perpendicular, then the product of their slopes must be -1: $\mathbf{m_1m_2 = -1}$.

*   **Condition in General Form**:
    Let `l1` be `A1x + B1y + C1 = 0` with slope `m1 = -A1/B1`.
    Let `l2` be `A2x + B2y + C2 = 0` with slope `m2 = -A2/B2`.

    If `l1` is perpendicular to `l2` (and both are non-vertical), then `m1m2 = -1`:
    `(-A1/B1) * (-A2/B2) = -1`
    `(A1A2) / (B1B2) = -1`
    This implies: $\mathbf{A_1A_2 = -B_1B_2}$.
    This can also be written as: $\mathbf{A_1A_2 + B_1B_2 = 0}$.

**Practice Question 2: Perpendicular Lines** ✍️
Q: Are the lines `3x - 2y + 7 = 0` and `4x + 6y - 1 = 0` perpendicular?

**Solution:**
1.  **Identify coefficients** for `L1`: `A1 = 3`, `B1 = -2`, `C1 = 7`.
2.  **Identify coefficients** for `L2`: `A2 = 4`, `B2 = 6`, `C2 = -1`.
3.  **Check the condition** `A1A2 = -B1B2`:
    `A1A2 = 3 * 4 = 12`
    `-B1B2 = -(-2 * 6) = -(-12) = 12`
4.  Since `12 = 12`, the condition `A1A2 = -B1B2` is satisfied.
    Therefore, the lines are **perpendicular** ✅.

---

These conditions derived from the slope definition provide a straightforward algebraic method to determine if two lines, expressed in their general form, are parallel or perpendicular.