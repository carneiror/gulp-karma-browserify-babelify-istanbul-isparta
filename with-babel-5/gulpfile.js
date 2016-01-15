var gulp = require('gulp');
var karma = require('karma').Server;

gulp.task('test', function (done) {
    karma.start({
        configFile: process.cwd() + '/karma.conf.js',
        singleRun: true
    }, done);
});
