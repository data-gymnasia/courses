# Programming in Julia

> id: intro
> description: An introduction to programming, including types, functions, multidimensional arrays, tuples, dictionaries, flow control, and plotting.
> color: "#bf3131"
> next: numerical-computing
> author: Samuel S. Watson

## Introduction

In subsequent Data Gymnasia courses, we will develop mathematical ideas in concert with corresponding computational skills. This relationship is symbiotic: writing programs is an important ingredient for applying mathematical ideas to real-world problems, but it also helps us explore and visualize math ideas in ways that go beyond what we could achieve with pen, paper, and imagination.

[Continue](btn:next)

---
> id: step-julia-reasons

We will use *Julia* for most of our work in those courses. This is a relatively new entrant to the scientific computing scene, having been introduced publicly in 2012 and reaching its first stable release in August of 2018. Julia is ideally suited to the purposes of this course:
* **Julia is designed for scientific computing**. The way that code is written in Julia is influenced heavily by its primary intended application as a scientific computing environment. This means that our code will be succinct and will often look very similar to the corresponding math notation.
* **Julia has benefits as an instructional language**. Julia provides tools for inspecting how numbers and other data structures are stored internally, and it also makes it easy to see how the built-in functions work.
* **Julia is simple yet fast**. Hand-coded algorithms are generally much faster in Julia than in other user-friendly languages like Python or R. This is not always important in practice, because you can usually use fast code written by other people for the most performance-sensitive parts of your program. But when you're learning fundamental ideas, it's very helpful to be able to write out simple algorithms by hand and examine their behavior on large or small inputs. It can also be helpful in real-world applications where packaged code doesn't fit your problem especially well.
* **Julia is integrated in the broader ecosystem**. Julia has excellent tools for interfacing with other languages like C, C++, Python, and R, so can take advantage of the mountain of scientific computing resources developed over the last several decades. (Conversely, if you're working in a Python or R environment in the future, you can write some Julia code and call it from your Python or R program.)

[Continue](btn:next)

---
> id: step-speed-note

An important note on Julia's speed: because of the way Julia works, functions take longer to run the first time they are called. This means that loading a large package (or calling a function that calls many other functions for the first time) can be quite [[slow|fast]]. The developers are working to mitigate this issue, but it's challenging for reasons which are closely related to the design choices that make Julia fast.

---
> id: step-1

This course contains many exercises. Doing them in earnest is essential for knowledge and skill retention. You should solve each exercise prior to clicking the "Continue" button to see an example solution.

[Continue](btn:next)

---
> id: step-2

### Installation

There are several ways to access Julia:

**Inline**. This course will let you execute Julia code blocks in the webpage (thanks to [Juniper](https://github.com/ines/juniper) and [Binder](https://mybinder.org)). So if you don't want to install anything yet, you don't have to. (However, the first cell you run will be slow with this method, like up to 30 seconds, since your environment has to be launched behind the scenes on Binder's servers. If it's taking too long, reload the page.)

[Continue](btn:next)

---
> id: step-3

**Binder**. You can also run Julia code in a notebook on the Binder website. To launch with a set of packages tailored to this course, [click here](https://mybinder.org/v2/gh/data-gymnasia/julia-binder/master). Then, select *New* (top right corner and *Julia*). It is highly recommended that you keep a tab with a Binder notebook open while working through this course, because it can serve as a space for scratch work, and it provides more features than the blocks which appear in-page.

[Continue](btn:next)

---
> id: step-4

**Locally**. Download Julia for your system [here](https://julialang.org/downloads/). You want to get the standard version (under "Current stable release"), not JuliaPro, Conda, or any other distribution.

[Continue](btn:next)

---
> id: step-5

**CoCalc**. If you want a complete environment without having to install anything locally, [CoCalc](https://cocalc.com) is a batteries-included, community-oriented platform for open-source mathematical and scientific computing. You can use it for free with limited functionality, and it's $14 per month to support the project and get paid account features.

[Continue](btn:next)

---
> id: step-julia-help

 Some important tips for getting help as you learn:


* Julia's official documentation is available at [https://docs.julialang.org](https://docs.julialang.org) and is excellent. The learning experience you will get in this course is intended to get you up and running quickly, but you can always look at the corresponding section the documentation to learn more details.
* You can get help within a Julia session by typing a question mark before the name of a function whose documentation you want to see.
* Similarly, `{jl} apropos("eigenvalue")` returns a list of functions whose documentation mentions "eigenvalue"

[Continue](btn:next)

---
> id: step-6


### Usage

Once you have Julia installed, there are several ways to interact with it.

**REPL**. Launch a read-eval-print loop from the [command line](gloss:command-line). Any code you enter will be executed immediately, and any values returned by your code will be displayed. To start a session, open your operating system's Terminal and run `{jl} julia`. You can do this in Binder by selecting *New > Terminal*.

[Continue](btn:next)

---
> id: step-7

**Script**. Save a file called _{code} example.jl_ and run _{code} julia example.jl_ from the [command line](gloss:command-line) (in the same directory as the file) to execute all the code in the script. You can do this in Binder by selecting *New > Text File* and then changing the name of the text file to something that ends in _{code} .jl_.

[Continue](btn:next)

---
> id: step-8

**Jupyter**. Like a REPL, but allows inserting text and math expressions, grouping code into blocks, etc. This is the interface provided by default in [Binder](https://mybinder.org/v2/gh/data-gymnasia/julia-binder/master), and you can launch a notebook locally by running `{jl} jupyter notebook` from the [command line](gloss:command-line) (assuming you have [Anaconda](gloss:anaconda) installed).

[Continue](btn:next)

---
> id: step-9

**Integrated development environment (IDE)**. Essential for extensive software development projects, an IDE provides an editor for writing code, conveniences to help you code more efficiently, and a debugger to help you fix your mistakes. The main IDE for Julia is [Juno](https://junolab.org).

[Continue](btn:next)

---
> id: step-10

::: .exercise
**Exercise**.  

* If you just wanted to check how Julia evaluates `{jl} 8÷2(2+2)`, the quickest way to do that would probably be to use [[the REPL|a Jupyter notebook|an IDE]].

* If you want to create a single document with text, code, and images, [[a Jupyter notebook|the REPL]] is well suited to that.

* If you work on an extensive project with thousands of lines of code, you should [[organize the code into separate files|use one giant file]] and [[use an IDE|use a Jupyter notebook]].

:::

---

> id: basics
## Basics

Let's begin by developing some basic vocabulary for the elements of a program. This section is an overview: will develop some of these ideas in greater depth in later sections.

[Continue](btn:next)

---
> id: step-11

### Objects

A **object** is a fundamental entity that may be manipulated by a program. Objects have **types**; for example, `{jl} 5` is an `{jl} Int64` (in other words, an integer which occupies 64 bits) and `{jl} "Hello world!"` is a `{jl} String`. Types are important for the computer to keep track of, since values are stored differently depending on their type. You can check the type of a value using the `{jl} typeof` function: `{jl} typeof("hello")` returns `{jl} String`.

[Continue](btn:next)

---
> id: step-13

::: .exercise
**Exercise**.  
Use the code block below to find the type of `{jl} 1.0`. Does `{jl} 1.0` have the same type as `{jl} 1`? [[No|Yes]]
:::

    pre(julia-executable)
      | # replace this text with code and press enter while holding shift to run

---
> id: step-14

(_Note_: you probably noticed the _{code.language-markup}Loading or None returned_ message that appeared briefly when you ran the cell. If that message appears for more than 10 seconds or so, it's likely that the cell has run successfully but doesn't have anything to show as a result. We will discuss this in more detail soon.)

[Continue](btn:next)


---
> id: step-julia-variable

A **variable** is a name used to refer to a object. We can **assign** a object (say `{jl} 41`) to a variable (say `{jl} age`) as follows:

``` julia
age = 41
```

[Continue](btn:next)

---
> id: step-16

Variable names must begin with an underscore or letter and contain only letters, digits, underscores, and exclamation points after that. Unicode characters are supported in Julia and can be input by typing [appropriate descriptions](https://docs.julialang.org/en/v1/manual/unicode-input/#) followed by the tab key (but only in a REPL or notebook, convenient Unicode entry is not supported in this webpage). For example, typing `{jl} \alpha` and then tab will produce `{jl} α`.

Letters in variable names may be uppercase or lowercase, and the case matters. For example `{jl} extractValues0` is [[a valid|an invalid]] variable name, and `{jl} data.frame` is [[an invalid|a valid]] variable name.

---
> id: step-17

The object assigned to a given variable may be changed as many times as desired with further assignments.

::: .exercise
**Exercise**.  
Find the value of `{jl} x` at the end of the following block of code. [[3]]

``` julia
x = 3
y = x
x = x + 1
x = y
```
:::

---
> id: step-18

*Solution.* The value 3 is assigned to `{jl} x` and then also to `{jl} y` on the second line. After the third line, the value of `{jl} x` is 4, since the right-hand side works out to 4 an is *then* assigned to the variable `{jl} x`. After the fourth line `{jl} 3` is of `{jl} x` again, since the value of `{jl} y` is still 3 when the fourth line is executed.

[Continue](btn:next)

---
> id: step-19

::: .exercise
**Exercise**.  
Use the code block below to find out what happens when you try to use a variable that hasn't had any object assigned to it: you get an [[UndefVar]]Error.

:::

    pre(julia-executable)
      | num_carrots = 4
      | num_Carrots

---
> id: step-20

Note that when an error occurs in your code, you get a **stack trace** which helps you identify the source of the error.

### Functions

A **function** performs a particular task. For example, `{jl} print(x)` writes a string representation of the value of the variable `{jl} x` to the screen.

Prompting a function to perform its task is referred to as **calling** the function. Functions are called using parentheses following the function's name, and any objects which are needed by the function are supplied between these parentheses, separated by commas. These objects are called **arguments**.

[Continue](btn:next)

---
> id: step-21

Some functions, like `{jl} print` are built into the language and are always available. You may also define your own functions using `{jl} function`:

    pre(julia-executable)
      | function print_twice(x)
      |     print(x)
      |     print(x)
      | end
      |
      | print_twice("hey")

[Continue](btn:next)

---
> id: step-22

`{jl} function` is an example of a **keyword**: a name with a special meaning in the language. Since it has a special meaning, a keyword may not be used as a variable name.

[Continue](btn:next)

---
> id: step-24

A function may perform an action, like `{jl} print_twice`, or it may **return** an object. For example, after the following code block is run, the object `{jl} 28` will be assigned to the variable `{jl} y`.

    pre(julia-executable)
      | function add_one(x)
      |     return x + 1
      | end
      |
      | y = 20 + add_one(7)

[Continue](btn:next)

---
> id: step-omit-return-keyword

In Julia, the `{jl} return` keyword can be omitted if the value to be returned appears at the end of the body of the function. The block above would more commonly be written

    pre(julia-executable)
      | function add_one(x)
      |     x + 1
      | end
      |
      | y = 20 + add_one(7)

[Continue](btn:next)

---
> id: step-other-function-syntax

Alternatively, you can define functions in Julia using standard math notation:

    pre(julia-executable)
      | add_one(x) = x + 1

[Continue](btn:next)

---
> id: step-25

The variable name `{jl} x` in the above block is called a **parameter**. Parameters play the same role as dummy variables in the definition of a mathematical function (for example, when the squaring function is defined using the notation `f(x) = x^2`).

[Continue](btn:next)

---
> id: step-26

An **operator** is a special kind of function that can be called in a special way. For example, the multiplication operator `{jl} *` can called using the mathematically familiar *infix notation* `{jl} 3 * 5`, or in the usual way as `{jl} *(3,5)`.

[Continue](btn:next)

---
> id: step-27

::: .exercise
**Exercise**  
Arrange the operation descriptions below in order, according the corresponding Julia operator in the list `{jl} +, ^, *, ÷, //, /`. You might need to experiment using the code block below. (Note: the division symbol is `{jl} \div`-\[tab\].)

    x-sortable
      .item.md(data-index="5") division (ordinary real-number division)
      .item.md(data-index="4") rational division (return a fraction object)
      .item.md(data-index="3") integer division (quotient only; no remainder)
      .item.md(data-index="0") addition      
      .item.md(data-index="2") multiplication
      .item.md(data-index="1") exponentiation

:::

    pre(julia-executable)
      | println(6 + 11)
      | println(2^5)
      | println(3 * 4)
      | println(7÷2)
      | println(7//2)
      | println(7/2)

(Note: `{jl} println` is the same as `{jl} print` except that it prints a newline character at the end.)

[Continue](btn:next)

---
> id: step-28

### Statements and expressions

An individual executable unit of code in Julia is called a **statement**. For example, the assignment `{jl} age = 41` is a statement. Statements may include **expressions**, which are combinations of values, variables, operators, and function calls that a language interprets and **evaluates** to a value. For example, `{jl} 1 + age + abs(3*-4)` is an expression which evaluates to [[54]] (note that `{jl} abs` is the absolute value function, and we're assuming `{jl} age` is set to the value `{jl} 41`).

---
> id: step-29

::: .exercise
**Exercise**  
`{jl} function f(x) return x^2 end` is [[a statement|an expression]]

`{jl} 2 + 3*f(4)` is [[an expression|a statement]]

`{jl} y = 13` is [[a statement|an expression]]

`{jl} myName = "John" * "Doe"` is

    x-picker.list
      .item.pill.bblue(data-error="expression-1") an expression
      .item.pill.bblue a statement whose execution involves evaluating an expression

:::

### Exercises

::: .exercise
**Exercise**  
(Try doing this without executing the code.) The expression `{jl} 1 + 5÷3 + 2^3` evaluates to [[10]].
:::

---
> id: step-30

::: .exercise
**Exercise**  
(Try doing this without executing the code.) The expression `{jl} 11/2-11÷2-3` evaluates to [[-2.5]], expressed as a decimal.
:::

---
> id: step-31

::: .exercise
**Exercise**  
Find the value of `{jl} x` at the end of the following block of code. [[25]]

``` julia
x = 3^2
x = x + 1
x = x + 1
y = x÷2
x = y*y
z = 2*x
```
:::

---
> id: step-32

::: .exercise
**Exercise**  
Write a function `{jl} f` which takes a positive integer `{jl} n` as input and returns the $n$th positive odd integer. The last four lines of code check that your function works.

Also, note that you have *two* boxes: the first is for scratch, and the second is for saving your answer. Once you're happy with your code, copy and paste it into the second box.
:::

    pre(julia-executable)
      | function f(n)
      |     # add code here
      | end
      |
      | using Test
      | @test f(3) == 5
      | @test f(1) == 1
      | @test f(100) == 199

    x-quill

[Continue](btn:next)

---
> id: step-nth-odd-solution

*Solution.* The function in question is $n\mapsto 2n-1$:

    pre(julia-executable)
      |
      | function f(n)
      |     2n-1
      | end
      |
      | using Test
      | @test f(3) == 5
      | @test f(1) == 1
      | @test f(100) == 199


---
> id: step-macro-note

The `{jl} @` in the name `{jl} @test` has a special meaning in Julia: it indicates that `{jl} @test` is a **macro**. This means that the code that `{jl} @test` operates on is not evaluated right away. Rather, the code is passed directly to `{jl} @test` to be processed in a manner specified by the definition of the macro `{jl} @test`.

The following example sheds some light on the difference between evaluating code to pass values to a function and passing the code directly to a macro: if `{jl} x` is not defined, then `{jl} f(x)` *always* throws an error, since the value assigned to `{jl} x` cannot be looked up and passed to the function `{jl} f`. However, `{jl} @f(x)` might not throw an error, because a literal `{jl} x` symbol is what's being passed to the macro `{jl} @f`. As long as `{jl} @f` doesn't try to evaluate `{jl} x`, there might be no problem.

In general, you shouldn't have to worry about macros much. However, you will see macros in use sometimes, and it can be helpful to be aware that what's happening is [[different from|just]] standard Julia syntax parsing.

---
> id: step-33

::: .exercise
**Exercise**  
Select the true statements.

    x-picker.list
      .item.pill.bblue.md The statement `{jl} balance = 46.04` assigns the value `{jl} 46.04` to the variable `{jl} balance`.
      .item.pill.bblue.md(data-error="not-a-variable") The object `{py} 33` is a variable.
      .item.pill.bblue(data-error="mutable") The value assigned to a variable cannot be changed.
      .item.pill.bblue Variable names in Julia are case-sensitive.
:::

---

> id: types
## Types

Julia, like most programming languages, has built-in types for handling common data like numbers and text.

[Continue](btn:next)

---
> id: step-34

### Numbers

As discussed in the previous section, a numerical value can be either an integer or a floating point number. We can represent integers exactly, while storing a real number as a float [often requires rounding slightly](gloss:rounding). The standard integer and floating point types in Julia are called `{jl} Int64` and `{jl} Float64`, [respectively](gloss:respectively), because 64 bits are used to store an object of either type.

[Continue](btn:next)

---
> id: step-35

A number typed directly into a Julia program is stored as a float or integer according to whether it contains a decimal point, so if you want the value 6 to be stored as a `{jl} Float64`, you should write it as `{jl} 6.0`.

[Continue](btn:next)

---
> id: step-36

Numbers can be compared using the operators `{jl} ==,>,<,≤,≥`. Recall that an operator is a function that [[can be called using infix syntax|takes one argument]].

::: .exercise
**Exercise**  
What is the type of the object returned by `{jl} 1 == 2`? [[Bool]]
:::

    pre(julia-executable)
      | 1 == 2

---
> id: step-37

<p></p>

::: .exercise
**Exercise**  
`{jl} x == 1` is [[an expression|a statement]] which returns `{jl} true` or `{jl} false` according to whether [[the object assigned to x is equal to 1|the string "x" is equal to 1]]. Meanwhile, `{jl} x = 1` is [[a statement|an expression]] that [[assigns the object 1 to `{py} x`|compares `{py} x` to 1]].
:::

---
> id: step-38

### Strings

Textual data is represented using a sequence of characters called a **string**. We can create a string object by enclosing the desired sequence of characters in quotation marks: `{jl} a = "this is a string"`. Such a quote-enclosed string of characters in a Julia program is called a **string literal**. String literals can also be delimited by triple quotes, which can be useful for multi-line strings and for strings containing quotes.

    pre(julia-executable)
      | """
      | This is a multiline string.
      | It can have "quotes", no problem.
      | """
      |
      | "This is an ordinary string. \"Quotes\" require a backslash."

[Continue](btn:next)

---
> id: step-39

We can find the number of characters in a string with the `{jl} length` function: `{jl} length("hello")` returns [[5]].

---
> id: step-40

We can concatenate two strings with the multiplication operator (`{jl} *`): `{jl} "Hello " * "World"`.

[Continue](btn:next)

---
> id: step-41

We can return the first character in a string `{jl} s` using the expression `{jl} s[1]`, the second element using `{jl} s[2]`, and so on. We can get the substring from the third to the eighth character using `{jl} s[3:8]`.

[Continue](btn:next)

---
> id: step-42

::: .exercise
**Exercise**  
For which values of `{jl} a` and `{jl} b` does the expression `{jl} "Hello World"[i:j] == "o Wo"` return `{jl} true`? i = [[5]] and j = [[8]]
:::

    pre(julia-executable)
      | "Hello World"[i:j]

---
> id: step-43

::: .exercise
**Exercise**  
If `{jl} j` is replaced with `{jl} end` in the expression `{jl} s[i:j]` (where `{jl} s` is a string), what happens? Experiment using the code block above.
:::

    x-quill

---
> id: step-44

*Solution.* Indexing with an expression involving `{jl} end` is the same as replacing `{jl} end` with the length of the string.

[Continue](btn:next)

---
> id: step-45

### String interpolation

We can insert the value of a variable into a string using *string interpolation*:

    pre(julia-executable)
      | x = 19
      | """
      | The quotient when x is divided by 3
      | is $(x÷3), and the remainder is $(x % 3)
      | """

::: .exercise
**Exercise**  
Use string interpolation to write a single line of code which prints `{jl} multiplying by 6.2 yields 12.4` if `{jl} 2` is assigned to the variable `{jl} A` and prints `{jl} multiplying by 6.2 yields 18.6` if `{jl} 3` is assigned to `{jl} A`.
:::

    pre(julia-executable)
      | A = 2
      |

    x-quill

---
> id: step-46

*Solution.* The expression `{jl} "multiplying by 6.2 yields $(6.2*A)"` works.

[Continue](btn:next)

---
> id: step-47

### Booleans

A `{jl} Bool` is a special type whose only values are `{jl} true` and `{jl} false`. The fundamental operators that can be used to combine boolean values are `{jl} &&` (and), `{jl} ||` (or), and `{jl} !` (not).

[Continue](btn:next)

---
> id: step-48

::: .exercise
**Exercise**  
Does Julia convert types when doing equality comparison? In other words, does `{jl} 1 == 1.0` return `{jl} true` or `{jl} false`? [[true|false]]
:::

    pre(julia-executable)
      | 1 == 1.0

---
> id: step-49

*Solution.* Yes, Julia does convert types for equality comparison. So `{jl} 1 == 1.0` returns `{jl} true`.

[Continue](btn:next)

---
> id: step-50

::: .exercise
**Exercise**  
Write a one-line [function](gloss:function-julia) which takes 3 bools as arguments and returns `{jl} true` if and only if either

1. Both of the first two arguments are `{jl} true` , or
2. The third argument is `{jl} false`
:::

    pre(julia-executable)
      | f(a,b,c) = # add code here
      |
      | using Test
      | @test f(true, true, true)
      | @test f(false, true, false)
      | @test !f(false, true, true)

    x-quill

---
> id: step-51

*Solution.* Here's an example of a simple way to do it:

``` julia
f(a,b,c) = a && b || !c
```

Be wary of comparisons of the form `{jl} a == true` or `{jl} b == false`. These are equivalent to `{jl} a` and `{jl} !b`, [respectively](gloss:respectively), assuming `{jl} a` and `{jl} b` are both bools. The more succinct versions are preferred.

[Continue](btn:next)

---
> id: step-52

### Exercises

::: .exercise
**Exercise**  

Write some code for computing $\frac{1}{a+\frac{2}{3}}$ where $a$ is equal to the number of characters in the string `{jl} "The quick brown fox jumped over the lazy dog"`

:::

    pre(julia-executable)
      |

    x-quill

---
> id: step-53

*Solution.* We store the length of the given string in a variable `{jl} a` and evaluate the given expression as follows:

``` julia
a = length("The quick brown fox jumped over the lazy dog")
1/(a+2/3)
```

[Continue](btn:next)

---
> id: step-54

::: .exercise
**Exercise**  
The expression `{jl} 1 < 3` returns [[true]], which is an object of type [[Bool]].
:::

---
> id: step-55

::: .exercise
**Exercise**  
If we set `{jl} s = "Bruno"`, then `{jl} s[1:j] == "Bru"` when `{jl} j =` [[3]].
:::

---
> id: conditionals
## Conditionals

Consider a simple computational task performed by commonplace software, like highlighting the rows in a spreadsheet which have a value larger than 10 in the third column. We need a new programming language feature to do this, because we need to conditionally execute code (namely, the code which highlights a row) based on the [[Bool|Int64|Float64]] value returned by the comparison operator. Julia provides `{jl} if` statements for this purpose.

---
> id: step-56

### Conditionals

We can use an `{jl} if` statement to specify different blocks to be executed depending on the value of a boolean expression. For example, the following function calculates the sign of the input value `{jl} x`.

    pre(julia-executable)
      | function sgn(x)
      |     if x > 0
      |         return +1
      |     elseif x == 0
      |         return 0
      |     else
      |         return -1
      |     end
      | end
      |
      | sgn(-5)

[Continue](btn:next)

---
> id: step-57

Conditional expressions can be written using *ternary conditional* `{jl} «condition» ? «truevalue» : «falsevalue»`. For example, the following version of the `{jl} sgn` function returns the same values as the one above except when `{jl} x == 0`.

    pre(julia-executable)
      | sgn(x) = x > 0 ? +1 : -1
      |
      | sgn(-5)

[Continue](btn:next)

---
> id: step-58

### Exercises

::: .exercise
**Exercise**  
Can the `{jl} else` part of an `{jl} if` statement be omitted? [[Yes|No]] Try running the example below.
:::

    pre(julia-executable)
      | x = 0.5
      | if x < 0
      |     print("x is negative")
      | elseif x < 1
      |     print("x is between 0 and 1")
      | end

[Continue](btn:next)

---
> id: step-59

::: .exercise
**Exercise**  
Write a function called `{jl} my_abs` which computes the absolute value of its input.
:::

    pre(julia-executable)
      | function my_abs(x)
      |     # add code here
      | end
      |
      | using Test
      | @test my_abs(-3) == 3
      | @test my_abs(5.0) == 5.0
      | @test my_abs(0.0) == 0.0

    x-quill

---
> id: step-myabs-solution

*Solution.* We use a single if-else expression:

    pre(julia-executable)
      |
      | function my_abs(x)
      |     if x ≥ 0
      |         x
      |     else
      |         -x
      |     end
      | end

---
> id: step-60

::: .exercise
**Exercise**  
Write a function which returns the quadrant number (1, 2, 3, or 4) in which the point `{jl} (x,y)` is located. Recall that the quadrants are numbered counter-clockwise: the northeast quadrant is quadrant 1, the northwest quadrant is 2, and so on. For convenience, you may assume that both `{jl} x` and `{jl} y` are nonzero.

Consider nesting if-else blocks inside of an if-else block.
:::

    pre(julia-executable)
      | function quadrant(x,y)
      |     # add code here
      | end
      |
      | using Test
      | @test quadrant(1.0, 2.0) == 1
      | @test quadrant(-13.0, -2) == 3
      | @test quadrant(4, -3) == 4
      | @test quadrant(-2, 6) == 2
      |

    x-quill

---
> id: step-61

*Solution.* Here's an example solution:

    pre(julia-executable)
      |
      | function quadrant(x,y)
      |     if x > 0
      |         if y > 0
      |             1
      |         else
      |             4
      |         end
      |     else
      |         if y > 0
      |             2
      |         else
      |             3
      |         end
      |     end
      | end

---

> id: functions
## Functions

[Functions](gloss:function-julia) can be used to organize code and achieve *separation of concerns:* once a function is written, it may be relied upon to perform its designated task without the programmer having to think about *how* it accomplishes that task. This conceptual aid is crucial for writing maintainable code to solve large, complex problems.

[Continue](btn:next)

---
> id: step-62

A good rule of thumb is that a function should be sufficiently general to be re-usable without duplicating internal logic, but specific enough that you can actually implement it.

::: .exercise
**Exercise**  
How could the design of the following code be improved?

``` julia
function remove_one_leading_space(S)
    if S[1] == " "
        S[1:end]
    else
        S
    end
end

function remove_two_leading_spaces(S)
    if S[1:2] == "  "
        S[2:]
    else
        S
    end
end

function remove_three_leading_spaces(S)
    if S[1:3] == "  "
        S[3:end]
    else
        S
    end
end
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

The objects supplied to a function when it's called are referred to as the function's **arguments**. The variables which represent the arguments in the function definition are called **parameters**. The block of code that runs when the function is called is the **body** of the function.

[Continue](btn:next)

---
> id: step-65

::: .exercise
**Exercise**  
In the following block of code, `{jl} s` is [[a parameter|an argument]], while `{jl} "hello"` is [[an argument | a parameter]].

``` julia
function duplicate(s)
    s * s
end

duplicate("hello")
```
:::

---
> id: step-66

We can give parameters **default values** and supply arguments for those parameters optionally when calling the function:

    pre(julia-executable)
      |
      | function line(m, x; b=0)
      |     m * x + b
      | end
      |
      | line(2,3) # returns 6
      | line(5,4,b=2) # returns 22

[Continue](btn:next)

---
> id: step-67

The arguments 1, 2, and 3 in this example are called **positional** arguments, and `{jl} 5` is a **keyword argument**.

[Continue](btn:next)

---
> id: step-68

If a string literal appears immediately before a function's definition, that string will be interpreted as documentation for the function. This **docstring** helps you and other users of your functions quickly ascertain how they are meant to be used. A function's docstring can accessed in a Julia REPL or notebook by prepending the funtion name with a question mark. For example, `{jl} ?print` pulls up the docstring for the built-in `{jl} print` function.

[Continue](btn:next)

---
> id: step-69

### Anonymous functions

A function may be defined without assigning a name to it. Such a function is said to be *anonymous*. Julia's anonymous function [syntax](gloss:syntax) looks like the corresponding math syntax: the function $(x,y)\mapsto x^2 + y^2$ can be written as `{jl} (x,y) -> x^2 + y^2` in Julia. A common situation where anonymous functions can be useful is when supplying one function to another as an argument. For example:

    pre(julia-executable)
      | apply_three_times(f, x) = f(f(f(x)))
      |
      | apply_three_times(x->x^2, 2)

[Continue](btn:next)

---
> id: step-70      

::: .exercise
**Exercise**  
Write a function that takes two arguments `{jl} a` and `{jl} b` and a function `{jl} f` and returns `{jl} a` if `{jl} f(a) < f(b)` and `{jl} b` otherwise. Then use anonymous function syntax to call your function with two numbers and the negation function $x\mapsto -x$.
:::

    pre(julia-executable)
      |

    x-quill

---
> id: step-71

*Solution.* Here's an example solution:

    pre(julia-executable)
      | function which_bigger(a, b, f)
      |     if f(a) < f(b)
      |         a
      |     else
      |         b
      |     end
      | end
      |
      | which_bigger(4, 6, x->-x)

[Continue](btn:next)

---
> id: step-72

### Scope

The **scope** of a variable is the region in the program where it is accessible. For example, if you define `{jl} x` to be `{jl} 47` on line 413 of your file and get an error because you tried to use `{jl} x` on line 35, the problem is that the variable wasn't *in scope* yet.

A variable defined in the main body of a file has **global scope**, meaning that it is visible throughout the program from its point of definition.

[Continue](btn:next)

---
> id: step-local-scope

A variable defined in the body of a function is in that function's **local scope**. For example:

    pre(julia-executable)
      | function f(x)
      |     y = 2
      |     x + y
      | end
      |
      | y

[Continue](btn:next)

---
> id: step-scope-exercise

::: .exercise
**Exercise**  
Try nesting one function definition inside another. Are variables in the enclosing function body available in the inner function. What about vice versa?
:::

    pre(julia-executable)
      | function f()
      |     function g()
      |         j = 2
      |         i
      |     end
      |     print(j)
      |     i = 1
      |     g()
      | end
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

The standard way to do this in Julia (which you have already seen several times in this course) is write `{jl} @test` statements. An `{jl} @test` statement throws an error if the following expression evaluates to `{jl} false`. In a full-fledged Julia project, these tests typically go in a directory called `{jl} test` so that tests can be run for the whole project.

    pre(julia-executable)
      | """
      | Concatenate strings s and t, ensuring a space
      | between them if s ends with a non-space character
      | and t begins with a non-space character
      | """
      | function space_concat(s,t)
      |     if s[end] == ' ' || t[1] == ' '
      |         s * t
      |     else
      |         return s * " " * t
      |     end
      | end
      |
      | using Test
      | @test space_concat("foo", "bar") == "foo bar"
      | @test space_concat("foo ", "bar") == "foo bar"
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

*Solution.* We check the empty string conditions prior to checking the last/first characters. This solves the problem because `{jl} ||` is **short-circuiting**: if the first bool is `{jl} true` in an `{jl} ||` operation, the second is never evaluated.

    pre(julia-executable)
      | function space_concat(s,t)
      |     if s == "" || t == "" || s[end] == ' ' || t[1] == ' '
      |         s * t
      |     else
      |         s * " " * t
      |     end
      | end
      |
      | using Test
      | @test space_concat("foo", "bar") == "foo bar"
      | @test space_concat("foo ", "bar") == "foo bar"
      | @test space_concat("foo", "") == "foo"
      | @test space_concat("", "bar") == "bar"

[Continue](btn:next)

---
> id: step-function-exercises

### Exercises

::: .exercise
**Exercise**  
Write a function which accepts two strings as input and returns the concatenation of those two strings in alphabetical order.

_Hint_: Make a guess about which operator can be used to compare strings alphabetically.
:::

    pre(julia-executable)
      | function alphabetical_concat(s,t)
      |     # add code here
      | end
      |
      | using Test
      | @test alphabetical_concat("alphabet", "soup") == "alphabetsoup"
      | @test alphabetical_concat("socks", "red") == "redsocks"
      |

    x-quill

---
> id: step-76

*Solution.*

    pre(julia-executable)
      | function alphabetical_concat(s,t)
      |     if s < t
      |         s * t
      |     else
      |         t * s
      |     end
      | end

---

> id: packages
## Packages

A [**package**](gloss:package) is a collection of Julia files that provide functionality beyond the core functionality available in every Julia program. Packages achieve separation of concerns at the community level: someone else solves a problem of general interest, and then you can leverage their work and focus on applying it to the problem at hand.

Julia has a built-in package management system. Package management is important because dependencies and versions can quickly become a mess if you are trying to copy code files from other people and put them alongside the files in your project. The package manager is alert to these dependencies and does the computational work to resolve them. It also stores the package code in a central location on your computer so that it is visible to Julia regardless of where your scripts are located.

To add a Julia package, do `{jl} using Pkg; Pkg.add("PackageName")` from a Julia session. Then `{jl} using PackageName` to load the package. Important packages include
* `{jl} Plots` There are many plotting packages in Julia, but this is the closest the ecosystem has to a standard.
* `{jl} DataFrames` The standard package for storing tabular data.
* `{jl} CSV` Reading data stored in comma-separated value files.
* `{jl} PyCall` Interfacing with Python.

[Continue](btn:next)

---
> id: step-module

Packages might use lots of variable names internally, and some of them might conflict with names you're using. For this reason, package code is wrapped in a **module**, which is a separate variable workspace.

You can load a module by running, for example, `{jl} import Plots` or `{jl} using Plots`. With the `{jl} import` keyword, your name space and that of the module are kept separate, and you have to access variables within the module using dot syntax: `{jl} Plots.histogram`. In the latter case, any names *exported* by the module become available in the importing namespace (without the dot syntax). You can also choose specific functions to import: `{jl} using Plots: histogram`

### Exercises

::: .exercise
**Exercise**  
 To import just the `{jl} DataFrame` function from `{jl} DataFrames`, we would use what statement?
:::

    x-quill

---
> id: step-78

*Solution.* `{jl} using DataFrames: DataFrame`

[Continue](btn:next)

---
> id: step-79

::: .exercise
**Exercise**  
 If we want to be able to solve equations using `{jl} SymPy.solve`, what import statement should we run first?
:::

    x-quill

---
> id: step-80

*Solution* `{jl} import SymPy`

[Continue](btn:next)

---

> id: custom-types
## Custom types

Suppose you want to write a program which keeps track of the albums you own. Each album is associated with several data, like the name of the album, the year it came out, the number of tracks, etc. You could store all these data by assigning them to different variables, but that becomes untidy very quickly. For example, you will frequently want to pass an album to a function, and you don't want that function to require a long list of parameters just because the album has a lot of data associated with it.

[Continue](btn:next)

---
> id: step-85

What you want is to be able to treat each album as its own Julia object, with all its associated data stored inside. In other words, you want an `{jl} Album` type. You can do that with the `{jl} struct` keyword.

    pre(julia-executable)
      | struct Album
      |     name
      |     artist
      |     year
      |     duration
      | end
      |
      | A = Album("Abbey Road", "The Beatles", 1969, "47:23")

In the last line, we have defined a new object of type `{jl} Album` and saved it to the variable `{jl} A`. We call `{jl} name`, `{jl} artist`, `{jl} year`, and `{jl} duration` **fields** of the `{jl} Album` type. The fields of an object can be accessed by name using dot syntax:

    pre(julia-executable)
      | A.duration

[Continue](btn:next)

---
> id: step-86

We can define functions to operate on our new data type. For example, we might want to be able to calculate how old an album was as of a given year. We can specify types for a function's arguments using double colon syntax:

    pre(julia-executable)
      | function num_years_ago(A::Album, year::Integer)
      |     year - A.year
      | end

Note: `{jl} Integer` is an **abstract type** which encompasses `{jl} Int64`, `{jl} Int32` (which uses 32 bits instead of 64), and any other type which represents a mathematical integer.

[Continue](btn:next)

---
> id: step-multiple-dispatch

One reason it's helpful to be able to specify type information when defining a function is that we can specify different behavior for different types:

    pre(julia-executable)
      | function num_years_ago(earlier_year::Integer, later_year::Integer)
      |     later_year - earlier_year
      | end
      |
      | num_years_ago(A, 2019) # returns 50
      | num_years_ago(1986, 2019) # returns 33

We say that `{jl} num_years_ago` now has two **methods**: one which accepts an `{jl} Album` as its first argument and an `{jl} Integer` as its second argument, and one which accepts `{jl} Integer`s for both arguments. Julia is responsible for correctly dispatching each function call to the correct method. This feature of Julia is called **multiple dispatch**.

[Continue](btn:next)

---
> id: step-type-exercise

::: .exercise
**Exercise**  
Write a type `{jl} Line` for representing non-vertical lines in the plane. Write a two-argument method `{jl} intersect` which finds the intersection point of two lines (you may return the intersection point as a tuple of floats, and for simplicity, you can assume the lines intersect).
:::

    pre(julia-executable)
      |

    x-quill

---
> id: step-line-type-solution    

*Solution.* Since we only need to store non-vertical lines, we can represent every line via its slope and intercept. We can specify that these data types should be `{jl} Float64`s if we want:

    pre(julia-executable)
      | struct Line
      |     slope::Float64
      |     intercept::Float64
      | end

 The intersection point of two lines is given by

    pre(julia-executable)
      | function intersect(L::Line,M::Line)
      |     x = -(L.intercept-M.intercept)/(L.slope-M.slope)
      |     y = L.intercept + x*L.slope
      |     (x,y)
      | end

---

> id: lists-and-tuples
## Lists and Tuples

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

We definitely don't want to think of 100 variable names for the 100 values in the table, and we don't want to write a line of code for each row. What we need is a way to store all of the rows (or columns) in an object designed to contain many objects. Julia provides several such **compound data structures**, and in this section we will learn about two: **arrays** and **tuples**.

[Continue](btn:next)

---
> id: step-91

### Arrays

A `{jl} Array` in Julia is a compound data type for storing a finite ordered sequence of Julia objects. Arrays are **mutable**, meaning that they can be changed.

The simplest way to produce an array in a Julia program is with a **array literal**, which requires listing the objects separated by commas and delimited by square brackets:

    pre(julia-executable)
      | myArray = [1, "flower", true, 7]
      | x = 5
      | myOtherArray = [1, x, x, 2]

::: .exercise
**Exercise**  
What happens to `{jl} myOtherArray` in the example above if a different value is assigned to `{jl} x` *after* `{jl} myOtherArray` is created? [[the list doesn't change|the list changes]]
:::

---
> id: step-92

*Solution.* The list doesn't change. The object associated with the variable `{jl} x` is retrieved when the list is created, and after that point the list is no longer connected to the name `{jl} x`.

[Continue](btn:next)

---
> id: step-93

Like strings, arrays can be **indexed** to obtain their elements. The keyword `end` in an array index refers to the last index.

    pre(julia-executable)
      | myArray = [1, "flower", true, 7]
      | myArray[1] # returns 1
      | myArray[4] # returns 7
      | myArray[end-1] # returns true

[Continue](btn:next)

---
> id: step-95

Subarrays can be extracted by **slicing**. Indexing a list with the range object `{py} i:j` returns the portion of the list from the `i`th element to the `j`th element.

    pre(julia-executable)
      | myList = [1, "flower", true, 7]
      | myList[1:3]

::: .exercise
**Exercise**  
If `{jl} i` = [[2]] and `{jl} j` = [[3]], then `{jl} myList[i:j]` is equal to `{jl} ["flower", true]`.
:::

[Continue](btn:next)

---
> id: step-97

Range objects can include a *step* value between the starting and ending values. For example, `{jl} A[1::2::9]` returns the elements of `{jl} A` at positions 1, 3, 5, 7, and 9.

[Continue](btn:next)

---
> id: step-98

::: .exercise
**Exercise**  
What step value can be used to *reverse* a list? [[-1]] (Hint: you can reason it out!)
:::

    pre(julia-executable)
      | [2,4,6,8][] # insert a range object to return [8,6,4,2]

[Continue](btn:next)

---
> id: step-99

*Solution.* Going in reverse order through a list corresponds to stepping by $-1$ each time. Using the range object `{jl} end : -1 : 1` to index an array reverses the array.

[Continue](btn:next)

---
> id: step-100

Arrays can be concatenated with the `{jl} vcat` function:

    pre(julia-executable)
      | vcat([1,2,3],[4,5,6,7])

[Continue](btn:next)

---
> id: step-pushing      

Elements can be appended to an array with `{jl} push!`:

    pre(julia-executable)
      | A = [1,2,5]
      | push!(A,-4)
      | A

[Continue](btn:next)

---
> id: step-broadcasting      

To perform operations entry-by-entry on two arrays, prefix the operation with a dot:

    pre(julia-executable)
      | [1,2,3] .+ [4,5,6]

Same idea for functions. To apply the function `{jl} sin` to each entry in an array of 100 equally spaced values from 0 to 2π, we would do:

    pre(julia-executable)
      | sin.(range(0, stop=2π, length=100))

This is called **broadcasting**.

(Note: the `{jl} range` function is another way to produce a `{jl} range` object; it allows us to specify the number of entries rather than the step size.)

[Continue](btn:next)

---
> id: step-rotate-exercise

::: .exercise
**Exercise**  
Write a [function](gloss:function-julia) which takes as arguments an array `{jl} A` and a positive integer `{jl} n` and rotates `{jl} A` by `{jl} n` positions. In other words, every element of the list should move forward `{jl} n` positions, wrapping around to the beginning if it goes off the end of the list.
:::

    pre(julia-executable)
      | "Cyclically shift the A by n positions"
      | function rotate(A, n)
      |     # add code here
      | end
      |
      | using Test
      | @test rotate([1,2,3],1) == [3,1,2]
      | @test rotate([1,2,3],2) == [2,3,1]      
      | @test rotate([1,2,3,4,5],8) == [3,4,5,1,2]

    x-quill

---
> id: step-101

*Solution.* We figure out where the list needs to be split and concatenate the two resulting sublists in the opposite order:

    pre(julia-executable)
      | function rotate(L, n)
      |     k = length(L) - n % length(L) + 1
      |     vcat(L[k:end], L[1:k-1])
      | end

[Continue](btn:next)

---
> id: step-102

Arrays may be modified by combining indexing with assignment:

    pre(julia-executable)
      | A = [4,-3,2]
      | A[1] = 1
      | A[2:3] = [6,3]
      | A

::: .exercise
**Exercise**  
Write a line of code which sets every even-indexed entry of an array `{jl} A` to zero. Note that you can get a list of `{jl} n` zeros `fill(0,n)`
:::

    pre(julia-executable)
      | A = [1,2,3,4,5,6,7,8,9,10]
      | A

    x-quill

---
> id: step-103

*Solution.* `{jl} A[2::2::end] = fill(0,length(A)÷2)`

[Continue](btn:next)

---
> id: step-106

### List comprehensions

Two of the most common ways of generating one list from another are (1) applying a given function to every element of the original list, and (2) retaining only those elements of the original list which satisfy a given criterion. These two operations are called **map** and **filter**, respectively.

``` julia
square(x) = x * x

collect(map(square, 0:5)) # returns [0, 1, 4, 9, 16]

collect(filter(iseven, 0:5)) # returns [0,2,4]
```

The extra calls to `{jl} collect` in the examples above are required to see the result because `{jl} map` and `{jl} filter` are *lazy*: they return objects which *promise* to perform the specified calculation when it's needed. The function `{py} collect` forces Julia to turn such objects into actual arrays.

Julia provides a convenient [syntax](gloss:syntax) for both mapping *and* filtering: the **array comprehension**. It's essentially a programming version of set builder notation. For example, to square the even numbers from 0 to 4, we can use the following expression:

    pre(julia-executable)
      | [x^2 for x in 0:4 if iseven(x)]

[Continue](btn:next)

---
> id: step-107

Let's break this example down step-by-step: the first value of `{jl} 0:4` is assigned to the variable `{jl} x`, and then the `{jl} if` expression is evaluated. If it's true, the expression `{jl} x^2` is evaluated and stored as the first value of the list that is to be returned. Then the second value of `{jl} 0:4` is assigned to `{jl} x`, the condition is evaluated, and so on.

::: .exercise
**Exercise**  
Write an array comprehension which returns a list whose kth entry is the last digit of the kth three-digit prime number. Note: the `{jl} string` function converts an integer into a string.
:::

    pre(julia-executable)
      | using Primes: isprime

    x-quill

---
> id: step-108

*Solution.* Here's an example solution:

    pre(julia-executable)
      | using Primes: isprime
      | [string(k)[end] for k in 100:999 if isprime(k)]

[Continue](btn:next)

---
> id: step-109

::: .exercise
**Exercise**  
Write an array comprehension which takes a array of arrays and returns only those arrays whose second element has a least five elements.
:::

    pre(julia-executable)
      | records = [[3, "flower", -1], [2, "rise", 3], [0, "basket", 0]]

    x-quill

---
> id: step-110

*Solution.* Here's one solution:

    pre(julia-executable)      
      | [record for record in records if length(record[2]) ≥ 5]

[Continue](btn:next)

---
> id: step-111

### Tuples

Tuples are very similar to lists, except that tuples are [immutable](gloss:immutable).

    pre(julia-executable)
      |
      | row = (22,2.0,"tomato")
      | row[3] # returns "tomato"
      | row[3] = "squash" # throws MethodError

Programmers tend to use tuples instead of lists in situations where **position** in the tuple carries more meaning than **order**. For example, perhaps the tuple assigned to `{jl} row` above describes a row of plants in a garden, with the three numbers indicating the number of plants, the number of weeks since they were planted, and the type of plant. We could have chosen some other order for those three values, as long as we're consistent about which position corresponds to which value. By contrast, the 22 heights of the plants on that row would typically be stored in an *array*, since the list order corresponds to something meaningful in that case (namely, the order of the plants in the row).

[Continue](btn:next)

---
> id: step-112

Functions often return multiple values by returning a tuple containing those values. You can access individual elements of a tuple without having to index the tuple using *tuple unpacking*:

    pre(julia-executable)
      |
      | mycolor = (1.0,1.0,0.44)
      | r, g, b = mycolor
      | b

The convention in Julia for values you don't want to store is to assign them to the variable whose name is just an underscore. That way you don't have to think of names for those variables, and you signal to anyone reading your code that you are not using those values.

[Continue](btn:next)

---
> id: step-113

Tuple unpacking can be combined with array comprehension syntax. If we want to extract the first element from each tuple in a list of triples, for example, we can do that as follows:

    pre(julia-executable)
      | A = [(1,2,3),(4,5,6),(7,8,9)]
      | [a for (a,_,_) in A]

The value 1 is assigned to `{jl} a`, the value 2 is assigned to the underscore variable, and then the value 3 is also assigned to the underscore variable (this overwrite is no problem since we aren't using that value anyway). Then `{jl} a` is evaluated as the first element in the new list, and the process repeats for the remaining triples in the list.

::: .exercise
**Exercise**  
Write a list comprehension which adds the first two elements of each tuple in `{jl} A`. (So for the example above, the resulting list should be `{jl} [3, 9, 15]`.)
:::

    pre(julia-executable)
      |

    x-quill

---
> id: step-114

*Solution.* Same idea:

    pre(julia-executable)
      | A = [(1,2,3),(4,5,6),(7,8,9)]
      | [a+b for (a,b,_) in A]

[Continue](btn:next)

---
> id: step-115

::: .exercise
**Exercise**  
The fractional part of a positive real number $x$ is the part after the decimal point: it's defined to be the positive difference between $x$ and the greatest integer which is less than or equal to $x$. You can find the fractional part of `{jl} x` in Julia with the expression `{jl} mod(x,1)`

Find the fractional parts of the first 100 positive integer multiples of $\pi$. Use the function `{jl} extrema` on the resulting array to find its least and greatest values. Find the ratio of the greatest value to the least.
:::

    pre(julia-executable)
      |

    x-quill

---
> id: step-116

*Solution.* We use tuple unpacking to extract the min and max values from the tuple returned by the `{jl} extrema` function.

    pre(julia-executable)
      | m,M = extrema([mod(pi*k,1) for k in 1:100])
      | M/m

The result is about 56.08.

[Continue](btn:next)

---
> id: step-117

A common pattern for generating new arrays combines list comprehension, tuple unpacking, and the function `{jl} zip`. The `{jl} zip` function takes two arrays and returns a single array of pairs of corresponding entries (or three arrays, in which case it returns an array of triples, etc.). For example,

``` julia
zip(["a", "b", "c"], [1, 2, 3])
```

returns an object which is equivalent to `{jl} [("a", 1), ("b", 2), ("c", 3)]`.

::: .exercise
**Exercise**  
Suppose that $H$ is a list which stores the heights of 100 cylinders and $R$ is a list which stores their radii (in the same order). Write an [array comprehension](gloss:listcomp) which returns a list containing the volumes of these cylinders.
:::

    pre(julia-executable)
      | H = [1, 2, 3]
      | R = [0.8, 1.0, 1.2]

    x-quill

---
> id: step-118

*Solution.* We zip `{jl} H` and `{jl} R` and use the volume formula $\pi r^2 h$:

    pre(julia-executable)
      | H = [1, 2, 3]
      | R = [0.8, 1.0, 1.2]
      | [pi*r*r*h for (h,r) in zip(H,R)]

[Continue](btn:next)

---
> id: step-120

::: .exercise
**Exercise**  
Write a function which takes a matrix `{jl} M` and an index `{jl} i` and returns the $i$th column of `{jl} M`. Assume that `{jl} M` is represented as an array of arrays, where each array represents a row.
:::

    pre(julia-executable)
      | function select_col(M, i)
      |     # add code
      | end
      |
      | using Test
      | @test select_col([[1,2],[3,4]],1) == [1,3]
      | @test select_col([[7,8],[8,-2],[3,4]],2) == [8,-2,4]
      |

    x-quill

---
> id: step-121

*Solution.* We use an array comprehension to select the appropriate entry from each row.

    pre(julia-executable)
      | function select_col(M, i)
      |     [row[i] for row in M]
      | end

[Continue](btn:next)

---
> id: step-122      

::: .exercise
**Exercise**  
Write a function which reverses the words in a sentence. For simplicity, you may assume that the sentence does not contain punctuation.

_Hint_: The functions `{jl} join` and `{jl} split` might be helpful.
:::

    pre(julia-executable)
      | function reverse_words(sentence)
      |     # add code
      | end
      |
      | using Test
      | @test reverse_words("The quick brown fox") == "fox brown quick The"
      | @test reverse_words("") == ""
      |

    x-quill

---
> id: step-123

*Solution.* We use the string method `{jl} split`, which splits a string on a given character. This gives us a list of the words in the sentence, which we can reverse by indexing with a negative step and rejoin with the `{jl} join` method.

    pre(julia-executable)
      | function reverse_words(sentence)
      |     join(split(sentence," ")[end:-1:1]," ")
      | end

---
> id: sets-and-dictionaries
## Sets and Dictionaries

### Sets

**Sets** are unordered collections of unique values. The main advantage of having a special type for sets is that the design of the data structure can be optimized for membership checking. Figuring out whether a given value is in an array requires going through each element in the array, so the amount of time it takes increases with the length of the array. By contrast, checking membership in a set can be done very quickly even if the set is large.

    pre(julia-executable)
      | A = [1,2,3]
      | S = Set(A)
      | 2 in S # evaluates to true
      | pop!(S, 2) # removes 2
      | push!(S, 11) # puts 11 in the set
      | 2 in S # evaluates to false now

::: .exercise
**Exercise**  
Make a set which contains the first 10,000 prime numbers.

_Hint_: It suffices to look for primes among the first 110,000 integers. Compare how long it takes to check whether a given number is in that set to the time it takes to compute whether the number is prime using `{jl} Primes.isprime`.

:::

    pre(julia-executable)
      | using Primes: isprime
      | primes = # add code here
      | primes_set = Set(primes)
      | @time 98779 in primes
      | @time 98779 in primes_set
      | @time isprime(98779)

    x-quill

---
> id: step-124

*Solution.* To get exactly 10,000 primes, we index the list obtained by filtering out the composite numbers:

    pre(julia-executable)
      | using Primes: isprime
      | primes = [k for k in 2:110_000 if isprime(k)][1:10000]
      | primes_set = Set(primes)
      | @time 98779 in primes
      | @time 98779 in primes_set
      | @time isprime(98779)

Put the three methods in order from fastest to slowest:

    x-sortable
      .item.md(data-index="2") List membership checking
      .item.md(data-index="0") Set membership checking
      .item.md(data-index="1") Computing from scratch

---
> id: step-125

### Dictionaries

The internal mechanism that sets use to check membership extremely fast is also useful when the information you want to retrieve is more complex than just `{jl} true` or `{jl} false`.

For example, suppose you want to store a collection of color names together with the [RGB values](https://en.wikipedia.org/wiki/RGB_color_model) for each one. We'll store the names as [[strings|floats|integers]] and the RGB triples as [[tuples|strings|floats]].

---
> id: step-126

It's possible to do this by putting the names in an array and the values in a list of the same length:

``` julia
names = ["fuchsia", "firebrick", "goldenrod"]
rgbs = [(256, 0, 256), (178, 34, 34), (218, 165, 32)]
```

However, this solution gets very tedious quickly. For example, modifying this structure requires [[modifying both arrays|modifying at least one of the arrays]].

---
> id: step-127

The Julia data structure tailored to the problem of encoding a map from one finite set to another is called a **dictionary**. Dictionaries are created by supplying pairs to the `{jl} Dict` function. For example, the dictionary encoding the map described above looks like this:

    pre(julia-executable)
      | rgb = Dict(
      |   "fuchsia" => (256, 0, 256),
      |   "firebrick" => (178, 34, 34),
      |   "goldenrod" => (218, 165, 32)
      | )

The domain elements `{jl} "fuchsia"`, `{jl} "firebrick"` and `{jl} "goldenrod"` are called the **keys** of the dictionary, and the codomain elements `{jl} (256,0,256)`, `{jl} (178,34,34)`, and `{jl} (218,165,32)` are called the **values**.

We can also form new dictionaries from lists of pairs using the `{jl} dict` function:

``` julia
Dict([
  ("fuchsia", (256, 0, 256)),
  ("firebrick", (178, 34, 34)),
  ("goldenrod", (218, 165, 32))
])
```

[Continue](btn:next)

---
> id: step-128

We can perform a dictionary lookup using indexing [syntax](gloss:syntax): `{jl} rgb["fuchsia"]` returns `{jl} (256,0,256)`. We can also change the value associated with a given key or introduce a new key-value pair using indexing and assignment:

    pre(julia-executable)
      | rgb = Dict(
      |   "fuchsia" => (256, 0, 256),
      |   "firebrick" => (178, 34, 34),
      |   "goldenrod" => (218, 165, 32)
      | )
      | rgb["crimson"] = (220, 20, 60)
      | rgb

`{jl} keys` and `{jl} values` functions may be used to obtain the keys and values.

    pre(julia-executable)
      | rgb = Dict(
      |   "fuchsia" => (256, 0, 256),
      |   "firebrick" => (178, 34, 34),
      |   "goldenrod" => (218, 165, 32)
      | )
      | collect(keys(rgb))

[Continue](btn:next)

---
> id: step-129

::: .exercise
**Exercise**  
Consider a dictionary which encodes flight arrival times:

``` julia
import Dates
arrival_times = Dict(
  "JetBlue 924" => Dates.Time(7,9),
  "United 1282" => Dates.Time(7,42),
  "Southwest 196" => Dates.Time(7,3)
)
```

You can most easily use this dictionary to [[look up the arrival time of a flight|look up which flights arrive at a given time]].

Suppose you want to reverse the lookup direction: for any given time, you want to see which flight arrives at that time. One problem is that [[multiple flights may arrive at the same time|the airlines aren't the same]].

Assuming that the codomain values are distinct, however, you can form a new dictionary that allows you to look up keys for values by using an array comprehension that iterates over the key-value pairs of the dictionary (obtainable using the `{jl} pairs` function).

Implement this idea in the block below. Check that your dictionary works by indexing it with `{jl} Dates.time(7,9)`.

:::

    pre(julia-executable)
      | import Dates
      | arrival_times = Dict(
      |   "JetBlue 924" => Dates.Time(7,9),
      |   "United 1282" => Dates.Time(7,42),
      |   "Southwest 196" => Dates.Time(7,3)
      | )    


    x-quill

_{button.next-step} Submit_

---
> id: step-130

*Solution.* We use the `{jl} Dict` function to convert the list of pairs back into a dictionary: `{jl} Dict([(b,a) for (a,b) in pairs(arrival_times)])`.

[Continue](btn:next)

---
> id: step-131

### Exercises

::: .exercise
**Exercise**  
You can construct dictionaries using a comprehension in Julia. For example, here's a dictionary that maps each one-digit positive integer to its square:

``` julia
square_dict = Dict(k => k*k for k in 1:9)
```

Use a dictionary comprehension to make a dictionary which maps each of the first 100 powers of 2 to its units digit. Note: you'll need to use `{jl} big(2)` instead of `{jl} 2` to calculate its 100th power, because $2^{100}$ is larger than the largest 64-bit integer.
:::

    pre(julia-executable)
      |

    x-quill

---
> id: step-132

*Solution.* We convert to a string, get the last character, and convert back to an integer:

    pre(julia-executable)
      |   Dict([big(2)^k => parse(Int64, string(big(2)^k)[end]) for k in 1:100])

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

> id: iteration
## Iteration

We have already seen one way of doing something to each element in a collection: the [*array comprehension*](gloss:arraycomp).

    pre(julia-executable)
      | smallest_factor = Dict(2 => 2, 3 => 3, 4 => 2, 5 => 5,
      |                        6 => 2, 7 => 7, 8 => 2, 9 => 3)
      | [v for (k,v) in pairs(smallest_factor)]

In this array comprehension, we **iterate** over the pairs of the [dictionary](gloss:dictionary-julia) to produce a new list. Although list comprehensions are very useful, they are not flexible enough to cover all our iteration needs. A much more flexible tool is the **for loop**.

[Continue](btn:next)

---
> id: step-135

### *For* statements

The code above could also be rewritten as follows:

    pre(julia-executable)
      | smallest_factor = Dict(2 => 2, 3 => 3, 4 => 2, 5 => 5,
      |                        6 => 2, 7 => 7, 8 => 2, 9 => 3)
      | A = []
      | for (k,v) in pairs(smallest_factor)
      |     push!(A,v)
      | end
      | A

The statement `{jl} for item in collection:` works as follows: the first element of `{jl} collection` is assigned to `{jl} item`, and the block indented below the `{jl} for` statement is executed. Then, the second element of `{jl} collection` is assigned to `{jl} item`, the indented block is executed again, etc., until the end of the collection is reached.

[Continue](btn:next)

---
> id: step-136

We can nest `{jl} for` statements. For example, suppose we have a matrix represented as an array of arrays, and we want to sum all of the matrix entries. We can do that by iterating over the rows and then iterating over each row:

    pre(julia-executable)
      | """
      | Return the sum of the entries of M
      | """
      | function sum_matrix_entries(M)
      |     s = 0
      |     for row in M
      |         for entry in row
      |             s = s + entry
      |         end
      |     end
      |     s
      | end
      |
      | using Test
      | M = [[1,2,3],[4,5,6],[7,8,9]]
      | @test sum_matrix_entries(M) == 45


[Continue](btn:next)

---
> id: step-137

::: .exercise
**Exercise**  
Suppose you have imported a function `{jl} file_bug_report` with two parameters: `{jl} id` and `{jl} description`. Suppose also that you have a `{jl} Dict` called `{jl} bugs` whose keys are ids and whose values are strings representing descriptions. Write a loop which performs the action of filing each bug report in the dictionary.  
:::

    pre(julia-executable)
      | "A dummy function which represents filing a bug report"
      | function file_bug_report(id, description)
      |     println("bug $id ($description) successfully filed")
      | end
      |
      |
      | bugs = Dict(
      |   "07cc242a" =>
      |      "`trackShipment` hangs if `trackingNumber` is missing",
      |   "100b359a" =>
      |      "customers not receiving text alerts"
      | )

    x-quill

---
> id: step-137a

*Solution.* We loop over the pairs of the dictionary:

    pre(julia-executable)
      | for (id, desc) in pairs(bugs)
      |     file_bug_report(id, desc)
      | end

[Continue](btn:next)

---
> id: step-138

::: .exercise
**Exercise**  
Write a [function](gloss:function-julia) called `{jl} sumorial` which takes a positive integer `{jl} n` as an argument and sums of the integers 1 to `{jl} n` using a loop.
:::

    pre(julia-executable)
      | "Return the sumorial of a positive integer n"
      | function sumorial(n)
      |     # add code here
      | end
      |
      | using Test
      | @test sumorial(3) == 6
      | @test sumorial(8) == 36
      | @test sumorial(200) == 20100

    x-quill

---
> id: step-139

*Solution.* We loop through `{jl} 1:n` and add as we go.

    pre(julia-executable)
      | function sumorial(n)
      |     total = 0
      |     for k in 1:n
      |         total = total + k
      |     end
      |     total
      | end
      |
      | using Test
      | @test sumorial(3) == 6
      | @test sumorial(8) == 36
      | @test sumorial(200) == 20100     

[Continue](btn:next)

---
> id: step-140

### *While* statements

The **Collatz conjecture** is one of the easiest-to-state unsolved problems in mathematics. Starting from any given positive integer, we halve it if it's even and triple it and add one if it's odd. The Collatz conjecture states that repeatedly applying this rule always gets us to the number 1 eventually. For example, the *Collatz sequence* starting from 17 is

    center: p 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1

If we want to write a Julia function which returns the Collatz sequence for any given starting number, we face a problem: we don't know from the start how many steps it will take to reach 1, so it isn't clear how we could use a *for loop*. What we want to do is execute a block of code until a given condition is met. Julia provides the `{jl} while` loop for this purpose.

    pre(julia-executable)
      | "Return the Collatz sequence starting from n"
      | function collatz_sequence(n)
      |     sequence = [n]
      |     while n > 1
      |         if n % 2 == 0
      |             n = n ÷ 2
      |         else
      |             n = 3n + 1
      |         end
      |         push!(sequence,n)
      |     end
      |     sequence
      | end
      |
      | using Test
      | @test collatz_sequence(17) == [17, 52, 26, 13,
      |                                 40, 20, 10, 5,
      |                                 16, 8, 4, 2, 1]


The expression which appears immediately following the `{jl} while` keyword is called the **condition**, and the block indented below the `{jl} while` statement is the **body** of the loop. The rules of the language stipulate the following execution sequence for a `{jl} while` statement: the condition is evaluated, and if it's true, then the body is executed, then condition is evaluated again, and so on. When the condition returns `{jl} false`, the loop is exited. An exit can also be forced from within the body of the while loop with the keyword `{jl} break`.

::: .exercise
**Exercise**  
Newton's algorithm for finding the square root of a number `{jl} n` starts from 1 and repeatedly applies the function $x\mapsto \frac{1}{2}(x + n/x)$. For example, applying this algorithm to approximate $\sqrt{2}$, we get

    center: p 1, 3/2, 17/12, 577/408, ...

This algorithm converges very fast: 577/408 approximates $\sqrt{2}$ with a relative error of about 0.00015%.

Write a function `{jl} newtonsqrt` which takes as an argument the value `{jl} n` to square root and applies Newton's algorithm until the relative difference between consecutive iterates drops below $10^{-8}$.

Note that $10^{-8}$ can be represented in Julia using scientific notation `{jl} 1e-8`.
:::

    pre(julia-executable)
      | function newtonsqrt(n)
      |     """Use Newton's algorithm to approximate √n"""
      |     # add code here
      | end
      |
      | using Test
      | @test abs(newtonsqrt(2) - 1.4142135623730951) < 1e-6
      | @test abs(newtonsqrt(9) - 3) < 1e-6
      |

    x-quill

---
> id: step-141

*Solution.* We keep up with two separate variables, which we call `{jl} x` and `{jl} old_x`, to compare the most recent two iterates:

    pre(julia-executable)
      | """Use Newton's algorithm to approximate √n"""
      | function newtonsqrt(n)
      |     x = 1
      |     while true
      |         old_x = x
      |         x = 1/2 * (x + n/x)
      |         if abs(x - old_x)/old_x < 1e-8
      |             return x
      |         end
      |     end
      | end

[Continue](btn:next)

---
> id: step-142

### Exercises

::: .exercise
**Exercise**  
Write a function which prints an $n \times n$ checkerboard pattern of `{jl} x`'s and `{jl} o`'s.

_Note_: `{jl} \n` in a string literal represents the "newline" character. You'll need to print this character after each row you've printed.
:::

    pre(julia-executable)
      | """
      | Prints an n × n checkerboard, like:
      |   
      | xoxo
      | oxox
      | xoxo
      | oxox
      | """    
      | function checkerboard(n)
      |     # add code here
      | end


    x-quill

---
> id: step-143

*Solution.* We loop through the rows and use an `{jl} if` statement to print a different output depending on whether the row is even-numbered or odd-numbered.

    pre(julia-executable)
      | "Prints an n × n checkerboard"
      | function checkerboard(n)
      |     for i in 1:n
      |         if iseven(i)
      |             print("xo" ^ (n÷2))
      |         else
      |             print("ox" ^ (n÷2))
      |         end
      |         print("\n")
      |     end
      | end

[Continue](btn:next)

---
> id: step-pascal-exercise

::: .exercise
**Exercise**  
Write a function which prints [Pascal's triangle](https://en.wikipedia.org/wiki/Pascal%27s_triangle) up to the $n$th row, where the top row counts as row zero. You might want to use a helper function `{jl} print_row(n,row)` to manage the responsibility of printing each row, as well as a helper function `{jl} next_row(row)` to calculate each row from the previous one.

Example output, for `{jl} n = 4`:

``` code
        1
      1   1
    1   2   1
  1   3   3   1
1   4   6   4   1
```

_Note_: there's no solution to this one, but you can do it on your own!
:::

    pre(julia-executable)
      | """
      | Prints the nth row (`row`) of Pascal's triangle
      | with appropriate spacing.
      | """
      | function print_row(n,row)
      |     # add code here
      | end
      |     
      | """
      | Returns the next row in Pascal's triangle.
      | Example: next_row([1,3,3,1]) == [1,4,6,4,1]
      | """
      | function next_row(row)
      |     # add code here
      | end
      |
      | """
      | Print the first n rows of Pascal's triangle
      | """
      | function pascals_triangle(n)
      |     # add code here
      | end    

    x-quill

---
> id: multidimensional-arrays
## Multidimensional Arrays

We've seen a couple exercises that involve dealing with matrices as an array of arrays. This gets quite tedious if you have to deal with matrices often, because many common tasks require custom methods with this approach (for example, simply selecting a column).

[Continue](btn:next)

---
> id: step-multidim

Since multidimensional arrays are very common in scientific computing, Julia has a built-in multidimensional array type. In other words, Julia arrays can be arranged in a rectangle or a cube, etc. The syntax for inputting a rectangular array involves separating rows with semicolons and row elements with spaces: `{jl} A = [1 2 3; 4 5 6; 7 8 9]`. Alternatively, you can use the newline character to separate rows:

    pre(julia-executable)
      |
      | A = [
      | 1 2 3
      | 4 5 6
      | 7 8 9
      | ]

We can find the dimensions of `{jl} A` using `{jl} size(A)`. For example, the size of the matrix `{jl} A` defined above is [[(3,3)|(2,2)|(2,3)]]. You can access particular dimensions with a second argument, like `{jl} size(A,1)` or `{jl} size(A,2)`.

[Continue](btn:next)

---
> id: step-multidimensional-index

To index a multidimensional array, we use commas to separate selectors for each dimension. For example, `{jl} A[2:3,:]` selects the second row through the third row and all of the columns (the lone colon is short for `{jl} 1:end`).

Array comprehension syntax works with multidimensional arrays as well. Just separate the index iterators with a comma:

```julia
julia> [i^2 + j^2 for i in 1:3, j in 1:5]

3×5 Array{Int64,2}:
2   5  10  17  26
5   8  13  20  29
10  13  18  25  34
```

As you can see in the first line of the above output, the type of an array prints as `{jl} Array{T,d}` where `{jl} T` is the type of the array's entries and `{jl} d` is the number of dimensions.

[Continue](btn:next)

---
> id: step-random-arrays

Random arrays can be generated in Julia using `{jl} rand` (uniform in the interval $[0,1]$) or `{jl} randn` (standard normal distribution). These functions take an integer argument to specify the length of the output array.

    pre(julia-executable)
      | rand(10) # a vector of ten Unif([0,1])'s
      | randn(10) # a vector of ten standard normals
      | rand([3,5,11],100) # a vector of 100 samples from the array [3,5,11]

[Continue](btn:next)

---
> id: step-seeding

The random number generator can be *seeded* to ensure it produces the same results when run repeatedly:

    pre(julia-executable)
      | using Random
      | Random.seed!(123)
      | rand(), rand()

The two calls to `{jl} rand` yield [[different outputs|the same output]], but if we run the whole block again, we will get [[the same two numbers|two different numbers]].

---
> id: step-multidim-array-exercise

::: .exercise
**Exercise**  
Succinctly generate the following two-dimensional array

```latex
\begin{bmatrix}
  0 & 1 & 2 & 3 & 4 \\
  1 & 2 & 3 & 4 & 0 \\
  2 & 3 & 4 & 0 & 1 \\
  3 & 4 & 0 & 1 & 2 \\
  4 & 0 & 1 & 2 & 3
\end{bmatrix}
```

store it to a variable, and write a line of code to select the submatrix     

```latex
\begin{bmatrix}
  3 & 4 & 0 & 1 & 2 \\
  4 & 0 & 1 & 2 & 3
\end{bmatrix}
```

Hint: you might want to use the function `{jl} rem`—look it up from a Julia session to check how it works.
:::

*Solution.* `{jl} A = [rem(i+j,5) for i=0:4,j=0:4]` generates the first matrix and stores it to the variable `{jl} A`. Then `{jl} A[end-1:end,:]` takes the last two rows of `{jl} A`.

---
> id: plotting
## Plotting

The main plotting package in Julia is called `{jl} Plots`. To create a figure, you supply data in the form of arrays as arguments to the `{py} plot` function (`{jl} x` first, then `{jl} y` if appropriate, then `{jl} z` if appropriate). All other plot information (called *attributes*, in Plots lingo) is supplied using keyword arguments. For example:

    pre(julia-executable)
      | using Plots
      | using Random
      | Random.seed!(123)
      | plot(rand(10), rand(10), seriestype = :scatter,
      |      group = rand(0:1,10), title = "Some random points")

    figure
      img(src="images/random-points.svg")

Note that the `{jl} group` keyword argument partitioned the data into two series, one for each unique value in the array supplied to `{jl} group`. These series are automatically shown in different colors and labeled in the legend.

[Continue](btn:next)

---
> id: step-plotsjl-cheatsheet

You can see all the main plot types and attributes on the [Plots.jl cheatsheet](https://data1010.github.io/docs/cheatsheets/plotsjl-cheatsheet.pdf).

[Continue](btn:next)

---
> id: step-save-plot

To save a plot, use the `{jl} savefig` function:

    pre(julia-executable)
      | P = plot(rand(0:10),rand(0:10), seriestype=:scatter)
      | savefig(P,"myfigure.pdf") # save figure as a PDF file

[Continue](btn:next)

---
> id: step-plots-exercise-1

::: .exercise
**Exercise**  
Make a graph which looks as much as possible like the one shown below. You'll want to look at the [Plots.jl cheatsheet](https://data1010.github.io/docs/cheatsheets/plotsjl-cheatsheet.pdf) for options.
:::

    figure
      img(src="images/example-graph.svg")

    pre(julia-executable)
      | using Plots
      | x = range(0, stop = 2π, length = 100)
      | y = sin.(x)
      | # add plotting code here

    x-quill

---
> id: step-plotting-solution

*Solution.* We change the line style and width, and we add labels for the axes:

    pre(julia-executable)
      | using Plots
      | x = range(0, stop = 2π, length = 100)
      | y = sin.(x)
      | plot(x,y, linewidth = 3, linestyle = :dash,
      |      xlabel="x", ylabel="sin(x)", legend = :none)

---
> id: step-167

To get a quick refresher on how to perform common tasks in Julia, check out the [Julia-Python-R cheatsheet](https://browndsi.github.io/docs/cheatsheets/jpr-cheatsheet.pdf), also linked from [browndsi.github.io](https://browndsi.github.io).

Congratulations! You have finished the Data Gymnasia *Programming with Julia* course.
