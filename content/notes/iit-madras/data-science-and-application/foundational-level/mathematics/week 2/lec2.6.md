---
title: Parallel Lines
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

Based on the sources and our conversation, the concepts of parallel and perpendicular lines are extensively discussed, particularly in relation to the **slope of a line**. The slope, denoted by 'm', characterises the direction and steepness of a line. It is defined as the ratio of the change in y to the change in x between any two points on the line, or as the tangent of the angle of inclination (θ) the line makes with the positive x-axis (m = tan(θ)).

The relationship between the slopes of two lines can tell us whether they are parallel or perpendicular. This characterisation is primarily discussed for **non-vertical lines**. Vertical lines have an undefined slope because their angle of inclination is 90 degrees.

Here's what the sources state about parallel and perpendicular lines:

**Parallel Lines**

*   Two non-vertical lines, let's call them l₁ and l₂, are **parallel if and only if they have the same slope**.
*   If l₁ has slope m₁ and inclination α, and l₂ has slope m₂ and inclination β, and l₁ is parallel to l₂, then their inclinations are the same (α = β). Since m = tan(θ), if α = β, then tan(α) = tan(β), which means m₁ = m₂.
*   Conversely, if the slopes are equal (m₁ = m₂), then tan(α) = tan(β). Since the inclinations are restricted to vary from 0 to 180 degrees, equal tangent values in this range imply equal angles (α = β), meaning the lines are parallel.
*   While parallel lines have the same slope, the slope alone **cannot uniquely determine a line**. Infinitely many parallel lines exist with the same inclination and slope.
*   For lines given in the general form a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 (where b₁, b₂ ≠ 0), the condition for them to be parallel is a₁ × b₂ = a₂ × b₁.

**Perpendicular Lines**

*   Two non-vertical lines, l₁ and l₂, are **perpendicular if and only if the product of their slopes is -1** (m₁ × m₂ = -1).
*   If l₁ has inclination α and l₂ has inclination β, and l₁ is perpendicular to l₂, then their inclination angles are related by β = 90 + α (or α = 90 + β).
*   Taking the tangent of the inclinations, tan(β) = tan(90 + α). Using trigonometric identities, tan(90 + α) = -cot(α), which is equal to -1/tan(α). Since m₂ = tan(β) and m₁ = tan(α), this leads to the relationship m₂ = -1/m₁ or m₁ × m₂ = -1.
*   The converse is also true: if the product of the slopes is -1 (m₁ × m₂ = -1), then the lines are perpendicular. The derivation shows that tan(α) = -cot(β) or tan(β) = -cot(α), implying that the difference between the angles α and β is 90 degrees, so the lines are perpendicular.
*   This characterisation using the product of slopes applies to non-vertical lines.
*   It's worth noting that a vertical line (undefined slope) is perpendicular to a horizontal line (slope 0), and this relationship is handled conceptually, although the product of slopes isn't directly calculated as -1 in this specific case.
*   For lines given in the general form a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 (where b₁, b₂ ≠ 0), the condition for them to be perpendicular is a₁ × a₂ = -b₁ × b₂.
*   The relationship m₁ × m₂ = -1 is useful for tasks such as finding the equation of a line perpendicular to a given line and passing through a point. If you know the slope of the given line (m₁) by rearranging its equation into the general form Ax + By + C = 0 and using the fact that its slope is -A/B, you can find the slope of the perpendicular line (m₂) using m₂ = -1/m₁. Then, you can use the point-slope form of a line (y - y₀) = m(x - x₀) to find the equation of the perpendicular line.