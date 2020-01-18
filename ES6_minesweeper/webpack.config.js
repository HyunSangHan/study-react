const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/game.js", "./src/css/styles.css"],
  output: {
    filename: "index.js",
    path: path.resolve("./dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg)$/,
        loader: "file-loader",
        options: {
          publicPath: "./dist/",
          name: "[name].[ext]?[hash]"
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin({
      banner: `Built by HYUNSANG HAN at: ${new Date().toLocaleString()}`
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true,
              removeComments: true
            }
          : false,
      hash: true
    })
  ],
  devServer: {
    hot: true,
    writeToDisk: true,
    open: true
    }
}
