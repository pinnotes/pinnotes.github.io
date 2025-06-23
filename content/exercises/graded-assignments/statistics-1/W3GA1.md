---
title: Week 3 Graded Assignment 
weight: 3
categories:
- Statistics Graded Assignment
---

---

**1. The numbers a, b, c, d have frequencies (x + 6), (x + 2), (x − 3) and x respectively. If their mean is m, find the value of x. (Enter the value as next highest integer)**

**Solution:**

$$
\frac{a(x + 6) + b(x + 2) + c(x − 3) + dx}{(x + 6) + (x + 2) + (x − 3) + x} = m
$$

$$
\frac{ax + 6a + bx + 2b + cx − 3c + dx}{4x + 5} = m
$$

$$
ax + bx + cx + dx + 6a + 2b − 3c = m(4x + 5) = (4m)x + 5m
$$

$$
(a + b + c + d − 4m)x = 5m − 6a − 2b + 3c
$$

$$
x = \frac{5m − 6a − 2b + 3c}{a + b + c + d − 4m}
$$

Suppose, we substitute values of a, b, c, d and m as 2, 7, 9, 17 and 6.88 respectively,

$$
x = \frac{(5 \times 6.88) − (6 \times 2) − (2 \times 7) + (3 \times 9)}{2 + 7 + 9 + 17 − (4 \times 6.88)} = 4.73
$$

Hence, x = 5[^1].

---

**2. What is the mean of the original dataset? (Correct up to 2 decimal place accuracy)**

**Solution:**
Let the sum of all the observations of noted dataset be $T$ and for the original dataset be $T'$.

$$
\text{Mean} = \frac{T}{N} = m \implies T = m \times N
$$

$$
T' = T - p + x
$$

$$
\text{Mean for original dataset} = \frac{T'}{N}
$$

Suppose, N = 8, m = 13, s = 8, x = 18, p = 13:

$$
T = 13 \times 8 = 104
$$

$$
T' = 104 - 13 + 18 = 109
$$

$$
\text{Mean for original dataset} = \frac{109}{8} = 13.625
$$

[^1]

---

**3. What is the sample variance of the original dataset? (Correct up to 2 decimal place accuracy)**

**Solution:**
Sample variance,

$$
s^2 = \frac{\sum(x_i - \bar{x})^2}{N-1}
$$

Let $\sum x_i^2 = A$ for noted dataset and for the original dataset be $B$.

$$
B = A - p^2 + x^2
$$

where,

$$
A = \left(\frac{s^2 + N m^2}{N-1}\right) \times (N-1)
$$

$$
\text{Sample variance for the original dataset} = \frac{B}{N-1} - \frac{(T')^2}{N(N-1)}
$$

Suppose, N = 8, m = 13, s = 8, x = 18, p = 13:

$$
A = \left(\frac{8^2 + 8 \times 13^2}{7}\right) \times 7 = 1800
$$

$$
B = 1800 - 13^2 + 18^2 = 1955
$$

$$
\text{Sample variance} = \frac{1955}{7} - \frac{109^2}{8 \times 7} = 67.125
$$

[^1]

---

**4. Let the data $x_1, x_2, ..., x_n$ represent the retail prices in rupees of a certain commodity in n randomly selected shops in a particular city. What will be the sample variance in the retail prices, if c rupees is added to all the retail prices? (Correct up to 2 decimal place accuracy)**

**Solution:**
If $c$ rupees is added to all retail prices, new prices $y_i = x_i + c$.

$$
\text{New variance} = \text{Old variance}
$$

Example: n = 6, observations = 46, 34, 82, 37, 83, 66

$$
\text{Mean} = \frac{46 + 34 + 82 + 37 + 83 + 66}{6} = 58
$$

$$
\text{Sample variance} = \frac{(46-58)^2 + (34-58)^2 + (82-58)^2 + (37-58)^2 + (83-58)^2 + (66-58)^2}{5} = 485.2
$$

[^1]

---

**5. Suppose, we have n observations such that $x_1, x_2, ..., x_n$. Calculate 10th, 50th and 100th percentiles?**

**Solution:**
To find the sample 100p percentile of a dataset of size n:

1. Arrange the data in ascending order.
2. If np is not integer, take the smallest integer greater than np. The data value in that position is the sample 100p percentile.
3. If np is integer, take the average of values in positions np and np+1.

Example: n = 7, observations = 31, 36, 25, 34, 115, 108, 88
Ascending order: 25, 31, 34, 36, 88, 108, 115

- 10th percentile: np = 0.7 → 1st observation = 25
- 50th percentile: np = 3.5 → 4th observation = 36
- 100th percentile: np = 7 → last observation = 115[^1]

---

**6. Calculate the Inter Quartile Range (IQR) of the data.**

**Solution:**
IQR = Q3 − Q1

- Q1: p = 0.25, np = 1.75 → Q1 = 31
- Q3: p = 0.75, np = 5.25 → Q3 = 108

IQR = 108 − 31 = 77[^1]

---

**7. How many outliers are there?**

**Solution:**
Outliers < Q1 − 1.5 × IQR or > Q3 + 1.5 × IQR

- Q1 = 31, Q3 = 108, IQR = 77
- Lower bound: 31 − (1.5 × 77) = −84.5
- Upper bound: 108 + (1.5 × 77) = 223.5

No observations outside these bounds. Hence, no outliers[^1].

---

**8. In a deck, there are cards numbered 1 to n such that the number of cards of a given number is the same as the number on the card. Which of the following statement(s) is/are true about the mean and mode of the numbers on this deck of card?**

a. Mode is n.
b. Mean is $\frac{2n + 1}{3}$.
c. Mode is n − 1.
d. Mean is n.
e. Mean is $\frac{n + 1}{2}$.
f. Mode is not defined for this data.

**Answer:** a, b

**Solution:**
Number (xi), Frequency (fi): 1:1, 2:2, ..., n:n

- Mode = n
- Total observations = $1 + 2 + ... + n = \frac{n(n+1)}{2}$
- Sum = $1^2 + 2^2 + ... + n^2 = \frac{n(n+1)(2n+1)}{6}$
- Mean = $\frac{n(n+1)(2n+1)/6}{n(n+1)/2} = \frac{2n+1}{3}$

Example for n = 42: Mode = 42, Mean = 28.33[^1].

---

**9. Figure 3.1.G shows a stem and leaf plot of the ratings (out of 100) of an actor’s performance in different movies. What is the Inter Quartile Range (IQR) (Correct up to 1 decimal point accuracy)?**

**Solution:**
n = 10

- Q1 = 3rd observation = 72
- Q3 = 8th observation = 87
- IQR = 87 − 72 = 15[^1]

---

**10. What is the median rating, if x points are added to all of his ratings and then converted to y points? (Correct up to 2 decimal point accuracy)**

**Solution:**
Median of original data (10 observations) = mean of 5th and 6th = (75 + 78)/2 = 76.5

- If x points added: median = 76.5 + x
- If then converted to y points: median = $(76.5 + x) \times \frac{y}{100}$

Example: x = 3, y = 40
Median = (76.5 + 3) × 0.4 = 31.8[^1]

<div style="text-align: center">⁂</div>

[^1]: Week_3_Graded_Solution.pdf

