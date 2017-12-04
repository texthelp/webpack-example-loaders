module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
	path: __dirname+"/dist",
  },
  module: {
    rules: [
	  {
	    test: /\.css$/,
	    use: [
	      'style-loader',
	      'css-loader'
	    ]
	  },
	  {
		test: /\.(png|svg|jpg|gif)$/,
		use: [
		  'file-loader'
		]
	  }
	]
  }
};
