const gulp = require("gulp");
const env = require("./gulp-env")();
const config = require("./gulp-config")();
const $ = require("gulp-load-plugins")({ lazy: true });
const browserSync = require("browser-sync");
const del = require("del");

// ----------
// Tasks
gulp.task("task:clean", () => {
  return del([env.buildPath]);
});

gulp.task("task:compile-html", () => {
  return gulp
    .src(config.html.source)
    .pipe($.changed(config.html.build))
    .pipe(gulp.dest(config.html.build));
});

gulp.task("task:compile-images", () => {
  return gulp
    .src(config.images.source)
    .pipe($.changed(config.images.build))
    .pipe(gulp.dest(config.images.build));
});

gulp.task("task:compile-styles", () => {
  return gulp
    .src(config.styles.source)
    .pipe(errorHandler())
    .pipe($.sourcemaps.init())
    .pipe($.sass(config.options.sass))
    .pipe($.autoprefixer(config.options.autoPrefixerOptions))
    .pipe($.sourcemaps.write("./"))
    .pipe(gulp.dest(config.styles.build));
  // .pipe(browserSync.stream());
});

gulp.task("task:compile-scripts", () => {
  return gulp
    .src(config.scripts.source)
    .pipe(errorHandler())
    .pipe($.changed(config.scripts.build))
    .pipe($.babel(config.options.babelEnvOptions))
    .pipe(gulp.dest(config.scripts.build));
  // .pipe(browserSync.stream());
});

gulp.task("task:start-server", () => {
  if (env.devURL == "./") {
    config.browserSync["server"] = {
      baseDir: `${env.buildPath}/`
    };
  } else {
    config.browserSync["proxy"] = env.devURL;
  }
  browserSync.init(null, config.browserSync);
});

gulp.task("task:start-watch", () => {
  gulp.watch(config.html.source, gulp.series("task:compile-html"));
});

gulp.task(
  "__start-local__",
  gulp.series(
    "task:clean",
    gulp.parallel(
      "task:compile-html",
      "task:compile-styles",
      "task:compile-scripts",
      "task:compile-images",
      "task:start-watch"
    ),
    "task:start-server"
  )
);

gulp.task("task:page-reload", () => {
  browserSync.reload();
});

// --------------
// Functions
function errorHandler() {
  return $.plumber({
    errorHandler: function(err) {
      $.notify.onError({
        title: `Error : ${err.plugin}`,
        message: `Issue : ${err}`,
        sound: false
      })(err);

      console.log(`
  /////////////////////////////////////
  /////////////////////////////////////
  Error: ${err.plugin}
  Issue : ${err}
  /////////////////////////////////////
  /////////////////////////////////////
  `);
      this.emit("end");
    }
  });
}
