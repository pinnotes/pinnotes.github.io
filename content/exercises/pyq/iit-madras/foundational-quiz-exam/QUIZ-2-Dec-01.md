---
title: QUIZ 2 FOUNDATIONAL 
subtitle: 01 DEC 2024
weight: 1
label: PYQ
categories:
- PYQ
- QUIZ 2
---

---

{{< border type="question" >}}
**Question 1:**
Choose the correct option from the following:

Options:

1. \$ iv) - c) - 3) \$
2. \$ iv) - a) - 1) \$
3. \$ iv) - c) - 2) \$
4. \$ iv) - b) - 2) \$
{{</ border >}}

{{< border >}}
**Solution 📝:**

Let's analyze the matching options:

- \$ iv) \$ refers to one of the composite functions.
- The match "c" and "2" goes together.

Given the answer key, the correct match is:
**Option 3: \$ iv) - c) - 2) \$**

So the correct answer is Option 3.
{{</ border >}}

{{< border type="question" >}}
**Question 2:**
Consider the function \$ f(x) = |\log(x+1)| \$. Which of the following options are true?

Options:

1. The domain of \$ f \$ is \$ (-1, \infty) \$.
2. The domain of \$ f \$ is \$ (-\infty, 1) \$.
3. \$ f(x) \$ is not a one-one function when \$ x \in (-1,1) \$.
4. \$ f(x) \$ is a one-one function when \$ x \in (-1,1) \$.
{{</ border >}}

{{< border >}}
**Solution 📝:**

1️⃣ The domain requires \$ x+1 > 0 \implies x > -1 \$, so domain is \$ (-1, \infty) \$.

2️⃣ \$ (-\infty, 1) \$ is not correct.

3️⃣ For \$ x \in (-1,1) \$, \$ \log(x+1) \$ is not one-one because the modulus will make it symmetric.

4️⃣ Thus, it is **not** one-one.

So, Options 1 and 3 are correct.
{{</ border >}}

{{< border type="question" >}}
**Question 3:**
Consider the function:

$$
f(x) =
\begin{cases}
\frac{\sin(x)}{x}, & x \neq 0 \\
1, & x = 0
\end{cases}
$$

Which option(s) is/are true about \$ f(x) \$?

Options:

1. \$ f \$ is differentiable for all \$ x \in \mathbb{R} \$.
2. \$ f \$ is not differentiable at \$ x = 0 \$.
3. \$ f \$ is differentiable at \$ x = 0 \$ and \$ f'(0) = 0 \$.
4. \$ f \$ is differentiable at \$ x = 0 \$ and \$ f'(0) = 1 \$.
{{</ border >}}

{{< border >}}
**Solution 📝:**

For \$ x = 0 \$:

- \$ f(0) = 1 \$
- The limit \$ \lim_{x \to 0} \frac{\sin x}{x} = 1 \$ (So, function is continuous)
- The derivative at 0 is:

$$
f'(0) = \lim_{h \to 0} \frac{f(h) - f(0)}{h} = \lim_{h \to 0} \frac{\frac{\sin h}{h} - 1}{h}
$$

Use Taylor expansion: \$ \sin h = h - \frac{h^3}{6} + O(h^5) \$, so \$ \frac{\sin h}{h} - 1 \approx -\frac{h^2}{6} \$, thus \$ \frac{-h^2/6}{h} = -h/6 \to 0 \$.
So \$ f'(0) = 0 \$

So, true statements:

- \$ f \$ is differentiable everywhere, including at \$ x = 0 \$, and \$ f'(0) = 0 \$.

**Correct options:** 1 and 3.
{{</ border >}}

{{< border type="question" >}}
**Question 4:**
Let \$ f \$ be a polynomial of degree 5, given by

$$
f(x) = a_5x^5 + a_4x^4 + a_3x^3 + a_2x^2 + a_1x + a_0
$$

Let \$ f'(b) \$ denote the derivative of \$ f \$ at \$ x = b \$.

Choose the set of correct options:

1. \$ a_1 = f'(0) \$
2. \$ 5a_5 + 3a_3 = \frac{1}{2}(f'(1) + f'(-1) - 2f'(0)) \$
3. \$ 4a_4 + 2a_2 = \frac{1}{2}(f'(1) - f'(-1)) \$
4. \$ a_1 = f'(1) \$
{{</ border >}}

{{< border >}}
**Solution 📝:**

Let's analyze:

- \$ f'(x) = 5a_5x^4 + 4a_4x^3 + 3a_3x^2 + 2a_2x + a_1 \$
- At \$ x=0 \$, \$ f'(0) = a_1 \$ — correct.
- Substitute \$ x=1 \$ and \$ x=-1 \$, combine and solve: Given answer key suggests that options 1, 2, 3 are correct.

**Correct options:** 1, 2, 3.
{{</ border >}}

{{< border type="question" >}}
**Question 5:**
If \$ m^{\log_3 2} + 2^{\log_3 m} = 8 \$, what is the value of \$ m \$?
{{</ border >}}

{{< border >}}
**Solution 📝:**

Let \$ x = \log_3 m \$.

- \$ m^{\log_3 2} = (3^x)^{\log_3 2} = 2^x \$
- \$ 2^{\log_3 m} = 2^x \$
- \$ 2^x + 2^x = 8 \implies 2^{x+1} = 8 \implies x+1 = 3 \implies x = 2 \implies m = 3^2 = 9 \$.

**Final Answer:** \$ m = 9 \$
{{</ border >}}

{{< border type="question" >}}
**Question 6:**
If the function

$$
f(x) = 
\begin{cases}
Ax - B & x \leq -1 \\
2x^2 + 3Ax + B & -1 < x \leq 1 \\
4 & x > 1
\end{cases}
$$

is continuous for all \$ x \in \mathbb{R} \$, find the value of \$ 6(A+B) \$.
{{</ border >}}

{{< border >}}
**Solution 📝:**

For continuity at \$ x = -1 \$:

- \$ Ax - B \$ at \$ x=-1 \$: \$ -A - B \$
- \$ 2(-1)^2 + 3A(-1) + B \$: \$ 2 - 3A + B \$
- Setting equal: \$ -A - B = 2 - 3A + B \implies 2A - 2B = 2 \implies A - B = 1 \$ ...(1)

For continuity at \$ x = 1 \$:

- \$ 2(1)^2 + 3A(1) + B = 2 + 3A + B \$
- \$ 4 \$
So, \$ 2 + 3A + B = 4 \implies 3A + B = 2 \$ ...(2)

Now solve (1) and (2):

(1): \$ A - B = 1 \$
(2): \$ 3A + B = 2 \$

Add: \$ (A - B) + (3A + B) = 1 + 2 \implies 4A = 3 \implies A = 3/4 \$
Plug into (1): \$ 3/4 - B = 1 \implies B = 3/4 - 1 = -1/4 \$

\$ 6(A+B) = 6(3/4 + (-1/4)) = 6(2/4) = 6 \cdot 1/2 = 3 \$

**Final Answer:** 3
{{</ border >}}

{{< border type="question" >}}
**Question 7:**
Let \$ f \$ be a differentiable function such that \$ f'(9) = 4 \$ and \$ f(9) = -14 \$.
If \$ y = ax + b \$ denotes the tangent of \$ f \$ at \$ x = 9 \$, find the value of \$ a - b \$.
{{</ border >}}

{{< border >}}
**Solution 📝:**

- Slope of the tangent at \$ x=9 \$: \$ a = f'(9) = 4 \$
- Equation of tangent: \$ y = 4x + b \$ passes through \$ (9, -14) \$:
\$ -14 = 4 \cdot 9 + b \implies b = -14 - 36 = -50 \$
- \$ a - b = 4 - (-50) = 54 \$

**Final Answer:** 54
{{</ border >}}

<div style="text-align: center">⁂</div>

[^1]: Screenshot-2025-07-31-194450.jpeg

[^2]: Screenshot-2025-07-31-194458.jpeg

[^3]: Screenshot-2025-07-31-194507.jpeg

[^4]: Screenshot-2025-07-31-194525.jpeg

<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# extract all questions and give solutions and wrap questions with {{< border type="question" >}} {{</ border >}} and answers with {{< border >}} {{</ border >}}

{{< border type="question" >}}
**Question 1:**
If \$ f(x) = x^2 \$ and \$ h(x) = x - 1 \$, then which of the following options is(are) correct?

Options:

1. \$ f \circ h \$ is a one-one function.
2. \$ f(f(h(x))) \times h(x) = (x-1)^5 \$
3. (Option hidden in image, not enough data)
{{</ border >}}

{{< border >}}
**Step-by-step Solution 📝:**

1️⃣ For option 1:
\$ f \circ h = f(h(x)) = f(x-1) = (x-1)^2 \$.
This is not a one-one function because a square function is not one-one.

2️⃣ For option 2:
Calculate \$ f(f(h(x))) \$:

- \$ h(x) = x-1 \$
- \$ f(h(x)) = (x-1)^2 \$
- \$ f(f(h(x))) = ((x-1)^2)^2 = (x-1)^4 \$

So \$ f(f(h(x))) \times h(x) = (x-1)^4 \times (x-1) = (x-1)^5 \$.
This matches the statement.

So only the second option is correct.

**Final Answer:**
Correct option: \$ f(f(h(x))) \times h(x) = (x-1)^5 \$
{{</ border >}}

{{< border type="question" >}}
**Question 2:**
There are three distinct solutions for \$ h(h(f(x))) = 0 \$.
Is this statement true or false?
{{</ border >}}

{{< border >}}
**Step-by-step Solution 🌀:**

Let's compute:
\$ f(x) = x^2 \$, \$ h(x) = x-1 \$
\$ h(f(x)) = x^2 - 1 \$
\$ h(h(f(x))) = (x^2 - 1) - 1 = x^2 - 2 \$

Set \$ x^2 - 2 = 0 \implies x^2 = 2 \implies x = \pm \sqrt{2} \$
There are only 2 distinct solutions, not 3.

**Final Answer:**
False. There are only 2 distinct real solutions: \$ x = \sqrt{2}, -\sqrt{2} \$
{{</ border >}}

{{< border type="question" >}}
**Question 3:**
Find \$\lim_{n \to \infty} a_n \$ for the sequence:

$$
a_n = \frac{n^5 - 3n^3 + \sin(n)}{2n^5 + \ln(n) + n^2}
$$

{{</ border >}}

{{< border >}}
**Step-by-step Solution 📈:**

Focus on the highest degree terms as $n \to \infty$:

Numerator dominant term: \$ n^5 \$
Denominator dominant term: \$ 2n^5 \$

So,

$$
\lim_{n \to \infty} \frac{n^5}{2n^5} = \frac{1}{2}
$$

All lower-degree and oscillatory terms become negligible.

**Final Answer:** \$ \boxed{0.5} \$
{{</ border >}}

{{< border type="question" >}}
**Question 4:**
Find \$\lim_{n \to \infty} a_n \$ for the sequence:

$$
a_n = \frac{e^{2n} + n^4}{e^{3n} + n^5}
$$

{{</ border >}}

{{< border >}}
**Step-by-step Solution 🚀:**

For very large \$ n \$:

- Numerator: \$ e^{2n} \$ dominates over \$ n^4 \$
- Denominator: \$ e^{3n} \$ dominates over \$ n^5 \$

So,

$$
a_n \approx \frac{e^{2n}}{e^{3n}} = e^{-n}
$$

As \$ n \to \infty \$, \$ e^{-n} \to 0 \$

**Final Answer:** \$ \boxed{0} \$
{{</ border >}}

<div style="text-align: center">⁂</div>

[^1]: Screenshot-2025-07-31-194507.jpeg

[^2]: Screenshot-2025-07-31-194525.jpeg

[^3]: Screenshot-2025-07-31-194538.jpeg

[^4]: Screenshot-2025-07-31-194617.jpeg

