const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: true });

const { input, output } = require("./_config");

const src = `${input}/sass/**/*.{scss,sass}`;
const dest = `${output}/css`;

function sass() {
  return gulp
    .src(src)
    .pipe($.sourcemaps.init())
    .pipe($.sass({ style: "compressed" }))
    .pipe($.autoprefixer({ browsers: ["last 2 versions"], grid: false }))
    .pipe($.sourcemaps.write("./"))
    .pipe($.size({title: "Styles"}))
    .pipe(gulp.dest(dest));
}

exports.src = src;
exports.default = sass;
