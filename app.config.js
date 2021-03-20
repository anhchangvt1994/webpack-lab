const { APP_PATH } = require('./app/config/app-path');
const { WEBPACK_RESOLVE } = require('./app/config/webpack-resolve');
const { ENTRY_POINT } = require('./app/config/entry-point');
const { DEV_SERVER } = require('./app/config/dev-server');

module.exports = {
  APP_PATH,
  WEBPACK_RESOLVE,
  ENTRY_POINT,
  DEV_SERVER,
};