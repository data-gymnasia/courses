
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
      |   .assign(**{'inverse density': lambda d: 1/d.density})** DELETE

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
      
    x-quill

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

Data visualization is a way to leverage your visual cortex to gain insight into data. Because vision is such a rich and well-developed interface between the human mind and the external world, visualization is a critical tool for understanding and communicating data ideas.

The standard graphics library in Python is Matplotlib, but we will use a newer package called *Plotly*. Plotly offers a number of material improvements over Matplotlib: (1) figures support interactions like mouseovers and animations, (2) there is support for [genuine](gloss:mpl3d) 3D graphics, and (3) Plotly is not Python-specific: it can be used directly in Javascript or in R or Julia. 

If you use Plotly in a Jupyter notebook, the figures will automatically display in an interactive form. Therefore, it is recommended that you follow along using a separate tab with a [Jupyter notebook](https://mybinder.org/v2/gh/data-gymnasia/python-binder/master). However, we will use the function `{py} show` defined in the cell below to display the figures as static images so they can be viewed on this page. 

    pre(python-executable)
      | from IPython.display import SVG, display
      | def show(fig):
      |     filename = "my-figure.svg"
      |     fig.write_image(filename)
      |     return display(SVG(filename))

[Continue](btn:next)

---
> id: step-scatter-example

We can visualize the relationship between two columns of numerical data by associating them with the horizontal and vertical axes of the Cartesian plane and drawing a point in the figure for each observation. This is called a **scatter plot**. In Plotly Express, scatter plots are created using the `{py} px.scatter` function. The columns to associate with the two axes are identified by name using the keyword arguments `{py} x` and `{py} y`.  

    pre(python-executable)
      | show(px.scatter(iris,x='Sepal.Width',y='Sepal.Length'))

[Continue](btn:next)

---
> id: step-aesthetic

An **aesthetic** is any visual property of a plot object. For example, horizontal position is an aesthetic, since we can visually distinguish objects based on their horizontal position in a graph. We call horizontal position the `{py} x` aesthetic. Similarly, the `{py} y` aesthetic represents vertical position. 

We say that the `{py} x='Sepal.Width'` argument *maps* the `{py} 'Sepal.Width'` variable to the $x$ **aesthetic**. We can map other variables to other aesthetics, with further keyword arguments, like `{py} color` and `{py} symbol`: 

    pre(python-executable)
      | show(px.scatter(iris,x='Sepal.Width',y='Sepal.Length',
      |                 color='Species',symbol='Species'))
      
Note that we used the same categorical variable (`{py} 'Species'`) to the `{py} color` and `{py} symbol` aesthetics. 

::: .exercise
**Exercise**  
Create a new data frame by appending a new column called "area" which is computed as a product of petal length and width. Map this new column to the `{py} size` aesthetic (keeping `{py} x`, `{py} y`, and `{py} color` the same as above). Which species of flowers has the smallest petal area? 
:::

    pre(python-executable)
      | 
      
    x-quill
    
*Solution*. 

    pre(python-executable)
      | show(px.scatter(iris.assign(area = iris["Petal.Length"]*iris['Petal.Width']),
      | x='Sepal.Width',y='Sepal.Length',color='Species',size='area'))* DELETE

[Continue](btn:next)

---
> id: step-facets

Rather than distinguishing species by color, we could also show them on three separate plots. This is called **faceting**. In Plotly Express, variables can be faceted using the `{py} facet_row` and `{py} facet_col` arguments. 

    pre(python-executable)
      | show(px.scatter(iris, x = 'Sepal.Width', y = 'Sepal.Length', facet_col = 'Species'))

[Continue](btn:next)

---
> id: step-line

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
      | show(px.line(gapminder, x="year", y="lifeExp", line_group="country", color="continent"))
      
::: .exercise
**Exercise**  
Although Plotly Express is designed primarily for data analysis, it can be used for mathematical graphs as well. Use `px.line` to graph the function $x\mapsto \operatorname{e}^x$ over the interval $[0,5]$.

Hint: begin by making a new data frame with appropriate columns. You might find `{py} np.linspace` useful.
:::

    pre(python-executable)
      | 
      
    x-quill

*Solution*. We use `{py} np.linspace` to define an array of $x$-values, and we exponentiate it to make a list of $y$-values. We package these together into a data frame and plot it with `{py} px.line` as usual:

    pre(python-executable)
      | import numpy as np
      | import pandas as pd
      | x = np.linspace(0,5,100)
      | y = np.exp(x)
      | df = pd.DataFrame({'x': x, 'exp(x)': y})
      | show(px.line(df, x = 'x', y = 'exp(x)'))

[Continue](btn:next)

---
> id: step-bar

Another common plot geometry is the *bar*. Suppose we want to know the average petal width for flowers with a given petal length. We can group by petal length and aggregate with the `{py} mean` function to obtain the desired data, and then visualize it with a bar graph: 

    pre(python-executable)
      | px.bar(iris.groupby('Petal.Length').agg('mean').reset_index(), 
      |        x = 'Petal.Length', y = 'Petal.Width')

We use `{py} reset_index` because we want to be able to access the index column of the data frame (which contains the petal lengths), and the index is not directly accessible from Plotly Express. Resetting makes the index a normal column and replaces it with consecutive integers starting from 0. 

[Continue](btn:next)

---
> id: step-histogram

Perhaps the most common use of the bar geometry is to make **histograms**. A histogram is a bar plot obtained by *binning* observations into intervals based on the values of a particular variable and plotting the intervals on the horizontal axis and the bin counts on the vertical axis. 

Here's an example of a histogram in Plotly Express.  

    pre(python-executable)
      | px.histogram(iris, x = 'Sepal.Width', nbins = 30)

We can control the number of bins with the `{py} nbins` argument. 

::: .exercise
**Exercise**  
Does it make sense to map a categorical variable to the `{py} color` aesthetic for a histogram? Try changing the command below to map the species column to `{py} color`. 
:::

    pre(python-executable)
      | px.histogram(iris, x = 'Sepal.Width', nbins = 30)
      
    x-quill
    
*Solution*. Yes, we can split each bar into multiple colors to visualize the contribution to each bar from each category. This works in Plotly Express: 

    pre(python-executable)
      | px.histogram(iris, x = 'Sepal.Width', nbins = 30, color = 'Species')
      
[Continue](btn:next)

---
> id: step-density-plots

Closely related to the histogram is a one-dimensional *density plot*. A density plot approximates the distribution of a variable in a smooth way, rather than the using the [[piecewise constant|linear|quadratic]] function mapping each $x$ value to the height of its histogram bar.

Unfortunately, Plotly Express doesn't have direct support for one-dimensional density plots, so we'll use plotly module called the *figure factory*: 

    pre(python-executable)
      | import plotly.figure_factory as ff
      | ff.create_distplot([iris['Sepal.Width']],['Sepal.Width'])
      
The figure factory takes two lists as arguments: one contains the values to use to estimate the density, and the other represents the names of the groups (in this case, we're just using one group). You'll see that the plot produced by this function contains three [[geometries|aesthetics|plot titles]]: the bar plot is a histogram, the line plot represents the density, and the tick marks indicate the individual variable values (the set of tick marks is called a **rug plot**). 

[Continue](btn:next)

---
> id: step-boxplot

If a categorical variables is mapped to the `{py} x` aesthetic, the point geometry fails to make good use of plot space because all of the points will lie on a limited number of [[vertical|horizontal]] lines. As a result, it's common practice to represent the points in each category in some other way. Examples include the boxplot and the violin plot:

    pre(python-executable)
      | px.box(iris, x = 'Species', y = 'Petal.Width')
      
    pre(python-executable)
      | px.violin(iris, x = 'Species', y = 'Petal.Width')
      
The box plot represents the distribute of the `{py} y` variable using five numbers: the min, first quartile, median, third quartile, and max. Alternatively, the min and max are sometimes replaced with upper and lower *fences*, and observations which lie outside are considered outliers and depicted with with points. The plot creator has discretion regarding how to calculate fence cutoffs, but one common choice for the upper fence formula is $\mathrm{Q}_3 + (1.5 \cdot \mathrm{IQR})$, where $$\mathrm{Q}_3$ is the third quartile and $\mathrm{IQR}$ is the [interquartile range](gloss:IQR). The corresponding lower fence formula would be [[`Q_1`|`Q_2`]] [[minus|plus]] 1.5 times the [[inter-quartile range|variance|median]].

[Continue](btn:next)

---
> id: step-violin

A violin plot is similar to a boxplot, except that rather than a box, a small [[density plot|histogram]] is drawn instead. 

[Continue](btn:next)
      
---
> id: model
## Data Modeling



---
> id: communicate
## Data Communication

