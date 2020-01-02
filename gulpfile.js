const gulp = require('gulp'); //引入gulp模块
const html = require('gulp-minify-html'); //引入html压缩模块。
const css = require('gulp-minify-css'); //引入css压缩模块。
const sass = require('gulp-sass'); //引入sass编译模块
const uglifyjs = require('gulp-uglify'); //引入js压缩模块
const watch = require('gulp-watch'); //引入监听模块
const babel = require('gulp-babel'); //es6转es5主要模块
const bablecore = require('babel-core'); //es6转es5主要模块
const es2015 = require('babel-preset-es2015'); //es6转es5主要模块
const imagemin = require('gulp-imagemin'); //引入图片压缩模块
const sourcemaps = require('gulp-sourcemaps'); //引入生成.map文件模块
const plugins = require('gulp-load-plugins')(); //生成.map文件

const requirejsOptimize = require('gulp-requirejs-optimize');


gulp.task('uglifyhtml',function(){
    return gulp.src('src/*.html')
    .pipe(html())
    .pipe(gulp.dest('dist/'))
})

gulp.task('uglifycss',function(){
    return gulp.src('src/css/*')
    .pipe(css())
    .pipe(gulp.dest('dist/css/'))
})

gulp.task('runimg', function () {
    return gulp.src('src/images/*.{png,gif,jpg,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'));
});

// gulp.task('rjs',function(){
//     return gulp.src('src/script/*.js')
//         .pipe(requirejsOptimize({
//             optimize: 'none',//此参数允许使用es6的代码。
//             mainConfigFile: 'src/config.js'//配置文件
//         }))
//         .pipe(gulp.dest('dist/script/'));
// });

// gulp.task('uglifyjs', function () {
//     return gulp.src('src/script/*.js')
//         .pipe(uglifyjs())
//         .pipe(gulp.dest('dist/script/'));
// });


gulp.task('babel', function () {
    return gulp.src('src/script/*.js')
        .pipe(babel({//es6转es5
            presets: ['es2015']
        }))
        .pipe(uglifyjs())
        .pipe(gulp.dest('dist/script/'));
});