---
layout: post
title: "5 minute guide to keeping your system updated"
date: "2015-12-15 11:45"
summary: "Keeping dependencies and tools up to date can be a hassle and a time consuming task, I learned that the hard way. What follows is my semi-bulletproof guide to making sure you're updated and don't spend your valuable time doing so."
---

> **TL;DR: If your just looking for an easy automated way to update everything, skip to the automation part.**

## Managing it the right way

After doing it wrong time and time again I learned that managing and thinking about how you install stuff on your system is really _really_ important.

Sure you can install node with the .pkg file on the node website, but that will keep everything at a level that's not that accessible if you want to change things or update it (especially since SIP on El Capitan). Tools like nvm, n, rbenv, pyenv etc make it a lot easier to keep full control over your system tools.

So first and foremost make sure to check if your tool, binary, application has something to manage it instead of blindly going on and installing it the easiest way. It may not turn out easy in the long run…

Here's what I recommend to keep your system very manageable:  
(Please note that this article is not about to go in depth on how to install these tools)

- brew for anything related to terminal (ffmpeg, openssl, airmon etc.)
- brew cask for your applications (seriously this one's amazing at keeping your apps manageable)
- rbenv for managing ruby versions
- pyenv for managing python versions
- nvm for managing node version (I love nvm so much, saved me the hassle of updating many times)
- Kinda specific to my dev workflow, but I also use apm to update Atom's packages.

## Updating everything, manually

Most regular applications will update themselves trough a framework like Sparkle but tools that mainly reside in the shell don't have that luxury.

You can of course update manually trough the Terminal, so here's a breakdown on how to do it for the most common ones:

#### Updating OS X core utilities

Sure thing you can dig into the App Store.app and update everything from the Updates tab but there's a convenient tool which you can use to update from the shell.

I mostly start with checking the updates with `softwareupdate --list` and then updating them with the tool itself by running `sudo softwareupdate -i --all` to update everything at once.  

I do download the OS X patch & minor updates as a combo update though, since I have to install the same update on three Macs at home and this way I only have to download it once. This is of course just my workflow, you're perfectly safe updating with `softwareupdate`

#### Updating brew

Running `brew update` will update brew itself trough github and also make sure that all the taps & bottles are up to date in your repo when you're planning on installing new stuff.

Be sure to keep brew updated often and to run `brew upgrade --all` after. This will update every currently tapped or installed on your system.

#### Updating Rubygems

Most people I know never update their gems when installed, which may lead to issues when trying out stuff with SASS or Jekyll.

Ruby comes pre installed on OS X but it's not prefered though. Remember I said to use rbenv to manage Ruby versions?

rbenv resides in your home directory by default which makes it differ from the OS X ruby that resides in /usr. Because /usr is at root level you need to prefix ruby commands like installing with sudo. Your home directory is owned by your user so you have full control over what's installed and gems don't have access outside that scope. Long story short, this is great security-wise and makes it possible to just run:

```ruby
gem update
```

to update every globally installed gem.

#### Updating node & npm

The node .pkg on the official site also installs it in /usr/local which again is not that great when it comes to security.  
Luckily nvm takes care of this issue the same way that rbenv does.

I prefer having two node installs in nvm, one stable (4.2.3) that I'm sure to work and one more experimental (5.3.0) for testing out the latest stuff.

Sadly there's no way to override your current node install with a new one and also keeping your globally installed modules. nvm just installs a clean version of node by default and doesn't migrate global modules.

So if you have a version of node installed, let's say 4.2.1, you'll have to install a newer one and then manually uninstall your previous 4.2.1 to replace it:

```console
nvm install v4.2.3
nvm alias default v4.2.3
nvm uninstall v4.2.1
```

That `alias default` is an important part.  
You can alias stuff yourself like `nvm alias experimental v5.3.0` to use it as an alias instead of a semver version number, but the default is part of nvm itself and will make sure that this version is the default to use in the shell.

Besides clean installing I mostly want to migrate the global modules in my newer node version. nvm has a flag that you can pass to install to keep the global modules:

```console
nvm install v4.2.3 --reinstall-packages-from=v4.2.1
```

This is the flow that works the quickest when using nvm but it feels like a hassle to me. There's a small 'workaround' though…

## Automating the update flow

Putting it all together this can be a time consuming task to run everything on the shell yourself.

If you're a regular reader of this blog you probably know that I love Bash, so for me the quickest way to automate stuff for the shell/terminal is trough Bash of course.

What I find the quickest is to create a function in your dotfiles (or .bash_profile) update() which will take care of everything so you don't have to.

It runs all of the commands above synchronously, take a look at how it works, this one resides in my `~/.functions`:

```bash
function update() {
	npm install npm -g # Update npm itself
	npm update -g # Update globally installed modules
	apm upgrade -c false # Update Atom packages & themes
	brew update # Update brew
	brew upgrade --all # Update brew taps/bottles
	brew cleanup # Make sure there's no cache or straying files
	gem update # Update globally installed gems
}
```

So just running `update` from time to time (or putting it in a cronjob) will make sure you're at the latest update at all time.

nvm of course is a seperate thing, but I found this was the easiest way for me to update it:

```bash
function nvmi() {
  # $NOW grabs the current node version and then installs
  # a newer version and also migrating global modules to the new one  
  local NOW=$(node -v)
  nvm install $1 --reinstall-packages-from=$NOW

  # Specifying the --replace flag will uninstall the previous version
  if [ "$2" == "--replace" ]; then
    nvm alias default $1
    nvm uninstall $NOW
  fi;
}
```

So whenever a patch or minor update is available for my node version I just run `nvmi v4.2.3 --replace` to install the new version and replace my old version.
