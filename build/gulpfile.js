var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
//var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var fileinclude = require('gulp-file-include');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('../scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('../css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('../src/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('../dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('../dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('../src/*.js', ['lint', 'scripts']);
    gulp.watch('../scss/*.scss', ['sass']);
});

gulp.task('fileinclude', function() {
  gulp.src(['index.html', 'random.html', 'blog.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('../'));
});

// Default Task
gulp.task('default', ['lint', 'scripts', 'fileinclude']); 