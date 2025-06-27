---
title: Data Types 1
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 7
---

Here's an easy-to-understand explanation of data types in Python, building on our previous conversation about variables and literals! ✨

---

### **Understanding Data Types in Python**

Python automatically handles the **type** of data you're working with. When you put "stuff" into a variable, Python gives it a label based on what kind of "stuff" it is. This label is called a **data type**. Different data types are stored and processed differently by the computer.

#### **1. Variables & Dynamic Typing: Your Flexible Containers** 📦🔄

As we discussed, **variables** are like named containers 📦 in your computer's memory where you store pieces of data.

*   **Assignment is Creation** ➡️: A variable is created the moment you **assign a value** to it using the `=` operator.
    *   *Example*: `my_number = 42` 🔢

*   **Dynamic Typing (Python's Superpower!)** ✨: One of Python's most convenient features is that you **don't need to tell it what type of data a variable will hold**. Python **automatically recognises the data type** that is being stored.
    *   This means the *type* belongs to the *value* (the object), not the variable name itself. So, a single variable name can hold different types of data at different times.
    *   *Example*:
        ```python
        my_flex_var = 10    # Now holds an integer 🔟
        my_flex_var = "Hello" # Now holds a string 👋 (its type changed!)
        ```

*   **Checking the Type** 🔍: You can always ask Python what type of data a variable (or any value) is currently holding using the `type()` command.
    *   *Example*: `print(type(my_flex_var))` would show `<class 'str'>` if it holds `"Hello"`.

*   **Literals: The Actual Values** 🧱: Just to recap, **literals** are the actual raw values you write directly in your code, like `10`, `3.14`, or `"Hello"`. They can only appear on the right side of an assignment.

#### **2. Core Data Types in Python** 📊

Python has several fundamental built-in data types that are used for different kinds of information.

*   **Integers (`int`)** 🔢:
    *   **Whole numbers**, whether positive, negative, or zero, without any decimal part.
    *   Python integers have **unlimited precision**, meaning they can be as large as your computer's memory allows.
    *   *Examples*: `age = 30` 👴, `count = 100` 💯, `temp = -7` ❄️.

*   **Floating-point numbers (`float`)** 📈:
    *   Numbers that contain a **decimal point** or an exponent. They are often simply called "floats".
    *   Python uses floating-point arithmetic when these numbers are involved in calculations.
    *   *Examples*: `price = 19.99` 💰, `pi = 3.14159` 🥧, `temp_c = 20.5` 🌡️.

*   **Strings (`str`)** 💬:
    *   Used for **text** and collections of characters.
    *   You create strings by enclosing the text in **single quotes (`'`) or double quotes (`"`)**. Triple quotes (`"""` or `'''`) are used for multi-line strings.
    *   Strings are **sequences**, meaning their characters are ordered and can be accessed by their position (index), starting from 0.
    *   You can **combine (concatenate) strings** using the `+` operator.
    *   You can **repeat a string** using the `*` operator.
    *   **Important**: Strings are **immutable**. This means once a string is created, you **cannot change its individual characters**. If you "modify" a string, you are actually creating a *new* string and assigning the variable to this new one.
    *   *Examples*: `name = "Alice"` 👩‍🦰, `greeting = 'Hello, world!'` 👋, `sentence = """This is a\nmulti-line string."""` 📝.

*   **Booleans (`bool`)** ✅❌:
    *   Represent **truth values**: they can only be `True` or `False`.
    *   **Case matters!** The `T` in `True` and the `F` in `False` **must be capital letters**.
    *   Internally, `True` behaves like the integer `1`, and `False` behaves like `0`.
    *   They are fundamental for decision-making in code (e.g., `if` statements).
    *   *Examples*: `is_raining = True` ☔, `has_permission = False` 🚫.

*   **Lists** `[]` 📋:
    *   **Ordered collections of items**.
    *   Items are placed inside **square brackets `[]`** and separated by commas.
    *   Lists are incredibly flexible: they can hold items of **different data types** within the same list.
    *   Lists are **mutable**. This means you **can change them after they are created** – you can add, remove, or modify items directly in the list.
    *   You access individual items using **indexing**, starting from `0` for the first item. Slicing also works on lists.
    *   *Examples*: `shopping_list = ["milk", "eggs", 2.50]` 🛒, `numbers =` 🔢.
    *   You can concatenate lists with `+` and repeat them with `*`, which results in a new list.

---

### **Practice Questions** 🧠

1.  What are the two roles of variables in Python, and how does Python handle their data types? Use an emoji to illustrate the concept.
2.  Identify the data type for each of the following literals:
    a. `150`
    b. `"Python is fun!"`
    c. `0.001`
    d. `True`
    e. `['red', 'green', 'blue']`
3.  Explain the key difference between how strings and lists behave when you try to "change" their content in Python. What is the term used to describe this property for strings?
4.  What will be the output of the following Python code? Explain your answer.
    ```python
    item = "Book"
    item = 123
    print(type(item))
    item = item + 7
    print(item)
    ```
5.  Is `2_apples` a valid variable name in Python? How about `for`? Justify your answer based on the rules.

---

### **Answers** ✅

1.  **Roles of Variables and Python's Type Handling**:
    *   Variables act as **named storage locations** 📦 in the computer's memory.
    *   They are **created when assigned values**.
    *   Python employs **dynamic typing** ✨. This means you **don't declare a variable's type** beforehand; Python automatically determines and assigns the data type based on the value it holds. A variable's type can change if a new value of a different type is assigned to it.

2.  **Data Type Identification**:
    a. `150` ➡️ **Integer (`int`)**
    b. `"Python is fun!"` ➡️ **String (`str`)**
    c. `0.001` ➡️ **Floating-point number (`float`)**
    d. `True` ➡️ **Boolean (`bool`)**
    e. `['red', 'green', 'blue']` ➡️ **List**

3.  **String vs. List Mutability**:
    *   The key difference lies in their **mutability**.
    *   **Strings** are **immutable** 🔒. This means that once a string is created, its content cannot be changed in-place. Any operation that seems to "modify" a string (like concatenation or replacement) actually creates a *new* string object, and the variable is then made to refer to this new object.
    *   **Lists** are **mutable** ✍️. Their content *can* be changed in-place after creation. You can add, remove, or modify items directly within the existing list object without creating a new one.

4.  **Output and Explanation of Code Snippet**:
    ```
    <class 'int'>
    130
    ```
    *   **Explanation**:
        *   `item = "Book"`: `item` initially holds a string value.
        *   `item = 123`: Due to **dynamic typing** ✨, `item` is re-assigned an integer value. Its type changes from string to integer.
        *   `print(type(item))`: This prints the current type of `item`, which is now an integer, so it outputs `<class 'int'>`.
        *   `item = item + 7`: This performs integer addition. `123 + 7` equals `130`. The variable `item` is updated to `130`.
        *   `print(item)`: This prints the final value of `item`, which is `130`.

5.  **Valid Variable Names**:
    *   `2_apples` ➡️ **Invalid** ❌. Python variable names **cannot start with a number**. They must start with an alphabet (letter) or an underscore (`_`).
    *   `for` ➡️ **Invalid** ❌. `for` is a **reserved keyword** in Python. Reserved keywords have special meanings to the Python interpreter and **cannot be used as variable names**.