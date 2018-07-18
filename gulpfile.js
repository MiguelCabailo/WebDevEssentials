var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

gulp.task('serve', ['watch'], function(){
    return nodemon({
      script: './app.js',
    })
    .on('restart', function(){
      console.log('restarted');
    });
    
});

// define a task
// compile Sass to CSS
gulp.task('sass', function(){
    // source file
    return gulp.src('./public/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'))
});

// default task
gulp.task('watch', function(){
    gulp.watch('./public/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['serve', 'watch']);

