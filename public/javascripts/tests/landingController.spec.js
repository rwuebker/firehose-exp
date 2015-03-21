describe('landingController', function(){
  beforeEach(module('shApp'))
  var $scope

  beforeEach(inject(function($rootScope, $controller){
    $scope = $rootScope.$new()
    $controller('LandingController', {
      $scope: $scope
    })
  }))

   it('exists', function(){
    expect($scope.name).to.exist
  })
})