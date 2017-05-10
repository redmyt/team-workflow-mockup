var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    autopref = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin');

gulp.task('sass', function() {
    gulp.src('./src/sass/main.scss')
        .pipe( sass({
            outputStyle: 'compressed',
            includePaths: require('node-normalize-scss').includePaths
        }) )
        .pipe( sass())
        .pipe( autopref() )
        .pipe( gulp.dest('build/css') );
});

gulp.task('pug', function() {
    gulp.src('./src/templates/index.pug')
        .pipe( pug() )
        .pipe( gulp.dest('build/') );
});

gulp.task('fonts', function() {
    gulp.src('./src/fonts/*')
        .pipe( gulp.dest('build/fonts/') );
});

gulp.task('img', function () {
    gulp.src('./src/images/*')
        .pipe( imagemin({
            progressive: true,
            optimizationLevel: 8
        }) )
        .pipe( gulp.dest('build/images') );
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/templates/**/*.pug', ['pug']);
});

gulp.task('build', ['sass', 'pug', 'fonts', 'img']);