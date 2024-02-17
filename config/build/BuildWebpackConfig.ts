import path from "path"
import { buildPlugin } from "./buildPlugin"
import { buildLoader } from "./buildLoaders"
import { buildResolves } from "./buildResolves"
import webpack from "webpack"
import { BuildOptions } from "./types/config"
import { buildWebpackServer } from "./buildWebpackServer"

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, port, isDev } = options
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugin(options),
    resolve: buildResolves(),
    module: {
      rules: buildLoader(options)
    },
    devServer: isDev ? buildWebpackServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
    
  }
}