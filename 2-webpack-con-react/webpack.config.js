const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  //...
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
            presets: ["@babel/preset-react"] 
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};