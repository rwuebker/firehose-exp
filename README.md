# shApp

## Summary

This web appliction is a project to experiment and provide a glimpse into the power of Twitter's API. The Twitter firehose blasts appromately 20,000 tweets per second around the globe. Twitter offers a sample (1%) of the steaming firehose for free through the use of their streaming API where user's can track certain keywords as demonstrated through the 'Twit Roulette' page on this application. User's can also search previously posted tweets specifying parameters as demonstrated through the landing page with a search for tweets with images and the keyword steak (among other filters in an attempt to keep it relevant to steak). Details of the Twitter API are located [here](https://dev.twitter.com/overview/documentation).

The streaming portions of the page have no limit as to how many times users can sample the firehose, however the REST API (searching previously posted tweets) has limits which might cause the website data to be unavailable for small periods of time. The details of Twitter's API offerings are explained well on this [link](http://brnrd.me/twitter-apis-vs-twitter-firehose/).

## Usage

The landing page has a button that when clicked displays steak photo tweets posted recently from the Twitter Rest API.
The Twit Roulette page has a text box where a user can enter a keyword and the amount of seconds they would like to collect tweets from the streaming Twitter Firehose sample.  When the displayed button is clicked the Firehouse will be sampled for the specified amount of seconds and the results that contain images with the keyword provided will be displayed on the page.

## Cloning Repository Details

To run this application on your machine you would need Twitter API developer keys which can be obtained [here](https://apps.twitter.com/apps). These would need to be located in a 'config' folder on the root level which would contain a local.env.js file that has these contents and pasting in your keys:

```javascript
module.exports = {
    'twitterAuth' : {
        'CONSUMER_KEY'        : 'xxxxxxxxxxxxxxxxxxxxx',
        'CONSUMER_SECRET'     : 'xxxxxxxxxxxxxxxxxxxxx',
        'ACCESS_TOKEN'        : 'xxxxxxxxxxxxxxxxxxxxx',
        'ACCESS_TOKEN_SECRET' : 'xxxxxxxxxxxxxxxxxxxxx'
    }
};
```
Finally, run 'npm install' and 'bower install' and run 'gulp dev' on the command line. 

## Key Components

This application was built with the Express generator on the back end and Angular on the front end. This website has a very simple API where get requests are made to the 'search' and 'streaming' (firehose sample) Twitter API. The Angular portion is tested with Karma. Routing on the front end is provided by angular-ui-router. This application makes use of the npm module 'twitter' to establish a connection to the Twitter API and make requests.

## API

This application has a simple API with two endpoints:

* /api/tweets - searches tweets for steak images
* /api/firehose - captures firehose sample with images and certain keywords

These endpoints are accessed through an AngularJS service.

## Contributing

To contribute to this application please follow these steps:

1.  Fork the repo
2.  Cut a branch off of branch: master
3.  Make sure you do not break the build
4.  Make a pull request with a working branch with details in the comment section
5.  Your pull request will be reviewed and merged if accepted 






