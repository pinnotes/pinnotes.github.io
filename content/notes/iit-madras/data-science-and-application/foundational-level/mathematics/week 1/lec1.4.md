---
title: Set theory 
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 1
---

Based on the sources and our conversation history, we can explore the fundamental concepts of **set theory**.

Set theory is presented as a **foundation of mathematics**, with the idea originating from mathematicians like Georg Cantor and Richard Dedekind in the 1870s. The goal was to start with very basic things, such as the empty set, and build up all of mathematics, including the definition of numbers, from set theory.

At its basic level, a **set is a collection of items**. These items are called **elements** or **members** of the set. The sources note that while informally a set might seem to consist of items of a similar type (like numbers or days of the week), mathematically, a set can have **any kind of members, even a mixed membership**; there is no uniformity of type. For example, you could have a set of objects appearing in a painting or a set with a person's name, an animal, a physical object, a number, and the mathematical constant pi.

Important properties of sets mentioned include:
*   **Order is not important** in a set. Listing elements in a different sequence results in the same set.
*   **Duplicates in a set do not matter**. If a member appears more than once, it does not change the set.

Sets can be described informally by **listing out the members** within curly braces { } if the set is finite. Examples include the set of days of the week or the factors of a number like 24. However, infinite sets cannot be listed out explicitly. For such sets, or for making definitions more readable, **set comprehension** notation is used. Set comprehension allows the **construction of a subset from existing sets** by applying some conditions or filters. It typically has three main components: a **generator** (the existing set you start with), an optional **filter** (a condition elements must satisfy to be included), and potentially a **transformer** (which changes the form of the element).

The **cardinality of a set** is the **number of elements** in the set. For finite sets, you can simply count the items.

The sources frequently use **number sets** as examples of infinite sets. These include:
*   **Natural Numbers (N)**: {0, 1, 2, 3, 4, ...}.
*   **Integers (Z)**: Extend natural numbers with negative numbers {..., -3, -2, -1, 0, 1, 2, 3, ...}.
*   **Rational Numbers (Q)**: Numbers that can be written as p/q where p and q are integers.
*   **Real Numbers (R)**: Include all rational numbers and irrational numbers (like √2, √3, π, e).

These number sets demonstrate the concept of **subsets**. A set X is a **subset** of set Y if **every element in X is also an element in Y**. This is denoted by X ⊆ Y. The sources illustrate a clear subset hierarchy: N ⊆ Z, Z ⊆ Q, and Q ⊆ R. This relationship can be visualised using **Venn diagrams**, where one circle or oval representing a set is drawn inside another. A **proper subset** X ⊂ Y means X ⊆ Y but X ≠ Y.

The **empty set**, denoted by φ or a zero with a line across it, is a **set which has no elements**. It is a **subset of any set**. Also, **every set is a subset of itself**. Two sets X and Y are equal if and only if X is a subset of Y and Y is a subset of X.

Set operations discussed include:
*   **Union (∪)**: Combines elements from two sets into a single set, removing duplicates.
*   **Intersection (∩)**: Contains only the elements that are common to both sets.
*   **Set Difference (∖ or -)**: Contains elements that are in the first set but not in the second set. The order matters in set difference.
*   **Complement**: Everything else with respect to an overall universe or full set.

These operations can be visualised using **Venn diagrams**.

Another way to combine sets is the **Cartesian product (×)**. For two sets X and Y, the Cartesian product X × Y is the set of **all possible ordered pairs (x, y)** where x is from X and y is from Y. The order of elements is important in these pairs. The Cartesian product can be extended to more than two sets, resulting in tuples.

The Cartesian product serves as the building block for **relations**. A relation is a **subset of the Cartesian product** of the sets involved. Relations can be defined using set comprehension on the Cartesian product.

The concept of sets containing other sets leads to the **Powerset**. The powerset of a set X is the set of **all possible subsets** of X. For a finite set with n elements, its powerset contains 2^n subsets.

Despite the intuitive nature of sets as collections, the sources highlight a critical limitation revealed by **Russell's Paradox**. The paradox arises from considering the **collection of all sets that do not contain themselves**. If this collection were a set, it would lead to a contradiction: it can neither belong to itself nor not belong to itself. This paradox demonstrates that **not every collection can be called a set**; specifically, the **set of all sets does not exist**. Therefore, in mathematics, it is crucial to always **start with known sets** (like the number sets) and **build new sets from existing sets** using operations like Cartesian product, union, set comprehension, etc.. If you are unsure whether a collection is a set, it is safer to call it a **class**.

Finally, the sources discuss the **cardinality of infinite sets** using the concept of a **bijection** (a one-to-one and onto function). If a bijection exists between two infinite sets, they are considered to have the same cardinality. Sets that can be put into a bijection with the set of natural numbers are called **countable**. The sets of natural numbers (N), integers (Z), and rational numbers (Q) are all countable, despite Z seeming "twice as big" as N and Q being dense compared to the discrete integers. However, the set of **real numbers (R) is not countable**, meaning it has a "larger" infinity than the rationals, integers, or natural numbers. The study of the cardinality of infinite sets was a key area of research by Georg Cantor.