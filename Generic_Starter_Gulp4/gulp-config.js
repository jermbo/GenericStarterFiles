const env = require("./gulp-env")();
const imgExtensions = "jpg,JPG,jpeg,JPEG,png,PNG,gif,GIF,svg";

module.exports = () => {
  const config = {
    html: {
      source: `${env.srcPath}/**/*.{html,htm,php,cshtml}`,
      build: `${env.buildPath}/`,
    },
    styles: {
      source: `${env.srcPath}/sass/**/*.{sass,scss,css}`,
      build: `${env.buildPath}/styles/`,
    },
    scripts: {
      source: `${env.srcPath}/scripts/**/*.js`,
      build: `${env.buildPath}/scripts/`,
    },
    images: {
      source: `${env.srcPath}/images/**/*.{${imgExtensions}}`,
      build: `${env.buildPath}/images/`,
    },
    browserSync: {
      port: env.port,
      ghostMode: {
        clicks: true,
        location: true,
        forms: true,
        scroll: true,
      },
      injectChanges: true,
      notify: true,
      reloadDelay: 0,
    },
    options: {
      autoPrefixerOptions: { browsers: ["last 2 versions"], grid: false },
      sass: {
        outputStyle: "compressed",
      },
    },
  };

  return config;
};
