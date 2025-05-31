---
title: Introduction to Strings
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 11
---

Okay, let's delve into strings, drawing from the provided sources and our previous conversation about operators and expressions.

**What are Strings?**

Strings are a fundamental data type in Python used to record textual information as well as arbitrary collections of bytes. They are essentially an ordered collection of characters used to store and represent text-based information. In Python, unlike some other languages, there isn't a separate type for individual characters; instead, you use one-character strings. Strings are a core object type provided by Python.

**Creating Strings (String Literals)**

Strings can be created using literal expressions. Common ways to code strings include using single quotes (`'...'`) or double quotes (`"..."`). Single and double-quoted strings are treated the same.

For special characters, you can use backslash escape sequences, such as `\n` for a newline or `\t` for a tab. Raw strings (`r'...'`) suppress the interpretation of escape sequences. Triple-quoted strings (`"""..."""` or `'''...'''`) can span multiple lines.

In Python 3.0, there's a distinction between text strings (Unicode, represented by the `str` type) and binary data (byte strings, represented by the `bytes` type), although byte strings can reflect encoded Unicode text. Python 2.6 handled strings and Unicode differently, with `str` and `unicode` types.

**Basic String Operations**

Strings support various operations. Some key basic operations include:

*   **Concatenation** (`+`): This operator combines two strings by placing one next to the other. We saw this in our previous discussion on operators, noting that `+` means concatenation for strings. For example, combining the strings "coffee" and "bread" using `+` results in "coffee bread".
*   **Repetition/Replication** (`*`): This operator repeats a string a specified number of times. We also touched upon this in our last lecture on operators. For example, `'Spam!' * 8` results in `'Spam!Spam!Spam!Spam!Spam!Spam!Spam!Spam!'`. Similarly, if a variable `s` is the string "good", `s * 5` would repeat "good" five times.
*   **Length** (`len()`): The built-in `len()` function returns the number of characters in a string. For a string with 36 characters, the length is 36.
*   **Membership** (`in`, `not in`): These operators check if a substring is present within a string.
*   **Comparison**: Strings can be compared using relational operators like `==`, `!=`, `<`, `>`, `<=`, and `>=`.

**Accessing String Elements: Indexing and Slicing**

Strings are **sequences**, which means their items have a left-to-right positional order and can be accessed by their relative position (offset).

*   **Indexing** (`[]`): You can access individual characters in a string by using the bracket operator with an integer index. Indexing starts at 0 for the first character. For example, `alpha` accesses the first letter, and `alpha` accesses the 11th letter (if 'a' is at index 0, 'k' is at index 10). Similarly, for a string `s`, `s` gives the first letter, `s` the second, and so on. Negative indices can be used to count from the right; `T[-2]` fetches the second to last element.
*   **Slicing** (`[:]`): You can extract a portion (a substring) of a string using slicing. Slicing fetches sections from the string. For example, `s[1:3]` might extract characters from index 1 up to (but not including) index 3. Extended slicing with a third index allows specifying a "step size", determining how many characters to skip.

**Immutability**

A crucial property of Python strings is that they are **immutable**. This means that once a string object is created, its contents cannot be changed in-place. Operations like concatenation or slicing don't modify the original string; they create *new* string objects. If you need to change a string, you effectively create a new string and reassign it to the variable.

**String Methods**

In addition to basic operations, string objects have a rich set of built-in methods that perform common string-specific tasks. These methods are called using dot notation (e.g., `string_variable.method_name()`). Examples include methods for splitting and joining, case conversions, content tests (`isalnum()`, `isdigit()`, etc.), substring searches (`find()`, `index()`), and replacements.

You can discover the available methods and attributes for a string object using the built-in `dir()` function and get help on what they do using the `help()` function.

**String Formatting**

Python provides ways to format strings, such as using the string formatting operator (`%`) or the string formatting method (`.format()`).

**Strings as Sequences**

As mentioned, strings are a type of sequence. This is important because many operations that work on strings (like indexing, slicing, and iteration) also work on other sequence types such as lists and tuples. We've seen how lists also support concatenation and repetition, similar to strings.

In summary, strings are a fundamental, immutable sequence type in Python used for text, supporting various operations, indexing, slicing, and a wide array of methods for manipulation and processing.