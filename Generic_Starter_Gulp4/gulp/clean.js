const config = require("./_config");
const del = require("del");

const clean = () => {
  return del([
    config.output,
    "./_tmp"
  ]);
};

module.exports = clean;
