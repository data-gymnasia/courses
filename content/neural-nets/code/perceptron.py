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
data_dir = "/Users/elvis/Documents/DSI/courses/content/neural-nets/code/datasets/lin_sep_d1.csv"
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
print(W)
print(b)
