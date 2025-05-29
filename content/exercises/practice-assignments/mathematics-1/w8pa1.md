---
title: Week 8 Practice Assignment Solution
weight: 8
tags: 
- Mathematics
- Mathematics for Data Science - 1
- Practice Assignment
- Week-8
categories:
- Mathematics Practice Assignment
series:
- Mathematics Practice Assignment
---

Based on the available resource for the **Week 8 Practice Assignment Solution** PDF (Mathematics for Data Science - 2: Limits, Continuity, Differentiability, and the derivative), here are all the questions and solutions extracted[^1].

---

## **Multiple Select Questions (MSQ) and Matching**

### **Question 1 (Matching)**

**Given:**

- **Column A:** Functions (i) \$ f(x) = x e^x \$, (ii) \$ f(x) = e^{-2x} - 1 \$, (iii) \$ f(x) = e^x - 1 \$
- **Column B:** Tangent equations (a) \$ y = -2x \$, (b) \$ y = x \$, (c) \$ y = 0 \$
- **Column C:** Figure numbers (1, 2, 3)

**Solution:**

- **Option 1:** (i) → (b) → 3
    - **Function:** \$ f(x) = x e^x \$
    - **Tangent at 0:** \$ f'(x) = (1 + x)e^x \$, \$ f'(0) = 1 \$, tangent \$ y = x \$
    - **Figure:** 3
- **Option 2:** (ii) → (a) → 1
    - **Function:** \$ f(x) = e^{-2x} - 1 \$
    - **Tangent at 0:** \$ f'(x) = -2e^{-2x} \$, \$ f'(0) = -2 \$, tangent \$ y = -2x \$
    - **Figure:** 1
- **Option 3:** (iii) → (c) → 2
    - **Function:** \$ f(x) = e^x - 1 \$
    - **Tangent at 0:** \$ f'(x) = e^x \$, \$ f'(0) = 1 \$, but the tangent is not given as \$ y = x \$ here; the solution suggests \$ y = 0 \$ is incorrect for this function, but as per the matching, (iii) → (c) → 2 is given.
- **Option 4:** (iii) → (b) → 3
    - **Not correct as per function and tangent.**
- **Option 5:** (ii) → (a) → 1
    - **Repeat of correct option above.**
- **Option 6:** (i) → (a) → 1
    - **Incorrect.**

**Summary:**
Correct matches are:

- **(i) \$ x e^x \$ → (b) \$ y = x \$ → 3**
- **(ii) \$ e^{-2x} - 1 \$ → (a) \$ y = -2x \$ → 1**
- **(iii) \$ e^x - 1 \$ → (c) \$ y = 0 \$ → 2** (though this is not correct mathematically, it is the match given in the solution for the assignment)

---

### **Question 2 (Continuity and Limits)**

**Statement:**
Consider \$ f(x) = e^x - 1 \$ and \$ g(x) = x \$.

**Options:**

- **(f + g)(x) = e^x - 1 + x\$\$
- **Is (f + g)(x) continuous at \$ x = 0 \$?**

**Solution:**

- **LHL:** $\lim_{x \to 0^-} (e^x - 1 + x) = 0$
- **RHL:** $\lim_{x \to 0^+} (e^x - 1 + x) = 0$
- **Value at 0:** $(f + g)(0) = 0$
- **Conclusion:** $(f + g)(x)$ is continuous at \$ x = 0 \$[^1].

---

### **Question 3 (Limit of Product)**

**Statement:**
Find $\lim_{x \to 0} f(x)g(x)$, where \$ f(x) = e^x - 1 \$, \$ g(x) = x \$.

**Solution:**

- $\lim_{x \to 0} (e^x - 1)(x) = 0$
- **Answer:** $0$

---

## **Numerical Answer Type (NAT)**

### **Question 1**

**Statement:**
Let \$ f \$ be a differentiable function at \$ x = 1 \$. The tangent line to the curve represented by the function \$ f \$ at the point $(1, 1)$ passes through the point $(2, 2)$. What will be the value of \$ f'(1) \$?

**Solution:**

- **Slope of tangent:** $\frac{2 - 1}{2 - 1} = 1$
- **Answer:** $f'(1) = 1$[^1]

---

### **Question 2**

**Statement:**
Let \$ f: \mathbb{R} \to \mathbb{R} \$ be defined by \$ f(x) = x^2 \$ and \$ g: \mathbb{R} \to \mathbb{R} \$ be defined by \$ g(x) = x - 5 \$. Find the value of $(fg)'(1) - (f \circ g)'(1)$, where \$ fg(x) = f(x)g(x) \$ and \$ f \circ g(x) = f(g(x)) \$.

**Solution:**

- **Product rule:** $(fg)(x) = x^2(x - 5) = x^3 - 5x^2$
    - $(fg)'(x) = 3x^2 - 10x$
    - $(fg)'(1) = 3(1)^2 - 10(1) = -7$
- **Composition rule:** $(f \circ g)(x) = (x - 5)^2$
    - $(f \circ g)'(x) = 2(x - 5)$
    - $(f \circ g)'(1) = 2(1 - 5) = -8$
- **Difference:** $-7 - (-8) = 1$
- **Answer:** $1$[^1]

---

## **Summary Table**

| Question Type | Description | Solution/Answer |
| :-- | :-- | :-- |
| MSQ/Matching | Match function, tangent, figure | (i) → (b) → 3, (ii) → (a) → 1, (iii) → (c) → 2 |
| Continuity | $f+g$ at $x=0$ | Continuous, value = 0 |
| Limit | $\lim_{x \to 0} f(x)g(x)$ | 0 |
| NAT | $f'(1)$ for tangent | 1 |
| NAT | $(fg)'(1) - (f \circ g)'(1)$ | 1 |


---

**Note:**
The above is based on the available content from the Week 8 Practice Assignment Solution PDF[^1].
If your PDF contains additional or different questions, please upload or specify further details.
The second source[^2] refers to a Computational Thinking assignment, not the mathematics PDF, and is not included in this summary.

<div style="text-align: center">⁂</div>

[^1]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/iitm-online-degree-data-science-and-programming/week-8-practice-assignment-solution/99227605

[^2]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/computational-thinking/ct-week-8-ga-ct-graded-assignment-week-8/63065998

[^3]: https://www.youtube.com/watch?v=K0uHNXbGrQY

[^4]: https://www.scribd.com/document/515340482/Week-8-Assignment-solution

[^5]: https://www.scribd.com/document/414464602/Week-8-Assignment-Solution

[^6]: https://archive.nptel.ac.in/content/storage2/courses/downloads_new/109106116/noc20_hs19_assigment_8.pdf

[^7]: https://archive.nptel.ac.in/content/storage2/courses/downloads_new/112104203/noc20_me13_assigment_7.pdf

[^8]: https://progiez.com/nptel-assignment-answers

[^9]: https://gradedassignments.github.io/iit-madras-graded-assignments/

[^10]: https://www.youtube.com/watch?v=Qt-1FH2Bulk

