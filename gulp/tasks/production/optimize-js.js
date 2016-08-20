var gulp = require('gulp');
var uglify = require('gulp-uglify');
var size = require('gulp-size');
var config = require('../../config');

/**
 * Copy and minimize JS files
 */
gulp.task('optimize:js', function() {
    return gulp.src(config.optimize.js.src)
    // optimize development javascript
      .pipe(uglify(config.optimize.js.options))
      // where to store production javascript
      .pipe(gulp.dest(config.optimize.js.dest))
      // displays file size
      .pipe(size());
});
