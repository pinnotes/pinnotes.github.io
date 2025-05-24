---
title: natural numbers and the operations
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 3
---

Drawing on the provided sources and our conversation history regarding natural and rational numbers, we can now discuss real and complex numbers.

**Real numbers** are defined as the set that includes **all the rational numbers and the irrational numbers**. The set of real numbers is denoted by a special symbol, **R**, written with a double line.

Real numbers **extend the rational numbers**. The rational numbers are numbers that can be written in the form p/q, where p and q are integers. However, the sources state that the rationals do not include all the numbers needed. **Irrational numbers** are numbers that **cannot be written in the form p/q**, where p and q are integers. These are the numbers that are not rational. Examples of irrational numbers given include the **square root of 2 (√2)**, the **square root of 3 (√3)**, **pi (π)**, and **e**. The sources also mention that the square root of any integer that is not a perfect square is an irrational number.

Just like rational numbers, the real numbers are **dense**. This means that between any two real numbers, you can find another real number. The average of any two real numbers is also a real number.

There is a clear progression or hierarchy of number sets discussed in the sources:
*   Every natural number (which includes 0 in this context) is also an integer. This is because integers extend natural numbers with negative quantities. The set of natural numbers (N) is a subset of the set of integers (Z).
*   Every integer is also a rational number. This is because any integer can be thought of as a ratio p/q where the denominator q is 1. The set of integers (Z) is a subset of the set of rational numbers (Q).
*   Every rational number is also a real number. This is because the real numbers include all rational numbers plus all irrational numbers. The set of rational numbers (Q) is a subset of the set of real numbers (R).

This relationship can be visualised where natural numbers are nested inside integers, which are nested inside rationals, which are nested inside reals. Natural numbers are a proper subset of integers, integers are a proper subset of rationals, and rationals are a proper subset of reals because irrational numbers exist.

While the sets of natural numbers, integers, and rational numbers are all countable (meaning you can put them in a one-to-one correspondence with the natural numbers), the sources mention a separate discussion showing that the set of real numbers (R) is **not countable**. This implies that R is "bigger" than Q in terms of cardinality.

The introduction of real numbers addresses the need to represent quantities like √2 which cannot be expressed as a fraction. However, the sources then introduce another limitation related to the **square root operation**. The sign rule for multiplication states that multiplying two numbers with the same sign (either both positive or both negative) results in a positive sign. This means that when you square any real number (multiply it by itself), the result is always non-negative (zero or positive).

This poses a problem if you try to find the square root of a **negative number**, such as the square root of -1. Since no real number multiplied by itself can produce a negative number, the square root of a negative number is not a real number. To address this, the sources mention the need to **create yet another class of numbers called complex numbers**.

**Complex numbers extend the real numbers**. The set of complex numbers includes the square root of -1 and, implicitly through that, the square root of all negative numbers. The sources note that once complex numbers are allowed as the output of a function, the square root can be defined on all real numbers.

However, the sources explicitly state that **complex numbers will not be looked at for this course**.

In summary, the number systems build upon each other: Natural numbers (N) are extended to Integers (Z) to allow for subtraction, Integers are extended to Rational numbers (Q) to allow for division, Rational numbers are extended to Real numbers (R) to include numbers like √2 and π, and finally, Real numbers are extended to Complex numbers to allow for the square root of negative numbers.