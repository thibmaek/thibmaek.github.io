---
layout: post
title: "Raspberry Pi login with SSH keys"
date: "2015-05-07"
---

[SSH](http://en.wikipedia.org/wiki/Secure_Shell) is a great networking protocol. Secure, fast and commonly-used are probably some of the reasons why it’s the default for communicating with your Raspberry Pi. But having to type in a password each time you log in sucks.

Luckily SSH has these things called keys which you can use for password-less logins. Using SSH keys is really simple if you have a basic understanding of networks (like really basic) and the shell. Once you get the idea you could basically use SSH-keys for anything SSH related, from Github to Digital Ocean and Vagrant.

## Generating SSH Keys

Setting up SSH keys is always the first thing I do on new Raspberry Pi images, but before doing so I like to install Bonjour on the pi first because then you don’t have to lookup IP’s.  
*Avahi sometimes requires an update first.*

```console
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install avahi-daemon --fix-missing #I had some errors without fix-missing flag
```

Safest way is to reboot your pi, but `sudo service avahi-daemon` restart works just as well for our setting up right now.

Ok so now that is configured, it’s time to build the actual ssh keys.  
Everything we do will typically be stored in a hidden directory in the home folder called `.ssh`. Generating a new key there is as easy as:

```console
ssh-keygen -t rsa -C "example@example.com"
```

This creates a new key with the RSA type and creates it from the comment email address you provide.   ssh-keygen will ask you for a password (make it secure) to create the new keys.

This will generate two new keys in the `~/.ssh` directory, called `id_rsa` and `id_rsa.pub`. It’s important to pause and think about how they act.  
The first one is your private key and the .pub one is the public one. Typically, matching keys will require you to provide the public one to a service (Like Github, or the Pi login over SSH) so it can identify you. The first private key matches with the public one to authenticate you.

**Never ever ever ever post the contens of id_rsa anywhere, this could lead to a huge security hole in your machine.**

Now there are two options to match keys with the pi:

### ssh-copy-id

There’s this great application called ssh-copy-id which automatically matches the contents from the public key to a ssh host.  
On Linux it’s mostly installed by default, but OS X can install it from brew with: `brew install ssh-copy-id`.

Now you can just match the key by running it and providing an ssh host:

```console
ssh-copy-id pi@raspi.local
```

Provide the password once more and keys should be matched. Try logging into your pi and you shouldn’t be asked for a password.

### Manually copying the contents

Get the contents of the public key with `cat ~/.ssh/id_rsa.pub` and copy them somewhere.

Log in to your pi and enter the ssh directory. Create it if you dont have it with `mkdir ~/.ssh`.
Typically the key authenticator is not present on a new Raspbian install so create it with:

```console
touch ~/.ssh/authorized_keys && nano ~/.ssh/authorized_keys
```

Paste in the contents of id_rsa.pub you copied before, save and exit.
Now log out of the pi and log back in. No password should be provided.

## SSH config

As an extra you could provide some info in ~/.ssh/config on your main machine to make logging in even easier:

```console
host pi
  hostname raspi.local
  user pi
  port 22
```

Now logging in is as simple as `ssh pi`.
