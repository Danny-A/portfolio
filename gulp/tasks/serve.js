'use strict';

var gulp = require('gulp');

/**
	* $ gulp
	*
	* - compile, autoprefix, and minify Sass
	* - bundle Javascript
	* - optimise images (including SVGs)
	*/
gulp.task('default', [
	'images',
	'sass',
	'javascript',
]);

gulp.task('production', [
	'images',
	'sass',
	'sass:minify',
	'javascript',
	'js-minify'
]);
