const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: ['./src/script.js', './index.html'],
   module: {
      rules: [
         {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
         },
         {
            test: /\.html$/,
            use: ['html-loader']
         }
      ]
   },
   output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js'
   },
   plugins: [new HTMLWebpackPlugin({ template: './index.html' })],
   mode: 'development',
   devtool: false
};
