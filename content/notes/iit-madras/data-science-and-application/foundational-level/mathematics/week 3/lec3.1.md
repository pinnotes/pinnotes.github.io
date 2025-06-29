---
title: Quadratic functions
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 31
---

A **quadratic equation** is a powerful mathematical tool that arises when a **quadratic function** is set to be equal to a specific value, often zero. Think of it as finding the exact 'spots' on a graph where a U-shaped or inverted U-shaped curve (called a **parabola**) crosses a certain horizontal line. 🎢

### What is a Quadratic Equation?

At its heart, a quadratic equation is defined by an equation of the form:
$\mathbf{ax^2 + bx + c = 0}$

Here's a breakdown of its components:
*   `a`, `b`, and `c` are **coefficients** (constants), and `x` is the variable.
*   The **crucial condition** is that `a` must **not be equal to 0** (`a ≠ 0`). Why? Because if `a` were 0, the `ax²` term would disappear, and the equation would simply become `bx + c = 0`, which is a **linear equation** (representing a straight line) instead of a quadratic one. The term "quadratic" itself means "related to square," derived from a word meaning "square".
*   When `a`, `b`, and `c` are **integers** and the equation is set equal to 0, it is said to be in **standard form**.

### Roots of a Quadratic Equation 🌱

The **solutions** to a quadratic equation are called its **roots**. These are the specific values of `x` that make the equation `ax² + bx + c = 0` true. Graphically, if you plot the associated quadratic function `f(x) = ax² + bx + c`, its roots are simply the **x-intercepts** of the parabola – where the curve crosses the x-axis.

### Methods of Solving Quadratic Equations 🛠️

There are several techniques to find the roots of a quadratic equation:

#### 1. Graphing Method 📈
This method involves **plotting the associated quadratic function** (`f(x) = ax² + bx + c`) and visually identifying where the parabola intersects the x-axis.
*   **Key Idea**: The x-intercepts of the graph are the roots of the equation `f(x) = 0`.
*   **Usefulness**: While not always precise for finding exact roots (especially if they are not integers), this method is excellent for **verifying** algebraically found solutions. It also helps visualise how many real roots exist:
    *   **Two real roots**: If the parabola crosses the x-axis at two distinct points.
    *   **One real (repeated) root**: If the parabola touches the x-axis at exactly one point (its vertex).
    *   **No real roots**: If the parabola never intersects the x-axis (it's entirely above or below it).

#### 2. Factoring Method 📝
If the quadratic expression can be factored, this method leverages the **Zero Product Property**. This property states that if the product of two factors is zero, then at least one of those factors must be zero.
*   **Steps**:
    1.  **Write the equation in standard form**: `ax² + bx + c = 0`.
    2.  **Factor the polynomial**: Express the quadratic as a product of two binomials, e.g., `(x - p)(x - q) = 0`. The process often involves finding two numbers whose product equals `ac` and whose sum equals `b`. This can be done by looking at the prime factors of `ac` and finding combinations that sum to `b`.
    3.  **Set each factor to zero**: `x - p = 0` or `x - q = 0`.
    4.  **Solve each linear equation**: This gives the roots `x = p` and `x = q`.
*   **Foil Method (in reverse)**: To convert from the standard form to the intercept form (factored form), you essentially reverse the FOIL (First, Outer, Inner, Last) method used for multiplying binomials.

#### 3. Completing the Square Method 🏗️
This method involves manipulating the equation to create a **perfect square trinomial** on one side.
*   **Steps**:
    1.  **Rearrange the equation**: Move the constant term (`c`) to the right side of the equation and ensure the `x²` term has a coefficient of 1 (divide by `a` if necessary).
    2.  **Complete the square**: Add `(b/2)²` to both sides of the equation. This specific value completes the square on the left side, turning it into `(x + b/2)²`.
    3.  **Take the square root**: Take the square root of both sides, remembering to include both positive and negative roots (`±`).
    4.  **Solve for x**: Isolate `x` to find the roots.
*   **Limitation**: This method might not yield real solutions if, after completing the square, the right-hand side of the equation is a negative number, as the square root of a negative number is not a real number.

#### 4. Quadratic Formula ➗
The **quadratic formula** is a general formula that can solve *any* quadratic equation in standard form. It is derived directly from the method of completing the square.

The formula is:
$\mathbf{x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}}$

*   **The Discriminant (Δ)**: The term inside the square root, $\mathbf{b^2 - 4ac}$, is called the **discriminant** (often denoted as Δ). It "discriminates" or determines the nature and number of real roots.
    *   If **Δ > 0**: There are **two distinct real roots**. If Δ is also a perfect square, the roots are rational; otherwise, they are irrational.
    *   If **Δ = 0**: There is **one real (repeated) root**, which is always rational.
    *   If **Δ < 0**: There are **no real roots** (the roots are complex numbers, which are not covered in detail in this course).

### Practice Questions ✍️

**Q1: Find the roots of the quadratic equation $x^2 + 7x + 10 = 0$ using the factoring method.**

**Q2: Determine the number and type of real roots for the equation $2x^2 - 3x + 5 = 0$ using the discriminant.**

### Solutions ✅

**Solution to Q1:**

1.  **Equation in standard form**: The equation is already in standard form: $x^2 + 7x + 10 = 0$.
    *   Here, `a = 1`, `b = 7`, `c = 10`.

2.  **Factor the polynomial**: We need two numbers that multiply to `ac = 1 * 10 = 10` and add up to `b = 7`.
    *   The numbers are 2 and 5 (since 2 * 5 = 10 and 2 + 5 = 7).
    *   Rewrite the middle term using these numbers: $x^2 + 2x + 5x + 10 = 0$.
    *   Group terms and factor out common factors:
        $(x^2 + 2x) + (5x + 10) = 0$
        $x(x + 2) + 5(x + 2) = 0$
    *   Factor out the common binomial: $(x + 2)(x + 5) = 0$.

3.  **Set each factor to zero**:
    *   $x + 2 = 0$
    *   $x + 5 = 0$

4.  **Solve each linear equation**:
    *   $x = -2$
    *   $x = -5$

Therefore, the roots of the equation $x^2 + 7x + 10 = 0$ are **-2 and -5**.

---

**Solution to Q2:**

1.  **Identify coefficients**: For the equation $2x^2 - 3x + 5 = 0$:
    *   `a = 2`
    *   `b = -3`
    *   `c = 5`

2.  **Calculate the discriminant (Δ)**:
    *   $\Delta = b^2 - 4ac$
    *   $\Delta = (-3)^2 - 4(2)(5)$
    *   $\Delta = 9 - 40$
    *   $\Delta = -31$

3.  **Interpret the discriminant's value**:
    *   Since $\Delta = -31$, which is **less than 0** ($\Delta < 0$).

Therefore, the equation $2x^2 - 3x + 5 = 0$ has **no real roots**. This means the parabola represented by the function $f(x) = 2x^2 - 3x + 5$ does not intersect the x-axis.