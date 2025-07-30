
### 🔄 Swap and Reverse Lines Program in Python

Below is a Python program that reads multiple lines of input, swaps every two consecutive lines, and then reverses every odd-numbered line in the resulting output sequence. This meets the problem’s requirements exactly.

### 🛠️ Complete Code

```python
def main():
    n = int(input())
    lines = [input() for _ in range(n)]

    # Swap every two consecutive lines
    for i in range(0, n - 1, 2):
        lines[i], lines[i + 1] = lines[i + 1], lines[i]

    # Reverse every odd-numbered line in the output (1-based index)
    for i in range(n):
        if (i + 1) % 2 == 1:  # odd line number
            lines[i] = lines[i][::-1]

    # Print the transformed lines
    for line in lines:
        print(line)

if __name__ == "__main__":
    main()
```


### 📝 Explanation

- **Input Reading:**
Read the integer `n` for the number of lines, then read each line into a list.
- **Swapping Consecutive Lines:**
Iterate through the list in steps of two, swapping the pair at indices `i` and `i+1`.
- **Reversing Odd-Numbered Lines:**
After swapping, reverse every odd line (1st, 3rd, 5th, ...) by checking `(i+1) % 2 == 1`.
- **Output:**
Print each line after these transformations.


### 🌟 Example Run

**Input:**

```
5
apple
orange
pineapple
mango
kiwi
```

**Output:**

```
egnaro
apple
ognam
pineapple
iwik
```


### 🧩 Practice Questions

1. What will be the output for the input:

```
4
cat
dog
bird
fish
```

2. How does the program behave if the number of lines is odd or even?
3. Modify the program to also convert all even-numbered lines to uppercase after swapping.

### ✅ Solutions

1. For input above:

```
god
cat
hsif
bird
```

2. If `n` is odd, the last line remains unswapped but still reversed if odd-positioned. If even, all lines get swapped in pairs.
3. (Conceptual) Add after reversal:

```python
if (i + 1) % 2 == 0:
    lines[i] = lines[i].upper()
```


This program provides a simple yet powerful string manipulation following exactly the rules stated, useful for basic text processing tasks! 🐍✨

