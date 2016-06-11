var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../config');

/**
 * Lint SCSS files
 * `gem install scss_lint` needed
 */
gulp.task('scss-lint', function() {
    return gulp.src(config.scsslint.src)
        .pipe($.scssLint(config.scsslint.options));
});
