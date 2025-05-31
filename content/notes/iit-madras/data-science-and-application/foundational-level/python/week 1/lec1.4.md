---
title: A Quick Introduction to Variables
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 4
---

In Python, a **variable** is essentially a **name** or a **label** that refers to a **value** or **stored data**. You can think of a variable as a **basket** in real life used to keep track of information in your program. Variables temporarily store data in the computer's memory.

Variables are **created when they are first assigned a value**. An **assignment statement** creates a new variable and gives it a value. For example, `price = 10` creates a variable named `price` and assigns it the integer value 10. Similarly, `x = 6` creates a variable `x` with the value 6.

A key aspect of Python is its **dynamic typing model**. Unlike some other programming languages, **a variable never has any type information or constraints associated with it**. The concept of **type lives with objects, not names** (variables). Variables are generic and can reference any type of object. This means you can assign a variable to an integer, and later reassign it to a string or a list. For example, `A = 10` makes `A` an integer, but later `A = India` makes `A` a string. This allows a variable to store a different value as you continue in your program.

When you use a variable in an expression, it is **immediately replaced with the object that it currently refers to**. Variables **must be assigned before they can be used**; trying to use an unassigned variable will result in an error.

There are specific **rules for naming variables**:
*   Variable names **can contain both letters (A-Z, a-z) and numbers (0-9)**.
*   They **cannot begin with a number**.
*   The **underscore character (`_`)** can appear in a name and is often used in multi-word names (e.g., `ram_bank_balance`). You must start a variable name with an alphabet or an underscore.
*   It is conventional to use only lowercase for variable names.
*   You **cannot use Python's reserved words** (also called keywords) as variable names. Keywords have a special, fixed meaning in Python.

Python also allows **multiple-target assignments**, where you can assign a single value to several variables simultaneously. For example, `a = b = c = 1` assigns the value 1 to `a`, `b`, and `c`. It's important to note that with this, **there is just one object**, and all the variables reference this same object in memory. This behaviour is fine for immutable types like numbers or strings, but can lead to unexpected results with **mutable objects** like lists, as changes made through one variable will be seen through others referencing the same object.

Finally, you can **delete the reference** to a variable using the `del` statement. After a variable is deleted, it is no longer defined.

Programming is often easier if you choose variable names that are **self-explanatory**.