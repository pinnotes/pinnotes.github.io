---
title: lambda functions, enumeratem, zip, map, filter
date: 2025-05-08
weight: 60
---

Here’s an easy-to-understand guide to **lambda, functions, enumerate, zip, map, filter** in Python 🐍✨—with emojis, explanations, code examples, and practice questions!

## 🔹 lambda (Anonymous Functions)

- **lambda** creates small, unnamed functions on the fly.
- Syntax: `lambda arguments: expression`
- Useful for short, simple functions, especially as arguments to other functions.

```python
# Example: square of a number
square = lambda x: x * x
print(square(5))  # 25

# Example with two arguments
add = lambda x, y: x + y
print(add(3, 4))  # 7
```

*You can assign a lambda to a variable or use it directly!*

## 🔹 Functions

- Defined using `def`.
- Can have parameters and return values.

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))  # Hello, Alice!
```

*Functions organize code and make it reusable.*

## 🔹 enumerate

- Adds a counter to an iterable (like a list or string).
- Returns pairs of (index, item).

```python
fruits = ['apple', 'banana', 'cherry']
for idx, fruit in enumerate(fruits):
    print(idx, fruit)
# Output:
# 0 apple
# 1 banana
# 2 cherry
```

*Great for when you need both the item and its position!*
[^1][^2]

## 🔹 zip

- Combines multiple iterables into tuples, stopping at the shortest.
- Useful for parallel iteration.

```python
names = ['Anil', 'Bina', 'Chetan']
marks = [85, 92, 78]
for name, mark in zip(names, marks):
    print(name, mark)
# Output:
# Anil 85
# Bina 92
# Chetan 78
```

*You can use `list(zip(...))` to see all pairs at once.*
[^1][^2]

## 🔹 map

- Applies a function to every item in an iterable.
- Returns an iterator (use `list()` to get all results).

```python
nums = [1, 2, 3, 4]
squares = list(map(lambda x: x*x, nums))
print(squares)  # [1, 4, 9, 16]
```

*map is often used with lambda for concise code!*
[^1][^2]

## 🔹 filter

- Filters items in an iterable by a function that returns True/False.
- Returns an iterator (use `list()` to get all results).

```python
nums = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens)  # [2, 4, 6]
```

*filter is great for extracting items that meet a condition!*
[^1][^2]

## 🏋️‍♂️ Practice Questions

### 1️⃣ Use `map` to add 10 to every number in `[^1][^2][^3]`.

<details>
<summary>Solution</summary>

```python
nums = [1, 2, 3]
result = list(map(lambda x: x + 10, nums))
print(result)  # [11, 12, 13]
```
</details>

### 2️⃣ Use `filter` to keep only words longer than 3 letters in `['cat', 'lion', 'tiger']`.

<details>
<summary>Solution</summary>

```python
words = ['cat', 'lion', 'tiger']
result = list(filter(lambda w: len(w) > 3, words))
print(result)  # ['lion', 'tiger']
```
</details>

### 3️⃣ Use `enumerate` to print the index and value of each character in "dog".

<details>
<summary>Solution</summary>

```python
for idx, char in enumerate("dog"):
    print(idx, char)
# Output:
# 0 d
# 1 o
# 2 g
```
</details>

### 4️⃣ Use `zip` to pair elements from `[^1][^2][^3]` and `['a', 'b', 'c']`.

<details>
<summary>Solution</summary>

```python
nums = [1, 2, 3]
letters = ['a', 'b', 'c']
pairs = list(zip(nums, letters))
print(pairs)  # [(1, 'a'), (2, 'b'), (3, 'c')]
```
</details>

## ⭐ Key Points Table

| Tool | What it does | Example use |
| :-- | :-- | :-- |
| lambda | Creates small, quick functions | `lambda x: x+1` |
| enumerate | Adds index to items | `for i, v in enumerate(list)` |
| zip | Pairs elements from iterables | `zip(list1, list2)` |
| map | Applies function to all items | `map(lambda x: x*2, nums)` |
| filter | Keeps items meeting a condition | `filter(lambda x: x>0, nums)` |

**Practice these tools—they make your Python code powerful and concise!** 🚀
If you want more examples or have questions, just ask!

<div style="text-align: center">⁂</div>

[^1]: Learning_Python.pdf

[^2]: OER-202301_Wang_2023-Introduction-to-Computer-Programming-with-Python.pdf

[^3]: Python-Cheatsheet-2024.pdf

[^4]: Python-IITM-Foundational-Course.pdf

[^5]: thinkpython2.pdf

[^6]: pythonlearn.pdf

[^7]: itpacs_cafiero.pdf

[^8]: Introduction_to_Python_Programming_-_WEB.pdf

