'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const gulpLoadPlugins = require('gulp-load-plugins');
const config = require('../config');

// Load plugins:
const plugins = gulpLoadPlugins({
	pattern: [
		'gulp-*',
		'gulp.*',
		'browser-sync'
	]
});

/**
	* $ gulp sass
	*
	* - Compile Sass --> CSS, autoprefix, and minify
	*/
gulp.task('sass', function(){
	return gulp
		.src(config.styles.src)
    .pipe(plugins.sourcemaps.init())
		.pipe(plugins.plumber())
		.pipe(plugins.sassGlob())
		// Compile Sass:
		.pipe(plugins.sass.sync(config.styles.options)
			.on('error', gutil.log)
		)
		// Autoprefix:
		.pipe(plugins.autoprefixer(config.autoprefixer))
    .pipe(plugins.sourcemaps.write())
		// Report file size:
		.pipe(plugins.size({ showFiles: true }))
		.pipe(gulp.dest(config.styles.dest))
		.pipe(plugins.browserSync.stream())
		.on('error', gutil.log);
});

gulp.task('sass:minify', ['sass'], function(){
	return gulp
		.src(config.styles.dest + '/application.css')
		.pipe(plugins.cssnano())
		.pipe(plugins.rename({suffix: '.min'}))
		.pipe(plugins.size({ showFiles: true }))
		.pipe(gulp.dest(config.styles.dest))
		.pipe(plugins.browserSync.stream())
		.on('error', gutil.log);
});
