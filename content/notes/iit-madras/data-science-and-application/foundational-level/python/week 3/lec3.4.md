---
title: Tutorial on while loop
date: 2025-05-08
weight: 34
---

Okay, let's dive deeper into the **`while` loop**! 😊 It's a really fundamental concept in programming for making your computer do repetitive tasks.

Think of the `while` loop like setting a condition for Python and telling it: "**Keep doing this set of actions ✨ as long as this condition remains true**".

This is different from an `if` statement, which checks a condition just *once*. A `while` loop keeps checking the condition and repeating its work. The code inside the loop will execute over and over again as long as the condition is `True`.

A key reason to choose a `while` loop is often when **you don't know beforehand exactly how many times you need to repeat something** 🤔. For example, if you want to keep asking a user for input until they type a specific word like "stop", a `while` loop is perfect because you don't know how many tries it will take. In contrast, a `for` loop is often used when you *do* know the number of repetitions, like repeating something exactly 10 times. The sources describe `while` as a more general way of executing repetitive tasks compared to `for`.

Here is the basic structure, or **syntax**, of a `while` loop in Python:

```python
while condition_is_true:
    # This block of code is the 'loop body'
    # It gets repeated while the condition is True
    # Remember, these lines must be indented! 👇
    # Something here MUST change so the condition eventually becomes False
    # ... other statements ...
```

Let's break down the parts based on the sources:

*   **`while` keyword**: This keyword signals the start of a while loop. It is one of the reserved words in Python.
*   **Condition (or `expression`)**: This is a test that Python checks before each repetition of the loop. It needs to evaluate to either `True` or `False`. The loop continues only if this condition is `True`. Any non-zero value is considered `True`.
*   **Colon `:`**: Just like with other compound statements such as `if`, a colon is needed at the end of the `while` line. Forgetting the colon is noted as a common coding mistake for beginners.
*   **Indented block**: The lines of code that are indented directly below the `while` header form the **loop body**. These are the statements that are repeatedly executed. Python uses indentation to define these blocks of code.

**How the `while` loop works (Flow of Execution)**:

1.  Python checks the `condition_is_true`.
2.  If the condition is `False`, the loop body is skipped entirely, and execution continues at the first statement *after* the indented block. If the condition is initially false, the loop body is never run.
3.  If the condition is `True`, Python executes all the statements in the indented block (the loop body).
4.  After executing the last statement in the loop body, Python jumps back up to the `while` line and checks the `condition_is_true` again. This repeats from step 2.
This process is often called **iteration** or **looping** because it repeats.

**Crucially: Avoiding Infinite Loops** ⚠️🔄

It is absolutely **essential** that something inside the `while` loop's body changes a variable used in the condition, so that the condition will eventually become `False`. If the condition never becomes `False`, the loop will run forever, which is called an **infinite loop**. This can make your program unresponsive. You must be cautious when using `while` loops because of this possibility.

**Useful Statements Inside Loops**:

You can also use special statements within loops to control their execution:

*   **`break`**: This statement immediately exits the current loop entirely. The program continues execution at the first statement *after* the loop. `break` can sometimes help avoid nesting. Using `while True` with a `break` inside is a common pattern for loops where the exit condition is checked somewhere in the middle.
*   **`continue`**: This statement skips the rest of the current iteration of the loop and immediately jumps back to the top to check the condition again (for a `while` loop). It can also help avoid nesting in some cases.
*   **`pass`**: This is an empty statement that does nothing. It's sometimes used as a placeholder where a statement is syntactically required but you don't want to do anything yet. It's not tied only to loops but is often discussed with `break` and `continue`. `while True: pass` would be an infinite loop that does nothing.
*   **`else` clause**: `while` loops (and `for` loops) in Python can have an optional `else` clause. The code in the `else` block is executed *only* if the loop finishes normally, without hitting a `break` statement.

Learning programming, including understanding loops, takes patience and practice. It might seem confusing at first. Looking back at examples and trying them yourself multiple times can help. Using tools like a pen and paper to draw diagrams of how your variables change step-by-step inside the loop can be very helpful.

We recently looked at calculating the factorial of a number using a `while` loop in our conversation. That was a great example of using the loop to repeat the multiplication and decrementing a counter (`i = i - 1`) until the condition (`i > 0`) became false, ensuring the loop terminated correctly.

Keep practising, and you'll master `while` loops! 😊👍