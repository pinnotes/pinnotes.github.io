---
title: GrPA 5 Comprehensions                   
label: Graded
weight: 1
subject: programming
subtitle: Week 4 GrPA
categories:
- Python Graded Assignment
---

---

## GrPA 5 Comprehensions 👨‍💻

{{< border >}}

{{< tabs items="QUESTION,TEST CASES,SOLUTION" >}}

{{< tab >}}

{{< details title="Instructions"  closed="true" >}}

{{< /details >}}

{{< /tab >}}

{{< /tabs >}}

{{< /border >}}

## Question ❓

Implement the below functions as per the docstrings.

## Python Code 🐍

```python {linenos=table,linenostart=1}
def sum_of_squares(numbers):
    ...

def total_cost(cart):
    ...

def abbreviation(sentence):
    ...

def palindromes(words):
    ...

def all_chars_from_big_words(sentence):
    ...

def flatten(lol):
    ...

def unflatten(items, n_rows):
    ...

def make_identity_matrix(m):
    ...

def make_lower_triangular_matrix(m):
    ...
```

## Python Code Solution ✅

```python {linenos=table,linenostart=1}
def sum_of_squares(numbers):
    return sum([x**2 for x in numbers])

def total_cost(cart):
    return sum([qty * price for qty, price in cart])

def abbreviation(sentence):
    return ''.join([word[0].upper() for word in sentence.split()]) + '.'

def palindromes(words):
    return [w for w in words if w == w[::-1]]

def all_chars_from_big_words(sentence):
    return set(''.join([w.lower() for w in sentence.split() if len(w) > 5]))

def flatten(lol):
    return [item for sublist in lol for item in sublist]

def unflatten(items, n_rows):
    n_cols = len(items) // n_rows
    return [items[i*n_cols:(i+1)*n_cols] for i in range(n_rows)]

def make_identity_matrix(m):
    return [[1 if i == j else 0 for j in range(m)] for i in range(m)]

def make_lower_triangular_matrix(m):
    return [[i+1 if j <= i else 0 for j in range(m)] for i in range(m)]
```