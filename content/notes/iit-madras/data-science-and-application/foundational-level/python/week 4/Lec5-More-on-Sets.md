---
title: More on Sets
date: 2025-05-08
weight: 45
---

Let’s explore **sets** in Python with easy explanations, emojis, practical examples, and practice questions! 🎯🧑‍💻

## What is a Set? 🥇

A **set** in Python is an **unordered collection** of **unique** and **immutable** elements.

- **Unordered:** No item has a fixed position (no indexing or slicing).
- **Unique:** Each element appears only once.
- **Mutable:** You can add or remove items, but the items themselves must be immutable (like numbers, strings, or tuples).


## How to Create a Set 🛠️

- **Using curly braces `{}`:**

```python
my_set = {1, 2, 3, 4}
print(my_set)  # Output: {1, 2, 3, 4}
```

- **Using the `set()` function (especially for empty sets):**

```python
empty_set = set()
print(empty_set)  # Output: set()
```

> Note: `{}` creates an empty dictionary, not a set!

## Key Features of Sets ⭐

- **No duplicates:**

```python
s = {1, 2, 2, 3}
print(s)  # Output: {1, 2, 3}
```

- **No indexing:**
You cannot do `s` or `s[^1]`—sets are unordered!
- **Can add and remove items:**
But only immutable types can be members (no lists or dicts).


## Set Methods \& Operations 🧰

| Operation/Method | Description | Example |
| :-- | :-- | :-- |
| `add(x)` | Add element `x` | `s.add(5)` |
| `remove(x)` | Remove `x`, error if not found | `s.remove(2)` |
| `discard(x)` | Remove `x`, no error if not found | `s.discard(10)` |
| `pop()` | Remove and return a random element | `s.pop()` |
| `clear()` | Remove all elements | `s.clear()` |
| `copy()` | Return a shallow copy | `s2 = s.copy()` |
| `union(other)` or `|` | All elements from both sets | `s1 | s2` |
| `intersection(other)` or `&` | Elements common to both sets | `s1 & s2` |
| `difference(other)` or `-` | Elements in `s1` not in `s2` | `s1 - s2` |
| `symmetric_difference(other)` or `^` | Elements in one set or the other, not both | `s1 ^ s2` |
| `issubset(other)` | Is `s1` a subset of `s2`? | `s1.issubset(s2)` |
| `issuperset(other)` | Is `s1` a superset of `s2`? | `s1.issuperset(s2)` |
| `isdisjoint(other)` | Do sets have no elements in common? | `s1.isdisjoint(s2)` |

## Set Operations in Action 🚦

```python
a = {1, 2, 3}
b = {3, 4, 5}

print(a | b)  # Union: {1, 2, 3, 4, 5}
print(a & b)  # Intersection: {3}
print(a - b)  # Difference: {1, 2}
print(a ^ b)  # Symmetric Difference: {1, 2, 4, 5}
```


## Set Comprehensions 🧑‍🎨

Just like list comprehensions, but with `{}`:

```python
squares = {x*x for x in range(5)}
print(squares)  # Output: {0, 1, 4, 9, 16}
```


## Limitations 🚫

- **No indexing/slicing:**
You cannot access elements by position.
- **Only immutable items:**
You can’t put lists or dictionaries in a set, but you can use tuples.
- **Unordered:**
The order of elements is not preserved.


## Practice Questions \& Solutions 📝

### 1️⃣ Create a set with the numbers 1, 2, 2, 3, 4. How many elements will it have?

<details>
<summary>Show Solution</summary>

```python
s = {1, 2, 2, 3, 4}
print(len(s))  # Output: 4
```
Because sets remove duplicates!
</details>

### 2️⃣ Add the number 5 to the set `{1, 2, 3}`.

<details>
<summary>Show Solution</summary>

```python
s = {1, 2, 3}
s.add(5)
print(s)  # Output: {1, 2, 3, 5}
```
</details>

### 3️⃣ Remove 2 from the set `{1, 2, 3}` using both `remove()` and `discard()`. What happens if you try to remove 10?

<details>
<summary>Show Solution</summary>

```python
s = {1, 2, 3}
s.remove(2)     # Works fine
# s.remove(10)  # Raises KeyError

s = {1, 2, 3}
s.discard(10)   # No error, does nothing
```
</details>

### 4️⃣ Find the intersection and union of `{1, 2, 3}` and `{2, 3, 4}`.

<details>
<summary>Show Solution</summary>

```python
a = {1, 2, 3}
b = {2, 3, 4}
print(a & b)  # Intersection: {2, 3}
print(a | b)  # Union: {1, 2, 3, 4}
```
</details>

### 5️⃣ Use set comprehension to create a set of even numbers from 0 to 10.

<details>
<summary>Show Solution</summary>

```python
evens = {x for x in range(11) if x % 2 == 0}
print(evens)  # Output: {0, 2, 4, 6, 8, 10}
```
</details>

## When to Use Sets? 🤔

- When you need to store **unique items**.
- When you want to do **fast membership tests** (`x in s` is very fast).
- When you need to perform **mathematical set operations** (union, intersection, etc.).


## Key Points with Emojis 🎯

- **Sets** are **unordered** collections of **unique** items: `{a, b, c}`
- **No duplicates** allowed
- **No indexing or slicing**
- **Great for membership tests and set operations** (union, intersection, difference)
- **Mutable:** You can add or remove items

If you want to know about **frozen sets** (immutable sets) or have more questions, just ask! 😃

---
**References:**
Sets are unordered, unique collections in Python, created with curly braces or the set() function, supporting mathematical set operations and various methods for adding, removing, and testing membership[^2][^3].

<div style="text-align: center">⁂</div>

[^1]: Learning_Python.pdf

[^2]: OER-202301_Wang_2023-Introduction-to-Computer-Programming-with-Python.pdf

[^3]: python-handbook.pdf

[^4]: Python-IITM-Foundational-Course.pdf

[^5]: Python-Cheatsheet-2024.pdf

[^6]: python_tutorial.pdf

[^7]: Python-Cheat-Sheet.pdf

[^8]: https://www.w3schools.com/python/python_sets.asp

[^9]: https://www.tutorialspoint.com/python/python_set_methods.htm

[^10]: https://www.linode.com/docs/guides/python-sets/

[^11]: https://www.programiz.com/python-programming/set

[^12]: https://www.geeksforgeeks.org/python/sets-in-python/

[^13]: https://realpython.com/python-sets/

[^14]: https://www.tutorialspoint.com/python/python_sets.htm

[^15]: https://www.geeksforgeeks.org/python/python-sets/

[^16]: https://www.geeksforgeeks.org/python/python-set-methods/

[^17]: https://www.freecodecamp.org/news/python-set-operations-explained-with-examples/

