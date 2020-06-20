"use strict";

global.$ = {
    path: {
        task: require('./gulp/path/tasks.js')
    },
    gulp: require('gulp'),
    browserSync: require('browser-sync').create(),
    del: require('del')
};

$.path.task.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('start', $.gulp.series(
    'directories',
));



$.gulp.task('dev', $.gulp.series(
    'clean:dev',
    'favicons:dev',
    $.gulp.parallel(
        'html:dev',
        'pug:dev',
        'fonts:dev',
        'img:dev',
        'sass:dev',
        'script:dev',
        'libs.js:dev',
        'libs.css:dev',
        'svg:dev',
        'sprite:dev',
    )
));

$.gulp.task('build', $.gulp.series(
    'clean:build',
    'favicons:build',
    $.gulp.parallel(
        'html:build',
        'pug:build',
        'fonts:build',
        'img:build',
        'sass:build-min',
        'script:build',
        'libs.js:build',
        'libs.css:build',
        'svg:build',
    )
));

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve',
    )
));
