#=
Takes one step in the Markov chain according to the given state's transition
vector.
Inputs:
- transition_vector: An array of length p where the ith element denotes the
                     probability of transitioning into state i from the current
                     state (which is implicitly given).
Outputs:
- An integer in {1,2,..., p} denoting the index of the next state which occurs
with the probability specified in transition_vector.
=#
function one_step(transition_vector)
    cumulative_vector = cumsum(transition_vector)
    state_index = 1
    U = rand()
    while(U > cumulative_vector[state_index])
        state_index += 1
    end

    return state_index
end

#=
Runs a Markov chain a fixed number of times and returns the final state.
Inputs:
- states: An array of length p where each element represents a state of the
          chain. Assumes the ordering is such that the probability of
          transitioning from state i to state j is given by P[i,j].
          Examples:
          [0,1,2,3,4,5]
          ["red", "green", "blue"]
          [0,"blue",3,2]
- P: A (p x p) matrix denoting the transition matrix of the Markov chain.
     Assumes the rows of P sum to 1 and P[i,j] >= 0 for all i,j.
- S0: The initial state of the Markov chain. Assumed to be an element of the
      state variable.
- steps: A nonnegative integer specifying the number of steps for the Markov
         chain to go through.
Outputs:
- An element of the states variable denoting the state the chain is in after
  the specified number of steps.
=#
function run_fixed_simulation(states, P, S0, steps)

    # Define a dictionary mapping state to their index in P
    state_dict = Dict(states[i] => i for i = 1:length(states))

    # Define the current state of the chain
    Sn = S0

    # Run through the specified number of steps
    for i = 1:steps
        state_index = get(state_dict, Sn, -1)
        next_state_index = one_step(P[state_index,:])
        Sn = states[next_state_index]
    end

    return Sn
end

# State space (χ)
states = [1,2,3,4]

# Transition matrix for gambler's ruin
P = [.1 .1 .4 .4; .1 .2 .3 .4; .4 .3 .15 .15; .4 .4 .15 .05]

# Create histogram of S_100
num_simulations = 100000
state100 = [run_fixed_simulation(states, P, 4, 100) for i = 1:num_simulations]

using Plots
histogram(state100, legend = false, grid = false,
    bg = RGB(247/255, 236/255, 226/255))

cd("/Users/elvis/Documents/DSI/courses/content/stochastic-approximations/julia-code/")
savefig("../images/invariant_measure_hist_2.svg")
