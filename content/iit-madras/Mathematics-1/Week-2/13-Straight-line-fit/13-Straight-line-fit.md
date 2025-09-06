---
title: Straight line fit
date: 2025-08-09
weight: 19
image: https://static.tutors.com/assets/images/content/tutors-how-to-use-the-distance-formula.jpg
emoji: 🧮
slug: "Straight line fit"
linkTitle: Straight line fit
series_order: 19
---

A well-defined collection of distinct objects called elements or members.

{{< youtube xdZHsFuyBZM >}}

https://youtu.be/xdZHsFuyBZM


#### Learning Outcomes

● Associate the study on lines with real-world problems.
● Predict the suitable line among the given set of lines for a given set of points.
● Find the best fit line among the given set of lines using the Sum Squared Error Method for a given data.

## Exercise Questions 🤯


{{< border >}}

### 1) If a line fit \$ y = x + 1 \$ is given for the data as shown in Table AQ-3.1, then compute the Sum Squares Error (SSE).

| x | 1 | 2 | 3 | 4 | 6 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| y | 1 | 1 | 2 | 5 | 7 |

#### **Concept:**

- The Sum of Squares Error (SSE) is a measure of how well a line fits the data.
- It is computed as:

$$
SSE = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2
$$

where $y_i$ are the actual values and $\hat{y}_i$ are the predicted values from the line.


#### **Step-by-Step Solution:**

- For each $x$, compute predicted $y = x + 1$, then square the difference from actual $y$.
- $x=1$: predicted $y=2$, actual $y=1$; error = $(1-2)^2 = 1$
- $x=2$: predicted $y=3$, actual $y=1$; error = $(1-3)^2 = 4$
- $x=3$: predicted $y=4$, actual $y=2$; error = $(2-4)^2 = 4$
- $x=4$: predicted $y=5$, actual $y=5$; error = $(5-5)^2 = 0$
- $x=6$: predicted $y=7$, actual $y=7$; error = $(7-7)^2 = 0$

Add up errors: $1 + 4 + 4 + 0 + 0 = 9$

**Final Answer:** \$ \boxed{9} \$

***

**Concept Taught:**

- SSE quantifies the total squared "distance" between data points and the regression line; the smaller, the better the fit.

{{< /border >}}

{{< border >}}

### 2) If the relation between $x$ and $y$ is as shown in Table AQ-3.2, then which among the following lines is the best fit?

Given options:

- $y = 2x$ with SSE=143
- $y = x$ with SSE=40
- $y = 3x$ with SSE=428
- $y = 4x$ with SSE=895


#### **Concept:**

- The **best fit** line is the one with the **smallest SSE** (Sum of Squares Error).


#### **Answer:**

- SSEs: 143, 40, 428, 895. The smallest is 40 (for $y = x$).

**Final Answer:** $y = x$ with SSE=40 is the best fit.

***

**Concept Taught:**

- The SSE gives an objective criterion to select the best model among given regression lines; always prefer the model/line with the lowest SSE for best fit.

{{< /border >}}
<span style="display:none">[^1]</span>

<div style="text-align: center">⁂</div>

[^1]: image.jpeg

