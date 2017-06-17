---
layout: "post"
title: "Setting up S/PDIF (optical audio) for RasPlex"
date: "2017-06-17 18:26"
summary: "Getting a HifiBerry/PiFi Digi+ to play nice with RasPlex' surround capabilities."
tags:
  - "raspberry pi"
  - "hifi"
---

I managed to set up a nice ecosystem that works perfect for me: Plex Media Server running on a Pi 3 and the Plex client interface connected to the TV on another Pi 3 running Rasplex.

Works fine, plays smooth, is automated and all but one thing was missing. I have a fair amount of video files with an audio track using 5.1 channels. Of course I want to hear that awesome surround on the home cinema so I can enjoy it even more, but unfortunately my receiver doesn't have HDMI inputs and using passtrough on the TV would downsample it from 5.1 to 2.0 leaving me in the same scenario.

Huge fan of optical audio here, so surely that's the way I wanted it. I was familiar with the HifiBerry lineup and found out they have a card that has a Toslink input, which was exactly what I needed. Even though I really wanted to support them in buying a product from them, I was low on cash and luckily found this other alternative from Chinese wholesale called the PiFi Digi+. It basically acts the same as the HifiBerry. Ordered it.

> These steps are untested for it, but should be exactly the same for the HifBerry Digi

So it arrives and from lookup before I found out that the drivers are supported in up-to-date Linux kernels and Kodi. Plugging it in I expected it to automatically show up under my audio hardware mapping but it didn't. Turns out the onboard IR sensor that is soldered to the PiFi Digi+ hinders the board from working correctly and you need to turn of the device tree overlay for the default lirc device that Rasplex ships with (or change the Pifi lirc's GPIO pin).

> __NOTE:__ I would advise checking that you are at least running the latest release from Rasplex' stable channel (which at the time of writing is: 1.6.2.123-e23a7eef)

You need write permissions to `/flash` on the device. Change it a writeable filesystem with `mount -o remount,rw /flash`. This will auto reset to a readable only fs after a reboot.

1. Ssh into rasplex as root: `ssh root@rasplex.local` (default password is `rasplex`)
2. On the devices SD card open and edit the config file: `nano /flash/config.txt`
3. Search (`ctrl-w`) for `lirc-rpi` and comment in the line that says: `dtoverlay=lirc-pi`
4. A few lines below you should find the option to enable the device tree overlay for the PiFi, otherwise search for it and comment out the line that says: `dtoverlay=hifiberry-digi`
5. Type `reboot` to reboot the Pi and if you go to Settings > Audio Settings and select the one that says `alsa: …` you should have crystal clear surround sound!
