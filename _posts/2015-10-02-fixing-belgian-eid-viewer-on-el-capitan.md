---
layout: post
title: "Fixing Belgian eID Viewer on El Capitan"
date: "2015-10-02 18:43"
summary: "The easy fix for horrible eID software on El Capitan"
---

> __Note:__ Both the viewer & middleware which eID require have been made available on a brew cask tap by me and are updated to the latest version. Installing trough here should make it work automatically.

By using deprecated methods & code the Belgian eID Viewer version used for Yosemite can't be used on El Capitan (Hooray for bad cross platform production software I guess…).

![Java lol](https://imgur.com/PnLTq6I.png)

When rounding up the update for El Capitan you probably saw the notice that eID was incompatible with El Capitan's OS X Software. The fix is rather easy though.

Navigate to the Incompatible Software folder on your Macintosh HD. You can do this directly by clicking Computer in the Finder Go menu (or hitting `cmd + shift + c`).

![screenshot for the go menu](https://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,w_326/v1443804003/eID%20Capitan/Screen_Shot_2015-10-02_at_18.35.15.png)

Open the Macintosh HD and concurrently open the Incompatible Software folder. There'll be two items here at least: a folder for eID and the eID Viewer itself.
Move them both to the Trash and if prompted for your password, just enter the password for that account. Be sure to empty the trash afterwards to make sure that all old files are deleted.

Now just download the latest version of the eID software (middleware & app) from the [official site](https://eid.belgium.be/nl/je_eid_gebruiken/de_eid-middleware_installeren/mac/). Open the downloaded disk image (`.dmg` file) and install the program.

A working version of eID Viewer for OS X El Capitan is now located in your Applications folder & Launchpad.

> Here's a oneliner for developers to use in terminal: `sudo rm -rf /Volumes/Macintosh HD/Incompatible\ Software/*`
