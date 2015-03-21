angular.module('shApp.services', [])
.service('TweetsSvc', function($http){
  
  //Service to get all tweets for a search
  this.getTweets = function(){
    console.log("inside getTweets in TweetsSvc")
     return $http.get('/api/tweets');

  };
})
.service('FirehoseSvc', function($http){
  
  //Service to access firehose sample
  this.getTweets = function(searchWord, seconds, cb){
    return $http.get('/api/firehose', {params: {searchWord: searchWord, seconds:seconds}});
  };
  
})