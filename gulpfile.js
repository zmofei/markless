var gulp = require('gulp');
var uglify = require("gulp-uglify");
var browserify = require('gulp-browserify');


gulp.task('default', ['browserify'])
    // gulp.task('default', function() {
    //     return gulp.src('src/*.js')
    //         .pipe(watch('src/*.js'))
    //         .pipe(browserify({
    //             insertGlobals: true,
    //         }))
    //         .pipe(uglify())
    //         .pipe(gulp.dest("dist"))
    // });

gulp.task('browserify', function() {
    return gulp.src('src/index.js')
        .pipe(browserify({
            insertGlobals: true,
        }))
        .pipe(uglify())
        .pipe(gulp.dest("dist"))
});


var watcher = gulp.watch('src/**/*.js', ['default']);
watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
