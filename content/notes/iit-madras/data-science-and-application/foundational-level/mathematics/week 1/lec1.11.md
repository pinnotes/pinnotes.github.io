---
title: FUnctions - Examples 
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 11
---


Based on the sources and our conversation history, functions are described as a **special type of relation** where each element in the input set is mapped to **exactly one** element in the output set. Abstractly, a function can be thought of as a machine that produces an output for a given input.

Here are several examples of functions found in the sources:

*   **Functions on Numbers:**
    *   **The Square Function:** This is a frequently used example. Given an input `x`, it returns `x²`. It can be written as `f(x) = x²`. The domain and codomain are often considered the set of real numbers (R). The range is the set of non-negative real numbers, as the output of squaring any real number is always positive or zero. The graph of this function is a parabola.
    *   **Linear Functions:** These are functions of the form `f(x) = ax + b` or `mx + c`, where `a` (or `m`) and `b` (or `c`) are real numbers and `a ≠ 0`. They define a straight line when graphed. A specific example given is `3.5x + 5.7`. Another linear function example is `f(x) = 7x + 2` and `f(x) = x`.
    *   **Quadratic Functions:** These are functions of the form `f(x) = ax² + bx + c`, where `a ≠ 0`, and `a, b, c` are real numbers. The graph of any quadratic function is always a parabola. An example of a shifted parabola is `5x² + 3`.
    *   **Polynomial Functions:** A general polynomial function of degree `n` is described as `f(x) = anxⁿ + an-1xⁿ⁻¹ + ... + a₀x⁰`, where `an ≠ 0` and `n` is a natural number. They consist of mathematical terms added together, involving only addition, subtraction, multiplication, and natural exponents of variables. An example given is `f(x) = x³ + 5`.
    *   **Exponential Functions:** These are of the form `f(x) = aˣ`, where `a > 0` and `a ≠ 1`. The natural exponential function, `f(x) = eˣ`, is a specific example where `e > 1`. Other examples include `f(x) = 2ˣ` and `f(x) = (1/2)ˣ`.
    *   **Logarithmic Functions:** These are of the form `f(x) = logₐ(x)`, where `a > 0` and `a ≠ 1`. They are the inverse of exponential functions. The natural logarithmic function is `f(x) = loge x = ln x`, and the common logarithmic function is `f(x) = log₁₀ x = log x`. The domain is the set of all positive real numbers.
    *   **Square Root Function:** The function `f(x) = √x` is discussed. By convention, this usually refers to the **positive** square root. The domain depends on the allowed codomain; if the codomain is restricted to real numbers, the domain is `[0, ∞)`. If complex numbers are allowed as output, the domain can be all real numbers.
    *   **Absolute Value Function:** Denoted by `f(x) = |x|`, this function returns `x` if `x ≥ 0` and `-x` if `x < 0`. It is used as an example to check for injectivity (it is not one-to-one) and continuity at x=0 (it is continuous).
    *   **Step Functions:** Examples include the Floor function, `f(x) = ⌊x⌋` (greatest integer value less than or equal to `x`), and the Ceiling function, `f(x) = ⌈x⌉` (smallest integer value greater than or equal to `x`).
    *   **Trigonometric Functions:** Examples mentioned include `sin x`, `cos x`, and `tan x`. `f(x) = sin x` is also used to check for differentiability.
    *   **Constant Function:** `f(x) = c` is used to illustrate differentiation.
    *   **Rational Function:** An example of a real-valued function given is `f(x) = (5x+9)/(2x)`.
    *   **Function Defined on an Interval:** `f(x) = 2x - 1` defined on the interval `` is used in the context of calculating area under a curve.
    *   **Function used in SSE:** `f(x) = 2x - 2` is implicitly used in a sum squared error calculation example.
    *   **Bounded Function Example:** `f(x) = 1/(x² + 1)` is shown to be a bounded function with `0 ≤ f(x) ≤ 1`.

*   **Functions on Other Sets:**
    *   **The "Mother Of" Relation:** Defined on a set of people, this relation where `(m, c)` is a pair if `m` is the mother of `c`, is given as an example of a relation that is also a function because every person has exactly one mother.
    *   **Sequences:** A real sequence is defined as a function whose domain is the set of natural numbers (N) and whose codomain is the set of real numbers (R). Examples include `fn = (n + 5)/(n² + 2)` and `an = 1 - 1/n²`.
    *   **Allocation Relation (Functional):** While the teacher-course allocation mentioned initially is a general relation, if it were the case that each course was taught by exactly one teacher (and each teacher taught at least one course they were assigned), this could be a function from Courses to Teachers. (This specific functional interpretation isn't explicitly stated in the source, but it follows the definition of a function).
    *   **Table with a Key:** A table where a "key" (like a student roll number) uniquely identifies a "value" (like name, date of birth, etc.) is described as being like a function.

These examples demonstrate the versatility of functions in representing various types of relationships and are foundational to concepts explored later in the course, such as calculus.