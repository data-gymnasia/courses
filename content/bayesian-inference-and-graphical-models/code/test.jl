using Plots
using Distributions
using Random
gr(size=(300,300))

function ellipse!(μ,Σ;kw...)
    for i=1:3
        plot!([tuple((i*sqrt(Σ)*[cos(t),sin(t)]+μ)...) for t in range(0,stop=2π,length=100)];
              seriestype=:shape,linealpha=0.5,linecolor=:gray,fillalpha=[0.4,0.2,0.1][i],kw...)
    end
    current()
end

function mixtureplot(X₁,X₂,μ₀,Σ₀,μ₁,Σ₁,Π)
    scatter(X₁,X₂;fillalpha=0.5,markerstrokewidth=0.5,
        marker_z=Π,mc=ColorGradient([:lightblue,:orange]),
        colorbar=:false)
    ellipse!(μ₀,Σ₀,fillcolor=:lightblue)
    ellipse!(μ₁,Σ₁,fillcolor=:orange)
    plot!(;bg=:transparent,xlims=(-4.5,8.5),ylims=(-3.5,10.5),
        leg=false,ticks=:none,ratio=:equal)
end

function scalein(x)
    (x-1/2)^101/(0.5^101)
end

Random.seed!(123);
n = 100
α = 0.4
𝒩₀ = MvNormal([1,1],[2.0 1.0; 1.0 2.0])
𝒩₁ = MvNormal([3.0,7.0],[1.5 0; 0 0.5])
X₁ = zeros(n)
X₂ = zeros(n)
Z = zeros(Bool,n)
for i=1:n
    Z[i] = rand(Bernoulli(α))
    X₁[i],X₂[i] = Z[i] ? rand(𝒩₁) : rand(𝒩₀)
end

α = 0.6
μ₀ = [3.0,3.0]
μ₁ = [1.0,6.0]
Σ₀ = 1.0*Matrix(I, 2, 2)
Σ₁ = 1.0*Matrix(I, 2, 2)
mixtureplot(X₁,X₂,μ₀,Σ₀,μ₁,Σ₁)

Π = [α*pdf(MvNormal(μ₁,Σ₁),[x₁,x₂]) /
       ((1-α)*pdf(MvNormal(μ₀,Σ₀),[x₁,x₂]) +
        α*pdf(MvNormal(μ₁,Σ₁),[x₁,x₂])) for (x₁,x₂) in zip(X₁,X₂)];

α = sum(Π)/n
μ₀ = [(1 .- Π) ⋅ X₁, (1 .- Π) ⋅ X₂] / sum(1 .- Π)
μ₁ = [Π ⋅ X₁, Π ⋅ X₂] / sum(Π)
Σ₀ = Matrix(Hermitian(sum((1-π)*([x₁,x₂] - μ₀) * ([x₁,x₂] - μ₀)' for (x₁,x₂,π) in zip(X₁,X₂,Π))/sum(1 .- Π)))
Σ₁ = Matrix(Hermitian(sum(π*([x₁,x₂] - μ₁) * ([x₁,x₂] - μ₁)' for (x₁,x₂,π) in zip(X₁,X₂,Π))/sum(Π)))
Π = [α*pdf(MvNormal(μ₁,Σ₁),[x₁,x₂]) /
       ((1-α)*pdf(MvNormal(μ₀,Σ₀),[x₁,x₂]) +
        α*pdf(MvNormal(μ₁,Σ₁),[x₁,x₂])) for (x₁,x₂) in zip(X₁,X₂)];

mixtureplot(X₁,X₂,μ₀,Σ₀,μ₁,Σ₁,Π)
