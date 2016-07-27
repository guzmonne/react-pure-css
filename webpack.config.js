var path = require('path')
var getConfig = require('hjs-webpack')
var fs = require('fs')

var config = getConfig({
	in: 'src/app.js',
	out: 'dist',
	clearBeforeBuild: '!(images|css|favicon.ico)',
	isDev: process.env.NODE_ENV !== 'production',
	output: {
		hash: true
	},
	urlLoaderLimit: 10000,
	html: function(context){
		return {
			'index.html': context.defaultTemplate({
				head: '<link rel="stylesheet" href="css/custom.css">'
			}),
		}
	}
})

config.resolve = Object.assign({}, config.resolve, {
	root: [
		path.resolve('./node_modules'),
		path.resolve('./src')
	]
})

RegExp.prototype.toJSON = RegExp.prototype.toString;

fs.writeFile('./webpack.config.result.json', JSON.stringify(config, null, 2), err => {
	if (err) return console.log(err)
})

module.exports = config;
