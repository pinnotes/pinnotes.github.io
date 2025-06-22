---
title: MATHEMATICS FOR DATA SCIENCE 1 - Sets and Functions
linktitle: Mathematics I 🔥
date: 2025-05-08
weight: 1
---


Here is a simplified and emoji-enhanced summary of the key study material from the PDF "MATHEMATICS FOR DATA SCIENCE 1: Sets and Functions" along with practice questions and detailed solutions to help you learn effectively. 📚✨

---

## 1. Set Theory \& Numbers 🔢

### Natural Numbers \& Integers

- Natural numbers (N): {0, 1, 2, 3, ...} — counting numbers including zero.
- Integers (Z): {..., -3, -2, -1, 0, 1, 2, 3, ...} — whole numbers including negatives.


### Arithmetic Operations ➕➖✖️➗

- Addition (+), Subtraction (-), Multiplication (×), Division (÷), Modulo (mod).
- Example: 10 mod 3 = 1 (remainder when 10 is divided by 3).


### Rational Numbers (Q) \& Greatest Common Divisor (gcd)

- Rational numbers: numbers expressed as p/q, where p,q ∈ integers.
- gcd is the largest positive integer dividing two numbers.
- Example: gcd(9,12) = 3.


### Real \& Irrational Numbers

- Real numbers include rationals and irrationals (cannot be expressed as p/q).
- Examples of irrationals: √2, π.


### Sets \& Subsets

- A set is a collection of distinct elements.
- Subset (X ⊆ Y): every element of X is in Y.
- Proper subset (X ⊂ Y): X is a subset but not equal to Y.


### Relations \& Functions

- Relation: subset of Cartesian product X × Y.
- Function: each element in X maps to exactly one element in Y.
- Types of functions:
    - Injective (one-to-one)
    - Surjective (onto)
    - Bijective (both)

---

### 1. Set Theory \& Numbers 🧠

{{< border >}}

#### Q1. Which of the following sets is a subset of Z (integers)?

**A**) {2, 4, 6}

**B**) {1/2, 3/2, 5/2}

**C**) {π, √2, 2}

**D**) {–3, 0, 7}

**Solution:**
A subset must have all its elements in the parent set. Z is the set of all integers.

- A: All elements are integers. ✅
- B: Contains fractions, not all integers. ❌
- C: Contains irrationals, not all integers. ❌
- D: All elements are integers. ✅

**Answer:** Both A and D are subsets of Z.

{{</ border >}}


{{< border >}}

#### Q2. Find the gcd of 18 and 24. 🤝

**Solution:**

- Factors of 18: 1, 2, 3, 6, 9, 18
- Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24
- Common factors: 1, 2, 3, 6
- Greatest: 6

**Answer:** gcd(18, 24) = 6

{{</ border >}}

{{< border >}}

#### Q3. 🌟 Which of the following is a rational number?

A) √2 B) 3/7 C) π D) 0.333...

**Solution:**

- B and D are rational (0.333... = 1/3).
- √2 and π are irrational.

**Answer:** B and D.
{{</ border >}}

{{< border >}}

#### Q4. 🧮 Find gcd(18, 24).

**Solution:**
18: 1, 2, 3, 6, 9, 18
24: 1, 2, 3, 4, 6, 8, 12, 24
Common: 1, 2, 3, 6
**gcd = 6**
{{</ border >}}

{{< border >}}

#### Q5. 🗂️ List all subsets of {a, b}.

**Solution:**
{}, {a}, {b}, {a, b}
{{</ border >}}


{{< border >}}

#### Q6. 🔗 Is the relation R = {(1,1), (2,2), (3,3), (1,2), (2,1)} on S = {1,2,3} symmetric?

**Solution:**
(1,2) ∈ R ⇒ (2,1) ∈ R. All such pairs exist.
**Yes, R is symmetric.**

{{</ border >}}


#### **Key Concepts**

- **Natural Numbers (N):** {0, 1, 2, 3, ...} 🧒
- **Integers (Z):** {..., -3, -2, -1, 0, 1, 2, ...} 🔢
- **Arithmetic Operations:** +, –, ×, ÷, mod ➕➖✖️➗
- **Factors:** a is a factor of b if b mod a = 0
- **Rational Numbers (Q):** Numbers of the form p/q, p, q ∈ Z, q ≠ 0 🧮
- **Greatest Common Divisor (gcd):** Largest integer dividing two numbers
- **Irrational Numbers:** Cannot be written as p/q (e.g., √2, π) 🌀
- **Real Numbers (R):** All rationals + irrationals 🌐
- **Sets:** Collection of well-defined items (e.g., {1, 2, 3}) 🗂️
- **Subsets:** X ⊆ Y if every element of X is in Y
- **Set Comprehension:** Building subsets using rules
- **Relations:** Subsets of Cartesian products (ordered pairs) 🔗
- **Properties of Relations:** Reflexive, symmetric, transitive, equivalence
- **Functions:** Special relations where each input has one output
    - *Injective* (one-to-one), *Surjective* (onto), *Bijective* (both)

---

## 2. Straight Lines 📏

### Cartesian Coordinates \& Distance

- Distance between points (x1,y1) and (x2,y2):

$$
\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$
- Section formula for dividing a segment in ratio m:n:

$$
x = \frac{mx_2 + nx_1}{m+n}, \quad y = \frac{my_2 + ny_1}{m+n}
$$


### Slope of a Line

- Slope $m = \frac{y_2 - y_1}{x_2 - x_1}$.
- Parallel lines: equal slopes.
- Perpendicular lines: product of slopes = -1.


### Equation Forms

- Slope-intercept: $y = mx + c$.
- Point-slope: $y - y_1 = m(x - x_1)$.
- Two-point form: $y - y_1 = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1)$.


### Distance from Point to Line

$$
d = \frac{|ax_1 + by_1 + c|}{\sqrt{a^2 + b^2}}
$$

---

### 2. Straight Lines 🧠

{{< border >}}

#### Q1. What is the distance between the points (3, 4) and (7, 1)? 📐

**Solution:**
Use the distance formula:

$$
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

$$
d = \sqrt{(7-3)^2 + (1-4)^2} = \sqrt{4^2 + (-3)^2} = \sqrt{16 + 9} = \sqrt{25} = 5
$$

**Answer:** 5 units
{{</ border >}}

{{< border >}}

#### Q2. Find the equation of the line passing through (1, 2) with slope 3. 📝

**Solution:**
Point-slope form: \$ y - y_1 = m(x - x_1) \$

$$
y - 2 = 3(x - 1) \implies y = 3x - 1
$$

**Answer:** \$ y = 3x - 1 \$
{{</ border >}}

{{< border >}}

#### Q3. 📏 Find the distance between (2,4) and (–4,12).

**Solution:**
\$ d = \sqrt{(-4-2)^2 + (12-4)^2} = \sqrt{36 + 64} = \sqrt{100} = 10 \$
{{</ border >}}

{{< border >}}

#### Q4. 🔺 Find the area of triangle with points (0,10), (–20,–30), (10,30).

**Solution:**
\$ \Delta = \frac{1}{2}|0((-30)-30) + (-20)(30-10) + 10(10-(-30))| \$
\$ = \frac{1}{2}|0 + (-20)(20) + 10(40)| = \frac{1}{2}|-400 + 400| = 0 \$
**Points are collinear.**
{{</ border >}}

{{< border >}}

#### Q5. 📝 Find the equation of the line through (1,2) with slope 3.

**Solution:**
\$ y - 2 = 3(x - 1) \implies y = 3x - 1 \$
{{</ border >}}

{{< border >}}

#### Q6. 📊 Calculate SSE for points (1,5), (2,6), (4,9), (9,18) with line y = 2x + 2.

**Solution:**
SSE = (5–4)² + (6–6)² + (9–10)² + (18–20)² = 1 + 0 + 1 + 4 = 6
{{</ border >}}

### **Key Concepts**

- **Cartesian Coordinates:** Points as (x, y) 📍
- **Distance Formula:**
\$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \$ 📏
- **Section Formula:** Dividing a line segment in ratio m:n
- **Area of Triangle:**
\$ \Delta = \frac{1}{2} |x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)| \$ 🔺
- **Slope (m):**
\$ m = \frac{y_2 - y_1}{x_2 - x_1} \$
- **Equation Forms:**
    - Slope-intercept: \$ y = mx + c \$
    - Point-slope: \$ y - y_1 = m(x - x_1) \$
    - Two-point: \$ y - y_1 = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1) \$
- **Parallel/Perpendicular:**
    - Parallel: Equal slopes
    - Perpendicular: Product of slopes = –1
- **Distance from Point to Line:**
\$ d = \frac{|ax_1 + by_1 + c|}{\sqrt{a^2 + b^2}} \$
- **Sum Squared Error (SSE):**
\$ SSE = \sum (y_i - (mx_i + c))^2 \$

---

## 3. Quadratic Functions \& Equations 📐

- Quadratic function: $f(x) = ax^2 + bx + c$, $a \neq 0$.
- Vertex: $\left(-\frac{b}{2a}, f\left(-\frac{b}{2a}\right)\right)$.
- Axis of symmetry: $x = -\frac{b}{2a}$.
- Parabolas open up if $a > 0$, down if $a < 0$.


### Solving Quadratic Equations

- By factoring
- By completing the square
- By quadratic formula:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

---

### Practice Questions 🧠

{{< border >}}

#### Q1. 🧮 Solve \$ x^2 + 2x = 24 \$ by factoring.

**Solution:**
\$ x^2 + 2x - 24 = 0 \$
\$ (x + 6)(x - 4) = 0 \$
\$ x = -6, 4 \$
{{</ border >}}

{{< border >}}

#### Q2. 📍 Find the vertex of \$ f(x) = 2x^2 - 8x + 3 \$.

**Solution:**
\$ x_v = -\frac{-8}{2 \times 2} = 2 \$
\$ y_v = 2(2)^2 - 8(2) + 3 = 8 - 16 + 3 = -5 \$
**Vertex: (2, –5)**
{{</ border >}}

{{< border >}}

#### Q3. 🧩 Solve \$ x^2 + 2x - 24 = 0 \$ using quadratic formula.

**Solution:**
\$ a = 1, b = 2, c = -24 \$
\$ x = \frac{-2 \pm \sqrt{4 + 96}}{2} = \frac{-2 \pm 10}{2} \$
\$ x = 4, -6 \$
{{</ border >}}


{{< border >}}
#### Q5. Solve the quadratic equation \$ x^2 - 5x + 6 = 0 \$ by factoring. 🧮

**Solution:**
Factor: \$ (x - 2)(x - 3) = 0 \$
So, \$ x = 2 \$ or \$ x = 3 \$

**Answer:** \$ x = 2, 3 \$
{{</ border >}}

{{< border >}}

#### Q6. Find the vertex of \$ f(x) = 2x^2 - 8x + 3 \$. 📍

**Solution:**
Vertex \$ x \$-coordinate: \$ x = -\frac{b}{2a} = -\frac{-8}{2 \times 2} = 2 \$
\$ y \$-coordinate: \$ f(2) = 2(2)^2 - 8(2) + 3 = 8 - 16 + 3 = -5 \$
Vertex: (2, –5)

**Answer:** (2, –5)
{{</ border >}}

### **Key Concepts**

- **Quadratic Function:** \$ f(x) = ax^2 + bx + c \$, \$ a \neq 0 \$ 📈
- **Parabola:** Graph of quadratic function
- **Axis of Symmetry:** \$ x = -\frac{b}{2a} \$
- **Vertex:** \$ \left(-\frac{b}{2a}, f(-\frac{b}{2a})\right) \$ 📍
- **Roots/Solutions:** Where \$ f(x) = 0 \$
- **Solving Methods:** Factoring, completing the square, quadratic formula:
\$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \$

---


## 4. Polynomial Functions ✍️

- Polynomial: sum of terms $a_n x^n + \cdots + a_0$.
- Degree: highest exponent.
- Types: monomial, binomial, trinomial.
- Operations: addition, subtraction, multiplication, division (long division).

---

### Practice Questions 🧠

{{< border >}}

#### Q1. ➕ Add \$ p(x) = x^3 + 3x^2 + 5x - 10 \$, \$ q(x) = 3x^3 + 5x^2 - 6x - 20 \$.

**Solution:**
\$ (1+3)x^3 + (3+5)x^2 + (5-6)x + (-10-20) = 4x^3 + 8x^2 - x - 30 \$
{{</ border >}}

{{< border >}}

#### Q2. ➗ Divide \$ x^3 - 2x^2 + 4x - 8 \$ by \$ x - 2 \$.

**Solution:**
\$ x - 2 \$ is a factor (since substituting x = 2 gives 0).
Quotient: \$ x^2 + 0x + 4 \$, remainder 0.
{{</ border >}}

{{< border >}}

#### Q3. 🔎 Find the zeroes of \$ f(x) = x^2 - 4 \$.

**Solution:**
\$ x^2 - 4 = 0 \implies x = 2, -2 \$
{{</ border >}}

{{< border >}}

#### Q7. Add the polynomials \$ p(x) = 2x^2 + 3x - 1 \$ and \$ q(x) = x^2 - x + 4 \$. ➕

**Solution:**

$$
p(x) + q(x) = (2x^2 + x^2) + (3x - x) + (-1 + 4) = 3x^2 + 2x + 3
$$

**Answer:** \$ 3x^2 + 2x + 3 \$
{{</ border >}}

{{< border >}}

#### Q8. Divide \$ x^3 - 2x^2 + 4x - 8 \$ by \$ x - 2 \$. ➗

**Solution:**
Use synthetic division or the remainder theorem:

- Substitute \$ x = 2 \$: \$ (2)^3 - 2(2)^2 + 4(2) - 8 = 8 - 8 + 8 - 8 = 0 \$
So, \$ x - 2 \$ is a factor.
Divide:

$$
x^3 - 2x^2 + 4x - 8 = (x - 2)(x^2 + 4)
$$

**Answer:** Quotient is \$ x^2 + 4 \$, remainder is 0.
{{</ border >}}

### **Key Concepts**

- **Polynomial:** Expression with terms \$ a_nx^n + ... + a_0 \$ ✍️
- **Degree:** Highest exponent
- **Types:** Monomial (1 term), binomial (2), trinomial (3)
- **Operations:** Addition, subtraction, multiplication, division
- **Zeroes:** Values where \$ f(x) = 0 \$


---

## 5. Exponential Functions \& Composition 🔥

- Exponential function: $f(x) = a^x$, $a > 0, a \neq 1$.
- Vertical Line Test: checks if a relation is a function.
- Horizontal Line Test: checks if a function is one-to-one.
- Composition: $(f \circ g)(x) = f(g(x))$.

{{< border >}}

#### Q1. ⚡ Solve \$ 2^x = 16 \$.

**Solution:**
\$ 16 = 2^4 \implies x = 4 \$
{{</ border >}}

{{< border >}}

#### Q2. 🔄 Find the inverse of \$ f(x) = 4x \$.

**Solution:**
Let \$ y = 4x \implies x = y/4 \$
Inverse: \$ f^{-1}(x) = x/4 \$
{{</ border >}}

{{< border >}}

#### Q9. Solve for \$ x \$: \$ 2^x = 16 \$. ⚡

**Solution:**
\$ 16 = 2^4 \$, so \$ 2^x = 2^4 \Rightarrow x = 4 \$

**Answer:** \$ x = 4 \$
{{</ border >}}

{{< border >}}

#### Q10. Solve for \$ x \$: \$ \log_3(x) = 2 \$. 🔑

**Solution:**

$$
x = 3^2 = 9
$$

**Answer:** \$ x = 9 \$
{{</ border >}}

{{< border >}}

#### Q11. Simplify \$ \log_2(8) + \log_2(4) \$. 🧩

**Solution:**
\$ \log_2(8) = 3 \$, \$ \log_2(4) = 2 \$
Sum: \$ 3 + 2 = 5 \$

**Answer:** 5
{{</ border >}}

{{< border >}}

#### Q12. Solve \$ \log_5(x - 1) + \log_5(x + 1) = 1 \$. 🔍

**Solution:**
Use the product rule:
\$ \log_5((x - 1)(x + 1)) = 1 \implies \log_5(x^2 - 1) = 1 \implies x^2 - 1 = 5^1 = 5 \implies x^2 = 6 \implies x = \pm \sqrt{6} \$
But for log to be defined, \$ x > 1 \$.
So, \$ x = \sqrt{6} \$ (approx 2.45)

**Answer:** \$ x = \sqrt{6} \$
{{</ border >}}

### **Key Concepts**

- **Exponential Function:** \$ f(x) = a^x \$, \$ a > 0, a \neq 1 \$ 📈
- **Laws of Exponents:**
    - \$ a^m \times a^n = a^{m+n} \$
    - \$ (a^m)^n = a^{mn} \$
- **Graph:** Always positive, increasing if \$ a > 1 \$, decreasing if \$ 0 < a < 1 \$
- **Composition:** \$ (f \circ g)(x) = f(g(x)) \$
- **Inverse Function:** Exists if function is one-to-one


---

## 6. Logarithmic Functions 🔑

- Logarithm is inverse of exponential: $y = \log_a x \iff x = a^y$.
- Domain: $x > 0$, Range: all real numbers.
- Properties:
    - $\log_a (MN) = \log_a M + \log_a N$
    - $\log_a \frac{M}{N} = \log_a M - \log_a N$
    - $\log_a M^r = r \log_a M$

---

### Practice Questions 🧠

{{< border >}}

#### Q1. 🔑 Solve \$ \log_3 x = 2 \$.

**Solution:**
\$ x = 3^2 = 9 \$
{{</ border >}}

{{< border >}}

#### Q2. 🧩 Simplify \$ \log_2 8 + \log_2 4 \$.

**Solution:**
\$ \log_2 8 = 3 \$, \$ \log_2 4 = 2 \$, so \$ 3 + 2 = 5 \$
{{</ border >}}

{{< border >}}

#### Q3. 🔍 Solve \$ \log_8(x+1) + \log_8(x-1) = 1 \$.

**Solution:**
\$ \log_8((x+1)(x-1)) = 1 \implies \log_8(x^2-1) = 1 \implies x^2-1 = 8 \implies x^2 = 9 \implies x = 3 \$ (since log not defined for negative arguments).
{{</ border >}}

{{< border >}}

#### Q4. 🚀 Solve \$ \log_2(x^2 - 4) = 3 \$.

**Solution:**
\$ x^2 - 4 = 2^3 = 8 \implies x^2 = 12 \implies x = \pm 2\sqrt{3} \$
Domain: \$ x^2 - 4 > 0 \implies x > 2 \$ or \$ x < -2 \$
**So, \$ x = 2\sqrt{3}, -2\sqrt{3} \$**
{{</ border >}}


{{< border >}}
#### Q13. If \$ f(x) = 2x + 3 \$ and \$ g(x) = x^2 \$, find \$ (f \circ g)(1) \$. 🔗

**Solution:**
\$ (f \circ g)(1) = f(g(1)) = f(1^2) = f(1) = 2(1) + 3 = 5 \$

**Answer:** 5
{{</ border >}}

{{< border >}}
#### Q14. If \$ f(x) = x + 1 \$, find its inverse. 🔁

**Solution:**
Let \$ y = x + 1 \implies x = y - 1 \$.
So, \$ f^{-1}(x) = x - 1 \$

**Answer:** \$ f^{-1}(x) = x - 1 \$
{{</ border >}}


## 7. Challenge Problem 🌟

#### Q15. Solve: \$ \log_2(x^2 - 4) = 3 \$. 🚀

**Solution:**
\$ x^2 - 4 = 2^3 = 8 \implies x^2 = 12 \implies x = \pm 2\sqrt{3} \$
But \$ x^2 - 4 > 0 \implies x > 2 \$ or \$ x < -2 \$.
So, both \$ x = 2\sqrt{3} \$ and \$ x = -2\sqrt{3} \$ are valid.

**Answer:** \$ x = 2\sqrt{3} \$ or \$ x = -2\sqrt{3} \$

### **Key Concepts**

- **Logarithm:** Inverse of exponential, \$ y = \log_a x \iff x = a^y \$ 🔑
- **Domain:** \$ x > 0 \$, Range: all real numbers
- **Laws:**
    - \$ \log_a(MN) = \log_a M + \log_a N \$
    - \$ \log_a(M/N) = \log_a M - \log_a N \$
    - \$ \log_a(M^r) = r \log_a M \$
- **Natural Logarithm:** \$ \ln x = \log_e x \$
- **Common Logarithm:** \$ \log_{10} x \$

---

## Practice Questions with Solutions 📝✨


### Q1: Find the distance between points (2,4) and (-4,12). 📐

**Solution:**

$$
\sqrt{(-4 - 2)^2 + (12 - 4)^2} = \sqrt{(-6)^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10
$$

---

### Q2: Solve quadratic equation $x^2 + 2x = 24$ by factoring. 🧮

**Solution:**

$$
x^2 + 2x - 24 = 0
$$

Factor:

$$
(x + 6)(x - 4) = 0
$$

Roots:

$$
x = -6, \quad x = 4
$$

---

### Q3: Add polynomials $p(x) = x^3 + 3x^2 + 5x - 10$ and $q(x) = 3x^3 + 5x^2 - 6x - 20$. ➕

**Solution:**

$$
p(x) + q(x) = (1+3)x^3 + (3+5)x^2 + (5 - 6)x + (-10 - 20) = 4x^3 + 8x^2 - x - 30
$$

---

### Q4: Find the inverse of $f(x) = 4x$ and verify if $g(x) = \frac{x}{4}$ is the inverse. 🔄

**Solution:**
Check compositions:

$$
(g \circ f)(x) = g(4x) = \frac{4x}{4} = x
$$

$$
(f \circ g)(x) = f\left(\frac{x}{4}\right) = 4 \times \frac{x}{4} = x
$$

Hence, $g$ is inverse of $f$.

---

### Q5: Solve $\log_8 (x+1) + \log_8 (x-1) = 1$. 🔍

**Solution:**

$$
\log_8 ((x+1)(x-1)) = 1 \implies \log_8 (x^2 - 1) = 1
$$

$$
x^2 - 1 = 8^1 = 8 \implies x^2 = 9 \implies x = \pm 3
$$

Check domain: $x > 1$, so $x = 3$ only.

---

### Q6: If $f(x) = 3x - 4$ and $g(x) = x^2$, find $(f \circ g)(x)$. 🎯

**Solution:**

$$
(f \circ g)(x) = f(g(x)) = f(x^2) = 3x^2 - 4
$$

---

### Q7: Calculate sum squared error (SSE) for points (1,5), (2,6), (4,9), (9,18) with line $y=2x+2$. 📊

**Solution:**

$$
SSE = \sum (y_i - (2x_i + 2))^2 = (5-4)^2 + (6-6)^2 + (9-10)^2 + (18-20)^2 = 1 + 0 + 1 + 4 = 6
$$

---

This summary covers essential concepts with emojis for easy understanding and practice questions with detailed solutions to reinforce learning. For more exercises and deeper understanding, refer to the full PDF. 📘✨

If you want, I can prepare more practice questions or detailed explanations on any specific topic! 😊

<div style="text-align: center">⁂</div>

[^1]: M1_VOL1_SETS-FUNCTIONS.pdf

