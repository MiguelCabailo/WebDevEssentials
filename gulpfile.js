var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();

gulp.task('nodemon', function(cb){
    var started = false;
    
	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

// defines a task
// compile Sass to CSS
gulp.task('sass', function(){
    // source file
    return gulp.src('./public/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
});


gulp.task('browser-sync', ['nodemon'], function(){
    browserSync.init(null, {
        proxy: "http://localhost:3000",
        files: ["public/**/*.*"],
        browser: "Chrome",
        port: 7000
    });
})


gulp.task('watch', function(){
    gulp.watch('./public/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass','browser-sync', 'watch']);

