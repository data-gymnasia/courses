using Distributions
using LaTeXStrings

# Create plot of Beta(α,β) density
α = 10
β = 5

x_values = 0:0.01:1
y_values = [pdf(Beta(α,β),x) for x in x_values]

plot(x_values, y_values, seriestype = :line, legend = false,
 yaxis = L"f(\theta)", xaxis = L"\theta", grid = false)

savefig("beta_prior_coin_ex.svg")
