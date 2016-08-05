'use strict';

var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");


var ROOT_PATH = path.resolve(__dirname);
var SRC_DIR = 'src';


//定义各入口JS路径
var paths = {
    src: path.join(ROOT_PATH, SRC_DIR),
  }


module.exports ={

  entry: {
    index: path.join(paths.src, 'index.js'),
    app: path.join(paths.src, 'app/index.js')

  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },

  module: {
      loaders: [
        {
          test: /\.js$/,
          // exclude: /(node_modules|bower_components)/,
          loader: ["babel-loader"],
          query: {},
          blackList:[]
        },
        {
          test: /\.css$/,
          loader: "style!css"
        },

      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}

      ]
  },
  plugins: [
    new CommonsChunkPlugin({
      name: "commons",
      // (the commons chunk name)

      filename: "commons.js",
      // (the filename of the commons chunk)

      // minChunks: 3,
      // (Modules must be shared between 3 entries)

       chunks: [],
      // (Only use these entries)
    })

  ],

}
