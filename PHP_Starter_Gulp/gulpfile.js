var gulp = require('gulp');
var browserSync = require('browser-sync');
var args = require('yargs').argv;
var $ = require('gulp-load-plugins')({ lazy: true });

var config = {
	sassSrc: ['./sass/**/*.sass', './sass/**/*.scss'],
	sassDist: './',
	jsSrc: './js/**/*.js'
};

gulp.task('default', ['styles', 'watch', 'browserSync']);

gulp.task('styles', function () {
	return gulp.src(config.sassSrc)
		.pipe($.sourcemaps.init())
		.pipe($.autoprefixer({ browsers: ['last 15 versions'] }))
		.on('error', function (error) {
			log('[ERROR] Autoprefixer : ' + error.message);
		})
		.pipe($.sass({ style: 'compressed' }))
		.on('error', function (error) {
			log('[ERROR] Styles : ' + error.message);
		})
		.pipe($.sourcemaps.write('./'))
		.pipe(gulp.dest(config.sassDist))
		;
});

gulp.task('bsReload', function () {
	browserSync.reload();
});

// Set the proxy.
gulp.task('browserSync', function () {

	var options = {
		proxy: "elysee.dev",
		files: [
			'./**/*.css',
			'./js/**/*.js',
			'./**/*.php'
		],
		ghostMode: {
			clicks: true,
			location: true,
			forms: true,
			scroll: true
		},
		injectChanges: true,
		notify: true,
		reloadDelay: 0 //1000
	};

	browserSync.init(null, options);
});

gulp.task('scripts', function () {
	// todo should add stuff here...
	log('scripts');
});

gulp.task('watch', ['browserSync'], function () {
	gulp.watch(config.sassSrc, ['styles', 'bsReload']);
	gulp.watch(config.jsSrc, ['scripts', 'bsReload']);
});

function log(msg) {
	if (typeof (msg) === 'object') {
		for (var item in msg) {
			if (msg.hasOwnProperty(item)) {
				$.util.log($.util.colors.blue(msg[item]));
			}
		}
	} else {
		$.util.log($.util.colors.blue(msg));
	}
}