
# Utilities

> id: intro
## Introduction

When it comes to data science, **tools matter**. Some workflows facilitate naturally to efficiency and insight, while others can leave you spending most of your time putting out fires. To borrow a familiar example from document editing, it might take 15 minutes to go through a report and capitalize every instance of a particular word, but your editor's find-and-replace feature can do the job with no errors and in less than [[10|100|1000]] seconds. Merely being aware of the find-and-replace concept leads to significant time savings, because you can look up how to do it if you don't remember.

---
> id: step-1

In a similar way, taking advantage of the collective wisdom of the statistical and software development communities is a major productivity multiplier. Learning a reasonably complete set of tools and techniques up front spares you the inefficiency of trying out lots of possibilities and inevitably developing some bad habits along the way.

[Continue](btn:next)

---
> id: step-2

The set of programs and formats we will cover in the course aspires to be as close as possible to a canonical open source data science toolkit. In particular, all of the tools are widely used in industry or academia and have large user bases. 

However, some toolkit roles are filled by more than one popular program, so assembling a complete software suite does require making choices. You should feel free to substitute other tools when they fill the same needs and have comparable benefits to the ones we will discuss in this course. On the other hand, don't be too reluctant to appreciate the benefits of switching to something new. You can be surprisingly productive surprisingly quickly with a well-designed interface.

[Continue](btn:next)

---
> id: goals
### Goals

Learning from the principles of best practice offers several advantages to the data science practitioner:

1. **Efficiency**. It's preferable avoid taking far longer than necessary to perform common, often mundane tasks. 
2. **Correctness**. Getting incorrect results is harmful and potentially quite dangerous. Building good habits for organizing your work and avoiding common pitfalls can help you consistently achieve correct results. 
3. **Reproducibility**. A key component of transparency and confidence in your results is the ability for you and others to verify the analysis by re-running it. A workflow with *even one* non-reproducible step is not compatible with this goal, so it's important to value reproducibility throughout the learning process.
4. **Clarity**. Workflows that incorporate opaque, ad-hoc elements or obscure the reasoning involved in each step make it more difficult to re-use your work, reproduce it, and place confidence in it. Best practices can help you highlight your reasoning and make your steps easily navigable.

---
> id: open-source-data-science
### Open Source Data Science

All of the software introduced in this course is **free** and **open-source**. This means that source code is available for anyone to inspect, alter, and extend. Using open-source philosophy has many advantages for companies and individuals, even if they have access to commercial software. 

1. **Agility**. If you need to change tools or try something out, you can just do it. There's no need to make a hasty decision just because a license renewal is coming up, or stick with a suboptimal solution because you have 6 months left on your current license. 
2. **Community**. Open source development has become popular enough that the scrutiny on a given piece of code is often larger for an open-source project than for a closed-source one. This has implications for code quality, and it makes it easier to search the internet for solutions and ideas. Similarly, the number of third-party packages available for open source software is typically orders of magnitude larger than for proprietary software. This can make it easier to customize a solution for a particular set of needs.
3. **Integration**. Because open-source projects are a joint effort of the global scientific and development communities, significant effort has gone into making them work with one another. This often allows the user to use to choose the best tool for each aspect of the job at hand, transitioning between tools as necessary.
4. **Accessibility**. If you want to make your work available to others, you can take advantage of services like [CoCalc](https://cocalc.com) or [Binder](https://mybinder.org) or ask that people download the necessary software to their machines. If your work requires an expensive license to reproduce, your target audience is less likely to engage. 

Because of their advantages as open-source programming languages, Python and R dominate data science in industry. Many of the other tools we will discuss in this course have no real competition from commercial offerings.

---
> id: unix
## Unix

Unix is an operating system invented in the early 1970s at AT&T Bell Labs. Today there are many variants of Unix in wide use around the world, including the Linux operating systems and macOS. The key elements provided by a Unix-like operating system are 

1. a file system, consisting of folders which can nest and store files,
2. a set of programs, each serving a limited function, 
3. a **shell** which provides mechanisms for constructing workflows involving multiple programs and files.

[Continue](btn:next)

---
> id: shells

Several Unix shells are available, but the most popular ones provide approximately the same functionality and interface. The most popular shell is called **bash**. Bash is the default shell in macOS (Mojave and earlier) and some Linux distributions. As of 2016, you can also run bash [natively on Windows](https://docs.microsoft.com/en-us/windows/wsl/install-win10). If you are a Windows user, it is recommended that you go ahead and install the Windows Subsystem for Linux so you can use the same commands as Linux and Mac users. 

If you want to follow along below before you figure out your local setup, you can use the executable cells you see in this page (which are *bash* cells) or launch a [Binder instance](https://mybinder.org/v2/gh/jovyan/simple-python-stack/master) (select Terminal or bash from the *New* pull-down menu in the top right). The latter approach is recommended, because that environment provides some shortcuts that will be helpful to practice (like completing commands and file names when you hit the tab key). 

[Continue](btn:next)

---
> id: unix-navigation
### Navigation

When you first open the shell, you'll be in your **home [directory](gloss:directory)**. You can check this by [running](gloss:unix-run) the command `{sh} pwd` (which stands for *print working directory*). 

    pre(bash-executable)
      | pwd

On Linux, the users' home directories are in a directory called `{sh} /home/`, while on macOS they're in `{sh} /Users/`. Since your user name on Binder is `{sh} jovyan` (a sci-fi reference to a [term](https://en.wikipedia.org/wiki/Jovian_(fiction)) that means *an inhabitant of Jupiter*), the directory printed when you run the cell above is called `{sh} /home/jovyan`. The character `{sh} ~` has a special meaning: it is an alias for your home directory.

The string `{sh} /home/jovyan` is called a **path**. The forward slashes in a path separate directories, and each directory or file in the path is in the directory immediately to its left. For example, [[`{sh} jovyan`|`{sh} home`]] is a subdirectory of [[`{sh} home`|`{sh} jovyan`]]. 

The very first slash is the **root** directory, and all of the files and directories on the machine are nested in this directory. 

You can view the contents of the current directory with `{sh} ls`, and you can change directory using the `{sh} cd` command. If the initial slash is omitted, directory names are interpreted *relative* to the current directory. For example, you can navigate to `{sh} /Users/jovyan` from the `{sh} /Users` directory by running `{sh} cd jovyan`. Note that arguments are supplied to Unix commands by separating them with spaces following the name of the command. You can also navigate to containing folders using `{sh} ..`. For example, `{sh} cd ../../` navigates to the grandparent directory of the current directory. 

---
> id: step-mkdir

The `{sh} mkdir` command makes a new directory. So we can make a new directory, check that it's there, and navigate into it as follows: 

    pre(bash-executable)
      | mkdir example-directory
      
    pre(bash-executable)
      | ls
      
    pre(bash-executable)
      | cd example-directory

One extremely useful shortcut is to type an initial part of the file or directory name and hit the tab key to get the rest to pop up (note that this does not work in the cells above, but it will work on your own computer or on mybinder.org). You can also hit the tab key twice to get a list of possible completions. Using this tab completion feature is advised, for two reasons: (1) it saves typing time, and (2) it reduces spelling errors. If the shell is still completing directory names in your path as you type it, you can be sure that those directories are actually present in the operating system. If you insist on typing out the path in full, it takes significantly longer to catch mistakes.

Another time-saving device is the use of the up and down arrow keys to access previously used commands. You can see a list of what you've run in the shell with the `{sh} history` command. 

The position of the cursor in the shell cannot be controlled with your mouse or trackpad. Therefore, it is essential to master a few keyboard shortcuts to avoid having to press the forward and backward arrow keys dozens of times when you need to navigate the text at the prompt. 

* `{sh} ctrl-a` Move the cursor to the beginning of the line
* `{sh} ctrl-e` Move the cursor to the end of the line
* `{sh} ctrl-l` Clear the screen
* `{sh} ctrl-c` Quit the command that is currently running
* `{sh} alt-f` Move the cursor forward one word (`{sh} esc-f` on macOS)
* `{sh} alt-b` Move the cursor backward one word (`{sh} esc-b` on macOS)

Note that you can't directly use a space character in a Unix path name, because it would be interpreted by bash as an argument separator. To accommodate a file with a space in its name, *escape* the space by putting a backslash in front of it. For example, `{sh} cd My\ Essays` would change directory into a folder called "My Essays".

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
* `{sh} vim` Open an editor for making changes to a file

Many commands in bash take [*options*](gloss:bash-options) (analogous to keyword arguments in Python) which modify how they run. For example, `{sh} rm -i` gives you an interactive session where you can say for each file whether you want to delete it. Some options can themselves take arguments, in which case those arguments should be listed directly after the option. For example, `{sh} head -n 20 data.txt` prints the first 20 lines of the file `{sh} data.txt`. You can read about the options a command takes by viewing its man page (for example, `{sh} man head`).

### Vim

Vim is the only command line text editor which is almost always available on Unix systems. As a result, you will sometimes find yourself needing some basic familiarity with it, even if you use another editor for the bulk of your work. Furthermore, vim is designed to prioritize efficiency over intuitiveness, so it's really helpful to learn a few vim ideas before you need them. To practice with Vim, open this course's [Binder page](https://mybinder.org/v2/gh/sswatson/utilities-course/master), open a new Terminal ("New", top right), and run `{sh} vim tmp.txt`. Alternatively, you can run vim in your own Terminal if you have macOS or Linux, or you can download it for Windows. 

The most important distinction between vim and most other text editors is that it has multiple **modes**, the main ones being *insert* mode and *command* mode. Insert mode is similar to what other editors provide: keystrokes you type appear as characters in the file. Command mode is for performing various actions on the file. 

A vim session often opens to command mode by default. To activate insert mode, press `{sh} i`. To get back to command mode, press the escape key. To save a file, type `{sh} :w` while in command mode and press enter. To close the file, type `{sh} :q` from command mode and press enter. To force exit vim, type `{sh} :q!` while in command mode and press enter. 

To undo and redo, use `{sh} u` and `{sh} ctrl-r`. Copy and paste are `{sh} yy` and `{sh} p`; Page up and page down are `{sh} ctrl-u` and `{sh} ctrl-d`.

### Variables

Bash supports variable definition using similar syntax to Python. The main differences are (1) spaces *cannot* be used around the equals sign, and (2) variable names are conventionally all upper case. Another distinction from Python is that a dollar sign is required to access a variable's value: 

    pre(bash-executable)
      | MY_FAVORITE_NUMBER=3
      | echo $MY_FAVORITE_NUMBER

The command `{sh} echo` simply prints its arguments. Some special variables are available in a bash session without you having to define them yourself. For example, if you run `{sh} echo $PATH`, you'll see a colon-separated list of directories. These are the directories where `{sh} bash` searches for [executable](gloss:executable) files when you run a command. You can see which executable is being run for a given command name using the `{sh} which` command. For example `{sh} which echo` prints `{sh} /bin/echo`. If you look in the `{sh} /bin` directory, you'll see that many of the bash commands we've defined live there. 

Utilities you install on your computer often make their [executables](gloss:executable) available at the command line by modifying `{sh} PATH`. This is done by inserting a line of code in your **bash profile**, which is a file with a special name that is executed every time you start a bash session. For example, if you have a directory, say `{sh} Users/jovyan/anaconda3/bin`, which contains executables that you want to be able to run from the command line, you can add the line 

    pre(bash-executable)
      | export PATH="/Users/jovyan/anaconda3/bin:$PATH"

to `{sh} ~/.bash_profile` (the `{sh} ~` refers to your [[home directory|root directory|current directory]]). 

In the command `{sh} export PATH="/Users/jovyan/anaconda3/bin:$PATH"`, the dollar sign is used to access the original value of `{sh} PATH` (so that you're adding to the set of `{sh} PATH` directories, not replacing all of the ones that were stored in `{sh} PATH` previously), and the `{sh} export` command makes the new value of `{sh} PATH` available to the bash session (rather than just the `{sh} ~/.bash_profile` script). 

If you try to run a command and bash says `{sh} command not found`, one strong possibility is that the executable file that should run that command is "not on your PATH" (a phrase you will see often on StackOverflow!). The solution to this problem is to locate the executable's directory—usually by searching the internet to figure out where the installer puts the executable by default—and edit your `{sh} ~/.bash_profile` accordingly.

---
> id: piping
### Piping

The output of a command like `{sh} echo $PATH`, which prints to the screen by default, may be redirected to a file using the operators `{sh} >` or `{sh} >>` or fed as input to another bash command on the same line using the **pipe** operator `{sh} |`. The difference between `{sh} >` and `{sh} >>` is that the former eliminates whatever might have been in the file previously, and the latter appends to the end of the target file's current contents. 

For example, `{sh} tmp.txt` will contain two lines of text after these two commands are run:

    pre(bash-executable)
      | echo "This is the first line" > tmp.txt
      | echo "This is the second line" >> tmp.txt
      
You can check that this worked as expected by running [[`{sh} cat tmp.txt`|`{sh} touch tmp.txt`|`{sh} ls tmp.txt`]]: 

    pre(bash-executable)
      | 

---
> id: piping-2

**Piping** is the mechanism for *composing* commands in Unix. For example, 

    pre(bash-executable)
      | echo "The quick brown fox jumped over the lazy dog" | wc

forwards the text returned by the first command to the `{sh} wc` command, thereby counting the number of lines, words, and characters in the sentence `{sh} "The quick brown fox jumped over the lazy dog"`. 

::: exercise
**Exercise**  
Write a three-command pipe, using `{sh} cat`, `{sh} head` and `{sh} tail`, prints the portion of a document `{sh} mydoc.txt` between lines 100 and 110. 
:::

    pre(bash-executable)
      | 
      
    .quill#editor
    
---
> id: pipe-sol-1
    
*Solution*. If we select the first 110 lines, then the desired lines are the last 11 lines of that selection. So we can do 

    pre(bash-executable)
      | cat mydoc.txt | head -n 110 | tail -n 11

---
> id: glob-patterns
### Glob Patterns

Performing actions on a single file at a time can get pretty time-consuming if there are many files involved. Consider, for example, a directory with 1000 images files, one for each frame of a short video. Suppose the images are named `{sh} img000.png`, `{sh} img001.png`, and so on. If you want to move all of these files into a subdirectory called `{sh} frames`, you can do 

    pre(bash-executable)
      | mkdir frames
      | mv img*.png frames/

The asterisk in the file name is telling the command to act on every file whose name looks like `{sh} img`, followed by any number of other characters, followed by `{sh} .png`". We call `{sh} img*.png` a **glob** pattern (short for *global*). The asterisk is a **wild card**. The other common wildcards are `{sh} ?`, which matches any *single* character, and expressions like `{sh} [a-e]` which match any single character in a given range of characters. You can also list out the characters to match: `{sh} [aeiou]` matches any lowercase vowel.

::: exercise
**Exercise**  
Which of the following names match the glob pattern `{sh} [aA]nswer.*`?

   x-picker.list
      .item.pill.bblue `{sh} answer.1.txt`
      .item.pill.bblue(data-error="incorrect") `{sh} my-answer.py`
      .item.pill.bblue `{sh} Answer.tex`

:::

    .quill#editor
    
*Solution*. The first and third options match. The second one doesn't because the pattern specifies that the first character must be uppercase or lowercase `{sh} a`.     

---
> id: version-control
## Version control

Managing your files by simply saving them in folders on a hard drive runs afoul of some core concerns of anyone working on a computer for a living:

1. **Preserving your work**. It's easy to accidentally overwrite a file containing significant amounts of work. Depending on how much work is lost, this can be devastating. Pixar, for example, deleted nearly all of *Toy Story 2* when an errant `{sh} rm -r -f *` command was executed (the `{sh} -r` and `{sh} -f` flags mean "recursive" and "force", respectively). They were saved by the Supervising Technical Director, who had made a copy of the file tree so she could work from home after giving birth to her son.

[Continue](btn:next)

---

2. **Tracking history**. If you have a way to know what you did and when you did it, you can perform more dynamic operations on your content. For example, suppose you recently made two rounds of edits on a document, and you decide that the first round should be discarded, because the circumstances that motivated those edits has changed. If you have a way to isolate the first-round edits, it's possible you'll be able to do that in an automated way. Otherwise, you'll have to do it manually.

[Continue](btn:next)

---

3. **Managing versions**. Slightly different use cases often require you to maintain different versions of a given codebase. For example, clients might have different requirements that require custom modifications. If you choose to maintain these versions in separate directories, you have to deal with transferring any changes to the common part of the codebase to all of the different copies. This quickly becomes a major maintenance headache. 

[Continue](btn:next)

---

4. **Facilitating teamwork**. Each team member should have maximum flexibility to work on a project and have that work reflected in their teammates' copies of the project. Some care must be taken to achieve this, because if two people make changes to the same file at the same time, their new versions must be merged. 

Software designed to address these concerns is called **version control**. We will be working with a specific version control system called `{sh} git` which was created by Linus Torvalds in 2005 and has since grabbed a plurality of the version control market share among software developers. 

[Continue](btn:next)

---
### Git main concepts
> id: git-concepts

Git keeps a record, called a **repository**, of the history and versions of the contents of a particular directory (including its subdirectories, their subdirectories, and so on). The typical setup is to create a single directory for all of the files relevant to a given project and initialize a repository in that directory.

Git uses two components to manage a repository in a given directory: a command-line program called `{sh} git` and a [hidden subdirectory](gloss:hidden-directory) called `{sh} .git`. Commands are issued to `{sh} git` to manipulate the contents of `{sh} .git`.

Unlike syncing services like Dropbox or Google Drive, Git doesn't do anything automatically. All interactions are deliberate. This is helpful, because it means that changes made by a colleague won't be uninvitedly pushed to your machine where they might break your environment. 

Conceptually, a git repository consists a collection of complete snapshots of the directory contents. These snapshots are called **commits**. The commit immediately preceding a given commit is called its **parent**. Commits and parent-child relationships between commits are the fundamental constructs of a Git repository.

Changes in a Git project migrate through a series of zones. When you make changes in your directory, Git initially knows nothing about them. You **stage** your changes to a staging area, then **commit** them to the repository. A project involving multiple contributors typically has a remote copy of the repository on a website like GitHub. When you are ready for your colleagues to get your changes, you **push** your local repository to the remote repository. 

    figure
      img(src="images/git-sections.svg")
      p.caption.md Changes in a Git project are staged, committed, and pushed to a remote repository.

Why does Git have so many zones? The staging area is necessary to help you distinguish files you want Git to track from files you don't want Git to track, and to provide an area to prepare for a well-organized commit. And having both local and remote copies of the repository allows you to make commits even when you don't have network access. Although this workflow might seem at first to be overly complicated, its benefits for flexibility and organization are often regarded as a positive distinguishing feature of Git (as compared to version control systems with fewer zones). 

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

Typically you will want to **merge** the changes from your branch back into master. In the example above, the `{code} mybranch` commit is a descendant of the `{code} master` commit. In this case, there is no potential for conflicts, and the merge can be performed by simplying pointing `{code} master` to the same commit as `{code} mybranch`. This is called a **fast-forward** merge. At this point, it's safe to delete the `{code} mybranch` pointer.

    figure
      img(src="images/git-split-ff.svg")
      p.caption.md If no commits have been added to `{code} master`, the changes in `{code} mybranch` can be merged into master by simplying moving the `{code} master` pointer forward. This is called a **fast-forward** merge. 
      

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

Next, let's create a file for our initial commit. The git command for staging a file is `{sh} git add`. The `{sh} --all` option stages all of the files in the current working directory.

    pre(bash-executable)
      | echo 'Once upon a time,' > chapter-1.txt
      | git add chapter-1.txt # or git add --all
      
We can inspect the status of our working directory and repository using `{sh} git status`. 

    pre(bash-executable)
      | git status

The contents of the staging area are indented under the heading `{sh} Changes to be committed`. 
      
Now we can commit the staged changes, including a descriptive **commit message** with `{sh} -m`: 

    pre(bash-executable)
      | git commit -m 'Initial commit'

We can display a record of commits using `{sh} git log`. 

    pre(bash-executable)
      | git log
      
You'll notice that commits are identified by a long hexadecimal string like `{code} d9599305d257a40c0b394a1af78dfe995f0010c7`. This string is a [hash](gloss:hash) of all of the data relevant to the commit. The name `{sh} HEAD` is a pointer to the branch you're currently on, so `{sh} HEAD -> master` indicates that the `{sh} master` branch is the currently **checked out** branch. 

[Continue](btn:next)

---
> id: git-lol

The output of the `{sh} git log` command is more helpful with a few of its options in their non-default state. Let's go ahead and make a git alias so we don't have to type all of these options out every time. We'll use the name `{sh} lol`, which is a customary choice for this alias.

    pre(bash-executable)
      | git config --global alias.lol "log --graph --decorate --all --oneline"
      | git lol

Finally, if we want to store a copy of the repository on GitHub, we visit github.com and create a new repository. Then we connect our local Git repository to the remote one we just created.

    pre(bash-executable)
      | git remote add origin git@github.com:jovyan/MyRepo.git
      | git push --set-upstream origin master

where `{sh} jovyan` is replaced by your actual GitHub name, and `{sh} MyRepo` is replaced by your repository's name. The first line makes the connection to the remote repository and names it `{sh} origin`, while the second line sets the default remote repository to `{sh} origin` and pushes to GitHub. Note that the `{sh} --set-upstream origin master` part is only necessary on the first push; subsequent pushes can be done with `{sh} git push`.

It's a good habit to begin each work session by running `{sh} git pull` to fetch any changes that have been pushed by collaborators to the remote repository and merge those changes into your working directory. This operation aborts if you have changes in your working directory that conflict with the changes from the remote repository. One good way to resolve this issue is to `{sh} stash` your local changes and then `{sh} apply` them after you `{sh} pull`.

    pre(bash-executable)
      | git stash
      | git pull
      | git stash apply

The command `{sh} git stash` creates a new commit which is not on any branch, and `{sh} git stash apply` merges the latest stash into the current branch. 

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

Suppose we decide we do want to incorporate the dragons into the story. While we have the master branch checked out, we do 

    pre(bash-executable)
      | git merge dragons
      
Git tells us that this merge led to conflicts, and we'll have to resolve them before making merge commits. Let's look at the new contents of `{sh} chapter-1.txt`: 

    pre(bash-executable)
      | cat chapter-1.txt
      
The next step is to edit the file and commit it. Typically you would edit the file in a text editor, but here we'll do it with `{sh} echo`.

    pre(bash-executable)
      | 
      | 
      | echo 'Once upon a time..., in a galaxy far away..., there be dragons!' > chapter-1.txt
      | git commit -m "Merge the dragons into the story"
      | git lol
      
Now we can delete the `{sh} dragons` branch. Since branches are just pointers to commits, this operation does not result in the loss of any snapshots in our project history.

    pre(bash-executable)
      | git branch -d dragons

---
> id: undoing-changes
### Undoing changes

Suppose you want to have a look at the state of your novel one commit ago. You refer to the commit which is any number of commits back using a tilde followed by the desired number of commits, as in `HEAD~1`. The `{sh} git show` command lets us extract a single file from a given commit: 

    pre(bash-executable)
      | git show HEAD~1:chapter-1.txt

Alternatively, you can refer to a particular commit by a distinguishing initial segment of its hash (note that you'll have to `{sh} git lol` to get an appropriate commit identifier for your session before you can run this cell):

    pre(bash-executable)
      | git show 06d23b9:chapter-1.txt

We can see just the changes between two commits with a `{sh} diff`:

    pre(bash-executable)
      | git diff HEAD HEAD~1 chapter-1.txt
      
Let's say you decide you want to go back to the version of a file two commits ago. You can `{sh} checkout` a single file. 

    pre(bash-executable)
      | git checkout HEAD~2 chapter-1.txt
      | git status

This operation changes the file in the local working directory. You can then stage and commit that change, or edit the file further and then stage and commit.

---
> id: package-management
## Package management

Suppose you've written a Python module that you want to share. Other users will have to get your code and perform some setup operations, including making their Python environment aware of your package so they can `{code} import` it. Ideally you'd communicate information about any other modules that your module requires, so that users can make sure they have all of the requirements before they try to use your module. When you make improvements to your code, you'd like for your users to be able to get those changes without having to go through installation steps again. 

These code distribution challenges are difficult to manage manually, so developers have built systems designed to automate code distribution processes. These systems are called **package managers**. The main package managers for Python are **Pip** and **Anaconda**. Pip is a general Python installer, installing packages from the [Python Package Index](https://pypi.org). *Anaconda* is more geared toward data science, and it installs packages from its own collection called [Anaconda Repository](https://repo.continuum.io/).

We recommend [installing Anaconda](https://docs.anaconda.com/anaconda/install/) and using it to manage your packages (except when a package is only available through Pip). Anaconda has a couple of important advantages over Pip: 

1. Anaconda ensures that all requirements of all available packages are satisfied. Pip updates your environment when you install a package based on *that* package's requirements. Such an update might break previously installed packages, since they might depend on a different version of the same package.

2. Anaconda provides built-in support for managing multiple *virtual environments*. If Package A and Package B have incompatible versions of Package C, you can set up one virtual environment with Package A and one version Package C, and a second virtual environment with Package B and another version of Package C. 

---
> id: virtual-environments
### Virtual Environments

Your Python **environment** is the set of packages you have available to `{sh} import` in a Python session. For example, an environment often include all of the packages installed on the computer. A **virtual environment** emulates a Python environment by exposing specific packages (and specific versions of those packages) to the Python interpreter. Virtual environments are useful because they allow you to quickly switch between different sets of available packages. They also make it possible to be confident about exactly what packages are needed for a given application, and to distribute that information to users of the package.

For example, if you need NumPy 1.16.3 for one project and NumPy 1.16.4 for a different project, your package manager can install *both* versions and just change which one is used when you execute `{py} import numpy`. This is much more convenient than uninstalling one version and installing the other every time you need to switch between the two projects. 



---
> id: jupyter
## Jupyter

---
> id: vs-code
## VS Code

---
> id: markdown
## Markdown

---
> id: regular-expressions
## Regular Expressions