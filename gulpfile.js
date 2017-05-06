'use strict';

let gulp = require("gulp");
let fs = require("fs");
let browserify = require('browserify');
let vueify = require('vueify');
let babelify = require('babelify');
let sass = require('gulp-sass');
let minify = require('gulp-minify');
let uglifycss = require('gulp-uglifycss');
let uuid = require('uuid');

gulp.task('default', ['build'], function(){
    gulp.watch('./src/**/*', ['compile']);
    gulp.watch('./sass/**/*', ['sass']);
});

gulp.task('build', ['sass', 'compile'], function () {

});

gulp.task('sass', function(){
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/style'));
});

gulp.task('compile', function () {
    return browserify('./App.js', {
        basedir: './src', 
        debug : true,
    })
    .transform(vueify)
    .transform(babelify, {presets: ["es2015"]})
    .bundle()
    .pipe(fs.createWriteStream("build/App.js"))
});

/*
        PROD
 */
gulp.task('css-prod', function () {
    return gulp.src('./build/style/**/*.css')
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(gulp.dest('./build/style'));
});

gulp.task('build-prod', ['build', 'css-prod'], function(){
    return gulp.src('./build/App.js')
        .pipe(minify({ext:{
            min:'.min.js'
        }}))
        .pipe(gulp.dest('./build'));
});
