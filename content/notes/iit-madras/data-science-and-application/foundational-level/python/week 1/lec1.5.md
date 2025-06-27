---
title: Variables and Input Statement
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 5
---

Here is a quick introduction to variables and the input statement in Python, designed for ease of understanding:

### Introduction to Variables 📦

Think of **variables** in Python as **named storage locations** or **containers** 📦 in your computer's memory. You use them to hold different pieces of information that your program needs to use or change later. Instead of always typing the actual data (like `10` or `"Hello"`), you give it a **label** (the variable name).

*   **Assigning Values** ➡️
    *   You create a variable by using the **assignment operator** `=`. This tells Python to put the value on the right into the container named on the left.
    *   **Example**:
        ```python
        score = 100  # The variable 'score' now holds the number 100
        name = "Alice" # The variable 'name' now holds the text "Alice"
        ```
    *   When you print a variable, Python shows you the **value** currently inside its box.
        ```python
        print(score) # Output: 100
        print(name)  # Output: Alice
        ```

*   **Dynamic Typing** ✨
    *   Python is "dynamically typed". This means you **don't need to declare** what *type* of data a variable will hold beforehand.
    *   A variable's type is determined **automatically by the value you assign to it**.
    *   You can even change the type of data a variable holds later:
        ```python
        item = 5         # item holds an integer (whole number)
        print(type(item)) # Output: <class 'int'>

        item = "Apple"   # Now, item holds a string (text)
        print(type(item)) # Output: <class 'str'>
        ```
    *   This is like using the same kitchen jar 🏺 to store rice today and water tomorrow; the jar itself doesn't change, but what's *inside* it does.

*   **Common Data Types** 📊
    Variables can store various types of data:
    *   **Numbers**:
        *   **Integers (`int`)**: Whole numbers (e.g., `5`, `100`, `-3`).
        *   **Floating-point numbers (`float`)**: Numbers with decimal points (e.g., `3.14`, `2.5`).
    *   **Strings (`str`)**: Text, enclosed in single `''` or double `""` quotes (e.g., `"Hello"`, `'Python'`).
    *   **Booleans (`bool`)**: Represents truth values, either `True` or `False`. (Note: `True` and `False` are essentially `1` and `0` respectively, with a custom display).
    *   **Lists**: Ordered collections of items, in square brackets `[]` (e.g., ``, `['apple', 'banana']`).
    *   **Tuples**: Ordered collections, similar to lists but **immutable** (cannot be changed after creation), in parentheses `()` (e.g., `(10, 20)`, `('x', 'y')`).
    *   **Dictionaries**: Unordered collections of `key: value` pairs, in curly braces `{}` (e.g., `{'name': 'John', 'age': 30}`).

*   **Naming Rules for Variables** 📝
    *   **Allowed characters**: Can contain letters (A-Z, a-z), numbers (0-9), and underscores (`_`).
    *   **Cannot start with a number**: `1variable` is invalid, but `variable1` is valid.
    *   **Case-sensitive**: `myVar`, `myvar`, and `MYVAR` are all **different variables**.
    *   **No keywords**: You cannot use Python's reserved words (like `if`, `for`, `print`, `True`, `False`) as variable names. These words have special meanings to Python.

*   **Variable Operations** 🔄
    *   **Re-assignment**: You can change the value a variable holds by assigning a new value to it. The old value is replaced.
    *   **Multiple Assignment**: Assign multiple variables on one line:
        ```python
        x, y = 10, 20 # x becomes 10, y becomes 20
        a = b = c = 5 # a, b, and c all become 5
        ```
    *   **Swapping values**: A common trick to swap values between two variables:
        ```python
        var1 = 5
        var2 = 10
        var1, var2 = var2, var1 # var1 is now 10, var2 is now 5
        ```
    *   **Augmented Assignment (Shorthand Operators)**: For updating a variable based on its current value (e.g., adding to it):
        ```python
        count = 0
        count += 1 # Same as: count = count + 1 (count is now 1)
        count *= 2 # Same as: count = count * 2 (count is now 2)
        ```
    *   **Deleting Variables**: Remove a variable from memory using `del`:
        ```python
        my_data = " confidential"
        del my_data # The variable 'my_data' no longer exists
        # print(my_data) would now cause an error because it's "not defined"
        ```

*   **Why Use Variables?** 💡
    *   **Readability**: Using descriptive names (e.g., `ram_bank_balance` instead of `A`) makes your code easier to understand for yourself and others.
    *   **Reusability**: Store a value once and use the variable name multiple times throughout your code.
    *   **Flexibility**: If a value changes (e.g., `pi_value` for different precision, or `radius` for different circles), you only need to update the variable's assignment in one place, making your code easy to modify.

---

### Introduction to the Input Statement ⌨️

The `input()` function allows your program to **receive data from the user** while the program is running. It pauses the program, displays a message, and waits for the user to type something and press Enter.

*   **Basic Usage**:
    ```python
    user_name = input("Please enter your name: ") # The text in quotes is a prompt for the user
    print("Hello,", user_name)
    ```

*   **Important Note: `input()` returns a String!** ⚠️
    *   The `input()` function **always returns the user's input as a string (`str`)**.
    *   If you need the input to be a number (integer or float) for calculations, you must **convert it** using functions like `int()` or `float()`.

*   **Type Conversion Examples** 🔄
    ```python
    # Getting an integer:
    age_str = input("How old are you? ") # age_str will be a string, e.g., "30"
    age_int = int(age_str)              # Convert the string to an integer
    print("You will be", age_int + 1, "next year.") # Now you can do math!

    # You can combine them into one line:
    current_year = int(input("What is the current year? ")) # User input is immediately converted to int
    print("The current year is:", current_year)
    ```
    *Without converting to a number, you would get an error if you tried to do arithmetic operations like addition or multiplication with the input, because Python cannot perform math directly on strings that look like numbers. For example, `"5" + 1` would cause an error, but `int("5") + 1` would work.*

---

### Practice Questions 🧠

1.  What will be the output of the following Python code?
    ```python
    item_count = 5
    item_price = 10.5
    total_cost = item_count * item_price
    item_count = item_count + 1
    print("Total cost:", total_cost)
    print("New item count:", item_count)
    ```
2.  Which of the following are **valid** Python variable names? (Select all that apply)
    a.  `_user_data`
    b.  `2nd_try`
    c.  `my favourite color`
    d.  `class`
    e.  `temp_celsius`
3.  Write Python code that:
    a.  Asks the user for their favorite number.
    b.  Stores this input in a variable called `fav_num`.
    c.  Converts `fav_num` to an integer.
    d.  Calculates `double_fav_num` by multiplying `fav_num` by 2.
    e.  Prints a message like "Your favorite number doubled is [result]".

---

### Answers ✅

1.  ```
    Total cost: 52.5
    New item count: 6
    ```
    *   **Explanation**: `item_count` is initially `5`, `item_price` is `10.5`. `total_cost` becomes `5 * 10.5 = 52.5`. Then, `item_count` is updated to `5 + 1 = 6`. The `print` statements then display the values of `total_cost` and the *new* value of `item_count`.

2.  The valid Python variable names are:
    *   `a. _user_data` (Valid: Starts with an underscore, uses letters and underscores).
    *   `e. temp_celsius` (Valid: Uses letters and underscores).

    The invalid names are:
    *   `b. 2nd_try` (Invalid: Cannot start with a number).
    *   `c. my favourite color` (Invalid: Cannot contain spaces. Should use `_` or camelCase instead, e.g., `my_favourite_color` or `myFavouriteColor`).
    *   `d. class` (Invalid: `class` is a **reserved keyword** in Python).

3.  ```python
    # a. Asks the user for their favorite number.
    # b. Stores this input in a variable called fav_num.
    fav_num_str = input("What is your favorite number? ") #

    # c. Converts fav_num to an integer.
    fav_num_int = int(fav_num_str) #

    # d. Calculates double_fav_num by multiplying fav_num by 2.
    double_fav_num = fav_num_int * 2

    # e. Prints a message like "Your favorite number doubled is [result]".
    print("Your favorite number doubled is", double_fav_num)
    ```