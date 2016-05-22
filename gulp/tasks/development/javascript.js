var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var beep = require('beepbeep');
var browsersync = require('browser-sync');
var config = require('../../config');

// error function
var onError = function(err) {
    beep();
    console.log(err);

    this.emit('end');
};

/**
 * Run the javascript task and start compiling
 */
gulp.task('javascript', function() {
    'use strict';

    browsersync.reload();

    // Minify and copy all JavaScript
    return gulp.src(config.javascript.src)
        // prevent from breaking on error
        .pipe($.plumber({
            errorHandler: onError
        }))
        // initialize sourcemaps
        .pipe($.sourcemaps.init())
        // compile minified javacsript
        .pipe($.uglify())
        // combine compiled javascript files into a single file
        .pipe($.concat('app.min.js'))
        // write sourcemaps
        .pipe($.sourcemaps.write('.', {
            includeContent: false,
        }))
        // where to store minified javascript file
        .pipe(gulp.dest(config.javascript.dest))
        // displays file size
        .pipe($.size());

        // notify that task was completed
        console.log('Compile Javascript task completed');
});


gulp.task('javascript-local', function() {
    'use strict';

    console.log('Compiling JavaScript');

    // Minify and copy all JavaScript
    gulp.src(config.src)
        .pipe($.sourcemaps.init())
        // compile minified javacsript
        .pipe(uglify('app.min.js', {
            outSourceMap: true,
            output: {
                beautify: true,
                comments: false
            }
        }).on('error', function(e) {
            $.gutil.beep();
            console.log(e);

            this.emit('end');
        }))
        .pipe($.sourcemaps.write())
        // where to store minified javascript file
        .pipe(gulp.dest(config.dest))
        // displays file size
        .pipe($.size());

        // notify that task was completed
        console.log('Compile Javascript task completed');
});
