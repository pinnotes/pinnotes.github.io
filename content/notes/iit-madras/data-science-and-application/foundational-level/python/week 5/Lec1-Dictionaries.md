---
title: Dictionaries
date: 2025-05-08
weight: 51
---

Let’s dive into **Dictionaries in Python** 🗝️📚 with clear explanations, emojis, and practice questions (with solutions)!

## What is a Dictionary? 🤔

A **dictionary** in Python is a **mutable** (changeable) data structure that stores data as **key-value pairs**. Think of it like a real dictionary: you look up a word (key) to get its definition (value)[^1][^2].

- **Keys**: Must be unique and hashable (like strings, numbers, or tuples of immutables).
- **Values**: Can be any data type (even lists or other dictionaries).
- **Syntax**: Curly braces `{}` and colon `:` separate keys and values.

```python
# Example dictionary
student = {
    "name": "Alice",
    "age": 20,
    "major": "CS"
}
```

📝 *Here, "name", "age", and "major" are keys; "Alice", 20, and "CS" are values.*

## Key Features of Dictionaries 🏆

- **Unordered**: Items are not stored in a specific order (though Python 3.7+ preserves insertion order).
- **Mutable**: You can add, change, or remove items after creation.
- **No Duplicate Keys**: Each key must be unique. If you assign a value to an existing key, it will overwrite the old value[^2].
- **Fast Lookups**: Accessing a value by key is very quick.


## Creating Dictionaries 🛠️

**Empty dictionary:**

```python
my_dict = {}
# or
my_dict = dict()
```

**With initial values:**

```python
person = {"name": "Bob", "age": 25}
```

**From a list of tuples:**

```python
pairs = [("a", 1), ("b", 2)]
my_dict = dict(pairs)
```


## Accessing Items 🔎

- **By key:**

```python
print(person["name"])  # Output: Bob
```

If the key doesn’t exist, you get a `KeyError`.
- **Using `.get()` method:**

```python
print(person.get("age"))         # Output: 25
print(person.get("height", 0))   # Output: 0 (default value)
```

Safer, as it returns `None` or a default value if the key is missing[^2].


## Modifying Dictionaries ✏️

**Add or update a key-value pair:**

```python
person["city"] = "Delhi"  # Adds a new key
person["age"] = 26        # Updates existing key
```

**Remove an item:**

```python
del person["city"]         # Removes key 'city'
removed = person.pop("age") # Removes 'age' and returns its value
```


## Dictionary Methods 🛠️

| Method | Description | Example |
| :-- | :-- | :-- |
| `.keys()` | Returns all keys | `person.keys()` |
| `.values()` | Returns all values | `person.values()` |
| `.items()` | Returns all key-value pairs (tuples) | `person.items()` |
| `.update()` | Updates dictionary with another dict | `person.update({"age": 27})` |
| `.get()` | Gets value for key (safe) | `person.get("age", 0)` |
| `.pop()` | Removes key and returns its value | `person.pop("age")` |

## Looping Through Dictionaries 🔄

**Loop through keys:**

```python
for key in person:
    print(key)
```

**Loop through values:**

```python
for value in person.values():
    print(value)
```

**Loop through key-value pairs:**

```python
for key, value in person.items():
    print(f"{key}: {value}")
```


## Practice Questions with Solutions 🏋️‍♂️

### 1. Create a dictionary with your name, age, and city. Print each value.

```python
my_info = {"name": "Rahul", "age": 21, "city": "Mumbai"}
print(my_info["name"])  # Rahul
print(my_info["age"])   # 21
print(my_info["city"])  # Mumbai
```


### 2. Add a new key "country" with value "India" to your dictionary. Then, remove the "city" key.

```python
my_info["country"] = "India"
del my_info["city"]
print(my_info)  # {'name': 'Rahul', 'age': 21, 'country': 'India'}
```


### 3. Given the dictionary: `fruits = {"apple": 2, "banana": 3, "orange": 1}`

Write code to:

- Print all keys
- Print all values
- Print all key-value pairs

```python
fruits = {"apple": 2, "banana": 3, "orange": 1}
print(fruits.keys())   # dict_keys(['apple', 'banana', 'orange'])
print(fruits.values()) # dict_values([2, 3, 1])
print(fruits.items())  # dict_items([('apple', 2), ('banana', 3), ('orange', 1)])
```


### 4. Write a function that counts the frequency of each letter in a string and returns a dictionary.

```python
def letter_count(s):
    freq = {}
    for char in s:
        if char in freq:
            freq[char] += 1
        else:
            freq[char] = 1
    return freq

print(letter_count("banana"))  # {'b': 1, 'a': 3, 'n': 2}
```


### 5. Check if "apple" is a key in the `fruits` dictionary.

```python
if "apple" in fruits:
    print("Yes, apple is in the dictionary!")
else:
    print("No, apple is not found.")
```


## Step-by-Step Example: Counting Unique Characters

**Problem:** Count the number of unique characters in a string using a dictionary.

**Step 1:** Create an empty dictionary
**Step 2:** Loop through each character in the string
**Step 3:** If character is not in dictionary, add it
**Step 4:** Print the length of the dictionary (number of unique characters)

```python
s = "hello world"
unique_chars = {}
for char in s:
    unique_chars[char] = 1  # Value doesn't matter here
print(len(unique_chars))  # Output: 8 (h, e, l, o,  , w, r, d)
```


## Common Pitfalls ⚠️

- **Keys must be hashable**: You can't use lists or other dictionaries as keys.
- **Accessing a missing key with `[]` raises KeyError**: Use `.get()` to avoid errors.
- **Duplicate keys are not allowed**: The last value assigned to a key will overwrite previous ones.


## Dictionary Comprehensions 🧠

You can create dictionaries in a single line using a comprehension:

```python
squares = {x: x*x for x in range(1, 6)}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```


## Summary Table: Lists vs Dictionaries

| Feature | List | Dictionary |
| :-- | :-- | :-- |
| Access by | Index (position) | Key (any hashable object) |
| Syntax | `[^1][^3][^2]` | `{"a": 1, "b": 2}` |
| Mutable | Yes | Yes |
| Ordered | Yes (since Python 3.7) | Yes (since Python 3.7) |
| Duplicate keys? | N/A | No |

## Try It Yourself! 🚀

**Q:** Create a dictionary for three students with their names as keys and their grades as values. Then, print the average grade.

**Solution:**

```python
grades = {"Anil": 85, "Bina": 92, "Chetan": 78}
average = sum(grades.values()) / len(grades)
print(f"Average grade: {average}")
```

**Dictionaries** are super useful for organizing and accessing data quickly by a unique key! Practice using them in your projects and you'll master them in no time! 😃🔑[^1][^3][^2]

<div style="text-align: center">⁂</div>

[^1]: itpacs_cafiero.pdf

[^2]: Introduction_to_Python_Programming_-_WEB.pdf

[^3]: Learning_Python.pdf

[^4]: thinkpython2.pdf

[^5]: Python-Cheatsheet-2024.pdf

[^6]: OER-202301_Wang_2023-Introduction-to-Computer-Programming-with-Python.pdf

[^7]: pythonlearn.pdf

