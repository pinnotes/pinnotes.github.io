---
title: natural numbers and the operations
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 7
---

Based on the sources and our conversation history, a **set** is fundamentally understood as a **collection of items**. These items are called **members** or **elements** of the set.

A crucial aspect of sets is that the **order in which the members are listed does not matter**, and **duplicate members do not change the set**. The **cardinality** of a set is the **number of items or elements it contains**. For finite sets, this is a straightforward count.

Sets can be **finite** or **infinite**. For finite sets, you can often describe them by **listing out the members explicitly** within **curly braces `{}`**, separating items by commas.

Here are several examples of sets mentioned in the sources:

*   **Finite Sets**
    *   The set of **days of the week**: {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday}. This set has 7 members.
    *   The set of **factors of 24**: {1, 2, 3, 4, 6, 8, 12, 24}. This set has 8 factors.
    *   The set of **prime numbers below 15**: {2, 3, 5, 7, 11, 13}.
    *   A set of **cricketers**: {Kohli, Dhoni, Pujara}. Reordering this set, like {Pujara, Kohli, Dhoni}, results in the same set. Accidentally listing a member twice, e.g., adding Kohli again, also does not change the set.
    *   A set of **objects appearing in a painting** like Picasso's Three Musicians, which could include people, musical instruments, chairs, tables, animals, and a dog, demonstrating that members do not need uniformity of type.
    *   The set of natural numbers less than 10: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}.
    *   The set of all months in a year.
    *   The **empty set**, denoted `∅` or `{}`. This set has **no elements**. It is the equivalent of 0 in set theory and is a **subset of every set**.
    *   A set containing the empty set: `{∅}`. This is a **set with one element**, namely the empty set.

*   **Infinite Sets**
    *   The set of **natural numbers**, denoted `N`: {0, 1, 2, 3, 4, 5, ...}. It starts at 0 and goes forward.
    *   The set of **integers**, denoted `Z`: {..., -4, -3, -2, -1, 0, 1, 2, 3, 4, ...}. It extends natural numbers with negative numbers and extends to infinity in both directions.
    *   The set of **rational numbers**, denoted `Q`. These are numbers of the form p/q where p and q are integers, extending the integers. The same rational number can be written in many ways, unlike integers.
    *   The set of **real numbers**, denoted `R`. Real numbers include both rational numbers and irrational numbers like √2, π, and e. Real numbers extend rational numbers.
    *   The set of all **even natural numbers**: {0, 2, 4, 6, 8, 10, ...}.
    *   The set of **prime numbers**. The primes are a subset of the natural numbers.

For infinite sets, explicitly listing all elements is not possible. A **formal notation** used to define subsets, especially of infinite sets, is **set comprehension**. This method starts with an **existing set (generator)**, applies a **condition (filter)** to decide which elements to keep, and can optionally **transform** the filtered elements to form the new set.

Examples of sets constructed using set comprehension include:
*   The set of **even integers**: `{x | x ∈ Z, x mod 2 is 0}`. This collects all integers `x` such that the remainder when `x` is divided by 2 is 0.
*   The set of **perfect squares**: `{x | x ∈ Z, x ≥ 0, x = m*m for some m in Z}`. Another way to define perfect squares is `{m*m | m ∈ N}` by generating natural numbers and transforming them by squaring.
*   The set of **rational numbers in reduced form**: `{p/q | p, q ∈ Z, q ≠ 0, gcd(p,q) = 1}`. Here, p/q is taken such that the greatest common divisor of the numerator and denominator is 1.
*   **Intervals of real numbers**. For instance, the **closed interval between 0 and 1** is defined as `{r | r ∈ R, 0 ≤ r ≤ 1}`. An **open interval** excludes the endpoints, and a **left or right open interval** includes one endpoint but not the other. These are subsets of the reals defined via set comprehension.
*   The set of **squares of even integers**: `{x² | x ∈ Z, x mod 2 is 0}`. This involves generating integers, filtering for even numbers, and then transforming (squaring) them.
*   The set of **cubes of the first 5 natural numbers**: `{n³ | n ∈ {0, 1, 2, 3, 4}}`.
*   The set of the **first 500 natural numbers**: `{n | n ∈ N, n < 500}`.

Sets can also be the **elements of other sets**. A key example is the **Powerset** of a set, which is the **set of all possible subsets** of that set. For a finite set with `n` elements, the powerset has `2^n` subsets. For a set {a, b}, its powerset is {{}, {a}, {b}, {a, b}}, which contains 2²=4 subsets. The empty set's powerset is a set containing just the empty set: `{∅}`. This is a set with one element, which is the empty set.

While the notion of a collection being a set seems intuitive, care must be taken. Russell's Paradox demonstrates that the "collection of all sets" leads to contradictions, highlighting that **not every collection is a set**. To avoid such paradoxes, it is important to **start with known sets** (like number sets) and **build new sets from existing ones** using defined operations like set comprehension, Cartesian product, or union. Collections that are not necessarily sets are sometimes referred to as classes.

Beyond subsets constructed by comprehension, sets are combined or manipulated using **set operations**. These operations are often visualized using **Venn diagrams**, which use overlapping areas to represent sets and their relationships.

Common set operations include:
*   **Union (∪)**: Combines elements from two sets.
*   **Intersection (∩)**: Contains only elements common to both sets.
*   **Set Difference (∖ or -)**: Contains elements in the first set but not the second. Example: Real Numbers ∖ Rational Numbers gives the set of irrational numbers. An example counting students who took physics but not biology is also given as a set difference.
*   **Complement**: Refers to everything else within a defined universe. The universe must be specified, otherwise, the complement is not well-defined. Example: The complement of prime numbers within the universe of natural numbers is the set of composite numbers (and 0 and 1).

Another method for constructing sets, especially for relations, is the **Cartesian product (×)**. The Cartesian product of sets X and Y is the set of all ordered pairs (x, y) where x ∈ X and y ∈ Y. The order matters in these pairs. Relations are formally defined as **subsets of a Cartesian product**. Set comprehension can be used to filter pairs from a Cartesian product to define a specific relation. An example is defining a relation where the second element is the square of the first from A × B.