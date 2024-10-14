const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name]-[fullhash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    new MiniCssExtractPlugin({
      filename: '[name]-[fullhash].css',
    }),

    new CopyPlugin({
      patterns: [{ from: 'img', to: 'img' }],
    }),
  ],

  devServer: {
    port: 8080,
    static: {
      directory: join(__dirname, 'dist'),
    },
  },

  devtool: 'inline-source-map',
};
