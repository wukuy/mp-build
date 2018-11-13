const gulp = require('gulp');
const babel = require('gulp-babel');
const stylus = require('gulp-stylus');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
const replace = require('gulp-replace');
const plumber = require('gulp-plumber');

const env = process.env.NODE_ENV;
const isWatch = process.argv.includes('--watch');

gulp.task("clean-dist", function() {
    // return 等待当前任务结束，返回流，再执行后面的任务。
    return gulp.src('../dist/')
        .pipe(clean({force: true, read: false}));
})

gulp.task('compile-js', () => {
    gulp.src('../src/**/*.js')
        .pipe(plumber())
        .pipe(babel())
        .pipe(replace('process.env.NODE_ENV', JSON.stringify(env))) 
        .pipe(gulp.dest('../dist'));
});

gulp.task('compile-css', () => {
    gulp.src('../src/**/*.styl')
        .pipe(stylus())
        .pipe(rename((path) => {
            path.extname = '.wxss';
        }))
        .pipe(gulp.dest('../dist'));
});

gulp.task('compile-wxss', () => {
    gulp.src('../src/**/*.wxss')
        .pipe(rename((path) => {
            path.extname = '.wxss';
        }))
        .pipe(gulp.dest('../dist'));
});

gulp.task('compile-html', () => {
    gulp.src('../src/**/*.wxml')
        .pipe(gulp.dest('../dist'));
});

gulp.task('compile-json', () => {
    gulp.src('../src/**/*.json')
        .pipe(gulp.dest('../dist'));
});

gulp.task('compile-img', () => {
    gulp.src(['../src/**/*.png', '../src/**/*.jpg'])
        .pipe(gulp.dest('../dist'));
});

gulp.task('watch', () => {
    if(isWatch) {
        gulp.watch('../src/**/*.styl', ['compile-css']);
        gulp.watch('../src/**/*.js', ['compile-js']);
        gulp.watch('../src/**/*.json', ['compile-json']);
        gulp.watch('../src/**/*.wxml', ['compile-html']);
    }
});

gulp.task('default', ['clean-dist'], function(){
    gulp.start('compile-css', 'compile-js', 'compile-html', 'compile-json', 'compile-wxss', 'compile-img', 'watch');
});
