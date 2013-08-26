nori
----

nori is a dynamic dns updater for Digital Ocean written in node.

This script will check for your external ip and update your domain's
dns record via Digital Ocean's api.

nori was inspired by http://pushingkarma.com/notebook/dynamic-dns-your-home-pc-using-digitaloceans-api/

Usage
-----

  1. Create an A record for your domain on 
     [Digital Ocean](https://www.digitalocean.com/domains) 
     (I use pi.drawwww.com for a raspberry pi server, for example). It doesn't
     matter what the IP is, because it will get updated automatically later!
  2. If you are behind a router, set up a static ip for your pc and forward any ports
     if needed. I wanted to ssh into my raspberry pi, so I have my router
     forward port 22 to it.
  3. Clone this project and copy **config.js.sample** to **config.js**. 
     Fill in the clientId and apiKey, provided on the Digital 
     Ocean [api page](https://www.digitalocean.com/api_access).
     Also set your domain name that you want to use!
  4. Install dependencies via `npm install`.
  5. Set up a cron job to run `npm start`.

License
-------

MIT
