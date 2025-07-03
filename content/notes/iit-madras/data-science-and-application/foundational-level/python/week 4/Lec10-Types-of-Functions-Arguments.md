---
title: Types of Functions Arguments
date: 2025-05-08
weight: 49.5
---

Great question! In Python, there are **several types of function arguments** you can use to make your functions flexible and powerful. Let’s go through them step by step with clear explanations, emojis, code examples, and practice questions! 🚀

## 1. **Positional Arguments** 📍

These are the most common. Values are assigned to parameters based on their position in the function call.

```python
def greet(name, age):
    print(f"Hello {name}, you are {age} years old.")

greet("Alice", 25)  # Output: Hello Alice, you are 25 years old.
```


## 2. **Keyword Arguments** 🏷️

You can specify which parameter gets which value by using the parameter name in the call. This makes the order unimportant.

```python
greet(age=25, name="Alice")  # Output: Hello Alice, you are 25 years old.
```

- Order doesn’t matter when using keywords![1]


## 3. **Default Arguments** 🛡️

You can give a parameter a default value. If you don’t provide a value when calling, the default is used.

```python
def greet(name, age=18):
    print(f"Hello {name}, you are {age} years old.")

greet("Bob")       # Output: Hello Bob, you are 18 years old.
greet("Carol", 30) # Output: Hello Carol, you are 30 years old.
```

- Parameters with default values must come **after** those without defaults![1]


## 4. **Variable-Length Positional Arguments (`*args`)** 🌟

Use `*args` to accept any number of positional arguments. They are collected as a tuple.

```python
def add_all(*numbers):
    print(numbers)
    return sum(numbers)

print(add_all(1, 2, 3))       # Output: (1, 2, 3) \n 6
print(add_all(5, 10, 15, 20)) # Output: (5, 10, 15, 20) \n 50
```

- Use when you don’t know how many arguments will be passed![1]


## 5. **Variable-Length Keyword Arguments (`**kwargs`)** 🧩

Use `**kwargs` to accept any number of keyword arguments. They are collected as a dictionary.

```python
def describe_person(**info):
    print(info)

describe_person(name="Alice", age=25, city="Delhi")
# Output: {'name': 'Alice', 'age': 25, 'city': 'Delhi'}
```

- Use for flexible, named options![1]


## 6. **Keyword-Only Arguments** 🔑

Arguments that must be specified by name (after a `*` or `*args` in the function definition).

```python
def example(a, *, b):
    print(a, b)

example(1, b=2)  # Correct
# example(1, 2)  # ❌ Error: b must be specified as a keyword!
```

- Useful for clarity and to avoid mistakes![1]


## 7. **Combining Argument Types** 🧙

You can combine these types for very flexible functions, but follow this order in your function definition:

```
def func(positional, default=val, *args, kwonly, **kwargs):
    pass
```

- Positional → Default → *args → Keyword-only → **kwargs[1]


## Practice Questions \& Solutions 📝

### 1️⃣ Write a function that takes any number of numbers and returns their product.

<details>
<summary>Show Solution</summary>

```python
def multiply_all(*numbers):
    product = 1
    for n in numbers:
        product *= n
    return product

print(multiply_all(2, 3, 4))  # Output: 24
```
</details>

### 2️⃣ Write a function that prints a greeting. If no name is given, it should greet "World".

<details>
<summary>Show Solution</summary>

```python
def greet(name="World"):
    print(f"Hello, {name}!")

greet()         # Output: Hello, World!
greet("Python") # Output: Hello, Python!
```
</details>

### 3️⃣ Write a function that accepts any number of keyword arguments and prints them.

<details>
<summary>Show Solution</summary>

```python
def print_kwargs(**kwargs):
    print(kwargs)

print_kwargs(a=1, b=2)
# Output: {'a': 1, 'b': 2}
```
</details>

### 4️⃣ Write a function that takes two required arguments and one keyword-only argument.

<details>
<summary>Show Solution</summary>

```python
def demo(a, b, *, c):
    print(a, b, c)

demo(1, 2, c=3)  # Output: 1 2 3
```
</details>

## Key Points with Emojis 🎯

- **Positional**: Order matters
- **Keyword**: Specify by name
- **Default**: Optional values
- **\*args**: Any number of positional arguments
- **\*\*kwargs**: Any number of keyword arguments
- **Keyword-only**: Must be named in the call

If you want more examples or want to practice, just ask! 😃

**References:**

- Positional, keyword, default, variable-length (`*args`, `**kwargs`), and keyword-only arguments are all supported in Python, allowing flexible and powerful function definitions[1][2].
- You can combine these for maximum flexibility, but must follow the proper order in the function header[1].

