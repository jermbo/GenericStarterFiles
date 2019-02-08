const browserSync = require("browser-sync").create();
const {siteInstanceName, browserSyncSettings, buildPath} = require("./_config");

function startServer(next) {
  if( siteInstanceName == "./") {
    browserSyncSettings["server"] = {
      baseDir: buildPath
    };
  } else {
    browserSyncSettings["proxy"] = siteInstanceName;
  }

  browserSync.init(null, browserSyncSettings);

  next();
}

function reload(next){
  browserSync.reload();
  next();
}

exports.reload = reload;
exports.serve = startServer;
