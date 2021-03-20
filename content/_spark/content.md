# Spark

> id: intro
## Introduction

We are including this lesson in a course on deep learning for a simple
reason: almost every time I ask someone in industry what they'd really
like to see incoming employees know better, they include Spark in the
list. Seriously, it's uncanny.

Spark has become a critical part of many companies' technology stacks,
and some familiarity with the context of the system and its core
abstractions might very well prove helpful in interviews or on the
job.

[Continue](btn:next)

---

### The problem

When you view tabular data in a Pandas or R dataframe, or when you
pull the MNIST images into a Python session to train a Keras model,
you're handling the data *in-memory*. This means that the data are
loaded into your machine's [[RAM|CPU|keyboard]], giving you fast
access and the ability to manipulate the data at will.

---

However, businesses and researchers frequently need to operate on
datasets which are too large to fit into RAM on a single machine. Such
datasets and attendant tooling are described using the buzzword [[**big
data**|**small data**]].

---

The basic idea for solving big data problems is to distribute the data
across a (potentially very large) collection of servers and devise a
scheme and an implementation for specifying computations and
distributing them to the appropriate servers for execution. 

[Continue](btn:next)

---

### MapReduce

**MapReduce** is a particularly simple model for distributed
computing. Let's begin by discussing the higher-order
functions **map** and **reduce**. These functions are called
*higher-order* because they [[include functions in their arguments|are
executed at a high level in your computer|are very organized]].

---

To **map** a function across a collection of items means to
apply the function to each item and return the resulting collection. 
The expression _{code.language-python}map(round,(1.2, 3.7, 2.1))_
evaluates to 
[[(1,4,2)|7|None]]. 

---

To **reduce** a collection with a given associative **aggregation**
operation means to repeatedly apply the operation to pairs of values
from the collection, replacing the pair with the result of the
operation, until only a single number remains. 

[Continue](btn:next)

---

For example, we can reduce the list _{code.language-python}[1,7,-3,5]_
with the _{code.language-python}max_ operation as follows (the pair
selected for aggregation is indicated in _{.pill.yellow}yellow_, and
the result is in _{.pill.green}green_):

    table.eqnarray
      tr
        td: .pill.b.blue 1
        td: .pill.b.blue 7
        td: .pill.b.blue -3
        td: .pill.b.blue 5

    table.eqnarray
      tr
        td: .pill.b.yellow 1
        td: .pill.b.yellow 7
        td: .pill.b.blue -3
        td: .pill.b.blue 5

    table.eqnarray
      tr
        td: .pill.b.green 7
        td: .pill.b.blue -3
        td: .pill.b.blue 5

    table.eqnarray
      tr
        td: .pill.b.blue 7
        td: .pill.b.yellow -3
        td: .pill.b.yellow 5

    table.eqnarray
      tr
        td: .pill.b.blue 7
        td: .pill.b.green 5

    table.eqnarray
      tr
        td: .pill.b.yellow 7
        td: .pill.b.yellow 5

    table.eqnarray
      tr
        td: .pill.b.green 7

[Continue](btn:next)

---

Since the operation is [[associative|reflexive]], we get the same
result regardless of the order in which the operations are performed. 

---

::: .exercise

**Exercise**  
The last line in the following block of code returns [[14]]. 

    pre: code.language-python
      | from functools import reduce
      | 
      | def add(x,y):
      |     return x + y
      | 
      | def square(x):
      |     return x**2
      | 
      | reduce(add, map(square, [1,2,3]))

:::

---

The function _{code.language-python}mapreduce_ takes a function, an
operation, and a collection. It maps the function over the collection
and reduces the result. In Python: 

    pre: code.language-python
      | def mapreduce(f, op, A):
      |     return reduce(op, map(f,A))

[Continue](btn:next)

---

::: .exercise

**Exercise**  
Suppose you have a function and an associative operation you want to
mapreduce over a set of data which has been partitioned and
distributed across 1000 servers. For concreteness, you may suppose
that the data are a list of floats, and you want to take the absolute
value of each number and sum the results.

Describe an algorithm for performing this mapreduce operation which
requires minimal data transfer from one server to another.

:::

_{button.next-step} Reveal_

---

*Solution.* Each server should execute code to map the function and
reduce over the subset of data that it stores. Then the 1000 resulting
values can be aggregated and mapreduced by a single machine. 

[Continue](btn:next)

---

We can see that computations which can be written as a map followed by
a reduce operation are particularly amenable to distributed computing.
However, the flow of data is [[one-way|circular]] in a MapReduce
computation, so there are many computations which are not expressible
in this model.

---

**Hadoop** is a widely used and hugely influential implementation
of the MapReduce programming model for networks of servers. It was
introduced in 2006, having grown out of a project called *Google File
System* from 2003. 

Hadoop consists of several components designed to work together,
including the **Hadoop Distributed File System** (HDFS) for
distributed file management and **MapReduce** for executing mapreduce
operations. **Spark** is an alternative to Hadoop MapReduce for
distributed data processing. Spark is faster and more flexible than
MapReduce, so it is a natural choice for situations where you're
placing real-time data processing demands on your big data system.

[Continue](btn:next)

---

Note: Both Hadoop and Spark are JVM (Java virtual machine) systems.
Hadoop's native language is Java and Spark's is Scala (another JVM
language). Spark also has bindings for Java, Python, and R. In this
lesson we will use the Python interface.

---
> id: RDD

## Resilient Distributed Datasets

The core abstraction in Spark is the **resilient distributed dataset**, or
RDD. An RDD is a partitioned collection of records.

1. The records in an RDD may be any type of data, including
user-defined Python (or Java, or Scala) objects
1. An RDD is [[immutable|mutable]]: the values in a given RDD cannot be changed
1. RDDS are designed to be [[fault-tolerant|fault-intolerant]]:
the cluster should work even if a server goes down. 
   
---

Let's get started with a simple example. We'll use
_{code.language-python}pyspark_ to make an
random-number-generator-based estimator for $\pi$. The idea will be to
generate many points uniformly at random from the unit square $[0,1]^2$ and
count the points which fall inside the unit circle (centered at the
origin). The ratio of these numbers will be approximately 
[[0.785±0.02]] (as a decimal). 

---

You can execute the code cells below in-browser (and edit them!). Make
sure to execute them in order. The first one will probably be slow,
since a Binder instance is being launched in the background.

[Continue](btn:next)

---

The object that mediates between Spark and the Python environment is
called a _{code.language-python}SparkContext_. Let's instantiate one: 
    
    pre(python-executable)
      | import pyspark
      | sc = pyspark.SparkContext(appName="PiEstimator")
      | type(sc)


[Continue](btn:next)

---

The simplest way to create an RDD is to populate it with values from
the Python session using the context's _{code.language-python}parallelize_
method. Let's put a million ordered pairs into an RDD.

    pre(python-executable)
      | import numpy as np
      | n = 1_000_000
      | points = zip(np.random.rand(n), np.random.rand(n))
      | rdd = sc.parallelize(points)
      | type(rdd)

[Continue](btn:next)

---

Of course, in a real-world context you'd typically be getting values
for your RDD from a distributed file system (using the
_{code.language-python}textFile_ method of the
_{code.language-python}SparkContext_ object). However, we will carry
on with the RDD we just made, so we can see what you can do with it
once it's loaded. 

[Continue](btn:next)

---

The _{code.language-python}filter_ method of an RDD returns a new 
RDD with only those records satisfying a given condition. The 
condition may be described in Python code. The
_{code.language-python}count_ method returns the number of records in
the RDD. 

    pre(python-executable)
      | def inside_circle(p):
      |     x,y = p
      |     return x*x + y*y < 1
      | 
      | 4 * rdd.filter(inside_circle).count() / n 

[Continue](btn:next)

---

::: .exercise

**Exercise.**  
Find the centroid of the set of points stored in rdd (obtained by
averging the x-coordinates and averaging the y-coordinates). By law of
large numbers, you would expect this value to be close to
([[0.5]],[[0.5]]).

Note that you'll want to use the _{code.language-python}map_ method to
convert each ordered pair to a NumPy array (since tuples don't support
arithmetic operations in Python) and the _{code.language-python}mean_ 
method to find the average.

:::

    pre(python-executable)
      | # TODO

[Continue](btn:next)

---

Here's an extra executable cell for experimentation: 

    pre(python-executable)
      | 

---
> id: sparksession
## Spark Sessions

_{code.language-python}SparkSession_ is a Python class which wraps
_{code.language-python}SparkContext_ and supplies additional
functionality that allows you to interact with Spark more like a
DataFrame or SQL database.

    pre(python-executable)
      | import pandas
      | from pyspark.sql import SparkSession
      | spark = SparkSession.builder.appName("Iris").getOrCreate()
      | df = spark.createDataFrame(pandas.read_csv("https://bit.ly/iris-dataset"))
      | type(spark)

Note: you can access the underlying _{code.language-python}SparkContext_
object using the _{code.language-python}sparkContext_ attribute. 

[Continue](btn:next)

---

Spark _{code.language-python}DataFrame_ objects support much the same
functionality as in-memory _{code.language-python}DataFrame_s. You
might want to convert these to Pandas DataFrames using the
_{code.language-python}toPandas_ method, since Pandas has nicer
display utilities. 

Note that _{code.language-python}df.Species_ and
_{code.language-python}df["Species"]_ are alternate ways to access a
given column. The latter syntax is necessary if there's a dot in the
column name, because in that case you have to use backticks in a
string literal to escape the dot. 

    pre(python-executable)
      | # count the setosa's
      | df.filter(df.Species == "setosa").count()
      | # add a column and sort on it
      | df2 = df.withColumn("area", df["`Sepal.Length`"]*df["`Sepal.Width`"])
      | df2.orderBy(df2.area).show()
      | # see all the species
      | df.select("Species").dropDuplicates().show()
      | # see all records with length more than 2.5 units more than width
      | df[df["`Sepal.Length`"] > df["`Sepal.Width`"] + 2.5].show()
      | # Find mean petal width for each species
      | df.groupby("Species").agg({"`Petal.Width`": "mean"}).show()

[Continue](btn:next)

---

::: .exercise

Suppose we want to add a column to _{code.language-python}df_ which
records the mean petal width for the species of each flower. Figure
out how to use _{code.language-python}df.join_ to do that. Note that
you can access documentation on _{code.language-python}df.join_ by
entering _{code.language-python}?df.join_ in the code cell.

:::

    pre(python-executable)
      | 

[Continue](btn:next)

---

::: .exercise

Does _{code.language-python}df.sample(0.2)_ select exactly 20\% of the
rows of the DataFrame _{code.language-python}df_? 

:::

    pre(python-executable)
      | df.sample(0.2)
    
_{button.next-step} Reveal_

---

*Solution.* No. It selects each row with probability 20\%,
independently of the others. If you run it several times and call the
_{code.language-python}count_ method, you'll find that its length
varies (according to the binomial distribution). 

_{button.next-step} Continue!_

---

Congratulations! You've reached the end of this lesson. 
