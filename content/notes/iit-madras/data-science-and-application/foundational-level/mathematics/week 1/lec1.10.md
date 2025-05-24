---
title: Relations - Examples
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 10
---

Based on the sources and our conversation history, a **relation** is defined as a **collection of ordered pairs** or **n-tuples** from a **Cartesian product** of sets. It is formally a **subset** of this Cartesian product. Relations are used to describe connections or relationships between elements.

Here are several examples of relations discussed in the sources:

*   **Relations on Numbers:**
    *   A relation between two sets of natural numbers, N, could be the set of pairs (n, m) where m is 1 plus n. This results in pairs like (0, 1), (2, 3), (17, 18), etc., which form a subset of N × N.
    *   The **divisibility relation** on natural numbers (N × N) or integers (Z × Z) is a relation where a pair (d, n) is included if d is a factor of n (meaning n mod d = 0). For example, (2, 82) and (14, 56) would be in this relation. This relation can be defined using set comprehension as the set of pairs (d, n) in N × N such that d divides n.
    *   A relation could be defined by pairs of integers (p, q) where their **greatest common divisor is 1**. This is related to the concept of reduced fractions.
    *   The **"less than" relation** (<) on numbers is a relation where a pair (a, b) is included if a is less than b. Similarly, the **"strictly less than" relation** is also an example.
    *   An **equivalence relation** example is connecting numbers that have the **same remainder modulo 5**. Numbers like 7 and 22 are related in this way because both have a remainder of 2 when divided by 5.
    *   A relation on the Cartesian product N × R could be the set of pairs (m, r) such that r is the **square root of m**. Pairs like (2, √2), (4, 2), (7, √7) would be in this relation.
    *   The relation associated with a function f(x) = x² is the set of pairs (x, y) such that y = x². When plotted, these points form the graph of the function, a parabola.

*   **Relations between Different Sets:**
    *   An **allocation relation** between a set of teachers (T) and a set of courses (C) in a school could be the set of pairs (t, c) where teacher 't' is actually teaching course 'c'. This relation would be a subset of the Cartesian product T × C.

*   **Relations on the Same Set (Binary Relations):**
    *   The **identity relation** on a set A is the set of all pairs (a, a) where 'a' is an element of A. This represents the property of equality. For natural numbers (N × N), this would be pairs like (0, 0), (1, 1), etc..
    *   The **"mother of" relation** between people in a set P would be the set of pairs (m, c) such that 'm' is the mother of 'c'. This is a subset of P × P. This relation is later noted as being a function because every person has exactly one mother.
    *   A relation on the set of real numbers (R × R) could be the set of points (a, b) that are at a **distance of 5 from the origin (0, 0)**. This satisfies the equation a² + b² = 5² and defines a circle of radius 5 centred at the origin when plotted.

*   **Relations with More Than Two Sets:**
    *   A relation could involve more than just pairs (binary relations). For example, a relation could describe **four points in R² that form the corners of a square**. This would be a relation on (R²)⁴, meaning it involves 4-tuples where each element of the tuple is itself a pair of real numbers (an x and y coordinate). In general, relations can involve **n-tuples** from the Cartesian product of n sets.

*   **Relations in Computing and Data Science:**
    *   Information about an airline's routes can be represented as a relation. A set D of **direct flights** between cities in a set C is a relation, a subset of C × C.
    *   This airline example can be extended to include distance, becoming a relation on **C × C × Natural Numbers**, where a tuple (city1, city2, distance) is included if there's a direct flight between city1 and city2 with that distance.
    *   Crucially, **tables** in computing and data science are effectively **relations**.
        *   A student record table with columns for roll number, name, and date of birth can be seen as a relation.
        *   A grades table with columns for roll number, subject, and grade is also a relation.
    *   Operations like the **Join operation**, which combines data from different tables, are described as operations on relations.

These examples illustrate the broad applicability of the concept of a relation, from abstract mathematical definitions to concrete representations in data systems.