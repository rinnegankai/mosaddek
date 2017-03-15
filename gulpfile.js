/*
  gulpfile.js
*/
'use strict';
var gulp=require('gulp');
var sass=require('gulp-sass');
var sourcemaps=require('gulp-sourcemaps');

gulp.task('sass',function(){
  return gulp.src('app/sass/style.scss')
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});
