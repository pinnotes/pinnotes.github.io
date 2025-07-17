---
title: Remove two elements
subtitle: Section 1 | Problem 3
description: Let's break down the task and provide a clear solution!
categories: OOPE Exam
---

---

## 📝 Function: `remove_elements_at_two_indices`

Let's break down the task and provide a clear solution!

### 🚩 What should the function do?

- **Remove two elements** from a list, given their indices.
- The function **modifies the list in place** (does not return anything).
- **Indices are unique and non-negative**.


### 🧑‍💻 Function Implementation

```python
def remove_elements_at_two_indices(l, i1, i2):
    # Sort indices in reverse order to avoid messing up positions after deletion
    for idx in sorted([i1, i2], reverse=True):
        del l[idx]
```


### 🔍 Step-by-Step Explanation

1. **Why reverse order?**
    - Removing elements by index shifts subsequent items left.
    - By deleting the bigger index first, the smaller index's position is unaffected.
2. **How it works:**
    - `sorted([i1, i2], reverse=True)` sorts indices from largest to smallest.
    - `del l[idx]` removes the element at index `idx`.

### 🧪 Practice: Try It Yourself!

#### Practice 1

```python
lst = [10, 20, 30, 40, 50]
remove_elements_at_two_indices(lst, 1, 3)
print(lst)  # What is the result?
```


#### Practice 2

```python
lst = ['a', 'b', 'c', 'd', 'e', 'f']
remove_elements_at_two_indices(lst, 0, 4)
print(lst)  # What is the result?
```


#### Practice 3

```python
lst = [1, 2, 3]
remove_elements_at_two_indices(lst, 1, 2)
print(lst)  # What is the result?
```


### ✅ Solutions

```python
# Practice 1
# Remove at indices 1 and 3: [10, 20, 30, 40, 50] -> [10, 30, 40, 50] -> [10, 30, 50]
# Answer: [10, 30, 50]

# Practice 2
# Remove indices 0 and 4: ['a', 'b', 'c', 'd', 'e', 'f'] -> ['b', 'c', 'd', 'e', 'f'] -> ['b', 'c', 'd', 'f']
# Answer: ['b', 'c', 'd', 'f']

# Practice 3
# Remove indices 1 and 2: [1, 2, 3] -> [1, 2] (after removing 2nd) -> [1] (after removing 1st)
# Answer: [1]
```


### ✨ Points to Remember

- **In-place change:** The original list is modified!
- **Reverse order deletion:** Always delete from the highest index first to avoid shifting problems.
- **No return value:** The function only changes the input list.

Happy Coding! 🚀

