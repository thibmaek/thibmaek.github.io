---
layout: post
title: Quick toggle Yosemite's Dark Theme
feature-img: img/2014-10-21-quick-toggle-yosemite-dark-theme.png
---

Dark theme works so much better at night in bed. Found this quick trick to enable a hotkey to turn it on and off:

1. Open Terminal
2. Copy and Paste the following into the command prompt:
`sudo defaults write /Library/Preferences/.GlobalPreferences.plist _HIEnableThemeSwitchHotKey -bool true`
3. Log out of your Mac and log back in.
4. Hit **CTRL+OPT+CMD+T** to toggle Dark Mode off and on.

Source: [Cult Of Mac](https://www.cultofmac.com/300293/switch-dark-mode-yosemite-without-fiddling-settings/)
