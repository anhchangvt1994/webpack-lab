const { APP_PATH } = require('./app-path');

const WEBPACK_RESOLVE = {
  extension: ['.njk', '.html', '.css', '.scss', '.js', '.json', '.vue'],

  alias: {
    '~srcPath': APP_PATH.src.path,

    // NOTE - njk path
    '~njkPath': APP_PATH.src.njk,
    '~njkTemplate': APP_PATH.src.njkTemplate,
    '~njkPartial': APP_PATH.src.njkPartial,
    '~njkComponent': APP_PATH.src.njkComponent,

    // NOTE - scss path
    '~scssPath': APP_PATH.src.scss,

    // NOTE - js path
    '~jsPath': APP_PATH.src.js,
    '~jsPartial': APP_PATH.src.jsPartial,
    '~jsLib': APP_PATH.src.jsLib,
    '~jsBase': APP_PATH.src.jsBase,
  },

  unsafeCache: true,
};

module.exports = {
  WEBPACK_RESOLVE
};