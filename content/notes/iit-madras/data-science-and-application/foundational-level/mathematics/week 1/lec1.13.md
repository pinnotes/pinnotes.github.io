---
title: Why is a number irrational?
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 13
---

Based on the sources and our conversation history, a number is considered **irrational** primarily because **it cannot be written in the form of p/q, where p and q are integers**. In simpler terms, irrational numbers are defined as numbers that are **not rational**.

Here are some key points and examples from the sources explaining why numbers are irrational:

*   **Definition:** The set of rational numbers (Q) consists of numbers that can be expressed as a fraction p/q, where p and q are integers. Irrational numbers are those real numbers that fall outside this definition.
*   **Examples:**
    *   **Square roots of non-perfect squares:** A frequently discussed example is the **square root of 2 (√2)**. The sources state that √2 cannot be written as p/q. Similarly, the **square root of 3 (√3)**, **square root of 5 (√5)**, and **square root of 6 (√6)** are given as examples of irrational numbers. The general principle is that the **square root of any integer that is not a perfect square** is an irrational number. A perfect square is defined as an integer whose square root is also an integer.
    *   **Pi (π):** This number, which is the ratio of a circle's circumference to its diameter, is stated to be an irrational number.
    *   **e:** This number, used for natural logarithms, is also given as an example of an irrational number.

*   **The Proof for √2 being Irrational:** The sources detail a classic proof by contradiction, attributed to Hippasus around 500 BCE, to demonstrate why √2 is irrational:
    1.  **Assume √2 is rational:** The proof begins by assuming the opposite of what it wants to prove. It assumes that √2 *can* be written as a rational number, p/q.
    2.  **Assume reduced form:** If √2 can be written as p/q, it can be written in its **reduced form**, meaning p and q are integers with no common factors other than 1 (their greatest common divisor, gcd, is 1).
    3.  **Square both sides:** Squaring √2 = p/q gives 2 = p²/q².
    4.  **Rearrange:** Multiplying by q² gives 2q² = p².
    5.  **p² is even:** This equation shows that p² is equal to 2 times an integer (q²), meaning p² must be an even number.
    6.  **p is even:** The sources note that if p² is even, then p itself must be an even number. (An odd number squared is always odd).
    7.  **Write p as 2a:** Since p is even, it can be written in the form 2a, where 'a' is some integer.
    8.  **Substitute and simplify:** Substituting p = 2a into the equation 2q² = p² gives 2q² = (2a)² = 4a². Dividing both sides by 2 results in q² = 2a².
    9.  **q² is even, thus q is even:** This new equation shows that q² is also an even number. Following the same logic as for p, if q² is even, then q must also be an even number.
    10. **Contradiction:** The proof has reached a point where, based on the initial assumption that √2 = p/q in reduced form, it is concluded that both p and q are even numbers. If p and q are both even, they share a common factor of 2. This contradicts the initial assumption that the fraction p/q was in reduced form (meaning their only common factor is 1).
    11. **Conclusion:** Since the assumption that √2 is rational leads to a contradiction, the assumption must be false. Therefore, **√2 cannot be represented by any reduced fraction p/q, and thus, it is an irrational number**. A similar argument can be used for the square root of any non-perfect square.

*   **Density and Cardinality:** While rational numbers are dense (meaning between any two rationals there is another rational), they do not fill the entire number line. The irrational numbers fill the "gaps" left by the rational numbers on the real number line. The set of real numbers (R), which includes both rationals and irrationals, is **not countable**. The set of rational numbers (Q), however, *is* countable. The uncountable nature of the real numbers comes from the **uncountable set of irrational numbers**, implying that there are vastly more irrational numbers than rational numbers.

In essence, a number is irrational because it possesses the property of not being expressible as a simple ratio of two integers, a property that allows for the real number line to be continuous and the set of real numbers to be uncountable.