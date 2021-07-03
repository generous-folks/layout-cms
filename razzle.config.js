/* eslint-disable prefer-object-spread */
const path = require('path');
const LoadableWebpackPlugin = require('@loadable/webpack-plugin');
const LoadableBabelPlugin = require('@loadable/babel-plugin');
const babelPresetRazzle = require('razzle/babel');

module.exports = {
  modifyWebpackConfig: opts => {
    const config = opts.webpackConfig;

    if (opts.env.target === 'node' && !opts.env.dev) {
      config.entry = path.resolve(__dirname, './src/server.js');
      config.output.filename = config.mode.includes('dev')
        ? 'static/js/[name].js'
        : 'static/js/[name].[chunkhash:8].js';
      config.output.path = path.resolve(__dirname, './build');
      config.output.libraryTarget = 'commonjs2';
    }

    if (opts.env.target === 'web') {
      const filename = path.resolve(__dirname, 'build');
      config.plugins = [
        ...config.plugins,
        new LoadableWebpackPlugin({
          outputAsset: false,
          writeToDisk: { filename },
        }),
      ];

      config.optimization = Object.assign({}, config.optimization, {
        runtimeChunk: true,
        splitChunks: {
          chunks: 'all',
          name: config.mode.includes('dev'),
        },
      });
    }

    return config;
    /*
    console.log(JSON.stringify(config, null, 2));
    const appConfig = Object.assign({}, config);

    if (appConfig.target === 'web') {
      const filename = path.resolve(__dirname, 'build');

      appConfig.plugins = [
        ...appConfig.plugins,
        new LoadableWebpackPlugin({
          outputAsset: false,
          writeToDisk: { filename },
        }),
      ];

      appConfig.output.filename = dev ? 'static/js/[name].js' : 'static/js/[name].[chunkhash:8].js';

      appConfig.node = { fs: 'empty' }; // fix "Cannot find module 'fs'" problem.

      appConfig.optimization = Object.assign({}, appConfig.optimization, {
        runtimeChunk: true,
        splitChunks: {
          chunks: 'all',
          name: dev,
        },
      });
    }

    if (target === 'node' && !dev) {
      appConfig.entry = path.resolve(__dirname, './src/server.js');
      appConfig.output.filename = 'server.bundle.js';
      appConfig.output.path = path.resolve(__dirname, './build');
      appConfig.output.libraryTarget = 'commonjs2';
    }

    return appConfig;
    */
  },

  modifyBabelOptions: () => ({
    babelrc: false,
    presets: [babelPresetRazzle],
    plugins: [LoadableBabelPlugin],
  }),
};
