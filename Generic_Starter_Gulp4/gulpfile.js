require("dotenv");

const {series, parallel} = require("gulp");
const {default: sass} = require("./gulp/sass");
const clean = require("./gulp/clean");

exports.clean = clean;

exports.default = series(
  clean,
  parallel(sass)
);

