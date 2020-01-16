import numpy as np
from MLP_Classification.MLP import MLP
from mnist import MNIST
import math

mndata = MNIST('/Users/elvis/Documents/DSI/python-mnist/data')
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
