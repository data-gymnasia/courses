using Plots
using Random
using Pkg; Pkg.add("LaTeXStrings")
using LaTeXStrings

# Set seed
Random.seed!(123)

# Generate MC points
n = 2000
points_x = rand(n)
points_y = rand(n)

# Label points in circle
labels = [x^2 + y^2 <= 1 for (x,y) in zip(points_x, points_y)]

# Estaimte of pi
π_estimate = 4*sum(labels)/n

# Create plot of MC points
plot(points_x, points_y, seriestype = :scatter,
     group = .!labels,
     title = L"\textrm{Monte Carlo } \pi \textrm{ estimation}",
     legend = false,
     bg = RGB(247/255, 236/255, 226/255))

# Add semi-circle quadrant plot
circle_x = 0:0.01:1
circle_y = sqrt.(1 .- circle_x.^2)
plot!(circle_x, circle_y, seriestype= :line, legend = false, lc = :yellow)

# Generate plots comparing π estimate across multiple n
n_values = [5000, 10000, 100000, 1e6, 2e6]
π_estimates_error = zeros(5)

for i in 1:5
    n_value = Int64(n_values[i])
    points_x = rand(n_value)
    points_y = rand(n_value)
    estimate = 4*sum([x^2 + y^2 <= 1 for (x,y) in zip(points_x, points_y)])/
        n_value
    π_estimates_error[i] = 100*abs(π - estimate)/π
end

println(π_estimates_error)

# savefig("../images/pi-monte-carlo.svg")

# Plot area under circle curve
plot(circle_x, circle_y, legend = false,
    fillrange = [zeros(length(circle_x)), circle_y],
    alpha = .5,
    lc = :yellow)
