const path = require('path');
const SRC_DIR = path.join(__dirname, './client/src');
const DIST_DIR = path.join(__dirname, './client/dist');

module.exports = {
  mode: 'development',
  entry: ['regenerator-runtime/runtime.js', `${SRC_DIR}/index.js`],
  devtool: 'eval-source-map',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
