---
title: One to One Functions | Definition & Tests
date: 2025-05-08
weight: 51
---

Let's dive into **Graphing Exponential Functions**! 📈📉

In our previous discussion, we established that an **exponential function** is generally defined as **f(x) = a^x**, where the **base `a` is a positive constant (`a > 0`) and not equal to one (`a ≠ 1`)**. Now, let's explore how these functions look when plotted and what their key characteristics are.

### Core Characteristics of Exponential Graphs (f(x) = a^x) 📊

Regardless of the specific value of the base `a` (as long as it meets the definition criteria), all standard exponential functions `f(x) = a^x` share some fundamental graphical properties:

*   **Domain**: The domain of an exponential function `f(x) = a^x` is **all real numbers (R)**. This means you can input any real number as the exponent `x`.
*   **Range**: The range of `f(x) = a^x` is **all positive real numbers, excluding zero (`(0, ∞)`)**. This implies that the output of an exponential function will always be positive, and the graph will never touch or cross the x-axis.
*   **Y-intercept**: Every exponential function `f(x) = a^x` has a **y-intercept at the point (0, 1)**. This is because any non-zero number raised to the power of zero equals one (e.g., `a^0 = 1`).
*   **X-intercept**: There is **no x-intercept** for `f(x) = a^x`. The graph will approach the x-axis as `x` tends to negative infinity (when `a > 1`) or positive infinity (when `0 < a < 1`), but it will never actually cross or touch it.

### Behavior Based on the Base `a` 🧭

The graph of an exponential function `f(x) = a^x` behaves differently depending on whether the base `a` is greater than 1 or between 0 and 1.

#### 1. When the Base `a` is Greater Than 1 (`a > 1`) 🌱📈

When `a > 1`, the function exhibits **exponential growth**.

*   **Monotonicity**: It is an **increasing function**. This means as `x` gets larger, the value of `f(x)` also gets larger at an accelerating rate. For instance, `f(x) = 2^x` is an increasing function, where `x1 < x2` implies `2^x1 < 2^x2`.
*   **End Behaviour**:
    *   As `x` approaches **positive infinity (`x → ∞`)**, `f(x)` also approaches **positive infinity (`a^x → ∞`)**.
    *   As `x` approaches **negative infinity (`x → -∞`)**, `f(x)` approaches **zero (`a^x → 0`)**. This is why the x-axis acts as a horizontal asymptote.

*   **Example Graph: `f(x) = 2^x`**
    ```
    Y ^
      |
    30|              /
    20|             /
    10|            /
      |           /
      |          /
      |         /
     1+--------*-------*-----> X
      |       (0,1)
      |
    ```
    *(This is a simplified representation; actual curve grows much faster)*

#### 2. When the Base `a` is Between 0 and 1 (`0 < a < 1`) 🍂📉

When `0 < a < 1`, the function exhibits **exponential decay**.

*   **Monotonicity**: It is a **decreasing function**. This means as `x` gets larger, the value of `f(x)` gets smaller, approaching zero. For example, `f(x) = (1/2)^x` is a decreasing function, where `x1 < x2` implies `(1/2)^x1 > (1/2)^x2`.
*   **End Behaviour**:
    *   As `x` approaches **positive infinity (`x → ∞`)**, `f(x)` approaches **zero (`a^x → 0`)**. Again, the x-axis is a horizontal asymptote.
    *   As `x` approaches **negative infinity (`x → -∞`)**, `f(x)` approaches **positive infinity (`a^x → ∞`)**.

*   **Example Graph: `f(x) = (1/2)^x`**
    ```
    Y ^
      |     /
    30|    /
    20|   /
    10|  /
      | /
     1+*-------*-------*-----> X
      (0,1)
      |
    ```
    *(Again, a simplified representation)*

### The Natural Exponential Function (f(x) = e^x) 🌿

A particularly significant exponential function is the **natural exponential function**, where the base is the mathematical constant `e` (approximately 2.718).

*   It is defined as **f(x) = e^x**.
*   Since `e > 1`, the natural exponential function behaves like the `a > 1` case: it is an **increasing function**.
*   Its **domain is R** and **range is (0, ∞)**.
*   It passes through **(0, 1)** [Recall from general characteristics].
*   The **slope of the tangent line to `f(x) = e^x` at the point (1, e) is e**.
*   The **area under `f(x) = e^x` from (-∞, 1) is e**.

### Connection to One-to-One Functions 🤝

As we've discussed, a function is **one-to-one** if each unique input maps to a unique output [Lec 30 - Polynomials]. This can be visually checked using the **Horizontal Line Test**. If any horizontal line intersects the graph of a function at most once, then the function is one-to-one.

**Exponential functions are one-to-one functions**. This is because they are **strictly increasing** (`a > 1`) or **strictly decreasing** (`0 < a < 1`) across their entire domain. This property ensures that they will always pass the Horizontal Line Test. Consequently, because they are one-to-one, exponential functions possess **inverse functions, which are logarithmic functions**.

### Practice Questions with Solutions 📝

**Question 1:** Consider the function `h(x) = (0.3)^x`. Which of the following statements about its graph are true? 🤔
(a) The function has an x-intercept at (0, 0).
(b) The function is an increasing function.
(c) The range of the function is `(0, ∞)`.
(d) As `x → -∞`, `h(x) → 0`.

**Solution:**

Let's analyze `h(x) = (0.3)^x` based on the characteristics of exponential functions:

*   **Base `a`**: Here, `a = 0.3`. Since `0 < 0.3 < 1`, this is an exponential decay function.

(a) **The function has an x-intercept at (0, 0).**
    *   **False**. Exponential functions of the form `f(x) = a^x` never have an x-intercept; they approach the x-axis but never cross it. The y-intercept is always (0, 1).

(b) **The function is an increasing function.**
    *   **False**. Because the base `a = 0.3` is between 0 and 1, `h(x)` is a **decreasing function**. As `x` increases, `h(x)` decreases.

(c) **The range of the function is `(0, ∞)`.**
    *   **True**. The range of any exponential function `f(x) = a^x` is all positive real numbers, `(0, ∞)`. This means the output values are always greater than zero.

(d) **As `x → -∞`, `h(x) → 0`.**
    *   **False**. For functions with a base `0 < a < 1`, as `x` approaches negative infinity (`x → -∞`), `h(x)` approaches positive infinity (`a^x → ∞`). The graph goes upwards to the left.

Therefore, **only statement (c) is true**. ✅

---

**Question 2:** Compare the graphs of `f(x) = 4^x` and `g(x) = (1/4)^x`. Which statement accurately describes their relationship? 🤔
(a) Both functions are decreasing.
(b) Both functions have the same end behavior as `x → ∞`.
(c) Both functions are one-to-one.
(d) The y-intercept of `f(x)` is (4, 0).

**Solution:**

Let's examine each function:

*   **`f(x) = 4^x`**: Base `a = 4`. Since `a > 1`, `f(x)` is an increasing exponential function.
*   **`g(x) = (1/4)^x`**: Base `a = 1/4`. Since `0 < a < 1`, `g(x)` is a decreasing exponential function.

Now let's evaluate the statements:

(a) **Both functions are decreasing.**
    *   **False**. `f(x) = 4^x` is increasing, while `g(x) = (1/4)^x` is decreasing.

(b) **Both functions have the same end behavior as `x → ∞`.**
    *   **False**. For `f(x) = 4^x` (base `a > 1`), as `x → ∞`, `f(x) → ∞`. For `g(x) = (1/4)^x` (base `0 < a < 1`), as `x → ∞`, `g(x) → 0`. Their end behaviors are opposite.

(c) **Both functions are one-to-one.**
    *   **True**. Both `f(x)` and `g(x)` are strictly monotonic (one increasing, one decreasing). Functions that are increasing or decreasing are one-to-one. This means they both pass the Horizontal Line Test.

(d) **The y-intercept of `f(x)` is (4, 0).**
    *   **False**. For any exponential function `f(x) = a^x`, the y-intercept is always **(0, 1)**.

Therefore, **only statement (c) is accurate**. ✅

---

**Question 3:** An initial investment `P` grows exponentially over time `t` (in years) according to the formula `A(t) = P * (1.05)^t`. Which statement best describes the growth observed in this function's graph? 🤔
(a) The function shows exponential decay.
(b) The graph will eventually cross the x-axis, indicating the investment reaches zero.
(c) The function will continuously increase as time passes.
(d) The initial investment `P` cannot be negative for the function to be valid.

**Solution:**

Let's analyze the given function `A(t) = P * (1.05)^t`. This is a transformed exponential function, `f(x) = P * a^x`, where `P` is a scaling factor and `a = 1.05` is the base. For simplicity in terms of graphing the base behavior, we can focus on `a = 1.05`.

*   **Base `a`**: Here, `a = 1.05`. Since `a > 1`, the core exponential behavior is one of growth.

(a) **The function shows exponential decay.**
    *   **False**. Since the base `1.05` is greater than 1, the function represents **exponential growth**, not decay.

(b) **The graph will eventually cross the x-axis, indicating the investment reaches zero.**
    *   **False**. The range of a standard exponential function `a^x` is `(0, ∞)`. Even with a positive scaling factor `P`, the function will never reach or cross the x-axis; it will always remain positive. An investment cannot become literally zero or negative with this type of growth model.

(c) **The function will continuously increase as time passes.**
    *   **True**. Because the base `1.05` is greater than 1, the function `(1.05)^t` is an increasing function. Assuming `P` is a positive initial investment, the total amount `A(t)` will therefore continuously increase over time.

(d) **The initial investment `P` cannot be negative for the function to be valid.**
    *   **Outside Source Knowledge**: The sources provided define exponential functions and discuss their properties, but they do not explicitly state rules about the sign of the constant `P` in a real-world application context like this. However, in the context of investment, `P` (initial principal) is conventionally non-negative. If `P` were negative, it would represent a debt, and its absolute value might grow or shrink depending on the context, but it wouldn't fit the typical "investment growth" scenario. **Therefore, while generally true in the real-world context of investment, this specific constraint is not directly found in the provided mathematical sources on exponential functions.**

Therefore, **statement (c) best describes the growth observed**. ✅