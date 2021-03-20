import numpy as np
from mnist import MNIST
import math
import matplotlib.pyplot as plt

mndata = MNIST('/Users/elvis/Documents/DSI/python-mnist/data')
train_images, train_labels = mndata.load_training()
test_images, test_labels = mndata.load_testing()


image_to_show = 3800
image = np.reshape(train_images[image_to_show], (28,28))

save_dir = "/Users/elvis/Documents/DSI/courses/content/neural-nets/code/mnist_ex_2.pdf"

plt.matshow(image, cmap = "gray")
plt.savefig(save_dir, format = "pdf")
# plt.show()
