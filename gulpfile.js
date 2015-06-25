'use strict';

var require;

var gulp     = require('gulp'),
    concat   = require("gulp-concat"),
    jasmine  = require("gulp-jasmine"),
    uglify   = require("gulp-uglifyjs")

gulp.task('default', ['build'])

gulp.task('build', function () {
  gulp.src( "src/*.js")
        .pipe(concat('sport.js'))
        .pipe(gulp.dest('./'))
        .pipe(uglify('sport.min.js'))
        .pipe(gulp.dest('./'))

})

gulp.task('test', function () {
  gulp.src( [ "src/sports.js", "test/*.js" ] )
  	.pipe(jasmine())

})