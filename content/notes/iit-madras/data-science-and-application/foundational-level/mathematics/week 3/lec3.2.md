---
title: Examples of Quadratic functions
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 32
---

Let's explore **quadratic functions**! 🤩 They might sound complex, but they're just a special kind of equation that helps us understand U-shaped curves. Think of them as the mathematical way to describe things like the path of a thrown ball 🏈, the shape of a bridge arch 🌉, or even how a company's profit changes with pricing. 📈

### What is a Quadratic Function? 🤔

A **quadratic function** is defined by an equation that looks like this:
$\mathbf{f(x) = ax^2 + bx + c}$

Here's what each part means:
*   `x` is your **variable** (the input).
*   `f(x)` (or `y`) is the **output** value.
*   `a`, `b`, and `c` are **coefficients** (just numbers/constants). 🔢
*   The **most important condition** is that **`a` cannot be zero** (`a ≠ 0`).
    *   Why? Because if `a` were 0, the `ax²` term would vanish, and you'd be left with `f(x) = bx + c`, which is a **linear function** (a straight line) instead of a quadratic one. The term "quadratic" itself comes from a word meaning "square," referring to the `x²` term.

### The Shape: A Parabola! 🎢

When you plot a quadratic function on a graph, it always forms a distinctive U-shaped curve called a **parabola**. The direction this parabola opens depends on the value of `a`:
*   **If `a > 0` (positive)**: The parabola **opens upwards** ⬆️, like a smile or a U. This means the function will have a **minimum value**.
*   **If `a < 0` (negative)**: The parabola **opens downwards** ⬇️, like a frown or an inverted U. This means the function will have a **maximum value**.

### Key Features of a Parabola ✨

To really understand and plot a quadratic function, there are a few important points and lines to know:

*   **Axis of Symmetry** 📏: This is a **vertical line** that divides the parabola into two mirror-image halves. If you fold the graph along this line, both sides of the parabola would perfectly match.
    *   The equation for the axis of symmetry is always **`x = -b / 2a`**.
*   **Vertex** 🎯: This is the **most important point** on the parabola! It's where the axis of symmetry intersects the curve.
    *   The **x-coordinate of the vertex** is the same as the axis of symmetry: **`-b / 2a`**.
    *   The **y-coordinate of the vertex** is the **minimum** (if `a > 0`) or **maximum** (if `a < 0`) value of the function. You find it by plugging the x-coordinate of the vertex back into the original function `f(x)`.
    *   Interestingly, the slope of the quadratic function at its vertex is 0, indicating it's the point where the function "turns around" from increasing to decreasing or vice-versa.
*   **Y-intercept** 📈: This is the point where the parabola crosses the y-axis. You find it by setting `x = 0` in the function, which simplifies to `f(0) = c`. So, the y-intercept is `(0, c)`.

### How to Graph a Quadratic Function (Quick Recipe) 🍰

1.  **Find the y-intercept**: Set `x = 0` to get `(0, c)`.
2.  **Find the axis of symmetry**: Use `x = -b / 2a`. Draw this vertical line.
3.  **Find the vertex**: Plug the `x` value from the axis of symmetry into `f(x)` to get the `y` coordinate. Plot this point.
4.  **Use symmetry**: Choose a few `x` values on one side of the axis of symmetry, calculate `f(x)`, and then use the symmetry to find corresponding points on the other side.
5.  **Connect the dots**: Draw a smooth curve through your plotted points.

### Examples of Quadratic Functions 🧑‍🏫

#### Example 1: Finding Minimum Value and Range 📉
Let's consider the function **`f(x) = x² - 6x + 9`**.

1.  **Identify `a`, `b`, `c`**: Here, `a = 1`, `b = -6`, `c = 9`.
2.  **Determine opening direction**: Since `a = 1` (which is `> 0`), the parabola **opens upwards** ⬆️ and will have a **minimum value**.
3.  **Calculate axis of symmetry**:
    `x = -b / 2a = -(-6) / (2 * 1) = 6 / 2 = 3`.
    So, the axis of symmetry is the line `x = 3`.
4.  **Find the vertex**: Plug `x = 3` back into the function:
    `f(3) = (3)² - 6(3) + 9 = 9 - 18 + 9 = 0`.
    The vertex is at `(3, 0)`. This means the **minimum value of the function is 0**.
5.  **Determine the range**: Since the minimum value is 0 and the parabola opens upwards, the function can take any value from 0 upwards. So, the **range is `f(x) ≥ 0`** (or `[0, ∞)`).

#### Example 2: Maximising Profit in a Business Scenario 💰
Imagine a tour bus service in Chennai that currently serves 500 customers daily at ₹40 per person. The owner estimates that for every ₹4 fare hike, they lose 10 passengers. The company wants to **maximize its income**.

1.  **Define a variable for fare hikes**: Let `x` be the number of ₹4 fare hikes.
2.  **Formulate the income function**:
    *   New fare per person: `40 + 4x` (initial fare + 4 rupees for each hike) (information from outside the provided excerpt, inferred from context).
    *   New number of passengers: `500 - 10x` (initial passengers - 10 for each hike).
    *   Total Income (I) = (New fare per person) × (New number of passengers)
        `I(x) = (40 + 4x)(500 - 10x)` (multiplication of binomials, explained using FOIL method in).
    *   Expanding this gives the quadratic function: `I(x) = -40x² + 1600x + 20,000`.
3.  **Identify coefficients and opening direction**:
    *   Here, `a = -40`, `b = 1600`, `c = 20,000`.
    *   Since `a = -40` (which is `< 0`), the curve will **open downwards** ⬇️, meaning a **maximum income is possible**.
4.  **Find the vertex to determine maximum income**: The maximum income will be attained at the vertex.
    *   Axis of symmetry (x-coordinate of vertex): `x = -b / 2a = -1600 / (2 * -40) = -1600 / -80 = 20`.
    *   This means 20 fare hikes (of ₹4 each) will maximize the income. The optimal fare would be `40 + (4 * 20) = 40 + 80 = ₹120`.
    *   To find the maximum income (y-coordinate of vertex), plug `x = 20` back into `I(x)`:
        `I(20) = -40(20)² + 1600(20) + 20,000`
        `I(20) = -40(400) + 32,000 + 20,000`
        `I(20) = -16,000 + 32,000 + 20,000 = 36,000`
    *   So, the company can achieve a maximum daily income of ₹36,000 by setting the fare at ₹120 per person. This shows how quadratic equations can be used to solve real-life situations.

### Slope of a Quadratic Function (A little extra!) ✍️

Unlike a straight line, which has a constant slope, the **slope of a quadratic function is not constant**; it changes at every point along the curve. For `f(x) = ax² + bx + c`, the slope at any point `x` is given by the formula **`2ax + b`**.
*   When the slope `2ax + b` equals `0`, that's precisely where the function reaches its minimum or maximum value, which corresponds to the x-coordinate of the vertex, `x = -b / 2a`.

---

### Practice Questions 🧠

**Q1: For the quadratic function `f(x) = 2x² + 4x - 6`:**
    a) Does the parabola open upwards or downwards? ⬆️⬇️
    b) Will the function have a minimum or maximum value? 🤔
    c) Find the equation of the axis of symmetry. 📏
    d) Find the coordinates of the vertex. 🎯
    e) What is the range of the function? 📈

**Q2: A company's daily cost `C` (in pounds) to produce `x` units of a certain product is given by the function `C(x) = 0.5x² - 100x + 6000`.**
    a) Does this cost function have a minimum or maximum cost? 💰
    b) How many units (`x`) should be produced to minimize the cost? 📉
    c) What is the minimum daily cost? 💷

---

### Solutions ✅

**Solution to Q1:**
For `f(x) = 2x² + 4x - 6`, we have `a = 2`, `b = 4`, `c = -6`.

a) **Does the parabola open upwards or downwards?**
    *   Since `a = 2` (which is `> 0`), the parabola **opens upwards** ⬆️.
b) **Will the function have a minimum or maximum value?**
    *   Because it opens upwards, the function will have a **minimum value**.
c) **Find the equation of the axis of symmetry.**
    *   `x = -b / 2a`
    *   `x = -4 / (2 * 2) = -4 / 4 = -1`
    *   The axis of symmetry is **`x = -1`**.
d) **Find the coordinates of the vertex.**
    *   The x-coordinate of the vertex is `-1`.
    *   Substitute `x = -1` into `f(x)` to find the y-coordinate:
        `f(-1) = 2(-1)² + 4(-1) - 6`
        `f(-1) = 2(1) - 4 - 6`
        `f(-1) = 2 - 4 - 6 = -8`
    *   The vertex is at **`(-1, -8)`**.
e) **What is the range of the function?**
    *   Since the function has a minimum value of `-8` (at the vertex) and opens upwards, the `f(x)` values will be `-8` or greater.
    *   The range is **`f(x) ≥ -8`** (or `[-8, ∞)`).

---

**Solution to Q2:**
For `C(x) = 0.5x² - 100x + 6000`, we have `a = 0.5`, `b = -100`, `c = 6000`.

a) **Does this cost function have a minimum or maximum cost?**
    *   Since `a = 0.5` (which is `> 0`), the parabola opens upwards, meaning the function will have a **minimum cost**.
b) **How many units (`x`) should be produced to minimize the cost?**
    *   The minimum cost occurs at the x-coordinate of the vertex (axis of symmetry).
    *   `x = -b / 2a`
    *   `x = -(-100) / (2 * 0.5) = 100 / 1 = 100`
    *   To minimize cost, **100 units** should be produced.
c) **What is the minimum daily cost?**
    *   Substitute `x = 100` into `C(x)`:
        `C(100) = 0.5(100)² - 100(100) + 6000`
        `C(100) = 0.5(10000) - 10000 + 6000`
        `C(100) = 5000 - 10000 + 6000 = 1000`
    *   The minimum daily cost is **£1000**.