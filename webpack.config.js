var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {
  entry: ['./src/js/index.js'],
  output: {
    filename: 'index.min.js',
    path: path.resolve( __dirname, './dist/js')
  },
  devtool: "cheap-eval-source-map",
	devServer: {
		port: 9000,
		contentBase: path.join(__dirname, './dist/js')
	},
	module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules)/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['es2015']
	      }
	    }
	  ]
	},
	plugins: [
    new UglifyJSPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: '3000',
      server: { baseDir: ['dist'] }
    })
  ]
};
