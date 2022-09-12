var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");

gulp.task('sass', function() {
  gulp.src('**/**/scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: 1
		}).on('error', sass.logError))
		.pipe(sourcemaps.write('./'))
		.pipe(rename(function(file) {
			file.dirname = file.dirname.replace(/scss$/, "css");
		 }))
		.pipe(gulp.dest(''));
});


gulp.task('watch', function() {
  gulp.watch('**/**/scss/**/*.scss', ['sass']);
});