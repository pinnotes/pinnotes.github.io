<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

## Detailed Explanation of Calculus Concepts from the PDF

This summary covers the key topics from the provided calculus PDF, including clear definitions, formulas, worked examples, diagrams, and practice problems with solutions.

---

## **1. Limits and Continuity**

### **What is a Function?**

A **function** is a special kind of relation where each input from a set (domain) has exactly one output in another set (codomain).

- **Notation:** \$ f: A \rightarrow B \$
- **Example:** \$ f(x) = x^2 \$, domain and codomain are both \$ \mathbb{R} \$.


#### **Types of Functions**

- **Linear:** \$ f(x) = ax + b \$
- **Quadratic:** \$ f(x) = ax^2 + bx + c \$
- **Polynomial:** \$ f(x) = a_nx^n + ··· + a_0 \$
- **Exponential:** \$ f(x) = a^x \$
- **Logarithmic:** \$ f(x) = \log_a(x) \$
- **Trigonometric:** \$ \sin x, \cos x, \tan x \$
- **Step Functions:** Floor (\$ \lfloor x \rfloor $), Ceiling ($ \lceil x \rceil \$)
- **Absolute Value:** \$ |x| \$


#### **Bounded Function**

A function \$ f \$ is **bounded** if there exist numbers \$ m \$ and \$ M \$ such that \$ m \leq f(x) \leq M \$ for all \$ x \$ in the domain.

#### **Monotonicity**

- **Increasing:** \$ f(x) \leq f(y) \$ for \$ x < y \$
- **Decreasing:** \$ f(x) \geq f(y) \$ for \$ x < y \$

---

### **Sequences and Their Limits**

A **sequence** is a function from the natural numbers to real numbers, \$ f: \mathbb{N} \rightarrow \mathbb{R} \$.

#### **Limit of a Sequence**

A sequence \$ \{a_n\} \$ has limit \$ a \$ if as \$ n \to \infty \$, \$ a_n \to a \$.

- **Convergent:** If limit exists.
- **Divergent:** If limit does not exist.

**Example:** \$ a_n = \frac{1}{n} \to 0 \$ as \$ n \to \infty \$.

#### **Subsequence**

A subsequence is a sequence formed by selecting terms from the original sequence in order.

#### **Sandwich (Squeeze) Principle**

If \$ a_n \leq c_n \leq b_n \$ and both \$ a_n \to L \$, \$ b_n \to L \$, then \$ c_n \to L \$.

---

### **Limit of a Function**

#### **Definition**

$$
\lim_{x \to a} f(x) = L
$$

if for every sequence \$ x_n \to a \$, \$ f(x_n) \to L \$.

#### **One-Sided Limits**

- **Left:** \$ \lim_{x \to a^-} f(x) \$
- **Right:** \$ \lim_{x \to a^+} f(x) \$


#### **Limit at Infinity**

$$
\lim_{x \to \infty} f(x) = L
$$

if \$ f(x) \$ approaches \$ L \$ as \$ x \$ grows large.

#### **Algebra of Limits**

- \$ \lim (f(x) + g(x)) = \lim f(x) + \lim g(x) \$
- \$ \lim (cf(x)) = c \lim f(x) \$
- \$ \lim (f(x)g(x)) = (\lim f(x))(\lim g(x)) \$
- \$ \lim \frac{f(x)}{g(x)} = \frac{\lim f(x)}{\lim g(x)} \$ if denominator nonzero


#### **Sandwich Theorem**

If \$ f(x) \leq h(x) \leq g(x) \$ and both \$ f(x), g(x) \to L \$, then \$ h(x) \to L \$.

---

### **Continuity**

#### **Definition**

A function \$ f \$ is **continuous at \$ a \$** if:

- \$ \lim_{x \to a} f(x) = f(a) \$


#### **Key Points**

- Continuity means no jump, break, or hole at \$ x = a \$.
- If \$ f \$ is differentiable at \$ a \$, then it is continuous at \$ a \$.

---

## **2. Differentiation**

### **Derivative Definition**

$$
f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}
$$

It measures the instantaneous rate of change of \$ f \$ at \$ a \$.

#### **Basic Derivatives**

| Function | Derivative |
| :-- | :-- |
| \$ x^n \$ | \$ n x^{n-1} \$ |
| \$ \sin(ax) \$ | \$ a\cos(ax) \$ |
| \$ \cos(ax) \$ | \$ -a\sin(ax) \$ |
| \$ e^{ax} \$ | \$ a e^{ax} \$ |
| \$ \ln(ax) \$ | \$ 1/x \$ |
| \$ \log_b(ax) \$ | \$ 1/(x\ln b) \$ |

#### **Rules**

- **Sum:** \$ (f+g)' = f' + g' \$
- **Product:** \$ (fg)' = f'g + fg' \$
- **Quotient:** \$ (f/g)' = \frac{f'g - fg'}{g^2} \$
- **Chain Rule:** \$ (f(g(x)))' = f'(g(x))g'(x) \$


#### **Geometric Meaning**

The derivative at a point gives the slope of the tangent to the curve at that point.

#### **Critical Points**

- Where \$ f'(x) = 0 \$ or \$ f'(x) \$ does not exist.
- Used to find local maxima, minima, and saddle points.


#### **Second Derivative Test**

- If \$ f''(c) > 0 \$, local minimum at \$ c \$.
- If \$ f''(c) < 0 \$, local maximum at \$ c \$.

---

### **L'Hôpital's Rule**

Used for evaluating indeterminate forms like \$ 0/0 \$ or \$ \infty/\infty \$:

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}
$$

if the right-side limit exists.

---

## **3. Integration**

### **Introduction**

Integration is the reverse process of differentiation and is used to compute areas, among other things.

---

### **Definite Integral**

$$
\int_a^b f(x) dx
$$

Represents the area under the curve \$ f(x) \$ from \$ x = a \$ to \$ x = b \$.

#### **Riemann Sums**

Approximates area under a curve by summing areas of rectangles:

$$
S(P) = \sum_{i=1}^n f(x_i^*) \Delta x_i
$$

where \$ \Delta x_i = x_i - x_{i-1} \$.

#### **Fundamental Theorem of Calculus**

If \$ F \$ is an antiderivative of \$ f \$, then:

$$
\int_a^b f(x) dx = F(b) - F(a)
$$

---

### **Indefinite Integral (Antiderivative)**

$$
\int f(x) dx = F(x) + C
$$

where \$ F'(x) = f(x) \$, \$ C \$ is the constant of integration.

#### **Common Integrals**

| Function | Integral |
| :-- | :-- |
| \$ x^n \$ | \$ \frac{x^{n+1}}{n+1} + C \$ |
| \$ \sin x \$ | \$ -\cos x + C \$ |
| \$ \cos x \$ | \$ \sin x + C \$ |
| \$ e^x \$ | \$ e^x + C \$ |
| \$ 1/x \$ | \$ \ln |


---

### **Integration Techniques**

#### **Integration by Parts**

$$
\int u \, dv = uv - \int v \, du
$$

#### **Substitution**

If \$ u = g(x) \$, then \$ du = g'(x) dx \$, so:

$$
\int f(g(x))g'(x) dx = \int f(u) du
$$

---

### **Area Between Curves**

$$
\text{Area} = \int_a^b [f(x) - g(x)] dx
$$

where \$ f(x) \geq g(x) \$ on $[a, b]$.

---

## **Practice Questions and Solutions**

### **1. Limits**

**Q:** Evaluate \$ \lim_{x \to 0} \frac{\sin x}{x} \$.

**A:** Using L'Hôpital's Rule:

$$
\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{\cos x}{1} = 1
$$

---

### **2. Differentiation**

**Q:** Find the derivative of \$ f(x) = x^3 + 2x^2 - x + 1 \$.

**A:**

$$
f'(x) = 3x^2 + 4x - 1
$$

---

### **3. Integration**

**Q:** Compute \$ \int_0^1 x^2 dx \$.

**A:**

$$
\int_0^1 x^2 dx = \left. \frac{x^3}{3} \right|_0^1 = \frac{1}{3} - 0 = \frac{1}{3}
$$

---

### **4. Critical Points**

**Q:** Find and classify the critical points of \$ f(x) = x^3 - 3x \$.

**A:**

$$
f'(x) = 3x^2 - 3 = 0 \implies x^2 = 1 \implies x = \pm 1
$$

- \$ f''(x) = 6x \$
- At \$ x = 1 \$: \$ f''(1) = 6 > 0 \$ (local min)
- At \$ x = -1 \$: \$ f''(-1) = -6 < 0 \$ (local max)

---

### **5. Area Under a Curve**

**Q:** Find the area between \$ f(x) = x^2 \$ and the x-axis from \$ x = -1 \$ to \$ x = 2 \$.

**A:**

$$
\int_{-1}^{2} x^2 dx = \left. \frac{x^3}{3} \right|_{-1}^{2} = \frac{8}{3} - \left(-\frac{1}{3}\right) = 3
$$

---

## **Figures and Diagrams**

- **Graph of \$ f(x) = x^2 \$:** A parabola opening upwards.
- **Tangent Line at a Point:** Touches the curve at exactly one point, slope equals derivative at that point.
- **Area Under Curve:** Shaded region between curve and x-axis.
- **Riemann Sums:** Rectangles under a curve approximating area.

---

## **Formula Sheet**

### **Limits**

- \$ \lim_{x \to a} f(x) \$
- Sandwich Theorem
- L'Hôpital's Rule


### **Derivatives**

- \$ (x^n)' = n x^{n-1} \$
- Chain, Product, Quotient Rules


### **Integrals**

- \$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \$
- \$ \int e^{ax} dx = \frac{1}{a} e^{ax} + C \$
- Integration by Parts and Substitution

---

## **Summary Table: Key Concepts**

| Concept | Definition/Formula | Example |
| :-- | :-- | :-- |
| Limit | \$ \lim_{x \to a} f(x) = L \$ | \$ \lim_{x \to 0} \sin x/x = 1 \$ |
| Derivative | \$ f'(x) = \lim_{h \to 0} \frac{f(x+h)-f(x)}{h} \$ | \$ (x^2)' = 2x \$ |
| Definite Integral | \$ \int_a^b f(x) dx \$ | \$ \int_0^1 x dx = 0.5 \$ |
| Indefinite Integral | \$ \int f(x) dx = F(x) + C \$ | \$ \int x dx = 0.5x^2 + C \$ |
| Chain Rule | \$ (f(g(x)))' = f'(g(x))g'(x) \$ | \$ (\sin(x^2))' = 2x\cos(x^2) \$ |
| Integration by Parts | \$ \int u dv = uv - \int v du \$ | \$ \int x e^x dx \$ |


---

## **Practice Problems**

1. **Evaluate:** \$ \lim_{x \to 2} \frac{x^2 - 4}{x-2} \$
2. **Differentiate:** \$ f(x) = \ln(x^2 + 1) \$
3. **Integrate:** \$ \int_0^{\pi} \sin x dx \$
4. **Find the tangent equation to \$ f(x) = x^2 \$ at \$ x = 1 \$**
5. **Find and classify critical points of \$ f(x) = x^4 - 4x^2 \$**
6. **Evaluate using substitution:** \$ \int 2x \cos(x^2) dx \$

---

### **Solutions**

1. \$ \lim_{x \to 2} \frac{x^2 - 4}{x-2} = \lim_{x \to 2} \frac{(x-2)(x+2)}{x-2} = 4 \$
2. \$ f'(x) = \frac{2x}{x^2 + 1} \$
3. \$ \int_0^{\pi} \sin x dx = [-\cos x]_0^{\pi} = -(-1) - (-1) = 2 \$
4. Slope at \$ x=1 \$ is \$ 2 \$, equation: \$ y - 1 = 2(x - 1) \$
5. \$ f'(x) = 4x^3 - 8x = 4x(x^2 - 2) \implies x = 0, \pm \sqrt{2} \$. Use second derivative to classify.
6. Let \$ u = x^2 \$, \$ du = 2x dx \$, so \$ \int 2x \cos(x^2) dx = \int \cos u du = \sin(x^2) + C \$

---

## **Visual Summary**

- **[Insert graph of \$ y = x^2 \$ and its tangent at \$ x = 1 \$]**
- **[Diagram of Riemann rectangles under a curve]**
- **[Flowchart: Steps for finding maxima/minima using derivatives]**

---

This guide provides a comprehensive, easy-to-understand overview of the calculus topics in your PDF, with definitions, examples, formulas, and practice problems to reinforce understanding.

<div style="text-align: center">⁂</div>

[^1]: M1_VOL2_CALCULUS.pdf

