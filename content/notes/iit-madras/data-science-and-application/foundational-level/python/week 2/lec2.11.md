---
title: Different ways to import a library
date: 2025-05-08
weight: 23
---

In Python, what are often referred to as "libraries" are more formally known as **modules**. A module is essentially a file containing Python code that organises related functions, classes, and variables. The primary purpose of modules is **code reuse**. To use code defined in one module within another Python program, you must explicitly import that module using the `import` statement. If you try to use something from a module without importing it, you will encounter a `NameError`.

The sources describe several different ways to import libraries (modules) or their contents into your Python program:

1.  **Importing the Entire Module (`import module_name`)**
    *   This is the most basic and common way to import a module.
    *   The statement `import module_name` loads the entire module into your program.
    *   It creates a **module object** named `module_name`.
    *   To access any function, variable, or class defined within the module, you must use **dot notation** (e.g., `module_name.attribute_name`).
    *   For example, to use the `month` function from the `calendar` library, you would write `import calendar` and then `calendar.month(...)`. Similarly, for the `sqrt` function from the `math` library, it would be `math.sqrt()` (though `math` isn't explicitly shown with this import style for `sqrt`, it's the implication based on the general explanation). For `random.random()`, you'd use `import random` and then `random.random()`.
    *   This method is recommended when you are using most or all features of a library. It also helps avoid name clashes in your current program because all imported items are enclosed within the module's namespace, which you access via the module name.
    *   An important point is that Python only imports a module *once* per process execution. Subsequent `import` statements for the same module simply fetch the already loaded module object from an internal table (`sys.modules`).

    Example syntax:
    ```python
    import module_name
    # Access contents using:
    # module_name.function_name()
    # module_name.variable_name
    ```

2.  **Importing Specific Attributes (`from module_name import attribute_name`)**
    *   This method allows you to import only specific names (like functions, classes, or variables) from a module directly into your current program's namespace.
    *   The syntax is `from module_name import name1[, name2[, ... nameN]]`.
    *   After using this statement, you can use the imported names **directly** without prefixing them with the module name. For example, you could directly call `fib(100)` after `from fib import fib`.
    *   This method is considered more ideal if you are using only one or two features from a specific library. It requires less typing as you don't need the dot notation each time you use an imported item.
    *   However, the sources note that using `from` copies the names from the module into your current scope. This can potentially overwrite existing variables in your program if they have the same name.
    *   Conceptually, `from module import name` is roughly equivalent to `import module; name = module.name; del module`.

    Example syntax:
    ```python
    from module_name import specific_name
    # Access specific_name directly:
    # specific_name()
    # specific_name
    ```
    You can import multiple names:
    ```python
    from module_name import name1, name2
    ```

3.  **Importing All Attributes (`from module_name import *`)**
    *   This variation of the `from` statement imports *all* top-level names from a module directly into your current namespace.
    *   The syntax is `from module_name import *`.
    *   Similar to the specific `from` import, you can use the imported names directly without qualification. The sources use the example of `from calendar import star` (which is likely a typo in the transcript and should be `from calendar import *`) to import everything from the `calendar` library and then being able to call `calendar(...)` directly.
    *   While it requires minimal typing, this method is generally **discouraged** because it can lead to significant namespace pollution and make it very difficult to determine which module a particular name came from, especially if you use `from *` from multiple modules.
    *   By default, names starting with a single underscore (`_`) are not copied out by `from *`, although this behaviour can be affected by a module's `__all__` list.

    Example syntax:
    ```python
    from module_name import *
    # Access contents directly:
    # function_name()
    # variable_name
    ```

4.  **Importing with Renaming (`as` keyword)**
    *   Both `import` and `from` statements can use the `as` keyword to assign a different name (an alias) to the imported module or attribute in your current script.
    *   **Importing an entire module with an alias:** `import module_name as alias`. This imports the whole module, but you access its contents using `alias.attribute_name`.
    *   **Importing a specific attribute with an alias:** `from module_name import attribute_name as alias`. This imports the specific attribute, and you access it directly using `alias`.
    *   This feature is helpful for saving time writing long library names, providing shorter synonyms, or avoiding name clashes if the original module/attribute name conflicts with something else in your script.

    Example syntax:
    ```python
    # Rename module
    import reallylongmodulename as shortname
    shortname.function()

    # Rename specific attribute
    from module_name import confusing_function_name as clear_name
    clear_name()
    ```

In addition to these fundamental syntax variations, the sources also discuss **package imports**, which extend the `import` and `from` statements to navigate directory hierarchies containing modules. This is done using dotted paths, like `import dir1.dir2.mod` or `from dir1.dir2.mod import x`. This structure helps organise larger systems. Python also supports **relative imports** within packages using leading dots (`.`) in `from` statements (e.g., `from . import string` or `from .. import sibling_module`), which explicitly refers to modules within the same package structure.