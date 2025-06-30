---
title: Degree of Polynomials
date: 2025-05-08
weight: 42
---

Hello there! Great to continue our discussion on polynomials! You're keen to understand the **Algebra of Polynomials**, specifically **Addition** and **Subtraction**, with ease and emojis. Let's get right to it! ➕➖

### What is a Polynomial? (A Quick Recap! 🔄)

Before we add and subtract, let's briefly recall what a polynomial is.
From a "Layman's perspective," a polynomial is a mathematical expression that is essentially a **sum of several mathematical terms**. Each of these "mathematical terms" can be a number, a variable, or a product of several variables. For instance, `3x` is a term, `x²y` is a term, and `10` is a term.

From a "mathematician's perspective," a polynomial is an algebraic expression where the only arithmetic operations allowed are **addition, subtraction, multiplication**, and variables can only have **"natural exponents"**. "Natural exponents" mean non-negative integers (0, 1, 2, and so on). For example, `t^(1/2) + t` would *not* be a polynomial because `t^(1/2)` has a rational exponent, not a natural one.

The word "polynomial" itself comes from "poly" (meaning "many") and "nomen" (meaning "terms"). Each individual term in a polynomial is called a **monomial**.

### Addition of Polynomials 🤝

When you add two polynomials, the main idea is to **combine "like terms"**.

*   **What are "Like Terms"?** 🤔
    "Like terms" are terms that have the **same variable** and the **same exponent**. For example, `3x²` and `5x²` are like terms because they both have the variable `x` raised to the power of `2`. However, `3x²` and `5x³` are *not* like terms.

*   **The Process:** 🧑‍💻
    1.  **Identify the terms in each polynomial.**
    2.  **Align like terms.** If a term is missing in one polynomial, you can think of it as having a coefficient of zero. For example, `x² + 4` can be written as `x² + 0x + 4` when adding it to a polynomial that has an `x` term.
    3.  **Add the coefficients of the like terms.**

*   **General Formula (for polynomials in one variable):** 📝
    If you have two polynomials, `p(x)` and `q(x)`:
    `p(x) = a₀x⁰ + a₁x¹ + ... + aₙxⁿ`
    `q(x) = b₀x⁰ + b₁x¹ + ... + bₘxᵐ`

    Their sum `p(x) + q(x)` is given by:
    **`p(x) + q(x) = ∑(a_k + b_k)x^k`** up to the **maximum degree** (`m ∨ n`, which means "whichever is maximum").

*   **Resultant Degree:** The degree of the polynomial you get after addition will be the **maximum of the degrees** of the two original polynomials. The term containing the highest degree will "survive".

*   **Example:** Let's add `p(x) = x³ + 3x² + 5x − 10` and `q(x) = 3x³ + 5x² − 6x − 20`:
    `p(x) = 1x³ + 3x² + 5x¹ − 10x⁰`
    `q(x) = 3x³ + 5x² − 6x¹ − 20x⁰`

    Adding term by term (by combining coefficients of like terms):
    *   For `x³` terms: `(1 + 3)x³ = 4x³`
    *   For `x²` terms: `(3 + 5)x² = 8x²`
    *   For `x¹` terms: `(5 + (-6))x¹ = -1x¹`
    *   For `x⁰` (constant) terms: `(-10 + (-20))x⁰ = -30x⁰`

    So, `p(x) + q(x) = 4x³ + 8x² − x − 30`.
    Notice the highest degree in both `p(x)` and `q(x)` was 3, and the resultant polynomial also has a degree of 3. 👍

### Subtraction of Polynomials ➖

Subtracting polynomials is **very similar to addition**. The key difference is that you **multiply the second polynomial by -1** before combining like terms.

*   **The Process:** 🧑‍💻
    1.  **Change the sign of every term in the polynomial being subtracted.** (This is equivalent to multiplying by -1).
    2.  **Combine the like terms** as you would in addition.

*   **General Formula (for polynomials in one variable):** 📝
    If you have `p(x)` and `q(x)` as defined above:
    **`p(x) - q(x) = ∑(a_k - b_k)x^k`** up to the **maximum degree** (`m ∨ n`).

*   **Resultant Degree:** The rules for determining the resultant degree in subtraction are **the same as for addition**. The degree of the result will be the maximum of the degrees of the original polynomials, *unless* the leading terms cancel out (e.g., subtracting `2x²` from `2x² + 5`).

*   **Example:** Subtract `q(x) = -3x² + 2x − 2` from `p(x) = 1x³ + 2x² + 8x`:
    First, rewrite `p(x)` and `q(x)` with all terms explicitly, including zero coefficients for missing terms if needed:
    `p(x) = 1x³ + 2x² + 8x + 0`
    `q(x) = 0x³ - 3x² + 2x - 2`

    Now, "multiply" `q(x)` by -1 (change the sign of each term):
    `-q(x) = 0x³ + 3x² - 2x + 2`

    Now, add `p(x)` and `-q(x)`:
    *   For `x³` terms: `(1 + 0)x³ = 1x³`
    *   For `x²` terms: `(2 + 3)x² = 5x²`
    *   For `x¹` terms: `(8 + (-2))x¹ = 6x¹`
    *   For `x⁰` (constant) terms: `(0 + 2)x⁰ = 2x⁰`

    So, `p(x) - q(x) = x³ + 5x² + 6x + 2`.
    Here, the highest degree was 3, and the result is also degree 3. 👍

---

### Practice Questions! 📝

**Question 1:** Add the following polynomials:
`P(x) = 7x⁴ + 3x² - 5`
`Q(x) = 2x⁴ - x³ + 4x - 1`

**Question 2:** Subtract `R(x) = -2x⁵ + 5x² + x - 10` from `S(x) = x⁵ + 3x⁴ - 4x² + 7`.

**Question 3:** What is the degree of the resultant polynomial when `(4x² + 2x)` is subtracted from `(4x² + 5)`?

---

### Solutions to Practice Questions ✅

**Solution 1:** Add `P(x) = 7x⁴ + 3x² - 5` and `Q(x) = 2x⁴ - x³ + 4x - 1`

Let's align the terms and add their coefficients, treating missing terms as having zero coefficients:

`P(x) = 7x⁴ + 0x³ + 3x² + 0x¹ - 5x⁰`
`Q(x) = 2x⁴ - 1x³ + 0x² + 4x¹ - 1x⁰`
------------------------------------------
`P(x) + Q(x) = (7+2)x⁴ + (0-1)x³ + (3+0)x² + (0+4)x¹ + (-5-1)x⁰`
`P(x) + Q(x) = 9x⁴ - x³ + 3x² + 4x - 6` 🎉

The highest degree of P(x) is 4, and the highest degree of Q(x) is 4. The resultant polynomial has a degree of 4, which is the maximum of the two.

**Solution 2:** Subtract `R(x) = -2x⁵ + 5x² + x - 10` from `S(x) = x⁵ + 3x⁴ - 4x² + 7`

First, align the terms of `S(x)` and `R(x)`, filling in missing terms with zero coefficients:
`S(x) = 1x⁵ + 3x⁴ + 0x³ - 4x² + 0x¹ + 7x⁰`
`R(x) = -2x⁵ + 0x⁴ + 0x³ + 5x² + 1x¹ - 10x⁰`

Now, change the sign of each term in `R(x)` (effectively multiplying `R(x)` by -1):
`-R(x) = +2x⁵ + 0x⁴ + 0x³ - 5x² - 1x¹ + 10x⁰`

Now, add `S(x)` and `-R(x)`:
`S(x) = 1x⁵ + 3x⁴ + 0x³ - 4x² + 0x¹ + 7x⁰`
`-R(x) = 2x⁵ + 0x⁴ + 0x³ - 5x² - 1x¹ + 10x⁰`
------------------------------------------
`S(x) - R(x) = (1+2)x⁵ + (3+0)x⁴ + (0+0)x³ + (-4-5)x² + (0-1)x¹ + (7+10)x⁰`
`S(x) - R(x) = 3x⁵ + 3x⁴ + 0x³ - 9x² - x + 17`
`S(x) - R(x) = 3x⁵ + 3x⁴ - 9x² - x + 17` 🥳

The highest degree of S(x) is 5, and the highest degree of R(x) is 5. The resultant polynomial has a degree of 5, which is the maximum of the two.

**Solution 3:** What is the degree of the resultant polynomial when `(4x² + 2x)` is subtracted from `(4x² + 5)`?

Let `P(x) = 4x² + 5` and `Q(x) = 4x² + 2x`. We want to find the degree of `P(x) - Q(x)`.

`P(x) = 4x² + 0x + 5`
`Q(x) = 4x² + 2x + 0`

Change the signs of `Q(x)`:
`-Q(x) = -4x² - 2x - 0`

Now add `P(x)` and `-Q(x)`:
`P(x) - Q(x) = (4 - 4)x² + (0 - 2)x + (5 - 0)`
`P(x) - Q(x) = 0x² - 2x + 5`
`P(x) - Q(x) = -2x + 5`

The highest power of `x` in the resultant polynomial is `x¹`.
Therefore, the degree of the resultant polynomial is **1**. 📉

This shows a case where the "maximum degree" rule for addition/subtraction (which typically assumes the leading coefficients don't cancel) still applies in principle, but the effective degree can be lower if the highest-degree terms cancel out.