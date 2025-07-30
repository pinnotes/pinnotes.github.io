

## 🧮 Function: `is_positive_odd_or_negative_even`

Let's build a Python function that checks if a number is either a **positive odd** or a **negative even**. 🎯

### 🚩 Function Definition

```python
def is_positive_odd_or_negative_even(n):
    # Check for positive odd OR negative even
    return (n > 0 and n % 2 == 1) or (n < 0 and n % 2 == 0)
```


### 📝 Step-by-Step Explanation

1. **Positive Odd Number:**
    - Condition: `n > 0 and n % 2 == 1`
    - *Checks if the number is positive AND odd.*
2. **Negative Even Number:**
    - Condition: `n < 0 and n % 2 == 0`
    - *Checks if the number is negative AND even.*
3. **Logical OR:**
    - The function returns `True` if any one of the above conditions is met.

### 🧪 Practice Questions

#### Practice 1

```python
print(is_positive_odd_or_negative_even(7))   # _______
```

- 7 is **positive** and **odd**.
- Output: `True`


#### Practice 2

```python
print(is_positive_odd_or_negative_even(-4))  # _______
```

- -4 is **negative** and **even**.
- Output: `True`


#### Practice 3

```python
print(is_positive_odd_or_negative_even(-3))  # _______
```

- -3 is **negative** and **odd**.
- Output: `False`


#### Practice 4

```python
print(is_positive_odd_or_negative_even(8))   # _______
```

- 8 is **positive** and **even**.
- Output: `False`


#### Practice 5

```python
print(is_positive_odd_or_negative_even(0))   # _______
```

- 0 is neither positive nor negative (and it's even).
- Output: `False`


### ✨ Key Points

- **Odd number:** Remainder when divided by 2 is 1 (`n % 2 == 1`).
- **Even number:** Remainder when divided by 2 is 0 (`n % 2 == 0`).
- **Positive Odd or Negative Even:** Only one of these is needed for `True`.
- **Zero case:** 0 is not positive or negative, so always returns `False`.

Happy Coding! 🚀

