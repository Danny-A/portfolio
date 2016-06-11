
var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('serve', function(callback) {
    runSequence(
        ['sass', 'javascript'],
        'watch',
        'ftp-deploy-watch',
        'scss-lint',
        'browsersync',
        //'images',
        //'copy:fonts'
        //'base64',
        callback);
});
