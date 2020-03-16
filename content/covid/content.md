
# Epidemic modeling

> id: intro
## Introduction

So far in 2020, we have witnessed the rise of a global pandemic threat: a virus called SARS-CoV-2. In this lesson, we'll develop some of the basic elements of epidemic modeling, so that we can understand a small part of what public health researchers are looking at when they make projections and inform public policy. 

[Continue](btn:next)

---
> id: step-caveat

It's worth mentioning from the outset that epidemic modeling is a deep and complex subject, and without substantial experience it's impossible to know when the results of a model are really reliable. Furthermore, even in the best case scenario, there can still be *a lot* of uncertainty. Nevertheless, an appreciation of some of the phenomena observed in the simplest epidemic model can help us better understand the considerations being weighed by decision makers.

Note: the content we'll present is based on [this talk](https://www.youtube.com/watch?v=gSqIwXl6IjQ) by Tom Britton at Stockholm University. 

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

The dynamics of the model are specified [[*probablistically*|*statistically*]] as follows: 

* At time 0, the first individual is infected and every other individual is susceptible. 
* For each time $t > 0$, each infected individual infects each susceptible individual with some fixed probability $p$ (with infection event independent of all others). If an individual is infected at time $t-1$, they are recovered at time $t$.

::: .exercise
**Exercise**  
Suppose that at a given time $t-1$, there are $j$ infected individuals and $k$ susceptible individuals. Then the probability that a particular individual susceptible at time $t-1$ becomes infected at time $t$ is [[$1-(1-p)^{j}$|$1-p^{j}$|$(1-p)^{j}$]].
:::

[Continue](btn:next)

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
      | 
      | function SIR_simulation(population_size, infection_probability, n_timesteps)
      |     statuses = fill("susceptible", population_size, n_timesteps)
      |     statuses[1, 1] = "infectious"
      |     for t in 2:n_timesteps
      |         n_infected = sum(statuses[:, t-1] .== "infectious")
      |         for k in 1:population_size
      |             if statuses[k, t-1] == "susceptible"
      |                 if rand(Bernoulli(1 - (1-infection_probability)^n_infected)) == 1
      |                     statuses[k, t] = "infectious"
      |                 else
      |                     statuses[k, t] = "susceptible"
      |                 end
      |             else 
      |                 statuses[k, t] = "recovered"
      |             end
      |         end
      |     end
      |     return statuses
      | end
      | 
      | population_size = 10_000
      | infection_probability = 0.001
      | n_timesteps = 20
      | statuses = SIR_simulation(population_size, infection_probability, n_timesteps)
      | plot(sum(statuses .== "infectious", dims = 1)[:], label = "", xlabel = "time", 
      |         ylabel = "number infected", ylims = (0, population_size))
      
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
      | T = n_timesteps = 20
      | n_recovered(n, p, T) = sum(SIR_simulation(n, p, T)[:, end] .== "recovered")
      | histogram([n_recovered(n, p, T) for _ in 1:5_000], xlims = (0, 1000), 
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

The most important takeaway from this plot of $\tau$ vs $R\_0$ above is the inequality [[$R\_0 \leq 0$|$R\_0 \leq 1$|$R\_0 \leq 2$]]. When that inequality holds, no outbreak occurs. 

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
      |     n_timesteps = 30
      |     statuses = SIR_simulation(population_size, infection_probability, n_timesteps)
      |     plot!(sum(statuses .== "infectious", dims = 1)[:], label = latexstring("R_0 = $(R₀)"), xlabel = "time", 
      |             ylabel = "number infected", ylims = (0,population_size))
      | end
      | 
      | using Random; Random.seed!(1)
      | plot()
      | infection_curve!(2.0)
      | infection_curve!(3.0)

This graph is not very smooth compared to the ones you've seen online. The reason for this is that the **generational time**, the typical time between getting infected and infecting others, is 1 for this model. We could modify the model so that each infectious individual remains infectious for a larger number of time steps (decreasing $p$ by the same factor to keep the same $R\_0$ value), and in that case the graph would look very similar to ones you've seen online.

