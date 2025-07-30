

## 🔢 Function: Count Positive Integers (Ignore None)

Let’s build an easy-to-use Python function! ✨

### 🚩 Function Definition

```python
def count_positive_integers(lst):
    return sum(1 for x in lst if x is not None and isinstance(x, int) and x > 0)
```


### 📝 Step-by-Step Explanation

1. **Iterate through each element `x` in the list.**
2. **Ignore `None` values** (`x is not None`).
3. **Check if the value is an integer** (`isinstance(x, int)`).
4. **Count only if the integer is positive** (`x > 0`, so zero is ignored).
5. **Sum up the count** (`sum(1 for ...)`).

### 🧪 Practice Questions

#### Practice 1

```python
lst = [4, -3, None, 7, 0, None, 10]
print(count_positive_integers(lst))  # _______
```

**Answer:** `3`
(*Counts 4, 7, 10*)

#### Practice 2

```python
lst = [None, None, -50, 0, 2]
print(count_positive_integers(lst))  # _______
```

**Answer:** `1`
(*Only 2 is positive*)

#### Practice 3

```python
lst = [None, 0, -1, None]
print(count_positive_integers(lst))  # _______
```

**Answer:** `0`
(*No positive integers*)

### ✨ Key Points

- **Ignores all `None` values.**
- **Does not count zeros** or negative numbers.
- **Works for any mixed list of integers and `None`.**

Happy Coding! 🚀


## 🔢 Function: `count_positive_ignore_none`

Let's build a Python function that counts the number of positive integers in a list, **ignoring `None` values and zeros**. ✨

### 🧑‍💻 Function Implementation

```python
def count_positive_ignore_none(nums: list):
    '''
    Count the number of positive integers in the list, ignoring `None` values and zeros.

    Args:
        nums (list): A list of numbers, possibly containing `None` values.

    Returns:
        int: The count of positive integers in the list.
    '''
    return sum(1 for x in nums if x is not None and isinstance(x, int) and x > 0)
```


### 📝 Step-by-Step Explanation

- **Iterate** through each item (`x`) in `nums`.
- **Ignore** if `x` is `None`.
- **Check** if `x` is an integer using `isinstance(x, int)`.
- **Count** only if `x` is greater than zero (`x > 0`)—this means strictly positive.
- **Sum** up all such valid items to get the final count.


### 🧪 Practice Questions

#### Practice 1

```python
lst = [1, -2, 3, 0, None, 4]
print(count_positive_ignore_none(lst))  # What is the result?
```

**Answer:** `3`
(*Counts: 1, 3, 4*)

#### Practice 2

```python
lst = [None, 0, -1, 2, None]
print(count_positive_ignore_none(lst))  # What is the result?
```

**Answer:** `1`
(*Only 2 is positive*)

#### Practice 3

```python
lst = [None, None, 0, -10]
print(count_positive_ignore_none(lst))  # What is the result?
```

**Answer:** `0`
(*No positive integers*)

#### Practice 4

```python
lst = [10, None, 5, 0, 6, -5]
print(count_positive_ignore_none(lst))  # What is the result?
```

**Answer:** `3`
(*Counts: 10, 5, 6*)

### ✨ Key Points

- **None values and zeros are ignored**.
- **Only strictly positive integers are counted**.
- Works for lists with mixed types if you only want integers.

Happy Coding! 🚀

