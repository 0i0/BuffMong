BuffMong
========

JSON API Buffer on Mongo on Heroku

so basiclly buffy gets a periodic input of current data from an external element.
than when requested she can squirt long streams of past incidents from her memory

## Requirments
* [NodeJS](http://github.com/ry/node)
* [NPM](http://github.com/isaacs/npm)
* [Heroku toolbelt](https://toolbelt.heroku.com/)
* [MongoDB](https://www.mongodb.org/)


## Getting Started
    git clone git://github.com/0i0/BuffMong.git APPNAME
    cd APPNAME
    npm install

## Configuring the URL to  Buffer

Go to config.js file and configure the url
    
## Running Localy
    node app.js
Visit [http://localhost:8000](http://localhost:8000)

## Creating Heroku App
    heroku app:create APPNAME

## Deploy
    heroku config:add NODE_ENV=production
    git push heroku master