---
title: IIT Madras BS Probability and Probability Distributions
date: 2025-05-08
math: true
tags:
  - Notes 
excludeSearch: false
weight: 1
cascade:
 series: ["English"]
 image: "/images/hello.jpg"

---
<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# explain this pdf course with exmaples , questions and their detailed solutions , with ease to understands and with better layout with all steps mentioned

Certainly! Below is a clear, step-by-step explanation of the **IIT Madras BS Probability and Probability Distributions** PDF course, with examples, questions, and detailed solutions for each major topic[^1]. The layout is designed for ease of understanding and covers all essential steps.

---

## 1. Data, Statistics, and Probability

**Key Concepts**

- **Experiment:** Any process or phenomenon studied statistically (e.g., tossing a coin, rolling a die).
- **Outcome:** Result of an experiment (e.g., "Heads", "1").
- **Sample Space:** Set of all possible outcomes (e.g., for a die: \$ S = \{1,2,3,4,5,6\} \$)[^1].

**Example**

- **Tossing a Coin:** \$ S = \{Heads, Tails\} \$
- **Rolling a Die:** \$ S = \{1,2,3,4,5,6\} \$

**Solved Example: Sample Space**

> **Q:** An urn contains 3 red, 3 blue, and 3 white marbles. If you draw one marble, what is the sample space?
>
> **A:** \$ S = \{red, blue, white\} \$

---

## 2. Events and Operations

- **Event:** Subset of the sample space (e.g., "even number" for a die).
- **Union (\$ A \cup B \$):** Outcomes in either A or B.
- **Intersection (\$ A \cap B \$):** Outcomes in both A and B.
- **Complement (\$ A^c \$):** Outcomes not in A.
- **Disjoint Events:** Events with no common outcomes.

**Solved Example: Union and Intersection**

> **Q:** For rolling a die, define \$ A = \$ even numbers, \$ B = \$ prime numbers. Find \$ A \cup B \$ and \$ A \cap B \$.
>
> **A:**
> - \$ A = \{2,4,6\} \$
> - \$ B = \{2,3,5\} \$
> - \$ A \cup B = \{2,3,4,5,6\} \$
> - \$ A \cap B = \{2\} \$

---

## 3. Probability Basics

- **Probability Function (\$ P \$):** Assigns to each event a number between 0 and 1.
- **Axioms:**
    - \$ P(S) = 1 \$
    - For disjoint events \$ E_1, E_2, ··· \$, \$ P(E_1 \cup E_2 \cup ···) = P(E_1) + P(E_2) + ··· \$

**Solved Example: Probability Function**

> **Q:** For a fair coin, define \$ P(Heads) = 0.5 \$, \$ P(Tails) = 0.5 \$. Does this satisfy axioms?
>
> **A:** Yes, because \$ P(S) = P(Heads) + P(Tails) = 1 \$.

---

## 4. Probability Distributions

- **Uniform Distribution:** All outcomes equally likely.
- **Probability of an event:** \$ P(A) = \frac{Number of outcomes in A}{Total outcomes} \$

**Solved Example: Uniform Distribution**

> **Q:** An urn has 5 red and 8 blue marbles. What is the probability of drawing a red marble?
>
> **A:**
> - Total marbles = 13
> - Red marbles = 5
> - \$ P(red) = \frac{5}{13} \$

---

## 5. Conditional Probability

- **Conditional Probability:** \$ P(A \mid B) = \frac{P(A \cap B)}{P(B)} \$
- **Multiplication Rule:** \$ P(A \cap B) = P(B) \cdot P(A \mid B) \$

**Solved Example: Conditional Probability**

> **Q:** A family has 2 children. At least one is a girl. What is the probability both are girls?
>
> **A:**
> - Sample space: \$ \{BB, BG, GB, GG\} \$
> - Given at least one girl: \$ \{BG, GB, GG\} \$
> - Both girls: \$ \{GG\} \$
> - \$ P(both girls \mid at least one girl) = \frac{1/4}{3/4} = \frac{1}{3} \$

---

## 6. Bayes' Theorem and Independence

- **Bayes' Theorem:** \$ P(B \mid A) = \frac{P(A \mid B) P(B)}{P(A)} \$
- **Independence:** \$ P(A \cap B) = P(A) P(B) \$

**Solved Example: Bayes' Theorem**

> **Q:** 1% of people have Swine Flu. Test is 95% accurate for those with Swine Flu and 2% false positive. A person tests positive. What is the probability they have Swine Flu?
>
> **A:**
> - \$ P(Disease) = 0.01 \$
> - \$ P(Positive \mid Disease) = 0.95 \$
> - \$ P(Positive \mid No Disease) = 0.02 \$
> - \$ P(Positive) = 0.01 \times 0.95 + 0.99 \times 0.02 = 0.0293 \$
> - \$ P(Disease \mid Positive) = \frac{0.01 \times 0.95}{0.0293} \approx 0.3242 \$

---

## 7. Repeated Independent Trials

### Bernoulli Distribution

- **Single Trial:** Success (1) with probability \$ p \$, failure (0) with \$ 1-p \$.
- **Repeated Trials:** \$ n \$ independent Bernoulli trials.

**Solved Example: Bernoulli Trials**

> **Q:** A fair coin is tossed 5 times. What is the probability of exactly 2 tails?
>
> **A:**
> - \$ n = 5 \$, \$ p = 0.5 \$
> - \$ P(2 tails) = \binom{5}{2} (0.5)^2 (0.5)^3 = 10 \times \frac{1}{32} = \frac{10}{32} \$

---

## 8. Binomial Distribution

- **Binomial PMF:** \$ P(X = k) = \binom{n}{k} p^k (1-p)^{n-k} \$
- **Example:** Number of heads in \$ n \$ coin tosses.

**Solved Example: Binomial Distribution**

> **Q:** A biased coin (\$ P(Head) = 0.3 \$) is tossed 10 times. What is the probability of exactly 3 heads?
>
> **A:**
> - \$ P(X = 3) = \binom{10}{3} (0.3)^3 (0.7)^7 \approx 0.2668 \$

---

## 9. Geometric Distribution

- **Geometric PMF:** \$ P(X = k) = (1-p)^{k-1} p \$
- **Example:** Number of trials until first success.

**Solved Example: Geometric Distribution**

> **Q:** In Ludo, roll a die until you get a 1. What is the probability you need fewer than 6 throws?
>
> **A:**
> - \$ p = \frac{1}{6} \$
> - \$ P(X < 6) = 1 - (1-p)^5 = 1 - \left(\frac{5}{6}\right)^5 \approx 0.5981 \$

---

## 10. Discrete Random Variables

- **Random Variable:** Function mapping outcomes to real numbers.
- **PMF:** \$ f_X(t) = P(X = t) \$

**Solved Example: PMF**

> **Q:** A fair coin is tossed 3 times. Let \$ X \$ be the number of heads. Find the PMF.
>
> **A:**
> - \$ X \$ can be 0, 1, 2, or 3.
> - \$ P(X=0) = \frac{1}{8} \$
> - \$ P(X=1) = \frac{3}{8} \$
> - \$ P(X=2) = \frac{3}{8} \$
> - \$ P(X=3) = \frac{1}{8} \$

---

## 11. Common Discrete Distributions

| Distribution | PMF Formula | Example Usage |
| :-- | :-- | :-- |
| Uniform | \$ \frac{1}{ | S |
| Bernoulli | \$ p^k (1-p)^{1-k} \$ | Single coin toss |
| Binomial | \$ \binom{n}{k} p^k (1-p)^{n-k} \$ | Multiple coin tosses |
| Geometric | \$ (1-p)^{k-1} p \$ | Trials until first success |
| Poisson | \$ e^{-\lambda} \frac{\lambda^k}{k!} \$ | Rare events over time |
| Hypergeometric | \$ \frac{\binom{r}{k} \binom{N-r}{m-k}}{\binom{N}{m}} \$ | Sampling without replacement |


---

## 12. Functions of Random Variables

- **Function of RV:** \$ Y = g(X) \$
- **PMF of \$ Y \$:** \$ f_Y(a) = \sum_{t: g(t)=a} f_X(t) \$

**Solved Example: Function of RV**

> **Q:** \$ X \sim Uniform\{-2, -1, 0, 1, 2\} \$. Let \$ g(X) = X^2 \$. Find the PMF of \$ g(X) \$.
>
> **A:**
> - \$ g(X) \$ can be 0, 1, or 4.
> - \$ f_{g(X)}(0) = P(X=0) = \frac{1}{5} \$
> - \$ f_{g(X)}(1) = P(X=-1) + P(X=1) = \frac{2}{5} \$
> - \$ f_{g(X)}(4) = P(X=-2) + P(X=2) = \frac{2}{5} \$

---

## Summary Table

| Topic | Example/Formula | Solution/Explanation |
| :-- | :-- | :-- |
| Sample Space | Die: \$ \{1,2,3,4,5,6\} \$ | All possible outcomes |
| Union/Intersection | \$ A \cup B \$, \$ A \cap B \$ | Set operations |
| Uniform Distribution | \$ P(A) = \frac{ | A |
| Conditional Probability | \$ P(A \mid B) \$ | Probability given event |
| Bayes' Theorem | \$ P(B \mid A) \$ | Updates probability |
| Binomial Distribution | \$ \binom{n}{k} p^k (1-p)^{n-k} \$ | Count of successes |
| Geometric Distribution | \$ (1-p)^{k-1} p \$ | Trials until first success |
| PMF of RV | \$ f_X(t) = P(X = t) \$ | Probability for each value |


---

This layout and step-by-step approach make the concepts and calculations clear and easy to follow, with all steps and reasoning included for each example and question[^1].

<div style="text-align: center">⁂</div>

[^1]: S1_VOL2_PROBABILITYDISTRIBUTIONS.pdf

