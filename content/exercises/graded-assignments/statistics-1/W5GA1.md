---
title: Week 5 Graded Assignment Solution
weight: 5
tags: 
- statistics
categories:
- Statistics Graded Assignment
series:
- Statistics Graded Assignment
excludeSearch: false
width: wide
---

Here are all the questions and their solutions from the **Week_5_GA_Solution.pdf** (Statistics for Data Science-1, Week-5 Graded Assignment)[^1]:

---

## **1. Covering Registers with Coloured Papers**

**Question:**
Vinod has \$ n \$ registers and \$ m \$ cover papers of different colours. In how many ways can he cover all the registers with cover papers?

**Answer:**
\$ m \times (m - 1) \times (m - 2) \times \dots \times (m - n + 1) \$

**Solution:**
For the 1st register: \$ m \$ ways.
For the 2nd register: \$ m-1 \$ ways.
...
For the \$ n \$th register: \$ m-n+1 \$ ways.
Total: \$ m \times (m - 1) \times \dots \times (m - n + 1) \$.

**Example:**
If \$ n=6 \$, \$ m=10 \$:
\$ 10 \times 9 \times 8 \times 7 \times 6 \times 5 = 151200 \$ ways.

---

## **2. Group Photo with Teacher**

**Question:**
\$ n \$ classmates could not agree on who would stand in the group photo along with the teacher for the yearbook. How many possible groups can be made such that there is at least one student with the teacher in the photo?

**Answer:**
\$ 2^n - 1 \$

**Solution:**
Each student can be in or out (2 choices). Exclude the case with no students:
Total: \$ 2^n - 1 \$.

**Example:**
If \$ n=7 \$:
\$ 2^7 - 1 = 127 \$ ways.

---

## **3. VIP License Plate**

**Question:**
Jay bought a new car in New York where a license plate can be created with alphabets A, B, C, D, E, W, X, Y, Z and numbers 0 to 9. He can either select a normal license plate or a VIP license plate. The VIP license plate begins with \$ m \$ alphabets followed by \$ n \$ numbers, with repetition allowed. In how many ways can he select the VIP license plate?

**Answer:**
\$ 9^m \times 10^n \$

**Solution:**
\$ 9^m \$ ways for alphabets, \$ 10^n \$ ways for numbers.
Total: \$ 9^m \times 10^n \$.

**Example:**
If \$ m=2 \$, \$ n=4 \$:
\$ 9^2 \times 10^4 = 81000 \$ ways.

---

## **4. Normal or VIP License Plate**

**Question:**
In how many ways can he select the license plate (normal or VIP)?

**Answer:**

\$\$

[9^m \times 10^n] + [9 \times (9-1) \times \dots \times (9 - (b-1)) \times 10 \times (10-1) \times \dots \times (10 - (a-1))] \$\$

**Solution:**

VIP: $$
9^m \times 10^n
$$.

Normal: $$
b
$$ alphabets (no repetition), $$
a
$$ numbers (no repetition).
Total: sum of both.

**Example:**

If $$
m=2
$$, $$
n=4
$$, $$
a=2
$$, $$
b=3
$$:

VIP: $$
9^2 \times 10^4 = 81000
$$

Normal: $$
9 \times 8 \times 7 \times 10 \times 9 = 45360
$$

Total: $$
81000 + 45360 = 855360
$$ ways.

---

## **5. Trophies in Cabinet**

**Question:**

Ram has $$
n
$$ trophies that he wishes to place in his main cabinet, which has space only for two trophies. If the number of trophies is increased by 3, then the number of possible ways to arrange the trophies in the main cabinet becomes 5 times the number of ways to arrange $$
n
$$ trophies. How many trophies does Ram have?

**Answer:**
3

**Solution:**

Arrangements for $$
n
$$ trophies: $$
n(n-1)
$$.

Arrangements for $$
n+3
$$ trophies: $$
(n+3)(n+2)
$$.

Given: $$
5n(n-1) = (n+3)(n+2)
$$.

Solving: $$
n=3
$$.

---

## **6. Awarding Students**

**Question:**

There are $$
N
$$ students in a class. The class teacher announced that the first $$
n
$$ students who complete a given project within two days will be awarded. What are the possible number of ways the students will be awarded?

**Options:**

a. $$
\frac{N!}{(N-n)!}
$$

b. $$
\frac{N!}{(N-n)!n!}
$$

c. $$
N!
$$

d. $$
(N-n)!
$$

**Answer:**
b

**Solution:**

Ways to choose $$
n
$$ students from $$
N
$$:

$$
\frac{N!}{(N-n)!n!}
$$.

**Example:**

If $$
N=40
$$, $$
n=5
$$:

$$
\frac{40!}{35!5!}
$$.

---

## **7. Movie Feedback**

**Question:**

$$
N
$$ students watched a patriotic movie. An analyst wishes to ask each student whether they liked the movie or not. Each student can either answer the question or refuse to respond. In how many ways, can the analyst get responses from the students?

**Answer:**

$$
3^N
$$

**Solution:**
Each student: like, dislike, or no response.

Total: $$
3^N
$$.

**Example:**

If $$
N=6
$$:

$$
3^6 = 729
$$ ways.

---

## **8. Sum of First $$
n
$$ Natural Numbers**

**Question:**

If the value of sum of first $$
n
$$ non-zero natural numbers is equal to $$
\frac{x(n+1)!}{2z}
$$, then find the value of $$
\frac{1}{x}
$$.

**Answer:**

$$
\frac{(n-1)!}{z}
$$

**Solution:**

Sum: $$
\frac{n(n+1)}{2}
$$.

Given: $$
\frac{n(n+1)}{2} = \frac{x(n+1)!}{2z}
$$.

Solving: $$
\frac{1}{x} = \frac{(n-1)!}{z}
$$.

**Example:**

If $$
n=7
$$, $$
z=3
$$:

$$
\frac{6!}{3} = 240
$$.

---

## **9. University Roll Number**

**Question:**

Adam wrote down an $$
n
$$-digit university roll number on a piece of paper. On his way home from office, it rained heavily and the paper got wet. Later, he saw that the first $$
m
$$ digits of the roll number had disappeared. In how many ways can Adam complete this university roll number if repetition of digits is allowed?

**Options:**

a. $$
m!
$$

b. $$
10^m
$$

c. $$
10^{m-1} \times 9
$$

d. $$
9^m
$$

**Answer:**
b

**Solution:**
Each missing digit: 10 choices.

Total: $$
10^m
$$.

**Example:**

If $$
n=10
$$, $$
m=3
$$:

$$
10^3 = 1000
$$ ways.

---

## **10. Factorial Expression**

**Question:**

Let $$
x = \frac{5!}{4 \times 3!}
$$. Which of the following expressions is/are equal to $$
x
$$?

**Options:**

a. $$
5 \times 0!
$$

b. $$
5 \times \frac{1}{0!}
$$

c. $$
5 \times \frac{1}{0}
$$

d. $$
5 \times \frac{6}{3! + (3 \times 2) + (3 \times 2 \times 1)}
$$

e. $$
5 \times \frac{18}{3! + (3 \times 2) + (3 \times 2 \times 1)}
$$

**Answer:**
a, b, e

**Solution:**

$$
x = 5
$$.
Check each option: a, b, e equal 5.

---

## **11. Permutation Ratio**

**Question:**

Find the value of $$
r
$$ such that the ratio of $$
{}^3P_r
$$ and $$
{}^4P_{r-1}
$$ will be $$
\frac{1}{2}
$$.

**Answer:**
3

**Solution:**

Set $$
\frac{3!/(3-r)!}{4!/(5-r)!} = \frac{1}{2}
$$.

Solving: $$
r=3
$$.

---

## **12. Round Table Seating**

**Question:**

In a restaurant, $$
x
$$ men and $$
y
$$ women are seated on $$
(x+y)
$$ chairs at a round table. Find the total number of possible ways such that $$
x
$$ men are always sitting next to each other.

**Answer:**

$$
y! \times x!
$$

**Solution:**

Treat $$
x
$$ men as one group: $$
y!
$$ ways.

Arrange men within: $$
x!
$$ ways.

Total: $$
y! \times x!
$$.

**Example:**

If $$
x=3
$$, $$
y=2
$$:

$$
2! \times 3! = 12
$$ ways.

---

## **13. Forming an $$
m
$$-Digit Number**

**Question:**

Find the total number of ways to form an $$
m
$$-digit number from the digits $$
0,1,2,\ldots,n
$$ (without repetition).

**Options:**

a. $$
n \times {}^nP_{m-1}
$$

b. $$
{}^{n+1}P_m
$$

c. $$
(n-1) \times {}^{n-1}P_{m-1}
$$

d. $$
n + {}^nP_{m-1}
$$

**Answer:**
a

**Solution:**

First digit: $$
n
$$ choices (not 0).

Remaining $$
m-1
$$ digits: $$
{}^nP_{m-1}
$$.

Total: $$
n \times {}^nP_{m-1}
$$.

**Example:**

If $$
m=6
$$, $$
n=7
$$:

$$
7 \times {}^7P_5
$$.

---

This covers all questions and solutions from the PDF[^1].

<div style="text-align: center">⁂</div>

[^1]: Week_5_GA_Solution.pdf

