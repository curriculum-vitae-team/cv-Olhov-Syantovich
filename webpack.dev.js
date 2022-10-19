const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: `[name].js`,
    path: path.join(__dirname, 'build'),
    clean: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015'
      })
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  devtool: 'source-map',
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html'
    })
  ]
});
