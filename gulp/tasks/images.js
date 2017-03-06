'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpLoadPlugins = require('gulp-load-plugins');
var config = require('../config').optimize;

// Load plugins:
var plugins = gulpLoadPlugins({
	pattern: [
		'gulp-*',
		'gulp.*',
		'browser-sync'
	]
});

/**
	* $ gulp images
	*
	* - Optimise images (new and updated images only)
	*/
gulp.task('images', function(){
	var src  = config.images.src;
	var dest = config.images.dest;

	return gulp.src(src)
		// Only process new / updated images:
		.pipe(plugins.newer(dest))
		// Minify images:
		.pipe(plugins.imagemin(config.images.options))
		.pipe(gulp.dest(dest))
		.pipe(plugins.browserSync.stream())
		.on('error', gutil.log);
});
