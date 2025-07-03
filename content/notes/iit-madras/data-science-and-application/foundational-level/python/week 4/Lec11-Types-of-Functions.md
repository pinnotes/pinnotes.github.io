---
title: Types of Functions
date: 2025-05-08
weight: 50.5
---

Here’s a clear and friendly guide to the **types of functions in Python**, with examples, emojis, and practice questions! 🚀

## 1. **Built-in Functions** 🏗️

These are functions that Python provides by default—no need to define them yourself!

**Examples:**

```python
print("Hello!")      # Prints to the screen
len([1, 2, 3])       # Returns length of a list
max(4, 7, 2)         # Returns the largest value
```


## 2. **User-defined Functions** ✍️

These are functions you create using the `def` keyword.

**Example:**

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Output: Hello, Alice!
```


## 3. **Fruitful Functions (Return a Value)** 🍎

These functions **return** a value using the `return` statement.

**Example:**

```python
def add(a, b):
    return a + b

result = add(2, 3)
print(result)  # Output: 5
```

- Also called **non-void functions**[^1].


## 4. **Void Functions (No Return Value)** 🚫

These functions **do not return a value**. They might print something or perform an action.

**Example:**

```python
def print_hello():
    print("Hello!")

x = print_hello()  # Output: Hello!
print(x)           # Output: None
```

- The special value `None` is returned automatically[^1].


## 5. **Anonymous (Lambda) Functions** ⚡

Quick, unnamed functions defined with the `lambda` keyword.

**Example:**

```python
double = lambda x: x * 2
print(double(5))  # Output: 10
```


## 6. **Recursive Functions** 🔁

Functions that **call themselves** to solve a problem.

**Example:**

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))  # Output: 120
```


## 7. **Module Functions** 📦

Functions defined **inside a module** (a separate Python file) and imported for use.

**Example:**

```python
import math
print(math.sqrt(16))  # Output: 4.0
```

- `sqrt()` is a function in the `math` module[^2].


## 8. **Methods** 🛠️

Functions that **belong to objects** (like lists, strings, etc.).

**Example:**

```python
my_list = [1, 2, 3]
my_list.append(4)  # append() is a list method
```

- Methods are called with a dot, like `object.method()`[^3].


## Practice Questions \& Solutions 📝

### 1️⃣ Write a fruitful function that returns the square of a number.

<details>
<summary>Show Solution</summary>

```python
def square(x):
    return x * x

print(square(6))  # Output: 36
```
</details>

### 2️⃣ Write a void function that prints "Good morning!".

<details>
<summary>Show Solution</summary>

```python
def say_morning():
    print("Good morning!")

say_morning()  # Output: Good morning!
```
</details>

### 3️⃣ Use a lambda function to triple a number.

<details>
<summary>Show Solution</summary>

```python
triple = lambda x: x * 3
print(triple(4))  # Output: 12
```
</details>

### 4️⃣ What type of function is `math.sin()`? How do you use it?

<details>
<summary>Show Solution</summary>

It is a **module function** from the `math` module.  
Example:
```python
import math
print(math.sin(0))  # Output: 0.0
```
</details>

### 5️⃣ Write a recursive function to sum all numbers from 1 to n.

<details>
<summary>Show Solution</summary>

```python
def sum_to_n(n):
    if n == 1:
        return 1
    else:
        return n + sum_to_n(n-1)

print(sum_to_n(5))  # Output: 15
```
</details>

## Key Points with Emojis 🎯

- **Built-in**: Provided by Python 🏗️
- **User-defined**: You create them ✍️
- **Fruitful**: Return a value 🍎
- **Void**: No return 🚫
- **Lambda**: Anonymous, quick ⚡
- **Recursive**: Call themselves 🔁
- **Module**: From imported files 📦
- **Methods**: Belong to objects 🛠️

If you want more details or examples for any type, just ask! 😃

---
**References:**

- Fruitful (returning value) and void (no return) functions are common distinctions in Python[^1].
- Module functions are imported from modules like `math`[^2].
- Methods are functions bound to objects, such as strings and lists[^3].

<div style="text-align: center">⁂</div>

[^1]: thinkpython2.pdf

[^2]: python_tutorial.pdf

[^3]: itpacs_cafiero.pdf

[^4]: Learning_Python.pdf

[^5]: pythonlearn.pdf

[^6]: Introduction_to_Python_Programming_-_WEB.pdf

[^7]: python-handbook.pdf

[^8]: https://www.geeksforgeeks.org/python/python-functions/

[^9]: https://www.simplilearn.com/tutorials/python-tutorial/python-functions

[^10]: https://www.w3schools.com/python/python_functions.asp

[^11]: https://www.shiksha.com/online-courses/articles/types-of-functions-in-python/

