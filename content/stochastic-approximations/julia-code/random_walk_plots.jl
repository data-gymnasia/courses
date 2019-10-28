using Plots
using Random

#=
Generates a one-dimensional random walk starting at state S0  with s steps
and probability p of moving right.
Inputs:
- S0: An integer representing the starting state of the chain.
- p: A number between 0 and 1 representing the probability of the particle
moving to the right.
- s: The number of steps to run the walk for.
=#
function one_d_walk(S0, p, s)

    # Array to save the position of the particle
    walk = zeros(s+1)
    walk[1] = S0

    for i = 2:(s+1)
        U = rand()
        Xi = 1
        if U > p
            Xi = -1
        end
        walk[i] = walk[i-1] + Xi
    end

    return walk
end

#=
Generates a two-dimensional random walk starting at state S0  with s steps
and probability pR of moving right and probability pU of moving up.
Inputs:
- S0: An integer representing the starting state of the chain.
- pL: A number between 0 and 1 representing the probability of the particle
moving to the left.
- pR: A number between 0 and 1 representing the probability of the particle
moving to the right.
- pU: A number between 0 and 1 representing the probability of the particle
moving up.
- pD: A number between 0 and 1 representing the probability of the particle
moving down.
- s: The number of steps to run the walk for.
=#
function two_d_walk(S0, pL, pR, pU, pD, s)

    # Matrix to save the position of the particle
    walk = zeros(s+1,2)
    walk[1,:] = S0

    # Distribution
    cumProb = cumsum([pR, pL, pU, pD])
    # Possible moves in each column
    movesMatrix = [1 0; -1 0; 0 1; 0 -1]

    for i = 2:(s+1)
        U = rand()
        step = [0,0]
        j = 1
        while step == [0,0]
            if U < cumProb[j]
                step = movesMatrix[j,:]
            end
            j += 1
        end
        walk[i,:] = walk[i-1,:] + step
    end

    return walk
end




# Number of steps in walk
n = 100

# Generate and plot a symmetric 1-d walks
plot(0:n, one_d_walk(0, .5, n), legend = false, grid = false,
    bg = RGB(247/255, 236/255, 226/255),
    title = "Symmetric 1-d Random Walk")
plot!(0:n, one_d_walk(0, .5, n), legend = false)
plot!(0:n, one_d_walk(0, .5, n), legend = false)
plot!(0:n, one_d_walk(0, .5, n), legend = false)
plot!(0:n, one_d_walk(0, .5, n), legend = false)
plot!(0:n, zeros(n+1), legend = false, )

# Generate and plot a symmetric 2-d walks
walk2d = two_d_walk([0,0], .25, .25, .25, .25,  3000)
plot(walk2d[:,1], walk2d[:,2], legend = false, grid = false,
    bg = RGB(247/255, 236/255, 226/255))
