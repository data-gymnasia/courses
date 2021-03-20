# Numerical Computation

> id: machine-arithmetic
> description: Machine arithmetic, numerical error, pseudorandom numbers, automatic differentiation, and gradient descent optimization algorithms.
> color: "#31bf74"
> next: intro-statistics
> author: Samuel S. Watson

## Machine Arithmetic

Computers store all information, including numerical values, as sequences of [[bits|cookies|chips]]. The **type** of a numeric value specifies how the underlying sequence of bits should be interpreted as a number.

---
> id: step-1bitstring

You can access the bit representation of a numerical value in Julia using the function `{jl} bitstring`. For example, we can inspect how boolean values are represented in Julia:

    pre(julia-executable)
      | println(bitstring(true))
      | println(bitstring(false))

You might think that boolean values would be stored using a single bit. However, as you can see from the output above, in fact they use [eight bits](gloss:bit8).

In this section, we will introduce several of the most important numeric types.

[Continue](btn:next)

---
> id: exercise-1

::: .exercise
**Exercise**  
Humans typically interpret a string of digits as an integer using *place value*: the units digit is worth $10^0$, the next digit to the left is worth $10^1$, and so on. Then $709 = 7 \cdot 10^2 + 0 \cdot 10^1 + 9\cdot 10^0$, for example. This is called the **decimal representation** of a number.

We can do the same thing with 2 in place of 10: the rightmost digit is worth $2^0$, the next digit is worth $2^1$, and so on. Instead of 10 digits we only have two *bits*: 0 and 1. This is called the **binary representation** of a number. The binary representation of 13, for example, is $1101$, since $13 = 1\cdot 2^3 + 1\cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0$.

Find the binary representations of each of the following numbers: 2, 16, 20, and 100.
:::

    x-quill

---
> id: solution-1

*Solution.* The binary representation of 2 is $10$, of 16 is $10000$, of 20 is $10100$, and of 100 is $1100100$.

[Continue](btn:next)

---
> id: step-2

### 64-bit Integers

The most common numeric types used in modern computers use [64 bits](gloss:bit64) to represent each number. There are [[$2^{64}$|$64!$|$64^2$]] length-64 strings of 0's and/or 1's.

---
> id: step-3

Therefore, with 64 bits we can represent $2^{64}$ numbers. For example, we could represent the integers from 0 to $2^{64}-1$ by interpreting each string of 0's and 1's as a binary number. This type exists (in Julia it's called `{jl} UInt64`, for *unsigned 64-bit integer*), but most of the time it's important to be able to represent negative integers as well.

[Continue](btn:next)

---
> id: step-negatives-room

In order to make room for negatives, we will only use [[half|a quarter]] of these bitstrings to represent nonnegative numbers (from 0 to $2^{63}-1$), and we will allocate the other half to negative integers (from $-2^{63}$ to $-1$).

---
> id: step-int64-negatives

More precisely, for $0 \leq n \leq 2^{63}-1$, we represent $n$ using its binary representation, with leading zeros as necessary to get 64 total bits. For $1 \leq n \leq 2^{63}$, we represent $-n$ using the binary representation of $2^{64}-n$. One good reason to use this convention rather than dedicating one bit to the number's sign and using the other 63 bits to represent the number's absolute value in binary is that [[zero has a unique representation|it's easier to remember]].

    figure
      img(src="images/int64-graph.svg")
      p.caption.md For the 64-bit signed integer representation, we represent the first $2^{63}-1$ values using their usual binary representation, and then we skip down to $-2^{63}$ and count back up to $-1$.

::: .example
**Example**  
The expression `{jl} bitstring(+34)` evaluates to
<div style="text-align:center">
`{jl} 0000000000000000000000000000000000000000000000000000000000100010`\;
</div>


This checks out: $34 = 1\cdot 2^5 + 0 \cdot 2^4 + 0\cdot 2^3 + 0 \cdot 2^2 + 1\cdot 2^1 + 0 \cdot 2^0$.

The expression `{jl} bitstring(-34)` evaluates to
<div style="text-align:center">
`{jl} 1111111111111111111111111111111111111111111111111111111111011110`\.
</div>

 We could check that this is the binary representation of $2^{64} - 34$, but in the following exercise we will learn a trick for doing that without having to deal with all those 1's.
:::

[Continue](btn:next)

---
> id: exercise-2

::: .exercise
**Exercise**  
Show that if $1 \leq n \leq 2^{63}-1$, then you can find `{jl} bitstring(-n)` from `{jl} bitstring(n)` by (i) flipping every bit, and (ii) adding 1 to the resulting number (interpreted as an integer represented in binary).
:::

    x-quill

---
> id: solution-2

*Solution.* Recall that for $1 \leq n \leq 2^{63},$ $-n$ is represented by the binary representation of $2^{64} - n.$ Representing $2^{64} - n$ in binary is not straightforward but $2^{64} - 1 - n$ is easier because $2^{64} - 1$ in binary is just $64$ ones. This means that for any $1 \leq n \leq 2^{63} - 1,$ we can get $2^{64} - 1 - n$ in binary by changing a $1$ to a $0$ in the binary representation of $2^{64} - 1$ at every position where $n$ in binary has a $1$. In other words, to get $2^{64} - 1 - n$ in binary, we just flip the binary representation of $n.$ Since

``` latex

    2^{64} - n = 2^{64} - 1 - n + 1,

```
 we need to add $1$ after flipping the bits.

[Continue](btn:next)

---
> id: step-4

### 64-bit Floating Point Numbers

Integer types are appropriate for calculations which only involve integer operations (multiplication, addition, and negation), but the only integers with integer *reciprocals* are [[-1 and 1|just 1|-1, 1, and 0]]. So performing calculations involving division requires a new number type.

---
> id: step-float64-tick-marks

Let's visualize our number system by placing a tick mark on the number line for each number we're representing. One simple idea is to choose some small value $\epsilon$ and represent integer multiples of $\epsilon$:

    figure
      img(src="images/fixed-point.svg")
      p.caption.md We can represent non-integer values by interpreting each integer $n$ as $n\epsilon$.

These are called **fixed point** numbers, and they have some uses (for example, in financial applications where all monetary values can safely be assumed to be a multiple of one cent).

[Continue](btn:next)

---
> id: step-floating-point-motivation

The problem with fixed point numbers for most scientific computing applications is that when we get very small numbers (for example, when taking the reciprocal of very large numbers), they have to be rounded off a lot relative to the size of the number. For example, if $\epsilon = 0.001$, then the reciprocal of 1999 would have to be rounded from approximately $0.0005$ to $0.001$. If that value is then multiplied by, say, 8000, then the round-off would result in a product of 8 instead of approximately 4.

We could address that problem by making $\epsilon$ smaller, but we encounter a tradeoff between representing small numbers accurately and being able to represent large numbers at all. Furthermore, if $\epsilon$ is very small, then large numbers are being represented with unnecessarily high precision (relative to the size of the number). The way out of this tradeoff is to relax the fixed-width increment and using a variable-sized gap between representable numbers. Such number systems are called **floating point** systems.

[Continue](btn:next)

---
> id: step-minifloat

One way to represent numbers more densely near zero is to put equally spaced tick marks between 1 and 2, and then scale that interval up repeatedly into $[2,4)$, then $[4,8)$, then $[8,16)$, and so on, and also scale it down to $[1/2,1)$, $[1/4,1/2)$, and so on. Here's an example of such a scheme: we place 8 tick marks between 1 and 2, and then we scale that interval's worth of tick marks four times by a factor of 2, and also 3 times by a factor of $\frac{1}{2}$.

    figure
      img(src="images/minifloat.svg")

We can see on the left edge of the (top) picture that we didn't cover zero! There is also quite a large gap between 0 and the smallest representable number in this system. So we replace the leftmost interval between successive powers of 2 with ticks twice as far apart so that they reach down to 0. The locations of these new ticks are called *subnormal numbers*.

[Continue](btn:next)

---
> id: step-float64-system

If we have 64 bits, we can do the same thing but on a grander scale. Rather than subdividing the interval $[1,2)$ into $2^3 = 8$ equal-length intervals, we use $2^{52} = 4503599627370496$ intervals. Rather than scaling than interval up and down just a few times in each direction, we scale up 1023 times—covering every binary interval up to $[2^{1023}, 2^{1024})$—and down 1022 times—covering every binary interval down to $[2^{-1022}, 2^{-1021})$. Finally, the subnormal numbers will be equally spaced between 0 and $2^{-1022}$.

We can accomplish all of this if we dedicate 11 bits to indicating the index $e$ of the binary interval we're in—starting from $e=0$ for numbers in the subnormal range and going up to $e=2046 = 2^{11}-2$ for the last interval $[2^{1023}, 2^{1024})$—and 52 bits for indicating the index $f$ of the tick within that interval. For example, the number $4 + 18\cdot 2^{-50}$ would correspond to [[$e = 1024$|$e = 1023$|$e = 2$]] and [[$f = 18$|$f = 0$|$f = 1$]].

---
> id: step-shown-as-tick-marks

The nonnegative representable numbers are laid out as shown (figure not drawn to scale!):

    figure
      img(src="images/float64.svg")
      p.caption.md The tick marks indicate the positive values which are representable as 64-bit floating point numbers. There are $2^{52}$ of them between any two successive powers of 2 from $2^{-1022}$ up to $2^{1024}$, and the interval from 0 to $2^{-1022}$ also contains $2^{52}$ representable values (these are the subnormal numbers, indicated in blue).


[Continue](btn:next)

---
> id: step-sigma-bit

That leaves us with one bit, which we call $\sigma$, to indicate the sign of the value we're representing. Also, note that we're leaving out one possible $e$ value (the last one, $e = 2047$); more on that later.

---
> id: step-formula-float64

We can use this description to write down formulas for the real number values represented by each string of 64 bits. We define $\sigma$ to be the first bit of the string, $e$ to be the next 11 bits interpreted as a binary integer, and $f$ to be the remaining 52 bits interpreted as a binary integer. If $0 &lt; e &lt; 2047$, then the string represents the number

``` latex
(-1)^\sigma\left(1+\left(\frac{1}{2}\right)^{52}f\right)\cdot2^{e-1023}.
```

Note that the exponent $e-1023$ ranges from $-1022$ up to $1023$ as $e$ ranges from 1 to $2046$. If $e = 0$, then the string represents

``` latex

  (-1)^\sigma \left(0+\left(\frac{1}{2}\right)^{52}f\right) \cdot 2^{-102\color{red}{2}},

```
These are the [[subnormal numbers|integers|irrational numbers]].

[Continue](btn:next)

---
> id: step-float-graph

Another way to visualize the floating point number system is to graph the floating point value associated with each binary string against its value as an unsigned integer. Here's an example for an 8-bit floating point scheme, with one sign bit, three bits for the exponent, and four bits for the mantissa. Subnormal numbers are shown in red, and powers of 2 are shown in gold.

    center: #plotly-float64-graph(width='400px')

[Continue](btn:next)

---
> id: step-nan-and-inf

We appropriate the *last* value of $e$ for a special meaning: if $e = 2047$, then the string represents one of the special values `{jl} Inf` or `{jl} NaN`, depending on the value of $f$.

::: .example
**Example**  
`{jl} bitstring(-0.75)` returns

<div style="text-align:center">
`{jl} 1011111111101000000000000000000000000000000000000000000000000000`.
</div>

The leading `{jl} 1` indicates that the number is negative, the next eleven digits `{jl} 01111111110` give $e = 1022$, and interpreting the remaining 52 digits as a base-2 fraction $(0.1000\ldots)\_2$ gives $f = \frac{1}{2}$. So the value represented is

``` latex
(-1)\left(1+\frac{1}{2}\right)2^{1022-1023} = -\frac{3}{4}.
```
Thus $-0.75$ can be represented exactly as a `{jl} Float64`.
:::

[Continue](btn:next)



---
> id: exercise-3

::: .exercise
**Exercise**  
Show that $0.1$ cannot be represented exactly as a `{jl} Float64`.
:::

    x-quill

---
> id: solution-3

*Solution.* By construction, every representable Float64 is a rational number whose denominator is a power of 2. Therefore, when a representable Float64 is written as a fraction and simplified, its denominator is a power of 2. Since $\frac{1}{10}$ does not fit this description, it is not representable as a `{jl} Float64`.

[Continue](btn:next)

---
> id: exercise-4

::: .exercise
**Exercise**  
The Julia function `{jl} nextfloat` returns the smallest representable value which is larger than its argument. What value will be returned by the code below?
:::

    pre(julia-executable)
      | log2(nextfloat(11.0) - 11.0)

    x-quill

---
> id: solution-4

*Solution.* The difference between 11 and the next Float64 is $2^{-52 + 3} = 2^{-49}$, since 11 is in the binary interval $[2^{3}, 2^4)$, which is 3 binary intervals to the right of $[1,2]$. So the value returned will be $-49$.

[Continue](btn:next)

---
> id: step-5

### 32-bit Floating Point Numbers

Each 32-bit string represents the value

``` latex

  (-1)^\sigma\left(1+\left(\frac{1}{2}\right)^{23}f\right)\cdot2^{e-127},

```
 where $\sigma$ is the first bit of the string, $e$ is the next 8 bits interpreted as a binary integer, and $f$ is the remaining 23 bits are interpreted as a binary integer. In other words, there are [[`2^23`|`2^22`|`2^21`]] equally spaced values represented between 1 and 2, and the same number of values in the interval $[2,4)$, and so on, as well as $[1/2,1)$, $[1/4,1/2)$, and so on.

::: .example
**Example**  
 `{jl} bitstring(Float32(-0.75))` returns `{jl} 10111111010000000000000000000000`
:::

[Continue](btn:next)

---
> id: exercise-5

::: .exercise
**Exercise**  
Find the positive difference between 1 and the first number greater than 1 which is representable as a `{jl} Float32`.
:::

    x-quill

---
> id: solution-5

*Solution.* We can represent 1 by choosing $f = 0$ and $e = 127$. To represent the largest possible number less than 1, we let the 23-bit string representing $f$ be 22 zeros followed by a 1. So the answer is $2^{-23}$.

We can check this in Julia using `{jl} nextfloat(Float32(1.0)) - 1`, and indeed it returns a value which is equal to $2^{-23}$: `{jl} Float32(2)^(-23) == nextfloat(Float32(1.0)) - 1` returns `{jl} true`.

[Continue](btn:next)

---
> id: step-6

### Arbitrary-Precision Numbers

Sometimes you might want store a number without being constrained to 64 bits, or even 128 or 256 bits. It is possible to define a type which uses an *extensible* number of bits (depending on the size of the integer or precision of the real number being stored). These types are called **bignums**, and in Julia they're called `{jl} BigInt` and `{jl} BigFloat`.

[Continue](btn:next)

---
> id: exercise-6

::: .exercise
**Exercise**  
(i) Arbitrary-precision arithmetic is helpful for inspecting the behavior of lower precision formats. Find the exact value of the difference between 1.1 and the `{jl} Float64` value nearest 1.1. (Hint: `{jl} big(1.1)` interprets 1.1 as a Float64 value—look at that value and mentally subtract 1.1).

(ii) Confirm that calculating the decimal representation of $2^{100,000}$ is no problem with big number arithmetic. Convert the resulting sequence of decimal digits to a string and find its length.
:::

    pre(julia-executable)
      |

    x-quill

---
> id: solution-6

*Solution.*  `{jl} big(1.1)` returns a number which is $8.8817841970012523233890533447265624 \times 10^{-17}$ more than 1.1.

 `{jl} length(string(big(2)^100000))` returns $30{,}103$, so that's how many digits $2^{100,000}$ has.

[Continue](btn:next)

---
> id: step-parse-big

To obtain numerical values of other types in Julia, use `{jl} parse` or `{jl} big`.

    pre(julia-executable)
          | parse(BigInt,"1267650600228229401496703205376")^(big(1)/100)

[Continue](btn:next)

---
> id: step-in-hardware

`{jl} Float64` and `{jl} Int64` operations are performed *in hardware*, meaning that they use instructions programmed directly into the computer's microprocessor. They are much faster and more memory efficient than arbitrary precision arithmetic, which has to be done [in software](gloss:in-software).

::: .exercise
**Exercise**
Run the cell below to figure out about how many times slower BigInt addition is relative to Int64 addition.
:::

    pre(julia-executable)
      | a = big.(collect(1:100_000))
      | b = collect(1:100_000)
      | s = @elapsed(sum(a))
      | t = @elapsed(sum(b))
      | s/t

    x-quill

---
> id: solution-7

*Solution.* Outcomes can vary quite a bit, but you should find that the bignum operation typically takes 10-20 times as long.


[Continue](btn:next)

---
> id: step-7

### General Comments

Choice of numerical representation depends on the application at hand, since each has its advantages and disadvantages. `{jl} Int64`arithmetic is actually *modular* arithmetic with a modulus of $2^{64}$. This means that Int64 arithmetic is exact unless our calculation takes us outside the window of representable values. Basic `{jl} Float64`operations return the same number as computing the mathematical result of the operation and rounding to the nearest `{jl} Float64`-representable value (or one of the two nearest ones if it's halfway between).

[Continue](btn:next)

---
> id: exercise-8

::: .exercise
**Exercise**  
Without using a computer, perform the operations in the expression $(1.0 + 0.4/2^{52}) + 0.4/2^{52}$ using `{jl} Float64`arithmetic. Repeat with the expression $1.0 + (0.4/2^{52} +
    0.4/2^{52})$. Then check your findings by evaluating these expressions in Julia.
:::

    x-quill

---
> id: solution-8

*Solution.* The first expression evaluates to 1.0, since adding $0.4/2^{52}$ only gets you 40% of the way to the next representable value. The second expression evaluates to $1 + 2^{-52}$. And indeed, `{jl} (1.0 + 0.4/2^52) + 0.4/2^52 == 1.0 + (0.4/2^52 + 0.4/2^52)` returns `{jl} false`.

[Continue](btn:next)

---
> id: step-8-1

A *numeric literal* is a sequence of characters to be parsed and interpreted as a numerical value.
* Numeric literals with a decimal point are *real literals*.
* Numeric literals without a decimal point are *integer literals*.

::: .example
**Example**  
In the expression `{jl} 2.718^50+1`, `{jl} 2.718` is a real literal, and `{jl} 50` and `{jl} 1` are both integer literals.
:::

Integer literals are interpreted as [[`{jl} Int64`|`{jl} Float64`]] values, and real literals are interpreted as [[`{jl} Float64`|`{jl} Int64`]] values.

---

::: .example
**Example**  
 `{jl} 2^100` returns `{jl} 0`, since `{jl} 2` and `{jl} 100` are interpreted as `{jl} Int64`values, and $2^{100}$ is equivalent to 0 modulo $2^{64}$.
:::


[Continue](btn:next)

---
> id: exercise-9

::: .exercise
**Exercise**  
Explain why it is never necessary to use a `{jl} BigInt` for a loop counter (that is, a variable which starts at 0 or 1 and is incremented by 1 each time the body of the loop runs).
:::

    x-quill

---
> id: solution-9

*Solution.* An `{jl} Int64` can store values as large as $2^{63}-1$. Assuming optimistically that the body of the loop can execute in a nanosecond, the loop could run for nearly 300 years before exhausting the positive `{jl} Int64` values. Therefore, we do not need `{jl} BigInt` values for a loop counter.


---

> id: error
## Error

**Error** is the discrepancy between a quantity and the value used to represent it in the program. A result is **accurate** if its error is small. If $\widehat{A}$ is an approximation for $A$, then
* the **absolute error** is $\widehat{A} - A$, and
* the **relative error** is $\frac{\widehat{A} - A}{A}$.

[Continue](btn:next)

---
> id: step-more-relative-error

We are usually more interested in relative error, since the relevance of an error is usually in proportion to the quantity being represented. For example, misreporting the weight of an animal by one kilogram would be much more significant if the animal were a squirrel than if it were a blue whale.

::: .example
**Example**  
The expression `{jl} sqrt(200.0)`, which returns the Float64-square-root of 200, yields

``` latex

    14.1421356237309510106570087373256683349609375\overline{0}.

```

 The actual decimal representation of $\sqrt{200}$ is

``` latex

    14.1421356237309504880168872420969807856967187\ldots

```
The difference between these values, $5.23 \times 10^{-16}$, is the absolute error, and $\frac{5.23 \times 10^{-16}}{\sqrt{200}} = 3.7\times 10^{-17}$ is the relative error.
:::

[Continue](btn:next)

---
> id: step-9

### Sources of Numerical Error

There are a few categories of numerical error.

**Roundoff error** comes from rounding numbers to fit them into a floating point representation.

::: .example
**Example**  
`{jl} 0.2 + 0.1`is equal to $0.300000000000000444089209850062616169452667236328125\overline{0}$ in `{jl} Float64` arithmetic. The discrepancy between 0.3 and this value is roundoff error.
:::

[Continue](btn:next)

---
> id: step-truncation-error

**Truncation error** comes from using approximate mathematical formulas or algorithms.

::: .example
**Example**  
The Maclaurin series of $\sin x$ is $x - \frac{x^3}{3!} +
    \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots$, so approximating $\sin(0.1)$ as $0.1 -
    \frac{0.1^3}{6}$ yields a truncation error equal to $\frac{0.1^5}{5!} - \frac{0.1^7}{7!} + \cdots$.
:::

[Continue](btn:next)

---
> id: step-newtons-method

::: .example
**Example**  
Newton's method approximates a zero of a function $f$ by starting with a value $x\_0$ near the desired zero and defining $x\_{n+1} = x\_n - \frac{f(x\_n)}{f'(x\_n)}$ for all $n \geq 0$.

 Under certain conditions, $x\_n$ converges to a zero of $f$ as $n\to\infty$. The discrepancy between $x\_n$ and $\lim\_{n\to\infty}x\_n$ is the truncation error associated with stopping Newton's method at the $n$th iteration.
:::

[Continue](btn:next)

---
> id: step-riemann-sum-truncation

::: .example
**Example**  
We may approximate $\int\_0^1 \sin(x^2) \mathrm{d}x$ using the sum $\displaystyle{\sum\_{k=1}^{100}
    \sin\left(\left(\frac{k}{100}\right)^2\right)\frac{1}{100}}$. The error associated this approximation is a type of truncation error.
:::

[Continue](btn:next)

---
> id: step-statistical-error

**Statistical error** arises from using randomness in an approximation.

::: .example
**Example**  
We can approximate the average height of a population of 100,000 people by selecting 100 people uniformly at random and averaging their measured heights. The error associated with this approximation is an example of statistical error.
:::

[Continue](btn:next)

---
> id: exercise-10

::: .exercise
**Exercise**  
Discuss the error in each of the following scenarios using the terms *roundoff error, truncation error, or statistical error*.
* We use the trapezoid rule with 1000 trapezoids to approximate $\displaystyle \int\_0^{10} \frac{1}{4+x^4} \mathrm{d}x$.
* We are trying to approximate $f'(5)$ for some function `{jl} f` that we can compute, and we attempt to do so by running `{jl} (f(5 + 0.5^100) - f(5))/0.5^100`. We fail to get a reasonable answer.
* To approximate the minimum of a function $f:[0,1] \to \mathbb{R}$, we evaluate $f$ at 100 randomly selected points in $[0,1]$ and return the smallest value obtained.
:::


    x-quill

---
> id: solution-10

*Solution.*  
* The more trapezoids we use, the more accurate our answer will be. The difference between the exact answer and the value we get when we stop at 1000 trapezoids is truncation error.
* The real problem here is roundoff error. `{jl} 5 + 0.5^100` gets rounded off to 5.0, so the numerator will always evaluate to 0. However, even if we used a `{jl} BigFloat` version of each of these values, there would still be truncation error in this approximation, since the expression we used was obtained by cutting off the limit in the definition of the derivative at a small but positive increment size.
* This is an example of statistical error, since the output of the algorithm depends on the randomness we use to select the points.

[Continue](btn:next)

---
> id: step-10

### Condition Number

The derivative of a single-variable function may be thought of as a measure of how the function stretches or compresses absolute error:

``` latex
f'(x) \approx \frac{\overbrace{f(x+h)-f(x)}^{\text{absolute error of output}}}{\underbrace{h}_\text{absolute error of input}}
```

The **condition number** of a function measures how it stretches or compresses *relative* error. Just as the derivative helps us understand how small changes in input transform to small changes in output, the condition number tells us how a small relative error in the initial data of a problem affects the relative error of the solution. We will use the variable $a$ to denote a problem's initial data and $S(a)$ to denote the solution of the problem with initial data $a$.

[Continue](btn:next)

---
> id: step-condition-number-idea

The condition number of a function is defined to be the absolute value of the ratio of the relative change in output of the function to a very small relative change in the input. The condition number of a *problem* is the condition number of the function which maps the problem's initial data to its solution.

[Continue](btn:next)

---
> id: step-condition-number-definition

::: .definition
**Definition**  
If $S$ is the map from the initial data $a\in \mathbb{R}$ of a problem to its solution $\mathbf{S}(a)\in \mathbb{R}^n$, then the condition number $\kappa$ of the problem is

``` latex
\kappa(a) = \frac{|a||\frac{d}{da}\mathbf{S}(a)|}{|\mathbf{S}(a)|}.
```
:::

::: .example
**Example**  
Show that the condition number of $a\mapsto a^n$ is constant, for any $n \in \mathbb{R}$.
:::

[Continue](btn:next)

---
> id: example-solution-1

*Solution.* We have

``` latex
\kappa(a) = \frac{a na^{n-1}}{a^n} = n,
```
for all $a\in \mathbb{R}$.

[Continue](btn:next)

---
> id: example-large-condition-number

::: .example
**Example**  
Show that the condition number of the function $a\mapsto a - 1$ is very large for values of $a$ near 1.
:::

[Continue](btn:next)

---
> id: example-solution-2

*Solution.* We substitute into the formula for condition number and get

``` latex
\kappa(a) = \frac{a}{|a-1|}
```

for values of $a$ near $1$. This expression goes to infinity as $a \to 1$, so the condition number is very large.

[Continue](btn:next)

---
> id: step-relative-exercise

Subtracting 1 from two numbers near 1 preserves their [[absolute|relative]] difference, but the [[*relative* |*absolute*]] size of this difference is increased because the numbers themselves are much smaller.

---

::: .example
**Example**  
If $a \neq 0$, then the solution of the equation $ax + 1 = 0$ is $x = -1/a$. If we change the initial data $a$ to $a(1+r)$, then the solution changes to $-\frac{1}{a(1+r)}$, which represents a relative change of

``` latex
\frac{-\frac{1}{a(1+r)} - \left(-\frac{1}{a}\right)}{-1/a} =
      -\frac{r}{1+r}
```
in the solution. The relative change in input is $(a(1+r) - a)/a) = r$, so taking the absolute value of the ratio of $-\frac{1}{1+r}$ to $r$ and sending $r \to 0$, we see that condition number of this problem is $\boxed{1}$.
:::

[Continue](btn:next)

---
> id: exercise-11

::: .exercise
**Exercise**  
Consider a function $S: \mathbb{R} \to \mathbb{R}$. If the input changes from $a$ to $a + \Delta a$ for some small value $\Delta a$, then the output changes to approximately $S(a) + \frac{d}{da}S(a) \Delta a$. Calculate the ratio of the *relative change* in the output to the relative change in the input, and show that you get

``` latex
\frac{a\frac{d}{da}S(a)}{S(a)}.
```

:::

    x-quill

---
> id: solution-11

*Solution.* The relative change in output is

``` latex
\frac{\frac{d}{da}S(a) \Delta a}{S(a)},
```
and the relative change in input is $\Delta a / a$. Dividing these two quantities gives

``` latex
\frac{a\frac{d}{da}S(a)}{S(a)},
```
 as desired.

[Continue](btn:next)

---
> id: step-general-condition-number

More generally, if the initial data is in $\mathbb{R}^n$ and the solution is in $\mathbb{R}^m$, then the condition number is defined to be

``` latex
\kappa(\mathbf{a}) = \frac{|\mathbf{a}|\|\frac{\partial S}{\partial \mathbf{a}}(\mathbf{a})\|}{|\mathbf{S}(\mathbf{a})|},
```
where $\| \cdot \|$ denotes the [operator norm](gloss:operatornorm). The operator norm of the derivative is the appropriate generalization of the norm of the derivative of $\mathbf{S}$ since it measures the maximum stretching factor of $\mathbf{S}$ near $\mathbf{a}$.

[Continue](btn:next)

---
> id: step-condition-number-large
#### Well conditioned and ill-conditioned problems

If the condition number of a problem is very large, then small errors in the problem data lead to large changes in the result. A problem with large condition number is said to be **ill-conditioned**. Unless the initial data can be specified with correspondingly high precision, it will not be possible to solve the problem meaningfully.

::: .example
**Example**
Consider the following matrix equation for $x$ and $y$.

``` latex
\begin{bmatrix}
        a & 3 \\
        6 & 9
\end{bmatrix}
\begin{bmatrix}
x \\ y
\end{bmatrix}
=
\begin{bmatrix}
4 \\ 5
\end{bmatrix}
```

Find the values of $a$ for which solving this equation for $[x,y]$ is ill-conditioned.
:::

[Continue](btn:next)

---
> id: example-solution-3

*Solution.* If $a \neq 2$, then the solution of this equation is

``` latex
 \renewcommand{\arraystretch}{1.5}
      \begin{bmatrix}
        x \\ y
      \end{bmatrix}
      =
      \begin{bmatrix}
        \frac{7}{3 \left(a - 2\right)} \\
        \frac{5 a - 24}{9 \left(a - 2\right)}
      \end{bmatrix}
```
Using the formula for $\kappa$ above, we can work out (after several steps) that

``` latex
\kappa(a) = \frac{7|a|\sqrt{13}}{|a-2|\sqrt{(5a-24)^2+441}}.
```
If $a$ is very close to $2$, then $\kappa(a)$ is very large, and the matrix is ill-conditioned:

    pre(julia-executable)
      | [2.01 3; 6 9] \ [4; 5]

    pre(julia-executable)
      | [2.02 3; 6 9] \ [4; 5]


[Continue](btn:next)

---
> id: machine-epsilon
#### Machine epsilon

**Machine epsilon**, denoted $\epsilon\_{\text{mach}}$, is the maximum relative error associated with rounding a real number to the nearest value representable as a given floating point type. For `{jl} Float64`, this value is $\epsilon\_{\text{mach}} = 2^{-53} \approx 1.11 \times 10^{-16}$.

A competing convention—more widely used outside academia—defines $\epsilon\_{\text{mach}}$ to be the difference between 1 and the next representable number, which for `{jl} Float64`is $2^{-52}$. This is the value returned by `{jl} eps()` in Julia. Since we typically introduce a relative error on the order of $\epsilon\_{\text{mach}}$ to encode the initial data of a problem, the relative error of the computed solution should be expected to be no smaller than $\kappa \epsilon\_{\text{mach}}$, regardless of the algorithm used.

[Continue](btn:next)

---
> id: step-definition-stable
#### Algorithm stability

An algorithm used to solve a problem is **stable** if it is approximately as accurate as the condition number of the problem allows. In other words, an algorithm is *unstable* if the answers it produces have relative error many times larger than $\kappa \epsilon\_{\text{mach}}$.

::: .example
**Example**  
Consider the problem of evaluating $f(x) = \sqrt{1+x} - 1$ near for values of $x$ near 0. Show that the problem is well-conditioned, but algorithm of evaluating the expression $\sqrt{1+x} - 1$ following the order of operations is unstable.

Comment on whether there are stable algorithms for evaluating $f(x)$ near $x = 0$.
:::

[Continue](btn:next)

---
> id: example-solution-4

*Solution.* Substituting this function into the condition number formula, we find that

``` latex
\kappa(x) = \frac{\sqrt{1+x}+1}{2\sqrt{1+x}}.
```
Therefore, $\kappa(0) = 1$, which means that this problem is well-conditioned at 0. However, the algorithm of substituting directly includes an ill-conditioned step: subtracting 1.

What's happening is that a roundoff error of approximately $\epsilon\_{\mathrm{mach}}$ is introduced when $1+x$ is rounded to the nearest `{jl} Float64`. When 1 is subtracted, we still have an error of around $\epsilon\_{\mathrm{mach}}$. Since $\sqrt{1+x} \approx 1 + x/2$, we will have $f(x) \approx x/2$, and that means that the relative error in the value we find for $f(x)$ will be approximately $2\epsilon\_{\mathrm{mach}}/x$. If $x$ is small, this will be many times larger than $\epsilon\_{\mathrm{mach}}$.

There are stable algorithms for approximating $f(x)$ near $x=0$. For example, we could use the Taylor series

``` latex
\sqrt{1+x} = 1 + \frac{x}{2} - \frac{x^{2}}{8} + \frac{x^{3}}{16} - \frac{5 x^{4}}{128} + O\left(x^{5}\right)
```
and approximate $f(x)$ as a sum of the first several terms on the right-hand side. Since power functions are well-conditioned (and performing the subtractions is also well-conditioned as long as $x$ is small enough that each term is much smaller than the preceding one), this algorithm is stable. Alternatively, we can use the identity

``` latex
\sqrt{1+x} - 1 = \frac{x}{\sqrt{1+x}+1},
```

which can be obtained by multiplying by $\frac{\sqrt{1+x} + 1}{\sqrt{1+x} + 1}$ and simplifying the numerator. Substituting into this expression is stable, because adding 1, square rooting, and reciprocating are well-conditioned.

[Continue](btn:next)

---
> id: step-condition-number-matrix
#### Matrix condition number

The condition number of an $m\times n$ matrix $A$ is defined to be the maximum condition number of the function $\mathbf{x} \mapsto A \mathbf{x}$ as $\mathbf{x}$ ranges over $\mathbb{R}^n$. The condition number of $A$ can be computed using its singular value decomposition:

[Continue](btn:next)

---
> id: exercise-12

::: .exercise
**Exercise**  
Show that the condition number of a matrix $A$ is equal to the ratio of its largest and smallest singular values.

Interpret your results by explaining how to choose two vectors with small relative difference which are mapped to two vectors with large relative difference by $A$, assuming that $A$ has a singular value which is many times larger than another. Use the figure below to help with the intuition.

    center
      img(src="images/svd2.svg" width=450)

:::

    x-quill

---
> id: solution-12

*Solution.* The derivative of the transformation $\mathbf{x} \mapsto A \mathbf{x}$ is the matrix $A$ itself, and the operator norm of $A$ is equal to its largest singular value. Therefore, to maximize $\kappa$, we minimize the ratio $|S(\mathbf{a})|/|\mathbf{a}|$. This ratio is minimized when $\mathbf{a}$ is the right singular vector with the least singular value. Therefore, the maximum possible value of $\kappa$ is the ratio of the largest singular value of $A$ to the smallest singular value of $A$.

[Continue](btn:next)

::: .exercise
**Exercise**  
Find the condition number of the function $\mathbf{x}\mapsto A\mathbf{x}$, where `{jl} A = [1 2; 3 4]` and show that there is a vector $\mathbf{v}$ and an error $\mathbf{e}$ for which the relative error is indeed magnified by approximately the condition number of $A$.
:::

    pre(julia-executable)
      | using LinearAlgebra
      | A = [1 2; 3 4]
    x-quill

---
> id: step-condition-matrix-solution

*Solution.* We choose `{jl} v` and `{jl} e` to be the columns of $V$ in the singular value decomposition of `{jl} A`:

    pre(julia-executable)
      | using LinearAlgebra
      | A = [1 2; 3 4]
      | U, S, V = svd(A)
      | σmax, σmin = S
      | κ = σmax/σmin
      | v = V[:,2]
      | e = V[:,1]
      | rel_error_output = norm(A*(v+e) - A*v)/norm(A*v)
      | rel_error_input = norm(v + e - v) / norm(v)
      | rel_error_output / rel_error_input, κ


---
> id: step-hazards

### Hazards

Integer or floating point arithmetic can **overflow**, and may do so without warning.

    pre(julia-executable)
      | 2^63

    pre(julia-executable)
      | 10.0^309

::: .example
**Example**  
In September 2013, NASA lost touch with the *Deep Impact* space probe because systems on board tracked time as a 32-bit-signed-integer number of tenth-second increments from January 1, 2000. The number of such increments reached the maximum size of a 32-bit signed integer in August of 2013.
:::

Errors resulting from performing ill-conditioned subtractions are called *catastrophic cancellation*.

[Continue](btn:next)

---
> id: step-example-relative-error

::: .example
**Example**  
Approximating $\sqrt{10^6 + 1} - \sqrt{10^6}$ with the result of `{jl} sqrt(10^6 + 1) - sqrt(10^6)`, we get a relative error of approximately $10^{-13}$, while using `{jl} 1/(sqrt(10^6 + 1) + sqrt(10^6))` gives a relative error of $5 \times 10^{-17}$(more than a thousand times smaller).
:::

[Continue](btn:next)

---
> id: exercise-13

::: .exercise
**Exercise**  
Use your knowledge of floating point arithmetic to explain why computing $\sqrt{10^6 + 1} - \sqrt{10^6}$ directly is much less precise than computing $\frac{1}{\sqrt{10^6 + 1} + \sqrt{10^6}}$.
:::

    x-quill

---
> id: solution-13

*Solution.* The gaps between successive representable positive values get wider as we move on the right on the number line. Therefore, the error of the first calculation is the roundoff error associated with calculating `{jl} sqrt(10^6+1)`, which is roughly $10^3 \epsilon\_{\mathrm{mach}}$.

The relative error in `{jl} 1/(sqrt(10^6 + 1) + sqrt(10^6))`, meanwhile, is approximately the same as the relative error in the calculation of `{jl} sqrt(10^6 + 1) + sqrt(10^6)` (since the condition number of the reciprocal function is approximately 1). This relative error is only about $\epsilon\_{\mathrm{mach}}$.

If you rely on exact comparisons for floating point numbers, be alert to the differences between `{jl} Float64` arithmetic and real number arithmetic:

    pre(julia-executable)
      | function increment(n)
      |   a = 1.0
      |     for i = 1:n
      |       a = a + 0.01
      |     end
      |   a    
      | end

    pre(julia-executable)
      | increment(100) > 2

    pre(julia-executable)
      | (increment(100) - 2) / eps(2.0)

Each time we add $0.01$, we have to round off the result to represent it as a `{jl} Float64`. These roundoff errors accumulate and lead to a result which is two ticks to the right of 2.0.

It is often more appropriate to compare real numbers using `{jl} ≈`( `{jl} \approx«tab»`), which checks that two numbers $x$ and $y$ differ by at most $\sqrt{\epsilon\_{\text{mach}}}\mathrm{max}(x,y)$.

[Continue](btn:next)

---
> id: exercise-14

::: .exercise
**Exercise**  
Guess what value the following code block returns. Run it and see what happens. Discuss why your initial guess was correct or incorrect, and suggest a value near 0.1 that you could use in place of 0.1 to get the expected behavior.
:::

    pre(julia-executable)
      | function increment_till(t, step=0.1)
      |   x = 0.5
      |     while x < t
      |       x += step
      |     end
      |   x    
      | end
      | increment_till(1.0)

    x-quill

---
> id: solution-14

*Solution.* It's reasonable to guess that the returned value will be 1.0. However, it's actually approximately 1.1. The reason is that adding the Float64 representation of 0.1 ten times starting from 0.0 results in a number slightly *smaller* than 1.0. It turns out that 0.6 (the real number) is 20% of the way from the Float64 tick before it to the Float64 tick after it:

    pre(julia-executable)
      | (1//10 - floor(2^53 * 1//10) // 2^53) * 2^53

This means that the Float64 sum is $\frac{1}{5}2^{-53}$ less than the mathematical sum after adding 0.1 once, then $\frac{2}{5}2^{-53}$ less after adding 0.1 again, and so on. By the time we we get to $1$, we've lost a full tick spacing so after 5 iterations, $x$ is equal to $1-2^{-53}$.

We could use 1/8 = 0.125 instead of 0.1 to get the expected behavior, since small inverse powers of 2 and their sums with small integers can be represented exactly as 64-bit floating points numbers.

---

> id: pseudorandom-number-generation
## Pseudorandom Number Generation

When random numbers are needed in a scientific computing application, we generally use deterministic processes which mimic the behavior of random processes. These are called **pseudo-random number generators** (PRNG). A PRNG takes an initial value, called the **seed**, and uses it to produce a sequence of numbers which are supposed to "look random". The seed determines the sequence, so you can make the random number generation in a program reproducible by providing an explicit seed. If no seed is provided, a different one will be used each time the program runs.

[Continue](btn:next)

---
> id: step-LCG

A simple PRNG is the **linear congruential generator**: fix positive integers $M$, $a$, and $c$, and consider a seed $X\_0 \in \\{0,1,\ldots,M-1\\}$. We return the sequence $X\_0, X\_1, X\_2, \ldots$, where $X\_n = \mathrm{mod}(aX\_{n-1}+c,M)$ for $n \geq 1$.

[Continue](btn:next)

---
> id: exercise-15

::: .exercise
**Exercise**  
A sequence of numbers $X\_0, X\_1,\dots $ is periodic with period $p &gt; 0$ if $p$ is the smallest number such that $X\_k = X\_{k+p}$ for all $k \geq 0$. We say that a linear congruential generator (LCG) with $c=0$ is *full-cyle* if the generated sequence has a period $p = M - 1$. For what values of $a$ is the LCG with $c = 0$, $M = 5$, and $X\_0 = a$ full-cycle?
:::

    x-quill

---
> id: solution-15

*Solution.* The LCG is full-cycle only if $a \in \\{2, 3\\}.$ The period is $1$ when $a \in \\{0, 1\\}$ and it is $2$ if $a = 4.$

[Continue](btn:next)

---
> id: step-statistical-tests

Since the sequence of numbers produced by a PRNG is determined by the initial seed, we cannot say that the sequence of numbers is random. The *pseudo* part of the term *pseudorandom* is meant to emphasize this distinction. However, we can subject the sequence of numbers to a battery of **statistical tests** to check whether it can be readily distinguished from a random sequence.

[Continue](btn:next)

---
> id: step-prng-test-example

For example, we can check that each number appears with approximately equal frequency. For example, a sequence purporting to sample uniformly from $\\{1,2,3,4,5\\}$ which begins

``` latex
1,1,5,5,5,1,1,5,1,1,5,5,5,1,1,1,2,1,5,5,1,2,1,5,1,1,1,\ldots
```
is probably not a good pseudorandom number generator. However, some clearly non-random sequences pass the basic frequency test:

``` latex
\{a_n\}_{n=1}^\infty = \{1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,\ldots\}
```

To detect such failures, we need more advanced tests. For example, we can split up the sequence into pairs of consecutive terms and ensure that these pairs are also approximately equally represented. Since $\\{1,2\\}$ appears often and $\\{2,1\\}$ never appears in $\\{a\_n\\}\_{n=1}^\infty$, the pair frequency test is sufficient to distinguish this sequence from a random one. We can apply the same idea with blocks of length 3 or 4 or more.

[Continue](btn:next)

---
> id: exercise-16

::: .exercise
**Exercise**  
Consider the sequence $\\{\mathrm{mod}(3\cdot2^n,11)\\}\_{n=1}^{100}$. Use Julia to show that each number from 1 to 10 appears exactly 10 times in this sequence. Also, use Julia to show that $a\_{2k}$ is smaller than $a\_{2k-1}$ for far more than half the values of $k$ from 1 to 50.
Hint: `{jl} countmap(a)` tells you how many times each element in the collection `{jl} a` appears. To use this function, do `{jl} using StatsBase` first.

Repeat these tests on the sequence whose $k$ th term is the $k$ th digit in the decimal representation of $\pi$: `{jl} reverse(digits(floor(BigInt,big(10)^99*π)))`.
:::

    x-quill

---
> id: solution-16

*Solution.* Only 10 of the 50 pairs have the even-indexed term larger than the odd-indexed term:

    pre(julia-executable)
      | using StatsBase
      | a = [6]
      | for i=1:99
      |   push!(a,mod(2a[end],11))
      | end
      | countmap(a) # every number appears 10 times
      | sum(a[2i] < a[2i-1] for i=1:50) # returns 40

Repeating with the digits of $\pi$, we find that 27 of the first hundred blocks of 2 have even-indexed digit smaller than the one before it.

[Continue](btn:next)

---
> id: step-cryptographic-security

A PRNG is *cryptographically secure* if an agent who knows the algorithm used to generate the numbers (but who does not know the value of the seed) cannot feasibly infer the $k$ the number generated based on observation of the first $k-1$ numbers generated.

Most PRNGs are not cryptographically secure. In other words, they hold up well under the scrutiny of *general* statistical tests, but not to tests which exploit knowledge of the specific algorithm used.

As a simple example of a PRNG that is not cryptographically secure, consider the digits of $\pi$ starting from some unknown position. This sequence does behave *statistically* as though it were random (as far as we know), but an adversary who knew you were using successive digits of $\pi$ would be able to use several values output by your PRNG to find your position and start anticipating subsequent values.

---

> id: automatic-differentiation
## Automatic Differentiation

Suppose that $f: \mathbb{R} \to \mathbb{R}$ is a function whose definition is too complicated for us to feasibly differentiate symbolically. Perhaps the most straightforward way to approximate the derivative of $f$ is to calculate the difference quotient

``` latex

  \frac{f(x + \epsilon) - f(x)}{\epsilon}

```
 a small value of $\epsilon$. However, this approach is very inaccurate because the subtraction step is ill-conditioned.

[Continue](btn:next)

---
> id: exercise-17

::: .exercise
**Exercise**  
Use difference quotients to approximate the derivative of $f(x) = x^2$ at $x = \frac{2}{3}$, with $\epsilon = 2^k$ as $k$ ranges from $-60$ to $-20$. What is the least error over these values of $k$? How does that error compare to machine epsilon?
:::

    pre(julia-executable)
      |

    x-quill

---
> id: solution-17

*Solution.* The block

    pre(julia-executable)
      | diffquotient(f,x,ϵ) = (f(x+ϵ) - f(x))/ϵ
      | m = minimum([abs(diffquotient(x->x^2,2/3,2.0^k) - 4/3) for k = -60:-20])

returns $2.48 \times 10^{-9}$. This error is more than *ten million* times larger than we could hope for just from roundoff error:

    pre(julia-executable)
      | m / (nextfloat(4/3) - 4/3)

The problem with difference quotients is that the relative error of $f(x+\epsilon) - f(x)$ blows up as $\epsilon \to 0$ (due to catastrophic cancellation). Larger values of $\epsilon$ are inaccurate because of truncation error. Even at the optimal value of $\epsilon$, the precision is still poor.

On the other hand, the problem of calculating the derivative of $f$ is well-conditioned as long as the condition number $|xf''(x)/f'(x)|$ of $f'(x)$ isn't too large. So the difference quotient algorithm is unstable, and we can hope for a stable alternative.

[Continue](btn:next)

---
> id: step-symbolic-differentiation

Another straightforward alternative to difference quotients is to calculate the derivative symbolically, the way introductory calculus students learn to do it. For example, the derivative of $x^2$ is $2x$. However, this approach quickly becomes untenable as the functions get sufficiently complicated, as is typically the case in modern machine learning applications.

Indeed, there is an approach to derivative computation which is precise, fast, and scalable: **automatic differentiation**. The idea is to replace Float64's with objects called **dual numbers** which track values and gradients at the same time.

[Continue](btn:next)

---
> id: step-dual-numbers-as-matrices

One concrete way to realize dual numbers is to use the matrix

``` latex
\begin{bmatrix} x & 1 \\ 0 & x \end{bmatrix}
```
in place of $x$ in the program that computes $f(x)$. This requires that any internal calculations performed by $f$ are able to handle $2 \times 2$ matrices as well as plain numbers. The matrix resulting from this calculation will be equal to

``` latex
\begin{bmatrix} f(x) & f'(x) \\ 0 & f(x) \end{bmatrix},
```
allowing us to read off the derivative as the top-right entry:

    pre(julia-executable)
      | f(x) = x^2 + 8x
      | f([5 1; 0 5])

::: .exercise
**Exercise**  
In this exercise, we will explain why

``` latex

    f\left(\begin{bmatrix} x & 1 \\ 0 & x \end{bmatrix}\right) =
    \begin{bmatrix} f(x) & f'(x) \\ 0 & f(x) \end{bmatrix},

```
for any polynomial $f$.
* Check that the above equation holds for the identity function (the function which returns its input) and for the function which returns the multiplicative identity (in other words, 1 for real numbers, or the identity matrix for matrices).
* Check that if the above equation holds for two differentiable functions $f$ and $g$, then it holds for the sum $f+g$ and the product $fg$.
* Explain why the above equation holds for any polynomial function $f(x)$.
:::

    x-quill

---
> id: solution-18

*Solution.*  
* If $f$ is the identity function, then both sides of the above equation reduce to $\begin{bmatrix} x & 1 \\\ 0 & x \end{bmatrix}$. If $f$ returns the multiplicative identity, then both sides reduce to the identity matrix.
* We have

``` latex

      \begin{bmatrix} f(x) & f'(x) \\ 0 & f(x) \end{bmatrix}
      \begin{bmatrix} g(x) & g'(x) \\ 0 & g(x) \end{bmatrix}
      = \begin{bmatrix} f(x)g(x) & f'(x)g(x) + f(x)g'(x) \\ 0 &
        f(x)g(x) \end{bmatrix},

```
which in turn is equal to $\begin{bmatrix} f(x)g(x) & (f(x)g(x))' \\\ 0 & f(x)g(x) \end{bmatrix}$ by the product rule. The result for $f+g$ works similarly, with linearity of the derivative in place of the product rule.
* The set of functions which satisfies the above equation includes $1$ and $x$ and is closed under multiplication and addition. Therefore, this set of functions at least includes all [[polynomials|exponentials|linear functions]].

[Continue](btn:next)

---
> id: step-analytic-functions

While the exercise above only addresses polynomial functions $f$, the relationship $f\left(\begin{bmatrix} x & 1 \\\ 0 & x \end{bmatrix}\right) =
\begin{bmatrix} f(x) & f'(x) \\\ 0 & f(x) \end{bmatrix}$ actually holds for many more functions, because many common functions may be described as limits of polynomials: if $A$ is a matrix, then

``` latex
\operatorname{e}^A = 1 + A + \frac{1}{2}A^2 + \frac{1}{6}A^3 + \cdots
```

Since the identity $f\left(\begin{bmatrix} x & 1 \\\ 0 & x \end{bmatrix}\right) = \begin{bmatrix} f(x) & f'(x) \\\ 0 & f(x) \end{bmatrix}$ is true for every truncation of the sum on the right-hand side, it's true for the exponential function as well.

[Continue](btn:next)

---
> id: exercise-19

::: .exercise
**Exercise**  
Use automatic differentiation to find the derivative of $f(x) = (x^4 - 2x^3 - x^2 + 3x - 1)e^{-x^4/4}$ at the point $x = 2$. Compare your answer to the true value of $f'(2)$. Hint: You'll want to define $f$ using

``` julia
using LinearAlgebra
f(t) = exp(-t^2/4) * (t^4 - 2t^3 - t^2 + 3t - I)
```

where `{jl} I` is an object in Julia which is defined to behave like multiplicative identity (note that subtracting the identity matrix is the appropriate matrix analogue of subtracting $1$ from a real number).

Also, to help check your answer, here's the symbolic derivative of $f$:

```julia
df(t) = (-t^5 + 2*t^4 + 9*t^3 - 15*t^2 - 3*t + 6) * exp(-t^2/4)/2
```
:::

    pre(julia-executable)
      |

    x-quill

---
> id: solution-19

*Solution.* We define $f$ as suggested and then calculate `{jl} f([2 1; 0 2])[1,2]`. The result is *exactly the same* as `{jl} df(2)` and $7.46 \times 10^{-17}$ different from `{jl} df(big(2))`. So we see that automatic differentiation gives a major improvement over the difference quotient approach in this instance.

In practice, you will usually want to use a library to perform automatic differentiation, because ensuring suitable dual-number-awareness of all of the functions called by $f$ can be a daunting task. Julia has several packages for this purpose, including `{jl} ForwardDiff`. In Python you can use `{py} autograd`, which works for all of the NumPy functions. (We note that these libraries don't actually use $2 \times 2$ matrices to represent dual numbers; they introduce a custom type which has the same behavior.)

---

> id: optimization
## Optimization

Optimization is an area of math with especially plausible real-world applicability, because folks understand that we generally *want things to be good*. If we can capture a meaningful notion of goodness in the form of a [mathematical function](gloss:model-accuracy), then optimization methods offer to tell us how to make things as good as possible.

Machine learning relies heavily on this pattern. We usually don't have any direct way to select a particular model for a given data set, but we have general classes of models which are often useful. We can choose a specific model from a class by capturing each model's failure to fit the data points in a function called the [[*loss*|*success*]]. We then appeal to general optimization methods to minimize the loss.

---
> id: step-grad-descent-intro

### Gradient descent

**Gradient descent** is an approach to finding the minimum of a differentiable function $f$ from $\mathbb{R}^n$ to $\mathbb{R}$. The basic idea is to repeatedly step in the direction of $-\nabla f$, since that is $f$'s direction of maximum decrease from a given point, beginning with some initial guess $\mathbf{x}\_0 \in \mathbb{R}^n$.

We can choose how large each step should be and when to stop. A common way to determine step size is to fix a **learning rate** $\epsilon$ and set $\mathbf{x}\_{n+1} = \mathbf{x}\_{n}- \epsilon \nabla
f(\mathbf{x}\_{n-1})$. Note that the size of the step naturally gets [[smaller|larger]] as we get closer to a local minimum, since the norm of the gradient [[decreases|increases]]. One way to choose when to terminate the algorithm is to set a threshold for the norm of the gradient of $f$.

---
> id: step-local-grad-descent

Gradient descent is fundamentally local: it is not guaranteed to find the global minimum since the search can get stuck in a local minimum. This point plays a significant role in deep learning, because loss functions in deep learning do not have unique minima.

    figure
      img(src="images/graddescent.svg")
      p.caption.md To find a local minimum of a function, we repeatedly take steps in the direction of maximum decrease. Results are shown for several starting points $\mathbf{x}\_0$.

[Continue](btn:next)

---
> id: exercise-20

::: .exercise
**Exercise**  
Consider the function $f(x) = (x^4 - 2x^3 - x^2 + 3x -1)e^{-x^2/4}$. Implement the gradient descent algorithm for finding the minimum of this function. To take derivatives, you can define a derivative function like `{jl} df(x) = ForwardDiff.derivative(f,x)`.

    img(src="images/polynomial-minimize.svg" alt="figure" width="400px" style="float: right;")

* If the learning rate is $\epsilon = 0.1$, which values of $x\_0$ have the property that $f(x\_n)$ is close to the global minimum of $f$ when $n$ is large?
* Is there a starting value $x\_0$ between $-2$ and $-1$ and a learning rate $\epsilon$ such that the gradient descent algorithm does not reach the global minimum of $f$? Use the graph for intuition.
:::

    pre(julia-executable)
      | using ForwardDiff
      |

    x-quill

---
> id: solution-20

*Solution.* The following is an implementation of gradient descent:

    pre(julia-executable)
      | using LinearAlgebra, ForwardDiff
      |
      | function graddescent(f,x₀,ϵ,threshold)
      |     df(x) = ForwardDiff.derivative(f,x)
      |     x = x₀
      |     while abs(df(x)) > threshold
      |         x = x - ϵ*df(x)
      |     end
      |     x
      | end
      | f(t) = exp(-t^2/4) * (t^4 - 2t^3 - t^2 + 3t - 1)

Trying various values of $x\_0$, and looking at the graph, we conjecture that the global minimum is reached when the starting value $x\_0$ is between the first two points where $f$ has a local maximum (approximately $-2.83$ and $0.145$). Between $0.145$ and the next local maximum (approximately $2.94$), the algorithm leads us to the local minimum around $x = 1.45$. Outside the interval from the first local maximum the last, the sequence of iterates appears to head off to $-\infty$ or $+\infty$.

Skipping over the global minimum to the local one requires choosing $\epsilon$ large enough that the first jump skips over the local maximum at $0.145$. A little experimentation shows that $x = -1.5$ and $\epsilon = 0.25$ works (among many other possibilities).

[Continue](btn:next)

---
> id: step-advanced-grad-descent

#### Advanced Gradient Descent Algorithms

There are many gradient-descent-based optimization algorithms that improve on plain gradient descent in various ways. In this section, we'll discuss a few of them at a high level, so that you can have a sense of what's going on when you select an appropriate method when making calls to optimization library functions.

[Continue](btn:next)

---
> id: step-newton-methods

One issue with gradient descent is that near a local minimum where the graph of the objective function is valley-like (having steep curvature in some directions and shallow curvature in others), gradient descent moves the iterates quickly to the valley but then slowly to the minimum from there. This can be mitigated by accounting for information about the objective function's *second* derivative; such methods are called **Newton** methods. Also popular are *quasi-Newton* methods, which avoid the expensive computation of the second derivative of the objective function while still making use of that information by approximating it using the gradients that have to be evaluated anyway. BFGS (Broyden- Fletcher-Goldfarb-Shanno) and L-BFGS (a low-memory variant of BFGS) are common quasi-Newton methods.

Common optimizers in deep learning include **Nesterov accelerated gradient**, which uses the idea of *momentum*: each step is taken based on a weighted average of the gradients at the current and preceding iterates. **RMSProp** directly addresses the valley problem by boosting the step size in coordinates with respect to which the partial derivative is small (and tempering the step size in coordinates with large derivative). **Adam** combines RMSProp with momentum.

::: .exercise
**Exercise**  

    img(src="images/rosenbrock.svg" alt="figure" width="250px" style="float: right;")

(a) By inspection, find the minimum of the **Rosenbrock** function
```latex
f(x,y) = (x-1)^2 + 100(y-x^2)^2
```

(b) Use the code cell below to find how many iterations the GradientDescent algorithm runs for on the Rosenbrock function, starting from the origin.

(c) Change `{jl} GradientDescent` to `{jl} BFGS`. Did it use fewer iterations? Was it more accurate?
:::

    pre(julia-executable)
      | using Optim
      | rosenbrock(x) =  (1.0 - x[1])^2 + 100.0 * (x[2] - x[1]^2)^2
      | optimize(rosenbrock, zeros(2), GradientDescent())

    x-quill

[Continue](btn:next)

---
> id: step-optim-solution

*Solution.* Based on the report printed when the `{jl} optimize` function runs, `{jl} GradientDescent` fails, taking the maximum-allowed 1000 iterations and getting only somewhat close to the minimum. BFGS converges in 16 iterations with only 53 function and 53 gradient calls, and it gets the answer exactly right.

[Continue](btn:next)

---
> id: convexity-optimization

### Convexity

A subset of $\mathbb{R}^n$ is **convex** if it contains every line segment connecting any two points in the set (for example, triangles, circles, and regular polygons are convex, while a star shape or an "L" would not be convex).

A function from $\mathbb{R}^n$ to $\mathbb{R}$ is **convex** if a line segment connecting any two points on its graph lies on or above the graph. For example, a function like $f(x,y) = x^2 + y^2$ with a bowl-shaped graph (<img src="images/smallbowl.svg">) is convex, while a function like $g(x,y) = x^2 - y^2$ with a saddle-shaped graph (<img src="images/smallsaddle.svg">) is not convex. A convex function is *strictly convex* if a line segment connecting any two points on its graph touches the graph only at the endpoints. You can check whether a smooth function is convex by checking whether its Hessian is positive semidefinite everywhere. If the Hessian is positive definite everywhere, then the function is also strictly convex.

[Continue](btn:next)

---
> id: step-convex-optimization-problem

A **convex optimization problem** is a problem of the form *find the minimum value of $f:A \to \mathbb{R}$*, where $f$ is convex and $A \subset \mathbb{R}^n$ is convex. Compared to general optimization, convex optimization is particularly well-behaved:

::: .theorem
**Theorem**  
If $f: A \to \mathbb{R}$ is convex and $A \subset \mathbb{R}^n$ is convex, then any local minimum of $f$ is also a global minimum of $f$. Furthermore, if $f$ is strictly convex, the $f$ has at most one local minimum.
:::

Convex optimization problems play an important role in applied math and data science, because (1) many optimization problems of interest can be expressed in the form of a convex optimization problem, and (2) specialized, fast numerical methods are available for such problems.

[Continue](btn:next)

---
> id: step-ipopt-example

::: .example
**Example**  
Use the Julia package `{jl} JuMP` with the `{jl} Ipopt` solver to find the minimum of the function $f(x,y) = x^2 + 2y^2$ on the half-plane $x + y \geq 1$.
:::

*Solution.* The JuMP model involves instantiating a `{jl} Model` object and then (1) creating variables, (2) adding constraints, (3) adding an objective function, (4) solving the problem, and (5) retrieving the values from the variable objects.

    pre(julia-executable)
      | using JuMP, Ipopt
      |
      | model = Model(with_optimizer(Ipopt.Optimizer, print_level=0))
      | @variable(model,x)
      | @variable(model,y)
      | @constraint(model, x + y ≥ 1)
      | @objective(model, Min, x^2 + 2y^2)
      | optimize!(model)
      | JuMP.value(x), JuMP.value(y)

The last line returns `{jl} (0.6666, 0.3333)`. You can confirm using the method of Lagrange multipliers that the correct answer is $(2/3, 1/3)$.

[Continue](btn:next)

---
> id: exercise-21

::: .exercise
**Exercise**  
Use JuMP to find the line of best fit for the points $(1,2), (2, 5),
  (4, 4)$. In other words, find the values $m$ and $b$ such that the sum of squared vertical distances from these three points to the line $y = mx + b$ is minimized.
:::

    pre(julia-executable)
      |

    x-quill

---
> id: solution-21

*Solution.* We can follow the same approach, but we don't have to use any constraints:

    pre(julia-executable)
      | using JuMP, Ipopt
      |
      | A = [1 2; 2 5; 4 5]
      | model = Model(with_optimizer(Ipopt.Optimizer, print_level=0))
      | @variable(model,m)
      | @variable(model,b)
      | @objective(model, Min, sum([(y - m*x - b)^2 for (x,y) in eachrow(A)]))
      | optimize!(model)
      | JuMP.value(m), JuMP.value(b)

---

> id: parallel-computing
## Parallel Computing

Parallel computing involves decomposing a computational task into subtasks which may be performed concurrently.

::: .example
**Example**  
The problem of adding the numbers in an array is readily *parallelizable*, since we can subdivide the array, sum the values in each smaller array, and add up the resulting sums at the end.
:::

You can start a Julia session with $n$ worker processes via `{jl} julia -p n` and loading the distributed computing tools with `{jl} using Distributed`.
* `{jl} pmap(f,A)` applies the function `{jl} f` to each element of the collection `{jl} A`, taking advantage of the available worker processes. For example, to check the primality of the positive integers up to 100,000 in parallel:

      pre(julia-executable)
        | using Distributed, Primes
        | pmap(isprime,2:100_000)

* If `{jl} (op)` is an operator, then `{jl} @distributed (op) for ... end` assigns a subrange of the given `{jl} for` loop to each worker. The values returned by the body of the loop are combined using the operator `{jl} op`. For example, to sum a million random Gaussians in parallel fashion:

      pre(julia-executable)
        | using Distributed
        | @distributed (+) for i=1:1_000_000
        |   randn()
        | end

[Continue](btn:next)

---
> id: step-13final

Congratulations! You have finished the Data Gymnasia numerical computation course.
