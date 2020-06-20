const fontmin = require('gulp-fontmin'),
        concat = require('gulp-concat'),
        del = require('del');

module.exports = function () {
    $.gulp.task('fonts-converting', () => {
        return $.gulp.src('./src/fonts/*.ttf')
            .pipe(fontmin({
                fontPath: '../fonts/',
                
            }))
            .pipe($.gulp.dest('./public/fonts'));
    });

  $.gulp.task('combining-font-styles', function() {
    return $.gulp.src('./public/fonts/*.css')
      .pipe(concat('fonts.scss'))
      .pipe($.gulp.dest('./src/styles/utils'));
  });

  $.gulp.task('del-font-styles', function() {
        return del('./public/fonts/*.css');
  });

  $.gulp.task('fonts-build', function() {
    return $.gulp.src('./public/fonts/*.*')
        .pipe($.gulp.dest('./build/fonts'));
});



    $.gulp.task('fonts:dev', $.gulp.series (
        `fonts-converting`, `combining-font-styles`,  `del-font-styles` 
    ));

    $.gulp.task('fonts:build', $.gulp.series (
        `fonts-converting`,   `del-font-styles`,  `fonts-build`
    ));

};
