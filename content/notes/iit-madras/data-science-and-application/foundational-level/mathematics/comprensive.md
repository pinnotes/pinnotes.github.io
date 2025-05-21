---
title: Comprehensive Course on Sets and Functions
date: 2025-05-08
tags:
  - Notes 
  - IIT Madras
excludeSearch: false
weight: 1
---

## 1. Numbers and Basic Operations

<div style="background-color: #e6f7ff; padding: 15px; border-left: 5px solid #1890ff; margin-bottom: 20px;">
<strong>Definition: Natural Numbers (ℕ)</strong><br>
The set of counting numbers starting from 0.<br>
ℕ = {0, 1, 2, 3, 4, ...}
</div>
<div style="background-color: #e6f7ff; padding: 15px; border-left: 5px solid #1890ff; margin-bottom: 20px;">
<strong>Definition: Integers (ℤ)</strong><br>
All positive, negative whole numbers, and zero.<br>
ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}
</div>

### 1.1 Arithmetic Operations

<div style="background-color: #e6f7ff; padding: 15px; border-left: 5px solid #1890ff; margin-bottom: 20px;">
<strong>Definition: Basic Arithmetic Operations</strong>
<ul>
<li><strong>Addition (+)</strong>: Combining two or more numbers into a single number.</li>
<li><strong>Subtraction (-)</strong>: Finding the difference between two numbers.</li>
<li><strong>Multiplication (×)</strong>: Repeated addition of the same number.</li>
<li><strong>Division (÷)</strong>: Repeated subtraction or splitting into equal parts.</li>
<li><strong>Modulo (mod)</strong>: The remainder when one number is divided by another.</li>
</ul>
</div>
<div style="background-color: #fff8e6; padding: 15px; border-left: 5px solid #faad14; margin-bottom: 20px;">
<strong>Example: Arithmetic Operations</strong><br>
1. 5 + 2 = 7<br>
2. 9 - 4 = 5<br>
3. 3 × 4 = 12 (adding 3 four times)<br>
4. 18 ÷ 3 = 6 (dividing 18 into 3 equal parts)<br>
5. 10 mod 3 = 1 (when 10 is divided by 3, the remainder is 1)
</div>
<button type="button" class="collapsible">Practice Problems: Arithmetic Operations</button>

<div class="content">
<p><strong>Try These Problems:</strong></p>
<ol>
  <li>Calculate 15 mod 4.</li>
  <li>What is the result of 7 × 6?</li>
  <li>Simplify (8 + 2) × 3 - 6.</li>
</ol>

<p><strong>Solutions:</strong></p>
<ol>
  <li>15 mod 4 = 3 (since 15 = 3 × 4 + 3)</li>
  <li>7 × 6 = 42</li>
  <li>(8 + 2) × 3 - 6 = 10 × 3 - 6 = 30 - 6 = 24</li>
</ol>
</div>

### 1.2 Factors and Multiples

<div style="background-color: #e6f7ff; padding: 15px; border-left: 5px solid #1890ff; margin-bottom: 20px;">
<strong>Definition: Factors and Multiples</strong><br>
<ul>
<li>a is a factor of b if b mod a = 0.</li>
<li>b is a multiple of a.</li>
</ul>
</div>
<div style="background-color: #fff8e6; padding: 15px; border-left: 5px solid #faad14; margin-bottom: 20px;">
<strong>Example: Factors and Multiples</strong><br>
1. 2 is a factor of 6 (since 6 mod 2 = 0)<br>
2. 5 is a factor of 10 (since 10 mod 5 = 0)<br>
3. 12 is a multiple of 3 (since 12 = 3 × 4)
</div>

### 1.3 Rational and Real Numbers

<div style="background-color: #e6f7ff; padding: 15px; border-left: 5px solid #1890ff; margin-bottom: 20px;">
<strong>Definition: Rational Numbers (ℚ)</strong><br>
Numbers of the form $\frac{p}{q}$, where p, q ∈ ℤ and q ≠ 0.
</div>
<div style="background-color: #fff8e6; padding: 15px; border-left: 5px solid #faad14; margin-bottom: 20px;">
<strong>Example: Rational Numbers</strong><br>
1. $\frac{2}{5}$ is rational<br>
2. $\frac{10}{20} = \frac{1}{2}$ is rational (after reduction)<br>
3. 0.75 = $\frac{3}{4}$ is rational
</div>
<div style="background-color: #e6f7ff; padding: 15px; border-left: 5px solid #1890ff; margin-bottom: 20px;">
<strong>Definition: Irrational Numbers</strong><br>
Numbers that cannot be written as $\frac{p}{q}$ where p, q are integers.<br>
Examples: $\sqrt{2}$, π, e
</div>
<div style="background-color: #e6f7ff; padding: 15px; border-left: 5px solid #1890ff; margin-bottom: 20px;">
<strong>Definition: Real Numbers (ℝ)</strong><br>
The set of all rational and irrational numbers.
</div>

### 1.4 Greatest Common Divisor (GCD)

<div style="background-color: #e6f7ff; padding: 15px; border-left: 5px solid #1890ff; margin-bottom: 20px;">
<strong>Definition: Greatest Common Divisor</strong><br>
The GCD of two non-zero integers p and q is the largest positive integer that divides both p and q without a remainder.
</div>
<div style="background-color: #fff8e6; padding: 15px; border-left: 5px solid #faad14; margin-bottom: 20px;">
<strong>Example: Finding GCD</strong><br>
1. gcd(9, 12) = 3<br>
2. gcd(15, 45) = 15<br>
3. gcd(0, q) = q (for any non-zero integer q)<br>
4. gcd(1, q) = 1 (for any integer q)
</div>
<div style="background-color: #f0fff0; padding: 15px; border-left: 5px solid #52c41a; margin-bottom: 20px;">
<strong>Theorem: Euclidean Algorithm</strong><br>
To find gcd(a, b):<br>
1. If b = 0, then gcd(a, b) = |a|<br>
2. Otherwise, gcd(a, b) = gcd(b, a mod b)
</div>
<button type="button" class="collapsible">Practice Problems: GCD</button>

<div class="content">
<p><strong>Try These Problems:</strong></p>
<ol>
  <li>Find gcd(18, 24)</li>
  <li>Find gcd(35, 42)</li>
  <li>Find gcd(17, 23)</li>
</ol>

<p><strong>Solutions:</strong></p>
<ol>
  <li>gcd(18, 24) = 6</li>
  <li>gcd(35, 42) = 7</li>
  <li>gcd(17, 23) = 1 (17 and 23 are coprime)</li>
</ol>
</div>

## 2. Sets

### 2.1 Definition and Notation

<div style="background-color: #e6f7ff; padding: 15px; border-left: 5px solid #1890ff; margin-bottom: 20px;">
<strong>Definition: Set</strong><br>
A set is a collection of well-defined objects, called elements or members of the set.
</div>
<div style="background-color: #e6f7ff; padding: 15px; border-left: 5px solid #1890ff; margin-bottom: 20px;">
<strong>Set Notation:</strong>
<ul>
<li><strong>Roster Form</strong>: Listing all elements within curly braces.<br>
Example: A = {1, 2, 3, 4, 5}</li>
<li><strong>Set Builder Form</strong>: Describing elements that satisfy certain conditions.<br>
Example: B = {x | x is an even natural number less than 10}</li>
</ul>
</div>
<div style="background-color: #fff8e6; padding: 15px; border-left: 5px solid #faad14; margin-bottom: 20px;">
<strong>Example: Sets in Various Notations</strong><br>
1. The set of vowels in English: {a, e, i, o, u}<br>
2. The set of even natural numbers less than 10: {0, 2, 4, 6, 8}<br>
3. The set of perfect squares less than 30: {0, 1, 4, 9, 16, 25}
</div>

### 2.2 Cardinality

<div style="

<div style="text-align: center">⁂</div>

[^1]: M1_VOL1_SETS-FUNCTIONS.pdf

[^2]: https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch1.pdf

[^3]: https://byjus.com/maths/sets-questions/

[^4]: https://www.w3schools.com/howto/howto_js_collapsible.asp

[^5]: https://www.avepoint.com/blog/sharepoint-hybrid/sharepoint-site-ux

[^6]: https://byjus.com/maths/venn-diagrams/

[^7]: https://www.cuemath.com/learn/mathematics/functions-mapping-diagram/

[^8]: https://www.youtube.com/watch?v=WHfef-NghN8

[^9]: https://math4cs.university/notes/01-sets_relations_functions/

[^10]: https://testbook.com/objective-questions/mcq-on-set-theory-and-types-of-sets--5eea6a1439140f30f369f22a

[^11]: https://testbook.com/objective-questions/mcq-on-functions--5eea6a0a39140f30f369dc86

[^12]: https://byjus.com/maths/sets/

[^13]: https://www.uwindsor.ca/drupal/367/creating-collapsible-content

[^14]: https://www.cuemath.com/algebra/venn-diagram/

[^15]: https://www.learncbse.in/relationship-in-sets-using-venn-diagram/

[^16]: https://www.tutorialspoint.com/discrete_mathematics/discrete_mathematics_venn_diagrams_on_sets.htm

[^17]: https://www.youtube.com/watch?v=y6L1fQA5yc0

[^18]: https://byjus.com/jee/sets-relations-and-functions-previous-year-questions-with-solutions/

[^19]: https://www.youtube.com/watch?v=upt6qOXMSpY

[^20]: https://onlineexammaker.com/kb/30-user-interface-quiz-questions-and-answers/

[^21]: https://tentotwelvemath.com/interactive/interactive-math-quizzes/

[^22]: https://www.khanacademy.org/math/class-12-bridge/x09646558c1ff0797:set-theory/x09646558c1ff0797:functions/quiz/x09646558c1ff0797:set-theory-quiz-2

[^23]: https://ocw.mit.edu/courses/18-s996-category-theory-for-scientists-spring-2013/7cb36ef846a0cff84b34cda2e7742122_MIT18_S996S13_chapter2.pdf

[^24]: https://www.goclasses.in/courses/63f9aa9be4b0a8a370cfb0ad

[^25]: https://www.overleaf.com/learn/latex/Theorems_and_proofs

[^26]: https://www.youtube.com/watch?v=8iMIOH3-gXI

[^27]: https://www.cs.cornell.edu/~rafael/discmath.pdf

[^28]: https://dev.to/jordanfinners/creating-a-collapsible-section-with-nothing-but-html-4ip9

[^29]: https://support.microsoft.com/en-us/office/video-collapsible-headings-c7b03e92-a397-479d-b989-57393daf2d65

[^30]: https://sharepointmaven.com/how-to-create-an-faq-using-collapsible-sections-in-sharepoint-online/

[^31]: https://upesonline.ac.in/blog/ui-designer-interview-questions-with-answers

[^32]: https://www.portfoliobox.net/blog/set-up-an-faq-section-with-collapsible-answers-on-your-portfolio-website

[^33]: https://math.libretexts.org/Courses/Monroe_Community_College/MTH_220_Discrete_Math/6:_Relations/6.1:_Relations_on_Sets

[^34]: https://byjus.com/maths/relations-and-its-types/

[^35]: https://study.com/academy/lesson/how-to-use-and-draw-mapping-diagrams.html

[^36]: https://www.freeonlinetest.in/question-and-answer/aptitude/sets-and-functions

[^37]: https://www.selfstudys.com/mcq/jee/maths/online-test/chapter-1-sets-relations-and-functions

[^38]: https://gmstat.com/maths-pi/chapter-2/

[^39]: https://merithub.com/quiz/basic-structures-sets-functions-sequences-sums-and-matrices-c8td799nuvt3avnrjij0

[^40]: https://www.math10.com/tests/sets.html

[^41]: https://www.selfstudys.com/mcq/cbse/mock-test/class-11th/maths-chapter-1-sets

