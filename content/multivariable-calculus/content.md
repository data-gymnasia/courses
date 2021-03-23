# Multivariable Calculus

> id: intro
> description: Review of multivariate differentiation, integration, and optimization, with applications to data science.
> color: "#679a34"
> next: intro-probability
> author: Samuel S. Watson

## Introduction

Calculus is the study of continuously varying functions. Specifically, we examine [[instantaneous|average|large]] rates of change (derivatives) and learn how to average (or total) the values of a function over a region (integration). In multivariable calculus, we generalize differentiation and integration ideas developed for functions defined on the number line $\mathbb{R}^1$ to the setting where our functions are defined on $\mathbb{R}^d$ for some $d \ge 1$.

[Continue](btn:next)

---
> id: step-1

The ideas of multivariable calculus are useful for data science in at least a couple of ways: (i) when we [model](gloss:model) data, the functions we use to gauge the goodness of a model typically depend on many model variables. We optimize these functions by thinking about how they increase or decrease under small perturbations of the variables. And (ii) we will mathematically represent the idea of *probability* using functions on $\mathbb{R}^d$, and in that context probabilities will be recovered by integrating these functions.

We will begin by studying sequences and series.

[Continue](btn:next)

---
> id: step-2

### Sequences and series

A **sequence** of real numbers $(x\_n)\_{n=1}^\infty = x\_1, x\_2, \ldots$ converges to a number $x \in \mathbb{R}$ if the distance from $x\_n$ to $x$ on the number line can be made as small as desired by choosing $n$ sufficiently large. In that case, we say that $x\_n \to x$ as $n\to\infty$, or $\lim\_{n\to\infty} x\_n = x$.

::: .example
**Example**  
The sequence $(-1)^n/n$ converges to 0 as $n\to\infty$, since the distance on the number line from 0 to $(-1)^n/n$ is $1/n$, and that distance may be made as small as desired by choosing $n$ large enough. For example, if you want $1/n$ to be less than $0.001$, all the values of $n$ larger than $1000$ will work.

    figure: img(src="images/sequence-converge.svg")

Convergence to zero is apparent visually if make a scatter plot of $a_n$ versus $n$, because the points are getting arbitrariy close to the horizontal axis as we move further to the right.

:::

[Continue](btn:next)

---
> id: step-3

### Squeeze theorem

If two sequences both converge to the same limit, then any sequence whose terms are sandwiched between the terms of those sequences also converges:

::: .theorem
**Theorem** (Squeeze theorem)  
If $a\_n \leq b\_n \leq c\_n$ for all $n\geq 1$ and if $\lim\_{n\to\infty} a\_n = \lim\_{n\to\infty} c\_n$, then the sequence $(b\_n)\_{n=1}^{\infty}$ converges, and its limiting value is equal to the common limiting value of $(a\_n)\_{n=1}^{\infty}$ and $(c\_n)\_{n=1}^{\infty}$.
:::

[Continue](btn:next)

---
> id: step-4

::: .exercise
**Exercise**  
Suppose that $|x\_n| \leq n^{-1/2}$ for all $n \geq 1$. Show that $x\_n \to 0$ as $n\to\infty$.
:::

    x-quill

---
> id: step-5

*Solution.* We have $-n^{-1/2} \leq x\_n \leq n^{-1/2}$ for all $n$, so we may apply the squeeze theorem to the sequences $-n^{-1/2}$ and $n^{-1/2}$ to conclude that $x\_n \to 0$ as $n\to\infty$.

[Continue](btn:next)

---
> id: step-6

### Series

A **series** $\sum\_{n=1}^\infty x\_n = x\_1 + x\_2 + x\_3 + \cdots$ converges if the sequence $(S\_n)\_{n=1}^\infty$ converges, where

``` latex
S_n = x_1 + x_2 + \cdots + x_n
```

is the $n\text{th}$ [*partial sum*](gloss:partial-sum). Roughly speaking, a series with positive terms converges if its terms converge to 0 fast enough. In particular, the terms must converge to zero:

::: .theorem
**Theorem** (Term test)  
If $a\_n$ does not converge to zero, then the series $\displaystyle{\sum\_{n=1}^\infty a\_n}$ does not converge.
:::

[Continue](btn:next)

---
> id: step-7

::: .exercise
**Exercise**  
Show that $\displaystyle{\sum\_{n=1}^\infty \frac{n}{n+1}}$ does not converge. Plot the partial sums using the code below to appreciate this fact visually. (You have to run the cell twice for the plot to show; the second time will be quick.)
:::

    pre(python-executable)
      | import matplotlib.pyplot as plt
      | import numpy as np
      | A = [n/(n+1) for n in range(1,1001)]
      | plt.scatter(range(1, 1001), np.cumsum(A))

    x-quill

---
> id: step-8

*Solution.* Since $n/(n+1)$ converges to 1 as $n\to\infty$, the sum of these terms does not converge to zero, by the term test. The graph of the sequence of partial sums shows how the partial sums increase (approximately linearly) without bound, illustrating the series' lack of convergence to a finite value.

[Continue](btn:next)

---
> id: step-9

Another valid statement suggested by the "terms go to 0 fast enough" intuition is that convergence of one series implies convergence of any other series whose terms go to 0 at least as fast:

::: .theorem
**Theorem** (Comparison test)  
If $\sum\_{n=1}^\infty b\_n$ converges and if $|a\_n| \leq b\_n$ for all $n$, then $\sum\_{n=1}^\infty a\_n$ converges.

Conversely, if $\sum\_{n=1}^\infty b\_n$ does not converge and $0 \leq b\_n \leq
a\_n$, then $\Sigma\_{n=1}^\infty a\_n$ also does not converge.
:::

[Continue](btn:next)

---
> id: step-10

The comparison test works well in conjunction with a list of basic series whose convergence is known.

::: .theorem
**Theorem**  

* The series $\sum\_{n=1}^\infty n^p$ converges if and only if $p < -1$.
* The series $\sum\_{n=1}^\infty a^n$ converges if and only if $-1 < a < 1$.

:::

::: .exercise
**Exercise**  
Show that the series $\sum\_{n=1}^\infty \frac{1}{n^2 + n}$ converges.
:::

    x-quill

---
> id: step-11

*Solution.* We know that $\frac{1}{n^2 + n} < \frac{1}{n^2}$ and that $\sum\_{n=1}^\infty \frac{1}{n^2}$ converges. Therefore, the comparison test implies that $\frac{1}{n^2 + n}$ converges.

[Continue](btn:next)

---
> id: step-12

::: .exercise
**Exercise**  
Numerically examine the statement that $\sum\_{n=1}^\infty \frac{1}{n^2}$ converges to $\frac{\pi^2}{6}$.
:::

    pre(python-executable)
      | import numpy as np

    x-quill

---
> id: step-13

*Solution.* The expression

    pre(python-executable)
      | sum(1/n**2 for n in range(1,1001)) - np.pi**2/6

<p></p>

returns _{code.language-python}-0.0009995001666649461_, while

    pre(python-executable)
      | import numpy as np
      | sum(1/n**2 for n in range(1,10_000_001)) - np.pi**2/6

evaluates to _{code.language-python}-9.999994563525405e-7_. This is consistent with the proposition that $\sum\_{n=1}^N \frac{1}{n^2}$ gets arbitrarily close to $\pi^2/6$ for large enough $N$.

---

> id: taylor-series
## Taylor Series

We can define a polynomial which approximates a smooth function in the vicinity of a point with the following idea: *match as many derivatives as possible*.

The utility of this simple idea emerges from the convenient simplicity of polynomials and the fact that a wide class of functions look pretty much like polynomials when you zoom in around a given point.

[Continue](btn:next)

---
> id: step-14

First, a bit of review on the exponential function $x\mapsto \exp(x)$: we define $\exp$ to be the function which maps 0 to 1 and which is everywhere equal to its own derivative. It follows (nontrivially) from this definition that $\exp(x) = \exp(1)^x$, so may define $\mathrm{e} = \exp(1)$ and write the exponential function as $x\mapsto \mathrm{e}^x$. The value of $\mathrm{e}$ is approximately 2.718.

[Continue](btn:next)

---
> id: step-15

::: .example
**Example**  
Find the quadratic polynomial $P\_2$ whose zeroth, first, and second derivatives at the origin match those of the exponential function.
:::

*Solution.* Since $P\_2$ is quadratic, we must have

``` latex
P_2(x) = a_0 + a_1x + a_2x^2
```

for some $a\_0, a\_1,$ and $a\_2$. To match the [[zeroth|first|second]] derivative, we check that $P\_2(0) = a\_0$ and $f(0) = 1$. So we must have $a\_0 =1$. Similarly, $P\_2'(0) = a\_1$, so if we want $P\_2'(0) = f'(0) = 1$, have to choose $a\_1  = 1$ as well.

---
> id: step-16

For $a\_2$, we calculate $P\_2''(x) = (a\_1 + 2a\_2x)' = 2a\_2$, so to get $P\_2''(0) = f''(0) = 1$, we have to let $a\_2 = \tfrac{1}{2}$. So

``` latex
P_2(x) = 1 + x + \tfrac{1}{2}x^2
```

is the best we can do. Looking at the figure, we set that $P\_2$ does indeed do a better job of 'hugging' the graph of $f$ near $x=0$ than the best linear approximation ($L(x) = 1 + x$) does.

    figure
      img(src="images/taylor.svg" width="300px")
      p.caption.md The best constant, linear, and quadratic approximations of $\exp(x) = \mathrm{e}^x$ near the origin

[Continue](btn:next)

---
> id: step-17

We can extend this idea to higher order polynomials, and we can even include terms for *all* powers of $x$, thereby obtaining an infinite series:

::: .definition
**Definition** (Taylor Series)  
The Taylor series, centered at $c$, of an infinitely differentiable function $f$ is defined to be

``` latex
f(c) + f'(c)(x-c) + \frac{f''(c)}{2!}(x-c)^2 +
\frac{f'''(c)}{3!}(x-c)^3 + \cdots
```

:::

[Continue](btn:next)

---
> id: step-18

::: .example
**Example**  
Find the Taylor series centered at the origin for the exponential function.
:::

*Solution.* We continue the pattern we discovered for the quadratic approximation of the exponential function at the origin: the $n$th derivative of $a\_0 + a\_1x + \cdots + a\_n x^n + \cdots$ is $n!a\_n$, while the $n$th derivative of the exponential function is $1$ at the origin. Therefore, $a\_n = 1/n!$, and we obtain the Taylor series

``` latex
1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots
```

It turns out that this series does in fact converge to $\mathrm{e}^x$, for all $x \in \mathbb{R}$.

[Continue](btn:next)

---
> id: step-19

### Taylor series properties

It turns out that if the Taylor series for a function converges, then it does so in an interval centered around $c$. Furthermore, inside the interval of convergence, it is valid to perform term-by-term operations with the Taylor series as though it were a polynomial:

* We can multiply or add Taylor series term-by-term.
* We can integrate or differentiate a Taylor series term-by-term.
* We can substitute one Taylor series into another to obtain a Taylor series for the composition.

::: .theorem
**Theorem**  
All the operations described above may be applied wherever all the series in question are convergent. In other words, $f$ and $g$ have Taylor series $P$ and $Q$ converging to $f$ and $g$ in some open interval, then the Taylor series for $fg$, $f+g$, $f'$, and $\int f$ converge in that interval and are given by $PQ$, $P+Q$, $P'$, and $\int P$, respectively. If $P$ has an infinite radius of convergence, then the Taylor series for $f\circ g$ is given by $P\circ Q$.
:::

[Continue](btn:next)

---
> id: step-20

The following example shows how convenient this theorem can be for finding Taylor series.

::: .example
**Example**  
Find the Taylor series for $f(x) = \cos x + x \mathrm{e}^{x^2}$ centered at $c = 0$.
:::

*Solution.* Taking many derivatives is going to be no fun, especially with that second term. What we can do, however, is just substitute $x^2$ into the Taylor series for the exponential function, multiply that by $x$, and add the Taylor series for cosine:

``` latex
&\left(1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots\right) + x\left(1 + x^2 +
\frac{(x^2)^2}{2!} + \frac{(x^2)^3}{3!} + \cdots\right) \\\ &=
1 + x - \frac{x^2}{2!} + x^3  + \frac{x^4}{4!}  + \frac{x^5}{2!} +
\cdots.
```

[Continue](btn:next)

---
> id: step-21

In summation notation, we could write this series as $\sum\_{n=0}^\infty a\_n x^n$ where $a\_n$ is equal to $(-1)^{n/2}/n!$ if $n$ is even and $1/((n-1)/2)!$ if $n$ is odd.

[Continue](btn:next)

---
> id: step-22

::: .exercise
**Exercise**  
Find the Taylor series for $1/(1-x)$ centered at the origin, and show that it converges to $1/(1-x)$ for all $-1 < x < 1$.

Use your result to find $x + 2x^2 + 3x^3 + 4x^4 + \cdots$. Hint: think about differentiation.
:::

    x-quill

---
> id: step-23

*Solution.* Calculating derivatives of $1/(1-x)$, we find that the Taylor series centered at the origin is $1 + x + x^2 + \cdots$. Furthermore, we know that

``` latex
\frac{1}{1-x} = 1 + x + x^2 + x^3 + \cdots,
```

for $-1 < x < 1$, by the formula for infinite geometric series.

We can use this result to find $\sum\_{k = 1}^\infty k x^k$ by differentiating both sides and multiplying both sides by $x$:

``` latex
\frac{1}{(1-x)^2} = 1 + 2x + 3x^2 + 4x^3 + \cdots
```

 We get

``` latex
\frac{x}{(1-x)^2} = x + 2x^2 + 3x^3 + 4x^4 + \cdots
```

[Continue](btn:next)

---
> id: step-24

::: .exercise
**Exercise**  
Show that $\lim\_{n\to\infty}(1+x/n)^n$ is equal to $\mathrm{e}^x$ by showing that $\lim\_{n\to\infty}\log (1+x/n)^n = x$.
:::

    x-quill

---
> id: step-25

*Solution.* Integrating the equation

``` latex
\frac{1}{1+x} = 1 - x + x^2 - x^3 + x^4 - \cdots
```

term by term, we find that

``` latex
\log(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots
```

Substituting gives

``` latex
n \log (1+x/n) = x - \frac{x}{2n} + \frac{x^3}{3n^2} - \cdots.
```

Each of the terms other than the [[first|second|third]] converges to 0, and we can take limits term-by-term since $x/n$ is inside of the interval of convergence for this series. Therefore, $\lim\_{n\to\infty}\log(1+x/n)^n = x$, and since the exponential function is continuous, this implies that $\lim\_{n\to\infty}(1+x/n)^n = \mathrm{e}^x$

---
> id: differentiation
## Differentiation

Differentiating a single-variable function involves answering the question *near a given point, how much does the value of the function change per unit change in the input*? In the higher-dimensional setting, the question must be made more specific, since the change in output depends not only on how much the input is changed but also on the [[direction|roll|yaw]] of the change in input.

---
> id: step-26

Consider, for example, the function $f(x,y)$ which returns the altitude of the point on earth with latitude $x$ and longitude $y$. If the point $(x,y)$ identifies a point on a sloping hillside, then there are some directions in which $f$ increases, others in which $f$ decreases, and two directions in which $f$ neither increases nor decreases (these are the directions along the hill's *contour* lines, as you would see represented on a [[topographic|holographic]] map).

---
> id: step-27

### Partial derivatives

The simplest directions for inquiring about the instantaneous rate of change of $f$ are those along the axes: The **partial derivative** $\frac{\partial f}{\partial x}(x\_0,y\_0)$ of a function $f(x,y)$ at a point $(x\_0,y\_0)$ is the slope of the graph of $f$ in the $x$-direction at the point $(x\_0,y\_0)$. In other words, it's the slope of the intersection of the graph of $f$ with the plane $y=y\_0$. The partial derivative $\frac{\partial f}{\partial x}(x\_0,y\_0)$ may also be denoted $f\_x(x\_0,y\_0)$.

::: .exercise
**Exercise**  
Consider the function $f$ whose graph is shown. Determine the sign of $f\_x(1,1)$ ([[negative|positive|zero]]) and the sign of $f\_y(1,1)$ ([[positive|negative|zero]]).

    figure: img(src="images/partial-sign.svg")

:::

---
> id: step-28

*Solution.* If we increase $x$ a little while holding $y$ constant, then $f$ decreases. Therefore, $f\_x(1,1) < 0$. If we increase $y$ a little while holding $x$ constant, then $f$ increases. Therefore, $f\_y(1,1) > 0$.

Graphically, the partial derivative with respect to $x$ at a point is equal to the slope of the trace of the graph in the "$y =\text{constant}$" plane passing through that point. Similarly, the partial derivative with respect to $y$ at a point is equal to the slope of the trace of the graph in the "$x =\text{constant}$" plane passing through that point.

[Continue](btn:next)

---
> id: step-29

We can partial-differentiate multiple times, and it turns out that the order in which we apply these partial differentiation operations doesn't matter. This fact is called **Clairaut's theorem**.

::: .exercise
**Exercise**  
Consider the function $f(x,y) = \mathrm{e}^{xy}\sin(y)$. Show that differentiating with respect to $x$ and then with respect to $y$ gives the same result as differentiating with respect to $y$ and then with respect to $x$.
:::

    x-quill

---
> id: step-30

*Solution.* The partial derivative of $f$ with respect to $x$ is $y\mathrm{e}^{xy}\sin(y)$, and the derivative of that with respect to $y$ is $\mathrm{e}^{xy} (x y \sin(y) + \sin(y) + y \cos(y))$. The partial derivative of $f$ with respect to $y$ is $e^{xy} (x sin(y) + cos(y))$, and the derivative of that with respect to $x$ is $\mathrm{e}^{xy} (x y \sin(y) + \sin(y) + y \cos(y))$. Therefore, the conclusion of Clairaut's theorem is satisfied in this case.

[Continue](btn:next)

---
> id: step-31

### Differentiability

A single-variable function is differentiable at a point if and only if its graph looks increasingly like that of a non-vertical line when zoomed increasingly far in. In other words, $f$ is differentiable if and only if there's a linear function $L$ such that $\frac{f(x) - L(x)}{x-a}$ goes to 0 as $x \to a$.

[Continue](btn:next)

---
> id: step-32

Likewise, a function of two variables is said to be **differentiable** at a point if its graph looks like a plane when you zoom in sufficiently around the point; that is, $f$ is differentiable at $(a,b)$ if

``` latex
\lim_{(x,y) \to (a,b)}\frac{f(x,y) - c_0 - c_1(x-a) - c_2(y-b)}{|[x,y] - [a,b]|} = 0
```

for some real numbers $c\_0$, $c\_1$, and $c\_2$. If such a linear function $c\_0 + c\_1(x-a) + c\_2(y-b)$ exists, then its coefficients are necessarily $c\_0 = f(a,b)$, $c\_1 = f\_x(a,b)$, and $c\_2 = f\_y(a,b)$.

    figure
      img(src="images/tangent-plane.svg")
      p.caption.md The function $f$ is differentiable at the point shown, because its graph looks increasingly like the dark green plane shown as you zoom in around the point.

[Continue](btn:next)

---
> id: step-33

So, the equation of the plane tangent to the graph of a differentiable function $f$ at the point $(a,b,f(a,b))$ is given by

``` latex
z = f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b).
```

This equation says how $f$ behaves for values of $(x,y)$ very close to $(a,b)$: the output changes by the $x$-change $x-a$ times $f$'s sensitivity to changes in $x$ (namely $f\_x(a,b)$) *plus* the $y$-change times $f$'s sensitivity to changes in $y$ (namely $f\_y(a,b)$).

[Continue](btn:next)

---
> id: step-34

### Gradient

Once we know how a differentiable function $f: \mathbb{R}^d \to \mathbb{R}$ changes in the coordinate-axis directions, we can use the formula $z = f(a,b) + f\_x(a,b)(x-a) + f\_y(a,b)(y-b)$ to succinctly express how it changes in any direction: we form the **gradient** $\nabla f$ of $f$ by putting all of the partial derivatives of a function $f$ together into a vector. Then, for any unit vector $\mathbf{u}$, the rate of change of $f$ in the $\mathbf{u}$ direction is equal to $\nabla f\cdot \mathbf{u}$.

[Since](gloss:dotproductcosine) $\nabla f\cdot \mathbf{u} = |\nabla f| \cos \theta$, where $\theta$ is the angle between $\nabla f$ and $\mathbf{u}$, the direction of the gradient is the direction in which $f$ increases most rapidly. The direction opposite to the gradient is the direction of maximum decrease, and the directions orthogonal to these are the ones in which $f$ is constant.

[Continue](btn:next)

---
> id: step-35

::: .exercise
**Exercise**  
Suppose that $f:\mathbb{R}^2 \to \mathbb{R}$ is a differentiable function at the point $(a,b)\in \mathbb{R}^2$ and that its instantaneous rates of change in the directions $\mathbf{u}$ and $\mathbf{v}$ are known. Show that if $\mathbf{u}$ and $\mathbf{v}$ are not parallel, then it is always possible to infer $f$'s rates of change in the coordinate-axis directions.
:::

    x-quill

---
> id: step-36

*Solution.* The problem stipulates that we are given equations of the form

``` latex
u_1 f_x(a,b) + u_2 f_y(a,b) &= c_1  \\
v_1 f_x(a,b) + v_2 f_y(a,b) &= c_2
```

for some numbers $u\_1, u\_2, c\_1, v\_1, v\_2, c\_2$. This system may be written in matrix form as

``` latex
\begin{bmatrix} u_1 & u_2 \\\ v_1 & v_2 \end{bmatrix}
\begin{bmatrix} f_x(a,b) \\\ f_y(a,b) \end{bmatrix} =
\begin{bmatrix} c_1 \\\ c_2 \end{bmatrix}.
```

Since $\mathbf{u}$ and $\mathbf{v}$ are not parallel, they span $\mathbb{R}^2$. Therefore, the matrix $\begin{bmatrix} u\_1 & u\_2 \\\\\\\\ v\_1 & v\_2 \end{bmatrix}$ is invertible, and the solution of <a name=eq:matrix-partials></a> is $\begin{bmatrix} u\_1 & u\_2 \\\\\\\\ v\_1 & v\_2 \end{bmatrix}^{-1}\begin{bmatrix} c\_1 \\\\\\\\ c\_2 \end{bmatrix}$.

[Continue](btn:next)

---
> id: step-37

::: .exercise
**Exercise**  
Consider a differentiable function $f$ from $\mathbb{R}^2$ to $\mathbb{R}$ and a point where $f$ is differentiable with nonzero gradient. The number of directions in which $f$ increases maximally from that point is [[1|0|infinitely many]]. The number of directions in which $f$ decreases maximally from that point is [[1|0|infinitely many]]. The number of directions in which $f$ remains approximately constant is [[2|0|infinitely many|1]].
:::

---
> id: step-38

*Solution.* $f$ increases maximally in the direction of its gradient and decreases maximally in the opposite direction. It remains approximately constant in the two directions orthogonal to its gradient.

[Continue](btn:next)

---
> id: step-39

::: .exercise
**Exercise**  
Consider a differentiable function $f$ from $\mathbb{R}^3$ to $\mathbb{R}$ and a point where $f$ is differentiable with nonzero gradient. The number of directions in which $f$ increases maximally from that point is [[1|0|infinitely many]]. The number of directions in which $f$ decreases maximally from that point is [[1|0|infinitely many]]. The number of directions in which $f$ remains approximately constant is [[infinitely many|0|1]].
:::

---
> id: step-40

*Solution.* $f$ increases maximally in the direction of its gradient and decreases maximally in the opposite direction. It remains approximately constant in the plane of directions orthogonal to its gradient. Since a plane contains infinitely many directions, the number of directions in which $f$ remains approximately constant is infinite.

[Continue](btn:next)

---
> id: step-41

### Second-order differentiation

We can take the notion of a gradient, which measures the *linear* change of a function, up a degree. The **Hessian** of a function $f: \mathbb{R}^n \to \mathbb{R}$ is defined to be the matrix

``` latex
\mathbf{H}(\mathbf{x}) =
\begin{bmatrix}
  \frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1\,\partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_1\,\partial x_n} \\[2.2ex]
  \frac{\partial^2 f}{\partial x_2\,\partial x_1} & \frac{\partial^2 f}{\partial x_2^2} & \cdots & \frac{\partial^2 f}{\partial x_2\,\partial x_n} \\[2.2ex]
  \vdots & \vdots & \ddots & \vdots \\[2.2ex]
  \frac{\partial^2 f}{\partial x_n\,\partial x_1} & \frac{\partial^2 f}{\partial x_n\,\partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_n^2}
\end{bmatrix}
```


The best quadratic approximation to the graph of a twice-differentiable function $f:\mathbb{R}^n \to \mathbb{R}$ at the origin is

``` latex
Q(\mathbf{x}) = f(\mathbf{0}) + (\nabla
f(\mathbf{0}))'\mathbf{x}+
\frac{1}{2}\mathbf{x}'
\mathbf{H}(\mathbf{0})\mathbf{x}.
```

The same is true at points $\mathbf{a}$ other than the origin if we evaluate the gradient and Hessian at $\mathbf{a}$ instead of $\mathbf{0}$ and if we replace $\mathbf{x}$ with $\mathbf{x}-\mathbf{a}$.

    figure
      img(src="images/quadapprox.svg")
      p.caption.md $Q$ is the best quadratic approximation of $f$ at the origin.

[Continue](btn:next)

---
> id: step-42

::: .exercise
**Exercise**  
Suppose that $a,b,c,d,e$ and $f$ are real numbers and that $f(x,y) = a + bx + cy + dx^2 + exy + fy^2$. Show that the quadratic approximation of $f$ at the origin is equal to $f$.
:::

    x-quill

---
> id: step-43

*Solution.* The gradient of $f$ evaluated at the origin is $[b, c]$, so the linear approximation of $f$ is

``` latex
f(0,0) + f_x(0,0) x + f_y(0,0) = a + bx + cy.
```

The Hessian is $\begin{bmatrix} 2d & e \\\\\\ e & 2f \end{bmatrix}$, so the quadratic terms in the quadratic approximation are

``` latex
\frac{1}{2}(2dx^2 + exy + exy + 2ey^2) = dx^2 + exy + fy^2,
```

as desired.

---
> id: step-44

We can combine the ideas of quadratic approximation and [*diagonalization*](gloss:diagonalize) to gain sharp insight into the shape a function's graph at a point where the gradient is zero. Since the Hessian matrix $H$ is [[symmetric|diagonal]] by [Clairaut's theorem](gloss:clairaut), the [spectral theorem](gloss:spectraltheorem) implies that it is orthogonally diagonalizable.

With $VDV'$ as the diagonalization of $H$, the quadratic term in the quadratic approximation becomes

``` latex
\frac{1}{2} \mathbf{x}' V \Lambda V' \mathbf{x} =
  \frac{1}{2} (V'\mathbf{x})' \Lambda (V' \mathbf{x})
```

Since the components of $V'\mathbf{x}$ are the coordinates of $\mathbf{x}$ with respect to the basis given by the columns $\mathbf{v}\_1, \ldots, \mathbf{v}\_n$ of $V$, the quadratic term may be written as  

``` latex
\frac{1}{2} (\lambda_1\tilde{x}_1^2 + \lambda_2\tilde{x}_2^2 + \cdots + \lambda_n\tilde{x}_n^2),
```

where $[\tilde{x}\_1, \tilde{x}\_2, \ldots, \tilde{x}\_n]$ is the vector of coordinates of $[x\_1, x\_2, \ldots, x\_n]$ with respect to the basis given by the columns of $V$.

[Continue](btn:next)

---
> id: simpleparabola

Writing the quadratic approximation of $f$ in the form $\frac{1}{2}(\lambda\_1\tilde{x}\_1^2 + \lambda\_2\tilde{x}\_2^2 + \cdots + \lambda\_n\tilde{x}\_n^2)$ is powerful because it presents the changes in $f$ as a sum of $n$ separate changes, each of which is as simple as the parabola $y = ax^2$.

{.text-center} `a =`${a}{a|1|-5,5,0.1}

    x-chart(width=600 height=400 x-axis="-10,10,1" y-axis="-10,10,1")

If $\lambda\_1$ is negative, then the graph of $f$ is shaped like an up-turned parabola along the $\mathbf{v}\_1$ axis. If it's positive, then the graph of $f$ is shaped like a down-turned parabola along that axis.

::: .exercise
**Exercise**  
  Consider a point $(x\_1, \ldots x\_n)$ where $f$ has zero gradient and a Hessian with eigenvalues $\lambda\_1, \ldots, \lambda\_n$.

  If all of the eigenvalues are positive, then $f$ is [[smaller|larger]] at $(x\_1, \ldots x\_n)$ than at nearby points.

  If all of the eigenvalues are negative, then $f$ is [[larger|smaller]] at $(x\_1, \ldots x\_n)$ than at nearby points.

  If some eigenvalues are positive and some are negative, then $f$ increases as you move away from $(x\_1, \ldots x\_n)$ in some directions and [[decreases|remains constant]] in other directions.
:::

    .row.padded
      .grow
        figure
          img(src="images/up-parabola.svg")
          p.caption.md If every slice of the graph of $f$ is convex, then $f$ has a local minimum at the origin
      .grow
        figure
          img(src="images/down-parabola.svg")
          p.caption.md If every slice is concave, then $f$ has local maximum
      .grow
        figure
          img(src="images/saddle.svg")
          p.caption.md If there are both concave and convex slices, then $f$ has a saddle point

[Continue](btn:next)

---
> id: step-45

In addition to helping distinguish local minima, local maxima, and saddle points, the diagonalized Hessian can also help us recognize ravines in the graph of $f$. This idea arises in the context of numerical optimization methods for deep learning.

    figure
      img(src="images/noahs-ark.svg")
      p.caption The minimum of this function is in a long, narrow valley with steep sides.

::: .exercise
**Exercise**  
Suppose that $f:\mathbb{R}^2 \to \mathbb{R}$ has zero gradient at a given point, and suppose that its Hessian matrix at that point has eigenvalues $\lambda\_1$ and $\lambda\_2$. How can you recognize based on the values of $\lambda\_1$ and $\lambda\_2$ whether the graph of $f$ is ravine-shaped?
:::

    x-quill

---
> id: step-46

*Solution.* If $\lambda_1$ and $\lambda_2$ are both positive, with one close to zero and the other very large, then the graph of $f$ will be ravine-shaped. That's because the steep increase in one direction corresponds to one of the eigenvalues being very large, and the shallow increase in the orthogonal direction is indicated by the other eigenvalue being very small.

---
> id: optimization
## Optimization

Multivariable optimization problems are ubiquitous in applied math and data science, because a common path to achieving desirable results for real-world problems is to specify a value which captures some notion of badness and use optimization methods to make it as small as possible. Let's begin with a concrete example of this pattern.

### The line of best fit

Suppose we want to use a line to describe the relationship between the $x$-values and $y$-values for a collection of points in the $xy$-plane. Some lines clearly do a very poor job of aligning with the points, while others are better. Try adjusting the sliders below to see how the resulting graph changes.

{.text-center} `y =`${m}{m|1|-5,5,0.1} `x+`${b}{b|0|-5,5,0.1}

    x-chart(width=600 height=400 x-axis="-10,10,1" y-axis="-10,10,1")

To identify which line which does the "best" job, we need to quantify how well a given line fits the points. The most common way to do this is to measure the sum of the squares of the vertical distances from each point to the line. We seek to make that sum of squared distances as small as possible.

[Continue](btn:next)

---
> id: step-47

If the points are $(x\_1, y\_1), \ldots, (y\_n, y\_n)$, then the value we're trying to minimize is

``` latex
L(m,b) = (mx_1 + b - y_1)^2 + \cdots + (mx_n + b - y_n)^2.
```

The letter $L$ is used in this context in reference to the word *loss*, which is a synonym for *badness*.

[Continue](btn:next)

---
> id: step-48

Here's the key insight: at any point $(m,b)$ where $\nabla L(m,b)$ is a nonzero vector, there will be directions in which the pair $(m,b)$ may be perturbed to increase $L$'s value (specifically, any directions which make an [[acute|obtuse|right]] angle with $\nabla L(m,b)$) and perturbation directions which decrease the value of $L$ (specifically, any directions which make an [[obtuse|acute|right]] angle with $\nabla L(m,b)$). Therefore, at any point where $L$ has a minimum, we must have $\nabla L = 0$.

[Continue](btn:next)

---
> id: step-49

Taking the partial derivatives of $L$ and setting them equal to zero, we get the system of equations

``` latex
2x_1(mx_1 + b - y_1) + \cdots + 2x_n(mx_n + b - y_n) &= 0 \\\
2(mx_1 + b - y_1) + \cdots + 2(mx_n + b - y_n) &= 0
```

We have two equations and two unknowns ($m$ and $b$), so we can solve using standard techniques for systems of linear equations. For example, solving the second equation for $b$ gives

``` latex
b = \frac{1}{n}(y_1 + \cdots + y_n) - \frac{m}{n}(x_1 +\cdots + x_n),
```

and substituting into the first equation and solving for $m$ yields

``` latex
m = \frac{(x_1y_1 + \cdots + x_ny_n) - \frac{1}{n}(x_1 + \cdots + x_n)(y_1 + \cdots + y_n)}{(x_1^2 + \cdots + x_n^2) - \frac{1}{n}(x_1 + \cdots + x_n)^2}
```

We can substitute back into the equation for $b$ to find the only $(m,b)$ pair at which $\nabla L(m,b)$ is equal to the zero vector. If we trust our intuition that at least one minimizing $(m,b)$ pair must exist, then this is the one. In fact, this intuition is correct, and the formula above is indeed the formula for the line of best fit.

[Continue](btn:next)

---
> id: step-50

::: .exercise
**Exercise**  
Run the code below to confirm visually that the formula we derived above fits the sampled points reasonably well. (Note that you have to run the cell twice to get the plot to show.)
:::

    pre(python-executable)
      | import numpy as np
      | import matplotlib.pyplot as plt
      | n = 10
      | x = np.random.random_sample(n)
      | y = 2 * x + 3 + 0.2 * np.random.standard_normal(n)
      | m = ((np.sum(x*y) - np.sum(x)*np.sum(y)/n) /
      |      (np.sum(x**2) - np.sum(x)**2/n))
      | b = (np.sum(y) - m * np.sum(x))/n
      | yfit = m*x + b
      | plt.scatter(x,y)
      | plt.plot(x,yfit)

[Continue](btn:next)

---
> id: step-51

### Critical points

Let's consider the problem of optimizing a differentiable function $f$ from a subset $D$ of $\mathbb{R}^d$ to $\mathbb{R}$.

    figure
      img(src="images/lagrange.svg")
      p.caption.md The graph of the function $f(x,y) = -x^2 - y^2 + x + \frac{2}{3} y + \frac{23}{36}$ over the disk $(x-\frac{1}{2})^2 + (y-\frac{1}{2})^2 \leq \frac{1}{4}$.

As we observed in the previous section, if $\nabla f$ is nonzero at a point away from the boundary of $D$, then there are directions in which $f$ decreases as you move away from that point and other directions where it increases. Therefore, any minima or maxima of $f$ away from the boundary of $D$ must occur at points where the gradient of $f$ is zero. We call points where the gradient of $f$ is zero or where $f$ is non-differentiable **critical points** of $f$. If a function has a minimum or a maximum at a point, then either that point is a critical point, or it is on the [[boundary|exterior|interior]] of the domain of the function.

---
> id: step-52

Now let's consider the possibility that $f$ has a maximum or minimum on the boundary of its domain $D$. For simplicity, we'll assume that $D$ is a subset of the plane. Because of the [directional derivative formula](gloss:directional-derivative), if $\nabla f$ is nonzero, then there are 180 degrees worth of directions in which $(x,y)$ may be nudged to increase the value of $f(x,y)$. Therefore, if $f$ reaches its maximum value at a boundary point, then either the gradient of $f$ is zero at that point, or else all of the directions in which $f$ increases are excluded by the constraint that $(x,y)$ is in $D$. If $D$ has a tangent line at such a point, the latter possibility requires that the tangent line be [[perpendicular|parallel]] to the gradient of $f$.

::: figure

    img(src="images/lagrange-flat.svg")

{.caption} If the gradient of $f$ is not perpendicular to the tangent line at a boundary point, then there are permissible directions of increase and $f$ does not have a maximum there.
:::

---
> id: step-53

If the boundary of $D$ is specified as a level set of a function $g$, then being perpendicular to the tangent line is the same as being parallel to the gradient of $g$. Two vectors are parallel if one is a multiple of the other, so we arrive at the equation

``` latex
\nabla f = \lambda \nabla g,
```

for some $\lambda \in \mathbb{R}$. The variable $\lambda$ is called a *Lagrange multiplier*.

[Continue](btn:next)

---
> id: step-54

Although we framed the discussion assuming that the domain $D$ is a subset of the plane, the same analysis works in any dimension, and the resulting equation is still $\nabla f = \lambda \nabla g$.

[Continue](btn:next)

---
> id: step-55

The *extreme value theorem* confirms the intuition that a continuous function defined on a closed and bounded subset $D$ of $\mathbb{R}^n$ must have a maximum somewhere and a minimum somewhere. Let's combine all of these points into a single theorem statement:

::: .theorem
**Theorem** (Extreme value theorem and Lagrange multipliers)  
 Suppose that $f$ is a continuous function defined on a closed and bounded subset $D$ of $\mathbb{R}^n$. Then

* $f$ realizes an absolute maximum and absolute minimum on $D$ (the extreme value theorem)
* any point where $f$ realizes an extremum is either a critical point—meaning that $\nabla f = 0$ or $f$ is non-differentiable at that point—or at a point on the boundary.
* if $f$ realizes an extremum at a point on a portion of the boundary which is the level set of a differentiable function $g$ with non-vanishing gradient $\nabla g$, then either $f$ is non-differentiable at that point or the equation $\nabla f = \lambda \nabla g$ is satisfied at that point, for some $\lambda \in \mathbb{R}$.

:::

[Continue](btn:next)

---
> id: step-56

This theorem suggests a program for optimizing a function $f$ on a domain $D$ whose boundary is a level set of a function $g$.

* Identify any points where
  * $\nabla f = 0$,
  * $\nabla f$ is undefined,
  * the boundary of $D$ is not smooth, or
  * $\nabla f = \lambda \nabla g$ for some $\lambda \in \mathbb{R}$
* Calculate $f$ at all of these points and select the largest and smallest values.

::: .exercise
**Exercise**  
  Find the maximum and minimum values of $f(x,y) = x^4 + y^4 - 4xy$ on the rectangle $[0,3]\times [0,2]$.
:::

    x-quill

---
> id: step-57

*Solution.*   The system of equations $\frac{\partial}{\partial x} f = \frac{\partial}{\partial y} f = 0$ tells us that $y = x^3$ and $x = y^3$. Substituting, we find $x = x^9$, which can be rearranged and factored (by repeated applications of difference of squares) to get

``` latex
x(x-1)(x+1)(x^2 + 1)(x^4+1) = 0.   
```

The only value of $x$ in the interior of the rectangle which satisfies this equation is $x = 1$. Substituting into $y=x^3$, we find the critical point $(1,1)$ in the interior of the rectangle. The value of the function this point is $-2$.

Along the bottom edge of the rectangle, the value of the function at $(x,0)$ is $x^4$ which ranges monotonically from 0 to 81. Along the top edge, we have $f(x,2) = x^4 - 8x + 16$. This has a critical point at $x = \sqrt[3]{2}$.

Along the left edge, the function is equal to $y^4$, which has no interior critical points. And finally, along the right edge, we have $f(3,y) = y^4 - 12y + 81$, which has a critical point at $\sqrt[3]{3}$.

So all together, checking critical points and corners gives

``` latex
\begin{array}{c|c}
  (x,y) & f(x,y)  \\ \hline
  (1,1) & -2 \\\
  (0,0) & 0 \\\
  (3,0) & 81 \\\
  (0,2) & 16 \\\
  (3,2) & 73 \\\
  (3,\sqrt[3]{3}) & 81 - 9\sqrt[3]{3} \approx 68.02 \\\
  (\sqrt[3]{2},2) & 16 - 6\sqrt[3]{2} \approx 8.44
\end{array}
```

Therefore, the absolute maximum is $\boxed{81}$ and the absolute minimum is $\boxed{-2}$.

[Continue](btn:next)

---
> id: step-58

::: .exercise
**Exercise**  
Find the point closest to the origin in the region $3x + 2y + z \geq 6$.
:::

    x-quill

---
> id: step-59

*Solution.* We can rule out the possibility that the point nearest the origin is in the interior of the region, on geometric grounds. To find the boundary critical points, we set the *objective* function

``` latex
f(x,y,z) = x^2 + y^2 + z^2
```

and the *constraint* function $g(x,y,z) = 3x + 2y + z$ describing the boundary of the given set. Solving the Lagrange equation

``` latex
[2x, 2y, 2z] = \lambda [3, 2, 1],
```

together with the constraint equation $3x + 2y + z = 6$, we get $\frac{\lambda}{2}(3(3) + 2(2) + 1(1)) = 6$, which implies $\lambda = \frac{6}{7}$. So we get a single critical point $\left(\frac{9}{7},\frac{6}{7}, \frac{3}{7}\right)$, and since there's only one, the minimum must occur here.

[Continue](btn:next)

---
> id: step-60

We can also use the Lagrange multiplier idea in the reverse direction. Let's look at an example from statistics where Lagrange multipliers give rise to a meaningful insight.

[Continue](btn:next)

---
> id: step-61

### Lasso and ridge regression

Consider the problem of fitting a plane of the form $z = ax + by$ to a set of points $(x_1, y_1, z_1), \ldots, (x_n, y_n, z_n)$ in $\mathbb{R}^3$. As we did for the *line* of best fit above, we will look for the plane which minimizes the sum of squared distances in the $z$-direction from the points to the plane.

[Continue](btn:next)

---
> id: step-62

Sometimes this approach gives undesirable results because the resulting values for $a$ and $b$ are considered too large for a given application. If we want to force them to be smaller, we can add a term to our objective function which penalizes largeness of $a$ and $b$. We choose some positive value $\lambda$ and propose the objective function  

``` latex
(ax_1 + by_1 - z_1)^2 + \cdots + (ax_n + by_n - z_n)^2 + \lambda(a^2 + b^2)
```

This is called the *ridge* objective function. Alternatively, we could use

``` latex
(ax_1 + by_1 - z_1)^2 + \cdots + (ax_n + by_n - z_n)^2 + \lambda(|a| + |b|)
```

This is called the *lasso* objective function.

[Continue](btn:next)

---
> id: step-63

It turns out in practice that the lasso minimizer frequently has either $a$ or $b$ equal to zero, while the ridge minimizer almost never does. Zero coefficients can be helpful, because if $a = 0$ then we are expressing a simpler relationship between just the $y$-value and $z$-value of each point (and similarly if $b$ is zero instead). Being able to ignore some of the coordinates is especially helpful if we have hundreds of coordinates rather than just two, as is often the case in statistical applications.

::: .example
**Example**  
Use the method of Lagrange multipliers to explain why the lasso minimizer tends to have solutions on the coordinate axes in the $(a,b)$ plane, while the ridge minimizer does not.
:::

[Continue](btn:next)

---
> id: step-64

*Solution.* Let's define $f(a,b) = (ax\_1 + by\_1 - z\_1)^2 + \cdots + (ax\_n + by\_n - z\_n)^2$ and $g(a,b) = a^2 + b^2$. The function $f(a,b) + \lambda g(a,b)$ is minimized at a point where $\nabla f(a,b) + \lambda \nabla g(a,b) = 0$. In other words, the minimizer must be a point where $\nabla f$ and $\nabla g$ are [[parallel|perpendicular]] vectors.

---
> id: step-65

By the method of Lagrange multipliers, this is the same equation we get if consider the optimization problem of minimizing $f(a,b)$ subject to the constraint that $g(a,b) \leq c$, where $c$ is any constant. Therefore, the ridge minimizer will occur at a point where $f$ has a minimum on some set of the form $g(a,b) \leq c$. Since $a^2 + b^2 \leq c$ is a disk in the $ab$-plane, we would expect the typical solution to be at a point on the boundary of the circle where neither $a$ nor $b$ is zero.

---
> id: step-66

Applying the same analysis to the lasso minimizer, we get an optimization problem on the squared-shaped set $|a| + |b| \leq c$. Since the square has corners which always contribute candidate points for minimization of $f$ (since there is no tangent line at those points), it's reasonable to expect the lasso minimizer to occur at these points.

    .row.padded
      .grow
        figure
          img(src="images/ridge.svg")
          p.caption.md **Ridge**. The point of tangency is where $f(a,b)$ is minimized subject to the constraint $a^2 + b^2 \leq c$. This point is typically not on a coordinate axis.
      .grow
        figure
          img(src="images/lasso.svg")
          p.caption.md **Lasso**. The lowest level line which intersects the square does so at one of the square's corners.

### Exercises

::: .exercise
**Exercise**  
Many airlines require that the sum of the length, width and height of a checked baggage cannot exceed 62 inches. Find the dimensions of the rectangular baggage that has the greatest possible volume under this regulation.
:::

    x-quill

---
> id: step-67

*Solution.* The objective function is the volume formula for a box, namely $f(l,w,h) = lwh$. The constraint equation is $g(l,w,h) = lw + wh + hl = 62$. The Lagrange equation tells us that

``` latex
wh &= \lambda \\\
lh &= \lambda \\\
lw &= \lambda
```

Since we also have the equation $lw + wh + hl = 62$, we have four equations and four variables. Multiplying the three equations above, we get $(whl)^2=\lambda^3$, which means $whl = \lambda^{3/2}$. Dividing this equation by each of the original three equations gives $w = h = l = \lambda^{1/2}$. Substituting into the last equation, we find $w = h = l = 62/3$. Thus the maximum-volume luggage shape is a cube.

---

> id: matrix-differentiation
## Matrix differentiation

Just as elementary differentiation rules are helpful for optimizing single-variable functions, *matrix* differentiation rules are helpful for optimizing expressions written in matrix form. This technique is used often in statistics.

Suppose $\mathbf{f}$ is a function from $\mathbb{R}^n$ to $\mathbb{R}^m$. Writing $\mathbf{f}(\mathbf{x}) = \mathbf{f}(x\_1, \ldots, x\_n)$, we define the Jacobian matrix (or *derivative* matrix) to be

``` latex
\frac{\partial \mathbf{f}}{\partial \mathbf{x}} = \left[
  \begin{array}{cccc}
    \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \cdots & \frac{\partial f_1}{\partial x_n}  \\
    \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \cdots & \frac{\partial f_2}{\partial x_n}  \\
    \vdots & & \ddots & \vdots \\
    \frac{\partial f_m}{\partial x_1} & \frac{\partial f_m}{\partial x_2} & \cdots & \frac{\partial f_m}{\partial x_n}
  \end{array}\right]
```

Note that if $m=1$, then differentiating $f$ with respect to $\mathbf{x}$ is the same as taking the gradient of $f$.

With this definition, we obtain the following analogues to some basic single-variable differentiation results: if $A$ is a constant matrix, then

``` latex
\frac{\partial}{\partial \mathbf{x}} (A \mathbf{x}) &= A \\\
\frac{\partial}{\partial \mathbf{x}} (\mathbf{x}' A) &= A'
\\\
\frac{\partial}{\partial \mathbf{x}} (\mathbf{u}' \mathbf{v})
         &= \mathbf{u}'\frac{\partial \mathbf{v}}{\partial \mathbf{x}} + \mathbf{v}'\frac{\partial \mathbf{u}}{\partial \mathbf{x}}
```

The third of these equations is the [[product]] rule.

---
> id: step-68

The Hessian of a function $f:\mathbb{R}^n \to \mathbb{R}$ may be written in terms of the matrix differentiation operator as follows:

``` latex
\mathbf{H}(\mathbf{x}) = \frac{\partial}{\partial \mathbf{x}}
\left(\frac{\partial f}{\partial \mathbf{x}}\right)'.
```

Some authors define $\frac{\partial f}{\partial \mathbf{x}'}$ to be $\left(\frac{\partial f}{\partial \mathbf{x}}\right)'$, in which case the Hessian operator can be written as $\frac{\partial^2}{\partial \mathbf{x} \partial \mathbf{x}'}$.

::: .exercise
**Exercise**  
Let $f: \mathbb{R}^n \to \mathbb{R}$ be defined by $f(\mathbf{x}) = \mathbf{x}' A \mathbf{x}$ where $A$ is a symmetric matrix. Find $\frac{\partial f}{\partial \mathbf{x}}.$
:::

    x-quill

---
> id: step-69

*Solution.* We can apply the product rule to find that

``` latex
\frac{\partial f}{\partial \mathbf{x}} = \mathbf{x}'
\frac{\partial}{\partial \mathbf{x}}(A\mathbf{x}) +
(A\mathbf{x})' \frac{\partial \mathbf{x}}{\partial
  \mathbf{x}}
 = \mathbf{x}' A + \mathbf{x}' A =
 2\mathbf{x}' A.
```

[Continue](btn:next)

---
> id: step-70

::: .exercise
**Exercise**  
Suppose $A$ is an $m\times n$ matrix and $\mathbf{b} \in \mathbb{R}^m$. Use matrix differentiation to find the vector $\mathbf{x}$ which minimizes $|A \mathbf{x} - \mathbf{b}|^2$. Hint: begin by writing $|A \mathbf{x} - \mathbf{b}|^2$ as $(A \mathbf{x} - \mathbf{b})' (A \mathbf{x} - \mathbf{b})$. You may assume that the rank of $A$ is $n$.
:::

[Continue](btn:next)

---
> id: step-71

*Solution.* We write

``` latex
|A \mathbf{x} - \mathbf{b}|^2 &= (A \mathbf{x} -
                                \mathbf{b})' (A \mathbf{x} - \mathbf{b}) \\\
&= \mathbf{x}' A' A \mathbf{x} -
  \mathbf{b}' A \mathbf{x} + \mathbf{x}' A'
  \mathbf{b} + |\mathbf{b}|^2.
```

To minimize this function, we find its gradient

``` latex
\frac{\partial}{\partial \mathbf{x}}|A \mathbf{x} -
\mathbf{b}|^2 = 2\,\mathbf{x}' A' A -
\mathbf{b}' A + (A'\mathbf{b})' =
2\mathbf{x}' A' A- 2\mathbf{b}' A
```

and set it equal to $\boldsymbol{0}$ to get

``` latex
\mathbf{x}' = \mathbf{b}' A(A' A)^{-1}
\implies \mathbf{x} = (A' A)^{-1} A'
\mathbf{x}.
```

(We know that $A' A$ has an inverse matrix because its rank is equal to that of $A$, which we assumed was $m$.)

---
> id: chain-rule
## The chain rule

One way of describing the [chain rule](gloss:chain-rule) is to say that derivatives of compositions of differentiable functions may be obtained by [linearizing](gloss:linearize). If linear functions (functions of the form $x\mapsto mx + b$) are composed, then the slope of the composition is the product of the slopes of the functions being composed. Since differentiable functions are practically linear if you zoom in far enough, they behave the same way under composition.

The chain rule in multivariable calculus works similarly. If we compose a differentiable function $\mathbf{r}:[a,b]\to \mathbb{R}^2$ with a differentiable function $f: \mathbb{R}^2 \to \mathbb{R}^1$, we get a function whose derivative is

``` latex
(f \circ \mathbf{r})'(t)  = \frac{\partial f}{\partial \mathbf{x}}(\mathbf{r}(t))
\mathbf{r}'(t)
```

Note that the right-hand side can also be written as $(\nabla f)(\mathbf{r}(t)) \cdot \mathbf{r}'(t)$, since $\frac{\partial f}{\partial \mathbf{x}}(\mathbf{r}(t))$ is a row vector, and the product of a row vector and a column vector is the same as the dot product of the [[transpose|unit vector|inverse]] of the row vector and the column vector. We can explain this formula geometrically: the change that results from making a small move from $\mathbf{r}(t)$ to $\mathbf{r}(t) + \mathbf{r}'(t) \Delta t$ is the dot product of the gradient of $f$ and the small step $\mathbf{r}'(t) \Delta t$.

    figure
      img(src="images/chain-rule.svg")
      p.caption.md We visualize $\mathbf{r}$ by drawing the points $\mathbf{r}(t)$, which trace out a curve in the plane. We visualize $f$  only by showing the direction of its gradient at the point $\mathbf{r}(t)$. The change in $f$ from one point on the curve to another is the dot product of the change in position and the gradient.

[Continue](btn:next)

---
> id: step-77

::: .exercise
**Exercise**  
Suppose that $\frac{\partial f}{\partial x}(3,2) = 4$, that $\frac{\partial f}{\partial y}(3,2) = -2$, and that $x(t) =
  1 + 2t$ and $y(t) = 4 - 2t^2$. Find the derivative of the function $f(x(t),y(t))$ at the point $t = 1$.
:::

    x-quill

---
> id: step-78

*Solution.* The chain rule implies that the derivative of $f(x(t),y(t))$ is

``` latex
[f_x(x(t),y(t)), f_y(x(t),y(t))]\cdot [x'(t), y'(t)] = (4)(2) + (-2)(-4) = \boxed{16}.
```

[Continue](btn:next)

---
> id: step-79

::: .exercise
**Exercise**  
Find the derivative with respect to $t$ of the function $g(t) = t^t$ by writing the function as $f(x(t),y(t))$ where $f(x,y) = x^y$ and $x(t) = t$ and $y(t)=t$.
:::

    x-quill

---
> id: step-80

*Solution.* Let $f(x(t),y(t)) = x^y$ where $x(t) = t$ and $y(t) = t$.  We have that $\frac{\partial f}{\partial x} = yx^{y-1}$ and $\frac{\partial f}{\partial y} = x^{y} \ln{x}$.  Since both derivatives of $x$ and $y$ with respect to $t$ are 1, the chain rule implies that

``` latex
g'(t) = t\cdot t^{t-1} + t^t\ln{t} = t^t(1 + \ln{t}).
```


[Continue](btn:next)

::: .exercise
**Exercise**  
Suppose that $g(\mathbf{y}) = A\mathbf{x}$ for some matrix $A$, and suppose that $f$ is the componentwise squaring function (in other words, $f(\mathbf{y}) = [y\_1^2, y\_2^2, \ldots, y\_n^2]$). Find the derivative of $f \circ g$.

Note: you might find it convenient to express your answer using the function diag which maps a vector to a matrix with that vector along the diagonal.
:::

    x-quill

---
> id: step-81

*Solution.* The derivative matrix of $f$ is diagonal, since the derivative of $y_j^2$ with respect to $y_i$ is zero unless $i = j$. The diagonal entries are $2y_1, 2y_2, \ldots$. The derivative of $g$ is $A$, as we saw in the section on matrix differentiation. Therefore, the derivative of the composition is

``` latex
\left[
  \begin{array}{cccc} 2(A\mathbf{x})_1 & 0 & \cdots & 0 \\\
  0 & (2A\mathbf{x})_2 & \cdots & 0 \\\
  \vdots & & \ddots & \vdots \\\
  0 & 0 & \cdots & 2(A\mathbf{x})_n
  \end{array}
\right]A = 2\operatorname{diag}(A\mathbf{x})A.
```

We can check this exercise numerically:

    pre(python-executable)
      | import numpy as np
      | A = np.random.random_sample((5,5))
      | x = np.random.random_sample(5)
      | Δx = 1e-6 * np.random.random_sample(5)
      |
      | def f(y):
      |     "Componentwise square x"
      |     return y**2
      |
      | def g(x):
      |     "Multiply A by x"
      |     return A @ x
      |
      | derivative = 2 * np.diag(A @ x) @ A
      | np.allclose(f(g(x + Δx)) - f(g(x)), derivative @ Δx)

[Continue](btn:next)

---
> id: multivariable-integration
## Multivariable integration

Integrating a function is a way of totaling up its values. For example, if $f$ is a function from a region $D$ in $\mathbb{R}^n$ to $\mathbb{R}$ which represents the mass density of a solid occupying the region $D$, we can find the total mass of the solid as follows: (i) split the region $D$ into many tiny pieces, (ii) multiply the volume of each piece by the value of the function at some point on that piece, (iii) and add up the results. If we take the number of pieces to infinity and the piece size to zero, then this sum converges to the total mass of the solid.

We may apply this procedure to any function $f$ defined on $D$, and we call the result the integral of $f$ over $D$, denoted $\int\_D f$.

To find the integral of a function $f$ defined on a 2D region $D$, we set up a double iterated integral over $D$: the bounds for the outer integral are the smallest and largest possible values of $y$ for point in $D$, and the bounds for the inner integral are the smallest and largest values of $x$ for any point in a given *each* "$y$ = *constant*" *slice* of the region (assuming that each slice intersects the region in a line segment).

::: .exercise
**Exercise**  
Find the integral over the triangle $T$ with vertices $(0,0)$, $(2,0)$, and $(0,3)$ of the function $f(x,y) = x^2y$.
:::

    x-quill

---
> id: step-72

*Solution.* The least and greatest values of $y$ for any point in the region are 0 and 3, while the least and greatest values of $x$ for each given $y$-slice are 0 and $2 - \frac{2}{3}y$. Therefore, the integral is

``` latex
\int_0^3 \int_0^{2 - \frac{2}{3}y} x^2 y \, \mathrm{d} x \, \mathrm{d} y =
\frac{6}{5}.
```

[Continue](btn:next)

---
> id: step-73

### 3D integration

To set up an integral of a function over a 3D region (for the order $\mathrm{d} x \\, \mathrm{d}y \\, \mathrm{d}z$): the bounds for the outer integral are the smallest and largest values of $z$ for any point in the region of integration, then the bounds for the middle integral are the smallest and largest values of $y$ for any point in the region in each "$z$ = constant" plane, and the inner bounds are the smallest and largest values of $x$ for any point in the region in each "$(y,z)$ = constant" line.

::: .exercise
**Exercise**  
Integrate the function $f(x,y,z) = 1$ over the tetrahedron with vertices $(0,0,0)$, $(2,0,0)$, $(0,3,0)$, and $(0,0,4)$.
:::

    x-quill

---
> id: step-74

*Solution.*  The least and greatest values of $z$ are 0 and 4, so those are our outer limits (see the figure below). For a fixed value of $z$, the least and greatest values of $y$ for a point in $D$ are 0 and $3 - \tfrac{3}{4}z$, respectively. Finally, for fixed $y$ and $z$, the least and greatest values of $x$ for a point in $D$ are 0 and the point on the plane $6x + 4y + 3z = 12$ with the given values of $y$ and $z$. So we get

``` latex
\text{volume}(D) &= \int_{0}^{4}\int_{0}^{3-\frac{3}{4}z}\int_{0}^{2 - \frac{2}{3}y - \frac{1}{2}z} 1 \, \mathrm{d}x \, \mathrm{d}y \, \mathrm{d}z  \\\ &= \int_{0}^{4}\int_{0}^{3-\frac{3}{4}z} \left(2 - \frac{2}{3}y - \frac{1}{2}z \right) \, \mathrm{d}y \, \mathrm{d}z \\\
&= \int_{0}^{4} \frac{3}{16}(z-4)^2 \, \mathrm{d}z \\\
&= \boxed{4}.
```

    figure: img(src="images/tetrahedron.svg")

### Exercises

::: .exercise
**Exercise**  
Evaluate $\int_0^8 \int_{\sqrt[3]{y}}^2 e^{x^4} \, \mathrm{d} x \,\mathrm{d} y$ by writing it as an integral over a region in the plane and then integrating over the region with respect to the opposite order of integration.
:::

*Solution* Let's begin by drawing the region:

    figure
      img(src="images/reverse-region.svg")

We can see that this is the region under the graph of $y = x^3$ from $x = 0$ to $x = 2$. Thus we integrate as $x$ ranges from 0 to 2 and (for each fixed value of $x$) as $y$ ranges from 0 to $x^3$. We get

``` latex
\int^2_0 \int^{x^3}_0 e^{x^4}\,\mathrm{d} y\,\mathrm{d} x &= \int^2_0 \int^{x^3}_0 y
e^{x^4} \bigg\rvert_{y=0}^{y={x^3}}\,\mathrm{d} x \\\ &= \int^2_0 x^3e^{x^4} \,\mathrm{d} x = \frac{e^{x^4}}{4}\bigg\rvert_0^2 = \frac{e^{16} - 1}{4} \approx
2221527.
```

---
> id: step-75

::: .exercise
**Exercise**  
Consider the region $R$ between the parabolas $y=1-x^2$ and
$y=x^2-7$. Find $\iint_R xy \\, \mathrm{d} A$.

    figure: img(src="images/two-parabs.svg")
:::

    x-quill

---
> id: step-76

*Solution.* We see that the curves intersect at $x = -2$ and $x =
2$. So we get

``` latex
\int^2_{-2} \int^{1-x^2}_{x^2-7} xy \,\mathrm{d} y\,\mathrm{d} x &= \int^{2}_{-2} {\frac{xy^2}{2} \bigg\rvert_{x^2-7}^{1-x^2}} \,\mathrm{d} x \\\ &= \int^2_{-2} {\frac{x}{2}[(1 - 2x^2 +x^4)-(x^4 -14x^2 +49)]} \,\mathrm{d} x \\\
&= \int^2_{-2} {6x^3 - 24x} \,\mathrm{d} x \\\ &= \frac{3x^4}{2}-12x^2 \bigg\rvert^2_{-2} \\\ &= 0
```

[Continue](btn:next)

---
> id: custom-integration
## Custom integration

If we want to integrate over a region which doesn't split nicely along lines parallel to the coordinate axes, we can split the region up along other lines or curves.

For example, consider integrating $f(x,y) = y^2$ over the region bounded by the hyperbolas $xy = 1$ and $xy = 3$ and the lines $y = \frac{1}{2}x$ and $y = 2x$. This region naturally splits along hyperbolas of the form $xy = v$ where $v$ ranges from 1 to 3 and lines of the form $y/x = u$ where $u$ ranges from $\frac{1}{2}$ to 2. One convenient way of describing this family of curves and lines we're using to slice up the region is to write the region as the image of the rectangle $[\frac{1}{2},2] \times [1,3]$ under the inverse $\mathbf{T}$ of the transformation $(x,y) \mapsto (y/x,xy)$.

    figure: img(src="images/change-of-variables.svg")

[Continue](btn:next)

---
> id: step-82

To integrate over the region in the $xy$-plane using this subdivision, we need to find the area of each small piece. Since the areas of the rectangles in the $uv$-plane are easier to deal with, we find the areas of the piece in the $xy$-plane by [[multiplying|dividing]] the area of the corresponding rectangle by the area distortion factor of the transformation $\mathbf{T}$. This local area distortion factor, or *Jacobian determinant* is the absolute value of the determinant of the Jacobian matrix $\frac{\partial \mathbf{T}(\mathbf{x})}{\partial \mathbf{x}}$. This is because the area distortion factor of a linear transformation is the absolute value of its determinant, and a differentiable function is essentially [linear](gloss:linearize) when zoomed far enough in. Thus we arrive at the formula

``` latex
\iint_D f(x,y) \, \mathrm{d}x\, \mathrm{d}y = \iint_R f(\mathbf{T}(u,v)) \left|
\frac{\partial \mathbf{T}(u,v)}{\partial (u,v)} \right| \, \mathrm{d}u \, \mathrm{d}v,
```

where $\left|\frac{\partial \mathbf{T}(u,v)}{\partial (u,v)} \right|$ is notation for the absolute value of the determinant of the transformation $\frac{\partial \mathbf{T}(u,v)}{\partial (u,v)}$.

[Continue](btn:next)

---
> id: step-83

Since the area distortion factor of $\mathbf{T}$ is the [[reciprocal|negation]] of the area distortion factor of $\mathbf{T}^{-1}$, we can work out that $\left|\frac{\partial \mathbf{T}(u,v)}{\partial (u,v)} \right| = \left|\begin{array}{cc} x & y \\\\\\ 1/x & -y/x^2 \end{array} \right|^{-1} = (2y/x)^{-1} = \frac{1}{2v}$, which implies

``` latex
\iint_D f(x,y) \, \mathrm{d}x\, \mathrm{d}y = \int_{1}^{3}\int_{1/2}^{2}uv \left(\frac{1}{2v}\right) \mathrm{d} u \, \mathrm{d}v = \boxed{3}.
```

[Continue](btn:next)

---
> id: step-84

Let's apply the Jacobian transformation idea to a familiar problem: the area enclosed by a circle.

::: .exercise
**Exercise**  
Use the map $(u,v) \mapsto (u \cos v, u \sin v)$ from the rectangle $[0,1] \times [0,2\pi]$ to the unit disk, and calculate the Jacobian for this transformation. Use your result to integrate 1 over the unit disk and confirm that the result is equal to the area of the unit disk.
:::

    x-quill

---
> id: step-85

*Solution.* The Jacobian of the given transformation is

``` latex
\left|\begin{array}{cc}
        \cos v & \sin v \\
        -u\sin v & u \cos v
      \end{array}
    \right| = u(\cos^2 v + \sin^2 v) = u.
```

So the area of the disk is equal to

``` latex
\int_0^1 \int_0^{2\pi} u \, \mathrm{d}u \mathrm{d}v = \boxed{\pi}.
```

[Continue](btn:next)

---
> id: step-86

Congratulations! You have finished the Data Gymnasia multivariable calculus course.
