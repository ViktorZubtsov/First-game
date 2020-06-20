module.exports = function () {
    $.gulp.task('clean:dev', function () {
        return $.del('./public');
    });


    $.gulp.task('clean:build', function () {
        return $.del('./build');
    });
};