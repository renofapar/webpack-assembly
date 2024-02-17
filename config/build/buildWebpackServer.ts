import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import { BuildOptions } from './types/config'

export function buildWebpackServer(options: BuildOptions): WebpackDevServer.Configuration {
  return {
    port: options.port,
    open: true,

  }
}


