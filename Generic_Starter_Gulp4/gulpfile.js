require("dotenv").config();

const {series, parallel} = require("gulp");
const {serve} = require("./gulp/browser-sync");
const {default: watcher} = require("./gulp/watcher");
const {default: html} = require("./gulp/html");
const {default: styles} = require("./gulp/styles");
const {default: images} = require("./gulp/images");
const {cleanAll, cleanTmp} = require("./gulp/clean");

exports.clean = cleanAll;

exports.default = series(
  cleanAll,
  parallel(html, styles, images),
  cleanTmp,
  serve,
  watcher,
);
