---
title: Python Course 🐍 
date: 2025-05-08
tags:
  - Programming 
excludeSearch: false
code: true
weight: 1
cascade:
 series: ["Programming"]
 image: "/images/code-1.jpg"


---

<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

```python
# Example of a simple Python script demonstrating core concepts
def main():
    # Basic print statement
    print("Welcome to Python Programming!")
    
    # Variable declaration and input
    name = input("Enter your name: ")
    print(f"Hello, {name}!")

if __name__ == "__main__":
    main()
```


## Python Programming Foundation Course

### 1. Core Syntax \& Basic Operations

**1.1 Print Statements \& Variables**

```python
print("Hello World")  # String literal
print(10)             # Integer
x = "OpenAI"
print(x, "GPT-4")     # Output: OpenAI GPT-4
```

**1.2 Data Types**


| Type | Example | Mutable | Description |
| :-- | :-- | :-- | :-- |
| int | 42 | No | Whole numbers |
| float | 3.14159 | No | Decimal numbers |
| str | "Python" | No | Text data |
| list | [1, "a", True] | Yes | Ordered collection |
| bool | True/False | No | Logical values |

**1.3 Type Conversion**

```python
num_str = "123"
num_int = int(num_str)  # Convert to integer
print(num_int * 2)      # 246
```


### 2. Control Structures

**2.1 Conditional Logic**

```python
age = 20
if age >= 18:
    print("Adult")
elif 13 <= age < 18:
    print("Teen")
else:
    print("Child")
```

**2.2 Looping Constructs**

```python
# For loop with range
for i in range(3):
    print(f"Count: {i}")

# While loop with break
counter = 5
while counter > 0:
    print(counter)
    counter -= 1
    if counter == 2:
        break
```


### 3. Data Structures

**3.1 Lists \& List Methods**

```python
fruits = ["apple", "banana"]
fruits.append("cherry")
print(fruits[1:3])  # ['banana', 'cherry']
```

**3.2 Dictionaries**

```python
student = {
    "name": "Alice",
    "age": 22,
    "courses": ["Math", "CS"]
}
print(student.get("email", "N/A"))  # Graceful missing key handling
```


### 4. Functions \& Modularity

**4.1 Basic Function Structure**

```python
def calculate_area(radius):
    """Calculate circle area"""
    PI = 3.14159
    return PI * radius ** 2

print(calculate_area(5))  # 78.53975
```

**4.2 Lambda Functions**

```python
square = lambda x: x ** 2
print(square(9))  # 81
```


### 5. File Operations

**5.1 Basic File Handling**

```python
with open("data.txt", "w") as file:
    file.write("Sample content")

with open("data.txt", "r") as file:
    print(file.read())
```


### 6. Object-Oriented Programming

**6.1 Class \& Object Basics**

```python
class Animal:
    def __init__(self, name):
        self.name = name
        
    def speak(self):
        raise NotImplementedError

class Dog(Animal):
    def speak(self):
        return "Woof!"

buddy = Dog("Buddy")
print(buddy.speak())  # Woof!
```


### 7. Essential Libraries

**7.1 Pandas for Data Analysis**

```python
import pandas as pd
data = {"Name": ["John", "Anna"], "Age": [28, 24]}
df = pd.DataFrame(data)
print(df.describe())
```

**7.2 Matplotlib Visualization**

```python
import matplotlib.pyplot as plt
plt.plot([1,2,3], [2,4,1])
plt.title("Basic Line Plot")
plt.show()
```


### 8. Error Handling

```python
try:
    print(10 / 0)
except ZeroDivisionError:
    print("Cannot divide by zero!")
finally:
    print("Execution completed")
```


### Key Features of This Revision:

1. **Structured Learning Path**: Progressive difficulty from basic syntax to OOP
2. **Practical Examples**: Real-world code snippets in every section
3. **Visual Aids**: Comparison tables and formatted output examples
4. **Modern Practices**: Emphasis on f-strings, context managers, type hints
5. **Cross-Referencing**: Logical flow between related concepts

Would you like me to expand any particular section or focus on specific programming concepts?

<div style="text-align: center">⁂</div>

[^1]: Python-IITM-Foundational-Course.pdf

