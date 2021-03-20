using Distributions, DiffResults, ForwardDiff, DiffResults, AdvancedHMC

# Evaluates target distribution π(q)
function π_q(q)
    q₁ = q[1]
    q₂ = q[2]
    in_bound = (-π/2 < q₁ < π/2) & (-π/2 < q₂ < π/2)
    return in_bound*(2/π * exp(-2*(q₁^2 + q₂^2)) + (sin(q₁*q₂)*sin(q₁)*cos(q₂))^2)
end

# Initial sample
q₀ = [0.0, 0.0]

# State space size
Ω_size = length(q₀)

# Number of samples desired
num_samples = 25000

# Number of ϵ updates
num_adapts = 2000

# Evaluates log of target distribution
function ℓπ(q)
    return log(π_q(q))
end

# Evaluates gradient of log of target distribution
# This implementation of NUTS requires the gradient function to be defined this
# way
function ∂ℓπ_∂q(q)
    result = DiffResults.GradientResult(q)
    ForwardDiff.gradient!(result, ℓπ, q)
    return (DiffResults.value(result), DiffResults.gradient(result))
end

# Use Euclidean matrix. 2 here is dimension of sample space
metric = DiagEuclideanMetric(Ω_size)

# Define Hamiltonian function
hamiltonian = Hamiltonian(metric, ℓπ, ∂ℓπ_∂q)

# Initial step size
ϵ₀ = find_good_eps(hamiltonian, q₀)

# Define leapfrog symplectic integrator
lf_integrator = Leapfrog(ϵ₀)

# Define NUTS sampler
sampler = NUTS{MultinomialTS,GeneralisedNoUTurn}(lf_integrator)

# Define ϵ adapter. Used to find apatively determine optimal step size ϵ
adaptor = StanHMCAdaptor(num_adapts, Preconditioner(metric), NesterovDualAveraging(0.8, lf_integrator))

# Get samples. stats stores information for each sample (e.g., acceptance rate)
samples, stats = sample(hamiltonian, sampler, q₀, num_samples, adaptor, num_adapts; progress=true)


samples_mat = zeros(num_samples, 2)
for i=1:num_samples
    samples_mat[i,1] = samples[i][1]
    samples_mat[i,2] = samples[i][2]
end

using PyCall, Plots, Pandas
@pyimport seaborn as sns
using PyPlot
pygui(true)
data = Pandas.DataFrame(Dict(:q₁=>samples_mat[:,1], :q₂=>samples_mat[:,2]))
rc("axes",facecolor = "#f7ece2")
rc("figure",facecolor = "#f7ece2")
rc("savefig",facecolor = "#f7ece2")
sns.jointplot(x = "q₁", y = "q₂", data = data, s = 1, alpha = 0.18)
