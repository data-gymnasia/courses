# Utilities

> id: intro
> description: Learn about Unix, Git, Conda, Jupyter, VS Code and Markdown.
> color: a53a5b
> next: data-and-society
> author: Samuel S. Watson

## Introduction

When it comes to data science, **tools matter**. Some workflows facilitate efficiency and insight, while others can leave you spending most of your time putting out fires. To borrow a familiar example from document editing, it might take 15 minutes to go through a report and capitalize every instance of a particular word, but your editor's find-and-replace feature can do the job with no errors and in less than [[10|100|1000]] seconds. Merely being aware of the find-and-replace concept leads to significant time savings, because you can look up how to do it if you don't remember.

---
> id: step-1

In a similar way, taking advantage of the collective wisdom of the statistical and software development communities is a major productivity multiplier. Learning a reasonably complete set of tools and techniques up front spares you the inefficiency of trying out lots of possibilities and inevitably developing some [[bad|good]] habits along the way.

---
> id: step-2

The set of programs and formats we will cover in the course aspires to be as close as possible to a canonical open source data science toolkit. In particular, all of the tools are widely used in industry or academia and have large user bases.

[Continue](btn:next)

---
> id: step-3

On the other hand, some toolkit roles are filled by more than one popular program, so assembling a complete software suite does require making choices. You should feel free to substitute other tools when they meet the same needs and have comparable benefits to the ones we will discuss in this course. On the other hand, don't be too reluctant to appreciate the benefits of switching to something new. You can be surprisingly productive surprisingly quickly with a well-designed interface.

[Continue](btn:next)

---
> id: goals
### Goals

Learning from the principles of best practice offers several advantages to the data science practitioner:

1. **Efficiency**. It's preferable avoid taking far longer than necessary to perform common, often mundane tasks.

[Continue](btn:next)

---
> id: step-correctness

2. **Correctness**. Getting incorrect results is harmful and potentially quite dangerous. Building good habits for organizing your work and avoiding common pitfalls can help you consistently achieve correct results.

[Continue](btn:next)

---
> id: step-reproducibility

3. **Reproducibility**. A key component of transparency and confidence in your results is the ability for you and others to verify the analysis by re-running it. A workflow with *even one* non-reproducible step is not compatible with this goal, so it's important to prioritize reproducibility throughout the learning process.

[Continue](btn:next)

---
> id: step-clarity

4. **Clarity**. Workflows that incorporate opaque, ad-hoc elements or obscure the reasoning involved in each step make it more difficult to re-use your work, reproduce it, and place confidence in it. Best practices can help you highlight your reasoning and make your steps easily navigable.

[Continue](btn:next)

---
> id: open-source-data-science
### Open Source Data Science

All of the software introduced in this course is **free** and **open-source**. This means that source code is available for anyone to inspect, alter, and extend. Using open-source software has many advantages for companies and individuals, even if they have access to commercial software.

1. **Agility**. If you need to change tools or try something out, you can just do it. There's no need to make a hasty decision just because a license renewal is coming up, or to negotiate with a representative from the software provider about something novel you want to do.

[Continue](btn:next)

---
> id: step-community

2. **Community**. Open source development has become popular enough that the scrutiny on a given piece of code is often larger for an open-source project than for a closed-source one. This has implications for code quality, and it makes it easier to search the internet for solutions and ideas. Similarly, the number of third-party packages available for open source software is typically orders of magnitude larger than for proprietary software. This can make it easier to customize a solution for a particular set of needs.

[Continue](btn:next)

---
> id: step-integration

3. **Integration**. Because open-source projects are a joint effort of the global scientific and development communities, significant effort has gone into making them work with one another. This often allows the user to use to choose the best tool for each aspect of the job at hand, transitioning between tools as necessary.

[Continue](btn:next)

---
> id: step-accessibility

4. **Accessibility**. If you want to make your work available to others, you can take advantage of services like [CoCalc](https://cocalc.com) or [Binder](https://mybinder.org) or ask that people download the necessary software to their machines. If your work requires an expensive license to reproduce, your target audience is less likely to engage.

[Continue](btn:next)

---
> id: step-dominate-industry

Because of their advantages as open-source programming languages with large and committed user bases, Python and R dominate data science in industry (although several proprietary systems also enjoy widespread usage). Many of the other tools we will discuss in this course are the [de facto](gloss:de-facto) standard tool for their [use case](gloss:use-case) and have no real competition from commercial offerings.

[Continue](btn:next)

---
> id: step-intro-exercises

::: .exercise
**Exercise**  
Select the true statements.

    x-picker.list
      .item.pill.bblue(data-error="incorrect") Python and R require expensive licenses to use.
      .item.pill.md.bblue *Reproducibility* refers to the ability to reliably get the same results for a given data analysis.
      .item.pill.bblue Learning appropriate software for solving challenges faced by data scientists can help save time in the long run.
      .item.pill.bblue(data-error="incorrect") All of the programs we will discuss in this course are used by all data scientists.
:::

---
> id: unix
## Unix

Unix is an operating system invented in the early 1970s at AT&T Bell Labs. Today there are many variants of Unix in wide use around the world, including the Linux operating systems and macOS.

[Continue](btn:next)

---
> id: unix-like

The key elements provided by a Unix-like operating system are

1. a file system, consisting of folders which can nest and store [[files|websites|phone calls]],
2. a set of programs, each serving a limited function,
3. a **shell** which provides mechanisms for constructing workflows involving multiple programs and files.

---
> id: shells

Several Unix shells are available, but the most popular ones provide approximately the same functionality and interface. The most popular shell is called **bash**. Bash is the default shell in macOS (Mojave and earlier) and some Linux distributions. As of 2016, you can also run bash [natively on Windows](https://docs.microsoft.com/en-us/windows/wsl/install-win10). If you are a Windows user, it is recommended that you go ahead and install the Windows Subsystem for Linux so you can use the same commands as Linux and Mac users.

[Continue](btn:next)

---
> id: follow-along-binder

If you want to follow along below before you figure out your local setup, you can use the executable cells you see in this page (which are *bash* cells, not Python cells) or launch a [Binder instance](https://mybinder.org/v2/gh/jovyan/simple-python-stack/master) (select Terminal or bash from the *New* pull-down menu in the top right). The latter approach is recommended, because that environment provides some shortcuts that will be helpful to practice (like completing commands and file names when you hit the tab key).

[Continue](btn:next)

---
> id: unix-navigation
### Navigation

When you first open the shell, you'll be in your **home [directory](gloss:directory)**. You can check this by [running](gloss:unix-run) the command `{sh} pwd` (which stands for *print working directory*).

    pre(bash-executable)
      | pwd

[Continue](btn:next)

---
> id: home-directory

On Linux, the users' home directories are in a directory called `{sh} /home/`, while on macOS they're in `{sh} /Users/`. Since your user name on Binder is `{sh} jovyan` (a sci-fi reference to a [term](https://en.wikipedia.org/wiki/Jovian_(fiction)) that means *an inhabitant of Jupiter*), the directory printed when you run the cell above is called `{sh} /home/jovyan`. The character `{sh} ~` has a special meaning: it is automatically expanded to the path for your home directory.

[Continue](btn:next)

::: .exercise
**Exercise**  
1. `{sh} ~` refers to the user's home directory [[True|False]]
2. `{sh} pwd` prints the contents of the current working directory [[False|True]]
:::

[Continue](btn:next)

---
> id: step-unix-path

The string `{sh} /home/jovyan` is called a **path**. The forward slashes in a path separate directories, and each directory or file in the path is in the directory immediately to its left. For example, [[`{sh} jovyan`|`{sh} home`]] is a subdirectory of [[`{sh} home`|`{sh} jovyan`]].

[Continue](btn:next)

---
> id: step-root-directory

The very first slash is the **root** directory, and all of the files and directories on the machine are nested in this directory.

You can view the contents of directory with `{sh} ls`, and you can change directory using the `{sh} cd` command. If the initial slash is omitted in a directory name, the name is interpreted *relative* to the current directory. For example, you can navigate to `{sh} /Users/jovyan` from the `{sh} /Users` directory by running `{sh} cd jovyan`. Note that arguments are supplied to Unix commands by separating them with spaces following the name of the command. You can also navigate to containing folders using `{sh} ..`. For example, `{sh} cd ../../` navigates to the grandparent directory of the current directory.

::: .exercise
**Exercise**  
Write three lines of Unix code in the cell below which change directory into `{sh} my-data-science-project`, list the contents of that directory, and then change back to the original directory.
:::

    pre(bash-executable)
      |

    x-quill

---
> id: step-cd-solution

*Solution.* Here's an example solution

    pre(bash-executable)
      | cd my-data-science-project
      | ls
      | cd ../

Since the original directory was the user's home directory, we could have used `{sh} cd ~` instead in the last step.

[Continue](btn:next)

---
> id: exercise-list-bin-files

::: .exercise
**Exercise**  
List the files in the subdirectory `{sh} bin` of the root directory.
:::

    pre(bash-executable)
      |

    x-quill

---
> id: step-ls-bin-directories

*Solution.* The simplest way to do it in one line is `{sh} ls /bin`.

[Continue](btn:next)

---
> id: step-mkdir

The `{sh} mkdir` command makes a new directory. So we can make a new directory, check that it's there, and navigate into it as follows:

    pre(bash-executable)
      | mkdir example-directory # won't return anything!

    pre(bash-executable)
      | ls

    pre(bash-executable)
      | cd example-directory # won't return anything!

[Continue](btn:next)

---
> id: tab-completion

One extremely useful shortcut is to type an initial part of the file or directory name and hit the tab key to get the rest to pop up (note that this does not work in the cells above, but it will work on your own computer or on mybinder.org). You can also hit the tab key twice to get a list of possible completions. Using this tab completion feature is advised, for two reasons: (1) it saves typing time, and (2) it reduces spelling errors. If the shell is still completing directory names in your path as you type it, you can be sure that those directories are actually present in the operating system. If you insist on typing out the path in full, it takes significantly [[longer|less time]] to catch mistakes.

[Continue](btn:next)

---
> id: bash-history-command

Another time-saving device is the use of the up and down arrow keys to access previously used commands. You can see a list of what you've run in the shell with the `{sh} history` command.

[Continue](btn:next)

---
> id: cursor-position

The position of the cursor in the shell cannot be controlled with your mouse or trackpad. Therefore, it is essential to master a few keyboard shortcuts to avoid having to press the forward and backward arrow keys dozens of times when you need to navigate the text at the prompt.

* `{sh} ctrl-a` Move the cursor to the beginning of the line
* `{sh} ctrl-e` Move the cursor to the end of the line
* `{sh} ctrl-l` Clear the screen
* `{sh} ctrl-c` Quit the command that is currently running
* `{sh} alt-f` Move the cursor forward one word (`{sh} esc-f` on macOS)
* `{sh} alt-b` Move the cursor backward one word (`{sh} esc-b` on macOS)

[Continue](btn:next)

---
> id: bash-escape

Note that you can't directly use a space character in a Unix path name, because it would be interpreted by bash as an argument separator. To accommodate a file with a space in its name, *escape* the space by putting a backslash in front of it. For example, `{sh} cd My\ Essays` changes directory into a folder called "My Essays".

[Continue](btn:next)

---
> id: bash-other-important-commands

Here are some other important commands:

* `{sh} mv` Move a file from one directory to another
* `{sh} rm` Remove a file
* `{sh} cp` Copy a file from one directory to another
* `{sh} touch` Create a file or update its last-modified time
* `{sh} open` Open a file (`{sh} xdg-open` on Linux)
* `{sh} cat` Print the contents of a file to the terminal
* `{sh} less` View the contents of a file in a viewer
* `{sh} man` Show the documentation for a command
* `{sh} head` Print the first 10 lines of a file
* `{sh} tail` Print the last 10 lines of a file
* `{sh} wc` Count the number of words, lines, and characters in a file
* `{sh} grep` Find specific text in file contents
* `{sh} vim` Open an editor for making changes to a file

[Continue](btn:next)

---
> id: bash-options

Many commands in bash take [*options*](gloss:bash-options) (analogous to keyword arguments in Python) which modify how they run. For example, `{sh} rm -i` gives you an interactive session where you can say for each file whether you want to delete it. Some options can themselves take arguments, in which case those arguments are listed directly after the option. For example, `{sh} head -n 20 data.txt` prints the first 20 lines of the file `{sh} data.txt`. You can read about the options a command takes by viewing its man page (for example, `{sh} man head`).

::: .exercise
**Exercise**  
Navigate into the `{sh} my-data-science-project` directory and the use the `{sh} grep` command to figure out which file contains the text `{sh} find_packages`.

Some helpful information: (i) `{sh} grep -r text directory` searches recursively for `{sh} text` in the `{sh} directory`, and (ii) `{sh} .` is an alias for the current directory.
:::

    pre(bash-executable)
      |

    x-quill

---
> id: step-grep-solution

*Solution.* Running the commands below, we find that `{sh} setup.py` contains the `{sh} find_packages` function.   

    pre(bash-executable)
      | cd my-data-science-project
      | grep -r find_packages .

[Continue](btn:next)

---
### Vim
> id: vim

Vim is the command line text editor which most consistently available on Unix systems. As a result, you will sometimes find yourself needing some basic familiarity with it, even if you use another editor for the bulk of your work. Furthermore, vim is designed to prioritize efficiency over intuitiveness, so it's really helpful to learn a few vim ideas *before* you need them. To practice with Vim, open this course's [Binder page](https://mybinder.org/v2/gh/sswatson/utilities-course/master), open a new Terminal ("New", top right), and run `{sh} vim tmp.txt`. Alternatively, you can run vim in your own Terminal if you have macOS or Linux, or you can download it for Windows.

[Continue](btn:next)

---
> id: vim-modes

The most important distinction between vim and most other text editors is that it has multiple **modes**, the main ones being *insert* mode and *command* mode. Insert mode is similar to what other editors provide: keystrokes you type appear as characters in the file. Command mode is for performing various actions on the file.

[Continue](btn:next)

---
> id: step-vim-navigating-modes

A vim session often opens to command mode by default. To activate insert mode, press `{sh} i`. To get back to command mode, press the escape key. To save a file, type `{sh} :w` while in command mode and press enter. To close the file, type `{sh} :q` from command mode and press enter. To force-exit vim, type `{sh} :q!` while in command mode and press enter.

To undo and redo, use `{sh} u` and `{sh} ctrl-r`. Copy and paste are `{sh} yy` and `{sh} p`; Page up and page down are `{sh} ctrl-u` and `{sh} ctrl-d`.

::: .exercise
**Exercise**  
The single most important vim command is the one for force-exiting, because sometimes a vim editor opens automatically when you run some other command, and all you want to do is get out. If you are in insert mode, what key sequence must you enter to force-exit vim?
:::

    x-quill

---
> id: escape-vim-exercise

*Solution.* The correct key sequence is `{sh} [esc]:q!`: the escape button switches to command mode, and then `{sh} :q!` force-exits.

[Continue](btn:next)

---
> id: variables
### Variables

Bash supports variable definition using similar syntax to Python. The main differences are (1) spaces *cannot* be used around the equals sign, and (2) variable names are conventionally all upper case. Another distinction from Python is that a dollar sign is required to access a variable's value:

    pre(bash-executable)
      | MY_FAVORITE_NUMBER=3
      | echo $MY_FAVORITE_NUMBER

The command `{sh} echo` simply prints its arguments.

[Continue](btn:next)

---
> id: step-bash-special-variables

Some special variables are available in a bash session without you having to define them yourself. For example, if you run `{sh} echo $PATH`, you'll see a colon-separated list of directories. These are the directories where `{sh} bash` searches for [executable](gloss:executable) files when you run a command. You can see which executable is being run for a given command name using the `{sh} which` command. For example `{sh} which echo` prints `{sh} /bin/echo`. If you look in the `{sh} /bin` directory, you'll see that many of the bash commands we've discussed so far are actually executables in that directory.

[Continue](btn:next)

---
> id: step-bash-profile

Utilities you install on your computer often make their [executables](gloss:executable) available at the command line by modifying `{sh} PATH`. This is done by inserting a line of code in your **bash profile**, which is a file with a special name that is read by bash every time you start a bash session. For example, if you have a directory, say `{sh} Users/jovyan/anaconda3/bin`, which contains executables that you want to be able to run from the command line, you can add the line

    pre(bash-executable)
      | export PATH="/Users/jovyan/anaconda3/bin:$PATH"

to `{sh} ~/.bash_profile` (the `{sh} ~` refers to your [[home directory|root directory|current directory]]).

[Continue](btn:next)

---
> id: step-exporting-PATH

In the command `{sh} export PATH="/Users/jovyan/anaconda3/bin:$PATH"`, the dollar sign is used to access the original value of `{sh} PATH` (so that you're adding to the set of `{sh} PATH` directories, not replacing all of the ones that were stored in `{sh} PATH` previously), and the `{sh} export` command makes the new value of `{sh} PATH` available to the bash session (rather than just the `{sh} ~/.bash_profile` script).

If you try to run a command and bash says `{sh} command not found`, one strong possibility is that the executable file that should run that command is "not on your PATH" (a phrase you will see often on StackOverflow!). The solution to this problem is to locate the executable's directory—usually by searching the internet to figure out where the installer puts the executable by default—and edit your `{sh} ~/.bash_profile` accordingly.

::: .exercise
**Exercise**  
Write a line of bash code that adds `{sh} /Library/Frameworks/R.framework/Resources` to the **end** of `{sh} PATH`, so that directory is searched for executables *last* when a command is run in bash. Where should that line of code be placed?
:::

[Continue](btn:next)

---
> id: path-exercise

*Solution.* The appropriate bash command is `{sh} export PATH="$PATH:/Library/Frameworks/R.framework"`, and it should go in `{sh} ~/.bash_profile`.

[Continue](btn:next)

---
> id: piping
### Piping

The output of a command like `{sh} echo $PATH`, which prints to the screen by default, may be redirected to a file using the operators `{sh} >` or `{sh} >>` or fed as input to another bash command on the same line using the **pipe** operator `{sh} |`. The use of such operators in Unix is called *piping*, and it's a key element of bash's design.

[Continue](btn:next)

---
> id: step-difference-between-file-operators

The difference between `{sh} >` and `{sh} >>` is that the former eliminates whatever might have been in the file previously, and the latter appends to the end of the target file's current contents.

For example, `{sh} tmp.txt` will contain two lines of text after these two commands are run:

    pre(bash-executable)
      | echo "This is the first line" > tmp.txt
      | echo "This is the second line" >> tmp.txt

You can check that this worked as expected by running [[`{sh} cat tmp.txt`|`{sh} touch tmp.txt`|`{sh} ls tmp.txt`]]:

    pre(bash-executable)
      |

---
> id: piping-2

The pipe operator is the mechanism for *composing* commands in Unix. For example,

    pre(bash-executable)
      | echo "The quick brown fox jumped over the lazy dog" | wc

forwards the text returned by the first command to the `{sh} wc` command, thereby counting the number of lines, words, and characters in the sentence `{sh} "The quick brown fox jumped over the lazy dog"`.

::: .exercise
**Exercise**  
Write a three-command pipe, using `{sh} cat`, `{sh} head` and `{sh} tail`, prints the portion of a document `{sh} mydoc.txt` between lines 100 and 110.
:::

    pre(bash-executable)
      |

    x-quill

---
> id: pipe-sol-1

*Solution.* If we select the first 110 lines, then the desired lines are the last 11 lines of that selection. So we can do

    pre(bash-executable)
      | cat mydoc.txt | head -n 110 | tail -n 11

[Continue](btn:next)

---
> id: glob-patterns
### Glob Patterns

Performing actions on a single file at a time can get pretty time-consuming if there are many files involved. Consider, for example, a directory with 1000 images files, one for each frame of a short video. Suppose the images are named `{sh} img000.png`, `{sh} img001.png`, and so on. If you want to move all of these files into a subdirectory called `{sh} frames`, you can do the third and fourth lines of this block:

    pre(bash-executable)
      | touch img000.png # make sure there are actually
      | touch img001.png # image files to move
      | mkdir frames
      | mv img*.png frames/

The asterisk in the file name is telling the command to act on every file whose name looks like `{sh} img`, followed by any number of other characters, followed by `{sh} .png`". We call `{sh} img*.png` a **glob** pattern (short for *global*). The asterisk is a **wild card**. The other common wildcards are `{sh} ?`, which matches any *single* character, and expressions like `{sh} [a-e]` which match any single character in a given range of characters. You can also list out the characters to match: `{sh} [aeiou]` matches any lowercase vowel.

::: .exercise
**Exercise**  
Which of the following names match the glob pattern `{sh} [aA]nswer.*`?

    x-picker.list
      .item.pill.bblue.md `{sh} answer.1.txt`
      .item.pill.bblue.md(data-error="incorrect") `{sh} my-answer.py`
      .item.pill.bblue.md `{sh} Answer.tex`

:::

---
> id: glob-exercise-solution

*Solution.* The first and third options match. The second one doesn't because the pattern specifies that the first character must be uppercase or lowercase `{sh} a`.

---
> id: git
## Git

Managing your files by simply saving them in folders on a hard drive runs afoul of some core concerns of anyone working on a computer for a living:

1. **Preserving your work**. It's easy to accidentally overwrite a file containing significant amounts of work. Depending on how much work is lost, this can be devastating. Pixar, for example, deleted nearly all of *Toy Story 2* when an errant `{sh} rm -r -f *` command was executed (the `{sh} -r` and `{sh} -f` flags mean "recursive" and "force", respectively). They were saved by the Supervising Technical Director, who had made a copy of the file tree so she could work from home after giving birth to her son.

[Continue](btn:next)

---
> id: step-tracking-history

2. **Tracking history**. If you have a way to know what you did and when you did it, you can perform more dynamic operations on your content. For example, suppose you recently made two rounds of edits on a document, and you decide that the first round should be discarded, because the circumstances that motivated those edits has changed. If you have a way to isolate the first-round edits, it's possible you'll be able to do that in an automated way. Otherwise, you'll have to do it manually.

[Continue](btn:next)

---
> id: step-managing-version

3. **Managing versions**. Slightly different use cases often require you to maintain different versions of a given codebase. For example, clients might have different requirements that require custom modifications. If you choose to maintain these versions in separate directories, you have to deal with transferring any changes to the common part of the codebase to all of the different copies. This quickly becomes a major maintenance headache.

[Continue](btn:next)

---
> id: step-facilitating-teamwork

4. **Facilitating teamwork**. Each team member should have maximum flexibility to work on a project and have that work reflected in their teammates' copies of the project. Some care must be taken to achieve this, because if two people make changes to the same file at the same time, their new versions must be merged.

[Continue](btn:next)

---
> id: step-version-control

Software designed to address these concerns is called **version control**. We will be working with a specific version control system called `{sh} git` which was created by [Linus Torvalds](gloss:linus) in 2005 and has since grabbed a plurality of the version control market share among software developers.

[Continue](btn:next)

---
### Git main concepts
> id: git-concepts

Git keeps a record, called a **repository**, of the history and versions of the contents of a particular directory (including its subdirectories, their subdirectories, and so on). The typical setup is to create a single directory for all of the files relevant to a given project and initialize a repository in [[that directory|your home directory]].

[Continue](btn:next)

---
> id: step-dot-git

Git uses two components to manage a repository in a given directory: a command-line program called `{sh} git` and a [hidden subdirectory](gloss:hidden-directory) called `{sh} .git`. Commands are issued to `{sh} git` to manipulate the contents of `{sh} .git`.

[Continue](btn:next)

---
> id: step-git-vs-drive

Unlike syncing services like Dropbox or Google Drive, Git doesn't do anything automatically. All interactions are deliberate. This is helpful, because it means that changes made by a colleague won't be uninvitedly pushed to your machine where they might break your environment.

[Continue](btn:next)

---
> id: step-git-concepts

Conceptually, a git repository consists a collection of complete snapshots of the directory contents. These snapshots are called **commits**. The commit immediately preceding a given commit is called its **parent**. Commits and parent-child relationships between commits are the fundamental constructs of a Git repository.

[Continue](btn:next)

::: .exercise
**Exercise**  
1. The name of the hidden subdirectory containing the files Git uses to maintain a repository is [[.git]].
2. Git keeps your folder synced to the cloud at all times [[False|True]].
3. Commits in a Git repository are organized using parent-child relationships between commits [[True|False]].
4. A commit corresponds most closely to a [[directory state|difference between two directory states]].
:::

---
> id: step-git-zones

Changes in a Git project migrate through a series of zones. When you make changes in your directory, Git initially knows nothing about them. You **stage** your changes to a staging area, then **commit** them to the repository. A project involving multiple contributors typically has a remote copy of the repository on a website like GitHub. When you are ready for your colleagues to get your changes, you **push** your local repository to the remote repository.

    figure
      img(src="images/git-sections.svg")
      p.caption.md Changes in a Git project are staged, committed, and pushed to a remote repository.

[Continue](btn:next)

---
> id: step-why-git-so-many-zones

Why does Git have so many zones? The staging area is necessary to help you distinguish files you want Git to track from files you don't want Git to track, and to provide an area to prepare for a well-organized commit. Having both local and remote copies of the repository allows you to make commits even when you don't have network access. Although this workflow might seem at first to be overly complicated, its benefits for flexibility and organization are often regarded as a positive distinguishing feature of Git (as compared to version control systems with fewer such zones).

[Continue](btn:next)

---
> id: git-zone-exercises

::: .exercise
**Exercise**  
1. Removing changes that have been prepared to be included in the next commit is called [[unstaging|uncommiting|unpushing]] those changes.
2. In a typical Git project with 4 zones, [[3]] of them are stored on your computer (as opposed to the cloud).
:::

[Continue](btn:next)

### Branches
---
> id: git-branches

Suppose that you and a colleague begin working on different parts of a project at the same time. The commits you make and the commits they make might share a parent (namely, the latest commit at the time when you begin working). If we visualize the set of commits as a graph, this corresponds to a split in the graph.

    figure
      img(src="images/git-split-1.svg")
      p.caption.md A fork in the commit graph.

You can maintain these two separate lines of development in the same repository by labeling them as new **branches**, as illustrated in the figure above. The most common convention is to have a main branch called `{code} master` and label other branches descriptively. A branch is a pointer to a particular commit. When a commit is added to a given branch, the pointer moves to the new commit:

    figure
      img(src="images/git-split-2.svg")
      p.caption.md A branch is a pointer to the latest commit in a given line of development. When a commit as added to a branch, the pointer moves to that new commit.

---
> id: git-branch-pointer-exercise

::: .exercise
**Exercise**  
A branch is a [[pointer to a commit|a sequence of commits]].
:::

[Continue](btn:next)

---
> id: step-git-ff-merge

Typically you will want to **merge** the changes from your branch back into master. In the example above, the `{code} mybranch` commit is a descendant of the `{code} master` commit. In this case, there is no potential for conflicts, and the merge can be performed by simplying pointing `{code} master` to the same commit as `{code} mybranch`. This is called a **fast-forward** merge. After merging, it's safe to delete the `{code} mybranch` pointer.

    figure
      img(src="images/git-split-ff.svg")
      p.caption.md If no commits have been added to `{code} master`, the changes in `{code} mybranch` can be merged into master by simplying moving the `{code} master` pointer forward. This is called a **fast-forward** merge.

[Continue](btn:next)

---
> id: step-git-merge      

After your branch is merged into master, your colleague wants to merge their branch as well. If you edited the same parts of the same files as your colleague, a decision will have to be made about what version of those sections to incorporate into master. Git handles this by putting markings in the file which look like:

``` markup
<<<<<<< master
The quick brown fox jumped over the lazy dog
=======
The brown fox jumped over the quick lazy dog
>>>>>>> mybranch
```

Your colleague will have to locate and remove these conflict markers one-by-one, and then stage and commit the resulting files. This commit will have *two* parents, indicating the two commits which were merged.

    figure
      img(src="images/git-split-merge.svg")
      p.caption.md If two branches have diverged, then changes from one branch (`{code} theirbranch`) can be merged into the other (`{code} master`). The result is a new *merge commit*.

We will discuss the commands for performing these operations in the *Core Git workflow* section below.

[Continue](btn:next)

---
> id: step-git-ff-exercise

::: .exercise
**Exercise**  
Suppose that you make a copy of a popular repository on GitHub (called a *fork*), and you spend a couple of months working on a new feature in a new branch you create. If you propose to merge your new branch back into the master branch of the project (this is called a *pull request*), it's likely that the merge [[will not|will]] be a fast-forward merge.
:::

[Continue](btn:next)

---
### Configuring Git
> id: configuring-git

When you first set up Git on your machine, there are a few configuration steps you want to take. The first is to let Git know about your name and email address.

    pre(bash-executable)
      | git config --global user.name "Jane Doe"
      | git config --global user.email "jdoe@gmail.com"

You might also want to turn on colors:

    pre(bash-executable)
      | git config --global color.ui true

[Continue](btn:next)

---
### Core Git workflow
> id: core-git-workflow

In this section, we'll work through all of the commands necessary to carry out the most common Git operations. We'll begin by creating a directory and initializing a Git repository inside it.

    pre(bash-executable)
      | mkdir our-novel
      | cd our-novel
      | git init
      | ls -a

We can see that `{sh} git init` did create a `{code} .git` directory. The other way to get a Git repository is to [clone](gloss:git-clone) one from a website like GitHub.

[Continue](btn:next)

---
> id: step-git-initial-commit

Next, let's create a file for our initial commit. The git command for staging a file is `{sh} git add`. The `{sh} --all` option stages all of the files in the current working directory.

    pre(bash-executable)
      | echo 'Once upon a time,' > chapter-1.txt
      | git add chapter-1.txt # or git add --all

[Continue](btn:next)

---
> id: step-git-status

We can inspect the status of our working directory and repository using `{sh} git status`.

    pre(bash-executable)
      | git status

The contents of the staging area are indented under the heading `{sh} Changes to be committed`.

[Continue](btn:next)

---
> id: step-git-commit-message

Now we can commit the staged changes, including a descriptive **commit message** with `{sh} -m`:

    pre(bash-executable)
      | git commit -m 'Initial commit'

We can display a record of commits using `{sh} git log`.

    pre(bash-executable)
      | git log

[Continue](btn:next)

---
> id: step-long-hex-string

You'll notice that commits are identified by a long hexadecimal string like `{code} d9599305d257a40c0b394a1af78dfe995f0010c7`. This string is a [hash](gloss:hash) of all of the data relevant to the commit. The name `{sh} HEAD` is a pointer to the branch you're currently on, so `{sh} HEAD -> master` indicates that the `{sh} master` branch is the currently **checked out** branch.

[Continue](btn:next)

---
> id: git-lol

The output of the `{sh} git log` command is more helpful with a few of its options set to a non-default state. Let's go ahead and make a git alias so we don't have to type all of these options out every time. We'll use the name `{sh} lol`, which is a customary choice for this alias.

    pre(bash-executable)
      | git config --global alias.lol "log --graph --decorate --all --oneline"
      | git lol

[Continue](btn:next)

---
> id: step-git-create-GitHub

Finally, if we want to store a copy of the repository on GitHub, we visit github.com and create a new repository. Then we connect our local Git repository to the remote one we just created.

    pre(bash-executable)
      | git remote add origin git@github.com:jovyan/MyRepo.git
      | git push --set-upstream origin master

where `{sh} jovyan` is replaced by your actual GitHub name, and `{sh} MyRepo` is replaced by your repository's name. The first line makes the connection to the remote repository and names it `{sh} origin`, while the second line sets the default remote repository to `{sh} origin` and pushes to GitHub. Note that the `{sh} --set-upstream origin master` part is only necessary on the first push; subsequent pushes can be done with `{sh} git push`.

[Continue](btn:next)

---
> id: step-git-pull-habit

It's a good habit to begin each work session by running `{sh} git pull` to fetch any changes that have been pushed by collaborators to the remote repository and merge those changes into your working directory. This operation aborts if you have changes in your working directory that conflict with the changes from the remote repository. One good way to resolve this issue is to `{sh} stash` your local changes and then `{sh} apply` them after you `{sh} pull`.

    pre(bash-executable)
      | git stash
      | git pull
      | git stash apply

The command `{sh} git stash` creates a new commit which is not on any branch, and `{sh} git stash apply` merges the latest stash into the current branch.

[Continue](btn:next)

---
> id: command-exercises

::: .exercise
**Exercise**  
1. The command for initializing a new Git repository is [[git init]].
2. The command for checking which files are staged is [[git status]].
3. The command for staging a file is [[git add]]
4. The command for committing is [[git commit]]
5. The command for showing a decorated history of commits is [[git lol]]
:::

[Continue](btn:next)

---
> id: git-branching-commands
### Git Branching Commands

Suppose we want to experiment with dragons in the novel's storyline. We can make a new branch called `{sh} dragons` for working on this idea.

    pre(bash-executable)
      | git branch dragons
      | git lol

We've created a new branch called `{sh} dragons`, but we still have the `{sh} master` branch checked out (you can tell because `{sh} HEAD` still points to `{sh} master`). Let's switch to the new branch:

    pre(bash-executable)
      | git checkout dragons
      | git lol

[Continue](btn:next)

---
> id: step-add-content-new-branch

We can now add some dragon content and commit it:

    pre(bash-executable)
      | echo '\n\nthere be dragons!' >> chapter-1.txt
      | git add chapter-1.txt
      | git commit -m 'Add some dragons'

Now let's switch back to the master branch and commit some different changes:

    pre(bash-executable)
      | git checkout master
      | echo '\n\nin a galaxy far away' >> chapter-1.txt
      | git add chapter-1.txt
      | git commit -m 'Write another line'
      | git lol

Suppose we decide we do want to incorporate the dragons into the story. We want to [[merge]] the dragon branch into master.

---
> id: git-merge-dragons

While we have the master branch checked out, we do

    pre(bash-executable)
      | git merge dragons

Git tells us that this merge led to conflicts, and we'll have to resolve them before making merge commits. Let's look at the new contents of `{sh} chapter-1.txt`:

    pre(bash-executable)
      | cat chapter-1.txt

[Continue](btn:next)

---
> id: echo-merge-dragons

The next step is to edit the file and commit it. Typically you would edit the file in a text editor (we'll see a particularly good way to do it later in this course when we cover VS Code), but here we'll just use `{sh} echo`.

    pre(bash-executable)
      | echo 'Once upon a time..., in a galaxy far away..., there be dragons!' > chapter-1.txt
      | git commit -m "Merge the dragons into the story"
      | git lol

Now we can delete the `{sh} dragons` branch. Since branches are just pointers to commits, this operation does not result in the loss of any snapshots in our project history.

    pre(bash-executable)
      | git branch -d dragons

[Continue](btn:next)

---
> id: step-git-merge-command-exercise

::: .exercise
**Exercise**  
Write a sequence of Git commands to create two new branches, one with dragons in the story and one with wizards in the story. Commit a change to each branch, then merge the wizard branch into the dragons branch, and finally merge the dragons branch into `{sh} master`. Use `{sh} git lol` to confirm that your repository log reflects the wizards to dragons to master merging sequence.
:::

    pre(bash-executable)
      |

    x-quill

---
> id: undoing-changes
### Undoing changes

Suppose you want to have a look at the state of your novel one commit ago. You refer to the commit which is any number of commits back using a tilde followed by the desired number of commits, as in `{sh} HEAD~1`. The `{sh} git show` command lets us extract a single file from a given commit:

    pre(bash-executable)
      | git show HEAD~1:chapter-1.txt

[Continue](btn:next)

---
> id: step-alternative-git-show      

Alternatively, you can refer to a particular commit by a distinguishing initial segment of its hash (note that you'll have to `{sh} git lol` to get an appropriate commit identifier for your session before you can run this cell):

    pre(bash-executable)
      | git show 06d23b9:chapter-1.txt

[Continue](btn:next)

---
> id: step-git-diff

We can see just the changes between two commits with a `{sh} diff`:

    pre(bash-executable)
      | git diff HEAD HEAD~1 chapter-1.txt

[Continue](btn:next)

---
> id: step-checkout-single-file      

Let's say you decide you want to go back to the version of a file two commits ago. You can `{sh} checkout` a single file.

    pre(bash-executable)
      | git checkout HEAD~2 chapter-1.txt
      | git status

This operation changes the file in the local working directory. You can then stage and commit that change, or edit the file further and then stage and commit.

[Continue](btn:next)

---
> id: step-git-checkout-file-exercise

::: .exercise
**Exercise**  
Write a Git command to replace the contents of `{code} main.py` with their contents four commits ago.
:::

    x-quill

---
> id: git-checkout-file-solution

*Solution.* We checkout the file at that commit: `{code} git checkout HEAD~4 main.py`.

[Continue](btn:next)

---
> id: git-diff-exercise

::: .exercise
**Exercise**  
Write a Git command to show the changes in the file `{sh} main.py` from four commits ago to two commits ago.
:::

    x-quill

*Solution.* We use `{sh} git diff` and specify the two revisions: `{sh} git diff HEAD~4 HEAD~2 main.py`.

[Continue](btn:next)

---
> id: latex
## LaTeX

TeX (pronounced *tech*) is an open-source typesetting engine for technical documents. It was created in the late 1970s by Donald Knuth, and it has since become almost universally adopted in the mathematical research community and widely adopted in other scientific communities. The most common way to use TeX is through *LaTeX* (*lay-tex* or *lah-tex;* both pronunciations are common), which provides extra tools that make TeX easier to use.

[Continue](btn:next)

---
> id: step-pdflatex

A LaTeX document consists of a plain text file which is processed by a command-line utility called `{sh}pdflatex` to produce a PDF. Here's a snippet of a TeX source file followed by the corresponding page in the resulting PDF (this is from a real project; the full source and PDF for which are available [here](https://github.com/sswatson/MultivariableCalculus.tex)):

    figure
      img(src="images/latex-input.png")
      img(src="images/latex-output.png")

In this course, we will not learn to typeset documents in LaTeX, because we will use more dynamic alternatives which are built on web technologies. However, these alternatives do rely on LaTeX's legacy for one important purpose: *rendering mathematical expressions*. For example, the text

``` code
\operatorname{KL}(p\|q) =
  \int_{\mathbb{R}^n}p(x) \log \frac{p(x)}{q(x)} \, \mathrm{d}x.
```

renders as

``` latex
\operatorname{KL}(p\|q) = \int_{\mathbb{R}^n}p(x) \log \frac{p(x)}{q(x)} \, \mathrm{d}x.
```

We will discuss some basics of specifying math expressions in LaTeX, but recent developments have made it easy to produce LaTeX source code without having to type it out directly. You can produce a math expression using a graphical user interphase like [SymboLab](https://www.symbolab.com) and then use [MathPix](https://mathpix.com) to snip the resulting expression on your screen and convert it to LaTeX. MathPix works directly from the taskbar, so the whole process is quite efficient. Alternatively, if you have an iPhone, you can use install a handwriting-input keyboard for LaTeX by installing the app [MathKey](https://mathkey-app.com).

    center: figure: video(src="images/mathkey.mp4" width="75%" controls)

[Continue](btn:next)

---
> id: latex-expression-markup
### LaTeX expression markup

#### Superscripts and subscripts

Inline mathematical expressions in LaTeX are delimited by dollar signs. For example:

``` code
The Pythagorean theorem says that $a^2 + b^2 = c^2$, where
$a$ and $b$ are the lengths of the legs and $c$ is the
length of the hypotenuse of a right triangle.
```

renders as:

The Pythagorean theorem says that $a^2 + b^2 = c^2$, where $a$ and $b$ are the lengths of the legs and $c$ is the length of the hypotenuse of a right triangle.

[Continue](btn:next)

---
> id: step-latex-superscripts

As demonstrated in the example above, superscripts are indicated with carats. Subscripts are indicated with underscores:

``` code
a_1, a_2, a_3, \ldots, a_{100}
```

becomes

``` latex
a_1, a_2, a_3, \ldots, a_{100}
```

Curly braces are used for grouping and do not appear in the rendered expression. If you want a literal curly brace, it must be escaped with a backslash:

``` code
\{1,2,3\}
```

is the LaTeX code for

``` latex
\{1,2,3\}
```

[Continue](btn:next)

---
> id: latex-fractions
#### Fractions

The syntax for fractions in LaTeX is `{code} \frac{numerator}{denominator}`. For example, `{code} \frac{x^3}{3}` renders as $\frac{x^3}{3}$. Fractions can be nested:

``` code
\frac{1}{1+\frac{2}{3}}
```

looks like

``` latex
\frac{1}{1+\frac{2}{3}}
```
[Continue](btn:next)

---
> id: step-greek-symbols-latex
#### Greek symbols and math symbols

Greek letters may be typeset by putting a backslash in front of the letter name. For example, `{code} \alpha, \beta, \gamma` becomes $\alpha, \beta, \gamma$.

[Many common math symbols](https://www.overleaf.com/learn/latex/List_of_Greek_letters_and_math_symbols) have built-in support in LaTeX:

``` code
\sum_{i=1}^{10} i^2 = 385 + 0 \times \int_1^\infty dx/x^2
```

``` latex
\sum_{i=1}^{10} i^2 = 385 + 0 \times \int_1^\infty dx/x^2
```

[Continue](btn:next)

---
> id: step-latex-styling-text
#### Styling text

Math text is styled using various commands which begin with `{code} \math`. For example, `{code} \mathrm` prevents letters in equations from rendering in italics, while `{code} \mathbf` renders letters or numbers in boldface.

```code
|\mathbf{a}|^2 = \mathbf{a} \cdot \mathbf{a}
```

is the code for

``` latex
|\mathbf{a}|^2 = \mathbf{a} \cdot \mathbf{a}
```

Blackboard bold symbols like $\mathbb{R}, \mathbb{Z}, \mathbb{N}$ are typeset like `{code} \mathbb{R}, \mathbb{Z}, \mathbb{N}`.

[Continue](btn:next)

---
> id: step-latex-delimiters
#### Delimiters

Delimiters (like parentheses or brackets) can be made to reach vertically as far as necessary to properly enclose the content they surround. The delimiting characters must be preceded by `{code} \left` and `{code} right`.

``` code
\mathrm{e}^x = \lim_{n \to \infty} \left( 1 + \frac{x}{n} \right)^n
```

renders as

``` latex
\mathrm{e}^x = \lim_{n \to \infty} \left( 1 + \frac{x}{n} \right)^n
```

[Continue](btn:next)

---
> id: step-latex-displayed-equations
#### Displayed equations

Multi-line displayed equations (which are rendered in the center of the page and on their own lines) open with `{sh} \begin{align*}` and close with `{sh} \end{align*}`. Lines are separated with a double backslash, and an ampersand goes in front of the character in each line that should be used for alignment (usually the equals sign):

``` code
\begin{align*}
(x+y)^2 &= (x+y)(x+y) \\\
        &= x^2 + 2xy + y^2
\end{align*}
```

gives the equation

``` latex
(x+y)^2 &= (x+y)(x+y) \\
        &= x^2 + 2xy + y^2
```

[Continue](btn:next)

---
> id: step-latex-arrays
#### Arrays

The easiest way to create a matrix is to use a `{sh} bmatrix` environment. Rows are separated with a double backslash, and entries within each row are separated by ampersands.

``` code
\begin{bmatrix}
1 & 2 \\\
3 & 4
\end{bmatrix}
```

becomes

``` latex
\begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
```

---
> id: Conda
## Conda

Suppose you've written some Python code that you want to share. Other users will have to get your code and perform some setup operations, including making their Python environment aware of your package so they can `{code} import` it. Ideally you'd communicate information about any other modules that your module requires, so that users can make sure they have all of the requirements before they try to use your module. When you make improvements to your code, you'd like for your users to be able to get those changes as effortlessly as possible, preferably without having to go through installation steps again.

[Continue](btn:next)

---
> id: step-code-distribution-challenges

These code distribution challenges are difficult to manage manually, so developers have built systems designed to automate code distribution processes. These systems are called **package managers**. The main package managers for Python are **Pip** and **Anaconda**. Pip is a general Python installer, installing packages from the [Python Package Index](https://pypi.org). Anaconda is more geared toward data science, and it installs packages from its own collection called [Anaconda Repository](https://repo.continuum.io/).

[Continue](btn:next)

---
> id: step-install-anaconda

We recommend [installing Anaconda](https://docs.anaconda.com/anaconda/install/) and using it to manage your packages. Anaconda has a few important advantages over Pip:

1. Anaconda ensures that all requirements of all available packages are satisfied. Pip updates your environment when you install a package based on *that* package's requirements. Such an update might break previously installed packages, since they might depend on a different version of the same package.

[Continue](btn:next)

---
> id: step-virtual-environments-idea

2. Anaconda provides built-in support for managing multiple *virtual environments*. If Package A and Package B have incompatible versions of Package C, you can set up one virtual environment with Package A and one version Package C, and a second virtual environment with Package B and another version of Package C.

[Continue](btn:next)

---
> id: step-anaconda-binaries

3. For packages that depend on compiled code, Anaconda directly installs [*binaries*](gloss:binary-file). This means that these dependencies are built by the package maintainers sent to you ready to run. If the build process happens on your computer, there are more opportunities for things to go wrong in the installation process.

[Continue](btn:next)

---
> id: step-sometimes-use-pip

Some packages are available on PyPI but not Anaconda, and in these cases we recommend that you use `{sh} pip`.

[Continue](btn:next)

::: .exercise
**Exercise**  
1. Virtual environments are important for [[reproducibility|speed]].
2. Because Conda is doing [[more|less]] computation to ensure all required dependencies are met, it often takes longer than Pip to install a new package.
3. Separate virtual environments can be used to manage incompatible dependencies between two projects. [[True|False]]
:::

---
> id: virtual-environments
### Virtual Environments

Your Python **environment** is the set of packages you have available to `{sh} import` in a Python session. For example, a user's Python environment often includes all of the packages installed on the computer. A **virtual environment** emulates such an environment by exposing specific packages (and specific versions of those packages) to the Python interpreter. Virtual environments are useful because they allow the user to quickly switch between different sets of available packages. They also make it possible to be confident about exactly what packages are needed for a given application and share that information so that others can reproduce an environment without interfering with other environments they might need on that machine.

[Continue](btn:next)

---
> id: step-virtual-env-numpy-example

For example, if you need NumPy 1.16.3 for one project and NumPy 1.16.4 for a different project, your package manager can install *both* versions and just change which one is used when you execute `{py} import numpy`. This is much more convenient than uninstalling one version and installing the other every time you need to switch between the two projects.

[Continue](btn:next)

---
> id: step-set-up-conda

To use conda virtual environments, we first have to set up conda to work with our shell. This requires restarting bash.

    pre(bash-executable)
      | conda init bash
      | conda config --set changeps1 False
      | exit

The second line configures conda to refrain from its default behavior of printing the name of the current environment every time a command is run from the command line. You might find this setting preferable on your own computer, but it will be essential for us as we execute the bash cells in this section.

[Continue](btn:next)

---
> id: step-conda-create

To create a new Anaconda virtual environment, use `{sh} conda create`. To activate an environment, use `{sh} conda activate`. (Note: this cell takes a few dozen seconds to run, and it prints quite a bit of text. The `{sh} --yes` argument automatically answers "yes" when conda asks us whether we want to proceed)

    pre(bash-executable)
      | conda create -n myenv python numpy=1.16.4 --yes
      | conda activate myenv

[Continue](btn:next)

---
> id: step-check-numpy-conda

We can check that our newly activated environment has NumPy but not Pandas.  

    pre(bash-executable)
      | echo "import numpy" > tmp.py
      | echo "print(numpy.version.version)" >> tmp.py
      | echo "import pandas" >> tmp.py
      | python tmp.py

[Continue](btn:next)

---
> id: step-conda-env-list     

We can view all of the environments we've set up with `{sh} conda env list`:

    pre(bash-executable)
      | conda env list

[Continue](btn:next)

---
> id: step-conda-install

Conda installation operations modify the current environment. For example, we can add pandas:

    pre(bash-executable)
      | conda install pandas --yes
      | python tmp.py

[Continue](btn:next)

---
> id: step-conda-export

We can get a readable version of the current environment using `{sh} export`:

    pre(bash-executable)
      | conda env export

The output of this command can saved to a file—customarily called `{sh} environment.yml`— which can be used by others to replicate the environment. Just for practice, let's save the environment to a [YAML](gloss:YAML) file, remove the environment from our system, and then re-create it from the YAML file.

    pre(bash-executable)
      | conda env export > environment.yml
      | conda remove -n myenv --all
      | conda env create -f environment.yml

Note that we used the `{sh} -f` argument to make `{sh} conda env create` get the package list from the `{sh} environment.yml` file rather than directly from the command line.

::: .exercise
**Exercise**  
If you want a colleague to be able to reproduce the Python environment you used in a particular project, one convenient way to do that is to give them your [[environment.yml|contents.txt]] file, using [[`{code} conda env export`|`{code} conda env list`]].
:::

---
### Other reproducibility solutions
> id: other-reproducibility-solutions

We will close this section by mentioning two other solutions for the reproducibility problem. If you're working with a non-Conda Python installation, you can use pip together with **virtualenv** to reproduce the virtual environment functionality of Conda. You can also get pip to give you a list of the packages and versions available in the local virtual environment using `{py} pip freeze`.

[Continue](btn:next)

---
> id: docker

A much more general-purpose tool for achieving reproducibility is **Docker**. We'll discuss Docker more extensively in the final section in this course.

---
> id: markdown
## Markdown

Websites are written in HTML, which is a document specification language that supports many embellishments like boldface, italics, numbered lists, links, etc. HTML can be difficult to read directly, however, because the markers are quite obtrusive. Here's a (silly) example to illustrate the point:

    figure
      img(src="images/html-example.png")

<!--<p>The <em>quick</em> brown fox <strong>jumped</strong>
over the lazy <code>dog</code>.</p>-->

[Continue](btn:next)

---
> id: step-markdown-invented

Markdown was invented in 2004 by John Gruber and Aaron Swartz as a tool for specifying rich text (boldface, italics, links, etc.) in a plain text file that is easy to read and write. Here's the example above in Markdown:

``` markdown
The *quick* brown fox **jumped** over the lazy `dog`.
```

[Continue](btn:next)

---
> id: step-markdown-lingua-franca

Markdown has since become a [lingua franca](gloss:lingua-franca) among developers and data scientists. For example, forum content on GitHub is specified in Markdown. Rather than having a single rich-text editor, the user is presented with a plain text editor and a *Preview* tab to see how the Markdown will render in the forum:

    figure
      img(src="images/github-markdown-input.png")
      img(src="images/github-markdown-output.png")

[Continue](btn:next)

---
> id: markdown-rules
### Markdown rules

The list of essential Markdown rules is pretty short:

1. Boldface is indicated with double underscores or double asterisks: `{code} __This text is bold__` or `{code} **This text is bold**`.

[Continue](btn:next)

---
> id: step-markdown-italics

2. For italics, use underscores or asterisks: `{code} _This text is italic_` or `{code} *This text is italic*`.

[Continue](btn:next)

---
> id: step-markdown-headers

3. Headers are indicated with a number of hashmarks followed by a space and the header text. Top-level headers use a single hashmark, and using more hashmarks makes the resulting font size increasingly small

    ``` markup
    # Top-level title
    ## Section 1
    ### Subsection
    ## Section 2
    ```

[Continue](btn:next)

---
> id: step-markdown-links

4. Links use square brackets around the text to be displayed and parentheses around the URL to be linked: `{code} [Click here](http://www.google.com)`.

[Continue](btn:next)

---
> id: step-markdown-images

5. Images are included using the link syntax preceded by an exclamation point. The contents of the square brackets are used as alt-text (the text that appears if there's an issue loading the image).

    ``` markdown
    ![a tiger](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg)
    ```

[Continue](btn:next)

---
> id: step-markdown-blockquotes

6. *Blockquotes* are marked with a greater-than sign at the beginning of the line:

    ``` markdown
    > "Imagination is more important than knowledge." -Albert Einstein
    ```

[Continue](btn:next)

---
> id: step-markdown-bullet-lists

7. Bullet lists are achieved with an asterisk and a space at the beginning of each line containing a list item:

    ``` markdown
    * Limits
    * Differentiation
    * Integration
    ```

[Continue](btn:next)

---
> id: step-markdown-numbered-lists

8. Numbered lists use numbers instead of asterisks. Numbers are assigned sequentially when the list is rendered, so you can use 1 for every list item in the source file. For nested lists, indent two spaces:

    ``` markdown
    1. Limits
    1. Differentiation
      1. Power rule
      2. Product rule
      3. Chain rule
    1. Integration
      1. Power rule
      1. Substitution
      1. Integration-by-parts
    ```

[Continue](btn:next)

---
> id: step-markdown-inline-code

9. Inline code is surrounded by backticks, as in "``{code} try the `sqrt` function``". Code blocks are surrounded by three backticks, with an optional language name following the first set:

    ```` markdown
    ```python
    import numpy as np
    np.sqrt(3)
    ```
    ````

[Continue](btn:next)

---
> id: step-markdown-line-break

10. A single newline character is ignored by default, so that you can break up the lines of a paragraph however you want without affecting the output. To separarate paragraphs, put a blank line between them. To force a line break without a paragraph break, put *two spaces* just before the newline.

[Continue](btn:next)

---
> id: step-markdown-exercise
::: .exercise
**Exercise**  
Answer each of the following questions about Markdown.  
1. Code fences are marked using [[3|2|1]] [[backticks|hyphens|colons]].
2. Markdown will automatically correct the numbering in your numbered lists [[True|False]].
3. The syntax for inserting an image is an [[exclamation point|period|colon]] followed by [[square brackets|parentheses]] containing the [[alt text|url]] followed by [[parentheses|square brackets]] containing the [[url|alt text]].
4. The syntax for inserting links is [[square brackets|parentheses]] containing the [[link text|url]] followed by [[parentheses|square brackets]] containing the [[url|link text]].
5. Inline code is indicated using [[single backticks|quotation marks|curly braces]].
6. Section headings are indicated using [[hashmarks|asterisks]] followed by a [[space|newline|tilde]].
7. For boldface or italics, use [[double|single]] or [[single|double]] underscores (or asterisks), [respectively](gloss:respectively).
:::

---
> id: jupyter
## Jupyter

Findings in quantitative disciplines have historically been communicated primarily through written reports. In many cases, accompanying code is unavailable or difficult to replicate for readers who might wish to reproduce the analysis. This dissociation of exposition and code has major drawbacks: (i) ease of replication has significant implications for the [[reliability|discovery]] of the results being reported, and (ii) the code must be carefully organized and commented to document the relationship between its elements and the corresponding elements of the written report.

[Continue](btn:next)

---
> id: step-project-jupyter

*Project Jupyter* provides researchers with tools for combining exposition and code into a single document called a *Jupyter notebook.* Notebook files are managed by a command line program called `{sh} jupyter` and are presented to the user for viewing and editing in their preferred web browser. A Jupyter notebook contains of a list of *cells*, each of which is either a Markdown cell for exposition or a code cell for execution. The code is passed by Jupyter to a program called a *kernel* which runs in the background. The default kernel is a Python interpreter, but kernels are available for a huge variety of languages (including Julia and R, which, along with Python, form the portmanteau *Jupyter*).

[Continue](btn:next)

---
> id: step-rich-jupyter-output

Many rich code cell output types are supported, including both static and interactive graphics which appear in the notebook. Here's an example session:

    figure
      img(src="images/jupyter-example.png")

[Continue](btn:next)

---
> id: step-jupyter-lab-explanation

Project Jupyter is currently in a period of transition from the *Classic Jupyter Notebook* to *JupyterLab*. JupyterLab is the next-generation version of Jupyter Notebook, built from scratch using more modern web tools and years of insight gained from the development of the classic notebook. We recommend using JupyterLab, although you might occasionally come across features which are available only in the Classic Notebook. The underlying file format is the same, so you can use the two interfaces interchangeably.

[Continue](btn:next)

---
> id: magic-commands
### Magic Commands

You might have noticed that one line in the executable cell in the screenshot above is *not* valid Python: `{code} %matplotlib inline`. This instruction, which makes matplotlib figures appear directly in the notebook, is specific to the Jupyter interface and is not part of matplotlib itself. Such instructions are called **magic commands** and are indicated in Python with a leading percent sign.

Here are some handy magic commands:

* `{code} %run`. If you have a large or ungainly block of code that you don't want taking up space in your notebook, you can save it in a `{code} .py` file in the current directory and use the `{code} %run` magic to execute all of the code in that file.

[Continue](btn:next)

---
> id: step-magic-timeit

* `{code} %timeit`. Place this line in front of any line of Python code to approximate how long it takes to execute.

[Continue](btn:next)

---
> id: step-magic-debug

* `{code} %debug`. Running this magic after a cell returns an error puts you into a debugger session with the interpreter paused at the point where the error was thrown. This allows you to inspect the values of variables, try new code, and step through the execution of your program one line at a time.

[Continue](btn:next)

---
> id: step-magic-autoreload

* `{code} %%load_ext autoreload`. If the `{code} autoreload` extension is loaded, then any changes in imported modules are automatically picked up whenever a cell is executed. This can be helpful if you want to alternate between making changes to a module and experimenting with them in a Jupyter notebook. The alternative is to re-start the kernel each time you make a change to the module, and that gets rather tedious.

[Continue](btn:next)

---
> id: keyboard-shortcuts
### Keyboard Shortcuts

Jupyter notebooks can be navigated entirely by mouse or trackpad, but it is much more efficient to use keyboard shortcuts for common operations. Furthermore, it's worth learning many of these shortcuts before working extensively with the software, because it's easier to build good habits from the start than to replace bad habits one at a time as your frustration with inefficiencies reaches the limits of what you can tolerate.

[Continue](btn:next)

---
> id: step-jupyter-modes

Jupyter has an **edit mode** for entering text in cells and a **command mode** for manipulating cells (for example, merging or deleting cells). If there's a blinking cursor in a cell, the current mode is *edit*, and otherwise the current mode is *command*. Switching between modes is accomplished with the escape key (edit to command mode) and the enter key (command to edit mode).

[Continue](btn:next)

---
> id: step-jupyter-cell-operations

Cells are deleted in command mode with two strokes of the `{code} d` key. You can highlight cells in command mode by holding shift and using your arrow keys, and you can merge the highlighted cells into a single cell using `{code} shift-m`. Insertion of new cells is accomplished with either `{code} a` (insert cell *above* ) or `{code} b` (insert cell *below* ) in command mode. Cells can be switched between Markdown (`{code} m`) and code (`{code} y`) in command mode.

[Continue](btn:next)

---
> id: step-jupyter-execute-cells

The most important shortcut works the same in both modes: `{code} shift-enter` executes the current cell or cells.

[Continue](btn:next)

---
> id: step-jupyter-command-palette

If you want to perform an action that you don't know a keyboard shortcut yet, you can do `{code} cmd-shift-c` (in either mode) to activate the *command palette*. Then start typing keywords related to what you want to accomplish, selected the desired command, and run it by pressing enter. The command palette will also display the shortcut for that command (if one exists). The sequence `{code} cmd-shift-f-f` closes the command palette.

::: .exercise
**Exercise**  
1. The most efficient way to delete a cell is to find the delete operation in a menu somewhere. [[False|True]]
2. You can reminder yourself of a given keyboard shortcut by searching for that operation in the command palette. [[True|False]]
3. The enter key switches from edit mode to command mode. [[False|True]]
:::

[Continue](btn:next)

---
> id: notebook-consoles
### Notebook Consoles

One difficulty with Jupyter notebooks is that it's easy for your workspace to get cluttered. The problem is that all code in the notebook is handled in the same way regardless of its role:

1. **Publication code**. Code that contributes to the narrative should be included in the final Jupyter notebook.

[Continue](btn:next)

---
> id: step-jupyter-library-code

2. **Library code**. Long functions may be critical for the code in the notebook to run properly, but they occupy a lot of vertical space in the notebook and often distract from the narrative.

[Continue](btn:next)

---
> id: step-jupyter-scratch-code

3. **Scratch code**. While executing throwaway lines of scratch code is an important part of the development process, that code doesn't logically belong in the notebook.

[Continue](btn:next)

---
> id: step-jupyter-three-types

JupyterLab includes functionality for interacting with all three types of code in a manner appropriate to their roles. The idea is to open three tabs: a Jupyter notebook for publication code, a Python text file for library code, and a *console* linked to the notebook for scratch code. The linked console is a [REPL](gloss:REPL) which interacts with the same kernel instance as the notebook.

    figure
      img(src="images/jupyterlab-setup.png")

To achieve this setup in JupyterLab, begin by opening a Jupyter notebook and a text file saved with the `{code} .py` extension. Then right-click the tab for the Jupyter notebook and select "New console for notebook". You can drag each tab to wherever you want it to appear on the screen, and all of them are visible at once. The combinations `{code} ctrl-shift-[` and `{code} ctrl-shift-]` switch between tabs.

::: .exercise
**Exercise**  
If you bind the value `{py} 7` to the variable `{sh} x` in your Jupyter notebook, then the value of `{py} x` in the linked console will be [[7|undefined]]. The value of `{py} x` in a Python file in the same directory will be [[defined only if it's defined in that file|7]].
:::

---
> id: vs-code
## VS Code

Jupyter is geared toward producing documents which interweave exposition, code, and visualizations. Dedicated editors provide more features for writing large codebases, and it's worth learning enough about them to make an informed decision about when to switch as a project scales beyond the sweet spot for Jupyter.

[Continue](btn:next)

---
> id: step-vs-code-introduction

The editor we will use is the free and open source Microsoft product **Visual Studio Code**, or *VS Code* for short. VS Code has risen sharply in popularity since its introduction in 2015, reaching the top of the ranks in the 2018 StackOverflow Developer Survey. It starts quickly and offers many powerful features, including a system for users to add their own extensions. This combination of popularity and extensibility means that extensions are available for almost everything, so users can often comfortably use VS Code for all of their editing tasks (for example, authoring in Markdown, LaTeX, etc., and doing web development, Python development, data exploration, etc.).

[Continue](btn:next)

---
> id: vs-code-main-features
### Main Features

Let's do a walkthrough of some basic VS Code features. We begin a VS Code session by opening a project folder (although you can directly open specific files, we recommend opening the project folder first, because some features are designed with this workflow in mind).

    center: figure: video(src="images/vs-code-open-folder.mp4" width="75%" controls)

1. **File Navigation**. When you open a project folder, the *Explorer* pops open on the left side of the window. In the Explorer you can navigate the directory tree and do common file operations like adding new files, moving them around, and re-naming them. Right-clicking a file or folder brings up the available options along with keyboard shortcuts so you can learn to access them without having to right-click in the future. Clicking on a file opens it in the main window to the right. You can hide the Explorer to create more space for the main window with `{code} cmd-b`.

       center: figure: video(src="images/vs-code-explorer.mp4" width="75%" controls)

[Continue](btn:next)

---
> id: step-command-palette

2. **Command Palette**. VS Code has enough functionality that it would be inefficient to access all of it through menus and infeasible to assign and remember keyboard shortcuts for every operation. The *Command Palette* is a way to find functions quickly based on descriptive names of those functions. For example, if you want to replace one string with another throughout a file, you can do `{code} cmd-shift-P` and start typing "replace". Use the arrow keys to select the desired function and hit `{code} enter` to run it. Note that the Command Palette displays keyboard shortcuts if you want to learn them. However, the Command Palette is fast enough that you might want to use it instead of keyboard shortcuts as your primary way of accessing some functions.

       center: figure: video(src="images/vs-code-command-palette.mp4" width="75%" controls)

[Continue](btn:next)

---
> id: step-integrated-terminal

3. **Integrated Terminal**. VS Code has an integrated terminal that you can pop up and down using ``{code} ctrl-` `` (that's a backtick, top left corner of the keyboard).

       center: figure: video(src="images/vs-code-terminal.mp4" width="75%" controls)

[Continue](btn:next)

---
> id: step-marketplace

4. **Marketplace**. Much of VS Code's functionality is provided through *extensions*, which are third-party packages provided in the VS Code *Marketplace*. The Marketplace can be accessed using the square icon on the left side of the window. You can search for and install extensions with a click, and you can right-click the gear icon on an installed extension to edit the settings for that extension. You'll want to go ahead and install the Python extension.

       center: figure: video(src="images/vs-code-marketplace.mp4" width="75%" controls)

[Continue](btn:next)

---
> id: step-vscode-bookmarks

5. **Bookmarks**. When you're working with a large file, you'll often want to save your place so you can inspect a different part of file and quickly get back to where you were. VS Code has a bookmark system to facilitate this kind of navigation: `{code} cmd-opt-k` sets or removes a bookmark on the current line, and `{code} cmd-opt-j` and `{code} cmd-opt-l` navigate through the bookmarks forwards and backwards. You can also use bookmarks to highlight large blocks of text for copying or deleting; try "Bookmarks" in the Command Palette to see all of the available options.

       center: figure: video(src="images/vs-code-bookmarks.mp4" width="75%" controls)

[Continue](btn:next)

---
> id: step-vscode-git-integration      

6. **Git Integration**. VS Code provides a graphical user interface for performing common Git operations like staging and committing changes and resolving merge conflicts.

Suppose we've just run `{sh} git merge` from the command line, and conflicts were introduced in the file `{code} setup.py`. We can resolve these conflicts and commit the resolutions all in VS Code:

    center
      figure: video(src="images/vs-code-merge-conflicts.mp4" width="75%" controls)
      figure: video(src="images/vs-code-git-commit.mp4" width="75%" controls)

[Continue](btn:next)

---
> id: step-vscode-snippets

7. **Snippets**. If you want to save time writing boilerplate code or text, you can bind chunks of text to short key sequences using VS Code's *snippet* mechanism. For example, you can enter a Markdown code fence if you have a snippets file with the following entry:

       center: figure: img(src="images/fence.png" width="75%")

The dollar-sign expressions indicate points where the user is prompted for text when the snippet is triggered. These points are visited in order starting from `{code} ＄1`, with `{code} ＄0` indicating the location of the cursor when the snippet is exited.

    center: figure: video(src="images/vs-code-snippets.mp4" width="75%" controls)

Many extensions come with snippets, and you can create your own by creating a new global snippet configuration file by searching in the Command Palette for "Configure User Snippets".

[Continue](btn:next)

::: .exercise
**Exercise**  
1. One of the advantages of doing Git operations in VS Code is that [[removing conflict markers is easier|more operations are available]].
2. The quickest way to look for a VS Code function you want to run is usually to use [[the command palette|menus|documentation]].
3. If you want to run a shell command, it's faster to [[open the integrated Terminal|open a separate Terminal and navigate to your project directory]].
4. To quickly find your place again when you have to navigate to a distant point in the file you're editing, [[use bookmarks|type weird strings and search for them later]].
:::

[Continue](btn:next)

---
> id: python-ide
### Python IDE

An **integrated development environment** (or *IDE*) is a full-featured environment for writing code. Advanced features that distinguish an IDE from a plain text editor include autocompletion, variable inspection, debugging, and [refactoring](gloss:refactoring) and [linting](gloss:linting) tools.

[Continue](btn:next)

---
> id: step-vscode-python-extension

The most popular extension in the VS Code Marketplace, the Microsoft-supported *Python* extension, effectively turns VS Code into a full-fledged IDE for Python. Let's take a tour of the most important features. Begin by opening a new buffer (`{code} cmd-n`) and switching to Python mode (click on "Plain Text" in the bottom left corner and choose Python from the menu). It's important to [install](gloss:vscode-install) Python from the Marketplace if you haven't already.

1. **Code execution**. `{code} shift-enter` sends the highlighted text to a kernel for execution. Lines containing `{py} #%%` can be used to split your code into Jupyter-like cells, so you don't have to highlight the whole block you want to execute. We recommend that you [use a Jupyter kernel](gloss:vscode-jupyter-option) rather than a Terminal for code execution.

       center: figure: video(src="images/vs-code-code-execution.mp4" width="75%" controls)

2. **Code completion**. When you begin typing a name in a Python file in VS Code, you will see suggestions of Python names which begin with the letters you're typing. You can hit tab to select the top recommendation or use the arrow keys to navigate through other options. (Note also that when you open parentheses to make a function call, documentation for the function pops up to help you remember its arguments.)

       center: figure: video(src="images/vs-code-code-completion.mp4" width="75%" controls)

3. **Variable inspection**. Above the Jupyter pane is a *variable inspector* where you can see the variables which are currently in scope. Arrays and other compound data structures can be opened in a special *Data Viewer* window (using the icon in the rightmost column in the variable inspector).

       center: figure: video(src="images/vs-code-variable-inspection.mp4" width="75%" controls)

4. **Debugging**. VS Code provides several tools for inspecting the execution of a Python program as it runs. These tools are organized in a unified interface called a *debugger.* To debug a Python file in VS Code, begin by clicking in the gutter (the region left of the line numbers) to place red dots indicating **breakpoints** on specific lines where you would like to pause the interpreter. Then click the bug icon in the panel on the left. In the *Watch* section, you can any expressions whose values you would like to be able to monitor as the debugger runs. Press the green play button to begin debugging, and use the controls to navigate.

       center: figure: video(src="images/vs-code-debugging.mp4" width="75%" controls)

5. **Refactoring**. Highlighting an expression and right-clicking brings up a menu which includes the option "Extract Variable". Selecting this option will replace the given expression with a variable name and insert a line which binds the value of the highlighted expression to the variable. Using this tool to perform the refactoringn operation makes mistakes less likely and saves you a little time.

       center: figure: video(src="images/vs-code-refactoring.mp4" width="75%" controls)

6. **Linting**. When you save a Python file in VS Code, a [linter](gloss:linting) is automatically run. Its suggestions are indicated by squiggly red underlines which you can mouse over to read the details for.

       center: figure: video(src="images/vs-code-linting.mp4" width="75%" controls)

7. **Testing**. VS Code provides support for `{code} pytest` for unit testing. The process is designed to involve minimal [boilerplate](gloss:boilerplate): you write test functions whose names begin with `{code} test_` in files whose names begin with `{code} test_`, and VS Code will discover them for you. From the command palette, run "Python: Discover Tests". The first time you run this command, you'll need to configure it. Just select "pytest" and follow the instructions.

After VS code has discovered your tests, you can run all tests with a button at the bottom of the window. You can also run individual tests using a button which appears in the editor above the function.

    center: figure: video(src="images/vs-code-testing.mp4" width="75%" controls)

::: .exercise
**Exercise**  
1. If you want to understand an algorithm by implementing it in Python and watching it execute line-by-line, you can use the [[debugging|linting|testing]] feature of VS Code.
2. NumPy arrays can be difficult to read in the format in which they are printed by default at the command line in Python. To see an easier-to-read version, use [[the variable inspector|code completion|the debugger]].
3. Replacing a repeated expression with a variable is an example of [[refactoring|linting|debugging]].
4. To send Python code to the kernel for execution, do [[shift-enter|enter|cmd-enter]].
5. Identifying style improvements in code is called [[linting|refactoring|debugging]].
6. To write unit tests in Python using `{sh} pytest`, you just have to write functions that begin with [[test_]] in files that begin with [[test_]].
:::

---
> id: gnu-make
## Make

In a typical coding project, some files will be processed to produce other files as output. For example, programs written in C are compiled into [binary](gloss:binary-file) executable files. LaTeX files are compiled to PDF files. Python files process raw data files and produce clean versions of the data. The clean versions of the data are in turn used to produce analysis and visualizations.

[Continue](btn:next)

---
> id: step-target-and-source-files

We call the output files *target* files, and the input files are called *source* files. The source-target relationships of a project are a crucial component of the structure of the project, because the processing steps are required to reproduce the analysis or update the target files to reflect changes in the source. However, this important structure is not usually apparent from the source and target files themselves.

[Continue](btn:next)

---
> id: step-makefile

There are at least two ways to address this problem: (1) document the processing steps in a README file, or (2) write a *Makefile*, which can be processed by a command-line utility called *make* to actually carry out the processing steps. The second approach documents the source-target relationships *and* makes them executable.

[Continue](btn:next)

---
> id: step-example-makefile

Suppose, for example, that we have a file called `{code} raw-data.csv` which contains some data we are meant to analyze. We write some code in a file called `{code} clean-data.py` to process that data and write a file called `{code} clean-data.csv`. Then we run `{code} model.py` to do some analysis and come up with a model that we save in a file called `{code} model.pkl`. Our Makefile would look something like this:

``` makefile

all : model.pkl

model.pkl : model.py clean-data.csv
    python model.py

clean-data.csv : clean-data.py raw-data.csv
    python clean-data.py

clean :
    rm model.pkl
    rm clean-data.csv

.PHONY all

```

[Continue](btn:next)

---
> id: step-makefile-entry-formula

The basic formula for a Makefile entry is

``` makefile
target : dependencies
    recipe
```

The command-line function `{code} make` looks at whether the dependencies have changed since the target was last built, if they have then it runs the commands in the corresponding recipe.

[Continue](btn:next)

---
> id: step-make-phony-targets

The `{code} target` can either be an actual target file or a *phony* target, which is a name used to refer to a given processing step. The phony targets should be declared in a line that begins `{code} .PHONY` and lists the phony targets. It's conventional to include the phony targets `{code} all` and `{code} clean`. These correspond to the operations "build everything" and "remove the target files".


[Continue](btn:next)

---
> id: step-specific-targets

Specific targets can be invoked at the command line by running `{code} make targetname`. For example, `{code} make all` builds everything and `{code} make clean` removes the target files. The target may be omitted, in which case it defaults to the first target in the file.

::: .exercise
**Exercise**  
Write a Makefile which runs `{code} pdflatex my-document.tex` to produce `{code} my-document.pdf` whenever `{code} my-document.tex` changes. Include the phony targets `{sh} all` and `{sh} clean`. Assume that `{code} pdflatex` will produce auxiliary files `{code} my-document.aux` and `{code} my-document.log`.
:::

    x-quill

*Solution.* We remove the auxiliary files with `{code} clean` and make `{code} all` include just the target `{code} my-document.pdf`:

``` makefile

all : my-document.pdf

my-document.pdf : my-document.tex
    pdflatex my-document.tex

clean :
    rm my-document.aux
    rm my-document.log

.PHONY all clean

```

---
> id: docker-section
## Docker

If you've had the experience of trying to get programs and configuration files installed the same way on multiple computers, then you can appreciate the appeal of Docker: what Conda and Pip provide to Python in environment reproducibility, Docker achieves for *anything you can run on Linux*. This is a big deal in the software engineering world, because installation wrangling can suck up a lot of developer time. It's also valuable to scientists and data scientists, because research can be reproduced with rock solid reliability with the execution of a single OS-independent command. These benefits have driven the steady rise in popularity that Docker has enjoyed since it was introduced in 2013.

[Continue](btn:next)

---
> id: step-docker-overview

To oversimplify a bit, using Docker involves figuring out how to build your desired computational environment by running a sequence of shell commands starting from a bare-bones Linux operating system. You store this sequence of commands in a text file called **Dockerfile**, and the results achieved by performing the specified installation steps are stored as a Docker **image**. Docker (the company) provides a free cross-platform application called Docker Desktop which allows any user to download Docker images from a repository of published Dockerfiles and run them on their own machine. These image instances, called **containers**, run in their own isolated filesystem on the user's computer.

[Continue](btn:next)

---
> id: docker-no-assumptions

Since no assumptions are made about anything else on the user's system, Docker applications reliably run the same way for everyone. Furthermore, Docker containers are *not* virtual machines, so they are lightweight and can run code with near-native performance. They are especially useful in cloud computing contexts, because you can debug a system on your computer and deploy it to the cloud without worrying about how to configure everything to work in the cloud the same way it works on your personal machine.

[Continue](btn:next)

---
> id: docker-desktop-example

To give you a sense of how profound this can be, if you install Docker Desktop and run

``` code
docker run -p 8888:8888 jupyter/datascience-notebook
```

then several Docker images that are a part of the `{code} datascience-notebook` stack published by the Jupyter team will be downloaded to your machine. The download takes a while, but when it's complete, you will have a running Jupyter instance accessible at `{code} localhost:8888` in your browser (the `{code} -p 8888:8888` part of the command connects the port 8888 in the container to the port 8888 in the host operating system). This notebook will have Python, R, and Julia kernels, each complete with curated sets of data science packages. It would take much more work to follow a list of installation instructions to achieve the same setup using native installations. Furthermore, the time cost of downloading images is incurred only the first time you run the command, because downloaded images are saved on your computer for fast loading in the future.

[Continue](btn:next)

---
> id: docker-disadvantages

Disadvantages of using Docker include: (1) running a given piece of software both through Docker and natively on your operating system requires having two installations of it, and (2) care must be taken to connect the container to your operating system so you can interact with it (for example, using Jupyter notebooks, or saving files from within the container and having them show up in your primary file system).

[Continue](btn:next)

---
> id: step-docker-example
### Using Docker

To see how Docker works and how we might use it in practice, let's take a closer look at the Jupyter data-science notebook. When we run `{code} docker run -p 8888:8888 jupyter/datascience-notebook` from the command line, we're telling Docker that we want a container running the `{code} jupyter/datascience-notebook` image. Docker Desktop is able to find that image because it's registered on [**Docker Hub**](https://hub.docker.com/r/jupyter/datascience-notebook/). If we take a look at the [Dockerfile](https://hub.docker.com/r/jupyter/datascience-notebook/dockerfile) used to build that image, we see a sequence of Dockerfile commands beginning with all-caps instructions. The most important ones are:

* **FROM**. Specifies an image to build on top of. This can be an image from Docker Hub or one you've built locally from another Dockerfile.
* **RUN**. Executes shell commands. Useful for downloading files from the internet and performing other installation steps.
* **COPY**. Copy files from the directory containing the Dockerfile into the image. Useful for configuration files or shell scripts (so you don't have to put all of the instructions into the Dockerfile).
* **CMD**. Specifies a default command to run when executing a container. The most common default is `{code} bash` (so running a container drops you into a shell session), but the Jupyter notebook images launch Jupyter Lab so you can connect to the container using your browser.
* **EXPOSE**. Make a container port available for the host operating system to connect to. For Jupyter, it's customary to use port `{code} 8888`.
* **USER**. Some installation steps require enhanced filesystem permissions; the Dockerfile solution is to switch to the root user with the line `{code} USER root`.

[Continue](btn:next)

---
> id: step-docker-our-own-Dockerfile

Let's use some of these command to make our own Docker image for a [toy](gloss:toy) data science project. We'll structure our project using a simplified version of the [Data Science Cookiecutter](https://github.com/drivendata/cookiecutter-data-science). We begin by creating a directory structure like this:

``` code
.
├── README.md ← Explanation of the project and instructions on how to use
├── Dockerfile ← Script to build the Docker image
├── Makefile ← Encode project dependency structure for reproducibility
├── data
│   ├── raw ← stores original data (untouched)
│   └── processed ← stores files computed from original data
├── models ← stores Python objects for trained models
├── reports ← final writeup
│   ├── figures
│   └── report.tex
└── src ← source code for processing data and models
    ├── features ← data processing
    │   └── build_features.py
    ├── models ← model training and prediction
    │   ├── predict_model.py
    │   └── train_model.py
    └── visualization ← generate figures
        └── visualize.R
```

You can do this by cloning a Git repo prepared for this purpose:
``` code
git clone git@github.com:data-gymnasia/data-science-docker.git
```

In our Dockerfile we begin with the following contents:

``` code
FROM jupyter/datascience-notebook

# set working directory to home directory
WORKDIR /home/jovyan

# copy whole current directory into the image
COPY . project

# Get data from GitHub
RUN cd project/data/raw && \
    wget https://browndsi.github.io/data/iris.csv

# Enter bash session in the project directory when
# the container is run
WORKDIR project
CMD /bin/bash
```

We build on the Jupyter `{code} datascience-notebook` image, copy our local files into the image, acquire the data from the internet, and start the container in a `{code} bash` session. Then we build the docker image by running (from the top level of the directory)

``` code
docker build -t myproject .
```

The `{code} -t myproject` part **tags** the image with the name `{code} myproject`, and the dot means "the current directory" in Unix.

[Continue](btn:next)

---
> id: step-docker-broken-build

Unfortunately, this image won't build, because of permissions issues. Looking at Jupyter's Dockerfiles, we find some inspiration: a script called `{code} fix-permissions`. This script can only be run as the `{code} root` user, so we amend our Dockerfile to get this:

``` code
FROM jupyter/datascience-notebook

# set working directory to home directory
WORKDIR /home/jovyan

# copy whole current directory into the image
COPY . project

# Get data from GitHub
USER root
RUN fix-permissions project && \
    cd project/data/raw && \
    wget https://browndsi.github.io/data/iris.csv
USER jovyan

# Enter bash session in the project directory when
# the container is run
WORKDIR project
CMD /bin/bash
```

Then when we run `{code} docker build -t myproject .`, we get a successfully built image. We can see a list of our images by running `{code} docker images` at the command line, and we can run the image we just made with

``` code
docker run -i -t myproject
```

The `{code} -i` and `{code} -t` flags are for 'interactive' and 'terminal', indicating that we want to begin a shell session when we run the container.

[Continue](btn:next)

---
> id: step-docker-makefile

After running this command, we have a command prompt inside our running container. We can do `{code} cat Makefile` to see how the Makefile encodes dependencies among the project components, as well as providing instructions for processing. Its contents are:

``` {code}

.PHONY: features train predict figures reports all

all: reports

features: src/features/build_features.py
	python src/features/build_features.py data/raw/ data/processed/

train: features src/models/train_model.py
	python src/models/train_model.py data/processed/ models/trained_model.joblib

predict: train src/models/predict_model.py
	python src/models/predict_model.py data/processed/ models/trained_model.joblib reports/

figures: src/visualization/visualize.R
	Rscript src/visualization/visualize.R data/processed/ reports/figures/

reports: reports/report.tex predict figures
	cd reports && \
	pdflatex report.tex && \
	pdflatex report.tex
```

We can visualize the dependency structure described by this Makefile as a directed graph:

    center: figure: img(src="images/project-dag.svg" width="200px")

We can build the whole project from the Docker container with `{code} make all`. However, when we do that we realize that the `{code} joblib` package (which is being used by some of the Python files) isn't available in the Jupyter `{code} datascience-notebook` docker image. Therefore, we need to put that insstallation step into our Dockerfile and rebuild. We add the lines

``` code
# Install joblib for storing Python models. The
# '--yes' option preempts "proceed?" questions
RUN conda install joblib --yes
```

[Continue](btn:next)

---
> id: step-docker-extract-file

Building and running again, we can do `{code} make all` from inside the running container to produce a PDF in the `{code} reports` directory. We won't be able to view that file directly since it's inside the container. We'll need to copy it from the container to our operating system so that our OS's PDF viewing app can read it.

[Continue](btn:next)

---
> id: step-docker-cp

The command for transferring files out of containers is `{code} docker cp`. We'll need to know the name of the container, which we can get using `{code} docker ps` (note that this has to be run from your OS, so you should open a separate Terminal tab). In the last column of the `{code} docker ps` output, we see a random name like `{code} great_mayer`. Then you can copy the file to `{code} ~/Desktop` (for example) using

``` code
docker cp great_mayer:/home/jovyan/project/reports/report.pdf ~/Desktop
```

We could have given our project a name with the `{code} --name` option when we did `{code} docker run`, and that would have allowed us to skip the `{code} docker ps` step.

[Continue](btn:next)

---
> id: step-docker-volumes

The `{code} docker cp` utility can be inadequate for extensive file transferring between the container and host OS. Docker supports a more robust approach using **volumes**, which are directories shared between the container and host. You can read more about volumes [here](https://docs.docker.com/engine/reference/builder/#volume).

[Continue](btn:next)

::: .exercise
**Exercise**  
1. To get files into a Docker image during its build, we use [[COPY|docker cp]]
2. To see a list of all of the Docker images we have on our machine, we use [[docker images|docker ps]].
3. To see a list of running containers, we do [[docker ps|docker images|docker cp]]
4. Jupyter uses the Dockerfile command [[EXPOSE|PORT|RUN]] to connect the Jupyter server on the container to the browser on the host OS.
5. The Dockerfile command `{code} FROM` is used to build an image on top of an existing image. [[True|False]]
6. The Dockerfile command `{code} CMD` can be used to specify what executable should run when the container is started [[True|False]]
:::

---
> id: step-all-done

Congratulations! You have completed the Data Gymnasia course on Data Science Utilities.
