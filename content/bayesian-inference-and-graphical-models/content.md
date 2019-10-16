
# Bayesian Inference and Graphical Models

> id: intro
## Introduction

In contrast to frequentist statistics, which represents model parameters as fixed and unknown, Bayesian statistics regards model parameters as random variables with a specified **prior** distribution. Observed data are used to obtain an updated **posterior** distribution, via Bayes' theorem.

::: .example
**Example**  
The prior for the heads probability of a weighted coin might be stipulated to be uniform on $[0,1]$. Then observing $p$ heads and $q$ tails results in a posterior distribution proportional to $t\mapsto t^{p}(1-t)^{q}$. Frequentist statistics would instead give a single point estimate (such as the maximum likelihood estimator $p / (p + q)$).
:::

If the prior and posterior distributions belong to the same family of distributions, they are called **conjugate**.

::: .example
**Example**  
Example: heads-probability distributions of the form $t\mapsto t^{p}(1-t)^{q}$ on $[0,1]$ update under coin flip observations by incrementing the exponents $p$ and $q$, so they are conjugate priors for the coin flip problem.
:::

**Posterior is proportional to likelihood times prior**: if $X$ is the observed random variable and $\Theta$ the vector of model parameters, then
  
``` latex
  \overbrace{f(\theta | x)}^{\text{posterior}} = \frac{\overbrace{f(x | \theta)}^{\text{likelihood}}\overbrace{f(\theta)}^{\text{prior}}}{\underbrace{f(x)}_{\text{marginal}}}
```

where $f(\theta | x)$ is shorthand for the conditional density or mass function of $\Theta$ given $X = x$. 
  
Posterior distributions yield point estimates via measures of central tendency like the median or mean, as well as *Bayesian posterior intervals** (similar to confidence intervals) via their quantiles. 

Bayesian and frequentist statistics often yield similar results in the limit: under quite general conditions, the posterior distribution is approximately normal with mean converging to the maximum likelihood estimator as the sample size goes to $\infty$.

---
> id: markov-chain-monte-carlo
## Markov Chain Monte Carlo


Bayesian analysis often involves evaluating integrals. For example, the posterior mean is $\frac{\int_{\mathbb{R}^n} \theta \mathcal{L}(\theta) f(\theta)\, \mathrm{d}\theta }{\int_{\mathbb{R}^n} \mathcal{L}(\theta) f(\theta)\, \mathrm{d}\theta }$, where $\mathcal{L}(\theta) = f(x| \theta)$ is the likelihood. These integrals are often impossible to solve analytically or even approximate using exact numerical methods in the case where the parameter space is high-dimensional. One solution is to use \textbf{Monte Carlo} methods: use the identity $\int_{\mathbb{R}^n} g(x)  f(x)  \mathrm{d}x = \mathbb{E}[g(X)]$ where $X$ is a random vector with density $f$. The expectation can be approximated by sampling repeatedly from the density $f$, using the law of large numbers.

**Markov Chain Monte Carlo** (MCMC) is useful for approximating $\int_{\mathbb{R}^n} g(x) f(x) \mathrm{d}x$ when sampling from $f$ is difficult. Metropolis-Hastings is a common class of MCMC algorithms:

* For each $x\in \mathbb{R}^n$, let $q(x)$ be a distribution on $\mathbb{R}^n$ that we can readily sample from, and for which $q(x)(y) = q(y)(x)$.
* Choose $X_0$ arbitrarily, and sample $X_{\text{new}}$ from the distribution $q(X_0)$
* Define $X_1$ to be $X_{\text{new}}$ with probability $\frac{f(X_{\text{new}})}{f(X_0)}$ (or 1, if the given ratio exceeds 1) and $X_0$ otherwise.
* Repeat steps (ii) and (iii) to obtain $X_2$ from $X_1$, $X_3$ from $X_2$, and so on.
  
The resulting sequence $X_0, X_1, \ldots$ has the property that the distribution of $X_n$ converges to $f$ as $n\to\infty$, as well as the property that the mean of the list $[g(X_0),g(X_1),\ldots,g(X_n)]$ converges to $\int_{\mathbb{R}^n} g(x) \, f(x) \, \mathrm{d}x$. 

Popular Metropolis algorithms:
  
* **Hamiltonian Monte Carlo** (HMC). Suitable for continuous variables and much faster than plain Metropolis-Hastings with a Gaussian proposal distribution. Requires the ability to differentiate the density with respect to the variables (often handled using autodiff).
* **No U-Turn Sampler** (NUTS). A common variant of HMC. 
* **Particle Gibbs** (PG). Suitable for discrete variables. 
* **Gibbs Sampler**. Gibbs sampling allows us to modify different variables using different samplers: we alternatingly hold one set of variables fixed while proposing a Metropolis update to the others, then hold the latter set fixed while proposing an update to the former set.
  
One disadvantage of Bayesian statistics is the subjectivity of the prior distribution. On the other hand, when a meaningful prior is available, Bayesian statistics provides a natural way to combine that information with the observed data. Frequentist and Bayesian statistics both have strengths and weaknesses which can vary in importance depending on the details of the problem at hand.

---
> id: bayesian-networks
## Bayesian Networks


A **Bayes net** is a random vector together with a directed acyclic graph (DAG) which models conditional dependence relationships among its components.

The random vector $\mathbf{X} = (X_1, \ldots, X_5)$ and the graph shown make a Bayes net if the distribution of $\mathbf{X}$ factors as a product of conditional distributions as indicated by the graph connections; that is, if for all $(x_1, \ldots, x_5)$, we have

``` latex
\mathbb{P}(\mathbf{X} = (x_1, x_2, \ldots, x_5)) = \, &\mathbb{P}(X_1 = x_1) \times \\ &\mathbb{P}(X_2=x_2| X_1 = x_1)\times \\ &\mathbb{P}(X_3=x_3| X_1 = x_1)\times \\ &\mathbb{P}(X_4=x_4| X_2 = x_2,X_3 = x_3)
      \times \\ &\mathbb{P}(X_5=x_5| X_3 = x_3)
```

In many Bayes net applications, only some of the random variables are observed. The others are called \textit{hidden} or \textit{latent} variables. This missing information presents inference challenges.

A **Gaussian mixture model** (GMM) is a Bayes net consisting of a discrete random variable $Z$ and a random variable $X$ whose conditional distribution given each possible value of $Z$ is Gaussian.

A **hidden Markov model** is a Bayes net consisting of a chain of random variables $Z_1, \ldots, Z_n$ (called *hidden* variables), each of which is the parent of a single random variable $X_i$

Bayes net inference (drawing conclusions about the model based on observed data) can be carried out using a maximum likelihood technique called expectation-maximization (EM) or using Bayesian MCMC methods. 

---
> id: expectation-maximization
## Expectation-Maximization


**Expectation-Maximization** is an iterative procedure for parameter estimation in models with hidden variables: start with a random guess for the parameters and find the conditional distribution $\zeta$ of the hidden variables given the observed variables and the current parameter guess. We then treat the parameter vector $\theta$ as unknown and compute—with respect to the measure $\zeta$—the expected log likelihood function $Q(\theta)$. New parameters are chosen to maximize $Q$, and the two steps are iterated to convergence. 

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