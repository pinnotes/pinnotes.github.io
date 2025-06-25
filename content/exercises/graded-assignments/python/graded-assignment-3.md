---
title: Python Week 3
weight: 3
subtitle: Graded Assignment
categories:
- Python Graded Assignment
---

---

## Multiple Choice Questions 🧠

{{< border type="question" >}}
**1**) Select the correct implementation of a program that accepts a positive integer *x* as input and prints the maximum value of the integer *y* such that $2^y ≤ x$.

<u>Sample Test Cases</u>

| Input | Output |
| :-- | :-- |
| 100 | 6 |
| 256 | 8 |

```python {linenos=table,linenostart=1}
x = int(input())
y = 0
while x > 1:
    x = x // 2
    y = y + 1
print(y)
```

```python {linenos=table,linenostart=1}
x = int(input())
y = 0
while x >= 1:
    x = x // 2
    y = y + 1
print(y)
```

```python {linenos=table,linenostart=1}
x = int(input())
y = 0
while x > 1:
    x = x / 2
    y = y + 1
print(y)
```

```python {linenos=table,linenostart=1}
x = input()
y = 0
while x > 1:
    x = x // 2
    y = y + 1
print(y)
```

{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**2**) There is a collection of boxes, each box containing certain number of coins. This information is represented as a string such as this: `'|1|4|1|5|9|'`. Here, there are five boxes. The first box has one coin, second has four coins and so on. Assume that each box has at least one coin and at most nine coins. Select the correct implementation of a snippet of code that computes the average number of coins across the boxes and stores it in a variable named avg. Assume that the string `boxes` is already given to you and that there is at least one box in the collection.

Sample initialization of boxes: `'|1|4|1|5|9|'`

Assume that `boxes` is initialized before.

```python {linenos=table,linenostart=1}
num = 0
total = 0
for i in range(len(boxes)):
    if i % 2 == 0:
        continue
    coins = boxes[i]
    total += coins
    num += 1
avg = total / num
```

```python {linenos=table,linenostart=1}
num = 0
total = 0
for i in range(len(boxes)):
    if i % 2 == 0:
        continue
    coins = int(boxes[i])
    total += coins
    num += 1
avg = total / num
```

```python {linenos=table,linenostart=1}
num = 0
total = 0
for coins in boxes:
    total += coins
    num += 1
avg = total / num
```

```python {linenos=table,linenostart=1}
num = 0
total = 0
for i in range(len(boxes)):
    if i % 2 == 0:
        break
    coins = int(boxes[i])
    total += coins
    num += 1
avg = total / num
```

{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**3**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
name = input()
nick = ''    # there is no space between the quotes
space = ' ' # there is one space between the quotes
first_char = True
for char in name:
    if first_char == True:
        nick = nick + char
        first_char = False
    if char == space:
        first_char = True
print(nick)
```

What is the output for the following input?

```text {linenos=table,linenostart=1}
Albus Percival Brian Wulfric Dumbledore
```

```python {linenos=table,linenostart=1}
Albus
```

```python {linenos=table,linenostart=1}
Dumbledore
```

```python {linenos=table,linenostart=1}
AP
```

```python {linenos=table,linenostart=1}
APBWD
```

{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**4**) The first five terms of the Fibonacci sequence is given below:

- F₁ = 1    F₂ = 1    F₃ = 2
- F₄ = 3    F₅ = 5

We wish to write a program that accepts a positive integer *n* as input and prints F_n as the output.

Select all correct implementations of this program. (MSQ)

````python {linenos=table,linenostart=1}
n = int(input())
F_prev = 1
F_curr = 1
count = 2
while count < n:
    temp = F_prev + F_curr
    F_prev = F_curr
    F_curr = temp
    count += 1
print(F_curr)
````

```python {linenos=table,linenostart=1}
n = int(input())
if n <= 2:
    print(1)
else:
    F_prev = 1
    F_curr = 1
    count = 2
    while count < n:
        temp = F_prev + F_curr
        F_prev = F_curr
        F_curr = temp
        count += 1
    print(F_curr)
```

```python {linenos=table,linenostart=1}
n = int(input())
F_prev = 1
F_curr = 1
for i in range(n):
    temp = F_prev + F_curr
    F_prev = F_curr
    F_curr = temp
print(F_curr)
```

```python {linenos=table,linenostart=1}
n = int(input())
F_prev = 1
F_curr = 1
for i in range(n - 2):
    temp = F_prev + F_curr
    F_prev = F_curr
    F_curr = temp
print(F_curr)
```

{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**5**) What is the output of the following snippet of code?

```python {linenos=table,linenostart=1}
for char in 'a1b2c3d4e5':
    if char in 'abcde':
        print('|', end = '') # there is no space between the quotes
        continue
    print(char, end = '')  # there is no space between the quotes
print('|')
```

**Options**:

```python {linenos=table,linenostart=1}
12345
```

```python {linenos=table,linenostart=1}
|||||
```

```python {linenos=table,linenostart=1}
|1|2|3|4|5
```

```python {linenos=table,linenostart=1}
1|2|3|4|5|
```

```python {linenos=table,linenostart=1}
|1|2|3|4|5|
```


{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**6**) Code-1 and Code-2 will return the same value.

*Code-1*:

```python {linenos=table,linenostart=1}
x = 0
x_ = 1
for i in range(10):
    x, x_ = x_, x + x_
print(x)
```

*Code-2*:

```python {linenos=table,linenostart=1}
x = 0
x_ = 1
for i in range(10):
    x = x_
    x_ = x + x_
print(x)
```

**Options**:

True

False
{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**7**) You are an analyst in a Finance company. You are given a job to print the daily transaction in below format.

```text {linenos=table,linenostart=1}
country_code, currency_code, exchange_rate
```

Select the options that prints transaction records as in the sample output for input given in the table below. Multiple options can be correct (MSQ).

**Input**

| Variable | Value |
| :-- | :-- |
| country_code | 'IN' |
| currency_code | 'RS' |
| exchange_rate | 73.2272 |

**Output**

```text {linenos=table,linenostart=1}
country_code, currency_code, exchange_rate
```

**Options**

`print(country_code, currency_code, exchange_rate, sep = ", ")`

`print(f"{country_code}, {currency_code}, {exchange_rate:2.2f}")`

`print("{}, {}, {:2.2f}".format(country_code, currency_code, exchange_rate))`

`print("{0}, {1}, {2:2.2f}".format(country_code, currency_code, exchange_rate))`

`print("{a}, {b}, {c:2.2f}".format(a = country_code, b = currency_code, c = exchange_rate))`

`print("%s, %s, %2.2f"%(country_code, currency_code, exchange_rate))`

{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**8**) What is the output of the following snippet of code?

```python {linenos=table,linenostart=1}
alpha = 'abcdefghijklmnopqrstuvwxyz'
shift = 5
word = 'python'
encoded_word = ''  # there is no space between quotes
for char in word:
    shifted_index = (alpha.index(char) + shift) % 26
    encoded_char = alpha[shifted_index]
    encoded_word += encoded_char
print(encoded_word)
```

Options:

`stmydu`

`tcxlsr`

`veznut`

`udymts`

{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**9**) How many times do the break statements get executed? It is a Numerical Type Question (NAT).

```python {linenos=table,linenostart=1}
for i in range(10):
    for j in range(10):
        break
    break
```

---

{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**10**) What will be output if a negative value is given as input ?

Number of digits in `x`

Number of digits in `x` -1

Number of digits in `x` +1

Infinite loop
{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}

### Common data for the next 2 questions 🔗

Consider the following snippet of code.

```python {linenos=table,linenostart=1}
word = input()
valid = True
for i in range(len(word)):
    char = word[i]
    if i % 2 == 0 and char not in 'aeiou':
        valid = False
print(valid)
```

11) Select the inputs for which the output will be `True`.

```python {linenos=table,linenostart=1}
abet
```

```python {linenos=table,linenostart=1}
enamel
```

```python {linenos=table,linenostart=1}
eatery
```

```python {linenos=table,linenostart=1}
onetime
```

---

**12**) Assume that a ten letter word is passed as input to the code. If the output is True, then which of the following statements about the input word are true?

The word has exactly five vowels.

The word has have at least five vowels.

The letters at even indices are vowels. Assume that we use zero-based indexing.

Every vowel in the word appears only at even indices. Assume that we use zero-based indexing.

{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**13**) Select all the snippets that prints the sum of the first `n` odd numbers starting from 1(including). Assume `n` is a positive integer and is already defined.

Example n = 5 , output: 1+3+5+7+9 = 25

##### Options 

```python {linenos=table,linenostart=1}
result = 0
i = 0
while i<n:
    result+=2*i+1
    i+=1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
i = 1
while i<n:
    result+=2*i+1
    i+=1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
i = 1
while i<n:
    result+=2*i+1
    i+=1
result+=1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
i = 0
while i<n:
    if i%2 != 0:
      result+=2*i+1
      i+=1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
i = 0
while i<2*n+1:
    if i%2 != 0:
      result+=i
    i+=1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
i = 0
while i<2*n+1:
    if i%2 != 0:
      result+=i
      i+=1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
i = 0
while i<2*n+1:
    if i%2 != 0:
      result+=i
      i+=1
print(result)
```

{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**14**) Select all the snippets that prints the sum of the first `n` odd numbers starting from 1(including). Assume `n` is a positive integer and is already defined.

Example n = 5 , output: 1+3+5+7+9 = 25

##### Options

```python {linenos=table,linenostart=1}
result = 0
for i in range(n):
    result+=2*i+1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
for i in range(1,n+1):
    result+=2*i-1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
for i in range(1,n):
    result+=2*i+1
result+=1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
for i in range(1,n):
    result+=2*i+1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
for i in range(-1,-n-1,-1):
    result-=2*i+1
print(result)
```

```python {linenos=table,linenostart=1}
result = 0
for i in range(-1,-n):
    result-=2*i+1
print(result)
```

{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**15**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
value = 0
for i in range(n):
  num = int(input())
  if len(str(num))<2:
      value+= num
print(value)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above

{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**16**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
sentence = input()
for word in words.split():
    if 'a' in word:
        print(word*2)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**17**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
for i in range(n):
    print(int(input())*2)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**18**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
for i in range(n):
  num = int(input())
  if len(str(num))<2:
      print(num*2)
  else:
      print(num*3)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**19**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
value = None
for i in range(n):
  num = int(input())
  if len(str(num))<2:
      value = num
print(value)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**20**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
value = None
for i in range(n):
  num = int(input())
  if value is None:
      value = num
  elif num < value:
      value = num
print(value)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**21**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
value = None
for i in range(n):
  num = len(input())/2
  if value is None:
      value = num
  elif num < value:
      value = num
print(value)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**22**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
value = None
for i in range(n):
  num = len(input())
  if value is None:
      value = num
  elif num/2 < value:
      value = num
print(value)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**23**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
values = {}
for i in range(n):
  num = int(input())
  l = len(str(num))
  if l not in values:
      values[l] = set()
  values[l].add(num)
print(values)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**24**) Consider the following snippet of code.

```python {linenos=table,linenostart=1}
n = int(input())
for i in range(n):
  a = input()
  b = input()
  print(b)
  print(a)
```

Select all the data processing pattern(s) that the code implements. (MSQ)

Aggregation

Filtering

Mapping

None of the above
{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**25**) Consider the below python code.

```python {linenos=table,linenostart=1}
num = int(input())
i = -num
result = 0
while True:
    if i>5:
        break
    if i<-5:
        continue
    result += i
    i += 2
print(result)
```

Select all the possible outputs of the above code for any possible valid integer as input.

💡*Hint*: To solve this question you might want to try out with different values of num or automate that with another loop with different values for num. What range of values do you use for this automation?

0

1

2

3

4

5

6

7

8

9

{{</ border >}}

{{< border >}}

{{</ border >}}

{{< border type="question" >}}
**26**) Consider the below python code.

```python {linenos=table,linenostart=1}
num = int(input())
i = num
result = 0
while True:
    i -= 5
    if i>15:
        continue
    if i<-15:
        break
    result -= i
print(result)
```

Select all the possible outputs of the above code for any possible valid integer as input.

💡**Hint**: To solve this question you might want to try out with different values of num or automate that with another loop with different values for num. What range of values do you use for this automation?

-9

-7

-3

-2

1

3

4

5

8

9

{{</ border >}}

{{< border >}}

{{</ border >}}
