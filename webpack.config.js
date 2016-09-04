var argv = require('yargs').argv;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var nodeExternals = require('webpack-node-externals');


var jsLoader = {
  test: /\.js$/,
  loader: 'babel-loader',
  query: {
   presets: ['es2015', 'react'],
   babelrc: false
 }
};

var jsonLoader = {
  test: /\.json$/,
  loader: 'json-loader'
};

var cssLoader = {
  test: /\.css$/,
  loader: argv.client
    ? ExtractTextPlugin.extract("css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]")
    : "css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"

}

var clientConfig = {
    entry: './client.js',
    output: {
       path: './.tmp/',
       filename: 'client.bundle.js'
    },
    module: {
       loaders: [ jsLoader, jsonLoader, cssLoader ]
    },
    plugins: [ new ExtractTextPlugin("style.bundle.css") ]
 };

 var serverConfig = {
    entry: './server.js',
    target: 'node',
    output: {
        path: './build',
        filename: 'server.bundle.js'
    },
    node: {
      __dirname: false
    },
    externals: [nodeExternals()],
    module: {
      loaders: [ jsLoader, jsonLoader, cssLoader ]
    }
  };


if(argv.server) module.exports = serverConfig;
if(argv.client) module.exports = clientConfig;
