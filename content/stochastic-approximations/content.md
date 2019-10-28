
# Stochastic Approximations

> id: intro
## Introduction

Randomly generated numbers are useful in many contexts. In this course we will
explore  how  they may be used to estimate quantities that may be too difficult
to compute analytically or computationally. Throughout the course we will
assume that we have access to a random number generator capable of generating
uniformly distributed numbers on the interval $[0,1]$.

We will begin by considering **Monte Carlo Estimation**. Put simply, Monte Carlo estimation is a method of estimating
quantities by obtaining $n$ samples and computing the ratio of samples
satisfying some property. We will be using Monte Carlo methods in the
approximation of integrals, sometimes referred to as Monte Carlo Integration.

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
**Theorem** (Weak Law of Large Numbers)  
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

Let $X \sim Unif([0,1]^d)$; then the law of large numbers
guarantees $I_n \to \mathbb{E}[f(X)] = \int_{[0,1]^d} f(x)dx = I$.
Let us be clear about what it means for a random variable to be uniformly
distributed over a region: For a region $A \in \mathbb{R}^d$, $X \sim Unif(A)$
if we have $\mathbb{P}(X \in B) = \frac{\textrm{area}(B)}{\textrm{area}(A)}$
for $B \subseteq A$.

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

Since the accuracy of our estimate is dependent on the variance of the
estimator, we would like to make the variance as small as possible. The variance
is dependent on the distribution of the samples, which we had assumed to be
uniform. It is easy to concoct examples where uniform samples rarely land in the
region we are interested in integrating, for example, small volumes in high
dimensions. To remedy this, we will choose the distribution of our samples
to be more concentrated in the region of integration; this method of sampling
is called **importance sampling**.

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

$\textit{Remark}$ : $z_\frac{\alpha}{2}$ above denotes the z-score corresponding
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

[Continue](btn:next)

---
> id: Markov Processes
## Markov Processes

In this section we will move away from our previous setting of independent and
identically distributed sequences of random variables and consider Markovian
structures. Let $S_0, S_1, \ldots, $ be a sequence of random variables with
state space $\chi$, then this sequence is a discrete time
**Markov Process** if for every $n \in \\\{0,1,2,\ldots\\\}$ and
$s_0, s_1, \ldots, s_{n+1} \in \chi$ we have

``` latex
\mathbb{P}(S_{n+1} = s_{n+1}| S_0 = s_0, S_1 = s_1, \ldots, S_n = s_n) &=
\mathbb{P}(S_{n+1} = s_{n+1}|S_n = s_n)
```
 In words, conditioning the next state $S_{n+1}$ on all previous other states
 is equivalent to conditioning on only the current state $S_n$. Put simply,
 the history of the process is irrelevant for computing the probability
 of future events, only the current state of the process is relevant.

 In this course we will assume that $\chi$ is a discrete state space. Under
 this assumption, the sequence $S_0, S_1, S_2, \ldots$ is called a
 **Markov Chain**.

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

We will restrict our attention to time homogeneous Markov chains.
A Markov chain $S_0, S_1, S_2, \ldots$ is said to be
**time homogeneous** if for all $n$ and $x,y \in \chi$ we have
$\mathbb{P}(S_{n+1} = y|S_n = x) = \mathbb{P}(S_1 = y|S_0 = x)$.
In words, this says that transitioning from state $x$ to state $y$
in one step is independent of the time $n$.

Suppose the state space of a time homogeneous Markov chain
is $\chi = \\\{a_1, a_2, \ldots, a_k\\\}$. We can represent the chain
as a directed graph where nodes represent
states and edge weights represent the probability of transitioning from one
state to another in a single step.
For example, setting $N = 5$ in the example above, we can have the following
graph:

    figure
      img(src="images/mc_gamblers_ruin_graph.svg")

We can also represent the chain with a $|\chi| \times |\chi|$ matrix $P$ where
$P_{ij}$ denotes the probability of transitioning from state $i$ to state $j$
in one step, that is, $P_{ij} = \mathbb{P}(S_{n+1} = j|S_n = i)$ for all $n$
and $i,j \in \chi$.
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


$\textit{Remark}$ : States $i$ that satisfy $P_{ii} = 1$ are called
**absorbing states**.

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

::: .exercise

**Exercise**

Consider the following social mobility Markov chain with state space
$\chi = \\\{1,2,3\\\}$ where state 1 represents lower class, state 2
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


The third question in the exercise above alludes to an interesting observation.
Note that we could have replaced the class of our parents with some class
$i \in \chi$ and the class of our children with some class $j \in \chi$ to
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
first needs to transition from $i$ to some state $k \in \chi$ in $m$ steps and
then from state $k$ to state $j$ in one step. Thus we have

``` latex
\mathbb{P}(S_{m+1} = j|S_0 = i) &= \sum_{k \in \chi}
\mathbb{P}(S_{m+1}=j,S_m=k|S_0=i) \\
&= \sum_{k \in \chi} \frac{\mathbb{P}(S_{m+1} = j, S_m=k,
    S_0=i)}{\mathbb{P}(S_0 = i)} \\
&= \sum_{k \in \chi} \frac{\mathbb{P}(S_{m+1} = j| S_m=k, S_0=i)
\mathbb{P}(S_m = k, S_0 = i)}{\mathbb{P}(S_0 = i)} \\
&= \sum_{k \in \chi} \mathbb{P}(S_{m+1} = j | S_m = k, S_0 = i)
\mathbb{P}(S_m = k | S_0 = i) \\
&= \sum_{k \in \chi} \mathbb{P}(S_{m+1} = j | S_m = k) \mathbb{P}(S_m = k | S_0
    = i) \quad (\textrm{Markov property})\\
&= \sum_{k \in \chi} P_{kj} P^m_{ik} \quad (\textrm{Induction hypothesis}) \\
&= (PP^m)_{ij} \\
&= P^{m+1}_{ij}.
```

::: .exercise
**Exercise**

Consider a gambler's ruin chain with $N = 5$ and $p = .3$ Assuming you start
with \$2, what is the probability you will have \$5 after 6 games? What is
the probability you will have \$0 after 6 plays?
:::

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

::: .exercise
**Exercise**

Consider a Markov chain for a two-year master's program with state space
$\chi = \\\{1,2,G,D\\\}$ where states 1 and 2 represent first and second
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

Two examples of random walks are given below.

::: .example
**Example**

Here we will consider the random walk in $\mathbb{Z}$, that is, the random
walk in one dimension. We will assume the particle begins at the origin so that
$S_0 = 0$. Since the particle is in one dimension, it can only move either
left or right. Thus, we will assume $X_i \in \chi = \\\{-1,1\\\}$ where
$X_i = -1$ means the particle moves to the left and $X_i = 1$ means the
particle moves to the right. We now need to assign a distribution to the set
$\chi$. We will assume  $\mathbb{P}(X_i = 1) = p$ and
$\mathbb{P}(X_i = -1) = 1 - p$. We can now generate a random walk as follows:

* First, the particle begins at state $S_0 = 0$.

* We then sample $X_1$ according to the distribution on $\chi$ and set
$S_1 = S_0 + X_1$.

* We again sample $X_2$ according to the distribution on $\chi$ and set
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

::: .example
**Example**

We can also visualize a random walk in $\mathbb{Z}^2$, that is, a random walk
in two dimensions. In this case the particle can move left, right, up, or down,
so the state space will be given by
$\chi = \\\{(-1,0), (1,0), (0,1), (0,-1)\\\}$. We will again assume the particle
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
winning is close to 0.49, the probability we increase our wealth by \$100
is still less than 2%!
:::
