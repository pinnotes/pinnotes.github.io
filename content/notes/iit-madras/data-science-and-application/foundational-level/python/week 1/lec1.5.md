---
title: Variables and Input Statement
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 5
---

Drawing on the sources and our conversation history, let's delve into variables and the input statement in Python.

**Variables: Names for Values**

In Python, a **variable** is essentially a **name** or a **label** that refers to a **value** or **stored data**. You can think of variables as containers or baskets used to keep track of information in your program. They are used to temporarily store data in the computer's memory. When you create a variable, you are reserving some space in memory to store a value.

Variables are **created when they are first assigned a value**. This is done using an **assignment statement**, where the equal sign (`=`) is the assignment operator. The name of the variable is on the left side of the `=` operator, and the value to be stored is on the right. For example, `a = 10` creates a variable named `a` and assigns it the integer value 10. Similarly, `miles = 1000.0` creates a floating-point variable, and `name = "John"` creates a string variable.

A key characteristic of Python is its **dynamic typing model**. Unlike some languages, a **variable never has any type information or constraints associated with it**. The concept of **type lives with objects, not names** (variables). Variables are generic and can reference any type of object, such as integers (`int`), numbers with decimal parts (`float`), strings (`str`), or booleans (`bool`). This flexibility means you can assign a variable to an integer value and later reassign it to a string value. For instance, after `A = 10`, `A` refers to an integer object, but later `A = 'India'` makes `A` refer to a string object.

When you use a variable in an expression, it is **immediately replaced with the object that it currently refers to**. It's crucial to note that **variables must be assigned a value before they can be used**. Trying to use an unassigned variable will result in an error.

There are specific **rules for naming variables**:
*   Variable names **can contain letters** (A-Z, a-z) **and numbers** (0-9).
*   They **cannot begin with a number**.
*   The **underscore character (`_`)** can appear in a name and is often used in multi-word names (e.g., `ram_bank_balance`). You must start a variable name with an alphabet or an underscore.
*   It is conventional to use only lowercase for variable names.
*   You **cannot use Python's reserved words** (also called keywords) as variable names. Keywords like `if`, `else`, `for`, `while`, `and`, `or`, `not`, `break`, `continue`, and `pass` have special meaning in Python. Using a keyword as a variable name will result in a syntax error.
*   Choosing variable names that are **self-explanatory** can make your code easier to understand.

Variables can be **reused** and **updated** by assigning them new values. For instance, `age = age + 1` takes the current value of the variable `age`, adds 1 to it, and stores the new value back into the variable `age`. This is called incrementing. Python also supports augmented assignment operators like `+=`, where `x += 10` is equivalent to `x = x + 10`. An assignment that gives an initial value to a variable that will be updated is called **initialization**.

Python also allows **multiple assignment**. You can assign a single value to several variables simultaneously, for example, `a = b = c = 1`. In this case, all three variables reference the **same object** in memory. This is fine for immutable types like numbers, but care is needed with mutable objects like lists, as changes through one variable will be visible through others. You can also assign multiple variables on a single line with multiple values, such as `x, y = 1, 2`, which assigns `1` to `x` and `2` to `y`. The order of variables and values is important in this type of assignment.

You can **delete a variable's reference** using the `del` statement. After `del x`, the variable `x` is no longer defined, and attempting to use it will cause an error.

Variables and the values they hold can be printed using the `print` statement. When programming interactively, typing a variable name at the prompt will automatically display its value, acting as a shorthand for a print statement.

**The Input Statement: Getting User Data**

The **input statement** (using the `input()` function) is used to **get data from the "outside world"**, typically from the user typing on the keyboard. It is the simplest way to read user input.

The `input()` function stops the program and **waits for the user to type something and press Enter**. It can optionally accept a string argument, which is displayed to the user as a prompt before waiting for input. This allows you to combine displaying a message (like asking a question) and receiving user input into a single line of code. For example, instead of separate `print('Enter your name:')` and `name = input()`, you can use `name = input('Enter your name: ')`.

A crucial point in Python 3 is that the **`input()` function always returns the user's typed reply as a string**. This is different from how `input()` worked in Python 2.

**Variables and Input Working Together**

The primary way variables and the input statement work together is by **assigning the data received from the user input to a variable**. For example, in a quiz program, the user's answer might be taken using `input()` and stored in a variable named `answer`.

Since `input()` always returns a string in Python 3, you often need to **convert the input string to a different data type** if you expect a number or boolean. This is done using built-in functions like `int()` for integers or `float()` for floating-point numbers. For example, if you ask for the user's age, which you expect to be a whole number, you would typically use `age = int(input('What is your age? '))`. Without this conversion, the input `15` would be treated as the string `'15'`, not the number `15`, which affects how you can use it in calculations. Explicitly converting to `str()` with `str(input())` can also be done, although it is often unnecessary as `input()` already returns a string.

Using variables to store input is important because it allows you to **keep track of the data** the user provides. If you were to take multiple inputs and assign them all to the same variable name, each new input would overwrite the previous one, and the earlier data would be lost. By using different variable names (like `n` for name and `p` for place), you can store and reference different pieces of user information simultaneously.

In summary, variables provide the mechanism to name and store data in a program, while the input statement provides a way to get that data from the user. They are frequently used together, with the received input being assigned to a variable, often after converting it to the appropriate data type for further processing.