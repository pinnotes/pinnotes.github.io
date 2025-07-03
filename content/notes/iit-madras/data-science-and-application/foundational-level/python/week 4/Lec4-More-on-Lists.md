---
title: More on Lists
date: 2025-05-08
weight: 44
---

Let’s dive deeper into **lists** in Python! 📝🐍

## What is a List? 📋

A **list** is an **ordered**, **mutable** collection of items. Lists can hold items of **any type** (numbers, strings, even other lists) and can be changed after creation (add, remove, or modify elements)[^1].

- **Ordered:** Items keep their position.
- **Mutable:** You can change the content.
- **Heterogeneous:** Can contain different data types.


## Creating a List 🛠️

```python
my_list = [1, "apple", 3.14, True]
```


## Accessing List Elements 🔍

- **Indexing** (starts at 0):

```python
print(my_list[^1])  # Output: apple
```

- **Negative Indexing** (from the end):

```python
print(my_list[-1])  # Output: True
```

- **Slicing**:

```python
print(my_list[1:3])  # Output: ['apple', 3.14]
```


## Modifying Lists ✏️

- **Change an element:**

```python
my_list[^0] = 100
print(my_list)  # Output: [100, 'apple', 3.14, True]
```

- **Add elements:**
    - `append()` – Adds to the end
    - `insert()` – Adds at a specific position
    - `extend()` – Adds all elements from another list

```python
my_list.append("banana")
my_list.insert(1, "orange")
my_list.extend([7, 8])
```

- **Remove elements:**
    - `remove()` – Removes by value
    - `pop()` – Removes by index (default: last)
    - `del` – Deletes by index or slice

```python
my_list.remove("apple")
my_list.pop(2)
del my_list[^0]
```


## Common List Methods 🧰

| Method | What it does | Example |
| :-- | :-- | :-- |
| `append(x)` | Adds `x` to end | `my_list.append(5)` |
| `insert(i, x)` | Inserts `x` at index `i` | `my_list.insert(1, "hi")` |
| `extend(lst)` | Adds all items from `lst` | `my_list.extend([^2][^1])` |
| `remove(x)` | Removes first occurrence of `x` | `my_list.remove("apple")` |
| `pop([i])` | Removes \& returns item at index `i` (default -1) | `my_list.pop()` |
| `sort()` | Sorts the list in place | `my_list.sort()` |
| `reverse()` | Reverses the list in place | `my_list.reverse()` |
| `count(x)` | Counts occurrences of `x` | `my_list.count(3.14)` |
| `index(x)` | Returns index of first occurrence of `x` | `my_list.index("banana")` |

## List Operations ⚡

- **Concatenation:** `a + b`
- **Repetition:** `a * 3`
- **Membership:** `x in a`
- **Length:** `len(a)`
- **Iteration:** `for item in a:`


## List Comprehensions 🏗️

A compact way to create lists:

```python
squares = [x*x for x in range(5)]
print(squares)  # Output: [0, 1, 4, 9, 16]
```


## Practice Questions \& Solutions 📝

### 1️⃣ Create a list of numbers from 1 to 5. Print the third element.

<details>
<summary>Show Solution</summary>

```python
numbers = [1, 2, 3, 4, 5]
print(numbers[^2])  # Output: 3
```
</details>

### 2️⃣ Add "grape" to the end of this list: `fruits = ["apple", "banana"]`

<details>
<summary>Show Solution</summary>

```python
fruits = ["apple", "banana"]
fruits.append("grape")
print(fruits)  # Output: ['apple', 'banana', 'grape']
```
</details>

### 3️⃣ Remove the first element from the list: `data = `

<details>
<summary>Show Solution</summary>

```python
data = [10, 20, 30, 40]
del data[^0]
print(data)  # Output: [20, 30, 40]
```
</details>

### 4️⃣ Sort the list `nums = [^3][^2][^4][^1]` in ascending order.

<details>
<summary>Show Solution</summary>

```python
nums = [3, 1, 4, 2]
nums.sort()
print(nums)  # Output: [1, 2, 3, 4]
```
</details>

### 5️⃣ Use a list comprehension to create a list of even numbers from 0 to 10.

<details>
<summary>Show Solution</summary>

```python
evens = [x for x in range(11) if x % 2 == 0]
print(evens)  # Output: [0, 2, 4, 6, 8, 10]
```
</details>

## Key Points with Emojis 🎯

- **Lists** are **mutable** and **ordered** 📚
- Use `[]` to create, and methods like `append()`, `remove()`, `sort()`
- Can contain **any type** of data, even other lists 🥗
- **Indexing** starts at 0
- **List comprehensions** make building lists easy! 🏗️

If you want to know more or try advanced list tricks, just ask! 😊

---
**References:**
Lists are mutable, ordered, and can hold any type of object. They support indexing, slicing, concatenation, repetition, and many built-in methods for modification and querying[^2][^1].

<div style="text-align: center">⁂</div>

[^1]: python_tutorial.pdf

[^2]: Learning_Python.pdf

[^3]: python-handbook.pdf

[^4]: Python-Cheatsheet-2024.pdf

[^5]: Python-IITM-Foundational-Course.pdf

[^6]: Python-Cheat-Sheet.pdf

[^7]: Introduction_to_Python_Programming_-_WEB.pdf

