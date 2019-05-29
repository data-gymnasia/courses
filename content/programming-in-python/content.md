
# Programming in Python

> id: intro
## Introduction

This chapter is an introduction to programming in **Python**, which is a general-purpose language with a large user base in the software engineering world. With the emergence of a powerful stack of scientific computing packages since the early 2000s, it has emerged as one of the two dominant languages in data science.

Although programming is a powerful tool, learning to program is also about honing your problem solving skills and thinking in an organized way about structure and computation. You are likely to find that computer science ideas support your ability to reason about complex systems, even in situations where you won't be programming anything. This is a useful frame of mind to bring to the learning process.

_{button.next-step} Continue_

---

### Installation

There are several ways to access Python:

**Inline**. This course will let you execute Python code blocks in the webpage (thanks to [Juniper](https://github.com/ines/juniper) and [Binder](https://mybinder.org)). So if you don't want to install anything yet, you don't have to. (However, the first cell you run will be slow with this method, like up to 30 seconds, since your environment has to be launched behind the scenes on Binder's servers. If it's taking too long, reload the page.)

_{button.next-step} Continue_

---

**Binder**. You can also run Python code in the cloud on the Binder website. To launch with a set of packages tailored to this course, [click here](https://mybinder.org/v2/gh/sswatson/simple-python-stack/master). Then select *New* (top right corner and *Python 3*).

_{button.next-step} Continue_

---

**Anaconda**. Python is bundled with its system of scientific computing packages and a system for managing your Python environment in a distribution called [Anaconda](https://www.anaconda.com/). This is the recommended way to install Python on your own machine. [Download](https://www.anaconda.com/distribution) and launch the installer to set it up on your machine. 

_{button.next-step} Continue_

---

**CoCalc**. If you want a complete environment without having to install anything locally, [CoCalc](https://cocalc.com) is a batteries-included, community-oriented platform for open-source mathematical and scientific computing. You can use it for free with limited functionality, and it's $14 per month to support the project and get paid account features.

_{button.next-step} Continue_

---


### Usage

Once you have Python installed, there are several ways to interact with it. 

**REPL**. Launch a read-eval-print loop from the command line. Any code you enter will be executed immediately, and any values returned by your code will be displayed. To start a session, open your operating system's Terminal and run _{code.language-python}python_ or _{code.language-python}ipython_ (the latter being more colorful and having more features). You can do this in Binder by selecting *New > Terminal*. 

_{button.next-step} Continue_

---

**Script**. Save a file called _{code}example.py_ and run _{code}python example.py_ from the command line (in the same directory as the file) to execute all the code in the script. You can do this in Binder by selecting *New > Text File* and then changing the name of the text file to something that ends in _{code}.py_. 

_{button.next-step} Continue_

---

**Jupyter**. Like a REPL, but allows inserting text and math expressions, grouping code into blocks, etc. This is the interface provided by default in [Binder](https://mybinder.org/v2/gh/sswatson/simple-python-stack/master), and you can launch a notebook locally by running _{code.language-python}jupyter notebook_ from the command line (assuming you have Anaconda installed). 

_{button.next-step} Continue_

---

**Integrated development environment (IDE)**. Essential for extensive software development projects, an IDE provides an editor for writing code, conveniences to help you code more efficiently, and a debugger to help you fix your mistakes. There are many IDEs for Python, including Visual Studio Code, Atom, and PyCharm.

_{button.next-step} Continue_

---

::: .exercise
**Exercise**.  
Sort the following Python interaction modes in the order in which they appear in this video. 

    center: video(src="images/jupyter-script-repl.mp4" width="75%" controls)
    
    x-sortable
      .item.md(data-index="2") REPL
      .item.md(data-index="1") script
      .item.md(data-index="0") Jupyter

:::

---

> id: basics
## Basics

Let's begin by developing some basic vocabulary for the elements of a program. This section is an overview: will develop some of these ideas in greater depth in later sections.

_{button.next-step} Continue_

---

### Objects

A **object** is a fundamental entity that may be manipulated by a program. Objects have **types**; for example, _{code.language-python}5_ is an _{code.language-python}int_ (short for "integer") and _{code.language-python}"Hello world!"_ is a _{code.language-python}str_ (short for "string"). Types are important for the computer to keep track of, since objects are stored differently depending on their type. 

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

(Note: you probably noticed the _{code.language-markup}Loading or None returned_ message that appeared briefly when you ran the cell. If that message appears for more than 10 seconds or so, it's likely that the cell has run successfully but doesn't have anything to show as a result. We will discuss this in more detail soon.)

_{button.next-step} Continue_
      
---

### Variables

A **variable** is a name used to refer to an object. We can **assign** an object (say _{code.language-python}41_) to a variable (say _{code.language-python}age_) as follows: 

    pre: code.language-python
      | age = 41

We say that _{code.language-python}41_ is the **value** of the variable _{code.language-python}age_.

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
      | x = x + 1
      | x = y
    
:::

---

*Solution*. The value 3 is assigned to _{code.language-python}x_ and then also to _{code.language-python}y_ on the second line. After the third line, the value of _{code.language-python}x_ is 4, since the right-hand side works out to 4 an is *then* assigned to the variable _{code.language-python}x_. After the fourth line _{code.language-python}3_ is of _{code.language-python}x_ again, since the value of _{code.language-python}y_ is still 3 when the fourth line is executed. 

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
      | printtwice("hey")
      
<p></p>

_{button.next-step} Continue_

---

_{code.language-python}def_ is an example of a **keyword**: a name with a special meaning in the language. Since it has a special meaning, a keyword may not be used as a variable name. 

_{button.next-step} Continue_

---

Note that the lines of code to be executed when the function is called **must** be indented four spaces relative to _{code.language-python}def_. For example, _{code.language-python}printtwice("hey")_ [[is not|is]] part of the definition of the function in the example above.

---

A function may perform an action, like _{code.language-python}printtwice_, or it may **return** an object. For example, after the following code block is run, the object _{code.language-python}28_ will be assigned to the variable _{code.language-python}y_. 

    pre(data-executable)
      | def add_one(x):
      |     return x + 1
      | 
      | 
      | y = 20 + add_one(7)
      | y

(Note: we put _{code.language-python}y_ by itself on the last line so that we can see the value of _{code.language-python}y_ in the output area. If an assignment (like **{code.language-python}y = 20 + add_one(7)**) is the last line in the cell, then no value will be printed, and we will get the _{code.language-markup}Loading or None returned_ message.)
      
_{button.next-step} Continue_

---
            
The variable name _{code.language-python}x_ in the above block is called a **parameter**. Parameters play the same role as dummy variables in the definition of a mathematical function (for example, when the squaring function is defined using the notation `f(x) = x^2`).

_{button.next-step} Continue_

--- 

An **operator** is a special kind of function that can be called in a special way. For example, the multiplication operator _{code.language-python}*_ is called using the mathematically familiar *infix notation* _{code.language-python}3 * 5_ rather than _{code.language-python}*(3,5)_.

_{button.next-step} Continue_

--- 

::: .exercise
**Exercise**  
Arrange the operation descriptions below in order, according the corresponding Python operator in the list _{code.language-python}+, **, *, //, /_. You might need to experiment using the code block below. 

    x-sortable
      .item.md(data-index="3") integer division (quotient only; no remainder)
      .item.md(data-index="0") addition      
      .item.md(data-index="2") multiplication
      .item.md(data-index="1") exponentiation
      .item.md(data-index="4") division (ordinary real-number division)
      
:::

    pre(data-executable)
      | 6 + 11
      | 2**5
      | 3 * 4
      | 7//2
      | 7/2

---

<p></p>

### Statements and expressions

An individual executable unit of code in Python is called a **statement**. For example, the assignment _{code.language-python}age = 41_ is a statement. Statements may include **expressions**, which are combinations of values, variables, operators, and function calls that a language interprets and **evaluates** to a value. For example, _{code.language-python}1 + age + abs(3*-4)_ is an expression which evaluates to [[54]]. 

---

::: .exercise
**Exercise**  
_{code.language-python}def f(x): return x*x_ is [[a statement|an expression]]

_{code.language-python}2 + 3*f(4)_ is [[an expression|a statement]]

_{code.language-python}y = 13_ is [[a statement|an expression]]

_{code.language-python}myName = "John" + "Doe"_ is

    x-picker.list
      .item.pill.bblue(data-error="expression-1") an expression
      .item.pill.bblue a statement whose execution involves evaluating an expression

:::

### Exercises

::: .exercise
**Exercise**  
(Try doing this without executing the code.) The expression _{code.language-python}_1 + 5//3 + 2**3_ evaluates to [[9]].
:::

---

::: .exercise
**Exercise**  
(Try doing this without executing the code.) The expression _{code.language-python}_11/2-11//2-3_ evaluates to [[-2.5]].
:::

---

::: .exercise
**Exercise**  
Find the value of _{code.language-python}x_ at the end of the following block of code. [[121]]

    pre: code.language-python
      | x = 3**2
      | x = x + 1
      | x = x + 1
      | y = 2 * x
      | x = y*y
      | z = 2*x
      
:::

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Write a function _{code.language-python}f_ which takes a positive integer _{code.language-python}n_ as input and returns the $n$th positive odd integer. You should replace the keyword _{code.language-python}pass_ in the code block below (the rest of the code, starting from the fourth line, checks that your function works; you shouldn't change it.)
:::

    pre(data-executable)
      | def f(n):
      |     pass
      |
      | def test_f():
      |     assert f(3) == 5
      |     assert f(1) == 1
      |     assert f(100) == 199
      |     return "Test passed!"
      |
      | test_f()


_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Select the true statements.

    x-picker.list
      .item.pill.bblue The statement balance = 46.04 assigns the value 46.04 to the variable balance. 
      .item.pill.bblue(data-error="not-a-variable") The object 33 is a variable.
      .item.pill.bblue(data-error="mutable") The value of a variable cannot be changed. 
      .item.pill.bblue Variables in Python are case-sensitive.
      
      
:::

    script(src='/juniper.min.js')
    script
      include juniper-setup.js
      
_{button.next-step} Continue_
          
---

> id: types
## Types

Python, like most programming languages, has built-in types for handling common data like numbers and text. 

_{button.next-step} Continue_

---

### Numbers

As discussed in the previous section, a numerical value can be either an _{code.language-python}int_ or a _{code.language-python}float_. We can represent integers exactly, while storing a real number as a float [often requires rounding slightly](gloss:rounding).

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
      | This is a multiline string. 
      | It can have "quotes", no problem.
      | """
      | 
      | "This is an ordinary string. \"Quotes\" require a backslash."

_{button.next-step} Continue_

---

We can find the number of characters in a string with the _{code.language-python}len_ function: _{code.language-python}len("hello")_ returns [[5]]. 

---
 
We can concatenate two strings with the addition operator (_{code.language-python}+_): _{code.language-python}"Hello " + "World"_. 

_{button.next-step} Continue_

---

We can return the first character in a string _{code.language-python}s_ using the expression _{code.language-python}s[0]_, the second element using _{code.language-python}s[1]_, and so on. We can get the substring from the third to the eighth character using _{code.language-python}s[3:9]_. Note that the 9 is one **past** the index where we want to stop. 

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
For which values of _{code.language-python}a_ and _{code.language-python}b_ does the expression _{code.language-python}"Hello World"[i:j] == "o Wo"_ return _{code.language-python}True_? i = [[4]] and j = [[8]]
:::

    pre(data-executable)
      | "Hello World"[i:j]

---

<p></p>
      
::: .exercise
**Exercise**  
If either _{code.language-python}i_ or _{code.language-python}j_ is omitted in the expression _{code.language-python}s[i:j]_ (where _{code.language-python}s_ is a string), what happens? Experiment using the code block above. 
:::

_{button.next-step} Continue_

---

*Solution*. Omitting _{code.language-python}i_ or _{code.language-python}j_ has the effect of setting _{code.language-python}i = 0_ or _{code.language-python}j = len(s)_. 

_{button.next-step} Continue_

---

### String interpolation

We can insert the value of a variable into a string using *string interpolation*. There are several ways to do this in Python, but perhaps the simplest is to place an _{code.language-python}f_ character immediately before the opening quotation mark. A string literal modified in this way is called an *f-string*, or *formatted string literal*. Any parts of an f-string between curly braces are evaluated, and their string representations are inserted into the string at that point. 

    pre(data-executable)
      | x = 19
      | print(f"""
      | The quotient when x is divided by 3 
      | is {x//3}, and the remainder is {x % 3}.
      | """)
      
<p></p>
      
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
Write a one-line [function](gloss:function) which takes 3 bools as arguments and returns _{code.language-python}True_ if and only if either 

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
      
_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
The expression _{code.language-python} 1 < 3_ returns [[True]], which is an object of type [[bool]]. 
:::

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
If we set _{code.language-python}s = "Bruno"_, then _{code.language-python}s[:j] == "Bru"_ when _{code.language-python}j =_ [[3]]. 
:::

    script(src='/juniper.min.js')
    script
      include juniper-setup.js

---
> id: conditionals
## Conditionals

Consider a simple computational task performed by commonplace software, like highlighting the rows in a spreadsheet which have a value larger than 10 in the third column. We need a new programming language feature to do this, because we need to conditionally execute code (namely, the code which highlights a row) based on the [[boolean|int|float]] value returned by the comparison operator. Python provides _{code.language-python}if_ statements for this purpose.

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
      | 
      | sgn(-5)

_{button.next-step} Continue_

---

Conditional expressions can be written using *ternary conditional* _{code.language-python}«truevalue» if «condition» else «falsevalue»_. For example, the following version of the _{code.language-python}sgn_ function returns the same values as the one above except when _{code.language-python}x = 0_. 

    pre(data-executable)
      | def sgn(x): 
      |     return +1 if x > 0 else -1
      |
      | sgn(-5)

_{button.next-step} Continue_

---

### Exercises

::: .exercise
**Exercise**  
Can the _{code.language-python}else_ part of an _{code.language-python}if_ statement be omitted? [[Yes|No]] Experiment with the example below. 
:::

    pre(data-executable)
      | x = 1
      | if x < 0: 
      |     print("x is negative")
      | elif x < 1: 
      |     print("x is between 0 and 1")
      
_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Write a function called _{code.language-python}myAbs_ which computes the absolute value of its input. Replace the keyword _{code.language-python}pass_ below with an appropriate block of code.
:::

    pre(data-executable)
      | def myAbs(x):
      |     pass
      |
      | def test_abs():
      |     assert myAbs(-3) == 3
      |     assert myAbs(5.0) == 5.0
      |     assert myAbs(0.0) == 0.0
      |     return "Tests passed!"
      |
      | test_abs()

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Write a function which returns the quadrant number (1, 2, 3, or 4) in which the point _{code.language-python}(x,y)_ is located. Recall that the quadrants are numbered counter-clockwise: the northeast quadrant is quadrant 1, the northwest quadrant is 2, and so on. For convenience, you may assume that both _{code.language-python}x_ and _{code.language-python}y_ are nonzero.

Consider nesting _{code.language-python}if...else_ blocks inside of an _{code.language-python}if...else_ block. 
:::

    pre(data-executable)
      | 

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

    script(src='/juniper.min.js')
    script
      include juniper-setup.js

---

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
      | def threesum(x,y,z,shift=0):
      |     return x + y + z + shift 
      | 
      | threesum(1,2,3) # returns 6
      | threesum(1,2,3,shift=5) # returns 11
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

A function may be defined without assigning a name to it. Such a function is said to be *anonymous*. Python's anonymous function [syntax](gloss:syntax) uses the keyword _{code.language-python}lambda_. A common situation where anonymous functions can be useful is when supplying one function to another as an argument. For example:

    pre(data-executable)
      | def apply_three_times(f, x):
      |     return f(f(f(x)))
      |
      | apply_three_times(lambda x: x*x, 5)

<p></p>
      
A multi-argument function works similarly, with the parameters separated by commas: the addition operator can be written as _{code.language-python}lambda x,y: x + y_. 

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
      | whichsmaller(4,6, lambda x: -x)

_{button.next-step} Continue_

---
      
### Scope

The **scope** of a variable is the region in the program where it is accessible. For example, if you define _{code.language-python}x_ to be _{code.language-python}47_ on line 413 of your file and get an error because you tried to use _{code.language-python}x_ on line 35, the problem is that the variable wasn't *in scope* yet. 

A variable defined in the main body of a file has **global scope**, meaning that it is visible throughout the program from its point of definition. 

A variable defined in the body of a function is in that function's **local scope**. For example: 

    pre(data-executable)
      | def f(x):
      |     y = 2
      |     return x + y
      |
      | y

    
---

### Testing

It's good practice to write tests to accompany your functions, so you can confirm that the functions work. This is especially important as your codebase grows, because upstream changes can break functions that worked when they were originally written.

One common way to do this is to write functions whose names begin with **{code.language-python}test_** and which contain _{code.language-python}assert_ statements. An _{code.language-python}assert_ statement throws an error if the following expression evaluates to false. You can run the test functions directly, or you can use a tool like [pytest](https://pytest.org) to find and run all of the test functions in your codebase. 

    pre(data-executable)
      | def spaceconcat(s,t):
      |     """
      |     Concatenate strings s and t, ensuring a space
      |     between them if s ends with a non-space character
      |     and t begins with a non-space character
      |     """
      |     if s[-1] == " " or t[0] == " ":
      |         return s + t
      |     else:
      |         return s + " " + t
      |
      | def test_spaceconcat():
      |     assert spaceconcat("foo", "bar") == "foo bar"
      |     assert spaceconcat("foo ", "bar") == "foo bar"
      |
      | test_spaceconcat()
      | spaceconcat("foo", "bar")
      
::: .exercise
**Exercise**  
The test cases above don't cover the *degenerate* situation where one of the strings is empty. Does the function return correct values for these degenerate cases? [[No|Yes]] Add test cases for this, and fix the function so that they pass.
:::

_{button.next-step} Continue_

---

*Solution*. We check the empty string conditions prior to checking the last/first characters. This solves the problem because _{code.language-python}or_ is **short-circuiting**: if the first bool is _{code.language-python}True_ in an _{code.language-python}or_ operation, the second is never evaluated.

    pre(data-executable)
      | def spaceconcat(s,t):
      |     """
      |     Concatenate strings s and t, ensuring a space
      |     between them if s ends with a non-space character 
      |     and t begins with a non-space character.
      |     """
      |     if s == "" or t == "" or s[-1] == " " or t[0] == " ":
      |         return s + t
      |     else:
      |         return s + " " + t
      |
      | def test_spaceconcat():
      |     assert spaceconcat("foo", "bar") == "foo bar"
      |     assert spaceconcat("foo ", "bar") == "foo bar"
      |     assert spaceconcat("foo", "") == "foo"
      |     assert spaceconcat("", "bar") == "bar"
      
      
### Exercises

::: .exercise
**Exercise**  
Write a function which accepts two strings as input and returns the concatenation of those two strings in alphabetical order. Replace the keyword _{code.language-python}pass_ in the code block below.
:::

    pre(data-executable)
      | def alphabetical_concat(s,t):
      |     pass
      |
      | test_concat(): 
      |     alphabetical_concat("alphabet", "soup") == "alphabetsoup"
      |     alphabetical_concat("food", "brain") == "brainfood"
      |     return "Tests passed!"
      |
      | test_concat()

_{button.next-step} Continue_

---

*Solution*. 

    pre(data-executable)
      | def alphabetical_concat(s,t):
      |     if s < t:
      |         return s + t
      |     else:
      |         return t + s
      |
      | test_concat(): 
      |     alphabetical_concat("alphabet", "soup") == "alphabetsoup"
      |     alphabetical_concat("food", "brain") == "brainfood"
      |     return "Tests passed!"
      |
      | test_concat()
      
    script(src='/juniper.min.js')
    script
      include juniper-setup.js      

---

> id: packages
## Packages

A **package** is a collection of Python files that provide functionality beyond the core functionality available in every Python program. Packages achieve separation of concerns at the community level: someone else solves a problem of general interest, and then you can leverage their work and focus on applying it to the problem at hand.

Many Python packages are available in every standard distribution of Python and can be used without having to worry about whether they're installed. These packages make up the **standard library**. To see a list of standard library packages, visit the standard library page of the [Python documentation](https://docs.python.org/3/library/). Here's an example showing how to import the  _{code.language-python}math_ package and use the _{code.language-python}sqrt_ function it contains: 

    pre(data-executable)
      | import math
      | math.sqrt(3)
      
<p></p>

Note that we access names like _{code.language-python}sqrt_ provided by the package using the dot [syntax](gloss:syntax) _{code.language-python}math.sqrt_. This is common practice, and it's a good idea because if functions are called in a way that makes it clear what package they came from, then (1) you can use the same name in multiple packages, and (2) you can easily identify which package that is supplying each function. We can also import individual functions and skip the dot syntax:

    pre(data-executable)
      | from math import sqrt
      | sqrt(3)
      
<p></p>      

Sometimes a package contains a **subpackage** which must itself be accessed with dot syntax:

    pre(data-executable)
      | from numpy.random import standard_normal
      | standard_normal()

### Scientific computing packages in Python

Here are some of the most important scientific computing packages (along with very brief code snippets to give you a sense of what calling the packages looks like in practice): 

**NumPy**. Provides multi-dimensional arrays (like vectors, matrices, and higher-order arrays). 

    pre(data-executable)
      | import numpy as np
      | np.random.standard_normal((5,5)) # randomly fill a 5 × 5 matrix
      | np.full((3,3),7) # make a 3 × 3 matrix full of 7's
      
<p></p>

Note that we import _{code.language-python}numpy_ with the alias _{code.language-python}np_ for breviy. 

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
      | plt.ion() # interactive plotting; have to run cell twice!
      | plt.plot(np.cumsum(np.random.standard_normal(1000)))
      | plt.show()

<p></p>

**SymPy**. Math stuff like symbolic integration/differentiation, number theory, etc.

    pre(data-executable)
      | from sympy import symbols, Eq, solve
      | x = symbols("x")
      | y = symbols("y")
      | solve([Eq(x + 5*y, 2), Eq(-3*x + 6*y, 15)], [x, y])

### Exercises 

::: .exercise
**Exercise**  
 To import just the _{code.language-python}arcsin_ function from _{code.language-python}numpy_, we would use the statement [[from numpy import arcsin]]
:::

---

::: .exercise
**Exercise**  
 To import _{code.language-python}scipy_ with alias _{code.language-python}sp_, we use the statement [[import scipy as sp]].
:::

---

::: .exercise
**Exercise**  
To import the standard library package _{code.language-python}itertools_ (with no alias), we would use the statement _{code.language-python}import itertools_. 
:::

    script(src='/juniper.min.js')
    script
      include juniper-setup.js

---
      
> id: classes
## Classes

Many Python functions use the usual function [syntax](gloss:syntax), like _{code.language-python}len("hello")_. However, many other functions are called using a different syntax where an *object* comes first: 

    pre(data-executable)
      | "hello".capitalize()
      
<p></p>

These functions are called **methods**. For example, _{code.language-python}capitalize_ is a string method. To understand how methods work in the language, it's helpful to see what they look like at the point of definition. 

_{button.next-step} Continue_

---

Suppose you want to write a program which keeps track of the albums you own. Each album is associated with several data, like the name of the album, the year it came out, the number of tracks, etc. You could store all these data by assigning them to different variables, but that becomes untidy very quickly. For example, you will frequently want to pass an album to a function, and you don't want that function to require a long list of parameters just because the Album has a lot of data associated with it. 

_{button.next-step} Continue_

---

What you want is to be able to treat each album as its own Python object, with all its associated data stored inside. In other words, you want an _{code.language-python}Album_ type. You can do that with the _{code.language-python}class_ keyword: 

    pre(data-executable)
      | class Album(object):
      |     def __init__(self, name, artist, year, length): 
      |         self.name = name
      |         self.artist = artist
      |         self.year = year
      |         self.length = length
      | 
      |     def numYearsAgo(self, currentYear):
      |         "Return the number of years since album was released"
      |         return currentYear - self.year
      
_{button.next-step} Continue_

---

A function defined in the block indented below _{code.language-python}class Album(object):_ is called a **method** of the class _{code.language-python}Album_. The **{code.language-python}__init__** method has a special role: Python calls it whenever _{code.language-python}Album_ is called as a function to create a new **instance** of the class _{code.language-python}Album_. 

    pre: code.language-python
      | A = Album("Abbey Road", "The Beatles", 1969, "47:23")

The first parameter, customarily called _{code.language-python}self_, refers to the object being created. The four lines in the init method above assign values to **attributes** which may be accessed later using the dot [syntax](gloss:syntax) _{code.language-python}A.name_. 

Dot syntax is also used to access other methods like _{code.language-python}numYearsAgo_.

    pre: code.language-python
      | A.numYearsAgo(2019)

The object appearing before the dot is implicitly supplied as the first argument to the method. Therefore, _{code.language-python}A.numYearsAgo(2019)_ at call time corresponds to _{code.language-python}numYearsAgo(A, 2019)_ at the point of definition. In fact, you can use the latter syntax if you want, because methods are also accessible using dot syntax on the class name: 
_{code.language-python}Album.numYearsAgo(A, 2019)_. 

::: .exercise
**Exercise**  
Confirm that _{code.language-python}"hello".capitalize()_ does give the same value as _{code.language-python}str.capitalize("hello")_. 
:::

    pre(data-executable)
      | 

::: .exercise
**Exercise**  
In the expression _{code.language-python}"".join("hello")_, the method _{code.language-python}join_ has [[2|1|0|3]] arguments. 
:::

---

*Solution*. There are two arguments: the first is the empty string, and the second is _{code.language-python}"hello"_. 
      
---

_{button.next-step} Continue_

::: .exercise
**Exercise**  
Implement a class called _{code.language-python}Fraction_ which represents a ratio of two positive integers. You should reduce the fraction in your **{code.language-python}\_\_init\_\_** method. Your _{code.language-python}Fraction_ type should include a method called *{code.language-python}\_\_add\_\_* which adds two fractions and an *{code.language-python}\_\_eq\_\_* which checks whether two fractions are equal. (These methods will be automatically used by the addition and equality operators.)
:::

    pre(data-executable)
      | from  math import gcd
      | # add your code here
      | 
      | def test_Fraction():
      |     assert Fraction(1,2) + Fraction(1,3) == Fraction(5,6)
      |     assert Fraction(2,4) + Fraction(4,8) == Fraction(3,3)
      |     return "Test passed!"
      |
      | test_Fraction()

_{button.next-step} Continue_

---

*Solution*. We divide by the gcd in the init method, and we define the other two methods according to the rules of arithmetic:

    pre(data-executable)
      | from math import gcd
      |
      | class Fraction(object):
      |     def __init__(self, num, denom):
      |         d = gcd(num, denom)
      |         self.num = num//d
      |         self.denom = denom//d
      |   
      |     def __add__(self, other):
      |         return Fraction(self.num * other.denom + self.denom * other.num, 
      |                        self.denom * other.denom)
      |      
      |     def __eq__(self, other):
      |         return self.num == other.num and self.denom == other.denom
      |
      | def test_Fraction():
      |     assert Fraction(1,2) + Fraction(1,3) == Fraction(5,6)
      |     assert Fraction(2,4) + Fraction(4,8) == Fraction(3,3)
      |     return "Test passed!"
      |
      | test_Fraction()
    
    script(src='/juniper.min.js')
    script
      include juniper-setup.js
        
---

> id: compound-data
## Compound data

Let's revisit the spreadsheet example we discussed earlier: suppose you're writing a spreadsheet application and you want to introduce some functionality for highlighting every row whose third-column value is greater than 10: 

    table
      tr
        td: .pill.grey 20
        td: .pill.grey 16
        td: .pill.grey 2
        td: .pill.grey 1
        td: .pill.grey 19
      tr
        td: .pill.blue 9
        td: .pill.blue 12
        td: .pill.blue 15
        td: .pill.blue 1
        td: .pill.blue 19
      tr
        td: .pill.grey 7
        td: .pill.grey 2
        td: .pill.grey 1
        td: .pill.grey 15
        td: .pill.grey 4
      tr
        td: .pill.blue 19
        td: .pill.blue 6
        td: .pill.blue 16
        td: .pill.blue 4
        td: .pill.blue 7
      tr
        td: .pill.grey 3
        td: .pill.grey 14
        td: .pill.grey 3
        td: .pill.grey 1
        td: .pill.grey 1
      tr
        td: .pill.blue 16
        td: .pill.blue 5
        td: .pill.blue 15
        td: .pill.blue 6
        td: .pill.blue 6
      tr
        td: .pill.grey 14
        td: .pill.grey 9
        td: .pill.grey 7
        td: .pill.grey 18
        td: .pill.grey 15
      tr
        td: .pill.grey 15
        td: .pill.grey 9
        td: .pill.grey 3
        td: .pill.grey 9
        td: .pill.grey 16
      tr
        td: .pill.blue 13
        td: .pill.blue 6
        td: .pill.blue 13
        td: .pill.blue 10
        td: .pill.blue 20
      tr
        td: .pill.grey 10
        td: .pill.grey 14
        td: .pill.grey 5
        td: .pill.grey 8
        td: .pill.grey 8
      tr
        td: .pill.blue 4
        td: .pill.blue 13
        td: .pill.blue 16
        td: .pill.blue 15
        td: .pill.blue 9
      tr
        td: .pill.grey 16
        td: .pill.grey 9
        td: .pill.grey 4
        td: .pill.grey 14
        td: .pill.grey 1
      tr
        td: .pill.grey 17
        td: .pill.grey 9
        td: .pill.grey 4
        td: .pill.grey 3
        td: .pill.grey 8
      tr
        td: .pill.grey 2
        td: .pill.grey 6
        td: .pill.grey 4
        td: .pill.grey 6
        td: .pill.grey 14
      tr
        td: .pill.blue 15
        td: .pill.blue 8
        td: .pill.blue 14
        td: .pill.blue 3
        td: .pill.blue 14
      tr
        td: .pill.grey 14
        td: .pill.grey 19
        td: .pill.grey 8
        td: .pill.grey 17
        td: .pill.grey 10
      tr
        td: .pill.grey 18
        td: .pill.grey 8
        td: .pill.grey 9
        td: .pill.grey 5
        td: .pill.grey 9
      tr
        td: .pill.grey 4
        td: .pill.grey 4
        td: .pill.grey 5
        td: .pill.grey 5
        td: .pill.grey 8
      tr
        td: .pill.grey 11
        td: .pill.grey 8
        td: .pill.grey 1
        td: .pill.grey 14
        td: .pill.grey 2
      tr
        td: .pill.blue 12
        td: .pill.blue 11
        td: .pill.blue 13
        td: .pill.blue 19
        td: .pill.blue 7

We definitely don't want to think of 100 variable names for the 100 values in the table, and we don't want to write a line of code for each row. What we need is a way to store all of the rows (or columns) in an object capable of containing many other objects. Python provides several such **compound data structures**, and in this section we will learn about the most prominent examples. 

### Lists

A _{code.language-python}list_ in Python is a compound data type for storing a finite ordered sequence of Python objects. Lists are **mutable**, meaning that they can be changed.

The simplest way to supply a list with a Python program is with a **list literal**, which requires listing the objects separated by commas and delimited by square brackets: 

    pre(data-executable)
      | myList = [1, "flower", True, 7]
      | x = 5
      | myOtherList = [1, x, x, 2]
      
::: .exercise
**Exercise**  
What happens to _{code.language-python}myOtherList_ in the example above if a different value is assigned to _{code.language-python}x_ *after* _{code.language-python}myOtherList_ is created? [[the list doesn't change|the list changes]]
:::

---

*Solution*. The list doesn't change. The object associated with the variable _{code.language-python}x_ is retrieved when the list is created, and after that point the list is no longer connected to the name _{code.language-python}x_. 

_{button.next-step} Continue_

---

Like strings, lists can be **indexed** to retrieve their elements. Indexes in Python begin at 0: 

    pre(data-executable)
      | myList = [1, "flower", True, 7]
      | myList[0] # returns 1
      | myList[3] # returns 7
      
_{button.next-step} Continue_

---

Negative indices can be used to count from the end:

    pre(data-executable)
      | myList = [1, "flower", True, 7]
      | i = -2
      | myList[i]

<p></p>
  
If we set _{code.language-python}i =_ [[-3]], then _{code.language-python}myList[i]_ would return _{code.language-python}"flower"_ (answer with a negative number).
      
---

Sublists can be extracted by **slicing**. Indexing a list with _{code.language-markup}[i:j]_ returns the portion of the list from the `i`th element to the `(j-1)`st element. 

    pre(data-executable)
      | myList = [1, "flower", True, 7]
      | myList[0:2]

::: .exercise
**Exercise**  
If _{code.language-python}i_ = [[1]] and _{code.language-python}j_ = [[3]], then _{code.language-python}myList[i:j]_ is equal to _{code.language-python}["flower", True]_. 
::: 

The start or stop value of a slice can be omitted, in which case it defaults to the beginning or end of the list, respectively. 

    pre(data-executable)
      | L = list(range(10,20)) # returns [10,11,12,...,19]
      | L[2:] # returns [12,13,...,20]
      | L[:4] # returns [10,11,12,13]
      
_{button.next-step} Continue_

---

Slices can include a *step* value after a second colon. For example, **{code.language-python}L[1::10::2]** returns the elements of _{code.language-python}L_ at positions 1, 3, 5, 7, and 9. The step value is often used with omitted start and stop values: 

    pre(data-executable)
      | list(range(100, 200))[::2]
      
_{button.next-step} Continue_

---

Like strings, lists can be concatenated with the _{code.language-python}+_ operator. 

    pre(data-executable)
      | [1,2,3] + [4,5,6,7]

<p></p>

::: .exercise
**Exercise**  
Write a [function](gloss:function) which takes as arguments a list _{code.language-python}L_ and a positive integer _{code.language-python}n_ and rotates _{code.language-python}L_ by _{code.language-python}n_ positions. In other words, every element of the list should move forward _{code.language-python}n_ positions, wrapping around to the beginning if it goes off the end of the list. 
:::

    pre(data-executable)
      | def rotate(L, n):
      |     "Cyclically shift the elements of L by n positions"
      |
      | def test_rotate():
      |     assert rotate([1,2,3],1) == [3,1,2]
      |     assert rotate([1,2,3],2) == [2,3,1]      
      |     assert rotate([1,2,3,4,5],8) == [3,4,5,1,2]
      
      
<p></p> 

_{button.next-step} Continue_

---

*Solution*. We figure out where the list needs to be split and concatenate the two resulting sublists in the opposite order:

    pre(data-executable)
      | def rotate(L, n):
      |     "Cyclically shift the elements of L by n positions"
      |     k = len(L) - n % len(L)
      |     return L[k:] + L[:k]
      |
      | def test_rotate():
      |     assert rotate([1,2,3],1) == [3,1,2]
      |     assert rotate([1,2,3],2) == [2,3,1]      
      |     assert rotate([1,2,3,4,5],8) == [3,4,5,1,2]
  
<p></p>

_{button.next-step} Continue_

---

Lists may be modified by combining indexing with assignment:

    pre(data-executable)
      | L = [4,-3,2]
      | L[0] = 1
      | L[1:3] = [6,3]

::: .exercise
**Exercise**  
Write a line of code which sets every even-indexed entry of a list _{code.language-python}L_ to zero. Note that you can get a list of _{code.language-python}n_ zeros with _{code.language-python}[0] * n_.
:::

    pre(data-executable)
      | L = list(range(100))

_{button.next-step} Continue_

---

*Solution*. _{code.language-python}L[::2] = [0] * (len(L)//2)_

_{button.next-step} Continue_

---

The _{code.language-python}list_ class has 11 ordinary [methods](gloss:method) (that is, methods that don't have the double underscores in the name):

    pre(data-executable)
      | L = [1,2,3]
      | L.append(4) # add an element to the end
      | L.clear() # remove all items from list
      | L.copy() # return a copy of the list
      | L.extend([5,6,7]) # add elements to the end
      | L.index(6) # find index of list entry
      | L.insert(3,"hey") # insert object before index
      | L.pop(index=1) # remove object at given index
      | L.remove("hey") # remove first occurrence of "hey"
      | L.reverse()
      | L.sort()
      
<p></p>

If you forget these methods, you can access them in an interactive session by running _{code.language-python}dir(list)_. 

### List comprehensions

Two of the most common ways of generating one list from another are (1) applying a given function to every element of the original list, and (2) retaining only those elements of the original list which satisfy a given criterion. These two operations are called **map** and **filter**, respectively. 

    pre: code.language-python
      | def square(x):
      |     return x*x
      | 
      | 
      | list(map(square, range(5))) # returns [0, 1, 4, 9, 16]
      | 
      | def iseven(x):
      |     return x % 2 == 0
      | 
      | 
      | list(filter(iseven, range(5))) # returns [0,2,4]

The extra calls to _{code.language-python}list_ in the examples above are required to see the result because _{code.language-python}map_ and _{code.language-python}filter_ are *lazy*: they return objects which *promise* to perform the specified calculation when it's needed. 

Python provides a convenient [syntax](gloss:syntax) for both mapping *and* filtering: the **list comprehension**. It's essentially a programming version of set builder notation. For example, to square the even numbers from 0 to 4, we can use the following expression: 

    pre(data-executable)
      | [x**2 for x in range(5) if x % 2 == 0]

_{button.next-step} Continue_

---

Let's break this example down step-by-step: the first value of _{code.language-python}range(5)_ is assigned to the variable _{code.language-python}x_, and then the _{code.language-python}if_ expression is evaluated. If it's true, the expression _{code.language-python}x**2_ is evaluated and stored as the first value of the list that is to be returned. Then the second value of _{code.language-python}range(5)_ is assigned to _{code.language-python}x_, the condition is evaluated, and so on. 

::: .exercise
**Exercise**  
Write a list comprehension which returns a list whose kth entry is the the last digit of the kth three-digit prime number.
:::

    pre(data-executable)
      | from sympy import isprime
      | 
      
_{button.next-step} Continue_

---

*Solution*. Here's an example solution:

    pre(data-executable)
      | from sympy import isprime
      | [str(p)[-1] for p in range(100,1000) if isprime(p)]
      
<p></p>

::: .exercise
**Exercise**  
Write a list comprehension which takes a list of lists and returns only those lists whose second element has a least five characters. 
:::

    pre(data-executable)
      | records = [[3, "flower", -1], [2, "rise", 3], [0, "basket", 0]]
      | 
      
_{button.next-step} Continue_

---

*Solution*. Here's one solution:

    pre(data-executable)
      | [record for record in records if len(record[1]) >= 5]

_{button.next-step} Continue_

---

### Tuples

Tuples are very similar to lists, except that tuples are [immutable](gloss:immutable).

    pre(data-executable)
      | 
      | row = (22,2.0,"tomato")
      | row[2] # returns "tomato"
      | row[2] = "squash" # throws TypeError
      |   

<p></p>

Programmers tend to use tuples instead of lists in situations where **position** in the tuple carries more meaning than **order**. For example, perhaps the tuple assigned to _{code.language-python}row_ above describes a row of plants in a garden, with the three numbers indicating the number of plants, the number of weeks since they were planted, and the type of plant. We could have chosen some other order for those three values, as long as we're consistent about which position corresponds to which value. By contrast, the 22 heights of the plants on that row would typically be stored in a *list*, since the list order corresponds to something meaningful in that case (namely, the order of the plants in the row).

_{button.next-step} Continue_

---

Functions often return multiple values by returning a tuple containing those values. You can access individual elements of a tuple without having to index the tuple using *tuple unpacking*: 

    pre(data-executable)
      | 
      | mycolor = (1.0,1.0,0.44)
      | r, g, b = mycolor
      | b 
      |   

<p></p>

The convention in Python for values you don't want to store is to assign them to the variable whose name is just an underscore. That way you don't have to think of names for those variables, and you signal to anyone reading your code that you are not using those values.

_{button.next-step} Continue_

---

Tuple unpacking can be combined with list comprehension syntax. If we want to extract the first element from each tuple in a list of triples, for example, we can do that as follows:

    pre(data-executable)
      | L = [(1,2,3),(4,5,6),(7,8,9)]
      | [a for (a,_,_) in L]

<p></p>

The value 1 is assigned to _{code.language-python}a_, the value 2 is assigned to the underscore variable, and then the value 3 is also assigned to the underscore variable (this overwrite is no problem since we aren't using that value anyway). Then _{code.language-python}a_ is evaluated as the first element in the new list, and the process repeats for the remaining triples in the list.

::: .exercise
**Exercise**  
Write a list comprehension which adds the first two elements of each tuple in _{code.language-python}L_. (So for the example above, the resulting list should be _{code.language-python}[3, 9, 15]_.)
:::

_{button.next-step} Continue_

---

*Solution*. Same idea: 

    pre(data-executable)
      | L = [(1,2,3),(4,5,6),(7,8,9)]
      | [a+b for (a,b,_) in L]

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
The fractional part of a positive real number $x$ is the part after the decimal point: it's defined to be the positive difference between $x$ and the greatest integer which is less than or equal to $x$. You can find the fractional part of _{code.language-python}x_ in Python with the expression _{code.language-python}x - int(x)_. 

Find the fractional parts of the first 100 positive integer multiples of $\pi$. Use the function _{code.language-python}extrema_ on the resulting array to find its least and greatest values. Find the ratio of the greatest value to the least. 
:::

    pre(data-executable)
      | from numpy import pi
      | 
      | def extrema(L):
      |     "Return (min,max) of L"
      |     m = L[0]
      |     M = L[0]
      |     for element in L:
      |         if element > M:
      |             M = element
      |         elif element < m:
      |             m = element
      |     return (m,M)

<p></p>

_{button.next-step} Continue_

---

*Solution*. We use tuple unpacking to extract the min and max values from the tuple returned by the _{code.language-python}extrema_ function.

    pre(data-executable)
      | m,M = extrema([pi*k-int(pi*k) for k in range(1,101)])
      | M/m

<p></p>

The result is about 56.08. 

_{button.next-step} Continue_

---

A common pattern for generating new arrays combines list comprehension, tuple unpacking, and the function _{code.language-python}zip_. The _{code.language-python}zip_ function takes two arrays and returns a single array of pairs of corresponding entries (or three arrays, in which case it returns an array of triples, etc.). For example, 

    pre: code.language-python 
      | 
      | zip(["a", "b", "c"], [1, 2, 3])
      |   
      
returns an object which is equivalent to _{code.language-python}[("a", 1), ("b", 2), ("c", 3)]_. 

If we have three vectors $A$, $B$, and $C$ of equal length, then the vector sum $A + B + C$ can be computed using the expression _{code.language-python}[a + b + c for (a,b,c) in zip(A,B,C)]_. 

::: .exercise
**Exercise**  
Suppose that $H$ is a list which stores the heights of 100 cylinders and $R$ is a list which stores their radii (in the same order). Write a [list comprehension](gloss:listcomp) which returns a list containing the volumes of these cylinders. 
:::

_{button.next-step} Continue_

---

*Solution*. We zip $H$ and $R$ and use the volume formula $\pi r^2 h$: 

    pre: code.language-python
      | from numpy import pi
      | [pi*r*r*h for (h,r) in zip(H,R)]

### Sets

**Sets** are unordered collections of unique values. The main advantage of having a special type for sets is that the design of the data structure can be optimized for membership checking. Figuring out whether a given value is in a list requires going through each element in the list, so the amount of time it takes increases with the length of the list. By contrast, checking membership in a set can be done very quickly even if the set is large. 

    pre: code.language-python
      | 
      |     A = [1,2,3]
      |     S = set(A)
      |     2 in S # evaluates to true
      |     S.pop(2) # removes 2
      |     S.add(11) # puts 11 in the set
      |     2 in S # evaluates to false now
      |   
 
::: .exercise
**Exercise**  
Make a set which contains the first 10,000 prime numbers. Hint: it suffices to look for primes among the first 110,000 integers. Compare how long it takes to check whether a given number is in that set to the time it takes to compute whether the number is prime using _{code.language-python}sympy.isprime_. 

Note: the most reliable and efficient way to figure out how the _{code.language-python}timeit_ function works is to [[run help(timeit)|try it on different examples and guess|ask on StackOverflow]]. 

::: 

    pre(data-executable)
      | import timeit
      | SETUP = """
      | from sympy import isprime
      | primes = [] #todo
      | primesSet = set(primes)
      | """
      | a = timeit.timeit("98779 in primes", setup = SETUP)
      | b = timeit.timeit("98779 in primesSet", setup = SETUP)
      | c = timeit.timeit("isprime(98779)", setup = SETUP)
      | a,b,c
      
<p></p>      

_{button.next-step} Continue_

---

*Solution*. To get exactly 10,000 primes, we index the list obtained by filtering out the composite numbers:

    pre(data-executable)
      | import timeit
      | SETUP = """
      | from sympy import isprime
      | primes = [k for k in range(2,110_000) if isprime(k)][:10000]
      | primesSet = set(primes)
      | """
      | a = timeit.timeit("98779 in primes", setup = SETUP)
      | b = timeit.timeit("98779 in primesSet", setup = SETUP)
      | c = timeit.timeit("isprime(98779)", setup = SETUP)
      | a,b,c

<p></p>

Put the three methods in order from fastest to slowest: 

    x-sortable
      .item.md(data-index="2") List membership checking
      .item.md(data-index="0") Set membership checking
      .item.md(data-index="1") Computing from scratch

### Dictionaries

The internal mechanism that sets use to check membership extremely fast is also useful when the information you want to retrieve is more complex than just _{code.language-python}True_ or _{code.language-python}False_. 

For example, suppose you want to store a collection of color names together with the [RGB values](https://en.wikipedia.org/wiki/RGB_color_model) for each one. We'll store the names as [[strings|floats|ints]] and the RGB triples as [[tuples|strings|floats]]. 

---

It's possible to do this by putting the names in a list and the values in a list of the same length: 

    pre: code.language-python
      | names = ["fuchsia", "firebrick", "goldenrod"]
      | rgbs = [(256, 0, 256), (178, 34, 34), (218, 165, 32)]
      
However, this solution gets very tedious quickly. For example, modifying this structure requires [[modifying both lists|modifying at least one of the lists]]. 

The Python data structured tailored to the problem of encoding a map from one finite set to another is called a **dictionary**. Dictionary literals consist of a comma separated list of the desired input-output pairs (with each input and output separated by a colon) delimited by curly braces. For example, the dictionary encoding the map described above looks like this:

    pre(data-executable)
      | rgb = {"fuchsia": (256, 0, 256),
      |        "firebrick": (178, 34, 34),
      |        "goldenrod": (218, 165, 32)}

<p></p>

The domain elements _{code.language-python}"fuchsia"_, _{code.language-python}"firebrick"_ and _{code.language-python}"goldenrod"_ are called the **keys** of the dictionary, and the codomain elements _{code.language-python}(256,0,256)_, _{code.language-python}(178,34,34)_, and _{code.language-python}(218,165,32)_ are called the **values**. 

We can also form new dictionaries from lists of pairs using the _{code.language-python}dict_ function:

    pre: code.language-python
      | dict([("fuchsia": (256, 0, 256)),
      |       ("firebrick": (178, 34, 34)),
      |       ("goldenrod": (218, 165, 32))])

_{button.next-step} Continue_

---

We can perform a dictionary lookup using indexing [syntax](gloss:syntax): _{code.language-python}rgb["fuchsia"]_ returns _{code.language-python}(256,0,256)_. We can also change the value associated with a given key or introduce a new key-value pair using indexing and assignment: 

    pre(data-executable)
      | rgb = {"fuchsia": (256, 0, 256),
      |        "firebrick": (178, 34, 34),
      |        "goldenrod": (218, 165, 32)}
      | rgb["crimson"] = (220, 20, 60)
      | len(rgb)

<p></p>

The _{code.language-python}dict_ [methods](gloss:method) _{code.language-python}keys_ and _{code.language-python}values_ may be used to access the keys and values of a dictionary. 

    pre(data-executable)
      | rgb = {"fuchsia": (256, 0, 256),
      |        "firebrick": (178, 34, 34),
      |        "goldenrod": (218, 165, 32)}
      | rgb.keys()

<p></p>

::: .exercise
**Exercise**  
Consider a dictionary which encodes flight arrival times: 

    pre: code.language-python
      | import datetime
      | arrivalTimes = {"JetBlue 924": datetime.time(7,9),
      |                 "United 1282": datetime.time(7,42),
      |                 "Southwest 196": datetime.time(7,3)}

You can most easily use this dictionary to [[look up the arrival time of a flight|look up which flights arrive at a given time]]. 

Suppose you want to reverse the lookup direction: for any given time, you want to see which flight arrives at that time. One problem is that [[multiple flights may arrive at the same time|the airlines aren't the same]]. 

Assuming that the codomain values are distinct, however, you can form a new dictionary that allows you to look up keys for values by mapping the _{code.language-python}reversed_ function over the key-value pairs of the dictionary (obtainable through _{code.language-python}items_ method). 

Implement this idea in the block below. Check that your dictionary works by indexing it with _{code.language-python}datetime.time(7,9)_. 

:::

    pre(data-executable)
      | 

_{button.next-step} Continue_

---

*Solution*. We use the _{code.language-python}dict_ function to convert the list of pairs back into a dictionary: _{code.language-python}dict(map(reversed,arrivalTimes.items()))_. 

    script(src='/juniper.min.js')
    script
      include juniper-setup.js

---

### Exercises 

::: .exercise
**Exercise**  
You can create a _{code.language-python}dict_ comprehension in a similar way to a dict comprehension. Here's a dictionary that maps each one-digit positive integer to its square: 

    pre: code.language-python
      | {k:k*k for k in range(1, 10)}

Make a dictionary that maps each of the first 100 powers of 2 to its units digit. (Note: you can get the units digit of a number by converting it to a string using the _{code.language-python}str_ function, indexing to get the last character, and converting back to an integer with _{code.language-python}int_.)
:::

    pre(data-executable)
      | 

_{button.next-step} Continue_

---

*Solution*. We use the technique suggested in the problem statement: 

    pre(data-executable)
      | {2**k: int(str(2**k)[-1]) for k in range(100)}

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
(Try doing this one without executing any code.) What will the value of _{code.language-python}L_ be after the following block is executed?  [[ [4,1,2,7,3,-1,8] | [4,1,2,7,3,-1] | [4,2,1,7,3,-1,8] ]]

    pre: code.language-python
      | L = [4, 8, 2]
      | L.append(7)
      | L.extend([3,-1,8])
      | L.insert(2, 1)
      | L.remove(8)

:::

_{button.next-step} Continue_

---

::: .exercise
**Exercise**  
Suppose you want to store student IDs in a part of a web application where the main thing you need to do is check whether an ID input by a student is a valid student ID (so you can flag it if they mistyped something). The best data structure for this purpose would be a [[set|list|tuple|dictionary]]. 
:::

_{button.next-step} Continue_

---

*Solution*. This is ideal use case for sets. Lists and tuples will be slower for checking membership, and dictionaries aren't quite appropriate because it isn't clear what the values would be.

---


> id: iteration
## Iteration

We have already seen one way of doing something to each element in a collection: the [*list comprehension*](gloss:listcomp).

    pre(data-executable)
      | smallestFactor = {2: 2, 3: 3, 4: 2, 5: 5, 
      |                 6: 2, 7: 7, 8: 2, 9: 3}
      | vals = [v for (k,v) in smallestFactor.items()]

<p></p>

In this list comprehension, we **iterate** over the pairs of the [dictionary](gloss:dictionary) to produce a new list. Although list comprehensions are very useful, they are not flexible enough to cover all our iteration needs. A much more flexible tool is the **for loop**.

### For statements

The code above could also be rewritten as follows:

    pre(data-executable)
      | smallestFactor = {2: 2, 3: 3, 4: 2, 5: 5, 
      |                 6: 2, 7: 7, 8: 2, 9: 3}
      | vals = []
      | for (k,v) in smallestFactor.items():
      |     vals.append(v)
    
<p></p>
      
The statement _{code.language-python}for item in collection:_ works as follows: the first element of _{code.language-python}collection_ is assigned to _{code.language-python}item_, and the block indented below the _{code.language-python}for_ statement is executed. Then the second element of _{code.language-python}collection_ is assigned to _{code.language-python}item_, the indented block is executed again, etc., until the end of the collection is reached. 

_{button.next-step} Continue_

---

We can nest _{code.language-python}for_ statements. For example, suppose we have a matrix represented as a [list](gloss:list) of lists, and we want to sum all of the matrix entries. We can do that by iterating over the rows and then iterating over each row: 

    pre(data-executable)
      | 
      | def sumMatrixEntries(M):
      |     """
      |     Return the sum of the entries of M
      |     """
      |     s = 0
      |     for row in M:
      |         for entry in row:
      |             s = s + entry
      |     return s
      | 
      | 
      | def test_sum():
      |     M = [[1,2,3],[4,5,6],[7,8,9]]
      |     assert sumMatrixEntries(M) == 45

<p></p>

::: .exercise
**Exercise**  
Suppose you have imported a function _{code.language-python}fileBugReport_ with two parameters: _{code.language-python}id_ and _{code.language-python}description_. Suppose also that you have a _{code.language-python}dict_ called _{code.language-python}bugs_ whose keys are ids and whose values are strings representing descriptions. Write a loop which performs the action of filing each bug report in the dictionary.  
:::

    pre(data-executable)
      | def fileBugReport(id, description):
      |     "A dummy function which represents filing a bug report"
      |     print(f"bug {id} ({description}) successfully filed")
      | 
      | 
      | bugs = {"07cc242a": 
      |           "`trackShipment` hangs if `trackingNumber` is missing", 
      |         "100b359a": 
      |           "customers not receiving text alerts"}


---



_{button.next-step} Continue_

::: .exercise
**Exercise**  
Write a [function](gloss:function) called _{code.language-python}factorial_ which takes a positive integer _{code.language-python}n_ as an argument and returns its factorial. 
:::

_{button.next-step} Continue_

---

*Solution*. We loop through _{code.language-python}range(1, n+1)_ and multiply as we go. 

    pre(data-executable)
      | def factorial(n):
      |     "Return n!"
      |     product = 1
      |     for k in range(1, n+1):
      |         product = k * product 
      |     return product
      | 
      | 
      | def test_factorial():
      |     assert factorial(3) == 6
      |     assert factorial(0) == 1
      |     assert factorial(20) == 2432902008176640000
      
_{button.next-step} Continue_

---

### While statements

The **Collatz conjecture** is one of the easiest-to-state unsolved problems in mathematics. Starting from any given positive integer, we halve it if it's even and triple it and add one if it's odd. The Collatz conjecture states that repeatedly applying this rule always gets us to the number 1 eventually. For example, the *Collatz sequence* starting from 17 is

    center: p 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1

If we want to write a Python function which returns the Collatz sequence for any given starting number, we face a problem: we don't know from the start how many steps it will take to reach 1, so it isn't clear how this should fit into the *for loop* paradigm of iterating over a collection. What we want to do is execute a block of code until a given condition is met. Python provides the _{code.language-python}while_ loop for this purpose.

    pre(data-executable)
      | def collatzSequence(n):
      |     "Return the Collatz sequence starting from n"
      |     sequence = [n]
      |     while n > 1:
      |         if n % 2 == 0:
      |             n = n // 2
      |         else:
      |             n = 3*n + 1
      |         sequence.append(n)
      |     return sequence
      | 
      | 
      | def test_collatz():
      |     assert collatzSequence(17) == [17, 52, 26, 13, 
      |                                 40, 20, 10, 5, 
      |                                 16, 8, 4, 2, 1]
      
<p></p>

The expression which appears immediately following the _{code.language-python}while_ keyword is called the **condition**, and the block indented below the _{code.language-python}while_ statement is the **body** of the loop. The rules of the language stipulate the following execution sequence for a _{code.language-python}while_ statement: the condition is evaluated, and if it's true, then the body is executed, then condition is evaluated again, and so on. When the condition returns _{code.language-python}False_, the loop is exited. An exit can also be forced from within the body of the while loop with the keyword _{code.language-python}break_. 

::: .exercise
**Exercise**  
Newton's algorithm for finding the square root of a number _{code.language-python}n_ starts from 1 and repeatedly applies the function $x\mapsto \frac{1}{2}(x + n/x)$. For example, applying this algorithm to approximate $\sqrt{2}$, we get 

    center: p 1, 3/2, 17/12, 577/408, ...
    
This algorithm converges very fast: 577/408 approximates $\sqrt{2}$ with a relative error of about 0.00015%. 

Write a function _{code.language-python}newtonsqrt_ which takes as an argument the value _{code.language-python}n_ to square root and applies Newton's algorithm until the relative difference between consecutive iterates drops below $10^{-8}$. 

Note that $10^{-8}$ can be represented in Python using scientific notation _{code.language-python}1e-8_. 
:::

    pre(data-executable)
      | def newtonsqrt(n):
      |     """Use Newton's algorithm to approximate √n"""
      | 
      | 
      | def test_newton():
      |     assert abs(newtonsqrt(2) - 1.4142135623730951) < 1e-6
      |     assert abs(newtonsqrt(9) - 3) < 1e-6

      
_{button.next-step} Continue_

---

*Solution*. We keep up with two separate variables, which we call _{code.language-python}x_ and **{code.language-python}old_x**, to compare the most recent two iterates: 

    pre(data-executable)
      | def newtonsqrt(n):
      |     """Use Newton's algorithm to approximate √n"""
      |     x = 1
      |     while True:
      |         old_x = x
      |         x = 1/2 * (x + n/x)
      |         if abs(x - old_x)/old_x < 1e-8:
      |             return x
      | 
      | 
      | def test_newton():
      |     assert abs(newtonsqrt(2) - 1.4142135623730951) < 1e-6
      |     assert abs(newtonsqrt(9) - 3) < 1e-6

    script(src='/juniper.min.js')
    script
      include juniper-setup.js

---

> id: project-1˘
## Project 1: Spotify

One of the most challenging aspects of learning to program is the difficulty of synthesizing individual skills in the service of a larger project. This section provides a stepping stone on that path by progressively solving a real-world problem. 

You'll want to follow along either on your own machine or in [Binder](https://mybinder.org/v2/gh/sswatson/simple-python-stack/master). You can't use code blocks in this page, because there's an authentication step which requires a feature which isn't supported here. However, it's good practice to begin moving away from doing your programming in the tutorial web app!

_{button.next-step} Continue_

---

### Spotify

As an avid Spotify listener, you find that you'd prefer more flexibility in the way your playlists are built. For example, you find it tedious when two particularly long songs play back-to-back, and you want to eliminate those instances without having to read through and do it manually. Also, you want to have at least three separate genres represented in every block of eight consecutive songs. You want the flexibility to modify these requirements or add new ones at any time. 

This is not the sort of capability that Spotify is ever going to provide through its app, but Spotify *does* support interaction through a programming language. Such an interface is called an **API** (application programming interface). 

_{button.next-step} Continue_

---

You decide to google *Spotify API* to see what the deal is. That takes you to the [main Spotify API page](https://developer.spotify.com/documentation/web-api/), where you read about how the API uses standard HTTPS requests (these are the requests that your browser is using in the background load webpages, enter information into forms on the internet, etc.). Rather than proceeding along this route, you think to yourself "surely someone in the vast Python world has made a Python package to handle these HTTPS requests". So you google "Spotify Python API". 

_{button.next-step} Continue_

---

Turns out, you were right. The first few hits pertain to a package called _{code.language-python}spotipy_. You check out [the docs](https://spotipy.readthedocs.io/en/latest/) and find that you can install the package by running _pip install spotipy_. Since _{code}pip_ is a command line tool, this is something you should run from the terminal. Note: if you're working in a Jupyter notebook, you can send code from a cell to the command line by prepending an exclamation point: 

    pre: code.language-python
      | !pip install spotipy
      
_{button.next-step} Continue_

---

Looking around in the documentation a bit more, we discover the functions **{code.language-python}user_playlist_tracks** and **{code.language-python}user_playlist_add_tracks**, which retrieve the tracks on a playlist and add new ones to it, respectively. So you decide to get the tracks from one of your playlists, manipulate them however you want inside the Python program, and put the new list in place of the old one. All we need from Spotify to make this work, in addition to the previous two functions, is a function to [[remove the existing tracks|swap tracks one at a time|get a list of the playlist tracks]]. 

---

Looking around a bit more, you find **{code.language-python}user_playlist_remove_all_occurrences_of_tracks**, which isn't exactly what you were looking for, but it will work since we can [[remove every track originally on the playlist|instruct it to remove every track on Spotify]]. 

---

Your plan is beginning to take shape. You decide to make sure everything works before getting into the details of how you're going to modify the playlist. You follow the instructions in the documentation for getting the appropriate authorization credentials for your Python program to access your Spotify account. That step is a bit tedious, but it's going to be worth it. Working from the example in the documentation, you eventually arrive at some code that looks like the following (note that your _{code.language-python}CLIENT_ variables and **{code.language-python}playlist_id** will necessarily be different). 

    pre: code.language-python    
      | import spotipy
      | import spotipy.util as util
      | 
      | username = 'sswatson'
      | scope = 'user-library-read'
      | scope = 'playlist-modify-public'
      | 
      | CLIENT_ID = 'bcc57908a2e54cee94f9e2307db67c2e'
      | CLIENT_SECRET = '6831b3ceaf0a40a6a1fdeb67105ef19b'
      | 
      | playlist_id = '57hQnYeBC4u0IUhaaHmM0k'
      |   
      | token = util.prompt_for_user_token(username, 
      |                                    scope,
      |                                    client_id=CLIENT_ID,
      |                                    client_secret=CLIENT_SECRET,
      |                                    redirect_uri='http://localhost/')
      | 
      | sp = spotipy.Spotify(auth=token)

_{button.next-step} Continue_

---

Next, you implement your plan sans-track-modification, to make sure the functions work as expected. 

    pre: code.language-python
      | original_tracks = sp.user_playlist_tracks(username, playlist_id)
      | remove_tracks = sp.user_playlist_remove_all_occurrences_of_tracks
      | remove_tracks(username, playlist_id, original_tracks)
      | sp.user_playlist_add_tracks(username, playlist_id, original_tracks)
      
That second line is there because you decided that function's name was so long it was getting unwieldy. 

_{button.next-step} Continue_

---

Hmm. Error. Specifically, a _{code.language-python}SpotifyException_, which suggests that you didn't use the API in the intended way. You'll have to dig into this to figure out what went wrong. But first, it's a bit untidy to have those four lines of code loose in our program. Let's wrap them in a function. The playlist id should be an argument, and we should also take as an argument a track-modifying function that we'll start using once we get to that part. 

    pre: code.language-python
      | def modify_playlist_tracks(playlist_id, track_modifier):
      |     original_tracks = sp.user_playlist_tracks(username, playlist_id)
      |     new_tracks = track_modifier(original_tracks)
      |     remove_tracks = sp.user_playlist_remove_all_occurrences_of_tracks
      |     remove_tracks(username, playlist_id, original_tracks)
      |     sp.user_playlist_add_tracks(username, playlist_id, new_tracks)


Now let's figure out the error. If we examine the traceback supplied as a part of the error message, we can see that the error is being thrown from the line where we call **{code.language-python}remove_tracks**. So we look at the documentation for that function. 

    pre: code.language-python
      | help(remove_tracks)

We see that the _{code.language-python}tracks_ argument is supposed to be a list of playlist ids. Is that what **{code.language-python}user_playlist_tracks** returns? You investigate. 

    pre: code.language-python
      | original_tracks = sp.user_playlist_tracks(username, playlist_id)
      | original_tracks

The output from that expression prints all over the screen, and it looks like it has a lot more data than just a list of id's. That's actually pretty helpful, because we'll need that data to modify the list appropriately. But in the meantime, we need to extract the actual playlist ids. 

_{button.next-step} Continue_

---

You begin by checking **{code.language-python}type(original_tracks)**. It's a [[dict|list|tuple]]. So you have a look at its keys: 

    pre: code.language-python
      | original_tracks.keys()
      
---      

This returns

    pre: code.language-python
      | dict_keys(['href', 'items', 'limit', 'next', 'offset', 'previous', 'total'])

Without looking to carefully at the other items, it's a good guess that _{code.language-python}'items'_ is the one you want. You check 
**{code.language-python}type(original_tracks['items'])** and find that it's a [[list|dict|tuple]]. To have a look at the first one, you do **{code.language-python}original_tracks['items'][0]**. Repeating this step-by-step inspection, you find finally that **{code.language-python}original_tracks['items'][0]['track']['id']** is an actual playlist id. 

---

::: .exercise
**Exercise**  
Use a [list comprehension](gloss:listcomp) to calculate the list of all of the tracks' playlist ids. 
:::

_{button.next-step} Continue_

---

*Solution*. **{code.language-python}[item for item in original_tracks['items']]** would return the _{code.language-python}'items'_ list. To map each item to its playlist id, we index it with _{code.language-python}'track'_ and then with _{code.language-python}'id'_ as above. So we get **{code.language-python}[item['track']['id'] for item in original_tracks['items']]** 

_{button.next-step} Continue_

---

You insert this list comprehension into our function to fix it. You decide to reverse the list of tracks just to confirm that running the code has an effect on the Spotify side. 

    pre: code.language-python
      | def modify_playlist_tracks(playlist_id, track_modifier):
      |     original_tracks = sp.user_playlist_tracks(username, playlist_id)
      |     new_tracks = track_modifier(original_tracks)
      |     remove_tracks = sp.user_playlist_remove_all_occurrences_of_tracks
      |     original_ids = [item['track']['id'] for item in
      |                                         original_tracks['items']]
      |     remove_tracks(username, playlist_id, original_ids)
      |     sp.user_playlist_add_tracks(username, playlist_id, new_tracks)
      | 
      | 
      | def track_modifier(tracks):
      |     return reversed([item['track']['id'] for item in tracks['items']])
      | 
      | 
      | modify_playlist_tracks(playlist_id, track_modifier)

This works! You can check that the order of the playlist was reversed. 

::: .exercise
**Exercise**  
Add more features to the function **{code.language-python}track_modifier** to modify playlists in ways that you find interesting or desirable. 
:::

_{button.next-step} Continue_

---

> id: project-2
## Project 2: Mail Merge

Suppose you want to send an email to dozens of people, with some elements of the message varying by recipient. For example, you'd like to insert the recipient's first name in the salutation, and you might also need to insert a personal URL or passcode, information on the recipient's status, etc. 

This problem is called *mail merge*, and there are many commercial software solutions available. However, in this section we'll implement a simple and flexible mail merge in Python. 

_{button.next-step} Continue_

---

### yagmail

The first hurdle is to securely authorize your Python program to access your email account. We'll do this for Gmail accounts using a package called [yagmail](https://github.com/kootenpv/yagmail). You will want to do this on your computer, because the authorization step involves using your operating system keychain. 

Following the installation instructions, we run _{code.language-python}pip3 install yagmail[all]_ from the command line to install _{code.language-python}yagmail_. 

_{button.next-step} Continue_

---

Continuing to follow the instructions, we run

    pre: code.language-python
      | import yagmail
      | yagmail.register('mygmailusername')

and enter the password for the Gmail account in the resulting password prompt. This stores the password in the operating system keychain so we don't have to keep entering it. 

_{button.next-step} Continue_

---

Now we can set up an _{code.language-python}SMTP_ object for sending messages. 

    pre: code.language-python
      | yag = yagmail.SMTP("mygmailusername@gmail.com")

In the documentation, we read that this object has a _{code.language-python}send_ method whose parameter list includes _{code.language-python}to_, _{code.language-python}subject_, and _{code.language-python}contents_. We want to call this method once for each recipient, and for that we will use a [[for loop|while loop|if statement]]. 

---

### CSV

Before sending the message, we have to figure out to store the data for each recipient and how to insert that data into the message. One easy solution to the former problem is to store the data in a spreadsheet. We don't even need spreadsheet software if our data is straightforward enough. We make a file called _{code.language-markup}mail-merge-data.csv_, open it in a text editor, and insert the contents

    pre
      | Name,Email,Status
      | Viorica,virica@example.com,pending
      | Sidra,sidra_tiwana@example.com,completed
      | Alfonso,alfonso.serrano@example.com,pending

We save the file and proceed to figuring out how to load it into Python. 

_{button.next-step} Continue_

---

### Pandas

We google "enter CSV in Python", and we scan the first several search results. The first couple show examples with a dozen or so lines of code, which seems more complicated than necessary. Going back to the search results, we see a function called **{code.language-python}pandas.read_csv**, and we remember that Pandas is the recommended package for handling spreadsheet data in Python. So we do 

    pre: code.language-python
      | import pandas as pd
      | mailData = pd.read_csv("mail-merge-data.csv")
      
We check _{code.language-python}type(mailData)_ and see that _{code.language-python}mailData_ is a _{code.language-python}DataFrame_, which is the general Pandas type for tabular data. 
      
_{button.next-step} Continue_

---

Now we have to figure out how to loop over the rows of a _{code.language-python}DataFrame_. We search the web for "how to loop over rows of pandas dataframe" and discover the method [[**itertuples** | **iteritems** | **items**]] (look it up!). 

---

We do _{code.language-python}list(mailData.itertuples())[0]_ to get an example row from the _{code.language-python}DataFrame_, and we call _{code.language-python}dir_ on it to look for the right method for extracting each column value. We see that _{code.language-python}Name_, _{code.language-python}Email_, and _{code.language-python}Status_ are attributes of the row, so you can access them using dot syntax (like _{code.language-python}row.Email_). 

_{button.next-step} Continue_

---

Finally, we need to insert information from each _{code.language-python}DataFrame_ row into the message. Fortunately, we've already learned a great way to do this: [[f-strings|dictionaries|lists]]! 

---

It will be a bit awkward to type the whole message into the line where we call _{code.language-python}yag.send_, so instead we write a function that takes _{code.language-python}row_ as a parameter and returns the message. 

    pre: code.language-python
      | def message(row):
      |     return f"""
      |     Dear {row.Name},
      |     
      |     Thanks for participating! Your status is {row.Status}. 
      |     
      |     Yours,
      |     Roza
      |     """

::: .exercise
**Exercise**  
Tie all of the above together to write a couple more lines of code that will actually send the messages. 
:::

_{button.next-step} Continue_

---

*Solution*. We supply the _{code.language-python}Email_ attribute of _{code.language-python}row_ to the _{code.language-python}to_ argument, and  _{code.language-python}message(row)_ to _{code.language-python}contents_:

    pre: code.language-python
      | for row in mailData.itertuples():
      |     yag.send(to=row.Email, 
      |              subject="Your status",
      |              contents = message(row))
      
_{button.next-step} Continue_

---

Congratulations! You have finished the Data Gymnasia *Programming with Python* course.

    script(src='/juniper.min.js')
    script
      include juniper-setup.js

