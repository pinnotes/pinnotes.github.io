---
title: GrPA 1 Numbers (Arithemetic) 
label: Graded
weight: 1
subject: programming
subtitle: Week 1 GrPA
categories:
- Python Graded Assignment
---

---

## GrPA 1 Numbers (Arithemetic) Graded 👨‍💻

{{< border >}}

{{< tabs items="QUESTION,TEST CASES,SOLUTION" >}}

{{< tab >}}

Change in eligibility criteria to write oppe1 exam:
A1>=40/100 AND A2>=40/100 AND A3>=40/100 AND A4>=40/100

Solve the below tasks related to Numbers.

Tasks 1 to 3 - building up Arithemetic expression
Tasks 4 and 5 - floating point arithemetic
Tasks 6 and 7 - modulo and floor division
Problem Type: Input variable - Output Variable, Hidden suffix for evaluation

{{% details title="Instructions"  closed="true" %}}

NOTE: In this type of questions you should not take input or print anything unless your are explicitly asked to. Assign the result of the required computation to the correct variable name as it will be evaluated for type and value by the evaluator.

The input variables will be assigned by the evaluator based on the test cases.

The grey part before the white part (if any) in the code is the prefix code. The grey part after the white part (if any) is the suffix code which are not editable. Usually they will be the part of code but in this type of questions it will be removed by the evaluator.

The Three dots (...) called as Ellipsis in python are like placeholders, replace them with your answer.

The inputs on the code blocks are just sample inputs they won't be evaluated in the actual testcases.

Each testcase will have its own set of testcases defined as variables. The check function in the testcases is in the hidden evaluation code that checks the value and type of the variable.

{{% /details %}}

{{% details title="Template Code" closed="true" %}}

```python
output1 = ... # int: sum of a and b
output2 = ... # int: twice the sum of a and b
output3 = ... # int: absolute difference between a and b
output4 = ... # int: absolute difference between sum and product of a and b

# Find discounted price given price and discount_percent
# input variables : price: int, discount_percent: float
discounted_price = ... # float

# Round the discounted_price
rounded_discounted_price = ... # int

# Find hrs and mins given the total_mins
# input variables : total_mins
hrs = ... # int: hint: think about floor division operator
mins = ... # int
```

{{% /details %}}

Python Tutor

Starboard Notebook

Pyodide Terminal

{{< /tab >}}

{{< tab >}}

{{< tabs items="CASE 1,CASE 2,CASE 3,CASE 4,CASE 5,CASE 6,CASE 7" >}}

{{< tab >}}

###### Input

a=5
b=7
check('output1',12)
{{< /tab >}}

{{< tab >}}
a,b = 2,-5
check("output2", -6)

{{< /tab >}}

{{< tab >}}
a,b  = 6,4
check('output3', 2)
a,b = 4,7
check('output3', 3)

{{< /tab >}}

{{< tab >}}
a,b = 4,7
check('output4',17)

{{< /tab >}}

{{< tab >}}
a=5
b=7
check('output1',12)
{{< /tab >}}

{{< tab >}}
a=5
b=7
check('output1',12)
{{< /tab >}}

{{< tab >}}
a=5
b=7
check('output1',12)
{{< /tab >}}

{{< /tabs >}}
    
{{< /tab >}}

{{< tab >}}

```python {linenos=table,linenostart=1}
# Sample inputs (# note: The values given in the prefix code(grey) will be changed by the autograder according to the testcase while running them.
a = 5
b = 6
price, discount_percent = 80, 5.75
total_mins = 470
# <eoi>

output1 = a+b # int: sum of a and b
output2 = 2*(a+b) # int: twice the sum of a and b
output3 = abs(a-b) # int: absolute difference between a and b
output4 = abs((a+b) - (a*b)) # int: absolute difference between sum and product of a and b

# Find discounted price given price and discount_percent
# input variables : price: int, discount_percent: float
discounted_price = (1-discount_percent/100)*price # float

# Round the discounted_price
rounded_discounted_price = round(discounted_price) # int

# Find hrs and mins given the total_mins
# input variables : total_mins
hrs = total_mins//60 # int: hint: think about floor division operator
mins = total_mins%60 # int

```

{{< /tab >}}

{{< /tabs >}}

{{</ border >}}

{{< border >}}

### Python Code 🧠

{{< tabs items="CODE" >}}

{{< tab >}}

```python {linenos=table,linenostart=1}
# Sample inputs (# note: The values given in the prefix code(grey) will be changed by the autograder according to the testcase while running them.
a = 5
b = 6
price, discount_percent = 80, 5.75
total_mins = 470
# <eoi>

output1 = a + b # int: sum of a and b
output2 = 2 * (a + b) # int: twice the sum of a and b
output3 = abs(a - b) # int: absolute difference between a and b
output4 = abs((a + b) - (a * b)) # int: absolute difference between sum and product of a and b

# Find discounted price given price and discount_percent
# input variables : price: int, discount_percent: float
discounted_price = price * (1 - discount_percent / 100) # float

# Round the discounted_price
rounded_discounted_price = round(discounted_price) # int

# Find hrs and mins given the total_mins
# input variables : total_mins
hrs = total_mins // 60 # int: hint: think about floor division operator
mins = total_mins % 60 # int
```

{{< /tab >}}

{{< /tabs >}}

{{</ border >}}