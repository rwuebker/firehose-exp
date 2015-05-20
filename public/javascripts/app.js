angular.module('shApp', ['angularSpinner', 'ui.router', 'shApp.landingCtrl', 'shApp.directives', 'shApp.meatCtrl', 'shApp.services','shApp.rouletteCtrl'])

.config(function(usSpinnerConfigProvider, $stateProvider, $httpProvider){
  
  usSpinnerConfigProvider.setDefaults({color: 'white'});
    
  $stateProvider
    .state('landing', {
      template: '<shapp-landing></shapp-landing>',
      controller: 'LandingController'
    })
    .state('landing.welcome', {
      url: '',
      template: '<shapp-welcome></shapp-welcome>'
    })
    .state('landing.meat', {
      url:'/meat',
      template: '<shapp-meat></shapp-meat>',
      controller: 'MeatController'
    })
    .state('landing.roulette', {
      url:'/roulette',
      template: '<shapp-roulette></shapp-roulette>',
      controller: 'RouletteController'
    })


});


