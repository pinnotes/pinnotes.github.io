---
title: GrPA 1 While Loop
label: Graded
weight: 1
subject: programming
subtitle: Week 3 GrPA
categories:
- Python Graded Assignment
---

---


## GrPA 1 While Loop Graded 👨‍💻

{{< border >}}

{{< tabs items="QUESTION,TEST CASES,SOLUTION" >}}

{{< tab >}}

{{< details title="Instructions"  closed="true" >}}

{{< /details >}}

{{< /tab >}}

{{< /tabs >}}

{{< /border >}}

## Question ❓

Implement different parts of a multi-functional program based on an initial input value. Each part of the program will handle various tasks related to accumulation, filtering, mapping, and combinations of these operations. None of the tasks should use explicit loops for definite repetitions, and the program should handle indefinite inputs gracefully.

## Python Code 🐍

```python {linenos=table,linenostart=1}
# Note this prefix code is to verify that you are not using any for loops in this exercise. This won't affect any other functionality of the program.
with open(__file__) as f:
    content = f.read().split("# <eoi>")[2]
if "for " in content:
    print("You should not use for loop or the word for anywhere in this exercise")

# This is the first line of the exercise
task = input()
# <eoi>

if task == "sum_until_0":
    total = 0
    n = int(input())
    while ...: # the terminal condition
        ... # add n to the total
        ... # take the next n form the input
    print(total)

elif task == "total_price":
    total_price = 0
    while ...: # repeat forever since we are breaking inside
        line = input()
        if ...: # The terminal condition
            break
        quantity, price = line.split() # split uses space by default
        quantity, price = ... # convert to ints
        ... # accumulate the total price
    print(total_price)
elif task == "only_ed_or_ing":
    ...

elif task == "reverse_sum_palindrome":
    ...

elif task == "double_string":
    ...

elif task == "odd_char":
    ...

elif task == "only_even_squares":
    ...

elif task == "only_odd_lines":
    ...

```

## Python Code Solution 🧠

```python {linenos=table,linenostart=1}
# ...existing code...

if task == "sum_until_0":
    total = 0
    n = int(input())
    while n != 0:  # the terminal condition
        total += n  # add n to the total
        n = int(input())  # take the next n from the input
    print(total)

elif task == "total_price":
    total_price = 0
    while True:  # repeat forever since we are breaking inside
        line = input()
        if line == "END":  # The terminal condition
            break
        quantity, price = line.split()  # split uses space by default
        quantity, price = int(quantity), int(price)  # convert to ints
        total_price += quantity * price  # accumulate the total price
    print(total_price)

elif task == "only_ed_or_ing":
    s = input()
    while s.lower() != "stop":
        if s.lower().endswith("ed") or s.lower().endswith("ing"):
            print(s)
        s = input()

elif task == "reverse_sum_palindrome":
    n = input()
    while n != "-1":
        try:
            num = int(n)
            rev = int(str(num)[::-1])
            total = num + rev
            if str(total) == str(total)[::-1]:
                print(n)
        except:
            pass
        n = input()

elif task == "double_string":
    s = input()
    while s != "":
        print(s + s)
        s = input()

elif task == "odd_char":
    result = []
    while True:
        s = input()
        result.append(s[::2])
        if s.endswith("."):
            break
    print(" ".join(result))

elif task == "only_even_squares":
    s = input()
    while s != "NAN":
        try:
            n = int(s)
            if n % 2 == 0:
                print(n * n)
        except:
            pass
        s = input()

elif task == "only_odd_lines":
    idx = 1
    lines = []
    s = input()
    while s != "END":
        if idx % 2 == 1:
            lines.insert(0, s)
        idx += 1
        s = input()
    print("\n".join(lines))
```
