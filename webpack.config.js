const resolve = require('path').resolve
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const isProd = process.env.NODE_ENV === 'production'
const isTest = process.env.NODE_ENV === 'test'

module.exports = env => {
	const addPlugin = (add, plugin) => add ? plugin : undefined
	const ifProd = plugin => addPlugin(env.prod, plugin)
	const removeEmpty = array => array.filter(i => !!i)
	
	return {
		entry: {
			app: './app.js',
			vendor: ['react']
		},
		output: {
			filename: 'bundle.[name].[chunkhash].js',
			path: resolve(__dirname, 'dist'),
			pathinfo: !env.prod,
		},
		context: resolve(__dirname, 'src'),
		devtool: env.prod ? 'source-map' : 'eval',
		bail: env.prod,
		module: {
			loaders: [
				{test: /\.js$/, loader: 'babel', exclude: /node_modules/},
				{test: /\.css$/, loader: 'style!css'},
			]
		},
		plugins: removeEmpty([
			ifProd(new webpack.optimize.DedupePlugin()),
			ifProd(new webpack.LoaderOptionsPlugin({
				minimize: true,
				debug: false
			})),
			ifProd(new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: '"production"',
				}
			})),
			ifProd(new webpack.optimize.UglifyJsPlugin({
				compress: {
					screw_ie8: true,
					warnings: false,
				}
			})),
			ifProd(new webpack.optimize.CommonsChunkPlugin({
				name: 'vendor'
			})),
			ifProd(new webpack.optimize.CommonsChunkPlugin({
				name: 'common',
				filename: 'bundle.common.js',
			})),
			new HtmlWebpackPlugin({
				template: './index.html',
				title: 'MCP Dashboard',
			})
		])
	}
}