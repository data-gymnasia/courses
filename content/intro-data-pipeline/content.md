
# The Data Science Pipeline

> id: intro
## Introduction

In this mini-course, we will introduce a collection of skills commonly applied to solve data problems in industry and science. These skills correspond to stages of a typical data science project: we **acquire** data, **wrangle** it into a form conducive to further analysis, **visualize** the data to better understand it, **model** the data to gain further insight and make predictions about the process that generated the data, and **communicate** our results to stakeholders.

[Continue](btn:next)

---
> id: step-python

We will be using the Python data science ecosystem for developing the computational pipeline skills: Pandas for data wrangling, Plotly for data visualization, and Scikit-Learn for modeling. These packages are popular enough to be a good investment of your time even if you eventually settle into some other toolchain, because the experience will help you in interviews and when collaborating with the Python users you will inevitably encounter. 

---
> id: acquire
## Data Acquisition

As a data scientist on the job, you will often be given a data set and a problem to solve. In these situations, obtaining data might not seem like a high priority. However, using external sources in addition to the original data can be a critical source of leverage. For example, if you want to predict a company's customer [churn](gloss:churn) you might supplement the internal customer data with economic or geographic information about the city where each customer lives. 

[Continue](btn:next)

---
> id: step-range-difficulties

The difficulty of obtaining useful data ranges from trivial (your supervisor emails you a file) to epic (years-long clinical trials). An important part of becoming a seasoned data scientist is developing a sense for when the cost of obtaining data will lead to a commensurate problem-solving payoff. Developing your knowledge of useful and readily accessible data sets helps reduce that cost, so in this section we will get you started by making some concrete suggestions for data sources. 

[Continue](btn:next)

---
> id: data-sources

1. **R packages**. Many classic datasets are available as packages in [R](gloss:R). Of particular note is the package `{code} fivethirtyeight`, which includes data for more than 100 articles from the popular data journalism outfit [FiveThirtyEight](https://fivethirtyeight.com). We will discuss the easiest way to load packages from R into Python in the next section. 

[Continue](btn:next)

---
> id: kaggle-data

2. **Kaggle**. The data science contest website [Kaggle](https://www.kaggle.com/datasets) has about 120,000 public data sets. 

[Continue](btn:next)

---
> id: data-gov

3. **Data.gov**. A [database](https://www.data.gov) of over 200,000 open data sets shared by the U.S. Government. See also: [data.gov.uk](https://data.gov.uk). 

[Continue](btn:next)

---
> id: uc-irvine

4. **UC Irvine Machine Learning Repository**. [About 480 datasets](http://archive.ics.uci.edu/ml/index.php), hosted by UC Irvine as a service to the machine learning community

[Continue](btn:next)

---
> id: academic-torrents

5. **Academic Torrents**. Datasets from academic papers. Includes a particularly well-known dataset for natural language processing: [Enron senior management emails](http://academictorrents.com/details/4697a6e1e7841602651b087d84f904d43590d4ff).

[Continue](btn:next)

---
> id: quandl

6. **Quandl**. A mixture of free and paid [financial datasets](https://www.quandl.com/).

[Continue](btn:next)

---
> id: data-types

We conclude this section by highlighting a distinction between two types of data:  

1. **Scientific data**. Scientists are trained to take great care to mitigate problems of bias in data collection, so these data tend to provide the most reliable insights into underlying phenomena.

[Continue](btn:next)

---
> id: incidental-data

2. **Incidental data**. Processes not intended primarily for data collection often yield artifacts that can be mined for insight using data techniques. For example, web logs tracking users' interaction with a website can be used to improve the user experience. Patterns observed in such data are often more reflective of the manner of collection than of underlying phenomena, so hypotheses formed by looking at the data are often subjected to experimental scrutiny using statistical methods like [A/B testing](gloss:abtesting).

[Continue](btn:next)

---
> id: wrangle
## Data Wrangling

Data is said to be in *tidy* format if each row corresponds to an observation and each column corresponds a different observation variable. For example, in the [iris dataset](gloss:iris), each row represents a flower, and the entries of a row specify the flower's species and various measurements made for that flower: 

<!--python
from pydataset import data
data('iris').head().to_html(border=0)
-->
<table border=0 class="dataframe">  <thead>    <tr style="text-align: right;">      <th></th>      <th>Sepal.Length</th>      <th>Sepal.Width</th>      <th>Petal.Length</th>      <th>Petal.Width</th>      <th>Species</th>    </tr>  </thead>  <tbody>    <tr>      <th>1</th>      <td>5.1</td>      <td>3.5</td>      <td>1.4</td>      <td>0.2</td>      <td>setosa</td>    </tr>    <tr>      <th>2</th>      <td>4.9</td>      <td>3.0</td>      <td>1.4</td>      <td>0.2</td>      <td>setosa</td>    </tr>    <tr>      <th>3</th>      <td>4.7</td>      <td>3.2</td>      <td>1.3</td>      <td>0.2</td>      <td>setosa</td>    </tr>    <tr>      <th>4</th>      <td>4.6</td>      <td>3.1</td>      <td>1.5</td>      <td>0.2</td>      <td>setosa</td>    </tr>    <tr>      <th>5</th>      <td>5.0</td>      <td>3.6</td>      <td>1.4</td>      <td>0.2</td>      <td>setosa</td>    </tr>  </tbody></table>

Many types of data do not fit naturally into the tidy data framework, like image data and passages of text. However, tidy data occupies a sweet spot of generality which covers a wide variety of use cases but is nevertheless specific enough to support tools which are both concise and powerful. In this mini-course, we will focus on tidy data.

[Continue](btn:next)

---
> id: pandas
### Pandas

A **data frame** is an object for storing tidy data, and the package which provides data frames in the Python ecosystem is **Pandas**. 

    pre(python-executable)
      | from pydataset import data
      | df = data("iris")
      | type(df)

A data frame's `{py} index` attribute stores the labels of the rows, and `{py} columns` attribute stores the column names. 

    pre(python-executable)
      | df.columns, df.index
    
[Continue](btn:next)

---
> id: step-access-row-col
      
Columns of the data frame can be accessed using index notation or as attributes: 

    pre(python-executable)
      | import pandas as pd
      | data = [[179_335,47.7],[81_274,73.4],[24_590,19.9],[22_131,25.4]]
      | columns = ['population', 'area']
      | index = ['Providence', 'Cranston', 'Newport', 'Bristol']
      | df = pd.DataFrame(data, columns = columns, index = index)
      | df['population'] # or df.population, same thing

Pandas `{py} DataFrame` objects provide two attributes, called `{py} loc` and `{py} iloc`, for accessing entries using names or integers, respectively.

    pre(python-executable)
      | df.loc['Providence',:'area'], df.iloc[0,:1]

Note that slices built with row or column names are inclusive, while integer slices follow the usual Python convention of being exclusive of the upper bound. 

---
> id: five-verbs
### The five verbs of data manipulation

Although data frames support many transformations, we will follow data science legend [Hadley Wickham](gloss:hadley) in suggesting the following six as fundamental. They can be combined to cover most of your data manipulation needs, so you can get up and running quickly in any data manipulation framework by learning how these actions are performed and composed. 

1. **Filter**. Pick rows based on their values.

2. **Sort**. Re-order the rows.

3. **Select**. Choose specific columns.

4. **Transform**. Create new columns from existing ones.

5. **Aggregate**. Reduce the data frame to a single row by applying a function (like `{py} sum`, `{py} min`, `{py} max`, etc.) which maps a column of values to a single value.

6. **Group**. Collect the rows of the data frame into groups. 

The grouping operation is different from the others because it outputs a **grouped data frame** (which can be visualized as a stack of data frames). The other operations can be applied group-by-group. 

---
> id: filter-verb
#### Filter

There are two main ways to filter rows in Pandas. The first is to obtain a column of boolean values and use it to index the rows of the data frame. For example: 

    pre(python-executable)
      | df[df.population > 50_000]

In the last line above, `{py} df.population > 50_000` returns a column with the values `{py} [True, True, False, False]`, and indexing the data frame with a boolean array selects only those rows corresponding to the `{py} True` values. 

We can combine predicates using the usual Python operations for [sets](gloss:python-sets): 

    pre(python-executable)
      | df[(df.population > 50_000) & (df.area > 50)]
      
This approach has some drawbacks: First, we have to repeat the name of the data frame multiple times. This violates the maxim "Don't repeat yourself". Second, computing an expression like `{py} (df.population > 50_000) & (df.area > 50)` requires three array [allocations](gloss:allocation): one for `{py} df.population > 50_000`, one for `{py} df.area > 50`, and one for the `{py} (df.population > 50_000) & (df.area > 50)`. These allocations are unnecessary, since you can imagine just looping over the rows and directly checking the whole condition for each row (although you don't want to do that by hand, because loops in Python are slow). 

Pandas does provide a solution to this problem: the `{py} query` method. You supply your condition as a string, and Pandas makes things efficient for you under the hood:

    pre(python-executable)
      | df.query('population > 50_000 & area > 50')
      
Python variables can be interpolated in query strings using the `{py} @` prefix. For example, the query above could also be written as

    pre(python-executable)
      | min_pop = 50_000
      | df.query('population > @min_pop & area > 50')

---
> id: sort-verb
#### Sort

The `{py} DataFrame` method that sorts values is called `{py} sort_values`. It takes an argument for the column labels (or list of columns labels) to use for sorting, and you can use the `{py} ascending` argument to specify whether the values in that column should be in increasing or decreasing order. 

    pre(python-executable)
      | df.sort_values('population',ascending=False)

If a list of columns is supplied, then each column after the first is used to break ties in the preceding columns: 

    pre(python-executable)
      | d = pd.DataFrame([[3,2],[3,1],[2,4]],columns=['a','b'])
      | d.sort_values(['a','b'])

Note that `{py} sort_values` returns a new data frame. It does not modify the original one. 

---
> id: select-verb
#### Select

To select columns in Pandas, you can just index the data frame with a list of column names: 

    pre(python-executable)
      | df[['population','area']]

If you want to keep all columns *except* specific ones, you can use the `{py} drop` method:       

    pre(python-executable)
      | df.drop('population', axis=1)
      
We have to specify that `{py} 'population'` refers to columns (`{py} axis=1`), because the `{py} drop` method can also be used to drop rows. Like `{py} sort_values`, `{py} drop` doesn't modify the original data frame.

---
> id: transform-verb
#### Transform

We can create new columns in a data frame using the `{py} assign` method. For example: 

    pre(python-executable)
      | df.assign(density = df.population / df.area)
      
If the name of the data frame is quite long, you can avoid having to type it repeatedly by supplying an anonymous function to be applied to the data frame: 

    pre(python-executable)
      | df.assign(density = lambda d: d.population / d.area) \\ 
      |   .assign(**{'inverse density': lambda d: 1/d.density})**

Oops! There was a spurious space after the line continuation backslash. Delete it and run the cell again.

We are using two `{py} assign` calls to create a column called `{py} density` and then a second new column called `{py} inverse density`. (Note how we used [splatting](gloss:splat) to get a space in the column name.)

---
> id: aggregate-verb
#### Aggregate

The `{py} agg` method applies a specified function (called the *aggregation* function) to each column in a data frame. Several aggregation functions are built-in and can be specified using a string: 

| Name | Description   |
| ---- | ------------- |
| `{py} count` | number of entries |
| `{py} sum` | sum of entries |
| `{py} prod` | product of entries |
| `{py} mean` | average |
| `{py} median` | middle entry when sorted |
| `{py} var` | variance |
| `{py} std` | standard deviation |
| `{py} min`  | minimum entry  |
| `{py} max`  | maximum entry |

For example, to find the total population of the four cities in our data frame, we run: 

    pre(python-executable)
      | df.population.agg('sum')

To find the average population and area: 

    pre(python-executable)
      | df.agg('mean')

---
> id: group-verb
#### Group

The aggregation function is a little bland by itself. We often want to apply the aggregation function only to specific rows. For example consider the following transaction log:

| Customer name | Transaction amount | 
| Acme, Inc. | 45.03 | 
| Acme, Inc. | 118.22 | 
| XYZ Widgets | 35.55 | 
| Acme, Inc. | 22.04 | 
| XYZ Widgets | 34.78 | 

What is the total transaction amount for each company? We could filter for each company and aggregate the two resulting data frames, but that would get unwieldy quickly as the number of companies grows. Instead, we **group** the data frame by customer name and then apply the aggregation function: 

    pre(python-executable)
      | columns = ['Customer name', 'Transaction amount']
      | transactions = pd.DataFrame([['Acme, Inc.',45.03],
      |                              ['Acme, Inc.',118.22],
      |                              ['XYZ Widgets',35.55],
      |                              ['Acme, Inc.',22.04],
      |                              ['XYZ Widgets',34.78]],
      |                              columns=columns)
      | transactions.groupby('Customer name').agg('sum')

When a data frame is grouped along a particular column, the resulting grouped data frame is a dictionary-like object whose keys are the unique values of that column and whose values are the data frames obtained by filtering for the given key in that column. For example, `{py} transactions.groupby('Customer name')` maps the key `{py} 'Acme, Inc.'` to the data frame 

<table border="0" class="dataframe">  <thead>    <tr style="text-align: right;">      <th></th>      <th>Customer name</th>      <th>Transaction amount</th>    </tr>  </thead>  <tbody>    <tr>      <th>0</th>      <td>Acme, Inc.</td>      <td>45.03</td>    </tr>    <tr>      <th>1</th>      <td>Acme, Inc.</td>      <td>118.22</td>    </tr>    <tr>      <th>3</th>      <td>Acme, Inc.</td>      <td>22.04</td>    </tr>  </tbody></table>

and `{py} 'XYZ Widgets'` to

<table border="0" class="dataframe">  <thead>    <tr style="text-align: right;">      <th></th>      <th>Customer name</th>      <th>Transaction amount</th>    </tr>  </thead>  <tbody>    <tr>      <th>2</th>      <td>XYZ Widgets</td>      <td>35.55</td>    </tr>    <tr>      <th>4</th>      <td>XYZ Widgets</td>      <td>34.78</td>    </tr>  </tbody></table>

The `{py} agg` method of `{py} DataFrameGroupBy` object operates on each each of these data frames to produce a row, and these rows are collected into a new data frame. The row index for this output data frame comes from the keys of the dictionary-like `{py} DataFrameGroupBy` object. 

::: .exercise
**Exercise**  
Group the flowers in the Iris data set in unit intervals of sepal length and find the average sepal width for each such group. (In other words, one group contains all flowers with sepal length in $[4,5)$, another group has all flowers with sepal length in $[5,6)$, and so on.)

Hint: make a new column to group by.
:::

    pre(python-executable)
      | from pydataset import data
      | iris = data('iris')
      | 
      
    .x-quill

*Solution*. Delete the spaces after each line continuation backslash before running the following block:

    pre(python-executable)
      | from pydataset import data
      | import numpy as np
      | iris = data('iris'); 
      | iris.assign(sepal_length_floor = np.floor(iris["Sepal.Length"])) \\ 
      |     .groupby('sepal_length_floor') \\ 
      |     [['Sepal.Width']] \\ 
      |     .agg('mean')

Line by line, starting from the fourth: we create a new column to group by using the floor function. Then we perform the grouping, select the column we want, and aggregate using the `{py} mean` function. 

[Continue](btn:next)

---
> id: step-other-functions

The other four operations (filter, sort, select, and transform) can be applied to grouped data frames as well. However, only selection works directly on grouped data frames. For the others, the `{py} apply` method is used to operate group-by-group. For example, we can sort by petal length within species as follows:

    pre(python-executable)
      | iris.groupby('Species').apply(lambda d: d.sort_values('Petal.Length'))

---
> id: visualize
## Data Visualization



---
> id: model
## Data Modeling

---
> id: communicate
## Data Communication

