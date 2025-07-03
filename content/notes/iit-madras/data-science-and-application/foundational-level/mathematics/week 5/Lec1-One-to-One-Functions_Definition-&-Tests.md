---
title: One to One Functions | Definition & Tests
date: 2025-05-08
weight: 51
---

A one-to-one function, also known as an **injective function**, is a type of mathematical relationship where each unique input from the domain maps to a unique output in the co-domain. Think of it like assigning a unique identifier to every item: if two items have the same identifier, they *must* be the exact same item. 🎯

More formally, a function `f: A → B` is considered one-to-one if for any two elements `x₁` and `x₂` in the domain `A`:
*   If **`f(x₁) = f(x₂)`**, then it *must* imply **`x₁ = x₂`**.
*   Alternatively, if **`x₁ ≠ x₂`**, then it *must* imply **`f(x₁) ≠ f(x₂)`**.

### How to Test if a Function is One-to-One 🧐

There are two primary methods to test if a function is one-to-one:

1.  **The Horizontal Line Test (HLT)** 📏
    This is a **graphical test**.
    *   **How it works:** If you can draw *any* horizontal line that intersects the graph of the function at **more than one point**, then the function is **not one-to-one**. ❌
    *   Conversely, if *every* horizontal line you draw intersects the graph at **at most one point** (meaning it intersects once or not at all), then the function **is one-to-one**. ✅

2.  **The Algebraic Test**
    This method uses the formal definition.
    *   **How it works:**
        1.  Start by assuming `f(x₁) = f(x₂)`.
        2.  Use algebraic manipulation to show that this assumption **forces `x₁` to be equal to `x₂`**.
        3.  If you can consistently arrive at `x₁ = x₂`, the function is one-to-one. If you find cases where `x₁ ≠ x₂` but `f(x₁) = f(x₂)` (like `x₁ = 2` and `x₂ = -2` for `f(x) = x²`), then it's not one-to-one.

### Examples to Understand One-to-One Functions 📖

Let's look at some examples:

*   **The Absolute Value Function: `f(x) = |x|`**
    *   **Test:** Using the **Horizontal Line Test**.
        *   If you plot `f(x) = |x|`, you'll see a V-shaped graph.
        *   Draw a horizontal line (for example, at `y = 2`). This line will intersect the graph at two points: `x = 2` and `x = -2`.
        *   Since different inputs (`2` and `-2`) produce the same output (`2`), and a horizontal line intersects the graph at more than one point, `f(x) = |x|` **fails the HLT**.
    *   **Conclusion:** `f(x) = |x|` is **not a one-to-one function** 🚫.

*   **Exponential Functions: `f(x) = a^x` (where `a > 0` and `a ≠ 1`)**
    *   **Test:** The sources state that exponential functions are either **continuously increasing** (when `a > 1`, e.g., `2^x`) or **continuously decreasing** (when `0 < a < 1`, e.g., `(1/2)^x`) across their domain.
    *   **Rule:** A function that is **strictly increasing or strictly decreasing** throughout its domain is **always one-to-one**.
    *   **Conclusion:** Exponential functions like `f(x) = 5^x` or `f(x) = (1/2)^x` are **one-to-one functions** ✅. They will always pass the Horizontal Line Test.

*   **Logarithmic Functions: `f(x) = log_a x` (where `a > 0` and `a ≠ 1`)**
    *   **Test:** Logarithmic functions are defined as the **inverse** of exponential functions. The sources establish that if a function is one-to-one, its inverse exists. Conversely, if a function's inverse exists, the original function must be one-to-one.
    *   **Rule:** Similar to exponential functions, logarithmic functions are also either continuously increasing (when `a > 1`) or continuously decreasing (when `0 < a < 1`).
    *   **Conclusion:** Logarithmic functions are **one-to-one functions** ✅.

### Practice Questions with Solutions 📝

**Question 1:** Is the function **`f(x) = x²`** a one-to-one function on its entire domain `R`? Explain using the concept of one-to-one functions. 🧐

**Solution:**
No, `f(x) = x²` is **not a one-to-one function** on its entire domain `R`.

*   **Reasoning (Algebraic):** Let's choose two different input values, for example, `x₁ = 3` and `x₂ = -3`.
    *   `f(x₁) = f(3) = 3² = 9`
    *   `f(x₂) = f(-3) = (-3)² = 9`
    *   Here, we have `x₁ ≠ x₂` (since `3 ≠ -3`), but `f(x₁) = f(x₂)` (both equal `9`). This contradicts the definition of a one-to-one function, which requires different inputs to produce different outputs.
*   **Reasoning (Graphical - Horizontal Line Test):** If you were to sketch the graph of `f(x) = x²` (a parabola opening upwards), you would observe that any horizontal line drawn above the x-axis (e.g., `y = 4` or `y = 9`) intersects the parabola at two distinct points. For instance, the line `y = 9` intersects at `x = 3` and `x = -3`. Since a horizontal line can intersect the graph at more than one point, `f(x) = x²` fails the Horizontal Line Test and is therefore not one-to-one. 📏❌

---

**Question 2:** Consider the function **`f(x) = 7^x`**. Is this function one-to-one? Justify your answer. 🤔

**Solution:**
Yes, the function `f(x) = 7^x` is a **one-to-one function**. ✅

*   **Reasoning:**
    *   The function `f(x) = 7^x` is an **exponential function** with a base `a = 7`. Since `a > 1`, the sources confirm that this type of function is an **increasing function** across its entire domain.
    *   A fundamental property stated in the sources is that if a function is **increasing** (or decreasing) throughout its domain, then it is necessarily **one-to-one**.
    *   Therefore, because `f(x) = 7^x` is a continuously increasing function, it guarantees that every unique input `x` will produce a unique output `f(x)`. Graphically, this means no horizontal line will ever intersect its graph at more than one point, so it passes the Horizontal Line Test.