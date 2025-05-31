---
title: Variables and Literals
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 6
---

Drawing on the information from the sources and our previous discussion, let's look at variables and literals in Python, and how the input statement interacts with them.

**Variables**

In Python, a **variable** is essentially a **name** or a **label** that refers to a **value** or **stored data**. They are used to **temporarily store data in the computer's memory**. You can think of variables as **baskets** in real life used to keep track of information in your program. When you create a variable, you are reserving some space in memory to store a value.

Variables are **created when they are first assigned values**. The **equal sign (`=`)** is used to assign values to variables. The name of the variable is on the left side of the `=` operator, and the value to be stored is on the right. For example, `counter = 100` creates an integer variable, `miles = 1000.0` creates a floating-point variable, and `name = "John"` creates a string variable. In an expression, a variable is **immediately replaced with the object it currently refers to**. Variables **must be assigned before they can be used**; attempting to use an unassigned variable will result in an error.

A crucial characteristic of Python is its **dynamic typing model**. A **variable never has any type information or constraints associated with it**. The concept of **type lives with objects, not names** (variables). Variables are generic and can reference any type of object. This means you can assign a variable to an integer, and later reassign it to a string or a list. For instance, after `a = 10`, `a` refers to an integer object, but later `a = 'spam'` makes `a` refer to a string object. This allows a variable to **store a different value as you go on** in your program.

Variables can be **reused** and **updated** by assigning them new values. For example, `age = age + 1` takes the current value of `age`, adds 1, and stores the new value back into `age`. This kind of assignment, where the new value depends on the old, is called an **update**. An assignment that gives an initial value to a variable that will be updated is called **initialization**. Python also supports augmented assignment operators like `+=`, where `x += 10` is equivalent to `x = x + 10`.

There are specific **rules for naming variables**:
*   Variable names **can contain letters** (A-Z, a-z) **and numbers** (0-9).
*   They **cannot begin with a number**.
*   The **underscore character (`_`)** can appear in a name and is often used in multi-word names (e.g., `ram_bank_balance`). You must start a variable name with an alphabet or an underscore.
*   It is conventional to use only lowercase for variable names.
*   You **cannot use Python's reserved words** (also called keywords) as variable names. Keywords have very special meaning to Python and are predefined. Using a keyword as a variable name will give an error. Examples of keywords include `if`, `else`, `for`, `while`, `and`, `or`, `not`. Case matters for variable names, so `X` and `x` are different variables.
*   Choosing variable names that are **self-explanatory** can make your code easier to understand.

Python also allows **multiple assignment**. You can assign a single value to several variables simultaneously, for example, `a = b = c = 1`. In this case, an integer object with the value 1 is created, and all three variables reference this same object in memory. You can also assign multiple variables on a single line with multiple values, such as `x, y = 1, 2`. The **sequence (order) of variables and literals on the right-hand side is very important** in this type of assignment.

You can **delete the reference** to a variable using the `del` statement. After `del x`, the variable `x` is no longer defined, and attempting to use it will cause a `NameError`.

Variables (like local variables in functions) exist only while the function runs and disappear when it exits.

**Literals**

**Literals are the actual values which are stored inside a variable**. They are expressions whose syntax generates an object. Variables can store different literal values, and they can be modified as per the requirement.

Examples of literals include:
*   Numbers: `100` (integer), `1000.0` (float), `True` and `False` (boolean). The values `True`, `False`, and `None` are technically names assigned to objects, but are reserved words. Note that `True` and `False` must start with a capital letter. Other numeric literals include complex numbers, decimal numbers, and rational fraction numbers. Integers can be written using hexadecimal, octal, and binary literals.
*   Strings: `"John"`, `'coffee'`, `'bread'`, `'spam'`. String literals can be enclosed in single quotes (`'...'`) or double quotes (`"..."`), which are treated the same. Triple quotes (`"""..."""`) are used for multiline strings. Raw strings (`r'...'`) suppress the special meaning of escape characters. In Python 3, `b'...'` or `B'...'` create byte strings. An empty string is represented by a pair of quotation marks with nothing in between.
*   Lists: `[1, [2, 'three'], 4]`. An empty list is `[]`.
*   Dictionaries: `{'food': 'spam', 'taste': 'yum'}`. An empty dictionary is `{}`.
*   Tuples: `(1, 'spam', 4, 'U')`.
*   Sets: `set('abc')`, `{'a', 'b', 'c'}`.

When deciding whether to use a variable or a literal, you use variables only when there is a possibility that the value being stored might change. When you are sure that the value is not going to change, you will use a literal. For instance, the value of pi will never change, so you might use a literal like `3.14`, whereas a radius or area will change, so you use variables for those.

A key difference in their use in assignments is that **literals can be used only on the right hand side of the equal to sign**, whereas **variables can be used on either sides**.

**The Input Statement and Variables**

The `input()` function is used to get data from the user, typically from the keyboard [conversation history]. It stops the program's execution and waits for the user to type something and press Enter [conversation history].

You can optionally pass a string argument to `input()`, which is displayed to the user as a **prompt** before waiting for input [conversation history].

The primary way the `input()` function works with variables is by **assigning the user's input to a variable**. This allows your program to remember and process the data entered by the user. For example, a program might ask for the user's name and store it in a variable called `name`.

In Python 3, the **`input()` function always returns the user's reply as a string** [conversation history]. Because of this, you often need to **convert the input string to a different data type** if you expect a number (integer or float) or a boolean, using built-in functions like `int()`, `float()`, or `bool()` [conversation history]. For example, if you ask for a user's age which you want to treat as a number, you would typically use `age = int(input('What is your age? '))` [conversation history]. Without this conversion, the input would be treated as a sequence of characters (a string) rather than a numerical value [conversation history].

Using different variable names for different inputs (like `n`, `p`, and `age` in the example program) allows you to keep track of each piece of data separately.