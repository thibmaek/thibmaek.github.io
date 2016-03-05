---
layout: post
title: "Installing OS X 10.11 as a VM"
date: "2015-06-16"
---

OS X 10.11 El Capitan (which is a ridiculous name, if you're not from America) was recently announced at WWDC15 a couple of weeks ago.  

Not a lot of new features but mainly gimmicks (_shake to find cursor, really?_) and productivity upgrades like split screen working are included with this release of OS X.

But there was one feature I was curious about, and that's the **completely revamped Web Inspector and the new Adaptive Viewer**. Chrome's DevTools are probably the most common used and the favourite of every webdev, but I seem to enjoy the way Web Inspector works way more (_grouped XHR folder anyone?_).  

The new Adaptive Viewer is something you could compare to that device emulator Chrome has, and curious how Safari's looks like I decided to take a look at the first beta of OS X 10.11

## Finding a beta and creating the dmg

The beta releases are available to anyone enrolled to the Apple Developer Program. Sadly my enrollment is college bound and doesn't let me do anything besides get a provision for side-loading Xcode projects on my iPhone.

Luckily, [shade.sh](https://blog.shade.sh/index.php/os-x-beta) uploads the beta's with a valid shasum so it's pretty safe to grab one from there. So I downloaded this file (*around 6GB*) and uncompressed it.

Damn, first obstacle. The zip file **uncompresses to a .app** to install 10.11 on a partition on your HDD/SSD. I wanted to run it in a VM and not partition my SSD to install it and just throw it away later when I could just delete the Parallels VM instead.

Looking at the .app's Contents folder and searching Spotlight for .dmg I found out there was a disk image called **"InstallESD.dmg"** but it couldn't be mounted into Parallels. So I headed to Safari and searched for ESD.

After browsing for a while I found out there is a **RubyGem to create DMG files from the .app Installer**, called `iesd`. Installing was as easy as any other gem with:

```ruby
gem install iesd
```

This in place it was time to create it with a simple input/output task for iesd:

```console
iesd -i Downloads/Install\ OS\ X\ 10.11\ Developer\ Beta.app/ -o Desktop/Capitan.dmg -t BaseSystem
```

This took about **5 minutes** to create the DMG on my desktop. Everything was now in place, and I could head over to the actual installing now.

## Setting up Parallels for 10.11

I love to use Parallels because it blows the competition out of the water and has a much more friendly UI and easier settings to adjust. **The method below works for probably any VM app** like VMWare or Virtualbox, as long as you set the hardware correctly.

Starting off by creating a new VM and **loading the dmg in the VM's CD drive**, you'll want to **prevent the VM from booting** because the default settings will make OS X **kernel panic in the VM**. Parallels has a checkbox you can tick in the setup process for this called _"Customize settings before installation"_.

Since my purpose was to only test Safari's Web Inspector, it would be stupid to use a dynamically sizing virtual HDD anyway. Delete the one that Parallels already sets up for you and then create a new **non-dynamic disk with at least 32GB storage**.

![](http://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,w_493/v1434456640/Capitan%20VM/Screen_Shot_2015-06-16_at_13.35.59_ywnlct.png)

The thing that makes kernel panics happen inside the VM is the connection with webcams and USB 3.0, so make sure you **disable connected FaceTime camera's and USB 3.0 support** (resides under the _USB & Bluetooth_ category in Parallels)

![](http://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,w_1024/v1434457396/Capitan%20VM/Screen_Shot_2015-06-16_at_14.22.23_urfeeq.png)

Since Lion, every release of OS X has **only required 2GB of RAM** so that would be the minimum amount you would have to assign to the VM. I assigned 4GB because I have 16 in total and had some to spare. (_Remember 2GB = 2048MB_)

![](http://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,w_1024/v1434457704/Capitan%20VM/Screen_Shot_2015-06-16_at_14.28.00.png)

To round up make sure to assign **at least 128MB VRAM** to the VM. At 128MB it will **run at bare minimum graphic speed** so assign more if you have a decent GPU. **I assigned 512MB** of my dedicated GPU in my Retina which has 2GB.

Make sure the **dmg is still loaded in the CD/DVD slot** and boot the VM. OS X install should become active and just install it like you would with any other OS X install. Ok so now I was pretty much at the point to test out the new Web Inspector.

## Safari 9 Web Inspector

The new **tabbed view** will make it much easier to change views when debugging or inspecting. Feels great to quickly switch to console from the node inspector view with keyboard shortcuts.

![](http://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,w_1024/v1434456639/Capitan%20VM/Screen_Shot_2015-06-15_at_13.44.13_bkcagn.png)

That new Adaptive Viewer is designed in a sleek but functional form with **options for all current Apple devices and common screen sizes** to view from. **User Agents can still be assigned like they could before**, but if I'm correct there are more options for platforms now.

Adaptive View is great and I'm really looking forward to working with it, especially since it also includes the **option to set pixel density**. **One thing I'm missing** though is some way to **create your own resolutions** to test from. Currently there are **only three sizes** (_800x600, 1366x768, 1920x1080_) but I'd love the option to **add in my own sizes like 1024x768**.

![](http://res.cloudinary.com/thibault-maekelbergh/image/upload/v1434457581/Capitan%20VM/Screen_Shot_2015-06-15_at_13.44.06_tmelh7.png)
