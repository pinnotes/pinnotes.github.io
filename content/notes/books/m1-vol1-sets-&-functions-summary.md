---
title: M1_VOL1_SETS&FUNCTIONS.pdf
date: 2025-05-08
tags:
  - Notes 
excludeSearch: false
weight: 1
cascade:
 series: ["English"]
 image: "/images/hello.jpg"

---

## Explain 


Okay, I will explain the concepts from the "M1_VOL1_SETS&FUNCTIONS.pdf" document, drawing on the information from the provided sources and including related examples and questions/answers where available.

This document, "M1_VOL1_SETS&FUNCTIONS.pdf", along with associated video transcripts, covers fundamental mathematical concepts for Data Science. The content is structured into several chapters.

Here is a breakdown of the concepts presented:

**1. Set Theory**

This section begins by introducing different types of numbers which can be viewed as sets.

*   **Natural Numbers** These are denoted by N. The set of natural numbers includes 0, 1, 2, 3, and so on. Sometimes, the subscript 0 is used with N, like N₀, to emphasise that 0 is included, but generally, natural numbers in this context always include 0. Natural numbers are primarily used for counting objects.
*   **Integers** Denoted by Z, integers extend natural numbers to include negative numbers, forming the set {..., -4, -3, -2, -1, 0, 1, 2, 3, 4, ...}. Natural numbers are a subset of integers (N ⊆ Z).
*   **Arithmetic Operations** Basic operations like addition (+), subtraction (-), multiplication (×), and division (÷) are discussed. Addition gives the sum of numbers. Subtraction gives the difference. Multiplication is explained as repeated addition; for instance, 7 × 4 means taking 4 copies of 7 objects, resulting in 7 + 7 + 7 + 7 = 28. Division is described as repeated subtraction, such as 18 ÷ 3 = 6.
*   **Modulo** The modulo operator, or remainder operator, gives the remainder of a division. It is denoted by "mod". For example, 10 mod 3 = 1 because when 10 is divided by 3, the remainder is 1.
*   **Factors** A number 'a' is a factor of 'b' if 'b mod a' is 0. In this case, 'b' is also a multiple of 'a'. For example, 2 is a factor of 6 (6 mod 2 = 0), and 5 is a factor of 10 (10 mod 5 = 0).

*   **Rational Numbers** Denoted by Q, these are numbers that can be expressed in the form p/q, where p and q are integers. The representation of a rational number is not always unique (e.g., 1/2 = 2/4). The reduced form is when p and q have no common factors. Rational numbers extend natural numbers, meaning natural numbers and integers are subsets of rational numbers (N ⊆ Z ⊆ Q).
*   **Real Numbers** Denoted by R, the set of real numbers includes all rational and irrational numbers. Rational numbers are a proper subset of real numbers (Q ⊂ R). This relationship between the number sets can be visualised using Venn diagrams.

*   **Sets** A set is defined as a collection of items.
    *   The items within a set are called **elements** or members. The symbol ∈ is used to denote that an item is an element of a set, e.g., 0 ∈ N. An element with a line across it means it is not an element of the set, e.g., square root of 2 is not a rational number.
    *   Sets can be **finite** or **infinite**. Examples of finite sets include the days of the week (7 members) or the factors of 24 (8 members). Infinite sets include the set of even natural numbers or the set of integers.
    *   The **cardinality** of a finite set S is the number of elements in S. For example, the set S = {1, 2, 5, 7, 9, 300} has a cardinality of 6. Measuring the cardinality of infinite sets is more complex.
    *   In a set, the **order of elements does not matter**, and **duplicates are not counted**.
    *   Finite sets can be described by explicitly listing their members within curly braces {}.

*   **Subsets** A set X is a subset of another set Y (denoted X ⊆ Y) if every element in X is also an element in Y. For example, {1, 2} is a subset of {1, 2, 3}. Every set is a subset of itself.
*   **Proper Subsets** A set X is a proper subset of Y (denoted X ⊂ Y) if X ⊆ Y but X ≠ Y. For instance, N ⊂ Z, Z ⊂ Q, and Q ⊂ R are proper subset relationships because integers contain negative numbers not in natural numbers, rationals contain fractions not in integers, and reals contain irrationals not in rationals. The notation for subsets can sometimes be ambiguous regarding whether proper subsets are intended.
*   **Empty Set** This is a special set that contains no elements. It is the equivalent of 0 in set theory. The empty set is a subset of every set.

*   **Set Comprehension** This is a notation used to construct a subset from existing sets (like N, Z, R) by applying filters or conditions to the elements of the existing set. This is particularly useful for defining infinite sets that cannot be explicitly listed. Set comprehension has three main parts: a generator (the basic set), a filter (the condition elements must satisfy), and sometimes a transformer.
    *   Example: The set of even integers can be defined using set comprehension as {x ∈ Z | x mod 2 = 0}. This means "collect all x such that x is in Z and x divided by 2 has a remainder of 0".
    *   It is important to start with a known set when using set comprehension. Ambiguity should be avoided when writing the conditions.
    *   Set comprehension can make definitions more readable and less tedious compared to listing elements.

*   **Set Operations** Operations like union, intersection, difference, and complement allow constructing new sets from old ones. These can often be visualised using Venn diagrams.
    *   **Union** combines elements from two sets, removing duplicates.
    *   **Intersection** finds elements common to both sets.
    *   **Set Difference** finds elements in one set but not the other.
    *   **Complement** finds elements not in a set, defined with respect to an overall 'universe' or full set.

*   **Relations** A relation is formally defined as a subset of the Cartesian product of two sets.
    *   **Cartesian Product** Of two sets X and Y, denoted X × Y, it is the set of all possible ordered pairs (x, y) where x ∈ X and y ∈ Y. For example, if X = {1, 2} and Y = {a, b}, X × Y = {(1, a), (1, b), (2, a), (2, b)}. The Cartesian product is ordered. If set A has m elements and set B has n elements, A × B has m × n pairs.
    *   Relations describe special pairs within the Cartesian product. They can be defined explicitly by listing the pairs or implicitly using set comprehension.
    *   Notation: A pair (a, b) belonging to a relation R can be written as (a, b) ∈ R or a R b.
    *   Examples of relations include divisibility on natural numbers, teacher-course allocations, or mother-child relationships. Tables, commonly used in computing and data science, are essentially relations.

*   **Functions** A function is a special type of relation. A function from set X to set Y (denoted f: X → Y) is a relation where **each element in the input set X (the domain) is paired with exactly one element in the output set Y (the codomain)**. If an element 'a' in the domain is paired with 'b' in the codomain, we write f(a) = b, where b is the image of a under f.
    *   The set of all actual output values achieved by a function is called the **range**. The range is a subset of the codomain.
    *   Graphing a function is essentially plotting the points that satisfy the function's relation.

**2. Straight Lines**

This chapter covers coordinate geometry concepts related to straight lines.

*   **Rectangular Coordinate System** This system uses perpendicular X and Y axes intersecting at the origin to locate points on a plane using ordered pairs (x, y). Understanding the quadrants (regions defined by the axes) is useful for graphing.
*   **Distance Between Any Two Points** The distance between two points in the coordinate system can be calculated. The distance from the origin (0,0) to a point (3,4) is an example.
*   **Section Formula** This formula helps find the coordinates of a point P that divides a line segment AB in a given ratio. If P(x,y) divides the segment joining A(x₁,y₁) and B(x₂,y₂) in the ratio m:n, the coordinates are given by: x = (mx₂ + nx₁)/(m+n) and y = (my₂ + ny₁)/(m+n). The formula can also be used to find the ratio in which a point divides a segment or to find an unknown endpoint coordinate.
*   **Slope of a Straight Line** The slope is a key characteristic of a straight line.
*   **Equation of a Straight Line** Straight lines can be represented algebraically using various forms of equations.
    *   Different forms include **slope-point form**, **slope-intercept form**, **two-point form**, and **intercept form**.
    *   The **general form** of a linear equation is Ax + By + C = 0. This general form can represent any straight line. Given a general equation, one can find its slope, x-intercept, and y-intercept to understand its geometric properties.
*   **Condition for Parallel and Perpendicular Lines** For two lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0:
    *   They are **parallel** if a₁b₂ = a₂b₁.
    *   They are **perpendicular** if a₁a₂ = -b₁b₂.
    *   Lines parallel to the x-axis are horizontal, and lines parallel to the y-axis are vertical.
*   **Distance of a Point from a Given Line** The distance 'd' of a point (x₁, y₁) from a line ax + by + c = 0 is given by the formula: d = |ax₁ + by₁ + c| / √(a² + b²).
*   **Sum Squared Error (SSE)** This concept is introduced, often used in fitting a straight line to data points (linear regression). For a set of points (xᵢ, yᵢ) and a line y = mx + c, the SSE is calculated as the sum of the squares of the vertical distances between each point and the line: SSE = Σ (yᵢ - (mxᵢ + c))². An example calculating SSE for given points and a line y = 2x + 2 is provided, showing the sum of squared differences (1² + 0² + (-1)² + (-2)² = 6). Minimizing SSE is a strategy for finding the best-fitting line.

**3. Quadratic Function**

A quadratic function is given in the form f(x) = ax² + bx + c, where a ≠ 0.

*   The graph of any quadratic function is always a **parabola**.
*   **Important Observations** related to parabolas are discussed.
    *   **Axis of Symmetry:** All parabolas have an axis of symmetry, a line that divides the parabola into two mirror images. The equation for the axis of symmetry of f(x) = ax² + bx + c is x = -b / 2a.
    *   **Vertex of a Parabola:** This is the point where the axis of symmetry intersects the parabola. It is the minimum or maximum point of the parabola. The x-coordinate of the vertex is -b / 2a.
    *   **Types of Parabola:** There are different types, but details are not extensively covered in the provided excerpts.
*   **Quadratic Equation** When a quadratic function is set equal to zero (ax² + bx + c = 0), it becomes a quadratic equation. The solutions to a quadratic equation are called its **roots** or **zeroes**.
*   **Methods of Solving a Quadratic Equation** Finding the zeroes of the corresponding quadratic function is equivalent to solving the quadratic equation.
    *   The **quadratic formula** is a general method for finding the roots of ax² + bx + c = 0. The formula is x = [-b ± √(b² - 4ac)] / 2a.
    *   An example demonstrates using the quadratic formula to solve 4x² + 9x - 9 = 0, resulting in roots 3/4 and -3.
    *   For general polynomials, finding zeroes can be challenging, and simple formulas like the quadratic formula do not exist for degrees higher than 4.

**4. Polynomial Function**

A polynomial is a mathematical expression with terms added together, where variables only have natural number exponents. The operations involved are addition, subtraction, multiplication, and natural exponents.

*   **Definition:** Polynomials consist of numerous mathematical terms added together. From a mathematician's perspective, it's an algebraic expression using only addition, subtraction, multiplication, and natural exponents of variables.
*   **Classification of Polynomials:** Polynomials can be classified based on the number of variables, their degree, or the number of terms.
*   **Operations on Polynomial Function:** Standard arithmetic operations can be performed on polynomials.
    *   **Addition, Subtraction, Multiplication:** These operations are covered. An example demonstrates multiplying two polynomials p(x) = x² + x + 1 and q(x) = x² + 2x + 1 using a multiplication algorithm.
    *   **Division:** Division of polynomials is also covered. An example shows the division of x⁵ - 4x⁴ + 3x³ + 3x² - 4 by (x-2)² = x² - 4x + 4 using a division algorithm, resulting in a quotient of x³ - x - 1.
*   **Zeroes of Polynomial Function:** These are the solutions when a polynomial function is set to zero. Finding these can be difficult for general polynomials, but the quadratic formula exists for degree 2.

**5. Exponential Function**

Before discussing exponential functions, two tests related to functions are mentioned:

*   **Vertical Line Test:** This test determines if a relation is a function by checking if any vertical line intersects the graph of the relation more than once. If a vertical line intersects at most once, it is a function.
*   **Horizontal Line Test:** This test determines if a function is one-to-one (injective). If any horizontal line intersects the graph of the function at most once, the function is one-to-one. An example of f(x) = |x| shows that a horizontal line intersects it at two points, so it is not one-to-one.

*   **Exponential Function Definition:** The standard form is f(x) = aˣ, where a > 0 and a ≠ 1.
*   **Laws of Exponents:** Rules for manipulating exponential expressions are provided. For s, t ∈ R and a, b > 0: aˢ × aᵗ = aˢ⁺ᵗ, (aˢ)ᵗ = aˢᵗ, and (ab)ˢ = aˢbˢ. An example demonstrates simplifying 2³ × (4⁵)³ to 2³³ using these laws.
*   **Graphing Exponential Functions:** The shape of the graph depends on the base 'a'.
    *   If a > 1 (e.g., f(x) = 2ˣ), the function is increasing. The domain is R, the range is (0, ∞), the y-intercept is (0, 1), and there is no x-intercept.
    *   If 0 < a < 1 (e.g., f(x) = (1/2)ˣ), the function is decreasing.
*   **Natural Exponential:** This is the exponential function with base 'e', f(x) = eˣ. The domain is R, and the range is (0, ∞). 'e' is mentioned as the slope of the tangent line to f(x) = eˣ at (1, e) and the area under f(x) = eˣ from (-∞, 1) is e. An example uses R(t) = 50 - 100e⁻⁰.²ᵗ to model response percentage over time.
*   **Composition of Function:** This involves applying one function to the result of another. If f and g are functions, the composition f ◦ g is defined as f(g(x)).
*   **Inverse Function:** An inverse function "undoes" the action of the original function. A function has an inverse if and only if it is one-to-one. If f and g are inverse functions, then f(g(x)) = x and g(f(x)) = x. An example shows that f(x) = (x-5)/(2x+3) and g(x) = (3x+5)/(1-2x) are inverse functions by showing f(g(x)) = x and g(f(x)) = x.

**6. Logarithmic Function**

*   Logarithmic functions are defined as the **inverse function of exponential functions**. Specifically, logₐx is the inverse of aˣ (for a > 0, a ≠ 1).
*   **Graphing Logarithmic Functions:** Like exponential functions, the graph depends on the base 'a'. The graphs of f(x) = aˣ and f(x) = logₐx are reflections of each other across the line y = x.
    *   If a > 1 (e.g., f(x) = log₂x), the function is increasing.
    *   If 0 < a < 1, the function is decreasing.
*   **Natural Logarithmic:** This is the logarithm with base 'e', denoted as lnx. It is the inverse of eˣ.
*   **Common Logarithmic:** This is the logarithm with base 10.
*   **Laws of Logarithmic Function:** Rules for manipulating logarithmic expressions are provided.

The document concludes with an exercise section. While specific questions and answers are not always paired directly within the provided M1_VOL1 excerpts, related questions and answers are found in other provided sources and lecture transcripts, such as the questions on domains and ranges in the Exercise section referencing functions like f(x) = (5x+9)/(2x) and g(y) = √(y²-9). Other sources provide answers to specific problems, e.g., distance calculation or section formula problems. Questions about limits and continuity, differentiability, integration, and graph theory are covered in other volumes.