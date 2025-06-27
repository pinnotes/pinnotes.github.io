---
title: Functions
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 9
---

Here's an explanation of functions, designed for ease of understanding with emojis, followed by practice questions and their answers in a notes format.

---

### 📝 Understanding Functions: Your Input-Output Machine!

#### What is a Function? ⚙️
A **function** is a **special kind of relation**. While a relation is simply a collection of ordered pairs, a function is a rule that takes an **input** from one set and **maps it to exactly one output** in another set.

*   Think of it like a vending machine 🥤:
    *   You put in a specific coin (your **input** 🪙).
    *   The machine gives you a specific drink (your **output** 🥤).
    *   Crucially, for the *same coin*, you always get the *same drink*. You can't put in £1 and sometimes get a cola, and other times a lemonade. That's the "exactly one output" rule! 📏.

#### Key Components of a Function 🧩

When we define a function, we typically specify three important sets:

1.  **Domain (Input Set)** ➡️: This is the **set of all possible input values** (the 'ingredients' you can put into your machine).
    *   **Example**: For a square root function `f(x) = √x`, if we insist on real number outputs, the domain is all non-negative real numbers, because you can't take the square root of a negative real number and get a real result.

2.  **Codomain (Possible Output Set)** 📦: This is the **set of all possible values that the function *could* produce**. It's a broader set that contains all the actual outputs.
    *   **Example**: For `f(x) = x²`, the codomain might be all real numbers (ℝ).

3.  **Range (Actual Output Set)** 🎯: This is a **subset of the codomain** that consists of **all the actual values the function *does* produce** for the given domain inputs.
    *   **Example**: For `f(x) = x²`, even though the codomain is all real numbers, the range is only non-negative real numbers, because squaring any real number (positive or negative) results in a non-negative number.

*Notation*: A function `f` from a domain `X` to a codomain `Y` is often written as `f: X → Y`.

#### Functions as Special Relations 🤝
As discussed, **all functions are relations, but not all relations are functions**.
*   A function `f` can be associated with a relation `R_f`, which is the set of all ordered pairs `(x, y)` where `y = f(x)`.
*   This means `R_f` is a **subset of the Cartesian product** of the function's domain and codomain (or range).
*   The key distinction: for every input `x` in the domain, there must be **exactly one** `y` such that `(x, y)` is in the relation `R_f`.

#### Graphical Representation 📈
When you **plot a function's graph**, you are essentially plotting the points of its associated relation.
*   Each point `(x, y)` on the graph means that `y` is the output when `x` is the input (i.e., `y = f(x)`).
*   For example, the graph of `y = x²` is a parabola.

#### Properties / Types of Functions 💡
Functions can have various properties that describe their mapping behavior:

1.  **Injective (One-to-One)** ↔️:
    *   **Concept**: Different inputs always produce different outputs.
    *   If `x₁ ≠ x₂`, then `f(x₁) ≠ f(x₂)`.
    *   **Example**: A linear function `f(x) = mx + c` (where `m ≠ 0`) is injective because each `x` maps to a unique `y`. The exponential function `f(x) = a^x` (where `a > 0, a ≠ 1`) is also one-to-one.
    *   **Horizontal Line Test**: If any horizontal line intersects the function's graph at most once, it is injective.

2.  **Surjective (Onto)** ➡️🎁:
    *   **Concept**: Every possible value in the codomain is an actual output (i.e., the range is equal to the codomain).
    *   For every `y` in the codomain, there is at least one `x` in the domain such that `f(x) = y`.
    *   **Example**: A linear function `f(x) = mx + c` (where `m ≠ 0`) mapping from real numbers to real numbers is surjective, as it can take all real values. A quadratic function like `f(x) = x²` with codomain ℝ is *not* surjective, as it cannot produce negative outputs.

3.  **Bijective (One-to-One Correspondence)** 💖:
    *   **Concept**: A function is bijective if it is **both injective (one-to-one) and surjective (onto)**.
    *   This means there's a perfect pairing: every input maps to a distinct output, and every output comes from a unique input.
    *   **Importance**: Bijective functions are fundamental for **counting** (determining the cardinality of sets) and defining **inverse functions**.

#### Common Types of Functions 📚
You'll frequently encounter these types of functions:
*   **Linear Function**: `f(x) = ax + b` (represents a straight line).
*   **Quadratic Function**: `f(x) = ax² + bx + c` (represents a parabola).
*   **Polynomial Function**: A generalization of linear and quadratic functions, involving sums of terms with non-negative integer powers of `x`.
*   **Exponential Function**: `f(x) = a^x`.
*   **Logarithmic Function**: The inverse of an exponential function.
*   **Absolute Value Function**: `f(x) = |x|`.
*   **Step Functions**: Such as the floor `⌊x⌋` and ceiling `⌈x⌉` functions.

---

### 🏋️ Practice Questions

1.  **Function Definition** 📝
    Let `A = {dog, cat, bird}` and `B = {bark, meow, chirp, quack}`.
    Consider the relation `R = {(dog, bark), (cat, meow), (bird, chirp)}`.
    *   a) Is `R` a function from `A` to `B`? (Yes/No) Explain your reasoning.
    *   b) What is the domain of `R` (as a function)?
    *   c) What is the codomain of `R` (as a function), given `B`?
    *   d) What is the range of `R` (as a function)?

2.  **Function Properties** 💡
    For the function `f(x) = 2x + 5` (where the domain and codomain are all real numbers, ℝ).
    *   a) Is `f(x)` injective (one-to-one)? (Yes/No) Explain why.
    *   b) Is `f(x)` surjective (onto)? (Yes/No) Explain why.
    *   c) Is `f(x)` bijective? (Yes/No)

3.  **Real-World Application & Components** 🌍
    A company calculates an employee's bonus `B` based on their sales `S` (in thousands of £) using the formula `B(S) = 0.05S` for `S ≥ 0`. The company states that the bonus amount will always be a non-negative real number.
    *   a) What is the domain of the function `B(S)`?
    *   b) What is the codomain of the function `B(S)`?
    *   c) What is the range of the function `B(S)`?

---

### 💡 Answers to Practice Questions

1.  **Function Definition**
    *   a) **Yes**, `R` is a function from `A` to `B`.
        *   **Reasoning**: For every element in set `A` (the domain), there is **exactly one** corresponding element in set `B` (the codomain).
            *   `dog` maps to `bark` (only one output).
            *   `cat` maps to `meow` (only one output).
            *   `bird` maps to `chirp` (only one output).
    *   b) The **domain** of `R` is `{dog, cat, bird}`.
    *   c) The **codomain** of `R` is `{bark, meow, chirp, quack}`.
    *   d) The **range** of `R` is `{bark, meow, chirp}`. (Note: `quack` is in the codomain but not in the range because no input maps to it).

2.  **Function Properties**
    *   a) **Yes**, `f(x)` is injective (one-to-one).
        *   **Explanation**: If you take any two different input values for `x` (say `x₁` and `x₂`), you will always get two different output values for `f(x)` (i.e., `f(x₁) ≠ f(x₂)` if `x₁ ≠ x₂`). For a linear function with a non-zero slope, each `x` value will map to a unique `y` value.
    *   b) **Yes**, `f(x)` is surjective (onto).
        *   **Explanation**: The range of `f(x) = 2x + 5` is all real numbers, which matches its codomain (ℝ). This means that for any real number `y` you choose, you can always find a real number `x` such that `f(x) = y`. (You can solve `y = 2x + 5` for `x`: `x = (y - 5) / 2`).
    *   c) **Yes**, `f(x)` is bijective.
        *   **Explanation**: Since `f(x)` is both injective and surjective, it is bijective. This means there is a one-to-one correspondence between the domain and codomain.

3.  **Real-World Application & Components**
    *   a) The **domain** of the function `B(S)` is `[0, ∞)`. (Sales `S` must be non-negative, as specified by `S ≥ 0`).
    *   b) The **codomain** of the function `B(S)` is `[0, ∞)`. (The company states the bonus will always be a non-negative real number).
    *   c) The **range** of the function `B(S)` is `[0, ∞)`.
        *   **Explanation**: For any non-negative sales `S`, the bonus `B(S) = 0.05S` will always be a non-negative number. As `S` can be any non-negative real number, `0.05S` can also take any non-negative real value, from 0 upwards. This matches the codomain, indicating the function is also surjective in this context.