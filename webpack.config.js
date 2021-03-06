// 这是学webpack的过渡配置， 之后可以删除
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  // 入口
  // entry: './src/index.js',
  // 多入口
  entry: {
    // app: './src/index.js',
    // print: './src/print.js',
    app: './src/index.js'
  },
  // 开发模式下使用
  devtool: 'inline-source-map',
  // server web
  devServer: {
    contentBase: './dist',
    // 模块热替换
    hot: true
  },
  // 插件
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: '动态生成'
    }),
    // 模块热替换
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  // 出口
  output: {
    // filename: 'bundle.js',
    // 多出口
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 模式切换， production将会压缩输出
  mode: 'production',
  module: {
    // 规则
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};