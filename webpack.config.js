const path = require("path");
const webpack = require("webpack");

module.exports = (env) => ({
  entry: "./src/js/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        //options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.ttf$/,
        use: 
        [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './fonts',
            },
          }
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader',
      },
    ]
  },
  resolve: { 
    extensions: ["*", ".js", ".jsx"] 
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    filename: "bundle.js"
  },
  //devServer: {
  //  contentBase: path.join(__dirname, "public/"),
  //  port: 3000,
  //  publicPath: "http://192.168.43.123:3000/dist/",
  //  hotOnly: true
  //},
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    publicPath: "/air-monitor/",
    host: 'localhost',
    port: 8080,
    disableHostCheck: true,
    hotOnly: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.BUILD_TYPE": JSON.stringify(env.BUILD_TYPE || "dev")
    })
  ],
  optimization: {
    minimize: true
  }
})