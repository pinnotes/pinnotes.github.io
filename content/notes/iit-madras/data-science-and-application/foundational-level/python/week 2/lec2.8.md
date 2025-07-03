---
title: Introduction to the if statement
date: 2025-05-08
weight: 23
---

The `if` statement is a very powerful possibility in any programming language, serving as the **main statement used for selecting from alternative actions based on test results**. It is the primary selection tool in Python and represents much of the logic a Python program possesses. Python uses `if` tests to code logic in scripts.

In simple terms, the Python `if` statement selects actions to perform. It evaluates expressions which produce `TRUE` or `FALSE` as the outcome, and based on this outcome, you determine which action to take and which statements to execute.

**Basic Syntax and Structure**

The `if` statement is Python's first compound statement. Like all compound Python statements, it consists of a header line followed by an indented body.
The general form begins with the word `if`, followed by an expression that is interpreted as a true or false result. The header line ends with a colon (`:`).
The block of code to run if the test is true is associated with the header and must be indented. All statements in a nested block must be indented the same amount. In Python, these groups of statements making up a single code block are called suites.

A simple `if` statement looks like this:
```python
if expression:
    statement(s)
```
If the boolean expression evaluates to `TRUE`, then the block of statement(s) inside the `if` statement is executed. If the condition is true, the indented statement runs. There must be at least one statement in the body, or you can use the `pass` statement as a placeholder if you don't want any code to execute yet.

Python assumes any non-zero and non-null values as `TRUE`, and any zero or null values as `FALSE`. For example, a non-empty string is True, while an empty string is False; a non-zero number is True, while 0.0 is False. This means you can test an object directly (`if X:`) instead of comparing it to an empty value (`if X != ''`). The built-in words `True` and `False` are essentially predefined to have the same meanings as integer 1 and 0 respectively.

**Alternative Execution (`else`)**

A second form of the `if` statement is "alternative execution," which handles the case when the initial condition is false. This is achieved using an optional `else` statement.
The `else` statement contains a block of code that executes if the conditional expression in the `if` statement resolves to `FALSE`. The `else` part also has an associated block of nested statements, indented under the header line. Exactly one of the alternatives (`if` block or `else` block) will run.

The syntax is:
```python
if expression:
    statement(s) # Executed if expression is TRUE
else:
    statement(s) # Executed if expression is FALSE
```

**Chained Conditionals (`elif`)**

Sometimes there are more than two possibilities, requiring more than two branches. For this, you can use one or more optional `elif` ("else if") tests.
The `elif` statement allows you to check another condition if the previous `if` or `elif` conditions were false. Each `elif` also has an associated indented block of statements.
The conditions are checked in order from top to bottom. Python executes the block of code associated with the first test that evaluates to true. If one of them is true, the corresponding branch runs and the statement ends. If all `if` and `elif` tests are false, the optional `else` block (if present) is executed.

The general form with `elif` and `else` looks like this:
```python
if <test1>:               # if test
    <statements1>         # Associated block
elif <test2>:             # Optional elifs
    <statements2>
else:                     # Optional else
    <statements3>
```
There is no limit on the number of `elif` statements. This structure is often the most straightforward way to code a multiway branch.

**Nested Conditionals**

You can write an `if` statement within another `if` statement, or inside another `if...elif...else` construct. When code is conditional or repeated, you simply indent it further to the right. This allows for arbitrarily nested logic.

For example, an `if` statement nested in the `else` clause of another `if` statement:
```python
if num % 2 == 0:
    # ... code for even numbers
else:
    if num % 3 == 0:
        # ... code for odd but divisible by 3
    else:
        # ... code for odd and not divisible by 3
```
The `if`, `elif`, and `else` parts are associated as part of the same statement because they line up vertically (share the same level of indentation).

**Other `if` Statement Variations and Concepts**

*   **Single Statement Suites**: If the block of an `if` clause is only a single line, it can sometimes go on the same line as the header statement after the colon. This is often seen for simple `if` statements with a single test and action. Example: `if var == 100 : print ("Value of expression is 100")`.
*   **Comparison and Logical Operators**: `if` statements use comparison operators (`>`, `>=`, `<`, `<=`, `==`, `!=`) and logical operators (`and`, `or`, `not`) to form boolean expressions (conditions).
*   **Conditional Expression (Ternary Operator)**: For simple assignments or returns based on a condition, Python (since 2.5) offers a concise alternative to the full `if/else` statement. The syntax is `Y if X else Z`, which evaluates to `Y` if `X` is true, and `Z` otherwise. It has the exact same effect as a four-line `if` statement (`if X: A = Y else: A = Z`), but is simpler to code for simple cases. Like the boolean operators, it short-circuits, meaning only the necessary expression (`Y` or `Z`) is evaluated.
*   **Pass Statement**: As mentioned, `pass` can be used in an `if` block where a statement is syntactically required but you don't want any code to execute yet.

The `if` statement is a control-flow statement that allows programs to execute different code depending on the state of the program. It is used in almost every piece of code and is considered a fundamental statement form in Python.