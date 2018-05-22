import webpack from 'webpack';
import path from 'path';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

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
		],
	}
};