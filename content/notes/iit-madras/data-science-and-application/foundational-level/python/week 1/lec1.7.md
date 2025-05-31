---
title: Data Types 1
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 7
---

Okay, let's delve into the concept of **Data Types** in Python, drawing upon the information from the sources and our previous discussion.

In Python, **data takes the form of objects**. Each data element has a **specific data type, which represents which category of data that particular value belongs to**. You can think of different data types like different shaped vessels used for storing different things in real life, such as a jar for rice or a jar for juice. The computer recognises what kind of data you are storing and declares its data type. It has a knack to store what kind of data in what form. Python has different data types, and the computer has a different way to handle different types of data that you may want to use in your programming.

Let's look at some of the fundamental built-in data types discussed:

1.  **Numbers**: Number data types store numeric values. Python's core objects include numbers like integers and floating-point numbers.
    *   **Integers** (`int`): These are whole numbers without a fractional part. For example, `10` is an integer. In Python 3, integers have unlimited precision.
    *   **Floating-point numbers** (`float`): Also called floats, these represent real numbers and are written with a decimal point dividing the integer and the fractional parts. They are numbers with a fractional part, or roughly, numbers with a decimal point in them. If a number is not an integer, and is beyond an integer, it is called a float by the computer. For example, `5.6` is of type float, as is `6.9` or `42.0`.
    *   Other numeric types mentioned include **complex numbers** (like `3+4j`), **fixed-precision decimal numbers**, **rational fraction numbers**, and **Booleans**.

2.  **Strings** (`str`): Strings are used to record textual information. They are sequences of characters. For example, `"John"` or `'coffee'` are strings. `India` is also of type string. String literals can be enclosed in single quotes (`'...'`) or double quotes (`"..."`). In Python 3, `str` is used for Unicode text.

3.  **Lists** (`list`): The list is a very versatile data type available in Python. Lists are positionally ordered collections of other objects. They can be written as a list of comma-separated values between square brackets (`[]`). The items in a list need not be of the same type. For example, `` or `['abc', ['def', 'ghi']]` are lists. An empty list is `[]`. Lists support indexing, starting at index 0. Lists can be changed in-place; they are mutable.

Python automatically recognises the type of data that is being stored. When you assign a value to a variable, it automatically creates a particular data type. The computer stores different types using different kinds of memory locations.

You can check the data type of any variable using a command called `type()`. For example, `print(type(n))` for an integer variable `n` will show `<class 'int'>`. Similarly, `type(l)` for a list `l` will show `<class 'list'>`. The word "class" here is used in the sense of a category; a type is a category of values.

Other core data types in Python include:
*   **Dictionaries** (`dict`): Used to store key/value pairs. They are mappings, supporting indexing by key. They can be written with curly braces (`{}`). Dictionaries have no concept of order among the elements. Keys should be unique and hashable.
*   **Tuples** (`tuple`): Like read-only lists. They are immutable sequences of elements. They are typically written with parentheses (`()`).
*   **Sets** (`set`): An unordered collection of unique and immutable objects that supports operations corresponding to mathematical set theory. They can be created using `set('abc')` or `{}` for an empty set.
*   **Booleans** (`bool`): This data type has only two different values: `True` and `False`. These values are preassigned built-in names. Notice carefully, the letter T in `True` and letter F in `False` has to be capital, otherwise it will not be considered as Boolean. True and False are essentially customized versions of the integers 1 and 0. An object is considered true if it is a nonzero number or a nonempty collection object.

The data type of a value matters when you use operators. For example, multiplying two strings is not understood, but multiplication of numbers is readily done. Adding two strings concatenates them, while adding two numbers performs arithmetic addition.

Sometimes, you may need to perform conversions between built-in types. To convert between types, you simply use the type name as a function, like `int()`, `float()`, or `str()`. For example, `int('32')` converts the string '32' to the integer 32. This is also known as type conversion or type casting. As we discussed, the `input()` function always returns a string [conversation history], so you often need to convert the input using functions like `int()` or `float()` if you expect a number [conversation history].

The concept of type lives with objects, not variables. A variable never has any type information or constraints associated with it. Variables are generic and can reference any type of object. This is referred to as **dynamic typing**.