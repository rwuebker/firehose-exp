angular.module('shApp.directives', [])
  .directive('shappLanding', function(){
    return{
      restrict: 'EA',
      scope: '=',
      replace: true,
      templateUrl: '/views/landing.html'
    }
  })
  .directive('shappMeat', function(){
    return{
      restrict: 'EA',
      scope: '=',
      replace: true,
      templateUrl: '/views/meat.html'
    }
  })
  .directive('shappRoulette', function(){
    return{
      restrict: 'EA',
      scope: "=",
      replace: true,
      templateUrl: '/views/roulette.html'
    }
  })
  .directive('shappNavbar', function(){
    return {
      restrict: 'EA',
      scope: '=',
      replace: true,
      templateUrl: '/views/navbar.html'
    }
  }).directive('shappWelcome', function(){
    return {
      restrict: 'EA',
      scope: '=',
      replace: true,
      templateUrl: '/views/welcome.html'
    }
  });