var gulp = require('gulp');
var browsersync = require('browser-sync');
var config = require('../../config');

/**
 * Run the build task and start a server with BrowserSync
 */
gulp.task('browsersync', function(cb) {
    browsersync(config.browsersync.development);
});

gulp.task('browsersync-reload', function() {

    browsersync.reload({
        reloadDelay: 0
    });
});
