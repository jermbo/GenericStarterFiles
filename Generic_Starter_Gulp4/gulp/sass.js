const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: true });

const { isProd, input, output } = require("./_config");

const src = `${input}/sass/**/*.{scss,sass}`;
const dest = `${output}/css`;

const sass = cb => {
  return gulp
    .src(src)
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.autoprefixer({ browsers: ["last 2 versions"], grid: false }))
    .pipe($.sourcemaps.write("./"))
    .pipe($.size({title: "Styles"}))
    .pipe(gulp.dest(dest));
};

exports.default = sass;
