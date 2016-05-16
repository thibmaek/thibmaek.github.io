---
layout: "post"
title: "Planning lunch with a Slackbot on Resin"
date: "2016-05-16 11:54"
---

> This article originally appeared on the [Resin.io Blog](https://resin.io/blog/planning-lunch-with-a-slackbot-on-resin-io/)

## The story begins…
Our group of friends uses [Slack](https://slack.com) as the main communication/collaboration tool for school work and our obligatory random banter. Usually when class starts in the morning we're already busy thinking of lunch and where we'll get it.

I'm a late sleeper and my good ideas usually come late at night,  I've been wanting to dip my toes in the waters of Slack's wonderful API for a while now and with the clock at 2AM it seemed about the right time to give it a go.

The idea was rather simple: a lunchbot using Slack's Bot API that suggested places to eat so we could simply pick one. After browsing trough the documentation for a while I found out there is this wonderful framework called [Botkit](https://github.com/howdyai/botkit) that does most of the heavy lifting for you and just provides a nice & easy way to quickly write a bot that talks and integrates with other API's.

The code is posted on [Github](https://github.com/thibmaek/lunch-mutn) so be sure to pull it from there if you're interested or want to collaborate.

## Making the bot talk
The bot is written in Node using Nodemon, Botkit & Lodash.
I love working in this environment because it doesn't limit me and since I'm still a student I love to learn new things. Working in this environment gives me that exact opportunity.

The bot listens to messages received in our `#general` channel by mentioning the bot or private messaging it. It then replies with a place to eat accompanied by a Google Maps link, that it pulls from a module containing a function for grabbing a random venue with it's title, longitude and latitude from a JSON file. This module parses the JSON object and shuffles it using Lodash. I could've probably went for a more ES2015 approach instead of using Lodash for this but I didn't want to make things more complicated since I already had Lodash loaded up in my dependencies.

Ok, so after about an hour I've gotten this up & running in my local environment but stopping the server on my MacBook of course meant that the bot would go offline.  
I now had to find a way to make the lunchbot always stay online and started my search for a good deployment platform.

## Picking a home for the bot
Before starting on the coding part I scaffolded a project base from my teacher's awesome Yeoman generator: [devine-project](https://github.com/devinehowest/generator-devine-project). This included some configuration files to deploy to Heroku so obviously this was my first choice as to where to deploy the application. But it didn't all go as planned…

I still somehow find it tedious & time consuming to get Heroku linked correctly as a Git remote and get everything up & running the way I like it. Nevertheless I succeeded to get it online after a while, at least that's what I thought.
For some odd reason (_or a mistake I made_) the bot went offline after about 60 seconds of uptime. I didn't want to look into getting this fixed in Heroku and wasting my time on configuring the setup, since I could use that time to do other fun things like implementing features for the bot.

I glanced at the Raspberry Pi B+ laying on my desk, unused. Resin once came to my attention in the past and I liked the platform's look & feel and ease of use, but hadn't gotten around to fiddling with it and actually deploying an app using Resin. This was my chance. I created a new application, downloaded the OS, installed it to the Pi's SD card and connected it to my 'makeshift bedroom server' and within minutes I got everything online. The fact that I wouldn't suffer from Heroku's sleep time for free plans, and actually having an always on hardware device running the code was something I liked a lot.

![](http://imgur.com/6eDwrkF.png)
![](http://imgur.com/1aCf2nN.png)

It all came down to this. I added the remote I found trough Resin's intuitive dashboard and entered those magic 4 words:

```console
git push resin master
```

I saw the application building and eventually was greeted by that majestic unicorn that told me my app was up & running without errors and was updating live on my device. The update process took some time on the first push but as I eagerly watched the code getting pulled on the Pi I rejoiced when I knew I've did it and saw this confirmation:

![](http://imgur.com/EeErebz.png)

## Conclusion
This was a super fun experiment for me to further adventure into Javascript while exploring a new API but most of all this experienced learned me how extremely easy and quick it was to take advantage of Resin as a deployment tool.

The scope of this project is rather small and to be fair it ain't rocket science but nevertheless I'm proud of it. This experience showed me the power of Resin and I'll surely try and use it in future projects. I think it could really come as an advantage in large scale projects. Hopefully my late night ideas will occur soon!
