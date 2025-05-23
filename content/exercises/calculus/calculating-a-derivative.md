---
title: Calculating a Derivative by Definition
description: Suppose \$ f(x) = ax^2 + bx + c \$ (you can set \$ a=1, b=0, c=0 \$ for \$ f(x) = x^2 \$, but we’ll keep it general). $$ f(x + h) = a(x + h)^2 + b(x + h) + c = a(x^2 + 2xh + h^2) + b(x + h) + c $$ $$ = ax^2 + 2axh + ah^2 + bx + bh + c $$ $$ f(x) = ax^2 + bx + c $$
tags: 
- mathematics
categories:
- graded assignment
image: /images/tree.jpg
excludeSearch: false
width: wide
---

## **Step-by-Step: Calculating a Derivative by Definition**

Let’s use the **four-step process** for finding the derivative of a simple quadratic function, as this approach is both fundamental and widely used in calculus[^3][^4]. For this example, let’s use a general quadratic function, but if you want a specific example from the PDF, we’ll use the quadratic function \$ f(x) = x^2 \$ (which is used in the context of quadratic functions[^1]).

However, the PDF also discusses the slope of a quadratic function \$ f(x) = ax^2 + bx + c \$, mentioning that the slope at any point is \$ 2ax + b \$. Let’s see how this is derived using the definition.

---

### **Step 1: Write \$ f(x + h) \$ and \$ f(x) \$**

Suppose \$ f(x) = ax^2 + bx + c \$ (you can set \$ a=1, b=0, c=0 \$ for \$ f(x) = x^2 \$, but we’ll keep it general).

$$
f(x + h) = a(x + h)^2 + b(x + h) + c = a(x^2 + 2xh + h^2) + b(x + h) + c
$$

$$
= ax^2 + 2axh + ah^2 + bx + bh + c
$$

$$
f(x) = ax^2 + bx + c
$$

---

### **Step 2: Compute \$ f(x + h) - f(x) \$**

Subtract \$ f(x) \$ from \$ f(x + h) \$:

$$
f(x + h) - f(x) = (ax^2 + 2axh + ah^2 + bx + bh + c) - (ax^2 + bx + c)
$$

$$
= 2axh + ah^2 + bh
$$

$$
= h(2ax + ah + b)
$$

---

### **Step 3: Divide by \$ h \$**

$$
\frac{f(x + h) - f(x)}{h} = \frac{h(2ax + ah + b)}{h} = 2ax + ah + b
$$

---

### **Step 4: Take the limit as \$ h \to 0 \$**

$$
f'(x) = \lim_{h \to 0} (2ax + ah + b) = 2ax + b
$$

---

## **Summary Table**

| Step | Action | Expression/Result |
| :-- | :-- | :-- |
| 1 | Write \$ f(x + h) \$, \$ f(x) \$ | \$ f(x+h) = a(x+h)^2 + ··· \$ |
| 2 | Subtract \$ f(x) \$ from \$ f(x+h) \$ | \$ h(2ax + ah + b) \$ |
| 3 | Divide by \$ h \$ | \$ 2ax + ah + b \$ |
| 4 | Take the limit \$ h \to 0 \$ | \$ 2ax + b \$ |


---

## **Example from the PDF**

The PDF states (in Section 3.2):
> “For the quadratic function described as \$ f(x) = ax^2 + bx + c \$ where \$ a \neq 0 \$, the slope of \$ f \$ at any given point \$ (x, f(x)) \$ is \$ (2ax + b) \$.”

This matches exactly the result we derived above using the definition of the derivative[^1].

---

## **Quick Example: \$ f(x) = x^2 \$**

Let’s do the calculation for \$ f(x) = x^2 \$:

1. **Step 1:**
\$ f(x + h) = (x + h)^2 = x^2 + 2xh + h^2 \$
\$ f(x) = x^2 \$
2. **Step 2:**
\$ f(x + h) - f(x) = 2xh + h^2 \$
3. **Step 3:**
\$ \frac{f(x + h) - f(x)}{h} = \frac{2xh + h^2}{h} = 2x + h \$
4. **Step 4:**
\$ \lim_{h \to 0} (2x + h) = 2x \$

So, the derivative of \$ f(x) = x^2 \$ is \$ f'(x) = 2x \$, which matches the general result above (with \$ a=1, b=0 \$)[^1][^3].

---

## **Related Question**

**Q:** What is the slope of the quadratic function \$ f(x) = 3x^2 + 4x + 1 \$ at \$ x = 2 \$?

**A:**
Using the general result \$ f'(x) = 2ax + b \$,
\$ a = 3, b = 4 \$, so
\$ f'(x) = 6x + 4 \$.
At \$ x = 2 \$:
\$ f'(2) = 6 \times 2 + 4 = 16 \$.

---

## **Summary**

- **The derivative is the slope of the tangent to the curve at a point.**
- **Use the four-step process:**

1. Write \$ f(x + h) \$ and \$ f(x) \$.
2. Compute \$ f(x + h) - f(x) \$.
3. Divide by \$ h \$.
4. Take the limit as \$ h \to 0 \$.
- **For quadratic functions, the derivative is \$ 2ax + b \$.**

This method works for any differentiable function, and the PDF confirms this for quadratic functions[^1][^3].

<div style="text-align: center">⁂</div>

[^1]: M1_VOL1_SETS-FUNCTIONS.pdf

[^2]: https://www.whitman.edu/mathematics/calculus/calculus_03_Rules_for_Finding_Derivatives.pdf

[^3]: https://math.wvu.edu/~hlai2/Teaching/Tip-Pdf/Tip1-5.pdf

[^4]: https://faculty.ung.edu/jallagan/Courses materials/Math 1450 Calculus 1/Syllabus and ebook/problems and solutions for calculus 1.pdf

[^5]: https://www2.math.binghamton.edu/lib/exe/fetch.php/people/mckenzie/derivative_sections_in_bittinger.pdf

[^6]: https://tutorial.math.lamar.edu/pdf/calculus_cheat_sheet_derivatives.pdf

[^7]: https://ocw.mit.edu/ans7870/textbooks/Strang/Edited/Calculus/2.1-2.4.pdf

[^8]: https://mathguy.us/Handbooks/CalculusHandbook.pdf

[^9]: https://people.math.wisc.edu/~angenent/Free-Lecture-Notes/free221.pdf

[^10]: https://www.scribd.com/document/598700870/Calculus-Book

