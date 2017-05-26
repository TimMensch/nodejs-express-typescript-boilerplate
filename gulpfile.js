const gulp = require("gulp");
const tslint = require("gulp-tslint");
const clean = require("gulp-clean");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const server = require('gulp-develop-server');

const sourcemaps = require('gulp-sourcemaps');


gulp.task("lint", function() {
    return gulp.src("src/**/*.ts").pipe(tslint({}))
        .pipe(tslint.report({
            summarizeFailureOutput: true
        }));
});
gulp.task('clean', function() {
    return gulp.src('build/*', {
            read: false
        })
        .pipe(clean());
});

gulp.task('build', function() {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject(ts.reporter.defaultReporter()))
        .js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("build"));
});

gulp.task("watch", [ "build" ], function () {
    gulp.watch("src/**/*.ts", [ "build" ]);
});

gulp.task("serve", [ "watch" ], function () {
    server.listen({
        path: "./build/server.js",
        execArgv: [ '--harmony' ]
    });
    gulp.watch(["./build/server.js"], server.restart);
});