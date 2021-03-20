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

#=
Runs a Markov chain until a state is reached.
Inputs:
- states: Same as defined in ``run_fixed_simulation`` function
- P: Same as defined in ``run_fixed_simulation`` function
- S0: Same as defined in ``run_fixed_simulation`` function
- Sf: An array of states defining a possible final state. Assumed to be a
      subset of the states variable.
Outputs:
- An integer representing the number of steps it took to get to get to state
  contained in the Sf array.
=#
function run_simulation(states, P, S0, Sf)

    # Define a dictionary mapping state to their index in P
    state_dict = Dict(states[i] => i for i = 1:length(states))

    # Define the current state of the chain
    Sn = S0

    # Keep tracks of number of steps taken
    steps = 0

    # Run through the Markov changing
    while !(Sn in Sf) && steps < 1000
        state_index = get(state_dict, Sn, -1)
        next_state_index = one_step(P[state_index,:])
        Sn = states[next_state_index]
        steps += 1
    end

    return steps
end


# Define gambler's ruin Markov chain with N = 5 and p = .3

# gambler's ruin state space (χ)
states = [0,1,2,3,4,5]

# Transition matrix for gambler's ruin
P = [1 0 0 0 0 0;
    .7 0 .3 0 0 0;
    0 .7 0 .3 0 0;
    0 0 .7 0 .3 0;
    0 0 0 .7 0 .3;
    0 0 0 0 0 1]

# Estimate probability of having $5 after 6 turns when starting with $2
num_simulations = 100000
mc_est = mean([run_fixed_simulation(states, P, 2, 6) == 5
 for i = 1:num_simulations])

# Define masters program Markov chain
states = [1,2,"G","D"]

# Transition matrix for masters Markov chain
P = [.4 .5 0 .1;
     0 .3 .6 .1;
     0 0 1 0;
     0 0 0 1]

mc_est = mean([run_simulation(states, P, 1, ["G", "D"]) for i = 1:10000])
