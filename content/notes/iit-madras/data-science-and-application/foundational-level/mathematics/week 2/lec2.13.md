---
title: Straight line fit
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 21
---

Based on the sources and our conversation history, "Straight Line Fit" is a concept that deals with finding a straight line that best represents or **fits** a given set of points. This is particularly relevant when dealing with real-world data or observations where points may not all lie perfectly on a single line.

The goal of straight line fitting is to find the equation of a line, typically in the form of **y = mx + c** (for non-vertical lines), that minimises the "distance" between the line and the given data points.

In the context of straight line fitting for data analysis, the notion of "distance" can differ from the traditional **perpendicular distance** from a point to a line. For example, when fitting a line to experimental data like voltage versus current, one might be more interested in the difference between the *observed* output (y-value) and the output *predicted* by the line for a specific input (x-value). This leads to considering the **vertical distance** (parallel to the y-axis) between the points and the line. This vertical distance for a point (xᵢ, yᵢ) and a line y = mx + c is given by yᵢ - (mxᵢ + c), or yᵢ - mxᵢ - c.

A common method to determine the "best line" or the line of best fit is by minimising the **Sum Squared Error (SSE)**. The SSE is defined as the sum of the squares of these vertical distances (deviations or errors) between the actual data points (xᵢ, yᵢ) and the corresponding y-values on the line (mxᵢ + c).

For a set of n points (x₁, y₁), (x₂, y₂), ..., (x<binary data, 1 bytes><binary data, 1 bytes><binary data, 1 bytes>, y<binary data, 1 bytes><binary data, 1 bytes><binary data, 1 bytes>) and a line y = mx + c, the SSE is calculated as:
**SSE = ∑ᵢ<binary data, 1 bytes><binary data, 1 bytes><binary data, 1 bytes>₁ⁿ (yᵢ − mxᵢ − c)²**

Finding the line that best fits the given set of points means finding the values of the slope (**m**) and the y-intercept (**c**) that minimise this SSE. The line y = mx + c is our standard equation for straight line fitting when the line is not vertical, as this equation is not valid for a vertical line.

The sources provide an example of calculating SSE for a given line y = 2x + 2 and four points (1, 5), (2, 6), (4, 9), and (9, 18):
Here, m = 2 and c = 2. The calculation is:
SSE = (5 − 2(1) − 2)² + (6 − 2(2) − 2)² + (9 − 2(4) − 2)² + (18 − 2(9) − 2)²
SSE = (5 − 2 − 2)² + (6 − 4 − 2)² + (9 − 8 − 2)² + (18 − 18 − 2)²
SSE = (1)² + (0)² + (−1)² + (−2)²
SSE = 1 + 0 + 1 + 4 = 6

This calculation shows how to quantify the error for a *given* line. The core problem of straight line fitting is then to find the specific m and c that result in the *smallest* possible SSE for the given data points.