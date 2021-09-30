const path = require('path');
const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.config');

module.exports = merge(webpackCommonConfig, {
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
      // publicPath: '/dist'
   },
   mode: 'development'
});
