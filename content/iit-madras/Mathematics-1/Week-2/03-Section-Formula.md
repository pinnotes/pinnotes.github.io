---
title: Section formula
date: 2025-08-09
weight: 20
image: https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/internal-section-formula-1649815848.png
emoji: 🧮
slug: "Section formula"
linkTitle: Section formula
series_order: 20
---

A well-defined collection of distinct objects called elements or members.

{{< youtube B5yv8zPrkek >}}

https://youtu.be/B5yv8zPrkek


<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

### 1. Finding the Ratio in Which a Point Divides a Line Segment

Suppose you have points \$ A(x_1, y_1) \$ and \$ B(x_2, y_2) \$, and a third point \$ P(x, y) \$ somewhere between them (or on the extension), and you want to know **the ratio \$ m:n \$ in which \$ P \$ divides \$ AB \$**.

The formula relates the coordinates and the ratio:

$$
x = \frac{mx_2 + nx_1}{m + n},\qquad y = \frac{m y_2 + n y_1}{m + n}
$$

If the coordinates of \$ P \$ are known, set up the equations and solve for \$ m:n \$ using either the x-coordinate or y-coordinate equations (or both for consistency).

**Example:**
Points $A(2, 1)$, $B(7, 6)$. $P(5, 4)$ divides $AB$ in what ratio?

$$
x = \frac{m x_2 + n x_1}{m+n} = 5 
\implies 5(m+n) = m\cdot 7 + n\cdot 2
\implies 5m + 5n = 7m + 2n
\implies 3n = 2m
\implies \frac{m}{n} = \frac{3}{2}
$$

or ratio \$ m:n = 3:2 \$

**Image Example:**

![alt text](https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/internal-section-formula-1649815848.png)

***

### 2. Deriving the Section Formula

The **section formula** gives the coordinates of the point that divides the segment $AB$ in the ratio $m:n$.

If $A(x_1, y_1)$ and $B(x_2, y_2)$, then the coordinates \$ (x, y) \$ dividing $AB$ in the ratio $m:n$ internally are:

$$
x = \frac{m x_2 + n x_1}{m + n}
$$

$$
y = \frac{m y_2 + n y_1}{m + n}
$$

- $m:n$ is the ratio of segments $AP:PB$.
- If $m = n$, the point is the midpoint.

**Derivation Sketch:**

- The segment $AB$ is imagined as being cut into two segments whose lengths are in the ratio $m:n$.
- The point $P$ divides the distances horizontally and vertically in the same ratio by similarity of triangles.

**Image (with formula):**
![alt text](https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/proof-of-section-formula-1623131757.png)

**For more:**

- ![Cuemath Section Formula Explanation](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAJMdpByUvHmx5RB0u9I8tc9hRHm2vKv-Yw&s)
- [Byju's Section Formula Explanation](https://byjus.com/maths/section-formula/)

***

**Key Points:**

- To find the ratio, set up the formulas for x and y, solve for $m:n$.
- To find the coordinates, plug $m, n, x_1, y_1, x_2, y_2$ into the section formula.
- The images above show graphs with labeled points and segment divisions, making the geometric relationships visible.
<span style="display:none">[^1][^10][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div style="text-align: center">⁂</div>

[^1]: https://byjus.com/maths/section-formula/

[^2]: https://www.cuemath.com/geometry/section-formula/

[^3]: https://brilliant.org/wiki/section-formula/

[^4]: https://www.geeksforgeeks.org/maths/how-to-find-the-ratio-in-which-a-point-divides-a-line/

[^5]: https://www.geeksforgeeks.org/dsa/section-formula-point-divides-line-given-ratio/

[^6]: https://testbook.com/question-answer/what-are-the-coordinates-of-the-point-dividing-the--600674a4fbb1f0e07b49a740

[^7]: https://www.cuemath.com/ncert-solutions/find-the-ratio-in-which-the-line-segment-joining-the-points-3-10-and-6-8-is-divided-by-1-6/

[^8]: https://en.wikipedia.org/wiki/Section_formula

[^9]: https://study.com/skill/learn/finding-a-point-that-partitions-a-segment-in-the-plane-into-a-given-ratio-explanation.html

[^10]: https://www.youtube.com/watch?v=B3yu-LPN5HI


## Exercise Questions 🤯

Good evening! On this Wednesday here in India, I'd be happy to guide you through these coordinate geometry problems. They primarily use two important formulas: the Midpoint Formula and the Section Formula. Let's get started.

{{< border >}}
### **Question 1: The Midpoint Formula**

**The Question:**
The coordinates of the midpoint of points $P(4, -2)$ and $Q(-1, -1)$ are \_\_\_\_\_\_\_\_\_\_.
* (0.5, -0.5)
* (1.5, -1.5)
* (-0.5, -0.5)
* (-0.5, 0.5)

**Core Concept: The Midpoint Formula**

The midpoint is the exact center of a line segment connecting two points. To find it, you simply find the average of the x-coordinates and the average of the y-coordinates.

For two points, $(x_1, y_1)$ and $(x_2, y_2)$, the midpoint $M$ is given by the formula:
$$M = \left( \frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2} \right)$$

**Detailed Solution:**

1.  **Identify the coordinates:**
    * From point $P(4, -2)$, we have $x_1 = 4$ and $y_1 = -2$.
    * From point $Q(-1, -1)$, we have $x_2 = -1$ and $y_2 = -1$.

2.  **Calculate the midpoint's x-coordinate:**
    * $x_{midpoint} = \frac{x_1 + x_2}{2} = \frac{4 + (-1)}{2} = \frac{3}{2} = 1.5$

3.  **Calculate the midpoint's y-coordinate:**
    * $y_{midpoint} = \frac{y_1 + y_2}{2} = \frac{-2 + (-1)}{2} = \frac{-3}{2} = -1.5$

4.  **Combine the coordinates:**
    * The midpoint is $(1.5, -1.5)$.

**Final Answer:** The correct option is **(1.5, -1.5)**.
{{< /border >}}

{{< border >}}
### **Question 2: The Section Formula (Finding the Ratio)**

**The Question:**
The ratio in which the origin cuts the line segment $P(2, 8)$ and $Q(-3, -2)$ in $(m:n)$ form is \_\_\_\_\_\_\_\_\_\_.
* 0
* 1:2
* 3:8
* Origin does not lie on the line segment
* 2:1

**Core Concept: The Section Formula**

This formula finds the coordinates of a point $(x, y)$ that divides the line segment between $(x_1, y_1)$ and $(x_2, y_2)$ into a ratio of $m:n$.

The formula is:
$$(x, y) = \left( \frac{mx_2 + nx_1}{m+n}, \frac{my_2 + ny_1}{m+n} \right)$$

**Detailed Solution:**

1.  **Identify the knowns:**
    * The points are $P(2, 8)$, so $(x_1, y_1) = (2, 8)$.
    * And $Q(-3, -2)$, so $(x_2, y_2) = (-3, -2)$.
    * The point cutting the segment is the origin, so $(x, y) = (0, 0)$.
    * The ratio $m:n$ is what we need to find.

2.  **Set up the equation for the x-coordinate:**
    * $x = \frac{mx_2 + nx_1}{m+n}$
    * $0 = \frac{m(-3) + n(2)}{m+n}$
    * $0 = -3m + 2n$
    * $3m = 2n$
    * $\frac{m}{n} = \frac{2}{3}$. So, the ratio from the x-coordinates is **2:3**.

3.  **Set up the equation for the y-coordinate to verify:**
    * For the origin to be on the line, the ratio calculated from the y-coordinates must be the same.
    * $y = \frac{my_2 + ny_1}{m+n}$
    * $0 = \frac{m(-2) + n(8)}{m+n}$
    * $0 = -2m + 8n$
    * $2m = 8n$
    * $\frac{m}{n} = \frac{8}{2} = \frac{4}{1}$. So, the ratio from the y-coordinates is **4:1**.

4.  **Analyze the result:**
    * The x-coordinates imply the ratio is 2:3.
    * The y-coordinates imply the ratio is 4:1.
    * Since these ratios are not the same, it means there is no single ratio $m:n$ for which the origin lies on the line segment. This is a contradiction, which proves that the origin is not on the line connecting P and Q.

**Final Answer:** The correct option is **"Origin does not lie on the line segment"**.
{{< /border >}}

{{< border >}}
### **Question 3: The Section Formula (Finding a Coordinate)**

**The Question:**
If the origin cuts the line segment $P(-2, -4)$, $Q(6, k)$ in the ratio 1 : 3, then the value of $k$ is \_\_\_\_\_\_\_\_\_\_.
* Cannot be determined
* 0
* 12
* 18

**Core Concept: The Section Formula (Revisited)**

We use the same formula as in the previous question. This time, we are given the ratio and the dividing point, and we need to solve for an unknown coordinate in one of the endpoints.

**Detailed Solution:**

1.  **Identify the knowns:**
    * The points are $P(-2, -4)$, so $(x_1, y_1) = (-2, -4)$.
    * And $Q(6, k)$, so $(x_2, y_2) = (6, k)$.
    * The point cutting the segment is the origin, so $(x, y) = (0, 0)$.
    * The ratio is $m:n = 1:3$, so $m=1$ and $n=3$.

2.  **Set up the equation for the y-coordinate (since $k$ is a y-value):**
    * $y = \frac{my_2 + ny_1}{m+n}$
    * Substitute the known values into the formula:
    * $0 = \frac{(1)(k) + (3)(-4)}{1+3}$

3.  **Solve the equation for k:**
    * $0 = \frac{k - 12}{4}$
    * Multiply both sides by 4: $0 \times 4 = k - 12$
    * $0 = k - 12$
    * Add 12 to both sides: $k = 12$.

4.  **(Verification - Optional) Check if the x-coordinate is consistent:**
    * Let's see if the x-coordinate of the dividing point is also 0 using our ratio.
    * $x = \frac{mx_2 + nx_1}{m+n} = \frac{(1)(6) + (3)(-2)}{1+3} = \frac{6-6}{4} = \frac{0}{4} = 0$.
    * This matches the x-coordinate of the origin, so our calculation is consistent.

**Final Answer:** The value of $k$ is **12**.
{{< /border >}}