const path = require("path");

module.exports = {
  mode: "development",
  entry: { app: "./src/index.ts" },

  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", { loader: "css-loader", options: { url: false } }]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },

  output: {
    path: path.join(__dirname, "www/js"),
    filename: "app.js"
  },

  devtool: "inline-source-map",

  devServer: {
    open: true,
    openPage: "index.html",
    contentBase: path.join(__dirname, "www"),
    watchContentBase: true,
    port: 8080
  }
};
