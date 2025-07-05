---
title: Python Week 2
weight: 2
subtitle: Graded Assignment
categories:
- Python Graded Assignment
---

---

## Multiple Choice Questions 🧠

{{< border type="question" >}}

### Common data for the next 4 questions 🔗

Consider the below code.

```python {linenos=table,linenostart=1}
a = 5
b = "hello"
c = a
d = a + 5
e = b[:d-7]
b,e = d,b
b,d = c,b
f,d = d,e
d,b = e,c
b,d = f,e
del c
```

Try playing around in [this](https://livinnector.github.io/live-py-tutor/#mode=edit) python tutor link for answering the questions.

---

**1**) What is the total number of objects that were referenced by the variables in the given code during the execution?

---

**2**) What is the total number of objects that were referenced by the variables in the given code at the end of the execution?

---

**3**) What is the total number of variables refering to the same object as variable `b` (including `b`) at the end of the execution of the given code?

---

**4**) Select the variable(s) that are refering to the same object as `a` at some point of time during the execution of the above code.

b

c

d

e

f
{{</ border >}}

{{< border type="tip" title="Solution" >}}

{{</ border >}}

{{< border type="question" >}}
**5**) Assume `s` is a `str`, if the output of `print(s)` is The next line char is `\\n`, then select the possible the value(s) of `s`.

`"""The next line char is \\n"""`

`"The next line char is \\\\n"`

`'The next line char is \\n'`

`'The next line char is \\\\n'`
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's break down the question step by step, using clear explanations, emojis, and practice!

## 🎯 **Question Recap**

If the output of `print(s)` is:

```
The next line char is \n
```

Which of the following values could `s` be?

1. `"""The next line char is \\n"""`
2. `"The next line char is \\\\n"`
3. `'The next line char is \\n'`
4. `'The next line char is \\\\n'`

## 🧐 **Understanding the Problem**

- **Goal:** Find which value(s) of `s` will make `print(s)` show `The next line char is \n` (with a literal backslash and n, not a newline!).
- **Key:** In Python, `\n` inside a string is a newline, but `\\n` is a backslash and an n.


## 🔍 **Step-by-Step Analysis**

Let's see what each string literal actually contains:

### 1️⃣ `"""The next line char is \\n"""`

- `\\` → a single backslash (`\`)
- `n` → the character `n`
- So, the string is: `The next line char is \n`
- **When printed:** `The next line char is \n` ✅


### 2️⃣ `"The next line char is \\\\n"`

- `\\\\` → two backslashes (`\\`)
- `n` → the character `n`
- So, the string is: `The next line char is \\n`
- **When printed:** `The next line char is \\n` ❌ (too many backslashes!)


### 3️⃣ `'The next line char is \\n'`

- Same as option 1, just with single quotes.
- `\\` → a single backslash (`\`)
- `n` → the character `n`
- So, the string is: `The next line char is \n`
- **When printed:** `The next line char is \n` ✅


### 4️⃣ `'The next line char is \\\\n'`

- Same as option 2, just with single quotes.
- `\\\\` → two backslashes (`\\`)
- `n` → the character `n`
- So, the string is: `The next line char is \\n`
- **When printed:** `The next line char is \\n` ❌


## ✅ **Final Answer**

**Possible values for `s` are:**

- `"""The next line char is \\n"""`
- `'The next line char is \\n'`

Both will print:

```
The next line char is \n
```


## 📝 **Practice Questions**

### Q1. What will `print("Hello\\tWorld")` output?

- **A:** `Hello\tWorld` (shows a backslash and t)


### Q2. What will `print("Hello\nWorld")` output?

- **A:**

```
Hello
World
```

(the `\n` makes a new line!)


## 🧑‍💻 **Try it Yourself!**

```python
s1 = """The next line char is \\n"""
s2 = "The next line char is \\\\n"
s3 = 'The next line char is \\n'
s4 = 'The next line char is \\\\n'

print("s1:", s1)
print("s2:", s2)
print("s3:", s3)
print("s4:", s4)
```

**Expected Output:**

```
s1: The next line char is \n
s2: The next line char is \\n
s3: The next line char is \n
s4: The next line char is \\n
```


## ⭐️ **Summary Table**

| Option | Value of `s` | Output of `print(s)` | Is it correct? |
| :-- | :-- | :-- | :-- |
| 1 | `"""The next line char is \\n"""` | The next line char is \n | ✅ |
| 2 | `"The next line char is \\\\n"` | The next line char is \\n | ❌ |
| 3 | `'The next line char is \\n'` | The next line char is \n | ✅ |
| 4 | `'The next line char is \\\\n'` | The next line char is \\n | ❌ |

**🎉 That's it! Now you know how Python string escapes work!**
{{</ border >}}

{{< border type="question" >}}
**6**) Assume `s` is a `str`, if the output of `print(s)` is given below.

```python {linenos=table,linenostart=1}
The first line.
The second line.
```

Select the possible the value(s) of `s`.

```python {linenos=table,linenostart=1}
s = 'The first line.\n The second line.'
```

```python {linenos=table,linenostart=1}
s = 'The first line.\nThe second line.'
```

```python {linenos=table,linenostart=1}
s = '''
The first line.
The second line.
'''
```

```python {linenos=table,linenostart=1}
s = '''The first line.
The second line.
'''
```

```python {linenos=table,linenostart=1}
s = '''The first line.
       The second line.
    '''
```

```python {linenos=table,linenostart=1}
s = (
  "The first line.\n"
  "The second line."
)
```

```python {linenos=table,linenostart=1}
s = (
  "The first line.\n"
  + "The second line."
)
```

{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's solve this step by step with clear explanations, emojis, and a table for clarity!

## 🎯 **Question Recap**

You want to know **which value(s) of `s` will make** this output when you run `print(s)`:

```
The first line.
The second line.
```

*(Exactly two lines, no extra spaces!)*

## 🧐 **Step-by-Step Analysis**

Let's check each option:

### 1️⃣

```python
s = 'The first line.\n The second line.'
```

- `\n` = new line
- But notice the **space at the start** of the second line!
- Output:

```
The first line.
 The second line.
```

- **❌ Not a match!** (Extra space)


### 2️⃣

```python
s = 'The first line.\nThe second line.'
```

- `\n` = new line
- Output:

```
The first line.
The second line.
```

- **✅ Match!**


### 3️⃣

```python
s = '''
The first line.
The second line.
'''
```

- Triple quotes preserve line breaks and spaces.
- But this starts with a **newline** and may have leading spaces, depending on indentation.
- Output:

```
<blank line>
The first line.
The second line.
<blank line>
```

- **❌ Not a match!** (Extra blank lines)


### 4️⃣

```python
s = '''The first line.
The second line.
'''
```

- Starts immediately, so no leading blank line.
- But **ends with a newline** because of the closing triple quotes on a new line.
- Output:

```
The first line.
The second line.
<blank line>
```

- **❌ Not a match!** (Extra blank line at end)


### 5️⃣

```python
s = '''The first line.
       The second line.
    '''
```

- The second line has **leading spaces**.
- Output:

```
The first line.
       The second line.
<blank line>
```

- **❌ Not a match!** (Extra spaces and blank line)


### 6️⃣

```python
s = (
  "The first line.\n"
  "The second line."
)
```

- Parentheses allow implicit string concatenation.
- Equivalent to `"The first line.\nThe second line."`
- Output:

```
The first line.
The second line.
```

- **✅ Match!**


### 7️⃣

```python
s = (
  "The first line.\n"
  + "The second line."
)
```

- Concatenation with `+` is the same as above.
- Output:

```
The first line.
The second line.
```

- **✅ Match!**


## ✅ **Summary Table**

| Option | Output (print) | Match? |
| :-- | :-- | :-- |
| 1 | The first line.<br> The second line. | ❌ |
| 2 | The first line.<br>The second line. | ✅ |
| 3 | <blank line><br>The first line.<br>The second line.<br><blank line> | ❌ |
| 4 | The first line.<br>The second line.<br><blank line> | ❌ |
| 5 | The first line.<br>       The second line.<br><blank line> | ❌ |
| 6 | The first line.<br>The second line. | ✅ |
| 7 | The first line.<br>The second line. | ✅ |

## ⭐️ **Correct Answers**

- **Option 2**
- **Option 6**
- **Option 7**


## 🧑‍💻 **Try It Yourself!**

```python
s = 'The first line.\nThe second line.'
print(s)

s = (
  "The first line.\n"
  "The second line."
)
print(s)

s = (
  "The first line.\n"
  + "The second line."
)
print(s)
```

_All three will print:_

```
The first line.
The second line.
```


## 💡 **Practice Questions**

1. **What does `print("Hello\nWorld")` output?**
    - **A:**

```
Hello
World
```

2. **What does `print("Line1\nLine2\nLine3")` output?**
    - **A:**

```
Line1
Line2
Line3
```


**🎉 Well done! Now you know how to create multi-line strings in Python and predict their output!**

{{</ border >}}

{{< border type="question" >}}
**7**) Select the string(s) that are equal to `"000500"`.

`f"{500:06}"`

`f"{500:03}"`

`"0"*3+500`

`0*3+"500"`

`"0"*3+"500"`
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's break down each option to see which expressions produce the **string `"000500"`** in Python! 🐍

## 🔍 **Step-by-Step Explanation**

### 1️⃣ `f"{500:06}"`

- **What it does:**
Formats the integer `500` as a string with at least 6 digits, padding with zeros on the left.
- **Result:**
`"000500"` ✅


### 2️⃣ `f"{500:03}"`

- **What it does:**
Formats `500` as a string with at least 3 digits, padding with zeros if needed.
- **Result:**
`"500"` (no extra zeros) ❌


### 3️⃣ `"0"*3+500`

- **What it does:**
`"0"*3` gives `"000"`, but `500` is an integer, so `"000" + 500` causes a **TypeError** (can't add string and int) ❌


### 4️⃣ `0*3+"500"`

- **What it does:**
`0*3` is `0`, and `"500"` is a string, so `0 + "500"` causes a **TypeError** (can't add int and string) ❌


### 5️⃣ `"0"*3+"500"`

- **What it does:**
`"0"*3` gives `"000"`, and `"500"` is a string, so concatenation gives `"000500"` ✅


## ✅ **Final Answers**

| Option | Is it `"000500"`? |
| :-- | :--: |
| `f"{500:06}"` | ✅ YES |
| `f"{500:03}"` | ❌ NO |
| `"0"*3+500` | ❌ NO |
| `0*3+"500"` | ❌ NO |
| `"0"*3+"500"` | ✅ YES |

**So, the correct answers are:**

- `f"{500:06}"`
- `"0"*3+"500"`


## 🧑‍💻 **Try it Yourself!**

```python
print(f"{500:06}")      # Output: 000500
print(f"{500:03}")      # Output: 500
print("0"*3 + "500")    # Output: 000500
```


## 📝 **Practice Questions**

1. **What will `f"{42:05}"` output?**
    - **A:** `"00042"`
2. **What is the result of `"A"*4 + "B"`?**
    - **A:** `"AAAAB"`
3. **What happens if you try `"0"*2 + 99`?**
    - **A:** TypeError (can't add str and int)

**🎉 Great job! Now you know how to format numbers as zero-padded strings in Python!**

{{</ border >}}

{{< border type="question" >}}
**8**) Consider the below code block.

```python {linenos=table,linenostart=1}
n_apples = 5
apple_price = 5.7
s = ...
print(s)
```

If the output of the code is 5 kgs of apple cost ₹ 28.50, select the possible expression(s) that can be used for `s``.

Options:

- `s = f"{n_apples} kgs of apple cost ₹ {n_apples*apple_price}"`

- `s = f"{n_apples} kgs of apple cost ₹ {n_apples*apple_price:0.2f}"`

- `s = f"{n_apples} kgs of apple cost ₹ {n_apples*apple_price:.2f}"`

- `s = n_apples+" kgs of apple cost ₹ "+n_apples*apple_price`

- `s = str(n_apples)+" kgs of apple cost ₹ "+str(n_apples*apple_price)`

- `s = str(n_apples)+" kgs of apple cost ₹ "+str(n_apples*apple_price)+"0"`

{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's break down each option to see which can produce the output:

```
5 kgs of apple cost ₹ 28.50
```

when used as the value of `s` in the code:

```python
n_apples = 5
apple_price = 5.7
s = ...
print(s)
```


## 🧐 **Option-by-Option Analysis**

### 1️⃣ `s = f"{n_apples} kgs of apple cost ₹ {n_apples*apple_price}"`

- **What it does:**
    - Uses f-strings, but `{n_apples*apple_price}` will be `28.5` (not `28.50`).
- **Output:**

```
5 kgs of apple cost ₹ 28.5
```

- **❌ Not a match** (missing trailing zero).


### 2️⃣ `s = f"{n_apples} kgs of apple cost ₹ {n_apples*apple_price:0.2f}"`

- **What it does:**
    - The `:0.2f` formats the number to **two decimal places**.
- **Output:**

```
5 kgs of apple cost ₹ 28.50
```

- **✅ Match!**


### 3️⃣ `s = f"{n_apples} kgs of apple cost ₹ {n_apples*apple_price:.2f}"`

- **What it does:**
    - The `:.2f` also formats the number to **two decimal places**[^1][^2].
- **Output:**

```
5 kgs of apple cost ₹ 28.50
```

- **✅ Match!**


### 4️⃣ `s = n_apples+" kgs of apple cost ₹ "+n_apples*apple_price`

- **What it does:**
    - Tries to add `int` + `str` + `float` → **TypeError** (can't add int/float to str)[^2].
- **❌ Not valid Python**.


### 5️⃣ `s = str(n_apples)+" kgs of apple cost ₹ "+str(n_apples*apple_price)`

- **What it does:**
    - Converts both values to strings, but `str(n_apples*apple_price)` will be `'28.5'` (not `'28.50'`).
- **Output:**

```
5 kgs of apple cost ₹ 28.5
```

- **❌ Not a match** (missing trailing zero).


### 6️⃣ `s = str(n_apples)+" kgs of apple cost ₹ "+str(n_apples*apple_price)+"0"`

- **What it does:**
    - `str(n_apples*apple_price)` gives `'28.5'`, then adds `'0'` at the end: `'28.50'`.
- **Output:**

```
5 kgs of apple cost ₹ 28.50
```

- **✅ Match!** (works, but is a hacky way)


## ✅ **Summary Table**

| Option | Output (print) | Match? |
| :-- | :-- | :-- |
| 1 | 5 kgs of apple cost ₹ 28.5 | ❌ |
| 2 | 5 kgs of apple cost ₹ 28.50 | ✅ |
| 3 | 5 kgs of apple cost ₹ 28.50 | ✅ |
| 4 | TypeError | ❌ |
| 5 | 5 kgs of apple cost ₹ 28.5 | ❌ |
| 6 | 5 kgs of apple cost ₹ 28.50 | ✅ |

## ⭐️ **Correct Answers**

- **Option 2**
- **Option 3**
- **Option 6**


## 🧑‍💻 **Try It Yourself!**

```python
n_apples = 5
apple_price = 5.7

# Option 2
s2 = f"{n_apples} kgs of apple cost ₹ {n_apples*apple_price:0.2f}"
print(s2)  # 5 kgs of apple cost ₹ 28.50

# Option 3
s3 = f"{n_apples} kgs of apple cost ₹ {n_apples*apple_price:.2f}"
print(s3)  # 5 kgs of apple cost ₹ 28.50

# Option 6
s6 = str(n_apples)+" kgs of apple cost ₹ "+str(n_apples*apple_price)+"0"
print(s6)  # 5 kgs of apple cost ₹ 28.50
```


## 📝 **Practice Questions**

1. **How do you format 123.4 as `123.40` in an f-string?**
    - **A:** `f"{123.4:.2f}"` → `"123.40"`
2. **What will `print(f"Total: ₹ {99.999:.2f}")` output?**
    - **A:** `Total: ₹ 100.00`
3. **What is the output of `str(45.2) + "0"`?**
    - **A:** `"45.20"`

**🎉 Now you know how to format numbers for currency in Python!**

{{</ border >}}

{{< border type="question" >}}
**9**) Consider the below code block.

```python {linenos=table,linenostart=1}
n_apples = 5
apple_price = 1.75
s = ...
print(s)
```

If the output of the code is `5 kgs of apple cost ₹ 08.75`, select the possible expression(s) that can be used for `s``.

- `s = f"{n_apples} kgs of apple cost ₹ {n_apples*apple_price:0.2f}"`

- `s = f"{n_apples} kgs of apple cost ₹ {n_apples*apple_price}"`

- `s = f"{n_apples} kgs of apple cost ₹ {n_apples*apple_price:.2f}"`

- `s = n_apples+" kgs of apple cost ₹ "+n_apples*apple_price`

- `s = str(n_apples)+" kgs of apple cost ₹ 0"+str(n_apples*apple_price)`

- `s = str(n_apples)+" kgs of apple cost ₹ "+str(n_apples*apple_price)`

{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's check which options can produce this **exact output**:

```
5 kgs of apple cost ₹ 08.75
```

Given:

```python
n_apples = 5
apple_price = 1.75
s = ...
print(s)
```


## 🧐 **Option-by-Option Analysis**

### 1️⃣ `s = f"{n_apples} kgs of apple cost ₹ {n_apples*apple_price:0.2f}"`

- `n_apples*apple_price` = `5*1.75` = `8.75`
- `:0.2f` means: minimum width 0, 2 decimal places, **but does NOT pad with a leading zero** for numbers less than 10.
- **Result:**

```
5 kgs of apple cost ₹ 8.75
```

- **❌ Not a match** (no leading zero).


### 2️⃣ `s = f"{n_apples} kgs of apple cost ₹ {n_apples*apple_price}"`

- No formatting, so just `8.75`.
- **Result:**

```
5 kgs of apple cost ₹ 8.75
```

- **❌ Not a match** (no leading zero, may show more decimals if not exactly 2).


### 3️⃣ `s = f"{n_apples} kgs of apple cost ₹ {n_apples*apple_price:.2f}"`

- `:.2f` means: 2 decimal places, **but no leading zero**.
- **Result:**

```
5 kgs of apple cost ₹ 8.75
```

- **❌ Not a match**.


### 4️⃣ `s = n_apples+" kgs of apple cost ₹ "+n_apples*apple_price`

- This tries to add `int` + `str` + `float` → **TypeError** (can't add int/float to str).
- **❌ Not valid Python**.


### 5️⃣ `s = str(n_apples)+" kgs of apple cost ₹ 0"+str(n_apples*apple_price)`

- `str(n_apples)` → `'5'`
- `str(n_apples*apple_price)` → `'8.75'`
- Adds an **extra '0'** in front of the cost.
- **Result:**

```
5 kgs of apple cost ₹ 08.75
```

- **✅ Match!**


### 6️⃣ `s = str(n_apples)+" kgs of apple cost ₹ "+str(n_apples*apple_price)`

- `str(n_apples*apple_price)` → `'8.75'`
- **Result:**

```
5 kgs of apple cost ₹ 8.75
```

- **❌ Not a match**.


## ✅ **Summary Table**

| Option | Output (print) | Match? |
| :-- | :-- | :-- |
| 1 | 5 kgs of apple cost ₹ 8.75 | ❌ |
| 2 | 5 kgs of apple cost ₹ 8.75 | ❌ |
| 3 | 5 kgs of apple cost ₹ 8.75 | ❌ |
| 4 | TypeError | ❌ |
| 5 | 5 kgs of apple cost ₹ 08.75 | ✅ |
| 6 | 5 kgs of apple cost ₹ 8.75 | ❌ |

## ⭐️ **Correct Answer**

- **Option 5**: `s = str(n_apples)+" kgs of apple cost ₹ 0"+str(n_apples*apple_price)`


## 🧑‍💻 **Try It Yourself!**

```python
n_apples = 5
apple_price = 1.75
s = str(n_apples) + " kgs of apple cost ₹ 0" + str(n_apples * apple_price)
print(s)  # Output: 5 kgs of apple cost ₹ 08.75
```


## 📝 **Practice Questions**

1. **How do you print `₹ 05.00` for 5 rupees using f-string?**
    - **A:** `f"₹ {5:05.2f}"` → `₹ 05.00`
2. **What does `str(7.2).zfill(5)` output?**
    - **A:** `'07.2'` (but doesn't pad after decimal)
3. **What will `f"{9.5:06.2f}"` output?**
    - **A:** `'009.50'`

**🎉 Now you know how to control number formatting and string concatenation in Python!**

{{</ border >}}

{{< border type="question" >}}
**10**) Consider the below code block.

```python {linenos=table,linenostart=1}
a,b = "56"
s = f'{a*3:7}|{b*2:^6}|{a*8:>3}'
```

What is the value of the variable `s`? Enter the answer as a single quoted string.

{{</ border >}}

{{< border type="tip" title="Solution" >}}
Given the code:

```python
a, b = "56"
s = f'{a*3:7}|{b*2:^6}|{a*8:>3}'
```

Let's break it down:

- `a, b = "56"` assigns `a = "5"`, `b = "6"`
- `a*3` → `"5"*3` → `"555"`
- `b*2` → `"6"*2` → `"66"`
- `a*8` → `"5"*8` → `"55555555"`

Now, formatting:

- `{a*3:7}` → `"555"` right-aligned in width 7: `'    555'`
- `{b*2:^6}` → `"66"` centered in width 6: `'  66  '`
- `{a*8:>3}` → `"55555555"` right-aligned in width 3 (but string is longer than 3, so no effect): `'55555555'`

So, the value of `s` is:

```python
'    555|  66  |55555555'
```

**Final answer:**

```python
'    555|  66  |55555555'
```

{{</ border >}}

{{< border type="question" >}}
**11**) Assume `s` is a `str` variable. What is the type of the expression `str(len(s.upper().split())).isdigit()`?

`int`

`str`

`float`

`list`

`bool`

`NoneType`
{{</ border >}}

{{< border type="tip" title="Solution" >}}
The type of the expression

```python
str(len(s.upper().split())).isdigit()
```

is **`bool`**.

### 🧐 **Step-by-Step Explanation**

1. **`s.upper()`**
    - Converts all characters in `s` to uppercase.
    - Result: a string.
2. **`.split()`**
    - Splits the string into a list of words.
    - Result: a list.
3. **`len(...)`**
    - Returns the number of elements in the list.
    - Result: an integer.
4. **`str(...)`**
    - Converts the integer to a string.
    - Result: a string containing digits (e.g., `"2"`).
5. **`.isdigit()`**
    - Checks if the string contains only digits.
    - Result: **`True`** if all characters are digits, **`False`** otherwise.
    - The return value is of type **`bool`**.

### ✅ **Final Answer

> **bool**

**Practice Time!**

1. What is the type of `"123".isdigit()`?
    - **A:** `bool` (returns `True`)
2. What is the type of `len([^1][^2])`?
    - **A:** `int`
3. What is the type of `str(5.5)`?
    - **A:** `str`

**🎉 Great job!** Now you know how to trace complex expressions and determine their types in Python!

{{</ border >}}

{{< border type="question" >}}
**12**) Assume `s` is a `str` variable. What is the type of the expression `s[:3].upper().split()`?

`int`

`str`

`float`

`list`

`bool`

Raises Error
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's break down the expression step by step! 🐍

### Expression:

```python
s[:3].upper().split()
```


### Step-by-Step Explanation:

1. **`s[:3]`**
    - Slices the string `s` to get the first 3 characters.
    - Result: a **string**.
2. **`.upper()`**
    - Converts those 3 characters to uppercase.
    - Result: a **string**.
3. **`.split()`**
    - Splits the string into a list of substrings (by default, splits on whitespace).
    - Result: a **list**.

> The `split()` method always returns a **list** (even if the list has only one item)[^1][^2].

### ✅ **Final Answer**

**list**

## 📝 Practice Questions

1. What is the type of `"hello world".split()`?
    - **A:** `list`
2. What is the type of `"abc".upper()`?
    - **A:** `str`
3. What is the type of `len("abc")`?
    - **A:** `int`

🎉 **Great job! Now you know how to trace Python string method chains and their types!**

{{</ border >}}

{{< border type="question" >}}
13) Assume `s` is a `str` variable. What is the type of the expression `s.title()`?

`int`

`str`

`float`

`list`

`bool`

`NoneType`

Raises Error
{{</ border >}}

{{< border type="tip" title="Solution" >}}
The type of the expression `s.title()` is **`str`** (string).

- The `title()` method is a built-in string method in Python that returns a new string where the first character of each word is uppercase and the rest are lowercase.
- Applying `title()` to a string variable (`s`) always returns another string, not any other type like int, float, list, bool, or NoneType[^1][^2].

**Final answer:**
`str`

### 📝 Practice Questions

1. What is the type of `"hello".upper()`?
    - **A:** `str`
2. What is the type of `len("hello")`?
    - **A:** `int`
3. What is the type of `"123".isdigit()`?
    - **A:** `bool`

🎉 **Great job! Now you know how to check the type of string method results in Python!**

{{</ border >}}

{{< border type="question" >}}
14) Assume `s` is a `str` variable. What is the type of the expression `list(s)`?

`int`

`str`

`float`

`list`

`bool`

`NoneType`

Raises Error
{{</ border >}}

{{< border type="tip" title="Solution" >}}
The type of the expression `list(s)` is **list**.

- When you use `list(s)` in Python, it converts the string `s` into a list of its characters[^1][^2].
- For example, if `s = "word"`, then `list(s)` will result in `['w', 'o', 'r', 'd']`[^2].
- This works for any string, including the empty string (which will give an empty list).

**Final answer:**
`list`

### 📝 Practice Questions

1. What is the type of `list("abc")`?
    - **A:** `list`
2. What is the type of `str([^1][^3][^2])`?
    - **A:** `str`
3. What is the output of `list("")`?
    - **A:** `[]` (an empty list)

🎉 **Great job! Now you know how to convert strings to lists in Python!**

{{</ border >}}

{{< border type="question" >}}
15) Assume `s` is a `str` variable. What is the type of the expression `s.lower().alpha()`?

`int`

`str`

`float`

`list`

`bool`

Raises error
{{</ border >}}

{{< border type="tip" title="Solution" >}}
The type of the expression `s.lower().alpha()` is **"Raises error"**.

### 🧐 Step-by-Step Explanation

- `s` is a string.
- `s.lower()` returns a string (all lowercase).
- **But:** There is **no method called `.alpha()`** for strings in Python[1][2][3].
    - Common string methods include `.isalpha()`, `.isdigit()`, `.lower()`, `.upper()`, etc., but **not** `.alpha()`[1][2].
- **Therefore:**
Trying to call `.alpha()` on a string will raise an **AttributeError**.


### ✅ Final Answer

> **Raises error**

## 📝 Practice Questions

1. What is the type of `s.lower().isalpha()`?
    - **A:** `bool`
2. What happens if you call a non-existent method on a string, like `s.foo()`?
    - **A:** Raises `AttributeError`
3. What is the type of `s.upper()`?
    - **A:** `str`

🎉 **Great job! Always check if a method exists before using it in Python!**

{{</ border >}}

{{< border type="question" >}}
16) Assume `s` is a `str` variable. What is the type of the expression `s.lowercase().isalpha()`?

`int`

`str`

`float`

`list`

`bool`

Raises error
{{</ border >}}

{{< border type="tip" title="Solution" >}}
The type of the expression `s.lowercase().isalpha()` is **Raises error**.

### 🧐 Step-by-Step Explanation

- `s` is a string variable.
- `s.lowercase()` tries to call a method named `lowercase()` on a string.
- **But:**
Python strings **do not have a `lowercase()` method**. The correct method to convert to lowercase is `lower()`[1].
- Because `lowercase()` does not exist, Python will raise an **AttributeError**.


### ✅ Final Answer

> **Raises error**

## 📝 Practice Questions

1. What is the correct method to convert a string to lowercase in Python?
    - **A:** `.lower()`
2. What is the type of `s.lower().isalpha()`?
    - **A:** `bool`
3. What happens if you call a non-existent method like `s.foo()` on a string?
    - **A:** Raises `AttributeError`

🎉 **Great job! Always check method names carefully in Python!**

{{</ border >}}

{{< border type="question" >}}
17) Assume `s` is a `str` variable. What is the type of the expression `s.title().strip`?

`int`

`str`

`float`

`list`

`bool`

None of the above
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's analyze the expression step by step! 🐍

```python
s.title().strip
```


### Step-by-Step Explanation

- `s` is a string.
- `s.title()` returns a **string** (with each word capitalized).
- `s.title().strip` **does NOT have parentheses**—so it refers to the `strip` **method itself**, not the result of calling it.
- In Python, referencing a method without calling it returns a **bound method object**, **not** a string, int, float, list, or bool[^1].

**A bound method is a special object representing a function bound to an instance. Its type is neither `str`, `int`, `float`, `list`, nor `bool`.**

### What is the type of `s.title().strip`?

- Its type is **not** any of the listed types.
- More precisely, its type is `<class 'builtin_function_or_method'>` (in Python 3.x, more specifically `<class 'method'>` for user-defined classes, and `<class 'builtin_function_or_method'>` for built-in types like `str`).


### ✅ Final Answer

> **None of the above**

## 📝 Practice Questions

1. What is the type of `s.strip` where `s` is a string?
    - **A:** `<class 'builtin_function_or_method'>` (not `str`!)
2. What is the type of `s.strip()`?
    - **A:** `str`
3. What happens if you try to print `s.strip`?
    - **A:** You get something like `<built-in method strip of str object at 0x...>`

🎉 **Great job! Now you know the difference between referencing and calling a method in Python!**

{{</ border >}}

{{< border type="question" >}}
18) Assume `s` is a `str` variable. What is the type of the expression `s.join(s[0],s[1],s[3])`?

`int`

`str`

`float`

`list`

`bool`

Raises Error
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's analyze the expression step by step! 🐍

### Expression:

```python
s.join(s[^0], s[^1], s[^3])
```


### Step-by-Step Explanation

- **`s` is a string variable.**
- **The `join()` method:**
    - Syntax: `separator.join(iterable)`
    - It expects a **single iterable** (like a list or tuple) of strings as its argument, not multiple arguments.
    - Example: `",".join(["a", "b", "c"])` → `"a,b,c"`
- **What happens with `s.join(s, s[^1], s[^2])`?**
    - Here, three separate arguments are passed instead of a single iterable.
    - This is **not valid usage** of `join()`.
    - Python will raise a `TypeError` because the method expects exactly one argument (an iterable), not three.


### ✅ Final Answer

> **Raises Error**

## 📝 Practice Questions

1. What is the correct way to join three characters `a`, `b`, `c` with a dash using `join`?
    - **A:** `"-".join(["a", "b", "c"])` → `"a-b-c"`
2. What happens if you call `".".join("a", "b")`?
    - **A:** Raises `TypeError` (expects one iterable argument)
3. What is the type of `"".join(["1", "2", "3"])`?
    - **A:** `str` (the result is `"123"`)

🎉 **Great job! Always remember: `join()` needs a single iterable as its argument!**

{{</ border >}}

{{< border type="question" >}}
19) What is the value of the expression `bool(False)`?

`True`

`False`

Raises Error
{{</ border >}}

{{< border type="tip" title="Solution" >}}
The value of the expression `bool(False)` is **`False`**.

- The `bool()` function in Python converts its argument to a Boolean value (`True` or `False`).
- Passing `False` to `bool()` returns `False`, because `False` is already the Boolean value representing falsehood in Python[^1][^2].

**Final answer:**

```
False
```


### 📝 Practice Questions

1. What is the value of `bool(0)`?
    - **A:** `False`
2. What is the value of `bool(1)`?
    - **A:** `True`
3. What is the value of `bool('')` (empty string)?
    - **A:** `False`

🎉 **Great job! Now you know how `bool()` works in Python!**

{{</ border >}}

{{< border type="question" >}}
20) What is the value of the expression `bool(1 and 2 and 0)`?

`True`

`False`

Raises Error
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's break down the expression step by step! 🐍

## Expression:

```python
bool(1 and 2 and 0)
```


### Step-by-Step Explanation

1. **Evaluate `1 and 2 and 0`:**
    - In Python, the `and` operator returns the **first falsy value** it encounters, or the last value if all are truthy.
    - `1` is truthy, so check `2` (also truthy), then check `0` (which is falsy).
    - So, `1 and 2 and 0` evaluates to `0`.
2. **Apply `bool()` to the result:**
    - `bool(0)` is `False` in Python[^1].
    - So, the final result is `False`.

### ✅ Final Answer

```
False
```


## 📝 Practice Questions

1. What is the value of `bool(1 and 2 and 3)`?
    - **A:** `True` (all are truthy, so returns last value, which is 3, and `bool(3)` is `True`)
2. What is the value of `bool(0 or 5)`?
    - **A:** `True` (`0 or 5` is `5`, and `bool(5)` is `True`)
3. What is the value of `bool(0 and 5)`?
    - **A:** `False` (`0 and 5` is `0`, and `bool(0)` is `False`)

🎉 **Great job! Now you know how logical operators and `bool()` work in Python!**

{{</ border >}}

{{< border type="question" >}}
21) What is the value of the expression `bool(0 or "2" and 0)`?

`True`

`False`

Raises Error
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's evaluate the expression step by step! 🐍

## Expression:

```python
bool(0 or "2" and 0)
```


### Step-by-Step Explanation

1. **Evaluate `"2" and 0`:**
    - The `and` operator returns the first falsy value or the last value if all are truthy.
    - `"2"` is truthy, `0` is falsy.
    - So, `"2" and 0` → `0`.
2. **Now evaluate `0 or 0`:**
    - The `or` operator returns the first truthy value or the last value if all are falsy.
    - Both operands are `0` (falsy).
    - So, `0 or 0` → `0`.
3. **Apply `bool()` to the result:**
    - `bool(0)` → `False`.

### ✅ Final Answer

```
False
```


## 📝 Practice Questions

1. What is the value of `bool(0 or "2")`?
    - **A:** `True` (`0 or "2"` → `"2"`, which is truthy)
2. What is the value of `bool("" and 1)`?
    - **A:** `False` (`"" and 1` → `""`, which is falsy)
3. What is the value of `bool("0" and 1)`?
    - **A:** `True` (`"0"` is a non-empty string, so truthy; `1` is truthy; `"0" and 1` → `1`; `bool(1)` → `True`)

🎉 **Great job! Now you know how to evaluate complex boolean expressions in Python!**

{{</ border >}}

{{< border type="question" >}}
22) What is the value of the expression `0.0 or "2" or 4`?

`True`

`False`

`"2"`

`0.0`

`4`

Raises Error
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's evaluate the expression step by step! 🐍

## Expression:

```python
0.0 or "2" or 4
```


### Step-by-Step Explanation

- The `or` operator in Python returns the **first truthy value** it finds, or the last value if all are falsy.
- `0.0` is **falsy** (in Python, `0.0` is considered False in a boolean context).
- `"2"` is a **non-empty string**, which is **truthy**.
- Since `"2"` is truthy, Python stops evaluating and returns `"2"`.


### ✅ Final Answer

```
"2"
```


## 📝 Practice Questions

1. What is the value of `0 or "" or 5`?
    - **A:** `5` (since 0 and "" are falsy, 5 is returned)
2. What is the value of `"" or 0.0 or [] or False or "done"`?
    - **A:** `"done"` (all before are falsy, so the last value is returned)
3. What is the value of `"hello" or 0 or 5`?
    - **A:** `"hello"` (first value is truthy)

🎉 **Great job! Now you know how the `or` operator works in Python expressions!**

{{</ border >}}

{{< border type="question" >}}
23) What is the value of the expression `not None or "2" or 4`?

`True`

`False`

`None`

`"2"`

`4`

Raises Error
{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's break down the expression step by step:

## Expression:

```python
not None or "2" or 4
```


### Step 1: Evaluate `not None`

- In Python, `None` is considered **falsy**[^1][^2].
- `not None` → `True`


### Step 2: Evaluate `True or "2" or 4`

- The `or` operator returns the **first truthy value** it encounters[^2].
- `True` is truthy, so the expression stops evaluating further and returns `True`.


### ✅ Final Answer

```
True
```


## 📝 Practice Questions

1. What is the value of `not 0 or "" or 5`?
    - **A:** `True` (because `not 0` is `True`)
2. What is the value of `None or 0 or False or "done"`?
    - **A:** `"done"` (the first truthy value)
3. What is the value of `not ""`?
    - **A:** `True` (because empty string is falsy)

🎉 **Great job! Now you know how logical operators and truthy/falsy values work in Python!**

{{</ border >}}

{{< border type="question" >}}
**24**) Consider the below code

```python {linenos=table,linenostart=1}
if a:
  print('a')
if b:
  print('b')
elif c:
  print('c')
```

Select the possible output(s) of the given code, assuming any possible values for `a`, `b` and `c`.

```python {linenos=table,linenostart=1}
a
```

```python {linenos=table,linenostart=1}
b
```

```python {linenos=table,linenostart=1}
a
b
```

```python {linenos=table,linenostart=1}
a
c
```

```python {linenos=table,linenostart=1}
b
c
```

{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's analyze the code logic step by step! 🐍

```python
if a:
  print('a')
if b:
  print('b')
elif c:
  print('c')
```


### How does this code work?

- The **first `if`** checks `a`. If `a` is truthy, it prints `'a'`.
- The **second block** is an `if-elif`:
    - If `b` is truthy, it prints `'b'`.
    - If `b` is falsy but `c` is truthy, it prints `'c'`.

**Note:** The two `if` blocks are **independent**. The `elif` is tied only to the second `if`.

## Possible Output Scenarios

Let's consider all combinations for `a`, `b`, `c`:

### 1️⃣ Only `a` is truthy

- Output:

```
a
```

(if `b` is falsy, so no `b`/`c`)


### 2️⃣ Only `b` is truthy

- Output:

```
b
```

(if `a` is falsy, `b` is truthy, so only `b` prints)


### 3️⃣ Both `a` and `b` are truthy

- Output:

```
a
b
```

(`a` is truthy, prints `'a'`; `b` is truthy, prints `'b'`)


### 4️⃣ `a` is truthy, `b` is falsy, `c` is truthy

- Output:

```
a
c
```

(`a` is truthy, prints `'a'`; `b` is falsy, so check `c`; if `c` is truthy, prints `'c'`)


### 5️⃣ `b` is falsy, `c` is truthy, but `a` is falsy

- Output:

```
c
```

(But this is NOT in the provided options.)


### 6️⃣ Both `b` and `c` are truthy, `a` is falsy

- Output:

```
b
```

(If `b` is truthy, `elif c` is skipped, so `'c'` is not printed.)


### 7️⃣ Both `b` and `c` are truthy, `a` is truthy

- Output:

```
a
b
```

(Same as above, `'c'` is not printed.)


### 8️⃣ Both `a`, `b`, and `c` are falsy

- Output: (nothing is printed, not in options)


## Which outputs are possible from the provided options?

| Option | Possible? | Why? |
| :-- | :-- | :-- |
| `a` | ✅ | `a` truthy, `b` falsy, `c` falsy |
| `b` | ✅ | `a` falsy, `b` truthy |
| `a\nb` | ✅ | `a` truthy, `b` truthy |
| `a\nc` | ✅ | `a` truthy, `b` falsy, `c` truthy |
| `b\nc` | ❌ | If `b` is truthy, `elif c` is not checked, so `'c'` can't be printed with `'b'` |

### ✅ **Final Answers**

- `a`
- `b`
- `a\nb`
- `a\nc`

**`b\nc` is NOT possible.**

## 📝 Practice Questions

1. What is the output if `a = True`, `b = False`, `c = True`?
    - **A:**

```
a
c
```

2. What is the output if `a = False`, `b = True`, `c = True`?
    - **A:**

```
b
```

3. What is the output if `a = True`, `b = True`, `c = False`?
    - **A:**

```
a
b
```


🎉 **Great job! Now you know how independent and dependent conditionals work in Python!**


{{</ border >}}

{{< border type="question" >}}
**25**) Consider the below code

```python {linenos=table,linenostart=1}
if a:
  if b:
    if c:
      print('c')
    print('b')
  print('a')
```

Select the possible output(s) of the given code, assuming any possible values for `a`, `b` and `c`.

```python {linenos=table,linenostart=1}
a
```

```python {linenos=table,linenostart=1}
b
```

```python {linenos=table,linenostart=1}
a
b
```

```python {linenos=table,linenostart=1}
b
a
```

```python {linenos=table,linenostart=1}
c
b
```

```python {linenos=table,linenostart=1}
c
b
a
```

{{</ border >}}

{{< border type="tip" title="Solution" >}}
Let's analyze the code logic step by step! 🐍

```python
if a:
  if b:
    if c:
      print('c')
    print('b')
  print('a')
```


### How does this code execute?

- The outermost `if a:` must be **True** for any output to happen.
- Inside `if a`, there's `if b:`
    - Inside `if b`, there's `if c:`
        - If `c` is True, print `'c'`.
        - After checking `c`, always print `'b'` (if `b` is True).
    - After the `if b:` block (regardless of `b`), print `'a'`.


### Let's check all possible outputs from the options:

#### 1️⃣ `a`

- Possible if `a` is True, `b` is False.
- Only the last `print('a')` runs.


#### 2️⃣ `b`

- **Not possible by itself.**
- If `b` is True, `a` must also be True (since `if b` is nested inside `if a`), and `'a'` will always be printed after `'b'`.


#### 3️⃣ `a\nb`

- Possible if `a` is True, `b` is True, `c` is False.
- Prints `'b'` (since `b` is True, but `c` is False), then `'a'`.


#### 4️⃣ `b\na`

- Possible if `a` is True, `b` is True, `c` is False.
- `'b'` is printed, then `'a'` is printed.
- But the code prints `'b'` first, then `'a'`, so this is the correct order.


#### 5️⃣ `c\nb`

- **Not possible by itself.**
- If `'c'` is printed, then `'b'` is printed immediately after, but `'a'` will always be printed last if `a` is True.


#### 6️⃣ `c\nb\na`

- Possible if `a` is True, `b` is True, `c` is True.
- Prints `'c'`, then `'b'`, then `'a'`.


## ✅ **Possible Outputs from the Options**

| Output | Possible? | Why? |
| :-- | :-- | :-- |
| a | ✅ | `a=True, b=False` |
| b | ❌ | `'a'` always printed after `'b'` if `a` is True |
| a\nb | ❌ | `'b'` is printed before `'a'` |
| b\na | ✅ | `a=True, b=True, c=False` |
| c\nb | ❌ | `'a'` always printed after `'b'` |
| c\nb\na | ✅ | `a=True, b=True, c=True` |

### **Correct Answers:**

- `a`
- `b\na`
- `c\nb\na`


## 📝 Practice Questions

1. What is the output if `a=True, b=False, c=True`?
    - **A:** `a`
2. What is the output if `a=True, b=True, c=False`?
    - **A:**

```
b
a
```

3. What is the output if `a=True, b=True, c=True`?
    - **A:**

```
c
b
a
```


🎉 **Great job! Now you know how nested conditionals affect output order in Python!**

{{</ border >}}