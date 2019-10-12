
# Machine Learning

> id: intro
## Introduction

At the highest level, the goal of [**statistical learning**](gloss:statistical-learning) is to draw conclusions about an unknown probability measure given independent observations drawn from the measure. These observations are called **training data**. In **supervised learning**, the unknown measure $\mathbb{P}$ is on a product space $\mathcal{X} \times \mathcal{Y}$. In other words, each training observation has the form $(\mathbf{X}, Y)$ where $\mathbf{X}$ is an element of $\mathcal{X}$ and $\mathbf{Y}$ is an element of $\mathcal{Y}$. 

We aim to use the training data to predict $Y$ given $\mathbf{X}$, where $(\mathbf{X},Y)$ denotes a random variable in $\mathcal{X} \times \mathcal{Y}$ with distribution $\mathbb{P}$. 

::: .example
**Example**  
Suppose that $\mathbf{X} = [X_1, X_2]$, where $X_1$ is the color of a banana, $X_2$ is the weight of the banana, and $Y$ is a measure of banana deliciousness. Values of $X_1, X_2,$ and $Y$ are recorded for many bananas, and they are used to predict $Y$ for other bananas whose $\mathbf{X}$ values are known. 

Do you expect the prediction function to be more sensitive to changes in $X_1$ or changes in $X_2$? 
:::

    x-quill

---
> id: step-banana-solution

*Solution*. Presumably $X_1$ has more influence on $Y$, since bananas can taste great whether small or large, while green or dark brown bananas generally taste very bad and yellow bananas mostly taste good. 

[Continue](btn:next)

---
> id: step-definition-feature

::: .definition
**Definition**  
We call the components of $\mathbf{X}$ *features*, *predictors*, or *input variables*, and we call $Y$ the *response variable* or *output variable*. 
:::

[Continue](btn:next)

---
> id: step-regression-classification

We categorize supervised learning problems based on the structure of $\mathcal{Y}$. 

 
::: .definition
**Definition**  
A supervised learning problem is a **regression** problem if $Y$ is quantitative ($\mathcal{Y}\subset \mathbb{R}$) and a **classification** problem if $\mathcal{Y}$ is a set of labels. 
:::

We can treat the banana problem above as either a regression problem (if deliciousness is a score on a spectrum) or a classification problem (if the bananas are [dichotomized](gloss:dichotomize) as "good" or "bad"). We will see that many models are specific to regression or classification, while others can be adapted to handle either type of problem. 

[Continue](btn:next)

---
> id: step-definition-loss-function

To make meaningful and unambiguous statements about a proposed prediction function $h: \mathcal{X} \to \mathcal{Y}$, we need a rubric by which to assess it. This is customarily done by defining a *loss* (or *risk*, or *error*) $L(h)$, with the idea that smaller loss is better. We might wish to define $L$ only for $h$'s in a specified class $\mathcal{H}$ of candidate functions. [Since](gloss:functional) $L : \mathcal{H} \to \mathbb{R}$ is defined on a set of functions, we call $L$ the **loss functional**. 

[Continue](btn:next)

---
> id: step-definition-target-function

Once a set $\mathcal{H}$ of candidate functions and a loss functional $L$ are specified, a prediction function $h \in H$ must be proposed. This can often be done the lazy way, by defining our prediction function implicitly as the function in $\mathcal{H}$ which minimizes $L$: 

::: .definition
**Definition**  
Given a statistical learning problem, a space $\mathcal{H}$ of candidate prediction functions, and a loss functional $L: \mathcal{H} \to \mathbb{R}$, we define the **target function** to be $\operatorname{argmin}_{h \in \mathcal{H}}L(h)$. 
:::

(Note: *argmin* means *the value which minimizes*. So for example, $\operatorname{argmin}\_{x \in \mathbb{R}} (x-14)^2$ is equal to 14.)

[Continue](btn:next)

---
> id: step-common-functionals

Let's look at some common loss functionals. For regression, we often use the **mean squared error**: 

``` latex
L(h) = \mathbb{E}[(h(X)-Y)^2]
```

If $\mathcal{H}$ contains the **regression function** $r(\mathbf{x}) = \mathbb{E}[Y | \mathbf{X} = \mathbf{x}]$, then $r$ is the target function. This is because the mean of a random variable $Y$ is the constant $c$ which minimizes the expression $\mathbb{E}[(Y - c)^2]$. 

[Continue](btn:next)

---
> id: step-classification-loss

For classification, we consider the **misclassification probability** 

``` latex
L(h) = \mathbb{E}\left[\boldsymbol{1}_{\{h(\mathbf{X}) \neq Y\}}\right] = \mathbb{P}(h(\mathbf{X}) \neq Y).  
```

If $\mathcal{H}$ contains $G(\mathbf{x}) = \operatorname{argmax}_c\mathbb{P}(Y=c | \mathbf{X} = \mathbf{x})$, then $G$ is the target function for this loss functional. 

[Continue](btn:next)

---
> id: step-intro-empirical-risk

Note that neither of these loss functionals can be computed directly unless the probability measure $\mathbb{P}$ on $\mathcal{X} \times \mathcal{Y}$ is known. Since the goal of statistical learning is to make inferences about $\mathbb{P}$ when it is *not* known, we must approximate $L$ (and likewise also the target function $h$) using the training data. 

The most straightforward way to do this is to replace $\mathbb{P}$ with the **empirical probability measure** associated with the training data $\\{(\mathbf{X}\_i, Y\_i)\\}\_{i=1}^n$. This is the probability measure which places $\frac{1}{n}$ units of probability mass at $(\mathbf{X}\_i, Y\_i)$, for each $i$ from $1$ to $n$. The **empirical risk** of a candidate function $h \in \mathcal{H}$ is the risk functional evaluated with respect to the empirical measure of the training data. 

[Continue](btn:next)

---
> id: step-learner

A **learner** is a function which takes a set of training data as input and returns a prediction function $\widehat{h}$ as output. A common way to specify a learner is to let $\widehat{h}$ be the **empirical risk minimizer** (ERM), which is the function in $\mathcal{H}$ which minimizes the empirical risk. 

::: .example
**Example**  
Suppose that $\mathcal{X} = [0,1]$ and $\mathcal{Y} = \mathbb{R}$, and that the probability measure on $\mathcal{X} \times \mathcal{Y}$ is the one which corresponds to sampling $X$ uniformly from $[0,1]$ and then sampling $Y$ from $\mathcal{N}(X/2 + 1, 1)$. 

Let $\mathcal{H}$ be the set of monic polynomials of degree six or less. Given training observations $\\{(\mathbf{X}\_i, Y\_i)\\}\_{i=1}^6$, find the risk minimizer and the empirical risk minimizer for the mean squared error. 
:::

[Continue](btn:next)

---
> id: step-overfit-example-solution

*Solution*. The risk minimizer is $\mathbb{E}[Y | X]$, which is given in the problem statement as $X/2 + 1$. The empirical loss function is obtained by replacing the expectation in the loss functional with an expectation with respect to the empirical measure. So the empirical risk minimizer is the function which minimizes 

``` latex
\sum_{i=1}^{n} (Y_i - h(\mathbf{X}_i))^2.
```

Since there is exactly one monic polynomial of degree 6 or less which passes through the points $\\{(\mathbf{X}\_i, Y\_i)\\}\_{i=1}^6$, that function is the empirical risk minimizer. 

    figure
        img(src="images/overfit.svg" width=350)
        p.caption.md The risk minimizer and empirical risk minimizer can be quite different. 

[Continue](btn:next)

---
> id: step-overfitting-explanation

This example illustrates a phenomenon called [[**overfitting**|**underfitting**]]. Although the empirical risk is small for the prediction function $h$ we found, smallness of the empirical risk does not imply smallness of the true risk. The difference between empirical risk and the actual value of the risk functional is called **generalization error** (or *test* error). 

We mitigate overfitting by building [**inductive bias**](gloss:inductive-bias) into the model. Common approaches include 
* using a restrictive class $\mathcal{H}$ of candidate functions, 
* **regularizing**: adding a term to the loss functional which penalizes model complexity, and 
* **cross-validating**: proposing a spectrum of candidate functions and selecting the one which performs best on withheld training observations. 

::: .exercise
**Exercise**  
* Which method of introducing inductive bias does linear regression use? 
* Which method did we use for kernel density estimation in the [statistics course](https://mathigon.org/course/intro-statistics/estimating-joint-densities)? 
:::

    x-quill

---
> id: step-example-overfit-mitigation

*Solution*.  
* Linear regression uses a restrictive class $\mathcal{H}$ of candidate functions. The kind of overfitting that we saw in the polynomial example above is impossible if such curvy functions are excluded from consideration. 
* We used cross-validation. We suggested a family of density estimators $\widehat{f}\_\lambda$ parameterized by bandwidth $\lambda$, and we chose a value of $\lambda$ by withholding a single data point at a time to estimate the integrated squared error. 

[Continue](btn:next)

---
> id: step-bias-complexity-tradeoff

Inductive bias can lead to **underfitting**: relevant relations are missed, so both training and test error are larger than necessary. The tension between underfitting and overfitting is the **bias-complexity** (or *bias-variance*) **tradeoff**. 

This tension is fundamentally unresolvable, in the sense that *all learners are equal on average* (!!). 

::: .theorem
**Theorem** (No free lunch)  
  Suppose $\mathcal{X}$ and $\mathcal{Y}$ are finite sets, and let $f$ denote a probability distribution on $\mathcal{X} \times \mathcal{Y}$. Let $D$ be a collection of $n$ independent observations from $f$, and let $h_1$ and $h_2$ be prediction functions (which associate a prediction $h_j(d,\mathbf{x}) \in \mathcal{Y}$ to each pair $(d,\mathbf{x})$ where $d$ is a set of training observations and $\mathbf{x} \in \mathcal{X}$). Consider the cost random variable $C_j = (h_j(D,X) - Y)^2$ (or $C_j = \boldsymbol{1}_{\\{h_j(D,X) - Y\\}}$) for
  $j \in \{1,2\}$. 
  
  The average over all distributions $f$ of $C\_1$ is equal to the average over all distributions $f$ of $C\_2$. 
:::

[Continue](btn:next)

---
> id: step-no-free-lunch-follow-up

The no-free-lunch theorem implies that machine learning is effective in real life only because the learners used by practitioners possess inductive bias which is well-aligned with data-generating processes encountered in machine learning application domains. A learner which is more effective than another on a particular class of problems must perform *worse* on average on problems which are not in that class. 

 
::: .exercise
**Exercise**  
Cross-validation seems to be free of inductive bias: insisting that an algorithm perform well on withheld observations hardly seems to assume any particular structure to the probability distribution or regression function being estimated. Show that this is not the case.
:::

    x-quill

---
> id: step-no-free-lunch-solution

*Solution*. The no-free-lunch theorem implies that a learner which employs cross-validation performs exactly the same on average as a learner which employs anti-cross-validation (that is, selection based on the *worst* performance on withheld observations). 

Of course, cross-validation works much better than anti-cross-validation in practice. But for any class of problems where it performs better, it is necessarily worse on the complement of that class. So using cross-validation does implicitly assume that the problem at hand is in a class which is amenable to cross-validation. This is OK in practice because the class of problems machine learning researchers encounter in real life do have some structure that make them different from a distribution chosen uniformly at random from the set of all distributions.

---
> id: regression-example
## A regression example: linear models

A very common approach to estimating the regression function for a particular joint distribution is to assume that it takes a particular form. For example, to perform a **linear regression**, we posit that $r(x) = \beta\_0 + \beta\_1 x$ for some constants $\beta\_0$ and $\beta\_1$. To estimate $\boldsymbol{\beta} = [\beta\_0,\beta\_1]$ from the $n$ observations $\\{(x\_i,y\_i)\\}\_{i=1}^n$, we can minimize the empirical mean squared error (also known as the **residual sum of squares**: 

``` latex
  \operatorname{RSS}(\boldsymbol{\beta}) = \sum_{i=1}^n (y_i - \beta_0 - \beta_1 x_i)^2.   
```

    figure
      img(src="images/linreg.svg" width=300)
      p.caption The line of best fit minimizes the sum of the squares of the lengths of the red segments. 

[Continue](btn:next)

---
> id: step-linreg-example

::: .example
**Example**  
Find the value of $\boldsymbol{\beta}$ which minimizes $\operatorname{RSS}(\boldsymbol{\beta})$. 
:::

*Solution*. We can write $\operatorname{RSS}(\boldsymbol{\beta})$ as 

``` latex
|\mathbf{y} - X\boldsymbol{\beta}|^2,
```

where $\mathbf{y} = [y\_1, \ldots, y\_n]$ and 

``` latex
X = \begin{bmatrix}
  1 & x_1 \\
  1 & x_2 \\
  \vdots & \vdots \\
  1 & x_n
\end{bmatrix}.  
```

The function $\boldsymbol{\beta}\mapsto |\mathbf{y} - X\boldsymbol{\beta}|^2$ goes to infinity as $\boldsymbol{\beta} \to \infty$ and is continuous, so it necessarily has at least one global minimum. Differentiating, we get 

``` latex
    \frac{\partial}{\partial \boldsymbol{\beta}}(\mathbf{y} -
    X\boldsymbol{\beta})'(\mathbf{y} - X\boldsymbol{\beta}) =
    -2X'(\mathbf{y} - X\boldsymbol{\beta}).
```
 
we can solve to find that 

``` latex
\boldsymbol{\beta} = (X' X)^{-1}X' \mathbf{y}.
```

is the only critical point. Therefore, it must be the unique global minimizer. 

[Continue](btn:next)

---
> id: step-linear-regression-exam-scores

Let's apply this formula to find the linear regression estimate for the [exam-scores example](https://mathigon.org/course/intro-statistics/estimating-joint-densities) in the statistics course. 

    pre(julia-executable)
      | include("data-gymnasia/exam-studying.jl")
      | y = [Y for (X,Y) in observations]
      | X = [ones(n) [X for (X,Y) in observations]]
      | β = (X'*X) \ X'*y # (computes (X'X)⁻¹X'y)
      | scatter(observations, label = "observations")
      | plot!(xs, [β'*[1,x] for x in xs], label = "empirical risk minimizer")

[Continue](btn:next)

---
> id: step-polynomial-regression

We can also use linear regression techniques to handle *polynomial* regression. If we posit that 

``` latex
  r(x) = \beta_0 + \beta_1 X + \beta_2 X^2, 
```
 
then we find the coefficients $\boldsymbol{\beta} = [\beta\_0, \beta\_1, \beta\_2]$ which minimize the residual sum of squares by writing 

``` latex
\operatorname{RSS}(\boldsymbol{\beta}) = |y - X\boldsymbol{\beta}|^2, 
```
 
where 

``` latex
  X = \begin{bmatrix}
    1 & x_1 & x_1^2 \\
    1 & x_2 & x_2^2\\
    \vdots & \vdots & \vdots \\
    1 & x_n & x_n^2
  \end{bmatrix}.
```

[Continue](btn:next)

---
> id: step-polyreg-example
 
::: .example
**Example**  

    img(src="images/quadreg-example.svg" width=300 style="float: right;")
    
Perform a quadratic regression on the exam-scores example, and show that its integrated squared difference from the true regression function is lower than that of the linear estimator and the Nadaraya-Watson estimator. 
:::

[Continue](btn:next)

---
> id: step-quadreg-example

*Solution*.  

We perform the quadratic regression by doing the same calculation as for the linear regression but with an extra column in $X$. We approximate the integrated squared error using a Riemann sum as we did for the kernel density estimator. We find that the integrated squared errors for the quadratic estimator, the kernel density estimator, and the linear estimator are 0.61, 1.9, and 9.24 respectively. 

    pre(julia-executable)
      | y = [Y for (X,Y) in observations]
      | X = [ones(n) [X for (X,Y) in observations] [X^2 for (X,Y) in observations]]
      | quaderr = sum((r(x)-βq'*[1,x,x^2])^2 for x in xs)*step(xs)
      | print("error for quadratic estimator is $quaderr")
      | linerr = sum((r(x)-β'*[1,x])^2 for x in xs)*step(xs) 
      | print("error for linear estimator is $linerr")
      | βq = (X'*X) \ X'*y
      | scatter(observations, label = "observations") 
      | plot!(xs, [βq'*[1,x,x^2] for x in xs], label = "quadratic regression estimator")

[Continue](btn:next)

---
> id: step-quad-regression-reflection
 
The results of this example are telling: the true regression function was quadratic for this example, and assuming quadraticness enabled us to achieve more than three times lower error than for the nonparametric estimator. On the other hand, the assumption that the regression function is linear resulted in significantly *greater* error. Thus we see that [inductive bias](gloss:inductive-bias) is a double-edged sword: it tends to enhance accuracy if the assumptions applied are correct or approximately correct, and it can result in lower accuracy if not. 

::: .exercise
**Exercise**  
Despite their simplicity, linear models are quite capable of overfitting. **Ridge** and **Lasso** regression address this problem by adding a term to the loss functional which penalizes large coefficients. In this problem, we will explore how these methods behave on a simulated example where the response variable is defined to be a linear combination of some of the feature variables, while other features are nearly linearly dependent.

(a) Execute this cell to see what happens if there is nearly a linear dependence relationship among the features. Note that the loss minimizer is `{jl} [3, 1, -4, 0, 0, 0, 0, 0, 0, 0]`, since we are defining the response variable so that it has a conditional expectation given $X$ which is equal to a linear combination of the features with those weights.

    pre(julia-executable)
      | using Plots, Random
      | Random.seed!(12)
      | function groupedbar(β)
      | 	bar([3; 1; -4; zeros(7)], bar_width = 0.4,
      |         label = "actual coefficients", legend = :topleft)
      |     bar!((1:length(β)) .+ 0.4, β, bar_width = 0.4, 
      |          label = "coefficients from fit")
      | end
      | 
      | n = 10
      | # generate n-1 features, together with a column of ones: 
      | X = [ones(n) randn(n, n-1)]
      | # make the last two columns nearly parallel
      | X[:,10] = 3X[:,9] .+ 0.01randn(n)
      | # response variable depends on first two features: 
      | y = 3.0 .+ X[:,2] .- 4X[:,3] + 0.1randn(n) 
      | β = X \ y
      | groupedbar(β)

(b) Execute this cell to see how ridge regression mitigates the problems you observed in (a):

    pre(julia-executable)
      | using Optim, LinearAlgebra
      | λ = 1
      | o = optimize(β -> sum((y - X*β).^2) + λ*β[2:end]'*β[2:end], ones(10))
      | groupedbar(o.minimizer)
      
(c) Execute this cell to see how lasso regression compares to ridge regression. 

    pre(julia-executable)
      | λ = 1
      | o = optimize(β -> sum((y - X*β).^2) + λ*norm(β[2:end],1), ones(10))
      | groupedbar(o.minimizer) 
      
Which model does the best job of zeroing out the coefficients that should be zero, in this example?

:::

    x-quill
    
---
> id: ridge-lasso-solution

*Solution*. With no regularization, the coefficients for the last two features are very large. Ridge and lasso both reduce this problem substantially, although lasso does a better job of getting the coefficients that should be zero very close to zero. An explanation for this phenomenon is discussed in the [optimization section of the Multivariable Calculus course](https://mathigon.org/course/multivariable-calculus/optimization). 

---
> id: classification-example
## A classification example: QDA

The task in the exam scores example is to predict a *quantitative* random variable $Y$ given the value of a random variable $X$. Another common machine learning task is to predict a random variable $Y$ taking values in a discrete set of *labels*. For example, we might want to identify users of a web app as academic, business, or personal users. Or we might want to classify medical devices as faulty or sound. These are called **classification** problems. 

::: .exercise
**Exercise**  
Suppose that $(X,Y)$ are random variables defined on the same probability space, and suppose that $Y$ takes values in $\\{1,2,3\\}$. For example, suppose that we select a forest animal at random and let $X$ be its weight and $Y$ the kind of animal it is (where $1,2,$ and $3$ correspond to $\mathrm{squirrel},\mathrm{bear},$ and $\mathrm{fox}$, respectively). Suppose that $f$ is a function which is intended to predict the value of $Y$ based on the value of $X$. Explain why the mean squared error $\mathbb{E}[(Y - f(X))^2]$ is not a reasonable way to measure the accuracy of the prediction function. 
:::

    x-quill

---
> id: step-answer-reasonable-error

*Solution*. The mean squared error penalizes a misclassification differently  depending on how far apart the class labels are (for example, misclassifying a squirrel as a fox would be worse than misclassifying it as a bear).

[Continue](btn:next)

---
> id: step-zero-one-loss

As discussed in the first section, the most common way to judge a prediction function for a classification problem is the **0-1 loss**, which applies a penalty of 1 for misclassification and 0 for correct classification:

``` latex
  L(f) = \mathbb{E}[\mathbf{1}_{\\{Y \neq f(X)\\}}] = \mathbb{P}(Y \neq f(X)). 
```

Since it is typically not meaningful to put the possible classifications in order along an axis, we usually represent a data point's classification graphically using the point's shape or color. This allows us to use all of the spatial dimensions in the figure for the $X$ values, which is helpful if $X$ is multidimensional. 

[Continue](btn:next)

---
> id: step-random-flower

::: .example
**Example**  
Given a flower randomly selected from a field, let $X\_1$ be its petal width in centimeters, $X\_2$ its petal length in centimeters, and $Y\in\\{\mathrm{R},\mathrm{G},\mathrm{B}\\}$ its color. Let

``` latex
\boldsymbol{\mu}_{\mathrm{R}} &=
\left[\begin{smallmatrix} 9 \\ 5 \end{smallmatrix}\right]
  &\quad \boldsymbol{\mu}_{\mathrm{G}} &=
  \left[\begin{smallmatrix}4 \\ 10 \end{smallmatrix}\right]
    &\quad \boldsymbol{\mu}_{\mathrm{B}} &= \left[\begin{smallmatrix}7 \\ 9 \end{smallmatrix}\right] \\
A_{\mathrm{R}} &= \left[\begin{smallmatrix}1.5 & -1 \\ 0 & \hphantom{-}1
              \\ \end{smallmatrix}\right] &\quad 
A_{\mathrm{G}} &= \left[\begin{smallmatrix}0.5 & 0.25 \\ 0 & 0.5
              \\ \end{smallmatrix}\right] &\quad 
A_{\mathrm{B}} &= \left[\begin{smallmatrix}2 & 0 \\ 0 & 2
              \\ \end{smallmatrix}\right]. 
```

Suppose that the joint distribution of $X_1, X_2,$ and $Y$ is defined as follows: for any $A\subset \mathbb{R}^2$ and color $c \in \\{\mathrm{R},\mathrm{G},\mathrm{B}\\}$, we have

``` latex
  \mathbb{P}(A \times \{c\}) = p_c\int_{\mathbb{R}^2} f_c(x_1,x_2) \operatorname{d} x_1 
  \operatorname{d} x_2, 
```

where $(p_R,p_G,p_B) = (1/3,1/6,1/2)$ and $f_c$ is the multivariate normal density with mean $\mu_c$ and covariance matrix $A_cA_c'$. In other words, we can sample from the joint distribution of of $X_1, X_2,$ and $Y$ by sampling $Y$ from {R, G, B} with probabilities 1/3, 1/6, and 1/2, respectively, and then generate $(X_1, X_2)$ by calculating $A_Y Z + \mu_Y$, where $Z$ is a vector of two standard normal random variables which are independent and independent of $Y$. 

Three hundred observations from the distribution of $(X_1, X_2, Y)$ are
shown in the figure below.
    
    figure
      img(src="images/flower-points.svg" width=320)
      p.caption.md Colors and petal dimensions of 300 randomly selected flowers. 
      
Find the best predictor of $Y$ given $(X\_1,X\_2) = (x\_1, x\_2)$ (using the 0-1 loss function), and find a way to estimate that predictor using the given observations.
      
:::

    figure
      img(src="images/three-densities.svg" size=400)
      img(src="images/three-surfaces-classification.svg" size=400)
      p.caption.md We can visualize the joint distribution of flower dimension and color by representing $Y$ as a color (as in the first figure) or using the third spatial dimension (as in the second figure).

[Continue](btn:next)

---
> id: step-flower-solution
  
*Solution*. As in the regression example, we can do a decent job of classification with our eyes. If $(X\_1,X\_2)$ is located where there are lots of green observations, we would predict its classification as green, and similarly for blue and red. Let's think about how to approach this task mathematically. 

To start, let's proceed using our knowledge of the joint distribution of $(X\_1,X\_2,Y)$. The predictor which has minimal misclassification probability is the one which maps $(x\_1,x\_2)$ to the classification with maximal conditional probability given $(x\_1,x\_2)$. For example, if the conditional distribution on $\\{\mathrm{R},\mathrm{G},\mathrm{B}\\}$ given $(x\_1,x\_2)$ were $\\\{45\\%, 30\\%, 25\\%\\\}$, then we would guess a classification of [[R|G|B]] for the point $(x\_1, x\_2)$. 

[Continue](btn:next)

---
> id: step-conditional-formula-flowers

The conditional distribution of $Y$ given $(X\_1,X\_2)$ is given by 

``` latex
  m_{(X_1,X_2) = (x_1,x_2)}(c) = \frac{p_c f_{c}(x_1,x_2)}{\sum_{d\in
        \{\mathrm{R},\mathrm{G},\mathrm{B}\}}p_d f_{d}(x_1,x_2)} 
```

for $c \in \\{\mathrm{R},\mathrm{G},\mathrm{B}\\}$; in other words, we compute the proportion of the probability density at the point $(x\_1, x\_2)$ which comes from each color $c$.

Let's build a visualization for the optimal classifier for the flowers by coloring each point in the plane according to its classification. First, let's get 300 observations from the joint distribution of $(X\_1, X\_2, Y)$: 

    pre(julia-executable)
      | using Plots, StatsBase Distributions, Random
      | Random.seed!(1234)
      | struct Flower
      |     X::Vector
      |     color::String
      | end
      | # density function for the normal distribution N
      | xgrid = 0:0.01:15
      | ygrid = 0:0.01:15
      | As = [[1.5 -1; 0 1],[1/2 1/4; 0 1/2], [2 0; 0 2]]
      | μs = [[9,5],[4,10],[7,9]]
      | Ns = [MvNormal(μ,A*A') for (μ,A) in zip(μs,As)]
      | p = ProbabilityWeights([1/3,1/6,1/2])
      | colors = ["red","green","blue"]
      | function randflower(μs,As)
      |     i = sample(p)
      |     Flower(As[i]*randn(2)+μs[i],colors[i])
      | end
      | flowers = [randflower(μs,As) for i=1:300]
      | 
 
Next, let's make a classifier and color all of the points in a fine-mesh grid according to their predicted classifications. 

    pre(julia-executable)
      | predict(x,p,Ns) = argmax([p[i]*pdf(Ns[i],x) for i=1:3])
      | function classificationplot(flowers,p,Ns)
      |     rgb = [:red,:green,:blue]
      |     P = heatmap(xgrid,ygrid,(x,y) -> predict([x,y],p,Ns),
      |           fillcolor = cgrad(rgb), opacity = 0.4, 
      |           aspect_ratio = 1, legend = false)
      |     for c in ["red","green","blue"]
      |         scatter!(P,[(F.X[1],F.X[2]) for F in flowers if F.color ==c], |                 color=c)
      |     end
      |     P
      | end
      | correct(flowers,p,Ns) = count(colors[predict(F.X,p,Ns)] == F.color for F in flowers)
      | classificationplot(flowers, p, Ns)
      | 
 

We see that the optimal classifier does get most of the points right, but not all of them. `{jl} correct(flowers,p,Ns)` returns 265, so the optimal classification accuracy is 265/300 ≈ 88% for this example. Now suppose we don't have access to the joint distribution of $(X\_1, X\_2, Y)$, but we do have $n$ observations $\\{(X\_1^{(i)}, X\_2^{(i)},Y^{(i)})\\}\_{i=1}^n$ therefrom. We can estimate $\widehat{p}\_c$ as the proportion of observed flowers of color $c$. We could estimate the conditional densities $f\_c$ using kernel density estimation, but in the interest of bringing in a new idea, let's fit a multivariate normal distribution to the observations of each color. Let's begin by approximating the mean of the distribution of red flowers, using the plug-in estimator:

``` latex
\widehat{\boldsymbol{\mu}}_{\mathrm{R}} = \frac{1}{|\mathcal{R}|}\sum_{i\in \mathcal{R}}
\left[\begin{array}{c} X_1^{(i)} \\ X_2^{(i)} \end{array}\right],   
```

    figure
      img(src="images/classification-regions.png" width=350)
      p.caption Each point in the square is colored according to the optimal classifier's prediction for the given $(x\_1,x\_2)$ pair. 

and similarly for the other two colors. This formula estimates $\mathbb{E}[\mathbf{X}]$ by using the empirical distribution as a proxy for the underlying distribution. Likewise, we approximate the red covariance matrix as 

``` latex
  \widehat{\Sigma}_{\mathrm{R}} = \frac{1}{|\mathcal{R}|}
  \sum_{i\in \mathcal{R}}\left(\left[
      \begin{array}{c}
        X_1^{(i)}\\
        X_2^{(i)} 
      \end{array}\right]
    - \widehat{\boldsymbol{\mu}}_{\mathrm{R}}\right)
  \left(\left[
      \begin{array}{c}
        X_1^{(i)}\\
            X_2^{(i)} 
      \end{array}\right]
    - \widehat{\boldsymbol{\mu}}_{\mathrm{R}}\right)', 
```

which evaluates the covariance matrix formula $\mathbb{E}[(\mathbf{X}-\boldsymbol{\mu}\_{\mathbf{X}}) (\mathbf{X}-\boldsymbol{\mu}\_{\mathbf{X}})']$ with respect to the empirical distribution. 

    pre(julia-executable)      
      | function mvn_estimate(flowers,color)
      |     flowers_subset = [F.X for F in flowers if F.color == color]
      |     μ̂ = mean(flowers_subset)
      |     Σ̂ = mean([(X - μ̂)*(X - μ̂)' for X in flowers_subset])
      |     MvNormal(μ̂,Σ̂)
      | end
      | colorcounts = countmap([F.color for F in flowers]) 
      | p̂ = [colorcounts[c]/length(flowers) for c in colors]
      | N̂s = [mvn_estimate(flowers,c) for c in colors]
      | classificationplot(flowers,p̂,N̂s)
      | 

The resulting plot looks very similar to the one we made for the optimal classifier, so this classifier does make the best prediction for most points $(x\_1,x\_2)$. 

---
> id: likelihood-ratio-classification
## Likelihood Ratio Classification

In this section, we will continue our study of statistical learning theory by introducing some vocabulary and results specific to binary classification. Borrowing from the language of disease diagnosis, will call the two classes *positive* and *negative* (which, in the medical context, indicate presence or absence of the disease in question). Correctly classifying a positive sample is called **detection**, and incorrectly classifying a negative sample is called **false alarm** or **type I error**. 

[Continue](btn:next)

---
> id: step-class-conditional-distributions

Suppose that $\mathcal{X}$ is the feature set of our classification problem and that $\mathcal{Y} = \\{+1,-1\\}$ is the set of classes. Denote by $(X,Y)$ a random observation drawn from the probability measure on $\mathcal{X} \times \mathcal{Y}$. We define $p\_{+1}$ to the probability that a sample is positive and $p\_{-1} = 1 - p\_{+1}$ to be the probability that a sample is negative. Let $f\_{+1}$ be the conditional PMF or PDF of $X$ given the event $\\{Y = +1\\}$, and let $f\_{-1}$ be the conditional PMF or PDF of $X$ given $\\{Y = -1\\}$. We call $f\_{+1}$ and $f\_{-1}$ *class conditional distributions*. 

[Continue](btn:next)

---
> id: step-confusion-matrix

Given a function $h: \mathcal{X} \to \mathcal{Y}$ (which we call a **classifier**), we define its **confusion matrix** to be 

``` latex
  \begin{bmatrix}
    \mathbb{P}(h(X) = +1 | Y = +1) & \mathbb{P}(h(X) = +1 | Y = -1) \\
    \mathbb{P}(h(X) = -1 | Y = +1) & \mathbb{P}(h(X) = -1 | Y = -1)
  \end{bmatrix}. 
```

We call the top-left entry of the confusion matrix the **detection rate** (or *true positive rate*, or *recall* or *sensitivity*) and the top-right entry the **false alarm rate** (or *false positive rate*). 

::: .example
**Example**  
The **precision** of a classifier $h$ is the conditional probability of $\\{Y = +1\\}$ given $\\{h(X) = +1\\}$. Show that a classifier can have high detection rate, low false alarm rate, and low precision. 
:::

[Continue](btn:next)

---
> id: step-precision-solution

*Solution*. Suppose that $p\_{-1} = 0.999$ and that $h$ has detection rate 0.99 and false alarm rate 0.01. Then the precision of $h$ is 

``` latex
    \mathbb{P}(Y = +1 | h(X) = +1) =
    \frac{\mathbb{P}(\{Y = +1\} \cap \{h(X) = +1\}) }{\mathbb{P}(h(X) = +1)} =
    \frac{(0.001)(0.99)}{(0.001)(0.99) + (0.999)(0.01)} \approx 0.09. 
```

We see that, unlike detection rate and false alarm rate, precision depends on the value of $p\_{-1}$. If $p\_{-1}$ is very high, it can result in low precision even if the classifier has high accuracy within each class. 

[Continue](btn:next)

---
> id: step-bayes-classifier

The **Bayes classifier** 

``` latex
  h(\mathbf{x}) = \begin{cases}
    +1 & \text{if }p_{+1}f_{+1}(\mathbf{x}) \geq p_{-1}f_{-1}(\mathbf{x}) \\
    -1 & \text{otherwise} \\
  \end{cases}
```

minimizes the probability of misclassification. In other words, it is the classifier $h$ for which 

``` latex
  \mathbb{P}(h(X) = +1 \text{ and }Y = -1) +
  \mathbb{P}(h(X) = -1 \text{ and }Y = +1)
```

is as small as possible. However, the two types of misclassification often have different real-world consequences, and we might therefore wish to weight them differently. Given $t \geq 0$, we define the classifier 

``` latex
  h_t(\mathbf{x}) = \begin{cases}
    +1 & \text{if }\frac{f_{+1}(\mathbf{x})}{f_{-1}(\mathbf{x})} \geq t \\
    -1 & \text{otherwise}.
  \end{cases}
```

::: .example
**Example**  
Show that the likelihood ratio classifier is a generalization of the Bayes classifier. 
:::

[Continue](btn:next)

---
> id: step-lrc-generalize-bayes

*Solution*. If we let $t = p\_{-1}/p\_{+1}$, then the inequality $\frac{f\_{+1}(\mathbf{x})}{f\_{-1}(\mathbf{x})} \geq t$ simplifies to $p\_{+1}f\_{+1}(\mathbf{x}) \geq p\_{-1}f\_{-1}(\mathbf{x})$. Therefore, the Bayes classifier is equal to $h\_{p\_{-1}/p\_{+1}}$. 

[Continue](btn:next)

---
> id: receiver-operating-characteristic
### Receiver Operating Characteristic

If we increase $t$, then some of the predictions of $h\_t$ switch from $+1$ to $-1$, while others stay the same. Therefore, the detection rate and false alarm rate both decrease as $t$ increases. Likewise, if we decrease $t$, then detection rate and false alarm rate both increase. If we let $t$ range over the interval $[0,\infty]$ and plot each ordered pair $(\operatorname{FAR}(h\_t), \operatorname{DR}(h\_t))$, then we obtain a curve like the one shown in the figure below. This curve is called the **receiver operating characteristic** of the likelihood ratio classifier. 

The ideal scenario is that this curve passes through points near the top left corner of the square, since that means that some of the classifiers in the family $\\{h\_t : t \in [0,\infty]\\}$ have both high detection rate and low false alarm rate. We quantify this idea using the **area under the ROC** (called the AUROC). This value is close to 1 for an excellent classifier and close to $\frac{1}{2}$ for a classifier whose ROC is the diagonal line from the origin to $(1,1)$. 

    figure
      img(src="images/roc.svg" width=240)
      p.caption A graph of the receiver operating characteristic (ROC).

[Continue](btn:next)

---
> id: step-roc-example
 
::: .example
**Example**  
Suppose that $\mathcal{X} = \mathbb{R}$ and that the class conditional densities for $-1$ and $+1$ are normal distributions with unit variances and means $0$ and $\mu$, respectively. For each $\mu \in \\{1/4,1,4\\}$, predict the approximate shape of the ROC for the likelihood ratio classifier. Then calculate it explicitly and plot it. 
:::


[Continue](btn:next)

---
> id: step-roc-solution

*Solution*. We predict that the ROC will be nearly diagonal for $\mu = \frac{1}{4}$, since the class conditional distributions overlap heavily, and therefore any increase in detection rate will induce an approximately equal increase in false alarm rate. When $\mu = 4$, we expect to get a very large AUROC, since in that case the distributions overlap very little. The $\mu = 1$ curve will lie between these extremes. To plot these curves, we begin by calculating the likelihood ratio 

``` latex
    \frac{f_{+1}(x)}{f_{-1}(x)} =
    \frac{\operatorname{e}^{-(x-\mu)^2/2}}{\operatorname{e}^{-x^2/2}} = \operatorname{e}^{\mu x - \mu^2/2},  
```

So the detection rate for $h\_t$ is the probability that an observation drawn from $\mathcal{N}(\mu,1)$ lies in the region where $\operatorname{e}^{\mu x - \mu^2/2} \geq t$. Solving this inequality for $x$, we find that the detection rate is equal to the probability mass assigned to the interval $\left[\frac{\log t}{\mu} + \frac{\mu}{2},\infty\right)$ by the distribution $\mathcal{N}(\mu,1)$. 

Likewise, the false alarm rate is the probability mass assigned to the same interval by the negative class conditional distribution, $\mathcal{N}(0,1)$. 

    pre(julia-executable)
      | using Plots, Distributions
      | FAR(μ,t) = 1-cdf(Normal(0,1),log(t)/μ + μ/2)
      | DR(μ,t) = 1-cdf(Normal(μ,1),log(t)/μ + μ/2)
      | ROC(μ) = [(FAR(μ,t),DR(μ,t))
      |                for t in exp.(-20:0.1:20)]
      | plot(ROC(1/4),label="1/4")
      | plot!(ROC(1),label="1")
      | plot!(ROC(4),label="4")
      | plot!(xlabel = "false alarm rate",
      |       ylabel = "detection rate")


---
> id: generative-models
## Generative Models

Kernel density estimation and quadratic discriminant analysis are [[**generative**|**discriminative**]] models, meaning that they are built using an estimate of the probability distribution of the data-generating process. Models which estimate the prediction function directly—such as linear or polynomial regression—are [[**discriminative**|**generative**]] models. In this section we will discuss three generative models.

[Continue](btn:next)

To recap, from the second section, **quadratic discriminant analysis** posits that the class conditional densities are multivariate Gaussian. We use the observations from each class to estimate a mean and a covariance matrix for that class. We also use sample proportions $\widehat{p}\_c$ to estimate the class proportions. Given this approximation of the probability measure on $\mathcal{X} \times \mathcal{Y}$, we return the classifier $h(\mathbf{x}) = \operatorname{argmax}\_c \widehat{p}\_c \widehat{f}\_c(\mathbf{x})$ (where $\widehat{f}\_c$ is the multivariate normal density with mean $\widehat{\boldsymbol{\mu}}\_c$ and covariance $\widehat{\Sigma}\_c$). 

[Continue](btn:next)

---
> id: step-linear-discriminant-analysis

A common variation on this idea is to posit that the class conditional densities have the *same* covariance matrix. Then observations from all of the classes can be pooled to estimate this common covariance matrix. We estimate the mean $\widehat{\boldsymbol{\mu}}\_c$ of each class $c$, and then we average $(\mathbf{X}\_i - \widehat{\boldsymbol{\mu}}\_{Y\_i})(\mathbf{X}\_i -
\widehat{\boldsymbol{\mu}}\_{Y\_i})'$ over all the sample points $(\mathbf{X}\_i, Y\_i)$. This approach is called **linear discriminant analysis** (LDA). 

The advantage of LDA over QDA stems from the difficulty of estimating the $p^2$ entries of a $p\times p$ covariance matrix if $p$ is even moderately large. Pooling the classes allows us to marshal more observations in the service of this estimation task. 

[Continue](btn:next)

---
> id: step-lda-qda-decision-boundaries

The terms *quadratic* and *linear* refer to the resulting decision boundaries: solution sets of equations of the form $p\_1f\_1(\mathbf{x})=p\_2f\_2(\mathbf{x})$ are quadric hypersurfaces or hyperplanes if $p\_1$ and $p\_2$ are real numbers and $f\_1$ and $f\_2$ are distinct multivariate normal densities. If the covariances of $f\_1$ and $f\_2$ are equal, then the solution set $p\_1f\_1(\mathbf{x})=p\_2f\_2(\mathbf{x})$ is a hyperplane. 

---
> id: naive-bayes
#### Naive Bayes

The **naive Bayes** approach to classification is to assume that the components of $\mathbf{X}$ are conditionally *independent* given $Y$. In the context of the flower example, this would mean assuming that blue-flower petal width and length are independent (which was true in that example), that the red-flower petal width and length are independent (which was not true), and that the green-flower petal width and length are independent (also not true). 

To train a naive Bayes classifier, we use the observations from each class to estimate a density $\widehat{f}\_{c,i}$ on $\mathbb{R}$ for each feature component $i=1,2,\ldots, p$, and then we estimate 

``` latex
  \widehat{f}_c(x_1,\ldots, x_n) =
  \widehat{f}_{c,1}(x_1)\widehat{f}_{c,2}(x_2)\cdots
  \widehat{f}_{c,p} (x_p), 
```

in accordance with the conditional independence assumption. The method for estimating the univariate densities $\widehat{f}\_{c,j}$ is up to the user; options include kernel density estimation and parametric estimation. 

[Continue](btn:next)

---
> id: step-lda-qda-nb-exercise

::: .exercise
**Exercise**  
Each scatter plot shows a set of sample points for a three-category classification problem. Match each data set to the best-suited model: Naive Bayes, LDA, QDA. 

    figure: img(src="images/LDA.svg" width=400)

:::

*Solution*. The correct order is (c), (a), (b) since the third plot shows class conditional densities which factor as a product of marginals, the first plot shows Gaussian class conditional probabilities with the same covariance matrices, and the second plot shows Gaussian class conditional probabilities with distinct covariance matrices.

---
> id: logistic-regression
## Logistic Regression

In this section we discuss *logistic regression*, which is a discriminative model for binary classification. 
 
::: .example
**Example**  
Consider a binary classification problem where the two classes are equally probable, the class-0 conditional density is a standard multivariable normal distribution in two dimensions, and the class-1 conditional density is a multivariate normal distribution with mean $[1,1]$ and covariance $I$. Find the class boundary for the Bayes classifier. 
:::

[Continue](btn:next)

---
> id: step-intro-logistic-linear

    img(src="images/two-densities.svg" style="float: right;" width=260)

*Solution*.  The Bayes classifier is $(x,y) \mapsto \operatorname{argmax}\_i p\_if\_i(x,y)$, where 

``` latex
f_0(x,y) &= \frac{1}{2\pi} \operatorname{e}^{-\frac{1}{2}(x^2+y^2)}\text{, and}\\
f_1(x,y) &= \frac{1}{2\pi} \operatorname{e}^{-\frac{1}{2}((x-1)^2+(y-1)^2)}\text{.} 
```

By symmetry, the classifier will predict class 1 for every point above the line $x + y = 1$ and class 0 for every point below the line. We can obtain the same result by solving the equation $f\_0(x,y) = f\_1(x,y)$. We get 

``` latex
-\frac{1}{2}(x^2+y^2)  = -\frac{1}{2}((x-1)^2+(y-1)^2),     
```

which simplifies to $x + y = 1$, as desired. 
 
[Continue](btn:next)

---
> id: step-regression-logistic-example
 
::: .example
**Example**  
Find the regression function $r(\mathbf{x}) = \mathbb{E}[Y | \mathbf{X} = \mathbf{x}] = \mathbb{P}(Y = 1 | \mathbf{X} = \mathbf{x})$ for the example above. Plot a heatmap of this function. 
:::

*Solution*. Let's use the multivariate normal type `{jl} MvNormal` from the `{jl} Distributions` package. 

    pre(julia-executable)
      | using Plots, Distributions, Optim
      | mycgrad = cgrad([:MidnightBlue,:SeaGreen,:Gold,:Tomato])
      | gr(aspect_ratio=1,fillcolor=mycgrad) # Plots.jl defaults
      | A = MvNormal([0,0],[1.0 0; 0 1])
      | B = MvNormal([1,1],[1.0 0; 0 1])
      | xgrid = -5:1/2^5:5
      | ygrid = -5:1/2^5:5
      | r(x,y) = 0.5pdf(B,[x,y])/(0.5pdf(A,[x,y])+0.5pdf(B,[x,y]))
      | heatmap(xgrid,ygrid,r)

We can see from the heatmap that restricting $r(\mathbf{x})$ to any line of slope 1 yields a function which asymptotes to 0 in the southwest direction and to 1 in the northeast direction, increasing smoothly in between. Such a function is called a **sigmoid** function. 

[Continue](btn:next)

---
> id: step-recover-bayes-classifier

Given the regression function $r(\mathbf{x}) = \mathbb{P}(Y = 1 | \mathbf{X} = \mathbf{x})$, we can recover the Bayes classifier by predicting class 1 whenever $r(\mathbf{x}) > \frac{1}{2}$ and class 0 whenever $r(\mathbf{x}) < \frac{1}{2}$. However, the value of the regression function also conveys the degree of confidence associated with the prediction. If $r(\mathbf{x}\_1) = 0.65$ and $r(\mathbf{x}\_2) = 0.95$, then observations at $\mathbf{x}\_1$ and $\mathbf{x}\_2$ are both predicted as class 1, but the latter with much more confidence. 

The graph in the example above suggests modeling $r$ parametrically as a composition of a linear map and a sigmoid function. Specifically, we posit the model $r(\mathbf{x}) = \sigma(\alpha + \boldsymbol{\beta} \cdot \mathbf{x})$, where $\boldsymbol{\beta} \in \mathbb{R}^p$, $\alpha \in \mathbb{R}$, and $\sigma(x) = 1 / (1+\operatorname{e}^{-x})$. 

[Continue](btn:next)

---
> id: step-select-parameters

To select the parameters $\boldsymbol{\beta}$ and $\alpha$, we penalize lack of confident correctness for each training sample. We give a sample of class 1 the penalty $\log\left(\frac{1}{r\_i(x)}\right)$ (which is [[large|negative]] if $r\_i(x)$ is close to zero and [[nearly zero|very large]] if $r\_i(x)$ is close to 1). Likewise, we penalize a sample of class 0 by $\log\left(\frac{1}{1-r\_i(x)}\right)$. 

---
> id: logistic-animation-exercise

::: .exercise
**Exercise**  
Experiment with the sliders below and get the loss value below 2.45.
:::

{.text-center} `α =`${α}{α|0|-5,5,0.05}

{.text-center} `β =`${β}{β|1|-5,5,0.05}

{.text-center} loss = ${loss}

    x-coordinate-system(x-axis="-5|5|0.5" y-axis="0|1|0.25")
    
    pre(julia-executable)
      | using Optim
      | 
      | Z = [-1.2, -0.8, -0.7, 0.4, -2.4, 1.13]
      | O = [2.2, 1.3, 0.8, 2.5, 2.62]
      | 
      | f(α, β, x) = 1/(1+exp(-α-β*x))
      |     
      | function loss(Z, O, θ)
      |     α, β = θ
      |     sum(log(1/(1-f(α, β, x))) for x in Z) + 
      |         sum(log(1/f(α, β, x)) for x in O)
      | end
      | 
      | optimize(θ->loss(Z,O,θ), [0.0, 1.0])

[Continue](btn:next)

---
> id: step-min-logistic-regression

::: .example
**Example**  
Sample 1000 points by choosing one of the two multivariate Gaussian distributions uniformly at random and then sampling from the selected distribution. Find the function of the form $\sigma(\boldsymbol{\beta} \cdot \mathbf{x} + \alpha)$ which minimizes 

``` latex
L(r) = \sum_{i=1}^{n} \left[y_i \log \frac{1}{r(x_i)} + 
       (1-y_i)\log\frac{1}{1-r(x_i)}\right].
```
:::

    figure
      img(src="images/two-densities.svg" width=260)
      p.caption The decision boundary between two Gaussian class conditional densities with equal covariance is a straight line. 

[Continue](btn:next)

---
> id: step-logistic-regression-exercise

*Solution*. We begin by sampling the points as suggested. 

    pre(julia-executable)
      | observations = [rand(Bool) ? (rand(A),0) : (rand(B),1) for i=1:1000]
      | cs =  [c for ((x,y),c) in observations]
      | scatter([(x,y) for ((x,y),c) in observations], group=cs, markersize=2)

Next, we define the loss function and minimize it: 

    pre(julia-executable)
      | σ(u) = 1/(1 + exp(-u)) 
      | r(β,x) = σ(β'*[1;x])
      | C(β,xᵢ,yᵢ) = yᵢ*log(1/r(β,xᵢ))+(1-yᵢ)*log(1/(1-r(β,xᵢ)))
      | L(β) = sum(C(β,xᵢ,yᵢ) for (xᵢ,yᵢ) in observations)
      | β̂ = optimize(L,ones(3),BFGS()).minimizer
      | r̂s = [r(β̂,[x,y]) for x=xs,y=ys]
      | heatmap(xs,ys,r̂s)


We can see that the resulting heatmap looks quite similar to the actual regression function. 

 
::: .example
**Example**  
In the example above, is it true that $r(\mathbf{x}) = \sigma(\boldsymbol{\beta} \cdot \mathbf{x} + \alpha)$ for some $\boldsymbol{\beta}$ and $\alpha$? 
:::

[Continue](btn:next)

---
> id: step-is-equal-sigmoid


*Solution*. We calculate 

``` latex
    \frac{\frac{1}{2}f_0(x,y)}{\frac{1}{2}f_0(x,y) +
      \frac{1}{2}f_1(x,y)} = 
    \frac{\operatorname{e}^{- \frac{x^{2}}{2} - \frac{y^{2}}{2}}}{\operatorname{e}^{-
        \frac{x^{2}}{2} - \frac{y^{2}}{2}} + \operatorname{e}^{- \frac{\left(x -
            1\right)^{2}}{2} - \frac{\left(y - 1\right)^{2}}{2}}} =
    \frac{1}{1+\operatorname{e}^{x + y - 1}},   
```

which is equal to $\sigma(\boldsymbol{\beta} \cdot \mathbf{x} + \alpha)$ if $\alpha = 1$ and $\boldsymbol{\beta} = [-1,-1]$. So the assumption was correct in this example. 

[Continue](btn:next)

---
> id: step-linear-decision-boundary
 
::: .exercise
**Exercise**  
Consider a binary classification problem for which the regression function $r$ satisfies $r(\mathbf{x}) = \sigma(\boldsymbol{\beta}\cdot\mathbf{x} + \alpha)$ for some $\boldsymbol{\beta} \in \mathbb{R}^p$ and $\alpha \in \mathbb{R}$. Show that the decision boundary is linear. 
:::

    x-quill    

---
> id: step-solution-linear-decision-boundary

*Solution*.  We solve $r(\mathbf{x}) = \frac{1}{2}$ to find the decision  boundary. This equation is equivalent to $\boldsymbol{\beta} \cdot \mathbf{x} + \alpha = 0$, the solution set of which is linear (by definition,  since the equation is linear).  

This exercise shows that directly applying logistic regression always yields linear decision boundaries. However, we can use logistic regression to find nonlinear decision boundaries by appending components to the feature vectors which are derived from the original features. For example, if we apply the map $[x\_1, x\_2] \mapsto [x\_1,x\_2,x\_1^2,x\_2^2,x\_1x\_2]$ to each feature vector, then the linear boundary we discover in $\mathbb{R}^5$ will correspond to a quadric curve in the original feature space $\mathbb{R}^2$. 

---
> id: support-vector-machines
## Support Vector Machines

Logistic regression identifies linear decision boundaries by modeling the regression function $r(\mathbf{x}) = \mathbb{P}(Y = 1 | \mathbf{X} =
\mathbf{x})$. In this section, we will find decision boundaries directly based on desirable features of those boundaries. We begin with a warm-up exercise on the geometry of planes in $\mathbb{R}^3$. 

::: .example
**Example**  
Find the distance from the plane $3x + 2y + z = 6$ to the point $P = (4,7,1)$. 
:::

[Continue](btn:next)

---
> id: step-svm-plane-solution

*Solution*. The vector $[3,2,1]$ is perpendicular to the given plane, so moving $t$ units directly away from some point in the plane means adding the vector 

``` latex
    t\frac{[3,2,1]}{|[3,2,1]|} = t\frac{[3,2,1]}{\sqrt{14}}
```

to that point. The value of the function $3x + 2y + z$ is 6 for any point in the plane, and adding $t\frac{[3,2,1]}{\sqrt{14}}$ increases that value by $t\sqrt{14}$: 

``` latex
    3\left(x + \frac{3t}{\sqrt{14}}\right) +
    2\left(y + \frac{2t}{\sqrt{14}}\right) +
    1\left(z + \frac{t}{\sqrt{14}}\right)  =
    3x + 2y + z + \frac{9t + 4t + t}{\sqrt{14}} = 6 + t\sqrt{14}. 
```

Since the value of $3x + 2y + z$ is equal to $3(4) + 2(7) + 1(1) = 27$ at the point $P$, it changes by $27 - 6 = 21$ as you move from the nearest point on the plane to $P$. We solve $t\sqrt{14} = 21$ to find that the distance from the plane to the point is $\boxed{21/\sqrt{14}}$. 

[Continue](btn:next)

---
> id: step-svm-hyperplane-problem

::: .example
**Example**  
Find the distance from the hyperplane $\\{\mathbf{x} \in \mathbb{R}^n :  \boldsymbol{\beta} \cdot \mathbf{x} - \alpha = 0\\}$ to the point $\mathbf{x} \in \mathbb{R}^n$. 
:::

[Continue](btn:next)

---
> id: step-svm-yperplane-solution

*Solution*. Generalizing the idea we developed in the previous problem, we can say that $\boldsymbol{\beta}$ is the normal vector to the hyperplane, and moving $t$ units directly away from the hyperplane corresponds to adding $t|\boldsymbol{\beta}|$ to the value of $\boldsymbol{\beta} \cdot \mathbf{x} - \alpha$. Therefore, we can check the value of the function $\mathbf{x} \mapsto \boldsymbol{\beta} \cdot \mathbf{x} - \alpha$ at our point $\mathbf{x}$ and divide by $|\boldsymbol{\beta}|$ to find the distance from $\mathbf{x}$ to the plane. So our distance formula is $\frac{|\boldsymbol{\beta}\cdot \mathbf{x} - \alpha|}{|\boldsymbol{\beta}|}$. 

[Continue](btn:next)

---
> id: step-example-thickest-slab
 
::: .example
**Example**  
Simulate data for a binary classification problem in the plane for which the two classes can be separated by a line. Write a Julia function for finding the thickest slab which separates the two classes. 
:::

[Continue](btn:next)

---
> id: step-solution-thickest-slab

*Solution*. Suppose that the observations are $\\{(\mathbf{x}\_i,y\_i)\\}\_{i=1}^n$, where $y\_i \in \\{-1,1\\}$ for each $1 \leq i \leq n$. Let us describe the separating slab as $\\{\mathbf{x} \in \mathbb{R}^2 : -1 \leq \boldsymbol{\beta} \cdot \mathbf{x} - \alpha \leq 1 \\}$. The width of this slab is $2/|\boldsymbol{\beta}|$, by the preceding example. We can check whether a point is on the correct side of the slab by checking whether $\boldsymbol{\beta} \cdot \mathbf{x} - \alpha \geq 1$ for points of class 1 and less than or equal to $-1$ for points of class $-1$. More succinctly, we can check whether $y\_i(\boldsymbol{\beta} \cdot \mathbf{x}\_i- \alpha) \geq 1$ for all $1 \leq i \leq n$. 

So, we are looking for the values of $\boldsymbol{\beta}$ and $\alpha$ which minimize $|\boldsymbol{\beta}|$ subject to the conditions $y\_i(\boldsymbol{\beta} \cdot \mathbf{x}\_i- \alpha) \ge 1$ for all $1 \leq i \leq n$. This is a **constrained** optimization problem, since we are looking to maximize the value of a function over a domain defined by some constraining inequalities. 

[Continue](btn:next)

---
> id: step-contrained-optimization

Constrained optimization is a ubiquitous problem in applied mathematics, and numerous solvers exist for them. Most of these solvers are written in low-level languages like C and have bindings for the most popular high-level languages (Julia, Python, R, etc.). No solver is uniformly better than the others, so solving a constrained optimization problem often entails trying different solvers to see which works best for your problem. Julia has a package which makes this process easier by providing a single interface for problem encoding (`{jl} JuMP`). Let's begin by sampling our points and looking at a scatter plot. We go ahead and load the `{jl} Ipopt` package, which provides the solver we'll use. 

    pre(julia-executable)
      | using Plots, JuMP, Ipopt, Random; Random.seed!(1234); 
      | gr(aspect_ratio=1, size=(500,500))
 
Let's sample the points from each class from a multivariate normal distribution. We'll make the mean of the second distribution a parameter of the sampling function so we can change it in the next example. 

    pre(julia-executable)
      | function samplepoint(μ=[3,3])
      |     class = rand([-1,1])
      |     if class == -1
      |         X = randn(2)
      |     else
      |         X = μ + [1 -1/2; -1/2 1] * randn(2)
      |     end
      |     (X,class)
      | end
      | n = 100
      | observations = [samplepoint() for i=1:n]
      | ys = [y for (x,y) in observations]
      | scatter([(x₁,x₂) for ((x₁,x₂),y) in observations], group=ys)
 
Next we describe our constrained optimization problem in `{jl} JuMP`. The data for the optimization is stored in a `{jl} Model` object, and the solver can be specified when the model is instantiated. 

    pre(julia-executable)
      | m = Model(with_optimizer(Ipopt.Optimizer,print_level=0))

We add variables to the model with the `{jl} @variable` macro, and we add constraints with the `{jl} @constraint` macro. We add the function we want to minimize or maximize with the `{jl} objective` macro. 

    pre(julia-executable)
      | @variable(m,β[1:2]) # adds β[1] and β[2] at the same time
      | @variable(m,α)
      | for (x,y) in observations
      |     @constraint(m,y*(β'*x - α) ≥ 1)
      | end
      | @objective(m,Min,β[1]^2+β[2]^2)
      
When we call `{jl} solve` on the model, it makes the optimizing values of the variables retrievable via `{jl} JuMP.value`. 

    pre(julia-executable)
      | optimize!(m)
      | β, α = JuMP.value.(β), JuMP.value(α)
 

Now we can plot our separating line. 

    pre(julia-executable)
      | l(x₁) = (α - β[1]*x₁)/β[2]
      | xs = [-2,5]
      | plot!(xs,[l(x₁) for x₁ in xs], label="")

We can see that there are necessarily observations of each class which lie on the boundary of the separating slab. These observations are called **support vectors**. If a sample is not a support vector, then moving it slightly or removing it does not change the separating hyperplane we find. 

The approach of finding the thickest separating slab is called the **hard-margin** SVM (support vector machine). A different approach (the *soft-margin* SVM) is required if the training observations for the two classes are not separable by a hyperplane. 

[Continue](btn:next)

---
> id: step-soft-margin-example
 
::: .example
**Example**  
Consider a binary classification problem in $\mathbb{R}^2$ for which the training observations $\\{(\mathbf{x}\_i,y\_i)\\}\_{i=1}^n$ are not separable by a line. Explain why 

``` latex
    L(\boldsymbol{\beta},\alpha) = \lambda |\boldsymbol{\beta}|^2
    +  \frac{1}{n}\sum_{i=1}^{n}\big[1-y_i(\boldsymbol{\beta}\cdot \mathbf{x}_i
    - \alpha)\big]_+
```

is a reasonable quantity to minimize. 
:::

[Continue](btn:next)

---
> id: step-soft-margin-intro-solution

*Solution*. Minimizing the first term $\lambda |\boldsymbol{\beta}|^2$ is the same as minimizing the value of $|\boldsymbol{\beta}|$, which is the *hard-margin* objective function. The second term penalizes points which are not on the right side of the slab (in units of margin widths: points on the slab midline get a penalty of 1, on the wrong edge of the slab they get a penalty of 2, and so on). Thus this term imposes misclassification penalty. The parameter $\lambda$ governs the tradeoff between the large-margin incentive of the first term and the correctness incentive of the second. 
 
::: .example
**Example** (Soft-margin SVM)  
Simulate some overlapping data and minimize the soft-margin loss function. Select $\lambda$ by leave-one-out cross-validation. 
::: 

[Continue](btn:next)

---
> id: step-soft-margin-simulation-solution

*Solution*. We begin by generating our observations. To create overlap, we make the mean of the second distribution closer to the origin. 

    pre(julia-executable)
      | observations = [samplepoint([1,1]) for i=1:n]
      | ys = [y for (x,y) in observations]
      | scatter([(x₁,x₂) for ((x₁,x₂),y) in observations],group=ys)

Next we define our loss function, including a version that takes $\boldsymbol{\beta}$ and $\alpha$ together in a single vector called `{jl} params`. 

    pre(julia-executable)
      | L(λ,β,α,observations) = 
      |     λ*norm(β)^2 + 1/n*sum(max(0,1-y*(β'*x - α)) for (x,y) in observations)
      | L(λ,params,observations) = L(λ,params[1:end-1],params[end],observations)

Since this optimization problem is unconstrained, we can use `{jl} Optim` to do the optimization. We define a function `{jl} SVM` which returns the values of $\boldsymbol{\beta}$ and $\alpha$ which minimize the empirical loss: 

    pre(julia-executable)
      | using Statistics, LinearAlgebra, Optim
      | function SVM(λ,observations)
      |     params = optimize(params->L(λ,params,observations), ones(3), BFGS()).minimizer
      |     params[1:end-1], params[end]
      | end

To choose $\lambda$, we write some functions to perform cross-validation: 

    pre(julia-executable)
      | function errorrate(β,α,observations)
      |     count(y*(β'*x-α) < 0 for (x,y) in observations)
      | end
      | function CV(λ,observations,i)
      |     β,α = SVM(λ,[observations[1:i-1];observations[i+1:end]])
      |     x,y = observations[i]
      |     y*(β'*x - α) < 0 
      | end
      | function CV(λ,observations)
      |     mean(CV(λ,observations,i) for i=1:length(observations))
      | end

Finally, we optimize over $\lambda$: 

    pre(julia-executable)
      | λ₁, λ₂ = 0.001, 0.25        
      | λ = optimize(λ->CV(first(λ),observations),
      |              λ₁,λ₂).minimizer
      | β,α = SVM(λ,observations)
      | l(x₁) = (α - β[1]x₁)/β[2]
      | xs = [-1.5,2]
      | plot!(xs,[l(x₁) for x₁ in xs],label="")

[Continue](btn:next)

---
> id: step-SVM-kernel-trick
 
::: .exercise
**Exercise**  

    img(src="images/radial-data.svg" style="float: right;" width=225)

Support vector machines can be used to find nonlinear separating boundaries, because we can map the feature vectors into a higher-dimensional space and use a support vector machine find a separating hyperplane in that space.

Find a map from $\mathbb{R}^2$ to a higher dimensional space such that the two classes shown in the figure can be separated with a hyperplane. 
:::

    x-quill

---
> id: step-SVM-soft-margin-solution 

*Solution*. The distinguishing feature of the points is distance from the origin, so we supplement the features $x\_1$ and $x\_2$ with the combination $x\_1^2 + x\_2^2$. So our map is 

``` latex
      \phi(x_1,x_2)  = (x_1,x_2,x_1^2+x_2^2). 
```

We can see that the points can be separated by a plane in $\mathbb{R}^3$, so we could do a hard-margin SVM at this stage. To classify a test point $(x\_1,x\_2)$, we can just check which side of the plane the point $\phi(x\_1, x\_2)$ is on. 

    figure
      img(src="images/radial-data-3D.png" width=240)
      p.caption.md We can map points into a higher-dimensional space to achieve linear separation.

[Continue](btn:next)

---
> id: step-general-kernel-trick

This example might have seemed a bit fortuitious, and it is structured so as to apparently rely on human insight to choose the appropriate map to $\mathbb{R}^3$. We can come up with a more general approach which leads to a new geometric perspective on kernelized support vector machines.

We begin with an overview of the mathematical theory underlying the
support vector machine. This content tends to get heavy notationally, so we will adopt a vectorized notation which is more condensed and which also supports convenient translation to code. 

A **support vector machine** is a binary classifier of the form

``` latex
\mathbf{x}\mapsto \operatorname{sign}(\mathbf{x}\cdot \mathbf{w}+ b),
```

where $\mathbf{w} \in \mathbb{R}^d$ and $b \in \mathbb{R}$. To train a support vector machine on a set of training data $(X, \mathbf{y})$, with $X \in \mathbb{R}^{n \times d}$ and $\mathbf{y} \in \{-1,1\}^n$, we choose a value $C > 0$ and solve the optimization problem
``` latex
  &\text{minimize} \quad \frac{1}{2}\|\mathbf{w}\|^2 + C \operatorname{sum}(\boldsymbol{\zeta})\\
  &\text{subject to} \quad \mathbf{y} \odot (X\mathbf{w} \oplus b)
    \succcurlyeq 1 \ominus \boldsymbol{\zeta} \text{ and } \boldsymbol{\zeta} \succcurlyeq 0.
```

where $\odot$ and $\oplus$ indicate elementwise multiplication and
addition, respectively, and $\succcurlyeq$ indicates that the elementwise comparison holds for every element. The parameter $C$ governs the tradeoff between the margin width term $\frac{1}{2}\|\mathbf{w}\|^2$ and the classification penalty $\operatorname{sum}(\boldsymbol{\zeta})$.

It can be shown, using Lagrange multipliers, that this problem can be solved by instead solving the *dual* problem: 

``` latex
  &\text{minimize} \quad \frac{1}{2}(\boldsymbol{\alpha} \odot \mathbf{y})'XX'
    (\boldsymbol{\alpha} \odot \mathbf{y}) - \operatorname{sum}(\boldsymbol{\alpha}) \\
  &\text{subject to} \quad 0 \preccurlyeq \boldsymbol{\alpha} \preccurlyeq C \text{ and }
    \boldsymbol{\alpha} \cdot \mathbf{y} = 0,
```

where the optimizing value $\widehat{\boldsymbol{\alpha}}$ for the dual problem
is related to the optimizing value $\widehat{w}$ for the original
problem via

``` latex
  \widehat{\mathbf{w}} = X'(\widehat{\boldsymbol{\alpha}} \odot y).
```

The optimizing value of $b$ in the original problem may also be
obtained using the solution of the dual problem by looking at any
entry of

``` latex
  \mathbf{y} - X\widehat{\mathbf{w}}
```

for which the corresponding entry of $\boldsymbol{\alpha}$ is strictly between 0 and $C$. All such entries can be proved to be equal mathematically, but when working with numerical approximations, (i) a small tolerance should be included when determining which entries of $\boldsymbol{\alpha}$ are between 0 and $C$, and (ii) the appropriate entries of $\mathbf{y} - X\widehat{\mathbf{w}}$ should be averaged.

The reason for formulating the dual problem is that it permits the application of a useful and extremely common technique called the kernel trick. The idea is that if we apply a transformation $\phi:\mathbb{R}^d \to \mathbb{R}^d$ each row of $X$ and call the resulting matrix $\phi(X)$, then the resulting change to the dual problem is just to replace $XX'$ with $\phi(X) \phi(X)'$. This matrix's entries consist entirely of dot products of rows of $\phi(X)$ with rows of $\phi(X)$, so we can solve the problem as long as we can calculate $\phi(\mathbf{x})\cdot \phi(\mathbf{y})$ for all $\mathbf{x}$ and $\mathbf{y}$ in $\mathbb{R}^d$. The function $K = (\mathbf{x}, \mathbf{y}) \mapsto \phi(\mathbf{x})\cdot \phi(\mathbf{y})$ is called the *kernel* associated with the transformation $\phi$. Typically we ignore $\phi$ and use one of the following kernel functions:

``` latex
  \text{linear} \quad K(\mathbf{x},\mathbf{y}) &= \mathbf{x}' \mathbf{y} \\
  \text{degree-$d$ polynomial} \quad K(\mathbf{x},\mathbf{y}) &= (\gamma \mathbf{x}' \mathbf{y} + r)^d \\
  \text{Gaussian radial basis function} \quad K(\mathbf{x},\mathbf{y}) &= \exp(-\gamma \|\mathbf{x} -
                             \mathbf{y}\|^2) \\
  \text{sigmoid} \quad K(\mathbf{x},\mathbf{y}) &= \tanh(\gamma \mathbf{x}'\mathbf{y}+ r),
```

where $\gamma$ and $r$ are parameters that may be tuned.

To bring it all together, suppose that $K$ is a kernel function and $\mathcal{K} = \{K(\mathbf{x}\_i, \mathbf{x}\_j)\}\_{1 \leq i,j \leq n}$ is the resulting matrix of kernel values (where $\mathbf{x}_i$ is the $i$th row of $X$). Then the support vector machine with kernel $K$ is obtained by letting $\widehat{\boldsymbol{\alpha}}$ be the optimizing vector $\boldsymbol{\alpha}$ in the optimization problem

``` latex
  &\text{minimize} \quad \frac{1}{2}(\boldsymbol{\alpha} \odot \mathbf{y})'\mathcal{K}
    (\boldsymbol{\alpha} \odot \mathbf{y}) - \operatorname{sum}(\boldsymbol{\alpha}) \\
  &\text{subject to} \quad 0 \preccurlyeq \boldsymbol{\alpha} \preccurlyeq C \text{ and }
    \boldsymbol{\alpha} \cdot \mathbf{y} = 0.
```

The prediction vector for an $n_{\mathrm{test}} \times n$ feature
matrix $X_{\mathrm{test}}$ is

``` latex
  \operatorname{sign}(\phi(X) \widehat{\mathbf{w}} \oplus b) =
  \operatorname{sign}(\phi(X) \phi(X)' (\widehat{\boldsymbol{\alpha}}
  \odot \mathbf{y}) \oplus \widehat{b}) =
  \operatorname{sign}(\mathcal{K}_{\mathrm{test}}(\widehat{\boldsymbol{\alpha}}
  \odot \mathbf{y}) \oplus \widehat{b}),
```

where $\mathcal{K}\_{\mathrm{test}}$ is the $n\_{\mathrm{test}} \times n$ matrix whose $(i,j)$th entry is obtained by applying $K$ to the $i$th row of $X\_{\mathrm{test}}$ and the $j$th row of $X$, and where $\widehat{b}$ is any entry of

``` latex
  \mathbf{y} - \mathcal{K}(\widehat{\boldsymbol{\alpha}} \odot \mathbf{y})
```

for which the corresponding entry in $\widehat{\boldsymbol{\alpha}}$ is strictly
between 0 and $C$.

::: .exercise

    img(src="images/svm-2d.svg" width=200 style="float: right;")

**Exercise**  

Consider applying an SVM with Gaussian kernel $K(\mathbf{x},\mathbf{y}) = \mathrm{e}^{-\gamma \|\mathbf{x} - \mathbf{y} \|^2}$ to a binary classification problem. Show that the function which maps a feature vector $\mathbf{x}$ to its predicted class can be written as a composition of the signum function and a constant plus a linear combination of translations of the function $\mathbf{x}\mapsto\operatorname{e}^{-\gamma \|\mathbf{x}\|^2}$. Where are these translations centered? Use this observation to reason about the behavior of the classifier when $\gamma$ is large.

    img(src="images/svm-humps.png" width=190 style="float: right;")

(In the scatter plot, the two axes represent features, and class is indicated with $+$ or $\times$. In the surface plot, the vertical axis represents predicted class (before the signum function is applied), while the other two axes represent features.)
:::

---
> id: decision-trees
## Decision Trees

Your visual cortex has no difficulty using the following training data to predict the color of a point based on its $x\_1$ and $x\_2$ values:

    figure
      img(src="images/easy-decision-tree-example.svg")
      p.caption.md 

A point falling in the second or fourth quadrants should be predicted to be [[blue|red|green]], while a point in the third quadrant should be [[green|red|blue]]. A point in the first quadrant should be classified as [[red|blue]] or [[green|blue]], depending on whether it's in the left or right half of that quadrant, respectively. 

---
> id: step-julia-function-decision-tree

::: .exercise
**Exercise**  
Write a Julia function which accepts two arguments `{jl} x1` and `{jl} x2` and returns the predicted color. Assume that the vertical line separating the two colors in the first quadrant is $x = 1/2$. 
:::

    pre(julia-executable)
      | function myprediction(x1,x2)
      |     # write code here
      | end
      | 
      | using Test
      | @test myprediction(-1,-2) == "green"
      | @test myprediction(0.5,-0.05) == "blue"
      | @test myprediction(0.45,0.25) == "red"
      | @test myprediction(0.65,0.8) == "green"

    x-quill      

---
> id: step-basic-decision-tree-sol

*Solution*. We can do this with a sequence of branching `{jl} if` statements: 

    pre(julia-executable)
      | function myprediction(x1,x2)
      |     if x1 < 0 
      |         if x2 < 0
      |             "green"
      |         else
      |             "blue"
      |         end
      |     else
      |         if x2 < 0
      |             "blue"
      |         else
      |             if x1 < 0.5
      |                 "red"
      |             else
      |                 "green"
      |             end
      |         end
      |     end
      | end    
      | 
      | using Test
      | @test myprediction(-1,-2) == "green"
      | @test myprediction(0.5,-0.05) == "blue"
      | @test myprediction(0.45,0.25) == "red"
      | @test myprediction(0.65,0.8) == "green"

The program you wrote in this exercise is an example of a **decision tree**. Decision tree classifiers map a feature vector to an output label using a flowchart of single-feature decisions. 

    figure
      img(src="images/decision-tree.svg" width=300)
      p.caption.md A decision tree is a flowchart where each split is based on a single inequality involving a single feature.

[Continue](btn:next)

---
> id: step-possible-decision-tree-classifications
      
::: .exercise
**Exercise**  
Which of the following are possible classification diagrams for a decision tree? 

    figure
      img(src="images/dt-1.svg" width=200)
      img(src="images/dt-2.svg" width=200)
      img(src="images/dt-3.svg" width=200)

:::

    x-quill
    
---
> id: step-decision-tree-possible-shapes     

*Solution*. Only the first and third diagrams are possible. The second one would require making a decision based on the sum of the coordinates, which is not permitted (by the definition of a decision tree).    

---
> id: training-a-decision-tree
### Training a Decision Tree

We were able to train a decision tree for the toy dataset above, but only by including a human in the training process. We'll need a more principled approach, for several reasons: (1) real-world data are almost always significantly messier than this example, (2) higher-dimensional feature vectors make visualization infeasible, and (3) we'll see that being able to train trees quickly gives us access to techniques which will tend to improve performance on real-world data sets.

[Continue](btn:next)

---
> id: step-CART

The most commonly used decision-tree training algorithm, called **CART**, is greedy. At each node in the decision tree, we choose the next decision based on which feature and threshold do the best job of splitting the classes in the training data. To measure how will the classes have been divided, we define the *Gini impurity* of a list of labeled objects to be the probability that two independent random elements from the list have different labels: if $p_1, \ldots, p_k$ are the proportions for the $k$ labels, then 

``` latex
G = 1 - (p_1^2 + \cdots + p_k^2).
```

For example, the Gini impurity of a list of 4 red objects, 2 green objects, and 3 blue objects is [[52/81]]. The Gini impurity of a list of 8 red objects and 1 blue object is [[16/81]].

[Continue](btn:next)

---
> id: step-CART-continued

The quantity that we minimize at each node in the decision tree is $p_1G_1 + p_2G_2$, where $p_1$ and $p_2$ are the proportion of training observations that go to the two child nodes and $G_1$ and $G_2$ are the child-node Gini impurities. Let's look at an example to convince ourselves that this is a reasonable quantity to minimize. 

[Continue](btn:next)

---
> id: step-exercise-CART-minimization

::: .exercise
**Exercise**  
Use the cell below to generate data in $[0,1]^2$ for which most of the points in the left half of the square are red and most of the points in the right half are blue. Consider splitting the set along a vertical line at position $x$, and evaluate $p_1G_1 + p_2G_2$ for that value of $x$. Plot this function over the interval `{jl} [0.05, 0.95]`. 
:::

    pre(julia-executable)
      | 
      | using Plots
      | n = 500
      | X = [rand(n) rand(n)]
      | function pointcolor(x)
      |     if x[1] < 0.5
      |         rand() < 0.1 ? "blue" : "red"
      |     else
      |         rand() < 0.1 ? "red" : "blue"
      |     end
      | end      
      | colors = [pointcolor(x) for x in eachrow(X)]
      | scatter(X[:,1], X[:,2], color = colors, ratio = 1, 
      |         size = (400,400), legend = false)
      
    pre(julia-executable)
      |   

    x-quill

[Continue](btn:next)

---
> id: step-solution-gini-example

We define `{code} p1, p2, G1` and `{jl} G2` and plot the result: 

    pre(julia-executable)
      | using Statistics, LaTeXStrings
      | p1(x) = mean(row[1] < x for row in eachrow(X))
      | p2(x) = mean(row[1] ≥ x for row in eachrow(X))
      | function G(x, op) # op will be either < or ≥
      |     blue_proportion = mean(color == "blue" for (row,color) in zip(eachrow(X),colors) if op(row[1], x))
      |     red_proportion = 1 - blue_proportion
      |     1 - blue_proportion^2 - red_proportion^2
      | end
      | G1(x) = G(x, <)
      | G2(x) = G(x, ≥)
      | objective(x) = p1(x)*G1(x) + p2(x)*G2(x)
      | plot(0.05:0.01:0.95, objective, label = L"p_1G_1 + p_2G_2", legend = :top)

We see that it does have a minimum near the desired value of 0.5. 

[Continue](btn:next)

---
> id: step-practical-decision-tree

As long as the training feature vectors are distinct, we can always achieve 100% training accuracy by choosing a suitably deep tree. To limit the ability of the tree to overfit in this way, we supply a maximum *tree depth*. A maximum depth of 3, for example, means that no feature vector will be subjected to more than three decisions before being given a predicted classification. 

::: .exercise
**Exercise**  
Use the code block below to train and visualize a decision tree on the iris dataset. How does the training accuracy vary as the maximum depth is adjusted?
:::

    pre(julia-executable)
      | 
      | using DecisionTree
      | 
      | features, labels = load_data("iris")
      | 
      | model = DecisionTreeClassifier(max_depth=3)
      | fit!(model, features, labels)
      | print_tree(model, 5)
      | 
      | sum(predict(model, features) .== labels)

    x-quill

---
> id: step-practical-decision-tree-solution

*Solution*. We find that with a depth of 3, we can classify 146 out of 150 training observations correctly. Even with a depth of 1, we can get 100 out of 150 correct (since the setosas split perfectly from the other two species along the third feature). 

---
> id: regression-trees
### Regression Trees

We can also solve regression problems with decision trees. Rather than outputting a classification at each terminal node of the tree, we output a numerical value. We will train regression trees greedily, as we did for classification trees: at each node, we look to identify the feature and threshold which does the best job of decreasing the mean squared error. Specifically, we minimize $p_1\mathrm{MSE}_1 + p_2\mathrm{MSE}_2$, where $p_1$ and $p_2$ are the proportions of observations which go to the two child nodes, and $\mathrm{MSE}_1$ and $\mathrm{MSE}_2$ are the variances of the sets of observations at each child node. We use *mean squared error* and *variance* interchangeably here, because the constant function which minimizes squared error for a given set of points is the [[mean|variance]] of the points.

::: .exercise
**Exercise**  
  
    img(src="images/regression-tree-1D.svg" style="float: right;" width=250)

Consider a set of data points in the unit square which fall close to the diagonal line $y = x$. Among the functions on $[0,1]$ which are piecewise constant and have a single jump, which one (approximately) would you expect to minimize the sum of squared vertical distances to the data points? Confirm your intuition by running the code block below to plot MSE as a function of the jump location. (You can increase the value of $n$ to make the graph smoother.)
:::

    pre(julia-executable)
      | using Plots
      | n = 1_000
      | xs = rand(n)
      | ys = xs .+ 0.02randn(n)
      | 
      | function MSE(xs, ys, x)
      |     inds = xs .< x # identify points left of x
      |     p = mean(inds) # proportion of points left of x
      |     sum((ys[inds] .- mean(ys[inds])).^2) + # MSE
      |         sum((ys[.!inds] .- mean(ys[.!inds])).^2)
      | end
      | 
      | plot(0:0.01:1, x -> MSE(xs, ys, x))
      
    x-quill

---
> id: step-reg-tree-sol-1

*Solution*. We would expect the optimal threshold to be in the middle, at $\frac{1}{2}$, so that one piece of the piecewise constant function can approximate half the points as well as possible, and the other piece can approximate the other half. Plotting the overall MSE as a function of the threshold `{jl} x`, we see that indeed the minimum happens right around $0.5$. 

[Continue](btn:next)

---
> id: step-reg-tree-2D

::: .exercise

    img(src="images/decision-tree-surface.png" style="float: right;" width=60)

**Exercise**  
Experiment with the depth in the code block below to see how the graph of the decision tree changes. The rectangles on which the prediction function is constant are always [[parallel to the coordinate axes|squares|equal in area]].
:::

    pre(julia-executable)
      | using DecisionTree, Plots; pyplot()
      | n = 1000 # number of points
      | X = [rand(n) rand(n)] # features
      | y = [2 - x[1]^2 - (1-x[2])^2 + 0.1randn() for x in eachrow(X)] # response
      | 
      | model = DecisionTreeRegressor(max_depth=3)
      | fit!(model, X, y)
      | scatter(X[:,1], X[:,2], y, label = "")
      | surface!(0:0.01:1, 0:0.01:1, 
      |          (x,y) -> predict(model, [x,y]))
      
    pre(julia-executable)
      | heatmap(0:0.01:1, 0:0.01:1, 
      |         (x,y) -> predict(model, [x,y]),
      |         aspect_ratio = 1)

---
> id: ensemble-methods
## Ensemble Methods

Humans making important decisions often consult a *panel* of experts, rather than a single expert. While one individual might have biases that affect their ability to make the right decision, the hope is that these idiosyncrasies tend to cancel when aggregated across the group. In this way, the collection of experts might be able to make better decisions than even the best individual expert. 

One crucial assumption is that the agents' decision-making processes exhibit some independence. If they're all constrained to approach problems in very similar ways, then the wisdom of the group will closely reflect the wisdom of each individual. This phenomenon is called [[groupthink|doublethink]]. 

---
> id: step-ensemble-methods-intro

We can follow a similar approach with machine learners: we take a majority vote among an **ensemble** of them. We can do this with a variety of models (one linear model, one SVM, etc.), but we can also do this with many models of the same type (for example, a collection of many decision trees). If trained deterministically on the same data, the trees would all be the same, so to get better results we will need to randomize either the training process or the data or both.

[Continue](btn:next)

---
> id: bagging-decision-tree
### Bagging 

One common way to do this is to train each decision tree on a sample obtain by sampling the training data with replacement. This is called *bootstrap aggregation*, or **bagging**, for short. We can also randomize the training process by randomly choosing a subset of the features to consider for possible splits at each node of the tree. In addition to making the decision tree predictions less correlated, this also has the benefit of making training [[faster|more memory efficient]].

::: .exercise
**Exercise**  
Change `{jl} DecisionTreeClassifier` to `{code} RandomForestClassifier` in the second cell below to see how using the ensemble method changes the way the model performs. Compare your results to the Bayes classifier (which is in the third cell). 
:::

In this cell, we generate example training data.

    pre(julia-executable)
      | # generate observations
      | n = 1000
      | features = zeros(n,2)
      | labels = ["" for _ in 1:n]
      | for i in 1:n
      |     if rand() < 0.4
      |         features[i,:] = [2 1; 1 1]*randn(2) + [0, 2]
      |         labels[i] = "red"
      |     else
      |         features[i,:] = randn(2) + [0, 2]
      |         labels[i] = "blue"
      |     end
      | end
      | "Done!"

Here we train a model and visualize the resulting classification function: 

    pre(julia-executable)
      | # train model and plot prediction function
      | using Plots, Distributions, DecisionTree
      | model = DecisionTreeClassifier(max_depth=3)
      | fit!(model, features, labels)
      | heatmap(-6.0:0.1:6, -6.0:0.1:6, 
      |         (x,y) -> predict(model, [x, y]) == "red", 
      |         color = cgrad([:blue, :red]), opacity = 0.4, colorbar = false)
      | scatter!(features[:,1], features[:,2], color = labels, 
      |          ratio = 1, size = (400,400), markerstrokewidth = 0.1, 
      |          markersize = 3, opacity = 0.2, legend = false)

We can compare our classifier with the Bayes classifier, which makes the best possible predictions (based on knowledge of the underlying distribution):
      
    pre(julia-executable)
      | N₁ = MvNormal([0,2], [2.0 1; 1 1]*[2 1; 1 1]')
      | N₂ = MvNormal([1,1], [1.0 0; 0 1])
      | heatmap(-6.0:0.1:6, -6.0:0.1:6, 
      |         (x,y) -> 0.4pdf(N₁, [x,y]) > 0.6pdf(N₂, [x,y]) ? 1 : 0, 
      |         color = cgrad([:blue, :red]), ratio = 1, opacity = 0.5, 
      |         size = (400,400))

    x-quill
    
---
> id: Boosting
### Boosting

Another way to combine models into a single, stronger model is build them up in sequence, with each model aiming to address the deficiencies of the previous ones. This approach is called **boosting**. We will discuss two boosting methods: *AdaBoost*, and *gradient boosting*. 

[Continue](btn:next)

---
> id: adaboost
#### AdaBoost

The core idea of adaptive boosting is to *weight* observations in the training of each model, based on how well they've been predicted by previous models. Thus points which are more difficult to predict get more attention. 

[Continue](btn:next)

---
> id: step-adaboost-example

For simplicity, let's consider a binary classification problem with $n$ training observations $(\mathbf{X}_1, Y_1), \ldots, (\mathbf{X}_n, Y_n)$. Let's suppose that the $\mathbf{X}_i$'s are points in the plane, while the $Y_i$'s are elements of $\{-1,+1\}$. 

We begin by training a decision tree on the training data in the usual way, and we call the resulting predictor $h_1$. We associate $h_1$ with a value $\alpha_1$ which indicates $h_1$'s overall effectiveness: it's defined to be $\frac{1}{2}\log\left(\frac{1-\epsilon_1}{\epsilon_1}\right)$, where $\epsilon_1$ is the proportion of misclassified training data. The relationship between $\epsilon$ and $\alpha$ is shown here:

    pre(julia-executable)      
      | using Plots, LaTeXStrings
      | plot(0.01:0.01:0.99, ϵ -> 1/2 * log((1-ϵ)/ϵ), frame = :origin,
      |      xlabel = L"\epsilon", ylabel = L"\alpha", 
      |      label = L"\alpha = \frac{1}{2}\log\left(\frac{1-\epsilon}{\epsilon}\right)")

So if $\epsilon$ is small, then $\alpha$ is [[large|small]], while if $\epsilon$ is close to 1, then $\alpha$ is [[negative|zero]]. 

---
> id: step-new-weights

Next, we come up with new weights for the training observations. We assign the $i$th observation a weight which is proportional to $\operatorname{e}^{-\alpha_1 Y_i h_1(\mathbf{X}_i)}$. In other words, if $Y_i h_1(\mathbf{X}_i) = 1$, indicating [[a correct|an incorrect]] classification, then the observation gets a weight of $\operatorname{e}^{-\alpha_1}$. Otherwise, the observation gets a weight of $\operatorname{e}^{\alpha_1}$. 

[Continue](btn:next)

---
> id: step-retrain

Next, we find a new predictor which is trained on the same training data but with the new weights we just worked out. This requires that we modify the training algorithm to accommodate weights for the observations. For example, we could adjust the CART algorithm by defining the Gini impurity of a *weighted* set of labeled objects to be the probability of getting different labels when drawing two objects independently with probabilities proportional the objects' weights.

We then define $\epsilon_2$ to be weighted proportion of misclassified training data, and define $h_2$'s overall effectiveness score of $\alpha_2 = \frac{1}{2}\log\left(\frac{1-\epsilon_2}{\epsilon_2}\right)$. We update the weight associated with each observation $i$ by multiplying the current weight by $\operatorname{e}^{-\alpha_2 Y_i h_2(\mathbf{X}_i)}$. 

[Continue](btn:next)

---
> id: step-voting-boosted-models

Repeating this process $T$ times for some prescribed integer $T$, we return

``` latex
H(x) = \operatorname{sign}\left(\sum_{t=1}^T \alpha_t h_t(\mathbf{x})\right)
```

as our final predictor. In other words, the vote of each classifier is weighted according to its [[effectiveness|consistency]].

---
> id: gradient-boosting
#### Gradient Boosting

Gradient boosting takes a different approach to boosting: we train each new model on the *difference* between the training response values and the values predicted by our current model. Since we're looking to subtract response values, gradient boosting is naturally suited to [[regression|classification]] problems.

---
> id: step-boost-by-hand

Since the models are trained to approximate the difference between the response variable and the preceding models, we need to [[add|subtract]] the values returned by the models to produce our final regression estimator. Here's an example of by-hand gradient boosting with three decision trees:

    pre(julia-executable)
      | 
      | using Plots, DecisionTree
      | n = 50
      | X = rand(n,1)
      | Y = [x - x^2 + 0.05randn() for x in X[:]]
      | 
      | model₁ = DecisionTreeRegressor(max_depth=2)
      | model₂ = DecisionTreeRegressor(max_depth=2)
      | model₃ = DecisionTreeRegressor(max_depth=2)
      | 
      | fit!(model₁, X, Y)
      | Y₁ = predict(model₁, X)
      | fit!(model₂, X, Y - Y₁)
      | Y₂ = predict(model₂, X)
      | fit!(model₃, X, Y - Y₁ - Y₂)
      | 
      | r̂(x) = sum(predict(m, [x]) for m in (model₁, model₂, model₃))
      |  
      | scatter(X[:], Y, label = "training data")
      | plot!(0:0.001:1, r̂, label = "gradient boosted prediction")

[Continue](btn:next)

---
> id: step-xgboost

Gradient boosting with decision trees is often an extremely effective method in practice. The library [XGBoost](https://en.wikipedia.org/wiki/XGBoost) implements gradient-boosted decision trees, and it's one of the most commonly used machine learning libraries. It often produces state-of-the-art results despite its relative simplicity.

---
> id: neural-networks
## Neural Networks

There is yet another way to build complex models out of more basic ones: **composition**. We can use outputs of one model as inputs of the next model, and we train the full composition to map training inputs to training outputs. 

Using linear functions as our building blocks is a dead end: 

::: .example
**Example**  
An **affine function** from $\mathbb{R}^t$ to $\mathbb{R}^s$ is a function of the form $\mathbf{x}\mapsto W\mathbf{x} + \mathbf{b}$, where $W$ is an $s\times t$ matrix and $\mathbf{b} \in \mathbb{R}^t$. Show that a composition of affine functions is affine. 
:::

[Continue](btn:next)

---
> id: step-affine-solution

*Solution*. We have $W\_2(W\_1 \mathbf{x} + \mathbf{b}\_1) + \mathbf{b}\_2 = W\_2W\_1 \mathbf{x} + (W\_1 \mathbf{b}\_1 + \mathbf{b}\_2)$, which is of the form (matrix times $\mathbf{x}$ plus vector). 

This example shows that composing affine functions does not yield any new functions. We will introduce nonlinearity by applying a fixed function $K: \mathbb{R} \to \mathbb{R}$ componentwise after each affine map application. We call $K$ the **activation** function. The modern default activation to use is the **ReLU** function $K(x) = \max(0,x)$. We borrow some Julia syntax and write $K.$ for the function which applies $K$ pointwise: 

``` latex
  K.([x_1, \ldots, x_t]) = [K(x_1), \ldots, K(x_t)]. 
```

Given an affine map $\mathbf{x}\mapsto W \mathbf{x} + \mathbf{b}$, we call $W$ the **weight** matrix and $\mathbf{b}$ the **bias** vector. 

::: .example
**Example**  
Suppose that $A\_1(\mathbf{x}) = \left[\begin{smallmatrix} 3 & -2 \\ 1 &
      4 \end{smallmatrix}\right]\mathbf{x} + \left[\begin{smallmatrix} 1 \\
      1 \end{smallmatrix}\right]$ and $A\_2(\mathbf{x}) = \left[\begin{smallmatrix} -4 & 0 \\ 3 &
      1 \end{smallmatrix}\right]\mathbf{x} + \left[\begin{smallmatrix} -2 \\
      2 \end{smallmatrix}\right]$. Find $(A\_2 \circ K. \circ A\_1)\left(\left[\begin{smallmatrix} -2 \\
        -4 \end{smallmatrix}\right]\right)$, where $K$ is the ReLU activation function. 
:::

[Continue](btn:next)

---
> id: step-basic-affine-example 

*Solution*. We have $A\_1(\mathbf{x}) = \left[\begin{smallmatrix} 3 \\
      -17 \end{smallmatrix}\right]$. Applying $K$ to each component yields $\left[\begin{smallmatrix} 3 \\
      0 \end{smallmatrix}\right]$. Finally, applying $A\_2$ yields 

``` latex
  \left[\begin{smallmatrix} -4 & 0 \\ 3 & 1 \end{smallmatrix}\right]
  \left[\begin{smallmatrix} 3 \\ 0 \end{smallmatrix}\right] +
  \left[\begin{smallmatrix} -2 \\ 2 \end{smallmatrix}\right] =
  \boxed{\left[\begin{smallmatrix} -14 \\ 11 \end{smallmatrix}\right]}. 
```

[Continue](btn:next)

---
> id: step-cost-function-neural-net

We will use a diagram to visualize our neural net as a composition of maps. We include the sequence of alternating affine and activation maps, and we also include one final map which associates a real-valued *cost* with each output vector. Given a training sample $(\mathbf{x}\_i, \mathbf{y}\_i)$, let's consider the cost $C\_i(\mathbf{y}) = |\mathbf{y} - \mathbf{y}\_i|^2$ (which measures squared distance from the vector $\mathbf{y}$ output by the neural net and the desired vector $\mathbf{y}\_i$). Our goal will be to find values for the weights and biases which yield a small average value for $C(N(\mathbf{x}\_i), \mathbf{y}\_i)$ as $(\mathbf{x}\_i, \mathbf{y}\_i)$ ranges over the set of training observations. 

[Continue](btn:next)

---
> id: step-neural-net-definition
 
::: .definition
**Definition**  
A **neural network** function $N: \mathbb{R}^p \to \mathbb{R}^q$ is a composition of affine transformations and componentwise applications of a function $K: \mathbb{R} \to \mathbb{R}$. 

    figure: img(src="images/nn.svg" width=750)

The **architecture** of a neural network is the sequence of dimensions of the domains and codomains of its affine maps. 
:::

In principle, we have fully specified a neural network learner: given a set of training observations and a choice of architecture, we can ask for the weights and biases which minimize the average cost over the training observations. However, this is not the end of the story, for two reasons: neural net cost minimization is not a convex problem, and finding a global minimum is typically not feasible. Furthermore, even if the global minimum can be found, it is typically overfit. Therefore, building an effective neural net requires finessing not only the setup (architecture, choice of activation function, choice of cost function) but also the details of the optimization algorithm. 

[Continue](btn:next)

---
> id: step-stochatic-gradient-descent

Neural networks are typically trained using *stochastic gradient descent*. The idea is to determine for each training sample the desired nudges to each weight and bias to reduce the cost for that sample. Rather than performing this calculation for every sample in the training set (which is, ideally, enormous), we do it for a randomly selected subset of the training data. 

The main challenge in implementing stochastic gradient descent is the bookkeeping associated with all the nodes in the neural net diagram. We will use matrix differentiation to simplify that process. Let's begin by defining a neural net data type and writing some basic methods for it. 

::: .example
**Example**  
Create data types in Julia to represent affine maps and neural net functions. Write an `{jl} architecture` method for neural nets which returns the sequence of dimensions of the domains and codomains of its affine maps. 
:::

[Continue](btn:next)

---
> id: step-julia-neural-net-from-scratch

*Solution*. We supply a `{jl} NeuralNet` with the sequence of affine maps, the activation function, and also the activation function's derivative. We write call methods for the `{jl} AffineMap` and `{jl} NeuralNet` types so they can be applied as functions to appropriate inputs. (One of these methods refers to a function we will define in the next example.) 

    pre(julia-executable)
      | struct AffineMap
      |     W::Matrix
      |     b::Vector
      | end
      | struct NeuralNet
      |     maps::Vector{AffineMap}
      |     K::Function # activation function
      |     K̇::Function # derivative of K
      | end
      | (A::AffineMap)(x) = A.W * x + A.b
      | (N::NeuralNet)(x) = forwardprop(N,x)[end]
      | architecture(N::NeuralNet) = [[size(A.W,2) for A in N.maps]; size(last(N.maps).W,1)]
      |   

Successively applying the maps in the neural network is called **forward propagation**. 

[Continue](btn:next)
 
::: .example
**Example**  
Write a Julia function `{jl} forwardprop` which calculates the sequence of vectors obtained by applying each successive map in the neural net. 
::: 

---
> id: step-forwardprop-solution

*Solution*. We store the sequence of values we obtain in an array called `{jl} vectors`. The very last map is the identity function rather than $K.$, so it must be handled separately. 

    pre(julia-executable)
      | function forwardprop(N::NeuralNet,x)
      |     vectors = [x]
      |     for (j,A) in enumerate(N.maps)
      |         push!(vectors,A(vectors[end]))
      |         push!(vectors,(j < length(N.maps) ? N.K : identity).(vectors[end]))
      |     end
      |     vectors
      | end 

To adjust the weights and biases of the neural net in a favorable direction, we want to compute for every node $\nu$ the derivative of the value in the cost node with respect to the value in node $\nu$. The node which is easiest to compute the derivative for is the prediction vector node, since the only map between that node and the cost is $C\_i$. 

[Continue](btn:next)

---
> id: step-neural-backpropagation

More generally, given the derivative value for any particular node $\nu$, we can calculate the derivative for the node $\nu\_{\text{left}}$ immediately to its left, using the chain rule. A small change $\operatorname{d}\mathbf{u}$ in the value $\mathbf{u}$ at node $\nu\_{\text{left}}$ induces a small change $\frac{\partial S}{\partial \mathbf{u}}\operatorname{d}\mathbf{u}$ in the value $\mathbf{v}$ at node $\nu$ (where $S$ denotes the map between $\nu$ and $\nu\_{\text{left}}$). This change in turn induces a change $\frac{\partial T}{\partial \mathbf{v}}\frac{\partial S}{\partial \mathbf{u}}\operatorname{d}\mathbf{u}$ in the cost value (where $T$ denotes the map from $\nu$ to the cost node). In other words, the net result of the small change $\operatorname{d}\mathbf{u}$ is the product of the two derivative matrices and $\operatorname{d}\mathbf{u}$. 

So we can work from right to left in the diagram and calculate the derivative values for all of the nodes. This is called **backpropagation**. We will just need to calculate the derivatives of the maps between adjacent nodes. 

 
::: .example
**Example**   
* Find the derivative of $C\_i(\mathbf{y}) = |\mathbf{y} -
    \mathbf{y}\_i|^2$ with respect to $\mathbf{y}$. 
* Find the derivative of $K.$ (the map which applies $K$ pointwise). 
* Find the derivative of $W \mathbf{u} + \mathbf{b}$ with respect to $\mathbf{u}$. 
:::

[Continue](btn:next)

---
> id: step-basic-derivatives

*Solution*.  
* The derivative of $C\_i$ is 

``` latex
      \frac{\partial}{\partial \mathbf{y}}\left[(\mathbf{y} -
        \mathbf{y}_i)' (\mathbf{y} -
        \mathbf{y}_i)\right] = 2(\mathbf{v} - \mathbf{y}_i)', 
```

by the product rule. 
* The derivative with respect to $\mathbf{x}$ has $(i,j)$ th entry $\frac{\partial (K.(\mathbf{x})\_{i})}{\partial x\_j}$, which is equal to 0 if $i \neq j$ and $\dot K(x\_i)$ if $i = j$. In other words, the derivative of $K.$ with respect to $\mathbf{x}$ is $\operatorname{diag} \dot K.(\mathbf{x})$. 
* The derivative of $W \mathbf{u} + \mathbf{b}$ with respect to $\mathbf{u}$ is $\frac{\partial (W \mathbf{u})}{\partial \mathbf{u}} +
    \frac{\partial \mathbf{b}}{\partial \mathbf{u}}= W + 0 = W$. 

 
::: .example
**Example**  
Write a Julia function `{jl} backprop` which calculates the for each node the derivative of the cost function with respect to the value at that node. In other words, calculate the derivative of the composition of maps between that node and the cost node at the end. 
:::

[Continue](btn:next)

---
> id: step-julia-backprop

*Solution*. We can use all the derivatives we calculated in the previous example. We define functions which return the index of the $j$ th green node and the $j$ th purple node in the diagram, for convenience. 

    pre(julia-executable)
      | greennode(j) = 2j-1
      | purplenode(j) = 2j
      | function backprop(N::NeuralNet,vectors,yᵢ)
      |     grads = [2(vectors[end]-yᵢ)']
      |     push!(grads,grads[end])
      |     for j = length(N.maps) : -1 : 1
      |         push!(grads,grads[end] * N.maps[j].W)
      |         j > 1 && push!(grads,grads[end] * Diagonal(N.K̇.(vectors[purplenode(j-1)])))
      |     end
      |     reverse(grads)
      | end

With the derivative values computed for all of the nodes on the bottom row, we can calculate the derivative of the cost function with respect to the weights and biases. To find changes in the cost function with respect to changes in a weight matrix $W\_j$, we need to introduce the idea of differentiating with respect to a matrix. 

::: .exercise
**Exercise**  
Given $f:\mathbb{R}^{m\times n} \to \mathbb{R}$, we define 

``` latex
    \frac{\partial}{\partial W}f(W) =
    \begin{bmatrix}
      \frac{\partial f}{\partial a_{1,1}} & \cdots & \frac{\partial
        f}{\partial a_{1,n}} \\
      \vdots & \ddots & \vdots \\
      \frac{\partial f}{\partial a_{m,1}} & \cdots & \frac{\partial
        f}{\partial a_{m,n}}
    \end{bmatrix}, 
```

where $a\_{i,j}$ is the entry in the $i$ th row and $j$ th column of $W$. Suppose that $\mathbf{u}$ is a $1 \times m$ row vector and $\mathbf{v}$ is an $n \times 1$ column vector. Show that we have 

``` latex
    \frac{\partial}{\partial W}(\mathbf{u}W \mathbf{v}) = \mathbf{u}'
    \mathbf{v}'. 
```
:::

[Continue](btn:next)

---
> id: step-differentiation-wrt-matrix

*Solution*. We have

``` latex
\mathbf{u} A \mathbf{v} = a_{1,1}u_1v_1 + a_{1,2}u_1v_2 + \cdots + a_{m,n} u_m v_n.    
```

Therefore, the derivative with respect to $a\_{i,j}$ is $u\_iv\_j$. This is also the $(i,j)$ th entry of $\mathbf{u}' \mathbf{v}'$, so the purported equality holds. 

[Continue](btn:next)

---
> id: step-third-order-tensor

If $\mathbf{f}$ is a vector-valued function of a matrix $W$, then $\frac{\partial}{\partial W}(\mathbf{f}(\mathbf{v}))$ is "matrix" whose $(i,j,k)$ th entry is $\frac{\partial f\_i}{\partial a\_{j,k}}$. As suggested by the scare quotes, this is not really a matrix, since it has three varying indices instead of two. This is called a **third-order tensor**, but we will not develop this idea further, since the only property we will need is suggested by the notation and the result of the exercise above: differentiating $W \mathbf{v}$ with respect to $W$ and left-multiplying by a row vector $\mathbf{u}$ has the following net effect: 

``` latex
  \mathbf{u}\frac{\partial}{\partial W}(W \mathbf{v}) =
  \frac{\partial}{\partial W}(\mathbf{u}W \mathbf{v}) =
  \mathbf{u}' \mathbf{v}'.
```

::: .example
**Example**  
Write two functions `{jl} weight_gradients` and `{jl} bias_gradients` which compute the derivatives with respect to $W\_j$ and $\mathbf{b}\_j$ of $C\_i(N(\mathbf{x\_i}))$. 
:::

[Continue](btn:next)

---
> id: step-julia-compute-gradients

*Solution*. In each case, we calculate the derivative of the map to the next node (either $W\_j \mapsto W\_j \mathbf{x} + \mathbf{b}\_j$ or $\mathbf{b} \mapsto W\_j \mathbf{x} + \mathbf{b}\_j$) and left-multiply by the derivative of the cost function with respect to the value at that node. The derivative of $W\_j \mathbf{x} + \mathbf{b}\_j$ with respect to $\mathbf{b}\_j$ is the identity matrix, and by Exercise <a name=exer:diff-mat></a>, differentiating $W \mathbf{v}$ with respect to $W$ and left-multiplying by $\mathbf{u}$ yields $\mathbf{u}' \mathbf{v}'$: 

    pre(julia-executable)
      | function weight_gradients(N::NeuralNet,vectors,grads)
      |     [grads[purplenode(j)]' * vectors[greennode(j)]' for j=1:length(N.maps)]
      | end
      | 
      | function bias_gradients(N::NeuralNet,vectors,grads)
      |     [grads[purplenode(j)]' for j=1:length(N.maps)]
      | end
      |   

We are now set up to train the neural network. 

[Continue](btn:next)

---
> id: step-train-neural-net
 
::: .example
**Example**  
Write a function `{jl} train` which performs stochastic gradient descent: for a randomly chosen subset of the training set, determine the average desired change in weights and biases to reduce the cost function. Update the weights and biases accordingly and perform a specified number of iterations. 

Your function should take 7 arguments: (1) desired architecture, (2) the activation function $K$, (3) the derivative $\dot K$ of the activation function $K$, (4) an array of training observations, (5) the batch size (the number of observations to use in each randomly chosen subset used in a single stochastic gradient descent iteration), (6) the learning rate $\epsilon$, and (7) the desired number of stochastic gradient descent iterations. 
:::


*Solution*. We write a function which calculates the average suggested changes in the weights and biases and call it from inside the `{jl} train` function. 

    pre(julia-executable)
      | function averageweightΔ(N::NeuralNet,observations,batch,ϵ)
      |     arch = architecture(N)
      |     layers = length(arch)-1
      |     sum_Δweight = [zeros(arch[i+1],arch[i]) for i=1:layers]
      |     sum_Δbias = [zeros(arch[i+1]) for i=1:layers]
      |     for k in batch
      |         x, y = observations[k]
      |         vectors = forwardprop(N,x)
      |         grads = backprop(N,vectors,y)
      |         ΔWs = -ϵ*weight_gradients(N,vectors,grads)
      |         Δbs = -ϵ*bias_gradients(N,vectors,grads)
      |         for i=1:layers
      |             sum_Δweight[i] += ΔWs[i]
      |             sum_Δbias[i] += Δbs[i]
      |         end
      |     end
      |     (sum_Δweight, sum_Δbias) ./ length(batch)
      | end
      |   
 
 Now we can write `{jl} train`. We initialize the biases to $0.1$, and the affine map entries are sampled independently from the standard normal distribution. 

    pre(julia-executable)
      | function train(arch,K,K̇,observations,batchsize,ϵ = 0.1,iterations=1000)
      |     random_maps = [AffineMap(randn(arch[i+1],arch[i]),
      |                              fill(0.1,arch[i+1])) for i=1:length(arch)-1]
      |     N = NeuralNet(random_maps,K,K̇)
      |     for i=1:iterations
      |         batch = sample(1:length(observations),batchsize)
      |         meanΔweight, meanΔbias = averageweightΔ(N,observations,batch,ϵ)
      |         N = NeuralNet([AffineMap(A.W .+ ΔW, A.b .+ Δb)
      |                        for (A,ΔW,Δb) in zip(N.maps,meanΔweight,meanΔbias)],K,K̇)
      |     end
      |     N
      | end
      | 

 
::: .example
**Example**  
Try training your model on some data which are sampled by taking $\mathbf{X}$ uniform in the unit square and setting $Y =
  1-|\mathbf{X}|^2$. 
:::

[Continue](btn:next)

---
> id: step-neural-net-see-result
 
*Solution*. We begin by defining the ReLU activation and a cost function. 

    pre(julia-executable)
      | K(x) = x > 0 ? x : 0
      | K̇(x) = x > 0 ? 1 : 0 
      | cost(N::NeuralNet,observations) = mean(norm(N(x)-y)^2 for (x,y) in observations)

Next, we sample our data. 

    pre(julia-executable)
      | using Random; Random.seed!(123)
      | xs = [rand(2) for i=1:1000]
      | ys = [[1-norm(x)^2] for x in xs]
      | sample = collect(zip(xs,ys))

 Then we choose an architecture, a batch size, and a learning rate, and we train our model on the data: 

    pre(julia-executable)
      | arch = [2,5,1]
      | batchsize = 100
      | ϵ = 0.005
      | N = train(arch, K, K̇, sample, batchsize, ϵ, 10_000)

 Finally, we inspect the result. 

    pre(julia-executable)
      | cost(N,observations) # returns 0.00343
      | xgrid = 0:1/2^8:1
      | ygrid = 0:1/2^8:1
      | zs = [first(N([x,y])) for x=xgrid,y=ygrid]
      | using Plots; 
      | surface(xgrid,ygrid,zs)

[Continue](btn:next)

---
> id: step-neural-net-animation

    figure
      img(src="images/nn-animation.gif" width=240)

We can see that the resulting graph of $N$ fits the points reasonably well. We can see that the graph is piecewise linear, with the creases between the linear pieces corresponding to points where of the affine maps in the net returns zero.

---
> id: dimension-reduction
## Dimension Reduction

Real-world data sets typically have many more than 2 or 3 features, which rules out direct use of the visualizations we've used for the examples we've seen so far. However, we can often apply a map from $\mathbb{R}^p$ to a low-dimensional space which preserves much of the structure of the original data set. 

Let's begin with an example where both the original space and the reduced space are low-dimensional. 

::: .example
**Example**  
Finding a map $\phi$ from $\mathbb{R}^2$ to $\mathbb{R}$ such that each point $(x,y)$ shown can be reasonably accurately located if the value of $\phi(x,y)$ is known. You may assume that the coordinates of the 100 points are stored in a $100 \times 2$ matrix $A$. 

    figure
      img(src="images/pca2d.svg" width=240)
    
:::

[Continue](btn:next)

---
> id: step-pca

*Solution*. Consider the line $y = mx + b$ which, roughly speaking, runs along the primary axis of the ellipse-shaped point cloud. If we know how far along this line one of the points is, then we know pretty accurately where it's located. 

More precisely, for each point, we let $\phi(x,y)$ be the orthogonal projection of $(x,y)$ onto the line $y = mx + b$. We would like for the average squared error associated with the approximation $\phi(x,y) \approx (x,y)$ to be as small as possible. 

We solved a very similar problem when we studied the singular value decomposition: the line through the origin which minimizes the sum of squared distances is the first column of $V$ in the singular value decomposition $U \Sigma V'$ of $A$. 

The problem with applying that idea directly is that the best line clearly does not pass through the origin. To deal with this issue, we find the mean of the coordinates of the points and subtract it from the coordinates of each point. Then the transformed point cloud will be centered at the origin, and we can perform SVD on this new matrix to identify the line which minimizes the sum of squared distances to the points. Once the best line's unit vector $\mathbf{v}$ is known, we can determine for each point how far along the line its projection is by taking its dot product with $\mathbf{v}$. In other words, we can project all of the points onto $\mathbb{R}^1$ by right-multiplying the matrix $A$ by $\mathbf{v}$. 

The idea we developed in this example is called **principal component analysis**. We subtract off the means to center the point cloud, apply the singular value decomposition, and consider the first $k$ columns of the resulting $V$ matrix (these columns are called the **principal components** of the feature matrix). The desired dimension reduction map from $\mathbb{R}^p$ to $\mathbb{R}^k$ is represented by the matrix `{jl} V[:,1:k]'`. 

[Continue](btn:next)

---
> id: step-pca-on-mnist
 
::: .example
**Example**  
Apply principal component analysis to project the handwritten digit images in the MNIST dataset to the plane. 
:::

[Continue](btn:next)

---
> id: step-pca-on-mnist-sol

*Solution*. We begin by loading the dataset and reshaping the training data feature matrix. 

    pre(julia-executable)
      | using MLDatasets, Images, Plots
      | features, labels = MNIST.traindata(Float64)
      | A = reshape(features[:],28^2,60_000)'

Next, we define a custom function for displaying images. This function accepts a vector of length $28^2 = 784$, it reshapes the entries into a square, and it returns an array of colors for display. If some of the components are negative, then negative and positive values are represented in different colors (red and blue, respectively). Otherwise, the image is displayed in grayscale. 

    pre(julia-executable)
      | function imshow(v)
      |   if any(v .< 0)
      |       (x -> x > 0 ? RGB(x,0,0) : RGB(0,0,-x)).(reshape(v./maximum(abs.(v)),(28,28))')
      |   else
      |       Gray.(reshape(v./maximum(abs.(v)),(28,28))')
      |   end
      | end

To perform principal component analysis, we take the column-wise mean with `{jl} mean(A,dims=1)` and subtract it from the matrix before performing the singular value decomposition. 

    pre(julia-executable)
      | U, Σ, V = svd(A .- mean(A,dims=1))

 We can see the first principal component with `{jl} imshow(V[:,1])`, and similarly for the second principal component

    figure
      center
        .row
          .column(width=150): img(src="images/mnist-pc1.png" width=140)
          .column(width=150): img(src="images/mnist-pc2.png" width=140)
        p.caption The first two principal components. 

Finally, we project onto each of the first two principal components and make a scatter plot of the results. We set the marker size (`{jl} ms`) and the marker stroke width (`{jl} msw`) so we can see the colors of the points more clearly. 

    pre(julia-executable)
      | n = 5000
      | scatter(A[1:n,:]*V[:,1],
      |         A[1:n,:]*V[:,2],
      |         group=labels[1:n],
      |         ms=2,
      |         msw=0)


We can see that some digits cluster apart from the other digits (like `{jl} 1`), while others remain heavily overlapping. 

[Continue](btn:next)

---
> id: t-sne
### t-SNE

In this section we discuss a popular dimensionality reduction technique which is often more effective than principal component analysis. The idea is to choose a map which attempts to preserve *pairwise similarity* of the data points. The version we present is called $t$-SNE, which is short for *$t$-distributed stochastic neighbor embedding.* 

Suppose that $\mathbf{x}\_1, \ldots, \mathbf{x}\_n$ is a set of points in $\mathbb{R}^p$. We begin by fixing a parameter of the model, called the **perplexity** $\rho$. Given $\sigma &gt; 0$, we define 

``` latex
  P_{i,j}(\sigma) = \frac{\operatorname{e}^{-|\mathbf{x}_i -
      \mathbf{x}_j|^2/(2\sigma^2)}}{\sum_{k\neq j} \operatorname{e}^{-|\mathbf{x}_k
      - \mathbf{x}_j|^2/(2\sigma^2)}}
```

for $i\neq j$, and $P\_{i,i}(\sigma) = 0$ for all $1 \leq i \leq n$. This quantity measures the similarity of distinct points $\mathbf{x}\_i$ and $\mathbf{x}\_j$: if $\mathbf{x}\_i$ is closer to $\mathbf{x}\_j$ (compared to how close other points are to $\mathbf{x}\_j$), then $P\_{i,j}$ is closer to 1. If $\mathbf{x}\_i$ is far from $\mathbf{x}\_j$, then $P\_{i,j}$ is close to 0. 

 
::: .example

    img(src="images/tsne.svg" width=200 style="float: right;")

**Example**  
Consider the points $\mathbf{x}\_1 = [0,0]$, $\mathbf{x}\_2 = [0,1]$, $\mathbf{x}\_3 = [1,1]$, and $\mathbf{x}\_4 = [4,0]$. Find $P\_{2,1}(\sigma)$ for each value of $\sigma$ in $\left\\{\frac{1}{4},1,2,100\right\\}$. 
:::

[Continue](btn:next)

---
> id: step-tsne-exercise 

*Solution*. We define a function to compute $P\_{i,j}(\sigma)$. 

    pre(julia-executable)
      | x = [[0,0],[0,1],[1,1],[4,0]]
      | f(x,y,σ) = exp(-norm(x-y)^2/(2σ^2))
      | P(x,i,j,σ) = f(x[i],x[j],σ) / sum(f(x[k],x[j],σ) for k=1:length(x) if k ≠ j)

We find that $P\_{2,1}(0.25) = 0.9997$, $P\_{2,1}(1) = 0.6222$, $P\_{2,1}(2) = 0.4912$, and $P\_{2,1}(100) = 0.3334$. 

We can see from Example <a name=exam:tsne></a> that $\sigma$ is the unit with respect to which proximity is being measured. If $\sigma$ is very large, then all of the points are effectively close to $\mathbf{x}\_1$, so the values of $P\_{i,1}(\sigma)$ are approximately equal for $i \in \\{2,3,4\\}$. If $\sigma$ is very small, then $P\_{i,1}(\sigma)$ is close to 1 for $\mathbf{x}\_1$'s nearest neighbor and is close to 0 for the other points. 

For each $j$ from 1 to $n$, we define $\sigma\_j$ to be the solution $\sigma$ of the equation 

``` latex
2^{-\sum_{i : i \neq j} P_{i,j}(\sigma) \log_2 P_{i,j}(\sigma)} = \rho. 
```

This ensures that the function $i\mapsto P\_{i,j}(\sigma\_j)$ avoids the extremes of too heavily concentrating its values on a small number of $i$'s or spreading out its values too evenly across all of the $i$'s. 

[Continue](btn:next)

---
> id: step-tsne-symmetrized

We also define the following symmetric version of the $P\_{i,j}$'s: $p\_{i,j} = \frac{1}{2n}(P\_{i,j}(\sigma\_j) + P\_{j,i}(\sigma\_i))$. 

We will denote by $\mathbf{y}\_1, \ldots, \mathbf{y}\_n$ the locations of the *images* of the sample points under some map to a Euclidean space of a lower dimension $k$ (typically 2 or 3). We define 

``` latex
  q_{i,j} = \frac{(1 +
    |\mathbf{y}_i-\mathbf{y}_j|^2)^{-1}}{\sum_{k\neq j}(1 +
    |\mathbf{y}_k-\mathbf{y}_j|^2)^{-1}}. 
```

These quantities measure the pairwise similarity of the points $\mathbf{y}\_1, \ldots, \mathbf{y}\_n$, analogously to $P\_{i,j}$. We measure how well the similarities $p\_{i,j}$ match the similarities $q\_{i,j}$ using the cost function 

``` latex
  C(\mathbf{y}_1, \ldots, \mathbf{y}_n) =
  \sum_{(i,j) : i \neq j} p_{i,j} \log_2 \frac{p_{i,j}}{q_{i,j}}.
```

Finally, we use gradient descent to find values for the image points $\mathbf{y}\_1, \ldots, \mathbf{y}\_n$ which minimize this cost function. 

::: .example
**Example**  
Use the Julia package `{jl} TSne` to plot a two-dimensional $t$-SNE embedding of the first 2000 images in the MNIST data set. 
:::

[Continue](btn:next)

---
> id: step-tsne-real-example

*Solution*.  We call the `{jl} tsne` function on the first $k = 2000$ rows of the MNIST matrix `{jl} A` defined above. 

    pre(julia-executable)
      | using TSne, Random
      | Random.seed!(123)
      | n = 2000
      | Y = tsne(A[1:n,:])
      | scatter(Y[:,1],Y[:,2],
      |         group=labels[1:n],
      |         ms=2,msw=0)
