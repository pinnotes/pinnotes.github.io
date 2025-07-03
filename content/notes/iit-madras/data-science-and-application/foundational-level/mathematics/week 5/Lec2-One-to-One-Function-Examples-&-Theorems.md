---
title: One to One Functions | Definition & Tests
date: 2025-05-08
weight: 52
---

Absolutely! Let's dive into one-to-one functions, making it easy to understand with definitions, tests, examples, and practice questions. 🎯

### What is a One-to-One Function? 🤔

A **one-to-one function**, also known as an **injective function**, is a special type of mathematical relationship where **each unique input from the domain maps to a unique output in the co-domain**. Think of it like this:

*   Imagine a class where every student has a unique student ID. No two different students can have the same ID. That's a one-to-one relationship! ✅🧑‍🎓🆔
*   If, however, two different students *could* have the same ID (e.g., student 1 and student 2 both have ID 123), then it's *not* one-to-one. 🙅‍♀️

More formally, a function `f: A → B` is considered one-to-one if for any two elements `x₁` and `x₂` in the domain `A`:
*   If **`f(x₁) = f(x₂)`**, then it *must* imply **`x₁ = x₂`**. (Meaning, if the outputs are the same, the inputs *had* to be the same).
*   Alternatively, if **`x₁ ≠ x₂`**, then it *must* imply **`f(x₁) ≠ f(x₂)`**. (Meaning, different inputs *always* lead to different outputs).

### How to Test if a Function is One-to-One 📏🧐

There are two primary methods to check if a function is one-to-one:

1.  **The Horizontal Line Test (HLT)** 📏
    This is a **graphical test**.
    *   **How it works**: If you can draw **any horizontal line that intersects the graph of the function at more than one point**, then the function is **not one-to-one**. ❌
    *   Conversely, if **every horizontal line you draw intersects the graph at at most one point** (meaning it intersects once or not at all), then the function **is one-to-one**. ✅

    *Example*: The graph of `f(x) = |x|` is a V-shape. If you draw a horizontal line at `y=2`, it intersects the graph at `x=2` and `x=-2`. Since it intersects at more than one point, `f(x) = |x|` is **not one-to-one**.

2.  **The Algebraic Test**
    This method uses the formal definition.
    *   **How it works**:
        1.  Start by **assuming `f(x₁) = f(x₂)`**.
        2.  Use **algebraic manipulation** to show that this assumption **forces `x₁` to be equal to `x₂`**.
        3.  If you can consistently arrive at `x₁ = x₂`, the function **is one-to-one**. If you find cases where `x₁ ≠ x₂` but `f(x₁) = f(x₂)` (like for `f(x) = x²`, where `f(2)=4` and `f(-2)=4`), then it's **not one-to-one**.

### Key Theorems about One-to-One Functions 📚

*   **Theorem on Monotonicity**: If a function is **strictly increasing or strictly decreasing** throughout its domain, then the function **is one-to-one**.
    *   *Explanation*: If a function is always going up (increasing) or always going down (decreasing), it will never return to the same y-value for different x-values. Think of a staircase: if you only ever go up, you won't land on the same step twice unless you haven't moved. ⬆️⬇️
    *   *Example*: Exponential functions like `f(x) = a^x` (where `a > 1`) are strictly increasing, and `f(x) = a^x` (where `0 < a < 1`) are strictly decreasing. Therefore, exponential functions are one-to-one functions. Similarly, logarithmic functions are also one-to-one. Linear functions like `f(x) = ax + b` (where `a ≠ 0`) are also either strictly increasing or strictly decreasing, making them one-to-one.

*   **Theorem on Inverse Functions**: A function `f` is **one-to-one if and only if its inverse function `f⁻¹` exists**.
    *   *Explanation*: For an inverse function to exist, it must be possible to "reverse" the mapping uniquely. If two different inputs `x₁` and `x₂` map to the same output `y`, then when you try to go back from `y`, you wouldn't know whether to go to `x₁` or `x₂`. A one-to-one function guarantees this unique reverse mapping. ↩️

### Examples to Enhance Understanding 💡

Let's look at more examples and apply our tests:

*   **Linear Function: `f(x) = 2x + 3`**
    *   **Algebraic Test**: Assume `f(x₁) = f(x₂)`.
        *   `2x₁ + 3 = 2x₂ + 3`
        *   `2x₁ = 2x₂`
        *   `x₁ = x₂`
    *   **Conclusion**: Since `f(x₁) = f(x₂)` implies `x₁ = x₂`, `f(x) = 2x + 3` is a **one-to-one function** ✅. (It's also strictly increasing, confirming this by the monotonicity theorem).

*   **Quadratic Function: `f(x) = x²`**
    *   **Algebraic Test**: Assume `f(x₁) = f(x₂)`.
        *   `x₁² = x₂²`
        *   This means `x₁ = x₂` or `x₁ = -x₂`.
        *   Since `x₁` does not *have* to be equal to `x₂` (e.g., if `x₁ = 2`, then `x₂` could be `2` or `-2`, and `f(2) = f(-2) = 4`), the condition `x₁ = x₂` is not *forced*.
    *   **Horizontal Line Test**: The graph of `f(x) = x²` is a parabola opening upwards. A horizontal line drawn above the x-axis will intersect the parabola at two points.
    *   **Conclusion**: `f(x) = x²` is **not a one-to-one function** 🚫.

*   **Cubic Function: `f(x) = x³`**
    *   **Algebraic Test**: Assume `f(x₁) = f(x₂)`.
        *   `x₁³ = x₂³`
        *   Taking the cube root of both sides, `x₁ = x₂`.
    *   **Horizontal Line Test**: The graph of `f(x) = x³` always passes the horizontal line test (each horizontal line intersects at most once).
    *   **Conclusion**: `f(x) = x³` is a **one-to-one function** ✅. (It's also strictly increasing, as seen in the source).

### Practice Questions with Solutions 📝

**Question 1:** Is the function **`f(x) = x + 5`** a one-to-one function? Justify your answer using the algebraic test. 🤔

**Solution:**
Yes, `f(x) = x + 5` is a **one-to-one function**. ✅

*   **Justification (Algebraic Test):**
    1.  Assume `f(x₁) = f(x₂)`.
    2.  Substitute the function definition: `x₁ + 5 = x₂ + 5`.
    3.  Subtract `5` from both sides: `x₁ = x₂`.
    4.  Since the assumption `f(x₁) = f(x₂)` directly implies `x₁ = x₂`, the function satisfies the definition of a one-to-one function.

---

**Question 2:** Consider the function **`f(x) = (1/2)^x`**. Is this function one-to-one? Justify your answer using a relevant theorem. 🧐

**Solution:**
Yes, the function `f(x) = (1/2)^x` is a **one-to-one function**. ✅

*   **Justification (Monotonicity Theorem):**
    1.  The function `f(x) = (1/2)^x` is an **exponential function** with a base `a = 1/2`.
    2.  The sources state that when the base `a` is between `0` and `1` (i.e., `0 < a < 1`), an exponential function is a **decreasing function**. Specifically, if `x₁ < x₂`, then `a^x₁ > a^x₂`.
    3.  A key theorem states that **if a function is an increasing or decreasing function, then it is one-to-one**.
    4.  Therefore, since `f(x) = (1/2)^x` is a strictly decreasing function, it is **one-to-one**. Graphically, it would pass the Horizontal Line Test.

---

**Question 3:** Is the relation represented by the graph of a circle, say `x² + y² = r²`, a one-to-one function? Explain why or why not, referring to one of the graphical tests. ⭕

**Solution:**
No, the graph of a circle `x² + y² = r²` does **not represent a one-to-one function**, because a circle is not even a function to begin with. 🚫

*   **Justification (Vertical Line Test):**
    1.  A preliminary test for *any* relation to be a function is the **Vertical Line Test** (VLT). If a vertical line intersects the graph at more than one point, the relation is not a function.
    2.  If you draw a vertical line through a circle (except at its extreme left and right points), it will intersect the circle at two distinct points. This means for a single `x` input, there are two `y` outputs.
    3.  Since the circle fails the Vertical Line Test, it is **not a function**. Consequently, it cannot be a one-to-one function.

This concludes the explanation of one-to-one functions! I hope the emojis and clear steps made it easier to grasp! 😊