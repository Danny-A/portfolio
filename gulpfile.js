var gulp = require('gulp');
var imagemin = require('gulp-image-optimization');
var requireDir = require('require-dir');
var config = require('./gulp/config');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

var paths = {
    images: 'images/**/*'
};

// Copy all static images
gulp.task('images', ['clean'], function() {
    return gulp.src(paths.images)
        // Pass in options to the task
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('./build/img'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts', 'images']);
