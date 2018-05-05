var gulp          = require('gulp');
var runSequence   = require('run-sequence');

gulp.task('default', function() {
  runSequence(
      'build',
      [
          'sass:watch',
          'js:watch',
          'html:watch',
          'fonts:watch',
          'img:watch',
          'libs:watch'
          
      ],
      'server'
      
  );
});