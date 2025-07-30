

## 📝 Function: Replace Middle Element with n Copies

Let's build a helpful Python function that replaces the middle element of a tuple with `n` copies of itself! 🧑‍💻✨

### 🚩 Function Definition

```python
def replace_middle_with_n_copies(t, n):
    # Find the middle index
    mid = len(t) // 2
    # Create a tuple with 'n' copies of the middle element
    middle_replacement = (t[mid],) * n
    # Build the new tuple: before + replacement + after
    return t[:mid] + middle_replacement + t[mid+1:]
```


### 🔍 Step-by-Step Explanation

1. **Find the Middle Index**
    - Since the tuple has odd length, the *middle* index is `len(t) // 2`.
2. **Create Replacement**
    - `(t[mid],) * n` makes `n` copies of the middle element as a tuple.
3. **Assemble the Result**
    - Use slicing: `t[:mid]` (elements before the middle),
`middle_replacement`,
and `t[mid+1:]` (elements after the middle).

### 🤔 Practice Questions

#### Practice 1

```python
t = (1, 2, 3, 4, 5)
n = 3
print(replace_middle_with_n_copies(t, n))  # What do you expect?
```

- Middle element: `3`
- Should be replaced by `(3, 3, 3)`
- **Result:** `(1, 2, 3, 3, 3, 4, 5)`


#### Practice 2

```python
t = ('a', 'b', 'c')
n = 2
print(replace_middle_with_n_copies(t, n))
```

- Middle element: `'b'`
- **Result:** `('a', 'b', 'b', 'c')`


#### Practice 3

```python
t = (10,)
n = 4
print(replace_middle_with_n_copies(t, n))
```

- Single element tuple: replace with 4 copies of itself.
- **Result:** `(10, 10, 10, 10)`


### ✨ Tips

- **Tuples are immutable:** You can’t change them; instead, create and return a new tuple.
- **Odd length guaranteed:** No need to check for even-length inputs.
- Works for any tuple type: numbers, strings, or mixed!

Happy Python-ing! 🐍🚀

