# myFtp_MiloAnton
## _The Last node ftp server and client you'll ever need_

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)
[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![GitHub](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com)
[![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)

myFtp is a node compatible, FTP client AND server,
coded in JavaScript.

- Project to be returned before December 10th at 8PM
- Feel free to give me bonus points for happiness and "joie de vivre"
- ✨Magic✨

## How about a laugh ?

<img src = "https://readme-jokes.vercel.app/api"></img>

## Features

- Can connect to several clients at the same time
- Lightweight and compatible with every computer 
- Easy navigation in the servers filesystem
- Import and export files in just one command (_not yet implemented_)
- A child could use it, obviously

myFtp_MiloAnton is a lightweight ftp server and client based on the RFC.

> The purpose of this challenge is to create an FTP client and server. 
You CAN use any protocol you want [ if interested, you can check and respect the RFCs] 

This text you see here is written with lots of love ! To get a feel
for a great README.md file.

## Installation

myFtp_MiloAnton requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies with ```npm install``` before tryinbg to use either the server or the client (do this in each folder).

```sh
npm install
```

You have several choices to run, build, and start a transcrypted version of either the server or the client : 

```sh
npm run dev #Used to try it in a dev environment 
npm run build #Transcypt the code thanks to Babel
npm run start #Production environment, best performance you can get (you need to have built the code beforehand)
```

## Execute 

Once you've done the steps above, you should have a ```.dist```folder in your client or server folder according to the one you've built. 

You can execute your final code by doing so : 

```sh
cd .dist
node main.js
```

## Commands 

The server handles the following commands:

* `USER <username>`: check if the user exist
* `PASS <password>`: authenticate the user with a password
* `LIST`: list the current directory of the server
* `CWD <directory>`: change the current directory of the server
* `RETR <filename>`: transfer a copy of the file _FILE_ from the server to the client
* `STOR <filename>`: transfer a copy of the file _FILE_ from the client to the server
* `PWD`: display the name of the current directory of the server
* `HELP`: send helpful information to the client
* `QUIT`: close the connection and stop the program

## License

None :) 
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
