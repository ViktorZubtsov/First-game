  module.exports = function () {
    $.gulp.task('directories', function () {
      return $.gulp.src('*.*', {read: false})
        .pipe($.gulp.dest('./src/fonts'))
        .pipe($.gulp.dest('./src/img'))
        .pipe($.gulp.dest('./src/img/favicon'))
        .pipe($.gulp.dest('./src/img/sprite'))
        .pipe($.gulp.dest('./src/img/svg'))
        .pipe($.gulp.dest('./src/libs'))
        .pipe($.gulp.dest('./src/js'))
        .pipe($.gulp.dest('./src/pages'))
        .pipe($.gulp.dest('./src/pug'))
        .pipe($.gulp.dest('./src/pug/modules'))
        .pipe($.gulp.dest('./src/pug/template'))
        .pipe($.gulp.dest('./src/pug/utils'))
        .pipe($.gulp.dest('./src/styles'))
        .pipe($.gulp.dest('./src/styles/modules'))
        .pipe($.gulp.dest('./src/styles/utils'));  // fonts,lib,mixin,var,sprite
    });
};