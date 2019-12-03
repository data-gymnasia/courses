using Distributions, Plots
gr(fontfamily = "Palatino", legend = false)
scatter([Tuple(c) for c in eachcol(rand(MvNormal([30.0,100], [15.0 12; 12 13]), 100))],xlabel = "ad spending", ylabel = "revenue")
        
savefig("ad-spending.jl")