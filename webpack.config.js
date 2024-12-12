
import path from 'path';
import webpackNodeExternals from 'webpack-node-externals'

module.exports = {
  target: 'node',
  entry: './index.js',  
  output: {
    path: path.resolve('build'),
    filename: 'server.bundle.js',
  },
  externals: [webpackNodeExternals()], 
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
