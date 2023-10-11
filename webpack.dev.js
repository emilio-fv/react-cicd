const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    hot: true,
    open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  watchOptions: {
    poll: 1000
  }
})