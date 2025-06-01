---
title: Tutorial on nested loops
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 40.2
---

Okay, let's dive into **nested `for` loops**! 😊🔄

You already know that loops are super helpful for making the computer **repeat actions**. The `for` loop is great for this, especially when you're stepping through items in a sequence like a string or a list, or when you know you need to do something a specific number of times using `range()`.

**What are Nested Loops?** 🤔📦📦
"Nested" just means putting one loop **inside** another loop. Think of it like having a main task (the outer loop) that requires doing another, smaller task (the inner loop) multiple times as part of the main task.

According to the sources, you can nest `while` and `for` loops in **any combination**:
*   `for` inside `for`
*   `while` inside `while`
*   `for` inside `while`
*   `while` inside `for`

Our focus here is on **`for` inside `for`**.

**How Nested `for` Loops Work** ⚙️🚦
When you have a `for` loop inside another `for` loop, the execution flow is like this:

```python
# Outer loop starts 🔄
for <outer_variable> in <outer_sequence>:
    # Code inside the outer loop's body
    # This includes the entire inner loop 👇

    # Inner loop starts ✨
    for <inner_variable> in <inner_sequence>:
        # Code inside the inner loop's body
        # This code runs for EACH iteration of the inner loop
        pass # Replace with actual code

    # Code in the outer loop's body that runs AFTER the inner loop finishes
    pass # Replace with actual code

# Code outside both loops (runs after the outer loop finishes)
```
Remember that **indentation** is super important in Python to show what code belongs to which loop. The code inside the inner loop is indented further than the inner loop's `for` line, and the inner loop's `for` line (and any other code in the outer loop's body) is indented under the outer loop's `for` line.

The sources explain the execution like this:
1.  The **outer loop** starts. It takes the *first* item from the `<outer_sequence>` and assigns it to the `<outer_variable>`.
2.  The computer then goes into the outer loop's body and reaches the **inner loop**.
3.  The **inner loop** starts running, just like a regular `for` loop. It iterates through *all* the items in the `<inner_sequence>`. For *each* item in the `<inner_sequence>`, it assigns it to the `<inner_variable>` and runs the inner loop's body.
4.  Once the **inner loop has completed all its iterations** for the *current* item of the outer loop, the computer continues with any remaining code in the outer loop's body (the code indented at the same level as the inner `for` statement).
5.  Then, the **outer loop** goes back to its header to get the *next* item from the `<outer_sequence>`.
6.  Steps 2-5 repeat. For *every single item* in the outer sequence, the **entire inner loop runs from start to finish**.
7.  This continues until the outer loop has processed all its items.

**Example from Sources (VIBGYOR)** 🌈🔁
One source gives a great example using a string `s = "VIBGYOR"` and nested `for` loops with `range(7)`. This is like seeing every possible combination of selecting two colours from the list (even picking the same colour twice).

```python
s = "VIBGYOR"

for i in range(7):   # Outer loop: i goes from 0 to 6 (representing the index of the first colour)
    # For each value of i...
    for j in range(7): # Inner loop: j goes from 0 to 6 (representing the index of the second colour)
        # ...the ENTIRE inner loop runs.
        # Inside the inner loop, we print the combination of the colour at index i and the colour at index j
        print(f"{s[i]} {s[j]}") # Printing combination based on indices
```

Let's trace a bit, as shown in the source:
*   When `i` is `0` (the first iteration of the outer loop), `s[i]` is 'V'.
*   The inner loop starts. `j` goes from `0` to `6`.
    *   `j` is `0`: prints "V V"
    *   `j` is `1`: prints "V I"
    *   `j` is `2`: prints "V B"
    *   ...
    *   `j` is `6`: prints "V R"
*   The inner loop finishes for `i=0`.
*   The outer loop moves to its next iteration. `i` becomes `1` (now `s[i]` is 'I').
*   The inner loop starts *again* from the beginning. `j` goes from `0` to `6`.
    *   `j` is `0`: prints "I V"
    *   `j` is `1`: prints "I I"
    *   ...
    *   `j` is `6`: prints "I R"
*   This pattern continues until `i` goes through all values up to 6, and for each `i`, `j` completes its full run from 0 to 6.

This is powerful for tasks like generating combinations, working with tables or matrices (lists of lists).

**Other Concepts with Nested Loops:**
*   **`break` and `continue`:** These can be used in nested loops. Crucially, a `break` statement inside the **inner loop** will **only** exit the inner loop. The outer loop will then continue its next iteration.
*   **`else` Clause:** Like single loops, nested loops can have an `else` clause. An `else` block on a loop executes *only* if the loop finishes normally (without hitting a `break`).

Nested loops might look a "little complex" at first, but the sources reassure us that it's "not at all complicated" and you'll master it with time. Taking it slow, being patient, maybe using a pen and paper to diagram what's happening with the variables can make things easier. As with learning anything new, especially coding, **practice makes one perfect**.

Keep practicing and happy coding! 👍💻