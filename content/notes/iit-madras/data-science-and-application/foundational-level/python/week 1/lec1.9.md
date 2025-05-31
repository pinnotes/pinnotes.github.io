---
title: Operators and Expressions 1
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 9
---

Okay, let's delve into **Operators and Expressions**, building upon our previous discussions about Python's data types and their associated operations.

As we've discussed, in Python, programs "do things with stuff". The "stuff" refers to the objects (data), and the "things" are the operations we perform on those objects. **Expressions** are a fundamental part of this; they are combinations of values, variables, and **operators** that the Python interpreter evaluates to compute a value. A single value or a variable name can also be considered an expression.

**Operators** are special symbols or keywords that represent computations or actions to be performed on values, known as **operands**. Python provides a rich set of built-in operators:

*   **Arithmetic Operators**: These perform mathematical calculations.
    *   `+` Addition
    *   `-` Subtraction
    *   `*` Multiplication
    *   `/` Division. In Python 3.0, this performs **true division**, retaining fractional remainders. In Python 2.6, it performs **classic division**, truncating for integers.
    *   `//` Floor Division. This divides and **truncates fractional remainders**, giving only the integer quotient part.
    *   `%` Modulus. This divides the left operand by the right and returns the **remainder**.
    *   `**` Exponentiation (power). `x ** y` calculates x raised to the power of y. In some other languages, `^` might be used for exponentiation, but in Python, `^` is a bitwise operator.
    *   There are also unary `+` and `-` for identity and negation.

*   **Comparison (Relational) Operators**: These compare values and return a Boolean result (`True` or `False`).
    *   `==` Equal value
    *   `!=` Not equal value. In Python 2.6, `<>` also meant not equal, but this is removed in Python 3.0; `!=` is the recommended form.
    *   `>` Greater than
    *   `<` Less than
    *   `>=` Greater than or equal to
    *   `<=` Less than or equal to

*   **Assignment Operators**: These are used to assign values to variables or update variable values.
    *   `=` Basic assignment. This binds a name to a single object.
    *   **Augmented assignment operators** (`+=`, `-=`, `*=`, `/=`, `%=`, `**=`, `//=`, etc.) provide shorthand for traditional forms like `X = X + Y`. For example, `x += 1` is equivalent to `x = x + 1`. These work on any type that supports the implied binary expression.
    *   There are also multiple forms of assignment like **sequence assignment** (`a, b, c = sequence`), **extended sequence unpacking** (`a, *b = sequence` in Python 3.0), and **multiple-target assignment** (`spam = ham = 'lunch'`).

*   **Logical Operators**: These combine Boolean expressions and are written as keywords: `and`, `or`, and `not`.
    *   `and` is true if both operands are true.
    *   `or` is true if either operand is true.
    *   `not` reverses the logical state of its operand.
    *   While comparison operators return `True` or `False` (custom versions of 1 and 0), `and` and `or` operators can return an object, not necessarily just `True` or `False`. In a Boolean context (like `if` statements), non-zero numbers and non-empty collection objects are considered "true".

*   **Membership Operators**: `in` and `not in`. These test if a value is present in a sequence (like strings, lists, or tuples) or a set. For example, `'e' in x` checks if the character 'e' is in set `x`.

*   **Identity Operators**: `is` and `is not`. These test if two variables point to the **same object in memory**, a stricter form of equality than `==`. For instance, `True is 1` is `False`, while `True == 1` is `True`.

*   **Bitwise Operators**: These operate on individual bits of integers (`&`, `|`, `^`, `~`, `<<`, `>>`).

*   **Other Operators/Operations**:
    *   Indexing (`[]`) and Slicing (`[:]`). These are sequence operations that work on strings, lists, and tuples.
    *   Call (`()`) is used for invoking functions, methods, or classes.
    *   Attribute reference (`.`) is used to access attributes of objects.

**Operator Precedence**:
When an expression contains multiple operators, Python follows **operator precedence rules** to determine the order in which parts of the expression are computed. Operators lower in the precedence table generally bind more tightly and are evaluated first.

*   **Parentheses** (`()`) have the highest precedence and override the default rules, allowing you to force the order of evaluation.
*   **Exponentiation** (`**`) is next.
*   **Multiplication (`*`), Division (`/`, `//`), and Modulus (`%`)** have higher precedence than Addition (`+`) and Subtraction (`-`).
*   Operators at the same precedence level (like `*` and `/`) are generally evaluated from **left to right**, with the exception of exponentiation, which groups right to left.
*   For clarity, it's often recommended to use parentheses even when not strictly necessary according to precedence rules.

For example, in the expression `2 * 3 + 4`, multiplication (`*`) has higher precedence than addition (`+`), so `2 * 3` (which is 6) is calculated first, and then `4` is added, resulting in 10. If you want the addition to happen first, you use parentheses: `2 * (3 + 4)` evaluates `3 + 4` (which is 7) first, then multiplies by 2, resulting in 14.

**Chaining Operators**:
Python allows **chaining relational operators** like `1 < x < 10`. This is evaluated similarly to `1 < x and x < 10`. If `x` is 5, `5 < 10 < 100` evaluates as `(5 < 10) and (10 < 100)`, which is `True and True`, resulting in `True`.

**Operators and Data Types**:
The **data type** of an object dictates which operations are valid and how operators behave. The `+` operator performs arithmetic addition on numbers but **concatenation** on strings or lists. The `*` operator performs multiplication on numbers but **repetition** on strings or lists.

For sequences (strings, lists, tuples), indexing (`[]`) and slicing (`[:]`) expressions retrieve parts of the sequence. Using the `in` operator checks for membership within a sequence or set.

Strings are **immutable**, meaning their contents cannot be changed in-place. Operations like concatenation or slicing on strings create *new* string objects. Lists and dictionaries, however, are **mutable** and can be changed in-place by certain operations or assignments.

**Expression Statements**:
Expressions can appear as statements, particularly in the interactive interpreter where typing an expression causes its result to be printed. Other common **expression statement forms** include calling functions and methods, using the `print()` function (which is a function call in Python 3), and the `yield` expression in generator functions.

**Operator Overloading in Classes**:
For user-defined objects created with classes, **operator overloading** allows them to **intercept and respond to operations** that normally work on built-in types, such as addition (`+`), slicing (`[]`), or printing (`print()`). This is achieved by defining special methods within the class (e.g., `__add__` for `+`, `__getitem__` for `[]`, `__str__` or `__repr__` for printing). This is useful when a custom class needs to **emulate the interface of a built-in type**. The `__init__` method, used to initialise an object's state upon creation, is the most commonly used operator overloading method. Classes can also define `__bool__` or `__len__` to customise how their instances evaluate in a Boolean context.

Understanding these operators, how they form expressions, and how Python evaluates them based on type and precedence is key to writing correct and predictable code.