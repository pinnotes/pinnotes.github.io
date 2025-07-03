---
title: Lists and Sets
date: 2025-05-08
weight: 42
---

Let's get warmed up to two incredibly useful Python data structures: **Lists** and **Sets**! 📚 Just like learning a new skill, starting with programming involves breaking down complex ideas into simpler, manageable pieces, and understanding these fundamental "baskets" where you store your data is a great starting point.

### What are Lists in Python? 🧺
Imagine a **list** as a super versatile shopping basket 🧺 where you can put anything you want, in any order, and even change its contents later!.

In Python, a list is an **ordered collection of items**. This means the items have a specific sequence, and you can access them by their position.

Here's how lists work and what you can do with them:

*   **Creating a List**: You create a list by putting items inside **square brackets `[]`**, separated by commas.
    *   Example: `my_shopping_list = ['milk', 'eggs', 'bread']` 🛒
    *   An empty list is just `[]`.
*   **Holding Anything & Nesting**: Lists can hold different types of things – numbers, text, or even other lists!.
    *   Example: `mixed_bag = ['apple', 10, 3.14, ['inner_list', 5]]` 🍎🔟🥧📦
*   **Checking Type**: You can always check a variable's type using `type()`. For a list, it will show `<class 'list'>`.
*   **Length (`len()`)**: Want to know how many items are in your list? Use `len()`.
    *   Example: `len(['milk', 'eggs'])` would give `2` 📏
*   **Indexing (Accessing Items by Position)**: Every item in a list has a number (its position or **index**). Python starts counting from `0` for the first item!.
    *   `my_list = ['A', 'B', 'C']`
    *   `my_list` gives `'A'` (the first item) 🥇
    *   `my_list` gives `'B'` (the second item) 🥈
    *   You can also count from the end using negative indices: `my_list[-1]` gives `'C'` (the last item) 🔚
*   **Slicing (Getting Parts of a List)**: You can grab a section (a "slice") of a list using `[start:end]`. The `end` position is *not included*.
    *   `numbers =`
    *   `numbers[1:4]` gives `` (items from index 1 up to, but not including, index 4) ✂️
    *   `numbers[2:]` gives `` (from index 2 to the end)
    *   `numbers[:3]` gives `` (from the beginning up to, but not including, index 3)
*   **Concatenation (`+`)**: You can combine two lists using `+` to create a brand **new list**.
    *   Example: ` +` results in `` ➕
*   **Repetition (`*`)**: Repeat a list's items multiple times with `*` to create a **new list**.
    *   Example: `['Hi!'] * 3` results in `['Hi!', 'Hi!', 'Hi!']` ✨
*   **Mutability (Changing Lists)**: Lists are **mutable**. This means you **can change their contents** after they are created.
    *   **Changing an item**: `my_list = 'new_item'`.
    *   **Adding items**:
        *   `list.append(item)`: Adds one item to the end 📦.
        *   `list.extend(another_list)`: Adds all items from another list to the end.
        *   `list.insert(index, item)`: Inserts an item at a specific position.
    *   **Removing items**:
        *   `list.remove(value)`: Removes the *first* matching item by its value.
        *   `list.pop(index)`: Removes and *returns* the item at a specific position (or the last if no index is given).
        *   `del list[index]` or `del list[start:end]`: Deletes item(s) by position or slice.
*   **Membership (`in`)**: Check if an item is in a list using the `in` keyword. It returns `True` or `False`.
    *   Example: `'apple' in ['orange', 'apple']` results in `True` 🍎🔍
*   **Iteration (`for` loop)**: Go through each item in a list one by one.
    *   Example: `for fruit in my_fruits: print(fruit)` 🚶‍♀️

### What are Sets in Python? 🎒
Think of a **set** as a magic bag of toys 🎒. You can throw in as many toys as you want, but if you try to add the same toy twice, it just ignores the second one (because it already has it!). Also, when you pull toys out, they might not be in the same order you put them in.

In Python, a set is an **unordered collection of unique items**. This means:
*   **No duplicates allowed**: Each item in a set must be unique.
*   **No specific order**: Items are not stored in any particular sequence, so you can't use indexing or slicing like with lists.

Here's how sets work and what you can do with them:

*   **Creating a Set**: You can create a set using the `set()` function (passing it an existing list or string) or by using **curly braces `{}`** with items inside (for Python 3.0 and later).
    *   Example: `unique_numbers = {1, 2, 3, 2, 1}` will become `{1, 2, 3}` (duplicates removed!) 🚫
    *   Example: `unique_letters = set('hello')` will become `{'h', 'e', 'l', 'o'}` (order not guaranteed)
    *   An empty set is created with `set()` (not `{}` alone, as `{}` creates an empty dictionary).
*   **Immutable Elements**: Items you put into a set *must be immutable* (like numbers, strings, or tuples). You **cannot** put mutable items like lists or dictionaries directly into a set.
    *   Example: `{1, 'apple', (1, 2)}` is OK. ` {1, ['list'], {'dict'}}` is NOT OK. ❌
*   **Mutability (Changing Sets)**: Sets are **mutable**, meaning you can add or remove items after creation.
    *   **Adding items**:
        *   `set.add(item)`: Adds a single item. If it's already there, nothing happens.
        *   `set.update(another_set_or_list)`: Adds multiple items from another collection.
    *   **Removing items**:
        *   `set.remove(value)`: Removes a specific item. If the item isn't found, it causes an error.
        *   `set.discard(value)`: Removes a specific item. If the item isn't found, nothing happens (no error).
        *   `set.pop()`: Removes and returns an *arbitrary* item (since sets are unordered).
        *   `set.clear()`: Removes all items.
*   **Set Operations (Math-like!)**: Sets are great for mathematical operations:
    *   **Union (`|`)**: Combines all unique items from both sets. Example: `{1, 2} | {2, 3}` results in `{1, 2, 3}` 🤝
    *   **Intersection (`&`)**: Finds items common to both sets. Example: `{1, 2} & {2, 3}` results in `{2}` ✂️
    *   **Difference (`-`)**: Finds items in the first set but *not* in the second. Example: `{1, 2, 3} - {2, 4}` results in `{1, 3}` ➖
    *   **Symmetric Difference (`^`)**: Finds items in either set, but *not* in both. Example: `{1, 2, 3} ^ {2, 4}` results in `{1, 3, 4}`
*   **Membership (`in`)**: Check if an item is in a set. Very fast!.
    *   Example: `'orange' in {'apple', 'orange'}` results in `True` 🍊🔍
*   **Iteration (`for` loop)**: You can loop through items in a set, but remember, the order isn't guaranteed.
    *   Example: `for color in my_colors: print(color)` 🚶‍♂️

### Lists vs. Sets: Quick Comparison 📊

| Feature          | Lists 🧺                                    | Sets 🎒                                      |
| :--------------- | :------------------------------------------ | :------------------------------------------- |
| **Order**        | **Ordered** (items have an index)     | **Unordered** (no indexes)        |
| **Duplicates**   | **Allowed** (can have multiple same items)  | **Not Allowed** (items must be unique) |
| **Syntax**       | `[item1, item2]`                      | `{item1, item2}` or `set(iterable)` |
| **Mutability**   | Mutable (can change contents)       | Mutable (can add/remove items)       |
| **Access**       | By index (`my_list`) or slice (`[1:3]`) | No direct index/slice access                 |
| **Key Use**      | Storing sequences, maintaining order        | Storing unique items, fast membership tests, mathematical set operations |

Both are powerful! Python allows you to store and manage "stuff" efficiently, and practice is the best way to master these concepts. Don't worry if it's not immediately obvious; consistent practice helps.

### Practice Questions 🧠
Ready to put your knowledge to the test? Try these Python exercises!

1.  **List Creation & Length**: Create a list called `favourite_movies` containing the titles of your five favourite films. What is the `len()` of your `favourite_movies` list? 🎬📏
2.  **List Accessing & Slicing**: Given the list `fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']`:
    *   How would you access the fruit `'cherry'`? 🍒
    *   How would you get a slice containing `['banana', 'cherry', 'date']`? 🍌🍒📅
    *   How would you get the last element using negative indexing? 🔚
3.  **List Modifying**: Start with the list `daily_tasks = ['wake up', 'eat breakfast', 'go to work', 'eat lunch', 'go home']`.
    *   Change `'go to work'` to `'attend morning meeting'`. 💼
    *   Add `'prepare dinner'` to the end of the list. 🍽️
    *   Remove `'eat lunch'` from the list. 🥗
    *   What does `daily_tasks` look like after these operations? 📝
4.  **Set Creation & Operations**: You have `group_a_hobbies = {'reading', 'hiking', 'gaming', 'swimming'}` and `group_b_hobbies = {'hiking', 'cooking', 'reading', 'cycling'}`.
    *   Create a set called `all_hobbies` containing all unique hobbies from both groups. 🌍
    *   Create a set called `common_hobbies` containing only the hobbies that both groups share. 🤝
    *   What hobbies are unique to `group_a_hobbies` (not in group B)? 🅰️
5.  **List vs. Set**: You have a list of student IDs, but some might be duplicates: `student_ids =`. How would you use a set to quickly find the number of *unique* student IDs? 🧑‍🎓🔢

---

### Solutions ✅

1.  ```python
    favourite_movies = ['The Matrix', 'Inception', 'Pulp Fiction', 'Spirited Away', 'Eternal Sunshine of the Spotless Mind']
    print(len(favourite_movies)) # Output: 5 🎬📏
    ```
2.  ```python
    fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']
    print(fruits)      # Output: 'cherry' 🍒
    print(fruits[1:4])    # Output: ['banana', 'cherry', 'date'] 🍌🍒📅
    print(fruits[-1])     # Output: 'elderberry' 🔚
    ```
3.  ```python
    daily_tasks = ['wake up', 'eat breakfast', 'go to work', 'eat lunch', 'go home']
    daily_tasks = 'attend morning meeting' # Change by index assignment 💼
    daily_tasks.append('prepare dinner')     # Add to end using append() 🍽️
    daily_tasks.remove('eat lunch')          # Remove by value using remove() 🥗
    print(daily_tasks) # Output: ['wake up', 'eat breakfast', 'attend morning meeting', 'go home', 'prepare dinner'] 📝
    ```
4.  ```python
    group_a_hobbies = {'reading', 'hiking', 'gaming', 'swimming'}
    group_b_hobbies = {'hiking', 'cooking', 'reading', 'cycling'}

    all_hobbies = group_a_hobbies | group_b_hobbies # Union operation 🌍
    print(all_hobbies) # Output (order may vary): {'reading', 'hiking', 'gaming', 'swimming', 'cooking', 'cycling'}

    common_hobbies = group_a_hobbies & group_b_hobbies # Intersection operation 🤝
    print(common_hobbies) # Output (order may vary): {'reading', 'hiking'}

    unique_to_a = group_a_hobbies - group_b_hobbies # Difference operation 🅰️
    print(unique_to_a) # Output (order may vary): {'gaming', 'swimming'}
    ```
5.  ```python
    student_ids =
    unique_ids_set = set(student_ids) # Convert list to set to remove duplicates
    print(unique_ids_set) # Output (order may vary): {101, 102, 103, 104, 105}
    print(len(unique_ids_set)) # Output: 5 🧑‍🎓🔢
    ```