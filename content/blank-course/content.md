
# Course Title

> id: intro
## Introduction

Let's begin by stating the Fundamental Theorem of Algebra.

::: .theorem
**Theorem** (Fundamental Theorem of Algebra)  
Every non-constant single-variable polynomial with complex coefficients has at least one complex root. 
:::

[Continue](btn:next)

---
> id: step-1

The equation $x^2 - 1 = 0$ has two roots $x = 1$ and $x = $ [[-1]]. 

---
> id: gram-matrix
## Gram Matrix

This figure illustrates the relationship between a matrix and its **Gram** matrix: 

    figure
      img(src="images/gram.svg")
      p.caption.md The grid-line images under $A$ and $\sqrt{A' A}$ have the same shape; they are related by an orthogonal transformation. 

[Continue](btn:next)

---
> id: step-2

Is the orthogonal transformation relating $A$ and $\sqrt{A' A}$ always a rotation? Explain below.

    x-quill

```python
a = '1' + '2' + '3' + \
    '4' + '5'
```
    
    pre(python-executable)
      | np.array([[1,2,3],
      |           [4,5,6]])