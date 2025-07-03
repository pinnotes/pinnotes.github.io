---
title: Warmup with Lists
date: 2025-05-08
weight: 41
---

Let's warm up to lists in Python! Learning Python often starts with foundational concepts, and things can get more complex as you progress. This "warm-up" is designed to introduce you to a core data structure: lists, in an easy-to-understand way, just as the courses aim to make programming straightforward for beginners.

### What are Lists in Python? 📚
In Python, a **list** is an **ordered collection of items**. Think of a list as a versatile **basket** 🧺 where you can store different types of things – numbers, text, or even other lists!.

Here are some key characteristics:
*   **Creating a List**: You create a list by enclosing a sequence of values (or expressions that return values) within **square brackets `[]`**, with items separated by commas.
    *   For example: `my_list = [10, 'hello', 3.14]`.
*   **Empty Lists**: An empty list is simply `[]`.
*   **Nesting**: Lists can contain other lists, allowing for complex data structures like matrices.
*   **Variables**: When you create a list and assign it to a variable, that variable "refers" to the list object in memory.
*   **Checking Type**: You can check the type of any variable using the `type()` command. For a list, it would typically return `<class 'list'>`.

### Essential List Operations and Concepts ✨
Lists are powerful because they come with many built-in operations and methods:

1.  **Length (`len()`)**: To find out how many items are in a list, use the `len()` function.
    *   Example: `len()` would return `3`.

2.  **Indexing**: You can access individual items in a list using their **position (index)**, enclosed in square brackets.
    *   **Zero-Based**: Python indexing **starts from 0** for the first item.
    *   **Negative Indexing**: You can also count from the end of the list using negative indices, where `-1` is the last item, `-2` is the second to last, and so on.
    *   Example: For `L = ['apple', 'banana', 'cherry']`:
        *   `L` gives `'apple'`.
        *   `L` gives `'banana'`.
        *   `L[-1]` gives `'cherry'`.

3.  **Slicing**: To extract a **section or sub-list** from a list, you use slicing: `L[start:end]`.
    *   The `end` index is **exclusive**, meaning the item at the `end` index itself is *not* included.
    *   You can omit `start` (defaults to 0) or `end` (defaults to the end of the list).
    *   Example: For `L =`:
        *   `L[1:4]` gives ``.
        *   `L[2:]` gives ``.
        *   `L[:3]` gives ``.

4.  **Concatenation (`+`)**: You can join two lists together using the `+` operator. This operation **creates a new list**.
    *   Example: ` +` results in ``.

5.  **Repetition (`*`)**: To repeat the elements of a list multiple times, use the `*` operator. This also **creates a new list**.
    *   Example: `['Hi!'] * 3` results in `['Hi!', 'Hi!', 'Hi!']`.

6.  **Mutability (Changing Lists)**: This is a **crucial difference** between lists and other data types like strings or tuples. Lists are **mutable**, meaning you can **change their contents after they are created**. Strings and tuples, on the other hand, are immutable.
    *   **Assigning to an index**: You can change an item at a specific position: `L = 'new_value'`.
    *   **Assigning to a slice**: You can replace a section of a list with a new sequence: `L[1:3] = ['a', 'b']`.
    *   **Common List Methods for Modification**:
        *   `append(item)`: Adds a single item to the end of the list. Example: `L.append(60)`.
        *   `extend(sequence)`: Appends all items from an iterable (like another list) to the end. Example: `L.extend()`.
        *   `insert(index, item)`: Inserts an item at a specific position. Example: `L.insert(1, 'new')`.
        *   `remove(value)`: Removes the first occurrence of a specified value. Example: `L.remove('apple')`.
        *   `pop(index)`: Removes and returns the item at a given position. If no index is specified, it removes and returns the last item. Example: `removed_item = L.pop(0)`.
        *   `del statement`: The `del` statement can delete items by index or even entire slices of a list. Example: `del L` or `del L[1:3]`.
        *   `sort()`: Sorts the list **in-place** (modifies the original list).
        *   `reverse()`: Reverses the order of items **in-place**.

7.  **Membership (`in`)**: To check if an item exists within a list, use the `in` operator. It returns `True` or `False`.
    *   Example: `3 in` results in `True`.

8.  **Iteration (`for` loop)**: You can easily go through each item in a list using a `for` loop.
    *   Example: `for item in my_list: print(item)`.

### Practice Questions 🧠
Ready to put your knowledge to the test? Try these Python list exercises!

1.  **List Creation & Length**: Create a list called `my_pets` containing the names of your three favourite pets (or animals). What is the `len()` of your `my_pets` list? 🐶🐱🐠
2.  **Accessing & Slicing**: Given the list `alphabet = ['a', 'b', 'c', 'd', 'e', 'f']`:
    *   How would you access the character `'d'`?
    *   How would you get a slice containing `['b', 'c', 'd']`?
    *   How would you get the last element using negative indexing? 🔠
3.  **Modifying Lists**: Start with the list `todo_list = ['buy groceries', 'clean room', 'pay bills', 'walk dog']`.
    *   Change `'clean room'` to `'organise desk'`.
    *   Add `'call mum'` to the end of the list.
    *   Remove `'pay bills'` from the list.
    *   What does `todo_list` look like after these operations? 📝
4.  **Combining & Repeating**: You have `part1 =` and `part2 =`.
    *   Create a `full_list` by combining `part1` and `part2`.
    *   Create a `repeated_part1` list that contains `part1` repeated twice. 🔗

### Solutions ✅

1.  ```python
    my_pets = ['Buddy', 'Whiskers', 'Goldie']
    print(len(my_pets)) # Output: 3
    ```
2.  ```python
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f']
    print(alphabet)      # Output: 'd'
    print(alphabet[1:4])    # Output: ['b', 'c', 'd']
    print(alphabet[-1])     # Output: 'f'
    ```
3.  ```python
    todo_list = ['buy groceries', 'clean room', 'pay bills', 'walk dog']
    todo_list = 'organise desk' # Change by index assignment
    todo_list.append('call mum')   # Add to end using append()
    todo_list.remove('pay bills')  # Remove by value using remove()
    print(todo_list) # Output: ['buy groceries', 'organise desk', 'walk dog', 'call mum']
    ```
4.  ```python
    part1 =
    part2 =
    full_list = part1 + part2 # Combine lists using + operator
    print(full_list)          # Output:

    repeated_part1 = part1 * 2 # Repeat list using * operator
    print(repeated_part1)     # Output:
    ```