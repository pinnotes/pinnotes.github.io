---
title: Graphs of Polynomaials | Turning Point
date: 2025-05-08
weight: 50.2
---

Let's explore **turning points** in the graphs of polynomial functions! 🎢

A **turning point** on a polynomial graph is a specific location where the graph changes its direction. Imagine you're tracing the graph with your finger:
*   If your finger was moving upwards (the function was increasing 📈) and now it starts moving downwards (the function is decreasing 📉), that point is a turning point. This is called a local maximum.
*   Conversely, if your finger was moving downwards (the function was decreasing 📉) and now it starts moving upwards (the function is increasing 📈), that point is also a turning point. This is called a local minimum.

These "ups and downs" are typical features of polynomial functions. You can visualise them as the peaks and valleys on the curve.

### The Link Between Degree and Turning Points 🔗

The number of turning points a polynomial graph can have is directly related to its **degree** (the highest exponent of the variable).

For a polynomial of degree `n`, it can have **at most (maximum) `n - 1` turning points**. This means it can have `n-1` turning points, or fewer, but never more than `n-1`.

Let's look at some examples:
*   A **linear polynomial** (degree `n=1`) like `f(x) = x` has no turning points (at most `1-1 = 0`).
*   A **quadratic polynomial** (degree `n=2`) like `f(x) = x²` has at most `2-1 = 1` turning point, which is its vertex.
*   A **cubic polynomial** (degree `n=3`) like `f(x) = x³ - x` can have at most `3-1 = 2` turning points.
*   A polynomial of **degree 4** can have at most `4-1 = 3` turning points.
*   A polynomial of **degree 5** can have at most `5-1 = 4` turning points.

This relationship is a useful check when sketching graphs: if your graph of a degree `n` polynomial shows more than `n-1` turning points, you know your graph is incorrect.

### Locating Turning Points (A Glimpse into Calculus) 🔍

While we can identify *how many* turning points a polynomial can have based on its degree, **precisely locating** these turning points on a graph often requires more advanced mathematical tools, specifically from **calculus**.

In calculus, you learn that at a turning point, the **slope of the function becomes zero**. However, there can be points where the slope is zero but it's not a peak or a valley (e.g., an inflection point where the graph flattens momentarily before continuing in the same general direction). Without calculus, you might only be able to *roughly estimate* the turning points.

---

### Practice Questions 📝

#### Question 1: Maximum Turning Points
Determine the maximum number of turning points for each polynomial function:

**(a)** `f(x) = 5x⁷ - 2x⁴ + 9x`
**(b)** `g(x) = -x² + 6x - 10`
**(c)** `h(x) = x¹⁰⁰ + 3x⁵⁰ - 1`

#### Question 2: Inferring Degree
A polynomial graph has the following characteristics:
*   It has 3 turning points.
*   Its left end goes down, and its right end goes up.

**(a)** What is the minimum possible degree of this polynomial?
**(b)** Is its leading coefficient positive or negative?

#### Question 3: Identifying Turning Points from Description
Which of the following describes a turning point of a function?
**(a)** A point where the graph crosses the x-axis.
**(b)** A point where the graph changes from increasing to decreasing.
**(c)** A point where the graph remains constant.
**(d)** A point where the graph changes from a positive slope to a negative slope.

---

### Solutions to Practice Questions ✅

#### Solution 1:
The maximum number of turning points for a polynomial of degree `n` is `n - 1`.

**(a)** `f(x) = 5x⁷ - 2x⁴ + 9x`
*   **Degree:** `n = 7`
*   **Maximum Turning Points:** `7 - 1 = 6` 🔄

**(b)** `g(x) = -x² + 6x - 10`
*   **Degree:** `n = 2`
*   **Maximum Turning Points:** `2 - 1 = 1` ⛰️

**(c)** `h(x) = x¹⁰⁰ + 3x⁵⁰ - 1`
*   **Degree:** `n = 100`
*   **Maximum Turning Points:** `100 - 1 = 99` 🏔️

#### Solution 2:
**(a)** What is the minimum possible degree of this polynomial?
*   A polynomial of degree `n` has at most `n - 1` turning points.
*   If the polynomial has 3 turning points, then `n - 1 ≥ 3`, which means `n ≥ 4`.
*   Therefore, the **minimum possible degree** of this polynomial is **4** (a quartic polynomial).

**(b)** Is its leading coefficient positive or negative?
*   The end behaviour indicates: as `x → ∞`, `f(x) → ∞` (right end up) and as `x → -∞`, `f(x) → -∞` (left end down).
*   For a polynomial whose ends point in opposite directions, the degree must be **odd**.
*   However, we determined the minimum degree is 4, which is an **even** number.
*   Let's re-evaluate the end behaviour description: "left end down, right end up".
    *   For an **odd degree** polynomial:
        *   `aₙ > 0`: Left end down, right end up (like `y=x³`). This matches the description.
        *   `aₙ < 0`: Left end up, right end down (like `y=-x³`).
    *   For an **even degree** polynomial:
        *   `aₙ > 0`: Both ends up (like `y=x²`).
        *   `aₙ < 0`: Both ends down (like `y=-x²`).
*   Since the description states "left end down, right end up", this contradicts an even-degree polynomial. There might be an ambiguity in the question or an assumption that the number of turning points directly corresponds to the degree for *all* polynomials.
*   **Clarification based on sources:** The number of turning points is *at most* `n-1`. An odd-degree polynomial always has its ends going in opposite directions. An even-degree polynomial always has its ends going in the same direction.
*   Given the end behaviour "left end down, right end up", the polynomial **must be of odd degree**.
*   If it's an odd-degree polynomial, and it has 3 turning points, then the minimum degree `n` must satisfy `n - 1 ≥ 3`, so `n ≥ 4`. The smallest *odd* integer that is `≥ 4` is `5`.
*   Therefore, the **minimum possible degree is 5** for this polynomial to satisfy *both* conditions.
*   For an odd-degree polynomial that goes "left end down, right end up", the **leading coefficient must be positive**.

#### Solution 3:
**(a)** A point where the graph crosses the x-axis. (This describes an x-intercept or zero, not necessarily a turning point.)
**(b)** **A point where the graph changes from increasing to decreasing.** (This is the definition of a local maximum, which is a type of turning point.)
**(c)** A point where the graph remains constant. (This would be a horizontal line segment, not a turning point as defined for polynomials.)
**(d)** A point where the graph changes from a positive slope to a negative slope. (This is another way of describing a local maximum, matching definition. This statement is also correct.)

**Correct options:** (b) and (d).