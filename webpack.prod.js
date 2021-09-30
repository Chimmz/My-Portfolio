const path = require('path');
const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.config');

module.exports = merge(webpackCommonConfig, {
   output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'build')
      // publicPath: '/build'
   },

   mode: 'production'
});
