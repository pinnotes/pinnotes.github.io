---
title: Functions
date: 2025-08-09
weight: 9
image: https://media.geeksforgeeks.org/wp-content/uploads/20221115121641/function3.png
emoji: 🧮
slug: "Functions"
linkTitle: Functions
series_order: 9
---

A well-defined collection of distinct objects called elements or members.

{{< youtube M-nlI2fgaWI >}}




## 1️⃣ Define Function, Domain, Co-domain, and Range

- **Function:** A relation $f$ from set $A$ (domain) to set $B$ (co-domain) that assigns **each element in $A$ exactly one element in $B$**. Denoted as $f: A \to B$.
- **Domain ($A$)**: The set of input values over which the function is defined.
Example: $A = \{1,2,3\}$.
- **Co-domain ($B$)**: The set where outputs of the function lie.
Example: $B = \{a,b,c,d\}$.
- **Range:** The subset of the co-domain actually mapped by the function.
For example, if $f(1) = a, f(2) = b, f(3) = a$, then range $= \{a,b\}$.

***

### Diagram: Function Mapping

![Function Diagram](https://media.geeksforgeeks.org/wp-content/uploads/20221115121641/function3.png)

🎯 *Each arrow shows the mapping from domain to co-domain. Each domain element maps to exactly one codomain element.*

***





## 2️⃣ Identify Domain and Range of a Given Function

- **Example:** $f:\mathbb{R} \to \mathbb{R}$, defined by $f(x) = x^2$.
- **Domain:** All real numbers ($\mathbb{R}$).
- **Range:** Non-negative real numbers $[0, \infty)$, because squaring any real number can't be negative.

***

### Diagram of Domain to Range

![Domain and Range](https://media.geeksforgeeks.org/wp-content/uploads/20231119175537/Domain-and-Range.png)

🟢 *All inputs from domain map to outputs in range.*

***





## 3️⃣ Classify a Function: Injective, Surjective, Both or Neither

- **Injective (One-to-One):** Different inputs map to different outputs.
    - Example: $f(x) = 2x$ over real numbers (distinct inputs produce distinct outputs).
- **Surjective (Onto):** Every element in the co-domain is mapped to by some input.
    - Example: $f(x) = x^3$ over real numbers (every real number has a cube root).
- **Bijective:** Both injective and surjective.
- **Neither:** Does not satisfy injective or surjective properties.

***

### Diagram Examples

![Injection, Surjection, Bijection](https://media.geeksforgeeks.org/wp-content/uploads/20221115110622/ontofunction.png)

![Injection, Surjection, Bijection](https://media.geeksforgeeks.org/wp-content/uploads/20230928183715/One-One-and-Onto.png)

![Injection, Surjection, Bijection](https://www.aplustopper.com/media/images/articles/one-to-one-and-onto-functions-1.jpg)

🔄 *Injection: no two arrows go to the same place.
Finish of the co-domain: surjection.
Both: bijection.*

***





## 4️⃣ Define Bijection

- **Bijection:** A function that is both injective and surjective.
It has an inverse function $f^{-1}$ that maps the co-domain back to domain one-to-one.
- **Example:**
$f:\mathbb{R} \to \mathbb{R}$, $f(x) = x + 3$
- Inverse is $f^{-1}(y) = y - 3$.
- **Properties:** Bijections pair elements perfectly without overlaps or gaps.

***

### Diagram of Bijection and Inverse

![Bijection](https://media.geeksforgeeks.org/wp-content/uploads/20231019170642/Bijective-Function-2.png)

🎯 *Each input maps uniquely to an output and vice versa.*

***

### Summary Emojis

- 🎯 Function mapping
- 🔢 Inputs and outputs
- 🔄 Injection, surjection visuals
- 🚀 Bijection and inverse

This detailed guide provides a clear understanding of functions and their classification, accompanied by rich visuals.

## 1. Define a function, domain, co-domain, and range of a function.

- **Function:** A relation from set $A$ (domain) to set $B$ (co-domain) where every element of $A$ maps to exactly one element of $B$. Notation: $f: A \to B$.
- **Domain:** The set of all possible inputs, $A$.
- **Co-domain:** The set in which outputs lie, $B$.
- **Range:** The set of all actual outputs $f(x)$ for $x \in A$, subset of $B$.

Example: $f(x) = x^2$, $A = \mathbb{R}$, $B = \mathbb{R}$, range = $[0, \infty)$.

🎯





## 2. Identify the domain and range of a given function

Given $f(x) = x^2$:

- Domain = All real numbers $\mathbb{R}$.
- Range = All non-negative real numbers $[0, \infty)$ since squares are $\geq 0$.

🟢





## 3. Classify a function as injective, surjective, both, or neither

- **Injective (One-to-one):** No two different inputs share the same output. Example: $f(x) = 2x$ over $\mathbb{R}$ (each input maps to distinct outputs).
- **Surjective (Onto):** Every element in co-domain is covered by some input. Example: $f(x) = x^3$ over $\mathbb{R}$.
- **Bijective:** Both injective and surjective; one-to-one and onto.

🔄





## 4. Define bijection with examples

- **Bijection:** A function that is both injective and surjective. It has an inverse function.

Example: $f: \mathbb{R} \to \mathbb{R}, f(x) = x + 3$. Inverse is $f^{-1}(y) = y - 3$.

🚀


---

## Exercise Questions 🤯


{{< border >}}

### 1) Suppose \$ f: \mathbb{Z} \to \mathbb{Z} \$ is a function defined by \$ f(k) = k^3 + 4k - 10 \$. The value of \$ f(k) \$ at \$ k = 4 \$ is ______.

#### **Detailed Answer:**

Substitute \$ k = 4 \$ into the function:

$$
f(4) = 4^3 + 4 \times 4 - 10 = 64 + 16 - 10 = 70
$$

**Correct Answer:** 70

{{< /border >}}

{{< border >}}

### 2) Let \$ f(x) = |x| + 5 \$ and \$ Dom(f) = \{x \in \mathbb{R} \mid f(x) \in \mathbb{R}\} \$. Which of the following is(are) true?

Options:

- Domain of \$ f(x) \$ is \$ \mathbb{R} \$
- Range of \$ f(x) \$ is \$ \mathbb{R} \$
- Domain of \$ f(x) \$ is $[5, \infty)$
- Range of \$ f(x) \$ is $[5, \infty)$


#### **Detailed Answer:**

- For any \$ x \in \mathbb{R} \$, \$ f(x) \$ is defined (so domain is \$ \mathbb{R} \$)
- \$ f(x) = |x| + 5 \$. The smallest value is 5 (when \$ x = 0 \$); as \$ x \$ increases or decreases, value increases to infinity.
- So, the range is $[5, \infty)$.

**Correct Options:**

- Domain of \$ f(x) \$ is \$ \mathbb{R} \$
- Range of \$ f(x) \$ is $[5, \infty)$

{{< /border >}}

{{< border >}}

### 3) Let \$ f : \mathbb{R} \to \mathbb{R} \$ and \$ f(x) = |(x+4)(4x-10)| \$. Which of the following is(are) true?

Options:

- \$ f \$ is an injective function
- \$ f \$ is a surjective function
- \$ f \$ is a bijective function
- None of these


#### **Detailed Answer:**

- Because of the absolute value, different \$ x \$ values can yield the same output. Hence, \$ f \$ is **not injective**.
- As \$ x \$ varies over \$ \mathbb{R} \$, \$ f(x) \$ returns values in $[0, \infty)$, not all real numbers, so not **surjective** onto $\mathbb{R}$.
- So, it is **neither injective nor surjective**.

**Correct Answer:** None of these

{{< /border >}}

{{< border >}}

### 4) Which of the following statements is(are) false?

Options:

- Range of a function is a subset of co-domain
- A function is bijective if and only if it is both injective and surjective
- Every relation is a function
- Co-domain of a function is a subset of domain


#### **Detailed Answer:**

- Range of function is a subset of co-domain: **True**
- Function bijective iff injective and surjective: **True**
- Every relation is a function: **False** (a function is a special kind of relation; not all relations are functions)
- Co-domain is a subset of domain: **False** (Co-domain and domain are unrelated sets, other than mapping).

**Correct Answers:**

- Every relation is a function
- Co-domain of a function is a subset of domain

{{< /border >}}

{{< border >}}

### 5) Let $x \in \mathbb{R}$ and $DOM(f) = \{x \in \mathbb{R} \mid f(x) \in \mathbb{R}\}$. Which of the following functions is(are) injective?

Options:

- $f(x) = \sqrt{10-x}$
- $f(x) = \frac{7x+6}{3x}$
- $f(x) = 2x+9$
- $f(x) = \frac{(5x+4)(2x-3)}{2}$


#### **Detailed Answer:**

- $f(x) = \sqrt{10-x}$: Not injective (not one-to-one, not defined for \$ x > 10 \$)
- $f(x) = \frac{7x+6}{3x}$: Not injective (not defined at \$ x=0 \$ and not one-to-one over all \$ x \$)
- $f(x) = 2x+9$: **Injective** (one-to-one linear function)
- $f(x) = \frac{(5x+4)(2x-3)}{2}$: **Injective** (quadratic in factorized form but for many quadratic forms, over $\mathbb{R}$, not always injective; but this function is strictly increasing or decreasing outside critical points; check derivative for monotonicity.)

But over $\mathbb{R}$, only linear function is always injective without ambiguity.

**Correct Answer:** \$ f(x) = 2x+9 \$

{{< /border >}}

{{< border >}}

### 6) Suppose \$ f : \mathbb{Z} \to \mathbb{Z} \$ is a function defined by \$ f(x) = ax + b \$. For which of the following integer values of \$ a \$ and \$ b \$ is the given function bijective?

Options:

- \$ a = 0, b = t; t \in \mathbb{Z} \$
- \$ a \in \{-1, 1\}, b = t; t \in \mathbb{Z} \$
- \$ b \in \{-1, 1\}, a = 0 \$
- \$ b = 0; a \in \mathbb{Z} \$


#### **Detailed Answer:**

- \$ a = 0 \$: \$ f(x) \$ is constant — not bijective
- \$ a = 1, b \in \mathbb{Z} \$: \$ f(x) = x+b \$ is a bijection (inverse: \$ x = y-b \$)
- \$ a = -1, b \in \mathbb{Z} \$: \$ f(x) = -x + b \$, also a bijection (inverse: \$ x = b-y \$)

**Correct Answer:** \$ a \in \{-1, 1\}, b = t; t \in \mathbb{Z} \$

{{< /border >}}
<span style="display:none">[^1][^2]</span>

<div style="text-align: center">⁂</div>

[^1]: image.jpg

[^2]: image.jpg


