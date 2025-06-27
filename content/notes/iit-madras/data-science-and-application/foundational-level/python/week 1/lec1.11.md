---
title: Introduction to Strings
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 11
---

Here's an introduction to strings in Python, designed to be easy to understand! 🥳

### What are Strings?

In Python, **strings are used to store and represent textual information** 📝. Think of them as a sequence (an ordered collection) of characters. Just like a list of items has an order, characters in a string maintain a left-to-right order.

For example, your name, a sentence, or even the content of a text file loaded into memory are all examples of strings. Python does not have a separate type for individual characters; instead, it treats single characters as one-character strings.

### How to Create Strings 🛠️

You can create strings in Python in several straightforward ways:

*   **Single Quotes**: You can enclose characters in single quotes, like `'Hello Python!'`.
*   **Double Quotes**: Double quotes work exactly the same way: `"Hello Python!"`. Most people use single quotes unless an apostrophe appears within the string.
*   **Triple Quotes**: For **multi-line strings** (strings that span across several lines) or for documentation strings (docstrings), you can use three consecutive single or double quotes, like `"""This is a multi-line string."""`. This is useful for embedding things like HTML or XML code directly in your Python script.

### Basic String Operations ✨

Python provides simple operators for common string tasks:

*   **Concatenation (`+`)**: You can join two or more strings together using the `+` operator. This creates a **new string** object by placing one string next to the other.
    *   `"Hello" + "World"` would give `"HelloWorld"`.
    *   **Important Note**: You cannot mix numbers and strings directly with `+`. If you try `"abc" + 9`, it will result in an error. You need to convert the number to a string first, like `"abc" + str(9)` which would give `"abc9"`.
*   **Repetition (`*`)**: You can repeat a string a certain number of times using the `*` operator.
    *   `"Spam!" * 3` would result in `"Spam!Spam!Spam!"`.
    *   This can be surprisingly handy, for example, to print a line of 80 dashes, you can simply use `'-' * 80`.
*   **Length (`len()`)**: The built-in `len()` function returns the number of characters in a string.
    *   `len("Python")` would return `6`.

### Accessing Characters (Indexing) 🎯

Strings are ordered, so you can access individual characters by their position, known as their **index**.

*   **Positive Indexing**: Indices start from `0` for the first character.
    *   If `S = "Python"`, then `S` would give `'P'`, `S` would give `'y'`, and so on.
*   **Negative Indexing**: You can also use negative indices to count from the end of the string.
    *   `S[-1]` would give `'n'` (the last character), `S[-2]` would give `'o'` (the second to last).
*   **Out of Range Error**: If you try to access an index that doesn't exist (e.g., `S` for a short string), Python will throw an `IndexError`.

### Extracting Parts of Strings (Slicing) ✂️

**Slicing** allows you to extract a **segment or a portion of a string**. It uses a similar bracket notation but with two indices separated by a colon: `[start:end]`.

*   The slice includes characters from the `start` index **up to, but not including**, the `end` index.
*   If you omit the `start` index, it defaults to `0` (the beginning of the string).
*   If you omit the `end` index, it defaults to the length of the string (the end of the string).
    *   If `S = "Sudarshan"`, then `S[0:5]` would give `"Sudar"`.
    *   `S[3:]` would give `"arshan"` (from index 3 to the end).
    *   `S[:5]` would give `"Sudar"` (from the beginning up to index 5).
    *   `S[:]` effectively creates a copy of the entire string.
*   **Third Index (Step Size)**: You can also include a third index to specify a "step size". For example, `S[::2]` would give every other character. `S[::-1]` is a common trick to reverse a string.

### Strings are Immutable 🧱

One fundamental property of strings in Python is that they are **immutable**. This means **you cannot change an existing string directly** once it has been created.

If you try to change a character using indexing, like `S = 'X'`, you will get a `TypeError`.

Instead, to "change" a string, you create a **new string** based on the original, using operations like concatenation or slicing, and then you can assign this new string back to a variable.
*   For example, to change `"Hello"` to `"Jello"`, you would do `'J' + "Hello"[1:]`, which creates `"Jello"`.

### Useful String Methods 🛠️ (Advanced but powerful!)

Python strings come with a powerful set of **built-in methods** (functions that belong to the string object) that perform common text-processing tasks. Here are a few examples:

*   `.upper()`: Converts all characters in the string to uppercase.
    *   `"hello".upper()` returns `"HELLO"`.
*   `.lower()`: Converts all characters in the string to lowercase.
    *   `"WORLD".lower()` returns `"world"`.
*   `.find(substring)`: Returns the **lowest index** where the substring is found, or `-1` if not found.
    *   `"banana".find("na")` returns `2`.
*   `.replace(old, new)`: Returns a **new string** where all occurrences of `old` are replaced with `new`.
    *   `"apple".replace("p", "x")` returns `"axxle"`.
*   `.startswith(prefix)` / `.endswith(suffix)`: Checks if the string starts or ends with a specified prefix/suffix, returning `True` or `False`.
*   `.strip()`: Removes leading and trailing whitespace characters (or specified characters) from the string.

### Formatted Printing (f-strings) 🎨

Python offers powerful ways to create strings dynamically by embedding variables or expressions directly into them. One of the most convenient ways in modern Python is using **f-strings** (formatted string literals).

You prefix the string literal with `f` or `F` and put expressions inside curly braces `{}` within the string:
*   `name = "Alice"`
*   `age = 30`
*   `print(f"Hello, {name}! You are {age} years old. 🎉")`
    *   Output: `Hello, Alice! You are 30 years old. 🎉`

You can also use the `.format()` method:
*   `"Hello, {}! You are {} years old.".format("Alice", 30)`

### Practice Questions 🧠

1.  **String Basics**:
    *   What would be the output of `print("Python" + " is " * 2 + "fun!")`?
    *   What is the length of the string `"Hello\tWorld"`? (Remember `\t` is a single tab character).
2.  **Indexing and Slicing**:
    *   Given `text = "Programming"`, what character does `text` represent?
    *   What substring would `text[-5:-2]` extract?
    *   How would you get the string `"gnimmargorP"` from `text` using slicing?
3.  **Immutability and Methods**:
    *   If `word = "example"`, can you change it to `"axample"` by doing `word = 'a'`? If not, how would you achieve this result by creating a new string?
    *   How would you check if the string `"apple"` contains the substring `"ple"`?

---

### Answers to Practice Questions ✅

1.  **String Basics**:
    *   Output: `"Python is is fun!"`.
        *   `" is " * 2` becomes `" is is "`.
        *   Then `"Python" + " is is " + "fun!"` concatenates to the final result.
    *   Length: `len("Hello\tWorld")` is **11**. The tab character `\t` counts as a single character.
2.  **Indexing and Slicing**:
    *   `text` represents the character **`'r'`** (P-0, r-1, o-2, g-3, r-4).
    *   `text[-5:-2]` would extract **`"mmi"`**. Negative indices count from the end:
        *   `P r o g r a m m i n g`
        *   `0 1 2 3 4 5 6 7 8 9 10` (Positive indices)
        *   `-11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1` (Negative indices)
        *   `-5` is `m`, `-4` is `m`, `-3` is `i`. Slicing stops *before* the end index, so `-2` (`n`) is excluded.
    *   To get `"gnimmargorP"`: `text[::-1]`. This uses a step of `-1` to reverse the string.
3.  **Immutability and Methods**:
    *   No, you **cannot** change `word = 'a'` directly because strings are **immutable**.
        *   You can achieve the result `"axample"` by creating a new string: `new_word = 'a' + word[1:]`.
    *   You would check if the string `"apple"` contains `"ple"` using the `in` operator: `'ple' in 'apple'` which would return `True`. Alternatively, you could use the `find()` method: `'apple'.find('ple') != -1`.

Happy coding! 🎉