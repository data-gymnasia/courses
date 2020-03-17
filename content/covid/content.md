
# Epidemic modeling

> id: intro
## Introduction

This year we have witnessed the rise of a global pandemic threat: a virus called SARS-CoV-2. In this lesson, we'll develop some of the basic elements of epidemic modeling, so that we can understand a small part of what public health researchers are looking at when they make projections and inform public policy. 

[Continue](btn:next)

---
> id: step-caveat

It's worth mentioning from the outset that epidemic modeling is a deep and complex subject, and without substantial experience it's impossible to know when the results of a model are really reliable. Furthermore, even in the best case scenario, there can still be *a lot* of uncertainty. Nevertheless, an appreciation of some of the phenomena observed in the simplest epidemic model can help us better understand the considerations being weighed by decision makers.

Note: the next three sections are based heavily on [this talk](https://www.youtube.com/watch?v=gSqIwXl6IjQ) by Tom Britton at Stockholm University. 

[Continue](btn:next)

---
> id: susceptible-infectious-recovered
## Susceptible-Infectious-Recovered (SIR) Models

An *epidemic model* is a mathematical system together with a dictionary for mapping questions about the spread of infectious disease to questions about the mathematical system. While no model is fully realistic, even simple models allow us to study the mathematical behavior of the system and gain some intuition that can be applied to understand aspects of the spread of diseases in the real world. 

[Continue](btn:next)

---
> id: step-basic-model

Let's think about the components of a minimalistic model for the spread of an infectious disease in a population. The main entities we need to model are: (1) time, (2) the [[population|appearance of the virus|geography]], and (3) the infection status of each individual (susceptible, infectious, or recovered). The **SIR Model** does this as follows:

[Continue](btn:next)

---
> id: step-modeling-components

* Time is modeled discretely, ranging over the set $\\{0, 1, \ldots \\}$. 
* We represent the population using the set $\\{1, 2, ..., n\\}$, where $n$ is a large positive integer. We'll call each of these integers an "individual". 
* Infection status is modeled as a [[function|set]] which assigns to each individual $x$ and each time $t$ a value in the set $\\{\text{susceptible}, \text{infected}, \text{recovered}\\}$. 

[Continue](btn:next)

---
> id: step-SIR-dynamics

The dynamics of the model are specified [[*probablistically*|*statistically*]] as follows: 

* At time 0, the first individual is infected and every other individual is susceptible. 
* For each time $t > 0$, each infected individual infects each susceptible individual with some fixed probability $p$ (with infection event independent of all others). If an individual is infected at time $t-1$, they are recovered at time $t$.

::: .exercise
**Exercise**  
Suppose that at a given time $t-1$, there are $j$ infected individuals and $k$ susceptible individuals. Then the probability that a particular individual susceptible at time $t-1$ becomes infected at time $t$ is [[$1-(1-p)^{j}$|$1-p^{j}$|$(1-p)^{j}$]].
:::

---
> id: step-solution-basic-SIR

*Solution*. The probability that an individual avoids infection is the probability that each infection opportunity fails to transmit. This probability is $(1-p)^j$, since there are $j$ infected individuals, and each one transmits with probability $p$. Therefore, the probability of infection for the individual is $1-(1-p)^j$. 

[Continue](btn:next)

---
> id: step-exercise-simulation

::: .exercise
**Exercise**  
Use the code block below to simulate several runs of an SIR model. Why does the number of infectious individuals necessarily converge to 0 as the time index goes to $\infty$? 
:::

    pre(julia-executable)
      | using Plots, Distributions
      | import Base.Iterators: countfrom
      | 
      | function SIR_simulation(population_size, infection_probability)
      |     statuses = fill("susceptible", population_size, 1)
      |     statuses[1, 1] = "infectious"
      |     for t in countfrom(2)
      |         n_infectious = sum(statuses[:, t-1] .== "infectious")
      |         if n_infectious == 0
      |             break
      |         end
      |         statuses = [statuses fill("susceptible", population_size)]
      |         for k in 1:population_size
      |             if statuses[k, t-1] == "susceptible"
      |                 if rand() < 1 - (1 - infection_probability)^n_infectious
      |                     statuses[k, t] = "infectious"
      |                 end
      |             else
      |                 statuses[k, t] = "recovered"
      |             end
      |         end
      |     end
      |     statuses
      | end
      | 
      | population_size = 100
      | infection_probability = 2 / population_size
      | statuses = SIR_simulation(population_size, infection_probability)
      | heatmap(statuses .== "recovered")
      | 

    figure
      img(src="images/recovered-population.svg")
      p.caption.md The recovered individuals are shown in yellow (with time running along the horizontal axis and the population arrayed along the vertical axis).
      
    x-quill

---
> id: step-simulation-solution

*Solution*. 

* The number of infectious individuals eventually reaches the value 0 and stays there forever, since each timestep with a positive number of infectious individuals either results in no new infections, or it reduces the finite number of susceptible individuals by at least 1. When the number of susceptible individuals reaches zero, no new infections can occur.

---
> id: basic-reproduction-number
## Basic Reproduction Number

::: .exercise
**Exercise**  
The code block below computes the eventual number of recovered individuals over many simulations of an SIR model with 1000 individuals. Adjust the numerator in the line which defines `{jl} infection_probability` to see how the behavior of the resulting histogram depends on this value.
:::

    pre(julia-executable)
      | 
      | n = population_size = 1000
      | p = infection_probability = 1.0/population_size
      | n_recovered(n, p) = sum(SIR_simulation(n, p)[:, end] .== "recovered")
      | histogram([n_recovered(n, p) for _ in 1:5_000], xlims = (0, 1000), 
      |           nbins = 100, label = "", xlabel = "final number recovered",
      |           ylabel = "number of runs")
      
    x-quill      
    
[Continue](btn:next)

---
> id: step-solution-R0

*Solution*. When the value is around 1 or lower, the infection tends to reach only a few individuals. When the value is larger than 1, the infection sometimes reaches very few individuals and sometimes reaches approximately some particular fraction of the population. For example, when the value is 1.5, the final number of recovered individuals is often around 60% of the population. 

[Continue](btn:next)

---
> id: step-introducing-R0

The value you experimented with in the preceding exercise is called $R\_0$, pronounced "R-naught" or "R-zero". It represents the expected number of susceptible individuals infected by each infectious person at a given time step (early on when the number of susceptible individuals is nearly the whole population). The relationship between this number and the population size and infection probability is given by the equation [[$R\_0 = np$|$R\_0 = n/p$|$R\_0 = p/n$]], by [[linearity of expectation|independence of transmission events]]. 

---
> id: recovery-proportion
### Recovery Proportion

We can do a back-of-the-envelope calculation to determine the relationship between $R\_0$ and the expected proportion $\tau$ of individuals who eventually become infectious (conditioned on the event that that proportion is not close to zero). Loosely speaking, we're defining $\tau$ to be in the middle of the hump on the right in the histograms plotted above (which show number of simulations versus number of eventually recovered individuals in those simulations). 

The key idea is to work out—in two different ways—the probability that a given individual manages to avoid infection from all [[$n\tau$|$\tau/n$]] infected individuals. 

[Continue](btn:next)

---
> id: step-recovery-calcluation

From the point of view of a given never-infectious individual, each eventually recovered individual attempts transmission to them [[exactly once|more than once|once or more]]. If we assume that the distribution of the number of eventually infectious individuals is concentrated around $n \tau$, then we conclude that the probability that a susceptible individual dodges infection is approximately $(1-p)^{n\tau}$.

Also, since the population is homogeneous (that is, each individual has the same properties in the model's dynamics), the probability that a given individual dodges infection is the probability that it lies in the $1-\tau$ proportion of individuals which never get infected. 

Therefore, the value of $\tau$ should satisfy the equation $1 - \tau = (1-p)^{n\tau}$. Since $p = R\_0 / n$, and since $(1-x/k)^k \approx \mathrm{e}^{-x}$ for large $k$, obtain the equation $1 - \tau = \mathrm{e}^{-R\_0 \tau}$. 

We can plot $\tau$ as a function of $R\_0$ by solving this equation numerically: 

    pre(julia-executable)
      | using Roots, Plots, LaTeXStrings
      | plot(0.01:0.01:4, 
      |      R₀ -> find_zero(τ -> 1 - τ - exp(-R₀*τ), 0.5), 
      |      label = "", xlabel = L"$R_0$", ylabel = L"$\tau$", 
      |      ylims = (0,1))

    figure
      img(src="images/final-tau.svg")
      p.caption.md If $R\_0$ is less than or equal to 1, then there is no outbreak. If $R\_0 > 1$, the approximate proportion of the population that will eventually be infected is an increasing function of $R\_0$. 

The most important takeaway from this plot of $\tau$ vs $R\_0$ above is the inequality [[$R\_0 \leq 0$|$R\_0 \leq 1$|$R\_0 \leq 2$]]. When that inequality holds, no outbreak occurs. Otherwise, there's a decent probability that the 

[Continue](btn:next)

---
> id: reducing-R0
### Mitigation measures

The value of $R\_0$ can be lowered through preventative measures. Roughly speaking, $R\_0$ is a product of three factors: 

* Transmission probability for each contact with another person
* Number of contacts per day
* Number of days in infectious period 

For example, handwashing reduces [[transmission probability|number of contacts per day]], while disease testing can help reduce [[duration of infectious period|transmission probability for each contact]]. Social distancing reduces [[both contacts per day and transmission probability per contact|contacts per day|transmission probability per contact]]. 
      
::: .exercise
**Exercise**  
Early estimates of the $R\_0$ value of COVID-19 (under transmission conditions as they existed before mitigation measures were in place) have been somewhere between 2 and 3. Based on this $R\_0$ value and the equation we derived, approximately what proportion of the population would eventually become infectious?
:::

    x-quill
  

---
> id: step-R0-covid-solution

*Solution*. Based on the graph, we can say the proportion would be between 80% and 90%. Values estimated by experts vary in the 20%-70% range, so clearly the differences between the SIR model and the more advanced models being used by epidemiologists do have an impact on the proportion of the population the infection will eventually reach.


---
> id: flattening-the-curve
## Flattening the curve

You've probably seen graphs labeled *Flattening the Curve* on social media. The idea is to reduce the transmission rate so that the the peak (of the graph of number of infections versus time) is lower and comes later. This is valuable for the health care system, because it reduces the required capacity and gives time to expand capacity. 

Even for the simple SIR model, we can see how flattening the curve is directly related to $R_0$ through simulation:

    pre(julia-executable)
      | 
      | function infection_curve!(R₀)
      |     population_size = 100_000
      |     infection_probability = R₀/population_size
      |     statuses = SIR_simulation(population_size, infection_probability)
      |     plot!(sum(statuses .== "infectious", dims = 1)[:], label = latexstring("R_0 = $(R₀)"), xlabel = "time", 
      |             ylabel = "number infected", ylims = (0,population_size))
      | end
      | 
      | using Random; Random.seed!(1)
      | plot()
      | infection_curve!(2.0)
      | infection_curve!(3.0)
      
    figure
      img(src="images/flattening-the-curve.svg")
      p.caption.md Decreasing $R\_0$ decreases the maximum number of simultaneous cases while also putting that peak further into the future. There are also fewer individuals infected overall when $R\_0$ is smaller. 

This graph makes very big jumps from one time step to the next, unlike the graphs you've seen on social media. The reason for this is that the **generational time**, the typical time between getting infected and infecting others, is 1 for this model. We could modify the model so that each infectious individual remains infectious for a larger number of time steps (decreasing $p$ by the same factor to the expected number of individuals infected by each infectious individual equal to $R\_0$), and in that case the graph would look more similar to what you've seen online.

---
> id: lessons-for-the-real-world
## Lessons for the real world

What difference does it make if we start with a handful of infectious individuals rather than just one? The difference is profound and has significant implications for real-world infectious diseases.

::: .exercise
**Exercise**  
Modify the code for the function `{jl} SIR_simulation` below to set the number of initially infectious individuals to 10 rather than 1. What happens to the resulting histogram?

Use your observation to draw a conclusion about the strategy of *temporary* reduction of $R\_0$ in the context of this model.
:::

    pre(julia-executable)
      | using Plots
      | import Base.Iterators: countfrom
      | 
      | function SIR_simulation(population_size, infection_probability)
      |     statuses = fill("susceptible", population_size, 1)
      |     statuses[1, 1] = "infectious"
      |     for t in countfrom(2)
      |         n_infectious = sum(statuses[:, t-1] .== "infectious")
      |         if n_infectious == 0
      |             break
      |         end
      |         statuses = [statuses fill("susceptible", population_size)]
      |         for k in 1:population_size
      |             if statuses[k, t-1] == "susceptible"
      |                 if rand() < 1 - (1 - infection_probability)^n_infectious
      |                     statuses[k, t] = "infectious"
      |                 end
      |             else
      |                 statuses[k, t] = "recovered"
      |             end
      |         end
      |     end
      |     statuses
      | end
      | 
      | n = population_size = 1000
      | p = infection_probability = 2/population_size
      | n_recovered(n, p) = sum(SIR_simulation(n, p)[:, end] .== "recovered")
      | histogram([n_recovered(n, p) for _ in 1:5_000], xlims = (0, 1000), 
      |           nbins = 100, label = "", xlabel = "final number recovered",
      |           ylabel = "number of runs")
      

[Continue](btn:next)

---
> id: step-solution-different-number-initial

*Solution*. What we see is that even with 10 initially infectious individuals, the disease spreads to a substantial percentage of the population with very high probability:

    pre(julia-executable)
      | using Plots
      | import Base.Iterators: countfrom
      | 
      | function SIR_simulation(population_size, infection_probability, n_initially_infected)
      |     statuses = fill("susceptible", population_size, 1)
      |     statuses[1:n_initially_infected, 1] .= "infectious"
      |     for t in countfrom(2)
      |         n_infectious = sum(statuses[:, t-1] .== "infectious")
      |         if n_infectious == 0
      |             break
      |         end
      |         statuses = [statuses fill("susceptible", population_size)]
      |         for k in 1:population_size
      |             if statuses[k, t-1] == "susceptible"
      |                 if rand() < 1 - (1 - infection_probability)^n_infectious
      |                     statuses[k, t] = "infectious"
      |                 end
      |             else
      |                 statuses[k, t] = "recovered"
      |             end
      |         end
      |     end
      |     statuses
      | end
      | 
      | n = population_size = 1000
      | p = infection_probability = 2/population_size
      | n_recovered(n, p) = sum(SIR_simulation(n, p, 10)[:, end] .== "recovered")
      | histogram([n_recovered(n, p) for _ in 1:5_000], xlims = (0, 1000), 
      |           nbins = 100, label = "", xlabel = "final number recovered",
      |           ylabel = "number of runs")

    figure
      img(src="images/histogram-large-initial-population.svg")
      p.caption.md If $R\_0$ is substantially larger than 1 and the initial number of infectious individuals is more than a few, then the probability of widespread infection is very high. In the 5000 runs used to produce the histogram above, all 5000 eventually reached approximately 80% of the population. 
      
The final proportion infected depends on the $R\_0$ value but *not* on the number of individuals who infectious initially. 

While we derived this observation in the context of an SIR model, it does apply to real-life outbreaks as well: unless the disease is [[fully eradicated|significantly reduced]], $R\_0$ matters far more than the number of individuals who are infectious to start. 

When people on social media argue that SARS-CoV-2 should be ignored because the number of cases is still a small proportion of the population, it's analogous to arguing that an oven fire should be ignored until it at least engulfs the kitchen: flammability matters more than the size of the initial fire, unless the initial fire is nonexistent.

[Continue](btn:next)

---
> id: step-temporary-reduction

This observation also helps us see why a temporary reduction in $R\_0$ does not prevent a spike in cases later once $R\_0$ goes back up. Unless the conditions for a lower $R\_0$ value are sustained long enough to eliminate the virus altogether, the post-reduction phase is essentially a fresh run of the model with large number of susceptible individuals, a high $R\_0$ value, and enough initial infections to ensure widespread infection. To avoid a population-level outbreak, we need either a *long-term* reduction in $R\_0$ or widespread immunity achieved through a vaccine. 

[Continue](btn:next)

---
> id: containment-vs-mitigation
### Containment vs Mitigation

The SIR model may be made more realistic in a wide variety of ways. One of the most glaring omissions is the lack of *geography* in the model: in the real world, the virus spreads by the kind of physical contact which is much more likely between people who live close to one another. Let's see what happens when we incorporate spatial relationships into the model. 

Let's arrange our individuals into a square grid, and we'll let each person transmit to its four neighbors 

    pre(julia-executable)
      | using Plots
      |
      | function infection_plot(statuses)
      |     p = plot(ratio = 1, legend = false, axis = false, grid = false)
      |     for (status, color) in (("susceptible", "gray"), 
      |                             ("infectious", "tomato"), 
      |                             ("recovered", "darkgreen"))
      |         pts = [Tuple(i) for i in CartesianIndices(statuses) if statuses[i] == status]
      |         if length(pts) > 0
      |             scatter!(p, pts, color = color, markersize = 6)
      |         end
      |     end
      |     p
      | end
      | 
      | "Return the four nodes adjacent to (i, j)"
      | function neighbors(i, j, sidelength, barrier = Set())
      |     filter(k -> all(1 .≤ k .≤ sidelength) && k ∉ barrier, [(i+1, j), (i-1, j), (i, j+1), (i, j-1)])
      | end
      | 
      | function spatial_simulation(sidelength, n_timesteps, R₀, barrier = Set())
      |     statuses = fill("susceptible", sidelength, sidelength, n_timesteps)
      |     statuses[1:3, 1:3, 1] .= "infectious"
      |     for t in 2:n_timesteps
      |         for i in 1:sidelength
      |             for j in 1:sidelength
      |                 if statuses[i, j, t - 1] == "infectious"
      |                     nbs = neighbors(i, j, sidelength, barrier)
      |                     for (k,l) in nbs
      |                         if statuses[k, l, t-1] == "susceptible"
      |                             if rand() < R₀/length(nbs)
      |                                 statuses[k, l, t] = "infectious"
      |                             end
      |                         end
      |                     end
      |                     statuses[i, j, t] = "recovered"
      |                 elseif statuses[i, j, t - 1] == "recovered"
      |                     statuses[i, j, t] = "recovered"
      |                 end
      |             end
      |         end
      |     end
      |     statuses
      | end
      | 
      | sidelength = 30
      | n_timesteps = 150
      | barrier_height = 25
      | barrier = Set([(10, k) for k in 1:barrier_height])
      | R₀ = 2.2
      | statuses = spatial_simulation(30, 150, R₀, barrier)
      
    pre(julia-executable)
      | t = 150
      | infection_plot(statuses[:, :, t])
      | scatter!(collect(barrier), color = :black, markershape = :square)

Varying $t$, we obtain the following animation: 

    center: figure: video(src="images/spread-with-barrier.mp4" width="75%" controls)

::: .exercise
**Exercise**  
Experiment with other variations on this model to explore the following idea: *barriers don't seem to help much unless they manage to completely contain the virus, because community spread quickly becomes the dominant mode of transmission*. 
:::

    pre(julia-executable)
      | 
      
---
> id: other-resources
## Other Resources

Many data visualization and model visualization tools have been released in the weeks since the COVID-19 story began to break: 

1. UVA's Biocomplexity Institute [dashboard](https://nssac.bii.virginia.edu/covid-19/dashboard/) shows the geographic spread of the virus over time. 
2. [3Blue1Brown](https://www.youtube.com/watch?v=Kas0tIxDvrg) introduces some of the basic math involved. 
3. [GLEAMviz](http://www.gleamviz.org) is open-source epidemic modeling software. It uses a vastly more sophisticated model than the one we discussed here, based on real geographic and demographic data. It takes some basic information about the infectious agent and runs a simulation for you. (Though so far, I haven't seen an expert release a COVID model for GLEAMviz). 