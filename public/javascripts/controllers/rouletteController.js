angular.module('shApp.rouletteCtrl', [])
.controller('RouletteController', function($scope, FirehoseSvc, usSpinnerService){
  $scope.name = "roulette";
  $scope.tweets = [];
  $scope.tweetsExist = true;
  $scope.startSpin = function(){
      usSpinnerService.spin('spinner-1');
  }
  $scope.stopSpin = function(){
      usSpinnerService.stop('spinner-1');
  }
  $scope.getFirehose = function(searchWord, seconds){
    $scope.startSpin();
    FirehoseSvc.getTweets(searchWord, seconds)
    .then(function(data){
      $scope.stopSpin();
      $scope.tweets = data.data;
      if($scope.tweets.length > 0){
        $scope.tweetsExist = true;
      }
      for(var i = 0; i < $scope.tweets.length; i++){
        $scope.tweets[i].user = "Written by: " + $scope.tweets[i].user;
        //this is to format link text to get rid of urls and &'s
        var strArray = $scope.tweets[i].text.split(" ");
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
        $scope.tweets[i].text = newArray.join(" ");

        var strTimeArray = $scope.tweets[i].created_at.split(" ");
        var test = $scope.tweets[i].created_at;
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
      if(!$scope.tweets.length){
        $scope.tweetsExist = false;
      }
    })

    
  };

});