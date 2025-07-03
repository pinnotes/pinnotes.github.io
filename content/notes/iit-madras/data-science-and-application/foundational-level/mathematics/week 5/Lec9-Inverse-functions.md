---
title: Inverse Functions
date: 2025-05-08
weight: 59
---

Let's unravel the world of **inverse functions**! 🔄✨

### What are Inverse Functions? 🤔

Imagine a magical function machine `f` 🤖 that takes an input `x` and spits out an output `f(x)`. An **inverse function**, denoted as `f⁻¹` (read as "f inverse"), is like a **reverse magic machine** 🪄. Its job is to **undo** what the original `f` machine did. If you put `f(x)` into `f⁻¹`, it will give you back the original `x`! [5.10]

Formally, for a function `f` and its inverse `f⁻¹`, the following compositions hold true [5.10]:

*   **(f⁻¹ ◦ f)(x) = f⁻¹(f(x)) = x** 🔙 (Start with `x`, apply `f`, then `f⁻¹`, and you're back to `x`!)
*   **(f ◦ f⁻¹)(x) = f(f⁻¹(x)) = x** 🔁 (Start with `x`, apply `f⁻¹`, then `f`, and you're also back to `x`!)

#### The "One-to-One" Rule: A Crucial Requirement! ☝️

For an inverse function to exist, the original function `f` **must be a one-to-one function** [5.10]. What does "one-to-one" mean? 🤔

*   A function `f` is **one-to-one (or injective)** if each element in its input set (domain) maps to a **distinct** element in its output set (range) [1.6.1]. In simpler terms, no two different inputs can produce the same output. 🙅‍♀️🙅‍♂️
*   **Emoji Analogy:** Imagine a class where every student has a unique student ID 🆔. If two students had the same ID, you wouldn't know which student to find if you only had the ID!
*   **Graphical Test: The Horizontal Line Test** 📏➡️📈
    *   You can visually check if a function is one-to-one by using the **Horizontal Line Test** [5.2]. If any horizontal line crosses the graph of the function **at most once**, then the function is one-to-one [5.2]. If it crosses more than once, it's *not* one-to-one, and therefore, it does not have an inverse function.
    *   Functions that are consistently **increasing** or consistently **decreasing** are always one-to-one [5.2].

### Domain and Range Swap: A Magical Exchange! 🌍↔️📦

One of the coolest properties of inverse functions is how their domains and ranges are related [5.10]:

*   The **domain of `f`** becomes the **range of `f⁻¹`** 🌍 = 📦
*   The **range of `f`** becomes the **domain of `f⁻¹`** 📦 = 🌍

This makes sense, as the inverse function literally "reverses" the mapping of inputs and outputs! [5.10]

### Graphical Symmetry: A Mirror Image! 🖼️

When you graph a function `f` and its inverse `f⁻¹` on the same coordinate plane, you'll notice a beautiful symmetry. The graph of `f⁻¹` is a **reflection of the graph of `f` across the line `y = x`** [5.10].

*   **Emoji Analogy:** Think of the line `y = x` as a perfect mirror 🪞. If you fold the paper along this line, the graph of `f` would perfectly overlap with the graph of `f⁻¹`.
*   This also means that if a point `(a, f(a))` is on the graph of `f`, then the point `(f(a), a)` will be on the graph of `f⁻¹` [5.10].

### Important Note: Not a Reciprocal! ⚠️

Be careful! The notation `f⁻¹(x)` does **not** mean `1/f(x)` [5.10]. It's a special notation for the inverse function.

### Examples from the Sources: Confirming the Magic! ✨

The sources demonstrate how to verify if two functions are inverses by checking their composition [5.10].

*   **Example 1: Linear Functions** 📏
    *   Given `g(x) = 4x` and `h(x) = x/4`. To verify if `g` is the inverse of `h` (and vice-versa), we check:
        *   `(g ◦ h)(x) = g(h(x)) = g(x/4) = 4 * (x/4) = x` ✅
        *   `(h ◦ g)(x) = h(g(x)) = h(4x) = (4x)/4 = x` ✅
    *   Since both compositions result in `x`, `g(x)` and `h(x)` are indeed inverse functions [5.10].

*   **Example 2: Cubic Functions** 🧊
    *   Given `g(x) = x³` and `g⁻¹(x) = x^(1/3)`. To verify:
        *   `g⁻¹(g(x)) = g⁻¹(x³) = (x³)^(1/3) = x` ✅
        *   `g(g⁻¹(x)) = g(x^(1/3)) = (x^(1/3))³ = x` ✅
    *   Thus, they are inverses [5.10].

*   **Example 3: Rational Functions** ➗
    *   Given `f(x) = (x-5)/(2x+3)` and `g(x) = (3x+5)/(1-2x)`. To verify:
        *   `(f ◦ g)(x) = f(g(x)) = f((3x+5)/(1-2x)) = [((3x+5)/(1-2x)) - 5] / [2((3x+5)/(1-2x)) + 3]`
            *   Simplify the numerator: `(3x+5 - 5(1-2x))/(1-2x) = (3x+5 - 5 + 10x)/(1-2x) = 13x/(1-2x)`
            *   Simplify the denominator: `(2(3x+5) + 3(1-2x))/(1-2x) = (6x+10 + 3 - 6x)/(1-2x) = 13/(1-2x)`
            *   So, `(f ◦ g)(x) = (13x/(1-2x)) / (13/(1-2x)) = x` ✅
        *   `(g ◦ f)(x) = g(f(x)) = g((x-5)/(2x+3)) = [3((x-5)/(2x+3)) + 5] / [1 - 2((x-5)/(2x+3))]`
            *   Simplify the numerator: `(3(x-5) + 5(2x+3))/(2x+3) = (3x-15 + 10x+15)/(2x+3) = 13x/(2x+3)`
            *   Simplify the denominator: `(1(2x+3) - 2(x-5))/(2x+3) = (2x+3 - 2x+10)/(2x+3) = 13/(2x+3)`
            *   So, `(g ◦ f)(x) = (13x/(2x+3)) / (13/(2x+3)) = x` ✅
    *   These functions are also inverses [5.10].

### Logarithmic Functions: A Natural Inverse Example! 🌳↔️📈
The logarithmic function (`log_a x`) is defined as the **inverse** of the exponential function (`a^x`). This is a prime example of an inverse relationship in mathematics!

### Practice Questions 📝

**Question 1:** Let `f(x) = 2x - 3` and `g(x) = (x + 3) / 2`. Are `f(x)` and `g(x)` inverse functions? Show your work using the composition rule. 🤔

**Question 2:** Consider the function `h(x) = x²`.
(a) Does `h(x)` have an inverse function on its entire domain (all real numbers)? Explain why or why not using the Horizontal Line Test. 📏
(b) If not, how could you restrict the domain of `h(x)` so that it *would* have an inverse? 🧐

**Question 3:** If the point `(5, 7)` is on the graph of a one-to-one function `k(x)`, what point must be on the graph of `k⁻¹(x)`? 📍

---

### Solutions ✅

**Solution 1:**
To check if `f(x)` and `g(x)` are inverse functions, we need to verify if `(f ◦ g)(x) = x` and `(g ◦ f)(x) = x` [5.10].

1.  **Calculate (f ◦ g)(x):**
    `(f ◦ g)(x) = f(g(x))` [5.10]
    `= f((x + 3) / 2)`
    `= 2 * ((x + 3) / 2) - 3`
    `= (x + 3) - 3`
    `= x` ✅

2.  **Calculate (g ◦ f)(x):**
    `(g ◦ f)(x) = g(f(x))` [5.10]
    `= g(2x - 3)`
    `= ((2x - 3) + 3) / 2`
    `= (2x) / 2`
    `= x` ✅

Since both compositions result in `x`, **yes, `f(x)` and `g(x)` are inverse functions** [5.10].

**Solution 2:**
(a) `h(x) = x²`.
    No, `h(x)` does **not** have an inverse function on its entire domain (all real numbers) 🚫.
    **Explanation:** If we apply the Horizontal Line Test [5.2], a horizontal line (e.g., `y = 4`) would intersect the graph of `h(x) = x²` at two points (`x = -2` and `x = 2`). Since different inputs (`-2` and `2`) produce the same output (`4`), the function is **not one-to-one** [1.6.1, 5.2]. Therefore, it cannot have an inverse function on `ℝ` [5.10].

(b) To make `h(x)` have an inverse, we need to **restrict its domain** so that it becomes one-to-one [5.10]. We can do this in a few ways:
    *   **Option 1:** Restrict the domain to `[0, ∞)` (all non-negative real numbers). On this domain, `h(x) = x²` is an increasing function [5.2] and passes the Horizontal Line Test. Its inverse would be `h⁻¹(x) = √x`.
    *   **Option 2:** Restrict the domain to `(-∞, 0]` (all non-positive real numbers). On this domain, `h(x) = x²` is a decreasing function [5.2] and passes the Horizontal Line Test. Its inverse would be `h⁻¹(x) = -√x`.

**Solution 3:**
If a point `(a, f(a))` is on the graph of a function `f`, then the point `(f(a), a)` is on the graph of its inverse function `f⁻¹` [5.10]. This means the x and y coordinates are swapped.

Given the point `(5, 7)` is on the graph of `k(x)`. Here, `a = 5` and `k(a) = 7`.
Therefore, the point that must be on the graph of `k⁻¹(x)` is `(7, 5)` 📍.