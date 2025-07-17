---
title: Program - Vowels Uppercase, Others Lowercase
subtitle: Section 2 | Problem 2
description: Let's create a fun Python program for your task! 😃
categories: OOPE Exam
---

---

## 📝 Program: Vowels Uppercase, Others Lowercase

Let's create a fun Python program for your task! 😃

### 🚩 Problem Statement

- Read a passage of **n lines**.
- For each line:
    - Convert every vowel (`a`, `e`, `i`, `o`, `u`) to **uppercase**.
    - Convert all other characters to **lowercase**.


### 🧑‍💻 Full Solution

```python
def transform_line(line):
    result = ''
    for char in line:
        # Check if the character is a vowel
        if char.lower() in 'aeiou':
            result += char.upper()
        else:
            result += char.lower()
    return result

n = int(input())
lines = []

for _ in range(n):
    lines.append(input())

for line in lines:
    print(transform_line(line))
```


### 🔍 Step-by-Step Explanation

1. **`transform_line` function**:
    - Goes through each character.
    - If it's a *vowel* (`a`, `e`, `i`, `o`, `u`), make it uppercase.
    - Otherwise, make it lowercase.
2. **Input Handling**:
    - First, take the number of lines `n`.
    - Then, read the next `n` lines.
3. **Apply transformation**:
    - Process each line using `transform_line`.
    - Print the transformed line.

### 💡 Example

#### **Input**

```
2
Welcome To Python
Programming is fun!
```


#### **Output**

```
wElcOmE tO pythOn
prOgrAmmIng Is fUn!
```


### 🧪 Practice Questions

Try running the program with these practice cases!

#### Practice 1

**Input:**

```
3
abcde
AEIOU
Hello, World!
```

**Expected Output:**

```
AbcdE
AEIOU
hEllO, wOrld!
```


#### Practice 2

**Input:**

```
1
The sky IS Blue!
```

**Expected Output:**

```
thE sky Is blUE!
```


### ✨ Tips

- Use `char.lower()` to check for vowels, so the function works with both lowercase and uppercase.
- Use `char.upper()` and `char.lower()` for conversion as needed.

Happy Coding! 🚀

