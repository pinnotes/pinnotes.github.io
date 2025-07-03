---
title: Introduction to "import library"
date: 2025-05-08
weight: 23
---

Based on the sources, let's look at the concept of "importing a library" in Python.

Firstly, in Python, what are often referred to as "libraries" are more formally called **modules**. A module is essentially a file containing Python code. It allows you to logically organise your code by grouping related functions, classes, and variables together. Think of a module as a **self-contained package of variables**. Every file of Python source code ending in a `.py` extension is a module.

The main purpose of modules is **code reuse**. Instead of writing the same functions or classes repeatedly, you can define them in a module file and then use them in other programs.

Now, why do you need to "import" a module or library? Python programs are often composed of **multiple module files**. One module file cannot see the names (variables, functions, etc.) defined in another file unless it explicitly imports that other file. The **`import` statement** is the primary way to link these files together at runtime.

Using the analogy from one source, importing a module is like going to a library and bringing a book home for reference. Once you bring it home, you can open it up and start reading or using its contents. If you try to use something from a module without importing it, Python won't know where to find it, leading to a "name is not defined" error.

The basic way to import an entire module is using the **`import` statement**:
```python
import module_name
```
When you use `import module_name`, Python loads the entire module into your program. This statement creates a **module object** named `module_name`. After importing, to access anything defined inside that module (like a function or variable), you use **dot notation**: you write the module name, followed by a dot, and then the name of the item you want to use. For example, to use the `sqrt` function from the `math` module, you would write `math.sqrt()`. Similarly, to print the calendar for a month from the `calendar` library, you would use `calendar.month()`.

Python comes with a **large collection of utility modules** known as the standard library. These are not part of the core language itself but provide support for common tasks. You access these standard tools by importing the appropriate modules. Examples mentioned include the `math` library for mathematical functions, the `random` library for generating random numbers, and the `calendar` library for calendar-related operations.

When you issue an `import` statement for the first time for a specific module during a program's execution, Python goes through a process to locate and load the module. The key steps are:
1.  **Find It:** Python searches for the module file. This search happens along a defined list of directories called the **module search path** (also known as `sys.path`). The simple name you use in the `import` statement (like `calendar`) does not include the `.py` suffix or directory path. Python finds the first file matching the name on this path.
2.  **Compile It (Maybe):** If the source file (`.py`) is found and hasn't been compiled recently, Python compiles it into byte code (`.pyc`).
3.  **Run It:** Python executes the module's byte code from top to bottom. Any assignments made at the top level of the module file become **attributes** of the resulting module object.

Subsequent imports of the same module within the same program execution are faster; Python simply fetches the already loaded module object from its internal table (`sys.modules`).

In summary, importing a library (module) is the fundamental mechanism in Python for accessing and reusing code defined in separate files, allowing programs to be structured as interconnected components. The basic `import` statement brings the module into your program's namespace, and you then access its contents using dot notation.