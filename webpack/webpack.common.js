const webpack = require("webpack");
const commonPaths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
	entry: commonPaths.entryPath,
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.(js|jsx)$/,
				loader: "eslint-loader",
				exclude: /(node_modules)/,
				options: {
					emitWarning: process.env.NODE_ENV !== "production"
				}
			},
			{
				test: /\.(js|jsx)$/,
				loader: "babel-loader",
				exclude: /(node_modules)/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: commonPaths.imagesFolder
						}
					}
				]
			},
			{
				test: /\.(woff2|ttf|woff|eot)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: commonPaths.fontsFolder
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
		alias: {
			react: "preact-compat",
			"react-dom": "preact-compat"
		}
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: commonPaths.templatePath
		}),
		new UglifyJSPlugin({
			cache: true,
			parallel: true,
			uglifyOptions: {
				compress: true,
				ecma: 6,
				mangle: true
			},
			sourceMap: true
		}),
		new ManifestPlugin({
			fileName: "asset-manifest.json" // Not to confuse with manifest.json
		}),
		new CompressionPlugin()
	]
};
