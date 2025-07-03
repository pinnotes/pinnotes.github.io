---
title: More on Dictionaries
date: 2025-05-08
weight: 52
---

<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# More on Dictionaries

Let’s explore **more advanced concepts and uses of Python dictionaries** 🗝️🚀, with clear explanations, step-by-step examples, and practice questions (with solutions)!

## 🧠 What Makes Dictionaries Powerful?

- **Dictionaries are mappings**: Each key maps to a value, allowing fast lookups without knowing the position/index[^1][^2].
- **Keys must be hashable**: This means keys must be immutable (like strings, numbers, or tuples of immutables)[^2].
- **Values can be anything**: Numbers, strings, lists, even other dictionaries!


## 🛠️ Advanced Dictionary Features

### 1. **Creating and Modifying Dictionaries**

```python
# Creating a dictionary
eng2sp = {"one": "uno", "two": "dos", "three": "tres"}

# Adding or updating a key-value pair
eng2sp["four"] = "cuatro"  # adds new key
eng2sp["one"] = "uno!"     # updates existing key

# Deleting a key
del eng2sp["four"]

# Using pop to remove and get a value
val = eng2sp.pop("two")  # val = "dos"
```

*If you try to access a key that doesn't exist, you'll get a `KeyError`!*[^2]

### 2. **Looping Through Dictionaries**

```python
d = {"a": 1, "b": 2, "c": 3}

# Loop through keys
for key in d:
    print(key)

# Loop through values
for value in d.values():
    print(value)

# Loop through key-value pairs
for key, value in d.items():
    print(f"{key} => {value}")
```

*`.items()` gives you both the key and value at once!*[^2]

### 3. **Dictionary as a Counter (Histogram)**

Dictionaries are perfect for counting things, like letters in a word!

```python
def letter_count(s):
    d = {}
    for char in s:
        d[char] = d.get(char, 0) + 1
    return d

print(letter_count("banana"))  # {'b': 1, 'a': 3, 'n': 2}
```

*The `.get(key, default)` method avoids KeyError and provides a default value if the key is missing.*[^1][^2]

### 4. **Reverse Lookup**

Find a key from a value (note: values may not be unique!):

```python
def reverse_lookup(d, v):
    for key in d:
        if d[key] == v:
            return key
    raise LookupError("Value does not appear in the dictionary")
```

*This will return the first key it finds with the given value, or raise an error if not found.*[^1]

### 5. **Dictionaries with Lists and Tuples**

- **Lists as values**: Useful for grouping multiple items under a key.
- **Tuples as keys**: Only if all elements are immutable.

```python
# List as a value
grades = {"Rahul": [90, 92], "Anil": [85, 88]}

# Tuple as a key
directory = {("Sharma", "Anil"): "9876543210"}
```

*You can't use lists or dictionaries as keys because they are mutable and not hashable!*[^1][^2]

### 6. **Dictionary Comprehensions**

Quickly build a dictionary from a sequence:

```python
# Squares of numbers 1-5
squares = {x: x**2 for x in range(1, 6)}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```


### 7. **Membership Testing**

Check if a key exists:

```python
d = {"a": 1, "b": 2}
print("a" in d)      # True
print("z" not in d)  # True
```

*Membership tests only check keys, not values!*[^1][^2]

## ⚠️ Common Dictionary Errors

| Error | Cause \& Example | How to Avoid/Fix |
| :-- | :-- | :-- |
| KeyError | Accessing a key that doesn't exist | Use `.get()` or check with `in` |
| TypeError | Using unhashable type (like list) as a key | Only use immutable keys |
| ValueError | Using wrong type/value in some methods | Check your data types |

## 📝 Practice Questions with Solutions

### 1. **Count Word Frequency in a Sentence**

```python
sentence = "to be or not to be"
def word_histogram(s):
    d = {}
    for word in s.split():
        d[word] = d.get(word, 0) + 1
    return d

print(word_histogram(sentence))  # {'to': 2, 'be': 2, 'or': 1, 'not': 1}
```


### 2. **Find All Keys with a Certain Value**

```python
d = {"a": 1, "b": 2, "c": 1, "d": 3}
def keys_with_value(d, v):
    return [k for k, val in d.items() if val == v]

print(keys_with_value(d, 1))  # ['a', 'c']
```


### 3. **Safe Value Access**

```python
d = {"x": 10, "y": 20}
print(d.get("z", "Not found"))  # Not found
```


### 4. **Using Tuples as Keys**

```python
points = {(0,0): "origin", (1,2): "A", (2,1): "B"}
print(points[(1,2)])  # A
```


### 5. **Practice: Student Grades**

**Q:** Given a dictionary of students and their grades, print the names of all students who scored above 80.

```python
grades = {"Anil": 85, "Bina": 78, "Chetan": 92, "Deepa": 67}
for student, grade in grades.items():
    if grade > 80:
        print(student)
# Output:
# Anil
# Chetan
```


## 🏆 Step-by-Step: Inverting a Dictionary

**Goal:** Swap keys and values (assume all values are unique).

```python
d = {"a": 1, "b": 2, "c": 3}
inverse = {}
for key, value in d.items():
    inverse[value] = key
print(inverse)  # {1: 'a', 2: 'b', 3: 'c'}
```

*If values are not unique, store a list of keys for each value!*[^1]

## 🧩 Try It Yourself!

**Q:** Write a function that takes a string and returns a dictionary with the count of each vowel.

<details>
<summary>Solution</summary>

```python
def vowel_count(s):
    vowels = "aeiou"
    d = {}
    for char in s.lower():
        if char in vowels:
            d[char] = d.get(char, 0) + 1
    return d

print(vowel_count("Hello World"))  # {'e': 1, 'o': 2}
```
</details>

## 🎯 Key Takeaways

- **Dictionaries are fast, flexible, and essential for real-world Python!**
- **Keys must be unique and hashable.**
- **Values can be any type—even lists or other dictionaries!**
- **Use `.get()`, `.items()`, and comprehensions for powerful, safe, and concise code.**

Keep experimenting and practicing—dictionaries are everywhere in Python programming! 🐍✨

If you want more challenges or explanations, just ask!

<div style="text-align: center">⁂</div>

[^1]: thinkpython2.pdf

[^2]: itpacs_cafiero.pdf

[^3]: pythonlearn.pdf

[^4]: OER-202301_Wang_2023-Introduction-to-Computer-Programming-with-Python.pdf

[^5]: Learning_Python.pdf

