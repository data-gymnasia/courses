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

    def compute_accuracy(self, data):
        accuracy = 0.0
        for d in data:
            x, y = d
            y_hat = self.forward_pass(x)[-1]
            accuracy += (np.argmax(y) == y_hat)
        return accuracy/len(data)

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
