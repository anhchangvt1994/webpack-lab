const path = require('path');

// NOTE - Define for target directory
const APP_SRC_PATH = path.resolve(__dirname, 'src');
const APP_TMP_PATH = path.resolve(__dirname, 'tmp');
const APP_DIST_PATH = path.resolve(__dirname, 'dist');

const APP_PATH = {
  src: {
    // NOTE - src directory
    path: APP_SRC_PATH,

    // NOTE - njk directory
    njk: path.resolve(__dirname, APP_SRC_PATH, 'njk'),
    njkTemplate: path.resolve(__dirname, APP_SRC_PATH, 'njk/template'),
    njkPartial: path.resolve(__dirname, APP_SRC_PATH, 'njk/partial'),
    njkComponent: path.resolve(__dirname, APP_SRC_PATH, 'njk/component'),

    // NOTE - sass directory
    scss: path.resolve(__dirname, APP_SRC_PATH, 'scss'),
    scssPartial: path.resolve(__dirname, APP_SRC_PATH, 'scss/partial'),

    // NOTE - js directory
    js: path.resolve(__dirname, APP_SRC_PATH, 'js'),
    jsPartial: path.resolve(__dirname, APP_SRC_PATH, 'js/partial'),
    jsLib: path.resolve(__dirname, APP_SRC_PATH, 'js/lib'),
    jsBase: path.resolve(__dirname, APP_SRC_PATH, 'js/base'),
  },

  tmp: {
    // NOTE - tmp directory
    path: APP_TMP_PATH,

    // NOTE - css directory
    css: path.resolve(__dirname, APP_TMP_PATH, 'css'),

    // NOTE - js directory
    js: path.resolve(__dirname, APP_TMP_PATH, 'js'),
  },

  dist: {
    // NOTE - dist directory
    path: APP_DIST_PATH,

    // NOTE - css directory
    css: path.resolve(__dirname, APP_DIST_PATH, 'css'),

    // NOTE - js directory
    js: path.resolve(__dirname, APP_DIST_PATH, 'js'),
  },
};

module.exports = {
  APP_PATH
};