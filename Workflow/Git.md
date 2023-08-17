# Git - Introduction

-- _Estimation time: 3 Days_

---

Git is a free and open source distributed version control system.

The reason you are learning it is because Git is the most popular version
control system in developing. It is also used in the next steps of your learning
process.

Make sure you understand the learning concepts but **Don't memorize them**!

---

_**Learning objectives:**_

After completing this learning module, you'll be able to

- Control the version of your code
- Collaborate with other developers
- Share your code with others
- Track your code changes

---

_Send me back [home](home)_

[[_TOC_]]

---

**Learning note**: all links in this path are reading tutorials. You can read
them but you can watch a youtube crash course on git or just play with the
commands by yourself. If you find useful links, please share them with me.

Make sure you can perform all the commands live (with google help). You'll be
tested on this.

Here are some examples links:

- [Youtube crash course](https://youtu.be/SWYqp7iY_Tc)
- [git-tutorial](https://git-scm.com/docs/gittutorial)

## Set up git

Git is a version control system for tracking changes in files and coordinating
work among multiple people.

### Install git

Open Terminal and enter:

```bash
sudo apt install git
```

check if git is installed:

```bash
git --version
```

_(If you don't use [WSL](setup) look up how to install git on windows)_

### Git config file setup

The Git configuration file contains a number of variables that affect the Git
commands' behavior. The `.git/config` file in each repository is used to store
the configuration for that repository, and `$HOME/.gitconfig` is used to store a
per-user configuration as fallback values for the .git/config file.

We will use this [`git-config`](https://git-scm.com/docs/git-config) to set up
the Git configuration file.

Replace `"Your Name"` with your preferred username:

```bash
git config --global user.name "Your Name"
```

Replace `"youremail@domain.com"` with your email:

```bash
git config --global user.email "youremail@domain.com"
```

> [Attached](.gitconfig) to this project is my .gitconfig file. You can use it to build your
> awesome `.gitconfig`! Don't forget to share it with me. :joy:

### Configure Connection with the remote (Recommended)

Git uses several protocols for client-server communication. SSH and HTTPS are
secure protocols. As a result, many git servers, such as Github, Bitbucket, and
GitLab, use those two popular cryptographic network protocols.

#### **HTTPS**

HTTPS is a secure version of HTTP that encrypts data transmitted between the
client and the server.

Starting git with HTTPS for cloning, pulling, and pushing is much easier and can
be done with much less setup.

If you use HTTPS URLs on the command line to get a remote repository, git fetch,
git pull, or git push, git will ask for a username and password.

#### **SSH**

SSH means "Secured Shell". It is also a secured version, where data sent between
the client and server is encrypted.

- How does SSH work? (Enrichment - Optional)

##### **Create a new SSH key**

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

A public and private key are generated. Add the public SSH key to your Remote
account and keep the private key secure.

##### **Add the public SSH key to gitlab**

(In github and bitbucket the process is the same)

You can read this for more details:
[add-an-ssh-key-to-your-gitlab-account](https://docs.gitlab.com/ee/user/ssh.html#add-an-ssh-key-to-your-gitlab-account).

1. Copy the contents of your public key file

   ```bash
   cat ~/.ssh/id_rsa.pub | clip.exe
   ```

2. Your avatar > Preferences > SSH Keys > Add SSH Key

3. Paste the contents of your public key file into the `key` box.

4. In the Title box, type a description, like `Work Laptop`

Verify that you can connect using `ssh`!

```bash
ssh -T git@gitlab.com
```

## Git basics

Learn the basic git commands and how to use them.

Try it yourself! Init a git repo and create commits and branches. merge them and
play with the git commands.

Understanding the practical use of git will help you to understand the next
steps. In the next chapter we dive more deeply into the concepts.

### Game Time (optional)

If you like to learn by a game, you can try this one:

[learn git branching](https://learngitbranching.js.org/)

## Git Basic uint - The commit

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

The body is optional. Even though I think it is a good idea to write a body,
most of the time the message is only the title.

There is several conventions for commit messages but they Follow the same
general rules.

Here is _our_ convention for commits title:

- Commit messages start with a Capital letter - `Add commit message` (not
  `add commit message`)
- Commit messages start with a verb - `Add text1` (not `Text1 commit`)
- The verb should be present-tense, imperative-style - `Fix bug x` (not
  `Fixing bug x`, `Fixed bug x`) - an explanation for people who hate
  present-simple: Think: _'If I use the commit I will ... (Add a feature, fix a
  bug etc.)_

_**Note:**_ It is often helpful when you are creating temporary commits to write
down for yourself that they are temporary and what for. For example:

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

- `checkout`
- `switch`
- `restore`
- `rm`
- `reset`
- `revert`
- `reflog`

### Undo a git operation

Many think that git reflog operates kind of like `ctrl-z` - undo situation. This
is not the correct way to think about it. And it becomes impossible to track all
the git operations in reverse order.

Think about the reflog as a list of pointers and hints about what was "saved" in
them. For example, if you lost a pointer for a commit, look for a git operation
that represents the commit like `commit` or `checkout`.

### Questions - Moving Pointers

#### **Delete commit**

1. How do I delete a commit?
2. What are the three types of `reset`? when should I use each one?
3. What's the difference between `reset` `revert` `rm` and `restore`?
4. Why should I never want to use `revert`?

#### **Pointers**

1. What does git save in order to manage the version control?
2. What is `HEAD`? How do I change it? What is `HEAD^^` and `HEAD~2`?
3. How does branching works? Why is it implemented that way?
4. How do I move a branch to point to a specific commit in my history?
5. How do I move a branch to a different pointer (What can be a pointer for
   this)?
6. Can reset add code to my HEAD? Can it add a commit?
7. What happens to the commit when I reset them?

#### **Undoing reset**

1. How do I undo a reset when I have the pointer?
2. How do I undo a reset when I don't have the pointer?

## Compose commits - branches

make sure you know the following commands:

- `checkout`
- `branch`
- `merge`
- `rebase`

### Questions - Compose commits

#### **Branches**

1. What is a branch? What should be in a branch?
2. What is `master`/`main`? For what purpose they are used?

#### **Union of branches**

1. What is the difference between `merge` and `rebase`?
2. What is the benefit of `merge`? What is the benefit of `rebase`? You can use
   this topic in your answer:
   - Creation and Conflict resolution
   - Undoing the union
   - History changes
   - History log (story-telling)
3. Based on the previous question, when should I use which one?
4. When are the merge and rebase results are the same?

#### **Conflicts**

1. What are conflicts? When do they happen?
2. How do I resolve conflicts?

#### **Modified commits**

1. How can I modify a commit in the branch's history?
2. Is it possible to modify a commit in the history by using `reset`? how? why?
3. How can modified commits can be scaled? What will happened when there are
   large changes to multiple files across multiple commits in a large code-base?

   _If you don't understand this question, we will return to it in the
   [Project chapter](#wrapping-up---git-project)._

## VS Code GUI - Git (Optional)

Learn how to use the GUI of git. You can read this article
[version control git-support](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support).

1. How do I `add`, `commit` and `reset` from the VS code GUI?
2. How do I `diff` changes?
3. How do I solve conflicts in the VS code editor?

You can use the VS code GUI according to your comfort.

## Git Workflow

Make sure you know the following commands:

- `remote`
- `push`, `--set-upstream`
- `pull`
- `fetch`
- `clone`
- `fork`

### Workflow

#### Start working on a git project

It's better to initialize a project on the remote. The remote offers an
initializing commit and basic README.md file. Some remotes offer more
standardized files depending on the language.

Whether you have a git project or not, you can start working on it by cloning
the project on your computer.

```bash
git clone git@remote.com:/path/to/repo.git
```

#### Develop on your local machine

Start a "split" in the history of `main` branch by using:

```bash
git checkout -b feature-branch
```

#### **Branch Names**

There is no branch naming convention and it depends on the team and the project.
But it is a good idea to use meaningful names which everyone will understand and
can tell by the name what the branch is for.

For example, `dev` and `dev2` are not such great names for a branch...

Sometimes there is a "`master`"-like branch. which is used for the main
development branch. Usually named `dev` or `development`, but make sure to
protect this branch from unwanted pushes and irresponsible behavior.

_**Side-note:**_ If you have tab completion for the branch names then it is fine
to use long branch names, but if not it is recommended to keep them short.

_Regularly push your work to the remote_ - The rule is that you should loose
your computer always without sorry about your work (Bummer for your computer).

#### **The `main` branch**

_Never Work on the `main` branch!_

The `main` branch is the operational branch. It is the "production-like" code -
that is being used by others so if you change the history, it can break other's
systems and create conflicts if they are developing on parallel branches. Code
can't just be pushed into this branch. (You can define in the remote that nobody
is allowed to push to this branch).

In order to enter the `main` branch, you need to _Request_ a merge! this process
is called _"Merge Request"_ (on Gitlab) and _"Pull Request"_ (on GitHub) and
shortly called _"PR"_.

#### Reviewing

After you have requested a merge, you can see a PR (MR) in the _"Pull/Merged
Requests"_ tab. Usually someone will review your MR and review your code. this
process called _"Code Review"_ or _"CR"_.

The code review is important to keep the shared code clean and without bugs.
Also it is the best way to learn and evolve as a developer! don't be afraid to
get a criticizing review, but also don't be shy to answer and argue about
comments that you don't agree with (or understand). The final decision is to the
code maintainer (sometimes that is you), but your opinion is important.

_**NOTE:**_ _In some [agile](https://www.atlassian.com/agile)
[ci-cd](https://www.redhat.com/en/topics/devops/what-is-ci-cd) methodologies,
the code review is skipped, and instead comments become future issues. There are
benefits and drawbacks to this methodology. Can you tell what is the best for
you?_

#### Fixing Code

After you get a code review, you can fix the code.

**Fix the code in the same branch, and the corresponding commit!**

_**NOTE:**_ _Sometimes the maintainer will ask for new commits that fix the code
review. This is fine and recommended but it demands to `squash` those commits
before merging_

After the fixing and committing you can `push` your changes to the remote to
same branch. The PR is automatically updated.

#### Rebasing

Sometimes while coding and reviewing, and fixing, the `main` branch is updated,
and may cause conflicts. Even when there are no conflicts, our PR branch needs
to have linear history compered to the `main` branch.

To organize the commits of our PR we will need to pull the `origin` `main`
branch, and rebase with it.

There is a one line command for this (make it [alias](#git-aliases-optional)!)

```bash
git pull --rebase origin main
```

#### Review, [again](#reviewing)

After pushing the rebased branch to the remote (Which will update the PR), the
code will be reviewed again.

This is an iterative process of **Review** - **Fix** - **Rebase** until The
maintainer decides to accept the PR.

#### Fixing code that is already in the `main` branch

Sometimes there is a bug or code that needs fixing in the `main` branch. In
these cases we will create a new `branch` and fix the code. In very rare cases
the maintainer will `revert` the merge request commit!

### Questions - Git Workflow

#### **Remote code**

1. What is _"Remote"_? what is `origin`?
2. How can a project can have multiple remotes?
3. How does `origin/branch` can differ from `branch`? How do you set them back?
4. How does the local repo "know" that something happened in the remote?

#### **Git Workflow**

1. What is the `main` (pun intended) purpose of the workflow process?
2. When do I use the `merge` command locally? why?

## Git aliases (optional)

make sure you know the following commands:

- `config`

### Question - Git aliases

1. What is git alias?
2. How do you show all git aliases?

   Lets go meta! - make an alias to show all git aliases :smile:

3. What is `.gitconfig`? Where is it located?

4. What is `!git` in the `.gitconfig`?

> [Attached](.gitconfig) to this project is my .gitconfig file. You can use it to build your
> awesome `.gitconfig`! Don't forget to share it with me. :joy:

## Wrapping Up - Git Project

_**Lets write Space Book!**_

_**General hint:**_ _Note that all chapter follow the order of this
[tutorial](#git-basic-uint---the-commit), and you can use the "Learning Topic"
link at every chapter._

**Write Prologue:** - [Learning Topic](#commit-message-convention)

1. Init a new project on the remote, and clone it locally.
2. Create new dir named `private-ideas`.
3. Add `.gitignore` file to the project. add `private-ideas` to the `.gitignore`
   file.
4. `commit` it with appropriate message.

**Write Chapter 1:** - [Learning Topic](#commit-code)

1. Create a new branch called `chapter-1` from the `main` branch.
2. Add 3 files with `page-<n>.md` (in the workspace dir) with `<n>` represent
   the page number.
3. Create 3 corresponding commits.
4. At the end of page 3, add this text `# The spaceship is gone!`
5. Add this text to the last commit. Prove yourself that all the pages in the
   right commit.

**Write Chapter 2:** - [Learning Topic](#commit-workflow)

1. Create a new branch called `chapter-2`, which will point on the `chapter-1`
   branch.
2. Change the name of the last commit to `Add page 3 to chapter 2`.
3. Add a new line to this page with the text `This is page 3 - chapter 2` and
   Commit it with the message `Add a mistake`.
4. Oops this is a mistake. Who could know! I forgot that this new line souled be
   in the commit `Add page 3 to chapter 2`. My bad... Fix it.

**Write Chapter 3:** - [Learning Topic](#delete-commit)

1. Create a new branch called `chapter-3`, which will point on the
   **`chapter-1`** branch.
2. Make Chapter 3 empty with no commits expect `Initial commit`.
3. Log the all history with a graph. look at HEAD, and the branches pointers.

   Your graph should look like this:

   ```git
   * 7c67cad - (chapter-2) Add page 3 to chapter 2 (61 seconds ago) <space-name>
   | * cf15fb8 - (chapter-1) Add page 3 (7 minutes ago) <space-name>
   |/
   * 9e37807 - Add page 2 (8 minutes ago) <space-name>
   * 9684685 - Add page 1 (8 minutes ago) <space-name>
   * ebd3885 - (main) Add .gitignore (10 minutes ago) <space-name>
   * 8975347 - (HEAD -> chapter-3, origin/main, origin/HEAD) Initial commit (12 minutes ago) <Space Name>
   ```

   If not it is ok! Do not continue... Just make it look like this.

**Write Chapter 4:** - [Learning Topic](#pointers)

1. Create a new branch called `chapter-4`, which will point on the `chapter-3`
   branch.
2. Make chapter 4 point on chapter 2.
3. Add file name `this_is_not_a_book.txt` and commit it.
4. Make a branch called `chapter-4-ver-2` which will point on the `chapter-4`
   branch.
5. Reset (hard) the last commit to `Add page 3 to chapter 2`.
6. Oh no! I was confused between`chapter-4-ver-2` and `chapter-4`. Silly me.

   Swap the `chapter-4-ver-2` and `chapter-4` branches. Do not create a new
   branch!

**Write Chapter 5:** - [Learning Topic](#undoing-reset)

1. Create a new branch called `chapter-5` which will point on the
   `Add a mistake` commit.
2. Log the all history with a graph. Your graph should look like this:

   ```git
   * 05b2320 - (chapter-4-ver-2) Create this_is_not_a_book.txt (3 minutes ago) <space-name>
   * 7c67cad - (chapter-4, chapter-2) Add page 3 to chapter 2 (13 minutes ago) <space-name>
   | * f36ad71 - (HEAD -> chapter-5) Add a mistake (14 minutes ago) <space-name>
   | * 137d2d8 - Add page 3 to chapter 2 (18 minutes ago) <space-name>
   |/
   | * cf15fb8 - (chapter-1) Add page 3 (20 minutes ago) <space-name>
   |/
   * 9e37807 - Add page 2 (20 minutes ago) <space-name>
   * 9684685 - Add page 1 (20 minutes ago) <space-name>
   * ebd3885 - (main) Add .gitignore (23 minutes ago) <space-name>
   * 8975347 - (origin/main, origin/HEAD, chapter-3) Initial commit (24 minutes ago) <Space Name>
   ```

   If not it is ok! Do not continue... Just make it look like this.

**Write Chapter 6:** - [Learning Topic](#union-of-branches)

1. Create a new branch called `chapter-6` which will point on the `chapter-1`.
2. Create a file named `page-4.md`, add a line `# page-4` and commit it.
3. Create a new branch called `chapter-6-ver-2` which will point on the
   `chapter-1` branch.
4. Create a file named `page-4.md`, add a line `page 4` and commit it.
5. Add a line `## What happens to the spaceship?` and amend it to previous commit.
6. merge `chapter-6` into `chapter-6-ver-2`.
7. Resolve conflict such that page 4 look like this:

   ```md
   # page-4

   ## What happens to the spaceship?
   ```

8. Sorry, I meant to merge `chapter-6-ver-2` into `chapter-6`. Why, it's a
   problem? Fix it.
9. merge `chapter-6` into `chapter-5` branch. Resolve the conflict.
10. merge `chapter-5` into `main` branch. What is the merge commit?
11. Log the all history _without_ a graph. What is the "story" log of the main
    branch?

    Log the all history without a graph, Your graph should look like this:

    ```git
    *   4c61fe9 - (HEAD -> main, chapter-5) Merge branch 'chapter-6' into chapter-5 (3 minutes ago) <space-name>
    |\
    | *   bea46bd - (chapter-6) Merge branch 'chapter-6-ver-2' into chapter-6 (8 minutes ago) <space-name>
    | |\
    | | * a199dd5 - (chapter-6-ver-2) Add page 4 (10 minutes ago) <space-name>
    | * | 8d1c0d2 - Add page 4 (12 minutes ago) <space-name>
    | |/
    | * cf15fb8 - (chapter-1) Add page 3 (34 minutes ago) <space-name>
    * | f36ad71 - Add a mistake (28 minutes ago) <space-name>
    * | 137d2d8 - Add page 3 to chapter 2 (32 minutes ago) <space-name>
    |/
    | * 05b2320 - (chapter-4-ver-2) Create this_is_not_a_book.txt (18 minutes ago) <space-name>
    | * 7c67cad - (chapter-4, chapter-2) Add page 3 to chapter 2 (28 minutes ago) <space-name>
    |/
    * 9e37807 - Add page 2 (35 minutes ago) <space-name>
    * 9684685 - Add page 1 (35 minutes ago) <space-name>
    * ebd3885 - Add .gitignore (37 minutes ago) <space-name>
    * 8975347 - (origin/main, origin/HEAD, chapter-3) Initial commit (39 minutes ago) <Space Name>
    ```

    If not it is ok! Do not continue... Just make it look like this.

12. As we learned in [Workflow](#workflow) we don't merge local branches into
    the `main` branch. Set back main to point on `origin/main`

**Write Chapter 7:** - [Learning Topic](#union-of-branches)

1. Create a new branch called `chapter-7` which will point on the `chapter-6`.
2. `reset --hard` the last commit
   (`Merge branch 'chapter-6-ver-2' into chapter-6`).
3. Create a new branch called `chapter-7-ver-2` which will point on the
   `chapter-6-ver-2`.
4. Log the all history with a graph. Notice that Chapter 7 is now in the same as
   Chapter 6 in section 5.

   **We will rebase it instead of merging (As one should)**.

   ```git
   *   4c61fe9 - (chapter-5) Merge branch 'chapter-6' into chapter-5 (8 minutes ago) <space-name>
   |\
   | *   bea46bd - (chapter-6) Merge branch 'chapter-6-ver-2' into chapter-6 (13 minutes ago) <space-name>
   | |\
   | | * a199dd5 - (HEAD -> chapter-7-ver-2, chapter-6-ver-2) Add page 4 (15 minutes ago) <space-name>
   | * | 8d1c0d2 - (chapter-7) Add page 4 (17 minutes ago) <space-name>
   | |/
   | * cf15fb8 - (chapter-1) Add page 3 (39 minutes ago) <space-name>
   * | f36ad71 - Add a mistake (33 minutes ago) <space-name>
   * | 137d2d8 - Add page 3 to chapter 2 (37 minutes ago) <space-name>
   |/
   | * 05b2320 - (chapter-4-ver-2) Create this_is_not_a_book.txt (23 minutes ago) <space-name>
   | * 7c67cad - (chapter-4, chapter-2) Add page 3 to chapter 2 (33 minutes ago) <space-name>
   |/
   * 9e37807 - Add page 2 (39 minutes ago) <space-name>
   * 9684685 - Add page 1 (40 minutes ago) <space-name>
   * ebd3885 - Add .gitignore (42 minutes ago) <space-name>
   * 8975347 - (origin/main, origin/HEAD, main, chapter-3) Initial commit (44 minutes ago) <Space Name>
   ```

5. Rebase `chapter-7-ver-2` on top of `chapter-7`. Resolve the conflict.
6. I must be a real dumb, i meant to rebase `chapter-7` on top of `chapter-7-ver-2`.
   Fix it. (_Hint: you don't have to use `reflog`_)
7. Log the history of `chapter-7` and `chapter-6`. Compere them and answer the
   question [union-of-branches](#union-of-branches) again.

   Your graph should look like this:

   ```git
   * dd17043 - (HEAD -> chapter-7) Add page 4 (43 seconds ago) <space-name>
   | *   4c61fe9 - (chapter-5) Merge branch 'chapter-6' into chapter-5 (17 minutes ago) <space-name>
   | |\
   | | *   bea46bd - (chapter-6) Merge branch 'chapter-6-ver-2' into chapter-6 (21 minutes ago) <space-name>
   | | |\
   | |_|/
   |/| |
   * | | a199dd5 - (chapter-7-ver-2, chapter-6-ver-2) Add page 4 (23 minutes ago) <space-name>
   | | * 8d1c0d2 - Add page 4 (26 minutes ago) <space-name>
   | |/
   |/|
   * | cf15fb8 - (chapter-1) Add page 3 (48 minutes ago) <space-name>
   | * f36ad71 - Add a mistake (42 minutes ago) <space-name>
   | * 137d2d8 - Add page 3 to chapter 2 (46 minutes ago) <space-name>
   |/
   | * 05b2320 - (chapter-4-ver-2) Create this_is_not_a_book.txt (31 minutes ago) <space-name>
   | * 7c67cad - (chapter-4, chapter-2) Add page 3 to chapter 2 (41 minutes ago) <space-name>
   |/
   * 9e37807 - Add page 2 (48 minutes ago) <space-name>
   * 9684685 - Add page 1 (48 minutes ago) <space-name>
   * ebd3885 - Add .gitignore (51 minutes ago) <space-name>
   * 8975347 - (origin/main, origin/HEAD, main, chapter-3) Initial commit (52 minutes ago) <Space Name>
   ```

**Write Chapter 8:** - [Learning Topic](#workflow)

1. Create a new branch called `chapter-8` which will point on the `main`. (As
   usual [workflow](#workflow))
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
7. Go to the pr and give yourself some feedback! Comment on each commit the
   following:

   `Add book title`: "Book title should be in Capital letters `Space Book`"

   `Add book body`: "New Line Should start with a Capital letter `I`", "Add
   period at the end of the sentence", "Change commit message to
   `Add book content`"

   `Add book end`: "\`\`\`suggestion:-0+0The End\`\`\`"

8. Fix the commit in respect to the feedback.
9. What is the last shared commit between `chapter-8` and `origin/chapter-8`?
10. Push the branch `chapter-8` to the remote.
11. Approve the PR.

**Write Chapter 9:** - [Learning Topic](#modified-commits)

1. Create a new branch called `chapter-9` which will point on the `chapter-7`.
2. Organize your commit (Do you have redundant commits that need a `squash`?).
3. Push the branch `chapter-9` to the remote, and make a PR from `chapter-9` to
   `main`.
4. Now we will use more robust way to modify commits. Let's say we have a huge
   bug in page-2, and some code to add to page-3.

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

   2. Commit the fix to page-2 with temp name like `fix page-2` (Or
      `FIXUP page 2`).
   3. Add the code to page-3:

      ```txt
                       .___
        ____  ____   __| _/____
      _/ ___\/  _ \ / __ |/ __ \
      \  \__(  <_> ) /_/ \  ___/
       \___  >____/\____ |\___  >
           \/           \/    \/
      ```

   4. Commit the code to page-3 with temp name like `fix page-3` (Or
      `FIXUP page 3`).
   5. `rebase -i` with fixup (`f`) option and inject the fixes commit in the
      right places.
   6. Nice! push your branch to the remote.
   7. Approve the PR **after** you put `chapter-9` on top of `origin\main`
      branch.
   8. Pull the `main`.

**Epilog:**

Copy the commit `Add a mistake` to `chapter-3` branch. Resolve the conflict by
accepting the all page-3. `checkout` to the main and print all the commits in
the graph.

How was your story?? I hope its look like this:

```git
* 81dda3f - (chapter-3) Add a mistake (36 seconds ago) <space-name>
| *   c2d0098 - (HEAD -> main, origin/main, origin/HEAD) Merge branch 'chapter-9' into 'main' (2 minutes ago) <Space Name>
| |\
| | * c80c1f1 - (origin/chapter-9, chapter-9) Add page 4 (3 minutes ago) <space-name>
| | * 81591e8 - Add page 3 (3 minutes ago) <space-name>
| | * d1c1453 - Add page 2 (3 minutes ago) <space-name>
| | * 5a4f26a - Add page 1 (3 minutes ago) <space-name>
| |/
| * 103e66c - Merge branch 'chapter-8' into 'main' (6 minutes ago) <Space Name>
|/|
| * e7c6ee5 - (origin/chapter-8, chapter-8) Add book end (6 minutes ago) <space-name>
| * 7701fdd - Add book content (6 minutes ago) <space-name>
| * 105e80f - Add book title (6 minutes ago) <space-name>
| | * dd17043 - (chapter-7) Add page 4 (18 minutes ago) <space-name>
| | | *   4c61fe9 - (chapter-5) Merge branch 'chapter-6' into chapter-5 (34 minutes ago) <space-name>
| | | |\
| | | | *   bea46bd - (chapter-6) Merge branch 'chapter-6-ver-2' into chapter-6 (38 minutes ago) <space-name>
| | | | |\
| | | |_|/
| | |/| |
| | * | | a199dd5 - (chapter-7-ver-2, chapter-6-ver-2) Add page 4 (40 minutes ago) <space-name>
| | | | * 8d1c0d2 - Add page 4 (42 minutes ago) <space-name>
| | | |/
| | |/|
| | * | cf15fb8 - (chapter-1) Add page 3 (65 minutes ago) <space-name>
| | | * f36ad71 - Add a mistake (59 minutes ago) <space-name>
| | | * 137d2d8 - Add page 3 to chapter 2 (63 minutes ago) <space-name>
| | |/
| | | * 05b2320 - (chapter-4-ver-2) Create this_is_not_a_book.txt (48 minutes ago) <space-name>
| | | * 7c67cad - (chapter-4, chapter-2) Add page 3 to chapter 2 (58 minutes ago) <space-name>
| | |/
| | * 9e37807 - Add page 2 (65 minutes ago) <space-name>
| | * 9684685 - Add page 1 (65 minutes ago) <space-name>
| |/
| * ebd3885 - Add .gitignore (68 minutes ago) <space-name>
|/
* 8975347 - Initial commit (69 minutes ago) <Space Name>
```

If not it is ok! After all this is your book...

## Exam

Talk to your mentor about the exam.

## Worth knowing

These concepts are worth mentioning but don't learn them now.

- [Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
- [`.gitattributes`](https://git-scm.com/docs/gitattributes)
- [worktree](https://git-scm.com/docs/git-worktree)
- [sparse-checkout](https://git-scm.com/docs/git-sparse-checkout) - [Blog Post](https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/)
- [Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

## Next Steps

Congratulations! You have completed the Git module. now you can control the
source code of your space :smile:

Here is the [next](Node/Node) Learning Path
