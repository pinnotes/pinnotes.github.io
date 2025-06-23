---
title: Week 9 Graded Assignment 
weight: 9
description: A discrete random variable $ X $ can take the values $ 1,2,3,···,n $. For these values the cumulative distribution function is defined by - $$ F(x) = P(X < x) = \frac{x^2 + k}{m}; \quad x = 1, 2, 3, \ldots, n $$ Find the value of $ k $.
categories:
- Statistics Graded Assignment
---

---

## **1. Value of k in Cumulative Distribution Function**

**Question:**
A discrete random variable \$ X \$ can take the values \$ 1,2,3,···,n \$. For these values the cumulative distribution function is defined by:

$$
F(x) = P(X < x) = \frac{x^2 + k}{m}; \quad x = 1, 2, 3, \ldots, n
$$

Find the value of \$ k \$.

**Answer:**

$$
k = m - n^2
$$

**Correction:** The solution in the PDF says \$ k = m - n^2/2 \$, but the calculation uses \$ F(n) = 1 \$, so \$ \frac{n^2 + k}{m} = 1 \implies k = m - n^2 \$. However, the PDF solution says:

$$
F(n) = \frac{n^2 + k}{m} = 1 \implies k = m - n^2
$$

But in the numerical example, with \$ n=3, m=40 \$, \$ \frac{3^2 + k}{40} = 1 \$ gives \$ k = 31 \$, which matches \$ m - n^2 = 31 \$.
**However, the PDF answer is written as \$ k = m - n^2/2 \$, but the calculation and example clearly use \$ k = m - n^2 \$.**

**Solution:**

$$
F(n) = 1 \implies \frac{n^2 + k}{m} = 1 \implies k = m - n^2
$$

**Example:**
For \$ n=3, m=40 \$:

$$
\frac{9 + k}{40} = 1 \implies k = 31
$$

**Note:** The PDF answer is inconsistent with the calculation and example, but the correct formula is \$ k = m - n^2 \$.

---

## **2. Probability that Net Gain from Ticket Purchase is Less than b**

**Question:**

An organization in Texas organizes a lucky draw this month. \$ n \$ thousand tickets are sold for \$ m \$ each. Each has an equal chance of winning. $ x $ tickets will win $ a\$ $, $ y \$ tickets will win $ b\$ $, and $ z $ tickets will win $ c\$ $. Let the random variable $ X $ denote the net gain from purchase of one ticket. What is the probability that $ X $ takes a value less than $ b \$?

**Answer:**

$$
P(X < b) = \frac{n \times 1000 - x}{n \times 1000}
$$

**Correction:** The solution in the PDF is unclear and has typographical errors. The correct interpretation is:

$$
P(X < b) = P(\text{win less than } b) + P(\text{no win}) = \frac{z + (n \times 1000 - x - y - z)}{n \times 1000}
$$

But the PDF says:

$$
P(X < b) = \frac{n \times 1000 - x}{n \times 1000}
$$

But this is not correct unless \$ b \$ is the highest prize above which only \$ x \$ tickets win. The solution likely intends to ask for the probability that the net gain is less than \$ b - m \$ (i.e., not winning the top prize \$ a \$), but the question is ambiguous.
**In the example, \$ P(X < 500) = 0.9998 \$.**

**Solution:**

$$
P(X < b) = \frac{n \times 1000 - x}{n \times 1000}
$$

**Example:**
For \$ n=5, x=1, y=2, z=10 \$:

$$
P(X < 500) = \frac{2 + 10 + 4987}{5000} = \frac{4999}{5000} = 0.9998
$$

**Note:** The question and answer are not clearly matched, but the example calculation is correct for the question as interpreted in the PDF.

---

## **3. Number of Possible Values for a Random Variable**

**Question:**
In a group of \$ n \$ people, \$ x \$ are photographers and \$ n - x \$ are journalists. \$ m \$ people are randomly picked from a group of these \$ n \$ people. Let \$ Y \$ be a random variable which represents the number of photographers. How many possible values can the random variable \$ Y \$ take?

**Answer:**

$$
m + 1
$$

**Solution:**
Possible values of \$ Y \$ are \$ 0, 1, 2, ···, m \$.
Hence, the number of possible values is \$ m + 1 \$.

**Example:**
For \$ m=8, x=240, n=15 \$:
Possible values: \$ 0,1,2,···,8 \$, so \$ 9 \$ values.

---

## **4. Discrete Random Variables**

**Question:**
Which of the following is/are discrete random variables?

a. Number of tires produced in an automotive tire factory every 30 minutes.
b. The number of kernels of popcorn in a 1 kg container.
c. The time between customers entering a checkout lane at a retail store.
d. The amount of rain recorded at an airport one day.
e. The amount of liquid in a 2 litres bottle of soft drink.
f. The number of no-shows for every 1000 reservations made with a commercial airline.

**Answer:**
a, b, f

**Solution:**
a, b, and f have countable possible values, so they are discrete.
c, d, and e can take any value in an interval, so they are continuous.

---

## **5. Probability Mass Function for Head Runs**

**Question:**
A biased coin with probability of heads 0.75 is tossed three times. Let \$ X \$ be a random variable that represents the number of head runs, a head run being defined as a consecutive occurrence of at least two heads. Then the probability mass function of \$ X \$ is given by:

a.

$$
P(X = x) = 
\begin{cases}
0.375 & \text{for } x = 0 \\
0.625 & \text{for } x = 1
\end{cases}
$$

b.

$$
P(X = x) = 
\begin{cases}
0.297 & \text{for } x = 0 \\
0.703 & \text{for } x = 1
\end{cases}
$$

c.

$$
P(X = x) = 
\begin{cases}
0.016 & \text{for } x = 0 \\
0.140 & \text{for } x = 1 \\
0.422 & \text{for } x = 2 \\
0.422 & \text{for } x = 3
\end{cases}
$$

d.

$$
P(X = x) = 
\begin{cases}
0.016 & \text{for } x = 0 \\
0.844 & \text{for } x = 1 \\
0.140 & \text{for } x = 2
\end{cases}
$$

**Answer:**
b

**Solution:**

- **HHH:** 1 head run, probability \$ 0.422 \$
- **HHT:** 1 head run, probability \$ 0.141 \$
- **HTH:** 0 head runs, probability \$ 0.141 \$
- **HTT:** 0 head runs, probability \$ 0.047 \$
- **THH:** 1 head run, probability \$ 0.141 \$
- **THT:** 0 head runs, probability \$ 0.047 \$
- **TTH:** 0 head runs, probability \$ 0.047 \$
- **TTT:** 0 head runs, probability \$ 0.016 \$

$$
P(X = 0) = 0.141 + 0.047 + 0.047 + 0.047 + 0.016 = 0.297
$$

$$
P(X = 1) = 0.422 + 0.141 + 0.141 = 0.703
$$

Hence, option b is correct.

---

## **6. Probability that X Takes Value at Most n-1**

**Question:**
Nina has \$ n \$ music sessions in a week. She attends the sessions \$ n \$ days a week \$ x\% \$ of the time, \$ n-1 \$ days \$ y\% \$ of the time, one day \$ z\% \$ of the time, and no days \$ p\% \$ of the time. Let \$ X \$ be a discrete random variable representing the number of sessions she attends in a week. Suppose one week is randomly selected, what is the probability that the random variable \$ X \$ takes the value at most \$ n-1 \$?

**Answer:**

$$
1 - \frac{x}{100}
$$

**Solution:**

$$
P(X \leq n-1) = P(X = 0) + P(X = 1) + \ldots + P(X = n-1) = 1 - P(X = n)
$$

$$
P(X = n) = \frac{x}{100}
$$

$$
P(X \leq n-1) = 1 - \frac{x}{100}
$$

---

## **7. Value of k for PMF**

**Question:**
Find the value of \$ k \$ for which \$ k \left(\frac{m}{n}\right)^x \$ (\$ x = 0, 1, 2, ··· \$) is a probability mass function (pmf).

**Answer:**

$$
k = \frac{n - m}{n}
$$

**Solution:**

$$
\sum_{x=0}^{\infty} k \left(\frac{m}{n}\right)^x = 1 \implies k \frac{1}{1 - \frac{m}{n}} = 1 \implies k = 1 - \frac{m}{n}
$$

**But in the PDF:**

$$
k = \frac{n - m}{n}
$$

**This is correct.**

**Example:**
For \$ m=3, n=8 \$:

$$
k = \frac{5}{8}
$$

---

## **8. Probability \$ P(X = 2) \$**

**Question:**
Using the information in the previous question, calculate \$ P(X = 2) \$.

**Answer:**

$$
P(X = 2) = \frac{n - m}{n} \left(\frac{m}{n}\right)^2
$$

**Solution:**

$$
P(X = 2) = k \left(\frac{m}{n}\right)^2 = \frac{n - m}{n} \left(\frac{m}{n}\right)^2
$$

---

## **9. Value of Random Variable with Least Probability**

**Question:**
From a box A containing 3 white and 6 black balls, 5 balls are transferred into an empty box B. Let \$ X \$ be a random variable that represents the number of white balls which are transferred from A to B. What value of random variable will have the least probability?

**Answer:**
0

**Solution:**

$$
P(X = 0) = \frac{6C5}{9C5} = 0.048
$$

$$
P(X = 1) = \frac{3C1 \times 6C4}{9C5} = 0.357
$$

$$
P(X = 2) = \frac{3C2 \times 6C3}{9C5} = 0.476
$$

$$
P(X = 3) = \frac{3C3 \times 6C2}{9C5} = 0.119
$$

Thus, \$ X = 0 \$ has the least probability.

---

## **10. Value of k in PMF**

**Question:**
The probability mass function of a random variable \$ X \$ is given by:

$$
P(X = x) = 
\begin{cases}
3k^2 - 3k & \text{for } x = 0 \\
2k^2 - 1 & \text{for } x = 1 \\
0 & \text{otherwise}
\end{cases}
$$

Determine the value of \$ k \$ given \$ k > 0 \$.

**Answer:**
1

**Solution:**

$$
(3k^2 - 3k) + (2k^2 - 1) = 1 \implies 5k^2 - 3k - 2 = 0
$$

$$
(5k + 2)(k - 1) = 0 \implies k = 1 \text{ (since } k > 0)
$$

---

This covers all questions and solutions from the PDF[^1].
**Note:** For Question 1, the correct formula should be \$ k = m - n^2 \$, not \$ k = m - n^2/2 \$, as per the calculation and example in the PDF.

<div style="text-align: center">⁂</div>

[^1]: Week_9_Graded_Solution.pdf

[^2]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/statistics-for-data-science/week-9-graded-solution/72968122

[^3]: https://www.scribd.com/document/752116107/WEEK-9-10-SOLUTIONS

[^4]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/computational-thinking/ct-week-9-ga-ct-week-9-graded-assignment/119481131

[^5]: https://www.coursehero.com/file/238591118/A-Skeleton-for-Your-Statement-of-Purpose-Essaypdf/

