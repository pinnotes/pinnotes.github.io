---
title: Data Types 2
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 8
---

Okay, let's continue our discussion on Data Types in Python, drawing from the sources you've provided and our previous conversation. "Data Types 2" can build upon the fundamental concepts we've already touched upon.

As we discussed, in Python, all **data takes the form of objects**. Each data element is associated with a **specific data type**, which tells the computer what **category of data** that value belongs to. This is like having different containers for different items, such as a jar for rice or a jar for juice. The computer automatically recognises and declares the type of data being stored.

You can always check the data type of any variable or value using the built-in `type()` function. For example, `type(10)` would show `<class 'int'>`, and `type('India')` would show `<class 'str'>`. The word "class" here signifies a category of values.

Let's revisit and expand on some of the core data types Python provides:

1.  **Numbers**: This is a category encompassing various numeric types.
    *   **Integers (`int`)**: Represent whole numbers without a fractional part. In Python 3, integers have **unlimited precision** and can grow as large as memory allows.
    *   **Floating-point numbers (`float`)**: Represent real numbers and are written with a decimal point. They can also be in scientific notation using 'E' or 'e'.
    *   Beyond basic integers and floats, Python's core objects include more complex numeric types such as **complex numbers** (like `3+4j`), **fixed-precision decimal numbers**, and **rational fraction numbers**.
    *   **Booleans** (`bool`) are also sometimes considered numeric, as the values `True` and `False` are customised versions of the integers 1 and 0, respectively.

2.  **Strings (`str`)**: Used for textual information and sequences of characters. String literals can be enclosed in single (`'...'`) or double (`"..."`) quotes. They are examples of **sequences**, maintaining a left-to-right order. You can access characters using **indexing** (starting from 0) and sections using **slicing**. The `len()` function gives the length of a string. Strings support operations like **concatenation** (`+`) and **repetition** (`*`). In Python 3.0, `str` specifically represents Unicode text, while `bytes` and `bytearray` handle binary data. Strings are **immutable**; once created, they cannot be changed in-place.

3.  **Lists (`list`)**: A **versatile** data type and a core object collection. Lists are **positionally ordered collections** of other objects, written with comma-separated values inside **square brackets `[]`**. The items within a list **need not be of the same type**. Lists are **sequences** and support indexing and slicing like strings. A key characteristic is that lists are **mutable**; you can change, add, or remove items after creation. An empty list is `[]`. The `len()` function works on lists. Lists can be nested.

4.  **Dictionaries (`dict`)**: Used to store **key/value pairs**. They are **mappings**, supporting indexing by key rather than numerical position. Dictionaries are written with **curly braces `{}`** containing `key: value` pairs. Keys should generally be unique and are often strings or numbers. Dictionaries have **no concept of order** among elements. Dictionaries are **mutable**. The `len()` function gives the number of key/value pairs.

5.  **Tuples (`tuple`)**: Similar to lists but are **immutable sequences**. This means their contents cannot be changed after creation. Tuples are typically written with values in **parentheses `()`**. Like lists and strings, tuples support sequence operations like indexing and slicing. They are often used for collections of items that should not change, or as dictionary keys (because they are immutable and therefore hashable).

6.  **Sets (`set`)**: An **unordered collection of unique and immutable objects**. They support mathematical set operations like union (`|`), intersection (`&`), and difference (`-`). Sets can be created using the `set()` constructor or with curly braces `{}` for non-empty sets. Empty sets are created with `set()` to distinguish them from empty dictionaries `{}`. `frozenset` is an immutable version of a set.

7.  **Booleans (`bool`)**: As mentioned earlier, this is a data type with only two values: `True` and `False`. It's crucial that the first letter is capitalised (`True`, `False`). These values are preassigned built-in names. In a boolean context (like in `if` statements), Python considers nonzero numbers and nonempty collection objects (strings, lists, dictionaries, tuples, sets, etc.) to be "true".

Other built-in types include **Files**, which provide interfaces to external files for persistent storage, and `None`, representing the absence of a value.

**Mutability vs. Immutability**: A key concept distinguishing data types is whether they are mutable (changeable in-place) or immutable (cannot be changed after creation).
*   **Mutable Types**: Lists, Dictionaries, Sets, and `bytearray`.
*   **Immutable Types**: Numbers (int, float, complex, decimal, fraction, bool), Strings, Tuples, and `frozenset`.

**Type Conversion (Type Casting)**: Sometimes you need to convert a value from one data type to another. You can do this using the name of the data type as a function, for example:
*   `int(x)`: converts `x` to an integer.
*   `float(x)`: converts `x` to a floating-point number.
*   `str(x)`: converts `x` to a string.
*   `bool(x)`: converts `x` to a boolean.
*   `complex(x)` or `complex(x, y)`: creates a complex number.
This is often necessary when taking input from the user using the `input()` function, as `input()` always returns a string, even if the user types numbers [conversation history].

**Dynamic Typing**: Python uses dynamic typing, which means **types are associated with objects, not variables**. A variable is simply a name (a reference) that can point to any type of object. There are no type declarations needed for variables. This makes Python very flexible. The `del` statement removes a variable's reference to an object.

**Operators and Data Types**: The data type of a value is critical because it determines what operations are valid and how operators behave. For example, the `+` operator performs arithmetic addition on numbers but **concatenation** on strings or lists. Similarly, `*` performs multiplication on numbers but **repetition** on strings or lists. Python has various categories of operators, including Arithmetic (`+`, `-`, `*`, `/`, `%`, `**`, `//`), Comparison (Relational) (`==`, `!=`, `<`, `>`, `<=`, `>=`), Assignment (`=`, `+=`, `-=`, `*=`, etc.), Logical (`and`, `or`, `not`), Bitwise, Membership (`in`, `not in`), and Identity (`is`, `is not`).

Understanding these different data types and their characteristics (like mutability and the operations they support) is fundamental to writing effective Python programs.