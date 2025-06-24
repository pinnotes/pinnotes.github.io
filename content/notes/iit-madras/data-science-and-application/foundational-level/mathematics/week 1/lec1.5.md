---
title: construction of subsets and set operation
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 5
---


Here's an explanation of how subsets are constructed and common set operations, presented in a notes format for easy understanding with emojis:

### Construction of Subsets (Set Comprehension) 🛠️

*   **What it is**
    *   Set comprehension is a **notation used to define subsets** from existing sets.
    *   It's especially useful for **infinite sets** where you can't just list all the elements explicitly. It provides a **precise and compact** way to describe a set.
    *   Think of it like a recipe 🧑‍🍳 for building a new set by selecting items from an existing one based on certain rules.

*   **The Three Main Parts** ✨
    Set comprehension generally involves three components:
    1.  **Generator (The Source)** 📦: This specifies the **existing set** from which elements are taken. You can only build new sets from old, existing ones.
        *   Example: `x ∈ Z` means "for every `x` in the set of integers (Z)".
    2.  **Filter (The Condition)** 🧪: This is a **condition** that elements from the generator must satisfy to be included in the new set. Elements that don't meet the condition are "filtered out".
        *   Example: `x mod 2 = 0` means "x must have a remainder of 0 when divided by 2," which means 'x must be even'.
        *   Filters can be written in many ways, as long as they are clear and unambiguous.
    3.  **Transformer (The Transformation)** 🚀: This is an **operation performed on the filtered elements** to produce the actual elements of the new set. Sometimes, the transformation is just to keep the element as it is (called an identity transformation).
        *   Example: `x²` means "square the number".

*   **Putting it Together (Examples)** 🧩
    *   **Set of squares of all even integers:** `{x² | x ∈ Z, x mod 2 = 0}`
        *   Generator: `x ∈ Z` (all integers).
        *   Filter: `x mod 2 = 0` (only even integers).
        *   Transformer: `x²` (square the even integers).
        *   Result: {..., 16, 4, 0, 4, 16, ...} (duplicates like 4 from -2² and 2² are removed).
    *   **Rational numbers in reduced form:** `{p/q | p/q ∈ Q, gcd(p, q) = 1}`
        *   Generator: `p/q ∈ Q` (all rational numbers).
        *   Filter: `gcd(p, q) = 1` (numerator and denominator have no common divisors other than 1).
        *   Transformer: Identity (keep `p/q` as is).
    *   **Interval of real numbers:** `` or `(0, 1]`
        *   Example: `{r | r ∈ R, 0 ≤ r ≤ 1}` (closed interval, includes endpoints).
        *   Example: `{r | r ∈ R, 0 < r ≤ 1}` (left-open interval, 0 excluded, 1 included).

### Set Operations ➕➖✖️➗

Set operations allow us to combine or compare existing sets to create new ones. **Venn diagrams** 🖼️ are very useful for visualising these operations and relationships between sets.

*   **1. Union (X ∪ Y)** 🤝
    *   The union of two sets combines **all elements from both sets** into a single new set.
    *   **Duplicates are not included**; each unique element appears only once.
    *   Symbol: **∪**.
    *   Example: If `X = {a, b, c}` and `Y = {c, d, e}`, then `X ∪ Y = {a, b, c, d, e}`.
    *   Cardinality of union will generally be less than the sum of cardinalities if there are common elements.
    *   Venn Diagram: The entire shaded area covering both circles and their overlap represents the union.

*   **2. Intersection (X ∩ Y)** 🔗
    *   The intersection of two sets contains **only the elements that are common to both** sets.
    *   Symbol: **∩** (an upside-down union sign).
    *   Example: If `X = {a, b, c, d}` and `Y = {a, d, e, f}`, then `X ∩ Y = {a, d}`.
    *   Venn Diagram: The overlapping region (the middle part of two intersecting circles) represents the intersection.

*   **3. Set Difference (X \ Y or X - Y)** 🚫
    *   The set difference contains elements that are present in the **first set (X) but NOT in the second set (Y)**.
    *   **Order matters** for set difference (unlike union and intersection). `X - Y` is generally not the same as `Y - X`.
    *   Symbols: **\** (backslash) or **-** (minus sign).
    *   Example: If `X = {a, b, c, d}` and `Y = {a, d, e, f}`, then `X - Y = {b, c}`.
    *   Venn Diagram: The part of the first circle that does not overlap with the second circle represents the difference.

*   **4. Complement (Xᶜ or X')** 🌌
    *   The complement of a set X refers to **all elements that are NOT in X**.
    *   **Crucially, the concept of a "universe" (or an overall set) must be explicitly defined** when talking about a complement. Without a defined universe, "complement" is ambiguous.
    *   Example: The complement of prime numbers within the **universe of natural numbers** is the set of composite numbers (numbers with more than two factors, excluding 1). However, if the universe were all real numbers, the complement of primes would include irrational numbers like pi (π) or square root of 2 (√2), which is not usually what is intended.
    *   Venn Diagram: The area outside a set X, but still within the defined universe, represents its complement.