---
title: Division Algorithm
date: 2025-05-08
weight: 46
---

Alright, let's dive into the exciting world of **Polynomial Division**! ➗ It's the final major arithmetic operation for polynomials, and while it might seem a bit daunting at first, it's very much like the long division you already know, just with some algebraic twists! 😉

### What is Polynomial Division? 🤔

Just as you can divide whole numbers, for example, $10 \div 3$ results in $3$ with a remainder of $1$, you can divide one polynomial by another. This process aims to break down a more complex polynomial (the **dividend**) into simpler parts using another polynomial (the **divisor**).

The fundamental relationship that defines division remains the same for polynomials:
**Dividend = Quotient × Divisor + Remainder**

It's important to note that, unlike addition, subtraction, or multiplication of polynomials (which *always* result in another polynomial), the outcome of dividing two polynomials **will not always be another polynomial** if there's a non-zero remainder. In such cases, the result is expressed as a **rational function**.

### Key Terms to Know 📚

To understand polynomial division, let's get familiar with the players involved:

*   **Dividend (P(x))**: This is the polynomial being divided, much like the number you put inside the division symbol. It's the "numerator" in a fractional expression.
*   **Divisor (Q(x))**: This is the polynomial you are dividing by, the one on the outside of the division symbol. It's the "denominator".
*   **Quotient (H(x))**: This is the main result of the division, indicating how many times the divisor "fits into" the dividend. It's the polynomial part of your answer.
*   **Remainder (R(x))**: This is the polynomial left over after the division, once no further full divisions are possible. Think of it like the "1" when you divide 10 by 3.

### Crucial Conditions! 🚨

Before you start dividing, there are a couple of very important rules to keep in mind:

1.  **Degree Relationship** 📏: For polynomial division (to find a polynomial quotient) to be possible, the **degree of the dividend must be greater than or equal to the degree of the divisor**.
    *   **What if the Dividend's Degree is Smaller?** If the degree of the dividend $P(x)$ is *less than* the degree of the divisor $Q(x)$, then the division is not typically "possible" in the sense of yielding a polynomial quotient. In this specific scenario, the **quotient is the zero polynomial (0)**, and the **remainder is simply the dividend itself (P(x))**. For instance, you wouldn't typically perform long division for $4 \div (2x+1)$ to get a polynomial result, because $4$ has degree $0$ and $2x+1$ has degree $1$.
2.  **Remainder's Degree** 👇: The **degree of the remainder R(x) must always be strictly less than the degree of the divisor Q(x)**. If the remainder's degree is still equal to or greater than the divisor's, it means you haven't finished the division yet!
3.  **Zero Polynomial's Degree** 🚫: It's a special case, but the **degree of the zero polynomial (0) is always undefined**. This comes into play if your division results in a remainder of 0.

### The Polynomial Long Division Algorithm (Step-by-Step) 🪜

This is the most common and systematic method for dividing polynomials. Let's break it down:

1.  **Arrange and Fill Gaps** 📝:
    *   Write both the **dividend** and the **divisor** in **descending order of their degrees** (highest power first, down to the constant term).
    *   If any powers of the variable are *missing* in the **dividend**, add them with a **coefficient of zero** as placeholders (e.g., $x^4 + 2x^2 + 3x + 2$ should be written as $x^4 + 0x^3 + 2x^2 + 3x + 2$). This helps keep terms aligned.
2.  **Divide Leading Terms** ➗:
    *   Divide the **first term (leading monomial)** of the *current dividend* by the **first term (leading monomial)** of the *divisor*.
    *   The result of this division is the **first term of your quotient**.
3.  **Multiply and Subtract** ✖️➖:
    *   Take the term you just found in the quotient (from Step 2) and **multiply it by the *entire* divisor**.
    *   Write this product directly below the current dividend, **aligning like terms**.
    *   **Subtract** this entire product from the current dividend. Be very careful with signs! It's often helpful to change the signs of all terms in the product and then add.
4.  **Bring Down and Repeat or Terminate** 🔁🛑:
    *   Bring down the next term (or terms) from the original dividend to form your **new current dividend**.
    *   Now, look at this new polynomial (your new "dividend"):
        *   If its **degree is still greater than or equal to the degree of the divisor**, then **repeat from Step 2** with this new polynomial.
        *   If its **degree is strictly less than the degree of the divisor**, then this polynomial is your **remainder (R(x))**, and the process stops.

### Let's Dive into an Example! 🚀

Let's divide $P(x) = x^4 + 2x^2 + 3x + 2$ by $Q(x) = x^2 + x + 1$.

**Step 1: Arrange and Fill Gaps** 📝
The dividend needs a placeholder for $x^3$:
$P(x) = x^4 + 0x^3 + 2x^2 + 3x + 2$
$Q(x) = x^2 + x + 1$

```
                  <-- Quotient (will go here)
        _________________
x² + x + 1 | x⁴ + 0x³ + 2x² + 3x + 2   <-- Dividend
```

**First Iteration:**

*   **Step 2: Divide Leading Terms** ➗
    ($x^4 \div x^2 = x^2$). This is the first term of our quotient.
*   **Step 3: Multiply and Subtract** ✖️➖
    ($x^2 \times (x^2 + x + 1) = x^4 + x^3 + x^2$)

```
        x²          <-- First term of Quotient
      _________________
x² + x + 1 | x⁴ + 0x³ + 2x² + 3x + 2
       -(x⁴ + x³ + x²)  <-- Product of x² and Divisor, then subtracted
       _________________
             -x³ + x² + 3x + 2   <-- New Dividend
```

*   **Step 4: Bring Down and Repeat** 🔁
    The degree of $-x^3 + x^2 + 3x + 2$ (which is 3) is still greater than or equal to the degree of $x^2 + x + 1$ (which is 2). So, we repeat.

**Second Iteration:**

*   **Step 2: Divide Leading Terms** ➗
    (The leading term of our new dividend, $-x^3$, divided by $x^2$ is $-x$). This is the next term of our quotient.
*   **Step 3: Multiply and Subtract** ✖️➖
    ($-x \times (x^2 + x + 1) = -x^3 - x^2 - x$)

```
        x² - x      <-- Quotient so far
      _________________
x² + x + 1 | x⁴ + 0x³ + 2x² + 3x + 2
       -(x⁴ + x³ + x²)
       _________________
             -x³ + x² + 3x + 2   
           -(-x³ - x² - x)   <-- Product of -x and Divisor, then subtracted
           _________________
                   2x² + 4x + 2   <-- New Dividend
```

*   **Step 4: Bring Down and Repeat** 🔁
    The degree of $2x^2 + 4x + 2$ (which is 2) is still equal to the degree of $x^2 + x + 1$ (which is 2). So, we repeat.

**Third Iteration:**

*   **Step 2: Divide Leading Terms** ➗
    (The leading term of our new dividend, $2x^2$, divided by $x^2$ is $2$). This is the final term of our quotient.
*   **Step 3: Multiply and Subtract** ✖️➖
    ($2 \times (x^2 + x + 1) = 2x^2 + 2x + 2$)

```
        x² - x + 2  <-- Final Quotient
      _________________
x² + x + 1 | x⁴ + 0x³ + 2x² + 3x + 2
       -(x⁴ + x³ + x²)
       _________________
             -x³ + x² + 3x + 2
           -(-x³ - x² - x)
           _________________
                   2x² + 4x + 2
                 -(2x² + 2x + 2)  <-- Product of 2 and Divisor, then subtracted
                 _________________
                         2x       <-- Remainder
```

*   **Step 4: Terminate!** 🛑
    The degree of $2x$ (which is 1) is strictly less than the degree of $x^2 + x + 1$ (which is 2). The division stops.

**Final Answer:**
For $P(x) = x^4 + 2x^2 + 3x + 2$ and $Q(x) = x^2 + x + 1$:
The **Quotient** is $H(x) = x^2 - x + 2$.
The **Remainder** is $R(x) = 2x$.

This means we can write:
$\frac{x^4 + 2x^2 + 3x + 2}{x^2 + x + 1} = x^2 - x + 2 + \frac{2x}{x^2 + x + 1}$.
As observed, since the remainder is not zero, the result is not solely a polynomial but a rational function.

---

### Practice Questions for You! 🧠

**Question 1:** Divide the polynomial $P(x) = 15x^5 - 10x^3 + 35x^2$ by the monomial $Q(x) = 5x^2$. Is the result a polynomial?

**Question 2:** Divide $A(x) = x^3 + 5x^2 + 6x + 2$ by $B(x) = x + 2$.

**Question 3:** What is the maximum possible degree of the remainder when a polynomial is divided by a divisor of degree 5?

---

### Solutions! ✨

**Solution 1:** Divide $P(x) = 15x^5 - 10x^3 + 35x^2$ by $Q(x) = 5x^2$.

When dividing by a **monomial** (a polynomial with a single term), you can simply divide each term of the dividend by the monomial separately:

$\frac{15x^5 - 10x^3 + 35x^2}{5x^2}$
$= \frac{15x^5}{5x^2} - \frac{10x^3}{5x^2} + \frac{35x^2}{5x^2}$
$= (15 \div 5)x^{5-2} - (10 \div 5)x^{3-2} + (35 \div 5)x^{2-2}$
$= 3x^3 - 2x^1 + 7x^0$
$= \mathbf{3x^3 - 2x + 7}$

**Result:** The quotient is $3x^3 - 2x + 7$, and the remainder is $\mathbf{0}$.
**Is the result a polynomial?** Yes, because the remainder is $0$.

---

**Solution 2:** Divide $A(x) = x^3 + 5x^2 + 6x + 2$ by $B(x) = x + 2$.

**Step 1: Arrange and Fill Gaps** 📝
Both polynomials are already in descending order, and there are no missing terms.

```
                  <-- Quotient (will go here)
        _________________
x + 2   | x³ + 5x² + 6x + 2
```

**First Iteration:**

*   **Step 2: Divide Leading Terms** ➗
    ($x^3 \div x = x^2$).
*   **Step 3: Multiply and Subtract** ✖️➖
    ($x^2 \times (x + 2) = x^3 + 2x^2$)

```
        x²
      _________________
x + 2   | x³ + 5x² + 6x + 2
       -(x³ + 2x²)
       _________________
             3x² + 6x + 2   <-- New Dividend
```

*   **Step 4: Bring Down and Repeat** 🔁
    The degree of $3x^2 + 6x + 2$ (which is 2) is greater than or equal to the degree of $x + 2$ (which is 1). So, we repeat.

**Second Iteration:**

*   **Step 2: Divide Leading Terms** ➗
    ($3x^2 \div x = 3x$).
*   **Step 3: Multiply and Subtract** ✖️➖
    ($3x \times (x + 2) = 3x^2 + 6x$)

```
        x² + 3x
      _________________
x + 2   | x³ + 5x² + 6x + 2
       -(x³ + 2x²)
       _________________
             3x² + 6x + 2
           -(3x² + 6x)
           _____________
                     0x + 2   <-- New Dividend (or just 2)
```

*   **Step 4: Bring Down and Repeat** 🔁
    The degree of $2$ (which is 0) is less than the degree of $x + 2$ (which is 1). This means we have found our remainder.

**Final Answer:**
For $A(x) = x^3 + 5x^2 + 6x + 2$ and $B(x) = x + 2$:
The **Quotient** is $H(x) = \mathbf{x^2 + 3x}$.
The **Remainder** is $R(x) = \mathbf{2}$.

This means we can write: $\frac{x^3 + 5x^2 + 6x + 2}{x + 2} = x^2 + 3x + \frac{2}{x + 2}$.

---

**Solution 3:** What is the maximum possible degree of the remainder when a polynomial is divided by a divisor of degree 5?

As per the crucial conditions of polynomial division, the **degree of the remainder R(x) must always be strictly less than the degree of the divisor Q(x)**.

If the divisor has a degree of 5, then the remainder's degree must be less than 5.
Therefore, the **maximum possible degree of the remainder is 4**. ✅