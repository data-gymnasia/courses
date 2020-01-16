import numpy as np
from MLP.MLP import MLP
import matplotlib.pyplot as plt
import pandas as pd
import math

file_dir = "/Users/elvis/Documents/DSI/courses/content/neural-nets/code/UAT/poly_1.csv"

dataset = pd.read_csv(file_dir).to_numpy()

train_x = dataset[:,0]
train_y = dataset[:,1]
training_data = zip(train_x, train_y)

network = MLP(1, 0.01)
network.add_layer(10)
network.add_layer(10)
network.add_layer(1)

network.train(training_data, 1000)

x_values = np.linspace(-2, 2.5, 100)
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
plt.legend(["g(x)", "h(x)"])
plt.xlabel("")
# plt.show()
plt.savefig( "/Users/elvis/Documents/DSI/courses/content/neural-nets/images/mlp_poly_2.svg")

# print(train_x)
