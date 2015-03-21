module.exports = function(config){
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
    'public/bower_components/angular/angular.js',
    'public/bower_components/angular-ui-router/release/angular-ui-router.js',
    'public/bower_components/angular-mocks/angular-mocks.js',
    'public/javascripts/**/*.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  })
}