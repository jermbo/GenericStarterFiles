const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: true });
const resizer = require("@zellwk/resize-images");


const {input, output, imageSizes } = require("./_config");

const imageInput = `${input}/images/**/*`;
const tmpOutput = "./_tmp/minified";
const tmpOutput2 = "./_tmp/resized";
const imageOutPut = `${output}/images`;

function jpegToWebp () {
  return gulp
    .src(`${imageInput}.{jpeg,jpg}`)
    .pipe($.newer({ dest: tmpOutput, ext: ".webp" }))
    .pipe($.webp({ quality: 80 }))
    .pipe(gulp.dest(tmpOutput));
}

function pngToWebp() {
  return gulp
    .src(`${imageInput}.png`)
    .pipe($.newer({ dest: tmpOutput, ext: ".webp" }))
    .pipe($.webp({ lossless: true }))
    .pipe(gulp.dest(tmpOutput));
}

function minifyImages() {
  return gulp
    .src(`${imageInput}.{png,jpg,jpeg,gif}`)
    .pipe($.newer(tmpOutput))
    .pipe($.imagemin([
      $.imagemin.jpegtran({ progressive: true }),
      $.imagemin.optipng({ optimizationLevel: 5 })
    ]))
    .pipe(gulp.dest(tmpOutput));
}

function resizeImages() {
  return resizer({
    inputDir: tmpOutput,
    outputDir: tmpOutput2,
    outputSizes: imageSizes
  });
}

const images = gulp.series(
  gulp.parallel(jpegToWebp, pngToWebp, minifyImages),
  gulp.parallel(resizeImages),
  // gulp.parallel(copyImagesToDist, copySvgToDist, copyFaviconsToDist)
);


exports.default = images;
