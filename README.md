nori
----

> a dynamic dns client for Digital Ocean written in node.

This script will check for your external ip and update your domain's
dns record via Digital Ocean's api.

nori was inspired by http://pushingkarma.com/notebook/dynamic-dns-your-home-pc-using-digitaloceans-api/

Usage
-----

  1. Create an A-Record for your domain on 
     [Digital Ocean](https://www.digitalocean.com/domains) 
     (I use pi.drawwww.com for a raspberry pi server, for example). It doesn't
     matter what the IP is, because it will get updated automatically later!
  2. If you are behind a router, set up a static ip for your pc and forward any ports
     if needed. I wanted to ssh into my raspberry pi, so I have my router
     forward port 22 to it.
  3. Clone this project and copy config.js.sample to config.js. 
     Fill in the clientId and apiKey, provided on the Digital 
     Ocean [api page](https://www.digitalocean.com/api_access).
     Also set the domain name to the one that you specified above!
  4. Install dependencies via `npm install`.
  5. Set up a cron job to run the script. I use `@hourly /usr/local/bin/node ~/projects/nori/index.js >> ~/ddns.log`

License
-------

The MIT License (MIT)

Copyright (c) 2013 prestonp08 *at* gmail *dot* com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
