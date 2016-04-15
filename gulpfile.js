// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/style/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Default Task
gulp.task('default', ['sass']);