---
title: Python Week 3
weight: 3
subtitle: Graded Assignment
categories:
- Python Graded Assignment
---

---

## Multiple Choice Questions 🧠

{{< border type="question" >}}
**1**) Select the correct implementation of a program that accepts a positive integer *x* as input and prints the maximum value of the integer *y* such that $2^y ≤ x$.

<u>Sample Test Cases</u>

| Input | Output |
| :-- | :-- |
| 100 | 6 |
| 256 | 8 |

Select all correct implementations of the program. (MSQ)

```python {linenos=table,linenostart=1}
x = int(input())
y = 0
while x > 1:
    x = x // 2
    y = y + 1
print(y)
```

```python {linenos=table,linenostart=1}
x = int(input())
y = 0
while x >= 1:
    x = x // 2
    y = y + 1
print(y)
```

```python {linenos=table,linenostart=1}
x = int(input())
y = 0
while x > 1:
    x = x / 2
    y = y + 1
print(y)
```

```python {linenos=table,linenostart=1}
x = input()
y = 0
while x > 1:
    x = x // 2
    y = y + 1
print(y)
```

{{</ border >}}

{{< border type="tip" title="Solution" >}}
The query asks to identify the correct Python implementation for a program that accepts a positive integer *x* as input and prints the maximum integer *y* such that $2^y ≤ x$.

Let's analyse each provided implementation:

### Implementation 1:
```python {linenos=table,linenostart=1}
x = int(input())
y = 0
while x > 1:
    x = x // 2
    y = y + 1
print(y)
```
**Explanation:**
This implementation uses **integer division (`//`)** to repeatedly divide `x` by 2 until `x` becomes 1. The variable `y` is incremented in each iteration, counting how many times `x` can be divided by 2.
*   **Input x = 100:**
    *   Initial: `x = 100`, `y = 0`
    *   Iteration 1: `x = 50`, `y = 1`
    *   Iteration 2: `x = 25`, `y = 2`
    *   Iteration 3: `x = 12`, `y = 3`
    *   Iteration 4: `x = 6`, `y = 4`
    *   Iteration 5: `x = 3`, `y = 5`
    *   Iteration 6: `x = 1`, `y = 6`
    *   The loop condition `x > 1` (1 > 1) becomes `False`, and the loop terminates.
    *   Output: **6**. This matches the sample test case [Sample Test Cases].
*   **Input x = 256:**
    *   Initial: `x = 256`, `y = 0`
    *   ... (divisions continue) ...
    *   Iteration 7: `x = 2`, `y = 7`
    *   Iteration 8: `x = 1`, `y = 8`
    *   The loop condition `x > 1` (1 > 1) becomes `False`, and the loop terminates.
    *   Output: **8**. This matches the sample test case [Sample Test Cases].

This implementation correctly calculates the maximum integer `y` such that $2^y ≤ x$.

### Implementation 2:
```python {linenos=table,linenostart=1}
x = int(input())
y = 0
while x >= 1:
    x = x // 2
    y = y + 1
print(y)
```
**Explanation:**
This implementation also uses integer division (`//`), but its **loop condition is `x >= 1`**. This condition causes an extra iteration when `x` becomes 1.
*   **Input x = 100:**
    *   Initial: `x = 100`, `y = 0`
    *   ... (same as Implementation 1) ...
    *   Iteration 6: `x = 1`, `y = 6`
    *   Iteration 7: The condition `x >= 1` (1 >= 1) is `True`.
        *   `x = 1 // 2 = 0`
        *   `y = 6 + 1 = 7`
    *   The loop condition `x >= 1` (0 >= 1) becomes `False`, and the loop terminates.
    *   Output: **7**. This is incorrect for the sample test case, as the expected output is 6 [Sample Test Cases].

This implementation overcounts `y` by one.

### Implementation 3:
```python {linenos=table,linenostart=1}
x = int(input())
y = 0
while x > 1:
    x = x / 2
    y = y + 1
print(y)
```
**Explanation:**
This implementation uses **true division (`/`)** instead of integer division. In Python 3, the `/` operator always produces a floating-point number, even if the result is a whole number. This changes the value of `x` to a float, affecting the loop's termination condition.
*   **Input x = 100:**
    *   Initial: `x = 100`, `y = 0`
    *   Iteration 1: `x = 100 / 2 = 50.0`, `y = 1`
    *   Iteration 2: `x = 50.0 / 2 = 25.0`, `y = 2`
    *   Iteration 3: `x = 25.0 / 2 = 12.5`, `y = 3`
    *   Iteration 4: `x = 12.5 / 2 = 6.25`, `y = 4`
    *   Iteration 5: `x = 6.25 / 2 = 3.125`, `y = 5`
    *   Iteration 6: `x = 3.125 / 2 = 1.5625`, `y = 6`
    *   Iteration 7: The condition `x > 1` (1.5625 > 1) is `True`.
        *   `x = 1.5625 / 2 = 0.78125`
        *   `y = 6 + 1 = 7`
    *   The loop condition `x > 1` (0.78125 > 1) becomes `False`, and the loop terminates.
    *   Output: **7**. This is incorrect for the sample test case, as the expected output is 6 [Sample Test Cases].

This implementation also overcounts `y` due to the use of floating-point division, which causes the loop to run an additional time compared to the correct integer division approach.

### Conclusion:
Based on the trace and the understanding of Python operators and loop conditions:

*   The problem requires determining the number of times `x` can be divided by 2 (integer division) until it no longer supports another division while satisfying the $2^y ≤ x$ condition.
*   The `int(input())` function is used to take integer input from the user.
*   The `while` loop structure allows for repeated execution of a block of code as long as a condition remains true.
*   The `//` (floor division) operator is crucial here as it performs integer division, discarding any fractional part. This is different from the `/` operator, which performs "true division" and returns a float in Python 3.
*   The **first implementation** correctly uses `x // 2` to reduce `x` and `while x > 1` as the loop condition to stop just before `x` becomes 1 (or less), ensuring `y` accurately represents the maximum power.

Therefore, the **correct implementation** is:

```python
x = int(input())
y = 0
while x > 1:
    x = x // 2
    y = y + 1
print(y)
```
{{</ border >}}

{{< border type="question" >}}
**2**) There is a collection of boxes, each box containing certain number of coins. This information is represented as a string such as this: `'|1|4|1|5|9|'`. Here, there are five boxes. The first box has one coin, second has four coins and so on. Assume that each box has at least one coin and at most nine coins. Select the correct implementation of a snippet of code that computes the average number of coins across the boxes and stores it in a variable named avg. Assume that the string `boxes` is already given to you and that there is at least one box in the collection.

Sample initialization of boxes: `'|1|4|1|5|9|'`

Assume that `boxes` is initialized before.

Select all correct implementations of the program. (MSQ)

```python {linenos=table,linenostart=1}
num = 0
total = 0
for i in range(len(boxes)):
    if i % 2 == 0:
        continue
    coins = boxes[i]
    total += coins
    num += 1
avg = total / num
```

```python {linenos=table,linenostart=1}
num = 0
total = 0
for i in range(len(boxes)):
    if i % 2 == 0:
        continue
    coins = int(boxes[i])
    total += coins
    num += 1
avg = total / num
```

```python {linenos=table,linenostart=1}
num = 0
total = 0
for coins in boxes:
    total += coins
    num += 1
avg = total / num
```

```python {linenos=table,linenostart=1}
num = 0
total = 0
for i in range(len(boxes)):
    if i % 2 == 0:
        break
    coins = int(boxes[i])
    total += coins
    num += 1
avg = total / num
```

{{</ border >}}

{{< border type="tip" title="Solution" >}}
The query asks to identify the correct Python implementation to calculate the average number of coins across boxes, where the information about coins is provided in a string format like `'|1|4|1|5|9|'`. The string `boxes` contains a sequence of delimiters (`'|'`) and single-digit coin counts.

Let's analyse each provided implementation:

### Implementation 1:
```python {linenos=table,linenostart=1}
num = 0
total = 0
for i in range(len(boxes)):
    if i % 2 == 0:
        continue
    coins = boxes[i]
    total += coins
    num += 1
avg = total / num
```
**Evaluation:**
This implementation aims to iterate through the string by index and skip delimiter characters (those at even indices, using `i % 2 == 0` and `continue`). However, the line `coins = boxes[i]` assigns a character (which is a **string**) to the `coins` variable. Subsequently, `total += coins` attempts to add this string character to the `total` variable, which is initialized as an integer (`0`). In Python, attempting to add a string to an integer (or vice-versa, unless explicit type conversion is done) results in a `TypeError`. The arithmetic operator `+` performs string concatenation when used with strings. Since `total` is an integer, this operation is invalid.
**Conclusion for Implementation 1:** **Incorrect**, as it fails to convert the character `coins` to an integer before attempting addition, leading to a `TypeError`.

### Implementation 2:
```python {linenos=table,linenostart=1}
num = 0
total = 0
for i in range(len(boxes)):
    if i % 2 == 0:
        continue
    coins = int(boxes[i])
    total += coins
    num += 1
avg = total / num
```
**Evaluation:**
This implementation correctly initializes `num` and `total` to 0. It iterates through the `boxes` string using indices from `range(len(boxes))`.
*   The condition `if i % 2 == 0:` correctly identifies indices corresponding to the `|` delimiters. For these indices, the `continue` statement skips the rest of the current loop iteration and moves to the next index.
*   For odd indices (which contain the coin counts), `coins = int(boxes[i])` **correctly converts the character (string) representing the number of coins into an integer**. This is a crucial step for performing arithmetic operations.
*   `total += coins` then correctly adds the integer `coins` value to the `total` sum.
*   `num += 1` correctly increments the count of boxes processed.
*   Finally, `avg = total / num` performs a floating-point division to calculate the average, which is appropriate.

**Example Trace (`boxes = '|1|4|1|5|9|'`):**
*   `i = 0` (char '|'): `continue`
*   `i = 1` (char '1'): `coins = int('1')` (becomes `1`), `total = 1`, `num = 1`
*   `i = 2` (char '|'): `continue`
*   `i = 3` (char '4'): `coins = int('4')` (becomes `4`), `total = 1 + 4 = 5`, `num = 2`
*   `i = 4` (char '|'): `continue`
*   `i = 5` (char '1'): `coins = int('1')` (becomes `1`), `total = 5 + 1 = 6`, `num = 3`
*   `i = 6` (char '|'): `continue`
*   `i = 7` (char '5'): `coins = int('5')` (becomes `5`), `total = 6 + 5 = 11`, `num = 4`
*   `i = 8` (char '|'): `continue`
*   `i = 9` (char '9'): `coins = int('9')` (becomes `9`), `total = 11 + 9 = 20`, `num = 5`
*   `i = 10` (char '|'): `continue`
The loop finishes. `avg = 20 / 5 = 4.0`. This matches the expected average `(1+4+1+5+9)/5 = 20/5 = 4.0`.
**Conclusion for Implementation 2:** **Correct**.

### Implementation 3:
```python {linenos=table,linenostart=1}
num = 0
total = 0
for coins in boxes:
    total += coins
    num += 1
avg = total / num
```
**Evaluation:**
This implementation uses a direct `for...in` loop to iterate over the `boxes` string. This means `coins` will take on the value of each character in the string sequentially, including the delimiter characters like `'|'`.
*   When `coins` is `'|'`, `total += coins` attempts to add the string `'|'` to the integer `total`. This will result in a `TypeError`, similar to Implementation 1.
*   Even if the type error did not occur, this approach would incorrect count the delimiters as 'boxes' and attempt to sum them, which is not the intent.
**Conclusion for Implementation 3:** **Incorrect**, as it iterates over all characters including delimiters and fails to convert string characters to integers for arithmetic operations.

### Implementation 4:
```python {linenos=table,linenostart=1}
num = 0
total = 0
for i in range(len(boxes)):
    if i % 2 == 0:
        break
    coins = int(boxes[i])
    total += coins
    num += 1
avg = total / num
```
**Evaluation:**
This implementation is similar to Implementation 2 in its use of indexing and type conversion, but its loop control statement is incorrect.
*   The first character `boxes` is `'|'`.
*   The condition `if i % 2 == 0:` (for `i=0`, `0 % 2 == 0` is `True`) will trigger the `break` statement.
*   The `break` statement immediately terminates the loop.
*   As a result, no coin values are processed, `num` remains 0, and `total` remains 0.
*   `avg = total / num` (0 / 0) will then raise a `ZeroDivisionError`.
**Conclusion for Implementation 4:** **Incorrect**, as the `break` statement causes the loop to terminate prematurely, leading to a `ZeroDivisionError`.

**Final Answer:** Implementation 2 is the only correct solution.

The final answer is $\boxed{2}$
{{</ border >}}

{{< border type="question" >}}
**3**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
name = input()
nick = ''    # there is no space between the quotes
space = ' ' # there is one space between the quotes
first_char = True
for char in name:
    if first_char == True:
        nick = nick + char
        first_char = False
    if char == space:
        first_char = True
print(nick)
```

What is the output for the following input?

```text {linenos=table,linenostart=1}
Albus Percival Brian Wulfric Dumbledore
```

Select all correct implementations of the program. (MSQ)

```python {linenos=table,linenostart=1}
Albus
```

```python {linenos=table,linenostart=1}
Dumbledore
```

```python {linenos=table,linenostart=1}
AP
```

```python {linenos=table,linenostart=1}
APBWD
```

{{</ border >}}

{{< border type="tip" title="Solution" >}}
The provided Python code snippet computes an acronym or initialism by iterating through an input string and appending the first character of each word to a new string variable named `nick`.

Let's trace the execution of the code with the given input `Albus Percival Brian Wulfric Dumbledore`:

1.  **`name = input()`**: The variable `name` is assigned the input string: `'Albus Percival Brian Wulfric Dumbledore'`. In Python, `input()` reads data from the keyboard as a string.
2.  **`nick = ''`**: The variable `nick` is initialized as an **empty string**. An empty string is represented by a pair of quotes with nothing in between.
3.  **`space = ' '`**: The variable `space` is assigned a string containing a single space character. Strings can be enclosed using single quotes.
4.  **`first_char = True`**: The Boolean variable `first_char` is initialized to `True`. `True` is one of the two predefined Boolean values in Python, acting like the integer 1.
5.  **`for char in name:`**: The code then enters a `for` loop, which iterates over each character in the `name` string. The variable `char` will take on the value of each character one by one.

**Loop Execution Trace:**

*   **`char = 'A'`**:
    *   `if first_char == True` (True, since `first_char` is initially `True`):
        *   `nick = nick + char`: `nick` becomes `'' + 'A'`, which is `'A'`. The `+` operator concatenates strings.
        *   `first_char = False`: `first_char` is set to `False`.
    *   `if char == space` (False, since 'A' is not ' '): This condition is skipped.
    *   Current `nick`: `'A'`
*   **`char = 'l'`**:
    *   `if first_char == True` (False, since `first_char` is `False`): This block is skipped.
    *   `if char == space` (False): This condition is skipped.
    *   Current `nick`: `'A'`
*   **`char = 'b'`**: (Same as 'l') Current `nick`: `'A'`
*   **`char = 'u'`**: (Same as 'l') Current `nick`: `'A'`
*   **`char = 's'`**: (Same as 'l') Current `nick`: `'A'`
*   **`char = ' '`** (space character):
    *   `if first_char == True` (False): This block is skipped.
    *   `if char == space` (True, since ' ' is equal to `space`):
        *   `first_char = True`: `first_char` is set back to `True`, preparing for the next word's first character.
    *   Current `nick`: `'A'`
*   **`char = 'P'`**:
    *   `if first_char == True` (True, since `first_char` is now `True`):
        *   `nick = nick + char`: `nick` becomes `'A' + 'P'`, which is `'AP'`.
        *   `first_char = False`.
    *   `if char == space` (False).
    *   Current `nick`: `'AP'`
*   ... (The loop continues for `e`, `r`, `c`, `i`, `v`, `a`, `l` in "Percival" - `first_char` remains `False`, so `nick` does not change.)
*   **`char = ' '`** (space character): `first_char` is set back to `True`. Current `nick`: `'AP'`
*   **`char = 'B'`**: `nick` becomes `'APB'`. `first_char` is set to `False`. Current `nick`: `'APB'`
*   ... (The loop continues for "Brian" - `first_char` remains `False`.)
*   **`char = ' '`** (space character): `first_char` is set back to `True`. Current `nick`: `'APB'`
*   **`char = 'W'`**: `nick` becomes `'APBW'`. `first_char` is set to `False`. Current `nick`: `'APBW'`
*   ... (The loop continues for "Wulfric" - `first_char` remains `False`.)
*   **`char = ' '`** (space character): `first_char` is set back to `True`. Current `nick`: `'APBW'`
*   **`char = 'D'`**: `nick` becomes `'APBWD'`. `first_char` is set to `False`. Current `nick`: `'APBWD'`
*   ... (The loop continues for the rest of "Dumbledore" - `first_char` remains `False`.)

After the loop finishes, all characters in `name` have been processed.

6.  **`print(nick)`**: The final value of `nick` is printed to the console.

Therefore, the output will be **APBWD**.

The correct implementation is the one that results in `APBWD`.

The final answer is $\boxed{\text{APBWD}}$
{{</ border >}}

{{< border type="question" >}}
**4**) The first five terms of the Fibonacci sequence is given below:

- F₁ = 1    F₂ = 1    F₃ = 2
- F₄ = 3    F₅ = 5

We wish to write a program that accepts a positive integer *n* as input and prints F_n as the output.

Select all correct implementations of this program. (MSQ)

````python {linenos=table,linenostart=1}
n = int(input())
F_prev = 1
F_curr = 1
count = 2
while count < n:
    temp = F_prev + F_curr
    F_prev = F_curr
    F_curr = temp
    count += 1
print(F_curr)
````

```python {linenos=table,linenostart=1}
n = int(input())
if n <= 2:
    print(1)
else:
    F_prev = 1
    F_curr = 1
    count = 2
    while count < n:
        temp = F_prev + F_curr
        F_prev = F_curr
        F_curr = temp
        count += 1
    print(F_curr)
```

```python {linenos=table,linenostart=1}
n = int(input())
F_prev = 1
F_curr = 1
for i in range(n):
    temp = F_prev + F_curr
    F_prev = F_curr
    F_curr = temp
print(F_curr)
```

```python {linenos=table,linenostart=1}
n = int(input())
F_prev = 1
F_curr = 1
for i in range(n - 2):
    temp = F_prev + F_curr
    F_prev = F_curr
    F_curr = temp
print(F_curr)
```

{{</ border >}}

{{< border type="tip" title="Solution" >}}
This query requires us to evaluate four Python code snippets that aim to compute the *n*-th term of the Fibonacci sequence. The sequence is defined with F₁ = 1, F₂ = 1, and F_k = F_{k-1} + F_{k-2} for k > 2. The program should accept a positive integer `n` as input.

Let's analyse each implementation:

**Implementation 1:**
```python {linenos=table,linenostart=1}
n = int(input())
F_prev = 1
F_curr = 1
count = 2
while count < n:
    temp = F_prev + F_curr
    F_prev = F_curr
    F_curr = temp
    count += 1
print(F_curr)
```
*   The code first accepts an integer `n` as input.
*   It initializes `F_prev` and `F_curr` to **1**, representing F₁ and F₂ respectively. `count` is initialized to **2**, indicating that `F_curr` currently holds F₂.
*   The `while` loop continues as long as `count` is less than `n`.
    *   If `n` is **1** (F₁): The condition `2 < 1` is `False`. The loop is skipped. `F_curr` (which is `1`) is printed. This is **correct** for F₁.
    *   If `n` is **2** (F₂): The condition `2 < 2` is `False`. The loop is skipped. `F_curr` (which is `1`) is printed. This is **correct** for F₂.
    *   If `n` is **3** (F₃): The condition `2 < 3` is `True`. The loop executes once:
        *   `temp` becomes `1 + 1 = 2`.
        *   `F_prev` becomes `1`.
        *   `F_curr` becomes `2`.
        *   `count` becomes `3`.
        *   The loop condition `3 < 3` is `False`, so the loop terminates. `F_curr` (which is `2`) is printed. This is **correct** for F₃.
    *   For `n > 2`, the loop effectively performs `n - 2` iterations, each time calculating the next Fibonacci number and updating `F_prev` and `F_curr`. The loop stops when `count` equals `n`, and `F_curr` holds F_n. This **correctly** calculates F_n.

**Conclusion for Implementation 1: Correct.**

**Implementation 2:**
```python {linenos=table,linenostart=1}
n = int(input())
if n <= 2:
    print(1)
else:
    F_prev = 1
    F_curr = 1
    count = 2
    while count < n:
        temp = F_prev + F_curr
        F_prev = F_curr
        F_curr = temp
        count += 1
    print(F_curr)
```
*   This implementation also reads an integer `n`.
*   It uses an `if-else` statement to explicitly handle the base cases.
    *   If `n` is **1** or **2**: `n <= 2` is `True`, and **1** is printed. This is **correct** for F₁ and F₂.
*   For `n > 2`, the `else` block is executed. The code within the `else` block is **identical** to the code in Implementation 1, including the initialization of `F_prev`, `F_curr`, `count`, and the `while` loop. As established for Implementation 1, this part correctly computes F_n for `n > 2`.

**Conclusion for Implementation 2: Correct.**

**Implementation 3:**
```python {linenos=table,linenostart=1}
n = int(input())
F_prev = 1
F_curr = 1
for i in range(n):
    temp = F_prev + F_curr
    F_prev = F_curr
    F_curr = temp
print(F_curr)
```
*   This code also reads an integer `n` and initializes `F_prev` and `F_curr` to **1**.
*   It uses a `for` loop with `range(n)`. This means the loop will execute `n` times, with `i` taking values from `0` to `n-1`.
    *   If `n` is **1** (F₁): The loop executes once (`i=0`).
        *   `temp` becomes `1 + 1 = 2`.
        *   `F_prev` becomes `1`.
        *   `F_curr` becomes `2`.
        *   `F_curr` (which is `2`) is printed. This is **incorrect**, as F₁ is `1`.
    *   If `n` is **2** (F₂): The loop executes twice (`i=0, 1`).
        *   After the first iteration, `F_curr` is `2`.
        *   After the second iteration, `temp` becomes `1 + 2 = 3`, `F_prev` becomes `2`, `F_curr` becomes `3`.
        *   `F_curr` (which is `3`) is printed. This is **incorrect**, as F₂ is `1`.

This implementation overshoots the target Fibonacci number for small `n` due to the number of loop iterations.

**Conclusion for Implementation 3: Incorrect.**

**Implementation 4:**
```python {linenos=table,linenostart=1}
n = int(input())
F_prev = 1
F_curr = 1
for i in range(n - 2):
    temp = F_prev + F_curr
    F_prev = F_curr
    F_curr = temp
print(F_curr)
```
*   This code reads an integer `n` and initializes `F_prev` and `F_curr` to **1**.
*   It uses a `for` loop with `range(n - 2)`.
    *   If `n` is **1** (F₁): `range(1 - 2)` is `range(-1)`. An empty range causes the loop to **not run**. `F_curr` (which is `1`) is printed. This is **correct** for F₁.
    *   If `n` is **2** (F₂): `range(2 - 2)` is `range(0)`. An empty range causes the loop to **not run**. `F_curr` (which is `1`) is printed. This is **correct** for F₂.
    *   If `n` is **3** (F₃): `range(3 - 2)` is `range(1)`. The loop executes once (`i=0`).
        *   `temp` becomes `1 + 1 = 2`.
        *   `F_prev` becomes `1`.
        *   `F_curr` becomes `2`.
        *   `F_curr` (which is `2`) is printed. This is **correct** for F₃.
    *   For `n > 2`, the loop will execute `n - 2` times, which is the precise number of iterations needed to calculate F_n given that F₁ and F₂ are already initialized.

**Conclusion for Implementation 4: Correct.**

Therefore, implementations 1, 2, and 4 are correct.

The final answer is $\boxed{\text{1, 2, 4}}$
{{</ border >}}

{{< border type="question" >}}
**5**) What is the output of the following snippet of code?

```python {linenos=table,linenostart=1}
for char in 'a1b2c3d4e5':
    if char in 'abcde':
        print('|', end = '') # there is no space between the quotes
        continue
    print(char, end = '')  # there is no space between the quotes
print('|')
```

**Options**:

```python {linenos=table,linenostart=1}
12345
```

```python {linenos=table,linenostart=1}
|||||
```

```python {linenos=table,linenostart=1}
|1|2|3|4|5
```

```python {linenos=table,linenostart=1}
1|2|3|4|5|
```

```python {linenos=table,linenostart=1}
|1|2|3|4|5|
```


{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's break down the Python code snippet step by step to determine its output. 🧐

The code processes each character in the string `'a1b2c3d4e5'` using a `for` loop. Inside the loop, it checks if the current character is a letter from `'abcde'`.

Here's how it executes for each character:

*   **`char = 'a'`**:
    *   Is `'a'` in `'abcde'`? **Yes**.
    *   The code prints a pipe character `|`.
    *   The `continue` statement is executed, which skips the rest of the current loop iteration and moves to the next character.
*   **`char = '1'`**:
    *   Is `'1'` in `'abcde'`? **No**.
    *   The code prints the character itself: `1`.
*   **`char = 'b'`**:
    *   Is `'b'` in `'abcde'`? **Yes**.
    *   The code prints `|`.
    *   `continue` is executed.
*   **`char = '2'`**:
    *   Is `'2'` in `'abcde'`? **No**.
    *   The code prints `2`.
*   **`char = 'c'`**:
    *   Is `'c'` in `'abcde'`? **Yes**.
    *   The code prints `|`.
    *   `continue` is executed.
*   **`char = '3'`**:
    *   Is `'3'` in `'abcde'`? **No**.
    *   The code prints `3`.
*   **`char = 'd'`**:
    *   Is `'d'` in `'abcde'`? **Yes**.
    *   The code prints `|`.
    *   `continue` is executed.
*   **`char = '4'`**:
    *   Is `'4'` in `'abcde'`? **No**.
    *   The code prints `4`.
*   **`char = 'e'`**:
    *   Is `'e'` in `'abcde'`? **Yes**.
    *   The code prints `|`.
    *   `continue` is executed.
*   **`char = '5'`**:
    *   Is `'5'` in `'abcde'`? **No**.
    *   The code prints `5`.

After the loop finishes processing all characters, the final line `print('|')` is executed.

All the `print` statements inside the loop use `end = ''`, which means they do not add a newline character at the end of their output. This causes all the characters to be printed on the **same line**. The very last `print('|')` statement, however, does not specify `end = ''`, so it will add a newline character after printing the final pipe.

Combining the output from each step:
`|` (from 'a') + `1` (from '1') + `|` (from 'b') + `2` (from '2') + `|` (from 'c') + `3` (from '3') + `|` (from 'd') + `4` (from '4') + `|` (from 'e') + `5` (from '5') + `|` (final print)

The combined output will be: **`|1|2|3|4|5|`** ✨

Comparing this with the given options, the correct one is:
```python
|1|2|3|4|5|
```
{{</ border >}}

{{< border type="question" >}}
**6**) Code-1 and Code-2 will return the same value.

*Code-1*:

```python {linenos=table,linenostart=1}
x = 0
x_ = 1
for i in range(10):
    x, x_ = x_, x + x_
print(x)
```

*Code-2*:

```python {linenos=table,linenostart=1}
x = 0
x_ = 1
for i in range(10):
    x = x_
    x_ = x + x_
print(x)
```

**Options**:

True

False
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's break it down step by step! 🧐

## 🚀 Code-1 Analysis

```python
x = 0
x_ = 1
for i in range(10):
    x, x_ = x_, x + x_
print(x)
```

- This code uses **tuple unpacking**. In each loop:
    - `x` becomes the old `x_`
    - `x_` becomes the sum of old `x` and `x_`
- This is the classic way to generate Fibonacci numbers!
- After 10 iterations, `x` will be the 10th Fibonacci number.


## 🚦 Code-2 Analysis

```python
x = 0
x_ = 1
for i in range(10):
    x = x_
    x_ = x + x_
print(x)
```

- Here, the assignments are sequential:
    - First, `x` is set to the current `x_`
    - Then, `x_` is set to the new `x` + current `x_`
- This does **not** generate the Fibonacci sequence correctly, because `x` is updated before `x_`, so the values are not in sync as in Code-1.


## 🔍 Do They Return the Same Value?

Let's see the output for both codes:

### Code-1 Output:

- Generates Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
- After 10 loops, `x = 55`


### Code-2 Output:

- Let's trace a few steps:
    - i=0: x=1, x_=2
    - i=1: x=2, x_=4
    - i=2: x=4, x_=8
    - i=3: x=8, x_=16
    - ... (keeps doubling)
- After 10 loops, `x = 1024`


## 📝 Final Answer

**Do they return the same value?**

**False** ❌

- **Code-1** returns `55`
- **Code-2** returns `1024`


### 🌟 Summary Table

| Code | Output |
| :-- | :-- |
| Code-1 | 55 |
| Code-2 | 1024 |

So, the correct answer is:
**False** 🚫

{{</ border >}}

{{< border type="question" >}}
**7**) You are an analyst in a Finance company. You are given a job to print the daily transaction in below format.

```text {linenos=table,linenostart=1}
country_code, currency_code, exchange_rate
```

Select the options that prints transaction records as in the sample output for input given in the table below. Multiple options can be correct (MSQ).

**Input**

| Variable | Value |
| :-- | :-- |
| country_code | 'IN' |
| currency_code | 'RS' |
| exchange_rate | 73.2272 |

**Output**

```text {linenos=table,linenostart=1}
country_code, currency_code, exchange_rate
```

**Options**

`print(country_code, currency_code, exchange_rate, sep = ", ")`

`print(f"{country_code}, {currency_code}, {exchange_rate:2.2f}")`

`print("{}, {}, {:2.2f}".format(country_code, currency_code, exchange_rate))`

`print("{0}, {1}, {2:2.2f}".format(country_code, currency_code, exchange_rate))`

`print("{a}, {b}, {c:2.2f}".format(a = country_code, b = currency_code, c = exchange_rate))`

`print("%s, %s, %2.2f"%(country_code, currency_code, exchange_rate))`

{{</ border >}}

{{< border type="tip" title="Solution" >}}
Based on the analysis of the options to print transaction records in the specified format (`country_code, currency_code, exchange_rate`), here's the breakdown:

### 📊 Input Data

- `country_code = 'IN'`
- `currency_code = 'RS'`
- `exchange_rate = 73.2272`


### ✅ Correct Options

The following options **correctly** print the transaction in the required format **with exact values** (including preserving the float precision of `73.2272`):

1. **`print(country_code, currency_code, exchange_rate, sep = ", ")`**
Output: `IN, RS, 73.2272`
✅ Uses `sep=", "` to separate values. Preserves full float precision.

### ❌ Incorrect Options

The following options **incorrectly round** `exchange_rate` to `73.23` (2 decimal places), altering the original value:

- `print(f"{country_code}, {currency_code}, {exchange_rate:2.2f}")` → `IN, RS, 73.23`
- `print("{}, {}, {:2.2f}".format(country_code, currency_code, exchange_rate))` → `IN, RS, 73.23`
- `print("{0}, {1}, {2:2.2f}".format(country_code, currency_code, exchange_rate))` → `IN, RS, 73.23`
- `print("{a}, {b}, {c:2.2f}".format(a=country_code, b=currency_code, c=exchange_rate))` → `IN, RS, 73.23`
- `print("%s, %s, %2.2f"%(country_code, currency_code, exchange_rate))` → `IN, RS, 73.23`


### 🧠 Why This Matters

- **Finance contexts require precision**: Rounding exchange rates (e.g., `73.2272` → `73.23`) can cause calculation errors in transactions.
- **Problem requirement**: The output must match the sample format **exactly** with the given input values. The sample output (header) does not specify rounding, so values should be printed as-is.


### 💡 Final Answer

**Only the first option is correct**:
`print(country_code, currency_code, exchange_rate, sep = ", ")`

Output: `IN, RS, 73.2272` (preserves original precision).

{{</ border >}}

{{< border type="question" >}}
**8**) What is the output of the following snippet of code?

```python {linenos=table,linenostart=1}
alpha = 'abcdefghijklmnopqrstuvwxyz'
shift = 5
word = 'python'
encoded_word = ''  # there is no space between quotes
for char in word:
    shifted_index = (alpha.index(char) + shift) % 26
    encoded_char = alpha[shifted_index]
    encoded_word += encoded_char
print(encoded_word)
```

Options:

`stmydu`

`tcxlsr`

`veznut`

`udymts`

{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's decode this step-by-step! 🔍
The code performs a **Caesar cipher** with a shift of 5 on the word "python".
Here's how each letter transforms:

### 🔠 Letter-by-Letter Encoding:

1. **`p`** → Index in `alpha` is 15
`(15 + 5) % 26 = 20` → `alpha = 'u'`
2. **`y`** → Index 24
`(24 + 5) % 26 = 29 % 26 = 3` → `alpha = 'd'`
3. **`t`** → Index 19
`(19 + 5) % 26 = 24` → `alpha = 'y'`
4. **`h`** → Index 7
`(7 + 5) % 26 = 12` → `alpha = 'm'`
5. **`o`** → Index 14
`(14 + 5) % 26 = 19` → `alpha = 't'`
6. **`n`** → Index 13
`(13 + 5) % 26 = 18` → `alpha = 's'`

### 🔐 Final Output:

Combining these: `'u' + 'd' + 'y' + 'm' + 't' + 's' = "udymts"`

### ✅ Matching Option:

`udymts` → **Correct!**

### 💡 Why Others Fail:

- `stmydu` → Wrong shift direction/calculation
- `tcxlsr` → Incorrect modulo handling
- `veznut` → Miscalculated indices

The output is **`udymts`**! 🐍✨


{{</ border >}}

{{< border type="question" >}}
**9**) How many times do the break statements get executed? It is a Numerical Type Question (NAT).

```python {linenos=table,linenostart=1}
for i in range(10):
    for j in range(10):
        break
    break
```

---

{{</ border >}}

{{< border type="tip" title="Solution" >}}
The `break` statements in the code are executed **twice**:

### 🔍 Step-by-Step Execution:

1. **Outer loop starts** (`i=0`):
    - Enters inner loop (`j=0`)
    - **First `break`** executes, exiting inner loop immediately
2. **Outer loop continues**:
    - **Second `break`** executes, exiting outer loop immediately
3. **Loop terminates** without further iterations

### ❌ Why Not More?

- The `break` in the inner loop runs **once** (only for `j=0`)
- The `break` in the outer loop runs **once** (only for `i=0`)
- Total: **2 executions**


### 💡 Key Insight:

- `break` exits only the **innermost loop** it's in
- After inner `break`, outer loop continues until it hits its own `break`
- No other iterations occur because both loops terminate early

**Final answer: 2** ✅
{{</ border >}}

{{< border type="question" >}}
**10**) What will be output if a negative value is given as input ?

Number of digits in `x`

Number of digits in `x` -1

Number of digits in `x` +1

Infinite loop
{{</ border >}}

{{< border type="tip" title="Solution" >}}
If a negative value is given as input, the number of digits in x plus 1 will be output.

**Explanation**:

For a negative integer, str(x) includes the minus sign, so len(str(x)) counts the digits plus 1 (for the - sign).

**Correct answer**: 

Number of digits in x + 1 ✅
{{</ border >}}

{{< border type="question" >}}

### Common data for the next 2 questions 🔗

Consider the following snippet of code.

```python {linenos=table,linenostart=1}
word = input()
valid = True
for i in range(len(word)):
    char = word[i]
    if i % 2 == 0 and char not in 'aeiou':
        valid = False
print(valid)
```

11) Select the inputs for which the output will be `True`.

Options:

```python {linenos=table,linenostart=1}
abet
```

```python {linenos=table,linenostart=1}
enamel
```

```python {linenos=table,linenostart=1}
eatery
```

```python {linenos=table,linenostart=1}
onetime
```

---

**12**) Assume that a ten letter word is passed as input to the code. If the output is True, then which of the following statements about the input word are true?

Options:

The word has exactly five vowels.

The word has have at least five vowels.

The letters at even indices are vowels. Assume that we use zero-based indexing.

Every vowel in the word appears only at even indices. Assume that we use zero-based indexing.

{{</ border >}}

{{< border type="tip" title="Solution" >}}
### 📝 Answer for Question 11

The code checks if **all characters at even indices (0-based)** are vowels (`'aeiou'`). For `valid=True`, every character at positions `0, 2, 4, ...` must be a vowel.

Based on testing the inputs:

- `'abet'` → **True** ✅
    - Positions: `0='a' (vowel)`, `2='e' (vowel)`
- `'enamel'` → **True** ✅
    - Positions: `0='e' (vowel)`, `2='a' (vowel)`, `4='e' (vowel)`
- `'eatery'` → **False** ❌
    - Position `4='r' (consonant)` violates the condition
- `'onetime'` → **True** ✅
    - Positions: `0='o' (vowel)`, `2='e' (vowel)`, `4='i' (vowel)`, `6='e' (vowel)`

**Correct inputs**: `abet`, `enamel`, `onetime`

### 📝 Answer for Question 12

For a **10-letter word** where `valid=True`:

- Even indices (0-based): `0, 2, 4, 6, 8` must be vowels.
- Odd indices (`1, 3, 5, 7, 9`) can be **any character** (vowel/consonant).

**Analysis of options**:

1. ❌ **Exactly five vowels**
    - Incorrect: The word can have **>5 vowels** (e.g., if odd indices are vowels too).
2. ✅ **At least five vowels**
    - Correct: The 5 even-index positions **must be vowels**, so minimum 5 vowels.
3. ✅ **Letters at even indices are vowels**
    - Correct: This is the **core condition** for `valid=True`.
4. ❌ **Every vowel appears only at even indices**
    - Incorrect: Vowels **can appear at odd indices** (e.g., `'aaaaaaaaaa'` returns `True`).

**Correct statements**:

- The word has at least five vowels.
- The letters at even indices are vowels.


### 💡 Key Insight

The code **only cares about even indices**—odd indices are irrelevant to the check. A valid word must have vowels at all even positions but can have any characters (including vowels) elsewhere.
{{</ border >}}

{{< border type="question" >}}
**13**) Select all the snippets that prints the sum of the first `n` odd numbers starting from 1(including). Assume `n` is a positive integer and is already defined.

Example n = 5 , output: 1+3+5+7+9 = 25

##### Options 

```python {linenos=table,linenostart=1}
result = 0
i = 0
while i<n:
    result+=2*i+1
    i+=1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
i = 1
while i<n:
    result+=2*i+1
    i+=1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
i = 1
while i<n:
    result+=2*i+1
    i+=1
result+=1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
i = 0
while i<n:
    if i%2 != 0:
      result+=2*i+1
      i+=1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
i = 0
while i<2*n+1:
    if i%2 != 0:
      result+=i
    i+=1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
i = 0
while i<2*n+1:
    if i%2 != 0:
      result+=i
      i+=1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
i = 0
while i<2*n+1:
    if i%2 != 0:
      result+=i
      i+=1
print(result)
```

{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's analyze each snippet to see if it prints the sum of the first `n` odd numbers starting from 1 (i.e., `1 + 3 + 5 + ...`).

### 🔍 Option 1

```python
result = 0
i = 0
while i<n:
    result+=2*i+1
    i+=1
print(result)
```

- For `i` from `0` to `n-1`, adds `2*i+1` (which generates 1, 3, 5, ...)
- ✅ **Correct!**


### 🔍 Option 2

```python
result = 0
i = 1
while i<n:
    result+=2*i+1
    i+=1
print(result)
```

- For `i` from `1` to `n-1`, adds `2*i+1` (starts from 3, skips 1)
- ❌ **Incorrect!**


### 🔍 Option 3

```python
result = 0
i = 1
while i<n:
    result+=2*i+1
    i+=1
result+=1
print(result)
```

- Adds `2*i+1` for `i` from 1 to `n-1` (skips 1), then adds 1 at the end.
- For `n=5`: Adds 3,5,7,9 (i=1 to 4), then adds 1 → 3+5+7+9+1=25
- ✅ **Correct!** (though a bit hacky)


### 🔍 Option 4

```python
result = 0
i = 0
while i<n:
    if i%2 != 0:
      result+=2*i+1
      i+=1
print(result)
```

- Only adds when `i` is odd, so skips even `i` (skips some numbers)
- ❌ **Incorrect!**


### 🔍 Option 5

```python
result = 0
i = 0
while i<2*n+1:
    if i%2 != 0:
      result+=i
    i+=1
print(result)
```

- Loops from 0 to `2*n`, adds all odd `i` in that range.
- For n=5: i=1,3,5,7,9 → 1+3+5+7+9=25
- ✅ **Correct!**


### 🔍 Option 6

```python
result = 0
i = 0
while i<2*n+1:
    if i%2 != 0:
      result+=i
      i+=1
print(result)
```

- `i` is incremented only inside the `if`, so when `i` is even, infinite loop!
- ❌ **Incorrect!** (infinite loop for even `i`)


### 🔍 Option 7

```python
result = 0
i = 0
while i<2*n+1:
    if i%2 != 0:
      result+=i
      i+=1
print(result)
```

- This is identical to Option 6 (likely a duplicate), so infinite loop.
- ❌ **Incorrect!**


## ✅ **Correct Options:**

- **Option 1**
- **Option 3**
- **Option 5**


### 🎉 **Summary Table**

| Option | Correct? | Reason |
| :-- | :-- | :-- |
| 1 | ✅ | Classic odd numbers sum |
| 2 | ❌ | Skips first odd (1) |
| 3 | ✅ | Adds 1 at the end to compensate |
| 4 | ❌ | Skips even indices |
| 5 | ✅ | Sums all odd numbers up to 2n-1 |
| 6 | ❌ | Infinite loop |
| 7 | ❌ | Infinite loop |

**So, select: Option 1, Option 3, and Option 5!** 🎯✨


{{</ border >}}

{{< border type="question" >}}
**14**) Select all the snippets that prints the sum of the first `n` odd numbers starting from 1(including). Assume `n` is a positive integer and is already defined.

Example n = 5 , output: 1+3+5+7+9 = 25

##### Options

```python {linenos=table,linenostart=1}
result = 0
for i in range(n):
    result+=2*i+1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
for i in range(1,n+1):
    result+=2*i-1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
for i in range(1,n):
    result+=2*i+1
result+=1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
for i in range(1,n):
    result+=2*i+1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
for i in range(-1,-n-1,-1):
    result-=2*i+1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
for i in range(-1,-n):
    result-=2*i+1
print(result)
```

{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's analyze each snippet's behavior based on the sum of the first `n` odd numbers (starting from 1). For `n=5`, the sum should be 25.

### Snippet 1

```python
result = 0
for i in range(n):
    result+=2*i+1
print(result)
```

- Adds odd numbers starting from 1 (`2*0+1=1`) up to the nth odd number.
- Output for n=5: 25
- ✅ Correct


### Snippet 2

```python
result = 0
for i in range(1,n+1):
    result+=2*i-1
print(result)
```

- Adds odd numbers starting from 1 (`2*1-1=1`) to nth odd number.
- Output for n=5: 25
- ✅ Correct


### Snippet 3

```python
result = 0
for i in range(1,n):
    result+=2*i+1
result+=1
print(result)
```

- Adds odd numbers starting from 3 (`2*1+1=3`) up to `(n-1)`th odd number, then adds 1 at the end.
- For n=5: sums 3,5,7,9 + 1 = 25
- ✅ Correct (though a bit indirect)


### Snippet 4

```python
result = 0
for i in range(1,n):
    result+=2*i+1
print(result)
```

- Adds odd numbers starting from 3, but only `(n-1)` terms.
- For n=5: sums 3+5+7+9 = 24
- ❌ Incorrect


### Snippet 5

```python
result = 0
for i in range(-1,-n-1,-1):
    result-=2*i+1
print(result)
```

- Iterates `i` from -1 down to `-n` (inclusive), subtracts `2*i+1` each time.
- For n=5, this correctly sums first n odd numbers (25).
- ✅ Correct (clever use of negative indices)


### Snippet 6

```python
result = 0
for i in range(-1,-n):
    result-=2*i+1
print(result)
```

- Iterates from -1 to `-n+1` (exclusive), so fewer terms.
- For n=5, output is 0 (no terms summed).
- ❌ Incorrect


## ✅ **Correct snippets:**

- Snippet 1
- Snippet 2
- Snippet 3
- Snippet 5


### Summary Table

| Snippet | Output for n=5 | Correct? |
| :-- | :-- | :-- |
| 1 | 25 | ✅ |
| 2 | 25 | ✅ |
| 3 | 25 | ✅ |
| 4 | 24 | ❌ |
| 5 | 25 | ✅ |
| 6 | 0 | ❌ |

**Final answer:** Snippets 1, 2, 3, and 5 print the correct sum of the first `n` odd numbers.

{{</ border >}}

{{< border type="question" >}}
**15**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
value = 0
for i in range(n):
  num = int(input())
  if len(str(num))<2:
      value+= num
print(value)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above

{{</ border >}}

{{< border type="tip" title="Solution" >}}
Based on the code snippet, let's analyze the data processing patterns:

```python
n = int(input())
value = 0
for i in range(n):
  num = int(input())
  if len(str(num))<2:   # Filtering condition
      value+= num        # Aggregation operation
print(value)
```


### 🔍 Pattern Analysis:

1. **Filtering** ✅
    - The condition `if len(str(num))<2` acts as a **filter** that only processes single-digit numbers (0-9).
    - Numbers with 2+ digits are excluded from further processing.
2. **Aggregation** ✅
    - The operation `value += num` **aggregates** (sums) the filtered values into a cumulative total.
    - This is a classic reduction/aggregation pattern.
3. **Mapping** ❌
    - There's no transformation of input values (like converting to another form).
    - The numbers are used as-is after filtering.

### 📝 Conclusion:

The code implements **two data processing patterns**:

1. **Filtering** (selecting single-digit numbers)
2. **Aggregation** (summing the selected values)

**Correct options**:

- **Aggregation**
- **Filtering**


### 💡 Key Insight:

- **Filtering** happens at the condition check (`if len(str(num))<2`).
- **Aggregation** occurs during the summation (`value += num`).
- No mapping is applied since values aren't transformed before aggregation.


{{</ border >}}

{{< border type="question" >}}
**16**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
sentence = input()
for word in words.split():
    if 'a' in word:
        print(word*2)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Based on the provided code snippet:

```python
sentence = input()
for word in words.split():   # Should be sentence.split(), assuming typo
    if 'a' in word:          # Filtering condition
        print(word*2)        # Transformation operation
```


### 🔍 Pattern Analysis:

1. **Filtering** ✅
    - The condition `if 'a' in word` acts as a **filter** that only processes words containing the letter 'a'.
    - Words without 'a' are excluded from further processing.
2. **Mapping** ✅
    - The operation `word*2` **transforms** each filtered word by duplicating it.
    - This is a classic mapping operation where each input is converted to a new output form.
3. **Aggregation** ❌
    - There's no combining of values into a cumulative result (e.g., no summing, averaging, or collecting).
    - Each word is processed individually and printed separately.

### 📝 Conclusion:

The code implements **two data processing patterns**:

1. **Filtering** (selecting words with 'a')
2. **Mapping** (transforming words to their duplicated version)

**Correct options**:

- **Filtering**
- **Mapping**


### ⚠️ Note on Code Error:

- The code contains a typo: `words.split()` should be `sentence.split()`.
- This doesn't affect the pattern analysis but would cause a runtime error in practice.


### 💡 Key Insight:

- **Filtering** occurs at the condition check (`if 'a' in word`).
- **Mapping** happens during the transformation (`word*2`).
- No aggregation is present since results aren't combined into a summary value.


{{</ border >}}

{{< border type="question" >}}
**17**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
for i in range(n):
    print(int(input())*2)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Based on the provided code snippet:

```python
n = int(input())
for i in range(n):
    print(int(input())*2)   # Transformation operation
```


### 🔍 Pattern Analysis:

1. **Mapping** ✅
    - Each input value is **transformed** by multiplying by 2 (`int(input())*2`).
    - This is a classic mapping operation where each input is converted to a new output value.
2. **Filtering** ❌
    - No condition is applied to exclude any input values.
    - Every input is processed and transformed.
3. **Aggregation** ❌
    - There's no combination of values into a cumulative result (e.g., no summing or averaging).
    - Each transformed value is printed immediately without accumulation.

### 📝 Conclusion:

The code implements **one data processing pattern**:

- **Mapping** (transforming each input value by doubling it)

**Correct option**:

- **Mapping**


### 💡 Key Insight:

- **Mapping** occurs through the arithmetic operation `*2`, which transforms each input value.
- No filtering (all inputs are processed) or aggregation (no summary of results).


{{</ border >}}

{{< border type="question" >}}
**18**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
for i in range(n):
  num = int(input())
  if len(str(num))<2:
      print(num*2)
  else:
      print(num*3)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Based on the provided code snippet:

```python
n = int(input())
for i in range(n):
  num = int(input())
  if len(str(num))<2:   # Branching condition
      print(num*2)       # Transformation A
  else:
      print(num*3)       # Transformation B
```


### 🔍 Pattern Analysis:

1. **Mapping** ✅
    - Every input value is **transformed** into an output value:
        - Single-digit numbers → `num*2`
        - Multi-digit numbers → `num*3`
    - This is a classic **mapping** operation where each input is converted to a new output based on rules.
2. **Filtering** ❌
    - No values are excluded from processing. All inputs are transformed and printed.
    - The condition only determines *how* to transform, not *whether* to process.
3. **Aggregation** ❌
    - There's no combination of values into a cumulative result (e.g., no summing or collecting).
    - Each transformed value is printed immediately.

### 📝 Conclusion:

The code implements **one data processing pattern**:

- **Mapping** (transforming each input value based on digit length)

**Correct option**:

- **Mapping**


### 💡 Key Insight:

- **Mapping** occurs through the arithmetic operations (`*2` or `*3`), which transform inputs based on a condition.
- No filtering (all inputs are processed) or aggregation (no summary of results).


### ⚠️ Note:

- The condition (`len(str(num))<2`) acts as a **branching logic** for mapping rules, not as a filter since no data is excluded.


{{</ border >}}

{{< border type="question" >}}
**19**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
value = None
for i in range(n):
  num = int(input())
  if len(str(num))<2:
      value = num
print(value)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Based on the code snippet:

```python
n = int(input())
value = None
for i in range(n):
  num = int(input())
  if len(str(num))<2:   # Filtering condition
      value = num        # Selection operation
print(value)
```


### 🔍 Pattern Analysis:

1. **Filtering** ✅
    - The condition `if len(str(num))<2` acts as a **filter** that only considers single-digit numbers (0-9).
    - Multi-digit numbers are ignored and do not affect the result.
2. **No Aggregation** ❌
    - There's no combination of values (e.g., summing or averaging).
    - Only the **last** single-digit number is stored, not a cumulative result.
3. **No Mapping** ❌
    - Values aren't transformed; the original `num` is stored as-is.
    - The operation `value = num` is assignment, not transformation.

### 📝 Conclusion:

The code implements **one data processing pattern**:

- **Filtering** (selecting single-digit numbers from the input stream)

**Correct option**:

- **Filtering**


### 💡 Key Insight:

- The loop filters inputs to only consider single-digit numbers.
- The variable `value` is **overwritten** (not aggregated) with the latest qualifying number.
- The final output is the **last single-digit number encountered**, not a summary of all such numbers.


### ⚠️ Special Note:

- If no single-digit numbers are input, `value` remains `None` (output: `None`).
- This is **not aggregation** because:
    - No accumulation of values (e.g., summing)
    - No reduction to a summary statistic
    - Only the last valid value is retained

**Final answer: Filtering** ✅


{{</ border >}}

{{< border type="question" >}}
**20**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
value = None
for i in range(n):
  num = int(input())
  if value is None:
      value = num
  elif num < value:
      value = num
print(value)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border type="tip" title="Solution" >}}

Based on the provided code snippet:

```python
n = int(input())
value = None
for i in range(n):
  num = int(input())
  if value is None:
      value = num
  elif num < value:
      value = num
print(value)
```


### 🔍 Pattern Analysis:

1. **Aggregation** ✅
    - The code **reduces** multiple input values into a single result (the minimum value).
    - It combines all inputs through comparison operations to produce a summary value.
    - This is a classic example of aggregation (specifically, a reduction operation).
2. **Filtering** ❌
    - No values are excluded based on conditions. All inputs are processed.
    - The condition `num < value` is for comparison, not exclusion.
3. **Mapping** ❌
    - Values aren't transformed; they're only compared.
    - The original `num` values are used without modification.

### 📝 Conclusion:

The code implements **one data processing pattern**:

- **Aggregation** (reducing all inputs to a single minimum value)

**Correct option**:

- **Aggregation**


### 💡 Key Insight:

- The algorithm maintains a running minimum (`value`), updating it when a smaller number is found.
- This follows the **reduction** pattern in data processing, where a dataset is condensed to a single value.
- No filtering (all inputs are processed) or mapping (no value transformations) occurs.


### ⚠️ Special Note:

- The initial `value = None` handles the first input specially.
- For `n=0`, the output is `None` (no aggregation possible).
- For `n>0`, the output is the smallest number among the inputs.

**Final answer: Aggregation** ✅


{{</ border >}}

{{< border type="question" >}}
**21**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
value = None
for i in range(n):
  num = len(input())/2
  if value is None:
      value = num
  elif num < value:
      value = num
print(value)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border type="tip" title="Solution" >}}

Based on the provided code snippet:

```python
n = int(input())
value = None
for i in range(n):
  num = len(input())/2      # Transformation operation
  if value is None:
      value = num
  elif num < value:
      value = num            # Aggregation operation
print(value)
```


### 🔍 Pattern Analysis:

1. **Mapping** ✅
    - Each input string is **transformed** into a numerical value: `len(input())/2` (half the string length).
    - This is a classic mapping operation where raw input is converted to a new derived value.
2. **Aggregation** ✅
    - The transformed values are **reduced** to a single result (the minimum value found).
    - The comparison `num < value` and assignment `value = num` implement a reduction to find the smallest transformed value.
3. **Filtering** ❌
    - No values are excluded from processing. All inputs are transformed and considered in the aggregation.
    - The conditionals only compare values, they don't skip any inputs.

### 📝 Conclusion:

The code implements **two data processing patterns**:

1. **Mapping** (transforming string inputs to numerical values)
2. **Aggregation** (reducing multiple values to a single minimum result)

**Correct options**:

- **Mapping**
- **Aggregation**


### 💡 Key Insight:

- **Mapping** occurs through `len(input())/2`, converting each string to a float.
- **Aggregation** happens through the min-finding logic (`if value is None` and `elif num < value`).
- No filtering is applied since all inputs are processed fully.


### ⚠️ Special Note:

- The aggregation specifically finds the **minimum** value among the transformed inputs.
- For `n=0`, output is `None` (no valid aggregation).
- For `n>0`, output is the smallest `len(string)/2` value among the inputs.

**Final answer: Mapping and Aggregation** ✅


{{</ border >}}

{{< border type="question" >}}
**22**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
value = None
for i in range(n):
  num = len(input())
  if value is None:
      value = num
  elif num/2 < value:
      value = num
print(value)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Based on the provided code snippet:

```python
n = int(input())
value = None
for i in range(n):
  num = len(input())        # Transformation operation
  if value is None:
      value = num
  elif num/2 < value:       # Conditional update
      value = num
print(value)
```


### 🔍 Pattern Analysis:

1. **Mapping** ✅
    - Each input string is **transformed** into a numerical value: `len(input())` (string length).
    - This is a classic mapping operation where raw input is converted to a derived value.
2. **Aggregation** ✅
    - The transformed values are **reduced** to a single result through conditional updates.
    - The algorithm maintains a running value that gets updated based on comparisons with new inputs.
    - This fits the aggregation pattern (reducing multiple values to one).
3. **Filtering** ❌
    - No values are excluded from processing. All inputs are transformed and considered in the aggregation.
    - The condition `num/2 < value` only affects *how* the aggregation updates, not *which* inputs are processed.

### 📝 Conclusion:

The code implements **two data processing patterns**:

1. **Mapping** (transforming string inputs to their lengths)
2. **Aggregation** (reducing multiple values to a single result through conditional updates)

**Correct options**:

- **Mapping**
- **Aggregation**


### 💡 Key Insight:

- **Mapping** occurs through `len(input())`, converting each string to an integer.
- **Aggregation** happens through the update logic:
    - First value initializes `value`
    - Subsequent values update `value` only if `num/2 < value`
- The output is the last value that met the update condition or the first value if no updates occurred.


### ⚠️ Special Note:

- This is **not standard min/max aggregation** due to the specific update rule (`num/2 < value`).
- However, it still qualifies as aggregation because it reduces all inputs to a single summary value.

**Final answer: Mapping and Aggregation** ✅


{{</ border >}}

{{< border type="question" >}}
**23**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
values = {}
for i in range(n):
  num = int(input())
  l = len(str(num))
  if l not in values:
      values[l] = set()
  values[l].add(num)
print(values)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border type="tip" title="Solution" >}}

Based on the code snippet and analysis:

```python
n = int(input())
values = {}
for i in range(n):
  num = int(input())
  l = len(str(num))        # Transformation operation
  if l not in values:
      values[l] = set()
  values[l].add(num)       # Grouping operation
print(values)
```


### 🔍 Pattern Analysis:

1. **Mapping** ✅
    - Each input number is **transformed** into a new value: `len(str(num))` (number of digits).
    - This is a classic mapping operation where raw input is converted to a derived feature.
2. **Aggregation** ✅
    - Numbers are **grouped by their digit length** into sets within a dictionary.
    - This is a form of aggregation where values are collected into categories (group-by operation).
    - The dictionary `values` acts as an aggregated data structure.
3. **Filtering** ❌
    - No values are excluded from processing. All inputs are transformed and added to the groups.
    - The condition `if l not in values` only initializes new groups, doesn't filter data.

### 📝 Conclusion:

The code implements **two data processing patterns**:

1. **Mapping** (transforming numbers to their digit counts)
2. **Aggregation** (grouping numbers by their digit counts)

**Correct options**:

- **Aggregation**
- **Mapping**


### 💡 Key Insight:

- **Mapping** occurs through `len(str(num))`, converting each number to its digit count.
- **Aggregation** happens through the dictionary grouping:
    - Keys: Digit counts (from mapping)
    - Values: Sets of original numbers
- The output is a dictionary showing numbers grouped by digit length (e.g., `{2: {10, 99}, 3: {100, 255}}`).

**Final answer: Aggregation and Mapping** ✅

{{</ border >}}

{{< border type="question" >}}
**24**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
for i in range(n):
  a = input()
  b = input()
  print(b)
  print(a)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border type="tip" title="Solution" >}}

Based on the provided code snippet:

```python
n = int(input())
for i in range(n):
  a = input()
  b = input()
  print(b)
  print(a)
```


### 🔍 Pattern Analysis:

1. **Mapping** ✅
    - Each pair of inputs (`a`, `b`) is **transformed** into a new output order (`b`, `a`).
    - This is a classic mapping operation where the input structure is reordered without changing the content.
2. **No Aggregation** ❌
    - Values aren't combined into a summary result. Each input pair is processed independently.
3. **No Filtering** ❌
    - All inputs are processed without exclusions.

### 📝 Conclusion:

The code implements **one data processing pattern**:

- **Mapping** (reordering input pairs from `(a, b)` to `(b, a)`)

**Correct option**:

- **Mapping**


### 💡 Key Insight:

- The transformation is **structural**: Input order is swapped during output.
- No value modification occurs (e.g., `a` and `b` are printed as-is).
- This is distinct from content-based mapping (like arithmetic operations) but still qualifies as data transformation.

**Final answer: Mapping** ✅


{{</ border >}}

{{< border type="question" >}}
**25**) Consider the below python code.

```python {linenos=table,linenostart=1}
num = int(input())
i = -num
result = 0
while True:
    if i>5:
        break
    if i<-5:
        continue
    result += i
    i += 2
print(result)
```

Select all the possible outputs of the above code for any possible valid integer as input.

💡*Hint*: To solve this question you might want to try out with different values of num or automate that with another loop with different values for num. What range of values do you use for this automation?

Options:                            

0

1

2

3

4

5

6

7

8

9

{{</ border >}}

{{< border type="tip" title="Solution" >}}

Let's look at the code's possible outputs for any valid integer input:

- The code sets \$ i = -num \$ and sums every odd value from $-5$ to $5$ (inclusive), incrementing by 2, but only if $i$ starts within or eventually enters this range.
- If \$ i > 5 \$ at the start, the loop breaks immediately and the result is 0.
- If \$ i < -5 \$, the loop keeps incrementing $i$ by 2 until $i \geq -5$, then starts summing.

From the code execution results, the possible outputs are:

- 0
- 4
- 5
- 6
- 8
- 9


### 🎯 **Possible outputs:**

**0, 4, 5, 6, 8, 9**

(Options 1, 2, 3, and 7 are not possible for any integer input.)

{{</ border >}}

{{< border type="question" >}}
**26**) Consider the below python code.

```python {linenos=table,linenostart=1}
num = int(input())
i = num
result = 0
while True:
    i -= 5
    if i>15:
        continue
    if i<-15:
        break
    result -= i
print(result)
```

Select all the possible outputs of the above code for any possible valid integer as input.

💡**Hint**: To solve this question you might want to try out with different values of num or automate that with another loop with different values for num. What range of values do you use for this automation?

Options:

-9

-7

-3

-2

1

3

4

5

8

9

{{</ border >}}

{{< border type="tip" title="Solution" >}}

Based on the analysis of the code for various integer inputs, the possible outputs from the given options are:

- **-9** (e.g., `num = 19` or `num = 29`)
- **-3** (e.g., `num = 18` or `num = 23`)
- **3** (e.g., `num = 17` or `num = 22`)
- **5** (e.g., `num = 14`)
- **9** (e.g., `num = 16` or `num = 21`)


### ✅ Valid Outputs:

- `-9`
- `-3`
- `3`
- `5`
- `9`


### ❌ Not Possible:

- `-7`, `-2`, `1`, `4`, `8` were not observed for any integer input and are mathematically implausible given the code's arithmetic progression.


### Explanation:

The code processes inputs by:

1. Starting with `i = num`
2. Repeatedly subtracting 5 from `i` in each iteration.
3. Only accumulating `result -= i` when `i` is in `[-15, 15]`.
4. Breaking the loop when `i < -15`.

The outputs depend on the sequence of `i` values in the arithmetic progression (step `-5`) that fall within `[-15, 15]`. The valid outputs above are achievable for specific inputs, while others are not due to integer constraints and the progression's properties.

For example:

- **`num=14`** → Output `5`
- **`num=16`** → Output `9`
- **`num=17`** → Output `3`
- **`num=18`** → Output `-3`
- **`num=19`** → Output `-9`

{{</ border >}}
