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

{{</ border >}}

{{< border type="question" >}}
19) What is the value of the expression `bool(False)`?

`True`

`False`

Raises Error
{{</ border >}}

{{< border type="tip" title="Solution" >}}

{{</ border >}}

{{< border type="question" >}}
20) What is the value of the expression `bool(1 and 2 and 0)`?

`True`

`False`

Raises Error
{{</ border >}}

{{< border type="tip" title="Solution" >}}

{{</ border >}}

{{< border type="question" >}}
21) What is the value of the expression `bool(0 or "2" and 0)`?

`True`

`False`

Raises Error
{{</ border >}}

{{< border type="tip" title="Solution" >}}

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

{{</ border >}}