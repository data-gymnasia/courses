
# Graphical Models

> id: intro
## Introduction

Let $(X_1, X_2, \ldots, X_n)$ be a collection of random variables. When the
random variables are pairwise independent, the joint density of the
random variables is given by

``` latex
p(x_1, x_2, \ldots, x_n) &= p(x_1)p(x_2|x_1)p(x_3|x_2,x_1)\cdots
p(x_n|x_{n-1}, \ldots, x_1) \\
&= \prod_{i=1}^n p(x_i).
```

Similarly, when the random variables exhibit the Markovian property, their
joint density is given by

``` latex
p(x_1, x_2, \ldots, x_n) &= p(x_1)p(x_2|x_1)p(x_3|x_2,x_1)\cdots
p(x_n|x_{n-1}, \ldots, x_1) \\
&= p(x_1)p(x_2|x_1)p(x_3|x_2)\cdots p(x_n|x_{n-1}).
```

In this course we will consider collections of random variables that are not
necessarily independent nor identically distributed and whose joint
density is said to respect a graph $G$; more precisely, the graph will
contain information about the dependence structure of the random variables.

<!-- Break -->

::: .definition
**Definition** (Undirected Graph)
An undirected graph $G$ is a pair of objects $(V,E)$ where both $V$ and $E$
are sets. $V$ consists of the vertices (nodes) of the graph and $E$ consists of
the edges of the graph where each edge is represented by an unordered pair of
vertices.
:::

::: .example
**Example**  
Consider the graph with vertices $\\\{1,2,3,4,5\\\}$ defined by
$G = (\\\{1,2,3,4,5\\\},
   \\\{\\\{1,2\\\},\\\{1,4\\\},\\\{2,4\\\},
   \\\{2,3\\\},\\\{3,4\\\},\\\{4,5\\\}\\\})$.

Below are two equivalent ways of representing the graph pictorially:

    figure
      img(src="images/graph_example_layout.svg")

:::

<!-- Break  -->

To define what it means for a collection of random variables to *respect* a
graph, we will need the notion of a graph *clique*.

::: .definition
**Definition** (Clique)

Let $G = (V,E)$ be a graph. A clique $C$ of $G$ is a nonempty subset of $V$
such that there exists an edge between any two vertices in $C$.
:::

We will let $\mathcal{C}(G)$ denote the set of all cliques of $G$.

*Remark*: We will adopt the convention that a set containing a single vertex
is a clique.

::: .example
**Example**
Let $G$ be the graph defined in the previous example. Then $\mathcal{C}(G)$
is given by

``` latex
\mathcal{C}(G) = &\{ \\
&\{1\},\{2\},\{3\},\{4\},\{5\}, \\
&\{1,2\},\{1,4\},\{2,4\},\{2,3\},\{3,4\},\{4,5\}, \\
&\{1,2,4\},\{2,3,4\} \\
&\}
```

Note that the set $\\\{1,2,3,4\\\}$ is not a clique because there is not an edge
between vertices 1 and 3.
:::

<!-- Break  -->

We will begin our study of graphical models with the notion of
*Gibbs Random Fields* but first need to introduce some notation:

* Given a set of vertices $V$, the set $\\\{X_v\\\}_{v \in V}$ is a set of
random variables indexed by the vertices in $V$.

* The joint distribution (or density) of $\\\{X_v\\\}_{v \in V}$ will be
denoted $p_V(x_V)$ or $p_V$ for short.

* Given a sequence of vertices $A = (v_1, v_2, \ldots, v_k)$, $X_A$ denotes
the random variable vector $(X_{v_1}, X_{v_2}, \ldots, X_{v_k})$.

* $x_A$ will denote a possible outcome of $X_A$. Given a single vertex
$v \in V$, $x_v$ will denote a possible outcome of random variable $X_V$.

* For $v \in V$, $p_V$ will denote the marginal distribution (or density) of
the random variable $X_v$. $p_A$ will denote the joint distribution (density)
of the random variables in the vector $X_A$.

---
> id: GRF
## Gibbs Random Fields

::: .definition
**Definition** (Gibbs Random Field)

Given a graph $G = (V,E)$, the random variables $X_V$ are said to factor as
a Gibbs random field (GRF) with respect to $G$ if the joint distribution of
$p_V$ can be written as

``` latex
p_V(x_V) &= \frac{1}{Z}\prod_{C \in \mathcal{C}(G)} \phi_C(x_C)
```

where $Z > 0$ is a normalization constant and the functions $\phi_C$, called
*clique potentials*, are nonnegative.

We also say that $\\\{X_v\\\}_{v \in V}$ *respects* $G$
:::

*Remark*: The definition for GRF holds for both discrete and continuous random
variables: we simply replace distributions with densities where appropriate.

::: .example
**Example**  

Let $X_1, X_2, \ldots, X_n$ be pairwise independent random variables. Then the
joint distribution of $X_1, X_2, \ldots, X_n$ is given by

``` latex
p(x_1, x_2, \ldots, x_n) &= p(x_1)p(x_2)\cdots p(x_n).
```

Consider the graph with
$\mathcal{C}(G) = \bigcup_{i=1}^n \\\{i\\\}$. The graph satisfying this set of
cliques is $G = (\\\{1,2,\ldots,n\\\}, \varnothing)$, that is, the trivial graph
with $n$ vertices and no edges. With this graph we can express the joint
distribution as

``` latex
p_V(x_V) &= \prod_{C \in \mathcal{C}(G)} \phi_C(x_C) \\
&= \prod_{i = 1}^n \phi_{\{i\}}
```

where $\phi_{\\\{i\\\}}(x_{\\\{x_i\\\}}) = p(x_i)$. Thus we see that this
collection of random variables is a Gibbs random field with respect to the
trivial graph. For $n = 5$, $\\\{X_v\\\}_{v \in \\\{1,2,3,4,5\\\}}$ respects
the following graph:

    figure
      image(src="images/trivial_graph_example.svg")

:::

::: .example
**Example**

Let $X_1, X_2, \ldots, X_n$ be a collection of random variables exhibiting the
Markov property so that their joint distribution is given by

``` latex
p(x_1, x_2, \ldots, x_n) &= p(x_1)p(x_2|x_1)p(x_3|x_2)\cdots p(x_n|x_{n-1}).
```

Then $p_V$ factors into the following product of clique potentials:

``` latex
p_V(x_V) &= \prod_{C \in \mathcal{C}(G)} \phi_C(x_C) \\
&= \phi_{\{1\}}(x_{\{1\}})\prod_{i=2}^n \phi_{\{i-1,i\}}(x_{\{i-1,i\}})
```

where

``` latex
\phi_{\{1\}}(x_{\{1\}}) &= p(x_1) \\
\phi_{\{i-1,i\}}(x_{\{i-1,i\}}) &= p(x_i|x_{i-1}) \;\;
\textrm{for } i = 2,3,\ldots,n.
```

Thus we see that this collection of random variables respects the graph with
$\mathcal{C}(G) = \left(\bigcup_{i=1}^n \\\{i\\\}\right) \cup
\\\{\\\{1,2\\\},\\\{2,3\\\}, \ldots,
\\\{n,n-1\\\} \\\}$.
For $n = 5$, $\\\{X_v\\\}_{v \in \\\{1,2,3,4,5\\\}}$ respects the following
graph:

    figure
      img(src="images/markov_graph_example.svg")

*Remark*: From here forwrd, we will drop the set notation in the clique
potentials so that $\phi_{\\\{1\\\}}(x_{\\\{1\\\}})$ becomes $\phi_1(x_1)$
and $\phi_{\\\{3,4\\\}}(x_{\\\{3,4\\\}})$ becomes $\phi_{34}(x_{34})$.
:::

For the next example, we need to recall what it means for two events to be
conditionally independent. We say that events $A$ and $B$ are independent given
$C$, written $(A \cap B) \perp\\\!\\\!\\\!\perp C$, if one of the following
equivalent conditions holds:

``` latex
\mathbb{P}(A \cap B | C ) &= \mathbb{P}(A|C)\mathbb{P}(B|C) \\
\mathbb{P}(A |B \cap C ) &= \mathbb{P}(A|C).
```

::: .example
**Example**

In this example we introduce the Hidden Markov Model (HMM). Let
$Y_1, Y_2, \ldots, Y_n$ be a collection of random variables with the Markov
property; $Y_1, Y_2, \ldots, Y_n$ will be called *latent* or *hidden*
variables. Let $X_1, X_2, \ldots, X_n$ be a collection of random variables
such that, given $Y_i$, $X_i$ is independent of all other variables
$Y_1, X_1, \ldots, Y_{i-1}, X_{i-1}, Y_{i+1}, X_{i+1}, \ldots, Y_n, X_n$;
the variables $X_1, X_2, \ldots, X_n$ are called *observed* variables.

Let $Z_{-i}$ denote the collection of random variables
$Y_{i+1}, X_{i+1}, \ldots, Y_n, X_n$.
Then because $X_i$ is independent of all variables given $Y_i$, we have

``` latex
p(x_i|y_i,z_{-i}) &= p(x_i|y_i).
```

And by the Markov property of $Y_1, Y_2, \ldots, Y_n$,

``` latex
p(y_i|y_1, y_2, \ldots, y_{i-1}) = p(y_i|y_{i-1}).
```

The joint distribution is therefore given by

``` latex
p(x_1,x_2,\ldots,x_n,y_1,y_2,\ldots,y_n) &=
p(x_1|x_2,\ldots,x_n,y_1,\ldots,y_n)p(x_2,\ldots,x_n,y_1,\ldots,y_n) \\
&= p(x_1|y_1,z_{-1})p(x_2|y_2,z_{-2})\cdots p(x_n|y_n)p(y_1,\ldots,y_n) \\
&= p(x_1|y_1)p(x_2|y_2)\cdots p(x_n|y_n)p(y_1)p(y_2|y_2)\cdots p(y_n|y_{n-1}).
```

Thus, for $n=4$, the variables $Y_1, Y_2, \ldots, Y_n, X_1, X_2, \ldots, X_n$
respect the following graph:

    figure
      img(src="images/hmm_graph_example_2.svg")
:::


As the next example illustrates, a collection of random variables may respect
multiple graphs.

::: .example
**Example**  

Consider the joint distribution of the random variables
$X_V = X_1, X_2, \ldots, X_5$
given by

``` latex
p_V(x_V) &= \frac{1}{Z}x_3^{-x_5}x_1x_2x_3e^{x_1+x_4}.
```

The joint distribution can be factored into the product of clique potentials
in multiple ways, defining different graphs.

* Consider the following clique potentials:
``` latex
\phi_{123}(x_1,x_2,x_3) &= x_1x_2x_3 \\
\phi_{35}(x_3,x_5) &= x_3^{-x_5} \\
\phi_{14}(x_1,x_4) &= e^{x_1 + x_4}
```

and $\phi_C(x_C) = 1$ for all other $C \in \mathcal{C}(G)$. With these
definitions, we have $p_V(x_V) = \frac{1}{Z} \prod_{c \in \mathcal{C}(G)} =
\phi_C(x_C)$.

Then $X_V$ respects the following graph:

    figure
      img(src="images/non_unique_graph_ex_1.svg")

* Now consider these clique potentials:
``` latex
\phi_{35}(x_3,x_5) &= x_3^{-x_5} \\
\phi_1(x_1) &= x_1e^{x_1} \\
\phi_2(x_2) &= x_2 \\
\phi_3(x_3) &= x_3 \\
\phi_4(x_4) &= e^{x_4}
```

and $\phi_C(x_C) = 1$ for all other $C \in \mathcal{C}(G)$.

Then $X_V$ respects the following graph:

    figure
      img(src="images/non_unique_graph_ex_2.svg")      
:::

The example above alludes to several important observations:

1. A collection of random variables may respect multiple graphs. In fact, if
$X_V$ respects the graph $G = (V,E)$ then $X_V$ also respects $G' = (V,E')$
where $E \subseteq E'$. In words, if $X_V$ respects $G$, then we can add more
edges to $G$ and $X_V$ will still respect this graph.  

2. A clique potential $\phi_C(x_C)$ is not necessarily a probability
distribution (it need not integrate to 1), but is still nonnegative over its
state space.

The first observation above suggests that if $X_V$ respects a graph $G$, it may
also respect a (smaller) graph with some edges removed. This implies the
existence of a graph with the fewest number of edges, i.e., if any edge is
removed, then $X_V$ will no longer respect the graph.

::: .definition
**Definition** (Minimal Graph)

Let $G$ be a graph respected by the collection $X_V$. Then we say that $G$ is
a minimal graph for $X_V$ if for any $E' \subset E$, $X_V$ does not respect the
graph $G' = (V,E')$.
:::

::: .exercise
**Exercise**

Consider the random variables $X_1, X_2, X_3, X_4, X_5, X_6$ with joint
probability distribution function

``` latex
p_V(x_V) &= \frac{1}{Z} x_1^{x_2}x_2^{x_3}x_3^{x_4}x_4^{x_1}x_5x_6.
```

Find the minimal graph respected by $X_V$.
:::

<!-- Break  -->

*Solution.* We seek the graph with the fewest number of edges that is still
respected by $X_V$. Note that terms in $p_V$ such as $x_1^{x_2}$
cannot be split into products of functions depending on only $x_1$ and $x_2$,
so $\\\{1,2\\\}$ must be a clique of any graph respected by $X_V$. The minimal
graph will therefore have cliques
$\\\{1,2\\\},\\\{2,3\\\},\\\{3,4\\\},\\\{1,4\\\}$. To account for the term
$x_5x_6$, we can either consider the clique $\\\{5,6\\\}$ with the clique
potential $\phi_{56}(x_5,x_6)$ which would add an edge to the graph, or simply
let $\phi_5(x_5) = x_5$ and $\phi_6(x_6) = x_6$ which would not add an extra
edge to the graph. Hence, the minimal graph for $X_V$ is given by:

    figure
      img(src="images/minimal_graph_ex_1.svg")

<!-- Break  -->

A minimal graph may not necessarily be unique; however, when $p_V(x_V)$
satisfies some conditions, the minimal graph is indeed unique.

::: .theorem
**Theorem**  (Hammersley-Clifford corollary)

Let $\Omega_v$ be the state space of random variable $X_v$ and $\Omega_V$ be
the set of all tuples $(x_v)_{v \in V}$ where $x_v \in \Omega_v$
for every $v \in V$. Then if $p_V(x_V) > 0$ for all $x_V \in \Omega_V$, the
collection $X_V$ has a unique minimal graph.

:::


---
> id: rules
## GRF Rules
$\_{ }$ <!-- Added for Atom text rendering -->
The point of representing a collection of random variables is to enclose the
dependence structure of the random variables, in particular the *conditional
dependence* structure of the random variable.

Recall the example in the previous section where we considered the joint
distribution function
$p_V(x_V) = \frac{1}{Z} x_1^{x_2}x_2^{x_3}x_3^{x_4}x_4^{x_1}x_5x_6$.
We saw that because the term $x_1^{x_2}$ could not be factored into the product
of two univariate functions of $x_1$ and $x_2$, there had to be an edge between
the nodes in the graph representing these two variables. This may suggest that
the variables $X_1$ and $X_2$ are not independent. However, this may not
necessarily be the case. An edge between two nodes does not imply the
connected nodes are dependent, nor does it imply that they are independent.
Similarly, if there does not exist an edge between two nodes, the random
variables they represent may either be dependent or independent.

<!-- Break  -->

::: .example
**Example**  

Here we show that an edge does not imply dependence.

:::
