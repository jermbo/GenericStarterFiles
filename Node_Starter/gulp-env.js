const yargs = require("yargs").argv;

module.exports = () => {
  const siteInstanceName = "localhost:4000";
  return {
    srcPath: "./public",
    buildPath: "./public",
    port: yargs.port ? yargs.port : 3000,
    devURL: yargs.url ? yargs.url : `${siteInstanceName}`
  };
};
