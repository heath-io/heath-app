/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

import { dependencies } from '../package.json';
import paths from './paths';

export default {
  externals: [...Object.keys(dependencies || {})],

  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: require.resolve('source-map-loader'),
        enforce: 'pre',
        include: paths.appSrc,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(tsx)$/,
        include: paths.appSrc,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              // disable type checker - we will use it in fork plugin
              transpileOnly: true,
            },
          },
        ],
      },
    ]
  },

  output: {
    path: path.join(__dirname, '..', 'app'),
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2'
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.tsx', '.scss'],
    alias: {
      '@': paths.appSrc,
      '@common': paths.appCommon,
      '@commonScss': paths.appCommonScss,
      '@commonStore': paths.appCommonStore,
      '@commonStyled': paths.appCommonStyled,
      '@comp': paths.appComp,
      '@con': paths.appCon,
      '@scss': paths.appScss,
      '@store': paths.appStore,
      '@util': paths.appUtil,
      '@tool': paths.appTool,
      '@mixin': paths.appMixin,
      '@lib': paths.appLib,
      '@static': paths.appStatic,
      '@image': paths.appImage,
      '@icon': paths.appIcon,
    },
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),

    new webpack.NamedModulesPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      watch: paths.appSrc,
      tsconfig: paths.appTsConfig,
      tslint: paths.appTsLint,
    }),
  ]
};
