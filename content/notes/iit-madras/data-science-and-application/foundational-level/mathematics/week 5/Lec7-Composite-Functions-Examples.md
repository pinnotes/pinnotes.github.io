---
title: Composite Functions | Examples
date: 2025-05-08
weight: 57
---

Let's make understanding **Composite Functions** as easy as pie! 🥧✨

Imagine you have a couple of magical machines 🤖⚙️.

*   **Machine G (the inner function `g`)**: Takes your initial idea (`x`) and transforms it into something new (`g(x)`).
*   **Machine F (the outer function `f`)**: Takes what Machine G made (`g(x)`) and transforms *that* into a final product (`f(g(x))`).

That's precisely what a **composite function** is! It's when the **output of one function becomes the input of another function** 🔗.

### What is a Composite Function? 🤔

A composite function is effectively a "function of a function". If you have two functions, say `f` and `g`, the **composition of `f` and `g`** is typically written as **`f ◦ g`** (read as "f of g"). This is formally defined by the equation:

**(f ◦ g)(x) = f(g(x))**

To break it down:
1.  You start with an input **`x`** 🔢.
2.  You first apply the **inner function `g`** to `x`, which gives you **`g(x)`** (the first transformation).
3.  Then, you take that result, `g(x)`, and use it as the input for the **outer function `f`**, which finally gives you **`f(g(x))`** (the second transformation leading to the final product).

The order matters significantly! `(f ◦ g)(x)` is generally not the same as `(g ◦ f)(x)`. It's a chain reaction! ⛓️➡️

### Determining the Domain of a Composite Function 🌍

When you're trying to figure out which `x` values are allowed for a composite function like `(f ◦ g)(x) = f(g(x))`, there are two crucial rules to remember to ensure the function is properly defined:

1.  **Rule 1: The initial input `x` must be acceptable to the *inner* function `g`** ⚠️.
    If your `x` is **not in the domain of `g`** (`x ∉ Domain(g)`), then `g(x)` won't exist, and thus `(f ◦ g)(x)` cannot exist either. So, `x` cannot be in the domain of `(f ◦ g)`. Think of it as the first machine needing to be able to process the raw material.

2.  **Rule 2: The output of the *inner* function `g(x)` must be acceptable to the *outer* function `f`** ⚠️.
    You must **exclude any `x` values** for which the **output `g(x)` falls outside the domain of `f`** (`g(x) ∉ Domain(f)`). This means the output from the first machine must be something the second machine can actually use as its input, otherwise the entire process breaks down.

### Examples from the Sources 💡

Let's look at some illustrative examples:

**Example 1: Basic Composition**
If `f(x) = 3x - 4` and `g(x) = x²`:

*   **` (f ◦ g)(x) = f(g(x))`**:
    1.  First, `g(x)` gives us `x²`.
    2.  Then, we substitute `x²` into `f(x)` wherever `x` appears: `f(x²) = 3(x²) - 4 = **3x² - 4**`.

*   **` (g ◦ f)(x) = g(f(x))`**:
    1.  First, `f(x)` gives us `3x - 4`.
    2.  Then, we substitute `3x - 4` into `g(x)` wherever `x` appears: `g(3x - 4) = (3x - 4)² = **9x² - 24x + 16**`.

As you can see, the results are different, highlighting that **the order of composition matters!** 🔄

**Example 2: Shop Discounts (Real-World Application)** 🛍️💰
A shop offers two discounts on a product with a Manufacturer's Recommended Price (MRP) of £14,000.
*   **First discount (`f(x)`)**: 15% off the MRP. This means you pay 85% of the price. So, `f(x) = 0.85x`.
*   **Second discount (`g(x)`)**: A flat £3,000 discount. So, `g(x) = x - 3000`.

If both discounts are applied, with the first discount applied *then* the second, this can be represented as a composite function `h(x) = g(f(x))`:
1.  `f(x)` (15% off) is applied first.
2.  The result, `f(x)`, is then fed into `g(x)` (the flat £3,000 discount).
    `h(x) = g(f(x)) = 0.85x - 3000`.

For an MRP of £14,000:
`h(14000) = 0.85(14000) - 3000 = 11900 - 3000 = **£8,900**`.
This demonstrates how composition helps model sequential operations in real life! 📈

**Example 3: Composition with Domain Restrictions** 🌍
Let `f(x) = 2/(x-1)` and `g(x) = 3/x`. Let's find `(f ◦ g)(x)` and its domain.

*   **` (f ◦ g)(x) = f(g(x))`**:
    1.  Substitute `g(x)` into `f(x)`: `f(3/x) = 2 / ( (3/x) - 1 )`.
    2.  Simplify the complex fraction: `2 / ( (3-x)/x ) = **2x / (3-x)**`.

*   **Domain of `(f ◦ g)(x)`** 🌍:
    1.  **Rule 1 (Domain of `g`)**: The inner function `g(x) = 3/x` is undefined if the denominator is zero. So, **`x ≠ 0`**.
    2.  **Rule 2 (Output of `g` in domain of `f`)**: The outer function `f(x) = 2/(x-1)` is undefined if its denominator is zero, i.e., `x - 1 = 0`, which means its input cannot be `1`. Therefore, the output of `g(x)` cannot be `1`.
        Set `g(x) = 1`: `3/x = 1` ➡️ **`x = 3`**. So, `x ≠ 3`.

    Therefore, the domain of `(f ◦ g)(x)` is **all real numbers except 0 and 3** (`R \ {0, 3}`).

---

### Practice Questions with Solutions 📝

**Question 1:** Given `h(x) = x - 7` and `k(x) = x² + 3`.
Find:
(a) `(h ◦ k)(x)` 🤔
(b) `(k ◦ h)(x)` 🤔

**Solution:**

(a) **` (h ◦ k)(x) = h(k(x))`** 💡
    1.  Substitute `k(x)` into `h(x)`: `h(x² + 3)`.
    2.  Replace `x` in `h(x)` with `x² + 3`: `(x² + 3) - 7`.
    3.  Simplify: `**x² - 4**` ✅

(b) **` (k ◦ h)(x) = k(h(x))`** 💡
    1.  Substitute `h(x)` into `k(x)`: `k(x - 7)`.
    2.  Replace `x` in `k(x)` with `x - 7`: `(x - 7)² + 3`.
    3.  Simplify: `(x² - 14x + 49) + 3 = **x² - 14x + 52**` ✅

---

**Question 2:** A charity organises a fundraising event. They initially collect **£25 per participant** (`C(p)`). After collecting the money, they deduct a **flat £500 event cost** (`E(c)`) before donating the remainder to their cause.
If `P` is the number of participants, write the composite function that represents the total amount donated to the cause, and calculate the donation if there are 100 participants. 💖💰

**Solution:**

1.  **Collection Function (`C(P)`)** 💡:
    The charity collects £25 per participant.
    `C(P) = 25P`.

2.  **Event Cost Function (`E(c)`)** 💡:
    A flat £500 event cost is deducted from the collected amount.
    `E(c) = c - 500` (Here `c` is the total collected amount, which will be the input to `E`).

3.  **Composite Function for Total Donation** 🔗:
    Since the money is collected first, and then the event cost is deducted, the output of `C(P)` becomes the input for `E(c)`. This is `**(E ◦ C)(P) = E(C(P))**`.
    Substitute `C(P)` into `E(c)`:
    `E(C(P)) = E(25P) = (25P) - 500`
    So, the total donation function is `**D(P) = 25P - 500**` ✅.

4.  **Calculate Donation for P = 100 participants** 📈:
    `D(100) = 25(100) - 500`
    `D(100) = 2500 - 500`
    `D(100) = **£2,000**` ✅.

---

**Question 3:** Let `f(x) = √(x + 3)` and `g(x) = 1/(x - 5)`. Find the domain of `(f ◦ g)(x)`. 🌍🤔

**Solution:**

To find the domain of `(f ◦ g)(x) = f(g(x))`, we apply the two rules for domains:

1.  **Rule 1: Domain of `g(x)`** ⚠️
    The function `g(x) = 1/(x - 5)` is defined for all real numbers except where its denominator is zero.
    So, `x - 5 ≠ 0` ➡️ **`x ≠ 5`**.

2.  **Rule 2: Output of `g(x)` must be in the domain of `f(x)`** ⚠️
    The function `f(x) = √(x + 3)` is defined only when its input (`x`) is greater than or equal to 0. So, `x + 3 ≥ 0` implies `x ≥ -3`.
    This means the output of `g(x)` must be greater than or equal to -3: `g(x) ≥ -3`.
    Substitute `g(x) = 1/(x - 5)`: `1/(x - 5) ≥ -3`.

    Now, we need to solve `1/(x - 5) ≥ -3`. We can split this into two cases based on the sign of `(x - 5)`:

    *   **Case A: `x - 5 > 0` (i.e., `x > 5`)**
        Multiply both sides by `(x - 5)` (which is positive):
        `1 ≥ -3(x - 5)`
        `1 ≥ -3x + 15`
        `3x ≥ 14`
        `x ≥ 14/3`
        Since `14/3` is approximately `4.67`, this condition `x ≥ 14/3` combined with `x > 5` means **`x > 5`**.

    *   **Case B: `x - 5 < 0` (i.e., `x < 5`)**
        Multiply both sides by `(x - 5)` (which is negative), *reversing the inequality sign*:
        `1 ≤ -3(x - 5)`
        `1 ≤ -3x + 15`
        `3x ≤ 14`
        `x ≤ 14/3`
        Combining `x < 5` and `x ≤ 14/3` means **`x ≤ 14/3`**.

    So, the values of `x` for which `g(x) ∈ Domain(f)` are `x ≤ 14/3` OR `x > 5`.

Combining the result from Rule 1 (`x ≠ 5`) and Rule 2 (`x ≤ 14/3` OR `x > 5`):
Since `14/3 ≈ 4.67`, `x=5` falls within `x > 14/3`. The conditions `x ≤ 14/3` and `x > 5` (while also considering `x ≠ 5`) cover all valid inputs.

Therefore, the domain of `(f ◦ g)(x)` is **`x ≤ 14/3` or `x > 5`**.
In interval notation, this is `**( -∞, 14/3 ] ∪ ( 5, ∞ )**` 🌍.