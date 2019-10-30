using Distributions

# Gamma distribution
k = 3
θ = 2
ρ(x) = x > 0 ? 1/(2*θ^k)*x^(k-1)*exp(-x/θ) : 0

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
S = metropolis_hastings(1000,16)
density_values = [ρ(x) for x = 0:0.01:30]

histogram(S, normalize = true, legend = false,
    bg = RGB(247/255, 236/255, 226/255), fill = RGB(0,0,20/255))
hist = plot!(0:0.01:30, density_values, lc = :lightgreen)

mixing = plot(S, legend = false, bg = RGB(247/255, 236/255, 226/255), lc = RGB(0,0,20/255),xlabel = "k")


plot(mixing, hist)

savefig("../images/mh_sampling_1_2.svg")
