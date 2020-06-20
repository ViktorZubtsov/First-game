const   htmlValidator = require('gulp-w3c-html-validator'),
        htmlPath = {
            "input": ["./src/*.html", "./src/pages/*.html"],
            "output": "./public",
            "outputBuild": "./build",
};


module.exports = function () {

    $.gulp.task('html:dev', function () {
        return $.gulp.src(htmlPath.input)
            .pipe($.gulp.dest(htmlPath.output))
            .on('end', $.browserSync.reload);
    });

    $.gulp.task('html:build', function () {
        return $.gulp.src(htmlPath.input)
            .pipe(htmlValidator())
            .pipe($.gulp.dest(htmlPath.outputBuild));
    });


};

