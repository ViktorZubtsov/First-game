module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./src/pug/**/*.pug', $.gulp.series('pug:dev'));
        $.gulp.watch(['./src/*.html', './src/pages/*.html'], $.gulp.series('html:dev'));
        $.gulp.watch('./src/styles/**/*.sass', $.gulp.series('sass:dev'));
        $.gulp.watch(['./src/img/*.*'], $.gulp.series('img:dev'));
        $.gulp.watch('./src/img/svg/*.svg', $.gulp.series('svg:dev'));
        $.gulp.watch('./src/img/sprite/*.png', $.gulp.series('sprite:dev'));
        $.gulp.watch('./src/fonts/*.ttf', $.gulp.series('fonts:dev'));
        $.gulp.watch('./src/libs/*.css', $.gulp.series('libs.css:dev'));
        $.gulp.watch('./src/libs/*.js', $.gulp.series('libs.js:dev'));
        $.gulp.watch('./src/js/*.js', $.gulp.series('script:dev'));
        $.gulp.watch('./src/img/favicon/*.png', $.gulp.series('favicons:dev'));
    });
};
