---
title: Operators and Expressions 1
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 9
---

Let's make understanding Python's **Operators and Expressions** easy, with a touch of emojis! 🚀

In Python, an **expression** is a combination of **values** (like `10` or `"hello"`), **variables** (names that store values), and **operators** (special symbols) that Python can evaluate to produce a result. Think of it like a mathematical equation or a phrase that calculates something. When you type an expression, the interpreter finds its value. **Operators** are the symbols that perform computations, such as addition or multiplication.

### 1. Arithmetic Operators ➕➖✖️➗

These are the most common operators you'll use for mathematical calculations.

*   **Addition (`+`)**: Adds two numbers together.
    *   Example: `3 + 2` results in `5`.
*   **Subtraction (`-`)**: Subtracts the right operand from the left.
    *   Example: `9 - 1` results in `8`.
*   **Multiplication (`*`)**: Multiplies two numbers.
    *   Example: `5 * 4` results in `20`.
*   **Division (`/`)**: Divides the left operand by the right.
    *   **Important**: In Python 3.0, division (`/`) always returns a **float** (a number with a decimal point), even if the result is a whole number.
        *   Example: `7 / 3` results in `2.333...`. `84 / 2` results in `42.0`.
*   **Floor Division (`//`)**: Divides and **rounds down** to the nearest whole integer. It specifically gives you only the **integer part** of the division.
    *   Example: `7 // 3` results in `2`.
*   **Modulus (`%`)**: Returns the **remainder** of a division.
    *   Example: `7 % 3` results in `1` (because 7 divided by 3 is 2 with a remainder of 1).
*   **Exponentiation (`**`)**: Raises the left operand to the power of the right operand.
    *   Example: `6 ** 2` results in `36` (6 squared).

**Operator Overloading (Strings and Lists)** 💬📜
A fascinating aspect of operators in Python is that some of them can have different meanings depending on the **data types** they are used with. This is called **operator overloading**.

*   **String Concatenation (`+`)**: When `+` is used with two strings, it joins them together (concatenates) to form a new string.
    *   Example: `"Hello" + "Python"` results in `"HelloPython"`.
    *   **Caution**: You cannot directly mix numbers and strings with `+`. For instance, `"abc" + 9` would cause an error. You'd need to convert the number to a string first, e.g., `"abc" + str(9)`.
*   **String Repetition (`*`)**: When `*` is used with a string and an integer, it repeats the string that many times.
    *   Example: `"Spam" * 3` results in `"SpamSpamSpam"`. This is useful for tasks like printing a line of dashes: `print("-" * 80)`.
*   **List Concatenation and Repetition**: Similar to strings, `+` concatenates lists, and `*` repeats a list.
    *   Example: ` +` results in ``.
    *   Example: `['Hi!'] * 4` results in `['Hi!', 'Hi!', 'Hi!', 'Hi!']`.

### 2. Operator Precedence 🚦

When an expression contains more than one operator, Python follows **precedence rules** to determine the order of computation. This is similar to how you learned in mathematics (e.g., multiplication before addition).

*   **Parentheses First** 🥇: Expressions inside parentheses `()` are always evaluated first. This is a great way to force the order you want and also makes your code more readable.
    *   Example: `10 + 13 * 2` results in `36` (because `13 * 2` is `26`, then `10 + 26` is `36`).
    *   Example: `(10 + 13) * 2` results in `46` (because `10 + 13` is `23`, then `23 * 2` is `46`).
*   **Common Order** (from highest to lowest precedence):
    1.  `**` (Exponentiation)
    2.  `*`, `/`, `//`, `%` (Multiplication, Division, Floor Division, Modulus)
    3.  `+`, `-` (Addition, Subtraction)
    *If operators have the same precedence, they are usually evaluated from **left to right**.*

### 3. Variables and Literals (Quick Recap) 📦✍️

*   **Literals** are the **actual values** themselves, such as `10` (an integer literal) or `"Hello"` (a string literal).
*   **Variables** are **names** that refer to these values in the computer's memory.
*   A variable is **created** the moment you first assign a value to it.
    *   Example: `my_age = 30`. Here, `my_age` is the variable, and `30` is the integer literal.
*   Literals can *only* be used on the **right side** of an assignment (`=`). Variables can be used on either side.

### 4. Relational (Comparison) Operators and Chaining ⚖️✅❌

These operators compare values and always return a **Boolean** value: either `True` ✅ or `False` ❌. Python's `True` and `False` are distinct Boolean values, though they behave like `1` and `0` respectively in numerical contexts.

*   **Greater than (`>`)**
*   **Less than (`<`)**
*   **Greater than or equal to (`>=`)**
*   **Less than or equal to (`<=`)**
*   **Equal to (`==`)**. **Note the double equals sign**; a single `=` is for assignment.
*   **Not equal to (`!=`)**.

**Chaining Comparison Operators** 🔗
Python allows you to chain multiple comparisons in a single expression, which is a shorthand for more complex logical tests.
*   Example: `1 < x < 10` is read as "is 1 less than x, AND is x less than 10?". If `x` is `5`, `1 < 5 < 10` results in `True` ✅.
*   This is equivalent to `(1 < x) and (x < 10)` but is often clearer.

### Practice Questions 🧠

1.  What will be the output of `(15 % 4) ** 2`? Explain the steps. 🔢
2.  If `name = "Alice"` and `age = "30"`, what will `name + age` produce? What about `name * 2`? Why do they behave this way? 💬
3.  Given the expression `result = 10 - 2 * 3 + 1`, what is the value of `result`? How can you change the expression to make `result` become `15`? 🧐
4.  Predict the output of the following comparison chains:
    *   `5 == 5 > 3`
    *   `10 != 10 <= 12`
    *   `True + 1` (Hint from our conversation!) ✅➕🔢

---

### Answers to Practice Questions 💡

1.  **Output**: `9` 🔢
    *   **Explanation**:
        1.  `15 % 4`: The modulus operator gives the remainder. 15 divided by 4 is 3 with a remainder of 3. So, `15 % 4` evaluates to `3`.
        2.  `3 ** 2`: The exponentiation operator raises 3 to the power of 2 (3 squared). This results in `9`.
2.  **Output**:
    *   `name + age` will produce `"Alice30"` 💬.
        *   **Explanation**: When the `+` operator is used with strings, it performs **concatenation** (joins the strings together).
    *   `name * 2` will produce `"AliceAlice"` 💬.
        *   **Explanation**: When the `*` operator is used with a string and an integer, it performs **repetition** (repeats the string that many times).
3.  **Output of `result = 10 - 2 * 3 + 1`**: `5`
    *   **Explanation**: Python follows operator precedence.
        1.  `2 * 3` is calculated first (Multiplication has higher precedence than Subtraction or Addition), which equals `6`.
        2.  The expression becomes `10 - 6 + 1`.
        3.  Then, operations of the same precedence (`-` and `+`) are evaluated from left to right. `10 - 6` is `4`.
        4.  Finally, `4 + 1` is `5`.
    *   **To make `result` become `15`**: You can use **parentheses** to override the default precedence.
        *   Example: `result = (10 - 2) * 3 + 1` (This becomes `8 * 3 + 1 = 24 + 1 = 25`, not 15).
        *   Let's try `result = 10 - (2 * 3) + 1` (This is already `5`).
        *   To get `15`, we could do `result = (10 - 2 + 1) * 3 / (3/3)` no wait...
        *   A simpler way to get `15` would be `result = (10 - 2) * (3 - 1) + 1` -> `8 * 2 + 1 = 16 + 1 = 17`
        *   Let's think of another `result = 10 + 2 * (3 + 1) - 3` -> `10 + 2 * 4 - 3` -> `10 + 8 - 3` -> `18 - 3 = 15`. This works!
        *   So, a possible modification is: `result = 10 + 2 * (3 + 1) - 3`
4.  **Output Predictions**:
    *   `5 == 5 > 3`: `True` ✅
        *   **Explanation**: This is a chained comparison. It's evaluated as `(5 == 5) and (5 > 3)`.
        *   `5 == 5` is `True`.
        *   `5 > 3` is `True`.
        *   `True and True` results in `True`.
    *   `10 != 10 <= 12`: `False` ❌
        *   **Explanation**: This is a chained comparison, evaluated as `(10 != 10) and (10 <= 12)`.
        *   `10 != 10` is `False`.
        *   `10 <= 12` is `True`.
        *   `False and True` results in `False`.
    *   `True + 1`: `2` 🔢
        *   **Explanation**: As discussed, `True` is essentially `1` in numerical contexts. So, `1 + 1` equals `2`.