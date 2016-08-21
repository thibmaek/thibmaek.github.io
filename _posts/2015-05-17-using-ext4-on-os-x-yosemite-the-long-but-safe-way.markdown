---
layout: post
title: "Using ext4 on OS X Yosemite, the long but safe way"
date: "2015-04-08"
---

ext4 is not OS X compatible (which is stupid) and getting it to work is a big hassle. There are tools but their unsafe. Luckily I found a safer way.

### Some background information

I was configuring my Raspberry Pi file server and was looking for a way to get R/W, journaled and large block size for my external HDD’s connected.  
Turns out, anno 2015, there is no universal disk format that complies with all the above.

Thus, I formatted my drives to ext4 and set the server up fine. But I wanted to be able to connect my drives to OS X if I ever needed to.

Things like [Paragon extFS](https://www.paragon-software.com/nl/home/extfs-mac/) and [OSXFUSE](https://osxfuse.github.io/) seemed promising, easy to install and easy to integrate with OS X applications.  
I installed extFS and everything worked, until…

Numerous kernel panics in one day, leading to random system reboots. Very irritating when you’re transferring 64GB of files from disk to disk.  
Searching the internet for a while I found that people were having [the same issue](https://apple.stackexchange.com/questions/29842/how-can-i-mount-an-ext4-file-system-on-os-x) using these applications.

I uninstalled extFS (which I spent 10 minutes to…) and searched for another solution.

### Linux to the rescue

Logical thinking brought me to the fact that Linux works great with ext4 and I still had Parallels 10 on my MacBook.  
Theoretically I could install a Linux distro, share the drive and still have a good transfer speed.

I pulled Ubuntu 14 Server from the net, installed it in a VM with the bare minimum because I didn’t want a huge 10GB VM eating up all the space on my MacBook’s SSD.  
Once setup it was time to mount the hdd to a folder, so it could be shared.

Listing the disks with `sudo fdisk -l` I found that it was located at `/dev/sdb1`. Great, now all I had to do is to mount the drive to a new folder (/mnt/hdd) and I could go on to sharing it:

```bash
sudo nano /etc/fstab

# the line below goes in fstab
/dev/sdb1 /mnt/hdd ext4 sync,noatime 0 1
```

Save and exit and mount all volumes with `mount -a`. Done for the mounting part, on to the sharing part.

### Get yo’ SSH on.

I searched for a way in Parallels, but apparently it has no sharing support for guest to host, only OS X to Linux. Damn, this meant I had to do wireless transfer to share the folder.

There are various ways of sharing the folder /mnt/hdd to my Mac.  
There’s SMB and AFP, which I’ve used before but have no idea about how fast they write, technically they should be faster than SSH (which I ended up using), but I have yet to tinker with it.

I set out for SFTP (SSH) to share the files because I have Transmit on OS X and it makes it easy to share files and because SSH was easy enough to configure.

Too my surprise there is no ssh server installed in Ubuntu 14.04 so I had to manually install it, pulling it from apt `sudo apt-get install ssh-server`.  
Now some edits to the configuration file and I should be finished. The following lines were changed in `/etc/ssh/sshd_config`:

```console
PubkeyAuthentication yes # change to no
PermitEmptyPasswords no # change to yes
PasswordAuthentication yes # make sure this is set to yes
```

Don’t worry about the safety that’s turned off with those edits, you’re doing everything locally so there should be no outside access. Besides this VM is only used for sharing HDD mountpoint so no there’s no critical stuff to damage.

Restart the ssh server with `sudo service ssh restart`, log in to the server on your Mac with either Transmit, Cyberduck or Terminal and voila, you got the share all set up.
I got a solid 4-8MB/S transfer speed with this setup:

![Transferring content in Transmit](https://imgur.com/sVLbx3r.png)

> Edit 9/04: I just configured ftp instead of sftp and got 11MB write speed, seems like this is a better option!

Admitted, it’s kind of a bigger hassle to set up, has more overhead for the machine and eats more resources.  
Then again, it won’t be used that often and some tinkering with Linux never killed any dev ;)

> If you set your mount point to /mnt/hdd be sure to `chown -R yourusername hdd` on the folder. Without this the user won’t have any write permissions since you’re at system root.
