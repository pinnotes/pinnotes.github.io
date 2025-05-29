---
title: Week 6 Practice Assignment Solution
weight: 6
tags: 
- Mathematics
- Mathematics for Data Science - 1
- Practice Assignment
- Week-6
categories:
- Mathematics Practice Assignment
series:
- Mathematics Practice Assignment
---

Here are all the questions and their solutions extracted from the PDF "Week-6-practice-assignment-solution.pdf"[^1]:

---

## **Question 1**

**If \$ b > 0 \$ and \$ 4\log_x b + 9\log_{b^5x} b = 1 \$, then the possible value(s) of \$ x \$ is (are)**

- **(a) \$ b^{10} \$** ✓
- **(b) \$ b^9 \$**
- **(c) \$ b^{-2} \$** ✓
- **(d) \$ b^5 \$**
- **(e) \$ b^4 \$**

**Solution:**
Let \$ p = \log_b x \$.
Equation: \$ \frac{4}{p} + \frac{9}{5 + p} = 1 \$
Solve: \$ p^2 - 8p - 20 = 0 \$, roots \$ p = -2, 10 \$.
So, \$ x = b^{-2} \$ or \$ x = b^{10} \$.

---

## **Question 2**

**George deposits ₹5L in a bank that compounds quarterly at 20% per year. How long will it take to increase his money to 16 times the principal (in years)?**

- **(a) \$ \frac{\ln 16}{4} \$**
- **(b) \$ \frac{\ln 16}{4 \ln (21/20)} \$** ✓
- **(c) \$ \frac{\ln 2}{\ln (21/20)} \$** ✓
- **(d) \$ \log_{21/20} 2 \$** ✓
- **(e) \$ \frac{\ln 2^4}{\ln (21/20)} \$**

**Solution:**
\$ 16P = P(1 + \frac{20}{400})^{4t} \$
Solve: \$ t = \frac{\ln 16}{4 \ln (21/20)} = \frac{\ln 2}{\ln (21/20)} = \log_{21/20} 2 \$.

---

## **Question 3**

**Choose the set of correct options.**

- **(a) \$ \log_5 2 \$ is a rational number.**
- **(b) If \$ 0 < b < 1 \$ and \$ 0 < x < 1 \$, then \$ \log_b x < 0 \$.**
- **(c) If \$ \log_3(\log_5 x) = 1 \$, then \$ x = 125 \$** ✓
- **(d) If \$ 0 < b < 1 \$, \$ 0 < x < 1 \$ and \$ x > b \$, then \$ \log_b x > 1 \$.**
- **(e) If \$ 0 < b < 1 \$ and \$ 0 < x < y \$, then \$ \log_b x > \log_b y \$** ✓

**Solution:**
(c): \$ \log_3(\log_5 x) = 1 \implies x = 125 \$.
(e): \$ \log_b x > \log_b y \$ for \$ 0 < b < 1 \$ and \$ 0 < x < y \$.

---

## **Question 4**

**Two types of insects grow as \$ f(t) = 5^{3t-2} \$ and \$ h(t) = 3^{2t-1} \$. For what value of \$ t \$ will both insects be of the same number?**

- **(a) \$ \frac{\ln 3 + 2\ln 5}{3\ln 5 - 2\ln 3} \$**
- **(b) \$ \frac{\ln 75}{\ln (125/9)} \$**
- **(c) \$ \log_{125} 75 \$** ✓

**Solution:**
Set \$ 5^{3t-2} = 3^{2t-1} \$, solve for \$ t \$:
\$ t = \frac{\ln 3 + 2\ln 5}{3\ln 5 - 2\ln 3} = \log_{125} 75 \$.

---

## **Question 5**

**Which of the following is/are true? (MSQ)**

- **(a) If \$ m \$ and \$ n \$ are positive real numbers, then \$ m^{\log n} = n^{\log m} \$** ✓
- **(b) \$ \log_5 1234567899999999999999 \$ is a rational number.**
- **(c) The function \$ f(x) = \log_{10}(x^2 + x + 1) \$ is one-one on $(-0.5, \infty)$** ✓

**Solution:**
(a): True by taking logs.
(c): \$ x^2 + x + 1 \$ is one-one (strictly increasing) on $(-0.5, \infty)$, so is its log.

---

## **Question 6**

**Which of the following is/are true? (MSQ)**

- **(a) If \$ f \$ is one-one on \$ D \$, then \$ \log f(x) \$ is one-one on \$ D \$ where defined** ✓
- **(b) \$ (14!) < (15!) \$** ✓
- **(c) \$ f(x) = 2^x + 3^x + \dots + 100^x \$ is one-one on \$ \mathbb{R} \$** ✓
- **(d) There exists a function \$ f(x) \$ on \$ \mathbb{R} \$ such that \$ \log(f(x)) \geq 100 \$ for all \$ x \in \mathbb{R} \$** ✓

**Solution:**
All options (a), (b), (c), (d) are correct.

---

## **Question 7**

**If \$ \log_2(x + 4) - \log_2\left(\frac{x}{2} + 2\right) = 1 \$, then \$ x \$ is**

- **(a) $-3$** ✓
- **(b) 1**
- **(c) $-4$**
- **(d) 5**

**Solution:**
Solve: \$ x = -3 \$ (only valid solution in domain).

---

## **Question 8**

**Seismologists use the Richter scale: \$ R = \ln I - \ln I_0 \$. If an earthquake in city A is magnitude 8.0 and city B is reference, what is the ratio of intensities?**

- **(a) \$ e^8 : 1 \$** ✓
- **(b) \$ e^1 : 2 \$**
- **(c) \$ e^8 : 1 \$**
- **(d) \$ e^5 : 1 \$**
- **(e) \$ e^8 : 2 \$**

**Solution:**
\$ \frac{I}{I_0} = e^8 \$, so ratio is \$ e^8 : 1 \$.

---

## **Question 9**

**Bacteria grow as \$ G(t) = G_0 3^{kt} \$. If initial count is 1000, after 1 min it is 9000, how long to reach 730,000?**

- **(a) 2**
- **(b) 1**
- **(c) 3** ✓
- **(d) 6**

**Solution:**
Solve: \$ t = \frac{\ln 730}{2 \ln 3} \approx 3 \$ minutes.

---

## **Question 10**

**Bulb A is \$ f(x) = 3^{x^2+1} \$ times brighter than bulb B, where \$ x \$ is voltage difference. If A is 10 times brighter, what is \$ x \$?**

- **(a) \$ \log_3 5 - 1 \$**
- **(b) \$ \log_3 10 \$**
- **(c) \$ \sqrt{\frac{\ln 10}{\ln 3}} \$**
- **(d) \$ \sqrt{\log_3 \frac{10}{3}} \$** ✓

**Solution:**
\$ x = \sqrt{\log_3 \frac{10}{3}} \$.

---

## **Question 11**

**If supply voltages are 4 and 3 for bulbs A and B, how many times is A brighter than B?**

**Solution:**
\$ x = 1 \$, so \$ 3^{1^2+1} = 9 \$.
**Answer:** 9 times.

---

## **Question 12**

**Find the number of values of \$ x \$ satisfying \$ (5x)^{\log_{5x}(6x^3 - 36x^2 + 66x - 35)} = 1 \$.**

**Solution:**
Solve \$ 6x^3 - 36x^2 + 66x - 35 = 1 \$, roots \$ x = 1, 2, 3 \$.
**Answer:** 3 values.

---

All questions and solutions from the PDF have been extracted above[^1].

<div style="text-align: center">⁂</div>

[^1]: Week-6-practice-assignment-solution.pdf

