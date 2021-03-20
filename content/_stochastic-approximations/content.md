
# Stochastic Approximations

> id: intro
## Introduction

Randomly generated numbers are useful in many contexts. In this course we will
explore  how  they may be used to estimate quantities that may be too difficult
to compute analytically or computationally. Throughout the course we will
assume that we have access to a random number generator capable of generating
uniformly distributed numbers on the interval $[0,1]$.

We will begin by considering **Monte Carlo Estimation**. Put simply, Monte
Carlo estimation is a method of estimating
quantities by obtaining $n$ samples and computing the ratio of samples
satisfying some property. We will be using Monte Carlo methods in the
approximation of integrals, sometimes referred to as Monte Carlo Integration.

[Continue](btn:next)

---
> id: step-1

::: .example
**Example**  
Consider the area between the functions
$f_1(x) = 3\left|\cos(x)\right| + 2\sin(x)$
and $f_2(x) = -3\left|\cos(x)\right| + 2\sin(x)$ for $x \in [0,3]$ given by
$\int_0^3 f_1(x) - f_2(x)dx \approx 11.153$.

This area can be estimated by taking samples
$(X_1, Y_1), (X_2, Y_2), \ldots, (X_n, Y_n) \sim Unif([0,3] \times [-3,4])$
and counting the number of $(X_i, Y_i)$ that land in the area between the
 curves.

Mathematically, we have

``` latex
\int_0^3 f_1(x) - f_2(x)dx \approx
\underbrace{21}_{\textrm{Area of sampling region}}
\overbrace{\frac{\left|\{i: i \in \{1,2,\ldots, n\}, \;
f_2(X_i) \leq Y_i \leq f_1(X_i)\}\right|}{n}}^{\textrm{Number of sampled points
    between curves}}.
```

Pictorially, we obtain something like that shown in the figure below:

    figure
      img(src="images/area-ex1-monte-carlo.svg")

Above we have sampled $n = 4000$ points and there are 2142 $(X_i, Y_i)$ pairs
satisfying $f_2(X_i) \leq Y_i \leq f_1(X_i)$. Hence, our estimate of the area
is $21\left(\frac{2142}{4000}\right) \approx 11.25$.
:::

On average, as $n$ increases, we expect the error of our estimate above to
[[decrease|increase]].

[Continue](btn:next)

---
> id: step-2

For simplicity, we will assume the area of integration is contained in the
hypercube $[0,1]^d$. Then, given $f: [0,1]^d \to \mathbb{R}$, to estimate
$ I := \int_{[0,1]^d} f(x)dx$
we sample $X_1, X_2, \ldots, X_n$ iid uniformly distributed in the cube
$[0,1]^d$. The estimator of $I$, $I_n$, is then given by

``` latex
I_n = \frac{1}{n} \sum_{i=1}^n f(X_i).
```

To analyze the performance of our estimator, we will need to use the Law of
Large Numbers.

::: .theorem
**Theorem**  (Weak Law of Large Numbers)  

Let $X_1, X_2, \ldots, X_n$ be a sequence of iid random variables with finite
variance. Suppose $\mathbb{E}[X_1] = \mu$. Then for every $\epsilon > 0$ we
have

``` latex
\lim_{n \to \infty} \mathbb{P}\left(
    \left|
        \frac{1}{n}\sum_{i=1}^n X_i - \mu
    \right| \geq \epsilon
\right) = 0.
```

In words, this says that the quantity $\frac{1}{n}\sum_{i=1}^n X_i$ converges
(in probability) to $\mu$.
:::

[Continue](btn:next)

---
> id: step-3

Let $X \sim Unif([0,1]^d)$; then the law of large numbers
guarantees $I_n \to \mathbb{E}[f(X)] = \int_{[0,1]^d} f(x)dx = I$.

*Remark*: A random variable $X$ is said to be uniformly
distributed over a region $A$, denoted $X \sim Unif(A)$, if for $B \subseteq A$
we have $\mathbb{P}(X \in B) = \frac{\textrm{area}(B)}{\textrm{area}(A)}$.

Note that the computation of an integral is a deterministic problem for
which deterministic methods exist. However, stochastic approximation methods
excel in higher-dimensional settings. Deterministic algorithms typically
create a mesh by subdividing the region of integration into disjoint intervals.
For example, computing an integral of the form $\int_{[0,1]^d} f(x)dx$ could
partition each $[0,1]$ dimension in $[0,1]^d$ into 10 disjoint intervals, for
a total of $10^d$ subintervals. Such partitions quickly become computationally
infeasible even for relatively small $d$. For $d = 30$, we would compute
$I \approx \frac{1}{10^{30}}\sum_{i_1 = 1}^{10}\sum_{i_2 = 1}^{10}\cdots
\sum_{i_{30} = 1}^{10}
f\left(\frac{i_1}{10}, \frac{i_2}{10}, \ldots, \frac{i_{30}}{10}\right)$
which requires $10^{30}$ computations.

[Continue](btn:next)

---
> id: step-4

As we will soon see, Monte Carlo integration is independent of the dimension
$d$, and the law of large numbers guarantees this method works asymptotically.
From a more practical perspective, we would like to know just how many samples,
or how large $n$ should be, to be fairly confident in our estimate. This is
given by the variance of the estimator:

``` latex
\textrm{Var}(I_n) &= \textrm{Var}\left(\frac{1}{n}\sum_{i=1}^n f(X_i)\right) \\
&= \frac{1}{n^2}\sum_{i=1}^n \textrm{Var}(f(X_i)) \\
&= \frac{n\textrm{Var}(f(X_i))}{n^2} \\
&= \frac{\textrm{Var}(f(X_i))}{n} \\
&= \frac{1}{n}\left(\mathbb{E}[f(X_i)^2] - \mathbb{E}[f(X_i)]^2\right) \\
&= \frac{1}{n}\left(\int_{[0,1]^d} f(x)^2dx - \left(\int_{[0,1]^d} f(x)
dx\right)^2\right) \\
&= \frac{1}{n}\left(\int_{[0,1]^d} f(x)^2dx - I^2\right).
```

Letting $\sigma^2 = \int_{[0,1]^d} f(x)^2dx - I^2$, we have that
$\textrm{Var}(I_n) = \frac{\sigma^2}{n}$. Thus, as $\sigma^2$ increases,
$n$ needs to be larger so that the error between $I$ and $I_n$ remains small.

[Continue](btn:next)

---
> id: step-4a

Since the accuracy of our estimate is dependent on the variance of the
estimator, we would like to make the variance as small as possible. The variance
is dependent on the distribution of the samples, which we had assumed to be
uniform. It is easy to concoct examples where uniform samples rarely land in the
region we are interested in integrating, for example, small volumes in high
dimensions. To remedy this, we will choose the distribution of our samples
to be more concentrated in the region of integration; this method of sampling
is called **importance sampling**, which we will discuss next.

[Continue](btn:next)

---
> id: step-5

We are still interested in estimating integrals of the form
$I = \int_{\mathbb{R}^d} f(x)dx$. Let $q: \mathbb{R}^d \to \mathbb{R}$
be a density function
and $X_1, X_2, \ldots, X_n$ samples from $q$. Let $X \sim q$;
if we consider the estimator
$I_n = \frac{1}{n} \sum_{i=1}^n f(X_i)$ as before, then by the law of
large numbers we have
$I_n \to \\mathbb{E}[f(X)] = \int_{\mathbb{R}^d} f(x)q(x)dx$
which is not the integral we were interested in computing. To correct for
this new sampling distribution, we need to reconsider our estimator $I_n$.
Consider the estimator defined by

``` latex
I_n &= \frac{1}{n}\sum_{i=1}^n \frac{f(X_i)}{q(X_i)}.
```

By the law of large numbers we have
$I_n \to \mathbb{E}\left[\frac{f(X)}{q(X)}\right] =
\int_{\mathbb{R}^d}  \frac{f(x)}{q(x)} q(x)dx =
\int_{\mathbb{R}^d} f(x)dx$. The variance of $I_n$ is given by

``` latex
\textrm{Var}(I_n) &= \frac{1}{n}\textrm{Var}\left(\frac{f(X)}{q(X)}\right) \\
&= \frac{1}{n}\left(\int_{\mathbb{R}^d} \left(\frac{f(x)}{q(x)}\right)^2 q(x)dx
- I^2 \right) \\
&= \frac{1}{n}\left(\int_{\mathbb{R}^d} \frac{f(x)^2}{q(x)} dx
- I^2 \right).
```
Unlike the uniform sample estimator, we now have control over the size of the
variance with the parameter $q(x)$. In particular, we would like to choose $q$
so that the quantity $\int_{\mathbb{R}^d} \frac{f(x)^2}{q(x)} dx$ is as small
as possible. Note, however, that we need to be able to efficiently sample from
$q$; one such method for obtaining samples is **rejection sampling**.

[Continue](btn:next)

---
> id: step-6

To further understand how large $n$ should be to lower the error of our Monte
Carlo estimate, we will turn to the Central Limit Theorem.

::: .theorem
**Theorem** (Central Limit Theorem)  
Let $X_1, X_2, \ldots, X_n$ be iid samples with finite variance $\sigma^2$
and mean $\mu$. Then for every $[a,b] \subseteq \mathbb{R}$ we have

``` latex
\lim_{n \to \infty} \mathbb{P}\left(
    \frac{1}{\sqrt{n}}\sum_{i=1}^n \frac{X_i - \mu}{\sigma} \in [a,b]
\right) &=
\frac{1}{\sqrt{2\pi}}\int_a^b e^{-\frac{x^2}{2}}dx.
```

In words, this says that the estimator $\frac{1}{\sqrt{n}}\sum_{i=1}^n
\frac{X_i - \mu}{\sigma}$ behaves more and more like a standard Gaussian
as $n \to \infty$. Equivalently, we can say
$\frac{1}{n}\sum_{i=1}^n X_i$ converges in distribution to
$N\left(\mu, \frac{\sigma^2}{n}\right)$.
:::

Let $U_i := \frac{f(X_i)}{q(X_i)}$ so that the importance sampling
estimator is given by $I_n = \frac{1}{n}\sum_{i=1}^n U_i$. Then we have
that $\mu := \mathbb{E}[U_i] = I$ and
$\sigma^2 := \textrm{Var}(U_i) =
\int_{\mathbb{R}^d} \frac{f(x)^2}{q(x)}dx - I^2$. Now consider the
quantity $\frac{\sqrt{n}}{\sigma}(I_n - I)$:

``` latex
\frac{\sqrt{n}}{\sigma}(I_n - I) &= \frac{\sqrt{n}}{\sigma}(I_n - \mu) \\
&= \frac{\sqrt{n}}{\sigma}\left(\frac{1}{n}\sum_{i=1}^n U_i - \mu\right) \\
&= \frac{\sqrt{n}}{n}\sum_{i=1}^n \frac{U_i - \mu}{\sigma} \\
&= \frac{1}{\sqrt{n}} \sum_{i=1}^n \frac{U_i - \mu}{\sigma}.
```

By the central limit theorem, we know
$\frac{1}{\sqrt{n}}\sum_{i=1}^n \frac{U_i - \mu}{\sigma}$ converges to $N(0,1)$
in distribution.
Thus, $\frac{\sqrt{n}}{\sigma}(I_n - I)$ converges in distribution to $N(0,1)$.
Consequently, we can now construct confidence intervals for $I$. For a
$1 - \alpha$ confidence interval and $Z \sim N(0,1)$ we have

``` latex
1 - \alpha &=
\mathbb{P}\left(-z_{\frac{\alpha}{2}} \leq Z \leq z_{\frac{\alpha}{2}} \right)
\\
&\approx
\mathbb{P}\left(-z_{\frac{\alpha}{2}} \leq \frac{\sqrt{n}}{\sigma}(I_n - I)
\leq z_{\frac{\alpha}{2}} \right) \\
&=
\mathbb{P}\left(-\frac{\sigma}{\sqrt{n}}z_{\frac{\alpha}{2}} \leq I_n - I
\leq \frac{\sigma}{\sqrt{n}}z_{\frac{\alpha}{2}} \right) \\
&=
\mathbb{P}\left(I_n -\frac{\sigma}{\sqrt{n}}z_{\frac{\alpha}{2}} \leq I
\leq I_n + \frac{\sigma}{\sqrt{n}}z_{\frac{\alpha}{2}} \right).
```

*Remark*: $z_\frac{\alpha}{2}$ above denotes the z-score corresponding
to the $1 - \alpha$ confidence interval, e.g., for a 95% confidence interval
$z_\frac{\alpha}{2} = 1.96$.

From above, we conclude

``` latex
1 - \alpha &\approx \mathbb{P}\left(
    I \in \left[
        I_n - \frac{\sigma}{\sqrt{n}}z_{\frac{\alpha}{2}},
        I_n + \frac{\sigma}{\sqrt{n}}z_{\frac{\alpha}{2}}
    \right]
\right)
```

[Continue](btn:next)

---
> id: step-7

Loosely speaking, the result above implies that with probability $1 - \alpha$,
the true value of $I$ lies within a distance of
$\frac{\sigma}{\sqrt{n}}z_{\frac{\alpha}{2}}$ from $I_n$. Note that this
interval is independent of the dimension $d$ and is inversely proportional to
$\frac{1}{\sqrt{n}}$. However, to compute the interval, we would need to know
the value of $\sigma$, which itself may be more difficult to compute than $I$.
Nevertheless, we can instead use the sample variance estimator
$\sigma_n^2 = \frac{1}{n}\sum_{i=1}^n (U_i - I_n)^2$ which is guaranteed to
converge to $\sigma^2$ as $n \to \infty$ by the law of large numbers.

To decrease the length of the interval by a factor of two, we would have to
increase $n$ by a factor of [[4|2|0.5]].

[Continue](btn:next)

---
> id: step-8

::: .example
**Example**

We will construct a $95$% confidence interval for the value of the integral
$\int_{\mathbb{R}} f(x)dx$ where
$f(x) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}\mathbf{1}_{x \geq \frac{11}{2}}$. A
plot of $f(x)$ is shown below.

    figure
      img(src="images/imp_sampling_ex2.svg")


Since the domain of $f$ is $\left[\frac{11}{2}, \infty\right)$, and most of
its mass is concentrated around $\left[\frac{11}{2}, 7\right]$, we would like
our samples $X_i$ to follow a similar structure. As such, we will choose
$q(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{(x-5)^2}{2}}$, that is,
$X_i \sim N(5, 1)$.

After obtaining $n = 10^6$ samples $X_1, X_2, \ldots, X_n \sim N(5,1)$,
we compute $I_n = \sum_{i=1}^n \frac{f(X_i)}{q(X_i)}$ and obtain
$I_n \approx 1.896 \times 10^{-8}$ with a $95$% confidence interval
of $[1.886 \times 10^{-8}, 1.907 \times 10^{-8}]$. The true value
of the integral is approximately $1.899 \times 10^{-8}$ which is
within our confidence interval.
:::

---
> id: Markov Processes
## Markov Processes

In this section we will move away from our previous setting of independent and
identically distributed sequences of random variables and consider Markovian
structures. Let $S_0, S_1, \ldots, $ be a sequence of random variables with
state space $\Omega$, then this sequence is a discrete time
**Markov Process** if for every $n \in \\\{0,1,2,\ldots\\\}$ and
$s_0, s_1, \ldots, s_{n+1} \in \Omega$ we have

``` latex
\mathbb{P}(S_{n+1} = s_{n+1}| S_0 = s_0, S_1 = s_1, \ldots, S_n = s_n) &=
\mathbb{P}(S_{n+1} = s_{n+1}|S_n = s_n)
```
 In words, conditioning the next state $S_{n+1}$ on all previous other states
 is equivalent to conditioning on only the current state $S_n$. Put simply,
 the history of the process is irrelevant for computing the probability
 of future events, only the current state of the process is relevant.

 In this course we will assume that $\Omega$ is a discrete state space. Under
 this assumption, the sequence $S_0, S_1, S_2, \ldots$ is called a
 **Markov Chain**.

 [Continue](btn:next)

 ---
 > id: step-9

 To solidify the notion of Markov chains, consider the following example.

::: .example
**Example**

We will refer to the Markov chain in this example as the "gambler's ruin"
Markov chain.
Suppose you play a game where with probability $p$ you win \$1 and with
probability $q := 1-p$ you lose \$1. Moreover, suppose you stop playing when
you have amassed \$N or when you have \$0 left. Let $S_n$ represent how
much money you have at time $n$ and $S_0 = s_0$ represent how much money
you start with. Note that $S_n$ has the Markov property, that is,
for time $n+1$ and $0 < S_n < N$ we have that

``` latex
\mathbb{P}(S_{n+1} = s_n + 1| S_0 = s_0, S_1 = s_1, \ldots, S_n = s_n) &=
\mathbb{P}(S_{n+1} = s_n + 1| S_n = s_n) = p.
```

This is intuitively true since to increase our wealth by \$1 we simply
need to win the current game which occurs with probability $p$.
:::

[Continue](btn:next)

---
> id: step-10

We will restrict our attention to time homogeneous Markov chains.
A Markov chain $S_0, S_1, S_2, \ldots$ is said to be
**time homogeneous** if for all $n$ and $x,y \in \Omega$ we have
$\mathbb{P}(S_{n+1} = y|S_n = x) = \mathbb{P}(S_1 = y|S_0 = x)$.
In words, this says that transitioning from state $x$ to state $y$
in one step is independent of the time $n$.

[Continue](btn:next)

---
> id: step-11

Suppose the state space of a time homogeneous Markov chain
is $\Omega = \\\{a_1, a_2, \ldots, a_k\\\}$. We can represent the chain
as a directed graph where nodes represent
states and edge weights represent the probability of transitioning from one
state to another in a single step.
For example, setting $N = 5$ in the example above, we can have the following
graph:

    figure
      img(src="images/mc_gamblers_ruin_graph.svg")

 [Continue](btn:next)

---
> id: step-12

We can also represent the chain with a $|\Omega| \times |\Omega|$ matrix $P$ where
$P_{ij}$ denotes the probability of transitioning from state $i$ to state $j$
in one step, that is, $P_{ij} = \mathbb{P}(S_{n+1} = j|S_n = i)$ for all $n$
and $i,j \in \Omega$.
For example, again setting $N = 5$ in the example above, we have

``` latex
P &=
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 0 \\
q & 0 & p & 0 & 0 & 0 \\
0 & q & 0 & p & 0 & 0 \\
0 & 0 & q & 0 & p & 0 \\
0 & 0 & 0 & q & 0 & p \\
0 & 0 & 0 & 0 & 0 & 1 \\
\end{bmatrix}.
```
Note that $P$ satisfies

``` latex
1&. \quad P_{ij} \geq 0 \\
2&. \quad \sum_j P_{ij} = 1.
```

In words, the above says that the entries of $P$ are nonnegative and that the
rows of $P$ sum to 1; this should make sense since the probability of
transitioning from one state to another (maybe itself) should always be 1.


*Remark*: States $i$ that satisfy $P_{ii} = 1$ are called
**absorbing states**.

[Continue](btn:next)

---
> id: step-13

::: .example
**Example**

This example is a mathematical translation of the Ehrenfest model in physics.
Suppose we have two urns, each containing balls for a total of $N$ balls. We
will choose one of the $N$ balls uniformly at random, grab it from whichever
urn it is in, and move it to the other urn. Let $S_n$ represent the number of
balls in the "left" urn (assuming one urn is labeled "left" and the other
"right") after $n$ draws. Note that the number of balls in the left urn
at time $n + 1$ will either be $S_n + 1$ or $S_n - 1$, so this is indeed
a Markov chain, i.e., the states $S_0, S_1, \ldots, S_{n-1}$ are irrelevant.
Moreover, for $0 < s_n < N$, we can compute

``` latex
\mathbb{P}(S_{n+1} = s_n + 1|S_0 = s_0, S_1 = s_1, \ldots, S_n = s_n) &=
\mathbb{P}(S_{n+1} = s_n + 1|S_n = s_n) \\
&= \frac{N - s_n}{N}
```

and

``` latex
\mathbb{P}(S_{n+1} = s_n - 1|S_0 = s_0, S_1 = s_1, \ldots, S_n = s_n) &=
\mathbb{P}(S_{n+1} = s_n - 1|S_n = s_n) \\
&= \frac{s_n}{N}.
```

The transition matrix is therefore given by $P_{i,i+1} = \frac{N-i}{N}$ and
$P_{i,i-1} = \frac{i}{N}$ for $0 \leq i \leq N$.
:::

[Continue](btn:next)

---
> id: step-14

::: .exercise

**Exercise**

Consider the following social mobility Markov chain with state space
$\Omega = \\\{1,2,3\\\}$ where state 1 represents lower class, state 2
represents middle class, and state 3 represents upper class with the
following transition matrix:

``` latex
P &=
\begin{bmatrix}
0.6 & 0.3 & 0.1 \\
0.4 & 0.4 & 0.2 \\
0.1 & 0.2 & 0.7
\end{bmatrix}.
```

* If your parents are upper class, what is the probability you are lower class?
[[0.1]]

* If your parents are upper class, what is the probability that you are middle
class and your children are lower class? [[0.08]]

* If your parents are middle class, what is the probability that your children
are upper class? [[0.26]]
:::

[Continue](btn:next)

---
> id: step-15

*Solution*
* Let $S_0$ be the state of our parents, so $S_0 = 3$. We are interested in
$\mathbb{P}(S_1 = 1|S_0 = 3)$ which is given by $P_{31} = .1$.

* Let $S_0$ be the state of our parents, so $S_0 = 3$. We are interested in
computing $\mathbb{P}(S_2 = 1, S_1 = 2 | S_0 = 3)$. This is given by
``` latex
\mathbb{P}(S_2 = 1, S_1 = 2 | S_0 = 3) &= \mathbb{P}(S_2 = 1|S_1 = 2, S_0 = 3)
\mathbb{P}(S_1 = 2| S_0 = 3) \\
&= \mathbb{P}(S_2 = 1|S_1 = 2)\mathbb{P}(S_1 = 2| S_0 = 3) \\
&= (0.4)(0.2) \\
&= 0.08.
```

* Let $S_0$ be the state of our parents, so $S_0 = 2$. We are interested in
$\mathbb{P}(S_2 = 3|S_0 = 2)$. To compute this, we need to consider all
possible values of $S_1$. In particular, we compute

``` latex
\mathbb{P}(S_2 = 3|S_0 = 2) &=
\sum_{k=1}^3 \mathbb{P}(S_2 = 3, S_1 = k| S_0 = 2) \\
&= \sum_{k=1}^3 \mathbb{P}(S_1 = k| S_0 = 2)\mathbb{P}(S_2 = 3| S_1 = k) \\
&= \sum_{k=1}^3  P_{2k} P_{k3} \\
&= (0.4)(0.1) + (0.4)(0.2) + (0.2)(0.7) \\
&= 0.26.
```

[Continue](btn:next)

---
> id: step-16

The third question in the exercise above alludes to an interesting observation.
Note that we could have replaced the class of our parents with some class
$i \in \Omega$ and the class of our children with some class $j \in \Omega$ to
obtain

``` latex
\mathbb{P}(S_2 = j|S_0 = i) &= \sum_{i=1}^3 P_{ik}P_{kj}.
```
Now recall that given matrices $A \in \mathbb{R}^{m \times n}$ and
$B \in \mathbb{R}^{n \times p}$, the $(i,j)$th entry of the matrix product
$AB$ is given by

``` latex
(AB)_{ij} &= \sum_{k=1}^n A_{ik}B_{kj}.
```

Replacing the matrix $B$ above with $A$ we see

``` latex
A^2_{ij} &= \sum_{k=1}^n A_{ik}A_{kj}.
```

Now letting $A$ be the transition matrix $P$ we have

``` latex
P^2_{ij} &= \sum_{k=1}^n P_{ik}P_{kj}.
```

From above we observe that $\mathbb{P}(S_2 = j|S_0 = i) = P^2_{ij}$. In words,
this says that the probability of transitioning from state $i$ to state $j$ in
two steps is the $(i,j)$th entry of the matrix $P^2$.

This observation suggests that the probability of transitioning from state $i$
to step $j$ in $m$ steps is given by the $(i,j)$th entry of the matrix $P^m$.
This is proved below.

[Continue](btn:next)

---
> id: step-17

::: .theorem
**Theorem** ($m$-step transition probabilities)

The probability of transitioning from state $i$ to state $j$ in $m$ steps
is given by $P^m_{ij}$, that is, the $(i,j)$th entry of the matrix $P$
raised to the $m$th power. Mathematically, we claim
$\mathbb{P}(S_m = j|S_0 = i) = P^m_{ij}$. Note that because we are considering
time homogeneous Markov chains, this is equivalent to
$\mathbb{P}(S_{n+m} = j| S_n = i) = P^m_{ij}$.
:::

*Proof.* The proof of the $m$-step transition probabilities theorem is by
induction on $m$. Note that by definition, for $m=1$ we have
$\mathbb{P}(S_1 = j| S_0 = i) = P_{ij}$ so the theorem holds in this case.
Now suppose the theorem holds for a fixed but arbitrary integer $m > 1$
so that $P^m_{ij} = \mathbb{P}(S_m = j|S_0 = i)$. We now need to show that
$P_{ij}^{m+1} = \mathbb{P}(S_{m + 1} = j|S_0 = i)$. To show this, note that
for the chain to transition from state $i$ to state $j$ in $m + 1$, the chain
first needs to transition from $i$ to some state $k \in \Omega$ in $m$ steps and
then from state $k$ to state $j$ in one step. Thus we have

``` latex
\mathbb{P}(S_{m+1} = j|S_0 = i) &= \sum_{k \in \Omega}
\mathbb{P}(S_{m+1}=j,S_m=k|S_0=i) \\
&= \sum_{k \in \Omega} \frac{\mathbb{P}(S_{m+1} = j, S_m=k,
    S_0=i)}{\mathbb{P}(S_0 = i)} \\
&= \sum_{k \in \Omega} \frac{\mathbb{P}(S_{m+1} = j| S_m=k, S_0=i)
\mathbb{P}(S_m = k, S_0 = i)}{\mathbb{P}(S_0 = i)} \\
&= \sum_{k \in \Omega} \mathbb{P}(S_{m+1} = j | S_m = k, S_0 = i)
\mathbb{P}(S_m = k | S_0 = i) \\
&= \sum_{k \in \Omega} \mathbb{P}(S_{m+1} = j | S_m = k) \mathbb{P}(S_m = k | S_0
    = i) \quad (\textrm{Markov property})\\
&= \sum_{k \in \Omega} P_{kj} P^m_{ik} \quad (\textrm{Induction hypothesis}) \\
&= (PP^m)_{ij} \\
&= P^{m+1}_{ij}.
```

[Continue](btn:next)

---
> id: step-18

::: .exercise
**Exercise**

Consider a gambler's ruin chain with $N = 5$ and $p = .3$ Assuming you start
with \$2, what is the probability you will have \$5 after 6 games? What is
the probability you will have \$0 after 6 plays?
:::

[Continue](btn:next)

---
> id: step-19

*Solution.* We first construct the transition matrix $P$ and then use this to
construct the 6-step transition matrix:

``` latex
P &=
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 0 \\
0.7 & 0 & 0.3 & 0 & 0 & 0 \\
0 & 0.7 & 0 & 0.3 & 0 & 0 \\
0 & 0 & 0.7 & 0 & 0.3 & 0 \\
0 & 0 & 0 & 0.7 & 0 & 0.3 \\
0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix} \\
P^6 &=
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 0 \\
0.90874 & 0.046305 & 0.0 & 0.031752 & 0.0 & 0.013203 \\
0.803845 & 0.0 & 0.120393 & 0.0 & 0.031752 & 0.04401 \\
0.55909 & 0.172872 & 0.0 & 0.120393 & 0.0 & 0.147645 \\
0.391363 & 0.0 & 0.172872 & 0.0 & 0.046305 & 0.38946 \\
0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}
```
Starting with \$2, the probability of having \$5 after 6 turns is given by
$P^6_{36} = 0.04401$
(since the $i$th row of $P$ denotes the state where we have $i-1$ dollars).
Similarly, the probability we will have \$0 after 6 turns is given by
$P^6_{31} = 0.803845$.

[Continue](btn:next)

---
> id: step-20

There are many textbooks that discuss the theory of Markov chains and other
stochastic processes in great detail and trying to summarize these concepts
in this course would certainly be a forlorn attempt. Instead, below we
offer Julia code that outlines how one may simulate a Markov chain process
which can then be used to perform computations.

``` julia
#=
Takes one step in the Markov chain according to the given state's transition
vector.
Inputs:
- transition_vector: An array of length p where the ith element denotes the
                     probability of transitioning into state i from the current
                     state (which is implicitly given).
Outputs:
- An integer in {1,2,..., p} denoting the index of the next state which occurs
with the probability specified in transition_vector.
=#
function one_step(transition_vector)
    cumulative_vector = cumsum(transition_vector)
    state_index = 1
    U = rand()
    while(U > cumulative_vector[state_index])
        state_index += 1
    end

    return state_index
end

#=
Runs a Markov chain a fixed number of times and returns the final state.
Inputs:
- states: An array of length p where each element represents a state of the
          chain. Assumes the ordering is such that the probability of
          transitioning from state i to state j is given by P[i,j].
          Examples:
          [0,1,2,3,4,5]
          ["red", "green", "blue"]
          [0,"blue",3,2]
- P: A (p x p) matrix denoting the transition matrix of the Markov chain.
     Assumes the rows of P sum to 1 and P[i,j] >= 0 for all i,j.
- S0: The initial state of the Markov chain. Assumed to be an element of the
      state variable.
- steps: A nonnegative integer specifying the number of steps for the Markov
         chain to go through.
Outputs:
- An element of the states variable denoting the state the chain is in after
  the specified number of steps.
=#
function run_fixed_simulation(states, P, S0, steps)

    # Define a dictionary mapping state to their index in P
    state_dict = Dict(states[i] => i for i = 1:length(states))

    # Define the current state of the chain
    Sn = S0

    # Run through the specified number of steps
    for i = 1:steps
        state_index = get(state_dict, Sn, -1)
        next_state_index = one_step(P[state_index,:])
        Sn = states[next_state_index]
    end

    return Sn
end

#=
Runs a Markov chain until a state is reached.
Inputs:
- states: Same as defined in ``run_fixed_simulation`` function
- P: Same as defined in ``run_fixed_simulation`` function
- S0: Same as defined in ``run_fixed_simulation`` function
- Sf: An array of states defining a possible final state. Assumed to be a
      subset of the states variable.
Outputs:
- An integer representing the number of steps it took to get to get to state
  contained in the Sf array.
=#
function run_simulation(states, P, S0, Sf)

    # Define a dictionary mapping state to their index in P
    state_dict = Dict(states[i] => i for i = 1:length(states))

    # Define the current state of the chain
    Sn = S0

    # Keep tracks of number of steps taken
    steps = 0

    # Run through the Markov changing
    while !(Sn in Sf) && steps < 1000
        state_index = get(state_dict, Sn, -1)
        next_state_index = one_step(P[state_index,:])
        Sn = states[next_state_index]
        steps += 1
    end

    return steps
end
```

[Continue](btn:next)

---
> id: step-21

Using the code above, we can simulate the gambler's ruin example to estimate
the probability of having \$5 after 6 steps and starting with \$2 as follows:

``` julia
# Define gambler's ruin Markov chain with N = 5 and p = .3

# gambler's ruin state space (χ)
states = [0,1,2,3,4,5]

# Transition matrix for gambler's ruin
P = [1 0 0 0 0 0;
    0.7 0 0.3 0 0 0;
    0 0.7 0 0.3 0 0;
    0 0 0.7 0 0.3 0;
    0 0 0 0.7 0 0.3;
    0 0 0 0 0 1]

# Estimate probability of having $5 after 6 turns when starting with $2
num_simulations = 100000
mc_est = mean([run_fixed_simulation(states, P, 2, 6) ==5
 for i = 1:num_simulations])
```

which outputs $\approx 0.0442$.

[Continue](btn:next)

---
> id: step-22

::: .exercise
**Exercise**

Consider a Markov chain for a two-year master's program with state space
$\Omega = \\\{1,2,G,D\\\}$ where states 1 and 2 represent first and second
year students, respectively, "G" represents a student has graduated and "D"
represents a student has dropped out. Suppose the transition matrix is given by

``` latex
P &=
\begin{bmatrix}
0.2 & 0.5 & 0 & 0.3 \\
0 & 0.3 & 0.6 & 0.1 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
```

where the third and fourth rows represent the "G" and "D" states, respectively.
Using the code above, estimate the average time it takes for a first-year
student to graduate or drop out.

:::

[Continue](btn:next)

---
> id: step-23

*Solution.* The following block of code gives us the desired estimate:

``` julia
# Define masters program Markov chain
states = [1,2,"G","D"]

# Transition matrix for masters Markov chain
P = [0.4 0.5 0 0.1;
     0 0.3 0.6 0.1;
     0 0 1 0;
     0 0 0 1]

mc_est = mean([run_simulation(states, P, 1, ["G", "D"]) for i = 1:10000])
```

which outputs $\approx 2.87$.

---
> id: Random Walks
## Random Walks

In this section we will explore several more properties of Markov chains and
will focus on a special kind of Markov chain. In particular, we will consider
a **random walk** chain $S_0, S_1, S_2, \ldots$ on the integer lattice
$\mathbb{Z}^d$. Intuitively, we can think of the state $S_n$ as the position
of a particle at time $n$ on the lattice. The position at time $n+1$ can
therefore be thought of as a step from state $S_n$, that is,
$S_{n+1} = S_n + X_{n+1}$ where $X_1, X_2, \ldots$ are iid random variables
in $\mathbb{Z}^d$. Note that we can also write
$S_{n+1} = S_0 + \sum_{i=1}^{n+1}X_i$.

We will assume that the starting state of the particle, $S_0$, is deterministic.
Since $S_{n+1} = S_n + X_{n+1}$ and the $X_i$ are assumed to be independent,
it follows that the distribution of the random variable $S_{n+1}$ given the
trajectory $S_0, S_1, \ldots, S_{n-1}$ of the particle is the same as the
distribution of $S_{n+1}$ given the current state $S_n$; in other words,
the sequence $S_0, S_1, S_2, \ldots $ indeed exhibits the Markov property.

[Continue](btn:next)

---
> id: step-24

::: .example
**Example**

Here we will consider the random walk in $\mathbb{Z}$, that is, the random
walk in one dimension. We will assume the particle begins at the origin so that
$S_0 = 0$. Since the particle is in one dimension, it can only move either
left or right. Thus, we will assume $X_i \in \Omega = \\\{-1,1\\\}$ where
$X_i = -1$ means the particle moves to the left and $X_i = 1$ means the
particle moves to the right. We now need to assign a distribution to the set
$\Omega$. We will assume  $\mathbb{P}(X_i = 1) = p$ and
$\mathbb{P}(X_i = -1) = 1 - p$. We can now generate a random walk as follows:

* First, the particle begins at state $S_0 = 0$.

* We then sample $X_1$ according to the distribution on $\Omega$ and set
$S_1 = S_0 + X_1$.

* We again sample $X_2$ according to the distribution on $\Omega$ and set
$S_2 = S_1 + X_2$.

* We repeat the steps indefinitely to obtain each state $S_n$.

The plot below shows five symmetric random walks $(p = 0.5)$ where
the y-axis represents the position of the particle at time $n$.

    figure
      img(src="images/symmetric_random_walks_1d.svg")

For a symmetric random walk starting at $S_0 = 0$ we would expect that after
many steps, the  particle will hover around the origin. More precisely, if
we run many random walks and look at stat $S_n$ for some large $n$, we expect
the distribution of this state to be centered around the origin.
To elucidate this, in the plot below we have simulated 500 random
walks for 100 steps and constructed a histogram of the particles' position
after these 100 steps.

    figure
      img(src="images/symmetric_random_walks_1d_hist.svg")

As we expected, after 100 steps, most particles are concentrated around the
origin.

Similarly, if we construct an asymmetric random walk $(p \neq 0.5)$ then we
would expect the particle to drift toward the direction in which the probabilty
is greates, i.e., if $p > 0.5$ we would expect the particle to drift toward the
right and to the left if $p < 0.5$. Below is a plot of 500 random walk
simulations with $p = 0.7$

    figure
      img(src="images/asymmetric_right_random_walks_1d_hist.svg")

As expected, the particle has drifted upwards. Similarly, below is a plot
of 500 random walk simulations with $p = 0.3$

    figure
      img(src="images/asymmetric_left_random_walks_1d_hist.svg")

Again, we see that the particle has drifted in the direction of greater
probability, in this case left.
:::

[Continue](btn:next)

---
> id: step-25

::: .example
**Example**

We can also visualize a random walk in $\mathbb{Z}^2$, that is, a random walk
in two dimensions. In this case the particle can move left, right, up, or down,
so the state space will be given by
$\Omega = \\\{(-1,0), (1,0), (0,1), (0,-1)\\\}$. We will again assume the particle
starts at the origin so that $S_n = (0,0)$. We need to assign a probability to
each of these. We will let $p_L, p_R, p_U, p_D \geq 0$ represent the
probabilities that a particle moves left, right, up, or down,
[respectively](gloss:respectively) with the assumption
$p_L + p_R + p_U + p_D = 1$.

The plot below depicts a symmetric random walk in 2d with 500 steps.

    figure
      img(src="images/symmetric_random_walk_2d.svg")

As in the one-dimensional case, we would expect the distribution of a state
$S_n$ for a large $n$ to be centered around the origin since we are considering
a symmetric walk. The plots below depict 500 simulated walks followed by a
histogram of the distribution of the state $S_{100}$ superimposed over
the plot of the walks.

    figure
      img(src="images/symmetric_random_walks_2d.svg")

    figure
      img(src="images/symmetric_random_walks_2d_hist.svg")
:::

[Continue](btn:next)

---
> id: step-26

The histograms above allude to an interesting question: if a particle begins
at state $S_0$, will it ever return to that state? Moreover, what is the
probability it will return to this state? Mathematically, we pose the following
question: Given a random walk $S_0, S_1, \ldots$, what is the probability that
there exists $n \geq 1$ such that $S_n = S_0$, in other words, we want to
compute $\mathbb{P}(\exists \\\; n \geq 1 \\\; s.t. \\\; S_n = S_0)$ where
"s.t." here is to be read "such that." We will let
$R := \mathbb{P}(\exists \\\; n \geq 1 \\\; s.t. \\\; S_n = S_0)$.

We will say that state $S_0$ is **recurrent** if $R = 1$, otherwise we will say
$S_0$ is a **transient** state. We will study recurrence and transience in the
context of random walks, but these analyses will hold for any time homogeneous
Markov chain.

For ease of notation, we will assume $S_0 = 0 \in \mathbb{Z}^d$, that is,
we will assume the particle starts at the origin and will study the recurrence
or transience of this state.

[Continue](btn:next)

---
> id: step-27

Note that it is not immediately obvious how to compute $R$ as there are many
ways in which the particle can return to the origin and we are not explicitly
considering the number of times it does so. We will develop a way to compute
$R$ that relies on relies only on the distribution of the random variable $S_n$.
We will begin by letting $\phi_n := \mathbb{P}(S_n = 0)$ and
$\beta := \sum_{n=0}^{\infty} \phi_n$; note that $\phi_0 = 1$ since we
assume the particle starts at the origin. Now we define
$N := |\\\{n > 0 : S_n = 0\\\}|$. In words, $N$ is a random variable
representing the number of times the particle returns to the origin after it
leaves it. Note that we can also express $N$ as the sum of indicator variables:
$\sum_{n=1}^{\infty} \mathbf{1}_{S_n = 0}$. The expected value of $N$ is
therefore given by

``` latex
\mathbb{E}[N] &= \sum_{n=1}^{\infty}
\mathbb{E}\left[\mathbf{1}_{S_n = 0}\right] \\
&= \sum_{n=1}^{\infty} \mathbb{P}(S_n = 0) \\
&= \sum_{n=1}^{\infty} \phi_n \\
&= \left(\sum_{n=0}^{\infty} \phi_n\right) - \phi_0 \\
&= \beta - 1.
```

[Continue](btn:next)

---
> id: step-28

We now seek another equation for $\mathbb{N}$ as a function of $R$ so that we
may relate $R$ and $\beta$ using the equation above. Note that if $N \geq 1$,
this means that the particle has returned to the origin, so
$\mathbb{P}(N \geq 1) = R$. Also, $\mathbb{P}(N \geq 2 | N \geq = 1) = R$
since the
particle has the Markov property, i.e., if it has returned to the origin
already, the future trajectory is as though the particle is just beginning
from the origin. Applying Bayes' rule, we have

``` latex
\mathbb{P}(N \geq 1) &= \mathbb{P}(N \geq 2 | N \geq 1) \\
&= \frac{\mathbb{P}(N \geq 1|N \geq 2)\mathbb{P}(N \geq 2)}
{\mathbb{P}(N \geq 1)} \\
&= \frac{\mathbb{P}(N \geq 2)}{\mathbb{P}(N \geq 1)} \\
&\Rightarrow \mathbb{P}(N \geq 2) = [\mathbb{P}(N \geq 1)]^2 = R^2.
```

A simple inductive argument will show that $\mathbb{P}(N \geq k) = R^k.$
Now recall that for $X \sim Geom(p)$ where $X$ represents number of failures
until a single success and $p$ the probability of success, we have that
$\mathbb{P}(X = k) = p(1-p)^k$ with  $k \in \\\{0,1,2,\ldots\\\}$.
We can compute
$\mathbb{P}(X \geq k) = (1-p)^k$ and $\mathbb{E}[X] = \frac{1-p}{p}$. It follows
$N \sim Geom(1-R)$ and $\mathbb{E}[N] = \frac{R}{1-R}$ so that we obtain

``` latex
\frac{R}{1-R} &= \beta - 1 \\
&\Rightarrow R = 1 - \frac{1}{\beta}.
```

Computing $R$ now reduces to computing $\beta$, though $\beta$ may still be
difficult to compute. However, we may still be able to answer whether the
particle will definitively return to the origin. Note that if
$\beta$ diverges, that is, $\beta \to \infty$, then $R = 1$ which implies
the particle will eventually return to the origin, however, if $\beta = 1$,
then the particle will never return to the origin.

::: .exercise
**Exercise**

If $\beta$ converges, then the particle
[[may or may not return to the origin|will definitely not return to the origin
|definitely will return to the origin]].

:::

[Continue](btn:next)

---
> id: step-29

::: .example
**Example**

Here we will study the recurrence of the one-dimensional random walk origin.
Recall that $X_i \in \{-1, 1\}$ with $\mathbb{P}(X_i = 1) = p$. To compute
$R$, we must compute $\beta$ which requires us to compute $\mathbb{P}(S_n = 0)$
for $n > 1$. First note that because at each time step the particle either
moves left or right (it does not stay still), it is impossible for the
particle to be at the origin at an odd time step, i.e.,
$\mathbb{P}(S_n = 0) = 0$ for $n$ odd. Thus we will focus on computing
$\mathbb{P}(S_{2k} = 0)$ for $k \in \\\{1,2,3,\ldots\\\}$.

Since $S_n = S_0 + \sum_{i=1}^n X_i = \sum_{i=1}^n X_i$, we have that
$S_{2k} = \sum_{i=1}^{2k} X_i$. It follows that
$\mathbb{P}(S_{2k} = 0) = \mathbb{P}\left(\sum_{i=1}^n X_i = 0\right)$. Now note
that the only way $S_{2k} = 0$ is if the particle moved to the left the same
number of times that it moved to the right, i.e., the number of times
that $X_i = -1$ should be the equal to the number of times that $X_i = 1$.
Since $2k$ is even, we want to compute the probability that, after $2k$ steps,
$k$ of them are to the left and $k$ are to the right. Let $X$ be the total
number of steps to the right by the particle after $2k$ steps so that
$X \sim Binom(2k, p)$; we are interested in $\mathbb{P}(X = k)$:

``` latex
\mathbb{P}(S_{2k} = 0) &= \mathbb{P}\left(\sum_{i=1}^n X_i = 0\right) \\
&= \mathbb{P}(X = k) \\
&= {{2k} \choose k}p^k(1-p)^k \\
&= \frac{(2k)!}{(k!)^2}p^k(1-p)^k.
```

From above we have that

``` latex
\beta &= \sum_{k=0}^{\infty} \mathbb{P}(S_{2k} = 0) \\
&= \sum_{k=0}^{\infty} \frac{(2k)!}{(k!)^2}p^k(1-p)^k.
```

To study the asymptotic behavior of the series above, we will use
**Stirling's approximation**, which says that
$n! \approx n^ne^{-n}\sqrt{2\pi n}$. We thus have

``` latex
\frac{(2k)!}{(k!)^2} \approx \frac{4^k}{\sqrt{\pi k}}.
```

Since $\beta = \sum_{k=0}^{\infty} \frac{(2k)!}{(k!)^2}p^k(1-p)^k$, we have
$\beta - 1 = \sum_{k=1}^{\infty} \frac{(2k)!}{(k!)^2}p^k(1-p)^k$ and
invoking Sterling's approximation yields

``` latex
\beta - 1 \approx \sum_{k=1}^{\infty} \frac{[4p(1-p)]^k}{\sqrt{\pi k}}.
```

In the case of the symmetric random walk, we had $p = \frac{1}{2}$. Substituting
this above we obtain

``` latex
\beta - 1 \approx \sum_{k=1}^{\infty} \frac{1}{\sqrt{\pi k}}
```

which diverges by the p-series test. Thus, for the symmetric random walk,
$\beta \to \infty$ and $R = 1 - \frac{1}{\beta} = 1$ which means that the
particle will eventually return to the origin.

For the asymmetric case, we have $p \neq \frac{1}{2}$. Note that the quantity
$p(1-p)$ is largest for $p = \frac{1}{2}$ at which the value is $\frac{1}{4}$.
If $0 < p < 1$, then the quantity $4p(1-p) < 1$ which implies the series
$\sum_{k=1}^{\infty} \frac{[4p(1-p)]^k}{\sqrt{\pi k}}$ converges. Thus $\beta$
is finite which implies $R < 1$ so the particle may or may not return to the
origin.

Based on the analyses above, we would say that the origin is recurrent in the
case of the symmetric random walk and transient in the case of the asymmetric
walk. One can similarly show that the origin of a two-dimensional symmetric
random walk is recurrent, and transient in the asymmetric case. However,
for three dimensions and higher, the origin is no longer recurrent. Showing
this, however, is out of the scope of this course.
:::

[Continue](btn:next)

---
> id: step-30

We can also use Monte Carlo methods to estimate quantities of interest in
random walks. For example, to determine whether the origin is recurrent in
a two-dimensional random walk, we may simulate many random walks and
compute the proportion of walks that return to the origin. Note, however,
that the recurrence of a state is an asymptotic property, i.e., if a state is
recurrent we can only say that the particle will *eventually* return to the
state, but we do not know when or how long it will take to return.

::: .example
**Example**  

The code below simulates 1000 two-dimensional asymmetric random walks with
3000 steps and computes the proportion of walks that return to the origin.

``` julia
#=
Generates a two-dimensional random walk starting at state S0  with s steps
and probability pR of moving right and probability pU of moving up.
Inputs:
- S0: An integer representing the starting state of the chain.
- pL: A number between 0 and 1 representing the probability of the particle
moving to the left.
- pR: A number between 0 and 1 representing the probability of the particle
moving to the right.
- pU: A number between 0 and 1 representing the probability of the particle
moving up.
- pD: A number between 0 and 1 representing the probability of the particle
moving down.
- s: The number of steps to run the walk for.
=#
function two_d_walk(S0, pL, pR, pU, pD, s)

    # Matrix to save the position of the particle
    walk = zeros(s+1,2)
    walk[1,:] = S0

    # Distribution
    cumProb = cumsum([pR, pL, pU, pD])
    # Possible moves in each column
    movesMatrix = [1 0; -1 0; 0 1; 0 -1]

    for i = 2:(s+1)
        U = rand()
        step = [0,0]
        j = 1
        while step == [0,0]
            if U < cumProb[j]
                step = movesMatrix[j,:]
            end
            j += 1
        end
        walk[i,:] = walk[i-1,:] + step
    end

    return walk
end

# Estimate proportion of walks that return to origin
numSimulations = 1000
particleReturned = 0

for i = 1:numSimulations
    walk2d = two_d_walk([0,0], 0.25, 0.25, 0.3, 0.2,  3000)
    global particleReturned +=
    (sum((walk2d[:,1] .== 0) .& (walk2d[:,2] .== 0)) > 1)
end

recurrenceEstimate = particleReturned/numSimulations
```

:::

[Continue](btn:next)

---
> id: step-31

Suppose we play a game where we can either win or lose \$1 with probability $p$
and $1-p$, [respectively](gloss:respectively). Suppose further that we decide
to stop playing the game when we either lose all of our
money, or when we have \$A. We can model this game as a one-dimensional random
walk $S_0, S_1, \ldots \in \mathbb{Z}$ where $\mathbb{P}(X_i = 1) = p$ and
$\mathbb{P}(X_i = -1) := q = 1 - p$. We will assume that
$S_0 \in \\\{0,1, \ldots, A\\\}$, that is, we start the game with an integer
amount of money between 0 and A. We would like to compute the probability that
we eventually walk away with \$A. We will define
$\tau := \\\{n \in \mathbb{N} : S_n \in \\\{0,A\\\}\\\}$.  In the
context of our problem, $\tau$ is the time when we have depleted our financial
resources or have a total of \$A--whichever comes first. Now let
$D = \\\{1,2,\ldots, A-1\\\}$. Then $\tau$ is called the **exit time** from
the region $D$ and represents the first time the walk hits the boundary of $D$.

[Continue](btn:next)

---
> id: step-32

Since we are interested in computing the probability that we walk away with
\$A, we would like to compute $\mathbb{P}(S_{\tau} = A)$. Assuming we start
the game with \$k, that is, $S_0 = k \in \\\{0,1, \ldots, A\\\}$, we will define
$U_k = \mathbb{P}(S_\tau = A | S_0 = k)$. We will solve for $U_k$ via a method
commonly referred to as *first step analysis* in which we will define $U_k$
recursively by considering $U_{k+1}$ and $U_{k-1}$.

Note that $U_0 = \mathbb{P}(S_\tau = A| S_0 = k) = 0$. In words, $U_0$ is the
probability that we eventually leave the game with \$A given that we start with
\$0; since we stop playing when we have \$0, we will never have \$A so
$U_0 = \mathbb{P}(S_\tau = A| S_0 = 0) = 0$. Similarly, $U_A$ is the probability
that we leave the game with \$A assuming that we start with \$A; since we
stop playing when we have \$A,  $U_A = \mathbb{P}(S_\tau = A| S_0 = A) = 1$.
For $k \in D$, we assume that we are still in the game, so we may either win
or lose \$1. Hence, we can employ the Markovian structure of the chain as
follows:

``` latex
U_k &= \mathbb{P}(S_\tau = A | S_0 = k) \\
&= \mathbb{P}(S_\tau = A, S_1 = k + 1 | S_0 = k) +
\mathbb{P}(S_\tau = A, S_1 = k - 1 | S_0 = k) \\
&= \mathbb{P}(S_\tau = A | S_1 = k + 1, S_0 = k)\mathbb{P}(S_1 = k + 1|S_0 = k)
+ \mathbb{P}(S_\tau = A | S_1 = k - 1, S_0 = k)\mathbb{P}(S_1 =k - 1|S_0 = k) \\
&= \mathbb{P}(S_\tau = A | S_1 = k + 1)p
+ \mathbb{P}(S_\tau = A | S_1 = k - 1)q \\
&= pU_{k+1} + qU_{k-1}.
```

[Continue](btn:next)

---
> id: step-33

Note that we defined $U_k = \mathbb{P}(S_\tau = A | S_0 = k)$, which
implies $U_{k+1} = \mathbb{P}(S_\tau = A | S_0 = k+1)$, but above in the
last equation above we said $\mathbb{P}(S_\tau = A | S_1 = k+1) = U_{k+1}$.
This is because once the walk reaches the state $k+1$, computing the probability
the walk eventually reaches state $A$ is equivalent to considering the
probability the walk reaches state $A$ when starting at state $S_0 = k + 1$;
note that the Markovian structure is what allows this. Thus, we have the
following system of $A+1$ equations:

``` latex
U_0 &= 0 \\
U_k &= pU_{k+1} + qU_{k-1}, \;\; k \in D \\
U_A &= 1.
```

which can be written in matrix form as

``` latex
Mu = b
```

where

``` latex
M \in \mathbb{R}^{(A+1)\times (A+1)} &=
\begin{bmatrix}
1 & 0 & 0 & 0 & \cdots & 0 \\
q & -1 & p & 0 & \cdots & 0 \\
\vdots & \vdots & \vdots & \vdots & \ddots & \vdots \\
0 & \cdots & 0 & q & -1 & p \\
0 & \cdots & 0 & 0 & 0 & 1
\end{bmatrix} \\
u \in \mathbb{R}^{A+1} &= [U_0, U_1, \ldots, U_{A-1}, U_A]^T \\
b \in \mathbb{R}^{A+1} &= [0, 0, \ldots, 0, 1]^T.
```

Note that $M$ has full rank and is therefore invertible. It follows that
the system has a unique solution given by $u = M^{-1}b$. Solving the system
above immediately gives us the probability of walking away from the game
with \$A starting with any amount of money $k \in \\\{1,2,\ldots, A-1\\\}$
as illustrated below.

[Continue](btn:next)

---
> id: step-34

::: .example
**Example**  

Suppose you play the game above starting with \$500 and you will play until you
either have \$0 or \$600. We will compute the probability of walking away with
\$600 assuming $p = 0.49$.

We first construct the matrix $M \in \mathbb{R}^{751 \times 751}$ and the
vector $b \in \mathbb{R}^{751}$ as defined above. The Julia code below
produces these matrices and computes $M^{-1}b$.

``` julia
# Define exit time
A = 600

# Starting amount of money (S0)
k = 500

# Define probability of winning
p = .49
q = 1 - p

# Define b vector
b = zeros(A + 1)
b[A+1] = 1

# Define M matrix
M = zeros(A+1, A+1)
M[1,1] = 1
M[A+1,A+1] = 1

for i=2:A
    global M, q, p
    M[i,i] = -1
    M[i,i-1] = q
    M[i,i+1] = p
end

# Compute exit probabilities by computing M^(-1)b
u = M\b

# Get probability of interest
using Printf
@printf("Probability of walking away with \$%g: %f", k,
 u[k+1])
```

Running the above yields $U_{500} \approx 0.018$: even when the probability of
winning is close to 0.5, the probability we increase our wealth by \$100
is still less than 2%!
:::

[Continue](btn:next)

---
> id: step-35

We will now turn our attention to stochastic approximation with Markov chains.
Let $S_0, S_1, S_2, \ldots$ be a time homogeneous Markov chain with finite
state space  $\Omega = \\\{a_1, a_2, \ldots, a_L\\\}$. We will assume that $S_0$
is chosen randomly based on some distribution over $\Omega$.

[Continue](btn:next)

---
> id: step-36

::: .example
**Example**  

Consider the Markov chain $S_0, S_1, S_2, \ldots$ with state space
$\Omega = \\\{a_1,a_2,a_3,a_4\\\}$ and transition matrix

``` latex
P &=
\begin{bmatrix}
0.1 & 0.1 & 0.4 & 0.4 \\
0.1 & 0.2 & 0.3 & 0.4 \\
0.4 & 0.3 & 0.15 & 0.15 \\
0.4 & 0.4 & 0.15 & 0.05
\end{bmatrix}.
```

Suppose the chain begins at $S_0 = a_2$. Below we simulate $10^5$ chains and
create a histogram of the 100th state.

    figure
      img(src="images/invariant_measure_hist_1.svg")

Now suppose that the chain begins at $S_0 = a_4$. We again simulate $10^5$
chains and construct a histogram of the 100th state.

    figure
      img(src="images/invariant_measure_hist_2.svg")

We see that regardless of where the chain begins, the distribution of the
100th state is approximately uniform across all four states.
:::

In the example above we see that after the chain has ran for a sufficiently
long time (this time period is sometimes called the "burn-in" period),
the distribution of a given step is
uniform across all states. The distribution $\mu(a_i) = \frac{1}{4}$ for
$i=1,2,3,4$ is said to be an **invariant measure** for the Markov chain in the
example above.

[Continue](btn:next)

---
> id: step-37

To perform stochastic approximations with Markov chains, we will introduce a
function $f: \Omega \to \mathbb{R}$ called a *payoff function*. Suppose we let a
Markov chain run for $n$ steps to obtain $S_1, S_2, \ldots, S_n$ and then
compute $\frac{1}{n}\sum_{i=1}^n f(S_i)$. What is the asymptotic behavior of
this quantity? While it may be tempting to invoke the law of large numbers,
note that the $S_i$ are not independent so the law of large numbers does not
apply. However, for a Markov chain with invariant measure $\mu$, we have the
following result:

``` latex
\lim_{n \to \infty} \frac{1}{n}\sum_{i=1}^n f(S_i) &=
\sum_{l=1}^L f(a_l)\mu(a_l).
```

It is natural to ask if any time homogeneous Markov chain has an invariant
measure, and if it does, is it unique? The theorem below gives the criterion
for the existence and uniqueness of an invariant measure.

::: .theorem
**Theorem**  (Detailed Balance Theorem)

Let $S_0, S_1, S_2, \ldots$ be a time homogeneous Markov chain with finite
state space $\Omega = \\\{a_1, a_2, \ldots, a_L\\\}$. Let $P$ be the transition
probability matrix of the chain and suppose that:

* There exists $k \in \mathbb{N}$ such that $P^k_{ij} > 0$ for all $i,j$, i.e.,
there exists some $k$ such that the matrix obtained after multiplying $P$ by
itself $k$ times has all strictly positive entries.

* There exists a distribution $\mu$
(.i.e. a vector $[\mu(a_1), \mu(a_2), \ldots, \mu(a_L)]$ satisfying
$\sum_{l=1}^L \mu(a_l) = 1$ and $\mu(a_i) > 0$ for all $i$) satisfying
the detailed balance equation:

``` latex
P_{ij}\mu(a_i) &= P_{ji}\mu(a_j) \;\; \forall i,j.
```


Then $\mu$ is the unique invariant measure of $P$ and we have that

* For all initial states $S_0$:
``` latex
\mathbb{P}(S_n = a_i) \to \mu(a_i).
```

* For arbitrary payoff function $f: \Omega \to \mathbb{R}$:
``` latex
\lim_{n \to \infty} \frac{1}{n}\sum_{i=1}^n f(S_i)
&= \sum_{l=1}^L f(a_l)\mu(a_l).
```
:::

[Continue](btn:next)

---
> id: step-38

::: .example
**Example**

Here we show that $\mu(a_i) = \frac{1}{4}$ for $i=1,2,3,4$ is an invariant
measure for the Markov chain in the previous example.

* First note that $P$ already has all strictly positive entries, so $P$
satisfies the first detailed balance condition with $k = 1$.

* Note that $P$ is a symmetric matrix, so $P_{ij} = P_{ji}$. Moreover, $\mu$
is the discrete uniform distribution so $\mu(a_i) = \mu(a_j)$ for all $i,j$.
Thus the detailed balance equation $P_{ij}\mu(a_i) = P_{ji}\mu(a_j)$ is
satisfied.
:::

Suppose $P$ is a symmetric transition probability matrix such that there exists
$k \in \mathbb{N}$ satisfying $P^k_{ij} > 0$ for all $i,j$. Then the uniform
distribution over the state space is an invariant measure for $P$
[[true|flase]].

[Continue](btn:next)

---
> id: step-39

Our study of invariant measures and Markov chains allows us to estimate
expressions of the form $\sum_{l=1}^L f(a_l)\mu(a_l)$. This is just a finite
summation, which should be relatively easy to compute explicitly. However,
we would like to estimate this expression for some arbitrary distribution $\mu$,
which would require us to have a Markov chain with this invariant measure, but
how do we obtain this chain? This is the topic of the next section. Moreover,
we will see that what we discuss in the discrete setting extends to the
continuous setting which will allow us to estimate integrals of the form
$\int_{\mathbb{R}^d} f(x)\rho(x)dx$ for arbitrary
$\rho: \mathbb{R}^d \to [0, \infty)$.

---
> id: MCMC
## Markov Chain Monte Carlo

In this section our goal will be to construct a Markov chain whose invariant
measure is $\mu$, which we call a **target distribution**. We will then use
the obtained Markov chain to estimate integrals. We assume we have the
following:

* A discrete, fintie state space $\Omega = \\\{a_1, a_2, \ldots, a_L\\\}$.

* A target distribution $\mu = [\mu(a_1), \ldots, \mu(a_L)] \in \mathbb{R}^L$
where
``` latex
\mu(a_i) &\geq 0 \;\; \forall i \in \{1,2,\ldots,L\} \\
\sum_{i=1}^L \mu(a_i) &= 1
```

* A payoff function $f: \Omega \to \mathbb{R}$.


After obtaining the chain with invariant measure $\mu$, our aim will be to
estimate $\sum_{l=1}^L f(a_i)\mu(a_i)$. As mentioned in the previou section,
our discussion here will extend to the continuous setting which will allow
us to estimate integrals.

[Continue](btn:next)

---
> id: step-40

If a given Markov chain has an invariant measure, then it is unique. However,
given an invariant measure, there may be multiple Markov chains with this
invariant measure. Here we will restrict our attention to Markov chains
generated by the so-called **Metropolis-Hastings Algorithm**.

The Metropolis-Hastings algorithm takes three inputs:

1. A finite state space $\Omega$.

2. A target distribution $\mu$ on $\Omega$.

3. A transition probability matrix $Q \in \mathbb{R}^{|\Omega| \times |\Omega|}$
called the "proposal distribution." We will use the notation
$Q(a_i, a_j) = \mathbb{P}(S_1 = a_j | S_0 = a_i)$, that is,
$Q(a_i,a_j)$ is the probability of going from state $a_i$ to $a_j$ in one step.

[Continue](btn:next)

---
> id: step-41

After choosing $S_0 \in \Omega$, either deterministically or probabilistically,
the Metropolis-Hastings algorithm produces the states $S_{k+1}, k \geq 0$
as follows:

1.  Propose (sample) $Y \sim Q(S_k, \cdot)$, i.e., $Y$ is sampled from $\Omega$
according to the distribution on $\Omega$ given by the row of $Q$ corresponding
to $S_k$.

2. Compute "acceptance probability" given by:
``` latex
\alpha(S_k, Y) := \textrm{min}\left\{
    1, \frac{Q(Y,S_k)\mu(Y)}{Q(S_k,Y)\mu(S_k)}
    \right\}.
```

3. Set $S_{k+1}$ to either $Y$ or $S_k$ by flipping a biased coin with
probability $\alpha(S_k,Y)$, i.e., sample $X \sim Bernoulli(\alpha(S_k,Y))$
and set
``` latex
S_{k+1} &=
\begin{cases}
Y, & \textrm{if } X = 1 \\
S_k, & \textrm{otherwise.}
\end{cases}
```

Note the following important observations about the acceptance probability:

* If $\mu(Y) > \mu(S_k)$, then we would like the chain to visit $Y$ more often
than $S_k$ so that the chain explores the region where $\mu$ is large more
often. This is indeed the case as the probability of accepting state $Y$
increases when $\mu(Y) > \mu(S_k)$.

* When $Q(Y, S_k) > Q(S_k, Y)$, the probability of accepting state $Y$
increases. This is favorable because this means that state $Y$ is difficult to
reach and we would like to visit rare states as this leads to a larger state
exploration.

[Continue](btn:next)

---
> id: step-42

We claim that the transition probability matrix of the Markov chain generated
by the Metropolis Hastings algorithm is given by

``` latex
P_{ij} = P(a_i, a_j) = \alpha(a_i, a_j)Q(a_i, a_j) +
\left[\sum_{l=1}^L (1- \alpha(a_i,a_l))Q(a_i, a_l)\right]\mathbf{1}_{i=j}.
```

We justify this claim below.

[Continue](btn:next)

---
> id: step-43

First suppose that $i \neq j$. Then to go from state $a_i$ to state $a_j$, the
Metropolis Hastings algorithm first needs to propose state $a_j$, which occurs
with probability $Q(a_i,a_j)$. We then need to accept the proposal which occurs
with probability $\alpha(a_i, a_j)$. Thus, the probability of transitioning
from state $a_i$ to state $a_j$ is given by
``` latex
P_{ij} &= \mathbb{P}(\textrm{accept } a_j, \textrm{propose } a_j|
    \textrm{chain is at } a_i) \\
&= \mathbb{P}(\textrm{accept } a_j|\textrm{propose } a_j,
     \textrm{chain is at } a_i)\mathbb{P}(\textrm{propose } a_j|\textrm{chain is at } a_i) \\
&= \alpha(a_i, a_j)Q(a_i, a_j).
```

[Continue](btn:next)

---
> id: step-44

Now suppose that $i=j$. Then to go from state $a_i$ to state $a_i$, there are
two possible cases:

1. In this case, we propose and accept state $a_i$ from state $a_i$, which
occurs with probability $Q(a_i, a_i)$ and $\alpha(a_i, a_i)$, respectively.
Thus, in this case, the probability
of going from state $a_i$ to state $a_i$ is $\alpha(a_i,a_i)Q(a_i, a_i)$.

2. In this case we propose state $a_l$ where $l \neq i$ and reject it, so we
stay at state $a_i$. For state $a_l$, the probability of proposing it from state
$a_i$ is $Q(a_i, a_l)$ and the probability of rejecting this proposal is
$1 - \alpha(a_i, a_l)$. Therefore, accounting for all states, the probability
of going from state $a_i$ to state $a_i$ in this case is given by
``` latex
\sum_{l=1}^L (1- \alpha(a_i,a_l))Q(a_i, a_l).
```


Note that $\alpha(a_i,a_i) = 1$ so for $l = i$ above the term is ignored.

Thus, for $i = j$ we have

``` latex
P_{ii} &= \alpha(a_i,a_i)Q(a_i, a_i) +
\sum_{l=1}^L (1- \alpha(a_i,a_l))Q(a_i, a_l).
```

This concludes our proof that the transition probability matrix for the
Metropolis-Hastings algorithm is given by:

``` latex
P_{ij} = P(a_i, a_j) = \alpha(a_i, a_j)Q(a_i, a_j) +
\left[\sum_{l=1}^L (1- \alpha(a_i,a_l))Q(a_i, a_l)\right]\mathbf{1}_{i=j}.
```

[Continue](btn:next)

---
> id: step-45

With the transition probability matrix at hand, we now show that it has
invariant measure $\mu$ by showing that $P$ satisfies the detailed balance
theorem.

We first need to show that there exists some $k \in \mathbb{N}$ such that
$P^k_{ij} > 0$ for all $i,j$. If we assume that $Q(a_i, a_j) > 0$ for all
$i,j$, then by the definition of $P$ we will have that $P_{i,j} > 0$ so
the first condition of the detailed balance theorem is satisfied.

The second condition of the detailed balance theorem requires
$P(a_i,a_j)\mu(a_i) = P(a_j,a_i)\mu(a_j)$. We will show that $P$ indeed
satisfies this condition by considering two cases:

1. Here we will assume that $i=j$. Then we have
$P(a_i,a_i)\mu(a_i) = P(a_i,a_i)\mu(a_i)$ so the second condition of the
detailed balance theorem is trivially satisfied.

2. Here we will assume that $i \neq j$.
We would like to show that the following two equations are equal:
```latex
\begin{cases}
P(a_i,a_j)\mu(a_i) &= \alpha(a_i,a_j)Q(a_i,a_j)\mu(a_i) \\
P(a_j,a_i)\mu(a_j) &= \alpha(a_j,a_i)Q(a_j,a_i)\mu(a_j).
\end{cases}
```
We will consider two subcases:
* Here we assume that $\alpha(a_i,a_j) < 1$. By the definition of
$\alpha(a_i,a_j)$, we have
``` latex
\alpha(a_i,a_j) &= \textrm{min}
\left\{
1, \frac{Q(a_j,a_i)\mu(a_j)}{Q(a_i,a_j)\mu(a_i)}
\right\}
```
but since we assume $\alpha(a_i,a_j) < 1$, this implies
$\alpha(a_i,a_j) = \frac{Q(a_j,a_i)\mu(a_j)}{Q(a_i,a_j)\mu(a_i)}$.
It follows that
``` latex
\frac{Q(a_j,a_i)\mu(a_j)}{Q(a_i,a_j)\mu(a_i)} &< 1 \\
\Rightarrow \frac{Q(a_i,a_j)\mu(a_i)}{Q(a_j,a_i)\mu(a_j)} &> 1.
```
Now, by the definition of $\alpha(a_j,a_i)$ and the above, we have
``` latex
\alpha(a_j,a_i) &= \textrm{min}
\left\{
1, \frac{Q(a_i,a_j)\mu(a_i)}{Q(a_j,a_i)\mu(a_j)}
\right\} \\
&= 1.
```
Note that because
$\alpha(a_i,a_j) = \frac{Q(a_j,a_i)\mu(a_j)}{Q(a_i,a_j)\mu(a_i)}$, we have
that
``` latex
P(a_i,a_j)\mu(a_i) &= \frac{Q(a_j,a_i)\mu(a_j)}{Q(a_i,a_j)\mu(a_i)}Q(a_i,a_j)
\mu(a_i) \\
&= Q(a_j,a_i)\mu(a_j)
```
and because $\alpha(a_j,a_i) = 1$, we have
``` latex
P(a_j,a_i)\mu(a_j) &= Q(a_j,a_i)\mu(a_j).
```
Thus we conclude that $P(a_i,a_j)\mu(a_i) = P(a_j,a_i)\mu(a_j)$ so the detailed
balance theorem holds in this case.

* Now we assume that $\alpha(a_i,a_j) = 1$. This immediately implies
``` latex
P(a_i,a_j)\mu(a_i) &= Q(a_i,a_j)\mu(a_i).
```
By the definition of $\alpha(a_i,a_j)$ we have
``` latex
\alpha(a_i,a_j) = \textrm{min}
\left\{
1, \frac{Q(a_j,a_i)\mu(a_j)}{Q(a_i,a_j)\mu(a_i)}
\right\} &= 1 \\
\Rightarrow \frac{Q(a_j,a_i)\mu(a_j)}{Q(a_i,a_j)\mu(a_i)} &\geq 1 \\
\Rightarrow \frac{Q(a_i,a_j)\mu(a_i)}{Q(a_j,a_i)\mu(a_j)} &\leq 1.
```
From above, it follows
``` latex
\alpha(a_j,a_i) &= \textrm{min}
\left\{
1, \frac{Q(a_i,a_j)\mu(a_i)}{Q(a_j,a_i)\mu(a_j)}
\right\} \\
&= \frac{Q(a_i,a_j)\mu(a_i)}{Q(a_j,a_i)\mu(a_j)}.
```
Thus,
``` latex
P(a_j,a_i)\mu(a_j) &= \alpha(a_j,a_i)Q(a_j,a_i)\mu(a_j) \\
&= \frac{Q(a_i,a_j)\mu(a_i)}{Q(a_j,a_i)\mu(a_j)}Q(a_j,a_i)\mu(a_j) \\
&= Q(a_i,a_j)\mu(a_i)
```
so we see that the detailed balance theorem holds in this case.

We have now shown that the detailed balance theorem holds for $P$ so $\mu$
is indeed the invariant measure for $P$.

[Continue](btn:next)

---
> id: step-46

We will now extend the discrete Metropolis-Hastings algorithm to the continuous
setting. We will replace the discrete distribution $\mu$ with the density
$\rho: \mathbb{R}^d \to [0, \infty)$ and the states
$S_0, S_1, \ldots \in \mathbb{R}^d$. Our goal is now is to approximate integrals
of the form
``` latex
\int_{\mathbb{R}^d} f(x)\rho(x)dx
```
for arbitrary function $f: \mathbb{R}^d \to \mathbb{R}$.

[Continue](btn:next)

---
> id: step-47

Recall that in the discrete setting, the proposal distribution $Q(a_i,a_j)$
gave us the probability of transitioning from state $a_i$ to state $a_j$
in one step. We can therefore think of $Q(a_i,a_j)$ as the conditional
probability of moving to state $a_j$ given that we are at state $a_i$.
To this end, in the continuous setting, $Q$ can be thought of as a joint
distribution with conditional densities $q(y|x)$. Thus, the continuous
Metropolis-Hastings algorithm is as follows:

First we define $S_0 \in \mathbb{R}^d$ either deterministically or
probabilistically. We then obtain $S_{k+1}$ for $k \geq 0$ as follows:

1. Propose (sample) $Y \sim q(\cdot | S_k)$.

2. Compute acceptance probabilty:
``` latex
\alpha(S_k,Y) := \textrm{min}
\left\{
    1, \frac{q(Y|S_k)\rho(Y)}{q(S_k|Y)\rho(S_k)}
\right\}.
```

3. Set $S_{k+1}$ to either $Y$ or $S_k$ with probability $\alpha(S_k,Y)$ and
$1 - \alpha(S_k,Y)$, respectively. In other words, sample
$X \sim Bernoulli(\alpha(S_k,Y))$ and set
``` latex
S_{k+1} &=
\begin{cases}
Y, & \textrm{if } X = 1 \\
S_k, & \textrm{otherwise.}
\end{cases}
```


*Remark*: A common choice of $q(y|x)$ is $N(x, b^2)$ for some $b > 0$,
i.e., the proposal will be drawn from a normal distribution centered at the
current value $x$ with variance $b^2$.

*Remark*: Note that if the distribution $q(y|x)$ is symmetric, i.e.,
$q(y|x) = q(x|y)$, then the acceptance probabilty simplifies to
$\alpha(S_k,Y) = \textrm{min}
\left\\\{
    1, \frac{\rho(Y)}{\rho(S_k)}
\right\\\}$.

[Continue](btn:next)

---
> id: step-48

::: .example
**Example**  

Here we will draw samples from the gamma distribution with parameters
$k, \theta > 0$ and density
``` latex
\rho(x) &= \frac{1}{\Gamma(x)\theta^k} x^{k-1}e^{-\frac{x}{\theta}}
```

via the Metropolis-Hastings algorithm.

We will use the normal distribution suggested above for $q(y|x)$:
``` latex
q(y|x) &= \frac{1}{\sqrt{2\pi b^2}}e^{-\frac{(x-y)^2}{2b^2}}
```
Note that $q(y|x)$ is symmetric, so our acceptance probability simplifies to
``` latex
\alpha(S_k,Y) &= \textrm{min}
\left\{
    1, \frac{\rho(Y)}{\rho(S_k)}
\right\}.
```

Also, since $Y \sim N(S_k, b^2)$, it is enough to sample $\xi \in N(0, b^2)$
and set $Y = S_k + \xi$ (hence the reason for this flavor of
Metropolis-Hastings sometimes being referred to as the **random walk sampler**).

There is one more thing we need to do before implementing our algorithm. Note
that by definition, $Y \in \mathbb{R}$, but the gamma distribution is undefined
for negative values. To force $Y \in [0,\infty)$, we need to modify $\rho(x)$
so that it is 0 for negative values. In particular, we will set

``` latex
\rho(x) &= \frac{1}{\Gamma(x)\theta^k} x^{k-1}e^{-
    \frac{x}{\theta}}\mathbf{1}_{x \geq 0}.
```

We will begin by setting $S_0 \in \mathbb{R}$ and produce $S_{k+1}$ for
$k \geq 0$ as follows:

1. Sample $\xi \sim N(0,b^2)$ and set $Y = S_k + \xi$.

2. Compute
``` latex
\alpha(S_k, Y) &= \textrm{min}
\left\{
    1, \frac{\rho(Y)}{\rho(S_k)}
\right\}.
```

3. Sample $X \sim Bernoulli(\alpha(S_k,Y))$ and set
``` latex
S_{k+1} &=
\begin{cases}
Y, & \textrm{if } X = 1 \\
S_k, & \textrm{otherwise.}
\end{cases}
```

The code below produces 1000 samples with $b = 2$:

``` julia
using Distributions

# Gamma distribution
k = 3
θ = 2
ρ(x) = x > 0 ? 1/(2*θ^k)*x^(k-1)*exp(-x/θ) : 0

#=
Implementation of random walk sampler Metropolis-Hastings.
Inputs:
- n: The number of states to return
- b: The standard deviation of the normal distribution used in the proposal     
     distribution
Outputs:
- Returns an array of length n denoting states S_i in Metropolis-Hastings alg.
=#
function metropolis_hastings(n, b)

    # Samples
    samples = zeros(n)
    samples[1] = rand()

    # Conditional Q distribution
    d = Normal(0,b)

    for i=2:n
        # Propose Y
        ξ = rand(d)
        Y = samples[i-1] + ξ

        # Acceptance probability
        α = min(1, ρ(Y)/ρ(samples[i-1]))

        # Next state
        if rand() < α
            samples[i] = Y
        else
            samples[i] = samples[i-1]
        end
    end

    return samples
end

# Obtain 1000 samples with b = 2
S = metropolis_hastings(1000,2)
```

The choice of $b$ leads to the dilemma of "exploration vs. exploitation." A
small $b$ would mean the sample $Y = S_k + \xi$ does not differ much from
$S_k$; hence, the acceptance probability is large, but since the increment is
small, this leads to poor exploration of the state space.
Conversely, a large $b$ implies a low acceptance probability which means the
chain tends to get "stuck" in its current state and when it does change to a
different state, the jump tends to be large leading to low exploitation of the
state space but large exploration.


To determine an appropriate $b$ we will make **trace plots** of the chain, i.e.,
a plot of $S_k$ versus $k$. Below we set $b = 0.1$ and plot a histogram of
the obtained samples along with $\rho(x)$. We note that the samples do not
match the gamma distribution well and the trace plot reveals the chain is not
exploring the state space well enough as it is taking steps that are too small.

    figure
      img(src="images/mh_sampling_1_0.svg")

Below we set $b = 2$. In the trace plot we see a much larger state exploration
(the y axis varies from 0 to 17) while exhibiting good exploitation
(the chain is not getting stuck in place). Moreover, the histogram of the
samples matches $\rho(x)$ well.

    figure
      img(src="images/mh_sampling_1_1.svg")

Below we set $b = 16$. In the trace plot we still see a large state exploration,
but the chain tends to get stuck much more often as depicted by the flat regions
in the plot. Moreover, the histogram of the samples does not match $\rho(x)$
as well as it did with $b = 2$. As such, we conclude the optimal $b$ is close
to 2.

    figure
      img(src="images/mh_sampling_1_2.svg")
:::

In the example above, a small value of $b$ would lead to
[[more proposal acceptances|more proposal rejections]].

[Continue](btn:next)

---
> id: step-49

::: .example
**Example**  

This is our first example of MCMC applied to the estimation of integrals. We
will estimate the following integral

``` latex
\int_{-\infty}^{\infty} |\cos(x)|e^{-x^2}dx.
```

We will let $f(x) = |\cos(x)|$. Recall that the Monte Carlo estimator
$\frac{1}{n}\sum_{k=1}^n f(S_k)$ converges to $\int_{\mathbb{R}}f(x)\rho(x)dx$
so we need to specify $\rho(x)$ to mimic the structure of the integral of
interest. We will choose $\rho(x) = \frac{1}{\sqrt{2\pi
    \left(\frac{1}{\sqrt{2}}\right)^2}}e^{-
        \frac{x^2}{2\left(\frac{1}{\sqrt{2}}\right)^2}} =
        \frac{1}{\sqrt{\pi}}e^{-x^2}$.

With this choice we will have     

``` latex
\lim_{n\to \infty} \sqrt{\pi} \frac{1}{n}\sum_{i=1}^n f(S_k) &=
\int_{-\infty}^{\infty} |\cos(x)|e^{-x^2}dx.
```

We will recycle the code from the previous example to obtain the samples $S_k$
according to the new $\rho(x)$ and then compute
$\frac{\sqrt{\pi}}{n}\sum_{i=1}^n f(S_k)$. The code used is given below:

``` julia
using Distributions

# ρ(x) target density
ρ(x) = 1/sqrt(π)*exp(-x^2)

#=
Implementation of random walk sampler Metropolis-Hastings.
Inputs:
- n: The number of states to return
- b: The standard deviation of the normal distribution used in the proposal
     distribution
Outputs:
- Returns an array of length n denoting states S_i in Metropolis-Hastings alg.
=#
function metropolis_hastings(n, b)

    # Samples
    samples = zeros(n)
    samples[1] = rand()

    # Conditional Q distribution
    d = Normal(0,b)

    acceptances = 0

    for i=2:n
        # Propose Y
        ξ = rand(d)
        Y = samples[i-1] + ξ

        # Acceptance probability
        α = min(1, ρ(Y)/ρ(samples[i-1]))

        # Next state
        if rand() < α
            samples[i] = Y
        else
            samples[i] = samples[i-1]
        end
    end

    return samples
end

# Obtain 1000 samples with b = 2
S = metropolis_hastings(10000,2)

# f(x) in integrand
f(x) = abs(cos(x))

# Estimate integral
int_estimate = sqrt(π)*mean([f(x) for x in S])
```

The true value of the integral is 1.40237 and our estimate after 10000 samples
is 1.3954.

Now suppose we would like to estimate the following integral:

``` latex
\int_{-\frac{1}{2}}^2 |\cos(x)|e^{-x^2}dx.
```

We can simply change $f(x) = |\cos(x)|\mathbf{1}_{-\frac{1}{2} < x < 2}$ and
repeat the procedure above. Doing this yields an estimate of approximately
1.15 after 10000 samples while the true value of the integral is approximately
1.14.
:::


We previously alluded to the time it takes for a chain obtained from the
Metropolis-Hastings algorithm to "mix." Indeed, the initialization bias may
influence the error of our estimate and it is often good practice to ignore
the first few states of the chain and use the later states in our estimator.
Mathematically, we choose $M$ sufficiently large and our MCMC estimator becomes

``` latex
\frac{1}{n - M}\sum_{k=M+1}^{n} f(S_k).
```

[Continue](btn:next)

---
> id: step-50

::: .example
**Example**  

Here we will estimate the following double integral:

``` latex
\int_0^1 \int_0^2 e^{\sin(xy)}dydx.
```

We let $f(x,y) = e^{\sin(xy)}$. We need the support of $\rho$ to contain
the domain of integration. Moreover, since we are considering a double integral,
we need $\rho: \mathbb{R}^2 \to \mathbb{R}$. A natural choice is to consider
the joint density of a uniform distribution on $[0,1]$ and another uniform
distribution on $[0,2]$ to have $\rho(x,y) = \frac{1}{2}$. Moreover, the
random walk sampler with a normal proposal distribution will be modified so that $S_{k+1} = S_k + \xi$ where $\xi \sim N(0,b^2 I)$ and $I$ is the
$2 \times 2$ identity matrix; in other words, $\xi$ is sampled from a
bivariate normal distribution with covariance matrix $b^2I$. The MCMC estimator
will there converge to

``` latex
\frac{1}{n}\sum_{k=1}^n f(S_k) \to
\frac{1}{2}\int_0^1 \int_0^2 e^{\sin(xy)}dydx.
```

For some $M$ sufficiently large, our estimator for the integral will
therefore be

``` latex
\frac{2}{M - n}\sum_{k=M+1}^n f(S_k).
```

The Julia code below implements this:

``` julia
using Distributions

# ρ(x,y) target density
ρ(x,y) = (0 < x < 1) && (0 < y < 2) ? 1/2 : 0

#=
Implementation of random walk sampler Metropolis-Hastings.
Inputs:
- n: The number of states to return
- b: The standard deviation of the normal distribution used in the proposal
     distribution
Outputs:
- Returns an array of length n denoting states S_i in Metropolis-Hastings alg.
=#
function metropolis_hastings(n, b)

    # Samples
    samples = zeros(n,2)
    samples[1,:] = rand(2)

    # Conditional Q distribution
    d = Normal(0,b)

    acceptances = 0

    for i=2:n
        # Propose Y
        ξx = rand(d)
        ξy = rand(d)
        X = samples[i-1,1] + ξx
        Y = samples[i-1,2] + ξy

        # Acceptance probability
        α = min(1, ρ(X,Y)/ρ(samples[i-1,1],samples[i-1,2]))

        # Next state
        if rand() < α
            samples[i,1] = X
            samples[i,2] = Y
        else
            samples[i,:] = samples[i-1,:]
        end
    end


    return samples
end

# Obtain 10000 samples with b = 1
S = metropolis_hastings(10000,1)

# f(x) in integrand
f(x,y) = exp(sin(x*y))

# Estimate integral
M = 1000
int_estimate = 2*mean([f(x,y) for (x,y) in
zip(S[M:end,1], S[M:end,2])])
```

The true value of the integral is approximately 3.218 while our estimator
yields 3.214.
:::

---
> id: mcmcalgs
## MCMC Algorithms

The goal of MCMC is to generate a Markov chain whose invariant measure is
$\rho$, i.e., if $S_k \sim \rho$, then $S_{k+1} \sim \rho$.
All MCMC methods will rely on the following:

1. An initial sample (vector) $S_0 \in \Omega$ where $\Omega$ is the state
space.

2. A rule that determines how to obtain $S_{k+1}$ from $S_k$. This is the
transition probability matrix $Q(S_{k+1}|S_k)$. This rule should guarantee that
as $k$ grows, $S_k$ begins to behave like a sample from the target distribution
$\rho$.

Then for the Markov chain $S_0,S_1,S_2,\ldots$ with invariant measure $\rho$
and function $f: \Omega \to \mathbb{R}$, we have the "law of large numbers for
Markov chains":

``` latex
\lim_{k \to \infty} \frac{1}{k}\sum_{i=1}^k f(S_i) &=
\int_{\Omega} f(x) \rho(x) dx
```

which allows us to estimate integrals (often we are interested in computing
expectations).

In the previous section we introduced the Metropolis Hastings algorithm.
Here we will explore more MCMC algorithms and discuss when one might be used
over another.

### Gibbs Sampler

For simplicity, suppose $S_k = (X_k,Y_k)$, that is, the Markov chain lives in
$\mathbb{R}^2$ and $\rho: \mathbb{R}^2 \to \mathbb{R}$ is the target
distribution. We assume that we can sample from the distribution of $X$ given
$Y$, $\rho{X|Y}(x|y)$, and the distribution of $Y$ given $X$, $\rho_{Y|X}(y|x)$.
Then we will obtain $S_{k+1} = (X_{k+1},Y_{k+1})$ as follows:

``` latex
X_{k+1} &\sim \rho_{X|Y}(\cdot| Y = Y_k) \\
Y_{k+1} &\sim \rho_{Y|X}(\cdot| X = X_{k+1}) \\
```

In words, the first variable sample, $X_{k+1}$, is obtained by sampling from the
conditional distribution of $X$ given the previous sample of $Y$. Then, to
obtain the second variable sample, $Y_{k+1}$, we sample from the conditional
distribution of $Y$ given the current sample of $X$.

Recall that if the Markov chain $S_0,  S_1, \ldots$ has invariant
measure $\rho$, then we need $S_k \sim \rho \Rightarrow S_{k+1} \sim \rho$.
Above we obtained $Y_{k+1}$ by conditioning on $X_{k+1}$ rather than $X_k$.
If we had instead conditioned on $X_k$, we would only be able to say
$(X_k, Y_k) \sim \rho \Rightarrow (X_{k+1},Y_k) \sim \rho$ but this does
not imply $(X_{k+1},Y_{k+1}) \sim \rho$.

The transition matrix for the Gibbs sampler above is then given by

``` latex
Q(S_{k+1}|S_k) = \rho_{Y|X}(y_{k+1}|x_{k+1})\rho_{X|Y}(x_{k+1}|y_k).
```

More generally, suppose $S_k = (X_k^1, X_k^2, \ldots, X_k^n)$ and
$\rho: \mathbb{R}^n \to \mathbb{R}$. For ease of notation, let
$V = \\\{1,2,\ldots,n\\\}. $We will assume that we can sample
from the distribution of $X^i$ conditioned on all other variables, i.e.,
we can sample from $\rho_{X_i|X_{V\setminus \\\{i\\\}}}
(X^i|X^1,\ldots,X^{i-1},X^{i+1},\ldots,X^n)$. Then the Gibbs sampler
produces $S^{k+1} = (X_{k+1}^1, X_{k+1}^2, \ldots, X_{k+1}^n)$ as follows:

``` latex
X_{k+1}^1 &\sim \rho_{X_1|X^{V \setminus \{1\}}}(\cdot|X_k^{V \setminus \{1\}}) \\
X_{k+1}^2 &\sim \rho_{X_2|X^{V \setminus \{2\}}}(\cdot|X_{k+1}^1,X_k^{V \setminus \{1,2\}}) \\
X_{k+1}^3 &\sim \rho_{X_3|X^{V \setminus \{3\}}}(\cdot|X_{k+1}^1,X_{k+1}^2,X_k^{V \setminus \{1,2,3\}}) \\
&\vdots \\
X_{k+1}^i &\sim \rho_{X_i|X^{V \setminus \{i\}}}(\cdot|X_{k+1}^1,X_{k+1}^2,\ldots,X_{k+1}^{i-1},X_k^{V \setminus \{1,2,\dots,i\}}) \\
&\vdots \\
X_{k+1}^n &\sim \rho_{X_n|X^{V \setminus \{n\}}}(\cdot|X_{k+1}^1,X_{k+1}^2,\ldots,X_{k+1}^{n-1})
```

::: .example
**Example**

Consider the bivariate normal distribution
$(X,Y) \sim N(\mu, \Sigma)$ where $\mu = [\mu_X,\mu_Y]^T$ and

``` latex
\Sigma =
\begin{bmatrix}
\sigma_X^2 & \sigma_{XY} \\ \sigma_{XY} & \sigma_Y^2
\end{bmatrix}
```

is the covariance matrix. Then we have

``` latex
X &\sim N(\mu_x,\sigma_X^2) \\
Y &\sim N(\mu_Y,\sigma_Y^2).
```

Then because $f_{X|Y}(x|y) = \frac{f_{X,Y}(x,y)}{f_Y(y)}$ and
$f_{Y|X}(y|x) = \frac{f_{X,Y}(x,y)}{f_X(x)}$, we have that

``` latex
f_{X|Y}(x|y) \sim N\left(\mu_X + \frac{\sigma_{XY}}{\sigma_Y^2}(y-\mu_Y),
\left(1-\frac{\sigma_{XY}^2}{\sigma_X^2 \sigma_Y^2}\right)\sigma_X^2\right) \\
f_{Y|X}(y|x) \sim N\left(\mu_Y + \frac{\sigma_{XY}}{\sigma_X^2}(x-\mu_X),
\left(1-\frac{\sigma_{XY}^2}{\sigma_X^2 \sigma_Y^2}\right)\sigma_Y^2\right).
```

Let $S_0 \in \mathbb{R}^2$ be an initial sample vector. Then, with sample
$S_k = (X_k,Y_k)$, $S_{k+1} = (X_{k+1},Y_{k+1})$ is obtained via the Gibbs
sampler as follows:

1. $X_{k+1} \sim N\left(\mu_X + \frac{\sigma_{XY}}{\sigma_Y^2}(Y_k-\mu_Y),
\left(1-\frac{\sigma_{XY}^2}{\sigma_X^2 \sigma_Y^2}\right)\sigma_X^2\right)$

2. $Y_{k+1} \sim N\left(\mu_Y + \frac{\sigma_{XY}}{\sigma_X^2}(X_{k+1}-\mu_X),
\left(1-\frac{\sigma_{XY}^2}{\sigma_X^2 \sigma_Y^2}\right)\sigma_Y^2\right)$.
:::

::: .exercise
**Exercise**  

Implement the Gibbs sample in the previous example with $\mu = [-1,1]^T$ and

``` latex
\Sigma =
\begin{bmatrix}
2 & 2 \\
2 & 3
\end{bmatrix}.
```
Construct a 2d histogram of the samples.
:::

---
> id: gibbs_biv_exec

*Solution*: The executable code below generates the desired samples:

    pre(julia-executable)
      | using Distributions, Random
      | Random.seed!(1234)
      |
      | # Sample from conditional X|Y=y
      | # Inputs:
      | # - y: The current value of y (Y_k)
      | # - μ: The mean vector of the joint density
      | # - Σ: The covariance matrix of X,Y
      | # Outputs:
      | # X_{k+1} where X_{k+1} ∼ f(X|Y=y)
      | function condition_on_Y(y, μ, Σ)
      |     μX = μ[1]
      |     μY = μ[2]
      |     σX2, σXY, _, σY2 = Σ
      |
      |     conditional_mean = μX + σXY/σY2*(y-μY)
      |     conditional_variance = (1-σXY^2/(σX2*σY2))*σX2
      |
      |     distribution = Normal(conditional_mean, conditional_variance)
      |
      |     return rand(distribution)
      | end
      |
      | # Sample from conditional Y|X=y
      | # Inputs:
      | # - x: The current value of x (X_{k+1})
      | # - μ: The mean vector of the joint density
      | # - Σ: The covariance matrix of X,Y
      | # Outputs:
      | # Y_{k+1} where Y_{k+1} ∼ f(y|X=x)
      | function condition_on_X(x, μ, Σ)
      |     μX = μ[1]
      |     μY = μ[2]
      |     σX2, σXY, _, σY2 = Σ
      |
      |     conditional_mean = μY + σXY/σX2*(x-μX)
      |     conditional_variance = (1-σXY^2/(σX2*σY2))*σY2
      |
      |     distribution = Normal(conditional_mean, conditional_variance)
      |
      |     return rand(distribution)
      | end
      |
      | # Gibbs sampler to obtain samples from (X,Y) ~ N(μ,Σ)
      | # Inputs:
      | # - μ: The joint density mean vector
      | # - Σ: The covaraince matrix of X and Y
      | # - n: The number of samples to return
      | # Outputs:
      | # An (n x 2) matrix where each row represent a sample
      | function bivariate_gibbs(μ, Σ, n)
      |     # Store samples here
      |     S = zeros(n,2)
      |
      |     # Initialize S_0 to means
      |     S[1,:] = μ
      |
      |     for i=2:n
      |         X_k1 = condition_on_Y(S[i-1,2], μ, Σ) # Get X_{k+1}
      |         Y_k1 = condition_on_X(X_k1, μ, Σ) # Get Y_{k+1}
      |         S[i,:] = [X_k1, Y_k1]
      |     end
      |
      |     return S
      | end
      |
      | # Define joint density parameters
      | μX = -1
      | μY = 1
      | σX = √2
      | σY = √3
      | σXY = 2
      | μ = [μX, μY]
      | Σ = [σX^2 σXY; σXY σY^2]
      |
      | # Get samples
      | samples = bivariate_gibbs(μ, Σ, 10000)

Running the block of code below will generate a 2d histogram:

``` julia
# Create 2d histogram
Pkg.add("Seaborn")
Pkg.add("Pandas")
using Seaborn, Pandas
pygui(true)
df = DataFrame(Dict(:X=>samples[:,1], :Y=>samples[:,2]))
jointplot(x = "X", y = "Y", data = df, s = 1, alpha = 0.18)
```

which yields

    figure
      img(src="images/gibbs_bivariate_hist.svg")

There are certain cases when the Gibbs sampler performs really well and cases
where it does not. By "perform well", we mean that the samples quickly begin
to behave as if they were sampled from the target distribution. When it does not
perform well, we mean that we will have to wait a very long time before the
samples behave as if they came from the target distribution (if they ever do).
To demonstrate this, we will consider two extreme cases.

**Case 1**:
The Gibbs sampler performs poorly when the variables in the joint density are
highly dependent. Suppose we are considering the joint density of two random
variables $(X,Y)$ and $Y = X$. Beginning with $S_0 = (X_0, Y_0)$, the Gibbs
sampler proceeds as follows:

``` latex
X_1 &\sim \rho_{X|Y}(\cdot | Y = Y_0) \Rightarrow X_1 = Y_0 \\
Y_1 &\sim \rho_{Y|X}(\cdot | X = X_1) \Rightarrow Y_1 = X_1 = Y_0 \\
&\vdots \\
(X_k,Y_k) &= (Y_0,Y_0)
```

*Remark*: The reason $X_1 = Y_0$ is the following: Since
$X_1 \sim \rho_{X|Y}(\cdot | Y = Y_0)$, Bayes rule tells us
$\rho_{X|Y}(\cdot | Y = Y_0) \propto \rho_{Y|X}(Y = Y_0|x)\rho_X(x)$.
Now note that because $Y = X$ by definition, $\rho_{Y|X}(Y = Y_0|x)$ will be
0 for any value except $X = Y_0$, so we must have $X_1 = Y_0$.

The example above demonstrates that when the variables are highly dependent,
the Gibbs sampler performs poorly--it fails in this example as all samples will
be the same and the Markov chain never "mixes."

**Case 2**:
The Gibbs sampler performs well when the variables are highly independent. Again
suppose that we are consider the joint density of two random variables
$(X,Y)$ where $X \perp\\\!\\\!\\\!\perp Y$. Starting with $(X_0, Y_0),
the Gibbs sample proceeds as  follows:

``` latex
X_1 &\sim \rho_{X|Y}(\cdot| Y = Y_0) = \rho_X(\cdot)  \\
Y_1 &\sim \rho_{Y|X}(\cdot| X = X_1) = \rho_Y(\cdot)  \\
&\vdots \\
X_k &\sim \rho_X(\cdot) \\
Y_k &\sim \rho_Y(\cdot).
```

Since $X \perp\\\!\\\!\\\!\perp Y$, the conditional densities are simply
marginals so we see that the samples immediately begin to behave like samples
from the target distribution.

---
> id:hmc
### Hamiltonian Monte Carlo (HMC)

Recall that the standard Metropolis-Hastings algorithm generates the Markov
chain $S_1, S_2, \ldots, $ with invariant measure $\rho$ as follows:

1. Propose (sample) $Y \sim q(\cdot | S_k)$.

2. Compute acceptance probabilty:
``` latex
\alpha(S_k,Y) := \textrm{min}
\left\{
    1, \frac{q(Y|S_k)\rho(Y)}{q(S_k|Y)\rho(S_k)}
\right\}.
```

3. Sample $X \sim Bernoulli(\alpha(S_k,Y))$ and set
``` latex
S_{k+1} &=
\begin{cases}
Y, & \textrm{if } X = 1 \\
S_k, & \textrm{otherwise.}
\end{cases}
```

While relatively simple to understand and implement, the Metropolis-Hastings
algorithm suffers when the dimension of the state space $\Omega$ is large. Here
we will introduce another MCMC method, called Hamiltonian Monte Carlo (HMC)
that builds upon the standard Metropolis-Hastings algorithm and performs better
in high dimensional spaces. To accomplish this, we will make use of information
contained in the gradient of the target distribution.

The mathematics justifying the efficacy of HMC relies on differential geometry,
which is outside the scope of this course. However, we can gain some intuition
into its performance by considering an analogy in physics.

*Remark*: To retain consistency with other HMC literature, we will let
$\pi(q)$ denote the target density/distribution.

The physical system we will consider is that of an object orbiting a planet.
For the sake of this analogy, we will suppose the shape of  our target
distribution is the elliptic orbit of the object around the planet. Now the
idea of this setup is that the object will only remain in this orbit if it is
endowed with just the right of momentum to counteract the gravitational
attraction of the planet. Too little momentum would cause the object to fall
into the planet, and too much might render the gravitational attraction too weak
to retain the object in orbit, causing it to ecape into space.

This balance of gravitational attraction and momentum gives rise to the idea of
*conservative dynamics*. For our probabilistic problem, we will
draw on the idea of volume preservation whereby an expansion or contraction in
position is compensated by a respective contraction or expansion in momentum.
In particular, we will imagine we have
a system with position $q$ and momentum $p$, say, a particle; $q$ here presents
a sample from our target density. Suppose the particle moves from $q_0$ to
$q_1$; we can interpret $q_1$ as the next possible proposal. In a physical
system, the trajectory from $q_0$ to $q_1$ will be determined by the momentum
at time 0, $p_0$. Since $q_1$ is a sample proposal, the trajectory from $q_0$
to $q_1$ should be determined by the geometry of the target distribution.
This harmony between position and momentum will be captured by what is called
the *canonical distribution*, which is the joint density of $q$ and $p$:

``` latex
\pi(q,p) &= \pi(p|q)\pi(q).
```

We will write this in term of a function $H(q,p)$ called a Hamiltonian function
which represents the energy of the system at $q,p$:

``` latex
\pi(q,p) &= e^{-H(q,p)}.
```

where $p \in \mathbb{R}^{|\Omega|}$, that is, $p$ has the same dimension as
$q$.

We will choose $H(q,p) = -\log \pi(q,p)$ so that we have

``` latex
H(q,p) &= -\log \pi(q,p) \\
&= -\log \pi(p|q)\pi(q) \\
&= -\log \pi(p|q) - \log \pi(q) \\
&= K(q,p) + V(q)
```

where $K(q,p)$ and $V(q)$ represent the kinetic and potential energies,
respectively, of the system at $q,p$. The set of all possible $(q,p)$ is
called the *phase space*.

Note that because $\pi(q,p) = \pi(p|q)\pi(q)$, if we marginalize $\pi(q,p)$
over the momentum, we immediately obtain $\pi(q)$. This means that if we have
samples $(q_0,p_0), (q_1,p_1), \ldots, (q_n,p_n)$, then we can simply drop
$p_0, p_1, \ldots, p_n$ to obtain samples $q_0, q_1, \ldots, q_n$ from $\pi(q)$.

Now, suppose we start with sample $(q^0, p^0)$. To get the next sample, we will
consider a trajectory starting at time 0 and ending at time $L$.
The trajectory is determined by Hamilton's equations:

``` latex
\frac{dq}{dt} &= \frac{\partial H}{\partial p} = \frac{\partial K}{\partial p}\\
\frac{dp}{dt} &= -\frac{\partial H}{\partial q} =
-\frac{\partial K}{\partial q} - \frac{dV}{dq}.
```

Indeed, if at time 0 the particle is at $(q^0,p^0)$ then after time $\epsilon$
the particle will be at $(q^1, p^1)$ where

``` latex
q^1 &= q^0 + \int_0^{\epsilon} \frac{\partial H}{\partial p} dt \\
p^1 &= p^0 + \int_0^{\epsilon} -\frac{\partial H}{\partial q} dt.
```

Computing the integrals above may be difficult and will instead be numerically
computed.
We first discretize the interval $[0,L]$ into $n$ disjoint intervals of length
$\epsilon = \frac{L}{n}$ which yields the intervals
$[0,\epsilon), [\epsilon, 2\epsilon), \ldots, [(n-1)\epsilon, L]$ so that the
obtained trajectory is $(q^0,p^0), (q^1,p^1), \ldots, (q^{n-1},p^{n-1})$ where
$(q^j,p^j)$ is given by

``` latex
\psi &= p^{j-1} - \frac{\epsilon}{2}\frac{\partial V}{\partial q}(q^{j-1}) \\
q^j &= q^{j-1} + \epsilon \psi \\
p^j &= \psi - \frac{\epsilon}{2}\frac{\partial V}{\partial q}(q^j)
```
for $j = 1,2,\ldots, n-1$. The above numerical scheme is known as the
*leapfrog integrator*.

Once we have obtained the trajectory
$(q^0,p^0), (q^1,p^1), \ldots, (q^{n-1},p^{n-1})$, there are multiple ways
to construct the next sample proposal. The most simple is to just propose the
final point of the trajectory, $(q^{n-1},p^{n-1})$.

One of they key components of Hamiltonian dynamics is reversibility. In the
context of this problem, this means the particle should be able to go from
$(q^0,p^0)$ to $(q^{n-1},p^{n-1})$ and from $(q^{n-1},p^{n-1})$ back to
$(q^0,p^0)$. As currently defined, this is not possible. To remedy this, we
will add a step to the numerical integrator that negates the sign of the
momentum so that we obtain the trajectory
$(q^0,p^0), (q^1,-p^1), \ldots, (q^{n-1},-p^{n-1})$. This step effectively
makes transition probability symmetric, so that the acceptance probability
becomes

``` latex
\alpha &= \min\left(1, e^{H(q^0,p^0) - H(q^{n-1},p^{n-1})}\right).
```

The last step is to define the conditional probability $\pi(p|q)$. The most
simple choice is $\pi(p|q) \sim N(\mathbf{0},I)$ where $\mathbf{0}$ is the
$|\Omega|$-dimensional zero vector and $I$ is the $|\Omega| \times |\Omega|$
identity. Note that because $\pi(p|q)$ as defined here does not depend on $q$,
$p$ can be sampled independently from $q$. This choice of kinetic energy
function is an example of what is sometimes referred to as a
*Euclidean-Gaussian Kinetic Energy* function.

To summarize, after initializing $(q_0, p_0)$ and defining $\pi(p|q)$, the
simplest HMC algorithm obtains sample $(q_k, p_k)$ from $(q_{k-1},p_{k-1})$
as follows:

0. Set integration time $L$ and number of integration intervals $n$ and
define $\epsilon = \frac{L}{n}$.

1. Obtain trajectory $(q^0,p^0), (q^1,p^1), \ldots, (q^{n-1},p^{n-1})$
as follows:

``` latex
&1. \quad q^0 \leftarrow q_k, p^0 \sim N(\mathbf{0},I) \\
&2. \quad \text{for } j = 1,2,\ldots, n-1, \text{ define }
\\
&\quad \quad \psi = p^{j-1} - \frac{\epsilon}{2}\frac{\partial V}{\partial q}(q^{j-1}) \\
&\quad \quad q^j = q^{j-1} - \epsilon \psi \\
&\quad \quad p^j = \psi - \frac{\epsilon}{2}\frac{\partial V}{\partial q}(q^{j})
```

2. Compute acceptance probability

``` latex
\alpha &= \min\left(1, e^{H(q_k,p_k) - H(q^{n-1},p^{n-1})}\right).
```

3. Sample $X \sim Bernoulli(\alpha)$ and set
``` latex
(q_{k+1}, p_{k+1}) &=
\begin{cases}
(q^{n-1},p^{n-1}), & \textrm{if } X = 1 \\
(q_k,p_k), & \textrm{otherwise.}
\end{cases}
```

From above we see that HMC is a special case of the Metropolis-Hastings
algorithm where the proposal is found using methods from Hamiltonian dynamics.

::: .example
**Example**

Consider the density given by

``` latex
\pi(q) &= \frac{3}{10\sqrt{2\pi}}e^{-\frac{(q+2)^2}{2}} +
\frac{7}{10\sqrt{\pi}} e^{-(q-3)^2}
```

a plot of which is given below:

    figure
      img(src="images/hmc_ex_1_density_plot.svg")

We will obtain samples from $\pi(q)$ via HMC. First, we will let

``` latex
\pi(p|q) \sim N(0,1).
```

Then we have

``` latex
V(q) &= -\log \pi(q)
```

and

``` latex
\frac{d V}{dq} &= \frac{1}{\pi(q)}
\left[
\frac{3}{10\sqrt{2\pi}}(q+2)e^{-\frac{(q+2)^2}{2}} +
\frac{7}{10\sqrt{\pi}}(q-3)e^{-(q-3)^2}
\right].
```

The code below will generate 20,000 samples from $pi(q)$:

``` julia
using Plots, Distributions

# Evaluates target distribution π(q)
function π_q(q)
    return 0.3*1/sqrt(2*pi)*exp(-(q+2)^2/2) + 0.7*1/sqrt(pi)*exp(-(q-3)^2)
end

# Evaluates conditional probability π(p|q)
function π_pq(p,q)
    return pdf(Normal(0, 1), p)
end

# Evaluates Kinetic enery K(p,q)
function K(p,q)
    return -log(π_pq(p,q))
end

# Evaluates Potential energy V(q)
function V(q)
    return -log(π_q(q))
end

# Evaluates dV/dq at q
function dV_dq(q)
    return 1/π_q(q) * (0.3*1/sqrt(2*pi)*(q+2)*exp(-(q+2)^2/2) +
    0.7*2/sqrt(pi)*(q-3)*exp(-(q-3)^2))
end

# Compute Hamiltonian at q,p
function H(p,q)
    return K(p,q) + V(q)
end


# Gets a trajectory of length L with n steps
function get_trajectory(q,p,L,n)
    # Flip sign of momentum
    # p *= -1

    # Step size
    ϵ = L/n

    q_trajectory = zeros(n)
    p_trajectory = zeros(n)

    q_trajectory[1] = q
    p_trajectory[1] = p

    for j=2:n
        ψ = p_trajectory[j-1] - ϵ/2 * dV_dq(q_trajectory[j-1])
        q_trajectory[j] = q_trajectory[j-1] + ϵ*ψ
        p_trajectory[j] = ψ - ϵ/2*dV_dq(q_trajectory[j])
    end

    return q_trajectory, p_trajectory
end

function hmc_alg(q₀, p₀)
    # Number of samples to return
    n = 20000

    q_samples = zeros(n)
    p_samples = zeros(n)
    q_samples[1] = q₀
    p_samples[1] = p₀

    trajectory_length = 1
    trajectory_partitions = 3

    for j=2:n

        q = q_samples[j-1]
        p = rand(Normal(0,1))
        q_proposal_trajectory, p_proposal_trajectory =
        get_trajectory(q, p, trajectory_length, trajectory_partitions)

        # Proposal
        q_L = last(q_proposal_trajectory)
        p_L = last(p_proposal_trajectory)

        # Compute acceptance probabilty
        α = min(1, exp(H(p,q) - H(-p_L,q_L)))

        if rand() < α
            q_samples[j] = q_L
            p_samples[j] = -p_L
        else
            q_samples[j] = q
            p_samples[j] = p
        end

    end

    return q_samples
end

# Generate HMC samples
samples = hmc_alg(0,1)
```

A histogram of the obtained samples with the density superimposed is given
below:

    figure
      img(src="images/hmc_ex_1_histogram.svg")
:::

For more complex target densities in higher dimensions it is often cumbersome
to differentiate $\pi(q)$ by hand. Instead, it is common to use numerical
differentiating schemes called *automatic differentiation*. In Julia, we can
do this with the package `ForwardDiff.` For arbitrary function
$f: \mathbb{R}^n \to \mathbb{R}$, its gradient can be obtained as follows:

``` julia
using ForwardDiff
df_dx(x) = ForwardDiff.derivative(f, x)
```

For example, to evaluate $f'(5)$ for $f(x) = \frac{\sin(x^3)}{\sqrt{\log x}}$
we can write

``` julia
using ForwardDiff

function f(x)
    return sin(x^3)/sqrt(log(x))
end

df_dx(x) = ForwardDiff.derivative(f, x)
println(df_dx(5))
```

::: .example
**Example**  

Consider the density
$\pi: \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]^2 \to \mathbb{R}$ defined by

``` latex
\pi(q_1, q_2) &= \frac{1}{Z}
\left[
\left(\sin(q_1q_2)\sin(q_1)\cos(q_2)\right)^2 +
\frac{2}{\pi} e^{-2(q_1^2 + q_2^2)}
\right]
```

where $Z$ is a normalization constant.

A plot of this density along with a contour plot is given below

    figure
      img(src="images/hmc_ex_2_plot_1.svg")

The code below makes use of the ForwardDiff Julia package to run HMC and
obtain 25,000 samples:

``` julia
using Distributions, LinearAlgebra, ForwardDiff, Seaborn, Pandas

# Evaluates target distribution π(q)
function π_q(q)
    q₁ = q[1]
    q₂ = q[2]
    in_bound = (-π/2 < q₁ < π/2) & (-π/2 < q₂ < π/2)
    return in_bound*(2/π * exp(-2*(q₁^2 + q₂^2)) + (sin(q₁*q₂)*sin(q₁)*cos(q₂))^2)
end

# Evaluates conditional probability π(p|q)
function π_pq(p,q)
    return pdf(MvNormal([0,0], 1.0*Matrix(I, 2, 2)), p)
end

# Evaluates Kinetic enery K(p,q)
function K(p,q)
    return -log(π_pq(p,q))
end

# Evaluates Potential energy V(q)
function V(q)
    return -log(π_q(q))
end

# Compute Hamiltonian at q,p
function H(p,q)
    return K(p,q) + V(q)
end


# Gets a trajectory of length L with n steps
function get_trajectory(q,p,L,n,dV_dq)

    # Step size
    ϵ = L/n

    q_trajectory = zeros(n,2)
    p_trajectory = zeros(n,2)

    q_trajectory[1,:] = q
    p_trajectory[1,:] = p

    for j=2:n
        ψ = p_trajectory[j-1,:] - ϵ/2 * dV_dq(q_trajectory[j-1,:])
        q_trajectory[j,:] = q_trajectory[j-1,:] + ϵ*ψ
        p_trajectory[j,:] = ψ - ϵ/2*dV_dq(q_trajectory[j,:])
    end

    return q_trajectory, p_trajectory
end

function hmc_alg(q₀, p₀)
    # Number of samples to return
    n = 25000

    q_samples = zeros(n,2)
    p_samples = zeros(n,2)
    q_samples[1,:] = q₀
    p_samples[1,:] = p₀

    trajectory_length = 1
    trajectory_partitions = 5

    # Gradient of V
    dV_dq(x) = ForwardDiff.gradient(V, x)

    for j=2:n

        q = q_samples[j-1,:]
        p = rand(MvNormal([0,0],1.0*Matrix(I, 2, 2)))
        q_proposal_trajectory, p_proposal_trajectory =
        get_trajectory(q, p, trajectory_length, trajectory_partitions, dV_dq)

        # Proposal
        q_L = q_proposal_trajectory[lastindex(q_proposal_trajectory)÷2,:]
        p_L = p_proposal_trajectory[lastindex(p_proposal_trajectory)÷2,:]

        # Compute acceptance probabilty
        α = min(1, exp(H(p,q) - H(-p_L,q_L)))

        if rand() < α
            q_samples[j,:] = q_L
            p_samples[j,:] = -p_L
        else
            q_samples[j,:] = q
            p_samples[j,:] = p
        end

    end

    return q_samples
end

samples = hmc_alg([0,0],[1,1])
```

Note that we do not need to know the normalization constant $Z$ to be able to
sample from $\pi(q_1,q_2)$.
A histogram of the obtained samples is given below:

    figure
      img(src="images/hmc_ex_2_histogram.svg")

Above we see that the histogram of the samples indeed matches the contour of the
density:

    figure
      img(src="images/hmc_ex_2_plot_3.svg")

Moreover, we can obtain the marginals of $q_1$ and $q_2$ as follows:

``` latex
\pi_{q_1}(q_1) &= \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\pi(q_1,q_2)dq_2 \\
&= \frac{1}{Z}\left[\sqrt{\frac{2}{\pi}} erf\left(\frac{\pi}{\sqrt{2}}\right)
e^{-2x^2} + \frac{(-\pi x + \pi x^3 + \sin(\pi x))\sin^2(x)}{4x^3 - 4x}\right]
```

and

``` latex
\pi_{q_2}(q_2) &= \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\pi(q_1,q_2)dq_1 \\
&= \frac{1}{Z}\left[\sqrt{\frac{2}{\pi}} erf\left(\frac{\pi}{\sqrt{2}}\right)
e^{-2y^2} + \frac{1}{4}\cos^2(y)\left(\pi + \frac{(1-2y^2)\sin(\pi y)}{y^3-y}
\right)\right]
```

where $erf(x)$ is the error function given by
$erf(x) = \frac{2}{\sqrt{\pi}} \int_0^x e^{-t^2} dt$. Plots of these two
marginals are given below:

    figure
      img(src="images/hmc_ex_2_marginal_1_plot.svg")


    figure
      img(src="images/hmc_ex_2_marginal_2_plot.svg")

We see that these marginal plots indeed match those estimated in the
histogram of the obtained samples.
:::

Here we have only provided an introduction to HMC. Much can be done to improve
the performance, for example, choosing an appropriate $\pi(p|q)$ as well as
the optimal trajectory length. Topics such as these are covered
[here](https://arxiv.org/pdf/1701.02434.pdf).

In the next section we consider an improvement of the HMC algorithm.

### No-U-Turn Sampler (NUTS)
After choosing an appropriate kinetic energy function, $K(q,p)$, for the HMC
algorithm, we are tasked with choosing the length of the trajectories $L$
(number of steps) and the step size $\epsilon$. If $L$ is chosen to be small,
then the trajectories are subsequently short and the behavior of HMC to similar
to the random walk Metropolis-Hastings sampler. If $L$ is too large, then
superfluous trajectories may be computed and thus needlessly expend
computational resources. Ideally, we would like $L$ and $\epsilon$ to be chosen
adaptively, without the need for user intervention.

At its core, NUTS builds upon HMC by utilizing a recursive algorithm to find
an optimal trajectory length $L$. However, it is common to augment NUTS with
an additional step that can automatically tune the parameter $\epsilon$.
The mathematics is a bit tedious but can be found
[here](https://arxiv.org/pdf/1111.4246.pdf).
In this section we simply outline how NUTS may be used in Julia.  

::: .example
**Example**  

Here we will use NUTS to obtain samples from the density given in the HMC
section:

``` latex
\pi(q_1, q_2) &= \frac{1}{Z}
\left[
\left(\sin(q_1q_2)\sin(q_1)\cos(q_2)\right)^2 +
\frac{2}{\pi} e^{-2(q_1^2 + q_2^2)}
\right]
```

We will use the *AdvancedHMC* Julia package to obtain samples from NUTS.
We first define the density as follows:

``` julia
using Distributions, DiffResults, ForwardDiff, DiffResults, AdvancedHMC

# Evaluates target distribution π(q)
function π_q(q)
    q₁ = q[1]
    q₂ = q[2]
    in_bound = (-π/2 < q₁ < π/2) & (-π/2 < q₂ < π/2)
    return in_bound*(2/π * exp(-2*(q₁^2 + q₂^2)) + (sin(q₁*q₂)*sin(q₁)*cos(q₂))^2)
end

# Initial sample
q₀ = [0.0, 0.0]

# State space size
Ω_size = length(q₀)

# Number of samples desired
num_samples = 25000

# Number of ϵ updates
num_adapts = 2000
```

We also define the initial sample, the desired sample size, as well as a
parameter that defines the number of times the step size $\epsilon$
will be updated.

Once the above is defined, the code below can be used to generate the samples:

``` julia
# Evaluates log of target distribution
function ℓπ(q)
    return log(π_q(q))
end

# Evaluates gradient of log of target distribution
# This implementation of NUTS requires the gradient function to be defined this
# way
function ∂ℓπ_∂q(q)
    result = DiffResults.GradientResult(q)
    ForwardDiff.gradient!(result, ℓπ, q)
    return (DiffResults.value(result), DiffResults.gradient(result))
end

# Use Euclidean matrix. 2 here is dimension of sample space
metric = DiagEuclideanMetric(Ω_size)

# Define Hamiltonian function
hamiltonian = Hamiltonian(metric, ℓπ, ∂ℓπ_∂q)

# Initial step size
ϵ₀ = find_good_eps(hamiltonian, q₀)

# Define leapfrog symplectic integrator
lf_integrator = Leapfrog(ϵ₀)

# Define NUTS sampler
sampler = NUTS{MultinomialTS,GeneralisedNoUTurn}(lf_integrator)

# Define ϵ adapter. Used to find apatively determine optimal step size ϵ
adaptor = StanHMCAdaptor(num_adapts, Preconditioner(metric), NesterovDualAveraging(0.8, lf_integrator))

# Get samples. stats stores information for each sample (e.g., acceptance rate)
samples, stats = sample(hamiltonian, sampler, q₀, num_samples, adaptor, num_adapts; progress=true)
```

We can again construct a histogram as we did before to obtain:

    figure
      img(src="images/hmc_nuts_hist_1.svg")
:::
