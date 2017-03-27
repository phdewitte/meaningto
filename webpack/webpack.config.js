const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = env => {
    return {
        entry: {
            app: path.join(__dirname, '../src'),
            vendor: ['react', 'react-dom'],
        },

        output: {
            filename: '[name].[hash].js',
            path: path.join(__dirname, '../dist'),
        },

        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: true,
                    },
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                        loader: 'css-loader?importLoaders=1!postcss-loader',
                    }),
                },
            ],
        },

        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: Infinity,
                filename: '[name].[hash].js',
            }),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, '../src/index.html'),
                filename: 'index.html',
                inject: 'body',
            }),
            new ExtractTextPlugin('[name].bundle.css'),
        ],
    };
};
