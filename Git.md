# Git And Advanced Version Control

-- *Estimation time: 3 Days*

---

Git is a free and open source distributed version control system.

The reason you are learning it is because Git is the most popular version control system in developing. It is also used in the next steps of your learning process.

Requirements:

- Linux Command line interface

---

Make sure you understand the learning concepts but **Don't memorize them**!

***Learning objectives:***

After completing this learning path, you'll be able to

- Control the version of your code
- Collaborate with other developers
- Share your code with others
- Track your code changes

---
*Send me back [home](home)*

[[*TOC*]]

---
**Learning note**: all links in this path are reading tutorials. You can read them but you can watch a youtube crash course on git or just play with the commands by yourself.
If you find useful links, please share them with me.

Make sure you can perform all the commands live (with google help). You'll be tested on this.

Here are some examples links:

- [Youtube crash course](https://youtu.be/SWYqp7iY_Tc)
- [git-tutorial](https://git-scm.com/docs/gittutorial)

# Set up git

Git is a version control system for tracking changes in files and coordinating work among multiple people.

## Install git

Open Terminal and enter:

```bash
sudo apt-get install git
```

*(If you don't use [WSL](#1-set-up-wsl-optional) look up how to install git on windows)*

## Git config file setup

The Git configuration file contains a number of variables that affect the Git commands' behavior. The `.git/config` file in each repository is used to store the configuration for that repository, and `$HOME/.gitconfig` is used to store a per-user configuration as fallback values for the .git/config file.

We will use this [`git-config`](https://git-scm.com/docs/git-config) to set up the  Git configuration file.

Replace `"Your Name"` with your preferred username:

```bash
git config --global user.name "Your Name"
```

Replace `"youremail@domain.com"` with your email:

```bash
git config --global user.email "youremail@domain.com"
```

## Configure Connection with the remote (Recommended)

Git uses several protocols for client-server communication. SSH and HTTPS are secure protocols. As a result, many git servers, such as Github, Bitbuckets, and GitLab, use those two popular cryptographic network protocols.

### **HTTPS**

HTTPS is a secure version of HTTP that encrypts data transmitted between the client and the server.

Starting git with HTTPS for cloning, pulling, and pushing is much easier and can be done with much less setup.

If you use HTTPS URLs on the command line to get a remote repository, git fetch, git pull, or git push, git will ask for a username and password.

### **SSH**

SSH means "Secured Shell". It is also a secured version, where data sent between the client and server is encrypted.

- How does SSH work? (Enrichment - Optional)

### Create a new SSH key

Open terminal and type:

```bash
ssh-keygen
```

Press `Enter`. Output similar to the following is displayed:

```bash
Generating public/private rsa key pair.
Enter file in which to save the key (/home/username/.ssh/id_rsa):
```

Accept the suggested filename and directory.

Specify a [passphrase](https://www.ssh.com/academy/ssh/passphrase) if you like.

A public and private key are generated. Add the public SSH key to your Remote account and keep the private key secure.

### Add the public SSH key to gitlab

*In github and bitbucket the process is the same*

You can read this for more details:  [add-an-ssh-key-to-your-gitlab-account](https://docs.gitlab.com/ee/user/ssh.html#add-an-ssh-key-to-your-gitlab-account).

1. Copy the contents of your public key file

    ```bash
    cat ~/.ssh/id_rsa.pub | clip
    ```

2. Your avatar > Preferences > SSH Keys > Add SSH Key

3. Paste the contents of your public key file into the `key` box.

4. In the Title box, type a description, like `Work Laptop`

Verify that you can connect using `ssh`!

```bash
ssh -T git@gitlab.com
```

# Git basics

Learn the basic git commands and how to use them.

Try it yourself!
Init a git repo and create commits and branches. merge them and play with the git commands.

Understanding the practical use of git will help you to understand the next steps.
In the next chapter we dive more deeply into the concepts.

# Git Basic uint - The commit

## Commits creation

Make sure you know the following commands:

- `add`
- `commit`
- `log`
- `status`
- `diff`
- `stash`

### Commit message convention

Commits messages have two parts:

- The title
- The body

The body is optional. Even though I think it is a good idea to write a body, most of the time the message is only the title.

There is several conventions for commit messages but they Follow the same general rules.

Here is *our* convention for commits title:

- Commit messages start with a Capital letter - `Add commit message` (not `add commit message`)
- Commit messages start with a verb - `Add text1` (not `Text1 commit`)
- The verb should be present-tense, imperative-style - `Fix bug x` (not `Fixing bug x`, `Fixed bug x`) - an explanation for people who hate present-simple: Think: *'If I use the commit I will ... (Add a feature, fix a bug etc.)*

***Note:*** It is often helpful when you are creating temporary commits to write down for yourself that they are temporary and what for. For example:

```git
TEMP try to fix a bug - not working
FIXUP a previous commit
WIP work in progress
```

That way it is easier to perform rebases.

### Questions - Commit Creation

#### **Commit Hash**

1. What is the commit hash?
2. How is it made?
3. Based on the previous question, what can change the commit hash?
4. So, What is the point of this hash recipe?

#### **Commit code**

1. How much code should be in one commit?
2. Can the same code be in different commits?

#### **Commit Workflow**

1. How do I commit changes to previous commits?
2. When should I commit?
3. How can I see what's added in each commit?

**`commit` VS `stash`:**

1. What's the benefit of `commit`? What's the benefit of `stash`?
2. Based on the previous question, when should I use which one?

## Moving Pointers in git

Make sure you know the following commands:

- `reset`
- `checkout`
- `revert`
- `reflog`

### Undo a git operation

Many think that git reflog operates kind of like `ctrl-z` - undo situation.
This is not the correct way to think about it. And it becomes impossible to track all the git operations in reverse order.

Think about the reflog as a list of pointers and hints about what was "saved" in them. For example, if you lost a pointer for a commit, look for a git operation that represents the commit like `commit` or `checkout`.

### Questions - Moving Pointers

#### **Delete commit**

1. How do I delete a commit?
2. What are the three types of `reset`? when should I use each one?
3. What's the difference between `reset` `revert` and `rm`?
4. Why should I never want to use `revert`?

#### **Pointers**

1. What does git save in order to manage the version control?
2. What is `HEAD`? How do I change it? What is `HEAD^^` and `HEAD~2`?
3. How does branching works? Why is it implemented that way?
4. How do I move a branch to point to a specific commit in my history?
5. How do I move a branch to a different pointer (What can be a pointer for this)?
6. Can reset add code to my HEAD? Can it add a commit?
7. What happens to the commit when I reset them?

#### **Undoing reset**

1. How do I undo a reset when I have the pointer?
2. How do I undo a reset when I don't have the pointer?

# Compose commits - branches

make sure you know the following commands:

- `checkout`
- `branch`
- `merge`
- `rebase`

## Questions

### **Branches**

1. What is a branch? What should be in a branch?
2. What is `master`/`main`? For what purpose they are used?

### **Union of branches**

1. What is the difference between `merge` and `rebase`?
2. What is the benefit of `merge`? What is the benefit of `rebase`? You can use this topic in your answer:
    - Creation and Conflict resolution
    - Undoing the union
    - History changes
    - History log (story-telling)
3. Based on the previous question, when should I use which one?
4. When are the merge and rebase results are the same?

### **Conflicts**

1. What are conflicts? When do they happen?
2. How do I resolve conflicts?

### **Modified commits**

1. How can I modify a commit in the branch's history?
2. Is it possible to modify a commit in the history by using `reset`? how? why?
3. How can modified commits can be scaled? What will happened when there are large changes to multiple files across multiple commits in a large code-base?

    *If you don't understand this question, we will return to it in the [Project chapter](#wrapping-up---git-project).*

# VS Code GUI - Git (Optional)

Learn how to use the GUI of git.
You can read this article [version control git-support](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support).

1. How do I `add`, `commit` and `reset` from the VS code GUI?
2. How do I `diff` changes?
3. How do I solve conflicts in the VS code editor?

You can use the VS code GUI according to your comfort.

# Git Workflow

Make sure you know the following commands:

- `remote`
- `push`
- `pull`
- `fetch`
- `clone`
- `fork`

## Question

### **Remote code**

1. What is *"Remote"*? what is `origin`?
2. How can a project can have multiple remotes?
3. How does `origin/branch` can differ from `branch`? How do you set them back?
4. How does the local repo "know" that something happened in the remote?

## Workflow

### Start working on a git project

It's better to initialize a project on the remote. The remote offers an initializing commit and basic README.md file. Some remotes offer more standardized files depending on the language.

Whether you have a git project or not, you can start working on it by cloning the project on your computer.

```bash
git clone git@remote.com:/path/to/repo.git
```

### Develop on your local machine

Start a "split" in the history of `main` branch
by using:

```bash
git checkout -b feature-branch
```

#### **Branch Names**

There is no branch naming convention and it depends on the team and the project. But it is a good idea to use meaningful names which everyone will understand and can tell by the name what the branch is for.

For example, `dev` and `dev2` are not such great names for a branch...

Sometimes there is a "`master`"-like branch. which is used for the main development branch. Usually named `dev` or `development`, but make sure to protect this branch from unwanted pushes and irresponsible behavior.

***Side-note:***
If you have tab completion for the branch names then it is fine to use long branch names, but if not it is recommended to keep them short.

*Regularly push your work to the remote* - The rule is that you should loose your computer always without sorry about your work (Bummer for your computer).

#### **The `main` branch**

*Never Work on the `main` branch!*

The `main` branch is the operational branch. It is the "production-like" code - that is being used by others so if you change the history, it can break other's systems and create conflicts if they are developing on parallel branches.
Code can't just be pushed into this branch. (You can define in the remote that nobody is allowed to push to this branch).

In order to enter the `main` branch, you need to *Request* a merge! this process is called *"Merge Request"* (on Gitlab) and *"Pull Request"* (on GitHub) and shortly called *"PR"*.

### Reviewing

After you have requested a merge, you can see a PR (MR) in the *"Pull/Merged Requests"* tab.
Usually someone will review your MR and review your code. this process called *"Code Review"* or *"CR"*.

The code review is important to keep the shared code clean and without bugs. Also it is the best way to learn and evolve as a developer! don't be afraid to get a criticizing review, but also don't be shy to answer and argue about comments that you don't agree with (or understand). The final decision is to the code maintainer (sometimes that is you), but your opinion is important.

***NOTE:*** *In some [agile](https://www.atlassian.com/agile) [ci-cd](https://www.redhat.com/en/topics/devops/what-is-ci-cd) methodologies, the code review is skipped, and instead comments become future issues. There are benefits and drawbacks to this methodology. Can you tell what is the best for you?*

### Fixing Code

After you get a code review, you can fix the code.

**Fix the code in the same branch, and the corresponding commit!**

***NOTE:*** *Sometimes the maintainer will ask for new commits that fix the code review. This is fine and recommended but it demands to `squash` those commits before merging*

After the fixing and committing you can `push` your changes to the remote to same branch. The PR is automatically updated.

### Rebasing

Sometimes while coding and reviewing, and fixing, the `main` branch is updated, and may cause conflicts.
Even when there are no conflicts, our PR branch needs to have linear history compered to the `main` branch.

To organize the commits of our PR we will need to pull the `origin` `main` branch, and rebase with it.

There is a one line command for this (make it [alias](#git-aliases-optional)!)

```bash
git pull --rebase origin main
```

### Review, [again](#reviewing)

After pushing the rebased branch to the remote (Which will update the PR), the code will be reviewed again.

This is an iterative process of **Review** - **Fix** - **Rebase** until The maintainer decides to accept the PR.

### Fixing code that is already in the `main` branch

Sometimes there is a bug or code that needs fixing in the `main` branch.
In these cases we will create a new `branch` and fix the code. In very rare cases the maintainer will `revert` the merge request commit!

## Questions - Git Workflow

1. What is the `main` (pun intended) purpose of the workflow process?
2. When do I use the `merge` command locally? why?

# Git aliases (optional)

make sure you know the following commands:

- `config`

## Question - Git aliases

1. What is git alias?
2. How do you show all git aliases?

    Lets go meta! - make an alias to show all git aliases :smile:

3. What is `.gitconfig`? Where is it located?

4. What is `!git` in the `.gitconfig`?

[Attached]() to this project is my .gitconfig file. You can use it to build your awesome `.gitconfig`! Don't forget to share it with me. :joy:

# Wrapping Up - Git Project

***Lets write Space Book!***

***General hint:*** *Note that all chapter follow the order of this [tutorial](#git-basic-uint---the-commit), and you can use the "Learning Topic" link at every chapter.*

**Write Prologue:** - [Learning Topic](#commit-message-convention)

1. Init a new project on the remote, and clone it locally.
2. Create new dir named `private-ideas`.
3. Add `.gitignore` file to the project. add `private-ideas` to the `.gitignore` file.
4. `commit` it with appropriate message.

**Write Chapter 1:** - [Learning Topic](#commit-code)

1. Create a new branch called `chapter-1` from the `main` branch.
2. Add 3 files with `page-<n>.md` (in the workspace dir) with `<n>` represent the age number.
3. Create 3 corresponding commits.
4. At the end of page 3, add this text `# The spaceship is gone!`
5. Add this text to the last commit. Prove yourself that all the pages in the right commit.

**Write Chapter 2:** - [Learning Topic](#commit-workflow)

1. Create a new branch called `chapter-2`, which will point on the `chapter-1` branch.
2. Change the name of the last commit to `Add page 1 to chapter 2`.
3. Add a new line to this page (Did you rename the page?) and Commit it with the message `Add a mistake`.
4. Oops this is a mistake. I forgot that this new line souled be in the commit `Add page 1 to chapter 2`. My bad... Fix it.


**Write Chapter 3:** - [Learning Topic](#delete-commit)

1. Create a new branch called `chapter-3`, which will point on the **`chapter-1`** branch.
2. Make Chapter 3 empty with no commits expect `Initial commit`.
3. Log the all history with a graph. look at HEAD, and the branches pointers.

**Write Chapter 4:** - [Learning Topic](#pointers)

1. Create a new branch called `chapter-4`, which will point on the `chapter-3` branch.
2. Make chapter 4 point on chapter 2.
3. Add file name `this_is_not_a_book.txt` and commit it.
4. Make a branch called `chapter-4-ver-2` which will point on the `chapter-4` branch.
5. Reset the last commit to `Add page 1 to chapter 2`.
6. Oh no! I was confused between`chapter-4-ver-2` and `chapter-4`. Silly me.

    Swap the `chapter-4-ver-2` and `chapter-4` branches. Do not create a new branch!

**Write Chapter 5:** - [Learning Topic](#undoing-reset)

1. Create a new branch called `chapter-5` which will point on the `Add a mistake` commit.

**Write Chapter 6:** - [Learning Topic](#union-of-branches)

1. Create a new branch called `chapter-6` which will point on the `chapter-1`.
2. Create a file named `page-4.md`, add a line `# page-4` and commit it.
3. create a new branch called `chapter-6-ver-2` which will point on the `chapter-1` branch.
4. Create a file named `page-4.md`, add a line `page 4` and commit it.
5. Add a line `## What happens to the spaceship?` And commit it. (#section-5)
6. merge `chapter-6` into `chapter-6-ver-2`.
7. Resolve conflict such that page 4 look like this:

    ```md
    # page-4

    ## What happens to the spaceship?

    ```

8. Sorry, I meant to merge `chapter-6-ver-2` into `chapter-6`. Why, it's a problem? Fix it.
9. merge `chapter-6` into `main` branch.
10. Log the all history with a graph. What is the "story" log of the main branch?
11. As we learned in [Workflow](#workflow) we don't merge local branches into the `main` branch. Set back main to point on `origin/main`

**Write Chapter 7:** - [Learning Topic](#union-of-branches)

1. Create a new branch called `chapter-7` which will point on the `chapter-6`.
2. `reset --hard` the last commit (`Merge branch 'chapter-6-ver-2' into chapter-6`).
3. Create a new branch called `chapter-7-ver-2` which will point on the `chapter-6-ver-2`.
4. Log the all history with a graph. Notice that Chapter 7 is now in the same as Chapter 6 in section 5. We will rebase it instead of merging (As one should).
5. Rebase `chapter-7-ver-2` on top of `chapter-7`. Resolve the conflict.
6. I must be a real dumb, i meant to rebase `chapter-7` on top of `chapter-7`. Fix it. (*Hint: you dint have to use `reflog`*)
7. Log the all history with a graph. Compere `chapter-7` and `chapter-6`, Answer the question [union-of-branches](#union-of-branches) again.

**Write Chapter 8:** - [Learning Topic](#workflow)

1. Create a new branch called `chapter-8` which will point on the `main`. (As usual [workflow](#workflow))
2. Delete all the content of the `README.md` file.
3. Add this text to the readme:

    ```md
    # space book

    i am a space book

    ## the end
    ```

4. Commit the readme into three corresponding commits.

    `Add book title`

    `Add book body`

    `Add book end`

5. Push the branch `chapter-8` to the remote.
6. Open a PR from `chapter-8` to `main`.
7. Go to the pr and give yourself some feedback! Comment on each commit the following:

    `Add book title`: "Book title should be in Capital letters `Space Book`"

    `Add book body`:  "New Line Should start with a Capital letter `I`", "Add period at the end of the sentence", "Change commit message to `Add book content`"

    `Add book end`: "\`\`\`suggestion:-0+0The end\`\`\`"

8. Fix the commit in respect to the feedback.
9. What is the last shared commit between `chapter-8` and `origin/chapter-8`?
10. Push the branch `chapter-8` to the remote.
11. Approve the PR.

**Write Chapter 9:** - [Learning Topic](#modified-commits)

1. Create a new branch called `chapter-9` which will point on the `chapter-7`.
2. Organize your commit (Do you have redundant commits?).
3. Push the branch `chapter-9` to the remote, and make a PR from `chapter-9` to `main`.
4. Now we will use more robust way to modify commits. Let's say we have a huge bug in page-2, and some code to add to page-3.

    1. Fix the bug in page-2. Add this clever code to page-2:

        ```txt
                 \   /
                 .\-/.
             /\ ()   ()
            /  \/~---~\.-~^-.
         .-~^-./   |   \---.
              {    |    }   \
            .-~\   |   /~-.
           /    \  A  /    \
                 \/ \/
        ```

    2. Commit the fix to page-2 with temp name like `fix page-2` (Or `FIXUP page 2`).
    3. Add the code to page-3:

        ```txt
                         .___      
          ____  ____   __| _/____  
        _/ ___\/  _ \ / __ |/ __ \ 
        \  \__(  <_> ) /_/ \  ___/ 
         \___  >____/\____ |\___  >
             \/           \/    \/

        ```

    4. Commit the code to page-3 with temp name like `fix page-3` (Or `FIXUP page 3`).
    5. `rebase -i` with fixup (`f`) option and inject the fixes commit in the right places.
    6. Nice! push your branch to the remote.
    7. Approve the PR **after** you put `chapter-9` on top of `origin\main` branch.
    8. Pull the `main`.

**Epilog:**

Copy the commit `Add a mistake` to `chapter-3` branch. Resolve the conflict by accepting the all page-3.
`checkout` to the main and print all the commits in the graph.

How was your story??
I hope its look like this:

```git
* d8687de - (chapter-3) Add a mistake (58 seconds ago) <davidbk>
| *   17d2018 - (HEAD -> main, origin/main, origin/HEAD) Merge branch 'chapter-9' into 'main' (6 minutes ago) <David Ben Kalifa>
| |\  
| | * 5ac4d61 - (origin/chapter-9, chapter-9) Add page 4 (12 minutes ago) <davidbk>
| | * c5d4747 - Add page 3 (12 minutes ago) <davidbk>
| | * 5a1300e - Add page 2 (12 minutes ago) <davidbk>
| | * 26c65f5 - Add page 1 (12 minutes ago) <davidbk>
| | * 60a1d20 - Add .gitignore (12 minutes ago) <davidbk>
| |/  
| * c176136 - Merge branch 'chapter-8' into 'main' (33 minutes ago) <David Ben Kalifa>
|/| 
| * 9f65f71 - (origin/chapter-8, chapter-8) Add book end (34 minutes ago) <davidbk>
| * c05d5f4 - Add book content (34 minutes ago) <davidbk>
| * 8273b8f - Add book title (34 minutes ago) <davidbk>
|/  
| * 5cb8ab6 - (chapter-7) Add page 4 (5 hours ago) <davidbk>
| | *   926459b - (chapter-6) Merge branch 'chapter-6-ver-2' into chapter-6 (5 hours ago) <davidbk>
| | |\  
| | |/  
| |/|   
| * | fa9fbb0 - (chapter-7-ver-2, chapter-6-ver-2) Add page-4 (6 hours ago) <davidbk>
| | * aeccf29 - Add page 4 (6 hours ago) <davidbk>
| |/  
| * 4b12d43 - (chapter-1) Add page 3 (7 hours ago) <davidbk>
| | * f124f4a - (chapter-4-ver-2) Add this_is_not_a_book.txt file (7 hours ago) <davidbk>
| | * 2b7dcc1 - (chapter-4, chapter-2) Add page 1 to chapter 2 (7 hours ago) <davidbk>
| |/  
| | * afbb16f - (chapter-5) Add a mistake (7 hours ago) <davidbk>
| | * 1f10ea9 - Add page 1 to chapter 2 (7 hours ago) <davidbk>
| |/  
| * 204a1b3 - Add page 2 (7 hours ago) <davidbk>
| * 7121141 - Add page 1 (7 hours ago) <davidbk>
| * 0df7160 - Add .gitignore (8 hours ago) <davidbk>
|/  
* b99821f - Initial commit (8 hours ago) <David Ben Kalifa>
```

# Exam

Talk to your mentor about the exam.

# Worth knowing

- Tags
- Submodules

# Next Steps

Congratulations! You have completed the Git learning path. now you can control the source code of your space :smile:

Here is the [next](Web) step
