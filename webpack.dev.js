const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '',
    assetModuleFilename: './images/[name][ext][query]'
  },
  devServer: {
    contentBase: './',
    watchContentBase: true,
    writeToDisk: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/main.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
})
