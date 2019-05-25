var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  module:{
    rules: [
      {
        test: /\.css$/,  /*확장자가 .css로 끝나는지 판단*/
        use:["style-loader", "css-loader"] /*true면 use가 실행되며 []뒤에서부터 실행됨.*/
      },
      {
        test: /\.scss$/,  /*확장자가 .scss로 끝나는지 판단*/
        use:["style-loader", "css-loader", "sass-loader"] /*true면 use가 실행되며 []뒤에서부터 실행됨.*/
      }
    ]
  }
}