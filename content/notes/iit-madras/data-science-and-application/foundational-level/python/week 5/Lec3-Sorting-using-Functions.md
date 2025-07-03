---
title: Sorting Using Functions
date: 2025-05-08
weight: 53
---

Let’s explore **sorting using functions in Python** 🏅🔢—with easy explanations, step-by-step examples, and practice questions (with solutions)! 🚦

## Why Sort? 🤔

Sorting helps you organize data—like arranging numbers from smallest to largest, or names alphabetically. Python has built-in ways to sort, but you can also write your own functions for custom sorting!

## 1️⃣ Basic Sorting with Built-in Functions

### **Using `sorted()` and `.sort()`**

- `sorted(sequence)` returns a new sorted list from any sequence (list, tuple, etc.).
- `.sort()` sorts a list in place (modifies the original list).

```python
numbers = [4, 2, 7, 1]
print(sorted(numbers))  # [1, 2, 4, 7]
numbers.sort()
print(numbers)          # [1, 2, 4, 7]
```

*You can use `sorted()` with any sequence, but `.sort()` is only for lists!*[^1]

## 2️⃣ Sorting with Functions ✨

You can write your own **sorting function** for special needs!

### Example: Selection Sort (Custom Function)

```python
def selection_sort(lst):
    result = []
    while len(lst) > 0:
        min_val = min(lst)
        result.append(min_val)
        lst.remove(min_val)
    return result

numbers = [24, 6, 32, 78, 24, 84]
print(selection_sort(numbers))  # [6, 24, 24, 32, 78, 84]
```

*This function finds the smallest item, adds it to a new list, and removes it from the original—repeating until sorted.*[^2]

## 3️⃣ Sorting Dictionaries by Key or Value

Dictionaries are **unordered**, but you can sort them for display!

### Sort by Key

```python
d = {'b': 1, 'a': 10, 'c': 22}
for key in sorted(d):
    print(key, d[key])
# Output:
# a 10
# b 1
# c 22
```

*This loops through keys in sorted order.*[^3][^1]

### Sort by Value

```python
d = {'a': 10, 'b': 1, 'c': 22}
lst = []
for key, val in d.items():
    lst.append((val, key))  # (value, key) tuples
lst.sort(reverse=True)
for val, key in lst:
    print(key, val)
# Output:
# c 22
# a 10
# b 1
```

*By making (value, key) tuples, you can sort by value easily!*[^1]

## 4️⃣ Sorting with `key` Functions

The `sorted()` function can take a `key` argument—a function that tells Python how to sort.

### Example: Sort Words by Length

```python
words = ['apple', 'banana', 'kiwi', 'cherry']
sorted_words = sorted(words, key=len)
print(sorted_words)  # ['kiwi', 'apple', 'banana', 'cherry']
```

*Here, `key=len` tells Python to sort by word length.*

### Example: Sort Tuples by Second Element

```python
pairs = [(1, 'b'), (3, 'a'), (2, 'c')]
sorted_pairs = sorted(pairs, key=lambda x: x[^1])
print(sorted_pairs)  # [(3, 'a'), (1, 'b'), (2, 'c')]
```

*Lambda functions are great for custom sorting!*[^1]

## 5️⃣ Practice Questions with Solutions 💡

### Q1. Sort a list of numbers in descending order using a function.

```python
def sort_desc(lst):
    return sorted(lst, reverse=True)

nums = [3, 1, 4, 2]
print(sort_desc(nums))  # [4, 3, 2, 1]
```


### Q2. Given a dictionary of students and marks, print names sorted by marks (highest first).

```python
students = {'Anil': 85, 'Bina': 78, 'Chetan': 92, 'Deepa': 67}
lst = []
for name, marks in students.items():
    lst.append((marks, name))
lst.sort(reverse=True)
for marks, name in lst:
    print(name, marks)
# Output:
# Chetan 92
# Anil 85
# Bina 78
# Deepa 67
```

*This uses the decorate-sort-undecorate (DSU) pattern!*[^1]

### Q3. Sort a list of words by their last letter using a function.

```python
def sort_by_last_letter(words):
    return sorted(words, key=lambda word: word[-1])

words = ['apple', 'banana', 'kiwi', 'cherry']
print(sort_by_last_letter(words))  # ['banana', 'apple', 'cherry', 'kiwi']
```


## 6️⃣ Step-by-Step: Sorting Dictionary by Value

**Goal:** Print dictionary items sorted by value (highest to lowest).

**Step 1:** Make a list of (value, key) tuples
**Step 2:** Sort the list in reverse order
**Step 3:** Print key and value

```python
d = {'a': 10, 'b': 1, 'c': 22}
lst = []
for key, val in d.items():
    lst.append((val, key))
lst.sort(reverse=True)
for val, key in lst:
    print(key, val)
# Output: c 22, a 10, b 1
```

*[^1]*

## 🧩 Try It Yourself!

**Q:** Write a function to sort a list of tuples by the second element.

<details>
<summary>Solution</summary>

```python
def sort_by_second(tuples):
    return sorted(tuples, key=lambda x: x[^1])

pairs = [(5, 2), (1, 3), (4, 1)]
print(sort_by_second(pairs))  # [(4, 1), (5, 2), (1, 3)]
```
</details>

## ⭐ Key Takeaways

- Use **`sorted()`** for any sequence, **`.sort()`** for lists.
- For custom sorting, use the **`key`** argument with a function or lambda.
- To sort dictionaries, convert items to a list of tuples, then sort.
- Writing your own sorting function helps you learn how sorting works!

Keep practicing and try sorting different types of data—it's a super useful skill! 🥇🧑‍💻

<div style="text-align: center">⁂</div>

[^1]: pythonlearn.pdf

[^2]: Python-IITM-Foundational-Course.pdf

[^3]: Learning_Python.pdf

[^4]: Python-Cheat-Sheet.pdf

[^5]: thinkpython2.pdf

[^6]: Introduction_to_Python_Programming_-_WEB.pdf

[^7]: OER-202301_Wang_2023-Introduction-to-Computer-Programming-with-Python.pdf

[^8]: python-handbook.pdf

[^9]: https://docs.python.org/3/howto/sorting.html

[^10]: https://www.w3schools.com/python/ref_func_sorted.asp

[^11]: https://www.w3schools.com/python/ref_list_sort.asp

[^12]: https://www.geeksforgeeks.org/python/sort-in-python/

[^13]: https://diveintopython.org/functions/built-in/sorted

[^14]: https://docs.python.org/3.10/howto/sorting.html

[^15]: https://developers.google.com/edu/python/sorting

[^16]: https://www.programiz.com/python-programming/methods/list/sort

[^17]: https://labex.io/tutorials/python-how-to-use-the-built-in-sorted-function-in-python-programming-417843

[^18]: https://www.freecodecamp.org/news/python-sort-how-to-sort-a-list-in-python/

