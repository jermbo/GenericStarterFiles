const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: true });
const plumber = require("./_plumber");

const { scripts } = require("./_config");

const src = scripts.source;
const build = scripts.build;

function compileScripts() {
  return gulp
    .src(src)
    .pipe(plumber("Error Running Scripts"))
    .pipe($.changed(build))
    .pipe($.babel())
    .pipe($.size({ title: "Scripts" }))
    .pipe(gulp.dest(build));
}

exports.src = src;
exports.default = compileScripts;
