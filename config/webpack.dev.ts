import * as path from "path";
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

/** @type {import("webpack").Configuration} */
module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../build"),
  },
  devtool: "eval-source-map",
});
