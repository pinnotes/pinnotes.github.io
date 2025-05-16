---
title: "LaTeX"
weight: 4
math: true
---
\(\KaTeX\) is used for rendering LaTeX math expressions. No manual activation is needed, you can start using LaTeX math expressions in your Markdown content right away.

## Example

Both inline and separate paragraph LaTeX math expressions are supported in the Markdown content.

### Inline

```markdown {filename="page.md"}
This \(\sigma(z) = \frac{1}{1 + e^{-z}}\) is inline.
```

This \(\sigma(z) = \frac{1}{1 + e^{-z}}\) is inline.

### Separate Paragraph

```markdown {filename="page.md"}
$$F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-j\omega t} \, dt$$
```

will be rendered as:

$$F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-j\omega t} \, dt$$

> [!IMPORTANT]
> Please enable and configure the [passthrough extension](https://gohugo.io/content-management/mathematics/) in the Hugo configuration file. It preserves raw content within the delimiters to avoid rendering issues for complex expressions.

```yaml {filename="hugo.yaml"}
markup:
  goldmark:
    extensions:
      passthrough:
        delimiters:
          block: [['\[', '\]'], ['$$', '$$']]
          inline: [['\(', '\)']]
        enable: true
```

For example, using the aligned environment:

```latex {filename="page.md"}
$$
\begin{aligned}
  \nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
  \nabla \cdot \mathbf{B} &= 0 \\
  \nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
  \nabla \times \mathbf{B} &= \mu_0 \left( \mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} \right)
\end{aligned}
$$
```

will be rendered as:

$$
\begin{aligned}
  \nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
  \nabla \cdot \mathbf{B} &= 0 \\
  \nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
  \nabla \times \mathbf{B} &= \mu_0 \left( \mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} \right)
\end{aligned}
$$

## Supported Functions

For a list of supported functions, see [KaTeX supported functions](https://katex.org/docs/supported.html).

## Chemistry

Chemistry expressions are supported via [mhchem](https://mhchem.github.io/MathJax-mhchem/) extension.

Inline: \(\ce{H2O}\) is water.

Separate paragraph:

```markdown {filename="page.md"}
$$\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}$$
```

$$\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}$$

## LaTeX Operators 🔣

```markdown
- $x + y$
- $x - y$
- $x \times y$
- $x \div y$
- $\dfrac{x}{y}$
- $\sqrt{x}$
```

- $x + y$
- $x - y$
- $x \times y$
- $x \div y$
- $\dfrac{x}{y}$
- $\sqrt{x}$

## Symbols

```markdown
- $\pi \approx 3.14159$ 
- $\pm \, 0.2$ 
- $\dfrac{0}{1} \neq \infty$ 
- $0 < x < 1$ 
- $0 \leq x \leq 1$ 
- $x \geq 10$ 
- $\forall \, x \in (1,2)$ 
- $\exists \, x \notin [0,1]$ 
- $A \subset B$ 
- $A \subseteq B$ 
- $A \cup B$ 
- $A \cap B$ 
- $X \implies Y$ 
- $X \impliedby Y$
- $a \to b$ 
- $a \longrightarrow b$ 
- $a \Rightarrow b$ 
- $a \Longrightarrow b$ 
- $a \propto b$ 
```

- $\pi \approx 3.14159$ 
- $\pm \, 0.2$ 
- $\dfrac{0}{1} \neq \infty$ 
- $0 < x < 1$ 
- $0 \leq x \leq 1$ 
- $x \geq 10$ 
- $\forall \, x \in (1,2)$ 
- $\exists \, x \notin [0,1]$ 
- $A \subset B$ 
- $A \subseteq B$ 
- $A \cup B$ 
- $A \cap B$ 
- $X \implies Y$ 
- $X \impliedby Y$
- $a \to b$ 
- $a \longrightarrow b$ 
- $a \Rightarrow b$ 
- $a \Longrightarrow b$ 
- $a \propto b$ 
  
```markdown
- $\bar a$
- $\tilde a$
- $\breve a$
- $\hat a$
- $a^ \prime$
- $a^ \dagger$
- $a^ \ast$
- $a^ \star$
- $\mathcal A$
- $\mathrm a$
- $\cdots$
- $\vdots$
- $\#$
- $\$$
- $\%$
- $\&$
- $\{ \}$
- $\_$
```

- $\bar a$
- $\tilde a$
- $\breve a$
- $\hat a$
- $a^ \prime$
- $a^ \dagger$
- $a^ \ast$
- $a^ \star$
- $\mathcal A$
- $\mathrm a$
- $\cdots$
- $\vdots$
- $\#$
- $\$$
- $\%$
- $\&$
- $\{ \}$
- $\_$

### Space

- Horizontal space: `\quad`
- Large horizontal space: `\qquad`
- Small space: `\,`
- Medium space: `\:`
- Large space: `\;`
- Negative space: `\!`

### Greek alphabets

| Small Letter | Capital Letter | Alternative |
| --------  | -------- | -------- |
| $\alpha$ |  $A$ |
| $\gamma$ | $\Gamma$ |
| $\delta | \Delta |
| $\epsilon | E | \varepsilon |
| $\zeta | Z |
| $\eta | H |
| $\theta | \Theta | \vartheta |
| $\zeta | I |
| $\kappa K | \varkappa |
| $\lambda | \Lambda |
| $\mu | M |
| $\nu | N |
| $\xi | \Xi |
| $\omicron | O |
| $\pi | \Pi | \varpi |
| $\rho | P | \varrho |
| $\sigma | \Sigma | \varsigma |
| $\tau | T |
| $\upsilon | \Upsilon |
| $\phi | \Phi | \varphi |
| $\chi | X |
| $\psi | \Psi |
| $\omega | \Omega |

## Equations 

```markdown
$$\mathbb{N} = \{ a \in \mathbb{Z} : a > 0 \}$$
```

$$\mathbb{N} = \{ a \in \mathbb{Z} : a > 0 \}$$

```markdown
$$\forall \; x \in X \quad \exists \; y \leq \epsilon$$
```

$$\forall \; x \in X \quad \exists \; y \leq \epsilon$$

```markdown
$$\color{blue}{X \sim Normal \; (\mu,\sigma^2)}$$
```

$$\color{blue}{X \sim Normal \; (\mu,\sigma^2)}$$

```markdown
$$P \left( A=2 \, \middle| \, \dfrac{A^2}{B}>4 \right)$$
```

$$P \left( A=2 \, \middle| \, \dfrac{A^2}{B}>4 \right)$$

```markdown
$$f(x) = x^2 - x^\frac{1}{\pi}$$
```

$$f(x) = x^2 - x^\frac{1}{\pi}$$

```markdown
$$f(X,n) = X_n + X_{n-1}$$
```

$$f(X,n) = X_n + X_{n-1}$$

```markdown
$$f(x) = \sqrt[3]{2x} + \sqrt{x-2}$$
```

$$f(x) = \sqrt[3]{2x} + \sqrt{x-2}$$

```markdown
$$\mathrm{e} = \sum_{n=0}^{\infty} \dfrac{1}{n!}$$
```

$$\mathrm{e} = \sum_{n=0}^{\infty} \dfrac{1}{n!}$$

```markdown
$$\prod_{i=1}^{n} x_i - 1$$
```

$$\prod_{i=1}^{n} x_i - 1$$

```markdown
$$\lim_{x \to 0^+} \dfrac{1}{x} = \infty$$
```

$$\lim_{x \to 0^+} \dfrac{1}{x} = \infty$$

```markdown
$$\int_a^b y \: \mathrm{d}x$$
```

$$\int_a^b y \: \mathrm{d}x$$

```markdown
$$\log_a b = 1$$
```

$$\log_a b = 1$$

```markdown
$$\max(S) = \max_{i:S_i \in S} S_i$$
```

$$\max(S) = \max_{i:S_i \in S} S_i$$

```markdown
$$\dfrac{n!}{k!(n-k)!} = \binom{n}{k}$$
```

$$\dfrac{n!}{k!(n-k)!} = \binom{n}{k}$$

```markdown
$$\text{$\dfrac{b}{a+b}=3, \:$ therefore we can set $\: a=6$}$$
```

$$\text{$\dfrac{b}{a+b}=3, \:$ therefore we can set $\: a=6$}$$

## Functions 

```markdown
$$
f(x)=
\begin{cases}
1/d_{ij} & \quad \text{when $d_{ij} \leq 160$}\\
0 & \quad \text{otherwise}
\end{cases}
$$
```

$$
f(x)=
\begin{cases}
1/d_{ij} & \quad \text{when $d_{ij} \leq 160$}\\
0 & \quad \text{otherwise}
\end{cases}
$$

## Matrices

```markdown {filename="latex.md"}
$$
\begin{matrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{matrix}
$$
```

$$
\begin{matrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{matrix}
$$

```markdown {filename="latex.md"}
$$
M =
\begin{bmatrix}
\frac{5}{6} & \frac{1}{6} & 0 \\[0.3em]
\frac{5}{6} & 0 & \frac{1}{6} \\[0.3em]
0 & \frac{5}{6} & \frac{1}{6}
\end{bmatrix}
$$

```

$$
M =
\begin{bmatrix}
\frac{5}{6} & \frac{1}{6} & 0 \\[0.3em]
\frac{5}{6} & 0 & \frac{1}{6} \\[0.3em]
0 & \frac{5}{6} & \frac{1}{6}
\end{bmatrix}
$$

```markdown {filename="latex.md"}
$$
M =
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
$$


```

$$
M =
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
$$

```markdown {filename="latex.md"}
$$
M =
\begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}
\begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}
$$

```

$$
M =
\begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}
\begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}
$$

```markdown {filename="latex.md"}
$$A_{m,n} =
\begin{pmatrix}
a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\ a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m,1} & a_{m,2} & \cdots & a_{m,n}
\end{pmatrix}
$$


```

$$A_{m,n} =
\begin{pmatrix}
a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\ a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m,1} & a_{m,2} & \cdots & a_{m,n}
\end{pmatrix}
$$


## Font Sizes

###### Example

```markdown
$$\small \text{Font size is small, eg. $\sum{x_i = 10}$}$$
```

Final output:

$$\small \text{Font size is small, eg. $\sum{x_i = 10}$}$$