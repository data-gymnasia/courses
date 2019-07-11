
# Data and Society

> id: intro
## Introduction

An important part of being a data scientist is formulating problems and evaluating your work. While this involves some formal mathematical constructs, a lot of this work relies on how your work as a data scientist impacts society.  

<!-- should this be more standalone material or is it ok to directly address the class as follows ?-->

We will explore how data science has impacted society and how to influence that as Data Scientists. Communicating data science work is an essential part of how data scientists interact with society and therefore a crucial part of how data science is interpreted and used by others, so we'll also work on writing and communicating results in this class.   To prepare for this course, you'll read some examples now, so that you have them in mind while you learn data science techniques in the fall.  

Data & Society will build on your skills as a data scientist and improve your technical and nontechnical writing about data science topics. To prepare for that, in this module, you'll do some writing and get feedback so that you can be well calibrated to the type of writing that is expected in a graduate program.  

[Continue](btn:next)

---
> id: prevknowledge


Some commonly referenced examples of Data Science going wrong in the public sphere include the [COMPAS system as profiled by ProPublica](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing) and  [Amazon's scrapped AI hiring tool](https://www.reuters.com/article/us-amazon-com-jobs-automation-insight/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-idUSKCN1MK08G)


We will explore these and others in the class, but before we start, list 1-3 examples of Data Science impacting society in ways that you have heard of or can imagine.  

<!--  textbox exercise -->

    x-quill

_there is no right answer here, we want you to think about these and have examples in mind as the program proceeds_

---
> id: topics


In the course we will see many ways that Data Science can impact society and learn strategies to conduct more responsible data science


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

As a first look at why we need to change our technical choices in order to make fair algorithms, we'll look at the [paper](gloss:reading), [_A Man is to Computer Programmer as Woman is to Homemaker? Debiasing Word Embeddings_](https://papers.nips.cc/paper/6228-man-is-to-computer-programmer-as-woman-is-to-homemaker-debiasing-word-embeddings.pdf). It was published in a top Machine Learning Conference, Neural Information Processing Systems (NeurIPS) in [[2016|2019|2020]]. This signals that the work is thoroughly peer reviewed for correctness and importance in the field. Since then, a number of other results demonstrating how these biased word embeddings influence the world have been published.



---
> id: wordembeddingsbkg

Word embeddings are a technique for transforming text into matrices, by making a vector for each word. They are the successor to dictionary based representations that create a matrix that has one column for every word in a dictionary and one row for each word in a document, with one `1` in each row, indicating which word.  

 <!--  possibly, insert an example here? or a put these words in order based on the example?-->

These binary matrices are useful for many things, but are limited to types of problems that can be solved in discrete ways. Word embeddings instead transform each word into a continuous-valued vectors. This allows calculations of distances between words. Designing a word embedding requires finding he way to transform from the binary matrix to a continuous matrix. Most go through co-occurence counts: what words appear in the same documents frequently?

[Continue](btn:next)

 ---
 > id: biasbkg

It might not be obvious why it is bad that word embeddings have biases, to understand that, we'll look at two types of harm that algorithms can cause: representational and allocative. A _representational_ harm reinforces stereotypes in the representation of people. As is these type of representations influence how people search and read information and therefore amplify existing social biases. An _allocative_ harm occurs when a decision making system allocates opportunity, goods, or services in a biased manner.

Biased word embeddings are a(n) [[representational|allocative]] harm because they are often used for [[search engines|making loan decisions]].


::: .exercise
**Exercise**  

Now, read this paper and write an article that summarizes it for a general audience. Upload your article via this [Google Form](https://forms.gle/G9BRkw9KunZSbyAN9)

:::

[For tips to read the paper, continue](btn:next)

---
> id: reading-cs

### Reading Technical Papers

We learn to read when we are young and that works well through undergraduate studies, but graduate school often requires reading large amounts of material to stay "up to date" with the field, but reading each to varying levels of detail.  Since this is a new skill for most graduate students, faculty have written guides on how to read for their discipline, including for [computer science](https://web.stanford.edu/class/ee384m/Handouts/HowtoReadPaper.pdf). Data science methods are often published in computer science related venues so this fits well.

Open the paper linked and read the headings. It recommends reading a paper in [[3|1|5]] pass(es).

---
> id: reading-2

Now read sections 1 and 2 of the paper more thoroughly.

This multistage approach allows you to look for a little bit of information in each pass, but different information in each step. The reading guide paper is targeted at PhD students who will come across many papers that are potentially related to their work, but will never have enough time to read them all. It also addresses a level of detail that may not be practical. We recommend a slightly modified three passes, that follow the same basic goals as the paper.  Use that to put the three steps in order:

x-sortable
  .item.md(data-index="2") Read through the whole paper for detail, consider if there are parts that raise questions or concerns.
  .item.md(data-index="1") Study the figures and their captions, read equations, read key section (method and/or result) related to why you're reading the paper
  .item.md(data-index="0") Read only headings, get an idea of the scope and organization

---
> id: reading-3


For projects, you may need to do some more extensive reading.  If you plan to pursue a PhD later, you will definitely need to write literature reviews and eventually review papers. Now read the remaining sections if they apply to you.

[Continue](btn:next)

---
> id: reading-word-embeddings


Now try reading the word embeddings paper, taking note of what the key points are and what a non data scientist should know about that article.

 [_A Man is to Computer Programmer as Woman is to Homemaker? Debiasing Word Embeddings_](https://papers.nips.cc/paper/6228-man-is-to-computer-programmer-as-woman-is-to-homemaker-debiasing-word-embeddings.pdf)


---
> id: writing-non-technical

Writing a newspaper style article might also be new.  

Here is an [instructional guide](https://www.improbable.com/airchives/paperair/volume10/v10i4/scient-PR-10-4.pdf).  

[Massive Science](https://massivesci.com/) tabulates publicly accessible science articles written by other scientists.  If you're still unsure how to write your summary, try reading an example like one of these

- [Being a Pokémon Master in childhood permanently alters your brain](https://massivesci.com/articles/pokemon-detective-pikachu-brains-video-games/)
- [Artificial intelligence isn’t a ‘black box.’ It’s a key to studying the brain](https://massivesci.com/articles/artificial-intelligence-human-brain-black-box-algorithm/)
