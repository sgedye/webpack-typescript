const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode,
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    // publicPath: "build",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        type: "asset/resource",
        include: [path.resolve(__dirname, "src/assets")],
      },
      {
        test: /\.(woff(2)?|eot|tff|otf|svg)$/,
        type: "asset/inline",
        include: [path.resolve(__dirname, "src/assets")],
      },
      // {
      //   test: /\.(ts|js)x?$/,
      //   use: "babel-loader",
      // },
      // ],
      // rules: [
      // {
      //   test: /\.jsx?$/i,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: [
      //         "@babel/preset-env",
      //         "@babel/preset-react",
      //         "@babel/preset-typescript",
      //       ],
      //     },
      //   },
      // },
    ],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname),
      src: path.resolve(__dirname, "src"),
    },
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  // devServer: {
  //   publicPath: "/public/",
  // },
  devtool: "eval-source-map",
};
