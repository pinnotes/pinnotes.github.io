---
title: Tutorial on Functions
date: 2025-05-08
weight: 58
---

Here’s a **beginner-friendly tutorial on Functions in Python** 🐍✨—with emojis, step-by-step explanations, practice questions, and solutions!

## 🚦 What is a Function?

A **function** is a named block of code that performs a specific task.
You can use (call) a function whenever you need that task done—no need to repeat code!

- **Built-in functions:** Already available in Python (like `print()`, `len()`, `type()`)
- **User-defined functions:** You create these using the `def` keyword.


## 📝 Why Use Functions?

- **Avoid repetition:** Write code once, use it many times!
- **Organize code:** Break a big problem into smaller, manageable parts.
- **Make code reusable:** Use your functions in other programs too!


## 🛠️ How to Define and Call a Function

### 1️⃣ **Defining a Function**

```python
def greet():
    print("Hello, world!")
```

- `def` starts the function definition.
- `greet` is the function name.
- `()` are parentheses (can include parameters).
- `:` starts the function body (code inside the function).
- Indent the body (usually 4 spaces).


### 2️⃣ **Calling a Function**

```python
greet()  # Output: Hello, world!
```

*Just write the function name followed by parentheses!*

## 🎯 Functions with Parameters

Parameters let you pass information to a function.

```python
def greet(name):
    print("Hello,", name)

greet("Alice")  # Output: Hello, Alice
greet("Bob")    # Output: Hello, Bob
```

*Here, `name` is a parameter. When you call the function, you provide an argument.*

## 🔙 Functions that Return Values

Use `return` to send a value back to the caller.

```python
def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # Output: 8
```

*The function calculates and returns the sum.*

## 🧠 Local and Global Variables

- **Local variable:** Defined inside a function; used only there.
- **Global variable:** Defined outside all functions; can be used anywhere.

```python
def foo():
    x = 10  # local to foo
    print(x)

x = 5  # global
foo()      # Output: 10
print(x)   # Output: 5
```


## 💡 Practice Questions

### 1️⃣ Write a function that prints "Good morning!"

<details>
<summary>Show Solution</summary>

```python
def wish():
    print("Good morning!")

wish()  # Output: Good morning!
```
</details>

### 2️⃣ Write a function that takes two numbers and prints their product.

<details>
<summary>Show Solution</summary>

```python
def multiply(a, b):
    print(a * b)

multiply(4, 5)  # Output: 20
```
</details>

### 3️⃣ Write a function that returns the square of a number.

<details>
<summary>Show Solution</summary>

```python
def square(n):
    return n * n

print(square(7))  # Output: 49
```
</details>

### 4️⃣ Write a function that takes a string and prints it in uppercase.

<details>
<summary>Show Solution</summary>

```python
def shout(text):
    print(text.upper())

shout("hello")  # Output: HELLO
```
</details>

## 🏗️ Step-by-Step Example: Sum of a List

**Problem:** Write a function that takes a list of numbers and returns their sum.

**Step 1:** Define the function with a parameter for the list.
**Step 2:** Initialize a total variable to 0.
**Step 3:** Loop through each number in the list and add it to total.
**Step 4:** Return the total.

```python
def list_sum(numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(list_sum([1, 2, 3, 4]))  # Output: 10
```


## ⭐ Key Points

- Use `def` to define a function.
- Call a function by its name with parentheses.
- Use parameters to pass data into functions.
- Use `return` to send data back from a function.
- Functions help you organize and reuse code.

**Try making your own functions for daily tasks—practice is the best way to learn!** 😃🧑‍💻

*References:*

- [Think Python, Chapter 3][^1]
- [Python-IITM-Foundational-Course.pdf][^2]

<div style="text-align: center">⁂</div>

[^1]: thinkpython2.pdf

[^2]: Python-IITM-Foundational-Course.pdf

[^3]: Learning_Python.pdf

[^4]: OER-202301_Wang_2023-Introduction-to-Computer-Programming-with-Python.pdf

[^5]: Introduction_to_Python_Programming_-_WEB.pdf

[^6]: Python-Cheat-Sheet.pdf

[^7]: python_tutorial.pdf

[^8]: itpacs_cafiero.pdf

[^9]: Python-Cheatsheet-2024.pdf

