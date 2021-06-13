import * as path from "path";
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

/** @type {import("webpack").Configuration} */
module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].[contenthash].bundle.min.js",
    path: path.resolve(__dirname, "../build"),
    publicPath: "/",
    // assetModuleFilename: "assets/[name].[contenthash][ext]",
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});
