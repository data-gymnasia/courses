# Epidemic modeling

> id: intro
> description: Mathematical models for describing the spread of viruses
> next: sets-and-functions
> color: "#5d2b2f"
> author: Samuel S. Watson

## Introduction

This year we have witnessed the rise of a global pandemic threat: a virus called SARS-CoV-2. In this lesson, we'll develop some of the basic elements of epidemic modeling, so that we can understand a small part of what public health researchers are looking at when they make projections and inform public policy. 

[Continue](btn:next)

---
> id: step-caveat

It's worth mentioning from the outset that epidemic modeling is a deep and complex subject, and without substantial experience it's impossible to know when the results of a model are really reliable. Furthermore, even in the best case scenario, there can still be *a lot* of uncertainty. Nevertheless, an appreciation of some of the phenomena observed in the simplest epidemic models can help us better understand the considerations being weighed by decision makers.

[Continue](btn:next)

---
> id: how-viruses-spread
### How viruses spread

A single SARS-CoV-2 particle, called a **virion**, consists of genetic material in the form of [RNA](gloss:RNA) encased in a [viral envelope](gloss:viral-envelope).

    figure
      img(src="images/virion.jpg" width="60%")
      p.caption.md Figure 1.1. Image credit: scientificanimations.com (CC BY-SA)
      
When the virion enters a person's body, the spike proteins on its surface bind with receptors on the surface of a [host](gloss:host) cell, allowing the virus RNA to enter the cell and use the cell's machinery to produce many copies of itself. These newly made virions then go on to infect other cells in the host's body.

[Continue](btn:next)

---
> id: step-transmission-virus

Once the virus has reproduced sufficiently in a host, virus-laden droplets exit the host's body in various ways (coughing, sneezing, exhaling, etc.). These virus particles can [remain active](gloss:virus-alive) outside the body and infect a new person, either by inhalation of suspended droplets or by hitching a ride from their hand to their face.

[Continue](btn:next)

---
> id: step-antibodies

An infected person eventually recovers when their immune system develops [antibodies](gloss:antibody) which bind to the viral spike proteins and mark the particles for destruction. A person who has been infected previously will typically not be infected again, because the antibodies remain in the body and will destroy any virus particles which enter in the body later.

::: .exercise
**Exercise**  
List three ways in which the previous paragraph represents an oversimplification of what happens after a person is infected.
:::
    
    x-quill

---
> id: solution-oversimplification

*Solution.* Here are some caveats:

1. An infected person does not necessarily recover, since some people die with the illness.
2. A person may become infected again if the virus mutates in such a way that the antibodies are no longer effective on the new [strain](gloss:strain). 
3. Antibodies don't last forever. A person may become infected again if they no longer have the antibodies they developed when they were originally infected.

[Continue](btn:next)

---
> id: step-graph-picture

Since the virus transmits discretely from one person to another, we can visualize the spread of the virus by drawing people as dots and transmission events as arrows connecting the dots. This mathematical structure is called a [directed graph](gloss:directed-graph). Starting from the first infected person, let's draw each transmission event as an arrow extending one unit to the right:

[Continue](btn:next)

---
> id: step-infection-graph

    figure
      img(src="images/infection-graph.svg" width="60%")
      p.caption.md Figure 1.2. The first person transmits to 3 people, then those people transmit to 1, 2, and 4 people, respectively, and so on. The average of these numbers (3, 1, 2, 4, etc.) is about 1.8. 
      
Figure 1.2 suggests that when each infected person transmits the infection to 1.8 other people on average, the overall number of infected people [[grows rapidly|grows slowly|decreases rapidly|decreases slowly]]. 

---
> id: step-infection-graph-decreasing

    figure
      img(src="images/infection-graph-decreasing.svg" width="60%")
      p.caption.md Figure 1.3. Starting from an infected population of size 40, each person transmits to about 0.5 people on average.

Figure 1.3 suggests that each infected person transmits the infection to 0.5 other people on average, the overall number of infected people [[decreases rapidly|decreases slowly|grows rapidly|grows slowly]].

---
> id: step-importance-of-R0

In summary, Figures 1.2 and 1.3 suggest the importance of the average number of people each infected person transmits to. If this number is large, then the infection tends to grow rapidly. If it's small, then the infection decreases rapidly.

[Continue](btn:next)

---
> id: galton-watson-processes
### Galton-Watson processes

Let's devise a simple probabilistic model for producing data along the lines of what's shown in Figures 1.2 and 1.3. We can use this model to experiment with the mean-transmission-number value. 

Perhaps the simplest way to do this is to fix a [distribution](gloss:measure) on $\\{0, 1, \\ldots, \\}$. Starting from the initially infected population, we will draw a random number from that distribution to determine the number of people that person transmits to. 

[Continue](btn:next)

---
> id: step-galton-watson-process

This random process is called a **Galton-Watson** process, and it has been studied since at least 1873. The results end up not depending very much on the exact details of the transmission distribution. Let's use with the [Poisson distribution](gloss:poisson), since its mean is equal to its parameter $\lambda$, and that will make it easy for us to adjust the mean. 

::: .exercise
**Exercise**  
Run the code cell below to see 16 runs of the Galton Watson process with initial population 1 and transmission mean 2. 

Then adjust the values in the definition of the function `{jl} sim` to start with more infected people but a lower transmission mean. 

(a) Which value of $\lambda$ seems to mark the transition from growth to decay? 

(b) If $\lambda$ is on the larger side, the number of infectious persons [[usually|always]] grows eventually, while if $\lambda$ is on the smaller side, the number of infected persons [[always|usually]] decays eventually.
:::

{.small} Note: the executable code cells are provided here for convenience, but if you'd prefer a notebook interface, you can launch a Jupyter notebook on Binder, with all packages pre-loaded, with [one click](https://mybinder.org/v2/gh/data-gymnasia/julia-binder/master)). 

{.small} Also, note that the cells may take some time to load initially, because a server is being launched for you in the background.

    pre(julia-executable)
      | using Plots, Distributions
      | function galton_watson(n_generations; initial_population = 1, λ = 2)
      |     p = plot(legend = nothing, xaxis = nothing, yaxis = nothing)
      |     infectious_persons = 1:initial_population
      |     for generation in 1:n_generations
      |         infection_counts = [rand(Poisson(λ)) for person in infectious_persons]
      |         infection_totals = [0; cumsum(infection_counts)]
      |         for person in infectious_persons
      |             for new_person in 1:infection_counts[person]
      |                 x = [generation - 1, generation]
      |                 y = [person, infection_totals[person] + new_person]
      |                 plot!(p, x, y, color = :MidnightBlue)
      |             end
      |         end
      |         infectious_persons = 1:sum(infection_counts)
      |     end
      |     p
      | end
      | 
      | sim() = galton_watson(5, initial_population = 1, λ = 2)
      | plot([sim() for _ in 1:16]..., layout = (4, 4), link = :both)

    x-quill

---
> id: step-solution-galton-watson-experiment

*Solution.* 

(a) If $\lambda > 1$, then more people are infected in each new time step (on average). Therefore, the infection typically spreads in this case. If $\lambda < 1$, then the number of infected persons tends to decrease in each new generation. This comports with numerical experimention using the given code.

(b) Growth only *usually* occurs, since it can happen by luck that the virus is eradicted at a very early stage. Decay always occurs eventually in the $\lambda < 1$ scenario, since even if it happens to grow by luck initially, that luck does not persist forever. 

[Continue](btn:next)

---
> id: step-galton-watson-theorem

It turns out that the intuition explored in the previous exercise is provably accurate (see the book *Probability with Martingales* by David Williams if you'd like to see a proof): 

::: .theorem
**Theorem** 
A Galton-Watson process eventually reaches extinction with probability 1 if and only if the mean of the transmission distribution is less than or equal to 1 (except in the trivial case where every person transmits to exactly 1 person with probability 1).
:::

[Continue](btn:next)

---
> id: step-galton-watson-summary

While the Galton-Watson model omits many important features of real-world epidemics, it illustrates one lesson which is valuable despite the oversimplification of the model: the fight is won or lost based on whether we can get each infectious person transmitting the infection to 1 or fewer other people on average. 

---
> id: stochastic-sir-models
## Stochastic SIR models

One of the main shortcomings of the Galton-Watson model is that it can exhibit indefinite growth. That's because it's effectively drawing from an *infinite* population of susceptible persons. One way we can make the model more realistic is to start with the full population and mark individuals as "removed" from the susceptible population once they have been infected. 

In this section, we'll modify the Galton-Watson model in a way that incorporates recovered individuals. We'll draw from the material presented in [this talk](https://www.youtube.com/watch?v=gSqIwXl6IjQ) by Tom Britton at Stockholm University.

[Continue](btn:next)

---
> id: step-SIR-dynamics

Let's specify the dynamics of our new model, which we'll call the **discrete SIR model** (where SIR stands for "susceptible-infectious-removed"):

* At time 0, the first individual is infected and every other individual is susceptible. 
* For each time $t > 0$, each infected individual transmits to each susceptible individual with some fixed, small probability $p$ (with infection event independent of all others). If an individual is infected at time $t-1$, they are recovered at time $t$.

::: .exercise
**Exercise**  
This model is still missing some desirable features (select all that apply):

    x-picker.list
      .item.pill.bblue Transmission events are not really independent
      .item.pill.bblue(data-error="can-transmit") One person can't transmit to several others
      .item.pill.bblue(data-error="geographic") You can transmit to someone even if they aren't geographically close
      .item.pill.bblue Geographic proximity is an important consideration

:::

---
> id: desirable-features-solutions

::: .exercise
**Exercise**  
Suppose that at a given time $t-1$, there are $j$ infected individuals and $k$ susceptible individuals. Then the probability that a particular individual susceptible at time $t-1$ becomes infected at time $t$ is [[$1-(1-p)^{j}$|$1-p^{j}$|$(1-p)^{j}$]].
:::

---
> id: step-solution-basic-SIR

*Solution.* The probability that an individual avoids infection is the probability that each infection opportunity fails to transmit. This probability is $(1-p)^j$, since there are $j$ infected individuals, and each one transmits with probability $p$. Therefore, the probability of infection for the individual is $1-(1-p)^j$. 

[Continue](btn:next)

---
> id: step-id-expectation-calc

::: .exercise
**Exercise**  
In terms of $n$ and $p$, the expected number of infectious persons at the second time step (the one right after there's exactly one infectious person) is [[$p(n-1)$|$pn$|$n(1-p)$]]. 
:::

---
> id: exp-calc-solution

*Solution.* If we define $I_k$ to be 1 if person $k$ is infected on the second time step and 0 otherwise, then the random variable we're looking to find the expected value of is $I\_2 + I\_3 + \\ldots + I\_n$. Furthermore, each of these random variables has an expectation of $p(1) + (1-p)(0) = p$. By linearity of expectation, the expected number of infectious persons is $\\mathbf{E}[I\_2] + \\cdots + \\mathbf{E}[I\_n] = p + \\cdots + p = p(n-1)$. 

[Continue](btn:next)

---
> id: step-Rt

Bearing in mind the result of the previous exercise (as well as the approximation $p(n-1) \\approx pn$), we'll define $p$ to be $\lambda / n$. That way, we can control the expected (initial) number of transmissions from each infectious individual by adjusting the value of $\lambda$. 

[Continue](btn:next)

---
> id: step-exercise-simulation

::: .exercise
**Exercise**  
Use the code block below to simulate several runs of our discrete SIR model. 

(a) Why does the number of infectious individuals necessarily converge to 0 as the time index goes to $\infty$? 

(b) Does everyone end up having been infected?
:::

    pre(julia-executable)
      | using Plots
      | import Base.Iterators: countfrom
      |  
      | function SIR_simulation(population_size, infection_probability)
      |     statuses = fill("susceptible", population_size, 1)
      |     statuses[1, 1] = "infectious"
      |     transmissions = []
      |     for t in countfrom(2)
      |         n_infectious = sum(statuses[:, t-1] .== "infectious")
      |         if n_infectious == 0
      |             break
      |         end
      |         statuses = [statuses fill("susceptible", population_size)]
      |         for k in 1:population_size
      |             if statuses[k, t-1] == "recovered" || statuses[k, t-1] == "infectious"
      |                 statuses[k, t] = "recovered"
      |             end
      |         end
      |         for j in 1:population_size
      |             if statuses[j, t-1] == "infectious"
      |                 for k in 1:population_size
      |                     if statuses[k, t-1] == "susceptible"
      |                         if rand() < infection_probability
      |                             push!(transmissions, [(j, t-1),(k, t)])
      |                             statuses[k, t] = "infectious"
      |                         end
      |                     end
      |                 end
      |             end
      |         end
      |     end
      |     statuses, transmissions
      | end
      |  
      | population_size = 20
      | infection_probability = 2 / population_size
      | statuses, transmissions = SIR_simulation(population_size, infection_probability)
      | statuses

To make it easier to see the whole array, we map the status values to colors and plot the entries as points: 

    pre(julia-executable)
      | function simplot(statuses, transmissions)
      |     colorize(status) = Dict("infectious" => :Red, 
      |                         "recovered" => :LightGray,
      |                         "susceptible" =>  :CornflowerBlue)[status]
      |     colors = [colorize(statuses[i]) for i in CartesianIndices(statuses)][:]
      |     p = scatter([(i[2], i[1]) for i in CartesianIndices(statuses)][:],
      |             color = colors, legend = nothing, 
      |             xlabel = "time", ylabel = "person")
      |     for transmission in transmissions
      |         plot!(p, reverse.(transmission), color = :DarkGray, arrow = :arrow)
      |     end
      |     p
      | end
      | 
      | simplot(statuses, transmissions)

    figure
      img(src="images/recovered-population.svg")
      p.caption.md Figure 2.1. Each row represent's an individual's status over time, with blue representing susceptibility, red representing infectiousness, and gray representing immunity.
      
    x-quill

---
> id: step-simulation-solution

*Solution.* 

(a) The number of infectious individuals eventually reaches the value 0 and stays there forever, since each time step with a positive number of infectious individuals either results in no new infections, or it reduces the finite number of susceptible individuals by at least 1. When the number of susceptible individuals reaches zero, no new infections can occur.

(b) No. There are almost always some individuals which make it to eradication without ever being infectious.

[Continue](btn:next)

---
> id: reproduction-number
### Reproduction Number

The expected number of transmissions from each infectious individual [[decreases|increases|increases then decreases]] over time. In particular, conditioned on there being $S_t$ susceptible individuals at time $t$, an infectious individual at time $t$ transmits to [[$pS\_t$|$pn$]] people on average. 

At some point, the proportion of the population which is susceptible is low enough that the expected number of transmissions is below 1, and then the infection dies out quickly. Thus some folks end up never being infected. Let's numerically explore the proportion of the population which ends up having been infected: 

---
> id: histogram-exercise

::: .exercise
**Exercise**  
The code block below computes the eventual number of recovered individuals over many simulations of an SIR model with 1000 individuals. Adjust the numerator in the line which defines `{jl} infection_probability` to see how the behavior of the resulting histogram depends on this value.
:::

    pre(julia-executable)
      | using Plots
      | 
      | n = population_size = 1000
      | p = infection_probability = 1.0/population_size
      | n_recovered(n, p) = sum(SIR_simulation(n, p)[1][:, end] .== "recovered")
      | histogram([n_recovered(n, p) for _ in 1:5_000], xlims = (0, 1000), 
      |           nbins = 100, label = "", xlabel = "final number recovered",
      |           ylabel = "number of runs")
      
    x-quill

---
> id: step-solution-R0

*Solution.* When the value is around 1 or lower, the infection tends to reach only a few individuals. When the value is larger than 1, the infection sometimes reaches very few individuals and sometimes reaches approximately some particular fraction of the population. For example, when the value is 1.5, the final number of recovered individuals is often around 60% of the population. Furthermore, this proportion is extremely likely to be either close to 60% or close to 0%.

    figure
      img(src="images/histogram-final-recovered.svg" width="60%")
      p.caption.md Figure 2.2. The proportion of the population that the infection spreads to is almost always around either 60% or 0%. 

[Continue](btn:next)

---
> id: step-introducing-R0

The value $\lambda = np$ is called the **basic reproductive number**. This is the value known in the literature (and in the news!) as $R\_0$ (pronounced "R-naught"), and it represents the expected number of susceptible individuals each infectious person transmits to on a given *early* time step, when the number of susceptible individuals is nearly the whole population. More generally, if we want to talk about a time $t$ is not necessarily early on, then the expected number of susceptible individuals each infectious person transmits to is called $R\_t$. 

In the context of this model, we calculated the value of $R_t$ to be $pS_t$, where $S_t$ is the number of susceptible individuals at time $t$. 

[Continue](btn:next)

---
> id: step-how-transmission-works
### Herd immunity

Let's reflect on how [herd immunity](gloss:herd-immunity) works in the context of our discrete SIR model, using the language of Galton-Watson processes. If the value of $R\_0$ is larger than 1, then the disease spreads exponentially early on. As a higher fraction of the population becomes infected (and thus immune), the value of $R\_t$ decreases proportionally. At some point, $R\_t$ reaches a value less than 1, and then the spread begins to decay rapidly and die out. 

We can observe this phenomenon numerically by plotting $R\_t$ as a function of time alongside the results of a simulation:

    pre(julia-executable)
      | using LaTeXStrings
      | population_size = 40
      | R₀ = 2
      | infection_probability = R₀ / population_size
      | statuses, transmissions = SIR_simulation(population_size, infection_probability)
      | plt = simplot(statuses, transmissions)
      | rt = plot(R₀ * sum(statuses .== "susceptible", dims = 1)[:]/population_size, 
      |     fillrange = 0, color = :blue, fillopacity = 0.2, legend = false,
      |     xlabel = "time", ylabel = L"R_t")
      | hline!(rt, [1.0])
      | plot(plt, rt, layout = (2, 1))
      
    figure
      img(src="images/transmission-and-Rt.svg" width="60%")
      p.caption.md Figure 2.3. We observe growth in the number of infectious persons until $R\_t$ drops below 1, and then after that we observe decay. 

---
> id: recovery-proportion

Finding the infected proportion of the population at the point where $R_t$ drops below 1 is a matter of solving the equation $R_t = pS_t = 1$ for $S_t$. We find that $S_t = 1/p = n/R\_0$. For example, if $R\_0 = 2$, then [[half|a third|a fourth]] of the population has been infected at the point when $R\_t$ hits 1. 

---
> id: step-infection-dying-down

However, more people become infected after $R_t$ goes below 1, because it takes a few further generations for the number of active cases to go down. Remarkably, we can do an elegant back-of-the-envelope calculation to work out the expectation of the proportion $\tau$ of individuals who eventually become infectious (in the context of our discrete SIR model, and conditioned on the event that that proportion is not close to zero). 

Loosely speaking, the value $\tau$ that we're looking for here is the middle of the hump on the right in the histogram in Figure 2.3 (which shows number of simulations versus number of eventually recovered individuals in those simulations). 

The key idea is to work out—in two different ways—the probability that a given individual manages to avoid infection from all [[$n\tau$|$\tau/n$]] infected individuals. 

[Continue](btn:next)

---
> id: step-recovery-calculation

From the point of view of a given never-infectious individual, each eventually recovered individual attempts transmission to them [[exactly once|more than once|once or more]]. If we assume that the distribution of the number of eventually infectious individuals is concentrated around $n \tau$, then we conclude that the probability that a susceptible individual dodges infection is approximately $(1-p)^{n\tau}$.

[Continue](btn:next)

---
> id: step-proportion-not-infected

Also, since the population is homogeneous (that is, each individual has the same properties in the model's dynamics), the probability that a given individual dodges infection is the probability that it lies in the $1-\tau$ proportion of individuals which never get infected. 

Therefore, the value of $\tau$ should satisfy the equation $1 - \tau = (1-p)^{n\tau}$. Since $p = R\_0 / n$, and since $(1-x/k)^k \approx \mathrm{e}^{-x}$ for large $k$, obtain the equation $1 - \tau = \mathrm{e}^{-R\_0 \tau}$. 

We can plot $\tau$ as a function of $R\_0$ by solving this equation numerically. For comparison, we also show the proportion infected at the point where $R_t$ goes less than 1. 

    pre(julia-executable)
      | using Roots, Plots, LaTeXStrings
      | plot(0.01:0.01:4, 
      |      R₀ -> find_zero(τ -> 1 - τ - exp(-R₀*τ), 0.5), 
      |      label = "", xlabel = L"$R_0$", ylabel = L"$\tau$", 
      |      ylims = (0,1))
      | plot!(1:0.01:4, R₀ -> 1 - 1/R₀, label = "")

    figure
      img(src="images/final-tau.svg" width="80%")
      p.caption.md Figure 2.4. If $R\_0$ is less than or equal to 1, then there is no outbreak. If $R\_0 > 1$, the approximate proportion of the population that will eventually be infected is an increasing function of $R\_0$. 

[Continue](btn:next)

The vertical gap between the two curves plotted in Figure 2.4 represents...

    x-picker.list
      .item.pill.bblue the proportion of individuals who eventually become infected
      .item.pill.bblue(data-error="incorrect") the proportion of individuals who become infected after the point when the infection starts decreasing in prevalence

---
> id: reducing-R0
### Mitigation measures

The value of $R\_0$ can be lowered through preventative measures. Roughly speaking, $R\_0$ is a product of three factors: 

* Transmission probability for each contact with another person
* Number of contacts per day
* Number of days in infectious period 

For example, handwashing reduces [[transmission probability|number of contacts per day]], while testing can help reduce [[duration of infectious period|transmission probability for each contact]]. Social distancing reduces [[both contacts per day and transmission probability per contact|contacts per day|transmission probability per contact]]. 
      
::: .exercise
**Exercise**  
Early estimates of the $R\_0$ value of COVID-19 (under transmission conditions as they existed before mitigation measures were in place) have been somewhere between 2 and 3. Based on this $R\_0$ value and the equation we derived, approximately what proportion of the population would eventually become infectious?
:::

    x-quill

---
> id: step-R0-covid-solution

*Solution.* Based on the graph, we can say the proportion would be between 80% and 90%. Values estimated by experts vary in the 20%-70% range, so clearly the differences between the SIR model and the more advanced models being used by epidemiologists do have an impact on the proportion of the population the infection would eventually reach (under the assumption that no mitigation measures are employed). 

---
> id: deterministic-sir-models
## Deterministic SIR models

One difficulty with the stochastic SIR model in the previous section is that the results are random. This can make certain kinds of analysis more difficult, and it means that we have to run many simulations to get a sense of the results. It can be helpful to get a single deterministic result which represents the typical behavior of the random system. We can do this by replacing each random incremental change with a deterministic step equal to the *average* behavior for that step. 

[Continue](btn:next)

---
> id: step-deterministic-models-2

For example, consider the first step. We have one infectious individual and $n-1$ susceptible individuals, so the expected number of individuals which get infected $p(n-1)$. Rather than choosing this number randomly, we'll just directly change the value by $p(n-1)$. This number is not necessarily an integer, [[but that's OK|and that doesn't make any sense]], because it represents an *average*, not an exact count of a set of individuals. 

---
> id: exact-calculation-first-step-discrete-SIR

For the next step, we'll have $i_1 = p(n-1)$ infectious individuals, $s_1 = n - 1 - p(n-1)$ susceptible individuals, and $r_1 = 1$ recovered individual. On average, there are [[$s_1 i_1$|$s_1$|$i_1$]] transmission opportunities, and each one results in infection with probability $R_0/n$. Therefore, the expected number of new infections at this time step is approximately $s_1i_1R_0/n$. Then we perform the same update using the value $s_1i_1R_0/n$ as the number of new infections. 

---
> id: step-difference-equations-in-code

Let's continue this calculation in code: 

    pre(julia-executable)
      | using Plots
      | n = 1000
      | R₀ = 1.5
      | s = [1.0 * (n - 1)]
      | i = [1.0]
      | r = [0.0]
      | for _ in 1:40
      |     n_infected = R₀ * s[end] * i[end] / n
      |     push!(s, s[end] - n_infected)
      |     push!(i, i[end] - i[end] + n_infected )
      |     push!(r, r[end] + i[end])
      | end
      | 
      | p = plot([s i r], label = ["s(t)" "i(t)" "r(t)"], 
      |                   xlabel = "time", ylabel = "count")

    figure
      img(src="images/sir-difference-equation.svg" width="60%")
      p.caption.md The evolution of the numbers of susceptible, infectious, and recovered individuals over time, where each incremental change is made according to the average behavior of the corresponding change in the random system.

[Continue](btn:next)

---
> id: step-SIR-law-of-large-numbers

To see how this is exercise is valuable, let's plot a simulation of the stochastic model from the previous section alongside the results from this non-random approach:

    pre(julia-executable)
      | include("data-gymnasia/sir-simulation.jl")
      | population_size = 1000
      | infection_probability = 1.5 / population_size
      | statuses, transmissions = SIR_simulation(population_size, infection_probability)
      | p = plot([s i r], label = ["s(t)" "i(t)" "r(t)"], 
      |                   xlabel = "time", ylabel = "count")      
      | for status in ("susceptible", "infectious", "recovered")
      |     inf_totals = sum(statuses .== status, dims = 1)[:]
      |     scatter!(p, inf_totals, label = "")
      | end
      | p

    figure
      img(src="images/sir-difference-equation-2.svg" width="60%")
      p.caption.md The deterministic equations describe the average behavior of the random system, and the random system sometimes follows the deterministic trajectory quite closely.

We can see that the deterministic approach plays the role of the mean in the [law of large numbers](gloss:law-of-large-numbers): it's the steady value around which the curve for the random system fluctuates.

[Continue](btn:next)

---
> id: step-differential-equations-2
### Connection to differential equations

In mathematical notation, the system we simulated above is called a system of *difference equations*. Writing the change in $s$ as $\Delta s$, the equations might be written in a math textbook as

```latex
\Delta s_t &= -\frac{s_ti_tR_0}{n} \\
\Delta i_t &= \frac{s_ti_tR_0}{n} - i_t \\
\Delta r_t &= i_t. 
```

[Continue](btn:next)

---
> id: step-make-time-continuous

If we want to obtain even smoother behavior by making *time* continuous as well, we should use a time increment of $\Delta t$ rather than 1. Since the amount by which $s$ or $i$ or $r$ changes in a given short interval of length $\Delta t$ is approximately [[$\Delta t$|$1/\Delta t$]] times as much as it would change over one unit of time, we should modify the equation above by multiplying the right-hand side by $\Delta t$: 

```latex
\Delta s_t &= -\frac{s_ti_tR_0}{n}\Delta t \\
\Delta i_t &= \left(\frac{s_ti_tR_0}{n} - i_t\right) \Delta t \\
\Delta r_t &= i_t \Delta t. 
```

---
> id: step-system-of-differential-equations

If we divide both sides by $\Delta t$ and let $\Delta t \to 0$, we obtain the following system of *differential equations*: 

```latex
\frac{ds}{dt} &= -s_ti_tR_0/n \\
\frac{di}{dt} &= s_ti_tR_0/n - i_t \\
\frac{dr}{dt} &= i_t. 
```

While this system does not have an analytical solution, we can solve it numerically and plot the results using Julia's `{jl} DifferentialEquations` package:

    pre(julia-executable)
      | using DifferentialEquations, Plots
      | import ParameterizedFunctions: @ode_def
      | 
      | sir_ode = @ode_def SIRModel begin
      |    ds = -p*s*i
      |    di = p*s*i - i
      |    dr = i
      | end p
      | 
      | n = 1000
      | initialvalues = 1.0 * [n - 1, 1, 0]
      | timerange = (0.0, 40.0)
      | p = 1.5 / n
      | 
      | sir_problem = ODEProblem(sir_ode, initialvalues, timerange, [p])
      | 
      | sir_solution = solve(sir_problem)
      | plot(sir_solution)
      | plot!(ylabel = "count")

    figure
      img(src="images/differential-equation-plot.svg" width="60%")
      p.caption.md The differential equation solution is very similar to the difference equation solution.

One advantage of the differential equations approach is that it allows us to make a rigorous statement about how the behavior of the random, discrete system is very close to the behavior of the deterministic, continuous system (in the sense that the infection curves are close with high probability). If you'd like to see a theorem to this effect, check out [this 2015 paper](https://arxiv.org/abs/1511.08572) by Ekkehard Beck and Benjamin Armbruster of Northwestern University.

      
::: .exercise
**Exercise**  
You've probably seen graphs labeled *Flattening the Curve* on social media. The idea is to reduce the transmission rate so that the the peak (of the graph of number of infections versus time) is lower and comes later. This is valuable for the health care system, because it reduces the required capacity and gives time to expand capacity. 

Even for the simple SIR model, we can see numerically how flattening the curve is directly related to $R_0$. Make a plot of $i_t$ for two $R\_0$ values to see that the curve is flatter for the smaller one. 

{.small} Note: we supply the keyword argument `{jl} vars = (0, 2)` to the plot method for the differential equation solution object to say that we want to plot time on the horizontal axis (variable 0) and $i$ on the vertical axis (variable 2).

:::

    pre(julia-executable)
      | using DifferentialEquations, Plots
      | 
      | sir_ode = @iode_def SIRModel begin
      |    ds = -p*s*i
      |    di = p*s*i - i
      |    dr = i
      | end p
      | 
      | n = 1000
      | function plot_infections!(plt, n, R₀)
      |     initialvalues = 1.0 * [n - 1, 1, 0]
      |     timerange = (0.0, 40.0)
      |     p = R₀ / n
      |     sir_problem = ODEProblem(sir_ode, initialvalues, timerange, [p])
      |     sir_solution = solve(sir_problem)
      |     plot!(plt, sir_solution, vars = (0, 2), label = string(R₀))
      | end
      | 
      | plt = plot(ylabel = "number infected")
      | plot_infections!(plt, n, #= insert R₀ value here! =#)
      | plot_infections!(plt, n, #= insert R₀ value here! =#)
      | plt

    x-quill

---
> id: step-solution-flattening-the-curve

*Solution.* 

    pre(julia-executable)
      | plt = plot(ylabel = "number infected")
      | plot_infections!(plt, n, 1.5)
      | plot_infections!(plt, n, 2.0)
      | plt
  
    figure
      img(src="images/flattening-the-curve.svg")
      p.caption.md Decreasing $R\_0$ decreases the maximum number of simultaneous cases while also putting that peak further into the future. There are also fewer individuals infected overall when $R\_0$ is smaller. 

---
> id: lessons-for-the-real-world
## Lessons for the real world

In this section we'll use our models as a lens through which to examine some important questions for real-world epidemic planning. It's worth repeating the caveat that such model-based conclusions should always be held skeptically and weighed rigorously against broader real-world considerations. However, this exercise can nevertheless be useful, because it can help build intuition about the basic mechanisms underlying important phenomena which are present in the models *and* known by experts to be present in real-world epidemics as well.

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
      |     transmissions = []
      |     for t in countfrom(2)
      |         n_infectious = sum(statuses[:, t-1] .== "infectious")
      |         if n_infectious == 0
      |             break
      |         end
      |         statuses = [statuses fill("susceptible", population_size)]
      |         for k in 1:population_size
      |             if statuses[k, t-1] == "recovered" || statuses[k, t-1] == "infectious"
      |                 statuses[k, t] = "recovered"
      |             end
      |         end
      |         for j in 1:population_size
      |             if statuses[j, t-1] == "infectious"
      |                 for k in 1:population_size
      |                     if statuses[k, t-1] == "susceptible"
      |                         if rand() < infection_probability
      |                             push!(transmissions, [(j, t-1),(k, t)])
      |                             statuses[k, t] = "infectious"
      |                         end
      |                     end
      |                 end
      |             end
      |         end
      |     end
      |     statuses, transmissions
      | end
      |  
      | population_size = 20
      | infection_probability = 2 / population_size
      | statuses, transmissions = SIR_simulation(population_size, infection_probability)
      | statuses
      | 
      | n = population_size = 1000
      | p = infection_probability = 2/population_size
      | n_recovered(n, p) = sum(SIR_simulation(n, p)[1][:, end] .== "recovered")
      | histogram([n_recovered(n, p) for _ in 1:5_000], xlims = (0, 1000), 
      |           nbins = 100, label = "", xlabel = "final number recovered",
      |           ylabel = "number of runs")
      

[Continue](btn:next)

---
> id: step-solution-different-number-initial

*Solution.* What we see is that even with 10 initially infectious individuals, the disease spreads to a substantial percentage of the population with very high probability:

    pre(julia-executable)
      | using Plots
      | import Base.Iterators: countfrom
      |  
      | function SIR_simulation(population_size, 
      |                         infection_probability,
      |                         n_initially_infected)
      |     statuses = fill("susceptible", population_size, 1)
      |     statuses[1:n_initially_infected, 1] .= "infectious"
      |     transmissions = []
      |     for t in countfrom(2)
      |         n_infectious = sum(statuses[:, t-1] .== "infectious")
      |         if n_infectious == 0
      |             break
      |         end
      |         statuses = [statuses fill("susceptible", population_size)]
      |         for k in 1:population_size
      |             if statuses[k, t-1] == "recovered" || statuses[k, t-1] == "infectious"
      |                 statuses[k, t] = "recovered"
      |             end
      |         end
      |         for j in 1:population_size
      |             if statuses[j, t-1] == "infectious"
      |                 for k in 1:population_size
      |                     if statuses[k, t-1] == "susceptible"
      |                         if rand() < infection_probability
      |                             push!(transmissions, [(j, t-1),(k, t)])
      |                             statuses[k, t] = "infectious"
      |                         end
      |                     end
      |                 end
      |             end
      |         end
      |     end
      |     statuses, transmissions
      | end
      |  
      | n = population_size = 1000
      | p = infection_probability = 2/population_size
      | n_recovered(n, p) = sum(SIR_simulation(n, p, 10)[1][:, end] .== "recovered")
      | histogram([n_recovered(n, p) for _ in 1:5_000], xlims = (0, 1000), 
      |           nbins = 100, label = "", xlabel = "final number recovered",
      |           ylabel = "number of runs")

    figure
      img(src="images/histogram-large-initial-population.svg")
      p.caption.md If $R\_0$ is substantially larger than 1 and the initial number of infectious individuals is more than a few, then the probability of widespread infection is very high. In the 5000 runs used to produce the histogram above, all 5000 eventually reached approximately 80% of the population. 
      
The final proportion infected depends on the $R\_0$ value but *not* on the number of individuals who infectious initially. 

[Continue](btn:next)

---
> id: step-apply-initial-pop-to-real-life

While we derived this observation in the context of an SIR model, it does apply to real-life outbreaks as well: unless the disease is [[fully eradicated|significantly reduced]], $R\_0$ matters far more than the number of individuals who are infectious to start. 

When you heart the argument that an infectious disease should be ignored because the number of cases is still a small proportion of the population, it's analogous to arguing that an oven fire should be ignored until it at least engulfs the kitchen: flammability matters more than the size of the initial fire, unless the initial fire is nonexistent.

[Continue](btn:next)

---
> id: step-temporary-reduction

This observation also helps us see why a temporary reduction in $R\_0$ does not prevent a spike in cases later once $R\_0$ goes back up. Unless the conditions for a lower $R\_0$ value are sustained long enough to eliminate the virus altogether, the post-reduction phase is essentially a fresh run of the model with large number of susceptible individuals, a high $R\_0$ value, and enough initial infections to ensure widespread infection. To avoid a population-level outbreak, we need either a *long-term* reduction in $R\_0$ or widespread immunity achieved through a vaccine. 

[Continue](btn:next)

---
> id: containment-vs-mitigation
### Containment vs Mitigation

The SIR model may be made more realistic in a wide variety of ways. One of the most glaring omissions is the lack of [[*geography*|*transportation*|*RNA*]] in the model: in the real world, the virus spreads by the kind of physical contact which is much more likely between people who live close to one another. Let's see what happens when we incorporate spatial relationships into the model. 

Let's arrange our individuals into a square grid, and we'll let each person transmit to its four neighbors: 

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

{.small} This exercise is more open-ended than the others in this course. You might want to do this exploration in a [Jupyter notebook](https://mybinder.org/v2/gh/data-gymnasia/julia-binder/master). 
:::

    pre(julia-executable)
      | 
      
    x-quill

---
> id: links
## Links

Many data visualization and model visualization tools have been released in the weeks since the COVID-19 story began to break. Here are a few of my favorites:

1. UVA's Biocomplexity Institute [dashboard](https://nssac.bii.virginia.edu/covid-19/dashboard/) shows the geographic spread of the virus over time. 
2. [3Blue1Brown](https://www.3blue1brown.com/videos-blog/simulating-an-epidemic) presents a video narration examining the effects of various agent-based simulation features.
3. Gabriel Goh provides a [simple, elegant calculator](http://gabgoh.github.io/COVID/index.html) for illustrating how parameter changes affect trajectory of the infection curve.
4. Kevin Simler's [blog post](https://meltingasphalt.com/outbreak/) introduces and discusses quite a few manipulatives for varying simulation parameters.
5. The [COVID-19 Forecasting Project](http://epidemicforecasting.org) gives estimates for current numbers of active cases as well as projections for the future.
6. [COVID Projections](https://covid19-projections.com/) is another forecasting site with positive reviews from experts.
7. [rt.live](https://rt.live) tracks state-by-state estimates for the current reproduction number ($R\_t$) over time.

A couple notable data sources if you want to explore the data yourself: 

1. The [Johns Hopkins](https://github.com/CSSEGISandData/COVID-19) data is perhaps the most canonical source on global COVID-19 data. 
2. The [COVID Tracking Project](https://covidtracking.com) includes data on *negative* tests as well positive ones, but it only covers the United States.

Check out this [Jupyter notebook](https://colab.research.google.com/drive/12IyckouU_Mqr9x5uTNvFyVuJ2ZGO5g9m) if you want to see an example of how to load the Johns Hopkins data into a Python session and perform some data manipulation and visualization tasks with it.
