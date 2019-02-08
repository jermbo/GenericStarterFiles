const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: true });

const { scripts } = require("./_config");

const src = scripts.source;
const build = scripts.build;

function compileScripts() {
  return gulp
    .src(src)
    .pipe($.changed(build))
    .pipe($.babel())
    .pipe(gulp.dest(build));
}

exports.src = src;
exports.default = compileScripts;
