---
title: Variables Revisited:- Dynamic Typing
date: 2025-05-08
weight: 23
---

Let's dive into "Variables Revisited - Dynamic Typing" in Python! 🐍

### Variables Revisited: Dynamic Typing ✨

In Python, variables are quite flexible, which is a key concept known as **dynamic typing**. Unlike some other programming languages where you have to explicitly state what *type* of data a variable will hold (like "this variable will always hold numbers"), Python figures out the type of data automatically at runtime.

Imagine a variable as a **label** 🏷️ or a **basket** 🧺. You can put different *types* of "stuff" (values) into the same basket at different times.

Here's how it works in detail:

*   **Types Live with Objects, Not Variables** 🧠
    *   When you assign a value to a variable, Python doesn't attach the data type to the variable name itself. Instead, the **type information is stored with the object** (the actual value) in memory.
    *   For example, if you say `A = 10`, `A` is a variable, and `10` is an integer object. If you then say `A = "India"`, `A` now refers to a string object. The variable `A` itself didn't change its type; it just started **referencing a different object** that has a different type. It's like using the same jar for rice, then later for water – the jar remains, but its content and content type change.
    *   This "dynamic typing" offers **flexibility** for you to use a variable for an integer and then later make it a string.

*   **Variables, Objects, and References** 🔗
    *   When you assign a value (e.g., `a = 3`), Python performs three steps:
        1.  **Creates an object** to represent the value (e.g., the integer `3`). These objects are pieces of allocated memory with space for their value and header fields like a type designator.
        2.  **Creates the variable** (e.g., `a`), if it doesn't already exist. Variables are just **names**.
        3.  **Links the variable to the new object**. These links are called **references**. Variables always link to objects, not other variables.
    *   When you use a variable in an expression, it's immediately replaced with the object it currently refers to.
    *   Variables are created automatically when they are first assigned values. They do not need to be declared ahead of time.

*   **Mutability and Shared References (The "Gotcha" ⚠️)**
    *   A crucial concept tied to dynamic typing is **shared references**. When you assign one variable to another (e.g., `B = A`), both variables end up **referencing the exact same object** in memory.
    *   For **immutable** objects (like numbers 🔢, strings 📜, and tuples 🪢), this usually isn't an issue. If you reassign `A` to a *new* object, `B` will still point to the *original* object. This is because immutable objects cannot be changed in-place. Operations on them, like string concatenation (`S + 'xyz'`), create *new* string objects rather than modifying the original.
    *   However, for **mutable** objects (like lists 📝 and dictionaries 📖), if you modify the object through *one* variable, the changes will be visible when you access it through the *other* variable, because they both point to the *same* object. This is a common pitfall.
        *   Example: If `L1 =` and `L2 = L1`, then `L1` and `L2` refer to the same list. If you do `L2.append(4)`, `L1` will also show ``.
    *   You must be careful about using mutable objects in multiple-target assignments (e.g., `a = b = []`) or augmented assignments (e.g., `a +=`), as in-place changes may affect other variables.

*   **Why use dynamic typing?** 🤔
    *   It leads to **less code** for you to write.
    *   It enables **polymorphism**, where the same operation (like `*`) can mean different things (multiplication for numbers, repetition for strings), depending on the objects involved. This makes Python code highly **flexible** and adaptable.
    *   Python has **automatic memory management** ("garbage collection"), which reclaims objects when they are no longer used, so you don't have to manage low-level memory details.

*   **Common Variable Operations**
    *   **Assignment Operator (`=`)**: Assigns a value to a variable. The left side must be a variable name.
    *   **Updating Variables**: New value depends on the old (`x = x + 1`). This is called an **increment** if adding, or **decrement** if subtracting.
    *   **Augmented Assignment Operators (`+=`, `-=`, `*=`, etc.)**: A shorthand for updating variables (e.g., `count += 1` is equivalent to `count = count + 1`). They make code concise and often run faster by performing in-place updates for mutable objects.
    *   **Multiple Assignment** 👯: Assign values to multiple variables in one line.
        *   Different values: `x, y = 1, 2`. The sequence of values on the right is important.
        *   Same value: `x = y = z = 10`. All variables refer to the *same* object.
    *   **Swapping Values**: A common use of multiple assignment is to swap variable values without a temporary variable (e.g., `nudge, wink = wink, nudge`).
    *   **Deleting Variables**: Use the `del` keyword to remove a variable from memory. After deletion, the variable is "not defined".

### Practice Questions 🧠

1.  What is the core idea of "dynamic typing" in Python? How does it differ from "static typing" in other languages?
2.  Consider the following Python code:
    ```python
    pet = "dog"
    animal = pet
    pet = "cat"
    print(animal)
    ```
    What will be printed? Explain why, relating it to variable references and object immutability.
3.  Now consider this code:
    ```python
    list1 =
    list2 = list1
    list2.append(4)
    print(list1)
    ```
    What will be printed? Explain why, relating it to shared references and object mutability.
4.  You have a variable `score = 50`. How would you use an augmented assignment operator to increase its value by 10?
5.  Is `20 = x + 5` a valid assignment in Python? Why or why not?

---

### Answers 📜

1.  The core idea of **dynamic typing** in Python is that **you do not need to explicitly declare the data type of a variable before using it**. Python automatically determines the data type of the value assigned to a variable at runtime. This is different from "static typing" (found in languages like C++ or Java), where you *must* declare the variable's type (e.g., `int age;` or `String name;`) before you can assign a value to it, and that variable can *only* hold values of that declared type. In Python, the type lives with the object, not the variable.
2.  The code will print: `dog`
    *   Initially, `pet` is assigned the string `"dog"`, and `animal` is assigned the value of `pet`, so both variables `pet` and `animal` refer to the same string object `"dog"`.
    *   Strings in Python are **immutable**. This means their value cannot be changed after they are created.
    *   When `pet = "cat"` is executed, a *new* string object `"cat"` is created, and the variable `pet` is *reassigned* to refer to this new object. The variable `animal` still refers to the *original* string object `"dog"`. Therefore, printing `animal` yields `"dog"`.
3.  The code will print: ``
    *   Initially, `list1` is assigned a list object ``. When `list2 = list1` is executed, both `list1` and `list2` become **shared references** to the *same* list object in memory.
    *   Lists in Python are **mutable**. This means their contents *can* be changed in-place.
    *   When `list2.append(4)` is called, the `append()` method modifies the actual list object that `list2` refers to. Since `list1` refers to the *exact same object*, the change is reflected when `list1` is printed.
4.  You would use the augmented assignment operator `+=`:
    ```python
    score = 50
    score += 10 # This is equivalent to score = score + 10
    print(score) # Output: 60
    ```
    This is a shorthand operator that is concise and often quicker to run.
5.  No, `20 = x + 5` is **not a valid assignment** in Python.
    *   The left side of an assignment operator (`=`) must be a **variable name** (or something that can be assigned to, like a list element or dictionary key), not a literal value or an expression.
    *   `20` is a **literal** integer value. You cannot assign a value *to* a literal. Python would raise a `SyntaxError`.