---
layout: post
title: "Signing Git commits with GPG"
date: "2016-11-29 11:04:48 +0100"
summary: "More secure & reliable online collaborating with Git"
tags:
  - "git"
  - "gpg"
  - "security"
---

GPG is the next best thing for encryption and online communication of any sort. GNU Privacy Guard (GPG) is an implementation of the OpenPGP standard. You might have seen these in emails, online articles (Lifehacker likes these) and even on Github which could have left you wondering how to get that nice `Verified` badge next to your commits.

![The verified badge next to Github commits](https://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,h_292/v1480418735/GPG signing commits/Screenshot_2016-11-29_11.47.23.png)

To get a grasp of what we're actually going to do let's break down how GPG works. GPG uses a public/private keypair which resembles a lot to the [SSH keys you might have generated for your servers](https://blog.thibmaekelbergh.be/2015/05/07/raspberry-pi-login-with-ssh-keys.html). On one side we have the private key which is encrypted and should never be exposed (otherwise people could act as you), and on the other side we have the public key which gets sent to a keyserver and is used to encrypt communication. The private key fetches this from the keyserver and then decrypts it. As a final step a trusted signature is added so GPG keys are known to be legitimate.

## Generating a GPG keypair
This tutorial assumes you took no prior attempts to get GPG up and running and starts from scratch.

You will need the gpg tools installed and available in your shell to generate a keypair. Binaries are available [on the official site](https://www.gnupg.org/download/). Most modern Linux distributions like Ubuntu and Debian have these preinstalled and for macOS you can install the latest version trough brew with `brew install gnupg2`.

Generate a key with `gpg --gen-key` which will start an interactive prompt. Use the default RSA & RSA which offers the best security for most purposes. Next you'll have to pick a byte size for the generated key. The higher the better in this case so let's choose for the maximum of 4096 bytes. GPG keys can have an expiration date (this is useful in corporate environments), but we are going to choose for it to not expire so we don't need to think about reinstating the keys. Just hit enter.

![Generating a key in the shell with the gpg tools](https://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,h_702/v1480418736/GPG signing commits/Screenshot_2016-11-29_12.04.36.png)

Next you will be asked to fill in some personal information. Fill this in accordingly since it makes the key more reliable if up-to-date and accurate information is used. __If you want to use GPG signed commits on Github make sure to enter a Github verified email address when asked for an email.__ Enter a secure passphrase (and store it somewhere like 1Password) to encrypt your private key.

Your key is now created and available in your security keyring (`~/.gnupg/secring.gpg`).

## Adding the key to our Github account
You can list the GPG keys on your system with `gpg --list-secret-keys --keyid-format LONG` which will output some info:

![Output from listing gpg keys](https://res.cloudinary.com/thibault-maekelbergh/image/upload/c_scale,h_764/v1480418735/GPG signing commits/Screenshot_2016-11-29_12.09.06.png)

We need the ID of our public key to generate the raw key, which we'll need for connecting our Github account. This is the string for the `sec` listed key after the bytesize (`4096R/<ID>`).

Copy this and paste it into the following command which will generate raw key output for the public key and then copy the output:

```console
gpg --armor --export <ID>
```

Head over to your [Github settings for keys](https://github.com/settings/keys) and add a new GPG key. Paste the output from the GPG export. This is the public key and is now associated with your Github account.

## Singing commits
You need to tell git to sign commits and which key to use. You can do this easily by setting a directive in your .gitconfig file with `git config --global user.signingkey <ID>` where <ID> is the id you get from listing the keys like we did before.

You can now append a flag to sign commits with git:

```console
git commit -S -m "🎉 My first signed commit"
```

Instead of explicitly passing the flag to sign commits each time you can also tell your .gitconfig to sign commits by default with `git config --global commit.gpgsign true`. I recommend this since you'll never forgot to sign it then.
__Do note that GPG signing is only supported in the shell and using most Git apps like Github.app, Tower, GitKraken will not be able to commit or push if global signing is set to true. Disable it altogether or temporarily switch it off by setting it to false and back to true when finished.__

### Where to go from here
For macOS you'll likely need to store the passphrase in the macOS keychain. You could use `gpg-agent` for this but the fastest is to install [GPG Suite](https://gpgtools.org/) which contains an app which looks like the macOS keychain to manage keys. Open this up and follow the steps and your GPG key will be linked in the macOS keychain so you don't have to provide a password each time you sign a commit.

Besides signing git commits GPG is becoming more and more the standard for secure communication on the web. You could look into signing emails, IM client messages and basically most forms of communication.
