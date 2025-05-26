---
title: equation of a perpendicular line passing through a point
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

Drawing upon the provided sources and our conversation history, we can determine the equation of a line perpendicular to a given line and passing through a specific point, often starting with the **General Form** of the given line.

The **general equation of a line** is expressed as **Ax + By + C = 0**. This form is particularly useful as it can represent **any straight line**, including vertical lines, which have an undefined slope. For this to represent a line, A and B cannot be zero simultaneously.

The relationship between two perpendicular lines (that are not vertical or horizontal) is characterised by their slopes. If two non-vertical lines have slopes m₁ and m₂, they are **perpendicular if and only if the product of their slopes is -1**, i.e., **m₁ * m₂ = -1**.

For a non-vertical line in the general form Ax + By + C = 0 (where B ≠ 0), its slope (m) is given by **m = -A/B**.

To find the equation of a line perpendicular to a given line Ax + By + C = 0 and passing through a point (x₀, y₀), we can follow these steps, as illustrated by an example in the sources:

1.  **Find the slope of the given line:** Let the given line be A₁x + B₁y + C₁ = 0. If B₁ ≠ 0, its slope is m₁ = -A₁/B₁.
    *   *Example:* Given line is x - 2y + 3 = 0. Here, A₁=1, B₁=-2, C₁=3. The slope m₁ = -(1)/(-2) = 1/2.
2.  **Find the slope of the perpendicular line:** The slope m₂ of the line perpendicular to the given line satisfies m₁ * m₂ = -1.
    *   If m₁ ≠ 0, then m₂ = -1/m₁.
    *   *Example:* Since m₁ = 1/2, m₂ = -1 / (1/2) = -2.
3.  **Use the Point-Slope Form:** We now have the slope (m₂) of the perpendicular line and a point (x₀, y₀) it passes through. The equation of a line with slope m and passing through (x₀, y₀) is given by the **Point-Slope Form**: (y - y₀) = m(x - x₀).
    *   *Example:* The perpendicular line has slope m₂ = -2 and passes through (-1, 2). Substituting these values: (y - 2) = -2(x - (-1)).
    *   This simplifies to (y - 2) = -2(x + 1).
4.  **Convert to General Form:** Rearrange the equation from the point-slope form into the general form Ax + By + C = 0.
    *   *Example:* (y - 2) = -2(x + 1) becomes y - 2 = -2x - 2.
    *   Adding 2x and 2 to both sides gives 2x + y = 0 [Conversation history based on example result]. This can be written in general form as **2x + y + 0 = 0**. The source also presents the equivalent form **-2x + y = 0**, which is obtained by rearranging y = -2x.

**Direct Condition for Perpendicular Lines in General Form:**

The sources also provide a direct condition for two lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 to be perpendicular, provided b₁ and b₂ are not zero. The lines are perpendicular if:
**a₁ × a₂ = −b₁ × b₂**

Let's verify this condition with the example:
*   Line 1: x - 2y + 3 = 0 (a₁=1, b₁=-2).
*   Perpendicular Line (derived): 2x + y + 0 = 0 (a₂=2, b₂=1) [Conversation history based on example result].
*   Checking the condition a₁a₂ = -b₁b₂: (1) * (2) = -(-2) * (1) => 2 = -(-2) => 2 = 2. This matches the condition for perpendicular lines.

**Special Cases (Vertical and Horizontal Lines):**

The method using slopes and the point-slope form works for non-vertical lines. However, the General Form Ax + By + C = 0 naturally handles vertical and horizontal lines as well.
*   A vertical line is represented by **Ax + C = 0** (where B=0, A≠0), which simplifies to x = -C/A. Vertical lines have an undefined slope.
*   A horizontal line is represented by **By + C = 0** (where A=0, B≠0), which simplifies to y = -C/B. Horizontal lines have a slope of 0.
*   If the given line is vertical (e.g., x = k), a line perpendicular to it must be horizontal (y = constant). You would then find the constant using the point the perpendicular line passes through.
*   If the given line is horizontal (e.g., y = k), a line perpendicular to it must be vertical (x = constant). You would find the constant using the given point.

The general form allows for a unified algebraic representation, and while finding slopes and using the point-slope form is a common method, the direct condition on coefficients can also be applied when applicable (i.e., when the y-coefficients are non-zero).