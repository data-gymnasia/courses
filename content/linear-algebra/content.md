# Linear Algebra

> id: intro
> description: Vector spaces, orthogonality, and eigenanalysis from a data point of view.
> color: "#c75f43"
> next: multivariable-calculus
> author: Samuel S. Watson

## Introduction

Using and interpreting data requires storing and manipulating sets of numbers in conceptually and computationally helpful ways. The language of *linear algebra* provides basic vocabulary, visualizations, and mathematical results for understanding the structure of a dataset.

[Continue](btn:next)

---
> id: step-1

::: .exercise
**Exercise**  
Consider a spreadsheet whose rows correspond to individuals and whose three columns correspond to weight in kilograms, height in centimeters, and height in inches. Are any of the columns redundant? [[Yes|No]]
:::

---
> id: step-2

*Solution.* Yes, the third column is redundant. If we know a person's height in centimeters, we can work out their height in inches by multiplying their height in centimeters by 2.54.

Alternatively, we could say that the second column is redundant, since we could obtain it by dividing the numbers in the third column by 2.54. So there are two ways to trim the number of columns from 3 to 2 without losing information.

[Continue](btn:next)

---
> id: step-3

::: .exercise
**Exercise**  
Is it possible to have numbers populating three columns in a spreadsheet such that any one of the three columns can be recovered from the other two, yet no column can be recovered from any other single column?
:::

    x-quill

---
> id: step-4

*Solution.* Yes! If the third column is the sum of the first two, then any column can be recovered from any other (either by adding to get the third from the first and second, or by subtracting to get the first from the third and second or the second from the first and third). However, if the first two columns contain different data, then you do need at least two columns to figure out the rest.


In this course, we will develop a more general and mathematically rigorous version of the idea of redundancy developed in the two exercises above.

---

> id: vectors
## Vectors

A **vector** in $\mathbb{R}^n$ is a column of $n$ real numbers. These real numbers are called the **components** or **entries** of the vector.

[Continue](btn:next)

---
> id: step-5

::: .example
**Example**  
$\mathbf{v} = \begin{bmatrix} -2 \\\\\\ 0 \\\\\\ 1 \end{bmatrix}$ is a vector in $\mathbb{R}^3$. We say that the first component of $\mathbf{v}$ is equal to $-2$, the second component is equal to $0$, and the third component is equal to $1$.
:::

[Continue](btn:next)

---
> id: step-6

For typographical convenience, and for consistency with [{.py-only} Python](https://mathigon.org/course/programming-in-python) [{.jl-only} Julia](https://mathigon.org/course/programming-in-juila) we will often write vectors horizontally, like $[-2,0,1]$. This notation means the same thing as $\begin{bmatrix} -2 \\\\\\ 0 \\\\\\ 1 \end{bmatrix}$.

[Continue](btn:next)

---
> id: step-7

We draw a vector in $\mathbb{R}^2$ as an arrow from one point to another so that the horizontal separation between the points is equal to the first component of the vector and the vertical separation between the points is equal to the second component.

[Continue](btn:next)

---
> id: step-8

We define the **norm** $|\mathbf{v}|$ of a vector $\mathbf{v} \in \mathbb{R}^n$ to be the length of the associated arrow, which may be calculated as the square root of the [[sum of the squares|sum|product]] of $\mathbf{v}$'s components. A vector whose norm is 1 is called a **unit vector**.

---
> id: step-9

The fundamental vector operations are:

1. **Vector addition** (addition of two vectors), and
2. **Scalar multiplication** (multiplication of a real number and a vector).

[Continue](btn:next)

---
> id: step-10

These operations are defined componentwise, and they have simple geometric interpretations:

1. Summing vectors concatenates them tail-to-head, and
2. Multiplying a vector by a positive real number $k$ preserves its direction
   and multiplies its norm by $k$.


    .row.padded
      .grow
        figure
          img(src="images/vecadd.svg")
          p.caption.md Vector addition: $[3,1 ] + [1,2] = [4,3]$
      .grow
        figure
          img(src="images/vecscale.svg")
          p.caption.md Scalar multiplication: $2[2,1] = [4,2]$

<p></p>

[Continue](btn:next)

---
> id: step-11

Scalar multiplication is denoted symbolically by placing the scalar adjacent to the vector, and vector addition is denoted with "+" between two vectors. We use the usual notational conveniences from arithmetic, like writing $\mathbf{w}-\mathbf{v}$ as an abbreviation for $\mathbf{w}+(-1)\mathbf{v}$.

::: .exercise
**Exercise**  
The first component of $3\begin{bmatrix} -2 \\\\\\ 11 \end{bmatrix} - \begin{bmatrix} 4
      \\\\\\ 0 \end{bmatrix}$ is equal to [[-10]] and the second component is equal to [[33]].
:::

---
> id: step-12

*Solution.* By definition, we have

``` latex
3 \begin{bmatrix} -2 \\\ 11 \end{bmatrix} -
\begin{bmatrix} 4 \\\ 0 \end{bmatrix}
= \begin{bmatrix} -6 \\\ 33 \end{bmatrix} +
\begin{bmatrix} -4 \\\ 0 \end{bmatrix} =
\begin{bmatrix} -10 \\\ 33 \end{bmatrix}.
```


[Continue](btn:next)

---
> id: step-13


::: .exercise
**Exercise**  
Determine whether there exists a real number $r$ satisfying the vector equation

``` latex
r \begin{bmatrix} -3 \\\ 2 \end{bmatrix} -
\begin{bmatrix} 2 \\\ 1 \end{bmatrix} =
\begin{bmatrix} 4 \\\ 2 \end{bmatrix}.
```

:::

    x-quill

---
> id: step-14

*Solution.* For the first component of the two vectors to be equal, the equation $-3r - 2 = 4$ would have to hold. This implies that $r = -2$. If we substitute $r = -2$, then the second component on the left-hand side is $-5$, so there is no such number.

[Continue](btn:next)

---
> id: step-15

::: .exercise
**Exercise**  
Show that every nonzero vector $\mathbf{v}$ can be written as the product of a nonnegative real number $c$ and a unit vector $\mathbf{u}$.
:::

    x-quill

---
> id: step-16

*Solution.* We can see that the unit vector $\mathbf{u}$ must point in the same direction as $\mathbf{v}$, since multiplying it by $c$ does not change its direction. Furthermore, if $\mathbf{u}$ is the unit vector pointing in the same direction as $\mathbf{v}$, then we must scale $\mathbf{u}$ by a factor of $|\mathbf{v}|$ to get $\mathbf{v}$. Thus we find that $\mathbf{u} =
    \mathbf{v}/|\mathbf{v}|$ and $c = |\mathbf{v}|$.

[Continue](btn:next)

---
> id: step-17

::: .exercise
**Exercise**  
Find a formula in terms of $\mathbf{u}$ and $\mathbf{v}$ which represents the vector from the head of $\mathbf{v}$ to the head of $\mathbf{u}$ when $\mathbf{u}$ and $\mathbf{v}$ are situated so that their tails coincide.

_Note_: Two vectors' tails coincide when they originate from the same point.
:::

    x-quill

---
> id: step-18

*Solution.* The desired vector $\mathbf{w}$ has the property that adding it to $\mathbf{v}$ gives $\mathbf{u}$. In other words, $\mathbf{w} +
    \mathbf{v} = \mathbf{u}$, which implies that $\mathbf{w} =
    \mathbf{u} - \mathbf{v}$.

[Continue](btn:next)

---
> id: step-19

::: .exercise
**Exercise**  
Solve for $\mathbf{u}$ in terms of $c$ and $\mathbf{v}$ in the equation $c \mathbf{u} + \mathbf{v} = \boldsymbol{0}$, assuming that $\mathbf{u}$ and $\mathbf{v}$ are vectors in $\mathbb{R}^n$ and $c$ is a nonzero real number.
:::

    x-quill

---
> id: step-20

*Solution.* We add $-\mathbf{v}$ to both sides and multiply both sides by $c^{-1}$ to get $\mathbf{u} = -c^{-1} \mathbf{v}$.

---

> id: span
## Span

Although there are many operations on columns of real numbers, the fundamental operations in linear algebra are the **linear** ones: addition of two columns, multiplication of the whole column by a constant, and compositions of those operations. In this section we will introduce some vocabulary to help us reason about linear relationships between vectors.

[Continue](btn:next)

---
> id: step-21

A [**linear combination**](gloss:linearcombination) of a [list](gloss:list-math) of vectors $\mathbf{v}\_1, \ldots, \mathbf{v}\_k$ is an expression of the form

``` latex
c_1\mathbf{v_1} + c_2\mathbf{v_2}  + \cdots +
c_k\mathbf{v_k},
```

where $c_1, \ldots, c_k$ are real numbers. The $c$'s are called the **weights**
of the linear combination.

::: .exercise
**Exercise**  
Suppose that $\mathbf{u} = [2,0]$ and $\mathbf{v} = [1,2]$. Draw the set of all points $(a,b)$ in $\mathbb{R}^2$ for which the vector $[a,b]$ can be written as an *integer* linear combination of $\mathbf{u}$ and $\mathbf{v}$.

_Note_: An integer linear combination is a linear combination where the weights are integers.
:::

    x-quill

---
> id: step-22

*Solution.*  A bit of experimentation reveals that the integer linear combinations of these two vectors form a lattice as shown.

    figure: img(src="images/lattice.svg" width="400px")

[Continue](btn:next)

---

> id: step-23

The [**span**](gloss:span) of a [list](gloss:list-math) of vectors is the set of all vectors which can be written as a linear combination of the vectors in the list. We define the span of the list containing no vectors to be the set containing only the [zero](gloss:zerovector) vector.

::: .exercise
**Exercise**  
Is $\mathbf{w} =  \begin{bmatrix} 1 \\\\\\ 4 \\\\\\ 0 \end{bmatrix}$ in the span of $\mathbf{u} = \begin{bmatrix} 1 \\\\\\ 0 \\\\\\ 0 \end{bmatrix}$ and $\mathbf{v} = \begin{bmatrix} 1 \\\\\\ 1 \\\\\\ 0 \end{bmatrix}$? [[Yes|No]]

Find values $\alpha$ and $\beta$ such that $\mathbf{w} = \alpha \mathbf{u} + \beta \mathbf{v}$. We have `α = `[[-3]] and `β =`[[4]]
:::

---
> id: step-24

We visualize a set $S$ of vectors in $\mathbb{R}^n$ by associating the vector $[v_1, v_2, \ldots, v_n]$ with the point $(v_1,\ldots, v_n)$—in other words, we associate each vector with the location of its head when its tail is drawn at the origin. Apply geometric reasoning to solve the following exercises.

::: .exercise
**Exercise**  
The span of two vectors in $\mathbb{R}^2$

    x-picker.list
      .item.pill.bblue(data-error="any-shape") can be any shape
      .item.pill.bblue(data-error="circle") must be either a circle or a line
      .item.pill.bblue.md can be all of $\mathbb{R}^2$
      .item.pill.bblue(data-error="line-or-point") must be either a line or a point
      .item.pill.bblue.md must be either a line or a point or all of $\mathbb{R}^2$

:::

---
> id: step-24b

::: .exercise
**Exercise**  
The span of three vectors in $\mathbb{R}^3$

    x-picker.list
      .item.pill.bblue(data-error="any-shape") can be any shape
      .item.pill.bblue(data-error="sphere") must be a sphere or a line
      .item.pill.bblue(data-error="plane") must be a plane
      .item.pill.bblue.md must be a point, a plane, a line, or all of $\mathbb{R}^3$
      .item.pill.bblue(data-error="plane") must be a plane, a line, or a point

:::

---
> id: step-25

*Solution.* The span of a list containing only the zero vector is just the origin. The span of a list containing a single vector $\mathbf{v}$ is a line through the origin, since $\alpha \mathbf{v}$ points in the same direction as $\mathbf{v}$ for any $\alpha \in \mathbb{R}$. The span of a list containing two non-parallel vectors $\mathbf{u}$ and $\mathbf{v}$ is all of $\mathbb{R}^2$, since the span consists of the union of all lines which run in the $\mathbf{u}$ direction and pass through any point in the span of $\\\{\mathbf{v}\\\}$. Including more vectors can't increase the span further, so these are the only possibilities. So the correct answer is (e).

The same reasoning implies that the span of a list of vectors in $\mathbb{R}^3$ must be either the origin, or a line or plane through the origin, or all of $\mathbb{R}^3$. So the correct answer choice is the fourth one.

Check out the 3Blue1Brown video segment below for some helpful visualizations for spans of vectors in three-dimensional space.

    figure.video-wrap
      iframe(src="https://www.youtube.com/embed/k7RM-ot2NWY?start=358&end=495" frameborder="0" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen)

[Continue](btn:next)

---
> id: step-26

[Span](gloss:span) is closely related to *linear dependence*, which we will discuss in the next section.

---

> id: linear-independence
## Linear Independence

The idea of *redundancy* that we discussed in the introduction can now be phrased in a mathematically precise way: a [list](gloss:list-math) of vectors is **linearly dependent** if one of the vectors can be expressed as a linear combination of the others.

[Continue](btn:next)

---
> id: step-27

A list of vectors which is not linearly dependent is said to be **linearly independent**. In other words, a list of vectors is linearly independent if [[none|at least one]] of the vectors in the list can be written as a linear combination of the others.

---
> id: step-28

::: .example
**Example**  
The list of vectors $\\{\mathbf{u}\_1, \mathbf{u}\_2, \mathbf{u}\_3\\}$ where $
  	\mathbf{u}\_1 = \begin{bmatrix}
  	1 \\\\\\
  	1 \\\\\\
  	2
  	\end{bmatrix},
  	\mathbf{u}\_2 = \begin{bmatrix}
  	0 \\\\\\
  	1\\\\\\
  	0
  	\end{bmatrix},
  	\mathbf{u}\_3 = \begin{bmatrix}
  	4 \\\\\\
  	7\\\\\\
  	8
  	\end{bmatrix}
  	$ is not linearly independent, since $\mathbf{u}\_3 = 4\mathbf{u}\_1 + 3\mathbf{u}\_2$.

 The list of vectors $\\{\mathbf{v}\_1, \mathbf{v}\_2, \mathbf{v}\_3\\}$ where $
  	\mathbf{v}\_1 = \begin{bmatrix}
  	1 \\\\\\
  	0 \\\\\\
  	0
  	\end{bmatrix},
  	\mathbf{v}\_2 = \begin{bmatrix}
  	0 \\\\\\
  	1 \\\\\\
  	0
  	\end{bmatrix},
  	\mathbf{v}\_3 = \begin{bmatrix}
  	0 \\\\\\
  	0 \\\\\\
  	1
  	\end{bmatrix}
  	$ is linearly independent, since any linear combination of $\mathbf{v}\_1$ and $\mathbf{v}\_2$ is unequal to $\mathbf{v}\_3$, and similarly for $\mathbf{v}\_1$ and $\mathbf{v}\_2$.
:::

[Continue](btn:next)

---
> id: step-29

::: .exercise
**Exercise**  
Explain geometrically why a list of three vectors in $\mathbb{R}^2$ is necessarily linearly dependent.
:::

    x-quill

---
> id: step-30

*Solution.* If any vector in the list is zero, then the list is linearly independent, since the zero vector can be written as the sum of zero times each of the other vectors. So we may assume that the vectors are [[nonzero|zero]].

---
> id: step-31

If the first two vectors point in the same direction, then the list is linearly [[dependent|independent]], since the second vector can be written as a constant multiple of the first vector plus zero times the third vector. If the first two vectors do not point in the same direction, then they span the whole plane. Therefore, the third vector must be in the span of the first two.

---
> id: step-32

### Linear dependence lemma

The definition of linear independence makes it seem as though there's quite a lot to check: if there *is* a vector in the list which can be written as a linear combination of some of the other ones, which one is it, and which other vectors are involved? In fact, the symmetry involved in linear relationships implies that we can put the vectors in any order we want and work through the list, checking whether each vector is in the span of the vectors *earlier* in the list:

::: .theorem
**Theorem** (Linear dependence lemma)  
A list of vectors is linearly independent if and only if there is no vector in the list which is in the span of the *preceding* vectors.
:::

[Continue](btn:next)

---
> id: step-33

For example, to check that $\\{\mathbf{v}\_1, \mathbf{v}\_2, \mathbf{v}\_3\\}$ is linearly independent, it suffices to check that $\mathbf{v}\_1 \neq \boldsymbol{0}$, that $\mathbf{v}\_2$ is not a scalar multiple of $\mathbf{v}\_1$ and that $\mathbf{v}\_3$ is not in the span of $\\{\mathbf{v}\_1, \mathbf{v}_2\\}$.

Let's walk through a proof of this theorem.

[Continue](btn:next)

---
> id: step-34

*Proof.* If a list is linearly independent, then no vector in the list can be represented as a linear combination of others (by definition), so no vector can be in the span of the previous ones. This shows that linear independence [[implies|is implied by]] the condition of having no vector in the span of the preceding ones.

---
> id: step-35

For the other direction, suppose that the list $\mathbf{v}\_1, \ldots, \mathbf{v}\_n$ is linearly dependent. Then, one of the vectors can be written as a linear combination of the others. For example, if $\mathbf{v}\_1$ can be written as a linear combination of the others, then

``` latex
\mathbf{v}_1 = c_2\mathbf{v}_2 + \cdots + c_n\mathbf{v}_n
```

for some weights $c\_2, \ldots, c\_n$. If all of the weights are zero, then $\mathbf{v}\_1$ is zero and is therefore in the span of the empty list of vectors which precede it. If at least one is nonzero, then let's define $k$ so that $c\_k$ is the [[*last*|*first*]] of the nonzero $c$'s. Then we can rearrange the equation above to find that

``` latex
\mathbf{v}_k = \frac{\mathbf{v}_1 - \left(c_2\mathbf{v}_2 + \cdots + c_{k- 1}\mathbf{v}_{k-1}\right)}{c_k}
```

which is in the span of $\\{\mathbf{v}\_1,...,\mathbf{v}\_{k-1}\\}$.

---
> id: step-36

So the list does not satisfy the condition of having no vector in the span of the preceding ones. Similar reasoning would apply if we had chosen any vector other than $\mathbf{v}\_1$ as the one which can be written as a linear combination of the others. Therefore, we conclude that linear independence does imply failure to satisfy the given condition.

From logic, we know that "A implies B" is equivalent to its [[contrapositive|converse]] "not B implies not A". Therefore, we can say that satisfying the condition of having no vector in the span of the preceding ones does imply linear independence.

---
> id: step-37

::: .exercise
**Exercise**  
Let's say that a linear combination of a list of vectors is **trivial** if all of the weights are zero.

Show that a list of vectors is linearly independent if and only if every nontrivial linear combination of the vectors is not equal to the zero vector.
:::

    x-quill

---
> id: step-38

*Solution.* Suppose that a list of vectors $\\{\mathbf{v}\_1, \ldots, \mathbf{v}\_n\\}$ is not linearly independent. Then one of the vectors, say the first one, is equal to some linear combination of the others:

``` latex
\mathbf{v}_1 = c_2\mathbf{v}_2 + \cdots + c_n \mathbf{v}_n
```

Subtracting $\mathbf{v}\_1$ from both sides of this equation, we obtain a nontrivial linear combination of the $\mathbf{v}$'s which is equal to [[the zero vector|`v_1`]]. (If the vector known to be a linear combination of the others isn't $\mathbf{v}\_1$, we could have done the same thing with that one instead.)

---
> id: step-39

Conversely, suppose that there is a nontrivial linear combination of the $\mathbf{v}$'s which is equal to the zero vector:

``` latex
c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 +  \cdots c_n \mathbf{v}_n = \boldsymbol{0}.
```

At least one of the weights must be nonzero, so we can solve this equation for a least one of the vectors and thereby represent it as [[a linear combination|the span|linearly independent]] of the other vectors.

---

> id: vector-spaces
## Vector Spaces

Spans of lists of vectors are so important that we give them a special name: a **vector space** in $\mathbf{R}^n$ is a nonempty set of vectors in $\mathbb{R}^n$ which is closed under the vector space operations. *Closed* in this context means that if two vectors are in the set, then any linear combination of those vectors is also in the set.

If $V$ and $W$ are vector spaces and $V \subset W$, then $V$ is called a **subspace** of $W$.

[Continue](btn:next)

---
> id: step-40

::: .example
**Example**  
Lines and planes through the origin are vector subspaces of $\mathbb{R}^3$. More generally, the span of any list of vectors in $\mathbb{R}^n$ is a vector subspace of $\mathbb{R}^n$.
:::

[Continue](btn:next)

---
> id: step-41

::: .exercise
**Exercise**  
Show that if $V$ and $W$ are vector spaces in $\mathbf{R}^n$, then $V \cap W$ is also a vector space.

Hint: start by assuming that $\mathbf{x} \in V \cap W$ and $\mathbf{y} \in V \cap W$, and reason your way to the conclusion that $\mathbf{x} + \mathbf{y}$ is also in $V$.
:::

    x-quill

---
> id: step-42

*Solution.* Our goal is to show that $V \cap W$ is [[closed|open]] under the vector space operations. In other words, we want to show that if $\mathbf{x} \in V \cap W$ and $\mathbf{y} \in V \cap W$, then the sum $\mathbf{x} + \mathbf{y}$ [[is also in|is not in]] $V \cap W$ (and similarly for scalar multiplication).

---
> id: step-43

If $\mathbf{x} \in V \cap W$ and $\mathbf{y} \in V \cap W$, then $\mathbf{x}$ and $\mathbf{y}$ are [[both|not]] in $V$. Since $V$ is a vector space, this means that $\mathbf{x} + \mathbf{y}$ [[is|is not]] in $V$. Similarly, $\mathbf{x} + \mathbf{y}$ is also in $W$. Therefore, $\mathbf{x} + \mathbf{y} \in V \cap W$, as desired. Similar reasoning applies to show closure with respect to [[multiplication by a scalar|subtraction]], concluding the proof.

---
> id: step-44

### Spanning lists

A **spanning list** of a vector space $V$ is a list of vectors in $V$ whose span is equal to $V$.

::: .example
**Example**  
The list $\left\\{\begin{bmatrix}
  	2 \\\\\\
  	1
  	\end{bmatrix},  \begin{bmatrix}
  	1 \\\\\\
  	1
  	\end{bmatrix}, \begin{bmatrix}
  	7 \\\\\\
  	11
  	\end{bmatrix} \right\\}$ is a spanning list for $\mathbb{R}^2$ because any vector $\mathbf{v} = \begin{bmatrix}
  	x \\\\\\
  	y
  	\end{bmatrix} \in \mathbb{R}^2$ can be represented as

``` latex
\mathbf{v} = (x - y) \begin{bmatrix}
2 \\\
1
\end{bmatrix} + (2y - x)\begin{bmatrix}
1 \\\
1
\end{bmatrix} + 0 \begin{bmatrix} 7 \\\ 11 \end{bmatrix}.
```

:::

[Continue](btn:next)

---
> id: step-45

::: .exercise
**Exercise**  
Select the true statements.

    x-picker.list
      .item.pill.bblue.md(data-error="parallel-span") If two vectors span $\mathbf{R}^2$, then they point in the same direction.
      .item.pill.bblue.md(data-error="two-span-space") Two vectors can span $\mathbf{R}^3$
      .item.pill.bblue.md A spanning list of $\mathbf{R}^2$ may contain as few as two vectors.
      .item.pill.bblue.md The list $\\{[1,0],[0,1]\\}$ is not the only spanning list of $\mathbf{R}^2$.

:::

---
> id: step-46

### Bases

A linearly independent spanning list for a vector space $V$ is called a **basis** for $V$.

::: .example
**Example**  
The list $\left\\{\begin{bmatrix}
  	2 \\\\\\
  	1
  	\end{bmatrix},  \begin{bmatrix}
  	1 \\\\\\
  	1
  	\end{bmatrix}\right\\}$ is a basis for $\mathbb{R}^2$ and the list $\left\\{ \begin{bmatrix}
  		1 \\\\\\
  		0
  	\end{bmatrix}, \begin{bmatrix}
  		0 \\\\\\
  		1
  	\end{bmatrix} \right\\}$ is also a basis for $\mathbb{R}^2$.
:::

[Continue](btn:next)

---
> id: step-47

A basis must balance two constraints: it must be long enough to span the space, and it must be short enough to avoid being linearly dependent. Reason geometrically to solve the following exercises.

::: .exercise
**Exercise**  
A list of vectors in $\mathbb{R}^3$ must have at least [[two|one|three]] vectors in order to span a particular plane in $\mathbb{R}^2$. A linearly independent list of vectors in a plane in $\mathbb{R}^3$ must have no more than [[two|one|three]] vectors.
:::

---
> id: step-48

As we will show later in this unit, the situation explored in the exercise above holds in general: for each vector space $V$, there is a number $d$ such that any basis of $V$ must have exactly $d$ vectors. We call $d$ the [**dimension**](gloss:dimension) of $V$.

::: .exercise
**Exercise**

1. A line through the origin has dimension [[1]]
2. A plane has dimension [[2]]
3. $\mathbb{R}^3$ has dimension [[3]]
4. The set containing only the zero vector has dimension [[0]]
:::

---
> id: step-49

### Coordinates

Bases provide a concrete and useful way to represent the vectors in a vector space. For example, consider a two-dimensional subspace $V$ of $\mathbf{R}^3$. Vectors in $V$ can be represented using their three components, but that representation does not capture any information about $V$. For example, perturbing the three components of a vector in $V$ may yield a vector which [[is not|is]] in $V$.

---
> id: step-50

We may instead fix any two vectors $\mathbf{u}$ and $\mathbf{v}$ which span the plane and describe each vector in the plane by identifying how many $\mathbf{u}$'s and how many $\mathbf{v}$'s are needed to obtain it. In other words, we associate each vector $\mathbf{w}$ with the pair $(a,b)$ for which $\mathbf{w} = a \mathbf{u} + b \mathbf{v}$. With this representation, the values $a$ and $b$ may vary freely and [[always|sometimes]] represent an element of $V$.

---
> id: step-51

The values $a$ and $b$ are called the **coordinates** of $\mathbf{w}$ with respect to the basis $\\{\mathbf{u}, \mathbf{v}\\}$.

::: .example
**Example**  
Consider the line in the plane which passes through $(0,0)$ and $(1,1)$. This vector space is spanned by the vector $[1,1]$, and the coordinate of any vector $[a,a]$ with respect to the basis $\\{[1,1]\\}$ is [[a]].
:::

---
> id: step-52

::: .example
**Example**  
For $1 \leq i \leq n$, let $\mathbf{e}\_i \in \mathbb{R}^n$ be a vector with $1$ in the $i$ th position and zeros elsewhere. Then $\\{\mathbf{e}\_1, \dots, \mathbf{e}\_n\\}$ is called the **standard basis** for $\mathbb{R}^n.$ The components of a vector in $\mathbb{R}^n$ coincide with its coordinates with respect to this basis.
:::

[Continue](btn:next)

---
> id: step-53

The idea of vector space coordinates with respect to a basis is fully general: given a vector space $V$ and a basis of $V$, we can represent each vector in $V$ uniquely as a linear combination of the vectors in the basis. In other words, if a vector space $V$ has a basis $\mathcal{B} = \\{\mathbf{b}\_1, \dots \mathbf{b}\_n\\}$ and $\mathbf{v} \in V$, then there exists a unique $n$-tuple of real numbers $(v\_1, \dots, v\_n)$ such that

``` latex
\mathbf{v} = v_1\mathbf{b}_1 + \cdots + v_n\mathbf{b}_n.
```

We call $(v\_1, \dots, v\_n)$ the **coordinates** of $\mathbf{v}$ with respect to $\mathcal{B}.$

[Continue](btn:next)

---
> id: step-54

We need the assumption of [[the spanning property|linear independence]] to ensure that the desired linear combination exists, and we need the [[linear independence|spanning property]] assumption to ensure that the representation is unique.

---
> id: step-55

::: .exercise
**Exercise**  
The vectors $[1,1,\sqrt{2}]$, $[1,1,-\sqrt{2}]$, $[1,-1,0]$ meet at right angles at the origin (like the standard basis vectors in $\mathbf{R}^3$). Find the coordinates of the vector $[4,4,0]$ with respect to this basis.

Hint: you can solve the linear system

``` latex
ax + by + cz &= d \\\
ex + fy + gz &= h \\\
ix + jy + kz &= l
```

{.py-only} in Python as follows:

``` python
import numpy as np
A = np.array([[a,b,c],[e,f,g],[i,j,k]])
b = np.array([d,h,l])
np.linalg.solve(A,b)
```

{.jl-only} in Julia as follows:

``` julia
A = [a b c; e f g; i j k]
b = [d, h, l]
a \ b
```

However, it's also possible to reason your way through this one without computational assistance (or pen-and-paper calculation).

The three coordinates are [[2]], [[2]], [[0]].

:::

::: .py-only
    pre(python-executable)
      | import numpy as np
:::

::: .jl-only
    pre.jl-only(julia-executable)
      |
:::

---
> id: step-56

{.py-only}*Solution.* We can calculate using NumPy as suggested:

::: .py-only
    pre(python-executable)
      | import numpy as np
      | A = np.array([[1,1,np.sqrt(2)],
      |               [1,1,-np.sqrt(2)],
      |               [1,-1,0]])
      | b = np.array([4,4,0])
      | np.linalg.solve(A,b)
:::

{.jl-only}*Solution.* We can calculate using Julia as suggested:

::: .jl-only
    pre(julia-executable)
      | A = [1 1 sqrt(2); 1 1 -sqrt(2); 1 -1 0]
      | b = [4, 4, 0]
      | A \ b
:::

However, we can obtain the same result by inspection, noticing the relationship between the $[1,1]$ values at the beginning of the first two basis vectors and the $[4,4]$ result.

[Continue](btn:next)

---
> id: step-57

::: .exercise
**Exercise**  
Consider a basis $\mathcal{B} = \\{\mathbf{v}\_1, \ldots, \mathbf{v}\_5\\}$ of a five-dimensional vector space $V$. Suppose that $\mathbf{w}$ is in the span of $\\{\mathbf{v}\_1, \ldots, \mathbf{v}\_4\\}$. What is the fifth coordinate of $\mathbf{w}$ with respect to the basis $\mathcal{B}$? [[0]]
:::

---
> id: step-58

*Solution.* Since $\mathbf{w}$ can be written as a linear combination of the first four vectors, it can be written as a linear combination of all five basis vectors by appending the term $0\mathbf{v}\_5$. Since the coordinate representation is unique, this means that $\boxed{0}$ is the fifth coordinate of $\mathbf{w}$ with respect to $\mathcal{B}$.

[Continue](btn:next)

---
> id: step-59

::: .exercise
**Exercise**  
Consider a three-column spreadsheet of numerical data, with each entry in the third column computed to be the sum of the corresponding entries in the first two columns. Find a basis for the span of the three columns (assuming the first two columns are not multiples of one another), and find the coefficients all three columns with respect to this basis.
:::

    x-quill

---
> id: step-60

*Solution.* The first two columns form a basis for the span. The coordinates of the three columns with respect to this basis are $[1,0]$, $[0,1]$, and $[1,1]$.

[Continue](btn:next)

---
> id: step-61

### Proof of the dimension theorem

The **dimension theorem** says that every basis of a given vector space has the same length. The key step to establishing the dimension theorem is the dimension lemma:

::: .theorem
**Theorem** (dimension lemma)  
If $V$ is a vector space, then any spanning list of $V$ is at least as long as any linearly independent list of vectors in $V$.
:::

In other words, the dimension lemma says that if $L\_1$ is a linearly independent list of vectors in $V$ and $L\_2$ is a list of vectors which spans $V$, then the length of $L\_1$ is less than or equal to the length of $L\_2$.

[Continue](btn:next)

---
> id: step-62

*Proof.* The following beautiful idea is presented in Sheldon Axler's book *Linear Algebra Done Right*.

Consider a linearly independent list $\mathbf{l}\_1, \ldots, \mathbf{l}\_m$ of vectors in $V$ and a spanning list $\mathbf{s}\_1, \ldots, \mathbf{s}\_n$ of $V$. Our goal is to show that there are [[at least|at most]] as many $\mathbf{s}$'s as $\mathbf{l}$'s.

---
> id: step-63

Starting from the spanning list

``` latex
\mathbf{s}_1, \ldots, \mathbf{s}_n
```

we insert $\mathbf{l}_1$ at the beginning of the list to get

``` latex
\mathbf{l}_1, \mathbf{s}_1, \ldots, \mathbf{s}_n
```

Since $\mathbf{l}\_1$ is in the span of the $\mathbf{s}$'s, this list is linearly dependent. Therefore, by the linear [[dependence]] lemma, there is a vector in the list which is in the [[span|list]] of the ones [[before|after]] it.

---
> id: step-64

Since the $\mathbf{l}$'s are linearly independent, $\mathbf{l}\_1$ [[is not|is]] such a vector. Therefore, one of the $\mathbf{s}$'s must be removable without changing the span of the list.

---
> id: step-65

We can continue in this way, adding the next $\mathbf{l}$ at the beginning of the list and removing one of the $\mathbf{s}$'s while preserving the span. Eventually we have placed all of the $\mathbf{l}$'s into the list, with each displacing exactly one $\mathbf{s}$. Therefore, there must have been at [[least|most]] as many $\mathbf{s}$'s as $\mathbf{l}$'s at the beginning.

---
> id: step-66

::: .exercise
**Exercise**  
Use the dimension lemma to show that all bases of a vector space $V$ have the same length. In other words, if $B\_1$ is a basis for $V$, and $B\_2$ is a basis for $V$, then the lengths of $B\_1$ and $B\_2$ are equal.
:::

    x-quill

---
> id: step-67

*Solution.* Since $B\_1$ is a spanning list and $B\_2$ is linearly independent, we know that $B\_1$ is at [[least|most]] as long as $B\_2$. Similarly, $B\_2$ is at least as long as $B\_1$. Therefore, their lengths are the same.

[Continue](btn:next)

---
> id: step-68

### Extending and trimming lists

The following two exercises provide simple yet powerful tools for reasoning about linear independence, span, and dimension.

::: .exercise
**Exercise**  
Show that any linearly independent list of vectors in a vector space $V\subset \mathbb{R}^n$ can be extended to form a basis of $V$, and show that any spanning list of $V$ can be trimmed to form a basis of $V$.
:::

    x-quill

---
> id: step-69

*Solution.* Consider a linearly independent list $L$ of vectors in $V$. If it spans $V$, then it is already a [[basis|linearly independent list]]. If not, then there is a vector in $V$ which is not in the span of $L$. Appending this vector to our list, we obtain a list which is still [[linearly independent|spanning]] by the [linear dependence lemma](gloss:LDL). Continuing in this way, we will eventually get a linearly independent list which spans $V$ (the process can't go on forever since by the time the list has $n$ linearly independent vectors in it, it spans $\mathbb{R}^n$ and therefore also $V$).

---
> id: step-70

We can trim a list without changing its span by working through the list progressively and removing any vector which is in the [[span|list]] of the vectors preceding it. By the [linear dependence lemma](gloss:LDL), applying this procedure to a spanning list results in a linearly independent spanning list.

[Continue](btn:next)

---
> id: step-71

The following exercise tells us that if we start with a basis for the intersection of two vector spaces, and extend it separately to a basis for each of the vector spaces, then the compiled list of all of those basis vectors is still linearly independent.

::: .exercise
**Exercise**  (multiple extension principle)  
Suppose that $U$ and $V$ are vector spaces in $\mathbb{R}^n$. Suppose that $\\{\mathbf{u}\_1, \ldots, \mathbf{u}\_j\\}$ is a basis for $U \cap V$, that $\\{\mathbf{u}\_1, \ldots, \mathbf{u}\_k\\}$ is a basis for $U$, and that $\\{\mathbf{u}\_1, \ldots, \mathbf{u}\_j, \mathbf{v}\_1, \ldots,
  \mathbf{v}\_\ell\\}$ is a basis for $V$. Show that

``` latex
\{\mathbf{u}_1, \ldots, \mathbf{u}_k, \mathbf{v}_1, \ldots, \mathbf{v}_\ell\}
```

is a linearly independent list.
:::

Note: this exercise is on the challenging side. You might want to make your best effort over a reasonable period of time, submit what you've got, and then read the solution.

    x-quill

---
> id: step-72

*Solution.* By the [linear dependence lemma](gloss:LDL), it suffices to check that no vector in the list is in the span of the vectors before it in the list. Since the first $k$ vectors form a basis for $U$, they are linearly [[independent|dependent]]. Therefore, none of these is in the span of the preceding vectors.

---
> id: step-73

Suppose that one of the $\mathbf{v}$'s is in the span of the preceding vectors, say

``` latex
\mathbf{v}_m =  c_{1}\mathbf{u}_1 + c_{2}\mathbf{u}_{2} + \cdots +
c_k\mathbf{u}_k+ d_{1}\mathbf{v}_1 + d_{m-1} \mathbf{v}_{m-1}.
```

Consider the vector $\mathbf{v} = \mathbf{v}\_m - ( d\_{1}\mathbf{v}\_1 + d\_{m-1} \mathbf{v}\_{m-1}) = c\_{1}\mathbf{u}\_1 + c\_{2}\mathbf{u}\_{2} + \cdots + c\_k\mathbf{u}\_k$. This vector is in $V$, since $\mathbf{v}\_m - ( d\_{1}\mathbf{v}\_1 + d\_{m-1} \mathbf{v}\_{m-1})$ is a linear combination of vectors in $V$.

[Continue](btn:next)

---
> id: step-74

But $\mathbf{v}$ is also in $U$ since $c\_{1}\mathbf{u}\_1 + c\_{2}\mathbf{u}\_{2} + \cdots + c\_k\mathbf{u}\_k$ is a linear combination of vectors in $U$. Therefore, $\mathbf{v} \in U \cap V$. But in that case, $\mathbf{v}$ would be in the span of $\\{\mathbf{u}\_1, \ldots \mathbf{u}\_j\\}$, which would mean that $\\{\mathbf{u}\_1, \ldots, \mathbf{u}\_j, \mathbf{v}\_1, \ldots, \mathbf{v}\_\ell\\}$ [[is not|is]] linearly independent.

[Continue](btn:next)

---
> id: step-75

Since $\\{\mathbf{u}\_1, \ldots, \mathbf{u}\_j, \mathbf{v}\_1, \ldots, \mathbf{v}\_\ell\\}$ is a basis for $V$, we have reached a contradiction. Therefore, we may conclude that

``` latex
\{\mathbf{u}_1, \ldots, \mathbf{u}_k, \mathbf{v}_1, \ldots, \mathbf{v}_\ell\}
```

is linearly [[independent|dependent]].

[Continue](btn:next)

---
> id: step-76

### Exercises

::: .exercise
**Exercise**  
Suppose that $V$ and $W$ are subspaces of $\mathbb{R}^{10}$ and that $V$ has dimension 4 and $W$ has dimension 8. Which of the following could possibly be equal to the dimension of $V \cap W$? Select all that apply.

    x-picker.list
      .item.pill.bblue(data-error="too-few") 0
      .item.pill.bblue(data-error="too-few") 1
      .item.pill.bblue 2
      .item.pill.bblue 3
      .item.pill.bblue 4
      .item.pill.bblue(data-error="too-many") 5
      .item.pill.bblue(data-error="too-many") 8
      .item.pill.bblue(data-error="too-many") 9

Hint: consider two two-dimensional spaces in $\mathbb{R}^3$: what are the possible dimensions for the intersection of two planes through the origin in $\mathbb{R}^3$?

:::

---
> id: step-77

*Solution.* Since $V \cap W\subset V$, the dimension of $V\cap W$ is no larger than [[4]]. If $V \subset W$, then $V \cap W = V$, so the dimension of $V$ could be as large as 4. If $\\{\mathbf{v}\_1, \ldots, \mathbf{v}\_{10}\\}$ is a basis of $\mathbb{R}^{10}$, and $W$ is the span of $\\{\mathbf{v}\_1, \ldots, \mathbf{v}\_{8}\\}$ and $V$ is the span of $\\{\mathbf{v}\_1, \mathbf{v}\_2, \mathbf{v}\_3, \mathbf{v}\_9\\}$, then $V \cap W$ would be the span of $\\{\mathbf{v}\_1, \mathbf{v}\_2, \mathbf{v}\_3\\}$, so the dimension could also be 3. Likewise, the dimension of $V\cap W$ could be 2.

---
> id: step-78

However, the dimension of $V \cap W$ cannot be 1. To see this, assume that the dimension of $V \cap W$ is 1 and fix a basis $\\{\mathbf{v}\_1\\}$ for $V \cap W$ and extend it to a basis for $V$, and (separately) also extend it to a basis for $W$. By the [multiple extension principle](gloss:multiple-extension), this would give us a total of $1 + 7 + 3 = 11$ linearly independent vectors in $\mathbb{R}^{10}$, which is impossible. Likewise, the dimension of $V \cap W$ cannot be zero.

---
> id: step-79

So, the possible values for the dimension of $V \cap W$ are 2, 3, and 4.

[Continue](btn:next)

---
> id: step-80

::: .exercise
**Exercise**
A set of 5 column vectors in $\mathbb{R}^7$ with entries selected uniformly at random from $[0,1]$ may be generated using `{py} np.random.random_sample((7,5))` `{jl} rand(7, 5)`. The dimension of the span of the columns of a matrix may then by computed using the function `{py} np.linalg.matrix_rank` `{jl} rank`.

Calculate the dimension of many such spans of random lists of five vectors in $\mathbb{R}^7$. What can you say about the values you get?

    x-picker.list
      .item.pill.bblue All fives
      .item.pill.bblue(data-error="less-five") Mostly fives, some numbers fewer than five
      .item.pill.bblue(data-error="less-five") Mostly threes, some twos and fours, occasional ones and fives
:::

::: .py-only
    pre(python-executable)
      | import numpy as np
:::

::: .jl-only
    pre(julia-executable)
      |
:::

---
> id: step-80b

::: .exercise
**Exercise**  
Repeat the preceding exercise with random vectors whose entries are 0 or 1 with probability $\frac{1}{2}$.

    x-picker.list
      .item.pill.bblue(data-error="all-fives") All fives
      .item.pill.bblue Mostly fives, some numbers fewer than five
      .item.pill.bblue(data-error="all-fives") Mostly threes, some twos and fours, occasional zeros, ones and fives

{.py-only} Hint: for part (b): `{py} np.random.randint(0,2,(5,7))` generates the desired random matrix, and importing `{py} Counter` from `{py} collections` might be helpful for helping you inspect the contents of the list of ranks.
:::

::: .py-only
    pre(python-executable)
      | import numpy as np
:::

::: .jl-only
    pre(julia-executable)
      |
:::

---
> id: step-81

*Solution.* If we run

::: .py-only
    pre(python-executable)
      | rank = np.linalg.matrix_rank
      | def randmat():
      |     return np.random.random_sample((7,5))
      |
      | set([rank(randmat()) for _ in range(100_000)])
:::

::: .jl-only
    pre(julia-executable)
      | using LinearAlgebra
      | Set([rank(rand(7,5)) for _ in range(100_000)])
:::

we get a set containing only `5`. Therefore, five random vectors in $\mathbb{R}^7$ with entries selected uniformly from $[0,1]$ are always or nearly always linearly independent. So the first answer is correct.

[Continue](btn:next)

---
> id: step-82

If we run

::: .py-only
    pre(python-executable)
      | from collections import Counter
      | Counter([rank(np.random.randint(0,2,(7,5))) for i in range(100_000)])
:::

::: .jl-only
    pre(julia-executable)
      | import StatsBase: countmap
      | import LinearAlgebra: rank
      | countmap([rank(rand(0:1, 7, 5)) for i in range(100_000)])
:::

we get mostly fives, quite a few fours, some threes and perhaps a few twos. Therefore, the vectors are not always linearly independent in this case.

---

> id: linear-transformations
## Linear Transformations

Functions describe relationships between sets and thereby add dynamism and expressive power to set theory. Likewise, *linear transformations* describe linearity-respecting relationships between vector spaces. They are useful for understanding a variety of vector space phenomena, and their study gives rise to generalization of the notion of linear dependence which is very useful in numerical applications of linear algebra (including describing the structure of real-world datasets).

[Continue](btn:next)

---
> id: step-83

A **linear transformation** $L$ is a function from one vector space to another which satisfies $L(\alpha \mathbf{v} + \beta \mathbf{w}) = \alpha L(\mathbf{v}) + \beta L(\mathbf{w})$. Geometrically, these are "flat maps": a function is linear if and only if it maps equally spaced lines to equally spaced lines or points.

[Continue](btn:next)

---
> id: step-84

::: .example
**Example**  
In $\mathbb{R}^2,$ reflection along the line $y=x,$ defined by $L\left(\begin{bmatrix}
x \\\\\\
y
\end{bmatrix}\right) = \begin{bmatrix}
y \\\\\\
x
\end{bmatrix}$, is linear because

``` latex
L\left(\alpha \begin{bmatrix}
	x_1 \\\
	y_1
\end{bmatrix} + \beta \begin{bmatrix}
x_2 \\\
y_2
\end{bmatrix} \right) &= \begin{bmatrix}
\alpha y_1 + \beta y_2 \\\
\alpha x_1 + \beta x_2
\end{bmatrix} \\\\
&= \alpha \begin{bmatrix}
	y_1 \\\
	x_1
\end{bmatrix} + \beta \begin{bmatrix}
y_2 \\\
x_2
\end{bmatrix} \\\\
&= \alpha L\left(\begin{bmatrix}
	x_1 \\\
	y_1
\end{bmatrix}\right) + \beta L\left(\begin{bmatrix}
x_2 \\\
y_2
\end{bmatrix}\right).
```

:::

[Continue](btn:next)

---
> id: step-85

Many fundamental geometric transformations are linear. The figure below illustrates several linear transformations (as well as one nonlinear one, for comparison) from the plane to the plane. The leftmost column shows a square grid of points, and the rightmost column shows the images of those points. The other columns show each point somewhere along the path from its original location in the domain to its final location in the codomain, to help you get a sense of which points go where.

    figure: img(src="images/transformations.svg")

[Continue](btn:next)

---
> id: step-86

This 3Blue1Brown video provides some helpful animated illustrations of linear transformations:

    figure.video-wrap
      iframe(src="https://www.youtube.com/embed/kYB8IZa5AuE?start=159&end=211" frameborder="0" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen)

[Continue](btn:next)

---
> id: step-87

### Rank

The **rank** of a linear transformation from one vector space to another is the dimension of its range.

::: .example
**Example**  
If $L\left(\begin{bmatrix} x \\\\\\ y \\\\\\ z \end{bmatrix}\right) = \begin{bmatrix} z+y \\\\\\ z-y \\\\\\ 0 \end{bmatrix}$, then the rank of $L$ is 2, since its range is the $xy$-plane in $\mathbb{R}^3$.
:::

[Continue](btn:next)

---
> id: step-88

::: .exercise
**Exercise**  
Find the rank of the linear transformation $L$ which maps each vector $[x,y]$ to the closest point $[a,2a]$ on the line $y = 2x$. The rank is [[1]].
:::

---
> id: step-89

*Solution.* The range of $L$ is the line $y = 2x$, since every point in the plane maps to a point on this line, and every point on the line is the image under $L$ of infinitely many points in the plane (all of the points on the line [[orthogonal|parallel]] to $y=2x$ through that point). Since a line is a one-dimensional vector space, the rank is $\boxed{1}$.

[Continue](btn:next)

---
> id: step-90

::: .exercise
**Exercise**  
What are the ranks of the five transformations illustrated above?

1. The rank of the rotation is [[2]]
2. The rank of the reflection is [[2]]
3. The rank of the scaling transformation is [[2]].
4. The rank of the shearing transformation is [[2]].
5. The rank of the projection is [[1]].
:::

---
> id: step-91

### Null space

The **null space** of a linear transformation is the set of vectors which are mapped to the zero vector by the linear transformation.

::: .example
**Example**  
If $L\left(\begin{bmatrix} x \\\\\\ y \\\\\\ z \end{bmatrix}\right) = \begin{bmatrix} z+y \\\\\\ z-y \\\\\\ 0 \end{bmatrix}$, then the null space of $L$ is equal to $\mathrm{span}\left(\left\\{\begin{bmatrix} 1 \\\\\\ 0 \\\\\\ 0 \end{bmatrix}\right\\}\right)$, since $L(\mathbf{v}) = 0$ if and only if $\mathbf{v} = \begin{bmatrix} x \\\\\\ 0 \\\\\\ 0 \end{bmatrix}$ for some $x\in \mathbb{R}$.
:::

[Continue](btn:next)

---
> id: step-92

Note that the range of a transformation is a subset of its [[codomain|domain]], while the null space is a subset of its [[domain|codomain]].

---
> id: step-93

Because linear transformations respect the linear structure of a vector space, to check that two transformations from a given vector space to another are equal, it suffices to check that they map all of the vectors in a given basis of the domain to the same vectors in the codomain:

::: .exercise
**Exercise** (basis equality theorem)
Suppose that $V$ and $W$ are vector spaces and that $L\_1$ and $L\_2$ are linear transformations from $V$ to $W$. Suppose that $\mathcal{B}$ is a basis of $V$ and that $L\_1(\mathbf{b}) =
  L\_2(\mathbf{b})$ for all $\mathbf{b}\in \mathcal{B}$. Show that $L\_1(\mathbf{v}) = L\_2(\mathbf{v})$ for all $\mathbf{v} \in V$.
:::

    x-quill

---
> id: step-94

*Solution.* Let $\mathbf{v} \in V$ be an arbitrary vector. Since $\mathcal{B}$ is a basis, we can find coefficients $c\_1, \cdots, c\_{n} \in \mathbb{R}$ such that $\mathbf{v} = c\_{1}\mathbf{b}\_1 + \cdots + c\_{n}\mathbf{b}\_n$. Since $L\_1$ and $L\_2$ are linear, we have

``` latex
L_1(\mathbf{v}) &= L_{1}(c_{1}\mathbf{b}_1 + \cdots + c_{n}\mathbf{b}_n) \\\\
&= c_{1}L_{1}(\mathbf{b}_1) + \cdots + c_{n}L_{1}(\mathbf{b}_n) \\\\
&= c_{1}L_{2}(\mathbf{b}_1) + \cdots + c_{n}L_{2}(\mathbf{b}_n) \\\\
&= L_{2}(c_{1}\mathbf{b}_1 + \cdots + c_{n}\mathbf{b}_n) \\\\
&= L_{2}(\mathbf{v})
```

[Continue](btn:next)

---
> id: step-95

::: .exercise
**Exercise**  
What is the dimension of the null space of the linear transformation $L([x,y,z]) = [y,z,0]$? What is the rank of $L$?

The dimension of the null space is [[1]] and the rank is [[2]].
:::

    x-quill

---
> id: step-95a

*Solution.* To find the dimension of the nullspace, let us first describe it explicitly. $L(x,y,z) = (y,z,0) = 0$ when $y = z= 0$, regardless of what $x$ is. Thus the nullspace is $\\{[x,0,0] \mid x \in \mathbb{R}\\}$, which is just a line with basis vector $[1,0,0]$. Thus, the dimension of the nullspace is $1$. The range of $L$ is the $xy$ plane, which has dimension $\boxed{2}$.

[Continue](btn:next)

---
> id: step-96

We call the dimension of the null space of a linear transformation the **nullity** of the transformation. In the previous exercise, the rank and the nullity of $L$ add to [[3]], which is the dimension of the domain of the transformation. This is true in general: the rank plus the nullity of the zero transformation from $V$ to $W$ sum to the dimension of $V$. From there, if you modify the transformation so that it maps one fewer dimension's worth of vectors fewer to the zero vector, its rank goes up by 1 as well.

[Continue](btn:next)

---
> id: step-97

::: .theorem
**Theorem** (Rank-nullity theorem)
If $V$ and $W$ are vector spaces and $L: V \to W$ is a linear transformation, then the rank of $L$ and the nullity of $L$ sum to the dimension of $V$.
:::

*Proof.* If we [[extend|trim]] any basis $\\{\mathbf{v}\_1, \ldots \mathbf{v}\_k\\}$ of the null space of $L$ to a basis

``` latex
\{\mathbf{v}_1, \ldots, \mathbf{v}_k, \mathbf{v}_{k+1}, \ldots, \mathbf{v}_n\}
```

of $V$, then we claim that

``` latex
\{L(\mathbf{v}_{k+1}), \ldots, L(\mathbf{v}_n)\}
```

is a basis for the [[range|domain|codomain]] of $L$.

---
> id: step-98

These vectors are linearly independent because

``` latex
 c_{k+1}L(\mathbf{v}_{k+1}) + \cdots + c_nL(\mathbf{v}_n) = \boldsymbol{0}
```

implies

``` latex
L(c_{k+1}\mathbf{v}_{k+1} + \cdots + c_n\mathbf{v}_n) = \boldsymbol{0},
```

which in turn implies that $c\_{k+1}\mathbf{v}\_{k+1} + \cdots + c\_n\mathbf{v}\_n$ is in the null space of $L$. Since $\\{\mathbf{v}\_1, \ldots, \mathbf{v}\_k\\}$ spans the null space of $L$, this implies that $c\_{k+1}\mathbf{v}\_{k+1} + \cdots + c\_n\mathbf{v}\_n$ is equal to the zero vector, and that in turn implies that all the weights are zero. This concludes the proof that $\\{L(\mathbf{v}\_{k+1}), \ldots, L(\mathbf{v}\_n)\\}$ [[is linearly indepedent|spans the range of $L$]].

---
> id: step-99

To see that $\\{L(\mathbf{v}\_{k+1}), \ldots, L(\mathbf{v}\_n)\\}$ [[spans|is spanned by]] the range of $L$, note that if $\mathbf{w} = L(\mathbf{v})$ for some $\mathbf{v}$, then writing $\mathbf{v}$ as a linear combination of $\mathbf{v}\_1, \ldots, \mathbf{v}\_n$, we have

``` latex
\mathbf{w} = L(c_1 \mathbf{v}_1 + \cdots + c_n \mathbf{v}_n) =
L(c_{k+1}\mathbf{v}_{k+1} + \cdots + c_n \mathbf{v}_n),
```

by linearity of $L$. This shows that $\mathbf{w}$ is in the [[span|range]] of the vectors $\\{L(\mathbf{v}\_{k+1}), \ldots, L(\mathbf{v}\_n)\\}$.

Since the list $\\{L(\mathbf{v}\_{k+1}), \ldots, L(\mathbf{v}\_n)\\}$ spans the range of $L$ and is linearly independent, it is a [[basis]] of the range of $L$. Therefore, the dimension of the range of $L$ is $n-k$, and the rank of $L$ plus the nullity of $L$ is $(n-k)+k = n$.

---
> id: step-100

::: .exercise
**Exercise**  
Suppose you're designing an app that recommends cars. For every person in your database, you have collected twenty values: age, height, gender, income, credit score, etc. In your warehouse are ten types of cars. You envision your recommendation system as a linear transformation $T: \mathbb{R}^{20} \to \mathbb{R}^{10}$ that takes in a person's data and then returns a number for each car, reflecting how well that car fits their needs. The rank of $T$ can be as high as ten, which we might summarize by saying that your recommendation system can have ten degrees of complexity.

After some time, you find that storing all twenty variables takes up too much space in your database. Instead, you decide to take those twenty variables and apply a linear aggregate score function $S: \mathbb{R}^{20} \to \mathbb{R}^{3}$, with the three output components corresponding to health, personality, and finances. You also compute a linear map $R: \mathbb{R}^{3} \to \mathbb{R}^{10}$ that takes in these three aggregate scores and returns a vector of recommendation values. The total recommendation system is the composition $R \circ S: \mathbb{R}^{20} \to \mathbb{R}^{10}$. What is the maximum possible rank of $R \circ S$? What does this mean for the complexity of this recommendation system?
:::

    x-quill

---
> id: step-100a

*Solution.* The image of the transformation $R \circ S: \mathbb{R}^{20} \to \mathbb{R}^{10}$ is contained in the image of the transformation $R:\mathbb{R}^{3} \to \mathbb{R}^{10}$. As a result, the rank of $R \circ S$ is at most the rank of $S$, which is at most three. By reducing your twenty basic variables to three combined scores, your recommendation system only has three degrees of freedom, and can therefore only distinguish customers along three axes.

---

> id: matrices
## Matrices

A **matrix** is a rectangular array of numbers:

``` latex
\begin{bmatrix}
4 & 2 & -3 & 1 \\
2 & -1 & 5 & 9 \\
-2 & 8 & 6 & 2 \\
4 & -1 & 5 & 4 \\
2 & -1 & 2 & -5
\end{bmatrix}
```

We report the size of a matrix using the convention *number of rows by number of columns*. In other words, a matrix with $m$ rows and $n$ columns is said to be an $m\times n$ matrix. The matrix above is [[5]] by [[4]].

---
> id: step-101

{.py-only} We refer to the entry in the $i$ th row and $j$ th column of a matrix $A$ as $A$'s (i,j)th entry, and we denote it as $A\_{i,j}$. In Python, the (i,j)th entry may be referenced as `{py} A[i,j]`.

{.jl-only} We refer to the entry in the $i$ th row and $j$ th column of a matrix $A$ as $A$'s (i,j)th entry, and we denote it as $A\_{i,j}$. In Julia, the (i,j)th entry may be referenced as `{jl} A[i,j]`.

[Continue](btn:next)

---
> id: step-102

Matrices are versatile structures with a variety of problem-solving uses. For example,

* A matrix can be thought of as a list of column vectors, so we can use a matrix to package many column vectors into a single mathematical object.

* An $m\times n$ matrix can be thought of as a linear transformation from $\mathbb{R}^n$ to $\mathbb{R}^m$.

In this section, we will develop both of these perspectives and define some operations which facilitate common manipulations that arise when handling matrices.

[Continue](btn:next)

---
> id: step-103

::: .definition
**Definition** (Matrix addition and scalar multiplication)  
We define **matrix addition** for two $m\times n$ matrices $A$ and $B$ entrywise: the sum $A+B$ is $m\times n$, and each entry is defined to be the sum of the corresponding entries in $A$ and $B$.

Likewise, the product of a number $c$ and an $m\times n$ matrix $A$ is defined to be the $m\times n$ matrix each of whose entries is $c$ times the corresponding entry of $A$.
:::

[Continue](btn:next)

---
> id: step-104

::: .exercise
**Exercise**  
Find the value of $c$ such that

``` latex
\begin{bmatrix}
  6 & 7 & -1 \\
  1 & 3 & 5
\end{bmatrix}
+ (1-c)
\begin{bmatrix}
  4 & -4 & 2 \\
  -2 & 0 & 1
\end{bmatrix}
=
\begin{bmatrix}
  -2 &  15 &  -5 \\
  5 &  3 & 3
\end{bmatrix}
```

Note that two matrices are considered equal if each pair of corresponding entries are equal.

The solution is $c = $ [[3]].

:::

---
> id: step-105

*Solution.* If we look at the middle entry of the bottom row of the two sides of the equation, get

``` latex
3 + (1-c)0 = 3
```

We can see that this equation will hold regardless of the value of $c$. The equation corresponding to the top-right corner is

``` latex
6 + (1-c)4  = -2
```

Solving this equation, we find that $c=3$. Therefore, if there is a solution to the original matrix equation, it must be $c=3$. We can then check the remaining four equations to see that $c=3$ is indeed a solution.

[Continue](btn:next)

---
> id: step-106

### Matrices as linear transformations

One of the most useful ways to think of a matrix is as a concrete representation of a linear transformation. The following definition provides the connection between matrices and maps between vector spaces.

[Continue](btn:next)

---
> id: step-107

::: .definition
**Definition** (Matrix-vector multiplication)  
If $A$ is an $m\times n$ matrix and $\mathbf{x}$ is a column vector in $\mathbb{R}^n$, then $A\mathbf{x}$ is defined to be the linear combination of the columns of $A$ with weights given by the entries of $\mathbf{x}$.
:::

[Continue](btn:next)

---
> id: step-108

::: .example
**Example**  
If $A = \begin{bmatrix}
  	1 & 1 \\\\\\
  	0 & 1
  \end{bmatrix}$ and $\mathbf{x} = \begin{bmatrix}
  	2 \\\\\\
  	3
  \end{bmatrix},$ then $
  A\mathbf{x} = a \begin{bmatrix}
    1 \\\\\\
    0
  \end{bmatrix} + b \begin{bmatrix}
    1 \\\\\\
    1
  \end{bmatrix}
  = \begin{bmatrix}
    c \\\\\\
    d
  \end{bmatrix}$ where $a =$ [[2]], $b = $ [[3]], $c = $ [[5]], and $d = $ [[3]].
:::

---
> id: step-109

As advertised, the transformations described in the definition of matrix-vector multiplication are *linear*:

::: .exercise
**Exercise**  
Suppose that $A$ is an $m \times n$ matrix. Show that $\mathbf{x} \mapsto A\mathbf{x}$ is a linear transformation.
:::

*Solution.* Suppose $A$ has columns $\mathbf{a}\_1, \cdots \mathbf{a}\_n$ and $\mathbf{x} = [x\_1, \cdots, x\_n]$. By definition,

``` latex
A\mathbf{x}= x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n
```

Consider a second vector $\mathbf{y} = [y\_1, \cdots, y\_n]$. We have

``` latex
A(\mathbf{x} + \mathbf{y}) & = (x_1 + y_1)\mathbf{a}_1 + \cdots + (x_n + y_n)\mathbf{a}_n\\
                           & = (x_1 \mathbf{a}_1 + \cdots + x_n
                             \mathbf{a}_n) + (y_1 \mathbf{a}_1 +
                             \cdots + y_n \mathbf{a}_n) \\
                           & = A\mathbf{x} + A\mathbf{y}.
```

 Next, let $c \in \mathbb{R}$ be a constant.

``` latex
A(c\mathbf{x}) &= (cx_1)\mathbf{a}_1  + \cdots + (cx_n)\mathbf{a}_n\\
               &= c(x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n)\\
               &= c(A\mathbf{x})
```

These are the two requirements for a transformation to be considered linear, so $\mathbf{x} \mapsto A\mathbf{x}$ is indeed linear.

[Continue](btn:next)

---
> id: step-110

It turns out that *every* linear transformation from $\mathbb{R}^n$ to $\mathbb{R}^m$ can be represented as $\mathbf{x}\mapsto A\mathbf{x}$ for some matrix $A$. The entries of the matrix $A$ may be obtained from $L$ by placing the components of $L(\mathbf{e}\_1)$ in the first column of $A$, the components of $L(\mathbf{e}\_2)$ in the second column, and so on.

With this definition of $A$, we have that $A\mathbf{e}\_1$ [[is equal to|is not equal to]] $L(\mathbf{e}\_1)$, and similarly for the other standard basis vectors. Since the equation $L(\mathbf{x}) = A\mathbf{x}$ holds for all $\mathbf{x}$ in a basis of $\mathbb{R}^n$, we conclude that it holds for *all* $\mathbf{x} \in \mathbb{R}^n$ (by the [basis equality theorem](gloss:basisequality)).

::: .exercise
**Exercise**  
Find the matrix corresponding to the linear transformation $T([x,y,z]) = [z,x,y]$.
:::

    x-quill

---
> id: step-111

*Solution.* Based on the first component of the expression for $T([x,y,z])$, we find that the first column of the matrix representing $T$ is $[0, 1, 0]$. Similarly, the next two columns are $[0,0,1]$, and $[1,0,0]$. Altogether, we find that the matrix is

``` latex
\begin{bmatrix}
  0 & 0 & 1 \\
  1 & 0 & 0 \\
  0 & 1 & 0
\end{bmatrix}.
```

[Continue](btn:next)

---
> id: step-112

::: .exercise
**Exercise**  
Suppose that $A$ is an $m\times n$ matrix and $\mathbf{b}$ is a vector in $\mathbb{R}^m$ with the property that the equation $A\mathbf{x} = \mathbf{b}$ has at least one solution $\mathbf{x} \in \mathbb{R}^n$. Show that the solution is unique if and only if the columns of $A$ are linearly independent.
:::

The intuition is that $\mathbf{x}$ provides a recipe for how much of each column of $A$ to use to get $\mathbf{b}$. If the columns of $A$ are linearly dependent, then we can swap out a unit of one of the vectors for some combination of others. This swappability shows that the solution is nonunique.

    x-quill

---
> id: step-113

*Solution.* If the columns $\mathbf{a}\_1, \ldots \mathbf{a}\_n$ of $A$ are not linearly independent, then one of the columns is a linear combination of the columns to its left, say

``` latex
\mathbf{a}_k = c_1\mathbf{a}_1 + \cdots + c_{k-1}\mathbf{a}_{k-1}.
```

Therefore, given any solution of $A\mathbf{x} = \mathbf{b}$, we can obtain another solution by increasing the $k$th component of $\mathbf{x}$ by [[1]] and decreasing the first component by $c\_1$, the second by $c\_2$, and so on, up to $c\_{k-1}$.

 [Continue](btn:next)

---
> id: step-114

Conversely, if there are distinct solutions $\mathbf{x}\_1$ and $\mathbf{x}\_2$, then $A(\mathbf{x}\_2 - \mathbf{x}\_1) = $ [[0]]. Therefore, the components of $\mathbf{x}\_2 - \mathbf{x}\_1$ provide the weights for a linear combination of the [[columns|rows]] of $A$ which is equal to the zero vector.

---
> id: step-115

### Matrix multiplication

With the perspective that matrices should represent linear transformations, it makes sense to define matrix multiplication so that corresponds to *composition* of the corresponding linear transformations.

::: .definition
**Definition** (matrix multiplication)  
If $A$ is an $m\times n$ matrix and $B$ is an $n\times p$ matrix, then $AB$ is defined to be the matrix for which $(AB)(\mathbf{x}) = A(B\mathbf{x})$ for all $\mathbf{x} \in \mathbb{R}^p$.
:::

[Continue](btn:next)

---
> id: step-116

This definition specifies the matrix product of two matrices, but it doesn't give us an algorithm for calculating it. Let's work that out in the context of a specific example:

::: .exercise
**Exercise** (matrix product)
Suppose that $ A =
  \begin{bmatrix}
    3 & -1 & 2 \\\\\\
    4 & 2 & 0
  \end{bmatrix}
  $ and $B = \begin{bmatrix}
    4 & -5 & 0 & 1 \\\\\\
    2 & 8 & 0 & 0 \\\\\\
    -1 & 5 & 3 & 2
  \end{bmatrix}
  $. Consider the matrix $C$ defined so that, for all $1 \leq k \leq 4$, the $k$ th column of $C$ is defined to be the product of $A$ and the $k$ th column of $B$. Show that $C = AB$ according to the definition of matrix multiplication.
:::


*Solution.* Let $\mathbf{x} = [x\_1,x\_2,x\_3,x\_4]$ be an arbitrary vector in $\mathbb{R}^4$. By definition,

``` latex
(AB)\mathbf{x} = A(B\mathbf{x})
```

Let's compute the expression $A(B\mathbf{x})$ on the right-hand side. Firstly, we have

``` latex
B\mathbf{x} = x_1 \begin{bmatrix}
4 \\\ 2 \\\ 1
\end{bmatrix} + x_2 \begin{bmatrix}
-5  \\\  8  \\\  5
\end{bmatrix} + x_3 \begin{bmatrix}
0 \\\ 0 \\\ 3
\end{bmatrix} + x_4 \begin{bmatrix}
1 \\\ 0 \\\ 2
\end{bmatrix}.
```

Then, by linearity, we have

``` latex
A(B\mathbf{x}) &= A \left(x_1 \begin{bmatrix}
4 \\\ 2 \\\ 1
\end{bmatrix} + x_2 \begin{bmatrix}
-5  \\\  8  \\\  5
\end{bmatrix} + x_3 \begin{bmatrix}
0 \\\ 0 \\\ 3
\end{bmatrix} + x_4 \begin{bmatrix}
1 \\\ 0 \\\ 2
\end{bmatrix}\right)\\
&= x_1 A \left( \begin{bmatrix}
4 2 \\\ 1
\end{bmatrix} \right) +  x_2 A \left( \begin{bmatrix}
-5 \\\ 8 \\\ 5
\end{bmatrix} \right) +  x_3 A \left( \begin{bmatrix}
0 \\\ 0 \\\ 3
\end{bmatrix} \right) +  x_4 A \left( \begin{bmatrix}
1 \\\ 0 \\\ 2
\end{bmatrix} \right)\\
& = C\mathbf{x}
```

This demonstrates that $(AB)\mathbf{x}$ is equal to $C\mathbf{x}$ for the matrix $C$ described in the problem.

[Continue](btn:next)

---
> id: step-117

The principle worked out in this exercise is general: the $k$th column of $AB$ is the product of $A$ and the $k$th column of $B$, for each column index $k$. In other words,

``` latex
AB = A[\begin{array}{cccc}\mathbf{b}_1 & \mathbf{b}_2 & \cdots & \mathbf{b}_n\end{array}] =
[\begin{array}{cccc} A\mathbf{b}_1 & A\mathbf{b_2} & \cdots & A\mathbf{b}_n\end{array}],
```

where the notation $B = [\begin{array}{cccc}\mathbf{b}\_1 & \mathbf{b}\_2 & \cdots & \mathbf{b}\_n\end{array}]$ means that $\mathbf{b}\_1, \ldots, \mathbf{b}\_n$ are the columns of $B$. We call this observation the **product column rule**.

[Continue](btn:next)

---
> id: step-118

### The invertible matrix theorem

The range or null space of a matrix $A$ is defined to be the range or null space of the corresponding linear transformation $\mathbf{x}\mapsto A\mathbf{x}$.

::: .exercise
**Exercise**  
Show that a matrix represents an injective transformation if and only if its null space is $\\{\boldsymbol{0}\\}$.
:::

    x-quill

---
> id: step-119

*Solution.* A linear transformation always maps a zero vector to the zero vector, so an [[injective]] linear transformation cannot map any other vector to the zero vector. Therefore, the null space of an injective transformation is the set containing only the zero vector.

---
> id: step-120

If a transformation is not injective, then there are two distinct vectors $\mathbf{v}\_1$ and $\mathbf{v}\_2$ which map to the same vector $\mathbf{b}$. By linearity, the transformation maps $\mathbf{v}\_1 - \mathbf{v}\_2$ to $\mathbf{b} - \mathbf{b} = \boldsymbol{0}$. Since $\mathbf{v}\_1 - \mathbf{v}\_2$ is not equal to the [[zero]] vector, this implies that the null space contains more than just the zero vector. It follows that a matrix whose null space contains only the zero vector is indeed [[injective|surjective]].

---
> id: step-121

The **rank** of $A$ is defined to be the dimension of its range.

::: .example
**Example**  
The matrix $A = \begin{bmatrix}
  		0 & 1 & 0 \\\\\\
  		0 & 0 & 2
  	\end{bmatrix}$ has rank $2$, because the span of its columns is all of $\mathbb{R}^2$. The null space has dimension 1, since the solution of $A \mathbf{x} = \boldsymbol{0}$ is the span of $\\{[1,0,0]\\}$.
:::

[Continue](btn:next)

---
> id: step-122

For a matrix which is **square** (meaning that it represents a transformation from some space $\mathbb{R}^n$ to itself), injectivity, surjectivity, and bijectivity are all equivalent:

::: .theorem
**Theorem** (Invertible matrix theorem)  
Suppose that $A$ is an $n\times n$ matrix. Then the following are equivalent (that is, for a given matrix they are either all true or all false).

1. The transformation $\mathbf{x}\mapsto A\mathbf{x}$ from $\mathbb{R}^n$ to $\mathbb{R}^n$ is bijective.
2. The range of $A$ is $\mathbb{R}^n$.
3. The null space of $A$ is $\\{\boldsymbol{0}\\}$.

:::

In other words, for a linear transformation from $\mathbb{R}^n$ to $\mathbb{R}^n$, bijectivity, surjectivity, and injectivity are equivalent.

*Proof.* We begin by showing that (ii) and (iii) are equivalent. If the columns of $A$ are linearly dependent, then the range of $A$ is spanned by fewer than $n$ vectors. Therefore, if the rank of $A$ is equal to $n$, then the columns of $A$ are linearly independent. This implies that a linear combination of the columns is equal to the zero vector only if the weights are all zero. In other words, the only solution of the equation $A\mathbf{x} = \boldsymbol{0}$ is the zero vector. In other words, the null space of $A$ is $\\{\boldsymbol{0}\\}$.

[Continue](btn:next)

---
> id: step-123

Conversely, if the null space of $A$ is $\\{\boldsymbol{0}\\}$, then the columns of $A$ are linearly [[independent|dependent]], and the rank of $A$ is therefore equal to $n$.

[Continue](btn:next)

---
> id: step-124

By definition of bijectivity, (ii) and (iii) together imply (i), and (i) implies (ii) and (iii). Therefore, the three statements are equivalent.

[Continue](btn:next)

---
> id: step-125

### The inverse matrix

If $A$ is invertible, then the inverse function is also a linear transformation:

::: .exercise
**Exercise**  
Show that if $L$ is a bijective linear transformation, then the inverse function $L^{-1}$ is also linear.
:::

    x-quill

---
> id: step-125a

*Solution.* Consider the linearity equation $L(a\mathbf{x} + b\mathbf{y}) = aL(\mathbf{x}) + bL(\mathbf{y})$ and two vectors $\mathbf{v} = L(\mathbf{x})$ and $\mathbf{w} = L(\mathbf{y})$ in the range of $L$. Substitute $\mathbf{x} = L^{-1}(\mathbf{v})$ and $\mathbf{x} = L^{-1}(\mathbf{v})$ into the linearity equation for $L$ to obtain

``` latex
L(a L^{-1}(\mathbf{v}) + b L^{-1}(\mathbf{w})) = a\mathbf{v} + b\mathbf{w},
```

which implies that

``` latex
a L^{-1}(\mathbf{v}) +
b L^{-1}(\mathbf{w}) = L^{-1}(a\mathbf{v} + b\mathbf{w}).
```

    x-quill

---
> id: step-126

If $\mathbf{x}\mapsto A\mathbf{x}$ is invertible, then matrix of the inverse of $\mathbf{x}\mapsto A\mathbf{x}$ is called the **inverse** of $A$ and is denoted $A^{-1}$. The matrices $A$ and $A^{-1}$ satisfy the equations $AA^{-1} = A^{-1} A = I$, where $I$ denotes the $n\times n$ *identity* matrix, which has ones along the diagonal starting at the top left entry and zeros elsewhere.

::: .example
**Example**  
If $A = \begin{bmatrix}
  	2 & 1 \\\\\\
  	1 & 1
  	\end{bmatrix}$
and $B = \begin{bmatrix}
  	1 & -1 \\\\\\
  	-1 & 2
  	\end{bmatrix},$
then

``` latex
BA = \begin{bmatrix}
1 & -1 \\\
-1 & 2
\end{bmatrix}
\begin{bmatrix}
2 & 1 \\\
1 & 1
\end{bmatrix} =
\begin{bmatrix}
1 & 0 \\\
0 & 1
\end{bmatrix}.
```

Therefore $B(A\mathbf{x}) = (BA)\mathbf{x} = \mathbf{x}$ for all $\mathbf{x} \in \mathbb{R}^2.$ So $B = A^{-1}.$

:::

[Continue](btn:next)

---
> id: step-127

::: .exercise
**Exercise**  
Let $T : \mathbb{R}^2 \to \mathbb{R}^2$ be a linear transformation defined to be a reflection across the $y$-axis followed by a $15$-degree clockwise rotation about the origin. Which of the following maps $T\left(\begin{bmatrix}
        1 \\\\\\
        0
      \end{bmatrix}\right)$ back to $\begin{bmatrix}
      1 \\\\\\
      0
    \end{bmatrix}?$

    x-picker.list
      .item.bblue.pill.md(data-error="mat-inv-order") Reflection across the $y$-axis followed by a $15$-degree counterclockwise rotation about the origin.
      .item.bblue.pill.md A $15$-degree counterclockwise rotation about the origin followed by a reflection across the $y$-axis.

Use the above example to write $(AB)^{-1}$ in terms of $A$ and $B$, when $A$ and $B$ are invertible matrices.

:::

---
> id: step-128

*Solution.* The correct answer is (b). The transformation in (a) maps $
T\left(
\begin{bmatrix}
1 \\\\\\
0
\end{bmatrix}
\right)
$ to $ \frac{1}{2}
\begin{bmatrix}
1 \\\\\\
\sqrt{3}
\end{bmatrix}.
$

The example above illustrates geometrically that to invert a transformation represented by $AB,$ we may multiply the inverses of the two matrices and reverse the order: $(AB)^{-1} = B^{-1}A^{-1}.$ This is a general fact about function inverses and composition. We can see this [algebraically](gloss:algebraically) by writing $B^{-1}A^{-1}AB = BB^{-1} = I$.

::: .exercise
**Exercise**  

Let $A$ be a non-zero $n \times n$ matrix whose rank is $k$.
* If $k = n$ and $\mathbf{b} \in \mathbb{R}^n,$ explain why there exists only one vector $\mathbf{x}$ such that $A\mathbf{x} = \mathbf{b}.$
* Suppose $k < n$ and show that there are vectors in $\mathbb{R}^n$ for which the equation $A \mathbf{x} = \mathbf{b}$ has no solution.
* If $\mathbf{x} \in \mathbb{R}^n$ and $\mathbf{y} \in \mathbb{R}^n$ both satisfy $A\mathbf{x} = \mathbf{b}$ and $A\mathbf{y} = \mathbf{b}$ for some fixed vector $\mathbf{b} \in \mathbb{R}^n,$ describe geometrically the set of points $(c\_1, c\_2) \in \mathbb{R}^2$ such that $A(c\_1\mathbf{x} + c\_2\mathbf{y}) = \mathbf{b}.$

Based on the above observations, can the equation $A\mathbf{x} = \mathbf{b}$ have exactly $10$ solutions?

:::

    x-quill

---
> id: step-128a

*Solution.*  

1. If $ k = n,$ then the columns of $A$ form a basis for $\mathbb{R}^n$ and so the range of $A$ is $\mathbb{R}^n.$ Therefore the corresponding linear transformation is invertible and the only vector that satisfies $A\mathbf{x} = \mathbf{b}$ is given by $\mathbf{x} = A^{-1}\mathbf{b}.$

2. By definition, if the range of $A$ is not all of $\mathbb{R}^n$, then there exists a vector $\mathbf{b}$ in $\mathbb{R}^n$ which is not in the range of $A$. In other words, there exists $\mathbf{b}\in \mathbb{R}^n$ such that $A\mathbf{x} = \mathbf{b}$ has no solution.

3. From

``` latex
A(c_1\mathbf{x} + c_2\mathbf{y}) &= c_1A\mathbf{x} + c_2
     A\mathbf{y} \\\ &= c_1\mathbf{b} + c_2\mathbf{b} \\\ &= (c_1 +
     c_2)\mathbf{b},
```

we see that the set of valid pairs $(c\_1, c\_2) \in \mathbb{R}^2$ is the diagonal line $x+y = 1$ in $\mathbb{R}^2.$

From $(1)$ and $(2)$, we see that the equation $A\mathbf{x} =
\mathbf{b}$ can have $1$ or no solution. From $(3)$, we see that if there are at least two distinct solutions, then there are in fact infinitely many solutions. So $10$ is not a possibility.

---

> id: dot-products
## Dot Products

Consider a shop inventory which lists unit prices and quantities for each of the products they carry. For example, if the store has 32 small storage boxes at \$4.99 each, 18 medium-sized boxes at \$7.99 each, and 14 large boxes at \$9.99 each, then the inventory's price vector $\mathbf{p}$ and quantity vector $\mathbf{q}$ are

``` latex
\mathbf{p} = \begin{bmatrix}
  4.99 \\\ 7.99 \\\ 9.99
\end{bmatrix}, \quad
  \mathbf{q} =
\begin{bmatrix}
  32 \\\ 18 \\\ 14
\end{bmatrix}.
```

The total value of the boxes in stock is

``` latex
(32)($4.99) + (18)($7.99) + (14)($9.99) = $443.36.
```

This operation—multiplying two vectors' entries in pairs and summing—arises often in applications of linear algebra and is also foundational in the theory of linear algebra.

::: .definition
**Definition**  
The **dot product** of two vectors in $\mathbb{R}^n$ is defined by

``` latex
\mathbf{x} \cdot \mathbf{y} = x_1y_1 + x_2y_2 + \cdots + x_n
y_n.
```

:::

::: .example
**Example**  
If $\mathbf{x} = \begin{bmatrix}
    1 \\\\\\
    3 \\\\\\
    5 \\\\\\
    7
  \end{bmatrix}$ and $\mathbf{y} =\begin{bmatrix}
    2 \\\\\\
    4 \\\\\\
    6 \\\\\\
    8
  \end{bmatrix},$ then $
  \mathbf{x} \cdot \mathbf{y} = $ [[1]] ⋅ [[2]] + [[3]] ⋅ [[4]] + [[5]] ⋅ [[6]] + [[7]] ⋅ [[8]] = 100.
:::

One of the most [algebraically](gloss:algebraically) useful features of the dot product is its linearity (which may be checked using the definition):

``` latex
\mathbf{x} \cdot (c\mathbf{y} + \mathbf{z}) = c \mathbf{x} \cdot \mathbf{y} + \mathbf{x} \cdot \mathbf{z}
```

[Continue](btn:next)

---
> id: step-129

The dot product also has two fundamental connections to geometry. The first is the identity

``` latex
|\mathbf{a}|^2 = \mathbf{a} \cdot \mathbf{a}
```

for all vectors $\mathbf{a}$. Let's see how this identity can work in conjunction with linearity of the dot product.

::: .exercise
**Exercise**  
Show that $|\mathbf{a} +\mathbf{b}|^2 =
    |\mathbf{a}|^2 + 2 \mathbf{a}\cdot \mathbf{b} + |\mathbf{b}|
    ^2$ for all vectors $\mathbf{a}$ and $\mathbf{b}$ in $\mathbb{R}^n$.
:::

    x-quill

---
> id: step-130

*Solution.* Using linearity of the dot product, we get

``` latex
(\mathbf{a} + \mathbf{b}) \cdot (\mathbf{a} + \mathbf{b}) &= \mathbf{a} \cdot (\mathbf{a} + \mathbf{b}) + \mathbf{b}\cdot (\mathbf{a} + \mathbf{b})  \\\
&= \mathbf{a} \cdot \mathbf{a} + \mathbf{a}\cdot\mathbf{b} + \mathbf{b} \cdot \mathbf{a} + \mathbf{b} \cdot \mathbf{b} \\\
&= |\mathbf{a}|^2 + 2\mathbf{a}\cdot\mathbf{b} + |\mathbf{b}|^2
```

as required.

[Continue](btn:next)

---
> id: step-131

The second connection between geometry and the dot product pertains to *angle*. If $\theta$ is the angle between two vectors $\mathbf{x}$ and $\mathbf{y}$ (when they are situated so that their tails coincide), then

``` latex
\mathbf{x} \cdot \mathbf{y} =
|\mathbf{x}| |\mathbf{y}|\cos\theta.
```

It follows that $\mathbf{x} \cdot \mathbf{y}  = 0$ if and only if $\mathbf{x}$ and $\mathbf{y}$ meet at a [[right|acute|obtuse|zero]] angle. We say that two vectors $\mathbf{x}$ and $\mathbf{y}$ which satisfy $\mathbf{x} \cdot \mathbf{y}  = 0$ are **orthogonal**.

---
> id: step-132

::: .exercise
**Exercise**  
In natural language processing, one basic way to compare a finite number of text documents is to use *vectorized word counts.* Suppose the documents have a combined total of $n$ distinct words, which are arranged in some order. Each document is then associated with a vector of length $n$ whose $i$th entry indicates the number of times the $i$ th word occurs in the associated document.

One way to measure similarity between two documents is to take the dot product of the associated unit vectors: If two documents $A$ and $B$ have associated vectors $\mathbf{a}$ and $\mathbf{b}$ respectively, their similarity is defined by

``` latex
S(A, B) = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}| |\mathbf{b}|}.
```

By the [dot product cosine formula](gloss:dotproductcosine), we have $0 \leq S(A, B) \leq 1$ for any two documents $A$ and $B.$ Documents with no words in common are associated with orthogonal vectors and thus have $0$ similarity. If two documents have similarity $1,$ their associated vectors are scalar multiples of each other, meaning that they have the same words and that the words appear in the same proportions.

The vectorized word count similarity between the sentences

{.text-center} "The rain in Spain falls mainly in the plain"

{.text-center} "The plain lane in Spain is mainly a pain"

is [[0.647±0.02]].

:::

*Solution.* Listing the words in the order *the, in, rain, Spain, falls, mainly, plain, lane, pain, is, a*, the two vectorized word counts are $[2,2,1,1,1,1,1,0,0,0,0]$ and $[1,1,0,1,0,1,1,1,1,1,1]$. Substituting into the definition of $S$, we get a similarity of approximately 0.647.

[Continue](btn:next)

---
> id: step-133

::: .exercise
**Exercise**  
Let $\mathbf{v}\_1, \dots, \mathbf{v}\_n$ be a list of orthogonal non-zero vectors, that is, for all $i, j \in \\{1, \dots, n\\},$ suppose that $\mathbf{v}\_i \cdot \mathbf{v}\_j = 0$ whenever $i \neq j$. Show that this list is linearly independent.
:::

    x-quill

---
> id: step-134

*Solution.* Suppose, for the sake of contradiction, that the vectors are linearly [[dependent|independent]]. Then one of the vectors can be written as a linear combination of the others. Suppose $\mathbf{v}\_1$ is such a vector. Then there exists a list of weights $c\_2, \dots, c\_n$ such that

``` latex
\mathbf{v}_1 = c_2\mathbf{v}_2 + \cdots + c_n\mathbf{v}_n.
```

---
> id: step-135

Then

``` latex
0 &= \mathbf{v}_1 \cdot \mathbf{v}_2 \\\
& = (c_2\mathbf{v}_2 + \cdots + c_n\mathbf{v}_n) \cdot \mathbf{v}_2 \\\
& = c_2|\mathbf{v}_2|^2.
```

Since $|\mathbf{v}\_2|^2 = 1$, this implies that $c\_2$ is zero. Repeating this for all vectors $\mathbf{v}\_3, \dots, \mathbf{v}\_n$ we see that $c\_2=c\_3 = \cdots = c\_n = 0$. Thus $\mathbf{v}\_1$ is also zero (since it's a linear combination of the other vectors, with all zero weights), and that contradicts the fact that $|\mathbf{v}\_1|^2 = $ [[1]].

The same reasoning tells us that none of the vectors in the list can be equal to a linear combination of the others. Therefore the vectors must be linearly [[independent|dependent]].

---
> id: step-136

The following exercise illustrates another way of calculating matrix products. We will call it the **matrix product dot formula**:

::: .exercise
**Exercise**  
Let $A =
  \begin{bmatrix}
    3 & -1 & 2 \\\\\\
    4 & 2 & 0
  \end{bmatrix}
  $ and $B = \begin{bmatrix}
    4 & -5 & 0 & 1 \\\\\\
    2 & 8 & 0 & 0 \\\\\\
    -1 & 5 & 3 & 2
  \end{bmatrix}.
  $ Consider the matrix $C$ whose $(i,j)$th entry is equal to the dot product of the $i$th row of $A$ and the $j$th column of $B$. Show that $C = AB$, and use this fact to work out the full product $AB$.
:::

---
> id: step-137

*Solution.* By the [product column rule](gloss:productcolumnrule), the first column of $AB$ is $A\mathbf{b}\_1$, where $\mathbf{b}\_1$ is the first [[column|row]] of $B$. Therefore, the first entry of that column is $A_{1,1}B_{1,1} + A_{1,2}B_{2,1} +\cdots + A_{1,n}B_{n,1}$. This is the dot product of the first row of $A$ and the first column of $B$. The same reasoning applies to the other entries.

Calculating all eight such dot products, we find that

``` latex
\begin{bmatrix}
  8 & -13 & 6 & 7 \\\
  20 & -4 & 0 & 4
\end{bmatrix}
```

[Continue](btn:next)

---
> id: step-138

### Block multiplication

A **block matrix** is a matrix defined using smaller matrices which are called **blocks**. For example, suppose that

``` latex
A &= \begin{bmatrix}
  2 & 4 & 7 & 6 \\
  5 & 2 & 4 & 5
\end{bmatrix} \\
B &= \begin{bmatrix}
  1 & 3 \\\
  0 & 2
\end{bmatrix} \\
C &= \begin{bmatrix}
  3 & 0 & 1 & 7
\end{bmatrix} \\
D &= \begin{bmatrix}
  6 & 4
\end{bmatrix}
```

[Continue](btn:next)

---
> id: step-139

Then the block matrix $\begin{bmatrix} A & B \\\\\\ C & D \end{bmatrix}$ defined in terms of the blocks $A$, $B$, $C$, and $D$ is

``` latex
\begin{bmatrix}
  A & B \\ C & D
\end{bmatrix} =
\begin{bmatrix}
  2 & 4 & 7 & 6 & 1 & 3 \\
  5 & 2 & 4 & 5 & 0 & 2 \\
  3 & 0 & 1 & 7 & 6 & 4
\end{bmatrix}.
```

[Continue](btn:next)

---
> id: step-140

The advantage of writing a matrix in block form is that we can formally carry out the matrix multiplication dot formula, treating the blocks as matrix entries, and we get the correct result (in block form). For example,

``` latex
\begin{bmatrix}
  A & B \\ C & D
\end{bmatrix}\begin{bmatrix}
  E & F \\ G & H
\end{bmatrix} = \begin{bmatrix}
  AE + BG & AF + BH \\ CE + DG & CF + DH
\end{bmatrix}
```

if $\begin{bmatrix} A & B \\\\\\ C & D \end{bmatrix}$ and $\begin{bmatrix} E & F \\\\\\ G & H \end{bmatrix}$ are block matrices with blocks $A$, $B$, $C$, $D$, $E$, $F$, $G$, blocks $H$. We call this the **block matrix product formula**.

[Continue](btn:next)

---
> id: step-141

::: .exercise
**Exercise**  
Verify the matrix product block formula above with

``` latex
E &= \begin{bmatrix}
 7 \\\ 0 \\\ 2 \\\ 4
\end{bmatrix},
F = \begin{bmatrix}
  5 & 3 \\\ 3 & 2 \\\ 0 & 6 \\\ 2 & 1
\end{bmatrix},
G = \begin{bmatrix}
 6 \\\ 1
\end{bmatrix}, \text{ and }
H = \begin{bmatrix}
  2 & 0 \\\ 0 & 2
\end{bmatrix}.
```
:::

::: .py-only
    pre(python-executable)
      |
:::

::: .jl-only
    pre(julia-executable)
      |
:::


[Continue](btn:next)

---
> id: step-142

*Solution.* We have

``` latex
AE + BG &= \begin{bmatrix} 61 \\\ 65 \end{bmatrix} \\
CE + DG &= \begin{bmatrix} 91 \end{bmatrix} \\
AF + BH &= \begin{bmatrix} 36 & 68 \\\ 41 & 52 \end{bmatrix} \\
CF + DH &= \begin{bmatrix} 41 & 30 \end{bmatrix}
```

while

``` latex
\begin{bmatrix}
  A & B \\\ C & D
\end{bmatrix}\begin{bmatrix}
  E & F \\\ G & H
\end{bmatrix} =
\begin{bmatrix}
  61 & 36 & 68 \\\
  65 & 41 & 52 \\\
  91 & 41 & 30
\end{bmatrix}.
```

So the block matrix product formula checks out.

[Continue](btn:next)

---
> id: step-143

::: .exercise
**Exercise**  
Show that if $A$ is a matrix whose columns are $\mathbf{a}\_1, \ldots,  \mathbf{a}\_n$ and $B$ is a matrix whose rows are $\mathbf{b}\_1', \ldots, \mathbf{b}\_n'$, then $AB = \mathbf{a}\_1\mathbf{b}\_1' + \mathbf{a}\_2\mathbf{b}\_2' + \cdots + \mathbf{a}\_n\mathbf{b}\_n'$
:::

    x-quill

---
> id: step-144

*Solution.* This follows directly from the block matrix product formula by writing $A$ is a block matrix with its columns as blocks and $B$ with its rows as blocks.

[Continue](btn:next)

---

> id: transposes
## Transposes

The dot product gives us a compact way to express the formula for an entry of a matrix product: to obtain the $(i,j)$th entry of a matrix product $AB$, we dot the $i$th row of $A$ and the $j$th column of $B$.

However, the matrix product by itself is not quite flexible enough to handle a common use case: suppose we have two matrices $A$ and $B$ which contain tabular data stored in the same format. For example, suppose that the columns of $A$ store the vectorized word counts for a series of emails sent from Alice, while $B$ stores vectorized word counts for a series of emails sent from Bob. If we want to calculate the similarity of each of Alice's email to each of Bob's emails, then we want to dot the *columns* of $A$—not its rows—with the columns of $B$.

[Continue](btn:next)

---
> id: step-145

So we define the **transpose** $A'$ of a matrix $A$ to be the matrix which results from switching the rows and columns of $A$.

::: .definition
**Definition**  
If $A$ is an $m\times n$ matrix, then its **transpose** $A'$ is defined to be the matrix with $n$ rows whose $i$ th row is equal to the $i$ th column of $A$, for each $i$ from 1 to $n$.
:::


::: .example
**Example**  
If $A = \begin{bmatrix}
  	1 & 2 & 3 \\\\\\
  	4 & 5 & 6
  \end{bmatrix},$ then $A' =\begin{bmatrix}
  	1 & 4 \\\\\\
  	2 & 5 \\\\\\
  	3 & 6
  \end{bmatrix}.$
:::

[Continue](btn:next)

---
> id: step-146

With this definition in hand, we can write the matrix whose entries are the dot products of columns of $A$ and $B$ as $A' B$.

[Continue](btn:next)

---
> id: step-147

### Transpose properties

Let's develop a few properties of the transpose so that we can manipulate matrix expressions involving the transpose. First, we note that the transpose is a *linear* operator, meaning that $(cA+B)' = cA' + B'$ whenever $c$ is a constant and $A$ and $B$ are matrices.

Taking the transpose also interacts nicely with matrix multiplication:

::: .exercise
**Exercise**  
Suppose that $A$ is an $m \times n$ matrix and that $B$ is an $n \times p$ matrix. Exactly one of the following expressions is equal to $(AB)'$ in general—identify the correct answer choice by checking the dimensions of each matrix in each expression. [[`B' A'`|`A' B'`|`ABA'`]]

::: .py-only
Confirm your conjecture numerically in Python with some random matrices. You can generate a random $m \times n$ matrix using `{py} np.random.random_sample((m,n))`, the transpose of `{py} A` is accessed as `{py} A.T`, and the product of `{py} A` and `{py} B` is `{py} A * B`.
:::

::: .jl-only
Confirm your conjecture numerically in Julia with some random matrices. You can generate a random $m \times n$ matrix using `{jl} rand(m, n)`.
:::
:::

::: .py-only
    pre(python-executable)
      | import numpy as np
:::

::: .jl-only
    pre(julia-executable)
      |
:::

    x-quill

---
> id: step-148

*Solution.* Since $AB$ is an $m \times p$ matrix, the matrix $(AB)'$ is $p \times m$.

*  $A' B'$: this is an $n \times m$ matrix multiplied by a $p \times n$ matrix, and if $m \neq p$ it is not defined. If it is defined, it gives an $n \times n$ matrix.
*  $B' A'$: this is a $p \times n$ matrix multiplied by an $n \times m$ matrix and hence is a $p \times m$ matrix.
*  $AB$ is an $m \times p$ matrix, and $A'$ is an $n \times m$ matrix. If $p \neq n$ this is not defined. If it is defined, it gives an $m \times m$ matrix.

We see that the only matrix product that is always defined, and in fact gives the right dimensions, is the second option. And in fact, we have

``` latex
(AB)' = B' A'
```

in general.

The following block of code checks the equation for a particular random example.

::: .py-only
    pre(python-executable)
      | import numpy as np
      | A = np.random.random_sample((3,7))
      | B = np.random.random_sample((7,3))
      | np.allclose((A @ B).T, B.T @ A.T)
:::

::: .jl-only
    pre(julia-executable)
      | A = rand(3, 7)
      | B = rand(7, 3)
      | isapprox((A * B)', B' * A')
:::

[Continue](btn:next)

---
> id: step-149

### Symmetric Matrices

In some applications, a matrix will have the property that its $(i,j)$th entry is necessarily equal to its $(j,i)$th entry. For example, suppose we have an ordered list of 100 cell phone towers, and we define the $100 \times 100$ matrix whose $(i,j)$th entry is equal to the distance from tower $i$ to tower $j$. Such a matrix is said to be *symmetric*.

::: .definition
**Definition**  
If $A$ is an $n\times n$ matrix satisfying the equation $A = A'$, we say that $A$ is **symmetric**.
:::

[Continue](btn:next)

---
> id: step-150

::: .exercise
**Exercise**  
Suppose that $A$ is a symmetric matrix, $B$ is a matrix, and $c \in  \mathbb{R}$. Which of the following is necessarily equal to $(c^2 (A+B)' + A)'$?

    x-picker.list
      .item.pill.bblue.md  $c^2 A' + B$
      .item.pill.bblue.md  $(c^2 - 1) A' + B'$
      .item.pill.bblue.md  $(c^2 + 1) A + c^2 B$
      .item.pill.bblue.md  $(c^2 - 1) A + B'$
      .item.pill.bblue.md  $(c^2 + 1) A + c^2 B'$

:::

*Solution.*  We have

``` latex
(c^2 (A+B)' + A)' & = (c^2 (A' + B') + A)' \\
                    & = (c^2 A' + c^2 B' + A)' \\
                    & = c^2 (A')' + c^2 (B')' + A' \\
                    & = c^2 A + c^2 B + A' \\
                    & = c^2 A + c^2 B + A' \\
                    & = (c^2 + 1)A + c^2 B
```

Here we used that $(X')' = X$ for any matrix $X$, and that $A' = A$ for a symmetric matrix $A$. This leaves (3) as the correct answer. (5) is close, but incorrect if $B \neq B'$.

[Continue](btn:next)

---
> id: step-151

In the case where $A$ is a $n \times 1$ matrix and $B$ is an $n\times 1$ for some $n$, then $A' B$ is a $1 \times 1$ matrix, which we may think of as just a number. This means that if $\mathbf{x}$ and $\mathbf{y}$ are vectors in $\mathbb{R}^n$ then the dot product $\mathbf{x} \cdot \mathbf{y}$ may be written as $\mathbf{x}' \mathbf{y}$. This representation can be useful for manipulating expressions involving dot products:

[Continue](btn:next)

---
> id: step-152

::: .exercise
**Exercise**  
Show that

``` latex
\mathbf{u} \cdot (A\mathbf{v}) = (A'\mathbf{u})\cdot \mathbf{v}
```

for all $m\times n$ matrices $A$ and all vectors $\mathbf{u} \in
	\mathbb{R}^m$ and $\mathbf{v} \in \mathbb{R}^n$.
:::


*Solution.* Since $\left(A'\right)' = A,$ we have

``` latex
\left(A' \mathbf{u}\right) \cdot \mathbf{v} &= \left(A' \mathbf{u}\right)' \mathbf{v} \\
&= \mathbf{u}' \left(A'\right)' \mathbf{v} \\
&= \mathbf{u}' \left(A\mathbf{v}\right) \\
&= \mathbf{u} \cdot \left(A\mathbf{v}\right).
```

[Continue](btn:next)

---
> id: step-153

In other words, we may move a matrix which is pre-multiplying one of the vectors in a dot product to the other vector, at the cost of taking its transpose. Let's look at one application of this property whose importance will be explored in subsequent sections.

::: .exercise
**Exercise**  
Show that $\mathbf{x}\cdot (A' A\mathbf{x}) \geq 0$ for all $m\times n$ matrices $A$ and all $\mathbf{x} \in \mathbb{R}^n$.
:::

    x-quill

---
> id: step-154

*Solution.* We have

``` latex
\mathbf{x}\cdot (A' A\mathbf{x}) =
((A')'\mathbf{x})\cdot (A\mathbf{x}) =
(A\mathbf{x}) \cdot (A\mathbf{x}) = |A \mathbf{x}|^2 \geq 0.
```

---

> id: orthogonality
## Orthogonality

The **orthogonal complement** $V^\perp$ of a vector space $V\subset \mathbb{R}^n$ is the set of vectors in $\mathbb{R}^n$ which are orthogonal to every vector in $V$. For example, the orthogonal complement a two-dimensional subspace $V$ of $\mathbb{R}^3$ is the [[line|plane]] through the origin perpendicular to the plane of vectors in $V$.

---
> id: step-155

::: .exercise
**Exercise**  
The orthogonal complement of the span of the columns of a matrix $A$ is equal to [[the null space of `A'`|the range of `A`|the null space of `A`|the range of `A'`]].
:::

---
> id: step-156

*Solution.* The correct answer is the null space of `A'`, because for a vector $\mathbf{x}$ to be orthogonal to all of the columns of $A$, the equation $A' \mathbf{x} = \boldsymbol{0}$ must hold, by the [matrix product dot formula](gloss:matrixproductdot). In other words, $\mathbf{x}$ must be in the null space of $A'$.

Furthermore, if $\mathbf{x}$ is in the null space of $A'$, then it is orthogonal to any linear combination of the columns of $A$, since

``` latex
(c_1 \mathbf{a}_1 + c_2 \mathbf{a}_2 + \cdots + c_n \mathbf{a}_n)
\cdot \mathbf{x} &=
c_{1}\mathbf{a}_{1}\cdot\mathbf{x}+c_{2} \mathbf{a}_{2}\cdot\mathbf{x} +\cdots+c_{n}\mathbf{a}_{n}\cdot\mathbf{x}_{n}
\\ &= 0 + 0 + \cdots + 0 \\ &= 0.
```

Therefore, orthogonal complement of the span of the columns of a matrix $A$ is equal to the null space of $A'$.

[Continue](btn:next)

---
> id: step-157

### Orthogonal decomposition

For any vectors $\mathbf{u}$ and $\mathbf{v}$ in $\mathbb{R}^n$, it is always possible to write $\mathbf{u}$ as the sum of a multiple of $\mathbf{v}$ and a vector which is perpendicular to $\mathbf{v}$:

::: .exercise
**Exercise** (Orthogonal decomposition)  
 Suppose that $\mathbf{u}$ and $\mathbf{v}$ are nonzero vectors in $\mathbb{R}^n$. Solve the equation

``` latex
k\mathbf{v} \cdot (\mathbf{u} - k\mathbf{v}) = 0
```

for $k$ to find the multiple of $\mathbf{v}$ which is perpendicular to its difference with $\mathbf{u}$.

    figure: img(src="images/perp.svg")

:::

    x-quill

---
> id: step-158

*Solution.* The equation gives $k\mathbf{u}\cdot \mathbf{v} - k^2 |\mathbf{v}|^2 = 0$, which implies that

``` latex
k = \frac{\mathbf{u}\cdot \mathbf{v}}{|\mathbf{v}|^2}.
```

If $\mathbf{u}$ is equal to $k\mathbf{v} + \mathbf{w}$ where $\mathbf{w}$ is perpendicular to $\mathbf{v}$, then we call $k\mathbf{v}$ the **projection** of $\mathbf{u}$ onto $\mathbf{v}$. As the geometric intuition suggests, the projection of $\mathbf{u}$ onto $\mathbf{v}$ is the closest vector to $\mathbf{u}$ among all vectors parallel to $\mathbf{v}$.

[Continue](btn:next)

---
> id: step-159

Orthogonal bases can be much more [geometrically](gloss:geometrically) and [algebraically](gloss:algebraically) useful than bases which are not orthogonal. Fortunately, it is always possible to *orthogonalize* a basis without changing its span:

::: .theorem
**Theorem** (Gram-Schmidt)  
Every vector space $V\subset \mathbb{R}^n$ has an orthogonal basis.
:::

[Continue](btn:next)

---
> id: step-160

*Proof.* Suppose that $\mathcal{V} = \{\mathbf{v}\_1, \ldots, \mathbf{v}\_k\}$ is a basis of $\mathbb{R}^n$. We will build our orthogonal basis by orthogonalizing $\mathcal{V}$ one vector at a time.

Define $\mathbf{b}\_1 = \mathbf{v}\_1$, and then define $\mathbf{b}\_2$ to be the part of $\mathbf{v}\_2$ which is orthogonal to $\mathbf{b}\_1$:

``` latex
\mathbf{b}_2 = \mathbf{v}_2 - \frac{\mathbf{b}_1 \cdot
\mathbf{v}_2}{|\mathbf{b}_1|^2} \mathbf{b}_1.
```

[Continue](btn:next)

---
> id: step-161

Similarly, we project $\mathbf{v}\_3$ onto $\mathbf{b}\_1$ and onto $\mathbf{b}\_2$ and subtract off both of these projections:

``` latex
\mathbf{b}_3 = \mathbf{v}_3 - \frac{\mathbf{b}_2 \cdot
  \mathbf{v}_3}{|\mathbf{b}_2|^2}\mathbf{b}_2 -  \frac{\mathbf{b}_1 \cdot
  \mathbf{v}_3}{|\mathbf{b}_1|^2}\mathbf{b}_1.
```

Then $\\{\mathbf{b}\_1, \mathbf{b}\_2, \mathbf{b}\_3\\}$ has the same span as $\\{\mathbf{v}\_1, \mathbf{v}\_2, \mathbf{v}\_3\\}$ and is pairwise orthogonal. We may continue this procedure (project each new $\mathbf{v}\_i$ onto each of the preceding $\mathbf{b}$'s and subtract off all of these projections) until we reach the end of the list, thereby obtaining an orthogonal basis of $V$.

[Continue](btn:next)

---
> id: step-162

::: .theorem
**Theorem**  
Suppose $V\subset \mathbb{R}^n$ is a vector space. Then every vector $\mathbf{u} \in \mathbb{R}^n$ can be written as the sum of a vector in $V$ and a vector in $V^\perp$.
:::

[Continue](btn:next)

---
> id: step-163

*Proof.* Consider an orthogonal basis $\\{\mathbf{v}\_1, \ldots, \mathbf{v}\_k\\}$ of $V$, and define

``` latex
\mathbf{v} = \frac{\mathbf{v}_1 \cdot
\mathbf{u}}{|\mathbf{v}_1|^2}\mathbf{v}_1 + \cdots +
\frac{\mathbf{v}_k \cdot \mathbf{u}}{|\mathbf{v}_k|^2}\mathbf{v}_k
```

Then $\mathbf{v}$ is in $V$ and $\mathbf{u} - \mathbf{v}$ is [[perpendicular|parallel]] to all of the $\mathbf{v}\_i$'s and therefore to every vector in $V$.

---
> id: step-164

::: .exercise
**Exercise**  
Suppose that $V$ is a $d$-dimensional vector space in $\mathbb{R}^n$. Show that there is a basis of $\mathbb{R}^n$ whose first $d$ vectors form a basis for $V$ and whose last $n-d$ vectors form a basis for $V^\perp$.
:::

    x-quill

---
> id: step-165

*Solution.* Suppose that $\\{\mathbf{v}\_{1},\mathbf{v}\_{2},\ldots,\mathbf{v}\_{d}\\}$ is a basis for $V$ and $\\{\mathbf{w}\_{1},\mathbf{w}\_{2},\ldots,\mathbf{w}\_{e}\\}$ is a basis for $W = V^\perp$. We claim that

``` latex  
\{\mathbf{v}_{1},\mathbf{v}_{2},\ldots,\mathbf{v}_{d},
\mathbf{w}_{1},\mathbf{w}_{2},\ldots,\mathbf{w}_{e} \}
```

is a basis for $\mathbb{R}^n$.

[Continue](btn:next)

---
> id: step-166

First, it's linearly independent because no vector is in the span of the preceding vectors: (1) the $\mathbf{v}\_i$'s are linearly [[independent|dependent]], so none of them is in the span of the preceding vectors. And (2) if, for some $i$, the vector $\mathbf{w}\_i$ is in the span of the preceding vectors in the list, then it can be written as $\mathbf{v} + \mathbf{w}$ for some vector $\mathbf{v}$ in $V$ and some vector $\mathbf{w}$ in the span of $\mathbf{w}\_1, \ldots, \mathbf{w}\_{i-1}$. Dotting both sides of the equation

``` latex
\mathbf{v} + \mathbf{w} = \mathbf{w}_i
```

by $\mathbf{v}$, we find that $|\mathbf{v}|^2 = 0$, which implies that $\mathbf{v} = \boldsymbol{0}$. Thus $\mathbf{w} = \mathbf{w}\_i$, which is not compatible with the fact that the $\mathbf{w}\_i$'s form a [[basis|linearly dependent set]].

---
> id: step-167

Therefore, we conclude that $\\{\mathbf{v}\_{1},\mathbf{v}\_{2},\ldots,\mathbf{v}\_{d}, \mathbf{w}\_{1},\mathbf{w}\_{2},\ldots,\mathbf{w}\_{e}\\}$ is linearly independent.

[Continue](btn:next)

---
> id: step-168

Finally, the list $\\{\mathbf{v}\_{1},\mathbf{v}\_{2},\ldots,\mathbf{v}\_{d}, \mathbf{w}\_{1},\mathbf{w}\_{2},\ldots,\mathbf{w}\_{e} \\}$  spans $\mathbb{R}^n$ since every vector in $\mathbb{R}^n$ can be written as a sum of a vector in $V$ and a vector in $V^\perp$.

[Continue](btn:next)

---
> id: step-169

### Orthogonal matrices

Suppose we can write a given transformation $T$ as a composition involving (i) a single transformation $\Lambda$ which scales space along the coordinate axes, and (ii) some other transformations which preserve distances and angles—like rotations and reflections in $\mathbb{R}^2$ or $\mathbb{R}^3$. Such a decomposition of $T$ would be useful because it isolates the space-distorting behavior of $T$ in the simple transformation $\Lambda$. In preparation for developing such a decomposition, let's study transformations which are distance-preserving and angle-preserving.

[Continue](btn:next)

---
> id: step-170

A transformation $x\mapsto U\mathbf{x}$ from $\mathbb{R}^n$ to $\mathbb{R}^n$ is distance-preserving if the norm of $\mathbf{x}$ is the same as the norm of $U\mathbf{x}$ for all $\mathbf{x} \in
\mathbb{R}^n$. Using dot products, we can write the distance-preserving condition as

``` latex
\mathbf{x} \cdot \mathbf{x} = (U\mathbf{x}) \cdot (U\mathbf{x})
```

[Continue](btn:next)

---
> id: step-171

If the transformation preserves angles as well as distances, then $(U\mathbf{x}) \cdot (U\mathbf{y})$ must also be equal to $\mathbf{x} \cdot \mathbf{y}$ for all $\mathbf{x}$ and $\mathbf{y}$ in $\mathbb{R}^n$. Rewriting this equation using transposes, we see that we want

``` latex
\mathbf{x}' \mathbf{y} = \mathbf{x}' U'
U\mathbf{y}
```

for all $\mathbf{x}$ and $\mathbf{y}$ in $\mathbb{R}^n$. This identity only holds if $U' U$ is equal to the identity matrix. This leads us to the following definition.

::: .definition
**Definition** (Orthogonal matrix)  
A square matrix $U$ is **orthogonal** if $U' U$ is equal to the identity matrix.
:::

[Continue](btn:next)

---
> id: step-172

Equivalently, we can say that a square matrix is orthogonal if and only if its columns are *orthonormal*, which means that they are orthogonal and have unit norm. If a non-square matrix $U$ satisfies $U' U = I$, then we refer to $U$ as a *matrix with orthonormal columns*.

[Continue](btn:next)

---
> id: step-173

::: .exercise
**Exercise**  
(i) Explain why, for an $m \times n$ matrix $U$ with orthonormal columns, we must have $m \geq n$. (ii) Explain why the rank of $U$ is $n$.
:::

    x-quill

---
> id: step-174

*Solution.*  
* We first recall that the number of linearly independent columns in $U$ cannot be greater than $m$ because the range of $U$ is a subspace of $\mathbb{R}^m.$ Now, by definition, the $n$ columns of $U$ are orthogonal and non-zero. These columns must be linearly independent, so $n \leq m.$

* The rank of $U$ is equal to the number of linearly independent columns in $U,$ which is $n$ in this case.

[Continue](btn:next)

---
> id: step-175

If $U$ is an $m\times n$ matrix with orthonormal columns and if $n < m$, then $U U'$ is an $m\times m$ matrix of rank $n$ and therefore cannot be the identity matrix. In fact, $U U'$ is a projection matrix:

::: .exercise
**Exercise**  
Show that if $U$ is an $m \times n$ matrix with orthonormal columns, then $UU'$ is the matrix of the transformation which projects each vector in $\mathbb{R}^m$ onto the $n$-dimensional subspace of $\mathbb{R}^m$ spanned by the columns of $U$.
:::

    x-quill

---
> id: step-176

*Solution.* The transformation which maps a vector $\mathbf{w}$ onto the span of the columns $\mathbf{u}\_1, \ldots \mathbf{u}\_n$ of $U$ is given by

``` latex
T(\mathbf{w}) =
\frac{\mathbf{u}_{1}\cdot\mathbf{w}}{|\mathbf{u}_{1}|^2}\mathbf{u}_{1}
+\frac{\mathbf{u}_{2}\cdot\mathbf{w}}{|\mathbf{u}_{2}|^2}\mathbf{u}_{2}+
\cdots+\frac{\mathbf{u}_{n}\cdot\mathbf{w}}{|\mathbf{u}_{n}|^2}\mathbf{u}_{n}.
```

 All of the denominators in this formula are equal to 1 because the columns of $U$ are unit vectors. So

``` latex  
T(\mathbf{w}) = \mathbf{u}_1(\mathbf{u}_1\cdot \mathbf{w})+ \cdots +
\mathbf{u}_n(\mathbf{u}_n\cdot \mathbf{w}).
```

 The vector whose components are the expressions in parentheses, namely $[\mathbf{u}\_1\cdot \mathbf{w}, \ldots, \mathbf{u}\_n\cdot \mathbf{w}]$, is equal to $U' \mathbf{w}$, by the definition of the matrix-vector product. Applying that definition a second time (interpreting $\mathbf{u}\_1(\mathbf{u}\_1\cdot \mathbf{w})+ \cdots + \mathbf{u}\_n(\mathbf{u}\_n\cdot \mathbf{w})$ as a linear combination of the $\mathbf{u}\_i$'s with weights given by the parenthetical dot products), we find that $T(\mathbf{w}) = UU' \mathbf{w}$.

[Continue](btn:next)

---
> id: step-177

::: .exercise
**Exercise**  
Let $\mathbf{v}$ be a vector in $\mathbb{R}^n$, and consider the linear transformation $T: \mathbb{R}^{n} \to \mathbb{R}$ defined as $T(\mathbf{x}) = \mathbf{v} \cdot \mathbf{x}$. What is the rank of $T$? Geometrically describe the null space of $T$.
:::

    x-quill

---
> id: step-178

*Solution.* The rank of $T$ is $1$ if $\mathbf{v} \neq \mathbf{0},$ otherwise the rank is $0.$ Geometrically, the null space of $T$ is the set of vectors in $\mathbb{R}^n$ that are orthogonal to $\mathbf{v}.$

[Continue](btn:next)

---
> id: step-179

### An application: linear regression

One of the most common methods in statistics is *linear regression*. Given $n$ columns of numerical data, we seek a linear combination of the first $n-1$ columns which gets as close as possible to the last column. This can be helpful if the last column contains values you want to predict and the other columns  contain data which is accessible at the time of prediction. For example, the last column might contain points scored by a given player in a Game 7 of a playoff series, while the previous $n-1 = 6$ columns contain the number of points scored by that player in the first 6 games of that series.

[Continue](btn:next)

---
> id: step-180

Suppose that the first $n-1$ columns are arranged into a matrix $A$ and the last column is called $\mathbf{b}$. Since [[`Ax`|`xA`|`x'A'`]] represents an arbitrary linear combination of the columns of $A$, we are looking for the value of $\mathbf{x}$ which minimizes the squared [norm](gloss:norm) $|A\mathbf{x} - \mathbf{b}|^2$. Geometrically, it makes sense that if $\mathbf{x}$ is chosen minimally, then $A\mathbf{x} - \mathbf{b}$ will be orthogonal to every column of $A$. In other words, we will have

``` latex
A'(A\mathbf{x} - \mathbf{b}) = 0,
```

which implies that $\mathbf{x} = (A'A)^{-1}(A'\mathbf{b})$, assuming $A'A$ is invertible. This intuition is accurate, and the equation we derived is called the **normal equation**.

::: .exercise
**Exercise**  
Use the code below to build a random 100 × 6 matrix whose first five columns are linearly dependent and whose sixth column is not in the span of the first five. Use the normal equation to try to solve for the weights of the linear combination of the first five columns which gets closest to the sixth column. What goes wrong?

Note: `{py} np.linalg.solve(A,b)` `{jl} A \\ b` solves the equation $A\mathbf{x} = \mathbf{b}$ for $\mathbf{x}$.
:::

::: .py-only
    pre(python-executable)
      | import numpy as np
      | A = np.random.randint(0,2,(100,6))
      | A[:,4] = A[:,3] + A[:,2]
:::

::: .jl-only
    pre(julia-executable)
      | A = rand(0:1, 100, 6)
      | A[:, 5] = A[:, 4] + A[:, 3]
:::

    x-quill

---
> id: step-181

*Solution* We try

::: .py-only
    pre(python-executable)
      | b = A[:,5]
      | A = A[:,:-1]
      | np.linalg.solve(A.T @ A, A.T @ b)
:::

::: .jl-only
    pre(julia-executable)
      | b = A[:,5]
      | A = A[:,1:end-1]
      | (A' * A) \ (A' * b)
:::

and we get an error telling us that $A'A$ is not invertible. This makes sense, because $A'A$ has the same rank as $A$, and we know $A$ is [rank deficient](gloss:rankdeficient). Since there are different ways of combining the columns of $A$ to get the vector in its column space which is as close as possible to $\mathbf{b}$, it is not possible that we would have gotten a unique answer using this method.

[Continue](btn:next)

---
> id: step-182

::: .exercise
**Exercise**  
Try the previous exercise again, but this time with the linear dependence relation holding only approximately. What goes wrong this time?
:::

::: .py-only
    pre(python-executable)
      | import numpy as np
      | A = 1.0*np.random.randint(0,2,(100,5))
      | b = np.random.randint(0,2,(100,))
      | A[:,4] = A[:,3] + A[:,2] + 1e-3*np.random.standard_normal(100)
:::

::: .jl-only
    pre(julia-executable)
      | A = 1.0*rand(0:1, 100, 5)
      | b = 1.0*rand(0:1, 100)
      | A[:,4] = A[:,3] + A[:,2] + 1e-3*randn(100)
:::

    x-quill

---
> id: step-183

*Solution.* We take a look at the solution:

::: .py-only
    pre(python-executable)
      | plt.bar(range(5),np.linalg.solve(A.T @ A, A.T @ b))
:::

::: .jl-only
    pre(julia-executable)
      | using Plots
      | bar(1:5,(A' * A) \ (A' * b), label = "solution components")
:::

We see that it gives large and oppositely-signed coefficients for the last three vectors. We can tell that the optimization process is leveraging the tiny difference between the last vector and the sum of the two before it to "reach" in the direction of $\mathbf{b}$. Although we did not get a singularity error this time, the result is no less undesirable, because predictions which depend on tiny differences between measured values are clearly not going to be useful. We will see what we can do about this problem when we develop the *singular value decomposition*.

---

> id: eigenanalysis
## Eigenanalysis

In this section we will see how we can better understand a linear transformation by breaking it down into [[simpler|more complicated]] linear transformations.

---
> id: step-184

Let $T$ be a linear transformation from $\mathbb{R}^n$ to $\mathbb{R}^n$. Suppose that $\mathcal{B}$ is a basis of $\mathbb{R}^n$, that $V$ is the span of some of the vectors in $\mathcal{B}$, and that $W$ is the span of the remaining vectors in $\mathcal{B}$. Then any vector in $\mathbb{R}^n$ can be written as the sum of a vector $\mathbf{v}$ in $V$ and a vector $\mathbf{w}$ in $W$. Since $T(\mathbf{v} + \mathbf{w}) = T(\mathbf{v}) + T(\mathbf{w})$, we can see how $T$ behaves on all of $\mathbb{R}^n$ if we know how it behaves on $V$ and on $W$. This decomposition is particularly helpful if $V$ and $W$ are chosen so that $T$ behaves in a simple way on $V$ and on $W$.  

[Continue](btn:next)

---
> id: step-185

Given such a decomposition of $\mathbb{R}^n$ into the vector spaces $V$ and $W$, we can apply the same idea to split $V$ and $W$ into lower-dimensional vector spaces and repeat until no more splits are possible. The most optimistic outcome of this procedure would be that we get all the way down to $n$ one-dimensional subspaces and that $T$ acts on each of these subspaces by simply scaling each vector in that subspace by some factor. In other words, we would like to find $n$ vectors $\mathbf{v}$ for which $T(\mathbf{v})$ is a scalar multiple of $\mathbf{v}$. This leads us to the following definition.

[Continue](btn:next)

---
> id: step-186

::: .definition
**Definition**  
An **eigenvector** $\mathbf{v}$ of an $n\times n$ matrix $A$ is a *nonzero* vector with the property that $A\mathbf{v} = \lambda \mathbf{v}$ for some $\lambda \in \mathbb{R}$ (in other words, $A$ maps $\mathbf{v}$ to a vector which is either zero or parallel to $\mathbf{v}$). We call $\lambda$ an **eigenvalue** of $A$, and we call the eigenvector together with its eigenvalue an **eigenpair**.
:::

[Continue](btn:next)

---
> id: step-187

::: .example
**Example**  
Every nonzero vector is an eigenvector (with eigenvalue [[1]]) of the identity matrix.
:::

---
> id: step-188

::: .exercise
**Exercise**  
Find a matrix with eigenpairs $([1,0],2)$ and $([1,1],3)$. Sketch the images of some gridlines under multiplication by this matrix to show how it scales space along the lines through its eigenvectors. Verbally describe your results below.
:::

    x-quill

---
> id: step-189

*Solution.* Writing out the equations implied by the given eigenpair relations, we see that the first implies that the first column of the matrix is $[2,0]$, and the second (together with the first) implies that the second column of the matrix is $[1,3]$.

The following gridline images show how the transformation distorts space. Equally spaced points which are separated in the east-west direction get spread out by a factor of 2, while the diagonal line gets stretched out by a factor of 3. Since $3 > 2$, this introduces a bottom-left-to-top-right tilt for the images of the vertical gridlines.

    figure: img(src="images/gridlines.svg")

[Continue](btn:next)

---
> id: step-190

### Eigenspaces

If $\mathbf{v}\_1, \dots, \mathbf{v}\_n$ are eigenvectors of $A$ with the same eigenvalue $\lambda$ and $\mathbf{v} = c\_1\mathbf{v}\_1 + \cdots + c\_n\mathbf{v}\_n$ for some weights $c\_1, \dots, c\_n$ such that $c\_i \neq 0$ for at least one $i \in \\{1, \dots, n\\},$ then $\mathbf{v}$ is also an eigenvector of $A$ with eigenvalue $\lambda$ because

``` latex
A\mathbf{v} &= A(c_1\mathbf{v}_1 + \cdots + c_n\mathbf{v}_n) \\
&= c_1A\mathbf{v}_1 + \cdots + c_nA\mathbf{v}_n \\
&= c_1 \lambda \mathbf{v}_1 + \cdots c_n \lambda \mathbf{v}_n \\
&= \lambda (c_1\mathbf{v}_1 + \cdots c_n\mathbf{v}_n) \\
&= \lambda \mathbf{v}.
```

Therefore, the set of all eigenvectors corresponding to a particular eigenvalue form a [[vector space|linear dependence]]. Such a space is called an **eigenspace**.

[Continue](btn:next)

---
> id: step-191

::: .exercise
**Exercise**  
Let $A$ be a $4 \times 4$ matrix, with eigenvectors $\begin{bmatrix} 1
  \\\\\\ 1 \\\\\\ 0 \\\\\\ 0 \end{bmatrix}$ and $\begin{bmatrix} 0 \\\\\\ 0 \\\\\\ 2 \\\\\\
  -3\end{bmatrix}$, both with eigenvalue $3$. Find $A\left(\begin{bmatrix}
5 \\\\\\ 5 \\\\\\ 8 \\\\\\ -12
\end{bmatrix}\right)$.

:::

    x-quill

---
> id: step-192

*Solution.* Since $
\begin{bmatrix}
5 \\\\\\
5 \\\\\\
8 \\\\\\
-12
\end{bmatrix} = 5
\begin{bmatrix}
1 \\\\\\
1 \\\\\\
0 \\\\\\
0
\end{bmatrix} + 4
\begin{bmatrix}
0 \\\\\\
0 \\\\\\
2 \\\\\\
-3
\end{bmatrix},
$ we find that $
A\left( \begin{bmatrix}
5 \\\\\\
5 \\\\\\
8 \\\\\\
-12
\end{bmatrix}\right) = 3
\begin{bmatrix}
5 \\\\\\
5 \\\\\\
8 \\\\\\
-12
\end{bmatrix} =
\begin{bmatrix}
15 \\\\\\
15 \\\\\\
24 \\\\\\
-36
\end{bmatrix}.
$

[Continue](btn:next)

---
> id: step-193

::: .exercise
**Exercise**  

Let $V \subset \mathbb{R}^n$ be a subspace spanned by the eigenvectors of a matrix $A.$ If $\mathbf{v} \in V,$ which of the following are necessarily true?

    x-picker.list
      .item.pill.bblue.md  $A\mathbf{v} \in V.$
      .item.pill.bblue.md(data-error="orthogonal-every") $A\mathbf{v}$ is orthogonal to every vector in $V.$
      .item.pill.bblue.md(data-error="always-lin-dep")  $A\mathbf{v}$ and $\mathbf{v}$ are always linearly dependent.

:::

---
> id: step-194

*Solution.* Let $\mathbf{a}\_1, \dots, \mathbf{a}\_k$ be the eigenvectors of $A$ that span $V$ and let $\lambda\_1, \dots, \lambda\_k$ be the corresponding eigenvalues. Then $\mathbf{v} \in V$ admits a representation $\mathbf{v} = v\_1\mathbf{a}\_1 + \cdots + v\_k\mathbf{a}\_k.$ Since

``` latex
A\mathbf{v} &=  v_1 A\mathbf{a}_1 + \cdots + v_k A \mathbf{a}_k \\
&=  v_1 \lambda_1 \mathbf{a}_1 + \cdots + v_k \lambda_k \mathbf{a}_k,
```

we see that $A\mathbf{v}$ is also in $V.$ This means (2) is not true in general. Option $(3)$ need not always hold. For instance, it fails to hold if $\mathbf{v} = \mathbf{a}\_1 + \mathbf{a}\_2$ and $\lambda\_1$ and $\lambda\_2$ are both non-zero and not equal. Therefore the only true statement is (1) $A\mathbf{v} \in V.$

[Continue](btn:next)

---
> id: step-195

::: .exercise
**Exercise**  
Suppose $A$ is a matrix with a eigenvector $\mathbf{v}$ whose eigenvalue is 2 and an eigenvector $\mathbf{w}$ whose eigenvalue is 2. Let $\mathbf{u = v+w}$. Explain why

``` latex
\lim_{n \to \infty}\frac{|A^{n} \mathbf{u}|^2}{|A^{n}\mathbf{v}|^2} = 1
```

:::

    x-quill

---
> id: step-196

*Solution.* Let $n \geq 1$ be an integer. Then by the eigenvalue equation, we have

``` latex
A^n\mathbf{u} &= A^n (\mathbf{v} + \mathbf{w}) \\
              &= A^n \mathbf{v} + A^n \mathbf{w} \\
              &= 3^n\mathbf{u} + 2^n \mathbf{w}.
```

When $n$ is large, the first term is much larger than the second. Writing the squared norm as a dot product and distributing, we get

``` latex
|3^n\mathbf{u} + 2^n \mathbf{w}|^2
= | 3^n\mathbf{v} |^2 +
2 (3^n\mathbf{v}) \cdot (2^n\mathbf{w}) + |2^n\mathbf{w}|^2.
```

Therefore,

``` latex
\frac{|A^n\mathbf{u}|^2}{| A^n \mathbf{v}|^2} &= \frac{|3^n\mathbf{u} + 2^n \mathbf{w}|^2}{| A^n \mathbf{v}|^2} \\
                                              &= \frac{| 3^n\mathbf{v} |^2 + 2 (3^n\mathbf{v}) \cdot (2^n\mathbf{w}) + |2^n\mathbf{w}|^2}{|3^n\mathbf{v} |^2} \\
                                              & = \frac{3^{2n} |\mathbf{v}|^2 + 2 \left(3 \cdot 2\right)^n \mathbf{v} \cdot \mathbf{w} + 2^{2n} |\mathbf{w}|^2}{3^{2n}| \mathbf{v}|^2} \\
                                              &= 1 + 2 \left(\frac{3 \cdot 2}{3^2}\right)^n \cdot \left(\frac{\mathbf{v} \cdot \mathbf{w}}{|\mathbf{v}|^2}\right) + \left(\frac{2}{3}\right)^{2n}  \cdot \left(\frac{| \mathbf{w} |^2}{|\mathbf{v}|^2}\right).
```

Since $\lim\limits\_{n \to \infty} \left(\frac{3 \cdot 2}{3^2}\right)^n = \lim\limits\_{n \to \infty} \left(\frac{2}{3}\right)^{2n} = 0,$ we find that $\lim\limits\_{n \to \infty} \frac{|A^n\mathbf{u}|^2}{| A^n \mathbf{v}|^2} = 1.$

[Continue](btn:next)

---
> id: step-197

### Diagonalization

If an $n\times n$ matrix $A$ has $n$ linearly independent eigenvectors, then we can think of the one-dimensional subspaces spanned by each of these vectors as (not necessarily orthogonal) axes along which $A$ acts by scaling.

In matrix terms, we can define $V$ to be the matrix with the eigenvectors of $A$ as columns. Then from the definition of an eigenpair, we have

``` latex
AV  = V \Lambda,
```

 where $\Lambda$ is a matrix whose diagonal entries are the eigenvalues (in order corresponding to the columns of $V$) and whose other entries are zero. By the invertible matrix theorem, the assumption about $V$'s columns being linearly independent implies that $V$ is invertible, so we find that $A = V \Lambda V^{-1}$, where $\Lambda$ is a diagonal matrix, and we say that $A$ is **diagonalizable**.

::: .exercise
**Exercise**  
Some matrices are not diagonalizable, because they correspond to geometric transformations that cannot be viewed as scaling along any set of axes. Use this geometric intuition to come up with a $2
  \times 2$ matrix which is not diagonalizable.
:::

    x-quill

---
> id: step-198

*Solution.* Rotation matrices in $\mathbb{R}^2$(except for 0 degree rotations and 180-degree rotations) are not diagonalizable. For example, the 90-degree rotation matrix

``` latex
A = \begin{bmatrix}
  0 & -1 \\\
  1 & 0
\end{bmatrix}
```

does not send any nonzero vector $\vec{v} \in \mathbb{R}^2$ to a multiple of itself.

[Continue](btn:next)

---
> id: step-199

::: .exercise
**Exercise**  
Suppose that we have diagonalized $A$ as $A = VDV^{-1}$. Then $A^{3}$ is equal to [[`VD^3V^(-1)`|`V^3DV^(-3)`|`V^3D^3V^(-3)`|]]

Let $B$ be another matrix, with eigenpairs $(\mathbf{v}\_1,3)$ and $(\mathbf{v}\_{2},-2)$. Let $\mathbf{u} = 2\mathbf{v}\_{1} + \mathbf{v}\_{2}$. Which of the following is equal to $B^{n}(\mathbf{u})$?

    x-picker.list
      .item.bblue.pill.md $2(3)^{n}\mathbf{v}\_1 + (-2)^{n}\mathbf{v}\_2$.
      .item.bblue.pill.md(data-error="incorrect") $(2(3) - 1)^{n}\mathbf{u}$.
      .item.bblue.pill.md(data-error="incorrect") $(2(3)^{n} - 1)\mathbf{u}$.
      .item.bblue.pill.md(data-error="incorrect") None of the above.

:::

---
> id: step-200

*Solution.* We have

``` latex
A^2 = VDV^{-1} VDV^{-1} = V D^2 V^{-1}
```

because $V^{-1} V = I$ is the identity matrix. Similarly, $A^3 = V D^3 V^{-1}.$

By linearity $B^n(\mathbf{u}) = 2B^n\mathbf{v}\_1 + B^n \mathbf{v}\_2.$ But $B^n(\mathbf{v}\_1) = 3^n\mathbf{v}\_1$ and $B^n(\mathbf{v}\_2) = (-2)^n\mathbf{v}\_2$ because $\mathbf{v}\_1$ and $\mathbf{v}\_2$ are eigenvectors of $B.$ Therefore $B^n(\mathbf{u}) = 2(3)^n\mathbf{v}\_1 + (-2)^n\mathbf{v}\_2.$

[Continue](btn:next)

---
> id: step-201

### Positive definite matrices

A **positive definite** matrix $A$ is a symmetric matrix whose eigenvalues are all positive. A **positive semidefinite** matrix $A$ is a symmetric matrix whose eigenvalues are all nonnegative. Equivalently, a symmetric matrix $A$ is positive semidefinite if $\mathbf{x}' A \mathbf{x} \ge 0$ for all $\mathbf{x}$.

[Continue](btn:next)

---
> id: step-202

*Negative definite* and *negative semidefinite* matrices are defined analogously.

[Continue](btn:next)

---
> id: step-203

::: .exercise
**Exercise**  
(i) Is the sum of two positive definite matrices necessarily positive definite? [[Yes|No]]
:::

---
> id: step-204

*Solution.* (i) If $A$ and $B$ are $ n \times n$ positive definite matrices, then $A + B$ is also positive definite because

``` latex
\mathbf{x}' (A + B) \mathbf{x} &= \mathbf{x}' (A\mathbf{x} + B\mathbf{x}) \\
&= \mathbf{x}' A\mathbf{x} + \mathbf{x}' B\mathbf{x}
```

for any vector $\mathbf{x} \in \mathbb{R}^n.$

[Continue](btn:next)

---
> id: step-205

### The Gram matrix

If $A$ is an $m\times n$ matrix, then $A' A$ is its *Gram matrix*. The Gram matrix of $A$ is always positive semidefinite:

::: .exercise
**Exercise**  
Let $X = A' A$ be a Gram matrix, and let $\mathbf{v}$ be a vector. Which of the following is equal to $\mathbf{v}' X\mathbf{v}$?

    x-picker.list
      .item.bblue.pill.md $|A\mathbf{v}|^2$.
      .item.bblue.pill.md(data-error="incorrect") $A^{2}\mathbf{v}$.
      .item.bblue.pill.md(data-error="incorrect") $\mathbf{v}' A^2\mathbf{v}$.

Using your answer above, explain why a Gram matrix is always positive semidefinite, but not necessarily positive definite.
:::

*Solution.* The correct answer is $|A\mathbf{v}|^2$ because

``` latex
|A\mathbf{v} |^2 &= (A\mathbf{v}) \cdot (A\mathbf{v}) \\\
                 &= (A\mathbf{v})' A\mathbf{v} \\\
                 &= \mathbf{v}' A' A\mathbf{v}.
```

From this we see that the Gram matrix is positive semidefinite because $|A\mathbf{v}|^2 \geq 0.$ Since it is possible to have $A\mathbf{v} = \mathbf{0}$ even if $\mathbf{v} \neq \mathbf{0}$ (for example when $A$ has linearly dependent columns), we see that the Gram matrix is not necessarily positive definite.

[Continue](btn:next)

---
> id: step-206

::: .exercise
**Exercise**  
Explain why the rank of $A$ is equal to the rank of $A'A$. (Hint: consider the null spaces of $A$ and $A'A$.)
:::

    x-quill

---
> id: step-207

*Solution.* If $A\mathbf{x} = \boldsymbol{0}$, then multiplying both sides by $A'$ gives $A' A \mathbf{x} = \boldsymbol{0}$. Therefore, the null space of $A$ is a subset of the null space of $A' A$.

Conversely, if $A' A \mathbf{x} = \boldsymbol{0}$, then we can multiply this equation on the left by $\mathbf{x}'$ to get

``` latex
\mathbf{x}' A' A \mathbf{x} = \boldsymbol{0},
```

which in turn implies that $|A\mathbf{x}|^2 = \boldsymbol{0}$. A vector has zero norm only if it's the zero vector, so we conclude that $A\mathbf{x} = \boldsymbol{0}$.

Since $A$ and $A' A$ have the same null space dimension and have the same domain $(\mathbb{R}^n)$, they also have the same rank, by the rank-nullity theorem.

[Continue](btn:next)

---
> id: step-208

### The Spectral Theorem

The eigenspace decomposition of a diagonalizable matrix is even easier to understand if the eigenvectors happen to be orthogonal. It turns out that this happens exactly when the matrix is *symmetric*:

::: .theorem
**Theorem** (Spectral Theorem)  
If $A$ is an $n\times n$ symmetric matrix, then $A$ is *orthogonally* diagonalizable, meaning that $A$ has $n$ eigenvectors which are pairwise orthogonal.

Conversely, every orthogonally diagonalizable matrix is symmetric.
:::

In other words, if $A$ is symmetric, then the one-dimensional subspaces along which $A$ is decomposed form a set of axes for $\mathbb{R}^n$ which are orthogonal. In matrix terms, we have

``` latex
A = V \Lambda V',
```

for some orthogonal matrix $V$.

[Continue](btn:next)

---
> id: step-209

Although it seems that the spectral theorem may be of limited use since so many matrices are not symmetric, we will see that we can associate any rectangular matrix with a symmetric square matrix that we can apply the spectral theorem to and use to extract insight about the original matrix. This beautiful idea is called the **singular value decomposition** and is the subject of the next section.

[Continue](btn:next)

---
> id: step-210

::: .exercise
**Exercise**  
Given an invertible matrix $A$, we are often interested in solving a system of the form $A \mathbf{x} = \mathbf{b}$. Our knowledge of $\mathbf{b}$ is seldom perfect however, so it is important to consider what happens to the solution if we replace $\mathbf{b}$ with a slightly different vector $\widehat{\mathbf{b}}$.

It is possible that a small change in $\mathbf{b}$ leads to a substantial change in the vector $\mathbf{x}=A^{-1}\mathbf{b}$.
* Find an invertible $2\times 2$ matrix $A$ all of whose entries are between $-2$ and $2$ and a vector $\mathbf{b}$ with entries between $-2$ and $2$ and another vector $\widehat{\mathbf{b}}$ whose components are nearly equal to those of $\mathbf{b}$ for which $A^{-1}\mathbf{b}$ and $A^{-1}\widehat{\mathbf{b}}$ are not very close.

To be concrete, let's say "nearly equal" means "having ratio between 0.99 and 1.01", and let's say that "not very close" means "having a difference whose norm is greater than the norm of either". Find the eigenvalues of your matrix $A$.

:::

    x-quill

---
> id: step-211

{.py-only} *Solution.* One simple way to do this is make $\mathbf{b}$ and $\widehat{\mathbf{b}}$ the columns of the matrix. For example, _{code.language-python}solve(array([[1,1],[1, 1.01]]),[1,1])_ returns _{code.language-python}[1,0]_ while _{code.language-python}solve(array([[1,1],[1, 1.01]]),[1,1.01])_ returns _{code.language-python}[0,1]_.

{.jl-only} *Solution.* One simple way to do this is make $\mathbf{b}$ and $\widehat{\mathbf{b}}$ the columns of the matrix. For example, `{jl} [1 1; 1 1.01] \ [1, 1]` returns `{jl} [1, 0]`, while `{jl} [1 1; 1 1.01] \ [1, 1.01]` returns `{jl} [0, 1]`.

::: .py-only
    pre(python-executable)
      | from numpy.linalg import solve
      | from numpy import array
:::

::: .jl-only
    pre(julia-executable)
      | [1 1; 1 1.01] \ [1, 1]
:::

[Continue](btn:next)

---
> id: step-212

The eigenvalues of the matrix `{code} [1 1; 1 1.01]` are approximately 0.005 and 2.005. In particular, the ratio of the eigenvalues is very large. You will find that the ratio of eigenvalues for your matrix is also large, because a matrix $A$ with a modest maximum eigenvalue ratio is *backwards stable*, meaning that small changes in $\mathbf{b}$ do not lead to large changes in $A^{-1}\mathbf{b}$,

---
> id: svd
## Singular Value Decomposition

In this section we will develop one of the most powerful ideas in linear algebra: the **singular value decomposition**. The first step on this journey is the **polar decomposition**.

[Continue](btn:next)

---
> id: step-213

### Polar decomposition

The [Gram matrix](gloss:gram) of a square matrix $A$ is a useful tool for understanding the behavior of $A$. Let's define the matrix $\sqrt{A' A}$ to be $V \Lambda^{1/2} V'$, where $V \Lambda V'$ is the diagonalization of $A' A$ and $\Lambda^{1/2}$ is the matrix obtained by taking the square root of the diagonal entries of $\Lambda$. Then $\sqrt{A' A}$ is [[symmetric|not symmetric]] and satisfies

``` latex
\sqrt{A' A}\sqrt{A' A} =
V \Lambda^{1/2}V' V\Lambda^{1/2}V'= A'
A,
```

as befits the notation $\sqrt{A'A}$.

---
> id: step-214

The matrix $\sqrt{A' A}$ is simpler to understand than $A$ because it is symmetric and [positive semidefinite](gloss:positive-definite), yet it transforms space very similarly to $A$: if $\mathbf{x} \in \mathbb{R}^n$, then

``` latex
|A\mathbf{x}|^2 = \mathbf{x}' A' A \mathbf{x} =
\mathbf{x}' \sqrt{A' A} \sqrt{A' A}
\mathbf{x} =
|\sqrt{A' A}\,\mathbf{x}|^2.
```

[Continue](btn:next)

---
> id: step-215

In other words, for all $\mathbf{x}$, the images of $\mathbf{x}$ under $A$ and under $\sqrt{A' A}$ have equal norm. If points are the same distance from the origin, then one may be mapped to the other by a [[rotation/reflection|scaling]] about the origin.

---
> id: step-216

Therefore, for each $\mathbf{x} \in \mathbb{R}^n$, there is an orthogonal transformation from the range of $\sqrt{A' A}$ to the range of $A$ which sends $\sqrt{A' A}\mathbf{x}$ to $A\mathbf{x}$.

    figure
      img(src="images/gram.svg")
      p.caption.md The grid-line images under $A$ and $\sqrt{A' A}$ have the same shape; they are related by an orthogonal transformation.

It can be shown that the orthogonal transformation mapping $A\mathbf{x}$ to $\sqrt{A' A}\mathbf{x}$ is the same transformation for every $\mathbf{x}$. Furthermore, even if the range of $\sqrt{A'A}$ is not all of $\mathbb{R}^n$, we can extend this orthogonal transformation to an orthogonal transformation on $\mathbb{R}^n$ by arbitrarily mapping vectors in a basis of the [orthogonal complement](gloss:orthogonal-complement) of the range of $\sqrt{A'A}$ to the orthogonal complement of the range of $A$. In this way, we obtain the *polar decomposition*:

[Continue](btn:next)

---
> id: step-217


::: .theorem
**Theorem** (Polar Decomposition)  
For any $n \times n$ matrix $A$, there exists an orthogonal matrix $R$ such that

``` latex
A = R\sqrt{A' A}.
```

:::

[Continue](btn:next)

---
> id: step-218

This representation is useful because it represents an arbitrary square matrix as a product of matrices whose properties are easier to understand (the orthogonal matrix because it is distance- and angle-preserving, and the positive-definite matrix $\sqrt{A' A}$ because it is orthogonally diagonalizable, by the [Spectral Theorem](gloss:spectraltheorem).

[Continue](btn:next)

---
> id: step-219

::: .exercise
**Exercise**  
Let's explore a fast method of computing a polar decomposition $A=R\sqrt{A' A}$. This method actually works by calculating $R$ and then recovering $\sqrt{A' A}$ as $R^{-1}A$ (since this is computationally faster than calculating the matrix square root). We call $R$ the *orthogonal part* of $A$ and $\sqrt{A' A}$ the *symmetric part* of $A$.

 We set $R\_{0} = A$ and define the iteration

``` latex
R_{k+1} = \frac{R_{k} + (R_{k}')^{-1}}{2}
```

Let's see why this converges to $R$.

1. Defining $P = \sqrt{A' A}$ and using the equation $A = RP$, show that
   $R_{1} = \frac{A + (A')^{-1}}{2} = R\left(\frac{P + P^{-1}}{2}\right).$
   Use the prior step to explain why the $R\_k$'s all have the same orthogonal
   parts and have symmetric parts converging to the identity matrix.  
   Hint: consider the eigendecompositions of the symmetric parts. You may assume
   that the sequence defined by $x_{k+1} = \frac{1}{2}(x_k+1/x_k)$ converges to
   1 regardless of the starting value $x_0>0$.

2. Write some code to apply this algorithm to the matrix

``` python
import numpy as np
A = np.array([[1,3,4],[7,-2,5],[-3,4,11]])
```

``` julia
A = [1 3 4; 7 -2 5; -3 4 11]
```

and confirm that the resulting matrices $R$ and $P$ satisfy $R' R = I$ and $P^2 = A' A$.

:::

::: .py-only
    pre(python-executable)
      |
:::

::: .jl-only
    pre(julia-executable)
      |
:::

    x-quill

---
> id: step-220

*Solution.* Since both conjugation and inversion reverse the order of matrix products, we get

``` latex
R_{1} = \frac{RP + ((RP)')^{-1}}{2} = \frac{RP +
(R^*)^{-1}(P')^{-1}}{2}
```

Since $R$ is orthogonal, $(R^\*)^{-1} = R$, as $R' R = I$. Since $P$ is symmetric, $P' = P$. So this is equal to

``` latex
R_{1}  = \frac{RP + RP^{-1}}{2} =  R \left(\frac{P + P^{-1}}{2}\right)
```

[Continue](btn:next)

---
> id: step-221

We see that the $R\_0 = A$ and $R\_1$ have the same orthogonal part, and repeating the calculation shows that all the $R\_{k}$ have the same orthogonal part. As for the symmetric parts $P\_{k}$, we see that

``` latex
P_{k+1} = \frac{P_{k} + P_{k}^{-1}}{2}
```

Let's see why this averaging process converges to the identity matrix. Symmetric matrices are diagonalizable by the [Spectral Theorem](gloss:spectraltheorem), so suppose $P$ diagonalizes as $V \Lambda V^{-1}$. Then

``` latex
\frac{1}{2}(P + P^{-1}) =
V\left(\frac{1}{2}\Lambda + \frac{1}{2}\Lambda^{-1}\right)\mathbf{v}
```

Thus the $P\_{k}$'s converge to the matrix $V \Lambda\_\infty V^{-1}$, where $\Lambda\_\infty$ is the diagonal matrix whose $(i,i)$ th entry is the limit obtained when you start with $\Lambda\_{i,i}$ and repeatedly apply the function $x \mapsto \frac{1}{2}\left(x + \frac{1}{x}\right)$. By the fact about this iteration given in the problem statement, we conclude that $\Lambda\_\infty$ is the identity matrix. Therefore, the limit of $P\_k$ as $k\to\infty$ is equal to $V I V^{-1} = I$.

[Continue](btn:next)

---
> id: step-222

For example:

::: .py-only
    pre(python-executable)
      | import numpy as np
      |
      | def polar(A,n):
      |     R = A
      |     for i in range(n):
      |         R = (R + np.linalg.inv(R.T))/2
      |     return R, np.linalg.solve(R, A)
      |
      | I = np.eye(3)
      | A = np.array([[1, 3, 4],[7, -2, 5], [-3, 4, 11]])
      | R, P = polar(A,100)
      | R.T @ R - I, P @ P - A.T @ A
:::

::: .jl-only
    pre(julia-executable)
      | using LinearAlgebra
      |
      | function polar(A,n)
      |     R = A
      |     for i=1:n
      |         R = (R + inv(R'))/2
      |     end
      |     R, R \ A
      | end
      |
      | A = [1 3 4; 7 -2 5; -3 4 11]
      | R, P = polar(A,100)
      | R'*R - I, P^2 - A'*A
:::


Both of the matrices returned on the last line have entries which are within $3\times 10^{-14}$ of zero.

[Continue](btn:next)

---
> id: step-223

::: .exercise
**Exercise**  
Show that the product of two matrices with orthonormal columns has orthonormal columns.
:::

    x-quill

---
> id: step-224

*Solution.* If $U' U = I$ and $V' V = I$, then $(UV)' UV = V' U' UV = V' V =
  I$.

[Continue](btn:next)

---
> id: step-225

### The singular value decomposition

The polar decomposition tells us that any square matrix $A$ is almost the same as some symmetric matrix, and the spectral theorem tells us that a symmetric matrix is almost the same as a simple scaling along the coordinate axes. (In both cases, the phrase "almost the same" disguises a composition with an orthogonal transformation.) We should be able to combine these ideas to conclude that *any* square matrix is basically the same as a simple scaling along the coordinate axes!

[Continue](btn:next)

---
> id: step-226

Let's be more precise. Suppose that $A$ is a square matrix. The polar decomposition tells us that

``` latex
A = R \sqrt{A' A}
```

for some orthogonal matrix $R$. The spectral theorem tells us that $\sqrt{A' A} = V \Sigma V'$ for some orthogonal matrix $V$ and a diagonal matrix $\Sigma$ with nonnegative diagonal entries.

[Continue](btn:next)

---
> id: step-227

Combining these equations, we get

``` latex
A = R V \Sigma V'.
```

Since a product of orthogonal matrices is [[orthogonal|symmetric]], we can define $U = RV$ and obtain the **singular value decomposition** (SVD) of $A$:

``` latex
A = U \Sigma V'
```

where $U$ and $V$ are orthogonal matrices.

[Continue](btn:next)

---
> id: step-228

We can visualize the decomposition $A = U \Sigma V'$ geometrically by making a figure like the one shown below, which illustrates the successive effects of each map in the composition $U \Sigma V'$. If we draw grid lines on the *second* plot (just before $\Sigma$ is applied) and propagate those grid lines to the other plots by applying the indicated maps, then we endow the domain and range of $A$ with orthogonal sets of gridlines with $A$ mapping one to the other.

[Continue](btn:next)

---
> id: step-229

We can extend the singular value decomposition to rectangular matrices $A$ (that is, matrices which are not necessarily square) by adding rows or columns of zeros to a rectangular matrix to get a square matrix, applying the SVD to that square matrix, and then trimming the resulting $\Sigma$ matrix as well as either $U$ or $V'$ (depending on which dimension of $A$ is smaller). We get a decomposition of the form $A = U \Sigma V'$ where $U$ is an $m \times m$ orthogonal matrix, $V'$ is an $n \times n$ orthogonal matrix, and $\Sigma$ is a rectangular $m \times n$ diagonal matrix.

    figure
      img(src="images/svd.svg" width="100%")
      p.caption.md The matrix $A$ maps one set of orthogonal grid lines to another
      a(name="svdfig")

::: .theorem
**Theorem** (Singular value decomposition)  
Suppose that $A$ is an $m \times n$ matrix. Then there exist orthogonal matrices $U$ and $V$ and a rectangular diagonal matrix $\Sigma$ such that

``` latex
A = \underbrace{U}_{m \times m} \underbrace{\Sigma}_{m \times n}
    \underbrace{V'}_{n \times n} \:,
```

We call $A = U \Sigma V'$ the a **singular value decomposition** (or SVD) of $A$. The diagonal entries of $\Sigma$ are called the **singular values** of $A$.
:::

[Continue](btn:next)

---
> id: step-230

The diagonal entries of $\Sigma$, which are the square roots of the eigenvalues of $A' A$, are called the **singular values** of $A$. The columns of $U$ are called *left* singular vectors, and the columns of $V$ are called *right* singular vectors.

[Continue](btn:next)

---
> id: step-231

Looking at the bottom half of the [SVD figure](gloss:svdfigure), we see that the singular values of $A$ are the lengths of the semi-axes of the ellipsoid in $\mathbb{R}^m$ obtained as the image under $A$ of the unit ball in $\mathbb{R}^n$. Moreover, the directions of these axes are the columns of $U$, since they are the images under $U$ of the standard basis vectors. We will see an important application of this feature of the SVD in the probability chapter when we discuss *principal component analysis*.

[Continue](btn:next)

---
> id: step-232

As an example of how the singular value decomposition can be used to understand the structure of a linear transformation, we introduce the **Moore-Penrose pseudoinverse** $A^+$ of an $m \times n$ matrix $A$. We define $A^+$ to be $V \Sigma^+ U'$, where $\Sigma^+$ is the matrix obtained by inverting each nonzero element of $\Sigma$. The pseudoinverse is a swiss-army knife for solving the linear system $A\mathbf{x} = \mathbf{b}$:
* If $A$ is square and invertible, then $A^+ = A^{-1}$
* If $A\mathbf{x} = \mathbf{b}$ has no solution, then $A^+\mathbf{b}$ is the value of $\mathbf{x}$ which minimizes $|A\mathbf{x} - \mathbf{b}|^2$ (in other words, the closest thing to a solution you can get).
* If $A\mathbf{x} = \mathbf{b}$ has multiple solutions, then $A^+\mathbf{b}$ is the solution with minimal norm.

[Continue](btn:next)

---
> id: step-233

::: .exercise
**Exercise**  
Show that $\left[\begin{smallmatrix}-160 & -120 \\\\\\ -12 & -134 \\\\\\
      141 & 12 \\\\\\ \end{smallmatrix}\right]$ has SVD $\left[\begin{smallmatrix} -\frac{4}{5} &  0 & \frac{3}{5}\\\\\\
      -\frac{9}{25} & -\frac{4}{5} & -\frac{12}{25} \\\\\\
      \frac{12}{25} & -\frac{3}{5} & \frac{16}{25}
    \end{smallmatrix}\right] \left[\begin{smallmatrix}250 & 0 \\\\\\
      0 &
      125 \\\\\\ 0 & 0 \end{smallmatrix}\right]\left[\begin{smallmatrix}\frac{4}{5}
      & \frac{3}{5} \\\\\\ -\frac{3}{5} & \frac{4}{5}
      \\\\\\ \end{smallmatrix}\right]$. Find its Moore-Penrose pseudoinverse.
:::

::: .py-only
    pre(python-executable)
      |
:::

::: .jl-only
    pre(julia-executable)
      |
:::

    x-quill

---
> id: step-234

*Solution.* Let

``` latex
A = \left[\begin{smallmatrix}-160 & -120 \\\ -12 & -134 \\\ 141 & 12 \\\ \end{smallmatrix}\right],
```

and let $U$, $\Sigma$, and $V'$ be the three matrices given in the problem statement.

We need to check that $U,V$ are orthogonal, and that $A = U \Sigma V'$. We can verify that $U,V$ are orthogonal by showing that their columns are orthogonal unit vectors. Equivalently, we may compute the products $U' U$ and $V' V$ and observe that they are identity matrices. Similarly, $A = U \Sigma V'$ can be verified by hand or on a computer.

The formula for the Moore-Penrose pseudoinverse is

``` latex
A^{+} = V \Sigma^{+}U'
```

The matrix $\Sigma^{+}$ is obtained by inverting the nonzero elements on the diagonal of $\Sigma$, and the transposing the resulting matrix.

``` latex
\Sigma^{+} =
\begin{bmatrix}
  1/125 & 0 \\0 & 1/250
\end{bmatrix}.
```

With a little calculation, we arrive at

``` latex
A^{+} = \frac{1}{31250}
\begin{bmatrix}
  -80&84&138\\-60&-187&-84
\end{bmatrix}.
```

[Continue](btn:next)

---
> id: step-235

### SVD and linear dependence

Linear dependence is numerically fragile: if the columns of a matrix (with more rows than columns) are linearly dependent, then perturbing the entries slightly by adding tiny independent random numbers is almost certain to result in a matrix with linearly independent columns. However, intuition suggests that subverting the principles of linear algebra in this way [[is not|is]] going to solve any real-world problems that emerge from linear dependence relationships among columns of a matrix.

---
> id: step-236

This intuition is accurate, and it highlights the utility of having a generalization of the idea of linear independence which can *quantify* how close a list of vectors is to having linear dependence relationships, rather than remaining within the confines of the binary labels "linearly dependent" or "linearly independent". The singular value decomposition provides such a tool.

::: .exercise
**Exercise**  
Define a matrix with 100 rows and 5 columns, and do it in such a way that two of the five columns are nearly equal to some linear combination of the other three. Calculate the singular values of the matrix, and make a conjecture about how the number of approximate linear dependencies could have been detected from the list of singular values.
:::

::: .py-only
    pre(python-executable)
      | import numpy as np
:::

::: .jl-only
    pre(julia-executable)
      |
:::

    x-quill

---
> id: step-237

*Solution.* We see that two of the singular values are much smaller than the other three. (Remember that you have to run the cell twice to get the plot to show.)

::: .py-only
    pre(python-executable)
      | import numpy as np
      | import matplotlib.pyplot as plt
      | A = np.random.standard_normal((100,5))
      | A[:,3] = A[:,2] + A[:,1] + 1e-2*np.random.standard_normal(100)
      | A[:,4] = A[:,1] - A[:,0] + 1e-2*np.random.standard_normal(100)
      | plt.bar(range(5),np.linalg.svd(A)[1])
:::

::: .jl-only
    pre(julia-executable)
      | using Plots, LinearAlgebra
      | A = randn(100, 5)
      | A[:,4] = A[:,3] + A[:,2] + 1e-2*randn(100)
      | A[:,5] = A[:,2] - A[:,1] + 1e-2*randn(100)
      | bar(1:5, svdvals(A), label = "singular values")
:::

We conjecture that $k$ very small singular values indicates that $k$ columns would need to be removed to obtain a matrix which does not have approximate linear dependence relationships among its columns.

[Continue](btn:next)

---
> id: step-238

{.py-only} In fact, the idea developed in this exercise is used by the NumPy function `{py} np.linalg.matrix_rank` to calculate the rank of a matrix. Because of the roundoff errors associated with representing real numbers in memory on a computer, most matrices with float entries technically have [full rank](gloss:fullrank). Thus `{py} np.linalg.matrix_rank` computes the singular value decomposition and returns the number of [[singular values|eigenvalues]] of the matrix which are larger than a given threshold. The threshold is adjustable, but one common setting is $10^{-15}$ times the largest entry of the matrix times the largest dimension of the matrix.

{.jl-only} In fact, the idea developed in this exercise is used by the Julia function `{jl} rank` to calculate the rank of a matrix. Because of the roundoff errors associated with representing real numbers in memory on a computer, most matrices with float entries technically have [full rank](gloss:fullrank). Thus `{py} rank` computes the singular value decomposition and returns the number of [[singular values|eigenvalues]] of the matrix which are larger than a given threshold. The threshold is adjustable, but one common setting is $10^{-15}$ times the largest entry of the matrix times the largest dimension of the matrix.

---
> id: step-239

### SVD and image compression

We close this section with a computational exercise illustrating another widely applicable feature of the singular value decomposition.

::: .exercise
**Exercise**  

* Show that if $\mathbf{u}\_1, \ldots, \mathbf{u}\_n$ are the columns of $U$,
  $\mathbf{v}\_1, \ldots \mathbf{v}\_n$ are the columns of $V$, and $\sigma\_1,
  \ldots, \sigma\_n$ are the diagonal entries of $\Sigma$, then $A = \sigma\_{1}
  \mathbf{u}\_{1}\mathbf{v}\_{1}'+\sigma\_{2}\mathbf{u}\_{2}\mathbf{v}\_{2}'+\cdots+
  \sigma\_{n}\mathbf{u}\_{n}\mathbf{v}\_{n}'$.

* The equation is useful for *compression*, because terms with sufficiently
  small singular value factors can be dropped and the remaining vectors and
  singular values can be stored using less space. Suppose that $A$ is a $256
  \times 128$ matrix—how many entries does $A$ have, and how many entries do
  $\mathbf{u}\_1$, $\mathbf{u}\_2$, $\mathbf{u}\_3$, $\mathbf{v}\_1$,
  $\mathbf{v}\_2$, $\mathbf{v}\_3$ have in total?

* The Python code below creates a matrix $A$ with pixel values for the image
  shown. How many nonzero singular values does $A$ have? Explain how you can
  tell just from looking at the picture.


    figure: img(src="images/zero.svg")

``` python
import numpy as np
import matplotlib.pyplot as plt

m = 80
n = 100
a = m // 8
b = m // 4
A = np.ones((m,n))

def pixel(i,j):
    if (a <= i <= b or m-b <= i <= m-a) and a <= j <= n-a:
        return 0
    elif (a <= j <= b or n-b <= j <= n-a) and a <= i <= m-a:
        return 0
    return 1

A = np.array([[pixel(i,j) for i in range(1,m+1)] for j in range(1,n+1)])

U, Σ, V = np.linalg.svd(A)

plt.matshow(A)
```

``` julia
using LinearAlgebra, Plots
m = 80
n = 100
a = m ÷ 8
b = m ÷ 4
A = ones(m,n)

function pixel(i,j)
    if (a ≤ i ≤ b || m-b ≤ i ≤ m-a) && a ≤ j ≤ n - a
        0
    elseif (a ≤ j ≤ b || n-b ≤ j ≤ n-a) && a ≤ i ≤ m - a
        0
    else
        1
    end
end

A = [pixel(i,j) for i=1:m,j=1:n]

U, Σ, V = svd(A)
heatmap(A)
```

* Now add some noise to the image:

``` python
B = A +  0.05*np.linalg.standard_normal((m,n))
```

``` julia
B = A + 0.05 * randn(m, n)
```

Display this new matrix $B$, and also find the matrix obtained by keeping only the first three terms of $\sigma\_{1}\mathbf{u}\_{1}\mathbf{v}\_{1}' +\sigma\_{2}\mathbf{u}\_{2}\mathbf{v}\_{2}' +\cdots+\sigma\_{n}\mathbf{u}\_{n}\mathbf{v}\_{n}'$ for this matrix $B$. Which looks more like the original image $A$: (i) $B$ or (ii) the three-term approximation of $B$?

Hint: you can achieve this computationally either by setting some singular values to 0 or by indexing the matrices $U$, $\Sigma$, and $V'$ appropriately. Also, you will need the function `{py} np.diagonal` `{jl} diagm` to generate a diagonal matrix from the vector of $\Sigma$ values returned by `{py} svd`.

:::

::: .py-only
    pre(python-executable)
      | import numpy as np
      | import matplotlib.pyplot as plt
:::

::: .jl-only
    pre(julia-executable)
      |
:::

    x-quill

---
> id: step-240

*Solution.*  
* Let $M = \sigma\_1\mathbf{u}\_1\mathbf{v}\_1' + \cdots + \sigma\_n\mathbf{u}\_n\mathbf{v}\_n'.$ We need to show that $A = M.$ We will do this by first showing that $A\mathbf{x} =  M\mathbf{x}$ for all $\mathbf{x} \in \mathbb{R}^n.$

Now, $A\mathbf{x} =  U \Sigma V' \mathbf{x}$ for all $\mathbf{x} \in \mathbb{R}^n.$ By definition of matrix-vector product, $U \Sigma V' \mathbf{x}$ is a linear combination of the columns of $U \Sigma$ with weights given by $V' \mathbf{x}.$ Since $\Sigma$ is diagonal, it is not hard to see that the $i$ th column of $U\Sigma$ is $\Sigma\_{ii}\mathbf{u}\_i = \sigma\_i \mathbf{u}\_i.$ Using definition of matrix-vector product again, we find that the $i$ th weight $\left(V' \mathbf{x}\right)\_i$ is the dot product of the $i$ th row of $V'$ and $\mathbf{x}.$ But the $i$ th row of $V'$ is $\mathbf{v}\_i$ by definition, and thus $\left(V' \mathbf{x}\right)\_i = \mathbf{v}\_i \cdot \mathbf{x}.$ Therefore,

``` latex
A\mathbf{x} = U \Sigma V' \mathbf{x} &= \left(V' \mathbf{x}\right)_1 \sigma_1\mathbf{u}_1 + \cdots + \left(V' \mathbf{x}\right)_n \sigma_n\mathbf{u}_n \\
&= \left(\mathbf{v}_1\cdot \mathbf{x}\right) \sigma_1\mathbf{u}_1 + \cdots + \left(\mathbf{v}_n \cdot \mathbf{x}\right) \sigma_n\mathbf{u}_n \\
&= \sigma_1\mathbf{u}_1\mathbf{v}_1' \mathbf{x} + \cdots + \sigma_n\mathbf{u}_n\mathbf{v}_n' \mathbf{x}
```

where $\mathbf{v}\_i' \mathbf{x}$ is being treated as a $1 \times 1$ matrix for all $1 \leq i \leq n.$

[Continue](btn:next)

---
> id: step-241

By linearity of matrix multiplication,

``` latex
\sigma_1\mathbf{u}_1\mathbf{v}_1' \mathbf{x} + \cdots + \sigma_n\mathbf{u}_n\mathbf{v}_n' \mathbf{x} = \left(\sigma_1\mathbf{u}_1\mathbf{v}_1' + \cdots + \sigma_n\mathbf{u}_n\mathbf{v}_n'\right) \mathbf{x}
```

and thus $A\mathbf{x} = M \mathbf{x}$ for all $\mathbf{x} \in \mathbb{R}^n.$ Since $A\mathbf{x} =  M\mathbf{x}$ for all $\mathbf{x} \in \mathbb{R}^n,$ it follows that $AB = MB$ for any $n \times p$ matrix $B.$ In particular, if $B$ is the identity matrix in $\mathbb{R}^n,$ we have

``` latex
A = AB = MB = M
```

as required.

[Continue](btn:next)

---
> id: step-242

*  $A$ has $256 \times 128 = 32768$ entries and $\mathbf{u}\_1, \mathbf{u}\_2, \mathbf{u}\_3, \mathbf{v}\_1, \mathbf{v}\_2, \mathbf{v}\_3$ combined have $3(256 + 128) = 1152$ entries.

* It can be seen from the picture that $A$ has $3$ kinds of columns: one whose components are all dark, another whose components are light in the middle, and the other whose components are dark on the outside and in the middle with strips of light in between. These columns are clearly linearly independent, and thus $A$ has rank $3.$ Therefore $A$ has $3$ non-zero singular values.

We can select only the first three terms by suitably indexing the vectors, as follows:

::: .py-only
    pre: code.language-python
      | U, Σ, V = np.linalg.svd(B)
      | plt.matshow(U[:,:3] * np.diag(Σ[:3]) * V.T[:3,:])
:::

::: .jl-only
    pre(julia-executable)
      | U, Σ, V = svd(B)
      | heatmap(U[:,1:3] * diagm(Σ[1:3]) * V'[1:3,:])
:::


---
> id: determinants
## Determinants

The *determinant* of a square matrix $A$ is a single number which captures some important information about how the transformation $\mathbf{x}\mapsto A\mathbf{x}$ behaves. In this section, we will develop a geometrically-motivated definition of the determinant.

::: .exercise
**Exercise**  
Suppose that $R$ is a region in $\mathbb{R}^n$ and that $A$ is an $n
  \times n$ matrix. Consider the singular value decomposition $A = U
  \Sigma V'$.

* Let $L\_1(\mathbf{x}) = V'\mathbf{x}$. By what factor does $L\_1$ transform volumes?
* Let $L\_2(\mathbf{x}) = \Sigma\mathbf{x}$. In terms of the entries of $\Sigma$, by what factor does $L\_1$ transform volumes?
* Let $L\_3(\mathbf{x}) = U\mathbf{x}$. By what factor does $L\_3$ transform volumes?

:::

    x-quill

---
> id: step-243

*Solution.* Since $U$ and $V$ are orthogonal, $L\_1$ and $L\_3$ both preserve volumes. So they multiply volumes by a factor of 1. Since $L\_2$ scales volumes by a factor of $\sigma\_1$ along the first axis, $\sigma\_2$ along the second, and so on, it scales volumes by a factor of $\sigma\_1 \sigma\_2 \ldots \sigma\_n$.

[Continue](btn:next)

---
> id: step-244

### Volume scale factor

We see from this exercise that a linear transformation $T$ from $\mathbb{R}^n$ to $\mathbb{R}^n$ scales the volume of any $n$-dimensional region by the same factor: the *volume scale factor* of $T$.

::: .exercise
**Exercise**  
Find the volume scale factor of the matrix $A = \begin{bmatrix}
    1 & 0 & 0 \\\\\\
    0 & 0 & 1 \\\\\\
    0 & k & 0
  \end{bmatrix}$ by describing how the matrix transforms a region in $\mathbb{R}^3$.
:::

    x-quill

---
> id: step-245

*Solution.* Since $A[x,y,z] = [x,z,ky]$, we see that $A$ stretches (or compresses) regions in $\mathbb{R}^3$ by a factor $k$ along the $y$-axis and then reflects across the plane $y = z$. For example, the unit cube is mapped to a $1 \times 1 \times k$ box Since such a box has volume $k,$ the volume scale factor of $S$ is $k.$

### Orientation factor

Another geometrically relevant piece of information about $T$ is whether it preserves or reverses orientations. For example, rotations in $\mathbb{R}^2$ are orientation preserving, while reflections are orientation reversing. Let's define the *orientation factor* of $T$ to be $+1$ if $T$ is orientation preserving and $-1$ if $T$ is orientation reversing.

::: .definition
**Definition**  
We define the **determinant** of a transformation $T$ to be the product of its orientation factor and its volume scale factor.

 We define the determinant of a matrix $A$ to be the determinant of the corresponding linear transformation $\mathbf{x}\mapsto
  A\mathbf{x}$.
:::

 [Continue](btn:next)

---
> id: step-246

::: .exercise
**Exercise**  
Interpret $A = \begin{bmatrix}
    0 & -1 \\\\\\
    -1 & 0
  \end{bmatrix}$ geometrically and use this interpretation to find $\det A$, the determinant of $A$.
:::

    x-quill

---
> id: step-247

*Solution.* Since $A\begin{bmatrix} x \\\\\\ y \end{bmatrix} = \begin{bmatrix} -y \\\\\\ -x
  \end{bmatrix}$, $A$ reflects points in $\mathbb{R}^2$ across the line $y = -x$. Therefore, it preserves areas and reverses orientations. So its determinant is $-1$.

 There is relatively simple formula for $\det A$ in terms of the entries of $A$. For example,

``` latex
\left|\begin{array}{cc}
  a & b \\\ c & d
\end{array}\right| = ad - bc
```

 is the determinant of a $2 \times 2$ matrix. However this formula is terribly inefficient if $A$ has many entries (it has $n!$ terms for an $n\times n$ matrix), and all scientific computing environments have a `{code} det` function which uses much faster methods.

::: .exercise
**Exercise**  
For various values of $n$, use the expression `{py} np.linalg.det(np.random.randint(-9,10,(n,n)))` `{jl} det(rand(-9:9, n, n))` to find the determinant of an $n\times n$ matrix filled with random single-digit numbers. How large does $n$ have to be for the determinant to be large enough to consistently overflow? [[187±2]]
:::

::: .py-only
    pre(python-executable)
      | import numpy as np
      | np.linalg.det(np.random.randint(-9,10,(n,n)))
:::

::: .jl-only
    pre(julia-executable)
      | using LinearAlgebra
      | det(rand(-9:9, n, n))
:::

---
> id: step-248

*Solution.* Trial and error reveals that this determinant starts to consistently return `{py} inf` `{jl} Inf` at $n = 187$.

[Continue](btn:next)

---
> id: step-249

::: .exercise
**Exercise**  
Suppose that $A$ and $B$ are $3 \times 3$ matrices, with determinant $5$ and $\frac{1}{2}$ respectively. Suppose that $R \subset \mathbb{R}^3$ is a 3D region modeling a fish whose volume is 14. What is the volume of the transformed fish $BA(R)$?

    x-picker.list
      .item.bblue.pill.md(data-error="incorrect") 19.5
      .item.bblue.pill.md 35
      .item.bblue.pill.md(data-error="incorrect") 12
      .item.bblue.pill.md(data-error="incorrect") 16.5

:::

---
> id: step-250

*Solution.* The volume of $A(R)$ is $5 \cdot 14 = 70$. The volume of $BA(R) = B(A(R))$ is $\tfrac{1}{2} \cdot 70 = 35$.

[Continue](btn:next)

---
> id: step-251

::: .exercise
**Exercise**  
Let $R \subset \mathbb{R}^3$ be 3D region modeling a fish, and suppose $A$ an invertible $3 \times 3$ matrix. If $R$ has volume $15$ and $A^{-1}(R)$ has volume $5$, then the determinant of $A$ is equal to [[3|5|10]]?
:::

---
> id: step-252

*Solution.* We can see that the matrix $A^{-1}$ scales volumes by $\frac{1}{3}$, and hence $\det A^{-1} = \frac{1}{3}$. This implies that $\det A = 3$.

Determinants can be used to check whether a matrix is invertible, since $A$ is noninvertible if and only if it maps $\mathbb{R}^n$ to a lower-dimensional subspace of $\mathbb{R}^n$, and in that case $A$ squishes positive-volume regions down to zero-volume regions.

[Continue](btn:next)

---
> id: step-253

::: .exercise
**Exercise**  
Let $A =
  \begin{bmatrix}
    2 & -2 \\\\\\ -4 & 0
  \end{bmatrix}.$ Find the values of $\lambda \in \mathbb{R}$ for which the equation $A \mathbf{v} = \lambda \mathbf{v}$ has nonzero solutions for $\mathbf{v}$.
:::

[Continue](btn:next)

---
> id: step-254

*Solution.* We can rewrite $A\mathbf{v} = \lambda \mathbf{v}$ as $A\mathbf{v} = (\lambda I) \mathbf{v}$, where $I$ is the identity matrix. We can rearrange this to give the equation $(A - \lambda I)\mathbf{v} = 0$. This has a nontrivial solution if $(A - \lambda I)$ has a nonzero nullspace. Since $A - \lambda I$ is a square matrix, this is equivalent to it having determinant zero.

``` latex
\det \left(A - \lambda I \right) = \det \left(\begin{bmatrix}
2-\lambda & -2\\ -4 &- \lambda
\end{bmatrix} \right) = -\lambda (2-\lambda) - 8
```

Setting this equal to zero gives

``` latex
\lambda^2 - 2\lambda - 8 = 0
```

[Continue](btn:next)

---
> id: step-255

The left-hand side can be factored

``` latex
(\lambda - 4)(\lambda + 2) = 0
```

Thus our two solutions are $\lambda = 4,-2$.

[Continue](btn:next)

---
> id: step-256

::: .exercise
**Exercise**  
For an $n \times n$ square matrix, which of the following is the relationship between $\det A$ and $\det (3A)$?

    x-picker.list
      .item.bblue.pill.md(data-error="incorrect") $\det(3A) = 3n + \det(A)$.
      .item.bblue.pill.md(data-error="incorrect") $\det(3A) = 3n \det (A)$.
      .item.bblue.pill.md(data-error="incorrect") $\det(3A) = n^{3} \det(A)$.
      .item.bblue.pill.md $\det(3A) = 3^{n} \det (A)$.
:::

---
> id: step-257

*Solution.* The answer is (4) $\det(3A) = 3^{n} \det (A)$. There are two ways to see this, [algebraically](gloss:algebraically) and [geometrically](gloss:geometrically).

To check that this is the right answer using algebra, let $A = I\_{n}$ be the $n \times n$ identity matrix, with determinant $1$. The matrix $3A$ is diagonal, with threes on the diagonal. Its determinant is the product of the entries on its diagonal, $3 \times 3 \times \cdots \times 3 = 3^{n}$.

[Continue](btn:next)

---
> id: step-258

Geometrically, we know that the determinant of $A$ measures how much $A$ scales volume. The matrix $3A$ scales by a factor of three more in each dimension. Since there are $n$ dimensions, the total scaling of volume is multiplied by a factor $3^n$.

[Continue](btn:next)

---
> id: step-259

::: .exercise
**Exercise**  
Is every matrix with positive determinant positive definite? [[No|Yes]]
:::

---
> id: step-260

*Solution.* No. Consider the negation of the $2 \times 2$ identity matrix. It has determinant 1, yet its eigenvalues are both negative.

[Continue](btn:next)

---
> id: step-261

Congratulations! You have completed the Data Gymnasia Linear Algebra course.
