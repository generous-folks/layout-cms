/* eslint-disable prefer-object-spread */
const path = require('path');
const LoadableWebpackPlugin = require('@loadable/webpack-plugin');
const LoadableBabelPlugin = require('@loadable/babel-plugin');
const babelPresetRazzle = require('razzle/babel');

module.exports = {
  modifyWebpackConfig: opts => {
    const config = opts.webpackConfig;

    if (opts.env.target === 'web') {
      const filename = path.resolve(__dirname, 'build');
      config.plugins = [
        ...config.plugins,
        new LoadableWebpackPlugin({
          outputAsset: false,
          writeToDisk: { filename },
        }),
      ];

      config.node = { fs: 'empty' };
      config.output.filename = opts.env.dev ? 'static/js/[name].js' : 'static/js/[name].[chunkhash:8].js';

      config.optimization = Object.assign({}, config.optimization, {
        runtimeChunk: true,
        splitChunks: {
          chunks: 'all',
          name: opts.env.dev,
        },
      });
    }

    if (opts.env.target === 'node' && !opts.env.dev) {
      config.entry = path.resolve(__dirname, './src/server.js');
      config.output.filename = 'server.bundle.js';
      config.output.path = path.resolve(__dirname, './build');
      config.output.libraryTarget = 'commonjs2';
    }

    return config;
  },

  modifyBabelOptions: () => ({
    babelrc: false,
    presets: [babelPresetRazzle],
    plugins: [LoadableBabelPlugin],
  }),
};
