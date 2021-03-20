import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

num_samples = 100
x_values = np.zeros(num_samples)
y_values = np.zeros(num_samples)

x_min = -1.5
x_max = 2

for i in range(num_samples):
    x = (x_max - x_min)*np.random.rand() + x_min
    y = x**4 - 4*x**2 + .5*x + 12
    x_values[i] = x
    y_values[i] = y

dataset = np.zeros((num_samples, 2))
dataset[:,0] = x_values
dataset[:,1] = y_values

df = pd.DataFrame(dataset, columns = ['X', 'Y'])

save_dir = "/Users/elvis/Documents/DSI/courses/content/neural-nets/code/UAT/"
df.to_csv(save_dir + "poly_1.csv", index = None, header = True)
