const yargs = require("yargs");

const srcPath = "./src";
const buildPath = "./build";
const tmpPath = "./_tmp";
const siteInstanceName = "./";

module.exports = {
  srcPath,
  buildPath,
  tmpPath,
  siteInstanceName,
  env: process.env.ENV,
  html: {
    source: `${srcPath}/**/*.{html,htm,php,cshtml}`,
    build: `${buildPath}/`,
  },
  styles: {
    source: `${srcPath}/sass/**/*.{sass,scss,css}`,
    build: `${buildPath}/styles/`,
  },
  scripts: {
    source: `${srcPath}/scripts/**/*.js`,
    build: `${buildPath}/scripts/`,
  },
  images: {
    source: `${srcPath}/images/**/*`,
    build: `${buildPath}/images/`,
    sizes: [400, 900, 1300],
  },


  port: yargs.port ? yargs.port : process.env.PORT || 3000,
  devURL: yargs.url ? yargs.url : siteInstanceName,

  browserSyncSettings: {
    ghostMode: {
      clicks: true,
      location: true,
      forms: true,
      scroll: true,
    },
    injectChanges: true,
    notify: true,
    reloadDelay: 0,
  }
};
