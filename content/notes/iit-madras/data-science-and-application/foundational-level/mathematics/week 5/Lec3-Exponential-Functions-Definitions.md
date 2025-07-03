---
title: One to One Functions | Definition & Tests
date: 2025-05-08
weight: 51
---

Let's explore **Exponential Functions** in an easy-to-understand way! 🚀

### What is an Exponential Function? 🤔

An **exponential function** is a mathematical function that shows **rapid growth or decay**. It's defined with a **constant base** raised to a **variable exponent**.

Formally, an exponential function in **standard form** is described as:
**f(x) = a^x**

Where:
*   **`a` is the base**.
*   **`a` must be greater than 0 (a > 0)**.
*   **`a` cannot be equal to 1 (a ≠ 1)**.
*   **`x` is the variable exponent**.

Think of it like compound interest, where your money grows (or shrinks) at an accelerating rate! 💰📈📉

### The Natural Exponential Function (Base `e`) 🌿

A very important type of exponential function is the **natural exponential function**, where the base is the mathematical constant `e`.

*   It's defined as **f(x) = e^x**.
*   The value of `e` is approximately 2.718, so **e > 1**.
*   **Domain**: All real numbers (R). This means you can put any real number as the exponent `x`.
*   **Range**: All positive real numbers, excluding zero `(0, ∞)`. This means the output `f(x)` will always be positive.
*   **Y-intercept**: The point **(0, 1)**. If you put `x = 0`, `e^0 = 1`.
*   **X-intercept**: There is **no x-intercept**. The graph never touches or crosses the X-axis.
*   **End Behaviour**:
    *   As `x` approaches positive infinity (`x → ∞`), `e^x` also approaches positive infinity (`e^x → ∞`).
    *   As `x` approaches negative infinity (`x → -∞`), `e^x` approaches 0 (`e^x → 0`).

### General Characteristics of `f(x) = a^x` based on the Base `a` 📊

The behaviour of an exponential function largely depends on its base `a`.

#### 1. When the Base `a` is Greater Than 1 (`a > 1`) 🌱
*   **Example**: `f(x) = 2^x` or `f(x) = 3^x`.
*   **Domain**: All real numbers (R).
*   **Range**: All positive real numbers `(0, ∞)`.
*   **Y-intercept**: The point **(0, 1)**.
*   **X-intercept**: **Nil**.
*   **End Behaviour**:
    *   As `x → ∞`, `a^x → ∞`.
    *   As `x → -∞`, `a^x → 0`.
*   **Monotonicity**: It is an **increasing function**. This means as `x` gets larger, `f(x)` also gets larger.
*   **One-to-One Function**: Because it's a strictly increasing function, `f(x) = a^x` (for `a > 1`) is a **one-to-one function**. This property is crucial because it means these functions have inverse functions (logarithmic functions).

#### 2. When the Base `a` is Between 0 and 1 (`0 < a < 1`) 🍂
*   **Example**: `f(x) = (1/2)^x`.
*   **Domain**: All real numbers (R).
*   **Range**: All positive real numbers `(0, ∞)`.
*   **Y-intercept**: The point **(0, 1)**.
*   **X-intercept**: **Nil**.
*   **End Behaviour**:
    *   As `x → ∞`, `a^x → 0`.
    *   As `x → -∞`, `a^x → ∞`.
*   **Monotonicity**: It is a **decreasing function**. This means as `x` gets larger, `f(x)` gets smaller.
*   **One-to-One Function**: Since it's a strictly decreasing function, `f(x) = a^x` (for `0 < a < 1`) is also a **one-to-one function**.

### Laws of Exponents 🔢

Exponential functions follow specific rules for their exponents:
For any real numbers `s` and `t`, and positive bases `a` and `b`:
*   **Product Rule**: `a^s × a^t = a^(s+t)`
    *   *Example*: `2^3 × 2^4 = 2^(3+4) = 2^7`
*   **Power of a Power Rule**: `(a^s)^t = a^(s×t)`
    *   *Example*: `(2^3)^4 = 2^(3×4) = 2^12`
*   **Power of a Product Rule**: `(ab)^s = a^s b^s`
    *   *Example*: `(2×3)^4 = 2^4 × 3^4`

These laws are fundamental for manipulating and simplifying exponential expressions.

### Connection to One-to-One Functions (Revisited) 🤝

As we discussed in our previous conversation, a function is **one-to-one** if each unique input maps to a unique output [Lec 30 - Polynomials]. This is crucial for inverse functions to exist [Lec 30 - Polynomials].

**Exponential functions are one-to-one** because they are either consistently increasing (`a > 1`) or consistently decreasing (`0 < a < 1`) across their entire domain. This property ensures that for any given output, there was only one possible input that could have produced it. Therefore, an **inverse function (`f⁻¹`) always exists** for an exponential function, and this inverse is the **logarithmic function**.

### Practice Questions with Solutions 📝

**Question 1:** Which of the following expressions represents an exponential function? Justify your answer. 🤔
(a) `f(x) = x^5`
(b) `g(x) = 7^x`
(c) `h(x) = (-2)^x`
(d) `k(x) = 1^x`

**Solution:**
**Only (b) `g(x) = 7^x` represents an exponential function**. ✅

*   **Justification:**
    *   An exponential function must be in the form `f(x) = a^x`, where the base `a > 0` and `a ≠ 1`.
    *   For `g(x) = 7^x`, the base `a = 7`. Since `7 > 0` and `7 ≠ 1`, it fits the definition of an exponential function.
    *   (a) `f(x) = x^5` is a **power function** (a polynomial), not an exponential function, because the base `x` is variable, not a constant.
    *   (c) `h(x) = (-2)^x` is **not an exponential function** because the base `a = -2` is not greater than 0 (`-2 < 0`). This would lead to undefined real values for certain `x` (e.g., `(-2)^(1/2)`).
    *   (d) `k(x) = 1^x` is **not an exponential function** because the base `a = 1` is excluded from the definition (`a ≠ 1`). `1^x` would always simply be `1`, which is a constant function.

---

**Question 2:** Simplify the expression `(5^2 × 5^3)^2` using the laws of exponents. 🔢

**Solution:**
We can simplify the expression step-by-step using the laws of exponents:

1.  **Apply the Product Rule** `a^s × a^t = a^(s+t)` for the terms inside the parenthesis:
    `5^2 × 5^3 = 5^(2+3) = 5^5`
2.  **Apply the Power of a Power Rule** `(a^s)^t = a^(s×t)`:
    `(5^5)^2 = 5^(5×2) = 5^10`

Therefore, `(5^2 × 5^3)^2 = 5^10`. ✅

---

**Question 3:** Consider the function `f(x) = (0.8)^x`.
(a) Is this function increasing or decreasing?
(b) Is this function a one-to-one function? Justify your answer.

**Solution:**

(a) The function `f(x) = (0.8)^x` is a **decreasing function**. 📉
*   **Justification**: The base `a = 0.8`. Since `0 < a < 1`, the exponential function `f(x) = a^x` is a decreasing function. This means as the value of `x` increases, the value of `f(x)` decreases.

(b) Yes, the function `f(x) = (0.8)^x` is a **one-to-one function**. ✅
*   **Justification**: According to the source, **if a function is an increasing or decreasing function, then it is one-to-one**. Since `f(x) = (0.8)^x` is a decreasing function, it inherently satisfies the condition of being one-to-one, meaning different inputs will always yield different outputs.

---

**Question 4:** A new smartphone's battery life `B(t)` (in hours) after `t` years of use is modelled by the function `B(t) = 20 * (0.9)^t`.
(a) What was the initial battery life of the smartphone (at `t = 0`)?
(b) What will be the battery life after 5 years? (Round to two decimal places.)

**Solution:**

(a) To find the initial battery life, we set `t = 0` [Outside source knowledge, but standard function evaluation].
`B(0) = 20 * (0.9)^0`
Since any non-zero number raised to the power of 0 is 1, `(0.9)^0 = 1`.
`B(0) = 20 * 1 = 20`
The initial battery life of the smartphone was **20 hours**. 🔋

(b) To find the battery life after 5 years, we set `t = 5`.
`B(5) = 20 * (0.9)^5`
`B(5) = 20 * 0.59049` [Calculation performed externally]
`B(5) = 11.8098`
Rounding to two decimal places, the battery life after 5 years will be approximately **11.81 hours**. 📉

I hope this comprehensive explanation of Exponential Functions, complete with emojis, examples, and practice questions, has made the concept much clearer for you! 😊