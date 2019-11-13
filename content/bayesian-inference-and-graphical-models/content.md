
# Bayesian Inference and Graphical Models

> id: intro
## Introduction

In contrast to frequentist statistics, which represents model parameters as fixed and unknown, Bayesian statistics regards model parameters as random variables with a specified **prior** distribution. Observed data are used to obtain an updated **posterior** distribution, via Bayes' theorem.

We will introduce the Bayesian school of thought via an example. Suppose we
repeatedly flip a coin and observe the sequence $X_1,X_2,X_3,\ldots$
where $X_i = 1$ if the $i$th flip is heads and $X_i = 0$ otherwise. Let $\theta$
be the probability that one flip of the coin yields heads. The goal is to
derive a distribution for $\theta$, i.e., say something about the probability
of $\theta$ assuming some value or being in some interval. This is in contrast
to the frequentist approach that could give us an estimate of the value of
$\theta$, say the proportion of flips that are heads (this is the MLE).

Let $y := \\\{X_1, X_2, \ldots, \\\}$, that is, $y$ is our dataset of
observations. We would like to say something about $\theta$ given this dataset.
In particular, we want to obtain the distribution $f(\theta|y)$. Applying Bayes'
rule, we obtain

``` latex
\overbrace{f(\theta|y)}^{\text{posterior}} &=
\frac{\overbrace{f(y|\theta)}^{\text{likelihood}}
\overbrace{f(\theta)}^{\text{prior}}}
{\underbrace{f(y)}_{\text{marginal}}}.
```

It is important to define the terms above:

* *Posterior distribution*: This is the distribution we seek. If $\theta$
is discrete, this gives us the probability that $\theta$ assumes a specific
value given the data we have observed.

* *Likelihood function*: Given a specific value of $\theta$, this gives the
probability of observing our data.

* *Prior*: This encodes our belief of how $\theta$ behaves. This is the largest
point of contention in the frequentist vs. Bayesian debate as the methodology
for choosing a proper prior is elusive.

* *Marginal*: This is the probability of observing the data and can be
obtained by integrating $f(y,\theta)$ over all possible values of $\theta$.
Indeed, $f(y) \in \mathbb{R}$ independent of the value of $\theta$, i.e., it is
just a constant. As such, we often write
$f(\theta|y) \propto f(y|\theta)f(\theta)$.

Continuing with our example, suppose we have reason to believe the coin is
biased. We can incorporate this belief by assigning a prior distribution on
$\theta$ that weights values larger or less than 0.5 more heavily.
Since $\theta \in [0,1]$, we need to choose a distribution that has
support in this interval.
One example of such a prior is the Beta distribution. For $X \sim
Beta(\alpha,\beta)$ the density of $X$ is given by

``` latex
\frac{1}{B(\alpha,\beta)}x^{\alpha - 1}(1-x)^{\beta - 1} \\
B(\alpha,\beta) = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha + \beta)}.
```

For instance, if we believe the coin has a higher probability of being heads
than tails, we will choose $\theta \sim Beta(\alpha,\beta)$ where $\alpha$ and
$\beta$ are chosen to weight values above 0.5 more heavily. An example of this
is $Beta(10,5)$, a plot of which is given below

    img(src="images/beta_prior_coin_ex_1.svg")

Letting $\theta \sim Beta(\alpha,\beta)$, we now turn our attention to the
likelihood $f(y|\theta)$. This is the probability of observing the data $y$
given a fixed value of $\theta$. If we have seen $n$ observations
where $p$ of the observations are heads and $q$ are tails, then
$f(y|\theta) \sim Binomial(n, \theta)$ so that
$f(y|\theta) = {n \choose p} \theta^p (1-\theta)^q$. We can also compute the
marginal $f(y)$:

``` latex
f(y) &= \int_0^1 f(y|\theta)f(\theta) d\theta \\
&= \int_0^1 {n \choose p} \theta^p (1-\theta)^q
\frac{1}{B(\alpha,\beta)}\theta^{\alpha - 1}(1-\theta)^{\beta - 1} d\theta \\
&= \frac{{n \choose p}}{B(\alpha,\beta)} \int_0^1
\theta^{\alpha + p - 1}(1-\theta)^{\beta + p - 1} d\theta \\
&= \frac{{n \choose p}}{B(\alpha,\beta)} B(\alpha + p, \beta + q).
```

The posterior is then given by

``` latex
f(\theta|y) &= \frac{f(y|\theta)f(\theta)}{f(y)} \\
&= \frac{{n \choose p} \theta^p (1-\theta)^q
\frac{1}{B(\alpha,\beta)}\theta^{\alpha - 1}(1-\theta)^{\beta - 1}}
{\frac{{n \choose p}}{B(\alpha,\beta)} B(\alpha + p, \beta + q)} \\
&= \frac{1}{B(\alpha + p, \beta + q)}\theta^{\alpha + p - 1}
(1-\theta)^{\beta + q - 1}.
```

From above we see $f(\theta|y) \sim Beta(\alpha + p, \beta + q)$.

*Remark* When the posterior distribution has the same parametric form as the
prior distribution, this property is called *conjugacy*. For the example above,
we say that the beta distribution is a conjugate family for the binomial
likelihood.

Suppose we believe the coin is biased with probability of heads greater than
0.5. Say we take $\theta \sim Beta(10,5)$. Then after observing $p$ heads and
$q$ tails, the posterior is

``` latex
f(\theta|y) &= \frac{1}{B(10 + p, 5 + q)} \theta^{9 + p} (1-\theta)^{4 + q}
```

The executable code below allows us to see how the posterior changes as the size
of the dataset grows and as the parameters of the prior are changed.

---
> id: posteriorexec

    pre(julia-executable)
      | using Distributions, LaTeXStrings, Random, Plots
      | Random.seed!(1234)
      |
      | # Simulate n coin flips with a bias of 0.6
      | n = 1000
      | flips = rand(n) .< 0.6
      | p = sum(flips)
      | q = n - p
      |
      | # Create plot of Beta(α,β) density
      | α = 10
      | β = 5
      |
      | x_values = 0:0.001:1
      |
      | # Get prior and posterior values
      | prior = [pdf(Beta(α,β),x) for x in x_values]
      | posterior = [pdf(Beta(α+p,β+q),x) for x in x_values]
      |
      |
      | # Create plots
      | plot(x_values, posterior, seriestype = :line, label = "posterior",
      | yaxis = L"f(\theta|y)", xaxis = L"\theta", grid = false)
      |
      | plot!(x_values, prior, seriestype = :line, label = "prior", grid = false)

Posterior distributions yield point estimates via measures of central tendency
like the median or mean, as well as *Bayesian posterior intervals* (similar to
confidence intervals) via their quantiles. For example, suppose we assume
the prior for $\theta$ is $Beta(10,5)$. After flipping the coin 1000 times,
suppose we observe 604 heads and 396 tails. Then the posterior is
$p(\theta|y) \sim Beta(10 + 604, 5 + 396)$, shown below

    img(src="images/beta_prior_coin_ex_2.svg")

From the plot of the posterior, we see that most of the distribution's mass
is centered around $[0.55, 0.65]$. Since we know the exact distribution
function, we can explicitly compute the probability that $\theta$ lies in
this interval. Adding the code snippet below to the previous executable code
gives the desired result:

``` julia
cdf(Beta(α+p,β+q),0.65) - cdf(Beta(α+p,β+q),0.55)
```

which is approximately 0.998. Thus, given the observed data, we can be highly
confident that $\theta$ lies between 0.55 and 0.65, supporting our assumption
that the coin is biased.

We can also obtain a Bayesian confidence interval
(analogous to the frequentist confidence interval). Suppose we want a 95%
confidence interval. The code below uses the quantile/inverse CDF function to
obtain the desired interval:

``` julia
confidence_interval = [quantile(Beta(α+p,β+q),0.025), quantile(Beta(α+p,β+q),0.975)]
```

which yields $[0.575, 0.635]$. Both of the intervals above are
*posterior intervals*, also sometimes called *credible intervals*
and abbreviated CI, though it is more common to give confidence intervals
with a specified level of confidence like our 95% CI above.

With the frequentist approach, an estimator would yield a single point estimate
for  $\theta$. With the Bayesian approach, we can summarize the posterior value
of $\theta$ via measure of central tendency, for example, the mean:

``` julia
mean(Beta(α+p,β+q))
```

which yields 0.605.

In the example presented here we obtained a closed-form posterior distribution
which made it easy to report posterior uncertainty via point estimates like the
mean and median, and via posterior intervals. However, this may not always be
the case and simulations may need to be performed to obtain the desired
summaries.

<!-- Break  -->

Bayesian and frequentist statistics often yield similar results in the limit:
under quite general conditions, the posterior distribution is approximately
normal with mean converging to the maximum likelihood estimator as the sample
size goes to $\infty$.

Continuing our previous example, we can compute:

``` latex
\mathbb{E}[\theta|y] &= \frac{\alpha + p}{\alpha + \beta + p + q} \\
Var(\theta|y) &= \frac{(\alpha + p)(\beta + q)}
{(\alpha + \beta + p + q)^2(\alpha + \beta + p + q+1)}
```

For fixed $\alpha,\beta$, as $p$ and $q$ grow, we have
$\mathbb{E}[\theta|y] \approx \frac{p}{p+q}$ and
$Var(\theta|y) \approx \frac{pq}{(p+q)^3}$. Note that $\mathbb{E}[\theta|y]$
here converges to the MLE for $\theta$. More generally, we have

``` latex
\left(\left.\frac{\theta - \mathbb{E}[\theta|y]}{\sqrt{Var(\theta|y)}} \right|
y \right) \to Normal(1,0)
```

Often, when the posterior distribution does not have a closed form, a normal
distribution as shown above is used as an approximation.

<!-- todo: explore this idea with a concrete example -->

---
> id: markov-chain-monte-carlo
## Markov Chain Monte Carlo


Bayesian analysis often involves evaluating integrals. For example, the
posterior mean is $\frac{\int_{\mathbb{R}^n} \theta \mathcal{L}(\theta)
f(\theta) \mathrm{d}\theta }{\int_{\mathbb{R}^n} \mathcal{L}(\theta) f(\theta)
\mathrm{d}\theta }$, where $\mathcal{L}(\theta) = f(x| \theta)$ is the
likelihood. These integrals are often impossible to solve analytically
as demonstrated in the following example:


::: .example
**Example**  

Suppose we have data $y$ and would like to obtain the posterior mean for
a parameter $\theta \in [1,2]$. We will assume
$f(\theta) = \frac{1}{\log(4)-1}\log(\theta)$ and that
$f(y|\theta) \sim Normal(\theta,1)$. Then the posterior mean is given by

``` latex
\mathbb{E}[\theta|y] &=
\frac{\frac{1}{\sqrt{2\pi}} \cdot \frac{1}{\log(4)-1}\int_1^2
\theta e^{-\frac{(y-\theta)^2}{2}}\log(\theta) d\theta}
{\frac{1}{\sqrt{2\pi}} \cdot \frac{1}{\log(4)-1}\int_1^2
e^{-\frac{(y-\theta)^2}{2}}\log(\theta) d\theta} \\
&=
\frac{\int_1^2\theta e^{-\frac{(y-\theta)^2}{2}}\log(\theta) d\theta}
{\int_1^2 e^{-\frac{(y-\theta)^2}{2}}\log(\theta) d\theta}.
```

The integrals in both the numerator and denominator above are intractable, i.e.,
cannot be computed analytically.
:::

In the case where the parameter space is high-dimensional, e.g., when the
parameter $\theta$ is a vector in $\mathbb{R}^n$, the integrals that arise in
Bayesian analyses become even more complex and quickly become infeasible to
solve even when using exact numerical methods.
One solution is to use **Monte Carlo** methods: use the identity $\int_{\mathbb{R}^n} g(x)  f(x)  \mathrm{d}x = \mathbb{E}[g(X)]$ where $X$ is a random vector with density $f$. The expectation can be approximated by sampling repeatedly from the density $f$, using the law of large numbers.

**Markov Chain Monte Carlo** (MCMC) is useful for approximating $\int_{\mathbb{R}^n} g(x) f(x) \mathrm{d}x$ when sampling from $f$ is difficult. Metropolis-Hastings is a common class of MCMC algorithms:

* For each $x\in \mathbb{R}^n$, let $q(x)$ be a distribution on $\mathbb{R}^n$ that we can readily sample from, and for which $q(x)(y) = q(y)(x)$.
* Choose $X_0$ arbitrarily, and sample $X_{\text{new}}$ from the distribution $q(X_0)$
* Define $X_1$ to be $X_{\text{new}}$ with probability $\frac{f(X_{\text{new}})}{f(X_0)}$ (or 1, if the given ratio exceeds 1) and $X_0$ otherwise.
* Repeat steps (ii) and (iii) to obtain $X_2$ from $X_1$, $X_3$ from $X_2$, and so on.

TODO: build computational example demonstrating how Metropolis-Hastings works in an example. Perhaps import the example from Stochatic Approximations.

The resulting sequence $X_0, X_1, \ldots$ has the property that the distribution of $X_n$ converges to $f$ as $n\to\infty$, as well as the property that the mean of the list $[g(X_0),g(X_1),\ldots,g(X_n)]$ converges to $\int_{\mathbb{R}^n} g(x) f(x) \mathrm{d}x$.

TODO: elaborate further on how these algorithms work. Readers do not need nearly enough details to reconstruct them from scratch, but hopefully enough to get a sense of when they might use which, and some intuition for the innovations of each. Possibly useful for HMC: https://arxiv.org/abs/1701.02434

Popular Metropolis algorithms:

* **Hamiltonian Monte Carlo** (HMC). Suitable for continuous variables and much faster than plain Metropolis-Hastings with a Gaussian proposal distribution. Requires the ability to differentiate the density with respect to the variables (often handled using autodiff).
* **No U-Turn Sampler** (NUTS). A common variant of HMC.
* **Particle Gibbs** (PG). Suitable for discrete variables.
* **Gibbs Sampler**. Gibbs sampling allows us to modify different variables using different samplers: we alternatingly hold one set of variables fixed while proposing a Metropolis update to the others, then hold the latter set fixed while proposing an update to the former set.

TODO: expand this paragraph to a discussion of a specific example of Bayesian statistics' advantage vis a vis priors. The example I like to use is a magician's coin versus a random coin from circulation, evaluated on the basis of a sequence of several consective heads results. There's a good discussion of this in Wasserman's *All of Statistics*.

One disadvantage of Bayesian statistics is the subjectivity of the prior distribution. On the other hand, when a meaningful prior is available, Bayesian statistics provides a natural way to combine that information with the observed data. Frequentist and Bayesian statistics both have strengths and weaknesses which can vary in importance depending on the details of the problem at hand.

---
> id: bayesian-networks
## Bayesian Networks


A **Bayes net** is a random vector together with a directed acyclic graph (DAG) which models conditional dependence relationships among its components.

    img(src="images/bayes-net.svg")

The random vector $\mathbf{X} = (X_1, \ldots, X_5)$ and the graph shown make a Bayes net if the distribution of $\mathbf{X}$ factors as a product of conditional distributions as indicated by the graph connections; that is, if for all $(x_1, \ldots, x_5)$, we have

``` latex
\mathbb{P}(\mathbf{X} = (x_1, x_2, \ldots, x_5)) =  &\mathbb{P}(X_1 = x_1) \times \\ &\mathbb{P}(X_2=x_2| X_1 = x_1)\times \\ &\mathbb{P}(X_3=x_3| X_1 = x_1)\times \\ &\mathbb{P}(X_4=x_4| X_2 = x_2,X_3 = x_3)
      \times \\ &\mathbb{P}(X_5=x_5| X_3 = x_3)
```

In many Bayes net applications, only some of the random variables are observed. The others are called *hidden* or *latent* variables. This missing information presents inference challenges.

A **Gaussian mixture model** (GMM) is a Bayes net consisting of a discrete random variable $Z$ and a random variable $X$ whose conditional distribution given each possible value of $Z$ is Gaussian.

A **hidden Markov model** is a Bayes net consisting of a chain of random variables $Z_1, \ldots, Z_n$ (called *hidden* variables), each of which is the parent of a single random variable $X_i$

    img(src="images/hidden-markov.svg")

Bayes net inference (drawing conclusions about the model based on observed data) can be carried out using a maximum likelihood technique called expectation-maximization (EM) or using Bayesian MCMC methods.

---
> id: expectation-maximization
## Expectation-Maximization


**Expectation-Maximization** is an iterative procedure for parameter estimation in models with hidden variables: start with a random guess for the parameters and find the conditional distribution $\zeta$ of the hidden variables given the observed variables and the current parameter guess. We then treat the parameter vector $\theta$ as unknown and compute—with respect to the measure $\zeta$—the expected log likelihood function $Q(\theta)$. New parameters are chosen to maximize $Q$, and the two steps are iterated to convergence.

We will introduce the Expectation-Maximization (EM) algorithm in the context
of maximum likelihood estimation. Indeed, finding the MLE is often not
easy to do analytically. We will begin by presenting an approach known as
*Minorize-Maximization*  (MM) which will give a procedure for maximizing a
function; moreover, the EM algorithm is a special case of MM.

We will assume the parameter we are trying to estimate is
$\theta \in \Theta \subseteq \mathbb{R}$.

::: .definition
**Definition** (Minorize)

Let $g: \Theta \times \Theta \to \mathbb{R}$ and $f: \Theta \to \mathbb{R}$.
Then $g$ is said to *minorize* f if for all $\theta, \bar{\theta} \in \Theta$:

1. $g(\theta, \theta) = f(\theta)$.

2. $g(\theta, \bar{\theta}) \leq f(\theta)$.
:::

::: .example
**Example**  

Let $f(x) = -\log (x)$. Then $g(x,y) = \frac{x-y}{x} - \log(x)$ minorizes $f$.
:::

Suppose that $g: \Theta \times \Theta \to \mathbb{R}$ minorizes
$f: \Theta \to \mathbb{R}$. Then the MM procedure attempts to maximize $f$
by first setting the initial guess $\theta_0 \in \Theta$ and then performing
the following iterations:

``` latex
\theta_1 &= \textrm{argmax}_{\theta} g(\theta,\theta_0) \\
\theta_2 &= \textrm{argmax}_{\theta} g(\theta,\theta_1) \\
&\vdots \\
\theta_k &= \textrm{argmax}_{\theta} g(\theta,\theta_{k-1}).
```

From the definiton of $\theta_k$ above, we have
$g(\theta_k,\theta_{k-1}) \geq g(\theta,\theta_{k-1})$ for all
$\theta$. In particular, for $\theta = \theta_{k-1}$, we have
$g(\theta_k, \theta_{k-1}) \geq g(\theta_{k-1},\theta_{k-1}) = f(\theta_{k-1})$.
Moreover, because $g(\theta, \bar{\theta}) \leq f(\theta)$ for all
$\theta, \bar{\theta}$, then for $\bar{\theta} = \theta_{k-1}$ we have
$g(\theta_k, \theta_{k-1}) \leq f(\theta_k)$.
Thus we have $g(\theta_k, \theta_{k-1}) \geq f(\theta_{k-1})$ and
$g(\theta_k, \theta_{k-1}) \leq f(\theta_k)$ which implies
$f(\theta_{k-1}) \leq f(\theta_k)$ so the MM procedure guarantees that $f$
does not decrease after each iteration.

Since we are interested in computing MLEs, $f(\theta)$ will typically be
a likelihood function. Let $h(y,\theta) \geq 0$ for all $y, \theta$ and define

``` latex
f(\theta) &= \log\left(\sum_y h(y,\theta)\right).
```

We claim that the function $g(\theta, \bar{\theta})$ defined below minorizes
$f$:

``` latex
g(\theta, \bar{\theta}) &= f(\bar{\theta}) + \sum_y
\frac{h(y,\bar{\theta})}{e^{f(\bar{\theta})}}
\log\left(\frac{h(y,\theta)}{h(y,\bar{\theta})}\right).
```

Note that $g(\theta, \theta) = f(\theta) + 0 = f(\theta)$. To prove that
$g(\theta, \bar{\theta}) \leq f(\theta)$ for all $\theta, \bar{\theta}$ we
will use Jensen's inequality:

::: .theorem
**Theorem** (Jensen's Inequality for Probability)

Let $X$ be a random variable and $\phi$ a convex function. Then

``` latex
\phi(\mathbb{E}[X]) \leq \mathbb{E}[\phi(X)].
```
:::

*Remark*: If $\phi$ is convex, then $\psi = -\phi$ is concave and
Jensen's inequality yields:

``` latex
\mathbb{E}[\psi(X)] \leq \psi(\mathbb{E}[X]).
```

Note that
$p(y) = \frac{h(y,\bar{\theta})}{e^{f(\bar{\theta})}} =
\frac{h(y,\bar{\theta})}{\sum_y h(y,\bar{\theta})}$ is a probability
distribution function. Thus the term
$\sum_y
\frac{h(y,\bar{\theta})}{e^{f(\bar{\theta})}}
\log\left(\frac{h(y,\theta)}{h(y,\bar{\theta})}\right)$ is an expectation:

``` latex
\sum_y
\frac{h(y,\bar{\theta})}{e^{f(\bar{\theta})}}
\log\left(\frac{h(y,\theta)}{h(y,\bar{\theta})}\right) &=
\mathbb{E}_Y\left[\log\left(\frac{h(Y,\theta)}{h(Y,\bar{\theta})}\right)\right].
```

Then because $\log(\cdot)$ is a concave function, we can apply Jensen's
inequality to conclude:

``` latex
\mathbb{E}_Y\left[\log\left(\frac{h(Y,\theta)}{h(Y,\bar{\theta})}\right)\right]
&\leq
\log\left(\mathbb{E}_Y\left[\frac{h(Y,\theta)}{h(Y,\bar{\theta})}\right]\right) \\
&= \log\left(\sum_y \frac{h(y,\bar{\theta})}{e^{f(\bar{\theta})}} \cdot
\frac{h(y,\theta)}{h(y,\bar{\theta})}
\right) \\
&= \log\left(\sum_y \frac{h(y,\theta)}{e^{f(\bar{\theta})}}
\right) \\
&= \log\left(e^{-f(\bar{\theta})}\sum_y h(y,\theta)
\right) \\
&= \log\left(\sum_y h(y,\theta)\right) - f(\bar{\theta}) \\
&= f(\theta) - f(\bar{\theta}).
```

Thus,

``` latex
g(\theta, \bar{\theta}) &= f(\bar{\theta}) +
\underbrace{\sum_y \frac{h(y,\bar{\theta})}{e^{f(\bar{\theta})}}
\log\left(\frac{h(y,\theta)}
{h(y,\bar{\theta})}\right)}_{\leq f(\theta) - f(\bar{\theta})} \\
&\leq f(\theta).
```





TODO: insert these images (see source)

    img(src="images/gmm-step-0.svg")
    img(src="images/gmm-step-1.svg")
    img(src="images/gmm-step-2.svg")

TODO: provide more details in this example

::: .example
**Example**  
Consider a GMM with a $\\{0,1\\}$-valued $Z$: we have $\mathbb{P}(Z = 1) = \alpha$, and for each observation $i$ and each $j \in \\{0,1\\}$, the conditional distribution of $\mathbf{X}_i$ given $Z_i = j$ is normal with mean $\boldsymbol{\mu}_j$ and covariance $\Sigma_j$. All together, the parameter vector is $\theta = (\alpha, \boldsymbol{\mu}_0, \Sigma_0, \boldsymbol{\mu}_1, \Sigma_1)$. By Bayes' theorem, the conditional distribution of $Z_i$ given $\mathbf{X}\_i = \mathbf{x}\_i$ is Bernoulli with success probability

``` latex
\pi_i = \frac{\alpha f_1(\mathbf{x}_i)}{\alpha f_1(\mathbf{x}_i) + (1-\alpha) f_0(\mathbf{x}_i)},
```

where $f\_j$ is the normal density with mean $\boldsymbol{\mu}\_j$ and covariance $\Sigma\_j$. Then, treating the $\pi\_i$'s as constant, we get

``` latex
      Q(\theta) &= \mathbb{E}\left[\log \prod_{i=1}^n(z_i\alpha f_1(\mathbf{x}_j)+(1-z_i)(1-\alpha) f_0(\mathbf{x}_j))\right] \\
      &= \sum_{i=1}^n \pi_i[\log \alpha + \log f_1(\mathbf{x}_i)] \\ &\hspace{6mm} +
      (1-\pi_i)[\log (1-\alpha) + \log f_1(\mathbf{x}_i)].
```

Optimizing, we get $\pi$-weighted counts, means, and covariance matrices for $\alpha$, $\boldsymbol{\mu}_1, \boldsymbol{\mu}_0, \Sigma_1$ and $\Sigma_0$.
:::

In the EM iterations shown, membership probabilities $\pi_i$, based on current parameter estimates, are indicated by point color (E-step). These values are used as weights to update the means and covariances for the multivariate normal distributions (M-step).

TODO: give a second, reasonably distinct application of EM

```julia
using Plots
using Distributions
using Random
gr(size=(300,300))

function ellipse!(μ,Σ;kw...)
    for i=1:3
        plot!([tuple((i*sqrt(Σ)*[cos(t),sin(t)]+μ)...) for t in range(0,stop=2π,length=100)];
              seriestype=:shape,linealpha=0.5,linecolor=:gray,fillalpha=[0.4,0.2,0.1][i],kw...)
    end
    current()
end

function mixtureplot(X₁,X₂,μ₀,Σ₀,μ₁,Σ₁,Π)
    scatter(X₁,X₂;fillalpha=0.5,markerstrokewidth=0.5,
        marker_z=Π,mc=ColorGradient([:lightblue,:orange]),
        colorbar=:false)
    ellipse!(μ₀,Σ₀,fillcolor=:lightblue)
    ellipse!(μ₁,Σ₁,fillcolor=:orange)
    plot!(;bg=:transparent,xlims=(-4.5,8.5),ylims=(-3.5,10.5),
        leg=false,ticks=:none,ratio=:equal)
end

function scalein(x)
    (x-1/2)^101/(0.5^101)
end

Random.seed!(123);
n = 100
α = 0.4
𝒩₀ = MvNormal([1,1],[2.0 1.0; 1.0 2.0])
𝒩₁ = MvNormal([3.0,7.0],[1.5 0; 0 0.5])
X₁ = zeros(n)
X₂ = zeros(n)
Z = zeros(Bool,n)
for i=1:n
    Z[i] = rand(Bernoulli(α))
    X₁[i],X₂[i] = Z[i] ? rand(𝒩₁) : rand(𝒩₀)
end

α = 0.6
μ₀ = [3.0,3.0]
μ₁ = [1.0,6.0]
Σ₀ = 1.0*Matrix(I, 2, 2)
Σ₁ = 1.0*Matrix(I, 2, 2)
# mixtureplot(X₁,X₂,μ₀,Σ₀,μ₁,Σ₁)

Π = [α*pdf(MvNormal(μ₁,Σ₁),[x₁,x₂]) /
       ((1-α)*pdf(MvNormal(μ₀,Σ₀),[x₁,x₂]) +
        α*pdf(MvNormal(μ₁,Σ₁),[x₁,x₂])) for (x₁,x₂) in zip(X₁,X₂)];

α = sum(Π)/n
μ₀ = [(1 .- Π) ⋅ X₁, (1 .- Π) ⋅ X₂] / sum(1 .- Π)
μ₁ = [Π ⋅ X₁, Π ⋅ X₂] / sum(Π)
Σ₀ = Matrix(Hermitian(sum((1-π)*([x₁,x₂] - μ₀) * ([x₁,x₂] - μ₀)' for (x₁,x₂,π) in zip(X₁,X₂,Π))/sum(1 .- Π)))
Σ₁ = Matrix(Hermitian(sum(π*([x₁,x₂] - μ₁) * ([x₁,x₂] - μ₁)' for (x₁,x₂,π) in zip(X₁,X₂,Π))/sum(Π)))
Π = [α*pdf(MvNormal(μ₁,Σ₁),[x₁,x₂]) /
       ((1-α)*pdf(MvNormal(μ₀,Σ₀),[x₁,x₂]) +
        α*pdf(MvNormal(μ₁,Σ₁),[x₁,x₂])) for (x₁,x₂) in zip(X₁,X₂)];

mixtureplot(X₁,X₂,μ₀,Σ₀,μ₁,Σ₁,Π)        
```

---
> id: probabilistic-programming
## Probabilistic Programming

A **Probabilistic Programming Language** (PPL) is a framework for describing stochastic models and performing inference on them. Examples: **Stan** (a C++ library, callable from Julia/Python/R), **PyMC3**, and **Turing.jl**.

TODO: explain the probabilistic programming setup in more detail  
TODO: provide more context and explanation for the example below  
TODO: provide 1-2 more examples of probabilistic programming applications

A HMM example in Turing.jl (the object returned on the last line will contain estimates for the parameters):

``` julia
using Turing
@model HMM(x) = begin
    n = length(x)
    z = tzeros(Int64, n) # hidden states
    p₁ ~ Uniform(0,1) # trans. prob. 1→1
    p₂ ~ Uniform(0,1) # trans. prob. 2→1
    P = [p₁ 1-p₁; p₂ 1-p₂] # transition matrix
    z[1] ~ Categorical([0.5,0.5]) # start 1 or 2
    x[1] ~ Normal(z[1],0.1)
    for i=2:n
        # choose next hidden state
        z[i] ~ Categorical(P[z[i-1],:])
        x[i] ~ Normal(z[i],0.1) # add noise
    end
end
# choose parameters for samplers
hmc = HMC(2, 0.001, 7, :p₁, :p₂)
pg = PG(20, 1, :z)
G = Gibbs(1000, hmc, pg)
# perform inference (assuming the vector x
# contains empirical observations)
sample(HMM(x), G)
```
