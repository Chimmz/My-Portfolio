const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: ['./src/js/script.js'],
   module: {
      rules: [
         {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
         },
         {
            test: /\.html$/,
            use: ['html-loader']
         },
         {
            test: /\.(jpg|jpeg|png|jiff|mp4)$/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[name].[ext]',
                     outputPath: 'assets/'
                     // publicPath: 'assets/'
                  }
               }
            ]
         }
      ]
   },
   plugins: [new HTMLWebpackPlugin({ template: './index.html' })],
   mode: 'development',
   devtool: false
};
