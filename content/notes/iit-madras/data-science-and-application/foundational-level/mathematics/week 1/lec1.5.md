---
title: construction of subsets and set operation
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 5
---


Drawing on the provided sources and our conversation history, we can delve into the concepts of constructing subsets and the operations performed on sets.

**Set comprehension** is a primary method discussed for constructing subsets, particularly for infinite sets where explicitly listing every element is impossible. It provides a formal way to define a subset from an existing set. The notation typically involves curly braces `{}` and a structure that filters elements from a "generator" set based on specific conditions.

The three main components of set comprehension are:
1.  **Generator**: This specifies the existing set from which you are taking elements. You must **start with a set that is already known to be a set**. For example, `x in Z` means you are considering every integer `x`.
2.  **Filter**: This is an optional condition that the elements from the generator must satisfy to be included in the new subset. It acts like a filter, keeping only the elements that meet the specified criteria. For instance, `x mod 2 is 0` filters for even numbers.
3.  **Transformer**: This is an optional operation applied to the filtered elements to produce the elements of the new set. For example, if you are filtering for even numbers (`x mod 2 is 0`) and then taking their squares, the transformer would be `x²`. The notation `x | x ∈ Z, x mod 2 is 0` collects all `x` satisfying the condition, while `x² | x ∈ Z, x mod 2 is 0` collects the squares of those `x`.

Set comprehension allows for defining subsets like the set of even integers (`{x | x ∈ Z, x mod 2 is 0}`), perfect squares (`{x | x ∈ Z, x ≥ 0, x = m*m for some m in Z}`), rational numbers in reduced form (`{p/q | p, q ∈ Z, q ≠ 0, gcd(p,q) = 1}`), and intervals of real numbers. The syntax for filters can be flexible as long as it is unambiguous.

Beyond constructing subsets using comprehension, sets can also be combined or manipulated using various **set operations**. These operations are often visualised using **Venn diagrams**, which represent sets as areas (like circles or ovals) within a larger universe. Overlapping areas show shared elements, while distinct areas show elements unique to each set.

The standard set operations discussed include:
*   **Union (∪)**: The union of two sets combines all elements from both sets into a single set, automatically removing any duplicate elements. The symbol for union is `∪`. In a Venn diagram, the union is the entire shaded area covered by the represented sets.
    *   *Example*: `{a, b, c} ∪ {c, d, e} = {a, b, c, d, e}`. The cardinality of the union is generally less than or equal to the sum of the cardinalities of the individual sets if there are common elements.
*   **Intersection (∩)**: The intersection of two sets contains only the elements that are **common to both sets**. The symbol is an upside-down union sign `∩`. In a Venn diagram, the intersection is the overlapping shaded area.
    *   *Example*: `{a, b, c, d} ∩ {a, d, e, f} = {a, d}`.
*   **Set Difference (∖ or -)**: The set difference between set X and set Y contains all elements that are in set X **but not in set Y**. The order matters in set difference; `X ∖ Y` is different from `Y ∖ X`. Notation uses either a backslash `∖` or a minus sign `-`. In a Venn diagram for `X ∖ Y`, it's the part of the X area that does not overlap with Y.
    *   *Example*: `Real Numbers ∖ Rational Numbers` gives the set of irrational numbers.
*   **Complement**: The complement of a set refers to **everything else** not in the given set, relative to an overall "universe" or "full set" being considered. The sources emphasise that the complement is not well-defined without specifying this universe.
    *   *Example*: The complement of the set of prime numbers, within the universe of natural numbers, is the set of composite numbers (plus 0 and 1). The complement of primes with respect to the real numbers would include non-integer reals as well.

Another fundamental way to combine sets, particularly relevant to relations, is the **Cartesian product (×)**. The Cartesian product of two sets X and Y, denoted X × Y, is the set of **all possible ordered pairs (x, y)** where `x` is an element of X and `y` is an element of Y. The order of elements in these pairs is important. The Cartesian product can be extended to more than two sets, forming ordered n-tuples. Relations are formally defined as subsets of a Cartesian product. Set comprehension can be used to define such subsets, by generating all pairs from the Cartesian product and then filtering them based on a condition.

Finally, the concept of a **Powerset** is introduced as the set of **all possible subsets** of a given set. For a finite set with `n` elements, its powerset will contain `2^n` subsets. This can be reasoned by considering that for each element in the original set, you have two choices when forming a subset: either include the element or exclude it. The empty set is always a subset of any set, and the set itself is always a subset of itself. The powerset itself is a set whose elements are sets.

It is crucial to remember the distinction highlighted by Russell's Paradox: not every collection is a set. To avoid paradoxes, set theory relies on starting with known sets (like the number sets) and building new sets from existing ones using defined operations like Cartesian product, union, and set comprehension. Collections that might not be sets are sometimes referred to as **classes** [This term wasn't explicitly in the provided sources, but is a standard concept related to Russell's Paradox, which was discussed. I will mark this as outside the sources].