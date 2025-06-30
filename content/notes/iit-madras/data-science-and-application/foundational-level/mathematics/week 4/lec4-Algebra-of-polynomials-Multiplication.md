---
title: Polynomials
date: 2025-05-08
weight: 41
---

Alright! Let's dive into the fascinating world of **Polynomial Multiplication**! ✨ We've already covered addition and subtraction, which are about combining "like terms". Multiplication introduces a new twist, but it's just as logical and easy to grasp. Get ready for some algebra fun! 🚀

### What is a Polynomial Again? (A quick mental stretch! 🧠)

Just to quickly recap from our previous conversation, a polynomial is a mathematical expression that's essentially a **sum of several mathematical terms**. Each of these terms can be a number, a variable, or a product of several variables, like `3x` or `x²y`. From a mathematician's perspective, the operations allowed are addition, subtraction, multiplication, and variables must have "natural exponents" (non-negative integers like 0, 1, 2, etc.).

### Algebra of Polynomials: Multiplication ✖️

When multiplying polynomials, the core idea is to make sure **every term in one polynomial is multiplied by every term in the other polynomial**. Then, you combine any "like terms" that result from these multiplications. It's like a grand matchmaking event where every term gets a partner from the other side! 🥰

Let's break it down into simpler steps:

#### 1. Multiplying a Polynomial by a Monomial (Single Term) 💡

This is the most straightforward case. You simply **distribute** the monomial to *each* term in the polynomial. Remember the **Law of Exponents** here: when you multiply variables with the same base, you add their exponents (e.g., $x^2 \times x^3 = x^{2+3} = x^5$).

**Example:** Multiply `2x³` by `(x² + x + 1)`.

`2x³ * (x² + x + 1)`
$= (2x³ \times x²) + (2x³ \times x) + (2x³ \times 1)`
$= (2 \times x^{3+2}) + (2 \times x^{3+1}) + (2 \times x³)$
$= 2x⁵ + 2x⁴ + 2x³` ✨

#### 2. Multiplying Two Polynomials (General Case) 🧑‍🏫

This extends the idea of distributing. If you have two polynomials, you can **break down one polynomial into its individual monomial terms**, and then multiply *each* of those monomials by the *entire* second polynomial. After all the multiplications are done, you **add the resulting like terms**.

This is the generalization of the "FOIL" method (First, Outer, Inner, Last) that you might have used for multiplying two binomials (polynomials with two terms). FOIL essentially applies this distributive principle for two terms.

**Example:** Multiply `(x + 1)` by `(x² + x + 1)`.

Think of `(x + 1)` as two separate monomials: `x` and `1`.
Then, distribute each of these to `(x² + x + 1)`:

`x * (x² + x + 1) = x³ + x² + x`
`+ 1 * (x² + x + 1) = x² + x + 1`

Now, **add the results** and combine any like terms:
`(x³ + x² + x) + (x² + x + 1)`
$= x³ + (x² + x²) + (x + x) + 1`
$= x³ + 2x² + 2x + 1` 🥳

#### General Formula & Resultant Degree 📝

For a more formal approach, if you have two polynomials, `p(x)` of degree `n` and `q(x)` of degree `m`:
`p(x) = a₀ + a₁x + a₂x² + ... + aₙxⁿ`
`q(x) = b₀ + b₁x + b₂x² + ... + bₘxᵐ`

Their product `p(x)q(x)` will be a polynomial whose degree is the **sum of their individual degrees**, i.e., `n + m`.

The coefficient of any term `x^k` in the product `p(x)q(x)` is found by summing all products `a_j * b_{k-j}` where `j` ranges from `0` to `k` (or up to the minimum of `n` or `m`, depending on the specific coefficients available).

So, `p(x)q(x) = ∑_{k=0}^{n+m} (∑_{j=0}^{k} a_j b_{k-j})x^k`.

This formula just formalizes the "multiply every term by every term" rule. For example, to find the coefficient of `x²` (where `k=2`), you'd sum `a₀b₂ + a₁b₁ + a₂b₀`.

**Key Insight:** The product of two polynomials will **always result in another polynomial**.

---

### Practice Questions! 🌟

**Question 1:** Multiply the following:
`P(x) = 5x²`
`Q(x) = 3x³ - 2x + 7`

**Question 2:** Multiply the following:
`A(x) = (x + 3)`
`B(x) = (x - 5)`

**Question 3:** Multiply the following:
`C(x) = (2x² + x - 1)`
`D(x) = (x + 4)`

**Question 4:** Given `E(x) = x³ + 2x - 1` and `F(x) = x² - x + 3`, find the coefficient of `x³` in `E(x)F(x)`.

---

### Solutions to Practice Questions ✅

**Solution 1:** Multiply `P(x) = 5x²` and `Q(x) = 3x³ - 2x + 7`

Here, we multiply the monomial `5x²` by each term in `Q(x)`:
`P(x)Q(x) = 5x² * (3x³ - 2x + 7)`
`= (5x² \times 3x³) + (5x² \times -2x) + (5x² \times 7)`
`= (5 \times 3 \times x^{2+3}) + (5 \times -2 \times x^{2+1}) + (5 \times 7 \times x²)`
`= 15x⁵ - 10x³ + 35x²` 🎯

**Solution 2:** Multiply `A(x) = (x + 3)` and `B(x) = (x - 5)`

Multiply each term of `A(x)` by each term of `B(x)`:
`A(x)B(x) = x * (x - 5) + 3 * (x - 5)`
`= (x \times x) + (x \times -5) + (3 \times x) + (3 \times -5)`
`= x² - 5x + 3x - 15`
Now, combine like terms (`-5x` and `3x`):
`= x² + (-5 + 3)x - 15`
`= x² - 2x - 15` 🥳

**Solution 3:** Multiply `C(x) = (2x² + x - 1)` and `D(x) = (x + 4)`

Multiply each term of `C(x)` by each term of `D(x)`:
`C(x)D(x) = 2x² * (x + 4) + x * (x + 4) - 1 * (x + 4)`
`= (2x² \times x) + (2x² \times 4) + (x \times x) + (x \times 4) + (-1 \times x) + (-1 \times 4)`
`= 2x³ + 8x² + x² + 4x - x - 4`
Now, combine like terms (`8x²` and `x²`, and `4x` and `-x`):
`= 2x³ + (8 + 1)x² + (4 - 1)x - 4`
`= 2x³ + 9x² + 3x - 4` ✨

**Solution 4:** Given `E(x) = x³ + 2x - 1` and `F(x) = x² - x + 3`, find the coefficient of `x³` in `E(x)F(x)`.

To find the coefficient of `x³` (where `k=3`), we need to identify pairs of terms from `E(x)` and `F(x)` whose product results in an `x³` term. Using the general formula `a_j b_{k-j} x^k`:

For `x³` (k=3), we look for `a_j * b_{3-j}` combinations:
*   `j=0`: `a₀ * b₃` (constant from E(x) * x³ term from F(x))
    *   In `E(x)`, `a₀ = -1`. In `F(x)`, there is no `x³` term (coefficient `b₃ = 0`). So, `(-1) * 0 = 0`.
*   `j=1`: `a₁ * b₂` (x term from E(x) * x² term from F(x))
    *   In `E(x)`, `a₁ = 2` (from `2x`). In `F(x)`, `b₂ = 1` (from `x²`). So, `(2) * (1) = 2`.
*   `j=2`: `a₂ * b₁` (x² term from E(x) * x term from F(x))
    *   In `E(x)`, there is no `x²` term (coefficient `a₂ = 0`). In `F(x)`, `b₁ = -1` (from `-x`). So, `(0) * (-1) = 0`.
*   `j=3`: `a₃ * b₀` (x³ term from E(x) * constant from F(x))
    *   In `E(x)`, `a₃ = 1` (from `x³`). In `F(x)`, `b₀ = 3`. So, `(1) * (3) = 3`.

Now, sum these products to get the total coefficient for `x³`:
`0 + 2 + 0 + 3 = 5`

Therefore, the coefficient of `x³` in `E(x)F(x)` is **5**. 🌟