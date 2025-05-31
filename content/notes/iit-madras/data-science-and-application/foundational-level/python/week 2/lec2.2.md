---
title: Variables :- A Programmer's Perspective
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 23
---

Based on the sources, here is an explanation of variables from a programmer's perspective:

In Python programming, a **variable** is fundamentally **a name that refers to a value**. You can think of it as a **reserved memory location to store values**, or a **container where we can store different values**. In simpler terms, a variable can be likened to a **basket** in real life. These are used to **temporarily store data in computer's memory**.

**Creation and Assignment:**
Variables are **created when your code first assigns it a value** using an **assignment statement** (`=`). For example, `a = 10` assigns the value 10 to the variable named `a`. Future assignments change the value of the already created name. When a variable appears in an expression, it is **immediately replaced with the object that it currently refers to**. It is crucial that all variables **must be explicitly assigned before they can be used**; attempting to reference an unassigned variable will result in errors. You can also assign values to variables using the `input` statement, which can convert the input to a specified type before assignment.

**Variables are Names, Objects Have Types:**
A key concept in Python is the distinction between names (variables) and objects. **Data in Python takes the form of objects**. Variables are simply **names** that are used to keep track of information. They are entries in a system table with spaces for links to objects. Variables **always simply refer to a particular object at a particular point in time**. Internally, variables are implemented as **pointers** to the object's memory space.
Because variables are just references to objects, a variable **never has any type information or constraints associated with it**. The **notion of type lives with objects, not names**. This allows for **dynamic typing** in Python, meaning you can change the type of object a variable refers to by reassigning it. For example, a variable `a` could first reference an integer `10` and later be reassigned to reference a string `'India'`, changing its type from integer to string, but the variable `a` itself doesn't change type; it just references a different object. The way your computer sees things depends on how you store them.

**Naming Rules and Keywords:**
When choosing variable names, you have great latitude, but you **cannot use any of Python’s reserved words (keywords) as a name**. Keywords are words that have special meaning to Python. Examples include `and`, `or`, `not`, `if`, `def`, and `while`. Variable names can contain letters and numbers but **cannot begin with a number**. It is conventional to use only lowercase letters for variable names, although uppercase letters are legal. The underscore character `_` can also appear in a name. It is recommended to **make your variables self-explanatory**.

**Literals vs. Variables:**
**Literals** are fixed values, like the number `30` or the string `'Sudarshan'`. Variables (like `name` or `age`) can store different values over time, meaning their values can be changed. A key difference is that **literals can be used only on the right hand side of the equal to sign**, whereas **variables can be used on either sides**. You use variables when the value might change, and literals when the value is not going to change (like the value of pi).

**Variable Scope:**
The **scope of a variable**, determining where it can be used, is **determined entirely by where it is assigned in your source code**. This is called **lexical scoping**.
*   If a variable is assigned **inside a `def`**, it is **local to that function**.
*   If a variable is assigned in an **enclosing `def`**, it is **nonlocal to nested functions**.
*   If a variable is assigned **outside all `defs`**, it is **global to the entire file**.
Local variables can be accessed only inside the function where they are declared, while global variables can be accessed throughout the program body by all functions. Simple unqualified names (like `X`) deal with scopes. Using the `global` statement allows a function to modify a global variable. Overuse of global variables is generally not recommended as it can make code harder to understand and reuse.

**Deleting Variables:**
Variables can be explicitly removed from memory using the `del` statement. After deletion, attempting to access the variable will result in a `NameError` because the name is no longer defined.

**Using Comments:**
To make code more understandable, especially as programs become complex, it's a good idea to **add notes called comments**. Comments in Python start with the `#` symbol, and everything after the `#` on that line is ignored by the computer. Good comments explain the *hows* and *whys*, your assumptions, or the reasons for a certain approach, rather than just stating *what* the code does.