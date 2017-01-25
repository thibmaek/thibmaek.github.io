---
layout: post
title: "What does Yarn actually want?"
date: "2017-01-25 11:54:33 +0100"
summary: "A 4 month later review, summarizing why I'll ditch yarn"
tags:
  - "javascript"
---

So [yarn]… I remember stumbling upon it on Twitter, reading the initial announcement and immediately find myself thinking they've invented the holy grail of dependency management. I decided to install it right away, the only installation method provided at the time being by curling it to sh.

I was blown away by the speed, ease of use, better syntax and nicer 'UI'. Now, 4 months later, I've completely come to hate it, advising in my Contribution guides to not use this for projects.

About a month ago I decided to create a webapp that served as a [showreel for student work from Devine students]. Since I was deploying on Heroku, I did not find it necessary to go all out on devops solutions like Docker, so decided to create this local and just deploy to heroku from master. Deps were managed with yarn and it worked great locally so I decided to push this to the cloud.

I used [zeit/serve] to serve the static content but immediately on checking my Heroku dyno which started building everything failed to run. I checked the logs and saw a dependency was missing which failed to start the serve dependency. With this in mind, I headed over to the Slack team for zeit and asked it there. Nobody could make up why it was failing, but then came the magic words:

> "Try deleting your lockfile and see what that does"

Heroku uses yarn when it finds a Yarn.lock in the project. So I deleted that, deployed again and sure enough the app was running and not missing the dependency anymore. How was it that a dependency tool was breaking my entire build (probably due to caching behavior)? For me, having yarn interfere here was the greatest reason to ditch it.

But that's just one of the many scenarios that I've came across in these months of using it. Another thing that really gets under my skin is the fact that they don't have any good guidelines about how to install yarn the correct way. Take a look at the [installation page] and see what the recommended method of installing is for macOs:

> You can install Yarn through the Homebrew package manager. This will also install Node.js if it is not already installed.

Alright cool, yarn is available on my favorite package manager. Unfortunately the _'if it is not already installed_ only counts if node is not already installed __with brew__. Thus, using a version manager like nvm (which, let's be honest, saves you a lot of work) won't work since then `brew install yarn` with install node and yarn in brew, rendering nvm useless because brew will take precedence over nvm. I could just unsource it and use nvm, but this would leave me with a 100MB+ straying dep installed from brew. [Oh and there is no flag to skip the node dependency].

> Let's also quickly mention here that using nvm and yarn is pure hell for global modules, since they're unmigrateable and upgrading your node version will unsource them all from the PATH!

OK, so brew isn't an option. Taking a peek at the [Alternatives] you can see npm is also listed there. I've already got node & npm trough nvm so let's install yarn with npm right?

> Installation via npm is generally not recommended. npm is non-deterministic, packages are not signed, and npm does not perform any integrity checks other than a basic SHA1 hash, which is a security risk when installing system-wide apps. For these reasons, it is highly recommended that you install Yarn through the installation method best suited to your operating system.

So as you see, using npm is strongly discouraged by yarn. They recommend using _'the method best suited to your operating system'_, but we of course already know that won't be the case.

Which ultimately leaves us with a last option, which frankly works 'the best' of all. That's the original method of installing when they released it to the public:

> One of the easiest ways to install Yarn on macOS and generic Unix environments is via our shell script. You can install Yarn by running the following code in your terminal: `curl -o- -L https://yarnpkg.com/install.sh | bash`

This installs much faster than any other method (which is why CI, CD and cloud services use it), but has one of the biggest disadvantages of all: it's not upgradable.
Initially we had `yarn self-upgrade` to rerun that curling to bash and upgrading our yarn version. But the yarn team decided [it was better to ditch that]. So upgrading means you'll manually have to re run that command.

To sum up: I want to love it. I love the speed. I love the UI. I love the fact that it comes from the Facebook OSS team. I love that fact that it inherits principles from rubygems and that it tries to solve the issues currently present in npm. But I hate the fact that it introduces more aggravating issues by trying to solve npm's. So long story short, I'll be ditching it for anything not related to quickly fetching from the registry when working on a project locally, with Docker. Perhaps when they release v1 I'll completely change my mind…


<!-- Links -->
[yarn]: https://yarnpkg.com
[showreel for student work from Devine students]: https://devinereel.herokuapp.com
[zeit/serve]: https://github.com/zeit/serve
[installation page]: https://yarnpkg.com/en/docs/install
[Alternatives]: https://yarnpkg.com/en/docs/install#alternatives-tab
[Oh and there is no flag to skip the node dependency]: https://discourse.brew.sh/t/yarn-depends-on-node-but-i-have-non-homebrew-node/545
[it was better to ditch that]: https://github.com/yarnpkg/yarn/issues/1187
