---
title: Graphs of Polynomials End Behavior
date: 2025-05-08
weight: 50.1
---

Let's delve into the **end behaviour** of polynomial graphs! This describes what happens to the graph of a polynomial function as the `x` values become very large (approaching positive infinity, `x → ∞`) or very small (approaching negative infinity, `x → -∞`).

### The Role of the Leading Term 🚀

The **end behaviour of a polynomial is determined solely by its leading term**. The leading term is the term with the highest degree (highest exponent) in the polynomial. For very large or very small values of `x`, this term will dominate and essentially dictate the overall direction of the graph, making all other terms insignificant in comparison.

Let's consider a polynomial function `f(x)` in the standard form:
`f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀`

Here, `aₙxⁿ` is the **leading term**, where:
*   `n` is the **degree** of the polynomial (the highest exponent).
*   `aₙ` is the **leading coefficient** (the coefficient of the highest-degree term).

The end behaviour depends on two key characteristics of this leading term:
1.  **Whether the degree `n` is even or odd**.
2.  **Whether the leading coefficient `aₙ` is positive or negative**.

### Understanding the Four Scenarios 🧭

Let's break down the end behaviour into four distinct cases based on these two characteristics:

#### 1. Even Degree (n is even) 짝수 차수

If the highest exponent `n` is an **even number** (e.g., 2, 4, 6, etc.), the ends of the graph will **point in the same direction**. This is similar to a quadratic function like `y = x²` or `y = -x²`.

*   **Case 1: Even Degree, Positive Leading Coefficient (`aₙ > 0`)** ⬆️⬆️
    *   As `x` approaches positive infinity (`x → ∞`), `f(x)` approaches positive infinity (`f(x) → ∞`).
    *   As `x` approaches negative infinity (`x → -∞`), `f(x)` also approaches positive infinity (`f(x) → ∞`).
    *   **Visual Aid:** Both ends of the graph go **up** (like a smiley face parabola 😊).

*   **Case 2: Even Degree, Negative Leading Coefficient (`aₙ < 0`)** ⬇️⬇️
    *   As `x` approaches positive infinity (`x → ∞`), `f(x)` approaches negative infinity (`f(x) → -∞`).
    *   As `x` approaches negative infinity (`x → -∞`), `f(x)` also approaches negative infinity (`f(x) → -∞`).
    *   **Visual Aid:** Both ends of the graph go **down** (like a frowny face parabola ☹️).

#### 2. Odd Degree (n is odd) 홀수 차수

If the highest exponent `n` is an **odd number** (e.g., 1, 3, 5, etc.), the ends of the graph will **point in opposite directions**. This is similar to a linear function like `y = x` or a cubic function like `y = x³`.

*   **Case 3: Odd Degree, Positive Leading Coefficient (`aₙ > 0`)** ⬇️⬆️
    *   As `x` approaches positive infinity (`x → ∞`), `f(x)` approaches positive infinity (`f(x) → ∞`).
    *   As `x` approaches negative infinity (`x → -∞`), `f(x)` approaches negative infinity (`f(x) → -∞`).
    *   **Visual Aid:** The graph goes **down on the left** and **up on the right** (like a rising slide 🎢).

*   **Case 4: Odd Degree, Negative Leading Coefficient (`aₙ < 0`)** ⬆️⬇️
    *   As `x` approaches positive infinity (`x → ∞`), `f(x)` approaches negative infinity (`f(x) → -∞`).
    *   As `x` approaches negative infinity (`x → -∞`), `f(x)` approaches positive infinity (`f(x) → ∞`).
    *   **Visual Aid:** The graph goes **up on the left** and **down on the right** (like a falling slide 📉).

### Summary Table 📊

| Degree (`n`) | Leading Coefficient (`aₙ`) | End Behaviour (`f(x)` as `x→-∞`, `f(x)` as `x→∞`) | Visual Aid |
| :----------- | :------------------------- | :------------------------------------------------ | :--------- |
| **Even**     | `aₙ > 0` (Positive)        | `f(x) → ∞`, `f(x) → ∞`                          | ⬆️⬆️       |
| **Even**     | `aₙ < 0` (Negative)        | `f(x) → -∞`, `f(x) → -∞`                         | ⬇️⬇️       |
| **Odd**      | `aₙ > 0` (Positive)        | `f(x) → -∞`, `f(x) → ∞`                          | ⬇️⬆️       |
| **Odd**      | `aₙ < 0` (Negative)        | `f(x) → ∞`, `f(x) → -∞`                          | ⬆️⬇️       |

This table provides a concise overview of how to determine the end behaviour of a polynomial function.

---

### Practice Questions 📝

#### Question 1: Describe the End Behaviour
For each polynomial function, describe its end behaviour using the `x → ±∞` and `f(x) → ±∞` notation, and include an emoji visual aid.

**(a)** `f(x) = 3x⁴ - 2x² + 5`
**(b)** `g(x) = -x³ + 7x - 1`
**(c)** `h(x) = -2x⁶ + 8x⁵ - 10x`
**(d)** `k(x) = 0.5x⁵ - x⁴ + 3x + 9`

#### Question 2: Infer from End Behaviour
A polynomial graph shows the following end behaviour:
*   As `x → ∞`, `f(x) → -∞`.
*   As `x → -∞`, `f(x) → ∞`.

**(a)** Is the degree of this polynomial even or odd?
**(b)** Is its leading coefficient positive or negative?

#### Question 3: Match End Behaviour to Polynomial Form
Match each end behaviour description to the characteristic of its leading term:

| End Behaviour Description                        | Characteristic of Leading Term          |
| :----------------------------------------------- | :-------------------------------------- |
| 1. Both ends go up ⬆️⬆️                         | (A) Odd degree, positive coefficient    |
| 2. Left end down, right end up ⬇️⬆️             | (B) Even degree, negative coefficient   |
| 3. Both ends go down ⬇️⬇️                       | (C) Even degree, positive coefficient   |
| 4. Left end up, right end down ⬆️⬇️             | (D) Odd degree, negative coefficient    |

---

### Solutions to Practice Questions ✅

#### Solution 1:
**(a)** `f(x) = 3x⁴ - 2x² + 5`
*   **Leading Term:** `3x⁴`
*   **Degree:** `4` (Even)
*   **Leading Coefficient:** `3` (Positive)
*   **End Behaviour:** As `x → ∞`, `f(x) → ∞`. As `x → -∞`, `f(x) → ∞`. ⬆️⬆️

**(b)** `g(x) = -x³ + 7x - 1`
*   **Leading Term:** `-x³`
*   **Degree:** `3` (Odd)
*   **Leading Coefficient:** `-1` (Negative)
*   **End Behaviour:** As `x → ∞`, `f(x) → -∞`. As `x → -∞`, `f(x) → ∞`. ⬆️⬇️

**(c)** `h(x) = -2x⁶ + 8x⁵ - 10x`
*   **Leading Term:** `-2x⁶`
*   **Degree:** `6` (Even)
*   **Leading Coefficient:** `-2` (Negative)
*   **End Behaviour:** As `x → ∞`, `f(x) → -∞`. As `x → -∞`, `f(x) → -∞`. ⬇️⬇️

**(d)** `k(x) = 0.5x⁵ - x⁴ + 3x + 9`
*   **Leading Term:** `0.5x⁵`
*   **Degree:** `5` (Odd)
*   **Leading Coefficient:** `0.5` (Positive)
*   **End Behaviour:** As `x → ∞`, `f(x) → ∞`. As `x → -∞`, `f(x) → -∞`. ⬇️⬆️

#### Solution 2:
The polynomial graph shows:
*   As `x → ∞`, `f(x) → -∞`.
*   As `x → -∞`, `f(x) → ∞`.
This matches the ⬆️⬇️ visual aid.

**(a)** Is the degree of this polynomial even or odd?
*   Since the ends point in **opposite directions** (one up, one down), the degree must be **odd**.

**(b)** Is its leading coefficient positive or negative?
*   For an odd-degree polynomial, if the left end goes up and the right end goes down, the leading coefficient is **negative**.

#### Solution 3:
1.  **Both ends go up ⬆️⬆️**: (C) Even degree, positive coefficient.
2.  **Left end down, right end up ⬇️⬆️**: (A) Odd degree, positive coefficient.
3.  **Both ends go down ⬇️⬇️**: (B) Even degree, negative coefficient.
4.  **Left end up, right end down ⬆️⬇️**: (D) Odd degree, negative coefficient.

Understanding these concepts of end behaviour, along with the behavior at x-intercepts, significantly helps in sketching and interpreting polynomial graphs.