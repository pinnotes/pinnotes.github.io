---
title: GrPA 2 For Loop 
label: Graded
weight: 1
subject: programming
subtitle: Week 3 GrPA
categories:
- Python Graded Assignment
---

---


## GrPA 2 For Loop Graded 👨‍💻

{{< border >}}

{{< tabs items="QUESTION,TEST CASES,SOLUTION" >}}

{{< tab >}}

{{< details title="Instructions"  closed="true" >}}

{{< /details >}}

{{< /tab >}}

{{< /tabs >}}

{{< /border >}}

## Question ❓

Write a multi functional program that takes input task from standard input and does the corresponding taks accordingly. Note that the useage of for loop is not allowed in this exercise.

## Python Code 🐍

```python {linenos=table,linenostart=1}
# Note this prefix code is to verify that you are not using any for loops in this exercise. This won't affect any other functionality of the program.
with open(__file__) as f:
    content = f.read().split("# <eoi>")[2]
if "while " in content:
    print("You should not use while loop or the word while anywhere in this exercise")

# your code should not use more than 7 for loops 
# assuming one for loop per problem
if content.count("for ")>7:
    print("You should not use more than 7 for loops")

# This is the first line of the exercise
task = input()
# <eoi>

if task == 'factorial':
    n = int(input())
    result = 1
    i = 1
    while i <=n:
        result*=i
        i+=1

    print(result)
elif task == 'even_numbers':
    n = ...
    while i< n+1:
        print(i)
        i+=2

elif task == 'power_sequence':
    n = ...
    result = 1
    while i<n:
        print(result)
        result*=2
        i+=1

elif task == 'sum_not_divisible':
    ...

elif task == 'from_k':
    ...

elif task == 'string_iter':
    ...

elif task == 'list_iter':
    lst = eval(input()) # this will load the list from input

else:
    print("Invalid")

```

## Python Code Solution ✅

```python {linenos=table,linenostart=1}
if task == 'factorial':
    n = int(input())
    result = 1
    for i in range(1, n + 1):
        result *= i
    print(result)

elif task == 'even_numbers':
    n = int(input())
    for i in range(0, n + 1, 2):
        print(i)

elif task == 'power_sequence':
    n = int(input())
    result = 1
    for i in range(n):
        print(result)
        result *= 2

elif task == 'sum_not_divisible':
    n = int(input())
    total = 0
    for i in range(1, n):
        if i % 4 != 0 and i % 5 != 0:
            total += i
    print(total)

elif task == 'from_k':
    # Accept n and k either as "n k" in one line or as two lines
    inp = input().split()
    if len(inp) == 2:
        n, k = map(int, inp)
    else:
        n = int(inp[0])
        k = int(input())
    count = 0
    for num in range(k, 99, -1):
        print("Checking:", num)  # Debug
        s = str(num)
        if '5' not in s and '9' not in s and num % 2 == 1:
            print(s[::-1])
            count += 1
            if count == n:
                break

elif task == 'string_iter':
    s = input()
    prev = 1
    for ch in s:
        print(int(ch) * prev)
        prev = int(ch)

elif task == 'list_iter':
    lst = eval(input()) # this will load the list from input
    for element in lst:
        print(f"{element} - type: {type(element)}")

else:
    print("Invalid")
```