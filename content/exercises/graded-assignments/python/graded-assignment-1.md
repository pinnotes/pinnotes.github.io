---
title: Python Week 1
weight: 1
subtitle: Graded Assignment
categories:
- Python Graded Assignment
---

---

## Multiple Choice Questions 🧠

{{< border type="question" >}}
**1**) What will be the output type of the expression `5 + 2`?

int

float

str

bool

Invalid Expression (raises an error)
{{</ border >}}

{{< border type="tip" title="Solution" >}}
🎯 **The output type of the expression `5 + 2` in Python is `int`.**

Let's break it down step by step! 👇

### Step-by-Step Explanation 🐍

1. **Both operands are integers:**
    - `5` is an integer (`int`)
    - `2` is also an integer (`int`)
2. **Using the `+` operator:**
    - The `+` operator adds two numbers.
    - When both numbers are integers, Python performs integer addition.
3. **Result:**
    - `5 + 2` evaluates to `7`.
    - Since both operands are integers, **the result is also an integer** (`int`)[^1][^2][^3].

### Practice It Yourself! 💻

Try this in your Python shell:

```python
result = 5 + 2
print(result)           # Output: 7
print(type(result))     # Output: <class 'int'>
```


### Why Not Other Types? 🤔

| Option | Explanation |
| :-- | :-- |
| **int** | ✅ Correct! Both operands are integers, so the result is an integer. |
| float | ❌ Would only happen if at least one operand was a float (e.g., `5.0 + 2`). |
| str | ❌ Only if you use quotes, like `'5' + '2'`, which would concatenate strings. |
| bool | ❌ Only if you use Boolean values, like `True + False`. |
| Invalid/Error | ❌ This is a valid expression; no error is raised. |

### Quick Quiz! 📝

**Q:** What will be the type of the result for `5 + 2.0`?

A) int

B) float

C) str

D) bool

**Answer:**

B) float

*Explanation: When you add an integer and a float, Python automatically converts the result to a float.*

**Summary:**

- **`5 + 2` results in an `int` type output.**
- You can always check the type using the `type()` function in Python.

Keep practicing! 🚀
{{</ border >}}


{{< border type="question" >}}
**2**) What will be the output type of the expression `5 + 2.0`?

int

float

str

bool

Invalid Expression (raises an error)
{{</ border >}}

{{< border type="tip" title="Solution" >}}
✨ **The output type of the expression `5 + 2.0` in Python is `float`.**

Let's see why, step by step! 🚀

### Step-by-Step Explanation

1. **Operands:**
    - `5` is an **integer** (`int`)
    - `2.0` is a **floating-point number** (`float`)
2. **Addition with Mixed Types:**
    - When you add an `int` and a `float`, **Python automatically converts the integer to a float** (this is called *implicit type conversion* or *type promotion*)[^1].
3. **Result:**
    - The result of `5 + 2.0` is `7.0`
    - The type of the result is **float**[^1].

### Try It Yourself! 🧑‍💻

```python
result = 5 + 2.0
print(result)           # Output: 7.0
print(type(result))     # Output: <class 'float'>
```


### Why Not Other Types? 🤔

| Option | Explanation |
| :-- | :-- |
| **float** | ✅ Correct! Mixing `int` and `float` gives a `float`. |
| int | ❌ Only if both operands were integers. |
| str | ❌ Only if you use strings, like `'5' + '2.0'`. |
| bool | ❌ Only if you use Boolean values, like `True + False`. |
| Invalid/Error | ❌ This is a valid expression; no error is raised. |

### Practice Question 📝

**Q:** What will be the type of the result for `3.5 + 2`?

A) int

B) float

C) str

D) bool

---

**Answer:**

B) float

*Explanation: Adding a float and an int always results in a float in Python.*

---

**Summary:**

- `5 + 2.0` results in a value of type **float** (`7.0`) in Python[^1].
- Python always promotes to the more "complex" type when mixing numbers: `int` → `float` → `complex`[^1].

Keep experimenting in the Python shell to see how types change! 🐍✨
{{</ border >}}


{{< border type="question" >}}
**3**) What will be the output type of the expression `'5' + "2"`?

int

float

str

bool

Invalid Expression (raises an error)
{{</ border >}}

{{< border type="tip" title="Solution" >}}
🎉 **The output type of the expression `'5' + "2"` in Python is `str` (string)!**

Let's see why, step by step! 🚦

### Step-by-Step Explanation

1. **Operands:**
    - `'5'` is a string (because it's inside single quotes).
    - `"2"` is also a string (because it's inside double quotes).
2. **The `+` Operator with Strings:**
    - In Python, the `+` operator **concatenates** (joins) two strings together, not adds them as numbers[^1][^2].
    - So, `'5' + "2"` results in the string `'52'`.
3. **Result Type:**
    - The result is a new string: `'52'`
    - Its type is **`str`**.

### Try It Yourself! 🧑‍💻

```python
result = '5' + "2"
print(result)           # Output: 52
print(type(result))     # Output: <class 'str'>
```


### Why Not Other Types? 🤔

| Option | Explanation |
| :-- | :-- |
| **str** | ✅ Correct! Concatenating two strings gives a string. |
| int | ❌ Only if you add numbers, like `5 + 2`. |
| float | ❌ Not possible unless you use floats, like `5.0 + 2.0`. |
| bool | ❌ Only happens with Boolean values, like `True + False`. |
| Invalid/Error | ❌ This is valid in Python; no error is raised. |

### Practice Question 📝

**Q:** What will be the type of the result for `"Hello" + 'World'`?

A) int

B) float

C) str

D) bool

---

**Answer:**

C) str

*Explanation: Concatenating two strings always gives a string.*

---

**Summary:**

- `'5' + "2"` produces a string: `'52'`
- **Type:** `str` (string)

Keep practicing and experimenting! 🚀
{{</ border >}}


{{< border type="question" >}}
**4**) What will be the output type of the expression `5 == 2`?

int

float

str

bool

Invalid Expression (raises an error)
{{</ border >}}

{{< border type="tip" title="Solution" >}}
✅ **The output type of the expression `5 == 2` in Python is `bool` (Boolean type).**

Let's understand step by step! 🐍

### Step-by-Step Explanation

1. **What does `==` do?**
    - The `==` operator is a **relational (comparison) operator** in Python.
    - It checks if the value on the left (`5`) is **equal** to the value on the right (`2`).
2. **What is the result of `5 == 2`?**
    - Since `5` is **not equal** to `2`, the expression evaluates to `False`.
3. **What is the type of the result?**
    - The result of any comparison using relational operators (`==`, `!=`, `<`, `>`, `<=`, `>=`) is always of type **`bool`** in Python.
    - The possible values are `True` or `False`[1].

### Try It Yourself! 💻

```python
result = 5 == 2
print(result)           # Output: False
print(type(result))     # Output: <class 'bool'>
```


### Why Not Other Types? 🤔

| Option | Explanation |
| :-- | :-- |
| int | ❌ Only for integer arithmetic, not comparison. |
| float | ❌ Only for floating-point arithmetic, not comparison. |
| str | ❌ Only for string operations, not comparison. |
| **bool** | ✅ Correct! Comparison returns a Boolean (`True` or `False`). |
| Invalid/Error | ❌ This is a valid expression; no error is raised. |

### Practice Question 📝

**Q:** What will be the type of the result for `"5" == 5`?

A) int

B) float

C) str

D) bool

---

**Answer:**

D) bool

*Explanation: Even though the values are not equal (string vs integer), the result of the comparison is `False`, and its type is `bool`.*

---

**Summary:**

- `5 == 2` returns `False`
- **Type:** `bool` (Boolean)

Keep practicing and try more comparisons! 🚦✨

{{</ border >}}


{{< border type="question" >}}
**5**) What will be the output type of the expression `'5 > 2'`?

int

float

str

bool

Invalid Expression (raises an error)
{{</ border >}}

{{< border type="tip" title="Solution" >}}
🚦 **The output type of the expression `'5 > 2'` is `str` (string).**

Let's break it down step by step! 👇

### Step-by-Step Explanation

1. **Look at the quotes:**
    - `'5 > 2'` is surrounded by single quotes.
    - In Python, anything inside quotes (single `'` or double `"`) is treated as a **string**.
2. **What is inside the string?**
    - The content `5 > 2` is just text here, **not an actual comparison**.
    - Python does **not** evaluate the expression inside quotes. It just treats it as a sequence of characters.
3. **So, what is the type?**
    - The type is **string** (`str`).

### Try It Yourself! 🧑‍💻

```python
result = '5 > 2'
print(result)           # Output: 5 > 2
print(type(result))     # Output: <class 'str'>
```


### Why Not Other Types? 🤔

| Option | Explanation |
| :-- | :-- |
| int | ❌ Only if you do arithmetic like `5 + 2`. |
| float | ❌ Only if you do floating-point arithmetic. |
| **str** | ✅ Correct! Quotes make it a string, no matter what's inside. |
| bool | ❌ Only if you write `5 > 2` (without quotes), which evaluates to `True`. |
| Invalid/Error | ❌ This is valid Python code; no error is raised. |

### Practice Question 📝

**Q:** What will be the type of the result for `"Hello > World"`?

A) int

B) float

C) str

D) bool

---

**Answer:**

C) str

*Explanation: Anything inside quotes is a string, even if it looks like a comparison!*

---

**Summary:**

- `'5 > 2'` is a **string** (`str`) because it's inside quotes.
- If you want a comparison, write `5 > 2` (without quotes), which gives a `bool`.

Keep practicing and notice how quotes change the meaning in Python! 🐍✨
{{</ border >}}


{{< border type="question" >}}
**6**) What will be the output type of the expression `"5" > "2"`?

int

float

str

bool

Invalid Expression (raises an error)
{{</ border >}}

{{< border type="tip" title="Solution" >}}
🌟 **The output type of the expression `"5" > "2"` in Python is `bool` (Boolean)!**

Let's break it down step by step with clear explanation and a practice question! 👇

### Step-by-Step Explanation

1. **Both operands are strings:**
    - `"5"` is a string (because it's in double quotes)
    - `"2"` is also a string
2. **The `>` operator between strings:**
    - In Python, you can compare strings using relational operators like `>`, `<`, `==`, etc.
    - The comparison is done **lexicographically** (like in a dictionary), comparing Unicode values of characters one by one[^1].
3. **How does `"5" > "2"` work?**
    - Python checks the Unicode value of `'5'` and `'2'`.
    - Since `'5'` comes after `'2'` in Unicode order, `"5" > "2"` evaluates to `True`.
4. **What is the output type?**
    - The result of any comparison operation is always of type **`bool`** (Boolean)[^1].

### Try It Yourself! 🧑‍💻

```python
result = "5" > "2"
print(result)           # Output: True
print(type(result))     # Output: <class 'bool'>
```


### Why Not Other Types? 🤔

| Option | Explanation |
| :-- | :-- |
| int | ❌ Only for arithmetic, not comparison. |
| float | ❌ Only for arithmetic, not comparison. |
| str | ❌ Only if you put quotes around the whole expression, like `"'5' > '2'"`. |
| **bool** | ✅ Correct! Comparisons always return a Boolean (`True` or `False`). |
| Invalid/Error | ❌ This is a valid expression; no error is raised. |

### Practice Question 📝

**Q:** What will be the type of the result for `"apple" < "banana"`?

A) int

B) float

C) str

D) bool

---

**Answer:**

D) bool

*Explanation: String comparisons return a Boolean value (`True` or `False`).*

---

**Summary:**

- `"5" > "2"` results in a value of type **`bool`** (Boolean).
- The result is `True` because `'5'` is greater than `'2'` lexicographically.

Keep experimenting with different string comparisons! 🐍💡

{{</ border >}}


{{< border type="question" >}}
**7**) What will be the output type of the expression `'True' or 'False'`?

int

float

str

bool

Invalid Expression (raises an error)
{{</ border >}}

{{< border type="tip" title="Solution" >}}
✨ **The output type of the expression `'True' or 'False'` in Python is `str` (string).**

Let's break it down step by step! 🐍👇

### Step-by-Step Explanation

1. **Both operands are strings:**
    - `'True'` is a string (because it is inside single quotes).
    - `'False'` is also a string.
2. **The `or` operator with strings:**
    - In Python, the `or` operator returns the **first operand if it is "truthy"** (not empty or zero); otherwise, it returns the second operand[^1].
    - Non-empty strings are always "truthy" in Python.
3. **How does `'True' or 'False'` evaluate?**
    - Since `'True'` is a non-empty string (truthy), Python returns `'True'` and **does not even evaluate the second operand** (this is called short-circuit evaluation)[^1].
4. **Type of the result:**
    - The result is `'True'`, which is a string.
    - So, the **output type is `str`**.

### Try It Yourself! 💻

```python
result = 'True' or 'False'
print(result)           # Output: True
print(type(result))     # Output: <class 'str'>
```


### Why Not Other Types? 🤔

| Option | Explanation |
| :-- | :-- |
| int | ❌ Only if you use numbers, not strings. |
| float | ❌ Only with floating-point numbers. |
| **str** | ✅ Correct! Both operands are strings; result is a string. |
| bool | ❌ Only if you use Boolean literals (without quotes), like `True or False`. |
| Invalid/Error | ❌ This is valid Python code; no error is raised. |

### Practice Question 📝

**Q:** What is the type of the result for `'' or 'Python'`?

A) int

B) float

C) str

D) bool

---

**Answer:**

C) str

*Explanation: The first operand is an empty string (falsy), so Python returns the second operand, which is a non-empty string. The type is `str`.*

---

**Summary:**

- `'True' or 'False'` returns `'True'` (a string).
- **Output type:** `str` (string).

Keep experimenting with different types and the `or` operator! 🚀
{{</ border >}}


{{< border type="question" >}}
**8**) What will be the output type of the expression `"555"[2]`?

int

float

str

bool

Invalid Expression (raises an error)
{{</ border >}}

{{< border type="tip" title="Solution" >}}
🎯 **The output type of the expression `"555"[^1]` in Python is `str` (string).**

Let's understand why, step by step! 👇

### Step-by-Step Explanation

1. **What is `"555"`?**
    - It is a string containing three characters: `'5'`, `'5'`, `'5'`.
2. **What does `[^1]` mean?**
    - In Python, you can access individual characters in a string using *indexing*.
    - **Indexing starts from 0**, so:
        - `"555"` → `'5'`
        - `"555"[^2]` → `'5'`
        - `"555"[^1]` → `'5'`
3. **What is the type of `"555"[^1]`?**
    - When you access a single character from a string, the result is also a **string** of length 1, not an integer![^2][^1]

### Try It Yourself! 💻

```python
result = "555"[^2]
print(result)           # Output: 5
print(type(result))     # Output: <class 'str'>
```


### Why Not Other Types? 🤔

| Option | Explanation |
| :-- | :-- |
| int | ❌ Even though the character is `'5'`, it is still a string, not an integer. |
| float | ❌ Only if you convert it, which is not done here. |
| **str** | ✅ Correct! Indexing a string always returns a string of length 1. |
| bool | ❌ Only if you use Boolean expressions. |
| Invalid/Error | ❌ This is valid Python code; no error is raised. |

### Practice Question 📝

**Q:** What is the type of `"hello"[^2]`?

A) int

B) float

C) str

D) bool

---

**Answer:**

C) str

*Explanation: Indexing a string always returns a string of length 1.*

---

**Summary:**

- `"555"[^1]` returns `'5'` (as a string).
- **Output type:** `str` (string)[^2][^1].

[^2]: Python-Cheatsheet-2024.pdf (See: "String indexing starts from 0", "s1 - H", "s1[-1] - o", "String slicing", "Type method is used to get datatype of a variable or value")

[^1]: Introduction_to_Python_Programming_-_WEB.pdf (See: "len(string) returns the length", "type(value) returns the type or class of a value", "Strings may be written using either kind of quote", "String indexing")

{{</ border >}}


{{< border type="question" >}}
**9**) What will be the output type of the expression `555[::2]`?

int

float

str

bool

Invalid Expression (raises an error)
{{</ border >}}

{{< border type="tip" title="Solution" >}}
🚨 **The output type of the expression `555[::2]` is: Invalid Expression (raises an error).**

Let's see why, step by step! 🐍

### Step-by-Step Explanation

1. **What is `555`?**
    - `555` is an **integer** (`int`), not a string or a list.
2. **What does `[::2]` mean?**
    - `[::2]` is **slice notation**, which is valid for *sequences* like strings, lists, or tuples.
    - You can use slicing on `"555"[::2]` or `[1][2][::2]`, but **not on integers**.
3. **What happens if you try `555[::2]`?**
    - Python will **raise a TypeError** because integers do not support slicing or subscripting.
4. **What is the error message?**
> `'int' object is not subscriptable`

### Try It Yourself! 💻

```python
result = 555[::2]
# Output: TypeError: 'int' object is not subscriptable
```


### Why Not Other Types? 🤔

| Option | Explanation |
| :-- | :-- |
| int | ❌ Would only be if the expression returned an integer. |
| float | ❌ Would only be if the expression returned a float. |
| str | ❌ Only if you sliced a string, like `"555"[::2]`. |
| bool | ❌ Only if the expression returned a Boolean. |
| **Invalid/Error** | ✅ Correct! Slicing is not allowed on integers, so it raises an error. |

### Practice Question 📝

**Q:** What will be the output type of `"555"[::2]`?

- A) int
- B) float
- C) str
- D) bool
- E) Invalid Expression (raises an error)

---

**Answer:**

C) str

*Explanation: Slicing a string returns a new string!*

---

**Summary:**

- `555[::2]` **raises a TypeError** because integers do not support slicing.
- **Output type:** Invalid Expression (raises an error) 🚫

Keep practicing and always check the type of object you are working with before using slicing! 🐍✨

{{</ border >}}


{{< border type="question" >}}
**10**) What will be the output type of the expression `"555["2"]"`?

int

float

str

bool

Invalid Expression (raises an error)
{{</ border >}}

{{< border type="tip" title="Solution" >}}
🚨 **The output type of the expression `"555["2"]"` is: Invalid Expression (raises an error).**

Let's see why, step by step! 👇

### Step-by-Step Explanation

1. **What is `"555"`?**
    - It is a **string** containing three characters: `'5'`, `'5'`, `'5'`.
2. **What does `["2"]` mean?**
    - In Python, you can use square brackets to access an element by its **index** in a string, like `"555"[^1]` (which gives `'5'`).
    - The index must be an **integer**, not a string.
3. **What happens with `"555["2"]"`?**
    - Here, you are trying to use a **string** (`"2"`) as the index, not an integer.
    - Python does **not** allow string indices for strings (unlike dictionaries, where keys can be strings).
4. **What is the result?**
    - Python raises a **TypeError**:
> "string indices must be integers"
    - So, **the expression is invalid and raises an error**.

### Try It Yourself! 💻

```python
result = "555"["2"]
# Output: TypeError: string indices must be integers
```


### Why Not Other Types? 🤔

| Option | Explanation |
| :-- | :-- |
| int | ❌ Only if you use an integer index, like `"555"[^1]`. |
| float | ❌ Never valid as an index for strings. |
| str | ❌ Only if you use valid string operations, not this syntax. |
| bool | ❌ Not related to this operation. |
| **Invalid/Error** | ✅ Correct! Using a string as an index for a string raises a TypeError. |

### Practice Question 📝

**Q:** What is the output type of `"hello"[^2]`?
- A) int
- B) float
- C) str
- D) bool
- E) Invalid Expression (raises an error)

---

**Answer:**

C) str

*Explanation: Indexing a string with an integer returns a string of length 1.*

---

**Summary:**

- `"555["2"]"` raises a **TypeError** because string indices must be integers, not strings.
- **Output type:** Invalid Expression (raises an error) 🚫

{{</ border >}}


{{< border type="question" >}}
**11**) What will be the output type of the expression `print('True')`?

int

float

str

bool

NoneType
{{</ border >}}

{{< border type="tip" title="Solution" >}}
🌟 **The output type of the expression `print('True')` is `NoneType`.**

Let's break it down step by step! 👇

### Step-by-Step Explanation

1. **What does `print('True')` do?**
    - The `print()` function in Python **displays the given argument(s) to the console**.
    - In this case, it prints the string `'True'` to the screen.
2. **What does `print()` return?**
    - The `print()` function **does not return any value** that you can use in your code.
    - Technically, it returns a special value called `None`.
3. **What is the type of `None`?**
    - The type of `None` is **`NoneType`** in Python.
4. **Demonstration in Python:**
```python
result = print('True')   # This prints 'True' to the console
print(result)            # This prints: None
print(type(result))      # This prints: <class 'NoneType'>
```

- When you assign the result of `print('True')` to a variable, that variable will have the value `None`, and its type will be `NoneType`[^1].


### Why Not Other Types? 🤔

| Option | Explanation |
| :-- | :-- |
| int | ❌ Only if the function returns an integer (not the case here). |
| float | ❌ Only if the function returns a float. |
| str | ❌ Only if the function returns a string. |
| bool | ❌ Only if the function returns a boolean. |
| **NoneType** | ✅ Correct! `print()` returns `None`, which is of type `NoneType`. |

### Practice Question 📝

**Q:** What will be the output type of the expression `x = print("Hello")`?
- A) int
- B) float
- C) str
- D) bool
- E) NoneType

---

**Answer:**

E) NoneType

*Explanation: The `print()` function always returns `None`, no matter what you print!*

---

**Summary:**

- The output type of `print('True')` is **`NoneType`** because `print()` returns `None`[^1].

Keep experimenting with functions and their return types in Python! 🐍✨

{{</ border >}}


{{< border type="question" >}}
**12**) What will be the output type of the expression `int("5.0") + float(2)`?

int

float

str

bool

Raises an error
{{</ border >}}

{{< border type="tip" title="Solution" >}}
🚨 **The output type of the expression `int("5.0") + float(2)` is: Raises an error.**

Let's see why, step by step! 👇

### Step-by-Step Explanation

1. **`int("5.0")`**
    - The `int()` function tries to convert its argument to an integer.
    - **But:** `"5.0"` is a string representation of a float, not an integer.
    - `int("5.0")` will **raise a `ValueError`** because Python expects a string that looks like an integer (e.g., `"5"`), not a float with a decimal point.

> `ValueError: invalid literal for int() with base 10: '5.0'`[^1]
2. **`float(2)`**
    - This part is fine: `float(2)` gives `2.0` (a float).
3. **The addition is never reached**
    - Because the error happens at `int("5.0")`, the addition is never performed.

### Try It Yourself! 💻

```python
result = int("5.0") + float(2)
# Output: ValueError: invalid literal for int() with base 10: '5.0'
```


### Why Not Other Types? 🤔

| Option | Explanation |
| :-- | :-- |
| int | ❌ Would only happen if both conversions succeeded and result was int. |
| float | ❌ Would happen if both conversions succeeded and result was float. |
| str | ❌ Not a string operation. |
| bool | ❌ Not a boolean operation. |
| **Raises an error** | ✅ Correct! The expression raises a `ValueError` at `int("5.0")`. |

### Practice Question 📝

**Q:** What will be the output type of the expression `int("5") + float(2)`?
- A) int
- B) float
- C) str
- D) bool
- E) Raises an error

---

**Answer:**

B) float

*Explanation: `int("5")` gives `5`, `float(2)` gives `2.0`, and `5 + 2.0` results in `7.0` (a float).*

---

**Summary:**

- `int("5.0") + float(2)` **raises a `ValueError`** because `"5.0"` is not a valid integer string for `int()`[^1].

{{</ border >}}


{{< border type="question" >}}
**13**) What will be the output type of the expression `str(5) + str(2.0)`?

int

float

str

bool

Raises an error
{{</ border >}}

{{< border type="tip" title="Solution" >}}
🎉 **The output type of the expression `str(5) + str(2.0)` is `str` (string)!**

Let's understand this step by step with a simple explanation and practice! 👇

### Step-by-Step Explanation

1. **What does `str(5)` do?**
    - Converts the integer `5` to the string `"5"`.
2. **What does `str(2.0)` do?**
    - Converts the float `2.0` to the string `"2.0"`.
3. **What does the `+` operator do with strings?**
    - When used with strings, `+` **concatenates** (joins) them together, not adds them as numbers[^1].
4. **What is the result of `str(5) + str(2.0)`?**
    - It joins `"5"` and `"2.0"` to get `"52.0"`, which is a string.
5. **Type of the result:**
    - The output is `"52.0"`, and its type is **str** (string)[^1].

### Try It Yourself! 🧑‍💻

```python
result = str(5) + str(2.0)
print(result)           # Output: 52.0
print(type(result))     # Output: <class 'str'>
```


### Why Not Other Types? 🤔

| Option | Explanation |
| :-- | :-- |
| int | ❌ Only if you add numbers, not strings. |
| float | ❌ Only if you add numbers and at least one is a float. |
| **str** | ✅ Correct! Concatenating two strings gives a string. |
| bool | ❌ Only for Boolean operations. |
| Raises an error | ❌ This is valid Python code; no error is raised. |

### Practice Question 📝

**Q:** What will be the result and type of `str(3) + str(4.5)`?
- A) `"34.5"`, str
- B) `7.5`, float
- C) `7`, int
- D) Raises an error

---

**Answer:**

A) `"34.5"`, str

*Explanation: Both are converted to strings and concatenated.*

---

**Summary:**

- `str(5) + str(2.0)` results in `"52.0"`
- **Output type:** `str` (string)[^1]

Keep practicing string conversions and concatenations! 🚀

{{</ border >}}


{{< border type="question" >}}
14) Select the expression(s) that are equivalent to the given expression.

```python {linenos=table,linenostart=1}
5 * 6 + 3 / 1
```

Options:

`5 * (6 + (3 / 1))`

`(5 + 6) * 3 / 1`

`(5 * 6 + 3) / 1`

`(5 * 6) + (3 / 1)`
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's analyze which expressions are **equivalent** to the original:

```python
5 * 6 + 3 / 1
```


### Step-by-Step Calculation

- **Multiplication and division** have higher precedence than addition.
- So, Python evaluates as:
\$ (5 \times 6) + (3 \div 1) = 30 + 3 = 33.0 \$


### Let's check each option:

| Option | Value | Equivalent? |
| :-- | :-- | :-- |
| `5 * (6 + (3 / 1))` | 5 * (6 + 3) = 5 * 9 = 45.0 | ❌ No |
| `(5 + 6) * 3 / 1` | (11) * 3 / 1 = 33.0 | ✅ Yes |
| `(5 * 6 + 3) / 1` | (30 + 3) / 1 = 33.0 | ✅ Yes |
| `(5 * 6) + (3 / 1)` | 30 + 3 = 33.0 | ✅ Yes |

### **Final Answer**

**The following expressions are equivalent to `5 * 6 + 3 / 1`:**

- `(5 + 6) * 3 / 1`
- `(5 * 6 + 3) / 1`
- `(5 * 6) + (3 / 1)`

Only the first option, `5 * (6 + (3 / 1))`, is **not equivalent** because it changes the order of operations and gives a different result.

#### 📝 **Practice Question**

**Q**: Which of the following is equivalent to `8 + 4 * 2`?

- A) `(8 + 4) * 2`
- B) `8 + (4 * 2)`
- C) `(8 + 4 * 2)`
- D) Both B and C

---

**Answer:**

D) Both B and C

*Explanation: Multiplication happens before addition, so both B and C give 8 + 8 = 16. Option A gives 24.*

Keep practicing! If you want to see the step-by-step for any other expression, just ask! 😃

{{</ border >}}


{{< border type="question" >}}
**15**) Select the expression(s) that are equivalent to the given expression.

```python {linenos=table,linenostart=1}
(1 + 2) * (3 + 4)
```

Options:

`(1 + (2 * (3 + 4)))`

`(1 + 2) * 3 + 4`

`((1 + 2) * (3 + 4))`

`1 + (2 * 3) + 4`
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's evaluate which expressions are **equivalent** to:

```python
(1 + 2) * (3 + 4)
```


#### Step-by-Step Calculation

- First, calculate inside the parentheses:
    - $1 + 2 = 3$
    - $3 + 4 = 7$
- Then multiply:
    - $3 \times 7 = 21$


#### Let's check each option using the actual values (from the code execution):

| Option | Value | Equivalent? |
| :-- | :-- | :-- |
| `(1 + (2 * (3 + 4)))` | 15 | ❌ No |
| `(1 + 2) * 3 + 4` | 13 | ❌ No |
| `((1 + 2) * (3 + 4))` | 21 | ✅ Yes |
| `1 + (2 * 3) + 4` | 11 | ❌ No |

### **Correct Answer**

**Only this expression is equivalent:**

- `((1 + 2) * (3 + 4))`


#### 📝 Practice Question

What is equivalent to `(2 + 3) * (4 + 1)`?

- A) `2 + 3 * 4 + 1`
- B) `(2 + 3) * (4 + 1)`
- C) `2 + (3 * (4 + 1))`
- D) `((2 + 3) * 4) + 1`

---

**Answer:**

B) `(2 + 3) * (4 + 1)`

*Explanation: Only option B preserves the original grouping and order of operations.*

Keep practicing! If you want to check more, just ask! 😃

{{</ border >}}


{{< border type="question" >}}
**16**) Select the expression(s) that are equivalent to the given expression.

```python {linenos=table,linenostart=1}
a == b > c
```

Options:

`(a == b) > c`

`a == (b > c)`

`(a == b) and (b > c)`

`(a == b) or (b > c)`
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's analyze the original expression:

```python
a == b > c
```


### How Python Evaluates `a == b > c`

- **Chained comparisons:**
Python allows chaining of comparison operators.
`a == b > c` is equivalent to:

```python
(a == b) and (b > c)
```

    - Both comparisons must be true for the whole expression to be true.
    - This is **not** the same as evaluating `(a == b)` first and then comparing the result to `c`.


#### Let's check each option:

| Option | Equivalent? | Explanation |
| :-- | :-- | :-- |
| `(a == b) > c` | ❌ | Evaluates `(a == b)` first (which is `True` or `False`), then compares that Boolean to `c`. Not the same as the original. |
| `a == (b > c)` | ❌ | Evaluates `(b > c)` first (which is `True` or `False`), then compares `a` to that Boolean. Not the same as the original. |
| `(a == b) and (b > c)` | ✅ | **Correct!** This matches Python's chained comparison behavior. |
| `(a == b) or (b > c)` | ❌ | Uses `or` instead of `and`; not equivalent. |

### **Correct Answer**

**The only equivalent expression is:**

- `(a == b) and (b > c)`

### 📝 Practice Question

Which of the following is equivalent to `x < y <= z`?

- A) `(x < y) and (y <= z)`
- B) `x < (y <= z)`
- C) `(x < y) or (y <= z)`
- D) `((x < y) <= z)`

---

**Answer:**

A) `(x < y) and (y <= z)`

*Explanation: Python's chained comparisons work like a logical `and` of each pair in the chain.*

Keep practicing! If you want to see how Python evaluates other chained comparisons, just ask! 🐍✨

{{</ border >}}


{{< border type="question" >}}
**17**) Select the expression(s) that are equivalent to the given expression.

```python {linenos=table,linenostart=1}
not (a or b) and c
```

Options:

`not a or b and c`

`not (a or (b and c))`

`(not a) or (b and c)`

`(not (a or b)) and c`
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's break down the original expression:

```python
not (a or b) and c
```


### Step-by-Step Evaluation

- **Parentheses first:**
Evaluate `(a or b)`
- **Apply `not`:**
`not (a or b)`
- **Apply `and c`:**
`[result above] and c`

This is **not** the same as distributing `not` or changing the order of operations.

Now, let's check each option:


| Option | Equivalent? | Explanation |
| :-- | :-- | :-- |
| `not a or b and c` | ❌ | Operator precedence changes meaning: `not a` is evaluated first, then `or`, then `and`. This is not the same as the original expression[^1]. |
| `not (a or (b and c))` | ❌ | This changes grouping: inside parentheses, `b and c` is evaluated first, then `a or [result]`, then `not`. Not the same as original. |
| `(not a) or (b and c)` | ❌ | This is a different logic: `not a`, then `or`, then `(b and c)`. Not equivalent. |
| `(not (a or b)) and c` | ✅ | **This is exactly the same as the original!** Parentheses and order are preserved. |

### **Correct Answer**

**The only equivalent expression is:**

- `(not (a or b)) and c`


### 📝 Practice Question

Which of the following is equivalent to `not (x and y) or z`?

- A) `not x and y or z`
- B) `(not (x and y)) or z`
- C) `not x and (y or z)`
- D) `not (x and (y or z))`

---

**Answer:**

B) `(not (x and y)) or z`

*Explanation: Parentheses ensure the correct order of evaluation and logic.*

---

**Tip:**
Always use parentheses to make your logic clear and to avoid mistakes with operator precedence in Python![^1]

{{</ border >}}


{{< border type="question" >}}
**18**) Select the expression(s) that are equivalent to the given expression.

```python {linenos=table,linenostart=1}
not a or not b and c
```

Options:

`(not a) or (not (b and c))`

`((not a) or (not b)) and c`

`(not a) or ((not b) and c)`

`not (a or (not b) and c)`
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's analyze the original expression:

```python
not a or not b and c
```


### Step-by-Step Evaluation

- **Operator precedence:**
    - `not` has higher precedence than `and`, which has higher precedence than `or`.
    - So, Python evaluates as:
\$ (not\ a) \$ or \$ ((not\ b)\ and\ c) \$
- **This is not the same as distributing `not` or changing grouping!**

Let's check each option:


| Option | Equivalent? | Explanation |
| :-- | :-- | :-- |
| **(not a) or (not (b and c))** | ❌ | By De Morgan's law, `not (b and c)` is equivalent to `(not b) or (not c)`, so this is not the same as the original expression. |
| **((not a) or (not b)) and c** | ❌ | This changes the grouping and logic; not equivalent. |
| **(not a) or ((not b) and c)** | ✅ | This matches the original expression's operator precedence and grouping! |
| **not (a or (not b) and c)** | ❌ | Different grouping and logic; not equivalent. |

### **Correct Answer**

**The only equivalent expression is:**

- `(not a) or ((not b) and c)`


### 📝 Practice Question

Which of the following is equivalent to `not x or not y and z`?

- A) `(not x) or ((not y) and z)`
- B) `not (x or (not y) and z)`
- C) `(not x) or (not (y and z))`
- D) `((not x) or (not y)) and z`

---

**Answer:**

A) `(not x) or ((not y) and z)`

*Explanation: Operator precedence in Python means `not` is applied first, then `and`, then `or`.*

Keep practicing with logical expressions and try using parentheses to clarify precedence! 🐍✨

{{</ border >}}


{{< border type="question" >}}
**19**) How does the Python interpreter parenthesize the following expression?

```python {linenos=table,linenostart=1}
not False or True and False
```

Options:

`not (False or (True and False))`

`(not False) or (True and False)`

`not ((False or True) and False)`

`((not False) or True) and False`
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's break down how Python **parenthesizes** the expression:

```python
not False or True and False
```


### Step-by-Step: Python Operator Precedence

Python's logical operator precedence is:

1. **not** (highest)
2. **and**
3. **or** (lowest)[^1][^2]

So, Python interprets the expression as:

1. **not False** is evaluated first → `True`
2. **True and False** is evaluated next → `False`
3. **not False or (True and False)** → `True or False`
4. **True or False** → `True`

So, the parenthesized version is:

```python
(not False) or (True and False)
```


### Let's check the options:

| Option | Equivalent? | Explanation |
| :-- | :-- | :-- |
| `not (False or (True and False))` | ❌ | Changes grouping, not matching Python's precedence. |
| **`(not False) or (True and False)`** | ✅ | **Correct! Matches Python's precedence and evaluation order.** |
| `not ((False or True) and False)` | ❌ | Changes grouping, not matching Python's precedence. |
| `((not False) or True) and False` | ❌ | Changes grouping, not matching Python's precedence. |

### 📝 Practice Question

How does Python parenthesize:
`not True and False or True`?

- A) `((not True) and False) or True`
- B) `not (True and (False or True))`
- C) `not (True and False) or True`
- D) `(not True) and (False or True)`

---

**Answer:**

A) `((not True) and False) or True`

*Explanation: `not` first, then `and`, then `or`.*

---

**Summary:**

- Python parenthesizes `not False or True and False` as **`(not False) or (True and False)`**[^1][^2].

{{</ border >}}


{{< border type="question" >}}
**20**) Select the correct statement(s) about `print` in python.

`print` is a built-in function.

In a python REPL/Notebook `print("hi")` will give same output as just "hi".

`print` prints new line character at the end of the line.

`print` can be used to display any data type.
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's review each statement about `print` in Python:

### 1️⃣ `print` is a built-in function.

**✅ Correct!**

- In Python 3, `print` is a built-in function, not a statement[^1].


### 2️⃣ In a python REPL/Notebook `print("hi")` will give same output as just "hi".

**❌ Incorrect!**

- In the REPL or notebook, typing `"hi"` (just the string) will display `'hi'` as the output (the string representation), but `print("hi")` will display `hi` as plain text.
- Example:
    - Typing `"hi"` ➡️ Output: `'hi'`
    - Typing `print("hi")` ➡️ Output: `hi`
- So, the outputs are not exactly the same[^2].


### 3️⃣ `print` prints new line character at the end of the line.

**✅ Correct!**

- By default, `print` adds a newline character (`\n`) at the end of its output unless you specify otherwise with the `end` parameter[^1].


### 4️⃣ `print` can be used to display any data type.

**✅ Correct!**

- You can use `print` to display strings, numbers, lists, dictionaries, and any other data type. Python will automatically convert the object to a string for display[^1].

## ✔️ **Summary Table**

| Statement | Correct? |
| :-- | :-- |
| `print` is a built-in function. | ✅ |
| In REPL/Notebook `print("hi")` is same as just "hi". | ❌ |
| `print` prints new line character at the end of the line. | ✅ |
| `print` can be used to display any data type. | ✅ |

### 📝 Practice Question

Which of the following will print `Hello` without quotes in a Python REPL?

- A) `"Hello"`
- B) `print("Hello")`
- C) `'Hello'`
- D) Both A and C

---

**Answer:**

B) `print("Hello")`

*Explanation: Only `print("Hello")` prints the string as plain text, the others show the string with quotes.*

If you want more details or examples, let me know! 😊

{{</ border >}}


{{< border type="question" >}}
**21**) Select the correct statement(s) about `input` in python.

`input` accepts atmost one argument.

Output type can be passed to `input` as `input(type)` to get output in the required type.

`input` can be only used in python scripts and not in REPL/Notebook.

Output type of `input` is always `str`
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's analyze each statement about `input` in Python:

### 1️⃣ `input` accepts at most one argument.

**✅ Correct!**

- The `input` function **can take zero or one argument** (the prompt string).
- Example: `input()` or `input("Enter your name: ")`
- Passing more than one argument will raise a `TypeError`.[^1][^2]


### 2️⃣ Output type can be passed to `input` as `input(type)` to get output in the required type.

**❌ Incorrect!**

- `input(type)` will just display `type` as the prompt, not convert the result.
- **`input` always returns a string**.
- To convert the input, you must use a constructor like `int(input())` or `float(input())` after calling `input`.[^2][^3]


### 3️⃣ `input` can be only used in python scripts and not in REPL/Notebook.

**❌ Incorrect!**

- `input` works in both Python scripts **and** in the Python REPL or Notebook environments.[^1][^2]
- You can use `input()` anywhere Python code is executed interactively.


### 4️⃣ Output type of `input` is always `str`

**✅ Correct!**

- The return value of `input()` is **always a string** (`str`), regardless of what the user types.[^2][^3]
- If you want a different type, you must convert the result.


## ✔️ Summary Table

| Statement | Correct? |
| :-- | :-- |
| `input` accepts at most one argument. | ✅ |
| Output type can be passed to `input` as `input(type)` to get required type. | ❌ |
| `input` can be only used in python scripts and not in REPL/Notebook. | ❌ |
| Output type of `input` is always `str` | ✅ |

### 📝 Practice Question

What is the output type of the following code?

```python
x = input("Enter a number: ")
print(type(x))
```

- A) int
- B) float
- C) str
- D) bool

---

**Answer:**

C) str

*Explanation: `input()` always returns a string, even if the user types a number!*

If you want to convert the input to a number, use `int(input(...))` or `float(input(...))` after getting the input! 🎉

{{</ border >}}


{{< border type="question" >}}
### Common data for the next 3 questions 🔗

This set of questions is intended for you to practice python tutor and get used to it. Watch [this](https://www.youtube.com/watch?v=jr9wuxm9kfg) tutorial on how to use python tutor before attempting this questions.

Consider the code present in [this](https://livinnector.github.io/live-py-tutor/#mode=edit) python tutor link.

Answer the following questions by using the python tutor interface. Consider the below code.

---

**22**) What is the value of `a` after executing line 3, using the input already given❓

---

**23**) What is the value of `a` after executing line 4, if input given changed to 4❓

---

**24**) What is the value of `a` after executing line 5, if the input is changed to 3❓

{{</ border >}}

{{< border type="tip" title="Solution" >}}

{{</ border >}}


{{< border type="question" >}}
### Common data for the next 3 questions 🔗

This set of questions is intended for you to practice python tutor and get used to it. Watch [this](https://www.youtube.com/watch?v=jr9wuxm9kfg) tutorial on how to use python tutor before attempting this questions.

Consider the code present in [this](https://livinnector.github.io/live-py-tutor/#mode=edit) python tutor link.

Answer the following questions by using the python tutor interface.

---

**25**) What is the value of `a` after executing line 3, using the input already given?

---

**26**) What is the value of `a` after executing line 4, if input given changed to 14?

---

**27**) What is the value of `a` after executing line 5, if the input is changed to 23?

{{</ border >}}

{{< border type="tip" title="Solution" >}}

{{</ border >}}


{{< border type="question" >}}
**28**) We need to write a program that accepts two names (strings) as input and prints `True` if the first name comes before the second in alphabetical order, and `False` otherwise.

Sample test cases:

| Input | Output |
| ---- | ---- |
| sachin rohit | False |
| saina sindhu | True |

For example, `sachin` comes after `rohit`, so the expected output is `False`. Select all correct implementations of this program.

Options:

```python {linenos=table,linenostart=1}
name1 = input()
name2 = input()
print(name1 < name2)
```

```python {linenos=table,linenostart=1}
name1 = input()
name2 = input()
print(name1 > name2)
```

```python {linenos=table,linenostart=1}
print(input() < input())
```

```python {linenos=table,linenostart=1}
print(input() > input())
```

```python {linenos=table,linenostart=1}
name1 = input()
name2 = input()
result = name1 < name2
print(result)
```

```python {linenos=table,linenostart=1}
name1 = input()
name2 = input()
result = name1 > name2
print(result)
```

{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's break down the task and options:

### **Task Recap**

- **Input:** Two names (strings), one per line.
- **Output:** Print `True` if the first name comes before the second in alphabetical order, else `False`.


#### **How Python compares strings:**

- The `<` operator checks if the first string comes before the second in dictionary (lexicographical) order[^1].


#### **Test Example**

- Input:

```
sachin
rohit
```

Output:

```
False
```

Because "sachin" comes after "rohit".


### **Let's check each option:**

| Option | Code | Output for (`sachin`, `rohit`) | Output for (`saina`, `sindhu`) | Correct? | Explanation |
| :-- | :-- | :-- | :-- | :-- | :-- |
| 1 | name1 = input(); name2 = input(); print(name1 < name2) | False | True | ✅ | Compares in correct order. |
| 2 | name1 = input(); name2 = input(); print(name1 > name2) | True | False | ❌ | Reverses the comparison. |
| 3 | print(input() < input()) | False | True | ✅ | Same as option 1, just shorter. |
| 4 | print(input() > input()) | True | False | ❌ | Same as option 2, reverses comparison. |
| 5 | name1 = input(); name2 = input(); result = name1 < name2; print(result) | False | True | ✅ | Same as option 1, just with a variable. |
| 6 | name1 = input(); name2 = input(); result = name1 > name2; print(result) | True | False | ❌ | Reverses the comparison. |

### **Correct Implementations**

- **Option 1**
- **Option 3**
- **Option 5**

All these use `<` to compare the first input with the second, which matches the required logic.

### 📝 **Practice Question**

Write a program to check if the first city name comes before the second city name alphabetically.
**Sample Input:**

```
Mumbai
Delhi
```

**Sample Output:**

```
False
```

**Solution:**

```python
city1 = input()
city2 = input()
print(city1 < city2)
```

**Summary:**

- **Correct options:**
    - `name1 = input(); name2 = input(); print(name1 < name2)`
    - `print(input() < input())`
    - `name1 = input(); name2 = input(); result = name1 < name2; print(result)`

Keep practicing string comparisons! 🚀

{{</ border >}}


{{< border type="question" >}}
**29**) What is the type of the following expression?

```python {linenos=table,linenostart=1}
(1 > 0) and (-1 < 0) and (1 == 1)
```

Options:

str

bool

True

False
{{</ border >}}

{{< border type="tip" title="Solution" >}}
The type of the expression

```python
(1 > 0) and (-1 < 0) and (1 == 1)
```

is **bool**.

### Step-by-Step Explanation 🐍

- `1 > 0` evaluates to `True` (bool)
- `-1 < 0` evaluates to `True` (bool)
- `1 == 1` evaluates to `True` (bool)
- All three are combined with the `and` operator, which returns a Boolean value (`True` or `False`).
- The type of the entire expression is **bool** (Boolean), not the value `True` or `False`, and not a string.

You can confirm this in Python:

```python
result = (1 > 0) and (-1 < 0) and (1 == 1)
print(type(result))  # Output: <class 'bool'>
```


### Practice Question 🎯

What is the type of the expression `(5 != 3) or (2 > 7)`?

- A) int
- B) bool
- C) str
- D) True

---

**Answer:**

B) bool

*Explanation: Logical operations always return a Boolean value (`True` or `False`), and its type is `bool`.*

So, the correct answer is:
**bool**

{{</ border >}}


