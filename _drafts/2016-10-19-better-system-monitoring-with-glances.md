---
layout: "post"
title: "Better system monitoring with Glances"
date: "2016-10-19 12:02"
---

Recently my eye fell upon an amazing Python tool called [glances](https://github.com/nicolargo/glances), which monitors your system. This post goes trough installing, starting and monitoring it on a Raspberry Pi and making it work remotely.

## Installing glances on the Raspberry Pi
When starting off it's always a good idea to go trough the README & wiki of the official repo. This post will mainly guide you trough steps already described in the README but it focusses also on adding a service you can start trough `systemd` and enabling remote connection possibilities with `nginx` & port forwarding.

We're going to install it with pip since this is the easiest & most easily upgradeable way of installing glances.
Installing it trough pip will make sure dependencies are automatically satisfied. There are some things we need to get in order first though:

* Python v2.7.x or a version higher than 3.3 if you're already on Python 3
* Python headers to install `psutil`. The `python-dev` package includes these

You can fetch all the packages required to set up installing from pip with this oneliner:

{% highlight shell %}
sudo apt-get install python-dev python-pip && sudo pip install glances bottle
{% endhighlight %}

We also installed bottle alongside of glances here so we can start the web interface, which we'll use to access it remotely. Glances should now be installed and you can open its interface by running `glances` on your Pi or in an SSH session.

![The glances interface running on the Pi](https://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,w_1609/v1476951307/Glances/Screen_Shot_2016-10-20_at_10.13.24.png)

While that might be fine for occasionally checking like you did with `htop/top` it won't suffice for our needs. Let's hit q and move on to adding it as a service.

## Running as a service with systemd
