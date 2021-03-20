# Probability

> id: intro
> description: Introduction to mathematical probability, including probability models, conditional probability, expectation, and the central limit theorem.
> color: "#349a8e"
> next: data-science-utilities
> author: Samuel S. Watson

## Introduction

When we do data science, we begin with a data set and work to gain insights about the process that generated the data. Crucial to this endeavor is a robust vocabulary for discussing the behavior of data-generating processes.

[Continue](btn:next)

---
> id: step-1

It is helpful to initially consider data-generating processes whose randomness properties are specified completely and precisely. The study of such processes is called **probability**. For example, "What's the probability that I get at least 7 heads in 10 independent flips of a fair coin?" is a probability question, because the setup is fully specified: the coins have exactly 50% probability of heads, and the different flips do not affect one another.

[Continue](btn:next)

---
> id: step-2

The question of whether the coins are really fair or whether the flips are really independent will be deferred to our study of *statistics*. In statistics, we will have the *outcome* of a random experiment in hand and will be looking to draw inferences about the unknown *setup*. Once we are able to answer questions in the "setup $\rightarrow$ outcome" direction, we will be well positioned to approach the "outcome $\rightarrow$ setup" direction.

[Continue](btn:next)

---
> id: step-3

::: .exercise
**Exercise**  

Each of the questions below is a probability question or a statistics question. Select ones which are *probability* questions.

    x-picker.list
        .item.bblue.pill.md(data-error="incorrect") On days when the weather forecast says that the chance of rain is 10%, it actually rains only about 5% of the time. What is the probability of rain on a day when the weather forecast says "10% chance of rain"?
        .item.bblue.pill.md If it will rain today with probability 40%, what is the probability that it will *not* rain today?
        .item.bblue.pill.md If you roll two fair dice, what is the average total number of pips showing on the top faces?
        .item.bblue.pill.md(data-error="incorrect") Your friend rolled 12 on each of the first three rolls of the board game they're playing with you. What is the probability that the dice they're using are weighted in favor of the 6's?

:::

---
> id: step-4

*Solution.* The first question is **statistics**. We don't know the probability of rain, and we are trying to draw an inference about it based on observed samples.

The second question is a **probability** question. We are given the setup and asked a question which assumes its validity.

The third question is also a **probability** question. We're told the dice are fair, and we're asked a question about the outcome of the rolls.

The third question is a **statistics** question, since the outcome of the rolls is known, and the probabilities are in question.

---
> id: counting
## Counting

We begin our study of probability with a closely related topic: *counting*.

We first learn to count the number of elements in a set by mentally [traversing](gloss:traverse) it while reciting a sequence of natural numbers: "one, two, three, ...". The last number recited when all elements have been counted is the number of elements in the set. However, that approach quickly becomes impractical if the set is large, and it doesn't yield much insight. Therefore, we will build up a toolkit of principles for reasoning about counting problems.

[Continue](btn:next)

---
> id: step-5

### The fundamental principle of counting

::: .exercise
**Exercise**  
If you flip a coin and roll a die, there are [[12]] possible flip-roll pairs.
:::

---
> id: step-6

This exercise is a special case of the **fundamental principle of counting**:

::: .theorem
**Theorem** (Fundamental principle of counting)  
If one experiment has $m$ possible outcomes, and if a second experiment has $n$ possible outcomes for each of the outcomes in the first experiment, then there are $mn$ possible outcomes for the pair of experiments.
:::

[Continue](btn:next)

---
> id: step-7

One simple way to prove the fundamental theorem of counting is to observe that the possible outcomes for the pair of experiments can be arranged to form an $m\times n$ rectangle:

``` latex
\begin{array}{c|cccccc}
  & 1 & 2 & 3 & 4 & 5 & 6 \\ \hline
\texttt{H} & (\texttt{H},1) & (\texttt{H},2) & (\texttt{H},3) & (\texttt{H},4) & (\texttt{H},5) & (\texttt{H},6) \\
\texttt{T} & (\texttt{T},1) & (\texttt{T},2) & (\texttt{T},3) & (\texttt{T},4) & (\texttt{T},5) & (\texttt{T},6)
\end{array}
```

[Continue](btn:next)

---
> id: step-8

The fundamental principle of counting may be used to solve problems that have a different setup than the flip-roll problem.

::: .exercise
**Exercise**  
The number of ordered triples of *distinct* elements from $\\{1,2,3,4\\}$ is [[24]].
:::

---
> id: step-9

*Solution.* This problem is different from the previous one because the choice for which number goes in the first slot in the tuple affects the subsequent choices. If we choose 3 first, then we can't choose it for the second or third slots. However, the *number* of options for each choice is the same regardless of the previous choices: we have four choices for the first slot, then three for the second (once the first choice has been made), then two for the third. Thus there are $4 \times 3 \times 2 = 24$ ordered triples.

[Continue](btn:next)

---
> id: step-10

So that it's extra clear there's no sleight of hand involved in this argument, here's a graphic organizer for all 24 triples and the choices made along the way:

    figure: img(src="images/counting-tree.svg")

[Continue](btn:next)

---
> id: step-11

We can generalize this idea to count the number of ordered $r$-tuples of distinct elements of an $n$-element set. We begin forming an $r$-tuple by selecting any one of the $n$ possibilities for the first entry. Given any of the choices for the first entry, there are $n-1$ choices for the second entry. By the fundamental principle of counting, there are $n(n-1)$ choices for the first two entries. Continuing in this way, we find that there are

``` latex
n(n-1)(n-2) \cdots (n-r+1)
```

choices for filling in all $r$ entries. We write $n(n-1)(n-2) \cdots (n-r+1)$ as $(n)\_r$, read as "$n$ falling $r$".

[Continue](btn:next)

---
> id: step-12

::: .exercise
**Exercise**  
There are [[648]] three-digit positive integers with distinct digits.

Note: a positive integer must be between 100 and 999 (inclusive) to count as a three-digit integer.
:::

---
> id: step-13

*Solution.* There are 9 choices for the first digit, then for any of those choices there are 9 choices for the second digit. Finally, given any pair of digits in the first two positions, there are 8 choices for the last entry. So there are $9\cdot 9 \cdot 8  = \boxed{648}$ choices in total.

[Continue](btn:next)

---
> id: step-14

### Binomial coefficients

The number of $r$-element subsets of an $n$-element set is denoted $\binom{n}{r}$. Expressions of the form $\binom{n}{r}$ are called **binomial coefficients**.

::: .example
**Example**  
We have $\binom{4}{3} = 4$, since there are four ways to choose a 3-element subset of a 4-element set. The sets

``` latex
\{1,2,3\}, \{1,2,4\}, \{1,3,4\}, \{2,3,4\}
```

are all of the 3-element subsets of $\\{1,2,3,4\\}$.
:::

[Continue](btn:next)

---
> id: step-15

To work out a general procedure for evaluating $\binom{n}{r}$, we may first count the number of $r$-tuples and then account for all of the repeats. For example, if $r = 3$, then the tuples

``` latex
(1,2,3), (1,3,2), (2,1,3), (2,3,1), (3,1,2), (3,2,1)
```

should collectively contribute 1, rather than 6, to the total count. Since every set of $r$ elements corresponds to $r(r-1)(r-2)\cdots (2)(1)$ $r$-tuples of distinct elements, we divide the number of $r$-tuples by this number to obtain an expression for $\binom{n}{r}$:

``` latex
\binom{n}{r} = \frac{n(n-1)(n-2)\cdots (n-r+1)}{r(r-1)(r-2)\cdots (2)(1)}.
```

We often abbreviate the product $r(r-1)(r-2)\cdots (2)(1)$ as $r!$. Thus

``` latex
\binom{n}{r} = \frac{(n){}_r}{r!}
```

::: .exercise
**Exercise**  
Of the 1024 total length-10 strings composed of the symbols `{code} H` and `{code} T`, [[210]] of them have exactly 6 `{code} T`'s and 4 `{code} H`'s. (For example, `{code} HHTHTTTHTT` is one such string).
:::

---
> id: step-16

*Solution.* For each 6-element subset of the 10 positions in the string, we can place `{code} T`'s in those six positions and `{code} H`'s in the remaining positions to get a sequence of the given description. Therefore, there are $\binom{10}{6} = 210$ total strings with exactly 6 `{code} T`'s.

[Continue](btn:next)

---
> id: step-17

::: .exercise
**Exercise** (Principle of Inclusion-Exclusion)  
Let $\Omega = \\{0, 1, 2, \cdots, 100\\}$ be the set of natural numbers up to and including $100$. Let $A \subset \Omega$ the subset of integers divisible by $3$, and $B \subset \Omega$ the subset of integers divisible by $5$.
* Compute $|A|$.
* Compute $|B|$.
* Compute $|A \cap B|$.
* Explain why $|A \cup B| = |A| + |B| - |A \cap B|$.
* Use the prior steps to find $|A \cup B|$.

:::

    x-quill

---
> id: step-18

*Solution.*  
* There are $33$ multiples of $3$ between $1$ and $100.$ Including zero in the count as well, we get $|A| = 34.$


* There are $20$ multiples of $5$ between $1$ and $100.$ Adding 1 to account for zero gives $|B| = 21.$


* Elements of $A \cap B$ are zero and multiples of $15$ in $\Omega.$ It thus follows that $|A \cap B| = 7.$


*  $|B| - |A \cap B|$ gives the numer of elements that are in $B$ but not in $A.$ Adding $|A|$ gives the total number of elements in $A \cup B.$


* Using values calculated above, we have $|A\cup B| = 34 + 21 - 7 = 48.$


[Continue](btn:next)

---
> id: step-19


::: .exercise
**Exercise**  
The English alphabet has [[67108864]] subsets. (Hint: you can get [Bruno](gloss:bruno) to do arithmetic calculations for you!)

For example, $\\{\mathrm{a}, \mathrm{r}, \mathrm{w}\\}$ and $\\{\mathrm{d}, \mathrm{g}, \mathrm{m}, \mathrm{x}, \mathrm{y}, \mathrm{z}\\}$ are two such subsets.
:::

---
> id: step-20

*Solution.* There are $2^{26} = 67{,}108{,}864$ subsets of the alphabet, because we can form a subset by choosing for each letter whether to include it or exclude it. By the fundamental principle of counting, the number of ways to make these 26 choices is $2 \times 2 \times \cdots
  \times 2 = 2^{26}$.

[Continue](btn:next)

---
> id: step-21

::: .exercise
**Exercise**  
Expand the algebraic expression $(x+y)^3$. Show that the coefficients of this expansion are given by the binomial coefficients of the form $\binom{3}{r}$ where $r$ ranges from 0 to 3:

``` latex
(x+y)^3 = \binom{3}{0}x^3y^0 + \binom{3}{1}x^2y^1 +
\binom{3}{2}x^1y^2 + \binom{3}{3}x^0y^3
```

Write an analogous expansion for $(x+y)^4$.
:::

    x-quill

---
> id: step-22

*Solution.* The first equation holds since both sides work out to $(x+y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$. The second holds since both sides are equal to

``` latex
(x+y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4.
```

Generally, we have

``` latex
(x+y)^n = \binom{n}{0}x^ny^0 + \binom{n}{1}x^{n-1}y^1 + \cdots +
\binom{n}{n-1}x^1y^{n-1} + \binom{n}{n}x^0y^3
```

because a term of the form $x^{n-r}y^r$ is formed when expanding the product $(x+y)(x+y)\cdots(x+y)$ if and only if the $x$ was selected from $n-r$ of the $(x+y)$ factors and $y$ was selected from the remaining $r$ factors. This can happen in $\binom{n}{r}$ ways, so the coefficient of $x^{n-r}y^r$ is $\binom{n}{r}$.

---
> id: probability-models
## Probability Models

In this section we will learn how to mathematically represent and reason about randomness. One benefit of having an explicit mathematical model, as opposed to simply applying some set list of rules to probability situations, is that the intuitive approach to probability has serious limitations when analyzing tricky or sophisticated phenomena. Consider the following example.

::: .example
**Example** (Exchange paradox)  
Two envelopes are placed on the table in front of you, containing $X$ and $2X$ dollars for some unknown positive number $X$ (you don't know which envelope is which). You choose one of the envelopes and discover \$10 inside. You have a choice to switch envelopes; should you?

On one hand, your chance of getting the better envelope was 50% to begin with, and opening the envelope did not provide any information on whether you succeeded. From this perspective, you should be indifferent to switching.

On the other hand, you might reason that the unopened envelope contains either \$20 or \$5, with a 50% chance of each. So on average the other envelope contains \$12.50. from this perspective, you should switch.

:::

[Continue](btn:next)

---
> id: step-23

How can we adjudicate between these contradictory analyses? It would be very helpful to have **model** for the situation—that is, a mathematical object together with a way to translate questions about the situation to unambiguous questions about the object. This provides separation of concerns: questions about the model will be math questions and can be answered with mathematical certainty. Any remaining uncertainty about the applicability of conclusions will pertain to whether the model suitably reflects reality.

[Continue](btn:next)

---
> id: step-24

### Our first probability model

Let's set the exchange paradox aside and develop a model for the following simple experiment: **two flips of a fair coin**. We begin by observing that we can write down all [[4]] possible outcomes:

``` latex
\{(\texttt{H},\texttt{H}), (\texttt{H},\texttt{T}),
(\texttt{T},\texttt{H}), (\texttt{T},\texttt{T})\}.
```

This is clearly an important set; let's call it the **sample space** and denote it as $\Omega$.

---
> id: step-25

Furthermore, we need a way to specify how likely each outcome is to occur. It seems reasonable in this scenario to believe that each of the four outcomes is equally likely, in which case we should assign a probability value of $\frac{1}{4}$ to each outcome. The general mathematical object which assigns a particular value to each element in a set is a [[*function*|*set*|*assigner*]], so we will call this assignment of probability values the **probability mass function** and denote it as $m$.

---
> id: step-26

So all together, we have
* the sample space $\Omega$, which contains the possible outcomes of the experiment, and
* the probability mass function $m$ from $\Omega$ to $[0,1]$ which indicates the probability of each outcome in $\Omega$.

The pair $(\Omega,m)$ is already enough to specify the experiment, but we need a few more translations for the model to be useful.

[Continue](btn:next)

---
> id: step-27

### Events

In the context of the experiment, an *event* is a [predicate](gloss:predicate) whose occurrence can be determined based on the outcome. For example, "the first flip turns up heads" is an event.

::: .exercise
**Exercise**  

Identify a mathematical object in our model $(\Omega, m)$ which can be said to correspond to the phrase "the first flip turns up heads". Which of the following is true of this object?

    x-picker.list
      .item.bblue.pill.md(data-error="incorrect") It is one of the values of the function $m$
      .item.bblue.pill.md(data-error="incorrect") It is the set $\Omega$
      .item.bblue.pill.md It is a subset of $\Omega$
      .item.bblue.pill.md(data-error="incorrect") It is one of the elements of $\Omega$

:::

---
> id: step-28

*Solution.* The outcomes $(\texttt{H},\texttt{H})$ and $(\texttt{H},\texttt{T})$ are the ones which satisfy the condition "the first flip turns up heads". Therefore, the event corresponds to a **subset** of $\Omega$, namely the subset $\\{(\texttt{H},\texttt{H}), (\texttt{H},\texttt{T})\\}$.

---
> id: step-29

::: .exercise
**Exercise**  
Explain how to obtain the probability of an event from the probability mass function.

For concreteness, consider $\Omega = \\{(\texttt{H},\texttt{H}), (\texttt{H},\texttt{T}), (\texttt{T},\texttt{H}), (\texttt{T},\texttt{T})\\}$, a probability mass function which assigns mass $\frac{1}{4}$ to each outcome, and the event $\\{(\texttt{H},\texttt{H}), (\texttt{H},\texttt{T})\\}$.
:::

    x-quill

---
> id: step-30

*Solution.* The probability of the event $\\{(\texttt{H},\texttt{H}), (\texttt{H},\texttt{T})\\}$ is the **sum** of the probabilities of the two outcomes in the event, namely $\frac{1}{4} + \frac{1}{4} = \frac{1}{2}$.

In general, we sum all of the probability masses of the outcomes in the event to find the probability of the event.

Some common terms for combining and modifying predicates include **and**, **or**, and **not**. For example, we might be interested in the event "the first flip comes up heads and the second does not come up heads, or the first flip comes tails". Each of these corresponds to one of the set-theoretic operations we have learned:

::: .exercise
**Exercise**  

Match each term to its corresponding set-theoretic operation by appropriately sorting the items in the second list. Assume that $E$ and $F$ are events.

For concreteness, you can think about the events "first flip comes up heads" and "second flip comes up heads" for the two-flip probability space we've been considering.

* the event that $E$ and $F$ both occur
* the event that $E$ does not occur
* the event that either $E$ occurs or $F$ occurs


    x-sortable
      .item.md(data-index="0") the intersection $E \cap F$
      .item.md(data-index="2") the union $E \cup F$
      .item.md(data-index="1") the complement $E^{\mathsf{c}}$

:::

---
> id: step-31

*Solution.* The event that both $E$ and $F$ occur is $E \cap F$, since $E \cap F$ is the set of outcomes in both $E$ and $F$.

The event that $E$ does not occur is $E^{\mathsf{c}}$, since the complement of $E$ includes all the outcomes that are not in $E$.

The event that either $E$ or $F$ occurs is $E \cup F$, since $E \cup F$ is the set of outcomes which are in either $E$ or $F$.

[Continue](btn:next)

---
> id: step-32

::: .exercise
**Exercise**  
Suppose a group of $n$ friends enter the lottery. For $i \in \\{1, \dots , n\\}$ let $E\_i$ be the event that the $i$th friend wins. Express the following events using set notation.
* At least one friend loses.
* All friends win.
* At least one friend wins.
:::


    x-quill

---
> id: step-33

*Solution.*  
* The event that at least one friend loses is $\bigcup\_{i = 1}^n E\_i^c.$
* The event that all friends win is $\bigcap\_{i=1}^n E\_i.$
* The event that at least one friend wins is $\bigcup\_{i=1}^n E\_i.$

[Continue](btn:next)

---
> id: step-34

Since events play a more prominent role than individual outcomes in discussions of probability, we will demote the probability mass function to auxiliary status and instead focus on the function $\mathbb{P}$ from the set of *events* to $[0,1]$ which assigns to each event the total probability mass therein. For example, for our two-flip experiment, the function $\mathbb{P}$ satisfies

``` latex
\mathbb{P}(\{(\texttt{H},\texttt{T})\}) &= \tfrac{1}{4} \\
\mathbb{P}(\{\}) &= 0 \\
\mathbb{P}(\{(\texttt{H},\texttt{H}), (\texttt{H},\texttt{T}),
(\texttt{T},\texttt{T})\}) &= \tfrac{3}{4} \\
\mathbb{P}(\Omega) &= 1,
```

and so on.

[Continue](btn:next)

---
> id: step-35

::: .exercise
**Exercise**  
If

``` latex
\Omega = \{(\texttt{H},\texttt{H}), (\texttt{H},\texttt{T}),
(\texttt{T},\texttt{H}), (\texttt{T},\texttt{T})\},
```

then the number of elements in the domain of $\mathbb{P}$ is [[16]].

:::

*Solution.* The domain of $\mathbb{P}$ is the set of subsets of $\Omega$. Since $\Omega$ has 4 elements, there are $2 \times 2 \times 2 \times 2 = \boxed{16}$ elements in the domain of $\mathbb{P}$.

[Continue](btn:next)

---
> id: step-36

We call $\mathbb{P}(E) = \sum\_{\omega \in E} m(\omega)$ the **probability measure** associated with the probability mass function $m$. The pair $(\Omega, \mathbb{P})$ is called a **probability space**. Probability measures satisfy the following properties.

::: .theorem
**Theorem** (Properties of a probability measure)  

 If $(\Omega,\mathbb{P})$ is a probability space, then

*  $\mathbb{P}(\Omega) = 1$—"something has to happen"
*  $\mathbb{P}(E) \geq 0$ for all $E \subset \Omega$—"probabilities are non-negative"
*  $\mathbb{P}(E \cup F) = \mathbb{P}(E) + \mathbb{P}(F)$ **if** $E$ and $F$ are mutually exclusive events—"probability is additive"

:::

[Continue](btn:next)

---
> id: step-37

These are the fundamental properties of a probability measure on a finite sample space $\Omega$, in the sense that functions from the set of events to $[0,1]$ satisfying the above properties are in one-to-one correspondence with probability mass functions.

One further important property is a consequence of the fundamental ones. It says that if $B$'s occurrence implies $A$'s occurrence, then $\mathbb{P}(B) \leq \mathbb{P}(A)$.

::: .exercise
**Exercise** (Monotonicity)  
Use the additivity property and the fact that $A = (A \cap B) \cup (A \cap B^{\mathsf{c}})$ to show that if $B \subset A \subset \Omega,$ then $\mathbb{P}(B) \leq \mathbb{P}(A).$
:::

    x-quill

---
> id: step-38

*Solution.* We have $\mathbb{P}(A) = \mathbb{P}(A \cap B) + \mathbb{P}(A \cap B^c)$ by additivity. Since $A \cap B = B$ and probabilities are non-negative, it follows that

``` latex
\mathbb{P}(A) = \mathbb{P}(B) + \mathbb{P}(A \cap B^c) \geq \mathbb{P}(B)
```

as required.

[Continue](btn:next)

---
> id: step-39

::: .exercise
**Exercise** (Subadditivity)  
Show that $\mathbb{P}(A \cup B) \leq \mathbb{P}(A) + \mathbb{P}(B)$ for all events $A$ and $B$.

Use this property to show that if $A$ occurs with probability zero and $B$ occurs with probability zero, then the probability that $A$ *or* $B$ occurs is also zero.
:::

    x-quill

---
> id: step-40

*Solution.* Define $\tilde{A}$ to be the set of $\omega$'s which are in $A$ but not $B$, and let $\tilde{B}$ be the set of $\omega$'s which are in $B$ but not $A$. Then

``` latex
\mathbb{P}(A \cup B) = \mathbb{P}(\tilde{A} \cup \tilde{B} \cup (A \cap B)) =
\mathbb{P}(\tilde{A}) + \mathbb{P}(\tilde{B}) + \mathbb{P}( A \cap B),
```

 since $\tilde{A}$, $\tilde{B}$, and $A \cap B$ are disjoint and together make up $A \cup B$. Furthermore, since $\mathbb{P}(A) =
    \mathbb{P}(\tilde{A}) + \mathbb{P}(A \cap B)$ and similarly for $B$, we have

``` latex
\mathbb{P}(A \cup B) &= \mathbb{P}(A) - \mathbb{P}(A \cap B) + \mathbb{P}(B) - \mathbb{P}(A\cap B) + \mathbb{P}(A
\cap B) \\\ &= \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B) \leq \mathbb{P}(A) + \mathbb{P}(B),
```

as desired.

We have $\mathbb{P}(A \cup B) \leq \mathbb{P}(A) + \mathbb{P}(B) \leq 0 + 0 = 0$ if both $A$ and $B$ have probability zero, so $\mathbb{P}(A \cup B) = 0$ in that case.

[Continue](btn:next)

---
> id: step-41

### Countable additivity

If $\Omega$ is countably infinite, then the additivity property extends to *countable additivity*: If $E\_1, E\_2, \ldots$ is a pairwise disjoint sequence of events, then $\mathbb{P}(E\_1 \cup E\_2 \cup \cdots) = \mathbb{P}(E\_1) + \mathbb{P}(E\_2) + \cdots$.

::: .exercise
**Exercise** (Countable additivity)  
Suppose that $\Omega$ is the set of ordered pairs of positive integers, with probability mass $m((i,j)) = 2^{-i-j}$ at each pair $(i,j)$. Show that the probability of the event $\\{(i,j) \in \Omega : i > 2\\}$ is equal to the sum of the probabilities of the events $\\{(i,j) \in \Omega : i = t\\}$ as $t$ ranges over $\\{3, 4, 5, \ldots\\}$
:::

    x-quill

---
> id: step-42

*Solution.* The probability of the event $\\{(i,j) \in \Omega : i > 2\\}$ is the sum of the probability masses of all the points in $\Omega$ which lie to the right of the line $x = 2$. The probability of the event $\\{(i,j) \in \Omega : i = t\\}$ is the sum of the probability masses of all of the points on the vertical line $x = t$. So summing these probabilities over each $t$ value in $\\{3, 4, 5, \ldots\\}$ amounts to totalling the probability mass right of the line $x = 2$ in columns. Since positive quantities may be summed in any order, this column-wise sum will indeed yield the total mass right of the line $x = 2$.

[Continue](btn:next)

---
> id: step-43

::: .exercise
**Exercise**  
Show that the function $m((i,j)) = 2^{-i-j}$ sums to 1 as $(i,j)$ ranges over the set of ordered pairs of positive integers.
:::

    x-quill

---
> id: step-44

*Solution.* The sum along the first column is $1/4 + 1/8 + 1/16 + \cdots = 1/2$, and the sum along the second column is $1/8 + 1/16 + 1/32 + \ldots = 1/4$, and so on. Summing these column sums, we get $1/2 + 1/4 + 1/8 + \cdots = 1$, as desired.


---
> id: step-45
> section: random-variables
## Random Variables

An event may be regarded as [[a binary|an unbounded|a bijective]] function of the outcome of an experiment: based on the outcome, we can say that the event occurred or didn't occur. We will often be interested in specifying richer information about the outcome of an experiment than a simple yes or no. Specifically, we will often want to specify information in the form of a *real number*.

---
> id: step-46

For example, suppose that you will receive a dollar for each head flipped in our two-fair-flips experiment. Then your payout $X$ might be 0 dollars, 1 dollar, or 2 dollars. Because $X$ represents a value which is random (that is, dependent on the outcome of a random experiment), it is called a **random variable**. A random variable which takes values in some finite or countably infinite set (such as $\\{0,1,2\\}$, in this case) is called a **discrete** random variable.

[Continue](btn:next)

---
> id: step-47

Since a random variable associates a real number to each outcome of the experiment, in mathematical terms a random variable is a *function* from the sample space to $\mathbb{R}$. Using function notation, the dollar-per-head payout random variable $X$ satisfies

``` latex
X((\texttt{T}, \texttt{T})) &= 0, \\\
X((\texttt{H}, \texttt{T})) &= 1, \\\
X((\texttt{T}, \texttt{H})) &= 1, \text{ and} \\\
X((\texttt{H}, \texttt{H})) &= 2.
```

[Continue](btn:next)

---
> id: step-48

Note that a random variable $X$, as a function from $\Omega$ to $\mathbb{R}$, does not have its own uncertainty: for each outcome $\omega$, the value of $X(\omega)$ is consistently and perfectly well defined. The randomness comes entirely from thinking of $\omega$ as being selected randomly from $\Omega$. For example, the amount $X$ of money you'll take home from tomorrow's poker night is a random quantity, but the function which maps each poker game outcome $\omega$ to your haul $X(\omega)$ is fully specified by the rules of poker.

[Continue](btn:next)

---
> id: step-49

We can combine random variables using any operations or functions we can use to combine numbers. For example, suppose $X\_1$ is defined to be the number of heads in the first of two coin flips. In other words, we define

``` latex
X_1((\texttt{T}, \texttt{T})) &= 0 \\\
X_1((\texttt{H}, \texttt{T})) &= 1 \\\
X_1((\texttt{T}, \texttt{H})) &= 0 \\\
X_1((\texttt{H}, \texttt{H})) &= 1,
```


and $X\_2$ is defined to be the number of heads in the second flip. Then the random variable $X\_1 + X\_2$ maps each $\omega \in \Omega$ to $X\_1(\omega) + X\_2(\omega)$. This random variable is equal to $X$, since $X(\omega) = X\_1(\omega) + X\_2(\omega)$ for every $\omega \in \Omega$.

[Continue](btn:next)

---
> id: step-50

::: .exercise
**Exercise**  
Suppose that the random variable $X$ represents a fair die roll and $Y$ is defined to be the remainder when $X$ is divided by $4$.

Define a six-element probability space $\Omega$ on which $X$ and $Y$ may be defined, and find $\mathbb{P}(X - Y = k)$ for every integer value of $k$.
:::

    x-quill

---
> id: step-51

*Solution.* We set $\Omega = \\{(1, 1), (2, 2), (3, 3), (4, 0), (5, 1), (6, 2)\\}.$ From the sample space, we see that for any integer value $k,$ we have

``` latex
\mathbb{P}(X - Y = k) = \begin{cases}
  \frac{1}{2} & \text{if} \; k \in \{0, 4\} \\\
            0 & \text{otherwise.}
\end{cases}
```

[Continue](btn:next)

---
> id: step-52

::: .exercise
**Exercise**  
Consider a sample space $\Omega$ and an event $E \subset \Omega$. We define the random variable $\mathbf{1}\_{E} : \Omega \rightarrow \\{0,1\\}$ by

``` latex
\mathbf{1}_{E} (\omega) =
\begin{cases}
  1 & \text{if} \: \omega \in E \\\
  0 & \text{otherwise}.
\end{cases}
```

 The random variable $\mathbf{1}\_{E}$ is called the [indicator](gloss:indicator) random variable for $E.$ If $F$ is another event, which of the following random variables are necessarily equal?

    x-picker.list
      .item.bblue.pill.md $\mathbf{1}\_{E \cap F}$ and $\mathbf{1}\_{E}  \cdot \mathbf{1}\_{F} $
      .item.bblue.pill.md(data-error="overlap") $\mathbf{1}\_{E \cup F}$ and $\mathbf{1}\_{E} + \mathbf{1}\_{F} $
      .item.bblue.pill.md  $\mathbf{1}\_{E}$ and $1 - \mathbf{1}\_{E^c} $

:::

---
> id: step-53

*Solution.*  
* Since $\mathbf{1}\_E \cdot \mathbf{1}\_F = 1$ if and only if $\mathbf{1}\_E = 1$ and $\mathbf{1}\_F = 1,$ we see that $\mathbf{1}\_{E \cap F} = \mathbf{1}\_E \cdot \mathbf{1}\_F.$

* Because $\mathbf{1}\_E + \mathbf{1}\_F$ may be equal to 2 (on the intersection of $E$ and $F$), we cannot have $\mathbf{1}\_{E \cup F} = \mathbf{1}\_E + \mathbf{1}\_F$ in general.

* We observe that $1 - \mathbf{1}\_{E^c} = \mathbf{1}\_E$ because $\mathbf{1}\_{E^c} = 0$ if and only if $\mathbf{1}\_E = 1.$

[Continue](btn:next)

---
> id: probability-distributions
## Probability Distributions

Given a probability space $(\Omega, \mathbb{P})$ and a random variable $X$, the **distribution** of $X$ tells us how $X$ *distributes* probability mass on the real number line. Loosely speaking, the distribution tells us where we can expect to find $X$ and with what probabilities.

[Continue](btn:next)

---
> id: step-54

::: .definition
**Definition** (Distribution of a random variable)  
The distribution (or *law*) of a random variable $X$ is the probability measure on $\mathbb{R}$ which maps a set $A \subset \mathbb{R}$ to $\mathbb{P}(X \in A)$.
:::

[Continue](btn:next)

---
> id: step-55

::: .exercise
**Exercise**  
Suppose that $X$ represents the amount of money you're going to win with the lottery ticket you just bought. Suppose that $\nu$ is the law of $X$. Then $\nu((-\infty,0)) = $ [[0]], $\nu(\\{0\\}) = $ [[0.999999|0.01|1.0]], and $\nu([10000,\infty])$ = [[0.000001|0|1]].
:::

---
> id: step-56

We can think of $X$ as pushing forward the probability mass from $\Omega$ to $\mathbb{R}$ by sending the probability mass at $\omega$ to $X(\omega)$ for each $\omega \in \Omega$. The probability masses at multiple $\omega$'s can stack up at the same point on the real line if $X$ maps the $\omega$'s to the same value.

    figure
      img(src="images/distribution.svg")
      p.caption The distribution of a discrete random variable is the measure on $\mathbb{R}$ obtained by pushing forward the probability masses at elements of the sample space to the locations of their images on the real line.

[Continue](btn:next)

---
> id: step-57

::: .exercise
**Exercise**  
A problem on a test requires students to match molecule diagrams to their appropriate labels. Suppose there are three labels and three diagrams and that a student guesses a matching uniformly at random. Let $X$ denote the number of diagrams the student correctly labels. What is the probability mass function of the distribution of $X$?
:::

    x-quill

---
> id: step-58

*Solution.* The number of correctly labeled diagrams is an integer between 0 and 3 inclusive. Suppose the labels are $\mathrm{A},\mathrm{B},\mathrm{C}$, and suppose the correct labeling sequence is $ABC$ (the final result would be the same regardless of the correct labeling sequence). The sample space consists of all six possible labeling sequences, and each of them is equally likely since the student applies the labels uniformly at random. So we have

``` latex
\Omega &= \{\mathrm{ABC}, \mathrm{ACB}, \mathrm{BAC}, \mathrm{BCA}, \mathrm{CAB}, \mathrm{CBA}\}, \\\
\{X = 0\} &= \{\mathrm{BCA},\mathrm{CAB}\}, \\\
\{X = 1\} &= \{\mathrm{ACB},\mathrm{CBA},\mathrm{BAC}\}, \\\
\{X = 2\} &= \{\}, \text{ and} \\\
\{X = 3\} &= \{\mathrm{ABC}\}.
```

The probability mass function of the distribution of $X$ is therefore

``` latex
m_X(0) = \frac{1}{3}
```

``` latex
m_X(1) = \frac{1}{2}
```

``` latex
m_X(2) = 0
```

``` latex
m_X(3) = \frac{1}{6}
```

All together, we have

``` latex
m_X(x) =
\begin{cases}
  \frac{1}{3} & \text{if }x = 0 \\\
  \frac{1}{2} & \text{if }x = 1 \\\
  \frac{1}{6} & \text{if }x = 3 \\\
  0 & \text{otherwise}.
\end{cases}
```


### Cumulative distribution function

The distribution of a random variable $X$ may be specified by its probability mass function or by its **cumulative distribution function** $F\_X$:

::: .definition
**Definition** (Cumulative distribution function)  
If $X$ is a random variable, then its cumulative distribution function $F\_X$ is the function from $\mathbb{R}$ to $[0,1]$ defined by

``` latex
F_X(x) = \mathbb{P}(X \leq x).
```

:::

    figure
      img(src="images/cdf.svg")
      p.caption.md A probability mass function $m_X$ and its corresponding CDF $F_X$.

[Continue](btn:next)

---
> id: step-59

::: .exercise
**Exercise**  
Consider a random variable $X$ whose distribution is as shown in the figure above. Select the true statements.

    x-picker.list
      .item.pill.bblue.md $\mathbb{P}(-1 < X < 1)$ is greater than $\frac{3}{5}$
      .item.pill.bblue.md $\mathbb{P}(X \geq 2) = 0$
      .item.pill.bblue.md(data-error="incorrect") $\mathbb{P}\left(-\frac{1}{2} < X < 0\right)$ is greater than $\frac{1}{100}$
      .item.pill.bblue.md(data-error="incorrect") $\mathbb{P}(100X < 1)$ is greater than $\frac{1}{2}$

:::

---
> id: step-60

*Solution.* The first one is true, since the CDF goes from about 0.1 at $-1$ to about 0.9 at $+1$. The difference, about 0.8 is larger than 0.6.

The second one is also true, since there is no probability mass past 2.

The third one is false: there is no probability mass in the interval from $-\frac{1}{2}$ to 0.

$\mathbb{P}(100X < 1)$ is equivalent to the probability that $X$ is less than $\frac{1}{100}$, which (reading the graph of the CDF) we see is between $0.25$ and $0.5$. Therefore, the last one is false.

[Continue](btn:next)

---
> id: step-61

::: .exercise
**Exercise**  
Suppose that $X$ is a random variable with CDF $F\_X$ and that $Y = X^2$. Express $\mathbb{P}(Y > 9)$ in terms of the function $F\_X$. For simplicity, assume that $\mathbb{P}(X = -3) = 0$.
:::

    x-quill

---
> id: step-62

*Solution.* By definition of $Y$, we have that $Y^2 > 9$ if $X < -3$ or $X> 3.$ Since these events are mutually exclusive, we have

``` latex
\mathbb{P}(Y > 9) &= \mathbb{P}(X < -3) + \mathbb{P}(X > 3) \\\
                  &= \mathbb{P}(X < -3) + 1 - \mathbb{P}(X \leq 3) \\\
                  &= F_X(-3) + 1 - F_X(3),
```

where the last step follows since $\mathbb{P}(X < -3) = \mathbb{P}(X \leq 3)$ for this random variable $X$.

::: .exercise
**Exercise**  
Random variables with the same cumulative distribution function are not necessarily equal as random variables, because the probability mass sitting at each point on the real line can come from different $\omega$'s.

For example, consider the two-fair-coin-flip experiment and let $X$ be the number of heads. Find another random variable $Y$ which is not equal to $X$ but which has the same distribution as $X$.
:::

[Continue](btn:next)

---
> id: step-63

*Solution.* If we define $Y$ to be the number of *tails*, then it's clear from symmetry that it has the same distribution as $X$. Furthermore, $X$ and $Y$ are unequal as random variables because if $X = 0$, then $Y = 2$(and vice versa).

(In fact, we can express $Y$ in terms of $X$ as $Y = 2-X$.)

---
> id: joint-distributions
## Joint Distributions

The distribution of a random variable is sometimes its called its **marginal** distribution, with the term *marginal* emphasizing that distribution includes information only about a single random variable. If we are interested in two random variables $X$ and $Y$, it is often important to consider their *joint* distribution, which captures probabilistic information about where the pair $(X,Y)$ falls in $\mathbb{R}^2$.

[Continue](btn:next)

---
> id: step-64

::: .definition
**Definition**  
If $X$ and $Y$ are two random variables defined on the same probability space, then the **joint distribution** of $X$ and $Y$ is the measure on $\mathbb{R}^2$ which assigns to each set $A \subset \mathbb{R}^2$ the value $\mathbb{P}((X,Y) \in A)$.
:::

[Continue](btn:next)

---
> id: step-65

If $X$ and $Y$ are [discrete](gloss:discreteRV) random variables, then we can find the probability mass function of $(X,Y)$ by (i) finding all of the pairs $(x,y) \in \mathbb{R}^2$ with the property that the event $\\{X = x\\} \cap \\{Y = y\\}$ has positive probability, and (ii) finding the probability of each such event.

::: .example
**Example**  
Consider the two-fair-coin-flip experiment, and let $X\_1$ be the number of heads in the first flip and $X\_2$ the number of heads in the second flip. Let $Y\_1$ be the number of tails in the first flip.

Show that $X\_1$, $X\_2$, and $Y\_1$ all have the same marginal distributions and but that $(X\_1, X\_2)$ and $(X\_1, Y\_1)$ have different joint distributions.

:::

    x-quill

---
> id: step-66

*Solution.* The random variables $X\_1, X\_2, Y\_1$ all have the same distribution because each can be $1$ or $0$ with probability $\frac{1}{2}.$ On the other hand, $(X\_1, X\_2)$ can take the values $\\{(0, 0), (0, 1), (1, 0), (1, 1)\\}$ with equal probability $\frac{1}{4},$ while $(X\_1, Y\_1)$ can only be either $(0, 1)$ or $(1,0)$ with probability $\frac{1}{2}.$

[Continue](btn:next)

---
> id: step-67

This exercise shows that the joint distribution of two random variables provides information not present in the marginal distributions alone. Conversely, the marginal distributions of two random variables may be recovered from their joint distribution:

::: .exercise
**Exercise**  
Consider a computer program which rolls two virtual dice and returns roll results with probabilities shown in the table.

The probability that die 1 shows 4 is [[0.1527±0.01]].

    figure: img(src="images/dicetable.svg")    
:::

[Continue](btn:next)

---
> id: step-68

*Solution.* The event that the first die shows 4 can be written as a disjoint union of the events $\\{\text{Die 1} = 4\\} \cap \text{Die 2} = j$ where $j$ ranges over the integers 1 to 6. We get

``` latex
\mathbb{P}(\text{Die 1} = 4) &= \sum_{j=1}^6 \mathbb{P}(\text{Die 1} = 4, \text{ Die 2} = j) \\\ &= \frac{1}{36} + \frac{1}{36} +  \frac{1}{72} + \frac{1}{36} + \frac{1}{36} + \frac{1}{36} \\\ &= \frac{11}{72}.
```

::: .exercise
**Exercise**  
Determine which of the following joint distributions on $(X,Y)$ has the property that each random variable $X$ and $Y$ has the same marginal distribution. (Note: each disk indicates a probability mass at a point, with the size of the disk proportional to the mass at that point)

    figure: img(src="images/marginal.svg")

    x-picker.list
      .item.bblue.pill(data-error="marginal") The first one
      .item.bblue.pill(data-error="marginal") The second one
      .item.bblue.pill The third one

:::

---
> id: step-69

**Solution**.
We find the distribution of $X$ by summing the joint distribution along vertical lines, and we obtain the distribution of $Y$ by summing along horizontal lines. Only for the third distribution do these two procedures give the same results.

[Continue](btn:next)

---
> id: step-70

::: .exercise
**Exercise**  
For each of the three joint distributions in the previous exercise, the probability that $X + Y > 0$ is equal to [[1]]. The distribution for which $\mathbb{P}(Y > X)$ is the largest is [[the first one|the second one|the third one]].
:::

---
> id: step-71

*Solution.* Since all of the probability mass is in the first quadrant, both $X$ and $Y$ are positive with probability 1. The probability that $Y > X$ is the total amount of probability mass in the region in the plane above the line $y = x$. The figure with the most mass in that region is the first one.

---
> id: conditional-probability

## Conditional Probability

### Conditional probability measures

One of the most important goals of modeling random phenomena is to account for *partial information*. We often discover something about the outcome of an experiment before we know the outcome exactly. For example, when we flip a fair coin twice, we see the result of the first flip before we see the result of the second flip, and we would like to define a new probability measure which reflects this intermediate knowledge. We call this a **conditional probability measure**.

[Continue](btn:next)

---
> id: step-72

Suppose we observe that the first of two flips is a tail. Then all of the $\omega$'s which are incompatible with this observation should receive a probability of zero under our conditional probability measure. Since we have no new information about the remaining $\omega$'s, it makes sense to keep their probabilities in the same proportions as in the original probability measure.

    figure
      img(src="images/conditional-mass.svg")
      p.caption.md Consider the event $E$ that the first flip is a tail. The conditional probability mass function $\widetilde{m}$ given $E$ assigns probability mass $\frac{1}{2}$ to each of the $\omega$'s in $E$.

[Continue](btn:next)

---
> id: step-73

These two observations are sufficient to fully determine the conditional probability measure. In other words, to condition on an event $E$, we set the masses at elements of $E^\mathsf{c}$ to 0 and multiply the amount of mass at each point in $E$ by $1/\mathbb{P}(E)$ to get the total mass up to 1 without changing the proportions:

::: .definition
**Definition**  
Given a probability space $(\Omega, \mathbb{P})$ and an event $E \subset \Omega$ whose probability is positive, the *conditional probability mass function* given $E$, written as $\omega \mapsto m(\omega | E)$ is defined by

``` latex
m(\omega | E) =
\begin{cases} \frac{m(\omega)}{P(E)} & \text{if }\omega \in E \\\
  0 & \text{otherwise}.
\end{cases}
```

The conditional probability measure given $E$ is the measure associated to $\omega\mapsto m(\omega | E)$: for all events $F$, we have

``` latex
\mathbb{P}(F | E) = \frac{\mathbb{P}(F \cap E)}{\mathbb{P}(E)}.
```

:::

[Continue](btn:next)

---
> id: step-74

::: .exercise
**Exercise**  
Two objects are submerged in a deep and murky body of water. The objects are chosen to be both [positively buoyant](gloss:positivelybuoyant) with probability $\frac{1}{4}$, both are negatively buoyant with probability $\frac{1}{4}$, and with probability $\frac{1}{2}$ the objects have opposite buoyancy. The objects, if they float, rise in the water at different rates, but they are visually indistinguishable.

After the objects are released, an observer sees one of them emerge at the water's surface. What is the conditional probability, given the observed information, that the second object will emerge? [[0.33333±0.01]]
:::

---
> id: step-75

*Solution.* Let's use the given sample space:

``` latex
\Omega = \{\text{both positive}, \text{opposite buoyancy}, \text{both negative}\}
```

The emergence of the object tells us precisely that the event

``` latex
E = \{\text{both positive}, \text{opposite buoyancy}\}
```

occurs. The conditional probability of the event $\\{\text{both positive}\\}$ given $E$ is

``` latex
\frac{\mathbb{P}(\{\text{both positive}\}\cap E)}{\mathbb{P}(E)} =
\frac{\frac{1}{4}}{\frac{1}{4} + \frac{1}{2}} = \frac{1}{3}.
```

[Continue](btn:next)

---
> id: step-76

One reason that conditional probabilities play such an important role in the study of probability is that in many scenarios they are more fundamental than the probability measure on $\Omega$.

::: .example
**Example**  
Consider the following experiment: we roll a die, and if it shows 2 or less we select Urn A, and otherwise we select Urn B. Next, we draw a ball uniformly at random from the selected urn. Urn A contains one red and one blue ball, while urn B contains 3 blue balls and one red ball.

Find a probability space $\Omega$ which models this experiment, find a pair of events $E$ and $F$ such that $\mathbb{P}(E | F) = \frac{3}{4}$.
:::

    x-quill

---
> id: step-77

*Solution.* The four possible outcomes of this experiment are (A, blue), (A, red), (B, blue), and (B, red). So we let our probability space $\Omega$ consist of those four outcomes.

The probability of the outcome (A, blue) is equal to the probability that Urn A is selected times the conditional probability of selecting a blue ball given that Urn A was selected. We interpret the information that Urn A contains an equal number of blue and red balls as a statement that this conditional probability should be $\frac{1}{2}$. Therefore, we assign the probability $\frac{1}{2} \cdot \frac{1}{3} = \frac{1}{6}$ to the event (A, blue).

Likewise, the probabilities we assign to the three other outcomes are $\frac{1}{6}$, $\frac{1}{2}$, and $\frac{1}{6}$, [respectively](gloss:respectively).

    figure: img(src="images/tree.svg")

With probabilities thus assigned to the outcomes in $\Omega$, we should have $\mathbb{P}(E | F) = \frac{3}{4}$ where $E$ is the event that we select a blue ball and $F$ is the event that Urn B was selected. Let us check that this is indeed the case:

``` latex
\frac{\mathbb{P}(E \cap F)}{\mathbb{P}(F)} = \frac{\frac{1}{2}}{\frac{2}{3}} = \frac{3}{4}.
```

We have arrived at an important insight: a probability space may alternatively by specified via a tree diagram showing conditional probabilities, or by the probability space $\Omega$ consisting of the endpoints of the tree diagram. We can translate back and forth between these two representations by multiplying along branches to get from the tree's conditional probabilities to $\Omega$'s outcome probabilities or by calculating conditional probabilities to go from $\Omega$ to the tree diagram.

[Continue](btn:next)

---
> id: step-78

::: .exercise
**Exercise**  
Consider three random variables $X\_1$, $X\_2$, and $X\_3$, each of which is equal to $1$ with probability 0.6 and to 0 with probability 0.4. These random variables are not necessarily independent.
* Find the greatest possible value of the event $X\_1 + X\_2 + X\_3 = 0$.
* Find the least possible value of the event $X\_1 + X\_2 + X\_3 = 0$.
:::


    x-quill

---
> id: step-79

*Solution.*  
* By monotonicity, we have

``` latex
\mathbb{P}(X_1 + X_2 +X_3 = 0) = \mathbb{P}(X_1 = X_2 = X_3 = 0) \leq \mathbb{P}(X_1 = 0) = 0.4.
```

We note that this maximum can be attained by setting $X\_1 = X\_2 = X\_3.$

* The least possible value is zero. This minimum can be attained, for example, if we take $\Omega = \\{\omega\_1, \omega\_2, \omega\_3\\}$, with probability mass $0.4$, $0.2$, and $0.4$, [respectively](gloss:respectively), and set $X\_1(\omega\_1) = 1$, $X\_1(\omega\_2) = 1$, $X\_1(\omega\_3) = 0$, $X\_2(\omega\_1) = 0$, $X\_2(\omega\_2) = 1$, $X\_2(\omega\_3) = 1$, and $X\_3 = X\_1$.

[Continue](btn:next)

---
> id: step-80

### Bayes' Theorem

**Bayes' theorem** tells us how to update beliefs in light of new evidence. It relates the conditional probabilities $\mathbb{P}(A | E)$ and $\mathbb{P}(E | A)$:

``` latex
\mathbb{P}(A | E) = \frac{\mathbb{P}(E | A)\mathbb{P}(A)}{\mathbb{P}(E)} = \frac{\mathbb{P}(E | A)\mathbb{P}(A)}{\mathbb{P}(E |
  A)\mathbb{P}(A) + \mathbb{P}(E | A^{\mathrm{c}})\mathbb{P}(A^{\mathrm{c}})}.
```

The last step follows from writing out $\mathbb{P}(E)$ as $\mathbb{P}(E \cap A) + \mathbb{P}(E \cap A^\mathsf{c})$.

[Continue](btn:next)

---
> id: step-81

Bayes' theorem has many applications to everyday life, some intuitive and others counterintuitive.

::: .example
**Example**  
Suppose you're 90% sure that your package was delivered today and 75% sure that if it was delivered it would be on your door step rather than tucked away in your mailbox. When you arrive at home and do not see your package right away, what is the conditional probability—given the observed information—that you'll find it in your mailbox?
:::

    x-quill

---
> id: step-82

*Solution.* The desired conditional probability is $\mathbb{P}(\text{delivered} | \text{invisible})$, which by Bayes' theorem is

``` latex
\frac{\mathbb{P}(\text{invisible} | \text{delivered})
  \mathbb{P}(\text{delivered})}{\mathbb{P}(\text{invisible} |
  \text{delivered}) \mathbb{P}(\text{delivered})+\mathbb{P}(\text{invisible}
  | \text{undelivered}) \mathbb{P}(\text{undelivered})}
```

``` latex
= \frac{(0.75)(0.9)}{(0.75)(0.9)+(1)(0.1)} \approx 0.871.
```

[Continue](btn:next)

---
> id: step-83

::: .exercise
**Exercise**  
Suppose a disease has 0.1% prevalence in the population and has a test with 90% reliability. A random selected person is tested for the disease and tests positive. What is the conditional probability that the person has the disease, given the positive test result? [[0.0089±0.0005]]
:::

[Continue](btn:next)

---
> id: step-84

*Solution.* Let $D$ be the event that a person has the disease and $P$ be the event that a person tests positive to the test. We would like to find $\mathbb{P}(D | P)$ given that $P(D) = 0.001$, $\mathbb{P}(P | D) = 0.9$ and $\mathbb{P}(P | D^c) = 0.1$. By Bayes' Theorem,

``` latex
\mathbb{P}(D |P) &= \frac{\mathbb{P}(P | D) \cdot \mathbb{P}(D)}{\mathbb{P}(P |D) \cdot \mathbb{P}(D) + \mathbb{P}(P | D^c) \cdot \mathbb{P}(D^c)} \\
&= \frac{0.9 \times 0.001}{0.9 \times 0.001 + 0.1 \times 0.999} \\
&\approx 0.0089.
```

(*Note:* The fact that $\mathbb{P}(P |D^c) = 0.1 = 1 - \mathbb{P}(P |D)$ follows from the fact that the test is $10\%$ unreliable. In general, it is not the case that $\mathbb{P}(A | B) = 1 - \mathbb{P}(A | B^\mathsf{c})$ for any two events $A$ and $B$.)

---
> id: independence
## Independence

In the context of a random experiment, two positive-probability events $E$ and $F$ are **independent** if knowledge of the occurrence of one of the events gives no information about the occurrence of the other event. In other words, $E$ and $F$ are independent if the probability of $E$ is the same as the conditional probability of $E$ given $F$, and vice versa. In other words, $E$ and $F$ are independent if

``` latex
\mathbb{P}(E) = \frac{\mathbb{P}(E \cap F)}{\mathbb{P}(F)} \quad \text{and} \quad
\mathbb{P}(F) = \frac{\mathbb{P}(F \cap E)}{\mathbb{P}(E)}.
```

[Continue](btn:next)

---
> id: step-85

Each of these equations rearranges to

``` latex
\mathbb{P}(E \cap F) = \mathbb{P}(E) \mathbb{P}(F).
```

[Continue](btn:next)

---
> id: step-86

This equation is symmetric in $E$ and $F$, and it does not require that $E$ and $F$ have positive probability, so we take it as our fundamental independence equation for two events:

::: .definition
**Definition** (Independence)  
If $(\Omega, \mathbb{P})$ is a probability space, then two events $E$ and $F$ are said to be independent if

``` latex
\mathbb{P}(E \cap F) = \mathbb{P}(E) \mathbb{P}(F).
```

:::

[Continue](btn:next)

---
> id: step-87

If we want to check whether two positive-probability events are independent, we may check any one of the equations $\mathbb{P}(E \cap F) = \mathbb{P}(E) \mathbb{P}(F)$ or $\mathbb{P}(E) = \frac{\mathbb{P}(E \cap F)}{\mathbb{P}(F)}$ or $\mathbb{P}(F) = \frac{\mathbb{P}(F \cap E)}{\mathbb{P}(E)}$, since they are all equivalent.

::: .exercise
**Exercise**  
Let $X$ be the result of a six-sided die roll. Consider the following events.

``` latex
A &= \{X \text{ is even}\}  \\\
B &= \{X \text{ is odd}\}  \\\
C &= \{X \leq 4\}
```

Are events $A$ and $B$ independent? [[No|Yes]] Are events $A$ and $C$ independent? [[Yes|No]]
:::

---
> id: step-88

*Solution.*  
* We have $\mathbb{P}(A \cap B) = 0$ (because $X$ cannot be odd and even), while $\mathbb{P}(A)\mathbb{P}(B) = \frac{1}{4}$. Since $\mathbb{P}(A \cap B) \neq \mathbb{P}(A)\mathbb{P}(B)$, the events $A$ and $B$ are not independent.
* We have $\mathbb{P}(A | C) = \frac{\mathbb{P}(A \cap C)}{\mathbb{P}(C)} = \frac{1/3}{2/3} = \frac{1}{2}$. Because $\mathbb{P}(A| C) = \mathbb{P}(A)$, the events $A$ and $C$ are independent.

### Independence of random variables

We say that two random variables $X$ and $Y$ are independent if the every pair of events of the form $\\{X \in A\\}$ and $\\{Y \in B\\}$ are independent, where $A \subset \mathbb{R}$ and $B \subset \mathbb{R}$.

::: .exercise
**Exercise**  
Suppose that $\Omega = \\{(\texttt{H},\texttt{H}),   (\texttt{H},\texttt{T}), (\texttt{T},\texttt{H}),(\texttt{T},\texttt{T})\\}$ and $\mathbb{P}$ is the uniform probability measure on $\Omega$. Let $X\_1$ be the number of heads in the first flip and let $X\_2$ be the number of heads in the second flip. Show that $X\_1$ and $X\_2$ are independent.
:::

    x-quill

---
> id: step-89

*Solution.* The pair $(X\_1, X\_2)$ takes values in $\\{(1, 1), (1,0), (0, 1), (0, 0)\\}$ each with probability $\frac{1}{4} = \frac{1}{2} \times \frac{1}{2}.$ Since both $X\_1$ and $X\_2$ can be $0$ or $1$ with probability $\frac{1}{2},$ we conclude that $X\_1$ and $X\_2$ are independent.

Directly showing that random variables are independent can be tedious, because there are many events to check. However, there is a general way to construct $\Omega$ to get independent random variables. The idea is to build $\Omega$ as a rectangle:

::: .theorem
**Theorem** (Product measure)  
Suppose that $(\Omega\_1,\mathbb{P}\_1)$ and $(\Omega\_2,\mathbb{P}\_2)$ are probability spaces with associated probability mass functions $m\_1$ and $m\_2$. Define a probability space $\Omega$ by defining

``` latex
\Omega = \Omega_1 \times \Omega_2
```

and

``` latex
m((\omega_1, \omega_2)) = m_1(\omega_1)m_2(\omega_2)
```

for every $(\omega\_1, \omega\_2) \in \Omega\_1 \times \Omega\_2$. Let $\mathbb{P}$ be the probability measure with probability mass function $m$. Then the random variables $X\_1((\omega\_1, \omega\_2)) = \omega\_1$ and $X\_2((\omega\_1, \omega\_2)) = \omega\_2$ are independent.

We call $\mathbb{P}$ a **product measure** and $(\Omega, \mathbb{P})$ a **product space**.
:::

    figure
      img(src="images/product-measure.svg")
      p.caption.md We define the product space $\Omega$ to be the Cartesian product of the spaces $\Omega_1$ and $\Omega_2$, and we obtain probability masses for the product space by multiplying corresponding masses in $\Omega_1$ and $\Omega_2$.

[Continue](btn:next)

---
> id: step-90

We say that a collection of random variables $(X\_1, X\_2, \ldots, X\_{n})$ is independent if

``` latex
\mathbb{P}(\{X_1 \in A_1\} \cap \{X_2 \in A_2\} \cap \cdots \cap \{X_n \in A_n\})
= \mathbb{P}(X_1 \in A_1) \mathbb{P}(X_2 \in A_2)\cdots \mathbb{P}(X_n \in A_n)
```

for any events $A\_1, A\_2, \ldots, A\_n$.

[Continue](btn:next)

---
> id: step-91

We may extend the product measure construction to achieve as many independent random variables as desired: for three random variables we let $\Omega$ be cube-shaped (that is, $\Omega = \Omega\_1 \times \Omega\_2 \times \Omega\_3$), and so on.

::: .exercise
**Exercise**  
Define a probability space $\Omega$ and 10 independent random variables which are uniformly distributed on $\\{1,2,3,4,5,6\\}$.
:::

    x-quill

---
> id: step-92

*Solution.* We follow the product space construction and define $\Omega$ to be the set of all length-10 tuples of elements in $\\{1,2,3,4,5,6\\}$. For each $i \in \\{1, 2, \dots, 10\\}$ let $\Omega\_i = \\{1, 2, 3, 4, 5, 6\\}$ and let $m\_i$ be the uniform probability mass function on $\Omega\_i.$ Then desired probability space is $\Omega$ where

``` latex
\Omega = \Omega_1 \times \Omega_2 \times \cdots \times
\Omega_{10}
```

together with probability mass function

``` latex
m((\omega_1, \omega_2, \dots, \omega_{10})) = m_1(\omega_1) \times
m_2(\omega_2) \times \cdots \times m_{10}(\omega_{10})
```

for all $(\omega\_1, \omega\_2, \dots, \omega\_{10}) \in \Omega.$ We define the corresponding random variables $X\_i : \Omega \to \\{1, 2, 3, 4, 5, 6\\}$ by

``` latex
X((\omega_1, \omega_2, \dots, \omega_{10})) = \omega_i
```

for all integer values of $i$ ranging from $1$ to $10$. Then for all of these random variables,

``` latex
\mathbb{P}(X_i = k) = \mathbb{P}_i(\omega_i = k) = \frac{1}{6}
```

for any $k \in \\{1, 2, 3, 4, 5, 6\\}$, as required.

[Continue](btn:next)

---
> id: step-93

The product measure construction can be extended further still to give a supply of *infinitely many* independent random variables. The idea is use a space of the form $\Omega = \Omega\_1 \times \Omega\_2 \times \Omega\_3 \cdots$ (whose elements are infinite tuples $\omega = (\omega\_1, \omega\_2, \omega\_3, \ldots)$) and define a measure which makes the random variables $X\_n(\omega) = \omega\_n$ independent. We will not need the details of this construction, although we will use it indirectly when we discuss infinite sequences of independent random variables.

[Continue](btn:next)

---
> id: step-94

We say that a collection of events is independent if the corresponding [indicator](gloss:indicator) random variables are independent. Independence for three or more events is more subtle than independence for two events:

::: .exercise
**Exercise**  
Three events can be *pairwise* independent without being independent: Suppose that $\omega$ is selected uniformly at random from the set

``` latex
\Omega =
\{
(0,0,0),(0,1,1),(1,0,1),(1,1,0)
\}
```

and define $A$ to be the event that the first entry is 1, $B$ to be the event that the second entry is $1$, and $C$ to be the event that the third entry is 1. For example, if $\omega = (0,1,1)$, then $B$ and $C$ occurred but $A$ did not.

Show that $A$ and $B$ are independent, that $A$ and $C$ are independent, and that $B$ and $C$ are independent.

Show that the equation $\mathbb{P}(A \cap B \cap C) = \mathbb{P}(A) \mathbb{P}(B) \mathbb{P}(C)$ does **not** hold and that the triple of events is therefore not independent.
:::

    x-quill

---
> id: step-95

*Solution.* By definition, $A = \\{(1,0, 1), (1, 1, 0)\\},$ $B = \\{(0, 1, 1), (1, 1, 0)\\}$ and $C = \\{(0, 1, 1), (1, 0, 1)\\}.$ Therefore,

``` latex
\mathbb{P}(A) = \mathbb{P}(B) = \mathbb{P}(C) = \frac{1}{2}.
```

Now, $A \cap B = (1,1,0)$, $A \cap C = (1,0 ,1),$ and $B \cap C = (0, 1, 1),$ whence

``` latex
\mathbb{P}(A \cap B) = \frac{1}{4} = \mathbb{P}(A) \mathbb{P}(B).
```

The same thing applies to $A \cap C$ and $B \cap C$ so $A, B, C$ are pairwise independent. However, since $A \cap B \cap C = \emptyset,$ we have

``` latex
\mathbb{P}(A \cap B \cap C) = 0 \neq \frac{1}{2} \times \frac{1}{2}
\times \frac{1}{2} = \mathbb{P}(A) \times \mathbb{P}(B) \times \mathbb{P}(C)
```

and thus, $A, B,$ and $C$ are not independent.

[Continue](btn:next)

---
> id: step-96

### Independence properties

Independence satisfies many basic relationships suggested by the intuition that random variables are independent if they are computed from separate sources of randomness. For example, if $X\_1, X\_2, X\_3, X\_4, X\_5$ are independent random variables, then $X\_1 + X\_2 + X\_3$ and $X\_4^2 + X\_5^2$ are independent. We'll state this idea as a theorem and apply it to an exercise.

::: .theorem
**Theorem** (persistence of independence)  
Suppose that $m$ and $n$ are positive integers and that

``` latex
X_{1,1}, X_{1,2}, \ldots, X_{1,n}, \\\
X_{2,1}, X_{2,2}, \ldots, X_{2,n}, \\\
\cdots, \\\
X_{m,1}, X_{m,2}, \ldots, X_{m,n}
```

are independent. If $f_1, \ldots, f_m$ are functions, then the random variables

``` latex
f_1(X_{1,1}, X_{1,2}, \ldots, X_{1,n}), \\\
f_2(X_{2,1}, X_{2,2}, \ldots, X_{2,n}), \\\
\cdots, \\\
f_m(X_{m,1}, X_{m,2}, \ldots, X_{m,n})
```

are independent.
:::

[Continue](btn:next)

---
> id: step-97

::: .exercise
**Exercise**  
Consider as sequence of 8 independent coin flips. Show that the probability of getting at least one pair of consecutive heads is at least $1-(3/4)^4$.
:::

    x-quill

---
> id: step-98

*Solution.* The probability that the first two flips are both heads is $\frac{1}{4}$. Similarly, the probability that the third and fourth flips are heads and heads, [respectively](gloss:respectively), is $\frac{1}{4}$. Furthermore, these events are independent, since their [indicator](gloss:indicator) random variables are functions of distinct independent random variables. Therefore, the probability that we get consecutive heads either in the first pair of flips or in the third and fourth flips is $1 - \left(1-\frac{1}{4}\right)^2$.

Continuing in this way, we find that the probability of getting consecutive heads in the first pair, the second pair, or the third pair of flips is $1 - \left(1-\frac{1}{4}\right)^3$, and finally the probability of getting consecutive heads somewhere in the four position pairs is $1 - \left(1-\frac{1}{4}\right)^4$.

Since there are other ways to get consecutive heads (for example, on flips 2 and 3), this number is an *under*-estimate of the actual probability of getting consecutive heads.


---
> id: expectation-and-variance
## Expectation and Variance

We often want to distill a random variable's distribution down to a single number. For example, consider the height of an individual selected uniformly at random from a given population. This is a random variable, and communicating its distribution would involve communicating the heights of every person in the population. However, we can summarize the distribution by reporting an *average* height: we add up the heights of the people in the population and [[divide|multiply]] by the number of people.

---
> id: step-99

If the random individual is selected according to some non-uniform probability distribution on the population, then it makes sense to calculate a [[*weighted*|*max*|*pooled*]] average rather than a uniform average. The probability-weighted average of the values of a random variable is called its **expectation**.

---
> id: step-100

::: .definition
**Definition**  
The **expectation** $\mathbb{E}[X]$ (or **mean** $\mu\_X$) of a random variable $X$ is the *probability-weighted average of $X$*:

``` latex
\mathbb{E}[X] = \sum_{\omega \in \Omega} X(\omega) m(\omega)
```

:::

[Continue](btn:next)

---
> id: step-101

For example, the expected number of heads in two fair coin flips is

``` latex
\mathbb{E}[X] = \tfrac{1}{4}\cdot 2 + \tfrac{1}{4}\cdot 1 +
\tfrac{1}{4}\cdot 1 + \tfrac{1}{4}\cdot 0 = 1.
```


There are two common ways of interpreting expected value.
* The expectation $\mathbb{E}[X]$ may be thought of as the value of a random game with payout $X$. According to this interpretation, you should be willing to pay anything less than \$1 to play the game where you get a dollar for each head in two fair coin flips. For more than \$1 you should be unwilling to play the game, and at \$1 you should be indifferent.
* The second way of thinking about expected value is as a *long-run average*. If you play the dollar-per-head two-coin-flip game a very large number of times, then your average payout per play is very likely to be close to \$1.

We can test this second interpretation out:

::: .exercise
**Exercise**  
Use the expression `{py} sum(randint(0,2) + randint(0,2) for _ in range(10**6))/10**6`  `{jl} mean(rand(0:1) + rand(0:1) for k=1:10^6)` to play the dollar-per-head two-coin-flip game a million times and calculate the average payout in those million runs.

How close to 1 is the result typically? Choose the best answer.

    x-picker.list
      .item.bblue.pill(data-error="incorrect") Around 0.1
      .item.bblue.pill(data-error="incorrect") Around 0.01
      .item.bblue.pill Around 0.0001
      .item.bblue.pill(data-error="incorrect") Around 0.0000001

:::

::: .py-only
    pre(python-executable)
      | from numpy.random import randint
      | sum(randint(0,2) + randint(0,2) for _ in range(10**6))/10**6
:::

::: .jl-only
    pre(julia-executable)
      | mean(rand(0:1) + rand(0:1) for k=1:10^6)
:::

---
> id: step-102

*Solution.* Running the code several times, we see that the error is seldom as large as 0.01 or as small as 0.0000001. So the correct answer choice is the third one.

[Continue](btn:next)

---
> id: step-103

We will see that this second interpretation is actually a *theorem* in probability, called the **law of large numbers**. In the meantime, however, this interpretation gives us a useful tool for investigation: if a random variable is easy to simulate, then we can sample from it many times and calculate the average of the resulting samples. This will not give us the expected value exactly, but we can get as close as desired by using sufficiently many samples. This is called the **Monte Carlo** method of approximating the expectation of a random variable.

::: .exercise
**Exercise**  
Use a Monte Carlo simulation to estimate the expectation of $X/Y$, where $X$ and $Y$ are independent die rolls.
:::

::: .py-only
    pre(python-executable)
      | import numpy as np
:::

::: .jl-only
    pre(julia-executable)
      |
:::

    x-quill

---
> id: step-104

::: .py-only
*Solution.* `{py} sum(randint(1,7)/randint(1,7) for i in range(10_000_000))/10_000_000` returns approximately 1.43. The actual mean is `{py} sum(x/y for x in range(1,7) for y in range(1,7))/36`, which is $\frac{343}{240} = 1.4291\overline{6}$. So we can say that the Monte Carlo result with 10 million trials is quite close to the correct value.
:::

::: .jl-only
*Solution.* `{jl} mean(rand(1:6)/rand(1:6) for i=1:10^8)` returns approximately 1.43. The actual mean is `{jl} mean(x/y for x=1:6, y=1:6)`, which is $\frac{343}{240} = 1.4291\overline{6}$, so we can say that the Monte Carlo result with 100 million trials is very close to the correct value.
:::

[Continue](btn:next)

---
> id: step-105

The following exercise confirms an intuitive fact about expectation: a random variable which is always larger than another has a larger mean. We will state this idea with "larger" replaced by its weak version "at least as large as".

::: .exercise
**Exercise**  
Explain why $\mathbb{E}[X] \leq \mathbb{E}[Y]$ if $X(\omega) \leq Y(\omega)$ for all $\omega \in \Omega$.
:::

    x-quill

---
> id: step-106

*Solution.* If $X(\omega) \leq Y(\omega)$ for all $\omega \in \Omega,$ then we have

``` latex
\mathbb{E}[X] &= \sum_{\omega \in \Omega}X(\omega)m(\omega) \\\
&\leq \sum_{\omega \in \Omega}Y(\omega)m(\omega) \\\
&= \mathbb{E}[Y].
```

### Expectation and distribution

Although the definition $\mathbb{E}[X] = \sum\_{\omega \in \Omega} X(\omega) m(\omega)$ involves the probability space $\Omega$, we can also write a formula for expectation in terms of the probability mass function of the *distribution* of $X$:

::: .theorem
**Theorem**  
The expectation of a discrete random variable $X$ is equal to

``` latex
\mathbb{E}[X] = \sum_{x \in \mathbb{R}} x \mathbb{P}(X = x).
```

:::

The idea is that the given formula is just a rearrangement of the terms in the definition of expectation. Let's begin by considering an example. Suppose $\Omega = \\{1,2,3\\}$ with probability mass function $m$ satisfying $m(1) = 1/6$, $m(2) = 2/6$, and $m(3) = 3/6$. Suppose $X(1) = 5, X(2) = 5$ and $X(3)= 7$. Then

``` latex
\mathbb{E}[X] = \frac{1}{6}\cdot 5 + \frac{2}{6} \cdot 5 +
\frac{3}{6}\cdot 7.
```

 We can group the first two terms together to get

``` latex
\mathbb{E}[X] = \left(\frac{1}{6} + \frac{2}{6}\right)\cdot 5 +
\frac{3}{6}\cdot 7.
```

This expression is the one we would get if we wrote out

``` latex
\sum_{x \in \mathbb{R}} x \mathbb{P}(X = x).
```

Therefore, we can see that the two sides are the same.

Let's write this idea down in general form. We group terms on the right-hand side in the formula $\mathbb{E}[X] = \sum\_{\omega \in \Omega} X(\omega) m(\omega)$ according to the value of $X(\omega)$:

``` latex
\mathbb{E}[X] = \sum_{x\in \mathbb{R}}\sum_{\omega \in \Omega: X(\omega) =
  x} X(\omega)m(\omega).
```

Then we can replace $X(\omega)$ with $x$ and pull it out of the inside sum to get

``` latex
\mathbb{E}[X] = \sum_{x \in \mathbb{R}} x \sum_{\omega \in \Omega :
X(\omega) = x} m(\omega).
```

Since $\sum\_{\omega \in \Omega:X(\omega) = x} m(\omega)$ is equal to $\mathbb{P}(X = x)$, we get

``` latex
\mathbb{E}[X] = \sum_{x \in \mathbb{R}} x \mathbb{P}(X = x),
```

as desired.

[Continue](btn:next)

---
> id: step-107

::: .exercise
**Exercise**  
The expectation of a random variable need not be finite or even well-defined. Show that the expectation of the random variable which assigns a probability mass of $2^{-n}$ to the point $2^{n}$(for all $n \geq 1$) is not finite.

Consider a random variable $X$ whose distribution assigns a probability mass of $2^{-|n|-1}$ to each point $2^n$ for $n \geq1$ and a probability mass of $2^{-|n|-1}$ to $-2^n$ for each $n \leq -1$. Show that $\mathbb{E}[X]$ is not well-defined. (Note: a sum $\sum\_{x \in \mathbb{R}} f(x)$ is not defined if $\sum\_{x \in \mathbb{R} : f(x) > 0} f(x)$ and $\sum\_{x \in \mathbb{R} : f(x) < 0} f(x)$ are equal to $\infty$ and $-\infty$, [respectively](gloss:respectively).)
:::

    x-quill

---
> id: step-108

*Solution.* We multiply the probability mass at each point $x$ by the location $x$ and sum to get

``` latex
\sum_{n = 1}^\infty 2^{-n}2^n = \sum_{n=1}^\infty 1 = \infty.
```

For the second distribution, the positive and negative parts of the are both infinite for the same reason. Therefore, the sum does not make sense and the mean is therefore not well-defined.

[Continue](btn:next)

---
> id: step-109

We can also work out the expectation of a function of two [discrete](gloss:discreteRV) random variables in terms of their joint distribution.

::: .theorem
**Theorem**  
If $f:\mathbb{R}^2 \to \mathbb{R}$, and $X$ and $Y$ are discrete random variables defined on the same probability space, then

``` latex
\mathbb{E}[f(X,Y)] = \sum_{(x,y)\in \mathbb{R}^2} f(x,y) \mathbb{P}(X=x \text{ and }Y = y).
```
:::

*Proof.* We use the same idea we used in the proof of the expectation formula: group terms in the definition of expectation according the value of the pair $(X(\omega),Y(\omega))$. We get

``` latex
\mathbb{E}[f(X,Y)] &= \sum_{\omega \in
  \Omega}f(X(\omega),Y(\omega)) m(\omega) \\\
&= \sum_{(x,y) \in \mathbb{R}^2} \sum_{\substack{\omega \in \Omega :
\\\ X(\omega)
= x \text{ and } Y(\omega) = y}} f(X(\omega),Y(\omega)) m(\omega)
\\\
&= \sum_{(x,y) \in \mathbb{R}^2} f(x,y) \mathbb{P}(X = x \text{ and } Y = y).
```

We can use this theorem to show that expectation distributes across multiplication for independent random variables:

::: .exercise
**Exercise**  (independence product formula)  
Show that $\mathbb{E}[XY] = \mathbb{E}[X]\mathbb{E}[Y]$ if $X$ and $Y$ are independent random variables.
:::

    x-quill

---
> id: step-110

*Solution.* Using the definition of independence, we have

``` latex
\mathbb{E}[XY] &= \sum_{\omega \in \Omega}XY \mathbb{P}(X = x \text{ and } Y = y) \\\
&= \sum_{(x,y) \in \mathbb{R}^2}XY \mathbb{P}(X =x) \mathbb{P}(Y = y) \\\
&= \left(\sum_{x \in \mathbb{R}} x\mathbb{P}(X=x)\right)\left(\sum_{x \in \mathbb{R}} x\mathbb{P}(X=x)\right) \\\
&= \mathbb{E}[X]\mathbb{E}[Y],
```

as desired.

[Continue](btn:next)

---
> id: step-111

### Variance

The expectation of a random variable gives us some coarse information about where on the number line the random variable's probability mass is located. The **variance** gives us some information about how widely the probability mass is spread around its mean. A random variable whose distribution is highly concentrated about its mean will have a small variance, and a random variable which is likely to be very far from its mean will have a large variance. We define the variance of a random variable $X$ to be the average squared distance from $X$ to its mean:

::: .definition
**Definition** (Variance)  
The variance of a random variable $X$ is defined to be

``` latex
\operatorname{Var} X = \mathbb{E}[(X - \mathbb{E}[X])^2].
```

The standard deviation $\sigma(X)$ of $X$ is the square root of the variance:

``` latex
\sigma(X) = \sqrt{\operatorname{Var} X}.
```

:::

[Continue](btn:next)

---
> id: step-112

::: .exercise
**Exercise**  
 Consider a random variable which is obtained by making a selection from the list

    figure
      pre
        | [0.245, 0.874, 0.998, 0.567, 0.482]

uniformly at random. Make a rough estimate of the mean and variance of this random variable just from looking at the number line. Then use Python to calculate the mean and variance exactly to see how close your estimates were.

    figure: img(src="images/fivepoints.svg")

:::

::: .py-only
    pre(python-executable)
      | import numpy as np
:::

::: .jl-only
    pre(julia-executable)
      |
:::

    x-quill

---
> id: step-113

*Solution.* My estimate of the mean and variance are $0.6$ and $0.1$, [respectively](gloss:respectively). The value 0.6 appears to be around the balance point of the points on the number line, and the squared deviation from 0.6 is very small for a couple of the points and as large as about 0.15 for others.

Calculating the mean exactly using `{jl} m = mean([0.245, 0.874, 0.998, 0.567, 0.482])`, we get a value of 0.6332. Calculating the variance exactly using `{jl} mean([(a-m)^2 for a in A])` (where $A$ is the array above), we get a value of 0.074. Therefore, my estimate was a little high.

[Continue](btn:next)

---
> id: step-114

::: .exercise
**Exercise**  
Consider the following game. We begin by picking a number in $\\{0,\frac{1}{1000}, \frac{2}{1000}, \ldots, \frac{1000}{1000}\\}$ with uniform probability. If that number is less than $1$, we pick another number from the same distribution and add it to the first. We repeat this procedure until the running sum exceeds $1$. Let $X$ be the random variable whose value is the number of draws needed to end the game. Use a simulation to approximate the expected value and variance of $X$. Include your code in your answer as well as some discussion of your results.

Tips: `{jl} rand(0:1000)/1000` returns a sample from the desired distribution. Also, it's a good idea to wrap a single run of the game into a zero-argument function.
:::

::: .py-only
    pre(python-executable)
      | import numpy as np
:::

::: .jl-only
    pre(julia-executable)
      |
:::

    x-quill

---
> id: step-115

*Solution.* We define a function `{code} run` which plays the game once, and we record the result of the game over a million runs. We estimate the mean as the mean of the resulting list, and we estimate the variance using

``` python
import numpy as np
def runs_till_over():
    s = 0
    ctr = 0
    while s < 1.0:
        s += np.random.randint(0,1001)/1000
    return ctr

A = [runs_till_over() for _ in range(1_000_000)]
μ = np.mean(A)
var = np.mean((a-μ)**2 for a in A)
μ,var
```

``` julia
function runs_till_over()
    s = 0
    ctr = 0
    while s < 1.0
        s += rand(1:1000)/1000
    end
    ctr
end

A = [runs_till_over() for _ in 1:1_000_000]
μ = mean(A)
var = mean((a-μ)^2 for a in A)
μ,var
```

We get a mean of about $2.71$, and a variance of about $0.77$.

[Continue](btn:next)

---
> id: step-116

We can use linearity of expectation to rewrite the formula for variance in a simpler form:

``` latex
\operatorname{Var} X &= \mathbb{E}[X^2 - 2X \mathbb{E}[X] + \mathbb{E}[X]^2] \\\
       &= \mathbb{E}[X^2] - 2\mathbb{E}[X\mathbb{E}[X]] + \mathbb{E}[X]^2 \\\
       &= \mathbb{E}[X^2] - 2 \mathbb{E}[X]^2 + \mathbb{E}[X]^2 \\\
       &= \mathbb{E}[X^2] - \mathbb{E}[X]^2.
```

We can use this formula to show how variance interacts with linear operations:

::: .exercise
**Exercise**  
Show that variance satisfies the properties

``` latex
\left\{\begin{array}{r@{\,}c@{\,}ll}
         \operatorname{Var}(a X) &=& a^2 \operatorname{Var} X, \\\
         \operatorname{Var}(X+Y) &=& \operatorname{Var}(X) + \operatorname{Var}(Y),
       \end{array}\right.
```

if $a$ is a real number and $X$ is a random variable, and if $X$ and $Y$ are **independent** random variables, [respectively](gloss:respectively).

:::

    x-quill

---
> id: step-117

*Proof.* The first part of the statement follows easily from linearity of expectation

``` latex
\operatorname{Var}(aX) &= \mathbb{E}[a^2X^2] - \mathbb{E}[aX]^2\\\
         &= a^2\mathbb{E}[X^2] - a^2\mathbb{E}[X]^2 \\\
         & = a^2 (\mathbb{E}[X^2] - \mathbb{E}[X]^2)\\\
         &= a^2 \operatorname{Var}(X).
```

Since $\mathbb{E}[X + Y] = \mathbb{E}[X] + \mathbb{E}[Y]$ by linearity, we have

``` latex
\operatorname{Var}(X + Y) &= \mathbb{E}[(X + Y)^2] - (\mathbb{E}[X] + \mathbb{E}[Y])^2 \\\
            &= \mathbb{E}[X^2 + 2XY + Y^2] - \mathbb{E}[X]^2 -2\mathbb{E}[X]\mathbb{E}[Y] -\mathbb{E}[Y]^2.
```

Rearranging and using linearity of expectation, we get

``` latex
\operatorname{Var}(X+Y) &= \mathbb{E}[X^2] - \mathbb{E}[X]^2 + \mathbb{E}[Y^2] - \mathbb{E}[Y]^2 + 2(\mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]) \\\
                        &= \operatorname{Var}(X) + \operatorname{Var}(Y) + 2(\mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]).
```

The desired result follows because if $X$ and $Y$ are independent, $\mathbb{E}[XY] = \mathbb{E}[X]\mathbb{E}[Y]$ by the [independence product formula](gloss:independence-product).

[Continue](btn:next)

---
> id: step-118

::: .exercise
**Exercise**  
Consider the distribution which assigns a probability mass of $\frac{c}{n^3}$ to each integer point $n \geq 1$, where $c$ is equal to the reciprocal of $\sum\_{n=1}^\infty \frac{1}{n^3}$.

Show that this distribution has a finite mean but not a finite variance.
:::

    x-quill

---
> id: step-119

*Solution.* Let $X$ be a random variable with this distribution. Then

``` latex
\mathbb{E}[X] &= \sum_{n=1}^{\infty} n \cdot \frac{c}{n^3}= c \sum_{n=1}^{\infty} \frac{1}{n^2}.
```

Since the sum on the right converges by the $p$-test, it follows that $\mathbb{E}[X]$ is finite. On the other hand,

``` latex
\mathbb{E}[X^2] &= \sum_{n=1}^{\infty} n^2 \cdot \frac{c}{n^3}= c \sum_{n=1}^{\infty} \frac{1}{n}.
```

does not converge because of the harmonic series term. Therefore $\operatorname{Var}(X) = \mathbb{E}[X^2] - \mathbb{E}[X]^2$ is infinite.


---
> id: covariance
## Covariance

Just as mean and variance are summary statistics for the distribution of a single random variable, *covariance* is useful for summarizing how $(X,Y)$ are jointly distributed.

[Continue](btn:next)

---
> id: step-120

The **covariance** of two random variables $X$ and $Y$ is defined to be the expected product of their deviations from their respective means:

``` latex
\operatorname{Cov}(X,Y) = \mathbb{E}[ (X - \mathbb{E}[X]) (Y - \mathbb{E}[Y])].
```

[Continue](btn:next)

---
> id: step-121

The covariance of two independent random variables is zero, because the expectation [distributes](gloss:independence-product) across the product on the right-hand side in that case. Roughly speaking, $X$ and $Y$ tend to deviate from their means positively or negatively together, then their covariance is positive. If they tend to deviate oppositely (that is, $X$ is above its mean and $Y$ is below, or vice versa), then their covariance is negative.

::: .exercise
**Exercise**  
Identify each of the following joint distributions as representing positive covariance, zero covariance, or negative covariance. The size of a dot at $(x,y)$ represents the probability that $X = x$ and $Y = y$.

    figure: img(src="images/cov-examples.svg")

:::

    x-quill

---
> id: step-122

*Solution.* The first graph shows negative covariance, since $X-\mathbb{E}[X]$ and $Y - \mathbb{E}[Y]$ have opposite sign for the top-left mass and for the bottom-right mass, and the contributions of the other two points are smaller since these points are close to the mean $(\mathbb{E}[X],\mathbb{E}[Y])$.

The second graph shows positive covariance, since the top right and bottom left points contribute positively, and the middle point contributes much less.

The third graph shows zero covariance, since the points contribute to the sum defining $\mathbb{E}((X - \mathbb{E}(X))(Y-\mathbb{E}[Y]))$ in two cancelling pairs.

[Continue](btn:next)

---
> id: step-123

::: .exercise
**Exercise**  
Does $\operatorname{Cov}(X,Y) = 0$ imply that $X$ and $Y$ are independent?

Hint: consider the previous exercise. Alternatively, consider a random variable $X$ which is uniformly distributed on $\\{1,2,3\\}$ and an independent random variable $Z$ which is uniformly distributed on $\\{-1,1\\}$. Set $Y = ZX$. Consider the pair $(X,Y)$.
:::

*Solution.* The third example in the previous exercise shows a non-independent pair of random variables which has zero covariance.

Alternatively, the suggested random variables $X$ and $Y$ have zero covariance, but they are not independent since, for example, $\mathbb{P}(X = 2 \text{ and } Y = 1) = 0$ even though $\mathbb{P}(X = 2)$ and $\mathbb{P}(Y = 1)$ are both positive.

::: .exercise
**Exercise**  
The **correlation** of two random variables $X$ and $Y$ is defined to be their covariance normalized by the product of their standard deviations:

``` latex
\operatorname{Corr}(X,Y) = \frac{\operatorname{Cov}(X,Y)}{\sigma(X)\sigma(Y)}
```

In this problem, we will show that the correlation of two random variables is always between $-1$ and $1$. Let $\mu\_X = \mathbb{E}[X]$, and let $\mu\_Y = \mathbb{E}[Y]$.

Consider the following quadratic polynomial in $t$:
``` latex
\mathbb{E}[&((X - \mu_X) + (Y - \mu_Y) t)^2] \\\ &= \mathbb{E}[(X-\mu_X)^2] + 2t\mathbb{E}[(X-\mu_X)(Y-\mu_Y)] + t^2  \mathbb{E}[(Y-\mu_Y)^2],
```

where $t$ is a variable. Explain why this polynomial is nonnegative for all $t \in \mathbb{R}$.

Recall that a polynomial $at^2 + bt + c$ is nonnegative for all $t$ if and only if the discriminant $b^2 - 4ac$ is nonpositive (this follows from the quadratic formula). Use this fact to show that

``` latex
\mathbb{E}[(X-\mu_X)(Y-\mu_Y)]^2 \leq \operatorname{Var} X \operatorname{Var} Y.
```
Conclude that $-1 \leq \operatorname{Corr}(X,Y) \leq 1$.

:::

    x-quill

---
> id: step-124

*Solution.*  

The polynomial is nonnegative because the left-hand side of the given equation is the expectation of a nonnegative random variable.

Substituting $\mathbb{E}[(Y-\mu\_Y)^2]$ for $a$, $2\mathbb{E}[(X-\mu\_X)(Y-\mu\_Y)]$ for $b$, and $\mathbb{E}[(X-\mu\_X)^2]$ for $c$, the inequality $b^2 - 4ac \leq 0$ implies

``` latex
4\mathbb{E}[(X-\mu_X)(Y-\mu_Y)]^2 - 4 \mathbb{E}[(X-\mu_X)^2]\mathbb{E}[(Y-\mu_Y)^2]
\leq 0,
```

which implies the desired inequality.

Dividing both sides of the preceding inequality by $\operatorname{Var} X \operatorname{Var} Y$ and taking the square root of both sides, we find that $|\operatorname{Corr}(X,Y)| \leq 1$, which implies $-1 \leq \operatorname{Corr}(X,Y) \leq 1$.

::: .exercise
**Exercise**  
Show that

``` latex
\operatorname{Var}(X_{1}+X_{2}+\cdots+X_{n}) = \sum_{k=1}^n \operatorname{Var} X_k
```

if $X\_1, \ldots, X_n$ are independent random variables.

:::

    x-quill

---
> id: step-125

*Solution.* The expectation of $(X\_1+\cdots+X\_n)^2$ is the sum of the values in this table:

| $\mathbb{E}[X_1^2]$  | $\mathbb{E}[X_1X_2]$ | $\cdots$ | $\mathbb{E}[X_1X_n]$ |
| $\mathbb{E}[X_2X_1]$ | $\mathbb{E}[X_2^2]$  | $\cdots$ | $\mathbb{E}[X_2X_n]$ |
| $\vdots$             | $\vdots$             | $\ddots$ | $\vdots$             |
| $\mathbb{E}[X_nX_1]$ | $\mathbb{E}[X_nX_2]$ | $\cdots$ | $\mathbb{E}[X_n^2]$  |

The square of the expectation of $X\_1+\cdots+X\_n$ is the sum of the values in this table:

| $\mathbb{E}[X_1]^2$              | $\mathbb{E}[X_1]\mathbb{E}[X_2]$ | $\cdots$ | $\mathbb{E}[X_1]\mathbb{E}[X_n]$ |
| $\mathbb{E}[X_2]\mathbb{E}[X_1]$ | $\mathbb{E}[X_2]^2$              | $\cdots$ | $\mathbb{E}[X_2]\mathbb{E}[X_n]$ |
| $\vdots$                         | $\vdots$                         | $\ddots$ | $\vdots$                         |
| $\mathbb{E}[X_n]\mathbb{E}[X_1]$ | $\mathbb{E}[X_n]\mathbb{E}[X_2]$ | $\cdots$ | $\mathbb{E}[X_n]^2$              |

Subtracting these two tables entry-by-entry, we get the variances on the right-hand side from the diagonal terms, and all of the off-diagonal terms cancel, by the [independence product formula](gloss:independence-product).

[Continue](btn:next)

---
> id: step-126

::: .exercise
**Exercise** (Mean and variance of the sample mean)  
Suppose that $X\_1, \ldots, X\_n$ are independent random variables with the same distribution. Find the mean and variance of

``` latex
\frac{X_1 + \cdots + X_n}{n}
```

:::

*Solution.* By linearity of expectation, we have

``` latex
\mathbb{E}\left[\frac{X_1 + X_2 + \cdots + X_n}{n}\right] &= \frac{\mathbb{E}[X_1] + \mathbb{E}[X_2]+ \cdots + \mathbb{E}[X_n]}{n} \\\
                                                  &= \mathbb{E}[X_1],
```

Then

``` latex
\operatorname{Var}\left(\frac{X_1+X_2 + \cdots + X_n}{n}\right) &= \sum_{k = 1}^{n}\operatorname{Var}\left(\frac{X_k}{n}\right) \\\
&= \sum_{k = 1}^{n}\operatorname{Var}\left(\frac{X_k}{n}\right) \\\
&= \sum_{k = 1}^{n} \frac{1}{n^2} \operatorname{Var}(X_k) \\\
&= \frac{\operatorname{Var}(X_1)}{n}.
```

[Continue](btn:next)

---
> id: step-127

::: .exercise
**Exercise**  
The **covariance matrix** of a vector $\mathbf{X} = [X\_1, \ldots, X\_n]$ of random variables defined on the same probability space is defined to be the matrix $\Sigma$ whose $(i,j)$ th entry is equal to $\operatorname{Cov}(X\_i,X\_j)$.

Show that $\Sigma = \mathbb{E}[\mathbf{X} \mathbf{X}']$ if all of the random variables $X\_1, \ldots, X\_n$ have mean zero. (Note: expectation operates on a matrix or vector of random variables entry-by-entry.)
:::

    x-quill

---
> id: step-128

*Solution.* The definition of matrix multiplication implies that the $(i,j)$ th entry of $\mathbf{X} \mathbf{X}'$ is equal to $X\_i X\_j$. Therefore, the $(i,j)$ th entry of $\mathbb{E}[\mathbf{X} \mathbf{X}']$ is equal to $\mathbb{E}[X\_iX\_j]$, which in turn is equal to $\operatorname{Cov}(X\_i,X\_j)$ since the random variables have zero mean.

---
> id: continuous-distributions
## Continuous Distributions

Not every random phenomenon is ideally modeled using a discrete probability space. For example, we will see that the study of discrete distributions leads us to the *Gaussian distribution*, which smooths its probability mass out across the whole real number line, with most of the mass near the origin and less as you move out toward $-\infty$ or $+\infty$.

    figure
      img(src="images/gaussian.svg")
      p.caption.md The *Gaussian* distribution spreads its probability mass out across the real number line. There is no single point where a positive amount of probability mass is concentrated.

<p></p>

We won't be able to work with such distributions using probability mass functions, since the function which maps each point to the amount of probability mass at that point is the zero function. However, calculus provides us with a smooth way of specifying where stuff is on the number line and how to total it up: **integration**. We can define a function $f$ which is larger where there's more probability mass and smaller where there's less, and we can calculate probabilities by integrating $f$.

    figure
      img(src="images/density.svg")
      p.caption.md The probability measure $\nu$ associated with a density $f$ assigns the measure $\int\_a^b f(x) \, \mathrm{d} x$ to each interval $[a,b]$.

The simplest possible choice for $f$ is the function which is $1$ on $[0,1]$ and 0 elsewhere. In this case, the probability mass associated with a set $\mathbb{E} \subset [0,1]$ is the total length of $E$. In higher dimensions, $\Omega = [0,1]^2$ with the probability measure $\mathbb{P}(E) = \text{area}(E)$ gives us a probability space, as does $\Omega = [0,1]^3$ with the probability measure $\mathbb{P}(E) = \text{volume}(E)$.

::: .exercise
**Exercise**  
Consider the probability space $\Omega = [0,1]^2$ with the area probability measure. Show that if $X((\omega\_1, \omega\_2)) = \omega\_1$ and $Y((\omega\_1, \omega\_2)) = \omega\_2$, then the events $\\{X \in I\\}$ and $\\{Y \in J\\}$ are independent for any intervals $I\subset [0,1]$ and $J\subset [0,1]$.
:::

*Solution.* We have

``` latex
\mathbb{P}(\{X \in I\} \cap \{Y \in J\}) = \text{area}(I \times J) =
\text{length}(I) \text{length}(J),
```

 by the area formula for a rectangle. Since $\text{length}(I) = \mathbb{P}(\\{X \in I\\} \cap \\{Y \in [0,1]\\}) = \mathbb{P}(X \in I)$ and $\text{length}(J) = \mathbb{P}(\\{Y \in J\\} \cap \\{X \in [0,1]\\}) = \mathbb{P}(Y \in J)$, we conclude that $\\{X \in I\\}$ and $\\{Y \in J\\}$ are independent.

### The probability density function

Just as a function we integrate to find total mass is called a mass density function, the function we integrate to find total probability is called a **probability density function**. We refer to $f$ as a density because its value at a point may be interpreted as limit as $\epsilon \to 0$ of the probability mass in the ball of radius $\epsilon$ around $\omega$ divided by the volume (or area/length) of that ball.

::: .definition
**Definition**  
Suppose that $\Omega \subset \mathbb{R}^n$ for some $n \geq 1$, and suppose that $f:\Omega \to [0,\infty)$ has the property that $\int\_\Omega f \mathrm{d} V = 1$. We call $f$ a *probability density function*, abbreviated PDF, and we define

``` latex
\mathbb{P}(E) = \int_E f \, \mathrm{d} V
```

for events $E \subset \Omega$. We call $(\Omega, \mathbb{P})$ a **continuous probability space**.
:::

::: .exercise
**Exercise**  
Consider the probability space with $\Omega = [0,1]$ and probability measure given by the density $f(x) = 2x$ for $x \in
    [0,1]$. Find $\mathbb{P}([\frac{1}{2},1])$.
:::

    x-quill

---
> id: step-129

*Solution.* We calculate $\mathbb{P}([\frac{1}{2},1]) = \displaystyle{\int\_{\frac{1}{2}}^1 2x \,\mathrm{d} x = \frac{3}{4}}$.

If $f$ is constant on $\Omega$, then we call $f$ the *uniform measure* on $\Omega$. Note that this requires that $\Omega$ have finite volume.

All of the tools we developed for discrete probability spaces have analogues for continuous probability spaces. The main idea is to replace sums with integrals, and many of the definitions transfer over with no change. Let's briefly summarize and follow up with some exercises.

* The distribution of a continuous random variable $X$ is the measure $A\mapsto
  \mathbb{P}(X \in A)$ on $\mathbb{R}$.
* The cumulative distribution function $F_X$ of a continuous random variable
  $X$ is defined by $F_X(x) = \mathbb{P}(X \leq x)$ for all $x \in \mathbb{R}$.
* The joint distribution of two continuous random variables $X$ and $Y$ is the
  measure $A \mapsto \mathbb{P}((X,Y) \in A)$ on $\mathbb{R}^2$.
* If $(X,Y)$ is a continuous pair of random variables with joint density
  $f_{X,Y}: \mathbb{R}^2 \to \mathbb{R}$, then the [conditional distribution](gloss:conditional-distribution) of
  $Y$ given the event $\\{X=x\\}$ has density $f_{Y| X=x}$ defined by
  $f_{Y| \{X=x\}}(x)  = \frac{f_{X,Y}(x,y)}{f_X(x)}$, where $\displaystyle{f_X(x)
  = \int_{-\infty}^\infty f(x,y) \, \mathrm{d} y}$ is the pdf of $Y$
* Two continuous random variables $X$ and $Y$ are independent if $\mathbb{P}((X,Y)
  \in A \times B) = \mathbb{P}(X \in A) \mathbb{P}(Y \in B)$ for all $A\subset
  \mathbb{R}$ and $B \subset \mathbb{R}$. This is true if and only if $(X,Y)$ has
  density $(x,y) \mapsto f_X(x)f_Y(y)$, where $f_X$ and $f_Y$ are the densities
  of $X$ and $Y$, [respectively](gloss:respectively).
* The expectation of a continuous random variable $X$ defined on a probability
  space $(\Omega, \mathbb{P})$ is $\mathbb{E}[X] = \int_\Omega X(\omega)
  f(\omega) \, \mathrm{d} \omega$, where $f$ is $\mathbb{P}$'s density. The
  expectation is also given by $\mathbb{E}[X] = \int_{\mathbb{R}} x f_X(x) \,
  \mathrm{d} x$, where $f_X$ is the density of the distribution of $X$.

[Continue](btn:next)

---
> id: step-130

::: .example
**Example**  
Suppose that $f$ is the function which returns $2$ for any point in the triangle $\Omega$ with vertices $(0,0)$, $(1,0)$, and $(1,1)$ and otherwise returns 0. Suppose that $(X,Y)$ has density $f$. Find the conditional density of $X$ given $\\{Y = y\\}$, where $y$ is a number between and 0 and 1.
:::

    x-quill

---
> id: step-131

*Solution.* Then the conditional density of $X$ given $\\{Y = y\\}$ is the uniform distribution on the segment $[y,1]$, since that interval is the intersection of the triangle and the horizontal line at height $y$.


[Continue](btn:next)

---
> id: step-132

::: .exercise
**Exercise**  
Find the expectation of a random variable whose density is $f(x) = \mathrm{e}^{-x}\boldsymbol{1}\_{x \in [0,\infty)}$.
:::

    x-quill

---
> id: step-133

*Solution.* We calculate

``` latex
\int_{-\infty}^\infty x \mathrm{e}^{-x} \boldsymbol{1}_{x \in [0,\infty)}
\, \mathrm{d} x = \int_{0}^\infty x \mathrm{e}^{-x} \, \mathrm{d} x = 1.
```

::: .exercise
**Exercise**  
Show that the cumulative distribution function of a continuous random variable is increasing and continuous.

(Note: if $f$ is a nonnegative-valued function on $\mathbb{R}$ satisfying $\int\_\mathbb{R} f = 1$, then $\lim\_{\epsilon \to 0}\int\_{x}^{x+\epsilon}f(t) \mathrm{d} t = 0$ for all $x \in R$.)
:::

    x-quill

---
> id: step-134

*Solution.* The CDF is increasing since $F(s) = \int\_{-\infty}^s f(x) \, \mathrm{d} x \leq \int\_{-\infty}^t f(x) \, \mathrm{d} x = F(t)$ whenever $s < t$.

To see that $F$ is continuous, we note that the difference between $F(s)$ and $F(s+\epsilon)$ is the integral of the density $f$ over a width- $\epsilon$ interval. Thus we can use the supplied note to conclude that $F(s + \epsilon) \to F(s)$ as $\epsilon \to 0$ for all $s \in \mathbb{R}$.

[Continue](btn:next)

---
> id: step-135

::: .exercise
**Exercise**  
Suppose that $f$ is a density function on $\mathbb{R}$ and that $F$ is the cumulative distribution function of the associated probability measure on $\mathbb{R}$. Show that $F$ is differentiable and that $F' = f$ wherever $f$ is continuous.

Use this result to show that if $U$ is uniformly distributed on $[0,1]$, then $U^2$ has density function $f(x) = \frac{1}{2\sqrt{x}}$ on $(0,1]$.
:::

    x-quill

---
> id: step-136

*Solution.* The equation $F'(x) = f(x)$ follows immediately from the fundamental theorem of calculus. We have

``` latex
F'(x) = \frac{\mathrm{d} }{\mathrm{d} x} \int_{-\infty}^x f(t) \, \mathrm{d} t = f(x)
```

at any point $x$ where $f$ is continuous.

Let $F$ be the CDF of $U^2$. Since $\mathbb{P}(U \le t) = t$ for $t \in [0,1]$, we have $F(x) = \mathbb{P}(U^2 < x) = \mathbb{P}(U < \sqrt{x}) = \sqrt{x}$ for $x \in [0,1]$. Differentiating, we find that the density is $\frac{1}{2\sqrt{x}}$ on $(0,1)$.

[Continue](btn:next)

---
> id: step-137

::: .exercise
**Exercise**  
Given a cumulative distribution function $F$, let us define the **generalized inverse** $F^{-1}: [0,1] \to [-\infty,\infty]$ so that $F^{-1}(u)$ is the left endpoint of the interval of points which are mapped by $F$ to a value which is greater than or equal to $u$.

The generalized inverse is like the inverse function of $F$, except that if the graph of $F$ has a vertical jump somewhere, then all of the $y$ values spanned by the jump get mapped by $F^{-1}$ to the $x$-value of the jump, and if the graph of $F$ is flat over a stretch of $x$-values, then the corresponding $y$-value gets mapped by $F^{-1}$ back to the left endpoint of the interval of $x$ values.

The remarkably useful **inverse CDF trick** gives us a way of sampling from any distribution whose CDF we can compute a generalized inverse for: it says that if $U$ is uniformly distributed on $[0,1]$, then the cumulative distribution of $X = F^{-1}(U)$ is $F$.

* Confirm that if the graph of $F$ has a jump from $(x,y\_1)$ to $(x,y\_2)$, then the probability of the event $\\{X = x\\}$ is indeed $y\_2 - y\_1$.
* Show that the event $\\{X \leq t\\}$ has the same probability as the event $\\{U \leq F(t)\\}$. Conclude that $F$ is in fact the CDF of $X$. Hint: draw a figure showing the graph of $F$ together with $U$ somewhere on the $y$-axis and $X$ in the corresponding location on the $x$-axis.
* Write a Python function which samples from the distribution whose density function is $2x\boldsymbol{1}\_{0 \leq x \leq 1}$.
:::


    x-quill

---
> id: step-138

*Solution.*  

It can be shown that, as result of monotonicity and additivity,

``` latex
\mathbb{P}(X < x) = \max\{F(t) : t < x \},
```

whenever the maximum exists. Now, because a CDF is monotonic, if $F$ has a jump from $y_1$ to $y_2$ at $x$ it must be the case that $F(x) = y_2$ and $\max\\{F(t) : t < x \\} = y_1.$ Therefore, $\mathbb{P}(X < x) = y_1.$ Since

``` latex
\mathbb{P}(X = x)  = F(x) -  \mathbb{P}(X < x)
```

by additivity, it follows that $\mathbb{P}(X = x) = y_1 - y_2$ as required.

The CDF $F_U$ of a uniform $[0, 1]$ random variable is

``` latex
F_U(t) = \begin{cases}
0 & \text{if} \; t < 0 \\
t & \text{if} \; 0 \leq t \leq 1 \\
1 & \text{otherwise.}
\end{cases}
```

Therefore we have

``` latex
\mathbb{P}(U \leq F(t)) = F_U(F(t)) = F(t) = \mathbb{P}(X \leq t)
```

as required.

A random variable with this density function has a CDF defined by

``` latex
F(t) = \begin{cases}
0 & \text{if} \; t < 0 \\
t^2 & \text{if} \; 0 \leq t \leq 1 \\
1 & \text{otherwise}.
\end{cases}
```

Therefore the generalized inverse of $F$ is $F^{-1}(u) = \sqrt{u}$ for all $0 \leq u \leq 1.$ This leads to the following Julia code for sampling from this distribution.

::: .py-only
``` python
np.sqrt(np.random.random_sample())
```
:::

::: .jl-only
``` julia
using Distributions
sqrt(rand(Uniform(0, 1)))
```
:::

### General probability spaces

So far we have discussed probability spaces which are specified with the help of either a probability mass function or a probability density function. These are not the only possibilities. For example, if we produce an infinite sequence of independent bits $B\_1, B\_2, \ldots$, then the distribution of $B\_1/3 + B\_2 / 3^2 + B\_3 / 3^3 + \cdots$ has CDF as shown in the figure below. This function doesn't have jumps, so it does not arise from cumulatively summing a mass function. But it does all of its increasing on a set of total length zero (in other words, there is a set of total length 1 on which the derivative of this function is zero), so it also does not arise from cumulatively integrating a density function.

In general, a person may propose a probability space by specifying any set $\Omega$, a collection of subsets of $\Omega$ which supports taking countable unions, intersections, and complements, and a function $\mathbb{P}$ defined on that collection of subsets. We require that certain properties are satisfied:

    figure
      img(src="images/cantor.svg")
      p.caption.md The CDF of the uniform measure on the Cantor set.

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
## Conditional Expectation

The **conditional expectation** of $Y$ given $\\{X=x\\}$ is defined to be the expectation of $Y$ calculated with respect to its conditional distribution given $\\{X=x\\}$. For example, if $X$ and $Y$ are continuous random variables, then

``` latex
E[Y | X = x] = \int_{-\infty}^{\infty}y f_{Y | \{X = x\}} (y)  \, \mathrm{d} y.
```

[Continue](btn:next)

---
> id: step-139

::: .example
**Example**  
Suppose that $f$ is the function which returns $2$ for any point in the triangle with vertices $(0,0)$, $(1,0)$, and $(0,1)$ and otherwise returns 0. If $(X,Y)$ has joint pdf $f$, then the conditional density of $Y$ given $\\{X = x\\}$ is the mean of the uniform distribution on the segment $[x,1]$, which is $\frac{1+x}{2}$.
:::

The **conditional variance** of $Y$ given $\\{X = x\\}$ is defined to be the variance of $Y$ with respect to its conditional distribution of $Y$ given $\\{X=x\\}$.

::: .example
**Example**  
Continuing with the example above, the conditional density of $Y$ given $\\{X = x\\}$ is the variance of the uniform distribution on the segment $[x,1]$, which is $\frac{(1-x)^2}{12}$.
:::

[Continue](btn:next)

---
> id: step-140

We can regard the conditional expectation of $Y$ given $X$ as a random variable, denoted $\mathbb{E}[Y | X]$ by coming up with a formula for $\mathbb{E}[Y | \\{X = x\\}]$ for each $x \in \mathbb{R}$, and then substituting $X$ for $x$. And likewise for conditional variance.

::: .example
**Example**  
With $Y$ and $X$ as defined above, we have $\mathbb{E}[Y | X] = \frac{1+X}{2}$ and $\operatorname{Var}[Y | X] = \frac{(1-X)^2}{12}$.
:::

[Continue](btn:next)

---
> id: step-141

::: .exercise
**Exercise**  
Find the conditional expectation of $Y$ given $X$ where the pair $(X,Y)$ has density $x + y$ on $[0,1]^2$.
:::

    x-quill

---
> id: step-142

*Solution.* We calculate the conditional density as

``` latex
\frac{f_{X,Y}(x,y)}{f_X(x)} = \frac{x + y}{x + \frac{1}{2}},
```

 which means that

``` latex
\mathbb{E}[Y | X = x] = \int_0^1 \frac{y(x+y)}{x + \frac{1}{2}} \, \mathrm{d} x = \frac{3x+2}{6(x+\frac{1}{2})}.
```

So $\mathbb{E}[Y | X] = \frac{3X+2}{6(X+\frac{1}{2})}$

### The tower law

Conditional expectation can be helpful for calculating expectations, because of the **tower law**.

::: .theorem
**Theorem** (Tower law of conditional expectation)  
If $X$ and $Y$ are random variables defined on a probability space, then

``` latex
\mathbb{E}[\mathbb{E}[Y | X]] = \mathbb{E}[Y].
```

:::


::: .exercise
**Exercise**  
Consider a particle which splits into two particles with probability $p \in (0,1)$ at time $t=1$. At time $t = 2$, each extant particle splits into two particles independently with probability $p$.

Find the expected number of particles extant just after time $t = 2$. Hint: define $X$ to be $1$ or $0$ depending on whether the particle splits at time $t = 1$, and use the tower law with $X$.
:::

    x-quill

---
> id: step-143

*Solution.* If $Y$ is the number of particles and $X$ is the [indicator](gloss:indicator) of the event that the particle split at time $1$, then

``` latex
\mathbb{E}[Y | \{X = 0\}] = 2(p) + 1(1-p) = 1+p
```

 while

``` latex
\mathbb{E}[Y | \{X = 1\}] = 2(1+p) = 2 + 2p.
```

 Therefore, $\mathbb{E}[Y | \\{X = x\\}] = (1+p)(1+X)$. By the tower law, we have

``` latex
\mathbb{E}[Y] = \mathbb{E}[\mathbb{E}[Y | X]] = (1+p)(1+\mathbb{E}[X]) = (1+p)^2.
```
---
> id: common-distributions
## Common Distributions

There are several specific probability distributions which arise commonly in real-world applications. Learning the properties of these distributions and how those properties lead to their frequent appearance can help us build random models and reason about properties about random systems that involve these distributions. In this section, we will explore several such distributions.

[Continue](btn:next)

---
> id: bernoulli-distribution
### Bernoulli distribution

Suppose we conduct an experiment with exactly two outcomes, which we will encode as 0 and 1. For example, consider the following scenarios
* You flip a coin and it comes up heads (1) or tails (0)
* Someone's position on a political issue is either positive (1) or negative (0)}
* Someone can either be healthy (1) or sick (0)
* In an online survey, a user answers either true (1) or false (0)

[Continue](btn:next)

---
> id: step-bernoulli-setup

The distribution of the result of such an experiment is governed by a single parameter $p\in [0,1]$, which is the probability of the outcome encoded as 1. The probability of the other outcome is $1-p$, since one of the two outcomes must occur. It is customary to think of the outcomes 1 and 0 as success and failure, respectively, in which case $p$ may be referred to as the success probability. A sequence of independent Bernoulli random variables with the same success probability $p$ is referred to as a sequence of **Bernoulli trials**.


[Continue](btn:next)

---
> id: step-mean-bernoulli

We write $X \sim \text{Bernoulli}(p)$ to mean that $X$ is Bernoulli distributed with success probability $p$. The expected value of a $\text{Bernoulli}(p)$ random variable $X$ is

``` latex
  \mathbb{E}[X] &= \sum_{x \in \{0,1\}} xp_X(x) \\
         &= (0)(1-p) + (1)(p) \\
         &= p,
```

and its variance is

``` latex
  \mathbb{E}[X^2] - \mathbb{E}[X]^2 &= p - p^2 = p(1-p).
```

::: .exercise
**Exercise**  
Consider a sum $X$ of 10 independent Bernoulli random variables with success probability $p = 0.36$.

* Find the mean and variance of $X$.
* Find the value of $k \in \mathbb{Z}$ which maximizes $\mathbb{P}(X=k)$. Hint: write down an expression for $\mathbb{P}(X=k)$ and then use Julia to find its maximum value.
:::

    x-quill

---
> id: sum-bernoull-solution    

*Solution.*  
* For $i \in \\{1, 2, \dots, 10\\}$ let $X\_i \thicksim \text{Bernoulli}(0.36),$ then $X = X\_1 + X\_2 + \cdots +X\_{10}.$ Therefore,

``` latex

\mathbb{E}[X] &= \mathbb{E}[X_1] + \mathbb{E}[X_2] + \cdots + \mathbb{E}[X_{10}] & \text{(Linearity)} \\
&= \mathbb{E}[X_1]  = 3.6 & \text{(Identical distribution)}

```
 and

``` latex

\operatorname{Var}(X) &= \operatorname{Var}(X_1) + \operatorname{Var}(X_2)+ \cdots + \operatorname{Var}(X_{10}) & \text{(Independence)} \\
&= \operatorname{Var}(X_1) = 0.36(1 - 0.36) = 0.2304. & \text{(Identical distribution)}

```



* Observe that for $k \in \{0, 1, 2, \dots, 10\},$ we have $X = k$ if and only if there are $k$ successes. Now, there are $\binom{10}{k}$ ways in which we can have $k$ success and each of them occurs with probability $(0.36)^k(1 - 0.36)^{10 - k}$, by independence. Therefore

``` latex
\mathbb{P}(X = k) = \binom{10}{k}(0.36)^k(1 - 0.36)^{10 - k}.
```

We can use Julia's built-in `{jl} binomial` function and an array comprehension as follows

    pre(julia-executable)
      |
      | maximum([binomial(10, k)*0.36^k*(1 - 0.36)^(10 - k) for k in 0:10])
      |

to find that the value of $k$ that maximizes $\mathbb{P}(X = k)$ is $4$ and the maximum is approximately $0.246.$

[Continue](btn:next)

---
> id: binomial-distribution
### The binomial distribution

::: .example
**Example**  
What is the probability of rolling exactly 18 sixes in 100 independent rolls of a fair die?
:::

    x-quill

---
> id: step-sixes-binomial-solution

*Solution.* There are many ways to roll 18 sixes. We could roll 18 sixes followed by 82 non-sixes, and that happens with probability

``` latex
(1/6)^{18}(5/6)^{82},
```

by independence. Similarly, the probability of rolling 2 non-sixes, then 9 sixes, then 14 non-sixes, then 9 more sixes, and finally 66 non-sixes also has probability given by <a name=eq:sixes></a>. In fact, for every choice of 18 positions in which the sixes may fall, there is a an outcome with exactly 18 sixes whose probability is $(1/6)^{18}(5/6)^{82}$. Since there are $\binom{100}{18}$ of these outcomes, the probability that one of them occurs is

``` latex
\binom{100}{18}(1/6)^{18}(5/6)^{82}.
```

Generally, $n$ independent trials with success probability $p$ will lead to $k$ total successes with probability

``` latex
\binom{n}{k}p^k(1-p)^{n-k}.
```

This distribution is called the **binomial distribution** and is denoted $\text{Binomial}(n,p)$.

[Continue](btn:next)

---
> id: step-stirling-approximation

::: .exercise
**Exercise**  
**Stirling's approximation** allows us to more easily manipulate factorial expressions algebraically. It says that

``` latex
\lim_{n\to\infty}\frac{n!}{(n/e)^n\sqrt{2\pi n}} = 1.
```

Suppose that $n$ is even and that $p = \frac{1}{2}$. Use Stirling's approximation to show that $\sqrt{n}$ times the probability mass assigned to 0 by the distribution $\text{Binomial}(n,p)$ converges to a finite, positive constant as $n\to\infty$. Find the value of this constant.
:::

    x-quill

---
> id: step-binom-approx-solution

*Solution.* Let $p\_n = \binom{n}{n/2}2^{-n}$ be the probability mass at 0. Substituting Stirling's approximation for the factorial expressions in $\binom{n}{n/2} = \frac{n!}{(n/2)!^2}$ tells us that

``` latex
\frac{\binom{n}{n/2}2^{-n}}{\frac{(n/e)^n\sqrt{2\pi
          n}}{\left(\left(\frac{n}{2e}\right)^{n/2}\sqrt{2\pi
              n/2}\right)^2}2^{-n}} \to 1
```

as $n\to\infty$. Simplifying the big mess of an expression on the left hand side tells us that $p\_n/\sqrt{\frac{2}{\pi n}} \to 1$ as $n\to\infty$. Therefore, $\sqrt{n} p\_n \to \sqrt{2/\pi}$ as $n\to\infty$.

[Continue](btn:next)

---
> id: geometric-distribution
### Geometric distribution

The **geometric distribution** with parameter $p \in (0,1]$ is the distribution of the index of the first success in a sequence of independent Bernoulli trials.

The probability that the first success occurs on trial $k$ is equal to the probability that the first $k-1$ trials fail and the $k$ th trial succeeds. The probability of this event is $p(1-p)^{k-1}$. Therefore, the probability mass function of the geometric distribution is

``` latex
m(k) = p(1-p)^{k-1}.
```

::: .exercise
**Exercise**  
Use Monte Carlo to find the mean and variance of the geometric distribution with parameter $p = 1/3$.

Hint: you can sample from the geometric distribution using the definition: count the number of times you have to run `{jl} rand(Uniform(0, 1))` until you get a result less than $\frac{1}{3}$.
:::

    x-quill

---
> id: step-monte-carlo-geometric-solution    

*Solution.* Here's an example solution:

    pre(julia-executable)
      |
      | using Statistics, Distributions
      |
      | function sample_geometric(p)
      |     k = 1
      |     while true
      |         if rand(Uniform(0, 1)) < p
      |             return k
      |         else
      |             k += 1
      |         end
      |     end
      | end
      |
      | samples = [sample_geometric(1/3) for i=1:1_000_000]
      |
      | m = mean(samples)
      | σ² = mean(x^2 for x in samples) - m^2
      |
      | (m, σ²)
      |


The pair returned by this block is very close to $(3,6)$, leading us to conjecture that the mean and variance are 3 and 6, respectively.

Note: the superscript of 2 is part of the variable name. You can get this symbol at the Julia prompt using `{jl} \^2«tab»`



We can use Taylor series to work out exact expressions for the mean and variance. The mean is equal to

``` latex
p + 2p(1-p) + 3p(1-p)^2 + 4p(1-p)^3 + \cdots,
```

and we recognize all the terms except the first as $-p$ times the derivative of

``` latex
(1-p)^2 + (1-p)^3 + (1-p)^4 + \cdots
```

By the formula for the sum of a geometric series, this expression is equal to

``` latex
\frac{(1-p)^2}{1-(1-p)},
```
 and so the mean of the geometric distribution is

``` latex
p - p \frac{\mathrm{d}}{\mathrm{d} p}\left(\frac{(1-p)^2}{p}\right) = \frac{1}{p}.
```
 The variance can be worked in a similar but more tedious way, and the result is

``` latex
\operatorname{Var} X = \frac{1-p}{p^2}.
```
 These expressions do indeed evaluate to 3 and 6, respectively, when $p = \frac{1}{3}$ is substituted.


[Continue](btn:next)

---
> id: step-exercise-exponential-expectation

::: .exercise
**Exercise**  
Suppose that $X$ is geometric with success probability $\frac{1}{2}$, and consider the random variable $Y = 2^X$. What is the expected value of $Y$?
:::


    x-quill

---
> id: step-expected-value-geometric-solution

*Solution.* The random variable $Y$ is equal to $2^n$ with probability $2^{-n}$, for all positive integers $n$. Therefore, the expected value is

``` latex
2 \cdot \frac{1}{2} + 4 \cdot \frac{1}{4} + 8 \cdot \frac{1}{8} +
  \cdots = 1 + 1 + 1 + \cdots = \infty.
```

So $Y$ has infinite mean.

::: .exercise
**Exercise**  
Explain why `{jl} ceil(log(rand())/log(1-p))` returns a random variable whose distribution is geometric with success probability $p$.
:::

    x-quill

---
> id: step-ceiling-geometric-solution

*Solution.* Let $\lceil x \rceil = \min\\{k \in \mathbb{Z} : k \geq x\\}$ define the ceiling function on $\mathbb{R}.$ The question is asking to show that if $U$ is uniformly distributed in $[0, 1]$, then

``` latex
\left\lceil \frac{\log(U)}{\log(1 - p)} \right\rceil
```
 is geometrically distributed with success probability $p$.

This is true because of the inverse cdf trick of Exercise <a name=exer:inverse-cdf></a>. To show that this is indeed the case, it suffices to show that if $F$ is the cdf of a geometrically distributed random variable with success probability $p,$ then the generalized inverse of $F$ is

``` latex
F^{-1}(U) = \left\lceil \frac{\log(U)}{\log(1 - p)} \right\rceil
```
for all $U \in [0, 1].$ Now, let $F$ be the cdf of a geometric random variable with success probability $p$ and $\lfloor x \rfloor = \max\\{k \in \mathbb{Z} : k \leq x\\}$ denote the floor function on $\mathbb{R}.$ Then

``` latex
F(x) &= \sum_{k=1}^{\lfloor x\rfloor}p(1-p)^{k - 1} \\
&=p\sum_{k=0}^{\lfloor x\rfloor - 1} (1 - p)^k \\
&= 1 - (1 - p)^{\lfloor x \rfloor},
```

where the last line follows from evaluating the geometric sum. The jumps in $F$ clearly occur at positive integer values. Therefore, if we let $\mathbb{Z}\_+ = \\{1, 2, 3, \dots\\},$ we find that the generalized inverse of $F$ is given by

``` latex
F^{-1}(u) = \min\{x : F(x) \geq u\} = \min\{k \in \mathbb{Z}_+ : 1 - (1
-p)^k \geq u \}
```
 for all $u \in [0, 1].$ But if $1 - (1 -p)^k \geq u,$ then $k \geq \frac{\log(1- u)}{\log(1 - p)}$ because $\log(1 - p) \leq 0.$ Therefore, for all $u \in [0, 1]$

``` latex
F^{-1}(u) = \min\left\{k \in \mathbb{Z}_+ : k \geq \frac{\log(1- u)}{\log(1
    - p)} \right\} = \left\lceil \frac{\log(1 -u )}{\log(1 - p)}
\right\rceil.
```
Now if $U$ is uniformly distributed in $[0, 1],$ then $1 - U$ is also uniformly distributed in $[0, 1]$ so $\left\lceil \frac{\log(U)}{\log(1 - p)} \right\rceil$ is indeed geometrically distributed with success probability $p.$

::: .exercise
**Exercise**  
Every time you visit your favorite restaurant, you choose a meal uniformly at random from the 10 available meals. How many visits will it take on average before you've tried all 10 meals?

Hint: try letting $X\_k$ be the number of visits from the time you try the $k$ th unique meal to the time when you try the $(k+1)$ st unique meal.
:::

    x-quill

---
> id: step-coupon-collector-solution

*Solution.* For $k \in \\{1, 2, \dots, 9\\}$ let $X\_k$ be the number of visits it takes to try the $(k+1)$ th unique meal after trying the $k$ th unique meal. Then the number of visits it takes to try all the meals is $1 + X\_1 + X\_2 + \cdots X\_9.$ Now, for any non-negative integer $n,$ $X\_k = n$ if all the previous $n - 1$ visits yielded the $k$ meals that have already been tried. Because the meals are chosen independently and uniformly at random, we find that

``` latex
\mathbb{P}(X_k = n) = \left(1 -
      \frac{k}{10}\right)\left(\frac{k}{10}\right)^{n - 1}  
```
 for all $k \in \\{1, 2, \dots, 9\\}$ and any non-negative integer $n.$ For notational simplicity, let $p\_k = 1 - \frac{k}{10}.$ Then

``` latex
    \mathbb{E}[X_k] &= \sum_{n=1}^{\infty}np_k (1 - p_k)^{n-1} \\
            &= p_k \left(-\sum_{n=1}^{\infty} - n (1 - p_k)^{n-1}\right) \\
            &= p_k\left(-\sum_{n=1}^{\infty}\frac{d}{dp_k} (1 - p_k)^{n}\right)
```

for all $k \in \\{1, 2, \dots, 9\\}.$ Now, as we recall from elementary calculus, the term-by-term differentiation theorem gives

``` latex
\sum_{n=1}^{\infty}\frac{d}{dp_k} (1 - p_k)^{n} &= \frac{d}{dp_k}\sum_{n=1}^{\infty} (1 - p_k)^{n} \\
&= \frac{d}{dp_k}\frac{1 -p_k}{p_k} \\ &= \frac{-1}{p_k^2}.
```
 Therefore,

``` latex
\mathbb{E}[X_k] = \frac{1}{p_k} = \frac{10}{10 - k}
```
 for all $k \in \\{1, 2, \dots, 9\\}$ and thus

``` latex
\mathbb{E}[1 + X_1 + X_2 + \cdots + X_9] = 1 + \sum_{k=1}^{9}\mathbb{E}[X_k] &= 1 + \sum_{k=1}^{9} \frac{10}{10 - k} \\
                                                                 &= 1 + 10 \sum_{k=1}^9 \frac{1}{k} \\
                                                                 &= 1 + \frac{7129}{252} \approx 29.23.
```

We find that, on average, about $30$ visits are needed to try all the different meals.

[Continue](btn:next)

---
> id: poisson-distribution
### Poisson Distribution

The *Poisson distribution* arises as the number of 1's observed in a large number of low-probability Bernoulli random variables. This situation models a surprising variety of real-world scenarios:
* The number of calls received at a call center in a given hour. Each potential caller has a low probability of calling during that particular hour, and there are many potential callers who are acting independently.
* The number of meteorites which strike earth in a given year. There are many meteorites which might hit earth, and each one does so with low probability.
* The number of mutations on a strand of DNA. Each mutation occurs with low probability, but there are many potential sites for a mutation.
* The number of claims filed with an insurance company in a given month. There are many customers, and they file claims independently and with low probability each month.

::: .exercise
**Exercise**  

* Find the expected value of $S$, where $S$ is a sum of 1000 independent Bernoulli random variables with success probability $p = \frac{3}{1000}$.
* Find the probability mass function of $S$. Hint: find an expression representing the probability mass at each $k$ from 0 to 1000, and then use Julia to evaluate it. You will need to define `{jl} n = big(1000)` and `{jl} p = big(3)/1000` because arbitrary precision arithmetic is required to avoid overflow issues.
* Compare your results to the probability mass function $m(k) =
  \frac{3^k}{k!}e^{-3}$ defined on $\\{0,1,2,\ldots\\}$.
:::

    x-quill

---
> id: step-overshoot-solution

*Solution.* (i) The expected value of each Bernoulli random variable is $\frac{3}{1000}$, so by linearity of expectation the expected value of $S$ is $3$.

(ii) Consider all $2^{1000}$ possible length-1000 strings of 0's or 1's. Of these, there are $\binom{1000}{k}$ with $k$ ones and $1000-k$ zeros, and each of those $\binom{1000}{k}$ strings has a probability of $p^k(1-p)^{1000-k}$ of being the result of independent sequence of $\text{Bernoulli}(p)$ random variables (where $p = \frac{3}{1000}$). Therefore, the probability of the event $\\{S = k\\}$ is $\binom{1000}{k}p^k(1-p)^{1000-k}$. We can obtain a vector of these probabilities as follows:

    pre(julia-executable)      
      | n = big(1000)
      | p = big(3)/1000
      | massfunction = [binomial(n,k)*p^k*(1-p)^(n-k) for k=0:1000]


(iii) We can run `{jl} [3^big(k)/factorial(big(k))*exp(-3) for k=0:1000]` to get the first 1001 values of the given probability mass function. We see that the values are quite similar. The first ten pairs of values are

``` julia
(0.0495631, 0.0497871)
(0.149137, 0.149361)    
(0.224154, 0.224042)    
(0.224379, 0.224042)    
(0.168284, 0.168031)    
(0.100869, 0.100819)    
(0.0503334, 0.0504094)  
(0.0215065, 0.021604)   
(0.00803259, 0.00810151)
(0.0026641, 0.0027005)  
```

Inspired by this exercise, we make the following definition:

::: .definition
**Definition** (Poisson distribution)  
The Poisson distribution with mean $\lambda$ is the distribution whose probability mass function is

``` latex
m(k) = \frac{\lambda^k}{k!}e^{-\lambda}.
```
:::

    center
      figure
        img(src="images/poisson.svg" width=400)
        p.caption.md The probability mass function $m_\lambda$ for $\lambda \in \{1,3,5\}$

The expression $\frac{\lambda^k}{k!}e^{-\lambda}$ in the definition of the Poisson distribution arises as a limit of the expression

``` latex
\binom{n}{k}
 \left(\frac{\lambda}{n}\right)^k\left(1-\frac{\lambda}{n}\right)^{n-k}.
```

In other words, we use a success probability of $\frac{\lambda}{n}$ so that the expected number of successes remains constant as $n\to\infty$.

The connection between the Poisson and Bernoulli random variables may be used to obtain the mean and variance of the Poisson distribution. The average number of successes in $n$ Bernoulli($\lambda/n$) trials is $(n)(\lambda/n) = \lambda$, by linearity of expectation. Therefore, we expect that the mean of a Poisson random variable with parameter $\lambda$ is equal to $\lambda$. Similarly, the variance of the number of successes in $n$ Bernoulli( $\lambda/n$) trials is equal to $n\frac{\lambda}{n}\left(1-\frac{\lambda}{n}\right) =
\lambda(1-\lambda/n)$. Taking $n\to\infty$, we predict that the variance of a Poisson random variable with parameter $\lambda$ is also equal to $\lambda$. Both of these predictions are accurate:

::: .theorem
**Theorem**  
The mean and variance of a Poisson random variable with parameter $\lambda$ are $\lambda$ and $\lambda$, respectively.
:::

::: .exercise
**Exercise**  
Suppose that the number of typos on a page is a Poisson random variable with mean $\lambda = \frac{1}{3}$.

* Provide an explanation for why the Poisson distribution might be a good approximation for the distribution of typos on a page.
* Find the probability that a particular page is typo-free.
:::

    x-quill

---
> id: step-poisson-explanation-solution

*Solution.* (i) A typo opportunities on a page convert to actual typos with a small but roughly constant probability, there are quite a few of them, and different typos are (roughly) independent of one another. Thus the number of typos is a sum of independent Bernoulli random variables. (ii) The probability that a Poisson random variable with parameter $\lambda= \frac{1}{3}$ is equal to 0 is

``` latex
\frac{\lambda^0}{0!}e^{-\lambda} = e^{-1/3} \approx 71.6\%.  
```

---
> id: exponential-distribution
### Exponential distribution

The exponential distribution also emerges as a limit involving Bernoulli random variables: imagine placing a light bulbs activated by independent $\text{Bernoulli}(\lambda/n)$ random variables at every multiple of $1/n$ on the positive real number line. Consider the position $X$ of the **leftmost lit bulb**. The probability that it occurs to the right of a point $t > 0$ is equal to the probability that all of the $\lfloor nt \rfloor$ bulbs to the left remain unlit:

``` latex
\mathbb{P}(X > t) = \left(1 - \frac{\lambda}{n}\right)^{nt}
```

This probability converges to $e^{-\lambda t}$ as $n\to\infty$.

    center
      figure
        img(src="images/lightbulbs.svg" width=600)


::: .definition
**Definition** (Exponential distribution)  
Let $\lambda > 0$. The exponential distribution with parameter $\lambda$ is the probability measure on $\mathbb{R}$ which assigns mass $e^{-\lambda t}$ to the interval $(t,\infty)$, for all $t \geq 0$.

Equivalently, the exponential distribution with parameter $\lambda$ is the probability measure whose density is

``` latex
f(x) = \boldsymbol{1}_{x \geq 0} \lambda e^{-\lambda x}
```
:::


::: .exercise
**Exercise**  
Find the mean of the exponential distribution with parameter $\lambda$.
:::

    x-quill

---
> id: step-mean-exponential-solution

*Solution.* We calculate

``` latex
\int_{0}^\infty x \lambda e^{-\lambda x} \, \mathrm{d} x =
    \left. -\left(\frac{1}{\lambda}-x\right)e^{-\lambda x} \right|_{0}^{\infty}
    = \frac{1}{\lambda}.
```

::: .exercise
**Exercise**  
Suppose that $X$ is an exponentially distributed random variable with mean $\lambda$. Show that

``` latex
\mathbb{P}(X > s + t | X > t) = \mathbb{P}(X > s).
```
:::

*Solution.* Observing that $(s + t, \infty) \subset (t, \infty),$ we use the definition of conditional probability to get

``` latex
\mathbb{P}(X > s + t | X > t) &= \frac{\mathbb{P}(X > s+t \; \text{and} \; X > t)}{\mathbb{P}(X > t)} \\
                          &= \frac{\mathbb{P}(X > s+t)}{\mathbb{P}(X > t)} \\
                          &= e^{-\lambda(s + t)} \cdot e^{\lambda t} & \left(\mathbb{P}(X > x) = e^{-\lambda x}\right)\\
                          &= e^{-\lambda s} \\
                          &= \mathbb{P}(X > s)
```
as required.

---
> id: cauchy-distribution
### Cauchy distribution

The Cauchy distribution spreads probability mass *way* out on the real number line.

::: .definition

    img(src="images/cauchy.svg" width=300 style="float: right;")

**Definition** (Cauchy distribution)

The **Cauchy distribution** is the probability measure on $\mathbb{R}$ whose density function is

``` latex
f(x) = \frac{1}{\pi}\frac{1}{1+x^2}.
```
:::

The amount of probability mass assigned by the Cauchy distribution to the interval $(x,\infty)$ is

``` latex
\int_x^\infty \frac{1}{\pi}\frac{1}{1+t^2} \, \mathrm{d} t = \frac{\pi}{2}
  - \arctan(x) \approx \frac{1}{x}.
```

This mass goes to 0 so slowly that the Cauchy distribution doesn't even have a well-defined mean, let alone a variance. We say that the Cauchy distribution is **heavy-tailed**, and we will use it as an example when we want to study the effects of heavy tails on results like the law of large numbers or the central limit theorem.


::: .exercise
**Exercise**  
Show that the mean of the Cauchy distribution is not well-defined.
:::

    x-quill

---
> id: step-cauchy-distribution-mean

*Solution.* Let $X$ be Cauchy-distributed. Then

``` latex
\mathbb{E}[X] &= \int_{-\infty}^{\infty}\frac{1}{\pi}\frac{x}{1 + x^2} dx \\
& = \frac{1}{2\pi}\int_{-\infty}^{\infty} \frac{\mathrm{d}}{\mathrm{d}x}\ln\left(1 + x^2\right) dx \\
&= \frac{1}{2\pi}\left[\lim\limits_{b \to \infty} \ln\left(1 + b^2\right) - \lim\limits_{a \to -\infty}\ln\left(1 + a^2\right)\right].
```

Therefore $\mathbb{E}[X]$ is undefined because the term in the square brackets is undefined.

::: .exercise
**Exercise**  
Choose $\theta$ uniformly at random from the interval $[0,\pi]$ and fire a ray from the origin at angle $\theta$ with respect to the positive $x$-axis. Let $(X,1)$ be the point where this ray intersects the line $y = 1$. Show that $X$ is Cauchy-distributed.
:::

    x-quill

---
> id: step-cauchy-fire-ray

*Solution.* Let $F$ and $f$ be the cdf and pdf of $X,$ respectively. We need to show that $f(x) = \frac{1}{\pi} \frac{1}{1 + x^2}.$ Now, for all $X \neq 0,$ a ray from the origin that intersects the line $y = 1$ at $(X, 1)$ has slope $\frac{1}{X},$ giving $\theta = \arctan\left(\frac{1}{X}\right).$ If the ray intersects $y = 1$ at $(0, 1)$ then $\theta = \frac{\pi}{2}.$ Let $g : \mathbb{R} \to [0, \pi]$ be defined by

``` latex
g(x) =
    \begin{cases}
      \frac{\pi}{2} & \text{if}\; x = 0 \\
      \arctan\left(\frac{1}{x}\right) & \text{otherwise.}
    \end{cases}
```
 Then for all $x \in \mathbb{R},$ we observe that $X \leq x$ if and only if $\theta \geq g(x).$ Therefore,

``` latex
F(x) = \mathbb{P}(X \leq x) = \mathbb{P}\left(\theta \geq g(x) \right).
```
 Since $\theta$ is uniformly distributed in $[0, \pi],$ it follows that

``` latex
F(x) = \frac{1}{\pi} \left[\pi - g(x)\right].
```
 Now, by the fundamental theorem of calculus, we know that if $F'(x)$ exists for all $x \in \mathbb{R},$ then $f(x) = F'(x).$ But $F'(x) = \frac{\mathrm{d}}{\mathrm{d}x} \frac{1}{\pi}[\pi - g(x)] = -\frac{1}{\pi}
  \cdot g'(x).$ Now, by construction, $g$ is a continuous strictly decreasing function with

``` latex
g'(x) &= \frac{\mathrm{d}}{\mathrm{d}x} \arctan\left(\frac{1}{x}\right) \\
&= \frac{-1}{x^2}\frac{1}{1 + \frac{1}{x^2}} & (\text{Chain rule})\\
&= \frac{-1}{x^2 + 1}
```

for all $x \neq 0.$ Since $g'(0) = -1,$ it follows that $g'(x) = \frac{-1}{1 + x^2}$ for all $x \in \mathbb{R},$ and thus $F'(x)$ exists. Therefore,

``` latex
f(x)= \frac{1}{\pi} \cdot g'(x)  = \frac{1}{\pi}\frac{1}{1 + x^2}  
```
and $X$ is Cauchy-distributed.


---
> id: normal-distribution
### Normal distribution

Because of the *central limit theorem*, which we will discuss in the next section, the normal distribution plays a central role in probability and statistics.


::: .definition
**Definition** (Normal distribution)  

    img(src="images/gaussian-density.svg" width=280 style="float: right;")

For $\mu \in \mathbb{R}$ and $\sigma \geq 0$, we define the **normal distribution**, denoted $\mathcal{N}(\mu,\sigma)$, to be the probability measure on $\mathbb{R}$ whose density function is

``` latex
f_{\mu,\sigma}(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{-(x-\mu)^2/(2\sigma^2)}.     
```

The **standard normal distribution** is $\mathcal{N}(0,1)$.
:::


::: .exercise
**Exercise**  
Show that if $Z$ is a standard normal random variable and $\sigma > 0$, then the distribution of $\sigma Z + \mu$ is $\mathcal{N}(\mu,\sigma)$.
:::

    x-quill

---
> id: step-shift-variable

*Solution.* Let $F$ and $f$ be the CDF and PDF of $\sigma Z + \mu,$ respectively. We need to show that

``` latex
f(x) = \frac{1}{\sigma \sqrt{2\pi}}e ^{-(x - \mu)^2/ (2\sigma^2)}
```
 for all $x \in \mathbb{R}.$ Now, for any $x \in \mathbb{R},$ we have

``` latex
F(x) = \mathbb{P}(\sigma Z + \mu \leq x) &= \mathbb{P}\left(Z \leq \frac{x - \mu}{\sigma} \right) \\
  & = \int_{-\infty}^{\frac{x - \mu}{\sigma}}\frac{1}{\sqrt{2\pi}} e^{-t^2 / 2} dt.
```

But $f(x) = \frac{\mathrm{d}}{\mathrm{d}x} F(x)$ whenever the derivative exists. Therefore

``` latex
f(x) &= \frac{\mathrm{d}}{\mathrm{d}x} \int_{-\infty}^{\frac{x - \mu}{\sigma}}\frac{1}{\sqrt{2\pi}} e^{-t^2 / 2} dt \\
& = \frac{1}{\sqrt{2\pi}} e^{-\left(\frac{x - \mu}{\sigma}\right)^2 / 2} \cdot \frac{\mathrm{d}}{\mathrm{d}x} \left({\frac{x - \mu}{\sigma}} \right) & (Chain \; rule) \\
&= \frac{1}{\sigma \sqrt{2\pi}}e ^{-(x - \mu)^2/ (2\sigma^2)}
```

and thus $\sigma Z + \mu \thicksim \mathcal{N}(\mu, \sigma).$


::: .example
**Example**  
In terms of the cumulative distribution function $\Phi$ of the standard normal, express the probability that a normally distributed random variable with mean 1 and variance 3 is between 2 and 4.
:::

[Continue](btn:next)

---
> id: step-cdf


*Solution.* Let's denote by $X$ a random variable with mean $1$ and variance $3$. Then $Z = (X-1)/\sqrt{3}$ is a standard normal random variable. Furthermore, $X$ is between 2 and 4 if and only if $Z$ is between $(2-1)/\sqrt{3} = 1/\sqrt{3}$ and $(4-1)/\sqrt{3} = 3/\sqrt{3}$.

Therefore, the desired probability is

``` latex
\mathbb{P}(Z \in (1/\sqrt{3}, 3/\sqrt{3}) = \Phi(3/\sqrt{3}) -
    \Phi(1/\sqrt{3}).
```

We can compute this probability in Julia as follows:

    pre(julia-executable)
      | using Distributions
      | Φ(x) = cdf(Normal(0, 1),x)
      | Φ(3/sqrt(3)) - Φ(1/sqrt(3))

We find that the probability is approximately $0.24$.

[Continue](btn:next)

---
> id: step-sum-two-normals

If we sum two independent random variables with means $\mu\_1$ and $\mu\_2$ and variances $\sigma\_1^2$ and $\sigma\_2^2$, respectively, then the mean and variance of the resulting sum are $\mu\_1 + \mu\_2$ and $\sigma\_1^2 + \sigma\_2^2$. Remarkably, if the random variables being summed are normal, then the sum is *also normal*:


::: .theorem
**Theorem**  
If $X\_1$ and $X\_2$ are independent normal random variables with distributions $\mathcal{N}(\mu\_1, \sigma\_1^2)$ and $\mathcal{N}(\mu\_2, \sigma\_2^2)$, respectively, then the sum $X\_1 + X\_2$ has distribution $\mathcal{N}(\mu\_1 + \mu\_2, \sigma\_1^2 + \sigma\_2^2)$.
:::


::: .exercise
**Exercise**  
Suppose that $n\geq 1$ and that $X\_1, X\_2, \ldots, X\_n$ are independent standard normal random variables. Find the distribution of $\frac{X\_1 + X\_2 + \cdots + X\_n}{\sqrt{n}}$.
:::

    x-quill

---
> id: step-distribution-normal-mean

*Solution.* We know that $X\_1+X\_2$ is normal with mean 0 and variance $1+1 = 2$. Then $X\_1+X\_2+X\_3$, which is a sum of $X\_1+X\_2$ and $X\_3$ is normal with mean 0 and variance $2 + 1 = 3$.

Continuing in this way, we find that $X\_1 + \cdots + X\_n$ is a normal random variable with mean 0 and variance $n$. Dividing this random variable by $\sqrt{n}$ divides its variance by $\sqrt{n}^2 = n$, so we find that the distribution of $\frac{X\_1 + X\_2 + \cdots + X\_n}{\sqrt{n}}$ is $\mathcal{N}(0,1)$.


---
> id: multivariate-normal-distribution
### The multivariate normal distribution

If $\boldsymbol{Z} = (Z\_{1},Z\_{2},\ldots,Z\_{n})$ is an independent sequence of standard normal random variables, $A$ is an $m\times n$ matrix of constants, and $\boldsymbol{\mu}$ is an $m\times 1$ vector of constants, then the vector

``` latex
\boldsymbol{X} = A\boldsymbol{Z} + \boldsymbol{\mu}
```
is said to have **multivariate normal distribution**.

If $\Sigma$ is invertible, then the pdf of $\boldsymbol{X}$ is given by

``` latex
f_{\boldsymbol{X}}(\boldsymbol{x}) = \frac{1}{\sqrt{\det(2\pi \Sigma)}}
    \exp\left(-\frac{1}{2}(\boldsymbol{x} - \boldsymbol{\mu})^T \Sigma^{-1}
      (\boldsymbol{x} - \boldsymbol{\mu})\right).
```

The figure below shows a graph of this density as well as 1000 samples from the distribution of $A\boldsymbol{Z} + \boldsymbol{\mu}$, where $A = \begin{bmatrix} 1 & \frac{1}{2} \\ \frac{1}{2} & 1 \end{bmatrix}$ and $\boldsymbol{\mu} = \begin{bmatrix} 3 \\ 3 \end{bmatrix}$

    center
      figure
        img(src="images/multinormal.svg" width=380)

        p.caption A graph of a multivariable normal density


::: .exercise
**Exercise**  
Show that the covariance matrix of a multivariate normal random vector $\boldsymbol{X} = A\boldsymbol{Z} + \boldsymbol{\mu}$ is $\Sigma = A A^T$ and that its mean is $\boldsymbol{\mu}$.

Note: you may use the following properties: $\operatorname{Cov}(Y\_1, Y\_2 + c) = \operatorname{Cov}(Y\_1, Y\_2)$ for any constant $c$ and any random variables $Y\_1$ and $Y\_2$, and if $\mathbf{Y}$ is an $n \times p$ random matrix and $M$ is an $m \times n$ matrix of constants, then $\mathbb{E}[M\mathbf{Y}] = M\mathbb{E}[\mathbf{Y}]$.
:::

    x-quill

---
> id: step-multivariate-covariance-solution

*Solution.* Before showing that $\Sigma = AA',$ we first make two observations. First, for any $c \in \mathbb{R}$ and two real-valued random variables $Y\_1$ and $Y\_2,$ we have

``` latex
\operatorname{Cov}(Y_1, Y_2 + c) &= \mathbb{E}[Y_1(Y_2 + a)] - \mathbb{E}[Y_1](\mathbb{E}[Y_2 + c])\\
&= \mathbb{E}[Y_1Y_2 + cY_1] - \mathbb{E}[Y_1](\mathbb{E}[Y_2 + c]) \\
&= \mathbb{E}[Y_1 Y_2] + c\mathbb{E}[Y_1] -  \mathbb{E}[Y_1](\mathbb{E}[Y_2] + c) & \text{(Linearity)} \\
&= \mathbb{E}[Y_1 Y_2] - \mathbb{E}[Y_1] \mathbb{E}[Y_2] = \operatorname{Cov}(Y_1,Y_2).
```

Second, if $\mathbf{Y}$ is an $n \times p$ random matrix and $M$ is an $m \times n$ matrix of real constants, then $\mathbb{E}[M\mathbf{Y}] = M\mathbb{E}[\mathbf{Y}]$ because

``` latex
\mathbb{E}[(M\mathbf{Y})_{ij}] &= \mathbb{E}\left[\sum_{k=1}^nM_{ik}\mathbf{Y}_{kj}\right] \\
&= \sum_{k=1}^nM_{ik}\mathbb{E}[\mathbf{Y}_{kj}] & \text{(Linearity)}\\
&=(M\mathbb{E}[\mathbf{Y}])_{ij}.
```

A similar argument also shows that $\mathbb{E}[\mathbf{Y}B] = \mathbb{E}[\mathbf{Y}]B$ for any $p \times r$ matrix $B$ of real constants.

Now, from the first observation, we deduce that $\Sigma$ is the same as the covariance matrix of $A\mathbf{Z}.$ By the second observation, we find $\mathbb{E}[A\mathbf{Z}] = A\mathbb{E}[\mathbf{Z}]= \mathbf{0}$ because $\mathbb{E}[\mathbf{Z}] = \mathbf{0}$. Combining these with Exercise <a name=exer:cov-mat></a>, we find that

``` latex
\Sigma &= \mathbb{E}[(A\mathbf{Z}) (A\mathbf{Z})'] \\
&= \mathbb{E}[A\mathbf{Z}\mathbf{Z}' A'] \\
&= A \mathbb{E}[\mathbf{Z}\mathbf{Z}'] A'.
```

Now, $\mathbb{E}[\mathbf{Z}\mathbf{Z}']$ is the covariance matrix of $\mathbf{Z},$ which is the identity matrix in $\mathbb{R}^n$ because the components of $\mathbf{Z}$ are independent standard normals. Therefore, $\Sigma = AA'$ required.


---
> id: central-limit-theorem
## Central Limit Theorem

### Convergence in distribution

The **central limit theorem**, one of the most important results in applied probability, is a statement about the convergence of a sequence of probability measures. So, we begin this section by exploring what it should mean for a sequence of probability measures to converge to a given probability measure.

Roughly speaking, we will consider two probability measures close if they put approximately the same amount of probability mass in approximately the same places on the number line. For example, a sequence of continuous probability measures with densities $f\_1, f\_2, \ldots$ converges to a continuous probability measure with density $f$ if $\lim\_{n\to\infty} f\_n(x) = f(x)$ for all $x \in \mathbb{R}$:

    figure
      img(src="images/densities.svg")
      p.caption.md The sequence of densities $f_n$ converges to the density $f$ as $n\to\infty$.

[Continue](btn:next)

---
> id: step-144

If the limiting probability measure is not continuous, then the situation is slightly more complicated. For example, we would like to say that the probability measure which puts a mass of $\frac{1}{2}+\frac{1}{n}$ at $\frac{1}{n}$ and a mass of $\frac{1}{2}-\frac{1}{n}$ at $1 + \frac{1}{n}$ converges to the [fair coin flip distribution](gloss:bernoulli) as $n\to\infty$. This does not correspond to pointwise convergence of the probability mass functions, since we don't have convergence of probability mass function values at 0 or at 1 in this example.

    figure
      img(src="images/convergence-in-distribution.svg")
      p.caption.md The probability measures which assign mass $\frac{1}{2}+\frac{1}{n}$ and $\frac{1}{2} - \frac{1}{n}$ to $\frac{1}{n}$ and $1+\frac{1}{n}$, respectively, (shown in sea green) converge to the Bernoulli distribution with success probability $\frac{1}{2}$(shown in red).

[Continue](btn:next)

---
> id: step-145

We can get around this problem by giving ourselves a little space to the left and right of any point where the limiting measure has a positive probability mass. In other words, suppose that $\nu$ is a probability measure on $\mathbb{R}$ with probability mass function $m$, and consider an interval $I = (a,b)$. Let's call such an interval a *continuity interval* of $\nu$ if $m(a)$ and $m(b)$ are both zero.

We will say that a sequence of probability measures $\nu\_1, \nu\_2, \ldots$ converges to $\nu$ if $\nu\_n(I)$ converges to $\nu(I)$ for every continuity interval $I$ of $\nu$.

We can combine the discrete and continuous definitions into a single definition:

::: .definition
**Definition** (Convergence of probability measures on $\mathbb{R}$)  
A sequence $\nu\_1, \nu\_2, \ldots$ of probability measures on $\mathbb{R}$ converges to a probability measure $\nu$ on $\mathbb{R}$ if $\nu\_n(I) \to \nu(I)$ whenever $I$ is an interval satisfying $\nu(\\{a,b\\}) = 0$, where $a$ and $b$ are the endpoints of $I$.
:::

[Continue](btn:next)

---
> id: step-146

::: .exercise
**Exercise**  
Define $f\_n(x)$ to be $n$ when $0 \leq x \leq 1/n$ and 0 otherwise, and let $\nu\_n$ be the probability measure with density $f\_n$. Show that $\nu\_n$ converges to the probability measure $\nu$ which puts of all its mass at the origin.
:::

    x-quill

---
> id: step-147

*Solution.* Suppose $I=(a,b)$ is a continuity interval of $\nu$.

If $I$ contains the origin, then the terms of sequence $\nu\_1(I), \nu\_2(I), \ldots$ are equal to $1$ for large enough $n$, since all of the probability mass of $\nu\_n$ is in the interval $\left[0,\frac{1}{n}\right]$ and eventually $\left[0,\frac{1}{n}\right] \subset I$.

If $I$ does not contain the origin, then the terms of the sequence $\nu\_1(I), \nu\_2(I), \ldots$ are eventually equal to 0, for the same reason.

In either case, $\nu\_n(I)$ converges to $\nu(I)$. Therefore, $\nu\_n$ converges to $\nu$.

[Continue](btn:next)

---
> id: step-148

### The central limit theorem

The *law of large numbers* tells us that the distribution $\nu$ of a mean of many independent, identically distributed finite-variance, mean-$\mu$ random variables is concentrated around $\mu$. This a mathematical formalization of the well-known fact that flipping a coin many times results in a heads proportion close to 1/2 with high probability, or the average of many die rolls is very close to 3.5 with high probability.

[Continue](btn:next)

---
> id: step-149

The **central limit theorem** gives us precise information about *how* the probability mass of $\nu$ is concentrated around its mean. Consider a sequence of independent fair coin flips $X\_1, X\_2, \ldots$, and define the sums

``` latex
S_n = X_1 + \cdots + X_n,
```

for $n \geq 1$. The probability mass functions of the $S\_n$'s can be calculated exactly, and they are graphed in the figure below, for several values of $n$. We see that the graph is becoming increasingly bell-shaped as $n$ increases.

    figure
      img(src="images/bernoulliCLT.svg")
      p.caption Probability mass functions of sums of Bernoulli(1/2) random variables.

[Continue](btn:next)

---
> id: step-150

If we repeat this exercise with other distributions in place of the independent coin flips, we obtain similar results. For example, the *Poisson* distribution is a discrete distribution which assigns mass $e^{-3}3^{k}/k!$ to each nonnegative integer $k$. The probability mass functions for sums of the independent Poisson(3) random variables is shown in the figure below. Not only is the shape of the graph stabilizing as $n$ increases, but we're apparently getting the *same* shape as in the Bernoulli example.

    figure
      img(src="images/otherCLT.svg")
      p.caption Probability mass functions of sums of Poisson(3) random variables.

[Continue](btn:next)

---
> id: step-151

To account for the shifting and spreading of the distribution of $S\_n$, we *normalize* it: we subtract its mean and then divide by its standard deviation to obtain a random variable with mean zero and variance 1:

``` latex
S_n \quad\stackrel{\text{shift}}{\longrightarrow}\quad
S_n - n\mu \quad \stackrel{\text{scale}}{\longrightarrow}\quad
\frac{S_n - n\mu}{\sigma\sqrt{n}}
```

So, we define $S\_n^* = \frac{S\_n - n\mu}{\sigma\sqrt{n}}$, which has mean 0 and variance 1. Based on the figures above, we conjecture that the distribution of $S\_n^\*$ converges as $n\to\infty$ to some distribution with a bell-shaped probability density function.

[Continue](btn:next)

---
> id: step-152

This conjecture turns out to be correct, with a *Gaussian* as the limiting distribution. The **standard Gaussian distribution** is denoted $\mathcal{N}(0,1)$ and has probability density function $t\mapsto \frac{1}{\sqrt{2\pi}}e^{-t^2/2}$.

::: .theorem
**Theorem** (Central Limit theorem)  
Suppose that $X\_1,X\_2,\ldots,$ are independent, identically distributed random variables with mean $\mu$ and finite standard deviation $\sigma$, and defined the normalized sums $S\_n^* = (X\_1 + \cdots + X\_n - n\mu)/(\sigma\sqrt{n})$ for $n \geq 1$.

For all $-\infty \leq a < b \leq \infty$, we have

``` latex
\lim_{n\to\infty} \mathbb{P}( a < S_n^* < b) = \mathbb{P}(a < Z < b),
```

where $Z \sim \mathcal{N}(0,1)$. In other words, the sequence $S\_1^\*, S\_2^\*,\ldots$ *converges in distribution* to $Z$.
:::

[Continue](btn:next)

---
> id: step-153

The **normal approximation** is the technique of approximating the distribution of $S\_n^*$ as $\mathcal{N}(0,1)$.

::: .example
**Example**  
Suppose we flip a coin which has probability 60% of turning up heads $n$ times. Use the normal approximation to estimate the value of $n$ such that the proportion of heads is between 59% and 61% with probability approximately 99%.
:::

    x-quill

---
> id: step-154

*Solution.* We calculate the standard deviation $\sigma = \sqrt{(0.4)(0.6)}$ and the mean $\mu = 0.6$ of each flip, and we use these values to rewrite the desired probability in terms of $S\_n^*$. We find

``` latex
P\left( 0.59 < \frac{1}{n}S_n < 0.61\right) &= P\left( -0.01  < \frac{S_n - \mu n}{n}
                                              < 0.01\right) \\
                                            &= P\left(
                                              -\frac{0.01\sqrt{n}}{\sqrt{0.4\cdot0.6}}
                                              < \frac{S_n - \mu n}{\sigma\sqrt{n}}
                                              <\frac{0.01\sqrt{n}}{\sqrt{0.4\cdot0.6}}\right),
```

where the last step was obtained by multiplying all three expressions in the compound inequality by $\sqrt{n}/\sigma$. Since $S\_n^\*$ is distributed approximately like a standard normal random variable, the normal approximation tells us to look for the least $n$ so that

``` latex
\int_{-a_n}^{a_n} \, dt > 0.99,
```

where $a\_n = 0.01\sqrt{n}/\sqrt{0.4\cdot0.6}$. By the symmetry of the Gaussian density, we may rewrite this equation as

``` latex
\int_{-\infty}^{a_n} \, dt > 0.995.
```

Defining the normal CDF $\Phi(x) = \int\_{-\infty}^x \frac{1}{\sqrt{2\pi}}e^{-t^2/2}\, dt$, we want to find the least integer $n$ such that $a\_n$ exceeds $\Phi^{-1}(0.995)$. The following code tells us that $\Phi^{-1}(0.995) \approx 2.576$.

::: .py-only
    pre(python-executable)
      | from scipy.stats import norm
      | norm.ppf(0.995)
:::

::: .jl-only
    pre(julia-executable)
      | using Distributions
      | quantile(Normal(0,1), 0.995)
:::

Setting this equal to $a\_n$ and solving for $n$ gives 15,924. The exact value of $n$ for which the probability is closest to 99% is 15,861, so we can see that the normal approximation worked pretty well in this case.

[Continue](btn:next)

---
> id: step-155

::: .example
**Example**  
Consider a random variable $S_n$ which is defined to be the sum of $n$ independent fair coin flips. The law of such a random variable is called a **binomial** distribution. Let $m\_n:\mathbb{R} \to [0,1]$ be the pmf of $S\_n^\* = (S_n - n\mu)/(\sigma\sqrt{n})= (S_n - n/2)/\sqrt{n/2}$. Use the code block below to observe that $m\_n(x)$ appears to converge to $0$ for all $x \in \mathbb{R}$, and explain why this does not contradict the central limit theorem.

For simplicity, you may assume that $n$ is even.
:::

    x-quill

---
> id: step-156

::: .py-only
    pre(python-executable)
      | import matplotlib.pyplot as plt
      | import scipy.stats
      | def binom_stickplot(n):
      |     """
      |     Return a stick plot representing the pmf
      |     of a sum of n independent coin flips
      |     """
      |     ν = scipy.stats.binom(n,0.5)
      |     # x contains the possible RV values:
      |     x = (np.arange(n+1) - n/2)/np.sqrt(n/2)
      |     # y contains the probabilities:
      |     y = [ν.pmf(k) for k in range(n+1)]
      |     plt.ylim(0,1)
      |     return plt.vlines(x,y)
      |
      | binom_stickplot(10)
:::

::: .jl-only
    pre(julia-executable)
      | using Plots, Distributions
      | function binom_stickplot(n)
      |     ν = Binomial(n, 0.5)
      |     sticks((-n÷2: n÷2)/sqrt(n/2), [pdf(ν, k) for k in 0:n],
      |            label = "Binomial($n,1/2)", ylims = (0, 1))
      | end
      | binom_stickplot(1000)
:::

*Solution.* Executing the cells, we see that the height of the tallest stick indeed goes to zero as the argument to `{code} binom_stickplot` is increased.

This finding does not contract the central limit theorem, since convergence in distribution is not based on convergence of the amount of probability mass at individual points but rather on the amount of probability mass assigned to _intervals_. In any positive-width interval, the distribution of $S\_n^\*$ has many points with nonzero probability mass. Since there are many of them, they can be small individually while nevertheless totaling up to a non-small mass.

[Continue](btn:next)

---
> id: step-157

::: .exercise
**Exercise**  
Suppose that the percentage of residents in favor of a particular policy is 64%. We sample $n$ individuals uniformly at random from the population.

* In terms of $n$, find a interval $I$ centered at 0.64 such that the proportion of residents polled who are in favor of the policy is in $I$ with probability about 95%.

* How many residents must be polled for the proportion of poll participants who are in favor of the policy to be between 62% and 66% with probability at least 95%?
:::


    x-quill

---
> id: step-158

*Solution.* Let $X\_i$ be the $i$ th sample from the population (1 if the resident is in favor, and 0 otherwise). Then the proportion of the residents in favor of the policy is $\overline{X} = \frac{X\_1+X\_2 + \cdots +X\_n}{n}.$ Each $X\_i$ is a Bernoulli $(0.64)$ random variable with $\mathbb{E}[X\_i] = 0.64$ and $\sigma(X\_i)= \sqrt{0.64(1 - 0.64)} = 0.48$.

We need to find $\operatorname{Var}\epsilon > 0$ such that $\mathbb{P}\left(0.64 - \operatorname{Var}\epsilon \leq \overline{X} \leq 0.64 + \operatorname{Var}\epsilon\right) = 0.95.$ Equivalently, we need to find $\operatorname{Var}\epsilon > 0$ such that $\mathbb{P}\left(\frac{-n\operatorname{Var}\epsilon}{\sigma(X\_1)\sqrt{n}} \leq \frac{X\_1+X\_2+ \cdots + X\_n - 0.64n}{\sigma(X\_1)\sqrt{n}} \leq \frac{n\operatorname{Var}\epsilon}{\sigma(X\_1)\sqrt{n}}\right) = 0.95.$ Now by the Central Limit Theorem, $\frac{X\_1+X\_2+ \cdots + X\_n - 0.64n}{\sigma(X\_1)\sqrt{n}} \thicksim \mathcal{N}(0, 1)$ for $n$ large. Since $\mathbb{P}(-1.96 \leq Z \leq 1.96) \approx 0.95$ for $Z \thicksim \mathcal{N}(0, 1),$ we look to solve

``` latex
\frac{n\operatorname{Var}\epsilon}{\sigma(X_1)\sqrt{n}} \approx 1.96.
```

Therefore,

``` latex
\operatorname{Var}\epsilon = 1.96 \frac{\sigma(X_1)}{\sqrt{n}} = \frac{0.9408}{\sqrt{n}}
```

and with probability 95%, the proportion of polled residents in favor of the policy will be in $I = [0.64 - \operatorname{Var}\epsilon, 0.64 + \operatorname{Var}\epsilon].$

For the second part, we want to find $n$ such that $\mathbb{P}(0.64 - 0.02 \leq \overline{X} \leq 0.64 + 0.02) \geq 0.95.$ From above, we find that $0.02 \geq \frac{0.9408}{\sqrt{n}}$ and thus $n \geq \left(\frac{0.9408}{0.02}\right)^2  \approx 2212.8.$ Therefore at least 2,213 residents must be polled, according to the normal approximation.

[Continue](btn:next)

---
> id: step-159

::: .exercise
**Exercise**  
Suppose that $X\_1, X\_2, \ldots$ is a sequence of independent, identically distributed random variables with variance 2 and mean 7. Find the limits of each of the following probabilities $n\to\infty$.
*  $\mathbb{P}(X\_1 + \cdots + X\_{n} = 7n)$
*  $\mathbb{P}(6.9n < X\_1 + \cdots + X\_{n} < 7.1n)$
*  $\mathbb{P}(7n < X\_1 + \cdots + X\_{n} < 7n + 3\sqrt{n})$
*  $\mathbb{P}(6n < X\_1 + \cdots + X\_{n} < 7n + 3\sqrt{n})$
:::


    x-quill

---
> id: step-160

*Solution.* Let $Z \thicksim \mathcal{N}(0, 1).$

For each non-negative integer $n,$ we have $\mathbb{P}(X_1+\cdots+X_n = 7n) = \mathbb{P}\left(\frac{X_1+\cdots +X_n - 7n}{\sqrt{2n}} = 0\right).$ By the Central Limit Theorem (CLT),

``` latex
\lim\limits_{n \to \infty}\mathbb{P}\left(\frac{X_1+\cdots +X_n - 7n}{\sqrt{2n}} = 0\right) = \mathbb{P}(Z= 0) = 0.
```

We have

``` latex
\lim\limits_{n \to \infty}&\mathbb{P}(6.9n< X_1+\cdots +X_n<7.1n) \\\ &= \lim\limits_{n \to \infty}\mathbb{P}\left(\frac{-0.1n}{\sqrt{2n}} < \frac{X_1+\cdots +X_n - 7n}{\sqrt{2n}} < \frac{0.1n}{\sqrt{2n}} \right) \\\
&= \lim\limits_{n \to \infty}\mathbb{P}\left(\frac{-0.1\sqrt{n}}{\sqrt{2}}< \frac{X_1+\cdots +X_n - 7n}{\sqrt{2n}} < \frac{0.1\sqrt{n}}{\sqrt{2}} \right) \\\
&= \mathbb{P}(-\infty< Z<\infty) = 1
```

by the CLT. Since $\mathbb{P}(7n< X_1+\cdots +X_n<7n+3\sqrt{n}) = \mathbb{P}\left(0 < \frac{X_1+\cdots +X_n - 7n}{\sqrt{2n}} < \frac{3}{\sqrt{2}} \right)$ for all $n \geq 1,$ we find that

``` latex
\lim\limits_{n \to \infty}\mathbb{P}(7n< X_1+\cdots +X_n<7n+3\sqrt{n}) = \mathbb{P}\left(0 < Z < \frac{3}{\sqrt{2}}\right) \approx 0.483
```

by the CLT. We have

``` latex
\lim\limits_{n \to \infty}&\mathbb{P}(6n< X_1+\cdots +X_n<7.1n) \\\ &= \lim\limits_{n \to \infty}\mathbb{P}\left(\frac{-n}{\sqrt{2n}} < \frac{X_1+\cdots +X_n - 7n}{\sqrt{2n}} < \frac{3\sqrt{n}}{\sqrt{2n}} \right) \\\
&= \lim\limits_{n \to \infty}\mathbb{P}\left(\frac{-\sqrt{n}}{\sqrt{2}}< \frac{X_1+\cdots +X_n - 7n}{\sqrt{2n}} < \frac{3}{\sqrt{2}} \right) \\\
&= \mathbb{P}\left(-\infty< Z<\frac{3}{\sqrt{2}}\right) \approx 0.983
```

by the CLT.
