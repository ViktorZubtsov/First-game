const   favicons = require('gulp-favicons'),
        faviconPath = {
            "input": "./src/img/favicon/*.png",
            "output": "./public/img/favicon",
            "outputBuild": "./build",
        };
let faviconBg = '#fff';
module.exports = function () {

    $.gulp.task('favicons:dev', function () {
        return $.gulp.src(faviconPath.input)
        .pipe(favicons({
            background: faviconBg,
            path: './img/favicon/',
            display: 'browser',
            orientation: 'landscape',
            pipeHTML: true,
            html: 'favicon.html',
            replace: true,
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: false,
                firefox: false,
                yandex: false,
                windows: false,
                coast: false
            }
        }))
        .pipe($.gulp.dest(faviconPath.output));
    });
    $.gulp.task('favicons:build', function () {
        return $.gulp.src(faviconPath.input)
        .pipe(favicons({
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: false,
                firefox: false,
                yandex: false,
                windows: false,
                coast: false
            }
        }))
        .pipe($.gulp.dest(faviconPath.outputBuild));
    });
};