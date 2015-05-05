var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var notify = require("gulp-notify") 

var paths = {
    js_shared: [
        './bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
        './bower_components/jquery-zoom/jquery.zoom.js',
        './bower_components/select2/select2.js',
        './frontend_assets/shared/js/*.js'
    ],
    js_boxforabottle: [
        './frontend_assets/boxforabottle/js/*.js'
    ],
    sass_shared: [
        './bower_components/select2/select2.css',
        './bower_components/select2/select2-bootstrap.css',
        './frontend_assets/shared/scss/*.scss'
    ],
    sass_admin: [
        './frontend_assets/admin/scss/*.scss'
    ],
    sass_boxforabottle: [
        './frontend_assets/boxforabottle/scss/*.scss'
    ],
    sass_wineforawedding: [
        './frontend_assets/wineforawedding/scss/*.scss'
    ]
}

gulp.task('js_shared', function() {
    return gulp.src(paths.js_shared)
        .pipe(uglify())
        .pipe(concat('shared.min.js'))
        .pipe(gulp.dest('web/js'));
});

gulp.task('js_boxforabottle', function() {
    return gulp.src(paths.js_boxforabottle)
        .pipe(uglify())
        .pipe(concat('boxforabottle.min.js'))
        .pipe(gulp.dest('web/js'));
});

gulp.task('sass_shared', function() {
    return gulp.src(paths.sass_shared)
        .pipe(sass())
        .pipe(concat('shared.css'))
        .pipe(gulp.dest('web/css'));
});

gulp.task('sass_admin', function() {
    return gulp.src(paths.sass_admin)
        .pipe(sass())
        .pipe(concat('admin.css'))
        .pipe(gulp.dest('web/css'));
});

gulp.task('sass_boxforabottle', function() {
    return gulp.src(paths.sass_boxforabottle)
        .pipe(sass())
        .pipe(concat('boxforabottle.css'))
        .pipe(gulp.dest('web/css'));
});

gulp.task('sass_wineforawedding', function() {
    return gulp.src(paths.sass_wineforawedding)
    .pipe(sass())
    .pipe(concat('wineforawedding.css'))
    .pipe(gulp.dest('web/css'));
});

gulp.task('default', ['js_shared', 'js_boxforabottle', 'sass_shared', 'sass_admin', 'sass_boxforabottle', 'sass_wineforawedding']);

gulp.task('watch', function () {
    gulp.watch(paths.js_shared, ['js_shared']);
    gulp.watch(paths.js_boxforabottle, ['js_boxforabottle']);
    gulp.watch(paths.sass_shared, ['sass_shared']);
    gulp.watch(paths.sass_admin, ['sass_admin']);
    gulp.watch(paths.sass_boxforabottle, ['sass_boxforabottle']);
    gulp.watch(paths.sass_wineforawedding, ['sass_wineforawedding']);
});

gulp.task('admin', ['sass_shared', 'sass_admin']);
