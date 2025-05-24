---
title: Functions
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 9
---

Based on the sources and our conversation history, functions are a fundamental concept in mathematics, closely related to sets and relations.

At their core, **functions are a special type of relation**. While a relation is any collection of ordered pairs (or n-tuples) describing connections between elements of sets, a function is a rule that specifically tells us how to convert an input into an output.

Formally, a function, denoted as f : X → Y, from a set X (the **domain** or input set) to a set Y (the **codomain** or set of possible output values), must satisfy two key conditions for every element in the domain:
1.  The function must be **defined at every possible value in the domain**. For every x in the domain X, there must be a corresponding output value f(x).
2.  There must be **exactly one output value** f(x) for each input x. This means that in the set of ordered pairs representing the function, there cannot be two pairs with the same first element but different second elements.

The set of values that the function actually produces as output, given the inputs from the domain, is called the **range**. The range is always a subset of the codomain, and in some cases, the range and codomain can be the same.

**Representing Functions:**

Just like relations, functions can be represented as a set of ordered pairs (x, f(x)). Plotting these pairs on a grid or plane (such as the XY-plane using a rectangular coordinate system) gives the **graph of the function**. Drawing the graph of a function is essentially plotting the relation that corresponds to the function. The **Vertical Line Test** can be used to check if a given graph of a relation actually represents a function; if any vertical line intersects the graph at more than one point, it is not a function.

Functions can also be represented in tables, particularly in computing and data science, where a table can sometimes be seen as a relation where, given a "key" (input), there is a unique "value" (output).

**Types and Properties of Functions:**

The sources discuss various types of functions, including:
*   **Linear functions** (e.g., f(x) = ax + b or mx + c).
*   **Quadratic functions** (e.g., f(x) = ax² + bx + c), whose graphs are always parabolas.
*   General **Polynomial functions**.
*   **Exponential functions** (f(x) = aˣ, a > 0, a ≠ 1).
*   **Logarithmic functions** (f(x) = logₐ x), which are the inverse of exponential functions.
*   **Trigonometric functions** (sin x, cos x, tan x, etc.).
*   **Step functions** (like Floor ⌊x⌋ and Ceiling ⌈x⌉).
*   **Absolute value function** (|x|).

Important properties of functions include:
*   **Boundedness**: A function is bounded if its values are always between some minimum (m) and maximum (M) values.
*   **Injectivity** (or **one-to-one**): Different inputs always produce different outputs. If x₁ ≠ x₂, then f(x₁) ≠ f(x₂). The **Horizontal Line Test** can check for injectivity; if any horizontal line intersects the graph at most once, the function is one-to-one. Increasing or decreasing functions are one-to-one.
*   **Surjectivity** (or **onto**): The range of the function is equal to its codomain. This means that for every value y in the codomain, there is at least one input x in the domain such that f(x) = y.
*   **Bijectivity**: A function is bijective if it is both injective (one-to-one) and surjective (onto). This indicates a one-to-one correspondence between the domain and the codomain.

**Operations and Related Concepts:**

Functions can be combined using basic arithmetic operations like addition, subtraction, multiplication, and division. Another significant operation is **function composition**, where the output of one function becomes the input of another. The composition of functions f and g, denoted (g ∘ f)(x), is defined as g(f(x)), provided the range of f is a subset of the domain of g. There are specific rules for determining the domain of a composite function.

A function is said to have an **inverse function**, denoted f⁻¹, if and only if it is one-to-one (injective). The inverse function essentially reverses the mapping of the original function, such that (f⁻¹ ∘ f)(x) = x and (f ∘ f⁻¹)(x) = x. Graphically, the graph of an inverse function is symmetric to the graph of the original function about the line y = x. It's important to note that f⁻¹ is distinct from 1/f.

Functions play a central role in various areas, including **calculus**, where they are fundamental to concepts like limits, continuity, differentiation, and integration (anti-derivatives and areas under curves). Understanding functions is crucial for working with data in tables, as relations and their operations (like the Join) are highly relevant in computing and data science.