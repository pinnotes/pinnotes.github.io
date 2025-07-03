---
title: Matrix Multiplication
date: 2025-05-08
weight: 54
---

Let's learn **Matrix Multiplication in Python** 🧮✨—with clear explanations, step-by-step coding, and practice questions (with solutions)! 🚀

## What is Matrix Multiplication? 🤔

- **Matrix multiplication** is a way to combine two matrices (2D lists) to produce a new matrix.
- You can multiply **Matrix A (size m × n)** with **Matrix B (size n × p)**.
- The result is a **new matrix of size m × p**.

**Rule:** The number of columns in the first matrix must equal the number of rows in the second matrix!

## Step-by-Step: Matrix Multiplication in Python 🐍

Let's multiply two matrices step by step!

### 1️⃣ Example Matrices

```python
A = [
    [1, 2, 3],
    [4, 5, 6]
]  # 2x3 matrix

B = [
    [7, 8],
    [9, 10],
    [11, 12]
]  # 3x2 matrix
```

- A is 2 rows × 3 columns
- B is 3 rows × 2 columns
- Result will be 2 rows × 2 columns


### 2️⃣ Algorithm (Logic)

- For each row in A,
    - For each column in B,
        - Multiply and sum the corresponding elements.


### 3️⃣ Code Implementation

```python
def matrix_multiplication(X, Y):
    r1, c1 = len(X), len(X[^0])
    r2, c2 = len(Y), len(Y[^0])

    # Check if multiplication is possible
    if c1 != r2:
        print("Multiplication not possible!")
        return None

    # Initialize result matrix with zeros
    result = []
    for i in range(r1):
        result.append([^0] * c2)

    # Perform multiplication
    for i in range(r1):
        for j in range(c2):
            for k in range(c1):
                result[i][j] += X[i][k] * Y[k][j]
    return result

# Using the function
A = [
    [1, 2, 3],
    [4, 5, 6]
]
B = [
    [7, 8],
    [9, 10],
    [11, 12]
]
result = matrix_multiplication(A, B)
for row in result:
    print(row)
# Output:
# [58, 64]
# [139, 154]
```

📢 **Explanation:**

- `result[i][j]` is the dot product of the i-th row of A and the j-th column of B.
- The triple loop:
    - Outer loop: rows of A
    - Middle loop: columns of B
    - Inner loop: columns of A/rows of B (for multiplication and summing)


## 📝 Practice Questions with Solutions

### Q1. Multiply the following matrices:

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

**Solution:**

```python
result = matrix_multiplication(X, Y)
for row in result:
    print(row)
# Output:
# [6, 16]
# [7, 18]
```


### Q2. What happens if you try to multiply a 2x3 matrix with a 2x2 matrix?

**Answer:**
Multiplication is **not possible** because the number of columns in the first matrix (3) does not equal the number of rows in the second matrix (2).

## 🧩 Try It Yourself!

**Q:** Write a function to multiply two square matrices of size 3x3.

<details>
<summary>Solution</summary>

```python
def multiply_3x3(A, B):
    result = [[^0]*3 for _ in range(3)]
    for i in range(3):
        for j in range(3):
            for k in range(3):
                result[i][j] += A[i][k] * B[k][j]
    return result

A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
B = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]
res = multiply_3x3(A, B)
for row in res:
    print(row)
```
</details>

## 💡 Key Points

- **Matrix multiplication** is only possible if the number of columns in the first matrix equals the number of rows in the second.
- Resulting matrix size: **(rows of first) × (columns of second)**
- Use **nested loops** to multiply and sum elements.

**Now you can multiply matrices in Python!**
Try with your own numbers and see the magic! 🧙‍♂️✨

**References:**

- [Python-IITM-Foundational-Course.pdf][^1]
- [Python-Cheatsheet-2024.pdf][^2]
- [Introduction_to_Python_Programming_-_WEB.pdf][^3]

<div style="text-align: center">⁂</div>

[^1]: Python-IITM-Foundational-Course.pdf

[^2]: Python-Cheatsheet-2024.pdf

[^3]: Introduction_to_Python_Programming_-_WEB.pdf

[^4]: itpacs_cafiero.pdf

[^5]: thinkpython2.pdf

[^6]: OER-202301_Wang_2023-Introduction-to-Computer-Programming-with-Python.pdf

[^7]: Learning_Python.pdf

[^8]: pythonlearn.pdf

[^9]: Introduction-to-Data-Science-AAgah-20240620-1.pdf

