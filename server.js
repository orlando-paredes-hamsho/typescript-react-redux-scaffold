var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var host = "localhost", port = 8080;
process.argv.forEach(function (val, index, array) {
  if(val === "--port"){
    port = array[index+1];
  } else if (val === "--host") {
    host = array[index+1];
  }
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(port, host, function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://'+host+':'+port+'/');
});