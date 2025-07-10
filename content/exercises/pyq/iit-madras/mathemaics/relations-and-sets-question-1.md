---
title: Relations and Sets
subtitle: IITM Quiz 1
description: Given sets $ A $ (odd positive integers ≤ 20) and $ B $ (positive integers ≤ 30 divisible by 5), and relations?
weight: 1
categories:
- Relations and Sets
---

---



### 4️⃣ Relations and Sets

**Question:**
Given sets \$ A \$ (odd positive integers ≤ 20) and \$ B \$ (positive integers ≤ 30 divisible by 5), and relations:



## Detailed Explanation of the Solution 📝

Let's break down the reasoning for both statements about the relations \$ R_1 \$ and \$ R_2 \$ step by step!

### 1. **Understanding the Sets**

- **Set \$ A \$:** Odd positive integers ≤ 20
\$ A = \{1, 3, 5, 7, 9, 11, 13, 15, 17, 19\} \$
- **Set \$ B \$:** Positive integers ≤ 30 divisible by 5
\$ B = \{5, 10, 15, 20, 25, 30\} \$


### 2. **Relation \$ R_1 \$: \$ a \$ is a factor of \$ b \$ (\$ a \mid b \$)**

#### **Transitivity Check**

- **Definition:** A relation \$ R \$ is *transitive* if whenever \$ (a, b) \in R \$ and \$ (b, c) \in R \$, then \$ (a, c) \in R \$.
- **Here:** \$ (a, b) \in R_1 \$ means \$ a \mid b \$ (i.e., \$ b \$ is divisible by \$ a \$).
- **Transitive Property for Divisibility:**
    - If \$ a \mid b \$ and \$ b \mid c \$, then \$ a \mid c \$.
    - *Example:* If \$ 5 \mid 15 \$ and \$ 15 \mid 30 \$, then \$ 5 \mid 30 \$.

**Conclusion:**

- Since divisibility is always transitive, **\$ R_1 \$ is transitive**! ✅


### 3. **Relation \$ R_2 \$: \$ (a + b) \mod 15 = 0 \$**

#### **Symmetry Check**

- **Definition:** A relation \$ R \$ is *symmetric* if whenever \$ (a, b) \in R \$, then \$ (b, a) \in R \$.
- **Here:** \$ (a, b) \in R_2 \$ means \$ (a + b) \$ is a multiple of 15.
- **Test for Symmetry:**
    - \$ (a, b) \in R_2 \implies (a + b) \mod 15 = 0 \$.
    - \$ (b, a) \in R_2 \$ if \$ (b + a) \mod 15 = 0 \$.
    - Since addition is commutative, \$ a + b = b + a \$, so at first glance, it seems symmetric.
    - **BUT:** The important detail is that \$ a \in A \$, \$ b \in B \$, and the relation is only defined for pairs where the first element is from \$ A \$ and the second from \$ B \$.
    - If \$ (a, b) \in R_2 \$, \$ a \in A, b \in B \$, but \$ (b, a) \$ may not be in \$ R_2 \$ because \$ b \$ may not be in \$ A \$ and \$ a \$ may not be in \$ B \$.

**Example:**

- Let \$ a = 5 \in A \$, \$ b = 10 \in B \$.
- \$ (5, 10) \in R_2 \$ if \$ 5 + 10 = 15 \$, which is divisible by 15.
- But \$ (10, 5) \$ requires \$ 10 \in A \$ and \$ 5 \in B \$. But \$ 10 \notin A \$ (since \$ A \$ only has odd numbers), so \$ (10, 5) \$ is not even a valid pair in \$ R_2 \$.

**Conclusion:**

- **\$ R_2 \$ is not symmetric** because the relation is not defined for all possible swaps of \$ a \$ and \$ b \$ between the sets. ✅


## **Summary Table**

| Statement | True/False | Reason |
| :-- | :-- | :-- |
| \$ R_1 \$ is transitive | ✅ True | Divisibility is always transitive. |
| \$ R_2 \$ is not symmetric | ✅ True | Swapping \$ a \$ and \$ b \$ may produce an invalid pair due to set membership. |

### **Key Takeaways**

- **Transitivity:** For divisibility relations, if \$ a \mid b \$ and \$ b \mid c \$, then \$ a \mid c \$.
- **Symmetry:** For relations with different sets, swapping elements may not always result in a valid pair, so symmetry can fail even if the operation itself (like addition) is symmetric.

**That's why the given statements are correct! 🚀**

