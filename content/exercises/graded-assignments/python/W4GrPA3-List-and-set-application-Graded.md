---
title: GrPA 3 List and set applicarion                 
label: Graded
weight: 1
subject: programming
subtitle: Week 4 GrPA
categories:
- Python Graded Assignment
---

---

## GrPA 3 List and set application 👨‍💻

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
min =  None

def find_min(items:list):
    ...

def odd_increment_even_decrement_no_modify(items) -> list:
    ...

def odd_square_even_double_modify(items:list) -> list:
    ...

def more_than_two_unique_vowels(sentence):
    ...

def sum_of_list_of_lists(lol):
    ...

def flatten(lol):
    ...

def all_common(strings):
    ...

def vocabulary(sentences):
    ...

```

## Python Code Solution ✅

```python {linenos=table,linenostart=1}
# ...existing code...

min =  None

def find_min(items:list):
    return min(items)

def odd_increment_even_decrement_no_modify(items) -> list:
    return [x+1 if x%2 else x-1 for x in items]

def odd_square_even_double_modify(items:list) -> list:
    for i in range(len(items)):
        if items[i] % 2:
            items[i] = items[i] ** 2
        else:
            items[i] = items[i] * 2
    # The function modifies in place, so no return needed

def more_than_two_unique_vowels(sentence):
    vowels = set('aeiouAEIOU')
    words = sentence.split(',')
    return {word for word in words if len(set(word) & vowels) > 2}

def sum_of_list_of_lists(lol):
    return sum(sum(sublist) for sublist in lol)

def flatten(lol):
    return [item for sublist in lol for item in sublist]

def all_common(strings):
    if not strings:
        return ''
    common = set(strings[0])
    for s in strings[1:]:
        common &= set(s)
    return ''.join(sorted(common))

def vocabulary(sentences):
    return set(word.lower() for sentence in sentences for word in sentence.split())

```