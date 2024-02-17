import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack'
import path from 'path';
import { BuildOptions } from './types/config';
export function buildPlugin({paths}: BuildOptions):webpack.WebpackPluginInstance[] {
  return [
      new HtmlWebpackPlugin({template: paths.html}),
      new webpack.ProgressPlugin({
        activeModules: true,
        entries: true,
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      })
  ]

}