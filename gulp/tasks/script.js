const babel = require('gulp-babel'),
      uglify = require('gulp-uglify'),
      concat = require('gulp-concat'),
      scriptsPATH = {
        "input": "./src/js/*.js",
        "output": "./public/js/",
        "outputBuild": "./build/js/",
      };



module.exports = function () {
  $.gulp.task('script:dev', () => {
    return $.gulp.src(scriptsPATH.input)
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(concat('script.js'))
      .pipe($.gulp.dest(scriptsPATH.output));

  });

  $.gulp.task('script:build', () => {
    return $.gulp.src(scriptsPATH.input)
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(concat('script.min.js'))
      .pipe(uglify())
      .pipe($.gulp.dest(scriptsPATH.outputBuild));

  });

};

