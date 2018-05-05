var gulp          = require('gulp');
var cnf = require('../package.json').config;

gulp.task('fonts', function () {
  return gulp.src(cnf.src.fonts)
      .pipe(gulp.dest(cnf.dist.fonts));
});
 
gulp.task('fonts:watch', function () {
  gulp.watch(cnf.dist.fonts, ['fonts']);
});