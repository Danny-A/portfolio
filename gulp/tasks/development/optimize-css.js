var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var size = require('gulp-size');
var config = require('../../config');

/**
 * Copy and minimize CSS files
 */
gulp.task('optimize:css', ['sass'], function() {
    return gulp.src(config.optimize.css.src)
        // minify and optimize CSS
        .pipe(cssnano(config.optimize.css.options))
        // where to store optmized production CSS
        .pipe(gulp.dest(config.optimize.css.dest))
        // displays file size
        .pipe(size());
});
