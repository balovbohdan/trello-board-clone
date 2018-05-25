import webpack from 'webpack';
import path from 'path';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const srcRoot = path.resolve();

export default {
	entry: './src/index.js',
	watch: true,
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			notify: false,
			open: false,
			server: { baseDir: ['dist'] },
		}),
		new CopyWebpackPlugin([
			{ from: './src/assets/**/*', to: 'assets/icons/', flatten: true, },
			{ from: './src/reset.css', flatten: true, },
			{ from: './src/index.html', flatten: true, },
		]),
	],
	module: {
		rules: [
			{
				test: /\.js/,
				loader: 'babel-loader',
				include: srcRoot,
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: { modules: true }
					}
				],
			},
			{
				test: /\.(svg)$/,
				loader: 'file-loader',
				include: srcRoot,
			}
		],
	}
};