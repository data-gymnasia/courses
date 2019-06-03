# Sets and functions

> id: intro
## Introduction 

Sets and functions are foundational to the study of mathematics and
ubiquitous in quantitative disciplines, including statistics and data
science. In this course we review the basics of sets, lists, and
functions from a data perspective. These ideas will be useful for developing rigorous mathematical language for discussing randomness, and they will also be helpful precursors to several important data structures we'll develop in the programming course.

_{button.next-step} Continue_

---

### Sets

A simple grocery list is a real-life example of a **set**: the
main utility afforded by the grocery list is to answer the query
"here's an item in the store; is it on list?" Note that for purposes
of answering this question, the order of the listed items on the grocery
list doesn't matter, and repeating an entry is equivalent to having a
single instance of that entry. This leads us to the definition of the term *set*. 

_{button.next-step} Continue_

---

::: .definition
**Definition**  
A **set** is an unordered collection of objects. The objects in
a set are called *elements*.
:::

_{button.next-step} Continue_

---

The term *object* in this definition is deliberately vague.
Sets may contain any kind of data: numbers, words, symbols, circles,
squares, other sets, and many others.

_{button.next-step} Continue_

---

If a set $S$ contains a finite number of elements
$s_1, s_2, \ldots, s_n$, we can write 

    p
      | \begin{equation*}
      | S = \{s_1, s_2, \ldots, s_n\}.
      | \end{equation*}
      
For example `\{2,3,5,7\}` is the set of [[single-digit primes|single-digit odd numbers|digits you can write without making a loop]]

---
      
The fundamental operation provided by a set is [[**checking membership** | **counting** | **arithmetic** ]]:
we write $s \in S$ to indicate that $s$ is an element of the set
$S$. If $s$ is not an element of $S$, we write $s \notin S$. 

---

If two sets have the same elements, then they are considered [[equal|parallel|reflexive]]. For example, 

    p
      | \begin{equation*}
      |  \{1,1,2\} = \{1,2\}
      | \end{equation*}

For this reason, we typically list the elements of a set without duplication.

_{button.next-step} Continue_

---

The set containing no elements is called the [[**empty set**|**full set**|**small set**]] and is denoted $\emptyset$ or {}. 
  
---

Some sets with standard and specially typeset names include

*  $\mathbb{R}$, the set of real numbers,
*  $\mathbb{Q}$, the set of rational numbers,
*  $\mathbb{Z}$, the set of integers, and
*  $\mathbb{N}$, the set of natural numbers.

---

> id: subsets
## Subsets

The idea of set equality can be broken down into two separate relations: two sets are equal if the first set contains all the elements of [[the second set | itself]], and [[vice versa | the sets' elements are listed in the same order]]. 

---

::: .definition
**Definition** (Subset)  
Suppose $S$ and $T$ are sets. If every element of $T$ is also an
element of $S$, then we say $T$ is a subset of $S$, denoted
$T \subset S$.
:::

_{button.next-step} Continue_

---

If we visualize a set as a blob and its elements as dots in the blob, then the subset relationship looks like this: 

    center: img(src="images/subset.svg")
    
<p></p>    
    
Here $S$ has [[7]] elements, and $T$ has [[4]] elements.

_{button.next-step} Continue_

---

Two sets are equal if [[each is a subset of the other|there is a set that each is a subset of]].

---

The relationship between "`sub`" and "`=`" has a real-number analogue: we can say that `x = y` if and only if [[`x ≤ y` and `x ≤ y`|`y ≤ x`|`x ≤ y`]].

---

::: .exercise
**Exercise**  
Think of four pairs of real-world sets which satisfy a subset relationship. For example, the set of cars is a subset of the set of vehicles.
:::

_{button.next-step} Continue_

---

::: .exercise
**Exercise** (multiple choice)  
Suppose that $E$ is the set of even positive integers and that $F$
is the set of positive integers which are one more than an odd
integer. Then [[all of the above | `E sub F`| `F sub E` | `E = F`]]
:::

_{button.next-step} Continue_

---

*Solution*. We have $E\subset F$, since the statement "$n$ is a positive even
integer" [[implies|is implied by]] the statement "$n$ is one more than an odd
number". In other words, $n \in E$ implies that $n \in F$.

Likewise, we have $F \subset E$, because "$n$ is one more than an
positive odd integer" [[implies|is implied by]] "$n$ is a positive even integer".

Finally, we have $E = F$, since [[`F sub E` and `E sub F` | `E sub F`| `F sub E`]]. 

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Drag the items below to put the sets in order so that each set is a subset of the one below it. 
:::

    x-sortable
      .item.md(data-index="3") $\mathbb{R}$
      .item.md(data-index="0") $\mathbb{N}$
      .item.md(data-index="2") $\mathbb{Q}$
      .item.md(data-index="1") $\mathbb{Z}$

---

> id: set-builder
## Set Builder Notation 

It's often useful to define a set in terms of the properties its elements are supposed to have. 

::: .definition
**Definition**  
If $S$ is a set and $P$ is a property which each element of $S$
either satisfies or does not satisfy, then 

    p 
      | \begin{equation*}
      | \{s \in S : s \textrm{ satisfies } P\}
      | \end{equation*}

denotes the set of all elements in $S$ which have the property
$P$. This is called *set builder notation*. The colon is read as "such that".
:::

_{button.next-step} Continue_

---

::: .example
**Example**  
Suppose the set $S$ denotes the set of all real numbers between 0
and 1. Then $S$ can be expressed as

    p
      | \begin{equation*}
      |     S = \{s \in \mathbb{R} : 0 < s < 1\}.
      | \end{equation*}
      
:::

_{button.next-step} Continue_

---

Counting the number of elements in a set is also an important operation:

::: .definition
**Definition** (Cardinality)  
Given a set $S$, the cardinality of $S$, denoted $|S|$, denotes the number of elements in $S$.
:::

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Let `S = \{4,3,4,1\}`. Then $|S|$ = [[3|4|2|`oo`]]
:::

---

*Solution*. There are three values $s$ with the property that $s \in S$. Therefore, $|S| = 3$.

_{button.next-step} Continue_

---

Not every set has an integer number of elements. Some sets have more elements than any set of the form `\{1,2,...,n\}`. These sets are said to be [[infinite|unbounded]]. 

---

::: .definition
**Definition** (Countably infinite)  
A set is *countably infinite* if its elements can be arranged
in a sequence.
:::

::: .example
**Example**  
The set `\{1,2,3,4,...\}` is [[countably infinite|finite|not countably infinite]]. The set of integers is [[countably infinite|finite|not countably infinite]], since they can be arranged sequentially: `\{0, 1, -1, 2, -2, 3, -3, ...\}`

The set of rational numbers between 0 and 1 is countably infinite,
since they all appear in the sequence

    p
      | \begin{equation*}
      | \frac{1}{2}, \frac{1}{3}, \frac{2}{3}, \frac{1}{4}, \frac{3}{4},
      | \frac{1}{5}, \frac{2}{5}, \frac{3}{5}, \ldots
      | \end{equation*} 

The set of all real numbers between 0 and 1 is [[not countably
infinite|countably infinite|finite]], because any infinite sequence of real numbers will necessarily fail to include all real numbers. This may be demonstrated using an idea called *Cantor's diagonal argument*, which you can read more about [here](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument) if you're interested.
:::

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Show that the set of all ordered pairs of positive integers is countably infinite.   
:::

_{button.next-step} Continue_

---

*Solution*. We visualize the pairs as a grid of points in the first quadrant. We arrange the points in a sequence by beginning in the lower left corner at $(1,1)$ and snake through the grid: we go right to $(2,1)$, then diagonally northwest to $(1,2)$, then up to $(1,3)$, then diagonally southeast to $(2,2)$ and through to $(3,2)$, and so on. 

---

> id: set-operations
## Set Operations

### Complement

Given a set $S$ describing a grocery list and a subset $A \subset S$ describing the set of items we've already purchased, the set we might be most interested in constructing from $S$ and $A$ is the set of items which are in $S$ but not in $A$. This is called the **complement** of $A$ with respect to $S$. 

The complement of the set of groceries in the cart with respect to the set of groceries on the list is a meaningful set because those are the items [[we still need to pick up|most important to our recipe]]. 

---

::: .definition
**Definition** (Complement)  
If $A$ and $S$ are sets and $A \subset S$, then the complement of $A$ with respect to $S$, denoted $S \setminus A$ or $A^{\mathsf{c}}$, is the set of all elements in $S$ that are not in $A$. That is, 

    p
      | \begin{equation*}
      |   A^{\mathsf{c}} = \{s \in S : s \notin A\}.
      | \end{equation*}

:::

_{button.next-step} Continue_

---

With the blob-and-point visualization:

    center: img(src="images/complement.svg")

_{button.next-step} Continue_

---

Since $S$ is not part of the notation $A^\mathsf{c}$, we will usually only use that notation when the intended containing set $S$ is clear from context.

_{button.next-step} Continue_

---

The notation $S \setminus A$ may be used regardless of whether $A$ is a subset of $S$. We use a different term to refer to this more general operation: the **set difference** $S \setminus A$ is defined to be the set of elements which are in $S$ which are not in $A$. 

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Suppose `S = \{1,2,3,4,5\}`and `A = \{4,2\}`. Find the complement   $A^{\mathsf{c}}$ of $A$ with respect to $S$. It has [[3]] elements.
:::

_{button.next-step} Continue_

---

*Solution*. The complement is $A^{\mathsf{c}}$ = `\{1,3,5\}`, since 1, 3, and 5 are the elements of $S$ which are not in $A$. 

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Suppose $A\subset S$, $|S| = 55$, and $|A| = 13$. Then $|S \setminus A|$ = [[42]]. 

Is the assumption that $A \subset S$ necessary for the problem to be well-specified?
:::

_{button.next-step} Continue_

---

*Solution*. Since $S$ has 55 elements and $A$ has 13, then there are   $\boxed{42}$ elements in $S$ which are not in $A$. 

The assumption is necessary, since if some of the elements of $A$ were not in $S$, $|S \setminus A|$ would be larger.

_{button.next-step} Continue_

---

### Union

If two members of your household supplied you with grocery lists as you were about to go to the store, then the first thing you might want to do is produce a combined grocery list. This set operation is called taking the *union*.

::: .definition
**Definition** (Union)  
The **union** of two sets $S$ and $T$, denoted $S \cup T$, is the set containing all the elements of $S$ and all the elements of $T$ and no other elements. In other words, $s \in S \cup T$ if and only if either $s\in S$ or $s \in T$. 
:::

    center: img(src="images/union.svg")

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Let `S = \{1,2,4,5\}` and `T = \{1,5,6,7,8\}`. Find $S \cup T$. It has [[7]] elements. 
:::

_{button.next-step} Continue_

---

*Solution*. Listing all the elements of $S$ and all elements of $T$ and eliminating duplicates, we get 

    p
      | \begin{equation*}
      |   S \cup T = \{1,2,4,5,6,7,8\}.
      | \end{equation*}
      
_{button.next-step} Continue_

---
      
### Intersection

When we're choosing which loaf of bread to purchase, we're interested in finding one which is in *both* of two sets: 
* the set of loaves whose price falls in our range of acceptable prices, and 
* the set of loaves whose taste we find satisfactory 

The set of viable loaves is the *intersection* of these two sets.

::: .definition
**Definition** (Intersection)  
The **intersection** of two sets $S$ and $T$, denoted $S \cap T$, is the set consisting of elements that are in both $S$ and $T$. In other words, $s \in S \cap T$ if and only if $s\in S$ and $s \in T$. 
:::

    center: img(src="images/intersection.svg")

_{button.next-step} Continue_

---

::: .exercise
**Exercise**
Let `S = \{1,2,3,4,5\}` and `T = \{1,5,6,7,8\}`. Then $S \cap T$ has [[2]] elements.
:::

---

The union and intersection operations may be applied to any number of sets. Suppose $S_1, S_2, \ldots, S_n$ are sets---the union of these sets can be expressed as $S_1 \cup S_2 \cup \cdots \cup S_n$. More compactly, 

    p
      | \begin{equation*}
      |   \bigcup_{i=1}^n S_i = S_1 \cup S_2 \cdots \cup S_n = \{s : s
      |   \in S_i\text{ for some }1 \leq i \leq n\}.
      | \end{equation*}

Similarly, we can take the intersection of an arbitrary number of sets:

    p
      | \begin{equation*}
      |   \bigcap_{i=1}^n S_i = S_1 \cap S_2 \cap \cdots  \cap S_n = \{s : s
      | \in S_i\text{ for all }1 \leq i \leq n\}.
      | \end{equation*}

_{button.next-step} Continue_

---

Often we will want to specify whether two sets have any elements in common.

::: .definition
**Definition** (Disjoint)  
Two sets $S$ and $T$ are **disjoint** if they do not have any elements in common. 
:::

_{button.next-step} Continue_

---

In other words, $S$ and $T$ are disjoint if $S \cap T = \emptyset$.

_{button.next-step} Continue_

---

This definition extends to an arbitrary number of sets. We say that the sets $S_1, S_2, \ldots, S_n$ are **pairwise disjoint** if any pair is disjoint (in other words, if $S_i \cap S_j = \emptyset$ whenever $i \neq j$). 

::: .exercise
**Exercise**  
Find three sets $A$, $B$, and $C$ which have $A \cap B \cap C = \emptyset$, but for which all of the intersections $A \cap B$, $B\cap C$, and $A \cap C$ are nonempty.   
:::

_{button.next-step} Continue_

---

*Solution*. We can take $A = \\{1,2\\}$, $B = \\{1,3\\}$, and $C = \\{2,3\\}$. These sets are pairwise *non*-disjoint, but there are no elements common to all three sets. 

_{button.next-step} Continue_

---

### Partitions

Suppose you're part of a group of $n$ shoppers working together to purchase the items on a single grocery list. A good idea is to *partition* the set of items you want to purchase into $n$ smaller sets so that each person can purchase only the items on their own set.

::: .definition
**Definition** (Partition)  
A **partition** of a set $S$ is a collection of non-empty sets   $S_1, S_2, \ldots, S_n$ such that   

    p
      | \begin{equation*}
      |     S = \bigcup_{i=1}^n S_i
      |   \end{equation*}
      
and $S_1, S_2, \ldots, S_n$ are disjoint. 
:::

    center: img(src="images/partition.svg")

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Find a partition of `\{1,2,3,4,5\}` into three sets. Is there a partition of `\{1,2,3,4,5\}` into *six* sets?   
:::

*Solution*. There are many partitions of `\{1,2,3,4,5\}` into three sets. For example,

    p
      | \begin{equation*}
      |     \{\{1,2\},\{3,4\},\{5\}\} \text{ or }
      |     \{\{1,2,5\},\{3\},\{4\}\}.
      | \end{equation*}

It is not possible to partition `\{1,2,3,4,5\}`into six sets, because each set must have at least one element, and no pair of the sets can have any element in common. 

_{button.next-step} Continue_

---
### Cartesian Products

Suppose we perform an experiment which consists of flipping a coin and rolling a standard six-sided die. The outcome of the coin flip is an element of the set `S_1 = \{H, T\}`, and the outcome of the die roll is an element of the set `S_2 = \{1,2,3,4,5,6\}`. The set of all possible outcomes of the experiment is the set with the following elements.

    table.eqnarray
      tr
        td: .pill.red (H,1)
        td: .pill.red (H,2)
        td: .pill.red (H,3)
        td: .pill.red (H,4)
        td: .pill.red (H,5)        
        td: .pill.red (H,6)
      tr
        td: .pill.yellow (T,1)
        td: .pill.yellow (T,2)
        td: .pill.yellow (T,3)
        td: .pill.yellow (T,4)
        td: .pill.yellow (T,5)        
        td: .pill.yellow (T,6)
        
_{button.next-step} Continue_

---
        
We call this 12-element set the **Cartesian product** of `S_1` and `S_2`. 
        
::: .definition
**Definition** (Cartesian Product)  
If $S_1$ and $S_2$ are sets, then the **Cartesian product** of $S_1$ and $S_2$ is defined by  
 
    p
      | \begin{equation*}
      |     S_1 \times S_2 = \{(s_1, s_2) : s_1 \in S_1 \text{ and } s_2 \in
      |     S_2\}.
      |   \end{equation*}
      
Likewise, if $S_1,S_2, \ldots, S_n$ are sets, then   

    p
      | \begin{equation*}
      |     S_1 \times S_2 \times \cdots \times S_n  = \{(s_1, s_2, \ldots, s_n) : s_1 \in S_1 \text{ and } s_2 \in
      |     S_2 \text{ and } \cdots \text{ and } s_n \in S_n\}.
      |   \end{equation*}

:::

_{button.next-step} Continue_

---

This set operation is ubiquitous in probability and data science applications, since it corresponds to the common act of combining multiple pieces of information into an ordered pair, an ordered triple, or a higher-order tuple.

For example, a patient data record might be an ordered quintuple of the form (first name, last name, date of birth, height, blood pressure reading). This record is in $S \times S \times D \times H \times B$, where `S` is the set of all *strings* (sequences of characters), `D` is the set of all dates, `H` is the set of positive length measures, and `B` is the set of possible blood pressure readings.

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Find $|S\times T|$ if $|S| = 4$ and $|T| = 100$.   
:::

*Solution*. In the coin-and-die example, the cardinality of the Cartesian product was 12, which is equal to the product of the cardinalities of the original sets. We listed the elements of $S$ in a way which suggests why this is the case: the elements of $S \times T$ can always be arranged in a $|S|$ by $|T|$ grid.

Therefore, $|S \times T| = 400$. 


### Exercises

::: .exercise
**Exercise**  
Select most appropriate set theory term for each of the following real-world scenarios.

    ul
      li.md You have a list of patients which have a particular risk factor and a second list of patients who have another risk factor. You want to identify the patients with both risk factors. [[intersection|union|complement]]
      li.md Your company is merging with another company and you want to combine your customer database with their customer database to get a collection of all of the customer records. [[union|intersection|complement]]
      li.md You have a table containing information about all of the Champions League goals this year, and you want to look at the ones which were not scored by Ronaldo. [[complement|intersection|union]]
      li.md You have 68 clients to call, and you want to split them among your four salespeople. [[partition|union|intersection]]

:::

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Establish the first and third of the following four identities. Use the following strategy: show that the left-hand side is a subset of the right-hand side and vice versa. To demonstrate that $A\subset B$, consider an element $s$ of $A$ and—assuming only that $s \in A$—apply reasoning to conclude that it must be in $B$ as well. 

    p
      | \begin{align*}
      | S \cap (R \cup T) &= (S \cap R) \cup (S \cap T) \\\\ 
      | S \cup (R \cap T) &= (S \cup R) \cap (S \cup T) \\\\ 
      | \left( \bigcup_{i=1}^n S_i \right)^{\mathsf{c}} &= \bigcap_{i=1}^n S_i^\mathsf{c} \\\\ 
      | \left( \bigcap_{i=1}^n S_i \right)^{\mathsf{c}} &= \bigcup_{i=1}^n S_i^\mathsf{c}
      | \end{align*}

:::

_{button.next-step} Continue_

---

*Solution*. If an element $s$ is in $S \cap (R \cup T)$, then it is in $S$ and it is either in $R$ or $T$. This implies that either (i) $s\in S$ and $s\in
R$, or (ii) $s\in S$ and $s\in T$. In other words, either $s\in S
\cap R$ or $s \in S \cap T$. In other words, $s \in (S \cap R) \cup
(S \cap T)$. Therefore, the left-hand side is a subset of the right-hand side.

Conversely, if $s \in (S \cap R) \cup (S \cap T)$, then either $s
\in S \cap R$ or $s \in S \cap T$. In the former case, it is true that $s \in S$ and that $s \in R \cup T$. Therefore, $s \in S \cap
(R \cup T)$ in this case. Similarly, in the latter case, we have $s\in S$ and $s \in R \cup T$. Therefore, $s \in S \cap (R \cup T)$ in this case as well. So the right-hand side is also a subset of the left-hand side.

For the third identity, note that if 

    p
      | \begin{equation*}
      | s\in \left( \bigcup_{i=1}^n S_i \right)^{\mathsf{c}}, 
      | \end{equation*}

then it is not true that $s$ is in the union of the $S_i$'s. In other words, $s$ must be in *none* of the $S_i$'s. This means that for each $S_i$, the element $s$ is in its complement. It follows by the  definition of intersection that 

    p
      | \begin{equation*}
      |   s \in \bigcap_{i=1}^n S_i^{\mathsf{c}}
      | \end{equation*}

Similarly, if 

    p
      | \begin{equation*}
      | s \in \bigcap_{i=1}^n S_i^{\mathsf{c}}, 
      | \end{equation*}

then $s$ is in none of the $S_i$'s, which in turn means that it is not in the union of the $S_i$'s. Thus $s$is in the complement of the union of the $S_i$'s. 


---
> id: lists
## Lists

Sets are data containers with very little structure: you can check membership (and perform membership-checking-related operations like unions or complements), but that's all. We will define various other types of collections which provide additional structure.

_{button.next-step} Continue_

---

For example, suppose you *do* care about the order in which the items appear on your grocery list; perhaps because you want to be able pick the items up in a certain order as you move across the store. Also, you might want to list an item multiple times as a way of reminding yourself that you should pick up more than one. *Lists* can handle both of these extra requirements:

::: .definition
**Definition** (List)  
A **list** is an ordered collection of finitely many elements. 
:::

For example, if we regard `\{1,2,3\}` and `\{2,1,3\}` as lists, then they are unequal because the orders in which the elements appear are different. Also, the list `\{1,1,2\}` has three elements, since repeated elements are not considered redundant.

_{button.next-step} Continue_

---

We don't distinguish sets and lists notationally, so we will rely on context to make it clear whether order matters and repetitions count.

::: .exercise
**Exercise**  
How many sets $A$ have the property that `A sub \{1,2,3\}`? [[8]] 

How many *lists* of length 4 have all of their elements in `\{1,2,3\}`? [[81]]
:::

---

*Solution*. There are 8 subsets of `\{1,2,3\}`:

    p
      | \begin{equation*}
      |     \emptyset, \{1\}, \{2\}, \{3\}, \{1,2\}, \{1,3\}, \{2,3\},
      |     \{1,2,3\}.
      |   \end{equation*}

There are $3^4 = 81$ length-4 lists with elements in `\{1,2,3\}`, because the set of such lists is equal to `\{1,2,3\} ×
\{1,2,3\} × \{1,2,3\} × \{1,2,3\}`, and the cardinality of a Cartesian product of sets is the product of the cardinalities of the sets. 


---

> id: 
## Functions

The grocery lists you make for yourself probably don't look quite like a set *or* a list, because the quickest way to indicate how many of each item to purchase is to make a separate column: 

    table.eqnarray
      tr
        td: .pill.b item 
        td: .pill.b count
      tr
        td: .pill.red apple
        td: .pill.blue 3
      tr
        td: .pill.red bread
        td: .pill.blue 1
      tr
        td: .pill.red squash
        td: .pill.blue 3

_{button.next-step} Continue_

---
      
We have two sets here: the set of grocery items and the set of positive integers. For each element in the former set, we want to associate with it some element of the latter set.

_{button.next-step} Continue_

---

Note that this construction is asymmetric in the two sets: every grocery item should have exactly one number associated with it, while some positive integers may be omitted and others may be associated with multiple grocery items.

_{button.next-step} Continue_

---

The idea of attaching a piece of data to each element of a set arises *very* often in every quantitative discipline, and it deserves its own vocabulary:

::: .definition
**Definition** (Function, domain, and codomain)  
If $A$ and $B$ are sets, then a **function** $f:A \to B$ is an assignment to each element of $A$ of some element of $B$.

The set $A$ is called the **domain** of $f$ and $B$ is called the **codomain** of $f$. 
:::

    center: img(src="images/function.svg")

_{button.next-step} Continue_

---

The domain and codomain of a function should be considered part of the data of the function: to fully specify $f$, we must specify (i) the domain $A$, (ii) the codomain $B$, and (iii) the value of $f(x)$ for each $x \in A$. 

Two functions $f$ and $g$ are considered equal if (i) they have the same domain and codomain and (ii) $f(x) = g(x)$ for all $x$ in the domain of $f$ and $g$.

::: .exercise
**Exercise**.  
Consider the function $f$ from the set of real numbers to the set of real numbers which square its input, as well as the function $g$ from the set of real numbers to the set of nonnegative real numbers which also squares its input. Are these functions equal? [[No|Yes|Impossible to say]]
:::

---

*Solution.* The functions are unequal, since their codomains are not the same.

_{button.next-step} Continue_

---

### Images

Given a subset $A'$ of $A$, we define the **image** of $f$—denoted $f(A')$—to be the set of elements which are mapped to from some element in $A'$: 

    p
      | \begin{equation*}  f(A') = \{b \in B \, : \,
      |   \text{there exists }a \in A' \text{ so that } f(a) = b\}.
      | \end{equation*}

_{button.next-step} Continue_

---

The **range** of $f$ is defined to be the image of the domain of $f$. Thus the range may be obtained from the codomain by removing all the elements that don't get mapped to.

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Find the range of the function from {apple, bread, squash} to $\mathbb{N}$ represented by the following table. It contains [[2]] elements.

    table.eqnarray
      tr
        td: .pill.b item 
        td: .pill.b count
      tr
        td: .pill.red apple
        td: .pill.blue 3
      tr
        td: .pill.red bread
        td: .pill.blue 1
      tr
        td: .pill.red squash
        td: .pill.blue 3
:::

---

_{button.next-step} Continue_

---

*Solution*. The range is the set of quantity counts which get mapped to from some grocery item, so the range is the two-element set `\{1,3\}`.

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Consider the *social-security-number function* $f$ from the set of US citizens and permanent residents to the set of integers   `\{000000000,000000001,ldots,999999999\}`. For each person $x$, $f(x)$ is defined to be the social security number of person $x$.

* What are the largest and smallest possible values of the ratio     $\frac{|f(A)|}{|A|}$ for any subset $A$ of the domain of $f$? Largest: [[1]] Smallest: [[1]]
* Estimate the ratio of the cardinality of the range of $f$ to the cardinality of the codomain of $f$. (You can estimate the number of social security numbers issued to be about 40% more than the current US population). [[0.45±0.2]] What implications does this have for the Social Security Administration?

:::

_{button.next-step} Continue_

---

*Solution*. (i) The value of $\frac{|f(A)|}{|A|}$ is 1 for any set $A$: since no two people are issued the same social security number, the number of elements in $f(A)$ is equal to the number of elements in $A$.

(ii) There are $10^{9}$ elements in the codomain of $f$, and about 450 million numbers have been issued. Therefore, the ratio of the cardinality of the range to the cardinality of the codomain is about $0.45$. Since a macroscopic percentage of possible SSNs have been used, it's clear that eventually the SSA will eventually have to either issue duplicate SSNs or increase the number of digits they use for each one.

---

### Preimages

::: .definition
**Definition**  
If $B'\subset B$, then the **preimage** $f^{-1}(B')$ of $B'$ is defined by

    p
      | \begin{equation*}
      |   f^{-1}(B') = \{a \in A \, : f(a) \in B'\}.
      | \end{equation*}

This is the subset of $A$ consisting of every element of $A$ that maps to some element of $B'$. 
:::

    center: img(src="images/preimage.svg")
    
::: .exercise
**Exercise**  

    ol
      li.md The statement "the preimage of a nonempty subset of the codomain of a function may be empty" is [[true|false]]. 
      li.md The statement "the preimage of $B'$ have more elements than $B'$" is [[true|false]].
      
:::

_{button.next-step} Continue_

---

*Solution*. The first statement is true; for example, consider the squaring function from the real number line to itself. The preimage of any set of negative numbers is empty.

The second statement is also true, since multiple input elements may map to the same codomain values. 

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Consider the following purported equalities.   
* $f(A \cap B) \stackrel{?}{=} f(A) \cap f(B)$
* $f(A \cup B) \stackrel{?}{=} f(A) \cup f(B)$
* $f^{-1}(C \cap D) \stackrel{?}{=} f^{-1}(C) \cap f^{-1}(D)$
* $f^{-1}(C \cup D) \stackrel{?}{=} f^{-1}(C) \cup f^{-1}(D)$

Which of the are true for all functions $f$and all subsets $A$ and $B$ of the domain of $F$ and subsets $C$ and $D$ of the codomain of $f$?   
* all of them   
* none of them   
* (i) and (ii) only   
* (iii) and (iv) only   
* (i), (iii), and (iv) only
:::

_{button.next-step} Continue_

---

*Solution*. The correct answer is (e). To show that (ii)   $f(A \cup B) = f(A) \cup f(B)$, we note that if $y \in f(A \cup B)$,   then $y = f(x)$ for some $x \in A \cup B$. This element $x$ is in either $A$ or $B$, which means that $y = f(x)$ is in either $f(A)$ or $f(B)$. Thus $y \in f(A) \cup f(B)$. So $f(A \cup B) \subset f(A) \cup f(B)$. Similar reasoning shows that $f(A) \cup f(B) \subset f(A \cup B)$ as well. Statements (iii) and (iv) may likewise be confirmed.

To see that (i) may fail, consider the function from `\{-1,0,1\}` to `\{0,1\}` which squares its input. Let `A =
\{-1,0\}` and `B = \{0,1\}`. Then $f(A \cap B)$ = `\{0\}`, while $f(A) \cap f(B)$ = `\{0,1\}`.

_{button.next-step} Continue_

---

> id:function-properties
## Function Properties

According to the definition, a function may map several elements of the domain to the same element of the codomain, and it may also miss elements in the codomain (in other words, fail to map any domain element to them). However, these behaviors can be undesirable in some situations, and we'll want terminology to refer to whether a given function exhibits them.

::: .definition
**Definition**  
A function $f$ is **injective** if no two elements in the domain map to the same element in the codomain; in other words if $f(a) = f(a')$ implies $a=a'$.

A function $f$ is **surjective** if the range of $f$ is equal to the codomain of $f$; in other words, if $b \in B$ implies that there exists $a\in A$ with $f(a) = b$.

A function $f$ is **bijective** if it is both injective and surjective. This means that for every $b\in B$, there is exactly one   $a\in A$ such that $f(a) \in b$. If $f$ is bijective, then the **inverse** of $f$ is the function from $B$ to $A$ that maps $b\in B$ to the element $a \in A$ that satisfies $f(a) = b$.
:::

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Identify each of the following functions as injective or not injective, surjective or not surjective, and bijective or not bijective.   
* $f:\mathbb{R} \to \mathbb{R}$, $f(x) = x^2$ [[not injective|injective]] and [[not surjective|surjective]]
* $f:[0,\infty) \to \mathbb{R}$, $f(x) = x^2$ [[injective|not injective]] and [[not surjective|surjective]]
* $f:[0,\infty) \to [0,\infty)$, $f(x) = x^2$ [[injective|not injective]] and [[surjective|not surjective]]
* $f:\mathbb{R} \to [0,\infty)$, $f(x) = x^2$ [[not injective|injective]] and [[surjective|not surjective]]

:::

---

::: .exercise
**Exercise**  
For each of the four combinations of injectivity and surjectivity, come up with a real-world function which has that property.

For example, the function from the set of ticket numbers for a commercial airplane flight to the set of passengers on the plane (the one which associates each ticket number with the passenger named on that ticket) is bijective.
:::

_{button.next-step} Continue_

---

> id: operations
## Function Operations

### Restriction

It is frequently useful to focus on a subset of the domain of a function without changing the codomain elements that the function associates with those domain elements. For example, if we partition a grocery list with quantity counts among several shoppers, then each shopper will be interested in the *restriction* of the quantity count function to their own portion of the domain. In other words, they need to know how many of each of their items to pick up, and they don't need to know anything about the other shoppers' items.

::: .definition
**Definition** (Restriction)  
If $f: A \to B$ and $A' \subset A$, then the **restriction** of $f$ to $A'$ is the function 

    p
      | \begin{equation*}
      | \left. f \right|_{A'} : A' \to B
      | \end{equation*} 
      
defined by 

    p 
      |  \begin{equation*} 
      |  \left. f \right|_{A'}(x) = f(x) \textrm{ for all }x \in A'.
      | \end{equation*}
      
:::

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
State a general relationship involving the terms *restriction*, *image*, and *range*.   
:::

_{button.next-step} Continue_

---

*Solution*. If $f:A \to B$ and $A' \subset A$, then the range of the restriction

    p
      | \begin{equation*}
      | \left. f \right|_{A'}
      | \end{equation*}

is equal to the image $f(A)$. These sets are equal because they are both equal to the set of elements of $B$ which $f$ maps to from some element of $A'$. 

_{button.next-step} Continue_

---

### Composition

Sometimes the elements output by a function $f$ will themselves have associated data, and in this case we often want to connect each element in the domain of $f$ to these data.

For example, consider the *album* function from the set of songs to the set of albums. Evaluated on a song, the album function returns the album on which the song appeared. Consider also the *year* function from the set of albums to the set of years (which returns the year in which each album was released). We can determine the year in which a song was released by *composing* the album function and the year function.

::: .definition
**Definition** (Composition)  
If $f: A \to B$ and $g:B \to C$, then the function $g\circ f$ which maps $x \in A$ to $g(f(x))\in C$ is called the **composition** of $g$ and $f$. 
:::

    center: img(src="images/composition.svg")

_{button.next-step} Continue_ 

---

::: .exercise
**Exercise**  
Show that composition is associative: $(f\circ g)\circ h = f \circ
(g \circ h)$ for all functions $f$, $g$, and $h$ with the property that the codomain of $h$ is equal to the domain of $g$ and the codomain of $g$ is equal to the domain of $f$.   
:::

_{button.next-step} Continue_

---

*Solution*. We check that two functions are equal by checking that they have the same domain and codomain and that they map all input values to the same output values.

The domain of $(f\circ g)\circ h$ is the domain of $h$, and the domain of $f \circ (g \circ h)$ is $h$. Similarly both functions have a codomain equal to the codomain of $f$.

Furthermore, $(f\circ g)\circ h$ maps $x$ to $(f\circ g)(h(x))$,   which by definition of $f \circ g$ is equal to   $f(g(h(x)))$. Similarly, $f \circ (g \circ h)$ maps $x$ to   $f(g(h(x)))$. Therefore, these functions are equal, and we conclude that compositions are associative. 

_{button.next-step} Continue_

---

### Anonymous functions

If the rule defining a function is sufficiently simple, we can describe the function using **anonymous function notation**.  For example, $x \in \mathbb{R}\mapsto x^2 \in \mathbb{R}$, or $x\mapsto x^2$ for short, is the squaring function from $\mathbb{R}$ to $\mathbb{R}$. Note that bar on the left edge of the arrow, which distinguishes the arrow in anonymous function notation from the arrow between the domain and codomain of a named function.

::: .exercise
**Exercise**  
Suppose that $f$ is the function $(x\mapsto \sqrt{x}) \circ (y\mapsto
3y)$. Then $f\left(\frac{1}{12}\right)$ = [[0.5]]
:::

---

_{button.next-step} Continue_

---

*Solution*. We first substitute $\frac{1}{12}$ into the tripling function to get $\frac{1}{4}$, and then we substitute that value into the square root function to get $f\left(\frac{1}{12}\right) = \boxed{\tfrac{1}{2}}$. 

_{button.next-step} Continue_

---

### Inverses

Suppose that $f: A \to B$ is a function from the set $A$ of names of customers at a bank to the set $B$ of their primary checking account numbers. Specifically, suppose $f$ maps each customer name to that customer's primary checking account.

Since $f$ is bijective, we can ask to *reverse* the lookup that $f$ performs: given a primary checking account number, what is the corresponding customer name? This function from $B$ to $A$ is called the *inverse* of $f$. 

::: .exercise
**Exercise**  
Find the inverse of the function $f(x) = x^2 + 1$ from the interval $[0,\infty)$ to the interval $[1,\infty)$. 
:::

_{button.next-step} Continue_

---

*Solution*. Given $y \in [1,\infty)$, we want to find the value of $x$ that $f$ maps to it. In other words, we want to solve $x^2 + 1 = y$ for [[`x`|`y`]]. Doing so, we get $x = \sqrt{y-1}$. Therefore, $f^{-1}(y) = \sqrt{y-1}$. 

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Select the functions which have inverses.

    x-picker.list
      .item.pill.bblue.md(data-error="plane-dist-origin") The function which maps each point $(x,y) \in \mathbb{R}^2$ to its distance from the origin.
      .item.pill.bblue.md The function which maps each automobile to its VIN (vehicle identification number). 
      .item.pill.bblue.md The function which maps each negative real number to its distance from the origin. 
      .item.pill.bblue.md The function which maps each real number to its cube. 
      
:::

---

::: .exercise
**Exercise**  
Which of the following is equal to $(g\circ f)^{-1}$, if $f$ and $g$ are invertible functions for which the codomain of $f$ and the domain of $g$ are equal?

    x-picker.list
      .item.pill.bblue.md(data-error="inverse") $g^{-1} \circ f^{-1}$
      .item.pill.bblue.md $f^{-1} \circ g^{-1}$
      
:::

_{button.next-step} Continue_

---

*Solution*. We have $f^{-1} \circ g^{-1} (\circ g \circ f(x)) = f^{-1}(f(x)) = x$, so $f^{-1} \circ g^{-1}$ is the inverse of $f\circ g$.

---

**Congratulations!** You've completed the Data Gymnasia *Sets and Functions* course. 