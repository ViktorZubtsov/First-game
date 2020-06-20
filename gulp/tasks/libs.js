const uglify = require('gulp-uglify'),
      concat = require('gulp-concat'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      libsJSPATH = {
        "input": "./src/libs/*.js",
        "output": "./public/libs/",
        "outputBuild": "./build/libs/",
      },
      libsCSSPATH = {
        "input": "./src/libs/*.css",
        "output": "./public/libs/",
        "outputBuild": "./build/libs/",
      };



module.exports = function () {
    $.gulp.task('libs.js:dev', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js', libsJSPATH.input])
            .pipe(concat('libs.js'))
            .pipe($.gulp.dest(libsJSPATH.output));
  });

  $.gulp.task('libs.js:build', () => {
    return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js', libsJSPATH.input])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe($.gulp.dest(libsJSPATH.outputBuild));
  });


  $.gulp.task('libs.css:dev', () => {
    return $.gulp.src([libsCSSPATH.input])
        .pipe(concat('libs.css'))
        .pipe($.gulp.dest(libsCSSPATH.output));
});

  $.gulp.task('libs.css:build', () => {
  return $.gulp.src([ libsCSSPATH.input])
      .pipe(concat('libs.min.css'))
      .pipe(autoprefixer())
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe($.gulp.dest(libsCSSPATH.outputBuild));
  });

};


