---
layout: post
title: Executable HTTP Server Script
summary: "No more cross origin errors when working on static content locally"
tags:
  - "networking"
---

Get cross-domain errors in the console because you’re running
`file://` instead of a real `http://` server suck.  
I rarely use the file protocol anymore because it’s way simpler to just start a server from terminal, it’s baked into OS X!  
Also I hate starting MAMP for anything without a database.

The only real magic it requires is a python command: `python -m SimpleHTTPServer` but I simplified this even more and created a noob-proof executable script, which you can just double click to start the server.

It will also check if you have an entry point (*index.html* for example) and only run the server if the entry point file exists. Otherwise it will send a notification (10.8+) with the error message.
If the entry file is found it starts the server and opens it in the browser.

Double clicking is the only required skill here!  
You an find it in the gist below or download the raw file on Github Gist.

{% gist thibmaek/eadfae1c2549d0ee3899 %}

> Getting errors?  
Try cd’ing to the directory where you placed the Server Script
and use `chmod +x HTTPServer.command` to make it executable again.

> More about the python command it possible options like port specifying? Read it [here](https://docs.python.org/2/library/simplehttpserver.html)
