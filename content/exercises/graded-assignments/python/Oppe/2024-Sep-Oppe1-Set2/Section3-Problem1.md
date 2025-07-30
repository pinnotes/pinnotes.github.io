

## 🏃‍♂️ Matrix Walk Function

Let's design a Python function that follows three special matrix paths — "L", "Z", and "O" shapes — and collects the matrix elements accordingly! 🚀

### 🧑‍💻 Function Definition

```python
def matrix_walk(matrix, path):
    n = len(matrix)
    result = []
    if path == "L":
        # Down the first column
        for i in range(n):
            result.append(matrix[i][0])
        # Across the bottom row, excluding first element
        for j in range(1, n):
            result.append(matrix[n-1][j])
        return result

    elif path == "Z":
        # Top row
        for j in range(n):
            result.append(matrix[0][j])
        # Diagonal except first and last row
        for i in range(1, n-1):
            result.append(matrix[i][n-i-1])
        # Bottom row
        for j in range(n):
            result.append(matrix[n-1][j])
        return result

    elif path == "O":
        # Top row
        for j in range(n):
            result.append(matrix[0][j])
        # Right column (excluding top and bottom)
        for i in range(1, n-1):
            result.append(matrix[i][n-1])
        # Bottom row (reverse, excluding last element)
        for j in range(n-1, -1, -1):
            result.append(matrix[n-1][j])
        # Left column (reverse, excluding top and bottom)
        for i in range(n-2, 0, -1):
            result.append(matrix[i][0])
        return result

    else:
        return []
```


### 🔍 Step-by-Step Explanation

#### 1. **L-Shape ("L")**

- Walk **down** the first column (leftmost).
- Then walk **right** along the **bottom row** (skipping the already-added first element).


#### 2. **Z-Shape ("Z")**

- Walk **across the top row** (left to right).
- Walk **diagonally** from the top-right to bottom-left, excluding corners.
- Walk **across the bottom row** (left to right).


#### 3. **O-Shape ("O")**

- Walk **around the outside** (clockwise):
    - Top row (left to right),
    - Right column (top to bottom, skipping corners),
    - Bottom row (right to left),
    - Left column (bottom to top, skipping corners).


### 🧪 Practice Questions with Solutions

#### Example Matrix

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
```


#### Practice 1: L-Shape

```python
print(matrix_walk(matrix, "L"))
# Output: [1, 4, 7, 8, 9]
```


#### Practice 2: Z-Shape

```python
print(matrix_walk(matrix, "Z"))
# Output: [1, 2, 3, 5, 7, 8, 9]
```


#### Practice 3: O-Shape

```python
print(matrix_walk(matrix, "O"))
# Output: [1, 2, 3, 6, 9, 8, 7, 4]
```


### ✨ Key Points

- The function traverses only as per the specified path — "L", "Z", or "O".
- For unknown paths, returns an empty list.
- Works for any square matrix of size 1 or more.

Happy Matrix Walking! 🟦🟩🟨🟥

## 🏃‍♂️ Matrix Walking Function: `walk_matrix`

Let's build a fun Python function that returns the path through a square matrix according to the shapes `"L"`, `"O"`, or `"Z"`! 🚦

### 🧑‍💻 Full Function Implementation

```python
def walk_matrix(M, shape):
    """
    Walk along the matrix M according to the specified shape and return the path.

    Args:
        M (list of lists): The square matrix.
        shape (str): Path shape, one of "L", "O", or "Z".

    Returns:
        list: Path along the matrix according to the shape.
    """
    n = len(M)
    result = []

    if shape == "L":
        # Down the left column
        for i in range(n):
            result.append(M[i][0])
        # Across the bottom row (excluding first, already included)
        for j in range(1, n):
            result.append(M[n-1][j])
        return result

    elif shape == "Z":
        # Top row
        for j in range(n):
            result.append(M[0][j])
        # Diagonal (excluding first and last rows)
        for i in range(1, n-1):
            result.append(M[i][n-i-1])
        # Bottom row
        for j in range(n):
            result.append(M[n-1][j])
        return result

    elif shape == "O":
        # Top row
        for j in range(n):
            result.append(M[0][j])
        # Right column (excluding top and bottom)
        for i in range(1, n-1):
            result.append(M[i][n-1])
        # Bottom row (right to left)
        for j in range(n-1, -1, -1):
            result.append(M[n-1][j])
        # Left column (bottom to top, excluding corners)
        for i in range(n-2, 0, -1):
            result.append(M[i][0])
        return result

    else:
        return []
```


### 🔍 Step-by-Step Explanation

- **L-Shape (`"L"`):**
    - Move **down** along the first column.
    - Then **right** across the bottom row (don't repeat the corner).
- **Z-Shape (`"Z"`):**
    - Go **right** across the top row.
    - Then move **diagonally** from top-right to bottom-left (middle elements only).
    - Finish **right** across the bottom row.
- **O-Shape (`"O"`):**
    - Go **right** across the top row.
    - Down **rightmost** column (skip corners).
    - **Left** across the bottom row.
    - Up the **leftmost** column (skip corners).


### 🧪 Practice Questions \& Solutions

#### Example Matrix

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
```


#### Practice 1: L-Shape

```python
print(walk_matrix(matrix, "L"))  # Output: [1, 4, 7, 8, 9]
```


#### Practice 2: Z-Shape

```python
print(walk_matrix(matrix, "Z"))  # Output: [1, 2, 3, 5, 7, 8, 9]
```


#### Practice 3: O-Shape

```python
print(walk_matrix(matrix, "O"))  # Output: [1, 2, 3, 6, 9, 8, 7, 4]
```


### ✨ Key Points

- The function works for **any square matrix** (size `n x n`).
- If an unknown shape is given, it returns an empty list.
- Easy to extend or customize for other fun patterns!

Happy coding and enjoy exploring matrices! 🎉

