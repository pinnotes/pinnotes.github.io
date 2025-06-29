---
title: Straight line fit
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

When we talk about a **straight line fit** in mathematics, especially in the context of data science, we're essentially trying to find a single straight line that best represents a collection of data points on a graph 📈. Imagine you've collected some data from an experiment, and you expect there to be a linear relationship between your measurements, but due to slight errors or variations, the points don't form a perfect straight line. A "straight line fit" helps you draw that ideal line through the scatter of points! ✨

### What is a Straight Line Fit?

A straight line fit aims to model the relationship between two variables by using a linear equation. For example, in a physics experiment involving Ohm's Law, the voltage (V) across a resistor is expected to be directly proportional to the current (I) flowing through it, given by the equation V = IR. Here, if you plot Voltage on the y-axis (let's call it `y`) and Current on the x-axis (let's call it `x`), the Resistance (R) acts as the slope (`m`) of the line, and the y-intercept (`c`) would be 0 (since V=0 when I=0). So, the theoretical relationship is `y = mx + 0`, or `y = mx`.

However, in real-world scenarios, when you take multiple readings, the observed data points might not perfectly lie on a single straight line. This is where the concept of a **"best fit" line** comes into play. The goal is to find an equation of the form **`y = mx + c`** that best describes the overall trend of these points, even if the line doesn't pass through every single one of them.

### The Challenge of Real-World Data 📊

Unlike in theoretical problems where points might be perfectly collinear, actual experimental data or real-world observations often have some "noise" or variability. So, if you were to plot these points, they would form a scatter, and you couldn't draw one unique straight line that goes through all of them. The challenge is to determine *which* line among infinite possibilities best summarises the relationship in the data.

### Quantifying the "Best Fit": Sum Squared Error (SSE) 📏

To objectively determine which line is the "best fit", we use a statistical measure called **Sum Squared Error (SSE)**.

1.  **Measuring Deviation**: For each data point `(xi, yi)`, we calculate the vertical distance between the actual `yi` value and the `y` value predicted by our chosen line (`mxi + c`). This is a crucial point: unlike the shortest perpendicular distance of a point from a line, for straight line fit, we typically consider the **vertical distance** (parallel to the Y-axis). This is because in many applications, `y` is an output dependent on `x`, and we are interested in how much our predicted `y` deviates from the actual `y` for a given `x`.
2.  **Squaring the Deviations**: We square each of these vertical distances. Squaring ensures that all deviations are positive (so negative deviations don't cancel out positive ones) and penalises larger deviations more heavily.
3.  **Summing them Up**: Finally, we sum all these squared deviations for all the `n` data points. The resulting sum is the SSE.

The formula for SSE for a line `y = mx + c` and a set of `n` points `(xi, yi)` is:
$\mathbf{SSE = \sum_{i=1}^{n} (y_i - (mx_i + c))^2}$

### The Goal: Minimise SSE! 🎯

The "best-fit" line is then defined as the line (with its specific `m` and `c` values) that yields the **smallest possible SSE**. The process of finding these optimal `m` and `c` values involves techniques often covered in calculus (specifically, minimisation of functions involving squares). A smaller SSE indicates that the line is closer to the data points overall, meaning it's a better fit.

### Practice Question ✍️

A lab experiment measures Voltage (y) for different Current (x) values. The following data points are collected:

| Current (x) | Voltage (y) |
| :---------- | :---------- |
| 1           | 5           |
| 2           | 6           |
| 4           | 9           |
| 9           | 18          |

The lab technician suggests a line of fit: $\mathbf{y = 2x + 2}$. Compute the Sum Squared Error (SSE) for this given line and data.

### Solution:

1.  **Recall the SSE formula**:
    $\mathbf{SSE = \sum_{i=1}^{n} (y_i - (mx_i + c))^2}$
    Here, `m = 2` and `c = 2` for the given line `y = 2x + 2`. We have `n = 4` data points.

2.  **Calculate the squared deviation for each point**:

    *   **For (x1, y1) = (1, 5)**:
        Predicted `y` = `2(1) + 2 = 4`
        Deviation = `(5 - 4) = 1`
        Squared Deviation = `(1)^2 = 1`

    *   **For (x2, y2) = (2, 6)**:
        Predicted `y` = `2(2) + 2 = 6`
        Deviation = `(6 - 6) = 0`
        Squared Deviation = `(0)^2 = 0`

    *   **For (x3, y3) = (4, 9)**:
        Predicted `y` = `2(4) + 2 = 10`
        Deviation = `(9 - 10) = -1`
        Squared Deviation = `(-1)^2 = 1`

    *   **For (x4, y4) = (9, 18)**:
        Predicted `y` = `2(9) + 2 = 20`
        Deviation = `(18 - 20) = -2`
        Squared Deviation = `(-2)^2 = 4`

3.  **Sum the squared deviations to find SSE**:
    `SSE = 1 + 0 + 1 + 4 = 6`

Therefore, the Sum Squared Error (SSE) for the given line `y = 2x + 2` and the data points is **6**. ✅