using Turing, MCMCChains, Distributions, StatsPlots, CSV

@model die_model(observations) = begin
    # Set prior distribution for p (probability of rolling 1)
    p ~ Uniform(0,1)#Beta(5,1)

    # Probability of rolling one of 2 - 6
    q = (1-p)/5

    # Define how samples are obtained
    for i=1:length(observations)
        observations[i] ~ Categorical([p, q, q, q, q, q])
    end

    return p
end

# Define the true probabilities
true_p = 0.25
true_q = (1-true_p)/5

## Simulate observed data
using DataFrames
using CSV
data = rand(Categorical([true_p, true_q, true_q, true_q, true_q, true_q]), 100)
df = DataFrame(X = data)
CSV.write("pp_ex_1_data.csv", df)

# Load observed data
data = CSV.read("pp_ex_1_data.csv")[:,1]

# Use HMC sampler to obtain posterior samples
num_posterior_samples = 1000
ϵ = 0.05 # Leapfrog step size
τ = 10   # Number of leapfrog iterations

# Obtain posterior samples
chain = sample(die_model(data), HMC(ϵ, τ, :p), num_posterior_samples, progress=false)

# Extract summary of p parameter and plot histogram
p_summary = chain[:p]
plot(p_summary, seriestype = :histogram, bg =  RGB(247/255, 236/255, 226/255))


savefig("../images/pp_ex_1_hist.svg")

# Extract 95% interval
println(quantile(Array(p_summary), [0.025, 0.975]))
