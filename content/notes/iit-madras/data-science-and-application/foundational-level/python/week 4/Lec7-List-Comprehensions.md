---
title: List Comprehension
date: 2025-05-08
weight: 47
---

Let’s explore **list comprehensions** in Python with simple explanations, emojis, step-by-step examples, and practice questions! 🚀📝

## What is a List Comprehension? 🤔

A **list comprehension** is a concise way to create lists in Python.
It lets you build a new list by applying an **expression** to each item in an **iterable** (like a list, string, or range), all in a single line!

**Syntax:**

```python
[expression for item in iterable]
```

- **expression**: What you want to do with each item (e.g., multiply by 2).
- **item**: A variable name for each element.
- **iterable**: The collection you loop over (list, range, etc.).


### Basic Example 🏗️

Let’s make a list of squares for numbers 0 to 4:

```python
squares = [x**2 for x in range(5)]
print(squares)  # Output: [0, 1, 4, 9, 16]
```

*This is the same as using a for loop, but much shorter!*[^1][^2]

### With Condition (Filtering) 🧹

You can add an **if** condition to filter items:

```python
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # Output: [0, 2, 4, 6, 8]
```

*Only even numbers are included!*[^3][^2]

### Nested Loops in List Comprehensions 🔄

You can use more than one **for** in a comprehension (like nested loops):

```python
pairs = [(x, y) for x in [1, 2] for y in [3, 4]]
print(pairs)  # Output: [(1, 3), (1, 4), (2, 3), (2, 4)]
```

*This creates all combinations of x and y.*[^2]

### Real-World Example: Remove Whitespace from Lines 📄

Suppose you have a list of strings with extra spaces:

```python
lines = [" hello\n", " world\n", " python\n"]
clean = [line.strip() for line in lines]
print(clean)  # Output: ['hello', 'world', 'python']
```

*Quickly cleans up every line!*[^2]

### List Comprehension vs. For Loop ⚔️

| Task | For Loop Example | List Comprehension Example |
| :-- | :-- | :-- |
| Squares of 0–4 | squares = []<br>for x in range(5):<br>    squares.append(x**2) | squares = [x**2 for x in range(5)] |
| Filter evens from 0–9 | evens = []<br>for x in range(10):<br>if x % 2 == 0:<br>evens.append(x) | evens = [x for x in range(10) if x % 2 == 0] |

*List comprehensions are more concise and often faster!*[^1][^2]

### Advanced: Nested Comprehensions \& Conditions 🌟

You can combine multiple for loops and if conditions:

```python
results = [x*y for x in range(1, 4) for y in range(1, 4) if x != y]
print(results)  # Output: [2, 3, 2, 3, 4, 6]
```

*All products of x and y, except when x equals y.*[^2]

## Practice Questions \& Solutions 📝

### 1️⃣ Create a list of cubes for numbers 0 to 5.

<details>
<summary>Show Solution</summary>

```python
cubes = [x**3 for x in range(6)]
print(cubes)  # Output: [0, 1, 8, 27, 64, 125]
```
</details>

### 2️⃣ Make a list of all vowels in the string `"hello world"`.

<details>
<summary>Show Solution</summary>

```python
s = "hello world"
vowels = [ch for ch in s if ch in "aeiou"]
print(vowels)  # Output: ['e', 'o', 'o']
```
</details>

### 3️⃣ From the list `[2, -3, 5, -7, 8]`, create a new list with only the positive numbers.

<details>
<summary>Show Solution</summary>

```python
nums = [2, -3, 5, -7, 8]
positives = [n for n in nums if n > 0]
print(positives)  # Output: [2, 5, 8]
```
</details>

### 4️⃣ Create a list of all pairs `(x, y)` where `x` is from `1-3` and `y` is from `a-c`.

<details>
<summary>Show Solution</summary>

```python
pairs = [(x, y) for x in range(1, 4) for y in ['a', 'b', 'c']]
print(pairs)
# Output: [(1, 'a'), (1, 'b'), (1, 'c'), (2, 'a'), (2, 'b'), (2, 'c'), (3, 'a'), (3, 'b'), (3, 'c')]
```
</details>

### 5️⃣ Given a list of words, create a new list with only words longer than 3 letters.

<details>
<summary>Show Solution</summary>

```python
words = ["hi", "hello", "cat", "python", "sun"]
long_words = [w for w in words if len(w) > 3]
print(long_words)  # Output: ['hello', 'python']
```
</details>

## Key Points with Emojis 🎯

- **List comprehensions** are a compact, readable way to build lists 🏗️
- Add **if** for filtering 🧹
- Use **multiple for** for nested loops 🔄
- Faster and cleaner than regular for loops ⚡
- Can be used with any iterable (lists, strings, files, etc.)

If you want to know about **set comprehensions** or **dictionary comprehensions**, just ask! 😃

**References:**
List comprehensions provide a concise syntax for creating lists and can include filtering and nested loops. They are often faster and more readable than traditional for loops[^3][^1][^2].

<div style="text-align: center">⁂</div>

[^1]: python-handbook.pdf

[^2]: Learning_Python.pdf

[^3]: Introduction_to_Python_Programming_-_WEB.pdf

[^4]: OER-202301_Wang_2023-Introduction-to-Computer-Programming-with-Python.pdf

[^5]: pythonlearn.pdf

[^6]: Python-Cheatsheet-2024.pdf

[^7]: itpacs_cafiero.pdf

[^8]: Python-IITM-Foundational-Course.pdf

[^9]: https://www.w3schools.com/python/python_lists_comprehension.asp

[^10]: https://www.datanovia.com/learn/programming/python/additional-tutorials/list-comprehensions.html

[^11]: https://www.programiz.com/python-programming/list-comprehension

[^12]: https://www.geeksforgeeks.org/python/python-list-comprehension/

[^13]: https://realpython.com/list-comprehension-python/

[^14]: https://www.scholarhat.com/tutorial/python/python-list-comprehension

[^15]: https://geekflare.com/list-comprehension-in-python/

[^16]: Introduction-to-Data-Science-AAgah-20240620-1.pdf

