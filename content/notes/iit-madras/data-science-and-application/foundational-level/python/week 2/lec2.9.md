---
title: Tutorial on if, else and else-if (elif) conditions
date: 2025-05-08
weight: 23
---

Based on the sources and our conversation, the `if` statement is a fundamental and powerful tool in Python programming used for **decision making** or **selecting from alternative actions based on test results**. It is considered the **primary selection tool in Python** and represents much of the logic a Python program possesses. The `if` statement evaluates expressions that produce `TRUE` or `FALSE` outcomes, and based on this outcome, the program determines which statements to execute.

The concept of `if` is part of a core triangle of powerful programming entities, along with `for` and `while`, which are crucial for understanding programming completely. The `if` statement is used in **almost every piece of code** and is found in 99 percent of code written.

Here's a breakdown of the `if` statement in Python as described in the sources:

1.  **Basic `if` Statement**
    *   The simplest form consists of the word `if`, followed by an expression (the condition) that is interpreted as a true or false result.
    *   The header line ends with a colon (`:`).
    *   A **block** or **suite** of code follows the header. This block contains the statement(s) to run **if the test is true**.
    *   All statements within this block **must be indented** the same amount. Indentation is how Python groups statements into blocks; there are no braces or "begin/end" delimiters like in C-like languages.
    *   If the boolean expression evaluates to `TRUE`, the block of statements is executed. If it's `FALSE`, nothing associated with that `if` block is executed, and the program continues after the `if` statement's block.
    *   There must be at least one statement in the body, or you can use the `pass` statement as a placeholder. `pass` is a no-operation placeholder used when syntax requires a statement but you have nothing to do.
    *   Example syntax:
        ```python
        if expression:
            statement(s) # indented block
        ```

2.  **Alternative Execution (`else`)**
    *   The `if` statement can be followed by an optional `else` statement.
    *   The `else` statement contains a block of code that executes **if the conditional expression in the `if` statement resolves to `FALSE`**.
    *   The `else` part also has an associated block of nested statements, indented under the `else:` header.
    *   Exactly one of the alternatives (`if` block or `else` block) will run.
    *   There can be at most one `else` statement following an `if`.
    *   Example syntax:
        ```python
        if expression:
            statement(s) # Executed if expression is TRUE
        else:
            statement(s) # Executed if expression is FALSE
        ```
    *   An example given is checking if a number is even or odd or calculating a discount based on an amount.

3.  **Chained Conditionals (`elif`)**
    *   When there are **more than two possibilities**, you can use one or more optional `elif` ("else if") tests.
    *   The `elif` statement allows you to **check another condition if the previous `if` or `elif` conditions were false**.
    *   Each `elif` also has an associated indented block of statements.
    *   The conditions (`if`, then `elif`s) are checked in order from top to bottom. Python executes the block of code associated with the **first test that evaluates to true**.
    *   If one condition is true, its corresponding block runs, and the entire `if`/`elif`/`else` statement ends.
    *   If all `if` and `elif` tests are false, the optional `else` block (if present) is executed.
    *   There is no limit on the number of `elif` statements.
    *   This structure is the most straightforward way to code a multiway branch. Python does **not have a `switch` or `case` statement** like some other languages; multiway branching is typically done with `if`/`elif`/`else` or by using dictionaries.
    *   Using `elif` can make code cleaner compared to nested `if` statements, especially when checking ranges of values (like for grading based on marks).
    *   Example syntax:
        ```python
        if <test1>:
            <statements1> # if test, associated block
        elif <test2>:
            <statements2> # Optional elif, associated block
        # ... more elifs ...
        else:
            <statements3> # Optional else, associated block
        ```
    *   An example shows checking a variable `x` against different values ('roger', 'bugs') using `if` and `elif`.

4.  **Truth Tests and Boolean Values**
    *   `if` statements rely on **truth tests** or **Boolean expressions**.
    *   Python interprets **any non-zero and non-null values as `TRUE`**, and **any zero or null values as `FALSE`**. For example, a non-empty string or list is `True`, while an empty string (`""`), empty list (`[]`), empty dictionary (`{}`), or the value `None` is `False`. A non-zero number (like `1`) is `True`, and `0.0` is `False`.
    *   This means you can test an object directly (`if X:`) instead of comparing it to an empty value (`if X != '':`).
    *   The built-in values `True` and `False` are essentially predefined to have the same meanings as integer 1 and 0, respectively.
    *   **Comparison operators** (`>`, `>=`, `<`, `<=`, `==`, `!=`) are used to create boolean expressions. They return `True` or `False`.
    *   **Logical operators** (`and`, `or`, `not`) are used to combine boolean expressions. In Python, these are typed as words. `and` and `or` perform **short-circuit evaluation**. For `or`, Python returns the first true operand it finds; for `and`, it returns the first false operand. The `not` operator negates a boolean expression.

5.  **Nested Conditionals**
    *   You can write an `if` statement within another `if` statement, or inside another `if...elif...else` construct.
    *   When code is conditional or repeated, you simply indent it further to the right.
    *   An example shows an `if` statement nested in the `else` clause of another `if` statement. While possible, deeply nested conditionals can become difficult to read.

6.  **Single Statement Suites**
    *   If the block of an `if` clause is only a single line, it can sometimes go on the same line as the header statement after the colon. Example: `if var == 100 : print ("Value of expression is 100")`. This saves an extra line.

7.  **Conditional Expression (Ternary Operator)**
    *   For simple cases, Python (since 2.5) offers a concise way to express a simple `if/else` that returns or assigns a value.
    *   The syntax is `Y if X else Z`. It evaluates to `Y` if `X` is true, and `Z` otherwise.
    *   It has the same effect as a four-line `if` statement (`if X: A = Y else: A = Z`) but is simpler to code for basic scenarios.
    *   Like `and` and `or`, it short-circuits, evaluating only the necessary expression (`Y` or `Z`).
    *   It can be used to simplify code, such as in recursive functions or handling default values.
    *   The sources mention an older `and/or` combination that achieved a similar effect but was trickier and less preferred. The `Y if X else Z` form is recommended.

In summary, the `if` statement and its variations (`else` and `elif`) are fundamental control-flow statements in Python that allow programs to execute different code paths based on conditions evaluated as true or false. Indentation is critical for defining the blocks of code associated with each part of the statement.