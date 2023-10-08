// const { src, dest, watch, series} = require('gulp')
// const sass = require('gulp-sass')(requre('sass'))

// function buldStyles(){
//     return src('sass/main.scss')
//     .pipe(sass())
//     .pipe(dest('css'))
// }

// function watchTask(){
//     watch(['sass/main.scss'], buldStyles)
// }

// exports.default = series(buldStyles, watchTask)

const { src, dest, watch} = require('gulp');
const compileSass = require('gulp-sass')(require('sass'));

compileSass.compiler = require('node-sass');

const bundleSass = () => {
    return src('sass/main.scss')
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(dest('css/style.css'));
};

const devWatch = () => {
    watch('sass/main.scss', bundleSass);
}

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;