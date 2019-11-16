
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

Given an undirected graph $G = (V,E)$, the random variables $X_V$ are said to
factor as a Gibbs random field (GRF) with respect to $G$ if the joint
distribution of $p_V$ can be written as

``` latex
p_V(x_V) &= \frac{1}{Z}\prod_{C \in \mathcal{C}(G)} \phi_C(x_C)
```

where $Z > 0$ is a normalization constant and the functions $\phi_C$, called
*clique potentials*, are nonnegative.

We also say that $\\\{X_v\\\}_{v \in V}$ *respects* $G$.
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

Suppose we flip two fair coins. If both coins are heads, we flip a third fair
coin; otherwise, we flip a third coin that is biased with a $\frac{3}{4}$
probability of being heads. Let $X_i = 1$ if the $i$th coin is heads and
0 otherwise. The joint distribution function is given by

``` latex
p(x_1,x_2,x_3) &= p(x_3|x_1,x_2)p(x_1,x_2) \\
&= \frac{1}{4}\mathbf{1}_{\{x_1 = 1\}}\left[
\mathbf{1}_{\{x_2 = 1\}}\left(
\mathbf{1}_{\{x_3 = 1\}}\cdot \frac{1}{2} + \mathbf{1}_{\{x_3 = 0\}} \cdot
\frac{1}{2}
\right) +
\mathbf{1}_{\{x_2 = 0\}}\left(
\mathbf{1}_{\{x_3 = 1\}}\cdot \frac{3}{4} + \mathbf{1}_{\{x_3 = 0\}} \cdot
\frac{1}{4}
\right)
\right] \\
& +
\frac{1}{4}\mathbf{1}_{\{x_1 = 0\}}\left[
\mathbf{1}_{\{x_2 = 1\}}\left(
\mathbf{1}_{\{x_3 = 1\}}\cdot \frac{3}{4} + \mathbf{1}_{\{x_3 = 0\}} \cdot
\frac{1}{4}
\right) +
\mathbf{1}_{\{x_2 = 0\}}\left(
\mathbf{1}_{\{x_3 = 1\}}\cdot \frac{3}{4} + \mathbf{1}_{\{x_3 = 0\}} \cdot
\frac{1}{4}
\right)
\right] \\
&= \frac{1}{4}
\left[\left(\left(\frac{1}{2}\right)^{x_3}\left(\frac{1}{2}\right)^{1-x_3}
\right)^{x_2} \left(\left(\frac{3}{4}\right)^{x_3}\left(\frac{1}{4}\right)^{1-
  x_3} \right)^{1-x_2} \right]^{x_1}
  \left[\left(\left(\frac{3}{4}\right)^{x_3}\left(\frac{1}{4}\right)^{1-x_3}
  \right)^{x_2} \left(\left(\frac{3}{4}\right)^{x_3}\left(\frac{1}{4}\right)^{1-
    x_3} \right)^{1-x_2} \right]^{1-x_1} \\
&= \frac{1}{4}\left[2^{x_2}3^{x_3(1-x_2)}\frac{1}{4}\right]^{x_1}
\left[3^{x_3}\frac{1}{4}\right]^{1-x_1} \\
&= \left(\frac{1}{4}\right)^{2} 2^{x_1x_2}3^{x_3x_1}3^{x_1x_2x_3}3^{-x_1^2x_3}
3^{x_3}.
```

Note that the term $3^{x_1x_2x_3}$ above cannot be factored into a product
of functions, so the minimal graph must have the clique $\\\{1,2,3\\\}$. Thus
the variables respect the following graph:

    figure
      img(src="images/edge_counter_1.svg")

The random variables $X_1$ and $X_2$ represent the outcomes of the first and
second coin flip, respectively. Both of these flips are independent, however.
Yet, there is still an edge between nodes 1 and 2.
:::

One can similarly construct an example of a GRF with no edge between two
dependent variables and is left as an exercise.

While the lack or presence of an edge between two nodes in a GRF does not
imply independence or dependence, we can say something about independence of
groups of random variables.

::: .theorem
**Theorem**  (Independence Rule)

Let $X_V$ be a GRF with respect to the graph $G = (V,E)$ and let $A$ be a
nonempty strict subset of $V$, that is, $A \subset E$. Then if $A$ is such
that there are no edges between the nodes in $A$ and the nodes in $A^c$, then
the variables $X_A$ and $X_{A^c}$ are independent.
:::

*Remark*: If there is no path connecting notes $u$ and $v$, then
$X_u$ and $X_v$ are independent.

::: .example
**Example**

Consider the random variables $X_1, X_2, X_3, X_4, X_5, X_6$ with joint
distribution function

``` latex
p_V(x_V) &= \phi_{12}(x_1,x_2)\phi_{345}(x_3,x_4,x_5)\phi_6(x_6).
```

Then $X_V$ is a GRF with respect to the following graph:

    figure
      img(src="images/indep_rule_ex_1.svg")

Let $A = \\\{1,2\\\}$ so that $A^c = V\setminus A = \\\{3,4,5,6\\\}$. If we
pick any vertex in $A$ and any vertex in $A^c$, there will not be an edge
between the two vertices. The independence rule for GRFs implies that the
random variables $X_A$ and $X_{A^c}$ are independent, that is
$(X_1,X_2)$ and $(X_3,X_4,X_5,X_6)$ are independent.

Now consider $A = \\\{4,5,6\\\}$ so that $A^c = \\\{1,2,3\\\}$. Since there
is an edge between nodes 4 and 3, we *cannot* conclude that $(X_4,X_5,X_6)$
and $(X_1,X_2,X_3)$ are independent.

Note that because there is no path connecting nodes 2 and 5, we can conclude
$X_2$ and $X_5$ are independent.
:::

::: .theorem
**Theorem**  (Conditioning Rule)

Let $X_V$ be a GRF with respect to the graph $G = (V,E)$ and $A \subset V$.
Given that $X_{A^c} = x_{A^c}$, the joint conditional distribution
of $X_A$ respects the graph $G' = (A,E')$ where $E'$ is obtained from $E$
by removing all edges incident to the vertices in $A^c$. More precisely,
$E' = \\\{(u,v) \in E : u,v \in A\\\}$.
:::

::: .example
**Example**  

Suppose $X_V$ is a GRF with respect to the following graph:

    figure
      img(src="images/cond_rule_ex_1.svg")

Conditioning on $X_3$, that is, given $X_3 = x_3$, we can apply the
conditioning rule to conclude $X_1,X_2,X_4,X_5$ respects the following graph:

    figure
      img(src="images/cond_rule_ex_2.svg")

Applying the independence rule we see that $(X_1,X_2)$ and $(X_4,X_5)$ are
*conditionally* independent given $X_3 = x_3$.
:::

::: .theorem
**Theorem**  (Marginalizing Rule)

Let $X_V$ be a GRF with respect to the graph $G = (V,E)$ and $A \subset V$.
Then the random variables $X_A$ respect the graph $G' = (A,E')$ where $E'$ is
obtained from $E$ by retaining the edges between nodes in $A$ and adding edges
between nodes in $A$ when a path can be drawn going through nodes in $A^c$.
:::

::: .example
**Example**  

Consider the GRF from the previous example:

    figure
      img(src="images/cond_rule_ex_1.svg")

Then for $A = \\\{1,2,4,5\\\}$, we can apply the marginalizing rule to obtain
the graph respected by $X_A$. First, we remove the vertices in $A^c$ and the
incident edges from the nodes in $A^c$. Doing this yields the graph below

    figure
      img(src="images/cond_rule_ex_2.svg")

We now need to determine if more edges need to be added. The possible additional
edges are $\\\{1,4\\\},\\\{1,5\\\},\\\{2,4\\\},\\\{2,5\\\}$.

Note that we can connect nodes 1 and 4 with the edges $\\\{1,3\\\},\\\{3,4\\\}$
which exist in $G$, so the edge $\\\{1,4\\\}$ will be added. Similarly,
nodes 2 and 5 can be connected by the path $\\\{2,3\\\},\\\{3,5\\\}$ which exist
in $G$ so the edge $\\\{2,5\\\}$ will be added.

We can connect nodes 1 and 5 via the path $\\\{1,3\\\},\\\{3,5\\\}$ which again
exist in $G$, so the edge $\\\{1,5\\\}$ will be added. Similarly, the edge
$\\\{2,4\\\}$ will be added.

Thus, $X_A$ respects the following graph:

    figure
      img(src="images/marginal_rule_ex_1.svg")
:::

*Remark*: The conditioning and marginalizing rules give a graph that is
guaranteed to be respected by the conditioned or marginalized variables,
respectively. However, even if the original graph $G$ is a minimal graph,
the obtained graph $G'$ is not necessarily a minimal graph for the conditioned
or marginalized variables.

::: .exercise
**Exercise**

Consider the set of random variables $X_V$ with joint probability
``` latex
p_V(x_V) &= \frac{1}{Z} x_1^{x_2}x_2^{x_3}x_3^{x_4}x_4^{x_1}x_5x_6.
```

Determine if $X_1$ and $X_3$ are independent given
$X_2 = x_2, X_4 = x_4, X_5 = x_5, X_6 = x_6$.
:::

<!-- Break -->

*Solution.* As shown in the previous section, the minimal graph respected by
$X_V$ is

    figure
      img(src="images/minimal_graph_ex_1.svg")

The conditioning rule yields the following graph respected by $X_1$ and $X_3$:

    figure
      img(src="images/indep_exercise_1.svg")

Since there is no path from node 1 to node 3 in the graph above, we conclude
that $X_1$ and $X_3$ are conditionally independent given $X_2, X_4, X_5, X_6$.

::: .exercise
**Exercise**  

Suppose the graph below is the minimal graph for $X_V$.

    figure
      img(src="images/indep_exercise_2.svg")

Determine if $X_5$  and $X_6$ are guaranteed to be independent given
$X_4 = x_4$.
:::

<!-- Break  -->

*Solution*: Conditioning on $X_4$ yields the following graph based on the
conditioning rule:

    figure
      img(src="images/indep_exercise_3.svg")

Since there is a path from nodes 5 to 6, we cannot guarantee $X_5$ and $X_6$
are conditionally independent given $X_4$.

---
> id: grfcomputing
## Computing with GRFs

TODO: Computation of normalization constants, and most likely configurations.

---
> id: mrf
## Markov Random Fields

In this section we will discuss Markov Random Fields (MRFs), another graphical
model similar to GRFs.

To define the notion of a MRF, we first need to define the *neighbors* of a
vertex in an undirected graph.

::: .definition
**Definition** (Vertex Neighbors)

Let $G = (V,E)$ be an undirected graph and $v \in V$. Then the set of neighbors
of $v$, denoted $N_v$, is the set of vertices that have an edge to $v$.
Mathematically,

``` latex
N_v &= \{u \in V : \{u,v\} \in E\}.
```
:::

::: .definition
**Definition** (Markov Random Field)

Given an undirected graph $G = (V,E)$, the set of variables $X_V$ is said to
be a Markov random field with respect to $G$ if for every $v \in V$, the
conditional distribution of $X_v$ given all other variables is equivalent to
the conditional distribution of $X_v$ given its neighbors. Mathematically,
$X_V$ is a Markov random field if for every $v \in V$ we have

``` latex
p_{v|V\setminus \{v\}}(x_v|x_{V \setminus \{v\}}) =
p_{v|N_v}(x_v|x_{N_v}).
```
:::

There is an intimate relationship between GRFs and MRFs, where sometimes a
MRF is also a GRF and vice versa as outlined in the theorems below.

::: .theorem
**Theorem** (Hammersley-Clifford: GRF to MRF)

Let $X_V$ be a Gibbs random field with respect to the graph $G$, then $X_V$ is
also a Markov random field with respect to $G$.
:::

*Remark*: The theorem above implies Gibbs random fields are a special case of
Markov random fields.

::: .theorem
**Theorem** (Hammersley-Clifford: MRF to GRF)

Let $X_V$ be a Markov random field with respect to the graph $G$. Moreover,
suppose that for every combination $x_V = \\\{x_v\\\}_{v \in V}$ where
$x_v \in \Omega_v$ for all $v \in V$, we have $p_V(x_v) > 0$. Then $X_V$
is also a GRF with respect to $G$.  
:::

*Remark*: The theorem above says that if every possible configuration of the
random variables can occur, then the MRF is also a GRF.

---
> id: bayes
## Bayes Nets

In this section we will consider another graphical model called
*Bayesian Networks*, or Bayes nets. As the name suggests, the model will
embed the conditional structure of a collection of random variables.
In particular, recall that for GRFs and MRFs had distribution functions
that factored as

``` latex
p_V(x_V) &= \prod_{c \in \mathcal{C}(G)} \phi_C(x_C)
```

where the functions $\phi_C(x_C)$ were not necessarily conditional
distributions. In Bayes nets, however, the $\phi_C(X_C)$ functions will be
conditional distribution functions.

Before presenting Bayes nets, we first need to introduce additional graph
concepts as well as some terminology.

<!-- Break -->

::: .definition
**Definition** (Directed Graph)

A directed graph $G = (V,E)$ consists of vertices $V$ and *directed* edges
$E$. A directed edge is an ordered pair $(u,v)$; diagrammatically, this can
be represented as an arrow from vertex $u$ to $v$.
:::


::: .example
**Example**

Below is an example of a directed graph:

    figure
      img(src="images/directed_graph_ex_1.svg")
:::

The purpose of using a directed graph instead of an undirected graph is to
encode conditional dependencies. In particular, the directed edge $(u,v)$
where $u,v \in V$, will tell us that to sample from random variable $X_v$,
we first need to sample from $X_u$. Note that if this was instead an undirected
graph, it would not be clear which random variable to sample from first.
To this end, if there is a *loop* in the graph, that is, a sequence of edges
that start at vertex $u$ and returns to vertex $u$, then it as again unclear
which random variables need to be sampled first. To this end, we define the
notion of *acyclic* graphs below.

::: .definition
**Definition** (Acyclic Graph)

Let $G = (V,E)$ be a directed graph. We say that $G$ is *acyclic* if for any
$u \in V$, there are is no sequence of edges in $E$ that start at $u$ and
end back at $u$, i.e., there is no path from $u$ back to $u$.
:::

*Remark*: A directed acyclic graph is sometimes written as the acronym "DAG."

::: .example
**Example**

Below is an example of a DAG. Note that for any vertex, we
cannot follow a sequence of edges to return back to the starting vertex.

    figure
      img(src="images/directed_acyclic_graph_ex_1.svg")
:::

::: .definition
**Definition** (Parent-child nodes)

Let $G = (V,E)$ be a DAG and $v \in V$. The *parents* of
$v$, denoted $\psi_v$, is a subset of $V$ such that for every $u \in \psi(v)$,
there exists an edge from $u$ to $v$. Mathematically,

``` latex
\psi_v &= \{u \in V : (u,v) \in E\}.
```

The *children* of $v$, denoted $\chi_v$, is a subset of $V$ such that for every
$u \in \chi_v$, there exists an edge from $v$ to $u$. Mathematically,

``` latex
\chi_v &= \{u \in V : (v,u) \in E\}.
```

The *ancestors* of $v$, denoted $\alpha_v$, is a subset of $V$ such that for
every $u \in \alpha_v$, there exsits a path from $u$ to $v$.
:::

::: .example
**Example**  

Consider the DAG from the previous example. The set of parents of node 6 is
given by $\psi_6 = \\\{1,4,5,7,8\\\}$.

Note that node 6 has no children, since there are no edges emanating from it,
so $\chi_6 = \varnothing$.

Nodes 2 and 3 are ancestors of node 6 since there is a path from these nodes
to node 6.
:::

::: .definition
**Definition** (Graph roots and leaves)

Let $G = (V,E)$ be a DAG. The *roots* of $G$ is a subset of $V$, denoted
$\mathcal{R}$ such that for every $v \in \mathcal{R}$, we have
$\psi_v = \varnothing$; in words, $\mathcal{R}$ is the set of all vertices that
do not have parents.

The *leaves* of a graph, denoted $\mathcal{L}$, is a subset of $V$ such that
for every $v \in \mathcal{L}$, we have $\chi_v = \varnothing$; in words,
$\mathcal{L}$ is the set of all vertices that do not have children.
:::

With the previous definitions, we are now ready to formally define Bayes nets.

::: .definition
**Definition** (Bayes net)

Let $X_V$ be a set of random variables. We say that $X_V$ is a Bayes net with
respect to the DAG $G = (V,E)$ if their joint distribution factors as

``` latex
p_V(x_V) &= \prod_{v \in V} p_{v | \psi_v}(x_v|x_{\psi_v}).
```

In words, $X_V$ is a Bayes net if its joint distribution factors into a
product of conditional distributions where each variable is conditioned on
its parents.

If $v \in \mathcal{R}$, then $p_v(x_v|x_{\psi_v})$ represents the marginal
distribution of $v$.
:::

::: .example
**Example**

Suppose we flip two fair coins and let $X_1 = 1$ if the first coin is heads and
0 otherwise, and define $X_2$ in the same way for the second coin. Suppose that
if both coins are heads we flip a fair 6-sided die and let $X_3$ be the
outcome of that die; otherwise we flip a biased 6-sided die and let $X_4$ be
this outcome. Finally, we will define $X_5$ to be 1 if either $X_4$ or $X_3$
is even and 0 otherwise. We can represent this as a Bayes net as follows:

    figure
      img(src="images/bn_ex_1.svg")
:::

Note that for any collection of variables $X_v = \\\{X_1,X_2,\ldots,X_n\\\}$,
the chain rule of probability allows us to write

``` latex
p_V(x_V) &= p(x_1)p(x_2|x_1)p(x_3|x_2,x_1)\cdots p(x_n|x_{n-1},\ldots,x_2,x_1)
```

which implies that any collection of random variables can be expressed as a
Bayes net, though this may not necessarily be useful in practice. 

---
> id: bnrules
## Bayes Nets Rules

Similar to GRFs, we can define independence, conditional, and marginalization
rules for Bayes nets.

::: .theorem
**Theorem** (Independence Rule)

Let $X_V$ be a Bayes net with respect to the DAG $G = (V,E)$. Let
$a,b \in V$ be such that $\alpha_a \cap \alpha_b = \varnothing$, that is,
$a$ and $b$ have no ancestors in common. Then $X_a$ and $X_b$ are independent.
:::

*Remark*: As a corollary to the independence theorem for Bayes nets, the roots
of Bayes nets are all independent.

A proof for the independence rule for roots is given below followed by a sketch
of the proof for all other nodes with disjoint parent sets.

*Proof*: Let $X_V$ be a Bayes net with respect to the DAG $G = (V,E)$. Then
the joint distribution factors as

``` latex
p_V(x_V) &= \prod_{v \in V} p_{v|\psi_v}(x_v|\psi_v).
```

Now let $a,b \in \mathcal{R}$.We wish to show that
$X_a$ and $X_b$ are independent. To show this we will show that the marginal
distribution of $X_a$ and $X_b$ factors into a product of marginals. Note that the joint distribution of $X_V$ can be written as

``` latex
p_V(x_V) &= p_{a|\psi_a}(x_a|x_{\psi_a})p_{b|\psi_b}(x_b|x_{\psi_b})
\prod_{v \in V\setminus \{a,b\}} p_{v|\psi_v}(x_v|x_{\psi_v}).
```

Since $a$ and $b$ are root nodes, we know $\psi_a = \psi_b = \varnothing$
so that the joint distribution becomes

``` latex
p_V(x_V) &= p_a(x_a)p_b(x_b)
\prod_{v \in V\setminus \{a,b\}} p_{v|\psi_v}(x_v|x_{\psi_v}).
```

To obtain the marginal of $X_a$ and $X_b$, we integrate
(or sum in the discrete case) over all other variables:

``` latex
p_{a,b}(x_a,x_b) &= \int_{x_{V\setminus \{a,b\}}}
p_a(x_a)p_b(x_b)
\prod_{v \in V\setminus \{a,b\}} p_{v|\psi_v}(x_v|x_{\psi_v})
dx_{V \setminus \{a,b\}} \\
&= p_a(x_a)p_b(x_b)
\underbrace{\int_{x_{V\setminus \{a,b\}}}\prod_{v \in V\setminus \{a,b\}}
p_{v|\psi_v}(x_v|x_{\psi_v})
dx_{V \setminus \{a,b\}}}_{1} \\
&= p_a(x_a)p_b(x_b).
```

Since the joint distribution of $X_a$ and $X_b$ factors into a product of
marginals, we conclude these variables are independent.


Now, suppose $a,b \notin \mathcal{R}$ but we have
$\alpha_a \cap \alpha_b = \varnothing$. Then we can express the joint
distribution function as

``` latex
p_V(x_V) &= \left[\prod_{v \in \alpha_a}p_{v|\psi_v}(x_v|x_{\psi_v})\right]
\left[\prod_{v \in \alpha_b}p_{v|\psi_v}(x_v|x_{\psi_v})\right]
\left[\prod_{v \in V \setminus (\alpha_a \cup \alpha_b)}
p_{v|\psi_v}(x_v|x_{\psi_v})\right] \\
&= p_{a|\psi_a}(x_a|x_{\psi_a})p_{b|\psi_b}(x_b|x_{\psi_b})
\left[\prod_{v \in \alpha_a}p_{v|\psi_v}(x_v|x_{\psi_v})\right]
\left[\prod_{v \in \alpha_b}p_{v|\psi_v}(x_v|x_{\psi_v})\right]
\left[\prod_{v \in V \setminus (\alpha_a \cup \alpha_b \cup \{a,b\})}
p_{v|\psi_v}(x_v|x_{\psi_v})\right].
```

The idea now is to integrate with respect to all other variables while
rearranging terms so that
$p_{a|\psi_a}(x_a|x_{\psi_a})p_{b|\psi_b}(x_b|x_{\psi_b})$ is factored
out. For the sake of brevity, this will be omitted.

::: .example
**Example**

Suppose $X_V$ is a Bayes net with respect to the graph below

    figure
      img(src="images/bn_indep_ex_1.svg")


Since nodes 1 and 5 are root nodes, they are independent.

Note that $\psi_2 = \\\{1,5\\\}$ and $\psi_4 = \\\{1\\\}$. Since
nodes 2 and 4 have ancestors in common, particularly node 1, we cannot
say they are independent or dependent.

Since nodes 1 and  2 do not have ancestors in common with nodes 5 and 6
we can say the vector $(X_1, X_2)$ is independent of vector $(X_5,X_6)$.
:::

::: .theorem
**Theorem**  (Conditioning Rule)

Let $X_V$ be a Bayes net with respect to the DAG $G = (V,E)$ and let
$A \subset \mathcal{R}$. Then the conditional distribution of the set of random
variables $X_{V\setminus A}$ given $X_A$ is a Bayes net with respect to the
graph $G' = (V\setminus A,E')$ where $E'$ is obtained from $E$ by removing all
edges emanating from nodes in $A$. Mathematically,

``` latex
E' = \{(u,v) \in E: u,v \in V \setminus A\}.
```
:::

*Proof*: The proof of this theorem is fairly straight-forward given the
independence theorem. Let $X_V$ be a Bayes net with respect to the DAG
$G = (V,E)$ and $A \subset \mathcal{R}$. Then we can express the joint
distribution function as

``` latex
p_V(x_V) &= \left[\prod_{v \in A} p_{v|\psi_v}(x_v|\psi_v)\right]
\left[\prod_{v \in V \setminus A} p_{v|\psi_v}(x_v|\psi_v)\right] \\
&= \left[\prod_{v \in A} p_{v}(x_v)\right]
\left[\prod_{v \in V \setminus A} p_{v|\psi_v}(x_v|\psi_v)\right]
```

where the second equality follows from the fact that $A$ consists of root nodes.
From the independence rule, we know that root nodes are independent, so
the joint distribution $p_A(x_A)$ is given by the product of marginals of
the variables in $A$, so we have:

``` latex
p_V(x_V) &=
&= p_A(x_A)
\prod_{v \in V \setminus A} p_{v|\psi_v}(x_v|\psi_v).
```

Then the conditional distribution of $X_{V\setminus A}$ given $X_A$
is

``` latex
p_{V\setminus A | A}(x_{V \setminus A} | x_A) &= \frac{p_V(x_V)}{p_A(x_A)} \\
&=
\frac{p_A(x_A)\prod_{v \in V \setminus A} p_{v|\psi_v}(x_v|\psi_v)}{p_A(x_A)} \\
&= \prod_{v \in V \setminus A} p_{v|\psi_v}(x_v|\psi_v).
```

*Remark*: The conditioning rule only holds when we condition on root nodes.

::: .example
**Example**

Consider the Bayes net from the previous example. Then conditioning on $X_1$,
the conditoning rule implies $X_2,X_3,\ldots, X_6$ is a Bayes net with
respect to the graph below

    figure
      img(src="images/bn_cond_ex_1.svg")

Note that because nodes 2 and 3 no longer have a common ancestor, $X_2$ and
$X_3$ are *conditionally* independent given $X_1$.
:::

::: .theorem
**Theorem** (Marginalizing Rule)

Let $X_V$ be a Bayes net with respect to the DAG $G = (V,E)$. Let
$A \subset \mathcal{L}$. Then the marginal of $X_{V\setminus A}$ is a Bayes
net with respect to the DAG $G' = (V\setminus A, E')$ where $E'$ is obtained
from $E$ by removing all edges coming into the nodes in $A$. Mathematically,

``` latex
E' = \{(u,v) \in E : u,v \in V \setminus A\}.
```
:::

*Proof*: Let $X_V$ be a Bayes net with respect to the DAG $G = (V,E)$ and
$A \subset \mathcal{L}$. Note that we can write the joint distribution as

``` latex
p_V(x_V) &= \left[\prod_{v \in A} p_{v|\psi_v}(x_v|x_{\psi_v})\right]
\left[\prod_{v \in V\setminus A} p_{v|\psi_v}(x_v|x_{\psi_v})\right]
```

To obtain the marginal of $X_{V \setminus A}$, we integrate over the variables
in $A$:

``` latex
p_{V\setminus A}(x_{V \setminus A}) &=
\int_{x_A} \left[\prod_{v \in A} p_{v|\psi_v}(x_v|x_{\psi_v})\right]
\left[\prod_{v \in V\setminus A} p_{v|\psi_v}(x_v|x_{\psi_v})\right] dx_A.
```

Note that if $v \in V \setminus A$, then $\psi_v \cap A = \varnothing$,
because $\psi_v$ consists of the parents of $v$, so these nodes inherently have
children and since $A \subset \mathcal{L}$, the nodes in $A$ do not have
children. Thus we have

``` latex
p_{V\setminus A}(x_{V \setminus A}) &=
\prod_{v \in V\setminus A} p_{v|\psi_v}(x_v|x_{\psi_v})
\underbrace{\int_{x_A} \prod_{v \in A} p_{v|\psi_v}(x_v|x_{\psi_v})dx_A}_1. \\
&= \prod_{v \in V\setminus A} p_{v|\psi_v}(x_v|x_{\psi_v}).
```

*Remark*: The marginalizing rule applies only when the "marginalization" occurs
over leaves, i.e., when we integrate over leaves.


::: .example
**Example**

Suppose $X_V$ is a Bayes net with respect to the graph below

    figure
      img(src="images/bn_indep_ex_1.svg")

Then the marginal of $X_1,X_2,X_4,X_5,X_6$ is a Bayes net with respect to

    figure
      img(src="images/bn_marginal_ex_1.svg")
:::

---
> id: bncomputing
## Computing with Bayes Nets

The Bayes net rules outlined in the previous section reveal that Bayes nets
encode conditional structures that make it easy to sample from joint
distributions. For example, suppose $X_V$ is a Bayes net with respect to the
graph below:

    figure
      img(src="images/bn_indep_ex_1.svg")

Then we can obtain a sample $(x_1,x_2,\ldots, x_6)$ from $p_V(X_V)$ by first
sampling  $X_1$ independently of all other variables (since this is a root), we
can then sample $X_5$ independently of all other variables. Then we can sample
$X_2$ conditioned on $X_1$ and $X_5$. Afterwards we can sample $X_4$
conditioned on $X_1,X_2$ and $X_5$. Finally, we can sample $X_3$ conditioned
on $X_1$ and $X_4$.

::: .example
**Example**

Let $X = (x_1, x_2, \ldots, x_n)$ and $Y = (y_1, y_2, \ldots, y_n)$ and consider
the Hidden Markov Model with joint distribution

``` latex
p(x_1,x_2,\ldots,x_n,y_1,y_2,\ldots,y_n) &=
p(x_1)\prod_{k=1}^{n-1} p(x_{k+1},x_k) \prod_{j=1}^n f(y_j|x_j).
```

Suppose $X_i \in \\\{-1,0,1\\\}$ and:

``` latex
p(x_1) &= \frac{1}{3} \textrm{ for } x_1 \in \{-1,0,1\} \\
f(y_j|x_j) &\sim N(x_j,1) \textrm{ for } j \in \{1,2,\ldots,n\} \\
\mathbb{P}(X_{k+1} &= x_{k+1}|X_k = x_k) = p(x_{k+1},x_k)
```

where $p(x_{k+1},x_k)$ is defined by:

    figure
      img(src="images/bn_sampling_matrix_1.svg")

We can represent $X_V$ as a Bayes net with respect to the graph below
(when $n = 4$.)

    figure
      img(src="images/bn_hmm_ex.svg")

The Julia code below allows us to obtain one sample (note that one sample is
  a vector of length $2n$: $(x_1,x_2,\ldots,x_n,y_1,y_2,\ldots,y_n)$:


``` julia
using Distributions
using Plots

# Sample x_{k+1} given x_k
# Parameters:
# - x_k: The kth X sample. One of -1, 0, or 1
# Outputs:
# - x_{k+1}: The (k+1)th X sample
function sample_x(xk)
    # Matrix defining p(x_{k+1}|x_k)
    probability_matrix = [0.9 0.05 0.05;
    0.05 0.9 0.05;
    0.05 0.05 0.9]

    # Extract row from probability matrix
    distribution = xk + 2

    # Define cumulative sum of distribution for sampling
    cumulative_distribution =
    cumsum(probability_matrix[Int(distribution),:])

    # Obtain x_k
    unif_sample = rand()
    xk_values = [-1 0 1]

    for i=1:3
        if unif_sample < cumulative_distribution[i]
            return xk_values[i]
        end
    end
end

# Obtains n samples of X based on HMM
# Inputs
# - n: An integer representing the number of samples
#      to return
# Outputs
# A vector of length n where the kth element is the
# kth sample of X
function get_x_samples(n)
    # Store x samples
    samples = zeros(n)

    # Randomly set x1
    samples[1] = rand(-1:1)

    # Get samples x_2 through x_n
    for i=2:n
        samples[i] = sample_x(samples[i-1])
    end

    return samples
end

# Obtains n samples of Y based on HMM
# Inputs
# - x_samples: A vector of length n representing
#              the samples of X
# Outputs
# A vector of length n where the kth element is the
# kth sample of Y
function get_y_samples(x_samples)
    # Store y samples
    n = length(x_samples)
    y_samples = zeros(n)

    for i=1:n
        normal_distribution = Normal(x_samples[i],1)
        y_samples[i] = rand(normal_distribution)
    end

    return y_samples
end

# Obtian and plot samples
n = 1000
x_samples = get_x_samples(n)
y_samples = get_y_samples(x_samples)
```

Plotting the $x$ and $y$ samples we obtain something like:

    figure
      img(src="images/bn_sampling_ex_1.svg")
:::
