

## 📝 Function: `within_and_has_double_quotes`

Let's build a Python function to check if a string:

- **Starts and ends with double quotes** (`"`)
- **Has at least one double quote** somewhere inside (not including the first and last characters)


### 🧑‍💻 Function Implementation

```python
def within_and_has_double_quotes(s):
    # Check if string has at least 2 characters and starts/ends with a double quote
    if len(s) < 2 or s[0] != '"' or s[-1] != '"':
        return False
    # Check for another double quote in the interior (exclude first/last char)
    return '"' in s[1:-1]
```


### 🔍 Step-by-Step Explanation

1. **Check the boundary quotes:**
    - The string must be at least 2 characters.
    - The first character is `"` and the last character is `"`.
2. **Check for an internal quote:**
    - Use `s[1:-1]` to get the inner part of the string (excluding first and last characters).
    - Test if `"` exists in this interior slice.

### 🧪 Practice Questions

#### Practice 1

```python
print(within_and_has_double_quotes('"hello"'))        # _______
```

- Interior: `hello` (no quotes)
- Output: `False`


#### Practice 2

```python
print(within_and_has_double_quotes('"he"llo"'))       # _______
```

- Interior: `he"llo`
- Yes, has an interior double quote!
- Output: `True`


#### Practice 3

```python
print(within_and_has_double_quotes('""'))             # _______
```

- Interior: empty string `""`
- Output: `False`


#### Practice 4

```python
print(within_and_has_double_quotes('"a"b"c"'))        # _______
```

- Interior: `a"b"c`
- Yes, contains double quotes inside!
- Output: `True`


#### Practice 5

```python
print(within_and_has_double_quotes('"no inner quote')) # _______
```

- No ending double quote.
- Output: `False`


### ✅ Key Points

- Checks **boundaries** (`"` at both ends)
- Looks **inside** (middle of string) for at least one more double quote
- Returns `True` *only* if both conditions are met

Happy Coding! 🚀

