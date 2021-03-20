const { APP_PATH } = require('./app-path');

const ENTRY_POINT = {
  'home-page': APP_PATH.src.jsPartial + '/home-page/home-page.js',
  'home-page-style': APP_PATH.src.scssPartial + '/home-page/home-page.css',
  'home-page-template': APP_PATH.src.njkTemplate + '/home-page/home-page.njk',
};

module.exports = { ENTRY_POINT };