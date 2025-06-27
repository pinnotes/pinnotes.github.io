---
title: Relations
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 8
---

Hello there! Let's dive into the fascinating world of relations, building upon our previous understanding of sets.

---

### 📝 Understanding Relations: Your Connection Guide!

#### What is a Relation? 🤝
A **relation** is fundamentally a **collection of ordered pairs**. Think of it as a specific way to connect elements from two (or more) sets. More formally, a relation is a **subset of a Cartesian product**.

*   **Cartesian Product as a Foundation** 📦: Before defining a relation, you first establish a **Cartesian product** (e.g., `X × Y`). This product includes *all possible ordered pairs* where the first element comes from the first set (`X`) and the second element comes from the second set (`Y`).
    *   **Example**: If `X = {cat, dog}` and `Y = {meow, bark}`, then `X × Y = {(cat, meow), (cat, bark), (dog, meow), (dog, bark)}`.
    *   **Order Matters!** 💡: Unlike elements in a set, the order of elements in an ordered pair within a relation is crucial. `(a, b)` is not the same as `(b, a)`.
    *   **Extending to more sets**: The Cartesian product can also extend to multiple sets, forming "n-tuples" (e.g., `X × Y × Z` creates triples).

*   **Defining a Relation** 🎯: Once you have a Cartesian product, a relation is formed by applying a **condition or property** that "filters out" only the pairs (or n-tuples) of interest.
    *   **Example**: From `X × Y` above, we might define a relation `R` where the animal makes the sound: `R = {(cat, meow), (dog, bark)}`. This `R` is a subset of `X × Y`.

#### How to Express a Relation ✍️
You can express a relation in a few ways:
*   **Listing Ordered Pairs**: For finite relations, you can explicitly list all the pairs, enclosed in curly braces.
    *   **Example**: `R = {(1, 2), (3, 6), (4, 8)}`.
*   **Set Comprehension**: For infinite relations, or to define a relation based on a specific rule, **set comprehension** is used. This notation typically involves a generator (the Cartesian product) and a filter (the condition).
    *   **Syntax**: `{ (x, y) ∈ X × Y | condition(x, y) }`
    *   **Example: Divisibility Relation on Natural Numbers**: `D = {(d, n) ∈ N × N | d divides n}`.
        *   This means `D` would include pairs like `(2, 6)` (because 2 divides 6) or `(7, 63)` (because 7 divides 63).
*   **Notation for related elements**: If `(a, b)` is an element of relation `R`, we can write `(a, b) ∈ R` or, sometimes, `a R b` to mean 'a is related to b by R'.

#### Properties of Relations 💡
Relations can have specific properties that describe their characteristics. These properties are often defined for relations *on a single set* (i.e., `R ⊆ X × X`).

1.  **Reflexive Relation** 🔄: A relation `R` on a set `S` is reflexive if **every element in S is related to itself**. That means for all `x ∈ S`, the pair `(x, x)` must be in `R`.
    *   **Example**: The "is equal to" relation on integers (e.g., `5 = 5`).
    *   **Example**: The "divides" relation is reflexive for non-zero numbers (e.g., `a` divides `a` for any non-zero `a`).

2.  **Symmetric Relation** 👯: A relation `R` on a set `S` is symmetric if **whenever `x` is related to `y`, `y` is also related to `x`**. That means for every pair `(x, y) ∈ R`, the pair `(y, x)` must also be in `R`.
    *   **Example**: The "is a sibling of" relation (if A is a sibling of B, then B is a sibling of A).
    *   **Example**: The "has a greatest common divisor of 1" relation on integers (`gcd(a, b) = 1` implies `gcd(b, a) = 1`).
    *   **Example**: Distances between cities are symmetric.

3.  **Transitive Relation** ➡️: A relation `R` on a set `S` is transitive if **whenever `x` is related to `y` and `y` is related to `z`, then `x` must be related to `z`**. That means for every pair `(x, y) ∈ R` and `(y, z) ∈ R`, the pair `(x, z)` must also be in `R`.
    *   **Example**: The "is less than" relation (`<`) on numbers (if `a < b` and `b < c`, then `a < c`).
    *   **Example**: The "divides" relation (if 2 divides 6 and 6 divides 36, then 2 divides 36).

4.  **Anti-symmetric Relation** 🚫: A relation `R` on a set `S` is anti-symmetric if **whenever `x` is related to `y` and `y` is related to `x`, then `x` and `y` must be the same element**. In other words, if `(x, y) ∈ R` and `x ≠ y`, then `(y, x)` must *not* be in `R`.
    *   **Example**: The "is strictly less than" relation (`<`) (if `a < b`, then `b` cannot be `< a`).
    *   **Example**: The "is the mother of" relation (if P is the mother of C, C cannot be the mother of P).

#### Equivalence Relations: A Special Type ✅
An **equivalence relation** is a relation that is **reflexive, symmetric, and transitive**.
*   Equivalence relations are crucial because they **partition a set into disjoint groups** called **equivalence classes**. All elements within a single equivalence class are equivalent to each other under the relation, and elements from different classes are not equivalent.
    *   **Example**: The "same remainder modulo 5" relation on integers. This relation divides integers into five distinct groups based on their remainder when divided by 5 (e.g., {..., -3, 2, 7, ...} for remainder 2).

#### Relations and Their Real-World Representation 🗂️
*   **Functions as Special Relations**: All functions are relations, but not all relations are functions. A function is a specific type of relation where each input from the domain is mapped to **exactly one output** in the codomain.
    *   For example, `y = x²` can be seen as a relation `R = {(x, y) | y = x²}`.
*   **Tables as Relations**: In computing and data science, **tables are essentially relations**. Each row in a table can be seen as an n-tuple, and the table itself represents a collection of these tuples that satisfy certain criteria (e.g., flight routes, student records). Operations like "Join" combine data from multiple tables (relations) based on common values.

---

### 🏋️ Practice Questions

1.  **Relation Identification** 🧐
    Let `A = {1, 2, 3}`. Define a relation `R` on `A` as `(x, y) ∈ R` if `x + y` is an even number.
    *   a) List all the ordered pairs in `R`.
    *   b) What is the cardinality of `R`?
    *   c) Is `R` reflexive? (Yes/No)
    *   d) Is `R` symmetric? (Yes/No)
    *   e) Is `R` transitive? (Yes/No)

2.  **Real-World Relations** 🌍
    Consider a set of people `P = {Alice, Bob, Charlie}`.
    Define a relation `F` on `P` where `(x, y) ∈ F` if 'x is friends with y'.
    Given that:
    *   Alice is friends with Bob.
    *   Bob is friends with Alice.
    *   Bob is friends with Charlie.
    *   Charlie is friends with Bob.
    *   No one is friends with themselves in this context (e.g., (Alice, Alice) ∉ F).
    *   a) Is `F` reflexive? (Yes/No)
    *   b) Is `F` symmetric? (Yes/No)
    *   c) Is `F` transitive? (Yes/No)

3.  **Set Comprehension**: Write the relation `R` that represents all ordered pairs `(x, y)` from `N × N` (natural numbers including 0) such that `y` is the square of `x`.

---

### 💡 Answers to Practice Questions

1.  **Relation Identification**
    *   a) To list the ordered pairs `(x, y)` in `R` where `x, y ∈ {1, 2, 3}` and `x + y` is even:
        *   If `x = 1`: `1 + 1 = 2` (even), `1 + 2 = 3` (odd), `1 + 3 = 4` (even) -> `(1, 1), (1, 3)`
        *   If `x = 2`: `2 + 1 = 3` (odd), `2 + 2 = 4` (even), `2 + 3 = 5` (odd) -> `(2, 2)`
        *   If `x = 3`: `3 + 1 = 4` (even), `3 + 2 = 5` (odd), `3 + 3 = 6` (even) -> `(3, 1), (3, 3)`
        *   So, `R = {(1, 1), (1, 3), (2, 2), (3, 1), (3, 3)}`.
    *   b) The cardinality of `R` is **5**.
    *   c) Yes, `R` is reflexive. For every element `x ∈ {1, 2, 3}`, `(x, x) ∈ R` (i.e., (1,1), (2,2), (3,3) are all in R).
    *   d) Yes, `R` is symmetric. If `(1, 3) ∈ R`, then `(3, 1) ∈ R`. All other pairs `(x, x)` are trivially symmetric.
    *   e) Yes, `R` is transitive.
        *   Consider `(1, 1) ∈ R` and `(1, 3) ∈ R`, then `(1, 3) ∈ R`.
        *   Consider `(1, 3) ∈ R` and `(3, 1) ∈ R`, then `(1, 1) ∈ R`.
        *   Consider `(3, 1) ∈ R` and `(1, 3) ∈ R`, then `(3, 3) ∈ R`.
        *   All pairs satisfy the condition.

2.  **Real-World Relations**
    The relation `F` can be listed as: `F = {(Alice, Bob), (Bob, Alice), (Bob, Charlie), (Charlie, Bob)}`.
    *   a) No, `F` is not reflexive. The problem statement explicitly says "No one is friends with themselves". For `F` to be reflexive, `(Alice, Alice)`, `(Bob, Bob)`, and `(Charlie, Charlie)` would all need to be in `F`.
    *   b) Yes, `F` is symmetric. For every `(x, y) ∈ F`, `(y, x)` is also in `F`. (e.g., (Alice, Bob) and (Bob, Alice) are both present; (Bob, Charlie) and (Charlie, Bob) are both present).
    *   c) No, `F` is not transitive.
        *   We have `(Alice, Bob) ∈ F` and `(Bob, Charlie) ∈ F`. For `F` to be transitive, `(Alice, Charlie)` would also need to be in `F`. However, it is not listed.

3.  **Set Comprehension**
    `R = {(x, y) ∈ N × N | y = x²}`.
    *   This relation would include pairs such as `(0, 0)`, `(1, 1)`, `(2, 4)`, `(3, 9)`, `(4, 16)`, and so on.