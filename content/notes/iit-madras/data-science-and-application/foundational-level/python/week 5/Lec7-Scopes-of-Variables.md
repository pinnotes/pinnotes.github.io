---
title: Scopes of Variables in Python
date: 2025-05-08
weight: 57
emoji: 🔍
---

Let’s explore **Scopes of Variables in Python** 🔍🐍 with clear explanations, emojis, examples, and practice questions (with solutions)!

## 🧠 What is Variable Scope?

**Scope** refers to the “visibility” or **lifetime** of a variable—where in your code you can access or modify it.

- **Local Scope**: Variables defined inside a function. Only accessible within that function.
- **Global Scope**: Variables defined outside any function. Accessible throughout the module/file.
- **Enclosing (Nonlocal) Scope**: Variables in the local scope of enclosing (outer) functions.
- **Built-in Scope**: Names preassigned by Python (like `print`, `len`, etc.).

This is known as the **LEGB Rule**:
> **L**ocal → **E**nclosing → **G**lobal → **B**uilt-in[^1].

## 🏠 Local vs Global Variables

### Local Variable Example

```python
def greet():
    message = "Hello!"  # Local variable
    print(message)

greet()
# print(message)  # ❌ Error! message is not defined outside the function
```

*`message` exists only inside `greet()`—it is out of scope elsewhere.*[^2]

### Global Variable Example

```python
name = "Miki"  # Global variable

def show_name():
    print(name)  # Can access global variable

show_name()
print(name)  # Also works here
```

*`name` is accessible everywhere in the file.*[^3][^1]

## 🏗️ Shadowing (Name Clashes)

If a local variable has the same name as a global variable, the local one “shadows” (hides) the global one within its scope.

```python
x = 10  # Global

def foo():
    x = 20  # Local, shadows global x
    print(x)  # 20

foo()
print(x)  # 10
```

*Inside `foo()`, `x` refers to the local variable.*[^2]

## 🔄 Modifying Global Variables

To **modify** a global variable inside a function, use the `global` keyword:

```python
count = 0

def increment():
    global count
    count += 1

increment()
print(count)  # 1
```

*Without `global`, Python treats `count` as a new local variable inside the function.*[^3][^1]

## 🌀 Enclosing (Nonlocal) Scope

For nested functions, use `nonlocal` to modify variables in the enclosing function’s scope (not global):

```python
def outer():
    x = 5
    def inner():
        nonlocal x
        x = 10
    inner()
    print(x)  # 10

outer()
```

*`nonlocal` allows `inner()` to modify `x` in `outer()`.*[^1]

## 🧩 Practice Questions

### 1️⃣ What will this code print?

```python
x = 5

def foo():
    x = 10
    print(x)

foo()
print(x)
```

**Solution:**

- Inside `foo()`, prints 10 (local x).
- Outside, prints 5 (global x).


### 2️⃣ How do you change a global variable inside a function?

**Solution:**
Use the `global` keyword.

```python
y = 1
def change():
    global y
    y = 2
change()
print(y)  # 2
```


### 3️⃣ What happens if you try to access a local variable outside its function?

**Solution:**
You get a `NameError` because the variable is out of scope.

### 4️⃣ Try it yourself!

Write a function that increments a global counter each time it’s called.

<details>
<summary>Solution</summary>

```python
counter = 0

def increment():
    global counter
    counter += 1

increment()
increment()
print(counter)  # 2
```
</details>

## ⭐ Key Takeaways

- **Local variables** exist only inside functions.
- **Global variables** are accessible everywhere in the file.
- Use `global` to modify globals inside functions.
- Use `nonlocal` for variables in enclosing (outer) functions.
- Avoid shadowing variable names to prevent confusion![^2]

**Practice and experiment to master variable scope!** 🚀

<div style="text-align: center">⁂</div>

[^1]: Learning_Python.pdf

[^2]: itpacs_cafiero.pdf

[^3]: python_tutorial.pdf

[^4]: Introduction_to_Python_Programming_-_WEB.pdf

[^5]: Python-Cheatsheet-2024.pdf

[^6]: OER-202301_Wang_2023-Introduction-to-Computer-Programming-with-Python.pdf

[^7]: python-handbook.pdf

[^8]: Python-IITM-Foundational-Course.pdf

[^9]: thinkpython2.pdf

[^10]: pythonlearn.pdf

