---
layout: post
title: "Using the screen multiplexer for hidden shell work"
date: "2016-12-04 17:01:05 +0100"
summary: "Get to know the basics of using a multiplexer like screen to run your shell scripts and tasks without having to keep terminal open"
tags:
  - "shell"
---

I've known of the existence of multiplexers but rarely ever used them in the past. Recently though using the [screen] multiplexer became a vital addition to my work in the shell.

Getting a grasp of the basics (shortcuts, how it works) is fairly easy and to be honest you could even do most work with just creating and destroying an instance!

Screen is probably not the most popular multiplexer. There's also [tmux] which has a wider fanbase from what I heard but screen is perfect for everything I need.

## Installing
I assume this guide for a macOS machine. Apple has included screen into OS X/macOS for some years now.
Linux systems like Ubuntu & Debian typically don't come with screen, but can get it from apt easily with `apt-get install screen`.

There is one minor setback though: macOS currently still ships with a 2006 version of screen. There is the better [GNU screen][screen] alternative, which is updated but also offers some improvements like 256 color compatibility. We can easily install this from the [homebrew-dupes] tap.

```console
# macOS screen:
screen -v // Screen version 4.00.03 (FAU) 23-Oct-06

# homebrew screen:
brew tap homebrew/dupes
brew install screen
screen -v // Screen version 4.04.00 (GNU) 19-Jun-16
```

## Configuration
Screen is not installed and if you're not interested in making it easier with minimal configuration you could skip to the [next section](#creating-a-screen-instance).

Some basic stuff which will greatly help us is autocompletion. Put the following line in your `.bash_profile` or `.bash_rc` (or whatever your profile is):

```bash
complete -C "perl -e '@w=split(/ /,\$ENV{COMP_LINE},-1);\$w=pop(@w);for(qx(screen -ls)){print qq/\$1\n/ if (/^\s*\$w/&&/(\d+\.\w+)/||/\d+\.(\$w\w*)/)}'" screen
```

Screen also supports a [runcom] file called `.screenrc` in your homedir. Some good stuff to put in there:

```console
# Use login shell bash
shell -/usr/local/bin/bash

# Disable the startup message
startup_message off

# Set a large scrollback buffer
defscrollback 32000

# Always start `screen` with UTF-8 enabled (`screen -U`)
defutf8 on
```

Most of these are just about general gripes with screen. The `shell` one might be important in some cases. For example I had a python pip module which was loaded from my homedir but wasn't recognized when starting a screen instance due to screen launching the default macOS shell instead of my more up-to-date brew bash shell. The login shell also might be important, depending of how you load your shell. If this paragraph made zero sense to you you're probably better of removing the first 2 lines in the `.screenrc`.

You're all set now to dive into using screen!

## Creating a screen instance
Screen works by using different instances of a shell. There are some different ways to start an instance, the most rudimentary and common being just running `screen` and watching it launch a new instance:

![screen](https://res.cloudinary.com/thibault-maekelbergh/image/upload/v1480870379/screen/screen.gif)

This is good if you just want to launch a quick instance. When launching multiple instances or keeping some order in your instances assigning a tag is more suited. You can launch a tagged instance with `screen -S <tag>`:

![screen -S demo](https://res.cloudinary.com/thibault-maekelbergh/image/upload/v1480870379/screen/screen_-S.gif)

You can now run scripts and programs and it will be contained into this multiplexed instance.

## Detaching or quitting an instance.
You might find it hard finding how to go back to your original shell since hitting ctrl + C or esc won't do anything. That is because to get out of the instance you need to know the special shortcuts. There is a difference: detaching an instance will return you to the original shell but will keep the instance alive so we can reconnect to it later. Detach an instance by hitting __`ctrl+a` and then `d` (so `ctrl+a d)`__.

If you instead want to quit an instance and kill it completely you'll roughly need the same combo:
__`ctrl+a :` and then type quit (so `ctrl+a :quit`)___. It goes without saying that this will immediately kill the programs running that were running in the instance.

## Listing alive instances
Much like any other program the `-ls` flag will output instances that are alive so you can reconnect to them:

![screen -ls](https://res.cloudinary.com/thibault-maekelbergh/image/upload/v1480870379/screen/screen-ls.gif)

## Reconnecting to an instance
If you don't use tagged instances you can just reconnect by running `screen` again. Tagged instances however can be reconnected to using the `-r` flag:

![screen -r demo](https://res.cloudinary.com/thibault-maekelbergh/image/upload/v1480870379/screen/screen-r.gif)

## Now what?
Maybe you're wondering why you would need this if you instead could just open up a new tab in Terminal and let it run there. Let me tell you why.

Your terminal tabs can come polluted really quickly. Imagine working on a web project which needs to run a server, have a build tool running and possibly a linter of some sort. You'd need about 3 tabs to run these and you'll possibly want to have an extra tab to run commands like tests or git from, resulting in another tab being added. And I mostly like to keep a tab open at $HOME if I'm in terminal with tabs so that would be 5 tabs…

Screen solves this by effectively hiding your 'tabs' as instances so you can have just the terminal open for working in your project directory.

Another great use for multiplexing is to create makeshift daemons. In macOS you could create a launchagent or on Ubuntu you could create a systemd unit to have your server running in the background and being able to manage it. This works great for some purposes but if you're quickly fiddling around with stuff or a new side-project you typically don't want to put effort into creating a new systemd unit, just to run a node server in the background. With screen you could just launch a tagged instance `screen -S nodemon` and then detach it to have it running in the background. You can easily check back if for example an error occurs on the server, by just reattaching the instance.

This being said, the above is all you basically need for using screen in most common scenarios. There's way more to go from here though, you could read up the [man page] for screen or check out the GNU webpage for it.

<!-- Links -->
[screen]: https://www.gnu.org/software/screen/
[tmux]: https://tmux.github.io/
[homebrew-dupes]: https://github.com/Homebrew/homebrew-dupes
[runcom]: https://unix.stackexchange.com/questions/3467/what-does-rc-in-bashrc-stand-for
[man page]: https://www.gnu.org/software/screen/manual/screen.html
