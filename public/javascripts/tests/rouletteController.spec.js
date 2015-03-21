describe('rouletteController', function(){
  beforeEach(module('shApp'))
  var $scope

  var mockFirehoseSvc = {}
  beforeEach(inject(function($q){
    mockFirehoseSvc.getTweets = function(){
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
    $controller('RouletteController', {
      $scope: $scope,
      FirehoseSvc: mockFirehoseSvc
    })
  }))

  it('loads tweets from a service', function(){
    $scope.$digest();
    console.log($scope);
    expect($scope.tweets).to.have.length(2)
  })
 
})