var debug   = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path    = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./js/client.js",
  module: {
    rules: [{
      test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react',
            [
              "@babel/preset-env",
              {
                "useBuiltIns": "usage"
              }
            ]]
          }
        }]
      },
      {
        // 追記
        test: /\.(jpg|png)$/,
        loaders: 'url-loader'
      },
    ]
    },
    devServer: {
      historyApiFallback: true,
      contentBase: 'www',
      port: 4000,
      inline: true,
      proxy:{
        '/sockjs-node/':{
          target: "https://kyuki3rain.com",
        }
      }
    },
    output: {
      path: __dirname + "/src/",
      filename: "client.min.js"
    },
    plugins: debug ? [] : [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};