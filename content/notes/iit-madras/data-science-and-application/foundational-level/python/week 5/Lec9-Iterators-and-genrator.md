---
title: Iterators and Generators
date: 2025-05-08
weight: 59
emoji: 🌀
---

Let’s explore **Iterators and Generators in Python** 🌀⚡—with clear explanations, step-by-step code, and practice questions (with solutions)!

## 🧩 What is an Iterator?

An **iterator** is an object that allows you to traverse through all the elements of a collection (like a list, tuple, or string), one element at a time.

- **Iterable**: Any object you can loop over (e.g., list, tuple, set, string).
- **Iterator**: An object with two methods: `__iter__()` and `__next__()`. It remembers its position during iteration.


### How to Use Iterators

```python
numbers = [1, 2, 3]
it = iter(numbers)   # Get iterator from iterable

print(next(it))  # 1
print(next(it))  # 2
print(next(it))  # 3
# print(next(it))  # Raises StopIteration error if no more items
```

*`iter()` gets the iterator; `next()` gets the next item until the end is reached.*[^1]

## ⚙️ How Iterators Work in Loops

A `for` loop in Python automatically creates an iterator from the iterable and uses `next()` to get each item until `StopIteration` is raised.[^2]

```python
for num in numbers:
    print(num)
```


## ⚡ What is a Generator?

A **generator** is a special type of iterator, created by a function with the `yield` keyword.

- **Generator function**: Uses `yield` instead of `return`.
- **Generator object**: Returned by calling a generator function; you can iterate over it just like any other iterator.


### Example: Generator Function

```python
def countdown(n):
    while n > 0:
        yield n
        n -= 1

gen = countdown(3)
print(next(gen))  # 3
print(next(gen))  # 2
print(next(gen))  # 1
# print(next(gen))  # StopIteration error
```

*Each call to `next()` resumes where the function last yielded.*[^1]

## 🔄 Difference: Iterator vs Generator

| Feature | Iterator | Generator |
| :-- | :-- | :-- |
| How created | From any iterable (using `iter()`) | From a function with `yield` |
| Memory usage | May store all data in memory | Generates values on the fly (lazy) |
| Syntax | Class with `__iter__`/`__next__` | Function with `yield` |
| Example | `iter([^1][^3][^2])` | `def gen(): yield ...` |

## 🧠 Generator Expressions

Like list comprehensions, but use `()` and generate items one by one.

```python
squares = (x*x for x in range(5))
for num in squares:
    print(num)  # 0 1 4 9 16
```

*Efficient for large data—doesn’t build the whole list in memory!*[^3]

## 📝 Practice Questions

### 1️⃣ Create an iterator for a list and print all values using `next()`.

<details>
<summary>Solution</summary>

```python
lst = [10, 20, 30]
it = iter(lst)
print(next(it))  # 10
print(next(it))  # 20
print(next(it))  # 30
```
</details>

### 2️⃣ Write a generator function that yields even numbers up to 10.

<details>
<summary>Solution</summary>

```python
def even_numbers():
    n = 0
    while n <= 10:
        yield n
        n += 2

for num in even_numbers():
    print(num)  # 0 2 4 6 8 10
```
</details>

### 3️⃣ Use a generator expression to print cubes of numbers 1 to 5.

<details>
<summary>Solution</summary>

```python
cubes = (x**3 for x in range(1, 6))
for c in cubes:
    print(c)  # 1 8 27 64 125
```
</details>

### 4️⃣ What happens if you call `next()` on an iterator after it’s exhausted?

**Answer:**
You get a `StopIteration` error.

## ⭐ Key Points

- **Iterators**: Objects that allow you to traverse through all elements, one at a time, using `iter()` and `next()`.
- **Generators**: Special iterators created with functions using `yield`. More memory-efficient for large data.
- **Generator expressions**: Like list comprehensions but lazy (produce items one by one, not all at once).
- **`for` loops**: Automatically use iterators behind the scenes.

**Practice using iterators and generators—they’re powerful tools for efficient Python code!** 🚀

---
**References:**

- Python-Cheatsheet-2024.pdf (Iterator and Generator section)[^1]
- Learning_Python.pdf (Iteration, for loops, generator expressions)[^3]
- itpacs_cafiero.pdf (Iterables, enumerate, behind-the-scenes of iteration)[^2]

<div style="text-align: center">⁂</div>

[^1]: Python-Cheatsheet-2024.pdf

[^2]: itpacs_cafiero.pdf

[^3]: Learning_Python.pdf

[^4]: pythonlearn.pdf

[^5]: thinkpython2.pdf

[^6]: OER-202301_Wang_2023-Introduction-to-Computer-Programming-with-Python.pdf

