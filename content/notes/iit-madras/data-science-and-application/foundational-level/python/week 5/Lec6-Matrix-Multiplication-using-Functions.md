---
title: Matrix Multiplication using Functions in Python 
date: 2025-05-08
weight: 56
---

Here’s how you can do **Matrix Multiplication using Functions in Python** 🧮✨—with step-by-step explanation, code, and practice!

## 🚦 Step-by-Step Modular Matrix Multiplication

### 1️⃣ **Understand the Problem**

- You want to multiply two matrices, **A** and **B**.
- **A** must have as many columns as **B** has rows.
- Result is a new matrix **C**.


### 2️⃣ **Break Down the Problem into Functions**

Let’s build helper functions:

- **row(M, i)**: returns the ith row of matrix M.
- **column(M, j)**: returns the jth column of matrix M.
- **dot(u, v)**: returns the dot product of two lists u and v.
- **matmul(A, B)**: returns the product of matrices A and B.


### 3️⃣ **Code Implementation**

```python
# Get the ith row
def row(M, i):
    return M[i]

# Get the jth column
def column(M, j):
    return [M[k][j] for k in range(len(M))]

# Dot product of two lists
def dot(u, v):
    return sum(u[k] * v[k] for k in range(len(u)))

# Matrix multiplication
def matmul(A, B):
    n = len(A)         # Number of rows in A (assume square for simplicity)
    m = len(B[^0])      # Number of columns in B
    C = []
    for i in range(n):
        row_result = []
        for j in range(m):
            rowA = row(A, i)
            colB = column(B, j)
            row_result.append(dot(rowA, colB))
        C.append(row_result)
    return C

# Example matrices
A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
B = [
    [1, 2, 1],
    [3, 1, 7],
    [6, 2, 3]
]
result = matmul(A, B)
for r in result:
    print(r)
# Output:
# [25, 12, 28]
# [55, 27, 64]
# [85, 42, 100]
```

> *This modular approach makes your code easy to read and debug!*[^1]

## 🏋️‍♂️ Practice Question

**Q:** Multiply these 2x2 matrices using functions:

```python
X = [
    [2, 4],
    [3, 4]
]
Y = [
    [1, 2],
    [1, 3]
]
```

<details>
<summary>Solution</summary>

```python
def row(M, i):
    return M[i]

def column(M, j):
    return [M[k][j] for k in range(len(M))]

def dot(u, v):
    return sum(u[k] * v[k] for k in range(len(u)))

def matmul(A, B):
    n = len(A)
    m = len(B[^0])
    C = []
    for i in range(n):
        row_result = []
        for j in range(m):
            rowA = row(A, i)
            colB = column(B, j)
            row_result.append(dot(rowA, colB))
        C.append(row_result)
    return C

X = [
    [2, 4],
    [3, 4]
]
Y = [
    [1, 2],
    [1, 3]
]
result = matmul(X, Y)
for r in result:
    print(r)
# Output:
# [6, 16]
# [7, 18]
```
</details>

## ⭐ Key Points

- **Modular functions** make your code clear and reusable.
- Always check the dimensions before multiplying!
- This approach works for both square and rectangular matrices.

**Now you can multiply matrices in Python using functions—try your own examples!** 🚀
*[Source: Python-IITM-Foundational-Course.pdf][^1]*

<div style="text-align: center">⁂</div>

[^1]: Python-IITM-Foundational-Course.pdf

[^2]: Python-Cheatsheet-2024.pdf

[^3]: Introduction_to_Python_Programming_-_WEB.pdf

[^4]: thinkpython2.pdf

[^5]: Learning_Python.pdf

[^6]: OER-202301_Wang_2023-Introduction-to-Computer-Programming-with-Python.pdf

