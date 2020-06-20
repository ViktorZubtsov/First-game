const   sass = require('gulp-sass'),
        sourcemaps = require('gulp-sourcemaps'),
        plumber = require('gulp-plumber'),
        scss = require('gulp-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        csso = require('gulp-csso'),
        cleanCSS = require('gulp-clean-css'),
        csscomb = require('gulp-csscomb'),
        rename = require('gulp-rename'),
        stylesPATH = {
            "input": "./src/styles/",
            "output": "./public/css/",
            "outputBuild": "./build/css/",
        };



module.exports = function () {

    sass.compiler = require('node-sass');

    $.gulp.task('sass:dev', function () {
        return $.gulp.src(stylesPATH.input + 'styles.sass')
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass({
                includePaths: require('node-normalize-scss').includePaths
            }).on('error', sass.logError))
            .pipe(sourcemaps.write())
            .pipe($.gulp.dest(stylesPATH.output))
            .on('end', $.browserSync.reload);
    });
  

    $.gulp.task('sass:build-min', () => {
        return $.gulp.src(stylesPATH.input + 'styles.sass')
            .pipe(sass({
                includePaths: require('node-normalize-scss').includePaths
            }))
            .pipe(autoprefixer())
            .pipe(csscomb())
            .pipe(rename('styles.min.css'))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe($.gulp.dest(stylesPATH.outputBuild));


    });


};

