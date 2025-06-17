---
title: Week 7 Graded Assignment Solution
weight: 7
tags: 
- statistics
categories:
- Statistics Graded Assignment
series:
- Statistics Graded Assignment
excludeSearch: false
width: wide
---

Here are all the questions and their solutions from the attached **Week_7_Graded_Solution.pdf**[^1]:

---

## **Questions and Solutions**

### **1. Arranging Boys and Girls with Exactly 4 Boys Between Two Girls**

**Question:**
\$ m \$ boys and 2 girls are to be placed next to each other in the school ground for morning assembly. What is the probability that there are exactly 4 boys between the 2 girls?

**Options:**
a. $\frac{2 m-5}{m+2 P_{2}}$
b. $\frac{2 m-6}{m+2 P_{2}}$
c. $\frac{2 m-6}{m+3 P_{2}}$
d. $\frac{2 m-4}{m+2 P_{2}}$

**Answer:** **b**

**Solution:**

- **Total arrangements for 2 girls:** $^{m+2}P_2$
- **Favorable cases:** For exactly 4 boys between two girls, there are $2(m-3)$ ways (since for each starting position, there are two orders for the girls).
- **Probability:** $\frac{2m-6}{^{m+2}P_2}$

---

### **2. Cardinality of Event in Multiple Select Question**

**Question:**
In a Multiple Select Question, there are \$ m \$ options, of which one or more can be correct. Let us define an event \$ E \$ that the option 'A' is correct. What is the cardinality of \$ E \$?

**Solution:**

- **Case 1:** Only option A is correct.
- **Case 2:** Two options are correct and A is one of them.
- **...**
- **Case m:** All options are correct.
- **Total:** $1 + ^{m-1}C_1 + ^{m-1}C_2 + \ldots + 1 = 2^{m-1}$

---

### **3. Probability of At Least Two Correct Predictions**

**Question:**
A person predicts daily whether the price of stocks of wrist watch companies will go up or down. If his prediction on stock price of Titan is correct \$ a \$ times out of \$ b \$, for Rolex it is correct \$ p \$ times out of \$ q \$ and for Fossil it is correct \$ x \$ times out of \$ y \$, then what is the probability that at least two of his predictions are correct on a given day?

**Options:**
a. $\left[\frac{a}{b} \times \frac{p}{q} \times\left(1-\frac{x}{y}\right)\right]+\left[\frac{a}{b} \times\left(1-\frac{p}{q}\right) \times \frac{x}{y}\right]+\left[\left(1-\frac{a}{b}\right) \times \frac{p}{q} \times \frac{x}{y}\right]+\left[\frac{a}{b} \times \frac{p}{q} \times \frac{x}{y}\right]$
b. $\left[\frac{a}{b} \times \frac{p}{q} \times\left(1-\frac{x}{y}\right)\right]+\left[\frac{a}{b} \times\left(1-\frac{p}{q}\right) \times \frac{x}{y}\right]+\left[\left(1-\frac{a}{b}\right) \times \frac{p}{q} \times \frac{x}{y}\right]$
c. $\left[\frac{a}{b} \times \frac{p}{q} \times \frac{x}{y}\right]+\left[\frac{a}{b} \times \frac{p}{q} \times \frac{x}{y}\right]+\left[\frac{a}{b} \times \frac{p}{q} \times \frac{x}{y}\right]+\left[\frac{a}{b} \times \frac{p}{q} \times \frac{x}{y}\right]$
d. $\left[\frac{a}{b} \times \frac{p}{q} \times \frac{x}{y}\right]+\left[\frac{a}{b} \times \frac{p}{q} \times \frac{x}{y}\right]+\left[\frac{a}{b} \times \frac{p}{q} \times \frac{x}{y}\right]$

**Answer:** **a**

**Solution:**

- **Case 1:** Only Titan and Rolex correct.
- **Case 2:** Only Titan and Fossil correct.
- **Case 3:** Only Rolex and Fossil correct.
- **Case 4:** All three correct.
- **Probability:** Sum of all four cases.

---

### **4. Probability of Being in Table Tennis Team Only**

**Question:**
There are a total of \$ n \$ students who are part of badminton, table tennis and tennis team of the college. Of which \$ x\% \$ of students play table tennis, \$ p\% \$ play tennis and \$ a\% \$ play badminton. It is also noticed that all students who play tennis also play table tennis, but not badminton. Now a student is selected at random, what is the probability that he/she is part of table tennis team only? (Enter the answer correct to 1 decimal place.)

**Solution:**

- **Probability:** $\left(1 - \frac{a + p}{100}\right)$ (assuming all students are accounted for and $x\% \geq p\% + a\%$).
- **Example:** \$ n = 150, x = 50, p = 20, a = 70 \$
    - **Table tennis only:** $\frac{15}{150} = \frac{1}{10}$

---

### **5. Probability of Clearing Quiz 2**

**Question:**
The chance that a student will clear the quiz 1 paper is \$ a \$ and the chance that he will clear both quiz 1 and quiz 2 papers is \$ b \$. The chance that he will clear at least one quiz paper is \$ c \$. What is the chance that he will clear quiz 2 paper? (Enter the answer correct to 2 decimal accuracy)

**Solution:**

- **Given:** \$ P(A) = a, P(A \cap B) = b, P(A \cup B) = c \$
- **Find:** \$ P(B) \$
- **Formula:** \$ P(B) = c - a + b \$
- **Example:** \$ a = 0.4, b = 0.3, c = 0.5 \$
    - **\$ P(B) = 0.5 - 0.4 + 0.3 = 0.4 \$**

---

### **6. Probability of Union of Two Events**

**Question:**
If \$ P(A) = x \$ and \$ P(B) = y \$ and probability of the complement of $(A \cup B)$ is \$ z \$, then calculate \$ P(A \cup B) \$? (Enter the answer correct to 2 decimal point accuracy)

**Solution:**

- **Formula:** \$ P(A \cup B) = 1 - z \$
- **Example:** \$ x = 0.2, y = 0.5, z = 0.4 \$
    - **\$ P(A \cup B) = 1 - 0.4 = 0.6 \$**

---

### **7. Probability of Drawing Specific Cards**

**Question:**
\$ a \$ cards are drawn at random (without replacement) from a pack of 52 cards. Find the probability that \$ b \$ are black and \$ c \$ are red. (Enter the answer correct to two decimal places)

**Solution:**

- **Probability:** $\frac{^{26}C_b \times ^{26}C_c}{^{52}C_a}$
- **Example:** \$ a = 4, b = 2, c = 2 \$
    - **Probability:** $\frac{^{26}C_2 \times ^{26}C_2}{^{52}C_4} \approx 0.39$

---

### **8–10: Clothes Selection Probability (Common Data)**

Pramod goes to a shop to buy some clothes. Shopkeeper shows him \$ x \$ shirts, \$ y \$ pants and \$ z \$ t-shirts. If he selects three clothes at random, then based on the information, answer the following:

#### **8. Probability of Different Types**

**Question:**
Find the probability that the randomly chosen clothes are of different type.

**Solution:**

- **Total cases:** $^{x+y+z}C_3$
- **Favorable cases:** $^xC_1 \times ^yC_1 \times ^zC_1$
- **Probability:** $\frac{^xC_1 \times ^yC_1 \times ^zC_1}{^{x+y+z}C_3}$
- **Example:** \$ x=5, y=4, z=10 \$
    - **Probability:** $\frac{5 \times 4 \times 10}{^{19}C_3} \approx 0.206$


#### **9. Probability of No Pants**

**Question:**
Find the probability that the randomly chosen clothes does not contain pant.

**Solution:**

- **Favorable cases:** $^{x+z}C_3$
- **Probability:** $\frac{^{x+z}C_3}{^{x+y+z}C_3}$
- **Example:** \$ x=5, y=4, z=10 \$
    - **Probability:** $\frac{^{15}C_3}{^{19}C_3} \approx 0.469$


#### **10. Probability of At Least One Shirt**

**Question:**
Find the probability that at least one of the clothes is a shirt.

**Solution:**

- **Probability:** $1 - \frac{^{y+z}C_3}{^{x+y+z}C_3}$
- **Example:** \$ x=5, y=4, z=10 \$
    - **Probability:** $1 - \frac{^{14}C_3}{^{19}C_3} \approx 0.624$

---

### **11. Probability of Imaginary Roots**

**Question:**
An urn contains 3 balls numbered 1, 2 and 3. The coefficients of the equation \$ p x^2 + q x + c = 0 \$ are determined by drawing the numbered balls with replacement. What is the probability that the equation will have imaginary roots?

**Options:**
a. $\frac{4}{27}$
b. $\frac{23}{27}$
c. $\frac{16}{27}$
d. None of the above

**Answer:** **b**

**Solution:**

- **Total outcomes:** $3 \times 3 \times 3 = 27$
- **Favorable for real roots:** Only 4 cases (see solution in PDF)
- **Probability of imaginary roots:** $1 - \frac{4}{27} = \frac{23}{27}$

---

### **12. Mutually Exclusive Events**

**Question:**
If \$ A \$ and \$ B \$ are mutually exclusive or disjoint events, then which of the following is/are always true:
a. \$ P(A) = P(B) \$
b. \$ P(A) < P(B) \$
c. \$ P(A) \leq P(B^c) \$
d. \$ P(A) \geq P(B^c) \$

**Answer:** **c**

**Solution:**
Since \$ A \cap B = \emptyset \$, \$ A \subseteq B^c \$, so \$ P(A) \leq P(B^c) \$.

---

This covers all questions and solutions from the **Week_7_Graded_Solution.pdf**[^1].

<div style="text-align: center">⁂</div>

[^1]: Week_7_Graded_Solution.pdf

[^2]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/programming-and-data-science/week-7-ct-ct-week-7-ga-solutions/67414512

[^3]: https://www.scribd.com/document/665102324/Week-7-Graded-Assignment-Solution

[^4]: https://gradedassignments.github.io/ct-week-7-graded-assignments-iit-madras/

[^5]: https://gradedassignments.github.io/maths-week-7-graded-assignments-iit-madras/

[^6]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/iitm-online-degree-data-science-and-programming/maths-week-7-graded-assignments-iit-madras/100828057

[^7]: https://telegram.me/s/IIT_Madras_Graded_Assignment_Sol

[^8]: https://www.youtube.com/watch?v=2UJOUISDEkc

[^9]: https://www.youtube.com/watch?v=qoU8C02-95Y

[^10]: https://www.scribd.com/document/648260885/Week-7-Probability

[^11]: https://www.youtube.com/watch?v=qWxF5zW6y2s

