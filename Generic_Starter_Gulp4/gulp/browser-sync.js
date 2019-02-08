const browserSync = require("browser-sync").create();
const config = require("./_config");

function startServer(next){
  if( config.devURL == "./") {
    config.browserSync["server"] = {
      baseDir: config.output
    };
  } else {
    config.browserSync["proxy"] = config.devURL;
  }

  browserSync.init(null, config.browserSync);

  next();
}

function reload(next){
  browserSync.reload();
  next();
}

exports.reload = reload;
exports.serve = startServer;
