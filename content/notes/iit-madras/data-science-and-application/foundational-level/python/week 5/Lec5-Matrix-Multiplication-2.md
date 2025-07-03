---
title: Matrix Multiplication - 2
date: 2025-05-08
weight: 55
---

Let’s dive deeper into **matrix multiplication 2** in Python! 🧮✨
We’ll cover both the **step-by-step logic** and a **modular, function-based approach**—with practice and solutions! 🚀

## 🟢 What is Matrix Multiplication?

- Multiply **Matrix A** (size m × n) with **Matrix B** (size n × p).
- The result is a new matrix of size **m × p**.
- Each element in the result is the **dot product** of a row from A and a column from B.


## 🟡 Modular Matrix Multiplication Using Functions

A clean way to multiply matrices is to use helper functions for:

- Getting a row from a matrix
- Getting a column from a matrix
- Calculating the dot product of two lists

Let’s see this in action! 👇

### Step 1: Helper Functions

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
```


### Step 2: Matrix Multiplication Function

```python
def matmul(A, B):
    n = len(A)  # assuming square matrices of size n x n
    C = []
    for i in range(n):
        row_result = []
        for j in range(n):
            rowA = row(A, i)
            colB = column(B, j)
            row_result.append(dot(rowA, colB))
        C.append(row_result)
    return C
```


### Step 3: Example Usage

```python
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

**How does it work?**

- For each cell in the result, we take the corresponding row from A and column from B, compute their dot product, and store it.


## 🟠 Practice Question

**Q:** Multiply the following 2x2 matrices using the modular function approach:

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
    C = []
    for i in range(n):
        row_result = []
        for j in range(n):
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

## 🔵 Key Points

- **Matrix multiplication** can be broken into smaller functions: row, column, dot product.
- This modular approach makes your code clear and easy to debug! 🛠️
- Always check that the number of columns in the first matrix equals the number of rows in the second.

**Try it with your own matrices and see the magic!** ✨
If you want to multiply non-square matrices, just adjust the loops to use `len(A)` for rows and `len(B)` for columns[^1].

**References:**

- Python-IITM-Foundational-Course.pdf (modular matrix multiplication using functions)[^1]
- Python-Cheatsheet-2024.pdf (step-by-step multiplication logic)[^2]

<div style="text-align: center">⁂</div>

[^1]: Python-IITM-Foundational-Course.pdf

[^2]: Python-Cheatsheet-2024.pdf

[^3]: itpacs_cafiero.pdf

[^4]: Introduction_to_Python_Programming_-_WEB.pdf

[^5]: thinkpython2.pdf

[^6]: OER-202301_Wang_2023-Introduction-to-Computer-Programming-with-Python.pdf

[^7]: Learning_Python.pdf

[^8]: https://www.geeksforgeeks.org/maths/matrix-multiplication/

[^9]: https://www.javaguides.net/2023/09/python-matrix-multiplication.html

[^10]: https://mbernste.github.io/posts/matrix_multiplication/

[^11]: https://byjus.com/maths/matrix-multiplication/

[^12]: https://www.geeksforgeeks.org/python-program-multiply-two-matrices/

[^13]: https://www.mathsisfun.com/algebra/matrix-multiplying.html

[^14]: https://byjus.com/maths/matrix-multiplication-questions/

[^15]: https://developer.arm.com/documentation/102467/latest/Example---matrix-multiplication

[^16]: https://greenemath.com/College_Algebra/125/Multiplying-MatricesPracticeTest.html

[^17]: https://www.studypug.com/algebra-help/multiplying-a-matrix-by-another-matrix

