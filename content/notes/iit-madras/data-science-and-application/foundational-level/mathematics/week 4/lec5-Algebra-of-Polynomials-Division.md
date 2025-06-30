---
title: Polynomials
date: 2025-05-08
weight: 41
---

Right then! We've mastered the art of adding and subtracting polynomials, and last time, we unravelled the secrets of multiplication. Now, let's tackle the final frontier of polynomial algebra: **Division!** ➗ It's a bit like long division with numbers, but with variables thrown into the mix. Don't worry, we'll make it as easy as pie (polynomial pie, of course! 🥧).

### What is Polynomial Division? 🤔

Just like when you divide numbers (e.g., $10 \div 3$ gives $3$ with a remainder of $1$), polynomial division involves splitting one polynomial (the **dividend**) by another (the **divisor**) to find a **quotient** and a **remainder**.

The fundamental relationship in division is:
**Dividend = Quotient × Divisor + Remainder**

The main goal is to break down a complex polynomial into simpler parts. Crucially, unlike addition, subtraction, or multiplication, the result of dividing two polynomials **will not always be another polynomial**.

### Key Terminology to Remember 📚

*   **Dividend (P(x))**: The polynomial being divided (the numerator).
*   **Divisor (Q(x))**: The polynomial that divides the dividend (the denominator).
*   **Quotient (H(x))**: The result of the division, much like the '3' in $10 \div 3$.
*   **Remainder (R(x))**: The polynomial left over after the division, like the '1' in $10 \div 3$. The **degree of the remainder must always be strictly less than the degree of the divisor**.

### The Rules of the Game (Important Conditions!) 💡

When dividing polynomials, there's a vital condition regarding their degrees:
The **degree of the dividend must be greater than or equal to the degree of the divisor**.

*   If the degree of the dividend is *less than* the degree of the divisor, then the division (in terms of finding a polynomial quotient) isn't directly possible. In this scenario, the **quotient is the zero polynomial (0)**, and the **remainder is simply the dividend itself**. For example, you can't really divide $4$ by $2x+1$ to get a polynomial result because $4$ has degree $0$ and $2x+1$ has degree $1$.

### Step-by-Step: The Division Algorithm (Long Division) 👷‍♀️

This is the most common method for polynomial division. It systematically finds the quotient and remainder.

Here are the steps involved, often called the **Division Algorithm**:

1.  **Arrange and Fill Gaps** 📏: Arrange the terms of both the dividend and the divisor in **descending order of their degrees**. If any powers of the variable are missing in the dividend, add them with a **coefficient of zero** as a placeholder (e.g., $x^4 + 2x^2 + 3x + 2$ should be thought of as $x^4 + 0x^3 + 2x^2 + 3x + 2$).
2.  **Divide Leading Terms** ➗: Divide the **first term (leading monomial)** of the current dividend by the **first term (leading monomial)** of the divisor. This result is the next term of your quotient.
3.  **Multiply and Subtract** ✖️➖: Multiply the term you just found in the quotient (from Step 2) by the *entire* divisor. Write this product below the current dividend, aligning like terms. Then, **subtract** this product from the current dividend.
4.  **Repeat or Terminate** 🔁🛑: Look at the resulting polynomial after subtraction (this is your new "dividend").
    *   If its **degree is still greater than or equal to the degree of the divisor**, then repeat from **Step 2** with this new polynomial as your dividend.
    *   If its **degree is less than the degree of the divisor**, then this polynomial is your **remainder (R(x))**, and the process stops.

### Let's Work Through an Example! 🚶‍♀️

Let's divide $P(x) = x^4 + 2x^2 + 3x + 2$ by $Q(x) = x^2 + x + 1$.

**Step 1: Arrange and Fill Gaps**
$P(x) = x^4 + 0x^3 + 2x^2 + 3x + 2$
$Q(x) = x^2 + x + 1$

```
        x² - x + 2          <-- Quotient (H(x))
      _________________
x²+x+1 | x⁴ + 0x³ + 2x² + 3x + 2   <-- Dividend (P(x))
```

**Step 2: Divide Leading Terms** ($x^4 / x^2 = x^2$)
**Step 3: Multiply and Subtract** ($x^2 \times (x^2 + x + 1) = x^4 + x^3 + x^2$)
```
        x²
      _________________
x²+x+1 | x⁴ + 0x³ + 2x² + 3x + 2
       -(x⁴ + x³ + x²)
       _________________
             -x³ + x² + 3x + 2   <-- New Dividend
```

**Step 4: Repeat (Degree of -x³ is 3, which is >= Degree of x² (2))**

**Step 2: Divide Leading Terms** ($-x^3 / x^2 = -x$)
**Step 3: Multiply and Subtract** ($-x \times (x^2 + x + 1) = -x^3 - x^2 - x$)
```
        x² - x
      _________________
x²+x+1 | x⁴ + 0x³ + 2x² + 3x + 2
       -(x⁴ + x³ + x²)
       _________________
             -x³ + x² + 3x + 2
           -(-x³ - x² - x)
           _________________
                   2x² + 4x + 2   <-- New Dividend
```

**Step 4: Repeat (Degree of 2x² is 2, which is >= Degree of x² (2))**

**Step 2: Divide Leading Terms** ($2x^2 / x^2 = 2$)
**Step 3: Multiply and Subtract** ($2 \times (x^2 + x + 1) = 2x^2 + 2x + 2$)
```
        x² - x + 2
      _________________
x²+x+1 | x⁴ + 0x³ + 2x² + 3x + 2
       -(x⁴ + x³ + x²)
       _________________
             -x³ + x² + 3x + 2
           -(-x³ - x² - x)
           _________________
                   2x² + 4x + 2
                 -(2x² + 2x + 2)
                 _________________
                         2x       <-- Remainder (R(x))
```

**Step 4: Terminate (Degree of 2x is 1, which is < Degree of x² (2))**

So, for $P(x) = x^4 + 2x^2 + 3x + 2$ and $Q(x) = x^2 + x + 1$:
The **Quotient** is $H(x) = x^2 - x + 2$.
The **Remainder** is $R(x) = 2x$.

This means that $\frac{x^4 + 2x^2 + 3x + 2}{x^2 + x + 1} = x^2 - x + 2 + \frac{2x}{x^2 + x + 1}$. As you can see, the result is not purely a polynomial, because of the remainder term. This highlights that polynomial division doesn't always yield another polynomial.

If the remainder is $0$, it means the divisor is a **factor** of the dividend.

---

### Practice Questions! 📝

**Question 1:** Divide the polynomial $P(x) = 15x^5 - 10x^3 + 35x^2$ by the monomial $Q(x) = 5x^2$. Is the result a polynomial?

**Question 2:** Divide $A(x) = x^3 + 5x^2 + 6x + 2$ by $B(x) = x + 2$.

**Question 3:** What is the maximum possible degree of the remainder when a polynomial is divided by a divisor of degree 5?

---

### Solutions to Practice Questions ✅

**Solution 1:** Divide $P(x) = 15x^5 - 10x^3 + 35x^2$ by $Q(x) = 5x^2$.

When dividing by a monomial, you can divide each term of the dividend by the monomial individually:
$\frac{15x^5}{5x^2} - \frac{10x^3}{5x^2} + \frac{35x^2}{5x^2}$
$= (15/5)x^{5-2} - (10/5)x^{3-2} + (35/5)x^{2-2}$
$= 3x^3 - 2x^1 + 7x^0$
$= 3x^3 - 2x + 7$

**Result:** The quotient is $3x^3 - 2x + 7$, and the remainder is $0$.
**Is it a polynomial?** Yes, because the remainder is $0$. This is also an example of how multiplication is the reverse of division, as we saw $2x^3 \times (x^2 + x + 1) = 2x^5 + 2x^4 + 2x^3$ (from our previous conversation).

**Solution 2:** Divide $A(x) = x^3 + 5x^2 + 6x + 2$ by $B(x) = x + 2$.

**Step 1: Arrange and Fill Gaps** (No missing terms here!)
```
        x² + 3x + 0          <-- Quotient (H(x))
      _________________
x+2   | x³ + 5x² + 6x + 2   <-- Dividend (A(x))
```

**Step 2: Divide Leading Terms** ($x^3 / x = x^2$)
**Step 3: Multiply and Subtract** ($x^2 \times (x + 2) = x^3 + 2x^2$)
```
        x²
      _________________
x+2   | x³ + 5x² + 6x + 2
       -(x³ + 2x²)
       _________________
             3x² + 6x + 2    <-- New Dividend
```

**Step 4: Repeat (Degree of 3x² is 2, which is >= Degree of x (1))**

**Step 2: Divide Leading Terms** ($3x^2 / x = 3x$)
**Step 3: Multiply and Subtract** ($3x \times (x + 2) = 3x^2 + 6x$)
```
        x² + 3x
      _________________
x+2   | x³ + 5x² + 6x + 2
       -(x³ + 2x²)
       _________________
             3x² + 6x + 2
           -(3x² + 6x)
           _____________
                     0x + 2  <-- New Dividend (just 2)
```

**Step 4: Terminate (Degree of 2 is 0, which is < Degree of x (1))**

So, for $A(x) = x^3 + 5x^2 + 6x + 2$ and $B(x) = x + 2$:
The **Quotient** is $H(x) = x^2 + 3x$.
The **Remainder** is $R(x) = 2$.

This means $\frac{x^3 + 5x^2 + 6x + 2}{x + 2} = x^2 + 3x + \frac{2}{x + 2}$.

**Solution 3:** What is the maximum possible degree of the remainder when a polynomial is divided by a divisor of degree 5?

The degree of the remainder $R(x)$ must always be **strictly less than** the degree of the divisor $Q(x)$.
If the divisor has a degree of 5, then the remainder's degree must be less than 5.
Therefore, the **maximum possible degree of the remainder is 4**. ✅