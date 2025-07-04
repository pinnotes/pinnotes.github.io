---
title: Python Week 4
weight: 4
subtitle: Graded Assignment
slug: week-4-python-graded-assignment-iit-madras
categories:
- Python Graded Assignment
---

---

## Multiple Choice Questions 🧠

### 2. Python Code – Size of the List `rolls`

*(From Image 2)*

**Question:**
What is the size of the list `rolls` in the given code?

```python
import random

rolls = []
for i in range(100000):
    roll = random.randint(1, 6)
    rolls.append(roll)
```

**Step-by-step Solution:**

- The loop runs from 0 to 99,999 (that’s 100,000 iterations).
- In each iteration, one value is appended to `rolls`.

**Final Answer:**
**The size of the list `rolls` is 100,000.** 🔢

### 3. Python Code – What Does `some_var` Represent?

*(From Image 2)*

**Question:**
Given:

```python
some_var = count / len(rolls)
```

What does the variable `some_var` represent?

**Step-by-step Solution:**

- `count` counts how many elements in `rolls` are in the list `primes = [^1][^2]`.
- `len(rolls)` is the total number of elements (100,000).
- So, `some_var` is the fraction of numbers in `rolls` that are prime numbers (2, 3, or 5).

**Final Answer:**
**It represents the probability that a number chosen at random from the list `rolls` is a prime.** 🎲✅

### 4. Python Code – List `L` and `flag` Logic

*(From Image 3)*

**Question:**
If `flag` is `True` at the end of the code, which statements are always true?

```python
s = 0
for x in L:
    s += x

flag = False
y = -1
for x in L:
    if x * len(L) == s:
        flag = True
        y = x
        break
```

**Step-by-step Solution:**

- \$ s \$ is the sum of all elements in \$ L \$.
- For each \$ x \$ in \$ L \$, if \$ x \times len(L) = s \$, then \$ x = \frac{s}{len(L)} \$.
- So, \$ x \$ is the average (mean) of the list, and since all elements are distinct and positive integers, the mean is an element of the list only if the mean is an integer and present in \$ L \$.

**Final Answers:**

- \$ y \$ is an element in the list \$ L \$. ✅
- \$ y \$ is the average (arithmetic mean) of the numbers in the list. ✅


### 5. Python Code – When is `flag` True?

*(From Image 3)*

**Question:**
Assume \$ L \$ is the list of the first \$ n \$ positive integers (\$ n > 0 \$). Under what condition will `flag` be `True` at the end?

**Step-by-step Solution:**

- \$ s = 1 + 2 + ... + n = \frac{n(n+1)}{2} \$
- For some \$ x \$ in \$ L \$, \$ x \times n = s \implies x = \frac{s}{n} = \frac{n+1}{2} \$
- \$ x \$ must be an integer in \$ L \$, so \$ n+1 \$ must be even \$ \implies n \$ is odd.

**Final Answer:**
**`flag` will be True if and only if \$ n \$ is an odd integer.** 🟢

### 6. Python Code – What is the Output of the Code?

*(From Image 4)*

**Question:**
Given the code and \$ L =  \$, what is the output after execution?

**Step-by-step Solution:**

1. Initially, \$ S =  \$.
2. The outer loop runs \$ j \$ from 1 to 5.
3. For each \$ j \$, check if \$ L[j] < S \$. The first time this is true is at \$ j = 2 \$ (\$ L[^1] = 8 < S = 90 \$).
4. At this point:
    - \$ before_j = S[:2] =  \$
    - \$ new_j = [L[^1]] =  \$
    - \$ after_j = S[2:] = [] \$
    - So, \$ S =  +  + [] =  \$
    - Set flag to False and break.
5. Since flag is False, append \$ L[^3] = 47 \$ to \$ S \$: \$ S =  \$.

**Final Output:**
**** is the output. 🖨️

### **Q6: Grid of Integer Points – Python Representation**

**Question:**
You are given a grid of integer points in the plane: \$ P_{ij} = (i, j) \$, \$ 0 \leq i, j \leq 4 \$.
You want to represent this grid as a list of tuples called `points`, where each tuple is of the form `(x, y)`.
**Which code snippets correctly implement this? (MSQ)**

**Options:**
1.
```python     points = []     for x in range(0, 5):         for y in range(0, 5):             points.append(x, y)     ```
2.
```python     points = []     for x in range(0, 5):         for y in range(0, 5):             points.append([x, y])     ```
3.
```python     points = ()     for x in range(0, 5):         for y in range(0, 5):             points.append((x, y))     ```
4.
```python     points = []     for x in range(0, 5):         for y in range(0, 5):             points.append((x, y))     ```

**Answer \& Explanation:**

- **Option 1:** ❌ Incorrect. `append(x, y)` is not valid; `append` takes only one argument.
- **Option 2:** ❌ Incorrect. Appends a list `[x, y]` instead of a tuple `(x, y)`.
- **Option 3:** ❌ Incorrect. `points` is initialized as a tuple, which does not have an `append` method.
- **Option 4:** ✅ **Correct!** Appends a tuple to a list, as required.

**Final Answer:**
**Only Option 4 is correct.** ✅

### **Q7: List Comprehension Equivalence**

**Question:**
Given:

```python
L = [y - x for x in [1, 2, 3] for y in [3, 4, 5] if y > x]
```

**Which of the following codes are equivalent? (MSQ)**

**Options:**
1.
```python     L = []     for x in [1, 2, 3]:         for y in [3, 4, 5]:             if y > x:                 L.append(y - x)     ```
2.
```python     L = []     for y in [3, 4, 5]:         for x in [1, 2, 3]:             if y > x:                 L.append(y - x)     ```
3.
```python     L = []     for x in [1, 2, 3]:         for y in [3, 4, 5]:             if y > x:                 L += [y - x]     ```
4.
```python     L = []     for y in [3, 4, 5]:         for x in [1, 2, 3]:             if y > x:                 L += [y - x]     ```

**Answer \& Explanation:**

- The order of `for x in ... for y in ...` matters for list comprehensions.
- The original comprehension is: for each `x` in `[^1][^2][^3]`, then for each `y` in `[^3][^4][^5]`, if `y > x`, add `y-x`.
- Options 1 and 3 match the order and logic.
- Options 2 and 4 reverse the order, so the output list will be in a different order.

**Final Answer:**
**Options 1 and 3 are equivalent to the given comprehension.** ✅✅

### **Q8: Find All Integer Triplets (x, y, z)**

**Question:**
Find all integer triplets $(x, y, z)$ such that $x^2 + y^2 = z^2$ and $0 < x < y < z < 100$.
**Which code snippets correctly create such a list called `triplets`? (MSQ)**

**Options:**
1.
```python     triplets = [(x, y, z) for x in range(1, 100)                           for y in range(x + 1, 100)                           for z in range(y + 1, 100)                           if x ** 2 + y ** 2 == z ** 2]     ```
2.
```python     triplets = []     for x in range(1, 100):         for y in range(x + 1, 100):             for z in range(y + 1, 100):                 if x ** 2 + y ** 2 == z ** 2:                     triplets.append((x, y, z))     ```
3.
```python     triplets = [(x, y, z) for x in range(1, 100)                           for y in range(1, 100)                           for z in range(1, 100)                           if x ** 2 + y ** 2 == z ** 2 and x < y < z]     ```

**Answer \& Explanation:**

- Option 1: ✅ Correct. List comprehension, correct ranges.
- Option 2: ✅ Correct. Nested loops, correct logic.
- Option 3: ✅ Correct. Uses all ranges from 1 to 99, but the condition `x < y < z` ensures only valid triplets are included.

**Final Answer:**
**All three options are correct.** ✅✅✅

### **Q9: Filter Names Starting with a Capital Letter**

**Question:**
Given a list `L` of names, create a list `P` that contains only those names in `L` that begin with a capital letter.
**Which implementations are correct? (MSQ)**

**Options:**
1.
```python     P = [name for name in L if 'a' <= name[^0] <= 'z']     ```
2.
```python     P = [name for name in L if 'A' <= name[^0] <= 'Z']     ```
3.
```python     P = []     for name in L:         if 'A' <= name[^0] <= 'Z':             P.append(name)     ```

**Answer \& Explanation:**

- Option 1: ❌ Incorrect. This checks for lowercase letters.
- Option 2: ✅ Correct. This checks for uppercase letters.
- Option 3: ✅ Correct. This also checks for uppercase letters.

**Final Answer:**
**Options 2 and 3 are correct.** ✅✅

### **Q10. Filter strings without the letter 'e' from input (MSQ)**

**Question:**
Accept a sequence of comma-separated strings as input from the user and populate a list of strings that do **not** have the letter 'e' in them. Print this list as output to the console. Select all code snippets that achieve this.

**Options:**
1.
```python     P = input().split(',')     L = []     for word in P:         if 'e' not in word:             L.append(word)     print(L)     ```
2.
```python     L = [word for word in input().split(',') if 'e' not in word]     print(L)     ```
3.
```python     print([word for word in input().split(',') if 'e' not in word])     ```

**Answer:**
✅ **All three code snippets (1, 2, and 3) correctly achieve the required task.**

- Option 1 uses a loop and conditional append.
- Option 2 uses a list comprehension and then prints.
- Option 3 prints the list comprehension directly.


### **Q11. Which return statement is executed in minmax(x, x)?**

**Question:**
Given:

```python
def minmax(a, b):
    if a <= b:
        return a, b
    return b, a
```

If \$ x \$ is a real number, when `minmax(x, x)` is called, which return statement is executed?

**Options:**

- The return statement in line-3 which is inside the if-block.
- The return statement in line-4 which is outside the if-block.
- Both return statements are executed.
- Neither return statement is executed.

**Answer:**
✅ **The return statement in line-3 which is inside the if-block is executed.**

- Because \$ x \leq x \$ is always true, so the function returns from inside the if-block.


### **Q12. Select all correct implementations of unique(L) (MSQ)**

**Question:**
Select all correct implementations of a function `unique` that accepts a non-empty list `L` of integers and returns a list with only the first occurrence of each distinct element (removing duplicates, order preserved).

**Options:**
1.
```python     def unique(L):         L_uniq = []         for elem in L:             if elem not in L_uniq:                 L_uniq.append(elem)         return L_uniq     ```
2.
```python     def unique(L):         L_uniq = []         for elem in L:             if elem in L_uniq:                 L_uniq.append(elem)         return L_uniq     ```
3.
```python     def unique(L):         L_uniq = [L[^0]]         for i in range(1, len(L)):             if not (L[i] in L[:i]):                 L_uniq.append(L[i])         return L_uniq     ```
4.
```python     def unique(L):         L_uniq = []         for i in range(len(L)):             if not (L[i] in L[:i]):                 L_uniq.append(L[i])         return L_uniq     ```
5.
```python     def unique(L):         L_uniq = []         for i in range(len(L)):             if not (L[i] in L[i+1:]):                 L_uniq.append(L[i])         return L_uniq     ```

**Answer:**
✅ **Options 1, 3, and 4 are correct.**

- Option 1: Standard method, keeps first occurrence.
- Option 3: Starts with first element, then checks if not in previous.
- Option 4: Similar to 3, works for all indices.
- Option 2: Incorrect logic (appends duplicates).
- Option 5: Checks future elements, so it keeps last occurrence, not first.


### **Q13. Correct implementation of poly(L, x_0) (polynomial evaluation)**

**Question:**
Given a Python list of the coefficients of a polynomial \$ L = [a_0, a_1, a_2, ..., a_n] \$, write a function `poly` that accepts the list and a real number \$ x_0 \$ and returns the polynomial evaluated at \$ x_0 \$.

**Options:**
1.
```python     def poly(L, x_0):         n = len(L)         psum = 0         for i in range(n):             psum = psum + L[i] * (x_0 ** i)         return psum     ```
2.
```python     def poly(L, x_0):         psum = 0         n = len(L)         for i in range(1, n):             psum = psum + L[i] * (x_0 ** i)         return psum     ```
3.
```python     def poly(L, x_0):         psum = 0         n = len(L)         for i in range(n):             psum = psum + L[i] * (x_0 ** i)         return psum     ```
4.
```python     def poly(L, x_0):         psum = 0         n = len(L)         for i in range(n):             psum = psum + x_0 * (L[i] ** i)         return psum     ```

**Answer:**
✅ **Options 1 and 3 are correct.**

- Both correctly compute \$ a_0 + a_1 x_0 + a_2 x_0^2 + ... \$
- Option 2 skips \$ a_0 \$ (constant term), so it's incorrect.
- Option 4 uses the wrong formula.


### **Q14. Correct implementation of poly_zeros(L, a, b)**

**Question:**
Write a function `poly_zeros` that accepts the list of coefficients `L` and two integers `a` and `b`. It should return a list of all integer zeros of the polynomial in the range $[a, b]$, inclusive, in ascending order (no repeats).

**Options:**
1.
```python     def poly_zeros(L, a, b):         zeros = []         for x in range(a, b+1):             if poly(L, x) == 0:                 zeros.append(x)         return zeros     ```
2.
```python     def poly_zeros(L, a, b):         zeros = []         for x in range(a, b+1):             if poly(L, x) == 0:                 zeros.append(x)         return zeros     ```
3.
```python     def poly_zeros(L, a, b):         zeros = []         for x in range(a, b+1):             if poly(L, x) == 0:                 zeros.append(x)         return zeros     ```
4.
```python     def poly_zeros(L, a, b):         zeros = []         for x in range(a, b+1):             if poly(L, x) == 0:                 zeros.append(x)         return zeros     ```

**Answer:**
✅ **All four options are identical and correct.**

- They all check each integer \$ x \$ in $[a, b]$, and append \$ x \$ if it is a root.