using Distributions

# ρ(x) in integrand
ρ(x) = 1/sqrt(π)*exp(-x^2)

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
    samples = zeros(n)
    samples[1] = rand()

    # Conditional Q distribution
    d = Normal(0,b)

    acceptances = 0

    for i=2:n
        # Propose Y
        ξ = rand(d)
        Y = samples[i-1] + ξ

        # Acceptance probability
        α = min(1, ρ(Y)/ρ(samples[i-1]))

        # Next state
        if rand() < α
            samples[i] = Y
            acceptances += 1
        else
            samples[i] = samples[i-1]
        end
    end

    println(acceptances)

    return samples
end

# Obtain 1000 samples with b = 2
S = metropolis_hastings(10000,1)

# f(x) in integrand
f(x) = -1/2 < x < 2 ? abs(cos(x)) : 0

# Estimate integral
int_estimate = sqrt(π)*mean([f(x) for x in S])
