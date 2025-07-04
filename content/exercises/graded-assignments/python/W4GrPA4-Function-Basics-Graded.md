---
title: GrPA 4 Function Basics                      
label: Graded
weight: 1
subject: programming
subtitle: Week 4 GrPA
categories:
- Python Graded Assignment
---

---

## GrPA 4 Function Basics 👨‍💻

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
def swap_halves(items):
    ...

def swap_at_index(items,k):
    ...

def rotate_k(items,k=1):
    ...

def first_and_last_index(items,elem):
    ...

def reverse_first_and_last_halves(items):
    ...
```

## Python Code Solution ✅

```python {linenos=table,linenostart=1}
def swap_halves(items):
    mid = len(items) // 2
    return items[mid:] + items[:mid]

def swap_at_index(items, k):
    return items[k+1:] + items[:k+1]

def rotate_k(items, k=1):
    n = len(items)
    k = k % n
    return items[-k:] + items[:-k]

def first_and_last_index(items, elem):
    return (items.index(elem), len(items) - 1 - items[::-1].index(elem))

def reverse_first_and_last_halves(items):
    n = len(items)
    mid = n // 2
    items[:mid] = items[:mid][::-1]
    items[mid:] = items[mid:][::-1]

```