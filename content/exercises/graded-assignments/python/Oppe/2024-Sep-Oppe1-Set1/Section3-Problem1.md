---
title: Student Filter Function
subtitle: Section 3 | Problem 1
description: Let's create a function that helps you filter student roll numbers by different criteria in a marks list! 🔎
categories: OOPE Exam
---

---

## 🏆 Student Filter Function

Let's create a function that helps you filter student roll numbers by different criteria in a marks list! 🔎

### 🧑‍💻 Implementation

```python
def filter_students(data, criteria):
    # Calculate average marks
    if not data:
        return []

    marks_list = [marks for _, marks in data]
    avg = sum(marks_list) / len(marks_list)
    if criteria == 'above_average':
        return [roll for roll, marks in data if marks >= avg]
    elif criteria == 'below_average':
        return [roll for roll, marks in data if marks < avg]
    elif criteria == 'fail':
        return [roll for roll, marks in data if marks < 40]
    elif criteria == 'toppers':
        return [roll for roll, marks in data if marks >= 90]
    elif criteria is None:
        return [roll for roll, _ in data]
    else:
        return None
```


### 🔍 How Does It Work?

1. **Calculates the average** marks across all students.
2. **Filters** the roll numbers according to the chosen criteria:
    - `'above_average'`: Marks >= average.
    - `'below_average'`: Marks < average.
    - `'fail'`: Marks < 40.
    - `'toppers'`: Marks >= 90.
    - `None`: Returns *all* roll numbers.
    - *Any other string*: Returns `None`.
3. **Preserves order** as in the original data.

### 🧪 Practice Example

#### Sample Data

```python
marks_data = [
    ("A01", 85),
    ("A02", 35),
    ("A03", 95),
    ("A04", 42),
    ("A05", 78),
    ("A06", 90),
    ("A07", 23)
]
```


#### Practice 1: Above Average

```python
print(filter_students(marks_data, 'above_average'))
# Output: ['A01', 'A03', 'A05', 'A06']
```


#### Practice 2: Below Average

```python
print(filter_students(marks_data, 'below_average'))
# Output: ['A02', 'A04', 'A07']
```


#### Practice 3: Fails

```python
print(filter_students(marks_data, 'fail'))
# Output: ['A02', 'A07']
```


#### Practice 4: Toppers

```python
print(filter_students(marks_data, 'toppers'))
# Output: ['A03', 'A06']
```


#### Practice 5: All Roll Numbers

```python
print(filter_students(marks_data, None))
# Output: ['A01', 'A02', 'A03', 'A04', 'A05', 'A06', 'A07']
```


#### Practice 6: Invalid Criteria

```python
print(filter_students(marks_data, 'absent'))
# Output: None
```


### 📝 Step-by-Step Example

Let’s see how it works for `'above_average'`:

- Average = (85 + 35 + 95 + 42 + 78 + 90 + 23) / 7 = 64
- Roll numbers with marks ≥ 64: `'A01'(85)`, `'A03'(95)`, `'A05'(78)`, `'A06'(90)`
- So it returns: `['A01', 'A03', 'A05', 'A06']`


### ✨ Key Points

- **Average is calculated once** for efficient processing.
- **List is filtered in order without changing the appearance of the roll numbers.**
- **Handles empty and invalid input gracefully.**

Happy Coding! 🥳

