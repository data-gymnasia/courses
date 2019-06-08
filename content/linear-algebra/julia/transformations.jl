
using Revise
using AsyPlots
using IntroLinearAlgebra

rotate(x,y) = 1/sqrt(2) * [1 1; -1 1] * [x,y]
reflect(x,y) = [y,x]
scale(x,y) = 2*[x,y]
shear(x,y) = [1 1; 0 1] * [x,y]
project(x,y) = [1 2; -1 -2] * [x,y]
nonlinear(x,y) = 0.1collect(reim((x+im*y)^2))
id(x,y) = [x,y]

frames = Plot2D[]

for f in (rotate,reflect,scale,shear,project,nonlinear)
    push!(frames,Plot2D([Label(string(f),(0,0),fontsize=48),box(-1,-1,1,1,color="white")]))
    append!(frames,transformation_movie(f,frames=5))
end

save("/Users/sswatson/Desktop/foo.pdf",layout(frames;cols=6))


using Pkg
Pkg.add("DataValues")
using DataValues
using DataFrames
import JSON

df = DataFrame(a = [1,2,3], b = [4,5,NA])

JSON.json(Dict("values"=>[Dict{Symbol,Any}(c[1]=>isa(c[2], DataValue) ? (isna(c[2]) ? nothing : get(c[2])) : c[2] for c in zip(keys(r), values(r))) for r in eachrow(df)])) |> print

