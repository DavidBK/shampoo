# Linux module - Introduction

-- *Estimation time: 1 Day*

---

LINUX is an operating system or a kernel distributed under an open-source license.

The reason you are learning it is because most of our app run on Linux. Also, linux offers a lot of features that are not available on other OS

Make sure you understand the learning concepts but **Don't memorize them**!

---

***Learning objectives:***

After completing this learning module, you'll be able to

- Navigate the Linux file system from the command line
- Install and uninstall packages
- Configure Aliases
- Configure permissions
- Connect to different remote servers

---
*Send me back [home](home)*

[[*TOC*]]

---
**Learning note**: all links in this path are reading tutorials. You can read them but you can watch a youtube crash course on Linux or just playing with the commands by yourself.
if you find useful links, please share them with me.

Here is some examples links:

- [Youtube crash course](https://www.youtube.com/watch?v=n_2jPbQornY)
- [Linux Basic Tutorials](https://www.guru99.com/unix-linux-tutorial.html)

## Basic Commands Line

Learn the Basics of Linux commands line.

(Don't memorize)

- Relative and absolute paths
- `cd`, `pwd`, `./`, `../`, `~`
- `touch`, `mkdir`, `rm`
- `mv`, `cp`
- `cat`, `less`, `pr`
- `sudo`
- `man`, `--help`
- `history`, `clear`
- `grep`, `sort`
- Wild cards
- Piping and redirection

You can read this tutorial: [command-line-for-beginners](https://ubuntu.com/tutorials/command-line-for-beginners).

## Install and uninstall packages

Learn about the `apt` package manager.

- package manager
- `apt` `apt-get`
- install, remove, and upgrade packages

You can read this article: [how-to-use-apt-command](https://linuxize.com/post/how-to-use-apt-command/).

## Windows Vs Linux

Learn the differences between Windows and Linux.

- Linux files structure

You can read this article: [linux-differences](https://www.guru99.com/linux-differences.html).

## File Permissions in Linux

Learn about Ownership, and Permissions in Linux.

- Ownership: Owner, Group, Others
- Permissions: Read, Write, Execute
- `chmod`, `chown`

you can read this article: [file-permissions](https://www.guru99.com/file-permissions.html#absolute_mode_in_linux).

## Environment variables

Learn about Environment variables in Linux.

- What are Environment variables?
- `$PATH`
- Set and delete environment variables
- Access environment variables

you can read this tutorial: [linux-environment-variables](https://www.guru99.com/linux-environment-variables.html).

## Linux Networking Commands

Read about these linux basic networking commands:

- `ssh`
- `ping`

## Aliases

Learn about Aliases in Linux.

- `alias`
- Creating Permanent Aliases

What alias do you currently have?
Write your own aliases in Linux!

## Links

Learn about linux links

- `ln`

You can read this article [creating-soft-link-or-symbolic-link](https://www.cyberciti.biz/faq/creating-soft-link-or-symbolic-link/)

## Wrapping up - mission (optional)

1. Create new directory inside your home directory named `/Workspace/test` in one command.
2. Rename the directory to `LinuxTest`.
3. Create 3 files inside the `LinuxTest` directory called `test1.txt`, `test2.md`, and `test3`.
4. Write text in `test1.txt` with `echo` command.
5. Write 10 line text in `test2.md` with `nano` command.
6. Write text in `test3` with `vi` command. Do you now how to quit?
7. Show the content of `test1.txt` with `cat` command.
8. Show the first 3 line in `test2.md`.
9. Change permissions of `test1.txt` so that you cant read it, then show the content of `test1.txt` again.
10. Count the unique lines in the file `test2.md`.
11. Create a link to your Windows desktop called `Desktop` inside `$HOME` dir.

## Worth knowing

This are concepts that is good to know they exist, but you don't need to learn them right now.

- `Find`
- `service`
- `curl`
- Space usage
- Mounts
- Process commands
- Cronjobs
- Shell Scripting

### Further learning

- [The art of the command line](https://github.com/jlevy/the-art-of-command-line)

## Next steps

Congratulations! You are now Can use linux in your [next](Workflow/Git) space mission!
