const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
const env = require('dotenv');
const webpack = require('webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

env.config();

const PUBLIC_ = /^PUBLIC_/i;

const safeEnv = Object.keys(process.env)
  .filter((key) => PUBLIC_.test(key))
  .reduce((env, key) => {
    env[key] = process.env[key];
    return env;
  }, {});

const stringifiedEnv = (envs) => ({
  'process.browser': true,
  'process.env': Object.keys(envs).reduce((env, key) => {
    env[key] = JSON.stringify(envs[key]);
    return env;
  }, {}),
});

const nonReactAppEnvs = {
  NODE_ENV: process.env.NODE_ENV || 'development',
};

const isAnalyze = typeof process.env.BUNDLE_ANALYZE !== 'undefined';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'cheap-module-source-map' : 'source-map',
  entry: {
    main: {
      import: './src/index',
    },
  },

  output: {
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'public/'),
      watch: true,
      publicPath: '/public',
    },
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    extensions: ['.tsx', '.ts', '.js'],
    // we need to alias any potential sub-dependencies (libraries require by other modules)
    fallback: {
      stream: false,
      assert: false,
      http: false,
      https: false,
      os: false,
      util: require.resolve('util'),
      buffer: require.resolve('buffer/'),
    },
    alias: {
      next: path.resolve(__dirname, 'src/components/nextMock/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      'bn.js': path.resolve(__dirname, './node_modules/bn.js'),
    },
  },
  plugins: [
    // note module (not target) set to es2015 or later (not work with CommonJS currently
    new ReactRefreshPlugin(),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve('dist', 'index.html'),
      template: path.resolve('src', 'index.ejs'),
      inject: false,
      hash: true,
      favicon: './public/favicon.ico',
    }),
    new webpack.DefinePlugin(
      stringifiedEnv({ ...safeEnv, ...nonReactAppEnvs })
    ),
    isProduction ? new CompressionPlugin() : () => null,
    isAnalyze ? new BundleAnalyzerPlugin() : () => null,
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          'mdx-loader',
        ],
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              getCustomTransformers: () => ({
                before: [!isProduction && ReactRefreshTypeScript()].filter(
                  Boolean
                ),
              }),
              projectReferences: true,
              transpileOnly: !isProduction,
              configFile: !isProduction
                ? 'tsconfig.json'
                : 'tsconfig.build.json',
            },
          },
        ],
      },
    ],
  },
};
