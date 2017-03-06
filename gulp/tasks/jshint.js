'use strict';

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var config = require('../config').jshint;

// Load plugins:
var plugins = gulpLoadPlugins({
	pattern: [
		'gulp-*',
		'gulp.*',
		'browser-sync'
	]
});

/**
	* $ gulp jshint
	*
	* - lint Javascript files
	*/
gulp.task('jshint', function(){
	var src  = [
		config.src
	];

	gulp.src(src)
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter(require('jshint-stylish')));
});
