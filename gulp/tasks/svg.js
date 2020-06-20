const svgSprite = require('gulp-svg-sprite'),
      svgmin = require('gulp-svgmin'),
      cheerio = require('gulp-cheerio'),
      replace = require('gulp-replace'),
      svgPath = {
          "input": "./src/img/svg/*.svg",
          "output": "./public/img/",
          "outputBuild": "./build/img/",
      };


module.exports = function () {
    $.gulp.task('svg:dev', () => {
        return $.gulp.src(svgPath.input)
        .pipe(svgmin({
          js2svg: {
            pretty: true
          }
        }))
        .pipe(cheerio({
          run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
          },
          parserOptions: {xmlMode: true}
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
          mode: {
            symbol: {
              sprite: "sprite.svg"
            }
          }
        }))
        .pipe($.gulp.dest(svgPath.output));
    });

    $.gulp.task('svg:build', () => {
        return $.gulp.src(svgPath.input)
        .pipe(svgmin({
          js2svg: {
            pretty: true
          }
        }))
        .pipe(cheerio({
          run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
          },
          parserOptions: {xmlMode: true}
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
          mode: {
            symbol: {
              sprite: "sprite.svg"
            }
          }
        }))
        .pipe($.gulp.dest(svgPath.outputBuild));
    });

};
