var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname + '/build')
var APP_DIR = path.resolve(__dirname + '/app')

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				//loader: 'babel',
				//query: {
				//		presets: ['es2015', 'react']
				//}
				use
			}
		]
	}
}

module.exports = config
