const {watch, series} = require("gulp");
const { reload } = require("./browser-sync");

const { src: sassSrc, default: compileStyles } = require("./styles");
const { src: imgSrc, default: compileImages } = require("./images");
const { src: htmlSrc, default: compileHTML } = require("./html");
// const { src: jsSrc } = require('./scripts');

function watcher(){
  watch(sassSrc, series(compileStyles, reload));
  watch(imgSrc, series(compileImages, reload));
  watch(htmlSrc, series(compileHTML, reload));
}

exports.default = watcher;
