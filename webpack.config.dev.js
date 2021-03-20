const sass = require('sass');
const Fiber = require('fiber');

const {
  APP_PATH,
  WEBPACK_RESOLVE,
  ENTRY_POINT,
  DEV_SERVER
} = require('./app.config');

module.exports = {
  entry: ENTRY_POINT,

  output: {
    filename: '[name].js',
    path: APP_PATH.dist.js
  },

  // NOTE - Cache to memory to improve speed of webpack build progress
  cache: true,

  resolve: WEBPACK_RESOLVE,

  // NOTE - This option allow to define behave of debug progress (help you know certain error file with line)
  devtool: 'eval-cheap-module-source-map',

  // NOTE - This option allow you live project with development mode into localhost
  devServer: DEV_SERVER,

  module: {
    /**
     * An array of Rules which are matched to requests when modules are created. These rules can modify how the module is created
     * (A Rule can be separated into three parts — Conditions, Results and nested Rules)
     */
    rules: [
      {
        test: /\.s[ac]ss$/i,
        include: APP_PATH.src.scss,
        use: [
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 1,
            },
          },

          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                APP_PATH.src.scss,
              ],

              // NOTE - Why use Fiber? (https://sass-lang.com/dart-sass)
              fiber: Fiber,
              functions: {
                'getScssGlobal($key)': function(key) {
                  const result = new sass.types.String(String(''));

                  return result;
                },
              },
            },
          }
        ],
      } // end a rule
    ], // end rules
  },// end module
};