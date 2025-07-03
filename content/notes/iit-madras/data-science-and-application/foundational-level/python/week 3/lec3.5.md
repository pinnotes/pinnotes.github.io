---
title: Introduction to for loop
date: 2025-05-08
weight: 35
---

Okay, let's introduce the **`for` loop**! 😊 It's another super useful tool in Python for making your computer repeat things ✨, just like the `while` loop we discussed.

While the `while` loop is great for repeating actions **as long as a condition is true**, the `for` loop is typically used for two main scenarios:

1.  When you know **exactly how many times** you want to repeat something.
2.  When you want to go through (or **iterate over**) **each item** in a sequence or collection, like a string, list, or tuple.

Think of the `for` loop as saying to Python: "**For each item in this collection**, or **for each number in this range, do this set of actions**". It automates the process of moving from one item or step to the next.

Here is the basic structure, or **syntax**, of a `for` loop in Python:

```python
for item in collection:
    # This block of code is the 'loop body'
    # It gets repeated for each 'item' in the 'collection'
    # Remember, these lines must be indented! 👇
    # Inside the loop, the 'item' variable holds the current item
    # ... other statements ...
```

Let's break down the parts:

*   **`for` keyword**: Signals the start of a `for` loop.
*   **`<target>` (or `item`)**: This is a variable name you choose. In each repetition (or iteration), Python automatically assigns the *next* item from the `collection` to this variable.
*   **`in` keyword**: Connects the target variable to the collection.
*   **`<object>` (or `collection`)**: This is the sequence or iterable object that the loop will go through. It could be a string, a list, a tuple, or anything that is "iterable".
*   **Colon `:`**: Required at the end of the `for` line. Forgetting it is a very common beginner mistake.
*   **Indented block**: The statements that are repeated. They must be indented.

**How the `for` loop works (Flow of Execution)**:

1.  Python gets the first item from the `collection`.
2.  It assigns this item to the `<target>` variable.
3.  It executes the code in the indented loop body.
4.  After the body finishes, Python goes back to the top of the loop and gets the *next* item from the `collection`.
5.  Steps 2-4 repeat for every item in the `collection`.
6.  Once there are no more items left in the `collection`, the loop finishes, and execution continues at the first line *after* the indented block.

**Common Ways to Use `for` Loops**:

*   **Looping a fixed number of times** using `range()`: The `range()` function generates a sequence of numbers.
    ```python
    # Repeat something 5 times
    for i in range(5): # i will take values 0, 1, 2, 3, 4
        print("Hello! 👋") # This line runs 5 times
    ```
    `range()` can also start from a different number (`range(1, 11)`) or count in steps (`range(0, 10, 2)`).
*   **Iterating directly over a sequence** (sometimes called "for each"):
    ```python
    greeting = "Python"
    # Go through each character in the string
    for letter in greeting:
        print(letter) # 'letter' will be 'P', then 'y', then 't', etc.
    ```
    This is often simpler and more direct than using a `while` loop with manual indexing for traversing sequences.

The `for` loop is a "generic sequence iterator" and is generally simpler to code and sometimes quicker for stepping through sequences compared to a `while` loop. It is part of the "iteration protocol" in Python which many tools use.

Learning programming concepts like loops takes practice. Don't hesitate to write out code, try small examples, or even draw diagrams on paper to trace how variables change during the loop.

Happy coding! 😊👍