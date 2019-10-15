

using AsyPlots, LaTeXStrings, SpecialFunctions

x = range(0, stop=1, length = 400)

p = plot(collect(x),x.^44 .* (1 .- x).^11 / beta(44,11),xticks=Ticks([1]),yticks=Ticks([1])) + Plot(Path([4/5 -0.04; 4/5 0.04])) + Plot(Label(L"\frac{\alpha}{\alpha+\beta}",(4/5,-0.2));width=128)
