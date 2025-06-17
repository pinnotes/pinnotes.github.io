---
title: Week 4 Statistics Graded Assignment Questions
weight: 12
math: true
tags: 
- statistics
categories:
- Statistics Graded Assignment
series:
- Statistics Graded Assignment
---


{{< qna/question >}}

### Questions (1)–(6): Based on Table 4.1.G

| Dealer's Location | OnePlus | BBK Electronics |
| :-- | :-- | :-- |
| Chennai | {{< qna/input name="a" value="2" >}} | {{< qna/input name="b" value="2" >}} |
| Punjab | {{< qna/input name="c" value="2" >}} | {{< qna/input name="d" value="2" >}} |
| Chennai | {{< qna/input name="e" value="2" >}} | {{< qna/input name="f" value="2" >}} |
| Punjab | {{< qna/input name="g" value="2" >}} | {{< qna/input name="h" value="2" >}} |
| Chennai | {{< qna/input name="i" value="2" >}} | {{< qna/input name="j" value="2" >}} |
| Punjab | {{< qna/input name="k" value="2" >}} | {{< qna/input name="l" value="2" >}} |
| Chennai | {{< qna/input name="m" value="2" >}} | {{< qna/input name="n" value="2" >}} |


#### 1. What is the population standard deviation of sales of OnePlus? (Enter the answer correct to 2 decimal accuracy)

**Solution:**
Let $m_x$ and $\sigma_x$ be the mean and population standard deviation of sales of OnePlus respectively.

$$
m_x = \frac{a+c+e+g+i+k+m}{7}
$$

  {{< qna/formula label="mean" value="((a+b+c+d+e+f+g+h+i+j+k+l+m+n))/7" >}}

$$
\sigma_x^2 = \frac{(a - m_x)^2 + (c - m_x)^2 + (e - m_x)^2 + (g - m_x)^2 + (i - m_x)^2 + (k - m_x)^2 + (m - m_x)^2}{7}
$$

  {{< qna/result >}}
Therefore, Population standard deviation of sales of OnePlus = $\sqrt{\sigma_x^2}$

{{< /qna/question >}}


<!-- {{< math/calc3 a=10 b=5 formula="a + b * 2" >}} -->

<!-- {{< math/calc3 x=2 y=3 z=4 formula="x * y + z" >}} -->

---

{{< qna/question >}}
  {{< qna/input name="a" value="2" >}}
  {{< qna/input name="b" value="3" >}}
  {{< qna/formula label="sum" value="a + b" >}}
   The sum is: {{< qna/formula-value label="sum" >}}
  {{< qna/formula label="average" value="sum / 2" >}}
   The average is: {{< qna/formula-value label="average" >}}
  {{< qna/result >}}
{{< /qna/question >}}

#### 2. What is the sample standard deviation of sales of BBK Electronics? (Enter the answer correct to 2 decimal accuracy)

**Solution:**
Let $m_y$ and $S_y$ be the mean and sample standard deviation of sales of BBK Electronics respectively.

$$
m_y = \frac{b+d+f+h+j+l+n}{7}
$$

$$
S_y^2 = \frac{(b - m_y)^2 + (d - m_y)^2 + (f - m_y)^2 + (h - m_y)^2 + (j - m_y)^2 + (l - m_y)^2 + (n - m_y)^2}{7-1}
$$

Therefore, Standard deviation of sales of BBK Electronics = $\sqrt{S_y^2}$

---

#### 3. What is the sample co-variance between the sales of OnePlus and BBK Electronics? (Enter the answer correct to 2 decimal accuracy)

**Solution:**
Let $X$ = Sales of OnePlus
$Y$ = Sales of BBK Electronics.

$$
Cov(X,Y) = \frac{\sum_{i=1}^{7}(x_i - m_x)(y_i - m_y)}{7-1}
$$

$$
= \frac{(a - m_x)(b - m_y) + (c - m_x)(d - m_y) + (e - m_x)(f - m_y) + (g - m_x)(h - m_y) + (i - m_x)(j - m_y) + (k - m_x)(l - m_y) + (m - m_x)(n - m_y)}{6}
$$

---

#### 4. What is the correlation coefficient between the sales of OnePlus and BBK Electronics? (Enter the answer correct to 2 decimal accuracy)

**Solution:**
Let $r$ be the correlation coefficient between the sales of OnePlus and BBK Electronics.

$$
r = \frac{Cov(X,Y)}{S_x \times S_y}
$$

where,
Cov(X,Y) = Sample Covariance between sales of OnePlus and BBK Electronics.
$S_x$ = Sample standard deviation of sales of OnePlus = $\sqrt{\frac{n}{n-1}} \sigma_x$ = $\sqrt{\frac{7}{6}} \sigma_x$
$S_y$ = Sample standard deviation of sales of BBK Electronics.

---

#### 5. What can you say about the linear relationship between the sales of OnePlus and BBK Electronics? (More than one option can be correct)

(a) Strong
(b) Positive
(c) Weak
(d) Negative
(e) Absence of linear relationship
(f) Moderate

**Solution:**

- If $0.75 \leq r \leq 1$, then there is a strong and positive linear relationship.
- If $0.5 < r < 0.75$, then there is a moderate and positive linear relationship.
- If $0.25 < r < 0.5$, then there is a weak and positive linear relationship.
- If $-0.25 < r < 0.25$, then there is absence of linear relationship.
- If $-0.5 < r < -0.25$, then there is a weak and negative linear relationship.
- If $-0.75 < r < -0.5$, then there is a moderate and negative linear relationship.
- If $-1 < r < -0.75$, then there is a strong and negative linear relationship.

---

#### 6. Is the sales of OnePlus strongly influenced by the location of dealer?

(a) Yes
(b) No

**Solution:**
Let Chennai be represented by 0 and Punjab by 1.
The Point Bi-serial correlation coefficient between the sales of OnePlus and the location of dealer is given by:

$$
r_{pb} = \frac{(\bar{Y_0} - \bar{Y_1})}{\sigma_x} \times \sqrt{p_0 \times p_1}
$$

where,
$p_0$ = Proportion of Chennai dealers = $\frac{4}{7}$
$p_1$ = Proportion of Punjab dealers = $\frac{3}{7}$
$\bar{Y_0}$ = Mean sales of OnePlus in Chennai = $\frac{a+e+i+m}{4}$
$\bar{Y_1}$ = Mean sales of OnePlus in Punjab = $\frac{c+g+k}{3}$
$\sigma_x$ = Population standard deviation of sales of OnePlus

$$
r_{pb} = \frac{(\bar{Y_0} - \bar{Y_1})}{\sigma_x} \times 0.49487
$$

If $0.75 \leq |r_{pb}| \leq 1$, then the sales of OnePlus is strongly influenced by the location of dealer.
Else, the sales of OnePlus is not strongly influenced by the location of dealer.

---

### Questions (7)–(11): Based on Table 4.2.G

| Economic Conditions | Bright | Average | Dull | Borderline |
| :-- | :-- | :-- | :-- | :-- |
| Good | a | b | c | d |
| Poor | e | f | g | h |

#### 7. What proportion of total students are dull? (Enter the answer correct to 2 decimal accuracy)

**Solution:**
Proportion of dull students = $\frac{c+g}{a+b+c+d+e+f+g+h}$

---

#### 8. What proportion of total students are poor economic conditions? (Enter the answer correct to 2 decimal accuracy)

**Solution:**
Proportion of students having poor economic conditions = $\frac{e+f+g+h}{a+b+c+d+e+f+g+h}$

---

#### 9. What proportion of students of good economic conditions are borderline? (Enter the answer correct to 2 decimal accuracy)

**Solution:**
Required proportion = $\frac{d}{a+b+c+d}$

---

#### 10. What percentage of bright students are in poor economic conditions? (Enter the answer correct to 2 decimal accuracy)

**Solution:**
Required percentage = $(\frac{e}{a+e}) \times 100$

---

#### 11. What percentage of average students are in good economic conditions? (Enter the answer correct to 2 decimal accuracy)

**Solution:**
Required percentage = $(\frac{b}{b+f}) \times 100$

---