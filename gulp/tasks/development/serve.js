
var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('serve', function(callback) {
    runSequence(
        ['sass', 'javascript'],
        'scsslint',
        'watch',
        'ftp-deploy-watch',
        'browsersync',
        //'images',
        //'copy:fonts'
        //'base64',
        callback);
});
