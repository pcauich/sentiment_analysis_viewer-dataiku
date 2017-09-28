# Sentiment Analyis on tweets that mention @dataiku

A simple Node.js app using [Express 4](http://expressjs.com/).

First we perform a sentiment analysis on tweets data(Tweets that mention specific account @dataiku) - since 2012 to 2017
Then,
We scrape tweets using a python script and the twitter public search api to collect data, then we apply sentiment analysis using Python and a NLP module, specifically the module called textblob, built on top of python nltk.


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/pcauich/sentiment_analysis_viewer-dataiku.git # or clone your own fork
$ cd sentiment_analysis_viewer-dataiku
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

## Attribution
Created by: Pedro Cauich

Credits to: 
- [Dataiku Dss](https://www.dataiku.com/)
- [Python NLTK](http://www.nltk.org/)
- [TextBlolb](https://textblob.readthedocs.io/en/dev/)
- [Twitter Advanced search](https://twitter.com/search-advanced)
- [Leaflet](http://leafletjs.com/)
- And more...