
# word2vec

> id: intro 

## Introduction

Examples of natural language computation have become increasingly visible in our day-to-day lives over the past decade. For example, our cell phones correct our spelling and suggest words or even sentences for messages we compose. We issue voice commands to simplify DJing or setting timers in our homes. The underlying technology must in some way capture language _meaning_ to perform these tasks effectively.

Let's begin our study of natural language processing by looking at a simple but powerful model called _word2vec_ which associates words in a vocabulary with elements in a vector space. We will see how word relationships are reflected in the resulting vector space geometry. 

---
> id: words-and-meaning

## Words and meaning

Sentences are composed of words, and words in turn are composed of letters. In English, there are few [[letters|words|sentences]], but using them as primary units of computation is unnecessarily challlenging because they relate to meaning almost entirely through [[words|prefixes|Latin]]. 

---

On the other end of the spectrum, capturing meaning at the sentence level is very useful but also quite difficult because the number of possible sentences is [[practically infinite|between 1 and 10 million]]. _Words_ sit between letters and sentences on this spectrum, reflecting meaning in a useful way while being manageable in number. 

---
> id: word2vec

## word2vec

It's possible to represent word relationsips [combinatorially](https://wordnet.princeton.edu) using a discrete data structure like a graph. But such representations do not lend themselves to calculations with neural nets, which require [[vector|geographic|visual]] inputs.

---

The simplest way to represent words as vectors in a vector space is one-hot encoding. We enumerate our vocabulary and associate word _i_ with the vector which is 1 in the _i_th position and zero elsewhere. This encoding [[does not|does]] capture relationships between words, since the dot product of two vectors corresponding to distinct words [[is 0|is 1|depends on what the words are]].

---

*word2vec* is a method for embedding words in a vector space whose dimension is much smaller than the number of words. It was introduced in 2013 in a [paper](https://arxiv.org/abs/1301.3781) by Google's Tomas Mikolov, Kai Chen, Greg Corrado, and Jeffrey Dean. 

---

The basic idea of word2vec is very similar to that of an autoencoder: we build a neural network which takes one-hot encoded words as input and uses a second layer with many [[fewer|more]] units. For a given input word, we will interpret the vector of activations of this middle layer as the [[repesentation|matrix|length]] of the word.

---

Rather than using variables for the dimension counts, let's be concrete and suppose that we have 10,000 words in our vocabulary, and that our neural network's second layer has 300 units. (These are typical numbers for word2vec applications.)

The last layer will also have [[10,000|300]] units, one for each word in the vocabulary. At this point we will deviate from the autoencoder script and train the model to predict the words which appear *around the input word*. Given a training corpus (for example, all of the Wikipedia articles), we take every block of five consecutive words and log a training sample with the middle word as input and the other four words as output. We will use linear activation on the middle layer, softmax activation on the last layer, and no bias. 

Next, we should specify our [[loss function|activation functions|weights]].

---

We want to choose a loss function which penalizes low values in the positions of the context words. Specifically, the penalty for each word is defined to be the log of the reciprocal of the softmax output in that word's position. The total penalty for a given training sample is the sum of the penalties for the four context words.

The linguistic idea underlying this model is that meaning is reflected in [[proximity of words|word order|word length]]. 

---

**Hyperparameters.** This model has several hyperparameters. The size of the vocabulary depends on the number of unique words in the training text, but it can be adjusted downward by deleting words which appear infrequently. The number of middle-layer units can be adjusted to get a more or less compressed word representation. The length of each block of consecutive words used to form training samples may be varied.

---
> id: an-example

## An example

Let's look at a very small example. Suppose that our training set is the sentence _The quick brown fox jumps over the lazy dog_, and that our vocabulary consists of the [[8|9|10]] unique words in that sentence. Then the training samples are 

* (brown, (the, quick, fox, jumps)), 
* (fox, (quick, brown, jumps, over)), and so on. 

Suppose that there are 3 units in the hidden layer and that the matrix of weights from the input layer to the hidden layer is the [[3×8|8×3]] matrix 

---

U = [[2,-3,1,0,4,7,3,2],[-3,5,4,6,1,2,3,0],[3,2,1,4,5,0,-9,1]],

with the input words one-hot encoded based on the order in which they appear in the training sentence. Suppose that the matrix of weights from the hidden layer to the output layer is the the [[8×3|3×8]] matrix 

V = [[-2,0,4],[3,0,1],[6,0,7],[-2,0,3],[2,1,4],[-2,-2,0],[4,-1,3],[-2,0,5]]

Then the first sample would yield a pre-softmax output of 

U @ V @ [0,0,1,0,0,0,0,0]

which is equal to  [2, 4, 13, 1, 10, -10, 3, 3]. After applying the softmax activation, we get 

[0.00002, 0.0001, 0.95, 0.000006, 0.047, 0.00000000001, 0.00004, 0.00004]

for the context word predictions. So the loss incurred for this training sample is 

`-log(0.00002) - log(0.0001) - log(0.000006) - log(0.047) = 35.2`

This loss is large since small values are output for the correct context words. 

The loss incurred for the *second* training sample is approximately [[70.01|32.4|16.65]]. 

---
> id: negative-sampling

## Negative sampling

The number of output neurons is much [[larger|smaller]] for a typical word2vec neural network than for a typical convolutional neural net (an ImageNet classifier, say). It turns out that computing the softmax is very expensive and makes training a word2vec neural network using standard training techniques impractically slow. 

A training technique called **negative sampling** is used to get around this problem. The basic idea is to use a few randomly chosen output neurons as a proxy for the full output vector. If you're curious to see more details, see *Aggarwal* page 94. 

---
> id: skip-gram

## word2vec variants

The version of word2vec we have looked at is called _skip-gram_, which is just one of two main flavors of word2vec. The other is called _continuous bag of words_ (CBOW). The idea of CBOW is to predict the center word from the context words, rather than [[vice versa|predicting a word from the rest of the sentence|predicting sentences from words]]. If you're curious to see more details, see *Aggarwal* page 87. 

The take-home message is that CBOW tends to be favored if the training set is small or moderate, while skip-gram makes better use of large amounts of training data. 

---
> id: bias

## Experimenting with word2vec

You can explore a trimmed version of Google's original word2vec model in a Binder notebook [here](https://mybinder.org/v2/gh/BrownDSI/word2vec-slim/master) (give it some time to spin up). The Jupyter notebook contains examples illustrating word2vec analogies and examples of bias in the embedding.

If you have trouble with Binder, you can access the Jupyter notebook directly at the [GitHub repo](https://github.com/BrownDSI/word2vec-slim/). 
