var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var config = require('../../config');

/**
 * Check JavaScript sytax with JSHint
 */
gulp.task('jshint', function() {
    return gulp.src(config.jshint.src)
        // run javascript syntax hinter
        .pipe(jshint())
        // report when syntax has errors
        .pipe(jshint.reporter(stylish));
});
