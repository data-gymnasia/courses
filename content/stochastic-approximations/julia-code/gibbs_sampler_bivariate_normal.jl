using Distributions, Random
Random.seed!(1234)

# Sample from conditional X|Y=y
# Inputs:
# - y: The current value of y (Y_k)
# - μ: The mean vector of the joint density
# - Σ: The covariance matrix of X,Y
# Outputs:
# X_{k+1} where X_{k+1} ∼ f(X|Y=y)
function condition_on_Y(y, μ, Σ)
    μX = μ[1]
    μY = μ[2]
    σX2, σXY, _, σY2 = Σ

    conditional_mean = μX + σXY/σY2*(y-μY)
    conditional_variance = (1-σXY^2/(σX2*σY2))*σX2

    distribution = Normal(conditional_mean, conditional_variance)

    return rand(distribution)
end

# Sample from conditional Y|X=y
# Inputs:
# - x: The current value of x (X_{k+1})
# - μ: The mean vector of the joint density
# - Σ: The covariance matrix of X,Y
# Outputs:
# Y_{k+1} where Y_{k+1} ∼ f(y|X=x)
function condition_on_X(x, μ, Σ)
    μX = μ[1]
    μY = μ[2]
    σX2, σXY, _, σY2 = Σ

    conditional_mean = μY + σXY/σX2*(x-μX)
    conditional_variance = (1-σXY^2/(σX2*σY2))*σY2

    distribution = Normal(conditional_mean, conditional_variance)

    return rand(distribution)
end

# Gibbs sampler to obtain samples from (X,Y) ~ N(μ,Σ)
# Inputs:
# - μ: The joint density mean vector
# - Σ: The covaraince matrix of X and Y
# - n: The number of samples to return
# Outputs:
# An (n x 2) matrix where each row represent a sample
function bivariate_gibbs(μ, Σ, n)
    # Store samples here
    S = zeros(n,2)

    # Initialize S_0 to means
    S[1,:] = μ

    for i=2:n
        X_k1 = condition_on_Y(S[i-1,2], μ, Σ) # Get X_{k+1}
        Y_k1 = condition_on_X(X_k1, μ, Σ) # Get Y_{k+1}
        S[i,:] = [X_k1, Y_k1]
    end

    return S
end

# Define joint density parameters
μX = -1
μY = 1
σX = √2
σY = √3
σXY = 2
μ = [μX, μY]
Σ = [σX^2 σXY; σXY σY^2]

# Get samples
samples = bivariate_gibbs(μ, Σ, 10000)


# Create 2d histogram
using Seaborn, Pandas
pygui(true)
df = DataFrame(Dict(:X=>samples[:,1], :Y=>samples[:,2]))
jointplot(x = "X", y = "Y", data = df, s = 1, alpha = 0.18)
