var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');
var path = require('path');
var sync = require('browser-sync');
var reload = sync.reload;

gulp.task('sync', function() {
    sync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('less', function() {
    return gulp.src('less/app.less')
        .pipe(less({
          paths: ['less']
        }))
        .pipe(prefix("last 4 version", "ie 9"), { cascade:true })
        .pipe(gulp.dest('css'))
        .pipe(reload({ stream:true }));
});

gulp.task('watch', function() {
    gulp.watch('less/*.less', ['less']);
});

gulp.task('default', ['watch', 'sync']);