var gulp = require('gulp');
var watch = require('gulp-watch');
var browsersync = require('browser-sync');
var config = require('../../config');

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', function() {

    // Watch HTML files
    gulp.watch(config.watch.html);
    // watch sass files
    gulp.watch(config.watch.sass, ['sass']);
    // watch javascript changes
    gulp.watch(config.watch.javascript, ['javascript']);

});
