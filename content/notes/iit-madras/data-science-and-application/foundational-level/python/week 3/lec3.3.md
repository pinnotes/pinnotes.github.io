---
title: While loop to Compute Factorial
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 33
---

Okay, let's write some Python code to calculate the factorial of a number using a `while` loop! 😊 As we discussed before, the `while` loop is great for repeating actions as long as a condition is true ✨. It's particularly useful when you don't know exactly how many times you need to repeat something beforehand.

Calculating the factorial of a number means multiplying all positive integers less than or equal to that number down to 1. For example, the factorial of 5 (written as 5!) is 5 * 4 * 3 * 2 * 1 = 120. The sources mention this concept and show how to implement it in code.

Here is a basic Python code snippet that uses a `while` loop to compute the factorial of a positive integer:

```python
# We first get a number from the user
# We use int(input(...)) to make sure the input is an integer
num = int(input("Enter a non-negative integer: "))

# We need a variable to store the result of the factorial
# Factorial of 0 is 1, so we initialise it to 1
factorial = 1

# We also need a variable that will change in the loop
# and help us count down from the number
# Let's start with the number itself
i = num

# Now, the while loop!
# We keep multiplying as long as 'i' is greater than 0
while i > 0:
    # Multiply the current factorial by the current value of i
    # We are building up the factorial step by step
    factorial = factorial * i

    # This is the *crucial* step for a while loop! 👇
    # We must decrease i in each repetition
    # This makes sure the condition 'i > 0' will eventually become False
    # If we don't change i, the loop would run forever (infinite loop! ⚠️)
    i = i - 1 # This can also be written as i -= 1

# Once the condition 'i > 0' is False (when i becomes 0), the loop stops
# The code execution continues here, outside the loop body
# We print the final result! 🎉
print("The factorial of", num, "is", factorial)

# We might want to add a check for negative numbers, as factorial is not defined for them
# Let's put the core logic inside an else block for that

# Here is a more complete version including the check for negative numbers:
num = int(input("Enter a non-negative integer: "))

if num < 0: # Check if the number is negative
    print("Factorial is not defined for negative numbers.")
elif num == 0: # Factorial of 0 is 1
    print("The factorial of 0 is 1")
else:
    factorial = 1
    i = num # Start the counter from the number
    while i > 0: # Continue as long as the counter is positive
        factorial = factorial * i # Multiply the factorial by the current counter value
        i = i - 1 # Decrease the counter
    print("The factorial of", num, "is", factorial)
```

**Let's break down how the `while` loop works in this code:**

1.  **Initialization:** We start with `num` (the number the user entered), `factorial` set to 1 (because 1 is the base case for multiplication), and `i` set to `num`. `i` is our counter that we'll use to control the loop.
2.  **Condition Check:** The `while i > 0:` line checks if the value of `i` is currently greater than 0.
3.  **Loop Body Execution:**
    *   If `i` is greater than 0 (the condition is `True`), the code inside the `while` loop (the indented lines) is executed.
    *   `factorial = factorial * i` takes the current value of `factorial`, multiplies it by the current value of `i`, and stores the result back in the `factorial` variable.
    *   `i = i - 1` decreases the value of `i` by 1. This is essential! It moves `i` closer to 0.
4.  **Loop Repetition:** After the last indented line is executed, Python goes back up to the `while` line and checks the condition `i > 0` again.
5.  **Termination:** Steps 3 and 4 repeat as long as `i` is greater than 0. When `i` finally becomes 0, the condition `i > 0` is `False`. At this point, the `while` loop stops executing. Python then moves on to the first line of code that is *not* indented under the `while` (the `print` statement).

Using a `while` loop for factorial is suitable here because, while we could technically use a `for` loop with a range, the `while` loop highlights the concept of repeating an action (multiplication and decrementing a counter) *while* a condition (`i > 0`) remains true. The sources note that `while` is a more general looping tool.

Remember, programming takes practice! Don't worry if it seems a bit tricky at first. Trying out the code and even drawing diagrams of how the variables change can help you understand what's happening inside the loop. Keep practising, and you'll get the hang of it! 😊👍