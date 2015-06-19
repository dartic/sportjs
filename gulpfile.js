'use strict';

var require;

var gulp     = require('gulp'),
    concat   = require("gulp-concat"),
    uglify   = require("gulp-uglifyjs")

gulp.task('default', ['build']);

gulp.task('build', function () {
  gulp.src( "src/*.js")
        .pipe(concat('sport.js'))
        .pipe(gulp.dest('./'))
        .pipe(uglify('sport.min.js'))
        .pipe(gulp.dest('./'))

})