---
layout: post
title: "Fixing Belgian eID Viewer on El Capitan"
date: "2015-10-02 18:43"
summary: "The easy fix for horrible eID software on El Capitan"
tags:
  - "macos"
---

> __6 aug. 2017:__ This post is merely kept for archival purpose. Though the software is still buggy & horrible some improvements have been made and for most cases it is advised to download the dmg/pkg from https://eid.belgium.be/nl for macOS 10.8+

By using deprecated methods & code the Belgian eID Viewer version used for Yosemite can't be used on El Capitan (Hooray for bad cross platform production software I guess…).

![Java lol](https://imgur.com/PnLTq6I.png)

When rounding up the update for El Capitan you probably saw the notice that eID was incompatible with El Capitan's OS X Software. The fix is rather easy though.

Navigate to the Incompatible Software folder on your Macintosh HD. You can do this directly by clicking Computer in the Finder Go menu (or hitting `cmd + shift + c`).

![screenshot for the go menu](https://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,w_326/v1443804003/eID%20Capitan/Screen_Shot_2015-10-02_at_18.35.15.png)

Open the Macintosh HD and concurrently open the Incompatible Software folder. There'll be two items here at least: a folder for eID and the eID Viewer itself.
Move them both to the Trash and if prompted for your password, just enter the password for that account. Be sure to empty the trash afterwards to make sure that all old files are deleted.

Now just download the latest version of the eID software (middleware & app) from the [official site](https://eid.belgium.be/nl). Open the downloaded disk image (`.dmg` file) and install the program.

A working version of eID Viewer for OS X El Capitan is now located in your Applications folder & Launchpad.

> Thanks to Anne-Marie Swalens for pointing out that the Sitecom Card Reader MD-031 is officially declared as incompatible/deprecated with El Capitan and higher. If you have this card reader it's advised to upgrade to the Sitecom 065.

## For developers
Developers can opt in to install the driver & viewer through [homebrew-cask](https://caskroom.github.io/). Just tap the official eid repository and install the required driver and optional viewer (if wanted). Java is of course still a requirement. I would advise a reboot afterwards.

```console
$ brew tap caskroom/eid
$ brew cask install eid-be eid-be-viewer
```
