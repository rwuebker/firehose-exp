var express = require('express');
var router = express.Router();
var config = require('../config/local.env');
var Twitter = require('twitter');


// var client = new Twitter({
//   consumer_key: config.twitterAuth.CONSUMER_KEY,
//   consumer_secret: config.twitterAuth.CONSUMER_SECRET,
//   access_token_key: config.twitterAuth.ACCESS_TOKEN_KEY,
//   access_token_secret: config.twitterAuth.ACCESS_TOKEN_SECRET
// });


  //set up twitter connection
  var client = new Twitter({
    consumer_key: config.twitterAuth.CONSUMER_KEY,
    consumer_secret: config.twitterAuth.CONSUMER_SECRET,
    access_token_key: config.twitterAuth.ACCESS_TOKEN,
    access_token_secret: config.twitterAuth.ACCESS_TOKEN_SECRET
  });

/* GET users listing. */
router.get('/tweets', function(req, res, next) {
  //initialize search string
  console.log("inside the /tweets api endpoint");
  var searchString = "steak -shake -tube -Tube -@Steak_goddess -filter:retweets filter:images "
  var tweetArray = [];
  var count = Date.now()%2;
  count = count + 20;
  
  //call to twitter api to get tweets
  client.get('search/tweets', {q:searchString, count:20, include_entities:true}, function(error, tweets, response){
      //load tweet info into an obj and pass that into tweetArray
      for(var i = 0; i < tweets.statuses.length; i++){
        var obj = {};
        obj.user = "Written by: " + tweets.statuses[i].user.screen_name;
        obj.created_at = tweets.statuses[i].created_at;

        //this is to format link text to get rid of urls and &'s
        obj.text = tweets.statuses[i].text;
        var strArray = obj.text.split(" ");
        var newArray = [];
        var linkIndex = [];
        for(var j = 0; j < strArray.length; j++){
          if(strArray[j].indexOf("http") === -1){
            if(strArray[j].indexOf("&amp") !== -1){
              newArray.push("&");
            }else{
              newArray.push(strArray[j]);
            }
          }
        }
        obj.text = newArray.join(" ");
        console.log("this is media: ", tweets.statuses[i].entities.media[0]);
        obj.media = tweets.statuses[i].entities.media[0].media_url;
        tweetArray.push(obj);
      }
      console.log(tweetArray);
      res.send(tweetArray);
    })
});

router.get('/firehose', function(req, res, next){
  var sw = req.query.searchWord;
  var seconds = req.query.seconds;
  var tweets = [];
  var url = {};
  client.stream('statuses/filter', {track: sw}, function(stream) {
    stream.on('data', function(tweet) {
      var text = tweet.entities.media[0].media_url;
      if(text !== undefined && !url.hasOwnProperty(text)){
        url[text] = true;
        var obj = {};
        obj.created_at = tweet.created_at;
        obj.user = tweet.user.screen_name;
        obj.media = tweet.entities.media[0].media_url;
        obj.text = tweet.text;
        tweets.push(obj);
      }
    });

    setTimeout(function(){
      console.log("collected " + tweets.length + " tweets.");
      stream.destroy();
      console.log(tweets[0])
      res.send(tweets);
    },seconds*1000);
   
    stream.on('error', function(error) {
      //console.log('there was an error');
    });
  });
})

router.post('/tweets', function(req, res, next){

})

module.exports = router;
