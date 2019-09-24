
using LinearAlgebra, Statistics, Roots, Optim, Plots, Random; Random.seed!(1234)
n = 1000 # number of samples to draw 

# the true regression function 
r(x) = 2 + 1/50*x*(30-x)
# the true density function
σy = 3/2
f(x,y) = 3/4000 * 1/√(2π*σy^2) * x*(20-x)*exp(-1/(2σy^2)*(y-r(x))^2)

# x values and y values for a grid
xs = 0:1/2^3:20
ys = 0:1/2^3:12

# F(t) is the CDF of X
F(t) = -t^3/4000 + 3t^2/400
# Inverse CDF sampling
function sampleX()
    U = rand()
    find_zero(t->F(t)-U,(0,20),Bisection())
end

function sampleXY(r,σ)
    X = sampleX()
    Y = r(X) + σ*randn()
    (X,Y)
end

samples = [sampleXY(r,σy) for i=1:n]

D(u) = abs(u) < 1 ? 70/81*(1-abs(u)^3)^3 : 0 # tri-cube function
D(λ,u) = 1/λ*D(u/λ) # scaled tri-cube
K(λ,x,y) = D(λ,x) * D(λ,y) # kernel
kde(λ,x,y,samples) = sum(K(λ,x-Xi,y-Yi) for (Xi,Yi) in samples)/length(samples)

# `optimize` takes functions which accept vector arguments, so we treat
# λ as a one-entry vector
L(λ) = sum((f(x,y) - kde(λ,x,y,samples))^2 for x=xs,y=ys)*step(xs)*step(ys)

# minimize L using the BFGS method
λ_best = optimize(λ->L(first(λ)),[1.0],BFGS())

using AsyPlots
#plot = Plots.plot
#heatmap = Plots.heatmap
    # background colors
softseagreen = NamedColor("SoftSeaGreen",(0.96, 0.995, 0.98))
softblue = NamedColor("SoftBlue",(0.92,0.95,0.99))
softyellow = NamedColor("SoftYellow",(0.98, 0.98, 0.9))
    
densities = [f(x,y) for x=xs,y=ys]
xmax = xs[end]
ymax = ys[end]
    
# plot accoutrements
extras = Plot([Path([0 10; -0.5 10]),Label("10",(-1.5,10))]) +
    Plot([Path([20 0; 20 -0.66]),Label("20",(20,-1.5))]) +
    Plot(Path([0 0; 0 ymax],arrow=Arrow())) +
    Plot(Path([0 0; 1.05*xmax 0],arrow=Arrow())) +
    Plot(Label("hours studied",(10,-1))) +
    Plot(Label("score",(-1,5);rotation=90);
         width=256,height=128,ignoreaspect=true,bgfill=false)
function sampleXY()
    X = sampleX()
    Y = r(X) + σy*randn()
    if !(0 < Y < 10)
        sampleXY()
    else
        (X,Y)
    end
end
Random.seed!(1234)
n = 1000
samples = [sampleXY() for i=1:n]
samplesfig = Plot([Point(point;color="MidnightBlue",linewidth=2)
                   for point in samples]) + extras
save("figures/exam-samples.pdf",samplesfig)

densityfig = AsyPlots.heatmap(densities,(0,0),(xmax,ymax);
                  colors=[NamedColor("white"),NamedColor("MidnightBlue")],
              smooth=true,alpha=fill(4/5,size(densities)...)) + extras

save("exam-density.pdf",densityfig)

densitywithline = AsyPlots.heatmap(densities,(0,0),(xmax,ymax);
                                        colors=[NamedColor("white"),NamedColor("MidnightBlue")],
                                        smooth=true,alpha=fill(4/5,size(densities)...)) +
                   Plot(Path([(x,r(x)) for x=0:1/2^4:20],color="DarkRed",linewidth=2)) + extras

save("exam-density-line.pdf",densitywithline)

cd(@__DIR__)

pwd()

