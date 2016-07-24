var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var getConfig = require('./webpack.config')

const config = getConfig({dev: true})

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
    return 
  }
  console.log('Listening at http://localhost:3000/');
});

