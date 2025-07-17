---
title: sum_squares_abs_diff_squares
subtitle: Section 1 | Problem 1
description: 🧮 Function - `sum_squares_abs_diff_squares`
categories: OOPE Exam
---

---

## 🧮 Function: `sum_squares_abs_diff_squares`

Let's create a helpful function to work with squares and differences! 🎯

### 🚩 What should the function do?

- **Inputs:** Two integers (`a`, `b`)
- **Returns:** A tuple with:

1. **Sum of the squares** of `a` and `b`
2. **Absolute difference** of their squares


### 🧑‍💻 Function Implementation

```python
def sum_squares_abs_diff_squares(a, b):
    sum_squares = a**2 + b**2
    abs_diff_squares = abs(a**2 - b**2)
    return (sum_squares, abs_diff_squares)
```


### 🔍 Step-by-Step Explanation

1. **Square Each Number:**
    - Compute `a**2` and `b**2`.
2. **Sum of Squares:**
    - Add them: `a**2 + b**2`
3. **Absolute Difference of Squares:**
    - Subtract: `a**2 - b**2`
    - Apply `abs()` to always get a non-negative result.
4. **Return as a Tuple:**
    - Return both in the order specified.

### 🧪 Practice Questions

#### Practice 1

```python
result = sum_squares_abs_diff_squares(5, 3)
print(result)  # What do you expect?
```

- $5^2 + 3^2 = 25 + 9 = 34$
- $\lvert 25 - 9 \rvert = 16$
- **Output:** `(34, 16)`


#### Practice 2

```python
result = sum_squares_abs_diff_squares(-4, 2)
print(result)
```

- $(-4)^2 + 2^2 = 16 + 4 = 20$
- $\lvert 16 - 4 \rvert = 12$
- **Output:** `(20, 12)`


#### Practice 3

```python
result = sum_squares_abs_diff_squares(7, 7)
print(result)
```

- $7^2 + 7^2 = 49 + 49 = 98$
- $\lvert 49 - 49 \rvert = 0$
- **Output:** `(98, 0)`


### ✨ Key Points

- **Always returns a tuple** with (sum, absolute difference).
- Works for positive, negative, or zero values of `a` and `b`.
- No printing or input—just define \& use the function in your code!

Happy Coding! 🚀

