using Distributions, CSV, DataFrames, LinearAlgebra, LaTeXStrings

# Load observed data
x_samples_df = CSV.read("gmm_observations.csv")
x_samples = hcat(x_samples_df[!, :X1], x_samples_df[!, :X2])

# Computes πᵢ for all i with respect to the given parameters in θ
# Inputs:
# - θ: A vector containing the current estimates of [α₀, μ₀, Σ₀, μ₁, Σ₁]
# - x: The (n x 2) matrix of observed X values
# Ouputs:
# 𝛑: An n dimensional vector where the ith coordinate is the value of πᵢ
function compute_all_πᵢ(θ, x)
    # Get dataset size
    n = size(x, 1)

    # Get current parameters
    α, μ₀, Σ₀, μ₁, Σ₁ = θ

    # Set distributions
    𝒩₁ = MvNormal(μ₁, Σ₁)
    𝒩₀ = MvNormal(μ₀, Σ₀)

    # Compute all πᵢ
    𝛑 = [α*pdf(𝒩₁, x[i,:])/(α*pdf(𝒩₁, x[i,:]) + (1-α)*pdf(𝒩₀, x[i,:])) for i=1:n]

    return 𝛑
end

# EM algorithm for GMM with observations x and Z ∈ {0,1}
# Inputs:
# - θ₀: The initial estimate of the θ parameter
# - x: The observed X values
# - iterations: The number of iterations for the EM algorithm
# Outputs:
# - θⱼ: The estimate of θ after 1000 iterations
function gmm_EM(θ₀, x, iterations)
    # Get dataset size
    n = size(x, 1)

    # Store the value of θ on jth step
    θⱼ = θ₀

    for j=1:iterations
        # Get current πᵢ values for all i
        𝛑 = compute_all_πᵢ(θⱼ, x)

        # Store the vector containing 1 - 𝛑
        𝛑₁ = 1 .- 𝛑

        # Get next value of α
        α = sum(𝛑)/n

        # Get next value of μ₀
        μ₀ = [dot(𝛑₁, x[:,1]), dot(𝛑₁, x[:,2])]/sum(𝛑₁)

        # Get next value of μ₁
        μ₁ = [dot(𝛑, x[:,1]), dot(𝛑, x[:,2])]/sum(𝛑)

        # Get next value of Σ₀.
        Σ₀ = sum([(x[i,:] - μ₀)*((x[i,:] - μ₀))'*𝛑₁[i] for i=1:n])/sum(𝛑₁)

        # Get next value of Σ₁.
        Σ₁ = sum([(x[i,:] - μ₁)*((x[i,:] - μ₁))'*𝛑[i] for i=1:n])/sum(𝛑)

        # Update θ
        θⱼ = [α, μ₀, Σ₀, μ₁, Σ₁]

    end

    return θⱼ
end


# Initialize EM parameters
α₀ = 0.3
μ₀ = [1.0, 2.0]
μ₁ = [2.0, 3.0]
Σ₀ = 1.0*Matrix(I, 2, 2)
Σ₁ = 1.0*Matrix(I, 2, 2)
θ₀ = [α₀, μ₀, Σ₀, μ₁, Σ₁]

println(gmm_EM(θ₀, x_samples, 20))



## Plots ##
gr(size=(300,300))

function ellipse!(μ,Σ;kw...)
    for i=1:3
        plot!([tuple((i*sqrt(Σ)*[cos(t),sin(t)]+μ)...) for t in range(0,stop=2π,length=100)];
              seriestype=:shape,linealpha=0.5,linecolor=:gray,fillalpha=[0.4,0.2,0.1][i],kw...)
    end
    current()
end

function mixtureplot(X₁,X₂,μ₀,Σ₀,μ₁,Σ₁,Π, plot_title)
    scatter(X₁,X₂;fillalpha=0.5,markerstrokewidth=0.5,
        marker_z=Π,mc=ColorGradient([:lightblue,:orange]),
        colorbar=:false, title=plot_title)
    ellipse!(μ₀,Σ₀,fillcolor=:lightblue)
    ellipse!(μ₁,Σ₁,fillcolor=:orange)
    plot!(;bg=:transparent,xlims=(-4.5,8.5),ylims=(-3.5,10.5),
        leg=false,ticks=:none,ratio=:equal)
end


one_step = gmm_EM(θ₀, x_samples, 1)
one_step_Π = compute_all_πᵢ(one_step, x_samples)
five_steps = gmm_EM(θ₀, x_samples, 5)
five_step_Π = compute_all_πᵢ(ten_steps, x_samples)
twenty_steps = gmm_EM(θ₀, x_samples, 20)
twenty_step_Π = compute_all_πᵢ(twenty_steps, x_samples)

# Zero step plot
mixtureplot(x_samples[:,1], x_samples[:,2], θ₀[2], θ₀[3], θ₀[4], θ₀[5], compute_all_πᵢ(θ₀, x_samples), L"\theta_0")
savefig("../images/gmm_mixtureplot_0.svg")

# One step plot
mixtureplot(x_samples[:,1], x_samples[:,2], one_step[2], one_step[3], one_step[4], one_step[5], one_step_Π,  L"\theta_1")
savefig("../images/gmm_mixtureplot_1.svg")

# Five step plot
mixtureplot(x_samples[:,1], x_samples[:,2], five_steps[2], five_steps[3], five_steps[4], five_steps[5], five_step_Π, L"\theta_5")
savefig("../images/gmm_mixtureplot_5.svg")

# Twenty step plot
mixtureplot(x_samples[:,1], x_samples[:,2], twenty_steps[2], twenty_steps[3], twenty_steps[4], twenty_steps[5], twenty_step_Π,  L"\theta_{20}")
savefig("../images/gmm_mixtureplot_20.svg")
