# Data Gymnasia

The [Data Science Initiative](https://www.brown.edu/initiatives/data-science/home)
at Brown University is a hub for research and education in the foundational
methodologies, domain applications, and societal impacts of data science.


## Getting Started

After forking and cloning this repository, install all dependencies using
`npm install`.

Now you can start a local development server by running `npm start`. Wait for
the assets to be compiled and then open [localhost:5000](http://localhost:5000).
The server will automatically watch for file changes.

Every course is a subfolder in the [content](content) directory. The URL of the
[Probability course](content/probability), for example, will be
[localhost:5000/course/probability](http://localhost:5000/course/probability).


## Course Structure

Every course consists of a few different components:

* `content.md` contains the source code and metadata for a course. It is
  written in a [custom extension](https://mathigon.io/markdown) of
  [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
* `functions.js` contains all course-specific JavaScript code.
* `styles.less` contains all course-specific styles, in
  [LESS](http://lesscss.org/) format.
* `hints.yaml` (optional) contains any messages that can be sent by Mathigon's
  virtual personal tutor.

The [shared directory](content/shared) contains biographies, glossary and assets
used by multiple courses.

Every course is divided into multiple steps, each with a unique ID. These IDs
are used as function names in `functions.js` when exporting the setup code
for every section.

The [server directory](server) contains a simplified version of Mathigon's web
server. It is used for local testing, but should not usually be modified.
