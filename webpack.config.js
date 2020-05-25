const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    app: "./src/app.js", //入口文件
  },
  output: {
    filename: "[name].js", //出口文件 [name]name会指定entry中的key值 app.js
    path: __dirname + "/dist", //指定打包的地址 __dirname 根目录
  },
  devServer: {
    contentBase: path.join(__dirname,'public'), //指定启动服务器的文件目录
    port: '3000', //端口
    compress:true, // 是否启动压缩
    open: true //是否打开浏览器
  },
  module: {
      rules: [
          {
              test: /\.jsx?$/,
              use: 'babel-loader',
              exclude: /node_modules/, //排除目录文件
              include: path.resolve(__dirname,'/src')
          }
      ]
  },
  plugins:[
      new HtmlWebpackPlugin({
          title: '创建模板', //指定模板title
          favicon: '',
          template: './public/index.html' //指定静态模板
      })
  ],
  mode: "development", //production
};