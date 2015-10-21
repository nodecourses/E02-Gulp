var gulp = require('gulp');

gulp.task('first', function() {
    console.log('>>> #1 First task');
});

gulp.task('second', function() {
    console.log('>>> #2 Second task');
});

gulp.task('third', function() {
    console.log('>>> #3 Third task');
});

gulp.task('default', [
    'second',
    'third'
]);
