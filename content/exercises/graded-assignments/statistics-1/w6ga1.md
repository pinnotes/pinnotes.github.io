---
title: Week 6 Graded Assignment Solution
weight: 6
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

Here are all the questions and their solutions from the PDF **Week_6_Graded_Solution.pdf** (Statistics for Data Science-1, Week-6 Graded Assignment)[^1]:

---

## **1. Five-Digit Numbers Divisible by 4**

**Question:**
How many 5-digit numbers can be formed from the numbers 0, 2, 4, 5, 7 and 9 (without repetition), such that it is divisible by 4?

**Options:**
a. 120
b. 144
c. 132
d. 104

**Answer:** b. 144

**Solution:**
A number is divisible by 4 if its last two digits form a number divisible by 4.
Possible last two digits: 04, 20, 24, 40, 52, 72, 92.

- **Case 1:** Ends with 04, 20, or 40
    - First three digits from remaining four digits: $^4P_3 = 24$ ways for each.
- **Case 2:** Ends with 24, 52, 72, or 92
    - First digit cannot be 0.
    - First digit: 3 choices (excluding 0 and the two used in the last two digits).
    - Next two digits: from the remaining three (including 0), $^3P_2 = 6$ ways.
    - Total for each: $3 \times 6 = 18$.

**Total:**
$3 \times 24 + 4 \times 18 = 72 + 72 = 144$.

---

## **2. Train Tickets Between Stations**

**Question:**
There are $n$ train stops between Chennai and Assam. How many train tickets are to be printed, so that a person can travel between any of the two stations (irrespective of direction of travel)?

**Answer:**
$(n+2)(n+1)$

**Solution:**
Total stations = $n+2$ (including Chennai and Assam).
Number of ways to select any two stations: $^{(n+2)}P_2 = (n+2)(n+1)$.

**Example:**
If $n=7$, total tickets = $9 \times 8 = 72$.

---

## **3. Selecting Friends for a Party**

**Question:**
A man desires to throw a party for some of his friends. In how many ways can he select $m$ friends from a group of $n$ friends, if two of his friends (say 'A' and 'B') will not attend the party together?

**Answer:**
$\binom{n}{m} - \binom{n-2}{m-2}$

**Solution:**
Total ways without restriction: $\binom{n}{m}$.
Ways where both A and B are present: $\binom{n-2}{m-2}$.
Ways where A and B are not both present: $\binom{n}{m} - \binom{n-2}{m-2}$.

**Example:**
If $n=10$, $m=7$,
$\binom{10}{7} - \binom{8}{5} = 120 - 56 = 64$.

---

## **4. Wearing Clothes on Different Days**

**Question:**
Suman has $m$ clothes of different types, say, $C_1, C_2, ..., C_m$ and she wants to wear all these clothes at different days, say, $D_1, D_2, ..., D_m$. Due to some reason, $C_1$ must be used either at $D_{m-2}$ or at $D_{m-1}$ and $C_2$ can be used either at $D_{m-1}$ or at $D_{m-2}$ and $D_m$. Every cloth is to be used at only one day. In how many ways can clothes be used?

**Answer:**
$2 \times 2 \times (m-2)!$

**Solution:**

- **$C_1$:** 2 ways ($D_{m-2}$ or $D_{m-1}$).
- **$C_2$:** 2 ways (if $C_1$ is used at $D_{m-1}$, $C_2$ can be used at $D_{m-2}$ or $D_m$; if $C_1$ is at $D_{m-2}$, $C_2$ at $D_{m-1}$ or $D_m$. However, the solution simplifies to 2 ways for $C_2$ as per the PDF.)
- **Remaining clothes:** $(m-2)$ clothes to be assigned to remaining days: $(m-2)!$ ways.

**Total:** $2 \times 2 \times (m-2)!$

**Example:**
If $m=6$, total ways = $2 \times 2 \times 4! = 4 \times 24 = 96$.

---

## **5. Palindromic Numbers**

**Question:**
How many $n$-digit numbers can be formed such that they read the same way from either side (i.e., the number should be a palindrome)?

**Options:**
a. $9 \times 10^{\lfloor \frac{n-1}{2} \rfloor}$
b. $9 \times 10^{\lceil \frac{n-1}{2} \rceil}$
c. $9 \times 10^{n-1}$
d. $10^n$

**Answer:** a. $9 \times 10^{\lfloor \frac{n-1}{2} \rfloor}$

**Solution:**

- **First digit:** 9 choices (cannot be 0).
- **Next $\lfloor \frac{n-1}{2} \rfloor$ digits:** 10 choices each.
- **Rest:** Determined by symmetry.

**Total:** $9 \times 10^{\lfloor \frac{n-1}{2} \rfloor}$.

---

## **6. Forming $m$-Digit Numbers Without Repetition**

**Question:**
Find the total number of ways to form an $m$-digit number (without repetition) from the digits $0, 1, 2, ..., n$.

**Options:**
a. $n \times {}^nP_{m-1}$
b. $^{n+1}P_m$
c. $(n-1) \times {}^{n-1}P_{m-1}$
d. $n + {}^nP_{m-1}$

**Answer:** a. $n \times {}^nP_{m-1}$

**Solution:**

- **First digit:** $n$ choices (cannot be 0).
- **Remaining $m-1$ digits:** $^nP_{m-1}$ (from the remaining $n$ digits).

**Total:** $n \times {}^nP_{m-1}$.

---

## **7. Round Table Seating**

**Question:**
In a restaurant, $x$ men and $y$ women are seated on $(x+y)$ chairs at a round table. Find the total number of possible ways such that $x$ men are always sitting next to each other.

**Options:**
a. $x! \times y!$
b. $(x-1)! \times (y-1)!$
c. $x! \times (y+1)!$
d. $(x+y-1)!$

**Answer:** a. $x! \times y!$

**Solution:**

- **Treat men as one group:** $(y+1)$ entities, arrange in $y!$ ways (for round table, treating the group as fixed, but the PDF solution is $y! \times x!$).
- **Arrange men within the group:** $x!$ ways.

**Total:** $y! \times x!$ (as per PDF solution).

---

## **8. Group Formation with Exactly One District Level Player**

**Question:**
In how many ways can a group of $n-m$ players be formed from $n$ state level players and $m$ district level players such that the group contains exactly 1 district level player?

**Answer:**
$\binom{n}{n-m-1} \times \binom{m}{1} = \frac{m \times n!}{(n-m-1)! \times (m+1)!}$

**Solution:**

- **State level players:** $\binom{n}{n-m-1}$
- **District level player:** $\binom{m}{1}$
- **Total:** $\binom{n}{n-m-1} \times \binom{m}{1}$

**Example:**
If $n=10$, $m=6$,
$\binom{10}{3} \times \binom{6}{1} = 120 \times 6 = 720$.

---

## **9. Permutation Ratio**

**Question:**
Find the value of $r$ such that the ratio of ${}^3P_r$ and ${}^4P_{r-1}$ will be $\frac{1}{2}$?

**Answer:** 3

**Solution:**

$$
\frac{3!/(3-r)!}{4!/(5-r)!} = \frac{1}{2}
$$

Solving: $(5-r)(4-r) = 2 \implies r = 3$ (since $r=6$ is invalid).

---

## **10. Incorrect Option for Combinations**

**Question:**
Choose the incorrect option/s for $n > 2$:

**Options:**
a. $\binom{n}{r} + \binom{n}{r-1} = \binom{n+1}{r}$
b. $\binom{n}{r} = 1$ for $r = 0$ and $r = n$
c. $\binom{n}{r} = \binom{n-1}{r-1} + \binom{n-1}{r}$
d. None of the above

**Answer:** d. None of the above

**Solution:**
All options a, b, and c are correct for $n > 2$. Hence, the incorrect option is (d).

---

This covers all questions and solutions from the PDF[^1].

<div style="text-align: center">⁂</div>

[^1]: Week_6_Graded_Solution.pdf

[^2]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/programming-and-data-science/ct-week-6-sols/50798700

[^3]: https://www.scribd.com/document/596282009/MLF-week6-test-questions-V3-solution

[^4]: https://www.scribd.com/document/719953648/JK-Sioklahnd24t

