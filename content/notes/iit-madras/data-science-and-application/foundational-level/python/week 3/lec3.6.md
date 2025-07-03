---
title: for loop to add the first n numbers
date: 2025-05-08
weight: 36
---

Okay, let's use a **`for` loop** to add up the first 'n' numbers! 🤩 This is a classic programming task that helps you see how loops can automate repetition for calculations.

Remember how we introduced the `for` loop? It's great for when you want to do something a specific number of times or go through items in a sequence ✨. To add the first 'n' numbers, we know exactly how many times we need to add: 'n' times!

Here's the goal: We want to calculate the sum, like 0 + 1 + 2 + 3 + ... + (n-1) (if we start from 0) or 1 + 2 + 3 + ... + n (if we start from 1). Let's follow an example from the sources which adds 0 through 9, resulting in 45.

To do this with a `for` loop, we need two main things:

1.  An **accumulator** variable: This is a variable that will start at 0 and "accumulate" or collect the sum as we go along. Think of it like an empty bucket 🪣 that you drop numbers into one by one. We often call this variable `sum` or `answer`.
2.  A way to generate the numbers we want to add (0, 1, 2, ... up to n-1 or 1, 2, ... up to n). The **`range()`** function is perfect for this! 🔢.

Here's the basic code structure based on the sources:

```python
# 1. Initialize the accumulator bucket! 🪣
answer = 0 # Start the sum at zero

# 2. Use a for loop with range() to get the numbers 🔢
# range(10) gives numbers 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
for i in range(10):
    # 3. Inside the loop, add the current number (i) to the accumulator
    answer = answer + i # Or the shorthand: answer += i
    # This line runs for each number produced by range()

# 4. After the loop finishes (no more numbers in the range),
#    the 'answer' variable holds the final sum. 🎉
print(answer) # Display the result
```

Let's trace what happens step-by-step when the loop runs for `range(10)`:

*   Before the loop: `answer` is 0.
*   Loop starts. The `for` loop gives the first number from `range(10)` to the variable `i`.
*   Iteration 1: `i` becomes 0.
    *   `answer = answer + i` becomes `answer = 0 + 0`, so `answer` is now 0.
*   Iteration 2: `i` becomes 1.
    *   `answer = answer + i` becomes `answer = 0 + 1`, so `answer` is now 1.
*   Iteration 3: `i` becomes 2.
    *   `answer = answer + i` becomes `answer = 1 + 2`, so `answer` is now 3.
*   Iteration 4: `i` becomes 3.
    *   `answer = answer + i` becomes `answer = 3 + 3`, so `answer` is now 6.
*   Iteration 5: `i` becomes 4.
    *   `answer = answer + i` becomes `answer = 6 + 4`, so `answer` is now 10.
*   Iteration 6: `i` becomes 5.
    *   `answer = answer + i` becomes `answer = 10 + 5`, so `answer` is now 15.
*   Iteration 7: `i` becomes 6.
    *   `answer = answer + i` becomes `answer = 15 + 6`, so `answer` is now 21.
*   Iteration 8: `i` becomes 7.
    *   `answer = answer + i` becomes `answer = 21 + 7`, so `answer` is now 28.
*   Iteration 9: `i` becomes 8.
    *   `answer = answer + i` becomes `answer = 28 + 8`, so `answer` is now 36.
*   Iteration 10: `i` becomes 9.
    *   `answer = answer + i` becomes `answer = 36 + 9`, so `answer` is now 45.
*   `range(10)` is exhausted (it only goes up to 9). The loop finishes.
*   The code after the loop runs. `print(answer)` displays 45! ✅.

This demonstrates how the `for` loop, combined with `range()`, makes adding a sequence of numbers much easier and more efficient than doing it manually. It's a fundamental pattern you'll use frequently in programming! 💪😊