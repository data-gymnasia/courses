
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

    center
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1qa7oRhZvbM?start=12&end=20" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

However, if the algorithm is provided with information about when it
was doing well and when it wasn't, then over time it can learn to do
much better:

    center
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1qa7oRhZvbM?start=94&end=102" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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

    center
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5Q14EjnOJZc?start=94&end=100" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
problem is ($\mathcal{S}, \mathcal{R}, \mathcal{R}, \mathbb{P},
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
maximizes the total reward, where the reward at time $t$
contributes its value times $\gamma^t$ to the total. This problem as stated is underspecified since the
reward is a [[random|complicated]] function of the actions chosen by
the agent. _{span.reveal(when="blank-0")}To be more precise, the agent
seeks to maximize its expected reward._

 The formula for the accumulated discounted reward is [[$\sum_{t \geq
0} \gamma^tr_t$|$\sum_{t \geq 0} r_t$|$\sum_{t \geq 0} \gamma^t$]].

--- 

::: .exercise
Exercise  
Consider the following very simple game, played on an 8 × 8 chess
board. Beginning with the rook in some position on the board, your
goal is to get the rook to the top right square in as few moves as
possible (note: a rook is a chess piece which can move along columns
and rows). 

* What is the largest number of moves that might be required? [[2]]
* Come up with a scheme for rewarding the agent that aligns with the
  goal of reaching the desired destination in the smallest number of
  moves. Decide on your answer before clicking: [[reward of -1 for each
  move and halt game at top right corner|]]
* Is the optimal policy unique? [[No|Yes]]
:::
