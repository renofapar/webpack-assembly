const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: './index.js',
    analytics: './analytics.js'
  },
  output: {
    filename: "bundle.[contenthash:8].js",
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: path.join('assets', '[name].[contenthash:8][ext]'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { "modules": false }]]
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: "index.html"
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
    }),
  ],
  devServer: {
    watchFiles: path.resolve(__dirname, 'src'),
    port: 4000,
  }
}