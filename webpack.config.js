const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = env => {
  return {
    devtool: 'inline-source-map',
    entry: {
      main: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'public/js'),
      filename:'[name].[chunkhash].js'
    },
    module: {
      rules: [
        {
              test: /\.js$/,
              exclude: /(node_modules\/(?!(kofujs)\/).*)|(node_modules\/kofujs\/node_modules\/(snabbdom|rxjs).*)/,
              // exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
      ]
    },
    plugins:[
      new CleanWebpackPlugin('public/js', {}),
      new WebpackMd5Hash(),
      new HtmlWebpackPlugin({ template: './src/templates/template.html', filename: '../index.html' })
    ]
  }
}
