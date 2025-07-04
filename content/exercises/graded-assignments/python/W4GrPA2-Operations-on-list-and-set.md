---
title: GrPA 2 Operations on list and set                  
label: Graded
weight: 1
subject: programming
subtitle: Week 4 GrPA
categories:
- Python Graded Assignment
---

---

## GrPA 2 Operations on list and set 👨‍💻

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
# Note this prefix code is to verify that you are not using any for loops in this exercise. This won't affect any other functionality of the program.
with open(__file__) as f:
    content = f.read().split("# <noloop>")[2]
if "for " in content or "while " in content:
    print("You should not use for loop, while loop or the word for and while anywhere in this exercise")

# note that apart from the print statements inside the functions, the evaluator will also print what is returned by the function at last
# <noloop>

def list_mutating_operations(items:list, item1, item2):
    # sort the `items` inplace
    ...
    print("sorted:",items)

    # add item1 to the `items` at the end
    ...
    print("append:",items)

    # add item2 at index 3
    ...
    print("insert:",items)

    # extend `items` with the first three elements in `items`
    ...
    print("extend:", items)

    # pop the fifth element and store it in variable `popped_item`
    ...
    print("pop:",items)

    # remove first occurance of `item2` from the list
    ...
    print("remove:",items)

    # make the element at index 4 None
    ...
    print("modify_index:",items)

    # make the even indices None
    ...
    print("modify_slice:",items)

    # delete the third last element
    ...
    print("delete_index:",items)

    # delete the even indices
    ...
    print("delete_slice:",items)

    return items, popped_item 

def list_non_mutating_operations(items:list, item1, item2):

    # print the sorted version of items
    print("sorted:",...)

    # print a lsit with item1 appended to the `items` at the end
    print("append:",...)

    # print a list with item2 added to items at index 3
    print("insert:",...)

    # print a list with the first three elements in `items` added to the end of the `items` again
    print("extend:", ...)

    #  print a list with the fifth element from `items` removed
    print("pop:",...)

    # print a list with first occurance of `item2` removed from `items` 

    print("remove:",...) # hint: you may want to use index

    # print a list with the fourth element of `items` changed to None
    print("modify_index:",...)

    # print a list with the even indices changed to None

    print("modify_slice:",...)

    # print a list with the even indices removed
    print("delete_slice:",...)

    return items

def do_set_operation(set1, set2, set3, item1, item2):
    # add item1 to set1
    ...
    print(sorted(set1))
    # remove item2 from set1. What if item2 is not in set1?
    ...
    print(sorted(set1))

    # add elements from set2 to set1
    ...
    print(sorted(set1))

    # remove all elements from set1 that are in set3
    ...
    print(sorted(set1))

    # print the common elements in both set2 and set3 as a sorted list.
    print(...)

    # print all unique elements present in set1, set2 an set3 as a sorted list
    print(...)

    # print all unique elements that are in set2 but not in set3 as a sorted list
    print(...)

    # print all the non common elements from both set2 and set3
    print(...)

    return set1,sorted(set1),sorted(set2),sorted(set3)

```

## Python Code Solution ✅

```python {linenos=table,linenostart=1}

# ...existing code...

def list_mutating_operations(items:list, item1, item2):
    # sort the `items` inplace
    items.sort()
    print("sorted:",items)

    # add item1 to the `items` at the end
    items.append(item1)
    print("append:",items)

    # add item2 at index 3
    items.insert(3, item2)
    print("insert:",items)

    # extend `items` with the first three elements in `items`
    items.extend(items[:3])
    print("extend:", items)

    # pop the fifth element and store it in variable `popped_item`
    popped_item = items.pop(4)
    print("pop:",items)

    # remove first occurance of `item2` from the list
    if item2 in items:
        items.remove(item2)
    print("remove:",items)

    # make the element at index 4 None
    if len(items) > 4:
        items[4] = None
    print("modify_index:",items)

    # make the even indices None
    items[::2] = [None] * len(items[::2])
    print("modify_slice:",items)

    # delete the third last element
    if len(items) >= 3:
        del items[-3]
    print("delete_index:",items)

    # delete the even indices
    del items[::2]
    print("delete_slice:",items)

    return items, popped_item 

def list_non_mutating_operations(items:list, item1, item2):

    # print the sorted version of items
    print("sorted:", sorted(items))

    # print a list with item1 appended to the `items` at the end
    print("append:", items + [item1])

    # print a list with item2 added to items at index 3
    temp = items[:]
    temp2 = temp[:3] + [item2] + temp[3:]
    print("insert:", temp2)

    # print a list with the first three elements in `items` added to the end of the `items` again
    print("extend:", items + items[:3])

    #  print a list with the fifth element from `items` removed
    if len(items) > 4:
        temp3 = items[:4] + items[5:]
    else:
        temp3 = items[:]
    print("pop:", temp3)

    # print a list with first occurance of `item2` removed from `items` 
    if item2 in items:
        idx = items.index(item2)
        temp4 = items[:idx] + items[idx+1:]
    else:
        temp4 = items[:]
    print("remove:", temp4) # hint: you may want to use index

    # print a list with the fourth element of `items` changed to None
    temp5 = items[:]
    if len(temp5) > 3:
        temp5[3] = None
    print("modify_index:", temp5)

    # print a list with the even indices changed to None
    temp6 = items[:]
    temp6[::2] = [None] * len(temp6[::2])
    print("modify_slice:", temp6)

    # print a list with the even indices removed
    temp7 = items[1::2]
    print("delete_slice:", temp7)

    return items

def do_set_operation(set1, set2, set3, item1, item2):
    # add item1 to set1
    set1.add(item1)
    print(sorted(set1))
    # remove item2 from set1. What if item2 is not in set1?
    set1.discard(item2)
    print(sorted(set1))

    # add elements from set2 to set1
    set1.update(set2)
    print(sorted(set1))

    # remove all elements from set1 that are in set3
    set1.difference_update(set3)
    print(sorted(set1))

    # print the common elements in both set2 and set3 as a sorted list.
    print(sorted(set2 & set3))

    # print all unique elements present in set1, set2 an set3 as a sorted list
    print(sorted(set1 | set2 | set3))

    # print all unique elements that are in set2 but not in set3 as a sorted list
    print(sorted(set2 - set3))

    # print all the non common elements from both set2 and set3
    print(sorted(set2 ^ set3))

    return set1,sorted(set1),sorted(set2),sorted(set3)
```