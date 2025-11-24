---
title: Cramer's Rule is a fundamental algorithm in linear algebra
date: 2025-11-24
image: "https://pbs.twimg.com/media/G54ixwBWIAAjioi.jpg"
authors:
  - name: Aryan
    link: https://github.com/simplearyan
    image: https://github.com/simplearyan.png
tags:
  - Linear Algebra
  - Mathematics
width: wide
---

Cramer's Rule is a fundamental algorithm in linear algebra designed specifically to **find the unique solution of a system of linear equations**. It leverages the concept of determinants to solve for each variable individually.

The material is presented clearly, drawing on the provided sources, including specific examples for $2 \times 2$ and $3 \times 3$ systems.

### 1. Explanation of Cramer's Rule

Cramer’s Rule can only be applied to a system of linear equations that has a unique solution. For this rule to be applicable, two critical conditions regarding the matrix representation $Ax=b$ must be met:

1.  The **coefficient matrix ($A$)** must be a **square matrix** (meaning the number of equations equals the number of variables).
2.  The **determinant of the coefficient matrix ($\det(A)$)** must be **non-zero** ($\det(A) \neq 0$), which means the matrix $A$ is invertible.

If these conditions are satisfied, the value of the $i$-th unknown variable, $x_i$, is calculated using the following formula:

$$\mathbf{x_i = \frac{det(A_{x_i})}{det(A)}}$$

Where:
*   $A$ is the coefficient matrix of the system.
*   $\det(A)$ is the determinant of the coefficient matrix.
*   $A_{x_i}$ (or $A_i$) is the matrix obtained by **replacing the $i$-th column of $A$ with the column vector $b$** (the vector of constants on the right side of the equations).

### 2. Cramer's Rule for Order 2 (2x2 Systems)

Consider the system of two linear equations with two variables:
$$a_{11}x_1 + a_{12}x_2 = b_1$$
$$a_{21}x_1 + a_{22}x_2 = b_2$$

The matrix representation is $Ax = b$, where:
$$A = \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix}, \quad x = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}, \quad b = \begin{bmatrix} b_1 \\ b_2 \end{bmatrix}$$

**Step-by-step Process:**

1.  **Calculate $\det(A)$:** $\det(A) = a_{11}a_{22} - a_{12}a_{21}$.
2.  **Define $A_{x_1}$ and $\det(A_{x_1})$:** Replace the first column of $A$ with $b$:
    $$A_{x_1} = \begin{bmatrix} b_1 & a_{12} \\ b_2 & a_{22} \end{bmatrix} \implies \det(A_{x_1}) = b_1a_{22} - b_2a_{12}$$
3.  **Define $A_{x_2}$ and $\det(A_{x_2})$:** Replace the second column of $A$ with $b$:
    $$A_{x_2} = \begin{bmatrix} a_{11} & b_1 \\ a_{21} & b_2 \end{bmatrix} \implies \det(A_{x_2}) = b_2a_{11} - b_1a_{21}$$
4.  **Find the Solution:**
    $$x_1 = \frac{\det(A_{x_1})}{\det(A)} \quad \text{and} \quad x_2 = \frac{\det(A_{x_2})}{\det(A)}$$

#### Example 2.4.1 (Order 2 System)

**Question:** Find the solution of the system of linear equations:
$$2x_1 + x_2 = 1$$
$$3x_1 + 4x_2 = -1$$

**Solution:**

The coefficient matrix $A$ and vector $b$ are:
$$A = \begin{bmatrix} 2 & 1 \\ 3 & 4 \end{bmatrix}, \quad b = \begin{bmatrix} 1 \\ -1 \end{bmatrix}$$

1.  **Calculate $\det(A)$:**
    $$\det(A) = (2)(4) - (1)(3) = 8 - 3 = \mathbf{5}$$

2.  **Calculate $\det(A_{x_1})$:** Replace column 1 of $A$ with $b$:
    $$A_{x_1} = \begin{bmatrix} 1 & 1 \\ -1 & 4 \end{bmatrix}$$
    $$\det(A_{x_1}) = (1)(4) - (1)(-1) = 4 + 1 = \mathbf{5}$$

3.  **Calculate $\det(A_{x_2})$:** Replace column 2 of $A$ with $b$:
    $$A_{x_2} = \begin{bmatrix} 2 & 1 \\ 3 & -1 \end{bmatrix}$$
    $$\det(A_{x_2}) = (2)(-1) - (3)(1) = -2 - 3 = \mathbf{-5}$$

4.  **Find the Solution ($x_1, x_2$):**
    $$x_1 = \frac{\det(A_{x_1})}{\det(A)} = \frac{5}{5} = \mathbf{1}$$
    $$x_2 = \frac{\det(A_{x_2})}{\det(A)} = \frac{-5}{5} = \mathbf{-1}$$

The solution is $(x_1, x_2) = (1, -1)$.

### 3. Cramer's Rule for Order 3 (3x3 Systems)

Consider the system of three linear equations with three variables:
$$a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = b_1$$
$$a_{21}x_1 + a_{22}x_2 + a_{23}x_3 = b_2$$
$$a_{31}x_1 + a_{32}x_2 + a_{33}x_3 = b_3$$

The coefficient matrix $A$ and the vector $b$ are:
$$A = \begin{bmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{bmatrix}, \quad b = \begin{bmatrix} b_1 \\ b_2 \\ b_3 \end{bmatrix}$$

1.  **Calculate $\det(A)$.**
2.  **Construct $A_{x_1}$, $A_{x_2}$, and $A_{x_3}$** by replacing columns 1, 2, and 3 of $A$ respectively with $b$.
    $$A_{x_1} = \begin{bmatrix} \mathbf{b_1} & a_{12} & a_{13} \\ \mathbf{b_2} & a_{22} & a_{23} \\ \mathbf{b_3} & a_{32} & a_{33} \end{bmatrix}, \quad A_{x_2} = \begin{bmatrix} a_{11} & \mathbf{b_1} & a_{13} \\ a_{21} & \mathbf{b_2} & a_{23} \\ a_{31} & \mathbf{b_3} & a_{33} \end{bmatrix}, \quad A_{x_3} = \begin{bmatrix} a_{11} & a_{12} & \mathbf{b_1} \\ a_{21} & a_{22} & \mathbf{b_2} \\ a_{31} & a_{32} & \mathbf{b_3} \end{bmatrix}$$
3.  **Calculate the corresponding determinants** $\det(A_{x_1})$, $\det(A_{x_2})$, and $\det(A_{x_3})$.
4.  **Find the Solution:**
    $$x_1 = \frac{\det(A_{x_1})}{\det(A)}, \quad x_2 = \frac{\det(A_{x_2})}{\det(A)}, \quad x_3 = \frac{\det(A_{x_3})}{\det(A)}$$

#### Example 2.4.2 (Order 3 System)

**Question:** Find the solution of the system of linear equations:
$$x_1 - x_2 + x_3 = 1$$
$$2x_1 + x_2 - 2x_3 = -1$$
$$-x_1 - 2x_2 + 4x_3 = 1$$

**Solution:**

The coefficient matrix $A$ and vector $b$ are:
$$A = \begin{bmatrix} 1 & -1 & 1 \\ 2 & 1 & -2 \\ -1 & -2 & 4 \end{bmatrix}, \quad b = \begin{bmatrix} 1 \\ -1 \\ 1 \end{bmatrix}$$

1.  **Calculate $\det(A)$:**
    The determinant of $A$ is given as $\mathbf{\det(A) = 3}$.

2.  **Calculate Determinants of $A_{x_i}$:**
    $$A_{x_1} = \begin{bmatrix} \mathbf{1} & -1 & 1 \\ \mathbf{-1} & 1 & -2 \\ \mathbf{1} & -2 & 4 \end{bmatrix} \implies \det(A_{x_1}) = \mathbf{-1}$$
    $$A_{x_2} = \begin{bmatrix} 1 & \mathbf{1} & 1 \\ 2 & \mathbf{-1} & -2 \\ -1 & \mathbf{1} & 4 \end{bmatrix} \implies \det(A_{x_2}) = \mathbf{-7}$$
    $$A_{x_3} = \begin{bmatrix} 1 & -1 & \mathbf{1} \\ 2 & 1 & \mathbf{-1} \\ -1 & -2 & \mathbf{1} \end{bmatrix} \implies \det(A_{x_3}) = \mathbf{-3}$$

3.  **Find the Solution ($x_1, x_2, x_3$):**
    $$x_1 = \frac{\det(A_{x_1})}{\det(A)} = \frac{-1}{3} = \mathbf{-\frac{1}{3}}$$
    $$x_2 = \frac{\det(A_{x_2})}{\det(A)} = \frac{-7}{3} = \mathbf{-\frac{7}{3}}$$
    $$x_3 = \frac{\det(A_{x_3})}{\det(A)} = \frac{-3}{3} = \mathbf{-1}$$

### 4. Exercise (System of Linear Equations)

**Question 42:** Consider a system of linear equations:
$$x_1 + x_3 = 1$$
$$-x_1 + x_2 - x_3 = 1$$
$$-x_2 + x_3 = 1$$
Let the matrix representation of the above system be $Ax = b$. Apply Cramer's Rule steps to define the matrices needed for the solution.

**Solution (Setup for Cramer's Rule):**

The coefficient matrix $A$ and the vector $b$ are:
$$A = \begin{bmatrix} 1 & 0 & 1 \\ -1 & 1 & -1 \\ 0 & -1 & 1 \end{bmatrix}, \quad b = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}$$

To find the solution $x_i = \frac{\det(A_{x_i})}{\det(A)}$, we first compute $\det(A)$, and then define the matrices $A_{x_1}$, $A_{x_2}$, and $A_{x_3}$ used in the numerators:

1.  **$A_{x_1}$** (Column 1 replaced by $b$):
    $$A_{x_1} = \begin{bmatrix} \mathbf{1} & 0 & 1 \\ \mathbf{1} & 1 & -1 \\ \mathbf{1} & -1 & 1 \end{bmatrix}$$
2.  **$A_{x_2}$** (Column 2 replaced by $b$):
    $$A_{x_2} = \begin{bmatrix} 1 & \mathbf{1} & 1 \\ -1 & \mathbf{1} & -1 \\ 0 & \mathbf{1} & 1 \end{bmatrix}$$
3.  **$A_{x_3}$** (Column 3 replaced by $b$):
    $$A_{x_3} = \begin{bmatrix} 1 & 0 & \mathbf{1} \\ -1 & 1 & \mathbf{1} \\ 0 & -1 & \mathbf{1} \end{bmatrix}$$

(To complete the solution using the rule, one would calculate the determinant of $A$ and the three matrices above, and then find the ratios.)