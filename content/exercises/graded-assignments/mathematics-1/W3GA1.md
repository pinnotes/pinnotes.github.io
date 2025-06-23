---
title: Mathematics Week 3 Graded Assignment
weight: 3
label: Week 3
keywords: 
- Mathematics for Data Science 1
categories:
- Mathematics Graded Assignment
---


{{< border type="question" >}}

##### 1. Consider three Airports A, B, and C. Two friends Ananya and Madhuri want to meet at Airport C. Ananya Boarded Flight 1 from Point A to C which is 1200 km, due to bad weather, Flight 1 slowed down, and the average speed was reduced by 200 km/h and the time increased by 30 minutes. Madhuri boarded Flight 2 from Point B to C which is 1800 km, the average speed of Flight 2 is 720 km/h. What is the waiting time, and who will be waiting at the airport? (Given Ananya and Madhuri boarded at the same time)

Waiting Time is 1 hr and Ananya is waiting.

Waiting Time is 1 hr and Madhuri is waiting.

Waiting Time is 30 min and Ananya is waiting.

Waiting Time is 30 min and Madhuri is waiting.
{{</ border >}}

{{< border >}}
**Step-by-Step Explanation:**

1. **Determine Ananya's Flight Details:**
    - Let Ananya's original speed be \$ x \$ km/h.
    - Original time: \$ \frac{1200}{x} \$ hours.
    - Reduced speed: \$ x - 200 \$ km/h.
    - New time: \$ \frac{1200}{x - 200} \$ hours.
    - Time increased by 30 minutes (0.5 hours):

$$
\frac{1200}{x - 200} - \frac{1200}{x} = 0.5
$$
2. **Solve for \$ x \$:**
   
- Multiply through by \$ x(x - 200) \$:

$$
1200x - 1200(x - 200) = 0.5x(x - 200)
$$

- Simplify:

$$
240000 = 0.5x^2 - 100x \implies x^2 - 200x - 480000 = 0
$$

- Solve the quadratic equation:

$$
x = \frac{200 \pm \sqrt{(200)^2 + 4 \cdot 480000}}{2} = \frac{200 \pm 1400}{2}
$$

- Valid solution: \$ x = 800 \$ km/h (original speed).
  
1. **Calculate Flight Times:**
    - **Ananya's new time:** \$ \frac{1200}{800 - 200} = 2 \$ hours.
    - **Madhuri's time:** \$ \frac{1800}{720} = 2.5 \$ hours.
2. **Determine Waiting Time:**
    - Ananya arrives in **2 hours**, Madhuri in **2.5 hours**.
    - **Waiting time:** \$ 2.5 - 2 = 0.5 \$ hours (30 minutes).
    - **Who waits:** Madhuri arrives later, so **Ananya waits**.

**Final Answer:**

\boxed{Waiting Time is 30 min and Ananya is waiting.}
{{< /border >}}



## **Multiple Choice Questions (MSQ)**

{{< border type="question" >}}
**Question 1**
If the slope of the parabola $y = a x^{2} + b x + c$ at $(2,3)$ is 5 and the $X$-coordinate of the vertex of the parabola is 3, then which of the following is/are true?
**Options:**

(a) $y = -\frac{5}{2}x^{2} + 15x - 17$

(b) $y = \frac{5}{2}x^{2} + 15x - 17$

(c) $y = -\frac{5}{2}x^{2} + 15x + 17$

(d) $6y = -15x^{2} + 90x - 102$
{{</ border >}}

{{< border >}}
**Solution:**

- **Option (a):** Slope at $x=2$ is $-5(2)+15=5$. Vertex at $x=3$ (matches).
- **Option (b):** Slope at $x=2$ is $5(2)+15=25$ (does not match).
- **Option (c):** $y(2) = 27 \neq 3$ (does not pass through $(2,3)$).
- **Option (d):** Equivalent to option (a).
**Correct options:** (a), (d)
{{</ border >}}

{{< border type="question" >}}

**Question 2**
Two parabolas $y = x^{2} + 3x + 2$ and $y = -x^{2} - 5x - 4$ are intersecting at two points $A$ (not on the $X$-axis) and $B$. Suppose a straight line $\ell_{1}$ passes through $A$ with slope equal to the slope of the parabola $y = -x^{2} - 5x - 4$ at point $A$ and two straight lines $\ell_{2}$ and $\ell_{3}$ pass through $B$ with slopes equal to the slopes of the parabolas $y = x^{2} + 3x + 2$ and $y = -x^{2} - 5x - 4$ at point $B$, respectively. Which of the following is/are true?
**Options:**

(a) $\ell_{1}$ and $\ell_{2}$ are parallel.

(b) $\ell_{1}$ and $\ell_{3}$ are parallel.

(c) $\ell_{1}$ and $\ell_{3}$ are intersecting at point $(-2,3)$.

(d) $\ell_{2}$ and $\ell_{3}$ are intersecting at point $(-1,0)$.
{{</ border >}}

{{< border >}}
**Solution:**

- **Intersection points:** $(-3,2)$ and $(-1,0)$.
- **Slopes:**
    - At $A(-3,2)$: slope of $y = -x^{2} - 5x - 4$ is $1$.
    - At $B(-1,0)$: slope of $y = x^{2} + 3x + 2$ is $1$; slope of $y = -x^{2} - 5x - 4$ is $-3$.
- **Equations:**
    - $\ell_{1}$: $y = x + 5$
    - $\ell_{2}$: $y = x + 1$
    - $\ell_{3}$: $y = -3x - 3$
- **Analysis:**
    - $\ell_{1}$ and $\ell_{2}$ are parallel (both have slope $1$).
    - $\ell_{1}$ and $\ell_{3}$ intersect at $(-2,3)$.
    - $\ell_{2}$ and $\ell_{3}$ intersect at $(-1,0)$.
**Correct options:** (a), (c), (d)
{{</ border >}}


## **Numerical Answer Type (NAT)**

{{< border type="question" >}}

**Question 3**
Suppose $f(x) = a x^{2} + b x + c$, where $a, b, c \in \mathbb{Z} \setminus \{0\}$. The sum and product of roots of $f(x)$ are $\frac{-7}{4}$ and $\frac{-1}{2}$ respectively. Find the value of $2a + 4b + 2c$.
{{</ border >}}

{{< border >}}
**Solution:**

- **Equation:** $4x^{2} + 7x - 2 = 0$
- **Coefficients:** $a=4$, $b=7$, $c=-2$
- **Calculation:** $2a + 4b + 2c = 8 + 28 - 4 = 32$
**Answer:** $32$
{{</ border >}}

{{< border type="question" >}}
**Question 4**
A class of 140 students are arranged in rows such that the number of students in a row is one less than thrice the number of rows. Find the number of students in each row.
{{</ border >}}

{{< border >}}
**Solution:**

- **Let rows = $p$:** $p(3p - 1) = 140$
- **Solve:** $p=7$
- **Students per row:** $3(7) - 1 = 20$
**Answer:** $20$
{{</ border >}}


## **Comprehension Type Questions**

The daily production cost (in lakh ₹) of manufacturing an electric device is $p(x) = 7400 - 60x + 15x^{2}$, where $x$ is the number of electric devices produced per day. The daily transportation cost (in lakh ₹) of $x$ devices is given by the slope of $p(x)$ at point $x$.

{{< border type="question" >}}
**Question 5**
How many electric devices should be produced per day to yield minimum production cost?
{{</ border >}}

{{< border >}}
**Solution:**

- **Minimum at $x = 2$**
**Answer:** $2$
{{</ border >}}

{{< border type="question" >}}
**Question 6**
If the transportation cost on a day is 30 (in lakh ₹), find the number of devices transported.
{{</ border >}}

{{< border >}}
**Solution:**

- **Slope:** $30x - 60 = 30 \implies x = 3$
**Answer:** $3$
{{</ border >}}

{{< border type="question" >}}
**Question 7**
If the production cost on a day is 7475 (in lakh ₹), find the number of devices produced.
{{</ border >}}

{{< border >}}
**Solution:**

- **Solve:** $x=5$ (only positive solution)
**Answer:** $5$
{{</ border >}}

{{< border >}}
**Question 8**
If the slope of parabola $y = a x^{2} + b x + c$ at points $(3,2)$ and $(2,3)$ are 16 and 12 respectively, find $a$.
{{</ border >}}

{{< border >}}
**Solution:**

- **Solve:** $6a + b = 16$, $4a + b = 12$
- **Subtract:** $2a = 4 \implies a = 2$
**Answer:** $2$
{{</ border >}}

{{< border >}}
**Question 9**
The product of two consecutive odd natural numbers is 143. Find the largest number among them.
{{</ border >}}

{{< border >}}
**Solution:**

- **Numbers:** $11, 13$
**Answer:** $13$
{{</ border >}}

{{< border >}}
**Question 10**
The slope of a parabola $y = 3x^{2} - 11x + 10$ at a point $P$ is 7. Find the $y$-coordinate of $P$.
{{</ border >}}

{{< border >}}
**Solution:**

- **Slope:** $6x - 11 = 7 \implies x = 3$
- **$y(3) = 4$**
**Answer:** $4$
{{</ border >}}


## **Additional Questions (from later sections of the PDF)**

{{< border type="conclusion" >}}
**Question 11**
Find out the points where the curve $y = 4x^{2} + x$ and the straight line $y = 2x - 3$ intersect with each other.
**Solution:**

- **No real intersection points.**
**Answer:** The curve and the straight line do not intersect.
{{</ border >}}

{{< border type="conclusion">}}
**Question 12**
Let $a$ and $b$ be two consecutive positive odd natural numbers such that $a^{2} + b^{2} = 394$. Find the value of $a + b$.
**Solution:**

- **Numbers:** $13, 15$
- **Sum:** $28$
**Answer:** $28$
{{</ border >}}

{{< border type="conclusion" >}}
**Question 13**
A class of 352 students are arranged in rows such that the number of students in a row is one less than thrice the number of rows. Find the number of students in each row.
**Solution:**

- **Let rows = $x$:** $x(3x - 1) = 352$
- **Solve:** $x=11$
- **Students per row:** $3(11) - 1 = 32$
**Answer:** $32$
{{</ border >}}

{{< border type="conclusion" >}}
**Question 14**
In order to cover a fixed distance of 48 km, two vehicles start from the same place. The faster one takes 2 hrs less and has a speed 4 km/hr more than the slower one.
(a) What is the speed (in km/hr) of the slower vehicle?
**Solution:**

- **Speed:** $x = 8$ km/hr
**Answer:** $8$

(b) What is the time (in hrs) taken by the faster one?
**Solution:**

- **Time:** $48 / 12 = 4$ hrs
**Answer:** $4$
{{</ border >}}

{{< border type="conclusion" >}}
**Question 15**
The maximum value of a quadratic function $f$ is $-3$, its axis of symmetry is $x=2$, and the value at $x=0$ is $-9$. What will be the coefficient of $x^{2}$ in the expression of $f$?
**Solution:**

- **Coefficient:** $-1.5$
**Answer:** $-1.5$
{{</ border >}}

{{< border type="conclusion" >}}
**Question 16**
A ball is thrown from 3 m off the ground and reaches a maximum height of 5 m. It returns to 3 m after 2 seconds. Let $h(t) = a t^{2} + b t + c$ be the height function. What is the value of $a$?
**Solution:**

- **Using points:** $(0,3)$, $(1,5)$, $(2,3)$
- **Solve:** $a = -2$
**Answer:** $-2$
{{</ border >}}

{{< border type="conclusion" >}}
**Question 17**
The product of two consecutive odd natural numbers is 255. Find the largest number among them.
**Solution:**

- **Numbers:** $15, 17$
**Answer:** $17$
{{</ border >}}

{{< border type="conclusion" >}}
**Question 18**
The slope of a parabola $y = 3x^{2} - 11x + 10$ at a point $P$ is 1. Find the $y$-coordinate of $P$.
**Solution:**

- **Slope:** $6x - 11 = 1 \implies x = 2$
- **$y(2) = 0$**
**Answer:** $0$
{{</ border >}}

{{< border type="conclusion" >}}
**Question 19**
A ball is thrown. The height function is $h(t) = -0.5 t^{2} + 4 t + 1$. What is the time taken to reach maximum height?
**Solution:**

- **Time:** $t = 4$
**Answer:** $4$
{{</ border >}}

{{< border type="conclusion" >}}
**Question 20**
What is the maximum height attained?
**Solution:**

- **Height:** $h(4) = 9$
**Answer:** $9$
{{</ border >}}


## **Summary Table**

| Q | Description | Solution/Answer |
| :-- | :-- | :-- |
| 1 | Parabola slope/vertex | (a), (d) |
| 2 | Parabola intersections, lines | (a), (c), (d) |
| 3 | Quadratic roots, sum/product | 32 |
| 4 | Students in rows | 20 |
| 5 | Minimum production cost | 2 |
| 6 | Transportation cost | 3 |
| 7 | Production cost | 5 |
| 8 | Parabola slope at points | 2 |
| 9 | Product of odd numbers | 13 |
| 10 | Parabola slope, y-coord | 4 |
| 11 | Curve-line intersection | No intersection |
| 12 | Sum of consecutive odds | 28 |
| 13 | Students in rows (352) | 32 |
| 14a | Slower vehicle speed | 8 km/hr |
| 14b | Faster vehicle time | 4 hrs |
| 15 | Quadratic coefficient | -1.5 |
| 16 | Ball height, a value | -2 |
| 17 | Product of odd numbers (255) | 17 |
| 18 | Parabola slope, y-coord | 0 |
| 19 | Ball max height time | 4 |
| 20 | Ball max height | 9 |


---

This covers all questions and solutions from the **Week-3.pdf** file[^1].

<div style="text-align: center">⁂</div>

[^1]: Week-3.pdf

[^2]: https://www.scribd.com/document/741997765/Mathematics-for-Data-Science-2-Week-3-GA

[^3]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/mathematics-for-data-science/week-3-week-3-graded-assignment/48793181

[^4]: https://progiez.com/python-for-data-science-nptel-week-3-assignment-answers

[^5]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/mathematics-for-data-science/week-3-practice-assignment-solution/48793187

[^6]: https://github.com/Rabbia-Hassan/Mathematics-for-Machine-Learning-and-Data-Science-Specialization-by-DeepLearning.AI/blob/master/C3 - Probability \& Statistics for Machine Learning \& Data Science/Week3/Week 3 - Summative Quiz.pdf

[^7]: https://www.scribd.com/document/648257824/Week-3-Describing-numerical-data

[^8]: https://gradedassignments.github.io/iit-madras-graded-assignments/

[^9]: https://github.com/greyhatguy007/Mathematics-for-Machine-Learning-and-Data-Science-Specialization-Coursera

[^10]: https://iitmdatascience.com/notes.html

[^11]: https://study.iitm.ac.in/ds/course_pages/BSMA1003.html

