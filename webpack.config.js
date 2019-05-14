const webpack = require("webpack");

module.exports = {
  entry: {
    "bundle": "./main.js",
    "bundle.min": "./main.js",
  },
  devtool: "source-map",
  output: {
    path: "./dist",
    filename: "main.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};