using Turing, MCMCChains, Distributions

@model HMM(y) = begin
    n = length(y)
    x = zeros(Int64, length(y)) # hidden states

    # Define priors
    p₁ ~ Uniform(0,1) # Transition probability 1→1
    p₂ ~ Uniform(0,1) # Transition probability 2→1

    # Define transition matrix
    P = [p₁ 1-p₁; p₂ 1-p₂]

    # Initialize samples
    x[1] ~ Categorical([0.5,0.5]) # Start Z at either 1 or 2
    y[1] ~ Normal(x[1],0.1)

    for i=2:n
        # Get next hidden state
        x[i] ~ Categorical(P[x[i-1],:])
        y[i] ~ Normal(x[i], 0.1) # Add noise
    end

    return (p₁, p₂)
end

## Simulate observed data
using DataFrames
using CSV
p₁ = 0.25
p₂ = 0.55
P = [p₁ 1-p₁; p₂ 1-p₂]
data_n = 15
Z_samples = zeros(Int64, data_n)
Z_samples[1] = rand(Categorical([0.5, 0.5]))
X_samples = zeros(data_n)
X_samples[1] = rand(Normal(Z_samples[1], 0.1))
for i=2:data_n
    Z_samples[i] = rand(Categorical(P[Z_samples[i-1],:]))
    X_samples[i] = rand(Normal(Z_samples[i], 0.1))
end

df = DataFrame(Y = X_samples)
CSV.write("pp_ex_2_data.csv", df)
##

# Load observed data
data = CSV.read("pp_ex_2_data.csv")[:,1]

## Use HMC sampler to obtain posterior samples
num_posterior_samples = 1000
ϵ = 0.1 # Leapfrog step size
τ = 10   # Number of leapfrog iterations
hmc = HMC(ϵ, τ, :p₁, :p₂)
particle_gibbs = Turing.PG(20, :z)
G = Gibbs(hmc, particle_gibbs)
# Obtain posterior samples
chain = sample(HMM(data), G, num_posterior_samples)

# Extract summary of p parameter and plot histogram
using LaTeXStrings
using StatsPlots

plot(chain[:p₁], seriestype = :histogram, bg =  RGB(247/255, 236/255, 226/255), title=L"p_1")
plot(chain[:p₂], seriestype = :histogram, bg =  RGB(247/255, 236/255, 226/255), title=L"p_2")


savefig("../images/pp_ex_2_hist_2.svg")

# Extract 95% interval
println(quantile(Array(chain[:p₁]), [0.025, 0.975]))
println(quantile(Array(chain[:p₂]), [0.025, 0.975]))
