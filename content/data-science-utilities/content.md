
# Course Title

> id: intro
## Introduction

When it comes to data science, **tools matter**. Some workflows lead naturally to efficiency and insight, while others can leave you spending most of your time putting out fires. For example, it might take 15 minutes to go through a report and capitalize every instance of a word, but find-and-replace can do the job with no errors and in less than [[10|100|1000]] seconds. Merely being aware of the find-and-replace concept leads to significant time savings, because you can look up how to do it if you don't remember.

---
> id: step-1

In a similar way, taking advantage of the collective wisdom of the statistical and software development communities is a major productivity multiplier. Learning a reasonably complete set of tools and techniques up front spares you the inefficiency of trying out lots of possibilities and inevitably developing some bad habits along the way.

[Continue](btn:next)

---
> id: step-2

The set of programs and formats we will cover in the course aspires to be as close as possible to a canonical open source data science toolkit. In particular, all of the tools are widely used in industry or academia and have large user bases. 

However, some toolkit roles are filled by more than one popular program, so assembling a complete software suite does require making choices. You should feel free to substitute other tools when they fill the same needs and have comparable benefits to the ones we will discuss in this course. On the other hand, don't be too reluctant to appreciate the benefits of switching to something new. You can be surprisingly productive surprisngly quickly with a well-designed interface.

[Continue](btn:next)

---
> id: goals
### Goals

Learning from the principles of best practice offers several advantages to the data science practitioner:

1. **Efficiency**. It's preferable avoid taking far longer than necessary to perform common, often mundane tasks. 
2. **Correctness**. Getting incorrect results is harmful and potentially dangerous. Building good habits for organizing your work and avoiding common pitfalls can help you consistently achieve correct results. 
3. **Reproducibility**. A key component of transparency and confidence in your results is the ability for you and others to verify the analysis by re-running it. A workflow with *any* non-reproducible steps is not compatible with this goal, so it's important to learn how to rely on reproducible techniques.
4. **Clarity**. Workflows that incorporate opaque, ad-hoc elements or obscure the reasoning involved in each step make it more difficult to re-use your work, reproduce it, and put confidence in it. Best practices can help you highlight your reasoning and make your steps easily navigable.

---
> id: open-source-data-science
### Open Source Data Science

All of the software introduced in this course is **free** and **open-source**. This means that source code is available for anyone to inspect, alter, and extend. Using open-source philosophy has many advantages for companies and individuals, even if they have access to commercial software. 

1. **Agility**. If you need to change tools or try something out, you can just do it. There's no need to make a hasty decision just because a license renewal is coming up, or stick with a suboptimal solution because you have 6 months left on your current license.
2. **Community**. Open source development has become popular enough that the scrutiny on a given piece of code is often much larger for an open-source project than for a closed-source one. This has implications for code quality, and it makes it easier to search the internet for solutions and ideas. Similarly, the number of third-party packages available for open source software is typically orders of magnitude larger than for proprietary software. This can make it easier to customize a solution for a particular set of needs.
3. **Integration**. Because open-source projects are a joint effort of the global scientific and development communities, significant effort has gone into making them work with one another. This often allows the user to use to choose the best tool for each aspect of the job at hand, transitioning between tools as necessary.
4. **Accessibility**. If you want to make your work available to others, you can take advantage of services like [CoCalc](https://cocalc.com) or [Binder](https://mybinder.org) or ask that people download the necessary software to their machines. If your work requires an expensive license to reproduce, your target audience is less likely to engage. 

Because of their advantages as open-source programming languages, Python and R dominate data science in industry. Many of the other tools we will discuss in this course have no real competition from commercial offerings.

---
> id: unix
## Unix

Unix is an operating system invented in the early 1970s at AT&T Bell Labs. Today there are many variants of Unix in wide use around the world, including the Linux operating systems and macOS. The key elements provided by a Unix-like operating system are 

1. a file system, consisting of folders which can nest and store files,
2. a set of programs, each serving a limited function, 
3. a **shell** which provides mechanisms for combining programs and accessing files.

[Continue](btn:next)

---
> id: shells

Several shells are available, but they all provide approximately the same functionality and interface. The most popular shell is called **bash**. Bash is the default shell in macOS (Mojave and earlier) and some Linux distributions. As of 2016, you can also run bash [natively on Windows](https://docs.microsoft.com/en-us/windows/wsl/install-win10). If you are a Windows user, it is recommended that you go ahead and install the Windows Subsystem for Linux so you can use the same commands as Linux and Mac users. 

If you want to follow along without figuring things out on your own mahcine, you can launch a [Binder instance](https://mybinder.org/v2/gh/sswatson/simple-python-stack/master). Select Terminal from the New pull-down menu in the top right. 

[Continue](btn:next)

---
> id: unix-navigation
### Navigation

When you first open the shell, you'll be in your **home [directory](gloss:directory)**. You can check this by [running](gloss:unix-run) the command `{code} pwd` (which stands for *print working directory*). 

    pre(data-executable)
      | !pwd

On Linux, the users' home directories are in a directory called `{code} /home/`, while on macOS they're in `{code} /Users/`. Since my user name is `{code} sswatson`, my home directory is called `{code} /Users/sswatson`. You can use `{code} ~` as an alias for your home directory. 

The name `{code} /Users/sswatson` is called a **path**. The forward slashes in a path separate directories, and each directory or file in the path is in the directory immediately to its left. For example, [[`{code} sswatson`|`{code} Users`]] is a subdirectory of [[`{code} Users`|`{code} sswatson`]]. 

The very first slash is the **root** directory, and all of the files and directories on the machine are nested in this directory. 

You can view the contents of the current directory with `{code} ls`, and you can change directory using the `{code} cd` command. If the initial slash is omitted, directory names are interpreted *relative* to the current directory. For example, you can navigate to `{code} /Users/sswatson` from the `{code} /Users` directory by running `{code} cd sswatson`. Note that arguments are supplied to Unix commands by separating them with spaces following the name of the command. You can also navigate to containing folders using `{code} ..`. For example, `{code} cd ../../` navigates to the grandparent directory of the current directory. 

The `{code} mkdir` command makes a new directory. So we can make a new directory, check that it's there, and navigate into it as follows: 

    pre(data-executable)
      | !mkdir example-directory
      | !ls
      | !cd example-directory

In fact, you don't have to type a full file name to get the name to show up at the command line. You can type part of the file or directory name and hit the tab key to get the rest to pop up. You can also hit the tab key twice to get a list of possible completions. Using this tab completion feature is advised, for two reasons: (1) it saves typing time, and (2) it reduces spelling errors. If the shell is still completing directory names in your path as you type it, you can be sure that those directories are actually present in the operating system. If you insist on typing out the path in full, it isn't particularly easy to catch any mistakes you might make.

Another time-saving device is the use of the up and down arrow keys to access previously used commands. You can see a list of what you've run in the shell with the `{code} history` command. 

The position of the cursor in the shell cannot be controlled with your mouse or trackpad. Therefore, it is essential to master a few keyboard shortcuts to avoid having to press the forward and backward arrow keys dozens of times when you need to navigate within a command. 

* `{code} ctrl-a` Move the cursor to the beginning of the line
* `{code} ctrl-e` Move the cursor to the end of the line
* `{code} ctrl-l` Clear the screen
* `{code} ctrl-c` Quit the command that is currently running
* `{code} alt-f` Move the cursor forward one word (`{code} esc-f` on macOS)
* `{code} alt-b` Move the cursor backward one word (`{code} esc-b` on macOS)

Note that Unix path names cannot contain spaces. To accommodate a file with a space in its name, escape the space by putting a backslash in front of it. For example, `{code} cd My\ Essays` would change directory into a folder called "My Essays".

Here are some other important commands:

* `{code} mv`. Move a file from one directory to another 
* `{code} rm`. Remove a file
* `{code} cp`. Copy a file from one directory to another
* `{code} touch`. Create a file or update its last-modified time
* `{code} open`. Open a file (`{code} xdg-open` on Linux)
* `{code} cat`. Print the contents of a file to the terminal
* `{code} less`. View the contents of a file in a viewer
* `{code} man`. Show the documentation for a command
* `{code} head`. Print the first 10 lines of a file
* `{code} tail`. Print the last 10 lines of a file
* `{code} wc`. Count the number of words, lines, and characters in a file
* `{code} vim`. Open an editor for making changes to a file

Many commands in bash take [*options*](gloss:bash-options) (analogous to keyword arguments in Python) which modify how they run. For example, `{code} rm -i` gives you an interactive session where you can say for each file whether you want to delete it. Some options can themselves take arguments, in which case those arguments should be listed directly after the option. For example, `{code} head -n 20 data.txt` prints the first 20 lines of the file `{code} data.txt`. 

### Vim

Vim is the only command line text editor which is virtually always available on Unix systems. As a result, you will sometimes find yourself needing some basic familiarity with it, even if you primarily use a different editor. Furthermore, vim is designed to priorize efficiency over intuitiveness, so it's really helpful to learn at least a few vim ideas before you need them.

The most important distinction between vim and most other text editors is that it has multiple **modes**, the main ones being *insert* mode and *command* mode. Insert mode is most similar to what other editors provide: keystrokes you type appear as characters in the file. Command mode is for performing various actions on the file. 

The editor often opens to command mode by default. To activate insert mode, press `{code} i`. To get back to command mode, press the escape key. To save a file, type `{code} :w` while in command mode and press enter. To close the file, type `{code} :q` from command mode and press enter. To force exit vim, type `{code} :q` while in command mode and press enter. To undo and redo, use `{code} u` and `{code} ctrl-r`. Copy and paste are `{code} yy` and `{code} p`. Page up and page down are `{code} ctrl-u` and `{code} ctrl-d`. 

### Variables

Bash supports variable definition using similar syntax to Python. The main differences are (1) spaces *cannot* be used around the equals sign, and (2) variable names are conventionally all upper case. Another distinction from Python is that a dollar sign is required to access a variable's value: 

``` markup
MY_FAVORITE_NUMBER=3
echo $MY_FAVORITE_NUMBER
```

The command `{code} echo` simply prints its arguments. Some special variables are available in a bash session without you having to define them yourself. For example, if you run `{code} echo $PATH`, you'll see a colon-separated list of directories. These are the directories where `{code} bash` searches for [executable](gloss:executable) files when you run a command. You can see which executable is being run for a given command name using the `{code} which` command. For example `{code} which echo` prints `{code} /bin/echo`. If you look in the `{code} /bin` directory, you'll see that many of the bash commands we've defined live there. 

Utilities you install on your computer often make their [executables](gloss:executable) available at the command line by modifying `{code} PATH`. This is done by inserting a line of code in your **bash profile**, which is a file with a special name that is executed in full every time you start a bash session. For example, if you have a directory, say `/Users/sswatson/anaconda3/bin`, which contains executables that you want to be able to run from the command line, you can add the line 

``` markup
export PATH="/Users/sswatson/anaconda3/bin:$PATH"
```

to `{code} ~/.bash_profile` (on macOS). The dollar sign is used to access the original value of `{code} PATH` (so that you're adding to the set of `{code} PATH` directories, not replacing all of the ones that were stored in `{code} PATH` previously), and the `{code} export` command makes the new value of `{code} PATH` available to the bash session (rather than just the `{code} ~/.bash_profile` script). 

If you try to run a command and bash says `{code} command not found`, one strong possibility is that the executable file that should run that command is "not on your PATH" (a phrase you will see often on StackOverflow!). The solution to this problem is to locate the executable's directory and edit your `{code} ~/.bash_profile` accordingly.

---
> id: piping
### Piping

The output of a command like `{code} echo $PATH`, which prints to the screen by default, may be redirected to a file using the operators `{code} >` or `{code} >>` or fed as input to another bash command on the same line using the **pipe** operator `{code} |`. The difference between `{code} >` and `{code} >>` is that the former writes to a file eliminating whatever might have been in the file previously, and the latter appends to the end of a file. 

For example, `{code} tmp.txt` will contain two lines of text after these two commands are run:

``` markup
echo "This is the first line" > tmp.txt
echo "This is the second line" >> tmp.txt
```

Piping, meanwhile, 

---
> id: git
## Git

---
> id: conda
## Conda

---
> id: jupyter
## Jupyter

---
> id: vs-code
## VS Code

---
> id: markdown
## Markdown