var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var nodemon = require('gulp-nodemon');
var gulp   = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('js', function(){
  gulp.src(['public/bower_components/angular/angular.min.js',
           'public/bower_components/angular-ui-router/release/angular-ui-router.min.js',
           'public/javascripts/app.js',
           'public/javascripts/**/*.js'])
  //.pipe(sourcemaps.init())
    .pipe(concat('appDist.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
  //.pipe(sourcemaps.write())
  .pipe(gulp.dest('public/assets'))
})

gulp.task('watch:js', ['jshint', 'js'], function(){
  gulp.watch('public/javascripts/**/*.js', ['jshint', 'js'])
})

gulp.task('jshint', function() {
  return gulp.src('public/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('start', function(){
  nodemon({
    script: './bin/www'
  })
})

gulp.task('dev', ['watch:js', 'start']);
