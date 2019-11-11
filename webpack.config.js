const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const DotEnv = require('dotenv-webpack');

module.exports = (env) => {
  let plugins = [
    new ExtractTextPlugin("/css/[name][hash].css"),
    new DotEnv({
      systemvars: true
    })
  ]
  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname})
    )
  }

  return {
    mode: 'production',
    entry: {
      home: ['babel-polyfill', path.join(__dirname, 'src/App.js')],
    },
    output: {
      filename: 'js/[name][hash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '../../dist/',
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    devServer: {
      historyApiFallback: true,
    },
    node: {
      fs: 'empty',
    },
    optimization: {
      splitChunks: {
        chunks: 'async',
        name: true,
        cacheGroups: {
          vendors: {
            name: 'vendors',
            chunks: 'all',
            reuseExistingChunk: true,
            priority: 1,
            filename: 'js/vendor-[hash].js',
            enforce: true,
            test(module, chunks) {
              const name = module.nameForCondition && module.nameForCondition();
              return chunks.some(chunks => chunks.name !== 'vendor' && /[\\/]node_modules[\\/]/.test(name));
            },
          },
        },
      },
    },
    // devServer: {
    //   port: 9000,
    //   publicPath: path.resolve(__dirname, '/'),
    //   contentBase: path.join(__dirname, '/dist/'),
    //   open: true,
    // },
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
              "@babel/plugin-proposal-class-properties",
              "emotion"
            ]
          }
        },
        // usar para produccion.
        {
          test: /\.css$/,
          exclude: /(node_modules|bower_components)/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                // options: {
                //   minimize: true,
                //   modules: true
                // }
              },
              {
                loader: "resolve-url-loader"
              }
            ]
          })
        },
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
    plugins
  }
}

