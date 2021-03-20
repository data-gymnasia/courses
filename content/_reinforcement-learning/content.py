import numpy as np
import matplotlib.pyplot as plt
import gym

env = gym.make('FrozenLake-v0', is_slippery = False)

# table of Q-values
Q = np.zeros((env.observation_space.n, env.action_space.n))

α = 0.8  # learning rate 
γ = 0.95 # discount factor
EPISODES = 10000

np.random.seed(1234)

for i in range(EPISODES):
    s = env.reset()
    while True:
        a = np.argmax(Q[s,:] + np.random.randn(1,env.action_space.n)/(i+1))
        s_new, reward, done, info = env.step(a)
        Q[s,a] = (1-α)*Q[s,a] + α*(reward + γ*np.max(Q[s_new,:]))
        s = s_new
        if done:
            break

plt.matshow(np.max(Q, axis=1).reshape(4,4))
plt.savefig("images/matrix-output.jpg")

for i in range(EPISODES):
    s = env.reset()
    while True:
        a = np.argmax(Q[s,:] + 100*np.random.randn(1,env.action_space.n)/(i+1))
        s_new, reward, done, info = env.step(a)
        Q[s,a] = (1-α)*Q[s,a] + α*(reward + γ*np.max(Q[s_new,:]))
        s = s_new
        if done:
            break

plt.matshow(np.max(Q, axis=1).reshape(4,4))
plt.savefig("images/matrix-output-2.jpg")
