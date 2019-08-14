const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const del = require('del');


gulp.task('build:clean', function () {
    return del(['dist/**']);
});

gulp.task('build:copy', function () {
    return gulp.src(['src/**/*'])
        .pipe(gulp.dest('build'));
});

gulp.task('build:ts', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*', gulp.series('default'));
});


gulp.task('default', gulp.series('build:clean', 'build:ts'));