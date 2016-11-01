---
layout: "post"
title: "Manually migrating existing data to ownCloud"
date: "2016-11-01 12:17"
summary: "Easily migrate existing files and folders from an external HDD to your ownCloud's data directory"
---

Before we start off, let's give some background as to how this blogpost came to be. I can imagine lots of people may think the same as I do but don't find the right approach to accomplish the topic of this post.  
Connected to my Raspberry Pi is an external HDD with my series, backups, disk images, etc on it. It always served its purpose shared over smb, that allowed me to easily transfer files on my MacBook by simply connecting to the network drive. It had one limitation though and that is that the files (since shared over smb) are only accessible on my local network. If I was at school I had to Facetime my brother and tell him how to connect, where to find the files, download them to his computer and send them over to me via iMessage. You get how cumbersome that is.

So enter ownCloud, a promising platform built on PHP that puts your 'own cloud' on the server (a Raspberry Pi in my case). I had dabbled with it in the past but never got around to set it up the right way. So, I decided to do it good this time, set it up, get SSL, add my external hdd as a source and have my files available everywhere.

## OC Data dir, ownerships and …php
I spent the largest part of October working on getting this in order. It proved to be a difficult path since there is so much to take into account when trying to do it good. First off, I wanted a performant web server so went for Nginx. I later had to decide to run ownCloud trough Apache and use Nginx as a reverse proxy for Apache's port.

Owncloud runs as the `www-data` user which posed a lot of problems for my current ownership rights on my files. This was the easiest to overcome though.

Oh and if you're running a Debian 8 based distro (Jessie) on your Pi, don't even bother to try and install php7 to run ownCloud on. That was straight (dependency) hell.

## Ready for migrating?
So OC was set up but it seems like OC doesn't work in the way that you can multiple/external sources to your server. Everything OC displays as files & folders to your user is described as `data_directory` in the `config.php` for OC. Setting that to the root of my HDD didn't work because it doesn't read current directories & files, but creates a new datadir per user. So now what? How do I succesfully get my files on OC, giving them rights, not messing them up and still making them available over samba?

Actually with a little bash knowledge and a quick look in the OC v9 docs it was easier than I would've figured. Let's start off by inspecting current folders with `ls -l`. I also checked the filesize with an `fs` custom function so that it is clear these folders were rather large to migrate.

![ls -l output for directories](https://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,h_764/v1477993064/Owncloud Migration/Screen_Shot_2016-11-01_at_10.09.58.png)

So all folders I needed to migrate are owned by `pi:pi` and the Owncloud data dir (Owncloud/username/files/) is owned by `www-data:www-data` (Debian default web user). That already made it harder to move files around with `mv`. I decided to, instead of switching users, just use the root user to move the directory to the OC data dir. Before starting I quickly exported an env `$OWNCLOUD_DATA_DIR` so I could have that as a shortcut. This way we could quickly migrate with:

```shell
# Export an env so we can use it as a shortcut everywhere else
# opt. put this in your ~/.exports or ~/.bashrc
export OWNCLOUD_DATA_DIR=$HOME/Library-2/Owncloud/

# Move the folder to OC data dir (be careful not to append trailing folder slashes!)
sudo mv <folder> $OWNCLOUD_DATA_DIR/<user>/files/<folder>
```

![rights are in order](https://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,h_795/v1477993064/Owncloud Migration/Screen_Shot_2016-11-01_at_10.13.00.png)

Migrating was instant since we're moving on the local fs. Checking the above screenshot you can see the rights are still the same of course. Own the folders to the ownCloud user and change the permissions to octal 755:

```shell
# Recursively own the folder to www-data
sudo chown -R www-data:www-data $OWNCLOUD_DATA_DIR/<user>/files/<folder>

# Set permissions so www-data has rwxr and group has read.
sudo chmod 755 $OWNCLOUD_DATA_DIR/<user>/files/<folder>
```

## \<rage>WHY ISN'T OWNCLOUD SHOWING MY FILES?\</rage>
![OC is not showing the files on the server's frontend](https://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,h_667/v1477993064/Owncloud Migration/Screen_Shot_2016-11-01_at_10.13.38.png)

Even though my permissions and ownerships are in order on the Unix fs they weren't showing up in the OC frontend.
My rage started to transform into immense sadness but then I found this in the [OC v9 docs for occ](https://doc.owncloud.org/server/latest/admin_manual/configuration_server/occ_command.html?highlight=occ#file-operations):

> occ has three commands for managing files in ownCloud…
>
> …The files:scan command scans for new files and updates the file cache

So the `occ` binary located in OC's installation path (eg. `/var/www/owncloud`) could accomplish what I needed to wrap this post up! A quick test in the shell with some dummy files proved to work. A recommendation though:
since `occ` scans every file and not only the changed files you're probably best to move all the folders on the local fs first and then scanning them. If you work in you're Raspberry Pi's shell headless like me, I **strongly** recommend that you run the occ scan command in a multiplexer like `screen` since the process can take really long when you have lots and large files & folders, and closing the ssh connection will stop the scan.

I also made an alias for future use, and had to set screen to use /bin/bash as a login shell so I could access my alias:

![setting up screen and oc_rescan alias](https://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,h_747/v1477993064/Owncloud Migration/Screen_Shot_2016-11-01_at_10.30.10.png)

In your new screen instance you can now run `oc_rescan <user>` to start the scan, quit the instance, exit your terminal and check back once done and all the files will now be in OC & the local fs.

![oc_rescan scanning the files in screen](https://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,h_702/v1477993069/Owncloud Migration/Screen_Shot_2016-11-01_at_10.30.58.png)

Hope this was insightful and if you were in the same issue as me it's now solved!

> __PS: If you (like me) backup development folders with node_modules I'd clear them first. They include a humongous amount of files and take awfully long to process in `occ`. You're best of clearing them first with this command, since you probably don't want them backed up anyway:__
>
> ```shell
> # . should be your root folder with dev projects (or your external hdd root perhaps…)
> find . -type d -name 'node_modules' -print0 | xargs --null /bin/rm -rf
> ```
