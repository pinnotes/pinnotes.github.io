---
title: Mathematics Week 5 Graded Assignment
label: Week 5
weight: 5
categories:
- Mathematics Graded Assignment
---

---

**1. Function Identification via Graph (Figure M1W8A-8.1)**

*Question:*
A graph is shown in Figure M1W8A-8.1, ◦symbol signifies that the straight line does not touch the point and the -  symbol signifies that the line touches the point.
Choose the correct option.

- The graph cannot be a function, because it fails the vertical line test.
- The graph cannot be a function, because it passes the horizontal line test but fails the vertical line test.
- The graph can be a function, because it passes the vertical line test.
- The graph cannot be a function, because it passes the vertical line test but fails the horizontal line test.

*Solution:*
To check if the given graph represents a function, use the vertical line test. In Figure M1W8A-8.1, every vertical line crosses the graph only once (including both -  and ◦ as per definition). Therefore, the graph represents a function.

- Correct options:
    - The graph can be of a function, because it passes the vertical line test.
    - The graph fails the horizontal line test.
    - The graph represents the graph of neither even function nor odd function.
    - The given graph is not invertible in the given domain.
- Incorrect options:
    - The graph cannot be of a function, because it passes the vertical line test but fails the horizontal line test.
    - The graph cannot be of a function, because it fails the vertical line test.
    - The graph cannot be of a function, because it passes the horizontal line test but fails the vertical line test.
    - The graph fails the horizontal line test thus it can be an injective function.
    - The graph represents the graph of either even function or odd function.[^1]

---

**2. Injectivity of Power Functions (Figures M1W8AS-8.1 and M1W8AS-8.2)**

*Question:*
For \$ y = x^n \$, where \$ n \$ is a positive integer and \$ x \in \mathbb{R} \$, which of the following statement is true?

- For all values of n, y is not a one-to-one function.
- For all values of n, y is an injective function.
- y is not a function.
- If n is an even number, then y is not an injective function. If n is an odd number, then y is an injective function.

*Solution:*

- \$ y = x^n \$ is a function for all positive integers \$ n \$.
- If \$ n \$ is odd, the function is injective (passes the horizontal line test, see Figure M1W8AS-8.1).
- If \$ n \$ is even, the function is not injective (see Figure M1W8AS-8.2).
- Therefore, the correct option is: If n is even, not injective; if n is odd, injective.[^1]

---

**3. Algebraic Simplification**

*Question:*
If \$ 4m - n = 0 \$, then the value of

$$
\frac{16^m}{2^n} + \frac{27^n}{96^m}
$$

is

*Solution:*
Given \$ 4m - n = 0 \$,

$$
\frac{16^m}{2^n} + \frac{27^n}{96^m}
= (2^4)^m / 2^n + (3^3)^n / (2^5 \cdot 3)^m
= 2^{4m-n} + 3^{3n-6m}
= 2^0 + 3^0 = 1 + 1 = 2
$$

**Answer:** 2[^1]

---

**4. Radioactive Decay (Half-Life Calculation)**

*Question:*
Half-life of an element is the time required for half of a given sample of radioactive element to change to another element. The rate of change of concentration is calculated by the formula \$ A(t) = A_0 (1/2)^{t/\gamma} \$, where \$ \gamma \$ is the half-life.
If Radium has a half-life of 1600 years and the initial concentration is 100%, calculate the percentage of Radium after 2000 years.

- 35%
- 42%
- 19%
- 21%

*Solution:*

$$
A(2000) = 100 \times (1/2)^{2000/1600} = 100 \times (1/2)^{1.25} \approx 42\%
$$

**Answer:** 42%[^1]

---

**5. Domain of a Composite Function**

*Question:*
If \$ f(x) = (1 - x)^{1/2} \$ and \$ g(x) = 1 - x^2 \$, find the domain of the composite function \$ g \circ f \$.

- \$ \mathbb{R} \$
- \$ (-\infty, 1] \cap [-2, \infty) \cup (-\infty, -2) \$
- \$ [1, \infty) \$
- \$ \mathbb{R} \setminus (1, \infty) \$

*Solution:*

- Domain of \$ f(x) \$: \$ x \leq 1 \$ (\$ (-\infty, 1] \$)
- Domain of \$ g(x) \$: \$ \mathbb{R} \$, but range of \$ f(x) \$ is \$ [0, \infty) \$
- So, domain of \$ g \circ f \$ is \$ (-\infty, 1] \$ (options 2 and 4 are correct)[^1]

---

**6. Domain of the Inverse Function**

*Question:*
Find the domain of the inverse function of \$ y = x^3 + 1 \$.

- \$ \mathbb{R} \$
- \$ \mathbb{R} \setminus \{1\} \$
- \$ [1, \infty) \$
- \$ \mathbb{R} \setminus [1, \infty) \$

*Solution:*
The range of \$ y = x^3 + 1 \$ is \$ \mathbb{R} \$, so the domain of its inverse is also \$ \mathbb{R} \$.
**Answer:** \$ \mathbb{R} \$[^1]

---

**7. Intersection Points of a Function and Its Inverse**

*Question:*
If \$ f(x) = x^3 \$, then which of the following is the set of points where the graphs of \$ f(x) \$ and \$ f^{-1}(x) \$ intersect?

- {(-1, 1), (0, 0), (1, -1)}
- {(-2, -8), (1, 1), (2, 8)}
- {(-1, -1), (0, 0), (1, 1)}
- {(-2, -8), (0, 0), (2, 8)}

*Solution:*
Solve \$ x^3 = x \Rightarrow x(x^2 - 1) = 0 \Rightarrow x = -1, 0, 1 \$.
So, intersection points are {(-1, -1), (0, 0), (1, 1)}[^1]

---

**8. Population Growth Prediction**

*Question:*
In a survey, population growth is given by \$ \alpha(T) = \alpha_0 (1 + d/100)^T \$. If in 2015, the population of Adyar was 30,000 and the growth rate is 4% per year, what will be the approximate population in 2020?

- 60251
- 71255
- 91000
- 36500

*Solution:*
\$ T = 5 \$, \$ \alpha(5) = 30000 \times (1.04)^5 \approx 36500 \$[^1]

---

**9. Reflection of a Function Across \$ y = x \$ (Figure M1W8AS-8.3)**

*Question:*
An ant moves along \$ f(x) = x^2 + 1 \$ for \$ x \in [0, \infty) \$. A mirror is placed along \$ y = x \$. If the reflection moves along \$ g(x) \$, which is/are correct?

- \$ g(x) = f^{-1}(x) \$
- \$ g(x) = f(x) \$
- \$ g(x) = \sqrt{x-1} \$
- \$ g(x) = \sqrt{x+1} \$

*Solution:*
The reflection is the inverse function, so \$ g(x) = f^{-1}(x) = \sqrt{x-1} \$.
Correct options: 1 and 3[^1]

---

**10. Festival Discount Offers (Applied Math)**

*Question:*
A textile shop offers:
D1: Shop for more than ₹14,999 and pay only ₹9,999.
D2: Avail 30% discount on the total payable amount.
If Shalini buys two dresses, each over ₹8,000, and can use both offers, which is/are correct?

- The minimum amount she should pay after applying two offers cannot be determined because the exact values are unknown.
- The minimum amount she should pay after applying both offers is approximately ₹6,999.
- The amount after D2 only is approximately ₹11,199.
- The amount after D1 only is approximately ₹9,999.
- If total is ₹17,999, to pay minimum, avail D1 first, then D2.
- If total is ₹17,999, availing D2 first, then D1 is not possible.
- If total is ₹17,999, to pay minimum, avail D2 first, then D1.

*Solution:*

- If D1 first, then D2: ₹9,999 × 0.7 = ₹6,999 (minimum).
- If D2 first, amount may fall below ₹14,999, so D1 may not be applicable.
- D1 only: ₹9,999.
- D2 only: ₹17,999 × 0.7 = ₹12,599 (if total is ₹17,999).
- So, correct: 2, 4, 5, 6[^1]

---

**11. Injectivity and Function Operations**

*Question:*
If \$ f(x) = x^2 \$ and \$ h(x) = x-1 \$, which options are incorrect?

- \$ f \circ h \$ is not injective.
- \$ f \circ h \$ is injective.
- \$ f(f(h(x))) \times h(x) = (x-1)^4 \$
- \$ f(f(h(x))) \times h(x) = (x-1)^5 \$

*Solution:*

- \$ f \circ h = (x-1)^2 \$ is not injective.
- \$ f(f(h(x))) \times h(x) = ((x-1)^2)^2 \times (x-1) = (x-1)^5 \$.
- So, incorrect: 2 and 3[^1]

---

**12. Graphical Properties and Inverses (Figure 3)**

*Question:*
Let \$ f(x), g(x), p(x), q(x) \$ be functions defined on \$ \mathbb{R} \$. Refer Figure 3 (A and B) and choose correct options:

- \$ g(x) \$ may be the inverse of \$ f(x) \$.
- \$ p(x) \$ and \$ q(x) \$ are even functions but \$ f(x) \$ and \$ g(x) \$ are neither even nor odd.
- \$ q(x) \$ could not be the inverse function of \$ p(x) \$.
- \$ p(x), q(x) \$ can be even degree polynomials and \$ f(x) \$ can be an odd degree polynomial.

*Solution:*

- \$ f(x) \$ and \$ g(x) \$ are symmetric across \$ y = x \$, so \$ g(x) \$ may be inverse of \$ f(x) \$.
- \$ p(x) \$ and \$ q(x) \$ are symmetric about the y-axis, so they are even functions.
- \$ q(x) \$ is not symmetric across \$ y = x \$, so cannot be inverse of \$ p(x) \$.
- End behaviors suggest \$ p(x), q(x) \$ can be even degree polynomials, \$ f(x) \$ can be odd degree.
- All options (a), (b), (c), (d) are correct[^1]

---

**Note:** For all questions involving graphs, the referenced figures (e.g., Figure M1W8A-8.1, M1W8AS-8.1, etc.) are described in the solutions, but the actual images are not included in this text extraction. The reasoning is based on their descriptions in the PDF.[^1]

<div style="text-align: center">⁂</div>

[^1]: week-5.pdf

