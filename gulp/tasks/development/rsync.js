var gulp = require('gulp');
var rsync = require('gulp-rsync');
var browsersync = require('browser-sync');
var config = require('../../config');

gulp.task('sync', function() {
    var rsyncConfig = config.rsync;

		gulp.src('build/**')
			.pipe(rsync({
				root: 'build/',
				hostname: rsyncConfig.hostname,
				destination: rsyncConfig.path
			}));
});
