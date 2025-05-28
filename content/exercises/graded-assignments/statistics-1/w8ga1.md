---
title: Week 8 Graded Assignment Solution
weight: 8
tags: 
- statistics
categories:
- Statistics Graded Assignment
series:
- Statistics Graded Assignment
excludeSearch: false
width: wide
---

<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# extract all questions and solution from this pdf

Here are all the questions and their solutions from the **Week_8_Graded_-Solution.pdf** (Statistics for Data Science-1, Week 8 Graded Assignment)[^1]:

---

## **1. Probability of the k-th Record Being the Last Five-Wicket Haul**

**Question:**
Zaheer Khan has taken \$ m \$ five-wicket hauls in his last \$ n \$ matches. His match records are selected at random, one by one, and analyzed. If none of the match records is analyzed more than once, then what is the probability that the \$ k^{th} \$ one analyzed is his last five-wicket haul match?

**Options:**
a. $\frac{{ }^{m} C_{m-1} \times{ }^{n-m} C_{k-m}}{{ }^{n} C_{k-1}} \times \frac{1}{n-k+1}$
b. $\frac{{ }^{m} C_{m-1} \times{ }^{n-m} C_{k-m}}{{ }^{n} C_{k-1}}$
c. $\frac{1}{n-k+1}$
d. $\frac{{ }^{n-m} C_{k-m}}{{ }^{n} C_{k-1}}$

**Answer:** a

**Solution:**
Let A be the event of getting exactly $(m-1)$ five-wicket haul matches when the first $(k-1)$ matches are analyzed.
Let B be the event that the $k^{\text{th}}$ match analyzed is a five-wicket haul match.

$$
P(A) = \frac{{ }^{m} C_{m-1} \times{ }^{n-m} C_{k-m}}{{ }^{n} C_{k-1}}
$$

$$
P(B \mid A) = \frac{1}{n-k+1}
$$

$$
P(A \cap B) = P(A) \times P(B \mid A) = \frac{{ }^{m} C_{m-1} \times{ }^{n-m} C_{k-m}}{{ }^{n} C_{k-1}} \times \frac{1}{n-k+1}
$$

Hence, option (a) is correct.

---

## **2. Probability of Correct Prediction Given Both Predict the Same Score**

**Question:**
A and B predict the outcomes of a cricket match and their chances of predicting the runs scored by a specific batsman correctly are $\frac{a}{b}$ and $\frac{c}{d}$ respectively, independent of each other. If the probability of them predicting the same wrong score is $\frac{p}{q}$, given that they predicted the same score, what is the probability that their answer is correct?

**Options:**
a. $\frac{q-p}{q}$
b. $\frac{p(b-a)(d-c)}{q a c + p(b-a)(d-c)}$
c. $\frac{q a c}{q a c + p(b-a)(d-c)}$
d. $\frac{p(b-a)(d-c)}{q}$

**Answer:** c

**Solution:**
Let:

- $E_1$: Both A and B predicted the score correctly.
- $E_2$: Exactly one predicted correctly.
- $E_3$: Neither predicted correctly.
- $E$: Both predicted the same score.

$$
P(E_1) = \frac{a}{b} \times \frac{c}{d}
$$

$$
P(E_2) = \frac{a}{b} \times \frac{d-c}{d} + \frac{b-a}{b} \times \frac{c}{d}
$$

$$
P(E_3) = \frac{b-a}{b} \times \frac{d-c}{d}
$$

$$
P(E \mid E_1) = 1, \quad P(E \mid E_2) = 0, \quad P(E \mid E_3) = \frac{p}{q}
$$

$$
P(E_1 \mid E) = \frac{P(E_1) P(E \mid E_1)}{P(E_1) P(E \mid E_1) + P(E_2) P(E \mid E_2) + P(E_3) P(E \mid E_3)}
$$

$$
= \frac{\frac{a c}{b d}}{\frac{a c}{b d} + \frac{(b-a)(d-c)}{b d} \times \frac{p}{q}} = \frac{q a c}{q a c + p(b-a)(d-c)}
$$

Hence, option (c) is correct.

---

## **3. Probability that a Selected Item is Defective (from Three Factories)**

**Question:**
An item is produced in three factories $A, B$ and $C$. Factory $A$ produces $x$ times the number of items produced by factory $B$, and factories $B$ and $C$ produce the same number of items. It is known that $p\%, q\%, r\%$ of the items produced by factories $A, B$ and $C$ respectively are defective. All items produced are stocked, and an item is selected at random. What is the probability that the selected item is defective?

**Solution:**
Let the number of items produced by each of the factories $B$ and $C$ be $n$.
Then, factory $A$ produces $x n$ items.

$$
P(A) = \sum_{i=1}^3 P(A \mid E_i) P(E_i)
$$

$$
= \frac{x}{x+2} \times \frac{p}{100} + \frac{1}{x+2} \times \frac{q}{100} + \frac{1}{x+2} \times \frac{r}{100}
$$

For example, if $x=5, p=8, q=7, r=4$:

$$
P(A) = \frac{5}{7} \times \frac{8}{100} + \frac{1}{7} \times \frac{7}{100} + \frac{1}{7} \times \frac{4}{100} = \frac{51}{700} \approx 0.07
$$

---

## **4. Probability that a Defective Item is from Factory B**

**Question:**
If an item selected at random is found to be defective, what is the probability that it was produced by factory $B$?

**Solution:**

$$
P(E_2 \mid A) = \frac{P(E_2) P(A \mid E_2)}{P(A)}
$$

$$
= \frac{\frac{1}{x+2} \times \frac{q}{100}}{\frac{x}{x+2} \times \frac{p}{100} + \frac{1}{x+2} \times \frac{q}{100} + \frac{1}{x+2} \times \frac{r}{100}}
$$

For example, $x=5, p=8, q=7, r=4$:

$$
P(E_2 \mid A) = \frac{\frac{1}{7} \times \frac{7}{100}}{\frac{51}{700}} = \frac{7}{51} \approx 0.14
$$

---

## **5. Probability that a Task is Completed (by Three Persons)**

**Question:**
A particular task is given to three persons, Manoj, Kalpana and Ananya, whose probabilities of completing it are $\frac{a}{b}, \frac{c}{d}$ and $\frac{e}{f}$ respectively, independent of each other. What is the probability that the task will be completed?

**Solution:**

$$
P(\text{task completed}) = 1 - \left(1 - \frac{a}{b}\right)\left(1 - \frac{c}{d}\right)\left(1 - \frac{e}{f}\right)
$$

For example, $a=1, b=4, c=2, d=6, e=1, f=5$ (not given in solution, but similar logic applies):

$$
P(\text{task completed}) = 1 - \left(\frac{3}{4}\right)\left(\frac{4}{6}\right)\left(\frac{4}{5}\right)
$$

But in the example provided in the solution:

$$
P(\text{task completed}) = 1 - \left(\frac{3}{4}\right)\left(\frac{4}{6}\right)\left(\frac{4}{5}\right) = 1 - \frac{48}{120} = 1 - 0.4 = 0.6
$$

(The example in the solution uses $P(A) = \frac{1}{4}, P(B) = \frac{2}{6}, P(C) = \frac{1}{5}$ and gets $1 - \frac{2}{5} = 0.6$.)

---

## **6. Value of $x$ Given $P(A^c) = m, P(B^c) = x, P(A \cup B) = n$**

**Question:**
If $A$ and $B$ are two independent events such that $P(A^c) = m$ and $P(B^c) = x$ and $P(A \cup B) = n$, then calculate the value of $x$.

**Solution:**

$$
n = 1 - m x
$$

$$
x = \frac{1 - n}{m}
$$

For example, $m = 0.6, n = 0.7$:

$$
x = \frac{0.3}{0.6} = 0.5
$$

---

## **7–9. Intelligence Level and Researcher Data**

**Table Q8.1.G: Intelligence Level**


| Researcher | Below Avg. | Avg. | Above Avg. |
| :-- | :-- | :-- | :-- |
| X | a | b | c |
| Y | d | e | f |


---

### **7. Probability that a Student is Below Average**

**Solution:**

$$
P(\text{Below Avg.}) = \frac{a + d}{a + b + c + d + e + f}
$$

For example, $a=76, b=70, c=54, d=50, e=23, f=27$:

$$
P = \frac{126}{300} = 0.42
$$

---

### **8. Probability that a Student is Average Given Researcher Y**

**Solution:**

$$
P(\text{Avg.} \mid Y) = \frac{e}{d + e + f}
$$

For example, $e=23, d+e+f=100$:

$$
P = \frac{23}{100} = 0.23
$$

---

### **9. Probability that Investigation is by Researcher X Given Below Average**

**Solution:**

$$
P(X \mid \text{Below Avg.}) = \frac{a}{a + d}
$$

For example, $a=76, d=50$:

$$
P = \frac{76}{126} \approx 0.603
$$

---

## **10. Probability that it Rained Given a Student Arrived Late**

**Question:**
During the monsoon, it rains one-third of the days and affects students' travel to school. The probability that there will be heavy traffic on a rainy day is 0.5 and on a non-rainy day is 0.25. If it rains and there is heavy traffic, the probability of a student arriving late to school is 0.5. If it is a clear day and there is no traffic, this probability is reduced by $\frac{3}{8}$. In other possible situations, the probability of a student reaching school late is 0.25. If, on a randomly selected day, a student arrives late to school, then what is the probability that it rained that day?

**Options:**
a. $\frac{1}{8}$
b. $\frac{6}{11}$
c. $\frac{11}{48}$
d. None of the above

**Answer:** b

**Solution:**
Define:

- $R$: Rainy day
- $H$: Heavy traffic
- $E$: Student is late

$$
P(R) = \frac{1}{3}, \quad P(H \mid R) = 0.5, \quad P(H \mid R^c) = 0.25
$$

$$
P(E \mid R \cap H) = 0.5, \quad P(E \mid R^c \cap H^c) = 0.5 - \frac{3}{8} = \frac{1}{8}, \quad P(E \mid \text{other cases}) = 0.25
$$

$$
P(E) = \frac{1}{12} + \frac{2}{48} + \frac{1}{24} + \frac{3}{48} = \frac{11}{48}
$$

$$
P(R \cap E) = \frac{1}{12} + \frac{1}{24} = \frac{3}{24}
$$

$$
P(R \mid E) = \frac{\frac{3}{24}}{\frac{11}{48}} = \frac{6}{11}
$$

---

## **11. Value of $n$ Given Probabilities of Red T-Shirts**

**Question:**
There are two shops, $A$ and $B$, selling t-shirts in the market. Shop $A$ has stock of $n$ red and 2 black t-shirts and Shop $B$ has a stock of 2 red and $n$ black t-shirts. One of the shops is selected at random and two t-shirts are purchased from it. If both the t-shirts purchased are red and the probability that it was purchased from shop $A$ is $\frac{6}{7}$, find the value of $n$.

**Options:**
a. 3
b. 4
c. 5
d. 6

**Answer:** b

**Solution:**

$$
P(A \mid E) = \frac{\frac{1}{2} \times \frac{n(n-1)}{(n+2)(n+1)}}{\frac{1}{2} \times \frac{n(n-1)}{(n+2)(n+1)} + \frac{1}{2} \times \frac{2}{(n+2)(n+1)}} = \frac{6}{7}
$$

$$
\frac{n(n-1)}{n(n-1) + 2} = \frac{6}{7}
$$

$$
7n(n-1) = 6n(n-1) + 12
$$

$$
n^2 - n - 12 = 0
$$

$$
n = 4
$$

---

This covers all questions and solutions from the **Week_8_Graded_-Solution.pdf**[^1].

<div style="text-align: center">⁂</div>

[^1]: Week_8_Graded_-Solution.pdf

[^2]: https://gradedassignments.github.io/maths-week-8-graded-assignments-iit-madras/

[^3]: https://gradedassignments.github.io/english-week-8-graded-assignments-iit-madras/

[^4]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/computational-thinking/ct-week-8-ga-ct-graded-assignment-week-8/63065998

[^5]: https://iitmbsdegreehelp.pages.dev/solutions/foundational/maths1/week-8/

[^6]: https://www.scribd.com/document/648260881/Week-8-Conditional-Probability

[^7]: https://www.youtube.com/watch?v=vPasAr_wapI

[^8]: https://telegram.me/s/IIT_Madras_Graded_Assignment_Sol

[^9]: https://www.youtube.com/watch?v=-2HHu_2wdi4

[^10]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/iitm-online-degree-data-science-and-programming/week-8-practice-assignment-solution/99227605

[^11]: https://www.youtube.com/watch?v=_3ObVvJnnEc

