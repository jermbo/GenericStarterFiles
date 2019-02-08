const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: true });

const { styles } = require("./_config");

const src = styles.source;
const build = styles.build;

function sass() {
  return gulp
    .src(src)
    .pipe($.sourcemaps.init())
    .pipe($.sass({ style: "compressed" }))
    .pipe($.autoprefixer({ browsers: ["last 2 versions"], grid: false }))
    .pipe($.sourcemaps.write("./"))
    .pipe($.size({title: "Styles"}))
    .pipe(gulp.dest(build));
}

exports.src = src;
exports.default = sass;
