const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: true });

const { input, output } = require("./_config");

const src = `${input}/**/*.{html,htm,php,cshtml}`;
const dest = `${output}`;

function html() {
  return gulp
    .src(src)
    .pipe($.changed(dest))
    .pipe(gulp.dest(dest));
}

exports.src = src;
exports.default = html;
