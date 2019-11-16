using Plots
using Random
using Pkg; Pkg.add("LaTeXStrings")
using Pkg; Pkg.add("Distributions")
using Distributions
using LaTeXStrings

# Set working directory
cd("/Users/elvis/Documents/DSI/courses/content/stochastic-approximations/julia-code/")

# Set seed
Random.seed!(123)

# Importance sampling density
μ = 5
q(x) = 1/sqrt(2*π)*exp(-(x-μ)^2 / 2)
f(x) = 1/sqrt(2*π)*exp(-x^2/2)*(x >= 11/2)

# Plot of f(x)
x_vals = 5.501:0.01:10
f_vals = f.(x_vals)
plot(x_vals, f_vals, legend = false,
    bg = RGB(247/255, 236/255, 226/255))

# Importance sampling method
n = 1000000
distribution = Normal(μ, 1)
samples = rand(distribution, n)
U_i = f.(samples)./q.(samples)
In = sum(U_i)/n
σ_n = sqrt(1/n*sum((U_i .- In).^2))
err = 1.96*σ_n/sqrt(n)
interval = [In - err, In + err]
println(interval)

savefig("../images/imp_sampling_ex2.svg")
