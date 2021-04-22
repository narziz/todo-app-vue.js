const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/main.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    assetModuleFilename: './images/[name][ext][query]'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/main.[contenthash].css'
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
