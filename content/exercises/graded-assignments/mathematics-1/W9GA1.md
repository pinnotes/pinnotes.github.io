---
title: Mathematics Week 9 Graded Assignment
weight: 9
tags: 
- mathematics
categories:
- Mathematics Graded Assignment
series:
- Mathematics Graded Assignment
excludeSearch: false
width: wide
---

<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# extract all questions and solutions from this pdf

Here are all the questions and solutions extracted from the **Week-9.pdf** file for the "MATHEMATICS FOR DATA SCIENCE-1" assignment[^1].

---

## 1. Match Functions with Graphs and Area

**Question:**
Match the given functions with their graphs and the area under the curve over $[-1,1]$:


| Function | Graph | Area under curve $[-1,1]$ |
| :-- | :-- | :-- |
| (i) $f(x) = x$ | (b) | $\int_{-1}^{1} x\,dx = 0$ |
| (ii) \$f(x) = | x | \$ |
| (iii) $f(x) = x^2$ | (a) | $\int_{-1}^{1} x^2\,dx = \frac{2}{3}$ |

**Solution:**

- **(i) $\rightarrow$ (b) $\rightarrow$ (3)** (Note: The “3” here is likely a typo or mislabel; area is 0, not “3”. The correct area solution is as above.)
    - **Corrected:** (i) $\rightarrow$ (b) $\rightarrow$ area $= 0$
- **(ii) $\rightarrow$ (c) $\rightarrow$ area $= 1$
- **(iii) $\rightarrow$ (a) $\rightarrow$ area $= \frac{2}{3}$

---

## 2. Curves Enclosing Negative Area

**Question:**
Which of the following curves enclose a negative area on the x-axis in the interval $[^1]$?
Area above the x-axis is positive, below is negative. If the area below the x-axis is more than above, the net area is negative.

**Solution:**
Curve 2 and Curve 4 enclose a negative area.

---

## 3. Cylinder Inscribed in a Circle

**Question:**
A cylinder of radius $x$ and height $2h$ is inscribed in a circle of radius $R$. Find the values of $h$ for maximum volume and maximum surface area.

**Solution:**

- **Volume:**
    - From right triangle: $h^2 + x^2 = R^2$
    - Volume $V = 2\pi x^2 h = 2\pi (R^2 - h^2) h = 2\pi R^2 h - 2\pi h^3$
    - $\frac{dV}{dh} = 2\pi R^2 - 6\pi h^2$
    - $\frac{dV}{dh} = 0 \Rightarrow h^2 = \frac{R^2}{3} \Rightarrow h = \frac{R}{\sqrt{3}}$
    - $\frac{d^2V}{dh^2} = -12\pi h < 0$ $\Rightarrow$ maximum at $h = \frac{R}{\sqrt{3}}$
- **Surface Area:**
    - Surface area $S = 4\pi x h = 4\pi h \sqrt{R^2 - h^2}$
    - $\frac{dS}{dh} = 4\pi \left[\sqrt{R^2 - h^2} - \frac{h^2}{\sqrt{R^2 - h^2}}\right]$
    - $\frac{dS}{dh} = 0 \Rightarrow R^2 - h^2 = h^2 \Rightarrow h^2 = \frac{R^2}{2} \Rightarrow h = \frac{R}{\sqrt{2}}$
    - $\frac{d^2S}{dh^2}\left(\frac{R}{\sqrt{2}}\right) = -20\pi < 0$ $\Rightarrow$ maximum at $h = \frac{R}{\sqrt{2}}$

---

## 4. Minimum Difference of Functions

**Question:**
Given $f_2(x) = x$ and $g_2(x) = e^x$ are increasing functions, find the minimum value of the difference on $[^1]$.

**Solution:**

- **Minimum is at $x = 0$:**
    - $f_2(0) = 0$, $g_2(0) = 1$
    - **Difference:** $1$

---

## 5. Error in Prediction (Area Between Curves)

**Question:**
Compute the error in prediction for company A (difference in area between $f_1(x) = x^3$ and $g_1(x) = \sqrt{x}$) and company B (difference in area between $f_2(x) = x$ and $g_2(x) = e^x$) over $[^1]$.

**Solution:**

- **Company A:**
    - $\left|\int_{0}^{1} (x^3 - \sqrt{x})\,dx\right| = \left|\frac{1}{4} - \frac{2}{3}\right| = \frac{5}{12}$
- **Company B:**
    - $\left|\int_{0}^{1} (x - e^x)\,dx\right| = \left|\frac{1}{2} - (e - 1)\right| = e - \frac{3}{2}$
- **Conclusion:**
    - $e - \frac{3}{2} > \frac{5}{12}$
    - **Error for company B is greater than for company A.**

---

## 6. Critical Points and Extrema

**Question:**
Given $f(x) = x^3 - 3x + 1$, find critical points and classify them.

**Solution:**

- **Derivative:** $f'(x) = 3x^2 - 3$
- **Critical points:** $f'(x) = 0 \Rightarrow x = \pm 1$
- **Second derivative:** $f''(x) = 6x$
    - $f''(1) = 6 > 0$ $\Rightarrow$ local minimum at $x=1$, $f(1) = -1$
    - $f''(-1) = -6 < 0$ $\Rightarrow$ local maximum at $x=-1$

---

## 7. Riemann Sum

**Question:**
Given $f(x) = 2x^2 + \frac{5}{6}$ on $[^6]$, divide into 3 subintervals and compute the Riemann sum using left endpoints.

**Solution:**

- **Subintervals:** $[0,2)$, $[2,4)$, $[4,6)$
- **Left endpoints:** $x = 0, 2, 4$
- **Riemann sum:**
    - $2f(0) + 2f(2) + 2f(4)$
    - $= 2\left[\frac{5}{6} + (8 + \frac{5}{6}) + (32 + \frac{5}{6})\right] = 2[40 + \frac{5}{2}] = 85$

---

## 8. Piecewise Function and Critical Points

**Question:**
Given

$$
f(x) = 
\begin{cases}
-2x + 3, & 0 \leq x \leq 10 \\
x^2, & 10 < x < 20
\end{cases}
$$

find critical points and global minimum.

**Solution:**

- **Derivative:**
    - $f'(x) = -2$ for $0 < x < 10$
    - $f'(x) = 2x$ for $10 < x < 20$
    - **Not differentiable at $x=10$**
- **Critical point:** $x=10$
- **Values:**
    - $f(0) = 3$
    - $f(10) = -17$
    - $f(20) = 400$
- **Global minimum:**
    - **Attained at $x=10$, value $= -17$**

---

## 9. Optimization: Rectangle

**Question:**
Given $x - y = 5$, find the area of rectangle $A = 2xy$ and its minimum.

**Solution:**

- **Express $y$:** $y = x - 5$
- **Area:** $A = 2x(x-5) = 2x^2 - 10x$
- **Derivative:** $A'(x) = 4x - 10$
- **Critical point:** $A'(x) = 0 \Rightarrow x = \frac{5}{2}$
- **Second derivative:** $A''(x) = 4 > 0$ $\Rightarrow$ local minimum
- **Minimum value:**
    - $A\left(\frac{5}{2}\right) = 2\left(\frac{25}{4}\right) - 10\left(\frac{5}{2}\right) = \frac{25}{2} - 25 = -\frac{25}{2}$

---

These are all the questions and solutions from the Week-9.pdf file[^1].

<div style="text-align: center">⁂</div>

[^1]: Week-9.pdf

[^2]: https://www.scribd.com/document/644219398/NPTEL-JAVA-Week-9-Solutions

[^3]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/computational-thinking/ct-week-9-ga-ct-week-9-graded-assignment/119481131

[^4]: https://www.ludlowprimaryschool.co.uk/media/17185/maths-to-read-on-screen-year-3-fluent-in-five-week-9.pdf

[^5]: https://sites.math.washington.edu/~m125/outline9.php

[^6]: https://www.cuemath.com/ncert-solutions/class-9-maths/

[^7]: https://archive.nptel.ac.in/content/storage2/courses/downloads_new/106106133/Week_9_Solution.pdf

[^8]: https://archive.nptel.ac.in/content/storage2/courses/downloads_new/110105083/noc19_mg54_assignment_Week_9.pdf

[^9]: https://www.scribd.com/document/429482395/Week-9-pdf

[^10]: https://gradedassignments.github.io/maths-week-9-graded-assignments-iit-madras/

[^11]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/statistics-for-data-science/week-9-graded-solution/72968122

