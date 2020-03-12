const path = require("path");
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: { src: "./src/index.js" },
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  mode: "development",
  devServer: {
    // contentBase: "/src/",
    publicPath: "/build",
    proxy: {
      "/": "http://localhost:3000"
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
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff2?)$/,
        loader: "url-loader"
      }
    ]
  }
  // plugins: [
  //   new HtmlWebPackPlugin({
  //     template: "./src/index.html",
  //     filename: "./index.html"
  //   }),
  //   new CopyPlugin([{ from: "./src/style.scss" }])
  // ]
};

// const path = require("path");
// const webpack = require("webpack");

// module.exports = {
//   entry: "./src/index.js",
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: "babel-loader",
//         options: { presets: ["@babel/preset-env"] }
//       },
//       {
//         test: /\.scss$/,
//         use: ["style-loader", "css-loader", "sass-loader"]
//       }
//     ]
//   },
//   resolve: { extensions: ["*", ".js", ".jsx"] },
//   output: {
//     path: path.resolve(__dirname, "dist/"),
//     publicPath: "/dist/",
//     filename: "bundle.js"
//   },
//   devServer: {
//     contentBase: path.join(__dirname, "client/"),
//     port: 3000,
//     publicPath: "http://localhost:3000/dist/",
//     hotOnly: true
//   },
//   plugins: [new webpack.HotModuleReplacementPlugin()]
// };
