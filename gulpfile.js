const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const path = require('path');

const srcPaths = {
    css: ['assets/css/**/*.css', 'common/assets/css/**/*.css', 'innerpages/assets/css/**/*.css'],
    js: ['assets/js/**/*.js', 'common/assets/js/**/*.js', 'innerpages/assets/js/**/*.js'],
    html: 'innerpages/*.html'
};

gulp.task('minify-css', () => {
    return gulp.src(srcPaths.css, { base: '.' })
        .pipe(cleanCSS())
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest('rev-manifest.json', {
            merge: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-js', () => {
    return gulp.src(srcPaths.js, { base: '.' })
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest('rev-manifest.json', {
            merge: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('revreplace', () => {
    const manifest = gulp.src('./dist/rev-manifest.json');

    return gulp.src(srcPaths.html)
        .pipe(revReplace({ manifest }))
        .pipe(gulp.dest('dist/innerpages'));
});

gulp.task('default', gulp.series('minify-css', 'minify-js', 'revreplace'));
