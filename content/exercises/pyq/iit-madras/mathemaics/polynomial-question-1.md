---
title: Polynomial Graph Matching  
subtitle: IITM Quiz 1
description: Given $ p(x) = 0.3x^3(x^2 - 1)(x - 2)^2(x - 3) $, which figure represents the polynomial $ p(x) $?
weight: 1
categories:
- Polynomial
---

---



### 2️⃣ Polynomial Graph Matching

**Question:**
Given \$ p(x) = 0.3x^3(x^2 - 1)(x - 2)^2(x - 3) \$, which figure represents the polynomial \$ p(x) \$?

## Step-by-Step Explanation of the Solution 🚀

Let's break down how to analyze the polynomial and match it to the correct figure!

### 1. **Finding the Roots (Where the Graph Touches or Crosses the x-axis) 🌱**

Given:

$$
p(x) = 0.3x^3(x^2 - 1)(x - 2)^2(x - 3)
$$

- **$x^3$:** Root at $x = 0$ with multiplicity 3 (triple root)
- **$(x^2 - 1)$:** Roots at $x = 1$ and $x = -1$ (each single root)
- **$(x - 2)^2$:** Root at $x = 2$ with multiplicity 2 (double root)
- **$(x - 3)$:** Root at $x = 3$ (single root)

**Summary Table:**


| Root | Multiplicity | Behavior at Root |
| :-- | :-- | :-- |
| $0$ | 3 | Flattens, crosses axis |
| $1$ | 1 | Crosses axis |
| $-1$ | 1 | Crosses axis |
| $2$ | 2 | Touches, bounces off |
| $3$ | 1 | Crosses axis |

### 2. **Degree and End Behavior 🎢**

- **Expand the degree:**
    - $x^3$ → degree 3
    - $(x^2 - 1)$ → degree 2
    - $(x - 2)^2$ → degree 2
    - $(x - 3)$ → degree 1
- **Total degree:** $3 + 2 + 2 + 1 = 8$ (but let's check carefully: $x^3$ × $x^2$ × $x^2$ × $x$ = $x^{3+2+2+1} = x^8$). However, the original solution says degree 9—let's clarify:

$$
(x^2 - 1) = x^2 - 1 \implies \text{degree 2}
$$

$$
(x - 2)^2 = x^2 - 4x + 4 \implies \text{degree 2}
$$

So, multiplying:

- $x^3$ (degree 3)
- $(x^2 - 1)$ (degree 2)
- $(x - 2)^2$ (degree 2)
- $(x - 3)$ (degree 1)

Total degree: $3 + 2 + 2 + 1 = 8$.

**End Behavior (since leading coefficient is positive, 0.3):**

- Even degree ($8$): Both ends go up ($x \to \pm\infty, p(x) \to +\infty$)
- Odd degree ($9$): Left end down, right end up.

*But since the polynomial is degree 8, both ends go up!*

### 3. **Behavior at Each Root 🌈**

- **Triple root ($x = 0$)**: The graph flattens and crosses the x-axis.
- **Double root ($x = 2$)**: The graph just touches the x-axis and turns around (bounces).
- **Single roots ($x = 1, -1, 3$)**: The graph crosses the x-axis sharply.


### 4. **Putting It All Together: Matching the Figure 🖼️**

- **Check for all roots at correct places.**
- **Check that at $x = 0$, the graph flattens as it passes through.**
- **At $x = 2$, the graph touches and bounces (does not cross).**
- **At $x = 1, -1, 3$, the graph crosses the axis.**
- **Both ends of the graph rise up (since degree is even and leading coefficient is positive).**

If a figure shows all these features, **that is the correct graph for $p(x)$!**

## 🎯 **Final Answer**

**Figure 1** represents the polynomial \$ p(x) \$!
It has all the correct roots, the right behavior at each root, and the correct end behavior.

---

## How Roots Are Found in the Solution 🌱

Let's see how the roots (also called zeros or x-intercepts) of the polynomial are determined step by step!

### 1. **Start with the Polynomial**

Given:

$$
p(x) = 0.3x^3(x^2 - 1)(x - 2)^2(x - 3)
$$

### 2. **Set the Polynomial Equal to Zero**

To find the roots, set \$ p(x) = 0 \$:

$$
0.3x^3(x^2 - 1)(x - 2)^2(x - 3) = 0
$$

A product is zero if **any factor is zero**!

### 3. **Solve Each Factor Separately**

- **\$ x^3 = 0 \$**
    - Solution: \$ x = 0 \$
    - Multiplicity: 3 (because of the exponent 3)
- **\$ x^2 - 1 = 0 \$**
    - Factor further: \$ (x - 1)(x + 1) = 0 \$
    - Solutions: \$ x = 1 \$, \$ x = -1 \$
    - Each has multiplicity 1
- **\$ (x - 2)^2 = 0 \$**
    - Solution: \$ x = 2 \$
    - Multiplicity: 2 (because of the exponent 2)
- **\$ x - 3 = 0 \$**
    - Solution: \$ x = 3 \$
    - Multiplicity: 1


### 4. **Summary Table**

| Factor | Root | Multiplicity | Explanation |
| :-- | :-- | :-- | :-- |
| \$ x^3 \$ | 0 | 3 | \$ x^3 = 0 \$ |
| \$ x^2 - 1 \$ | 1, -1 | 1 each | \$ x^2 - 1 = 0 \$ |
| \$ (x - 2)^2 \$ | 2 | 2 | \$ (x - 2)^2 = 0 \$ |
| \$ x - 3 \$ | 3 | 1 | \$ x - 3 = 0 \$ |

### 5. **What Does Multiplicity Mean?**

- **Multiplicity** tells how many times a root repeats.
    - Odd multiplicity: The graph crosses the x-axis.
    - Even multiplicity: The graph touches and bounces off the x-axis.

**In summary:**
To find the roots, set the polynomial equal to zero and solve each factor for \$ x \$. The exponents tell you the multiplicity (how many times each root occurs)!
