---
title: One to One Functions | Definition & Tests
date: 2025-05-08
weight: 51
---

Let's dive into **Composite Functions**! 🔗✨

Imagine you have two machines 🤖. One machine (`g`) takes an input and gives an output. Then, you take that output and feed it into a *second* machine (`f`), which then gives you a final output. That's exactly what a composite function is! It's when the **output of one function becomes the input of another function**.

### What is a Composite Function? 🤔

A composite function is essentially a function inside another function. If you have two functions, say `f` and `g`, the **composition of `f` and `g`** is written as **`f ◦ g`**. This is defined by **`(f ◦ g)(x) = f(g(x))`**.

In simpler terms:
1.  You start with an input `x` 🔢.
2.  You apply the **inner function `g`** to `x`, getting `g(x)`.
3.  Then, you take that result `g(x)` and apply the **outer function `f`** to it, getting `f(g(x))`.

It's like a chain reaction! ⛓️➡️

### Determining the Domain of a Composite Function 🌍

When finding the domain of a composite function `(f ◦ g)(x) = f(g(x))`, there are two crucial rules to follow to ensure the function is well-defined:

1.  **Rule 1: Input must be in the domain of the inner function** ⚠️
    If your initial input `x` is **not in the domain of `g`** (`x ∉ Domain(g)`), then `x` **cannot be in the domain of `f ◦ g`** (`x ∉ Domain(f ◦ g)`). Simply put, the first machine must be able to process the input.

2.  **Rule 2: Output of inner function must be in the domain of the outer function** ⚠️
    You must **exclude any `x` values** for which the **output of `g(x)` is not in the domain of `f`** (`g(x) ∉ Domain(f)`). This means the output from the first machine must be something the second machine can actually use as its input.

### Examples from the Sources 💡

Let's look at some examples to make this clearer:

**Example 1: Basic Composition**
If `f(x) = 3x - 4` and `g(x) = x²`:

*   **` (f ◦ g)(x) = f(g(x))`**
    1.  First, we apply `g(x)` to `x`, which is `x²`.
    2.  Then, we substitute `x²` into `f(x)` wherever `x` appears: `f(x²) = 3(x²) - 4 = **3x² - 4**`.

*   **` (g ◦ f)(x) = g(f(x))`**
    1.  First, we apply `f(x)` to `x`, which is `3x - 4`.
    2.  Then, we substitute `3x - 4` into `g(x)` wherever `x` appears: `g(3x - 4) = (3x - 4)² = **9x² - 24x + 16**`.

Notice that `(f ◦ g)(x)` is not necessarily the same as `(g ◦ f)(x)`. The order matters! 🔄

**Example 2: Shop Discounts (Real-World Application)** 🛍️💰
A shop offers two discounts on a product with a MRP of £14,000:
*   **First discount (`f(x)`)**: 15% off the MRP. So, `f(x) = 0.85x` (you pay 85% of the price).
*   **Second discount (`g(x)`)**: A flat £3,000 discount. So, `g(x) = x - 3000`.

If both discounts are applied, with the first discount applied *then* the second, this is a composition `h(x) = g(f(x))`:
1.  `f(x)` (15% off) is applied first.
2.  The result `f(x)` is then fed into `g(x)` (flat £3,000 discount).
    `h(x) = g(f(x)) = 0.85x - 3000`.

For an MRP of £14,000:
`h(14000) = 0.85(14000) - 3000 = 11900 - 3000 = **£8,900**`.
This shows how composition models sequential operations! 💡

**Example 3: Composition with Domain Restrictions** 🌍
Let `f(x) = 2/(x-1)` and `g(x) = 3/x`. Find `(f ◦ g)(x)` and its domain.

*   **` (f ◦ g)(x) = f(g(x))`**
    1.  Substitute `g(x)` into `f(x)`: `f(3/x) = 2 / ( (3/x) - 1 )`.
    2.  Simplify: `2 / ( (3-x)/x ) = **2x / (3-x)**`.

*   **Domain of `(f ◦ g)(x)`** 🌍:
    1.  **Rule 1 (Domain of `g`)**: `g(x) = 3/x` is undefined if `x = 0`. So, `x ≠ 0`.
    2.  **Rule 2 (Output of `g` in domain of `f`)**: `f(x) = 2/(x-1)` is undefined if `x - 1 = 0`, i.e., `x = 1`. This means `g(x)` cannot be `1`.
        Set `g(x) = 1`: `3/x = 1` ➡️ `x = 3`. So, `x ≠ 3`.

    Therefore, the domain of `(f ◦ g)(x)` is **all real numbers except 0 and 3** (`R \ {0, 3}`).

---

### Practice Questions with Solutions 📝

**Question 1:** Given `p(x) = x + 5` and `q(x) = x² - 1`.
Find:
(a) `(p ◦ q)(x)` 🤔
(b) `(q ◦ p)(x)` 🤔

**Solution:**

(a) **` (p ◦ q)(x) = p(q(x))`** 💡
    1.  Substitute `q(x)` into `p(x)`: `p(x² - 1)`.
    2.  Replace `x` in `p(x)` with `x² - 1`: `(x² - 1) + 5`.
    3.  Simplify: `**x² + 4**` ✅

(b) **` (q ◦ p)(x) = q(p(x))`** 💡
    1.  Substitute `p(x)` into `q(x)`: `q(x + 5)`.
    2.  Replace `x` in `q(x)` with `x + 5`: `(x + 5)² - 1`.
    3.  Simplify: `(x² + 10x + 25) - 1 = **x² + 10x + 24**` ✅

---

**Question 2:** Let `f(x) = √(x - 2)` and `g(x) = 1/x`. Find the domain of `(f ◦ g)(x)`. 🌍🤔

**Solution:**

To find the domain of `(f ◦ g)(x) = f(g(x))`, we follow the two rules:

1.  **Rule 1: Domain of `g(x)`** ⚠️
    The function `g(x) = 1/x` is defined for all real numbers except where the denominator is zero.
    So, `x ≠ 0`.

2.  **Rule 2: Output of `g(x)` must be in the domain of `f(x)`** ⚠️
    The function `f(x) = √(x - 2)` is defined only when its input (`x`) is greater than or equal to 2. So, `x - 2 ≥ 0` implies `x ≥ 2`.
    This means `g(x)` must be greater than or equal to 2: `g(x) ≥ 2`.
    Substitute `g(x) = 1/x`: `1/x ≥ 2`.

    Now, we solve `1/x ≥ 2`:
    *   If `x` is positive, multiply both sides by `x`: `1 ≥ 2x` ➡️ `x ≤ 1/2`.
        Combining `x > 0` and `x ≤ 1/2` gives `0 < x ≤ 1/2`.
    *   If `x` is negative, `1/x` will always be negative. Since `2` is positive, `1/x ≥ 2` can never be true for negative `x`.

    So, the condition `g(x) ∈ Domain(f)` implies `0 < x ≤ 1/2`.

Combining results from Rule 1 (`x ≠ 0`) and Rule 2 (`0 < x ≤ 1/2`):
The only values that satisfy both conditions are `**0 < x ≤ 1/2**` ✅.
Therefore, the domain of `(f ◦ g)(x)` is `**(0, 1/2]**` 🌍.

---

**Question 3:** A new online course offers a discount. First, a **20% discount** is applied to the original price (`P`). Then, a **service fee of £50** is added. If `D(P)` represents the discount function and `F(P)` represents the service fee function, write the composite function that represents the final cost of the course and calculate the final cost if the original price `P` is £500. 📚💸

**Solution:**

1.  **Discount Function (`D(P)`)** 💡:
    A 20% discount means you pay 80% of the original price.
    `D(P) = 0.80P`.

2.  **Service Fee Function (`F(P)`)** 💡:
    A £50 service fee is added.
    `F(P) = P + 50` (Note: Here `P` represents the price *after* the discount, which will be the input to `F`).

3.  **Composite Function for Final Cost** 🔗:
    Since the discount is applied first, then the service fee is added, the output of `D(P)` becomes the input for `F(P)`. This is `**(F ◦ D)(P) = F(D(P))**`.
    Substitute `D(P)` into `F(P)`:
    `F(D(P)) = F(0.80P) = (0.80P) + 50`
    So, the final cost function is `**C(P) = 0.80P + 50**` ✅.

4.  **Calculate Final Cost for P = £500** 💰:
    `C(500) = 0.80(500) + 50`
    `C(500) = 400 + 50`
    `C(500) = **£450**` ✅.