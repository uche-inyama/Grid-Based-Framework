module.exports = {
	entry: './src/main.js',
	output: {
		filename: './bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
		
	}
};