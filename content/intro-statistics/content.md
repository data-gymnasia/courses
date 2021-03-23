# Statistics

> id: intro
> description: Density and point estimation, confidence intervals, bootstrapping, maximum likelihood estimation, and hypothesis testing.
> color: "#6543b5"
> next: sets-and-functions
> author: Samuel S. Watson

## Introduction

Mathematical probability is about drawing conclusions about the outcomes of random experiments whose randomness is known and specified precisely. *Statistics* works in the opposite direction: the outcomes are observed, but the probability measure giving rise to those outcomes is unknown. The goal of statistics is to draw conclusions about probability distributions based observations sampled from them.

For example, consider the eventual adult height $X$ of a particular newborn child. There are no pure mathematical considerations that would suggest a specific distribution for $X$. Our best bet is to collect data on the heights of adults and try to **infer** a probability distribution which is compatible with the observed data. Suppose we measure the height (in inches) of 10 randomly selected folks and get the following numbers:

    pre(julia-executable)
      | heights = [71.54, 66.62, 64.11, 62.72, 68.12,
      |            69.07, 64.82, 61.92, 68.45, 66.3,
      |            66.99, 62.2, 61.04, 63.31, 68.94,
      |            66.27, 66.8, 71.7, 68.93, 66.65,
      |            71.97, 60.27, 62.81, 70.64, 71.61,
      |            65.51, 63.1, 66.21, 68.23, 72.32,
      |            62.29, 63.12, 64.94, 71.89, 65.48,
      |            63.66, 56.11, 65.63, 61.26, 65.12,
      |            66.93, 68.51, 67.2, 71.57, 66.65,
      |            59.77, 61.51, 63.25, 69.12, 64.98]

Each observation provides some evidence about where the probability mass of the height distribution is. We would expect that regions with many observations have more probability mass than regions with few observations, although we should not take this too literally: none of the 50 observations in the list above fall in the interval $[70.7, 71.4]$, but it would not make sense to conclude that adults who are taller than 70.7 inches are necessarily also taller than 71.4 inches.

::: .exercise
**Exercise**  
Brainstorm at least two ways to come up with a plausible density function given a list of observations like the one given above.
:::

    x-quill

---
> id: step-histogram-density
### Nonparametric estimation

A simple way to obtain a probability distribution from a list of observations is to make a [[**histogram**|**scatter plot**|**regression estimate**]]. The idea is to subdivide the interval from the smallest to the largest observation into smaller intervals and make a bar chart showing the number of observations which fall into each of these intervals.

---
> id: step-histogram-graph

    pre(julia-executable)
      | using Plots

      | histogram(heights,
      |           nbins=12,
      |           label="",
      |           xlabel="height (inches)",
      |           ylabel="count")

[Continue](btn:next)

---
> id: step-histogram-distribution

You might think of a histogram as just a visualization of the data, but it does give an actual distribution: we consider the piecewise constant function whose graph consists of the tops of the histogram bars, and we divide it by the sum of the areas of the bars (to obtain a new function which integrates to 1):

    pre(julia-executable)
      | using Plots
      | histogram(heights,
      |           nbins=12,
      |           label="",
      |           xlabel="height (inches)",
      |           ylabel="count",
      |           normed=true)

[Continue](btn:next)

---
> id: step-bin-arbitrariness

The arbitrariness in the density function we obtain by normalizing the histogram is hardly disguised: we would have gotten a different result if we'd used a different number of bins, and we could have even decided to use bins of different widths. Nevertheless, the histogram density approximates the actual distribution quite well if we have a lot of data:

::: .exercise
**Exercise**  
Call the function `{jl} mysample` 10000 times and make a histogram of the resulting observations. Compare the histogram density to the actual density, and observe that the two are very close.

Note: you can evaluate the pdf of `{jl} N₁` at `{jl} x` using `{jl} pdf(N₁,x)`.
:::

    pre(julia-executable)
      |
      | function mysample()
      |     if rand() > 0.2
      |         3 + 0.8*randn()
      |     else
      |         -1 + randn()
      |     end
      | end
      |
      | using Distributions
      | histogram([mysample() for _ in 1:10000],
      |           nbins=80,
      |           normed=true,
      |           label="histogram density")
      |
      | N₁ = Normal(3,0.8)
      | N₂ = Normal(-1,1)
      | #actualdensity(x) = DENSITYFUNCTIONHERE
      |           
      | plot!(-6:0.1:6,
      |       actualdensity,
      |       linewidth=3,
      |       label="actual density",
      |       legend=:topright)    

    x-quill

---
> id: step-histogram-solution

*Solution.* The density function describing the distribution that `{jl} mysample` draws from is a linear combination of the two given Gaussian density functions, with weights $\frac{4}{5}$ and $\frac{1}{5}$:

``` julia
actualdensity(x) = 0.8pdf(N₁,x)+0.2pdf(N₂,x)
```

[Continue](btn:next)

---
> id: gaussiandensity
### Parametric estimation

Another way to come up with a density function for some data is to assume that the density function belongs to a specific parametric family of densities, like the set of Gaussian distributions. Then we approximate the parameters using the data.

::: .exercise
**Exercise**  
Use the sliders to find the μ and σ values for which the normal distribution $\mathcal{N}(\mu, \sigma)$ does the best job of fitting the data. (The meaning of the term "best" here is deliberately left to your discretion). Compare your results to the values obtained using standard methods for this problem by entering your choices for μ and σ in the last line below.

{.text-center} `μ =`${μ}{μ|60|55,75,0.5}

{.text-center} `σ =`${σ}{σ|1|1,8,0.2}

    x-chart(width=600 height=400 x-axis="55,100,5" y-axis="0,0.5,0.1")

The best μ value is [[66±2]], and the best σ value is [[3.69±0.3]].
:::

---
> id: step-nonparametric-meaning

Later in this course, we will discuss some approaches to choosing parameters optimally, and we'll leave behind the "eyeball-it" strategy we used in this exercise.

The histogram estimator is called a [[**nonparametric**|**parametric**]] estimation method, because it doesn't involve assuming that the distribution comes from a particular parametric family. The advantage is that histograms are flexible to represent a variety of density shapes, while parametric methods have the advantage of making more efficient use of data in the situations where the parametric assumption happens to be valid.

---
> id: regression
### Regression

Statistics is not limited to estimating the distribution of a single real-valued random variable like human height. Typically we want to have information about the *joint* distribution of such a variable with other variables whose values we are in a position to know. Such joint information allows us to make more accurate predictions, and that increased accuracy is usually critical for the business or research purposes that motivated the inquiry.

For example, if we're able to collect the heights of many adults together along the heights of each of their parents, then we can aim to understand the *conditional* expectation of a person's height, given the heights of their parents. Since we can measure the heights of a child's parents, we can use this information to make a better prediction for how tall the child will grow up to be. The problem of estimating the conditional expectation of one random variable given others is called **regression**.

[Continue](btn:next)

---
> id: step-preview-joint-density-estimation

In the next section, we will develop some intuitive techniques for estimating density functions for joint distributions. We'll close this section with an exercise involving the estimation of a *discrete* distribution.

::: .exercise
**Exercise**  
Consider a random variable $X$ that you know takes values in $\\{0,1,2\\}$. Suppose that 100 independent observations are made from the distribution of $X$, and suppose they are the values given below. Propose an estimate of the distribution of $X$.
:::

    pre(julia-executable)
      | observations = [
      | 0, 2, 2, 2, 2, 2, 0, 2, 2, 1,
      | 0, 2, 2, 1, 0, 1, 0, 2, 1, 2,
      | 2, 2, 1, 2, 2, 1, 2, 2, 2, 2,
      | 2, 2, 2, 2, 2, 1, 1, 2, 2, 1,
      | 2, 2, 2, 2, 2, 1, 2, 2, 2, 2,
      | 1, 2, 2, 2, 2, 0, 2, 0, 1, 2,
      | 0, 0, 2, 2, 2, 0, 2, 2, 2, 0,
      | 2, 0, 2, 0, 2, 2, 2, 0, 0, 2,
      | 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      | 2, 0, 2, 2, 2, 2, 2, 1, 0, 2
      | ]

    x-quill

---
> id: step-discrete-solution

*Solution.* Since 70% of the observations are 2's, we posit that the probability of the event $\\{X = 2\\}$ is 70%. Likewise, the probabilities of the events $\\{X = 1\\}$ and $\\{X = 0\\}$ we estimate to be 13% and 17%, respectively.

---
> id: joint-density-estimation
## Estimating Joint Densities

The following scenario will be our running example throughout this section. We will begin by assuming that we know the joint distribution of two random variables $X$ and $Y$, and then we will explore what happens when we drop that assumption.

::: .example
**Example**  
 Suppose that $X$ is a random variable which represents the number of hours a student studies for an exam, and $Y$ is a random variable which represents their performance on the exam. Suppose that the joint density of $X$ and $Y$ is given by

``` latex
  f(x,y) = \frac{3}{4000(3/2)\sqrt{2\pi}}x(20-x)e^{-\frac{1}{2(3/2)^2}\left(y - 2 - \frac{1}{50}x(30-x)\right)^2}.
```
 Given that a student's number of hours of preparation is known to be $x$, what is the best prediction for $Y$ (as measured by mean squared error)?
:::

    figure
      img(src="images/exam-density.png" width=350)
      p.caption.md Figure 1.1: The probability density function of the joint distribution of $(X,Y)$, where $X$ is the number of hours of studying and $Y$ is the exam score.

[Continue](btn:next)

---
> id: example-solution-1

*Solution.*  The best guess of a random variable (as measured by mean squared error) is the expectation of the random variable. Likewise, the best guess of $Y$ given $\\{X=x\\}$ is the *conditional* expectation of $Y$ given $\\{X=x\\}$. Inspecting the density function, we recognize that restricting it to a vertical line at position $x$ gives an expression which is proportional to the Gaussian density centered at $2 + \frac{1}{50}x(30-x)$. Therefore,

``` latex
\mathbb{E}[Y | X=x] = 2 + \frac{1}{50}x(30-x).
```

[Continue](btn:next)

---
> id: step-regression-definition

A graph of this function is shown in red in the figure below:

    figure
      img(src="images/exam-density-line.png" width=350)

      p.caption.md Figure 1.2: The conditional expectation of $Y$ given $\\{X = x\\}$, as a function of $x$.

We call $r(x) = \mathbb{E}[Y | X = x]$ the **regression** function for the problem of predicting $Y$ given the value of $X$.

Given the distribution of $(X,Y)$, finding the regression function is a probability problem. However, in practice the probability measure is typically only known *empirically*, that is, by way of a collection of independent observations sampled from the measure. For example, to understand the relationship between exam scores and studying hours, we would record the values $(X\_i,Y\_i)$ for many past exams $i \in \\{1,2,\ldots,n\\}$ (see Figure 1.3 below).

    figure
      img(src="images/exam-samples.png" width = 350)
      p.caption.md Figure 1.3: One thousand independent samples from the joint distribution of $(X,Y)$.


::: .exercise
**Exercise**  
Describe an example of a random experiment where the probability measure may be reasonably inferred without the need for experimentation or data collection. What is the difference between such an experiment and one for which an empirical approach is required?
:::

    x-quill

---
> id: solution-1

*Solution.* There are many random experiments for which it is reasonable to use a measure derived from principle rather than from experimentation. For example, if we are drawing a card from a well-shuffled deck, or drawing a marble from a well-stirred urn, then we would assume that the probability measure is *uniform*. This assumption would lead to more accurate predictions than if we used an inferred measure based on repeated observations of the experiment. By extension, if we have many random variables whose distributions are known from principle and which are known from principle to be independent, then we know that their average is approximately normally distributed.

The key difference between these examples and those requiring an empirical approach is the use of symmetry. There is no *a  priori* reason to believe that, for example, the possible scores on an exam are equally likely, or that an exam score is a sum of independent random variables.

[Continue](btn:next)

---
> id: step-regression-recoverable

You can convince yourself that $r$, and indeed the whole joint distribution of $X$ and $Y$, is approximately recoverable from the samples shown in Figure 1.3: if we draw a curve roughly through the middle of the point cloud, it would be pretty close to the graph of $r$. If we shade the region occupied by the point cloud, darker where there are more points and lighter where there are fewer, it will be pretty close to the heat map of the density function.

We will want to sharpen this intuition into a computable algorithm, but the picture gives us reason to be optimistic.

[Continue](btn:next)

---
> id: step-delta-mass-approximation

::: .exercise
**Exercise**  
In the context of Figure 1.3, why doesn't it work to approximate the conditional distribution of $Y$ given $\\{X = x\\}$ using all of the samples which are along the vertical line at position $x$?
:::

    x-quill

---
> id: solution-2

*Solution.* Because for almost all values of $x$, there will be *no* points along the vertical line at position $x$!

[Continue](btn:next)

---
> id: kernel-density-estimation
#### Kernel Density Estimation

The **empirical** distribution associated with a collection of observations $(x,y)$ from two random variables $X$ and $Y$ is the probability measure which assigns mass $\frac{1}{n}$ to each location $(x,y)$. The previous exercise illustrated shortcomings of using the empirical distribution directly for this problem: the mass is not appropriately spread out in the rectangle. It makes more sense to conclude from the presence of an observation at a point $(x,y)$ that the unknown distribution of $(X,Y)$ has some mass *near* $(x,y)$, not necessarily exactly *at* $(x,y)$.

We can capture this idea mathematically by spreading out $\frac{1}{n}$ units of probability mass around each sample $(x\_i,y\_i)$. We have to choose a function—called the **kernel**—to specify how the mass is spread out.

[Continue](btn:next)

---
> id: tricubegraph

There are many kernel functions in common use; we will base our kernel on the *tricube* function, which is defined by

``` latex

    D(u) = \left\{
      \begin{array}{cl}
        \frac{70}{81}(1-|u|^3)^3 & \text{if }|u| < 1\\
        0 & \text{if }|u| \geq 1.
      \end{array}\right.      

```
We define $D\_\lambda(u) = \frac{1}{\lambda} D\left(\frac{u}{\lambda}\right)$; The parameter $\lambda > 0$ can be tuned to adjust how tightly the measure is concentrated at the center. Experiment with the slider below to get a feel for how changing $\lambda$ affects the shape of the graph of $D_\lambda$.

{.text-center} `λ =`${λ}{λ|1|0.3,4,0.05}

    x-chart(width=600 height=400 x-axis="-3,3,0.5" y-axis="0,3,0.5")

[Continue](btn:next)

---
> id: step-tricube-2d

We define the kernel function $K\_\lambda$ as a product of two copies of $D\_\lambda$, one for each coordinate (see Figure 1.4 for a graph):

``` latex
K_\lambda(x,y) = D_\lambda(x)D_\lambda(y).
```

    figure
      img(src="images/tricube-100.svg" width=240)

      p.caption.md Figure 1.4: The graph of the kernel $K\_\lambda(x,y)$ with $\lambda = 1$.

::: .exercise
**Exercise**  
Is the probability mass more or less tightly concentrated around the origin when $\lambda$ is small?
:::

    x-quill

---
> id: solution-3

*Solution.* Note that $K\_\lambda(x,y)$ as soon as either $x$ or $y$ is larger than $\lambda$. Therefore, all of the probability mass is less than $\lambda \sqrt{2}$ units from the origin. So small $\lambda$ corresponds to tight concentration of the mass near zero.

[Continue](btn:next)

---
> id: step-piles-of-mass

Now, let's place small piles of probability mass with the shape shown in Figure 1.4 at each sample point. The resulting approximation of the joint density $f(x,y)$ is

``` latex
\widehat{f}_\lambda(x,y) = \frac{1}{n}\sum_{i=1}^n K_\lambda(x-X_i,y-Y_i).
```

Graphs of $\widehat{f}\_\lambda$ for various values of $\lambda$ are shown below. We can see that the best match is going to be somewhere between the $\lambda \to 0$ and $\lambda\to\infty$ extremes (which are too concentrated and too diffuse, respectively).

    figure
      img(src="images/kde-figures.png" width="80%")
      p.caption.md Figure 1.5: The density estimator $\widehat{f}_\lambda$ for $\lambda = 0.25, 1, 3,$ and $10$. The last figure shows the actual density function.

::: .exercise
**Exercise**  
Estimate the best value of $\lambda$ by eyeballing the figure above (the values of $\lambda$ in the first four figures are 0.25, 1, 3, and 10. The last figure shows the actual density).
:::

    x-quill

---
> id: step-solution-eyeball-lambda

*Solution.* In the $\lambda=1$ picture, it looks like the estimated measure is taking individual points too seriously, since there are lots of points with more mass around them than in the gaps between observations. In the $\lambda = 10$ picture, the mass looks way too spread out. Among the ones shown, $\lambda = 3$ appears to be the best.

[Continue](btn:next)

---
> id: step-best-lambda

We can take advantage of our knowledge of the density function to determine which $\lambda$ value works best. In practice, we would not have access to this information, but let's postpone dealing with that issue till the next section.

We measure the difference between $f$ and $\widehat{f}\_\lambda$ by evaluating both functions at each point in a square grid and finding the sum of the squares of these differences. This sum is approximately proportional to
[[$\int (f - \widehat{f})^2$|$\nabla f$|$\int f$]].

---
> id: step-julia-best-lambda

    pre(julia-executable)
      | using LinearAlgebra, Statistics, Roots, Optim, Plots, Random
      | Random.seed!(1234)
      | n = 1000 # number of samples to draw
      |
      | # the true regression function
      | r(x) = 2 + 1/50*x*(30-x)
      | # the true density function
      | σy = 3/2  
      | f(x,y) = 3/4000 * 1/√(2π*σy^2) * x*(20-x)*exp(-1/(2σy^2)*(y-r(x))^2)
      |
      | # x values and y values for a grid
      | xs = 0:1/2^3:20
      | ys = 0:1/2^3:10
      |
      | # F(t) is the CDF of X
      | F(t) = -t^3/4000 + 3t^2/400
      |
      | "Sample from the distribution of X (inverse CDF trick)"
      | function sampleX()
      |     U = rand()
      |     find_zero(t->F(t)-U,(0,20),Bisection())
      | end
      |
      | "Sample from joint distribution of X and Y"
      | function sampleXY(r,σ)
      |     X = sampleX()
      |     Y = r(X) + σ*randn()
      |     (X,Y)
      | end
      |
      | # Sample n observations
      | sample = [sampleXY(r,σy) for i=1:n]
      |
      | D(u) = abs(u) < 1 ? 70/81*(1-abs(u)^3)^3 : 0 # tri-cube function
      | D(λ,u) = 1/λ*D(u/λ) # scaled tri-cube
      | K(λ,x,y) = D(λ,x) * D(λ,y) # kernel
      | kde(λ,x,y,observations) = sum(K(λ,x-Xi,y-Yi) for (Xi,Yi) in observations)/length(observations)
      | # `optimize` takes functions which accept vector arguments, so we treat
      | # λ as a one-entry vector
      | L(λ) = sum((f(x,y) - kde(λ,x,y,sample))^2 for x=xs,y=ys)*step(xs)*step(ys)
      |
      | # minimize L using the BFGS method
      | λ_best = optimize(λ->L(first(λ)),[1.0],BFGS())
      |


We find that the best $\lambda$ value comes out to about $\lambda = 1.92$. This is significantly smaller than our "eyeball" value of 3 from earlier, but not terribly far off.

[Continue](btn:next)

---
> id: cross-validation
#### Cross-validation

Since we only know the density function in this case because we're in the controlled environment of an exercise, we need to think about how we could have chosen the optimal $\lambda$ value without that information.

One idea, which we will find is applicable in many statistical contexts, is to reserve one observation and form an estimator which only uses the other $n-1$ observations. We evaluate this density approximation at the reserved sample point, and we repeat all of these steps for each sample in the data set. If the resulting density value is consistently very small, then our density estimator is being consistently "surprised" by the location of the reserved sample. This suggests that our $\lambda$ value is too large or too small. This idea is called **cross-validation**.

---
> id: kdecrossvalidate

::: .exercise
**Exercise**  
Experiment with the sliders below to adjust the bandwidth $\lambda$ and the omitted point `i` to find a value of $\lambda$ you find satisfactory (set `i` to `7` to include all six points).

{.text-center} `λ =`${λ}{λ|1|0.7,20,0.1}

{.text-center} `i = `${i}{i|1|1,7,1}

    x-chart(width=600 height=400 x-axis="-5,10,2" y-axis="0,0.5,0.1")

The density value at the omitted point is small when $\lambda$ is too small because [[the mass is too concentrated at other points|the mass is too spread out]], and the value is small when $\lambda$ is too large because [[the mass is too spread out|the mass is zero everywhere]].
:::

[Continue](btn:next)

---
> id: step-kde-cv

We've decided we want the densities at the omitted points to be not too small, but we haven't specified an objective function to say exactly what we mean by that. It turns out that we can do this in a principled way, starting from the idea of *integrated squared error*.

Let's aim to minimize the **loss** (or **error**, or **risk**) of our estimator, which we define to be the integrated squared difference between $\widehat{f}\_\lambda$ and the true density $f$. We can write this integral as

``` latex
\int (\widehat{f}_\lambda - f)^2 = \int \widehat{f}_\lambda^{2} - 2
\int \widehat{f}_\lambda f + \int f^2,
```

using [[linearity of integration|the product rule|the chain rule]].
The third term does not involve $\widehat{f}$, so minimizing $\int (\widehat{f}\_\lambda - f)^2$ is the same as minimizing $\int \widehat{f}\_\lambda^{2} - 2 \int \widehat{f}\_\lambda f$, which we will call $J(\lambda)$.

---
> id: step-expectation-formula-trick

Recalling the expectation formula

``` latex
\mathbb{E}[g(X,Y)] = \int g(x,y) f_{X,Y}(x,y) \mathrm{d} x \mathrm{d} y,
```

we recognize the second term in the top equation as
[[$-2\mathbb{E}(\widehat{f}\_\lambda(X,Y))$ | $-2\mathbb{E}(g(X,Y))$ | $-2\mathbb{E}(g(X,Y)\widehat{f}\_\lambda(X,Y))$]], where $(X,Y)$ is an observation from the true density $f$ which is *independent* of $\widehat{f}\_\lambda$. To get observations which are independent of the estimator, we will define $\widehat{f}\_{\lambda}^{(-i)}$ to be the density estimator obtained using the observations other than the $i\text{th}$ one. Since the observations $(X\_i,Y\_i)$ are drawn from the joint density of $(X,Y)$ and are assumed to be independent, we can suggest the approximation

``` latex
\mathbb{E}[\widehat{f}_\lambda(X,Y)]  \approx  
  \frac{1}{n} \sum_{i=1}^n \widehat{f}_{\lambda}^{\:(-i)}(X_i,Y_i),
```

[Continue](btn:next)

---
> id: step-cross-validation-loss-estimator

We call

``` latex
\widehat{J}(\lambda) = \int \widehat{f}_\lambda^{2} -
  \frac{2}{n} \sum_{i=1}^n \widehat{f}_{\lambda}^{\:(-i)}(X_i,Y_i)
```

the **cross-validation loss estimator**. Let's find the value of $\lambda$ which minimizes $\widehat{J}(\lambda)$ for the present example:

    pre(julia-executable)
      | "Evaluate the summation Σᵢ f⁽⁻ⁱ⁾(Xᵢ,Yᵢ) in J(λ)'s second term"
      | function kdeCV(λ,i,observations)
      |     x,y = observations[i]
      |     newobservations = copy(observation)
      |     deleteat!(newobservations,i)
      |     kde(λ,x,y,newobservations)
      | end
      |
      | # first line approximates ∫f̂², the second line approximates -(2/n)∫f̂f
      | J(λ) = sum([kde(λ,x,y,observations)^2 for x=xs,y=ys])*step(xs)*step(ys) -
      |         2/length(observations)*sum(kdeCV(λ,i,observations) for i=1:length(observations))
      | λ_best_cv = optimize(λ->J(first(λ)),[1.0],BFGS())
      |


The cross-validated minimizing value is $\lambda = 1.88$. Recall that the true minimizer is $\lambda =1.92$. So in this case, cross validation gets us quite close to the optimal $\lambda$ value without needing to know the actual density. In fact, the cross-validation estimator performs well in general given enough data, in the following sense:

::: .theorem
**Theorem** (Stone's Theorem)  
Suppose that $f$ is a bounded probability density function. Let $\widehat{f}^{\mathrm{CV}}\_n$ be the kernel density estimator with bandwidth $\lambda$ obtained by cross-validation, and let $\widehat{f}\_n$ be the kernel density estimator with optimal bandwidth $\lambda^{\mathrm{min}}\_n$. Then

``` latex

    \frac{\int (f - \widehat{f}^{\mathrm{CV}}_n)^2}{ \int
      (f-\widehat{f}_n)^2}

```
 converges in probability to 1 as $n\to\infty$. Furthermore, there are constants $C\_1$ and $C\_2$ such that $\int (f-\widehat{f}\_n)^2\approx C_1n^{-4/5}$ and $\lambda^{\mathrm{min}}\_n \approx C_2n^{-1/5}$ for large $n$.
:::

[Continue](btn:next)

---
> id: nonparametric-regression
#### Nonparametric Regression

With an estimate of the joint density of $X$ and $Y$ in hand, we can turn to the problem of estimating the regression function $r(x) = \mathbb{E}[Y | X = x]$. If we restrict the density estimate $\widehat{f}\_\lambda$ to the vertical line at position $x$, we find that the conditional density is

``` latex

    \widehat{f}_{Y | X = x}(y) = \frac{\displaystyle{\frac{1}{n}\sum_{i=1}^n
        K_\lambda(x-X_i,y-Y_i)}}{\displaystyle{
        \int \frac{1}{n}\sum_{i=1}^n K_\lambda(x-X_i,y-Y_i) \mathrm{d} y}}.

```

    figure
      img(src="images/kde-slice.png" width=350)

      p.caption.md Figure 1.6: A kernel density estimator with 16 observations and $\lambda = 1$.

So the conditional expectation of $Y$ given $\\{X = x\\}$ is

``` latex


  \widehat{r}(x) = \int y \widehat{f}_{Y | X = x}(y)  \mathrm{d} y =
  \frac{\displaystyle{\int y \frac{1}{n}\sum_{i=1}^n
    K_\lambda(x-X_i,y-Y_i) \mathrm{d} y}}{\displaystyle{
    \int \frac{1}{n}\sum_{i=1}^n K_\lambda(x-X_i,y-Y_i) \mathrm{d} y}}.

```

Let's try to simplify this expression. Looking at Figure 1.6, we can see by the symmetry of the function $D$ that each observation $(X\_i,Y\_i)$ contributes $Y\_iD\_\lambda(x-X\_i)$ to the numerator of the above equation. To arrive at the same conclusion by manipulating the formula directly, we write

``` latex

  \int \frac{1}{n}\sum_{i=1}^n K_\lambda(x-X_i,y-Y_i)  \mathrm{d} y =
  \frac{1}{n} \sum_{i=1}^n D_\lambda(x-X_i) \int yD_\lambda(y-Y_i)
  \mathrm{d} y.

```
Then $\int yD(y-Y\_i) \mathrm{d} y$ is the average of the probability measure with density $D$ centered at $Y\_i$. Since $D$ is symmetric, this average is the center point $Y\_i$.

[Continue](btn:next)

---
> id: step-kde-same-idea-denominator

Applying a similar idea to the denominator (note that instead of $Y\_i$, we get the total mass 1 from integrating $D(y-Y\_i)$), we find that

``` latex

  \widehat{r}(x) =
  \frac{\displaystyle{\sum_{i=1}^nD_\lambda(x-X_i)Y_i}}{\displaystyle{\sum_{i=1}^nD_\lambda(x-X_i)}}.

```

    figure
      img(src="images/reg-approx.png" width=240)

      p.caption.md Figure 1.7: The Nadaraya-Watson estimator $\widehat{r}$.

The graph of this function is shown in Figure 1.7. We see that it matches the graph of $r$ quite closely except near the ends of the interval.

    pre(julia-executable)
      | λ = first(λ_best_cv.minimizer)
      | r̂(x) = sum(D(λ,x-Xi)*Yi for (Xi,Yi) in observations)/sum(D(λ,x-Xi) for (Xi,Yi) in observations)
      | scatter([x for (x,y) in observations],
      |         [y for (x,y) in observations],label="observations",
      |         markersize=2, legend = :bottomright)
      | plot!(0:0.2:20, r̂, label = L"\hat{r}", ylims = (0,10), linewidth = 3)

The approximate integrated squared error of this estimator is `{jl} sum((r(x)-r̂(x))^2 for x in xs)*step(xs) = 1.90`.

[Continue](btn:next)

---
> id: step-kde-commentary

Kernel density estimation is just one approach to estimating a joint density, and the Nadaraya-Watson estimator is just one approach to estimating a regression function. In the machine learning course following this one, we will explore a wide variety of machine learning models which take quite different approaches, and each will have its own strengths and weaknesses.

---
> id: point-estimation
## Point Estimation

In the previous section, we discussed the problem of estimating a distribution given a list of independent observations from it. Now we turn to the simpler task of **point estimation**: estimating a single real-valued feature (such as the mean, variance, or maximum) of a distribution. We begin by formalizing the notion of a real-valued feature of a distribution.

::: .definition
**Definition** (Statistical functional)  
A **statistical functional** is any function $T$ from the set of distributions to $[-\infty,\infty]$.
:::

For example, if we define $T\_1(\nu)$ to be the mean of the distribution $\nu$, then $T\_1$ is a statistical functional. Similarly, consider the *maximum* functional $T\_2(\nu) = F^{-1}(1)$ where $F$ is the CDF of $\nu$. To give a more complicated example, we can define $T\_3(\nu)$ to be the expected value of the difference between the greatest and least of 10 independent random variables with common distribution $\nu$. Then $T\_3$ also a statistical functional.

[Continue](btn:next)

---
> id: step-definition-estimator

Given a statistical functional, our goal will be to use a list of independent observations from $\nu$ to estimate $T(\nu)$.

::: .definition
**Definition** (Estimator)  
An **estimator** $\widehat{\theta}$ is a random variable which is a function of $n$ i.i.d.\ random variables.
:::

For example, the random variable $X_1 + \cdots + X_n$ is an estimator, if $X_1, \ldots, X_n$ are independent and identically distributed. Let's develop a general approach for defining estimators. We begin by observing a large independent sample from a distribution gives us direct information about the CDF of the distribution.

::: .example
**Example**  
Draw 500 independent observations from an exponential distribution with parameter 1. Plot the function $\widehat{F}$ which maps $x$ to the proportion of observations at or to the left of $x$ on the number line. We call $\widehat{F}$ the **empirical CDF**. Compare the graph of the empirical CDF to the graph of the CDF of the exponential distribution with parameter 1.
:::


*Solution.*  We can graph $\widehat{F}$ using a step plot:

    pre(julia-executable)
      | using Plots, Distributions

      | n = 500
      | xs = range(0, 8, length=100)
      | plot(xs, x-> 1-exp(-x), label = "true CDF", legend = :bottomright)
      | plot!(sort(rand(Exponential(1),n)), (1:n)/n,
      |       seriestype = :steppre, label = "empirical CDF")

    pre.rblock(r-executable)
      | n <- 500
      | xvals = seq(0,8,length=100)
      |
      | ggplot() +
      |   geom_line(aes(x=xvals,y=1-exp(-xvals))) +
      |   geom_step(aes(x=sort(rexp(n)),y=(1:n)/n))

[Continue](btn:next)

---
> id: step-empirical-measure

This example suggests an idea for estimating $\widehat{\theta}$: since the unknown distribution $\nu$ is typically close to the measure $\widehat{\nu}$ which places mass $\frac{1}{n}$ at each of the observed observations, we can build an estimator of $T(\nu)$ by plugging $\widehat{\nu}$ into $T$.

::: .definition
**Definition** (Plug-in estimator)  
The plug-in estimator of $\theta = T(\nu)$ is $\widehat{\theta} = T(\widehat{\nu})$.
:::

::: .example
**Example**  
Find the plug-in estimator of the mean of a distribution. Find the plug-in estimator of the variance.
:::

*Solution.* The plug-in estimator of the mean is the mean of the empirical distribution, which is the average of the locations of the observations. We call this the **sample mean**:

``` latex
\overline{X} = \frac{X_1 + \cdots + X_n}{n}.
```

Likewise, the plug-in estimator of the variance is **sample variance**

``` latex
S^2 = \frac{1}{n}\left( (X_1 - \overline{X})^2 + (X_2 -
        \overline{X})^2 + \cdots +  (X_n - \overline{X})^2\right).
```

Ideally, an estimator $\widehat{\theta}$ is close to $\theta$ with high probability. We will see that we can decompose the question of whether $\widehat{\theta}$ is close to $\theta$ into two sub-questions: is the *mean* of $\widehat{\theta}$ close to $\theta$, and is $\widehat{\theta}$ close to its mean with high probability?

[Continue](btn:next)

---
> id: bias-section
#### Bias

::: .definition
**Definition** (Bias)  
The **bias** of an estimator $\widehat{\theta}$ is

``` latex
\mathbb{E}[\widehat{\theta}] - \theta.
```

An estimator is said to be **biased** if its bias is nonzero and **unbiased** if its bias is zero.
:::

::: .example
**Example**  
Consider the estimator

``` latex
\widehat{\theta} = \max(X_1, \ldots, X_n)
```

of the maximum functional. Assuming that the distribution is described by a density function (in other words, it's a continuous rather than a discrete random variable), show that $\widehat{\theta}$ is biased.
:::

[Continue](btn:next)

---
> id: step-biased-estimator-solution

*Solution.* If $\nu$ is a continuous distribution, then the probability of the event $\\{X\_i < T(\nu)\\}$ is $1$ for all $i=1,2,\ldots,n$. This implies that $\widehat{\theta} < T(\nu)$ with probability 1. Taking expectation of both sides, we find that $\mathbb{E}[\widehat{\theta}] < T(\nu)$. Therefore, this estimator has negative bias.

We can numerically experiment to approximate the bias of this estimator in a specific instance. For example, if we estimate the maximum of a uniform distribution on $[0,b]$ with the sample maximum of 100 observations, we get a bias of approximately

    pre(julia-executable)
      | using Statistics
      | mean(maximum(rand() for _ in 1:100) - 1 for _ in 1:10_000)

which is about -0.0098. We can visualize these sample maximum estimates with a histogram:

    pre(julia-executable)
      | using Plots

      | histogram([maximum(rand() for _ in 1:100) for _ in 1:10_000],
      |           label = "sample maximum", xlims = (0,1),
      |           legend = :topleft)

[Continue](btn:next)

---
> id: step-standard-error
#### Standard Error

Zero or small bias is a desirable property of an estimator: it means that the estimator is accurate *on average*. The second desirable property of an estimator is for the probability mass of its distribution to be concentrated near its mean:

::: .definition
**Definition** (Standard error)  
The standard error $\operatorname{se}(\widehat{\theta})$ of an estimator $\widehat{\theta}$ is its standard deviation.
:::

::: .example
**Example**  
Find the standard error of the sample mean if the distribution $\nu$ with variance $\sigma^2$.
:::

[Continue](btn:next)

---
> id: step-standard-error-sample-mean

*Solution.* We have

``` latex
\operatorname{Var}\left(\frac{X_1 + X_2 + \cdots + X_n}{n}\right) =
           \frac{1}{n^2}(n\operatorname{Var} X_1) = \frac{\sigma^2}{n}.
```
Therefore, the standard error is $\sigma/\sqrt{n}$.

We can see how the standard error decreases with $n$ by computing the sample mean for many independent datasets and plotting the resulting histogram:

    pre(julia-executable)
      | n = 100
      | histogram([mean(rand() for _ in 1:n) for _ in 1:10_000],
      |           label = "sample mean, $n observations",
      |           xlims = (0,1), size = (600,400))

[Continue](btn:next)

---
> id: mean-squared-error
#### Mean Squared Error

If the expectation of an estimator of $\theta$ is close to $\theta$ and if the estimator close to its average with high probability, then it makes sense that $\widehat{\theta}$ and $\theta$ are close to each other with high probability. We can measure the discrepancy between $\widehat{\theta}$ and $\theta$ directly by computing their average squared difference:

::: .definition
**Definition** (Mean squared error)  
The mean squared error of an estimator $\widehat{\theta}$ is $\mathbb{E}[(\widehat{\theta} - \theta)^2]$.
:::

As advertised, the mean squared error decomposes as a sum of *squared bias* and *squared standard error*:

::: .theorem
**Theorem**  
The mean squared error of an estimator $\theta$ is equal to its variance plus its squared bias:

``` latex
\mathbb{E}[(\widehat{\theta} - \mathbb{E}[\widehat{\theta}])^2] +
  (\mathbb{E}[\widehat{\theta}] - \theta)^2.
```
:::


*Proof.* The idea is to add and subtract the mean of $\widehat{\theta}$. We find that

``` latex
\mathbb{E}[(\widehat{\theta} - \theta)^2] &=
\mathbb{E}[(\widehat{\theta} - \mathbb{E}[\widehat{\theta}] + \mathbb{E}[\widehat{\theta}] -  \theta)^2] \\
&= \mathbb{E}[(\widehat{\theta} - \mathbb{E}[\widehat{\theta}])^2] +
  2\mathbb{E}[(\widehat{\theta} - \mathbb{E}[\widehat{\theta}])(\mathbb{E}[\widehat{\theta}] -  \theta)] +
  (\mathbb{E}[\widehat{\theta}] -  \theta)^2.
```

The middle term is zero by [[linearity of expectation|the symmetry of $\theta$]]. The first and third terms represent the variance and squared bias respectively, of $\widehat{\theta}$, so this concludes the proof.

---
> id: step-bias-variance-both-converge

If the bias and standard error of an estimator both converge to 0, then the estimator is *consistent*:

::: .definition
**Definition** (Consistent)  
An estimator is **consistent** if $\widehat{\theta}$ converges to $\theta$ in probability as $n\to\infty$.
:::

::: .example
**Example**  
Show that the plug-in maximum estimator $\widehat{\theta}\_n = \max(X\_1, \ldots, X\_n)$ of $\theta = T(\nu) = F^{-1}(1)$ is consistent, assuming that the distribution belongs to the parametric family $\\{\operatorname{Unif}([0,b]) : b \in \mathbb{R}\\}$.
:::

[Continue](btn:next)

---
> id: step-consistent-solution

*Solution.* The probability that $\widehat{\theta}\_n$ is more than $\epsilon$ units from $\theta$ is equal to the probability that every sample is less than $\theta - \epsilon$, which by independence is equal to

``` latex
\left(\frac{\theta - \epsilon}{\theta}\right)^n.
```

This converges to 0 as $n \to \infty$, since $\frac{\theta - \epsilon}{\theta} < 1$.

[Continue](btn:next)

---
> id: step-figure-four-examples

The figure below summarizes the four possibilities for combinations of high or low bias and variance.

    figure
      img(src="images/biasvariance.svg" width=500)
      p.caption.md An estimator of $\theta$ has high or low bias depending on whether its mean is far from or close to $\theta$. It has high or low variance depending on whether its mass is spread out or concentrated.

::: .example
**Example**  
Show that the sample variance $S^2 = \frac{1}{n}\sum\_{i=1}^n (X\_i -
  \overline{X})^2$ is biased.
:::

*Solution.* We will perform the calculation for $n = 3$. It may be generalized to other values of $n$ by replacing 3 with $n$ and $2$ with $n-1$. We have

``` latex
\mathbb{E}[S^2] = \frac{1}{3}\mathbb{E}\left[ \left(\frac{2}{3}X_1 -
    \frac{1}{3}X_2 - \frac{1}{3}X_3\right)^2
  + \left(\frac{2}{3}X_2 - \frac{1}{3}X_3 -
    \frac{1}{3}X_1\right)^2
  + \left(\frac{2}{3}X_3 - \frac{1}{3}X_1 -
    \frac{1}{3}X_2\right)\right]^2
```

Squaring out each trinomial, we get $\frac{4}{9}X\_1^2$ from the first term and $\frac{1}{9}X\_1^2$ from each of the other two. So altogether the $X\_1^2$ term is $\frac{6}{9}X\_1^2$. By symmetry, the same is true of $X\_2^2$ and $X\_3^2$. For cross-terms, we get $-\frac{4}{9}X\_1X\_2$ from the first squared expression, $-\frac{4}{9}X\_1X\_2$ from the second, and $\frac{2}{9}X\_1X\_2$ from the third. Altogether, we get $-\frac{6}{9}X\_1X\_2$. By symmetry, the remaining two terms are $-\frac{6}{9}X\_1X\_3 -\frac{6}{9}X\_2X\_3$.

Recalling that $\operatorname{Var}(X) = \mathbb{E}[X^2] - \mathbb{E}[X]^2$ for any random variable $X$, we have $\mathbb{E}[X\_1^2] = \mu^2 + \sigma^2$, where $\mu$ and $\sigma$ are the mean and standard deviation of the distribution of $X\_1$(and similarly for $X\_2$ and $X\_3$. So we have

``` latex
\mathbb{E}[S^2] &= \frac{1}{3}\left(\frac{6}{9}(X_1^2 + X_2^2 +
          X_3^2) - \frac{6}{9}(X_1X_2 +X_1X_3 + X_2X_3)\right) \\
&= \frac{1}{3}\cdot\frac{6}{9}(3(\sigma^2 + \mu^2) - 3\mu^2) =
  \frac{2}{3}\sigma^2.                                           
```

If we repeat the above calculation with $n$ in place of 3, we find that the resulting expectation is $\frac{n-1}{n}\sigma^2$.

Motivated by this example, we define the **unbiased sample variance**

``` latex
\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\overline{X})^2.
```

[Continue](btn:next)

---
> id: step-adult-height-distribution-redux

::: .exercise
**Exercise**  
Let's revisit the adult height distribution from the first section. We observed the human adult heights shown below (in inches). If we want to approximate the height distribution with a Gaussian, it seems reasonable to estimate μ and σ² using the unbiased estimators $\mu = \frac{1}{n}(X_1 + \cdots + X_n)$ and $\widehat{\sigma}^2 = \frac{1}{n-1}\sum_{i=1}^n(X_i-\mu)^2$.

Calculate these estimators for the height data.
:::

    pre(julia-executable)
      | heights = [71.54, 66.62, 64.11, 62.72, 68.12,
      |            69.07, 64.82, 61.92, 68.45, 66.3,
      |            66.99, 62.2, 61.04, 63.31, 68.94,
      |            66.27, 66.8, 71.7, 68.93, 66.65,
      |            71.97, 60.27, 62.81, 70.64, 71.61,
      |            65.51, 63.1, 66.21, 68.23, 72.32,
      |            62.29, 63.12, 64.94, 71.89, 65.48,
      |            63.66, 56.11, 65.63, 61.26, 65.12,
      |            66.93, 68.51, 67.2, 71.57, 66.65,
      |            59.77, 61.51, 63.25, 69.12, 64.98]

    x-quill

---
> id: height-parameters-solution

*Solution.* Julia has built-in functions for this:

    pre(julia-executable)
      | mean(heights), var(heights)

We could also write our own:

    pre(julia-executable)
      | μ = sum(heights)/length(heights)
      | σ̂² = 1/(length(heights)-1) * sum((h-μ)^2 for h in heights)

[Continue](btn:next)

---
> id: step-point-estimation-conclusion

In the next section, we will develop an important extension of point estimation which supplies additional information about how accurate we expect our point estimate to be.

---
> id: confidence-intervals
## Confidence Intervals

It is often of limited use to know the value of an estimator given an observed collection of observations, since the single value does not indicate how close we should expect $\theta$ to be to $\widehat{\theta}$. For example, if a poll estimates that a randomly selected voter has 46% probability of being a supporter of candidate A and a 42% probability of being a supporter of candidate B, then knowing more information about the distributions of the estimators is essential if we want to know [[the probability of winning for each candidate|which candidate is more likely to win]]. Thus we introduce the idea of a *confidence interval*.

---
> id: step-confidence-interval-definition

::: .definition
**Definition** (Confidence interval)  
Consider an unknown probability distribution $\nu$ from which we get $n$ independent observations $X\_1, \ldots, X\_n$, and suppose that $\theta$ is the value of some statistical functional of $\nu$. A **confidence interval** for $\theta$ is an interval-valued function of the sample data $X\_1, \ldots, X\_n$. A confidence interval has **confidence level** $1-\alpha$ if it contains $\theta$ with probability at least $1-\alpha$.
:::

::: .example
**Example**  
Consider a distribution $\nu$ of the form $\operatorname{Unif}([0,b])$, and let $T$ be the maximum functional (so [[$T(\nu) = b$|$T(\nu) = b/2$]]). Consider the max estimator $\widehat{b} = \operatorname{max}(X_1, \ldots, X_{10})$ of 10 observations. Find a 90% confidence interval for $b$.
:::

---
> id: step-simple-conf-interval-solution

*Solution.* We expect $b$ to be a little larger than the largest observation, so we look for a confidence interval of the form $(b, b+\text{something})$. We'd like to make the interval short so that it's [[more informative|more likely to trap $b$]], but we can't make it too short or else [[it won't be likely to trap $b$|it won't be informative]].

---
> id: step-simple-conf-example-90-percent

For example, the probability that all 10 observations will be less than 90% of $b$ is $(0.9)^{10} = $ 34.9%. So with probability about 65.1%, we will trap the value of $b$ in the interval [[$(\widehat{b}, \widehat{b}/0.9)$|$(\widehat{b},1.1\widehat{b})$|$(0.9\widehat{b},\widehat{b})$]].

---
> id: step-solve-for-k-conf-interval

We can replace 90% with a variable $k$ and solve the equation $k^{10} = 0.1$ to find that $(\widehat{b}, \widehat{b}/0.794)$ is the shortest 90% confidence interval.

[Continue](btn:next)

---
> id: step-chebyshev-example

This first example was exceptionally amenable to analysis because we can solve exactly for the relevant probabilities. Estimators based on *sums* of observations are more typical, and in those cases we usually use the normal approximation:

::: .exercise
**Exercise**  
Show that if $\widehat{\theta}$ is unbiased and approximately normally distributed, then $(\widehat{\theta} - k \operatorname{se}(\widehat{\theta}), \widehat{\theta} + k \operatorname{se}(\widehat{\theta}))$ is an approximate $1 - 2\Phi(-k)$ confidence interval, where $\Phi$ is the CDF of the standard normal distribution.
:::

    x-quill

---
> id: step-normal-confidence-interval

*Solution.* A normal random variable is within $k$ standard deviations of its mean with probability $\Phi(k) - \Phi(-k) = 1-\Phi(-k) - \Phi(-k) = 1 - 2\Phi(-k)$. Since the mean of $\widehat{\theta}$ is $\theta$, this implies that $(\widehat{\theta} - k \operatorname{se}(\widehat{\theta}), \widehat{\theta} + k \operatorname{se}(\widehat{\theta}))$ includes $\theta$ with probability approximately $1 - 2\Phi(-k)$.

[Continue](btn:next)

---
> id: normal-approximation-concrete-example

::: .exercise
**Exercise**  
One thousand people are polled, and 462 of them express a preference for candidate A, while 417 express a preference for candidate B. Suppose that the 1000 preferences are chosen independently from a distribution $\nu$ on $\\{\text{A}, \text{B}, \text{no preference}\\}$ which assigns probability mass $m_{\text{A}}$ and $m_{\text{B}}$ to the first two outcomes. Use the normal approximation to find 95\% confidence intervals for the functionals $T_A(\nu) = m_{\text{A}}$ and $T_B(\nu) = m_{\text{B}}$.

Note: although it is a bit of a cheat, you can approximate $m_{\text{A}}$ with $\widehat{m}_{\text{A}}$ when you calculate the standard error (and similarly for B).
:::

    x-quill

---
> id: example-solution

*Solution.* The standard deviation of a Bernoulli random variable with parameter $m_\text{A}$ is $\sqrt{m_\text{A}(1-m_\text{A})}$. Therefore, the average of 1000 independent observations from such a distribution is within $1.96\sqrt{m_\text{A}(1-m_\text{A})/1000}$ units of $m_\text{A}$ (on the number line) with probability about 95%.

Although we don't know the value of $m_\text{A}$ in this expression, we don't lose too much by approximating it with $\widehat{m}_\text{A} = 0.462$. Making this substitution, we get a confidence interval of $46.2\\% \pm 3.1\\%$. The standard deviation for B works out to the same value to the nearest tenth, so we get $41.7\\% \pm 3.1\\%$ as a 95% confidence interval for $m_\text{B}$.

[Continue](btn:next)

---
> id: step-confidence-interval-warning

**Warning**. In the standard confidence interval framework (as described above), the value $\theta$ of the statistical functional $T$ is *not random.* Furthermore, the values of our estimators *are* random, even though they will realize concrete real-number values once the data are collected. This is opposite to the way probability questions are usually framed (asking for a given random variable how much of its probability mass lies in a particular, fixed interval).

One way to avoid the pitfall of thinking of the parameter as random is to speak of the random confidence interval *trapping* the value of the statistical functional, rather than speaking of the unknown parameter as falling into the given interval.

::: .exercise
**Exercise**  
Suppose we have a 95% confidence interval $[A, B]$ for $\theta = T(\nu)$. For each of the following statements, determine whether it's true or false.

1. Given observed values $A$ and $B$, $\theta$ has a 95% chance of falling within $[A,B]$. [[False|True]]

2. Suppose we have a large number of draws from the distribution, and we progressively update $A$ and $B$ according to the observations we've made so far. Then the sequence of confidence intervals $[A,B]$ contains $\theta$ at least 95% of the time, on average. [[True|False]]
:::

---
> id: step-confidence-bands
#### Confidence bands

If we are estimating a _function_-valued feature of $\nu$ rather than a single number (for example, a regression function), then we might want to provide a confidence *band* which traps the whole graph of the function with specified probability (we'll see an example, the *DKW theorem*, in the next section).

::: .definition
**Definition** (Confidence band)  
Let $I \subset \mathbb{R}$, and suppose that $T$ is a function from the set of distributions to the set of real-valued functions on $I$.

A $1-\alpha$ **confidence band** for $T(\nu)$ is pair of random functions $y\_{\textrm{min}}$ and $y\_{\textrm{max}}$ from $I$ to $\mathbb{R}$ defined in terms of $n$ independent observations from $\nu$ and having $y\_{\textrm{min}} \leq T(\nu) \leq y\_{\textrm{max}}$ everywhere on $I$ with probability at least $1-\alpha$.
:::

---
> id: empirical-cdf-convergence
## Empirical CDF Convergence

Let's revisit the observation from the first section that the CDF of the empirical distribution of an independent list of observations from a distribution tends to be close to the CDF of the distribution itself. The **Glivenko-Cantelli** theorem is a mathematical formulation of the idea that these two functions are indeed close.

::: .theorem
**Theorem** (Glivenko-Cantelli)  
If $F$ is the CDF of a distribution $\nu$ and $\widehat{F}_n$ is the CDF of the empirical distribution $\widehat{\nu}_n$ of $n$ observations from $\nu$, then $F_n$ converges to $F$ along the whole number line:
``` latex
\max_{x\in \mathbb{R}} |F(x) - \widehat{F}_n(x)| \to 0 \quad \text{as }n \to \infty,
```
:::

[Continue](btn:next)

---
> id: step-DKW

The **Dvoretzky-Kiefer-Wolfowitz inequality** quantifies this result by providing a confidence band.  

::: .theorem

    img(src="images/uniformcdf.svg" width=240 style="float: right;")

**Theorem**  (Dvoretzky-Kiefer-Wolfowitz inequality)  
If $X_1, X_2, \ldots$ are independent random variables with common CDF $F$, then for all $\epsilon > 0$, we have

``` latex
\mathbb{P}\left(\max_{x}|F(x) - \widehat{F}_n(x)|\geq \epsilon\right) \leq 2
    \operatorname{e}^{-2n\epsilon^2}.
```

In other words, the probability that the graph of $\widehat{F}_n$ lies in the $\epsilon$-band around $F$ (or vice versa) is at least $1 - 2 \operatorname{e}^{-2n\epsilon^2}$.
:::

::: .exercise
**Exercise**  
Use the code cell below to experiment with various values of $n$, and confirm that the graph usually falls inside the DKW confidence band.

Hint: after running the cell once, you can comment out the first plot command and run the cell repeatedly to get lots of empirical CDFs to show up on the same graph.
:::

    pre(julia-executable)
      | using Plots, Distributions, Roots

      | n = 50
      | ϵ = find_zero(ϵ -> 2exp(-2n*ϵ^2) - 0.1, 0.05)
      | xs = range(0, 8, length=100)
      | plot(xs, x-> 1-exp(-x) + ϵ, fillrange = x-> 1-exp(-x) - ϵ,
      |      label = "true CDF", legend = :bottomright,
      |      fillalpha = 0.2, linewidth = 0)
      | plot!(sort(rand(Exponential(1),n)), (1:n)/n,
      |       seriestype = :steppre, label = "empirical CDF")

As $n$ increases, the confidence band [[narrows|widens]]. Yet the proportion of CDFs that lie in the band stays [[higher than 90%|higher than 99.9%]].

---
> id: step-dkw-analytic-exercise

::: .exercise
**Exercise**  
Show that if $\epsilon_n = \sqrt{\frac{1}{2n}\log(\frac{2}{\alpha})}$, then with probability at least $1 - \alpha$, we have $|F(x) - F_n(x)| \leq \epsilon$ for all $x \in \mathbb{R}$.
:::

    x-quill

---
> id: step-dkw-analytic-solution

*Solution.* If we substitute the given value of $\epsilon$, the right-hand side reduces to $\epsilon$. So the desired equation follows from the DKW inequality.

---
> id: Bootstrapping
## Bootstrapping

**Bootstrapping** is the use of simulation to approximate the value of the plug-in estimator of a statistical functional $T$ which is expressed in terms of independent observations from the input distribution $\nu$. The key point is that drawing $k$ observations from the empirical distribution $\widehat{\nu}$ is the same as drawing $k$ times [[**with replacement**|**without replacement**]] from the list of observations.

---
> id: step-bootstrap-simple-example

::: .example
**Example**  
Consider the statistical functional $T(\nu) = $ the expected difference between the greatest and least of 10 independent observations from $\nu$. Suppose that 50 observations $X_1, \ldots , X_{50}$ from $\nu$ are observed, and that $\widehat{\nu}$ is the associated empirical CDF. Explain how $T(\widehat{\nu})$ may be estimated with arbitrarily small error.
:::

[Continue](btn:next)

---
> id: step-boostrap-simple-example-solution

*Solution.* The value of $T(\widehat{\nu})$ is defined to be the expectation of a distribution that we have instructions for how to sample from. So we sample 10 times with replacement from $X_1, \ldots , X_{50}$, identify the largest and smallest of the 10 observations, and record the difference. We repeat $B$ times for some large integer $B$, and we return the sample mean of these $B$ values.

By the law of large numbers, the result can be made arbitrarily close to $T(\widehat{\nu})$ with arbitrarily high probability by choosing $B$ sufficiently large.

[Continue](btn:next)

---
> id: step-why-bootstrap-important

Although this example might seem a bit contrived, bootstrapping is useful in practice because of a common source of statistical functionals that fit the bootstrap form: **standard errors**.

::: .example
**Example**  
Suppose that we estimate the median $\theta$ of a distribution using the plug-in estimator $\widehat{\theta}$ for 75 observations, and we want to produce a confidence interval for $\theta$. Show how to use bootstrapping to estimate the standard error of the estimator.
:::

*Solution.* By definition, the standard error of $\widehat{\theta}$ is the square root of the variance of the median of 75 independent draws from $\nu$. Therefore, the plug-in estimator of the standard error is the square root of the variance of the median of 75 independent draws from $\widehat{\nu}$. This can be readily simulated. If the observations are stored in a vector `{jl} X`, then

    pre(julia-executable)
      | using Random, Statistics, StatsBase
      | X = rand(75)
      | std(median(sample(X, 75)) for _ in 1:10^5)

    pre.rblock(r-executable)
      | sd(sapply(1:10^5,function(n) {median(sample(X,75,replace=TRUE))}))

returns a very accurate approximation of $T(\widehat{\nu})$.

[Continue](btn:next)

---
> id: step-bootstrap-warning

Perhaps the most important caution regarding bootstrapping is that the bootstrap only approximates $T(\widehat{\nu})$. It only approximates $T(\nu)$ (where $\nu$ is the underlying true distribution from which the observations are sampled) insofar as we have enough observations for $T(\widehat{\nu})$ to approximate $T(\nu)$ well.

::: .exercise
**Exercise**  
Suppose that $\nu$ is the uniform distribution on $[0,1]$. Generate 75 observations from $\nu$, store them in a vector $X$, and compute the bootstrap estimate of $T(\widehat{\nu})$, where $T(\nu)$ is the standard deviation of 75 independent observations from $\nu$. Use Monte Carlo simulation to directly estimate $T(\nu)$. Can the gap between your approximations of $T(\widehat{\nu})$ and $T(\nu)$ be made arbitrarily small by using more bootstrap samples?
:::

    pre(julia-executable)
      |

    x-quill

---
> id: step-bootstrap-warning-solution

*Solution.* The gap cannot be made arbitrarily small. We would need to get more than 75 samples from the distribution to get closer to the exact value of $T(\operatorname{Unif}([0,1]))$.

    pre(julia-executable)
      | X = rand(75)
      | std(median(sample(X, 75)) for _ in 1:10^6) # estimate T(ν̂)
      | std(median(rand(75)) for _ in 1:10^6) # estimate T(ν)

---
> id: maximum-likelihood-estimation
## Maximum Likelihood Estimation

So far we've had two ideas for building an estimator for a statistical functional $T$: one is to plug $\widehat{\nu}$ into $T$, and the other—kernel density estimation—is closely related (we just smear the probability mass out around each observed data point before substituting into $T$). In this section, we'll learn another approach which has some compelling properties and is suitable for choosing from a parametric family of densities or mass functions.

[Continue](btn:next)

---
> id: step-intro-log-likelihood

Let's revisit the example from the first section where we looked for the Gaussian distribution which best fits a given set of measurements of the heights of 50 adults. This time, we'll include a goodness score for each choice of $\mu$ and $\sigma^2$, so we don't have to select a best fit subjectively.

The goodness function we'll use is called the **log likelihood** function, which we define to be the log of the product of the density function evaluated at each of the observed data points. This function rewards density functions which have larger values at the observed data points and penalizes functions which have very small values at some of the points. This is a rigorous way of capturing the idea that the a given density function is consonant with the observed data.

Adjust the knobs to get the goodness score as high as possible (hint: you can get it up to about $-135.8$).

---
> id: gaussiandensity_mle

{.text-center} `μ =`${μ}{μ|60|55,75,0.1}

{.text-center} `σ =`${σ}{σ|2|2,8,0.05}

{.text-center} log likelihood = ${LL}

    x-chart(width=600 height=400 x-axis="55,100,5" y-axis="0,0.3,0.1")

The best μ value is [[66±0.4]], and the best σ value is [[3.7±0.2]].

---
> id: step-explanation-intro-MLE
#### Definitions

Consider a parametric family $\\{f\_{\boldsymbol{\theta}}(x) :  \boldsymbol{\theta} \in \mathbb{R}^d\\}$ of [PDFs](gloss:pdf) or [PMFs](gloss:pmf). For example, the parametric family might consist of all Gaussian distributions, all geometric distributions, or all discrete distributions on a particular finite set.

Given $\mathbf{x} \in \mathbb{R}^n$, the **likelihood** $\mathcal{L}\_{\mathbf{x}}: \mathbb{R}^d \to \mathbb{R}$ is defined by

``` latex
\mathcal{L}_{\mathbf{x}}(\boldsymbol{\theta}) = f_{\boldsymbol{\theta}}(x_{1})f_{\boldsymbol{\theta}}(x_{2})\cdots
f_{\boldsymbol{\theta}}(x_{n}).
```

The idea is that if $\mathbf{X}$ is a vector of $n$ independent observations drawn from $f\_{\boldsymbol{\theta}}(x)$, then $\mathcal{L}\_{\mathbf{X}}(\boldsymbol{\theta})$ is small or zero when $\boldsymbol{\theta}$ is not in concert with the observed data.

[Continue](btn:next)

Because likelihood is defined to a product of many factors, its values are often extremely small, and we may encounter [overflow](gloss:overflow) issues. Furthermore, sums are often easier to reason about than products. For both of these reasons, we often compute the logarithm of the likelihood instead:

``` latex
\log(\mathcal{L}_{\mathbf{x}}(\boldsymbol{\theta}) )= \log(f_{\boldsymbol{\theta}}(x_{1})) + \log(f_{\boldsymbol{\theta}}(x_{2})) + \cdots
+ \log(f_{\boldsymbol{\theta}}(x_{n})).
```

Maximizing the likelihood is the same as maximizing the log likelihood because the natural logarithm is a monotonically increasing function.

---
> id: step-mle-examples

::: .example
**Example**  
Suppose $x\mapsto f(x;\theta)$ is the density of a uniform random variable on $[0,\theta]$. We observe four samples drawn from this distribution: $1.41, 2.45, 6.12$, and $4.9$. Find $\mathcal{L}(5)$, $\mathcal{L}(10^6)$, and $\mathcal{L}(7)$.
:::

[Continue](btn:next)

---

> id: step-basic-likelihood-solution

*Solution.* The likelihood at 5 is zero, since $f\_{5}(x\_{3}) = 0$. The likelihood at $10^6$ is very small, since $\mathcal{L}(10^6) = (1/10^6)^4 = 10^{-24}$. The likelihood at 7 is larger: $(1/7)^4 = 1/2401$.

[Continue](btn:next)

---
> id: step-propose-MLE

As illustrated in this example, likelihood has the property of being zero or small at implausible values of $\boldsymbol{\theta}$, and larger at more reasonable values. Thus we propose the **maximum likelihood estimator**

``` latex
\widehat{\boldsymbol{\theta}}_{\mathrm{MLE}} = \operatorname{argmax}_{\boldsymbol{\theta} \in
\mathbb{R}^d}\mathcal{L}_{\mathbf{X}}(\boldsymbol{\theta}).
```

[Continue](btn:next)

---
> id: step-gaussian-mle-example

::: .example
**Example**  
Suppose that $x\mapsto f(x;\mu,\sigma^2)$ is the normal density with mean $\mu$ and variance $\sigma^2$. Find the maximum likelihood estimator for $\mu$ and $\sigma^2$.
:::

[Continue](btn:next)

---
> id: step-gaussian-mle-solution

*Solution.* The maximum likelihood estimator is the minimizer of the logarithm of the likelihood function, which works out to

``` latex
- \frac{n}{2}\log 2\pi - \frac{n}{2}
\log \sigma^2 - \frac{(X_1-\mu)^2}{2\sigma^2} - \cdots - \frac{(X_n
  - \mu)^2}{2\sigma^2},
```

since $\log f(X_i; \mu, \sigma^2) = \log\left(\frac{1}{\sigma \sqrt{2\pi}}\operatorname{e}^{-(X_i-\mu^2)/2\sigma^2}\right) = -\frac{\log 2\pi}{2} - \log \sigma - \frac{1}{2\sigma^2}(X_i - \mu)^2$, for each $i$.

Setting the derivatives with respect to $\mu$ and $v = \sigma^2$ equal to zero, we find
``` latex
\frac{\partial \log \mathcal{L}_\mathbf{X}(\boldsymbol{\theta})}{\partial v} &= -\frac{n}{2v} + \frac{1}{2v^2}\sum_{i=1}^n(X_i-\mu)^2 = 0 \\
\frac{\partial \log \mathcal{L}_\mathbf{X}(\boldsymbol{\theta})}{\partial \mu}&= -\frac{1}{2v}\sum_{i=1}^n2(X_i - \mu) = 0,
```
which implies $\mu = \overline{X} = \frac{1}{n}(X\_1+\cdots+X\_n)$ (from solving the second equation) as well as $v = \sigma^2 = \frac{1}{n}((X\_1-\overline{X})^2 + \cdots + (X\_n-\overline{X})^2)$ (from solving the first equation). Since there's only one critical point, and since we can observe that the log likelihood goes to $-\infty$ as $(\mu, \sigma^2) \to\infty$, there must be a local maximum at this critical point.

So we may conclude that the maximum likelihood estimator agrees with the plug-in estimator for $\mu$ and $\sigma^2$.

[Continue](btn:next)

---
> id: step-mle-poisson

::: .exercise
**Exercise**  
Consider a Poisson random variable $X$ with parameter $\lambda$. In other words, $\mathbb{P}(X = x) = \frac{\lambda^x \operatorname{e}^{-\lambda}}{x!}$.

Verify that
``` latex
\log \left(\mathcal{L}_{\mathbf{X}}(\lambda)\right) = \log(\lambda) \sum_{i = 1}^n X_i - n\lambda - \sum_{i = 1}^n \log(X_i!).
```
Show that it follows the maximum likelihood estimator $\widehat{\lambda}$ is equal to the sampel mean $\bar{X}$, and explain why this makes sense intuitively.
:::

    x-quill

---
> id: step-poisson-mle-solution

*Solution.*  When we take the derivative with respect to $\lambda$ and set it equal to zero, we get

```latex
\frac{\sum_{i = 1}^n X_i }{\widehat{\lambda}} - n = 0 ,
```

which gives us $\widehat{\lambda} = \frac{\sum X_i}{n} = \bar{\mathbf{X}}$, the sample mean.

Taking a second derivative gives $-\frac{\sum_{i = 1}^n X_i }{\widehat{\lambda}^2}$. Since this quantity is everywhere negative, the likelihood is [concave](gloss:convex). Therefore, the MLE has a local maximum at the critical point $\widehat{\lambda}$, and that local maximum is also a global maximum.

[Continue](btn:next)

---
> id: step-least-squares-estimator-example

::: .example
**Example**  
Suppose  $Y = X\beta + \epsilon$ for $i = 1, 2, \cdots, n$, where $\epsilon$ has distribution $\mathcal{N}(0, I \sigma^2)$. Treat $\sigma$ as known and $\beta$ as the only unknown parameter. Suppose that $n$ observations $(X_1, Y_1), \ldots, (X_n, Y_n)$ are made.

Show that the least squares estimator for $\beta$ is the same as the MLE for $\beta$ by making observations about your log likelihood.
:::
*Solution.* The log likelihood is
```latex
\log \left(\mathcal{L}_{\mathbf{X}}(\beta)\right) = \sum_{i = 1}^n\left[ \log\left(\frac{1}{\sqrt{2\pi \sigma^2}}\right) - \frac{(Y_i - X_i\beta)^2}{2\sigma^2}\right].
```
The only term that depends on $\beta$ is the second one, so maximizing the log likelihood is the same as maximizing $- \sum_{i=1}^n \frac{(Y_i - X_i\beta)^2}{2\sigma^2}$, which in turn is the same as minimizing $\sum_{i=1}^n(Y_i - X_i\beta)^2$.

[Continue](btn:next)

---
> id: step-mle-binomial

::: .exercise
**Exercise**  
(a) Consider the family of distributions which are uniform on $[0,b]$, where $b \in (0,\infty)$. Explain why the MLE for the distribution maximum $b$ is the sample maximum.

(b) Show that the MLE for a Bernoulli distribution with parameter $p$ is the empirical success rate $\frac{1}{n} \sum_{i=1}^n X_i$.
:::

    x-quill

---
> id: step-mle-binomial-solution

(a) The likelihood associated with any value of $b$ smaller than the sample maximum is zero, since at least one of the density values is zero in that case. The likelihood is a decreasing function of $b$ as $b$ ranges from the sample maximum to $\infty$, since it's equal to $(1/b)^n$. Therefore, the maximal value is at the sample maximum.

(b) The derivative of the log likelihood function is

```latex
\frac{\operatorname{d}}{\operatorname{d} p}\log \frac{p^s}{(1-p)^{n-s}} =  \frac{s}{p} - \frac{n-s}{1-p},
```

where $s$ is the number of successes. Setting the derivative equal to zero and solving for $p$, we find $p = s/n$.

[Continue](btn:next)

---
> id: step-MLE-properties
#### Properties of the Maximum Likelihood Estimator

MLE enjoys several nice properties: under certain regularity conditions, we have  
* **Consistency**: $\mathbb{E}[(\widehat{\theta}\_{\mathrm{MLE}} - \theta)^2] \to 0$ as the number of samples goes to $\infty$. In other words, the average squared difference between the maximum likelihood estimator and the parameter it's estimating converges to zero.
* **Asymptotic normality**: $(\widehat{\theta}\_{\mathrm{MLE}} - \theta)/\sqrt{\operatorname{Var} \widehat{\theta}\_{\mathrm{MLE}}}$ converges to $\mathcal{N}(0,1)$ as the number of samples goes to $\infty$. This means that we can calculate good confidence intervals for the maximum likelihood estimator, assuming we can accurately approximate its mean and variance.
* **Asymptotic optimality**: the MSE of the MLE converges to 0 approximately as fast as the MSE of any other consistent estimator. Thus the MLE is not wasteful in its use of data to produce an estimate.

* **Equivariance**: Suppose $\widehat{\theta}$ is the MLE of $\theta$ for $f(\theta)$. Then the MLE for $g(\theta)$ is $g(\widehat{\theta})$. This is a useful property; it states that transformation on the parameter (say, shifting the mean of a normal distribution by a number, or taking the square of the standard deviation) of interest is not an inconvenience for our MLE estimate for the parameter because we can simply apply the transformation on the MLE as well.

::: .example
**Example**  
Show that the plug-in variance estimator for a sequence of $n$ i.i.d.\ samples from a Gaussian distribution $\mathcal{N}(\mu, \sigma^2)$ converges to $\sigma^2$ as $n\to\infty$.
:::

[Continue](btn:next)

---
> id: step-MLE-consistency-solution

*Solution.* We've seen that the plug-in variance estimator is the maximum likelihood estimator for variance. Therefore, it converges to $\sigma^2$ by MLE consistency.

[Continue](btn:next)

---
> id: step-MLE-optimality

::: .exercise
**Exercise**  
Show that it is not possible to estimate the mean of a distribution in a way that converges to the true mean at a rate asymptotically faster than $1/\sqrt{n}$, where $n$ is the number of observations.
:::

    x-quill

---
> id: step-MLE-optimality-solution

*Solution.* The sample mean is the maximum likelihood estimator, and it converges to the mean at a rate proportional to the inverse square root of the number of observations. Therefore, there is not another estimator which converges with an asymptotic rate faster than that.

[Continue](btn:next)

---
> id: mle-caution
#### Drawbacks of maximum likelihood estimation

The maximum likelihood estimator is not a panacea. We've already seen that the maximum likelihood estimator can be biased (the sample maximum for the family of uniform distributions on $[0,b]$, where $b \in \mathbb{R}$). There are several other issues that can arise when maximizing likelihoods.

* **Computational difficulties**. It might be difficult to work out where the maximum of the likelihood occurs, either analytically or numerically. This would be a particular concern in high dimensions (that is, if we have many parameters) and if the maximum likelihood function is [[non-concave|differentiable|concave]].
* **Misspecification**. The MLE may be inaccurate if the distribution of the observations is not in the specified parametric family. For example, if we assume the underlying distribution is Gaussian, when in fact its shape is not even close to that of a Gaussian, we very well might get unreasonable results.
* **Unbounded likelihood**. If the likelihood function is not bounded, then $\widehat{\theta}\_{\mathrm{MLE}}$ is not even defined:

::: .exercise
**Exercise**  
Consider the family of distributions on $\mathbb{R}$ given by the set of density functions

``` latex
\gamma \mathbf{1}_{[a,b]} + \delta \mathbf{1}_{[c,d]},
```

where $a < b < c < d$, and where $\gamma$ and $\delta$ are nonnegative real numbers such that $\gamma(b-a) + \delta(d-c) = 1$. Show that the likelihood function has no maximum for this family of functions.
:::

{.text-center} `a =`${a}{a|-3|-3,5,0.01} `b =`${b}{b|-1|-3,5,0.01} `c =`${c}{c|2|-3,5,0.005} `d =`${d}{d|3|-3,5,0.005} `γ =`${γ}{γ|0.2|0,1.0,0.01}

{.text-center} `likelihood` = ${likelihood}

    x-chart(width=600 height=400 x-axis="-4,5,1" y-axis="0,13,1")

    x-quill

---
> id: mle-unbounded-example-solution

*Solution.* We identify the largest value in our data set and choose $c$ to be $\epsilon$ less than that value and $d$ to be $\epsilon$ more than it. We choose $a$ and $b$ so that the interval $[a,b]$ contains all of the other observations (since otherwise we would get a likelihood value of zero). Then we can send $\epsilon$ to zero while holding $a,b$ and $\gamma$ fixed. That sends $\delta$ to $\infty$, which in turn causes the likelihood to grow without bound.

[Continue](btn:next)

---
> id: step-final-note-mle

One further disadvantage of the maximum likelihood estimator is that it doesn't provide for a smooth mechanism to account for prior knowledge. For example, if we flip a coin twice and see heads both times, our (real-world) beliefs about the coin's heads probability would be that it's about 50%. Only once we saw quite a few heads in a row would we begin to use that as evidence move the needle on our strong prior belief that coins encountered in daily life are not heavily weighted to one side or the other.

*Bayesian* statistics provides an alternative framework which addresses this shortcoming of maximum likelihood estimation.

---
> id: hypothesis-testing
## Hypothesis Testing

**Hypothesis testing** is a disciplined framework for adjudicating whether observed data do not support a given hypothesis.

 Consider an unknown distribution from which we will observe $n$ samples $X\_1, \ldots X\_n$.
* We state a hypothesis $H\_0$—called the **null hypothesis**—about the distribution.
* We come up with a **test statistic** $T$, which is a function of the data $X\_1, \ldots X\_n$, for which we can evaluate the distribution of $T$ assuming the null hypothesis.
* We give an **alternative hypothesis** $H\_{\mathrm{a}}$ under which $T$ is expected to be significantly different from its value under $H\_0$.
* We give a significance level $\alpha$ (like 5% or 1%), and based on $H\_{\mathrm{a}}$ we determine a set of values for $T$—called the *critical region*—which $T$ would be in with probability at most $\alpha$ under the null hypothesis.
* **After setting $\boldsymbol{H_0}$, $\boldsymbol{H_{\mathrm{a}}}$, $\boldsymbol{\alpha}$, $\boldsymbol{T}$, and the critical region**, we run the experiment, evaluate $T$ on the samples we get, and record the result as $t\_{\mathrm{obs}}$.
* If $t\_{\mathrm{obs}}$ falls in the critical region, we reject the null hypothesis. The corresponding **_p_-value** is defined to be the minimum $\alpha$-value which would have resulted in rejecting the null hypothesis, with the critical region chosen in the same way.

::: .example
**Example**  
Muriel Bristol claims that she can tell by taste whether the tea or the milk was poured into the cup first. She is given eight cups of tea, four poured milk-first and four poured tea-first.

We posit a null hypothesis that she isn't able to discern the pouring method, and an alternative hypothesis that she can tell the difference. How many cups does she have to identify correctly to reject the null hypothesis with 95% confidence?
:::

[Continue](btn:next)

---
> id: step-MLE-solution

*Solution.* Under the null hypothesis, the number of cups identified correctly is 4 with probability $1/\binom{8}{4} \approx 1.4\%$ and at least 3 with probability $17/70 \approx 24\%$. Therefore, at the 5% significance level, only a correct identification of all the cups would give us grounds to reject the null hypothesis. The $p$-value in that case would be 1.4%.

[Continue](btn:next)

---
> id: step-failure-to-reject

Failure to reject the null hypothesis is not necessarily evidence *for* the null hypothesis. The **power** of a hypothesis test is the conditional probability of rejecting the null hypothesis given that the alternative hypothesis is true. A $p$-value may be low either because the null hypothesis is true or because the test has low power.

[Continue](btn:next)

---
> id: step-wald-test
#### The Wald test and the t-test

::: .definition
**Definition**  
The **Wald test** is based on the normal approximation. Consider a null hypothesis $\theta = 0$ and the alternative hypothesis $\theta \neq 0$, and suppose that $\widehat{\theta}$ is approximately normally distributed. The Wald test rejects the null hypothesis at the 5% significance level if $|\widehat{\theta}| &gt; 1.96 \operatorname{se}(\widehat{\theta})$.
:::

::: .example
**Example**  
Consider the alternative hypothesis that 8-cylinder engines have lower fuel economy than 6-cylinder engines (with null hypothesis that they are the same). Apply the Wald test, using the data below from the R dataset `{jl} mtcars`.

```julia
six_cyl_mpgs = [21.0, 21.0, 21.4, 18.1, 19.2, 17.8, 19.7]
eight_cyl_mpgs = [18.7, 14.3, 16.4, 17.3, 15.2, 10.4, 10.4, 14.7, 15.5, 15.2, 13.3, 19.2, 15.8, 15.0]
```
:::

*Solution.* We frame the problem as a question about whether the *difference in means* between the distribution of 8-cylinder `{r} mpg` values and the distribution of 6-cylinder `{r} mpg` values is zero. We use the difference between the sample means $\overline{X}$ and $\overline{Y}$ of the two populations as an estimator of the difference in means. If we think of the records in the data frame as independent, then $\overline{X}$ and $\overline{Y}$ are independent. Since each is approximately normally distributed by the central limit theorem, their difference is therefore also approximately normal. So, let's calculate the sample mean and sample variance for the 8-cylinder cars and for the 6-cylinder cars.

    pre(julia-executable)
      | using Statistics
      | six = [21.0, 21.0, 21.4, 18.1, 19.2, 17.8, 19.7]
      | eight = [18.7, 14.3, 16.4, 17.3, 15.2, 10.4, 10.4, 14.7, 15.5, 15.2, 13.3, 19.2, 15.8, 15.0]
      | m₁, m₂ = mean(six), mean(eight)
      | s₁, s₂ = std(six), std(eight)
      | n₁, n₂ = length(six), length(eight)

    pre.rblock(r-executable)
      |
      | library(tidyverse)
      |
      | stats <- mtcars %>%
      |   group_by(cyl) %>%
      |   filter(cyl %in% c(6,8)) %>%
      |   summarise(m = mean(mpg), S2 = var(mpg), n = n(), se = sqrt(S2/n))

Given that the distribution of 8-cylinder `{r} mpg` values has variance $\sigma\_{\mathrm{eight}}^2$, the variance of the sample mean $\overline{X}$ is $\sigma\_{\mathrm{eight}}^2/n\_{\mathrm{eight}}$, where $n\_{\mathrm{eight}}$ is the number of 8-cylinder vehicles (and similarly for $\overline{Y}$). Therefore, we estimate the variance of the difference in sample means as

``` latex
 \operatorname{Var}(\overline{X} - \overline{Y}) = \operatorname{Var}(\overline{X}) +
\operatorname{Var}(\overline{Y}) =\sigma_{\mathrm{eight}}^2/n_{\mathrm{eight}} +
  \sigma_{\mathrm{six}}^2/n_{\mathrm{six}}.
```

Under the null hypothesis, therefore, $\overline{X} - \overline{Y}$ has mean zero and standard error $\sqrt{\sigma\_{\mathrm{eight}}^2/n\_{\mathrm{eight}} + \sigma\_{\mathrm{six}}^2/n\_{\mathrm{six}}}$. We therefore reject the null hypothesis with 95% confidence if the value of $\overline{X} - \overline{Y}$ divided by its estimated standard error exceeds 1.96. We find that

    pre.rblock(r-executable)
      | z <- (stats$m[1] - stats$m[2]) / sqrt(sum(stats$se^2))

    pre(julia-executable)
      | z = (m₁ - m₂) / sqrt(s₁^2/n₁ + s₂^2/n₂)

returns $5.29$, so we do reject the null hypothesis at the 95% confidence level. The $p$-value of this test is `{jl} 1-cdf(Normal(0,1),z)` $= 6.08 \times 10^{-6}$.

[Continue](btn:next)

The Wald test can be overconfident because it doesn't account for the fact that the standard deviation values are estimated from the data:

::: .exercise
**Exercise**  
Experiment with the code block below to see how, even when the initial distribution is normal, standardizing the mean using the *estimated* standard deviation results in a non-normal distribution. How is this distribution different? Around what value of $n$ does the graph become visually indistinguishable from the normal distribution (in this visualization)?
:::

    pre(julia-executable)
      | using Plots, Distributions

      | n = 6
      | μ = 3
      | sample(n) = [μ + 0.5randn() for _ in 1:n]
      | standardize(X) = (mean(X) - μ)/(std(X)/√(length(X)))
      | histogram([standardize(sample(n)) for _ in 1:1_000_000],
      |            xlims = (-6,6), normed=true, label="standardized mean")
      | plot!(-6:0.05:6, x-> pdf(Normal(0,1),x), linewidth = 3,
      |       label = "standard normal density", opacity = 0.75)

    x-quill

---
> id: step-t-dist-solution

*Solution.* The distribution of $\frac{A_n - \mu}{S/\sqrt{n}}$ apparently has heavier tails that the normal distribution. Based on the graph, it appears that this effect is more noticeable for $n$ less than 30 than for $n$ greater than 100. (Both of these numbers are arbitrary; the main point is that it doesn't take huge values of $n$ for the distribution to start looking fairly normal.)

[Continue](btn:next)

---
> id: step-t-test-previous-example

If $X_1, X_2, \ldots, X_n$ is a sequence of normal random variables with mean $\mu$ and variance $\sigma^2$, let's define $\overline{X}$ to be the average of $X_i$'s, and $S$ to be the sample variance, so $S^{2}=\frac{1}{n-1} \sum_{i=1}^{n}\left(X_{i}-\overline{X}\right)^{2}$. Then the distribution of $(\overline{X} - \mu)/(S/\sqrt{n})$ is called the **t-distribution** with $n-1$ [**degrees of freedom**](gloss:degrees-of-freedom).

::: .exercise
**Exercise**  
Use your knowledge of the t-distribution to test the hypothesis that the mean of the distribution used to generate the following list of numbers has mean greater than 4.

Note: you can create an object to represent the t-distribution with `{jl} ν` degrees of freedom using the expression `{jl} TDist(ν)`. To evaluate its cumulative distribution function at `{jl} x`, use `{jl} cdf(TDist(ν), x)`.
:::

    pre(julia-executable)
      | X = [4.1, 5.12, 3.39, 4.97, 3.07, 4.17, 4.46, 5.53, 3.28, 3.62]
      |

    x-quill

[Continue](btn:next)

---
> id: step-t-basic-solution

*Solution.* We define the statistic $t = (X - 4)/(S/\sqrt{n})$, which under the null hypothesis is $t$-distributed with 9 degrees of freedom. We compute

    pre(julia-executable)
      | t = (mean(X) - 4) / (std(X)/length(X))

which is approximately 2.029, and then

    pre(julia-executable)
      | 1 - cdf(TDist(length(X)-1), t)

which is about 3.7\%. So we are able to reject the null hypothesis at the 5\% significance level.

[Continue](btn:next)

---
> id: step-redo-mpg-t-test

There are a variety of $t$-tests, including one appropriate to the mpg problem discussed above:

::: .exercise
**Exercise**  
Redo the mpg problem above with the *Welch's* t-test instead of the Wald test. This test says that the statistic
``` latex
t = \frac{\overline{X}_{1}-\overline{X}_{2}}{\sqrt{\frac{s_{1}^{2}}{n_{1}}+\frac{s_{2}^{2}}{n_{2}}}}
```
is, under the null hypothesis, $t$-distributed with
``` latex
\frac{\left(\frac{s_{1}^{2}}{n_{1}}+\frac{s_{2}^{2}}{n_{2}}\right)^{2}}{\frac{\left(s_{1}^{2} / n_{1}\right)^{2}}{n_{1}-1}+\frac{\left(s_{2}^{2} / n_{2}\right)^{2}}{n_{2}-1}}
```
degrees of freedom.
:::

    pre(julia-executable)
      | using Statistics
      | six = [21.0, 21.0, 21.4, 18.1, 19.2, 17.8, 19.7]
      | eight = [18.7, 14.3, 16.4, 17.3, 15.2, 10.4, 10.4, 14.7, 15.5, 15.2, 13.3, 19.2, 15.8, 15.0]
      | m₁, m₂ = mean(six), mean(eight)
      | s₁, s₂ = std(six), std(eight)
      | n₁, n₂ = length(six), length(eight)

    x-quill

[Continue](btn:next)

---
> id: step-solution-redo-mpg

*Solution.* We calculate

    pre(julia-executable)
      | a = s₁^2/n₁
      | b = s₂^2/n₂
      | ν = (a + b)^2 / (a^2/(n₁-1) + b^2/(n₂-1))
      | t = (m₁ - m₂)/sqrt(a+b)
      | ccdf(TDist(ν), t)

(Note that `{jl} ccdf` is the same as `{jl} 1-cdf`.) The value returned is $2.27 \times 10^{-5}$, so we still reject the null hypothesis, but the $p$-value is higher than what we got previously.

[Continue](btn:next)

---
> id: random-permutation-test
### Random Permutation Test

The following test is more flexible than the Wald test, since it doesn't rely on the normal approximation. It's based on a simple idea: if there's no difference in labels, the data shouldn't look very different if we shuffle them around.

::: .definition
**Definition**  
The **random permutation test** is applicable when the null hypothesis is that two distributions are the same.
* We compute the difference between the sample means for the two groups.
* We randomly re-assign the group labels and compute the resulting sample mean differences. Repeat many times.
* We check where the original difference falls in the sorted list of re-sampled differences.
:::

::: .example
**Example**  
Suppose the heights of the Romero sons are 72, 69, 68, and 66 inches, and the heights of the Larsen sons are 70, 65, and 64 inches. Consider the null hypothesis that the height distributions for the two families are the same, with the alternative hypothesis that they are not. Determine whether a random permutation test applied to the absolute sample mean difference rejects the null hypothesis at significance level $\alpha = 0.05$.
:::


*Solution.* We find that the absolute sample mean difference of about 2.4 inches is larger than only about 68% of the mean differences obtained by resampling many times.

    pre.rblock(r-executable)
      |
      | set.seed(123)
      | romero <- c(72, 69, 68, 66)
      | larsen <- c(70, 65, 64)
      | actual.diff <- abs(mean(romero) - mean(larsen))
      |
      | resample.diff <- function(n) {
      |   shuffled <- sample(c(romero,larsen))
      |   abs(mean(shuffled[1:4]) - mean(shuffled[5:7]))
      | }
      |
      | sum(sapply(1:10000,resample.diff) < actual.diff)
      |    

Since 68% < 95%, we retain the null hypothesis.

[Continue](btn:next)

---
> id: multiple-testing
### Multiple testing

If we conduct many hypothesis tests, then the probability of obtaining some false rejections is high. This is called the **multiple testing problem**.

    figure
      img(src="https://imgs.xkcd.com/comics/significant.png")
      p.caption Credit: xkcd.com

The **Bonferroni method** is to reject the null hypothesis only for those tests whose $p$-values are less than $\alpha$ divided by the number of hypothesis tests being run. This ensures that the probability of having even one false rejection is less than $\alpha$, so it is very conservative.

::: .example
**Example**  
Suppose that 10 different genes are tested to determine whether they have an affect on heart disease. The 10 $p$-values resulting from these hypothesis tests are (rounded to the nearest hundredth of a percent):

``` latex
0.89\%,   
2.71\%,             
9.11\%,           
2.18\%,             
9.17\%,             
7.48\%,
5.0\%,              
2.02\%,             
5.22\%,
9.46\%
```      

Which results are reported as significant at the 5% level, according to the Bonferroni method?
:::

*Solution.* At the 5% level, only $p$ values less than 5%/10 = 0.5% are reported as significant (since we ran ten hypothesis tests). Since none of the $p$ values are below 0.5%, none of the genes will be considered significant.


[Continue](btn:next)

---
> id: step-parting-thoughts

Hypothesis testing is often viewed by learners of statistics as potentially misleading. In fact, this thought is not uncommon among professional statisticians and other scientists as well. See, for example, this [comment in Nature](https://www.nature.com/articles/d41586-019-00857-9), which was part of a widespread discussion of $p$-values in the statistics community in early 2019.

Despite these concerns, it's useful to be understand the basics of hypothesis testing, because it remains a widely used framework, and conveys a critical lesson about the hazards of extracting hypotheses from data rather the other way around (using data to scrutinize hypotheses).


---
> id: causal-inference
## Causal Inference

::: .exercise
**Exercise**  
Suppose that your company's ad spending and revenue are found to have the relationship shown in the figure below. What are some potential explanations for why these values are positively associated?
:::

    figure
      img(src="images/adspending.svg")
      p.caption.md Each point represents an (ad spending, revenue) pair for a particular month.

    x-quill

---
> id: step-ad-spending-solution

*Solution.* Perhaps both revenue and ad spending are associated with a third variable, such as proximity to the holiday season. Or maybe management decides to spend more on ads when they have more revenue. Or maybe more ad spending results in more ad impressions and leads to increased sales.

[Continue](btn:next)

---
> id: step-casuation-discussion

*Association does not imply causation* is a cautionary mantra, and as such it raises the important question *How can we use statistics to discern cause?* There are many applications in business and science where the distinction between association and causation is exactly what we're interested in.

We will develop the **counterfactual model** for describing causation mathematically. The idea is to model causal relationships using random variables which describe **potential outcomes**.

[Continue](btn:next)

---
> id: step-train-or-car

For example, suppose you choose to drive rather than take the train to work, and you end up being late. It's natural to wonder *would I have been late if I'd driven?* In your mind, you're pondering two random variables: the amount of time $C_{\text{train}}$ that it would have taken if you'd chosen the train, and the amount of time $C_{\text{car}}$ that it was going to take if you drove. You would model both of these as random variables since you don't their values at the outset of the trip. When your journey is complete, you've been able to observe the value of one of these random variables, but not the other. Given your decision $X \in \\{\text{train}, \\text{car}\\}$, your observed outcome is $Y =$ [[$C\_X$|$C\_1$|$C\_0$]].

---
> id: step-train-on-time

To simplify, let's let $C_{\text{train}}$ be 0 if you're on time and 1 if you're late. Similarly, we let $C_{\text{car}}$ be 0 if you're on time and 1 if you're late. Also, we'll use $X = \text{train}$ and $X=0$ interchangeably, as well as $X = \text{car}$ and $X=1$ (in other words, encode train and car as 0 and 1, respectively).

::: .exercise
**Exercise**  
Suppose that the joint distribution of $X$, $Y$, $C_0$ and $C_1$ is the uniform distribution on the rows of a table compatible with the following one:

``` latex
\begin{array}{cccc}
{X} & {Y} & {C_{\text{train}}} & {C_{\text{car}}} \\ \hline
\text{train }(0) & {0} & {0} & * \\
\text{train }(0) & {0} & {0} & * \\
\text{train }(0) & {0} & {0} & * \\
\text{train }(0) & {0} & {0} & * \\ \hline
\text{car }(1) & {1} & * & {1} \\
\text{car }(1) & {1} & * & {1} \\
\text{car }(1) & {1} & * & {1} \\
\text{car }(1) & {1} & * & {1}
\end{array}
```

Note that the asterisks indicate *counterfactual* outcomes which are not observed.

We define the **association** to be

``` latex
\alpha = \mathbb{E}[Y | X = 1] - \mathbb{E}[Y | X = 0]
```

and the **average causal effect** to be

``` latex
\theta = \mathbb{E}[C_1] - \mathbb{E}[C_0].
```

Find the association as well as the largest and smallest possible values for the average causal effect. Describe a scenario in which the measure which gives rise to these extreme average causal effect values might be plausible.
:::

    x-quill

---
> id: step-basic-causal-example-solution

*Solution.*

The association is $1 - 0 = 1$, while the largest possible value for the average causal effect occurs when the last column is all ones and the next-to-last is all zeros. That gives an average causal effect of 1. The smallest value would be zero, if the first four rows are all zeros in the last two columns, and the last four rows are all ones.

Intepretation-wise, this makes sense. If the table ends in $(0,1)$ in every row, that means that taking the train always results in our being on time, while taking the car always results in our being late. The value of $X$ in that case definitely has a causal effect. Conversely, if the top half of the table is all zeros in the last two columns and the bottom half is all ones, then that means that we would have been on time those days regardless of our mode of transit on the days we took the train, and we would have been late no matter what on the days we took the car. So there is no causal effect in that case, and $\theta$ is appropriately equal to 0.

[Continue](btn:next)

---
> id: step-positive-result-causal

The punch line of Problem 2 is still negative: it tells us that the missing counterfactual outcomes can make it impossible to use association to say something about the causal effect. However, this is not always the case:

::: .exercise
**Exercise**  
Suppose that you flip a coin every day to determine whether to take the train or car. In other words, suppose that $X$ is independent of $(C_0, C_1)$. Show that in that case, we have $\alpha = \theta$.
:::

    x-quill

[Continue](btn:next)

---
> id: step-coin-flip-theorem

We have

``` latex
\theta &= \mathbb{E}\left(C_{1}\right)-\mathbb{E}\left(C_{0}\right) \\
&= \mathbb{E}\left(C_{1} | X=1\right)-\mathbb{E}\left(C_{0} | X=0\right) & & \text { since } X \text{ is ind. of } \left(C_{0}, C_{1}\right) \\
&= \mathbb{E}(Y | X=1)-\mathbb{E}(Y | X=0) & & \text { since } Y=C_{X} \\
&= \alpha
```

[Continue](btn:next)

---
> id: step-confounding

A study in which the treatment value $X$ is not randomly assigned is called an **observational** study. Observational studies are subject to **confounding** from variables $Z$ such as the weather in the scenario described in Problem 2. In that situation, $Z$ was associated with both $X$ and $(C_0, C_1)$, and their non-independence led to a difference between $\alpha$ and $\theta$ to be different.

However, if $X$ and $(C_0, C_1)$ are independent *conditioned on $Z$*, and if we record the value of $Z$ as well as $X$ and $Y$ in our study, then we can obtain an unbiased estimate of the causal effect by from an unbiased estimator of the association by performing that estimate *within each $Z$ group* and averaging. This is called the **adjusted treatment effect**.

::: .exercise
**Exercise**  
Suppose that the probability measure on $(X,Y,Z,C_0,C_1)$ is uniform on the rows of the following table ($Z = 0$ means good weather and $Z = 1$ means bad weather).

``` latex
\begin{array}{ccccc}
{X} & {Y} & {Z} & {C_{\text{0}}} & {C_{\text{1}}} \\ \hline
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 & 1 \\
1 & 0 & 0 & 0 & 0 \\
1 & 1 & 0 & 0 & 1 \\ \hline
0 & 0 & 1 & 0 & 1 \\
0 & 1 & 1 & 1 & 1 \\
1 & 1 & 1 & 0 & 1 \\
1 & 1 & 1 & 0 & 1 \\
1 & 1 & 1 & 1 & 1 \\
1 & 1 & 1 & 1 & 1
\end{array}
```

(a) Compute the association $\alpha$.

(b) Compute the average causal effect $\theta$.

(c) Show that $X$ and $(C_0, C_1)$ are conditionally independent given $Z$, and compute the adjusted treatment effect.
:::

    x-quill

[Continue](btn:next)

---
> id: step-12-element-causal-problem

(a) The association is equal to $5/6 - 1/6 = 2/3$.

(b) The average causal effect is equal to $9/12 - 3/12 = 1/2$.

(c) The conditional distribution of $(C\_0, C\_1)$ given $X = 0$ and $Z = 0$ places half its probability mass at $(0,0)$ and half at $(0,1)$. The conditional distribution of $(C\_0, C\_1)$ given $X = 1$ and $Z = 0$ likewise places half its probability mass at $(0,0)$ and half at $(0,1)$. So $X$ and $(C\_0, C\_1)$ are conditionally independent given $Z = 0$. A similar calculation shows that $X$ and $(C\_0, C\_1)$ are conditionally independent given $Z = 1$. So $X$ and $(C\_0, C\_1)$ are conditionally independent given $Z$.

The adjusted treatment effect is the average of $1/2 - 0 = 1/2$ (coming from $Z= 0$) and $1 - 1/2 = 1/2$ (coming from $Z = 1$). So it is indeed equal to the average causal effect $\theta = 1/2$.

[Continue](btn:next)

---
> id: step-counterfactual-model-for-continuous-random-variables
### Continuous random variables

Although we've focused on binary random variables, essentially the same analysis carries over to continuous random variables. If $X$ is real-valued, then the counterfactual vector $(C_0, C_1)$ becomes a counterfactual **process** $\\{C(x) : x \in \mathbb{R}\\}$ which specifies the outcome $Y$ that results from each possible value $x$ of $X$. As in the binary case, only one of the values of the random function $C$ is ever seen for a given observation.

::: .example
**Example**  
Suppose that $Z$ is a $\text{Uniform}(0,10)$ random variable and $U$ and $V$ are $\operatorname{Uniform}(0,1)$ and $\operatorname{Uniform}(-5,5)$ random variables (respectively), which are independent. Suppose that $X = Z$ and that

``` latex
C = \left\{ \begin{array}{cl} x \mapsto x + \sin (Ux) & \text{if }Z + V > 5 \\ x \mapsto 5 + U & \text{if }Z + V < 5 \\ \end{array} \right.
```

Plot several instances of $C$, over $[0,10]$.
:::

*Solution.*

    pre(julia-executable)
      | plot(xlabel = "x", ylabel = "C(x)")
      | for i in 1:10
      |     Z = rand(Uniform(0, 10))
      |     U = rand(Uniform(0,1))
      |     V = rand(Uniform(-5,5))
      |     plot!(0:0.01:10, Z + V < 5 ? x -> 5 + U : x->x+sin(U*x))
      | end
      | current()

[Continue](btn:next)

---
> id: step-causal-continuous-scatter      

::: .example
**Example**  
Draw 1000 observations from the joint distribution on $X\sim\operatorname{Unif}(0,10)$ and $Y = C(X)$, and make a scatter plot.
:::

*Solution.*

    pre(julia-executable)
      | points = Tuple{Float64, Float64}[]
      | for i in 1:1000
      |     U = rand(Uniform(0,1))
      |     V = rand(Uniform(-5, 5))
      |     X = rand(Uniform(0,10))
      |     Y = if X + V < 5
      |         5 + U
      |     else
      |         X + sin(U*X)
      |     end
      |     push!(points, (X,Y))
      | end
      | scatter(points, ms = 1.5, msw = 0.5, color = :LightSeaGreen, markeropacity = 0.5)

::: .example
**Example**  
The **causal regression function** is $\theta(x) = \mathbb{E}[C(x)]$. Find the causal regression function in the example above.
:::

    pre(julia-executable)
      | using SymPy
      | @vars x u
      | f = 1//2 * integrate(x + sin(u*x), (u, 0, 1)) + 1//2 * integrate(5 + u, (u, 0, 1))
      | plot!(0.01:0.01:10, x->f(x), lw = 2, color = :purple)

[Continue](btn:next)

---
> id: step-causal-regression-function-graph

::: .exercise
**Exercise**  
How does the causal regression function compare to the regression function? Feel free to eyeball the regression function from the graph.
:::

    x-quill

---
> id: step-causal-regression-solution

*Solution.* The causal regression function weights the $Z + V < 5$ and $Z + V > 5$ parts of the probability space equally all along the range from $[0,10]$, rather than giving more weight to the former condition when $X$ is close to 0 and more to the latter when $X$ is close to 10.

You can imagine the distinction between the regression function and causal regression function by visualizing a person sitting a particular value of $x$ and watching a sequence of observations of $(X,C)$. For the causal regression function, they record every value of $C(x)$ they observe. For the ordinary regression function, they wait until they see a value of $X$ which is very close to $x$, and only then do they record the $(X,Y)$ pair for that observation.

When $x$ is close to the extremes in this example, the additional conditioning on $X$ performed in the ordinary regerssion obscures the causal relationship between $X$ and $Y$.

[Continue](btn:next)

---
> id: step-adjusted-treatment-effect

The formula for the adjusted treatment effect in the continuous case becomes

``` latex
\theta(x) = \int \mathbb{E}(Y | X=x, Z=z) f_Z(z) dz,
```

where $f\_Z$ is the density of $Z$ (note that this is the same idea as in the discrete case: we're averaging the $z$-specific estimates $\mathbb{E}(Y | X=x, Z=z)$, weighted by how frequently those $z$-values occur).

And as in the discrete case, the adjusted treatment effect is equal to the causal regression function $\theta(x)$ if $X$ and $\\{C(x) : x \in \mathbb{R}\\}$ are conditionally independent given $Z$. This implies that, again assuming conditional independence of $X$ and $C$ given $Z$, if $\widehat{r}(x,z)$ is a consistent estimator of $\mathbb{E}[Y | X = x, Z = z]$, then $\frac{1}{n}\sum\_{i=1}^n\widehat{r}(x, Z\_i)$ is a consistent estimator of $\theta(x)$.

[Continue](btn:next)

---
> id: step-causal-linear-case

If the regression function given $X$ and $Z$ is linear (that is, $r(x, z)=\mathbb{E}[Y | X = x, Z = z] = \beta\_{0}+\beta\_{1} x+\beta\_{2} z$), then we can control for $Z$ merely by including $Z$ as a feature in the ordinary least squares regression. In other words, if $X$ is independent of $C$ given $Z$, then $\widehat{\theta}(x)=\widehat{\beta}\_{0}+\widehat{\beta}\_{1} x+\widehat{\beta}\_{2} \overline{Z}$ is a consistent estimator of $\theta(x)$, where $\widehat{\beta}\_{0}, \widehat{\beta}\_{1}, \widehat{\beta}\_{2}$ are the OLS coefficients.

::: .exercise
**Exercise**  
Suppose that $U\_X, U\_Z,$ and $U\_Y$ are independent $\operatorname{Uniform}(1)$ random variables, and that

``` latex
X &= U_X \\
Z &= 0.9X + 0.1U_Z \\
C(x) &= x - 2Z + 0.01U_{Y}.
```

(a) Calculate $r(x,z) = \mathbb{E}[Y | X = x, Z = z]$

(b) Calculate $\theta(x) = \mathbb{E}[C(x)]$.

(c) Suppose that $\widehat{r}$ is the OLS estimator of $Y$ with features $X$ and $Z$. Show that $\frac{1}{n}\sum\_{i=1}^n\widehat{r}(x, Z\_i)$ is a consistent estimator of $\theta(x)$.

(d) Show that if $\widehat{r}$ is the OLS estimator of $Y$ with $X$ as the lone regressor that $\widehat{r}(x)$ does *not* converge to $\theta(x)$ as the sample size tends to infinity.
:::

    x-quill

---
> id: step-causal-linear-solution

*Solution.*
(a) We have $r(x,z) = x - 2z + 0.01\mathbb{E}[U_Y] = x - 2z + 0.005$

(b) We have $\mathbb{E}[C(x)] = x -2 \mathbb{E}[Z] + 0.01 \mathbb{E}[U_Y] = x - 1 + 0.005 = x - 0.995$.

(c) We have $\frac{1}{n}\sum_{i=1}^n\widehat{r}(x, Z\_i) = \widehat{\beta}\_{0}+\widehat{\beta}\_{1} x+\widehat{\beta}\_{2} \overline{Z}$. By consistency of the OLS estimator, we have $\widehat{\beta}_0 \to 0.005$ and $\widehat{\beta}_2 \to -2$ as the sample size tends to $\infty$, as well as $\widehat{\beta}_1 \to 1$. By the law of large numbers, we have $\overline{Z} \to 0.5$. Therefore, $\frac{1}{n}\sum_{i=1}^n\widehat{r}(x, Z_i)$ converges to $x - 2(0.5) + 0.005 = x - 0.995$ as the sample size goes to $\infty$.

(d) We have $\widehat{r}(x) =  \widehat{\beta}_0 + \widehat{\beta}_1x$ where $\widehat{\beta}_0 \to -0.1 + 0.005 = -0.095$ and $\widehat{\beta}_1 \to -0.8$ as the sample size goes to $\infty$, since $Y = X - 2(0.9X + 0.1U_Z) + 0.01U_Y = -0.8X - 0.2U_Z + 0.01U_Y$.

[Continue](btn:next)

---
> id: step-causal-conclusion
### Conclusion

We conclude by noting that the conditional independence of $X$ and $C$ given a proposed confounding variable $Z$ isn't directly supportable by statistical evidence, since we won't have observations of the joint distribution of $X$ and $C$ (since so many of $C$'s values are unobserved). The argument must be made that the list of variables controlled for is reasonably exhaustive, and we would typically hope to see the same argument supported by a variety of studies before believing it with very high confidence.

---
> id: step-congratulations-statistics

**Congraulations!** You've finished the Data Gymnasia Statistics Course.
