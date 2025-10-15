const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const entryPath = "src";
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProd ? "production" : "development",
  entry: `./${entryPath}/js/index.js`,
  devtool: isProd ? "source-map" : "inline-source-map",
  output: {
    filename: isProd ? "out.[contenthash].js" : "out.js",
    path: path.resolve(__dirname, isProd ? "docs" : `${entryPath}/build`),
    publicPath: isProd ? "/CL_WeatherApp/" : "/",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, entryPath),
    },
    devMiddleware: {
      writeToDisk: true,
    },
    hot: true,
    compress: true,
    port: 3001,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: { postcssOptions: { plugins: [["autoprefixer"]] } },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        type: "asset/resource",
        generator: { filename: "images/[name][ext]" },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? "css/style.[contenthash].css" : "css/style.css",
    }),
  ],
  resolve: { extensions: [".js", ".jsx"] },
};
