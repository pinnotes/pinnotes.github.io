

## 🔄 Sum and Absolute Difference Alternately

Let's solve the problem step by step and make the code easy-to-follow with emojis, practice questions, and explanations! 🚀

### 📝 Full Python Code

```python
n = int(input())
for i in range(n):
    line = input().strip()
    # Split by comma and convert to integers
    a, b = map(int, line.split(','))
    if i % 2 == 0:
        # Odd-numbered pair (1-based): print sum
        print(a + b)
    else:
        # Even-numbered pair (1-based): print absolute difference
        print(abs(a - b))
```


### 🔍 Step-by-Step Explanation

1. **Read the number of pairs:**
    - The first input line is the integer `n`.
2. **Process each pair:**
    - For every line, read two comma-separated integers.
    - **Odd pair (1st, 3rd, 5th...):** Print their sum.
    - **Even pair (2nd, 4th, 6th...):** Print the absolute difference.
3. **Print the results one per line.**

### 🧪 Practice Questions (with Solutions!)

#### Practice 1

**Input:**

```
4
5,2
8,10
3,8
7,7
```

**Output:**

```
7
2
11
0
```

- 1st pair: 5 + 2 = 7
- 2nd pair: |8 - 10| = 2
- 3rd pair: 3 + 8 = 11
- 4th pair: |7 - 7| = 0


#### Practice 2

**Input:**

```
2
6,1
4,9
```

**Output:**

```
7
5
```


#### Practice 3

**Input:**

```
1
3,3
```

**Output:**

```
6
```


### ✨ Key Points

- Start with **sum** for the first pair, then **absolute difference** for the second, and keep alternating.
- **No trailing spaces** in the output.
- Split each input line with `split(',')` and cast numbers with `int()`.

Happy Coding! 🥳

