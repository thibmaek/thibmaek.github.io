---
layout: post
title: "Getting location data in Photos for OS X"
date: "2015-08-10 13:59"
---

With all the recent changes going on in the Apple ecosystem I decided (with discontent) to ditch my good old pal iPhoto for Apple's new Photos app to keep myself up to date.

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Photos.app is fucking with my photo-workflow. I wish Apple never created this app :&#39;(</p>&mdash; Thibault Maekelbergh (@ThibMaekelbergh) <a href="https://twitter.com/ThibMaekelbergh/status/587962799852249088">April 14, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Fair enough after a month or two I got myself familiarized with it and could get a semi-good workflow for managing my library and editing Photos.  
But the one thing I couldn't find was how to **add a location to** an album like you could before in iPhoto.  
In iPhoto you could select an event, click the info panel and add it at the bottom with a visual display of a map to guide you. **Photos had no such thing** when I looked for it.

Well I thought '*okay I certainly had to be looking over it*' and set out to call AppleCare to have them tell me where I could add a location.  
So this morning to my surprise one of the employees at AppleSupport told me the feature was no longer present in Photos, and he was as surprised as I was to find that out.  
**Photos could only display location metadata after import (like with when importing from your iPhone), not after they'd already been imported (like with my DSLR).**

Anyway removing this feature was rather stupid, but I really wanted to be able to look at locations where I shot pictures once in a while so I searched for apps which let me add the data before import.

There was *exiftool* but, even though I'm experienced with the command line, was hard to work with and I had to get log format files to add location.  
Luckily I found [GeoTag 3](http://www.snafu.org/GeoTag/) which at first glance seemed way more intuitive.  
I downloaded it from the site and decided to try it out.

![](http://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,w_1024/v1439210217/Geotag%20Photos.app/Screen_Shot_2015-08-10_at_14.28.55.png)

Two days ago I went to [WeCanDance Festival](http://wecandance.be) and wanted to get location for a photo I took there. I dragged the photo from Photos to my desktop and opened that photo in GeoTag. It turned out to be exactly what I was looking for.  
The photo opened and at the bottom I was able to use the Google Maps API to pinpoint a lat/long location and save it to the photo's EXIF data.

![](http://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,w_1024/v1439210214/Geotag%20Photos.app/Screen_Shot_2015-08-10_at_14.29.44.png)

Removing the photo from Photos and reimporting the one on the desktop in the Album worked and sure enough when I checked out the Info panel for that photo it showed the correct location!

![](http://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,w_1024/v1439210217/Geotag%20Photos.app/Screen_Shot_2015-08-10_at_14.30.22.png)

So it seems this is a working and easy solution for Apple's stunningly stupid decision to remove this feature from Photos. While this method works, I hope that Apple brings it back in some future version of Photos.

> Update: I submitted GeoTag to Cask so you can install it with homebrew Cask.
