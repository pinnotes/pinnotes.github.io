---
title: Week 7 Practice Assignment Solution
weight: 7
tags: 
- Mathematics
- Mathematics for Data Science - 1
- Practice Assignment
- Week-7
categories:
- Mathematics Practice Assignment
series:
- Mathematics Practice Assignment
---

Below are all the questions and their solutions extracted from the provided PDF: **Week-7-practice-assignment-solution.pdf**[^1].

---

## **Question 1: Function Behavior from Graph**

**Statement:**
From the graph, clearly the values of the function tend to 0 as \$ x \$ tends to \$ \infty \$. The graph is smooth (no sharp edges or sharp turns) and so the graph has a unique tangent at all points (at \$ x = 1 \$ and \$ x = -1 \$ too). The function values are decreasing (slope of the curve is negative) in $[-0.5, 0]$ (Option 7).

**Solution:**
Based on the graph description:

- **Option 2:** Values tend to 0 as \$ x \to \infty \$.
- **Option 5:** Graph is smooth and has a unique tangent at all points.
- **Option 7:** Function is decreasing in $[-0.5, 0]$ (slope is negative).

---

## **Question 2: Convergence of Sequences**

**Statement:**
Statement 1: If $\{a_n\}$ converges to $a$ and $\{b_n\}$ converges to $b$, then $\{a_n b_n\}$ converges to $ab$.
Statement 2: If $a_n = (-1)^n$, $b_n = (-2)^n$, then $\{a_n\}$ and $\{b_n\}$ do not converge. But $\{a_n b_n^3\} = \{(-1)^n (-2)^{3n}\} = \{8^n\}$, which diverges. (Note: The original statement appears to have a typo or error in interpretation.)
Statement 3: $\lim a_n = \lim C = C$ where $C$ is a constant.

**Solution:**

- **Statement 1:** True.
- **Statement 2:** False as written, but the intended logic is unclear; $\{a_n b_n^3\}$ actually diverges, not converges to 2.
- **Statement 3:** True.

**Final Answer (as per PDF):**
All 3 statements are true (but this may be a misprint or error in the PDF, as Statement 2 is not true as written).

---

## **Question 3: Subsequences and Limits**

**Statement:**
Note that $\left\{\frac{2n+1}{(2n+1)!}\right\}$ and $\left\{\left(\frac{3n}{2n+1}\right)\right\}$ are subsequences of $\{c_n\}$ and hence have the same limit as $\{a_n\}$.

**Solution:**

$$
\lim_{n \to \infty} \frac{2n+1}{(2n+1)!} = 0
$$

$$
\lim_{n \to \infty} \frac{3n}{2n+1} = \frac{3}{2}
$$

**But the PDF suggests:**
$\lim c_n = 1$ (this may refer to a different sequence or context; the answer is unclear from the given text).

---

## **Question 4: Subsequence Identification**

**Statement:**
$a_n = \frac{1}{n}$ is a subsequence of $\{ \ldots \}$. Only one sequence is a subsequence of $\{ \ldots \}$. $c_n = 0$ cannot be a subsequence of $\{ \ldots \}$.

**Solution:**
The question is unclear, but the main point is that only one of the given sequences can be a subsequence of another given sequence.

---

## **Question 5: Limit of Sequence**

**Statement:**
$a_n = \frac{n}{n} = 1$ converges to 1.
$b_n = n^2 + 5n - 1$

$$
\lim_{n \to \infty} b_n = \infty
$$

But the PDF states:

$$
\lim_{n \to \infty} (n^2 + 5n - 1) = \lim_{n \to \infty} (n^2 + 5n^2 - 1) \quad (\text{incorrect simplification})
$$

and then gives a wrong calculation:

$$
= (1^3 + 5(1) - 1) = 5
$$

**This is incorrect.**
**Correct answer:**
$\lim_{n \to \infty} (n^2 + 5n - 1) = \infty$

---

## **Question 6: Limits of Sequences**

**Statement:**
$a_n = \frac{2n+1}{3n+2}$

$$
\lim a_n = \lim_{n \to \infty} \frac{2n+1}{3n+2} = \frac{2}{3}
$$

$b_n = 27a_n + 9a_n + \frac{2n^2}{n^3+1} \quad (\text{unclear expression})$
**PDF states:**

$$
\lim b_n = 27(\frac{2}{3}) + 9(\frac{2}{3}) + 0 = 18 + 6 + 0 = 24
$$

But the calculation is inconsistent with the expression.
**Likely intended:**
If $b_n = 27a_n + 9a_n + \frac{2n^2}{n^3+1}$, then

$$
\lim b_n = 27 \times \frac{2}{3} + 9 \times \frac{2}{3} + 0 = 18 + 6 + 0 = 24
$$

But the PDF says the answer is 18, which does not match.

---

## **Question 7: Unique Tangent Condition**

**Statement:**
If there is no sharp turn at $a$, then the graph has a unique tangent at $a$. Curves 1, 3, and 4 have sharp turns at 0 (Curve 4 has a jump at 0). Hence these three curves do not have a unique tangent at 0.

**Solution:**
Only curves without sharp turns or jumps have a unique tangent at 0.

---

## **Question 8: Cost Calculation**

**Statement:**
$P_1(2.6) = (100 \times 2) + 200 = 400$
$P_2(2.6) = (100 \times 3) + 200 = 500$
$P_3(2.6) = (100 \times 2.6) + 200 = 460$
The lowest cost is Rs 400 by availing scheme A.

**Solution:**
Lowest cost is Rs 400 (Scheme A).

---

## **Question 9: Cost Schemes and Tangents**

**Statement:**
Scheme A, B, C costs are shown. Clearly, tangents of $p_1(t)$ and $p_2(t)$ do not exist at $t = 1, 2, 3, \ldots$ (jumps). Tangent exists for all values of $t$ for $p_3(t)$.

**Solution:**
Options 1, 2, 4 are right (tangents do not exist at jumps, exist for all $t$ for $p_3(t)$).

---

## **Question 10: Piecewise Function**

**Statement:**
Figure 2: $p_3(0) = 200$, $p_3(0.5) = 300$, etc. (No question is explicitly asked here.)

**Solution:**
No explicit question or solution is provided for this.

---

## **Summary Table**

| Question | Statement/Context | Solution/Answer |
| :-- | :-- | :-- |
| 1 | Graph behavior | Options 2,5,7 |
| 2 | Sequence convergence | All statements true (likely error in Statement 2) |
| 3 | Subsequence limit | Unclear, likely 1 |
| 4 | Subsequence | Only one is a subsequence |
| 5 | Sequence limit | $a_n \to 1$, $b_n \to \infty$ (PDF has error) |
| 6 | Sequence limits | $a_n \to \frac{2}{3}$, $b_n \to 24$ (PDF: 18, error) |
| 7 | Unique tangent | Only smooth curves have unique tangent |
| 8 | Cost calculation | Lowest cost: Rs 400 (Scheme A) |
| 9 | Cost schemes | Options 1,2,4 right |
| 10 | Piecewise function | No explicit question |


---

**Note:**
Some questions and solutions are ambiguous or contain errors as per the PDF text. The above is a faithful extraction based on the provided content[^1].
There are no further explicit questions or solutions in the document beyond what is listed.

<div style="text-align: center">⁂</div>

[^1]: Week-7-practice-assignment-solution.pdf

[^2]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/programming-and-data-science/week-7-ct-ct-week-7-ga-solutions/67414512

[^3]: https://gradedassignments.github.io/ct-week-7-graded-assignments-iit-madras/

[^4]: https://gradedassignments.github.io/maths-week-7-graded-assignments-iit-madras/

[^5]: https://www.youtube.com/watch?v=Hh_rNmrNmss

[^6]: https://www.studocu.com/in/document/indian-institute-of-technology-madras/iitm-online-degree-data-science-and-programming/stats-1-week-7-graded-assignment/79021396

[^7]: https://www.scribd.com/document/521433915/ASSIGNMENT-SOLUTION-WEEK7

[^8]: https://archive.nptel.ac.in/content/storage2/courses/downloads_new/109103101/Answers%20Week%207.pdf

[^9]: https://www.youtube.com/watch?v=dXPad95X-OA

[^10]: https://www.scribd.com/document/665102324/Week-7-Graded-Assignment-Solution

[^11]: https://archive.nptel.ac.in/content/storage2/courses/downloads_new/106105165/noc19-cs72_Assignment_Week_07.pdf

