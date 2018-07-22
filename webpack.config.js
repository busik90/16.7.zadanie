const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      OptimizeJsPlugin = require('optimize-js-plugin');

const plugins = [new HtmlWebpackPlugin({
  template: 'src/index.html',
  filename: 'index.html',
  inject: 'body'
})];

//webpack.config.js
module.exports = (env) => {
  const environment = env || 'production';

  if (environment === 'production') {
    plugins.push(
      new OptimizeJsPlugin({
        sourceMap: false
      })
    )
  }

  return {
    mode: environment,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: './app.' + environment + '.js'
    },

    plugins,
    
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          options: {
            plugins: env !== 'production' ? ["react-hot-loader/babel"] : []
          }
        },

        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader'},
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            }
          ]
        }
      ]
    }
  }
};