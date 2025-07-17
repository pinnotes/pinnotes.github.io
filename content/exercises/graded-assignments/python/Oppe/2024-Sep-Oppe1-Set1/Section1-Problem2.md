---
title: is_odd_length_palindrome
subtitle: Section 1 | Problem 2
description: Checks if the input string is a palindrome with an _odd_ length.
categories: OOPE Exam
---

---

## 📝 Function: `is_odd_length_palindrome`

Let's solve your problem step by step!

### 🚩 What does the function do?

- **Checks if the input string is a palindrome with an _odd_ length.**
    - *Palindrome*: reads the same forwards and backwards (e.g., `'madam'`, `'radar'`).


### 🧑‍💻 How Would the Function Look?

```python
def is_odd_length_palindrome(s):
    # First, check if the length of s is odd
    if len(s) % 2 == 0:
        return False
    # Next, check if s is a palindrome
    return s == s[::-1]
```


### 🔍 Step by Step Explanation

1. **Check Length**:
    - Use `len(s) % 2 == 0` to see if the string has even length. If *yes*, immediately return `False`.
2. **Check Palindrome**:
    - Use `s == s[::-1]` to check if the string looks the same backwards.

### 🤔 Example Practice Questions

#### 1. Is `'racecar'` an odd-length palindrome?

- Length of `'racecar'` = 7 (odd).
- `'racecar'[::-1]` = `'racecar'` (it matches!).
- **Answer:** `True`


#### 2. Is `'abba'` an odd-length palindrome?

- Length = 4 (even).
- Even though `'abba'` is a palindrome, the length isn't odd.
- **Answer:** `False`


#### 3. Is `'hello'` an odd-length palindrome?

- Length = 5 (odd).
- `'hello'[::-1]` = `'olleh'` (not a palindrome).
- **Answer:** `False`


### 🧪 Practice: Try Out Yourself!

Fill in the blanks and check your answer:

```python
# Practice 1
print(is_odd_length_palindrome('level'))  # _______

# Practice 2
print(is_odd_length_palindrome('noon'))   # _______

# Practice 3
print(is_odd_length_palindrome('rotor'))  # _______
```


### ✅ Solutions

```python
# Practice 1
print(is_odd_length_palindrome('level'))  # True

# Practice 2
print(is_odd_length_palindrome('noon'))   # False

# Practice 3
print(is_odd_length_palindrome('rotor'))  # True
```


### ✨ Summary

- **String is palindrome:** Same forward and backward.
- **Odd length:** Length is not divisible by 2.
- **Function returns `True` only if **both** conditions are met!**

Happy Coding! 🎉

