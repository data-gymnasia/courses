
using Plots
using Polynomials
using DataFrames, DataFramesMeta
using Latexify
texpyplot()

using Random; Random.seed!(1234)
x = rand(-10:20,10)
y = 2 * x.^2 .+ rand(-80:80,length(x))
#x = [-3, 4, 5, -1, 2, -1, 0, -3, 3, -2]
#y = [-6, 6, 10, -1, 5, -2, -2, -7, 4, -2]

x[end], y[end]

df = @linq DataFrame(x = x[1:end-1], y = y[1:end-1]) |> 
    by(:x, y = mean(:y))

g = polyfit(df.x, df.y)

xs = range(minimum(x), maximum(x), length = 200)

plot(xs, g.(xs), legend = false, linewidth = 2, grid = true)
plot!(x[1:end-1],y[1:end-1], seriestype = :scatter, markercolor = :lightgreen, markersize = 8)

savefig(joinpath(@__DIR__,"overfit.pdf"))

linreg(x, y) = hcat(fill!(similar(x), 1), x) \ y
a,b = linreg(x[1:end-1], y[1:end-1])

plot(xs, b*xs .+ a, legend = false, linewidth = 2, grid = true)
plot!(x[1:end-1],y[1:end-1], seriestype = :scatter, markercolor = :lightgreen, markersize = 8)
savefig(joinpath(@__DIR__,"underfit.pdf"))

plot(xs, 2*xs.^2, legend = false, linewidth = 2, grid = true)
plot!(x[1:end-1],y[1:end-1], seriestype = :scatter, markercolor = :lightgreen, markersize = 8)
savefig(joinpath(@__DIR__,"justright.pdf"))

clipboard(mdtable(hcat(x,y)))
clipboard(string(x))
clipboard(string(y))

