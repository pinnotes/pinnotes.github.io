---
title: Nested for loop
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 40.1
---

Right, let's talk about **nested `for` loops** with some emojis to make it super clear! 😊🔄

You know that a loop is something that makes your computer **repeat actions** multiple times. A `for` loop is one way to do this, especially useful for iterating over sequences or when you know you need to repeat something a specific number of times.

**Nested Loops:**
Nesting simply means putting one loop **inside** another loop. Think of it like putting a box inside a box 📦📦.

The sources tell us you can nest loops in any combination:
*   `for` inside `for`
*   `while` inside `while`
*   `for` inside `while`
*   `while` inside `for`

**Nested `for` Loops in Detail:**
When you have a `for` loop inside another `for` loop, it looks something like this:

```python
for <outer_target> in <outer_object>:  # Outer loop 🔄
    <outer_statements>               # Code inside the outer loop
    for <inner_target> in <inner_object>:  # Inner loop (nested inside the outer) ✨
        <inner_statements>           # Code inside the inner loop ✨
    <more_outer_statements>          # More code inside the outer loop (after the inner finishes for this iteration)
# Code outside both loops
```

Remember that **indentation** is key in Python to show which lines of code belong to which loop. The inner loop and its body are indented relative to the outer loop's body.

**How Execution Works:**
This is the crucial part! 🚦
1.  The **outer** loop starts its first iteration. The `<outer_target>` variable gets the first item from the `<outer_object>`.
2.  The code inside the outer loop's body runs.
3.  When the computer reaches the **inner** loop, that loop starts running.
4.  The **inner** loop completes **all** of its iterations for the *current* value of the outer loop's target. The `<inner_target>` variable takes on each item from the `<inner_object>` in turn, and the `<inner_statements>` are executed for each of those items.
5.  Once the inner loop finishes (it has gone through all its items), the computer continues executing any remaining statements in the outer loop's body (those indented at the same level as the inner `for` header).
6.  Then, the outer loop moves to its **next** iteration. The `<outer_target>` variable gets the second item from the `<outer_object>`.
7.  The code inside the outer loop's body runs again.
8.  And once again, the **entire inner** loop runs from start to finish for this new value of the outer loop's target.
9.  This process repeats until the outer loop has finished all of *its* iterations.

**Example using `range()`:**
A common use is with the `range()` function, often when you know exactly how many repetitions you need.
Let's consider the "two brothers" analogy from the source. Suppose you have two brothers, S and T, who each pick one colour from a list of 7 colours (VIBGYOR) every day. To see all the combinations of colours they could pick, you could use nested loops:

```python
s = "VIBGYOR" # The list of colours
# We want to see all combinations of s[i] and s[j]
for i in range(7):   # Outer loop: Brother S picks a colour based on index i (0 to 6)
    # print(f"Brother S picked: {s[i]}") # Optional: see what outer loop is doing
    for j in range(7): # Inner loop: Brother T picks a colour based on index j (0 to 6)
        # For EACH pick of S (controlled by i), Brother T goes through ALL his 7 picks (controlled by j)
        print(f"Combination: {s[i]} {s[j]}") # Print the combination for S's pick and T's current pick
```
Trace example from source:
*   When `i` is 0 (V), `j` runs from 0 to 6. This prints "V V", "V I", "V B", ..., "V R".
*   After `j` finishes (goes from 0 to 6), the outer loop continues. `i` becomes 1 (I).
*   Then the inner loop starts again, and `j` runs from 0 to 6 again. This prints "I V", "I I", "I B", ..., "I R".
*   This repeats for each value of `i` until `i` is 6 (R), and `j` runs 0 to 6 one last time.

This demonstrates how the inner loop completes its entire run for every single step of the outer loop. The sources show this can be used for tasks like generating multiplication tables or finding prime numbers.

**Key Points about Nested `for` Loops:**
*   They are powerful for tasks involving **combinations** or processing multi-dimensional data like matrices (lists of lists).
*   You can use `break` and `continue` statements inside nested loops. A `break` statement inside the **inner** loop will *only* exit the inner loop; the outer loop will continue its next iteration.
*   The `else` clause can be used with either the inner or outer `for` loop (or both), and it executes if the loop finishes normally without a `break`.

Nested loops can seem a bit complex at first, but going slowly, being patient, and maybe even drawing it out on paper ✏️ helps make it easier. Practice makes perfect! 👍