<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

## Sets and Functions: Detailed Course with Examples and Practice


---

### **1. Numbers and Basic Operations**

#### **1.1 Natural Numbers and Integers**

- **Natural Numbers ($\mathbb{N}$)**: Counting numbers starting from 0.
$\mathbb{N} = \{0, 1, 2, 3, 4, ...\}$
- **Integers ($\mathbb{Z}$)**: All positive, negative whole numbers, and zero.
$\mathbb{Z} = \{..., -3, -2, -1, 0, 1, 2, 3, ...\}$


#### **1.1.3 Arithmetic Operations**

| Operation | Description | Example |
| :-- | :-- | :-- |
| Addition (+) | Combine numbers | $5 + 2 = 7$ |
| Subtraction (-) | Find the difference | $9 - 4 = 5$ |
| Multiplication (×) | Repeated addition | $3 × 4 = 12$ |
| Division (÷) | Repeated subtraction | $18 ÷ 3 = 6$ |
| Modulo (mod) | Remainder after division | $10 \mod 3 = 1$ |

**Practice**:

1. Calculate $15 \mod 4$.
**Answer**: $3$ (since $15 ÷ 4 = 3$ remainder $3$)
2. What is $7 × 6$?
**Answer**: $42$

#### **1.1.4 Factors and Multiples**

- **Factor**: $a$ is a factor of $b$ if $b \mod a = 0$.
- **Multiple**: $b$ is a multiple of $a$.

**Examples**:

- 2 is a factor of 6 ($6 \mod 2 = 0$).
- 10 is a multiple of 5.

---

#### **1.2 Rational and Real Numbers**

- **Rational Numbers ($\mathbb{Q}$)**: Numbers of the form $\frac{p}{q}$, where $p, q \in \mathbb{Z}, q \neq 0$.
    - Example: $\frac{2}{5}, \frac{10}{20} = \frac{1}{2}$ (after reduction).
- **Irrational Numbers**: Cannot be written as $\frac{p}{q}$.
    - Examples: $\sqrt{2}, \pi$
- **Real Numbers ($\mathbb{R}$)**: All rational and irrational numbers.

**Practice**:

1. Is $0.333...$ rational?
**Answer**: Yes, $0.333... = \frac{1}{3}$.

---

#### **1.2.1 Greatest Common Divisor (gcd)**

- **Definition**: The largest positive integer dividing both $p$ and $q$.
- **Examples**:
    - $\gcd(9, 12) = 3$
    - $\gcd(15, 45) = 15$
    - $\gcd(0, q) = q$
    - $\gcd(1, q) = 1$

**Practice**:

1. Find $\gcd(18, 24)$.
**Answer**: $6$

---

### **2. Sets**

#### **2.1 Definition and Notation**

- **Set**: A collection of well-defined objects.
    - **Notation**: Curly braces, e.g., $\{1, 2, 3\}$
    - **Elements**: Members of a set.

**Examples**:

- Finite: $\{0, 1, 2, ..., 9\}$ (natural numbers < 10)
- Infinite: $\{0, 2, 4, ...\}$ (even numbers)


#### **2.2 Cardinality**

- **Cardinality**: Number of elements in a set.
    - Example: $|\{1, 2, 3\}| = 3$


#### **2.3 Subsets**

- **Subset**: $X \subseteq Y$ if every element of $X$ is in $Y$.
- **Proper Subset**: $X \subset Y$ if $X \subseteq Y$ and $X \neq Y$.

**Examples**:

- $\{1, 2\} \subseteq \{1, 2, 3\}$
- $\{1, 2, 3\} \subset \{1, 2, 3, 4\}$

**Practice**:

1. Is $\{2, 4\} \subseteq \{2, 3, 4, 5\}$?
**Answer**: Yes

---

#### **2.4 Set Comprehension**

- **Definition**: Describes a set by a property.
    - Example: $\{x^2 \mid x \in \mathbb{Z}, x \text{ even}\}$ (squares of even integers)

---

### **3. Relations**

#### **3.1 Cartesian Product**

- **Definition**: $X \times Y = \{(x, y) \mid x \in X, y \in Y\}$
- **Example**:
    - $A = \{a, b\}, B = \{1, 2\}$
    - $A \times B = \{(a, 1), (a, 2), (b, 1), (b, 2)\}$

---

#### **3.2 Binary Relation**

- **Definition**: A subset of $X \times Y$.
- **Example**:
    - $A = \{a, b\}, B = \{1, 2, 3\}$
    - $R = \{(a, 1), (b, 2)\}$ is a relation from $A$ to $B$.

---

#### **3.3 Properties of Relations**

| Property | Definition | Example |
| :-- | :-- | :-- |
| Reflexive | $(x, x) \in R$ for all $x$ in $S$ | $\{(1,1), (2,2), (3,3)\}$ |
| Symmetric | If $(x, y) \in R$, then $(y, x) \in R$ | $\{(1,2), (2,1)\}$ |
| Transitive | If $(x, y) \in R$ and $(y, z) \in R$, then $(x, z) \in R$ | $\{(1,2), (2,3), (1,3)\}$ |
| Equivalence | Relation is reflexive, symmetric, and transitive | $\{(1,1), (2,2), (1,2), (2,1)\}$ |

**Practice**:

1. Is the relation $R = \{(1,2), (2,1)\}$ on $\{1,2\}$ symmetric?
**Answer**: Yes

---

### **4. Functions**

#### **4.1 Definition**

- **Function**: A relation where each input has exactly one output.
    - Notation: $f: X \rightarrow Y$
    - **Domain**: Set $X$ (inputs)
    - **Co-domain**: Set $Y$ (possible outputs)
    - **Range**: Actual outputs $\{f(x) \mid x \in X\}$

**Examples**:

- $f(x) = x^2$, $x \in \mathbb{R}$, domain: $\mathbb{R}$, range: $[0, \infty)$

---

#### **4.2 Types of Functions**

| Type | Definition | Example |
| :-- | :-- | :-- |
| Injective | Each input maps to a unique output | $f(x) = 2x$ |
| Surjective | Every element in co-domain is hit | $f(x) = x^3$, $f: \mathbb{R} \rightarrow \mathbb{R}$ |
| Bijective | Both injective and surjective | $f(x) = x + 1$, $f: \mathbb{R} \rightarrow \mathbb{R}$ |


---

#### **4.3 Finding Domain and Range**

- **Example**: $f(x) = \sqrt{x}$, domain: $[0, \infty)$
- **Example**: $f(x) = x^2$, range: $[0, \infty)$, not surjective if co-domain is $\mathbb{R}$

**Practice**:

1. Find the domain of $f(x) = \frac{1}{x-2}$.
**Answer**: $x \neq 2$

---

#### **4.4 Function Composition**

- **Definition**: $(f \circ g)(x) = f(g(x))$
- **Example**:
    - $f(x) = 2x$, $g(x) = x + 1$
    - $(f \circ g)(x) = f(g(x)) = 2(x+1) = 2x + 2$

---

#### **4.5 Inverse Functions**

- **Definition**: $f^{-1}$ exists if $f$ is bijective.
- **Property**: $f^{-1}(f(x)) = x$
- **Example**: $f(x) = 3x + 2$, $f^{-1}(y) = \frac{y-2}{3}$

---

### **5. Practice Questions**

#### **Sets and Relations**

1. List all subsets of $\{a, b\}$.
**Answer**: $\{\}, \{a\}, \{b\}, \{a, b\}$
2. If $A = \{1,2\}$, $B = \{3,4\}$, find $A \times B$.
**Answer**: $\{(1,3), (1,4), (2,3), (2,4)\}$

#### **Functions**

3. Is $f(x) = x^2$ injective on $\mathbb{R}$?
**Answer**: No, since $f(2) = f(-2) = 4$.
4. Find the range of $f(x) = |x|$, $x \in \mathbb{R}$.
**Answer**: $[0, \infty)$
5. If $f(x) = 2x + 1$, find $f^{-1}(y)$.
**Answer**: $f^{-1}(y) = \frac{y-1}{2}$

---

### **6. Extra Examples**

#### **Set Comprehension**

- Set of odd numbers less than 10: $\{x \mid x \in \mathbb{N}, x < 10, x \mod 2 = 1\} = \{1, 3, 5, 7, 9\}$


#### **Relations**

- On $S = \{1, 2, 3\}$, define $R = \{(x, y) \mid x \leq y\}$.
    - Is $R$ reflexive? Yes, since $(x, x) \in R$ for all $x$.
    - Is $R$ symmetric? No, since $(1, 2) \in R$ but $(2, 1) \notin R$.


#### **Functions**

- If $f(x) = x + 2$, $g(x) = 2x$, find $(g \circ f)(x)$.
    - $g(f(x)) = 2(x + 2) = 2x + 4$

---

### **7. Answers to Practice Questions**

1. $15 \mod 4 = 3$
2. $7 \times 6 = 42$
3. $\gcd(18, 24) = 6$
4. Subsets of $\{a, b\}$: $\{\}, \{a\}, \{b\}, \{a, b\}$
5. $A \times B = \{(1,3), (1,4), (2,3), (2,4)\}$
6. $f(x) = x^2$ is not injective on $\mathbb{R}$
7. Range of $f(x) = |x|$ is $[0, \infty)$
8. $f^{-1}(y) = \frac{y-1}{2}$

---

### **8. Layout/UI Suggestions**

- Use color-coded boxes for definitions, theorems, and examples.
- Add collapsible sections for practice questions and answers.
- Include diagrams for set relations, function mappings, and Venn diagrams.
- Provide interactive quizzes after each section for self-assessment.

---

This structure covers the essentials of sets and functions, with added clarity, examples, and practice. For a more interactive experience, consider using digital flashcards or quizzes after each topic.

<div style="text-align: center">⁂</div>

[^1]: M1_VOL1_SETS-FUNCTIONS.pdf

