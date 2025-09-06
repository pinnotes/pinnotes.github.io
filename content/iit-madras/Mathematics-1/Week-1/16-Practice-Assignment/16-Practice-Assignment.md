---
title: Week 1 | Practice Assignemnt
date: 2025-08-09
weight: 16
image: https://gradedassignments.github.io/wp-content/uploads/2023/08/Copy-of-Copy-of-thubmbnail-1224-%C3%97-768-px-960-%C3%97-500-px-1.png
emoji: 🧮
slug: "Week 1 | Practice Assignemnt"
linkTitle: Week 1 | Practice Assignemnt
series_order: 16
---


{{< border >}}
### **Question 1: Venn Diagram Interpretation** (from file `image_5c141c.png`)

**The Question:**
Given below is a Venn diagram for sets of students who take Maths, Physics, and Statistics. Which of the option(s) is (are) correct?
[Venn diagram shows three overlapping circles: Maths (regions A, D, G, F), Physics (regions B, E, G, F), and Statistics (regions C, D, G, E)]
* D is the set of students who take both Maths and Statistics.
* $D \cup E \cup F \cup G$ is the set of all students who take at least two subjects.
* E is a subset of the set of the students who have not taken Maths.
* $Maths \setminus D$ is the set of all students who have taken only Maths.
* $Physics \setminus (D \cup G \cup E)$ is the set of all students who have taken only Physics.

**Core Concepts: Set Operations in Venn Diagrams**
* **Intersection ($A \cap B$):** The region where circles A and B overlap. Represents elements in BOTH A and B.
* **Union ($A \cup B$):** The total area covered by circles A and B. Represents elements in A OR B (or both).
* **Set Difference ($A \setminus B$):** The region of circle A that does not overlap with circle B. Represents elements in A but NOT in B.
* **Subset ($A \subset B$):** Circle A is entirely contained within circle B.

**Detailed Solution:**
Let's analyze each statement:

1.  **D is the set of students who take both Maths and Statistics.**
    * The region for "both Maths and Statistics" is the intersection of the Maths and Statistics circles, which is $D \cup G$. The statement says this set is just D. This is **incorrect**. D represents students who take Maths and Statistics but NOT Physics.

2.  **$D \cup E \cup F \cup G$ is the set of all students who take at least two subjects.**
    * The regions for intersections are: Maths & Stats ($D, G$), Maths & Physics ($F, G$), Physics & Stats ($E, G$). The students taking at least two subjects are all students in these intersections. This union is $\{D, E, F, G\}$. This statement is **correct**.

3.  **E is a subset of the set of the students who have not taken Maths.**
    * The set of students who have taken Maths is the entire "Maths" circle: $\{A, D, F, G\}$.
    * The set of students who have *not* taken Maths is everything outside that circle: $\{B, E, C\}$.
    * Is region E a subset of $\{B, E, C\}$? Yes, it is. This statement is **correct**.

4.  **$Maths \setminus D$ is the set of all students who have taken only Maths.**
    * The set "Maths" is $\{A, D, F, G\}$. The set "D" is just region D.
    * $Maths \setminus D = \{A, F, G\}$.
    * The set of students who have taken "only Maths" is region A.
    * Since $\{A, F, G\} \neq \{A\}$, this statement is **incorrect**.

5.  **$Physics \setminus (D \cup G \cup E)$ is the set of all students who have taken only Physics.**
    * The set "Physics" is $\{B, E, F, G\}$. The set $(D \cup G \cup E)$ is $\{D, G, E\}$.
    * $Physics \setminus (D \cup G \cup E) = \{B, F\}$.
    * The set of students who have taken "only Physics" is region B.
    * Since $\{B, F\} \neq \{B\}$, this statement is **incorrect**.

**Final Answer:** The second and third statements are correct.
{{< /border >}}

{{< border >}}
### **Question 2: Set Cardinalities** (from file `image_5c141c.png`)

**The Question:**
Let $A$ be the set of natural numbers less than 6 and whose greatest common divisor with 6 is 1. Let $B$ be the set of divisors of 6. What are the cardinalities of $A$, $B$, $A \cup B$, and $A \cap B$?

**Core Concepts: Set Theory and Number Theory**
* **Natural Numbers:** The set $\{1, 2, 3, 4, ...\}$.
* **Greatest Common Divisor (GCD):** The largest positive integer that divides two or more integers without a remainder. Two numbers are "coprime" if their GCD is 1.
* **Divisors:** Numbers that divide an integer evenly.
* **Cardinality ($|S|$):** The number of elements in a set S.

**Detailed Solution:**

1.  **Find Set A:**
    * Natural numbers less than 6 are $\{1, 2, 3, 4, 5\}$.
    * We need to find which of these has a GCD of 1 with 6.
    * $GCD(1, 6) = 1$  (1 is in A)
    * $GCD(2, 6) = 2$
    * $GCD(3, 6) = 3$
    * $GCD(4, 6) = 2$
    * $GCD(5, 6) = 1$  (5 is in A)
    * So, $A = \{1, 5\}$. The cardinality is $|A| = 2$.

2.  **Find Set B:**
    * The divisors of 6 are the numbers that divide 6 evenly.
    * $B = \{1, 2, 3, 6\}$. The cardinality is $|B| = 4$.

3.  **Find the Union ($A \cup B$):**
    * This set contains all unique elements from both A and B.
    * $A \cup B = \{1, 5\} \cup \{1, 2, 3, 6\} = \{1, 2, 3, 5, 6\}$.
    * The cardinality is $|A \cup B| = 5$.

4.  **Find the Intersection ($A \cap B$):**
    * This set contains only the elements common to both A and B.
    * $A \cap B = \{1, 5\} \cap \{1, 2, 3, 6\} = \{1\}$.
    * The cardinality is $|A \cap B| = 1$.

**Final Answer:** The cardinalities are $|A|=2$, $|B|=4$, $|A \cup B|=5$, and $|A \cap B|=1$. This corresponds to the option **(2, 4, 5, 1)**.
{{< /border >}}

{{< border >}}
### **Question 3: Venn Diagram Representation** (from file `image_5c139e.png`)

**The Question:**
Let A be the set of all even natural numbers (including zero), B be the set of all odd natural numbers, C be the set of all natural numbers which divide 100, and D be the set of all prime numbers less than 100. Which of the following is (are) correct representation of these sets?

**Core Concepts: Set Relationships**
* **Disjoint Sets:** Two sets with no elements in common ($A \cap B = \emptyset$). Their circles in a Venn diagram do not overlap.
* **Intersecting Sets:** Sets that share one or more common elements. Their circles overlap.
* **Subset ($A \subset B$):** All elements of set A are also in set B. Circle A is inside circle B.

**Detailed Solution:**
Let's analyze the relationships between the sets:
* **A (Evens) and B (Odds):** An integer cannot be both even and odd. Therefore, sets A and B are **disjoint**.
* **C (Divisors of 100):** $C = \{1, 2, 4, 5, 10, 20, 25, 50, 100\}$.
* **D (Primes < 100):** $D = \{2, 3, 5, 7, 11, ...\}$.
* **A and D:** Do they intersect? Yes, the number 2 is both even and prime. So, $A \cap D = \{2\}$.
* **C and D:** Do they intersect? Yes, the prime divisors of 100 are 2 and 5. So, $C \cap D = \{2, 5\}$.
* **A and C:** Do they intersect? Yes, the even divisors of 100 are {2, 4, 10, 20, 50, 100}.
* **A, C, and D:** Do they have a common intersection? Yes, the number 2 is in all three sets. So $A \cap C \cap D = \{2\}$.

Now let's check the diagrams:
1.  **First Diagram:** Shows B and D as subsets of A. This is incorrect. Odd numbers (B) are not even numbers (A).
2.  **Second Diagram:** Shows A, B, and C all intersecting. This is incorrect because A and B are disjoint.
3.  **Third Diagram:** Shows C and D intersecting. This relationship is true ($C \cap D = \{2, 5\}$). This is a correct, though possibly incomplete, representation.
4.  **Fourth Diagram:** Shows A, C, and D all intersecting. This is also true, as they all share the number 2.

The question asks for a correct representation. Both the third and fourth diagrams show a correct relationship. However, the fourth diagram, showing the three-way intersection of A, C, and D, represents a more complex and specific true relationship between the sets. In multiple-choice questions of this type, you often look for the diagram that correctly depicts the given relationship. Both C and D intersecting (Diagram 3) and A, C, and D intersecting (Diagram 4) are factually correct statements. Without further context, both could be considered correct.

**Final Answer:** Both the **third and fourth diagrams** show correct relationships between the defined sets.
{{< /border >}}

{{< border >}}
### **Question 4: Multiples and Divisors** (from file `image_5c109d.png`)

**The Question:**
Let A be the set of natural numbers which are multiples of 5 strictly less than 100, and B be the set of natural numbers which divide 100. What are the cardinalities of the following sets: $B \setminus A$, $A \cap B$, and $B$?

**Core Concepts: Multiples, Divisors, and Set Operations**
* **Multiples of 5:** Numbers obtained by multiplying 5 by an integer (5, 10, 15...).
* **Divisors of 100:** Numbers that divide 100 with no remainder.
* **$B \setminus A$ (Set Difference):** Elements that are in B but not in A.
* **$A \cap B$ (Intersection):** Elements that are in both A and B.

**Detailed Solution:**

1.  **Find Set A and its elements:**
    * A = {5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95}. Note: "strictly less than 100" means 100 is not included.
2.  **Find Set B and its cardinality:**
    * The divisors of 100 are: $B = \{1, 2, 4, 5, 10, 20, 25, 50, 100\}$.
    * The cardinality is $|B| = 9$.
3.  **Find the intersection ($A \cap B$) and its cardinality:**
    * We need elements that are in both lists. These are the divisors of 100 that are also multiples of 5 (and less than 100).
    * From set B, the multiples of 5 are {5, 10, 20, 25, 50, 100}.
    * Since A does not include 100, the intersection is $A \cap B = \{5, 10, 20, 25, 50\}$.
    * The cardinality is $|A \cap B| = 5$.
4.  **Find the set difference ($B \setminus A$) and its cardinality:**
    * These are elements in B that are not in A. We take set B and remove the elements from the intersection we just found.
    * $B \setminus A = \{1, 2, 4, 100\}$.
    * The cardinality is $|B \setminus A| = 4$.

**Final Answer:** The cardinalities are $|B \setminus A| = 4$, $|A \cap B| = 5$, and $|B| = 9$. This corresponds to the option **(4, 5, 9)**.
{{< /border >}}

{{< border >}}
### **Question 5: Cartesian Product and Power Set** (from file `image_5c109d.png`)

**The Question:**
Suppose the cardinality of set A is 2 and the cardinality of set B is 3, what are the cardinalities of the cartesian product $A \times B$ and the power set of B?

**Core Concepts: Cartesian Product and Power Set**
* **Cartesian Product ($A \times B$):** The set of all ordered pairs $(a, b)$ where $a \in A$ and $b \in B$. Its cardinality is $|A| \times |B|$.
* **Power Set ($\mathcal{P}(S)$):** The set of all possible subsets of a set S, including the empty set and the set itself. Its cardinality is $2^{|S|}$.

**Detailed Solution:**

1.  **Given:** $|A| = 2$ and $|B| = 3$.
2.  **Cardinality of Cartesian Product ($A \times B$):**
    * $|A \times B| = |A| \times |B| = 2 \times 3 = 6$.
3.  **Cardinality of the Power Set of B ($\mathcal{P}(B)$):**
    * $|\mathcal{P}(B)| = 2^{|B|} = 2^3 = 8$.

**Note:** The options provided in the image are (6 and 36), (5 and 32), (6 and 64), (5 and 25). None of these match the calculated answer of (6 and 8). There is likely a typo in the question or options. If the question intended to ask for the power set of the **Cartesian product**, $\mathcal{P}(A \times B)$, the calculation would be:
* $|\mathcal{P}(A \times B)| = 2^{|A \times B|} = 2^6 = 64$.
This would make the answer (6 and 64).

**Final Answer:** Based on a likely typo in the question, the intended answer is **6 and 64**.
{{< /border >}}

{{< border >}}
### **Question 6: Newspaper Survey** (from file `image_5c109d.png`)

**The Question:**
In a survey it is found that in a particular locality 64 houses buy English newspapers, 94 houses buy Tamil newspapers, and 26 houses buy both English and Tamil newspapers. How many houses buy newspapers of only one language?

**Core Concepts: Set Theory**
* Let E be the set of houses that buy English newspapers and T be the set for Tamil.
* The number of houses that buy *only* English is $|E| - |E \cap T|$.
* The number of houses that buy *only* Tamil is $|T| - |E \cap T|$.

**Detailed Solution:**

1.  **Given Information:**
    * Total English buyers, $|E| = 64$.
    * Total Tamil buyers, $|T| = 94$.
    * Buyers of both, $|E \cap T| = 26$.
2.  **Calculate buyers of ONLY English:**
    * $|E_{\text{only}}| = |E| - |E \cap T| = 64 - 26 = 38$.
3.  **Calculate buyers of ONLY Tamil:**
    * $|T_{\text{only}}| = |T| - |E \cap T| = 94 - 26 = 68$.
4.  **Calculate total buyers of only one language:**
    * Total = $|E_{\text{only}}| + |T_{\text{only}}| = 38 + 68 = 106$.

**Final Answer:** **106** houses buy newspapers of only one language.
{{< /border >}}

{{< border >}}
### **Question 7: Irrational Numbers** (from file `image_5c109d.png`)

**The Question:**
Which of the following numbers is (are) irrational?
* $\sqrt{2} + \sqrt{3}$
* $(2 + \sqrt{3})(2 - \sqrt{3})$
* $(2 + \sqrt{3}) + (2 - \sqrt{3})$
* $2\sqrt{3} + 3\sqrt{2}$

**Core Concepts: Rational and Irrational Numbers**
* **Rational:** Can be written as a fraction $p/q$.
* **Irrational:** Cannot be written as a fraction $p/q$. The square root of any non-perfect square is irrational.
* The sum/difference of a rational and an irrational number is irrational.
* The sum/product of two irrationals *can* be rational (e.g., $\sqrt{2} \times \sqrt{2} = 2$).

**Detailed Solution:**

1.  **$\sqrt{2} + \sqrt{3}$**: Both $\sqrt{2}$ and $\sqrt{3}$ are irrational. Their sum is also **irrational**.
2.  **$(2 + \sqrt{3})(2 - \sqrt{3})$**: This is in the form $(a+b)(a-b) = a^2 - b^2$.
    * $2^2 - (\sqrt{3})^2 = 4 - 3 = 1$. This is **rational**.
3.  **$(2 + \sqrt{3}) + (2 - \sqrt{3})$**: When we add these, the irrational parts cancel out.
    * $2 + \sqrt{3} + 2 - \sqrt{3} = 4$. This is **rational**.
4.  **$2\sqrt{3} + 3\sqrt{2}$**: This is the sum of two different irrational numbers. This sum remains **irrational**.

**Final Answer:** The first ($\sqrt{2} + \sqrt{3}$) and fourth ($2\sqrt{3} + 3\sqrt{2}$) options are irrational.
{{< /border >}}

{{< border >}}
### **Question 8: Properties of a Relation** (from file `image_5c1041.png`)

**The Question:**
Which of the following (are) true for R given below?
$R = \{(a, b) \mid \text{both } a \text{ and } b \text{ are even non-zero integers and } \frac{a}{b} \text{ is an integer}\}$
* R is a reflexive relation
* R is a symmetric relation
* R is a transitive relation
* R is an equivalence relation

**Core Concepts: Properties of Relations**
A relation R on a set S is:
* **Reflexive:** If $(x, x) \in R$ for every $x \in S$.
* **Symmetric:** If $(x, y) \in R$ then $(y, x) \in R$.
* **Transitive:** If $(x, y) \in R$ and $(y, z) \in R$ then $(x, z) \in R$.
* **Equivalence Relation:** If it is reflexive, symmetric, AND transitive.

**Detailed Solution:**

1.  **Reflexive:** For any non-zero even integer $a$, is $(a, a) \in R$? We check if $a/a$ is an integer. $a/a = 1$, which is an integer. So, R is **reflexive**.
2.  **Symmetric:** If $(a, b) \in R$, is $(b, a) \in R$? If $a/b$ is an integer, does it mean $b/a$ must also be an integer? Let's test with an example. Let $a=4$ and $b=2$. Both are non-zero even integers. $a/b = 4/2 = 2$, which is an integer. So $(4, 2) \in R$. Now check the reverse: $b/a = 2/4 = 0.5$, which is not an integer. So $(2, 4) \notin R$. Therefore, R is **not symmetric**.
3.  **Transitive:** If $(a, b) \in R$ and $(b, c) \in R$, is $(a, c) \in R$? This means $a/b = k$ and $b/c = m$, where $k$ and $m$ are integers. From these, we get $a = bk$ and $b = cm$. Substituting the second into the first gives $a = (cm)k = c(mk)$. Since $m$ and $k$ are integers, their product $mk$ is also an integer. Therefore, $a/c = mk$, which means $a/c$ is an integer. So, R is **transitive**.
4.  **Equivalence Relation:** An equivalence relation must be all three. Since R is not symmetric, it is **not an equivalence relation**.

**Final Answer:** "R is a reflexive relation" and "R is a transitive relation" are the true statements.
{{< /border >}}

{{< border >}}
### **Question 9: Domain and Range** (from file `image_5c1041.png`)

**The Question:**
Find the domain and range of the following real valued function.
$f(x) = \sqrt{3-x}$

**Core Concepts: Domain and Range of Radical Functions**
* **Domain:** The set of valid input x-values. For a square root function, the expression inside the radical (the radicand) must be greater than or equal to zero.
* **Range:** The set of possible output y-values. The principal (positive) square root function, denoted by $\sqrt{\cdot}$, always produces a non-negative result.

**Detailed Solution:**

1.  **Finding the Domain:**
    * The expression inside the square root, $3-x$, must be non-negative.
    * $3 - x \ge 0$
    * Add $x$ to both sides: $3 \ge x$
    * This is the same as $x \le 3$.
    * So, the domain is $\{x \in \mathbb{R} \mid x \le 3\}$.

2.  **Finding the Range:**
    * The function is $y = \sqrt{3-x}$.
    * The output of the $\sqrt{\cdot}$ symbol is always non-negative. It can be zero (when $x=3$) or any positive number.
    * Therefore, $y \ge 0$.
    * The range is $\{y \in \mathbb{R} \mid y \ge 0\}$.

**Final Answer:** The correct option is: **domain = $\{x \in \mathbb{R} \mid x \le 3\}$; range = $\{y \in \mathbb{R} \mid y \ge 0\}$** (using y for range for clarity).
{{< /border >}}

{{< border >}}
### **Question 10: Properties of a Function** (from file `image_5c1041.png`)

**The Question:**
Which of the following is (are) true for the given function?
$f: \mathbb{R} \to \mathbb{R}$
$f(x) = x^2 + 2$
* f is not injective.
* f is surjective.
* f is not surjective.
* f is bijective.

**Core Concepts: Injective, Surjective, Bijective**
* **Injective (One-to-One):** Every output corresponds to exactly one input. Fails if you can find $f(a) = f(b)$ for $a \neq b$.
* **Surjective (Onto):** The range (all possible outputs) is equal to the codomain. For $f: \mathbb{R} \to \mathbb{R}$, this means the function must be able to produce every real number as an output.
* **Bijective:** The function is both injective and surjective.

**Detailed Solution:**

1.  **Check for Injectivity:**
    * Let's test two different inputs. Let $x=2$ and $x=-2$.
    * $f(2) = 2^2 + 2 = 6$.
    * $f(-2) = (-2)^2 + 2 = 6$.
    * Since different inputs (2 and -2) lead to the same output (6), the function is **not injective**.

2.  **Check for Surjectivity:**
    * The codomain is all real numbers ($\mathbb{R}$).
    * Let's find the range (the actual outputs). The term $x^2$ is always greater than or equal to 0.
    * Therefore, the minimum value of $f(x) = x^2 + 2$ is $0 + 2 = 2$.
    * The range of the function is $[2, \infty)$, or $\{y \in \mathbb{R} \mid y \ge 2\}$.
    * Since the range does not cover the entire codomain (for example, it's impossible to get an output of 0 or -5), the function is **not surjective**.

3.  **Check for Bijectivity:**
    * A function must be both injective and surjective to be bijective. Since this function is neither, it is **not bijective**.

**Final Answer:** The true statements are **"f is not injective"** and **"f is not surjective"**.
{{< /border >}}

{{< border >}}
### **Question 11: Domain of a Function** (from file `image_5c0fe4.png`)

**The Question:**
Find the domain of the following real valued function.
$f(x) = \frac{\sqrt{x+2}}{x^2 - 9}$

**Core Concepts: Domain of Combined Functions**
To find the domain, we must satisfy all conditions simultaneously:
1.  The expression inside any square root must be non-negative ($\ge 0$).
2.  The denominator of any fraction must not be zero ($\neq 0$).

**Detailed Solution:**

1.  **Condition from the Square Root (Numerator):**
    * The term inside the square root, $x+2$, must be greater than or equal to zero.
    * $x + 2 \ge 0$
    * $x \ge -2$.

2.  **Condition from the Denominator:**
    * The denominator, $x^2 - 9$, cannot be equal to zero.
    * $x^2 - 9 \neq 0$
    * $x^2 \neq 9$
    * $x \neq 3$ and $x \neq -3$.

3.  **Combine the Conditions:**
    * We need to find the set of x-values that satisfy all rules.
    * We need $x \ge -2$ AND $x \neq 3$ AND $x \neq -3$.
    * The condition $x \ge -2$ automatically ensures that $x \neq -3$.
    * So, the final combined condition is $x \ge -2$ and $x \neq 3$.

**Final Answer:** The domain is **$\{x \in \mathbb{R} \mid x \ge -2, x \neq 3\}$**.
{{< /border >}}