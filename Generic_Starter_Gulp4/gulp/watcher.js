const {watch, series} = require("gulp");
const { reload } = require("./browser-sync");

const { src: sassSrc, default: sass } = require("./sass");
const { src: imgSrc, default: images } = require("./images");
const { src: htmlSrc, default: html } = require("./html");
// const { src: jsSrc } = require('./scripts');

function watcher(){
  watch(sassSrc, series(sass, reload));
  watch(imgSrc, series(images, reload));
  watch(htmlSrc, series(html, reload));
}

exports.default = watcher;
