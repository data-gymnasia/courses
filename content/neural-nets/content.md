
# Neural Networks

> id: intro
## Introduction

Neural networks have witnessed great success over the past few decades in areas
ranging from physics to computer vision. Much of this success can be attributed
to their ability to model complex behavior using a relatively simple framework.
We will present neural networks through the lens of mathematics while
emphasizing an intuitive understanding of their behavior. Additionally,
computational examples will be given in the Python programming language.

A neural network is simply a *function approximator.* Suppose we have a set
of fMRI brain scans where some of the scans have an anomaly present and the
others do not. Normally, a trained physician would have to look at the image
to diagnose any pathologies, but suppose we would like to automate this process.
We will assume each image has been labeled as either 0 or 1, where a label of 0
implies there are no anomalies in the corresponding scan and 1 implies there
is an anomaly. The most intuitive way of automating this process is to somehow
construct a function that takes as input one of the scans and returns either 0
or 1 with the desired result.

Assuming each scan is of size $m \times n$ where each pixel value is  
between 0 and 1 (1 is white and 0 is black), we seek a function
$f: [0,1]^{mn} \to \\\{0,1\\\}$. Note that $f$ takes a vector of size $mn$ as input;
an $m \times n$ image can be transformed into such a vector by stacking each
row of the image vertically as shown below:

    figure
      img(src="images/image_to_vector.svg")

We will begin our study of neural networks in the context of classification
and will begin with the simplest network: the *perceptron.* At its core, the
perceptron consists of an *affine function*.

::: .definition
**Definition**  

An *affine function* $f: \mathbb{R}^n \to \mathbb{R}^m$ is a function that can
be written in the form

``` latex
f(x) = Ax + b
```

where $A \in \mathbb{R}^{m \times n}$ and $b \in \mathbb{R}^m$.  
:::

A perceptron is the composition of an indicator function,
$\sigma: \mathbb{R} \to \\\{0,1\\\}$,
and an affine function $f: \mathbb{R}^n \to \mathbb{R}$.
$\sigma$ is defined by

``` latex
\sigma(x) =
\begin{cases}
1, & \text{ if } x > 0 \\
0, & \text{ otherwise.}
\end{cases}
```

$f$ is defined by

``` latex
f(x) &= w^Tx + b
```

where the elements of $w \in \mathbb{R}^n$ are called weights and
$b \in \mathbb{R}$ is called the bias. Suppose $b = 0$. Then the output of
the perceptron would be 1 if $w^Tx > 0$. However, it may be the be the case that
we want the output to be 1 when $w^Tx > k$ for some nonzero $k \in \mathbb{R}$.
This is what the bias is meant to capture.
The output of the perceptron for input $x$ is theregore given by
$\sigma(f(x)) = \sigma(w^Tx + b)$..

When we introduce more complicated networks, it will be useful to depict
them diagrammatically. A perceptron can be represented as follows:

    figure
      img(src="images/perceptron_diagram.svg")

The circles in these types of diagrams are called *nodes* and they represent
a real number; this number is called the node's *activation*. Each arrow
also represent a real number called a *weight*. A column of nodes is typically
called a *layer*. Each node that has arrows coming into it also has a
real number (not shown in the diagram) associated to it called a *bias*.

This particular perceptron diagram can be interpreted as follows: First, an
input $x \in \mathbb{R}^n$ where $x = [x_1, x_2, \ldots, x_n]^T$ is fed
through the network. Each $x_i$ is then multiplied by a weight $w_i$ and then
summed. Afterwards, a bias term is added to this summation so that we have
$\sum_{i=1}^n w_ix_i + b$ which can be written in vector form as $w^Tx + b$.
Finally, this term is passed to the function $\sigma$ so that the output of the
network is $\sigma(w^Tx + b)$.

The process of taking an input $x$ and feeding it through a network to obtain
an output is called a *forward pass*.

::: .exercise
**Exercise**  

Consider a perceptron with weights $w = [3, -1, 1]^T$ and bias $b = 1$.
Compute a forward pass for $x = [2, 0, 5]^T$.
:::

*Solution.*
The forward pass is given by
``` latex
w^Tx + b &= (3)(2) + (-1)(0) + (1)(5) + 1 \\
&= 12.
```

Because the output of the perceptron is determined by the sign of the quantity
$w^Tx + b$, it is an example of a *linear classifier*. This means that a
perceptron will perform well when the data is linearly separable. We can
visualize what the perceptron algorithm does by plotting the function
$g(x) = w^Tx + b$. For example, for $w = [1, -2, 1]^T$ and $b = -\frac{1}{5}$,
we obtain the plot below:

    figure
      img(src="images/perceptron_lc.svg")

A perceptron that takes inputs in $\mathbb{R}^n$ simply defines a hyperplane
in the same space and classifies points based on whether the point lies above
or below the plane.

Given a set of data $X_1, X_2, \ldots, X_m \in \mathbb{R}^n$
with corresponding labels
$Y_1, Y_2, \ldots, Y_m$, the goal of the perceptron is to find the weights
$w \in \mathbb{R}^n$ and bias $b \in \mathbb{R}$ that best linearly partition
the data. The algorithm used to find $b$ and $w$ is called the *perceptron
algorithm.*

Suppose we have initialized $w$ and $b$ randomly. Given data pair $(X_i, Y_i)$
we would like to update $b$ and $w$ to perform better on this point. We will
consider two cases. Let $\hat{Y}_i = \sigma(w^TX_i + b)$ be the output
of the perceptron after inputting $X_i$.

*Case 1.*  Suppose that  $\hat{Y}_i = Y_i$—that is, the perceptron gives the
correct output—then we do not need to make any changes to $w$ and $b$ so they
remain the same.

*Case 2.* Now suppose that $\hat{Y_i} \neq Y_i$. There are now two subcases
we must consider.

*Case 2a.* Suppose that $\hat{Y_i} = 0$ and $Y_i = 1$. Since
$\hat{Y_i} = 0$, this means $w^TX_i + b \leq 0$. Moreover, because $Y_i = 1$,
we want to have $w^TX_i + b > 0$ so that we get the correct output. We will
first consider how to update $b$. At the moment we have that $w^TX_i + b \leq 0$
and would like to have $w^TX_i + b > 0$. To help this happen, it makes sense to
make $b$ larger. In fact, we will simply increment $b$ by 1. Now consider the
$k$th element of $w$ and $X_i$, $w_k$ and $X_{ik}$, respectively. Because we
compute $w_kX_{ik}$, to make this quantity bigger it makes sense to either
increase $w_k$ if $X_{ik} > 0$, or to make $w_k$ smaller if $X_{ik} < 0$.
As such, we will increment $w_k$ by $X_{ik}$. In short, when
$\hat{Y_i} = 0$ and $Y_i = 1$, we will add $X_i$ to $w$ and increment $b$ by 1.

*Case 2a.* Now suppose that $\hat{Y_i} = 1$ and $Y_i = 0$. Since
$\hat{Y_i} = 1$, this means $w^TX_i + b > 0$. Because $Y_i = 0$,
we want to have $w^TX_i + b \leq 0$ so that we get the correct output. We will
again first consider how to update $b$. Since we want to make $w^TX_i + b$
smaller, we will decrease $b$ by 1. Once again, if we want to make the quantity
$w_kX_{ik}$ smaller, we will need to either increase $w_k$ if $X_{ik} \leq 0$
or decrease $w_k$ if $X_{ik} > 0$. Thus, in this case, we will subtract
$X_i$ from $w$ and decrement $b$ by 1.

Below is a summary of the perceptron algorithm used to find $w$ and $b$:

    figure
      img(src="images/perceptron_algorithm.svg")
      p.caption.md Perceptron Algorithm

Below we provide a python implementation of the perceptron and make use of the
dataset available here [https://raw.githubusercontent.com/data-gymnasia/courses/master/content/neural-nets/code/datasets/lin_sep_d1.csv].

``` python
import pandas as pd
import numpy as np

# Updates the weights W and b once for each data point
# Inputs:
# - data: The set of data points: X_1, X_2, ..., X_m
# - labels: The set of labels for each data point: Y_1, Y_2, ..., Y_m
# - W: The weight vector of the same size as X_i
# - b: The bias
# Outputs:
# A tuple consisting of the updated weights and bias
def single_epoch(data, labels, W, b):
    num_rows, num_cols = data.shape
    for i in range(num_rows):
        x_i = np.reshape(data[i,:], (num_cols, 1))
        output = (np.vdot(W, x_i) + b) > 0
        diff = labels[i] - output
        W = W + np.multiply(diff, x_i)
        b = b + diff
    return (W,b)

# Trains the perceptron with the specified number of epochs
# Inputs:
# - train_data: The set of training data X_1, X_2, ..., X_m
# - train_labels: The set of labels for each data Y_1, Y_2, ..., Y_m
# - num_epochs: An integer (> 0) specifying the number of epochs to run
# Outputs:
# A tuple consisting of the trained weights and biases
def train(train_data, train_labels, num_epochs):
    num_rows, num_cols = train_data.shape

    # Initialize weights and biases
    weights = np.zeros((num_cols, 1))
    bias = 0
    for i in range(num_epochs):
        shuffled_indices = np.random.permutation(num_rows)
        weights, bias = single_epoch(train_data[shuffled_indices,:], train_labels[shuffled_indices], weights, bias)
    return (weights,bias)

# Computes the accuracy of the provided test data
# Inputs:
# - test_data: The dataset whose accuracy we want to compute
# - test_labels: The labels for the test dataset
# - W: The weights of the perceptron
# - b: The bias of the perceptron
# Outputs:
# The accuracy of the perceptron on the provided test set
def test_accuracy(test_data, test_labels, W, b):
    accuracy = 0.0
    num_rows, num_cols = test_data.shape
    for i in range(num_rows):
        x_i = np.reshape(test_data[i,:], (num_cols, 1))
        output = (np.vdot(W, x_i) + b) > 0
        accuracy += (output == test_labels[i])
    return accuracy/num_rows



# Load dataset
data_dir = "lin_sep_d1.csv"
dataset = pd.read_csv(data_dir, index_col = [0])
num_rows, num_cols = dataset.shape
data_matrix = dataset.iloc[:,0:(num_cols-1)].values
labels = dataset.iloc[:,num_cols-1].values

# Define training and testing data
training_data = data_matrix[1:800,:]
training_labels = labels[1:800]
testing_data = data_matrix[800:,:]
testing_labels = labels[800:]

W,b = train(training_data, training_labels, 30)
test_accuracy = test_accuracy(testing_data, testing_labels, W, b)
print(test_accuracy)
```

An *epoch* consists of an iteration through an entire dataset. For the
perceptron, performing one epoch means we update $W$ and $b$ once for each
$(X_i, Y_i)$ pair. In the code above we perform 30 epochs, shuffling the data
each time. Moreover, we use the first 800 data points as training data and the
remaining 200 as test data.

The provided dataset is linearly separable and hence performs well, easily
achieving $> 99\\\%$ accuracy. To achieve $100\\\%$ accuracy we could use
$w = [1, -2, 5, 2.5, -1]^T$ and $b = 0$ as this was the hyperplane used to
generate the labels. However, after running the provided code we see that
one possible way of obtaining $99\\\%$ accuracy on the test set is by
using $w = [26.784, -77.697, 163.522, 79.604, -37.386]^T$ and $b = -50$.
This illustrates an important consequence of using perceptrons as linear
classifiers: when trained on a linearly separable dataset, the perceptron
is guaranteed to converge to *some* solution, but not necessarily the true
linear partition that divides the data. One way of resolving this is to use
support vector machines (SVMs). However, we will soon see how we can augment
the perceptron to perform better (assuming a large enough dataset) than
SVMs and other classic machine learning algorithms like logistic regression.

---
> id: mlp
## Multilayer Perceptron

In this section we will build upon the perceptron. In particular, we saw that
the perceptron is a way of approximating a function with an affine function.
Here we will introduce a way of approximating any function (in theory) given
sufficient data.

### Two-layer Perceptron

The perceptron is a binary classifier, always outputting either 0 or 1, but
what if we have multi-class data that can assume any label in the set
$\\\{1, 2, \ldots, k\\\}$? Suppose the data pair $(X_i, Y_i)$ is such that
$Y_i \in \\\{0, 1, \ldots, k\\\}$. We can represent this label with a vector
in $\\\{0,1\\\}^k$. For example, if $Y_i = 3$ and $k = 5$, then we can represent
the label of $X_i$ as $[0,0,1,0,0]$. Such a vector consisting of all 0s
except one index which is 1 is called a *one-hot encoded* vector. Then the
output of a network after inputting $X_i$ may be something like
$[0.1, 0.2, 0.3, 0.2, 0.2]$ where the index of the largest value represents
the true label—in this case, 3. First, to create a network that outputs a
vector instead of a single number like the perceptron did, we will simply
add additional "perceptrons" to the final output layer. We say "perceptrons"
because the activation function, $\sigma$, introduced in the previous section
will change to a different function so it is not really a perceptron.
Diagrammatically, we will have something like the following:

    figure
      img(src="images/mlp_1l_diagram.svg")

In the diagram above, $a_i^{\ell}$ represents the activation of the $i$th
neuron of the $\ell\text{th}$ layer; note that the input layer is layer 1.
The activation vector of layer $\ell$ is denoted by
$a^{\ell} = [a^\ell_1, a^\ell_2, \ldots, a^\ell_{n_{\ell}}]^T$. Moreover,
$w^\ell_{ij}$ is the weight from the $j$th neuron of layer $\ell - 1$ to the
$i$th neuron of layer $\ell$; the reason for this "reversed" indexing
is to avoid the use of a transpose when we construct the matrix of weights.
Moreover, each neuron—except those in the input layer—have a bias
$b^\ell_i \in \mathbb{R}$ where the $\ell$ superscript denotes the $\ell$th
layer. The bias vector for the $\ell$th layer
(not shown in the diagram) is denoted by
$b^\ell = [b^\ell_1, b^\ell_2, \ldots, b^\ell_{n_{\ell}}]^T$.
The number of neurons in the $\ell$th layer is given by $n_{\ell}$.

In the above we have introduced a two-layer network. We can use this network as
a multi-class classifier. For example, after inputting $x$, we will have the
output $[a^2_1, a^2_2, \ldots, a^2_{n_2}]^T$ where
$[a^1_1, a^1_2, \ldots, a^1_{n_1}] = x$ and

``` latex
a^2_i = \sigma([w^1_{i1}, w^1_{i2}, \ldots, w^1_{in_1}]
[a^1_1, a^1_2, \ldots, a^1_{n_1}]^T + b^2_i).
```

$\sigma: \mathbb{R} \to \mathbb{R}$ is called an *activation function*.
A common choice is the *sigmoid function* given below:

``` latex
\sigma(x) &= \frac{1}{1 + e^{-x}}
```

which looks like

    figure
      img(src="images/sigmoid_plot.svg")

Compare the sigmoid function above to the activation function used in the
perceptron:

    figure
      img(src="images/perceptron_activation_plot.svg")

Note that the former can be thought of as a "smoothed" version of the
activation function used in the perception. This is important because we
will be differentiating this function to find the weights.

Now note that the activations of the second layer,
$a^2 = [a^2_1, a^2_2, \ldots, a^2_{n_2}]^T$, can be written as

``` latex
a^2 = \tilde{\sigma}(W^2a^1 + b^2)
```

where $W^1 \in \mathbb{R}^{n_2 \times n_1}$ is defined as

``` latex
W^2 &=
\begin{bmatrix}
w^2_{11} & w^1_{12} & \cdots & w^2_{1n_1} \\
w^2_{21} & w^2_{22} & \cdots & w^2_{2n_1} \\
\vdots & \vdots & \ddots & \vdots \\
w^2_{n_21} & w^2_{n_22} & \cdots & w^2_{n_2n_1}
\end{bmatrix}
```

and $\tilde{\sigma}(\cdot)$ applies $\sigma$ to each element in its input
vector. To assign a label to the input $x$, we simply return the index
of the largest element in $a^2$:

``` latex
\hat{Y} = \text{argmax}_i \; \tilde{\sigma}(W^2a^1 + b^2).
```

::: .exercise
**Exercise**  

Consider the two-layer network below:

    figure
      img(src="images/mlp_ex_1.svg")

with bias vector $b^2 = [1,2,1]^T$.
Compute a forward pass of the input $x = [0.25, 0.5, 0.25, 0.3]^T$ using the
sigmoid activation function.
:::

*Solution.*
For illustrative purposes, we first compute each activation individually:

``` latex
a^2_1 &= [w^2_{11}, w^2_{12}, w^2_{13}, w^2_{14}]x + b^2_1 \\
&= [0.5, 0.25, 0.8, 0.5]
\begin{bmatrix}
0.25 \\ 0.5 \\ 0.25 \\ 0.3
\end{bmatrix}
+ 1 \\
&= 1.6 \\
a^2_2 &= [w^2_{21}, w^2_{22}, w^2_{23}, w^2_{24}]x + b^2_2 \\
&= [0.1, 0.1, 0.2, 0.6]
\begin{bmatrix}
0.25 \\ 0.5 \\ 0.25 \\ 0.3
\end{bmatrix}
+ 2 \\
&= 2.305 \\
a^2_3 &= [w^2_{31}, w^2_{32}, w^2_{33}, w^2_{34}]x + b^2_3 \\
&= [0.5, 0.4, 0.2, 1]
\begin{bmatrix}
0.25 \\ 0.5 \\ 0.25 \\ 0.3
\end{bmatrix}
+ 1 \\
&= 1.675
```

Thus the output of the network is:

``` latex
a^2 &= \tilde{\sigma}([1.6, 2.305, 1.675]^T) \\
&= [\sigma(1.6), \sigma(2.305), \sigma(1.675)]^T \\
&\approx
[0.832, 0.909, 0.842]^T.
```

We can expedite the computation by first defining the weight matrix

``` latex
w^2 &=
\begin{bmatrix}
w^2_{11} & w^2_{12} & w^2_{13} & w^2_{14} \\
w^2_{21} & w^2_{22} & w^2_{23} & w^2_{24} \\
w^2_{31} & w^2_{32} & w^2_{33} & w^2_{34}
\end{bmatrix} \\
&=
\begin{bmatrix}
0.5 & 0.25 & 0.8 & 0.5 \\
0.1 & 0.1 & 0.2 & 0.6 \\
0.5 & 0.4 & 0.2 & 1
\end{bmatrix}.
```

We thus have

``` latex
a^2 &= \tilde{\sigma}(W^2x + b^2) \\
&\approx
\begin{bmatrix}
0.832 \\
0.909 \\
0.842
\end{bmatrix}
```

In the next section we will discuss in detail the mathematical properties of
neural networks and their ability to approximate functions. For now, it suffices
to say that, in general, more complicated networks are capable of approximating
more complex functions. Next we extend our discussion to MLPs with an arbitrary
number of layers.

### Hidden Layers

It is easy to add more complexity to the two-layer network introduced above
by simply adding more layers to the network. For example, a three-layer
MLP might look as follows:

    figure
      img(src="images/mlp_3l_diagram.svg")

The first layer, as before, is called the input layer. The final layer, in
this case the third one, is called the output layer. All layers in between
the first and last are called *hidden layers*; in the network above there
is only one hidden layer: layer 2.

The network above has three activation layers: $a^1 \in \mathbb{R}^{n_1}$, the
input layer; $a^2 \in \mathbb{R}^{n_2}$, the hidden layer; and
$a^3 \in \mathbb{R}^{n_3}$, the output layer. Each activation layer
is specified by a weight matrix and a bias. We have

``` latex
a^2 &= \tilde{\sigma}(W^2a^1 + b^2) \\
a^3 &= \tilde{\sigma}(W^3a^2 + b^3)
```

where

``` latex
W^2 &=
\begin{bmatrix}
w^2_{11} & w^2_{12} & \cdots & w^2_{1n_1} \\
w^2_{21} & w^2_{22} & \cdots & w^2_{2n_1} \\
\vdots & \vdots & \ddots & \vdots \\
w^2_{n_11} & w^2_{n_22} & \cdots & w^2_{n_2n_1}
\end{bmatrix} \\ \\
W^3 &=
\begin{bmatrix}
w^3_{11} & w^3_{12} & \cdots & w^3_{1n_2} \\
w^3_{21} & w^3_{22} & \cdots & w^3_{2n_2} \\
\vdots & \vdots & \ddots & \vdots \\
w^3_{n_31} & w^3_{n_32} & \cdots & w^3_{n_3n_2}
\end{bmatrix}.
```

### Backpropagation

So far we have discussed how a neural network takes an input and gives an
output, but this presupposes we know the weights and biases of the network.
In this section we will discuss an algorithm called *backpropagation* which
is the underlying mechanics that allows us to take a labeled dataset and
"learn" a set of weights and biases that will allow the network to make
reasonable predictions on unseen data; the process of taking data and learning
the appropriate weights and biases is called *training*.

Before proceeding, it will be helpful to first define some notation. We will
assume that we have initialized a network with random weights and biases
(typically with values close to zero) and that it has $L$ layers. As such, the
output of the network is the output of the $L$th layer, which we will denote
$a^L \in \mathbb{R}^{n_L}$. The activation of layer $\ell$ will be denoted
$a^{\ell} = \tilde{\sigma}(W^{\ell}a^{\ell-1} + b^{\ell})$ where $W^{\ell}$
and $b^{\ell}$ are the weights and biases, respectively, of the $\ell$th layer.
Note that because we refer to the input layer as layer 1, we will assume
$\ell \in \\\{2,3,\ldots, L\\\}$ and $a^1$ will represent the input vector.
The quantity $W^{\ell}a^{\ell-1} + b^{\ell}$ will appear frequently in our
analysis so we will label it $z^{\ell} = W^{\ell}a^{\ell-1} + b^{\ell}$;
the vector $z^{\ell}$ is typically referred to as the "weighted input" to the
neurons in the $\ell$th layer. Note also that the $j$th element of $z^{\ell}$
is given by
$z^\ell_j = \sum_{k=1}^{n_{\ell - 1}} w_{jk}^{\ell}a_k^{\ell - 1} + b^{\ell}_j$.
To summarize, for $\ell \in \\\{2,3, \ldots, L\\\}$ we have

``` latex
z^{\ell} &= W^{\ell}a^{\ell-1} + b^{\ell} \\
z^\ell_j &=
\sum_{k=1}^{n_{\ell - 1}} w_{jk}^{\ell}a_k^{\ell - 1} + b^{\ell}_j \\
a^{\ell} &= \tilde{\sigma}(W^{\ell}a^{\ell-1} + b^{\ell}) =
 \tilde{\sigma}(z^\ell).
```

Perhaps the most important step of the training process is in the definition
of the *loss function*. The loss function provides a means of quantifying the
error of our predictions and then using this to update the weights and
biases to minimize the error. As such, the goal of training the network is to
find the weights and biases that minimize the loss function. If we assume that
the loss function is differentiable, then we can find the minimizer using
basic calculus. Unfortunately, it is not always feasible to obtain a closed-form
solution to the minimization problems. Consequently, we will aim to minimize the
function by utilizing numerical methods—in particular—gradient descent.

There are a wide array of loss functions that we can use. We will call the
loss function $C$ (it sometimes referred to as a "cost" function) and assume
it is differentiable. For now, we will work with the mean squared error function
given by

``` latex
C &= \frac{1}{2n}\sum_{i=1}^n ||a^L(X_i) - Y_i||_2^2.
```

Our goal is to find the weights and biases that make $C$ as small as possible.
Since we will rely on gradient descent methods, we will need to compute
$\frac{\partial C}{\partial W^{\ell}}$ and
$\frac{\partial C}{\partial b^{\ell}}$ for each
$\ell \in \\\{2,3, \ldots, L\\\}$.

It will be useful to define $C_i := \frac{1}{2}||a^L(X_i) - Y_i||^2_2$ so
that we have $C = \frac{1}{n}\sum_{i=1}^n C_i$. It follows that

``` latex
\frac{\partial C}{\partial W^{\ell}} &= \frac{1}{n}\sum_{i=1}^n
\frac{\partial C_i}{\partial W^{\ell}} \\
\frac{\partial C}{\partial b^{\ell}} &= \frac{1}{n}\sum_{i=1}^n
\frac{\partial C_i}{\partial b^{\ell}}
```

so we will focus on computing $\frac{\partial C_i}{\partial W^{\ell}}$
and $\frac{\partial C_i}{\partial b^{\ell}}$. We will be making extensive use
of the chain rule from calculus and it will be useful to construct tree
diagrams of the function $C_i$ and its dependencies. For example, suppose
we would like to compute $\frac{\partial C_i}{\partial w^L_{21}}$, that is,
the derivative of $C_i$ with respect to the weight connecting the first
neuron in the $(L-1)$th layer to the second neuron in the $L$th layer.
Note that we have

``` latex
C_i &= \frac{1}{2}\sum_{k=1}^{n_L} (a^L_k(X_i) - Y_i^k)^2
```

where $Y_i^k$ is the $k$th element of the vector $Y_i$. So we have that
$C_i$ is a function of $a_1^L(X_i), a_2^L(X_i), \ldots, a_{n_L}^L(X_i)$
which in turn are functions of $z_1^L, z_2^L, \ldots, z_{n_L}^L$, respectively.
Further, $z_j^L$ is a function of
$b_j^L, w_{j1}^L, w_{j2}^L, \ldots, w_{jn_{L-1}}^L$. Diagrammatically, we can
represent this dependence structure as shown in the figure below:

    figure
      img(src="images/loss_function_tree_1.svg")

The diagram above makes it very easy to compute the derivative of interest.
In particular, to compute $\frac{\partial C_i}{\partial w^L_{21}}$,
we simply locate the term $w^L_{21}$ and differentiate along this path. So
we have:

``` latex
\frac{\partial C_i}{\partial w^L_{21}} &=
\frac{\partial C_i}{\partial a_2^L} \frac{\partial a_2^L}{\partial z_2^L}
\frac{\partial z_2^L}{\partial w_{21}^L}
```

This simply gives us a visual way of applying the chain rule. With the diagram
above we also see that for any weight $w_{jk}^L$ in the $L$th layer we have

``` latex
\frac{\partial C_i}{\partial w^L_{jk}} &=
\frac{\partial C_i}{\partial a_j^L} \frac{\partial a_j^L}{\partial z_j^L}
\frac{\partial z_j^L}{\partial w_{jk}^L} \\
&=
\frac{\partial C_i}{\partial z_j^L}
\frac{\partial z_j^L}{\partial w_{jk}^L}.
```

Similarly, for arbitrary bias in the $L$th layer $b_j^L$,

``` latex
\frac{\partial C_i}{\partial b_j^L} &=
\frac{\partial C_i}{\partial a_j^L} \frac{\partial a_j^L}{\partial z_j^L}
\frac{\partial z_j^L}{\partial b_j^L} \\
&=
\frac{\partial C_i}{\partial z_j^L}
\frac{\partial z_j^L}{\partial b_j^L}.
```

Now, since $z^L_j = \sum_{m=1}^{n_{L - 1}} w_{jm}^{L}a_m^{L - 1} + b^{L}_j$,
we have

``` latex
\frac{\partial z_j^L}{\partial w_{jk}^L} &= a_k^{L-1}
\quad \text{ and } \quad
\frac{\partial z_j^L}{\partial b_j^L} = 1.
```
Combining this result with the previous equations, we have

``` latex
\frac{\partial C_i}{\partial w^L_{jk}} &=
\frac{\partial C_i}{\partial z_j^L} a_k^{L-1} \\
\frac{\partial C_i}{\partial b^L_j} &=
\frac{\partial C_i}{\partial z_j^L}.
```

::: .exercise
**Exercise**  

Show that for arbitrary layer $\ell \in \\\{2,3, \ldots, L\\\}$ we have

``` latex
\frac{\partial C_i}{\partial w^\ell_{jk}} &=
\frac{\partial C_i}{\partial z_j^\ell} a_k^{\ell-1} \\
\frac{\partial C_i}{\partial b^\ell_j} &=
\frac{\partial C_i}{\partial z_j^\ell}.
```
:::

As the previous example and derivation shows, the quantity
$\frac{\partial C_i}{\partial z_j^\ell}$ appears frequently and as such we will
define $\delta_j^\ell := \frac{\partial C_i}{\partial z_j^\ell}$; we avoid
adding the index of $i$ to $\delta_j^\ell$ to avoid excess notation
but it should be understood that we are operating under a fixed $(X_i, Y_i)$
pair. With this notation, we have

``` latex
\frac{\partial C_i}{\partial w^\ell_{jk}} &=
\delta_j^\ell a_k^{\ell-1} \\
\frac{\partial C_i}{\partial b^\ell_j} &=
\delta_j^\ell.
```

We will first compute $\delta_j^L$. From the previous diagram, it is clear
that

``` latex
\frac{\partial C_i}{\partial z_j^L} &=
\frac{\partial C_i}{\partial a_j^L} \frac{\partial a_j^L}{\partial z_j^L}.
```

Since $C_i = \frac{1}{2}\sum_{k=1}^{n_L} (a^L_k(X_i) - Y_i^k)^2$, it follows

``` latex
\frac{\partial C_i}{\partial a_j^L} &= a_j^L(X_i) - Y_i^j.
```

Also, because $a_j^L = \sigma(z_j^L)$, it follows

``` latex
\frac{\partial a_j^L}{\partial z_j^L} &= \sigma'(z_j^L).
```

Putting these together we have

``` latex
\delta_j^L &= \left[a_j^L(X_i) - Y_i^j\right] \sigma'(z_j^L).
```

We will define $\delta^L \in \mathbb{R}^{n_L}$ as
$\delta^L := [\delta_1^L, \delta_2^L, \ldots, \delta_{n_L}^L]^T$. From the
above we have

``` latex
\delta^L &= \left[a^L(X_i) - Y_i\right] \odot \tilde{\sigma}'(z^L)
```

where $\tilde{\sigma}'(z^L)$ applies $\sigma'$ to each element of $z^L$ and
$\odot$ denotes the *Hadamard* product: for $x,y \in \mathbb{R}^n$,
$(x \odot y) \in \mathbb{R}^n$ is the element-wise product of $x$ and $y$,
that is, $x \odot y = [x_1y_1, x_2y_2, \ldots, x_ny_n]^T$.

To summarize, we have found

``` latex
\frac{\partial C_i}{\partial z_j^L} &= \delta^L =
\left[a^L(X_i) - Y_i\right] \odot \tilde{\sigma}'(z^L).
```

We now turn our attention towards computing
$\delta_j^{L-1} := \frac{\partial C_i}{\partial z_j^{L-1}}$. Suppose we would
like to compute $\delta_1^{L-1}$. We will again construct a tree diagram to
compute this derivative:

    figure
      img(src="images/loss_function_tree_2.svg")

From above, we have that

``` latex
\delta_1^{L-1} &=
\frac{\partial C_i}{\partial a_1^L}\frac{\partial a_1^L}{\partial z_1^L}
\frac{\partial z_1^L}{\partial a_1^{L-1}}
\frac{\partial a_1^{L-1}}{\partial z_1^{L-1}} +
\frac{\partial C_i}{\partial a_2^L}\frac{\partial a_2^L}{\partial z_2^L}
\frac{\partial z_2^L}{\partial a_1^{L-1}}
\frac{\partial a_1^{L-1}}{\partial z_1^{L-1}} + \cdots +
\frac{\partial C_i}{\partial a_{n_L}^L}
\frac{\partial a_{n_L}^L}{\partial z_{n_L}^L}
\frac{\partial z_{n_L}^L}{\partial a_1^{L-1}}
\frac{\partial a_1^{L-1}}{\partial z_1^{L-1}} \\
&= \sum_{k=1}^{n_L}
\frac{\partial C_i}{\partial a_k^L}\frac{\partial a_k^L}{\partial z_k^L}
\frac{\partial z_k^L}{\partial a_1^{L-1}}
\frac{\partial a_1^{L-1}}{\partial z_1^{L-1}} \\
&= \sum_{k=1}^{n_L}
\delta_k^L
\frac{\partial z_k^L}{\partial a_1^{L-1}}
\frac{\partial a_1^{L-1}}{\partial z_1^{L-1}}.
```

More generally, we have

``` latex
\delta_j^{L-1} &=
\sum_{k=1}^{n_L} \delta_k^L \frac{\partial z_k^L}{\partial a_j^{L-1}}
\frac{\partial a_j^{L-1}}{\partial z_j^{L-1}}.
```

Now, because $z_k^L = \sum_{m=1}^{n_{L-1}} w_{km}^L a_m^{L-1} + b_k^L$ and
$a_j^{L-1} = \sigma(z_j^{L-1})$, we have

``` latex
\frac{\partial z_k^L}{\partial a_j^{L-1}} = w_{kj}^L
\quad \text{ and } \quad
\frac{\partial a_j^{L-1}}{\partial z_j^{L-1}} = \sigma'(z_j^{L-1}).
```

Thus,

``` latex
\delta_j^{L-1} &=
\sum_{k=1}^{n_L} \delta_k^L w_{kj}^L \sigma'(z_j^{L-1}).
```

Rearranging terms we have

``` latex
\delta_j^{L-1} &=
\left(\sum_{k=1}^{n_L} w_{kj}^L \delta_k^L \right) \sigma'(z_j^{L-1}) \\
&= \left[\left(W^L\right)^T \delta^L \right]_j \sigma'(z_j^{L-1}).
```

Letting $\delta^{L-1} =
[\delta_1^{L-1}, \delta_2^{L-1}, \ldots, \delta_{n_{L-1}}^{L-1}]^T$, from above
it follws

``` latex
\delta^{L-1} &=
\left[\left(W^L\right)^T \delta^L \right] \odot \tilde{\sigma}'(z^{L-1}).
```

By continuing the tree diagram from before, we can show that

``` latex
\delta^{L-2} &= \left[\left(W^{L-1}\right)^T \delta^{L-1}\right]
\odot
\tilde{\sigma}'(z^{L-2}).
```

More generally, for $\ell \in \\\{2, 3, \ldots, L-1\\\}$ we have

``` latex
\delta^\ell &= \left[\left(W^{\ell + 1}\right)^T \delta^{\ell + 1}\right]
\odot
\tilde{\sigma}'(z^{\ell}).
```

To summarize, we have shown

``` latex
\delta^L &=
\left[a^L(X_i) - Y_i\right] \odot \tilde{\sigma}'(z^L) \\
\delta^\ell &= \left[\left(W^{\ell + 1}\right)^T \delta^{\ell + 1}\right]
\odot
\tilde{\sigma}'(z^{\ell}), \quad \ell \in \{2,3 \ldots, L -1\}.
```

::: .exercise
**Exercise**

Show that the equations

``` latex
\frac{\partial C_i}{\partial w^\ell_{jk}} &=
\delta_j^{\ell} a_k^{\ell-1} \\
\frac{\partial C_i}{\partial b^\ell_j} &=
\delta_j^{\ell}.
```

can be written in matrix form as

``` latex
\frac{\partial C_i}{\partial W^\ell} &=
\delta^{\ell} \left(a^{\ell-1}\right)^T \\
\frac{\partial C_i}{\partial b^\ell} &=
\delta^\ell
```

for $\ell \in \\\{2,,3 \ldots, L\\\}$.
:::

With the above, we can summarize the backpropagation equations as follows:

``` latex
\delta^L &=
\left[a^L(X_i) - Y_i\right] \odot \tilde{\sigma}'(z^L) \\
\delta^\ell &= \left[\left(W^{\ell + 1}\right)^T \delta^{\ell + 1}\right]
\odot
\tilde{\sigma}'(z^{\ell}), \quad \ell \in \{2,3 \ldots, L -1\} \\
\frac{\partial C_i}{\partial W^\ell} &=
\delta^{\ell} \left(a^{\ell-1}\right)^T \\
\frac{\partial C_i}{\partial b^\ell} &=
\delta^\ell.
```

With the above equations, we are ready to present how to update the weights of
a neural network given some training dataset
$(X_1, Y_1), (X_2, Y_2), \ldots, (X_n, Y_n)$ where $X_i$ is a vector and
$Y_i \in \mathbb{N}_{\geq 0}$.
 Assuming we have initialized
the weights $W_0^2, W_0^3, \ldots, W_0^L$ and biases
$b_0^2, b_0^3, \ldots, b_0^L$ we will update the weights according to the
algorithm below:

    figure
      img(src="images/backprop_pseudo_cropped.svg")

### Stochastic Gradient Descent and Batch Updates

In the section above we showed how to update the weights and biases so as to
reduce the error of the loss function. Before implementing this, there are a few
things we first need to address. First we address the issue of the dataset
size. In particular, the algorithm above will have go through each data point
and will produce a single update to the weights, which, for large $n$, can be
very slow. A simple solution to this would be to take the dataset and
split it into $t$ disjoint subsets of size $s$ and then apply the algorithm
from the  previous section to each of these subsets so that we obtain $m$
updates to the weights. Ideally, the gradients obtained in each of the $t$
updates would approximate the gradient that we would have obtained if we had
used the entire dataset. Suppose we construct the subsets by taking the first
$s$ points, then the next $s$ points and so on.
Then, if the data is ordered in such a way
that data points with similar labels are clustered together, then it is possible
that some of the $t$ subsets will have similar labels and hence will not
adequately capture the heterogeneity of the dataset. To mitigate this,
we will first shuffle the data and then proceed to select the subsets; this
is equivalent to constructing the subsets by randomly sampling $s$ points
(without replacement).

Once the $t$ subsets have been created, we will apply the algorithm in the
previous section to each subset so that we update the weights a total of
$t$ times. These subsets are typically referred to as *batches* or
*mini-batches*. The process of shuffling—or randomly sampling—the data
and updating the weights according to the previous algorithm is known
as *stochastic gradient descent (SGD)*. The process of going through
all $t$ batches and updating the weights $t$ times is called an *epoch*.

By constructing the batches we are essentially speeding up the learning time
as we are allowing for more updates to the weights for each epoch. By
constructing the batches randomly we are guaranteeing that the gradient of
the batch will converge to the true gradient of the entire dataset
(asymptotically).

In practice, we typically specify the size of the batches, i.e., $s$, and
$t$ is simply the number of times the dataset can be split into batches
of size $s$ (it is normal to have a single batch that is not of size $s$
since $s$ may not be a factor of $n$). A standard value for $s$ is 32.
It is normal to go through several epochs, randomly constructing the
batches each time.

In the next section we give a Python implementation of the algorithm described
here and apply to it to the class MNIST dataset.


---
> id: mnist
## MNIST Example

### MNIST Dataset
In this section we will use the MNIST (pronounced "em-nist") dataset to train
a neural network to recognize hand-written digits on a $28 \times 28$ grid.
The dataset consists of 60,000 training images and 10,000 test images.
Two example images are shown below:

    figure
      img(src="images/mnist_ex_0.svg")
      img(src="images/mnist_ex_1.svg")


The dataset can be downloaded by following the instructions
[here](https://pypi.org/project/python-mnist/).

### Implementation
The implementation of the MLP will be in Python and we will begin by
constructing a class for our MLP. It is important to keep in mind that the code
presented here favors readability over efficiency. Moreover, this implementation
is for the sake of understanding the mechanics of the backpropagation and
SGD algorithms. Naturally, the reader is encouraged to implement these
algorithms before seeing the provided implementation.

We will construct our class so that the number of layers is variable and
as such we will store our weights and biases in a list and keep a count
of the number of layers as they are added. We will also assume the size
of the input vector is given and fixed. The code below produces the desired
initialization:

``` python
def __init__(self, input_size, learning_rate):
    self.weights = []
    self.biases = []
    self.input_size = input_size
    self.num_layers = 1
    self.learning_rate = learning_rate
```

Next we add the code that allows us to add layers of a given size to the
network. Since the weights for the new layer is a matrix whose size is
determined by the previous layer and the current layer, we first determine the
appropriate size and then initialize the weights randomly and append it to the
list of weights:

``` python
def add_layer(self, k):
    # Check if network only has one (input) layer
    if not self.weights:
        previous_size = self.input_size
    else:
        previous_size = np.shape(self.weights[-1])[0]

    self.weights.append(np.random.normal(size = (k, previous_size)))
    self.biases.append(np.random.normal(size = (k, 1)))
    self.num_layers += 1
```

We now need a function that takes an input and passes it through the network,
storing each activation along the way. In our previous notation, this
corresponds to returning $a^1, a^2, \ldots, a^L$:

``` python
def forward_pass(self, input):
    current_activation = np.reshape(input, (len(input), 1))
    activations = [current_activation]
    for (W, b) in zip(self.weights, self.biases):
        current_activation = self.sigmoid(np.matmul(W, current_activation) + b)
        activations.append(current_activation)
    return activations
```

We are almost ready to implement the backpropagation algorithm, we simply need
to define some functions that will calculate $\tilde{\sigma}$ and
$\tilde{\sigma}'$ as well as a function that computes the Hadamard product of
two vectors:

``` python
def sigmoid(self, x):
    applied_sigmoid = [1/(1 + math.exp(-x_i)) for x_i in x]
    return np.reshape(applied_sigmoid, (len(applied_sigmoid), 1))

def sigmoid_derivative(self, x):
    applied_sigmoid_derivative = [math.exp(-x_i)/math.pow(1+math.exp(-x_i), 2) for x_i in x]
    return np.reshape(applied_sigmoid_derivative, (len(applied_sigmoid_derivative),1))

def hadamard(self, x, y):
    prod = [x_i*y_i for (x_i, y_i) in zip(x,y)]
    return np.reshape(prod, (len(prod), 1))
```

Our backpropagation function will take an image and its corresponding label
as arguments. In our notation, this function returns
$\frac{\partial C_i}{\partial W^2}, \frac{\partial C_i}{\partial W^3}, \ldots,
\frac{\partial C_i}{\partial W^L}$ and
$\frac{\partial C_i}{\partial b^2}, \frac{\partial C_i}{\partial b^3}, \ldots,
\frac{\partial C_i}{\partial b^L}$:

``` python
def backprop(self, x, y):
    L = self.num_layers - 2
    activations = self.forward_pass(x)
    W_L = self.weights[L]
    b_L = self.biases[L]
    a_L = activations[L]

    y = np.reshape(y, (len(y),1))
    z_L = np.matmul(W_L, activations[L]) + b_L
    delta_L = self.hadamard(activations[L+1] - y, self.sigmoid_derivative(z_L))

    nabla_W_L = np.matmul(delta_L, np.transpose(a_L))
    nabla_b_L = delta_L

    w_gradients = [nabla_W_L]
    b_gradients = [nabla_b_L]

    delta_previous = delta_L

    for l in xrange(L-1, -1, -1):
        W_l = self.weights[l]
        W_l_1 = self.weights[l+1]
        z_l = np.matmul(W_l, activations[l]) + self.biases[l]
        delta_l = self.hadamard(np.matmul(np.transpose(W_l_1), delta_previous), self.sigmoid_derivative(z_l))

        nabla_W_l = np.matmul(delta_l, np.transpose(activations[l]))
        nabla_b_l = delta_l

        w_gradients.append(nabla_W_l)
        b_gradients.append(nabla_b_l)

        delta_previous = delta_l

    return (w_gradients[::-1], b_gradients[::-1])
```

Since the code above operates on a single image, we now write the function
that will take a batch of images and applies the backpropagation algorithm
to the entire batch:

``` python
def batch_update(self, batch):
    n = len(batch)
    w_gradients = []
    b_gradients = []

    avg_w_gradients = []
    avg_b_gradients = []

    for i in range(self.num_layers - 1):
        avg_w_gradients.append(np.zeros_like(self.weights[i]))
        avg_b_gradients.append(np.zeros_like(self.biases[i]))

    for x in batch:
        wg, bg = self.backprop(x[0], x[1])
        for i in range(self.num_layers - 1):
            avg_w_gradients[i] = avg_w_gradients[i] + np.multiply(1.0/n, wg[i])
            avg_b_gradients[i] = avg_b_gradients[i] + np.multiply(1.0/n, bg[i])

    for i in range(self.num_layers - 1):
        self.weights[i] = self.weights[i] - np.multiply(self.learning_rate, avg_w_gradients[i])
        self.biases[i] = self.biases[i] - np.multiply(self.learning_rate, avg_b_gradients[i])

    return (self.weights, self.biases)
```

We now simply need to write the function that returns the batches for the
given epoch:

``` python
def get_batches(self, n, batch_size):
    indices = np.random.permutation(n)
    batches = []
    num_full_batches = int(np.floor(n/batch_size))
    for i in range(num_full_batches):
        batches.append(indices[i*batch_size:(i+1)*batch_size])

    if num_full_batches*batch_size != n:
        batches.append(indices[num_full_batches*batch_size:])
    return batches
```

Finally, we write code that goes through a specified number of epochs and
monitors the performance of our network on the test data:

``` python
def compute_accuracy(self, data):
    accuracy = 0.0
    for d in data:
        x, y = d
        y_hat = np.argmax(self.forward_pass(x)[-1])
        accuracy += (np.argmax(y) == y_hat)
    return accuracy/len(data)

def train(self, training_data, num_epochs, testing_data = None):
    training_size = len(training_data)
    if testing_data is not None:
        print("Initial test accuracy: {}".format(self.compute_accuracy(testing_data)))
    else:
        print("Initial training accuracy: {}".format(self.compute_accuracy(training_data)))

    for epoch in range(num_epochs):
        batches = self.get_batches(training_size, 32)
        for batch_indices in batches:
            training_batch = [training_data[i] for i in batch_indices]
            self.batch_update(training_batch)
        if testing_data is not None:
            print("Done with epoch {}/{}. Test accuracy: {}".format(epoch+1, num_epochs, self.compute_accuracy(testing_data)))
        else:
            print("Done with epoch {}/{}. Training accuracy: {}".format(epoch+1, num_epochs, self.compute_accuracy(training_data)))
```

Putting all of this together, we have the following class:

``` python
import numpy as np
import math

class MLP:

    def __init__(self, input_size, learning_rate):
        self.weights = []
        self.biases = []
        self.input_size = input_size
        self.num_layers = 1
        self.learning_rate = learning_rate

    def add_layer(self, k):
        # Check if network only has one (input) layer
        if not self.weights:
            previous_size = self.input_size
        else:
            previous_size = np.shape(self.weights[-1])[0]

        self.weights.append(np.random.normal(size = (k, previous_size)))
        self.biases.append(np.random.normal(size = (k, 1)))
        self.num_layers += 1

    def forward_pass(self, input):
        current_activation = np.reshape(input, (len(input), 1))
        activations = [current_activation]
        for (W, b) in zip(self.weights, self.biases):
            current_activation = self.sigmoid(np.matmul(W, current_activation) + b)
            activations.append(current_activation)
        return activations

    def sigmoid(self, x):
        applied_sigmoid = [1/(1 + math.exp(-x_i)) for x_i in x]
        return np.reshape(applied_sigmoid, (len(applied_sigmoid), 1))

    def sigmoid_derivative(self, x):
        applied_sigmoid_derivative = [math.exp(-x_i)/math.pow(1+math.exp(-x_i), 2) for x_i in x]
        return np.reshape(applied_sigmoid_derivative, (len(applied_sigmoid_derivative),1))

    def hadamard(self, x, y):
        prod = [x_i*y_i for (x_i, y_i) in zip(x,y)]
        return np.reshape(prod, (len(prod), 1))

    def backprop(self, x, y):
        L = self.num_layers - 2
        activations = self.forward_pass(x)
        W_L = self.weights[L]
        b_L = self.biases[L]
        a_L = activations[L]

        y = np.reshape(y, (len(y),1))
        z_L = np.matmul(W_L, activations[L]) + b_L
        delta_L = self.hadamard(activations[L+1] - y, self.sigmoid_derivative(z_L))

        nabla_W_L = np.matmul(delta_L, np.transpose(a_L))
        nabla_b_L = delta_L

        w_gradients = [nabla_W_L]
        b_gradients = [nabla_b_L]

        delta_previous = delta_L

        for l in xrange(L-1, -1, -1):
            W_l = self.weights[l]
            W_l_1 = self.weights[l+1]
            z_l = np.matmul(W_l, activations[l]) + self.biases[l]
            delta_l = self.hadamard(np.matmul(np.transpose(W_l_1), delta_previous), self.sigmoid_derivative(z_l))

            nabla_W_l = np.matmul(delta_l, np.transpose(activations[l]))
            nabla_b_l = delta_l

            w_gradients.append(nabla_W_l)
            b_gradients.append(nabla_b_l)

            delta_previous = delta_l

        return (w_gradients[::-1], b_gradients[::-1])

    def batch_update(self, batch):
        n = len(batch)
        w_gradients = []
        b_gradients = []

        avg_w_gradients = []
        avg_b_gradients = []

        for i in range(self.num_layers - 1):
            avg_w_gradients.append(np.zeros_like(self.weights[i]))
            avg_b_gradients.append(np.zeros_like(self.biases[i]))

        for x in batch:
            wg, bg = self.backprop(x[0], x[1])
            for i in range(self.num_layers - 1):
                avg_w_gradients[i] = avg_w_gradients[i] + np.multiply(1.0/n, wg[i])
                avg_b_gradients[i] = avg_b_gradients[i] + np.multiply(1.0/n, bg[i])

        for i in range(self.num_layers - 1):
            self.weights[i] = self.weights[i] - np.multiply(self.learning_rate, avg_w_gradients[i])
            self.biases[i] = self.biases[i] - np.multiply(self.learning_rate, avg_b_gradients[i])

        return (self.weights, self.biases)

    def get_batches(self, n, batch_size):
        indices = np.random.permutation(n)
        batches = []
        num_full_batches = int(np.floor(n/batch_size))
        for i in range(num_full_batches):
            batches.append(indices[i*batch_size:(i+1)*batch_size])

        if num_full_batches*batch_size != n:
            batches.append(indices[num_full_batches*batch_size:])
        return batches

    def compute_accuracy(self, data):
        accuracy = 0.0
        for d in data:
            x, y = d
            y_hat = np.argmax(self.forward_pass(x)[-1])
            accuracy += (np.argmax(y) == y_hat)
        return accuracy/len(data)

    def train(self, training_data, num_epochs, testing_data = None):
        training_size = len(training_data)
        if testing_data is not None:
            print("Initial test accuracy: {}".format(self.compute_accuracy(testing_data)))
        else:
            print("Initial training accuracy: {}".format(self.compute_accuracy(training_data)))

        for epoch in range(num_epochs):
            batches = self.get_batches(training_size, 32)
            for batch_indices in batches:
                training_batch = [training_data[i] for i in batch_indices]
                self.batch_update(training_batch)
            if testing_data is not None:
                print("Done with epoch {}/{}. Test accuracy: {}".format(epoch+1, num_epochs, self.compute_accuracy(testing_data)))
            else:
                print("Done with epoch {}/{}. Training accuracy: {}".format(epoch+1, num_epochs, self.compute_accuracy(training_data)))
```

We can load the MNIST dataset and train a network using the code below:

``` python
import numpy as np
from MLP.MLP import MLP
from mnist import MNIST
import math

mndata = MNIST('python-mnist/data')
train_images, train_labels = mndata.load_training()
test_images, test_labels = mndata.load_testing()

train_x = []
train_y = []
test_x = []
test_y = []

for i in range(len(train_images)):
    train_x.append(np.reshape(np.multiply(1.0/255, train_images[i]), 28*28))
    y = np.zeros(10)
    y[train_labels[i]] = 1
    train_y.append(y)

for i in range(len(test_images)):
    test_x.append(np.reshape(np.multiply(1.0/255, test_images[i]), 28*28))
    y = np.zeros(10)
    y[test_labels[i]] = 1
    test_y.append(y)

training_data = zip(train_x, train_y)
testing_data = zip(test_x, test_y)

network = MLP(28*28, 3)
network.add_layer(32)
network.add_layer(32)
network.add_layer(10)

network.train(training_data, 30, testing_data)

```

here we have used a three-layer network of relatively arbitrary sizes
(except for the last). With this network we can obtain $> 95\%$ accuracy
on the test set.

Although applicable to other datasets, the provided implementation is quite
limited. For example, the network above uses the same sigmoid activation
function in every layer and requires we specify its derivative. Deep learning
frameworks such as TensorFlow allows us to more quickly construct and train
neural networks while handling all the differentiation for us. In the next
section we will see how to recreate this example using TensorFlow.

---
> id: uat
## Universal Approximation Theorem

At this juncture it may be tempting to assume that most machine learning
problems can be solved using neural networks and sufficient data. However,
it is important to understand the expressive power of neural networks.

We will begin our discussion by trying to "learn" a positive-valued polynomial using a neural network.

::: .exercise
**Exercise**  

Modify the MLP code from the previous section so that the activation function
used is the ReLU function given by

``` latex
f(x) &=
\begin{cases}
x, & \textrm{ if } x > 0 \\
0, & \textrm{ otherwise.}
\end{cases}
```

Then, using this dataset [INSERT DOWNLOAD LINK HERE], train a neural network for
1000 epochs and then make a plot of the obtained function for
$x \in \left[-\frac{5}{2}, 2\right]$ (Be sure to change the computation of the
    accuracy to the computation of the loss since this is not a classification
    problem).
:::

*Solution.* We use the following MLP class:

``` python
import numpy as np
import math

class MLP:

    def __init__(self, input_size, learning_rate):
        self.weights = []
        self.biases = []
        self.input_size = input_size
        self.num_layers = 1
        self.learning_rate = learning_rate

    def add_layer(self, k):
        # Check if network only has one (input) layer
        if not self.weights:
            previous_size = self.input_size
        else:
            previous_size = np.shape(self.weights[-1])[0]

        self.weights.append(np.random.normal(size = (k, previous_size)))
        self.biases.append(np.random.normal(size = (k, 1)))
        self.num_layers += 1

    def forward_pass(self, input):
        if hasattr(input, '__len__'):
            current_activation = np.reshape(input, (len(input), 1))
        else:
            current_activation = np.reshape(input, (1, 1))
        activations = [current_activation]
        for (W, b) in zip(self.weights, self.biases):
            current_activation = self.relu(np.matmul(W, current_activation) + b)
            activations.append(current_activation)
        return activations

    def relu(self, x):
        applied_relu = [x_i*(x_i > 0) for x_i in x]
        return np.reshape(applied_relu, (len(applied_relu), 1))

    def relu_derivative(self, x):
        applied_relu_derivative = [x_i > 0 for x_i in x]
        return np.reshape(applied_relu_derivative, (len(applied_relu_derivative), 1))

    def hadamard(self, x, y):
        prod = [x_i*y_i for (x_i, y_i) in zip(x,y)]
        return np.reshape(prod, (len(prod), 1))

    def backprop(self, x, y):
        L = self.num_layers - 2
        activations = self.forward_pass(x)
        W_L = self.weights[L]
        b_L = self.biases[L]
        a_L = activations[L]

        if hasattr(y, '__len__'):
            y = np.reshape(y, (len(y),1))
        else:
            y = np.reshape(y, (1,1))

        z_L = np.matmul(W_L, activations[L]) + b_L
        delta_L = self.hadamard(activations[L+1] - y, self.relu_derivative(z_L))

        nabla_W_L = np.matmul(delta_L, np.transpose(a_L))
        nabla_b_L = delta_L

        w_gradients = [nabla_W_L]
        b_gradients = [nabla_b_L]

        delta_previous = delta_L

        for l in xrange(L-1, -1, -1):
            W_l = self.weights[l]
            W_l_1 = self.weights[l+1]
            z_l = np.matmul(W_l, activations[l]) + self.biases[l]
            delta_l = self.hadamard(np.matmul(np.transpose(W_l_1), delta_previous), self.relu_derivative(z_l))

            nabla_W_l = np.matmul(delta_l, np.transpose(activations[l]))
            nabla_b_l = delta_l

            w_gradients.append(nabla_W_l)
            b_gradients.append(nabla_b_l)

            delta_previous = delta_l

        return (w_gradients[::-1], b_gradients[::-1])

    def batch_update(self, batch):
        n = len(batch)
        w_gradients = []
        b_gradients = []

        avg_w_gradients = []
        avg_b_gradients = []

        for i in range(self.num_layers - 1):
            avg_w_gradients.append(np.zeros_like(self.weights[i]))
            avg_b_gradients.append(np.zeros_like(self.biases[i]))

        for x in batch:
            wg, bg = self.backprop(x[0], x[1])
            for i in range(self.num_layers - 1):
                avg_w_gradients[i] = avg_w_gradients[i] + np.multiply(1.0/n, wg[i])
                avg_b_gradients[i] = avg_b_gradients[i] + np.multiply(1.0/n, bg[i])

        for i in range(self.num_layers - 1):
            self.weights[i] = self.weights[i] - np.multiply(self.learning_rate, avg_w_gradients[i])
            self.biases[i] = self.biases[i] - np.multiply(self.learning_rate, avg_b_gradients[i])

        return (self.weights, self.biases)

    def get_batches(self, n, batch_size):
        indices = np.random.permutation(n)
        batches = []
        num_full_batches = int(np.floor(n/batch_size))
        for i in range(num_full_batches):
            batches.append(indices[i*batch_size:(i+1)*batch_size])

        if num_full_batches*batch_size != n:
            batches.append(indices[num_full_batches*batch_size:])
        return batches


    def evaluate_loss(self, test_data):
        loss = 0
        for test in test_data:
            x, y = test
            y_hat = self.forward_pass(x)[-1]
            loss += np.linalg.norm(y-y_hat)**2
        return loss

    def train(self, training_data, num_epochs, testing_data = None):
        training_size = len(training_data)
        if testing_data is not None:
            print("Initial test loss: {}".format(self.evaluate_loss(testing_data)))
        else:
            print("Initial training loss: {}".format(self.evaluate_loss(training_data)))

        for epoch in range(num_epochs):
            batches = self.get_batches(training_size, 32)
            for batch_indices in batches:
                training_batch = [training_data[i] for i in batch_indices]
                self.batch_update(training_batch)
            if testing_data is not None:
                print("Done with epoch {}/{}. Test loss: {}".format(epoch+1, num_epochs, self.evaluate_loss(testing_data)))
            else:
                print("Done with epoch {}/{}. Training loss: {}".format(epoch+1, num_epochs, self.evaluate_loss(training_data)))

```

To train and plot the output of the network we use the code below:

``` python
import numpy as np
from MLP.MLP import MLP
import matplotlib.pyplot as plt
import pandas as pd
import math

file_dir = "poly_1.csv"

dataset = pd.read_csv(file_dir).to_numpy()

train_x = dataset[:,0]
train_y = dataset[:,1]
training_data = zip(train_x, train_y)

network = MLP(1, 0.01)
network.add_layer(10)
network.add_layer(10)
network.add_layer(1)

network.train(training_data, 1000)

x_values = np.linspace(-1.5, 2, 100)
true_y = np.zeros(100)
pred_y = np.zeros(100)

for i in range(100):
    x = x_values[i]
    y_true = x**4 - 4*x**2 + .5*x + 12
    y_predicted = network.forward_pass(x)[-1][0][0]
    true_y[i] = y_true
    pred_y[i] = y_predicted

plt.plot(x_values, true_y)
plt.plot(x_values, pred_y)
plt.show()

```

Note that we have used a network with two hidden layers, each with ten neurons
and a learning rate of 0.01.

The true polynomial is $g(x) = x^4 - 4x^2 + \frac{1}{2}x + 12$. Letting
$h(x)$ represent the output of the network, we obtain the following plot:

    figure
      img(src="images/mlp_poly_1.svg")

The value of the loss function after 1000 iterations is approximately 2
(this is highly dependent on the initialization of the weights) and from
the plot above we see that the network approximates the polynomial fairly well
considering the relatively small size of the dataset.

In the example above, the domain of the data was in the interval
$\left[-\frac{3}{2}, 2\right]$; of course, we should not expect the neural
network to be able to correctly approximate the polynomial outside of this
interval. Indeed, for the interval $[2,3]$ we obtain something like the
following:

    figure
      img(src="images/mlp_poly_2.svg")

This is a consequence of the expressive power of neural networks: for functions
in $\mathbb{R}^n$, a neural network can approximate functions on a closed
and bounded subset of $\mathbb{R}^n$. In this example, it was implicitly
assumed that the function we were trying to learn was bounded in the interval
$\left[-\frac{3}{2}, 2\right]$.

We now formally present the theorem that summarizes the expressive power of
(feed-forward) neural networks:

::: .theorem
**Theorem**  

Let $\phi: \mathbb{R} \to \mathbb{R}$ be an activation function assumed to be
non-constant, continuous, and bounded. Let $C([0,1]^m)$ be the set of
real-valued continuous functions on the $m$-dimensional hypercube $[0,1]^m$.
Then for any $\epsilon > 0$ and $f \in C([0,1]^m)$, there exists an
$N \in \mathbb{N}_{> 0}$

:::

---
> id: tf
## TensorFlow

In this section we introduce the [TensorFlow](https://www.tensorflow.org)
framework. The previous MNIST example illustrated the tedious nature of writing
deep learning programs from scratch. Moreover, the functionality of what we
wrote was quite limited in scope. TensorFlow (TF) abstracts much of what we did 
in the previous section and allows us to build much more complex models. 

*Remark.* At the time of writing, the most recent TF version is 2.1, which
we will be using along with Python 3.6.x.  

### Basics
TF is a framework available across multiple programming languages;
here we will use Python to  interact with TF. It should be noted that much of
the underlying code for TF is written in C++ and the choice of language to call
TF-in our case, Python-does not make much of a difference with respect to
runtime. 

TF consists of two components: 1. A library which defined a *computational graph* and 2.
A runtime which executes the computational graph. To define a computational graph,
first consider the Python code below:

``` python
x = 5.0
y = 15.0
sumXY = x + y
divXY = y/x 
ans = divXY/sumXY
print(ans)
```

When we run the code above, each step is done sequentially: first, x is defined, followed by;
then, the sum of x and y is computed and then their quotient and so on. Note that 
$\texttt{sumXY}$ and $\texttt{divXY}$ are independent, i.e., their values do not depend on each other. 
TF aims to expedite computations by parallelizing *operations* that are independent 
of each other. It accomplishes this by constructing a computational graph. When we run
code that calls the TF API, the TF library constructs this graph and identifies the
smallest subset of the graph that needs to be run to get the desired result. We
can visualize the computational graph of the program above as shown below:

    figure
      img(src="images/tf_cg_ex_1.svg")

The nodes of the computational graph are called *operations* while the (directed) edges
are called *tensors.* Tensors can be regarded as multidimensional arrays that "flow" through
the edges of the computational graph. When this graph is constructed, not every operation
in the graph is carried out-in fact, not all values are defined until they are called or
needed. Below is how we would write the code above using the TF API:

``` python
import tensorflow as tf

x = tf.constant(5.0)
y = tf.constant(15.0)
sumXY = x + y 
divXY = y/x 
ans = divXY/sumXY
print(ans)
```

Except for the first two lines, the code above is identical to the previous one.
However, unlike the previous code, when we run this one, the values 
$\texttt{x}$, $\texttt{y}$, $\texttt{sumXY}$, $\texttt{divXY}$, and $\texttt{ans}$
are not created until they are called or needed. In this case, this does not
happen until we call $\texttt{print(ans)}$ which then executes the portion of the graph
needed to print the value of $\texttt{ans}$; moreover, upon identifying which 
portions of the graph need to be run, independent subgraphs are executed in parallel.

A thorough understanding of TF's computational graph is not needed for TF 2.x;
nevertheless, having some familiarity will help in the design of our programs.

### TensorFlow API

Here we will introduce common TF operations and basic API calls. Throughout this section
we will assume we have the following in our program's preamble:

``` python
import tensorflow as tf 
import numpy as np 
```
First, as alluded to above, to define a *constant* in TF, we do the following:

``` python
# Defining a scalar constant in TF
scalar_constant = tf.constant(10.0, name = "scalar_constant_name")
```

A few comments about the snippet above: the $\texttt{name}$ argument is used to identify 
this constant when the computational graph is saved and then loaded, i.e., the Python
name $\texttt{scalar_constant}$ will no longer exist when we load the graph and we
will instead have to reference it using the name $\texttt{scalar_constant_name}$. When defining
a constant, TF will attempt to infer the type of the constant using the input value; in this
case, because we set the alue to 10.0, the type of this tensor is $\texttt{tf.float32}$.
If we want to define the type explicitly, we can do this as follows:

``` python
# Defining a scalar constant in TF
scalar_constant = tf.constant(10, name = "scalar_constant_name", dtype = tf.float32)
```

We can do standard mathematical operations on these tensors as follows:

``` python
x = tf.constant(10)
y = tf.constant(15)

# Compute sum of x and y
x + y 

# Multiply x and y
x*y 

# Divide x and y
y/x
```

In addition to defining scalar constants, we can also define matrix constants and access
their elements as follows:

``` python
matrix_constant = tf.constant([[1,2],[3,4]], dtype = tf.float32)

# Get row 2 of matrix
print(matrix_constant[1,:]) 

# Get column 2 of matrix
print(matrix_constant[:,1]) 

# Get element (2,1) of matrix
print(matrix_constant[1,0]) 
```

We can also perform standard matrix operations:

``` python
A = tf.constant([[1,2],[5,6]], dtype = tf.float32)
B = tf.constant([[-1,2],[2,-1]], dtype = tf.float32)
C = tf.constant([[-1,2,3],[0,3,5]], dtype = tf.float32)

# Compute A + B
sumAB = tf.add(A,B) 

# Alternative way of computing A + B
sumAB_2 = A + B

# Compute product AC
prodAC = tf.matmul(A,C)

# Alternative way of computing AC (syntactic sugar)
prodAC_2 = A @ C

# Computes inverse of B
B_inv = tf.linalg.inv(B)
prodBB_inv = B @ B_inv
```

Tensors can be of arbitrary dimensions. For example, the code below creates a tensor of size 
$2 \times 3 \times 2$.

``` python
multi_dimen_constant = tf.constant([[[1,2],[3,4], [5,6]], [[7,8],[9,10], [11,12]]], dtype = tf.float32)

# Get first matrix 
print(multi_dimen_constant[0,:,:])

# Get first row of second matrix  
print(multi_dimen_constant[1,0,:])

# Get third rows of both matrices
print(multi_dimen_constant[:,2,:])

# Get element (1,2) of second matrix
print(multi_dimen_constant[1,0,1]) 
```

The print statements above will print something like 
$\texttt{tf.Tensor(8.0, shape=(), dtype=float32)}$. To extract the numeric quantity we can do

``` python
# Extract value
print(multi_dimen_constant[1,0,1].numpy())
```
which will print $\texttt{8.0}$. 

So far we have discussed how to define constants in TF. We will now see how to define 
*variables.* Syntactically, there is no major difference in how we define variables.
However, the distinction becomes significant when we do differentiation operations, i.e.,
it is important to be able to distinguish between variables and constants when computing
the gradient of a function. Variables can be defined as shown below:

``` python
scalar_variable = tf.Variable(10, dtype = tf.float32, name = "scalar_variable")
matrix_variable = tf.Variable([[1,2],[3,4]], dtype = tf.float32, name = "matrix_variable")
```

Note that "variable" in $\texttt{tf.Variable}$ is capitalized-this is because this is
a class in TF. 

It will often be useful to initialize weights randomly, e.g., when defining the weights of a
neural network. We can do this as follows:

``` python
random_matrix_variable = tf.Variable(initial_value = tf.random.normal([3,3]), dtype = tf.float32)
```

the above creates a $3 \times 3$ matrix where each element is sampled from a standard
normal distribution. 

All of the operations introduced for constants also apply to variables:

``` python
A = tf.Variable([[1,2],[5,6]], dtype = tf.float32)
B = tf.Variable([[-1,2],[2,-1]], dtype = tf.float32)
C = tf.Variable([[-1,2,3],[0,3,5]], dtype = tf.float32)

# Compute A + B
sumAB = tf.add(A,B) 

# Alternative way of computing A + B
sumAB_2 = A + B

# Compute product AC
prodAC = tf.matmul(A,C)

# Alternative way of computing AC (syntactic sugar)
prodAC_2 = A @ C

# Computes inverse of B
B_inv = tf.linalg.inv(B)
prodBB_inv = B @ B_inv
```

We can also integrate variable tensors into for-loops:

``` python
A = tf.Variable([[1,0],[0,1]], dtype = tf.float32)

for i in range(5):
  A = A + [[0,1],[0,0]]

# Value of A is [[1,5],[0,1]]
print(A)
```

A useful TF API is the Dataset API. The Dataset API is a wrapper class
for data sources that also supports intermediate operators, such as map, filter, 
apply, etc. We can invoke these operators as shown below:

``` python
v = tf.range(1,20,3)
v_ds = tf.data.Dataset.from_tensors(v)
v_ds_inc_1 = v_ds.map(lambda x: x + 1)

for val in v_ds_inc_1.take(len(v)):
  print(val)

v_ds_2 = tf.data.Dataset.from_tensor_slices(v)
v_ds_2_inc_1 = v_ds_2.map(lambda x: x + 1)
v_ds_2_even = v_ds_2.filter(lambda x: x % 2 == 0)


for val in v_ds_2_inc_1.take(len(v)):
  print(val)

for val in v_ds_2_even.take(len(v)):
  print(val)
```

$\texttt{v_ds_inc_1}$ above stores the same values as $\texttt{v_ds}$ but 
they are incremented by one. $\texttt{v_ds_2_even}$ stores only the even
elements of $\texttt{v_ds_2}$. $\texttt{tf.data.Dataset.from_tensors(v)}$
creates a Dataset tensor where every element in $\texttt{v}$ is stored as within a standard
vector; on the other hand, $\texttt{tf.data.Dataset.from_tensor_slices(v)}$
creates a Dataset tensor where each element in $\texttt{v}$ is stored as a
vector within a larger vector. We will not be making much use of this for the time
being and the reader is encouraged to read the TF documentation for a deeper exposition.

::: .exercise
**Exercise**  

Define 

``` python
v = tf.range(1,20,3)
```

using the map and filter functions, extract the even elements of $\texttt{v}$ and cube them.
:::

*Solution.* The code below accomplishes this:

``` python
import tensorflow as tf

v = tf.range(1,20,3)
v_ds = tf.data.Dataset.from_tensor_slices(v)

ans = v_ds.filter(lambda x: x % 2 == 0).map(lambda x: x**3)


for val in ans.take(len(v)):
  print(val)
```

### TF MNIST: V1

At the heart of TF 2.x is Keras, a high-level deep learning API that allows
for rapid construction of deep learning models. We will soon be making extensive use
of Keras, but first, we will attempt to gain a familiarity with the TF API. 

In this section we will implement a neural network with two hidden layers that 
will be trained on the MNIST data. We will see how we can define a loss function
and use TF to differentiate it and then apply gradient descent to update the weights
of the network.

We will assume that we have the following in our program's preamble:

``` python
import tensorflow as tf 
from tensorflow import keras
import numpy as np 
```

To load the MNIST data, we simply need to run the following from within our program:

``` python
# Load MNIST data
mnist = keras.datasets.mnist
(train_images, train_labels), (test_images, test_labels) = mnist.load_data()
train_images, test_images = train_images/255.0, test_images/255.0
```

We will specify the following global parameters:

``` python
mnist_size = 28*28
nl1 = 32 
nl2 = 32
output_size = 10
```

where $\texttt{nl1}$ and $\texttt{nl2}$ represent the sizes of the first and second
hidden layers, respectively. With this at hand, we can define the weights and biases
of our network as follows:

``` python
# Weights
W2 = tf.Variable(initial_value = tf.random.normal(shape = [nl1, mnist_size], stddev = 0.5))
W3 = tf.Variable(initial_value = tf.random.normal(shape = [nl2, nl2], stddev = 0.5))
W4 = tf.Variable(initial_value = tf.random.normal(shape = [output_size, nl2], stddev = 0.5))

# Biases
b2 = tf.Variable(initial_value = tf.random.normal(shape = [nl1, 1], stddev = 0.5))
b3 = tf.Variable(initial_value = tf.random.normal(shape = [nl2, 1], stddev = 0.5))
b4 = tf.Variable(initial_value = tf.random.normal(shape = [output_size, 1], stddev = 0.5))
```

We now need a function to compute a forward pass for a given input. This function is given below:

``` python
def forward_pass(x):
  a1 = x
  a2 = tf.math.sigmoid((W2 @ a1) + b2)
  a3 = tf.math.sigmoid((W3 @ a2) + b3)
  a4 = tf.math.sigmoid((W4 @ a3) + b4)
  return tf.reshape(a4, [output_size,])
```

The function above operates on a single input, but it will be necessary to be able to
feed a batch of images through the network, so we write this function below:

``` python
def batch_forward_pass(x):
  return tf.convert_to_tensor([forward_pass(tf.reshape(tf.convert_to_tensor(x_i, dtype = tf.float32),
   [mnist_size, 1])) for x_i in x], dtype = tf.float32)
```

We now write a function to compute the loss for a given batch 

``` python
def loss_function(x, y):
  return tf.math.reduce_mean(tf.math.reduce_sum(tf.math.square(x - y), 1))
```

The next function reveals one of the many powerful abstractions of TF.
We will write a function to return the gradient of the loss function with 
respect to each weight and bias as shown below:

``` python
def loss_grad(x, y):
  y = tf.convert_to_tensor([tf.one_hot(y_i, output_size) for y_i in y], dtype = tf.float32)
  with tf.GradientTape() as g:
    g.watch([W2, W3, W4, b2, b3, b4])
    outputs = batch_forward_pass(x)
    loss = loss_function(outputs, y)
  return g.gradient(loss, [W2, W3, W4, b2, b3, b4])
```

Now that we are able to compute the gradients, we will write a function to 
perform a gradient descent update to the weights and biases:

``` python
def update_weights(x, y, learning_rate):
  nabla_W2, nabla_W3, nabla_W4, nabla_b2, nabla_b3, nabla_b4 = loss_grad(x, y)
  global W2, W3, W4, b2, b3, b4
  W2 = W2 - learning_rate*nabla_W2
  W3 = W3 - learning_rate*nabla_W3
  W4 = W4 - learning_rate*nabla_W4
  b2 = b2 - learning_rate*nabla_b2
  b3 = b3 - learning_rate*nabla_b3
  b4 = b4 - learning_rate*nabla_b4
```

Now, given the training data, we would like to split it into batches and then perform
weight updates for each batch. In other words, we need a function to perform 
a single epoch:

``` python
def single_epoch(train_data, train_labels, test_data, test_labels, learning_rate):
  # Split into batches of size 32
  n = len(train_labels)
  batch_size = 32.0
  shuffled_indices = np.arange(n)
  np.random.shuffle(shuffled_indices)
  batches = np.array_split(shuffled_indices, np.ceil(n/batch_size))
  for batch in batches:
    x_batch = train_data[batch]
    y_batch = train_labels[batch]
    update_weights(x_batch, y_batch, learning_rate)
```

With the above, we can easily write a function to train our network for a 
specified number of epochs:

``` python
def train_model(train_data, train_labels, test_data, test_labels, epochs, learning_rate):
  print("Initial test accuracy: {}".format(compute_accuracy(test_data, test_labels)))
  for epoch in range(epochs):
    single_epoch(train_data, train_labels, test_data, test_labels, learning_rate)
    test_accuracy = compute_accuracy(test_data, test_labels)
    print("Done with epoch {}/{}. Test accuracy: {}".format(epoch + 1, epochs, test_accuracy))
```

To monitor performance, we write a function to compute the accuracy:

``` python
def compute_accuracy(x, y):
  predictions = tf.math.argmax(batch_forward_pass(x), axis = 1)
  accuracy = tf.reduce_mean(tf.cast(tf.math.equal(predictions, y), tf.float32))
  return accuracy
```

To begin training, we simply call the $\texttt{train_model}$ function:

``` python
train_model(train_images, train_labels, test_images, test_labels, 20, 0.1)
```

Putting all of this together, we get

``` python
import tensorflow as tf 
from tensorflow import keras
import numpy as np 

# Creates an MLP with 2 hidden layers for MNIST
# 728 -> nl1 -> nl2 -> 10
mnist_size = 28*28
nl1 = 32 
nl2 = 32
output_size = 10

# Weights
W2 = tf.Variable(initial_value = tf.random.normal(shape = [nl1, mnist_size], stddev = 0.5))
W3 = tf.Variable(initial_value = tf.random.normal(shape = [nl2, nl2], stddev = 0.5))
W4 = tf.Variable(initial_value = tf.random.normal(shape = [output_size, nl2], stddev = 0.5))

# Biases
b2 = tf.Variable(initial_value = tf.random.normal(shape = [nl1, 1], stddev = 0.5))
b3 = tf.Variable(initial_value = tf.random.normal(shape = [nl2, 1], stddev = 0.5))
b4 = tf.Variable(initial_value = tf.random.normal(shape = [output_size, 1], stddev = 0.5))

# Computes a forward pass for the given input
# Inputs:
# - x: A 1d tensor. The value to pass through the network.
# Outputs:
# - The output of the network after passing x through it. Size is [output_size, 1]
def forward_pass(x):
  a1 = x
  a2 = tf.math.sigmoid((W2 @ a1) + b2)
  a3 = tf.math.sigmoid((W3 @ a2) + b3)
  a4 = tf.math.sigmoid((W4 @ a3) + b4)
  return tf.reshape(a4, [output_size,])

# Computes a forward pass for multiple values
# Inputs:
# - x: A 2d tensor where each row represents a value to pass through the network.
# Outputs:
# - A matrix with the same number of rows as x and 10 columns. Each row represents the
#   forward pass for the corresponding row of x
def batch_forward_pass(x):
  return tf.convert_to_tensor([forward_pass(tf.reshape(tf.convert_to_tensor(x_i, dtype = tf.float32),
   [mnist_size, 1])) for x_i in x], dtype = tf.float32)

# Computes the loss for input x and corresponding label y
# Inputs:
# - x: A 2d tensor where each row is a data point.
# - y: A 1d tensor where the ith element corresponds to the true label of row i of x
# Outputs:
# - A scalar tensor representing the value of the loss function for the given
#   input and output
def loss_function(x, y):
  return tf.math.reduce_mean(tf.math.reduce_sum(tf.math.square(x - y), 1))

# Computes the gradient of the loss function for the given input/output pair
# Inputs:
# - x: A 2d tensor where each row is a data point.
# - y: A 1d tensor where the ith element corresponds to the true label of row i of x
# Outputs:
# - A list where each element is the gradient of the loss function with respect
#   to some model parameter. gradient list order is [W2, W3, W4, b2, b3, b4]
def loss_grad(x, y):
  y = tf.convert_to_tensor([tf.one_hot(y_i, output_size) for y_i in y], dtype = tf.float32)
  with tf.GradientTape() as g:
    g.watch([W2, W3, W4, b2, b3, b4])
    outputs = batch_forward_pass(x)
    loss = loss_function(outputs, y)
  return g.gradient(loss, [W2, W3, W4, b2, b3, b4])

# Updates the weights using gradient descent 
# Inputs:
# - x: A 2d tensor where each row is a data point.
# - y: A 1d tensor where the ith element corresponds to the true label of row i of x
# - learning_rate: A real number. The step-size in the gradient descent algrorithm
def update_weights(x, y, learning_rate):
  nabla_W2, nabla_W3, nabla_W4, nabla_b2, nabla_b3, nabla_b4 = loss_grad(x, y)
  global W2, W3, W4, b2, b3, b4
  W2 = W2 - learning_rate*nabla_W2
  W3 = W3 - learning_rate*nabla_W3
  W4 = W4 - learning_rate*nabla_W4
  b2 = b2 - learning_rate*nabla_b2
  b3 = b3 - learning_rate*nabla_b3
  b4 = b4 - learning_rate*nabla_b4

# Given an input, gets predictions and then computes accuracy
# Inputs:
# - x: A 2d tensor where each row is a data point.
# - y: A 1d tensor where the ith element corresponds to the true label of row i of x
# Outputs:
# - A real number between 0 and 1 representing the proportion of predictions that were correct
def compute_accuracy(x, y):
  predictions = tf.math.argmax(batch_forward_pass(x), axis = 1)
  accuracy = tf.reduce_mean(tf.cast(tf.math.equal(predictions, y), tf.float32))
  return accuracy

# Splits training data into batches and performs gradient descent step for each batch
# Inputs:
# - train_data: A numpy matrix containing the training data
# - train_labels: A numpy vector containing the labels for the training data
# - test_data: A numpy matrix containing the data used for testing
# - test_labels: A numpy vector containing the labels for the test data
# - learning_rate: The step-size used in the gradient descent algorithm
def single_epoch(train_data, train_labels, test_data, test_labels, learning_rate):
  # Split into batches of size 32
  n = len(train_labels)
  batch_size = 32.0
  shuffled_indices = np.arange(n)
  np.random.shuffle(shuffled_indices)
  batches = np.array_split(shuffled_indices, np.ceil(n/batch_size))
  for batch in batches:
    x_batch = train_data[batch]
    y_batch = train_labels[batch]
    update_weights(x_batch, y_batch, learning_rate)

# Performs the training of the model for the specified number of epochs
# Inputs:
# - train_data: A numpy matrix containing the training data
# - train_labels: A numpy vector containing the labels for the training data
# - test_data: A numpy matrix containing the data used for testing
# - test_labels: A numpy vector containing the labels for the test data
# - epochs: The number of epochs to go through while training
# - learning_rate: The step-size used in the gradient descent algorithm
def train_model(train_data, train_labels, test_data, test_labels, epochs, learning_rate):
  print("Initial test accuracy: {}".format(compute_accuracy(test_data, test_labels)))
  for epoch in range(epochs):
    single_epoch(train_data, train_labels, test_data, test_labels, learning_rate)
    test_accuracy = compute_accuracy(test_data, test_labels)
    print("Done with epoch {}/{}. Test accuracy: {}".format(epoch + 1, epochs, test_accuracy))

# Load MNIST data
mnist = keras.datasets.mnist
(train_images, train_labels), (test_images, test_labels) = mnist.load_data()
train_images, test_images = train_images/255.0, test_images/255.0
train_model(train_images, train_labels, test_images, test_labels, 20, 0.1)
```

The code above favors readability over efficiency and hence runs a bit slow. However, after 20 epochs,
we see that we can obtain an accuracy over 90%.

::: .exercise
**Exercise**  

Modify the code above so that the network can have an arbitrary number of layers
of arbitrary sizes.
:::

### TF MNIST: V2

Here we use Keras to build the same model above:

``` python
import tensorflow as tf 
from tensorflow import keras
import numpy as np 

# Load MNIST data
mnist = keras.datasets.mnist
(train_images, train_labels), (test_images, test_labels) = mnist.load_data()
train_images, test_images = train_images/255.0, test_images/255.0

# Define model
model = tf.keras.models.Sequential([
  tf.keras.layers.Flatten(input_shape = (28,28)),
  tf.keras.layers.Dense(32, activation = "sigmoid"),
  tf.keras.layers.Dense(32, activation = "sigmoid"),
  tf.keras.layers.Dense(10, activation = "sigmoid"),
  ])

# Define model loss function and evaluation metrics
model.compile(optimizer = "adam",
  loss = "sparse_categorical_crossentropy",
  metrics = ["accuracy"])

# Train model
print("Training...")
model.fit(train_images, train_labels, epochs = 20)

print("\nDone training.\n")

print("Testing...")
model.evaluate(test_images, test_labels)
```