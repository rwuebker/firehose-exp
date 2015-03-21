angular.module('shApp.meatCtrl', [])
.controller('MeatController', function($scope, TweetsSvc){
  $scope.name = "meat";
  $scope.tweets = [];
  $scope.searchWord = "";

  TweetsSvc.getTweets()
  .then(function(data){
    console.log("this is data in the controller: ", data);
    $scope.tweets = data.data;
    for(var i = 0; i < $scope.tweets.length; i++){
      var strTimeArray = $scope.tweets[i].created_at.split(" ");
      var newtime = [];
      for(var z = 0; z < strTimeArray.length; z++){
        if(strTimeArray[z].indexOf("+") === -1){
          if(strTimeArray[z].indexOf("2015") === -1){
            if(z === 2){
              newtime.push(strTimeArray[z] + ",");
            }else if(z === 3){
              newtime.push("2015");
              var hour = Number(strTimeArray[z].substring(0,2));
              var text = strTimeArray[z].substring(2);
              var d = new Date;
              var n = d.getHours();
              var diff = hour - n;
              hour = hour - diff;
              if(hour > 12){
                hour = hour - 12;
              }
              newtime.push("@ " + hour + text);
            }else{
              newtime.push(strTimeArray[z]);
            }
          }
        }
      }
      $scope.tweets[i].created_at = newtime.join(" ");
    }
  });
  // .error(function(error){
  //   console.log("error: ", error);
  // });

});