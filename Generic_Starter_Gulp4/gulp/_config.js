const yargs = require("yargs");
const env = process.env.NODE_ENV;
const port = process.env.PORT || 3000;

const isDev = env === "development";
const isProd = env === "production";
const isTest = env === "test";

const siteInstanceName = "./";

module.exports = {
  env,
  isDev,
  isProd,
  isTest,
  input: "./src",
  output: "./build",
  imageSizes: [400, 900, 1300],
  devURL: yargs.url ? yargs.url : siteInstanceName,
  browserSync: {
    port: port,
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
