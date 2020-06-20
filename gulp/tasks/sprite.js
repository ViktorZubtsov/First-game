const spritesmith = require('gulp.spritesmith'),
    spritePath = {
        "input": "./src/img/sprite/*.png",
        "outputUtils": "./src/styles/utils",
        "output": "./public/img/",
        "outputBuild": "./build/img/",
    };




module.exports = function() {
    $.gulp.task('sprite:dev', function() {
        let spriteData = $.gulp.src(spritePath.input) 
            .pipe(spritesmith({
                imgName: 'spritePng.png',
                cssName: '_sprite.sass',
                padding: 10,
                imgPath: '../img/spritePng.png',
            }));
        spriteData.img.pipe( $.gulp.dest(spritePath.output)); 
        spriteData.css.pipe( $.gulp.dest(spritePath.outputUtils)); 
        return spriteData;
    });

    $.gulp.task('sprite:build', function() {
        let spriteData = $.gulp.src(spritePath.input) 
            .pipe(spritesmith({
                imgName: 'spritePng.png',
                cssName: '_sprite.sass',
                padding: 10,
                imgPath: '../img/spritePng.png',
            }));
        spriteData.img.pipe( $.gulp.dest(spritePath.outputBuild)); 
        spriteData.css.pipe( $.gulp.dest(spritePath.outputUtils)); 
        return spriteData;
    });

};

