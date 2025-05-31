---
title: Operators and Expressions 2
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 10
---

Okay, let's continue our discussion on **Operators and Expressions**, building upon the foundational concepts we covered previously. The sources provide further details and examples across various operator types and how they form expressions.

As established, in Python, expressions are combinations of values, variables, and **operators** that are evaluated by the interpreter to produce a value. Operators are special symbols or keywords that perform computations or actions on operands.

The sources categorize operators into several types:

1.  **Arithmetic Operators**: These perform mathematical operations.
    *   `+`: Addition. For numbers, it adds. For sequences like strings or lists, it performs concatenation.
    *   `-`: Subtraction. For numbers, it subtracts.
    *   `*`: Multiplication. For numbers, it multiplies. For sequences, it performs repetition.
    *   `/`: Division. In Python 3.0, this performs **true division**, keeping fractional remainders. In Python 2.6, it performed classic division, truncating for integers.
    *   `//`: **Floor Division**. This divides and truncates fractional remainders, resulting in the integer quotient.
    *   `%`: **Modulus**. This divides the left operand by the right and returns the remainder.
    *   `**`: **Exponentiation** (power). `x ** y` calculates x raised to the power of y. Note that `^` is a bitwise operator in Python, not exponentiation.
    *   There are also unary `+` and `-` for identity and negation.

2.  **Comparison (Relational) Operators**: These compare values and return a Boolean result (`True` or `False`).
    *   `==`: Equal value.
    *   `!=`: Not equal value. Python 2.6 also used `<>` for not equal, but this was removed in Python 3.0.
    *   `>`: Greater than.
    *   `<`: Less than.
    *   `>=`: Greater than or equal to.
    *   `<=`: Less than or equal to.
    *   Comparison operators can be **chained**. For example, `X < Y < Z` is evaluated similarly to `X < Y and Y < Z`. If all relational operators give a true result, the chain is true.
    *   In Python 3.0, nonnumeric mixed-type magnitude comparisons are generally not allowed and raise exceptions, unlike in Python 2.x. Magnitude comparisons for dictionaries are also no longer supported in Python 3.0, though equality tests still are.

3.  **Assignment Operators**: Used to assign values.
    *   `=`: Basic assignment.
    *   **Augmented assignment operators** (`+=`, `-=`, `*=`, `/=`, `%=`, `**=`, `//=`, etc.) provide a shorthand. For instance, `x += 1` is equivalent to `x = x + 1`. These work on any type that supports the implied binary expression.

4.  **Logical Operators**: These combine Boolean expressions using the keywords `and`, `or`, and `not`.
    *   `and`: True if both operands are true.
    *   `or`: True if either operand is true.
    *   `not`: Reverses the logical state of the operand.
    *   While comparison operators return `True` or `False` (which are essentially custom versions of integers 1 and 0), the `and` and `or` operators can return an object (either the left or right operand), not necessarily just `True` or `False`. In a Boolean context (like an `if` statement), a nonzero number or a nonempty collection object is considered true.

5.  **Membership Operators**: `in` and `not in`. These test if a value is present in a sequence (like strings, lists, or tuples) or a set.

6.  **Identity Operators**: `is` and `is not`. These test if two variables point to the same object in memory, which is a stricter test than `==`. For example, `True is 1` is `False`, but `True == 1` is `True`.

7.  **Bitwise Operators**: These operate on the individual bits of integers (`&`, `|`, `^`, `~`, `<<`, `>>`).

8.  **Other Operators/Operations**:
    *   Indexing (`[]`). Used for accessing elements in sequences or mappings.
    *   Slicing (`[:]`). Used for extracting subsequences from sequences. Python 3.0 allows extended slicing with three parts: `X[I:J:K]`.
    *   Call (`()`). Used to invoke functions, methods, or classes.
    *   Attribute reference (`.`). Used to access attributes or methods of objects.

**Operator Precedence**:
When an expression includes multiple operators, Python follows **operator precedence** rules to determine the order of evaluation.
*   **Parentheses (`()`)** have the highest precedence and can override the default order. Expressions within parentheses are evaluated first.
*   **Exponentiation (`**`)** is next.
*   **Multiplication (`*`), Division (`/`, `//`), and Modulus (`%`)** have higher precedence than Addition (`+`) and Subtraction (`-`).
*   Operators at the same precedence level are generally evaluated from **left to right**, except for exponentiation.
*   It is often good practice to use parentheses for clarity even when not strictly required by precedence. For example, `2 * 3 + 4` evaluates to 10 because multiplication happens first, while `2 * (3 + 4)` evaluates to 14 because parentheses force the addition first.

**Expressions and Statements**:
Expressions can appear as **statements**. Common forms of expression statements include calling functions and methods. In Python 3.0, the `print()` function is typically used as an expression statement. Expressions typed directly into the interactive interpreter are also expression statements.

**Operators and Data Types**:
The behaviour of an operator depends on the type of object it is applied to. For instance, `+` performs addition on numbers but concatenation on strings, and `*` performs multiplication on numbers but repetition on strings. Some operations like indexing (`[]`) and slicing (`[:]`) are specifically defined for sequence types like strings, lists, and tuples.

**Operator Overloading**:
Classes in Python can intercept and respond to operators by defining special methods (often starting and ending with double underscores). This is known as **operator overloading**.
*   For example, defining `__add__(self, other)` in a class allows instances of that class to be used with the `+` operator.
*   The `__init__` method, called when an object is created (e.g., `X = Class(args)`), is the most commonly used operator overloading method.
*   Methods like `__getitem__` and `__setitem__` can be defined to support indexing and slicing (`[]`) for custom objects.
*   `__str__` and `__repr__` handle how objects are displayed when printed or represented.
*   Methods like `__bool__` or `__len__` (in Python 2.6, `__nonzero__`) determine how an object evaluates in a Boolean context.
*   Operator overloading is useful when a custom object needs to behave like a built-in type (emulating its interface) or when the operations naturally map to the object's purpose, such as adding vector objects. Python often tries a specific overloading method first and falls back to a more general one if needed; for instance, iteration might try `__iter__` before `__getitem__`, and in-place addition (`+=`) tries `__iadd__` before `__add__`.