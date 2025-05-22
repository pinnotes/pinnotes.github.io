---
title: Week 7 - Sequence and Limits
tags: 
- mathematics
categories:
- graded assignment
image: /images/tree.jpg
excludeSearch: false
width: wide
---

<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# extract all questions and solution from this pdf

Here are all the questions and their solutions from the PDF "Week-7-Sequence-and-Limits.pdf"[^1]:

---

## 1. Multiple Choice/Statement Analysis

**Statements about sequences:**

1. **Statement:** If $\{a_n\}$ and $\{b_n\}$ are two sequences of real numbers, then $\{a_n + b_n\}$ is a convergent sequence.
    - **Counterexample:** Let $a_n = 1$ for all $n$, $b_n = -1$ for all $n$. Both converge, but $a_n + b_n = 0$ for all $n$, which is convergent. However, the PDF says "option 1 is not correct," which may refer to a different statement or a misinterpretation. The given explanation is not clear, but the PDF concludes: "Hence option 1 is not correct."
2. **Statement:** If $\{a_n\}$ is an increasing sequence, then $\{(-1)^n a_n\}$ is a decreasing sequence.
    - **Counterexample:** $a_n = n$ for all $n$. Then $\{(-1)^n a_n\}$ is not decreasing.
    - **Solution:** Hence option 2 is not correct.
3. **Statement:** If $\{a_n\} \to a$, $\{b_n\} \to b$, and both $a, b$ are non-zero, then $\{a_n b_n\} \to ab$ must be non-zero.
    - **Solution:** This is correct.
    - **Conclusion:** Option 3 is correct.
4. **Statement:** If $\{a_n\} \to a$ and $\{b_n\} \to a$, then $\{a_n - b_n\} \to 0$.
    - **Solution:** This is correct.
    - **Conclusion:** Option 4 is correct.
5. **Statement:** If a sequence is divergent, then any subsequence is also divergent.
    - **Counterexample:** Let $a_n = n$ if $n$ is odd, $a_n = 1$ if $n$ is even. $\{a_n\}$ is divergent, but $\{a_{2n}\}$ is constant and hence convergent.
    - **Conclusion:** Option 5 is not correct.

---

## 2. Function Type Matching

**Match the following functions to their types:**

- **i)** $f(x) = 3 \ln x - 2$
    - **Type:** Logarithmic function (d)
- **ii)** $f(x) = 10 - 4x$
    - **Type:** Linear function (c)
- **iii)** $f(x) = 2^x + 7$
    - **Type:** Exponential function (a)
- **iv)** $f(x) = x^2 - 4x + 4$
    - **Type:** Quadratic function (b)

---

## 3. Limit and Function Behavior

**Given a graph and options:**

- **Option 2:** $\lim_{x \to 0^+} f(x) = 0 = \lim_{x \to 0^-} f(x)$. Hence option 2 is correct.
- **Option 5:** At $x = \pi$ and $x = -\pi$ there are no sharp corners at the given curve. So, option 5 is correct.
- **Interval $[-0.5\pi, 0.5\pi]$:** The function is oscillatory (neither monotonically increasing nor monotonically decreasing).

---

## 4. Limit Calculations

- **a)** $\lim_{x \to 0} \frac{\log(1+x)}{\sin x} = 1$
- **b)** $\lim_{x \to 0} \frac{\sin 5x}{x} = 5$
- **c)** $\lim_{x \to 0} \frac{e^{x/2} - 1}{\sin 2x} = \frac{1}{4}$

---

## 5. Function Comparison

**Given $f(x) > g(x)$ for all $x \ge x_0$ and $f(x) \le g(x)$ for $x \le x_0$:**

- **Option 2:** $f(x)$ and $g(x)$ will never intersect for $x > x_0$ is incorrect, since $f(x_0) = g(x_0)$.
**Solution:** Option 2 is incorrect.

---

## 6. Sequence Limit

**Given:**

$$
a_n = \frac{12n^2}{3n+5} - \frac{4n^2 + 7}{n+3}
$$

**Simplify and find the limit as $n \to \infty$:**

$$
a_n = \frac{16n^2 - 21n - 35}{3n^2 + 14n + 15} \implies \lim_{n \to \infty} a_n = \frac{16}{3}
$$

---

## 7. Function Limit and Monotonicity

**Given:**

$$
R(w) = \frac{50e^w}{10 + e^w}
$$

- **Monotonicity:** $R(w)$ is increasing.
- **Limit as $w \to \infty$:** $R(w) \to 50$
- **Minimum $r \in \mathbb{Z}$ such that $R(w) < r$ for all $w$:** $r = 50$

---

## 8. Advanced Limit Calculation

**Given:**

$$
\lim_{n \to \infty} e \sqrt[n]{n!} \left[ \log(1 + \frac{6}{n}) - \frac{e^{1/n} - 1}{\sqrt[n]{(2\pi n)}} \right] = 5
$$

---

## 9. Curve Analysis

**Both curve 1 and curve 2 have sharp corners at the origin (0,0). Hence, at the origin these two curves do not have tangents at the origin.**

---

## 10. Sequence Sum and Limit

**Given:**

$$
a_n = \frac{9 + 15 + 21 + \dots + 3(2n-1)}{n^2}
$$

**Simplify and find the limit as $n \to \infty$:**

$$
a_n = \frac{3(n^2 - 1)}{n^2} = 3\left(1 - \frac{1}{n^2}\right) \implies \lim_{n \to \infty} a_n = 3
$$

---

## 11. Limit Involving Floor Function

**Given:**

$$
5 \lim_{x \to 3^+} [x] - 3 \lim_{x \to 1^-} [x]
$$

**Solution:**

$$
= 5 \times 3 - 3 \times 0 = 15
$$

---

## 12–14. Algorithm Error Estimation

**12. Error in estimation by Algorithm 1:**

$$
a_n = \frac{n^2 + 5n}{6n^2 + 1}, \quad \lim_{n \to \infty} a_n = \frac{1}{6} \approx 0.166
$$

**Error in estimation by Algorithm 2:**

$$
b_n = \frac{1}{8} + \frac{(-1)^n}{n}, \quad \lim_{n \to \infty} b_n = \frac{1}{8} = 0.125
$$

**Error in estimation by Algorithm 3:**

$$
c_n = \frac{e^n + 4}{7e^n}, \quad \lim_{n \to \infty} c_n = \frac{1}{7} \approx 0.143
$$

**Conclusion:**

- **Maximum error:** Algorithm 1
- **Minimum error:** Algorithm 2

**13. Error in estimation by new algorithm:**

$$
\lim (a_n - b_n) = \frac{1}{6} - \frac{1}{8} = \frac{1}{24}
$$

**The error in estimation using the new algorithm is less than the error in estimation using any of the Algorithm 1, Algorithm 2 and Algorithm 3.**

**14. Limit calculation:**

$$
c_n' = n e^{\frac{1}{8n}} - n
$$

$$
\lim_{n \to \infty} c_n' = \frac{1}{8} = 0.125
$$

---

This covers all questions and solutions from the PDF[^1].

<div style="text-align: center">⁂</div>

[^1]: Week-7-Sequence-and-Limits.pdf

[^2]: https://www.scribd.com/document/412243864/Chapter-1-Sequences-and-limits-pdf

[^3]: https://www.cimt.org.uk/projects/mepres/alevel/pure_ch13.pdf

[^4]: https://www.coursehero.com/file/70508664/Week-7-Workshop-Convergence-and-Divergence-of-Sequencespdf/

[^5]: https://www.math.columbia.edu/~ums/UMSProofsWeek4_2022.pdf

[^6]: https://www.nlpanthers.org/Downloads/chap122.pdf

[^7]: https://www.scribd.com/document/547511946/PRECAL-W7-9

[^8]: https://www.math.ucdavis.edu/~romik/teaching-pages/mat25-hw5solns.pdf

[^9]: https://personalpages.manchester.ac.uk/staff/mike.prest/SeqSerNotes1819.pdf

[^10]: https://www.lem.lu/pdf/trape/201920/STEVENS, Gabriel_(5C1)_SEQUENCES,%20THEIR%20APPLICATION%20AND%20USE%20IN%20THE%20FIELD%20OF%20MATHEMATICS.pdf

[^11]: https://math.mit.edu/~apm/ch03.pdf

