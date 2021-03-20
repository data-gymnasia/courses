# The Data Science Pipeline

> id: intro
> description: Learn the basics of data wrangling, visualization, and modeling in Python.
> color: "#319bbf"
> next: programming-in-julia
> author: Samuel S. Watson

## Introduction

In this mini-course, we will introduce a collection of skills commonly applied to solve data problems in industry and science. These skills correspond to stages of a typical data science project: we **acquire** data, **wrangle** it into a form conducive to further analysis, **visualize** the data to better understand it, **model** the data to gain further insight and make predictions about the process that generated the data, and **communicate** our results to stakeholders.

[Continue](btn:next)

---
> id: step-python

We will be using the Python data science ecosystem for developing the computational pipeline skills: Pandas for data wrangling, Plotly for data visualization, and Scikit-Learn for modeling. These packages are popular enough to be a good investment of your time even if you eventually settle into some other toolchain, because the experience will help you in interviews and when collaborating with the Python users you will inevitably encounter. 

---
> id: acquire
## Acquisition

As a data scientist on the job, you will often be given a data set and a problem to solve. In these situations, obtaining data might not seem like a high priority. However, using external sources in addition to the original data can be a critical source of leverage. For example, if you want to predict a company's customer [churn](gloss:churn) you might supplement the internal customer data with economic or geographic information about the city where each customer lives. 

[Continue](btn:next)

---
> id: step-range-difficulties

The difficulty of obtaining useful data ranges from trivial (your supervisor emails you a file) to epic (years-long clinical trials). An important part of becoming a seasoned data scientist is developing a sense for when the cost of obtaining data will lead to a commensurate problem-solving payoff. Developing your knowledge of useful and readily accessible data sets helps reduce that cost, so in this section we will get you started by making some concrete suggestions for data sources. 

[Continue](btn:next)

---
> id: data-sources

1. **R packages**. Many classic datasets are available as packages in [R](gloss:R). Of particular note is the package `{code} fivethirtyeight`, which includes data for more than 100 articles from the popular data journalism outfit [FiveThirtyEight](https://fivethirtyeight.com). You can use R from within Python using the package [`{code} rpy2`](gloss:rpy2).

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

4. **UC Irvine Machine Learning Repository**. [About 480 datasets](http://archive.ics.uci.edu/ml/index.php), hosted by UC Irvine as a service to the machine learning community.

[Continue](btn:next)

---
> id: academic-torrents

5. **Academic Torrents**. Datasets from academic papers. Includes a particularly well-known dataset for natural language processing: [Enron senior management emails](http://academictorrents.com/details/4697a6e1e7841602651b087d84f904d43590d4ff).

[Continue](btn:next)

---
> id: quandl

6. **Quandl**. A mixture of free and paid [financial datasets](https://www.quandl.com/).

---
> id: wrangle
## Wrangling

Data is said to be in *tidy* format if each row corresponds to an observation and each column corresponds a different observation variable. For example, in the [iris dataset](gloss:iris), each row represents a flower, and the entries of a row specify the flower's species and various measurements made for that flower. Here's the [head](gloss:dataframe-head) of the Iris data frame. 

<!--python
from pydataset import data
data('iris').head().to_html(border=0)
-->
<table border=0 class="dataframe">  <thead>    <tr style="text-align: right;">      <th></th>      <th>Sepal.Length</th>      <th>Sepal.Width</th>      <th>Petal.Length</th>      <th>Petal.Width</th>      <th>Species</th>    </tr>  </thead>  <tbody>    <tr>      <th>1</th>      <td>5.1</td>      <td>3.5</td>      <td>1.4</td>      <td>0.2</td>      <td>setosa</td>    </tr>    <tr>      <th>2</th>      <td>4.9</td>      <td>3.0</td>      <td>1.4</td>      <td>0.2</td>      <td>setosa</td>    </tr>    <tr>      <th>3</th>      <td>4.7</td>      <td>3.2</td>      <td>1.3</td>      <td>0.2</td>      <td>setosa</td>    </tr>    <tr>      <th>4</th>      <td>4.6</td>      <td>3.1</td>      <td>1.5</td>      <td>0.2</td>      <td>setosa</td>    </tr>    <tr>      <th>5</th>      <td>5.0</td>      <td>3.6</td>      <td>1.4</td>      <td>0.2</td>      <td>setosa</td>    </tr>  </tbody></table>

Note that four of the columns are **quantitative** (that is, they contain numerical data), while one is **categorical** (that is, they contain strings which represent categories).

[Continue](btn:next)

---
> id: step-not-tidy-data

Many types of data do not fit naturally into the tidy data framework, like image data and passages of text. However, tidy data occupies a sweet spot of generality which covers a wide variety of use cases but is nevertheless specific enough to support tools which are both concise and powerful. In this mini-course, we will focus on tidy data.

[Continue](btn:next)

---
> id: pandas
### Pandas

A **data frame** is an object for storing tidy data, and the package which provides data frames in the Python ecosystem is **Pandas**. Pandas is built on NumPy, which is the Python library for multi-dimensional [arrays](gloss:array). If you aren't comfortable with the basics of NumPy, a brief detour through [this interactive notebook](https://colab.research.google.com/github/jakevdp/PythonDataScienceHandbook/blob/master/notebooks/02.02-The-Basics-Of-NumPy-Arrays.ipynb) is recommended. 

    pre(python-executable)
      | import pydataset
      | iris = pydataset.data("iris")
      | print(type(iris))
      | iris.head()

A data frame's `{py} index` attribute stores the labels of the rows, and the `{py} columns` attribute stores the column names. 

    pre(python-executable)
      | iris.columns, iris.index
    
[Continue](btn:next)

---
> id: step-access-row-col
      
Columns of the data frame can be accessed using by indexing the data frame with the name of the column. For column names that are valid Python variable names, dot syntax access is also supported: 

    pre(python-executable)
      | import pandas as pd
      | data = [[179_335,47.7],[81_274,73.4],[24_590,19.9],[22_131,25.4]]
      | columns = ['population', 'area']
      | index = ['Providence', 'Cranston', 'Newport', 'Bristol']
      | ri = pd.DataFrame(data, columns = columns, index = index)
      | ri['population'] # or ri.population, same thing

[Continue](btn:next)

---
> id: step-loc-iloc

Pandas `{py} DataFrame` objects provide two attributes, called `{py} loc` and `{py} iloc`, for accessing entries using names or integers, respectively.

    pre(python-executable)
      | ri.loc['Providence',:'area'], ri.iloc[0,:1]

[Continue](btn:next)

---
> id: step-slicing-exercise

Note that slices built with row or column names are inclusive, while integer slices follow the usual Python convention of being exclusive of the upper bound. 

::: .exercise
**Exercise**  
Use the `{py} pydataset` package to load the `{py} 'Boston'` data set. Select all of the columns between `{py} indus` and `{py} rad` and assign the resulting data frame to a new variable. Then select the first 25 rows from that new data frame.
:::

    pre(python-executable)
      | 
      
    x-quill
    
---

*Solution.* We index columns using `{py} loc` and the rows using `{py} iloc`

    pre(python-executable)
      | boston = pydataset.data('Boston')
      | boston_trimmed = boston.loc[:,'indus':'rad']
      | boston_trimmed.iloc[:25,:]

[Continue](btn:next)

---
> id: six-verbs
### The six verbs of data manipulation

Although data frames support many transformations, we will follow the prominent data scientist [Hadley Wickham](gloss:hadley) in suggesting the following six as fundamental. They can be combined to cover most of your data manipulation needs, so you can get up and running quickly in any data manipulation framework by learning how these actions are performed and composed. 

[Continue](btn:next)

---
> id: step-verb-item-filter

1. **Filter**. Pick rows based on their values.

[Continue](btn:next)

---
> id: step-verb-item-sort

2. **Sort**. Re-order the rows.

[Continue](btn:next)

---
> id: step-verb-item-select

3. **Select**. Choose specific columns.

[Continue](btn:next)

---
> id: step-verb-item-transform

4. **Transform**. Create new columns from existing ones.

[Continue](btn:next)

---
> id: step-verb-item-aggregate

5. **Aggregate**. Reduce the data frame to a single row by applying a function (like `{py} sum`, `{py} min`, `{py} max`, etc.) which maps each column of values to a single value.

[Continue](btn:next)

---
> id: step-verb-item-group

6. **Group**. Collect the rows of the data frame into groups. 

[Continue](btn:next)

---
> id: step-verb-item-group-explanation

The grouping operation is different from the others because it outputs a **grouped data frame** object, which can be visualized as a stack of data frames. Here's how the popular data table product *Airtable* presents grouped data frames (using some of the rows from the iris data set above, grouped on species):

<iframe class="airtable-embed" src="https://airtable.com/embed/shrc2wjVuNKqz7QJJ?backgroundColor=cyan" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

The other operations can be applied group-by-group. 

[Continue](btn:next)

::: .exercise
**Exercise**  
Experiment with the interactive table below to practice some of the operations above. You might want to click the "View larger version" icon in the bottom right corner to open the table in a new browser tab. 

1. Use the **Filter** button to select only those flowers whose sepal length is less than 5.0. 

  There are [[22]] such flowers in the data frame (note: the number of rows can be seen in the bottom left corner of the interactive table).
2. Use the **Sort** button to sort by sepal length and then by sepal width (this means that ties in sepal length are broken by looking at the sepal width value).

  The smallest sepal length value is [[4.3]].
3. Use the **Hide fields** button to select only the petal-related and species columns.
4. Remove the sorts and filters (by clicking on those buttons again and then using the small x by each sort or filter), and then use the **Group** button to group the data frame by species. 

  There are [[50]] flowers of each species in the data frame.
5. Click the small downward pointing triangle under the Petal Length column in the Setosa group (where it originally says "Sum 73.1") to change the aggregation function to "Average". Then click the downward pointing triangle to the left of the "setosa" icon to collapse that group. Do the same for the other two groups. 

  The species with the largest average petal length is [[virginica|setosa|versicolor]].
:::

<iframe class="airtable-embed" src="https://airtable.com/embed/shrUtQZE2mQanv9MC?backgroundColor=cyan&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

---
> id: filter-verb
#### Filter

There are two main ways to filter rows in Pandas. The first is to obtain a column of boolean values and use it to index the rows of the data frame. For example: 

    pre(python-executable)
      | ri[ri.population > 50_000]

In the last line above, `{py} ri.population > 50_000` returns a column with the values `{py} [True, True, False, False]`, and indexing the data frame with a boolean array selects only those rows corresponding to the `{py} True` values. 

[Continue](btn:next)

---
> id: step-index-predicates

We can combine predicates using the usual Python operations for [sets](gloss:python-sets): 

    pre(python-executable)
      | ri[(ri.population > 50_000) & (ri.area > 50)]
      
This approach has some drawbacks: First, we have to repeat the name of the data frame multiple times. This violates the programming maxim "Don't repeat yourself". Second, computing an expression like `{py} (ri.population > 50_000) & (ri.area > 50)` requires three array [allocations](gloss:allocation): one for `{py} ri.population > 50_000`, one for `{py} ri.area > 50`, and one for the `{py} (ri.population > 50_000) & (ri.area > 50)`. These allocations are unnecessary, since it is possible to just loop over the rows and directly check the whole condition for each row (although you don't want to program that yourself in Python, because loops in Python are slow). 

[Continue](btn:next)

---
> id: step-query-method

Pandas does provide a solution to this problem: the `{py} query` method. You supply your condition as a string, and Pandas makes things efficient for you under the hood:

    pre(python-executable)
      | ri.query('population > 50_000 & area > 50')

[Continue](btn:next)

---
> id: step-query-interpolation
      
Python variables can be interpolated in query strings using the `{py} @` prefix. For example, the query above could also be written as

    pre(python-executable)
      | min_pop = 50_000
      | ri.query('population > @min_pop & area > 50')
      
::: .exercise
**Exercise**  
Use the `{code} query` method to identify the records in the `{py} 'Boston'` data set which have the property that `{py} indus` is at least 10 and either `{py} medv` is less than 8 or `{py} chas` is 1. 
:::

    pre(python-executable)
      | 
      
    x-quill
    
---
> id: filter-exercise-solution

*Solution.* We use parentheses to group the given logical conditions:

    pre(python-executable)
      | import pydataset
      | boston = pydataset.data('Boston')
      | boston.query('indus >= 10 & (medv < 8 | chas == 1)')

[Continue](btn:next)

---
> id: sort-verb
#### Sort

The `{py} DataFrame` method that sorts values is called `{py} sort_values`. It takes an argument for the column labels (or list of columns labels) to use for sorting, and you can use the `{py} ascending` argument to specify whether the values in that column should be in increasing or decreasing order. 

    pre(python-executable)
      | ri.sort_values('population',ascending=False)

If a list of columns is supplied, then each column after the first is used to break ties in the preceding columns: 

    pre(python-executable)
      | d = pd.DataFrame([[3,2],[3,1],[2,4]],columns=['a','b'])
      | d.sort_values(['a','b'])

Note that `{py} sort_values` returns a new data frame. It does not modify the original one. 

::: .exercise
**Exercise**  
Sort the `{py} 'Boston'` data set in decreasing order of the value in the first column.
:::

    pre(python-executable)
      | 
      
    x-quill
    
---
> id: sort-exercise-solution

*Solution.* We can inspect `{py} columns` or look at the data frame's head to see that the first column is `{py} 'crim'`. Then we sort:

    pre(python-executable)
      | boston = pydataset.data('Boston')
      | boston.sort_values(['crim'], ascending = False)

[Continue](btn:next)

---
> id: select-verb
#### Select

To select columns in Pandas, you can just index the data frame with a list of column names: 

    pre(python-executable)
      | ri[['population','area']]
      
[Continue](btn:next)

---
> id: step-drop-method      

If you want to keep all columns *except* specific ones, you can use the `{py} drop` method:       

    pre(python-executable)
      | ri.drop('population', axis=1)
      
We have to specify that `{py} 'population'` refers to columns (`{py} axis=1`), because the `{py} drop` method's default is to look for rows to drop. Like `{py} sort_values`, `{py} drop` doesn't modify the original data frame.

[Continue](btn:next)

---
> id: step-integer-drop

::: .exercise
**Exercise**  
Select the columns in the Boston data frame which contain floating point numbers (as opposed to integers, which do not print with a decimal point). 
:::

    pre(python-executable)
      |     
      
    x-quill
    
---
> id: select-exercise-solution

*Solution.* We inspect the data frame to find that the columns which are not floats are `{py} 'chas'`, `{py} rad`, and `{py} 'tax'`. So we use drop instead of selecting: 

    pre(python-executable)
      | boston_float_only = boston.drop(['chas', 'rad', 'tax'],axis=1)
      | boston_float_only.head()

As a follow-up, we note that this is a sufficiently common operation that Pandas supplies a convenience method for it: 

    pre(python-executable)
      | import numpy as np
      | boston_float_only = boston.select_dtypes(exclude=['int'])
      | boston_float_only.head()

You can inspect the types of the columns of a data frame using its `{py} dtypes` attribute.

[Continue](btn:next)

---
> id: transform-verb
#### Transform

We can create new columns in a data frame using the `{py} assign` method. For example: 

    pre(python-executable)
      | ri.assign(density = ri.population / ri.area)
      
If the name of the data frame is quite long, you can avoid having to type it repeatedly by supplying an anonymous function to be applied to the data frame: 

    pre(python-executable)
      | ri.assign(density = lambda d: d.population / d.area) \
      |   .assign(**{'inverse density': lambda d: 1/d.density})

We are using two `{py} assign` calls to create a column called `{py} density` and then a second new column called `{py} inverse density`. (Note how we used [splatting](gloss:splat) to get a space in the column name.)

::: .exercise
**Exercise**  
For each observation in the `{py} 'toothpaste'` data set, find the ratio of the difference between means to the square root of the sum of the squares of the standard deviations for conditions "A" and "B". 
:::

    pre(python-executable)
      | 
      
    x-quill
    
---
> id: assign-exercise-solution

*Solution.* Since the formula is quite involved, we use an anonymous function: 

    pre(python-executable)
      | import numpy as np
      | toothpaste = pydataset.data('toothpaste')
      | toothpaste.assign(score = lambda d: 
      |       (d.meanA - d.meanB)/np.sqrt(d.sdA**2 + d.sdB**2))


[Continue](btn:next)

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
      | ri.population.agg('sum')

To find the average population and area: 

    pre(python-executable)
      | ri.agg('mean')

You can also supply a custom aggregation function instead of a string. 

::: .exercise
**Exercise**  
Find the range (the difference between max and min) for each of the four quantitative columns in the `{py} iris` dataset. Try using an anonymous function rather than using the built-in `{py} 'min'` and `{py} 'max'` aggregation functions.
:::

    pre(python-executable)
      | 
      
    x-quill
    
---
> id: range-exercise-solution

*Solution.* We have to drop the categorical column first since we can't compute a range for that. 

    pre(python-executable)
      | import numpy as np
      | import pydataset
      | iris = pydataset.data('iris')
      | iris.drop(['Species'],axis=1).agg(lambda r: np.max(r) - np.min(r))

[Continue](btn:next)

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

The `{py} agg` method of `{py} DataFrameGroupBy` object operates on each each of these data frames to produce a single row, and these rows are collected into a new data frame. The row index for this output data frame comes from the keys of the dictionary-like `{py} DataFrameGroupBy` object. 

::: .exercise
**Exercise**  
Use the interactive table below to perform the same aggregation operation described above (in other words, find the sum of the transaction amounts for each company).
:::

<center>
  <iframe class="airtable-embed" src="https://airtable.com/embed/shrzoImJZEKreaxwn?backgroundColor=cyan&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
</center>

[Continue](btn:next)

---
> id: step-flower-group-exercise

::: .exercise
**Exercise**  
Group the flowers in the Iris data set in unit intervals of sepal length and find the average sepal width for each such group. (In other words, one group contains all flowers with sepal length in $[4,5)$, another group has all flowers with sepal length in $[5,6)$, and so on.)

Hint: make a new column to group by.
:::

    pre(python-executable)
      | import pydataset
      | iris = pydataset.data('iris')
      | 
      
    x-quill

---

*Solution.* We create a new column using the `{py} np.floor` function. Then we perform the grouping, select the column we want, and aggregate using the `{py} mean` function:

    pre(python-executable)
      | import pydataset
      | import numpy as np
      | iris = pydataset.data('iris') 
      | iris.assign(sepal_length_floor = np.floor(iris["Sepal.Length"])) \
      |     .groupby('sepal_length_floor') \
      |     [['Sepal.Width']] \
      |     .agg('mean')

[Continue](btn:next)

---
> id: step-other-functions

We conclude this section by noting that the other four operations (filter, sort, select, and transform) can be applied to grouped data frames as well. However, only selection works directly on grouped data frames. For the others, we use the `{py} apply` method  of the grouped data frame object to operate group-by-group and collect the results into a single data frame. 

For example, we can sort by petal length within species as follows:

    pre(python-executable)
      | iris.groupby('Species').apply(lambda d: d.sort_values('Petal.Length'))

You'll notice in data frame returned above that the row indices are retained from the original data frame. Actually, the group values are also incorporated into the indexing scheme—this is advanced feature of Pandas called a *multi-indexing*. The `{py} reset_index` method is useful for dropping this extra structure and simply re-indexing the rows from 0. We need to supply the value `{py} True` to the keyword argument `{py} drop`, because otherwise the `{py} reset_index` method will try to keep the old indices around as new columns, and that will fail since we already have a `{py} Species` column:

    pre(python-executable)
      | (iris.groupby('Species')
      |      .apply(lambda d: d.sort_values('Petal.Length'))
      |      .reset_index(drop = True))

---
> id: visualize
## Visualization

Data visualization is a way to leverage your visual cortex to gain insight into data. Because vision is such a rich and well-developed interface between the human mind and the external world, visualization is a critical tool for understanding and communicating data ideas.

The standard graphics library in Python is Matplotlib, but here we will use a newer package called *Plotly*. Plotly offers a number of material advantages relative to Matplotlib: (1) figures support interactions like mouseovers and animations, (2) there is support for [genuine](gloss:mpl3d) 3D graphics, and (3) Plotly is not Python-specific: it can be used directly in Javascript or in R or Julia.

If you use Plotly in a Jupyter notebook, the figures will automatically display in an interactive form. Therefore, it is recommended that you follow along using a separate tab with a [Jupyter notebook](https://mybinder.org/v2/gh/data-gymnasia/python-binder/master). However, we will use the function `{py} show` defined in the cell below to display the figures as static images so they can be viewed on this page. 

    pre(python-executable)
      | from datagymnasia import show
      | print("Success!")

[Continue](btn:next)

---
### Scatter plot
> id: step-scatter-example

We can visualize the relationship between two columns of numerical data by associating them with the horizontal and vertical axes of the Cartesian plane and drawing a point in the figure for each observation. This is called a **scatter plot**. In Plotly Express, scatter plots are created using the `{py} px.scatter` function. The columns to associate with the two axes are identified by name using the keyword arguments `{py} x` and `{py} y`.  

    pre(python-executable)
      | import plotly.express as px
      | import pydataset
      | iris = pydataset.data('iris')
      | show(px.scatter(iris,x='Sepal.Width',y='Sepal.Length'))

[Continue](btn:next)

---
> id: step-aesthetic

An **aesthetic** is any visual property of a plot object. For example, horizontal position is an aesthetic, since we can visually distinguish objects based on their horizontal position in a graph. We call horizontal position the `{py} x` aesthetic. Similarly, the `{py} y` aesthetic represents vertical position. 

We say that the `{py} x='Sepal.Width'` argument *maps* the `{py} 'Sepal.Width'` variable to the `{py} x` aesthetic. We can map other variables to other aesthetics, with further keyword arguments, like `{py} color` and `{py} symbol`: 

    pre(python-executable)
      | show(px.scatter(iris,
      |                 x='Sepal.Width',
      |                 y='Sepal.Length',
      |                 color='Species',
      |                 symbol='Species'))
      
Note that we used the same categorical variable (`{py} 'Species'`) to the `{py} color` and `{py} symbol` aesthetics. 

[Continue](btn:next)

---
> id: step-map-new-aesthetic

::: .exercise
**Exercise**  
Create a new data frame by appending a new column called "area" which is computed as a product of petal length and width. Map this new column to the `{py} size` aesthetic (keeping `{py} x`, `{py} y`, and `{py} color` the same as above). Which species of flowers has the smallest petal area? 
:::

    pre(python-executable)
      | 
      
    x-quill
    
---
    
*Solution.* We use the `{py} assign` method to add the suggested column, and we include an additiona keyword argument to map the new column to the `{py} size` aesthetic.

    pre(python-executable)
      | show(px.scatter(iris.assign(area = iris["Petal.Length"] * 
      |                                    iris['Petal.Width']),
      |                 x='Sepal.Width',
      |                 y='Sepal.Length',
      |                 color='Species',
      |                 size='area'))

[Continue](btn:next)

---
#### Faceting
> id: step-facets

Rather than distinguishing species by color, we could also show them on three separate plots. This is called **faceting**. In Plotly Express, variables can be faceted using the `{py} facet_row` and `{py} facet_col` arguments. 

    pre(python-executable)
      | show(px.scatter(iris, 
      |                 x = 'Sepal.Width', 
      |                 y = 'Sepal.Length', 
      |                 facet_col = 'Species'))

[Continue](btn:next)

---
### Line plots
> id: step-line-plot

A point is not the only geometric object we can use to represent data. A *line* might be more suitable if we want to help guide the eye from one data point to the next. Points and lines are examples of plot **geometries**. Geometries are tied to Plotly Express functions: `{py} px.scatter` uses the point geometry, and `{py} px.line` uses the line geometry.

Let's make a line plot using the *Gapminder* data set, which records life expectancy and per-capita GDP for 142 countries. 

    pre(python-executable)
      | import plotly.express as px
      | gapminder = px.data.gapminder()
      | usa = gapminder.query('country == "United States"')
      | show(px.line(usa, x="year", y="lifeExp"))

[Continue](btn:next)

---
> id: step-line-group

The `{py} line_group` argument allows us to group the data by country so we can plot multiple lines. Let's also map the `{py} 'continent'` variable to the `{py} color` aesthetic. 

    pre(python-executable)
      | show(px.line(gapminder, 
      |              x="year", 
      |              y="lifeExp", 
      |              line_group="country", 
      |              color="continent"))

[Continue](btn:next)

---
> id: step-line-plot-exercise
      
::: .exercise
**Exercise**  
Although Plotly Express is designed primarily for data analysis, it can be used for mathematical graphs as well. Use `{py} px.line` to graph the function $x\mapsto \operatorname{e}^x$ over the interval $[0,5]$.

Hint: begin by making a new data frame with appropriate columns. You might find `{py} np.linspace` useful.
:::

    pre(python-executable)
      | 
      
    x-quill

---

*Solution.* We use `{py} np.linspace` to define an array of $x$-values, and we exponentiate it to make a list of $y$-values. We package these together into a data frame and plot it with `{py} px.line` as usual:

    pre(python-executable)
      | import numpy as np
      | import pandas as pd
      | x = np.linspace(0,5,100)
      | y = np.exp(x)
      | df = pd.DataFrame({'x': x, 'exp(x)': y})
      | show(px.line(df, x = 'x', y = 'exp(x)'))

[Continue](btn:next)

---
### Bar plots
> id: step-bar

Another common plot geometry is the *bar*. Suppose we want to know the average petal width for flowers with a given petal length. We can group by petal length and aggregate with the `{py} mean` function to obtain the desired data, and then visualize it with a bar graph: 

    pre(python-executable)
      | show(px.bar(iris.groupby('Petal.Length').agg('mean').reset_index(), 
      |             x = 'Petal.Length', 
      |             y = 'Petal.Width'))

We use `{py} reset_index` because we want to be able to access the index column of the data frame (which contains the petal lengths), and the index is not directly accessible from Plotly Express. Resetting makes the index a normal column and replaces it with consecutive integers starting from 0. 

[Continue](btn:next)

---
> id: step-histogram

Perhaps the most common use of the bar geometry is to make **histograms**. A histogram is a bar plot obtained by *binning* observations into intervals based on the values of a particular variable and plotting the intervals on the horizontal axis and the bin counts on the vertical axis. 

Here's an example of a histogram in Plotly Express.  

    pre(python-executable)
      | show(px.histogram(iris, x = 'Sepal.Width', nbins = 30))

We can control the number of bins with the `{py} nbins` argument. 

[Continue](btn:next)

---
> id: step-histogram-exercise

::: .exercise
**Exercise**  
Does it make sense to map a categorical variable to the `{py} color` aesthetic for a histogram? Try changing the command below to map the species column to `{py} color`. 
:::

    pre(python-executable)
      | show(px.histogram(iris, x = 'Sepal.Width', nbins = 30))
      
    x-quill
    
---
    
*Solution.* Yes, we can split each bar into multiple colors to visualize the contribution to each bar from each category. This works in Plotly Express: 

    pre(python-executable)
      | show(px.histogram(iris, 
      |                   x = 'Sepal.Width', 
      |                   nbins = 30, 
      |                   color = 'Species'))
      
[Continue](btn:next)

---
### Density plots
> id: step-density-plots

Closely related to the histogram is a one-dimensional *density plot*. A density plot approximates the distribution of a variable in a smooth way, rather than the using the [[piecewise constant|linear|quadratic]] function mapping each $x$ value to the height of its histogram bar.

Unfortunately, Plotly Express doesn't have direct support for one-dimensional density plots, so we'll use plotly module called the *figure factory*: 

    pre(python-executable)
      | import plotly.figure_factory as ff
      | show(ff.create_distplot([iris['Sepal.Width']],['Sepal.Width']))
      
The figure factory takes two lists as arguments: one contains the values to use to estimate the density, and the other represents the names of the groups (in this case, we're just using one group). You'll see that the plot produced by this function contains three [[geometries|aesthetics|plot titles]]: the bar plot is a histogram, the line plot represents the density, and the tick marks indicate the individual variable values (the set of tick marks is called a **rug plot**). 

[Continue](btn:next)

---
> id: step-boxplot

If a categorical variables is mapped to the `{py} x` aesthetic, the point geometry fails to make good use of plot space because all of the points will lie on a limited number of [[vertical|horizontal]] lines. As a result, it's common practice to represent the points in each category in some other way. Examples include the boxplot and the violin plot:

    pre(python-executable)
      | show(px.box(iris, x = 'Species', y = 'Petal.Width'))
      
    pre(python-executable)
      | show(px.violin(iris, x = 'Species', y = 'Petal.Width'))
      
The box plot represents the distribute of the `{py} y` variable using five numbers: the min, first quartile, median, third quartile, and max. Alternatively, the min and max are sometimes replaced with upper and lower *fences*, and observations which lie outside are considered outliers and depicted with with points. The plot creator has discretion regarding how to calculate fence cutoffs, but one common choice for the upper fence formula is $\mathrm{Q}_3 + (1.5 \cdot \mathrm{IQR})$, where $\mathrm{Q}_3$ is the third quartile and $\mathrm{IQR}$ is the [interquartile range](gloss:IQR). The corresponding lower fence formula would be [[`Q_1`|`Q_2`]] [[minus|plus]] 1.5 times the [[inter-quartile range|variance|median]].

[Continue](btn:next)

---
> id: step-violin

A violin plot is similar to a boxplot, except that rather than a box, a small [[density plot|histogram]] is drawn instead of the box-and-whisker figure. 

[Continue](btn:next)

---
> id: step-viz-close

In this section we introduced several of the main tools in a data scientist's visualization toolkit, but you will learn many others. Check out the [cheatsheet for ggplot2](https://www.rstudio.com/wp-content/uploads/2015/03/ggplot2-cheatsheet.pdf) to see a much longer list of geometries, aesthetics, and statistical transformations.

---
> id: model
## Modeling

A machine learning **model** is a mathematical description of a relationship between random variables. In this section, we will focus on **supervised learning**, which is the task of predicting the values of one random variable given the values of others. We call the variable to predict the **response variable** and the other variables **features**. 

[Continue](btn:next)

---
> id: step-response-feature

We get information about the joint distribution of the features and response variable in the form of a tidy data frame whose rows represent independent samples from the distribution. These data are called **training data**. 

[Continue](btn:next)

---
> id: human-machine-learning
### Machine learning with no machine

Let's warm up with some supervised *human* learning.

::: .exercise
**Exercise**  
Fill in the missing data in the following data frame. Think of each row as having been randomly sampled from the distribution of a random vector $(X,Y)$ in $\mathbb{R}^2$. 

|x|y|
|--|--|
|3|2|
|4|1|
|-3|8|
|2|3|
|7|-2|
|1|[[4]]|
|6|[[-1]]|
:::

---
> id: step-variance

In the data frame above, not much is clear about the distribution of the random variable $X$. But it does seem reasonable to speculate that $Y = 5 - X$ based on the available data. Based on this observation, we might choose to use $h(x) = 5 - x$ as our **prediction** function for the problem of predicting $Y$ based on the value of $X$. 

[Continue](btn:next)

---
> id: step-not-deterministic

The situation where one random variable is strictly determined by another is rare in practice. Let's try a trickier version of the previous exercise:

::: .exercise
**Exercise**  
Fill in the missing data in the following data frame. Hint: it might help to make a scatter plot.

| x  |  y  |
|----|-----|
|  2 |   1 |
| 13 | 325 |
|  1 |  28 |
|  9 | 190 |
| 20 | 818 |
| 12 | 291 |
| 18 | 592 |
|  9 | 153 |
| -8 |  80 |
|  5 | [[118±50]] |
:::

    pre(python-executable)
      | import plotly.express as px
      | from datagymnasia import show
      | import pandas as pd
      | df = pd.DataFrame({'x': [2, 13, 1, 9, 20, 12, 18, 9, -8],
      |                  'y': [1, 325, 28, 190, 818, 291, 592, 153, 80]})
      | show(px.scatter(df, x = 'x', y = 'y'))
    
---
    
The data in the table above were actually generated from a particular distribution, and the value of $y$ for the last observation happened to be 118. However, all you can really tell from the training data is that it looks like the value is probably between 0 and 200 or so. Because the [conditional variance](gloss:conditional-variance) of $Y$ given $X$ is nonzero, it is not possible to predict $Y$ values exactly given corresponding $X$ values.

[Continue](btn:next)

---
> id: step-predict-expectation

As illustrated in this example, when predicting one random variable $Y$ given another random variable $X$, we accept that we don't have enough information (even with *perfect* knowledge of the joint distribution of $X$ and $Y$) to make an exact prediction. Instead, we typically estimate the [conditional expectation](gloss:conditional-expectation) of $Y$ given $X$. This is a value we should be able to estimate with an error going to zero as the number of observations goes to infinity and we get a clearer picture of the joint distribution of $X$ and $Y$.

[Continue](btn:next)

---
> id: step-bias-variance-tradeoff

The human brain is remarkably well-suited to learning tasks like the one in the previous exercise. It's worth reflecting on some of its insights. Which of the following was closer to your mind's implicit model for how the random variables are related?

    x-picker.rigid
      .item(data-error="underfit" style="width: 600px"): img(src="images/underfit.svg")
      .item(data-error="overfit" style="width: 600px"): img(src="images/overfit.svg")
      .item(style="width: 600px"): img(src="images/justright.svg")

The advantage of the first model is that it's very [[simple|complicated]]. However, (spoiler alert!) the $y$ values for the data points were in fact generated as twice the square of the corresponding $x$ value plus an independent integer selected uniformly at random from $\\{-80,-79,\ldots,79,80\\}$. The step of squaring the $x$ value produces some curviness which is not captured by the straight line. We say that this model is **underfit**: it doesn't match the data well enough because it too simple. 

---
> id: step-overfit

The advantage of the second model is that it passes through [[almost all|all|a few]] of the training points. The disadvantage is that it is clearly taking the locations of these points [[too seriously|not seriously enough]]. If we got more observations, we would would not expect them to continue to fall on the curve. We say that the this model is **overfit**: it matches the training data well but will not generalize to new observations. 

---
> id: step-underfit

The third model represents a compromise between underfitting and overfitting. It's curvy enough to match the training data reasonably well, but not so well that it will fail to generalize to new observations. 

[Continue](btn:next)

---
> id: step-complexity-tradeoff

The tension between underfitting and overfitting is called the **bias-complexity tradeoff**, and it lies at the heart of machine learning. 

[Continue](btn:next)

---
> id: overfitting-exercise

::: .exercise
**Exercise**  
The following two figures represent two machine learning models for predicting a categorical variable. There are two features, represented by horizontal and vertical position in the plane. The response variable can be either 'red x' or 'blue o'. The prediction function is specified by color: points which fall in the red region are predicted to be red, and points which fall in the blue region are predicted to be blue.

Which model correctly classifies more training points?

    x-picker.rigid
      .item(style="width: 400px"): img(src="images/nn-overfit.png")
      .item(data-error="incorrect",style="width: 400px"): img(src="images/nn-not-overfit.png")

Which model is more likely to correctly classify a new observation based on its feature values?

    x-picker.rigid
      .item(data-error="overfit" style="width: 400px"): img(src="images/nn-overfit.png")
      .item(style="width: 400px"): img(src="images/nn-not-overfit.png")

Even with perfect information about the distribution that the data frame rows are sampled from, is it possible to correctly classify new observations with 100% accuracy? [[No|Yes]]
:::

---
> id: step-classification-regression

If the response variable is categorical, then the prediction problem is called a [[**classification**|**regression**]] problem. If the response variable is quantitative, then the prediction problem is called a [[**regression**|**classification**]] problem. 

---
> id: Scikit-Learn
### Scikit-Learn

The examples in the previous section hint at some of the disadvantages of the relying on the human brain to make data predictions: our ability to meaningfully visualize features maxes out pretty quickly. We can visualize only [[3|4|5]] features using distinct spatial dimensions, and other aesthetics like color, size, and shape can handle only a few more. Furthermore, important patterns in the data might not be visually salient in the graphical depictions we come up with.

---
> id: machine-learning-machines

So let's turn to doing machine learning with *machines*. Python's standard machine learning package is called Scikit-Learn. Let's see how it can be used to replicate the regression task you performed above, starting with linear regression. 

[Continue](btn:next)

---
> id: step-ml-in-sklearn

Machine learning models in Scikit-Learn are represented as objects whose class reflects the type of estimator. For example, a linear regression model has class `{py} LinearRegression`. Such objects can be fit to training data using the `{py} fit` method, which takes two arguments: a two-dimensional array or data frame of features and a one-dimensional array of response values. Once the model has been fit, it can `{py} predict` response values for a new two-dimensional array of features:

    pre(python-executable)
      | from sklearn.linear_model import LinearRegression
      | import pandas as pd
      | df = pd.DataFrame({'x': [2, 13, 1, 9, 20, 12, 18, 9, -8],
      |                   'y': [1, 325, 28, 190, 818, 291, 592, 153, 80]})
      | model = LinearRegression()
      | model.fit(df[['x']],df['y'])
      | model.predict([[5]])

This estimate ends up being significantly [[higher|lower]] than the actual response value of 118 for that sample. The linear model underfits the data, and that happens to lead to an overestimate at $x = 5$. 

[Continue](btn:next)

---
> id: step-quadfit

Next let's use `{py} sklearn` to fit the same data with a quadratic polynomial. There is no class for polynomial fitting, because polynomial regression is actually a special case of linear regression: we create new features by computing pairwise products of the original features and then fit a linear model using the new data frame. The coefficients for that model provide the quadratic coefficients of best fit for the original features. 

[Continue](btn:next)

---
> id: step-PolynomialFeatures

In Scikit-Learn, creating new columns for the pairwise products of original columns is achieved using a class called `{py} PolynomialFeatures`. To actually apply the transformation, we use the `{py} fit_transform` method: 

    pre(python-executable)
      | from sklearn.preprocessing import PolynomialFeatures
      | poly = PolynomialFeatures(degree=2)
      | extended_features = poly.fit_transform(df[['x']])
      | extended_features

Now we can use this new array to fit a linear model.

    pre(python-executable)
      | 
      | model = LinearRegression()
      | model.fit(extended_features,df['y'])
      | model.predict([[5]])

Oops! That didn't work because we need to process the input in the same way we processed the training data before fitting the model. 

    pre(python-executable)
      | model.predict([[1,5,25]])
      
This model returns a value which is quite close to the conditional expectation of $Y$ given $X=5$, which is [[50]] (Hint: look back to where you got a peek behind the curtain to see how the $y$ values were generated).

[Continue](btn:next)

---
> id: step-sklearn-pipelines

Sklearn has a solution to the problem of having to apply the same preprocessing steps multiple times (once for training data and again at prediction time). The idea is to bind the preprocessing steps and the machine learning model into a single object. This object is called a **pipeline**. Let's do the same calculation again:

    pre(python-executable)
      | from sklearn.pipeline import Pipeline
      | model = Pipeline([('poly', PolynomialFeatures(degree=2)),
      |                   ('linear', LinearRegression(fit_intercept=False))])
      | model.fit(df[['x']],df['y'])
      | model.predict([[5]])

Much simpler! Note that we turned the [[intercept|slope]] off for the `{py} LinearRegression` model because the first step in the pipeline outputs a constant column (which plays the role of an intercept).

---
> id: step-real-example

Having used toy data to go through some of the basics of `{py} sklearn`, let's fit some models on a real data set on [home prices in Boston](gloss:geron). 

Let's begin by looking at the dataset's documentation.

    pre(python-executable)
      | 
      | import pydataset
      | boston = pydataset.data('Boston')
      | pydataset.data('Boston',show_doc=True)

[Continue](btn:next)

---
> id: step-train-test-split

Our goal will be to predict median housing prices (the column `{py} 'medv'`) based on the other columns in the data frame. However, we already have all of these values! If we want to be able to assess how well we are predicting median housing prices, we need to set some of the data aside for testing. It's important that we do this from the outset, because any work we do with the test data has the potential to influence our model in the direction of working better on the data we have than on actual fresh data.
The arguments `{py} test_size` and `{py} random_state` specify the proportion of data set aside for testing (20\%) and a seed for the random number generator to ensure we reproduce the same split if we run the code again.

    pre(python-executable)
      | 
      | from sklearn.model_selection import train_test_split
      | X_train, X_test, Y_train, Y_test = train_test_split(boston.drop('medv',axis=1),
      |                                                 boston['medv'], 
      |                                                 test_size = 0.2,
      |                                                 random_state = 42)
      | linear = LinearRegression()
      | linear.fit(X_train, Y_train)


[Continue](btn:next)

---
> id: step-testing-data-caution

At this point we'd like to test our dflinear on the testing data we set aside. However, we should be very careful about doing that, because if we repeat that process on many models and select the best, then the testing data have effectively crept into the training loop, and we are no longer confident about how the model will perform on fresh data. 

[Continue](btn:next)

---
> id: step-cross-validation

Instead what we'll do is carve out preliminary testing data from our training data. Then we'll follow the same fitting procedure to train a model on remaining training data. We can do this repeatedly to get a better sense for how our model tends to perform when it sees new data. This process is called **cross-validation**, and Scikit-Learn has built-in methods for it. We'll use a version called $k$-fold cross-validation which partitions the training data into $k$ subsets called *folds* and trains the model with $k-1$ of the folds as training data and the last fold as test data. Each fold takes one turn as the test data, so you get $k$ fits in total.

[Continue](btn:next)

---
> id: step-cross-val-score

We supply the model and the training data to the function `{py} cross_val_score`. We use *negative mean squared error* for assessing how well the model fits the test data. The *mean squared error* refers to the average squared difference between predictions and actual response values, and this value is negated since Scikit-Learn's cross-validation is designed for the convention that a higher score is better (whereas un-negated squared error has the property that [[lower|higher]] is better). The `{py} cv` argument specifies the number of folds.

    pre(python-executable)
      | 
      | import numpy as np
      | from sklearn.model_selection import cross_val_score
      | scores = cross_val_score(linear, X_train, Y_train,
      |                          scoring="neg_mean_squared_error", cv=10)
      | linreg_cv_scores = np.sqrt(-scores)
      | linreg_cv_scores

The average value of the variable we're trying to predict is around [[23±5]], so the model's accuracy is not particularly impressive.

[Continue](btn:next)

---
> id: step-try-decision-trees

We can swap out the linear model for other `{py} sklearn` models to see how they compare. For example, let's try *decision tree regression*, which can account for complex relationships between features by applying branching sequences of rules. 

    pre(python-executable)
      | 
      | from sklearn.tree import DecisionTreeRegressor
      | decisiontree = DecisionTreeRegressor()
      | scores = cross_val_score(decisiontree, X_train, Y_train,
      |                          scoring="neg_mean_squared_error", cv=10)
      | tree_cv_scores = np.sqrt(-scores)
      | tree_cv_scores

    pre(python-executable)
      | 
      | import plotly.express as px
      | from datagymnasia import show
      | results = pd.DataFrame(
      |   {'scores': np.hstack((linreg_cv_scores,
      |                        tree_cv_scores)),
      |    'model': np.hstack((np.full(10,'linear'),
      |                        np.full(10,'tree')))}
      | )
      | 
      | show(px.histogram(results, x = 'scores', color = 'model', barmode = 'group'))

[Continue](btn:next)

---
> id: step-try-random-forest

Let's try one more model: the *random forest*. As the name suggests, random forests are made up of many decision trees. 

    pre(python-executable)
      | from sklearn.ensemble import RandomForestRegressor
      | randomforest = RandomForestRegressor()
      | scores = cross_val_score(randomforest, X_train, Y_train,
      |                          scoring="neg_mean_squared_error", cv=10)
      | forest_cv_scores = np.sqrt(-scores)
      | forest_cv_scores

[Continue](btn:next)

---
> id: step-model-comparison

Now let's compare all three models:

    pre(python-executable)
      | results = pd.DataFrame(
      |     {'scores': np.hstack((linreg_cv_scores,
      |                           tree_cv_scores,
      |                           forest_cv_scores)),
      |      'model': np.hstack((np.full(10,'linear'),
      |               np.full(10,'tree'),
      |               np.full(10,'forest')))}
      | )
      | show(px.histogram(results, x = 'scores', color = 'model', barmode = 'group'))

According to this bar chart, the best model among these three is the [[random forest|linear model|decision tree]], while the second best is the [[linear model|decision tree|random forest]]. Let's check whether that holds up when we finally use the test set:

    pre(python-executable)
      | 
      | linear.fit(X_train, Y_train)
      | print(np.mean((linear.predict(X_test) - Y_test)**2))
      | decisiontree.fit(X_train, Y_train)
      | print(np.mean((decisiontree.predict(X_test) - Y_test)**2))
      | randomforest.fit(X_train, Y_train)
      | print(np.mean((randomforest.predict(X_test) - Y_test)**2))

Are these results expected? Discuss.

    x-quill

---
> id: hyperparameter-tuning
### Hyperparameter tuning

A *hyperparameter* is a value which impacts the behavior of a model but which is held fixed during the fitting process. For example, if you fit a polynomial of degree $n$ to a set of data, then the coefficients of the polynomial are parameters and $n$ is a hyperparameter. 

It's ultimately up to the data scientist to make good choices for hyperparameter values. However, you can automate this process by getting Scikit-Learn to search through a collection of values and return the best ones (selected according to cross-validation results). 

[Continue](btn:next)

---
> id: step-hyperparameter-search

The hyperparameters for a random forest include `{py} n_estimators` (the number of trees in the forest) and `{py} max_features` (the number of features that each branch in each decision tree is allowed to consider). `{py} GridSearchCV` is a Scikit-Learn class for performing hyperparameter searches. It does cross-validation for every combination of the supplied parameters (hence *grid* in the name).

    pre(python-executable)
      | 
      | from sklearn.model_selection import GridSearchCV
      | param_grid = [
      |     {'n_estimators': [3, 10, 30], 'max_features': [2, 4, 6, 8]},
      | ]
      | grid_search = GridSearchCV(randomforest, param_grid, cv=5,
      |                            scoring='neg_mean_squared_error')
      | 
      | grid_search.fit(X_train, Y_train)
      | grid_search.best_params_

[Continue](btn:next)

---
> id: step-moving-on

Although there's a lot more to know about data preparation and modeling, we've seen some of the basic elements in action: do any necessary preprocessing, prepare the data for modeling using a train-test split, fit a model to the data, assess models using cross-validation, and choose model hyperparameters using a grid search. 

As you gain experience, the wrangling, visualization, and modeling phases will intertwine: you wrangle to get a better visualization and to prepare data for the model, you gain modeling insights from visualization, and your preliminary modeling results suggest visualizations to investigate. The process of navigating fluidly between wrangling, visualization, and modeling is called **exploratory data analysis**. 

---
> id: communicate
## Communication

Once you've decided on a model, the next step is to use it to actually solve your problem. For example, perhaps the housing pricing prediction is part of a real estate app. In that case, you would need to incorporate your model into the app. Typically you would have an app development team with whom to discuss the best way to do that, since the details would often depend on various technical aspects of how the app works. 

[Continue](btn:next)

---
> id: step-informing-business-decisions

Another common machine learning use case is informing business decisions. Typically, the people ultimately responsible for those decisions will want as robust an understanding as possible of the relevant details about how the model works and how reliable its predictions are. The data scientist is responsible for describing their process clearly and being forthright about any causes for concern. It might also be important at this stage to be able to think of machine learning models in more specific terms than "something that can be trained in Scikit-Learn". 

You might be asked to give a report or a presentation or both, and your ability to have an impact in your organization might depend on your ability to inspire confidence through these media. It's a good idea to begin practicing supporting your quantitative work with clear explanations, well before the stakes are high. 

[Continue](btn:next)

---
> id: step-data-science-report-advice

Here are a few tips for writing about your data analysis:

1. **Know your audience.** Learning to anticipate what will be understandable and meaningful to your readers is one of the most important skills for any sort of writing. It takes practice, and it requires targeting a specific audience throughout the writing process. If in doubt, provide an explanation rather than assuming your reader will be familiar with a necessary idea.

[Continue](btn:next)

---
> id: step-narrative-cohesion

2. **Prioritize narrative cohesion**. You don't want a report to read like a laundry list of things you did. The reader should be able to easily identify the motivating question, follow idea threads from section to section, appreciate any surprises, and spend attention on various components in proportion to their actual importance. 

[Continue](btn:next)

---
> id: step-dont-waste-space

3. **Don't waste space**. Leave out stuff if it really doesn't matter. No one can appreciate dozens of lines of data frame printouts, so they should not appear in a report. If it's important to show what a data frame looks like, you might print its head. The same goes for figures: it takes time for the reader to absorb the lessons of a graphic, so you want to write explicit captions to facilitate that process. It's also important to be mindful of reader fatigue. If you have 20 plots related to the same idea, you probably need to identify a handful of especially useful ones and do without the rest. 

[Continue](btn:next)

---
> id: step-check-for-typos

4. **Check for typos**. Readers will, subconsciously or otherwise, take your work less seriously if it is riddled with errors. Use a service like Grammarly or a colleague who will proofread your work to help make sure it is grammatically and typographically accurate. 

[Continue](btn:next)

---
> id: communication-exercise

::: .exercise
**Exercise**  
Read [this report](https://data-gymnasia.github.io/report-examples/bad-example.html) and [this report](http://cs229.stanford.edu/proj2014/Adam%20Abdulhamid,%20Ivaylo%20Bahtchevanov,%20Peng%20Jia,Life%20Expectancy%20Post%20Thoracic%20Surgery.pdf). Make five positive or negative observations about each report. It's OK if your observations are mostly negative about one and mostly positive about the other.
:::

    x-quill

---

### Bon voyage
> id: step-bon-voyage

This course has been a very brief introduction to the data science pipeline. If you try to tackle a real data science problem, you will find that there are many important skills that we did not develop (for example, handling missing data or making categorical variables quantitative for purposes of training a model). However, getting a survey of the full pipeline will serve as a useful frame of reference as you learn more data science from more in-depth sources. My top recommendations are *Hands-on Machine Learning with Scikit-Learn and TensorFlow* by Aurélien Geron for Python, and the free online book [*Introduction to Data Science*](http://rafalab.github.io/dsbook) by Rafael Irizarry for R.
