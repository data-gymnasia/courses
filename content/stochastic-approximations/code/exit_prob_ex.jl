# Define exit time
A = 600

# Starting amount of money (S0)
k = 500

# Define probability of winning
p = .49
q = 1 - p

# Define b vector
b = zeros(A + 1)
b[A+1] = 1

# Define M matrix
M = zeros(A+1, A+1)
M[1,1] = 1
M[A+1,A+1] = 1

for i=2:A
    global M, q, p
    M[i,i] = -1
    M[i,i-1] = q
    M[i,i+1] = p
end

# Compute exit probabilities by computing M^(-1)b
u = M\b

# Get probability of interest
using Printf
@printf("Probability of walking away with \$%g: %f", k,
 u[k+1])
