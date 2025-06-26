---
title: Week 9 Practice Assignment 
weight: 9
categories:
- Mathematics Practice Assignment
---

---

## **Multiple Select Questions (MSQ) and Matching**

### **Question 1: Matching Function, Area, and Graph**

**Question:**
Match the given functions in Column A with the (signed) area between its graph and the interval $[-1,1]$ on the X-axis in Column B and the pictures of their graphs and the highlighted region corresponding to the area computation in Column C.


| Functions (Column A) | Area under the curve (Column B) | Graphs (Column C) |
| :-- | :-- | :-- |
| i) \$ f(x) = 5x - 1 \$ | a) $\pi/2$ | 1) |
| ii) \$ f(x) = x^3 \$ | b) 0 | 2) |
| iii) \$ f(x) = \frac{1}{x^2 + 1} \$ | c) -2 | 3) |

**Options:**

1. i) → c) → 3)
2. ii) → a) → 1)
3. ii) → b) → 1)
4. iii) → a) → 2)
5. iii) → c) → 2)
6. i) → b) → 1)

**Solution:**

- **i) \$ f(x) = 5x - 1 \$:**
    - Integral over $[-1,1]$: $\int_{-1}^1 (5x-1)dx = \left[\frac{5}{2}x^2 - x\right]_{-1}^1 = (2.5 - 1) - (2.5 + 1) = 1.5 - 3.5 = -2$
    - **Match:** i) → c) → (area -2, graph 3)
- **ii) \$ f(x) = x^3 \$:**
    - Integral over $[-1,1]$: $\int_{-1}^1 x^3 dx = 0$ (odd function)
    - **Match:** ii) → b) → (area 0, graph 1)
- **iii) \$ f(x) = \frac{1}{x^2 + 1} \$:**
    - Integral over $[-1,1]$: $\int_{-1}^1 \frac{1}{x^2 + 1}dx = 2\arctan(1) = \pi/2$
    - **Match:** iii) → a) → (area $\pi/2$, graph 2)

**Correct Options:**

- **i) → c) → 3)**
- **ii) → b) → 1)**
- **iii) → a) → 2)**

---

### **Question 2: Integration by Parts**

**Question:**
Suppose $\int x \ln(1+x)dx = f(x)\ln(x + 1) + Ax + B$, where $B$ is the constant of integration. Which of the following are correct?

1. $f(x) = x^2-1$
2. $f(x) = x^2-1$
3. $A = 1/4$
4. $A = -1/4$

**Solution:**
By integration by parts,

$$
f(x) = \frac{x^2-1}{2}
$$

But in the PDF, it is given as $f(x) = x^2-1$ and $A = -1/4$.
**This appears to be a typo or error in the PDF.**
**However, as per the PDF solution:**

- **Option 1 and 2:** Both claim $f(x) = x^2-1$ (likely, only one should be marked)
- **Option 4:** $A = -1/4$

**Correction:**
The correct answer by standard integration by parts is:

$$
\int x \ln(1+x)dx = \left(\frac{x^2-1}{2}\right)\ln(1+x) - \frac{x^2}{4} + \frac{x}{2} + C
$$

But **as per PDF:**

- **$f(x) = x^2-1$ (likely typo, should be $\frac{x^2-1}{2}$)**
- **$A = -1/4$**

**Mark as per PDF:**

- **Option 1 or 2:** $f(x) = x^2-1$ (only one should be marked, likely a duplicate)
- **Option 4:** $A = -1/4$

---

### **Question 3: Critical Points and Extrema**

**Question:**
Consider the function $f(x) = x^3 – 6x$. Which of the following options are correct?

1. $f$ has neither local maxima nor local minima.
2. $\sqrt{2}$ is a local minimum.
3. $\sqrt{2}$ is a local maximum.
4. $-\sqrt{2}$ is a local maximum.
5. $-\sqrt{2}$ is a local minimum.
6. $f$ has two critical points.

**Solution:**

- **Critical points:** $f'(x) = 3x^2 - 6 = 0 \implies x = \pm\sqrt{2}$
- **Second derivative:** $f''(x) = 6x$
    - At $x = \sqrt{2}$, $f''(\sqrt{2}) > 0$: **local minimum**
    - At $x = -\sqrt{2}$, $f''(-\sqrt{2}) < 0$: **local maximum**
- **Number of critical points:** 2

**Correct Options:**

- **2. $\sqrt{2}$ is a local minimum.**
- **4. $-\sqrt{2}$ is a local maximum.**
- **6. $f$ has two critical points.**

---

### **Question 4: Riemann Sums**

**Question:**
Choose the set of correct options.

1. The left Riemann sum of the function $f(x) = x + 5$ on the interval $[^1][^10]$ divided into three sub-intervals of equal length is 81.
2. The middle Riemann sum of the function $f(x) = x^2$ on the interval $[^8]$ divided into four sub-intervals of equal length is 168.
3. The left Riemann sum of the function $f(x) = x + 5$ on the interval $[^3][^6]$ divided into $n$ sub-intervals of equal length is $57/2$, as $n$ tends to $\infty$.
4. The right Riemann sum of the function $f(x) = 1/x$ on the interval $[^1][^9]$ divided into four sub-intervals of equal length is $496/315$.

**Solution:**

- **Option 1:**
    - Partition: $\{1,4,7,10\}$
    - Left sum: $3(f(1) + f(4) + f(7)) = 3(6 + 9 + 12) = 81$ **✓**
- **Option 2:**
    - Partition: $\{0,2,4,6,8\}$
    - Middle sum: $2(f(1) + f(3) + f(5) + f(7)) = 2(1 + 9 + 25 + 49) = 168$ **✓**
- **Option 3:**
    - As $n \to \infty$, left Riemann sum $\to$ integral: $\int_3^6 (x+5)dx = \frac{57}{2}$ **✓**
- **Option 4:**
    - Partition: $\{1,3,5,7,9\}$
    - Right sum: $2(f(3) + f(5) + f(7) + f(9)) = 2(1/3 + 1/5 + 1/7 + 1/9) = 496/315$ **✓**

**All options are correct.**

---

## **Numerical Answer Type (NAT)**

### **Question 5**

**Question:**
The value of $\int \sin \sqrt{x} \, dx$ is

**Solution:**
Let $t = \sqrt{x} \implies dx = 2t dt$

$$
\int \sin t \cdot 2t dt = 2\int t \sin t dt = 2[-t\cos t + \sin t] + C
$$

For definite integral (limits not specified in question, but in solution: $0$ to $\pi^2/4$):

$$
2\left[-t\cos t + \sin t\right]_0^{\pi/2} = 2(1) = 2
$$

**Answer:** **2**

---

### **Question 6**

**Question:**
Suppose $x + y = 16$. What is the value of $xy$ when $x^3 + y^3$ is minimum?

**Solution:**
Let $y = 16 - x$

$$
x^3 + y^3 = x^3 + (16-x)^3 = 4096 - 768x + 48x^2
$$

Derivative: $f'(x) = -768 + 96x = 0 \implies x = 8$
Second derivative: $f''(x) = 96 > 0$ (minimum)
Thus, $x = 8$, $y = 8$, and $xy = 64$
**Answer:** **64**

---

### **Question 7**

**Question:**
A wire of length 31 is cut into two pieces. One part is bent into a circle and the other into a square. Let $x$ be the minimum value of the combined area of the circle and the square. Then the value of $4x(\pi + 4)$ is

**Solution:**
Let wire for circle be $y$, for square $31 - y$.

$$
A = \pi r^2 + a^2 = \pi\left(\frac{y}{2\pi}\right)^2 + \left(\frac{31-y}{4}\right)^2
$$

Minimize $A$:

$$
y = \frac{31\pi}{4 + \pi}
$$

$$
x = \text{min area} = \frac{31^2}{4(4 + \pi)}
$$

$$
4x(\pi + 4) = 31^2 = 961
$$

**Answer:** **961**

---

## **Comprehension Type Question (8–10)**

A car manufacturer determines that in order to sell $x$ number of cars, the price per car (in lakh) must be $f(x) = 1000 - x$, if $x \leq 800$, and the manufacturer also determines that the total cost (in lakh) of producing $x$ number of cars is

$$
g(x) = 
\begin{cases}
30000 + 300x & \text{if } x \leq 400 \\
100x + 110000 & \text{if } 400 < x \leq 800
\end{cases}
$$

Assume $x$ is continuous in \$\$.

---

### **Question 8**

**Question:**
Suppose the company can produce a maximum of 400 cars due to a production issue. The number of cars the company should produce and sell in order to maximize profit is

**Solution:**
For $x \leq 400$:

$$
P(x) = x(1000 - x) - (30000 + 300x) = -x^2 + 700x - 30000
$$

Maximize: $P'(x) = -2x + 700 = 0 \implies x = 350$
Second derivative: $P''(x) = -2 < 0$ (maximum)
**Answer:** **350**

---

### **Question 9**

**Question:**
Suppose the company can produce a minimum of 401 cars and a maximum of 800 cars due to a production issue. The number of cars the company should produce and sell in order to maximize profit is

**Solution:**
For $400 < x \leq 800$:

$$
P(x) = x(1000 - x) - (100x + 110000) = -x^2 + 900x - 110000
$$

Maximize: $P'(x) = -2x + 900 = 0 \implies x = 450$
Second derivative: $P''(x) = -2 < 0$ (maximum)
**Answer:** **450**

---

### **Question 10**

**Question:**
Let $P(x)$ denote the function representing the profit of the company. Choose the set of correct statements.

1. $P(x)$ is continuous in the interval \$\$
2. The function $P(x)$ has two local maxima in the interval \$\$.
3. All the global maxima of $P(x)$ lie in the interval \$\$.
4. All the global maxima of $P(x)$ lie in the interval \$\$.

**Solution:**

- **Continuity:**
    - At $x = 400$:
        - LHL: $P(400^-) = 90000$
        - RHL: $P(400^+) = 90000$
        - Thus, $P(x)$ is continuous on $$
- **Local maxima:**  
- At $x = 350$ and $x = 450$
- **Global maxima:**  
- $P(350) = 92500$, $P(450) = 92500$, both are global maxima
- Both are in
$$

**Correct Options:**

- **1. $P(x)$ is continuous in the interval \$\$**
- **2. The function $P(x)$ has two local maxima in the interval \$\$.**
- **4. All the global maxima of $P(x)$ lie in the interval \$\$.**

---

## **Summary Table**

| Question | Type | Question Summary | Solution/Answer |
| :-- | :-- | :-- | :-- |
| 1 | Matching | Match function, area, graph | i→c→3, ii→b→1, iii→a→2 |
| 2 | MSQ | Integration by parts | $f(x)=x^2-1$ (typo), $A=-1/4$ |
| 3 | MSQ | Critical points, extrema | √2 min, -√2 max, 2 critical pts |
| 4 | MSQ | Riemann sums | All correct |
| 5 | NAT | $\int \sin\sqrt{x}dx$ | 2 |
| 6 | NAT | Min $x^3+y^3$ given $x+y=16$ | xy = 64 |
| 7 | NAT | Min area circle+square, wire cut | $4x(\pi+4)=961$ |
| 8 | Comp. | Max profit, max 400 cars | 350 |
| 9 | Comp. | Max profit, min 401 cars | 450 |
| 10 | Comp. | Profit function properties | 1, 2, 4 correct |


---

**All questions and solutions from the PDF have been extracted above.**[^1]

<div style="text-align: center">⁂</div>

[^1]: Week-9-Practice-Assignment-Solution.pdf

[^2]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/iitm-online-degree-data-science-and-programming/week-9-maths-graded/112219708

[^3]: https://www.youtube.com/watch?v=MYfmxVWZlwA

[^4]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/computational-thinking/ct-week-9-ga-ct-week-9-graded-assignment/119481131

[^5]: https://gradedassignments.github.io/maths-week-9-graded-assignments-iit-madras/

[^6]: https://archive.nptel.ac.in/content/storage2/courses/downloads_new/112104212/Assignment%209%20Solution.pdf

[^7]: https://www.scribd.com/document/659302356/Week-9-Assignment-Solution

[^8]: https://www.scribd.com/document/557784694/Week-9-Assignment-Solutions

[^9]: https://iitmbsdegreehelp.pages.dev/solutions/foundational/maths1/week-9/

[^10]: https://archive.nptel.ac.in/content/storage2/courses/downloads_new/110105083/noc19_mg54_assignment_Week_9.pdf

[^11]: https://www.youtube.com/watch?v=dWrFvxNgOU0

