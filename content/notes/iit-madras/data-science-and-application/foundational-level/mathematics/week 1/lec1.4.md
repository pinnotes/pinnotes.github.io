---
title: Set theory 
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 1
---

Here's an explanation of set theory, presented in a notes format with emojis for easy understanding:

### Set Theory 📚

*   **What is a Set?**
    *   At its most basic level, a **set is a collection of items**.
    *   These items are called **elements** or **members**.
    *   Sets can be **finite** (e.g., days of the week 🗓️, months in a year) or **infinite** (e.g., the set of integers 🔢).

*   **Key Characteristics of Sets** ✨
    *   **Order is not important** 🔄: Listing elements in a different sequence does not change the set (e.g., {Kohli, Dhoni} is the same as {Dhoni, Kohli}).
    *   **Duplicates do not matter** 🚫: Including the same element multiple times does not change the set (e.g., {1, 2, 2, 3} is the same as {1, 2, 3}).

*   **Cardinality (Size of a Set)** 📏
    *   The **cardinality of a set** is the number of items it contains.
    *   For **finite sets**, you can simply count the elements.

*   **Important Sets of Numbers** 🔢
    *   In mathematics, we commonly deal with various infinite sets of numbers:
        *   **Natural Numbers (N)**: {0, 1, 2, 3, ...} (often includes 0 in this context).
        *   **Integers (Z)**: {..., -2, -1, 0, 1, 2, ...} (natural numbers extended with negative numbers).
        *   **Rational Numbers (Q)**: Numbers that can be written as a fraction p/q where p and q are integers (e.g., 1/2, 7/1).
        *   **Real Numbers (R)**: All rational numbers plus irrational numbers (like √2, π).

*   **Relationships Between Sets** 🤝
    *   **Element of (∈)**: Used to show that an item belongs to a set (e.g., 5 ∈ Z means 5 is an integer).
    *   **Not an Element of (∉)**: Indicates an item does not belong to a set (e.g., √2 ∉ Q means √2 is not a rational number).
    *   **Subset (⊆)**: A set X is a **subset** of set Y if every element in X is also an element in Y (e.g., N ⊆ Z, meaning all natural numbers are also integers).
    *   **Proper Subset (⊂)**: X is a **proper subset** of Y if X is a subset of Y, but X is not equal to Y (meaning Y contains at least one element not in X).
    *   **Equality of Sets (=)**: Two sets X and Y are **equal** if and only if they contain exactly the same elements. This can be proven by showing X ⊆ Y and Y ⊆ X.
    *   **Venn Diagrams** 🖼️: Useful pictorial representations of sets and their relationships, showing how sets are included in others or how they overlap.

*   **Special Sets** 🎁
    *   **Empty Set (∅ or {})**: The set that contains **no elements**.
        *   It is a **subset of every set**.
    *   **Power Set (𝒫(X))**: The set of **all possible subsets** of a given set X.
        *   For a finite set with *n* elements, its power set will have **2^n** subsets.

*   **Set Comprehension (Building Subsets)** 🛠️
    *   This is a notation used to **define subsets**, especially for infinite sets where listing all elements is impossible.
    *   It generally involves three parts:
        *   **Generator**: Specifies the existing set from which elements are taken (e.g., `x ∈ Z` means 'for every x in the set of integers').
        *   **Filter**: A condition that elements must satisfy to be included in the new set (e.g., `x mod 2 = 0` means 'x must be even').
        *   **Transformer**: An operation performed on the filtered elements to produce the new set's elements (e.g., `x²` means 'square the number'). Sometimes the transformer is just to keep the element as it is.
    *   Example: `{x² | x ∈ Z, x mod 2 = 0}` means "the set of squares of all even integers".

*   **Operations on Sets** ➕➖✖️➗
    *   **Union (X ∪ Y)**: Combines all elements from two sets X and Y into a single set, **removing any duplicates**.
    *   **Intersection (X ∩ Y)**: Contains **only the elements common to both** sets X and Y.
    *   **Set Difference (X \ Y or X - Y)**: Contains elements that are in set X **but not in set Y**. The order of sets matters for difference.
    *   **Complement (Xᶜ or X')**: Consists of all elements **not in set X**.
        *   It requires a **defined "universe"** or overall set from which elements are drawn. Without a universe, "complement" is ambiguous (e.g., "numbers that are not prime" needs to specify if it means non-prime natural numbers, integers, or reals).

*   **Foundation of Mathematics** 🏛️
    *   Set theory was developed to be a **foundation for all of mathematics**.
    *   However, certain "collections" like "the set of all sets" lead to **paradoxes** (e.g., Russell's Paradox), indicating that not every collection can logically be considered a set. This highlights the need for careful definitions in set theory.
    *   Sets are fundamental for understanding and defining various mathematical concepts, including different types of numbers and relations.