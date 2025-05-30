---
title: Order and Ranking
date: 2020-01-01
tags:
  - Notes 
  - SSC Exam
excludeSearch: false
---

Here is a detailed explanation of the **Order and Ranking** concepts as covered in your provided PDF, including definitions, formulas, solved examples, and additional practice questions with solutions[^1][^2][^4].

---

## Detailed Explanation: Order and Ranking

**Order and Ranking** questions involve arranging people or objects in a specific sequence (such as a line or row) and determining their positions or ranks based on given information. These questions are common in competitive exams and test your ability to analyze and interpret relative positions.

---

### **Key Concepts and Formulas**

#### **1. Total Number of Persons in a Row**

**Formula:**

$$
\text{Total number of persons} = (\text{Rank from one end} + \text{Rank from the other end}) - 1
$$

**Example:**
If a person is 10th from the left and 15th from the right in a row,

$$
\text{Total} = (10 + 15) - 1 = 24
$$

**Explanation:**
This formula is used when you know the position of a person from both ends[^1][^3][^4].

---

#### **2. Rank from Opposite End**

**Formula:**

$$
\text{Rank from opposite end} = (\text{Total number of persons} - \text{Given rank}) + 1
$$

**Example:**
In a row of 40 persons, Q is 23rd from the right. What is Q’s position from the left?

$$
\text{Position from left} = (40 - 23) + 1 = 18
$$

**Explanation:**
This formula helps you find a person’s rank from the other end if you know the total number and one rank[^1][^2][^4].

---

#### **3. Number of Persons Between Two People**

There are two cases:

- **Simple (Non-overlapping) Case:**

$$
\text{Number between} = \text{Total} - (\text{Rank of A from left} + \text{Rank of B from right})
$$

**Example:**
In a row of 52, A is 12th from the right and B is 24th from the left.

$$
\text{Number between} = 52 - (12 + 24) = 52 - 36 = 16
$$
- **Overlapping Case:**

$$
\text{Number between} = (\text{Rank of A from left} + \text{Rank of B from right}) - (\text{Total} + 2)
$$

**Example:**
In a row of 30, A is 14th from the right and B is 20th from the left.

$$
\text{Number between} = (14 + 20) - (30 + 2) = 34 - 32 = 2
$$

**Explanation:**
Use the overlapping formula if the sum of the ranks from both ends exceeds the total[^1][^2][^4].

---

#### **4. Minimum/Maximum Number of Persons**

- **Minimum:** Use the overlapping case formula.

$$
\text{Minimum} = (\text{Rank of A from left} + \text{Rank of B from right}) - (\text{Number between} + 2)
$$
- **Maximum:** Use the simple case formula.

$$
\text{Maximum} = (\text{Rank of A from left} + \text{Rank of B from right}) + (\text{Number between})
$$

**Example:**
P is 12th from the left and Q is 15th from the right, with 5 persons between them.

$$
\text{Minimum} = (12 + 15) - (5 + 2) = 27 - 7 = 20
$$

$$
\text{Maximum} = (12 + 15) + 5 = 32
$$

**Explanation:**
Minimum is for overlapping, maximum for non-overlapping[^1][^6].

---

#### **5. Rank of a Person Sitting Exactly Between Two**

- **Find the number of persons between two people.**
- **The person in the middle will have half the number of people on either side.**
**Example:**
In a row of 35, Daisy is 5th from the left and Yashika is 9th from the right.

$$
\text{Number between} = 35 - (5 + 9) = 21
$$

Lipi is exactly in the middle, so there are 10 people on either side.

$$
\text{Rank of Lipi from right} = 9 + 10 + 1 = 20
$$

**Explanation:**
Add the people between and the person themselves to get the rank from the end[^1].

---

#### **6. Interchanging Positions**

- **Find the total number of persons using the common person’s position before and after interchange.**
- **Calculate the new position of the other person.**
**Example:**
Prabhas is 15th from the left and Kartik is 23rd from the right. After interchange, Prabhas is 18th from the left.

$$
\text{Total} = (18 + 23) - 1 = 40
$$

Kartik’s new position from the right:

$$
\text{Position from right} = (\text{Total} - \text{Left rank before interchange}) + 1 = (40 - 15) + 1 = 26
$$

**Explanation:**
Use the formula to find the new position after swapping[^1][^3][^4].

---

## **Solved Examples**

### **1. Total Number of Persons**

**Question:**
In a class, Albert ranks 6th from the top and 23rd from the bottom. Find the total number of students.
**Solution:**

$$
\text{Total} = (6 + 23) - 1 = 28
$$

[^1][^3][^5]

---

### **2. Rank from Opposite End**

**Question:**
In a row of 40, Q is 23rd from the right. What is Q’s position from the left?
**Solution:**

$$
\text{Position from left} = (40 - 23) + 1 = 18
$$

[^1][^2][^4]

---

### **3. Number of Persons Between Two**

**Question:**
In a row of 52, A is 12th from the right and B is 24th from the left. Find the number of persons between A and B.
**Solution:**

$$
\text{Number between} = 52 - (12 + 24) = 16
$$

[^1][^2][^4]

---

### **4. Minimum/Maximum Number of Persons**

**Question:**
P is 12th from the left and Q is 15th from the right, with 5 persons between them. Find the minimum number of persons.
**Solution:**

$$
\text{Minimum} = (12 + 15) - (5 + 2) = 20
$$

[^1][^6]

---

### **5. Interchanging Positions**

**Question:**
Prabhas is 15th from the left and Kartik is 23rd from the right. After interchange, Prabhas is 18th from the left. What is Kartik’s new position from the right?
**Solution:**

$$
\text{Total} = (18 + 23) - 1 = 40
$$

$$
\text{Kartik’s new position from right} = (40 - 15) + 1 = 26
$$

[^1][^3][^4]

---

## **Practice Questions**

### **1. Total Number**

**Q:** In a row, a person is 8th from the left and 12th from the right. How many people are in the row?
**A:**

$$
(8 + 12) - 1 = 19
$$

---

### **2. Rank from Opposite End**

**Q:** In a row of 25, a person is 10th from the left. What is their position from the right?
**A:**

$$
(25 - 10) + 1 = 16
$$

---

### **3. Number Between Two**

**Q:** In a row of 30, A is 7th from the left and B is 12th from the right. How many people are between A and B?
**A:**

$$
30 - (7 + 12) = 11
$$

(Check if overlapping is needed: if $7 + 12 > 30$, use overlapping formula. Here, $19 < 30$, so not overlapping.)

---

### **4. Minimum Number**

**Q:** X is 10th from the left and Y is 15th from the right, with 4 people between them. What is the minimum number of people?
**A:**

$$
(10 + 15) - (4 + 2) = 19
$$

---

### **5. Interchanging Positions**

**Q:** In a row, A is 10th from the left and B is 20th from the right. After swapping, A is 15th from the left. What is B’s new position from the right?
**A:**

$$
\text{Total} = (15 + 20) - 1 = 34
$$

$$
\text{B’s new position from right} = (34 - 10) + 1 = 25
$$

---

## **Summary Table**

| Concept | Formula/Approach | Example |
| :-- | :-- | :-- |
| Total number | (Rank from left + Rank from right) - 1 | (10+15)-1 = 24 |
| Rank from opposite end | (Total - Given rank) + 1 | (40-23)+1 = 18 |
| Number between (simple) | Total - (Rank A from left + Rank B from right) | 52-(12+24)=16 |
| Number between (overlap) | (Rank A from left + Rank B from right) - (Total + 2) | (14+20)-(30+2)=2 |
| Minimum number | (Rank A from left + Rank B from right) - (Number between + 2) | (12+15)-(5+2)=20 |
| Maximum number | (Rank A from left + Rank B from right) + Number between | (12+15)+5=32 |
| Interchanging positions | Total = (New left + Old right) - 1; New position = (Total - Old left) + 1 | (18+23)-1=40; (40-15)+1=26 |


---

## **Tips**

- **Always draw a diagram or visualize the row.**
- **Check if the case is simple or overlapping.**
- **Use the correct formula based on the question.**
- **Practice with different types of order and ranking questions.**

---

This comprehensive guide, with explanations, examples, and practice questions, will help you master order and ranking reasoning for any competitive exam[^1][^2][^4].

<div style="text-align: center">⁂</div>

[^1]: Order-and-Ranking.pdf

[^2]: https://testbook.com/reasoning/order-and-ranking-reasoning

[^3]: https://byjus.com/govt-exams/ranking-and-order-logical-reasoning/

[^4]: https://www.bankersadda.com/order-and-ranking-in-reasoning/

[^5]: https://testbook.com/objective-questions/mcq-on-ordering-and-ranking--5eea6a0e39140f30f369e431

[^6]: https://www.practicemock.com/blog/wp-content/uploads/2021/05/Order-Ranking-Practice-Questions-Free-PDF-1.pdf

[^7]: https://byjus.com/govt-exams/order-ranking-questions/

[^8]: https://unstop.com/blog/order-and-ranking-explained

[^9]: https://www.smartkeeda.com/reasoning-aptitude/number-and-ranking-questions

[^10]: https://guidely.in/free-pdf-subtopic/order-and-ranking-puzzle-pdf

[^11]: https://www.upscprep.com/rank-upsc-csat-logical-reasoning/

