const path = require("path");

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: "bundle.js"
  },
  watch: true,
  mode: 'development',
  module: {
    rules: [{
     test: /\.jsx?$/,
     exclude: /node_modules/,
     use: {
       loader: 'babel-loader',
       options: {
         presets: ['@babel/preset-env', '@babel/preset-react']
       }
     }
   }]
  }
};