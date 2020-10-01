const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const env = process.env.NODE_ENV || 'development';
console.log(`${env}模式打包开始`);

module.exports = {
  entry: './preview.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: "umd"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, 
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      }, 
      {
        test: /\.tsx?$/, 
        use: {
          loader: 'ts-loader'
        },
        exclude: /node_modules/
      }, 
      {
        test: /.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
		extensions: [".js", ".jsx", 'ts', 'tsx']
	},
  plugins: [
    new HtmlWebpackPlugin({template: 'index.html'}),
    new CleanWebpackPlugin()
  ]
};