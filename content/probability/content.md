
# Probability

> id: intro
## Introduction

When we do data science, we begin with a data set and work to gain insights about the process that generated the data. Crucial to this endeavor is a robust vocabulary for discussing the behavior of data-generating processes. 

It is helpful to initially consider data-generating processes whose randomness properties are specified completely and precisely. The study of such processes is called **probability**. For example, "What's the probability that I get at least 7 heads in 10 independent flips of a fair coin?" is a probability question, because the setup is fully specified: the coins have exactly 50% probability of heads, and the different flips do not affect one another. 

The question of whether the coins are really fair or whether the flips are really independent will be deferred to our study of *statistics*. In statistics, we will have the *outcome* of a random experiment in hand and will be looking to draw inferences about the unknown *setup*. Once we are able to answer questions in the "setup $\rightarrow$ outcome" direction, we will be well positioned to approach the "outcome $\rightarrow$ setup" direction. 

::: .exercise
**Exercise**  

Select the questions below which are *probability* questions (as opposed to statistics questions). 

  x-picker.list 
      .item On days when the weather forecast says that the chance of rain is 10%, it actually rains only about 5% of the time. What is the probability of rain on a day when the weather forecast says "10% chance of rain"? 
      .item If it will rain today with probability 40%, what is the probability that it will *not* rain today?
      .item If you roll two fair dice, what is the average total number of pips showing on the top faces? 
      .item Your friend rolled 12 on each of the first three rolls of the board game they're playing with you. What is the probability that the dice they're using are weighted in favor of the 6's? 

:::

 

*Solution*. The first question is **statistics**. We don't know the probability of rain, and we are trying to draw an inference about it based on observed samples. 

 The second question is a **probability** question. We are given the setup and asked a question which assumes its validity. 

 The third question is also a **probability** question. We're told the dice are fair, and we're asked a question about the outcome of the rolls. 

 The third question is a **statistics** question, since the outcome of the rolls is known, and the probabilities are in question. 

 
---
> id: counting
## Counting
 
We begin our study of probability with a closely related skill: *counting*. 

::: .theorem
**Theorem** (Fundamental principle of counting)  
If one experiment has $m$ possible outcomes, and if a second experiment has $n$ possible outcomes for each of the outcomes in the first experiment, then there are $mn$ possible outcomes for the pair of experiments. 
:::

::: .example
**Example**  
If you flip a coin and roll a die, there are $2 \times 6 = 12$ possible flip-roll pairs. 
:::

One simple way to prove the fundamental theorem of counting is to observe that the possible outcomes for the pair of experiments can be arranged to form an $m\times n$ rectangle: 

    p
      | \begin{equation} \renewcommand{\arraystretch}{1.5}
      |   \begin{array}{c|cccccc}
      |     & 1 & 2 & 3 & 4 & 5 & 6 \\ \hline
      |   \texttt{H} & (\texttt{H},1) & (\texttt{H},2) & (\texttt{H},3) & (\texttt{H},4) & (\texttt{H},5) & (\texttt{H},6) \\
      |   \texttt{T} & (\texttt{T},1) & (\texttt{T},2) & (\texttt{T},3) & (\texttt{T},4) & (\texttt{T},5) & (\texttt{T},6)
      |   \end{array}
      | \end{equation}
      | 
 
The fundamental principle of counting may be used to determine the number of ordered $r$-tuples of distinct elements of $\\{1,2,\ldots
n\\}$: we begin forming an $r$-tuple by selecting any one of the $n$ possibilities for the first entry. Given any of the choices for the first entry, there are $n-1$ choices for the second entry. By the fundamental principle of counting, there are $n(n-1)$ choices for the first two entries. Continuing in this way, we find that there are 

    p
      | \begin{equation}
      |   n(n-1)(n-2) \cdots (n-r+1)
      | \end{equation}
      |
       
choices for filling in all $r$ entries. 

::: .example
**Example**  
How many three-digit positive integers have distinct digits? 

Note: a positive integer must be between 100 and 999 (inclusive) to count as a three-digit integer. 
:::

 

*Solution*. There are 9 choices for the first digit, then for any of those choices there are 9 choices for the second digit. Finally, given any pair of digits in the first two positions, there are 8 choices for the last entry. So there are $9\cdot 9 \cdot 8  = \boxed{648}$ choices in total. 

 

The number of $r$-element subsets of an $n$-element set is denoted $\binom{n}{r}$. Expressions of the form $\binom{n}{r}$ are called **binomial coefficients** 

::: .example
**Example**  
We have $\binom{4}{3} = 4$, since there are four ways to choose a 3-element subset of a 4-element set. The sets 

    p
      | \begin{equation}
      |     \{1,2,3\}, \{1,2,4\}, \{1,3,4\}, \{2,3,4\}
      |   \end{equation}
      | 
      
are all of the 3-element subsets of $\\{1,2,3,4\\}$. 
:::

 

 To work out a general procedure for evaluating $\binom{n}{r}$, we may first count the number of $r$-tuples and then account for all of the repeats. For example, if $r = 3$, then the tuples 

    p
      | \begin{equation}
      |   (1,2,3), (1,3,2), (2,1,3), (2,3,1), (3,1,2), (3,2,1)
      | \end{equation}
      | 
 should collectively contribute 1, rather than 6, to the total count. Since every set of $r$ elements corresponds to $r(r-1)(r-2)\cdots (2)(1)$ $r$-tuples of distinct elements, we divide the number of $r$-tuples by this number to obtain an expression for $\binom{n}{r}$: 

    p
      | \begin{equation}
      |   \binom{n}{r} = \frac{n(n-1)(n-2)\cdots (n-r+1)}{r(r-1)(r-2)\cdots
      |     (2)(1)}.
      | \end{equation}
      | 
 We often abbreviate the product $r(r-1)(r-2)\cdots (2)(1)$ as $r!$. 

::: .exercise
**Exercise**  
Of the 1024 total length-10 strings composed of the symbols _{code.language-python}H_ and _{code.language-python}T_, how many of them have exactly 6 _{code.language-python}T_'s and 4 _{code.language-python}H_'s? (_{code.language-python}HHTHTTTHTT_ is such a string). 
:::

 

*Solution*. For each 6-element subset of the 10 positions in the string, we can place _{code.language-python}T_'s in those six positions and _{code.language-python}H_'s in the remaining positions to get a sequence of the given description. Therefore, there are $\binom{10}{6} = 210$ total strings with exactly 6 _{code.language-python}T_'s. 

 

::: .exercise
**Exercise** (Principle of Inclusion-Exclusion)  
Let $\Omega = \\{0, 1, 2, \cdots, 100\\}$ be the set of natural numbers up to and including $100$. Let $A \subset \Omega$ the subset of integers divisible by $3$, and $B \subset \Omega$ the subset of integers divisible by $5$. 
* Compute $|A|$. 
* Compute $|B|$. 
* Compute $|A \cap B|$. 
* Explain why $|A \cup B| = |A| + |B| - |A \cap B|$. 
* Use the prior steps to find $|A \cup B|$. 

:::

    .quill#editor
      p
        = 'Use [...document.querySelector(".ql-editor").querySelectorAll("p")].map(p => p.textContent) to pull out each paragraph on a different line'

*Solution*.  
* There are $33$ multiples of $3$ between $1$ and $100.$ Including zero in the count as well, we get $|A| = 34.$ 


* There are $20$ multiples of $5$ between $1$ and $100.$ Adding 1 to account for zero gives $|B| = 21.$ 


* Elements of $A \cap B$ are zero and multiples of $15$ in $\Omega.$ It thus follows that $|A \cap B| = 7.$ 


*  $|B| - |A \cap B|$ gives the numer of elements that are in $B$ but not in $A.$ Adding $|A|$ gives the total number of elements in $A \cup B.$ 


* Using values calculated above, we have $|A\cup B| = 34 + 21 - 7 = 48.$



 

::: .exercise
**Exercise**  
How many subsets does the English alphabet have? For example, $\\{\mathrm{a}, \mathrm{r}, \mathrm{w}\\}$ and $\\{\mathrm{d},
  \mathrm{g}, \mathrm{m}, \mathrm{x}, \mathrm{y}, \mathrm{z}\\}$ are two such subsets. 
:::

 

*Solution*. There are $2^{26} = 67,108,864$ subsets of the alphabet, because we can form a subset by choosing for each letter whether to include it or exclude it. By the fundamental principle of counting, the number of ways to make these 26 choices is $2 \times 2 \times \cdots
  \times 2 = 2^{26}$. 

 

::: .exercise
**Exercise**  
Expand the algebraic expression $(x+y)^3$. Show that the coefficients of this expansion are given by the binomial coefficients of the form $\binom{3}{r}$ where $r$ ranges from 0 to 3: 

    p
      | \begin{equation}
      |     (x+y)^3 = \binom{3}{0}x^3y^0 + \binom{3}{1}x^2y^1 +
      |     \binom{3}{2}x^1y^2 + \binom{3}{3}x^0y^3
      |   \end{equation}
      | 
 Write a corresponding expansion for $(x+y)^4$. 
:::

 

*Solution*. The first equation holds since both sides work out to $(x+y)^3 = x^3
  + 3x^2y + 3xy^2 + y^3$. The second holds since both sides are equal to 

    p
      | \begin{equation}
      |     (x+y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4.
      |   \end{equation}
      | 
 

 Generally, we have 

    p
      | \begin{equation}
      |     (x+y)^n = \binom{n}{0}x^ny^0 + \binom{n}{1}x^{n-1}y^1 + \cdots +
      |     \binom{n}{n-1}x^1y^{n-1} + \binom{n}{n}x^0y^3
      |   \end{equation}
      | 
 because a term of the form $x^{n-r}y^r$ is formed when expanding the product $(x+y)(x+y)\cdots(x+y)$ if and only if the $x$ was selected from $n-r$ of the $(x+y)$ factors and $y$ was selected from the remaining $r$ factors. This can happen in $\binom{n}{r}$ ways, so the coefficient of $x^{n-r}y^r$ is $\binom{n}{r}$. 

 
---
> id: probability-models
## Probability Models
 
In this section we will learn how to mathematically represent and reason about randomness. The benefit of having an explicit mathematical model is that the intuitive approach to probability has serious limitations when analyzing tricky or sophisticated phenomena. Consider the following example. 

::: .example
**Example** (Exchange paradox)  
Two envelopes are placed on the table in front of you, containing $X$ and $2X$ dollars for some unknown positive number $X$(you don't know which envelope is which). You choose one of the envelopes and discover \$10 inside. You have a choice to switch envelopes; should you? 

On one hand, your chance of getting the better envelope was 50% to begin with, and opening the envelope did not provide any information on whether you succeeded. From this perspective, you should be indifferent to switching. 

On the other hand, you might reason that the unopened envelope contains either \$20 or \$5, with a 50% chance of each. So on average the other envelope contains \$12.50. from this perspective, you should switch. 

:::

How can we adjudicate between these contradictory analyses? We need a **model** for the situation---that is, a mathematical object together with a way to translate questions about the situation to unambiguous questions about the object. 

Let's develop a model for the following simple experiment: **two flips of a fair coin**. The first thing to observe about this experiment is that we can write down all of the possible outcomes: 

    p
      | \begin{equation}
      |   \{(\texttt{H},\texttt{H}), (\texttt{H},\texttt{T}),
      |   (\texttt{T},\texttt{H}), (\texttt{T},\texttt{T})\}.
      | \end{equation}
      | 
      
This set clearly bears an important relationship to the experiment; let's call it the **sample space** and denote it as $\Omega$. 

Furthermore, we need a way to specify how likely each outcome is to occur. It seems reasonable in this scenario to believe that each of the four outcomes is equally likely, in which case we should assign a probability value of $\frac{1}{4}$ to each outcome. The mathematical object which assigns a particular value to each element in a set is a *function*, so we will call this assignment of probability values the **probability mass function** and denote it as $m$. So all together, we have 
* the sample space $\Omega$, which contains the possible outcomes of the experiment, and 
* the probability mass function $m$ from $\Omega$ to $[0,1]$ which indicates the probability of each outcome in $\Omega$. 

The pair $(\Omega,m)$ is already enough to specify the experiment, but we need a few more translations for the model to be useful: in the context of the experiment, an *event* is a predicate whose occurrence can be determined based on the outcome. For example, "the first flip turns up heads" is an event. 

::: .exercise
**Exercise**  

Identify a mathematical object in our model $(\Omega, m)$ which can be said to correspond to the phrase "the first flip turns up heads". Which of the following is true of this object? 

    x-picker.list
      .item It is one of the values of the function $m$
      .item It is the set $\Omega$
      .item It is a subset of $\Omega$
      .item It is one of the elements of $\Omega$

:::

 

*Solution*. The outcomes $(\texttt{H},\texttt{H})$ and $(\texttt{H},\texttt{T})$ are the ones which satisfy the condition "the first flip turns up heads". Therefore, the event corresponds to a **subset** of $\Omega$, namely the subset $\\{(\texttt{H},\texttt{H}), (\texttt{H},\texttt{T})\\}$. 


::: .exercise
**Exercise**  
Explain how to obtain the probability of an event from the probability mass function. 

 For concreteness, consider $\Omega = \\{(\texttt{H},\texttt{H}), (\texttt{H},\texttt{T}),
  (\texttt{T},\texttt{H}), (\texttt{T},\texttt{T})\\}$, a probability mass function which assigns mass $\frac{1}{4}$ to each outcome, and the event $\\{(\texttt{H},\texttt{H}), (\texttt{H},\texttt{T})\\}$. 
:::


*Solution*. The probability of the event $\\{(\texttt{H},\texttt{H}),
  (\texttt{H},\texttt{T})\\}$ is the **sum** of the probabilities of the two outcomes in the event, namely $\frac{1}{4} + \frac{1}{4}
  = \frac{1}{2}$. 

In general, we sum all of the probability masses of the outcomes in the event to find the probability of the event. 

Some common terms for combining and modifying predicates include **and**, **or**, and **not**. For example, we might be interested in the event "the first flip comes up heads and the second does not come up heads, or the first flip comes tails". Each of these corresponds to one of the set-theoretic operations we have learned: 

::: .exercise
**Exercise**  

Match each term to its corresponding set-theoretic operation. Assume that $E$ and $F$ are events. 

For concreteness, you can think about the events "first flip comes up heads" and "second flip comes up heads" for the two-flip probability space we've been considering. 

# TODO: translate this table to a Mathigon matching question.
        
:::

 

*Solution*. The event that both $E$ and $F$ occur is $E \cap F$, since $E \cap
  F$ is the set of outcomes in both $E$ and $F$. 

 The event that $E$ does not occur is $E^{\mathsf{c}}$, since the complement of $E$ includes all the outcomes that are not in $E$. 

 The event that either $E$ or $F$ occurs is $E \cup F$, since $E \cup F$ is the set of outcomes which are in either $E$ or $F$. 

 

::: .exercise
**Exercise**  
Suppose a group of $n$ friends enter the lottery. For $i \in \\{1, \dots , n\\}$ let $E\_i$ be the event that the $i$th friend wins. Express the following events using set notation. 
* At least one friend loses. 
* All friends win. 
* At least one friend wins. 
:::


*Solution*.  
* The event that at least one friend loses is $\bigcup\_{i = 1}^n E\_i^c.$ 
* The event that all friends win is $\bigcap\_{i=1}^n E\_i.$ 
* The event that at least one friend wins is $\bigcup\_{i=1}^n E\_i.$



Since events play a more prominent role than individual outcomes in discussions of probability, we will demote the probability mass function to auxiliary status and instead focus on the function $\mathbb{P}$ from the set of *events* to $[0,1]$ which assigns to each event the total probability mass therein. For example, for our two-flip experiment, the function $\mathbb{P}$ satisfies 

    p
      | \begin{align*}
      |   \mathbb{P}(\{(\texttt{H},\texttt{T})\}) &= \tfrac{1}{4} \\\\ 
      |   \mathbb{P}(\{\}) &= 0 \\\\ 
      |   \mathbb{P}(\{(\texttt{H},\texttt{H}), (\texttt{H},\texttt{T}),
      |   (\texttt{T},\texttt{T})\}) &= \tfrac{3}{4} \\\\ 
      |   \mathbb{P}(\Omega) &= 1,
      | \end{align*}
      | 
 and so on. 

::: .exercise
**Exercise**  
What is the cardinality of the domain of the function $\mathbb{P}$ if 

    p
      | \begin{equation}
      |     \Omega = \{(\texttt{H},\texttt{H}), (\texttt{H},\texttt{T}),
      |   (\texttt{T},\texttt{H}), (\texttt{T},\texttt{T})\}?
      | \end{equation}
      | 

:::

 

*Solution*. The domain of $\mathbb{P}$ is the set of subsets of $\Omega$. Since $\Omega$ has 4 elements, there are $2 \times 2 \times 2 \times 2 = 16$ elements in the domain of $\mathbb{P}$. 

 

 We call $\mathbb{P}(E) = \sum\_{\omega \in E} m(\omega)$ the **probability measure** associated with the probability mass function $m$. The pair $(\Omega, \mathbb{P})$ is called a **probability space**. Probability measures satisfy the following properties. 

::: .theorem
**Theorem** (Properties of a probability measure)  

 If $(\Omega,\mathbb{P})$ is a probability space, then 
 
*  $\mathbb{P}(\Omega) = 1$—"something has to happen" 
*  $\mathbb{P}(E) \geq 0$ for all $E \subset \Omega$—"probabilities are non-negative" 
*  $\mathbb{P}(E \cup F) = \mathbb{P}(E) + \mathbb{P}(F)$**if** $E$ and $F$ are mutually exclusive events—"probability is additive" 

:::


 These are the fundamental properties of a probability measure on a finite sample space $\Omega$, in the sense that functions from the set of events to $[0,1]$ satisfying the above properties are in one-to-one correspondence with probability mass functions. 

 One further important property is a consequence of the properties in Theorem <a name=th:probproperties></a>. It says that if $B$'s occurrence implies $A$'s occurrence, then $\mathbb{P}(B) \leq \mathbb{P}(A)$. 

::: .exercise
**Exercise** (Monotonicity)  
Use the additivity property and the fact that $A = (A \cap B) \cup (A \cap B^{\mathsf{c}})$ to show that if $B \subset A \subset \Omega,$ then $\mathbb{P}(B) \leq \mathbb{P}(A).$
:::


*Solution*. We have $\mathbb{P}(A) = \mathbb{P}(A \cap B) + \mathbb{P}(A \cap B^c)$ by additivity. Since $A \cap B = B$ and probabilities are non-negative, it follows that 

    p
      | \begin{equation}\mathbb{P}(A) = \mathbb{P}(B) + \mathbb{P}(A \cap B^c) \geq \mathbb{P}(B) \end{equation}
      | 
 as required. 

 

::: .exercise
**Exercise** (Subadditivity)  
Show that $\mathbb{P}(A \cup B) \leq \mathbb{P}(A) + \mathbb{P}(B)$ for all events $A$ and $B$. 

 Use this property to show that if $A$ occurs with probability zero and $B$ occurs with probability zero, then the probability that $A$ *or* $B$ occurs is also zero. 
:::

 
*Solution*. Define $\tilde{A}$ to be the set of $\omega$'s which are in $A$ but not $B$, and let $\tilde{B}$ be the set of $\omega$'s which are in $B$ but not $A$. Then 

    p
      | \begin{equation}
      |       \mathbb{P}(A \cup B) = \mathbb{P}(\tilde{A} \cup \tilde{B} \cup (A \cap B)) =
      |       \mathbb{P}(\tilde{A}) + \mathbb{P}(\tilde{B}) + \mathbb{P}( A \cap B),
      |     \end{equation}
      | 
 since $\tilde{A}$, $\tilde{B}$, and $A \cap B$ are disjoint and together make up $A \cup B$. Furthermore, since $\mathbb{P}(A) =
    \mathbb{P}(\tilde{A}) + \mathbb{P}(A \cap B)$ and similarly for $B$, we have 

    p
      | \begin{equation}
      |       \mathbb{P}(A \cup B) = \mathbb{P}(A) - \mathbb{P}(A \cap B) + \mathbb{P}(B) - \mathbb{P}(A\cap B) + \mathbb{P}(A
      |       \cap B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B) \leq \mathbb{P}(A) + \mathbb{P}(B),
      |     \end{equation}
      | 
 as desired. 

 We have $\mathbb{P}(A \cup B) \leq \mathbb{P}(A) + \mathbb{P}(B) \leq 0 + 0 = 0$ if both $A$ and $B$ have probability zero, so $\mathbb{P}(A \cup B) = 0$ in that case. 

 

 If $\Omega$ is countably infinite, then the additivity property extends to *countable additivity*: If $E\_1, E\_2, \ldots$ is a pairwise disjoint sequence of events, then $\mathbb{P}(E\_1 \cup E\_2 \cup \cdots) = \mathbb{P}(E\_1) + \mathbb{P}(E\_2) + \cdots$. 

::: .example
**Example** (Countable additivity)  
Suppose that $\Omega$ is the set of ordered pairs of positive integers, with probability mass $m((i,j)) = 2^{-i-j}$ at each pair $(i,j)$. Show that the probability of the event $\\{(i,j) \in \Omega \,:\, i > 2\\}$ is equal to the sum of the probabilities of the events $\\{(i,j) \in \Omega \,:\, i = t\\}$ as $t$ ranges over $\\{3, 4, 5, \ldots\\}$
:::

 

*Solution*. The probability of the event $\\{(i,j) \in \Omega \,:\, i > 2\\}$ is the sum of the probability masses of all the points in $\Omega$ which lie to the right of the line $x = 2$. The probability of the event $\\{(i,j) \in \Omega \,:\, i = t\\}$ is the sum of the probability masses of all of the points on the vertical line $x = t$. So summing these probabilities over each $t$ value in $\\{3, 4, 5, \ldots\\}$ amounts to totalling the probability mass right of the line $x = 2$ in columns. Since positive quantities may be summed in any order, this column-wise sum will indeed yield the total mass right of the line $x = 2$. 

 

::: .exercise
**Exercise**  
Show that the function $m((i,j)) = 2^{-i-j}$ sums to 1 as $(i,j)$ ranges over the set of ordered pairs of positive integers. 
:::

 

*Solution*. The sum along the first column is $1/4 + 1/8 + 1/16 + \cdots =
    1/2$, and the sum along the second column is $1/8 + 1/16 + 1/32 +
    \ldots = 1/4$, and so on. Summing these column sums, we get $1/2 +
    1/4 + 1/8 + \cdots = 1$, as desired. 

 
---
>id: random-variables
## Random variables
 

 An event is a binary function of the outcome of an experiment: based on the outcome, we can say that the event occurred or didn't occur. Sometimes, however, we are interested in specifying *real*-valued information based on the outcome of the experiment. 

 For example, suppose that you will receive a dollar for each head flipped in our two-fair-flips experiment. Then your payout $X$ might be 0 dollars, 1 dollar, or 2 dollars. Because $X$ is a variable whose value is random (that is, dependent on the outcome of a random experiment), it is called a **random variable**. A random variable which takes values in some finite or countably infinite set (such as $\\{0,1,2\\}$, in this case) is called a **discrete** random variable. 

 Since a random variable associates a real number to each outcome of the experiment, in mathematical terms a random variable is a *function* from the sample space to $\mathbb{R}$. Using function notation, the dollar-per-head payout random variable $X$ satisfies 

    p
      | \begin{equation}\begin{align*}
      |     X((\texttt{T}, \texttt{T})) &= 0, \\
      |     X((\texttt{H}, \texttt{T})) &= 1, \\
      |     X((\texttt{T}, \texttt{H})) &= 1, \text{ and} \\
      |     X((\texttt{H}, \texttt{H})) &= 2.
      |   \end{align*}\end{equation}
      | 
      
 We can combine random variables using any operations or functions we can use to combine numbers. For example, suppose $X\_1$ is defined to be the number of heads in the first flip---that is, 

    p
      | \begin{equation}\begin{align*}
      |     X_1((\texttt{T}, \texttt{T})) &= 0 \\
      |     X_1((\texttt{H}, \texttt{T})) &= 1 \\
      |     X_1((\texttt{T}, \texttt{H})) &= 0 \\
      |     X_1((\texttt{H}, \texttt{H})) &= 1,
      |   \end{align*}\end{equation}
      | 
      
 and $X\_2$ is defined to be the number of heads in the second flip. Then the random variable $X\_1 + X\_2$ maps each $\omega \in \Omega$ to $X\_1(\omega) + X\_2(\omega)$. Note that this random variable is equal to $X$, since $X(\omega) = X\_1(\omega) + X\_2(\omega)$ for every $\omega \in \Omega$. 

::: .exercise
**Exercise**  


 Suppose that the random variable $X$ represents a fair die roll and $Y$ is defined to be the remainder when $X$ is divided by $4$. 

 Define a six-element probability space $\Omega$ on which $X$ and $Y$ may be defined, and find $\mathbb{P}(X - Y = k)$ for every integer value of $k$. 
:::

 

*Solution*. We set $\Omega = \\{(1, 1), (2, 2), (3, 3), (4, 0), (5, 1), (6, 2)\\}.$ From the sample space, we see that for any integer value $k,$ we have 

    p
      | \begin{equation}
      |       \mathbb{P}(X - Y = k) = \begin{cases}
      |         \frac{1}{2} & \text{if} \; k \in \{0, 4\} \\
      |         0 & \text{otherwise.}
      |       \end{cases}
      |     \end{equation}
      | 


 

::: .exercise
**Exercise**  


 Consider a sample space $\Omega$ and an event $E \subset
    \Omega$. We define the random variable $\mathbf{1}\_{E} : \Omega
    \rightarrow \\{0,1\\}$ by 

    p
      | \begin{equation}
      |       \mathbf{1}_{E} (\omega) =
      |       \begin{cases}
      |         1 & \text{if} \: \omega \in E \\
      |         0 & \text{otherwise}.
      |       \end{cases}
      |     \end{equation}
      | 
      
 The random variable $\mathbf{1}\_{E}$ is called the indicator random variable for $E.$ If $F$ is another event, which of the following random variables are necessarily equal? 
 
    x-picker.list
      .item  $\mathbf{1}\_{E \cap F}$ and $\mathbf{1}\_{E}  \cdot \mathbf{1}\_{F} $
      .item  $\mathbf{1}\_{E \cup F}$ and $\mathbf{1}\_{E} + \mathbf{1}\_{F} $
      .item  $\mathbf{1}\_{E}$ and $1 - \mathbf{1}\_{E^c} $


:::

 

*Solution*.  
* Since $\mathbf{1}\_E \cdot \mathbf{1}\_F = 1$ if and only if $\mathbf{1}\_E = 1$ and $\mathbf{1}\_F = 1,$ we see that $\mathbf{1}\_{E \cap F} = \mathbf{1}\_E \cdot \mathbf{1}\_F.$ 


* Because it is possible to have $\mathbf{1}\_E + \mathbf{1}\_F = 2,$ we cannot have $\mathbf{1}\_{E \cup F} = \mathbf{1}\_E + \mathbf{1}\_F.$ 


* We observe that $1 - \mathbf{1}\_{E^c} = \mathbf{1}\_E$ because $\mathbf{1}\_{E^c} = 0$ if and only if $\mathbf{1}\_E = 1.$


---
> id: probability-distributions
## Probability distributions
 
Given a probability space $(\Omega, \mathbb{P})$ and a random variable $X$, the **distribution** of $X$ tells us how $X$ *distributes* probability mass on the real number line. Loosely speaking, the distribution tells us where we can expect to find $X$ and with what probabilities. 

::: .definition
**Definition** (Distribution of a random variable)  
The distribution (or *law*) of a random variable $X$ is the probability measure on $\mathbb{R}$ which maps a set $A \subset \mathbb{R}$ to $\mathbb{P}(X \in A)$. 
:::

We can think of $X$ as pushing forward the probability mass from $\Omega$ to $\mathbb{R}$ by sending the probability mass at $\omega$ to $X(\omega)$ for each $\omega \in \Omega$. As you can see in Figure <a name=fig:pushforward></a>, the probability masses at multiple $\omega$'s can stack up at the same point on the real line if $X$ maps the $\omega$'s to the same value. 

    center
      img(src="images/distribution" width=240)
      p.caption The distribution of a discrete random variable is the measure on $\mathbb{R}$ obtained by pushing forward the probability masses at elements of the sample space to their locations on the real line. 

::: .exercise
**Exercise**  
A problem on a test requires students to match molecule diagrams to their appropriate labels. Suppose there are three labels and three diagrams and that a student guesses a matching uniformly at random. Let $X$ denote the number of diagrams the student correctly labels. What is the probability mass function of the distribution of $X$? 
:::

*Solution*. 

The number of correctly labeled diagrams is an integer between 0 and 3 inclusive. Suppose the labels are $\mathrm{A},\mathrm{B},\mathrm{C}$, and suppose the correct labeling sequence is $ABC$(the final result would be the same regardless of the correct labeling sequence). The sample space consists of all six possible labeling sequences, and each of them is equally likely since the student applies the labels uniformly at random. So we have 

    p
      | \begin{equation}\begin{align*}
      |       \Omega &= \{\mathrm{ABC}, \mathrm{ACB}, \mathrm{BAC}, \mathrm{BCA}, \mathrm{CAB}, \mathrm{CBA}\}, \\
      |       \{X = 0\} &= \{\mathrm{BCA},\mathrm{CAB}\}, \\
      |       \{X = 1\} &= \{\mathrm{ACB},\mathrm{CBA},\mathrm{BAC}\}, \\
      |       \{X = 2\} &= \{\}, \text{ and} \\
      |       \{X = 3\} &= \{\mathrm{ABC}\}.
      |     \end{align*}\end{equation}
      | 
 The probability mass function of the distribution of $X$ is therefore 

    p
      | \begin{equation}m_X(0) = \frac{1}{3}\end{equation}
      | 
 

    p
      | \begin{equation}m_X(1) = \frac{1}{2}\end{equation}
      | 
 

    p
      | \begin{equation}m_X(2) = 0\end{equation}
      | 
 

    p
      | \begin{equation}m_X(3) = \frac{1}{6}\end{equation}
      | 

All together, we have 

    p
      | \begin{equation}\begin{align*}
      |       m_X(x) =
      |       \begin{cases}
      |         \frac{1}{3}, & \text{if }x = 0  \\
      |         \frac{1}{2}, & \text{if }x = 1 \\
      |         \frac{1}{6}, & \text{if }x = 3 \\
      |         0, & \text{otherwise}.
      |       \end{cases}
      |     \end{align*}\end{equation}
      | 


 

 

 The distribution of a random variable $X$ may be specified by its probability mass function or by its **cumulative distribution function** $F\_X$: 
 
::: .definition
**Definition** (Cumulative distribution function)  
If $X$ is a random variable, then its cumulative distribution function $F\_X$ is the function from $\mathbb{R}$ to $[0,1]$ defined by 

    p
      | \begin{equation}
      |       F_X(x) = \mathbb{P}(X \leq x).
      |     \end{equation}
      | 

:::

 

 

    center
         
    center
      img(src="images/cdf" width=240)
      p.caption A probability mass function $m\_X$ and its corresponding CDF $F\_X$ 

::: .exercise
**Exercise**  
Consider a random variable $X$ whose distribution is as shown in Figure <a name=fig:cdf></a>. Select the true statements. 

    x.picker-list
      .item $\mathbb{P}(-1 < X < 1)$ is greater than $\frac{3}{5}$
      .item $\mathbb{P}(X \geq 2) = 0$
      .item $\mathbb{P}\left(-\frac{1}{2} < X < 0\right)$ is greater than $\frac{1}{100}$
      .item $\mathbb{P}(100X < 1)$ is greater than $\frac{1}{2}$


:::

 

*Solution*. (a) is true, since the CDF goes from about 0.1 at $-1$ to about 0.9 at $+1$. The difference, about 0.8 is larger than 0.6. 

(b) is also true, since there is no probability mass past 2. 

(c) is false: there is no probability mass in the interval from $-\frac{1}{2}$ to 0. 

(d) $\mathbb{P}(100X < 1)$ is equivalent to the probability that $X$ is less than $\frac{1}{100}$, which (reading the graph of the CDF) we see is between $0.25$ and $0.5$. Therefore, (d) is false. 


::: .exercise
**Exercise**  
Suppose that $X$ is a random variable with CDF $F\_X$ and that $Y = X^2$. Express $\mathbb{P}(Y > 9)$ in terms of the function $F\_X$. For simplicity, assume that $\mathbb{P}(X = -3) = 0$. 
:::

 

*Solution*. By definition of $Y$, we have that $Y^2 > 9$ if $X < -3$ or $X> 3.$ Since these events are mutually exclusive, we have 

    p
      | \begin{equation}\begin{align*}
      |       \mathbb{P}(Y > 9) &= \mathbb{P}(X < -3) + \mathbb{P}(X > 3) \\
      |                 &= \mathbb{P}(X < -3) + 1 - \mathbb{P}(X \leq 3) \\
      |                 &= F_X(-3) + 1 - F_X(3),
      |     \end{align*}\end{equation}
      | 
      
 where the last step follows since $\mathbb{P}(X < -3) = \mathbb{P}(X \leq 3)$ for this random variable $X$. 

 

::: .exercise
**Exercise**  
Random variables with the same cumulative distribution function are not necessarily equal as random variables, because the probability mass sitting at each point on the real line can come from different $\omega$'s. 

 For example, consider the two-fair-coin-flip experiment and let $X$ be the number of heads. Find another random variable $Y$ which is not equal to $X$ but which has the same distribution as $X$. 
:::

 

*Solution*. If we define $Y$ to be the number of *tails*, then it's clear from symmetry that it has the same distribution as $X$. Furthermore, $X$ and $Y$ are unequal as random variables because if $X = 0$, then $Y = 2$(and vice versa). 

(In fact, we can express $Y$ in terms of $X$ as $Y = 2-X$.) 

 
---
> id: joint-distributions
## Joint distributions
 
The distribution of a random variable is sometimes its called its **marginal** distribution, with the term *marginal* emphasizing that distribution includes information only about a single random variable. If we are interested in two random variables $X$ and $Y$, it is often important to consider their *joint* distribution, which captures probabilistic information about where the pair $(X,Y)$ falls in $\mathbb{R}^2$. 

::: .definition
**Definition**  
If $X$ and $Y$ are two random variables defined on the same probability space, then the **joint distribution** of $X$ and $Y$ is the measure on $\mathbb{R}^2$ which assigns to each set $A \subset
    \mathbb{R}^2$ the value $\mathbb{P}((X,Y) \in A)$. 
:::

We can find the probability mass function of $(X,Y)$ by (i) finding all of the pairs $(x,y) \in \mathbb{R}^2$ with the property that the event $\\{X = x\\} \cap \\{Y = y\\}$ has positive probability, and (ii) finding the probability of each such event. 

::: .example
**Example**  
Consider the two-fair-coin-flip experiment, and let $X\_1$ be the number of heads in the first flip and $X\_2$ the number of heads in the second flip. Let $Y\_1$ be the number of tails in the first flip. 

Show that $X\_1$, $X\_2$, and $Y\_1$ all have the same marginal distributions and but that $(X\_1, X\_2)$ and $(X\_1, Y\_1)$ have different joint distributions. 

:::

 

*Solution*. The random variables $X\_1, X\_2, Y\_1$ all have the same distribution because each can be $1$ or $0$ with probability $\frac{1}{2}.$ On the other hand, $(X\_1, X\_2)$ can take the values $\\{(0, 0), (0, 1), (1, 0), (1, 1)\\}$ with equal probability $\frac{1}{4},$ while $(X\_1, Y\_1)$ can only be either $(0, 1)$ or $(1,0)$ with probability $\frac{1}{2}.$

 The marginal distributions of two random variables may be recovered from their joint distribution. 

::: .exercise
**Exercise**  
Consider a computer program which rolls two virtual dice and returns roll results with probabilities shown in the table. 

What is the probability that Die 1 shows 4? 
    center: img(src="images/dicetable" width=240)
    
:::

 

*Solution*. The event that the first die shows 4 can be written as a disjoint union of the events $\\{\text{Die 1} = 4\\} \cap \text{Die 2} = j$ where $j$ ranges over the integers 1 to 6. We get 

    p
      | \begin{equation}\begin{align*}
      |       \mathbb{P}(\text{Die 1} = 4) &= \sum_{j=1}^6 \mathbb{P}(\text{Die 1} = 4, \text{ Die 2} = j) \\
      |                              &= \frac{1}{36} + \frac{1}{36} +
      |                                \frac{1}{72} +
      |                                \frac{1}{36} + \frac{1}{36} + \frac{1}{36} \\
      |                              &= \frac{11}{72}.
      |     \end{align*}\end{equation}
      | 


---
> id: conditional-probability

## Conditional Probability

### Conditional probability measures

One of the most important goals of modeling random phenomena is to account for *partial information*. We often discover something about the outcome of an experiment before we know the outcome exactly. For example, when we flip a fair coin twice, we see the result of the first flip before we see the result of the second flip, and we would like to define a new probability measure which reflects this intermediate knowledge. We call this a **conditional probability measure**. 

Suppose we observe that the first of two flips is a tail. Then all of the $\omega$'s which are incompatible with this observation should receive a probability of zero under our conditional probability measure. Since we have no new information about the remaining $\omega$'s, it makes sense to keep their probabilities in the same proportions as in the original probability measure. 

    center
      img(src="images/conditional-mass" width=240)
      p.caption Consider the event $E$ that the first flip is a tail. The conditional probability mass function $\widetilde{m}$ given $E$ assigns probability mass $\frac{1}{2}$ to each of the $\omega$'s in $E$. 

 These two observations are sufficient to determine the conditional probability measure. In other words, to condition on an event $E$, we set the masses at elements of $E\complement$ to 0 and multiply the amount of mass at each point in $E$ by $1/\mathbb{P}(E)$ to get the total mass up to 1 without changing the proportions: 

::: .definition
**Definition**  
Given a probability space $(\Omega, \mathbb{P})$ and an event $E \subset \Omega$ whose probability is positive, the *conditional probability mass function* given $E$, written as $\omega \mapsto m(\omega \given E)$ is defined by 

    p
      | \begin{equation}
      |       m(\omega \given E) =
      |       \begin{cases} \frac{m(\omega)}{P(E)} & \text{if }\omega \in E \\
      |         0 & \text{otherwise}.
      |       \end{cases}
      |     \end{equation}
      
 The conditional probability measure given $E$ is the measure associated to $\omega\mapsto m(\omega \given E)$: for all events $F$, we have 

    p
      | \begin{equation} 
      |       \mathbb{P}(F \given E) = \frac{\mathbb{P}(F \cap E)}{\mathbb{P}(E)}.
      |     \end{equation}
      | 

:::


::: .exercise
**Exercise**  
Two objects are submerged in a deep and murky body of water. The objects are chosen to be both positively buoyant with probability $\frac{1}{4}$, both are negatively buoyant with probability $\frac{1}{4}$, and with probability $\frac{1}{2}$ the objects have opposite buoyancy. The objects, if they float, rise in the water at different rates, but they are visually indistinguishable. 

 After the objects are released, an observer sees one of them emerge at the water's surface. What is the conditional probability, given the observed information, that the second object will emerge? 
:::


*Solution*. Let's use the given sample space: 

    p
      | \begin{equation}
      |       \Omega = \{\text{both positive}, \text{opposite buoyancy}, \text{both negative}\}
      |     \end{equation}
      | 
      
 The emergence of the object tells us precisely that the event 

    p
      | \begin{equation}
      |       E = \{\text{both positive}, \text{opposite buoyancy}\}
      |     \end{equation}
      | 
      
 occurs. The conditional probability of the event $\\{\text{both
      positive}\\}$ given $E$ is 

    p
      | \begin{equation}
      |       \frac{\mathbb{P}(\{\text{both positive}\}\cap E)}{\mathbb{P}(E)} =
      |       \frac{\frac{1}{4}}{\frac{1}{4} + \frac{1}{2}} = \frac{1}{3}.
      |     \end{equation}
      | 

One reason that conditional probabilities play such an important role in the study of probability is that in many scenarios they are more fundamental than the probability measure on $\Omega$. 

::: .example
**Example**  
Consider the following experiment: we roll a die, and if it shows 2 or less we select Urn A, and otherwise we select Urn B. Next, we draw a ball uniformly at random from the selected urn. Urn A contains one red and one blue ball, while urn B contains 3 blue balls and one red ball. 

Find a probability space $\Omega$ which models this experiment, find a pair of events $E$ and $F$ such that $\mathbb{P}(E \given F) =
    \frac{3}{4}$. 
:::

 

*Solution*.  The four possible outcomes of this experiment are (A, blue), (A, red), (B, blue), and (B, red). So we let our probability space $\Omega$ consist of those four outcomes. 

The probability of the outcome (A, blue) is equal to the probability that Urn A is selected times the conditional probability of selecting a blue ball given that Urn A was selected. We interpret the information that Urn A contains an equal number of blue and red balls as a statement that this conditional probability should be $\frac{1}{2}$. Therefore, we assign the probability $\frac{1}{2} \cdot \frac{1}{3} =
    \frac{1}{6}$ to the event (A, blue). 

Likewise, the probabilities we assign to the three other outcomes are $\frac{1}{6}$, $\frac{1}{2}$, and $\frac{1}{6}$, respectively. 
    
    center: img(src="images/tree" width=240)

With probabilities thus assigned to the outcomes in $\Omega$, we should have $\mathbb{P}(E \given F) = \frac{3}{4}$ where $E$ is the event that we select a blue ball and $F$ is the event that Urn B was selected. Let us check that this is indeed the case: 

    p
      | \begin{equation}
      |       \frac{\mathbb{P}(E \cap F)}{\mathbb{P}(F)} = \frac{\frac{1}{2}}{\frac{2}{3}} = \frac{3}{4}.
      |     \end{equation}
      |
      
We have arrived at an important insight: a probability space may alternatively by specified via a tree diagram showing conditional probabilities, or by the probability space $\Omega$ consisting of the endpoints of the tree diagram. We can translate back and forth between these two representations by multiplying along branches to get from the tree's conditional probabilities to $\Omega$'s outcome probabilities or by calculating conditional probabilities to go from $\Omega$ to the tree diagram. 

::: .exercise
**Exercise**  
Consider three random variables $X\_1$, $X\_2$, and $X\_3$, each of which is equal to $1$ with probability 0.6 and to 0 with probability 0.4. These random variables are not necessarily independent. 
* Find the greatest possible value of the event $X\_1 + X\_2 + X\_3 = 0$. 
* Find the least possible value of the event $X\_1 + X\_2 + X\_3 = 0$. 
:::

 

*Solution*.  
* By monotonicity, we have 

    p
      | \begin{equation}\mathbb{P}(X_1 + X_2 +X_3 = 0) = \mathbb{P}(X_1 = X_2 = X_3 = 0) \leq \mathbb{P}(X_1 = 0) = 0.4.\end{equation}
      | 
 We note that this maximum can be attained by setting $X\_1 = X\_2 = X\_3.$ 


* The least possible value is zero. This minimum can be attained, for example, if we take $\Omega = \\{\omega\_1, \omega\_2, \omega\_3\\}$, with probability mass $0.4$, $0.2$, and $0.4$, respectively, and set $X\_1(\omega\_1) = 1$, $X\_1(\omega\_2) = 1$, $X\_1(\omega\_3) = 0$, $X\_2(\omega\_1) = 0$, $X\_2(\omega\_2) = 1$, $X\_2(\omega\_3) = 1$, and $X\_3 = X\_1$. 

### Bayes' theorem 

**Bayes' theorem** tells us how to update beliefs in light of new evidence. It relates the conditional probabilities $\mathbb{P}(A \given E)$ and $\mathbb{P}(E \given A)$: 

    p
      | \begin{equation}
      |     \mathbb{P}(A \given E) = \frac{\mathbb{P}(E \given A)\mathbb{P}(A)}{\mathbb{P}(E)} = \frac{\mathbb{P}(E \given A)\mathbb{P}(A)}{\mathbb{P}(E \given
      |       A)\mathbb{P}(A) + \mathbb{P}(E \given A^{\mathrm{c}})\mathbb{P}(A^{\mathrm{c}})}.
      |   \end{equation}
      | 
 

The last step follows from writing out $\mathbb{P}(E)$ as $\mathbb{P}(E \cap A) +
  \mathbb{P}(E \cap A\complement)$. 

Bayes' theorem has many applications to everyday life, some intuitive and others counterintuitive. 

::: .example
**Example**  
Suppose you're 90% sure that your package was delivered today and 75% sure that if it was delivered it would be on your door step rather than tucked away in your mailbox. When you arrive at home and do not see your package right away, what is the conditional probability---given the observed information---that you'll find it in your mailbox? 
:::

 

*Solution*. The desired conditional probability is $\mathbb{P}(\text{delivered} \given \text{invisible})$, which by Bayes' theorem is 

    p
      | \begin{equation}
      |       \frac{\mathbb{P}(\text{invisible} \given \text{delivered})
      |         \mathbb{P}(\text{delivered})}{\mathbb{P}(\text{invisible} \given
      |         \text{delivered}) \mathbb{P}(\text{delivered})+\mathbb{P}(\text{invisible}
      |         \given \text{undelivered}) \mathbb{P}(\text{undelivered})}
      |     \end{equation}
      | 
 

    p
      | \begin{equation}
      |       = \frac{(0.75)(0.9)}{(0.75)(0.9)+(1)(0.1)} \approx 0.871.
      |     \end{equation}
      | 


 

::: .exercise
**Exercise**  
Suppose a disease has 0.1% prevalence in the population and has a test with 90% reliability. A random selected person is tested for the disease and tests positive. What is the conditional probability that the person has the disease, given the positive test result? 
:::

 

*Solution*. Let $D$ be the event that a person has the disease and $P$ be the event that a person tests positive to the test. We would like to find $\mathbb{P}(D | P)$ given that $P(D) = 0.001$, $\mathbb{P}(P | D) = 0.9$ and $\mathbb{P}(P | D^c) = 0.1 .$ By Bayes' Theorem, 

    p
      | \begin{align*}
      |       \mathbb{P}(D |P) &= \frac{\mathbb{P}(P | D) \cdot \mathbb{P}(D)}{\mathbb{P}(P |D) \cdot \mathbb{P}(D) + \mathbb{P}(P | D^c) \cdot \mathbb{P}(D^c)} \\\\ 
      |                &= \frac{0.9 \times 0.001}{0.9 \times 0.001 + 0.1 \times 0.999} \\\\ 
      |                &\approx 0.0089.
      |     \end{align*}
      | 
 

(*Note:* The fact that $\mathbb{P}(P |D^c) = 0.1 = 1 - \mathbb{P}(P |D)$ follows from the fact that the test is $10\%$ unreliable. In general, it is not the case that $\mathbb{P}(A | B) = 1 - \mathbb{P}(A | B^c)$ for any two events $A$ and $B$.) 

---
> id: independence
## Independence

In the context of a random experiment, two positive-probability events $E$ and $F$ are **independent** if knowledge of the occurrence of one of the events gives no information about the occurrence of the other event. In other words, $E$ and $F$ are independent if the probability of $E$ is the same as the conditional probability of $E$ given $F$, and vice versa. In other words, $E$ and $F$ are independent if 

    p
      | \begin{equation}
      |     \mathbb{P}(E) = \frac{\mathbb{P}(E \cap F)}{\mathbb{P}(F)} \quad \text{and} \quad
      |     \mathbb{P}(F) = \frac{\mathbb{P}(F \cap E)}{\mathbb{P}(E)}.
      |   \end{equation}
      | 
 Both of these equations rearrange to 

    p
      | \begin{equation}
      |     \mathbb{P}(E \cap F) = \mathbb{P}(E) \mathbb{P}(F).
      |   \end{equation}
      | 
 This equation is clearly symmetric in $E$ and $F$, and it does not require that $E$ and $F$ have positive probability, so we take it as our fundamental independence equation for two events: 

::: .definition
**Definition** (Independence)  
If $(\Omega, \mathbb{P})$ is a probability space, then two events $E$ and $F$ are said to be independent if 

    p
      | \begin{equation}
      |       \mathbb{P}(E \cap F) = \mathbb{P}(E) \mathbb{P}(F).
      |     \end{equation}
      | 

:::

 

 If we want to check whether two positive-probability events are independent, we may check any one of the equations $\mathbb{P}(E \cap F) = \mathbb{P}(E)
  \mathbb{P}(F)$ or $\mathbb{P}(E) = \frac{\mathbb{P}(E \cap F)}{\mathbb{P}(F)}$ or $\mathbb{P}(F) =
  \frac{\mathbb{P}(F \cap E)}{\mathbb{P}(E)}$, since they are all equivalent. 

::: .exercise
**Exercise**  


 Let $X$ be the result of a six-sided die roll. Consider the following events. 

    p
      | \begin{equation}\begin{align*}
      |      A &= \{X \text{ is even}\}  \\
      |      B &= \{X \text{ is odd}\}  \\
      |      C &= \{X \leq 4\}
      |     \end{align*}\end{equation}
      | 
 Are events $A$ and $B$ independent? Are events $A$ and $C$ independent? 
:::

*Solution*.  
* We have $\mathbb{P}(A \cap B) = 0$(because $X$ cannot be odd and even), while $\mathbb{P}(A)\mathbb{P}(B) = \frac{1}{4}$. Since $\mathbb{P}(A \cap B) \neq \mathbb{P}(A)\mathbb{P}(B)$, the events $A$ and $B$ are not independent. 
* We have $\mathbb{P}(A \given C) = \frac{\mathbb{P}(A \cap C)}{\mathbb{P}(C)} =
        \frac{1/3}{2/3} = \frac{1}{2}$. Because $\mathbb{P}(A\given C) = \mathbb{P}(A)$, the events $A$ and $C$ are independent. 
 
We say that two random variables $X$ and $Y$ are independent if the every pair of events of the form $\\{X \in A\\}$ and $\\{Y \in B\\}$ are independent, where $A \subset \mathbb{R}$ and $B \subset \mathbb{R}$. 

::: .exercise
**Exercise**  
Suppose that $\Omega = \\{(\texttt{H},\texttt{H}),   (\texttt{H},\texttt{T}),
    (\texttt{T},\texttt{H}),   (\texttt{T},\texttt{T})\\}$ and $\mathbb{P}$ is the uniform probability measure on $\Omega$. Let $X\_1$ be the number of heads in the first flip and let $X\_2$ be the number of heads in the second flip. Show that $X\_1$ and $X\_2$ are independent. 
:::

*Solution*. The pair $(X\_1, X\_2)$ takes values in $\\{(1, 1), (1,0), (0, 1), (0, 0)\\}$ each with probability $\frac{1}{4} = \frac{1}{2} \times \frac{1}{2}.$ Since both $X\_1$ and $X\_2$ can be $0$ or $1$ with probability $\frac{1}{2},$ we conclude that $X\_1$ and $X\_2$ are independent. 

Directly showing that random variables are independent can be tedious, because there are many events to check. However, there is a general way to construct $\Omega$ to get independent random variables. The idea is to build $\Omega$ as a rectangle: 

::: .theorem
**Theorem** (Product measure)  
Suppose that $(\Omega\_1,\mathbb{P}\_1)$ and $(\Omega\_2,\mathbb{P}\_2)$ are probability spaces with associated probability mass functions $m\_1$ and $m\_2$. Define a probability space $\Omega$ by defining 

    p
      | \begin{equation}
      |         \Omega = \Omega_1 \times \Omega_2
      |       \end{equation}
      | 
      
 and 

    p
      | \begin{equation}
      |         m((\omega_1, \omega_2)) = m_1(\omega_1)m_2(\omega_2)
      |       \end{equation}
      | 

 for every $(\omega\_1, \omega\_2) \in \Omega\_1 \times \Omega\_2$. Let $\mathbb{P}$ be the probability measure with probability mass function $m$. Then the random variables $X\_1((\omega\_1, \omega\_2)) = \omega\_1$ and $X\_2((\omega\_1, \omega\_2)) = \omega\_2$ are independent. 
 
     center: img(src="images/productmeasure" width=240)

 We call $\mathbb{P}$ a **product measure** and $(\Omega, \mathbb{P})$ a **product space**. 
:::


We say that a collection of random variables $(X\_1, X\_2, \ldots, X\_{n})$ is independent if 

    p
      | \begin{equation}
      |     \mathbb{P}(\{X_1 \in A_1\} \cap \{X_2 \in A_2\} \cap \cdots \cap \{X_n \in A_n\})
      |     = \mathbb{P}(X_1 \in A_1) \mathbb{P}(X_2 \in A_2)\cdots \mathbb{P}(X_n \in A_n)
      |   \end{equation}
      | 
 for any events $A\_1, A\_2, \ldots, A\_n$. 

 We may extend the product measure construction to achieve as many independent random variables as desired: for three random variables we let $\Omega$ be cube-shaped (that is, $\Omega = \Omega\_1 \times
  \Omega\_2 \times \Omega\_3$), and so on. 

::: .exercise
**Exercise**  
Define a probability space $\Omega$ and 10 independent random variables which are uniformly distributed on $\\{1,2,3,4,5,6\\}$. 
:::

 

*Solution*. We follow the product space construction and define $\Omega$ to be the set of all length-10 tuples of elements in $\\{1,2,3,4,5,6\\}$. For each $i \in \\{1, 2, \dots, 10,\\}$ let $\Omega\_i = \\{1, 2, 3, 4, 5, 6\\}$ and let $m\_i$ be the uniform probability mass function on $\Omega\_i.$ Then desired probability space is $\Omega$ where 

    p
      | \begin{equation}
      |       \Omega = \Omega_1 \times \Omega_2 \times \cdots \times
      |       \Omega_{10}\end{equation}
      | 
 together with probability mass function 

    p
      | \begin{equation}
      |       m((\omega_1, \omega_2, \dots, \omega_{10})) = m_1(\omega_1) \times
      |       m_2(\omega_2) \times \cdots \times m_{10}(\omega_{10})
      |     \end{equation}
      | 
 for all $(\omega\_1, \omega\_2, \dots, \omega\_{10}) \in \Omega.$ We define the corresponding random variables $X\_i : \Omega \to \\{1, 2, 3, 4, 5, 6\\}$ by 

    p
      | \begin{equation}X((\omega_1, \omega_2, \dots, \omega_{10})) = \omega_i\end{equation}
      | 
 for all integer values of $i$ ranging from $1$ to $10$. Then for all of these random variables, 

    p
      | \begin{equation}\mathbb{P}(X_i = k) = \mathbb{P}_i(\omega_i = k) = \frac{1}{6}\end{equation}
      | 
 for any $k \in \\{1, 2, 3, 4, 5, 6\\}$, as required. 

 

 The product measure construction can be extended further still to give a supply of *infinitely many* independent random variables. The idea is use a space of the form $\Omega = \Omega\_1 \times \Omega\_2 \times \Omega\_3 \cdots$(whose elements are infinite tuples $\omega = (\omega\_1, \omega\_2, \omega\_3, \ldots)$) and define a measure which makes the random variables $X\_n(\omega) = \omega\_n$ independent. We will not need the details of this construction, although we will use it indirectly when we discuss infinite sequences of independent random variables. 

 We say that a collection of events is independent if the corresponding indicator random variables are independent. Independence for three or more events is more subtle than independence for two events: 

::: .exercise
**Exercise**  
Three events can be *pairwise* independent without being independent: Suppose that $\omega$ is selected uniformly at random from the set 

    p
      | \begin{equation}
      |       \Omega =
      |       \{
      |       (0,0,0),(0,1,1),(1,0,1),(1,1,0)
      |       \}
      |     \end{equation}
      | 
 and define $A$ to be the event that the first entry is 1, $B$ to be the event that the second entry is $1$, and $C$ to be the event that the third entry is 1. For example, if $\omega =
    (0,1,1)$, then $B$ and $C$ occurred but $A$ did not. 

 Show that $A$ and $B$ are independent, that $A$ and $C$ are independent, and that $B$ and $C$ are independent. 

 Show that the equation $\mathbb{P}(A \cap B \cap C) = \mathbb{P}(A) \mathbb{P}(B) \mathbb{P}(C)$ does **not** hold and that the triple of events is therefore not independent. 
:::

 

*Solution*. By definition, $A = \\{(1,0, 1), (1, 1, 0)\\},$ $B = \\{(0, 1, 1), (1, 1, 0)\\}$ and $C = \\{(0, 1, 1), (1, 0, 1)\\}.$ Therefore, 

    p
      | \begin{equation}
      |       \mathbb{P}(A) = \mathbb{P}(B) = \mathbb{P}(C) = \frac{1}{2}.\end{equation}
      | 
 Now, $A \cap B = (1,1,0)$, $A \cap C = (1,0 ,1),$ and $B \cap C = (0, 1, 1),$ whence 

    p
      | \begin{equation}
      |       \mathbb{P}(A \cap B) = \frac{1}{4} = \mathbb{P}(A) \mathbb{P}(B).
      |     \end{equation}
      | 
 The same thing applies to $A \cap C$ and $B \cap C$ so $A, B, C$ are pairwise independent. However, since $A \cap B \cap C = \emptyset,$ we have 

    p
      | \begin{equation}\mathbb{P}(A \cap B \cap C) = 0 \neq \frac{1}{2} \times \frac{1}{2}
      |       \times \frac{1}{2} = \mathbb{P}(A) \times \mathbb{P}(B) \times \mathbb{P}(C)\end{equation}
      | 
 and thus, $A, B,$ and $C$ are not independent. 

 

 Independence satisfies many basic relationships suggested by the intuition that random variables are independent if they are computed from separate sources of randomness. For example, if $X\_1, X\_2, X\_3, X\_4, X\_5$ are independent random variables, then $X\_1 + X\_2 + X\_3$ and $X\_4^2 + X\_5^2$ are independent of each other. 

::: .exercise
**Exercise**  
Consider as sequence of 8 independent coin flips. Show that the probability of getting at least one pair of consecutive heads is at least $1-(3/4)^4$. 
:::

 

*Solution*. The probability that the first two flips are both heads is $\frac{1}{4}$. Similarly, the probability that the third and fourth flips are heads and heads is $\frac{1}{4}$. Furthermore, these events are independent, since their indicator random variables are functions of distinct independent random variables. Therefore, the probability that we get consecutive heads either in the first pair of flips or in the third and fourth flips is $1 - \left(1-\frac{1}{4}\right)^2$. 

 Continuing in this way, we find that the probability of getting consecutive heads in the first pair, the second pair, or the third pair of flips is $1 - \left(1-\frac{1}{4}\right)^3$, and finally the probability of getting consecutive heads somewhere in the four position pairs is $1 - \left(1-\frac{1}{4}\right)^4$. 

 Since there are other ways to get consecutive heads (for example, on flips 2 and 3), this number is an *under* estimate of the actual probability of getting consecutive heads. 

---
> id: expectation-and-variance
## Expectation and variance

Sometimes we want to distill a random variable's distribution down to a single (non-random) number. For example, consider the height of an individual selected uniformly at random from a given population. This is a random variable, and communicating its distribution would involve communicating the heights of every person in the population. However, we may summarize the distribution by reporting an *average* height: we add up the heights of the people in the population and divide by the number of people. 

If the random individual were selected according to some non-uniform probability distribution on the population, then it would make sense to calculate a *weighted* average rather than a straight average. The probability-weighted average of the values of a random variable is called its **expectation**. 

::: .definition
**Definition**  
The **expectation** $\mathbb{E}[X]$(or **mean** $\mu\_X$) of a random variable $X$ is the *probability-weighted average of $X$*: 

    p
      | \begin{equation}
      |       \mathbb{E}[X] = \sum_{\omega \in \Omega} X(\omega) m(\omega)
      |     \end{equation}
      | 

:::

For example, the expected number of heads in two fair coin flips is 

    p
      | \begin{equation}
      |     \mathbb{E}[X] = \tfrac{1}{4}\cdot 2 + \tfrac{1}{4}\cdot 1 +
      |     \tfrac{1}{4}\cdot 1 + \tfrac{1}{4}\cdot 0 = 1.
      |   \end{equation}
      | 
 

There are two common ways of interpreting expected value. 
* The expectation $\mathbb{E}[X]$ may be thought of as the value of a random game with payout $X$. According to this interpretation, you should be willing to pay anything less than \$1 to play the game where you get a dollar for each head in two fair coin flips. For more than \$1 you should be unwilling to play the game, and at \$1 you should be indifferent. 
* The second way of thinking about expected value is as a *long-run average*. If you play the dollar-per-head two-coin-flip game a very large number of times, then your average payout per play is very likely to be close to \$1. 

 

 We can test this second interpretation out: 

::: .exercise
**Exercise**  


 Use the expression_{code.language-python}mean(rand(0:1) + rand(0:1) for k=1:10^6)_ to play the dollar-per-head two-coin-flip game a million times and calculate the average payout in those milion runs. 

 How close to 1 is the result typically? Choose the best answer. 
 
    x-picker.list
      .item Around 0.1 
      .item Around 0.01 
      .item Around 0.0001 
      .item Around 0.0000001 

:::

 

*Solution*. The correct answer is (c), around 0.0001. Running the code several times, we see that the error is seldom as large as 0.01 or as small as 0.0000001. 

We will see that this second interpretation is actually a *theorem* in probability, called the **law of large numbers**. In the meantime, however, this interpretation gives us a useful tool for investigation: if a random variable is easy to simulate, then we can sample from it many times and calculate the average of the resulting samples. This will not give us the expected value exactly, but we can get as close as desired by using sufficiently many samples. This is called the **Monte Carlo** method of approximating the expectation of a random variable. 

::: .exercise
**Exercise**  
Use a Monte Carlo simulation to estimate the expectation of $X/Y$, where $X$ and $Y$ are independent die rolls. 
:::


*Solution*. _{code.language-python}mean(rand(1:6)/rand(1:6) for i=1:10^8)_ returns approximately 1.43. The actual mean is _{code.language-python}mean(x/y for x=1:6, y=1:6)_, which is $\frac{343}{240} = 1.4291\overline{6}$, so we can say that the Monte Carlo result with 100 million trials is very close to the correct value. 

::: .exercise
**Exercise**  
Explain why $\mathbb{E}[X] \leq \mathbb{E}[Y]$ if $X(\omega) \leq Y(\omega)$ for all $\omega \in \Omega$. 
:::


*Solution*. If $X(\omega) \leq Y(\omega)$ for all $\omega \in \Omega,$ then we have 

    p
      | \begin{equation}\begin{align*}
      | 	\mathbb{E}[X] &= \sum_{\omega \in \Omega}X(\omega)m(\omega) \\
      | 	&\leq \sum_{\omega \in \Omega}Y(\omega)m(\omega) \\
      | 	&{}= \mathbb{E}[Y].
      | \end{align*}\end{equation}
      | 

Although the definition $\mathbb{E}[X] = \sum\_{\omega \in \Omega} X(\omega) m(\omega)$ involves the probability space $\Omega$, we can also write a formula for expectation in terms of the probability mass function of the *distribution* of $X$: 

::: .theorem
**Theorem**  
The expectation of a discrete random variable $X$ is equal to 

    p
      | \begin{equation}
      |       \mathbb{E}[X] = \sum_{x \in \mathbb{R}} x \mathbb{P}(X = x).
      |     \end{equation}
      | 

::: 

*Proof*. Let's consider an example first. Suppose $\Omega = \\{1,2,3\\}$ with probability mass function $m$ satisfying $m(1) = 1/6$, $m(2) = 2/6$, and $m(3) = 3/6$. Suppose $X(1) = 5, X(2) = 5$ and $X(3)= 7$. Then 

    p
      | \begin{equation}
      |       \mathbb{E}[X] = \frac{1}{6}\cdot 5 + \frac{2}{6} \cdot 5 +
      |       \frac{3}{6}\cdot 7.
      |     \end{equation}
      | 
 We can group the first two terms together to get 

    p
      | \begin{equation}
      |       \mathbb{E}[X] = \left(\frac{1}{6} + \frac{2}{6}\right)\cdot 5 +
      |       \frac{3}{6}\cdot 7.
      |     \end{equation}
      | 
      
This expression is the one we would get if we wrote out 

    p
      | \begin{equation}
      |       \sum_{x \in \mathbb{R}} x \mathbb{P}(X = x).
      |     \end{equation}
      | 
      
 Therefore, we can see that the two sides are the same. 

 Let's write this idea down in general form. We group terms on the right-hand side in the formula $\mathbb{E}[X] = \sum\_{\omega \in \Omega} X(\omega) m(\omega)$ according to the value of $X(\omega)$: 

    p
      | \begin{equation}
      |       \mathbb{E}[X] = \sum_{x\in \mathbb{R}}\sum_{\omega \in \Omega\,:\, X(\omega) =
      |         x} X(\omega)m(\omega).
      |     \end{equation}
      | 
 Then we can replace $X(\omega)$ with $x$ and pull it out of the inside sum to get 

    p
      | \begin{equation}
      |       \mathbb{E}[X] = \sum_{x \in \mathbb{R}} x \sum_{\omega \in \Omega \,: \,
      |       X(\omega) = x} m(\omega).
      |     \end{equation}
      | 
 Since $\sum\_{\omega \in \Omega \,: \,
      X(\omega) = x} m(\omega)$ is equal to $\mathbb{P}(X = x)$, we get 

    p
      | \begin{equation}
      |       \mathbb{E}[X] = \sum_{x \in \mathbb{R}} x \mathbb{P}(X = x),
      |     \end{equation}
      | 
 as desired. 


::: .exercise
**Exercise**  
The expectation of a random variable need not be finite or even well-defined. Show that the expectation of the random variable which assigns a probability mass of $2^{-n}$ to the point $2^{n}$(for all $n \geq 1$) is not finite. 

Consider a random variable $X$ whose distribution assigns a probability mass of $2^{-|n|-1}$ to each point $2^n$ for $n \geq1$ and a probability mass of $2^{-|n|-1}$ to $-2^n$ for each $n \leq -1$. Show that $\mathbb{E}[X]$ is not well-defined. (Note: a sum $\sum\_{x \in \mathbb{R}} f(x)$ is not defined if $\sum\_{x \in \mathbb{R} \,:\, f(x) > 0} f(x)$ and $\sum\_{x \in \mathbb{R} \,:\, f(x) < 0} f(x)$ are equal to $\infty$ and $-\infty$, respectively.) 
:::


*Solution*. We multiply the probability mass at each point $x$ by the location $x$ and sum to get 

    p
      | \begin{equation}
      |       \sum_{n = 1}^\infty 2^{-n}2^n = \sum_{n=1}^\infty 1 = \infty.
      |     \end{equation}
      | 
 
For the second distribution, the positive and negative parts of the are both infinite for the same reason. Therefore, the sum does not make sense and the mean is therefore not well-defined. 

 

::: .theorem
**Theorem**  
If $f:\mathbb{R}^2 \to \mathbb{R}$, and $X$ and $Y$ are discrete random variables defined on the same probability space, then 

    p
      | \begin{equation}
      |       \mathbb{E}[f(X,Y)] = \sum_{(x,y)\in \mathbb{R}^2} f(x,y) \mathbb{P}(X=x \text{ and }Y = y).
      |     \end{equation}
      | 

:::

 

*Proof*. We use the same idea we used in the proof of Theorem <a name=th:expectation-formula></a>: group terms in the definition of expectation according the value of the pair $(X(\omega),Y(\omega))$. We get 

    p
      | \begin{equation}\begin{align*}
      |       \mathbb{E}[f(X,Y)] &= \sum_{\omega \in
      |         \Omega}f(X(\omega),Y(\omega)) m(\omega) \\
      |       &= \sum_{(x,y) \in \mathbb{R}^2} \sum_{\substack{\omega \in \Omega \,:\,
      |       \\ X(\omega)
      |       = x \text{ and } Y(\omega) = y}} f(X(\omega),Y(\omega)) m(\omega)
      |       \\
      |       &= \sum_{(x,y) \in \mathbb{R}^2} f(x,y) \mathbb{P}(X = x \text{ and } Y = y).
      |     \end{align*}\end{equation}
      | 

The expectation of a random variable gives us some coarse information about where on the number line the random variable's probability mass is located. The **variance** gives us some information about how widely the probability mass is spread around its mean. A random variable whose distribution is highly concentrated about its mean will have a small variance, and a random variable which is likely to be very far from its mean will have a large variance. We define the variance of a random variable $X$ to be the average squared distance from $X$ to its mean: 

::: .definition
**Definition** (Variance)  
The variance of a random variable $X$ is defined to be 

    p
      | \begin{equation}
      |       \Var X = \mathbb{E}[(X - \mathbb{E}[X])^2].
      |     \end{equation}
      | 
      
 The standard deviation $\sigma\_X$ of $X$ is the square root of the variance: 

    p
      | \begin{equation}
      |       \sigma(X) = \sqrt{\Var X}.
      |     \end{equation}
      | 

:::

::: .exercise
**Exercise**  
 Consider a random variable which is obtained by making a selection from the list 

    p
      | \begin{equation}
      |       [0.245, 0.874, 0.998, 0.567, 0.482]
      |     \end{equation}
      | 
 uniformly at random. Make a rough estimate of the mean and variance of this random variable just from looking at the number line. Then use Julia to calculate the mean and variance exactly to see how close your estimates were. 
 
    center: img(src="images/fivepoints" width=240)

 Note: *don't* use Julia's built-in _{code.language-python}var_ function; that will give you the correct answer to a different question, as we will see when we study statistics. 
:::

*Solution*. My estimate of the mean and variance are $0.6$ and $0.1$, respectively. The value 0.6 appears to be around the balance point of the points on the number line, and the squared deviation from 0.6 is very small for a couple of the points and as large as about 0.15 for others. 

Calculating the mean exactly using _{code.language-python}m = mean([0.245, 0.874, 0.998, 0.567, 0.482])_, we get a value of 0.6332. Calculating the variance exactly using _{code.language-python}mean([(a-m)^2 for a in A])_(where $A$ is the array above), we get a value of 0.074. Therefore, our estimate was a little high. 

::: .exercise
**Exercise**  
Consider the following game. We begin by picking a number in $\\{0,\frac{1}{1000}, \frac{2}{1000}, \ldots, \frac{1000}{1000}\\}$ with uniform probability. If that number is less than $1$, we pick another number from the same distribution and add it to the first. We repeat this procedure until the running sum exceeds $1$. Let $X$ be the random variable whose value is the number of draws needed to end the game. Use a simulation to approximate the expected value and variance of $X$. Include your code in your answer as well as some discussion of your results. 

 Tips: _{code.language-python}rand(0:1000)/1000_ returns a sample from the desired distribution. Also, it's a good idea to wrap a single run of the game into a zero-argument function. 
:::

 

*Solution*. We define a function _{code.language-python}run_ which plays the game once, and we record the result of the game over a million runs. We estimate the mean as the mean of the resulting list, and we estimate the variance using 

    pre: code.language-python
      | 
      |       using Statistics
      | 
      |       function run()
      |           s = 0.0
      |           ctr = 0
      |           while s < 1.0
      |               s += rand(0:1000)/1000
      |               ctr += 1
      |           end
      |           ctr
      |       end
      | 
      |       A = [run() for i=1:1_000_000]
      |       μ = mean(A)
      |       σ² = mean((a-μ)^2 for a in A)
      |       μ,σ²
      |     
      
We get a mean of about $2.71$, and a variance of about $0.77$. 

We can use linearity of expectation to rewrite the formula for variance in a simpler form: 

    p
      | \begin{equation}\begin{align*}
      |     \Var X &= \mathbb{E}[X^2 - 2X \mathbb{E}[X] + \mathbb{E}[X]^2] \\
      |            &= \mathbb{E}[X^2] - 2\mathbb{E}[X\mathbb{E}[X]] + \mathbb{E}[X]^2 \\
      |            &= \mathbb{E}[X^2] - 2 \mathbb{E}[X]^2 + \mathbb{E}[X]^2 \\
      |            &= \mathbb{E}[X^2] - \mathbb{E}[X]^2.
      |   \end{align*}\end{equation}
      | 
 
We can use this formula to show how variance interacts with linear operations: 

::: .exercise
**Exercise**  
Show that variance satisfies the properties 

    p
      | \begin{equation}
      |       \left\{\begin{array}{r@{\,}c@{\,}ll}
      |                \Var(a X) &=& a^2 \Var X, &\text{ for all random
      |                                            variables $X$ and real numbers $a$}\\
      |                \Var(X+Y) &=& \Var(X) + \Var(Y), &\text{ if $X$ and $Y$
      |                                                   are independent
      |                                                   random variables}
      |              \end{array}\right.
      |          \end{equation}
      | 

:::

 

*Solution*. The first part of the statement follows easily from linearity of expectation 

    p
      | \begin{equation}\begin{align*}
      |       \Var(aX) &= \mathbb{E}[a^2X^2] - \mathbb{E}[aX]^2\\
      |                &= a^2\mathbb{E}[X^2] - a^2\mathbb{E}[X]^2 \\
      |                & = a^2 (\mathbb{E}[X^2] - \mathbb{E}[X]^2)\\
      |                &= a^2 \Var(X).
      |     \end{align*}\end{equation}
      | 
 

 Since $\mathbb{E}[X + Y] = \mathbb{E}[X] + \mathbb{E}[Y]$ by linearity, we have 

    p
      | \begin{equation}\begin{align*}
      |       \Var(X + Y) &= \mathbb{E}[(X + Y)^2] - (\mathbb{E}[X] + \mathbb{E}[Y])^2 \\
      |                   &= \mathbb{E}[X^2 + 2XY + Y^2] - \mathbb{E}[X]^2 -2\mathbb{E}[X]\mathbb{E}[Y] -\mathbb{E}[Y]^2.
      |     \end{align*}\end{equation}
      | 
 Rearranging and using linearity of expectation, we get 

    p
      | \begin{equation}\begin{align*}
      |       \Var(X+Y)  &{}= \mathbb{E}[X^2] - \mathbb{E}[X]^2 + \mathbb{E}[Y^2] - \mathbb{E}[Y]^2 + 2(\mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]) \\
      |                  &{}= \Var(X) + \Var(Y) + 2(\mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]).
      |     \end{align*}\end{equation}
      | 
 The desired result follows because if $X$ and $Y$ are independent, $\mathbb{E}[XY] = \mathbb{E}[X]\mathbb{E}[Y]$ by Exercise <a name=exam:product-expectation></a>. 

 

::: .exercise
**Exercise**  
Consider the distribution which assigns a probability mass of $\frac{c}{n^3}$ to each integer point $n \geq 1$, where $c$ is equal to the reciprocal of $\sum\_{n=1}^\infty \frac{1}{n^3}$. 

 Show that this distribution has a finite mean but not a finite variance. 
:::

 

*Solution*. Let $X$ be a random variable with this distribution. Then 

    p
      | \begin{equation}\begin{align*}
      | 	\mathbb{E}[X] &= \sum_{n=1}^{\infty} n \cdot \frac{c}{n^3}= c \sum_{n=1}^{\infty} \frac{1}{n^2}.
      | \end{align*}\end{equation}
      | 
 Since the sum on the right converges by the $p$-test, it follows that $\mathbb{E}[X]$ is finite. On the other hand, 

    p
      | \begin{equation}\begin{align*}
      | 	\mathbb{E}[X^2] &= \sum_{n=1}^{\infty} n^2 \cdot \frac{c}{n^3}= c \sum_{n=1}^{\infty} \frac{1}{n}.
      | \end{align*}\end{equation}
      | 
 does not converge because of the harmonic series term. Therefore $\Var(X) = \mathbb{E}[X^2] - \mathbb{E}[X]^2$ is infinite. 

 
---
> id: covariance
## Covariance
 

Just as mean and variance are summary statistics for the distribution of a single random variable, *covariance* is useful for summarizing how $(X,Y)$ are jointly distributed. 

The **covariance** of two random variables $X$ and $Y$ is defined to be the expected product of their deviations from their respective means: 

    p
      | \begin{equation}
      |     \Cov(X,Y) = \mathbb{E}[ (X - \mathbb{E}[X]) (Y - \mathbb{E}[Y])].
      |   \end{equation}
      | 

The covariance of two independent random variables is zero, because the expectation distributes across the product on the right-hand side in that case. Roughly speaking, $X$ and $Y$ tend to deviate from their means positively or negatively together, then their covariance is positive. If they tend to deviate oppositely (that is, $X$ is above its mean and $Y$ is below, or vice versa), then their covariance is negative. 

::: .exercise
**Exercise**  
Identify each of the following joint distributions as representing positive covariance, zero covariance, or negative covariance. The size of a dot at $(x,y)$ represents the probability that $X = x$ and $Y = y$. 

    center: img(src="images/cov-examples" width=240)

:::

 

*Solution*. The first graph shows negative covariance, since $X-\mathbb{E}[X]$ and $Y - \mathbb{E}[Y]$ have opposite sign for the top-left mass and for the bottom-right mass, and the contributions of the other two points are smaller since these points are close to the mean $(\mathbb{E}[X],\mathbb{E}[Y])$. 

The second graph shows positive covariance, since the top right and bottom left points contribute positively, and the middle point contributes much less. 

The third graph shows zero covariance, since the points contribute to the sum defining $\mathbb{E}((X - \mathbb{E}(X))(Y-\mathbb{E}[Y]))$ in two cancelling pairs. 


::: .exercise
**Exercise**  
Does $\Cov(X,Y) = 0$ imply that $X$ and $Y$ are independent? 

Hint: consider Exercise <a name=exer:covexamples></a>. Alternatively, consider a random variable $X$ which is uniformly distributed on $\\{1,2,3\\}$ and an independent random variable $Z$ which is uniformly distributed on $\\{-1,1\\}$. Set $Y = ZX$. Consider the pair $(X,Y)$. 
:::

*Solution*. The third example in Exercise <a name=exer:covexamples></a> shows a non-independent pair of random variables which has zero covariance. 

 Alternatively, the suggested random variables $X$ and $Y$ have zero covariance, but they are not independent since, for example, $\mathbb{P}(X = 2 \text{ and } Y = 1) = 0$ even though $\mathbb{P}(X = 2)$ and $\mathbb{P}(Y = 1)$ are both positive. 

::: .exercise
**Exercise**  
The **correlation** of two random variables $X$ and $Y$ is defined to be their covariance normalized by the product of their standard deviations: 

    p
      | \begin{equation}
      |       \Corr(X,Y) = \frac{\Cov(X,Y)}{\sigma(X)\sigma(Y)}
      |     \end{equation}
      | 
      
 In this problem, we will show that the correlation of two random variables is always between $-1$ and $1$. Let $\mu\_X = \mathbb{E}[X]$, and let $\mu\_Y = \mathbb{E}[Y]$. 

 
* Consider the following quadratic polynomial in $t$: 

    p
      | \begin{equation}
      |         \mathbb{E}[((X - \mu_X) + (Y - \mu_Y) t)^2] = \mathbb{E}[(X-\mu_X)^2] + 2t\mathbb{E}[(X-\mu_X)(Y-\mu_Y)] + t^2  \mathbb{E}[(Y-\mu_Y)^2]
      |       \end{equation}
      | 
 where $t$ is a variable. 
 
* Explain why this polynomial is nonnegative for all $t \in \mathbb{R}$. 
      
* Recall that a polynomial $at^2 + bt + c$ is nonnegative for all $t$ if and only if the discriminant $b^2 - 4ac$ is nonpositive (this follows from the quadratic formula). Use this fact to show that 

    p
      | \begin{equation}
      |         \mathbb{E}[(X-\mu_X)(Y-\mu_Y)]^2 \leq \Var X \Var Y.
      |       \end{equation}
      | 

* Conclude that $-1 \leq \Corr(X,Y) \leq 1$. 


:::

 

*Solution*.  
* The polynomial is nonnegative because the left-hand side of the given equation is the expectation of a nonnegative random variable. 
* Substituting $\mathbb{E}[(Y-\mu\_Y)^2]$ for $a$, $2\mathbb{E}[(X-\mu\_X)(Y-\mu\_Y)]$ for $b$, and $\mathbb{E}[(X-\mu\_X)^2]$ for $c$, the inequality $b^2 - 4ac \leq 0$ implies 

    p
      | \begin{equation}
      |           4\mathbb{E}[(X-\mu_X)(Y-\mu_Y)]^2 - 4 \mathbb{E}[(X-\mu_X)^2]\mathbb{E}[(Y-\mu_Y)^2]
      |           \leq 0,
      |         \end{equation}
      | 
 which implies the desired inequality. 
* Dividing both sides of the preceding inequality by $\Var X
        \Var Y$ and taking the square root of both sides, we find that $|\Corr(X,Y)| \leq 1$, which implies $-1 \leq \Corr(X,Y) \leq 1$. 



 

::: .exercise
**Exercise**  
Show that 

    p
      | \begin{equation}
      |       \Var(X_{1}+X_{2}+\cdots+X_{n}) = \sum_{k=1}^n \Var X_k +
      |       2\sum_{(i,j) \,: \, 1 \leq i < j \leq n} \Cov(X_i,X_j).
      |     \end{equation}
      | 

:::

 

*Solution*. Since $\mathbb{E}[X\_1 + X\_2+ \cdots + X\_n] = \mathbb{E}[X\_1] + \mathbb{E}[X\_2]+ \cdots + \mathbb{E}[X\_n]$ by linearity of expectation, we have 

    p
      | \begin{equation}\begin{align*}
      | 	\Var(X_1 + X_2+ \cdots + X_n) &= \mathbb{E}\left[\left(\sum_{k=1}^{n} X_k\right)^2\right] - \left(\sum_{k=1}^{n} \mathbb{E}[X_k]\right)^2 \\
      | 	&{} = \mathbb{E}\left[\sum_{j=1}^{n}\sum_{k=1}^{n}X_jX_k\right] - \sum_{j=1}^{n}\sum_{k=1}^{n}\mathbb{E}[X_j]\mathbb{E}[X_k] \\
      | 	&{}= \sum_{j=1}^{n}\sum_{k=1}^{n}\mathbb{E}[X_jX_k] - \mathbb{E}[X_j]\mathbb{E}[X_k] &   \mathrm{(Linearity)} \\
      | 	&{}= \sum_{k=1}^{n}(\mathbb{E}[X_k^2] - \mathbb{E}[X_k]^2) + \sum_{j=1}^{n}\sum_{\substack{k=1 \\ k \neq j}}^{n}\mathbb{E}[X_jX_k] - \mathbb{E}[X_j]\mathbb{E}[X_k] \\
      | 	&{}= \sum_{j=1}^{n}\Var(X_k) +  \sum_{j=1}^{n}\sum_{\substack{k=1 \\ k \neq j}}^{n}\mathbb{E}[X_jX_k] - \mathbb{E}[X_j]\mathbb{E}[X_k].
      | \end{align*}\end{equation}
      | 
 Now, because $\mathbb{E}[X\_jX\_k] - \mathbb{E}[X\_j]\mathbb{E}[X\_k] = \mathbb{E}[X\_kX\_j] - \mathbb{E}[X\_k]\mathbb{E}[X\_j] = \Cov(X\_j, X\_k)$ it follows that 

    p
      | \begin{equation}
      | \sum_{j=1}^{n}\sum_{\substack{j=1 \\ j \neq k}}^{n}\mathbb{E}[X_jX_k] - \mathbb{E}[X_j]\mathbb{E}[X_k] = \sum_{j=1}^{n - 1}\sum_{\substack{k=2 \\ k > j}}^{n} 2\Cov(X_j, X_k)
      | \end{equation}
      | 
 and thus the desired result follows. 

 

::: .exercise
**Exercise** (Mean and variance of the sample mean)  
Suppose that $X\_1, \ldots, X\_n$ are independent random variables with the same distribution. Find the mean and variance of 

    p
      | \begin{equation}
      |       \frac{X_1 + \cdots + X_n}{n}
      |     \end{equation}
      | 

:::

 

*Solution*. By linearity of expectation, we have 

    p
      | \begin{equation}\begin{align*}
      |       \mathbb{E}\left[\frac{X_1 + X_2 + \cdots + X_n}{n}\right] &= \frac{\mathbb{E}[X_1] + \mathbb{E}[X_2]+ \cdots + \mathbb{E}[X_n]}{n} \\
      |                                                         &{}= \mathbb{E}[X_1] & \text{(Identical \; distribution)},
      |     \end{align*}\end{equation}
      | 
 

 and by Exercise <a name=exer:var-expand></a>, we have 

    p
      | \begin{equation}\begin{align*}
      |       \Var\left(\frac{X_1+X_2 + \cdots + X_n}{n}\right) &{}= \sum_{k = 1}^{n}\Var\left(\frac{X_k}{n}\right) + 2 \sum_{j=1}^{n - 1}\sum_{\substack{k=2 \\ k > j}}^{n} \Cov\left(\frac{X_j}{n}, \frac{X_k}{n}\right) \\
      |                                                         &{}= \sum_{k = 1}^{n}\Var\left(\frac{X_k}{n}\right) & \text{(Independence)} \\
      |                                                         &{}= \sum_{k = 1}^{n} \frac{1}{n^2} \Var(X_k) & \text{(Variance properties)} \\
      |                                                         &{} = \frac{\Var(X_1)}{n}. & \text{(Identical distribution)}
      |     \end{align*}\end{equation}
      | 
 



 

::: .exercise
**Exercise**  
The **covariance matrix** of a vector $\mathbf{X} = [X\_1, \ldots, X\_n]$ of random variables defined on the same probability space is defined to be the matrix $\Sigma$ whose $(i,j)$ th entry is equal to $\Cov(X\_i,X\_j)$. 

 Show that $\Sigma = \mathbb{E}[\mathbf{X} \mathbf{X}']$ if all of the random variables $X\_1, \ldots, X\_n$ have mean zero. (Note: expectation operations on a matrix or vector of random variables entry-by-entry.) 
:::

 

*Solution*. The definition of matrix multiplication implies that the $(i,j)$ th entry of $\mathbf{X} \mathbf{X}'$ is equal to $X\_i
    X\_j$. Therefore, the $(i,j)$ th entry of $\mathbb{E}[\mathbf{X}
    \mathbf{X}']$ is equal to $\mathbb{E}[X\_iX\_j]$, which in turn is equal to $\Cov(X\_i,X\_j)$ since the random variables have zero mean. 

 
### Continuous distributions
 

 Not every random phenomenon is ideally modeled using a discrete probability space. For example, we will see that the study of discrete distributions leads us to the *Gaussian distribution*, which smooths its probability mass out across the whole real number line, with most of the mass near the origin and less as you move out toward $-\infty$ or $+\infty$. 

    center
      img(src="images/gaussian" width=240)
      p.caption The *Gaussian* distribution spreads its probability mass out across the real number line. There is no single point where a positive amount of probability mass is concentrated. 

 We won't be able to work with such distributions using probability mass functions, since the function which maps each point to the amount of probability mass at that point is the zero function. However, calculus provides us with a smooth way of specifying where stuff is on the number line and how to total it up: **integration**. We can define a function $f$ which is larger where there's more probability mass and smaller where there's less, and we can calculate probabilities by integrating $f$. 
 
    center
      img(src="images/density" width=240)
      p.caption The probability measure $\nu$ associated with a density $f$ assigns the measure $\int\_a^b f(x) \, \d x$ to each interval $[a,b]$ 

The simplest possible choice for $f$ is the function which is $1$ on $[0,1]$ and 0 elsewhere. In this case, the probability mass associated with a set $\mathbb{E} \subset [0,1]$ is the total length of $E$. In higher dimensions, $\Omega = [0,1]^2$ with the probability measure $\mathbb{P}(E) = \text{area}(E)$ gives us a probability space, as does $\Omega = [0,1]^3$ with the probability measure $\mathbb{P}(E) = \text{volume}(E)$. 

::: .exercise
**Exercise**  
Consider the probability space $\Omega = [0,1]^2$ with the area probability measure. Show that if $X((\omega\_1, \omega\_2)) = \omega\_1$ and $Y((\omega\_1, \omega\_2)) = \omega\_2$, then the events $\\{X \in I\\}$ and $\\{Y \in J\\}$ are independent for any intervals $I\subset [0,1]$ and $J\subset [0,1]$. 
:::

*Solution*. We have 

    p
      | \begin{equation}
      |       \mathbb{P}(\{X \in I\} \cap \{Y \in J\}) = \text{area}(I \times J) =
      |       \text{length}(I) \text{length}(J),
      |     \end{equation}
      | 
 by the area formula for a rectangle. Since $\text{length}(I) = \mathbb{P}(\\{X \in I\\} \cap \\{Y \in [0,1]\\}) = \mathbb{P}(X
    \in I)$ and $\text{length}(J) = \mathbb{P}(\\{Y \in J\\} \cap \\{X \in [0,1]\\}) = \mathbb{P}(Y
    \in J)$, we conclude that $\\{X \in I\\}$ and $\\{Y \in J\\}$ are independent. 

 

 Just as a function we integrate to find total mass is called a mass density function, the function we integrate to find total probability is called a **probability density function**. We refer to $f$ as a density because its value at a point may be interpreted as limit as $\epsilon \to 0$ of the probability mass in the ball of radius $\epsilon$ around $\omega$ divided by the volume (or area/length) of that ball. 

::: .definition
**Definition**  
Suppose that $\Omega \subset \mathbb{R}^n$ for some $n \geq 1$, and suppose that $f:\Omega \to [0,\infty)$ has the property that $\int\_\Omega f \d V = 1$. We call $f$ a *probability density function*, abbreviated PDF, and we define 

    p
      | \begin{equation}
      |       \mathbb{P}(E) = \int_E f \, \d V
      |     \end{equation}
      | 
 for events $E \subset \Omega$. We call $(\Omega, \mathbb{P})$ a **continuous probability space**. 
:::

 

::: .example
**Example**  
Consider the probability space with $\Omega = [0,1]$ and probability measure given by the density $f(x) = 2x$ for $x \in
    [0,1]$. Find $\mathbb{P}([\frac{1}{2},1])$. 
:::

 

*Solution*. We calculate $\mathbb{P}([\frac{1}{2},1]) =
    \displaystyle{\int\_{\frac{1}{2}}^1 2x \,\d x = \frac{3}{4}}$. 

 

 If $f$ is constant on $\Omega$, then we call $f$ the *uniform measure* on $\Omega$. Note that this requires that $\Omega$ have finite volume. 

 All of the tools we developed for discrete probability spaces have analogues for continuous probability spaces. The main idea is to replace sums with integrals, and many of the definitions transfer over with no change. Let's briefly summarize and follow up with some exercises. 

 
* The distribution of a continuous random variable $X$ is the measure $A\mapsto \mathbb{P}(X \in A)$ on $\mathbb{R}$. 
* The cumulative distribution function $F\_X$ of a continuous random variable $X$ is defined by $F\_X(x) = \mathbb{P}(X \leq x)$ for all $x \in
    \mathbb{R}$. 
* The joint distribution of two continuous random variables $X$ and $Y$ is the measure $A \mapsto \mathbb{P}((X,Y) \in A)$ on $\mathbb{R}^2$. 
* If $(X,Y)$ is a continuous pair of random variables with joint density $f\_{X,Y}: \mathbb{R}^2 \to \mathbb{R}$, then the conditional distribution of $X$ given the event $\\{Y=y\\}$ has density $f\_{X\given Y=y}$ defined by 

    p
      | \begin{equation}
      |       f_{X\given \{Y=y\}}(x)  = \frac{f_{X,Y}(x,y)}{f_Y(y)},
      |     \end{equation}
      | 
 where $\displaystyle{f\_Y(y) = \int\_{-\infty}^\infty f(x,y) \, \d x}$ is the pdf of $Y$
* Two continuous random variables $X$ and $Y$ are independent if $\mathbb{P}((X,Y) \in A \times B) = \mathbb{P}(X \in A) \mathbb{P}(Y \in B)$ for all $A\subset \mathbb{R}$ and $B \subset \mathbb{R}$. This is true if and only if $(X,Y)$ has density $(x,y) \mapsto f\_X(x)f\_Y(y)$, where $f\_X$ and $f\_Y$ are the densities of $X$ and $Y$, respectively. 
* The expectation of a continuous random variable $X$ defined on a probability space $(\Omega, \mathbb{P})$ 

    p
      | \begin{equation}
      |       \mathbb{E}[X] = \int_\Omega X(\omega) f(\omega) \, \d \omega,
      |     \end{equation}
      | 
 where $f$ is $\mathbb{P}$'s density. The expectation is also given by 

    p
      | \begin{equation}
      |       \mathbb{E}[X] = \int_{\mathbb{R}} x f_X(x) \, \d x,
      |     \end{equation}
      | 
 where $f\_X$ is the density of the distribution of $X$. 

 

::: .example
**Example**  
Suppose that $f$ is the function which returns $2$ for any point in the triangle $\Omega$ with vertices $(0,0)$, $(1,0)$, and $(0,1)$ and otherwise returns 0. Suppose that $(X,Y)$ has density $f$. Find the conditional density of $X$ given $\\{Y = y\\}$, where $y$ is a number between and 0 and 1. 
:::

 

*Solution*. Then the conditional density of $X$ given $\\{Y = y\\}$ is the uniform distribution on the segment $[y,1]$, since that interval is the intersection of the triangle and the horizontal line at height $y$. 

 

::: .exercise
**Exercise**  
Find the expectation of a random variable whose density is $f(x)
    = \e^{-x}\boldsymbol{1}\_{x \in [0,\infty)}$. 
:::

 

*Solution*. We calculate 

    p
      | \begin{equation}
      |       \int_{-\infty}^\infty x \e^{-x} \boldsymbol{1}_{x \in [0,\infty)}
      |       \, \d x = \int_{0}^\infty x \e^{-x} \, \d x = 1.
      |     \end{equation}
      | 


 

::: .exercise
**Exercise**  
Show that the cumulative distribution function of a continuous random variable is increasing and continuous. 

(Note: if $f$ is a nonnegative-valued function on $\mathbb{R}$ satisfying $\int\_\mathbb{R} f = 1$, then $\lim\_{\epsilon \to
      0}\int\_{x}^{x+\epsilon}f(t) \d t = 0$ for all $x \in R$.) 
:::

 

*Solution*. The CDF is increasing since $F(s) = \int\_{-\infty}^s f(x) \, \d x
    \leq \int\_{-\infty}^t f(x) \, \d x = F(t)$ whenever $s < t$. 

 To see that $F$ is continuous, we note that the difference between $F(s)$ and $F(s+\epsilon)$ is the integral of the density $f$ over a width- $\epsilon$ interval. Thus we can use the supplied note to conclude that $F(s + \epsilon) \to F(s)$ as $\epsilon \to 0$ for all $s \in \mathbb{R}$. 

 

::: .exercise
**Exercise**  
Suppose that $f$ is a density function on $\mathbb{R}$ and that $F$ is the cumulative distribution function of the associated probability measure on $\mathbb{R}$. Show that $F$ is differentiable and that $F' = f$ wherever $f$ is continuous. 

 Use this result to show that if $U$ is uniformly distributed on $[0,1]$, then $U^2$ has density function $f(x) = \frac{1}{2\sqrt{x}}$ on $(0,1]$. 
:::

 

*Solution*. The equation $F'(x) = f(x)$ follows immediately from the fundamental theorem of calculus. We have 

    p
      | \begin{equation}
      |       F'(x) = \frac{\d }{\d x} \int_{-\infty}^x f(t) \, \d t = f(x)
      |     \end{equation}
      | 
 at any point $x$ where $f$ is continuous. 

 Let $F$ be the CDF of $U^2$. Since $\mathbb{P}(U \le t) = t$ for $t \in [0,1]$, we have $F(x) = \mathbb{P}(U^2 < x) = \mathbb{P}(U < \sqrt{x}) = \sqrt{x}$ for $x \in [0,1]$. Differentiating, we find that the density is $\frac{1}{2\sqrt{x}}$ on $(0,1)$. 

 

::: .exercise
**Exercise**  
Given a cumulative distribution function $F$, let us define the **generalized inverse** $F^{-1}: [0,1] \to [-\infty,\infty]$ so that $F^{-1}(u)$ is the left endpoint of the interval of points which are mapped by $F$ to a value which is greater than or equal to $u$. 

 The generalized inverse is like the inverse function of $F$, except that if the graph of $F$ has a vertical jump somewhere, then all of the $y$ values spanned by the jump get mapped by $F^{-1}$ to the $x$-value of the jump, and if the graph of $F$ is flat over a stretch of $x$-values, then the corresponding $y$-value gets mapped by $F^{-1}$ back to the left endpoint of the interval of $x$ values. 

 The remarkably useful **inverse CDF trick** gives us a way of sampling from any distribution whose CDF we can compute a generalized inverse for: it says that if $U$ is uniformly distributed on $[0,1]$, then the cumulative distribution of $X = F^{-1}(U)$ is $F$. 

 
* Confirm that if the graph of $F$ has a jump from $(x,y\_1)$ to $(x,y\_2)$, then the probability of the event $\\{X = x\\}$ is indeed $y\_2 - y\_1$. 
* Show that the event $\\{X \leq t\\}$ has the same probability as the event $\\{U \leq F(t)\\}$. Conclude that $F$ is in fact the CDF of $X$. Hint: draw a figure showing the graph of $F$ together with $U$ somewhere on the $y$-axis and $X$ in the corresponding location on the $x$-axis. 
* Write a Julia function which samples from the distribution whose density function is $2x\boldsymbol{1}\_{0 \leq x \leq 1}$. 


:::

 

*Solution*.  
* It can be shown that, as result of monotonicity and additivity, 

    p
      | \begin{equation}\mathbb{P}(X < x) = \max\{F(t) : t < x \},\end{equation}
      | 
 whenever the maximum exists. Now, because a CDF is monotonic, if $F$ has a jump from $y\_1$ to $y\_2$ at $x$ it must be the case that $F(x) = y\_2$ and $\max\\{F(t) : t < x \\} = y\_1.$ Therefore, $\mathbb{P}(X < x) = y\_1.$ Since 

    p
      | \begin{equation}\mathbb{P}(X = x)  = F(x) -  \mathbb{P}(X < x)\end{equation}
      | 
 by additivity, it follows that $\mathbb{P}(X = x) = y\_1 - y\_2$ as required. 


* The CDF $F\_U$ of a uniform $[0, 1]$ random variable is 

    p
      | \begin{equation}F_U(t) = \begin{cases}
      | 	0 & \text{if} \; t < 0 \\
      | 	t & \text{if} \; 0 \leq t \leq 1 \\
      | 	1 & \text{otherwise.}
      | 	\end{cases}
      | 	\end{equation}
      | 
 Therefore we have 

    p
      | \begin{equation} \mathbb{P}(U \leq F(t)) = F_U(F(t)) = F(t) = \mathbb{P}(X \leq t)\end{equation}
      | 
 as required. 


* A random variable with this density function has a CDF defined by 

    p
      | \begin{equation}
      | 	F(t) = \begin{cases}
      | 	0 & \text{if} \; t < 0 \\
      | 	t^2 & \text{if} \; 0 \leq t \leq 1 \\
      | 	1 & \text{otherwise}.
      | 	\end{cases}
      | 	\end{equation}
      | 
 Therefore the generalized inverse of $F$ is $F^{-1}(u) = \sqrt{u}$ for all $0 \leq u \leq 1.$ This leads to the following Julia code for sampling from this distribution. 

    pre: code.language-python
      | 
      | 		sqrt(rand())
      | 	




 

 So far we have discussed probability spaces which are specified with the help of either a probability mass function or a probability density function. These are not the only possibilities. For example, if we produce an infinite sequence of independent bits $B\_1, B\_2, \ldots$, then the distribution of $B\_1/3 + B\_2 / 3^2 + B\_3 / 3^3 + \cdots$ has CDF as shown in Figure <a name=fig:cantor></a>. This function doesn't have jumps, so it does not arise from cumulatively summing a mass function. But it does all of its increasing on a set of total length zero (in other words, there is a set of total length 1 on which the derivative of this function is zero), so it also does not arise from cumulatively integrating a density function. 

 In general, a person may propose a probability space by specifying any set $\Omega$, a collection of subsets of $\Omega$ which supports taking countable unions, intersections, and complements, and a function $\mathbb{P}$ defined on that collection of subsets. We require that certain properties are satisfied: 
 
    center
      img(src="images/cantor" width=240)
      p.caption The CDF of the uniform measure on the Cantor set. 

::: .definition
**Definition** (Probability space: the general definition)  
Suppose that $\Omega$ is a set and $\mathbb{P}$ is a function defined on a collection of subsets of $\Omega$(called *events*). If 
*  $\mathbb{P}(\Omega) = 1$, 
*  $\mathbb{P}(E) \geq 0$ for all events $E$, and 
*  $\mathbb{P}(E\_1 \cup E\_2 \cup \cdots) = \mathbb{P}(E\_1) + \mathbb{P}(E\_2) + \cdots$ for all sequences of pairwise disjoint events $E\_1, E\_2, \ldots$, 

 then we say that $\mathbb{P}$ is a probability measure on $\Omega$, and that $\Omega$ together with the given collection of events and the measure $\mathbb{P}$ is a probability space. 
:::

---
> id: conditional-expectation
## Conditional expectation
 

 The **conditional expectation** of $X$ given $\\{Y=y\\}$ is defined to be the expectation of $X$ calculated with respect to its conditional distribution given $\\{Y=y\\}$. For example, if $X$ and $Y$ are continuous random variables, then 

    p
      | \begin{equation}
      |     E[X \given Y = y] = \int_{-\infty}^{\infty}x f_{X \given \{Y = y\}} (x)  \, \d x.
      |   \end{equation}
      | 
 

::: .example
**Example**  
Suppose that $f$ is the function which returns $2$ for any point in the triangle with vertices $(0,0)$, $(1,0)$, and $(0,1)$ and otherwise returns 0. If $(X,Y)$ has joint pdf $f$, then the conditional density of $X$ given $\\{Y = y\\}$ is the mean of the uniform distribution on the segment $[y,1]$, which is $\frac{1+y}{2}$. 
:::

 

 The **conditional variance** of $X$ given $\\{Y=y\\}$ is defined to be the variance of $X$ with respect to its conditional distribution of $X$ given $\\{Y=y\\}$. 

::: .example
**Example**  
Continuing with Example <a name=exam:condexp></a>, the conditional density of $X$ given $\\{Y = y\\}$ is the variance of the uniform distribution on the segment $[y,1]$, which is $\frac{(1-y)^2}{12}$. 
:::

 

 We can regard the conditional expectation of $X$ given $Y$ as a random variable, denoted $\mathbb{E}[X \given Y]$ by coming up with a formula for $\mathbb{E}[X \given \\{Y = y\\}]$ and then substituting $Y$ for $y$. And likewise for conditional variance. 

::: .example
**Example**  
Continuing further with Example <a name=exam:condexp></a>, we have $\mathbb{E}[X \given Y] = \frac{1+Y}{2}$ and $\Var[X \given Y] = \frac{(1-Y)^2}{12}$. 
:::

 

::: .exercise
**Exercise**  
Find the conditional expectation of $X$ given $Y$ where the pair $(X,Y)$ has density $x + y$ on $[0,1]^2$. 
:::

 

*Solution*. We calculate the conditional density as 

    p
      | \begin{equation}
      |       \frac{f_{X,Y}(x,y)}{f_Y(y)} = \frac{x + y}{y + \frac{1}{2}},
      |     \end{equation}
      | 
 which means that 

    p
      | \begin{equation}
      |       \mathbb{E}[X \given Y = y] = \int_0^1 \frac{x(x+y)}{y + \frac{1}{2}} \,
      |       \d x = \frac{3y+2}{6(y+\frac{1}{2})}.
      |     \end{equation}
      | 
 So $\mathbb{E}[X \given Y] = \frac{3Y+2}{6(Y+\frac{1}{2})}$

 

 Conditional expectation can be helpful for calculating expectations, because of the **tower law**. 

::: .theorem
**Theorem** (Tower law of conditional expectation)  
If $X$ and $Y$ are random variables defined on a probability space, then 

    p
      | \begin{equation}
      |       \mathbb{E}[\mathbb{E}[X \given Y]] = \mathbb{E}[X].
      |     \end{equation}
      | 

:::

 

::: .exercise
**Exercise**  
Consider a particle which splits into two particles with probability $p \in (0,1)$ at time $t=1$. At time $t = 2$, each extant particle splits into two particles independently with probability $p$. 

 Find the expected number of particles extant just after time $t =
    2$. Hint: define $Y$ to be $1$ or $0$ depending on whether the particle splits at time $t = 1$, and use the tower law with $Y$. 
:::

 

*Solution*. If $X$ is the number of particles and $Y$ is the indicator of the event that the particle split at time $1$, then 

    p
      | \begin{equation}
      |       \mathbb{E}[X \given \{Y = 0\}] = 2(p) + 1(1-p) = 1+p
      |     \end{equation}
      | 
 while 

    p
      | \begin{equation}
      |       \mathbb{E}[X \given \{Y = 1\}] = 2(1+p) = 2 + 2p.
      |     \end{equation}
      | 
 Therefore, $\mathbb{E}[X \given \\{Y = y\\}] = (1+p)(1+Y)$. By the tower law, we have 

    p
      | \begin{equation}
      |       \mathbb{E}[X] = \mathbb{E}[\mathbb{E}[X \given Y]] = (1+p)(1+\mathbb{E}[Y]) = (1+p)^2.
      |     \end{equation}
      | 


---
> id: central-limit-theorem
## Central limit theorem
 
The law of large numbers tells us that the distribution $\nu$ of a mean of many independent, identically distributed finite-variance, mean-$\mu$ random variables is concentrated around $\mu$. This a mathematical formalization of the well-known fact flipping a coin many times results in a heads proportion close to 1/2 with high probability, or the average of many die rolls is very close to 3.5 with high probability. 

The **central limit theorem** gives us precise information about *how* the probability mass of $\nu$ is concentrated around its mean. 

Consider a sequence of independent fair coin flips $X\_1, X\_2, \ldots$, and define the sums 

    p
      | \begin{equation}
      |     S_n = X_1 + \cdots + X_n,
      |   \end{equation}
      | 
      
 for $n \geq 1$. The probability mass functions of the $S\_n$'s can be calculated exactly, and they are graphed in Figure <a name=fig:CLT></a> for several values of $n$. We see that the graph is becoming increasingly Gaussian-shaped as $n$ increases. 

 If we repeat this exercise with other distributions in place of $\text{Bernoulli}(1/2)$, we obtain similar results. For example, the probability mass functions for sums of the independent Poisson(3) random variables is shown in Figure <a name=fig:CLTpoisson></a>. Not only is the shape of the graph stabilizing as $n$ increases, but we're getting the *same* shape as in the Bernoulli example. 

    row.padded
      center
        img(src="images/bernoulliCLT" width=240)
        p.caption Probability mass functions of sums of Bernoulli(1/2) random variables.
      center
        img(src="images/otherCLT" width=240)
        p.caption Probability mass functions of sums of Poisson(3) random variables. 

 To account for the shifting and spreading of the distribution of $S\_n$, we *normalize* it: we subtract its mean and then divide by its standard deviation to obtain a random variable with mean zero and variance 1 (see Exercise <a name=exer:mean-var-sample-mean></a>: 

    p
      | \begin{equation}
      |     S_n \quad\stackrel{\text{shift}}{\longrightarrow}\quad
      |     S_n - n\mu \quad \stackrel{\text{scale}}{\longrightarrow}\quad
      |     \frac{S_n - n\mu}{\sigma\sqrt{n}}
      |   \end{equation}
      | 
 

 Let's define $S\_n^* = \frac{S\_n - n\mu}{\sigma\sqrt{n}}$, which has mean 0 and variance 1. Based on Figures <a name=fig:CLT></a> and <a name=fig:CLTpoisson></a>, we conjecture that the distribution of $S\_n^\*$ converges as $n\to\infty$ to the distribution $\mathcal{N}(0,1)$. Indeed, that is the case: 

::: .theorem
**Theorem** (Central Limit theorem)  
Suppose that $X\_1,X\_2,\ldots,$ are independent, identically distributed random variables with mean $\mu$ and finite standard deviation $\sigma$, and defined the normalized sums $S\_n^* = (X\_1 + \cdots + X\_n - n\mu)/(\sigma\sqrt{n})$ for $n \geq 1$. 

 For all $-\infty \leq a < b \leq \infty$, we have 

    p
      | \begin{equation}
      |       \lim_{n\to\infty} P( a < S_n^* < b) = P(a < Z < b),
      |     \end{equation}
      | 
 where $Z \sim \mathcal{N}(0,1)$. In other words, the sequence $S\_1^\*, S\_2^\*,\ldots$ converges in distribution to $Z$. 
:::


 The **normal approximation** is the technique of approximating the distribution of $S\_n^*$ as $\mathcal{N}(0,1)$. 

::: .example
**Example**  
Suppose we flip a coin which has probability 60% of turning up heads $n$ times. Use the normal approximation to estimate the value of $n$ such that the proportion of heads is between 59% and 61% with probability approximately 99%. 
:::

 

*Solution*. We calculate the standard deviation $\sigma = \sqrt{(0.4)(0.6)}$ and the mean $\mu = 0.6$ of each flip, and we use these values to rewrite the desired probability in terms of $S\_n^*$. We find 

    p
      | \begin{align*}
      |       P\left( 0.59 < \frac{1}{n}S_n < 0.61\right) &= P\left( -0.01  < \frac{S_n - \mu n}{n}
      |                                                     < 0.01\right) \\\\
      |                                                   &= P\left(
      |                                                     -\frac{0.01\sqrt{n}}{\sqrt{0.4\cdot0.6}}
      |                                                     < \frac{S_n - \mu n}{\sigma\sqrt{n}}
      |                                                     <\frac{0.01\sqrt{n}}{\sqrt{0.4\cdot0.6}}\right),
      |   \end{align*}
      | 
      
 where the last step was obtained by multiplying all three expressions in the compound inequality by $\sqrt{n}/\sigma$. Since $S\_n^\*$ is distributed approximately like a standard normal random variable, the normal approximation tells us to look for the least $n$ so that 

    p
      | \begin{equation}  
      |     \int_{-a_n}^{a_n} \, dt > 0.99,
      |   \end{equation}
      | 
      
 where $a\_n = 0.01\sqrt{n}/\sqrt{0.4\cdot0.6}$. By the symmetry of the Gaussian density, we may rewrite <a name=eq:99></a> as 

    p
      | \begin{equation}
      |   \int_{-\infty}^{a_n} \, dt > 0.995.
      |   \end{equation}
      | 
      
 Defining the normal CDF $\mathbb{P}hi(x) = \int\_{-\infty}^x \frac{1}{\sqrt{2\pi}}e^{-t^2/2}\, dt$, we want to find the least integer $n$ such that $a\_n$ exceeds $\mathbb{P}hi^{-1}(0.995)$. The following code tells us that $\mathbb{P}hi^{-1}(0.995) \approx 2.576$. 

    pre: code.language-python
      | 
      |     using Distributions
      |     quantile(Normal(0,1),0.995)
      |   
      
 Setting this equal to $a\_n$ and solving for $n$ gives 15{,}924. This approximation is *much* closer to the true value of 15{,}861 than the bound $5.76 \times 10^{10}$ we got from Chebyshev's inequality (see Examples <a name=exam:coin-flip-wlln></a> and <a name=exam:coin-flip-exact></a>). 

 

::: .example
**Example**  
Consider a sum of $n$ independent Bernoulli random variables with $p = 1/2$, and let $m\_n:\mathbb{R} \to [0,1]$ be the pmf of $S\_n^\*$. Show that $\lim\_{n\to\infty} m\_n(x) = 0$ for all $x \in \mathbb{R}$, and explain why this does not contradict the central limit theorem. 

 For simplicity, you may assume that $n$ is even. 
:::

 

*Solution*. We begin by calculating 

    p
      | \begin{equation}
      |       S_n^* = \frac{X_1 + \cdots + X_n - n/2}{\frac{1}{2}\sqrt{n}}
      |     \end{equation}
      | 
 The probability of the event $\mathbb{P}(S\_n^\*=x)$ is maximized when $x = 0$, and this maximum probability is 

    p
      | \begin{equation}
      |       p_n = \binom{n}{n/2}\left(\frac{1}{2}\right)^{n}.
      |     \end{equation}
      | 
 We have already determined in Exercise <a name=exer:stirling></a> that $p\_n \to 0$ as $n\to\infty$. 

 This finding does not contract the central limit theorem, since convergence in distribution is not based on convergence of the amount of probability mass at individual points but rather on the amount of probability mass assigned to *intervals*. In any positive-width interval, the distribution of $S\_n^\*$ has many points with nonzero probability mass. Since there are many of them, they can be small individually while nevertheless totalling up to a non-small mass. 

 

::: .exercise
**Exercise**  
Suppose that the percentage of residents in favor of a particular policy is 64%. We sample $n$ individuals uniformly at random from the population. 

 
* In terms of $n$, find a interval $I$ centered at 0.64 such that the proportion of residents polled who are in favor of the policy is in $I$ with probability about 95%. 


* How many residents must be polled for the proportion of poll participants who are in favor of the policy to be between 62% and 66% with probability at least 95%? 


:::

 

*Solution*. Let $X\_i$ be the $i$ th sample from the population (1 if the resident is in favor, and 0 otherwise). Then the proportion of the residents in favor of the policy is $\overline{X} = \frac{X\_1+X\_2 + \cdots +X\_n}{n}.$ Each $X\_i$ is a Bernoulli $(0.64)$ random variable with $\mathbb{E}[X\_i] = 0.64$ and $\sigma(X\_i)= \sqrt{0.64(1 - 0.64)} = 0.48$. 

 
* We need to find $\varepsilon > 0$ such that $\mathbb{P}\left(0.64 - \varepsilon \leq \overline{X} \leq 0.64 +
        \varepsilon\right) = 0.95.$ Equivalently, we need to find $\varepsilon > 0$ such that $\mathbb{P}\left(\frac{-n\varepsilon}{\sigma(X\_1)\sqrt{n}} \leq \frac{X\_1+X\_2+ \cdots + X\_n - 0.64n}{\sigma(X\_1)\sqrt{n}} \leq \frac{n\varepsilon}{\sigma(X\_1)\sqrt{n}}\right) = 0.95.$ Now by the Central Limit Theorem, $\frac{X\_1+X\_2+ \cdots + X\_n - 0.64n}{\sigma(X\_1)\sqrt{n}} \thicksim \mathcal{N}(0, 1)$ for $n$ large. Since $\mathbb{P}(-1.96 \leq Z \leq 1.96) \approx 0.95$ for $Z \thicksim \mathcal{N}(0, 1),$ we look to solve 

    p
      | \begin{equation}\frac{n\varepsilon}{\sigma(X_1)\sqrt{n}} \approx 1.96.\end{equation}
      | 
 Therefore, 

    p
      | \begin{equation}\varepsilon = 1.96 \frac{\sigma(X_1)}{\sqrt{n}} =
      |         \frac{0.9408}{\sqrt{n}}
      | \end{equation}
 and with probability $95\%,$ the proportion of polled residents in favor of the policy will be in $I = [0.64 - \varepsilon, 0.64 + \varepsilon].$ 

* We need $n$ such that $\mathbb{P}(0.64 - 0.02 \leq \overline{X} \leq 0.64 + 0.02) \geq 0.95.$ From above, we find that $0.02 \geq \frac{0.9408}{\sqrt{n}}$ and thus $n \geq \left(\frac{0.9408}{0.02}\right)^2  \approx 2212.8.$ Therefore at least $2,213$ residents must be polled. 


::: .exercise
**Exercise**  
Suppose that $X\_1, X\_2, \ldots$ is a sequence of independent, identically distributed random variables with variance 2 and mean 7. Find the limits of each of the following probabilities $n\to\infty$. 
*  $\mathbb{P}(X\_1 + \cdots + X\_{n} = 7n)$
*  $\mathbb{P}(6.9n < X\_1 + \cdots + X\_{n} < 7.1n)$
*  $\mathbb{P}(7n < X\_1 + \cdots + X\_{n} < 7n + 3\sqrt{n})$
*  $\mathbb{P}(6n < X\_1 + \cdots + X\_{n} < 7n + 3\sqrt{n})$

:::


*Solution*. Let $Z \thicksim \mathcal{N}(0, 1).$ 
* For each non-negative integer $n,$ we have $\mathbb{P}(X\_1+\cdots +X\_n = 7n) = \mathbb{P}\left(\frac{X\_1+\cdots +X\_n - 7n}{\sqrt{2n}} = 0\right).$ By the Central Limit Theorem (CLT), 

    p
      | \begin{equation}
      | \lim\limits_{n \to \infty}\mathbb{P}\left(\frac{X_1+\cdots +X_n - 7n}{\sqrt{2n}} = 0\right) = \mathbb{P}(Z= 0) = 0.
      | \end{equation}
      | 

* We have 

    p
      | \begin{equation}\begin{align*}
      | 	\lim\limits_{n \to \infty}\mathbb{P}(6.9n< X_1+\cdots +X_n<7.1n) &{}= \lim\limits_{n \to \infty}\mathbb{P}\left(\frac{-0.1n}{\sqrt{2n}} < \frac{X_1+\cdots +X_n - 7n}{\sqrt{2n}} < \frac{0.1n}{\sqrt{2n}} \right) \\
      | 		&{}= \lim\limits_{n \to \infty}\mathbb{P}\left(\frac{-0.1\sqrt{n}}{\sqrt{2}}< \frac{X_1+\cdots +X_n - 7n}{\sqrt{2n}} < \frac{0.1\sqrt{n}}{\sqrt{2}} \right) \\
      | 		&{}= \mathbb{P}(-\infty< Z<\infty) = 1
      | \end{align*}\end{equation}
      |
       
 by the CLT. 


* Since $\mathbb{P}(7n< X\_1+\cdots +X\_n<7n+3\sqrt{n}) = \mathbb{P}\left(0 < \frac{X\_1+\cdots +X\_n - 7n}{\sqrt{2n}} < \frac{3}{\sqrt{2}} \right)$ for all $n \geq 1,$ we find that 

    p
      | \begin{equation}\lim\limits_{n \to \infty}\mathbb{P}(7n< X_1+\cdots +X_n<7n+3\sqrt{n}) = \mathbb{P}\left(0 < Z < \frac{3}{\sqrt{2}}\right) \approx 0.483\end{equation}
      | 
      
 by the CLT. 


* We have 

    p
      | \begin{align*}
      | \lim\limits_{n \to \infty}\mathbb{P}(6n< X_1+\cdots +X_n<7.1n) &{}= \lim\limits_{n \to \infty}\mathbb{P}\left(\frac{-n}{\sqrt{2n}} < \frac{X_1+\cdots +X_n - 7n}{\sqrt{2n}} < \frac{3\sqrt{n}}{\sqrt{2n}} \right) \\\\ 
      | &{}= \lim\limits_{n \to \infty}\mathbb{P}\left(\frac{-\sqrt{n}}{\sqrt{2}}< \frac{X_1+\cdots +X_n - 7n}{\sqrt{2n}} < \frac{3}{\sqrt{2}} \right) \\\\ 
      | &{}= \mathbb{P}\left(-\infty< Z<\frac{3}{\sqrt{2}}\right) \approx 0.983
      | \end{align*}
      | 
      
 by the CLT. 



