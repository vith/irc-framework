// webpack v4
const path = require('path');

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: { main: './index_browser.js' },
  output: {
    path: path.resolve(__dirname),
    filename: 'browser.js',
    // library: 'irc-framework',
    // libraryTarget: 'commonjs2',
    // umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        }
      },
    ]
  },
  plugins: [ ],
  optimization: {
    minimize: false
  },
  devtool: 'source-map'
};