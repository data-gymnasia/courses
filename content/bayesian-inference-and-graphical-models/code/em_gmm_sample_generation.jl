# Generates the dataset to be used in GMM example for EM course

using Plots, Distributions, Random, DataFrames, CSV
Random.seed!(123)

# Set GMM parameters
n = 200
α = 0.4
μ₀ = [-1, 2]
μ₁ = [3.0, 7.0]
Σ₀ = [2.0 1.0; 1.0 2.0]
Σ₁ = [1.5 0; 0 0.5]
𝒩₀ = MvNormal(μ₀, Σ₀)
𝒩₁ = MvNormal(μ₁, Σ₁)
X₁ = zeros(n)
X₂ = zeros(n)

for i=1:n
    X₁[i],X₂[i] = rand() < α ? rand(𝒩₁) : rand(𝒩₀)
end

# Store in data frame
df = DataFrame(X1 = X₁, X2 = X₂)

# Save to csv
CSV.write("gmm_observations.csv", df)
