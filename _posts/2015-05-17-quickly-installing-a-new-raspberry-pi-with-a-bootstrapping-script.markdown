---
layout: post
title: "Quickly installing a new Raspberry Pi with a bootstrapping script"
date: "2015-02-22"
---

I’m thinking of buying a new Raspberry Pi A+ or either B+ as a separate webserver and fileserver so I can use my current Raspberry Pi B+ for [RetroPie](https://blog.petrockblock.com/retropie/) and [Kodi](https://kodi.tv/).

It got me thinking that installing Rasbian is fairly easy with `dd` and I could be up an running in an hour or so, but what about all the packages I installed trough `apt-get` or settings I adjusted, like [my dotfiles](https://blog.thibmaekelbergh.be/supercharging-the-raspberry-pi-for-terminal).  
I could just copy over my current SD card, but when I buy a new one I would like to start with a clean slate and just install the things I really need.  
Copying the current SD wouldn’t be an option but what would?

I stumbled upon [Brandon Brown’s marvelous dotfiles](https://github.com/brandonb927/dotfiles) while browsing Github and noticed it aren’t actually dotfiles in there. It’s a bootstrapping script which takes a lot of tasks like installing, creating files and setting stuff in the shell.  
It was pretty clear what the commands in the file did, so I set out to the task and used this as a template to create my own bootstrapping script for the Raspberry Pi.

### Using the script with a new Pi.

There’s not that much too it, basically you just run the file and go to each question.
It installs my [dotfiles](https://github.com/thibmaek/raspi-dotfiles) and then just installs PIP, a basic webserver with PHP & MySQL, along with the option to install Node.js and common node modules.

The script is tested and works on the Raspberry Pi, you only need to clone it over from Github run it with `sudo ./install.sh` (that sudo is required).
If you get an error try `chmod +x install.sh` to mod it and then try `sudo ./install.sh`

Github: [https://github.com/thibmaek/raspi-setup](https://github.com/thibmaek/raspi-setup)
