const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: true });

const { images, tmpPath } = require("./_config");

const src = images.source;
const build = images.build;

const tmpOutput = `${tmpPath}/minified`;
const tmpOutput2 = `${tmpPath}/resized`;

function jpegToWebp() {
  return gulp
    .src(`${src}.{jpeg,jpg}`)
    .pipe($.newer({ dest: tmpOutput, ext: ".webp" }))
    .pipe($.webp({ quality: 80 }))
    .pipe(gulp.dest(tmpOutput));
}

function pngToWebp() {
  return gulp
    .src(`${src}.png`)
    .pipe($.newer({ dest: tmpOutput, ext: ".webp" }))
    .pipe($.webp({ lossless: true }))
    .pipe(gulp.dest(tmpOutput));
}

function minifyImages() {
  const imgOpts = [
    $.imagemin.gifsicle({ interlaced: true }),
    $.imagemin.mozjpeg({ quality: 75, progressive: true }),
    $.imagemin.optipng({ optimizationLevel: 5 }),
    $.imagemin.svgo({
      plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
    }),
  ];

  return gulp
    .src(`${src}.{png,jpg,jpeg,gif}`)
    .pipe($.newer(tmpOutput))
    .pipe($.imagemin(imgOpts))
    .pipe(gulp.dest(tmpOutput))
    .pipe(gulp.dest(build));
}

function copyImagesToDist() {
  return gulp.src(`${tmpOutput2}/**/*`).pipe(gulp.dest(build));
}

function copySvgToDist() {
  return gulp.src(`${src}.svg`).pipe(gulp.dest(build));
}

const compileImages = gulp.series(
  gulp.parallel(jpegToWebp, pngToWebp, minifyImages),
  gulp.parallel(copyImagesToDist, copySvgToDist),
);

exports.src = src;
exports.default = compileImages;
