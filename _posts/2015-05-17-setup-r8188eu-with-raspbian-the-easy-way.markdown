---
layout: post
title: "Setup r8188eu with Raspbian the easy way"
date: "2015-04-02"
---

An example of a usb network adapter that uses this chipset is the popular and cheap TL-WN752N which you can get for around 10 euros.

Unfortunately though there’s both a v1 and a v2 of this dongle and the v2 uses the r8188eu which isn’t present in the kernel of each latest Raspbian. It still requires either manual compiling or installing of the kernel files.

Luckily things can be done really easily.

### Using an installer script (recommended way)

Some guys over at the Raspberry Pi forums wrote a great documentation and installer script to automatically match a download of the kernel files with the kernel you’re using.

I like to create a new folder in ~ for this called drivers and then download the script there.

```bash
mkdir drivers
wget https://dl.dropboxusercontent.com/u/80256631/install-8188eu.tgz
tar -zxvf install-8188eu.tgz
sudo ./install-8188eu.sh
```

Running this will match kernel version retrieved from `uname -a` with the downloads in the forum topic and put them in the right places and in the modules.  
It might be a good idea to [update your kernel](http://blog.thibmaekelbergh.be/2015/04/02/r8188eu-and-raspberry-pi.html#Troubleshooting).

> **Warning: doesn’t work for 3.18.11+. See Troubleshooting section for more info.**

### Copying over the required files

One way I tried before is to download the kernel files and just copy them over to the right directories. This requires quite a lot of sudo so maybe log in as root with `sudo su` or prefix commands with `sudo`.

This requires you to get the files on the Pi so either use a wired connection or [hook it up to your MacBook](http://blog.thibmaekelbergh.be/2015/02/16/bridging-wifi-to-ethernet-for-raspi.html).

Download the files first with wget and then unzip them to get the files from the compressed archive.

```console
wget http://cdn.thibmaekelbergh.be/8188eu.zip
unzip 8188eu.zip
```

The uncompressed archive contains both a .ko (kernel object) and .bin (binary driver).

Now copy the .ko to it’s corresponding folder, automatically matching your kernel version with: `sudo cp 8188eu.ko /lib/modules/$(uname -r)/kernel/drivers/net/wireless`

The same goes for the driver but in another path: `sudo cp rtl8188eufw.bin /lib/firmware/rtlwifi/``

Now that both files are in the right directory, create the dependency for r8188eu by running `sudo depmod -a`.

[Add your network](http://weworkweplay.com/play/automatically-connect-a-raspberry-pi-to-a-wifi-network/) to the interfaces and reboot and it should work.
A green light should flash now and dmesg output should be like:

```console
DHCPDISCOVER on wlan0 to 255.255.255.255 # Discovery trough the subnetmask of your router.
DCHPOFFER from 192.168.0.1 # Your router which is offering from a DHCP lease.
bound to 192.168.0.101 #The IP assigned to the Raspberry Pi.
```

### Building and compiling from source

You can find the source for the kernel files at the [Github](https://github.com/lwfinger/rtl8188eu) repo.

#### Troubleshooting

- Latest kernel 3.18.11+ has no drivers and kernel objects for r8188eu yet. My best solution is to downgrade to 3.18.10 with `sudo rpi-update 8751db9fd7138848c29cc55ec05f95c9eea80acb` and using the first method. It’s just a matter of time until files are online for 3.18.11+ though.
- Make sure the adapter is connected by running `dmesg | grep r8188eu`. Output should be something like: `[ 128.432309] usbcore: registered new interface driver r8188eu`
- Make sure you’re network has no MAC-filter or heavily configured firewall. If you’re network settings differ from those in the wpa_supplicant.conf, adjust them accordingly.
- Sometimes kernel versions might not match or you’re just better of updating the kernel. Use hexxeh’s built in kernel updater by running `sudo rpi-update`. If the command is unavailable to you, use hexxeh’s repo to manually install the [Raspberry Pi-update tool](https://github.com/Hexxeh/rpi-update).
- Outputting the usb connection with `lsusb` for the adapter [will not work](http://raspberrypi.stackexchange.com/questions/27462/wifi-dongle-not-appearing-in-lsusb).
- You can check if the module is listed as dependency, active and recognized with `modprobe 8188eu
