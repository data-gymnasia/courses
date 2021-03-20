# Programming in Python

## Introduction

> id: intro
> section: introduction
> description: A hands-on, test-driven introduction to programming in Python, including types, functions, classes, lists, tuples, dictionaries and flow control.
> color: "#88349a"
> next: linear-algebra
> author: Samuel S. Watson

This chapter is an introduction to programming in **Python**, which is a general-purpose language with a very large user base in the software engineering world. With the emergence of a powerful stack of scientific computing [packages](gloss:package) since the early 2000s, it has emerged as the most popular language for data science.

Although programming is a powerful tool, learning to program is also about honing your problem solving skills and thinking in an organized way about structure and computation. You are likely to find that computer science ideas support your ability to reason about complex systems, even in situations where you won't be programming anything. This is a useful frame of mind to bring to the learning process.

[Continue](btn:next)

---
> id: step-1

This course contains many exercises. Doing them in earnest is essential for knowledge and skill retention. You should solve each exercise prior to clicking the "Continue" button to see an example solution.

[Continue](btn:next)

---
> id: step-2

### Installation

There are several ways to access Python:

**Inline**. This course will let you execute Python code blocks in the webpage (thanks to [Juniper](https://github.com/ines/juniper) and [Binder](https://mybinder.org)). So if you don't want to install anything yet, you don't have to. (However, the first cell you run will be slow with this method, like up to 30 seconds, since your environment has to be launched behind the scenes on Binder's servers. If it's taking too long, reload the page.)

[Continue](btn:next)

---
> id: step-3

**Binder**. You can also run Python code in a notebook on the Binder website. To launch with a set of packages tailored to this course, [click here](https://mybinder.org/v2/gh/data-gymnasia/python-binder/master). Then, select *New* (top right corner and *Python 3*). It is highly recommended that you keep a tab with a Binder notebook open while working through this course, because it can serve as a space for scratch work, and it provides more features than the blocks which appear in-page.

[Continue](btn:next)

---
> id: step-4

**Anaconda**. Python is bundled with its system of scientific computing packages and for managing Python environments in a distribution called [Anaconda](https://www.anaconda.com/). This is the recommended way to install Python on your own computer. [Download](https://www.anaconda.com/distribution) and launch the installer to set it up on your computer.

[Continue](btn:next)

---
> id: step-5

**CoCalc**. If you want a complete environment without having to install anything locally, [CoCalc](https://cocalc.com) is a batteries-included, community-oriented platform for open-source mathematical and scientific computing. You can use it for free with limited functionality, and it's $14 per month to support the project and get paid account features.

[Continue](btn:next)

---
> id: step-6


### Usage

Once you have Python installed, there are several ways to interact with it.

**REPL**. Launch a read-eval-print loop from the [command line](gloss:command-line). Any code you enter will be executed immediately, and any values returned by your code will be displayed. To start a session, open your operating system's Terminal and run `{py} python` or `{py} ipython` (the latter being more colorful and having more features). You can do this in Binder by selecting *New > Terminal*.

[Continue](btn:next)

---
> id: step-7

**Script**. Save a file called _{code}example.py_ and run _{code}python example.py_ from the [command line](gloss:command-line) (in the same directory as the file) to execute all the code in the script. You can do this in Binder by selecting *New > Text File* and then changing the name of the text file to something that ends in _{code}.py_.

[Continue](btn:next)

---
> id: step-8

**Jupyter**. Like a REPL, but allows inserting text and math expressions, grouping code into blocks, etc. This is the interface provided by default in [Binder](https://mybinder.org/v2/gh/data-gymnasia/python-binder/master), and you can launch a notebook locally by running `{py} jupyter notebook` from the [command line](gloss:command-line) (assuming you have [Anaconda](gloss:anaconda) installed).

[Continue](btn:next)

---
> id: step-9

**Integrated development environment (IDE)**. Essential for extensive software development projects, an IDE provides an editor for writing code, conveniences to help you code more efficiently, and a debugger to help you fix your mistakes. There are many IDEs for Python, including Visual Studio Code, Atom, and PyCharm.

[Continue](btn:next)

---
> id: step-10

::: .exercise
**Exercise**.  
Sort the following Python interaction modes in the order in which they appear in this video.

    figure: center: video(src="images/jupyter-script-repl.mp4" width="75%" controls)

    x-sortable
      .item.md(data-index="2") REPL
      .item.md(data-index="1") Script
      .item.md(data-index="0") Jupyter

:::

---

## Basics

> id: basics
> section: basics

Let's begin by developing some basic vocabulary for the elements of a program. This section is an overview: will develop some of these ideas in greater depth in later sections.

[Continue](btn:next)

---
> id: step-11

### Objects

An **object** is a fundamental entity that may be manipulated by a program. Objects have **types**; for example, `{py} 5` is an `{py} int` (short for "integer") and `{py} "Hello world!"` is a `{py} str` (short for "string"). Types are important for the computer to keep track of, since objects are stored differently depending on their type.

[Continue](btn:next)

---
> id: step-12

You can check the type of an object using `{py} type`. For example, running `{py} type("hello")` gives `{py} str`.

[Continue](btn:next)

---
> id: step-13

::: .exercise
**Exercise**.  
Use the code block below to find the type of `{py} 1.0`. Does `{py} 1.0` have the same type as `{py} 1`? [[No|Yes]]
:::

    pre(python-executable)
      | # replace this text with code and press enter while holding shift to run

---
> id: step-14

(_Note_: you probably noticed the `{code} Loading or None returned` message that appeared briefly when you ran the cell. If that message appears for more than 10 seconds or so, it's likely that the cell has run successfully but doesn't have anything to show as a result. We will discuss this in more detail soon.)

[Continue](btn:next)

---
> id: step-15

### Variables

A **variable** is a name used to refer to an object. We can **assign** an object (say `{py} 41`) to a variable (say `{py} age`) as follows:

``` python
age = 41
```

We say that `{py} 41` is the **value** of the variable `{py} age`.

[Continue](btn:next)

---
> id: step-16

Variable names must begin with an underscore or letter and contain only letters, digits, underscores after that. Letters may be uppercase or lowercase, and the case matters. For example `{py} extractValues0` is [[a valid|an invalid]] variable name, and `{py} stop!` is [[an invalid|a valid]] variable name.

---
> id: step-17

The object assigned to a given variable may be changed as many times as desired with further assignments.

::: .exercise
**Exercise**.  
Find the value of `{py} x` at the end of the following block of code. [[3]]

``` python
x = 3
y = x
x = x + 1
x = y
```
:::

---
> id: step-18

*Solution.* The value 3 is assigned to `{py} x` and then also to `{py} y` on the second line. After the third line, the value of `{py} x` is 4, since the right-hand side works out to 4 an is *then* assigned to the variable `{py} x`. After the fourth line `{py} 3` is of `{py} x` again, since the value of `{py} y` is still 3 when the fourth line is executed.

[Continue](btn:next)

---
> id: step-19

::: .exercise
**Exercise**.  
Use the code block below to find out what happens when you try to use a variable that hasn't had any object assigned to it: you get a [[Name]]Error.

:::

    pre(python-executable)
      | num_carrots = 4
      | num_Carrots

---
> id: step-20

Note that when an error occurs in your code, you get a **traceback** which helps you identify the source of the error.

### Functions

A **function** performs a particular task. For example, `{py} print(x)` writes a string representation of the value of the variable `{py} x` to the screen.

Prompting a function to perform its task is referred to as **calling** the function. Functions are called using parentheses following the function's name, and any objects which are needed by the function are supplied between these parentheses, separated by commas. These objects are called **arguments**.

[Continue](btn:next)

---
> id: step-21

Some functions, like `{py} print` are built into the language and are always available. You may also define your own functions using `{py} def`:

    pre(python-executable)
      | def print_twice(x):
      |     print(x)
      |     print(x)
      |
      | print_twice("hey")

[Continue](btn:next)

---
> id: step-22

`{py} def` is an example of a **keyword**: a name with a special meaning in the language. Since it has a special meaning, a keyword may not be used as a variable name.

[Continue](btn:next)

---
> id: step-23

Note that the lines of code to be executed when the function is called **must** be indented four spaces relative to `{py} def`. For example, `{py} print_twice("hey")` [[is not|is]] part of the definition of the function in the example above.

---
> id: step-24

A function may perform an action, like `{py} print_twice`, or it may **return** an object. For example, after the following code block is run, the object `{py} 28` will be assigned to the variable `{py} y`.

    pre(python-executable)
      | def add_one(x):
      |     return x + 1
      |
      | y = 20 + add_one(7)
      | y

(_Note_: we put `{py} y` by itself on the last line so that we can see the value of `{py} y` in the output area. If an assignment (like `{py} y = 20 + add_one(7)`) is the last line in the cell, then no value will be printed, and we will get the `{code} Loading or None returned` message.)

[Continue](btn:next)

---
> id: step-25

The variable name `{py} x` in the above block is called a **parameter**. Parameters play the same role as dummy variables in the definition of a mathematical function (for example, when the squaring function is defined using the notation `f(x) = x^2`).

[Continue](btn:next)

---
> id: step-26

An **operator** is a special kind of function that can be called in a special way. For example, the multiplication operator `{py} *` is called using the mathematically familiar *infix notation* `{py} 3 * 5`.

[Continue](btn:next)

---
> id: step-27

::: .exercise
**Exercise**  
Arrange the operation descriptions below in order, according the corresponding Python operator in the list `{py} +, **, *, //, /`. You might need to experiment using the code block below.

    x-sortable
      .item.md(data-index="4") division (ordinary real-number division)
      .item.md(data-index="3") integer division (quotient only; no remainder)
      .item.md(data-index="0") addition      
      .item.md(data-index="2") multiplication
      .item.md(data-index="1") exponentiation

:::

    pre(python-executable)
      | print(6 + 11)
      | print(2**5)
      | print(3 * 4)
      | print(7//2)
      | print(7/2)

---
> id: step-28

### Statements and expressions

An individual executable unit of code in Python is called a **statement**. For example, the assignment `{py} age = 41` is a statement. Statements may include **expressions**, which are combinations of values, variables, operators, and function calls that a language interprets and **evaluates** to a value. For example, `{py} 1 + age + abs(3*-4)` is an expression which evaluates to [[54]] (note that `{py} abs` is the absolute value function, and assume `{py} age` is set to the value specified earlier in the paragraph).

---
> id: step-29

::: .exercise
**Exercise**  
`{py} def f(x): return x*x` is [[a statement|an expression]]

`{py} 2 + 3*f(4)` is [[an expression|a statement]]

`{py} y = 13` is [[a statement|an expression]]

`{py} myName = "John" + "Doe"` is

    x-picker.list
      .item.pill.bblue(data-error="expression-1") an expression
      .item.pill.bblue a statement whose execution involves evaluating an expression

:::

### Exercises

::: .exercise
**Exercise**  
(Try doing this without executing the code.) The expression `{py} 1 + 5//3 + 2**3` evaluates to [[10]].
:::

---
> id: step-30

::: .exercise
**Exercise**  
(Try doing this without executing the code.) The expression `{py} 11/2-11//2-3` evaluates to [[-2.5]], expressed as a decimal.
:::

---
> id: step-31

::: .exercise
**Exercise**  
Find the value of `{py} x` at the end of the following block of code. [[25]]

``` python
x = 3**2
x = x + 1
x = x + 1
y = x//2
x = y*y
z = 2*x
```
:::

---
> id: step-32

::: .exercise
**Exercise**  
Write a function `{py} f` which takes a positive integer `{py} n` as input and returns the $n$th positive odd integer. You should replace the line with the keyword `{py} pass` in the code block below (the rest of the code, starting from the fourth line, checks that your function works).

Also, note that you have *two* boxes: the first is for scratch, and the second is for saving your answer. Once you're happy with your code, copy and paste it into the second box.
:::

    pre(python-executable)
      | def f(n):
      |     pass # add code here
      |
      | def test_f():
      |     assert f(3) == 5
      |     assert f(1) == 1
      |     assert f(100) == 199
      |     return "Tests passed!"
      |
      | test_f()

    x-quill

---
> id: step-33

::: .exercise
**Exercise**  
Select the true statements.

    x-picker.list
      .item.pill.bblue.md The statement `{py} balance = 46.04` assigns the value `{py} 46.04` to the variable `{py} balance`.
      .item.pill.bblue.md(data-error="not-a-variable") The object `{py} 33` is a variable.
      .item.pill.bblue(data-error="mutable") The value of a variable cannot be changed.
      .item.pill.bblue Variable names in Python are case-sensitive.
:::

---

## Types

> id: types
> section: types

Python, like most programming languages, has built-in types for handling common data like numbers and text.

[Continue](btn:next)

---
> id: step-34

### Numbers

As discussed in the previous section, a numerical value can be either an `{py} int` or a `{py} float`. We can represent integers exactly, while storing a real number as a float [often requires rounding slightly](gloss:rounding).

[Continue](btn:next)

---
> id: step-35

A number typed directly into a Python program is stored as a float or integer according to whether it contains a decimal point, so if you want the value 6 to be stored as a `{py} float`, you should write it as `{py} 6.0`.

[Continue](btn:next)

---
> id: step-36

Numbers can be compared using the operators `{py} ==,>,<,<=,>=,!=`.

::: .exercise
**Exercise**  
What is the type of the object returned by `{py} 1 == 2`? [[bool]]
:::

    pre(python-executable)
      | 1 == 2

---
> id: step-37



::: .exercise
**Exercise**  
`{py} x == 1` is [[an expression|a statement]] which returns `{py} True` or `{py} False` according to whether [[the object assigned to x is equal to 1|the string "x" is equal to 1]]. Meanwhile, `{py} x = 1` is [[a statement|an expression]] that [[assigns the object 1 to x|compares x to 1]].
:::

---
> id: step-38

### Strings

Textual data is represented using a sequence of characters called a **string**. We can create a string object by enclosing the desired sequence of characters in quotation marks: `{py} a = "this is a string"`. Such a quote-enclosed string of characters in a Python program is called a **string literal**. String literals can also be delimited by triple quotes, which can be useful for multi-line strings and for strings containing quotes.

    pre(python-executable)
      | """
      | This is a multiline string.
      | It can have "quotes", no problem.
      | """
      |
      | "This is an ordinary string. \"Quotes\" require a backslash."

[Continue](btn:next)

---
> id: step-39

We can find the number of characters in a string with the `{py} len` function: `{py} len("hello")` returns [[5]].

---
> id: step-40

We can concatenate two strings with the addition operator (`{py} +`): `{py} "Hello " + "World"`.

[Continue](btn:next)

---
> id: step-41

We can return the first character in a string `{py} s` using the expression `{py} s[0]`, the second element using `{py} s[1]`, and so on. We can get the substring from the third to the eighth character using `{py} s[2:8]`. Note that the 9 is one **past** the index where we want to stop.

[Continue](btn:next)

---
> id: step-42

::: .exercise
**Exercise**  
For which values of `{py} i` and `{py} j` does the expression `{py} "Hello World"[i:j] == "o Wo"` return `{py} True`? i = [[4]] and j = [[8]]
:::

    pre(python-executable)
      | "Hello World"[i:j]

---
> id: step-43

::: .exercise
**Exercise**  
If either `{py} i` or `{py} j` is omitted in the expression `{py} s[i:j]` (where `{py} s` is a string), what happens? Experiment using the code block above.
:::

    x-quill

---
> id: step-44

*Solution.* Omitting `{py} i` or `{py} j` has the effect of setting `{py} i = 0` or `{py} j = len(s)`.

[Continue](btn:next)

---
> id: step-45

### String interpolation

We can insert the value of a variable into a string using *string interpolation*. There are several ways to do this in Python, but perhaps the simplest is to place an `{py} f` character immediately before the opening quotation mark. A string literal modified in this way is called an *f-string*, or *formatted string literal*. Any parts of an f-string between curly braces are evaluated, and their string representations are inserted into the string at that point.

    pre(python-executable)
      | x = 19
      | print(f"""
      | The quotient when x is divided by 3
      | is {x//3}, and the remainder is {x % 3}.
      | """)

::: .exercise
**Exercise**  
Use string interpolation to write a single line of code which prints `{py} multiplying by 6.2 yields 12.4` if `{py} 2` is assigned to the variable `{py} A` and prints `{py} multiplying by 6.2 yields 18.6` if `{py} 3` is assigned to `{py} A`.
:::

    pre(python-executable)
      | A = 2
      | print()

    x-quill

---
> id: step-46

*Solution.* The expression `{py} print(f"multiplying by 6.2 yields {6.2*A}")` works.

[Continue](btn:next)

---
> id: step-47

### Booleans

A **bool** is a special type whose only values are `{py} True` and `{py} False`. The fundamental operators that can be used to combine boolean values are `{py} and`, `{py} or`, and `{py} not`.

[Continue](btn:next)

---
> id: step-48

::: .exercise
**Exercise**  
Does Python convert types when doing equality comparison? In other words, does `{py} 1 == 1.0` return `{py} True` or `{py} False`? [[True|False]]
:::

    pre(python-executable)
      | 1 == 1.0

---
> id: step-49

*Solution.* Yes, Python does convert types for equality comparison. So `{py} 1 == 1.0` returns `{py} True`.

[Continue](btn:next)

---
> id: step-50

::: .exercise
**Exercise**  
Write a one-line [function](gloss:function) which takes 3 bools as arguments and returns `{py} True` if and only if either

1. Both of the first two arguments are `{py} True` , or
2. The third argument is `{py} False`
:::


    pre(python-executable)
      | def f(a,b,c):
      |     pass # add code here
      |
      | def test_f():
      |     assert f(True, True, True)
      |     assert f(False, True, False)
      |     assert not f(False, True, True)
      |     return "Tests passed!"
      |
      | test_f()

    x-quill

---
> id: step-51

*Solution.* Here's an example of a simple way to do it:

``` python
def f(a,b,c):
    return a and b or not c
```

Be wary of comparisons of the form `{py} a == True` or `{py} b == False`. These are equivalent to `{py} a` and `{py} not b`, [respectively](gloss:respectively), assuming `{py} a` and `{py} b` are both bools. The more succinct versions are preferred.

[Continue](btn:next)

---
> id: step-52

### Exercises

::: .exercise
**Exercise**  

Write some code for computing $\frac{1}{a+\frac{2}{3}}$ where $a$ is equal to the number of characters in the string `{py} "The quick brown fox jumped over the lazy dog"`

:::

    pre(python-executable)
      |

    x-quill

---
> id: step-53

*Solution.* We store the length of the given string in a variable `{py} a` and evaluate the given expression as follows:

``` python
a = len("The quick brown fox jumped over the lazy dog")
1/(a+2/3)
```

[Continue](btn:next)

---
> id: step-54

::: .exercise
**Exercise**  
The expression `{py} 1 < 3` returns [[True]], which is an object of type [[bool]].
:::

---
> id: step-55

::: .exercise
**Exercise**  
If we set `{py} s = "Bruno"`, then `{py} s[:j] == "Bru"` when `{py} j =` [[3]].
:::

---

## Conditionals

> id: conditionals
> section: conditionals

Consider a simple computational task performed by commonplace software, like highlighting the rows in a spreadsheet which have a value larger than 10 in the third column. We need a new programming language feature to do this, because we need to conditionally execute code (namely, the code which highlights a row) based on the [[boolean|int|float]] value returned by the comparison operator. Python provides `{py} if` statements for this purpose.

---
> id: step-56

### Conditionals

We can use an `{py} if` statement to specify different blocks to be executed depending on the value of a boolean expression. For example, the following function calculates the sign of the input value `{py} x`.

    pre(python-executable)
      | def sgn(x):
      |     if x > 0:
      |         return +1
      |     elif x == 0:
      |         return 0
      |     else:
      |         return -1
      |
      | sgn(-5)

[Continue](btn:next)

---
> id: step-57

Conditional expressions can be written using *ternary conditional* `{py} «truevalue» if «condition» else «falsevalue»`. For example, the following version of the `{py} sgn` function returns the same values as the one above except when `{py} x == 0`.

    pre(python-executable)
      | def sgn(x):
      |     return +1 if x > 0 else -1
      |
      | sgn(-5)

[Continue](btn:next)

---
> id: step-58

### Exercises

::: .exercise
**Exercise**  
Can the `{py} else` part of an `{py} if` statement be omitted? [[Yes|No]] Try running the example below.
:::

    pre(python-executable)
      | x = 0.5
      | if x < 0:
      |     print("x is negative")
      | elif x < 1:
      |     print("x is between 0 and 1")

[Continue](btn:next)

---
> id: step-59

::: .exercise
**Exercise**  
Write a function called `{py} my_abs` which computes the absolute value of its input. Replace the keyword `{py} pass` below with an appropriate block of code.
:::

    pre(python-executable)
      | def my_abs(x):
      |     pass # add code here
      |
      | def test_abs():
      |     assert my_abs(-3) == 3
      |     assert my_abs(5.0) == 5.0
      |     assert my_abs(0.0) == 0.0
      |     return "Tests passed!"
      |
      | test_abs()

    x-quill

---
> id: step-60

::: .exercise
**Exercise**  
Write a function which returns the quadrant number (1, 2, 3, or 4) in which the point `{py} (x,y)` is located. Recall that the quadrants are numbered counter-clockwise: the northeast quadrant is quadrant 1, the northwest quadrant is 2, and so on. For convenience, you may assume that both `{py} x` and `{py} y` are nonzero.

Consider nesting `{py} if...else` blocks inside of an `{py} if...else` block.
:::

    pre(python-executable)
      | def quadrant(x,y):
      |     pass # add code here
      |
      | def test_quadrant():
      |     assert quadrant(1.0, 2.0) == 1
      |     assert quadrant(-13.0, -2) == 3
      |     assert quadrant(4, -3) == 4
      |     assert quadrant(-2, 6) == 2
      |     return "Tests passed!"
      |
      | test_quadrant()

    x-quill

---
> id: step-61

*Solution.* Here's an example solution:

    pre(python-executable)
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

## Functions

> id: functions
> section: functions

[Functions](gloss:function) can be used to organize code and achieve *separation of concerns:* once a function is written, it may be relied upon to perform its designated task without the programmer having to think about *how* it accomplishes that task. This conceptual aid is crucial for writing maintainable code to solve large, complex problems.

[Continue](btn:next)

---
> id: step-62

A good rule of thumb is that a function should be sufficiently general to be re-usable without duplicating internal logic, but specific enough that you can actually implement it.

::: .exercise
**Exercise**  
How could the design of the following code be improved?

``` python
def remove_one_leading_space(S):
    if S[0] == " ":
        return S[1:]
    else:
        return S

def remove_two_leading_spaces(S):
    if S[0:2] == "  ":
        return S[2:]
    else:
        return S

def remove_three_leading_spaces(S):
    if S[0:3] == "  ":
        return S[3:]
    else:
        return S
```
:::

[Continue](btn:next)

---
> id: step-63

*Solution.* We should have a single function to remove whatever number of leading spaces the string happens to have. The design above has the problem that we have to figure out how many leading spaces there are before we can call the appropriate function, which means that most of the work that should be performed by the function will have to be performed when the function is called. Thus separation of concerns is not achieved.

[Continue](btn:next)

---
> id: step-64

### Arguments

The objects supplied to a function when it's called are referred to as the function's **arguments**. The variables which represent the arguments in the function definition are called **parameters**. The indented block of code that runs when the function is called is the **body** of the function.

[Continue](btn:next)

---
> id: step-65

::: .exercise
**Exercise**  
In the following block of code, `{py} s` is [[a parameter|an argument]], while `{py} "hello"` is [[an argument | a parameter]].

``` python
def duplicate(s):
    return s + s

duplicate("hello")
```
:::

---
> id: step-66

We can give parameters **default values** and supply arguments for those parameters optionally when calling the function.

    pre(python-executable)
      |
      | def line(m, x, b=0):
      |     return m * x + b
      |
      | line(2,3) # returns 6
      | line(5,4,b=2) # returns 22

[Continue](btn:next)

---
> id: step-67

The arguments 2, 3, 4 and 5 in this example are called **positional** arguments, and `{py} b=2` is a **keyword argument**.

[Continue](btn:next)

---
> id: step-68

If the function body begins with a string literal, that string will be interpreted as documentation for the function. This **docstring** helps you and other users of your functions quickly ascertain how they are meant to be used. A function's docstring can accessed in a Python session using the function `{py} help`. For example, `{py} help(print)` pulls up the docstring for the built-in `{py} print` function.

[Continue](btn:next)

---
> id: step-69

### Anonymous functions

A function may be defined without assigning a name to it. Such a function is said to be *anonymous*. Python's anonymous function [syntax](gloss:syntax) uses the keyword `{py} lambda`. A common situation where anonymous functions can be useful is when supplying one function to another as an argument. For example:

    pre(python-executable)
      | def apply_three_times(f, x):
      |     return f(f(f(x)))
      |
      | apply_three_times(lambda x: x*x, 2)

A multi-argument function works similarly, with the parameters separated by commas: the addition operator can be written as `{py} lambda x,y: x + y`.

[Continue](btn:next)

---
> id: step-70      

::: .exercise
**Exercise**  
Write a function that takes two arguments `{py} a` and `{py} b` and a function `{py} f` and returns `{py} a` if `{py} f(a) < f(b)` and `{py} b` otherwise. Then use anonymous function syntax to call your function with two numbers and the negation function $x\mapsto -x$.
:::

    pre(python-executable)
      |

    x-quill

---
> id: step-71

*Solution.* Here's an example solution:

``` python
def which_smaller(a, b, f):
    if f(a) < f(b):
        return a
    else:
        return b

which_smaller(4, 6, lambda x: -x)
```
[Continue](btn:next)

---
> id: step-72

### Scope

The **scope** of a variable is the region in the program where it is accessible. For example, if you define `{py} x` to be `{py} 47` on line 413 of your file and get an error because you tried to use `{py} x` on line 35, the problem is that the variable wasn't *in scope* yet.

A variable defined in the main body of a file has **global scope**, meaning that it is visible throughout the program from its point of definition.

A variable defined in the body of a function is in that function's **local scope**. For example:

    pre(python-executable)
      | def f(x):
      |     y = 2
      |     return x + y
      |
      | y


::: .exercise
**Exercise**  
Try nesting one function definition inside another. Are variables in the enclosing function body available in the inner function. What about vice versa?
:::

    pre(python-executable)
      | def f():
      |     def g():
      |         j = 2
      |         return i
      |     print(j)
      |     i = 1
      |     return g()
      |
      | f()

    x-quill

---
> id: step-73

*Solution.* The variable defined in the inner function is not in scope in the body of the outer function, but the variable defined in the body of the outer function is in scope in the body of the inner function.

[Continue](btn:next)

---
> id: step-74

### Testing

It's highly recommended to write tests to accompany your functions, so you can confirm that each function behaves as expected. This is especially important as your codebase grows, because changes in one function can lead to problems in other functions that use it. Having a way to test functions throughout your codebase helps you discover these breakages quickly, before they cause harm.

One common way to do this (which you have already seen several times in this course) is to write functions whose names begin with *`{py} test_`* and which contain `{py} assert` statements. An `{py} assert` statement throws an error if the following expression evaluates to `{py} False`. You can run the test functions directly, or you can use a tool like [pytest](https://pytest.org) to find and run all of the test functions in your codebase.

    pre(python-executable)
      | def space_concat(s,t):
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
      | def test_space_concat():
      |     assert space_concat("foo", "bar") == "foo bar"
      |     assert space_concat("foo ", "bar") == "foo bar"
      |
      | test_space_concat()
      | space_concat("foo", "bar")

::: .exercise
**Exercise**  
The test cases above don't cover the *degenerate* situation where one of the strings is empty. Does the function return correct values for these degenerate cases? [[No|Yes]] Add test cases for this, and fix the function so that they pass.
:::

    x-quill

---
> id: step-75

*Solution.* We check the empty string conditions prior to checking the last/first characters. This solves the problem because `{py} or` is **short-circuiting**: if the first bool is `{py} True` in an `{py} or` operation, the second is never evaluated.

    pre(python-executable)
      | def space_concat(s,t):
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
      | def test_space_concat():
      |     assert space_concat("foo", "bar") == "foo bar"
      |     assert space_concat("foo ", "bar") == "foo bar"
      |     assert space_concat("foo", "") == "foo"
      |     assert space_concat("", "bar") == "bar"

### Exercises

::: .exercise
**Exercise**  
Write a function which accepts two strings as input and returns the concatenation of those two strings in alphabetical order.

_Hint_: Make a guess about which operator can be used to compare strings alphabetically.
:::

    pre(python-executable)
      | def alphabetical_concat(s,t):
      |     pass # add code here
      |
      | def test_concat():
      |     assert alphabetical_concat("alphabet", "soup") == "alphabetsoup"
      |     assert alphabetical_concat("socks", "red") == "redsocks"
      |     return "Tests passed!"
      |
      | test_concat()



    x-quill

---
> id: step-76

*Solution.*

    pre(python-executable)
      | def alphabetical_concat(s,t):
      |     if s < t:
      |         return s + t
      |     else:
      |         return t + s
      |
      | def test_concat():
      |     alphabetical_concat("alphabet", "soup") == "alphabetsoup"
      |     alphabetical_concat("food", "brain") == "brainfood"
      |     return "Tests passed!"
      |
      | test_concat()

---

## Packages

> id: packages
> section: packages

A [**package**](gloss:package) is a collection of Python files that provide functionality beyond the core functionality available in every Python program. Packages achieve separation of concerns at the community level: someone else solves a problem of general interest, and then you can leverage their work and focus on applying it to the problem at hand.

Many Python packages are available in every standard distribution of Python and can be used without having to worry about whether they're installed. These packages make up the **standard library**. To see a list of standard library packages, visit the standard library page of the [Python documentation](https://docs.python.org/3/library/). Here's an example showing how to import the  `{py} math` package and use the `{py} sqrt` function it contains:

    pre(python-executable)
      | import math
      | math.sqrt(3)

Note that we access names like `{py} sqrt` provided by the package using the dot [syntax](gloss:syntax) `{py} math.sqrt`. This is common practice, and it's a good idea because if functions are called in a way that makes it clear what package they came from, then (1) you can use the same name in multiple packages, and (2) you can easily identify which package that is supplying each function. We can also import individual functions and skip the dot syntax:

    pre(python-executable)
      | from math import sqrt
      | sqrt(3)

Sometimes a package contains a **subpackage** which must itself be accessed with dot syntax:

    pre(python-executable)
      | from numpy.random import standard_normal
      | standard_normal()

[Continue](btn:next)

---
> id: step-77

### Scientific computing packages in Python

Here are some of the most important scientific computing packages (along with very brief code snippets to give you a sense of what calling the packages looks like in practice):

**NumPy**. Provides multi-dimensional arrays (like vectors, matrices, and higher-order arrays).

    pre(python-executable)
      | import numpy as np
      | np.random.standard_normal((5,5)) # randomly fill a 5 × 5 matrix
      | np.full((3,3),7) # make a 3 × 3 matrix full of 7's

Note that we import `{py} numpy` with the alias `{py} np` for brevity.

**Pandas**. Provides support for tabular data.

    pre(python-executable)
      | import pandas as pd
      | iris = pd.read_csv("http://bit.ly/iris-dataset")
      | iris

**SciPy**. Provides scientific computing tools for optimization, numerical integration, linear algebra, statistics, etc.

    pre(python-executable)
      | from scipy.optimize import minimize
      | minimize(lambda x: x*(x-1), 1.0) # start from 1 and minimize x(x-1)

**Matplotlib**. Standard plotting package in Python. (_Note_: run the cell below twice to get the graph to display.)

    pre(python-executable)
      | import matplotlib.pyplot as plt
      | import numpy as np
      | plt.plot(np.cumsum(np.random.standard_normal(1000)))

**SymPy**. Pure math tools like symbolic integration/differentiation, number theory, etc.

    pre(python-executable)
      | from sympy import symbols, Eq, solve
      | x = symbols("x")
      | y = symbols("y")
      | solve([Eq(x + 5*y, 2), Eq(-3*x + 6*y, 15)], [x, y])

The example above solves the system of equations:
``` latex
  x + 5y &= 2 \\\\
  -3x + 6y &= 15
```
for $x$ and $y$.

### Exercises

::: .exercise
**Exercise**  
 To import just the `{py} arcsin` function from `{py} numpy`, we would use what statement?
:::

    x-quill

---
> id: step-78

*Solution.* `{py} from numpy import arcsin`

[Continue](btn:next)

---
> id: step-79

::: .exercise
**Exercise**  
 To import `{py} sympy` with alias `{py} sp`, we would use what statement?
:::

    x-quill

---
> id: step-80

*Solution* `{py} import sympy as sp`

[Continue](btn:next)

---
> id: step-81

::: .exercise
**Exercise**  
To import the standard library package `{py} itertools` (with no alias), we would use what statement?
:::

    x-quill

---
> id: step-82

*Solution* `{py} import itertools`

[Continue](btn:next)

---

## Classes

> id: classes
> section: classes

Many Python functions use the usual function [syntax](gloss:syntax), like `{py} len("hello")`. However, many other functions are called using a different syntax where an *object* comes first:

    pre(python-executable)
      | "hello".capitalize()

These functions are called **methods**. For example, `{py} capitalize` is a string method. To understand how methods work in the language, it's helpful to see what they look like at the point of definition.

[Continue](btn:next)

---
> id: step-84

Suppose you want to write a program which keeps track of the albums you own. Each album is associated with several data, like the name of the album, the year it came out, the number of tracks, etc. You could store all these data by assigning them to different variables, but that becomes untidy very quickly. For example, you will frequently want to pass an album to a function, and you don't want that function to require a long list of parameters just because the album has a lot of data associated with it.

[Continue](btn:next)

---
> id: step-85

What you want is to be able to treat each album as its own Python object, with all its associated data stored inside. In other words, you want an `{py} Album` type. You can do that with the `{py} class` keyword (this block won't return anything):

    pre(python-executable)
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

[Continue](btn:next)

---
> id: step-86

A function defined in the block indented below `{py} class Album(object):` is called a **method** of the class `{py} Album`. The *`{py} \_\_init\_\_`* method has a special role: Python calls it whenever `{py} Album` is called as a function to create an **instance** of the class `{py} Album`.

    pre(python-executable)
      | A = Album("Abbey Road", "The Beatles", 1969, "47:23")
      | A



The first parameter, customarily called `{py} self`, refers to the object being created. The four lines in the init method above assign values to **attributes** which may be accessed later using the dot [syntax](gloss:syntax), like `{py} A.name` or `{py} A.artist`.

Dot syntax is also used to access other methods like `{py} numYearsAgo`.

``` python
A.numYearsAgo(2019)
```

The object appearing before the dot is implicitly supplied as the first argument to the method. Therefore, `{py} A.numYearsAgo(2019)` at call time corresponds to `{py} numYearsAgo(A, 2019)` at the point of definition. In fact, you can use the latter syntax if you want, because methods are also accessible using dot syntax on the class name:
`{py} Album.numYearsAgo(A, 2019)`.

::: .exercise
**Exercise**  
Confirm that `{py} "hello".capitalize()` does give the same value as `{py} str.capitalize("hello")`.
:::

    pre(python-executable)
      |

[Continue](btn:next)

---
> id: step-87

::: .exercise
**Exercise**  
In the expression `{py} "".join("hello")`, the method `{py} join` has [[2|1|0|3]] arguments.
:::

---
> id: step-88

*Solution.* There are two arguments: the first is the empty string, and the second is `{py} "hello"`.

[Continue](btn:next)

---
> id: step-89

::: .exercise
**Exercise**  
Implement a class called `{py} Fraction` which represents a ratio of two positive integers. You should reduce the fraction in your *`{py} \_\_init\_\_`* method. Your `{py} Fraction` type should include a method called `{py} \_\_add\_\_` which adds two fractions and an `{py} \_\_eq\_\_` which checks whether two fractions are equal. (These methods will be automatically used by the addition and equality operators.)
:::

    pre(python-executable)
      | from  math import gcd
      | # add code here
      |
      | def test_Fraction():
      |     assert Fraction(1,2) + Fraction(1,3) == Fraction(5,6)
      |     assert Fraction(2,4) + Fraction(4,8) == Fraction(3,3)
      |     return "Test passed!"
      |
      | test_Fraction()

    x-quill

---
> id: step-90

*Solution.* We divide by the gcd in the init method, and we define the other two methods according to the rules of arithmetic:

    pre(python-executable)
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

---

## Lists and Tuples

> id: lists-and-tuples
> section: lists-and-tuples

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

We definitely don't want to think of 100 variable names for the 100 values in the table, and we don't want to write a line of code for each row. What we need is a way to store all of the rows (or columns) in an object designed to contain many objects. Python provides several such **compound data structures**, and in this section we will learn about two: **lists** and **tuples**.

[Continue](btn:next)

---
> id: step-91

### Lists

A `{py} list` in Python is a compound data type for storing a finite ordered sequence of Python objects. Lists are **mutable**, meaning that they can be changed.

The simplest way to produce a list in a Python program is with a **list literal**, which requires listing the objects separated by commas and delimited by square brackets:

    pre(python-executable)
      | myList = [1, "flower", True, 7]
      | x = 5
      | myOtherList = [1, x, x, 2]
      | myOtherList

::: .exercise
**Exercise**  
What happens to `{py} myOtherList` in the example above if a different value is assigned to `{py} x` *after* `{py} myOtherList` is created? [[the list doesn't change|the list changes]]
:::

---
> id: step-92

*Solution.* The list doesn't change. The object associated with the variable `{py} x` is retrieved when the list is created, and after that point the list is no longer connected to the name `{py} x`.

[Continue](btn:next)

---
> id: step-93

Like strings, lists can be **indexed** to obtain their elements. Indexes in Python begin at 0:

    pre(python-executable)
      | myList = [1, "flower", True, 7]
      | myList[0] # returns 1
      | myList[3] # returns 7

[Continue](btn:next)

---
> id: step-94

Negative indices can be used to count from the end:

    pre(python-executable)
      | myList = [1, "flower", True, 7]
      | i = -2
      | myList[i]



If we set `{py} i` to the negative number [[-3]], then `{py} myList[i]` would return `{py} "flower"`.

---
> id: step-95

Sublists can be extracted by **slicing**. Indexing a list with `{py} [i:j]` returns the portion of the list from the `i`th element to the `(j-1)`st element.

    pre(python-executable)
      | myList = [1, "flower", True, 7]
      | myList[0:2]

::: .exercise
**Exercise**  
If `{py} i` = [[1]] and `{py} j` = [[3]], then `{py} myList[i:j]` is equal to `{py} ["flower", True]`.
:::

---
> id: step-96

The start or stop value of a slice can be omitted, in which case it defaults to the beginning or end of the list, respectively.

    pre(python-executable)
      | L = list(range(10,20)) # returns [10,11,12,...,19]
      | L[2:] # returns [12,13,...,20]
      | L[:4] # returns [10,11,12,13]

[Continue](btn:next)

---
> id: step-97

Slices can include a *step* value after a second colon. For example, *`{py} L[1::10::2]`* returns the elements of `{py} L` at positions 1, 3, 5, 7, and 9. The step value is often used with omitted start and stop values:

    pre(python-executable)
      | list(range(100, 200))[::2]

[Continue](btn:next)

---
> id: step-98

::: .exercise
**Exercise**  
What step value can be used to *reverse* a list? [[-1]] (Hint: you can reason it out!)
:::

    pre(python-executable)
      | [2,4,6,8][::k]

[Continue](btn:next)

---
> id: step-99

*Solution.* Going in reverse order through a list corresponds to stepping by $-1$ each time. Setting `{py} k = -1` in the code block above, we see that `{py} [::-1]` does indeed reverse the list. Apparently the start and stop values for a list `{py} L` implicitly are implicitly set to `{py} -1` and `{py} -len(L)-1` when a negative step value is used.

[Continue](btn:next)

---
> id: step-100

Like strings, lists can be concatenated with the `{py} +` operator.

    pre(python-executable)
      | [1,2,3] + [4,5,6,7]

::: .exercise
**Exercise**  
Write a [function](gloss:function) which takes as arguments a list `{py} L` and a positive integer `{py} n` and rotates `{py} L` by `{py} n` positions. In other words, every element of the list should move forward `{py} n` positions, wrapping around to the beginning if it goes off the end of the list.
:::

    pre(python-executable)
      | def rotate(L, n):
      |     "Cyclically shift the elements of L by n positions"
      |     # add code here
      |
      | def test_rotate():
      |     assert rotate([1,2,3],1) == [3,1,2]
      |     assert rotate([1,2,3],2) == [2,3,1]      
      |     assert rotate([1,2,3,4,5],8) == [3,4,5,1,2]
      |     return "Tests passed!"
      |
      | test_rotate()

    x-quill

---
> id: step-101

*Solution.* We figure out where the list needs to be split and concatenate the two resulting sublists in the opposite order:

    pre(python-executable)
      | def rotate(L, n):
      |     "Cyclically shift the elements of L by n positions"
      |     k = len(L) - n % len(L)
      |     return L[k:] + L[:k]

[Continue](btn:next)

---
> id: step-102

Lists may be modified by combining indexing with assignment:

    pre(python-executable)
      | L = [4,-3,2]
      | L[0] = 1
      | L[1:3] = [6,3]
      | L

::: .exercise
**Exercise**  
Write a line of code which sets every even-indexed entry of a list `{py} L` to zero. Note that you can get a list of `{py} n` zeros with `{py} [0] * n`.
:::

    pre(python-executable)
      | L = list(range(100))

    x-quill

---
> id: step-103

*Solution.* `{py} L[::2] = [0] * (len(L)//2)`

[Continue](btn:next)

---
> id: step-104

The `{py} list` class has 11 ordinary [methods](gloss:method) (that is, methods that don't have the double underscores in the name):

    pre(python-executable)
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

If you forget these methods, you can access them in an interactive session by running `{py} dir(list)`.

Note that each of these methods changes the list `{py} L`. They do not return a new list:

    pre(python-executable)
      | L = [1,2,3]
      | return_val = L.reverse()
      | print(type(return_val))
      | print(L)

::: .exercise
**Exercise**  
Explain the errors in the code below (there are two).

``` python
def remove_fives(L):
    "Removes instances of 5 from a list"
    return L.remove("5")

print(remove_fives(["1", "5", "5", "10"]))    
```
:::

    x-quill

---
> id: step-105

*Solution.* The `{py} remove` method only removes one instances of `{py} "5"` (the first one). Also, this method modifies the argument supplied to the function; it does not return new list with the `{py} "5"` removed.

[Continue](btn:next)

---
> id: step-106

### List comprehensions

Two of the most common ways of generating one list from another are (1) applying a given function to every element of the original list, and (2) retaining only those elements of the original list which satisfy a given criterion. These two operations are called **map** and **filter**, respectively.

``` python
def square(x):
    return x*x

list(map(square, range(5))) # returns [0, 1, 4, 9, 16]

def iseven(x):
    return x % 2 == 0      

list(filter(iseven, range(5))) # returns [0,2,4]
```

The extra calls to `{py} list` in the examples above are required to see the result because `{py} map` and `{py} filter` are *lazy*: they return objects which *promise* to perform the specified calculation when it's needed.

Python provides a convenient [syntax](gloss:syntax) for both mapping *and* filtering: the **list comprehension**. It's essentially a programming version of set builder notation. For example, to square the even numbers from 0 to 4, we can use the following expression:

    pre(python-executable)
      | [x**2 for x in range(5) if x % 2 == 0]

[Continue](btn:next)

---
> id: step-107

Let's break this example down step-by-step: the first value of `{py} range(5)` is assigned to the variable `{py} x`, and then the `{py} if` expression is evaluated. If it's true, the expression `{py} x**2` is evaluated and stored as the first value of the list that is to be returned. Then the second value of `{py} range(5)` is assigned to `{py} x`, the condition is evaluated, and so on.

::: .exercise
**Exercise**  
Write a list comprehension which returns a list whose kth entry is the last digit of the kth three-digit prime number.
:::

    pre(python-executable)
      | from sympy import isprime

    x-quill

---
> id: step-108

*Solution.* Here's an example solution:

    pre(python-executable)
      | from sympy import isprime
      | [str(k)[-1] for k in range(100,1000) if isprime(k)]

[Continue](btn:next)

---
> id: step-109

::: .exercise
**Exercise**  
Write a list comprehension which takes a list of lists and returns only those lists whose second element has a least five elements.
:::

    pre(python-executable)
      | records = [[3, "flower", -1], [2, "rise", 3], [0, "basket", 0]]

    x-quill

---
> id: step-110

*Solution.* Here's one solution:

    pre(python-executable)
      | [record for record in records if len(record[1]) >= 5]

[Continue](btn:next)

---
> id: step-111

### Tuples

Tuples are very similar to lists, except that tuples are [immutable](gloss:immutable).

    pre(python-executable)
      |
      | row = (22,2.0,"tomato")
      | row[2] # returns "tomato"
      | row[2] = "squash" # throws TypeError

Programmers tend to use tuples instead of lists in situations where **position** in the tuple carries more meaning than **order**. For example, perhaps the tuple assigned to `{py} row` above describes a row of plants in a garden, with the three numbers indicating the number of plants, the number of weeks since they were planted, and the type of plant. We could have chosen some other order for those three values, as long as we're consistent about which position corresponds to which value. By contrast, the 22 heights of the plants on that row would typically be stored in a *list*, since the list order corresponds to something meaningful in that case (namely, the order of the plants in the row).

[Continue](btn:next)

---
> id: step-112

Functions often return multiple values by returning a tuple containing those values. You can access individual elements of a tuple without having to index the tuple using *tuple unpacking*:

    pre(python-executable)
      |
      | mycolor = (1.0,1.0,0.44)
      | r, g, b = mycolor
      | b

The convention in Python for values you don't want to store is to assign them to the variable whose name is just an underscore. That way you don't have to think of names for those variables, and you signal to anyone reading your code that you are not using those values.

[Continue](btn:next)

---
> id: step-113

Tuple unpacking can be combined with list comprehension syntax. If we want to extract the first element from each tuple in a list of triples, for example, we can do that as follows:

    pre(python-executable)
      | L = [(1,2,3),(4,5,6),(7,8,9)]
      | [a for (a,_,_) in L]

The value 1 is assigned to `{py} a`, the value 2 is assigned to the underscore variable, and then the value 3 is also assigned to the underscore variable (this overwrite is no problem since we aren't using that value anyway). Then `{py} a` is evaluated as the first element in the new list, and the process repeats for the remaining triples in the list.

::: .exercise
**Exercise**  
Write a list comprehension which adds the first two elements of each tuple in `{py} L`. (So for the example above, the resulting list should be `{py} [3, 9, 15]`.)
:::

    pre(python-executable)
      |

    x-quill

---
> id: step-114

*Solution.* Same idea:

    pre(python-executable)
      | L = [(1,2,3),(4,5,6),(7,8,9)]
      | [a+b for (a,b,_) in L]

[Continue](btn:next)

---
> id: step-115

::: .exercise
**Exercise**  
The fractional part of a positive real number $x$ is the part after the decimal point: it's defined to be the positive difference between $x$ and the greatest integer which is less than or equal to $x$. You can find the fractional part of `{py} x` in Python with the expression `{py} x - int(x)`.

Find the fractional parts of the first 100 positive integer multiples of $\pi$. Use the function `{py} extrema` (defined below) on the resulting array to find its least and greatest values. Find the ratio of the greatest value to the least.
:::

    pre(python-executable)
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

    x-quill

---
> id: step-116

*Solution.* We use tuple unpacking to extract the min and max values from the tuple returned by the `{py} extrema` function.

    pre(python-executable)
      | m,M = extrema([pi*k-int(pi*k) for k in range(1,101)])
      | M/m

The result is about 56.08.

[Continue](btn:next)

---
> id: step-117

A common pattern for generating new arrays combines list comprehension, tuple unpacking, and the function `{py} zip`. The `{py} zip` function takes two arrays and returns a single array of pairs of corresponding entries (or three arrays, in which case it returns an array of triples, etc.). For example,

``` python
zip(["a", "b", "c"], [1, 2, 3])
```

returns an object which is equivalent to `{py} [("a", 1), ("b", 2), ("c", 3)]`.

If we have three vectors $A$, $B$, and $C$ of equal length, then the vector sum $A + B + C$ can be computed using the expression `{py} [a + b + c for (a,b,c) in zip(A,B,C)]`.

::: .exercise
**Exercise**  
Suppose that $H$ is a list which stores the heights of 100 cylinders and $R$ is a list which stores their radii (in the same order). Write a [list comprehension](gloss:listcomp) which returns a list containing the volumes of these cylinders.
:::

    pre(python-executable)
      | H = [1, 2, 3]
      | R = [0.8, 1.0, 1.2]

    x-quill

---
> id: step-118

*Solution.* We zip `{py} H` and `{py} R` and use the volume formula $\pi r^2 h$:

    pre(python-executable)
      | from numpy import pi
      | H = [1, 2, 3]
      | R = [0.8, 1.0, 1.2]
      | [pi*r*r*h for (h,r) in zip(H,R)]

[Continue](btn:next)

---
> id: step-119

### Exercises

::: .exercise
**Exercise**  
(Try doing this one without executing any code.) What will the value of `{py} L` be after the following block is executed?  [[(4,1,2,7,3,-1,8) | (4,1,2,7,3,-1) | (4,2,1,7,3,-1,8)]]

``` python
L = [4, 8, 2]
L.append(7)
L.extend([3,-1,8])
L.insert(2, 1)
L.remove(8)
L = tuple(L)
```
:::

[Continue](btn:next)

---
> id: step-120

::: .exercise
**Exercise**  
Write a function which takes a matrix `{py} M` and an index `{py} i` and returns the $i$th column of `{py} M`. Assume that `{py} M` is represented as a list of lists, where each list represents a row.
:::

    pre(python-executable)
      | def select_col(M, i):
      |     pass # add code here
      |
      | def test_select_col():
      |     assert select_col([[1,2],[3,4]],1) == [2,4]
      |     assert select_col([[7,8],[8,-2],[3,4]],1) == [8,-2,4]
      |     return "Tests passed!"
      |
      | test_select_col()

    x-quill

---
> id: step-121

*Solution.* We use a list comprehension to select the appropriate entry from each row.

    pre(python-executable)
      | def select_col(M, i):
      |     return [row[i] for row in M]
      |
      | def test_select_col():
      |     assert select_col([[1,2],[3,4]],1) == [2,4]
      |     assert select_col([[7,8],[8,-2],[3,4]],1) == [8,-2,4]
      |     return "Test passed!"
      |
      | test_select_col()

[Continue](btn:next)

---
> id: step-122      

::: .exercise
**Exercise**  
Write a function which reverses the words in a sentence. For simplicity, you may assume that the sentence does not contain punctuation.

_Hint_: The string methods `{py} join` and `{py} split` might be helpful. You can see the documentation for these methods with `{py} help(str.join)` and `{py} help(str.split)`.
:::

    pre(python-executable)
      | def reverse_words(sentence):
      |     pass # add code here
      |
      | def test_reverse_words():
      |     assert reverse_words("The quick brown fox") == "fox brown quick The"
      |     assert reverse_words("") == ""
      |     return "Tests passed!"
      |
      | test_reverse_words()

    x-quill

---
> id: step-123

*Solution.* We use the string method `{py} split`, which splits a string on a given character. This gives us a list of the words in the sentence, which we can reverse by indexing with a negative step and rejoin with the `{py} join` method.

    pre(python-executable)
      | def reverse_words(sentence):
      |     return " ".join(sentence.split(" ")[::-1])

---
## Sets and Dictionaries

> id: sets-and-dictionaries
> section: sets-and-dictionaries

### Sets

**Sets** are unordered collections of unique values. The main advantage of having a special type for sets is that the design of the data structure can be optimized for membership checking. Figuring out whether a given value is in a list requires going through each element in the list, so the amount of time it takes increases with the length of the list. By contrast, checking membership in a set can be done very quickly even if the set is large.

    pre(python-executable)
      | A = [1,2,3]
      | S = set(A)
      | 2 in S # evaluates to true
      | S.remove(2) # removes 2
      | S.add(11) # puts 11 in the set
      | 2 in S # evaluates to False now

::: .exercise
**Exercise**  
Make a set which contains the first 10,000 prime numbers.

_Hint_: It suffices to look for primes among the first 110,000 integers. Compare how long it takes to check whether a given number is in that set to the time it takes to compute whether the number is prime using `{py} sympy.isprime`.

_Note 1_: The most reliable and efficient way to figure out how the `{py} timeit` function works is to [[run help(timeit)|try it on different examples and guess|ask on StackOverflow]].

_Note 2_: The computation below takes some time to run (20 seconds, say). It returns a tuple when it's done.
:::

    pre(python-executable)
      | import timeit
      | SETUP = """
      | from sympy import isprime
      | primes = [] # add your code
      | primesSet = set(primes)
      | """
      | a = timeit.timeit("98779 in primes", setup = SETUP)
      | b = timeit.timeit("98779 in primesSet", setup = SETUP)
      | c = timeit.timeit("isprime(98779)", setup = SETUP)
      | a,b,c

    x-quill

---
> id: step-124

*Solution.* To get exactly 10,000 primes, we index the list obtained by filtering out the composite numbers:

    pre(python-executable)
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

Put the three methods in order from fastest to slowest:

    x-sortable
      .item.md(data-index="2") List membership checking
      .item.md(data-index="0") Set membership checking
      .item.md(data-index="1") Computing from scratch

---
> id: step-125

### Dictionaries

The internal mechanism that sets use to check membership extremely fast is also useful when the information you want to retrieve is more complex than just `{py} True` or `{py} False`.

For example, suppose you want to store a collection of color names together with the [RGB values](https://en.wikipedia.org/wiki/RGB_color_model) for each one. We'll store the names as [[strings|floats|ints]] and the RGB triples as [[tuples|strings|floats]].

---
> id: step-126

It's possible to do this by putting the names in a list and the values in a list of the same length:

``` python
names = ["fuchsia", "firebrick", "goldenrod"]
rgbs = [(256, 0, 256), (178, 34, 34), (218, 165, 32)]
```

However, this solution gets very tedious quickly. For example, modifying this structure requires [[modifying both lists|modifying at least one of the lists]].

---
> id: step-127

The Python data structure tailored to the problem of encoding a map from one finite set to another is called a **dictionary**. Dictionary literals consist of a comma separated list of the desired input-output pairs (with each input and output separated by a colon) delimited by curly braces. For example, the dictionary encoding the map described above looks like this:

    pre(python-executable)
      | rgb = {
      |   "fuchsia": (256, 0, 256),
      |   "firebrick": (178, 34, 34),
      |   "goldenrod": (218, 165, 32)
      | }

The domain elements `{py} "fuchsia"`, `{py} "firebrick"` and `{py} "goldenrod"` are called the **keys** of the dictionary, and the codomain elements `{py} (256,0,256)`, `{py} (178,34,34)`, and `{py} (218,165,32)` are called the **values**.

We can also form new dictionaries from lists of pairs using the `{py} dict` function:

``` python
dict([
  ("fuchsia", (256, 0, 256)),
  ("firebrick", (178, 34, 34)),
  ("goldenrod", (218, 165, 32))
])
```

[Continue](btn:next)

---
> id: step-128

We can perform a dictionary lookup using indexing [syntax](gloss:syntax): `{py} rgb["fuchsia"]` returns `{py} (256,0,256)`. We can also change the value associated with a given key or introduce a new key-value pair using indexing and assignment:

    pre(python-executable)
      | rgb = {
      |   "fuchsia": (256, 0, 256),
      |   "firebrick": (178, 34, 34),
      |   "goldenrod": (218, 165, 32)
      | }
      | rgb["crimson"] = (220, 20, 60)
      | len(rgb)

The `{py} dict` [methods](gloss:method), `{py} keys` and `{py} values`, may be used to access the keys and values of a dictionary.

    pre(python-executable)
      | rgb = {
      |   "fuchsia": (256, 0, 256),
      |   "firebrick": (178, 34, 34),
      |   "goldenrod": (218, 165, 32)
      | }
      | rgb.keys()

[Continue](btn:next)

---
> id: step-129

::: .exercise
**Exercise**  
Consider a dictionary which encodes flight arrival times:

``` python
import datetime
arrival_times = {
  "JetBlue 924": datetime.time(7,9),
  "United 1282": datetime.time(7,42),
  "Southwest 196": datetime.time(7,3)
}
```

You can most easily use this dictionary to [[look up the arrival time of a flight|look up which flights arrive at a given time]].

Suppose you want to reverse the lookup direction: for any given time, you want to see which flight arrives at that time. One problem is that [[multiple flights may arrive at the same time|the airlines aren't the same]].

Assuming that the codomain values are distinct, however, you can form a new dictionary that allows you to look up keys for values by mapping the `{py} reversed` function over the key-value pairs of the dictionary (obtainable through `{py} items` method).

Implement this idea in the block below. Check that your dictionary works by indexing it with `{py} datetime.time(7,9)`.

:::

    pre(python-executable)
      | import datetime
      | arrival_times = {
      |   "JetBlue 924": datetime.time(7,9),
      |   "United 1282": datetime.time(7,42),
      |   "Southwest 196": datetime.time(7,3)
      | }

    x-quill

_{button.next-step} Submit_

---
> id: step-130

*Solution.* We use the `{py} dict` function to convert the list of pairs back into a dictionary: `{py} dict(map(reversed, arrival_times.items()))`.

[Continue](btn:next)

---
> id: step-131

### Exercises

::: .exercise
**Exercise**  
Python supports a `{py} dict` comprehension construct which is very similar to a list comprehension. Here's a dictionary that maps each one-digit positive integer to its square:

``` python
square_dict = {k: k*k for k in range(1, 10)}
```

Use a dict comprehension to make a dictionary which maps each of the first 100 powers of 2 to its units digit.
:::

    pre(python-executable)
      |

    x-quill

---
> id: step-132

*Solution.* We convert to a string, get the last character, and convert back to an integer:

    pre(python-executable)
      |   {2**k: int(str(2**k)[-1]) for k in range(100)}

[Continue](btn:next)

---
> id: step-133

::: .exercise
**Exercise**  
Suppose you want to store student IDs in a part of a web application where the main thing you need to do is check whether an ID input by a student is a valid student ID (so you can flag it if it has been mistyped). Among the given options, the best data structure for this purpose would be a [[set|list|tuple|dictionary]].
:::

[Continue](btn:next)

---
> id: step-134

*Solution.* This is an ideal use case for sets. Lists and tuples will be slower for checking membership, and dictionaries aren't quite appropriate because it isn't clear what the values would be.

---

## Iteration

> id: iteration
> section: iteration

We have already seen one way of doing something to each element in a collection: the [*list comprehension*](gloss:listcomp).

    pre(python-executable)
      | smallest_factor = {2: 2, 3: 3, 4: 2, 5: 5,
      |                  6: 2, 7: 7, 8: 2, 9: 3}
      | [v for (k,v) in smallest_factor.items()]

In this list comprehension, we **iterate** over the pairs of the [dictionary](gloss:dictionary) to produce a new list. Although list comprehensions are very useful, they are not flexible enough to cover all our iteration needs. A much more flexible tool is the **for loop**.

[Continue](btn:next)

---
> id: step-135

### *For* statements

The code above could also be rewritten as follows:

    pre(python-executable)
      | smallest_factor = {2: 2, 3: 3, 4: 2, 5: 5,
      |                  6: 2, 7: 7, 8: 2, 9: 3}
      | vals = []
      | for (k,v) in smallest_factor.items():
      |     vals.append(v)
      | vals

The statement `{py} for item in collection:` works as follows: the first element of `{py} collection` is assigned to `{py} item`, and the block indented below the `{py} for` statement is executed. Then, the second element of `{py} collection` is assigned to `{py} item`, the indented block is executed again, etc., until the end of the collection is reached.

[Continue](btn:next)

---
> id: step-136

We can nest `{py} for` statements. For example, suppose we have a matrix represented as a [list](gloss:list) of lists, and we want to sum all of the matrix entries. We can do that by iterating over the rows and then iterating over each row:

    pre(python-executable)
      |
      | def sum_matrix_entries(M):
      |     """
      |     Return the sum of the entries of M
      |     """
      |     s = 0
      |     for row in M:
      |         for entry in row:
      |             s = s + entry
      |     return s
      |
      | def test_sum():
      |     M = [[1,2,3],[4,5,6],[7,8,9]]
      |     assert sum_matrix_entries(M) == 45
      |     return "Test passed!"
      |
      | test_sum()

[Continue](btn:next)

---
> id: step-137

::: .exercise
**Exercise**  
Suppose you have imported a function `{py} file_bug_report` with two parameters: `{py} id` and `{py} description`. Suppose also that you have a `{py} dict` called `{py} bugs` whose keys are ids and whose values are strings representing descriptions. Write a loop which performs the action of filing each bug report in the dictionary.  
:::

    pre(python-executable)
      | def file_bug_report(id, description):
      |     "A dummy function which represents filing a bug report"
      |     print(f"bug {id} ({description}) successfully filed")
      |
      |
      | bugs = {"07cc242a":
      |           "`trackShipment` hangs if `trackingNumber` is missing",
      |         "100b359a":
      |           "customers not receiving text alerts"}

    x-quill

---
> id: step-137a

*Solution.* We loop over the items:

    pre(python-executable)
      | for id, desc in bugs.items():
      |     file_bug_report(id, desc)

[Continue](btn:next)

---
> id: step-138

::: .exercise
**Exercise**  
Write a [function](gloss:function) called `{py} factorial` which takes a positive integer `{py} n` as an argument and returns its factorial.
:::

    pre(python-executable)
      | def factorial(n):
      |     "Return n!"
      |     # add code here
      |
      | def test_factorial():
      |     assert factorial(3) == 6
      |     assert factorial(0) == 1
      |     assert factorial(20) == 2432902008176640000
      |     return "Tests passed!"
      |
      | test_factorial()

    x-quill

---
> id: step-139

*Solution.* We loop through `{py} range(1, n+1)` and multiply as we go.

    pre(python-executable)
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
      |     return "Tests passed!"
      |
      | test_factorial()

[Continue](btn:next)

---
> id: step-140

### *While* statements

The **Collatz conjecture** is one of the easiest-to-state unsolved problems in mathematics. Starting from any given positive integer, we halve it if it's even and triple it and add one if it's odd. The Collatz conjecture states that repeatedly applying this rule always gets us to the number 1 eventually. For example, the *Collatz sequence* starting from 17 is

    center: p 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1

If we want to write a Python function which returns the Collatz sequence for any given starting number, we face a problem: we don't know from the start how many steps it will take to reach 1, so it isn't clear how we could use a *for loop*. What we want to do is execute a block of code until a given condition is met. Python provides the `{py} while` loop for this purpose.

    pre(python-executable)
      | def collatz_sequence(n):
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
      | def test_collatz():
      |     assert collatz_sequence(17) == [17, 52, 26, 13,
      |                                 40, 20, 10, 5,
      |                                 16, 8, 4, 2, 1]
      |     return "Test passed!"
      |
      | test_collatz()

The expression which appears immediately following the `{py} while` keyword is called the **condition**, and the block indented below the `{py} while` statement is the **body** of the loop. The rules of the language stipulate the following execution sequence for a `{py} while` statement: the condition is evaluated, and if it's true, then the body is executed, then condition is evaluated again, and so on. When the condition returns `{py} False`, the loop is exited. An exit can also be forced from within the body of the while loop with the keyword `{py} break`.

::: .exercise
**Exercise**  
Newton's algorithm for finding the square root of a number `{py} n` starts from 1 and repeatedly applies the function $x\mapsto \frac{1}{2}(x + n/x)$. For example, applying this algorithm to approximate $\sqrt{2}$, we get

    center: p 1, 3/2, 17/12, 577/408, ...

This algorithm converges very fast: 577/408 approximates $\sqrt{2}$ with a relative error of about 0.00015%.

Write a function `{py} newtonsqrt` which takes as an argument the value `{py} n` to square root and applies Newton's algorithm until the relative difference between consecutive iterates drops below $10^{-8}$.

Note that $10^{-8}$ can be represented in Python using scientific notation `{py} 1e-8`.
:::

    pre(python-executable)
      | def newtonsqrt(n):
      |     """Use Newton's algorithm to approximate √n"""
      |     # add code here
      |
      | def test_newton():
      |     assert abs(newtonsqrt(2) - 1.4142135623730951) < 1e-6
      |     assert abs(newtonsqrt(9) - 3) < 1e-6
      |     return "Tests passed!"
      |
      | test_newton()

    x-quill

---
> id: step-141

*Solution.* We keep up with two separate variables, which we call `{py} x` and *`{py} old_x`*, to compare the most recent two iterates:

    pre(python-executable)
      | def newtonsqrt(n):
      |     """Use Newton's algorithm to approximate √n"""
      |     x = 1
      |     while True:
      |         old_x = x
      |         x = 1/2 * (x + n/x)
      |         if abs(x - old_x)/old_x < 1e-8:
      |             return x

[Continue](btn:next)

---
> id: step-142

### Exercises

::: .exercise
**Exercise**  
Write a function which prints an $n \times n$ checkerboard pattern of `{py} x`'s and `{py} o`'s.

_Note_: `{py} \n` in a string literal represents the "newline" character. You'll need to print this character after each row you've printed.
:::

    pre(python-executable)
      | def checkerboard(n):
      |     """
      |     Prints an n × n checkerboard, like:
      |       
      |     xoxo
      |     oxox
      |     xoxo
      |     oxox
      |     """

    x-quill

---
> id: step-143

*Solution.* We loop through the rows and use an `{py} if` statement to print a different output depending on whether the row is even-numbered or odd-numbered.

    pre(python-executable)
      | def checkerboard(n):
      |     "Prints an n × n checkerboard"
      |     for i in range(n):
      |         if i % 2 == 0:
      |             print("xo" * (n//2))
      |         else:
      |             print("ox" * (n//2))
      |         print("\n")

::: .exercise
**Exercise**  
Write a function which prints [Pascal's triangle](https://en.wikipedia.org/wiki/Pascal%27s_triangle) up to the $n$th row, where the top row counts as row zero. You might want to use a helper function `{py} print_row(n,row)` to manage the responsibility of printing each row, as well as a helper function `{py} next_row(row)` to calculate each row from the previous one.

Example output, for `{py} n = 4`:

``` code
        1
      1   1
    1   2   1
  1   3   3   1
1   4   6   4   1
```

_Note_: there's no solution to this one, but you can do it on your own!
:::

    pre(python-executable)
      | def print_row(n,row):
      |     """
      |     Prints the nth row (`row`) of Pascal's triangle
      |     with appropriate spacing.
      |     """
      |
      | def next_row(row):
      |     """
      |     Returns the next row in Pascal's triangle.
      |     Example: next_row([1,3,3,1]) == [1,4,6,4,1]
      |     """
      |
      | def pascals_triangle(n):
      |     """
      |     Print the first n rows of Pascal's triangle
      |     """

    x-quill

---

## Project 1: Spotify

> id: project-1
> section: project-1-spotify

One of the most challenging aspects of learning to program is the difficulty of synthesizing individual skills in the service of a larger project. This section provides a stepping stone on that path by progressively solving a real-world problem.

You'll want to follow along either on your own computer or in [Binder](https://mybinder.org/v2/gh/data-gymnasia/python-binder/master). You can't use code blocks in this page, because there's an authentication step which requires a feature which isn't supported here.

[Continue](btn:next)

---
> id: step-144

### Spotify

As an avid Spotify listener, you find that you'd prefer more flexibility in the way your playlists are built. For example, you find it tedious when two particularly long songs play back-to-back, and you want to eliminate those instances without having to read through and do it manually. Also, you want to have at least three separate genres represented in every block of eight consecutive songs. You want the flexibility to modify these requirements or add new ones at any time.

This is not the sort of capability that Spotify is ever going to provide through its app, but Spotify *does* support interaction through a programming language. Such an interface is called an **API** (application programming interface).

[Continue](btn:next)

---
> id: step-145

You decide to google *Spotify API* to see what the deal is. That takes you to the [main Spotify API page](https://developer.spotify.com/documentation/web-api/), where you read about how the API uses standard HTTPS requests (these are the requests that your browser is using in the background load webpages, enter information into forms on the internet, etc.). Rather than proceeding along this route, you think to yourself "surely someone in the vast Python world has made a Python package to handle these HTTPS requests". So you google "Spotify Python API".

[Continue](btn:next)

---
> id: step-146

Turns out, you were right. The first few hits pertain to a package called `{py} spotipy`. You check out [the docs](https://spotipy.readthedocs.io/en/latest/) and find that you can install the package by running _pip install spotipy_. Since _{code}pip_ is a [command line](gloss:command-line) tool, this is something you should run from the terminal.

_Note_: if you're working in a Jupyter notebook, you can send code from a cell to the command line by prepending an exclamation point:

``` python
!pip install spotipy
```

[Continue](btn:next)

---
> id: step-147

Looking around in the documentation a bit more, we discover the functions *`{py} user_playlist_tracks`* and *`{py} user_playlist_add_tracks`*, which retrieve the tracks on a playlist and add new ones to it, respectively. So you decide to get the tracks from one of your playlists, manipulate them however you want inside the Python program, and put the new list in place of the old one. All we need from Spotify to make this work, in addition to the previous two functions, is a function to [[remove the existing tracks|swap tracks one at a time|get a list of the playlist tracks]].

---
> id: step-148

Looking around a bit more, you find *`{py} user_playlist_remove_all_occurrences_of_tracks`*, which isn't exactly what you were looking for, but it will work since we can [[remove every track originally on the playlist|instruct it to remove every track on Spotify]].

---
> id: step-149

Your plan is beginning to take shape. You decide to make sure everything works before getting into the details of how you're going to modify the playlist. You follow the instructions in the documentation for getting the appropriate authorization credentials for your Python program to access your Spotify account. That step is a bit tedious, but it's going to be worth it. Working from the example in the documentation, you eventually arrive at some code that looks like the following (note that the values of the `{py} CLIENT` variables and the *`{py} playlist_id`* below are fake, so yours will necessarily be different).

``` python
import spotipy
import spotipy.util as util

username = 'sswatson'
scope = 'user-library-read'
scope = 'playlist-modify-public'

CLIENT_ID = 'bcc57908a2e54cee94f9e2307db67c2e'
CLIENT_SECRET = '6831b3ceaf0a40a6a1fdeb67105ef19b'

playlist_id = '57hQnYeBC4u0IUhaaHmM0k'

token = util.prompt_for_user_token(username,
                                   scope,
                                   client_id=CLIENT_ID,
                                   client_secret=CLIENT_SECRET,
                                   redirect_uri='http://localhost/')

sp = spotipy.Spotify(auth=token)
```

[Continue](btn:next)

---
> id: step-150

Next, you implement your plan sans-track-modification, to make sure the functions work as expected.

``` python
original_tracks = sp.user_playlist_tracks(username, playlist_id)
# shorten the name of the remove tracks function
remove_tracks = sp.user_playlist_remove_all_occurrences_of_tracks
remove_tracks(username, playlist_id, original_tracks)
sp.user_playlist_add_tracks(username, playlist_id, original_tracks)
```

That second line is there because you decided that function's name was so long it was getting unwieldy.

[Continue](btn:next)

---
> id: step-151

Hmm. Error. Specifically, a `{py} SpotifyException`, which suggests that you didn't use the API in the intended way. You'll have to dig into this to figure out what went wrong. But first, it's a bit untidy to have those four lines of code loose in our program. Let's wrap them in a function. The playlist id should be an argument, and we should also take as an argument a track-modifying function that we'll start using once we get to that part.

``` python
def modify_playlist_tracks(playlist_id, track_modifier):
    original_tracks = sp.user_playlist_tracks(username, playlist_id)
    new_tracks = track_modifier(original_tracks)
    remove_tracks = sp.user_playlist_remove_all_occurrences_of_tracks
    remove_tracks(username, playlist_id, original_tracks)
    sp.user_playlist_add_tracks(username, playlist_id, new_tracks)
```

Now let's figure out the error. If we examine the traceback supplied as a part of the error message, we can see that the error is being thrown from the line where we call *`{py} remove_tracks`*. So we look at the documentation for that function.

``` python
help(remove_tracks)
```

We see that the `{py} tracks` argument is supposed to be a list of playlist ids. Is that what *`{py} user_playlist_tracks`* returns? You investigate.

``` python
original_tracks = sp.user_playlist_tracks(username, playlist_id)
original_tracks
```

The output from that expression prints all over the screen, and it looks like it has a lot more data than just a list of id's. That's actually pretty helpful, because we'll need that data to modify the list appropriately. But in the meantime, we need to extract the actual playlist ids.

[Continue](btn:next)

---
> id: step-152

You begin by checking *`{py} type(original_tracks)`*. It's a [[dict|list|tuple]]. So you have a look at its keys:

``` python
original_tracks.keys()
```

---
> id: step-153

This returns

``` python
dict_keys(['href', 'items', 'limit', 'next', 'offset', 'previous', 'total'])
```

Without looking to carefully at the other items, it's a good guess that `{py} 'items'` is the one you want. You check
*`{py} type(original_tracks['items'])`* and find that it's a [[list|dict|tuple]]. To have a look at the first one, you do *`{py} original_tracks['items'][0]`*. Repeating this step-by-step inspection, you find finally that *`{py} original_tracks['items'][0]['track']['id']`* is an actual playlist id.

---
> id: step-154

::: .exercise
**Exercise**  
Write a [list comprehension](gloss:listcomp) to calculate the list of all of the tracks' playlist ids.
:::

    pre(python-executable)
      |

    x-quill

---
> id: step-155

*Solution.* *`{py} [item for item in original_tracks['items']]`* would return the `{py} 'items'` list. To map each item to its playlist id, we index it with `{py} 'track'` and then with `{py} 'id'` as above. So we get *`{py} [item['track']['id'] for item in original_tracks['items']]`*

[Continue](btn:next)

---
> id: step-156

You insert this list comprehension into our function to fix it. You decide to reverse the list of tracks just to confirm that running the code has an effect on the Spotify side.

``` python
def modify_playlist_tracks(playlist_id, track_modifier):
    original_tracks = sp.user_playlist_tracks(username, playlist_id)
    new_tracks = track_modifier(original_tracks)
    remove_tracks = sp.user_playlist_remove_all_occurrences_of_tracks
    original_ids = [item['track']['id'] for item in
                                        original_tracks['items']]
    remove_tracks(username, playlist_id, original_ids)
    sp.user_playlist_add_tracks(username, playlist_id, new_tracks)


def track_modifier(tracks):
    return reversed([item['track']['id'] for item in tracks['items']])


modify_playlist_tracks(playlist_id, track_modifier)
```

This works! You can check that the order of the playlist was reversed.

::: .exercise
**Exercise**  
Add more features to the function *`{py} track_modifier`* to modify playlists in ways that you find interesting or desirable. In the answer box below, describe what you did and add code snippets as you see fit.
:::

    x-quill

---

## Project 2: Mail Merge

> id: project-2
> section: project-2-mail-merge

Suppose you want to send an email to dozens of people, with some elements of the message varying by recipient. For example, you'd like to insert the recipient's first name in the salutation, and you might also need to insert a personal URL or passcode, information on the recipient's status, etc.

This problem is called *mail merge*, and there are many commercial software solutions available. However, in this section you'll implement a simple and flexible mail merge in Python. You will want to do this on your computer, because the authorization step involves using your operating system keychain.

[Continue](btn:next)

---
> id: step-157

### yagmail

The first hurdle is to securely authorize your Python program to access your email account. You're a Gmail user, so you search for a Gmail package for Python and find [yagmail](https://github.com/kootenpv/yagmail).

Following the installation instructions on the project GitHub page, you run `{py} pip3 install yagmail[all]` from the [command line](gloss:command-line) to install `{py} yagmail`.

[Continue](btn:next)

---
> id: step-158

Continuing to follow the instructions, you run

``` python
import yagmail
yagmail.register('mygmailusername')
```

and enter the password for the Gmail account in the resulting password prompt. This stores the password in the operating system keychain so you don't have to keep entering it. (Note: if you're using dual authentication on your Google account, you'll need to generate and enter a special app password instead of your regular password; see [this info page](https://support.google.com/accounts/answer/185833?p=InvalidSecondFactor) for instructions. I found that I also needed to be logged into my Google account on my system, which is in System Preferences > Internet Accounts on macOS.)

[Continue](btn:next)

---
> id: step-159

Now you can set up an `{py} SMTP` object for sending messages.

``` python
yag = yagmail.SMTP("mygmailusername@gmail.com")
```

In the documentation, you read that this object has a `{py} send` method whose parameter list includes `{py} to`, `{py} subject`, and `{py} contents`. you want to call this method once for each recipient, and for that you use a [[for loop|while loop|if statement]].

---
> id: step-160

### CSV

Before sending the message, you have to figure out to store the data for each recipient and how to insert that data into the message. One easy solution to the former problem is to store the data in a spreadsheet. You decide to skip the spreadsheet software since the situation is so simple. Instead, you make a file called `{code} mail-merge-data.csv`, open it in a text editor, and insert the contents

    pre
      | Name,Email,Status
      | Viorica,virica@example.com,pending
      | Sidra,sidra_tiwana@example.com,completed
      | Alfonso,alfonso.serrano@example.com,pending

You save the file and proceed to figuring out how to load it into Python.

[Continue](btn:next)

---
> id: step-161

### Pandas

You google "enter CSV in Python" and scan the first several search results. The first couple show examples with a dozen or so lines of code, which seems more complicated than necessary. Going back to the search results, you see a function called *`{py} pandas.read_csv`*, and you remember that Pandas is the recommended package for handling spreadsheet data in Python. So you do

``` python
import pandas as pd
mailData = pd.read_csv("mail-merge-data.csv")
```

You check `{py} type(mailData)` and see that `{py} mailData` is a `{py} DataFrame`, which is the general Pandas type for tabular data.

[Continue](btn:next)

---
> id: step-162

Now you have to figure out how to loop over the rows of a `{py} DataFrame`. You search the web for "how to loop over rows of pandas dataframe" and discover the method [[**itertuples** | **iteritems** | **items**]] (look it up!).

---
> id: step-163

You do `{py} list(mailData.itertuples())[0]` to get an example row from the `{py} DataFrame`, and you call `{py} dir` on it to look for the right method for extracting each column value. You see that `{py} Name`, `{py} Email`, and `{py} Status` are attributes of the row, so you can access them using dot syntax (like `{py} row.Email`).

[Continue](btn:next)

---
> id: step-164

Finally, you need to insert information from each `{py} DataFrame` row into the message. Fortunately, you alreday know a great way to do this: [[f-strings|dictionaries|lists]]!

---
> id: step-165

It will be a bit awkward to type the whole message into the line where you call `{py} yag.send`, so instead you write a function that takes `{py} row` as a parameter and returns the message.

``` python
def message(row):
    return f"""
    Dear {row.Name},

    Thanks for participating! Your status is {row.Status}.

    Yours,
    Roza
    """
```

::: .exercise
**Exercise**  
Tie all of the above together to write a couple more lines of code that will actually send the messages.
:::

    pre(python-executable)
      |

    x-quill

---
> id: step-166

*Solution.* We supply the `{py} Email` attribute of `{py} row` to the `{py} to` argument, and  `{py} message(row)` to `{py} contents`:

``` python
for row in mailData.itertuples():
    yag.send(to=row.Email,
             subject="Your status",
             contents = message(row))
```

[Continue](btn:next)

---
> id: step-167

Congratulations! You have finished the Data Gymnasia *Programming with Python* course.
