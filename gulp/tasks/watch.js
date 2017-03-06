'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpLoadPlugins = require('gulp-load-plugins');
var config = require('../config');

// Load plugins:
var plugins = gulpLoadPlugins({
	pattern: [
		'gulp-*',
		'gulp.*',
		'browser-sync'
	]
});

/**
	* $ gulp watch:tasks
	*
	* - watch for updates to scripts, styles, and Gulpfile
	* - process files appropriately on change
	*/
gulp.task('watch:tasks', ['default'], function(){
	// Gulpfile.js:
	gulp.watch('Gulpfile.js', [
		'jshint'
	]);

	// Scripts:
	gulp.watch(config.watch.javascript, [
		'jshint',
		'js-watch'
	]);

	// Styles:
	gulp.watch(config.watch.sass, [
		'sass'
	]);

	// Images:
	gulp.watch(config.watch.images, [
		'images'
	]);
});

/**
	* $ gulp watch
	*
	* - calls 'gulp watch:tasks'
	*/
gulp.task('watch', ['watch:tasks'], function() {
	// Do a full page reload when any templates are updated:
	plugins.browserSync.init(config.browsersync);
	gulp.watch([
		config.watch.html
	])
	.on('error', gutil.log)
	.on('change', plugins.browserSync.reload);
});
