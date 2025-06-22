---
title: Mathematics Week 4 Graded Assignment
weight: 4
label: Week 4
keywords:
- Mathematics for Data Science 1
categories:
- Mathematics Graded Assignment
---

---

## Multiple Select Question (MSQ)

{{< border  type="question" >}}
**1. Consider the line $\left(L_{x}\right)$ and parabola $\left(P_{x}\right)$ as shown in below figure.**

**Which among the following represents the graph of $\frac{P_{x}}{L_{x}}$ ?**

**Answer:** Option b
{{</ border >}}

{{< border >}}
**Solution:**

The equation of $L_{x}$ from the graph is $f(x)=3x-9$.

The equation of $P_{x}$ from the graph is $f(x)=3x^{2}-18x+27$.

$$
\frac{P_{x}}{L_{x}}=\frac{3x^{2}-18x+27}{3x-9}=\frac{x^{2}-6x+9}{x-3}=\frac{(x-3)^{2}}{x-3}=x-3
$$

Therefore, the graph of $y=x-3$ is option 2.
{{</ border >}}

{{< border  type="question" >}}
**2. Consider $f(x)=x^{3}-4x^{2}-17x+60$ and $g(x)=x^{3}+5x^{2}-8x-12$, whose one of the roots are given in the set $\{3,2,-3,-2\}$. Choose the set of correct options regarding $f(x)$ and $g(x)$.**

**Answer:** Option b
{{</ border >}}

{{< border >}}
**Solution:**

From the given set, $x=3$ is one of the root of $f(x)$, since $f(3)=0$. To find the other roots:

$$
\frac{x^{3}-4x^{2}-17x+60}{x-3}=x^{2}-x-20 \Rightarrow x=-4,5
$$

So, option a is incorrect.

From the given set, $x=2$ is one of the root of $g(x)$, since $g(2)=0$. To find the other roots:

$$
\frac{x^{3}+5x^{2}-8x-12}{x-2}=x^{2}+7x+6 \Rightarrow x=-6,-1
$$

So, option b is correct.

$$
f(x)=(x-3)(x+4)(x-5)
$$

$$
f(x)\text{ is positive when }x\in(-4,3)\cup(5,\infty)
$$

Thus, option d is incorrect.

$$
g(x)\text{ is negative when }x\in(-\infty,-6)\cup(-1,-2)
$$

So, option c and e are incorrect.
{{</ border >}}

## Numerical Answer Type (NAT)

{{< border  type="question" >}}
**3. Consider a rectangular box whose length is $x$, height is 3 units less than length, and breadth is 5 units more than height. If the volume of the rectangular box is 24 unit$^{3}$, then choose the correct value of $x$ from the given options.**

**Answer:** Option b (which is 4, as seen from the solution)
{{</ border >}}

{{< border >}}
**Solution:**

Let the length of rectangular box be $x$, then the height is $h=x-3$ and breadth is $b=h+5=x-3+5=x+2$.

The volume of rectangular box is:

$$
V=x(x-3)(x+2)=x^{3}-x^{2}-6x
$$

Given that volume is 24:

$$
x^{3}-x^{2}-6x=24
$$

From the given options, option b (which is 4) satisfies the equation.
{{</ border >}}

## Multiple Select Question (MSQ)

{{< border  type="question" >}}
**4. Consider a polynomial function $f(x)$ of degree 4 which intersects the X-axis at $x=2, x=-3$ and $x=-4$. Moreover, $f(x)<0$ when $x\in(1,2)$, and $f(x)>0$ when $x\in(-1,1)$. Find out the equation of the polynomial.**

**Answer:** Option b

$$
a(x^{4}+4x^{3}-7x^{2}-22x+24), a>0
$$
{{</ border >}}

{{< border >}}
**Solution:**

Given that $f(x)$ has degree 4 and intersects the X-axis at $x=2, x=-3, x=-4$. Also, $f(x)<0$ when $x\in(1,2)$, and $f(x)>0$ when $x\in(-1,1)$. This means when $x=1, f(x)=0$.

Hence, the equation of $f(x)$ is:

$$
f(x)=a(x-2)(x+3)(x+4)(x-1), a>0
$$

$$
=a(x^{4}+4x^{3}-7x^{2}-22x+24)
$$

Hence, option b is correct.
{{</ border >}}

{{< border  type="question" >}}
**5. Consider a polynomial function $f(x)=\frac{-1}{300}(x-2)^{2}(x-3)(x+1)^{2}(x+4)(x-5)$. Choose the correct set of options.**

**Answer:** Option b, c, d and e
{{</ border >}}

{{< border >}}
**Solution:**

From the above graph,

- $f(x)$ has exactly 6 turning points. So, option b is correct.
- In the interval $x\in(3,5), f(x)$ is increasing first and then decreasing. So, option d is correct.
- The function $f(x)$ is negative when $x\in(-1,2)$. So, option e is correct.

Also, if we replace $x$ by $-x$ in $f(x)$, then $f(-x) \neq -f(x)$ or $f(-x) \neq f(x)$. So, $f(x)$ is neither even nor odd function.
{{</ border >}}

{{< border  type="question" >}}
**6. Consider a polynomial function $P(x)=(x^{4}+4x^{3}+x+10)$ and $Q(x)=(x^{3}+2x^{2}-6)$. If $M(x)$ is the equation of the straight line passing through $(2, Q(2))$ and having slope 3, then find out the equation of $P(x)+M(x)Q(x)$.**

**Answer:** Option A

$$
4x^{4}+14x^{3}+8x^{2}-17x-14
$$
{{</ border >}}

{{< border >}}
**Solution:**

$M(x)$ is the equation of the straight line passing through $(2, Q(2))=(2,10)$ and having slope 3.

$$
M(x)=3x+4
$$

$$
P(x)+M(x)Q(x)=(x^{4}+4x^{3}+x+10)+(3x+4)(x^{3}+2x^{2}-6)
$$

$$
=(x^{4}+4x^{3}+x+10)+(3x^{4}+6x^{3}-18x+4x^{3}+8x^{2}-24)
$$

$$
=4x^{4}+14x^{3}+8x^{2}-17x-14
$$

Thus, option A is correct.
{{</ border >}}


## Numerical Answer Type (NAT)

{{< border  type="question" >}}
**7. A function $f(x)$ which is the best fit for the data given in the Table-1 recorded by a student, is**

$$
f(x)=-(x-1)^{2}(x-3)(x-5)(x-7)+c
$$

**What will be the value of $c$, so that SSE (Sum Squared Error) will be minimum?**

**Answer:** 3.4
{{</ border >}}

{{< border >}}
**Solution:**


| $x_i$ | $y_i$ | $f(x_i)$ | $(y_i - f(x_i))^2$ |
| :-- | :-- | :-- | :-- |
| 1 | 4 | $c$ | $(4-c)^2$ |
| 2 | 18 | $15+c$ | $(3-c)^2$ |
| 3 | 4 | $c$ | $(4-c)^2$ |
| 4 | -24 | $-27+c$ | $(3-c)^2$ |
| 5 | 3 | $c$ | $(3-c)^2$ |

SSE is:

$$
\sum_{i=1}^{5}(y_i - f(x_i))^2 = 3(3-c)^2 + 2(4-c)^2
$$

$$
=3(9-6c+c^2) + 2(16-8c+c^2) = 27-18c+3c^2 + 32-16c+2c^2
$$

$$
=5c^2-34c+59
$$

SSE is minimized at:

$$
c=\frac{34}{10}=3.4
$$
{{</ border >}}

{{< border  type="question" >}}
**8. An ant named $B$, wants to climb an uneven cliff and reach its anthill (i.e., home of ant). On its way home, $B$ makes sure that it collects some food. A group of ants have reached the food locations which are at $x$-intercepts of the function $f(x)=(x^{2}-19)((x-9)^{3}-1)$. As ants secrete pheromones (a form of signals which other ants can detect and reach the food location), $B$ gets to know the food location. Then the sum of the $x$-coordinates of all the food locations is**

**Answer:** 10
{{</ border >}}

{{< border >}}
**Solution:**

$$
f(x)=(x^{2}-19)((x-9)^{3}-1)=0
$$

$$
x^{2}-19=0 \Rightarrow x=\sqrt{19}, -\sqrt{19}
$$

$$
(x-9)^{3}-1=0 \Rightarrow x=10
$$

Sum of roots: $\sqrt{19} - \sqrt{19} + 10 = 10$.
{{</ border >}}

{{< border  type="question" >}}
**9. The Ministry of Road Transport and Highways wants to connect three aspirational districts with two roads $r_1$ and $r_2$. Two roads are connected if they intersect. The shape of the two roads $r_1$ and $r_2$ follows polynomial curve $f(x)=(x-19)(x-17)^2$ and $g(x)=-(x-19)(x-17)$ respectively. What will be the $x$-coordinate of the third aspirational district, if the first two are at $x$-intercepts of $f(x)$ and $g(x)$.**

**Answer:** 16
{{</ border >}}

{{< border >}}
**Solution:**

Find $x$ such that $f(x)=g(x)$:

$$
(x-19)(x-17)^2=-(x-19)(x-17)
$$

$$
(x-19)(x-17)^2 + (x-19)(x-17) = 0
$$

$$
(x-19)(x-17)(x-17+1) = 0
$$

$$
(x-19)(x-17)(x-16) = 0
$$

$$
x=19,17,16
$$

Hence, the third aspirational district is at $x=16$.
{{</ border >}}

{{< border type="question" >}}
**10. Let $r(x)$ be a polynomial function which is obtained as the quotient after dividing the polynomial $p(x)=(x+5)(x-3)(x^2-4)$ by the polynomial $q(x)=(x-2)(2+x)$. Choose the correct option which represents the polynomial $r(x)$ most appropriately.**

**Answer:** Option 1
{{</ border >}}

{{< border >}}
**Solution:**

$$
\frac{p(x)}{q(x)}=\frac{(x+5)(x-3)(x^2-4)}{(x-2)(2+x)}=\frac{(x+5)(x-3)(x+2)(x-2)}{(x-2)(2+x)}=(x+5)(x-3)
$$

Therefore, $r(x)=(x+5)(x-3)$. Option 1 is correct.
{{</ border >}}


This covers all questions and solutions from the PDF[^1].

<div style="text-align: center">⁂</div>

[^1]: Maths-1-Week-4.pdf

[^2]: https://gradedassignments.github.io/maths-week-4-graded-assignments-iit-madras/

[^3]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/calculus-1/maths-1-week-4-ga-ace-grade/73772896

[^4]: https://www.scribd.com/document/747643204/Maths-Week-4

[^5]: https://davkurukshetra.edu.in/File/99/NoticeBoard_b38a8cd7-ab33-4aa0-9896-4ab819388e57_cbse%20XII%20sample%20papers.pdf

[^6]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/computational-thinking/w4-practice-solution-week-4-practical-assignment/48793096

[^7]: https://ncert.nic.in/pdf/Bridge_Programme/Grade8/Bridge_Programme-English_Grade-8.pdf

[^8]: https://byjus.com/ncert-solutions-class-10-english/first-flight-chapter-4/

[^9]: https://www.scribd.com/document/769561993/Q1-LE-Mathematics-7-Lesson-4-Week-4

[^10]: https://wcedonline.westerncape.gov.za/documents/ExamPapers\&Memos/Mind the Gap/non languages/MTG Maths Lit ENG.pdf

[^11]: https://www.vedantu.com/content-files-downloadable/previous-year-question-paper/cbse-class-12-english-core-question-paper-set-1-1-5-1-2024.pdf

