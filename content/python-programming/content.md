
# Programming in Python

> id: intro
## Introduction

In this course, we will develop mathematical ideas in concert with corresponding computational skills. This relationship is symbiotic: writing programs is an important ingredient for applying mathematical ideas to real-world problems, but it also helps us explore and visualize math ideas in ways that go beyond what we could achieve with pen, paper, and imagination. 

_{button.next-step} Continue_

---

We will use the world's most popular programming language for data science: **Python**. Python is a general-purpose language with a large user base in the software engineering world. With the emergence of a powerful stack of scientific computing packages since the early 2000s, it has emerged as a language of choice among data scientists as well.

_{button.next-step} Continue_

---

### Installation

There are several ways to access Python:

1. **Inline**. This course will let you execute Python code blocks in the webpage (thanks to [Juniper](https://github.com/ines/juniper) and [Binder](https://mybinder.org)). So if you don't want to install anything yet, you don't have to. (However, the first cell you run on any given page will be slow with this method, since your environment has to be launched behind the scenes on Binder's servers.)

_{button.next-step} Continue_

---

2. **CoCalc**. If you want a complete environment without having to install anything locally, [CoCalc](https://cocalc.com) is a batteries-included, community-oriented platform for open-source mathematical and scientific computing. You can use it for free with limited functionality, and it's $14 per month to support the project and get paid account features.

_{button.next-step} Continue_

---

3. **Binder**. You can also run Python code in the cloud on the Binder website. To launch with a set of packages tailored to this course, [click here](https://mybinder.org/v2/gh/sswatson/simple-python-stack/master).

_{button.next-step} Continue_

---

4. **Anaconda**. Python is bundled with its system of scientific computing packages and a system for managing your Python environment in a distribution called [Anaconda](https://www.anaconda.com/). This is the recommended way to install Python on your own machine. [Download](https://www.anaconda.com/distribution) and launch the installer to set it up on your machine. 

_{button.next-step} Continue_

---

### Usage

Once you have Python installed, there are several ways to interact with it. 

1. **REPL**. Launch a read-eval-print loop from the command line. Any code you enter will be executed immediately, and any values returned by your code will be displayed. To start a session, open your operating system's Terminal and run _{code.language-python}python_ or _{code.language-python}ipython_ (the latter being more colorful and having more features). 

_{button.next-step} Continue_

---

2. **Script**. Save a file called _{code}example.py_ and run _{code}python example.py_ from the command line (in the same directory as the file) to execute all the code in the script.

_{button.next-step} Continue_

---

3. **Jupyter**. Like a REPL, but allows inserting text and math expressions, grouping code into blocks, etc. This is the interface provided by [Binder](https://mybinder.org/v2/gh/sswatson/simple-python-stack/master), and you can launch a notebook locally by running _{code.language-python}jupyter notebook_ from the command line (assuming you have Anaconda installed). 

_{button.next-step} Continue_

---

4. **Integrated development environment (IDE)**. Essential for extensive software development projects, an IDE provides an editor for writing code, conveniences to help you code more efficiently, and a debugger to help you fix your mistakes. There are many IDEs for Python, including PyCharm, Visual Studio Code, and Atom. 

_{button.next-step} Continue_

---

::: .exercise
**Exercise**.  
Sort the following Python interaction modes in the order in which they appear in this video. 

    center: video(src="images/jupyter-script-repl.mp4" width="75%" controls)
    
    x-sortable
      .item.md(data-index="1") REPL
      .item.md(data-index="2") script
      .item.md(data-index="0") Jupyter

:::

---

> id: basics
## Basics

Let's begin begin by developing some basic vocabulary for the elements of a program. This section is an overview: will develop some of these ideas in greater depth in later sections.

_{button.next-step} Continue_

---

### Objects

A **object** is a fundamental entity that may be manipulated by a program. Objects have **types**; for example, _{code.language-python}5_ is an _{code.language-python}int_ and _{code.language-python}"Hello world!"_ is a _{code.language-python}str_ (short for "string"). Types are important for the computer to keep track of, since objects are stored differently depending on their type. 

_{button.next-step} Continue_

---

You can check the type of an object using _{code.language-python}type_. For example, running _{code.language-python}type("hello")_ gives _{code.language-python}str_.

_{button.next-step} Continue_

---

::: .exercise
**Exercise**.  
Use the code block below to find the type of _{code.language-python}1.0_. Does _{code.language-python}1.0_ have the same type as _{code.language-python}1_? [[No|Yes]]
:::

    pre(data-executable)
      | # replace this text with code and press enter while holding shift to run

<p></p>
      
---

### Variables

A **variable** is a name used to refer to an object. We can **assign** a value (say _{code.language-python}41_) to a variable (say _{code.language-python}age_) as follows: 

    pre: code.language-python
      | age = 41

_{button.next-step} Continue_

---

Variable names must begin with an underscore or letter and contain only letters, numbers, underscores after that. Letters may be uppercase or lowercase, and the case matters. For example _{code.language-python}extractValues0_ is [[a valid|an invalid]] variable name, and _{code.language-python}stop!_ is [[an invalid|a valid]] variable name. 

_{button.next-step} Continue_

---

The object assigned to a given variable may be changed as many times as desired with further assignments.

::: .exercise
**Exercise**.  
Find the value of _{code.language-python}x_ at the end of the following block of code. [[3]]

    pre: code.language-python
      | x = 3
      | y = x
      | x = 2
      | x = y
    
:::

---

*Solution*. The value 3 is assigned to _{code.language-python}x_ and then also to _{code.language-python}y_ on the second line. After the third line, the value assigned to _{code.language-python}x_ is 2, and then after the fourth line it's _{code.language-python}3_ again, since the value associated with _{code.language-python}y_ is still 3 when the fourth line is executed. 

_{button.next-step} Continue_

---

::: .exercise
**Exercise**.  
Use the code block below to find out what happens when you try to use a variable that hasn't had any object assigned to it: you get a [[Name]]Error.

:::

    pre(data-executable)
      | num_carrots = 4
      | num_Carrots

---

<p></p>

### Functions

A **function** performs a particular task. For example, _{code.language-python}print(x)_ writes a string representation of the value of the variable _{code.language-python}x_ to the screen. 

Prompting a function to perform its task is referred to as **calling** the function. Functions are called using parentheses following the function's name, and any objects which are needed by the function are supplied between these parentheses, separated by commas. These objects are called **arguments**. 

_{button.next-step} Continue_

---

Some functions, like _{code.language-python}print_ are built into the language and are always available. You may also define your own functions using _{code.language-python}def_:

    pre(data-executable)
      | def printtwice(x):
      |     print(x)
      |     print(x)
      | 
      | 
      | printtwice("hey")
      
<p></p>

_{button.next-step} Continue_

---

_{code.language-python}def_ is an example of a **keyword**: a name with a special meaning in the language (and which cannot be used as a variable name). 

_{button.next-step} Continue_

---
      
A function may perform an action, like _{code.language-python}printtwice_, or it may **return** an object. For example, after the following code block is run, the object _{code.language-python}28_ will be assigned to the variable _{code.language-python}y_. 

    pre: code.language-python
      | def add_one(x):
      |     return x + 1
      | 
      | 
      | y = 20 + add_one(7)
      
_{button.next-step} Continue_

---
            
The variable name _{code.language-python}x_ in the above block is called a **parameter**. Parameters play the same role as dummy variables in the definition of a mathematical function (for example, when the squaring function is defined using the notation `f(x) = x^2`).

_{button.next-step} Continue_

--- 

An **operator** is a special kind of function that can be called in a special way. For example, the multiplication operator _{code.language-python}*_ is called using the mathematically familiar *infix notation* _{code.language-python}3 * 5_ rather than _{code.language-python}*(3,5)_.

_{button.next-step} Continue_

--- 

:::Exercise
**Exercise**  
Arrange the operation descriptions below in order, according the corresponding Python operator in the list _{code}+, *, **, //, /_. You might need to experiment using the code block below. 

    x-sortable
      .item.md(data-index="3") integer division (quotient only; no remainder)
      .item.md(data-index="0") addition      
      .item.md(data-index="1") multiplication
      .item.md(data-index="2") exponentiation
      .item.md(data-index="4") division (ordinary real-number division)
      
:::

    pre(data-executable)
      | 6 + 11
      | 3 * 4
      | 2**5
      | 7//2
      | 7/2

---

<p></p>

### Statements and expressions

An individual executable unit of code in Python is called a **statement**. For example, the assignment _{code.language-python}age = 41_ is a statement. Statements may include **expressions**, which are a combination of values, variables, operators, and function calls that a language interprets and **evaluates** to a value. For example, _{code.language-python}1 + age + abs(3*-4)_ is an expression which evaluates to [[54]].

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
* _{code.language-python}def f(x): return x*x_ is [[a statement|an expression]]
* _{code.language-python}2 + 3*f(4)_ is [[an expression|a statement]]
* _{code.language-python}y = 13_ is [[a statement|an expression]]
* _{code.language-python}myName = "John" + "Doe"_ is [[a statement whose execution involves evaluating an expression|an expression]]
:::

    script(src='/juniper.min.js')
    script
      include juniper-setup.js
      
---

> id: types
## Types

Python, like most programming languages, has built-in types for handling common data like numbers and text. 

_{button.next-step} Continue_

---

### Numbers

As discussed in the previous section, a numerical value can be either an _{code.language-python}int_ or a _{code.language-python}float_. We can represent integers exactly, while storing a real number as a float often requires rounding slightly (typically around $10^{-15}$ times the absolute value of the number, unless the number is rational with a power of 2 in the denominator—such numbers can typically be represented exactly).

_{button.next-step} Continue_

---

A number is stored as a float or integer according to whether it contains a decimal point, so if you want the value 6 to be stored as a _{code.language-python}float_, you should write it as _{code.language-python}6.0_. 

Numbers can be compared using the operators _{code.language-python}==,>,<,<=,>=_. 

::: .exercise
**Exercise**  
What is the type of the object returned by _{code.language-python}1 == 2_? [[bool]]
:::

    pre(data-executable)
      | 1 == 2

---

<p></p>
      
::: .exercise
**Exercise**  
_{code.language-python}x == 1_ is [[an expression|a statement]] which returns _{code.language-python}True_ or _{code.language-python}False_ according to whether [[the object assigned to x is equal to 1|the string "x" is equal to 1]]. Meanwhile, _{code.language-python}x = 1_ is [[a statement|an expression]] that [[assigns the object 1 to x|compares x to 1]].
:::

---

### Strings

Textual data is represented using a sequence of characters called a **string**. We can create a string object by enclosing the desired sequence of characters in quotation marks: _{code.language-python}a = "this is a string"_. Such a quote-enclosed string of characters in a Python file is called a **string literal**. String literals can also be delimited by triple quotes, which can be useful for multi-line strings and for strings containing quotes. 

    pre: code.language-python
      | """
      | This is a multiline comment. 
      | It can have "quotes", no problem.
      | """
      | 
      | "This is an ordinary string. \"Quotes\" have to be escaped with a backslash"

_{button.next-step} Continue_

---

We can find the number of characters in a string with the _{code.language-python}len_ function: _{code.language-python}len("hello")_ returns [[5]]. 

---
 
We can concatenate two strings with the addition operator (_{code.language-python}*_): _{code.language-python}"Hello " + "World"_. 

_{button.next-step} Continue_

---

We can return the first character in a string _{code.language-python}s_ using the expression _{code.language-python}s[0]_, the second element using _{code.language-python}s[1]_, and so on. We can get the substring from the third to the eight character using _{code.language-python}s[3:9]_. Note that the 9 is one past the index where we want to stop. 

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
For which values of _{code.language-python}a_ and _{code.language-python}b_ does the expression _{code.language-python}"Hello World"[a:b] == "o Wo"_ return _{code.language-python}True_? a = [[4]] and b = [[8]]
:::

    pre(data-executable)
      | "Hello World"[a:b]

---

<p></p>
      
::: .exercise
**Exercise**  
If either _{code.language-python}a_ or _{code.language-python}b_ is omitted in the expression _{code.language-python}s[a:b]_ (where _{code.language-python}s_ is a string), what happens? Experiment using the code block above. 
:::

_{button.next-step} Continue_

---

*Solution*. Omitting _{code.language-python}a_ or _{code.language-python}b_ has the effect of setting _{code.language-python}a = 0_ or _{code.language-python}b = len(s)_. 

_{button.next-step} Continue_

---

### String interpolation

We can insert the value of a variable into a string using *string interpolation*. There are several ways to do this in Python, but perhaps the simplest is to place an _{code.language-python}f_ character immediately before the opening quotation mark. A string literal modified in this way is called an *f-string*, or *formatted string literal*. Any parts of an f-string between curly braces are evaluated, and their string representations are inserted into the string at that point. 

    pre(data-executable)
      | x = 11
      | print(f"The quotient when x is divided by 3 
      |         is {x//3} and the remainder is {x % 3}")
      
::: .exercise
**Exercise**  
Use string interpolation to write a line of code which prints _{code.language-python}multiplying by 6.2 yields 12.4_ if _{code.language-python}2_ is assigned to the variable _{code.language-python}A_ and prints _{code.language-python}multiplying by 6.2 yields 18.6_ if _{code.language-python}3_ is assigned to _{code.language-python}A_. 
:::

_{button.next-step} Continue_

---

*Solution*. The expression _{code.language-python}print(f"multiplying by 6.2 yields {6.2*x}")_ works. 

_{button.next-step} Continue_

---

### Booleans

A **bool** is a special type whose only values are _{code.language-python}True_ and _{code.language-python}False_. The fundamental operators that can be used to combine boolean values are _{code.language-python}and_, _{code.language-python}or_, and _{code.language-python}not_. 

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Does Python convert types when doing equality comparison? In other words, does _{code.language-python}1 == 1.0_ return _{code.language-python}True_ or _{code.language-python}False_? 
:::

*Solution*. Yes, Python does convert types for equality comparison. So _{code.language-python}1 == 1.0_ returns _{code.language-python}True_. 

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Write a one-line function which takes 3 bools as arguments and returns _{code.language-python}True_ if and only if either 

1. Both of the first two arguments are _{code.language-python}True_ , or 
2. The third argument is _{code.language-python}False_
:::

_{button.next-step} Continue_
  
---

*Solution*. Here's an example of a simple way to do it: 

    pre: code.language-python
      | def f(a,b,c):
      |     return a and b or not c

Be wary of comparisons of the form _{code.language-python}a == True_ or _{code.language-python}b == False_. These are equivalent to _{code.language-python}a_ and _{code.language-python}not b_, respectively, assuming _{code.language-python}a_ and _{code.language-python}b_ are both bools. The more succinct versions are preferred. 

_{button.next-step} Continue_

---

### Exercises

::: .exercise
**Exercise**  

Write a Python expression which computes $\frac{1}{a+\frac{2}{3}}$ where $a$ is equal to the number of characters in the string _{code.language-python}"The quick brown fox jumped over the lazy dog"_

:::

    pre(data-executable)
      | 

_{button.next-step} Continue_

---

*Solution*. We store the length of the given string in a variable _{code.language-python}a_ and evaluate the given expression as follows: 

    pre: code.language-python
      | a = length("The quick brown fox jumped over the lazy dog")
      | 1/(a+2/3)


    script(src='/juniper.min.js')
    script
      include juniper-setup.js

---
> id: conditionals
## Conditionals

Consider a simple computational task performed by commonplace software, like highlighting the rows in a spreadsheet which have a value larger than 10 in the third column. We need a new programming language feature to do this, because we need to conditionally execute code (namely, the code which highlights a row) based on the [[boolean|int|float]] value returned by the comparison operator. Python provides _{code.language-python}if_ statements for this purpose.

_{button.next-step} Continue_

---

### Conditionals

We can use an _{code.language-python}if_ statement to specify different blocks to be executed depending on the value of a boolean expression. For example, the following function calculates the sign of the input value _{code.language-python}x_.

    pre: code.language-python
      | def sgn(x):
      |     if x > 0:
      |         return +1
      |     elif x == 0:
      |         return 0
      |     else:
      |         return -1

_{button.next-step} Continue_

---

Conditional expressions can be written using *ternary conditional* _{code.language-python}«truevalue» if «condition» else «falsevalue»_. For example, the following version of the _{code.language-python}sgn_ function returns the same values as the one above except when _{code.language-python}x = 0_. 

    pre(data-executable)
      | def sgn(x): 
      |     return +1 if x > 0 else -1

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Write a function which returns the quadrant number (1, 2, 3, or 4) in which the point _{code.language-python}(x,y)_ is located. Recall that the quadrants are numbered counter-clockwise: the northeast quadrant is quadrant 1, the northwest quadrant is 2, and so on. For convenience, you may assume that both _{code.language-python}x_ and _{code.language-python}y_ are nonzero.

Consider nesting _{code.language-python}if...else_ blocks inside of an _{code.language-python}if...else_ block. 
:::

_{button.next-step} Continue_

---

*Solution*. Here's an example solution: 

    pre: code.language-python
      | 
      | def quadrant(x,y):
      |     if x > 0:
      |         if y > 0:
      |             return 1
      |         else:
      |             return 4
      |     else:
      |         if y > 0:
      |             return 2
      |         else:
      |             return 3
      | 

---

    script(src='/juniper.min.js')
    script
      include juniper-setup.js

> id: functions
## Functions

Using functions to organize code helps to achieve *separation of concerns*: once a function is written, it may be relied upon to perform its designated task without the programmer having to think about *how* it accomplishes that task. This conceptual aid is crucial for writing maintainable code to solve large, complex problems. 

_{button.next-step} Continue_

---

A good rule of thumb is that a function should be sufficiently general to be re-usable without duplicating internal logic, but specific enough that you can actually implement it. 

::: .exercise
**Exercise**  
How could the design of the following code be improved?

    pre: code.language-python
      | def remove_one_leading_space(S):
      |     if S[0] == " ":
      |         return S[1:]
      |     else:
      |         return S
      | 
      | def remove_two_leading_spaces(S):
      |     if S[0:2] == "  ":
      |         return S[2:]
      |     else:
      |         return S
      | 
      | def remove_three_leading_spaces(S):
      |     if S[0:3] == "  ":
      |         return S[3:]
      |     else:
      |         return S

:::

_{button.next-step} Continue_

---

*Solution*. We should have a single function to remove whatever number of leading spaces the string happens to have. The design above has the problem that we have to figure out how many leading spaces there are before we can call the appropriate function, which means that most of the work that should be performed by the function will have to be performed when the function is called. Thus separation of concerns is not achieved.

_{button.next-step} Continue_

---

### Arguments

The objects supplied to a function when it's called are referred to as the function's **arguments**. The variables which represent the arguments in the function definition are called **parameters**. The indented block of code that runs when the function is called is the **body** of the function.

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
In the following block of code, _{code.language-python}s_ is [[a parameter|an argument]], while _{code.language-python}"hello"_ is [[an argument | a parameter]]

    pre: code.language-python
      | def duplicate(s):
      |     return s + s
      | 
      | duplicate("hello")

:::

---

We can give parameters **default values** and supply arguments for those parameters optionally when calling the function.

    pre: code.language-python
      | 
      |     def threesum(x,y,z,shift=0):
      |         x + y + z + shift
      | 
      | 
      |     threesum(1,2,3) # returns 6
      |     threesum(1,2,3,shift=5) # returns 11
      |   

_{button.next-step} Continue_

---

The arguments 1, 2, and 3 in this example are called **positional** arguments, and _{code.language-python}5_ is a **keyword** argument (note that this usage of the term *keyword* is unrelated to the usage of the term in reference to language keywords like _{code.language-python}def_ or _{code.language-python}if_). 

_{button.next-step} Continue_

---

If the function body begins with a string literal, that string will be interpreted as documentation for the function. This **docstring** helps you and other users of your functions quickly ascertain how they are meant to be used. A function's docstring can accessed in a Python session using the function _{code.language-python}help_. For example, _{code.language-python}help(print)_ pulls up the docstring for the built-in _{code.language-python}print_ function.

_{button.next-step} Continue_

---

### Anonymous functions

A function may be defined without assigning a name to it. Such a function is said to be *anonymous*. Python's anonymous function syntax uses the keyword _{code.language-python}lambda_. A common situation where anonymous functions can be useful is when supplying one function to another as an argument. For example:

    pre(data-executable)
      | def apply_three_times(f, x):
      |     f(f(f(x)))
      | 
      | 
      | apply_three_times(lambda x: x*x, 5)

<p></p>
      
A multi-argument function works similarly, with the parameters separated by commas: the addition operator can be writte as _{code.language-python}lambda x,y: x + y_. 

_{button.next-step} Continue_

---      
      
::: .exercise
**Exercise**  
Write a function that takes two arguments _{code.language-python}a_ and _{code.language-python}b_ and a function _{code.language-python}f_ and returns _{code.language-python}a_ if _{code.language-python}f(a) < f(b)_ and _{code.language-python}b_ otherwise. Then use anonymous function syntax to call your function with two numbers and the negation function $x\mapsto -x$. 
:::

    pre(data-executable)
      | 

<p></p>

_{button.next-step} Continue_

---

*Solution*. Here's an example solution:

    pre: code.language-python
      | def whichsmaller(a,b,f):
      |     if f(a) < f(b):
      |         return a
      |     else:
      |         return b
      | 
      | 
      | whichsmaller(4,6, lambda x: -x)

_{button.next-step} Continue_

---
      
### Scope

The **scope** of a variable is the region in the program where it is accessible. For example, if you define _{code.language-python}x_ to be _{code.language-python}47_ on line 413 of your file and get an error because you tried to use _{code.language-python}x_ on line 35, the problem is that the variable wasn't *in scope* yet. 

A variable defined in the main body of a file has **global scope**, meaning that it is visible throughout the program from its point of definition. 

A variable defined in the body of a function is in that function's **local scope**. For example: 

    pre(data-executable)
      | 
      |   def f(x):
      |       y = 2
      |       return x + y
      | 
      | 
      |  y
      | 
     
---

    script(src='/juniper.min.js')
    script
      include juniper-setup.js

> id: packages
## Packages

A **package** is a collection of code that provides functionality beyond the core functionality available in every Python program. Packages achieve separation of concerns at the community level: someone else solves a problem of general interest, and then you can leverage their work and focus on applying it to the problem at hand. 

Many Python packages are available in every standard distribution of Python and can be used without having to worry about whether they're installed. These packages make up the **standard library**. To see a list of standard library packages, visit the standard library page of the [Python documentation](https://docs.python.org/3/library/). Here's an example showing how to import the  _{code.language-python}math_ package and use the _{code.language-python}sqrt_ function it contains: 

    pre(data-executable)
      | import math
      | math.sqrt(3)
      
<p></p>

Note that we access names like _{code.language-python}sqrt_ provided by the package using the dot syntax _{code.language-python}math.sqrt_. This is common practice, and it's a good idea because if functions are called in a way that makes it clear what package they came from, then (1) you can use the same name in multiple packages, and (2) you can easily identify which package that is supplying each function. We can also import individual functions and skip the dot syntax:

    pre(data-executable)
      | from math import sqrt
      | sqrt(3)
      
<p></p>      

Sometimes a package contains a **submodule** which must itself be accessed with dot syntax:

    pre(data-executable)
      | from numpy.random import standard_normal
      | standard_normal()

### Scientific computing packages in Python

Here are some of the most important scientific computing packages (along with very brief code snippets to give you a sense of what calling the packages looks like in practice): 

**NumPy**. Multi-dimensional arrays (like vectors, matrices, and higher-order arrays). 

    pre(data-executable)
      | import numpy as np
      | np.random.standard_normal((5,5)) # randomly fill a 5 × 5 matrix
      | np.full((3,3),7) # make a 3 × 3 matrix full of 7's
      
<p></p>

**Pandas**. Provides support for tabular data. 

    pre(data-executable)
      | import pandas as pd
      | iris = pd.read_csv("http://bit.ly/iris-dataset")
      | iris
      
<p></p>

**SciPy**. Provides scientific computing tools for optimization, numerical integration, linear algebra, statistics, etc.

    pre(data-executable)
      | from scipy.optimize import minimize
      | minimize(lambda x: x*(x-1), 1.0) # start from 1 and minimize x(x-1)

<p></p>

**Matplotlib**. Standard plotting package in Python.

    pre(data-executable)
      | import matplotlib.pyplot as plt
      | import numpy as np
      | plt.ion() # (turn on interactive plots, so results show below)
      | plt.plot(np.cumsum(np.random.standard_normal(1000)))
      | plt.show()

<p></p>

**SymPy**. Symbolic mathematics. 

    pre(data-executable)
      | from sympy import symbols, Eq, solve
      | x = symbols("x")
      | y = symbols("y")
      | solve([Eq(x + 5*y, 2), Eq(-3*x + 6*y, 15)], [x, y])
      
---

      

    script(src='/juniper.min.js')
    script
      include juniper-setup.js


Congratulations! You have finished the programming with Python course.

