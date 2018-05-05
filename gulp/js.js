var gulp          = require('gulp');
var cnf           = require('../package.json').config;
var plumber       = require('gulp-plumber');
var notify        = require("gulp-notify");
var sourcemaps    = require('gulp-sourcemaps');
var babel         = require('gulp-babel');
var include       = require("gulp-include");
//var uglify        = require('gulp-uglify');

 
gulp.task('js', function () {
  return gulp.src(cnf.src.js)
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(sourcemaps.init({loadMaps: true}))
	.pipe(babel())
    .pipe(include({
    extensions: "js",
    hardFail: true
    }))
    //.pipe(uglify())
	.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cnf.dist.js));
});
 
gulp.task('js:watch', function () {
  gulp.watch([cnf.src.js, 'src/js/components/**/*.*'], ['js']);
});