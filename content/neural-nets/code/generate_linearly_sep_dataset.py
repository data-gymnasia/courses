import pandas as pd
import numpy as np

n = 1000

hyperplane = np.array([1, -2, 5, 2.5, -1])
dataset = np.zeros((n, 6))

point = [10*xi for xi in np.random.rand(5)]

for i in range(n):
    point = [10*xi for xi in np.random.rand(5)]
    temp = np.dot(point, hyperplane)
    # print("Value: {}, Label: {}".format(temp, temp > 0))
    label = np.dot(point, hyperplane) > 5
    dataset[i,0:5] = point
    dataset[i, 5] = int(label)

write_dir = "/Users/elvis/Documents/DSI/courses/content/neural-nets/code/datasets/lin_sep_d1.csv"

data = {"X1":dataset[:,0], "X2":dataset[:,1], "X3":dataset[:,2], "X4":dataset[:,3], "X5":dataset[:,4], "Y":dataset[:,5]}
df = pd.DataFrame(data)
df['Y'].apply(np.int64)
df.to_csv(write_dir)
