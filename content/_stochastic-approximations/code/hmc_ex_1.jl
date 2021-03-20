using Plots, Distributions, LaTeXStrings

# Evaluates target distribution π(q)
function π_q(q)
    return 0.3*1/sqrt(2*pi)*exp(-(q+2)^2/2) + 0.7*1/sqrt(pi)*exp(-(q-3)^2)
end

# Evaluates conditional probability π(p|q)
function π_pq(p,q)
    return pdf(Normal(0, 1), p)
end

# Evaluates Kinetic enery K(p,q)
function K(p,q)
    return -log(π_pq(p,q))
end

# Evaluates Potential energy V(q)
function V(q)
    return -log(π_q(q))
end

# Evaluates dV/dq at q
function dV_dq(q)
    return 1/π_q(q) * (0.3*1/sqrt(2*pi)*(q+2)*exp(-(q+2)^2/2) +
    0.7*2/sqrt(pi)*(q-3)*exp(-(q-3)^2))
end

# Compute Hamiltonian at q,p
function H(p,q)
    return K(p,q) + V(q)
end


# Gets a trajectory of length L with n steps
function get_trajectory(q,p,L,n)
    # Flip sign of momentum
    # p *= -1

    # Step size
    ϵ = L/n

    q_trajectory = zeros(n)
    p_trajectory = zeros(n)

    q_trajectory[1] = q
    p_trajectory[1] = p

    for j=2:n
        ψ = p_trajectory[j-1] - ϵ/2 * dV_dq(q_trajectory[j-1])
        q_trajectory[j] = q_trajectory[j-1] + ϵ*ψ
        p_trajectory[j] = ψ - ϵ/2*dV_dq(q_trajectory[j])
    end

    return q_trajectory, p_trajectory
end

function hmc_alg(q₀, p₀)
    # Number of samples to return
    n = 20000

    q_samples = zeros(n)
    p_samples = zeros(n)
    q_samples[1] = q₀
    p_samples[1] = p₀

    trajectory_length = 1
    trajectory_partitions = 3

    for j=2:n

        q = q_samples[j-1]
        p = rand(Normal(0,1))
        q_proposal_trajectory, p_proposal_trajectory =
        get_trajectory(q, p, trajectory_length, trajectory_partitions)

        # Proposal
        q_L = last(q_proposal_trajectory)
        p_L = last(p_proposal_trajectory)

        # Compute acceptance probabilty
        α = min(1, exp(H(p,q) - H(-p_L,q_L)))

        if rand() < α
            q_samples[j] = q_L
            p_samples[j] = -p_L
        else
            q_samples[j] = q
            p_samples[j] = p
        end

    end

    return q_samples
end

# Generate HMC samples
samples = hmc_alg(0,1)

# Plot histogram of samples
x_vals = -5:0.01:5
y_vals = [π_q(q) for q in x_vals]
Plots.plot(x_vals, y_vals,
 bg = RGB(247/255, 236/255, 226/255),
 grid = false,
 legend = false,
 xlabel = L"q",
 ylabel = L"\pi(q)")
histogram!(samples, color = "blue", opacity = 0.15, normalize = true)


savefig("../images/hmc_ex_1_histogram.svg")
