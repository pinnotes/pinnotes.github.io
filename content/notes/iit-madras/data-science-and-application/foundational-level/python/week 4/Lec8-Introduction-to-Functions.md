---
title: Introduction to Functions
date: 2025-05-08
weight: 48
---

Let’s get started with an **introduction to functions in Python**! 🚀🐍

## What is a Function? 🤔

A **function** is a named block of code that performs a specific task.
You can use a function whenever you need to repeat the same action multiple times in your program, or to organize your code into smaller, manageable pieces.
Functions help make your code **reusable**, **modular**, and **easier to read**![^1][^2].

### Why Use Functions? 🎯

- **Avoid repetition:** Write code once, use it many times.
- **Organize code:** Break big problems into smaller, logical steps.
- **Make code reusable:** Use the same function in different places.
- **Easier to test and debug:** Fix issues in one place.


## Defining a Function 🛠️

You define a function using the **def** keyword:

```python
def greet():
    print("Hello, world!")
```

- **def**: Tells Python you’re defining a function.
- **greet**: The function’s name.
- **()**: Parentheses (can hold parameters).
- **: (colon)**: Start of the function’s code block.
- **Indented code**: The body of the function.


## Calling (Using) a Function 📞

To use (call) the function, just write its name followed by parentheses:

```python
greet()  # Output: Hello, world!
```


## Functions with Parameters and Return Values 🎁

You can pass information to a function using **parameters**:

```python
def greet(name):
    print("Hello,", name)

greet("Alice")  # Output: Hello, Alice
```

A function can also **return** a value:

```python
def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # Output: 8
```

- **return** sends a value back to where the function was called.


## Built-in vs. User-defined Functions 🏗️

- **Built-in functions**: Already provided by Python (like `print()`, `len()`, `sum()`)
- **User-defined functions**: You create them for your own needs.


## Anatomy of a Function 🧩

| Part | Example | Description |
| :-- | :-- | :-- |
| Name | `def greet():` | How you call the function |
| Parameters | `(name)` | Data you give to the function |
| Body | `print("Hello")` | The code that runs when called |
| Return value | `return x` | What the function gives back (optional) |

## Practice Questions \& Solutions 📝

### 1️⃣ Write a function that prints "Python is fun!"

<details>
<summary>Show Solution</summary>

```python
def say_fun():
    print("Python is fun!")

say_fun()
```
</details>

### 2️⃣ Write a function that takes a number and returns its square.

<details>
<summary>Show Solution</summary>

```python
def square(x):
    return x * x

print(square(4))  # Output: 16
```
</details>

### 3️⃣ Write a function that takes two numbers and prints their sum.

<details>
<summary>Show Solution</summary>

```python
def print_sum(a, b):
    print(a + b)

print_sum(3, 7)  # Output: 10
```
</details>

### 4️⃣ What happens if you call a function without parentheses?

<details>
<summary>Show Solution</summary>

You get a reference to the function object, not its result!  
Example:
```python
def greet():
    print("Hi!")
print(greet)  # Output: <function greet at ...>
```
</details>

### 5️⃣ Write a function that returns both the sum and product of two numbers.

<details>
<summary>Show Solution</summary>

```python
def sum_and_product(a, b):
    return a + b, a * b

s, p = sum_and_product(2, 5)
print(s, p)  # Output: 7 10
```
</details>

## Key Points with Emojis 🎯

- **Functions** = reusable blocks of code 🧱
- Use **def** to define, **()** to call
- Can take **parameters** and **return** values
- Make code cleaner, shorter, and easier to manage!

If you want to learn about **default values**, **keyword arguments**, **recursion**, or **lambda (anonymous) functions**, just ask! 😃

**References:**
Functions are named blocks of code that can take parameters, may return values, and help organize, reuse, and structure your programs[^1][^2].
You define them with `def`, call them with `()`, and use them to make your code modular and efficient.

<div style="text-align: center">⁂</div>

[^1]: OER-202301_Wang_2023-Introduction-to-Computer-Programming-with-Python.pdf

[^2]: itpacs_cafiero.pdf

[^3]: Introduction-to-Data-Science-AAgah-20240620-1.pdf

[^4]: Introduction_to_Python_Programming_-_WEB.pdf

[^5]: Learning_Python.pdf

[^6]: Python-Cheatsheet-2024.pdf

