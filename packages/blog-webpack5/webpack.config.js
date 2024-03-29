const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');
const path = require('path');

/**
 *@TODO
 * - hmr
 * - scss
 * - windicss or tailwindcsss
 * - svg png jpg json
 * - extends tsConfig eslintrc
 * ----------
 * - webpack merge
 * - vue-use
 * - useFetch
 */

module.exports = {
  entry: './src/main.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        // exclude: path.resolve(__dirname, "node_modules"),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        // exclude: path.resolve(__dirname, "node_modules"),
      },
    ],
  },
  mode: 'development',
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new WindiCSSWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};
