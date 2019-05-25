
# Multivariable Calculus

> id: intro
## Introduction

Calculus is the study of continuously varying functions. Specifically, we examine instantaneous rates of change and learn how to average (or total) the values of a function over a region. In multivariable calculus, we generalize differentiation and integration ideas developed for functions defined on $\mathbb{R}^1$ to the setting where our functions are defined on $\mathbb{R}^d$ for some $d > 1$. 

The ideas of multivariable calculus are useful for data science in at least a couple of ways: (i) the functions we use to gauge the goodness of a model typically depend on many model variables. To optimize these functions, we need to think about how they increase or decrease under small perturbations of the variables. And (ii) we will mathematically represent the idea of *probability* using functions on $\mathbb{R}^d$, and in that context probabilities will be recovered by integrating these functions. 

### Sequences and series

A **sequence** of real numbers $(x\_n)\_{n=1}^\infty = x\_1, x\_2, \ldots$ converges to a number $x \in \mathbb{R}$ if the distance from $x\_n$ to $x$ on the number line can be made as small as desired by choosing $n$ sufficiently large. In that case, we say that $x\_n \to x$ as $n\to\infty$, or $\lim\_{n\to\infty} x\_n = x$. 

::: .example
**Example**  
The sequence $(-1)^n/n$ converges to 0 as $n\to\infty$, since the distance on the number line from 0 to $(-1)^n/n$ is $1/n$, and that distance may be made as small as desired by choosing $n$ large enough. For example, if you want $1/n$ to be less than $0.001$, all the values of $n$ larger than $1000$ will work. 
         
    center: img(src="images/sequence-converge")

:::

 

::: .theorem
**Theorem** (Squeeze theorem)  
If $a\_n \leq b\_n \leq c\_n$ for all $n\geq 1$ and if $\lim\_{n\to\infty} a\_n = \lim\_{n\to\infty} c\_n$, then the sequence $(b\_n)\_{n=1}^{\infty}$ converges, and its limiting value is equal to the common limiting value of $(a\_n)\_{n=1}^{\infty}$ and $(c\_n)\_{n=1}^{\infty}$. 
:::

 

::: .exercise
**Exercise**  
Suppose that $|x\_n| \leq n^{-1/2}$ for all $n \geq 1$. Show that $x\_n \to 0$ as $n\to\infty$. 
:::

 

*Solution*. We have $-n^{-1/2} \leq x\_n \leq n^{-1/2}$ for all $n$, so we may apply the squeeze theorem to the sequences $-n^{-1/2}$ and $n^{-1/2}$ to conclude that $x\_n \to 0$ as $n\to\infty$. 

A **series** $\sum\_{n=1}^\infty x\_n = x\_1 + x\_2 + x\_3 + \cdots$ converges if the sequence $(S\_n)\_{n=1}^\infty$ converges, where 

    p
      | 
      | \begin{equation}
      |   S_n = x_1 + x_2 + \cdots + x_n
      | \end{equation}
      | 
      
is the $n\text{th}$*partial sum*. Roughly speaking, a series converges if its terms converge to 0 fast enough. In particular, the terms must converge to zero: 

::: .theorem
**Theorem** (Term test)  
If $a\_n$ does not converge to zero, then the series $\displaystyle{\sum\_{n=1}^\infty a\_n}$ does not converge. 
:::
 
Another valid statement suggested by the "terms go to 0 fast enough" intuition is that convergence of one series implies convergence of any other series whose terms go to 0 at least as fast: 

::: .theorem
**Theorem** (Comparison test)  
If $\sum\_{n=1}^\infty b\_n$ converges and if $|a\_n| \leq b\_n$ for all $n$, then $\sum\_{n=1}^\infty a\_n$ converges. 

Conversely, if $\sum\_{n=1}^\infty b\_n$ does not converge and $0 \leq b\_n <
a\_n$, then $\Sigma\_{n=1}^\infty a\_n$ also does not converge. 
:::

The comparison test works well in conjunction with a list of basic series which are known to converge or not. 

::: .theorem
**Theorem**  
 
* The series $\sum\_{n=1}^\infty n^p$ converges if and only if $p < -1$. 
* The series $\sum\_{n=1}^\infty a^n$ converges if and only if $-1 < a < 1$. 

:::


::: .example
**Example**  
Show that the series $\sum\_{n=1}^\infty \frac{1}{n^2 + n}$ converges. 
:::

*Solution*. We know that $\frac{1}{n^2 + n} < \frac{1}{n^2}$ and that $\sum\_{n=1}^\infty \frac{1}{n^2}$ converges. Therefore, the comparison test implies that $\frac{1}{n^2 + n}$ converges. 


::: .exercise
**Exercise**  
Numerically examine the statement that $\sum\_{n=1}^\infty \frac{1}{n^2}$ converges to $\frac{\pi^2}{6}$. 
:::

 

*Solution*. The expression _{code.language-python}sum(1/n^2 for n=1:10^3) - π^2/6_ evaluates to _{code.language-python}-0.0009995001666649461_, while 

    pre: code.language-python
      | 
      |     sum(1/n^2 for n=1:10^6) - π^2/6
      |   
      
evaluates to _{code.language-python}-9.999994563525405e-7_. This is consistent with the proposition that $\sum\_{n=1}^N \frac{1}{n^2}$ gets arbitrarily close to $\pi^2/6$ for large enough $N$. 

 
---

> id: taylor-series
## Taylor Series
 

We can define a polynomial which approximates a smooth function in the vicinity of a point with the following idea: *match as many derivatives as possible*. 

First, a bit of review on the exponential function $x\mapsto \exp(x)$: we define $\exp$ to be the function which maps 0 to 1 and which is everywhere equal to its own derivative. It follows (nontrivially) from this definition that $\exp(x) = \exp(1)^x$, so may define $\mathrm{e} = \exp(1)$ and write the exponential function as $x\mapsto \mathrm{e}^x$. The value of $\mathrm{e}$ is approximately 2.718. 

::: .example
**Example**  
Find the quadratic polynomial $P\_2$ whose zeroth, first, and second derivatives at the origin match those of the exponential function. 
:::

*Solution*.  Since $P\_2$ is quadratic, we must have 

    p
      | \begin{equation}
      |   P_2(x) = a_0 + a_1x + a_2x^2
      | \end{equation}
      | 
      
 for some $a\_0, a\_1,$ and $a\_2$. To match the zeroth derivative, we check that $P\_2(0) = a\_0$ and $f(0) = 1$. So we must have $a\_0 =1$. Similarly, $P\_2'(0) = a\_1$, so if we want $P\_2'(0) = f'(0) = 1$, have to choose $a\_1  = 1$ as well. 

 For $a\_2$, we calculate $P\_2''(x) = (a\_1 + 2a\_2x)' = 2a\_2$, so to get $P\_2''(0) = f''(0) = 1$, we have to let $a\_2 = \tfrac{1}{2}$. So 

    p
      | 
      | \begin{equation}
      |         P_2(x) = 1 + x + \tfrac{1}{2}x^2
      |       \end{equation}
      | 
      
 is the best we can do. Looking at the figure, we set that $P\_2$ does indeed do a better job of 'hugging' the graph of $f$ near $x=0$ than the best linear approximation ($L(x) = 1 + x$) does. 
 
    center: img(src="images/taylor" width=240)
    p.caption The best constant, linear, and quadratic approximations of $\exp(x) = \mathrm{e}^x$ near the origin 

 

 We can extend this idea to higher order polynomials, and we can even include terms for *all* powers of $x$, thereby obtaining an infinite series: 

::: .definition
**Definition** (Taylor Series)  
The Taylor series, centered at $c$, of an infinitely differentiable function $f$ is defined to be 

    p
      | \begin{equation}
      |       f(c) + f'(c)(x-c) + \frac{f''(c)}{2!}(x-c)^2 +
      |       \frac{f'''(c)}{3!}(x-c)^3 + \cdots
      |     \end{equation}
      | 

:::

 

::: .example
**Example**  
Find the Taylor series centered at the origin for the exponential function. 
:::

 

*Solution*. We continue the pattern we discovered for the quadratic approximation of the exponential function at the origin: the $n$ th derivative of $a\_0 + a\_1x + \cdots + a\_n x^n + \cdots$ is $n!a\_n$, while the $n$ th derivative of the exponential function is $1$ at the origin. Therefore, $a\_n = 1/n!$, and we obtain the Taylor series 

    p
      | \begin{equation}
      |       1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots
      |     \end{equation}
      | 
 It turns out that this series does in fact converge to $\mathrm{e}^x$, for all $x \in \mathbb{R}$. 


 If the Taylor series for a function converges, then it does so in an interval centered around $c$. Furthermore, inside the interval of convergence, it is valid to perform term-by-term operations with the Taylor series as though it were a polynomial: 
 
* We can multiply or add Taylor series term-by-term. 
* We can integrate or differentiate a Taylor series term-by-term. 
* We can substitute one Taylor series into another to obtain a Taylor series for the composition. 

::: .theorem
**Theorem**  
All the operations described above may be applied wherever all the series in question are convergent. In other words, $f$ and $g$ have Taylor series $P$ and $Q$ converging to $f$ and $g$ in some open interval, then the Taylor series for $fg$, $f+g$, $f'$, and $\int f$ converge in that interval and are given by $PQ$, $P+Q$, $P'$, and $\int P$, respectively. If $P$ has an infinite radius of convergence, then the Taylor series for $f\circ g$ is given by $P\circ Q$. 
:::


::: .example
**Example**  
Find the Taylor series for $f(x) = \cos x + x \mathrm{e}^{x^2}$ centered at $c = 0$. 
:::

*Solution*. Taking many derivatives is going to be no fun, especially with that second term. What we can do, however, is just substitute $x^2$ into the Taylor series for the exponential function, multiply that by $x$, and add the Taylor series for cosine: 

    p
      | \begin{equation}
      |   \left(1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots\right) + x\left(1 + x^2 +
      |   \frac{(x^2)^2}{2!} + \frac{(x^2)^3}{3!} + \cdots\right) =
      |   1 + x - \frac{x^2}{2!} + x^3  + \frac{x^4}{4!}  + \frac{x^5}{2!} +
      |   \cdots.
      |   \end{equation}

In summation notation, we could write this series as $\sum\_{n=0}^\infty a\_n x^n$ where $a\_n$ is equal to $(-1)^{n/2}/n!$ if $n$ is even and $1/((n-1)/2)!$ if $n$ is odd. 

::: .exercise
**Exercise**  
Find the Taylor series for $1/(1-x)$ centered at the origin, and show that it converges to $1/(1-x)$ for all $-1 < x < 1$. 

 Use your result to find $x + 2x^2 + 3x^3 + 4x^4 + \cdots$. Hint: think about differentiation. 
:::

 

*Solution*. Calculating derivatives of $1/(1-x)$, we find that the Taylor series centered at the origin is $1 + x + x^2 + \cdots$. Furthermore, we know that 

    p
      | \begin{equation}  
      |     \frac{1}{1-x} = 1 + x + x^2 + x^3 + \cdots,
      |   \end{equation}
      | 
      
for $-1 < x < 1$, by the formula for infinite geometric series. 

We can use this result to find $\sum\_{k = 1}^\infty k x^k$ by differentiating both sides of <a name=eq:geomseries></a> and multiplying both sides by $x$: 

    p
      | \begin{equation}
      |     \frac{1}{(1-x)^2} = 1 + 2x + 3x^2 + 4x^3 + \cdots
      |   \end{equation}
      | 
      
 We get 

    p
      | \begin{equation}
      |     \frac{x}{(1-x)^2} = x + 2x^2 + 3x^3 + 4x^4 + \cdots
      |   \end{equation}
      | 

::: .exercise
**Exercise**  
Show that $\lim\_{n\to\infty}(1+x/n)^n$ is equal to $\mathrm{e}^x$ by showing that $\lim\_{n\to\infty}\log (1+x/n)^n = x$. 
:::

 

*Solution*. Integrating the equation 

    p
      | \begin{equation}
      |     \frac{1}{1+x} = 1 - x + x^2 - x^3 + x^4 - \cdots
      |   \end{equation}
      | 
      
 term by term, we find that 

    p
      | \begin{equation}
      |     \log(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots
      |   \end{equation}
      | 
      
 Substituting gives 

    p
      | \begin{equation}
      |     n \log (1+x/n) = x - \frac{x}{2n} + \frac{x^3}{3n^2} - \cdots.
      |   \end{equation}
      | 
      
Each of the terms other than the first converges to 0, and we can take limits term-by-term since $x/n$ is inside of the interval of convergence for this series. Therefore, $\lim\_{n\to\infty}\log(1+x/n)^n = x$, and since the exponential function is continuous, this implies that $\lim\_{n\to\infty}(1+x/n)^n = \mathrm{e}^x$

 
Differentiating a single-variable function involves answering the question *near a given point, how much does the value of the function change per unit change in the input*? In the higher-dimensional setting, the question must be made more specific, since the change in output depends not only on the change in input but also the direction in which the input is changed. 

Consider, for example, the function $f(x,y)$ which returns the altitude of the point on earth with latitude $x$ and longitude $y$. If the point $(x,y)$ identifies a point on a sloping hillside, then there are some directions in which $f$ increases, others in which $f$ decreases, and two directions in which $f$ neither increases nor decreases (these are the directions along the hill's contour lines). 

The simplest directions for inquiring about the instantaneous rate of change of $f$ are those along the axes: The **partial derivative** $\frac{\partial f}{\partial x}(x\_0,y\_0)$ of a function $f(x,y)$ at a point $(x\_0,y\_0)$ is the slope of the graph of $f$ in the $x$-direction at the point $(x\_0,y\_0)$. In other words, it's the slope of the intersection of the graph of $f$ with the plane $y=y\_0$. The partial derivative $\frac{\partial f}{\partial x}(x\_0,y\_0)$ may also be denoted $f\_x(x\_0,y\_0)$. 

::: .exercise
**Exercise**  
 Consider the function $f$ whose graph is shown. Determine the sign of $f\_x(1,1)$ and the sign of $f\_y(1,1)$.
  
    center: img(src="images/partial-sign" width=240)

:::

 

*Solution*. If we increase $x$ a little while holding $y$ constant, then $f$ decreases. Therefore, $f\_x(1,1) < 0$. If we increase $y$ a little while holding $x$ constant, then $f$ increases. Therefore, $f\_y(1,1) > 0$. 

Graphically, the partial derivative with respect to $x$ at a point is equal to the slope of the trace of the graph in the "$y =\text{constant}$" plane passing through that point. Similarly, the partial derivative with respect to $y$ at a point is equal to the slope of the trace of the graph in the " $x =\text{constant}$" plane passing through that point. 

A single-variable function is differentiable at a point if and only if its graph looks increasingly like that of a particular non-vertical line when zoomed increasingly far in. In other words, $f$ is differentiable if and only if there's a linear function $L$ such that $\frac{f(x) - L(x)}{x-a}$ goes to 0 as $x \to a$. 

Likewise, a function of two variables is **differentiable** at a point if its graph looks like a plane when you zoom in sufficiently around the point; that is, $f$ is differentiable at $(a,b)$ if 

    p
      | \begin{equation}
      |     \lim_{(x,y) \to (a,b)}\frac{f(x,y) - c_0 - c_1(x-a) -
      |       c_2(y-b)}{|[x,y] - [a,b]|} = 0
      |   \end{equation}
      | 

    center: img(src="images/tangent-plane" width=240)

for some real numbers $c\_0$, $c\_1$, and $c\_2$. If such a linear function $c\_0 + c\_1(x-a) + c\_2(y-b)$ exists, then its coefficients are necessarily $c\_0 = f(a,b)$, $c\_1 = f\_x(a,b)$, and $c\_2 = f\_y(a,b)$. 

So, the equation of the plane tangent to the graph of a differentiable function $f$ at the point $(a,b,f(a,b))$ is given by 

    p
      | \begin{equation} 
      |   z = f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b)
      | \end{equation}
      | 
      
This equation says how $f$ behaves for values of $(x,y)$ very close to $(a,b)$: the output changes by the $x$-change $x-a$ times $f$'s sensitivity to changes in $x$(namely $f\_x(a,b)$) *plus* the $y$-change times $f$'s sensitivity to changes in $y$(namely $f\_y(a,b)$). 

Once we know how a differentiable function $f: \mathbb{R}^d \to \mathbb{R}$ changes in the coordinate-axis directions, we can use <a name=eq:tangent-plane></a> to succinctly express how it changes in any direction: we form the **gradient** $\nabla f$ of $f$ by putting all of the partial derivatives of a function $f$ together into a vector. Then, for any unit vector $\mathbf{u}$, the rate of change of $f$ in the $\mathbf{u}$ direction is equal to $\nabla f\cdot \mathbf{u}$. 

Since $\nabla f\cdot \mathbf{u} = |\nabla f| \cos \theta$, the direction of the gradient is the direction in which $f$ increases most rapidly. The direction opposite to the gradient is the direction of maximum decrease, and the directions orthogonal to these are the ones in which $f$ is constant. 

::: .exercise
**Exercise**  
Suppose that $f:\mathbb{R}^2 \to \mathbb{R}$ is a differentiable function at the point $(a,b)\in \mathbb{R}^2$ and that its instantaneous rates of change in the directions $\mathbf{u}$ and $\mathbf{v}$ are known. Show that if $\mathbf{u}$ and $\mathbf{v}$ are not parallel, then it is always possible to infer $f$'s rates of change in the coordinate-axis directions. 
::: 

*Solution*. The problem stipulates that we are given equations of the form 

    p
      | \begin{align*}
      |     u_1 f_x(a,b) + u_2 f_y(a,b) &= c_1  \\\\ 
      |     v_1 f_x(a,b) + v_2 f_y(a,b) &= c_2
      |   \end{align*}
      | 
 for some numbers $u\_1, u\_2, c\_1, v\_1, v\_2, c\_2$. This system may be written in matrix form as 

    p
      | \begin{equation}  
      |     \begin{bmatrix} u_1 & u_2 \\ v_1 & v_2 \end{bmatrix}
      |     \begin{bmatrix} f_x(a,b) \\ f_y(a,b) \end{bmatrix} =
      |     \begin{bmatrix} c_1 \\ c_2 \end{bmatrix}.
      |   \end{equation}
      | 
      
 Since $\mathbf{u}$ and $\mathbf{v}$ are not parallel, they span $\mathbb{R}^2$. Therefore, the matrix $\begin{bmatrix} u\_1 & u\_2 \\\\\\\\ v\_1 & v\_2 \end{bmatrix}$ is invertible, and the solution of <a name=eq:matrix-partials></a> is $\begin{bmatrix} u\_1 & u\_2 \\\\\\\\ v\_1 &
    v\_2 \end{bmatrix}^{-1}\begin{bmatrix} c\_1 \\\\\\\\ c\_2 \end{bmatrix}$. 

 

 We can take the notion of a gradient, which measures the *linear* change of a function, up a degree. The **Hessian** of a function $f: \mathbb{R}^n \to \mathbb{R}$ is defined to be the matrix 

    p
      | \begin{equation} \mathbf{H}(\mathbf{x}) =
      |     \begin{bmatrix}
      |       \frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1\,\partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_1\,\partial x_n} \\[2.2ex]
      |       \frac{\partial^2 f}{\partial x_2\,\partial x_1} & \frac{\partial^2 f}{\partial x_2^2} & \cdots & \frac{\partial^2 f}{\partial x_2\,\partial x_n} \\[2.2ex]
      |       \vdots & \vdots & \ddots & \vdots \\[2.2ex]
      |       \frac{\partial^2 f}{\partial x_n\,\partial x_1} & \frac{\partial^2 f}{\partial x_n\,\partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_n^2}
      |     \end{bmatrix}
      |   \end{equation}
      | 
 

 The best quadratic approximation to the graph of a twice-differentiable function $f:\mathbb{R}^n \to \mathbb{R}$ at the origin is 

    p
      | \begin{equation}
      |       Q(\mathbf{x}) = f(\mathbf{0}) + (\nabla
      |       f(\mathbf{0}))'\mathbf{x}+
      |       \frac{1}{2}\mathbf{x}'
      |       \mathbf{H}(\mathbf{0})\mathbf{x}.
      |     \end{equation}
      | 
      
 The same is true at points $\mathbf{a}$ other than the origin if we evaluate the gradient and Hessian at $\mathbf{a}$ instead of $\mathbf{0}$ and if we replace $\mathbf{x}$ with $\mathbf{x}-\mathbf{a}$. 
 
    center: img(src="images/quadapprox" width=240)

::: .exercise
**Exercise**  
Suppose that $a,b,c,d,e$ and $f$ are real numbers and that $f(x,y) = a + bx + cy + dx^2 + exy + fy^2$. Show that the quadratic approximation of $f$ at the origin is equal to $f$. 
:::

 

*Solution*. The gradient of $f$ evaluated at the origin is $[b, c]$, so the linear approximation of $f$ is 

    p
      | \begin{equation}
      |       f(0,0) + f_x(0,0) x + f_y(0,0) = a + bx + cy.
      |     \end{equation}
      | 
      
 The Hessian is $\begin{bmatrix} 2d & e \\ e & 2f \end{bmatrix}$, so the quadratic terms in the quadratic approximation are 

    p
      | \begin{equation}
      |       \frac{1}{2}(2dx^2 + exy + exy + 2ey^2) = dx^2 + exy + fy^2,
      |     \end{equation}
      | 
      
 as desired. 

 
---

> id: optimization
## Optimization
 
To find the largest or smallest value of a differentiable function defined on a subset $D$ of $\mathbb{R}^d$, we may make an observation regarding the instantaneous rates of change of $f$: if $\nabla f$ is nonzero at a point away from the boundary of $D$, then there are directions in which $f$ decreases away from that point and other directions where it increases. Therefore, any minima or maxima of $f$ away from the boundary must occur at points where the gradient of $f$ is zero. We term such points---where the gradient is zero or where the function is non-differentiable---**critical points**. If a function has a minimum or a maximum at a point, then either that point is a critical point, or it is on the boundary of the domain of the function. 

It's sometimes possible to check using derivatives whether a function has a minimum or maximum in the immediate vicinity of a critical point $\mathbf{a}$: $f$ has 
* a local maximum if the Hessian at $\mathbf{a}$ is negative definite 
* a local minimum if the Hessian at $\mathbf{a}$ is positive definite 
* neither a local min nor max if the Hessian at $\mathbf{a}$ has at least one positive and one negative eigenvalue 

 

 Since a function's maximum or minimum may also occur on its boundary, we must also identify candidate points on the boundary where maxima or minima may occur. This may be done in a couple ways: we parametrize the boundary and solve an optimization problem in a lower dimension. For example, if we want to optimize a function on the unit disk, we can identify boundary critical points by finding critical points of the single-variable function $\theta\mapsto f(\cos \theta, \sin \theta)$. 

 Parametrizing the boundary is only possible in simple cases, so we rely more commonly on the method of *Lagrange multipliers*. The idea is that the function does *not* have a maximum at a boundary point if it's possible to move along the boundary in a direction whose angle with $\nabla f$ is less than a right angle. Therefore, $\nabla f$ must perpendicular to the boundary of $D$ at a point if $f$ is to have an extremum there. If the boundary of $D$ is specified as a level set of a function $g$, we arrive at the equation 

    p
      | \begin{equation}
      |     \nabla f = \lambda \nabla g,
      |   \end{equation}
      | 
 for some $\lambda \in \mathbb{R}$. 

::: .theorem
**Theorem** (Extreme value theorem and Lagrange multipliers)  
 Suppose that $f$ is a continuous function defined on a closed and bounded subset $D$ of $\mathbb{R}^n$. Then 
*  $f$ realizes an absolute maximum and absolute minimum on $D$(the extreme value theorem) 
* any point where $f$ realizes an extremum is either a critical point---meaning that $\nabla f = 0$ or $f$ is non-differentiable at that point---or at a point on the boundary. 
* if $f$ realizes an extremum at a point on a portion of the boundary which is the level set of a differentiable function $g$ with non-vanishing gradient $\nabla g$, then either $f$ is non-differentiable at that point or the equation 

    p
      | \begin{equation}
      |         \nabla f = \lambda \nabla g
      |       \end{equation}
      | 
 is satisfied at that point, for some $\lambda \in \mathbb{R}$. 


:::


::: .exercise
**Exercise**  
Find the point closest to the origin in the region $3x + 2y + z \geq 6$. 
:::


*Solution*. We can rule out the possibility that the point nearest the origin is in the interior of the region, on geometric grounds. To find the boundary critical points, we set the *objective* function 

    p
      | \begin{equation}
      |       f(x,y,z) = x^2 + y^2 + z^2
      |     \end{equation}

 and the constraint function $g(x,y,z) = 3x + 2y + z$. Solving the Lagrange equation 

    p
      | \begin{equation}
      |       [2x, 2y, 2z] = \lambda [3, 2, 1],
      |     \end{equation}
      | 

 together with the constraint equation $3x + 2y + z = 6$, we get $\frac{\lambda}{2}(3(3) + 2(2) + 1(1)) = 6$, which implies $\lambda = \frac{6}{7}$. So we get a single critical point $\left(\frac{9}{7},\frac{6}{7}, \frac{3}{7}\right)$, and since there's only one, the minimum must occur here. 

 
---

> id: Matrix differentiation
## Matrix differentiation
 

Just as elementary differentiation rules are helpful for optimizing single-variable functions, *matrix* differentiation rules are helpful for optimizing expressions written in matrix form. This technique is used often in statistics. 

Suppose $\mathbf{f}$ is a function from $\mathbb{R}^n$ to $\mathbb{R}^m$. Writing $\mathbf{f}(\mathbf{x}) = \mathbf{f}(x\_1, \ldots, x\_n)$, we define the Jacobian matrix to be 

    p
      | \begin{equation} \renewcommand{\arraystretch}{1.6}
      |     \frac{\partial \mathbf{f}}{\partial \mathbf{x}} = \left[
      |       \begin{array}{cccc}
      |         \frac{\partial f_1}{\partial x_1} &
      |                                             \frac{\partial f_1}{\partial x_2} &
      |                                                                                 \cdots &
      |                                                                                          \frac{\partial f_1}{\partial x_n}  \\
      |         \frac{\partial f_2}{\partial x_1} &
      |                                             \frac{\partial f_2}{\partial x_2} &
      |                                                                                 \cdots &
      |                                                                                          \frac{\partial f_2}{\partial x_n}  \\
      |         \vdots & & \ddots & \vdots \\
      |         \frac{\partial f_m}{\partial x_1} &
      |                                             \frac{\partial f_m}{\partial x_2} &
      |                                                                                 \cdots &
      |                                                                                          \frac{\partial f_m}{\partial x_n}
      |       \end{array}\right]
      |   \end{equation}
      | 
 

 Note that if $m=1$, then differentiating $f$ with respect to $\mathbf{x}$ is the same as taking the gradient of $f$. With this definition, we obtain the following analogues to some basic single-variable differentiation results: if $A$ is a constant matrix, then 

    p
      | \begin{equation}\begin{align*}
      |     \frac{\partial}{\partial \mathbf{x}} (A \mathbf{x}) &= A \\
      |     \frac{\partial}{\partial \mathbf{x}} (\mathbf{x}' A) &= A'
      |     \\
      |     \frac{\partial}{\partial \mathbf{x}} (\mathbf{u}' \mathbf{v})
      |              &= \mathbf{u}'\frac{\partial \mathbf{v}}{\partial \mathbf{x}} + \mathbf{v}'\frac{\partial \mathbf{u}}{\partial \mathbf{x}}
      |   \end{align*}\end{equation}
      | 
 

 The Hessian of a function $f:\mathbb{R}^n \to \mathbb{R}$ may be written in terms of the matrix differentiation operator as follows: 

    p
      | \begin{equation}
      |     \mathbf{H}(\mathbf{x}) = \frac{\partial}{\partial \mathbf{x}}
      |     \left(\frac{\partial f}{\partial \mathbf{x}}\right)'.
      |   \end{equation}
      | 
 Some authors define $\frac{\partial f}{\partial \mathbf{x}'}$ to be $\left(\frac{\partial f}{\partial \mathbf{x}}\right)'$, in which case the Hessian operator can be written as $\frac{\partial^2}{\partial \mathbf{x} \partial
    \mathbf{x}'}$. 

::: .exercise
**Exercise**  
Let $f: \mathbb{R}^n \to \mathbb{R}$ be defined by $f(\mathbf{x}) = \mathbf{x}' A \mathbf{x}$ where $A$ is a symmetric matrix. Find $\frac{\partial f}{\partial \mathbf{x}}.$
:::

 

*Solution*. We can apply the product rule to find that 

    p
      | \begin{equation}
      |       \frac{\partial f}{\partial \mathbf{x}} = \mathbf{x}'
      |       \frac{\partial}{\partial \mathbf{x}}(A\mathbf{x}) +
      |       (A\mathbf{x})' \frac{\partial \mathbf{x}}{\partial
      |         \mathbf{x}}
      |        = \mathbf{x}' A + \mathbf{x}' A =
      |        2\mathbf{x}' A.
      |     \end{equation}
      | 
 

::: .exercise
**Exercise**  
Suppose $A$ is an $m\times n$ matrix and $\mathbf{b} \in
    \mathbb{R}^m$. Use matrix differentiation to find the vector $\mathbf{x}$ which minimizes $|A \mathbf{x} - \mathbf{b}|^2$. Hint: begin by writing $|A \mathbf{x} - \mathbf{b}|^2$ as $(A \mathbf{x} - \mathbf{b})' (A \mathbf{x} -
    \mathbf{b})$. You may assume that the rank of $A$ is $n$. 
:::

 

*Solution*. We write 

    p
      | \begin{align*}
      |        |A \mathbf{x} - \mathbf{b}|^2 &= (A \mathbf{x} -
      |                                        \mathbf{b})' (A \mathbf{x} - \mathbf{b}) \\\\\\\\
      |        &= \mathbf{x}' A' A \mathbf{x} -
      |          \mathbf{b}' A' \mathbf{x} + \mathbf{x}' A
      |          \mathbf{b} + |\mathbf{b}|^2.
      |     \end{align*}
      | 
 To minimize this function, we find its gradient 

    p
      | \begin{equation}
      |       \frac{\partial}{\partial \mathbf{x}}|A \mathbf{x} -
      |       \mathbf{b}|^2 = 2\,\mathbf{x}' A' A -
      |       \mathbf{b}' A + (A'\mathbf{b})' =
      |       2\mathbf{x}' A' A- 2\mathbf{b}' A
      |     \end{equation}
      | 
 and set it equal to $\boldsymbol{0}$ to get 

    p
      | \begin{equation}
      |       \mathbf{x}' = \mathbf{b}' A(A' A)^{-1}
      |       \implies \mathbf{x} = (A' A)^{-1} A'
      |       \mathbf{x}.
      |     \end{equation}
      | 
(We know that $A' A$ has an inverse matrix because its rank is equal to that of $A$, which we assumed was $m$.) 

 
\section{Multivariable integration}
 

 Integrating a function is a way of totaling up its values. For example, if $f$ is a function from a region $D$ in $\mathbb{R}^n$ to $\mathbb{R}$ which represents the mass density of a solid occupying the region $D$, we can find the total mass of the solid as follows: (i) split the region $D$ into many tiny pieces, (ii) multiply the volume of each piece by the value of the function at some point on that piece, (iii) and add up the results. If we take the number of pieces to $\infty$ and the piece size to zero, then this sum converges to the total mass of the solid. 

 We may apply this procedure to any function $f$ defined on $D$, and we call the result the integral of $f$ over $D$, denoted $\int\_D f$. 

 To find the integral of a function $f$ defined on a 2D region $D$, we set up a double iterated integral over $D$: the bounds for the outer integral are the smallest and largest possible values of $y$ for point in $D$, and the bounds for the inner integral are the smallest and largest values of $x$ for any point in a given *each* "$y$ = *constant*" *slice* of the region (assuming that each slice intersects the region in a line segment). 

::: .exercise
**Exercise**  
Find the integral over the triangle $T$ with vertices $(0,0)$, $(2,0)$, and $(0,3)$ of the function $f(x,y) = x^2y$. 
:::

 

*Solution*. The least and greatest values of $y$ for any point in the region are 0 and 3, while the least and greatest values of $x$ for each given $y$-slice are 0 and $2 - \frac{2}{3}y$. Therefore, the integral is 

    p
      | \begin{equation}
      |     \int_0^3 \int_0^{2 - \frac{2}{3}y} x^2 y \, \mathrm{d} x \, \mathrm{d} y =
      |     \frac{6}{5}.
      |   \end{equation}
      | 


 

 To set up an integral of a function over a 3D region (for the order $\mathrm{d} x \, \mathrm{d}y \, \mathrm{d}z$): the bounds for the outer integral are the smallest and largest values of $z$ for any point in the region of integration, then the bounds for the middle integral are the smallest and largest values of $y$ for any point in the region in each " $z$ = constant" plane, and the inner bounds are the smallest and largest values of $x$ for any point in the region in each " $(y,z)$ = constant" line. 

::: .exercise
**Exercise**  
Integrate the function $f(x,y,z) = 1$ over the tetrahedron with vertices $(0,0,0)$, $(2,0,0)$, $(0,3,0)$, and $(0,0,4)$. 
:::

 

*Solution*.  The least and greatest values of $z$ are 0 and 4, so those are our outer limits. For a fixed value of $z$, the least and greatest values of $y$ for a point in $D$ are 0 and $3 - \tfrac{3}{4}z$, respectively. Finally, for fixed $y$ and $z$, the least and greatest values of $x$ for a point in $D$ are 0 and the point on the plane $6x + 4y + 3z = 12$ with the given values of $y$ and $z$. So we get 

    p
      | \begin{equation}\begin{align*}
      |     \text{volume}(D) &= \int_{0}^{4}\int_{0}^{3-\frac{3}{4}z}\int_{0}^{2 - \frac{2}{3}y -
      |                        \frac{1}{2}z} 1 \, \mathrm{d}x \, \mathrm{d}y \, \mathrm{d}z  \\
      |                      &= \int_{0}^{4}\int_{0}^{3-\frac{3}{4}z} \left(2 - \frac{2}{3}y -
      |                        \frac{1}{2}z \right) \, \mathrm{d}y \, \mathrm{d}z \\
      |                      &= \int_{0}^{4} \frac{3}{16}(z-4)^2 \, \mathrm{d}z \\
      |                      &= \boxed{4}.
      |   \end{align*}\end{equation}
      | 

    center: img(src="images/tetrahedron" width=240)

---

> id: chain-rule
## The chain rule

 If we compose a differentiable function $\mathbf{r}: \mathbb{R}^1 \to \mathbb{R}^2$ with a differentiable function $f: \mathbb{R}^2 \to \mathbb{R}^1$, we get a function whose derivative is 

    p
      | \begin{equation}
      |   (f \circ \mathbf{r})'(t)  = (\nabla f)(\mathbf{r}(t)) \cdot
      |   \mathbf{r}'(t).
      | \end{equation}
      | 
 This follows from linearizing $f$: the change that results from making a small move from $\mathbf{r}(t)$ to $\mathbf{r}(t) + \mathbf{r}'(t) \Delta t$ is the dot product of the gradient of $f$ and the small step $\mathbf{r}'(t) \Delta t$. 

::: .exercise
**Exercise**  
Suppose that $f\_x(3,2) = 4$, that $f\_y(3,2) = -2$, and that $x(t) =
  1 + 2t$ and $y(t) = 4 - 2t^2$. Find the derivative of the function $f(x(t),y(t))$ at the point $t = 1$. 
:::

 

*Solution*. The chain rule implies that the derivative of $f(x(t),y(t))$ is 

    p
      | \begin{equation}
      |     [f_x(x(t),y(t)), f_y(x(t),y(t))]\cdot [x'(t), y'(t)] = (4)(2) +
      |     (-2)(-4) = \boxed{16}.
      |   \end{equation}
      | 


---
> id: jacobian
## The Jacobian determinant

If we want to integrate over a region which doesn't split nicely along lines parallel to the coordinate axes, we can split the region up along other lines. 

For example, consider the region bounded by the hyperbolas $xy = 1$ and $xy = 3$ and the lines $y = \frac{1}{2}x$ and $y = 2x$. This region naturally splits along hyperbols of the form $xy = v$ where $v$ ranges from 1 to 3 and lines of the form $y/x = u$ where $u$ ranges from $\frac{1}{2}$ to 2. We can therefore write the region as the image of the rectangle $[\frac{1}{2},2] \times [1,3]$ under the inverse $\mathbf{T}$ of the transformation $(x,y) \mapsto (y/x,xy)$. 

     center: img(src="images/change-of-variables" width=240)

 To find the area of each small piece of $D$ in this subdivision, we may multiply the area of the corresponding piece of the rectangle by the area distortion factor of the transformation $\mathbf{T}$. This local area distortion factor, or *Jacobian determinant* is the absolute value of the determinant of the Jacobian matrix $\frac{\partial \mathbf{T}(\mathbf{x})}{\partial \mathbf{x}}$. Thus we arrive at the formula 

    p
      | \begin{equation}
      |   \iint_D f(x,y) \, \mathrm{d}x\, \mathrm{d}y = \iint_R f(\mathbf{T}(u,v)) \left|
      |     \frac{\partial \mathbf{T}(u,v)}{\partial (u,v)} \right| \, \mathrm{d}u \, \mathrm{d}v.
      | \end{equation}
      | 
 

::: .exercise
**Exercise**  
Show that the map $(u,v) \mapsto (u \cos v, u \sin v)$ maps the rectangle $[0,1] \times [0,2\pi]$ onto the unit disk, and calculate the Jacobian for this transformation. Use your result to integrate 1 over the unit disk and confirm that the result is equal to the area of the unit disk. 
:::

 

*Solution*. The Jacobian of the given transformation is 

    p
      | \begin{equation}
      |     \left|\begin{array}{cc}
      |             \cos v & \sin v \\
      |             -u\sin v & u \cos v
      |           \end{array}
      |         \right| = u(\cos^2 v + \sin^2 v) = u.
      |   \end{equation}
      | 
      
 The area of the disk is equal to 

    p
      | \begin{equation}
      |     \int_0^1 \int_0^{2\pi} u \, \mathrm{d}u \mathrm{d}v = \boxed{\pi}.
      |   \end{equation}
      | 


 

\newpage 