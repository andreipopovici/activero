var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('serve', ['sass'], function() {
  browserSync({
    server: {
      baseDir: '.'
    }
  });

  gulp.watch(['./*.html', './assets/sass/**/*.scss'], ['sass']);
});