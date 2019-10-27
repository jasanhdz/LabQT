const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DotEnv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: {
    home: ['babel-polyfill', path.join(__dirname, 'src/App.js')],
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '../../dist/',
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  devServer: {
    port: 3000,
    publicPath:  path.resolve(__dirname, '/dist/'),
    contentBase: path.join(__dirname, '/public/'),
    open: true,
    historyApiFallback: true,
  },
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-proposal-object-rest-spread",
            "@babel/plugin-proposal-class-properties"
          ]
        }
      },
      // Solo para desarrollo
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      // usar para produccion.
      // {
      //   test: /\.css$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: "css-loader"
      //   })
      // },
      {
        test: /\.(jpg|png|gif|wof|eot|ttf|svg)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: 'images/[name].[hash].[ext]'
          }
        }
      },
      {
        test: /\.woff(2)?(\?[a-z0-9]+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("/css/[name][hash].css"),
    new DotEnv({
      systemvars: true
    })
  ]
}