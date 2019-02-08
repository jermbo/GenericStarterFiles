require("dotenv").config();

const {series, parallel} = require("gulp");
const {serve} = require("./gulp/browser-sync");
const {default: watcher} = require("./gulp/watcher");
const {default: html} = require("./gulp/html");
const {default: sass} = require("./gulp/sass");
const {default: images} = require("./gulp/images");
const clean = require("./gulp/clean");

exports.clean = clean;

exports.default = series(
  clean,
  parallel(html, sass, images),
  parallel(serve, watcher)
);
