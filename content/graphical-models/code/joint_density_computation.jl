cum_sum = 0

for x1 = 0:1
    for x2 = 0:1
        for x3 = 0:1
            global cum_sum
            # cum_sum += .25*((i == 1 && j == 1)*(.5*(k == 1) + .1*(k != 1)) +
            # 1/6*(i != 1))
            cum_sum += (1/4)^(2)*(2.0)^(x2*x1)*(3.0)^(x3*x1*(1-x2-x3)+x3)
        end
    end
end

println(cum_sum)
