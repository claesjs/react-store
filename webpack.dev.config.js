const baseConfig = require('./webpack.base.config.js');
const { merge } = require('webpack-merge');
const path = require('path');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: ['webpack-plugin-serve/client'],
  output: {
    path: outputPath
  },
  plugins: [
    new Serve({ static: outputPath })
  ],
  watch: true
});
