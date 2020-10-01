
# Statistics

> id: intro
## Introduction

to do

Idea: add games here, where you get samples from a distribution and have to guess various statistical functional values. The answers get revealed and you see how close you were. The goal is to convey the core idea of inference before any formalism is introduced.

{.text-center} `a =`${a}{a|1|-5,5,0.1} 

{.text-center} `b = `${b}{b|0|-5,5,0.1}

    figure
      svg(width=220 height=140)
        each i in [10,30,50,70,90,110,130,150,170,190,210]
          line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
        each i in [10,30,50,70,90,110,130]
          line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
        line(x1=0 x2=120 y1=0 y2=120 stroke="#000000" stroke-width=2)
        polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
        polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")


--- 

> id: histogram-estimation
## Histogram estimation

to do

---

> id: point-estimation
## Point estimation

In Section <a name=subsubsec:KDE></a>, we discussed the problem of estimating a distribution given a list of independent samples it. Now we turn to the simpler task of **point estimation**: estimating a single real-valued feature (such as the mean, variance, or maximum) of a distribution. We begin by formalizing the notion of a real-valued feature of a distribution. 

::: .definition
**Definition** (Statistical functional)  
A **statistical functional** is any function $T$ from the set of distributions to $[-\infty,\infty]$. 
:::

 
For example, if we define $T\_1(\nu)$ to be the mean of $\nu$, then $T\_1$ is a statistical functional. Similarly, consider the *maximum* functional $T\_2(\nu) = F^{-1}(1)$ where $F$ is the CDF of $\nu$. To give a more complicated example, we define $T\_3(\nu)$ to be the expected value of the difference between the greatest and least of 10 independent random variables with common distribution $\nu$. Then $T\_3$ also a statistical functional 

Given a statistical functional, our goal will be to use a list of independent samples from $\nu$ to estimate $T(\nu)$. 

::: .definition
**Definition** (Estimator)  
An **estimator** $\widehat{\theta}$ is a random variable which is a function of $n$ i.i.d.\ random variables. 
:::

 

::: .example
**Example**  
Draw 500 independent samples from an exponential distribution with parameter 1. Plot the function $\widehat{F}$ which maps $x$ to the proportion of samples at or to the left of $x$ on the number line. Compare this graph to the graph of the CDF of the exponential distribution with parameter 1. 
:::

 

*Solution.*  We use the step geom to graph $\widehat{F}$: 

``` python
n <- 500
xvals = seq(0,8,length=100)

ggplot() +
  geom_line(aes(x=xvals,y=1-exp(-xvals))) + 
  geom_step(aes(x=sort(rexp(n)),y=(1:n)/n))
```

    figure: img(src="figures/figures/rexp" width=240)

{.caption} 

 

 Example <a name=exam:empirical-example></a> suggests an idea for estimating $\widehat{\theta}$: since the unknown distribution $\nu$ is typically close to the measure $\widehat{\nu}$ which places mass $\frac{1}{n}$ at each of the observed samples. Then we can build an estimator of $T(\nu)$ by plugging $\widehat{\nu}$ into $T$. 

::: .definition
**Definition** (Plug-in estimator)  
The plug-in estimator of $\theta = T(\nu)$ is $\widehat{\theta} = T(\widehat{\nu})$. 
:::

 

::: .example
**Example**  
Find the plug-in estimator of the mean of a distribution. Find the plug-in estimator of the variance. 
:::

 

*Solution.* The plug-in estimator of the mean is the mean of the empirical distribution, which is the average of the locations of the samples. We call this the **sample mean**: 

``` latex
\overline{X} = \frac{X_1 + \cdots + X_n}{n}. 
```

 Likewise, the plug-in estimator of the variance is **sample variance** 

``` latex
S^2 = \frac{1}{n}\left( (X_1 - \overline{X})^2 + (X_2 -
  \overline{X})^2 + \cdots +  (X_n - \overline{X})^2\right). 
```

 Ideally, an estimator $\widehat{\theta}$ is close to $\theta$ with high probability. We will see that we can decompose the question of whether $\widehat{\theta}$ is close to $\theta$ into two sub-questions: is the *mean* of $\widehat{\theta}$ close to $\theta$, and is $\widehat{\theta}$ close to its mean with high probability? 

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

of the maximum functional. Assuming that the distribution has a density function, show that $\widehat{\theta}$ is biased. 
::: 

*Solution.* If $\nu$ is a continuous distribution, then the probability of the event $\\{X\_i &lt; T(\nu)\\}$ is $1$ for all $i=1,2,\ldots,n$. This implies that $\widehat{\theta} &lt; T(\nu)$ with probability 1. Taking expectation of both sides, we find that $\mathbb{E}[\widehat{\theta}] &lt;
  T(\nu)$. Therefore, this estimator has negative bias. 

 

 Zero or small bias is a desirable property of an estimator: it means that the estimator is accurate *on average*. The second desirable property of an estimator is for the probability mass of its distribution to be concentrated near its mean: 

::: .definition
**Definition** (Standard error)  
The standard error $\operatorname{se}(\widehat{\theta})$ of an estimator $\widehat{\theta}$ is its standard deviation. 
:::

 

::: .example
**Example**  
Find the standard error of the sample mean if the distribution $\nu$ with variance $\sigma^2$. 
:::

 

*Solution.* We have 

``` latex
Var\left(\frac{X_1 + X_2 + \cdots + X_n}{n}\right) =
\frac{1}{n^2}(nVar X_1) = \frac{\sigma^2}{n}. 
```

 Therefore, the standard error is $\sigma/\sqrt{n}$. 

 

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

 The middle term is zero by linearity of expectation. 

 

 If the bias and standard error of an estimator both converge to 0, then the estimator is *consistent*: 

::: .definition
**Definition** (Consistent)  
An estimator is **consistent** if $\widehat{\theta}$ converges to $\theta$ in probability as $n\to\infty$. 
:::

 

::: .example
**Example**  
Show that the plug-in maximum estimator $\widehat{\theta}\_n = \max(X\_1, \ldots, X\_n)$ of $\theta = T(\nu) = F^{-1}(1)$ is consistent, assuming that the distribution belongs to the parametric family $\\{\operatorname{Unif}([0,b]) \,: \, b \in \mathbb{R}\\}$. 
:::

 

*Solution.* The probability that $\widehat{\theta}\_n$ is more than $\epsilon$ units from $\theta$ is equal to the probability that every sample is less than $\theta - \epsilon$, which by independence is equal to 

``` latex
\left(\frac{\theta - \epsilon}{\theta}\right)^n. 
```

 This converges to 0 as $n \to \infty$, since $\frac{\theta -
    \epsilon}{\theta} &lt; 1$. 

    figure: img(src="figures/figures/biasvariance" width=240)

{.caption} An estimator of $\theta$ has high or low bias depending on whether its mean is far from or close to $\theta$. It has high or low variance depending on whether its mass is spread out or concentrated. 

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

Squaring out each trinomial, we get $\frac{4}{9}X\_1^2$ from the first term and $\frac{1}{9}X\_1^2$ from each of the other two. So altogether the $X\_1^2$ term is $\frac{6}{9}X\_1^2$. By symmetry, the same is true of $X\_2^2$ and $X\_3^2$. For cross-terms, we get $-\frac{4}{9}X\_1X\_2$ from the first squared expression, $-\frac{4}{9}X\_1X\_2$ from the second, and $\frac{2}{9}X\_1X\_2$ from the third. Altogether, we get $-\frac{6}{9}X\_1X\_2$. By symmetry, the remaining two terms are $-\frac{6}{9}X\_1X\_3 -\frac{6}{9}X\_2X\_3$ <. 

Recalling that $Var(X) = \mathbb{E}[X^2] - \mathbb{E}[X]^2$ for any random variable $X$, we have $\mathbb{E}[X\_1^2] = \mu^2 + \sigma^2$, where $\mu$ and $\sigma$ are the mean and standard deviation of the distribution of $X\_1$(and similarly for $X\_2$ and $X\_3$. So we have 

``` latex
\mathbb{E}[S^2] &= \frac{1}{3}\left(\frac{6}{9}(X_1^2 + X_2^2 +
          X_3^2) - \frac{6}{9}(X_1X_2 +X_1X_3 + X_2X_3)\right)
&= \frac{1}{3}\cdot\frac{6}{9}(3(\sigma^2 + \mu^2) - 3\mu^2) =
  \frac{2}{3}\sigma^2.                                           
```

 If we repeat the above calculation with $n$ in place of 3, we find that the resulting expectation is $\frac{n-1}{n}\sigma^2$. 

 

 Motivated by Example <a name=exam:sample-variance></a>, we define the **unbiased sample variance** 

``` latex
\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\overline{X})^2.
```

 It is often of limited use to know the value of an estimator given an observed collection of samples, since the single value does not indicate how close we should expect $\theta$ to be to $\widehat{\theta}$. For example, if a poll estimates that a randomly selected voter has 46% probability of being a supporter of candidate A and a 42% probability of being a supporter of candidate B, then knowing more information about the distributions of the estimators is essential if we want to know the probability of winning for each candidate. Thus we introduce the idea of a *confidence interval*. 

::: .definition
**Definition** (Confidence interval)  
Consider an unknown probability distribution $\nu$ from which we get $n$ independent samples $X\_1, \ldots, X\_n$, and suppose that $\theta$ is the value of some statistical functional of $\nu$. A **confidence interval** for $\theta$ is an interval-valued function of the sample data $X\_1, \ldots, X\_n$. A confidence interval has **confidence level** $1-\alpha$ if it contains $\theta$ with probability at least $1-\alpha$. 
:::

 

::: .exercise
**Exercise**  
Use Chebyshev's inequality to show that if $\widehat{\theta}$ is unbiased, then $(\widehat{\theta} - k
  \operatorname{se}(\widehat{\theta}), 
  \widehat{\theta} + k \operatorname{se}(\widehat{\theta}))$ is a $1 -
  \frac{1}{k^2}$ confidence interval. 
:::

 

 If $\widehat{\theta}$ is approximately normally distributed, then we can give tighter confidence intervals using the normal approximation: 

::: .exercise
**Exercise**  
Show that if $\widehat{\theta}$ is approximately normally distributed, then $(\widehat{\theta} - k \operatorname{se}(\widehat{\theta}),
  \widehat{\theta} + k \operatorname{se}(\widehat{\theta}))$ is a $1 - 2(1 - \mathbb{P}hi(k))$ confidence interval, where $\mathbb{P}hi$ is the CDF of the standard normal distribution. 
:::

 

 If we are estimating a *function*-valued feature of $\nu$ rather than a single number (for example, a regression function), then we might want to provide a confidence *band* which traps the whole graph of the function with specified probability (see Theorem <a name=th:DKW></a> for an example). 

::: .definition
**Definition** (Confidence band)  
Let $I \subset \mathbb{R}$, and suppose that $T$ is a function from the set of distributions to the set of real-valued functions on $I$. A $1-\alpha$**confidence band** for $T(\nu)$ is pair of random functions $y\_{\textrm{min}}$ and $y\_{\textrm{max}}$ from $I$ to $\mathbb{R}$ defined in terms of $n$ independent samples from $\nu$ and having $y\_{\textrm{min}} \leq T(\nu) \leq y\_{\textrm{max}}$ everywhere on $I$ with probability at least $1-\alpha$. 
:::

---

> id: maximum-likelihood-estimation
## Maximum likelihood estimation

So far we've only had one idea for building an estimator, which is to plug $\widehat{\nu}$ into the statistical functional. In this section, we'll learn another approach which is quite general and has some compelling properties. 

 Consider a parametric family $\\{f\_{bdtheta}(x)\,:\, bdtheta \in \mathbb{R}^d\\}$ of PDFs or PMFs. Given $\mathbf{x} \in \mathbb{R}^n$, the **likelihood** $\mathcal{L}\_{\mathbf{x}}: \mathbb{R}^d \to \mathbb{R}$ is defined by 

``` latex
\mathcal{L}_{\mathbf{x}}(bdtheta) = f_{bdtheta}(x_{1})f_{bdtheta}(x_{2})\cdots
f_{bdtheta}(x_{n}).
```

 The idea is that if $\mathbf{X}$ is a vector of $n$ independent samples drawn from $f\_{bdtheta}(x)$, then $\mathcal{L}\_{\mathbf{X}}(bdtheta)$ is small or zero when $bdtheta$ is not in concert with the observed data. 

::: .example
**Example**  
Suppose $x\mapsto f(x;\theta)$ is the density of a uniform random variable on $[0,\theta]$. We observe four samples drawn from this distribution: $1.41, 2.45, 6.12$, and $4.9$. Find $\mathcal{L}(5)$, $\mathcal{L}(10^6)$, and $\mathcal{L}(7)$. 
:::

 

*Solution.* The likelihood at 5 is zero, since $f\_{5}(x\_{3})
  = 0$. The likelihood at $10^6$ is very small, since $\mathcal{L}(10^6) = (1/10^6)^4 = 10^{-24}$. The likelihood at 7 is larger: $(1/7)^4 = 1/2401$. 

 

 We can see from Example <a name=exam:mle-extremes></a> that likelihood has the property that it is zero or small at implausible values of $bdtheta$, and larger at more reasonable values. Thus we propose the **maximum likelihood estimator** 

``` latex
\widehat{bdtheta}_{\mathrm{MLE}} = argmax_{bdtheta \in
  \mathbb{R}^d}\mathcal{L}_{\mathbf{X}}(bdtheta).
```

::: .example
**Example**  
Suppose that $x\mapsto f(x;\mu,\sigma^2)$ is the normal density with mean $\mu$ and variance $\sigma^2$. Find the maximum likelihood estimator for $\mu$ and $\sigma^2$. 
:::

 

*Solution.* The maximum likelihood estimator is the minimizer of the logarithm of the likelihood function, which is 

``` latex
-\frac{n}{2}\log 2\pi - n \log \sigma - \frac{n}{2}\log 2\pi - n
\log \sigma - \frac{(X_1-\mu)^2}{2\sigma^2} - \cdots - \frac{(X_n
  - \mu)^2}{2\sigma^2}
```

Setting the derivatives with respect to $\mu$ and $\sigma^2$ equal to zero, we find $\mu = \overline{X} = \frac{1}{n}(X\_1+\cdots+X\_n)$ and $\sigma^2 = \frac{1}{n}((X\_1-\overline{X})^2 + \cdots +
  (X\_n-\overline{X})^2)$. So the maximum likelihood estimator agrees with the plug-in estimator for $\mu$ and $\sigma^2$. 

 MLE enjoys several nice properties: under certain regularity conditions, we have 
* **Consistency**: $\mathbb{E}[(\widehat{\theta}\_{\mathrm{MLE}} - \theta)^2] \to 0$ as the number of samples goes to $\infty$. 
* **Asymptotic normality**: $(\widehat{\theta}\_{\mathrm{MLE}} - \theta)/\sqrt{Var \widehat{\theta}\_{\mathrm{MLE}}}$ converges to $\mathcal{N}(0,1)$ as the number of samples goes to $\infty$. 
* **Asymptotic optimality**: the MSE of the MLE converges to 0 approximately as fast as the MSE of any other consistent estimator. 

 

 Potential difficulties with MLE: 
* **Computational difficulties**. It might be difficult to work out where the maximum of the likelihood occurs, either analytically or numerically. 
* **Misspecification**. The MLE may be inaccurate if the distribution of the samples is not in the specified parametric family. 
* **Unbounded likelihood**. If the likelihood function is not bounded, then $\widehat{\theta}\_{\mathrm{MLE}}$ is not well-defined. 

---

> id: hypothesis-testing
## Hypothesis Testing

**Hypothesis testing** is a disciplined framework for adjudicating whether observed data do not support a given hypothesis. 

 Consider an unknown distribution from which we will observe $n$ samples $X\_1, \ldots X\_n$. 
* We state a hypothesis $H\_0$---called the **null hypothesis**---about the distribution. 
* We come up with a **test statistic** $T$, which is a function of the data $X\_1, \ldots X\_n$, for which we can evaluate the distribution of $T$ assuming the null hypothesis. 
* We give an **alternative hypothesis** $H\_{\mathrm{a}}$ under which $T$ is expected to be significantly different from its value under $H\_0$. 
* We give a significance level $\alpha$(like 5% or 1%), and based on $H\_{\mathrm{a}}$ we determine a set of values for $T$---called the *critical region*---which $T$ would be in with probability at most $\alpha$ under the null hypothesis. 
* **After setting $\boldsymbol{H_0}$, $\boldsymbol{H_{\mathrm{a}}}$, $bdalpha$, $\boldsymbol{T}$, and the critical region**, we run the experiment, evaluate $T$ on the samples we get, and record the result as $t\_{\mathrm{obs}}$. 
* If $t\_{\mathrm{obs}}$ falls in the critical region, we reject the null hypothesis. The corresponding **\textit{p}-value** is defined to be the minimum $\alpha$-value which would have resulted in rejecting the null hypothesis, with the critical region chosen in the same way*. 

::: .example
**Example**  
Muriel Bristol claims that she can tell by taste whether the tea or the milk was poured into the cup first. She is given eight cups of tea, four poured milk-first and four poured tea-first. 

 We posit a null hypothesis that she isn't able to discern the pouring method, and an alternative hypothesis that she can tell the difference. How many cups does she have to identify correctly to reject the null hypothesis with 95% confidence? 
:::

 

*Solution.* Under the null hypothesis, the number of cups identified correctly is 4 with probability $1/\binom{8}{4} \approx 1.4\%$ and at least 3 with probability $17/70 \approx 24\%$. Therefore, at the 5% significance level, only a correct identification of all the cups would give us grounds to reject the null hypothesis. The $p$-value in that case would be 1.4%. 

 Failure to reject the null hypothesis is not necessarily evidence *for* the null hypothesis. The **power** of a hypothesis test is the conditional probability of rejecting the null hypothesis given that the alternative hypothesis is true. A $p$-value may be low either because the null hypothesis is true or because the test has low power. 

::: .definition
**Definition**  
The **Wald test** is based on the normal approximation. Consider a null hypothesis $\theta = 0$ and the alternative hypothesis $\theta \neq 0$, and suppose that $\widehat{\theta}$ is approximately normally distributed. The Wald test rejects the null hypothesis at the 5% significance level if $|\widehat{\theta}| &gt; 1.96 \operatorname{se}(\widehat{\theta})$. 
:::

::: .example
**Example**  
Consider the alternative hypothesis that 8-cylinder engines have lower fuel economy than 6-cylinder engines (with null hypothesis that they are the same). Apply the Wald test, using the _{code.language-python}mtcars_ dataset available in R. 
:::

 

*Solution.* We frame the problem as a question about whether the *difference in means* between the distribution of 8-cylinder \rinline{mpg} values and the distribution of 6-cylinder \rinline{mpg} values is zero. We use the difference between the sample means $\overline{X}$ and $\overline{Y}$ of the two populations as an estimator of the difference in means. If we think of the records in the data frame as independent, then $\overline{X}$ and $\overline{Y}$ are independent. Since each is approximately normally distributed by the central limit theorem, their difference is therefore also approximately normal. So, let's calculate the sample mean and sample variance for the 8-cylinder cars and for the 6-cylinder cars. 

``` python
library(tidyverse)

stats <- mtcars %>% 
  group_by(cyl) %>% 
  filter(cyl %in% c(6,8)) %>% 
  summarise(m = mean(mpg), S2 = var(mpg), n = n(), se = sqrt(S2/n))
```

 Given that the distribution of 8-cylinder _{code.language-python}mpg_ values has variance $\sigma\_{\mathrm{eight}}^2$, the variance of the sample mean $\overline{X}$ is $\sigma\_{\mathrm{eight}}^2/n\_{\mathrm{eight}}$, where $n\_{\mathrm{eight}}$ is the number of 8-cylinder vehicles (and similarly for $\overline{Y}$). Therefore, we estimate the variance of the difference in sample means as 

``` latex
Var(\overline{X} - \overline{Y}) = Var(\overline{X}) +
Var(\overline{Y}) =
\sigma_{\mathrm{eight}}^2/n_{\mathrm{eight}} +
\sigma_{\mathrm{six}}^2/n_{\mathrm{six}}. 
```

 Under the null hypothesis, therefore, $\overline{X} - \overline{Y}$ has mean zero and standard error $\sqrt{\sigma\_{\mathrm{eight}}^2/n\_{\mathrm{eight}} +
     \sigma\_{\mathrm{six}}^2/n\_{\mathrm{six}}}$. We therefore reject the null hypothesis with 95% confidence if the value of $\overline{X} - \overline{Y}$ divided by its estimated standard error exceeds 1.96. We find that 

``` python
z <- (stats$m[1] - stats$m[2]) / sqrt(sum(stats$se^2))
```

 returns $5.29$, so we do reject the null hypothesis at the 95% confidence level. The $p$-value of this test is _{code.language-python}1 - pnorm(z)_ $ = 6.08 \times 10^{-6}$. 

 

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
Suppose the heights of the Romero sons are 72, 69, 68, and 66 inches, and the heights of the Larsen sons are 70, 65, and 64 inches. Consider the null hypothesis that the height distributions for the two families are the same, with the alternative hypothesis that they are not. Determine whether a random permutation test applied to the absolute sample mean difference rejects the null hypothesis at significance level $\alpha = 5\%$. 
:::

 

*Solution.* We find that the absolute sample mean difference of about 2.4 inches is larger than only about 68% of the mean differences obtained by resampling many times. 

``` python
set.seed(123)
romero <- c(72, 69, 68, 66)
larsen <- c(70, 65, 64)
actual.diff <- abs(mean(romero) - mean(larsen))

resample.diff <- function(n) {
  shuffled <- sample(c(romero,larsen))
  abs(mean(shuffled[1:4]) - mean(shuffled[5:7]))
}

sum(sapply(1:10000,resample.diff) < actual.diff)
```

 Since 68% < 95%, we retain the null hypothesis. 

 

 If we conduct many hypothesis tests, then the probability of obtaining some false rejections is high This is called the **multiple testing problem**. 

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

