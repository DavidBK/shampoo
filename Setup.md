# Setup

Lets prepare the space environment for you!

---
*Send me back [home](home)*

[[*TOC*]]

# 1. Set up WSL (Optional)

Wsl (Windows Subsystem Linux) is a Linux environment that runs on Windows.
You can read more about it [here](https://docs.microsoft.com/en-us/windows/wsl/about).

## 1.1. Install WSL

Open PowerShell (or Windows Command Prompt) and enter:

```PowerShell
wsl --install
```

Check the [troubleshooting installation](https://docs.microsoft.com/en-us/windows/wsl/troubleshooting) article if you run into any issues.

## 1.2. Set up your Linux username and password

Once the process of installing your Linux distribution with WSL is complete, open the distribution (Ubuntu by default) using the Start menu. You will be asked to create a User Name and Password for your Linux distribution.
This account will be considered the Linux administrator, with the ability to run sudo (Super User Do) administrative commands.

For more information, see [this article](https://docs.microsoft.com/en-us/windows/wsl/setup/environment#set-up-your-linux-username-and-password).

## 1.3. Set up Windows Terminal (Recommended)

Windows Terminal can run any application with a command line interface.

Also, it comes with [Quake mode](https://devblogs.microsoft.com/commandline/windows-terminal-preview-1-9-release/#quake-mode) which allows you to quickly open a new terminal instance from anywhere in Windows by typing `` Win+` ``.
It is a great way to run commands on your Linux distribution.

To install you can follow the [installation guide](https://docs.microsoft.com/en-us/windows/terminal/install#invoke-the-command-palette).

### Set your default profile

On windows terminal, enter `crtl+,` to open setting.

Select Startup and choose `Ubuntu` as your default profile.

To move between tab terminals, use `ctrl+tab` and `ctrl+shift+tab`.
To close a tab in terminal, enter `ctrl+w`.

## 1.4. Update and upgrade packages

It is recommended to update and upgrade your packages before you start using your Linux distribution.

```bash
sudo apt update && sudo apt upgrade
```

## 1.5. Install zsh (Recommended)

Zsh is a shell designed for interactive use, although it is also a powerful scripting language.

```bash
sudo apt-get install zsh
```

## 1.6. Install oh-my-zsh (Recommended)

[Oh My Zsh](https://ohmyz.sh/) is a open source framework for managing your Zsh configuration.

Before all we need to have git installed:

```bash
sudo apt-get install git
```

Then, use `curl` to install oh-my-zsh:

```bash
sudo sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

You can Chang the Theme of oh-my-zsh! look it up if you like

---

# 2. Install VS code

VS Code (Visual Studio Code) is a source-code editor made by Microsoft including support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.

In order to use VS code in your [WSL](#1-set-up-wsl-optional) First install VS code in Windows and then the Visual Studio Code Remote - WSL Extension.

## 2.1 Install VS code on Windows

Install [VS Code](https://code.visualstudio.com/) on the Windows side (not in WSL).

## 2.2 Install VS code on WSL

Install the [Remote Development extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) pack.

Now we can open Workspace from the terminal using the `code` command:

```bash
code path/to/workspace
```

Or navigate to workspace first and then use `code`:

```bash
cd path/to/workspace
code .
```

For more information, About working with VS code on WSL see [Developing in WSL](https://code.visualstudio.com/docs/remote/wsl).

---

# Next steps

Congratulations! You are now ready to start [learning](Workflow/Workflow)!
