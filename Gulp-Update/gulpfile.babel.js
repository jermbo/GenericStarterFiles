const gulp = require("gulp");
const env = require("./gulp-env")();
const config = require("./gulp-config")();
const $ = require("gulp-load-plugins")({ lazy: true });
const browserSync = require("browser-sync");
const del = require("del");
const server = browserSync.create();

function clean(cb) {
  del([env.buildPath]);
  cb();
}

function compileHTML() {
  return gulp
    .src(config.html.source)
    .pipe($.changed(config.html.build))
    .pipe(gulp.dest(config.html.build));
}

function watch(cb) {
  gulp.watch(config.html.source, gulp.series(compileHTML, reload));
}

function reload(cb) {
  server.reload();
  cb();
}
function serve(cb) {
  if (env.devURL == "./") {
    config.browserSync["server"] = {
      baseDir: `${env.buildPath}/`
    };
  } else {
    config.browserSync["proxy"] = env.devURL;
  }
  server.init(null, config.browserSync);
  cb();
}

gulp.task("default", gulp.series(clean, compileHTML, serve, watch));
