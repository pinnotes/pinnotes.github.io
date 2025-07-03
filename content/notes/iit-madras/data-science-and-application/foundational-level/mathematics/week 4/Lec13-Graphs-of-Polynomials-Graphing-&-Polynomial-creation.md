---
title: Graphs of Polynomials | Graphing & Polynomial creation
date: 2025-05-08
weight: 50.3
---

Let's delve into the fascinating world of **graphs of polynomials**, focusing on how to **sketch them** and even **create their equations** from a given graph! 🎢

Polynomial functions are special types of functions that are always **smooth curves** with no sharp corners or edges. They are also **continuous**, meaning you can draw their entire graph without lifting your pen. The "ups and downs" you see in their graphs are typical features.

### Graphing Polynomial Functions: Your Step-by-Step Guide 🎨

To sketch the graph of a polynomial function, you can follow an algorithm that uses several key characteristics:

1.  **Find the X-intercepts (Zeros) and their Multiplicities** 🎯
    *   **What are they?** These are the `x` values where the graph crosses or touches the x-axis, meaning `f(x) = 0`.
    *   **How to find them?** If your polynomial equation is in factored form, simply set each factor to zero and solve for `x`.
    *   **Multiplicity** is how many times a particular factor appears. It tells you about the graph's behaviour at that intercept:
        *   **Even Multiplicity:** The graph will **touch** the x-axis at this point and **bounce off** it. It acts like a tangent to the x-axis. The higher the even power, the flatter the curve appears near the intercept.
        *   **Odd Multiplicity:** The graph will **cross** or **intersect** the x-axis at this point. If the multiplicity is 1 (a "single order" event), the graph will appear almost linear as it crosses. Higher odd powers also cause the graph to flatten more as it crosses.

2.  **Find the Y-intercept** 🍰
    *   **What is it?** This is the point where the graph crosses the y-axis.
    *   **How to find it?** Simply set `x = 0` in your polynomial equation and calculate `f(0)`.

3.  **Check for Symmetry (Optional but Helpful) Symmetry Senses** 👯
    *   **Even Functions:** If `f(-x) = f(x)` (like `f(x) = x²`), the graph is symmetric about the y-axis.
    *   **Odd Functions:** If `f(-x) = -f(x)` (like `f(x) = x³`), the graph is symmetric about the origin. Knowing this can save you plotting time!

4.  **Determine the End Behaviour** 🌬️
    *   **What is it?** This describes what happens to the graph as `x` gets very large (tends to positive infinity, `x → ∞`) or very small (tends to negative infinity, `x → -∞`).
    *   **How is it decided?** The end behaviour is determined solely by the **leading term** of the polynomial (the term with the highest exponent, `a_n x^n`).
        *   **Even Degree (n is even) & Positive Leading Coefficient (a_n > 0):** Both ends of the graph go **up** (like `y = x²` or `y = x⁴`) ⬆️⬆️.
        *   **Even Degree (n is even) & Negative Leading Coefficient (a_n < 0):** Both ends of the graph go **down** (like `y = -x²` or `y = -x⁴`) ⬇️⬇️.
        *   **Odd Degree (n is odd) & Positive Leading Coefficient (a_n > 0):** The left end goes **down** and the right end goes **up** (like `y = x³` or `y = x⁵`) ⬇️⬆️.
        *   **Odd Degree (n is odd) & Negative Leading Coefficient (a_n < 0):** The left end goes **up** and the right end goes **down** (like `y = -x³` or `y = -x⁵`) ⬆️⬇️.

5.  **Understand Turning Points** 🎢
    *   **What are they?** A turning point is where the graph changes its direction, specifically from increasing to decreasing (a "local maximum" ⛰️) or from decreasing to increasing (a "local minimum" 🏞️).
    *   **How many?** For a polynomial of degree `n`, it can have **at most `n - 1` turning points**. This is a useful check: if your sketch shows more than `n-1` turning points, it's incorrect.
    *   **Locating them:** Precisely locating turning points usually requires **calculus** (where the slope of the function becomes zero). However, you can roughly estimate them during sketching.

6.  **Sketch the Graph and Verify** ✏️📊
    *   Combine all the information you've gathered (intercepts, multiplicities, end behaviour, maximum turning points) to sketch the graph.
    *   For greater precision or to confirm your sketch, you can use **graphing tools** like Desmos.

### Polynomial Creation from a Graph: Reverse Engineering 🧐

If you're given a graph of a polynomial function and need to find its algebraic equation, you essentially reverse the graphing process:

1.  **Identify X-intercepts and their Multiplicities** 🔍
    *   Look at where the graph touches or crosses the x-axis.
    *   Based on whether it crosses (odd multiplicity) or bounces off (even multiplicity), determine the factors `(x - r)` and their exponents. If it crosses linearly, the multiplicity is 1. If it flattens and crosses like `x³`, the multiplicity is 3 (or higher odd). If it bounces off like `x²`, the multiplicity is 2 (or higher even).

2.  **Formulate the Least Degree Polynomial** ✍️
    *   Multiply all the factors you found, raised to their respective multiplicities. For example, if you have x-intercepts `r1, r2, ...` with multiplicities `m1, m2, ...`, your polynomial will look like `f(x) = a(x - r1)^m1 (x - r2)^m2 ...`.
    *   The sum of these multiplicities (`m1 + m2 + ...`) will give you the **least possible degree** of the polynomial. Don't forget the unknown "stretch factor" `a` in front.

3.  **Find the Y-intercept (or any other point)** 📍
    *   Locate the point where the graph crosses the y-axis. This is `(0, f(0))`. Any other clearly identifiable point `(x, f(x))` on the graph can also be used.

4.  **Solve for the Stretch Factor 'a'** 🧮
    *   Substitute the coordinates of the y-intercept (or your chosen point) into the polynomial equation you formed in step 2. This will allow you to solve for the value of `a`.

5.  **Write the Final Polynomial Formula** 🎉
    *   Once you have `a`, substitute it back into your polynomial form. This gives you the algebraic expression for the given graph. You can then verify this equation using a graphing tool.

### The Intermediate Value Theorem (IVT): A Helping Hand 🤝

The Intermediate Value Theorem is particularly useful for continuous functions, which polynomials are. It states that if a polynomial function `f(x)` is continuous on an interval `[a, b]`, and if `f(a)` and `f(b)` have **opposite signs** (one is positive, the other negative), then there must be at least one value `c` between `a` and `b` where `f(c) = 0`. In simpler terms, if the graph goes from above the x-axis to below it (or vice-versa) within an interval, it *must* cross the x-axis at least once in that interval. This theorem helps confirm the existence of zeros even if you can't find them explicitly.

---

### Practice Questions 📝

#### Question 1: Graph Characteristics
You are given a polynomial function: `f(x) = -2x^4 + 8x^2`.

**(a)** Describe the end behaviour of this polynomial. (Use arrows and direction words).
**(b)** What is the maximum number of turning points this graph can have?
**(c)** What is the y-intercept of the graph?

#### Question 2: From Graph to Features
A graph of a polynomial function is shown below (imagine a smooth curve passing through these points):
*   It crosses the x-axis at `x = -3` (appearing linear).
*   It touches the x-axis at `x = 1` and bounces off (like a parabola).
*   It crosses the x-axis at `x = 4` (appearing flattened like `x³`).
*   Its right end goes down, and its left end goes up.

**(a)** What is the multiplicity of the zero at `x = -3`?
**(b)** What is the multiplicity of the zero at `x = 1`?
**(c)** What is the minimum possible degree of this polynomial?
**(d)** Is the leading coefficient of this polynomial positive or negative?

#### Question 3: Polynomial Creation
A polynomial graph has the following features:
*   X-intercepts at `x = -1` (graph crosses linearly), `x = 2` (graph touches and bounces off).
*   Y-intercept at `(0, 4)`.

Write the algebraic equation for this polynomial function.

---

### Solutions to Practice Questions ✅

#### Solution 1:
Given `f(x) = -2x^4 + 8x^2`

**(a)** Describe the end behaviour of this polynomial.
*   The **leading term** is `-2x^4`.
*   The **degree** is `n = 4` (an even number).
*   The **leading coefficient** is `a_n = -2` (a negative number).
*   For an even degree polynomial with a negative leading coefficient, both ends go **down**.
*   **End Behaviour:** As `x → ∞`, `f(x) → -∞` (right end down); As `x → -∞`, `f(x) → -∞` (left end down) ⬇️⬇️.

**(b)** What is the maximum number of turning points this graph can have?
*   The degree of the polynomial is `n = 4`.
*   A polynomial of degree `n` can have at most `n - 1` turning points.
*   **Maximum Turning Points:** `4 - 1 = 3` 🎢.

**(c)** What is the y-intercept of the graph?
*   To find the y-intercept, set `x = 0`.
*   `f(0) = -2(0)^4 + 8(0)^2 = 0 + 0 = 0`.
*   **Y-intercept:** `(0, 0)`.

#### Solution 2:
Given graph characteristics:
*   Crosses x-axis at `x = -3` (appearing linear).
*   Touches x-axis at `x = 1` and bounces off (like a parabola).
*   Crosses x-axis at `x = 4` (appearing flattened like `x³`).
*   Right end goes down, left end goes up.

**(a)** What is the multiplicity of the zero at `x = -3`?
*   "Appearing linear" at crossing means a multiplicity of **1** (odd).

**(b)** What is the multiplicity of the zero at `x = 1`?
*   "Touches and bounces off" means an even multiplicity. The simplest even multiplicity is **2**.

**(c)** What is the minimum possible degree of this polynomial?
*   The multiplicity at `x = -3` is 1. This implies a factor `(x + 3)^1`.
*   The multiplicity at `x = 1` is 2. This implies a factor `(x - 1)^2`.
*   The multiplicity at `x = 4` "appearing flattened like `x³`" suggests an odd multiplicity greater than 1. The simplest odd multiplicity that causes flattening (more than linear) is **3**. This implies a factor `(x - 4)^3`.
*   The minimum degree is the sum of the minimum possible multiplicities: `1 + 2 + 3 = 6`.
*   **Minimum Possible Degree:** `6`.

**(d)** Is the leading coefficient of this polynomial positive or negative?
*   The end behaviour is: left end up, right end down ⬆️⬇️.
*   For a polynomial with this end behaviour, the degree must be **odd** and the leading coefficient **negative**.
*   However, our calculated minimum degree is `6`, which is **even**. This means the given end behaviour "left end up, right end down" is not possible for a polynomial whose degree is determined solely by the visible real roots and their implied multiplicities, *unless* there are other non-real roots or the description of "appearing flattened like `x³`" implies a higher odd degree than 3 which makes the total degree odd.
*   **Reconciliation:** The sources state that the sum of multiplicities is *less than or equal to* the degree of the polynomial, not necessarily equal. If the actual degree were odd (e.g., 7), and the leading coefficient was negative, it would have this end behaviour. However, based strictly on the *minimum possible degree* given by visible real roots, it's 6 (even).
*   **Assuming the question implies a polynomial that *can* have this end behaviour:** If a polynomial has a left end up and a right end down, it *must* have an **odd degree**. For an odd degree polynomial to have this end behaviour, its **leading coefficient must be negative**.
*   **Revised Answer based on Source Information on End Behavior:** The leading coefficient is **negative**. (This implies the actual degree is odd, possibly higher than 6, or there are unstated complex roots that make the implied degree for end behavior odd).

#### Solution 3:
Given graph features:
*   X-intercepts at `x = -1` (crosses linearly) and `x = 2` (touches and bounces off).
*   Y-intercept at `(0, 4)`.

1.  **Identify X-intercepts and Multiplicities:**
    *   At `x = -1`, the graph crosses linearly, so its multiplicity is 1. Factor: `(x + 1)^1`.
    *   At `x = 2`, the graph touches and bounces off, so its multiplicity is 2. Factor: `(x - 2)^2`.

2.  **Formulate the Least Degree Polynomial:**
    *   The general form is `f(x) = a(x - r1)^m1 (x - r2)^m2 ...`.
    *   `f(x) = a(x + 1)^1 (x - 2)^2`.
    *   The minimum degree is `1 + 2 = 3` (a cubic polynomial).

3.  **Use the Y-intercept to find 'a':**
    *   The y-intercept is `(0, 4)`, so `f(0) = 4`.
    *   Substitute `x = 0` and `f(x) = 4` into the equation:
        `4 = a(0 + 1)^1 (0 - 2)^2`
        `4 = a(1)( -2)^2`
        `4 = a(1)(4)`
        `4 = 4a`
        `a = 1`

4.  **Write the Final Polynomial Formula:**
    *   Substitute `a = 1` back into `f(x) = a(x + 1)(x - 2)^2`:
    *   **Equation:** `f(x) = (x + 1)(x - 2)^2`.