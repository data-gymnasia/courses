using Distributions, LaTeXStrings, Random, Plots
Random.seed!(1234)

# Simulate n coin flips with a bias of 0.6
n = 100
flips = rand(n) .< 0.6
p = sum(flips)
q = n - p

# Create plot of Beta(α,β) density
α = 10
β = 5

x_values = 0:0.001:1

# Get prior and posterior values
prior = [pdf(Beta(α,β),x) for x in x_values]
posterior = [pdf(Beta(α+p,β+q),x) for x in x_values]


# Create plots
plot(x_values, posterior, seriestype = :line, label = "posterior",
 yaxis = L"f(\theta|y)", xaxis = L"\theta", grid = false)

plot!(x_values, prior, seriestype = :line, label = "prior", grid = false)

# savefig("beta_prior_coin_ex.svg")
