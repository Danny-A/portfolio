'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpLoadPlugins = require('gulp-load-plugins');
var config = require('../config').javascript;

// Load plugins:
var plugins = gulpLoadPlugins({
	pattern: [
		'gulp-*',
		'gulp.*',
		'browser-sync'
	]
});

/**
	* $ gulp scripts
	*
	*/
	gulp.task('javascript', function() {

    // Minify and copy all JavaScript
    return gulp.src(config.src)
      // prevent from breaking on error
      .pipe(plugins.plumber({
          errorHandler: gutil.log
      }))
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.concat('application.js'))
      .pipe(plugins.sourcemaps.write('.', {
          includeContent: false,
      }))
      .pipe(gulp.dest(config.dest))
      .pipe(plugins.size({ showFiles: true }));
	});


gulp.task('js-watch', ['javascript'], function(done) {
	plugins.browserSync.reload();
	done();
});

gulp.task('javascript:minify', function(){
	return gulp.src(config.src)
		.pipe(plugins.babel({
			presets: ['@babel/env']
		}))
		.pipe(plugins.concat('application.min.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest(config.dest))
		.pipe(plugins.size({ showFiles: true }))
		.on('error', gutil.log);
});
