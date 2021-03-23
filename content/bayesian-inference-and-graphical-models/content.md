# Bayesian Inference and Graphical Models

> id: intro
> description: Bayesian vs frequentist statistics, conjugate priors, Markov Chain Monte Carlo, Bayesian networks, Expectation-Maximization, and Probabilistic Programming.
> color: "#4d64b3"
> next: epidemic-modeling
> author: Samuel S. Watson and Elvis Nunez

## Introduction

::: .exercise
**Exercise**  
Consider the following two scenarios.

1. You pull a coin out of your change purse and flip it five times. It comes up heads all five times.
2. You meet a magician who flips a coin five times and shows you that it came up heads all five times.

In which situation would you be more inclined to be skeptical of the null hypothesis that the coin being flipped is a fair coin?
:::

    x-quill

---
> id: solution-coin-flip-bayes

*Solution.* We'd be more inclined to be skeptical in the magician scenario, since it isn't unusual for a magician to have a trick coin or card deck. Given a random coin from our change purse, it is extraordinarily unlikely that the coin is actually significantly biased towards heads. Although it's also unlikely for a fair coin to turn up heads five times in a row, that isn't going to be enough evidence to be persuasive.

[Continue](btn:next)

---
> id: bayes-vs-frequentist

This example illustrates one substantial shortcoming of the statistical framework—called **frequentism**—used in [our statistics course](https://mathigon.org/course/intro-statistics/). Frequentism treats parameters as *fixed constants* rather than random variables, and as a result it does not allow for the incorporation of information we might have about the parameters beyond the data observed in the random experiment (such as the real-world knowledge that a magician is not so unlikely to have a double-headed coin).

**Bayesian statistics** is an alternative framework in which we do treat model parameters as random variables. We specify a **prior** distribution for a model's parameters, and this distribution is meant to represent what we believe about the parameters before we observe the results of the random experiment. Then the results of the experiment serve to update our beliefs, yielding a **posterior** distribution.

[Continue](btn:next)

---
> id: step-name-bayes-rule

The theorem in probability which specifies how probability distributions update in light of new evidence is called [[Bayes rule|the tower law|linearity of expectation]].

---
> id: step-bayes-stats-bayes-rule

For example, if your *prior* assessment of the probability that the magician's coin is double-headed is 5\%, then your *posterior* estimate of that probability after observing five heads would shoot up to

``` latex
\mathbb{P}(\text{two-headed}|\text{5 heads}) =
\frac{\mathbb{P}(\text{5 heads}|\text{two-headed})\mathbb{P}(\text{two-headed})}{\mathbb{P}(\text{5 heads})} = \frac{(1)(5\%)}{(1)(5\%) + (1/2^5)(95\%)} \approx 62.7\%.
```

Meanwhile if the prior for double-headedness for the coin in your coin purse is $0.001$, then the posterior is only $\frac{(1)(0.1\\%)}{(1)(0.01\\%) + (1/2^5)(95\\%)} \approx 3.26\\%$.

The quantity $\mathbb{P}(\text{5 heads}|\text{two-headed})$ is called the **likelihood** of the observed result. So we can summarize Bayes theorem with the mnemonic **posterior is proportional to likelihood times prior**.

[Continue](btn:next)

---
> id: step-update-density

Bayes rule takes an especially simple form when our distributions are supported on two values (for example, "fair" and "double-headed"), but we can apply the same idea to other probability mass functions as well as probability density functions.

::: .example
**Example**  
Suppose that the heads probability of a coin is $p$. Consider a uniform prior distribution for $p$, and suppose that $n$ flips of the coin are observed. Express the posterior density in terms of the number of heads $H(x)$ and tails $T(x)$ in the observed sequence $x$ of $n$ flips.
:::

*Solution.* We calculate the posterior density $f$ as likelihood times prior. Let's call $X$ the random sequence of flips, and suppose $x$ is a possible value of $X$. We get

``` latex
\overbrace{f(p|x)}^{\text{posterior}} \varpropto \overbrace{f(x|p)}^{\text{likelihood}}\overbrace{f(p)}^{\text{prior}} = p^{H(x)}(1-p)^{T(x)}(1)
```

In this formula we are employing a common abuse of notation by using the same letter ($f$) for three different densities. For example, $f(p|x)$ refers to the conditional density of $p$ given $x$; more precisely, it refers to the density of the conditional distribution of the random variable $P$ given the event $X = x$, evaluated at the value $p$. It might more written more conventionally as $f_{P|X = x}(p)$. Likewise, $f(p)$ refers to the marginal distribution of $p$, and so on.

[Continue](btn:next)

---
> id: betadensity

The continuous distribution on $[0,1]$ whose density is proportional to $p^{H}(1-p)^{T}$ is called the **Beta** distribution with parameters $\alpha = H + 1$ and $\beta = T + 1$. So the coin flip posterior for a uniform prior is a Beta distribution.

{.text-center} `α =`${α}{α|20|1,50,1}

{.text-center} `β =`${β}{β|20|1,50,1}

    x-chart(width=600 height=400 x-axis="0,1,0.2" y-axis="0,14,2" axis-names="p,pdf(Beta(α,β),p)")

[Continue](btn:next)

---
> id: step-beta-posterior-exercise

::: .exercise
**Exercise**  
Show that the coin flip posterior for a Beta prior is also a Beta distribution. How does the evidence alter the parameters of the beta distribution.
:::

    x-quill

---
> id: beta-posterior-solution

*Solution.* If the prior density is proportional to $p^{\alpha-1}(1-p)^{\beta-1}$, then the posterior distribution is proportional to $p^{\alpha + H(x) -1}(1-p)^{\beta + T(x)-1}$, following the same calculation as above. In other words, each head in the observed sequence increments the $\alpha$ parameter of the distribution, while each tail increments the $\beta$ parameter.

When the posterior distribution has the same parametric form as the prior distribution, this property is called *conjugacy*. For the example above, we say that the Beta distribution is a conjugate family for the binomial likelihood.

---
> id: markov-chain-monte-carlo
## Markov Chain Monte Carlo

While conjugate priors are elegant, they aren't always applicable. We might want to use a prior distribution which isn't in a conjugate family, or we might not be able to come up with a conjugate family for a given problem. So more general techniques are called for. Let's look at a simple example where we run into difficulties trying to work entirely with on-paper formulas.

::: .example
**Example**  
Suppose that we have a prior density for a parameter $\theta$ given by
$f(\theta) = \frac{1}{\log(4)-1}\log(\theta)$. Suppose that the data are drawn from the distribution $f(x|\theta) \sim \operatorname{Normal}(\theta,1)$.

Derive a formula for the posterior mean of $\theta$, given a single observation $x$ from this distribution. Can the formula be evaluated analytically?
:::

[Continue](btn:next)

---
> id: step-posterior-intractable-solution

*Solution.* The posterior mean is given by

``` latex
\mathbb{E}[\theta|x] &=
\frac{\frac{1}{\sqrt{2\pi}} \cdot \frac{1}{\log(4)-1}\int_1^2
\theta e^{-\frac{(x-\theta)^2}{2}}\log(\theta) d\theta}
{\frac{1}{\sqrt{2\pi}} \cdot \frac{1}{\log(4)-1}\int_1^2
e^{-\frac{(x-\theta)^2}{2}}\log(\theta) d\theta} \\
&=
\frac{\int_1^2\theta e^{-\frac{(x-\theta)^2}{2}}\log(\theta) d\theta}
{\int_1^2 e^{-\frac{(x-\theta)^2}{2}}\log(\theta) d\theta}.
```

The integrals in the numerator and denominator [cannot be computed analytically](https://www.wolframalpha.com/input/?i=%5Cint_1%5E2%5Ctheta+e%5E%7B-%5Cfrac%7B%28y-%5Ctheta%29%5E2%7D%7B2%7D%7D%5Clog%28%5Ctheta%29+d%5Ctheta).

[Continue](btn:next)

---
> id: step-markov-chain-for-estimation-intro

We could evaluate these integrals to high precision using standard numerical integration techniques like the trapezoid rule. However we're going to want to use a less accurate but more flexible approach based on *Markov chains*, because the trapezoid rule and similar approaches become intractable when our data are high-dimensional. For example, a 28 by 28 grayscale image is an element of $[0,1]^{728}$, which is practically impossible to sample densely—counting *just* the corners, it contains a set of $2^{728} \approx 1.4 \times 10^{219}$ points with no point closer than one unit to another.

[Continue](btn:next)

---
> id: markov-chains
### Markov Chains

A discrete Markov chain is a sequence of random variables whose joint distribution is specified by a diagram like this one:

    figure
      img(src="images/markov-chain.svg" width="70%")
      p.caption.md Transition probabilities for a four-state Markov chain

The value of the initial random variable $X_1$ is one of the four *states* (A, B, C, or D in this example), and then the conditional distribution of $X_2$ given $X_1$ is determined by the outgoing arrows from $X_1$. For example, if $X_1 = \mathrm{C}$, then $X_2$ will be $\mathrm{C}$ with probability 1/2 or $\mathrm{D}$ with probability $\frac{1}{2}$. Then the conditional distribution of $X_3$ given $X_2$ is determined by the outgoing arrows from $X_2$, and so on.

::: .exercise
**Exercise**  
Write down the matrix $P$ whose $(i,j)\text{th}$ entry is the probability of transitioning to the $j\text{th}$ state given that the Markov chain is currently at the $i\text{th}$ state.
:::

    x-quill

---
> id: exercise-transmat-solution

*Solution.* The **transition matrix** $P$ is given by

```julia
P = [1/2 1/2  0    0   
     1/2  0  1/2   0   
      0   0  1/2  1/2
      1   0   0    0]
```

::: .example
**Example**  
Plot an example trajectory of the Markov chain above starting from state A.
:::

    pre(julia-executable)
      | using Plots
      |

[Continue](btn:next)

---
> id: exercise-example-mc-trajectory

*Solution.*

We sample the next state from the corresponding row of $P$:

    pre(julia-executable)
      | using Plots, StatsBase
      | function takestep(i)
      |    sample(1:4, weights(P[i,:]))
      | end
      | function chain(start, n_steps)
      |     x = [start]
      |     for i in 1:n_steps
      |         push!(x, takestep(x[end]))
      |     end
      |     x
      | end
      | P = [1/2 1/2  0    0   
      |      1/2  0  1/2   0   
      |       0   0  1/2  1/2
      |       1   0   0    0]
      | plot(chain(1, 100), size = (800, 100), legend = false,
      |      yticks = (1:4, ["A", "B", "C", "D"]))

[Continue](btn:next)

---
> id: step-Psquared-exercise

::: .exercise
**Exercise**  
Show that $(P^2)\_{1,1}$ (the top left entry of $P^2$) yields the probability of being at state 1 in two steps given that you start from state $1$.
:::

*Solution.* Squaring $P$ and looking at the top left entry gives $(1/2)(1/2) + (1/2)(1/2) = 1/2$, while calculating the probability of being at state 1 in two steps starting from state 1 gives the same result: $(1/2)(1/2)$ for the probability that we stay at A for both steps, plus $(1/2)(1/2)$ for the probability that we go to B and come back to A.

More generally, we can say that the $(i,j)$th entry of $P^n$ is equal to the probability of being at state $j$ after $n$ steps, given that we began in state $i$.

The animation below shows that happens to the probability of being in each state after $n$ steps, starting from state $A$.

    center: figure: video(src="images/stationary-distribution.mp4" width="75%" controls)

We see that the probability of being at state $j$ after $n$ steps converges as $n\to\infty$. We call this collection of limiting probabilities the **stationary distribution** of the Markov chain. It turns out not to depend on the starting state:

    center: figure: video(src="images/stationary-distribution-2.mp4" width="75%" controls)

The goal of Markov Chain Monte Carlo is to reverse this procedure: we'll start with a desired probability measure on a set $\Omega$ and come up with a collection of transition probabilities that give that measure as its stationary distribution. Then we can sample from the desired measure by starting somewhere in $\Omega$ and running a long Markov chain with those transition probabilities.

[Continue](btn:next)

---
> id: Metropolis-Hastings
### Metropolis-Hastings

Finding transition probabilities which give rise to a particular stationary distribution might seem like a tall order, but there is a surprisingly general method of achieving it.

Suppose $\Omega$ is the set we're looking to sample from, and $f$ is either a PMF or PDF on $\Omega$. Given a symmetric [transition matrix](gloss:transition-matrix) $Q$—called the **proposal** transition matrix—Metropolis-Hastings defines the following Markov chain:

* Choose the initial state $X_0$ arbitrarily, and sample $X_{\text{prop}}$ from the distribution [$Q(X_0, \cdot)$](gloss:dot-anonymous-function).
* Define $X_1$ to be $X_{\text{prop}}$ with probability $\frac{f(X_{\text{prop}})}{f(X_0)}$ (or 1, if this ratio exceeds 1) and $X_0$ otherwise.
* Repeat steps (ii) and (iii) to obtain $X_2$ from $X_1$, $X_3$ from $X_2$, and so on.

Note: we call $\frac{f(X_{\text{prop}})}{f(X_0)}$ the **[[acceptance|rejection]] ratio** $\alpha(X_0, X_{\text{prop}})$, since it determines the probability with which we accept the proposal.

---
> id: step-metropolis-hastings-name

This algorithm is called **Metropolis-Hastings**. To the extent that Metropolis-Hastings is sometimes difficult to implement to the desired effect, the main difficulties usually have to do with choosing an efficient proposal distribution $Q$ or knowing how long to run the Markov chain until the distribution of the current state is close to the stationary distribution.

::: .exercise
**Exercise**  
Apply Metropolis-Hastings to the four-state Markov chain above, with the stationary distribution $[4/9, 2/9, 2/9, 1/9]$.
:::

*Solution.* The probability of moving from $B$ given that you start at $A$ is the probability that the proposal suggests $B$, which is $1/2$, multiplied by the probability you accept the proposal, which is $\frac{2/9}{4/9} = 1/2$. So that entry is 1/4. Likewise, the transition probability from $A$ to $D$ is $\frac{1}{8}$. Continuing in this way, we fill out the matrix, and it indeed gives rise to the desired stationary distribution:

    pre(julia-executable)
      | P = [5/8 1/4 0 1/8
      |      1/2 0 1/2 0
      |      0 1/2 1/4 1/4
      |      1/2 0 1/2 0]
      |
      | # let's check that each row is close to the
      | # desired stationary distribution:
      | P^100

You might be thinking that surely we could sample from this distribution in easier ways (like generating a uniform random variable and checking whether it's between 0 and 4/9, or between 4/9 and 4/9 + 2/9, etc.). That's a fair point. Let's look at an example where Metropolis-Hastings actually allows us to do something new.

::: .example
**Example**  
Suppose we want to sample from a probability measure on the set of length-100 binary strings.

(a) How do we sample from the uniform distribution on such strings?

(b) How do we sample from the distribution whose probability mass function $f$ assigns to each string a mass proportional to the number of 1's (for example, a string with 82 ones would be twice as likely as a string with 41 ones)?
:::

*Solution.* In neither case do we want to try inverse CDF sampling, because splitting the unit interval into $2^{100}$ tiny intervals is impractical (even the [Float64](gloss:float64) system doesn't allow that much resolution throughout the interval). However, we can sample from the measure specified in (a) without any new ideas, since the values in each position are independent under the the uniform measure. So we can just do

    pre(julia-executable)
      | rand(0:1, 100)

For (b), we can use Metropolis-Hastings. We choose an initial state somehow, maybe all ones. Then we propose changing the string by, let's say, choosing a random position and flipping the bit in that position. If the number of ones goes up, we accept that switch. If it goes down, we accept it with probability $f\_{\text{proposed}}/f\_{\text{current}} = (H-1)/H$, where $H$ is the current number of heads.

    pre(julia-executable)
      | function rand_weighted_by_num_ones(n)
      |     x = fill(1, n)
      |     n_ones = n
      |     for i in 1:10^6
      |         k = rand(1:n)
      |         if x[k] == 0
      |             x[k] = 1
      |             n_ones += 1
      |         else
      |             if rand() < (n_ones-1)/n_ones
      |                 x[k] = 0
      |                 n_ones -= 1
      |             end
      |         end
      |     end
      |     x
      | end
      |
      | rand_weighted_by_num_ones(100)

The following video provides a visualization for the algorithm that `{jl} rand_weighted_by_num_ones` executes.

    center: figure: video(src="images/metropolis-ones-string.mp4" width="75%" controls)

Notice here that it's helpful to choose a proposal distribution that suggests changes which can be executed quickly (for example, in this case we just looked at one position at a time rather than several), because we'll have to perform lots of these changes to get close to the stationary distribution.

[Continue](btn:next)

---
> id: bayesian-linear-regression
### Bayesian Linear Regression

Finally, let's see how to use MCMC to do Bayesian linear regression.

Consider a linear regression model $y = mx + b + \epsilon$, where $\epsilon$ is normally distributed with mean 0 and variance $1$. We'll treat the parameters $m$ amd $b$ as Bayesian parameters, meaning that they're random variables with some distribution. As priors, let's take normal distributions with mean 0 and variance 100 for both $m$ and $b$.

Our goal is to sample from the posterior distribution given some observations $(x_i, y_i)$ as $i$ ranges from 1 to $n$. Let's use kind of an extreme example to make the point:

    pre(julia-executable)
      | using Plots, Distributions
      | x = rand(Uniform(0, 1), 1000)
      | y_mean = 0.4x .+ 0.2
      | y = y_mean + rand(Normal(0, 0.05), 1000)
      | function observations()
      |     scatter(x, y, ms = 1, msw = 0.2,
      |                   size = (400, 250), legend = false)
      | end
      | observations()

To sample from the posterior, we'll use Metropolis-Hastings on the parameters $m$ and $b$. That means we'll start at initial values $(m_0, b_0)$ for those variables, then propose an update drawn from $q(m_0, b_0)$. We'll calculate the acceptance ratio for the posterior distribution, move or stay based on that ratio, and so on.

::: .exercise
**Exercise**  
What is the acceptance ratio for the posterior distribution, given the observations?
:::

*Solution.* Since posterior is proportional to likelihood times prior, we need to compute likelihood ratios and ratios of priors. The latter we'll get by deferring to Julia's `pdf`, but the former we can do analytically. Given $m$ and $b$, the probability density evaluated at the observed data is

``` latex
\prod_{i=1}^n\exp(-(y_i - mx_i - b)^2/2) = \exp\left(-\sum_{i=1}^n(y_i - mx_i - b)^2/2\right).
```

Let's code this up. We begin by writing a function to compute the acceptance ratio.

    pre(julia-executable)
      | N = Normal(0, 10)
      | δ(x,y,m,b) = sum((yᵢ - m*xᵢ - b)^2/2 for (xᵢ, yᵢ) in zip(x,y))
      | function α(x, y, m, b, m_prop, b_prop)
      |     min(1.0, exp(-δ(x,y,m_prop,b_prop) + δ(x,y,m,b)) *
      |         pdf(N, m_prop)/pdf(N, m) * pdf(N, b_prop)/pdf(N, b))
      | end

    pre(julia-executable)
      |
      | function mcmc(n_iterations)
      |     m, b, σ = 0.0, 0.0, 1.0
      |     θs = [(m, b)]
      |     for i in 1:n_iterations
      |         m_prop, b_prop = m + rand(Normal(0,0.005)), b + rand(Normal(0,0.005))
      |         if rand() < α(x, y, m, b, m_prop, b_prop)
      |             m, b = m_prop, b_prop
      |             push!(θs, (m, b))
      |         end
      |     end
      |     θs
      | end

Finally, we can visualize the result:

    pre(julia-executable)
      | θs = mcmc(3_000)
      | m, b = θs[end]
      | observations()
      | plot!(0:1, x-> m*x + b, size = (400, 300), ylims = (-0.5, 1))

If we run this code cell several times, then we'll get slightly different results each time. That's because we're sampling $m$ and $b$ from their posterior distributions, rather than choosing specific "best" values as we did in frequentist statistics. We could use many runs of the Markov chain sampling algorithm to get quantiles for $m$ and $b$ and even see how they're distributed jointly given the observed data:

    pre(julia-executable)
      | scatter([mcmc(3000)[end] for _ in 1:1000], size = (400, 400),
      |          ms = 2, msw = 0.2, title = "posterior distribution",
      |          xlabel = "m", ylabel = "b", legend = false)

::: .exercise
**Exercise**  
Explain why it makes intuitive sense that the joint posterior distribution of $m$ and $b$ would be negatively correlated.
:::

    x-quill

---
> id: m-b-negative-correlation-solution

*Solution.* If $b$ happens to be on the large side, then the slope needs to be smaller than usual to be reasonably compatible with the data (that is, to cut through the middle of the point cloud). Said another way, $m$ and $b$ are both exceptionally large, then the likelihood for that pair would be extremely small because of the Gaussian factors picking up large vertical differences between the observed points and the line. Similarly, if $b$ is smaller than usual, then $m$ is likely to be larger than usual.

---
> id: bayes-nets
## Bayesian networks

Consider the following probabilistic narrative about an individual's health outcome.

(i) A person becomes a smoker with probability 18%.  
(ii) They exercise regularly with probability 40% if they are a non-smoker or with probability 25% if they are a smoker.  
(iii) Independently of the above, with probability 15% they have a gene which predisposes them to lung cancer.  
(iv) Their conditional probability of contracting lung cancer, given the indicator random variables $I_1$, $I_2$, and $I_3$ of the events described in (a), (b), and (c) respectively, is given by $0.025 + 0.1I_1 - 0.02I_2 + 0.1I_3$.

We can visualize this story with a diagram in which each event of the four indicator random variables is a node, and arrows are drawn to indicate dependencies *as specified in the story*.

    figure
      img(src="images/bayes-net.svg" width="50%")
      p.caption.md A Bayesian network

::: .exercise
**Exercise**  
Is this the only such diagram consistent with the specified probability measure on the four random variables?
:::

    x-quill

---
> id: bayes-net-simple-example-solution

*Solution.* No, there's nothing about smoking and exercising that requires that we sample the smoking indicator and then the exercising indicator from its conditional distribution giving smoking. We could have done it the other way around.

The diagram tells us that having the gene is independent of smoking and exercising (since those nodes have no common ancestors in the diagram). If we included another descendant of the "smokes" node, like "develops premature wrinkles", then that would be communicating that premature wrinkles and lung cancel—while not independent—are *conditionally* independent given the smoking random variable.

[Continue](btn:next)

---
> id: Gaussian-mixture-models
### Gaussian mixture models

Consider a distribution on $\mathbb{R}^n$ whose density function can be written as a linear combination of $d$ multivariate Gaussian densities:

    pre(julia-executable)
      | using Plots, Distributions
      | f(x,y) = 0.55pdf(MvNormal([2.2, -0.4], [0.4 0.2; 0.2 0.4]), [x,y]) +
      |          0.45pdf(MvNormal([0.1, -4.3], [1.5 -0.1; -0.1 0.5]), [x,y])
      | p1 = heatmap(-6:0.05:6, -6:0.05:6, f)
      | p2 = surface(-6:0.05:6, -6:0.05:6, f)
      | plot(p1, p2, size = (650, 300))

Such a distribution is called a **Gaussian mixture model**. We can sample from a GMM of the form $\alpha\_1 f\_1(x) + \alpha\_2 f\_2(x) + \ldots + \alpha\_d f\_d(x)$ by simulating a random variable $Z$ which takes values in $\\{1, 2, \ldots, d\\}$ with probability $\alpha\_k$ for each element $k$, and then drawing $X$ from a multivariate normal distribution with mean $\mu\_Z$ and covariance $\Sigma\_Z$ (where $\mu\_k$ and $\Sigma\_k$ are the mean and covariance of $f\_k$).

::: .exercise
**Exercise**  
Explain how you might estimate the means, covariances, and $\alpha$ values based on the observations shown. Feel free to use your own visual intuition as part of the algorithm.

    center: img(src="images/gmm-scatter.svg" width="30%")

:::

    x-quill

---
> id: gmm-intuition-solution

*Solution.* We identify the two clusters visually, and we associate each point with one of the clusters or the other. Then we estimate means and covariances of the sample means and covariances for the two clusters, and we estimate the $\alpha$'s as the proportions of points belonging to each cluster.

In the next section (on Expectation-Maximization), we'll talk about how to do this in a way that doesn't require a human to hand-pick the $Z$ value for each point.

---
> id: hidden-markov-models
### Hidden Markov Models

The second example of a Bayesian network we'll look is the **Hidden Markov Model** (HMM). An HMM consists of a Markov chain $Z_1, \ldots, Z_n$ together with a collection of random variables $X_1, \ldots, X_n$ with the property that that the conditional distribution of $X_j$ given all of the other random variables depends only on $Z_j$. Represented as a Bayes net, the hidden Markov model looks like this:

    figure
      img(src="images/hidden-markov.svg")
      p.caption.md Bayes net for a hidden Markov model

::: .example
**Example**  
Simulate a hidden Markov model and plot the vector of $Z$'s and the vector of $X$'s on the same graph.
:::

*Solution.*

    pre(julia-executable)
      | using Plots, OffsetArrays
      | P = OffsetArray([0.2 0.8
      |                  1/3 2/3], 0:1, 0:1)
      |
      | n = 100
      |
      | function markov_chain(P, n)
      |     Z = [rand(0:1)]
      |     for i in 1:n-1
      |         current_state = Z[end]
      |         push!(Z, rand() < P[current_state, 0] ? 0 : 1)
      |     end
      |     Z
      | end
      |
      | Z = markov_chain(P, n)
      | X = Z + randn(n)
      |
      | plot(Z, size = (500, 100), legend = false)
      | plot!(X)

The kinds of questions we'll want to answer for hidden Markov models include:

1. Given observations for the $X$'s—but not the $Z$'s—which model parameters (including the transition probabilities for the Markov chain and any parameters for conditional distribution of $X_j$ given $Z_j$) maximize the likelihood of the observed data?

2. Given values for the parameters of the model and given observations for the $X$'s, what is the conditional distribution of the $Z$'s?

::: .exercise
**Exercise**  
Consider a hidden Markov model for which the transition matrix $P$ takes the form $\left[\begin{array}{cc}{q} & {1-q} \\\\ {1-q} & {q}\end{array}\right]$ and for which the conditional distribution of $X_j$ given $Z_j$ is a normal distribution with mean $Z_j$ and variance $\sigma^2$.

Given the observed $X$ values shown, how many times would you guess the underlying Markov chain changed its state (from 0 to 1, or from 1 to 0)? Also, does it appear as though $\sigma^2$ is large or small?
:::

    figure
      img(src="images/hmm-no-z.svg")

    x-quill

---
> id: hmm-basic-solution

*Solution.* It looks like the sequence of $Z$'s was most likely this path (which switches 8 times):

    figure
      img(src="images/hmm-with-z.svg")

Furthermore, it appears that $\sigma^2$ is probably pretty small, since the differences between the $X$'s and $Z$'s are small.

In the next section we'll talk about a more principled method for inferring model parameters and the conditional distribution of the $Z$'s given the observed $X$'s.

[Continue](btn:next)

---
> id: step-example-likelihood-calculation

We close this section with an example showing how to use Bayes nets to calculate likelihood values.

::: .example
**Example**  
Find the likelihood of the following data for the hidden Markov model described above, with $n = 3$, $q = 0.7$, and $\sigma^2 = 1$. Suppose $Z\_1$ is uniformly distributed on $\\{0,1\\}$.  

``` latex

\begin{array}{ccc}{z_{1}=0} & {z_{2}=1} & {z_{3}=1} \\ {x_{1}=0.2} & {x_{2}=-0.4} & {x_{3}=0.85}\end{array}

```
:::

*Solution.* The probability of observing $Z_1 = 0$ is $1/2$. The probability of observing $Z_1 = 0$ and $Z_2 = 1$ is $(1/2)(1-q)$. The probability of observing all three of the given $Z$ values is $(1/2)(1-q)(q)$.

The conditional probability of seeing an $x\_1$ value close to 0.2 given $\\{Z\_1=0\\}$ is proportional to value of the standard Gaussian density at $0.2$, which is $\frac{1}{\sqrt{2\pi}}\operatorname{e}^{-0.2^2/2}$. Likewise, the likelihood gets a factor of $\frac{1}{\sqrt{2\pi}}\operatorname{e}^{-(1-(-0.4))^2/2}$ for $X\_2$ and a factor of $\frac{1}{\sqrt{2\pi}}\operatorname{e}^{-(1-(0.85))^2/2}$ for $X\_3$, given the values for $Z_2$ and $Z_3$ under consideration. All together, the likelihood is

``` latex
(1/2)(1-q)(q)\frac{1}{\sqrt{2\pi}}\operatorname{e}^{-0.2^2/2}\frac{1}{\sqrt{2\pi}}\operatorname{e}^{-(1-(-0.4))^2/2}\frac{1}{\sqrt{2\pi}}\operatorname{e}^{-(1-(0.85))^2/2}
```

More generally, we can compute the likelihood for any complete set of values in a Bayes net by traversing the diagram starting from a **root** node (a node with no incoming arrows) and including a factor for each conditional probability mass or density value encountered at each node.

---
> id: expectation-maximization
## Expectation-Maximization

---
> id: EM-for-Gaussian-mixture-models
### EM for Gaussian mixture models


In this section, we'll develop an approach to estimating model parameters when some of the random variables involved in the model's Bayes net are not observed. We'll begin with the Gaussian mixture model and develop an intuitive version of the method, and then we'll introduce the general version and apply it to a hidden Markov model.

[Continue](btn:next)

---
> id: step-em-gmm-intuitive

Recall that the Gaussian mixture model (GMM) is a Bayes net with just two random variables: a discrete random variable $Z$ and a random vector $X$. To draw an observation from this model, we draw $Z$ from a given discrete distribution on $\\{1,2, \ldots, d\\}$, and then we draw $X$ from a multivariate normal distribution with mean $\mu\_Z$ and covariance $\Sigma\_Z$.

Let's generate observations from a made-up GMM.

    pre(julia-executable)
      | using Distributions, Plots, Random, LinearAlgebra, Statistics
      | include("data-gymnasia/ellipse.jl")
      | Random.seed!(123)
      | n = 100
      | α = 0.4
      | 𝒩₀ = MvNormal([1,1],[2.0 1.0; 1.0 2.0])
      | 𝒩₁ = MvNormal([3.0,7.0],[1.5 0; 0 0.5])
      | X₁ = zeros(n)
      | X₂ = zeros(n)
      | Z = zeros(Bool,n)
      | for i=1:n
      |     Z[i] = rand(Bernoulli(α))
      |     X₁[i], X₂[i] = Z[i] ? rand(𝒩₁) : rand(𝒩₀)
      | end
      | scatter(X₁, X₂, color = :gray, legend = false)

Let's think about how we could set about recovering the parameters of this model if all we had were the observations shown in the scatter plot.

[Continue](btn:next)

---
> id: step-one-simple-idea-em

One simple idea would be to write down the log likelihood of the data and hand it to an optimization algorithm to find parameters which maximize it. The problem is the lack of a reasonable way to write down the log likelihood when we have missing values in the Bayes net. Instead, let's develop an iterative approach that starts with a bad guess and works to improve it. We begin with arbitrary values for the parameters:

    pre(julia-executable)
      | α = 0.6
      | μ₀ = [3.0,3.0]
      | μ₁ = [1.0,6.0]
      | Σ₀ = 1.0*Matrix(I, 2, 2)
      | Σ₁ = 1.0*Matrix(I, 2, 2)
      | mixtureplot(X₁,X₂,μ₀,Σ₀,μ₁,Σ₁)

Conceptually, we'd like to fit the blue distribution to the points in roughly the lower half of the figure, leaving the remaining upper points to be fit by the orange distribution. To this end, we come up with a score for each point indicating how much it seems to belong to the blue distribution or orange distribution, based on our current parameter estimates. More precisely, let's compute for each point its conditional probability of having $Z = 1$ (orange) given the $(x_1, x_2)$ value of the point.

We'll compute these values (conditional probability of being blue) for each point, and store the result in a vector called `Π`:

    pre(julia-executable)
      | Π = [α*pdf(MvNormal(μ₁,Σ₁),[x₁,x₂]) /
      |        ((1-α)*pdf(MvNormal(μ₀,Σ₀),[x₁,x₂]) +
      |         α*pdf(MvNormal(μ₁,Σ₁),[x₁,x₂])) for (x₁,x₂) in zip(X₁,X₂)]

We can visualize the result of this computation by actually coloring each point $x\_i$ according to its blueness/orangeness value $\pi\_i$:

    pre(julia-executable)
      | mixtureplot(X₁,X₂,μ₀,Σ₀,μ₁,Σ₁,Π)

Next, we can fit a multivariate Gaussian to the points we colored blue. However, rather than performing the discontinuous operation of snapping each point to "orange" or "blue", we maintain the real-valued nature of the blueness/orangeness of each point, and instead compute a [[weighted|conditional]] mean and covariance to find new parameters for the blue and orange distributions.

    pre(julia-executable)
      | α = sum(Π)/n
      | μ₀ = [(1 .- Π) ⋅ X₁, (1 .- Π) ⋅ X₂] / sum(1 .- Π)
      | μ₁ = [Π ⋅ X₁, Π ⋅ X₂] / sum(Π)
      | Σ₀ = Matrix(Hermitian(sum((1-π)*([x₁,x₂] - μ₀) * ([x₁,x₂] - μ₀)' for (x₁,x₂,π) in zip(X₁,X₂,Π))/sum(1 .- Π)))
      | Σ₁ = Matrix(Hermitian(sum(π*([x₁,x₂] - μ₁) * ([x₁,x₂] - μ₁)' for (x₁,x₂,π) in zip(X₁,X₂,Π))/sum(Π)))
      | Π = [α*pdf(MvNormal(μ₁,Σ₁),[x₁,x₂]) /
      |        ((1-α)*pdf(MvNormal(μ₀,Σ₀),[x₁,x₂]) +
      |         α*pdf(MvNormal(μ₁,Σ₁),[x₁,x₂])) for (x₁,x₂) in zip(X₁,X₂)];
      | mixtureplot(X₁,X₂,μ₀,Σ₀,μ₁,Σ₁,Π)

If you run the cell above a few times, you'll see that it pretty quickly settles on a particular choice for the model parameters.

    center: figure: video(src="images/em-for-gmm.mp4" width="75%" controls)


---
> id: the-general-em-algorithm
### The General EM Algorithm

Now let's consider a general Bayesian network, with some variables hidden and others observed. How can we generalize the approach we developed for Gaussian mixture models?

The first step in our Gaussian mixture model algorithm was to compute for each data point the conditional distribution of the hidden variable $Z$ given the observed data $X$. That step is already general: for any collection of $Z$'s and $X$'s, we can compute the conditional distribution of the $Z$'s given the $X$'s.

The second step is trickier to generalize: for the GMM, we used the conditional probabilities for each value of $Z$ as weights and chose model parameters which fit the data in a way that accounted for those weights. In the general case, we'll use the conditional distribution of the $Z$'s given the $X$'s as a probability measure with respect to which we will compute the **expected log likelihood** and then choose model parameters which maximize that quantity.

[Continue](btn:next)

---
> id: step-explicit-general-em

More explicitly, we iterate the following steps to convergence:

1. Using current values for the parameters, work out the likelihood as a function of the observed values of the $X$'s (which we will write using lowercase $x$'s) as well as values for the $Z$'s which we'll pretend we also observed (we write these values as lowercase $z$'s).

2. We will uppercase the $z$'s to treat them as random variables, and we'll calculate the expectation of the log likelihood function with respect to the conditional distribution of the $Z$'s given the $x$'s.

3. We maximize the expected log likelihood computed in the second step and update the parameter values to these new optimizing values.

[Continue](btn:next)

---
> id: step-em-show-equivalence

Let's begin by showing that this algorithm is equivalent to the one we introduced previously in the Gaussian mixture case. Suppose $1 \leq i \leq n$. The likelihood of $Z\_i = z\_i$ and $X\_i = x\_i$ is $\alpha f\_1(x\_i)$ if $z\_i = 1$ and $(1-\alpha)f\_0(x\_i)$ if $z\_i = 0$ (where $f\_j$ is the Gaussian desity with mean $\mu\_j$ and covariance $\Sigma\_j$, for $j \in \\{0, 1\\}$).

We can write this in a single expression by saying that the likelihood of $Z\_i = z\_i$ and $X\_i = x\_i$ is $z\_{i} \alpha f\_{1}\left(\mathbf{x}\_{i}\right)+\left(1-z\_{i}\right)(1-\alpha) f\_{0}\left(\mathbf{x}\_{i}\right)$. So the overall likelihood given all of the "observed" data is the product of these expressions:

``` latex
\prod_{i=1}^{n}\left(z_{i} \alpha f_{1}\left(\mathbf{x}_{i}\right)+\left(1-z_{i}\right)(1-\alpha) f_{0}\left(\mathbf{x}_{i}\right)\right)
```

Since the log of a product is a sum of logs, we get

``` latex
\sum_{i=1}^{n}\log\left(z_{i} \alpha f_{1}\left(\mathbf{x}_{i}\right)+\left(1-z_{i}\right)(1-\alpha) f_{0}\left(\mathbf{x}_{i}\right)\right)
```

for the log likelihood. Finally, taking the expectation, we can use linearity of expectation to look at one term at a time:

``` latex
\sum_{i=1}^{n}\mathbb{E}\left[\log\left(Z_{i} \alpha f_{1}\left(\mathbf{x}_{i}\right)+\left(1-Z_{i}\right)(1-\alpha) f_{0}\left(\mathbf{x}_{i}\right)\right)\right]
```

Note that the distribution of the random variable $Z_i$ is supported at just two points (0 and 1). Therefore, we can pretty manageably compute this expectation by multiplying each possible value of the random variable by the probability that that value occurs.

[Continue](btn:next)

---
> id: step-expected-log-likelihood-em-gmm

Remember that the probability measure we decided to use for the $Z$'s is their conditional distribution given the specified $x$'s. So let's define $\pi\_i$ to be the conditional probability of $Z\_i = 1$ given $X\_i = x\_i$ (for each $i$ from 1 to $n$). Then we get an expected log likelihood of

``` latex
Q(\theta) &= \mathbb{E}\left[\log \prod_{i=1}^{n}\left(z_{i} \alpha f_{1}\left(\mathbf{x}_{i}\right)+\left(1-z_{i}\right)(1-\alpha) f_{0}\left(\mathbf{x}_{i}\right)\right)\right] \\ &= \sum_{i=1}^{n} \pi_{i}\left[\log \alpha+\log f_{1}\left(\mathbf{x}_{i}\right)\right] \\ & \quad+\left(1-\pi_{i}\right)\left[\log (1-\alpha)+\log f_{0}\left(\mathbf{x}_{i}\right)\right]
```

We can differentiate to minimize the terms involving the $\pi$'s, and we find that $\alpha$ works out to be the mean of the $\pi$ values ($\frac{1}{n} \sum_{i=1}^n \pi\_i$). The remaining terms (involving $f\_1$ and $f\_0$) take the form of a weighted maximum likelihood estimation problem for the normal distribution, and the optimizing parameters for that problem are the weighted sample mean and weighted sample covariance. (We derived this result in the [statistics course](https://mathigon.org/course/intro-statistics/maximum-likelihood-estimation) in the case where the weights are uniform, and here we'll take the generalization of that calculation for granted).

[Continue](btn:next)

---
> id: em-for-hidden-markov-models
### EM for Hidden Markov Models

Let's see the general EM algorithm in action on a more complex model. Recall the Hidden Markov Model we discussed in the previous section: the Markov chain starts at state 0 or 1 with probability 1/2 each and has a transition matrix of the form

``` latex
P = \left[ \begin{matrix} q & 1-q \\ 1-q & q\end{matrix} \right],
```

where $q \in [0,1]$. We assume further that the conditional distribution of each random variable $X_j$ is a Gaussian with mean zero and unknown variance $\sigma^2$. So we'll be trying to estimate $q$ and $\sigma^2$ based on a series of observations of the values of $X$.

    pre(julia-executable)
      | using Plots, Distributions, OffsetArrays
      | q = 0.8
      | σ² = 0.25
      | P = OffsetArray([q 1-q; 1-q q], 0:1, 0:1)
      |
      | Random.seed!(1)
      |
      | function markov_chain(P, n)
      |     Z = [0]
      |     for i in 1:n-1
      |         current_state = Z[end]
      |         push!(Z, rand(Bernoulli(P[current_state, 0])) ? 0 : 1)
      |     end
      |     Z
      | end
      |
      | Z = markov_chain(P, 100)
      | X = Z + √(σ²)*randn(100)
      | plot(Z, size = (500, 150), ylims = (-4, 4), legend = false)
      | plot!(X)

Let's follow the EM algorithm. The first step is to find the likelihood for [[a given set of $x$'s and $z$'s|a given set of $x$'s]].

---
> id: em-algorithm-hmm-step-1

The probability that we see $Z\_1 = z\_1$ is 1/2 (regardless of the value of $z\_1$). Then the probability that we see $Z\_2 = z\_2$ given that $Z\_1 = z\_1$ is [[$q$|$1-q$]] if $z\_1 = z\_2$ and [[$1-q$|q]] if $z\_1 \ne z\_2$. We can write this by saying that the conditional probability of $Z\_2 = z\_2$ given that $Z\_1 = z\_1$ is

``` latex
q\mathbf{1}_{z_2 = z_{1}} +
(1-q)\mathbf{1}_{z_2 \neq z_{1}}
```

Likewise, we get a similar factor for $Z\_3$, another for $Z\_4$, and so on. Putting these factors together, we get a likelihood of

``` latex
\frac{1}{2}\prod_{j=2}^n\left[
q\mathbf{1}_{z_j = z_{j-1}} +
(1-q)\mathbf{1}_{z_j \neq z_{j-1}}\right],
```

accounting for all of the $Z$'s.

[Continue](btn:next)

---
> id: step-em-hmm-xs

The conditional probability that we see a value of $X\_1$ which is really close to $x\_1$ (given the $Z$ values) is proportional to $\frac{1}{\sqrt{2\pi\sigma^2}}\operatorname{e}^{-(x\_1-z\_1)^2/(2\sigma^2)}$, and similarly for $x\_2, x\_3,$ and so on. All together, we get a likelihood of

``` latex
\frac{1}{2}\prod_{j=2}^n [q\mathbf{1}_{z_j = z_{j-1}} +
(1-q)\mathbf{1}_{z_j \neq z_{j-1}}]\prod_{j=1}^n \log\left(\frac{1}{\sqrt{2\pi \sigma^2}}
  e^{-\frac{(x_j-z_j)^2}{2\sigma^2}}\right)
```

Taking the log, we get

``` latex
\log(1/2) &+ \sum_{j=2}^n
\log([q\mathbf{1}_{z_j = z_{j-1}} + (1-q)\mathbf{1}_{z_j \neq z_{j-1}}])
+ \sum_{j=1}^n \log\left(\frac{1}{\sqrt{2\pi \sigma^2}}
  e^{-\frac{(x_j-z_j)^2}{2\sigma^2}}\right) \\
&= \log(1/2) + \log(q)\sum_{j=2}^n \mathbf{1}_{z_j = z_{j-1}} +
\log(1-q) \sum_{j=2}^n \mathbf{1}_{z_j \neq z_{j-1}} -
\frac{1}{2\sigma^2}\sum_{j=1}^n (x_j-z_j)^2 - \frac{n}{2} \log(2\pi\sigma^2).
```

Finally, we replace the $z$'s with $Z$'s (reflecting that we are going to treat them as random variables for purposes of computing an expected value) and take the expectation with respect to [[the conditional distribution of the $Z$'s given the $X$'s|the marginal distribution of the $Z$'s]].

``` latex
&\mathbb{E}\left[\log(1/2)\right] +
\log(q)\mathbb{E}\left[\sum_{j=2}^n \mathbf{1}_{Z_j = Z_{j-1}}\right] +
\log(1-q) \mathbb{E}\left[\sum_{j=2}^n \mathbf{1}_{Z_j \neq Z_{j-1}}\right] -
\frac{1}{2\sigma^2}\mathbb{E}\left[\sum_{j=1}^n (x_j-Z_j)^2\right] -
\mathbb{E}\left[\frac{n}{2} \log(2\pi\sigma^2)\right] \\
&=
\log(1/2) +
\log(q)\underbrace{\mathbb{E}\left[\sum_{j=2}^n \mathbf{1}_{Z_j = Z_{j-1}}\right]}_{a} +
\log(1-q) \underbrace{\mathbb{E}\left[\sum_{j=2}^n \mathbf{1}_{Z_j \neq Z_{j-1}}\right]}_{b} -
\frac{1}{2\sigma^2}\underbrace{\mathbb{E}\left[\sum_{j=1}^n (x_j-Z_j)^2\right]}_{c} -
\frac{n}{2} \log(2\pi\sigma^2) \\
&=
\log(1/2) + a\log(q) + b\log(1-q) - \frac{c}{2\sigma^2} -
\frac{n}{2}\log(2\pi\sigma^2).
```

---
> id: find-min-q-sigma-squared

Our goal is to find new values of $q$ and $\sigma^2$ which [[maximize|minimize]] this expression. We can do that by differentiating with respect to each of these parameters and setting the resulting expressions equal to [[zero|one]]. Solving those systems, we get

``` latex
q &= \frac{a}{a+b} \\
\sigma^2 &= \frac{c}{n}
```

Therefore, the only remaining task is estimating $a$, $b$, and $c$.

::: .exercise
**Exercise**  
Give verbal descriptions of the quantities $a$, $b$, and $c$.
:::

    x-quill

---
> id: verbal-desc-solution

*Solution.* We can describe $a$ as the expected number of times the Markov chain stays in the same state, $b$ as the expected number of Markov chain switches, and $c$ as the expected squared distance between the vector of $X$'s and the vector of $Z$'s.

The main difficulty in estimating $a$, $b$, and $c$ is that the conditional distribution of the $Z$'s given the $X$'s is a reasonably complex probability measure. It has to account for the $X$ values as well as the conditional distribution of each $Z_j$ given the value of $Z_{j-1}$.

Fortunately, we've developed a technique for sampling from complex probability measures: [[Metropolis-Hastings|conditional probability|linearity of expectation]].

---
> id: step-metropolis-hastings-hmm

As a reminder, Metropolis-Hastings proceeds by starting from some point in the space we're trying to sample from. In this case, that means starting with a length-$n$ binary string. Then we propose changes to the string and accept or reject them with a probability which is determined by the density values at the current and proposed strings.

To work out the acceptance ratio, we need to compare the values of the desired density function for two paths which differ in one position.

::: .exercise
**Exercise**  
In terms of $q$ and $\sigma^2$, work out the acceptance ratio for the proposal to move from $[Z\_1, Z\_2, Z\_3, Z\_4] = [0, 0, 1, 1]$ to $[Z\_1, Z\_2, Z\_3, Z\_4] = [0, 1, 1, 1]$ if $[X\_1, X\_2, X\_3, X\_4] = [0.25, -0.3, 0.8, 1.1]$.
:::

    x-quill

---
> id: step-solution-simple-acceptance-ratio

*Solution.* We get

``` latex
\frac{\frac{1}{2}(1-q)qqf_\sigma(0.25)f_\sigma(-1.3)f_\sigma(-0.2)f_\sigma(0.1)}{\frac{1}{2}q(1-q)qf_\sigma(0.25)f_\sigma(-0.3)f_\sigma(-0.2)f_\sigma(0.1)},
```

where $f\_\sigma$ denotes the Gaussian density with mean 0 and variance $\sigma^2$. We see that factors not involving the second position (where the change was proposed) cancel. So we're left with

``` latex
\frac{(1-q)qf_\sigma(-1.3)}{q(1-q)f_\sigma(-0.3)}.
```

Let's write down the result of this exercise in general terms. Including only the factors that don't necessarily cancel, we obtain

``` latex
\frac{(q \mathbf{1}_{z_{j-1} \ne z_{j}} + (1-q)\mathbf{1}_{z_{j-1} = z_j})
(q \mathbf{1}_{z_{j+1} \ne z_j} + (1-q)\mathbf{1}_{z_{j+1} = z_j})
\frac{1}{\sqrt{2\pi\sigma^2 }}e^{-\frac{(x_j - (1-z_j))^2}{2\sigma^2 }}}
{(q \mathbf{1}_{z_{j-1} = z_j} + (1-q)\mathbf{1}_{z_{j-1} \ne z_j})
(q \mathbf{1}_{z_{j+1} = z_j} + (1-q)\mathbf{1}_{z_{j+1} \ne z_j})
\frac{1}{\sqrt{2\pi\sigma^2 }}e^{-\frac{(x_j - z_j)^2}{2\sigma^2 }}}
```

as the Metropolis-Hastings acceptance ratio.

---
> id: Gibbs-Sampling
#### Gibbs Sampling

To get more efficient mixing, we'll use a variation of Metropolis-Hastings where we cycle through the positions in order to propose changes, rather than choosing them randomly. This is called **Gibbs sampling**.

    center: figure: video(src="images/gibbs-sampling.mp4" width="75%" controls)

Lets take a look at several draws from the conditional distribution of $Z$ given $X$:

    pre(julia-executable)
      | include("data-gymnasia/expectation-maximization.jl")
      | observations = [plot(gibbs_sampler(X, (q, σ²)), yticks = 0:1) for _ in 1:10]
      | plot(observations..., layout = (10, 1), size = (700, 700), legend = false)    

We can use these draws from the conditional distribution of $Z$ given $X$ to estimate $a$, $b$, and $c$ by counting the number of times each sample path $Z$ switches states and accumulating the squared difference between $X$ and and each path $Z$. This method of estimating an expected value using draws from the underlying distribution is called [[Monte Carlo|a Markov chain|Expectation-Maximization]].

The script `{code} expectation-maximization.jl` also contains a method for using these draws to estimate $a$, $b$, and $c$:

    pre(julia-executable)
      | estimate_a_b_c(X, θ)

We see that these estimates make sense: the Markov chain switches about 20% of the time, so we get an $a$ value of about 80% and a $b$ value of about 20%. Likewise, the variance used to generate these data was $\sigma^2 = 0.25$, so the accumulated squared difference across all $100$ values of $j$ is approximately $(0.25)(100) = 25$.

Finally, we can actually perform the expectation-maximization algorithm using the update rules we derived:

    pre(julia-executable)
      | q, σ² = em_algorithm(X)

---
> id: probabilistic-programming
## Probabilistic Programming

Using MCMC to do inference can be hard work, as we saw in the previous section. However, if we take the Bayesian approach where $q$ and $\sigma^2$ are random variables just like $Z_1, \ldots, Z_{100}$, then the only thing the user really needs to specify are the priors, the structure of the model, and the sampler (e.g., in the example above, we used a Gibbs sampler with a bit-switching proposal distribution). The rest is calculation, which could in principle be handled automatically by a probability-aware programming framework.

**Probabilistic programming** systems seek to automate Bayesian inference by allowing the user to specify model structure in the form of a *program*, choose samplers, and let the computer handle the rest.

::: .example
**Example**

Suppose we have a 6-sided die. Letting $X$ represent the outcome of a roll,
suppose $\mathbb{P}(X = 1) = p$ and $\mathbb{P}(X = k) = \frac{1-p}{5}$ for
$k = 2,3,4,5$. If we assume that $p$ has a beta prior, then after observing
many rolls we can manually determine that the posterior distribution of
$p$ given the data is also beta. While finding a closed form solution of
this posterior is simple for this problem, this may not be the case for more
complicated problems. Use probabilistic programming and MCMC to
obtain samples from the posterior.

:::

[Continue](btn:next)

---
> id: step-six-sided-die-solution

*Solution.* We begin by specifying the model from which the data was drawn:

    pre(julia-executable)
      |
      | using Turing, MCMCChains, Distributions, StatsPlots, CSV
      |
      | @model die_model(observations) = begin
      |     # Set prior distribution for p (probability of rolling 1)
      |     p ~ Beta(2,5)
      |
      |     # Probability of rolling one of 2 - 6
      |     q = (1-p)/5
      |
      |     # Define how samples are obtained
      |     for i in 1:length(observations)
      |         observations[i] ~ Categorical([p, q, q, q, q, q])
      |     end
      | end

Some points about how this works:

1. The model definition works essentially like a function definition, with the `{jl} @model` macro in place of the `{jl} function` keyword. The argument (in this case, `{jl} observations`) should be the *observed* data that will be provided for purposes of performing inference.

2. Hidden random variables appear before a tilde (`{jl} ~`), which is a common probability syntax for "is distributed according to". These random variables will be tracked by the framework, and you'll get information about their posterior distributions once you provide the observed data.

3. Other than these distinctions, the program is normal Julia code. It describes the procedure we would use to sample from the model's prior distribution.

Note that above we have imposed a prior of $\operatorname{Beta}(2,5)$ for $p$, encoding a belief that the die is biased toward 1.

After defining the model, we need to describe a method for proposing steps in the Markv chain we'll be using to sample from the posterior distribution. In practice, using a straightforward proposal distribution for the Metropolis-Hastings updates can be very inefficient because the proposal it suggests often go in directions of much smaller probability density. Hamiltonian Monte Carlo differentiates (usually [autodiffs](gloss:autodiff)) the density $f$ and uses some fairly advanced mathematical ideas to suggest moves which are much more likely to be in directions where the density isn't way smaller:

    figure
      img(src="images/hmc-figure.svg")
      p.caption.md Hamiltonian Monte Carlo

Let's use a Hamiltonian Monte Carlo sampler for this problem:

    pre(julia-executable)
      | # Use HMC sampler to obtain posterior samples
      | n_posterior_observations = 1000
      | ϵ = 0.05 # Leapfrog step size
      | τ = 10   # Number of leapfrog iterations
      | data = [4,6,4,5,1,4,1,5,5,5,6,5,3,5,2,1,1,1,1,4,
      |         2,1,1,1,3,6,4,2,1,5,1,3,4,2,1,3,3,3,2,3,
      |         1,1,1,1,2,1,2,3,6,4,2,1,3,6,2,2,5,6,1,4,
      |         6,4,4,2,4,4,6,1,2,1,5,3,1,3,6,3,1,3,6,1,
      |         3,5,6,6,4,4,4,2,2,3,2,5,1,3,1,5,1,5,6,5]
      |
      | # Obtain posterior samples
      | chain = sample(die_model(data), HMC(ϵ, τ), n_posterior_observations, progress=false)

The variable `{jl} data` above is a vector containing the observed data.

We can now obtain summary statistics of the parameter $p$, such as mean and
standard deviation, and plot a histogram of the posterior samples with the
following code:

    pre(julia-executable)
      |
      | # Extract summary of p parameter and plot histogram
      | p_summary = chain[:p]
      | plot(p_summary, seriestype = :histogram)

which produces the following histogram:

    center: img(src="images/pp_ex_1_hist.svg")

The variable `{jl} p_summary` above is an `{jl} MCMCChains` object and contains the samples of $p$ sampled from the posterior. To obtain the samples, we can run

    pre(julia-executable)
      | Array(p_summary)

We can now use this to construct confidence intervals for $p$. For example, a
95\% confidence interval is given by

    pre(julia-executable)
      | quantile(Array(p_summary), [0.025, 0.975])

Below we consider a slightly more complex HMM problem.

::: .example
**Example**

Consider an HMM with hidden variables $Z_i \in \\\{1,2\\\}$ and:

``` latex
p(z_1) &= \frac{1}{2} \textrm{ for } z_1 \in \{1,2\} \\
f(x_j|z_j) &\sim N(z_j,0.1) \textrm{ for } j \in \{1,2,\ldots,n\} \\
\mathbb{P}(Z_{k+1} &= z_{k+1}|Z_k = z_k) = p(z_{k},z_{k+1}),
```

where $p(z\_{k},z\_{k+1})$ is defined by:

    figure
      img(src="images/pp_ex_2_mat.svg")

Suppose we have observed the variables $X_1, X_2, \ldots, X_{15}$ available
[here](https://raw.githubusercontent.com/data-gymnasia/courses/master/content/bayesian-inference-and-graphical-models/code/pp_ex_2_data.csv). Estimate $p_1$ and $p_2$ using probabilistic programming.

:::

[Continue](btn:next)

---
> id: step-small-hmm-solution

*Solution.* We will assume a uniform prior on $p_1$ and $p_2$. We can define the model as follows:

    pre(julia-executable)
      |
      | using Turing, MCMCChains, Distributions
      |
      | @model HMM(x) = begin
      |     n = length(x)
      |     z = zeros(Int64, length(x)) # hidden states
      |
      |     # Define priors
      |     p₁ ~ Uniform(0,1) # Transition probability 1→1
      |     p₂ ~ Uniform(0,1) # Transition probability 2→1
      |
      |     # Define transition matrix
      |     P = [p₁ 1-p₁; p₂ 1-p₂]
      |
      |     # Initialize samples
      |     z[1] ~ Categorical([0.5, 0.5]) # Start z at either 1 or 2
      |     x[1] ~ Normal(z[1], 0.1)
      |
      |     for i in 2:n
      |         # Get next hidden state
      |         z[i] ~ Categorical(P[z[i-1],:])
      |         x[i] ~ Normal(z[i], 0.1)
      |     end
      |
      |     return (p₁, p₂)
      | end

We will now use a Gibbs sampler to obtain samples from the posterior of
`{jl} p₁` and `{jl} p₂`. HMC is only appropriate for continuous random variables; other samplers are needed for discrete random variables, like the $Z$'s in this case. We'll use one called **particle Gibbs**, which keeps track of several values for each random variable at the same time. (Each of these values is conceived as a particle; hence the name.) We will use a Gibbs sampler to combine HMC and Particle Gibbs.

    pre(julia-executable)
      |
      | # Load observed data
      | data = [0.97, 0.94, 2.02, 1.07, 1.93, 0.93, 2.0, 2.0, 2.07, 0.92, 2.18, 1.8, 1.94, 1.9, 0.93]
      |
      | # Use Gibbs with HMC and PG to obtain posterior samples
      | n_posterior_observations = 1000
      | ϵ = 0.1 # Leapfrog step size
      | τ = 10  # Number of leapfrog iterations
      | hmc = HMC(ϵ, τ, :p₁, :p₂)
      | particle_gibbs = Turing.PG(20, :z)
      | G = Gibbs(hmc, particle_gibbs)
      |
      | # Obtain posterior samples
      | chain = sample(HMM(data), G, n_posterior_observations)


Histograms of the $p_1$ and $p_2$ marginal posteriors are given below.

    figure
      img(src="images/pp_ex_2_hist_1.svg")
      img(src="images/pp_ex_2_hist_2.svg")

The actual values of $p_1$ and $p_2$ used to generate the data were 0.25 and
0.55, respectively. So these figures look pretty plausible, at least in the sense that their means are near the correct values.

Finally, let's look at the hidden Markov model from the previous section:

    pre(julia-executable)
      | using Turing, OffsetArrays, StatsPlots
      | @model HMM(x) = begin
      |     n = length(x)
      |     z = tzeros(Int64, n)
      |     q ~ Uniform(0, 1)
      |     σ² ~ InverseGamma(1e-3, 1e-3)
      |     P = OffsetArray([ q  1-q
      |                      1-q  q ], 0:1, 0:1)
      |     z[1] ~ DiscreteNonParametric(0:1, [0.5, 0.5])
      |     x[1] ~ Normal(z[1], √(σ²))
      |     for i in 2:n
      |         z[i] ~ DiscreteNonParametric(0:1, collect(P[z[i-1],:]))
      |         x[i] ~ Normal(z[i], √(σ²))
      |     end
      | end

As in the previous example, we'll use a Gibbs sampler to combine HMC and particle Gibbs sampling:

    pre(julia-executable)
      | # choose parameters for samplers
      | # 0.05 is a step size ϵ, while 10 is n_leapfrog, which we won't get into
      | hmc = HMC(0.05, 10, :q, :σ²)
      | # 20 particles
      | pg = PG(20, :z)
      | G = Gibbs(hmc, pg)
      |
      | X = [-0.12, 0.11, -0.58, -1.21, 1.06, -0.09, -0.32, -0.09, -0.39, 2.01, 0.72, 1.61, -0.08, 0.99, 0.55, 1.28, 0.75, 1.09, 0.91, 0.45, 0.13, -0.61, 0.18, -0.03, 1.36, 0.12, 0.06, -0.96, 1.38, -1.86, 0.11, -1.17, -1.94, -0.3, -0.01, 0.82, -0.34, 0.55, 0.53, -1.15, -0.67, 0.47, 0.68, 1.84, 2.39, -0.05, -0.14, -0.03, 2.27, 0.36, 0.31, 0.46, 0.72, 1.34, 1.45, -0.28, -0.06, 0.71, -0.5, -1.01, 0.31, -0.07, 0.67, 2.55, 1.41, 0.35, 0.89, 1.04, 0.81, 1.08, 1.45, 0.23, 0.06, -0.05, 1.88, 1.11, 1.25, 0.35, 0.84, 1.96, 1.52, 1.34, 1.43, 1.9, 0.01, 1.08, 1.44, 1.22, 1.7, 1.36, 1.62, 1.49, 2.42, 1.11, -0.56, 0.71, -0.35, 0.26, 0.48, 0.42]
      |  
      | chains = sample(HMM(X), G, 50)
      | plot(chains[:q])

[Continue](btn:next)

---
> id: step-congratulations-bayesian

**Congraulations!** You've finished the Data Gymnasia Bayesian Inference and Graphical Models course.
