const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: `[name].[contenthash].js`,
    path: path.join(__dirname, 'build'),
    clean: true
  },
  optimization: (config = {
    splitChunks: {
      chunks: 'all'
    }
  }),
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new BundleAnalyzerPlugin()
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 1024,
    maxAssetSize: 1024
  }
});
