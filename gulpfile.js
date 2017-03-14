/*
  gulpfile.js
*/

var gulp=require('gulp');
var sass=require('gulp-sass');

gulp.task('sass',function(){
  return gulp.src('app/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});