var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  context: __dirname,
  entry: ['./app/index.js'],
  output: {
    path: path.join(__dirname + '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: '/node_modules/', loader: 'babel-loader'},
      {test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      },
      {test: /\.svg$/, loader: 'file-loader'},
      {test: /\.json$/, loader: 'json-loader'}
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
