using Distributions, Plots, CSV, Pandas

# Sample x_{k+1} given x_k
# Parameters:
# - x_k: The kth X sample. One of -1, 0, or 1
# Outputs:
# - x_{k+1}: The (k+1)th X sample
function sample_x(xk)
    # Define q parameter
    q = 0.3

    # Probability that x_{k+1} = 1
    p = q*(xk == 1) + (1-q)*(xk == 0)

    return rand() < p
end

# Obtains n samples of X based on HMM
# Inputs
# - n: An integer representing the number of samples to return
# Outputs
# A vector of length n where the kth element is the kth sample of X
function get_x_samples(n)
    # Store x samples
    samples = zeros(n)

    # Randomly set x1
    samples[1] = rand(0:1)

    # Get samples x_2 through x_n
    for i=2:n
        samples[i] = sample_x(samples[i-1])
    end

    return samples
end

# Obtains n samples of Y based on HMM
# Inputs
# - x_samples: A vector of length n representing the samples of X
# Outputs
# A vector of length n where the kth element is the kth sample of Y
function get_y_samples(x_samples)
    # Define normal standard deviation
    σ = 1.5

    # Store y samples
    n = length(x_samples)
    y_samples = zeros(n)

    for i=1:n
        𝒩 = Normal(x_samples[i], σ)
        y_samples[i] = rand(𝒩)
    end

    return y_samples
end

# Obtian and plot samples
n = 1500
x_samples = get_x_samples(n)
y_samples = get_y_samples(x_samples)

plot(1:n,x_samples, seriestype=:scatter, bg = RGB(247/255, 236/255, 226/255), color = RGB(0,191/255,255/255), label = "x", alpha = 0.2)
plot!(1:n,y_samples, seriestype=:scatter, color = RGB(191/255,1,0), label =
"y", alpha = 0.2)


cd("/Users/elvis/Documents/DSI/courses/content/stochastic-approximations/images/")

# Note X and Y variables swapped here from what was presented in example
df = DataFrame(Dict(:X=>y_samples))

CSV.write("/Users/elvis/Documents/DSI/courses/content/bayesian-inference-and-graphical-models/code/hmm_observations.csv", df)
