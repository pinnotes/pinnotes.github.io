---
title: One to One Functions | Definition & Tests
date: 2025-05-08
weight: 51
---

Let's explore **Natural Exponential Functions**! 🌿📈

The natural exponential function is a special type of exponential function where the base is the mathematical constant `e`. This `e` is approximately **2.71828**. Because `e` is greater than 1 (`e > 1`), the natural exponential function behaves like the "growth" type of exponential function we discussed earlier.

### Definition and Key Characteristics of `f(x) = e^x` 📊

The natural exponential function is defined as **`f(x) = e^x`**. It shares many fundamental graphical properties with other exponential functions of the form `f(x) = a^x` where `a > 1`:

*   **Domain**: The domain of `f(x) = e^x` is **all real numbers (ℝ)** 🌍, meaning `x` can be any value from negative infinity to positive infinity.
*   **Range**: The range of `f(x) = e^x` is **all positive real numbers, excluding zero ((0, ∞))** 🎯. This means the output `f(x)` will always be greater than 0; the graph never touches or crosses the x-axis.
*   **Y-intercept**: The graph of `f(x) = e^x` always crosses the y-axis at the point **(0, 1)** 📍. This is because `e^0 = 1`.
*   **X-intercept**: There is **no x-intercept** 🚫. The graph approaches the x-axis but never reaches it.
*   **Monotonicity**: Since its base `e` is greater than 1, `f(x) = e^x` is an **increasing function** 🌱📈. As `x` increases, `f(x)` also increases.
*   **One-to-One Function**: Because it is a strictly increasing function, `f(x) = e^x` is a **one-to-one function** 🤝. This means it passes the Horizontal Line Test and has an inverse function (the natural logarithmic function).
*   **End Behaviour**:
    *   As `x` approaches **positive infinity (`x → ∞`)**, `f(x)` also approaches **positive infinity (`e^x → ∞`)** ⬆️.
    *   As `x` approaches **negative infinity (`x → -∞`)**, `f(x)` approaches **zero (`e^x → 0`)** ➡️0. This means the x-axis acts as a horizontal asymptote.
*   **Special Slope and Area Property**: The slope of the tangent line to `f(x) = e^x` at the point `(1, e)` is `e`. Additionally, the area under `f(x) = e^x` from `(-∞, 1)` is `e`.

### Graphing `f(x) = e^x` with Ease 🖼️

Imagine a curve that starts very close to the negative x-axis on the left, crosses the y-axis at (0, 1), and then rapidly shoots upwards to the right.

```
       Y ^
         |
     6.0 +           /
         |          /
     4.0 +         /
         |        /
     2.0 +       /
         |      /
     1.0 +-----*----- (0,1)
         |    /
       0 +---+---------------> X
         -3 -2 -1 0 1 2 3
```

This visual representation aligns with the properties: it's always above the x-axis (range is `(0, ∞)`), it passes through `(0, 1)`, and it continually increases.

---

### Practice Questions with Solutions 📝

**Question 1:** Consider the function `f(x) = e^x`. Which of the following statements about its graph are correct? 🤔
(a) The domain of `f(x)` is `(0, ∞)`.
(b) The graph of `f(x)` has an x-intercept.
(c) `f(x)` is a decreasing function.
(d) As `x → -∞`, `f(x)` approaches 0.

**Solution:**

Let's evaluate each statement based on the characteristics of `f(x) = e^x`:

(a) **The domain of `f(x)` is `(0, ∞)`.**
    *   **False** ❌. The domain of the natural exponential function `f(x) = e^x` is **all real numbers (ℝ)**.

(b) **The graph of `f(x)` has an x-intercept.**
    *   **False** ❌. Exponential functions of the form `f(x) = a^x` (including `e^x`) do **not have an x-intercept**; they approach the x-axis but never touch or cross it.

(c) **`f(x)` is a decreasing function.**
    *   **False** ❌. Since the base `e` is approximately 2.718 (which is `> 1`), `f(x) = e^x` is an **increasing function** 🌱📈.

(d) **As `x → -∞`, `f(x)` approaches 0.**
    *   **True** ✅. For exponential functions with a base `a > 1` (like `e^x`), as `x` approaches negative infinity, the function value approaches zero.

Therefore, **only statement (d) is correct**.

---

**Question 2:** A new social media platform's user growth can be modelled by the function `U(t) = 1000 * e^(0.1t)`, where `U(t)` is the number of active users after `t` months.
(a) How many users did the platform start with (at `t = 0`)? 🚀
(b) Approximately how many users will there be after 5 months? (Use `e^0.5 ≈ 1.649`) 📈

**Solution:**

This question involves evaluating a transformed exponential function, similar to an example in the sources.

(a) **Users at `t = 0` (initial users):**
    To find the number of users at the start, we substitute `t = 0` into the function:
    `U(0) = 1000 * e^(0.1 * 0)`
    `U(0) = 1000 * e^0`
    Since any non-zero number raised to the power of 0 is 1 (`e^0 = 1`):
    `U(0) = 1000 * 1`
    `U(0) = 1000`
    The platform started with **1,000 users** 🚀.

(b) **Users after 5 months:**
    To find the number of users after 5 months, we substitute `t = 5` into the function:
    `U(5) = 1000 * e^(0.1 * 5)`
    `U(5) = 1000 * e^0.5`
    Given `e^0.5 ≈ 1.649`:
    `U(5) ≈ 1000 * 1.649`
    `U(5) ≈ 1649`
    There will be approximately **1,649 users** after 5 months 📈.

---

**Question 3:** Describe the relationship between the graphs of `f(x) = e^x` and `g(x) = e^(-x)`. Specifically, comment on their monotonicity and end behaviour as `x → ∞`. ↔️

**Solution:**

Let's analyze both functions:

*   **`f(x) = e^x`**:
    *   **Base**: `e ≈ 2.718` which is `> 1`.
    *   **Monotonicity**: This is an **increasing function** 🌱📈.
    *   **End Behaviour as `x → ∞`**: As `x` gets very large, `e^x` grows without bound, so `f(x) → ∞` ⬆️.

*   **`g(x) = e^(-x)`**:
    *   We can rewrite `e^(-x)` as `(e^-1)^x` or `(1/e)^x`.
    *   **Base**: `1/e ≈ 1/2.718 ≈ 0.368`. Since `0 < 0.368 < 1`.
    *   **Monotonicity**: This is a **decreasing function** 🍂📉.
    *   **End Behaviour as `x → ∞`**: As `x` gets very large, `(1/e)^x` approaches 0, so `g(x) → 0` ➡️0.

**Relationship and Comparison:**

*   **Monotonicity**: `f(x) = e^x` is an **increasing** function, while `g(x) = e^(-x)` is a **decreasing** function.
*   **End Behaviour as `x → ∞`**: As `x` approaches positive infinity, `f(x)` goes to **infinity**, whereas `g(x)` approaches **zero**.
*   **Graphical Transformation**: Graphically, `g(x) = e^(-x)` is a **reflection of `f(x) = e^x` across the y-axis**.