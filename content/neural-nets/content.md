
# Course Title

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
dataset available here [INSERT DOWNLOAD LINK HERE].

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

---
> id: uat
## Universal Approximation Theorem

---
> id: mnist
## MNIST Example

#TODO Explain MNIST dataset and expand on code below

MLP code:

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


    def evaluate_loss(self, test_data):
        loss = 0
        for test in test_data:
            x, y = test
            y_hat = self.forward_pass(x)[-1]
            loss += np.linalg.norm(y-y_hat)**2
        return loss

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
        return self.biases

```

Code to call MLP class:

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
