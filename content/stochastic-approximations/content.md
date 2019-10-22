
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

Above we have sampled $n = 4000$ points and there are 2109 $(X_i, Y_i)$ pairs
satisfying $f_2(X_i) \leq Y_i \leq f_1(X_i)$. Hence, our estimate of the area
is $21\left(\frac{2109}{4000}\right) \approx 11.072$.
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
$f(x) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}\mathbb{I}_{x \geq \frac{11}{2}}$. A
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
of the integral is approximately $1.899 \times 10^{-6}$ which is
within our confidence interval.
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
