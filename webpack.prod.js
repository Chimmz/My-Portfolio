const path = require('path');
const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.config');

module.exports = merge(webpackCommonConfig, {
   output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js'
   },
   mode: 'production',
   devtool: false
});
