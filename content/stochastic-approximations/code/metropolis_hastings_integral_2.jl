using Distributions

# ρ(x,y) in integrand
ρ(x,y) = (0 < x < 1) && (0 < y < 2) ? 1/2 : 0

#=
Implementation of random walk sampler Metropolis-Hastings.
Inputs:
- n: The number of states to return
- b: The standard deviation of the normal distribution used in the proposal
     distribution
Outputs:
- Returns an array of length n denoting states S_i in Metropolis-Hastings alg.
=#
function metropolis_hastings(n, b)

    # Samples
    samples = zeros(n,2)
    samples[1,:] = rand(2)

    # Conditional Q distribution
    d = Normal(0,b)

    acceptances = 0

    for i=2:n
        # Propose Y
        ξx = rand(d)
        ξy = rand(d)
        X = samples[i-1,1] + ξx
        Y = samples[i-1,2] + ξy

        # Acceptance probability
        α = min(1, ρ(X,Y)/ρ(samples[i-1,1],samples[i-1,2]))

        # Next state
        if rand() < α
            samples[i,1] = X
            samples[i,2] = Y
        else
            samples[i,:] = samples[i-1,:]
        end
    end


    return samples
end

# Obtain 10000 samples with b = 1
S = metropolis_hastings(10000,1)

# f(x) in integrand
f(x,y) = exp(sin(x*y))

# Estimate integral
M = 1000
int_estimate = 2*mean([f(x,y) for (x,y) in zip(S[M:end,1], S[M:end,2])])
