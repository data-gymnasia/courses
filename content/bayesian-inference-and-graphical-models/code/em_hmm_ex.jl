using Distributions, CSV, Printf

# Load observed data
x_samples = CSV.read("hmm_observations.csv")[:,1]


# Gives P(Y_k = 1 | All other variables)
# Inputs
# - x: The vector of (observed) X variables
# - y: The current sample of Y variables
# - θ_k: The vector parameters in the form [q, σ²]
# - k: The index of the Y variable of interest
# Outputs
# The probability that Y_k = 1 given all other variables
function conditional_probability(x, y, θ_k, k)
    # Extract density parameters
    q, σ² = θ_k
    σ = sqrt(σ²)

    n = length(x)

    𝒩₁ = Normal(1, σ)
    𝒩₀ = Normal(0, σ)

    if k == 1
        joint = (q*(y[k+1] == 1) + (1-q)*(y[k+1] == 0))*pdf(𝒩₁, x[k])

        marginal = joint + (q*(y[k+1] == 0) + (1-q)*(y[k+1] == 1))*pdf(𝒩₀,x[k])
    elseif k == n
        joint = (q*(y[k-1] == 1) + (1-q)*(y[k-1] == 0))*pdf(𝒩₁, x[k])

        marginal = joint + (q*(y[k-1] == 0) + (1-q)*(y[k-1] == 1))*pdf(𝒩₀,x[k])

    else
        joint = (q*(y[k-1] == 1) + (1-q)*(y[k-1] == 0))*(q*(y[k+1] == 1) + (1-q)*(y[k+1] == 0))*pdf(𝒩₁,x[k])

        marginal = joint + (q*(y[k-1] == 0) + (1-q)*(y[k-1] == 1))*(q*(y[k+1] == 0) + (1-q)*(y[k+1] == 1))*pdf(𝒩₀, x[k])
    end

    return joint/marginal
end


# Performs one single Gibbs sampler iteration of Y
# Inputs
# - x: The vector of (observed) X variables
# - y: The current sample of Y variables
# - θ_k: The vector parameters in the form [q, σ²]
# - k: The index of the Y variable of interest
# Outputs
# A Y sample where each index of Y is sampled by conditioning on all other
# variables
function get_single_gibbs_sample(x, y, θ_k)
    n = length(x)

    for k = 1:n
        y[k] = rand() < conditional_probability(x, y, θ_k, k)
    end

    return y
end

# Returns a sample of Y
# Inputs
# - x: The vector of (observed) X variables
# - θ_k: The vector parameters in the form [q, σ²]
# Outputs
# A Y sample where Y ~ P(Y|X = x)
function gibbs_sampler(x, θ_k)
    n = length(x)

    y = rand(0:1, n)

    for i = 1:75 # Burn-in period
        y = get_single_gibbs_sample(x, y, θ_k)
    end

    return y
end

# Estimates the values of a,b,c (as defined in example) via Monte Carlo
# Inputs
# - x: The vector of (observed) X variables
# - θ_k: The vector parameters in the form [q, σ^2]
# Outputs
# A vector in the form [a,b,c] representing a MC estimate of a,b, and c
function estimate_a_b_c(x, θ_k)
    n = length(x)

    # Number of MC samples
    num_samples = 100

    # Estimate sum
    total_a = 0
    total_b = 0
    total_c = 0

    for k = 1:num_samples
        y_samples = gibbs_sampler(x, θ_k)
        estimate_a = sum(y_samples[1:(n-1)] .== y_samples[2:n])
        estimate_b = sum(y_samples[1:(n-1)] .!= y_samples[2:n])
        estimate_c = sum((x - y_samples).^2)


        total_a += estimate_a
        total_b += estimate_b
        total_c += estimate_c
    end

    return [total_a, total_b, total_c]./num_samples
end

# Performs EM algorithm to estimate θ
# Inputs
# - x: The vector of (observed) X variables
# Outputs
# An estimate of θ = [q, σ²]
function em_algorithm(x)
    # Initialize theta parameter [q, σ²]
    θ_k = [0.5, 1]
    @printf("k = 0: [%f, %f]\n", θ_k[1], θ_k[2])

    num_iterations = 500

    for i = 1:num_iterations
        a, b, c = estimate_a_b_c(x, θ_k)
        q_1 = a/(a+b)
        σ²_1 = c/(a+b+1)
        θ_k = [q_1, σ²_1]

        @printf("k = %d: [%f, %f]\n", i, θ_k[1], θ_k[2])
    end

    return θ_k
end

em_algorithm(x_samples)
