using Distributions, LinearAlgebra, ForwardDiff, Seaborn, Pandas

# Evaluates target distribution π(q)
function π_q(q)
    q₁ = q[1]
    q₂ = q[2]
    in_bound = (-π/2 < q₁ < π/2) & (-π/2 < q₂ < π/2)
    return in_bound*(2/π * exp(-2*(q₁^2 + q₂^2)) + (sin(q₁*q₂)*sin(q₁)*cos(q₂))^2)
end

# Evaluates conditional probability π(p|q)
function π_pq(p,q)
    return pdf(MvNormal([0,0], 1.0*Matrix(I, 2, 2)), p)
end

# Evaluates Kinetic enery K(p,q)
function K(p,q)
    return -log(π_pq(p,q))
end

# Evaluates Potential energy V(q)
function V(q)
    return -log(π_q(q))
end

# Compute Hamiltonian at q,p
function H(p,q)
    return K(p,q) + V(q)
end


# Gets a trajectory of length L with n steps
function get_trajectory(q,p,L,n,dV_dq)

    # Step size
    ϵ = L/n

    q_trajectory = zeros(n,2)
    p_trajectory = zeros(n,2)

    q_trajectory[1,:] = q
    p_trajectory[1,:] = p

    for j=2:n
        ψ = p_trajectory[j-1,:] - ϵ/2 * dV_dq(q_trajectory[j-1,:])
        q_trajectory[j,:] = q_trajectory[j-1,:] + ϵ*ψ
        p_trajectory[j,:] = ψ - ϵ/2*dV_dq(q_trajectory[j,:])
    end

    return q_trajectory, p_trajectory
end

function hmc_alg(q₀, p₀)
    # Number of samples to return
    n = 25000

    q_samples = zeros(n,2)
    p_samples = zeros(n,2)
    q_samples[1,:] = q₀
    p_samples[1,:] = p₀

    trajectory_length = 1
    trajectory_partitions = 5

    # Gradient of V
    dV_dq(x) = ForwardDiff.gradient(V, x)

    for j=2:n

        q = q_samples[j-1,:]
        p = rand(MvNormal([0,0],1.0*Matrix(I, 2, 2)))
        q_proposal_trajectory, p_proposal_trajectory =
        get_trajectory(q, p, trajectory_length, trajectory_partitions, dV_dq)

        # Proposal
        q_L = q_proposal_trajectory[lastindex(q_proposal_trajectory)÷2,:]
        p_L = p_proposal_trajectory[lastindex(p_proposal_trajectory)÷2,:]

        # Compute acceptance probabilty
        α = min(1, exp(H(p,q) - H(-p_L,q_L)))

        if rand() < α
            q_samples[j,:] = q_L
            p_samples[j,:] = -p_L
        else
            q_samples[j,:] = q
            p_samples[j,:] = p
        end

    end

    return q_samples
end

samples = hmc_alg([0,0],[1,1])

using PyCall
using Plots
@pyimport seaborn as sns
pygui(true)
data = Pandas.DataFrame(Dict(:q₁=>samples[:,1], :q₂=>samples[:,2]))
rc("axes",facecolor = "#f7ece2")
rc("figure",facecolor = "#f7ece2")
rc("savefig",facecolor = "#f7ece2")
sns.jointplot(x = "q₁", y = "q₂", data = data, s = 1, alpha = 0.18)

using SpecialFunctions
q_values = -π/2:0.01:π/2

# Plot of q₁ marginal
function q₁_marginal(q)
    return √(2/π)*erf(π/√2)*exp(-2q^2) +
    sin(q)^2*(-π*q+π*q^3+sin(π*q))/(4*q^3-4*q)
end

q₁_values = [q₁_marginal(q) for q in q_values]

Plots.plot(q_values, q₁_values, legend = false, grid = false, xlabel = L"q_1", ylabel = L"\pi_{q_1}(q_1)", bg = RGB(247/255, 236/255, 226/255))

Plots.savefig("hmc_ex_2_marginal_1_plot.svg")

# Plot of q₂ marginal
function q₂_marginal(q)
    return √(2/π)*erf(π/√2)*exp(-2q^2) +
    1/4*cos(q)^2*(π + (1-2*q^2)*sin(π*q)/(q^3-q))
end

q₂_values = [q₂_marginal(q) for q in q_values]

Plots.plot(q_values, q₂_values, legend = false, grid = false, xlabel = L"q_2", ylabel = L"\pi_{q_2}(q_2)", bg = RGB(247/255, 236/255, 226/255))
Plots.savefig("hmc_ex_2_marginal_2_plot.svg")
