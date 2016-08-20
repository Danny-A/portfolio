var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var config = require('../../config');

/**
 * Lint SCSS files
 * `gem install scss_lint` needed
 */
gulp.task('scss-lint', function() {
    return gulp.src(config.scsslint.src)
      .pipe(scsslint(config.scsslint.options));
});
