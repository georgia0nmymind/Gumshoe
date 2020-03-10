const path = require("path");
module.exports = {
  entry: "./client/index.html",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: "/build/",
    proxy: {
      "/api": "http://localhost:3000"
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
};
