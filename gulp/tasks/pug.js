const plumber = require('gulp-plumber'),
    pug = require('gulp-pug'),
    cached = require('gulp-cached'),
    htmlValidator = require('gulp-w3c-html-validator'),
    pugPath = {
        "input": "./src/pug/*.pug",
        "output": "./public",
        "outputBuild": "./build",
};



module.exports = function () {
    $.gulp.task('pug:dev', () => {
        return $.gulp.src( pugPath.input)
            .pipe(plumber())
            .pipe(pug({
                pretty: true
            }))
            .pipe(plumber.stop())
            .pipe(cached('pug:dev'))
            .pipe($.gulp.dest(pugPath.output))
            .on('end', $.browserSync.reload);
    });

    $.gulp.task('pug:build', () => {
        return $.gulp.src(pugPath.input)
            .pipe(plumber())
            .pipe(pug({
                pretty: true
            }))
            .pipe(plumber.stop())
            .pipe(htmlValidator())
            .pipe(cached('pug:build'))
            .pipe($.gulp.dest(pugPath.outputBuild));
    });
};
