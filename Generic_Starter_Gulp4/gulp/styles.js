const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: true });

const { styles } = require("./_config");

const src = styles.source;
const build = styles.build;

function compileStyles() {
  return gulp
    .src(src)
    .pipe($.sourcemaps.init())
    .pipe($.sass(styles.options.sass))
    .pipe($.autoprefixer(styles.options.autoPrefixer))
    .pipe($.sourcemaps.write("./"))
    .pipe($.size({title: "Styles"}))
    .pipe(gulp.dest(build));
}

exports.src = src;
exports.default = compileStyles;
