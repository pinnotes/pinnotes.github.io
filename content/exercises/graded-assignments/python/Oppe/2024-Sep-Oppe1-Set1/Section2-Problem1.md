---
title: Function - `sum_of_squares_of_even`
subtitle: Section 2 | Problem 1
description: Let's solve your problem step by step!
categories: OOPE Exam
---

----

## 📝 Function: `sum_of_squares_of_even`

Let's solve your problem step by step!

### 🚩 What Should the Function Do?

- **Input:** A list of integers (`nums`).
- **Output:** Return the *sum of squares* of all even numbers in that list.


### 🧑‍💻 Implementation

```python
def sum_of_squares_of_even(nums):
    return sum(x**2 for x in nums if x % 2 == 0)
```


### 🔍 Step-by-Step Explanation

1. **Iterate through each number** in the list (`for x in nums`).
2. **Check if the number is even:** `x % 2 == 0`.
3. **Square each even number:** `x**2`.
4. **Sum up** all squared even numbers using `sum()`.

### 🤔 Example Practice Questions

#### 1. What does `sum_of_squares_of_even()` return?

- **Even numbers:** 2 and 4
- **Squares:** $2^2 = 4$, $4^2 = 16$
- **Sum:** $4 + 16 = 20$
- **Answer:** `20`


#### 2. What does `sum_of_squares_of_even()` return?

- **No even numbers.**
- **Sum:** 0
- **Answer:** `0`


#### 3. What does `sum_of_squares_of_even([0, -2, 3])` return?

- **Even numbers:** 0, -2
- **Squares:** $0^2 = 0$, $(-2)^2 = 4$
- **Sum:** $0 + 4 = 4$
- **Answer:** `4`


### ✅ Practice: Try It Yourself!

```python
# Practice 1
print(sum_of_squares_of_even([2, 4, 6]))  # _______

# Practice 2
print(sum_of_squares_of_even([1, 3, 5]))  # _______

# Practice 3
print(sum_of_squares_of_even([10, -10, 3]))  # _______
```


#### Solutions

```python
# Practice 1: 2^2 + 4^2 + 6^2 = 4 + 16 + 36 = 56
# Output: 56

# Practice 2: No even numbers
# Output: 0

# Practice 3: 10^2 + (-10)^2 = 100 + 100 = 200
# Output: 200
```


### ✨ Points to Remember

- **Only even numbers** are considered (including zero and negatives).
- **Squares** each even number before summing.
- **Returns 0** if no even numbers are present.

Happy Coding! 🚀

