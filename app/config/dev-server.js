const { APP_PATH } = require('./app-path');

const DEV_SERVER = {
  https: true, // NOTE - Allow https
  contentBase: APP_PATH.tmp.path, // NOTE - the target that server watch reload on
  hot: false,
  writeToDisk: true,
  disableHostCheck: true,
  stats: {
    all: false,
    errors: true,
    errorDetails: true,
    assets: true,
    colors: true,
    timings: true,
    warning: true,
  },
};

module.exports = { DEV_SERVER };