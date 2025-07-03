---
title: Graphs of Polynomials Multiplication
date: 2025-05-08
weight: 49
---

Understanding the graphs of polynomial multiplication involves seeing how the characteristics of individual polynomial graphs combine to determine the characteristics of their product's graph. While the sources do not provide a direct method for visually multiplying graphs without algebraic computation, they offer a comprehensive explanation of how to multiply polynomials algebraically and then characterise the resulting graph.

Here's a breakdown of polynomial multiplication and its graphical implications:

### 1. Algebraic Polynomial Multiplication ✖️

At its core, multiplying polynomials is a process of **term-by-term multiplication**. You multiply each term of the first polynomial by every term of the second polynomial and then combine "like terms" (terms with the same variable and exponent). The **law of exponents** is applied, meaning you add the exponents of the variables when multiplying. Any constant coefficients are multiplied throughout the expression.

For instance, to multiply `p(x) = x² + x + 1` by `q(x) = 2x³`:
*   `(x² + x + 1) * (2x³)`
*   `= (x² * 2x³) + (x * 2x³) + (1 * 2x³)`
*   `= 2x⁵ + 2x⁴ + 2x³`

For two general polynomials, `p(x) = ∑_(k=0)^n a_k x^k` (degree `n`) and `q(x) = ∑_(j=0)^m b_j x^j` (degree `m`), their product `p(x)q(x)` will result in a new polynomial. The coefficient of `x^k` in the product `p(x)q(x)` is given by the summation `c_k = ∑_(j=0)^k (a_j * b_(k-j))`.

### 2. Graphical Implications of Polynomial Multiplication 📈

When two polynomials are multiplied, the resulting polynomial's graph exhibits specific characteristics derived from the original polynomials:

*   **Degree of the Product** 📏
    The **degree of the product** of two polynomials is always the **sum of their individual degrees**. For example, if you multiply a polynomial of degree `n` by a polynomial of degree `m`, the resulting polynomial will have a degree of `n + m`. This is crucial because the degree influences the overall shape and end behaviour of the graph.

*   **Zeros (x-intercepts) and Multiplicities** 🎯
    The **zeros** of the product polynomial are simply the **combination of all the zeros of the individual polynomials**.
    *   If a zero `a` appears in `p(x)` with multiplicity `m₁` and in `q(x)` with multiplicity `m₂`, then in the product `p(x)q(x)`, the zero `a` will have a **multiplicity of `m₁ + m₂`**.
    *   The **multiplicity of a zero** dictates how the graph behaves at the x-intercept:
        *   If a zero has an **even multiplicity**, the graph will **touch or be tangent to the x-axis** and bounce off, rather than crossing it.
        *   If a zero has an **odd multiplicity**, the graph will **cross or intersect the x-axis**. If it's a single order (multiplicity 1), it will appear almost linear at the intercept. For higher odd powers (e.g., 3, 5), the graph will appear flatter as it crosses the x-axis.

*   **End Behaviour** ➡️⬅️
    The **end behaviour** of a polynomial function is determined by its **leading term** (the term with the highest degree and its coefficient). When multiplying two polynomials, the leading term of the product is found by multiplying the leading terms of the individual polynomials.
    *   **Even Degree Product**: If the resultant polynomial has an even degree:
        *   If the leading coefficient is **positive (> 0)**, both ends of the graph will **go up to infinity** (↑↑).
        *   If the leading coefficient is **negative (< 0)**, both ends of the graph will **go down to minus infinity** (↓↓).
    *   **Odd Degree Product**: If the resultant polynomial has an odd degree:
        *   If the leading coefficient is **positive (> 0)**, the left end will **go down to minus infinity** and the right end will **go up to infinity** (↙️↗️).
        *   If the leading coefficient is **negative (< 0)**, the left end will **go up to infinity** and the right end will **go down to minus infinity** (↖️↘️).

*   **Smoothness and Continuity** 🌊
    Polynomial functions are always **smooth curves** (no sharp corners or edges) and are always **continuous** (no breaks). Since the multiplication of two polynomials always results in another polynomial, the graph of the product will also be smooth and continuous.

*   **Turning Points** ↩️↪️
    A polynomial of degree `n` can have **at most `n - 1` turning points**. The degree of the product determines the maximum number of turning points its graph can have. While turning points indicate where the graph changes from increasing to decreasing or vice versa, their exact location usually requires calculus.

In essence, to understand the graph of a polynomial product, you first perform the algebraic multiplication to get the new polynomial. Then, you analyse its degree, leading coefficient, zeros, and their multiplicities to sketch its graphical behaviour, as described by the properties of polynomial functions.

### Practice Questions and Solutions 📝

#### Question 1: Degree and End Behaviour
Let `p(x) = (x - 1)(x + 3)` and `q(x) = -2x + 4`.
**(a)** What is the degree of `p(x)`? What is the degree of `q(x)`?
**(b)** What will be the degree of the product polynomial `f(x) = p(x)q(x)`?
**(c)** Describe the end behaviour of `f(x)`.

**Solution 1:**
**(a)**
*   `p(x)` can be expanded to `x² + 2x - 3`. Its highest exponent is 2, so the degree of `p(x)` is **2**.
*   `q(x)` has the highest exponent 1 (from `-2x`), so the degree of `q(x)` is **1**.

**(b)** The degree of the product `f(x)` will be the sum of the degrees of `p(x)` and `q(x)`.
*   Degree of `f(x)` = Degree of `p(x)` + Degree of `q(x)` = `2 + 1 = 3`.
    So, the degree of `f(x)` is **3**.

**(c)** To determine the end behaviour, we need the leading term of `f(x)`.
*   The leading term of `p(x)` is `x²` (coefficient 1).
*   The leading term of `q(x)` is `-2x` (coefficient -2).
*   The leading term of `f(x) = p(x)q(x)` will be `(x²) * (-2x) = -2x³`.
*   Since the leading term is `-2x³`, the degree is odd (3) and the leading coefficient is negative (-2).
*   Therefore, as `x` tends to positive infinity (`x → ∞`), `f(x)` will tend to **minus infinity** (`f(x) → -∞`).
*   As `x` tends to negative infinity (`x → -∞`), `f(x)` will tend to **positive infinity** (`f(x) → ∞`).
*   In simpler terms, the graph of `f(x)` will go **up on the left** and **down on the right** (↖️↘️).

---

#### Question 2: Zeros and Multiplicities
Let `g(x) = (x - 2)²(x + 1)` and `h(x) = (x + 1)(x - 4)³`.
**(a)** Find the zeros of `g(x)` and `h(x)` and their respective multiplicities.
**(b)** Determine the zeros of the product polynomial `k(x) = g(x)h(x)` and their multiplicities.
**(c)** Describe how the graph of `k(x)` will behave at each of its x-intercepts.

**Solution 2:**
**(a)**
*   For `g(x) = (x - 2)²(x + 1)`:
    *   Zero at `x = 2` with multiplicity **2** (even).
    *   Zero at `x = -1` with multiplicity **1** (odd).
*   For `h(x) = (x + 1)(x - 4)³`:
    *   Zero at `x = -1` with multiplicity **1** (odd).
    *   Zero at `x = 4` with multiplicity **3** (odd).

**(b)** The zeros of `k(x) = g(x)h(x)` are the combined zeros of `g(x)` and `h(x)`, with their multiplicities added.
*   **Zero at `x = 2`**: This zero only comes from `g(x)`. Its multiplicity remains **2**.
*   **Zero at `x = -1`**: This zero comes from `g(x)` (multiplicity 1) and `h(x)` (multiplicity 1). So, the total multiplicity for `x = -1` is `1 + 1 = 2`.
*   **Zero at `x = 4`**: This zero only comes from `h(x)`. Its multiplicity remains **3**.

    So, the zeros of `k(x)` are:
    *   `x = 2` with multiplicity **2**.
    *   `x = -1` with multiplicity **2**.
    *   `x = 4` with multiplicity **3**.

**(c)**
*   At `x = 2` (multiplicity 2, which is even), the graph of `k(x)` will **touch the x-axis and bounce off**.
*   At `x = -1` (multiplicity 2, which is even), the graph of `k(x)` will **touch the x-axis and bounce off**.
*   At `x = 4` (multiplicity 3, which is odd), the graph of `k(x)` will **cross the x-axis**. Since it's a higher odd multiplicity (3), the graph might appear flatter as it crosses compared to a linear crossing.

---

#### Question 3: Overall Graphical Characteristics
Consider the polynomial `m(x) = x(x - 3)(x + 2)²`.
Describe the following graphical characteristics of `m(x)`:
**(a)** The degree of the polynomial.
**(b)** The end behaviour.
**(c)** The zeros and their multiplicities.
**(d)** The behaviour of the graph at each x-intercept.
**(e)** The maximum number of turning points.

**Solution 3:**
**(a)**
*   The factors are `x¹`, `(x - 3)¹`, and `(x + 2)²`.
*   Sum of exponents: `1 + 1 + 2 = 4`.
*   The degree of the polynomial `m(x)` is **4**.

**(b)**
*   The leading term is obtained by multiplying the `x` terms from each factor: `x * x * x² = x⁴`.
*   The leading coefficient is `1` (positive) and the degree is `4` (even).
*   Therefore, as `x` tends to positive infinity (`x → ∞`), `m(x)` will tend to **positive infinity** (`m(x) → ∞`).
*   As `x` tends to negative infinity (`x → -∞`), `m(x)` will also tend to **positive infinity** (`m(x) → ∞`).
*   In simpler terms, both ends of the graph will **go up** (↑↑).

**(c)**
*   Setting each factor to zero to find the x-intercepts:
    *   `x = 0` with multiplicity **1**.
    *   `x - 3 = 0` implies `x = 3` with multiplicity **1**.
    *   `x + 2 = 0` implies `x = -2` with multiplicity **2**.

**(d)**
*   At `x = 0` (multiplicity 1, odd), the graph will **cross the x-axis**. It will appear almost linear.
*   At `x = 3` (multiplicity 1, odd), the graph will **cross the x-axis**. It will appear almost linear.
*   At `x = -2` (multiplicity 2, even), the graph will **touch the x-axis and bounce off**.

**(e)**
*   The degree of the polynomial is `n = 4`.
*   The maximum number of turning points is `n - 1`.
*   So, `m(x)` can have at most `4 - 1 = 3` turning points.

I hope this explanation, with emojis and practice questions, makes the graphs of polynomial multiplication easier to understand! Let me know if you have any more questions. 😊