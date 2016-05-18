var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../config');

/**
 * Lint SCSS files
 * `gem install scss-lint` needed
 */
gulp.task('scsslint',['sass'], function() {
    return gulp.src(config.scsslint.src)
        .pipe($.scssLint(config.scsslint.options));
});
