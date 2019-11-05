cum_sum = 0

for x1 = 0:1
    for x2 = 0:1
        for x3 = 1:6
            global cum_sum
            # cum_sum += .25*((i == 1 && j == 1)*(.5*(k == 1) + .1*(k != 1)) +
            # 1/6*(i != 1))
            cum_sum += 1/4*(((1/2)^(x3)*(1/10)^(1-x3))^(x2)*(1/6)^(1-x2))^(x1)*(1/6)^(1-x1)
        end
    end
end

println(cum_sum)
