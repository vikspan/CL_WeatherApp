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
    publicPath: "./",
    clean: true,
  },
  devServer: {
    open: true,
    hot: true,
    static: [
      {
        directory: path.join(__dirname, entryPath),
        publicPath: "/",
        serveIndex: true,
      },
    ],
    devMiddleware: {
      writeToDisk: true,
    },
    compress: true,
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: { plugins: [["autoprefixer"]] },
            },
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
      filename: "index.html",
      template: path.join(entryPath, "index.html"),
      inject: "body", // allow it to inject script tags
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? "css/style.[contenthash].css" : "css/style.css",
    }),
  ],
  resolve: { extensions: [".js", ".jsx"] },
};
