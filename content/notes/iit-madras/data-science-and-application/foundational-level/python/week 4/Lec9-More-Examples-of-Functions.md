---
title: More Examples of Functions
date: 2025-05-08
weight: 49
---

Here are **more examples of functions in Python** with clear explanations, step-by-step code, emojis, and practice questions! 🚀

## 1. Function to Calculate the Square of a Number 🟦

```python
def square(x):
    return x * x

print(square(5))  # Output: 25
print(square(7))  # Output: 49
```

- You can call `square()` with any number, and it returns the square![^1]


## 2. Function to Cube a Number 🟩

```python
def cube(x):
    return x ** 3

print(cube(3))  # Output: 27
print(cube(10)) # Output: 1000
```

- This function raises the input to the power of 3![^1]


## 3. Function with Multiple Parameters ➕

```python
def add(a, b):
    return a + b

print(add(2, 3))  # Output: 5
print(add(10, 20)) # Output: 30
```

- You can pass two numbers, and it returns their sum![^1][^2]


## 4. Function Returning Multiple Values 🧑‍🤝‍🧑

```python
def min_and_max(numbers):
    return min(numbers), max(numbers)

smallest, largest = min_and_max([2, 7, 1, 8])
print("Smallest:", smallest)  # Output: Smallest: 1
print("Largest:", largest)    # Output: Largest: 8
```

- Functions can return more than one value as a tuple![^1]


## 5. Function with No Return (Just Prints) 📢

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Output: Hello, Alice!
```

- If there is no `return`, Python returns `None` by default![^1]


## 6. Function with a Default Parameter Value 🧑‍💻

```python
def power(base, exponent=2):
    return base ** exponent

print(power(3))    # Output: 9 (3 squared)
print(power(3, 3)) # Output: 27 (3 cubed)
```

- If you don't provide the second argument, it uses the default![^1]


## 7. Function That Modifies a List (Mutable Argument) 📝

```python
def append_waffles(lst):
    lst.append("Waffles")
    return lst

breakfast = ["Oatmeal", "Eggs", "Pancakes"]
print(append_waffles(breakfast))  # Output: ['Oatmeal', 'Eggs', 'Pancakes', 'Waffles']
```

- The original list is changed because lists are mutable![^1]


## 8. Recursive Function (Factorial) 🔁

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))  # Output: 120
```

- The function calls itself to compute the factorial![^2]


## 9. Lambda (Anonymous) Function ⚡

```python
double = lambda x: 2 * x
print(double(4))  # Output: 8
```

- Quick, unnamed function for simple operations![^2]


## 10. Function for User Input and Conversion 🧑‍💻

```python
def get_integer(prompt="Enter an integer: "):
    return int(input(prompt))

# Example usage:
# num = get_integer()
# print(num)
```

- Useful for safely getting numbers from users![^2]


## Practice Questions \& Solutions 📝

### 1️⃣ Write a function that returns the successor of any integer.

<details>
<summary>Show Solution</summary>

```python
def successor(n):
    return n + 1

print(successor(10))  # Output: 11
```
</details>

### 2️⃣ Write a function that checks if a number is even.

<details>
<summary>Show Solution</summary>

```python
def is_even(n):
    return n % 2 == 0

print(is_even(4))  # Output: True
print(is_even(7))  # Output: False
```
</details>

### 3️⃣ Write a function that takes a list and returns True if it has an even number of elements.

<details>
<summary>Show Solution</summary>

```python
def is_even_length(lst):
    return len(lst) % 2 == 0

print(is_even_length([1, 2, 3, 4]))  # Output: True
print(is_even_length([1, 2, 3]))     # Output: False
```
</details>

### 4️⃣ Write a function that takes two numbers and prints their sum (no return).

<details>
<summary>Show Solution</summary>

```python
def print_sum(a, b):
    print(a + b)

print_sum(5, 10)  # Output: 15
```
</details>

### 5️⃣ Write a function that returns the product of all odd numbers between 1 and n.

<details>
<summary>Show Solution</summary>

```python
def product_of_odds(n):
    product = 1
    for i in range(1, n+1, 2):
        product *= i
    return product

print(product_of_odds(7))  # Output: 105 (1*3*5*7)
```
</details>

## Key Points with Emojis 🎯

- Functions can have **parameters**, **return values**, or **side effects** (like printing).
- Functions can return **multiple values** as tuples.
- Use **default arguments** to make parameters optional.
- Functions can be **recursive** (call themselves).
- **Lambda functions** are quick, unnamed functions for simple tasks.
- Functions help you **organize**, **reuse**, and **test** your code easily![^1][^2]

If you want more advanced examples (like generators, decorators, or closures), just ask! 😃

---
**References:**
Functions can take arguments, return values, modify mutable objects, be recursive, and can be anonymous (lambda). They are essential for organizing and reusing code efficiently in Python[^1][^2].

<div style="text-align: center">⁂</div>

[^1]: itpacs_cafiero.pdf

[^2]: OER-202301_Wang_2023-Introduction-to-Computer-Programming-with-Python.pdf

[^3]: thinkpython2.pdf

[^4]: pythonlearn.pdf

[^5]: Introduction_to_Python_Programming_-_WEB.pdf

[^6]: Learning_Python.pdf

[^7]: Python-Cheatsheet-2024.pdf

