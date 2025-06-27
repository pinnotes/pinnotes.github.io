---
title: A Quick Introduction to Variables
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 4
---

Here's a quick introduction to variables in Python, designed to be easy to understand:

Think of **variables** in Python like little labelled boxes or containers 📦 in your computer's memory. You can store different types of information inside these boxes, and the label on the box helps you find and use that information later.

### What are Variables?

*   **Storage**: Variables temporarily store data in your computer's memory. Just like a jar in your kitchen can hold rice one day and water the next, a variable can store different types of values over time.
*   **Labels**: We use a **name** (the label) to refer to the stored data. For example, instead of using generic labels like 'A' or 'B' for someone's bank balance, it's better to use **self-explanatory names** like `ram_bank_balance` to make your code clear and easy to understand for yourself and others.
*   **Creation**: A variable is **created the moment you assign a value to it** for the first time. You **don't need to declare** its type beforehand, unlike some other programming languages.
*   **Usage**: When you use a variable in an expression, Python replaces the variable with the value it currently holds. **Variables must have a value assigned** before you can use them in your code.

### Dynamic Typing ✨

One of Python's super-friendly features is **dynamic typing**. This means:
*   **No Fixed Type**: A variable itself doesn't have a fixed data type; **the type belongs to the *object* (the value) it refers to**, not the variable name itself.
*   **Flexible**: You can assign a number to a variable, and later assign a piece of text (a string) to the same variable. Python automatically figures out the new type.

    For example:
    ```python
    A = 10     # A is currently holding an integer value
    # Output: <class 'int'>
    A = "India" # Now A is holding a string value
    # Output: <class 'str'>
    ```

### Common Data Types for Variables 📊

Variables can hold various types of data:

*   **Numbers**:
    *   **Integers (int)**: Whole numbers without a decimal part (e.g., `10`, `42`).
    *   **Floating-point numbers (float)**: Numbers with a decimal part (e.g., `20.5`, `3.14`).
*   **Strings (str)**: Sequences of characters used for text (e.g., `"Hello"`, `"Sudarshan"`).
*   **Booleans (bool)**: Represent truth values, either `True` or `False`. (Note: `True` is essentially `1`, and `False` is `0` for most practical purposes).
*   **Lists**: Ordered collections of items, enclosed in square brackets (e.g., ``, `['apple', 'banana']`).
*   **Tuples**: Similar to lists but **immutable** (cannot be changed after creation), enclosed in parentheses (e.g., `(10, 20, 30)`, `('x', 'y')`).
*   **Dictionaries**: Collections of `key: value` pairs, enclosed in curly braces (e.g., `{'name': 'John', 'age': 30}`).

### Naming Rules for Variables 📝

Python has specific rules for naming variables:
*   **Allowed Characters**: Variable names can contain **alphabets** (A-Z, a-z), **numbers** (0-9), and the **underscore** (`_`) character.
*   **Cannot Start with a Number**: A variable name **cannot begin with a number**. For example, `1a` is invalid, but `a1` is valid.
*   **Case-Sensitive**: Python is **case-sensitive**, meaning `name`, `Name`, and `NAME` are all considered different variables.
*   **Keywords**: You **cannot use Python's reserved words (keywords)** as variable names. Examples of keywords include `if`, `for`, `while`, `print`, `True`, `False`, `None`, `import`, and `def`.

### Basic Variable Operations and Assignments 🔄

*   **Assignment Operator (`=`)**: This is how you give a value to a variable.
    ```python
    my_age = 15
    message = "Good to know you are " + str(my_age) + " years old."
    print(message)
    # Output: Good to know you are 15 years old.
    ```
*   **Multiple Assignment**: You can assign multiple variables on a single line:
    ```python
    x, y = 1, 2  # x becomes 1, y becomes 2
    print(x, y)
    # Output: 1 2
    ```
    You can also assign the *same value* to multiple variables:
    ```python
    a = b = c = 10
    print(a, b, c)
    # Output: 10 10 10
    ```
*   **Swapping Values**: A common and neat trick in Python is swapping two variables without needing a temporary one:
    ```python
    x = 1
    y = 2
    x, y = y, x  # Values of x and y are swapped
    print(x, y)
    # Output: 2 1
    ```
*   **Incrementing/Decrementing (Augmented Assignment)**: This is a shorthand for updating a variable's value:
    ```python
    count = 0
    count = count + 1 # Traditional way
    # Or, the shorthand way:
    count += 1      # This means count = count + 1
    # You can use this with other arithmetic operators too:
    count -= 1      # count = count - 1
    count *= 2      # count = count * 2
    count /= 2      # count = count / 2
    ```
*   **Deleting a Variable**: You can remove a variable from memory using the `del` keyword:
    ```python
    x = 10
    print(x) # Output: 10
    del x    # Deletes the variable x
    # print(x) # This would now cause an error: NameError: name 'x' is not defined
    ```

### Why Use Variables? 💡

*   **Readability**: Using descriptive variable names makes your code much easier to understand, almost like reading a story.
*   **Reusability**: Variables allow you to use the same value multiple times without retyping it.
*   **Flexibility & Maintainability**: If a value needs to change, you only have to update it in one place (where the variable is assigned), rather than finding every instance of that value throughout your code. This is super helpful when building programs for real-life applications.

### Practice Questions 🧠

1.  What will be the output of the following Python code?
    ```python
    city = "London"
    city = "Paris"
    print(city)
    ```
2.  Which of the following are **invalid** Python variable names and why?
    a.  `_name`
    b.  `1st_number`
    c.  `Total Amount`
    d.  `for`
    e.  `myAge`
3.  Write Python code to:
    a.  Create a variable `pi_value` and assign it the literal value `3.14159`.
    b.  Create a variable `radius` and ask the user to input a number for it (make sure it's an integer).
    c.  Calculate `area` using the formula `pi_value * radius * radius` and print the result.
    d.  Increment the `radius` by 1 using a shorthand operator.

### Answers ✅

1.  ```python
    Paris
    ```
    *Explanation*: Initially, `city` holds `"London"`. Then, it's reassigned to `"Paris"`. When `print(city)` is called, it displays the latest value stored in `city`.
2.  The invalid Python variable names are:
    *   `b. 1st_number`: Invalid because variable names cannot start with a number.
    *   `c. Total Amount`: Invalid because variable names cannot contain spaces. You can use underscores instead (e.g., `total_amount`).
    *   `d. for`: Invalid because `for` is a **reserved keyword** in Python.
    *   `a. _name` and `e. myAge` are valid.
3.  ```python
    # a. Create a variable pi_value and assign it the literal value 3.14159
    pi_value = 3.14159

    # b. Create a variable radius and ask the user to input a number for it (make sure it's an integer)
    # The input() function asks the user for input, and int() converts it to an integer.
    radius = int(input("Enter a number for the radius: "))

    # c. Calculate area using the formula pi_value * radius * radius and print the result
    area = pi_value * radius * radius
    print("The area is:", area)

    # d. Increment the radius by 1 using a shorthand operator
    radius += 1 # This is equivalent to radius = radius + 1
    print("New radius:", radius)
    ```

Keep practicing, and you'll become comfortable with variables in no time! Coding involves practice, and repeatedly trying out code helps you get better.