# Machine Arithmetic

## Floating Point Arithmetic

> section: introduction
> id: intro

Let's start with a simple question.

In Python, the output of _{code}1.1 + 2.2 == 3.3_ is [[False|True]].

---
> id: whats-the-answer

What is _{code}1.1 + 2.2_ then? 

According to Python, the answer is [[3.3000000000000003|3.3000000000000000|3.4]].

---
> id: pause-and-ponder

That's strange. Why do you think this is the case?

[Continue](btn:next)

---
> id: why

This answer is actually rooted in the way computers represent numbers and perform arithmetic. Thus, if we want to perform large scale computations of any kind, it's important that we understand the places where machine arithmetic can lead us astray.

Weird floating point errors have been responsible for [many costly mistakes](https://www.nsc.liu.se/wg25/book/ch1/) in human history, most notably in the [Patriot Missile failure](https://www.nsc.liu.se/wg25/book/ch1/) and the [explosion of the Ariane 5](http://www-users.math.umn.edu/~arnold/disasters/ariane.html).

---
> section: number-line
> id: construct-num-line

## The Floating Point Number Line

We'll start off by thinking about how we represent floating point numbers.

First, consider a number line, whose ticks increase in width exponentially.
    
    figure.video-wrap
      iframe(src="https://www.youtube.com/embed/DirrjvBYt_E" frameborder=0 allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen)

This is how we choose to represent floating point numbers since most numbers we work with are [[closer to|farther from]] zero.

---
> id: example-num

How do we calculate where a number is? Let's look at an example.

    figure.video-wrap
      iframe(src="https://www.youtube.com/embed/UK_Yfs3_lng" frameborder=0 allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen)

For a given number, we follow a process to find where it is on the number line:
* Find the closest power of 2 (smaller than the number)
* Count up tick marks until you hit the number

[Continue](btn:next)

---
> id: formula-on-line

More specifically, 0.75 is calculated in the following way.

    figure.video-wrap
      iframe(src="https://www.youtube.com/embed/kppfswPWytc" frameborder=0 allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen)

The equation we're working with here is:

\begin{equation} 
(-1)^{\sigma}(\text{starting power of 2} + \text{tick width} * \text{number of ticks})
\end{equation} 

Our sign bit is __$0$__, since $0.75$ is positive. We start at the largest power of 2 smaller than $0.75$, which is $2^{-1}$, or __$0.5$__.

Recall that the original tick width, that is the size of the ticks between $1$ and $2$ are of size $\frac{1}{4}$. Since our ticks are scaled exponentially, the ticks between $0.5$ and $1$ are half the size of the ticks between $1$ and $2$, which gives us $\frac{1}{2} * \frac{1}{4} = $ __$\frac{1}{8}$__ as the tick width.

To get from $0.5$ to $0.75$, we move up __$2$__ ticks, since $2 * \frac{1}{8} = \frac{1}{4}$.

This gives us:

$$(-1)^{0}(2^{-1} + \frac{1}{8} * 2)$$
$$(\frac{1}{2} + \frac{1}{8} * 2)$$
$$\frac{1}{2} + \frac{1}{4}$$
$$\frac{3}{4}$$




---
## Calculating Floating Point Numbers
> section: how-to-calculate
> id: in-reality

In reality, we have a lot of numbers, so we don't divide the range between 1 and 2 into 4 sections. Instead, we divide it with [[$2^{52}$|$2^{64}$|$2^{128}$]] ticks.

---
> id: in-reality-video

That's right! We divide the section between 1 and 2 into $2^{52}$ sections, then scale those ticks accordingly for each interval.

    figure.video-wrap
      iframe(src="https://www.youtube.com/embed/zNwvChJFfCE" frameborder=0 allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen)

[Continue](btn:next)

---
> id: formula-meaning

As you can see, the formula for calculating floating point numbers can be written as follows:

\begin{equation}
(-1)^{\sigma}(2^{e-1023}+2^{e-1023}2^{52}f)
\end{equation}

What does this formula mean?

    figure.video-wrap
      iframe(src="https://www.youtube.com/embed/-BAoa7oOCKM" frameborder=0 allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen)

[Continue](btn:next)

---
> id: example-num-2

Feel free to play with values of $e$ and $f$ to see how the two values can express an astronimcal range of numbers.

``` latex
(-1)^{\sigma}(2^{e-1023}+2^{e-1023}2^{52}f)
```

__$\sigma$__: ${sigma}{sigma|1|0,1,1}

__$e - 1023$__ (_starting exponent of 2_): ${e1023}{e1023|0|-1023,1024,1}

$e$: ${e1023 + 1023}

__$f$__ (_number of ticks_): ${f}{f|1|0,128,1}

2^${e1023} + 2^${e1023} * 2^52 * ${f}

${Math.pow(2, e1023)} + ${Math.pow(2, e1023) * Math.pow(2, 52)} * ${f}

__decimal__: ${Math.pow(-1, sigma) * Math.pow(2, e1023) + Math.pow(2, e1023) * Math.pow(2, 52) * f}
    
