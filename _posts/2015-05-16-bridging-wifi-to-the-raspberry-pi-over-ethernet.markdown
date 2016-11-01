---
layout: post
title: "Bridging Wifi to the Raspberry Pi over Ethernet"
date: "2015-02-16"
summary: "Steps to help you bridge a wifi connection from a MacBook over to a Raspberry Pi"
---

With my various attempts to try and setup Wifi and internet on my pi I was going back
to using it exclusively over ethernet with it directly hooked up to my router.

The pi was powered trough the USB port of my modem, which supplied just enough
power to run the B+ and A+. Alas I didn’t thank and in an unfortunate attempt to
update my older Raspbian distro to the new UI on my A+, I overcharged the USB port on my modem.

So now I was both out of power and out of internet on the pi.  
The network infrastructure is not that good in-house and I’m constantly working on it.  
I have enough power sockets at my desk but no wired connection to the internet.  
This got my thinking for a more creative solution to fix the issue.

I figured in theory it should be possible to hook up my pi to my MacBook and use my
MacBook’s Wifi connection and tether it to the pi. Turns out all I needed was **OS X 10.7+**
and a **UTP cable** (and a Thunderbolt to Ethernet adapter in my case of having a retina MacBook).

Hook up the cables to the pi while it is **powered off**, go to `System Preferences → Sharing` and enable the following settings:

![Screenshot of the sharing menu in OS X](https://imgur.com/SpOPnNW.png)

Choose the Wifi on the MacBook as entry point and send out trough the Ethernet port / adapter.
