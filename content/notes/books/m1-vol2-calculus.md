---
title: M1_VOL2_CALCULUS.pdf
date: 2025-05-08
math: true
tags:
  - Notes 
excludeSearch: false
weight: 1


---


<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# explain all concepts from this pdf with detailed structure , examples, related questions \& answers with ease to understand

Below is a **structured, detailed, and easy-to-understand** explanation of all major concepts from the PDF “M1_VOL2_CALCULUS.pdf,” including definitions, examples, related questions, and answers[^1].

---

## 1. Limits and Continuity

### **1.1 Introduction**

- **Concept:** Calculus builds on real numbers, sets, functions, and operations. It introduces limits and continuity to understand behavior at points and infinity.
- **Example:** In school, you learned about real numbers and functions like \$ f(x) = x^2 \$.


### **1.2 What is a Function?**

- **Definition:** A function \$ f: A \to B \$ assigns exactly one output in \$ B \$ for every input in \$ A \$.
- **Domain:** Input set \$ A \$.
- **Codomain:** Output set \$ B \$.
- **Range:** Actual output values \$ \{f(a) \mid a \in A\} \$.
- **Example:** \$ f(x) = x^2 \$ is a function from \$ \mathbb{R} \$ to \$ \mathbb{R} \$.
- **Counterexample:** \$ R = \{(1,a), (2,b), (3,a), (1,b)\} \$ is not a function because 1 maps to both \$ a \$ and \$ b \$.


#### **Graph of Functions**

- **Definition:** Graph of \$ f \$ is \$ \{(x, f(x)) \mid x \in domain\} \$.
- **Example:** For \$ f(x) = 7x+2 \$, graph is all points \$ (x, 7x+2) \$.


#### **Types of Functions**

- **Linear:** \$ f(x) = ax + b \$
- **Quadratic:** \$ f(x) = ax^2 + bx + c \$
- **Polynomial:** \$ f(x) = a_nx^n + ··· + a_0 \$
- **Exponential:** \$ f(x) = a^x \$
- **Logarithmic:** \$ f(x) = \log_a x \$
- **Trigonometric:** \$ \sin x, \cos x, \tan x \$
- **Step functions:** Floor \$ \lfloor x \rfloor \$, Ceiling \$ \lceil x \rceil \$, Absolute \$ |x| \$
- **Examples:**
    - Floor in $[-1,2]$: \$ \lfloor x \rfloor = -1 \$ for $-1 \leq x < 0$, $0$ for $0 \leq x < 1$, $1$ for $1 \leq x < 2$.
    - Absolute: \$ |x| = x \$ if \$ x \geq 0 \$, $-x$ if \$ x < 0 \$.


#### **Bounded Function**

- **Definition:** \$ f \$ is bounded if \$ m \leq f(x) \leq M \$ for all \$ x \$.
- **Example:** \$ f(x) = \frac{1}{x^2+1} \$ is bounded ($0 \leq f(x) \leq 1$).
- **Counterexample:** \$ f(x) = \frac{1}{x} \$ on \$ (0, \infty) \$ is unbounded.


#### **Monotonicity**

- **Increasing:** If \$ x \leq y \implies f(x) \leq f(y) \$.
- **Decreasing:** If \$ x \leq y \implies f(x) \geq f(y) \$.
- **Example:** \$ f(x) = x^2 \$ is increasing on $[0, \infty)$.
- **Example:** \$ f(x) = 7-4x \$ is decreasing on \$ \mathbb{R} \$.
- **Example:** \$ f(x) = |x| \$ is neither increasing nor decreasing on \$ \mathbb{R} \$.


#### **Arithmetic Operations on Functions**

- **Sum:** \$ (f+g)(x) = f(x) + g(x) \$
- **Difference:** \$ (f-g)(x) = f(x) - g(x) \$
- **Product:** \$ (fg)(x) = f(x)g(x) \$
- **Quotient:** \$ (f/g)(x) = f(x)/g(x) \$ (if \$ g(x) \neq 0 \$)
- **Example:** If \$ f(x) = x^3 + 5x + 1 \$, \$ g(x) = 3x^2 + 2x + 5 \$, then \$ (f-g)(x) = x^3 - 3x^2 + 3x - 4 \$.


#### **Composition of Functions**

- **Definition:** \$ (g \circ f)(x) = g(f(x)) \$.
- **Example:** If \$ f(x) = x^2 \$, \$ g(x) = 3x^3 + 2x \$, then \$ (g \circ f)(x) = 3x^6 + 2x^2 \$.
- **Question:** If \$ f(x) = \frac{x}{x+a} \$, \$ f(f(x)) = \frac{x}{3x+4} \$, find \$ a \$.
- **Answer:** \$ a = 2 \$.


### **1.3 Curve and Tangent**

- **Curve:** Path of a moving point.
- **Tangent:** Line touching curve at a point, representing instantaneous direction.
- **Example:** Graph of \$ f(x) = x^2 \$ is a curve. At point \$ (a, a^2) \$, tangent is unique.
- **Example:** Floor function \$ f(x) = \lfloor x \rfloor \$ is not a curve (has jumps).
- **Question:** Is tangent possible for \$ f(x) = \lfloor x \rfloor \$ at \$ x=2 \$ and \$ x=3.5 \$?
- **Answer:** No tangent at \$ x=2 \$ (jump), tangent is \$ y=3 \$ at \$ x=3.5 \$.


### **1.4 Sequence and Limit of Sequence**

- **Sequence:** Function \$ f: \mathbb{N} \to \mathbb{R} \$, denoted \$ \{a_n\} \$.
- **Limit of Sequence:** \$ \lim_{n \to \infty} a_n = L \$ if \$ a_n \$ gets arbitrarily close to \$ L \$ as \$ n \$ increases.
- **Example:** \$ a_n = 1 - \frac{1}{n^2} \$ converges to 1.
- **Example:** \$ a_n = n \$ diverges.
- **Example:** \$ a_n = (-1)^n \$ diverges (oscillates).
- **Example:** \$ a_n = \frac{n+1}{n} \$ converges to 1.


#### **Subsequence**

- **Definition:** A sequence formed by selecting terms from another sequence in order.
- **Example:** For \$ a_n = 5n^2 + 1 \$, subsequence \$ b_n = a_{2n} = 5(2n)^2 + 1 \$.


#### **Tools for Limits**

- **Sum/Difference:** \$ \lim (a_n \pm b_n) = \lim a_n \pm \lim b_n \$
- **Product:** \$ \lim (a_n b_n) = \lim a_n \cdot \lim b_n \$
- **Quotient:** \$ \lim (a_n / b_n) = \lim a_n / \lim b_n \$ (if \$ \lim b_n \neq 0 \$)
- **Sandwich Principle:** If \$ a_n \leq c_n \leq b_n \$ and \$ \lim a_n = \lim b_n = L \$, then \$ \lim c_n = L \$.
- **Example:** \$ c_n = \frac{\sin n}{n} \rightarrow 0 \$ (since \$ -\frac{1}{n} \leq \frac{\sin n}{n} \leq \frac{1}{n} \$).


#### **Important Theorems**

- **If \$ \lim a_n = L \$, then \$ \lim \frac{a_1 + ··· + a_n}{n} = L \$.**
- **If \$ \lim \frac{a_{n+1}}{a_n} = \ell \$, then:**
    - If \$ |\ell| < 1 \$, \$ \lim a_n = 0 \$.
    - If \$ \ell > 1 \$, \$ \lim a_n = \infty \$.


#### **Exercises**

- **Q5:** \$ a_n = \frac{5+3\sqrt{n}}{\sqrt{n}} \rightarrow 3 \$
- **Q6:** \$ a_n = 5^{1/n} \rightarrow 1 \$
- **Q7:** \$ a_n = \left(\frac{1}{2}\right)^n \rightarrow 0 \$
- **Q8:** \$ a_n = \frac{(-1)^n}{2n} \rightarrow 0 \$
- **Q9:** If \$ b_n \rightarrow 1 \$, \$ c_n \rightarrow \infty \$, then \$ \frac{b_n}{c_n} \rightarrow 0 \$


### **1.5 Limit of Function**

- **Definition:** \$ \lim_{x \to a} f(x) = L \$ if \$ f(x) \$ gets close to \$ L \$ as \$ x \$ approaches \$ a \$.
- **Left/Right Limits:** \$ \lim_{x \to a^-} f(x) \$, \$ \lim_{x \to a^+} f(x) \$
- **Example:** \$ \lim_{x \to 1} x^2 = 1 \$
- **Example:** \$ \lim_{x \to -1} \lfloor x \rfloor \$ does not exist (left limit is -2, right limit is -1).
- **Example:** \$ f(x) = 1 \$ if \$ x \$ is rational, \$ 0 \$ otherwise. \$ \lim_{x \to \sqrt{2}} f(x) \$ does not exist.


#### **Limit at Infinity**

- **Definition:** \$ \lim_{x \to \infty} f(x) = L \$ if \$ f(x) \$ approaches \$ L \$ as \$ x \$ becomes very large.
- **Example:** \$ \lim_{x \to \infty} \frac{1}{x} = 0 \$


#### **Algebra of Limits**

- **Sum/Difference:** \$ \lim (f \pm g) = \lim f \pm \lim g \$
- **Product:** \$ \lim (f \cdot g) = \lim f \cdot \lim g \$
- **Quotient:** \$ \lim (f/g) = \lim f / \lim g \$ (if \$ \lim g \neq 0 \$)
- **Example:** \$ \lim_{x \to 2} (5x+9) = 19 \$
- **Example:** \$ \lim_{x \to -3} x^4 = 81 \$
- **Example:** \$ \lim_{x \to 5} \frac{25}{x^2} = 1 \$


#### **Sandwich Theorem**

- **If \$ f(x) \leq h(x) \leq g(x) \$ and \$ \lim_{x \to a} f(x) = \lim_{x \to a} g(x) = L \$, then \$ \lim_{x \to a} h(x) = L \$.**
- **Example:** \$ \lim_{x \to 0} x^2 \sin(1/x) = 0 \$
- **Example:** \$ \lim_{x \to 0} \frac{\sin x}{x} = 1 \$
- **Example:** \$ \lim_{x \to 0} \frac{\tan x}{x} = 1 \$
- **Example:** \$ \lim_{x \to 0} \frac{1-\cos x}{x^2} = \frac{1}{2} \$


### **1.6 Continuity**

- **Definition:** \$ f \$ is continuous at \$ a \$ if \$ \lim_{x \to a} f(x) = f(a) \$.
- **Example:** \$ f(x) = |x| \$ is continuous at \$ x=0 \$.
- **Example:** \$ f(x) = \lfloor x \rfloor \$ is not continuous at integers.
- **Piecewise Example:** \$ f(x) = $$
\begin{cases} x+1 & -4 \leq x < 2 \\ x^2-4 & 2 \leq x \leq 3 \end{cases}
$$ \$ is not continuous at \$ x=2 \$.


#### **Theorems on Continuity**

- **Sum/Difference/Product/Quotient:** If \$ f \$ and \$ g \$ are continuous at \$ a \$, so are \$ f \pm g \$, \$ f \cdot g \$, \$ f/g \$ (if \$ g(a) \neq 0 \$).
- **Composition:** If \$ g \$ is continuous at \$ a \$ and \$ f \$ is continuous at \$ g(a) \$, then \$ f \circ g \$ is continuous at \$ a \$.


#### **Exercises**

- **Q11:** \$ f(x) = $$
\begin{cases} 1 & x \geq 0 \\ -1 & x < 0 \end{cases}
$$ \$
    - **Right limit at 0:** \$ \lim_{x \to 0^+} f(x) = 1 \$
    - **Left limit at 0:** \$ \lim_{x \to 0^-} f(x) = -1 \$
    - **Limit at 0 does not exist.**
- **Q12:**
    - \$ \lim_{x \to \infty} \frac{1}{x} = 0 \$ (Option 1)
    - \$ \lim_{x \to \infty} \frac{x^2}{1+x} = \infty \$
    - \$ \lim_{x \to -\infty} \frac{1+x}{x^2} = 0 \$ (Option 3)
    - \$ \lim_{x \to \infty} \frac{1+x+x^2}{5x^2+1} = \frac{1}{5} \$ (Option 4)
- **Q14:**
    - \$ \lim_{x \to -1} \frac{x^2-6x-7}{x^2+3x+2} = \lim_{x \to -1} \frac{(x+1)(x-7)}{(x+1)(x+2)} = \lim_{x \to -1} \frac{x-7}{x+2} = -8 \$ (Option 1)
    - \$ \lim_{x \to 0} \frac{x^2-6x-7}{x^2+3x+2} = \frac{-7}{2} \$
    - \$ \lim_{x \to 3} \frac{x^2-6x+9}{x-3} = \lim_{x \to 3} (x-3) = 0 \$

---

## 2. Differentiation

### **2.1 Differentiability and the Derivative**

- **Definition:** \$ f \$ is differentiable at \$ a \$ if \$ \lim_{h \to 0} \frac{f(a+h)-f(a)}{h} \$ exists.
- **Example:** \$ f(x) = x \$ is differentiable everywhere, derivative is 1.
- **Example:** \$ f(x) = \sin x \$ is differentiable at 0, derivative is 1.
- **Example:** \$ f(x) = |x| \$ is not differentiable at 0 (left and right derivatives differ).
- **Example:** \$ f(x) = x^{1/3} \$ is not differentiable at 0 (derivative tends to infinity).
- **Example:** \$ f(x) = \lfloor x \rfloor \$ is not differentiable at integers.


#### **Relation to Continuity**

- **Theorem:** If \$ f \$ is differentiable at \$ a \$, then \$ f \$ is continuous at \$ a \$.
- **Example:** \$ f(x) = \lfloor x \rfloor \$ is not continuous at integers, so not differentiable.


#### **Derivative Rules**

- **Sum/Difference:** \$ (f \pm g)' = f' \pm g' \$
- **Product:** \$ (fg)' = f'g + fg' \$
- **Quotient:** \$ (f/g)' = \frac{f'g - fg'}{g^2} \$
- **Chain Rule:** \$ (f(g(x)))' = f'(g(x))g'(x) \$
- **Example:** \$ f(x) = x^2 \$, \$ f'(x) = 2x \$
- **Example:** \$ f(x) = \sin x \$, \$ f'(x) = \cos x \$
- **Example:** \$ f(x) = e^x \$, \$ f'(x) = e^x \$
- **Example:** \$ f(x) = \ln x \$, \$ f'(x) = 1/x \$


#### **Exercises**

- **Q27:** \$ f(x) = 5x \$, derivative at \$ x=2 \$ is 5.
- **Q28:**
    - \$ f(x) = a \$ (constant), derivative is 0.
    - \$ f(x) = x - c \$, derivative is 1.
    - \$ f(x) = x^2 \$, derivative at \$ c \$ is \$ 2c \$.
    - \$ f(x) = e^x \$, derivative at \$ c \$ is \$ e^c \$.
- **Q29:** Check graphs for continuity and differentiability.
- **Q30:**
    - If \$ \lim_{h \to 0} \frac{f(a+h)-f(a)}{h} \$ exists, \$ f \$ is differentiable at \$ a \$.
    - If \$ f \$ is differentiable at \$ a \$, it is continuous at \$ a \$.
    - There exist continuous functions not differentiable at some points (e.g., \$ |x| \$ at 0).


### **2.2 Indeterminate Limits and L'Hôpital's Rule**

- **Indeterminate Form:** \$ \frac{0}{0} \$ or \$ \frac{\infty}{\infty} \$.
- **L'Hôpital's Rule:** If \$ \lim_{x \to a} \frac{f(x)}{g(x)} \$ is indeterminate, and \$ f' \$, \$ g' \$ exist near \$ a \$, then \$ \lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)} \$.
- **Example:** \$ \lim_{x \to 0} \frac{\log(1+x)}{x} = 1 \$
- **Example:** \$ \lim_{x \to 0} \frac{\sin x}{x} = 1 \$
- **Example:** \$ \lim_{x \to \infty} \frac{a+be^x}{c+de^x} = \frac{b}{d} \$
- **Example:** \$ \lim_{x \to 0} \frac{1-\cos x}{x^2} = \frac{1}{2} \$


#### **Exercises**

- **Q40:** \$ f(x) = \sqrt{9-x^2} \$, \$ \lim_{x \to 1} \frac{f(x)-f(1)}{x-1} = -\frac{1}{2\sqrt{2}} \$, \$ \sqrt{8} \times \$ this is $-1$.
- **Q42:** \$ \lim_{x \to \infty} x e^{-x} = 0 \$


### **2.3 Tangents and Linear Approximation**

- **Tangent Line:** \$ y = f'(a)(x-a) + f(a) \$
- **Linear Approximation:** \$ L(x) = f(a) + f'(a)(x-a) \$
- **Example:** \$ f(x) = \cos x \$, tangent at \$ x=\pi/3 \$: \$ y = -\frac{\sqrt{3}}{2}(x-\pi/3) + \frac{1}{2} \$
- **Example:** \$ f(x) = x^3 \$, linear approximation at 1: \$ L(x) = 3x-2 \$


#### **Exercises**

- **Q44:** \$ f(x) = 4x^2 \$, tangent at \$ x=2 \$: \$ y = 16x - 16 \$
- **Q45:** \$ f(x) = 2x+5 \$, linear approximation at 0: \$ L(x) = 2x+5 \$
- **Q46:** Tangent at \$ (1,0) \$, passes through \$ (5,8) \$, slope \$ f'(1) = 2 \$
- **Q47:** \$ f(x) = x^3 + 3x \$, slopes at \$ x=-1,0,1 \$: \$ m_1 + m_2 + m_3 = 15 \$
- **Q48:** Same as Q46, \$ f'(1) = 2 \$
- **Q49:** Tangent at \$ (1, f(1)) \$ is \$ y=3x+2 \$, so \$ f(1) = 5 \$


### **2.4 Finding Critical Points: Applications**

- **Critical Point:** \$ f'(a) = 0 \$ or \$ f \$ not differentiable at \$ a \$.
- **Local Max/Min:** Use second derivative test:
    - \$ f''(a) > 0 \$: local min
    - \$ f''(a) < 0 \$: local max
    - \$ f''(a) = 0 \$: test fails (saddle or inflection)
- **Example:** \$ f(x) = x^3 - 12x \$, critical points at \$ x=2 \$ (local min), \$ x=-2 \$ (local max)
- **Example:** \$ f(x) = \cos x \$, critical points at \$ x=k\pi \$, local max at even \$ k \$, local min at odd \$ k \$
- **Example:** \$ f(x) = x^3 + x^2 - x + 5 \$, critical points at \$ x=-1 \$ (local max), \$ x=1/3 \$ (local min)


#### **Global Max/Min**

- **Definition:** Maximum/minimum value of \$ f \$ over an interval.
- **Example:** \$ f(x) = x^2 \$ on $[-1,1]$, global min at \$ x=0 \$, global max at \$ x=-1 \$ and \$ x=1 \$.


#### **Exercises**

- **Q51:** \$ f(x) = \frac{1}{3}x^3 - x^2 + x \$, only one critical point at \$ x=1 \$, second derivative test inconclusive (saddle point).
- **Q52:** \$ f(x) = $$
\begin{cases} -x^2 + 2x + 3 & 0 \leq x \leq 50 \\ x^3 + 3 & -50 \leq x < 0 \end{cases}
$$ \$
    - \$ x=1 \$ is local max.
    - \$ x=-50 \$ is global min.
    - \$ x=50 \$ is not global min.
- **Q53:** At local min \$ x=2 \$, slope \$ f'(2) = 0 \$. At local max \$ x=5 \$, slope \$ f'(5) = 0 \$.
- **Q56:** Minimum of \$ (x-\alpha)(x-\beta) \$ at \$ x = \frac{\alpha+\beta}{2} \$.
- **Q57:** Max of \$ 2xy \$ when \$ x+y=50 \$: \$ 1250 \$.

---

## 3. Integration

### **3.1 Introduction**

- **Concept:** Integration is used to compute areas under curves, volumes, and more.
- **Example:** Area of rectangle is \$ lb \$.


### **3.2 Computing Areas**

- **Area of Parallelogram:** \$ bh \$
- **Area of Triangle:** \$ \frac{1}{2}bh \$
- **Area of Trapezium:** \$ \frac{1}{2}(a+b)h \$
- **Area of Circle:** \$ \pi r^2 \$ (using limits or integration)


#### **Exercises**

- **Q65:** Area of trapezium \$ ACDB \$: \$ 6 \$ sq units
- **Q66:** Sequence of circles, radius \$ r_n = \frac{2n-1}{2n+2} \$, area of biggest circle \$ \leq \pi \$, smallest circle \$ \frac{\pi}{16} \$


### **3.3 Riemann Sums and the Integral**

- **Partition:** Divide interval $[a,b]$ into subintervals.
- **Riemann Sum:** \$ S(P) = \sum_{i=1}^n f(x_i^*) \Delta x_i \$
- **Definite Integral:** \$ \int_a^b f(x) dx = \lim_{||P|| \to 0} S(P) \$
- **Example:** \$ \int_1^2 (2x-1) dx = 2 \$


#### **Exercises**

- **Q70:** For \$ f(x) = x \$ on $[^5]$, Riemann sum with \$ x_i^* = x_i \$: \$ \frac{25(n+1)}{2n} \$
- **Q71:** \$ \int_0^2 (3x+1) dx = 8 \$


### **3.5 Anti-derivatives (Indefinite Integrals)**

- **Definition:** \$ F \$ is anti-derivative of \$ f \$ if \$ F'(x) = f(x) \$.
- **Fundamental Theorem of Calculus:** \$ \int_a^b f(x) dx = F(b) - F(a) \$
- **Integration Rules:**
    - \$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \$ (\$ n \neq -1 \$)
    - \$ \int \sin x dx = -\cos x + C \$
    - \$ \int e^x dx = e^x + C \$
    - \$ \int \frac{1}{x} dx = \ln|x| + C \$


#### **Integration by Parts**

- **Formula:** \$ \int f(x)g(x) dx = f(x) \int g(x) dx - \int f'(x) (\int g(x) dx) dx \$
- **Example:** \$ \int x^2 2^x dx = \frac{x^2 2^x}{\ln 2} - \frac{x 2^{x+1}}{(\ln 2)^2} + \frac{2^{x+1}}{(\ln 2)^3} + C \$


#### **Integration by Substitution**

- **Formula:** \$ \int f(g(x))g'(x) dx = \int f(u) du \$ where \$ u = g(x) \$
- **Example:** \$ \int \sin(5x) dx = -\frac{1}{5} \cos(5x) + C \$


#### **Basic Properties of Definite Integrals**

- **Linearity:** \$ \int (cf + dg) = c \int f + d \int g \$
- **Additivity:** \$ \int_a^b f = \int_a^c f + \int_c^b f \$
- **Improper Integrals:** \$ \int_a^\infty f(x) dx = \lim_{b \to \infty} \int_a^b f(x) dx \$
- **Example:** \$ \int_1^\infty e^{-x} dx = \frac{1}{e} \$


#### **Piecewise Defined Functions**

- **Example:** \$ f(x) = $$
\begin{cases} x & 0 \leq x \leq 1 \\ 3-x & 1 < x \leq 2 \end{cases}
$$ \$, \$ \int_0^2 f(x) dx = 2 \$


#### **Exercises**

- **Q75:** \$ \int_2^3 x^2 dx = \frac{19}{3} \$
- **Q76:** \$ \int_1^2 (3x^2 + \frac{1}{x}) dx = 7 + \ln 2 \$
- **Q77:**
    - \$ \int_2^3 x^2 dx = \frac{19}{3} \$
    - \$ \int_1^2 \frac{1}{x} dx = \ln 2 \$
    - \$ \int_0^{\pi/3} \tan x \sec x dx = 1 \$
    - \$ \int_0^2 \frac{1}{\sqrt{4-x^2}} dx = \frac{\pi}{2} \$
- **Q78:**
    - \$ \int_1^\infty e^{-x} dx = \frac{1}{e} \$
    - \$ \int_1^\infty \frac{1}{x} dx \$ does not exist
- **Q81:** Area between \$ 3x^2 \$ and \$ 4-x^2 \$: \$ 3A = 16 \$

---

## **Summary Table**

| Concept | Key Points \& Formulas | Example/Question | Answer/Explanation |
| :-- | :-- | :-- | :-- |
| Function | \$ f: A \to B \$, domain, codomain, range | \$ f(x) = x^2 \$, \$ R = \{(1,a), (2,b), (3,a), (1,b)\} \$ | \$ R \$ is not a function |
| Bounded Function | \$ m \leq f(x) \leq M \$ | \$ f(x) = \frac{1}{x^2+1} \$ | Bounded |
| Monotonicity | Increasing/Decreasing | \$ f(x) = x^2 \$ on $[0,\infty)$ | Increasing |
| Composition | \$ (g \circ f)(x) = g(f(x)) \$ | \$ f(x) = x^2 \$, \$ g(x) = 3x^3 + 2x \$ | \$ (g \circ f)(x) = 3x^6 + 2x^2 \$ |
| Sequence Limit | \$ \lim_{n \to \infty} a_n = L \$ | \$ a_n = \frac{n+1}{n} \$ | 1 |
| Function Limit | \$ \lim_{x \to a} f(x) = L \$ | \$ \lim_{x \to 1} x^2 = 1 \$ | 1 |
| Continuity | \$ \lim_{x \to a} f(x) = f(a) \$ | \$ f(x) = | x |
| Differentiability | \$ f'(a) = \lim_{h \to 0} \frac{f(a+h)-f(a)}{h} \$ | \$ f(x) = | x |
| Derivative Rules | Sum, Product, Quotient, Chain | \$ (x^3)' = 3x^2 \$ | 3x² |
| L'Hôpital's Rule | \$ \lim \frac{f}{g} = \lim \frac{f'}{g'} \$ | \$ \lim_{x \to 0} \frac{\sin x}{x} \$ | 1 |
| Tangent Line | \$ y = f'(a)(x-a) + f(a) \$ | \$ f(x) = x^3 \$ at \$ x=1 \$ | \$ y = 3x - 2 \$ |
| Critical Points | \$ f'(a) = 0 \$ or not differentiable | \$ f(x) = x^3 - 12x \$ | \$ x=2 \$ (min), \$ x=-2 \$ (max) |
| Riemann Sum | \$ S(P) = \sum f(x_i^*) \Delta x_i \$ | \$ f(x) = x \$ on \$[^5] \$ | \$ \frac{25(n+1)}{2n} \$ |
| Definite Integral | \$ \int_a^b f(x) dx \$ | \$ \int_0^2 (3x+1) dx \$ | 8 |
| Anti-derivative | \$ F'(x) = f(x) \$ | \$ \int x^n dx = \frac{x^{n+1}}{n+1} \$ | \$ n \neq -1 \$ |
| Integration by Parts | \$ \int fg = f \int g - \int f' (\int g) \$ | \$ \int x^2 2^x dx \$ | See example |
| Integration by Substitution | \$ \int f(g(x))g'(x) dx = \int f(u) du \$ | \$ \int \sin(5x) dx \$ | \$ -\frac{1}{5} \cos(5x) \$ |


---

This structured approach covers **all major concepts** from the PDF with **definitions, examples, questions, and answers** for clarity and practice[^1].

<div style="text-align: center">⁂</div>

[^1]: M1_VOL2_CALCULUS.pdf

[^2]: https://math.emory.edu/~mpcarr/math210/book.pdf

[^3]: https://www.whitman.edu/mathematics/calculus/calculus.pdf

[^4]: https://study.iitm.ac.in/ds/course_pages/BSMA1001.html

[^5]: https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-of-data-science-fall-2015/5f0f7205d1cf274e80d77345a7edbf2a_MIT18_S096F15_TenLec.pdf

[^6]: https://people.math.wisc.edu/~angenent/Free-Lecture-Notes/free221.pdf

[^7]: https://courses.smp.uq.edu.au/MATH7501/2020/math7501.pdf

[^8]: https://people.math.ethz.ch/~abandeira/BandeiraSingerStrohmer-MDS-draft.pdf

[^9]: https://www.academia.edu/116516977/Mathematics_for_Data_Science

[^10]: https://slims.ahmaddahlan.ac.id/index.php?p=fstream-pdf\&fid=107\&bid=3332

