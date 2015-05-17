---
layout: post
title: Creating a package for Atom is dead easy
---

I’m pretty much in love with Atom (and ditched Sublime for it) and could go on an on about how amazing I think this text editor is. The way it handles snippets with CSON for example or how easy it is to manage packages or to sync your settings with Dropbox, etc.

One thing I did miss though was my trusted ToyChest theme from Coda.  
Jackson Gariety who made it brought support for a bunch of editors but sadly Atom didn’t have a good port of this so I decided to look up the Atom.io Docs to see how hard it was to port it myself.

Turns out it’s really really easy to convert a .tmTheme to an Atom theme (which is written in LESS) and then publish it on APM (Atom Package Manager, similiar to npm).  
All it took were some commands in Terminal, a git repo and a publish command.

### Converting the package

You need Atom’s commandline utils installed for this, on OS X this installs on default when you install Atom.  
If you don’t have apm, check the bottom of this page on how to install.  
It appears apm has a handy tool installed to easily convert any TextMate .tmTheme to Atom’s convenient LESS syntax.

All you have to do is run `apm init --theme ~/.atom/packages/atom-toychest --convert toychest.tmTheme`  
Specify toychest.tmTheme to the location of the .tmTheme you want to convert.  
All this command does, is parse the plist syntax from TextMate Themes and converts it to to LESS flavoured CSS.  
The beauty of it all is that using apm, Atom will automatically create a `package.json` and other repo-required files.

### Publishing to APM

Now the theme is located in `~/.atom/packages` it should appear in Atom’s preferences (mine took a reboot of Atom). Publishing it to APM, is really really easy.
Just open the theme folder in terminal (e.g `cd ~/.atom/packages/myTheme`) and create a new git repo with `git init`.
Next you’ll want to create a new repo on Github and add it as an origin with `git remote add origin https://github.com/…`.

Before you sync, make sure you edit the `package.json` so the default data becomes your data. APM writes some defaults and you’ll want to overwrite these.
It’s important to edit the repository field to the repo on Github.

Almost there. All that rests now is to run `apm publish minor` to publish it as a minor release (0.x.0) to apm.

Be sure to check out my ToyChest port on apm by either:

- Running `apm install atom-toychest`
- Searching in Atom’s Themes in the preferences
- Checking out the repo: https://atom.io/themes/atom-toychest
