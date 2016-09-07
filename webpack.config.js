var ExtractTextPlugin = require("extract-text-webpack-plugin");
var nodeExternals = require('webpack-node-externals');

var jsLoader = {
  test: /\.js$/,
  loader: 'babel-loader',
  query: {
   presets: ['es2015', 'react']
  }
};

var jsonLoader = {
  test: /\.json$/,
  loader: 'json-loader'
};


var clientConfig = {
    name: 'client',
    entry: './client.js',
    output: {
       path: './.tmp/',
       filename: 'client.bundle.js'
    },
    module: {
       loaders: [
         jsLoader,
         jsonLoader,
         {
           test: /\.css$/,
           loader: ExtractTextPlugin.extract("css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader")
         }
       ]
    },
    postcss: function(webpack) {
        return {
            plugins: [
              require("postcss-import")(),
              require("postcss-url")(),
              require("postcss-cssnext")()
            ]
        };
    },
    plugins: [ new ExtractTextPlugin("style.bundle.css") ]
 };

 var serverConfig = {
    name: 'server',
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
      loaders: [
        jsLoader,
        jsonLoader,
        {
          test: /\.css$/,
          loader: "css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
        }
      ]
    }
  };


module.exports = [clientConfig, serverConfig];
