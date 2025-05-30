---
title: Solution of quadratic equation using Square method
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 38
---

Solving a quadratic equation using the **completing the square method** is another technique for finding the roots of the equation, as discussed in the sources. This method involves transforming the equation into a specific form that allows you to take the square root easily. It also has a direct connection to the well-known Quadratic Formula.

The general idea is to manipulate the quadratic equation so that one side of the equation becomes a **perfect square trinomial** (like (x + a)² or (x - a)²), and the other side is a constant.

Here are the steps involved in solving a quadratic equation by completing the square, based on the provided information:

1.  **Ensure the equation is in a suitable form:** Start with the quadratic equation, often in the standard form ax² + bx + c = 0. The method is demonstrated by first isolating the x² and x terms on one side of the equation, moving the constant term to the other side. If the leading coefficient 'a' is not 1, you might divide the entire equation by 'a' to make the coefficient of x² equal to 1, although examples are shown where this is handled implicitly or at a later stage, particularly in the derivation of the quadratic formula.
2.  **Complete the square on the side with x terms:** To make the expression involving x a perfect square, you need to add a specific value. This value is found by taking the coefficient of the x term (b, or b/a if you divided by 'a'), dividing it by 2 (b/2, or b/2a), and then squaring the result ((b/2)² or (b/2a)²). This value is added to **both sides** of the equation to maintain equality.
3.  **Factor the perfect square trinomial:** The side of the equation containing the x terms now factors into a binomial squared, specifically (x + b/2)² or (x - b/2)² depending on the sign of the linear term. The coefficient of x in the binomial will be half of the coefficient of the linear term in the trinomial (e.g., x² + 10x + 25 = (x + 5)² because 10/2 = 5).
4.  **Simplify the other side:** Combine the constants on the other side of the equation.
5.  **Take the square root of both sides:** Apply the square root operation to both sides of the equation. **Crucially**, remember that taking the square root of a constant yields both a **positive and a negative value**. This will result in an expression like x + (b/2) = ±√(constant).
6.  **Solve the resulting linear equations:** The equation from the previous step splits into two separate linear equations: one with the positive square root and one with the negative square root. Solve each of these linear equations for x. These solutions are the roots of the quadratic equation.

Examples provided show this process. For instance, solving x² + 2x = 24 by completing the square:
*   Rewrite as x² + 2x - 24 = 0. Move constant: x² + 2x = 24.
*   The coefficient of x is 2. Half of 2 is 1. 1² is 1. Add 1 to both sides: x² + 2x + 1 = 24 + 1.
*   Factor the left side and simplify the right: (x + 1)² = 25.
*   Take the square root of both sides: x + 1 = ±√25 = ±5.
*   Solve the two linear equations: x + 1 = 5 (giving x = 4) and x + 1 = -5 (giving x = -6).

The method of completing the square **always works**. It is particularly easy when the coefficient 'b' is an even number. However, the sources note a limitation when searching for **real solutions**: if, after adding the squared term, the constant on the right-hand side is negative, the square root of a negative number is required, which is not defined in the real number system. In such cases, there are no real roots. Complex numbers are mentioned as necessary for square roots of negative numbers, but these are not covered in this course.

Completing the square is a **powerful method** and is used to **derive the quadratic formula** from the general equation ax² + bx + c = 0. It is also the basis for understanding why x = -b/(2a) is the axis of symmetry of a parabola.