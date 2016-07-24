const path = require('path')
const webpack = require('webpack')
const isProd = process.env.NODE_ENV === 'production'
const isTest = process.env.NODE_ENV === 'test'
const resolve = path.resolve
const join = path.join

module.exports = env => {
	const addPlugin = (add, plugin) => add ? plugin : undefined
	const ifProd = plugin => addPlugin(env.prod, plugin)
	const ifDev = plugin => addPlugin(!env.prod, plugin)
	const removeEmpty = array => array.filter(i => !!i)
	
	return {
		entry: {
			app: [
				// WebpackDevServer host and port
				'webpack-dev-server/client?http://localhost:3000',
				// "only" prevents reload on syntax errors
				'webpack/hot/only-dev-server',
				// Application entry point
				'./app.js'
			],
			vendor: [
				'webpack/hot/only-dev-server',
				'react'
			]
		},
		output: {
			filename: 'bundle.[name].[hash].js',
			path: resolve(__dirname, 'dist'),
			pathinfo: !env.prod,
		},
		resolve: {
	    extensions: [
	      "",
	      ".js",
	      ".jsx",
	      ".json"
	    ],
	    root: [
	      resolve(__dirname, 'node_modules'),
	      resolve(__dirname, 'src')
	    ]
	  },
		context: resolve(__dirname, 'src'),
		devtool: env.prod ? 'source-map' : 'eval',
		bail: env.prod,
		module: {
			loaders: [
				{
					test: /\.(js|jsx|babel)$/, 
					loaders: ['babel'], 
					include: join(__dirname, 'src')
				},
				{
					test: /\.css$/, 
					loader: 'style!css'
				},
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
			ifDev(new webpack.HotModuleReplacementPlugin()),
			new HtmlWebpackPlugin({
				template: './index.html',
				title: 'MCP Dashboard',
			})
		])
	}
}