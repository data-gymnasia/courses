# Convolutional architectures

## Introduction

> id: intro

Let's take a chronological journey through the state of the art
convolutional architectures. We'll see how some features have fallen
out of use while others have become standard practice. We'll also see
some new ideas which give the newest convolutional networks their
edge.

This chapter draws from a Stanford
[lecture](https://www.youtube.com/watch?v=DAOcjicFr1Y) covering
similar material, as well as Charu Aggarwal's _Neural Networks and
Deep Learning_ and the original papers. All of these sources are
recommended for follow-up reading.

---
> id: lenet

## 1998: LeNet-5

LeNet-5, published by Yann LeCun, Léon Bottou, Yoshua Bengio, and
Patrick Haffner in 1998, showed the convolutional neural networks
could achieve good results on handwritten digit recognition. 

Here's the architecture as it was represented in the original
publication:

::: column(width=540)
    
    img(src=" /content/neural-nets/images/lenet-5.png")

:::

We can see that the first convolutional layer has 6 channels.  Based
on the spatial dimensions of those channels, we can say that the
stencil size for the first convolutional layer is [[`5 × 5`|`4 × 4`]].

---

All layers, including the subsampling layers, use trainable weights
(with bias) and a tanh activation. This network [[does not|does]]
include a max pooling layer. 

---

The second convolutional layer has 16 channels and a stencil size of
[[`5 × 5`|`4 × 4`]]. Only 60 of the [[96|64|128]] channel-to-channel
pairs between S2 and C3 are actually connected. 

---

Among the last three layers, the first two are
[[dense|convolutional|recurrent]]. Each neuron in the final layer
measures the Euclidean distance between the 84-dimensional input
vector and a vector of `+1`'s and `-1`'s obtained by serializing a 12 ×
7 bitmap image of the digit represented by that unit. The loss
function seeks to minimize that distance for the ground-truth digit.

In other words, the neural network seeks to map an input digit image 

::: column(width=30)
    
    img(src=" /content/neural-nets/images/seven.jpg")

:::

to an 84-dimensional vector (shown in a 12 × 7 arrangement)

::: column(width=360)
    
    img(src=" /content/neural-nets/images/seven-output.png")

:::

which is as close as possible to a pre-determined 12 × 7 image that
looks like a 7: 

::: column(width=120)
    
    img(src=" /content/neural-nets/images/seven-desired-output.png")

:::

The reason for using a neural network rather than directly comparing
input pixel values to those of a target image for each digit is that
[[directly comparing pixels doesn't work very well practice|it doesn't
even make sense to try]].

---
> id: alexnet

## 2012: AlexNet

The first deep learning classifier to win the ImageNet contest was
**AlexNet** in 2012. The model is described in the paper _ImageNet
Classification with Deep Convolutional Neural Networks_ by Alex
Krizhevsky, Ilya Sutskever, and Geoffrey Hinton of the University of
Toronto. Here's a figure from the article:

::: column(width=540)
    
    img(src=" /content/neural-nets/images/alexnet.png")

:::

Note the **stride** value of 4 shown in the first layer. This means
that the 11 × 11 stencil traverses the grid in increments of 4 pixels
rather than 1 pixel. This results in each spatial dimension in the
next layer's channels being approximately [[one-fourth as large as|4
pixels shorter than]] they would be if the stride were 1.

---

Note also that the convolutional layers are on two parallel
tracks. The reason for this is practical: a single GPU did not have
enough memory, so the layers were split across two GPUs. Note that
some of the layers only have intra-GPU connections.  Therefore, the
memory considerations [[actually affected the model begin used|only
affected the performance of the model]].

---

Some other details: ℓ² regularization was used with a parameter of 
`λ = 5 × 10^(-4)`, and dropout was applied with `α = 1/2`. The
mini-batch size was `128`, and the momentum used in the gradient descent
algorithm was `0.8`. The convolutional and dense layers use ReLU
activations (indeed, AlexNet played a part in popularizing ReLU), 
and the last layer uses softmax. 

---

AlexNet also used a local _response normalization_ scheme which
fixes a ordering on the channels and then applies a normalization
across several nearby channels in the same spatial position. This
practice has fallen out of favor in recent years. 

---

The winner of the ImageNet contest in 2013 was a modification of
AlexNet called _ZFNet_.

---
> id: VGG

## 2014: VGG

VGG made its first entry in the 2014 ImageNet contest. Although it did
not win the contest, it remains an influential model since it
performed very well without the advanced features used by the 2014 and
2015 winners. Thus it represents a next step in the progression from
LeNet-5 to AlexNet.

The figure below compares the AlexNet architecture to one particular
flavor of VGG called VGG16: 

::: column(width=240)
    
    img(src=" /content/neural-nets/svg/vgg.svg")

:::

The main differences between AlexNet and VGG16 are that VGG16 is 
[[deeper|less deep]] and uses [[smaller stencils|larger stencils]] in
its convolutional layers.

---

It makes sense to increase the depth and increase the stencil size
simultaneously, because a typical neuron in a stack of two
convolutional layers with 3 × 3 stencils has an effective [receptive
field](gloss:receptive-field) of [[5 × 5|7 × 7|4 × 4|6 × 6]] in the
previous layer. 

---

The fully connected layers are very expensive to the overall parameter
count of the model. Of ~138 million parameters in the model, over 123
million of them are in the fully connected layers. 

---
> id: GoogLeNet

## 2014: GoogLeNet

The winner of the 2014 contest was GoogLeNet. Here's the architecture
in full (from the original paper): 

::: column(width=360)
    
    img(src=" /content/neural-nets/svg/inception.svg")

:::

This network introduces a number of innovations. Perhaps its most
salient novelty is the use of the **inception module** as a building
block:

::: column(width=360)
    
    img(src=" /content/neural-nets/svg/inception-module.svg")

:::

---

The idea of the inception module is to allow the model to _choose_
what mix of larger and smaller stencils to use in each layer. We do by
inserting layers of different filter dimensions and concatenating the
results channel-wise. The basic idea (the _naive_ inception module) is
illustrated here:

::: column(width=360)
    
    img(src=" /content/neural-nets/svg/inception-naive.svg")

:::

The reason for using the extra 1 × 1 convolutions and the max pooling
layer is that otherwise the concatention step causes the number of
channels (and therefore also the number of parameters) to get out of
hand.

---

A second new feature of GoogLeNet is the insertion of two additional
classification stacks. They attach directly to the outputs from
intermediate layers, and their purpose is to mitigate the [[vanishing
gradient|exploding gradient]] problem. Their outputs are not used by
the trained model: they are there only to ensure gradient flow back to
earlier layers during training. 

---

Lastly, note that GoogLeNet cuts way down on the expensive dense
layers at the end. The parameter usage is more evenly distributed
throughout the network than that of VGG16. 

---
> id: ResNet

## 2015: ResNet

The winner of the 2015 contest was **ResNet**. It accelerated the
trend of increased network depth by using 152 layers! Here's a figure
from the paper illustrating a 34-layer version:

::: column(width=360)
    
    img(src=" /content/neural-nets/svg/resnet.svg")

:::

---

In principle, a deeper network should perform better because it can
choose to approximate the identity function for any layers it doesn't
need, thereby replicating the behavior of a shallower
network. However, in practice this doesn't work because training
becomes increasingly difficult as more and more layers are
added. 

These observations lead to the key insight of ResNet: we can make it
easier for the network to learn the identity function by interpreting
the layer outputs as specifying the _difference_ between input and
output rather than specifying the output directly. In other words, we
sum a layer's input to its output and forward the result to the next
layer. This is the idea which gives ResNet its name, since a
_residual_ is a difference between two quantities. 

The residual may be illustrated in a computational graph diagram by
drawing a connection which goes around a computational unit (like a
neural network layer or a stack of two neural network layers). Here's
a figure from the original ResNet paper: 

::: column(width=360)
    
    img(src=" /content/neural-nets/svg/resnet-unit.svg")

:::

---

More details of the ResNet training process: 
* Batch normalization is used after every convolutional layer
* Xavier-He initialization
* Momentum gradient descent with α = 0.9
* Learning rate schedule starts at 0.1 and decays by a factor of 10 at
  each plateau. 
* Mini-batch: 256
* _No_ dropout

---

ResNet won the 2015 contest by a significant margin. 

::: column(width=440)

    img(src=" /content/neural-nets/svg/imagenet-results.svg")

:::

---

In 2016, Christian Szegedy, Sergey Ioffe, Vincent Vanhoucke, and Alex
Alemi introduced _Inception-ResNet_ (also known as Inception-v4),
which uses inception modules with residual connections. This model was
used as a part of the 2016 winning submission from the
_Trimps-Soushen_ team. 

---
> id: review

## Review

Drag the models to put them in order from earliest to latest:

    x-sortable
      .item.md(data-index="2") VGG
      .item.md(data-index="1") AlexNet
      .item.md(data-index="4") ResNet
      .item.md(data-index="0") LeNet
      .item.md(data-index="3") GoogLeNet
