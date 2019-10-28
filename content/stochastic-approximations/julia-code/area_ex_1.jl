using Plots
using Random
using Pkg; Pkg.add("LaTeXStrings")
using LaTeXStrings

# Set working directory
cd("/Users/elvis/Documents/DSI/courses/content/stochastic-approximations/julia-code/")

# Set seed
Random.seed!(123)

# Generate MC points
n = 4000
points_x = 3 .* rand(n)
points_y = -3 .+ 7 .* rand(n)

# Define functions
f1(x) = 3*abs(cos(x)) .+ 2*sin(x)
f2(x) = -3*abs(cos(x)) .+ 2*sin(x)


# Label points in circle
labels = [f2(x) <= y <= f1(x) for (x,y) in zip(points_x, points_y)]

# Create curves
x_vals = 0:.01:3
f1_x = 3*abs.(cos.(x_vals)) .+ 2*sin.(x_vals)
f2_x = -3*abs.(cos.(x_vals)) .+ 2*sin.(x_vals)

# Create plot of MC points
plot(points_x, points_y, seriestype = :scatter,
     group = .!labels,
     legend = false,
     ms = 3,
     bg = RGB(247/255, 236/255, 226/255))

# Add curves to plot
plot!(x_vals, f1_x, seriestype= :line, label = L"f_1(x)", lc = :blue,
    legend = false)
plot!(x_vals, f2_x, seriestype= :line, label = L"f_2(x)", lc = :violet)
plot!(x_vals, f1_x, fillrange = [f2_x, f1_x], fillcolor = :blue, alpha = .12)


# Area estimate
area = 21*sum(labels)/n

savefig("../images/area-ex1-monte-carlo.svg")
