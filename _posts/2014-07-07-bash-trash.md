---
layout: post
title: Bash…Trash!
tags:
  - "macos"
  - "bash"
---

Quick and easy clearing of the trash on OS X using bash!

1. input `nano trash`
2. in the nano editor enter `rm -rf ~/.Trash/*`  
*This recursively removes the trash with force*
3. Hit `Ctrl-O` and then `Ctrl-X` to save and exit
4. Anytime you want to quickly empty the trash, or it won’t empty and you need to force it enter bash trash in terminal to enter it core level!

Note: you don’t have to use nano, you can use any editor like Sublime and then save as an .sh and use bash `/Documents/trash.sh` or wherever it’s stored.  
Even better would be to store it as an alias in your shell or dotfiles.
