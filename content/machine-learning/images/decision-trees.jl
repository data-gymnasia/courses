
using AsyPlots

cd(@__DIR__)

function randpoint()
    p = rand()
    myrand() = 0.05 + 0.95rand()
    if p < 1/4
        Point(-myrand(),-myrand(),color = :Green)
    elseif p < 1/2
        Point(-myrand(),myrand(),color = :Blue)
    elseif p < 3/4
        Point(myrand(),-myrand(),color = :Blue)
    elseif p < 7/8
        Point(myrand()/2,myrand(),color = :Red)
    else
        Point(1/2 + myrand()/2, myrand(), color = :Green)
    end
end

P = Plot([randpoint() for _ in 1:1000]) + Path([-1.1 0; 1.1 0],arrow=Arrow(),color=:gray) + 
    Path([0 -1.1; 0 1.1],arrow=Arrow(),color=:gray) + Label("\$x_1\$",(1.1,-0.1),color=:gray) + Label("\$x_2\$",(0.1,1.1),color=:gray)
    
save("easy-decision-tree-example.svg",P)

