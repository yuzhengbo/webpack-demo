// 生产环境配置
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // 采用webpack官方新提供的mode的production模式压缩代码，可以不显式设置， 默认production
  mode: 'production',
  // 用于生产环境调试，能看到项目树
  devtool: 'source-map',
  plugins: [
    // 指定生产环境
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})