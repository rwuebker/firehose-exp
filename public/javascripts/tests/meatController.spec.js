describe('meatController', function(){
  beforeEach(module('shApp'))
  var $scope

  var mockTweetsSvc = {}
  beforeEach(inject(function($q){
    mockTweetsSvc.getTweets = function(){
      var deferred = $q.defer()
      deferred.resolve([
        {user: 'rickwuebker', text: 'what"s up', created_at:'Fri Mar 20, 2015', media:'http://www.something.jpg'},
        {user: 'rickwuebker2', text: 'what"s up', created_at:'Fri Mar 20, 2015', media:'http://www.something.jpg'}
      ])
      return deferred.promise
    }
  }))

  beforeEach(inject(function($rootScope, $controller){
    $scope = $rootScope.$new()
    $controller('MeatController', {
      $scope: $scope,
      TweetsSvc: mockTweetsSvc
    })
  }))

  it('loads tweets from a service', function(){
    $scope.$digest();
    expect($scope.tweets).to.have.length(2)
  })
 
})