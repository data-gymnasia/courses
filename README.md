# Data Gymnasia

Data Gymnasia is a free [website](https://mathigon.org/data-gymnasia) for learning data science, built using open-source [Mathigon](https://mathigon.io) technology. Content is written in a simple Markdown format equipped with special syntax for a variety of interactive features, including executable code blocks, editors for writing exercises, and interactive Javascript components.

## Getting started

1. Run `npm` (the package manager for Javascript) from the command line to see if you have it installed already. If not, [download Node.js](https://nodejs.org/en/), which includes `npm`. 
2. Clone this repo by running `git clone git@github.com:data-gymnasia/courses.git` from the command line.
3. Run `cd data-gymnasia` to navigate into the directory, and then run `npm install` to install the Javascript dependencies. 
4. Run `npm start`. Wait for the assets to be compiled, and then open [localhost:5000](http://localhost:5000) to view the website. The server will automatically watch for file changes and recompile. 
5. Every course is a subfolder in the [content](content) directory. The URL of the
[Python course](content/programming-in-python), for example, will be
[localhost:8081/course/programming-in-python](http://localhost:8081/course/programming-in-python).

Note that running `npm start` for the first time might take a significant amount of time, as it compiles the LaTeX code for every course. This will speed up significantly when using cached results the next time.

To make a new course, run `cp -r content/_blank-course content/my-new-course-name` (or just duplicate the `_blank-course` folder and change the name). You can get started by editing the `my-new-course-name/content.md` file. Note that you have to `ctrl-c` to kill the `npm` process and then restart it whenever you add a new course or a new section in a course.

## Course Structure

Every course consists of a few different components:

* `content.md` contains the source code and metadata for a course. It is
  written in a [custom extension](https://mathigon.io/markdown) of
  [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
* `functions.ts` contains all course-specific TypeScript code.
* `styles.scss` contains all course-specific styles, using [SCSS](https://sass-lang.com/) format.
* `hints.yaml` (optional) contains any messages that can be sent by Mathigon's
  virtual personal tutor.

The [shared directory](content/shared) contains biographies, glossary and assets
used by multiple courses.

Every course is divided into multiple steps, each with a unique ID. These IDs
are used as function names in `functions.ts` when exporting the setup code
for every section.

## Markdown features

### Structure

Your Markdown file should have one top-level header, which is the title of the course. Sections are second-level headers (two hashes). Breaks are indicated with a line containing only `---`, and between any two breaks there should be something for the reader to do (e.g., a multiple-choice or fill in the blank question, or a `[Continue](btn:next)` button). After every `---`, you should include a line that looks like `> id: step-22` to identify that step. The step id can also be a descriptive string (`> id: spectral-theorem`). 

### Questions 

1. Fill-in-the-blank questions or multiple-choice questions: 

    ```
    The sum of 1.2 and 1.3 is [[2.5±0.01]], and a polygon with three sides is a [[triangle|square|circle]]. The most popular programming language named after a snake is [[Python]].
    ```

    The correct multiple choice answer is the first one, and they will appear to the reader in random order. Note that `±` provides a tolerance for numerical-answer questions.

2. Put-these-in-order questions: 

    ```
        x-sortable
          .item.md(data-index="2") REPL
          .item.md(data-index="1") Script
          .item.md(data-index="0") Jupyter
    ```

    The `data-index` values specify the correct order and must start from 0.

3. Select-all-that-apply:

    ```
        x-picker.list
          .item.pill.bblue.md $1 + 1 = 2$
          .item.pill.bblue.md(data-error="too-large") $1 + 1 = 3$
          .item.pill.bblue(data-error="too-small")  $1 + 1 = 1$
          .item.pill.bblue $1 + 2 = 3$
    ```

    Correct answers are indicated by the absence of `data-error`, and the `data-error` values can be `"incorrect"` or can include context-specific feedback by putting a line like `mutable: Variables can be changed!` into the course's `hints.yaml` file.

### Equations and code

Inline code is supported with backtick delimiters and a language indicator in curly braces: `` `{py} 1 + 2` ``. The possible languages are `py`, `jl`, `r`, and `code` (the last of which gets no language-specific syntax highlighting). Code blocks are denoted with fences:

````
``` python
import numpy as np
np.random.standard_normal((10,10))
```
````

The currently supported languages are `python`, `julia`, `r`, `markup` (no syntax highlighting), `markdown`, `bash`, `docker`, `git`, `json`, `makefile`, `sql`, `yaml`, and `toml`. If you want to add more, visit [follow this link](https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+bash+docker+git+json+julia+latex+markdown+makefile+sql+python+r+yaml+toml+pug), check additional boxes as desired, and download the resulting JS file to `content/shared/static/prism.js`. 

*Executable* code blocks are supplied using Mathigon Markdown's support for [pugs](https://pugjs.org/api/getting-started.html)

```
    pre(python-executable)
      | x = 3
      | x
```

The supported languages are `python`, `julia`, `r`, and `bash`. The Jupyter kernels which supply these environments are listed in `content/shared/shared.js`. 

Inline math expressions are supported using LaTeX syntax with dollar signs (`$x^2 + 2\sin y$`), and display math is supported with `latex` code fences. 

````
``` latex
2x + 4y &= 10 \\
3x - 2y &= 14
```
````

One catch is that backslashes need to be escaped inside inline math expressions. 

### Boxes

Several box types are supported: `theorem`, `definition`, `example`, `exercise`. 

```
::: .exercise
**Exercise**  
Find the volume scale factor of the matrix $A = \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 0 & 1 \\
    0 & k & 0
\end{bmatrix}$ by describing how the matrix transforms a region in $\mathbb{R}^3$. 
:::
```

Note that you need two spaces after `**Exercise**` to ensure that it displays on its own line.

### Text boxes

Students can write an answer (up to 500 characters, currently) into a box that saves their work: 

```
    x-quill
```

### Glossary entries

To gloss a term, use Markdown link syntax with a `gloss:`-prefixed link: `[linear combination](gloss:linearcombination)`. Then add an entry in the `content/shared/glossary.yaml` file: 

````
linearcombination:
  title: Linear Combination
  text: |
    A **linear combination** of a list of vectors $\mathbf{v}\_1,
      \ldots, \mathbf{v}\_k$ is an expression of the form

    ``` latex
    c_1\mathbf{v_1} + c_2\mathbf{v_2}  + \cdots + c_k\mathbf{v_k},
    ```

     where $c_1, \ldots, c_k$ are real numbers. The $c$'s are called the **weights** of the linear combination.
````

The glossary functionality is encouraged, because it helps learners use the material in an *a la carte` fashion.

### Figures

Put your file in the `images` subdirectory and insert it into the text with 

```
    figure
      img(src="images/gram.svg")
      p.caption.md The grid-line images under $A$ and $\sqrt{A' A}$ have the same shape; they are related by an orthogonal transformation. 
```

If your software produces PDF vector graphics, you'll want to convert them to SVGs with something like [`pdfsvg`](https://github.com/dawbarton/pdf2svg) rather than using raster image formats.

## License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
