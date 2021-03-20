
texpyplot()
pyplot(size=(400,300))
names = ["", "", "AlexNet", "", "VGG", "GoogLeNet", "ResNet", ""]
years = ["2010", "2011", "2012", "2013", "2014", "2014", "2015", "2016"]

ϵ = 0.75

y = [28.2, 25.8, 16.4, 11.7, 7.3, 6.7, 3.57, 2.99]
bar(y, leg = false, fillcolor = :MidnightBlue, fillopacity = 0.5, ygrid = true, xaxis = nothing, ylabel = "top-5 error rate", guidefontsize=12)
plot!(ann=[(k,-ϵ,text(years[k],pointsize=10)) for k in eachindex(years)]);
plot!(ann=[(k,y[k]+ϵ,text(s,pointsize=10)) for (k,s) in enumerate(names)]);
savefig("imagenet-results.pdf")
run(`pdf2svg imagenet-results.pdf ../svg/imagenet-results.svg`)
run(`open imagenet-results.pdf`)
