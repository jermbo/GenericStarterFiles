require("dotenv").config();

const {series, parallel} = require("gulp");
const {default: sass} = require("./gulp/sass");
const {default: images} = require("./gulp/images");
const clean = require("./gulp/clean");

exports.clean = clean;

exports.default = series(
  clean,
  parallel(sass, images)
);

