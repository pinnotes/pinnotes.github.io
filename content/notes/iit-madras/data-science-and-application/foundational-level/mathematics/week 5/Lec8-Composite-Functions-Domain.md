---
title: Composite Functions | Domain
date: 2025-05-08
weight: 58
---

Alright, let's dive into **composite functions** again, this time focusing on their **domain** with some friendly emojis! 🤖✨

### What are Composite Functions? 🤔

As we discussed, imagine two magical machines 🤖⚙️:

*   **Machine G (the inner function `g`)**: Takes your initial idea (`x`) and transforms it into something new (`g(x)`).
*   **Machine F (the outer function `f`)**: Takes what Machine G made (`g(x)`) and transforms *that* into a final product (`f(g(x))`).

A **composite function** is essentially a "function of a function" [Conversation History]. If you have two functions, `f` and `g`, their composition is typically written as **`f ◦ g`** (read as "f of g"), and it's formally defined by the equation:

**(f ◦ g)(x) = f(g(x))** [Conversation History, 5.9]

This means you apply `g` first, then `f` to the result [Conversation History, 5.9].

### Understanding the Domain of a Composite Function 🌍

Determining the **domain of a composite function** `(f ◦ g)(x) = f(g(x))` is super important because it tells you which input values `x` are allowed for the entire process to work seamlessly. Think of it as ensuring both magical machines can handle the materials at each step! ⚙️🔗

There are **two crucial rules** to follow to find the domain of `(f ◦ g)(x)` [Conversation History, 5.9]:

1.  **Rule 1: The initial input `x` must be acceptable to the *inner* function `g`** 🚫.
    *   If your `x` is **not in the domain of `g`** (`x ∉ Domain(g)`), then `g(x)` simply won't exist. If `g(x)` doesn't exist, `f` can't even start its work, so `(f ◦ g)(x)` cannot exist either [Conversation History, 5.9].
    *   **Emoji Analogy:** You can't put square pegs 🟩 into round holes ⭕! The first machine (`g`) needs to be able to process the raw material (`x`) you feed it.

2.  **Rule 2: The output of the *inner* function `g(x)` must be acceptable to the *outer* function `f`** ✅.
    *   You must **exclude any `x` values** for which the **output `g(x)` falls outside the domain of `f`** (`g(x) ∉ Domain(f)`) [Conversation History, 5.9]. Even if `g(x)` produces a value, that value might be something `f` cannot handle (e.g., trying to take the square root of a negative number, or dividing by zero).
    *   **Emoji Analogy:** The output from the first machine ⚙️ must be compatible raw material for the second machine 🤖. If machine G makes something too hot 🔥 or too cold ❄️ for machine F to handle, the whole operation breaks down!

Combining these two rules, the **domain of `(f ◦ g)(x)`** consists of all `x` such that:
*   `x` is in the domain of `g` [5.9].
*   `g(x)` is in the domain of `f` [5.9].

### Examples from the Sources 💡

Let's look at some examples to illustrate these concepts:

**Example 1: Basic Algebraic Composition**
If `f(x) = 3x - 4` and `g(x) = x²` [Conversation History, 5.9]:

*   **`(f ◦ g)(x) = f(g(x))`**:
    1.  `g(x)` transforms `x` into `x²` (input for `f`) [Conversation History].
    2.  `f(x²) = 3(x²) - 4 = **3x² - 4**` (final result) [Conversation History, 5.9].
    *   **Domain:** Both `f(x)` and `g(x)` have domains of all real numbers (ℝ) [Conversation History]. So, `x` can be any real number, and `g(x)` will always be a real number that `f(x)` can handle. Thus, the domain of `(f ◦ g)(x)` is ℝ.

*   **`(g ◦ f)(x) = g(f(x))`**:
    1.  `f(x)` transforms `x` into `3x - 4` (input for `g`) [Conversation History].
    2.  `g(3x - 4) = (3x - 4)² = **9x² - 24x + 16**` (final result) [Conversation History, 5.9].
    *   **Domain:** Similar to above, both `f(x)` and `g(x)` have domains of ℝ. So, the domain of `(g ◦ f)(x)` is also ℝ.

Notice how the order of composition produces different results [Conversation History].

**Example 2: Shop Discounts (Real-World Application)** 🛍️💰
A shop offers two discounts on a product with a Manufacturer's Recommended Price (MRP) of £14,000 [Conversation History, 5.9].
*   **First discount (`f(x)`)**: 15% off the MRP. This means you pay 85% of the price. So, `f(x) = 0.85x` [Conversation History, 5.9].
*   **Second discount (`g(x)`)**: A flat £3,000 discount. So, `g(x) = x - 3000` [Conversation History, 5.9].

If the first discount is applied *then* the second, this is `h(x) = g(f(x))` [Conversation History, 5.9]:
1.  `f(x)` (15% off) is applied first.
2.  The result, `f(x)`, is then fed into `g(x)` (the flat £3,000 discount).
    `h(x) = g(f(x)) = g(0.85x) = 0.85x - 3000` [Conversation History, 5.9].

For an MRP of £14,000:
`h(14000) = 0.85(14000) - 3000 = 11900 - 3000 = **£8,900**` [Conversation History, 5.9].
*   **Domain:** In this real-world scenario, `x` (price) must be positive, so `Domain(f)` is `(0, ∞)`. The output `f(x)` will also be positive, which is valid for `g(x)`. Thus, the domain of `h(x)` is `(0, ∞)`.

**Example 3: Composition with Domain Restrictions** 🌍
Let `f(x) = 2/(x-1)` and `g(x) = 3/x` [Conversation History, 5.9]. Let's find `(f ◦ g)(x)` and its domain.

*   **`(f ◦ g)(x) = f(g(x))`**:
    1.  Substitute `g(x)` into `f(x)`: `f(3/x) = 2 / ( (3/x) - 1 )` [Conversation History, 5.9].
    2.  Simplify: `2 / ( (3-x)/x ) = **2x / (3-x)**` [Conversation History, 5.9].

*   **Domain of `(f ◦ g)(x)`** 🌍:
    1.  **Rule 1 (Domain of `g`)**: `g(x) = 3/x`. The denominator cannot be zero. So, **`x ≠ 0`** 🚫 [Conversation History, 5.9].
    2.  **Rule 2 (Output of `g` in domain of `f`)**: `f(x) = 2/(x-1)`. Its input (`g(x)`) cannot make its denominator zero. So, `g(x)` cannot be `1` [Conversation History, 5.9].
        Set `g(x) = 1`: `3/x = 1` ➡️ `x = 3` [Conversation History, 5.9]. Therefore, **`x ≠ 3`** 🚫.

    Combining these, the domain of `(f ◦ g)(x)` is all real numbers except 0 and 3. This can be written as `ℝ \ {0, 3}` or `(-∞, 0) ∪ (0, 3) ∪ (3, ∞)` [Conversation History, 5.9].

---

### Practice Questions with Solutions 📝

Let's test your understanding with some fresh examples!

**Question 1:** Given the functions `f(x) = x² - 4` and `g(x) = x + 2`.
Find:
(a) `(f ◦ g)(x)` 🤔
(b) `(g ◦ f)(x)` 🤔

**Solution:**

(a) **`(f ◦ g)(x) = f(g(x))`** 💡
    1.  First, the inner function `g(x)` gives us `x + 2` [5.9].
    2.  Then, we substitute `x + 2` into `f(x)` wherever `x` appears: `f(x + 2) = (x + 2)² - 4` [5.9].
    3.  Expand and simplify: `(x² + 4x + 4) - 4 = **x² + 4x**` ✅

(b) **`(g ◦ f)(x) = g(f(x))`** 💡
    1.  First, the inner function `f(x)` gives us `x² - 4` [5.9].
    2.  Then, we substitute `x² - 4` into `g(x)` wherever `x` appears: `g(x² - 4) = (x² - 4) + 2` [5.9].
    3.  Simplify: `**x² - 2**` ✅

---

**Question 2:** A bakery has a process for making special cookies 🍪.
*   **Step 1 (`P(x)`)**: For every `x` kilograms of dough, they add `0.5x + 1` kilograms of chocolate chips 🍫. So, `P(x) = 0.5x + 1`.
*   **Step 2 (`C(y)`)**: The total mixture `y` (dough + chips) is then cooked, and `0.1y` kilograms evaporate 🌬️, so the final cookie weight is `y - 0.1y = 0.9y`. So, `C(y) = 0.9y`.

Write the composite function that represents the final weight of cookies for `x` kilograms of dough, and calculate the final cookie weight if they start with 10 kilograms of dough. 🏭⚖️

**Solution:**

1.  **Chocolate Chip Function (`P(x)`)** 💡:
    `P(x) = 0.5x + 1`. This function represents the amount of chocolate chips added based on the dough. Note: The problem states "total mixture y (dough + chips)". So, P(x) should represent the total mixture. Let's adjust P(x) to be the total mass after adding chips: `P(x) = x + (0.5x + 1) = 1.5x + 1`.

2.  **Cooking Function (`C(y)`)** 💡:
    `C(y) = 0.9y`. This function represents the final weight after cooking.

3.  **Composite Function for Final Cookie Weight** 🔗:
    Since `P(x)` determines the mixture *before* cooking, and `C(y)` takes that mixture as input, the composite function is `**(C ◦ P)(x) = C(P(x))**` [5.9].
    Substitute `P(x)` into `C(y)`:
    `C(P(x)) = C(1.5x + 1) = 0.9(1.5x + 1)`
    Simplify: `**W(x) = 1.35x + 0.9**` (where W is the final weight).

4.  **Calculate Final Weight for x = 10 kg of dough** 📈:
    `W(10) = 1.35(10) + 0.9`
    `W(10) = 13.5 + 0.9`
    `W(10) = **14.4 kilograms**` ✅.

---

**Question 3:** Let `f(x) = 1/x` and `g(x) = x - 4`.
Find the domain of:
(a) `(f ◦ g)(x)` 🌍
(b) `(g ◦ f)(x)` 🌍

**Solution:**

(a) **Domain of `(f ◦ g)(x) = f(g(x))`** 💡:
    *   First, find the expression for `(f ◦ g)(x)`:
        `f(g(x)) = f(x - 4) = **1/(x - 4)**`
    *   **Rule 1 (Domain of `g`)**: `g(x) = x - 4` is defined for all real numbers. So, `x ∈ ℝ` ✅.
    *   **Rule 2 (Output of `g` in domain of `f`)**: `f(x) = 1/x`. Its input (`g(x)`) cannot be zero. So, `g(x) ≠ 0`.
        Set `g(x) = 0`: `x - 4 = 0` ➡️ **`x = 4`** 🚫.
    *   Therefore, the domain of `(f ◦ g)(x)` is all real numbers except 4. In interval notation: `**(-∞, 4) ∪ (4, ∞)**` 🌍.

(b) **Domain of `(g ◦ f)(x) = g(f(x))`** 💡:
    *   First, find the expression for `(g ◦ f)(x)`:
        `g(f(x)) = g(1/x) = **(1/x) - 4**`
    *   **Rule 1 (Domain of `f`)**: `f(x) = 1/x` is defined for all real numbers except where its denominator is zero. So, **`x ≠ 0`** 🚫.
    *   **Rule 2 (Output of `f` in domain of `g`)**: `g(x) = x - 4`. Its input (`f(x)`) can be any real number because there are no restrictions (e.g., square roots of negatives, division by zero) [Conversation History, 5.9]. So, `f(x)` can be any real number, and `g` can always process it ✅.
    *   Therefore, the domain of `(g ◦ f)(x)` is all real numbers except 0. In interval notation: `**(-∞, 0) ∪ (0, ∞)**` 🌍.