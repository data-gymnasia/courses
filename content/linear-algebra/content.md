
# Linear Algebra

> id: intro
## Introduction

Using and interpreting data requires storing and manipulating sets of numbers in conceptually and computationally helpful ways. The language of *linear algebra* provides basic vocabulary, visualizations, and mathematical results for understanding the structure of a dataset. 

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Consider a spreadsheet of data whose rows correspond to individuals and whose three columns correspond to weight in kilograms, height in centimeters, and height in inches. Are any of the columns redundant? [[Yes|No]]
:::

---

*Solution*. Yes, the third column is redundant. If we know a person's height in centimeters, we can work out their height in inches by multiplying their height in centimeters by 2.54. 

Alternatively, we could say that the second column is redundant, since we could obtain it by dividing the numbers in the third column by 2.54. So there are two ways to trim the number of columns from 3 to 2 without losing information. 

_{button.next-step} Continue_

---


In this chapter, we will develop a more general and mathematically rigorous version of the idea of *redundancy*. 

---

> id: vectors
## Vectors

A **vector** in $\mathbb{R}^n$ is a column of $n$ real numbers. These real numbers are called the **components** or **entries** of the vector. 

_{button.next-step} Continue_

---

::: .example
**Example**  
$\mathbf{v} = \begin{bmatrix} -2 \\\\\\\\ 0 \\\\\\\\ 1 \end{bmatrix}$ is a vector in $\mathbb{R}^3$. We say that the first component of $\mathbf{v}$ is equal to $-2$, the second component is equal to $0$, and the third component is equal to $1$. 
:::

_{button.next-step} Continue_

---

We draw a vector in $\mathbb{R}^2$ as an arrow from one point to another so that the horizontal separation between the points is equal to the first component of the vector and the vertical separation between the points is equal to the second component. 

_{button.next-step} Continue_

---

We define the **norm** $|\mathbf{v}|$ of a vector $\mathbf{v} \in \mathbb{R}^n$ to be the length of the associated arrow, which may be calculated as the square root of the sum of the squares of $\mathbf{v}$'s components. A vector whose norm is 1 is called a **unit vector**. 

    .row.padded
      .grow
        center
          img(src="images/vecadd.svg")
          p.caption Vector addition: $[3,1 ] + [1,2] = [4,3]$
      .grow
        center
          img(src="images/vecscale.svg")
          p.caption Scalar multiplication: $2[2,1] = [4,2]$

<p></p>

The fundamental vector operations are 
* **Vector addition** (addition of two vectors), and 
* **Scalar multiplication** (multiplication of a real number and a vector). 

These operations are defined componentwise, and they have natural geometric interpretations: 
* Summing vectors concatenates them tail-to-head, and 
* Multiplying a vector by a positive real number $k$ preserves its direction and multiplies its norm by $k$. 

Scalar multiplication is denoted by placing the scalar adjacent to the vector, and vector addition is denoted with "+" between two vectors. 

::: .exercise
**Exercise**  
The first component of $3\begin{bmatrix} -2 \\\\\\\\ 11 \end{bmatrix} - \begin{bmatrix} 4
      \\\\\\\\ 0 \end{bmatrix}$ is equal to [[-10]] and the second component is equal to [[33]]. 
:::

---

*Solution*. By definition, we have 

    p
      | \begin{equation}
      |       3\begin{bmatrix} -2 \\\\\\\\ 11 \end{bmatrix} - \begin{bmatrix} 4
      |         \\\\\\\\ 0 \end{bmatrix} =
      |        \begin{bmatrix} -6 \\\\\\\\ 33 \end{bmatrix} + \begin{bmatrix} -4
      |         \\\\\\\\ 0 \end{bmatrix} =
      |       \begin{bmatrix} -10 \\\\\\\\ 33 \end{bmatrix}.
      |     \end{equation}
      

      

::: .exercise
**Exercise**  
Determine whether there exists a real number $r$ satisfying the vector equation     

    p
      | \begin{equation}
      |       r
      |       \begin{bmatrix} -3 \\\\\\\\ 2
      |       \end{bmatrix} -
      |       \begin{bmatrix} 2
      |         \\\\\\\\ 1
      |       \end{bmatrix} =
      |       \begin{bmatrix} 4 \\\\\\\\ 2
      |       \end{bmatrix}.
      |     \end{equation}

:::

_{button.next-step} Continue_

---

*Solution*. For the first component of the two vectors to be equal, the equation $-3r - 2 = 4$ would have to hold. This implies that $r = -2$. If we substitute $r = -2$, then the second component on the left-hand side is $-5$, so there is no such number. 


_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Show that every nonzero vector $\mathbf{v}$ can be written as the product of a nonnegative real number $c$ and a unit vector $\mathbf{u}$. 
:::

_{button.next-step} Continue_

---

*Solution*. We can see that the unit vector $\mathbf{u}$ must point in the same direction as $\mathbf{v}$, since multiplying it by $c$ does not change its direction. Furthermore, if $\mathbf{u}$ is the unit vector pointing in the same direction as $\mathbf{v}$, then we must scale $\mathbf{u}$ by a factor of $|\mathbf{v}|$ to get $\mathbf{v}$. Thus we find that $\mathbf{u} =
    \mathbf{v}/|\mathbf{v}|$ and c = $|\mathbf{v}|$. 


_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Find a formula in terms of $\mathbf{u}$ and $\mathbf{v}$ which represents the vector from the head of $\mathbf{v}$ to the head of $\mathbf{u}$ when $\mathbf{u}$ and $\mathbf{v}$ are situated so that their tails coincide. 
:::

_{button.next-step} Continue_

---

*Solution*. The desired vector $\mathbf{w}$ has the property that adding it to $\mathbf{v}$ gives $\mathbf{u}$. In other words, $\mathbf{w} +
    \mathbf{v} = \mathbf{u}$, which implies that $\mathbf{w} =
    \mathbf{u} - \mathbf{v}$. 

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Solve for $\mathbf{u}$ in terms of $c$ and $\mathbf{v}$ in the equation $c\, \mathbf{u} + \mathbf{v} = \boldsymbol{0}$, assuming that $\mathbf{u}$ and $\mathbf{v}$ are vectors in $\mathbb{R}^n$ and $c$ is a nonzero real number. 
:::

_{button.next-step} Continue_

---

*Solution*. We add $-\mathbf{v}$ to both sides and multiply both sides by $c^{-1}$ to get $\mathbf{u} = -c^{-1} \mathbf{v}$. 

---

> id: span
## Span

A **linear combination** of a list of vectors $\mathbf{v}\_1,
  \ldots, \mathbf{v}\_k$ is an expression of the form 
  
    p
      | \begin{equation}
      |     c_1\mathbf{v_1} + c_2\mathbf{v_2}  + \cdots +
      |     c_k\mathbf{v_k},
      | \end{equation}
      
 where $c_1, \ldots, c_k$ are real numbers. The $c$'s are called the **weights** of the linear combination. 

::: .exercise
**Exercise**  
Suppose that $\mathbf{u} = [2,0]$ and $\mathbf{v} = [1,2]$. Draw the set of all points $(a,b)$ in $\mathbb{R}^2$ for which the vector $[a,b]$ can be written as an *integer* linear combination of $\mathbf{u}$ and $\mathbf{v}$. 
:::

 _{button.next-step} Continue_
 
 ---

*Solution*.  The integer linear combinations of the two vectors form a lattice as shown. 

    center: img(src="images/lattice.svg")
 
 _{button.next-step} Continue_
 
 ---

The **span** of a list of vectors is the set of all vectors which can be written as a linear combination of the vectors in the list. 

::: .exercise
**Exercise**  
Is $\mathbf{w} =  \begin{bmatrix} 1 \\\\\\\\ 4 \\\\\\\\ 0 \end{bmatrix}$ in the span of $\mathbf{u} = \begin{bmatrix} 1 \\\\\\\\ 0 \\\\\\\\ 0 \end{bmatrix}$ and $\mathbf{v} = \begin{bmatrix} 1 \\\\\\\\ 1 \\\\\\\\ 0 \end{bmatrix}$? [[Yes|No]]

---

Find values $\alpha$ ([[-3]]) and $\beta$ ([[4]]) such that $\mathbf{w} = \alpha \mathbf{u} + \beta \mathbf{v}$. 
:::

_{button.next-step} Continue_

--- 

*Solution*. Yes, $\mathbf{w}$ is in the span of $\mathbf{u}$ and $\mathbf{v}$ since $\mathbf{w} = -3\mathbf{u} + 4\mathbf{v}$. 

 _{button.next-step} Continue_
 
 ---

 We visualize a set $S$ of vectors in $\mathbb{R}^n$ by associating the vector $[v_1, v_2, \ldots, v_n]$ with the point $(v_1,
  \ldots, v_n)$—in other words, we associate each vector with the location of its head when its tail is drawn at the origin. 

::: .exercise
**Exercise**  
The span of two vectors in $\mathbb{R}^2$ 

    x-picker.list
      .item(data-error="any-shape") can be any shape 
      .item(data-error="circle") must be either a circle or a line 
      .item can be all of $\mathbb{R}^2$
      .item(data-error="line-or-point") must be either a line or a point 
      .item must be either a line or a point or all of $\mathbb{R}^2$

 The span of three vectors in $\mathbb{R}^3$ 
 
    x-picker.list
      .item(data-error="any-shape") can be any shape 
      .item(data-error="sphere") must be a sphere or a line 
      .item(data-error="plane") must be a plane 
      .item must be a point, a plane, a line, or all of $\mathbb{R}^3$
      .item(data-error="plane") must be a plane, a line, or a point 

:::

_{button.next-step} Continue_
 
---

*Solution*. The span of a list containing only the zero vector is just the origin. The span of a list containing a single vector $\mathbf{v}$ is a line through the origin, since $\alpha \mathbf{v}$ is parallel to $\mathbf{v}$ for any $\alpha \in \mathbb{R}$. The span of a list containing two non-parallel vectors $\mathbf{u}$ and $\mathbf{v}$ is all of $\mathbb{R}^2$, since the span consists of the union of all lines which run in the $\mathbf{u}$ direction and pass through any point in the span of $\{\mathbf{v}\}$. Including more vectors can't increase the span further, so these are the only possibilities. So the correct answer is (e). 

The same reasoning implies that the span of a list of vectors in $\mathbb{R}^3$ must be either the origin, or a line or plane through the origin, or all of $\mathbb{R}^3$. So the answer is (d). 

---

> id: linear-independence
## Linear Independence

A list of vectors is **linearly independent** if none of the vectors in the list can be written as a linear combination of the others. 

::: .example
**Example**  
The list of vectors $\\{\mathbf{u}\_1, \mathbf{u}\_2, \mathbf{u}\_3\\}$ where $
  	\mathbf{u}\_1 = \begin{bmatrix}
  	1 \\\\\\\\
  	1 \\\\\\\\
  	2
  	\end{bmatrix}, 
  	\mathbf{u}\_2 = \begin{bmatrix}
  	0 \\\\\\\\
  	1\\\\\\\\
  	0
  	\end{bmatrix}, 
  	\mathbf{u}\_3 = \begin{bmatrix}
  	4 \\\\\\\\
  	7\\\\\\\\
  	8
  	\end{bmatrix}
  	$ is not linearly independent, since $\mathbf{u}\_3 = 4\mathbf{u}\_1 + 3\mathbf{u}\_2$. 

 The list of vectors $\\{\mathbf{v}\_1, \mathbf{v}\_2, \mathbf{v}\_3\\}$ where $
  	\mathbf{v}\_1 = \begin{bmatrix}
  	1 \\\\\\\\
  	0 \\\\\\\\
  	0
  	\end{bmatrix}, 
  	\mathbf{v}\_2 = \begin{bmatrix}
  	0 \\\\\\\\
  	1 \\\\\\\\
  	0
  	\end{bmatrix}, 
  	\mathbf{v}\_3 = \begin{bmatrix}
  	0 \\\\\\\\
  	0 \\\\\\\\
  	1
  	\end{bmatrix}
  	$ is linearly independent, since any linear combination of $\mathbf{v}\_1$ and $\mathbf{v}\_2$ is unequal to $\mathbf{v}\_3$, and similarly for $\mathbf{v}\_1$ and $\mathbf{v}\_2$. 
:::


::: .theorem
**Theorem**  
A list of vectors is linearly independent if and only if there is no vector in the list which is in the span of the *preceding* vectors. 
:::

For example, to check that $\\{\mathbf{v}\_1, \mathbf{v}\_2, \mathbf{v}\_3\\}$ is linear independent, it suffices to check that $\mathbf{v}\_1 \neq \boldsymbol{0}$, that $\mathbf{v}\_2$ is not a scalar multiple of $\mathbf{v}\_1$ and that $\mathbf{v}\_3$ is not in the span of $\\{\mathbf{v}\_1, \mathbf{v}_2\\}$. 

*Proof*. If a list is linearly independent, then no vector in the list can be represented as a linear combination of others by defintion, so no vector can be in the span of the previous ones. Now suppose a list of vectors $\mathbf{v}\_1, \ldots, \mathbf{v}\_n$ is such that no vector in the list is in the span of the preceding vectors. Note that such a list necessarily does not contain $\boldsymbol{0}.$ If this list were linearly dependent, then one of the vectors could be written as linear combination of the others. Lets assume, without loss of generality, that $\mathbf{v}\_1$ is such a vector, then     

    p
      | \begin{equation}
      | 	\mathbf{v}_1 = c_2\mathbf{v}_2 + \cdots + c_n\mathbf{v}_n
      | 	\end{equation}
      
 for some $c_2, \ldots, c_n$ which are not all zero. If we define $k$ so that $c_k$ is the *last* of the nonzero $c$'s, then we can rearrange the above to get 
 
    p
      | \begin{equation}
      | 	\mathbf{v}_k = \frac{\mathbf{v}_1 - \left(c_2\mathbf{v}_2 + \cdots + c_{k- 1}\mathbf{v}_{k-1}\right)}{c_k}
      | 	\end{equation}
      
which is a contradiction. Therefore the list must be linearly independent. 

::: .exercise
**Exercise**  
Let's say that a linear combination of a list of vectors is **trivial** if all of the weights are zero. 

Show that a list of vectors is **linearly independent** if and only if every nontrivial linear combination of the vectors is not equal to the zero vector. 
:::

*Solution*. Suppose that a list of vectors $\\{\mathbf{v}\_1, \ldots, \mathbf{v}\_n\\}$ is not linearly independent. Then one of the vectors, say the first one, is equal to some linear combination of the others: 

   p
     | \begin{equation}
     |       \mathbf{v}_1 = c_2\mathbf{v}_2 + \cdots + c_n \mathbf{v}_n
     |     \end{equation}
     
Subtracting $\mathbf{v}\_1$ from both sides of this equation, we obtain a vanishing nontrivial linear combination of the $\mathbf{v}$'s. (If the vector known to be a linear combination of the others isn't $\mathbf{v}\_1$, we could have done the same thing with that one instead.) 

Conversely, suppose that there is a nontrivial linear combination of the $\mathbf{v}$'s which is equal to the zero vector: 

   p
     | \begin{equation}
     |       c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 +  \cdots c_n \mathbf{v}_n =
     |       \boldsymbol{0}.
     |     \end{equation}
      
At least one of the weights must be nonzero, so we can solve this equation for a least one of the vectors and thereby represent it as a linear combination of the other vectors. 

--- 
 
> id: vector-spaces
## Vector Spaces
 
Spans of lists of vectors are so important that we give them a special name: a **vector space** is a nonempty set of vectors which is closed under the vector space operations. If $V$ and $W$ are vector spaces and $V \subset W$, then $V$ is called a **subspace** of $W$. 

::: .example
**Example**  
Lines and planes through the origin are vector subspaces of $\mathbb{R}^3$. More generally, the span of any list of vectors in $\mathbb{R}^n$ is a vector subspace of $\mathbb{R}^n$. 
:::

A **spanning list** of a vector space $V$ is a list of vectors in $V$ whose span is equal to $V$. 

::: .example
**Example**  
The list $\left\\{\begin{bmatrix}
  	2 \\\\\\\\
  	1
  	\end{bmatrix},  \begin{bmatrix}
  	1 \\\\\\\\
  	1
  	\end{bmatrix}, \begin{bmatrix}
  	7 \\\\\\\\
  	11
  	\end{bmatrix} \right\\}$ is a spanning list for $\mathbb{R}^2$ because any vector $\mathbf{v} = \begin{bmatrix}
  	x \\\\\\\\
  	y
  	\end{bmatrix} \in \mathbb{R}^2$ can be represented as 

    p
      | \begin{equation}
      |   	\mathbf{v} = (x - y) \begin{bmatrix}
      |   	2 \\\\\\\\
      |   	1
      |   	\end{bmatrix} + (2y - x)\begin{bmatrix}
      |   	1 \\\\\\\\
      |   	1
      |   	\end{bmatrix} + 0 \begin{bmatrix} 7 \\\\\\\\ 11 \end{bmatrix}
      |   	\end{equation}

:::

 

 A linearly independent spanning list for a vector space $V$ is called a **basis** for $V$. 

::: .example
**Example**  
The list $\left\\{\begin{bmatrix}
  	2 \\\\\\\\
  	1
  	\end{bmatrix},  \begin{bmatrix}
  	1 \\\\\\\\
  	1
  	\end{bmatrix}\right\\}$ is a basis for $\mathbb{R}^2$ and the list $\left\\{ \begin{bmatrix}
  		1 \\\\\\\\
  		0
  	\end{bmatrix}, \begin{bmatrix}
  		0 \\\\\\\\
  		1
  	\end{bmatrix} \right\\}$ is also a basis for $\mathbb{R}^2$. 
:::


::: .theorem
**Theorem**  
If $V$ is a vector space, then any spanning list of $V$ is at least as long as any linearly independent list of vectors in $V$. 
:::


In other words, Theorem <a name=th:indspan></a> says that if $L\_1$ is a linearly independent list of vectors in $V$ and $L\_2$ is a list of vectors which spans $V$, then the length of $L\_1$ is less than or equal to the length of $L\_2$. 

::: .exercise
**Exercise**  
Use Theorem <a name=th:indspan></a> to show that all bases of a vector space $V$ have the same length. In other words, if $B\_1$ is a basis for $V$, and $B\_2$ is a basis for $V$, then the lengths of $B\_1$ and $B\_2$ are equal. 
:::

 

*Solution*. Since $B\_1$ is a spanning list and $B\_2$ is linearly independent, we know that $B\_1$ is at least as long as $B\_2$. Similarly, $B\_2$ is at least as long as $B\_1$. Therefore, their lengths are the same. 


### Dimension 

The **dimension** of a vector space $V$ is the length of any basis of $V$. 

Given a basis of $V$, we can represent each vector in $V$ uniquely as a linear combination of the vectors in the basis. In other words, if a vector space $V$ has a basis $\mathcal{B} = \\{\mathbf{b}\_1, \dots \mathbf{b}\_n\\}$ and $\mathbf{v} \in V$, then there exists a unique $n$-tuple of real numbers $(v\_1, \dots, v\_n)$ such that 

    p
      | \begin{equation}
      |     \mathbf{v} = v_1\mathbf{b}_1 + \cdots + v_n\mathbf{b}_n.
      |   \end{equation}
 We call $(v\_1, \dots, v\_n)$ the **coordinates** of $\mathbf{v}$ with respect to $\mathcal{B}.$ 

::: .example
**Example**  
For $1 \leq i \leq n$, let $\mathbf{e}\_i \in \mathbb{R}^n$ be a vector with $1$ in the $i$ th position and zeros elsewhere. Then $\\{\mathbf{e}\_1, \dots, \mathbf{e}\_n\\}$ is called the **standard basis** for $\mathbb{R}^n.$ The components of a vector in $\mathbb{R}^n$ coincide with its coordinates with respect to this basis. 
:::

 

::: .exercise
**Exercise**  
Show that any linearly independent list of vectors in a vector space $V\subset \mathbb{R}^n$ can be extended to form a basis of $V$, and show that any spanning list of $V$ can be trimmed to form a basis of $V$. 
:::

*Solution*. Consider a linearly independent list $L$ of vectors in $V$. If it spans $V$, then it is already a basis. If not, then there is a vector in $V$ which is not in the span of $L$. Appending this vector to our list, we obtain a list which is still linearly independent by Theorem <a name=th:lin-dep-lemma></a>. Continuing in this way, we will eventually get a linearly independent list which spans $V$(the process can't go on forever since by the time the list has $n$ linearly independent vectors in it, it spans $\mathbb{R}^n$ and therefore also $V$). 

 We can trim a list without changing its span by working through the list progressively and removing any vector which is in the span of the vectors preceding it. By Theorem <a name=th:lin-dep-lemma></a>, applying this procedure to a spanning list results in a linearly independent spanning list by Theorem <a name=th:lin-dep-lemma></a>. 

 

::: .exercise
**Exercise**  
Suppose that $U$ and $V$ are vector spaces in $\mathbb{R}^n$. Suppose that $\\{\mathbf{u}\_1, \ldots, \mathbf{u}\_j\\}$ is a basis for $U \cap V$, that $\\{\mathbf{u}\_1, \ldots, \mathbf{u}\_k\\}$ is a basis for $U$, and that $\\{\mathbf{u}\_1, \ldots, \mathbf{u}\_j, \mathbf{v}\_1, \ldots,
  \mathbf{v}\_\ell\\}$ is a basis for $V$. Show that 

    p
      | \begin{equation}
      |     \{\mathbf{u}_1, \ldots, \mathbf{u}_k, \mathbf{v}_1, \ldots,
      |     \mathbf{v}_\ell\}
      |   \end{equation}
 is a linearly independent list. 
:::


*Solution*. By Theorem <a name=th:lin-dep-lemma></a>, it suffices to check that no vector in the list is in the span of the vectors before it in the list. Since the first $k$ vectors form a basis for $U$, they are linearly independent, so none of these is in the span of the preceding vectors. Suppose that one of the $\mathbf{v}$'s is in the span of the preceding vectors, say 

    p
      | \begin{equation}
      |     \mathbf{v}_m =  c_{1}\mathbf{u}_1 + c_{2}\mathbf{u}_{2} + \cdots +
      |     c_k\mathbf{u}_k+ d_{1}\mathbf{v}_1 + d_{m-1} \mathbf{v}_{m-1}.
      |   \end{equation}
      
Consider the vector $\mathbf{v} = \mathbf{v}\_m - ( d\_{1}\mathbf{v}\_1 + d\_{m-1}
 \mathbf{v}\_{m-1}) = c\_{1}\mathbf{u}\_1 + c\_{2}\mathbf{u}\_{2} + \cdots + c\_k\mathbf{u}\_k$. This vector is in $V$, since $\mathbf{v}\_m - ( d\_{1}\mathbf{v}\_1 + d\_{m-1} \mathbf{v}\_{m-1})$ is a linear combination of vectors in $V$. But $\mathbf{v}$ is also in $U$ since $c\_{1}\mathbf{u}\_1 + c\_{2}\mathbf{u}\_{2} + \cdots + c\_k\mathbf{u}\_k$ is a linear combination of vectors in $U$. Therefore, $\mathbf{v} \in U \cap V$. But in that case, $\mathbf{v}$ would be in the span of $\\{\mathbf{u}\_1, \ldots \mathbf{u}\_j\\}$, which would mean that $\\{\mathbf{u}\_1, \ldots, \mathbf{u}\_j, \mathbf{v}\_1, \ldots, \mathbf{v}\_\ell\\}$ is not linearly independent. Since $\\{\mathbf{u}\_1, \ldots, \mathbf{u}\_j, \mathbf{v}\_1, \ldots, \mathbf{v}\_\ell\\}$ is a basis for $V$, we have reached a contradiction. 


::: .exercise
**Exercise**  
Suppose that $V$ and $W$ are subspaces of $\mathbb{R}^{10}$ and that $V$ has dimension 4 and $W$ has dimension 8. Which of the following could possibly be equal to the dimension of $V \cap W$? Select all that apply. 

    x-picker.list
      .item(data-error="too-few") 0 
      .item(data-error="too-few") 1 
      .item 2 
      .item 3 
      .item 4 
      .item(data-error="too-many") 5 
      .item(data-error="too-many") 8 
      .item(data-error="too-many") 9 

Hint: consider two two-dimensional spaces in $\mathbb{R}^3$: what are the possible dimensions for the intersection of two planes through the origin in $\mathbb{R}^3$? 

:::

*Solution*. Since $V \cap W\subset V$, the dimension of $V\cap W$ is no larger than 4. If $V \subset W$, then $V \cap W = V$, so the dimension of $V$ could be as large as 4. If $\\{\mathbf{v}\_1, \ldots, \mathbf{v}\_{10}\\}$ is a basis of $\mathbb{R}^{10}$, and $W$ is the span of $\\{\mathbf{v}\_1, \ldots, \mathbf{v}\_{8}\\}$ and $V$ is the span of $\\{\mathbf{v}\_1, \mathbf{v}\_2, \mathbf{v}\_3, \mathbf{v}\_9\\}$, then $V \cap W$ would be the span of $\\{\mathbf{v}\_1, \mathbf{v}\_2, \mathbf{v}\_3\\}$, so the dimension could also be 3. Likewise, the dimension of $V\cap W$ could be 2. 

However, the dimension of $V \cap W$ cannot be 1. To see this, assume that the dimension of $V \cap W$ is 1 and fix a basis $\\{\mathbf{v}\_1\\}$ for $V \cap W$ and extend it to a basis for $V$, and (separately) also extend it to a basis for $W$. By Exercise <a name=exer:extend-lin-ind></a>, this would give us a total of $1 + 8 + 3 = 12$ linearly independent vectors in $\mathbb{R}^{10}$, which is impossible. Likewise, the dimension of $V \cap W$ cannot be zero. 

So, the possible values for the dimension of $V \cap W$ are 2, 3, and 4. 


::: .exercise
**Exercise**  
In Python, a set of 5 column vectors in $\mathbb{R}^7$ with entries selected uniformly at random from $[0,1]$ may be generated using _{code.language-python}np.random.rand((7,5))_. The dimension of the span of the columns of a matrix may then by computed using the function _{code.language-python}np.linalg.rank_. 

Calculate the dimension of many such spans of random lists of five vectors in $\mathbb{R}^7$. What can you say about the values you get? 

    x-picker.list
      .item All fives 
      .item(data-error="less-five") Mostly fives, some numbers fewer than five 
      .item(data-error="less-five") Mostly threes, some twos and fours, occasional ones and fives 

Repeat with random vectors whose entries are 0 or 1 with probability $\frac{1}{2}$. 

    x-picker.list
      .item(data-error="all-fives") All fives
      .item Mostly fives, some numbers fewer than five 
      .item(data-error="all-fives") Mostly threes, some twos and fours, occasional zeros, ones and fives 

Hint: for part (b): _{code.language-python}np.random.randint(0,2,(5,7))_ generates the desired code. 
:::


    pre(data-executable)
      | 

    script(src='/juniper.min.js')
      script
      include juniper-setup.js
      
_{button.next-step} Continue_

---

*Solution*. If we run _{code.language-python}all([rank(rand(7,5)) for i=1:10^5] .== 5)_, we get _{code.language-python}true_, indicating that five random vectors in $\mathbb{R}^7$ with entries selected uniformly from $[0,1]$ are always or nearly always linearly independent. So the first answer is correct. 

If we run _{code.language-python}sum([rank(np.random.randint(0,2,(7,5))) for i in range(10**5)])/10**5_, we get a result around 4.8, demonstrating that the vectors are not always linearly independent in this case. So the correct answer is the second one. 

> id: linear-transformations
## Linear Transformations


 A **linear transformation** $L$ is a function from one vector space to another which satisfies $L(\alpha \mathbf{v} + \beta \mathbf{w}) = \alpha L(\mathbf{v}) +
\beta L(\mathbf{w})$. Geometrically, these are "flat maps": a function is linear if and only if it maps equally spaced lines to equally spaced lines or points. 

::: .example
**Example**  
In $\mathbb{R}^2,$ reflection along the line $y=x,$ defined by $L\left(\begin{bmatrix}
x \\\\\\\\
y
\end{bmatrix}\right) = \begin{bmatrix}
y \\\\\\\\
x
\end{bmatrix}$, is linear because 

    p
      | \begin{align*}
      | 	L\left(\alpha \begin{bmatrix}
      | 		x_1 \\\\\\\\
      | 		y_1
      | 	\end{bmatrix} + \beta \begin{bmatrix}
      | 	x_2 \\\\\\\\
      | 	y_2
      | 	\end{bmatrix} \right) &= \begin{bmatrix}
      | \alpha y_1 + \beta y_2 \\\\\\\\
      | \alpha x_1 + \beta x_2
      | \end{bmatrix} 
      | &= \alpha \begin{bmatrix}
      | 	y_1 \\\\\\\\
      | 	x_1
      | \end{bmatrix} + \beta \begin{bmatrix}
      | y_2 \\\\\\\\
      | x_2
      | \end{bmatrix} \\\\
      | &= \alpha L\left(\begin{bmatrix}
      | 	x_1 \\\\\\\\
      | 	y_1
      | \end{bmatrix}\right) + \beta L\left(\begin{bmatrix}
      | x_2 \\\\\\\\
      | y_2
      | \end{bmatrix}\right).
      | \end{align*}

:::

### Rank

The **rank** of a linear transformation from one vector space to another is the dimension of its range. 

::: .example
**Example**  
If $L\left(\threevec{x}{y}{z}\right) = \threevec{z+y}{z-y}{0}$, then the rank of $L$ is 2, since its range is the $xy$-plane in $\mathbb{R}^3$. 
:::

The **null space** of a linear transformation is the set of vectors which are mapped to the zero vector by the linear transformation. 

::: .example
**Example**  
If $L\left(\threevec{x}{y}{z}\right) = \threevec{z+y}{z-y}{0}$, then the null space of $L$ is $\mathrm{span}\left(\left\\{\begin{bmatrix} 1 \\\\\\\\ 0 \\\\\\\\ 0 \end{bmatrix}\right\\}\right)$, since $L(\mathbf{v}) = 0$ implies that $\mathbf{v} = \begin{bmatrix} x \\\\\\\\ 0 \\\\\\\\ 0 \end{bmatrix}$ for some $x\in \mathbb{R}$. 
::: 

::: .exercise
**Exercise**  
Suppose that $V$ and $W$ are vector spaces and that $L\_1$ and $L\_2$ are linear transformations from $V$ to $W$. Suppose that $\mathcal{B}$ is a basis of $V$ and that $L\_1(\mathbf{b}) =
  L\_2(\mathbf{b})$ for all $\mathbf{b}\in \mathcal{B}$. Show that $L\_1(\mathbf{v}) = L\_2(\mathbf{v})$ for all $\mathbf{v} \in V$. 
:::


*Solution*. Let $\mathbf{v} \in V$ be an arbitrary vector. Since $\mathcal{B}$ is a basis, we can find coefficients $c\_1, \cdots, c\_{n} \in \mathbb{R}$ such that $\mathbf{v} = c\_{1}\mathbf{b}\_1 + \cdots + c\_{n}\mathbf{b}\_n$. Next, we will use the fact that our transformations $L\_1$ and $L\_2$ are linear. 

    p
      | \begin{align*}
      |  L_1(\mathbf{v})  & = L_{1}(c_{1}\mathbf{b}_1 + \cdots + c_{n}\mathbf{b}_n)& \hfill \mbox{(Substitution for $\mathbf{v}$)} \\\\
      |  &= c_{1}L_{1}(\mathbf{b}_1) + \cdots + c_{n}L_{1}(\mathbf{b}_n)& \hfill \mbox{(Linearity of $L_1$)} \\\\
      |  &= c_{1}L_{2}(\mathbf{b}_1) + \cdots + c_{n}L_{2}(\mathbf{b}_n)& \hfill \mbox{($L_1=L_2$ on basis)}\\\\
      |  & = L_{2}(c_{1}\mathbf{b}_1 + \cdots + c_{n}\mathbf{b}_n)& \hfill \mbox{(Linearity of $L_2$)}\\\\
      |  &= L_{2}(\mathbf{v})& \hfill \mbox{(Substituting $\mathbf{v}$ back in)}
      |  \end{align*}


 

::: .exercise
**Exercise**  
What is the dimension of the null space of the linear transformation $L([x,y,z]) = [y,z,0]$? What is the rank of $L$? 
:::

 

*Solution*. To find the dimension of the nullspace, let us first describe it explicitly. $L(x,y,z) = (y,z,0) = 0$ when $y = z= 0$, regardless of what $x$ is. Thus the nullspace is $\\{(x,0,0) \mid x \in \mathbb{R}\\}$, which is just a line with basis vector $(1,0,0)$. Thus, the dimension of the nullspace is $1$. 

 

::: .exercise
**Exercise**  
 
* For $k \leq n,$ let $P\_k: \mathbb{R}^{n} \to \mathbb{R}^k$ be the linear transformation that projects a vector on to its first $k$ components, i.e. 

    p
      | \begin{equation}P_k(a_1, a_2, \cdots,a_k, \cdots, a_n) = (a_1, a_2, \cdots, a_k)\end{equation}
 

 What is the rank of $P\_k$? What is the nullity of $P\_k$? What is the sum of the rank and the nullity of $P\_k$? 


* In this part, we will show that for any transformation $T$ from $\mathbb{R}^n$ to $\mathbb{R}^m$, the sum of the rank of $T$ and the nullity of $T$ is equal to the value you found above for $P\_k$. 
* Consider a basis $\\{\mathbf{v}\_1, \ldots \mathbf{v}\_k\\}$ of the null space of $T$, and extend it to a basis 

    p
      | \begin{equation}
      |    \{\mathbf{v}_1,
      |     \ldots, \mathbf{v}_k, \mathbf{v}_{k+1}, \ldots, \mathbf{v}_n\}
      | \end{equation}
      
      
 of $\mathbb{R}^n$. 
 
Show that $\\{T(\mathbf{v}\_{k+1}), \ldots, T(\mathbf{v}\_n)\\}$ is linearly independent. Begin by assuming that a linear combination of these vectors is equal to the zero vector and do some work to conclude that all the weights must have been zero. 

Show that $\\{T(\mathbf{v}\_{k+1}), \ldots, T(\mathbf{v}\_n)\\}$ spans the range of $T$. To do this, consider an arbitrary vector $\mathbf{w}$ in the range of $T$ and show how it can be written as a linear combination of vectors in this list. 

:::

 

*Solution*. The transformation $P$ is surjective, so its rank is equal to the dimension of $\mathbb{R}^k$, which is $k$. The nullspace of $P$ consists of vectors of the form $(0, \cdots, 0, a\_{k+1}, \cdots, a\_{n})$, where the first $k$ entries are $0$ and the remaining $(n-k)$ entries are free to take any value. Thus, the nullspace of $P$ has dimension $n-k$. We see that, regardless of $k$, the sum of the rank and nullity of $P$ is $n$. 

In fact, this is true for any linear transformation $T$. If we extend any basis $\\{\mathbf{v}\_1, \ldots \mathbf{v}\_k\\}$ of the null space of $T$ to a basis 

    p
      | \begin{equation}
      |     \{\mathbf{v}_1, \ldots, \mathbf{v}_k, \mathbf{v}_{k+1}, \ldots, \mathbf{v}_n\}
      |   \end{equation}
      
 of $\mathbb{R}^n$, then we claim that 

    p
      | \begin{equation}  
      |     \{T(\mathbf{v}_{k+1}), \ldots, T(\mathbf{v}_n)\}
      |   \end{equation}
      
is a basis for the range of $T$. These vectors are linearly independent because 

    p
      | \begin{equation}
      |     c_{k+1}T(\mathbf{v}_{k+1}) + \cdots + c_nT(\mathbf{v}_n) = \boldsymbol{0}
      |     \text{   implies   } T(c_{k+1}\mathbf{v}_{k+1} + \cdots +
      |     c_n\mathbf{v}_n) = \boldsymbol{0},
      |   \end{equation}
      
which in turn implies that $c\_{k+1}\mathbf{v}\_{k+1} + \cdots + c\_n\mathbf{v}\_n$ is in the null space of $T$. Since $\\{\mathbf{v}\_1, \ldots, \mathbf{v}\_k\\}$ spans the null space of $T$, this implies that $c\_{k+1}\mathbf{v}\_{k+1} + \cdots + c\_n\mathbf{v}\_n$ is equal to the zero vector, and that in turn implies that all the weights are zero. This concludes the proof that <a name=eq:basis-range></a> is linearly independent. 

To see that <a name=eq:basis-range></a> spans the range of $T$, note that if $\mathbf{w} = T(\mathbf{v})$ for some $\mathbf{v}$, then writing $\mathbf{v}$ as a linear combination of $\mathbf{v}\_1, \ldots, \mathbf{v}\_n$, we have 

    p
      | \begin{equation}
      |     \mathbf{w} = T(c_1 \mathbf{v}_1 + \cdots + c_n \mathbf{v}_n) =
      |     T(c_{k+1}\mathbf{v}_{k+1} + \cdots + c_n \mathbf{v}_n),
      |   \end{equation}
      
 by linearity of $T$. This shows that $\mathbf{w}$ is in the span of the vectors <a name=eq:basis-range></a>. 

 

::: .exercise
**Exercise**  
Suppose you're designing an app that recommends cars. For every person in your database, you have collected twenty variables of data: age, height, gender, income, credit score, etc. In your warehouse are ten types of cars. You envision your recommendation system as a linear transformation $T: \mathbb{R}^{20} \to \mathbb{R}^{10}$ that takes in a person's data and then returns a number for each car, reflecting how well that car fits their needs. The rank of $T$ can be as high as ten, which we might summarize by saying that your recommendation system can have ten degrees of complexity. 

 After some time, you find that storing all twenty variables takes up too much space in your database. Instead, you decide to take those twenty variables and apply a linear aggregate score function $S: \mathbb{R}^{20} \to \mathbb{R}^{3}$, with the three output components corresponding to health, personality, and finances. You also compute a linear map $R: \mathbb{R}^{3} \to \mathbb{R}^{10}$ that takes in these three aggregate scores and returns a vector of recommendation values. The total recommendation system is the composition $R \circ S: \mathbb{R}^{20} \to \mathbb{R}^{10}$. What is the maximum possible rank of $R \circ S$? What does this mean for the complexity of this recommendation system? 
:::

 

*Solution*. The image of the transformation $R \circ S: \mathbb{R}^{20} \to \mathbb{R}^{10}$ is contained in the image of the transformation $R:\mathbb{R}^{3} \to \mathbb{R}^{10}$. As a result, the rank of $R \circ S$ is at most the rank of $S$, which is at most three. By reducing your twenty basic variables to three combined scores, your recommendation system only has three degrees of freedom, and can therefore only distinguish customers along three axes. 

 
> id: matrices
## Matrices


A **matrix** is a rectangular array of numbers. We report the size of a matrix as *number of rows by number of columns*. In other words, a matrix with $m$ rows and $n$ columns is said to be an $m\times n$ matrix. We refer to the entry in the $i$ th row and $j$ th column of a matrix $A$ as $A$'s $(i,j)$ th entry, and we denote it by $A\_{i,j}$. In Julia or Python, the $(i,j)$ th entry may be referenced as _{code.language-python}A[i,j]_. 

Matrices are versatile structures with a variety of problem-solving uses. For example, 
 
* A matrix can be thought of as a list of column vectors, so we can use a matrix to package many column vectors into a single mathematical object. 
 
* An $m\times n$ matrix can be thought of as a linear transformation from $\mathbb{R}^n$ to $\mathbb{R}^m$. 

In this section, we will develop both of these perspectives and define some operations which facilitate common manipulations that arise when handling matrices. 

 

::: .definition
**Definition** (Matrix addition and scalar multiplication)  
We define **matrix addition** for two $m\times n$ matrices $A$ and $B$ entrywise: the sum $A+B$ is $m\times n$, and each entry is defined to be the sum of the corresponding entries in $A$ and $B$. 

 Likewise, the product of a number $c$ and an $m\times n$ matrix $A$ is defined to be the $m\times n$ matrix each of whose entries is $c$ times the corresponding entry of $A$. 
:::

 

::: .exercise
**Exercise**  
Find the value of $c$ such that 

    p
      | \begin{equation}
      |     \begin{bmatrix}
      |       6 & 7 & -1 \\
      |       1 & 3 & 5
      |     \end{bmatrix}
      |     + (1-c)
      |     \begin{bmatrix}
      |       4 & -4 & 2 \\
      |       -2 & 0 & 1
      |     \end{bmatrix}
      |     =
      |     \begin{bmatrix}
      |       -2 &  15 &  -5 \\
      |       5 &  3 & 3
      |     \end{bmatrix}
      |   \end{equation}

:::

 

*Solution*. This matrix equation consists of six equations (one for each entry), and one unknown $c$. If it has a solution, it can be found by solving the equations individually (rather than simultaneously, as when there are multiple variables). The equation corresponding to the middle of the bottom row is 

    p
      | \begin{equation}3 + (1-c)0 = 3\end{equation}
      
 This does not constrain $c$, and hence does not give us information. The equation corresponding to the top-right corner is 

    p
      | \begin{equation}6 + (1-c)4  = -2\end{equation}
      
 A little algebra gives $c=3$. We can then check the remaining four equations to see that $c=3$ is a valid solution. 

 

::: .definition
**Definition** (Matrix-vector multiplication)  
If $A$ is an $m\times n$ matrix and $\mathbf{x}$ is a column vector in $\mathbb{R}^n$, then $A\mathbf{x}$ is defined to be the linear combination of the columns of $A$ with weights given by the entries of $\mathbf{x}$. 
:::

 

::: .example
**Example**  
If $A = \begin{bmatrix}
  	1 & 1 \\\\\\\\
  	0 & 1
  \end{bmatrix}$ and $\mathbf{x} = \begin{bmatrix}
  	2 \\\\\\\\
  	3
  \end{bmatrix},$ then $
  A\mathbf{x} = 2 \begin{bmatrix}
    1 \\\\\\\\
    0
  \end{bmatrix} + 3 \begin{bmatrix}
    1 \\\\\\\\
    1
  \end{bmatrix}
  = \begin{bmatrix}
    5 \\\\\\\\
    2
  \end{bmatrix}.$
:::

 

::: .exercise
**Exercise**  
Suppose that $A$ is an $m \times n$ matrix. Show that $\mathbf{x}
  \mapsto A\mathbf{x}$ is a linear transformation. 
:::

 

*Solution*. Suppose $A$ has columns $\mathbf{a}\_1, \cdots \mathbf{a}\_n$ and $\mathbf{x} = (x\_1, \cdots, x\_n)$. By definition, 

    p
      | \begin{equation}A\mathbf{x}= x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n\end{equation}
 

 Take a second vector $\mathbf{y} = (y\_1, \cdots, y\_n)$. We have 

    p
      | \begin{align*}
      |   	A(\mathbf{x} + \mathbf{y}) & = (x_1 + y_1)\mathbf{a}_1 + \cdots + (x_n + y_n)\mathbf{a}_n\\\\
      |                                & = (x_1 \mathbf{a}_1 + \cdots + x_n
      |                                  \mathbf{a}_n) + (y_1 \mathbf{a}_1 +
      |                                  \cdots + y_n \mathbf{a}_n) \\\\
      |                                & = A\mathbf{x} + A\mathbf{y}.
      |   \end{align*}
      
 Next, let $c \in \mathbb{R}$ be a constant. 

    p
      | \begin{align*}
      | 	A(c\mathbf{x}) & = (cx_1)\mathbf{a}_1  + \cdots + (cx_n)\mathbf{a}_n\\\\
      |                    & = c(x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n)\\\\
      |                    & = c(A\mathbf{x})
      |   \end{align*}

 In fact, *every* linear transformation from $\mathbb{R}^n$ to $\mathbb{R}^m$ can be represented as $\mathbf{x}\mapsto A\mathbf{x}$ for some matrix $A$. The entries of the matrix $A$ may be obtained from $L$ by placing the components of $L(\mathbf{e}\_1)$ in the first column of $A$, the components of $L(\mathbf{e}\_2)$ in the second column, and so on. Then $L(\mathbf{x}) = A\mathbf{x}$ for all $\mathbf{x} \in \mathbb{R}^n$, by Exercise <a name=exer:equal-on-basis></a>. 

::: .exercise
**Exercise**  
Find the matrix corresponding to the linear transformation $T([x,y,z]) = [z,x,y]$. 
:::

 

*Solution*. Based on the first component of the expression for $T([x,y,z])$, we find that the first column of the matrix representing $T$ is $[0, 1, 0]$. Similarly, the next two columns are $[0,0,1]$, and $[1,0,0]$. Altogether, we find that the matrix is 

    p
      | \begin{equation}
      |       \begin{bmatrix}
      |         0 & 0 & 1 \\
      |         1 & 0 & 0 \\
      |         0 & 1 & 0
      |       \end{bmatrix}.
      |     \end{equation}


 

::: .exercise
**Exercise**  
Suppose that $A$ is an $m\times n$ matrix and $\mathbf{b}$ is a vector in $\mathbb{R}^m$ with the property that the equation $A\mathbf{x} = \mathbf{b}$ has at least one solution $\mathbf{x} \in \mathbb{R}^n$. Show that the solution is unique if and only the columns of $A$ are linearly independent. 
:::


*Solution*. If the columns $\mathbf{a}\_1, \ldots \mathbf{a}\_n$ of $A$ are not linearly independent, then one of the columns is a linear combination of the columns to its left: 

    p
      | \begin{equation}
      |       \mathbf{a}_k = c_1\mathbf{a}_1 + \cdots +
      |       c_{k-1}\mathbf{a}_{k-1}.
      |     \end{equation}
      
 Therefore, given any solution of $A\mathbf{x} = \mathbf{b}$, we can obtain another solution by increasing the $k$ th component of $\mathbf{x}$ by 1 and decreasing the first component by $c\_1$, the second by $c\_2$, and so on (up to the $(k-1)$ st component). 

 Conversely, if there are distinct solutions $\mathbf{x}\_1$ and $\mathbf{x}\_2$, then $A(\mathbf{x}\_2 - \mathbf{x}\_1) = \boldsymbol{0}$, which means that the components of $\mathbf{x}\_2 - \mathbf{x}\_1$ provide the weights for a linear combination of the columns of $A$ which is equal to the zero vector. 


 We define matrix multiplication so that it corresponds to composition of the corresponding linear transformations. 
 
::: .definition
**Definition**  
If $A$ is an $m\times n$ matrix and $B$ is an $n\times p$ matrix, then $AB$ is defined to be the matrix for which $(AB)(\mathbf{x}) = A(B\mathbf{x})$ for all $\mathbf{x}$. 
:::

 

::: .exercise
**Exercise** ((Matrix Product))  
Suppose that $ A =
  \begin{bmatrix}
    3 & -1 & 2 \\\\\\\\
    4 & 2 & 0
  \end{bmatrix}
  $ and $B = \begin{bmatrix}
    4 & -5 & 0 & 1 \\\\\\\\
    2 & 8 & 0 & 0 \\\\\\\\
    -1 & 5 & 3 & 2
  \end{bmatrix}
  $. Consider the matrix $C$ defined so that, for all $1 \leq k \leq 4$, the $k$ th column of $C$ is defined to be the product of $A$ and the $k$ th column of $B$. Show that $C = AB$ according to Definition <a name=defn:matprod></a>. 
:::

 

*Solution*. Let $\mathbf{x} = (x\_1,x\_2,x\_3,x\_4)$ be an arbitrary vector in $\mathbb{R}$. The matrix $C$ can be written as 

    p
      | \begin{equation}C = \begin{pmatrix}
      |  A \left( \begin{bmatrix}
      | 4\\\\\\\\2\\\\\\\\1
      | \end{bmatrix} \right) & A \left( \begin{bmatrix}
      | -5\\\\\\\\8\\\\\\\\5
      | \end{bmatrix} \right) & A \left( \begin{bmatrix}
      | 0\\\\\\\\0\\\\\\\\3
      | \end{bmatrix} \right) & A \left( \begin{bmatrix}
      | 1\\\\\\\\0\\\\\\\\2
      | \end{bmatrix} \right)
      | \end{pmatrix}\end{equation}
 

 By definition, 

    p
      | \begin{equation}(AB)\mathbf{x} = A(B\mathbf{x})\end{equation}
 

 Let's compute the right-hand side above. Firstly, 

    p
      | \begin{equation}B\mathbf{x} = x_1 \begin{bmatrix}
      | 4\\\\\\\\2\\\\\\\1
      | \end{bmatrix} + x_2 \begin{bmatrix}
      | -5 \\\\\\\\ 8 \\\\\\\\ 5
      | \end{bmatrix} + x_3 \begin{bmatrix}
      | 0\\\\\\\\0\\\\\\\\3
      | \end{bmatrix} + x_4 \begin{bmatrix}
      | 1\\\\\\\\0\\\\\\\\2
      | \end{bmatrix} \end{equation}
 

 Next, by linearity, 

 

    p
      | \begin{align*}
      | A(B\mathbf{x}) &= A \left(x_1 \begin{bmatrix}
      | 4\\\\\\\\2\\\\\\\\1
      | \end{bmatrix} + x_2 \begin{bmatrix}
      | -5 \\\\\\\\ 8 \\\\\\\\ 5
      | \end{bmatrix} + x_3 \begin{bmatrix}
      | 0\\\\\\\\0\\\\\\\\3
      | \end{bmatrix} + x_4 \begin{bmatrix}
      | 1\\\\\\\\0\\\\\\\\2
      | \end{bmatrix}\right)\\\\
      | &= x_1 A \left( \begin{bmatrix}
      | 4\\\\\\\\2\\\\\\\\1
      | \end{bmatrix} \right) +  x_2 A \left( \begin{bmatrix}
      | -5 \\\\\\\\ 8 \\\\\\\\ 5
      | \end{bmatrix} \right) +  x_3 A \left( \begin{bmatrix}
      | 0\\\\\\\\0\\\\\\\\3
      | \end{bmatrix} \right) +  x_4 A \left( \begin{bmatrix}
      | 1\\\\\\\\0\\\\\\\\2
      | \end{bmatrix} \right)\\
      | & = C\mathbf{x}
      | \end{align*}
 

 This demonstrates that $(AB)\mathbf{x}$ is equal to $C\mathbf{x}$ for the matrix $C$ as described in the problem. 

 

 The principle you worked out in Exercise <a name=exer:matprod></a> is universal: the $k$ th column of $AB$ is the product of $A$ and the $k$ th column of $B$, for each column index $k$. 

 

 The range or null space of a matrix $A$ is defined to be the range or null space of the corresponding linear transformation $\mathbf{x}\mapsto A\mathbf{x}$. The rank of $A$ is defined to be the dimension of its range. 

::: .example
**Example**  
The matrix $A = \begin{bmatrix}
  		0 & 1 & 0 \\\\\\\\
  		0 & 0 & 2
  	\end{bmatrix}$ has rank $2$, because the span of its columns is all of $\mathbb{R}^2$. The null space has dimension 1, since the solution of $A \mathbf{x} = \boldsymbol{0}$ is the span of $\\{[1,0,0]\\}$. 
:::

 

 If the range of an $n\times n$ matrix is $\mathbb{R}^n$, then the corresponding linear transformation is an invertible function from $\mathbb{R}^n$ to $\mathbb{R}^n$: 
 
 ::: .theorem
**Theorem** (Invertible Matrix Theorem)  
Suppose that $A$ is an $n\times n$ matrix. Then the following are equivalent (that is, for a given matrix they are either all true or all false). 
* The transformation $\mathbf{x}\mapsto A\mathbf{x}$ from $\mathbb{R}^n$ to $\mathbb{R}^n$ is bijective. 
* The range of $A$ is $\mathbb{R}^n$. 
* The null space of $A$ is $\\{\boldsymbol{0}\\}$


:::

 In other words, for a linear transformation from $\mathbb{R}^n$ to $\mathbb{R}^n$, bijectivity, surjectivity, and injectivity are equivalent. 

*Proof*. We begin by showing that (ii) and (iii) are equivalent. If the columns of $A$ are linearly dependent, then the range of $A$ is spanned by fewer than $n$ vectors. Therefore, if the rank of $A$ is equal to $n$, then the columns of $A$ are linearly independent. This implies that a linear combination of the columns is equal to the zero vector only if the weights are all zero. In other words, the only solution of the equation $A\mathbf{x} = \boldsymbol{0}$ is the zero vector. In other words, the null space of $A$ is $\\{\boldsymbol{0}\\}$. 

 Conversely, if the null space of $A$ is $\\{\boldsymbol{0}\\}$, then the columns of $A$ are linearly independent, and the rank of $A$ is therefore equal to $n$. 

 By definition of bijectivity, (ii) and (iii) together imply (i), and (i) implies (ii) and (iii). Therefore, the three statements are equivalent. 

 

 If $A$ is invertible, then the inverse function is also a linear transformation: 

::: .exercise
**Exercise**  
Show that if $T$ is a bijective linear transformation, then the inverse function $T^{-1}$ is also linear. 
:::

 

*Solution*. Consider the linearity equation $T(a\mathbf{x} +
      b\mathbf{y}) = aT(\mathbf{x}) + bT(\mathbf{y})$ and two vectors $\mathbf{v} = T(\mathbf{x})$ and $\mathbf{w} = T(\mathbf{y})$ in the range of $T$. Substitute $\mathbf{x} = T^{-1}(\mathbf{v})$ and $\mathbf{x} = T^{-1}(\mathbf{v})$ into the linearity equation for $T$ to obtain 

    p
      | \begin{equation}
      |     T(a T^{-1}(\mathbf{v}) +
      |     b T^{-1}(\mathbf{w})) = a\mathbf{v} + b\mathbf{w} \implies
      |      a T^{-1}(\mathbf{v}) +
      |     b T^{-1}(\mathbf{w}) = T^{-1}(a\mathbf{v} + b\mathbf{w}).
      |   \end{equation}


 

 Its matrix is called the **inverse** of $A$ and is denoted $A^{-1}$. The matrices $A$ and $A^{-1}$ satisfy the equations $AA^{-1} = A^{-1} A = I$, where $I$ denotes the $n\times
  n$ *identity* matrix, which has ones along the diagonal starting at the top left entry and zeros elsewhere. 

::: .example
**Example**  
If $A = \begin{bmatrix}
  	2 & 1 \\
  	1 & 1
  	\end{bmatrix}$ and $B = \begin{bmatrix}
  	1 & -1 \\
  	-1 & 2
  	\end{bmatrix},$ then 

    p
      | \begin{equation*}
      |   	BA &= \begin{bmatrix}
      |   	1 & -1 \\\\\\\\
      |   	-1 & 2
      |   	\end{bmatrix}
      |   	\begin{bmatrix}
      |   	2 & 1 \\\\\\\\
      |   	1 & 1
      |   	\end{bmatrix} =
      |   	\begin{bmatrix}
      |   	1 & 0 \\\\\\\\
      |   	0 & 1
      |   	\end{bmatrix}.
      | \end{equation}
      
 Therefore $B(A\mathbf{x}) = (BA)\mathbf{x}= \mathbf{x}$ for all $\mathbf{x} \in \mathbb{R}^2.$ So $B = A^{-1}.$
 
:::

 

::: .exercise
**Exercise**  
Let $T : \mathbb{R}^2 \to \mathbb{R}^2$ be a linear transformation defined to be a reflection across the $y$-axis followed by a $15$-degree clockwise rotation about the origin. Which of the following maps $T\left(\begin{bmatrix}
        1 \\\\\\\\
        0
      \end{bmatrix}\right)$ back to $\begin{bmatrix}
      1 \\\\\\\\
      0
    \end{bmatrix}?$ 
* Reflection across the $y$-axis followed by a $15$-degree counterclockwise rotation about the origin. 
* A $15$-degree counterclockwise rotation about the origin followed by a reflection across the $y$-axis. 

Use the above example to write $(AB)^{-1}$ in terms of $A$ and $B$ when $A$ and $B$ are invertible matrices. 


:::

 

*Solution*. The correct answer is (b). The transformation in (a) maps $
T\left(
\begin{bmatrix}
1 \\
0
\end{bmatrix}
\right)
$ to $ \frac{1}{2}
\begin{bmatrix}
1 \\
\sqrt{3}
\end{bmatrix}.
$ 

 The example above shows that to invert a transformation represented by $AB,$ we must first invert the transformation represented by $A$ followed by the one represented by $B.$ Therefore $(AB)^{-1} = B^{-1}A^{-1}.$

 

::: .exercise
**Exercise**  


 Let $A$ be a non-zero $n \times n$ matrix whose rank is $k$. 
* If $k = n$ and $\mathbf{b} \in \mathbb{R}^n,$ explain why there exists only one vector $\mathbf{x}$ such that $A\mathbf{x} = \mathbf{b}.$
* Suppose $k < n$ and show that there are vectors in $\mathbb{R}^n$ for which the equation $A \mathbf{x} = \mathbf{b}$ has no solution. 
* If $\mathbf{x} \in \mathbb{R}^n$ and $\mathbf{y} \in \mathbb{R}^n$ both satisfy $A\mathbf{x} = \mathbf{b}$ and $A\mathbf{y} = \mathbf{b}$ for some fixed vector $\mathbf{b} \in \mathbb{R}^n,$ describe geometrically the set of points $(c\_1, c\_2) \in \mathbb{R}^2$ such that $A(c\_1\mathbf{x} + c\_2\mathbf{y}) = \mathbf{b}.$

 

 Based on the above observations, can the equation $A\mathbf{x} =
  \mathbf{b}$ have exactly $10$ solutions? 


:::

 

*Solution*.  
* If $ k = n,$ then the columns of $A$ form a basis for $\mathbb{R}^n$ and so the range of $A$ is $\mathbb{R}^n.$ Therefore the corresponding linear transformation is invertible and the only vector that satisfies $A\mathbf{x} = \mathbf{b}$ is given by $\mathbf{x} = A^{-1}\mathbf{b}.$
* By definition, if the range of $A$ is not all of $\mathbb{R}^n$, then there exists a vector $\mathbf{b}$ in $\mathbb{R}^n$ which is not in the range of $A$. In other words, there exists $\mathbf{b}\in \mathbb{R}^n$ such that $A\mathbf{x} = \mathbf{b}$ has no solution. 
* Since 

    p
      | \begin{equation}A(c_1\mathbf{x} + c_2\mathbf{y}) = c_1A\mathbf{x} + c_2
      |       A\mathbf{y} = c_1\mathbf{b} + c_2\mathbf{b} = (c_1 +
      |       c_2)\mathbf{b},\end{equation}
      
 we see that the set of valid pairs $(c\_1, c\_2) \in \mathbb{R}^2$ is the diagonal line $x+y = 1$ in $\mathbb{R}^2.$

 

 From $(1)$ and $(2)$ above, we see that the equation $A\mathbf{x} =
\mathbf{b}$ can have $1$ or no solution. From $(3)$, we see that if there are at least two distinct solutions, then there are in fact infinitely many solutions. So $10$ is not a possibility. 

--- 

> id: dot-products
## Dot Products


 Consider a shop inventory which lists unit prices and quantities for each of the products they carry. For example, if the store has 32 small storage boxes at \$4.99 each, 18 medium-sized boxes at \$7.99 each, and 14 large boxes at \$9.99 each, then the inventory's price vector $\mathbf{p}$ and quantity vector $\mathbf{q}$ are 

    p
      | \begin{equation}
      |   \mathbf{p} = \begin{bmatrix}
      |     4.99 \\\\\\\\ 7.99 \\\\\\\\ 9.99
      |   \end{bmatrix}, \quad
      |     \mathbf{q} =
      |   \begin{bmatrix}
      |     32 \\\\\\\\ 18 \\\\\\\\ 14
      |   \end{bmatrix}.
      | \end{equation}
 

 The total value of the boxes in stock is 

    p
      | \begin{equation}
      |   (32)(\$4.99) + (18)(\$7.99) + (14)(\$9.99) = \$443.36.
      | \end{equation}
 This operation---multiplying two vectors' entries in pairs and summing---arises often in applications of linear algebra and is also foundational in basic linear algebra theory. 

::: .definition
**Definition**  
The **dot product** of two vectors in $\mathbb{R}^n$ is defined by 

    p
      | \begin{equation}
      |     \mathbf{x} \cdot \mathbf{y} = x_1y_1 + x_2y_2 + \cdots + x_n
      |     y_n.
      |   \end{equation}

:::

::: .example
**Example**  
If $\mathbf{x} = \begin{bmatrix}
    1 \\\\\\\\
    3 \\\\\\\\
    5 \\\\\\\\
    7
  \end{bmatrix}$ and $\mathbf{y} =\begin{bmatrix}
    2 \\\\\\\\
    4 \\\\\\\\
    6 \\\\\\\\
    8
  \end{bmatrix},$ then $
  \mathbf{x} \cdot \mathbf{y} = 1 \cdot 2 + 3 \cdot 4 + 5 \cdot 6 + 7 \cdot 8 = 100.
  $
:::

 

 One of the most algebraically useful features of the dot product is its linearity: $\mathbf{x} \cdot (c\mathbf{y} + \mathbf{z}) = c \mathbf{x} \cdot
\mathbf{y} + \mathbf{x} \cdot \mathbf{z}$. 

::: .exercise
**Exercise**  
Show that $(\mathbf{a} +\mathbf{b}) \cdot (\mathbf{a} +\mathbf{b}) =
    |\mathbf{a}|^2 + 2 \mathbf{a}\cdot \mathbf{b} + |\mathbf{b}|
    ^2$ for all vectors $\mathbf{a}$ and $\mathbf{b}$ in $\mathbb{R}^n$. 
:::

 

*Solution*. Using linearity of the dot product, we get 

    p
      | \begin{align*}
      | 	(\mathbf{a} + \mathbf{b}) \cdot (\mathbf{a} + \mathbf{b}) &= \mathbf{a} \cdot (\mathbf{a} + \mathbf{b}) + \mathbf{b}\cdot (\mathbf{a} + \mathbf{b})  \\\\
      | 	&= \mathbf{a} \cdot \mathbf{a} + \mathbf{a}\cdot\mathbf{b} + \mathbf{b} \cdot \mathbf{a} + \mathbf{b} \cdot \mathbf{b} \\\\
      | 	&= |\mathbf{a}|^2 + 2\mathbf{a}\cdot\mathbf{b} + |\mathbf{b}|^2
      | \end{align*}
      
 as required. 

 

 

 The dot product $\mathbf{x}\cdot\mathbf{y}$ has a geometric connection with the angle $\theta$ between two vectors $\mathbf{x}$ and $\mathbf{y}$, via 

    p
      | \begin{equation} 
      |   \mathbf{x} \cdot \mathbf{y} =
      |   |\mathbf{x}| |\mathbf{y}|\cos\theta.
      | \end{equation}
 

 $\mathbf{x} \cdot \mathbf{y}  = 0$ if and only if $\mathbf{x}$ and $\mathbf{y}$ are orthogonal. 

::: .exercise
**Exercise**  
In natural language processing, one basic way to compare a finite number of text documents is to use *vectorized word counts.* Suppose the documents have a combined total of $n$ distinct words, which are arranged in some order. Each document is then associated with a vector of length $n$ whose $i$ th entry indicates the number of times the $i$ th word occurs in the associated document. 

 One way to measure similarity between two documents is to take the dot product of the associated unit vectors: If two documents $A$ and $B$ have associated vectors $\mathbf{a}$ and $\mathbf{b}$ respectively, their similarity is defined by 

    p
      | \begin{equation}
      |     S(A, B) = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}| |\mathbf{b}|}.
      |   \end{equation}
      
 By <a name=eq:dot-cosine></a>, we have $0 \leq S(A, B) \leq 1$ for any two documents $A$ and $B.$ Documents with no words in common are associated with orthogonal vectors and thus have $0$ similarity. If two documents have similarity $1,$ their associated vectors are scalar multiples of each other, meaning that they have the same words and that the words appear in the same proportions. 

 Find the vectorized word count similarity between the following sentences: 

    center
      p "The rain in Spain falls mainly in the plain" 

"The plain lane in Spain is mainly a pain" 
:::

 

*Solution*. Listing the words in the order *the, in, rain, Spain, falls, mainly, plain, lane, pain, is, a*, the two vectorized word counts are $[2,2,1,1,1,1,1,0,0,0,0]$ and $[1,1,0,1,0,1,1,1,1,1,1]$. Substituting into the definition of $S$, we get a similarity of approximately 0.647. 

 

::: .exercise
**Exercise**  
Let $\mathbf{v}\_1, \dots, \mathbf{v}\_n$ be a list of orthogonal non-zero vectors, that is, for all $i, j \in \\{1, \dots, n\\},$ suppose that $\mathbf{v}\_i \cdot \mathbf{v}\_j = 0$ whenever $i \neq j$. Show that this list is linearly independent. 
:::

 

*Solution*. Suppose the vectors are linearly dependent. Then one of the vectors can be written as a linear combination of the others. Suppose $\mathbf{v}\_1$ is such a vector. Then there exists a list of weights $c\_2, \dots, c\_n$ such that 

    p
      | \begin{equation}
      |     \mathbf{v}_1 = c_2\mathbf{v}_2 + \cdots + c_n\mathbf{v}_n.
      |   \end{equation}
      
 Since $\mathbf{v}\_1$ is non-zero, at least one of the weights must be non-zero. Now 

    p
      | \begin{align*}
      | 	0 &= \mathbf{v}_1 \cdot \mathbf{v}_2 \\\\
      | 	& = (c_2\mathbf{v}_2 + \cdots + c_n\mathbf{v}_n) \cdot \mathbf{v}_2 \\\\
      | 	& = c_2|\mathbf{v}_2|^2.
      | \end{align*}
      
 Since $\mathbf{v}\_2 \neq \mathbf{0}$, $c\_2$ must be zero. Repeating this for all vectors $\mathbf{v}\_3, \dots, \mathbf{v}\_n$ we see that $c\_2=c\_3 = \cdots = c\_n = 0$ which is a contradiction. Therefore the vectors must be linearly dependent. 


> id: symmetric-matrices
## Symmetric matrices

 The dot product gives us a compact way to express the formula for an entry of a matrix product: to obtain the $(i,j)$ th entry of a matrix product $AB$, we dot the $i$ th row of $A$ and the $j$ th column of $B$. 

 However, the matrix product by itself is not quite flexible enough to handle a common use case: suppose we have two matrices $A$ and $B$ which contain tabular data stored in the same format. For example, suppose that the columns of $A$ store the vectorized word counts for a series of emails sent from Alice, while $B$ stores vectorized word counts for a series of emails sent from Bob. If we want to calculate the similarity of each of Alice's email to each of Bob's emails, then we want to dot the *columns* of $A$---not its rows---with the columns of $B$. 

 So we define the **transpose** $A'$ of a matrix $A$ to be the matrix resulting from switching $A$'s rows and columns. 

::: .definition
**Definition**  
If $A$ is an $m\times n$ matrix, then its **transpose** $A'$ is defined to be the matrix with $n$ rows whose $i$ th row is equal to the $i$ th column of $A$, for each $i$ from 1 to $n$. 
:::

 

::: .example
**Example**  
If $A = \begin{bmatrix}
  	1 & 2 & 3 \\\\\\\\
  	4 & 5 & 6
  \end{bmatrix},$ then $A' =\begin{bmatrix}
  	1 & 4 \\\\\\\\
  	2 & 5 \\\\\\\\
  	3 & 6
  \end{bmatrix}.$
:::

 

 With this definition in hand, we can write the matrix whose entries are the dot products of columns of $A$ and $B$ as $A' B$. 

 Let's develop a few properties of the transpose so that we can manipulte matrix expressions involving the transpose. First, we note that the transpose is a *linear* operator, meaning that $(cA+B)' = cA' + B'$ whenever $c$ is a constant and $A$ and $B$ are matrices. 

 Taking the transpose also interacts nicely with matrix multiplication: 

::: .exercise
**Exercise**  
Suppose that $A$ is an $m \times n$ matrix and that $B$ is an $n \times p$ matrix. Exactly one of the following expressions is equal to $(AB)'$ in general---identify the correct answer choice by checking the dimensions of each matrix in each expression. 
*  $A' B'$
*  $B' A'$
*  $ABA'$

 Confirm your conjecture numerically in Julia and paste your code in the answer box. You can generate a random $m \times n$ matrix using _{code.language-python}rand(m,n)_, the transpose of _{code.language-python}A_ is computed as _{code.language-python}A'_, and the product of _{code.language-python}A_ and _{code.language-python}B_ is _{code.language-python}A * B_. 
:::

 

*Solution*. 

 $AB$ is an $m \times p$ matrix, so $(AB)'$ is a $p \times
  m$ matrix. 
 
*  $A' B'$: this is an $n \times m$ matrix multiplied by a $p \times n$ matrix, and if $m \neq p$ it is not defined. If it is defined, it gives an $n \times n$ matrix. 
*  $B' A'$: this is a $p \times n$ matrix multiplied by an $n \times m$ matrix and hence is a $p \times m$ matrix. 
*  $AB$ is an $m \times p$ matrix, and $A'$ is an $n \times m$ matrix. If $p \neq n$ this is not defined. If it is defined, it gives an $m \times m$ matrix. 


 We see that the only matrix product that is always defined, and in fact gives the right dimensions, is the second option. And in fact, we have 

    p
      | \begin{equation}(AB)' = B' A'\end{equation}
      
 in general. 

 The following block of code checks the equation for a particular random example. 

    pre: code.language-python
      | 
      |     A = rand(3,7)
      |     B = rand(7,3)
      |     (A * B)' == B' * A'
      |   


 In some applications, a matrix will have the property that its $(i,j)$ th entry is necessarily equal to its $(j,i)$ th entry. For example, suppose we have an ordered list of 100 cell phone towers, and we define the $100 \times 100$ matrix whose $(i,j)$ th entry is equal to the distance from tower $i$ to tower $j$. Such a matrix is said to be *symmetric*. 

::: .definition
**Definition**  
If $A$ is an $n\times n$ matrix satisfying the equation $A = A'$, we say that $A$ is **symmetric**. 
:::


::: .exercise
**Exercise**  
Suppose that $A$ is a symmetric matrix, $B$ is a matrix, and $c
    \in  \mathbb{R}$. Which of the following is necessarily equal to $(c^2 (A+B)' + A)'$? 
    
    x-picker.list
      .item  $c^2 A' + B$
      .item  $(c^2 - 1) A' + B'$
      .item  $(c^2 + 1) A + c^2 B$
      .item  $(c^2 - 1) A + B'$
      .item  $(c^2 + 1) A + c^2 B'$


:::


*Solution*.  

    p
      | \begin{align*}
      |       (c^2 (A+B)' + A)' & = (c^2 (A' + B') + A)'\\\\
      |                           & = (c^2 A' + c^2 B' + A)'\\\\
      |                           & = c^2 (A')' + c^2 (B')' + A' \\\\
      |                           & = c^2 A + c^2 B + A' \\\\
      |                           & = c^2 A + c^2 B + A' \\\\
      |                           & = (c^2 + 1)A + c^2 B
      |     \end{align*}
 

 Here we used that $(X')' = X$ for any matrix $X$, and that $A' = A$ for a symmetric matrix $A$. This leaves (3) as the correct answer. (5) is close, but incorrect if $B \neq B'$. 

 
 In the case where $A$ is a $n \times 1$ matrix and $B$ is an $n\times 1$ for some $n$, then $A' B$ is a $1 \times 1$ matrix, which we may think of as just a number. This means that if $\mathbf{x}$ and $\mathbf{y}$ are vectors in $\mathbb{R}^n$ then the dot product $\mathbf{x} \cdot \mathbf{y}$ may be written as $\mathbf{x}' \mathbf{y}$. This representation can be useful for manipulating expressions involving dot products. 
 
 ::: .exercise
**Exercise**  
Show that 

    p
      | \begin{equation}
      | 	\mathbf{u} \cdot (A\mathbf{v}) = (A'\mathbf{u})\cdot \mathbf{v}
      | 	\end{equation}
      
      
 for all $m\times n$ matrices $A$ and all vectors $\mathbf{u} \in
	\mathbb{R}^m$ and $\mathbf{v} \in \mathbb{R}^n$. 
:::

 

*Solution*. Since $\left(A'\right)' = A,$ we have 

    p
      | \begin{align*}
      | 		\left(A' \mathbf{u}\right) \cdot \mathbf{v} &= \left(A' \mathbf{u}\right)' \mathbf{v} \\\\
      | 		&= \mathbf{u}' \left(A'\right)' \mathbf{v} \\\\
      | 		&= \mathbf{u}' \left(A\mathbf{v}\right) \\\\
      | 		&= \mathbf{u} \cdot \left(A\mathbf{v}\right).
      | 	\end{align*}


 In other words, we may move a matrix which is pre-multiplying one of the vectors in a dot product to the other vector, at the cost of taking its transpose. Let's look at one important application of this property. 

::: .exercise
**Exercise**  
Show that $\mathbf{x}\cdot (A' A\mathbf{x}) \geq 0$ for all $m\times n$ matrices $A$ and all $\mathbf{x} \in \mathbb{R}^n$. 
:::

 

*Solution*. We have 

    p
      | \begin{equation}
      | 	\mathbf{x}\cdot (A' A\mathbf{x}) =
      | 	((A')'\mathbf{x})\cdot (A\mathbf{x}) =
      | 	(A\mathbf{x}) \cdot (A\mathbf{x}) = |A \mathbf{x}|^2 \geq 0.
      | 	\end{equation}


 ---
 
> id: orthogonality
## Orthogonality

The **orthogonal complement** $V^\perp$ of a vector space $V\subset \mathbb{R}^n$ is the set of vectors in $\mathbb{R}^n$ which are orthogonal to every vector in $V$. For example, the orthogonal complement a two-dimensional subspace $V$ of $\mathbb{R}^3$ is the line through the origin perpendicular to the plane of vectors in $V$. 

::: .exercise
**Exercise**  
The orthogonal complement of the span of the columns of a matrix $A$ is equal to which of the following? 
* The range of $A$
* The null space of $A$
* The range of $A'$
* the null space of $A'$

:::

 

*Solution*. The correct answer is (d), because for a vector $\mathbf{x}$ to be orthogonal to all of the columns of $A$, the equation $A' \mathbf{x} = \boldsymbol{0}$ must hold. In other words, $\mathbf{x}$ must be in the null space of $A'$. 

 Furthermore, if $\mathbf{x}$ is in the null space of $A'$, then it is orthogonal to any linear combination of the columns of $A$, since 

    p
      | \begin{equation}
      |     (c_1 \mathbf{a}_1 + c_2 \mathbf{a}_2 + \cdots + c_n \mathbf{a}_n)
      |     \cdot \mathbf{x} =
      |     c_{1}\mathbf{a}_{1}\cdot\mathbf{x}+c_{2}\mathbf{a}_{2}\cdot\mathbf{x}+\cdots+c_{n}\mathbf{a}_{n}\cdot\mathbf{x}_{n}
      |     = 0 + 0 + \cdots + 0 = 0.
      |   \end{equation}
      
Therefore, orthogonal complement of the span of the columns of a matrix $A$ is equal to the null space of $A'$. 

For any vectors $\mathbf{u}$ and $\mathbf{v}$ in $\mathbb{R}^n$, it is always possible to write $\mathbf{u}$ as the sum of a multiple of $\mathbf{v}$ and a vector which is perpendicular to $\mathbf{v}$: 

::: .exercise
**Exercise** (Orthogonal decomposition)  
 Suppose that $\mathbf{u}$ and $\mathbf{v}$ are nonzero vectors in $\mathbb{R}^n$. Solve the equation 

    p
      | \begin{equation}
      |       k\mathbf{v} \cdot (\mathbf{u} - k\mathbf{v}) = 0
      |     \end{equation}
      
 for $k$ to find the multiple of $\mathbf{v}$ which is perpendicular to its difference with $\mathbf{u}$. 
 
    center: img(src="images/perp.svg")

:::

 

*Solution*. The equation gives $k\mathbf{u}\cdot \mathbf{v} - k^2 |\mathbf{v}|^2 = 0$, which implies that 

    p
      | \begin{equation}
      |     k = \frac{\mathbf{u}\cdot \mathbf{v}}{|\mathbf{v}|^2}.
      |   \end{equation}


 If $\mathbf{u}$ is written as $k\mathbf{v} + \mathbf{w}$ where $\mathbf{w}$ is perpendicular to $\mathbf{v}$, then we call $k\mathbf{v}$ the **projection** of $\mathbf{u}$ onto $\mathbf{v}$. 

::: .theorem
**Theorem** (Gram-Schmidt)  
Every vector space $V\subset \mathbb{R}^n$ has an orthogonal basis. 
:::

 

*Proof*. Suppose that $\mathcal{V} = \\{\mathbf{v}\_1, \ldots, \mathbf{v}\_k\\}$ is a basis of $\mathbb{R}^n$. We will build our orthogonal basis by orthogonalizing $\mathcal{V}$ one vector at a time. 

 Define $\mathbf{b}\_1 = \mathbf{v}\_1$, and then define $\mathbf{b}\_2$ to be the part of $\mathbf{v}\_2$ which is orthogonal to $\mathbf{b}\_1$: 

    p
      | \begin{equation}
      |     \mathbf{b}_2 = \mathbf{v}_2 - \frac{\mathbf{b}_1 \cdot
      |       \mathbf{v}_2}{|\mathbf{b}_1|^2} \mathbf{b}_1.
      |   \end{equation}
      
 Similarly, we project $\mathbf{v}\_3$ onto $\mathbf{b}\_1$ and onto $\mathbf{b}\_2$ and subtract off both of these projections: 

    p
      | \begin{equation}
      |     \mathbf{b}_3 = \mathbf{v}_3 - \frac{\mathbf{b}_2 \cdot
      |       \mathbf{v}_3}{|\mathbf{b}_2|^2}\mathbf{b}_2 -  \frac{\mathbf{b}_1 \cdot
      |       \mathbf{v}_3}{|\mathbf{b}_1|^2}\mathbf{b}_1.
      |   \end{equation}
      
 Then $\\{\mathbf{b}\_1, \mathbf{b}\_2, \mathbf{b}\_3\\}$ has the same span as $\\{\mathbf{v}\_1, \mathbf{v}\_2, \mathbf{v}\_3\\}$ and is pairwise orthogonal. We may continue this procedure (project each new $\mathbf{v}\_i$ onto each of the preceding $\mathbf{b}$'s and subtract off all of these projections) until we reach the end of the list, thereby obtaining an orthogonal basis of $V$. 

 

::: .theorem
**Theorem**  
Suppose $V\subset \mathbb{R}^n$ is a vector space. Then every vector $\mathbf{u} \in \mathbb{R}^n$ can be written as the sum of a vector in $V$ and a vector in $V^\perp$. 
:::

 

*Proof*. Consider an orthogonal basis $\\{\mathbf{v}\_1, \ldots, \mathbf{v}\_k\\}$ of $V$, and define 

    p
      | \begin{equation}
      |     \mathbf{v} = \frac{\mathbf{v}_1 \cdot
      |       \mathbf{u}}{|\mathbf{v}_1|^2}\mathbf{v}_1 + \cdots +
      |     \frac{\mathbf{v}_k \cdot \mathbf{u}}{|\mathbf{v}_k|^2}\mathbf{v}_k
      |   \end{equation}
      
 Then $\mathbf{v}$ is in $V$ and $\mathbf{u} - \mathbf{v}$ is perpendicular to all of the $\mathbf{v}\_i$'s and therefore to every vector in $V$. 

 

::: .exercise
**Exercise**  
Suppose that $V$ is a $d$-dimensional vector space in $\mathbb{R}^n$. Show that there is a basis of $\mathbb{R}^n$ whose first $d$ vectors form a basis for $V$ and whose last $n-d$ vectors form a basis for $V^\perp$. 
:::

 

*Solution*. Suppose that $\\{\mathbf{v}\_{1},\mathbf{v}\_{2},\ldots,\mathbf{v}\_{d}\\}$ is a basis for $V$ and $\\{\mathbf{w}\_{1},\mathbf{w}\_{2},\ldots,\mathbf{w}\_{e}\\}$ is a basis for $W = V^\perp$. We claim that 

    p
      | \begin{equation}  
      |     \{\mathbf{v}_{1},\mathbf{v}_{2},\ldots,\mathbf{v}_{d},
      |     \mathbf{w}_{1},\mathbf{w}_{2},\ldots,\mathbf{w}_{e} \}
      |   \end{equation}
      
 is a basis for $\mathbb{R}^n$. First, it's linearly independent because no vector is in the span of the preceding vectors: (1) the $\mathbf{v}\_i$'s are linearly independent, so none of them is in the span of the preceding vectors. And (2) if, for some $i$, the vector $\mathbf{w}\_i$ is in the span of the preceding vectors in the list, then it can be written as $\mathbf{v} + \mathbf{w}$ for some vector $\mathbf{v}$ in $V$ and some vector $\mathbf{w}$ in the span of $\mathbf{w}\_1, \ldots, \mathbf{w}\_{i-1}$. Dotting both sides of the equation 

    p
      | \begin{equation}
      |     \mathbf{v} + \mathbf{w} = \mathbf{w}_i
      |   \end{equation}
      
 by $\mathbf{v}$, we find that $|\mathbf{v}|^2 = 0$, which implies that $\mathbf{v} = \boldsymbol{0}$. Thus $\mathbf{w} = \mathbf{w}\_i$, which is not compatible with the fact that the $\mathbf{w}\_i$'s form a basis. Therefore, we may conclude that the <a name=eq:basis></a> is linearly independent. 

 Finally, the list <a name=eq:basis></a> spans $\mathbb{R}^n$ since every vector in $\mathbb{R}^n$ can be written as a sum of a vector in $V$ and a vector in $V^\perp$(Theorem <a name=th:v-and-vperp></a>). 

 

 

 Suppose we can write a given transformation $T$ as a composition involving (i) a single transformation $\Lambda$ which scales space along the coordinate axes, and (ii) some other transformations which preserve distances and angles---like rotations and reflections in $\mathbb{R}^2$ or $\mathbb{R}^3$. Such a decomposition of $T$ would be useful because it isolates the space-distorting behavior of $T$ in the simple transformation $\Lambda$. In preparation for developing such a decomposition, let's study transformations which are distance-preserving and angle-preserving. 

 A transformation $x\mapsto U\mathbf{x}$ from $\mathbb{R}^n$ to $\mathbb{R}^n$ is distance-preserving if the norm of $\mathbf{x}$ is the same as the norm of $U\mathbf{x}$ for all $\mathbf{x} \in
\mathbb{R}^n$. Using dot products, we can write the distance-preserving condition as 

    p
      | \begin{equation}
      |   \mathbf{x} \cdot \mathbf{x} = (U\mathbf{x}) \cdot (U\mathbf{x})
      | \end{equation}
      
 If the transformation preserves angles as well as distances, then $(U\mathbf{x}) \cdot (U\mathbf{y})$ must also be equal to $\mathbf{x} \cdot \mathbf{y}$ for all $\mathbf{x}$ and $\mathbf{y}$ in $\mathbb{R}^n$. Rewriting this equation using transposes, we see that we want 

    p
      | \begin{equation}
      |   \mathbf{x}' \mathbf{y} = \mathbf{x}' U'
      |   U\mathbf{y}
      | \end{equation}
      
 for all $\mathbf{x}$ and $\mathbf{y}$ in $\mathbb{R}^n$. This identity only holds if $U' U$ is equal to the identity matrix. This leads us to the following definition. 

::: .definition
**Definition** (Orthogonal matrix)  
A square matrix $U$ is **orthogonal** if $U' U$ is equal to the identity matrix. 
:::

 

 Equivalently, we can say that a square matrix is orthogonal if and only if its columns are *orthonormal*, which means that they are orthogonal and have unit norm. If a non-square matrix $U$ satisfies $U' U = I$, then we refer to $U$ as a *matrix with orthonormal columns*. 

::: .exercise
**Exercise**  
(i) Explain why, for an $m \times n$ matrix $U$ with orthonormal columns, we must have $m \geq n$. (ii) Explain why the rank of $U$ is $n$. 
:::

 

*Solution*.  
* We first recall that the number of linearly independent columns in $U$ cannot be greater than $m$ because the range of $U$ is a subspace of $\mathbb{R}^m.$ Now, by definition, the $n$ columns of $U$ are orthogonal and non-zero. We have seen in Exercise <a name=exer:orthog-lin-ind></a> that these columns must be linearly independent so $n \leq m.$ 


* The rank of $U$ is equal to the number of linearly independent columns in $U,$ which is $n$ in this case. 



 

 If $U$ is an $m\times n$ matrix with orthonormal columns and if $n &lt; m$, then $U U'$ is an $m\times m$ matrix of rank $n$ and therefore cannot be the identity matrix. In fact, $U U'$ is a projection matrix: 

::: .exercise
**Exercise**  
Show that if $U$ is an $m \times n$ matrix with orthonormal columns, then $UU'$ is the matrix of the transformation which projects each vector in $\mathbb{R}^m$ onto the $n$-dimensional subspace of $\mathbb{R}^m$ spanned by the columns of $U$. 
:::

*Solution*. As we saw in Section <a name=sec:orthmat></a>, the transformation which maps a vector $\mathbf{w}$ onto the span of the columns $\mathbf{u}\_1, \ldots \mathbf{u}\_n$ of $U$ is given by 

    p
      | \begin{equation}
      |     T(\mathbf{w}) =
      |     \frac{\mathbf{u}_{1}\cdot\mathbf{w}}{|\mathbf{u}_{1}|^2}\mathbf{u}_{1}
      |     +\frac{\mathbf{u}_{2}\cdot\mathbf{w}}{|\mathbf{u}_{2}|^2}\mathbf{u}_{2}+
      |     \cdots+\frac{\mathbf{u}_{n}\cdot\mathbf{w}}{|\mathbf{u}_{n}|^2}\mathbf{u}_{n}.
      |   \end{equation}
      
 All of the denominators in this formula are equal to 1 because the columns of $U$ are unit vectors. So 

    p
      | \begin{equation}  
      |     T(\mathbf{w}) = \mathbf{u}_1(\mathbf{u}_1\cdot \mathbf{w})+ \cdots +
      |     \mathbf{u}_n(\mathbf{u}_n\cdot \mathbf{w}).
      |   \end{equation}
      
 The vector whose components are the expressions in parentheses, namely $[\mathbf{u}\_1\cdot \mathbf{w}, \ldots, \mathbf{u}\_n\cdot
  \mathbf{w}]$, is equal to $U' \mathbf{w}$, by the definition of the matrix-vector product. Applying that definition a second time (interpreting <a name=eq:proj></a> as a linear combination of the $\mathbf{u}\_i$'s with weights given by the parenthetical dot products), we find that $T(\mathbf{w}) = UU' \mathbf{w}$. 


::: .exercise
**Exercise**  
Let $\mathbf{v}$ be a vector in $\mathbb{R}^n$, and consider the linear transformation $T: \mathbb{R}^{n} \to \mathbb{R}$ defined as $T(\mathbf{x}) = \mathbf{v} \cdot \mathbf{x}$. What is the rank of $T$? Geometrically describe the null space of $T$. 
:::

 

*Solution*. The rank of $T$ is $1$ if $\mathbf{v} \neq \mathbf{0},$ otherwise the rank is $0.$ Geometrically, the null space of $T$ is the set of vectors in $\mathbb{R}^n$ that are orthogonal to $\mathbf{v}.$


---
 
> id: eigenanalysis
## Eigenanalysis



 In this section we will see how we can better understand a linear transformation by breaking it down into simpler linear transformations. 

 Let $T$ be a linear transformation from $\mathbb{R}^n$ to $\mathbb{R}^n$. Suppose that $\mathcal{B}$ is a basis of $\mathbb{R}^n$, that $V$ is the span of some of the vectors in $\mathcal{B}$, and that $W$ is the span of the remaining vectors in $\mathcal{B}$. Then any vector in $\mathbb{R}^n$ can be written as the sum of a vector $\mathbf{v}$ in $V$ and a vector $\mathbf{w}$ in $W$. Since $T(\mathbf{v} + \mathbf{w}) = T(\mathbf{v}) + T(\mathbf{w})$, we can see how $T$ behaves on all of $\mathbb{R}^n$ if we know how it behaves on $V$ and on $W$. This decomposition is particularly helpful if $V$ and $W$ are chosen so that $T$ behaves in a simple way on $V$ and on $W$. 

 Given such a decomposition of $\mathbb{R}^n$ into the vector spaces $V$ and $W$, we can apply the same idea to split $V$ and $W$ into lower-dimensional vector spaces and repeat until no more splits are possible. The most optimistic outcome of this procedure would be that we get all the way down to $n$ one-dimensional subspaces and that $T$ acts on each of these subspaces by simply scaling each vector in that subspace by some factor. In other words, we would like to find $n$ vectors $\mathbf{v}$ for which $T(\mathbf{v})$ is a scalar multiple of $\mathbf{v}$. This leads us to the following definition. 

::: .definition
**Definition**  
An eigenvector $\mathbf{v}$ of an $n\times n$ matrix $A$ is a *nonzero* vector with the property that $A\mathbf{v} = \lambda \mathbf{v}$ for some $\lambda \in \mathbb{R}$(in other words, $A$ maps $\mathbf{v}$ to a vector which is either zero or parallel to $\mathbf{v}$). We call $\lambda$ an **eigenvalue** of $A$, and we call the eigenvector together with its eigenvalue an **eigenpair**. 
:::

 

::: .example
**Example**  
Every nonzero vector is an eigenvector (with eigenvalue $1$) of the identity matrix. 
:::

 

::: .exercise
**Exercise**  
Find a matrix with eigenpairs $([1,0],2)$ and $([1,1],3)$. Sketch the images of some gridlines under multiplication by this matrix to show how it scales space along the lines through its eigenvectors. 
:::

 

*Solution*. Writing out the equations implied by the given eigenpair relations, we see that the first implies that the first column of the matrix is $[2,0]$, and the second (together with the first) implies that the second column of the matrix is $[1,3]$. 

 The following gridline images show how the transformation distorts space. Equally spaced points which are separated in the $[1,0]$-direction get spread out by a factor of 2, while the diagonal line gets stretched out by a factor of 3. Since $3 &gt; 2$, this introduces a bottom-left-to-top-right tilt for the images of the vertical gridlines. 

    center: img(src="images/gridlines.svg")

::: .exercise
**Exercise**  
In general, if $\mathbf{v}\_1, \dots, \mathbf{v}\_n$ are eigenvectors of $A$ with the same eigenvalue $\lambda$ and $\mathbf{v} = c\_1\mathbf{v}\_1 + \cdots + c\_n\mathbf{v}\_n$ for some weights $c\_1, \dots, c\_n$ such that $c\_i \neq 0$ for at least one $i \in \\{1, \dots, n\\},$ then $\mathbf{v}$ is also an eigenvector of $A$ with eigenvalue $\lambda$ because 

    p
      | \begin{align*}
      | 		A\mathbf{v} &= A(c_1\mathbf{v}_1 + \cdots + c_n\mathbf{v}_n) \\\\
      | 		&= c_1A\mathbf{v}_1 + \cdots + c_nA\mathbf{v}_n \\\\
      | 		&= c_1 \lambda \mathbf{v}_1 + \cdots c_n \lambda \mathbf{v}_n \\\\
      | 		&= \lambda (c_1\mathbf{v}_1 + \cdots c_n\mathbf{v}_n) \\\\
      | 		&= \lambda \mathbf{v}.
      | 	\end{align*}
      
 Let $A$ be a $4 \times 4$ matrix, with eigenvectors $\begin{bmatrix} 1
  \\ 1 \\ 0 \\ 0 \end{bmatrix}$ and $\begin{bmatrix} 0 \\ 0 \\ 2 \\
  -3\end{bmatrix}$, both with eigenvalue $3$. Find $A\left(\begin{bmatrix}
5 \\ 5 \\ 8 \\ -12
\end{bmatrix}\right)$. 

:::

 

*Solution*. Since $
\begin{bmatrix}
5 \\\\\\\\
5 \\\\\\\\
8 \\\\\\\\
-12
\end{bmatrix} = 5
\begin{bmatrix}
1 \\\\\\\\
1 \\\\\\\\
0 \\\\\\\\
0
\end{bmatrix} + 4
\begin{bmatrix}
0 \\\\\\\\
0 \\\\\\\\
2 \\\\\\\\
-3
\end{bmatrix},
$ we find that $
A\left( \begin{bmatrix}
5 \\\\\\\\
5 \\\\\\\\
8 \\\\\\\\
-12
\end{bmatrix}\right) = 3
\begin{bmatrix}
5 \\\\\\\\
5 \\\\\\\\
8 \\\\\\\\
-12
\end{bmatrix} =
\begin{bmatrix}
15 \\\\\\\\
15 \\\\\\\\
24 \\\\\\\\
-36
\end{bmatrix}.
$

 

::: .exercise
**Exercise**  


Let $V \subset \mathbb{R}^n$ be a subspace spanned by the eigenvectors of a matrix $A.$ If $\mathbf{v} \in V,$ which of the following are necessarily true? 

    x-picker.list
      .item  $A\mathbf{v} \in V.$
      .item  $A\mathbf{v}$ is orthogonal to every vector in $V.$
      .item  $A\mathbf{v}$ and $\mathbf{v}$ are always linearly dependent. 


:::

 

*Solution*. Let $\mathbf{a}\_1, \dots, \mathbf{a}\_k$ be the eigenvectors of $A$ that span $V$ and let $\lambda\_1, \dots, \lambda\_k$ be the corresponding eigenvalues. Then $\mathbf{v} \in V$ admits a representation $\mathbf{v} = v\_1\mathbf{a}\_1 + \cdots + v\_k\mathbf{a}\_k.$ Since 

    p
      | \begin{align*}
      | 	A\mathbf{v} &=  v_1 A\mathbf{a}_1 + \cdots + v_k A \mathbf{a}_k \\\\
      | 	&=  v_1 \lambda_1 \mathbf{a}_1 + \cdots + v_k \lambda_k \mathbf{a}_k,
      | \end{align*}
      
 we see that $A\mathbf{v}$ is also in $V.$ This means (2) is not true in general. Option $(3)$ need not always hold. For instance, it fails to hold if $\mathbf{v} = \mathbf{a}\_1 + \mathbf{a}\_2$ and $\lambda\_1$ and $\lambda\_2$ are both non-zero and not equal. Therefore the only true statement is (1) $A\mathbf{v} \in V.$

 

::: .exercise
**Exercise**  
Suppose $A$ is a matrix with a $3$-eigenvector $\mathbf{v}$ and a $2$-eigenvector $\mathbf{w}$. Let $\mathbf{u = v+w}$. Explain why 

    p
      | \begin{equation}\lim_{n \to \infty}\frac{|A^{n} \mathbf{u}|}{|A^{n}\mathbf{v}|} = 1\end{equation}

:::

 

*Solution*. Let $n \geq 1$ be an integer. By definition, 

    p
      | \begin{align*}
      |     A^n\mathbf{u} &= A^n (\mathbf{v} + \mathbf{w}) \\\\
      |                   &= A^n \mathbf{v} + A^n \mathbf{w} \\\\
      |                   &= 3^n\mathbf{u} + 2^n \mathbf{w}.
      |   \end{align*}
      
 Now, we have seen in Exercise <a name=exer:dot-linear></a> that 

    p
      | \begin{equation}
      | 	|3^n\mathbf{u} + 2^n \mathbf{w}|^2
      |     = | 3^n\mathbf{v} |^2 +
      |     2 (3^n\mathbf{v}) \cdot (2^n\mathbf{w}) + |2^n\mathbf{w}|^2.
      |   \end{equation}
      
 Therefore, 

    p
      | \begin{align*}
      | 	\frac{|A^n\mathbf{u}|^2}{| A^n \mathbf{v}|^2} &= \frac{|3^n\mathbf{u} + 2^n \mathbf{w}|^2}{| A^n \mathbf{v}|^2} \\\\
      |                                                       &= \frac{| 3^n\mathbf{v} |^2 + 2 (3^n\mathbf{v}) \cdot (2^n\mathbf{w}) + |2^n\mathbf{w}|^2}{|3^n\mathbf{v} |^2} \\\\
      |                                                       & = \frac{3^{2n} |\mathbf{v}|^2 + 2 \left(3 \cdot 2\right)^n \mathbf{v} \cdot \mathbf{w} + 2^{2n} |\mathbf{w}|^2}{3^{2n}| \mathbf{v}|^2} \\\\
      |                                                       &= 1 + 2 \left(\frac{3 \cdot 2}{3^2}\right)^n \cdot \left(\frac{\mathbf{v} \cdot \mathbf{w}}{|\mathbf{v}|^2}\right) + \left(\frac{2}{3}\right)^{2n}  \cdot \left(\frac{| \mathbf{w} |^2}{|\mathbf{v}|^2}\right).
      |   \end{align*}
      
 Since $
  \lim\limits\_{n \to \infty} \left(\frac{3 \cdot 2}{3^2}\right)^n = \lim\limits\_{n \to \infty} \left(\frac{2}{3}\right)^{2n} = 0,
  $ we find that $\lim\limits\_{n \to \infty} \frac{|A^n\mathbf{u}|^2}{| A^n \mathbf{v}|^2} = 1.$ Now, 

    p
      | \begin{equation}
      |     \lim\limits_{n \to \infty} \sqrt{\frac{|A^n\mathbf{u}|^2}{| A^n \mathbf{v}|^2}} = \sqrt{\lim\limits_{n \to \infty}\frac{|A^n\mathbf{u}|^2}{| A^n \mathbf{v}|^2}}
      |   \end{equation}
      
 because $\sqrt{\cdot}$ is a continuous function. Therefore, 

    p
      | \begin{align*}
      |     \lim\limits_{n \to \infty} \frac{|A^n\mathbf{u}|}{| A^n \mathbf{v}|} &= \sqrt{\lim\limits_{n \to \infty}\frac{|A^n\mathbf{u}|^2}{| A^n \mathbf{v}|^2}} \\\\
      |                                                                              &= 1,
      |   \end{align*}
      
 as required. 

 

 If an $n\times n$ matrix $A$ has $n$ linearly independent eigenvectors, then we can think of the one-dimensional subspaces spanned by each of these vectors as (not necessarily orthogonal) axes along which $A$ acts by scaling. 

 In matrix terms, we can define $V$ to be the matrix with the eigenvectors of $A$ as columns. Then from the definition of an eigenpair, we have 

    p
      | \begin{equation}
      |   AV  = V \Lambda,
      | \end{equation}
      
 where $\Lambda$ is a matrix whose diagonal entries are the eigenvalues (in order corresponding to the columns of $V$) and whose other entries are zero. We conclude that $A = V \Lambda
V^{-1}$, where $\Lambda$ is a diagonal matrix, and we say that $A$ is **diagonalizable**. 

::: .exercise
**Exercise**  
Some matrices are not diagonalizable, because they correspond to geometric transformations that cannot be viewed as scaling along any set of axes. Use this geometric intuition to come up with a $2
  \times 2$ matrix which is not diagonalizable. 
:::

*Solution*. Rotation matrices in $\mathbb{R}^2$(except for 0 degree rotations and 180-degree rotations) are not diagonalizable. For example, the 90-degree rotation matrix 

    p
      | \begin{equation}
      |     A = \begin{bmatrix}
      |       0 & -1\\
      |       1 & 0
      |     \end{bmatrix}
      |   \end{equation}
      
 does not send any nonzero vector $\vec{v} \in \mathbb{R}^2$ to a multiple of itself. 

 

::: .exercise
**Exercise**  


 Suppose that we have diagonalized $A$ as $A = VDV^{-1}$. Using matrix multiplication, determine which of the following is equal to $A^{3}$. 
*  $V^{3}D^{3}V^{-3}$. 
*  $VD^{3}V^{-1}$. 
*  $V^{3}DV^{-3}$. 

 

 Let $B$ be another matrix, with $3$-eigenvector $\mathbf{v}\_1$ and $(-2)$-eigenvector $\mathbf{v}\_{2}$. Let $\mathbf{u} = 2\mathbf{v}\_{1} + \mathbf{v}\_{2}$. Which of the following is equal to $B^{n}(\mathbf{u})$? 
*  $2(3)^{n}\mathbf{v}\_1 + (-2)^{n}\mathbf{v}\_2$. 
*  $(2(3) - 1)^{n}\mathbf{u}$. 
*  $(2(3)^{n} - 1)\mathbf{u}$. 
* None of the above. 


:::

 

*Solution*. We have 

    p
      | \begin{equation}
      |     A^2 = VDV^{-1} VDV^{-1} = V D^2 V^{-1}
      |   \end{equation}
      
 because $V^{-1} V = I$ is the identity matrix. Similarly, $A^3 = V D^3 V^{-1}.$ 

 By linearity $B^n(\mathbf{u}) = 2B^n\mathbf{v}\_1 + B^n \mathbf{v}\_2.$ But $B^n(\mathbf{v}\_1) = 3^n\mathbf{v}\_1$ and $B^n(\mathbf{v}\_2) = (-2)^n\mathbf{v}\_2$ because $\mathbf{v}\_1$ and $\mathbf{v}\_2$ are eigenvectors of $B.$ Therefore $B^n(\mathbf{u}) = 2(3)^n\mathbf{v}\_1 + (-2)^n\mathbf{v}\_2.$

 
### Positive definiteness
 
A **positive definite** matrix $A$ is a symmetric matrix whose eigenvalues are all positive. A **positive semidefinite** matrix $A$ is a symmetric matrix whose eigenvalues are all nonnegative. Equivalently, a matrix $A$ is positive semidefinite if $\mathbf{x}' A \mathbf{x} \ge 0$ for all $\mathbf{x}$. 

*Negative definite* and *negative semidefinite* matrices are defined analogously. 

::: .exercise
**Exercise**  
(i) Is the sum of two positive definite matrices necessarily positive definite? 

(ii) Is the product of two positive definite matrices necessarily positive definite? 

:::

 

*Solution*. (i) If $A$ and $B$ are $ n \times n$ positive definite matrices, then $A + B$ is also positive definite because 

    p
      | \begin{align*}
      |       \mathbf{x}' (A + B) \mathbf{x} &= \mathbf{v}' (A\mathbf{x} + B\mathbf{x}) \\\\
      | &= \mathbf{x}' A\mathbf{x} + \mathbf{x}' B\mathbf{x}
      |     \end{align*}
 for any vector $\mathbf{x} \in \mathbb{R}^n.$ 

(ii) However, $AB$ need not be positive definite. Consider the $45$-degree counterclockwise rotation matrix $ A = \frac{\sqrt{2}}{2}
    \begin{bmatrix}
      1 & -1 \\\\\\\\
      1 & 1
    \end{bmatrix}
    $ in $\mathbb{R}^2.$ Then, for any $
    \mathbf{x} =
    \begin{bmatrix}
      x \\\\\\\\
      y
    \end{bmatrix} \in \mathbb{R}^2,
    $ we have 

    p
      | \begin{equation*}
      |       A\mathbf{x} = \frac{\sqrt{2}}{2}
      |                     \begin{bmatrix}
      |                       x - y \\\\\\\\
      |                       x + y
      |                     \end{bmatrix}.
      |     \end{equation*}
 Then $A$ is positive definite because 

    p
      | \begin{equation}
      |       \mathbf{x}' A\mathbf{x} = \frac{\sqrt{2}}{2}(x^2 - xy + yx + y^2)  = \frac{\sqrt{2}}{2} | \mathbf{x} |^2
      |     \end{equation}
 for all $\mathbf{x} \in \mathbb{R}^2.$ However, $
    A^2 = \frac{1}{2}
    \begin{bmatrix}
      0 & -2 \\\\\\\\
      2 & 0
    \end{bmatrix}
    $ is the $90$-degree anticlockwise rotation matrix, meaning $A^2\mathbf{x}$ is orthogonal to $\mathbf{x}$ for all $\mathbf{x} \in \mathbb{R}^2$ and thus $A^2$ cannot be positive definite. 

 

 If $A$ is an $m\times n$ matrix, then $A' A$ is its *Gram matrix*. The Gram matrix of $A$ is always positive semidefinite: 

::: .exercise
**Exercise**  
Let $X = A' A$ be a Gram matrix, and let $\mathbf{v}$ be a vector. Which of the following is equal to $\mathbf{v}' X\mathbf{v}$? 
*  $|A\mathbf{v}|^2$. 
*  $A^{2}\mathbf{v}$. 
*  $\mathbf{v}' A^2\mathbf{v}$. 

 Using your answer above, explain why a Gram matrix is always positive semidefinite, but not necessarily positive definite. 
:::

 

*Solution*. The correct answer is $(1)$ $| A\mathbf{v} |^2$ because 

    p
      | \begin{align*}
      |       | A\mathbf{v} |^2 &= (A\mathbf{v}) \cdot (A\mathbf{v}) \\\\
      |                           &= (A\mathbf{v})' A\mathbf{v} \\\\
      |                           &= \mathbf{v}' A' A\mathbf{v}.
      |     \end{align*}
      
 From this we see that the Gram matrix is positive semidefinite because $|A\mathbf{v}|^2 \geq 0.$ Since it is possible to have $A\mathbf{v} = \mathbf{0}$ even if $\mathbf{v} \neq \mathbf{0}$(for example when $A$ has linearly dependent columns), we see that the Gram matrix is not necessarily positive definite. 

 

::: .exercise
**Exercise**  
Explain why the rank of $A$ is equal to the rank of $A'
    A$. (Hint: consider the null spaces of $A$ and $A' A$) 
:::

 

*Solution*. If $A\mathbf{x} = \boldsymbol{0}$, then multiplying both sides by $A'$ gives $A' A \mathbf{x} =
    \boldsymbol{0}$. Therefore, the null space of $A$ is a subset of the null space of $A' A$. 

 Conversely, if $A' A \mathbf{x} = \boldsymbol{0}$, then we can multiply this equation on the left by $\mathbf{x}'$ to get 

    p
      | \begin{equation}
      |       \mathbf{x}' A' A \mathbf{x} = \boldsymbol{0},
      |     \end{equation}
      
 which in turn implies that $|A\mathbf{x}|^2 =
    \boldsymbol{0}$. A vector has zero norm only if it's the zero vector, so we conclude that $A\mathbf{x} = \boldsymbol{0}$. 

 Since $A$ and $A' A$ have the same null space dimension and have the same domain $(\mathbb{R}^n)$, they also have the same rank, by the rank-nullity theorem. 


 The eigenspace decomposition is even easier to understand if the eigenvectors happen to be orthogonal. It turns out that this happens exactly when the matrix is *symmetric*: 

::: .theorem
**Theorem** (Spectral Theorem)  
If $A$ is an $n\times n$ symmetric matrix, then $A$ is *orthogonally* diagonalizable, meaning that $A$ has $n$ eigenvectors which are pairwise orthogonal. 

 Conversely, every orthogonally diagonalizable matrix is symmetric. 
:::

 

 In other words, if $A$ is symmetric, then the one-dimensional subspaces along which $A$ is decomposed form a set of axes for $\mathbb{R}^n$ which are orthogonal. In matrix terms, we have 

    p
      | \begin{equation}
      |     A = V \Lambda V',
      |   \end{equation}
      
 for some orthogonal matrix $V$. 

::: .exercise
**Exercise**  
Given an invertible matrix $A$, we are often interested in solving a system of the form $A \mathbf{x} = \mathbf{b}$. Our knowledge of $\mathbf{b}$ is seldom perfect however, so it is important to consider what happens to the solution if we replace $\mathbf{b}$ with a slightly different vector $\widehat{\mathbf{b}}$. 

It is possible that a small change in $\mathbf{b}$ leads to a substantial change in the vector $\mathbf{x}=A^{-1}\mathbf{b}$. 
* Find an invertible $2\times 2$ matrix $A$ all of whose entries are between $-2$ and $2$ and a vector $\mathbf{b}$ with entries between $-2$ and $2$ and another vector $\widehat{\mathbf{b}}$ whose components are nearly equal to those of $\mathbf{b}$ for which $A^{-1}\mathbf{b}$ and $A^{-1}\widehat{\mathbf{b}}$ are not very close. 

To be concrete, let's say "nearly equal" means "having ratio between 0.99 and 1.01", and let's say that "not very close" means "having a difference whose norm is greater than the norm of either". Find the eigenvalues of your matrix $A$. 

:::

 

*Solution*. One simple way to do this is make $\mathbf{b}$ and $\widehat{\mathbf{b}}$ the columns of the matrix. For example, _{code.language-python}[1 1; 1 1.01]\[1,1]_ returns _{code.language-python}[1,0]_ while _{code.language-python}[1 1; 1 1.01]\[1,1.01]_ returns _{code.language-python}[0,1]_. 

The eigenvalues of this matrix are approximately 0.005 and 2.005. In particular, the ratio of the eigenvalues is very large. You will find that the ratio of eigenvalues for your matrix is also large, because a matrix $A$ with a modest maximum eigenvalue ratio is *backwards stable*, meaning that small changes in $\mathbf{b}$ do not lead to large changes in $A^{-1}\mathbf{b}$, 

 
