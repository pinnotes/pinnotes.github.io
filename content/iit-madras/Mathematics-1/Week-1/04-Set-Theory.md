---
title: Set Theory
date: 2025-08-09
weight: 1.4
image: https://media.geeksforgeeks.org/wp-content/uploads/20230509003527/Mathematics-Banners-4.webp
emoji: 🧮
slug: "Set Theory"
linkTitle: Set Theory
series_order: 1.4
---

A well-defined collection of distinct objects called elements or members.

{{< youtube 8z04uTycZpE >}}



## 1️⃣ Define Set Concepts with Notations

- **Set ( \$ A \$ )**: A well-defined collection of distinct objects called elements or members.
Example: \$ A = \{1, 2, 3, 4\} \$
📦 *Think of it as a box containing elements.*
- **Cardinality ( \$ |A| \$ )**: The number of elements in set \$ A \$.
Example: If \$ A = \{1, 2, 3\} \$, then \$ |A| = 3 \$.
🔢 *Counts how many items are in the set.*
- **Subset ( \$ B \subseteq A \$ )**: Set \$ B \$ is a subset of \$ A \$ if every element of \$ B \$ is also in \$ A \$.
Example: \$ B = \{1, 2\} \subseteq A = \{1, 2, 3\} \$.
🤝 *Everything in \$ B \$ is in \$ A \$.*
- **Proper Subset ( \$ B \subset A \$ )**: \$ B \$ is a subset of \$ A \$, but \$ B \neq A \$.
Example: \$ B = \{1, 2\} \subset A = \{1, 2, 3\} $.  
🚫 *$ B \$ does not contain all elements of \$ A \$.*
- **Power Set ( \$ \mathcal{P}(A) \$ )**: The set of all subsets of \$ A \$, including the empty set and \$ A \$ itself.
Example: For \$ A = \{1, 2\} \$,
\$ \mathcal{P}(A) = \{\emptyset, \{1\}, \{2\}, \{1,2\}\} \$.
📚 *All possible collections you can make from the set.*
- **Empty Set ( \$ \emptyset \$ )**: The set with no elements.
Example: \$ \emptyset = \{\} \$.
❌ *A box with nothing inside.*

***

### Diagram illustrating sets and subsets:

![Venn Diagram of Set and Subsets](https://www.ck12.org//flx/show/THUMB_POSTCARD/image/user%3A33a1144c0759/1.1.png)


***





## 2️⃣ Interpret a Venn Diagram as Visualizing a Set

- **Venn diagrams** use circles to represent sets, showing elements they contain.
- Overlapping regions represent elements common to multiple sets.
- Example:

![Basic Venn Diagram](https://www.investopedia.com/thmb/7BwAf5Ti-5HWC3yMPT2hiNE6ap0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/VennDiagram-a055088ccae84801bfefe8ec90ff866b.jpg)

![Basic Venn Diagram](https://www.investopedia.com/thmb/fkBAVOk2DzJcX31hcM-iKJxzZCg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/VennDiagram1_2-6b1d04d5b6874b4799b1e2f056a15469.png)

- 🎯 *The enclosed area depicts all elements in the set.*
- This helps in understanding unions, intersections, and subsets visually.

***





## 3️⃣ Why Does a Set with n Elements Have \$ 2^n \$ Subsets?

- For each element in a set, there are **2 choices** when forming a subset:

1. Include the element
2. Exclude the element
- Since these decisions are independent for each of the \$ n \$ elements, total subsets:

$$
2 \times 2 \times \cdots \text{(n times)} = 2^n
$$
- **Example:** For \$ A = \{a, b\} \$, \$ n=2 \$:
Subsets =
\$ \emptyset, \{a\}, \{b\}, \{a,b\} \$ → 4 subsets = \$ 2^2 \$.

***

### Diagram for Power Set ($2^n$ rule):

![Power Set Diagram](https://www.ck12.org//flx/show/THUMB_POSTCARD/image/user%3A33a1144c0759/1.2.png)

🌳 *Each branch represents a choice for elements included or excluded.*

***

## Summary Emojis

📦 = set
🔢 = cardinality
🤝 = subset
🚫 = proper subset
📚 = power set
❌ = empty set
🎯 = Venn diagram depiction
🌳 = subset tree diagram

This detailed guide combines mathematical notation, visualization, and intuitive reasoning to make set theory concepts clear and engaging.

***

## Exercise Questions 🤯

{{< border >}}

### 1) Which of the following sets are same?

(i) {Ankitha, Keerthana, Raju, Suresh}
(ii) {Raju, Ankitha, Keerthana, Raju, Ankitha, Suresh}
(iii) {Keerthana, Suresh, Dheeraj, Raju, Ankitha}
(iv) {Suresh, Raju, Ankitha, Keerthana}
(v) {Dheeraj, Raju, Soumya, Keerthana}

#### **Detailed Answer:**

Two sets are the same if they contain exactly the same elements, regardless of order or repetition.

- (i) {Ankitha, Keerthana, Raju, Suresh}
- (ii) {Raju, Ankitha, Keerthana, Raju, Ankitha, Suresh} (Duplicates ignored; set becomes {Raju, Ankitha, Keerthana, Suresh})
- (iii) {Keerthana, Suresh, Dheeraj, Raju, Ankitha} (has Dheeraj, so different)
- (iv) {Suresh, Raju, Ankitha, Keerthana}
- (v) {Dheeraj, Raju, Soumya, Keerthana} (has Dheeraj, Soumya, so different)

So, (i), (ii), and (iv) all contain Ankitha, Keerthana, Raju, and Suresh—so they are the same set.

**Correct Answer:** (i), (ii), and (iv)

{{< /border >}}

{{< border >}}

### 2) Suppose \$ X = \{3, \pi, Tiger, Ball, -40, Dhoni\} \$. Which of the following statement(s) is(are) true about \$ X \$?

A) \$ X \$ is not a set because a collection of names of persons and numbers together will not be considered a set
B) \$ X \$ is not a set because “$\pi$” cannot be an element of a set
C) \$ X \$ is a set because \$ X \$ contains items that are from more than two categories
D) \$ X \$ is a set because it is a collection of different well-defined items

#### **Detailed Answer:**

A **set** in mathematics is a collection of distinct, well-defined objects, regardless of their type.

- A) Incorrect. Sets can contain elements from any category as long as the collection is well-defined.
- B) Incorrect. There is no restriction preventing $\pi$ from being an element.
- C) Irrelevant. The number of categories does not impact whether a collection is a set.
- D) **Correct.** As long as the items are well-defined and distinct, any collection can form a set.

**Correct Answer:** D

{{< /border >}}

{{< border >}}

### 3) Which of the following sets is a subset of the set of prime numbers?

A) {2, 3, 5, 8, 11}
B) {3, 5, 7, 11}
C) {2, 5, 7, 27}
D) {5, 9}

#### **Detailed Answer:**

Prime numbers: 2, 3, 5, 7, 11, 13, 17, ...
A subset of primes must contain only primes:

- (A) 8 is not a prime.
- (B) All are primes: 3, 5, 7, 11.
- (C) 27 is not a prime.
- (D) 9 is not a prime.

**Correct Answer:** (B) {3, 5, 7, 11}

{{< /border >}}

{{< border >}}

### 4) Which of the following statement(s) is(are) false?

A) Venn diagrams are pictorial representations of sets.
B) Every set is a subset of itself.
C) \$ X \subseteq Y \$ implies that \$ X \$ is a proper subset of \$ Y \$.
D) The empty set contains only one element i.e. \$ \phi \$.

#### **Detailed Answer:**

- A) True. Venn diagrams represent sets visually.
- B) True. Every set is a subset of itself by definition.
- C) **False.** \$ X \subseteq Y \$ means \$ X \$ is a subset, not necessarily a proper subset; \$ X \$ can be equal to \$ Y \$.
- D) **False.** The empty set contains NO elements, not one element.

**Correct Answers:** C and D are false.

{{< /border >}}

{{< border >}}

### 5) Which of the following are empty sets?

A) Set of all perfect squares between 45 and 50
B) Set of all integers which are both even and odd
C) Set of all years having 366 days
D) Set of all prime numbers divisible by 2

#### **Detailed Answer:**

- **A) Perfect squares between 45 and 50:**
The perfect squares are 1, 4, 9, 16, 25, 36, 49, 64...
Between 45 and 50, only 49 is a perfect square, so not empty.
- **B) Integers both even and odd:**
No number can be both even and odd simultaneously. The set is empty.
- **C) Years having 366 days:**
Leap years have 366 days; such years exist. Not empty.
- **D) Prime numbers divisible by 2:**
2 is a prime number divisible by 2. So, not empty.

**Correct Answer:** Option B (Set of all integers which are both even and odd).

{{< /border >}}

{{< border >}}

### 6) If \$ X = \{a, b, c\} \$, then the power set \$ P(X) \$ =

A) \$ \{\phi, \{a\}, \{b\}, \{c\}, \{a, b\}, \{a, c\}, \{b, c\}, \{a, b, c\} \} \$
B) \$ \{\{a\}, \{b\}, \{c\}, \{a, b\}, \{a, c\}, \{b, c\}, \{a, b, c\}\} \$
C) \$ \{\phi, \{a\}, \{b\}, \{a, b\}, \{a, c\}, \{b, c\}, \{a, b, c\}\} \$
D) \$ \{\{a\}, \{b\}, \{a, b\}, \{a, c\}, \{b, c\}\} \$

#### **Detailed Answer:**

The **power set** of a set with 3 elements has \$ 2^3 = 8 \$ subsets:

$$
P(X) = \{\phi, \{a\}, \{b\}, \{c\}, \{a, b\}, \{a, c\}, \{b, c\}, \{a, b, c\}\}
$$

**Correct Answer:** A

{{< /border >}}

{{< border >}}

### 7) Let \$ M \$ be the set of all days in a week whose starting letter is either ‘S’ or ‘T’, and \$ N \$ be the set of all months in a year whose ending letter is ‘Y’. What are the cardinalities of \$ M \$ and \$ N \$ respectively?

Options:
A) 4, 3
B) 3, 4
C) 4, 4
D) 3, 3

#### **Detailed Answer:**

- **Days in a week beginning with 'S' or 'T':**
    - Sunday (S)
    - Saturday (S)
    - Tuesday (T)
    - Thursday (T)

So, \$ M = \{Sunday, Saturday, Tuesday, Thursday\} \Rightarrow |M| = 4 \$
- **Months ending with 'Y':**
    - January
    - February
    - May
    - July

So, \$ N = \{January, February, May, July\} \Rightarrow |N| = 4 \$

**Correct Answer:** C) 4, 4

{{< /border >}}