---
title: Week 1 Practice Assignment 
weight: 1
categories:
- Mathematics Practice Assignment
---

---

## 1. Venn Diagram Analysis

**Question:**
Given below is a Venn diagram for sets of students who take Maths, Physics, and Statistics.
Which of the option(s) is(are) correct? [Notation: For sets P and Q, P \ Q denotes the set of elements in P which are not in Q.]

```
Maths Physics
A D B
F G E
C
Statistics
```

* D is the set of students who take both Maths and Statistics.
* D∪E∪F∪G is the set of all students who take at least two subjects.
* E is a subset of the set of the students who have not taken Maths.
* Maths \ D is the set of all students who have taken only Maths.
* Physics \ (D∪G∪E) is the set of all students who have taken only Physics.

**Solution:**
According to Figure 1, D is the set of students who take both Maths and Physics. Hence the first statement is not valid.

The second option – D∪E∪F∪G is the set of all students who take at least two subjects – is correct. This is because D is the set of students who take both Maths and Physics, E is the set of students who take both Physics and Statistics, F is the set of students who take both Maths and Statistics and G is the set of students who take all three subjects.

Third option – E is a subset of the set of the students who have not taken Maths – is also correct. E is the set of students who take both Physics and Statistics and G is the set of students who take Maths in addition to Physics and Statistics. (B∪E∪C) is the set of students who have not taken Maths. Clearly, E is a subset of this set.

Fourth option – Maths \ D is the set of all students who have taken only Maths – is not correct. Maths \ D represents the students of Maths who have not taken Physics and may or may not have taken Statistics. This implies that students who take only Maths (set A), or the students who take both Maths and Statistics (set F) or the students who take all three subjects (set G) are also included in Maths\D set. Hence this option is not correct.

Fifth option – Physics \ (D∪G∪E) is the set of all students who have taken only Physics is correct. (D∪G∪E) represents the students who take only Maths and Physics or all three subjects or Physics and Statistics. Physics \ (D∪G∪E) represents B, which is the set of students who only take Physics. Hence this option is correct.

---

## 2. Set Cardinalities

**Question:**
Let A be the set of natural numbers less than 6 and whose greatest common divisor with 6 is 1. Let B be the set of divisors of 6. What are the cardinalities of A, B, A∪B, and A∩B?

* (1,5,6,0)
* (1,4,5,0)
* (2,4,5,1)
* (2,4,6,1)

**Solution:**
We have set A={1, 5}, B={1, 2, 3, 6}, A ∪ B ={1, 2, 3, 5, 6} and A ∩ B={1}.
It follows that the cardinalities (i.e. number of elements) of A, B, A ∪ B and A∩B are respectively 2, 4, 5 and 1. Hence, the third option – {2, 4, 5, 1} – is correct.

---

## 3. Venn Diagram Representation

**Question:**
Let A be the set of all even natural numbers (including zero), B be the set of all odd natural numbers, C be the set of all natural numbers which divide 100, and D be the set of all prime numbers less than 100. Which of the following is(are) correct representation of these sets? [Note: A region represented in a Venn diagram could be empty. Take the set of real numbers to be the universal set.]

* Option 1
A
B
D
* Option 2
A
B
C
* Option 3
D
C
* Option 4
A D
C

**Solution:**
By definition, A = {0, 2, 4, 6, 8,...}, B = {1, 3, 5, 7,... }, C = {1, 2, 4, 5, 10,..., 100} and D = {2, 3, 5, 7, 11,.., 97}.

Option 1 shows D as a subset of all odd natural numbers. But D contains element 2, whereas B does not. Hence, this option is wrong.

Option 2 has overlap between A and C and overlap between B and C, but no overlap between A and B. A and B are sets of even and odd natural numbers which have no overlap. C is the set of natural numbers which divide 100. A∩C = {2, 4, 10, 20, 50, 100} and B∩C = {1, 5, 25}. Hence, this option is correct.

Option 3 represents C and D sets with an overlap between them. The overlapping area includes the set of all prime numbers which can divide 100. This is the set {2, 5}. Hence, option 3 is also correct.

A∩D = {2}, but there is no overlap between A and D in Option 4. Hence, this option is wrong.

---

## 4. Set Cardinalities (Multiples and Divisors)

**Question:**
Let A be the set of natural numbers which are multiples of 5 strictly less than 100, and B be the set of natural numbers which divide 100. What are the cardinalities of the following sets?
B\A (the set of elements in B but not in A), A∩B, and B

* (2, 5, 7)
* (4, 5, 9)
* (3, 4, 7)
* (3, 5, 8)

**Solution:**
By definition, A = {5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95}, B = {1, 2, 4, 5, 10, 20, 25, 50, 100}, B\A = {1, 2, 4, 100} and A∩B = {5, 10, 20, 25, 50}.
It follows that the cardinalities of sets B \ A, A∩B and B are, respectively, 4, 5 and 9. Hence, option 2 is correct.

---

## 5. Cardinality of Cartesian Product and Power Set

**Question:**
Suppose the cardinality of set A is 2 and the cardinality of set B is 3, what are the cardinalities of the cartesian product A × B and the power set of A × B?

* 6 and 36
* 5 and 32
* 6 and 64
* 5 and 25

**Solution:**
Let the cardinality of set A be n(A) and the cardinality of set B be n(B). Then, the cardinality of the cartesian product (A × B), n(A × B) = n(A) × n(B) = 3 × 2 = 6.
If a set A has cardinality n, then the cardinality of power set of A is $2^n$. It follows that the cardinality of the power set of (A × B) is $2^6 = 64$. Hence, the third option is correct.

---

## 6. Survey of Newspaper Readership

**Question:**
In a survey, it is found that in a particular locality 64 houses buy English newspapers, 94 houses buy Tamil newspapers, and 26 houses buy both English and Tamil newspapers. How many houses buy newspapers of only one language?

**Solution:**
Number of houses which buy only English newspapers is (64 - 26) = 38.
Number of houses which buy only Tamil newspapers is (94 - 26) = 68.
Therefore, number of houses which buy either English or Tamil newspaper is (68 + 38) = 106.

**Answer:** 106

---

## 7. Irrational Numbers

**Question:**
Which of the following numbers is(are) irrational?

* √2 + √3
* (2 + √3)(2 - √3)
* (2 + √3) + (2 - √3)
* 2√3+3√2

**Solution:**
Since √3 is an irrational number, it follows that (2+√3) and hence √(2 + √3) are also irrational.

In the second option, (2+√3)(2-√3) = 4 - 3 = 1, which is a rational number.

In the third option, (2+√3)+(2-√3) = 4, which is also a rational number.

Since both √3 and √2 are irrational numbers, we have (2√3+3√2) is an irrational number.

---

## 8. Properties of a Relation

**Question:**
Which of the following is(are) true for the relation R given below?
R = {(a, b)| both a and b are even non-zero integers and a/b is an integer }

* R is a reflexive relation.
* R is a symmetric relation.
* R is a transitive relation.
* R is an equivalence relation.

**Solution:**
A relation R on a set A is said to be reflexive if (a, a) ∈ R for all a ∈ A. R is called symmetric if (a, b) ∈ R implies (b,a) ∈ R, and R is called transitive if (a, b) and (b, c) is in R implies (a, c) ∈ R. If a relation R is reflexive, symmetric and transitive, then it is called equivalence relation.

For any non-zero even integer a, a/a = 1 is an integer. Hence, (a, a) ∈ R, which implies that R is reflexive.

Now, let a = 4, and b = 2. Then, a/b = 4/2 = 2 is an integer. Hence, (a,b) ∈ R. But b/a = 2/4 = 1/2 is not an integer. Therefore, (b,a) ∉ R. It follows that R is not symmetric.

Let (a,b) ∈ R and (b,c) ∈ R. That is, both a/b and b/c are integers. Hence, their product a/b * b/c = a/c is also an integer. It follows that (a, c) ∈ R. Therefore, R is transitive.

Although R is reflexive and transitive but not symmetric, it is not an equivalence relation.

---

## 9. Domain and Range of a Function

**Question:**
Find the domain and range of the following real valued function.
f(x) = √(3 - x) (Note: ✓ denotes the positive square root)

* domain={x ∈ R | x ≠ 3}, range={x ∈ R x ≥ 3}
* domain={x ∈ R | x ≥ 3}, range={x ∈ R | x ≥ 0}
* domain={x ∈ R | x ≤ 3}, range={x ∈ R | x ≥ 0}
* domain={x ∈ R | x ≤ 3}, range={x ∈ R | x ≤ 0}

**Solution:**
The set of real numbers R includes all rational and irrational numbers.
√a is real valued if a ≥ 0. If f has to be real valued, then
3-x≥0 ⇒ x ≤ 3
Hence, domain of the function f is {x ∈ R | x ≤ 3}.

Since ✓ denotes the positive square root (as given in the question statement), the range of function f is nothing but all the positive real numbers, i.e. {x ∈ R | x ≥ 0}.

---

## 10. Properties of a Function

**Question:**
Which of the following is(are) true for the given function?
f: R→R
f(x) = x² + 2

* f is not injective.
* f is surjective.
* f is not surjective.
* f is bijective.

**Solution:**
A function f is injective if f(x1) = f(x2) implies x1 = x2, i.e. no two elements in the domain will have the same image. f is called surjective if for any element in the co-domain there is a pre-image in the domain, i.e. for any y in the co-domain, there exists an x in the domain such that f(x) = y. A function f is said to be bijective if it is both injective and surjective.

Since f(x) = x² + 2, we have f(-1) = 3 = f(1). Hence, f is not injective. Now, the co-domain of the function is given as R.

Now if f is surjective then codomain and the range should be same, that means every element in the codomain should have a preimage. Now let us try to find a preimage for 1 (observe that 1 ∈ R, as codomain of the function is given as R). To find the preimage of 1, we have to find an element a from the domain for which f(a) = 1, i.e. a² + 2 = 1, i.e. a² = −1. Now we know that the square of any real number cannot be negative. Hence there cannot exist any real number a (in the domain) for which f(a) = 1. Hence 1 has no preimage. So codomain and range is not same. Hence f is not surjective.

As the function is neither injective, nor surjective, therefore it is not bijective.

---

## 11. Domain of a Function

**Question:**
Find the domain of the following real valued function.
f(x) = √(x+2) / (x²-9)

* {x ∈ R | x ≥ −2, x ≠ 3}
* {x ∈ R | x ≤ −2, x ≥ 3}
* {x ∈ R | x ≠ −2, x ≤ 3}
* {x ∈ R | x ≠ −2, x ≠ 3}

**Solution:**
f(x) = √(x+2) / (x²-9)
For f to be a well-defined function, the denominator must be non-zero. That is,
x²-9≠0 ⇒ x ≠ ±3

Further, if f has to be real valued, then √(x + 2) has to be real valued. Hence x + 2 must be non-negative. That is,
x+2≥0 ⇒ x ≥ -2

It follows that the domain of the function f(x) is {x ∈ R | x ≥ −2, x ≠ 3}.

---

## 12. Relations on Months

**Question:**
Let S be the set {January, February, March, April, May, June, July, August, September, October, November, December} of months in a year. Define the following three relations:

* R₁ := {(a,b) | a, b ∈ S, a and b have same last four letters. }
* R₂ := {(a,b) | a, b ∈ S, a and b have same number of days. }
* R₃ := {(a, c) | a, c ∈ S, for some b ∈ S, (a, b) ∈ R₁, (b, c) ∈ R₂}

For example, (December, June)∈ R₃ since (December, September)∈ R₁, (September, June)∈ R₂.

**(a) Choose the correct option(s).**

* R₃ is symmetric.
* R₃ is reflexive.
* R₃ is transitive.
* None of the above.

**(b) What is the cardinality of R₃?**

**Solution:**
For definitions of types of relations, please refer to solution of Question 8.

Every month has the same last four letters as itself (except May which has only three letters). In Table 1, the months whose name has been shown in red color have the same last four letters as each other. Similarly, the months whose name has been shown in blue color also have the same last four letters as each other.

Name of the months: January, February, March, April, May, June, July, August, September, October, November, December.

**R₁:**
R₁ = {(Jan, Jan), (Jan, Feb), (Feb, Jan), (Feb, Feb), (Mar, Mar), (April, April), (June, June), (July, July), (Aug, Aug), (Oct, Oct), (Sept, Sept), (Sept, Nov), (Sept, Dec), (Nov, Sept), (Nov, Nov), (Nov, Dec), (Dec, Sept), (Dec, Nov), (Dec, Dec)}

**R₂:**
R₂ consists of the pairs of months with the same number of days.
Class 1: Jan, Mar, May, July, Aug, Oct, Dec [Months with 31 days each]
Class 2: April, June, Sept, Nov [Months with 30 days each]
Class 3: Feb [Month with 28 or 29 days]

**R₃:**
R₃ = {(a, c) | a, c ∈ S, for some b ∈ S, (a, b) ∈ R₁, (b, c) ∈ R₂}

**Analysis:**

- **(May, May)** is not in R₃, hence R₃ is not reflexive.
- **(Jan, May)** is in R₃, but (May, Jan) is not in R₃, hence R₃ is not symmetric.
- **(Mar, Dec)** is in R₃, (Dec, Sept) is in R₃, but (Mar, Sept) is not in R₃. Hence R₃ is not transitive.

**(b) Cardinality of R₃:**
By listing all possible pairs as per the given logic, the cardinality of R₃ is 85.

---

## 13. Student Teams and Venn Diagram

**Question:**
For a college event, thirty student volunteers were given id numbers from 1 to 30 such that each student gets a unique number. The students with id numbers from 1 to 10 are in Team 1 which coordinates the cultural program. The students with id numbers from 11 to 20 are in Team 2 which coordinates the games. The students whose roll numbers are multiples of 3 are in Team 3 which takes care of food. Now consider the following Venn diagram and choose the correct option(s).

* C, B, and A can represent Team 1, Team 2, and Team 3 respectively.
* A, B, and C can represent Team 1, Team 2, and Team 3 respectively.
* Roll number 15 has been assigned two jobs and is in both B and C.
* Roll number 25 is not in A∪B∪C.
* Roll number 10 is in both A and C.
* Cardinality of C is 20.

**Solution:**
Figure PS-1.2 shows the Venn diagram corresponding to Question 13. Team 1, responsible for coordination of cultural programs, is represented by the blue circle. Team 2, responsible for game events, is represented by the yellow circle. Team 3, that takes care of food, is represented by the red circle. Rest of the students are represented using the green circle. Clearly, set A can correspond to the blue circle, B can denote the yellow circle and C can denote the red circle. That is, A, B, and C can represent Team 1, Team 2, and Team 3 respectively. Hence, option 2 is correct and option 1 is wrong. Roll number 15 is a common element between games team and food team, hence, option 3 is correct. Roll number 25 is located in the range of students with Roll number 21 to 30 but 25 is not divisible by 3. Hence, 25 does not belong to the set A∪B∪C and so option 4 is correct. The number 10 is not divisible by 3, hence Roll number 10 is not in the set C. Therefore, option 5 is wrong. Further, since cardinality of C is 10, option 6 is also wrong.

---

This concludes all questions and solutions from the provided PDF[^1].

<div style="text-align: center">⁂</div>

[^1]: Week-1-Practice-Assignment-Solution.pdf

[^2]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/mathematics-for-data-science/week-1-practice-assignment-solution/48793171

[^3]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/iitm-online-degree-data-science-and-programming/week-1-practice-assignment-solution/110310083

[^4]: https://www.onlinedegree.iitm.ac.in/assets/pdf/week1/BSCMA1001_Week1_Assignment_Solution.pdf

[^5]: https://www.youtube.com/watch?v=Em4eH6x_WDY

[^6]: https://onlinedegree.iitm.ac.in/assets/pdf/week1/BSCMA1002_Week1_Assignment_Solution.pdf

[^7]: https://www.scribd.com/document/632765106/BSCMA1001-Week1-Assignment-Solution

[^8]: https://www.scribd.com/document/643454471/mad-1-assignment-pdf

[^9]: https://gradedassignments.github.io/iit-madras-graded-assignments/

[^10]: https://progiez.com/nptel-assignment-answers

[^11]: https://github.com/progiez/nptel-assignment-answers

