var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
     entry: './front.js',
     output: {
         path: './.tmp/',
         filename: 'front.bundle.js'
     },
     module: {
         loaders: [
           {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
              presets: ['es2015', 'react']
            }
         },
         {
             test: /\.json$/,
             loader: 'json-loader'
         },
         {
           test: /\.css$/,
           loader: ExtractTextPlugin.extract("css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]")         
         }
       ]
     },
     plugins: [
        new ExtractTextPlugin("[name].css")
    ]
 };
