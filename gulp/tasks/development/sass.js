var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var beep = require('beepbeep');
var browsersync = require('browser-sync');
var config = require('../../config');

var reload = browsersync.reload;

// error function
var onError = function(err) {
    beep();
    console.log(err);

    this.emit('end');
};

// compile sass
gulp.task('sass', ['scss-lint'], function() {
    var sassConfig = config.sass.options;

    sassConfig.onError = browsersync.notify;

    browsersync.notify('Compiling Sass');
    browsersync.reload();

    return gulp.src(config.sass.src)
        // prevent from breaking on error
        .pipe($.plumber({
            errorHandler: onError
        }))
        // initialize sourcemaps
        .pipe($.sourcemaps.init())
        // using gulp-sass
        .pipe($.sass(sassConfig).on('error', $.sass.logError))
        // adding prefix
        .pipe($.autoprefixer(config.autoprefixer))
        // write sourcemaps
        .pipe($.sourcemaps.write('.', {
            includeContent: false,
        }))
        // where to store compiled css
        .pipe(gulp.dest(config.sass.dest))
        // displays file size
        .pipe($.size());
});
