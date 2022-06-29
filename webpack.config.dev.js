const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack'); 

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: 'assets/images/[hash][ext][query]'
  },
  mode: 'development',
  // watch: true,
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      // '@nombre_del_alias': path.resolve(__dirname, 'ruta/de/carpetas/'),
    }
  },
  // devServer: {
  //   port: 5000
  // },
  module: {
    loaders: [
      {
        test: /\.php$/,
        loaders: [
          'html-minify',
          'php-loader'
        ]
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.s?css|.styl|.sass$/i,
        use: [MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'stylus-loader',
          'sass-loader']
      },
      {
        test: /\.php$/,
        type: "asset/resource",
        generator: {
          filename: 'assets/utils/[name][ext]',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: 'assets/images/[name][contenthash][ext][query]',
        },
      },
      {
        test: /\.(pdf|docx)$/i,
        type: "asset/resource",
        generator: {
          filename: 'assets/docs/[name][contenthash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][contenthash][ext][query]',
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    inject: true,
    template: './public/index.html',
    filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: "assets"
        }
      ],
    }),
    new Dotenv(),
  ],
}