---
title: Sets and Functions:- Enhanced Course with Interactive Elements
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 1
---

## **1. Numbers and Basic Operations**

### **1.1 Natural Numbers and Integers**

```markdown  
**Definition (Natural Numbers - $\mathbb{N}$):**  
The set of counting numbers starting from 0.  
$\mathbb{N} = \{0, 1, 2, 3, 4, ...\}$  

**Definition (Integers - $\mathbb{Z}$):**  
All positive/negative whole numbers and zero.  
$\mathbb{Z} = \{..., -3, -2, -1, 0, 1, 2, 3, ...\}$  
```


---

### **1.2 Rational and Real Numbers**

```markdown  
**Theorem (Rational Numbers - $\mathbb{Q}$):**  
Numbers of the form $\frac{p}{q}$ where $p, q \in \mathbb{Z}$ and $q \neq 0$.  
*Example:* $\frac{2}{5}$, $\frac{10}{20} = \frac{1}{2}$ (reduced form).  

**Theorem (Irrational Numbers):**  
Cannot be expressed as $\frac{p}{q}$.  
*Examples:* $\sqrt{2}$, $\pi$.  

**Definition (Real Numbers - $\mathbb{R}$):**  
Union of rational and irrational numbers.  
```


---

## **2. Sets**

### **2.1 Set Basics**

```markdown  
**Definition (Set):**  
A collection of distinct objects.  
*Notation:* $\{1, 2, 3\}$.  

**Definition (Cardinality):**  
Number of elements in a set.  
*Example:* $|\{1, 2, 3\}| = 3$.  
```


---

### **2.2 Subsets and Set Comprehension**

```markdown  
**Theorem (Subset):**  
$X \subseteq Y$ if every element of $X$ is in $Y$.  
*Example:* $\{1, 2\} \subseteq \{1, 2, 3\}$.  

**Definition (Set Comprehension):**  
Constructs a subset using a rule.  
*Example:* $\{x^2 \mid x \in \mathbb{Z}, x \text{ even}\}$ (squares of even integers).  
```


---

## **3. Relations**

### **3.1 Cartesian Product and Binary Relations**

```markdown  
**Definition (Cartesian Product):**  
$X \times Y = \{(x, y) \mid x \in X, y \in Y\}$.  
*Example:* $A = \{a, b\}, B = \{1, 2\}$  
$A \times B = \{(a, 1), (a, 2), (b, 1), (b, 2)\}$.  

**Definition (Binary Relation):**  
A subset of $X \times Y$.  
*Example:* $R = \{(a, 1), (b, 2)\}$.  
```


---

### **3.2 Properties of Relations**

| **Property** | **Definition** | **Example** |
| :-- | :-- | :-- |
| Reflexive | $(x, x) \in R$ for all $x$ in $S$. | $\{(1,1), (2,2)\}$ |
| Symmetric | If $(x, y) \in R$, then $(y, x) \in R$. | $\{(1,2), (2,1)\}$ |
| Transitive | If $(x, y), (y, z) \in R$, then $(x, z) \in R$. | $\{(1,2), (2,3), (1,3)\}$ |
| Equivalence | Reflexive, symmetric, and transitive. | $\{(1,1), (2,2), (1,2)\}$ |


---

## **4. Functions**

### **4.1 Function Basics**

```markdown  
**Definition (Function):**  
A relation where each input maps to exactly one output.  
*Notation:* $f: X \rightarrow Y$.  

**Theorem (Types of Functions):**  
- **Injective:** Each input maps to a unique output.  
- **Surjective:** Co-domain equals the range.  
- **Bijective:** Both injective and surjective.  
```


---

### **4.2 Function Operations**

```markdown  
**Definition (Composition):**  
$(f \circ g)(x) = f(g(x))$.  
*Example:* $f(x) = 2x$, $g(x) = x + 1$  
$(f \circ g)(x) = 2(x + 1) = 2x + 2$.  

**Definition (Inverse Function):**  
$f^{-1}$ exists if $f$ is bijective.  
*Example:* $f(x) = 3x + 2$, $f^{-1}(y) = \frac{y-2}{3}$.  
```


---

## **5. Visual Aids**

### **5.1 Venn Diagrams**

```markdown  
**Example (Set Operations):**  
![Venn Diagram](https://byjus.com/maths/wp-content/uploads/2021/11/Venn-Diagram-1.png)  
- **Union (A ∪ B):** All elements in A or B.  
- **Intersection (A ∩ B):** Common elements in A and B.  
- **Complement (A'):** Elements not in A.  
```


---

## **6. Interactive Quizzes**

<details>  
<summary>**Quiz 1: Sets and Relations**</summary>  

1. **List all subsets of $\{a, b\}$.**  
   - *Answer:* $\{\}, \{a\}, \{b\}, \{a, b\}$  

2. **Is $f(x) = x^2$ injective on $\mathbb{R}$?**  
   - *Answer:* No, since $f(2) = f(-2) = 4$.  
</details>
<details>  
<summary>**Quiz 2: Functions**</summary>  

1. **Find the range of $f(x) = |x|$.**  
   - *Answer:* $[0, \infty)$  

2. **Solve $15 \mod 4$.**  
   - *Answer:* $3$  
</details>

---

## **7. Self-Assessment Tools**

### **Interactive Quiz Generator**

```markdown  
**Question 1:**  
Which set is a subset of $\{2, 3, 4, 5\}$?  
- [ ] $\{2, 6\}$  
- [x] $\{2, 4\}$  
- [ ] $\{5, 7\}$  

**Question 2:**  
What is $\gcd(18, 24)$?  
- [ ] 4  
- [x] 6  
- [ ] 8  
```


---

## **8. Advanced Layout Suggestions**

1. **Color-Coded Boxes:**
    - **Definition:** 🔵 Blue border
    - **Theorem:** 🟢 Green background
    - **Example:** 🟡 Yellow highlight
2. **Collapsible Sections:**
    - Use `<details>` tags for practice questions.
3. **Diagrams:**
    - Include Venn diagrams for set operations.
    - Use flowcharts for function mappings.

---

This enhanced course integrates visual aids, interactive quizzes, and structured content for better comprehension. Use digital tools like [Desmos](https://www.desmos.com/) for graphing functions and [GeoGebra](https://www.geogebra.org/) for dynamic diagrams.

<div style="text-align: center">⁂</div>

[^1]: M1_VOL1_SETS-FUNCTIONS.pdf

[^2]: https://www.youtube.com/watch?v=2SpuBqvNjHI

[^3]: https://byjus.com/maths/venn-diagrams/

[^4]: https://gmstat.com/maths-pi/chapter-2/sets-functions-and-groups-quizzes/

[^5]: https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch1.pdf

[^6]: https://courses.lumenlearning.com/wmopen-mathforliberalarts/chapter/module-3-overview/

[^7]: https://www.youtube.com/watch?v=n3TrVUSpPM0

[^8]: https://www.vedantu.com/maths/sets-types-and-symbols

[^9]: https://testbook.com/objective-questions/mcq-on-set-theory-and-types-of-sets--5eea6a1439140f30f369f22a

[^10]: https://docs.paraview.org/en/latest/ReferenceManual/colorMapping.html

[^11]: https://web.pdx.edu/~erdman/CALCULUS/CALCULUS_pdf.pdf

