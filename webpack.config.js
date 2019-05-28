module.exports = {
	entry: './src/main.js',
	output: {
		filename: './bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{

			}
		]
		
	}
};