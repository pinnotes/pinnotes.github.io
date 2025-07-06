---
title: IIT M FOUNDATION ET1 EXAM QPF2 S2 30  
weight: 1
label: Apr 2023
categories:
- PYQ
---

---

## Mathematics for Data Science

**1. How many edges are there in a graph with 10 vertices each of degree 6?**
**Solution:**
Sum of degrees = 10 × 6 = 60.
Each edge is counted twice, so number of edges = 60 ÷ 2 = **30**[^1].

**2. What is the minimum number of colours required to colour the graph given below?**
**Solution:**
The answer is **3**. This is the chromatic number, meaning three colours are needed so that no two adjacent vertices share the same colour[^1].

**3. What is the weight of a minimum cost spanning tree of the given graph?**
**Solution:**
The answer is **23**. (The graph is not shown, but this is the provided correct value.)[^1]

**4. The function \$ f(x) = x^3 - 12x \$ has a:**

- Local maximum at \$ x = -2 \$
- Local minimum at \$ x = 2 \$

**Explanation:**
Find critical points: \$ f'(x) = 3x^2 - 12 = 0 \implies x^2 = 4 \implies x = -2, 2 \$
Second derivative: \$ f''(x) = 6x \$
At \$ x = -2 \$, \$ f''(-2) = -12 < 0 \$ ⇒ local maximum
At \$ x = 2 \$, \$ f''(2) = 12 > 0 \$ ⇒ local minimum[^1].

**5. Let \$ f \$ be differentiable at \$ x = 2 \$. The tangent at (2, 6) passes through (6, -18). What is \$ f'(2) \$?**
**Solution:**
Slope = \$ \frac{-18 - 6}{6 - 2} = \frac{-24}{4} = -6 \$
So, \$ f'(2) = -6 \$[^1].

**6. What is the minimum sum of three non-negative numbers whose product is 27?**
**Solution:**
Let the numbers be \$ a, b, c \geq 0 \$, \$ abc = 27 \$.
By AM-GM, minimum sum when \$ a = b = c = 3 \$.
Sum = \$ 3 + 3 + 3 = 9 \$[^1].

## Statistics for Data Science

**7. Sushant throws a die, then throws as many coins as the number on the die. If the die shows 5, what is the probability of getting exactly 3 heads?**
**Solution:**
Number of coins = 5.
Probability = \$ \binom{5}{3} \times (0.5)^3 \times (0.5)^2 = 10 \times 0.125 \times 0.25 = 0.3125 \$
So, the answer is about **0.313** (accept answers between 0.310 and 0.316)[^1].

**8. Expected number of people shortlisted if for every 5 interviewed, 1 is selected, and 20 people are interviewed?**
**Solution:**
Expected = \$ 20 \times \frac{1}{5} = 4 \$[^1].

**9. Suppose the lifetime of a radio is uniformly distributed between 100 to 120 weeks. What is the probability it lasts more than 115 weeks given it has already worked for 110 weeks?**
**Solution:**
Conditional probability = \$ \frac{120 - 115}{120 - 110} = \frac{5}{10} = 0.5 \$[^1].

**10. The number of customers arriving each day at a petrol pump is Poisson with mean 10. What is the probability that on a particular day, more than 3 customers arrive?**
**Solution:**
Probability = \$ 1 - P(at most 3) \$. For Poisson(10), \$ P(X \leq 3) \$ is very small, so \$ P(X > 3) \approx 1 \$.
Acceptable range: **0.96 to 1**[^1].

**11. Find the total numbers greater than 6000 that can be formed using the digits 0, 2, 3, 6, 9 without repetition.**
**Solution:**
Numbers must be 4 or 5 digits, starting with 6 or 9.
For 4-digit:

- First digit: 6 or 9 (2 choices), then choose 3 from 4 digits: \$ 4 \times 3 \times 2 = 24 \$ for each, total 48.
For 5-digit: All digits used, first digit can't be 0, so 4 choices (2, 3, 6, 9), but only 6 and 9 are >6000, so 2 choices, total \$ 4! = 24 \$ each, so 48.
Total = 48 + 96 = **144**[^1].


## Introduction to Python

**12. Which of the following code blocks prints the product of the digits for a given number?**
**Solution:**
The correct code block should:

- Initialize a variable (e.g., `prod = 1`)
- Loop through each digit of the number (using `while n > 0`)
- Multiply `prod` by `n % 10`
- Update `n = n // 10`
- Print `prod` at the end[^1].


## English

**13. Convert the following sentence into passive voice:**
"Inder stores grapes in this room."
**Solution:**
"Grapes are stored in this room by Inder."[^1]

**14. Choose the most grammatically correct sentence.**
**Solution:**
"Yesterday was quite an alarming day."[^1]

**15. What is the meaning of 'isolation'?**
**Solution:**
"The process or state of being lonely or alone."[^1]

**16. What is the antonym of the word 'common'?**
**Solution:**
"Rare"[^1]

## Computational Thinking

**17. In a dictionary D, which statement is true?**
**Solution:**

- `keys(D)` is a list of distinct elements.
- Value of a key in D can be another dictionary[^1].

**18. If a procedure returns a list of names of customers who have visited shop B, and each customer must be represented exactly once, what is a possible mistake?**
**Solution:**

- Incorrect initialization of the set/list to store unique names.
- Incorrect update condition.
- Incorrect update statement[^1].

These examples cover the main types of questions and solutions from the exam, explained for clarity and ease of understanding. For MCQs with only options and no context, only the correct answer is provided as per the answer key[^1].
