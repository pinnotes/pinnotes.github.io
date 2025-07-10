---
title: Sum of Squared Errors (SSE) for Best-Fit Line
subtitle: IITM Quiz 1
description: Given the table of amount paid and distance (in km), and the best-fit line $ y = 4x + 1 $, what is the value of SSE?
weight: 1
categories:
- Sum of Squared Errors
---

---




### 1️⃣ **Sum of Squared Errors (SSE) for Best-Fit Line**

*(From Image 1)*

**Question:**
Given the table of amount paid and distance (in km), and the best-fit line \$ y = 4x + 1 \$, what is the value of SSE?


## Step-by-Step Explanation: Calculating SSE for the Best-Fit Line 📊

Let's break down how to find the **Sum of Squared Errors (SSE)** for the given data and the best-fit line \$ y = 4x + 1 \$, step by step!

### 1️⃣ **List the Data Points**

| Amount Paid (\$ y \$) | Distance (\$ x \$) |
| :--: | :--: |
| 80 | 20 |
| 60 | 15 |
| 60 | 16 |
| 100 | 25 |
| 58 | 14 |

### 2️⃣ **Calculate Predicted Values (\$ y_{pred} \$)**

Use the best-fit line equation \$ y = 4x + 1 \$:

- For \$ x = 20 \$: \$ y_{pred} = 4 \times 20 + 1 = 81 \$
- For \$ x = 15 \$: \$ y_{pred} = 4 \times 15 + 1 = 61 \$
- For \$ x = 16 \$: \$ y_{pred} = 4 \times 16 + 1 = 65 \$
- For \$ x = 25 \$: \$ y_{pred} = 4 \times 25 + 1 = 101 \$
- For \$ x = 14 \$: \$ y_{pred} = 4 \times 14 + 1 = 57 \$


### 3️⃣ **Find the Error for Each Point**

Error is the difference between the actual and predicted value:

$$
\text{Error} = y_{\text{actual}} - y_{\text{pred}}
$$


| \$ y_{actual} \$ | \$ y_{pred} \$ | Error |
| :--: | :--: | :--: |
| 80 | 81 | \$ -1 \$ |
| 60 | 61 | \$ -1 \$ |
| 60 | 65 | \$ -5 \$ |
| 100 | 101 | \$ -1 \$ |
| 58 | 57 | \$ +1 \$ |

### 4️⃣ **Square Each Error**

$$
\text{Squared Error} = (\text{Error})^2
$$


| Error | Squared Error |
| :--: | :--: |
| -1 | 1 |
| -1 | 1 |
| -5 | 25 |
| -1 | 1 |
| +1 | 1 |

### 5️⃣ **Sum All Squared Errors (SSE)**

$$
\text{SSE} = 1 + 1 + 25 + 1 + 1 = \boxed{29}
$$

## 🏁 **Final Answer**

The **Sum of Squared Errors (SSE)** for the given data and the best-fit line \$ y = 4x + 1 \$ is:

$$
\boxed{29}
$$

### **What Does SSE Mean?**

- SSE measures how well the line fits the data.
- A smaller SSE means the line fits the data points more closely.
- Here, each squared error shows how far the actual value is from the predicted value, and their sum gives the total error for all points.

**That’s how you find SSE, step by step, with formulas and calculations! 🚀**

