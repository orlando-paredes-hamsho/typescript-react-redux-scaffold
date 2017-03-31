var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

var host = "localhost", port = 8080;
process.argv.forEach(function (val, index, array) {
  if(val === "--port"){
    port = array[index+1];
  } else if (val === "--host") {
    host = array[index+1];
  }
});

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://'+host+':'+port,
    'webpack/hot/only-dev-server',
    'index.tsx'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/dist',
    path: __dirname + "/dist"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'] }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin({ alwaysNotify: true }),
    new webpack.HotModuleReplacementPlugin()
  ]
};