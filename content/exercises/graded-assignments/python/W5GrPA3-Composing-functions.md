---
title: GrPA 3 Composing functions
label: Graded
weight: 1
subject: programming
subtitle: Week 5 GrPA
categories:
- Python Graded Assignment
---

---

## GrPA 3 Composing functions 👨‍💻

{{< border >}}

{{< tabs items="QUESTION,TEST CASES,SOLUTION" >}}

{{< tab >}}

{{< details title="Instructions"  closed="true" >}}

{{< /details >}}

{{< /tab >}}

{{< /tabs >}}

{{< /border >}}

## Question ❓

Implement all the given functions that are used to solve the below problems.

Follow the path

You are given a matrix of size m x n consisting of ones (1) and zeros (0). There is a single continuous path formed with ones that starts from the rightmost cell in the last row (m-th row) with one and ends at leftmost cell in the first row with one in it. The path does not branch, and there is only one such path. Your task is to traverse along the path and print the coordinates of the path from start to end as tuples over multiple lines. The path can move vertically and horizontally.

Input

matrix = [
    [0, 0, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 0, 0]
]
Output

(4,1)
(4,0)
(3,0)
(2,0)
(2,1)
(2,2)
(2,3)
(1,3)
(0,3)
(0,2)
Alternate the path Same setup, but while going in that path, flip every ones in the even position in the path to 2. Modify the matrix inplace.

Output

[
    [0, 0, 2, 1],
    [0, 0, 0, 2],
    [2, 1, 2, 1],
    [1, 0, 0, 0],
    [2, 1, 0, 0]
]
Count the path Same setup, but instead of flipping put the count of the step in the path. Modify the matrix inplace.

Output

[
    [0, 0, 10, 9],
    [0, 0, 0, 8],
    [4, 5, 6, 7],
    [3, 0, 0, 0],
    [2, 1, 0, 0]
]
Mirror the path horizontally Same setup, but also add a path that is the horizontal mirror of the original path in the same matrix.

Input

[
  [0,1,0,0,0],
  [0,1,1,1,0],
  [0,0,0,1,0],
  [0,0,0,1,1]
]
Output

[
  [0,1,0,1,0],
  [0,1,1,1,0],
  [0,1,0,1,0],
  [1,1,0,1,1]
]
Mirror the path vertically Same setup, but also add a path that is the vertical mirror of the original path in the same matrix.

Input

[
  [0,1,0,0,0],
  [0,1,1,1,0],
  [0,0,0,1,0],
  [0,0,0,1,1]
]
Output

[
  [0,1,0,1,1],
  [0,1,1,1,0],
  [0,1,1,1,0],
  [0,1,0,1,1]
]

## Python Code 🐍

```python {linenos=table,linenostart=1}

```

## Python Code Solution ✅

```python {linenos=table,linenostart=1}

```