---
title: Week 4 Graded Assignment Solution
weight: 4
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

Here are all the questions and their solutions from the attached PDF **Week_4_Graded_Solution.pdf**[^1]:

---

## **Questions 1–6: Sales Data Analysis**

**Context:**
The phone brands OnePlus, Vivo, and Oppo are owned by BBK Electronics. Table 4.1.G represents sales (in Lakhs) of OnePlus and BBK Electronics by different dealers in Chennai and Punjab in 2010.


| Dealer's Location | OnePlus | BBK Electronics |
| :-- | :-- | :-- |
| Chennai | a | b |
| Punjab | c | d |
| Chennai | e | f |
| Punjab | g | h |
| Chennai | i | j |
| Punjab | k | l |
| Chennai | m | n |


---

### **1. What is the population standard deviation of sales of OnePlus?**

**Solution:**
Let \$ m_x \$ and \$ \sigma_x \$ be the mean and population standard deviation of sales of OnePlus, respectively.

$$
m_x = \frac{a + c + e + g + i + k + m}{7}
$$

$$
\sigma_x^2 = \frac{(a - m_x)^2 + (c - m_x)^2 + (e - m_x)^2 + (g - m_x)^2 + (i - m_x)^2 + (k - m_x)^2 + (m - m_x)^2}{7}
$$

$$
\text{Population standard deviation} = \sqrt{\sigma_x^2}
$$

**(Enter answer correct to 2 decimal places.)**

---

### **2. What is the sample standard deviation of sales of BBK Electronics?**

**Solution:**
Let \$ m_y \$ and \$ S_y \$ be the mean and sample standard deviation of sales of BBK Electronics, respectively.

$$
m_y = \frac{b + d + f + h + j + l + n}{7}
$$

$$
S_y^2 = \frac{(b - m_y)^2 + (d - m_y)^2 + (f - m_y)^2 + (h - m_y)^2 + (j - m_y)^2 + (l - m_y)^2 + (n - m_y)^2}{6}
$$

$$
\text{Sample standard deviation} = \sqrt{S_y^2}
$$

**(Enter answer correct to 2 decimal places.)**

---

### **3. What is the sample co-variance between the sales of OnePlus and BBK Electronics?**

**Solution:**
Let \$ X = \$ Sales of OnePlus, \$ Y = \$ Sales of BBK Electronics.

$$
\text{Cov}(X,Y) = \frac{\sum_{i=1}^{7}(x_i - m_x)(y_i - m_y)}{6}
$$

$$
= \frac{(a - m_x)(b - m_y) + (c - m_x)(d - m_y) + \dots + (m - m_x)(n - m_y)}{6}
$$

**(Enter answer correct to 2 decimal places.)**

---

### **4. What is the correlation coefficient between the sales of OnePlus and BBK Electronics?**

**Solution:**
Let \$ r \$ be the correlation coefficient.

$$
r = \frac{\text{Cov}(X,Y)}{S_x \times S_y}
$$

where \$ S_x = \$ sample standard deviation of OnePlus \$ = \sqrt{\frac{7}{6}} \sigma_x \$,
and \$ S_y = \$ sample standard deviation of BBK Electronics.

**(Enter answer correct to 2 decimal places.)**

---

### **5. What can you say about the linear relationship between the sales of OnePlus and BBK Electronics?**

**Solution:**
Interpret the absolute value of \$ r \$:

- **If \$ 0.75 \leq r \leq 1 \$:** Strong and positive linear relationship
- **If \$ 0.5 < r < 0.75 \$:** Moderate and positive linear relationship
- **If \$ 0.25 < r < 0.5 \$:** Weak and positive linear relationship
- **If \$ -0.25 < r < 0.25 \$:** Absence of linear relationship
- **If \$ -0.5 < r < -0.25 \$:** Weak and negative linear relationship
- **If \$ -0.75 < r < -0.5 \$:** Moderate and negative linear relationship
- **If \$ -1 < r < -0.75 \$:** Strong and negative linear relationship

---

### **6. Is the sales of OnePlus strongly influenced by the location of dealer?**

**Solution:**
Let Chennai = 0, Punjab = 1.

$$
r_{pb} = \frac{(\bar{Y_0} - \bar{Y_1})}{\sigma_x} \times \sqrt{\frac{4}{7} \times \frac{3}{7}}
$$

where

- \$ \bar{Y_0} = \$ mean sales in Chennai \$ = \frac{a + e + i + m}{4} \$
- \$ \bar{Y_1} = \$ mean sales in Punjab \$ = \frac{c + g + k}{3} \$
- \$ \sigma_x = \$ population standard deviation of OnePlus sales

**If \$ 0.75 \leq |r_{pb}| \leq 1 \$,** sales are strongly influenced by location.
**Else,** sales are not strongly influenced by location.

---

## **Questions 7–11: Intelligence and Economic Conditions**

**Context:**
N college students are classified according to their intelligence level and economic conditions (Table 4.2.G):


| Economic Conditions | Bright | Average | Dull | Borderline |
| :-- | :-- | :-- | :-- | :-- |
| Good | a | b | c | d |
| Poor | e | f | g | h |


---

### **7. What proportion of total students are dull?**

**Solution:**

$$
\text{Proportion} = \frac{c + g}{a + b + c + d + e + f + g + h}
$$

**(Enter answer correct to 2 decimal places.)**

---

### **8. What proportion of total students are in poor economic conditions?**

**Solution:**

$$
\text{Proportion} = \frac{e + f + g + h}{a + b + c + d + e + f + g + h}
$$

**(Enter answer correct to 2 decimal places.)**

---

### **9. What proportion of students of good economic conditions are borderline?**

**Solution:**

$$
\text{Proportion} = \frac{d}{a + b + c + d}
$$

**(Enter answer correct to 2 decimal places.)**

---

### **10. What percentage of bright students are in poor economic conditions?**

**Solution:**

$$
\text{Percentage} = \left(\frac{e}{a + e}\right) \times 100
$$

**(Enter answer correct to 2 decimal places.)**

---

### **11. What percentage of average students are in good economic conditions?**

**Solution:**

$$
\text{Percentage} = \left(\frac{b}{b + f}\right) \times 100
$$

**(Enter answer correct to 2 decimal places.)**

---

This covers all questions and solutions from the PDF[^1].

<div style="text-align: center">⁂</div>

[^1]: Week_4_Graded_Solution.pdf

[^2]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/mathematics-for-data-science/all-subjects-week-4-graded-assignments/74411106

[^3]: https://gradedassignments.github.io/iit-madras-graded-assignments/

[^4]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/programming-and-data-science/week-4-graded-assignment-iit-madras/64471666

[^5]: https://gradedassignments.github.io/maths-week-4-graded-assignments-iit-madras/

[^6]: https://www.youtube.com/watch?v=kGq_4ZlxNBE

[^7]: https://www.scribd.com/document/534324731/Peer-Graded-Assignment-Week-4-Docx

[^8]: https://www.scribd.com/document/640395666/GRPA-WEEK-4-SOLUTIONS

[^9]: https://www.youtube.com/watch?v=I4D0ejQnPR8

[^10]: https://www.youtube.com/watch?v=nRaZ3hCpL0w

[^11]: https://iitmdatascience.com/ga

