

# Check if a Number is Divisible by Exactly One of the Given Numbers

Write a function div_by_exactly_one that takes three integers num, a, and b. The function should return True if num is divisible by exactly one of the numbers a or b, and False otherwise.
NOTE: This is a function type question, you don't have to take input or print the output, just have to complete the required function definition.

Here's the function definition as required:

```python
def div_by_exactly_one(num, a, b):
    # Check divisibility by a and b
    is_div_by_a = (num % a == 0)
    is_div_by_b = (num % b == 0)
    # Return True if exactly one is True (XOR)
    return is_div_by_a ^ is_div_by_b
```

**Explanation:**

- `is_div_by_a` is `True` if `num` is divisible by `a`.
- `is_div_by_b` is `True` if `num` is divisible by `b`.
- The `^` operator is logical XOR; it returns `True` if and only if one (and only one) of the operands is `True`.
- This meets the requirement: "exactly one of the numbers a or b".

