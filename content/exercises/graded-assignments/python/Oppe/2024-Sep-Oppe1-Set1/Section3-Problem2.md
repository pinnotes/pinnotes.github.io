---
title: V Shaped Pattern Printer
subtitle: Section 3 | Problem 2
description: Let's create a fun program that prints a "V" shaped pattern using slashes and a 'v' at the bottom! 🎉
categories: OOPE Exam
---

---

## 🖨️ "V" Shaped Pattern Printer

Let's create a fun program that prints a **"V" shaped pattern** using slashes and a `'v'` at the bottom! 🎉

### 🚩 Problem Description

- Input: An integer `n` (`n > 0`) representing the number of rows.
- Output: Print a "V" shaped pattern:
    - Use `\` (backslash) and `/` (forward slash) for each row.
    - The bottom row (last row) is just a lowercase `v`.
    - There should **not** be trailing spaces on the right side of any line.


### 🧑‍💻 Full Solution

```python
n = int(input())

for i in range(1, n):
    # Print spaces for left padding
    left_spaces = ' ' * (i - 1)
    # Print backslash, spaces in the middle, and forward slash
    mid_spaces = ' ' * (2 * (n - i) - 1)
    if mid_spaces:
        print(left_spaces + '\\' + mid_spaces + '/')
    else:
        # When mid_spaces is zero, the slashes touch; only for n=2, i=1
        print(left_spaces + '\\/')

# Print the bottom 'v'
print(' ' * (n - 1) + 'v')
```


### 🔍 Step-by-Step Explanation

1. **Input:**
    - Read integer `n`.
2. **Loop for rows 1 to n-1:**
    - Print spaces on the left: `i-1` spaces.
    - Print a backslash: `\`.
    - Print spaces in the middle: `2*(n-i)-1` spaces.
    - Print a forward slash: `/`.
    - No trailing spaces after the slash!
3. **Last row:**
    - Print `'v'` with `n-1` left spaces.

### 🧪 Practice Examples

#### Example 1

**Input:**

```
3
```

**Output:**

```
\   /
 \ /
  v
```


#### Example 2

**Input:**

```
5
```

**Output:**

```
\       /
 \     /
  \   /
   \ /
    v
```


#### Example 3

**Input:**

```
1
```

**Output:**

```
v
```


### 💡 Tips

- Backslash needs to be escaped in Python: use `'\\'` in strings.
- No extra spaces should be on the right side of any line—only left spaces for indentation.


### ✨ Try It Yourself!

- Test with various values of `n` to see beautiful "V"s of different sizes.
- Make sure to check the code for both even and odd values of `n`.

Happy Coding! 🚀

