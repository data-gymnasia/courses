# Data and Society

> id: intro
> description: Learn about Data Ethics and Biased Word Embeddings.
> color: "#ccb532"
> next: intro-data-pipeline
> author: Sarah M. Brown

## Introduction

Data Science is an exciting area that has helped us automate many processes using machine learning and other techniques.
The impact of data science on our daily lives, and society more generally, has been tremendous.
Much of data science has focused on extending and optimizing the underlying algorithms and technologies, often without considering how these algorithms and their concrete applications affect people and society.
For instance, deep learning algorithms, once they have been trained, are essentially black-box routines, where nobody can explain or justify the outcomes of running the algorithm on new data: this becomes an issue when such algorithms are used for loan decisions, recommendations for parole or bail, or for hiring and salary recommendations.
There are also legal issues since algorithms may discriminate against groups of individuals.
For these reasons, and many others, it becomes increasingly important to think about biases, transparency, and fairness of machine-learning algorithms and training data sets.
It is also important to communicate the limitations of data science algorithms in terms of fairness and accountability to non-experts who may not have the expertise to know what these limitations are.

[Continue](btn:next)

<!-- should this be more standalone material or is it ok to directly address the class as follows ?-->

The Data & Society course that you will take in the spring semester has two related goals.
First, we will explore how data science impacts society more generally, and how to understand those impacts in our work as data scientists.
Second, because data scientists have to communicate about their work to a general audience in their jobs, we will use this course as a way to improve our skills as data science communicators, primarily in writing.
To prepare for the course, you'll do some reading and writing now, so that some of the issues we'll address in the spring are in your minds as you learn data science techniques in the fall.
You will also get some feedback now on your writing, so that you know what will be expected in this graduate program.

[Continue](btn:next)

To prepare for the course, you will do some reading and writing now, so that some of the issues we will address in the spring are in your minds as you learn data-science techniques in the fall.
You will also get some feedback now on your writing, so that you know what will be expected throughout this graduate program.

[Continue](btn:next)

---
> id: prevknowledge

Some commonly referenced examples of Data Science going wrong in the public sphere include the [COMPAS system as profiled by ProPublica](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing) and [Amazon's scrapped AI hiring tool](https://www.reuters.com/article/us-amazon-com-jobs-automation-insight/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-idUSKCN1MK08G).
We will explore these and others in the class, but before we start, please list 1-3 examples of specific data-science applications that have impacted individuals or society in negative ways: these can be examples you imagine might happen or examples you have heard of.

<!--  textbox exercise -->

    x-quill

_there is no right answer here, we want you to think about these and have examples in mind as the program proceeds_

---
> id: topics


In the course we will see many ways in which data science can affect society and learn strategies to mitigate potentially negative impact and conduct more responsible data science.

Which of the following topics will be covered in this class


    x-picker.list
      .item.pill.bblue.md bias/ fairness
      .item.pill.bblue.md transparency
      .item.pill.bblue(data-error="incorrect") popularity
      .item.pill.bblue.md privacy
      .item.pill.bblue(data-error="incorrect") art by AIs
      .item.pill.bblue.md ethics
      .item.pill.bblue.md expertise and science
      .item.pill.bblue(data-error="incorrect") maximizing cost savings


<!-- Should there be more of a transition here?  -->

---
> id: wordembeddings
## Bias in Word Embeddings

As a first example for why we may need to change our technical choices in order to make fair algorithms, we will look at the [paper](gloss:reading), [_A Man is to Computer Programmer as Woman is to Homemaker? Debiasing Word Embeddings_](https://papers.nips.cc/paper/6228-man-is-to-computer-programmer-as-woman-is-to-homemaker-debiasing-word-embeddings.pdf),
which was published in a top Machine Learning Conference, Neural Information Processing Systems (NeurIPS) in [[2016|2019|2020]].
This paper was highly influential and led to a number of other publications that demonstrated how biased word embeddings can influence the world.

---
> id: wordembeddingsbkg

Word embeddings are a technique for transforming text into matrices, by turning each word into a vector with real entries.
The goal is to design word embeddings so that words with similar meaning are mapped to vectors that are close to each other (as measured by their angle or distance).
Many word embeddings are based on co-occurence counts: which words frequently appear together in the same document?
The idea behind this design is that words that occur together in a given document should share similar meaning.
Word embeddings are useful since they can streamline search engines (if people search for the same topic using different but similar words) or infer meaning from texts.

[Continue](btn:next)

 ---
 > id: biasbkg

To understand the impacts of word embeddings that have biases, we will look at two types of harm that algorithms can cause, namely representational and allocative.
A _representational_ harm reinforces existing stereotypes we may have of people: they may therefore amplify existing social biases.
An _allocative_ harm occurs when a decision-making system allocates opportunity, goods, or services in a biased manner.

Biased word embeddings are a(n) [[representational|allocative]] harm because they are often used for [[search engines|making loan decisions]].

::: .exercise
**Exercise**  

With the following exercise, we aim to accomplish three goals: (i) learn more about biases in word embeddings, (ii) learn how to read technical papers, and (iii) begin to write brief summaries for a general non-expert audience.
The tasks are to first read the word-embeddings paper referenced above and second, write a 300-500 word article that summarizes its content for a general audience. Upload your article via this [Google Form](https://forms.gle/G9BRkw9KunZSbyAN9)

:::

[For tips to read the paper, continue](btn:next)

---
> id: reading-cs

### Reading Technical Papers

Graduate school requires reading large amounts of material to learn.
Working in a fast-moving field like data science requires the same reading skill to stay up-to-date and current in one's area.
There are some useful techniques for reading scientific and technical papers that can make this easier.
Since this is a new skill for most graduate students, faculty have written guides on how to read for their discipline, including for [computer science](https://web.stanford.edu/class/ee384m/Handouts/HowtoReadPaper.pdf).
Data science methods are often published in computer science related venues so this fits well.

Open the reading-guide paper referenced above and read the headings.

It recommends reading a paper in [[3|1|5]] pass(es).

---
> id: reading-2

Now read sections 1 and 2 of the tutorial paper more thoroughly.

This multistage approach allows you to look for a little bit of information in each pass, but different information in each step.
The reading guide paper is targeted at PhD students who will come across many papers that are potentially related to their work, but will never have enough time to read them all.
It also addresses a level of detail that may not be practical.
We recommend a slightly modified three passes, that follow the same basic goals as the paper.  
Use that to put the three steps in order:

    x-sortable
      .item.md(data-index="2") Read through the whole paper for detail, consider if there are parts that raise questions or concerns.
      .item.md(data-index="1") Study the figures and their captions, read equations, read key section (method and/or result) related to why you're reading the paper
      .item.md(data-index="0") Read only headings, get an idea of the scope and organization

---
> id: reading-3


For projects, you may need to do some more extensive reading.
If you plan to pursue a PhD later, you will definitely need to write literature reviews and eventually review papers.

[Continue](btn:next)

---
> id: reading-word-embeddings


Now try reading the word embeddings paper, taking note of what the key points are and what a non data scientist should know about that article.

 [_A Man is to Computer Programmer as Woman is to Homemaker? Debiasing Word Embeddings_](https://papers.nips.cc/paper/6228-man-is-to-computer-programmer-as-woman-is-to-homemaker-debiasing-word-embeddings.pdf)


---
> id: writing-non-technical

Writing a newspaper style article might also be new. This piece should be in less formal language than academic publishing and accessible to an adult with a secondary (high school) education. Below are a number of (optional) resources to help you understand what we are looking for.

Your article should summarize the paper.  Here is a guide to [summarizing a psychology research paper](https://depts.washington.edu/psych/files/writing_center/summarizing.pdf) as an example. There are some psychology-specific points (eg APA is American Psychological Association), but it is overall a good guide. Here is a second [guide to summarizing a research paper](https://www.ufv.ca/media/assets/academic-success-centre/handouts/Summarizing-a-Scholarly-Journal-Article-rev2018.pdf).


As an example, see this Science News article [AI acquired humanlike 'numbersense' on its own](https://www.sciencenews.org/article/new-ai-acquired-humanlike-number-sense-its-own). That is a stand-alone summary of the finding, like what you should aim for in your article. As a second example, see [When should banks chase debts? New method could help them decide](https://www.eurekalert.org/pub_releases/2019-07/uota-wsb072519.php), note here that this one is based on an interview with the researchers and includes quotes.  We're not asking for that, but the style and level of complexity used is appropriate.

If you're looking for more inspiration, [Massive Science](https://massivesci.com/) tabulates publicly accessible science articles written by other scientists. Below are a couple of examples you might read to get a feel for the style of writing. These are longer and more detailed than we expect for this assignment, but have the right style.

- [Being a Pokémon Master in childhood permanently alters your brain](https://massivesci.com/articles/pokemon-detective-pikachu-brains-video-games/)
- [Artificial intelligence isn’t a ‘black box.’ It’s a key to studying the brain](https://massivesci.com/articles/artificial-intelligence-human-brain-black-box-algorithm/)

Hopefully now you feel prepared to write and [submit](https://forms.gle/G9BRkw9KunZSbyAN9) your summary of the paper.
