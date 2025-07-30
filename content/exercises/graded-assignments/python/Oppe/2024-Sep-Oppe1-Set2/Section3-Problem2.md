

## ✨ Print "X" Pattern Program

Let’s write a Python program that prints an "X" shaped pattern using backslashes (`\`), forward slashes (`/`), and a lowercase `x` in the center! 😃

### 📋 Problem Description

- **Input:** An integer `n` (`n >= 0`)
- **Output:** An "X" shape with a center `"x"` and `n` identical rows above and below, built with slashes.
    - No extra spaces to the right of the pattern.


### 🧑‍💻 Full Python Code

```python
n = int(input())

# Print the top part
for i in range(n):
    # i spaces, then '\', then (2*n - 2*i - 1) spaces, then '/'
    left_spaces = ' ' * i
    middle_spaces = ' ' * (2 * n - 2 * i - 1)
    print(left_spaces + '\\' + middle_spaces + '/')

# Print the central x
print(' ' * n + 'x')

# Print the bottom part (mirror of above)
for i in range(n-1, -1, -1):
    left_spaces = ' ' * i
    middle_spaces = ' ' * (2 * n - 2 * i - 1)
    print(left_spaces + '/' + middle_spaces + '\\')
```


### 🔍 Step-by-Step Explanation

1. **Top Rows:**
    - For each row `i` from `0` to `n-1`:
        - Print `i` spaces.
        - Print a backslash (`\`).
        - Print `(2*n - 2*i - 1)` spaces (between slashes).
        - Print a forward slash (`/`).
2. **Central Row:**
    - Print `n` spaces, then the character `'x'`.
3. **Bottom Rows:**
    - Repeat in reverse for `i` from `n-1` to `0`:
        - Print `i` spaces.
        - Print a forward slash (`/`).
        - Print `(2*n - 2*i - 1)` spaces.
        - Print a backslash (`\`).
4. **No trailing spaces** are added to the right of the pattern.

### 🧪 Practice Examples

#### Example 1

**Input:**

```
2
```

**Output:**

```
\   /
 \ /
  x
 / \
/   \
```


#### Example 2

**Input:**

```
3
```

**Output:**

```
\     /
 \   /
  \ /
   x
  / \
 /   \
/     \
```


#### Example 3

**Input:**

```
0
```

**Output:**

```
x
```


### ✨ Tips

- Use `'\\'` for a literal backslash in Python strings!
- No additional spaces to the right of any line.
- The size of the "X" will be `2*n + 1` lines in total.

Happy Coding! 🚀
Try changing `n` to see different sizes of the "X" pattern!

