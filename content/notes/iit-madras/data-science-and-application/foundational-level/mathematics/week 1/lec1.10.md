---
title: Relations - Examples
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 10
---

Here's an explanation of relations, keeping ease of understanding and emojis in mind, formatted as notes, drawing directly from the sources provided.

---

### 📝 Understanding Relations: Flexible Connections!

#### What is a Relation? 🤝
At its core, a **relation** is a **collection of ordered pairs**. It's a way to describe how elements from one set **connect** to elements in another set (or even within the same set).

*   Think of it as choosing specific links from *all* possible links between two groups.
*   Formally, a relation `R` from set `X` to set `Y` is always a **subset of the Cartesian product** `X × Y`. The **Cartesian product** `X × Y` contains *all* possible ordered pairs `(x, y)` where `x` comes from `X` and `y` comes from `Y`.
*   **Key Point**: In a relation, the **order of elements in a pair matters**. So, `(a, b)` is not necessarily the same as `(b, a)`.

#### Relations vs. Functions (A Quick Reminder!) 💡
*   **All functions are relations**, but **not all relations are functions**.
*   A **function** is a *special kind* of relation where each **input** from the domain maps to **exactly one output** in the codomain.
*   A relation, however, can have an input mapped to **multiple outputs**, or some inputs might not be mapped at all (depending on its definition as a subset of the Cartesian product).

---

### 🌟 Examples of Relations with Emojis!

Here are some real-world and mathematical examples of relations:

*   **👩‍👧‍👦 The "Is Mother Of" Relation**
    *   **Concept**: We can define a relation between people where the first person is the mother of the second person.
    *   **Pairs**: (Alice, Bob) means Alice is Bob's mother. (Carla, David) means Carla is David's mother.
    *   **Why it's a Relation**: It collects pairs of individuals who share this specific biological link.
    *   **Not necessarily a Function**: A child can only have one biological mother (making the 'mother of' *function* possible if we map child to mother), but a mother can have multiple children. If we defined the relation as `(child, mother)`, and assuming unique mothers, it would be a function. However, if we defined it as `(mother, child)` as is implied by "mother of," a mother like Alice can be related to multiple children, say (Alice, Bob) and (Alice, Carol). This relation `{(Alice, Bob), (Alice, Carol)}` would *not* be a function if defined from 'mother' to 'child', because one input (Alice) has multiple outputs (Bob, Carol).

*   **🔢 ÷ The Divisibility Relation**
    *   **Concept**: This connects two natural numbers `d` and `n` if `d` divides `n` evenly, meaning there's no remainder when `n` is divided by `d`.
    *   **Pairs**: (2, 4), (3, 9), (7, 63).
    *   **Why it's a Relation**: It's a subset of all possible pairs of natural numbers (N × N), where `d` divides `n`.

*   **📏📍 The Distance Relation (Visualised as a Circle)**
    *   **Concept**: Consider all points in a plane (ℝ × ℝ). A relation can consist of all pairs of real numbers `(a, b)` such that their distance from the origin `(0, 0)` is a specific value, for example, 5 units. The distance is calculated as `√(a² + b²) `.
    *   **Pairs**: (0, 5), (3, 4), (-3, -4) are all pairs whose distance from the origin is 5.
    *   **Why it's a Relation**: It defines a specific set of points `(a, b)` that satisfy a condition. When plotted, these points form a **circle** ⭕.
    *   **Not a Function (in the form y = f(x))**: If you try to write a circle's equation as `y = f(x)`, you'll find that for most `x` values, there are two `y` values (one positive, one negative). This violates the "exactly one output" rule for functions.

*   **👩‍🏫📚 The Teacher-Course Allocation Relation**
    *   **Concept**: If `T` is the set of teachers and `C` is the set of courses, an "allocation relation" `A` is a subset of `T × C`. It describes which teachers are teaching which courses.
    *   **Pairs**: (Kumar, Maths) if Kumar teaches Maths. (Deb, History) if Deb teaches History.
    *   **Why it's a Relation**: It captures specific pairings from all possible teacher-course combinations.

*   **📈⭐️ The Prime Power Relation**
    *   **Concept**: This relation connects a prime number `p` with a natural number `n` if `n` can be expressed as `p` raised to a natural number exponent `m` (i.e., `n = p^m`).
    *   **Pairs**: (5, 25) because 25 = 5². (7, 343) because 343 = 7³. (3, 1) because any number (including a prime) raised to the power of 0 is 1.
    *   **Why it's a Relation**: It is a subset of the Cartesian product of the set of primes and the set of natural numbers, filtered by the "power of" condition.

*   **📋🧑‍🎓 Student Records as Relations (Tables)**
    *   **Concept**: In computing and data science, **tables are fundamental examples of relations**. Each row in a table represents an ordered "tuple" or "record" that relates different pieces of information (e.g., student ID, name, grade).
    *   **Example**: A table `Students` might have `(Roll Number, Name, Date of Birth)` pairs, while `Grades` might have `(Roll Number, Subject, Grade)` pairs.
    *   **Why it's a Relation**: Each row is an ordered collection of items, and the entire table is a collection of such rows (pairs or n-tuples), forming a subset of the Cartesian product of the domains of its columns. These tables can be combined using operations like "Join" to create new relations.

---