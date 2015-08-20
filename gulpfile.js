var gulp = require('gulp');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var browserify = require('gulp-browserify');


gulp.task('default', ['babel', 'browserify', ])

gulp.task('babel', function () {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest("_temp"));
});
gulp.task('browserify', function () {
    return gulp.src('_temp/markless.js')
        .pipe(browserify({
            insertGlobals: true,
        }))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("dist"));
});


var watcher = gulp.watch('src/**/*.js', ['default']);
watcher.on('change', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
