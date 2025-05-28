---
title: Mathematics Week 8 Graded Assignment
weight: 8
tags: 
- mathematics
categories:
- Mathematics Graded Assignment
series:
- Mathematics Graded Assignment
excludeSearch: false
width: wide
---

<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# extract all questions and solutions from this pdf

Here are all the questions and solutions extracted from the PDF "Week-8.pdf" for the assignment on Limits, Continuity, Differentiability, and Derivatives[^1].

---

## 1. Multiple Select Questions (MSQ)

**Question 1:**
Match the given functions in Column A with the equations of their tangents at the origin $(0,0)$ in column B and the plotted graphs and the tangents in Column C, given in Table M2W2G1.


|  | Function (Column A) | Tangent at $(0,0)$ (Column B) | Graph (Column C) |
| :-- | :-- | :-- | :-- |
| i) | $f(x)=x2^{x}$ | a) $y=-4x$ | 1) |
| ii) | $f(x)=x(x-2)(x+2)$ | b) $y=x$ | 2) |
| iii) | $f(x)=-x(x-2)(x+2)$ | c) $y=4x$ | 3) |

**Options:**
Option 1: ii) $\rightarrow$ a) $\rightarrow 1$
Option 2: i) $\rightarrow$ b) $\rightarrow 3$
Option 3: iii) $\rightarrow$ b) $\rightarrow 1$
Option 4: iii) $\rightarrow$ c) $\rightarrow 2$
Option 5: i) $\rightarrow$ a) $\rightarrow 1$

**Solution:**

- **i):** $f(x)=x2^{x}$, $f'(0)=1$ → tangent: $y=x$ → matches with b) and graph 3

**i) $\rightarrow$ b) $$
\rightarrow 3**  
- **ii):** $f(x)=x(x-2)(x+2)$, $f'(0)=-4$ → tangent: $y=-4x$ → matches with a) and graph 1  
**ii) $\rightarrow$ a)
$$\rightarrow 1**
- **iii):** $f(x)=-x(x-2)(x+2)$, $f'(0)=4$ → tangent: $y=4x$ → matches with c) and graph 2

**iii) $\rightarrow$ c) \$\$\rightarrow 2**

---

**Question 2:**
Consider the following two functions $f(x)$ and $g(x)$:

$$
f(x)= \begin{cases}
\frac{x^{3}-9x}{x(x-3)} & \text{if } x \neq 0,3 \\
3 & \text{if } x=0 \\
0 & \text{if } x=3
\end{cases}
$$

$$
g(x)= \begin{cases}
|x| & \text{if } x \leq 2 \\
\lfloor x \rfloor & \text{if } x>2
\end{cases}
$$

**Options:**
Option 1: $f(x)$ is discontinuous at both $x=0$ and $x=3$
Option 2: $f(x)$ is discontinuous only at $x=0$
Option 3: $f(x)$ is discontinuous only at $x=3$
Option 4: $g(x)$ is discontinuous at $x=2$
Option 5: $g(x)$ is discontinuous at $x=3$

**Solution:**

- **f(x):** Continuous at $x=0$, discontinuous at $x=3$ → **Option 3**
- **g(x):** Continuous at $x=2$, discontinuous at $x=3$ → **Option 5**

---

**Question 3:**
Consider the graphs given below (Curve 1, Curve 2, Curve 3, Curve 4).

**Options:**
Option 1: Curve 1 is both continuous and differentiable at the origin.
Option 2: Curve 2 is continuous but not differentiable at the origin.
Option 3: Curve 2 has derivative 0 at $x=0$.
Option 4: Curve 3 is continuous but not differentiable at the origin.
Option 5: Curve 4 is not differentiable anywhere.
Option 6: Curve 4 has derivative 0 at $x=0$.

**Solution:**

- **Curve 1:** Continuous and differentiable at origin → **Option 1**
- **Curve 2:** Continuous and differentiable at origin, derivative 0 → **Option 2, 3** (but note: Option 2 is false as per solution, but solution says Curve 2 is differentiable at origin with derivative 0. Likely only Option 3 is correct, but solution text is ambiguous. Most likely: **Option 3**.)
- **Curve 3:** Continuous but not differentiable at origin → **Option 4**
- **Curve 4:** Differentiable at $x=1$, not everywhere, but not differentiable at all points is false; option 5 is false. Option 6 is also false.
*Clarification: Based on solution, only Option 1 and Option 4 are correct, but solution text is unclear about Curve 2; likely Option 3 is also correct, but solution says Curve 2 is differentiable. User should verify with figure.*
*However, as per solution: Curve 2 is differentiable at origin with derivative 0, so Option 3 is correct. Option 2 is incorrect (since Curve 2 is differentiable at origin). Option 4 is correct.*

---

**Question 4:**
Consider the function:

$$
f(x)= \begin{cases}
\frac{\sin x}{x} & \text{if } x \neq 0 \\
1 & \text{if } x=0
\end{cases}
$$

**Options:**
Option 1: $f(x)$ is not continuous at $x=0$
Option 2: $f(x)$ is continuous at $x=0$
Option 3: $f(x)$ is not differentiable at $x=0$
Option 4: $f(x)$ is differentiable at $x=0$
Option 5: The derivative of $f(x)$ at $x=0$ (if exists) is 0
Option 6: The derivative of $f(x)$ at $x=0$ (if exists) is 1

**Solution:**

- **f(x):** Continuous at $x=0$ → **Option 2**
- **Differentiable at $x=0$, derivative is 0** → **Option 4, 5**

---

**Question 5:**
Let $f$ be a polynomial of degree 5:

$$
f(x)=a_{5}x^{5}+a_{4}x^{4}+a_{3}x^{3}+a_{2}x^{2}+a_{1}x+a_{0}
$$

Let $f'(b)$ denote the derivative of $f$ at $x=b$.

**Options:**
Option 1: $a_{1}=f'(0)$
Option 2: $5a_{5}+3a_{3}=\frac{1}{2}\left(f'(1)+f'(-1)-2f'(0)\right)$
Option 3: $4a_{4}+2a_{2}=\frac{1}{2}\left(f'(1)-f'(-1)\right)$
Option 4: None of the above

**Solution:**

- **Option 1:** $a_{1}=f'(0)$ → **True**
- **Option 2:** $5a_{5}+3a_{3}=\frac{1}{2}\left(f'(1)+f'(-1)-2f'(0)\right)$ → **True**
- **Option 3:** $4a_{4}+2a_{2}=\frac{1}{2}\left(f'(1)-f'(-1)\right)$ → **True**
- **Option 4:** **False**

---

## 2. Numerical Answer Type (NAT)

**Question 6:**
Let $f$ be a differentiable function at $x=3$. The tangent line to the graph of the function $f$ at the point $(3,0)$, passes through the point $(5,4)$. What will be the value of $f'(3)$?

**Solution:**
Slope of tangent = $\frac{4-0}{5-3}=2$.
**Answer:** $f'(3)=2$

---

**Question 7:**
Let $f$ and $g$ be two functions which are differentiable at each $x \in \mathbb{R}$. Suppose that, $f(x)=g(x^{2}+5x)$, and $f'(0)=10$. Find the value of $g'(0)$.

**Solution:**
$f'(x)=g'(x^{2}+5x)(2x+5)$
At $x=0$, $f'(0)=g'(0)\times5=10$
**Answer:** $g'(0)=2$

---

## 3. Comprehension Type Questions

**Question 8:**
Consider the following statements:

- **Statement P:** Both the functions $p(t)$ and $q(t)$ are continuous.
- **Statement Q:** $p(t)$ is continuous, but $q(t)$ is not.
- **Statement R:** $q(t)$ is continuous, but $p(t)$ is not.
- **Statement S:** Neither $p(t)$ nor $q(t)$ is continuous.

Given the functions:

$$
p(t)= \begin{cases}
\frac{t^{3}-27}{t-3} & \text{if } 0 \leq t < 3 \\
27 & t=3 \\
\frac{1}{e^{81}(t-3)}\left(e^{27t}-e^{81}\right) & \text{if } t>3
\end{cases}
$$

$$
q(t)= \begin{cases}
(5t-9)^{\frac{1}{t-2}} & \text{if } 0 \leq t < 2 \\
e^{4} & t=2 \\
\frac{e^{t+2}-e^{4}}{t-2} & \text{if } t>2
\end{cases}
$$

Find the number of the correct statements.

**Solution:**

- **p(t):** Continuous at $t=3$
- **q(t):** Not continuous at $t=2$ (left limit $e^5$, right limit $e^4$)
**Only Statement Q is correct.**
**Answer:** 1

---

**Question 9:**
If $L_p(t)=At+B$ denotes the best linear approximation of the function $p(t)$ at the point $t=1$, then find the value of $2A+B$.

**Solution:**
$p(t)=\frac{t^{3}-27}{t-3}$ for $0 \leq t < 3$
$p(1)=13$, $p'(1)=5$
Linear approximation: $L_p(t)=5t+8$
So, $A=5$, $B=8$
**Answer:** $2A+B=18$

---

**Question 10:**
If $L_q(t)=e^{4}(At+B)+Ce^{5}$ denotes the best linear approximation of the function $q(t)$ at the point $t=3$, then find the value of $A+B+C$.

**Solution:**
$q(3)=e^{5}-e^{4}$, $q'(3)=e^{4}$
Linear approximation: $L_q(t)=e^{4}(t-4)+e^{5}$
So, $A=1$, $B=-4$, $C=1$
**Answer:** $A+B+C=-2$

---

**Question 11:**
Consider a function $f: \mathbb{R} \rightarrow \mathbb{R}$ defined as:

$$
f(x)= \begin{cases}
\frac{\sin 14x + A \sin x}{19x^{3}} & \text{if } x \neq 0 \\
B & \text{if } x=0
\end{cases}
$$

If $f(x)$ is continuous at $x=0$, then find the value of $114B-A$.

**Solution:**
For continuity, $A=-14$
$B=\frac{-2730}{114}$
**Answer:** $114B-A=-2716$

---

**Question 12:**
The distance (in meters) traveled by a car after $t$ minutes is given by the function $d(t)=g(4t^{3}+2t^{2}+5t+2)$, where $g$ is a differentiable function with domain $\mathbb{R}$. Find the instantaneous speed of the car after 5 min, where $g'(577)=2$.

**Solution:**
$d'(t)=g'(4t^{3}+2t^{2}+5t+2)(12t^{2}+4t+5)$
At $t=5$, $d'(5)=g'(577)\times325=2\times325=650$
**Answer:** 650

---

**Question 13:**
Consider the functions:

$$
p(t)= \begin{cases}
\frac{2e^{(t-2)}-2}{t-2} & \text{if } 0 \leq t < 2 \\
2 & t=2 \\
2(t^{2}-4)^{\frac{1}{\ln(t-2)}} & \text{if } t>2
\end{cases}
$$

$$
q(t)=|t(t-7)(t-8)|
$$

**Statements:**
P: Both $p(t)$ and $q(t)$ are continuous
Q: Both are not differentiable
R: $p(t)$ is continuous, $q(t)$ is differentiable
S: $q(t)$ is continuous, $p(t)$ is not differentiable
T: Neither is continuous

Find the number of correct statements.

**Solution:**

- **p(t):** Not continuous at $t=2$
- **q(t):** Continuous, but not differentiable at $x=0,7,8$
**Only S is correct.**
**Answer:** 1

---

**Question 14:**
If linear function $L_p(t)=At+B$ denotes the best linear approximation of the function $p(t)$ at the point $t=1$, find the value of $\frac{-2}{e^{-1}-1}(A+B)$.

**Solution:**
$A+B=p(1)$
$p(1)=\frac{2e^{-1}-2}{-1}=2(1-e^{-1})$
$\frac{-2}{e^{-1}-1}(A+B)=4$
**Answer:** 4

---

**Question 15:**
Consider the function:

$$
q(t)=|t(t-7)(t-8)|
$$

If $m$ is slope of the tangent of the function $q(t)$ at point $t=\frac{3}{2}$, find the value $m-\frac{27}{4}$.

**Solution:**
For $0 \leq t < 7$, $q(t)=t(t-7)(t-8)$
$q'(t)=3t^{2}-30t+56$
$q'\left(\frac{3}{2}\right)=\frac{27}{4}-45+56=\frac{27}{4}+11$
But solution says $m-\frac{27}{4}=11$
**Answer:** 11

---

This covers all questions and solutions from the provided PDF[^1].

<div style="text-align: center">⁂</div>

[^1]: Week-8.pdf

