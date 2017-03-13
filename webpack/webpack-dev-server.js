const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackpackConfig = require('./webpack.config');

const env = { dev: process.env.NODE_ENV };

const devServerConfig = {
    contentBase: path.join(__dirname, '../../src/'),
    historyApiFallback: { disableDotRule: true },
};

const server = new WebpackDevServer(webpack(webpackpackConfig(env)), devServerConfig);

server.listen(3000, 'localhost');
