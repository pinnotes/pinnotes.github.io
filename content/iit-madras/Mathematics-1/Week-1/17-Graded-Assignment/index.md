---
title: Week 1 | Graded Assignment  
date: 2025-08-09
weight: 17
image: https://gradedassignments.github.io/wp-content/uploads/2023/08/Copy-of-Copy-of-thubmbnail-1224-%C3%97-768-px-960-%C3%97-500-px-1.png
emoji: 🧮
slug: "Week 1 | Graded Assignment"
linkTitle: Week 1 | Graded Assignment
series_order: 17
---


{{< border >}}

### **Question 1: Irrational Numbers**

**The Question:**
Which of the following are irrational numbers?

1. `2.99999999`
2. $(\sqrt{8} + \sqrt{2})(\sqrt{12} - \sqrt{3})$
3. $\frac{\sqrt{8} + \sqrt{2}}{\sqrt{8} - \sqrt{2}}$
4. $\frac{\sqrt{6} + \sqrt{3}}{\sqrt{6} - \sqrt{3}}$

**Core Concepts: Rational vs. Irrational Numbers**

- **Rational Number:** Expressible as fraction $p/q$, where $p,q$ are integers, $q \ne 0$. Decimals terminate or repeat.
- **Irrational Number:** Cannot be expressed as a simple fraction. Decimals non-terminating and non-repeating.

**Detailed Solution:**

1. `2.99999999` is a terminating decimal, hence rational.
2. Simplify $(\sqrt{8} + \sqrt{2})(\sqrt{12} - \sqrt{3})$:
$\sqrt{8} = 2\sqrt{2}$, $\sqrt{12} = 2\sqrt{3}$
Expression becomes $(2\sqrt{2} + \sqrt{2})(2\sqrt{3} - \sqrt{3}) = (3\sqrt{2})(\sqrt{3}) = 3\sqrt{6}$
Since $\sqrt{6}$ is irrational, result is irrational.
3. $\frac{\sqrt{8} + \sqrt{2}}{\sqrt{8} - \sqrt{2}} = \frac{3\sqrt{2}}{\sqrt{2}} = 3$, rational.
4. $\frac{\sqrt{6} + \sqrt{3}}{\sqrt{6} - \sqrt{3}}$, after rationalizing denominator, equals $3 + 2\sqrt{2}$, irrational.

**Final Answer:** The second and fourth options are irrational.

{{< /border >}}

{{< border >}}

### **Question 2: Domain of a Function**

**The Question:**
Suppose $f: D \to \mathbb{R}$ is defined by $f(x) = \frac{x^2 - 36}{x + 6}$, where $D \subset \mathbb{R}$. Let $A$ be the set of integers not in $D$. Find $|A|$.

**Core Concepts:**

- Domain excludes points making denominator zero.
- Cardinality $|A|$ is the number of elements in set $A$.

**Detailed Solution:**
Denominator zero when $x + 6 = 0 \Rightarrow x = -6$.
Domain $D = \mathbb{R} \setminus \{-6\}$.
Set $A = \{-6\}$ with cardinality $|A|=1$.

**Final Answer:** 1

{{< /border >}}

{{< border >}}

### **Question 3: Cardinality of Set Difference**

**The Question:**
Given $S = \{a \in \mathbb{N} \mid a \le 18\}$
Relations $R_1 = \{(x,y) \in S \times S \mid y=3x\}$ and
$R_2 = \{(x,y) \in S \times S \mid y=x^2\}$. Find $|R_1 \setminus R_2|$.

**Detailed Solution:**

- $R_1 = \{(1,3),(2,6),(3,9),(4,12),(5,15),(6,18)\}$, $|R_1| = 6$.
- $R_2 = \{(1,1),(2,4),(3,9),(4,16)\}$, $|R_2| = 4$.
- Intersection $R_1 \cap R_2 = \{(3,9)\}$, size 1.
- Set difference $R_1 \setminus R_2 = R_1 \setminus \{(3,9)\} = 5$.

**Final Answer:** 5

{{< /border >}}

{{< border >}}

### **Question 4: Tiger Word Problem**

**The Question:**
In a zoo, 6 Bengal white tigers, 7 Bengal royal tigers; 5 males; 10 are royal or male. Find the number of female Bengal white tigers.

**Detailed Solution:**

- Total tigers $6 + 7 = 13$.
- Given $|R \cup M| = 10$, $|R|=7$, $|M|=5$.
- $|R \cup M| = |R| + |M| - |R \cap M|$
- $10 = 7 + 5 - |R \cap M| \Rightarrow |R \cap M| = 2$.
- Male white tigers = $5 - 2 = 3$.
- Female white tigers = $6 - 3 = 3$.

**Final Answer:** 3 female Bengal white tigers

{{< /border >}}

{{< border >}}

### **Question 5: One-to-One Functions**

**The Question:**
Identify one-to-one functions among:

- $R_1 = \{(x,y) \mid x,y \in \mathbb{R}, x + y > 2\}$
- $R_2 = \{(x,y) \mid x,y \in \mathbb{R}, x > y\}$
- $R_3 = \{(x,y) \mid x + y = 12\}$
- $R_4 = \{(x,y) \mid y = x^2\}$

**Detailed Solution:**

- $R_1$ and $R_2$ are inequalities, not functions.
- $R_3$ is a function $y = 12 - x$, one-to-one.
- $R_4$ is function $y = x^2$, not one-to-one since $f(2) = f(-2)$.

**Final Answer:** Only $R_3$ is one-to-one.

{{< /border >}}

{{< border >}}

### **Question 6: Function Properties from a Table**

**The Question:**
Given the dielectric constant for materials \$ \{ Air, Vacuum, Paper, Glass, Nerve membrane, Silicon \} \$ mapping to $\{1, 2, 3, 8, 7, 13\}$, state the function type.

**Detailed Solution:**

- Outputs are distinct → function is one-to-one.
- Codomain equals range → onto.
- Thus the function is bijective.

**Final Answer:** The function $f$ is bijective.

{{< /border >}}

{{< border >}}

### **Question 7: Venn Diagram Problem**

**The Question:**
From 180 people who watched movies, details of who watched which are given. Find number who watched only RRR and Avatar.

**Detailed Solution:**

- Given:
$|D|=95, |A|=100, |R|=100$,
$|D \cap A|=50, |A \cap R|=40, |D \cap R|=55$,
Total $|D \cup A \cup R|=180$.
- Using inclusion-exclusion:

$$
|D \cap A \cap R| = 180 - (95+100+100) + (50+40+55) = 30
$$

- Only RRR and Avatar = $|A \cap R| - |D \cap A \cap R| = 40 - 30 = 10$.

**Final Answer:** 10

{{< /border >}}

{{< border >}}

### **Question 8: Family Tree Relations**

**The Question:**
Given relations on family tree for cousin and son relationships, find $m + n$, where $m = |R|$ cousins and $n = |S|$ sons.

**Detailed Solution:**

- $n = 8$ (father-son pairs listed).
- $m = 8$ (cousin pairs counted).
- Sum: $m + n = 8 + 8 = 16$.

**Final Answer:** 16

{{< /border >}}

{{< border >}}

### **Question 9: Function $f: \mathbb{Q} \to \mathbb{Z}$ given by $f(p/q) = p - q$, gcd(p,q)=1.**

**The Question:**
Determine whether $f$ is one-to-one, onto, both, or neither.

**Detailed Solution:**

- Not one-to-one: $f(3/2) = 1 = f(4/3)$, but $3/2 \neq 4/3$.
- Onto: For any integer $k$, $f((k+1)/1) = k$.

**Final Answer:** Onto but not one-to-one.

{{< /border >}}

{{< border >}}

### **Question 10: Properties of Relations**

**The Question:**
Relations on $\mathbb{N}$:

- $R_1 = \{(a,b) \mid b = a + 1\}$
- $R_2 = \{(a,b) \mid b \geq a\}$

Which statements are true?

**Detailed Solution:**

- $R_1$ is not reflexive, not symmetric, not transitive.
- $R_2$ is reflexive and transitive, but not symmetric.

**Correct Statements:**

- $R_1$ is neither symmetric nor transitive.
- $R_2$ is both reflexive and transitive.

{{< /border >}}



---


{{< border >}}
### **Question 1: Irrational Numbers** (from file `...141550.png`)

**The Question:**
Which of the following are irrational numbers?
1.  `2.99999999`
2.  $(\sqrt{8} + \sqrt{2})(\sqrt{12} - \sqrt{3})$
3.  $(\sqrt{8} + \sqrt{2}) / (\sqrt{8} - \sqrt{2})$
4.  $(\sqrt{6} + \sqrt{3}) / (\sqrt{6} - \sqrt{3})$

**Core Concepts: Rational vs. Irrational Numbers**

* **Rational Number:** Any number that can be expressed as a fraction $p/q$, where $p$ and $q$ are integers and $q \neq 0$. In decimal form, rational numbers either terminate (like 0.5) or repeat a pattern (like 0.333...).
* **Irrational Number:** A number that cannot be expressed as a simple fraction. Its decimal representation goes on forever without repeating. Famous examples include $\pi$ and $\sqrt{2}$.

**Detailed Solution:**

1.  **`2.99999999`**: This is a terminating decimal, which is a property of rational numbers. It can be written as $299,999,999 / 100,000,000$. (If it were a repeating decimal $2.\bar{9}$, it would be exactly equal to 3, which is also rational).
2.  **$(\sqrt{8} + \sqrt{2})(\sqrt{12} - \sqrt{3})$**: Let's simplify the terms inside the parentheses first.
    * $\sqrt{8} = \sqrt{4 \times 2} = 2\sqrt{2}$
    * $\sqrt{12} = \sqrt{4 \times 3} = 2\sqrt{3}$
    * The expression becomes: $(2\sqrt{2} + \sqrt{2})(2\sqrt{3} - \sqrt{3})$
    * Combine like terms: $(3\sqrt{2})(\sqrt{3})$
    * Multiply: $3\sqrt{6}$. Since 6 is not a perfect square, $\sqrt{6}$ is irrational. Therefore, $3\sqrt{6}$ is **irrational**.
3.  **$(\sqrt{8} + \sqrt{2}) / (\sqrt{8} - \sqrt{2})$**: Using our simplifications from above:
    * Numerator: $2\sqrt{2} + \sqrt{2} = 3\sqrt{2}$
    * Denominator: $2\sqrt{2} - \sqrt{2} = \sqrt{2}$
    * The expression is $(3\sqrt{2}) / (\sqrt{2})$. The $\sqrt{2}$ terms cancel out.
    * Result: $3$. This is a **rational** number.
4.  **$(\sqrt{6} + \sqrt{3}) / (\sqrt{6} - \sqrt{3})$**: To simplify this, we rationalize the denominator by multiplying the numerator and denominator by the conjugate of the denominator, which is $(\sqrt{6} + \sqrt{3})$.
    * Numerator: $(\sqrt{6} + \sqrt{3})(\sqrt{6} + \sqrt{3}) = (\sqrt{6})^2 + 2(\sqrt{6})(\sqrt{3}) + (\sqrt{3})^2 = 6 + 2\sqrt{18} + 3 = 9 + 2\sqrt{9 \times 2} = 9 + 6\sqrt{2}$.
    * Denominator: $(\sqrt{6} - \sqrt{3})(\sqrt{6} + \sqrt{3}) = (\sqrt{6})^2 - (\sqrt{3})^2 = 6 - 3 = 3$.
    * The expression is $(9 + 6\sqrt{2}) / 3 = 3 + 2\sqrt{2}$. Since $\sqrt{2}$ is irrational, the entire expression is **irrational**.

**Final Answer:** The second and fourth options are irrational numbers.
{{< /border >}}

{{< border >}}
### **Question 2: Domain of a Function** (from file `...141550.png`)

**The Question:**
Suppose $f: D \to \mathbb{R}$ is a function defined by $f(x) = \frac{x^2 - 36}{x + 6}$ where $D \subset \mathbb{R}$. Let $A$ be the set of integers which are not in the domain of $f$, then find the cardinality of the set $A$.

**Core Concepts: Domain and Cardinality**

* **Domain:** The domain of a function is the set of all possible input values (x-values) for which the function is defined.
* **Rational Functions:** For functions that are fractions, the function is undefined wherever the denominator equals zero, as division by zero is not allowed.
* **Cardinality:** The cardinality of a set is the number of elements in that set, denoted as $|A|$.

**Detailed Solution:**

1.  The function is $f(x) = \frac{x^2 - 36}{x + 6}$.
2.  This function is undefined when its denominator is zero.
3.  Set the denominator to zero and solve for x:
    $x + 6 = 0$
    $x = -6$
4.  The domain $D$ is the set of all real numbers except for -6. So, $D = \mathbb{R} \setminus \{-6\}$.
5.  The set $A$ is the set of *integers* that are *not* in the domain $D$. The only number not in $D$ is -6, which is an integer.
6.  Therefore, the set $A = \{-6\}$.
7.  The cardinality of $A$, written as $|A|$, is the number of elements in $A$. Since there is only one element, the cardinality is 1.

**Note:** The image shows that the answer '1' was marked as incorrect and the accepted answer was '12'. For the function as written, the cardinality is definitively 1. It is highly likely that the question intended in the test was different or the provided answer key was incorrect.

**Final Answer:** Based on the question shown, the cardinality of set A is **1**.
{{< /border >}}

{{< border >}}
### **Question 3: Cardinality of Set Difference** (from file `...141604.png`)

**The Question:**
Consider the set $S = \{a \mid a \in \mathbb{N}, a \le 18\}$. Let $R_1$ and $R_2$ be relations from $S$ to $S$ defined as $R_1 = \{(x,y) \mid x,y \in S, y = 3x\}$ and $R_2 = \{(x,y) \mid x,y \in S, y = x^2\}$. Find the cardinality of the set $R_1 \setminus R_2$.

**Core Concepts: Set Difference and Relations**

* **Relation:** A set of ordered pairs $(x,y)$.
* **Set Difference ($A \setminus B$):** The set of elements that are in set $A$ but not in set $B$. Its cardinality is $|A| - |A \cap B|$.
* **Intersection ($A \cap B$):** The set of elements that are common to both set A and set B.

**Detailed Solution:**

1.  **Identify Set S:** $S = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18\}$.
2.  **List the elements of relation $R_1$ (where y = 3x):**
    * (1, 3), (2, 6), (3, 9), (4, 12), (5, 15), (6, 18).
    * If x=7, y=21, which is not in S. So we stop.
    * $R_1 = \{(1,3), (2,6), (3,9), (4,12), (5,15), (6,18)\}$. The cardinality $|R_1| = 6$.
3.  **List the elements of relation $R_2$ (where y = x²):**
    * (1, 1), (2, 4), (3, 9), (4, 16).
    * If x=5, y=25, which is not in S. So we stop.
    * $R_2 = \{(1,1), (2,4), (3,9), (4,16)\}$. The cardinality $|R_2| = 4$.
4.  **Find the intersection ($R_1 \cap R_2$):** Look for ordered pairs that are in both sets.
    * The only common pair is **(3, 9)**.
    * $R_1 \cap R_2 = \{(3,9)\}$. The cardinality $|R_1 \cap R_2| = 1$.
5.  **Find the set difference ($R_1 \setminus R_2$):** This means "elements in $R_1$ that are not in $R_2$". We take all elements of $R_1$ and remove the ones that are also in $R_2$.
    * $R_1 \setminus R_2 = \{(1,3), (2,6), (4,12), (5,15), (6,18)\}$.
6.  **Find the cardinality:** The number of elements in $R_1 \setminus R_2$ is 5.

**Final Answer:** 5.
{{< /border >}}

{{< border >}}
### **Question 4: Tiger Word Problem** (from file `...141604.png`)

**The Question:**
In a Zoo, there are 6 Bengal white tigers and 7 Bengal royal tigers. Out of these tigers, 5 are males and 10 are either Bengal royal tigers or males. Find the number of female Bengal white tigers in the Zoo.

**Core Concepts: Set Theory (Inclusion-Exclusion Principle)**

* Let W be the set of white tigers, R be the set of royal tigers, M be the set of males, and F be the set of females.
* The Inclusion-Exclusion Principle for two sets is: $|A \cup B| = |A| + |B| - |A \cap B|$.

**Detailed Solution:**

1.  **Total Tigers:** $6 \text{ white} + 7 \text{ royal} = 13$ tigers.
2.  **Given Information:**
    * $|W| = 6$
    * $|R| = 7$
    * $|M| = 5$
    * $|R \cup M| = 10$ (The number of tigers that are Royal OR Male is 10).
3.  **Find the number of Male Royal Tigers ($|R \cap M|$):**
    * Using the formula: $|R \cup M| = |R| + |M| - |R \cap M|$
    * $10 = 7 + 5 - |R \cap M|$
    * $10 = 12 - |R \cap M|$
    * $|R \cap M| = 12 - 10 = 2$. So, there are 2 male royal tigers.
4.  **Find the number of Male White Tigers:**
    * The total number of males is 5. This is composed of male royal tigers and male white tigers.
    * $|M| = |\text{Male Royal}| + |\text{Male White}|$
    * $5 = 2 + |\text{Male White}|$
    * $|\text{Male White}| = 3$. So, there are 3 male white tigers.
5.  **Find the number of Female White Tigers:**
    * The total number of white tigers is 6. This is composed of male white tigers and female white tigers.
    * $|W| = |\text{Male White}| + |\text{Female White}|$
    * $6 = 3 + |\text{Female White}|$
    * $|\text{Female White}| = 3$.

**Final Answer:** There are **3** female Bengal white tigers.
{{< /border >}}

{{< border >}}
### **Question 5: One-to-One Functions** (from file `...141604.png`)

**The Question:**
Which of the following relations is/are a one-one function?
* $R_1 = \{(x,y) \mid x, y \in \mathbb{R}, x + y > 2\}$
* $R_2 = \{(x,y) \mid x, y \in \mathbb{R}, x > y\}$
* $R_3 = \{(x,y) \mid x+y = 12\}$
* $R_4 = \{(x,y) \mid x, y \in \mathbb{R}, y = x^2\}$

**Core Concepts: Functions and One-to-One Property**

* **Function:** A relation where every input (x) has exactly one output (y). (It must pass the "Vertical Line Test").
* **One-to-One (Injective) Function:** A function where every output (y) comes from exactly one input (x). (It must pass the "Horizontal Line Test").

**Detailed Solution:**

1.  **$R_1$ and $R_2$:** These are inequalities, not functions. For any given $x$, there are infinitely many $y$ values that satisfy the condition. For example, in $R_1$, if $x=1$, $y$ could be 2, 3, 4.5, etc. They fail the definition of a function.
2.  **$R_3$:** This is the equation $x+y=12$, which can be rewritten as $y = 12 - x$.
    * **Is it a function?** Yes. For any $x$ you input, you get exactly one $y$.
    * **Is it one-to-one?** Yes. For any output $y$, there is only one $x$ that can produce it (namely $x=12-y$). This is a straight line with a non-zero slope, which passes both the vertical and horizontal line tests.
3.  **$R_4$:** This is the equation $y=x^2$.
    * **Is it a function?** Yes. For any $x$, you get exactly one $y$.
    * **Is it one-to-one?** No. Different inputs can lead to the same output. For example, if $x=2$, $y=4$. If $x=-2$, $y=4$ as well. Since the output '4' comes from two different inputs, it is not one-to-one. It fails the horizontal line test.

**Final Answer:** Only $R_3$ is a one-to-one function.
{{< /border >}}

{{< border >}}
### **Question 6: Function Properties from a Table** (from file `...141625.png`)

**The Question:**
A function $f$ from the set of materials to the set of dielectric constant values is given. The set of elements is $\{1, 2, 3, 8, 7, 13\}$. Pick the correct statement.
(Table shows Air:1, Vacuum:2, Paper:3, Glass:8, Nerve membrane:7, Silicon:13)
* $f$ is neither one to one nor onto.
* $f$ is one to one but not onto.
* $f$ is onto but not one to one.
* $f$ is bijective.

**Core Concepts: Injective, Surjective, Bijective**

* **One-to-One (Injective):** Every element in the domain maps to a unique element in the codomain. No two inputs share the same output.
* **Onto (Surjective):** Every element in the codomain is mapped to by at least one element from the domain. The range equals the codomain.
* **Bijective:** The function is both one-to-one and onto.

**Detailed Solution:**

1.  **Domain (Inputs):** {Air, Vacuum, Paper, Glass, Nerve membrane, Silicon}
2.  **Codomain (Possible Outputs):** {1, 2, 3, 7, 8, 13}
3.  **Range (Actual Outputs):** {1, 2, 3, 8, 7, 13}
4.  **Check if it's One-to-One:** Are all the output values in the table unique? Yes, each material maps to a different number. Therefore, the function **is one-to-one**.
5.  **Check if it's Onto:** Does the range equal the codomain? The set of actual outputs is {1, 2, 3, 7, 8, 13}, which is exactly the same as the given codomain. Therefore, the function **is onto**.
6.  **Check if it's Bijective:** A function that is both one-to-one and onto is called bijective.

**Final Answer:** $f$ is bijective.
{{< /border >}}

{{< border >}}
### **Question 7: Venn Diagram Problem** (from file `...141625.png`)

**The Question:**
A group of 180 people watched movies on Netflix, of which 95 watched Dabangg, 100 watched Avatar, and 100 watched RRR. 50 people watched Dabangg and Avatar, 40 watched Avatar and RRR, and 55 watched Dabangg and RRR. Find the number of people who watched only RRR and Avatar.

**Core Concepts: Venn Diagrams & Principle of Inclusion-Exclusion**

* The number of people who watched *only* A and B is given by the number who watched A and B, minus the number who watched A, B, and C.
* Formula for three sets: $|A \cup B \cup C| = |A|+|B|+|C| - (|A \cap B|+|A \cap C|+|B \cap C|) + |A \cap B \cap C|$

**Detailed Solution:**

1.  Let D, A, R be the sets of people who watched Dabangg, Avatar, and RRR, respectively.
2.  **Given:**
    * $|D|=95, |A|=100, |R|=100$
    * $|D \cap A|=50, |A \cap R|=40, |D \cap R|=55$
    * Total people = 180. We can assume this is $|D \cup A \cup R|$ as they are part of a group that watched movies.
3.  **Find the number who watched all three ($|D \cap A \cap R|$):**
    * $|D \cup A \cup R| = |D|+|A|+|R| - (|D \cap A|+|A \cap R|+|D \cap R|) + |D \cap A \cap R|$
    * $180 = 95+100+100 - (50+40+55) + |D \cap A \cap R|$
    * $180 = 295 - 145 + |D \cap A \cap R|$
    * $180 = 150 + |D \cap A \cap R|$
    * $|D \cap A \cap R| = 30$.
4.  **Find who watched *only* RRR and Avatar:** This corresponds to the section of the Venn diagram where the RRR and Avatar circles overlap, but the Dabangg circle does not.
    * The number of people is the total in the Avatar-RRR overlap minus those who also watched Dabangg.
    * $|\text{Only A and R}| = |A \cap R| - |D \cap A \cap R|$
    * $|\text{Only A and R}| = 40 - 30 = 10$.

**Final Answer:** **10** people watched only RRR and Avatar.
{{< /border >}}

{{< border >}}
### **Question 8: Family Tree Relations** (from file `...141642.png`)

**The Question:**
Given a family tree, let $R = \{(A, B) \mid A \text{ and } B \text{ are cousins}\}$ and $S = \{(A, B) \mid A \text{ is a son of } B\}$. If $m$ is the cardinality of $R$ and $n$ is the cardinality of $S$, find the value of $m+n$.

**Core Concepts: Cardinality of Relations**
This involves carefully reading a diagram and counting the pairs that satisfy the given rules.

**Detailed Solution:**

1.  **Find the set S (A is a son of B):** We list every parent-son pair from the diagram.
    * Mahesh is the father of Shubh, Rabi, Mahendra, Rajat. (4 pairs)
    * Shubh is the father of Yashubh, Navrtna. (2 pairs)
    * Rabi is the father of Rathi, Rakesh. (2 pairs)
    * $S = \{(\text{Shubh, Mahesh}), (\text{Rabi, Mahesh}), (\text{Mahendra, Mahesh}), (\text{Rajat, Mahesh}), (\text{Yashubh, Shubh}), (\text{Navrtna, Shubh}), (\text{Rathi, Rabi}), (\text{Rakesh, Rabi})\}$
    * The cardinality is $n = |S| = 8$.
2.  **Find the set R (A and B are cousins):** Cousins are children of siblings. The siblings here are Shubh, Rabi, Mahendra, and Rajat. We need to pair the children of these siblings.
    * Children of Shubh: {Yashubh, Navrtna}
    * Children of Rabi: {Rathi, Rakesh}
    * The cousin pairs are every child from Shubh's family paired with every child from Rabi's family. The relation is between two people, so (A,B) and (B,A) are distinct pairs unless specified otherwise.
    * (Yashubh, Rathi), (Yashubh, Rakesh)
    * (Navrtna, Rathi), (Navrtna, Rakesh)
    * And the reverse pairs:
    * (Rathi, Yashubh), (Rakesh, Yashubh)
    * (Rathi, Navrtna), (Rakesh, Navrtna)
    * Total pairs = 4 + 4 = 8.
    * The cardinality is $m = |R| = 8$.
3.  **Calculate m+n:**
    * $m+n = 8 + 8 = 16$.

**Final Answer:** 16.
{{< /border >}}

{{< border >}}
### **Question 9: Function Properties (Q to Z)** (from file `...141642.png`)

**The Question:**
Define a function $f: \mathbb{Q} \to \mathbb{Z}$, such that $f(p/q) = p-q$, where $gcd(p,q)=1$. Which of the following is true?
* $f$ is one to one but not onto.
* $f$ is neither one to one nor onto.
* $f$ is onto but not one to one.
* $f$ is a bijective function.

**Core Concepts: Functions from Rationals to Integers**

* **One-to-One (Injective):** If $f(a) = f(b)$, then it must be that $a=b$.
* **Onto (Surjective):** For any element $z$ in the codomain ($\mathbb{Z}$), there exists an element $x$ in the domain ($\mathbb{Q}$) such that $f(x)=z$.

**Detailed Solution:**

1.  **Check if One-to-One:** Can we find two different inputs that give the same output? Let the output be 1. We are looking for $p-q=1$.
    * Consider the input $x = 3/2$. Here $p=3, q=2$. $gcd(3,2)=1$. The input is valid. $f(3/2) = 3-2 = 1$.
    * Consider the input $x = 4/3$. Here $p=4, q=3$. $gcd(4,3)=1$. The input is valid. $f(4/3) = 4-3 = 1$.
    * Since $f(3/2) = f(4/3)$ but $3/2 \neq 4/3$, the function is **not one-to-one**.
2.  **Check if Onto:** Can we produce any integer $k$ as an output? We need to find a simplified fraction $p/q$ such that $p-q = k$.
    * Let $k$ be any integer in $\mathbb{Z}$.
    * Let's choose $p = k+1$ and $q=1$.
    * The input fraction is $(k+1)/1$.
    * Is it in simplest form? Yes, the greatest common divisor of any integer and 1 is always 1. So $gcd(k+1, 1)=1$.
    * Let's compute the function's value: $f((k+1)/1) = (k+1) - 1 = k$.
    * Since we can find a valid input in $\mathbb{Q}$ to produce any integer $k$ in $\mathbb{Z}$, the function **is onto**.

**Final Answer:** $f$ is onto but not one to one.
{{< /border >}}

{{< border >}}
### **Question 10: Properties of Relations** (from file `...141656.png`)

**The Question:**
Consider the relations $R_1$ and $R_2$ on $\mathbb{N}$ defined as:
* $R_1 = \{(a,b) \mid b = a+1, \text{ and } a,b \in \mathbb{N}\}$
* $R_2 = \{(a,b) \mid b \ge a, \text{ and } a,b \in \mathbb{N}\}$
Which of the following is(are) true?

**Core Concepts: Properties of Relations**
Let R be a relation on a set A.
* **Reflexive:** For every $a \in A$, the pair $(a,a) \in R$.
* **Symmetric:** If $(a,b) \in R$, then $(b,a) \in R$.
* **Transitive:** If $(a,b) \in R$ and $(b,c) \in R$, then $(a,c) \in R$.

**Detailed Solution:**

**Analysis of $R_1 = \{(a,b) \mid b = a+1\}$**
* **Reflexive?** No. For $(a,a)$ to be in $R_1$, we would need $a = a+1$, which is false for all numbers.
* **Symmetric?** No. If $(a,b) \in R_1$, then $b=a+1$. For $(b,a)$ to be in $R_1$, we would need $a=b+1$. Substituting the first equation into the second gives $a = (a+1)+1$, or $a=a+2$, which is false. E.g., $(2,3) \in R_1$ but $(3,2) \notin R_1$.
* **Transitive?** No. If $(a,b) \in R_1$ and $(b,c) \in R_1$, then $b=a+1$ and $c=b+1$. For $(a,c)$ to be in $R_1$, we would need $c=a+1$. But substituting gives $c = (a+1)+1 = a+2$. Since $c \neq a+1$, the relation is not transitive.

**Analysis of $R_2 = \{(a,b) \mid b \ge a\}$**
* **Reflexive?** Yes. For any natural number $a$, it is true that $a \ge a$. So $(a,a) \in R_2$.
* **Symmetric?** No. If $(a,b) \in R_2$, then $b \ge a$. This does not imply that $a \ge b$. For example, $(3,5) \in R_2$ because $5 \ge 3$, but $(5,3) \notin R_2$ because $3 \not\ge 5$.
* **Transitive?** Yes. If $(a,b) \in R_2$ and $(b,c) \in R_2$, then we have $b \ge a$ and $c \ge b$. Combining these inequalities gives $c \ge b \ge a$, which implies $c \ge a$. Therefore, $(a,c) \in R_2$.

**Evaluating the Options:**
* $R_1$ is reflexive but not symmetric. (False, it is not reflexive).
* $R_2$ is both reflexive and symmetric. (False, it is not symmetric).
* $R_1$ is neither symmetric nor transitive. (**True**).
* $R_2$ is both reflexive and transitive. (**True**).

**Final Answer:** The statements "$R_1$ is neither symmetric nor transitive" and "$R_2$ is both reflexive and transitive" are true.
{{< /border >}}