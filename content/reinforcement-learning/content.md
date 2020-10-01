
# Reinforcement learning

> id: intro
## Introduction

As we discussed earlier in the course, most machine learning problems
have a clear separation between input and output: we get a collection
of observations, or an image, or a passage of text, and our goal is to
make accurate predictions ([[supervised|unsupervised]] learning) or
come up with useful representations of the data
([[unsupervised|supervised]] learning).

---

In **reinforcement learning**, stimulus and response interact: an
**agent** makes decisions as it interacts with an **environment**. The
agent receives numerical reward signals and seeks to act so as to
maximize its reward. 

Note: This lesson draws from *Neural Networks and Deep Learning* by
Charu Aggarwal and from [this Stanford](https://www.youtube.com/watch?v=lvoHnicueoE) lecture on
reinforcement learning. 

---
> id: Reinforcement learning
## An example

Suppose you want to beat the classic Nintendo game Mario Brothers, but
you don't want to have to go through every level yourself. So you
decide to train an algorithm to operate the controls. If your
algorithm presses random buttons (like your little sibling), it will
perform [[poorly|great]]: 

    figure.video-wrap
      iframe(src="https://www.youtube.com/embed/1qa7oRhZvbM?start=12&end=20" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

---

However, if the algorithm is provided with information about when it
was doing well and when it wasn't, then over time it can learn to do
much better:

    figure.video-wrap
      iframe(src="https://www.youtube.com/embed/1qa7oRhZvbM?start=94&end=102" frameborder="0" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscree)

The missing ingredient in this story is a mechanism for
[[learning|memorizing|retreating]] from experience. There are several
subtleties to account for. For example, the agent [[should be willing
take short-term losses for long-term gain|must always maximize its
reward now]]. 

---
> id: the setup
## The setup

Let's begin by formalizing the structure of a reinforcement learning
problem. The learner is called the **agent** and the rest of the
system is called the **environment**. 

At each time step $t$, the environment provides the agent with a value
$s_t$ which we will call the **state** (which is in some set $\mathcal{S}$ which is
specified as part of the problem). The agent then chooses an **action** 
$a_t$ (which is in a set $\mathcal{A}$). The environment responds by
giving the agent a reward $r_{t}$ and new state $s_{t+1}$. 

Note: when we say the reward and the new state are a *response* to the
action chosen by the agent, we mean that ($r_{t}, s_{t+1}$) is a
[[function|dependency]] of ($s_t,a_t$). Likewise, $a_t$ is a
[[function|dependency]] of ($s_t,r_{t-1}$), for each time $t\geq 1$. 

---
> id: cartpole
## RL hello world: CartPole

*CartPole* is the canonical first reinforcement learning example
problem: 

    figure.video-wrap
      iframe(src="https://www.youtube.com/embed/5Q14EjnOJZc?start=94&end=100" frameborder="0" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen)

The goal is to keep the pole upright. The agent gets to decide [[how
to move the cart left and right|how gravity acts on the pole|the
length of the pole]]. The environment state is characterized by the
[[angle of the pole|length of the pole|city where the experiment is
occuring]]. The reward being maximized is [[how well the pole stays
vertical|the velocity of the pole]].

---

In the Mario example we saw earlier, the reward is the game score, the
environment state is [[either of the other two answers are
possibilities|the set of pixels on the screen|complete information
about the identity, position, and velocity of the sprites on the
screen]. The actions chosen by the agent are [[button presses on the
controller|levels in the game|custume changes]].

---

We can also use an RL framework to train an algorithm to play a
turn-based board game like Go or chess. In this case, the environment
is the [[board state|history of all of the opponent's games|room the
game is being played in]]. The agent's action is the [[next
move|strategy for winning]]. The reward is 1 if the game is won and 0
if lost. Note that this problem is materially different from the
problems above because [[the reward value is not revealed
incrementally|Go is not as much fun as Mario]].

---
> id: Markov decision processes
## Markov decision processes

Earlier we discussed the environment state set $\mathcal{S}$ and the action
set $\mathcal{A}$, and we described the reward as a function of the current state and
action. However, we will want to generalize this a bit and allow the reward to be a
*random* function of the latest state and action. Thus in addition to
$\mathcal{S}$ and $\mathcal{A}$ we must specify a distribution
$\mathcal{R}$ for each pair ($s,a$), where $s$ is an action and $a$ is
a state. 

---

Furthermore, we also want the next state to be a random function of
the (state,action) pair. Therefore, we should also specify a
probability measure on [[S|A]] for each
(state,action) pair.  We will call this object $\mathbb{P}$. 

---

Finally, we will define a *discount factor* $\gamma$ which describes how much
our agent should prioritize shorter-term rewards. 

All together, our list of mathematical objects describing our RL
problem is ($\mathcal{S}, \mathcal{A}, \mathcal{R}, \mathbb{P},
\gamma$). This is a **Markov decision process**. 

---

Given this setup, the **Markov decision process** proceeds as
follows. The environment samples an initial state from some
distribution on $\mathcal{S}$. Then for $t \geq 0$,

* the agent chooses an action 
* the environment samples a reward given the (state, action) pair
  (using [[$\mathcal{R}$|$\mathcal{P}$]])
* The environment samples the next state using [[$\mathcal{P}$|$\mathcal{R}$]]
* The agent receives the reward $r_t$ and the next state $s_{t+1}$

---

A **policy** (customarily denoted $\pi$) is a function from [[S|A]] to [[A|S]] which specifies an action for
each state. The objective the agent is to find a policy which
maximizes the total reward, where the reward received at time $t$
contributes its value $r_t$ times $\gamma^t$ to the total. 

As stated above, this problem is underspecified since the reward is a
[[random|complicated]] function of the actions chosen by the
agent. _{span.reveal(when="blank-0")}So to be more precise, we will
say that the agent seeks to maximize its expected reward._

 The formula for the accumulated discounted reward is [[$\sum_{t \geq
0} \gamma^tr_t$|$\sum_{t \geq 0} r_t$|$\sum_{t \geq 0} \gamma^t$]].

--- 

::: .exercise
Exercise  
Consider the following very simple game, played on an 8 × 8 chess
board. Beginning with the rook in some position on the board, your
goal is to get the rook to the top right square in as few moves as
possible (note: a rook is a chess piece which can move any number of
squares along columns or rows).

* What is the largest number of moves that might be required? [[2]]
* Come up with a scheme for rewarding the agent that aligns with the
  goal of reaching the desired destination in the smallest number of
  moves. Decide on your answer before clicking: [[reward of -1 for each
  move and halt game at top right corner|]]
* Is the optimal policy unique? [[No|Yes]]
:::


---
> id: Q-learning
## Q-learning

Let's think about how we would set out to train an agent to maximize
reward in a reinforcement learning problem, drawing inspiration from
how we humans do it. To be specific, imagine a footballer deciding
whether to dribble back to the middle of the field and shoot or
continue to the corner for a crossing pass. They have some implicit
internal representation of long-term [[reward|probability]] of these
two actions given the status of the players on the field, and they
choose the action with the [[larger|smaller]] reward.

---

We call the value associated with a state-action pair a
**Q-value**. Mathematically, $Q$ is a function 
from $\mathcal{S} \times \mathcal{A}$ to $\mathbb{R}$, defined by
\begin{equation} 
Q(s,a) = \mathbb{E}[r_t + \gamma r_{t+1} + \gamma^2 r_{t+2} +
\cdots]. \label{eq:Q}
\end{equation} 
For eack $k \geq 0$, the term $\gamma^k r_{t+k}$ accounts for the [[discounted
reward|reward|loss]] obtained on the `k`th step in the future. 

---

The expectation on the right-hand side of \eqref{eq:Q} is understood
to be calculated with respect to probability measure implied by
$\mathcal{R}$ and $\mathbb{P}$ as well as the _optimal policy_ $\pi$,
starting from $(s,a)$ at time $t$. In other words, repeatedly drawing
rewards and states from $\mathcal{R}$ and $\mathbb{P}$ and applying
the optimal policy $\pi$ yields a well-defined random sequence of
rewards, and the expectation is computed for that sequence. Given
complete information about $(\mathcal{R}, \mathcal{P}, \pi)$ one could
approximate the expectation on the right-hand side by [[simulating
several runs of the MDP and averaging|calculating an integral|finding`r_t`]]. 

---

Given knowledge of the $Q$ function, the optimal policy in a given
state is to select the action with the largest
[[Q-value|reward]]. However, this observation does not provide a
blueprint for calculating the optimal policy even if we knew
$(\mathcal{R},\mathbb{P})$ perfectly because
[[the optimal policy is part of the definition of `Q`|the values of
$\mathcal{R}$
and $\mathbb{P}$ are not known|it is impossible to calculate infinite
sums]]. Furthermore, in a real-world
scenario, we don't know the values of $\mathcal{R}$
and $\mathbb{P}$; we can only infer them by following a policy and
repeatedly observing the behavior of the environment. 

---
 
Remarkably, there is a way to squeeze water from the Q-function
stone. It relies on the **Bellman equation**, which is a seemingly
innocuous relationship between values of the Q function. In words, it
says that "the Q-value for a particular state-action pair is equal to
the expected reward for that state action pair plus the discounted expected
Q-value of the next state and the best action for that
state". In other words, you can assess your current status if you know
your status one step into the future. Mathematically, the Bellman equation is

    p 
      | \begin{equation} \label{eq:bellman} Q(s,a) = \mathbb{E}_{s' 
      | \sim \mathbb{P}_{s,a}} [r + \gamma \max_{a'}Q(s',a')].
      | \end{equation} 

The subscript on the expectation symbol says that [[the next state `s'` is
drawn from the next-state distribution for (`s`,`a`)|$\mathbb{P}$ is
the probability measure that determined how we arrived at the current
state `s`]]. The $\max_{a'}Q(s',a')$ term represents [[the value of
the best action for the next state|the best possible state]]. 

---

The Bellman equation doesn't allow us to calculate $Q$ directly since 
[[both: `Q`'s on both sides and we don't know `P`|`Q` appears on both sides of the
equation|we don't know $\mathbb{P}$]]. However, we can **bootstrap**:
given any approximation of $Q$ (even a terrible one), we calculate the expression in brackets on the
right-hand side of \eqref{eq:bellman} and use it to update our current
estimate of the left-hand side $Q(s,a)$. We will do this using
**momentum** $0<\alpha<1$, so that the new value for $Q(s,a)$ is replaced
by a linear combination of the old value and the estimated right-hand
side (with weights $\alpha$ and $1-\alpha$). 

This procedure often converges to the correct $Q$
function. In the next section, we will see this in action. 

---
> id: Frozen Lake
## Iterative Q-learning: FrozenLake

Let's try out iterative Q-learning on an example. We'll use a very
popular reinforcement learning package from OpenAI called
_{code.language-python}gym_. If you don't have it installed already,
just do _{code.language-python}!pip install gym_. 

Note: the content in this section is based loosely on [this blog post](https://medium.com/emergent-future/simple-reinforcement-learning-with-tensorflow-part-0-q-learning-with-tables-and-neural-networks-d195264329d0). 

We'll begin by importing _{code.language-python}gym_ as well as
_{code.language-python}numpy_
and _{code.language-python}pyplot_. 

``` python
import numpy as np
import matplotlib.pyplot as plt
import gym
```

[Continue](btn:next)

---

Next, we'll create and visualize a new environment for an MDP called
*FrozenLake*.

``` python
env = gym.make('FrozenLake-v0',is_slippery=False)
env.render()
```

    table.eqnarray
      tr
        td: .pill.b.yellow S
        td: .pill.b.blue F
        td: .pill.b.blue F
        td: .pill.b.blue F
      tr
        td: .pill.b.blue F
        td: .pill.b.black H
        td: .pill.b.blue F
        td: .pill.b.black H
      tr 
        td: .pill.b.blue F
        td: .pill.b.blue F
        td: .pill.b.blue F
        td: .pill.b.black H
      tr
        td: .pill.b.black H
        td: .pill.b.blue F
        td: .pill.b.blue F
        td: .pill.b.green G

The scenario is that you start at the location **{.pill.yellow}S** and
repeatedly move left, down, right, or up until you reach your frisbee
**{.pill.green} G** in the bottom right corner or fall into one of the holes 
**{.pill.black} H**. The reward is simply 1 if you [[reach the
frisbee|fall into a hole]] and 0 otherwise. 

---

We'll model this problem with a 16-element state space (one for each
position) and a 4-element action space. An action which would take you
off the pond will be understood to leave you in your current
position. The number of elements in the state-action space $\mathcal{S} \times
\mathcal{A}$ is [[64]]. 

---

Since the $Q$ values we need to store may be naturally arranged into a
`16×4` grid, we should use a [[NumPy array|Python dictionary|Python
function]] to store them. Let's initialize this matrix to the zero
matrix. Let's make our code generic by accessing the size of the state
space and action space of the environment. 

``` python
Q = np.zeros((env.observation_space.n, env.action_space.n))
```

---

Next, let's set our momentum, discount rate, and number of
episodes.

``` python
α = 0.8  # momentum
γ = 0.95 # discount factor
EPISODES = 10000
```

Continue: [[Yes!|No]]

---

Now we can play the frozen lake game repeatedly. We begin each episode
by resetting the environment and storing the returned initial state to
a variable _{code.language-python}s_. Then we choose an action from
the row of the Q-matrix corresponding to our current state, prompt the
environment to return a new state, reward, completion status, and
auxiliary information in response to that action. Then we update the
corresponding entry according to the Bellman equation and repeat. Note
that we are approximating the expectation on the right-hand side of
the Bellman equation using [[a one-sample plug-in estimator|an
integral|a kernel density estimator]].

``` python
for i in range(EPISODES):
    s = env.reset()
    while True:
        a = np.argmax(Q[s,:])
        s_new, reward, done, info = env.step(a)
        Q[s,a] = (1-α)*Q[s,a] + α*(reward + γ*np.max(Q[s_new,:]))
        s = s_new
        if done:
            break
```

---

The problem with this approach is that we make the same decisions
every episode, and in fact in this case [[we never even find the
frisbee|we find the frisbee every time]]. We want our decisions to be
noisy, especially initially, so we can explore more of the
state-action space. Therefore, we add a Gaussian random vector to the
Q-vector before choosing an action. We define the amount of noise to
be a decreasing function of the episode number so that we focus
increasingly on paths we've determined to be better:

``` python
for i in range(EPISODES):
    s = env.reset()
    while True:
        a = np.argmax(Q[s,:] + np.random.randn(1,env.action_space.n)/(i+1))
        s_new, reward, done, info = env.step(a)
        Q[s,a] = (1-α)*Q[s,a] + α*(reward + γ*np.max(Q[s_new,:]))
        s = s_new
        if done:
            break
```

---

We can look at the resulting Q-matrix, but it's a little hard to
read. Let's reshape it back into a 4×4 grid by identifying for each
position the Q-value of the *best* action from that state. 

``` python
plt.matshow(np.max(Q, axis=1).reshape(4,4))
```

    figure: img(src="images/matrix-output.jpg" width=240)

We see that our agent [[did|did not]] find the frisbee, and it
identified [[1]] path(s) for doing so. 

---

The problem is that our exploration tends to lock in on a particular
path and still isn't exploring the state space very well. We can fix
this by increasing the [[variance|mean|correlation]] of the Gaussian
noise. Doing so yields the following result:

    figure: img(src="images/matrix-output-2.jpg" width=240)

---

This is a much more accurate estimate of the true Q-function: every
non-hole state has significant value, since optimal play will get you
to the frisbee relatively soon. 

---
> id: Deep Q-learning
## Deep Q-learning

Tabulating Q-values and iteratively updating them can work well on
small problems, but it quickly runs into a severe practical
limitation: enumerating the state-action space is typically
impossible. For example, the number of possible chess games is [[more
than the number atoms in the known universe|well into the billions|64]]. A
good chess playing robot must be able to make good decisions in
scenarios it's never seen before, since *most* chess positions have
never been see before. 

---

Since [[neural networks|lookup tables]] are capable of generalizing to
unseen examples in supervised learning contexts, we can use the
agent's experience interacting with the environment to train a
_{span.reveal(when="blank-0")}neural network_ to learn the Q
function. 

---

We will have to grapple with the unknown-Q problem in this context
too. We will again use the Bellman equation: given an estimate of Q,
we can determine the Bellman *discrepancy* (the difference between the
left-hand side and an estimate of the right-hand side) and train the
neural network to reduce it. It turns out that merely by getting a
function to approximately satisfy the Bellman equation, we can
get it to approximate [[the actual Q function|the reward distribution]]. 

___

We will develop the core deep Q-learning ideas alongside a Python
implementation thereof. This code is only lightly modified from the
code on the blog post at [keon.io](https://keon.io/deep-q-learning/). 

Let's begin with the code that engages the agent with the
environment. The idea is to define a Python
object of a newly invented type _{code.language-python}DQNAgent_ that
is capable of making decisions (_{code.language-python}act_),
remembering (_{code.language-python}remember_) and updating its
weights based on the observed history
(_{code.language-python}replay_). Our main task will be to implement
the _{code.language-python}DQNAgent_ class. 

[Continue](btn:next)

---

``` python
import gym

env = gym.make('FrozenLake-v0')
state_size = env.observation_space.n
action_size = env.action_space.n
agent = DQNAgent(state_size, action_size)
batch_size = 32
EPISODES = 1000

for i in range(EPISODES):
    state = env.reset()
    for time in range(500):
        action = agent.act(state)
        next_state, reward, done, info = env.step(action)
        agent.remember(state, action, reward, next_state, done)
        state = next_state
        if done:
            print(f"episode: {i}/{EPISODES}, reward: {reward}")
            break
        if len(agent.memory) > batch_size:
            agent.replay(batch_size)
```

[Continue](btn:next)

---

Now let's make a _{code.language-python}DQNAgent_. Since this will be
a new type in Python, it should be implemented as a
[[class|number|struct]]. As seen above, we will want to supply a state
space size and an action space size when initializing an agent. 

---

``` python
class DQNAgent(object):
    def __init__(self, state_size, action_size):
        self.state_size = state_size
        self.action_size = action_size
```

---

Next let's implement the _{code.language-python}remember_ method. We
want to store each observed *{code.language-python}(state, action, reward,
next_state, done)* tuple in a data structure accessible to the
agent. Let's use a double-ended queue, or
_{code.language-python}deque_, from
_{code.language-python}collections_. A double-ended queue is like a
list but is optimized for appending and popping from both ends. We only want to remember the last
2000 observations, and using a deque with specified maximum length
makes this easier because [[a full deque drops old entries|plain
Python lists cannot drop entries]]. So we'll add 

``` python
from collections import deque
```

to our import statements, 

``` python
self.memory = deque(maxlen=2000)
```

to *{code.language-python}__init__*, and the method 

``` python
def remember(self, state, action, reward, next_state, done):
    self.memory.append((state, action, reward, next_state, done))
```

to _{code.language-python}class DQNAgent_. 

[Continue](btn:next)

---

Next, let's implement the _{code.language-python}act_ method. As we
saw in the iterative Q-learning section, we want to make some bad
decisions sometimes, for purposes of [[exploration|exploitation]]. So
with some probability, we will return an action selected uniformly at
random from the action space. We will call this probability
_{code.language-python}epsilon_, and we'll decrease it over time until
it reaches _{code.language-python}0.01_. 

---

When we aren't choosing steps randomly, we want to choose them
according to our current best estimate of the best action. We will
define a _{code.language-python}predict_ method, which in turn will
call an internally stored Keras model, to obtain our current estimate
of `Q`. Finally, we will return the index corresponding to the largest
value. 

``` python
# add to import statements: 
import numpy as np 
import random

# add to __init__
self.epsilon = 1.0

def act(self, state):
    if np.random.rand() <= self.epsilon:
        return random.randrange(self.action_size)
    act_values = self.predict(state)
    return np.argmax(act_values[0])
```

To implement _{code.language-python}predict_, we add a Keras model as
an attribute of the object. We will use a helper method to build the
model (whose name is prefixed with an underscore to indicate that the method is not
intended for use from outside the class). Then
_{code.language-python}predict_ will essentially just call
_{code.language-python}self.model.predict_, additionally taking care of
the one-hot encoding and the [[extra axis|spline|decorator]] expected by the Keras
object. 

``` python
# add import statements 
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.optimizers import Adam

# add these lines to __init__:
self.learning_rate = 0.001
self.model = self._build_model()

def _build_model(self):
    model = Sequential()
    model.add(Dense(24, input_dim=self.state_size, activation='relu'))
    model.add(Dense(24, activation='relu'))
    model.add(Dense(self.action_size, activation='linear'))
    model.compile(loss='mse',
                  optimizer=Adam(lr=self.learning_rate))
    return model

def predict(self, state):
    onehot = np.zeros(self.state_size)
    onehot[state] = 1
    return self.model.predict(onehot[np.newaxis,:])
```

---

Likewise, we can define a _{code.language-python}fit_ analogue to
_{code.language-python}self.model.fit_ which handles the one-hot
encoding

``` python
def fit(self, state, *args, **kwargs):
    onehot = np.zeros(self.state_size)
    onehot[state] = 1
    self.model.fit(onehot[np.newaxis, :], *args, **kwargs)
```

Note the use of _{code.language-python}\*args, \*\*kwargs_ to support
passing arbitrary positional and keyword arguments through from the
    _{code.language-python}DQNAgent_ _{code.language-python}fit_
    method to the underlying Keras _{code.language-python}fit_
    method. In the body of the function, _{code.language-python}args_
    will be a [[list of the positional arguments supplied|special
    unseen argument]] and  _{code.language-python}kwargs_
    will be a [[dictionary of the keyword arguments supplied|special
    unseen keyword argument]]. 

---

Finally, we will implement _{code.language-python}replay_, which is
the method in which the agent adjusts its weights based on what it has
observed. We will begin by sampling a mini-batch of observations and,
for each observation, fitting the model so as to better align the
prediction associated with the observed state-action pair and the
Bellman right-hand side (calculated for the observed reward and
next-state value). 

The code below contains a bit of a trick to conform to the Keras API:
we only want to induce a change in the Q-value associated with the
actual action taken, so we call _{code.language-python}fit_ with a
vector that is only different from the already-predicted vector in the
position coresponding to the action taken. 

``` python
self.gamma = 0.95 # add to __init__

def replay(self, batch_size):
    minibatch = random.sample(self.memory, batch_size)
    for state, action, reward, next_state, done in minibatch:
        if not done:
            target = (reward + self.gamma *
                      np.amax(self.predict(next_state)[0]))
        else: 
            target = reward
        target_f = self.predict(state)
        # index 0 b/c of extra axis expected by Keras: 
        target_f[0][action] = target 
        self.fit(state, target_f, epochs=1, verbose=0)
    if self.epsilon > 0.01:
        self.epsilon *= 0.995
```

If we run this model, then the update messages show us that the agent
takes several runs to [[begin finding the frisbee|find the frisbee
every time]] and then begins succeeding [[more frequently|100% of the time]]. 

---
> id: Policy gradient methods
## Policy gradient methods

### Introduction

Let's revisit the football player deciding whether to play the ball to
the middle of the field or the corner. The Q-learning approach is to
assess the [[value|convenience]] of each maneuver and choose the best one. The
player's effectiveness is dependent on how well they can recognize how
the play will unfold and which action will therefore lead to the best
outcomes. 

---

Another possibility is that the player is simply following a rule of
thumb: *when I have this angle on my defender is this part of the
field, go to the corner 30% of the time and go back to the middle 70%
of the time*. In this scenario, their policy is not based on
predictions about states of their environment; rather it's been honed
based on their past experience of the relationship between their
policy and the [[results|models|probabilities]] they've achieved. 

---

This second approach is called a *policy gradient* method. Policy
gradient's key difference from Q-learning is that the policy is being
modeled directly and is adjusted based on observed rewards. 

[Continue](btn:next)

---

The two approaches share some mathematical similarities. Given a
policy $\pi$ which maps the state space $\mathcal{S}$ to the set of
probability measures on the action space $\mathcal{A}$, 
we define the function `J` by 
\begin{equation} 
J(s) =
\mathbb{E}[r_0 + \gamma r_{1} + \gamma^2 r_{2} + \cdots],
\label{eq:J} 
\end{equation} 
where the expectation is calculated with respect to the randomness in
the MDP *and* the randomness in the policy $\pi$. Recall that $r_0$
represents reward on the current step, $\gamma r_0$ the discounted
reward on the next step, and so on. Given omniscience of 
the MDP and unlimited resources, we could 
approximate $J(s)$ arbitrarily well by 
[[simulating many runs and averaging|adding up the numbers on the
right-hand side]]. The main distinction between `J` and `Q` is that
[[`J` acts on states, not state-action pairs|`J` involves rewards|`Q`
involves the future]]. 

---

The first challenge in applying the policy gradient method will be to
approximate the gradient of `J` so that we can update `J` according 
to the gradient ascent rule $\theta \Leftarrow \theta + \alpha \frac{\partial J}{\partial \theta}$, where
$\alpha$ is the learning rate and $\theta$ is a vector of all of `J`'s
parameters. It turns out that we can crack this problem with some
pretty interesting math ideas. 

[Continue](btn:next)

---

### Approximating the gradient

Let's begin with an exercise. 

::: .exercise

Consider a function defined as the expected value of some random
variable which can readily be simulated. We can use Monte Carlo to
approxiate the value of this function. Explain why it is not feasible
to use Monte Carlo and finite difference approximations to approximate
the *derivative* of this function. 

:::

[Continue](btn:next)

---

*Solution.* Recall that statistical error is quite large compared to
other common sources of numerical error: the mean of the random
variable is estimated with an error that decreases as the square root
of the number of samples. Therefore, both values in the finite
difference approximation have significant error unless the number of
samples used is astronomical (e.g., on the order of $10^{32}$ to get
64-bit machine precision). Since subtraction is a numerically unstable
way to compute derivatives (due to catastrophic cancellation), a
finite-difference derivative estimate using Monte Carlo will be
inaccurate to the point of meaninglessness.

[Continue](btn:next)

---

With that exercise in mind, let's look at an expression for the
gradient of `J`. Let's use the variable $\tau$ to represent a
*trajectory*. For example, in a board game setting, $\tau$ would
represent a single game, from a particular board position to the end. 
Given a policy with parameter vector $\theta$, let's denote by
$p_\theta(\tau)$ the probability that the the trajectory $\tau$
occurs. Finally, let's denote by $R(\tau)$ the total discounted reward
for the trajectory $\tau$. Then by the definition of expectation, 
\begin{equation} 
  J = \sum_{\tau} R(\tau) p_\theta(\tau), 
\end{equation}
where the sum is over all trajectories $\tau$. Therefore, 
\begin{equation} 
  \frac{\partial J}{\partial \theta} = \sum_{\tau} R(\tau)
  \frac{\partial p_\theta}{\partial \theta}(\tau), 
\end{equation}
by [[linearity of differentiation|the fundamental theorem of
calculus]]. 

---

This formula is not useful yet, because our only tool for
approximating the probability measure on trajectories $\tau$ is to
sample trajectories (by sampling actions according to the policy values
and sampling from). However, we can multiply and divide by
$p_\theta(\tau)$ to get 
$$
  \frac{\partial J}{\partial \theta} = \sum_{\tau} R(\tau)
  \frac{\partial}{\partial \theta} (\log p_\theta(\tau))
  p_{\theta}(\tau). 
$$
The right-hand side can be written as 
$$
\mathbb{E}\left[R(\tau) \frac{\partial}{\partial \theta} (\log p_\theta(\tau))\right], 
$$
by [[the definition|linearity]] of expectation. 

---

This formula still isn't useful yet because we still don't want to be
approximating $\log p_\theta(\tau)$ by Monte Carlo when we need to
differentiate it. However, if we write $\tau$ out as 
$(s_0, a_0, r_0, s_1, a_1, \ldots)$,
then 

``` latex
p_\theta(\tau) = \prod_{t \geq 0}\left[\mathbb{P}_{(s_t,a_t)}
(s_{t+1}) \mathcal{R}_{(s_t,a_t)}(r_t) \pi_{\theta}(s_t,a_t)\right]
```

This formula just says that the probability of a trajectory `tau` is
the probability that each transition in `tau` occurs. Each of those
probabilities is prescribed by one of the probability measures $\mathbb{P}$,
$\mathcal{R}$, or $\tau$. 

Taking the log of both sides turns the product into a sum, and then
differentiating with respect to $\theta$ eliminates the first term
since it's [[constant with respect to `theta`|linear in
`theta`]]. Likewise, the [[second|third]] term also goes away. We're
left with 

``` latex
\frac{\partial}{\partial \theta}\log p_{\theta}(\tau) = \sum_{t \geq
0}\frac{\partial}{\partial \theta}\log \pi_{\theta}(s_t,a_t). 
```

---

Now *this* expression is no problem to calculate for a given
trajectory $\tau$, since the function
$\pi_{\theta}$ can be differentiated explicitly (using
backpropagation, for example, if $\pi_{\theta}$ is a neural network). 

Putting it all together, our Monte Carlo estimate for 
$\partial J/\partial \theta$ is 

``` latex
\label{eq:mc}
\overline{\sum_{\tau}}R(\tau)\sum_{t \geq 0} \frac{\partial}{\partial \theta}
\log \pi_{\theta}(s_t, a_t), 
```

where $\overline{\sum_{\tau}}$ indicates taking a mean over
a collection of sample trajectories $\tau$. 

[Continue](btn:next)

---

### Actor-Critic

One difficulty with the strategy suggested above is that it converges
very slowly. Consider, for example, a scenario where all rewards are
positive. Then every action performed in the sample trajectories will
get a boost from the gradient ascent procedure, and the optimal policy
will be obtained only by virtue of genuinely better actions getting
[[more|less]] of a boost in the long run. 

---

It would be preferable to instead decrement the values assigned by the
policy to inferior actions as we go. We can do this by defining a
baseline function $b:\mathcal{S} \to \mathbb{R}$ 
to subtract from the reward in \eqref{eq:mc}.

[Continue](btn:next)

---

Simple heuristics can be used for the baseline function, but we can
also train a separate model for the baseline function. In fact, we've
already discussed training a model to assess the quality of each
state-action pair; it's called [[Q-learning|Monte Carlo]]. We can use
the $Q$ function to approximate the value of each state. 

---

Conceptually, applying policy gradient and Q-learning jointly in this
way can be thought of like an actor (the policy) and a critic (the
model for Q) interacting: the actor chooses a policy and then uses the
feedback from the critic to help determine how to adjust the
policy. This metaphor gives rise to this algorithm class's name:
**[[actor-critic|playwright-audience|player-coach]]**. 

---

To be specific, let's consider one particular actor-critic model: the
**advantage actor critic** (AAC). The name comes the idea of modifying
the actor weight update rule by replacing reward $\mathcal{R}(\tau)$ 
with the **advantage**

``` latex
A(s_t, a_t) = Q(s_t, a_t) - V(s_t),
```

where $V(s)$
represents the average value of the state $s$ when the action 
from that state is chosen randomly according to the policy $\pi$. 
We can write $V$ as the expectation of $f(s_t,A)$ where $f$ is
[[`Q`|`A`|`J`]] and $A$ is chosen
randomly from [[`pi`|the uniform distribution]]. 

---

To simplify the setup further and perform calculations over
full trajectories, we will approximate the advantage by substituting 
$r_t + \gamma V(s_{t+1})$ for $Q(s_t, a_t)$ in the formula for
advantage, and we will train the critic model to estimate the value 
function $V$ rather than $Q$. 
      
[Continue](btn:next)

---
  
All together, the AAC algorithm is as follows. With state and action at
time $t$ already sampled, we 

1. sample $a_{t+1}$ from the policy proposed by the policy model,
1. sample $r_t$ and $s_{t+1}$ from the environment, 
1. add $\alpha (r_t + \gamma \widehat{V}(s_{t+1}) - \widehat{V}(s_t))
   \log \pi_\theta(s_t, a_t)$
   to the parameters of the actor model
1. adjust the parameters of the critic model by fitting the network 
   with the single-element set of training data $[s_t]$ and target 
   $r_t + \gamma \widehat{V}(s_{t+1})$. 
   
[Continue](btn:next)

Your homework will involve implementing this model in Keras!
